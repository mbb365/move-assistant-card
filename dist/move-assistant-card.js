const Up = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Yp = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs.tfPhonePegs .wbItem:is([data-xl],[data-size=tile]){grid-row:span 3}#app.tfWeatherOpen .tfBento.tfPhonePegs .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfWeatherOpen .tfBento.tfPhonePegs .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}`, Zp = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}`, Kp = `<main id="app"><div class="shell">
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
`, xn = {
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
}, bn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, hc = (n, d, i) => n + (d - n) * i, Yd = (n) => {
  const d = String(n || "#000000").trim().replace("#", ""), i = d.length === 3 ? d.split("").map((u) => u + u).join("") : d;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, $p = (n) => "#" + n.map((d) => Math.round(Math.max(0, Math.min(255, d))).toString(16).padStart(2, "0")).join(""), mc = {}, Je = (n, d, i) => {
  const u = n + d + i;
  return mc[u] || (mc[u] = $p(Yd(n).map((v, y) => v + (Yd(d)[y] - v) * i)));
}, gc = {}, id = (n) => gc[n] || (gc[n] = Yd(n)), Ld = (n, d, i, u) => (v) => {
  if (v <= 0) return 0;
  if (v >= 1) return 1;
  let y = 0, k = 1, E = v;
  for (let S = 0; S < 18; S++)
    E = (y + k) / 2, 3 * (1 - E) * (1 - E) * E * n + 3 * (1 - E) * E * E * i + E * E * E < v ? y = E : k = E;
  return 3 * (1 - E) * (1 - E) * E * d + 3 * (1 - E) * E * E * u + E * E * E;
}, Xp = { std: Ld(0.2, 0, 0, 1), acc: Ld(0.3, 0, 1, 1), dec: Ld(0, 0, 0, 1) };
function fd(n, d) {
  const i = String(n || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || d ? "night" : "day");
}
function up(n) {
  const d = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return d.partly = [Je(d.clear[0], d.cloudy[0], 0.12), Je(d.clear[1], d.cloudy[1], 0.12)], d.storm = [Je(d.rain[0], "#000000", 0.22), Je(d.rain[1], "#000000", 0.22)], d;
}
const Zd = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Kd = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], $d = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Xd(n, d = xn) {
  const i = { ...xn, ...d }, u = up(i), v = String(n).split("/"), y = u[v[0]] ? v[0] : "clear", k = v[1] === "night", E = u[y][k ? 1 : 0], S = {
    night: k,
    clearness: y === "clear" ? 1 : y === "partly" ? 0.7 : 0.25,
    sky: E,
    skyStops: [E],
    skyT: 0,
    sun: { x: 45, y: k ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: k ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: k ? 1 : 0 },
    stars: Zd.map(() => ({ o: 0 })),
    rain: Kd.map(() => ({ o: 0, dy: -16 })),
    snow: $d.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, B = (Mt) => Zd.map(() => ({ o: Mt }));
  return y === "clear" ? k ? (S.moon.o = 1, S.stars = B(1)) : S.sun.o = 1 : y === "partly" ? (S.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: k ? 1 : 0 }, k ? (S.moon = { x: 34, y: 33, d: 48, o: 1 }, S.stars = B(0.7)) : S.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : y === "cloudy" || y === "fog" ? (S.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: k ? 1 : 0 }, k ? S.moon = { x: 40, y: 36, d: 40, o: 0 } : S.sun = { x: 40, y: 36, r: 20, o: 0 }) : (S.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, k ? S.moon = { x: 38, y: 28, d: 36, o: 0 } : S.sun = { x: 38, y: 28, r: 18, o: 0 }, y === "snow" ? S.snow = $d.map(() => ({ o: 1, dy: 0 })) : S.rain = Kd.map((Mt, ht) => ({ o: y === "storm" && ht === 1 ? 0 : 1, dy: 0 })), y === "storm" && (S.bolt = { o: 1, dy: 0 })), S;
}
const vc = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Jp(n, d, i, u = xn, v = !1) {
  const y = { ...xn, ...u }, k = ($, tt) => $ > 0.01 && tt > 0.01 ? "stay" : $ > 0.01 ? "leave" : tt > 0.01 ? "enter" : "none", E = ($, tt, st, et) => {
    const U = $[0] + tt * et, z = $[1] - (st - 1 - tt) * et;
    return Xp[$[2]](bn((i - U) / Math.max(1e-3, z - U)));
  }, S = ($, tt, st, et = 0, U = 1, z = 0) => {
    const pt = k($.o, tt.o);
    if (pt === "none") return { ...tt, o: 0 };
    const ct = E(vc[st][pt], et, U, z), xt = {};
    for (const Q in tt) xt[Q] = v && pt !== "stay" && Q !== "o" ? pt === "leave" ? $[Q] : tt[Q] : hc($[Q], tt[Q], ct);
    return xt;
  }, B = E(vc.sky, 0, 1, 0);
  let Mt, ht;
  if (n.night !== d.night) {
    const $ = Math.min(n.clearness, d.clearness), tt = Je(Je(n.sky, d.sky, 0.5), y.dusk, 0.6 * $);
    Mt = B < 0.5 ? Je(n.sky, tt, B * 2) : Je(tt, d.sky, B * 2 - 1), ht = $ > 0.5 ? [n.sky, y.dusk, d.sky] : [n.sky, d.sky];
  } else
    Mt = Je(n.sky, d.sky, B), ht = [n.sky, d.sky];
  return {
    night: i < 0.5 ? n.night : d.night,
    clearness: hc(n.clearness, d.clearness, i),
    sky: Mt,
    skyStops: ht,
    skyT: B,
    sun: S(n.sun, d.sun, "body"),
    moon: S(n.moon, d.moon, "body"),
    cloud: S(n.cloud, d.cloud, "cloud"),
    stars: d.stars.map(($, tt) => S(n.stars[tt], $, "fx", tt, d.stars.length, 0.05)),
    rain: d.rain.map(($, tt) => S(n.rain[tt], $, "fx", tt, d.rain.length, 0.05)),
    snow: d.snow.map(($, tt) => S(n.snow[tt], $, "fx", tt, d.snow.length, 0.05)),
    bolt: S(n.bolt, d.bolt, "fx")
  };
}
const Qp = [
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
], vn = (n, d) => (Qp[(d & 7) * 8 + (n & 7)] + 0.5) / 64, tu = 0, tc = 1, ec = 2, ac = 3, nc = 4, gn = 5, Rs = 6, or = 7, oc = 8, ld = (n, d) => d <= 0.6665 && ((n - 0.5) * (n - 0.5) + (d - 0.2877) * (d - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (d - 0.416) * (d - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (d - 0.458) * (d - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && d >= 0.416), eu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], au = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), fp = (n, d, i) => {
  let u = !1;
  for (let v = 0, y = n.length - 1; v < n.length; y = v++) {
    const k = n[v], E = n[y];
    k[1] > i != E[1] > i && d < (E[0] - k[0]) * (i - k[1]) / (E[1] - k[1]) + k[0] && (u = !u);
  }
  return u;
};
function hp(n, { size: d = 90, px: i = 2, oneBit: u = !1, colors: v = xn, ink: y = "#26221e", paper: k = "#fbf9f6", clock: E = 0, idle: S = !1 } = {}) {
  const B = { ...xn, ...v }, Mt = Math.sin, ht = Math.PI * 2, $ = Math.max(6, Math.round(d / i)), tt = $ / 90, st = S ? Math.floor(E / 100) * 100 : 0, et = S ? Mt(ht * st / 3600) : 0, U = S ? 1.8 * Mt(ht * st / 6400) : 0, z = S ? 0.9 * Mt(ht * st / 4100) : 0, pt = S ? 0.8 * Mt(ht * st / 5200) : 0, ct = st / 3400 % 1, xt = S && n.bolt.o > 0.5 && (ct < 0.04 || ct > 0.08 && ct < 0.11), Q = new Array($ * $), ot = new Uint8Array($ * $), L = (C, D, _, P, gt) => {
    _ == null || C < 0 || D < 0 || C >= $ || D >= $ || (P >= 1 || P > vn(C + 5, D + 3)) && (Q[D * $ + C] = _, ot[D * $ + C] = gt);
  }, G = (C, D, _, P) => {
    for (let gt = Math.max(0, Math.floor(D - _) - 1); gt <= Math.min($ - 1, D + _ + 1); gt++) for (let mt = Math.max(0, Math.floor(C - _) - 1); mt <= Math.min($ - 1, C + _ + 1); mt++) P(mt, gt, mt + 0.5 - C, gt + 0.5 - D);
  }, Lt = n.skyStops || [n.sky], X = n.skyT || 0;
  for (let C = 0; C < $; C++) {
    const D = n.night ? bn(1 - (C + 0.5) / ($ * 0.7)) * 0.85 : bn(((C + 0.5) / $ - 0.35) / 0.65) * 0.85;
    for (let _ = 0; _ < $; _++) {
      let P = Lt[0];
      if (Lt.length > 1) {
        const gt = X * (Lt.length - 1), mt = Math.min(Lt.length - 2, Math.floor(gt));
        P = gt - mt > vn(_, C) ? Lt[mt + 1] : Lt[mt];
      }
      D > vn(_ + 2, C + 5) && (P = n.night ? Je(P, "#000000", 0.28) : Je(P, "#ffffff", 0.2)), Q[C * $ + _] = xt ? Je(P, "#ffffff", 0.25) : P;
    }
  }
  if (n.sun.o > 0.01) {
    const C = n.sun.x * tt, D = n.sun.y * tt, _ = Math.max(1, n.sun.r * tt);
    if (S) {
      const P = _ * (1.45 + 0.06 * et), gt = Je(B.sun, "#ffffff", 0.55);
      if (G(C, D, P, (mt, V, yt, Tt) => {
        const te = Math.sqrt(yt * yt + Tt * Tt);
        te > _ && te < P && L(mt, V, gt, 0.26 * (1 - (te - _) / (P - _)) * n.sun.o, tu);
      }), n.sun.o > 0.5) {
        const mt = Math.floor(st / 500) % 2, V = Math.max(1, _ * 0.22);
        for (let yt = 0; yt < 8; yt++) if (yt % 2 === mt) for (let Tt = _ + 1.5; Tt < _ + 1.5 + V; Tt += 0.7) L(Math.floor(C + Math.cos(yt * Math.PI / 4) * Tt), Math.floor(D + Math.sin(yt * Math.PI / 4) * Tt), B.sun, n.sun.o, oc);
      }
    }
    G(C, D, _, (P, gt, mt, V) => {
      if (mt * mt + V * V > _ * _) return;
      const yt = ((mt * 0.643 + V * 0.766) / _ + 1) / 2;
      L(P, gt, bn((yt - 0.62) / 0.38) > vn(P, gt) ? B.sunEdge : B.sun, n.sun.o, tc);
    });
  }
  if (Zd.forEach((C, D) => {
    const _ = n.stars[D].o;
    if (_ < 0.01) return;
    const P = Math.floor(C[0] * tt), gt = Math.floor(C[1] * tt), mt = S ? (Math.floor(st / 300) + D * 3) % 6 : 0;
    if (mt === 5) return;
    const V = Math.round(C[2] * tt * (mt === 4 ? 0.3 : mt < 2 ? 1 : 0.6));
    L(P, gt, B.star, _, or);
    for (let yt = 1; yt <= V; yt++) {
      const Tt = yt === V && V > 1 ? Je(B.star, n.sky, 0.5) : B.star;
      L(P - yt, gt, Tt, _, or), L(P + yt, gt, Tt, _, or), L(P, gt - yt, Tt, _, or), L(P, gt + yt, Tt, _, or);
    }
  }), n.moon.o > 0.01) {
    const C = Math.max(1.5, n.moon.d * tt * 0.37), D = n.moon.x * tt, _ = n.moon.y * tt + (S && pt > 0.4 ? -1 : 0), P = D + 0.547 * C, gt = _ - 0.503 * C, mt = 0.82 * C, V = Je(B.moon, "#ffffff", 0.6);
    G(D, _, C, (yt, Tt, te, le) => {
      if (te * te + le * le > C * C) return;
      const ea = yt + 0.5 - P, Se = Tt + 0.5 - gt;
      ea * ea + Se * Se <= mt * mt || L(yt, Tt, bn((le + C) / (2 * C) * 1.1 - 0.1) > vn(yt, Tt) ? B.moon : V, n.moon.o, ec);
    });
  }
  const kt = Math.max(2, Math.round(15.65 * tt)), J = Math.max(1, Math.round(5.87 * tt * 0.5));
  Kd.forEach((C, D) => {
    const _ = n.rain[D];
    let P = _.dy, gt = _.o;
    if (gt < 0.01) return;
    if (S) {
      const yt = (st / 950 + D / 3) % 1;
      P += -5 + yt * 14, gt *= yt < 0.18 ? yt / 0.18 : yt > 0.72 ? (1 - yt) / 0.28 : 1;
    }
    const mt = (C[0] + 3 + U) * tt, V = (C[1] + P) * tt;
    for (let yt = 0; yt < kt; yt++) for (let Tt = 0; Tt < J; Tt++) L(Math.floor(mt - 0.208 * yt) + Tt, Math.floor(V) + yt, B.rain, gt, nc);
  });
  const Vt = Math.max(0, Math.round(7.34 * tt / 2.6));
  if ($d.forEach((C, D) => {
    const _ = n.snow[D];
    let P = _.dy, gt = 0, mt = _.o;
    if (mt < 0.01) return;
    if (S) {
      const Tt = (st / 3200 + D / 5) % 1;
      P += -6 + Tt * 14, gt = 1.5 * Mt(ht * (Tt * 1.5 + D / 5)), mt *= Tt < 0.2 ? Tt / 0.2 : Tt > 0.75 ? (1 - Tt) / 0.25 : 1;
    }
    const V = Math.floor((C[0] + 3.67 + gt + U) * tt), yt = Math.floor((C[1] + 3.67 + P) * tt);
    L(V, yt, B.snow, mt, gn);
    for (let Tt = 1; Tt <= Vt; Tt++)
      L(V - Tt, yt, B.snow, mt, gn), L(V + Tt, yt, B.snow, mt, gn), L(V, yt - Tt, B.snow, mt, gn), L(V, yt + Tt, B.snow, mt, gn), Vt > 1 && Tt < Vt && (L(V - Tt, yt - Tt, B.snow, mt, gn), L(V + Tt, yt - Tt, B.snow, mt, gn), L(V - Tt, yt + Tt, B.snow, mt, gn), L(V + Tt, yt + Tt, B.snow, mt, gn));
  }), n.bolt.o > 0.01)
    if ($ >= 30) {
      const C = 39 + U, D = 50 + n.bolt.dy;
      for (let _ = Math.floor(D * tt); _ <= (D + 28) * tt; _++) for (let P = Math.floor(C * tt); P <= (C + 13) * tt; P++)
        fp(au, (P + 0.5) / tt - C, (_ + 0.5) / tt - D) && L(P, _, B.sun, n.bolt.o, Rs);
    } else {
      const C = $ / 18, D = 7, _ = 10 + Math.round(n.bolt.dy * 0.2);
      eu.forEach((P, gt) => P.split("").forEach((mt, V) => {
        if (mt !== "#") return;
        const yt = Math.floor((D + V) * C), Tt = Math.floor((_ + gt) * C);
        for (let te = Tt; te < Math.max(Tt + 1, Math.floor((_ + gt + 1) * C)); te++) for (let le = yt; le < Math.max(yt + 1, Math.floor((D + V + 1) * C)); le++) L(le, te, B.sun, n.bolt.o, Rs);
      }));
    }
  if (n.cloud.o > 0.01) {
    const C = Math.max(3, n.cloud.w * tt), D = C * 0.6665, _ = (n.cloud.x + U) * tt - C / 2, P = (n.cloud.y + z) * tt - D / 2, gt = Je(B.cloudDay, B.cloudNight, Math.round(n.cloud.f * 4) / 4), mt = Je(gt, "#000000", 0.16);
    for (let V = Math.max(0, Math.floor(P) - 1); V <= Math.min($ - 1, P + D + 1); V++) for (let yt = Math.max(0, Math.floor(_) - 1); yt <= Math.min($ - 1, _ + C + 1); yt++) {
      const Tt = (yt + 0.5 - _) / C, te = (V + 0.5 - P) / C;
      ld(Tt, te) && L(yt, V, !ld(Tt, te + 1 / C) || bn((te - 0.42) / 0.25) * 0.8 > vn(yt, V) ? mt : gt, n.cloud.o, ac);
    }
  }
  return mp(Q, ot, $, $, { oneBit: u, ink: y, paper: k, snowInk: !n.night });
}
function mp(n, d, i, u, { oneBit: v, ink: y, paper: k, snowInk: E }) {
  const S = new Uint8ClampedArray(i * u * 4), B = id(y), Mt = id(k);
  for (let ht = 0; ht < u; ht++) for (let $ = 0; $ < i; $++) {
    const tt = ht * i + $, st = d[tt];
    if (n[tt] == null) continue;
    let et = id(n[tt]);
    if (v) {
      let U;
      st === nc || st === oc ? U = !0 : st === gn ? U = E : st === or || st === Rs ? U = !1 : U = Math.round((0.2126 * et[0] + 0.7152 * et[1] + 0.0722 * et[2]) / 255 * 4) / 4 <= vn($, ht), (st === tc || st === ec || st === ac || st === Rs) && ($ > 0 && d[tt - 1] !== st || $ < i - 1 && d[tt + 1] !== st || ht > 0 && d[tt - i] !== st || ht < u - 1 && d[tt + i] !== st) && (U = !0), et = U ? B : Mt;
    }
    S[tt * 4] = et[0], S[tt * 4 + 1] = et[1], S[tt * 4 + 2] = et[2], S[tt * 4 + 3] = 255;
  }
  return { w: i, h: u, data: S };
}
const nu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, ou = (n) => fd(n, !1).split("/")[0], Ad = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let d = Math.imul(n ^ n >>> 15, 1 | n);
  return d = d + Math.imul(d ^ d >>> 7, 61 | d) ^ d, ((d ^ d >>> 14) >>> 0) / 4294967296;
}, iu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", ru = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", su = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", lu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", du = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], cu = [".##", "##.", ".#.", "#.."];
function gp(n, { width: d, height: i, colors: u, wave: v = 0.38, soft: y = 6, glow: k = 0.6 }) {
  const E = { ...xn, dawn: "#e5a77e", ...u }, S = up(E), B = d, Mt = i, ht = B / 6, $ = ht / 2, tt = Math.PI * 2, st = n.length ? n : [{ cond: "cloudy", night: !1 }], et = [...Array(12)].map((ct, xt) => {
    const Q = st[Math.min(xt, st.length - 1)], ot = ou(Q.cond), L = xt % 2 === 1;
    return { cond: Q.cond, k: ot, night: L, sky: S[ot][L ? 1 : 0], cover: nu[ot] };
  }), U = (ct) => Mt * (0.5 - v * Math.cos(tt * (ct / ht - 0.25)));
  return { C: E, S: et, W: B, H: Mt, cw: ht, sw: $, TAU: tt, yb: U, side: (ct, xt, Q) => {
    const ot = (ct ? U(xt) - Q : Q - U(xt)) / Math.max(3, y * 1.4) + 0.5;
    return ot <= 0 ? 0 : ot >= 1 ? 1 : ot;
  }, glowAt: (ct) => {
    const xt = ((ct / ht - 0.25) % 1 + 1) % 1, Q = Math.max(0, Math.min(5, Math.round(ct / ht - 0.25))), ot = Math.max(0, Math.min(5, Math.round(ct / ht - 0.75))), L = 1 - (et[2 * Q].cover + et[2 * ot + 1].cover) / 2, G = Math.sin(Math.PI * Math.min(1, Math.max(0, U(ct) / Mt)));
    return { c: xt < 0.5 ? E.dusk : E.dawn, a: k * (0.2 + 0.8 * L) * G * G };
  }, soft: y, tw: ht * 0.3, sy: Mt / 90 };
}
function vp(n, { clock: d = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: v, sw: y, side: k, C: E, TAU: S, sy: B } = n, Mt = d, ht = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return v.forEach(($, tt) => {
    const st = Ad(u * 977 + tt * 131 + 7), et = (tt + 0.5) * y, U = $.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[$.k] : 0;
    for (let z = 0; z < U; z++) {
      const pt = et + (st() - 0.5) * y * 1.6, ct = (6 + st() * 76) * B, xt = st() < 0.35, Q = 1.8 + st() * 1.6, ot = k(!0, pt, ct) * (xt ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(S * Mt / 2600 + z * 1.7 + tt) : 1);
      ot >= 0.03 && ht.stars.push({ x: pt, y: ct, big: xt, size: Q, o: ot });
    }
    if (!$.night && ($.k === "clear" || $.k === "partly")) {
      const z = et + (st() - 0.5) * y * 0.3, pt = Math.min(15, y * 0.29);
      ht.suns.push({ x: z, y: 32 * B, rad: pt, halo: pt * 2.8 * (i ? 1 + 0.07 * Math.sin(S * Mt / 3600 + tt) : 1) });
    }
    if ($.night && ($.k === "clear" || $.k === "partly")) {
      const z = Math.min(0.78, y * 0.55 / 34), pt = et - 23 * z + (st() - 0.5) * y * 0.2;
      ht.moons.push({ x: pt + 23 * z, y: (4 + (i ? 0.8 * Math.sin(S * Mt / 5200 + tt) : 0)) * B + 23 * z, d: 46 * z });
    }
  }), v.forEach(($, tt) => {
    const st = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[$.k];
    if (!st) return;
    const et = Ad(u * 577 + tt * 71 + 3), U = (tt + 0.5) * y, z = $.k === "rain" || $.k === "storm" || $.night ? E.cloudNight : E.cloudDay, pt = $.night ? 0.82 : $.k === "storm" ? 0.75 : 1;
    for (let ct = 0; ct < st; ct++) {
      const xt = y / 46 * ($.k === "partly" ? 0.85 : 0.75 + et() * 0.55), Q = U + ($.k === "partly" ? y * 0.12 : (et() - 0.5) * y * 1.05), ot = ($.k === "partly" ? 40 : 6 + et() * 26) * B, L = i ? 2.5 * Math.sin(S * Mt / 9e3 + tt * 1.3 + ct * 2.1) : 0, G = i ? 0.9 * Math.sin(S * Mt / 6100 + tt + ct) : 0;
      ht.clouds.push({ x: Q - 23 * xt + L, y: ot - 15.33 * xt + G, w: 46 * xt, h: 30.66 * xt, fill: z, o: pt * (st > 1 && ct === 0 ? 0.85 : 1) });
    }
  }), v.forEach(($, tt) => {
    const st = Ad(u * 313 + tt * 29 + 11), et = (tt + 0.5) * y, U = $.cond === "pouring" ? 16 : $.cond === "rainy" || $.cond === "hail" ? 9 : $.cond === "lightning-rainy" ? 12 : $.cond === "snowy-rainy" ? 5 : 0;
    for (let pt = 0; pt < U; pt++) {
      let ct = et + (st() - 0.5) * y * 1.05, xt = 44 + st() * 36, Q = 1;
      if (i) {
        const L = ((xt - 44 + Mt * 0.04) % 36 + 36) % 36;
        ct -= 0.21 * (L - (xt - 44)), xt = 44 + L, Q = Math.min(1, L / 6, (36 - L) / 6);
      }
      xt *= B;
      const ot = k($.night, ct, xt) * Q;
      ot >= 0.05 && ht.drops.push({ x: ct, y: xt, o: ot });
    }
    const z = $.cond === "snowy" ? 11 : $.cond === "snowy-rainy" ? 6 : 0;
    for (let pt = 0; pt < z; pt++) {
      let ct = et + (st() - 0.5) * y * 1.05, xt = 40 + st() * 44, Q = 1;
      if (i) {
        const L = ((xt - 40 + Mt * 9e-3) % 44 + 44) % 44;
        xt = 40 + L, ct += 1.6 * Math.sin(S * Mt / 2800 + pt * 1.9 + tt), Q = Math.min(1, L / 6, (44 - L) / 6);
      }
      xt *= B;
      const ot = k($.night, ct, xt) * Q;
      ot >= 0.05 && ht.flakes.push({ x: ct, y: xt, o: ot });
    }
    if ($.k === "fog") {
      const pt = $.night ? "#c8ccd6" : "#ffffff", ct = $.night ? 0.28 : 0.62, xt = i ? 4 * Math.sin(S * Mt / 8e3 + tt) : 0;
      for (let Q = 0; Q < 4; Q++) ht.fogs.push({ x: et - y * 0.75 + Q % 2 * y * 0.18 + (Q % 2 ? xt : -xt), y: (30 + Q * 13) * B, w: y * 1.3, c: pt, a: ct });
    }
    if ($.k === "storm") {
      const pt = (Mt / 3400 + tt * 0.37) % 1;
      ht.bolts.push({ x: et + (st() - 0.5) * y * 0.3 - 5, y: 36 * B, o: i && !(pt < 0.05 || pt > 0.09 && pt < 0.12) ? 0.8 : 1 });
    }
  }), ht;
}
function pu(n, d, i, u, v, y, k, E) {
  const { S, C: B, cw: Mt, yb: ht, glowAt: $, soft: tt, tw: st, sy: et } = n, U = new Array(i * u), z = new Uint8Array(i * u), pt = new Uint8Array(i * u), ct = (C, D, _, P, gt) => {
    _ == null || C < 0 || D < 0 || C >= i || D >= u || (P >= 1 || P > vn(C + 5, D + 3)) && (U[D * i + C] = _, z[D * i + C] = gt);
  }, xt = (C, D, _, P) => {
    for (let gt = Math.max(0, Math.floor(D - _) - 1); gt <= Math.min(u - 1, D + _ + 1); gt++) for (let mt = Math.max(0, Math.floor(C - _) - 1); mt <= Math.min(i - 1, C + _ + 1); mt++) P(mt, gt, mt + 0.5 - C, gt + 0.5 - D);
  }, Q = (C, D, _) => {
    for (let gt = 0; gt < C.length - 1; gt++) {
      const mt = (gt + D) * Mt;
      if (_ < mt - st / 2) return [C[gt], C[gt], 0];
      if (_ <= mt + st / 2) return [C[gt], C[gt + 1], (_ - mt + st / 2) / st];
    }
    const P = C[C.length - 1];
    return [P, P, 0];
  }, ot = S.filter((C) => !C.night).map((C) => C.sky), L = S.filter((C) => C.night).map((C) => C.sky), G = tt / y, Lt = 16 * et / y;
  for (let C = 0; C < i; C++) {
    const D = (C + 0.5) * v, _ = ht(D) / y, P = Q(ot, 0.75, D), gt = Q(L, 1.25, D), mt = $(D);
    for (let V = 0; V < u; V++) {
      const yt = vn(C, V), Tt = V + 0.5 - _, te = (G > 0.01 ? bn(0.5 + Tt / G) : Tt > 0 ? 1 : 0) > yt;
      let le = te ? P[2] > yt ? P[1] : P[0] : gt[2] > yt ? gt[1] : gt[0];
      (te ? bn(((V + 0.5) / u - 0.45) / 0.55) * 0.7 : bn(1 - (V + 0.5) / (u * 0.55)) * 0.7) > vn(C + 2, V + 5) && (le = te ? Je(le, "#ffffff", 0.18) : Je(le, "#000000", 0.25)), te && Tt >= 0 && Tt < Lt && mt.a * 1.3 * (1 - Tt / Lt) > vn(C + 6, V + 1) && (le = mt.c), U[V * i + C] = le, pt[V * i + C] = te ? 0 : 1;
    }
  }
  const X = Je(B.sun, "#ffffff", 0.55), kt = Je(B.moon, "#ffffff", 0.6);
  d.stars.forEach((C) => {
    const D = Math.floor(C.x / v), _ = Math.floor(C.y / y);
    if (D < 0 || _ < 0 || D >= i || _ >= u || !pt[_ * i + D] || C.o < 0.15) return;
    const P = C.o > 0.45 ? B.star : Je(B.star, U[_ * i + D], 0.5), gt = C.big && C.o > 0.6 ? Math.floor(C.size / v) : 0;
    ct(D, _, P, 1, or);
    for (let mt = 1; mt <= gt; mt++) [[D - mt, _], [D + mt, _], [D, _ - mt], [D, _ + mt]].forEach((V) => {
      V[0] >= 0 && V[1] >= 0 && V[0] < i && V[1] < u && pt[V[1] * i + V[0]] && ct(V[0], V[1], P, 1, or);
    });
  }), d.suns.forEach((C) => {
    const D = Math.max(1.5, C.rad / v), _ = C.x / v, P = C.y / y, gt = C.halo / v * 0.85;
    if (xt(_, P, gt, (mt, V, yt, Tt) => {
      const te = Math.sqrt(yt * yt + Tt * Tt);
      te > D && te < gt && !pt[V * i + mt] && ct(mt, V, X, 0.3 * (1 - (te - D) / (gt - D)), 0);
    }), E) {
      const mt = Math.floor(k / 500) % 2, V = Math.max(1, D * 0.3);
      for (let yt = 0; yt < 8; yt++) if (yt % 2 === mt) for (let Tt = D + 1.2; Tt < D + 1.2 + V; Tt += 0.7) ct(Math.floor(_ + Math.cos(yt * Math.PI / 4) * Tt), Math.floor(P + Math.sin(yt * Math.PI / 4) * Tt), B.sun, 1, oc);
    }
    xt(_, P, D, (mt, V, yt, Tt) => {
      yt * yt + Tt * Tt <= D * D && ct(mt, V, bn(((Tt / D + 1) / 2 - 0.6) / 0.4) > vn(mt, V) ? B.sunEdge : B.sun, 1, tc);
    });
  }), d.moons.forEach((C) => {
    const D = Math.max(1.5, C.d * 0.37 / v), _ = C.x / v, P = C.y / y, gt = _ + 0.547 * D, mt = P - 0.503 * D, V = 0.82 * D;
    xt(_, P, D, (yt, Tt, te, le) => {
      if (te * te + le * le > D * D) return;
      const ea = yt + 0.5 - gt, Se = Tt + 0.5 - mt;
      ea * ea + Se * Se > V * V && ct(yt, Tt, bn((le + D) / (2 * D) * 1.1 - 0.1) > vn(yt, Tt) ? B.moon : kt, 1, ec);
    });
  }), d.clouds.forEach((C) => {
    const D = Math.max(3, C.w / v), _ = D * 0.6665, P = C.x / v, gt = C.y / y, mt = Je(C.fill, "#000000", 0.16);
    for (let V = Math.max(0, Math.floor(gt) - 1); V <= Math.min(u - 1, gt + _ + 1); V++) for (let yt = Math.max(0, Math.floor(P) - 1); yt <= Math.min(i - 1, P + D + 1); yt++) {
      const Tt = (yt + 0.5 - P) / D, te = (V + 0.5 - gt) / D;
      ld(Tt, te) && ct(yt, V, !ld(Tt, te + 1 / D) || bn((te - 0.42) / 0.25) * 0.8 > vn(yt, V) ? mt : C.fill, C.o, ac);
    }
  }), d.fogs.forEach((C) => {
    const D = Math.floor(C.y / y), _ = Math.max(D, Math.floor((C.y + 6 * et) / y) - 1), P = Math.floor(C.x / v), gt = Math.floor((C.x + C.w) / v);
    for (let mt = D; mt <= _; mt++) for (let V = P; V <= gt; V++) {
      const yt = (V - P) / Math.max(1, gt - P);
      ct(V, mt, C.c, C.a * (yt < 0.25 ? yt / 0.25 : yt > 0.75 ? (1 - yt) / 0.25 : 1), 0);
    }
  });
  const J = Math.max(2, Math.round(9 / y));
  d.drops.forEach((C) => {
    const D = C.x / v, _ = Math.floor(C.y / y);
    for (let P = 0; P < J; P++) ct(Math.floor(D - 0.208 * P * y / v), _ + P, B.rain, C.o, nc);
  });
  const Vt = Math.max(0, Math.round(4.4 / v / 2.6));
  return d.flakes.forEach((C) => {
    const D = Math.floor(C.x / v), _ = Math.floor(C.y / y);
    ct(D, _, B.snow, C.o, gn);
    for (let P = 1; P <= Vt; P++)
      ct(D - P, _, B.snow, C.o, gn), ct(D + P, _, B.snow, C.o, gn), ct(D, _ - P, B.snow, C.o, gn), ct(D, _ + P, B.snow, C.o, gn);
  }), d.bolts.forEach((C) => {
    if (v <= 3.5)
      for (let D = Math.floor(C.y / y); D <= (C.y + 24) / y; D++) for (let _ = Math.floor(C.x / v); _ <= (C.x + 11) / v; _++)
        fp(du, (_ + 0.5) * v - C.x, (D + 0.5) * y - C.y) && ct(_, D, B.sun, 1, Rs);
    else {
      const D = Math.round(C.x / v), _ = Math.round(C.y / y);
      cu.forEach((P, gt) => P.split("").forEach((mt, V) => {
        mt === "#" && ct(D + V, _ + gt, B.sun, 1, Rs);
      }));
    }
  }), { col: U, ids: z };
}
function uu(n, d) {
  const i = d.px, u = Math.max(6, Math.round(d.width / i)), v = Math.max(6, Math.round(d.height / i)), y = d.width / u, k = d.height / v, E = d.ambient ? Math.floor((d.clock || 0) / 100) * 100 : 0, S = (tt) => {
    const st = gp(tt, d);
    return pu(st, vp(st, { clock: E, ambient: d.ambient, seed: d.seed }), u, v, y, k, E, d.ambient);
  }, B = S(n), Mt = d.reveal == null ? 1 : bn(d.reveal);
  let ht = B.col, $ = B.ids;
  if (Mt < 1) {
    const tt = d.prev ? S(d.prev) : null, st = Mt * (u + 12);
    ht = new Array(u * v), $ = new Uint8Array(u * v);
    for (let et = 0; et < u * v; et++) {
      const U = et % u, z = et / u | 0;
      (d.reduce ? Mt : bn((st - U) / 12)) > vn(U, z) ? (ht[et] = B.col[et], $[et] = B.ids[et]) : tt ? (ht[et] = tt.col[et], $[et] = tt.ids[et]) : (ht[et] = null, $[et] = 255);
    }
  }
  return mp(ht, $, u, v, { oneBit: d.oneBit, ink: d.ink, paper: d.paper, snowInk: !1 });
}
function fu(n, d, i) {
  const u = i.width, v = i.height, y = i.reveal == null ? 1 : bn(i.reveal), k = ($, tt) => {
    const st = gp(tt, i);
    hu($, st, vp(st, i));
  };
  if (n.clearRect(0, 0, u, v), y >= 1) {
    k(n, d);
    return;
  }
  if (i.prev && k(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = y, k(n, d), n.restore();
    return;
  }
  const E = n.canvas, S = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (S.width !== E.width || S.height !== E.height) && (S.width = E.width, S.height = E.height);
  const B = S.getContext("2d");
  B.setTransform(n.getTransform()), B.clearRect(0, 0, u, v), k(B, d);
  const Mt = y * (u + 64) - 64, ht = B.createLinearGradient(Mt, 0, Mt + 64, 0);
  ht.addColorStop(0, "rgba(0,0,0,1)"), ht.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = ht, B.fillRect(0, 0, u, v), B.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(S, 0, 0), n.restore();
}
function hu(n, d, i) {
  const { W: u, H: v, S: y, C: k, cw: E, yb: S, glowAt: B, soft: Mt, tw: ht, sy: $ } = d, tt = (X, kt) => {
    const J = id(X);
    return "rgba(" + J[0] + "," + J[1] + "," + J[2] + "," + Math.max(0, Math.min(1, kt)).toFixed(3) + ")";
  }, st = (X, kt) => {
    const J = n.createLinearGradient(0, 0, u, 0);
    J.addColorStop(0, X[0]);
    for (let Vt = 0; Vt < X.length - 1; Vt++) {
      const C = (Vt + kt) * E, D = (C - ht / 2) / u, _ = (C + ht / 2) / u;
      D > 0 && D < 1 && J.addColorStop(D, X[Vt]), _ > 0 && _ < 1 && J.addColorStop(_, X[Vt + 1]);
    }
    return J.addColorStop(1, X[X.length - 1]), J;
  }, et = Math.max(24, Math.ceil(u / 4)), U = (X, kt) => {
    n.beginPath();
    for (let J = 0; J <= et; J++) {
      const Vt = u * J / et, C = X == null ? 0 : S(Vt) + X;
      J ? n.lineTo(Vt, C) : n.moveTo(Vt, C);
    }
    for (let J = et; J >= 0; J--) {
      const Vt = u * J / et;
      n.lineTo(Vt, S(Vt) + kt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = st(y.filter((X) => !X.night).map((X) => X.sky), 0.75), n.fillRect(0, 0, u, v);
  const z = n.createLinearGradient(0, 0, u, 0);
  for (let X = 0; X <= 64; X++) {
    const kt = B(u * X / 64);
    z.addColorStop(X / 64, tt(kt.c, Math.min(1, kt.a)));
  }
  n.fillStyle = z;
  for (let X = 0; X < 8; X++)
    n.globalAlpha = 1 - X / 8, U(X * 2 * $, (X + 1) * 2 * $);
  n.fillStyle = st(y.filter((X) => X.night).map((X) => X.sky), 1.25);
  const pt = Math.max(0.5, Mt), ct = 6;
  n.globalAlpha = 1, U(null, -pt);
  for (let X = 0; X < ct; X++)
    n.globalAlpha = 1 - (X + 0.5) / ct, U(-pt + 2 * pt * X / ct, -pt + 2 * pt * (X + 1) / ct);
  n.globalAlpha = 1;
  const xt = new Path2D(su), Q = new Path2D(ru), ot = new Path2D(iu), L = new Path2D(lu);
  n.fillStyle = k.star, i.stars.forEach((X) => {
    n.globalAlpha = X.o, X.big ? (n.save(), n.translate(X.x, X.y), n.scale(X.size, X.size), n.fill(xt), n.restore()) : (n.beginPath(), n.arc(X.x, X.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const G = Je(k.sun, "#ffffff", 0.55);
  i.suns.forEach((X) => {
    const kt = n.createRadialGradient(X.x, X.y, 0, X.x, X.y, X.halo);
    kt.addColorStop(0, tt(G, 0.42)), kt.addColorStop(0.7, tt(G, 0)), n.fillStyle = kt, n.beginPath(), n.arc(X.x, X.y, X.halo, 0, Math.PI * 2), n.fill();
    const J = n.createLinearGradient(0, X.y - X.rad, 0, X.y + X.rad);
    J.addColorStop(0.6, k.sun), J.addColorStop(1, k.sunEdge), n.fillStyle = J, n.beginPath(), n.arc(X.x, X.y, X.rad, 0, Math.PI * 2), n.fill();
  });
  const Lt = Je(k.moon, "#ffffff", 0.6);
  i.moons.forEach((X) => {
    n.save(), n.translate(X.x - X.d / 2, X.y - X.d / 2), n.scale(X.d / 46, X.d / 46);
    const kt = n.createLinearGradient(0, 6, 0, 40);
    kt.addColorStop(0, Lt), kt.addColorStop(1, k.moon), n.fillStyle = kt, n.fill(Q), n.restore();
  }), i.clouds.forEach((X) => {
    n.save(), n.globalAlpha = X.o, n.translate(X.x, X.y), n.scale(X.w / 46, X.h / 30.66), n.translate(-4, -9.67), n.fillStyle = X.fill, n.fill(ot), n.restore();
  }), i.fogs.forEach((X) => {
    const kt = n.createLinearGradient(X.x, 0, X.x + X.w, 0);
    kt.addColorStop(0, tt(X.c, 0)), kt.addColorStop(0.25, tt(X.c, X.a)), kt.addColorStop(0.75, tt(X.c, X.a)), kt.addColorStop(1, tt(X.c, 0)), n.fillStyle = kt, n.fillRect(X.x, X.y, X.w, 6 * $);
  }), n.fillStyle = k.rain, i.drops.forEach((X) => {
    n.save(), n.globalAlpha = X.o, n.translate(X.x, X.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, i.flakes.forEach((X) => {
    n.globalAlpha = X.o, n.beginPath(), n.arc(X.x, X.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, i.bolts.forEach((X) => {
    n.save(), n.globalAlpha = X.o, n.translate(X.x, X.y), n.fill(L), n.restore();
  }), n.restore();
}
function mu(n, d) {
  var sc, lc, dc, cc, pc, uc, fc;
  const i = (e) => n.getElementById(e), u = i("workoutView"), v = i("workoutNameInput");
  let y = !0;
  const k = i("homeClock");
  function E() {
    k && (k.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  E(), setInterval(E, 15e3);
  const S = i("createFlow"), B = i("createMovementsSlot"), Mt = i("createTimingSlot"), ht = i("createFinishSlot"), $ = i("movementStepSummary"), tt = i("timingStepSummary"), st = i("finishStepSummary"), et = i("continueToTiming"), U = i("continueToFinish"), z = i("finishMoveButton");
  let pt = !1, ct = [];
  function xt(e) {
    !e || ct.some((r) => r.node === e) || ct.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function Q(e, r) {
    e && (xt(e), r.appendChild(e));
  }
  function ot() {
    [...ct].reverse().forEach(({ node: e, parent: r, next: s }) => {
      r && (s && s.parentNode === r ? r.insertBefore(e, s) : r.appendChild(e));
    }), ct = [];
  }
  function L(e) {
    n.querySelectorAll(".createStep").forEach((r) => {
      r.classList.toggle("active", r.dataset.createStep === e);
    }), e === "timing" && (pt = !0), G();
  }
  function G() {
    var ut, wt;
    if (!Kt) return;
    ne[Qt];
    const e = da.filter((ft) => !ft.hidden), r = e.filter((ft) => ft.kind !== "rest").length, s = e.filter((ft) => ft.kind === "rest").length;
    $.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const h = r > 0, w = n.querySelector('[data-open-step="timing"]'), A = n.querySelector('[data-open-step="finish"]');
    w.disabled = !h, et.disabled = !h, tt.textContent = h ? In(D.value) + " · " + ua(_.value) + " movement · " + ua(P.value) + " rest" : "Add a movement first", A.disabled = !(h && pt);
    const R = ((v == null ? void 0 : v.value) || "").trim(), q = [];
    (ut = i("includeWarmupPreset")) != null && ut.checked && q.push("warm-up"), (wt = i("includeCooldownPreset")) != null && wt.checked && q.push("cooldown"), st.textContent = R ? R + (q.length ? " · " + q.join(" + ") : "") : q.length ? q.join(" + ") : "Name and optional extras";
  }
  function Lt() {
    var Ft, ae, qt;
    S.hidden = !1, pt = !1;
    const e = n.querySelector(".editNameRow"), r = i("createMoveOptions"), s = n.querySelector(".timeTiles"), h = i("routineSummaryModal"), w = n.querySelector(".tempoRevealRow"), A = i("tempoExperiment"), R = (Ft = i("warmupList")) == null ? void 0 : Ft.closest("section"), q = i("movementCreatorLaunch"), ut = i("movementCreator"), wt = (ae = i("strengthList")) == null ? void 0 : ae.closest("section"), ft = (qt = i("cooldownList")) == null ? void 0 : qt.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), R, q, ut, wt, ft].forEach((Pt) => Pt && Q(Pt, B)), [r, s, h, w, A].forEach((Pt) => Q(Pt, Mt)), Q(e, ht), L("movements"), G();
  }
  function X() {
    ot(), S.hidden = !0, n.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || L(e.dataset.openStep);
  })), et.addEventListener("click", () => {
    et.disabled || L("timing");
  }), U.addEventListener("click", () => L("finish")), z.addEventListener("click", () => i("saveWorkoutEdit").click());
  const kt = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, J = i("homeNav"), Vt = i("settingsNav");
  function C(e) {
    Object.entries(kt).forEach(([r, s]) => s.classList.toggle("active", r === e)), J.classList.toggle("active", e === "home"), Vt.classList.toggle("active", e === "settings"), e === "home" && setTimeout(Pa, 400), e === "settings" && (requestAnimationFrame(() => Vi(n.querySelector(".tab.active"), !1)), Ro());
  }
  const D = i("totalTime"), _ = i("workTime"), P = i("restTime"), gt = i("totalOut"), mt = i("workOut"), V = i("restOut"), yt = i("totalFill"), Tt = i("workFill"), te = i("restFill"), le = i("roundsInput"), ea = i("roundsFill"), Se = i("roundsOut"), wi = i("totalLabel"), La = i("routineSummaryModal"), Ht = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let me = Ht.map((e) => ({ ...e })), da = [
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
  const ue = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let Ue = ue.map((e) => ({ ...e }));
  const Yr = {
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
  }, we = rr(d.data), ne = we.profiles;
  let Qt = ne[we.selected] ? we.selected : we.order.find((e) => ne[e]) || "kettlebell";
  function rr(e) {
    const r = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, s = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(Yr)), h = (Array.isArray(r.order) ? r.order : Object.keys(s)).filter((w) => s[w]);
    return Object.keys(s).forEach((w) => {
      h.includes(w) || h.push(w);
    }), {
      v: 1,
      profiles: s,
      order: h,
      selected: r.selected || h[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : xi(r.energy)).map(sr),
      settings: { ...r.settings || {} }
    };
  }
  function xi(e) {
    if (!Array.isArray(e)) return [];
    const r = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return e.forEach((h) => {
      const w = new Date(h.at);
      if (isNaN(w)) return;
      const A = w.getFullYear() + "-" + String(w.getMonth() + 1).padStart(2, "0") + "-" + String(w.getDate()).padStart(2, "0"), R = w.getHours() < 14 ? "morning" : "evening";
      if (s.some((ut) => ut.date === A && ut.slot === R)) return;
      const q = r.indexOf(h.value) + 1;
      q > 0 && s.push({ date: A, slot: R, mood: null, energy: q, at: h.at });
    }), s;
  }
  function sr(e) {
    if (e.scale === 100) return e;
    const r = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...e, mood: r(e.mood), energy: r(e.energy), scale: 100 };
  }
  function en() {
    Kt || (we.selected = Qt, we.order = we.order.filter((e) => ne[e] && e !== It), d.save(we));
  }
  function ge() {
    return we.settings;
  }
  function ca(e) {
    const r = ne[e];
    if (!r) return;
    Qt = e;
    const s = i("workoutNameInput");
    if (s && (s.value = r.name), D.value = r.total, _.value = r.work, P.value = r.rest, le.value = r.rounds || 1, r.customSequence) {
      const h = (r.sequence || []).map((A) => ({ ...A })), w = (A) => h.filter((R) => R.presetRole === A).map(({ presetRole: R, ...q }) => q);
      me = (r.warmup || w("warmup")).map((A) => ({ ...A })), Ue = (r.cooldown || w("cooldown")).map((A) => ({ ...A })), da = h.filter((A) => !A.presetRole), Dn(r.preset || "movement", !1);
    } else
      D.min = 3, D.max = 40, D.step = 1, _.min = 20, _.max = 60, _.step = 5, P.min = 5, P.max = 30, P.step = 5, me = (r.warmup || Ht).map((h) => ({ ...h })), Ue = (r.cooldown || ue).map((h) => ({ ...h })), da = r.strength.map((h) => Array.isArray(h) ? (([w, A, R, q = !1]) => ({ id: w, name: A, group: R, kind: "work", hidden: !!q }))(h) : { ...h });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((h) => h.classList.toggle("active", h.dataset.workout === e)), _e();
  }
  function va(e, r, s) {
    const h = e.getBoundingClientRect(), w = h.width / 2, A = h.height / 2, R = r - w, q = s - A;
    let ut = 1 / 0, wt = 1 / 0;
    R !== 0 && (ut = w / Math.abs(R)), q !== 0 && (wt = A / Math.abs(q));
    const ft = Math.min(Math.max(1 / Math.min(ut, wt), 0), 1);
    let lt = Math.atan2(q, R) * (180 / Math.PI) + 90;
    return lt < 0 && (lt += 360), { edge: ft, angle: lt };
  }
  function yi(e, r, s = !1) {
    const h = e.getBoundingClientRect(), w = r.clientX - h.left, A = r.clientY - h.top, { edge: R, angle: q } = va(e, w, A), ut = s ? 100 : R * 100;
    e.style.setProperty("--edge-proximity", ut.toFixed(3)), e.style.setProperty("--cursor-angle", q.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", s || ut >= 30);
  }
  function lr(e) {
    e.addEventListener("pointermove", (s) => yi(e, s, !1)), e.addEventListener("pointerenter", (s) => yi(e, s, !1)), e.addEventListener("pointerdown", (s) => yi(e, s, !0));
    const r = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", r), e.addEventListener("pointerup", r), e.addEventListener("pointercancel", r);
  }
  lr(i("addWorkoutPanel"));
  let Kt = !1, It = null;
  function Yt(e) {
    return String(e ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function Ie(e) {
    return e.summary ? e.summary : e.customSequence ? In(e.total) + " · custom move" : In(e.total) + " · " + ua(e.work) + " / " + ua(e.rest) + " · warm-up + cooldown";
  }
  function Ra(e, r) {
    var A;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = e, s.tabIndex = 0;
    const h = r.activityCount ?? (((A = r.sequence) == null ? void 0 : A.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Yt(r.name) + '</div><div class="sub">' + Yt(Ie(r)) + '</div><span class="sourceTag">' + Yt(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (h ? h + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Yt(r.name) + "</div></div>";
    const w = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(s, w), lr(s), s.addEventListener("click", (R) => {
      R.target.closest("button") || ca(e);
    }), s.addEventListener("keydown", (R) => {
      (R.key === "Enter" || R.key === " ") && !R.target.closest("button") && (R.preventDefault(), ca(e));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (R) => {
      R.stopPropagation(), ca(e), yl(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (R) => {
      R.stopPropagation(), ca(e), yd();
    }), s;
  }
  function wo() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), we.order.forEach((e) => {
      ne[e] && Ra(e, ne[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === Qt));
  }
  wo(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    Kt = !0, It = "custom-" + Date.now(), ne[It] = {
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
    }, ca(It), yl(!0);
  });
  let Ut = [], ie = 0, aa = 0, Jn = 1, Ga = !1, Qe = null, ki = null, pa = !1, xo = we.settings.upcomingCount ?? "all", yo = "movement";
  function ko(e, r, s) {
    return (Number(e) - r) / (s - r) * 100;
  }
  function ua(e) {
    const r = Math.max(0, Number(e) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function In(e) {
    const r = Math.max(0, Number(e) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function Mi() {
    yt.style.width = ko(D.value, Number(D.min), Number(D.max)) + "%", Tt.style.width = ko(_.value, Number(_.min), Number(_.max)) + "%", te.style.width = ko(P.value, Number(P.min), Number(P.max)) + "%", mt.textContent = ua(_.value), V.textContent = ua(P.value);
    const e = Number(le.value) || 1;
    ea.style.width = ko(e, 1, 10) + "%", wi.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function dr(e) {
    return e.filter((r) => !r.hidden);
  }
  function an(e) {
    const r = Math.max(0, Math.round(Number(e) || 0)), s = Math.floor(r / 3600), h = Math.floor(r % 3600 / 60), w = r % 60;
    return (s ? s + ":" + String(h).padStart(2, "0") : h) + ":" + String(w).padStart(2, "0");
  }
  function Qn(e) {
    let r;
    try {
      r = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const s = r.hostname.replace(/^(www|m|music)\./, "");
    let h = null;
    if (s === "youtu.be") h = r.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(s))
      if (r.pathname === "/watch") h = r.searchParams.get("v");
      else {
        const q = r.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        q && (h = q[2]);
      }
    if (!h || !/^[\w-]{11}$/.test(h)) return null;
    const w = (q) => {
      if (!q) return 0;
      if (/^\d+$/.test(q)) return Number(q);
      const ut = q.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return ut ? (Number(ut[1]) || 0) * 3600 + (Number(ut[2]) || 0) * 60 + (Number(ut[3]) || 0) : 0;
    }, A = w(r.searchParams.get("t") || r.searchParams.get("start")), R = w(r.searchParams.get("end"));
    return { id: h, start: A, end: R > A ? R : null };
  }
  function Hn(e, r) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || r || 300);
    const s = Number(e.start) || 0, h = Number(e.end) || Number(e.videoDuration) || 0;
    return h > s ? Math.round(h - s) : Number(e.duration) || 300;
  }
  function yn(e, r) {
    const s = Math.max(0, Number(e) || 0);
    return Math.round(r === "hour" ? s * 3600 : r === "min" ? s * 60 : s);
  }
  function Dn(e, r = !0) {
    yo = e, n.querySelectorAll(".createPresetBtn").forEach((h) => h.classList.toggle("active", h.dataset.movePreset === e));
    const s = ne[Qt];
    s && (s.preset = e), e === "work" ? (D.min = 30, D.max = 480, D.step = 30, _.min = 300, _.max = 7200, _.step = 300, P.min = 60, P.max = 1800, P.step = 60, r && (D.value = 60, _.value = 1500, P.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (D.min = 3, D.max = 40, D.step = 1, _.min = 20, _.max = 60, _.step = 5, P.min = 5, P.max = 30, P.step = 5, r && (D.value = 20, _.value = 45, P.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), Mi();
  }
  function nn(e, r) {
    const s = yo === "work";
    return e.map((h, w) => ({ ...h, id: r + "-" + w + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(_.value) }));
  }
  function cr() {
    const e = ne[Qt];
    e != null && e.customSequence && (e.includeWarmup = i("includeWarmupPreset").checked, e.includeCooldown = i("includeCooldownPreset").checked, e.includeWarmup && !me.length && (me = nn(Ht, "warm")), e.includeCooldown && !Ue.length && (Ue = nn(ue, "cool")), _e());
  }
  function Fn() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const r = Math.max(1, Ut.length - 1), s = xo;
    e.innerHTML = "";
    for (let A = 1; A <= r; A++) {
      const R = document.createElement("option");
      R.value = String(A), R.textContent = String(A), e.appendChild(R);
    }
    const h = document.createElement("option");
    h.value = "all", h.textContent = "All", e.appendChild(h);
    const w = s === "all" ? "all" : String(Math.min(Number(s) || 1, r));
    e.value = w, xo = w === "all" ? "all" : Number(w);
  }
  function _e() {
    Number(D.value) * 60;
    const e = Number(_.value), r = Number(P.value), s = ne[Qt], h = !!(s != null && s.customSequence), w = (h ? !s.includeWarmup : s != null && s.warmupOff) ? [] : dr(me), A = dr(da), R = h && !s.includeCooldown ? [] : dr(Ue);
    if (s && (s.total = Number(D.value), s.work = e, s.rest = r, s.rounds = Number(le.value) || 1, s.customSequence ? (s.sequence = da.map((Bt) => ({ ...Bt })), s.warmup = me.map((Bt) => ({ ...Bt })), s.cooldown = Ue.map((Bt) => ({ ...Bt }))) : (s.strength = da.map((Bt) => ({ ...Bt })), s.warmup = me.map((Bt) => ({ ...Bt })), s.cooldown = Ue.map((Bt) => ({ ...Bt })))), s != null && s.customSequence) {
      const Bt = [...w.map((ce) => ({ ...ce, section: "warmup" })), ...A, ...R.map((ce) => ({ ...ce, section: "cooldown" }))].map((ce) => {
        if (ce.kind === "video") return { ...ce, duration: Hn(ce, e), rest: 0 };
        if (ce.kind === "rest") {
          const Sa = ce.useGlobalTiming === !0 ? r : Number(ce.duration) || r;
          return { ...ce, duration: Sa, rest: 0 };
        }
        const Ma = ce.useGlobalTiming === !1 && Number(ce.duration) || e;
        return { ...ce, duration: Ma, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Ut = [], Bt.forEach((ce, Ma) => {
        Ut.push(ce);
        const Sa = Bt[Ma + 1];
        ce.kind !== "rest" && Sa && Sa.kind !== "rest" && Ut.push({
          id: "auto-rest-" + Ma,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Ut = Bt;
    } else
      Ut = [...w.map((Bt) => ({ ...Bt, section: "warmup" })), ...A, ...R.map((Bt) => ({ ...Bt, section: "cooldown" }))].map((Bt) => Bt.kind === "video" ? { ...Bt, duration: Hn(Bt, e), rest: 0 } : Bt.kind === "rest" ? { ...Bt, duration: Bt.useGlobalTiming === !0 ? r : Number(Bt.duration) || r, rest: 0 } : { ...Bt, duration: Bt.useGlobalTiming === !1 && Number(Bt.duration) || e, rest: r }), Ut.forEach((Bt, ce) => {
        var Ma;
        ((Ma = Ut[ce + 1]) == null ? void 0 : Ma.kind) === "rest" && (Bt.rest = 0);
      }), Ut.length && (Ut[Ut.length - 1].rest = 0);
    const q = Math.max(1, Math.min(10, Number(le.value) || 1)), ut = Ut, wt = (Bt) => q <= 1 ? null : Bt.section === "warmup" || Bt.presetRole === "warmup" ? "first" : Bt.section === "cooldown" || Bt.presetRole === "cooldown" ? "last" : Bt.kind === "video" && (Bt.videoRounds === "first" || Bt.videoRounds === "last") ? Bt.videoRounds : null, ft = (Bt) => !!wt(Bt), lt = ut.filter((Bt) => !ft(Bt)), Ft = ut.filter(ft), ae = lt.length, qt = lt.reduce((Bt, ce) => Bt + ce.duration + ce.rest, 0), Pt = Ft.reduce((Bt, ce) => Bt + ce.duration + ce.rest, 0), Et = [
      Ft.some((Bt) => Bt.section === "warmup" || Bt.presetRole === "warmup") && "warm-up",
      Ft.some((Bt) => Bt.section === "cooldown" || Bt.presetRole === "cooldown") && "cooldown",
      Ft.some((Bt) => Bt.kind === "video" && !Bt.section && !Bt.presetRole) && "video"
    ].filter(Boolean), he = Et.length > 1 ? Et.slice(0, -1).join(", ") + " & " + Et[Et.length - 1] : Et[0] || "";
    Ut = [];
    const ve = (Bt, ce) => {
      const Ma = wt(Bt);
      return !Ma || (Ma === "first" ? ce === 1 : ce === q);
    };
    for (let Bt = 1; Bt <= q; Bt++)
      if (ut.filter((ce) => ve(ce, Bt)).forEach((ce, Ma) => Ut.push({ ...ce, id: ce.id + (q > 1 ? "-r" + Bt : ""), round: Bt, roundIndex: Ma })), Bt < q && ae)
        if (s != null && s.customSequence)
          Ut.push({ id: "round-break-" + Bt, name: "Rest", group: "Round " + (Bt + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: Bt, roundIndex: ae, roundBreak: !0 });
        else {
          const ce = Ut[Ut.length - 1];
          ce.rest = r, ce.roundBreakAfter = !0;
        }
    Mi();
    const zt = Ut.reduce((Bt, ce) => Bt + ce.duration + ce.rest, 0), be = Math.round(qt / 60), Be = Math.round(zt / 60), se = q > 1 ? In(be) + " × " + q + " rounds" + (Pt ? " + " + ua(Pt) + " " + he : "") + " (" + In(Be) + ")" : In(Be), oe = [w.length ? "warm-up" : "", R.length ? "cooldown" : ""].filter(Boolean), ga = s != null && s.customSequence ? se + " · " + ae + " items" + (oe.length && !(q > 1 && Pt) ? " · " + oe.join(" + ") : "") : se + " · " + ua(e) + " / " + ua(r) + (oe.length && !(q > 1 && Pt) ? " · " + oe.join(" + ") : "");
    gt.textContent = ua(qt);
    const Fa = Ut.filter((Bt) => !Bt.roundBreak).length, Ye = q > 1 ? Fa + " activities · " + q + " rounds" : ae + " activities";
    Se.textContent = q > 1 ? q + " rounds · " + In(Be) + " total" : "1 round", i("roundsCount").textContent = q, n.querySelectorAll("[data-rounds-step]").forEach((Bt) => {
      Bt.disabled = Number(Bt.dataset.roundsStep) < 0 ? q <= 1 : q >= 10;
    }), s && (s.summary = ga, s.activityCount = ae);
    const Xi = n.querySelector(".workoutPanel.active .sub");
    Xi && (Xi.textContent = ga), La.textContent = ga, Yo(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((Bt) => Bt.textContent = Ye), Mi(), $e(), Ti(), p(), Fn(), Kt && G(), kt.workout.classList.contains("active") && !Qe && zs();
  }
  const Mo = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', ia = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', pr = {
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
  }, Na = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (pr[e] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = Na(e.dataset.icon);
  });
  let fa = null, ha = null;
  function ur(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function qo(e = !1) {
    const r = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), e && r.select());
  }
  function fr(e, r, s = {}) {
    const h = e.kind === "rest", w = e.kind === "video", A = w ? e.useVideoLength !== !1 : h ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, R = Number(h ? P.value : _.value), q = ur(w ? e.useVideoLength === !1 ? e.duration : Hn({ ...e, useVideoLength: !0 }) : A ? R : e.duration || R), ut = w && (Number(e.videoDuration) > 0 || Number(e.end) > 0), wt = w ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Yt(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Yt(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([zt, be]) => '<option value="' + zt + '"' + ((e.videoRounds || "every") === zt ? " selected" : "") + ">" + be + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Yt(e.name) + '" placeholder="' + (h ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Yt(e.group) + '" placeholder="' + (h ? "Rest" : "e.g. Glutes + legs") + '"></label>', ft = w ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (ut ? " · " + an(Hn({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + ua(R), lt = document.createElement("div");
    lt.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), lt.dataset.index = r, lt.dataset.id = e.id;
    const Ft = s.isNew ?? (ha == null ? void 0 : ha.item) === e, ae = s.sheet ? '<div class="moveEditActions sheetActions">' + (Ft ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Yt(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Ft ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    lt.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (w ? " videoFields" : "") + '">' + wt + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (A ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Yt(ft) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + q.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((zt) => '<option value="' + zt + '"' + (zt === q.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[zt] + "</option>").join("") + "</select></div></div>" + ae + "</div>";
    const qt = (zt) => lt.querySelector("[data-f=" + zt + "]"), Pt = () => {
      const zt = qt("global").checked;
      qt("dur").disabled = zt, qt("unit").disabled = zt, lt.querySelector(".creatorDurationRow").classList.toggle("isDisabled", zt);
    };
    qt("global").addEventListener("change", Pt), Pt();
    const Et = () => {
      var zt;
      if (s.sheet) {
        (zt = s.onCancel) == null || zt.call(s);
        return;
      }
      Ft && _a(), fa = null, _e();
    }, he = () => {
      var Be;
      if (w) {
        ve();
        return;
      }
      const zt = qt("name").value.trim();
      if (!zt) {
        qt("name").focus();
        return;
      }
      e.name = zt, e.group = qt("group").value.trim() || (h ? "Rest" : "Movement");
      const be = qt("global").checked;
      if (e.useGlobalTiming = be, be || (e.duration = Math.max(h ? 5 : 1, yn(qt("dur").value, qt("unit").value))), s.sheet) {
        (Be = s.onSaved) == null || Be.call(s);
        return;
      }
      Ft && (ha = null), fa = null, _e(), N(Ft ? h ? "Rest added" : "Movement added" : "Movement updated");
    }, ve = () => {
      var oe;
      const zt = qt("url").value.trim(), be = Qn(zt);
      if (!be) {
        qt("urlError").hidden = !1, qt("url").classList.add("invalid"), qt("url").focus();
        return;
      }
      const Be = be.id !== e.videoId;
      e.url = zt, e.videoId = be.id, e.start = be.start, e.end = be.end, Be && (e.videoDuration = null, e.videoError = null);
      const se = qt("name").value.trim();
      e.autoName = !se, e.name = se || (Be ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = qt("rounds").value, e.useVideoLength = qt("global").checked, e.useVideoLength || (e.duration = Math.max(5, yn(qt("dur").value, qt("unit").value))), s.sheet ? (oe = s.onSaved) == null || oe.call(s) : (Ft && (ha = null), fa = null, _e(), N(Ft ? "Video added" : "Video updated")), (Be || !e.videoDuration || e.autoName && !e.videoTitle) && ka(e);
    };
    if (w && qt("url").addEventListener("input", () => {
      qt("urlError").hidden = !0, qt("url").classList.remove("invalid");
    }), lt.querySelector("[data-a=cancel]").addEventListener("click", Et), lt.querySelector("[data-a=save]").addEventListener("click", he), s.sheet && !Ft) {
      lt.querySelector("[data-a=hide]").addEventListener("click", () => {
        var be;
        return (be = s.onHide) == null ? void 0 : be.call(s);
      });
      const zt = lt.querySelector("[data-a=remove]");
      Ir(zt, zt.querySelector(".removeFill"), 1200, () => {
        var be;
        return (be = s.onRemove) == null ? void 0 : be.call(s);
      });
    }
    return lt.addEventListener("keydown", (zt) => {
      zt.key === "Escape" && (zt.preventDefault(), zt.stopPropagation(), Et()), zt.key === "Enter" && zt.target.matches("input") && (zt.preventDefault(), he());
    }), lt;
  }
  function to(e, r) {
    const s = i(r);
    s.innerHTML = "", e.forEach((h, w) => {
      if (h === fa && !Ua()) {
        s.appendChild(fr(h, w));
        return;
      }
      const A = document.createElement("div");
      A.className = "moveRow" + (h.hidden ? " hidden" : "") + (h.kind === "rest" ? " restItem" : "") + (h.kind === "video" ? " videoItem" : "") + (ms(h) ? " noMeta" : ""), A.dataset.index = w, A.dataset.id = h.id;
      const R = h.kind === "rest" ? h.useGlobalTiming === !0 ? "Global timing" : ua(h.duration) : h.useGlobalTiming === !1 ? ua(h.duration) : "Global timing", q = h.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", ut = h.kind === "video" ? h.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (h.useVideoLength === !1 ? "stops after " + ua(h.duration) : Number(h.videoDuration) > 0 || Number(h.end) > 0 ? an(Hn(h)) : "plays to the end") + (h.videoRounds === "first" ? " · first round only" : h.videoRounds === "last" ? " · last round only" : "") : h.group + " · " + R, wt = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Yt(h.name) + '. Drag, or use the up and down arrow keys">' + Mo + "</button>", ft = '<div class="moveText"><div class="moveItemName">' + Yt(h.name) + q + '</div><div class="moveMeta">' + Yt(ut) + "</div></div>", lt = (qt) => qt.addEventListener("keydown", (Pt) => {
        var ve, zt;
        if (Pt.key !== "ArrowUp" && Pt.key !== "ArrowDown") return;
        Pt.preventDefault();
        const Et = e.indexOf(h), he = Et + (Pt.key === "ArrowUp" ? -1 : 1);
        he < 0 || he >= e.length || (e.splice(Et, 1), e.splice(he, 0, h), _e(), (zt = (ve = i(r).children[he]) == null ? void 0 : ve.querySelector(".dragHandle")) == null || zt.focus());
      });
      if (Ua()) {
        A.classList.add("phoneRow"), A.tabIndex = 0, A.setAttribute("role", "button"), A.setAttribute("aria-label", "Edit " + (h.name || "step")), A.innerHTML = wt + ft + '<span class="rowChevron" aria-hidden="true">›</span>';
        const qt = A.querySelector(".dragHandle");
        qt.addEventListener("pointerdown", (Pt) => Si(Pt, A, s, e)), lt(qt), A.addEventListener("click", (Pt) => {
          Pt.target.closest(".dragHandle") || zn(h, e);
        }), A.addEventListener("keydown", (Pt) => {
          Pt.key === "Enter" && Pt.target === A && (Pt.preventDefault(), zn(h, e));
        }), s.appendChild(A);
        return;
      }
      A.innerHTML = wt + ft + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Yt(h.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (h.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Yt(h.name) + '"><span class="removeFill"></span><span class="removeLabel">' + ia + "</span></button></div>", A.querySelector(".editBtn").addEventListener("click", () => {
        _a(), fa = h, _e(), qo();
      }), A.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        h.hidden = !h.hidden, _e();
      });
      const Ft = A.querySelector(".removeBtn");
      Ir(Ft, Ft.querySelector(".removeFill"), 1200, () => {
        const qt = e.indexOf(h);
        qt < 0 || (e.splice(qt, 1), _e(), N("Removed " + h.name, { label: "Undo", run: () => {
          e.splice(Math.min(qt, e.length), 0, h), _e();
        } }));
      });
      const ae = A.querySelector(".dragHandle");
      ae.addEventListener("pointerdown", (qt) => Si(qt, A, s, e)), lt(ae), s.appendChild(A);
    });
  }
  const Aa = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, jo = (e) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, e);
    } catch {
    }
  };
  function Si(e, r, s, h) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const w = e.currentTarget, A = e.pointerId, R = !Aa();
    try {
      w.setPointerCapture(A);
    } catch {
    }
    const q = r.closest(".exerciseScroller") || Co(r), ut = s.style.position;
    s.style.position = "relative";
    const wt = [...s.children].filter((pe) => pe.classList.contains("moveRow")), ft = wt.indexOf(r), lt = parseFloat(getComputedStyle(s).rowGap) || 8, Ft = r.offsetHeight, ae = Ft + lt, qt = wt.map((pe) => pe.offsetTop), Pt = wt.map((pe) => pe.offsetHeight), Et = () => s.getBoundingClientRect().top, he = s.getBoundingClientRect().width, ve = e.clientY - (Et() + qt[ft]), zt = e.clientX;
    let be = e.clientY, Be = e.clientX, se = Et() + qt[ft], oe = 0, ga = 0, Fa = 0, Ye = 1, Xi = 0, Bt = ft, ce = !1, Ma = 0, Sa = !1, Yl = !1, Ls = qt[ft];
    s.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", jo(8);
    const Zl = () => {
      const pe = be - ve + Ft / 2 - Et();
      let Me = 0;
      return wt.forEach((ze, hn) => {
        hn !== ft && pe > qt[hn] + Pt[hn] / 2 && Me++;
      }), Me;
    }, Kl = () => {
      wt.forEach((pe, Me) => {
        if (Me === ft) return;
        const ze = ft < Bt && Me > ft && Me <= Bt ? -ae : ft > Bt && Me >= Bt && Me < ft ? ae : 0;
        pe.style.transform = ze ? "translateY(" + ze + "px)" : "";
      });
    }, cl = () => {
      const pe = s.getBoundingClientRect(), Me = Math.abs(Be - zt) > Math.max(80, he * 0.3) || Be < pe.left - 24 || Be > pe.right + 24;
      Me !== ce && (ce = Me, r.classList.toggle("willReturn", Me), jo(Me ? 10 : 4));
      const ze = ce ? ft : Zl();
      ze !== Bt && (Bt = ze, Kl(), ce || jo(4));
    }, Ji = () => {
      if (Bt === ft) return qt[ft];
      const pe = wt.filter((ze, hn) => hn !== ft);
      let Me = qt[0];
      for (let ze = 0; ze < Bt; ze++) Me += pe[ze].offsetHeight + lt;
      return Me;
    }, As = () => {
      const pe = R ? Math.min(Math.abs(oe) / 40, 1) : 0, Me = R && !Sa ? Math.max(-3, Math.min(3, Fa * 0.6)) : 0;
      r.style.transform = "translate(" + ga.toFixed(2) + "px," + (se - (Et() + qt[ft])).toFixed(2) + "px) rotate(" + Me.toFixed(2) + "deg) scale(" + (Ye * (1 - 0.04 * pe)).toFixed(4) + "," + (Ye * (1 + 0.06 * pe)).toFixed(4) + ")";
    }, re = () => {
      Ma = requestAnimationFrame(re);
      const pe = Be - zt, Me = Sa ? Et() + Ls : be - ve, ze = Sa ? 0 : ce ? pe * 0.9 : Math.max(-22, Math.min(22, pe * 0.22)), hn = Sa ? 1 : ce ? 0.97 : 1.035;
      if (!R) {
        se = Me, ga = Sa ? 0 : ze, Ye = 1, As(), Sa && Ze();
        return;
      }
      const Vp = Sa ? 0.24 : 0.2, Gp = Sa ? 0.62 : 0.68;
      oe = (oe + (Me - se) * Vp) * Gp, se += oe, Fa = (Fa + (ze - ga) * 0.16) * 0.7, ga += Fa, Xi = (Xi + (hn - Ye) * 0.22) * 0.6, Ye += Xi, As(), Sa && Math.abs(oe) < 0.15 && Math.abs(Me - se) < 0.5 && Math.abs(ga) < 0.5 && Math.abs(Ye - 1) < 3e-3 && Ze();
    }, Oe = setInterval(() => {
      if (!q || Sa) return;
      const pe = q.getBoundingClientRect(), Me = 56, ze = be < pe.top + Me ? -10 : be > pe.bottom - Me ? 10 : 0;
      ze && (q.scrollTop += ze, cl());
    }, 30);
    function Ze() {
      if (Yl) return;
      Yl = !0, cancelAnimationFrame(Ma);
      const pe = Bt !== ft, Me = r.dataset.id;
      if (s.classList.remove("reordering"), wt.forEach((hn) => {
        hn.style.transition = "none", hn.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), s.style.position = ut, pe) {
        const [hn] = h.splice(ft, 1);
        h.splice(Bt, 0, hn);
      }
      _e();
      const ze = Me && s.querySelector('.moveRow[data-id="' + Me + '"]');
      ze && R && ze.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), pe && N("Order saved");
    }
    const Ca = (pe) => {
      if (pe.pointerId === A) {
        if (pe.pointerType === "mouse" && pe.buttons === 0) {
          Pn();
          return;
        }
        be = pe.clientY, Be = pe.clientX, cl();
      }
    }, fn = (pe) => {
      pe.pointerId === A && Pn();
    };
    function Pn() {
      Sa || (window.removeEventListener("pointermove", Ca, !0), window.removeEventListener("pointerup", fn, !0), window.removeEventListener("pointercancel", fn, !0), w.removeEventListener("lostpointercapture", Pn), clearInterval(Oe), ce && Bt !== ft && (Bt = ft, Kl()), Ls = Ji(), Sa = !0, jo(6), setTimeout(Ze, 800));
    }
    window.addEventListener("pointermove", Ca, !0), window.addEventListener("pointerup", fn, !0), window.addEventListener("pointercancel", fn, !0), w.addEventListener("lostpointercapture", Pn), Ma = requestAnimationFrame(re), As();
  }
  function $e() {
    var w, A, R, q;
    const e = ne[Qt], r = (w = i("warmupList")) == null ? void 0 : w.closest("section"), s = (A = i("cooldownList")) == null ? void 0 : A.closest("section"), h = (q = (R = i("strengthList")) == null ? void 0 : R.closest("section")) == null ? void 0 : q.querySelector(".sectionTitle");
    e != null && e.customSequence ? (r && (r.hidden = !e.includeWarmup), s && (s.hidden = !e.includeCooldown), h && (h.textContent = "Move sequence")) : (r && (r.hidden = !!(e != null && e.warmupOff)), s && (s.hidden = !1), h && (h.textContent = "Kettlebell work")), to(me, "warmupList"), to(da, "strengthList"), to(Ue, "cooldownList");
  }
  function _a() {
    if (!ha) return;
    const { item: e, arr: r } = ha;
    ha = null;
    const s = r.indexOf(e);
    s >= 0 && r.splice(s, 1), fa === e && (fa = null);
  }
  function xe(e) {
    return e.id === "warmupList" ? { arr: me, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: Ue, kind: "cooldown", group: "Cooldown" } : { arr: da, kind: "work", group: "" };
  }
  function So(e, r) {
    const s = xe(r), h = Date.now().toString(36);
    return e === "video" ? { id: "video-" + h, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + h, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(P.value) } : { id: "movement-" + h, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(_.value) };
  }
  const On = "cubic-bezier(.34,1.46,.64,1)";
  function Wn(e, r) {
    if (Aa() || !e) {
      r();
      return;
    }
    const s = (A) => {
      var R;
      return ((R = A.dataset) == null ? void 0 : R.id) || A;
    }, h = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], w = new Map(h().map((A) => [s(A), A.getBoundingClientRect().top]));
    r(), h().forEach((A) => {
      const R = w.get(s(A));
      if (R === void 0) return;
      const q = R - A.getBoundingClientRect().top;
      Math.abs(q) < 0.5 || A.animate([{ transform: "translateY(" + q + "px)" }, { transform: "none" }], { duration: 440, easing: On });
    });
  }
  function zo(e, r) {
    if (!e || Aa()) return;
    const s = e.offsetHeight, h = Math.max(0, s - (r || 0));
    e.animate([{ clipPath: "inset(0 0 " + h + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: On });
  }
  function kn(e, r, s, h) {
    const { arr: w } = xe(r), A = So(e, r);
    w.splice(Math.max(0, Math.min(s, w.length)), 0, A), ha = { item: A, arr: w }, fa = A, Wn(r.closest(".exerciseScroller,.createStepSlot") || r, () => _e());
    const R = r.querySelector(".moveRow.editing");
    return zo(R, h), qo(e === "rest"), R;
  }
  function Co(e) {
    for (let r = e; r && r.nodeType === 1; r = r.parentElement) {
      const s = getComputedStyle(r).overflowY;
      if (/(auto|scroll)/.test(s) && r.scrollHeight > r.clientHeight) return r;
    }
    return null;
  }
  const Zr = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function To(e, r) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (e === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + Mo + '</span><span class="addGhostText"><strong>' + Yt(r[0]) + "</strong><small>" + Yt(r[1]) + "</small></span>", i("workoutModal").appendChild(s), s;
  }
  function na(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function Vo(e, r, s, h) {
    (fa || ha) && (_a(), fa = null, _e());
    const w = e.getBoundingClientRect(), A = To(r, Zr[r]);
    A.setAttribute("aria-hidden", "true"), A.style.width = w.width + "px", A.style.height = w.height + "px", A.style.transform = "translate(" + w.left + "px," + w.top + "px)", e.classList.add("lifting");
    const R = Co(e);
    return hr({
      ghost: A,
      origin: w,
      sx: s,
      sy: h,
      scroller: R,
      column: e.closest(".exerciseScroller,.createFlow") || R,
      home: () => e.getBoundingClientRect(),
      onDrop: (q, ut, wt) => {
        na(A), e.classList.remove("lifting"), kn(r, q, ut, wt);
      },
      onReturn: () => {
        na(A), e.classList.remove("lifting");
      }
    });
  }
  function hr({ ghost: e, origin: r, sx: s, sy: h, scroller: w, column: A, home: R, onDrop: q, onReturn: ut, rowLook: wt = !1 }) {
    var As;
    const ft = !Aa(), lt = ((As = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : As.offsetHeight) || 80, Ft = s - r.left, ae = h - r.top, qt = 44;
    let Pt = s, Et = h, he = r.left, ve = r.top, zt = 0, be = 0, Be = !ft, se = null, oe = null, ga = -1, Fa = 0, Ye = null;
    const Xi = () => ["warmupList", "strengthList", "cooldownList"].map((re) => i(re)).filter((re) => re && re.getClientRects().length && !re.closest("[hidden]")), Bt = (re) => {
      if (re === se) return;
      se = re, e.classList.toggle("overList", !!re || wt);
      const Oe = re ? re.getBoundingClientRect().width : r.width;
      e.style.width = Oe + "px", e.style.height = (re ? lt : r.height) + "px";
    }, ce = (re) => {
      re.classList.add("leaving"), re.style.height = "0px", re.style.marginTop = "-8px", setTimeout(() => re.remove(), ft ? 320 : 0);
    }, Ma = (re, Oe, Ze) => {
      if (oe && oe.parentNode === re && ga === Ze || (oe && (ce(oe), oe = null, ga = -1), !re)) return;
      const Ca = document.createElement("div");
      Ca.className = "dropSlot", re.insertBefore(Ca, Oe), oe = Ca, ga = Ze, Ca.getBoundingClientRect(), Ca.style.height = lt + "px", Ca.style.marginTop = "0px";
    }, Sa = () => {
      let re = null, Oe = 1 / 0;
      for (const Pn of Xi()) {
        const pe = Pn.getBoundingClientRect();
        if (Pt < pe.left - 48 || Pt > pe.right + 48) continue;
        const Me = pe.top - 28, ze = pe.bottom + 28, hn = Et < Me ? Me - Et : Et > ze ? Et - ze : 0;
        hn < Oe && (Oe = hn, re = Pn);
      }
      const Ze = A == null ? void 0 : A.getBoundingClientRect(), fn = Ze && Pt >= Ze.left && Pt <= Ze.right && Et >= Ze.top && Et <= Ze.bottom || Oe === 0 ? re : null;
      if (fn) {
        const Pn = [...fn.children].filter((Me) => Me.classList.contains("moveRow"));
        let pe = Pn.findIndex((Me) => {
          const ze = Me.getBoundingClientRect();
          return Et < ze.top + ze.height / 2;
        });
        pe < 0 && (pe = Pn.length), Ma(fn, Pn[pe] || null, pe);
      } else Ma(null);
      Bt(fn);
    }, Yl = () => {
      if (Ye) return Ye.aim();
      if (se) {
        const re = se.getBoundingClientRect();
        let Oe = Et - lt / 2;
        return oe && (Oe = Oe * 0.6 + oe.getBoundingClientRect().top * 0.4), { x: re.left, y: Oe };
      }
      return { x: Pt - Ft, y: Et - ae };
    }, Ls = (re, Oe, Ze, Ca) => {
      e.style.transform = "translate(" + he + "px," + ve + "px) rotate(" + re + "deg) rotate(" + Oe + "rad) scale(" + Ze + "," + Ca + ") rotate(" + -Oe + "rad)";
    }, Zl = () => {
      if (Fa = requestAnimationFrame(Zl), !Be) {
        const pe = Pt - s, Me = Et - h, ze = Math.min(Math.hypot(pe, Me) / qt, 1);
        he = r.left + pe * 0.35, ve = r.top + Me * 0.35, Ls(0, Math.atan2(Me, pe), 1 + 0.155 * ze, 1 - 0.1 * ze);
        return;
      }
      const re = Yl();
      if (!ft) {
        he = re.x, ve = re.y, Ls(0, 0, 1, 1), Ye && (cancelAnimationFrame(Fa), Ye.done());
        return;
      }
      const Oe = Ye ? Ye.k : 0.17, Ze = Ye ? Ye.d : 0.7;
      zt = (zt + (re.x - he) * Oe) * Ze, be = (be + (re.y - ve) * Oe) * Ze, he += zt, ve += be;
      const Ca = Math.hypot(zt, be), fn = Math.min(Ca / 48, 1), Pn = se || Ye ? 0 : Math.max(-5, Math.min(5, zt * 0.32));
      Ls(Pn, Math.atan2(be, zt), 1 + 0.1 * fn, 1 - 0.063 * fn), Ye && Ca < 0.15 && Math.hypot(re.x - he, re.y - ve) < 0.6 && (cancelAnimationFrame(Fa), Ye.done());
    }, Kl = setInterval(() => {
      if (!w || Ye) return;
      const re = w.getBoundingClientRect(), Oe = 64, Ze = Et < re.top + Oe ? -(re.top + Oe - Et) / 4 : Et > re.bottom - Oe ? (Et - (re.bottom - Oe)) / 4 : 0;
      Ze && (w.scrollTop += Math.max(-18, Math.min(18, Ze)), Sa());
    }, 30);
    Fa = requestAnimationFrame(Zl);
    let cl = !1;
    const Ji = (re, Oe) => {
      if (cl) return;
      cl = !0, cancelAnimationFrame(Fa);
      const Ze = oe ? oe.offsetHeight : lt;
      !re && oe && (oe.remove(), oe = null), re ? q(re, Oe, Ze) : ut();
    };
    return {
      move(re, Oe) {
        Pt = re, Et = Oe, !Be && Math.hypot(Pt - s, Et - h) > qt && (Be = !0, zt = (Pt - s) * 0.085, be = (Et - h) * 0.085), Be && Sa();
      },
      drop(re) {
        clearInterval(Kl);
        const Oe = se, Ze = ga;
        if (!re && Oe && oe) {
          const Ca = oe;
          Ye = { k: 0.24, d: 0.62, aim: () => {
            const fn = Ca.getBoundingClientRect();
            return { x: fn.left, y: fn.top };
          }, done: () => Ji(Oe, Ze) }, setTimeout(() => Ji(Oe, Ze), 650), ft || (cancelAnimationFrame(Fa), Ji(Oe, Ze));
          return;
        }
        Ma(null), Bt(null), Ye = { k: 0.2, d: 0.66, aim: () => {
          const Ca = R();
          return { x: Ca.left, y: Ca.top };
        }, done: () => Ji(null) }, setTimeout(() => Ji(null), 650), ft || (cancelAnimationFrame(Fa), Ji(null));
      }
    };
  }
  function qn(e, r) {
    let s = !1;
    e.addEventListener("click", (h) => {
      if (s) {
        s = !1, h.preventDefault();
        return;
      }
      if (Ua()) {
        gr(r);
        return;
      }
      const w = i("strengthList"), A = kn(r, w, xe(w).arr.length, 0);
      A == null || A.scrollIntoView({ block: "nearest", behavior: Aa() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (h) => {
      if (h.button !== void 0 && h.button !== 0) return;
      const w = h.pointerId, A = h.clientX, R = h.clientY;
      let q = null, ut = !1;
      try {
        e.setPointerCapture(w);
      } catch {
      }
      const wt = (Et) => {
        if (Et.pointerId === w) {
          if (Et.pointerType === "mouse" && Et.buttons === 0) {
            Pt(!1);
            return;
          }
          if (!q) {
            if (Math.hypot(Et.clientX - A, Et.clientY - R) < 6) return;
            q = Vo(e, r, A, R);
          }
          q.move(Et.clientX, Et.clientY);
        }
      }, ft = (Et) => {
        Et.pointerId === w && Pt(!1);
      }, lt = (Et) => {
        Et.pointerId === w && Pt(!0);
      }, Ft = () => Pt(!1), ae = () => Pt(!0), qt = (Et) => {
        Et.key === "Escape" && q && (Et.preventDefault(), Et.stopPropagation(), Pt(!0));
      };
      function Pt(Et) {
        if (!ut && (ut = !0, window.removeEventListener("pointermove", wt, !0), window.removeEventListener("pointerup", ft, !0), window.removeEventListener("pointercancel", lt, !0), window.removeEventListener("keydown", qt, !0), window.removeEventListener("blur", ae), e.removeEventListener("lostpointercapture", Ft), q)) {
          const he = q;
          q = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), he.drop(Et);
        }
      }
      window.addEventListener("pointermove", wt, !0), window.addEventListener("pointerup", ft, !0), window.addEventListener("pointercancel", lt, !0), window.addEventListener("keydown", qt, !0), window.addEventListener("blur", ae), e.addEventListener("lostpointercapture", Ft);
    });
  }
  const Mn = (sc = window.matchMedia) == null ? void 0 : sc.call(window, "(max-width: 620px)");
  function Ua() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const mr = (e) => e.charAt(0).toUpperCase() + e.slice(1), jn = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let Go = null, Ce = null;
  function Lo(e, r, s, h) {
    ba(), i("sheetTitle").textContent = e;
    const w = i("sheetBody");
    w.innerHTML = "", w.appendChild(r), Go = s || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !w.contains(r)) return;
      const A = h ? w.querySelector("input[data-f=url],input[data-f=name]") : w.querySelector("button,input,select");
      A == null || A.focus({ preventScroll: !0 });
    }, Aa() ? 0 : 360);
  }
  function ba() {
    const e = i("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), i("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const r = Go;
    Go = null, r == null || r(), setTimeout(ao, 0);
  }
  i("sheetScrim").addEventListener("click", ba), i("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), ba());
  });
  function zn(e, r) {
    const s = fr(e, r.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        ba(), _e(), N(mr(jn(e)) + " updated");
      },
      onCancel: ba,
      onHide() {
        e.hidden = !e.hidden, ba(), _e(), N((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        ba();
        const h = r.indexOf(e);
        h < 0 || (r.splice(h, 1), _e(), N("Removed " + e.name, { label: "Undo", run: () => {
          r.splice(Math.min(h, r.length), 0, e), _e();
        } }));
      }
    });
    Lo("Edit " + jn(e), s, null, !1);
  }
  function Kr() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, s, h, w]) => {
      const A = document.createElement("button");
      A.type = "button", A.className = "sheetChoice", A.innerHTML = '<span class="timeIcon" aria-hidden="true">' + Na(s) + "</span><span><strong>" + h + "</strong><small>" + w + "</small></span>", A.addEventListener("click", () => gr(r)), e.appendChild(A);
    }), Lo("Add to the move", e, null, !1);
  }
  function gr(e) {
    Ce && Ya();
    const r = So(e, i("strengthList")), s = fr(r, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        ba(), eo(r, e);
      },
      onCancel: ba
    });
    Lo("New " + jn(r), s, null, !0);
  }
  const Uo = i("workoutModal").querySelector(".modalStatic"), vr = { parent: Uo.parentNode, next: Uo.nextSibling };
  function $r() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(Uo);
    const r = document.createElement("button");
    r.type = "button", r.className = "primary sheetDone", r.textContent = "Done", r.addEventListener("click", ba), e.appendChild(r), Lo("Setup", e, () => {
      vr.parent.insertBefore(Uo, vr.next), Yo();
    }, !1);
  }
  function Yo() {
    var r, s;
    const e = i("setupSummaryName");
    e && (e.textContent = (((r = i("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((s = ne[Qt]) == null ? void 0 : s.name) || "Move", i("setupSummaryMeta").textContent = La.textContent);
  }
  i("setupSummary").addEventListener("click", $r), i("addFab").addEventListener("click", Kr);
  function wa() {
    const e = i("strengthList");
    return Co(e) || e.closest(".exerciseScroller");
  }
  function on() {
    const e = i("strengthList").getBoundingClientRect(), r = (wa() || i("strengthList")).getBoundingClientRect(), s = (Ce == null ? void 0 : Ce.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(r.top + 12, Math.min(r.bottom - s - 96, r.top + r.height * 0.55 - s / 2)), width: e.width, height: s };
  }
  function eo(e, r) {
    var q;
    const s = To(r, [e.name || Zr[r][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const h = document.createElement("span");
    h.className = "addGhostActions", h.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Yt(e.name) + '">✕</button>', s.appendChild(h), Ce = { item: e, type: r, ghost: s };
    const w = ((q = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : q.offsetHeight) || 64;
    s.style.width = i("strengthList").getBoundingClientRect().width + "px", s.style.height = w + "px";
    const A = on(), R = Wa.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + A.left + "px," + R + "px)", s.getBoundingClientRect(), Aa() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + A.left + "px," + A.top + "px)", h.querySelector("[data-a=end]").addEventListener("click", Ya), h.querySelector("[data-a=discard]").addEventListener("click", Ea), s.addEventListener("pointerdown", Xr);
  }
  function Xr(e) {
    if (!Ce || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: r, ghost: s } = Ce, h = e.pointerId;
    try {
      s.setPointerCapture(h);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const w = s.getBoundingClientRect(), A = wa(), R = hr({
      ghost: s,
      origin: { left: w.left, top: w.top, width: w.width, height: w.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: A,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || A,
      rowLook: !0,
      home: on,
      onDrop: (Pt, Et, he) => {
        Ce = null, na(s), Oa(r, Pt, Et, he);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let q = !1;
    const ut = (Pt) => {
      if (Pt.pointerId === h) {
        if (Pt.pointerType === "mouse" && Pt.buttons === 0) {
          qt(!1);
          return;
        }
        R.move(Pt.clientX, Pt.clientY);
      }
    }, wt = (Pt) => {
      Pt.pointerId === h && qt(!1);
    }, ft = (Pt) => {
      Pt.pointerId === h && qt(!0);
    }, lt = () => qt(!1), Ft = () => qt(!0), ae = (Pt) => {
      Pt.key === "Escape" && (Pt.preventDefault(), qt(!0));
    };
    function qt(Pt) {
      q || (q = !0, window.removeEventListener("pointermove", ut, !0), window.removeEventListener("pointerup", wt, !0), window.removeEventListener("pointercancel", ft, !0), window.removeEventListener("keydown", ae, !0), window.removeEventListener("blur", Ft), s.removeEventListener("lostpointercapture", lt), R.drop(Pt));
    }
    window.addEventListener("pointermove", ut, !0), window.addEventListener("pointerup", wt, !0), window.addEventListener("pointercancel", ft, !0), window.addEventListener("keydown", ae, !0), window.addEventListener("blur", Ft), s.addEventListener("lostpointercapture", lt);
  }
  function Oa(e, r, s, h) {
    const w = xe(r);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = w.kind, w.group && (!e.group || e.group === "Movement") && (e.group = w.group)), w.arr.splice(Math.max(0, Math.min(s, w.arr.length)), 0, e), Wn(r.closest(".exerciseScroller,.createStepSlot") || r, () => _e()), zo(r.querySelector('.moveRow[data-id="' + e.id + '"]'), h), N(mr(jn(e)) + " added");
  }
  function Ya() {
    var h;
    if (!Ce) return;
    const { item: e, ghost: r } = Ce;
    Ce = null, na(r);
    const s = i("strengthList");
    Oa(e, s, xe(s).arr.length, 0), (h = s.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || h.scrollIntoView({ block: "nearest", behavior: Aa() ? "auto" : "smooth" });
  }
  function Ea() {
    if (!Ce) return;
    const e = Ce.ghost;
    Ce = null, na(e), N("Discarded");
  }
  function br() {
    Ce && (Ce.ghost.remove(), Ce = null);
  }
  window.addEventListener("resize", () => {
    if (Ce != null && Ce.ghost.classList.contains("hovering")) {
      const e = on();
      Ce.ghost.style.width = e.width + "px", Ce.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (lc = Mn == null ? void 0 : Mn.addEventListener) == null || lc.call(Mn, "change", () => {
    ba(), Ce && !Ua() && Ya(), $e();
  });
  {
    const e = i("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function ao() {
    const e = i("workoutModal"), r = window.visualViewport;
    if (!e.classList.contains("open") || !Ua()) {
      Ci();
      return;
    }
    const s = r ? r.offsetTop : 0, h = r ? r.offsetLeft : 0, w = r ? r.width : window.innerWidth, A = r ? r.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: w + "px", height: A + "px", top: s + "px", left: h + "px" });
    const R = e.getBoundingClientRect();
    Math.abs(R.top - s) > 0.5 && (e.style.top = 2 * s - R.top + "px"), Math.abs(R.left - h) > 0.5 && (e.style.left = 2 * h - R.left + "px");
  }
  function Ci() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => i("workoutModal").style.removeProperty(e));
  }
  (dc = window.visualViewport) == null || dc.addEventListener("resize", ao), (cc = window.visualViewport) == null || cc.addEventListener("scroll", ao), window.addEventListener("resize", ao), window.addEventListener("scroll", ao, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(ao, 250));
  function Ti() {
    da.length > 0;
    const e = i("addMovementBtn"), r = i("addRestBtn");
    e && (e.innerHTML = Mo + "<span>Add movement</span>"), r && (r.innerHTML = Mo + "<span>Add rest</span>");
    const s = i("addVideoBtn");
    s && (s.innerHTML = Mo + "<span>Add video</span>");
  }
  function p() {
    const e = i("useGlobalTiming").checked, r = i("addMovementDuration"), s = i("addMovementUnit");
    r.disabled = e, s.disabled = e, r.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + ua(_.value);
    const h = i("useGlobalRestTiming").checked, w = i("addRestDuration"), A = i("addRestUnit");
    w.disabled = h, A.disabled = h, w.parentElement.style.opacity = h ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + ua(P.value);
  }
  let m = "movement";
  function x(e) {
    m = e;
    const r = i("movementFields"), s = i("restFields");
    r.hidden = e !== "movement", s.hidden = e !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), p();
  }
  function T() {
    ne[Qt];
    const e = Kt ? !0 : i("useGlobalTiming").checked, r = e ? Number(_.value) : yn(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), s = Kt ? !0 : i("useGlobalRestTiming").checked, h = s ? Number(P.value) : yn(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (m === "rest") {
      const w = i("addRestTitle").value.trim() || "Rest", A = i("addRestGroup").value.trim() || "Rest";
      da.push({
        id: "rest-" + Date.now(),
        name: w,
        group: A,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, h || Number(P.value))
      }), _e(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", N("Rest added"), Kt && (L("movements"), G());
    } else {
      const w = i("addMovementInput").value.trim();
      if (!w) return;
      const A = i("addMovementGroup").value.trim() || "Movement";
      da.push({
        id: "movement-" + Date.now(),
        name: w,
        group: A,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, r || Number(_.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", _e(), i("movementCreator").hidden = !0, N("Movement added"), Kt && (L("movements"), G());
    }
    Ti();
  }
  let H = null;
  function N(e, r) {
    const s = i("toast");
    s.innerHTML = "";
    const h = document.createElement("span");
    if (h.textContent = e, s.appendChild(h), r) {
      const w = document.createElement("button");
      w.type = "button", w.className = "toastAction", w.textContent = r.label, w.addEventListener("click", () => {
        r.run(), s.classList.remove("show", "withAction"), clearTimeout(H);
      }), s.appendChild(w);
    }
    s.classList.toggle("withAction", !!r), s.classList.add("show"), clearTimeout(H), H = setTimeout(() => s.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const Y = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], rt = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function K(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function Ct(e, r) {
    return Y[K(r)];
  }
  function At(e) {
    return rt[K(e)];
  }
  function St(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Zt() {
    return { morning: ge().morningTime || "08:00", evening: ge().eveningTime || "19:00" };
  }
  function Gt(e) {
    const [r, s] = String(e).split(":").map(Number);
    return (r || 0) * 60 + (s || 0);
  }
  function Nt(e) {
    const r = Zt();
    return e.getHours() * 60 + e.getMinutes() >= Gt(r.evening) ? "evening" : "morning";
  }
  function ee(e, r) {
    return we.checkins.find((s) => s.date === e && s.slot === r);
  }
  function jt(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function _t() {
    const e = /* @__PURE__ */ new Date(), r = St(e), s = Nt(e), h = Zt(), w = e.getHours() * 60 + e.getMinutes();
    return s === "morning" && w < Gt(h.morning) || jt(ee(r, s)) ? null : s;
  }
  const Jt = i("checkinModal"), $t = i("checkinTab"), Te = i("checkinBadge"), Rt = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function He(e) {
    const { input: r, fill: s } = Rt[e];
    s.style.width = r.value + "%", r.setAttribute("aria-valuetext", Ct(e, r.value));
  }
  Object.keys(Rt).forEach((e) => Rt[e].input.addEventListener("input", () => He(e)));
  let De = null;
  function rn() {
    const e = Zt(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes();
    return s < Gt(e.morning) ? "Next check-in at " + e.morning : s < Gt(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function no() {
    const e = Zt(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes(), h = (w, A) => {
      const [R, q] = w.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (A ? 1 : 0), R, q);
    };
    return s < Gt(e.morning) ? { date: h(e.morning), time: e.morning } : s < Gt(e.evening) ? { date: h(e.evening), time: e.evening } : { date: h(e.morning, !0), time: e.morning };
  }
  let Vn = null, xa = null;
  function wr() {
    if (_t()) {
      sn(), ln();
      return;
    }
    const e = no(), r = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), s = Math.floor(r / 3600), h = Math.floor(r % 3600 / 60), w = r % 60;
    i("peekCountdown").textContent = s + ":" + String(h).padStart(2, "0") + ":" + String(w).padStart(2, "0"), i("peekAt").textContent = "Available at " + e.time;
  }
  function ye() {
    wr(), $t.classList.add("peek"), clearInterval(xa), xa = setInterval(wr, 1e3), clearTimeout(Vn), Vn = setTimeout(sn, 6e3);
  }
  function sn() {
    $t.classList.remove("peek"), clearInterval(xa), clearTimeout(Vn);
  }
  function Sn() {
    const e = _t();
    if (!e) {
      $t.classList.contains("peek") ? sn() : ye();
      return;
    }
    De = { date: St(/* @__PURE__ */ new Date()), slot: e };
    const s = ee(De.date, e), h = we.checkins.find((w) => jt(w));
    Object.keys(Rt).forEach((w) => {
      Rt[w].input.value = (s == null ? void 0 : s[w]) ?? (h == null ? void 0 : h[w]) ?? 50, He(w);
    }), i("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", Jt.classList.add("open"), Jt.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Rt.mood.input.focus());
  }
  function Gn() {
    Jt.classList.remove("open"), Jt.setAttribute("aria-hidden", "true"), De && (Un = De.date + "-" + De.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Un);
    } catch {
    }
    De = null, ln();
  }
  function xr() {
    if (!De) return;
    if (jt(ee(De.date, De.slot))) {
      Gn();
      return;
    }
    const { date: e, slot: r } = De;
    let s = ee(e, r);
    s || (s = { date: e, slot: r }, we.checkins.unshift(s), we.checkins = we.checkins.slice(0, 2e3)), s.mood = Number(Rt.mood.input.value), s.energy = Number(Rt.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), en(), d.fire("checkin", { slot: r, mood: s.mood, energy: s.energy, mood_label: Ct("mood", s.mood), energy_label: Ct("energy", s.energy) }), N((r === "morning" ? "Morning" : "Evening") + " check-in saved"), Gn(), Jr(), yr(), si(), pn();
  }
  let Un = "";
  try {
    Un = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function ln() {
    const e = _t();
    Te.hidden = !e, $t.hidden = !e, e || sn(), $t.classList.toggle("due", !!e), $t.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : rn()), $t.title = e ? "Check in now" : rn();
  }
  function Pa() {
    ln();
    const e = _t();
    !e || Jt.classList.contains("open") || ge().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !kt.home.classList.contains("active") || Wa.classList.contains("open") || Un !== St(/* @__PURE__ */ new Date()) + "-" + e && Sn());
  }
  $t.addEventListener("click", Sn), i("checkinLater").addEventListener("click", Gn), i("checkinSave").addEventListener("click", xr), Jt.addEventListener("click", (e) => {
    e.target === Jt && Gn();
  }), Jt.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Gn());
  }), setInterval(Pa, 3e4);
  function Jr() {
    const e = St(/* @__PURE__ */ new Date()), r = (s) => we.checkins.find((h) => h.date === e && h[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, h]) => {
      const w = r(s);
      i(h).textContent = w ? Ct(s, w[s]) : "—";
    });
  }
  function yr() {
    const e = i("feelCard");
    if (!e) return;
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), h = [...Array(7)].map((wt, ft) => {
      const lt = new Date(s.getFullYear(), s.getMonth(), s.getDate() + ft), Ft = St(lt), ae = we.checkins.filter((Pt) => Pt.date === Ft), qt = (Pt) => {
        const Et = ae.map((he) => he[Pt]).filter((he) => he != null);
        return Et.length ? Et.reduce((he, ve) => he + ve, 0) / Et.length : null;
      };
      return { d: lt, key: Ft, mood: qt("mood"), energy: qt("energy"), count: ae.filter(jt).length, future: lt > r && Ft !== St(r) };
    }), w = (wt) => {
      const ft = h.map((lt) => lt[wt]).filter((lt) => lt != null);
      return ft.length ? ft.reduce((lt, Ft) => lt + Ft, 0) / ft.length : null;
    }, A = w("mood"), R = w("energy"), q = (wt, ft) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + wt + "</span><span>" + (ft == null ? "—" : Yt(Ct("", ft))) + '</span></div><div class="feelTrack"><span style="width:' + (ft == null ? 0 : Math.max(4, ft)) + "%;background:" + (ft == null ? "transparent" : At(ft)) + '"></span></div></div>', ut = h.filter((wt) => wt.mood != null && wt.energy != null).sort((wt, ft) => ft.mood + ft.energy - (wt.mood + wt.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (A == null ? "No check-ins yet" : Yt(Ct("", (A + R) / 2))) + '</div><div class="weekCopy">' + (A == null ? "Your first check-in will appear here." : "on average this week" + (ut ? " · best day " + Yt(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(ut.d)) : "")) + '</div></div></div><div class="feelDays">' + h.map(
      (wt) => '<div class="weekChip feelDay' + (wt.future ? " future" : "") + (wt.key === St(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Yt(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(wt.d)) + "</strong>" + (wt.count >= 2 ? '<span class="weekTick">' + Na("check") + "</span>" : '<span class="feelDots">' + "●".repeat(wt.count) + "</span>") + "</div>" + q("Mood", wt.mood) + q("Energy", wt.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Li = i("upcomingCountSetting");
  Li.addEventListener("change", () => {
    xo = Li.value === "all" ? "all" : Number(Li.value), Qo();
  });
  const kr = i("tempoRevealBtn"), Qr = i("tempoExperiment"), Yn = i("tempoQuad"), Zo = i("tempoDot"), hd = i("tempoEstimate"), bl = i("tempoReadout");
  let Ai = { x: 0.5, y: 0.5 }, oo = !1, _i = { total: 20, work: 45, rest: 15 };
  function Mr(e, r, s, h) {
    const w = Math.max(r, Math.min(s, e));
    return Math.round((w - r) / h) * h + r;
  }
  function wl(e, r) {
    const s = (e - 0.5) * 2, h = (r - 0.5) * 2, w = Mr(
      _i.total + s * 5 + h * 8,
      Number(D.min),
      Number(D.max),
      Number(D.step)
    ), A = Mr(
      _i.work + s * 10 + h * 8,
      Number(_.min),
      Number(_.max),
      Number(_.step)
    ), R = Mr(
      _i.rest + s * 6 + h * 6,
      Number(P.min),
      Number(P.max),
      Number(P.step)
    );
    return D.value = w, _.value = A, P.value = R, mt.textContent = A + " sec", V.textContent = R + " sec", Mi(), { total: w, work: A, rest: R };
  }
  function Sr(e, r) {
    const s = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", h = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", w = wl(e, r);
    bl.textContent = s + " + " + h, hd.textContent = w.total + " min", Yn.setAttribute("aria-valuetext", s + " and " + h + ", estimated " + w.total + " minutes");
  }
  function Ns(e) {
    const r = Yn.getBoundingClientRect(), s = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), h = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
    Ai = { x: s, y: h }, Zo.style.left = s * 100 + "%", Zo.style.top = h * 100 + "%", Sr(s, h);
  }
  kr.addEventListener("click", () => {
    const e = Qr.hidden;
    Qr.hidden = !e, kr.setAttribute("aria-expanded", e ? "true" : "false"), kr.textContent = e ? "Now close this" : "Don’t try this!", e && (_i = {
      total: Number(D.value),
      work: Number(_.value),
      rest: Number(P.value)
    }, Ai = { x: 0.5, y: 0.5 }, Zo.style.left = "50%", Zo.style.top = "50%", Sr(Ai.x, Ai.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === e));
  }));
  const ts = i("testingFeedbackForm"), xl = i("testingFeedbackThanks"), md = i("testingFeedbackAgain");
  ts.addEventListener("submit", (e) => {
    e.preventDefault(), ts.hidden = !0, xl.hidden = !1, N("Feedback captured for prototype");
  }), md.addEventListener("click", (e) => {
    e.preventDefault(), ts.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), xl.hidden = !0, ts.hidden = !1;
  }), Yn.addEventListener("pointerdown", (e) => {
    var r;
    oo = !0, Ns(e);
    try {
      (r = Yn.setPointerCapture) == null || r.call(Yn, e.pointerId);
    } catch {
    }
  }), Yn.addEventListener("pointermove", (e) => {
    oo && Ns(e);
  }), Yn.addEventListener("pointerup", (e) => {
    oo && (oo = !1, Ns(e), _e());
  }), Yn.addEventListener("pointercancel", () => oo = !1), Yn.addEventListener("keydown", (e) => {
    let { x: r, y: s } = Ai, h = !0;
    e.key === "ArrowLeft" ? r -= 0.05 : e.key === "ArrowRight" ? r += 0.05 : e.key === "ArrowUp" ? s -= 0.05 : e.key === "ArrowDown" ? s += 0.05 : h = !1, h && (e.preventDefault(), r = Math.max(0, Math.min(1, r)), s = Math.max(0, Math.min(1, s)), Ai = { x: r, y: s }, Zo.style.left = r * 100 + "%", Zo.style.top = s * 100 + "%", Sr(r, s), _e());
  });
  const Wa = i("workoutModal");
  let io = null;
  function Ko(e) {
    return e.map((r) => ({ ...r }));
  }
  function gd() {
    const e = ne[Qt];
    return {
      key: Qt,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: Ko(me),
      strength: Ko(da),
      cooldown: Ko(Ue),
      total: Number(D.value),
      work: Number(_.value),
      rest: Number(P.value),
      rounds: Number(le.value) || 1
    };
  }
  function yl(e = !1) {
    Kt = !!e, fa = null, ha = null, ba(), br(), io = gd(), i("moveEditorTitle").textContent = Kt ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !Kt, i("warmupRow").hidden = Kt, i("deleteMoveOpen").hidden = Kt;
    const r = i("createMoveOptions");
    r.hidden = !Kt;
    {
      const s = ne[Qt];
      i("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), i("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (Ps(), Kt) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const s = ne[Qt];
      Dn((s == null ? void 0 : s.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, x("movement"), Ti(), p(), Qr.hidden = !0, kr.setAttribute("aria-expanded", "false"), kr.textContent = "Don’t try this!", Wa.classList.toggle("createMode", Kt), Wa.querySelector(".modal").classList.toggle("createMode", Kt), Wa.classList.add("open"), Wa.setAttribute("aria-hidden", "false"), ao(), Kt && Lt();
  }
  function Ei() {
    const e = ne[Qt];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Ps() {
    const e = Ei(), r = i("warmupSwitch");
    r.classList.toggle("on", e), r.setAttribute("aria-checked", String(e));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const e = ne[Qt];
    e && (e.customSequence ? (i("includeWarmupPreset").checked = !e.includeWarmup, cr()) : (e.warmupOff = !e.warmupOff, _e()), Ps());
  });
  function Cr() {
    ba(), br(), Ci(), ha = null, fa = null, Wa.classList.contains("createMode") && X(), Wa.classList.remove("createMode"), Wa.querySelector(".modal").classList.remove("createMode"), Wa.classList.remove("open"), Wa.setAttribute("aria-hidden", "true");
  }
  function Is() {
    if (!io) return;
    const e = io;
    e.profile && (ne[e.key] = JSON.parse(JSON.stringify(e.profile))), Qt = e.key, me = Ko(e.warmup), da = Ko(e.strength), Ue = Ko(e.cooldown), D.value = e.total, _.value = e.work, P.value = e.rest, le.value = e.rounds || 1;
    const r = ne[Qt];
    if (r) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((h) => h.classList.toggle("active", h.dataset.workout === Qt));
      const s = n.querySelector(".workoutPanel.active");
      if (s) {
        const h = s.querySelector(".workoutName");
        h && (h.textContent = r.name);
        const w = s.querySelector(".panelCollapsedText");
        w && (w.textContent = r.name);
        const A = s.querySelector(".sourceTag");
        A && (A.textContent = r.source);
      }
      v.value = r.name;
    }
    _e();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (Kt) {
      const e = Qt;
      delete ne[e], Kt = !1, It = null, ca(we.order.find((r) => ne[r]) || Object.keys(ne)[0]);
    } else
      Is();
    Cr();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    ba(), Ce && Ya();
    const e = ne[Qt], r = v.value.trim() || "New move";
    if (e && (e.name = r), _a(), fa = null, _e(), Kt && e)
      Ra(Qt, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === Qt)), Kt = !1, It = null, we.order.includes(Qt) || we.order.push(Qt), N("Move created");
    else {
      const s = n.querySelector(".workoutPanel.active");
      if (s) {
        const h = s.querySelector(".workoutName");
        h && (h.textContent = r);
        const w = s.querySelector(".panelCollapsedText");
        w && (w.textContent = r);
      }
      N("Move saved");
    }
    io = null, Cr(), en();
  }), Wa.addEventListener("click", (e) => {
    if (e.target === Wa) {
      if (Kt) {
        const r = Qt;
        delete ne[r], Kt = !1, It = null, ca(we.order.find((s) => ne[s]) || Object.keys(ne)[0]);
      } else
        Is();
      Cr();
    }
  }), qn(i("addMovementBtn"), "movement"), qn(i("addRestBtn"), "rest"), qn(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", p), i("useGlobalRestTiming").addEventListener("change", p), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    Dn(e.dataset.movePreset, !0), _e();
  })), i("includeWarmupPreset").addEventListener("change", cr), i("includeCooldownPreset").addEventListener("change", cr), i("includeWarmupPreset").addEventListener("change", G), i("includeCooldownPreset").addEventListener("change", G), v.addEventListener("input", G), v.addEventListener("input", Yo), i("confirmAddMovement").addEventListener("click", T), i("confirmAddRest").addEventListener("click", T), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && T();
  });
  const Di = i("countdown"), es = i("countNum"), ro = i("countdownPixelCanvas");
  let Tr = null, Hs = "appear";
  class vd {
    constructor(r, s, h, w, A, R, q) {
      this.width = r.width, this.height = r.height, this.ctx = s, this.x = h, this.y = w, this.color = A, this.speed = (Math.random() * 0.8 + 0.1) * R, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = q, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Bi = [], Fs = 1, as = 1;
  function Ao() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function kl() {
    var wt;
    if (!ro) return;
    const e = Ao(), r = Math.max(1, window.innerWidth / e), s = Math.max(1, window.innerHeight / e);
    Fs = r, as = s;
    const h = Math.min(window.devicePixelRatio || 1, 2);
    ro.width = Math.floor(r * h), ro.height = Math.floor(s * h), ro.style.width = r + "px", ro.style.height = s + "px";
    const w = ro.getContext("2d");
    w.setTransform(h, 0, 0, h, 0, 0);
    const A = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], R = 12, q = (wt = window.matchMedia) == null ? void 0 : wt.call(window, "(prefers-reduced-motion: reduce)").matches, ut = q ? 0 : 0.055;
    Bi = [];
    for (let ft = 0; ft < r; ft += R)
      for (let lt = 0; lt < s; lt += R) {
        const Ft = ft - r / 2, ae = lt - s / 2, qt = Math.sqrt(Ft * Ft + ae * ae), Pt = q ? 0 : Math.random() * 75 + qt * 0.05, Et = new vd({ width: r, height: s }, w, ft, lt, A[Math.floor(Math.random() * A.length)], ut, Pt);
        Et.maxSizeInteger = 4, Et.maxSize = Math.random() * 3.2 + 0.8, Et.sizeStep = 0.35 + Math.random() * 0.45, Bi.push(Et);
      }
  }
  function Ml(e) {
    cancelAnimationFrame(Tr), Hs = e;
    const r = ro == null ? void 0 : ro.getContext("2d");
    if (!r) return;
    function s() {
      r.clearRect(0, 0, Fs, as);
      let h = !0;
      Bi.forEach((w) => {
        w[Hs](), w.isIdle || (h = !1);
      }), Hs === "disappear" && h || (Tr = requestAnimationFrame(s));
    }
    Tr = requestAnimationFrame(s);
  }
  function ns() {
    cancelAnimationFrame(Tr), kl(), Ml("appear"), setTimeout(() => Ml("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Di.classList.contains("active") && ns();
  });
  const Ri = i("pixelTrailCanvas"), Ni = Ri.getContext("2d");
  let Cn = !0, Ve = 0.7, Pi = 600, Lr = [], Ii = null, Za = { x: 0, y: 0, ready: !1 };
  function Sl() {
    const e = u.getBoundingClientRect(), r = Ao(), s = Math.min(window.devicePixelRatio || 1, 2), h = Math.max(1, e.width / r), w = Math.max(1, e.height / r);
    Ri.width = Math.max(1, Math.floor(h * s)), Ri.height = Math.max(1, Math.floor(w * s)), Ri.style.width = h + "px", Ri.style.height = w + "px", Ni.setTransform(s, 0, 0, s, 0, 0);
  }
  function bd(e, r) {
    if (!Cn) return;
    const s = performance.now();
    Za.ready || (Za = { x: e, y: r, ready: !0 });
    const h = 7;
    for (let w = 1; w <= h; w++) {
      const A = w / h;
      Lr.push({
        x: Za.x + (e - Za.x) * A,
        y: Za.y + (r - Za.y) * A,
        born: s - (h - w) * 10
      });
    }
    Za = { x: e, y: r, ready: !0 };
  }
  function os(e) {
    if (Ii = null, !y) return;
    if (!kt.workout.classList.contains("active")) {
      Ii = requestAnimationFrame(os);
      return;
    }
    const r = u.getBoundingClientRect(), s = Ao();
    Ni.clearRect(0, 0, r.width / s, r.height / s), Cn && (Lr = Lr.filter((w) => e - w.born < Pi), Ni.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Lr.forEach((w) => {
      const A = (e - w.born) / Pi, R = (1 - A) * Ve, q = Math.round(w.x / 14) * 14, ut = Math.round(w.y / 14) * 14;
      Ni.globalAlpha = Math.max(0, R);
      const wt = 2 + 5 * (1 - A) * Ve;
      Ni.fillRect(q - wt / 2, ut - wt / 2, wt, wt);
    }), Ni.globalAlpha = 1), Ii = requestAnimationFrame(os);
  }
  u.addEventListener("pointermove", (e) => {
    const r = u.getBoundingClientRect(), s = Ao();
    bd((e.clientX - r.left) / s, (e.clientY - r.top) / s);
  }), u.addEventListener("pointerleave", () => Za.ready = !1), new ResizeObserver(Sl).observe(u), Sl(), Ii = requestAnimationFrame(os);
  const so = i("movementRippleCanvas"), $o = so.getContext("2d");
  let Xo = !0, Hi = null, Cl = performance.now();
  function Fi() {
    const e = so.parentElement.getBoundingClientRect(), r = Ao(), s = Math.max(1, e.width / r), h = Math.max(1, e.height / r), w = Math.min(window.devicePixelRatio || 1, 2);
    so.width = Math.max(1, Math.floor(s * w)), so.height = Math.max(1, Math.floor(h * w)), so.style.width = s + "px", so.style.height = h + "px", $o.setTransform(w, 0, 0, w, 0, 0);
  }
  function Os() {
    var e;
    return pa || ((e = Ut[ie]) == null ? void 0 : e.kind) === "rest";
  }
  function wd() {
    const e = Ut[ie];
    return Os() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function is(e) {
    if (Hi = null, !y) return;
    if (!kt.workout.classList.contains("active")) {
      Hi = requestAnimationFrame(is);
      return;
    }
    const r = so.parentElement.getBoundingClientRect(), s = Ao(), h = Math.max(1, r.width / s), w = Math.max(1, r.height / s);
    if ($o.clearRect(0, 0, h, w), Xo) {
      const A = wd(), R = (e - Cl) % A / A, q = 15, ut = Math.max(8, Math.round(q * w / Math.max(1, h))), wt = h / (q + 1), ft = w / (ut + 1), lt = h * 0.5, Ft = w * 0.52, ae = Math.hypot(lt, Ft), Pt = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let Et = 1; Et <= ut; Et++)
        for (let he = 1; he <= q; he++) {
          const ve = he * wt, zt = Et * ft, be = Math.hypot(ve - lt, zt - Ft) / ae, Be = Os(), se = Be ? Math.exp(-Math.pow((be - (R * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, oe = Math.exp(-Math.pow((be - R * 1.25) * 7, 2)), ga = Be ? se : oe, Fa = Be ? 0.5 + 0.5 * Math.sin(R * Math.PI * 2 - be * 3) ** 2 : 0.35 + 0.65 * Math.sin(R * Math.PI * 2 - be * 5) ** 2, Ye = Be ? 1.4 + ga * 4.2 * Fa : 1.2 + ga * 5 * Fa;
          $o.beginPath(), $o.arc(ve, zt, Ye, 0, Math.PI * 2), $o.fillStyle = `rgba(${Pt},${Be ? 0.08 + ga * 0.48 : 0.05 + ga * 0.55})`, $o.fill();
        }
    }
    Hi = requestAnimationFrame(is);
  }
  new ResizeObserver(Fi).observe(so.parentElement), Fi(), Hi = requestAnimationFrame(is);
  const Ia = i("exerciseTitle"), lo = i("exerciseMeta"), Ws = i("stepLabel"), qa = i("digits"), Ee = i("fill"), ja = i("progress"), Ar = i("pause"), Jo = i("nextName"), rs = i("nextMeta"), _o = i("nextIcon"), co = i("skipNextSession");
  let ma = null;
  function ke(e) {
    for (let r = Math.max(0, e); r < Ut.length; r++)
      if (!Ut[r].sessionHidden) return r;
    return -1;
  }
  function ss() {
    const e = Ut[ie];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (pa) {
      const h = ke(ie + 1), w = h >= 0 ? Ut[h] : null;
      return w ? { name: w.name, meta: ds(w), icon: ls(w) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = ke(ie + 1), s = r >= 0 ? Ut[r] : null;
    return s ? { name: s.name, meta: ds(s), icon: ls(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function _r() {
    if (!Ut[ie]) return Ut.length;
    const r = ke(ie + 1);
    return r < 0 ? Ut.length : r + 1;
  }
  function ls(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function ds(e) {
    return e.kind === "video" ? "YouTube · " + an(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function Er() {
    return Ut.length && Ut[Ut.length - 1].round || 1;
  }
  function Tl(e) {
    const r = Ut[e];
    if (!r) return "";
    const s = Er();
    if (s <= 1) return "Step " + (e + 1) + " of " + Ut.length;
    if (r.roundBreak) return "Round " + r.round + " of " + s + " · Rest";
    const h = Ut.filter((w) => w.round === r.round && !w.roundBreak).length;
    return "Round " + r.round + " of " + s + " · Step " + (r.roundIndex + 1) + " of " + h;
  }
  function cs() {
    return ja.querySelector('[data-step="' + ie + '"]');
  }
  function xd() {
    Ut[ie] && Number(ja.dataset.round) !== (Ut[ie].round || 1) && zs(), [...ja.children].forEach((e) => {
      const r = Number(e.dataset.step);
      e.classList.toggle("done", r < ie), e.classList.toggle("active", r === ie), e.classList.toggle("rewindable", r <= ie), e.disabled = r > ie, r === ie && e.style.setProperty("--segment-progress", "0%");
    }), Ut[ie] && (Ws.textContent = Tl(ie), ni());
  }
  function Ll(e) {
    const r = Ut.indexOf(e);
    r < 0 || r <= ie || (e.sessionHidden = !e.sessionHidden, ra(), N((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function Qo() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const r = _r(), s = Ut.slice(r);
    (xo === "all" ? s : s.slice(0, Math.max(1, Number(xo) || 1))).forEach((w) => {
      const A = document.createElement("section");
      A.className = "upcomingCard" + (w.sessionHidden ? " sessionHidden" : "") + (ms(w) ? " noMeta" : ""), A.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Na(ls(w)) + '</div><div><div class="upcomingName">' + Yt(w.name) + '</div><div class="upcomingMeta">' + Yt(ds(w)) + (Er() > 1 ? " · round " + w.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (w.sessionHidden ? "Include this session" : "Skip this session") + "</button>", A.querySelector(".skipSessionBtn").addEventListener("click", () => Ll(w)), e.appendChild(A);
    });
  }
  function ra() {
    var r;
    const e = ss();
    Jo.textContent = e.name, rs.textContent = e.meta, _o.innerHTML = Na(e.icon);
    {
      const s = pa ? Ut[ke(ie + 1)] : ((r = Ut[ie]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : Ut[ke(ie + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(s && ms(s)));
    }
    if (ma = null, pa) {
      const s = ke(ie + 1);
      s >= 0 && (ma = Ut[s]);
    } else {
      const s = Ut[ie];
      if (s && s.rest > 0)
        ma = null;
      else {
        const h = ke(ie + 1);
        h >= 0 && (ma = Ut[h]);
      }
    }
    co && (co.hidden = !ma, co.textContent = ma != null && ma.sessionHidden ? "Include this session" : "Skip this session"), Qo();
  }
  co.addEventListener("click", () => {
    ma && (ma.sessionHidden = !ma.sessionHidden, N((ma.sessionHidden ? "Hidden " : "Included ") + ma.name + " for this session"), ra());
  });
  let dn = null, ps = null;
  function Oi(e, r = {}) {
    const s = ne[Qt];
    d.fire(e, { move: (s == null ? void 0 : s.name) || "", move_id: Qt, ...r });
  }
  function qs() {
    const e = ne[Qt];
    dn = { key: Qt, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(ps), ps = setInterval(() => {
      dn && !Ga && dn.active++;
    }, 1e3), Oi("started", { steps: Ut.length });
  }
  function us(e) {
    if (clearInterval(ps), !dn) return;
    const r = dn;
    dn = null, Oi(e ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (we.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: e }), we.history = we.history.slice(0, 1e3), en(), si(), pn());
  }
  let Tn = null, cn = null, po = !1;
  function Wi() {
    return ge().sounds !== !1;
  }
  function js() {
    if (Wi())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), Tn = Tn || new (window.AudioContext || window.webkitAudioContext)(), Tn.state === "suspended" && Tn.resume();
      } catch {
        Tn = null;
      }
  }
  function uo(e, r, s, { to: h = e, vol: w = 0.25, type: A = "sine" } = {}) {
    const R = Tn.currentTime + r, q = Tn.createOscillator(), ut = Tn.createGain();
    q.type = A, q.frequency.setValueAtTime(e, R), h !== e && q.frequency.exponentialRampToValueAtTime(h, R + s), ut.gain.setValueAtTime(1e-4, R), ut.gain.exponentialRampToValueAtTime(w, R + 0.01), ut.gain.exponentialRampToValueAtTime(1e-4, R + s), q.connect(ut).connect(Tn.destination), q.start(R), q.stop(R + s + 0.02);
  }
  const fs = {
    tick: () => uo(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      uo(660, 0, 0.12, { type: "triangle", vol: 0.3 }), uo(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => uo(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      uo(523, 0, 0.16, { type: "triangle" }), uo(659, 0.16, 0.16, { type: "triangle" }), uo(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function Zn(e) {
    if (!(!Wi() || !Tn))
      try {
        Tn.state === "suspended" && Tn.resume(), fs[e]();
      } catch {
      }
  }
  function Dr() {
    aa >= 1 && aa <= 3 && aa !== cn && (cn = aa, Zn("tick"));
  }
  function yd() {
    js(), C("workout"), Bn();
    const e = ke(0);
    e >= 0 && Ut[e].kind === "video" && Fe(Ut[e]);
  }
  function Br() {
    Ln(), us(!1), clearInterval(Qe), clearInterval(ki), pa = !1, fo(!1), i("app").classList.remove("resting"), Di.classList.remove("active"), C("home");
  }
  function Bn() {
    Di.classList.add("active");
    let e = 5;
    es.textContent = e, Zn("tick"), requestAnimationFrame(ns), clearInterval(ki), ki = setInterval(() => {
      e--, e > 0 ? (es.textContent = e, Zn("tick"), ns()) : (clearInterval(ki), es.textContent = "GO", Zn("move"), po = !0, ns(), setTimeout(() => {
        Di.classList.remove("active"), cancelAnimationFrame(Tr), hs();
      }, 650));
    }, 1e3);
  }
  function zs() {
    var r;
    ja.innerHTML = "";
    const e = ((r = Ut[Math.max(0, ie)] || Ut[0]) == null ? void 0 : r.round) || 1;
    ja.dataset.round = e, Ut.forEach((s, h) => {
      if ((s.round || 1) !== e) return;
      const w = document.createElement("button");
      w.dataset.step = h, w.type = "button", w.className = "progressSegment", w.setAttribute("aria-label", "Go to " + s.name), w.addEventListener("click", () => {
        h <= ie && Ka(h);
      }), ja.appendChild(w);
    });
  }
  function fo(e) {
    e = !!e;
    const r = Ga !== e;
    if (Ga = e, Ar.textContent = e ? "Resume" : "Pause", i("app").classList.toggle("paused", e), ya && qe)
      try {
        e ? qe.pauseVideo() : qe.playVideo();
      } catch {
      }
    r && dn && Oi(e ? "paused" : "resumed");
  }
  function Ka(e) {
    e < 0 || e >= Ut.length || e > ie || (clearInterval(Qe), pa = !1, i("app").classList.remove("resting"), ie = e, fo(!1), ai(), Qe = setInterval(Bo, 1e3));
  }
  function hs() {
    if (ie = ke(0), fo(!1), zs(), ie < 0) {
      Ia.textContent = "No activities", lo.textContent = "Open Edit and enable or add a movement", lo.hidden = !1;
      return;
    }
    qs(), ai(), clearInterval(Qe), Qe = setInterval(Bo, 1e3);
  }
  const qi = i("videoStage"), Rn = i("videoSound"), Al = 0, Eo = 1, kd = 2;
  let Vs = 0, ho = null, mo = null, qe = null, Do = null, Rr = 0, Nr = !1, ya = null, Gs = null;
  function _l() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : ho || (ho = new Promise((r, s) => {
      const h = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          h == null || h();
        } catch {
        }
      };
      const w = setInterval(() => {
        var R;
        (R = window.YT) != null && R.Player && (clearInterval(w), clearTimeout(A), r(window.YT));
      }, 100), A = setTimeout(() => {
        clearInterval(w), ho = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const R = document.createElement("script");
        R.src = "https://www.youtube.com/iframe_api", R.async = !0, R.onerror = () => {
          clearInterval(w), clearTimeout(A), ho = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(R);
      }
    }), ho);
  }
  function El() {
    return mo || (mo = _l().then((e) => new Promise((r) => {
      const s = document.createElement("div");
      i("videoFrame").appendChild(s), qe = new e.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(qe), onStateChange: (h) => go(h.data), onError: (h) => vo(h.data) }
      });
    })), mo.catch(() => {
      mo = null;
    }), mo);
  }
  function Fe(e) {
    !(e != null && e.videoId) || e.videoError || El().then((r) => {
      ya || Do === e.videoId || (Do = e.videoId, Rr = Number(e.start) || 0, Nr = !1, r.mute(), r.loadVideoById({ videoId: e.videoId, startSeconds: Rr }));
    }).catch(() => {
    });
  }
  function Kn() {
    const e = ke(ie + 1);
    e >= 0 && Ut[e].kind === "video" && Fe(Ut[e]);
  }
  function go(e) {
    if (!ya) {
      e === Eo && !Nr && (Nr = !0, qe.pauseVideo(), qe.seekTo(Rr, !0));
      return;
    }
    qi.classList.toggle("playing", e === Eo), Ut[ie] === ya && performance.now() > Vs && (e === Eo && Ga ? fo(!1) : e === kd && !Ga && fo(!0)), e === Eo && Dl(ya.videoId, qe.getDuration()) && en(), e === Al && ti();
  }
  function vo(e) {
    const r = ya;
    if (!r) {
      Do = null;
      return;
    }
    e === 101 || e === 150 ? (Bl(r.videoId), N("That video can’t play outside YouTube, so it was skipped")) : N("The video couldn’t play, so it was skipped"), ti();
  }
  function Pr(e) {
    if (i("app").classList.add("videoStep"), Rn.hidden = !0, ya = e, clearTimeout(Gs), !e.videoId) {
      N("This video step has no link yet, so it was skipped"), setTimeout(() => ti(), 0);
      return;
    }
    El().then((r) => {
      if (ya !== e) return;
      Vs = performance.now() + 1500;
      const s = Number(e.start) || 0;
      Do !== e.videoId ? (Do = e.videoId, Rr = s, r.loadVideoById({ videoId: e.videoId, startSeconds: s })) : (r.seekTo(s, !0), r.playVideo()), r.unMute(), Ga && r.pauseVideo(), Gs = setTimeout(() => {
        ya !== e || Ga || (r.getPlayerState() !== Eo ? (r.mute(), r.playVideo(), Rn.hidden = !1) : r.isMuted() && (Rn.hidden = !1));
      }, 1600);
    }).catch(() => {
      ya === e && (N("YouTube didn’t load, so the video was skipped"), ti());
    });
  }
  function Ha() {
    if (!i("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), r = n.querySelector(".sessionControlRow"), s = e.getBoundingClientRect().top, h = (r == null ? void 0 : r.offsetHeight) || 42, w = window.innerHeight - s - 16 - h - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(w)) + "px");
  }
  window.addEventListener("resize", Ha);
  function Ln() {
    clearTimeout(Gs);
    const e = ya;
    if (ya = null, i("app").classList.remove("videoStep"), qi.classList.remove("playing"), Rn.hidden = !0, e && qe) {
      try {
        qe.pauseVideo();
      } catch {
      }
      Do = null;
    }
  }
  function ti() {
    const e = ya;
    !e || Ut[ie] !== e || (Ln(), clearInterval(Qe), oi(), Qe = setInterval(Bo, 1e3));
  }
  Rn.addEventListener("click", () => {
    qe && (qe.unMute(), qe.playVideo()), Rn.hidden = !0;
  });
  function ei(e) {
    var h;
    const r = Number(e.start) || 0;
    if (e.useVideoLength === !1) return r + (Number(e.duration) || 300);
    const s = qe && ya === e && Number((h = qe.getDuration) == null ? void 0 : h.call(qe)) || 0;
    return Number(e.end) || s || Number(e.videoDuration) || r + (Number(e.duration) || 300);
  }
  function Us(e, r) {
    const s = ne[Qt];
    [me, da, Ue, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((h) => (Array.isArray(h) ? h : []).forEach((w) => {
      w && w.kind === "video" && w.videoId === e && r(w);
    }));
  }
  function Dl(e, r) {
    r = Math.round(Number(r) || 0);
    let s = !1;
    return e && r > 0 && Us(e, (h) => {
      h.videoDuration !== r && (h.videoDuration = r, s = !0);
    }), s;
  }
  function Bl(e) {
    Us(e, (r) => {
      r.videoError = "embed";
    }), en();
  }
  function ka(e) {
    const r = e.videoId;
    if (!r) return;
    const s = () => {
      Wa.classList.contains("open") ? fa || _e() : (_e(), en());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((h) => h.ok ? h.json() : Promise.reject(h.status)).then((h) => {
      e.videoId === r && (e.videoTitle = h.title || "", e.autoName && h.title && (e.name = h.title), s());
    }).catch((h) => {
      e.videoId === r && h === 401 && (e.videoError = "embed", s());
    }), ji(r).then((h) => {
      Dl(r, h) && s();
    }).catch((h) => {
      h === "embed" && e.videoId === r && (e.videoError = "embed", s());
    });
  }
  function ji(e) {
    return _l().then((r) => new Promise((s, h) => {
      const w = document.createElement("div");
      w.className = "videoProbe", w.setAttribute("aria-hidden", "true");
      const A = document.createElement("div");
      w.appendChild(A), i("app").appendChild(w);
      let R = null, q = !1;
      const ut = (lt, Ft) => {
        q || (q = !0, clearTimeout(wt), setTimeout(() => {
          try {
            R == null || R.destroy();
          } catch {
          }
          w.remove();
        }, 0), Ft ? h(Ft) : s(lt));
      }, wt = setTimeout(() => ut(0), 2e4), ft = () => {
        var Ft;
        const lt = Number((Ft = R == null ? void 0 : R.getDuration) == null ? void 0 : Ft.call(R)) || 0;
        return lt > 0 && ut(lt), lt > 0;
      };
      R = new r.Player(A, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            ft() || (R.mute(), R.playVideo());
          },
          onStateChange: () => ft(),
          onError: (lt) => ut(0, lt.data === 101 || lt.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function ai() {
    pa = !1;
    const e = Ut[ie];
    i("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? Pr(e) : Ln(), aa = e.duration, Jn = e.duration, cn = null, po ? po = !1 : Zn(e.kind === "rest" ? "rest" : "move"), Ia.textContent = e.name, lo.textContent = e.group, lo.hidden = !0, Ws.textContent = Tl(ie), dn && Oi("step", { name: e.name, group: e.group, kind: e.kind, step: ie + 1, of: Ut.length, round: e.round || 1, rounds: Er(), duration: e.duration }), ra(), xd(), Kn(), e.kind === "video" && setTimeout(Ha, 0);
  }
  function ni() {
    var w;
    const e = ((w = Ut[ie]) == null ? void 0 : w.kind) === "video" && !pa, r = e && aa >= 60;
    qa.textContent = r ? an(aa) : aa, qa.classList.toggle("long", r), e && (i("videoClock").textContent = an(aa) + " left");
    const s = aa / Jn * 100;
    Ee.style.width = s + "%";
    const h = cs();
    if (h && !pa) {
      const A = 100 - s;
      h.style.setProperty("--segment-progress", A + "%");
    }
  }
  function Bo() {
    var r, s;
    if (Ga) return;
    const e = Ut[ie];
    if ((e == null ? void 0 : e.kind) === "video" && !pa && ya === e) {
      const h = Number((r = qe == null ? void 0 : qe.getCurrentTime) == null ? void 0 : r.call(qe)) || 0, w = Number(e.start) || 0, A = ei(e);
      Jn = Math.max(1, A - w), (h > w || ((s = qe == null ? void 0 : qe.getPlayerState) == null ? void 0 : s.call(qe)) === Eo) && (aa = Math.max(0, Math.ceil(A - h))), ni(), Dr(), h > w && h >= A - 0.25 && ti();
      return;
    }
    aa--, ni(), Dr(), aa <= 0 && (e.rest > 0 ? Ys(e.rest) : oi());
  }
  function Ys(e) {
    var s;
    pa = !0, i("app").classList.add("resting");
    const r = cs();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(Qe), aa = e, Jn = e, cn = null, Zn("rest"), dn && Oi("rest", { duration: e }), Ia.textContent = "Rest", lo.textContent = (s = Ut[ie]) != null && s.roundBreakAfter ? "Round " + (Ut[ie].round + 1) + " next" : "Recovery", ra(), ni(), Qe = setInterval(() => {
      Ga || (aa--, ni(), Dr(), aa <= 0 && (clearInterval(Qe), oi(), Qe = setInterval(Bo, 1e3)));
    }, 1e3);
  }
  function oi() {
    pa = !1;
    const e = ke(ie + 1);
    if (e >= 0)
      ie = e, ai();
    else {
      clearInterval(Qe), Ln(), fo(!1), i("app").classList.remove("resting"), Ia.textContent = "Complete", lo.textContent = "Move finished", lo.hidden = !1, qa.textContent = "✓";
      {
        const r = Er();
        Ws.textContent = r > 1 ? r + " rounds done" : Ut.filter((s) => !s.roundBreak).length + " steps done";
      }
      us(!0), Zn("done");
      {
        const r = de(7).reduce((s, h) => s + h.minutes, 0);
        lo.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      Ee.style.width = "100%", ra();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    Rl(), fo(!1);
  });
  function Rl() {
    clearInterval(Qe);
    const e = Ut[ie];
    if (pa) {
      pa = !1, i("app").classList.remove("resting");
      const s = ke(ie + 1);
      s >= 0 ? (ie = s, ai(), Qe = setInterval(Bo, 1e3)) : oi();
      return;
    }
    if (e && e.rest > 0) {
      Ys(e.rest);
      return;
    }
    const r = ke(ie + 1);
    r >= 0 ? (ie = r, ai(), Qe = setInterval(Bo, 1e3)) : oi();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(Qe), fo(!1), pa) {
      const e = Ut[ie];
      aa = e.rest, Jn = e.rest, cn = null, Zn("rest"), Ia.textContent = "Rest", lo.textContent = "Recovery", i("app").classList.add("resting"), ra(), ni();
    } else
      ai();
    Qe = setInterval(pa ? () => {
      Ga || (aa--, ni(), Dr(), aa <= 0 && (clearInterval(Qe), oi(), Qe = setInterval(Bo, 1e3)));
    } : Bo, 1e3);
  });
  function Ir(e, r, s, h) {
    let w = 0, A = null, R = !1;
    function q() {
      A && cancelAnimationFrame(A), A = null, w = 0, R = !1, r.style.width = "0%", e.classList.remove("holding");
    }
    function ut(lt) {
      if (!R) return;
      w || (w = lt);
      const Ft = Math.min(1, (lt - w) / s);
      if (r.style.width = Ft * 100 + "%", Ft >= 1) {
        R = !1, A && cancelAnimationFrame(A), A = null, r.style.width = "100%", setTimeout(() => r.style.width = "0%", 90), h();
        return;
      }
      A = requestAnimationFrame(ut);
    }
    function wt(lt) {
      var Ft;
      if (!(lt && lt.button !== void 0 && lt.button !== 0)) {
        lt == null || lt.preventDefault(), q(), R = !0, e.classList.add("holding");
        try {
          (Ft = e.setPointerCapture) == null || Ft.call(e, lt.pointerId);
        } catch {
        }
        A = requestAnimationFrame(ut);
      }
    }
    function ft() {
      R && q();
    }
    e.addEventListener("pointerdown", wt), e.addEventListener("pointerup", ft), e.addEventListener("pointercancel", ft), e.addEventListener("lostpointercapture", ft), e.addEventListener("keydown", (lt) => {
      (lt.key === " " || lt.key === "Enter") && !lt.repeat && wt(lt);
    }), e.addEventListener("keyup", (lt) => {
      (lt.key === " " || lt.key === "Enter") && ft();
    });
  }
  const Md = i("endWorkout");
  Ir(Md, i("holdEndFill"), 1500, Br);
  const zi = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    zi.classList.add("open"), zi.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    zi.classList.remove("open"), zi.setAttribute("aria-hidden", "true");
  });
  function $a() {
    const e = Qt, r = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    r && r.remove(), delete ne[e], we.order = we.order.filter((h) => h !== e);
    let s = n.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const h = "custom-" + Date.now();
      ne[h] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, we.order.push(h), s = Ra(h, ne[h]);
    }
    zi.classList.remove("open"), zi.setAttribute("aria-hidden", "true"), io = null, Cr(), ca(s.dataset.workout), en(), N("Move deleted");
  }
  Ir(i("deleteMoveYes"), i("deleteMoveFill"), 1500, $a);
  const Hr = n.querySelector(".rubberTabs"), ii = i("rubberIndicator");
  function Vi(e, r = !0) {
    if (!e || !Hr || !ii) return;
    const s = Hr.getBoundingClientRect(), h = e.getBoundingClientRect();
    ii.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const w = Ao();
    ii.style.left = (h.left - s.left) / w + Hr.scrollLeft + "px", ii.style.width = h.width / w + "px", r && (ii.style.transform = "scaleX(1.08)", setTimeout(() => ii.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), Vi(e, !0);
  })), requestAnimationFrame(() => Vi(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Vi(n.querySelector(".tab.active"), !1));
  const Fr = i("pixelTrailToggle"), Zs = i("rippleToggle"), Gi = i("trailStrength"), Ui = i("trailLife");
  function Xa(e, r) {
    ge()[e] = r, en();
  }
  const Ks = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Nl(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function ms(e) {
    var r;
    return !!((r = ge().hideMeta) != null && r[Nl(e)]);
  }
  function Pl() {
    const e = /* @__PURE__ */ new Map(), r = (s, h, w) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const A = Nl(s);
      let R = e.get(A);
      R || (R = { key: A, label: A === "rest" ? "Rest" : A === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(A, R)), R.kinds.add(A === "rest" ? "Rest" : A === "video" ? "Video" : h), R.moves.add(w), R.count++;
    };
    return Object.values(ne).forEach((s) => {
      const h = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Ht)).forEach((w) => r(w, "Warm-up", h)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((w) => r(w, w.presetRole === "warmup" ? "Warm-up" : w.presetRole === "cooldown" ? "Cooldown" : "Movement", h)), (s.cooldown || (s.customSequence ? [] : ue)).forEach((w) => r(w, "Cooldown", h));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, h]) => {
      e.has(s) || e.set(s, { key: s, label: h, kinds: /* @__PURE__ */ new Set([h]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, h) => Ks.indexOf(s.kind) - Ks.indexOf(h.kind) || s.label.localeCompare(h.label));
  }
  let gs = "all";
  function vs() {
    const e = i("metaSearch").value.trim().toLowerCase();
    return Pl().filter((r) => (gs === "all" || r.kind === gs) && (!e || r.label.toLowerCase().includes(e) || r.moves.some((s) => s.toLowerCase().includes(e))));
  }
  function Ro() {
    const e = i("metaTableBody");
    if (!e) return;
    const r = ge().hideMeta || {}, s = vs();
    e.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((w) => {
      const A = !r[w.key], R = w.count ? (w.moves.length > 2 ? w.moves.slice(0, 2).join(", ") + " + " + (w.moves.length - 2) + " more" : w.moves.join(", ")) + " · " + w.count + " step" + (w.count === 1 ? "" : "s") : "Not used yet", q = document.createElement("tr");
      q.className = A ? "" : "off", q.innerHTML = '<td><div class="metaType">' + Yt(w.label) + '</div><div class="metaSub">' + Yt(w.kind + " · " + R) + '</div></td><td class="metaKindCol">' + Yt(w.kind) + '</td><td class="metaUsedCol">' + Yt(R) + '</td><td class="metaSwitchCol"><button class="switch' + (A ? " on" : "") + '" type="button" role="switch" aria-checked="' + A + '" aria-label="Second line for ' + Yt(w.label) + ' on phones"></button></td>', q.querySelector(".switch").addEventListener("click", () => $s([w.key], A)), e.appendChild(q);
    });
    const h = s.filter((w) => r[w.key]).length;
    i("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (h ? " · " + h + " hidden on phones" : "") : "";
  }
  function $s(e, r) {
    const s = { ...ge().hideMeta || {} };
    e.forEach((h) => {
      r ? s[h] = !0 : delete s[h];
    }), Xa("hideMeta", s), Ro(), $e(), ra();
  }
  i("metaSearch").addEventListener("input", Ro), i("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    gs = e.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === e)), Ro();
  })), i("metaHideAll").addEventListener("click", () => $s(vs().map((e) => e.key), !0)), i("metaShowAll").addEventListener("click", () => $s(vs().map((e) => e.key), !1));
  const No = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...ge().toggles || {} };
  function Il() {
    n.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", No[s.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, h]) => {
      i(h).hidden = No[s] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((s) => No[s] !== !1);
    n.querySelector(".activityCard").hidden = !e, i("weatherCard").hidden = !0;
    const r = n.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !e), r.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    No[e.dataset.toggle] = No[e.dataset.toggle] === !1, Il(), Xa("toggles", { ...No });
  })), Il();
  function Hl() {
    Fr.classList.toggle("on", Cn), Zs.classList.toggle("on", Xo), Gi.value = Math.round(Ve * 100), i("trailStrengthValue").textContent = Gi.value + "%", Ui.value = Pi, i("trailLifeValue").textContent = Ui.value + " ms";
  }
  ge().trailEnabled !== void 0 && (Cn = ge().trailEnabled), ge().rippleEnabled !== void 0 && (Xo = ge().rippleEnabled), ge().trailStrength !== void 0 && (Ve = ge().trailStrength), ge().trailMaxAge !== void 0 && (Pi = ge().trailMaxAge), Hl();
  const ri = i("soundsToggle");
  ri.classList.toggle("on", Wi()), ri.addEventListener("click", () => {
    Xa("sounds", !Wi()), ri.classList.toggle("on", Wi()), Wi() && (js(), Zn("move"));
  }), Fr.addEventListener("click", () => {
    Cn = !Cn, Fr.classList.toggle("on", Cn), Cn || (Lr = []), Xa("trailEnabled", Cn);
  }), Zs.addEventListener("click", () => {
    Xo = !Xo, Zs.classList.toggle("on", Xo), Xa("rippleEnabled", Xo);
  }), Gi.addEventListener("input", () => {
    Ve = Number(Gi.value) / 100, i("trailStrengthValue").textContent = Gi.value + "%";
  }), Gi.addEventListener("change", () => Xa("trailStrength", Ve)), Ui.addEventListener("input", () => {
    Pi = Number(Ui.value), i("trailLifeValue").textContent = Ui.value + " ms";
  }), Ui.addEventListener("change", () => Xa("trailMaxAge", Pi)), Li.addEventListener("change", () => Xa("upcomingCount", xo));
  function Xs(e) {
    n.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === e));
    const r = e === "light";
    i("app").classList.toggle("light", r), d.setLight(r), ci(n);
  }
  Xs(ge().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Xs(e.dataset.theme), Xa("theme", e.dataset.theme);
  }));
  const oa = { steps: null, weather: null, ...ge().entities || {} };
  let sa = null, Or = {};
  function Js(e) {
    const r = Object.values(e).filter((q) => q.entity_id.startsWith("sensor.") || q.entity_id.startsWith("input_number.")), s = (q) => q.attributes.friendly_name || q.entity_id, h = r.filter((q) => /step/i.test(q.entity_id) || /step/i.test(s(q)) || ["steps", "step"].includes(String(q.attributes.unit_of_measurement || "").toLowerCase())), w = r.filter((q) => !h.includes(q)), A = (q, ut) => s(q).localeCompare(s(ut)), R = (q, ut) => /health_steps/.test(ut.entity_id) - /health_steps/.test(q.entity_id) || A(q, ut);
    return { suggested: h.sort(R), rest: w.sort(A), label: s };
  }
  function Fl(e) {
    const r = i("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: s, rest: h, label: w } = Js(e), A = (ut) => '<option value="' + Yt(ut.entity_id) + '">' + Yt(w(ut)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(A).join("") + "</optgroup>" : "") + (h.length ? '<optgroup label="All sensors">' + h.map(A).join("") + "</optgroup>" : ""), r.value = oa.steps || "";
    const R = i("stepsStatus"), q = oa.steps && e[oa.steps];
    R.textContent = q ? "Connected · " + w(q) : R.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    oa.steps = i("stepsEntity").value || null, Xa("entities", { ...oa }), Or = {}, ql(), sa && (Fl(sa), bs(sa));
  });
  function Da(e, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(e);
  }
  function Ol() {
    const e = oa.steps && (sa == null ? void 0 : sa[oa.steps]), r = Number(e == null ? void 0 : e.state);
    return Number.isFinite(r) ? r : null;
  }
  function bs(e) {
    var h;
    const r = oa.steps, s = r ? Number((h = e[r]) == null ? void 0 : h.state) : NaN;
    i("stepsMeta").textContent = r ? Number.isFinite(s) ? Da(s) : "—" : "Set up in Settings";
  }
  let Wl = 0;
  async function ql() {
    const e = oa.steps;
    if (!e || !d.ws) return;
    Wl = Date.now();
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const h = await d.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: r.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), w = (h == null ? void 0 : h[e]) || [], A = {};
      if (w.forEach((R) => {
        Number.isFinite(R.max) && (A[St(new Date(R.start))] = R.max);
      }), !Object.keys(A).length) {
        const R = await d.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: r.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((R == null ? void 0 : R[e]) || []).forEach((q) => {
          const ut = Number(q.s ?? q.state), wt = q.lu ? q.lu * 1e3 : Date.parse(q.last_updated || q.last_changed);
          if (!Number.isFinite(ut) || !wt) return;
          const ft = St(new Date(wt));
          A[ft] = Math.max(A[ft] || 0, ut);
        });
      }
      Or = A, pn();
    } catch {
    }
  }
  function si() {
    pn();
  }
  si(), setInterval(() => {
    si(), yr(), ln();
  }, 10 * 60 * 1e3);
  function de(e) {
    const r = {}, s = {};
    we.history.forEach((R) => {
      const q = St(new Date(R.start));
      r[q] = (r[q] || 0) + (R.seconds || 0) / 60, s[q] = (s[q] || 0) + 1;
    });
    const h = /* @__PURE__ */ new Date(), w = St(h), A = [];
    for (let R = e - 1; R >= 0; R--) {
      const q = new Date(h.getFullYear(), h.getMonth(), h.getDate() - R), ut = St(q), wt = we.checkins.filter((lt) => lt.date === ut), ft = (lt) => {
        const Ft = wt.map((ae) => ae[lt]).filter(Boolean);
        return Ft.length ? Ft.reduce((ae, qt) => ae + qt, 0) / Ft.length : null;
      };
      A.push({
        key: ut,
        date: q,
        minutes: Math.round(r[ut] || 0),
        moves: s[ut] || 0,
        steps: ut === w && Ol() != null ? Ol() : Or[ut] ?? null,
        mood: ft("mood"),
        energy: ft("energy")
      });
    }
    return A;
  }
  function jl(e) {
    let r = e.length - 1;
    e[r] && !e[r].minutes && r--;
    let s = 0;
    for (; r >= 0 && e[r].minutes > 0; )
      s++, r--;
    return s;
  }
  function pn() {
    const e = i("insightCard");
    if (!e) return;
    const r = de(30), s = jl(r), h = r.reduce((wt, ft) => wt + ft.minutes, 0), w = /* @__PURE__ */ new Date(), A = St(w), R = St(new Date(w.getFullYear(), w.getMonth(), w.getDate() - (w.getDay() + 6) % 7)), q = r.filter((wt) => wt.key >= R && wt.key <= A).reduce((wt, ft) => wt + ft.minutes, 0), ut = (wt, ft, lt) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + wt + '</div><div><div class="activityRowName">' + Yt(ft) + '</div><div class="activityRowMeta">' + Yt(lt) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + Na("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + ut(Na("clock"), "This week", q + " min") + ut(Na("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + ut(Na("calendar"), "30 days", h + " min") + "</div>";
  }
  const Wr = {
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
  }, Po = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", li = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, ws = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Qs = 0;
  const qr = (e, r) => '<path class="' + r + '" d="' + e + '"/>', tl = (e, r) => ' style="animation-delay:-' + Math.round(e * 137 % r) + 'ms"', za = (e, r, s, h) => {
    const w = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (h < 1 ? ' opacity="' + h + '"' : "") + tl(e, 2400) + ' d="M' + e + " " + (r - s) + "L" + (e + w) + " " + (r - w) + "L" + (e + s) + " " + r + "L" + (e + w) + " " + (r + w) + "L" + e + " " + (r + s) + "L" + (e - w) + " " + (r + w) + "L" + (e - s) + " " + r + "L" + (e - w) + " " + (r - w) + 'Z"/>';
  }, xs = ([e, r, s], h) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + h + ')"/><defs><linearGradient id="' + h + '" x1="0" y1="' + r + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', zl = (e, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', el = (e) => (e ? ["29.35", "43.04", "56.74"].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), Vl = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, s], h) => '<circle class="wxFlake" style="animation-delay:-' + h * 640 + 'ms" cx="' + r + '" cy="' + s + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Yi(e, r, s, h) {
    return e === "clear" ? r ? xs(s ? ws.l : ws.s, h) + (s ? za(70, 20, 5.83, 1) + za(78.33, 41.67, 3.75, 0.8) + za(60, 71.67, 3.33, 0.6) : za(42, 12, 3.5, 1) + za(47, 25, 2.25, 0.8) + za(36, 43, 2, 0.6)) : zl(h, s) : e === "partly" ? (r ? xs(s ? ws.lp : ws.sp, h) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + qr(s ? li.lp : li.sp, r ? "wxCloudLight" : "wxBright") + (r ? s ? za(73.33, 16.67, 4.17, 0.9) : za(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? qr(s ? li.lc : li.s, r ? "wxCloudLight" : "wxBright") + (r ? s ? za(15, 15, 3.75, 0.8) + za(76.67, 13.33, 2.92, 0.6) : za(9, 9, 2.25, 0.8) + za(46, 8, 1.75, 0.6) : "") : qr(s ? li.lr : li.s, "wxCloudLight") + (e === "rain" ? el(s) : Vl(s));
  }
  const al = () => {
    var e;
    return ((e = sa == null ? void 0 : sa["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let Va = ge().weatherStyle || "bitmap", nl = ge().weatherLayout === "strip" ? "strip" : "tiles", ys = ge().weatherMotion !== !1;
  const di = () => ys && !Aa(), Zi = /* @__PURE__ */ new Map(), ol = 700, Sd = (e) => {
    const [r, s] = e.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: s === "night" };
  };
  function jr(e, r, s, h = Va, w, A) {
    let R = Po(e);
    const q = R === "night" || (A != null ? !!A : !!s && al());
    R === "night" && (R = "clear");
    const ut = r ? 90 : 54, wt = fd(e, q), ft = performance.now();
    let lt = w ? Zi.get(w) : null;
    if (w && !lt ? Zi.set(w, lt = { key: wt, t0: -1e9 }) : lt && lt.key !== wt && (lt.fromKey = lt.key, lt.from = lt.last || null, lt.key = wt, lt.t0 = ft), h !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + wt + '"' + (w ? ' data-wx-slot="' + w + '"' : "") + ' data-wx-style="' + h + '" data-wx-size="' + ut + '"></canvas></span>';
    let Ft = "";
    if (lt && ft - lt.t0 < ol && (di() || Aa())) {
      const ae = Sd(lt.fromKey);
      Ft = '<span class="wxLayer wxOut ' + ae.k + (ae.night ? " night" : "") + '" style="animation-delay:' + Math.round(lt.t0 - ft) + 'ms"><svg viewBox="0 0 ' + ut + " " + ut + '">' + Yi(ae.k, ae.night, r, "wxg" + ++Qs) + "</svg></span>";
    }
    return '<span class="wxIcon ' + R + (q ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + ut + " " + ut + '">' + Yi(R, q, r, "wxg" + ++Qs) + "</svg>" + Ft + "</span>";
  }
  function ks() {
    const e = i("app"), r = getComputedStyle(e), s = (q) => r.getPropertyValue(q).trim(), h = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([q, ut]) => {
      s(ut) && (h[q] = s(ut));
    });
    const w = s("--color-text-primary") || "#f1f1f1", A = s("--color-bg-card") || "#222222", R = e.classList.contains("light");
    return { colors: h, ink: R ? w : A, paper: R ? A : w };
  }
  function ci(e, r = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const h = ks(), w = di(), A = Aa();
    s.forEach((R) => {
      var lt;
      const q = R.dataset.wx, ut = R.dataset.wxSlot ? Zi.get(R.dataset.wxSlot) : null;
      let wt = Xd(q, h.colors);
      if (ut && ut.key === q) {
        const Ft = (r - ut.t0) / ol;
        Ft < 1 && (w || A) && (wt = Jp(ut.from || Xd(ut.fromKey, h.colors), wt, Math.max(0, Ft), h.colors, A)), ut.last = wt;
      }
      const ft = hp(wt, { size: Number(R.dataset.wxSize) || 54, px: 2, oneBit: R.dataset.wxStyle === "onebit", colors: h.colors, ink: h.ink, paper: h.paper, clock: r, idle: w });
      R.width !== ft.w && (R.width = ft.w), R.height !== ft.h && (R.height = ft.h), (lt = R.getContext("2d")) == null || lt.putImageData(new ImageData(ft.data, ft.w, ft.h), 0, 0);
    });
  }
  let Ms = null, Gl = -1;
  function Ss(e) {
    if (Ms = null, !y) return;
    const r = di(), s = Math.floor(e / 100), h = [...Zi.values()].some((ut) => e - ut.t0 < ol), w = [...zr.values()].some((ut) => e - ut.t0 < ut.dur), A = kt.home.classList.contains("active"), R = a.classList.contains("open"), q = r && Va === "smooth" && (R || A && nl === "strip");
    !document.hidden && (h || w || q || r && s !== Gl) && (Gl = s, A && (ci(i("weatherCard"), e), $i(i("weatherCard"), e)), R && (ci(a, e), $i(a, e))), (r || h || w) && (Ms = requestAnimationFrame(Ss));
  }
  function Io() {
    i("app").classList.toggle("wxMotion", di()), !Ms && y && (Ms = requestAnimationFrame(Ss));
  }
  let Ul = [];
  const ta = 36e5, Cs = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function Nn() {
    const e = /* @__PURE__ */ new Date(), r = (A, R) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + A, R), s = [], h = [], w = [...Array(6)].map((A, R) => {
      const q = r(R, 6), ut = r(R, 18), wt = r(R + 1, 6), ft = Ul.find((Ft) => St(new Date(Ft.datetime)) === St(q)), lt = (Ft, ae, qt) => {
        const Pt = s.filter((ve) => ve.t >= +Ft && ve.t < +ae);
        if (Pt.length) {
          const ve = {};
          return Pt.forEach((zt) => {
            ve[zt.c] = (ve[zt.c] || 0) + (Cs.has(zt.c) ? 2 : 1);
          }), Object.entries(ve).sort((zt, be) => be[1] - zt[1])[0][0];
        }
        const Et = h.find((ve) => {
          const zt = +new Date(ve.datetime);
          return zt >= +Ft - 3 * ta && zt < +ae && (ve.is_daytime == null || !!ve.is_daytime == !qt);
        });
        if (Et) return Et.condition;
        const he = (ft == null ? void 0 : ft.condition) || "cloudy";
        return qt && he === "sunny" ? "clear-night" : he;
      };
      return { start: +q, end: +wt, day: lt(q, ut, !1), night: lt(ut, wt, !0), hi: Number(ft == null ? void 0 : ft.temperature), lo: Number(ft == null ? void 0 : ft.templow) };
    });
    return { days: w, hours: s, start: w[0].start, end: w[5].end };
  }
  const Ki = (e, r) => {
    const s = e.days.findIndex((w) => r < w.end);
    if (s < 0) return 1;
    const h = e.days[s];
    return Math.max(0, (s + (r - h.start) / (h.end - h.start)) / 6);
  }, Cd = (e, r) => {
    const s = Math.max(0, Math.min(0.99999, r)) * 6, h = Math.floor(s), w = e.days[h];
    return w.start + (s - h) * (w.end - w.start);
  };
  function il(e, r) {
    const s = Math.max(0, e.days.findIndex((ut) => r < ut.end)), h = e.days[s], w = (r - h.start) / (h.end - h.start) >= 0.5;
    let A = w ? h.night : h.day, R = NaN;
    const q = e.hours;
    if (q.length && r >= q[0].t - ta && r <= q[q.length - 1].t + ta) {
      let ut = q.findIndex((lt) => lt.t > r);
      ut < 0 && (ut = q.length);
      const wt = q[Math.max(0, ut - 1)], ft = q[Math.min(q.length - 1, ut)];
      A = wt.c || A, R = ft.t > wt.t ? wt.temp + (ft.temp - wt.temp) * Math.max(0, Math.min(1, (r - wt.t) / (ft.t - wt.t))) : wt.temp;
    }
    if (!Number.isFinite(R)) {
      const ut = [];
      if (e.days.forEach((wt) => {
        Number.isFinite(wt.lo) && ut.push([wt.start - ta, wt.lo]), Number.isFinite(wt.hi) && ut.push([wt.start + 9 * ta, wt.hi]);
      }), ut.length) {
        R = r <= ut[0][0] ? ut[0][1] : ut[ut.length - 1][1];
        for (let wt = 1; wt < ut.length; wt++) if (r <= ut[wt][0] && r > ut[wt - 1][0]) {
          const [ft, lt] = ut[wt - 1], [Ft, ae] = ut[wt];
          R = lt + (ae - lt) * (1 - Math.cos(Math.PI * (r - ft) / (Ft - ft))) / 2;
          break;
        }
      }
    }
    return { cond: w && A === "sunny" ? "clear-night" : A, temp: R, night: w, day: h };
  }
  const rl = (e) => St(new Date(e)) === St(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), zr = /* @__PURE__ */ new Map(), sl = 900, Ts = 700;
  let Ho = null;
  const un = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((r) => {
    $i(r.target.parentElement), r.target.closest("#wxDialog") && at();
  })) : null;
  function $i(e, r = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const h = Nn(), w = h.days.flatMap((lt) => [{ cond: lt.day, night: !1 }, { cond: lt.night, night: !0 }]), A = w.map((lt) => lt.cond).join(), R = ks(), q = di(), ut = Aa(), wt = Number(St(new Date(h.start)).replace(/\D/g, "")) % 9973;
    let ft = !1;
    s.forEach((lt) => {
      var ve;
      const Ft = lt.clientWidth, ae = lt.clientHeight;
      if (!Ft || !ae) return;
      const qt = lt.dataset.wxStrip;
      let Pt = zr.get(qt);
      Pt ? Pt.sig !== A && (Pt.prev = Pt.segs, Pt.sig = A, Pt.segs = w, Pt.t0 = r, Pt.dur = Ts) : zr.set(qt, Pt = { sig: A, segs: w, prev: null, t0: r, dur: sl });
      const Et = q || ut ? Math.min(1, Math.max(0, (r - Pt.t0) / Pt.dur)) : 1;
      Et < 1 && (ft = !0);
      const he = { width: Ft, height: ae, colors: R.colors, clock: r, ambient: q, seed: wt, reveal: ut ? Et : 1 - Math.pow(1 - Et, 3), prev: Et < 1 ? Pt.prev : null, reduce: ut };
      if (Va === "smooth") {
        const zt = Math.min(2, window.devicePixelRatio || 1), be = Math.round(Ft * zt), Be = Math.round(ae * zt);
        lt.width !== be && (lt.width = be), lt.height !== Be && (lt.height = Be);
        const se = lt.getContext("2d");
        if (!se) return;
        se.setTransform(zt, 0, 0, zt, 0, 0), fu(se, w, he);
      } else {
        const zt = uu(w, { ...he, px: 2, oneBit: Va === "onebit", ink: R.ink, paper: R.paper });
        lt.width !== zt.w && (lt.width = zt.w), lt.height !== zt.h && (lt.height = zt.h), (ve = lt.getContext("2d")) == null || ve.putImageData(new ImageData(zt.data, zt.w, zt.h), 0, 0);
      }
    }), ft && Io();
  }
  function ll() {
    const e = i("weatherCard");
    if (!e || e.hidden) return;
    const r = oa.weather, s = r && (sa == null ? void 0 : sa[r]);
    if (!s) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + jr("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", ci(e);
      return;
    }
    const h = s.attributes || {}, w = h.temperature_unit || "°", A = (se) => Number.isFinite(Number(se)) ? Math.round(Number(se)) + "°" : "—", R = (h.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", q = Wr[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), ut = St(/* @__PURE__ */ new Date()), wt = Ul.slice(0, 7), ft = wt.find((se) => St(new Date(se.datetime)) === ut) || null, lt = wt.filter((se) => St(new Date(se.datetime)) >= ut).slice(0, 6), Ft = /* @__PURE__ */ new Date(), ae = St(new Date(Ft.getFullYear(), Ft.getMonth(), Ft.getDate() + 1)), qt = ft ? "H " + A(ft.temperature) + "&ensp; L " + A(ft.templow) : "", Pt = (se) => {
      const oe = St(new Date(se.datetime));
      return oe === ut ? "Today" : oe === ae ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(se.datetime));
    }, Et = Number.isFinite(Number(h.temperature)) ? Math.round(Number(h.temperature)) : "—", he = (se) => {
      const oe = new Date(se.datetime);
      return Math.round((new Date(oe.getFullYear(), oe.getMonth(), oe.getDate()) - new Date(Ft.getFullYear(), Ft.getMonth(), Ft.getDate())) / 864e5);
    }, ve = (se) => (Wr[se] || se || "").toLowerCase(), zt = (se, oe) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + he(se) + '" aria-label="' + Yt(Pt(se) + ": " + ve(se.condition) + ", " + A(se.temperature) + " / " + A(se.templow) + ". Open the forecast") + '">' + jr(se.condition, !1, !1, Va, "day" + oe) + '<div><div class="activityRowName">' + Yt(Pt(se)) + '</div><div class="activityRowMeta">' + A(se.temperature) + " / " + A(se.templow) + "</div></div></div>", be = () => '<div class="wxStrip"><div class="wxStripDays">' + Nn().days.map((oe, ga) => {
      const Ye = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(oe.start)) + ": " + ve(oe.day) + (ve(oe.day) === ve(oe.night) ? " all day and night" : ", then " + ve(oe.night) + " overnight") + (Number.isFinite(oe.hi) ? ". High " + A(oe.hi) : "") + (Number.isFinite(oe.lo) ? ", low " + A(oe.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + ga + '" aria-label="' + Yt(Ye) + '"><span class="wxDayName">' + Yt(rl(oe.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + A(oe.hi) + '</span><span class="wxLow">' + A(oe.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Yt("Now in " + R + ": " + Et + "°, " + ve(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + jr(s.state, !0, !0, Va, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Yt(String(Et)) + '</span><span class="wxUnit">' + Yt(w) + '</span></div><div class="wxPlace">' + Yt(R) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Yt(q) + "</div>" + (qt ? '<div class="wxRange">' + qt + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (lt.length ? nl === "strip" ? be() : '<div class="activityRows wxDays">' + lt.map(zt).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", ci(e);
    const Be = e.querySelector("canvas[data-wx-strip]");
    Ho && Ho !== Be && (un == null || un.unobserve(Ho)), Ho = Be, Be && (un == null || un.observe(Be), $i(e)), Io(), I();
  }
  const dl = i("weatherCard"), t = (e) => {
    const r = e.closest("[data-wx-day]");
    if (r) {
      const h = /* @__PURE__ */ new Date();
      M(+new Date(h.getFullYear(), h.getMonth(), h.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const s = e.closest("[data-wx-open]");
    s && M(Date.now(), s);
  };
  dl.addEventListener("click", (e) => t(e.target)), dl.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), t(e.target));
  });
  const a = i("wxDialog"), o = i("wxGraph"), l = i("wxGraphWrap");
  let c = Date.now(), g = null, f = !1, b = null;
  function M(e, r) {
    const s = Nn();
    g = r || null, c = Math.max(s.start, Math.min(s.end - ta, e)), zr.delete("dialog"), Zi.delete("scrub"), a.classList.add("open"), a.setAttribute("aria-hidden", "false"), I(), un == null || un.observe(a.querySelector("canvas[data-wx-strip]")), o.focus({ preventScroll: !0 }), Io();
  }
  function O() {
    var e;
    a.classList.remove("open"), a.setAttribute("aria-hidden", "true"), un == null || un.unobserve(a.querySelector("canvas[data-wx-strip]")), (e = g == null ? void 0 : g.focus) == null || e.call(g, { preventScroll: !0 }), g = null;
  }
  function I() {
    if (!a.classList.contains("open")) return;
    const e = Nn();
    i("wxGraphDays").innerHTML = e.days.map((r) => "<span>" + Yt(rl(r.start)) + "</span>").join(""), at(e), F(e), $i(a);
  }
  function F(e = Nn()) {
    const r = il(e, c), s = sa == null ? void 0 : sa[oa.weather], h = (s == null ? void 0 : s.attributes) || {}, w = h.temperature_unit || "°", A = Math.abs(c - Date.now()) < ta / 2, R = A && s ? s.state : r.cond, q = A && Number.isFinite(Number(h.temperature)) ? Math.round(Number(h.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", ut = Wr[R] || (R ? R.charAt(0).toUpperCase() + R.slice(1) : "—"), wt = A ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(c / ta) * ta)), ft = r.day, lt = (Number.isFinite(ft.hi) ? "H " + Math.round(ft.hi) + "°" : "") + (Number.isFinite(ft.lo) ? "&ensp; L " + Math.round(ft.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + jr(R, !0, A, Va, "scrub", A ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Yt(String(q)) + '</span><span class="wxUnit">' + Yt(w) + '</span></div><div class="wxPlace">' + Yt(wt) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Yt(ut) + "</div>" + (lt ? '<div class="wxRange">' + lt + "</div>" : "") + "</div>", ci(i("wxDialogNow")), o.setAttribute("aria-valuenow", String(Math.round((c - e.start) / ta))), o.setAttribute("aria-valuetext", wt + ", " + ut.toLowerCase() + ", " + q + "°"), it(e), Io();
  }
  function at(e = Nn()) {
    const r = i("wxGraphLine"), s = l.clientWidth, h = l.clientHeight;
    if (!s || !h) return;
    const w = [];
    for (let Et = e.start; Et <= e.end; Et += ta) {
      const he = il(e, Et).temp;
      Number.isFinite(he) && w.push([Ki(e, Et) * s, he]);
    }
    if (r.setAttribute("viewBox", "0 0 " + s + " " + h), w.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', b = null, it(e);
      return;
    }
    const A = w.map((Et) => Et[1]), R = Math.min(...A), q = Math.max(...A), ut = Math.max(4, q - R), wt = Va !== "smooth", ft = (Et) => wt ? Math.round(Et / 2) * 2 : Math.round(Et * 10) / 10;
    b = (Et) => h * 0.84 - (Et - R) / ut * h * 0.62;
    const lt = ks(), Ft = Va === "onebit" ? lt.paper : "#ffffff", ae = Va === "onebit" ? lt.ink : "rgba(0,0,0,.28)", qt = "M" + w.map((Et) => ft(Et[0]) + " " + ft(b(Et[1]))).join(" L"), Pt = (Et, he) => {
      const ve = w.find((zt) => zt[1] === Et);
      return '<text class="wxLineLabel" x="' + ft(Math.min(s - 14, Math.max(14, ve[0]))) + '" y="' + ft(b(Et) + (he ? 18 : -10)) + '" fill="' + Ft + '" stroke="' + ae + '">' + Math.round(Et) + "°</text>";
    };
    r.setAttribute("shape-rendering", wt ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + qt + '" fill="none" stroke="' + ae + '" stroke-width="' + (wt ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + qt + '" fill="none" stroke="' + Ft + '" stroke-width="2" stroke-linejoin="round"/>' + Pt(q, !1) + Pt(R, !0) + '<g id="wxCursorMark"></g>', it(e);
  }
  function it(e = Nn()) {
    const r = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const s = l.clientWidth, h = l.clientHeight, w = Va !== "smooth", A = (Ft) => w ? Math.round(Ft / 2) * 2 : Ft, R = A(Ki(e, c) * s), q = il(e, c).temp, ut = ks(), wt = Va === "onebit" ? ut.paper : "#ffffff", ft = Va === "onebit" ? ut.ink : "rgba(0,0,0,.28)", lt = b && Number.isFinite(q) ? A(b(q)) : null;
    r.innerHTML = '<rect x="' + (R - 2) + '" y="0" width="4" height="' + h + '" fill="' + ft + '"/><rect x="' + (R - 1) + '" y="0" width="2" height="' + h + '" fill="' + wt + '"/>' + (lt == null ? "" : w ? '<rect x="' + (R - 5) + '" y="' + (lt - 5) + '" width="10" height="10" fill="' + wt + '" stroke="' + ft + '" stroke-width="2"/>' : '<circle cx="' + R + '" cy="' + lt + '" r="6" fill="' + wt + '" stroke="' + ft + '" stroke-width="2"/>');
  }
  const dt = (e) => {
    const r = l.getBoundingClientRect();
    r.width && (c = Cd(Nn(), (e - r.left) / r.width), F());
  };
  o.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      f = !0;
      try {
        o.setPointerCapture(e.pointerId);
      } catch {
      }
      dt(e.clientX);
    }
  }), o.addEventListener("pointermove", (e) => {
    f && dt(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => o.addEventListener(e, () => {
    f = !1;
  })), o.addEventListener("keydown", (e) => {
    const r = Nn(), s = { ArrowLeft: -ta, ArrowRight: ta, ArrowDown: -ta, ArrowUp: ta, PageUp: -24 * ta, PageDown: 24 * ta }[e.key];
    s ? (e.preventDefault(), c = Math.max(r.start, Math.min(r.end - ta, Math.round(c / ta) * ta + s)), F(r)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), c = e.key === "Home" ? r.start : r.end - ta, F(r));
  }), i("wxDialogClose").addEventListener("click", O), a.addEventListener("click", (e) => {
    e.target === a && O();
  }), a.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), O());
  }), ll(), (fc = (pc = window.matchMedia) == null ? void 0 : (uc = pc.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || fc.call(uc, "change", () => {
    Io(), ci(n);
  }), Io();
  const Z = i("tvNav");
  d.fullscreenSupported || (Z.hidden = !0), Z.addEventListener("click", () => d.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !kt.workout.classList.contains("active") || Di.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Ar.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(le.value) || 1) + Number(e.dataset.roundsStep)));
    String(r) !== le.value && (le.value = r, le.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [D, _, P, le].forEach((e) => e.addEventListener("input", () => {
    const r = ne[Qt];
    r && (r.total = Number(D.value), r.work = Number(_.value), r.rest = Number(P.value)), _e();
  })), J.addEventListener("click", Br), Vt.addEventListener("click", () => C("settings")), i("settingsBack").addEventListener("click", Br), Ar.addEventListener("click", () => fo(!Ga)), ca(Qt), Jr(), yr(), pn(), i("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), Ir(i("resetStats"), i("resetStatsFill"), 1500, () => {
    we.history = [], we.checkins = [], Un = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    en(), si(), yr(), Jr(), pn(), ln(), N("Stats reset");
  });
  const bt = i("morningTime"), j = i("eveningTime"), vt = i("checkinAutoOpen");
  bt.value = Zt().morning, j.value = Zt().evening, vt.classList.toggle("on", ge().checkinAutoOpen !== !1), [["morningTime", bt], ["eveningTime", j]].forEach(([e, r]) => r.addEventListener("change", () => {
    r.value && (Xa(e, r.value), ln());
  })), vt.addEventListener("click", () => {
    const e = ge().checkinAutoOpen === !1;
    vt.classList.toggle("on", e), Xa("checkinAutoOpen", e);
  }), setTimeout(Pa, 800);
  const W = i("checkinNotify"), Ot = i("checkinNotifyTarget"), Ne = i("checkinNotifyStatus"), fe = Ne.textContent;
  function Ba() {
    const e = d.notifyServices(), r = e.filter((w) => w.startsWith("mobile_app_")), s = r.length ? r : e, h = (w) => w.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Ot.innerHTML = s.map((w) => '<option value="' + Yt(w) + '">' + Yt(h(w)) + "</option>").join(""), !ge().notifyTarget && s[0] && (ge().notifyTarget = s[0]), Ot.value = ge().notifyTarget || "";
  }
  function Xt() {
    const e = !!ge().notifyOn;
    W.classList.toggle("on", e), i("checkinNotifyTargetRow").hidden = !e;
    const r = Zt();
    Ne.textContent = e ? "Sends at " + r.morning + " and " + r.evening : fe;
  }
  async function Ge() {
    const e = !!ge().notifyOn;
    try {
      return await d.setReminderAutomation(e ? { target: ge().notifyTarget, times: Zt() } : null), !0;
    } catch {
      return N("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  W.addEventListener("click", async () => {
    const e = !ge().notifyOn;
    if (e && (Ba(), !ge().notifyTarget)) {
      N("Install the Companion app on your phone first");
      return;
    }
    ge().notifyOn = e, Xt(), await Ge() ? (en(), N(e ? "Check-in notifications on" : "Check-in notifications off")) : (ge().notifyOn = !e, Xt());
  }), Ot.addEventListener("change", () => {
    Xa("notifyTarget", Ot.value), ge().notifyOn && Ge();
  }), [bt, j].forEach((e) => e.addEventListener("change", () => {
    Xt(), ge().notifyOn && Ge();
  })), Ba(), Xt();
  let pi = null;
  function Td() {
    pi || (pi = setTimeout(() => {
      pi = null, pn();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var s, h;
      const r = !sa || sa[oa.weather] !== e[oa.weather] || ((s = sa["sun.sun"]) == null ? void 0 : s.state) !== ((h = e["sun.sun"]) == null ? void 0 : h.state);
      sa = e, Fl(e), bs(e), r && ll(), Date.now() - Wl > 60 * 60 * 1e3 && ql(), Td();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (we.history = e.history, si()), Array.isArray(e.history) && pn(), Array.isArray(e.checkins) && (we.checkins = e.checkins.map(sr), ln(), Jr(), yr(), si(), pn()), e.profiles && !Wa.classList.contains("open") && !dn)) {
        const r = rr(e);
        Object.keys(ne).forEach((s) => delete ne[s]), Object.assign(ne, r.profiles), we.order = r.order, ne[Qt] || (Qt = we.order[0]), wo(), ca(Qt);
      }
    },
    suspend() {
      y = !1;
    },
    resume() {
      y || (y = !0, Ii || (Ii = requestAnimationFrame(os)), Hi || (Hi = requestAnimationFrame(is)), Io(), Vi(n.querySelector(".tab.active"), !1));
    }
  };
}
const gu = /* @__PURE__ */ new Set(["roaming", "test_area"]), vu = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, pl = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ta = "made_up_", Qi = (n) => {
  var d;
  return (d = String(n).split(".")[1]) == null ? void 0 : d.startsWith(Ta);
}, $l = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function ic(n) {
  const d = n.getHours() + n.getMinutes() / 60, i = Math.max(0, Math.sin((d - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function bu(n) {
  const d = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let i = 0;
  for (let u = +d; u < +n; u += 10 * 60 * 1e3) i += ic(new Date(u)) / 6;
  return i;
}
function bc(n = /* @__PURE__ */ new Date()) {
  const d = [];
  for (let i = 0; i <= 96; i++) {
    const u = +n - (96 - i) * 15 * 60 * 1e3;
    d.push([u, ic(new Date(u))]);
  }
  return d;
}
function wu({ onChange: n }) {
  const d = {}, i = {}, u = (U, z, pt, ct) => {
    d[U] = { entity_id: U, state: pt, attributes: ct, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[U] = z;
  }, v = (U, z, pt) => {
    const ct = d[U], xt = z ?? ct.state;
    d[U] = { ...ct, state: xt, attributes: { ...ct.attributes, ...pt }, last_changed: xt === ct.state ? ct.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, y = (U, z, pt, ct) => u("binary_sensor." + Ta + (U ? U + "_" : "") + $l(z), U, ct ? "on" : "off", { friendly_name: z, device_class: pt });
  Object.entries(vu).forEach(([U, z]) => {
    if (z.temperature != null && u("sensor." + Ta + U + "_temperature", U, String(z.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), z.humidity != null && u("sensor." + Ta + U + "_humidity", U, String(z.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), z.vacuum && u("vacuum." + Ta + "robot", U, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), z.climate && u("climate." + Ta + U, U, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: z.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), z.cover) {
      const [pt, ct, xt, Q] = z.cover;
      u("cover." + Ta + U + "_" + $l(pt), U, xt ? "open" : "closed", { friendly_name: pt, device_class: ct, current_position: xt, ...Q != null ? { current_tilt_position: Q } : {} });
    }
    if (z.humidifier && u("humidifier." + Ta + U, U, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: z.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), z.solar && (u("sensor." + Ta + U + "_solar_power", U, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), u("sensor." + Ta + U + "_solar_today", U, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), z.valve && u("valve." + Ta + U + "_" + $l(z.valve), U, "closed", { friendly_name: z.valve, device_class: "water" }), z.door && y(U, z.door, "door", z.doorOpen), z.window && y(U, z.window, "window", !1), z.motion && y(U, z.motion, "motion", !1), z.plant) {
      const [pt, ct, xt, Q, ot] = z.plant, L = Ta + $l(pt), G = (X, kt, J, Vt, C) => u("sensor." + L + "_" + X, U, String(J), { friendly_name: kt, device_class: C, state_class: "measurement", unit_of_measurement: Vt, plant_low: J < pl[X][0], plant_high: J > pl[X][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[X] });
      G("moisture", "Moisture", ct, "%", "moisture"), G("light", "Light", xt, "lx", "illuminance"), G("temperature", "Temperature", Q, "°C", "temperature"), G("fertility", "Fertility", ot, "µS/cm", "conductivity");
      const Lt = Object.entries({ moisture: ct, light: xt, temperature: Q, fertility: ot }).filter(([X, kt]) => kt < pl[X][0] || kt > pl[X][1]).map(([X, kt]) => X + (kt < pl[X][0] ? " low" : " high"));
      u("plant." + L, U, Lt.length ? "problem" : "ok", { friendly_name: pt, moisture: ct, brightness: xt, temperature: Q, conductivity: ot, problem: Lt.join(", ") || "none" });
    }
  }), u("alarm_control_panel." + Ta + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), y(null, "Front door", "door", !1), y(null, "Smoke alarm", "smoke", !1), u("sensor." + Ta + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const k = {}, E = {};
  let S = null;
  function B() {
    const U = /* @__PURE__ */ new Date();
    Object.keys(d).forEach((z) => {
      z.endsWith("_solar_power") && (d[z] = { ...d[z], state: ic(U).toFixed(2) }), z.endsWith("_solar_today") && (d[z] = { ...d[z], state: bu(U).toFixed(1) });
    });
  }
  B();
  let Mt = 0;
  function ht() {
    let U = !1;
    const z = ++Mt % 10 === 0, pt = (Q, ot, L) => {
      v(Q, ot, L), U = !0;
    };
    Object.entries(k).forEach(([Q, ot]) => {
      const L = d[Q].attributes.current_position, G = L < ot ? Math.min(ot, L + 10) : Math.max(ot, L - 10);
      G === ot && delete k[Q], pt(Q, G === ot ? G === 0 ? "closed" : "open" : ot > L ? "opening" : "closing", { current_position: G });
    }), Object.entries(E).forEach(([Q, ot]) => {
      const L = d[Q].attributes.current_tilt_position, G = L < ot ? Math.min(ot, L + 25) : Math.max(ot, L - 25);
      G === ot && delete E[Q], pt(Q, null, { current_tilt_position: G });
    }), Object.keys(d).filter((Q) => Q.startsWith("climate.")).forEach((Q) => {
      const ot = d[Q], L = ot.attributes, G = L.current_temperature, Lt = (ot.state === "heat" || ot.state === "auto") && G < L.temperature - 0.05, X = (ot.state === "cool" || ot.state === "auto") && G > L.temperature + 0.05, kt = ot.state === "off" ? "off" : Lt ? "heating" : X ? "cooling" : "idle", J = z ? Math.round((G + (Lt ? 0.1 : X ? -0.1 : 0)) * 10) / 10 : G;
      (J !== G || kt !== L.hvac_action) && pt(Q, null, { current_temperature: J, hvac_action: kt });
    }), Object.keys(d).filter((Q) => Q.startsWith("humidifier.")).forEach((Q) => {
      const ot = d[Q], L = ot.attributes, G = L.current_humidity, Lt = ot.state === "on" && G < L.humidity, X = Lt && z ? G + 1 : G, kt = ot.state !== "on" ? "off" : Lt ? "humidifying" : "idle";
      if (X !== G || kt !== L.action) {
        pt(Q, null, { current_humidity: X, action: kt });
        const J = "sensor." + Ta + i[Q] + "_humidity";
        d[J] && pt(J, String(X));
      }
    });
    const ct = d["vacuum." + Ta + "robot"], xt = ct.attributes;
    ct.state === "cleaning" && z && pt(ct.entity_id, null, { battery_level: Math.max(5, xt.battery_level - 1) }), ct.state === "returning" && pt(ct.entity_id, "docked", {}), ct.state === "docked" && xt.battery_level < 100 && pt(ct.entity_id, null, { battery_level: Math.min(100, xt.battery_level + 2) }), S && Date.now() - S.at > 5e3 && (pt("alarm_control_panel." + Ta + "house", "armed_" + S.mode, {}), S = null), U && n();
  }
  const $ = setInterval(ht, 1e3), tt = setInterval(() => {
    B(), n();
  }, 60 * 1e3);
  function st(U, z, pt) {
    const ct = pt == null ? void 0 : pt.entity_id;
    if (!d[ct]) return !1;
    const xt = d[ct], Q = xt.attributes, ot = (L, G) => v(ct, L, G);
    if (U === "climate" && (z === "set_temperature" && ot(null, { temperature: Math.max(Q.min_temp, Math.min(Q.max_temp, pt.temperature)) }), z === "set_hvac_mode" && ot(pt.hvac_mode, pt.hvac_mode === "off" ? { hvac_action: "off" } : {}), z === "toggle" && ot(xt.state === "off" ? "heat" : "off", xt.state === "off" ? {} : { hvac_action: "off" })), U === "cover") {
      const L = z === "open_cover" ? 100 : z === "close_cover" ? 0 : z === "set_cover_position" ? pt.position : z === "toggle" ? Q.current_position > 0 ? 0 : 100 : null;
      z === "stop_cover" && (delete k[ct], delete E[ct], ot(Q.current_position === 0 ? "closed" : "open")), L != null && L !== Q.current_position && (k[ct] = L, ot(L > Q.current_position ? "opening" : "closing"));
      const G = z === "open_cover_tilt" ? 100 : z === "close_cover_tilt" ? 0 : z === "set_cover_tilt_position" ? pt.tilt_position : null;
      z === "stop_cover_tilt" && delete E[ct], G != null && Q.current_tilt_position != null && G !== Q.current_tilt_position && (E[ct] = G);
    }
    if (U === "humidifier" && (z === "set_humidity" && ot(null, { humidity: Math.max(Q.min_humidity, Math.min(Q.max_humidity, pt.humidity)) }), z === "set_mode" && ot(null, { mode: pt.mode }), z === "turn_on" || z === "turn_off" || z === "toggle")) {
      const L = z === "turn_on" || z === "toggle" && xt.state !== "on";
      ot(L ? "on" : "off", { action: L ? "idle" : "off" });
    }
    if (U === "vacuum" && (z === "start" && ot("cleaning", { rooms: pt.rooms || Q.rooms }), z === "pause" && ot("paused"), z === "return_to_base" && ot("returning", { rooms: [] }), z === "locate" && ot(null, { located: Date.now() }), z === "set_rooms" && ot(null, { rooms: pt.rooms })), U === "valve") {
      const L = z === "open_valve" || z === "toggle" && xt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(z) && ot(L ? "open" : "closed");
    }
    if (U === "alarm_control_panel") {
      z === "alarm_disarm" && (S = null, ot("disarmed", { changed_by: "Matt" }));
      const L = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[z];
      L && (S = { mode: L, at: Date.now() }, ot("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function et(U) {
    const z = (U == null ? void 0 : U.states) || {}, pt = (U == null ? void 0 : U.entities) || {}, ct = (U == null ? void 0 : U.devices) || {}, xt = (_) => {
      var gt;
      const P = pt[_];
      return P && (P.area_id || P.device_id && ((gt = ct[P.device_id]) == null ? void 0 : gt.area_id)) || null;
    }, Q = (_) => {
      const P = pt[_];
      return z[_] && z[_].state !== "unavailable" && !(P != null && P.hidden) && !(P != null && P.entity_category);
    }, ot = {};
    Object.keys(z).forEach((_) => {
      const P = xt(_);
      P && Q(_) && (ot[P] || (ot[P] = [])).push(_);
    });
    const L = { ...z, ...d }, G = (_) => {
      var P, gt;
      return (gt = (P = L[_]) == null ? void 0 : P.attributes) == null ? void 0 : gt.device_class;
    }, Lt = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], X = Object.keys(z).filter((_) => _.startsWith("vacuum.") && Q(_)), kt = Object.values((U == null ? void 0 : U.areas) || {}).filter((_) => !gu.has(_.area_id)).map((_) => {
      const P = _.area_id, gt = ot[P] || [], mt = (Ht) => gt.filter((me) => me.startsWith(Ht + ".")), V = (Ht) => mt("sensor").filter((me) => G(me) === Ht), yt = (Ht) => Object.keys(d).filter((me) => i[me] === P && Ht(me)), Tt = (Ht, me) => Ht.length ? Ht : yt(me), te = Tt(V("temperature"), (Ht) => Ht.endsWith(P + "_temperature")), le = Tt(V("humidity"), (Ht) => Ht.endsWith(P + "_humidity")), ea = V("power").filter((Ht) => /^(W|kW)$/.test(L[Ht].attributes.unit_of_measurement || "")), Se = mt("binary_sensor").filter((Ht) => G(Ht) === "moisture"), wi = Tt(mt("plant"), (Ht) => Ht.startsWith("plant.")).map((Ht) => ({ id: Ht, readings: yt((me) => me.startsWith("sensor." + Ht.split(".")[1] + "_")) })), La = [...mt("binary_sensor").filter((Ht) => Lt.includes(G(Ht))), ...yt((Ht) => Ht.startsWith("binary_sensor."))];
      return {
        id: P,
        name: _.name,
        icon: _.icon,
        readings: [...te.slice(0, 1), ...le.slice(0, 1), ...Se],
        power: ea.length ? ea.reduce((Ht, me) => Ht + Number(L[me].state) * (L[me].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: mt("switch"),
        lights: mt("light"),
        actions: [...mt("light"), ...Tt(mt("climate"), (Ht) => Ht.startsWith("climate.")), ...Tt(mt("cover"), (Ht) => Ht.startsWith("cover.")), ...Tt(mt("humidifier"), (Ht) => Ht.startsWith("humidifier.")), ...Tt(mt("valve"), (Ht) => Ht.startsWith("valve.")), ...mt("media_player"), ...mt("vacuum"), ...X.length ? [] : yt((Ht) => Ht.startsWith("vacuum."))],
        solar: yt((Ht) => Ht.includes("_solar_")),
        plants: wi,
        openings: La,
        alerts: [...Se, ...La].filter((Ht) => {
          var me;
          return ((me = L[Ht]) == null ? void 0 : me.state) === "on";
        })
      };
    }).filter((_) => _.readings.length || _.plugs.length || _.actions.length || _.solar.length || _.plants.length), J = Object.keys(z).find((_) => /^sensor\..*(p1_meter_power|grid_power)$/.test(_) && z[_].state !== "unavailable") || null, Vt = (_) => Object.keys(z).filter((P) => P.startsWith(_ + ".") && Q(P)), C = Vt("alarm_control_panel"), D = X.length ? X : ["vacuum." + Ta + "robot"];
    return {
      states: L,
      rooms: kt,
      grid: J,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (_) => d[_] ? i[_] : xt(_),
      vacuums: D,
      homeVacuums: D.filter((_) => !kt.some((P) => P.actions.includes(_))),
      security: {
        alarms: C.length ? C : ["alarm_control_panel." + Ta + "house"],
        locks: Vt("lock"),
        openings: [...Object.keys(d).filter((_) => _.startsWith("binary_sensor.")), "sensor." + Ta + "doorbell"]
      }
    };
  }
  return { model: et, call: st, stop() {
    clearInterval($), clearInterval(tt);
  } };
}
const gi = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Jd = (n) => {
  const d = String(n || "#000000").trim().replace("#", ""), i = d.length === 3 ? d.split("").map((u) => u + u).join("") : d;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, xu = (n) => "#" + n.map((d) => Math.round(Math.max(0, Math.min(255, d))).toString(16).padStart(2, "0")).join(""), wc = {}, Xn = (n, d, i) => {
  const u = n + d + i;
  return wc[u] || (wc[u] = xu(Jd(n).map((v, y) => v + (Jd(d)[y] - v) * i)));
}, xc = {}, rd = (n) => xc[n] || (xc[n] = Jd(n));
function yu(n) {
  const d = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return d.partly = [Xn(d.clear[0], d.cloudy[0], 0.12), Xn(d.clear[1], d.cloudy[1], 0.12)], d.storm = [Xn(d.rain[0], "#000000", 0.22), Xn(d.rain[1], "#000000", 0.22)], d;
}
const ku = [
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
], hi = (n, d) => (ku[(d & 7) * 8 + (n & 7)] + 0.5) / 64, bp = 1, wp = 2, xp = 3, yp = 4, Ds = 5, dd = 6, Qd = 7, kp = 8, yc = (n, d) => d <= 0.6665 && ((n - 0.5) * (n - 0.5) + (d - 0.2877) * (d - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (d - 0.416) * (d - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (d - 0.458) * (d - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && d >= 0.416), Mu = (n, d, i) => {
  let u = !1;
  for (let v = 0, y = n.length - 1; v < n.length; y = v++) {
    const k = n[v], E = n[y];
    k[1] > i != E[1] > i && d < (E[0] - k[0]) * (i - k[1]) / (E[1] - k[1]) + k[0] && (u = !u);
  }
  return u;
};
function Su(n, d, i, u, { oneBit: v, ink: y, paper: k, snowInk: E }) {
  const S = new Uint8ClampedArray(i * u * 4), B = rd(y), Mt = rd(k);
  for (let ht = 0; ht < u; ht++) for (let $ = 0; $ < i; $++) {
    const tt = ht * i + $, st = d[tt];
    if (n[tt] == null) continue;
    let et = rd(n[tt]);
    if (v) {
      let U;
      st === yp || st === kp ? U = !0 : st === Ds ? U = E : st === Qd || st === dd ? U = !1 : U = Math.round((0.2126 * et[0] + 0.7152 * et[1] + 0.0722 * et[2]) / 255 * 4) / 4 <= hi($, ht), (st === bp || st === wp || st === xp || st === dd) && ($ > 0 && d[tt - 1] !== st || $ < i - 1 && d[tt + 1] !== st || ht > 0 && d[tt - i] !== st || ht < u - 1 && d[tt + i] !== st) && (U = !0), et = U ? B : Mt;
    }
    S[tt * 4] = et[0], S[tt * 4 + 1] = et[1], S[tt * 4 + 2] = et[2], S[tt * 4 + 3] = 255;
  }
  return { w: i, h: u, data: S };
}
const Cu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Tu = (n) => fd(n, !1).split("/")[0], _d = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let d = Math.imul(n ^ n >>> 15, 1 | n);
  return d = d + Math.imul(d ^ d >>> 7, 61 | d) ^ d, ((d ^ d >>> 14) >>> 0) / 4294967296;
}, Lu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Au = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", _u = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Eu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Du = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Bu = [".##", "##.", ".#.", "#.."];
function Mp(n, { width: d, height: i, colors: u, wave: v = 0.38, soft: y = 6, glow: k = 0.6, columns: E = 6 }) {
  const S = { ...xn, dawn: "#e5a77e", ...u }, B = yu(S), Mt = d, ht = i, $ = Mt / E, tt = $ / 2, st = Math.PI * 2, et = n.length ? n : [{ cond: "cloudy", night: !1 }], U = [...Array(E * 2)].map((xt, Q) => {
    const ot = et[Math.min(Q, et.length - 1)], L = Tu(ot.cond), G = Q % 2 === 1;
    return { cond: ot.cond, k: L, night: G, sky: B[L][G ? 1 : 0], cover: Cu[L] };
  }), z = (xt) => ht * (0.5 - v * Math.cos(st * (xt / $ - 0.25)));
  return { C: S, S: U, W: Mt, H: ht, cw: $, sw: tt, TAU: st, yb: z, side: (xt, Q, ot) => {
    const L = (xt ? z(Q) - ot : ot - z(Q)) / Math.max(3, y * 1.4) + 0.5;
    return L <= 0 ? 0 : L >= 1 ? 1 : L;
  }, glowAt: (xt) => {
    const Q = ((xt / $ - 0.25) % 1 + 1) % 1, ot = Math.max(0, Math.min(E - 1, Math.round(xt / $ - 0.25))), L = Math.max(0, Math.min(E - 1, Math.round(xt / $ - 0.75))), G = 1 - (U[2 * ot].cover + U[2 * L + 1].cover) / 2, Lt = Math.sin(Math.PI * Math.min(1, Math.max(0, z(xt) / ht)));
    return { c: Q < 0.5 ? S.dusk : S.dawn, a: k * (0.2 + 0.8 * G) * Lt * Lt };
  }, soft: y, tw: $ * 0.3, sy: ht / 90 };
}
function Sp(n, { clock: d = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: v, sw: y, side: k, C: E, TAU: S, sy: B, H: Mt } = n, ht = d, $ = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  v.forEach((et, U) => {
    const z = _d(u * 977 + U * 131 + 7), pt = (U + 0.5) * y, ct = et.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[et.k] : 0;
    for (let xt = 0; xt < ct; xt++) {
      const Q = pt + (z() - 0.5) * y * 1.6, ot = (6 + z() * 76) * B, L = z() < 0.35, G = 1.8 + z() * 1.6, Lt = k(!0, Q, ot) * (L ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(S * ht / 2600 + xt * 1.7 + U) : 1);
      Lt >= 0.03 && $.stars.push({ x: Q, y: ot, big: L, size: G, o: Lt });
    }
    if (!et.night && (et.k === "clear" || et.k === "partly")) {
      const xt = pt + (z() - 0.5) * y * 0.3, Q = Math.min(15, y * 0.29);
      $.suns.push({ x: xt, y: 32 * B, rad: Q, halo: Q * 2.8 * (i ? 1 + 0.07 * Math.sin(S * ht / 3600 + U) : 1) });
    }
    if (et.night && (et.k === "clear" || et.k === "partly")) {
      const xt = Math.min(0.78, y * 0.55 / 34), Q = pt - 23 * xt + (z() - 0.5) * y * 0.2;
      $.moons.push({ x: Q + 23 * xt, y: (4 + (i ? 0.8 * Math.sin(S * ht / 5200 + U) : 0)) * B + 23 * xt, d: 46 * xt });
    }
  });
  const tt = Math.max(56, Math.min(100, Mt * 0.45)), st = Math.max(1, y / (tt * 2.4));
  return v.forEach((et, U) => {
    const z = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[et.k];
    if (!z) return;
    const pt = et.k === "partly" ? 1 : Math.round(z * st), ct = _d(u * 577 + U * 71 + 3), xt = (U + 0.5) * y, Q = et.k === "rain" || et.k === "storm" || et.night ? E.cloudNight : E.cloudDay, ot = et.night ? 0.82 : et.k === "storm" ? 0.75 : 1;
    for (let L = 0; L < pt; L++) {
      const G = tt / 46 * (et.k === "partly" ? 1 : 0.8 + ct() * 0.4), Lt = xt + (et.k === "partly" ? y * 0.12 : ((L + 0.5) / pt - 0.5) * y * 0.95 + (ct() - 0.5) * y * 0.5 / pt), X = (et.k === "partly" ? 40 : 6 + ct() * 26) * B, kt = i ? 2.5 * Math.sin(S * ht / 9e3 + U * 1.3 + L * 2.1) : 0, J = i ? 0.9 * Math.sin(S * ht / 6100 + U + L) : 0;
      $.clouds.push({ x: Lt - 23 * G + kt, y: X - 15.33 * G + J, w: 46 * G, h: 30.66 * G, fill: Q, o: ot * (pt > 1 && L === 0 ? 0.85 : 1) });
    }
  }), v.forEach((et, U) => {
    const z = _d(u * 313 + U * 29 + 11), pt = (U + 0.5) * y, ct = et.cond === "pouring" ? 16 : et.cond === "rainy" || et.cond === "hail" ? 9 : et.cond === "lightning-rainy" ? 12 : et.cond === "snowy-rainy" ? 5 : 0;
    for (let Q = 0; Q < ct; Q++) {
      let ot = pt + (z() - 0.5) * y * 1.05, L = 44 + z() * 36, G = 1;
      if (i) {
        const X = ((L - 44 + ht * 0.04) % 36 + 36) % 36;
        ot -= 0.21 * (X - (L - 44)), L = 44 + X, G = Math.min(1, X / 6, (36 - X) / 6);
      }
      L *= B;
      const Lt = k(et.night, ot, L) * G;
      Lt >= 0.05 && $.drops.push({ x: ot, y: L, o: Lt });
    }
    const xt = et.cond === "snowy" ? 11 : et.cond === "snowy-rainy" ? 6 : 0;
    for (let Q = 0; Q < xt; Q++) {
      let ot = pt + (z() - 0.5) * y * 1.05, L = 40 + z() * 44, G = 1;
      if (i) {
        const X = ((L - 40 + ht * 9e-3) % 44 + 44) % 44;
        L = 40 + X, ot += 1.6 * Math.sin(S * ht / 2800 + Q * 1.9 + U), G = Math.min(1, X / 6, (44 - X) / 6);
      }
      L *= B;
      const Lt = k(et.night, ot, L) * G;
      Lt >= 0.05 && $.flakes.push({ x: ot, y: L, o: Lt });
    }
    if (et.k === "fog") {
      const Q = et.night ? "#c8ccd6" : "#ffffff", ot = et.night ? 0.28 : 0.62, L = i ? 4 * Math.sin(S * ht / 8e3 + U) : 0;
      for (let G = 0; G < 4; G++) $.fogs.push({ x: pt - y * 0.75 + G % 2 * y * 0.18 + (G % 2 ? L : -L), y: (30 + G * 13) * B, w: y * 1.3, c: Q, a: ot });
    }
    if (et.k === "storm") {
      const Q = (ht / 3400 + U * 0.37) % 1;
      $.bolts.push({ x: pt + (z() - 0.5) * y * 0.3 - 5, y: 36 * B, o: i && !(Q < 0.05 || Q > 0.09 && Q < 0.12) ? 0.8 : 1 });
    }
  }), $;
}
function Ru(n, d, i, u, v, y, k, E) {
  const { S, C: B, cw: Mt, yb: ht, glowAt: $, soft: tt, tw: st, sy: et } = n, U = new Array(i * u), z = new Uint8Array(i * u), pt = new Uint8Array(i * u), ct = (C, D, _, P, gt) => {
    _ == null || C < 0 || D < 0 || C >= i || D >= u || (P >= 1 || P > hi(C + 5, D + 3)) && (U[D * i + C] = _, z[D * i + C] = gt);
  }, xt = (C, D, _, P) => {
    for (let gt = Math.max(0, Math.floor(D - _) - 1); gt <= Math.min(u - 1, D + _ + 1); gt++) for (let mt = Math.max(0, Math.floor(C - _) - 1); mt <= Math.min(i - 1, C + _ + 1); mt++) P(mt, gt, mt + 0.5 - C, gt + 0.5 - D);
  }, Q = (C, D, _) => {
    for (let gt = 0; gt < C.length - 1; gt++) {
      const mt = (gt + D) * Mt;
      if (_ < mt - st / 2) return [C[gt], C[gt], 0];
      if (_ <= mt + st / 2) return [C[gt], C[gt + 1], (_ - mt + st / 2) / st];
    }
    const P = C[C.length - 1];
    return [P, P, 0];
  }, ot = S.filter((C) => !C.night).map((C) => C.sky), L = S.filter((C) => C.night).map((C) => C.sky), G = tt / y, Lt = 16 * et / y;
  for (let C = 0; C < i; C++) {
    const D = (C + 0.5) * v, _ = ht(D) / y, P = Q(ot, 0.75, D), gt = Q(L, 1.25, D), mt = $(D);
    for (let V = 0; V < u; V++) {
      const yt = hi(C, V), Tt = V + 0.5 - _, te = (G > 0.01 ? gi(0.5 + Tt / G) : Tt > 0 ? 1 : 0) > yt;
      let le = te ? P[2] > yt ? P[1] : P[0] : gt[2] > yt ? gt[1] : gt[0];
      (te ? gi(((V + 0.5) / u - 0.45) / 0.55) * 0.7 : gi(1 - (V + 0.5) / (u * 0.55)) * 0.7) > hi(C + 2, V + 5) && (le = te ? Xn(le, "#ffffff", 0.18) : Xn(le, "#000000", 0.25)), te && Tt >= 0 && Tt < Lt && mt.a * 1.3 * (1 - Tt / Lt) > hi(C + 6, V + 1) && (le = mt.c), U[V * i + C] = le, pt[V * i + C] = te ? 0 : 1;
    }
  }
  const X = Xn(B.sun, "#ffffff", 0.55), kt = Xn(B.moon, "#ffffff", 0.6);
  d.stars.forEach((C) => {
    const D = Math.floor(C.x / v), _ = Math.floor(C.y / y);
    if (D < 0 || _ < 0 || D >= i || _ >= u || !pt[_ * i + D] || C.o < 0.15) return;
    const P = C.o > 0.45 ? B.star : Xn(B.star, U[_ * i + D], 0.5), gt = C.big && C.o > 0.6 ? Math.floor(C.size / v) : 0;
    ct(D, _, P, 1, Qd);
    for (let mt = 1; mt <= gt; mt++) [[D - mt, _], [D + mt, _], [D, _ - mt], [D, _ + mt]].forEach((V) => {
      V[0] >= 0 && V[1] >= 0 && V[0] < i && V[1] < u && pt[V[1] * i + V[0]] && ct(V[0], V[1], P, 1, Qd);
    });
  }), d.suns.forEach((C) => {
    const D = Math.max(1.5, C.rad / v), _ = C.x / v, P = C.y / y, gt = C.halo / v * 0.85;
    if (xt(_, P, gt, (mt, V, yt, Tt) => {
      const te = Math.sqrt(yt * yt + Tt * Tt);
      te > D && te < gt && !pt[V * i + mt] && ct(mt, V, X, 0.3 * (1 - (te - D) / (gt - D)), 0);
    }), E) {
      const mt = Math.floor(k / 500) % 2, V = Math.max(1, D * 0.3);
      for (let yt = 0; yt < 8; yt++) if (yt % 2 === mt) for (let Tt = D + 1.2; Tt < D + 1.2 + V; Tt += 0.7) ct(Math.floor(_ + Math.cos(yt * Math.PI / 4) * Tt), Math.floor(P + Math.sin(yt * Math.PI / 4) * Tt), B.sun, 1, kp);
    }
    xt(_, P, D, (mt, V, yt, Tt) => {
      yt * yt + Tt * Tt <= D * D && ct(mt, V, gi(((Tt / D + 1) / 2 - 0.6) / 0.4) > hi(mt, V) ? B.sunEdge : B.sun, 1, bp);
    });
  }), d.moons.forEach((C) => {
    const D = Math.max(1.5, C.d * 0.37 / v), _ = C.x / v, P = C.y / y, gt = _ + 0.547 * D, mt = P - 0.503 * D, V = 0.82 * D;
    xt(_, P, D, (yt, Tt, te, le) => {
      if (te * te + le * le > D * D) return;
      const ea = yt + 0.5 - gt, Se = Tt + 0.5 - mt;
      ea * ea + Se * Se > V * V && ct(yt, Tt, gi((le + D) / (2 * D) * 1.1 - 0.1) > hi(yt, Tt) ? B.moon : kt, 1, wp);
    });
  }), d.clouds.forEach((C) => {
    const D = Math.max(3, C.w / v), _ = D * 0.6665, P = C.x / v, gt = C.y / y, mt = Xn(C.fill, "#000000", 0.16);
    for (let V = Math.max(0, Math.floor(gt) - 1); V <= Math.min(u - 1, gt + _ + 1); V++) for (let yt = Math.max(0, Math.floor(P) - 1); yt <= Math.min(i - 1, P + D + 1); yt++) {
      const Tt = (yt + 0.5 - P) / D, te = (V + 0.5 - gt) / D;
      yc(Tt, te) && ct(yt, V, !yc(Tt, te + 1 / D) || gi((te - 0.42) / 0.25) * 0.8 > hi(yt, V) ? mt : C.fill, C.o, xp);
    }
  }), d.fogs.forEach((C) => {
    const D = Math.floor(C.y / y), _ = Math.max(D, Math.floor((C.y + 6 * et) / y) - 1), P = Math.floor(C.x / v), gt = Math.floor((C.x + C.w) / v);
    for (let mt = D; mt <= _; mt++) for (let V = P; V <= gt; V++) {
      const yt = (V - P) / Math.max(1, gt - P);
      ct(V, mt, C.c, C.a * (yt < 0.25 ? yt / 0.25 : yt > 0.75 ? (1 - yt) / 0.25 : 1), 0);
    }
  });
  const J = Math.max(2, Math.round(9 / y));
  d.drops.forEach((C) => {
    const D = C.x / v, _ = Math.floor(C.y / y);
    for (let P = 0; P < J; P++) ct(Math.floor(D - 0.208 * P * y / v), _ + P, B.rain, C.o, yp);
  });
  const Vt = Math.max(0, Math.round(4.4 / v / 2.6));
  return d.flakes.forEach((C) => {
    const D = Math.floor(C.x / v), _ = Math.floor(C.y / y);
    ct(D, _, B.snow, C.o, Ds);
    for (let P = 1; P <= Vt; P++)
      ct(D - P, _, B.snow, C.o, Ds), ct(D + P, _, B.snow, C.o, Ds), ct(D, _ - P, B.snow, C.o, Ds), ct(D, _ + P, B.snow, C.o, Ds);
  }), d.bolts.forEach((C) => {
    if (v <= 3.5)
      for (let D = Math.floor(C.y / y); D <= (C.y + 24) / y; D++) for (let _ = Math.floor(C.x / v); _ <= (C.x + 11) / v; _++)
        Mu(Du, (_ + 0.5) * v - C.x, (D + 0.5) * y - C.y) && ct(_, D, B.sun, 1, dd);
    else {
      const D = Math.round(C.x / v), _ = Math.round(C.y / y);
      Bu.forEach((P, gt) => P.split("").forEach((mt, V) => {
        mt === "#" && ct(D + V, _ + gt, B.sun, 1, dd);
      }));
    }
  }), { col: U, ids: z };
}
function Nu(n, d) {
  const i = d.px, u = Math.max(6, Math.round(d.width / i)), v = Math.max(6, Math.round(d.height / i)), y = d.width / u, k = d.height / v, E = d.ambient ? Math.floor((d.clock || 0) / 100) * 100 : 0, S = (tt) => {
    const st = Mp(tt, d);
    return Ru(st, Sp(st, { clock: E, ambient: d.ambient, seed: d.seed }), u, v, y, k, E, d.ambient);
  }, B = S(n), Mt = d.reveal == null ? 1 : gi(d.reveal);
  let ht = B.col, $ = B.ids;
  if (Mt < 1) {
    const tt = d.prev ? S(d.prev) : null, st = Mt * (u + 12);
    ht = new Array(u * v), $ = new Uint8Array(u * v);
    for (let et = 0; et < u * v; et++) {
      const U = et % u, z = et / u | 0;
      (d.reduce ? Mt : gi((st - U) / 12)) > hi(U, z) ? (ht[et] = B.col[et], $[et] = B.ids[et]) : tt ? (ht[et] = tt.col[et], $[et] = tt.ids[et]) : (ht[et] = null, $[et] = 255);
    }
  }
  return Su(ht, $, u, v, { oneBit: d.oneBit, ink: d.ink || "#26221e", paper: d.paper || "#fbf9f6", snowInk: !1 });
}
function Pu(n, d, i) {
  const u = i.width, v = i.height, y = i.reveal == null ? 1 : gi(i.reveal), k = ($, tt) => {
    const st = Mp(tt, i);
    Iu($, st, Sp(st, i));
  };
  if (n.clearRect(0, 0, u, v), y >= 1) {
    k(n, d);
    return;
  }
  if (i.prev && k(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = y, k(n, d), n.restore();
    return;
  }
  const E = n.canvas, S = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (S.width !== E.width || S.height !== E.height) && (S.width = E.width, S.height = E.height);
  const B = S.getContext("2d");
  B.setTransform(n.getTransform()), B.clearRect(0, 0, u, v), k(B, d);
  const Mt = y * (u + 64) - 64, ht = B.createLinearGradient(Mt, 0, Mt + 64, 0);
  ht.addColorStop(0, "rgba(0,0,0,1)"), ht.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = ht, B.fillRect(0, 0, u, v), B.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(S, 0, 0), n.restore();
}
function Iu(n, d, i) {
  const { W: u, H: v, S: y, C: k, cw: E, yb: S, glowAt: B, soft: Mt, tw: ht, sy: $ } = d, tt = n.getTransform().a || 1, st = (J) => {
    n.shadowColor = J ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = J ? 4 * tt : 0, n.shadowOffsetY = J ? 1.5 * tt : 0;
  }, et = (J, Vt) => {
    const C = rd(J);
    return "rgba(" + C[0] + "," + C[1] + "," + C[2] + "," + Math.max(0, Math.min(1, Vt)).toFixed(3) + ")";
  }, U = (J, Vt) => {
    const C = n.createLinearGradient(0, 0, u, 0);
    C.addColorStop(0, J[0]);
    for (let D = 0; D < J.length - 1; D++) {
      const _ = (D + Vt) * E, P = (_ - ht / 2) / u, gt = (_ + ht / 2) / u;
      P > 0 && P < 1 && C.addColorStop(P, J[D]), gt > 0 && gt < 1 && C.addColorStop(gt, J[D + 1]);
    }
    return C.addColorStop(1, J[J.length - 1]), C;
  }, z = Math.max(24, Math.ceil(u / 4)), pt = (J, Vt) => {
    n.beginPath();
    for (let C = 0; C <= z; C++) {
      const D = u * C / z, _ = J == null ? 0 : S(D) + J;
      C ? n.lineTo(D, _) : n.moveTo(D, _);
    }
    for (let C = z; C >= 0; C--) {
      const D = u * C / z;
      n.lineTo(D, S(D) + Vt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = U(y.filter((J) => !J.night).map((J) => J.sky), 0.75), n.fillRect(0, 0, u, v);
  const ct = n.createLinearGradient(0, 0, u, 0);
  for (let J = 0; J <= 64; J++) {
    const Vt = B(u * J / 64);
    ct.addColorStop(J / 64, et(Vt.c, Math.min(1, Vt.a)));
  }
  n.fillStyle = ct;
  for (let J = 0; J < 8; J++)
    n.globalAlpha = 1 - J / 8, pt(J * 2 * $, (J + 1) * 2 * $);
  n.fillStyle = U(y.filter((J) => J.night).map((J) => J.sky), 1.25);
  const xt = Math.max(0.5, Mt), Q = 6;
  n.globalAlpha = 1, pt(null, -xt);
  for (let J = 0; J < Q; J++)
    n.globalAlpha = 1 - (J + 0.5) / Q, pt(-xt + 2 * xt * J / Q, -xt + 2 * xt * (J + 1) / Q);
  n.globalAlpha = 1;
  const ot = new Path2D(_u), L = new Path2D(Au), G = new Path2D(Lu), Lt = new Path2D(Eu);
  n.fillStyle = k.star, i.stars.forEach((J) => {
    n.globalAlpha = J.o, J.big ? (n.save(), n.translate(J.x, J.y), n.scale(J.size, J.size), n.fill(ot), n.restore()) : (n.beginPath(), n.arc(J.x, J.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const X = Xn(k.sun, "#ffffff", 0.55);
  i.suns.forEach((J) => {
    const Vt = n.createRadialGradient(J.x, J.y, 0, J.x, J.y, J.halo);
    Vt.addColorStop(0, et(X, 0.42)), Vt.addColorStop(0.7, et(X, 0)), n.fillStyle = Vt, n.beginPath(), n.arc(J.x, J.y, J.halo, 0, Math.PI * 2), n.fill();
    const C = n.createLinearGradient(0, J.y - J.rad, 0, J.y + J.rad);
    C.addColorStop(0.6, k.sun), C.addColorStop(1, k.sunEdge), n.fillStyle = C, st(!0), n.beginPath(), n.arc(J.x, J.y, J.rad, 0, Math.PI * 2), n.fill(), st(!1);
  });
  const kt = Xn(k.moon, "#ffffff", 0.6);
  i.moons.forEach((J) => {
    n.save(), n.translate(J.x - J.d / 2, J.y - J.d / 2), n.scale(J.d / 46, J.d / 46);
    const Vt = n.createLinearGradient(0, 6, 0, 40);
    Vt.addColorStop(0, kt), Vt.addColorStop(1, k.moon), n.fillStyle = Vt, st(!0), n.fill(L), st(!1), n.restore();
  }), i.clouds.forEach((J) => {
    n.save(), n.globalAlpha = J.o, n.translate(J.x, J.y), n.scale(J.w / 46, J.h / 30.66), n.translate(-4, -9.67), n.fillStyle = J.fill, st(!0), n.fill(G), st(!1), n.restore();
  }), i.fogs.forEach((J) => {
    const Vt = n.createLinearGradient(J.x, 0, J.x + J.w, 0);
    Vt.addColorStop(0, et(J.c, 0)), Vt.addColorStop(0.25, et(J.c, J.a)), Vt.addColorStop(0.75, et(J.c, J.a)), Vt.addColorStop(1, et(J.c, 0)), n.fillStyle = Vt, n.fillRect(J.x, J.y, J.w, 6 * $);
  }), n.fillStyle = k.rain, i.drops.forEach((J) => {
    n.save(), n.globalAlpha = J.o, n.translate(J.x, J.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, i.flakes.forEach((J) => {
    n.globalAlpha = J.o, n.beginPath(), n.arc(J.x, J.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, i.bolts.forEach((J) => {
    n.save(), n.globalAlpha = J.o, n.translate(J.x, J.y), n.fill(Lt), n.restore();
  }), n.restore();
}
const Hu = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", _s = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Xl = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Ed = (n, d) => '<path class="' + d + '" d="' + n + '"/>', Fu = (n, d) => ' style="animation-delay:-' + Math.round(n * 137 % d) + 'ms"', $n = (n, d, i, u) => {
  const v = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + Fu(n, 2400) + ' d="M' + n + " " + (d - i) + "L" + (n + v) + " " + (d - v) + "L" + (n + i) + " " + d + "L" + (n + v) + " " + (d + v) + "L" + n + " " + (d + i) + "L" + (n - v) + " " + (d + v) + "L" + (n - i) + " " + d + "L" + (n - v) + " " + (d - v) + 'Z"/>';
}, kc = ([n, d, i], u) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + d + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Ou = (n, d) => d ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Wu = (n) => (n ? ["29.35", "43.04", "56.74"].map((d, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + d + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + d + ' 60.65)"/></g>') : [19, 26, 33].map((d, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + d + ' 38)"/></g>')).join(""), qu = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([d, i], u) => '<circle class="wbFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + d + '" cy="' + i + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function ju(n, d, i, u) {
  const v = (y) => '<g filter="url(#' + u + '-sh)">' + y + "</g>";
  return n === "clear" ? d ? v(kc(i ? Xl.l : Xl.s, u)) + (i ? $n(70, 20, 5.83, 1) + $n(78.33, 41.67, 3.75, 0.8) + $n(60, 71.67, 3.33, 0.6) : $n(42, 12, 3.5, 1) + $n(47, 25, 2.25, 0.8) + $n(36, 43, 2, 0.6)) : v(Ou(u, i)) : n === "partly" ? v(d ? kc(i ? Xl.lp : Xl.sp, u) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + v(Ed(i ? _s.lp : _s.sp, d ? "wbCloudLight" : "wbBright")) + (d ? i ? $n(73.33, 16.67, 4.17, 0.9) : $n(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? v(Ed(i ? _s.lc : _s.s, d ? "wbCloudLight" : "wbBright")) + (d ? i ? $n(15, 15, 3.75, 0.8) + $n(76.67, 13.33, 2.92, 0.6) : $n(9, 9, 2.25, 0.8) + $n(46, 8, 1.75, 0.6) : "") : v(Ed(i ? _s.lr : _s.s, "wbCloudLight")) + (n === "rain" ? Wu(i) : qu(i));
}
const zu = (n, d) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (d ? 1.6 : 1) + '" stdDeviation="' + (d ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Vu(n, d, i, u) {
  let v = Hu(n);
  const y = v === "night" || !!i;
  v === "night" && (v = "clear");
  const k = d ? 90 : 54;
  return { k: v, night: y, svg: '<svg viewBox="0 0 ' + k + " " + k + '">' + zu(u, d) + ju(v, y, d, u) + "</svg>" };
}
const Gu = [
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
], Jl = (n, d) => (Gu[d % 8 * 8 + n % 8] + 0.5) / 64, bo = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], tn = (n, d, i) => [Math.round(n[0] + (d[0] - n[0]) * i), Math.round(n[1] + (d[1] - n[1]) * i), Math.round(n[2] + (d[2] - n[2]) * i)], ul = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Mc = (n, d) => {
  let i = n * 374761393 + d * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Gr = [255, 255, 255], mn = bo("#26221e"), Sc = bo("#0288d1"), Uu = bo("#01579b"), Dd = bo(xn.cloudDay), Bd = bo(xn.cloudNight), Ql = bo(xn.dusk), Rd = bo(xn.sunEdge), Yu = bo(xn.sun), Zu = 10, Cc = 0.3, vi = 56, Cp = 21;
function Ku(n) {
  const d = Array.from({ length: Cp }, () => new Array(vi).fill(void 0)), i = (k, E, S) => {
    d[E][k] = S;
  }, u = tn(Ql, mn, 0.35), v = tn(mn, Gr, 0.22);
  for (let k = 0; k <= 6; k++) {
    const E = k < 2 ? vi - 2 : vi - 1;
    for (let S = 6 - k; S <= E; S++) i(S, k, k < 2 ? u : k === 6 ? v : mn);
  }
  const y = [Ql, Rd, Bd, bo(xn.skyRainDay), tn(Ql, mn, 0.2), tn(n, mn, 0.35)];
  [2, 3, 2, 3, 3].forEach((k, E) => {
    const S = 9 + E * 6;
    for (let B = 0; B < k; B++) {
      const Mt = y[(E * 2 + B * 3) % y.length];
      for (let ht = S; ht < S + 5; ht++)
        i(ht, 7 + B * 2, tn(Mt, mn, 0.12)), i(ht, 8 + B * 2, B === k - 1 ? tn(Mt, Gr, 0.3) : Mt);
      i(S + 5, 7 + B * 2, mn), i(S + 5, 8 + B * 2, mn);
    }
  });
  for (let k = 7; k <= 12; k++) i(5, k, mn);
  i(5, 13, Rd);
  for (let k = 7; k <= 14; k++) for (let E = 42; E <= 51; E++) i(E, k, E === 51 ? Bd : Dd);
  for (let k = 43; k <= 50; k += 2)
    i(k, 12, mn), i(k, 9, tn(mn, Dd, 0.4));
  for (let k = 40; k <= 53; k++) i(k, 14, k === 40 || k === 53 ? Bd : Dd);
  for (let k = 15; k <= 18; k++) for (let E = 46; E <= 49; E++) i(E, k, k === 18 ? mn : k === 16 ? Rd : Ql);
  for (let k = 15; k <= 19; k++) i(44, k, mn);
  return i(44, 20, Yu), d;
}
function $u(n, d, i, u) {
  const v = Math.max(1, Math.round(n)), y = Math.max(1, Math.round(d)), k = new Uint8ClampedArray(v * y * 4), E = bo(u.skyClearDay), S = bo(u.skyFogDay), B = Ku(E), Mt = Math.round(y * 0.55), ht = ul(1 - Math.log(i / Cc) / Math.log(Zu / Cc)), $ = tn(E, S, ht), tt = (z) => ul((z - 0.1) / 0.9), st = ul((1 - Math.exp(-2 / i) - 0.2) / 0.8), et = Math.round(v / 2 - vi / 2), U = Mt + 3;
  for (let z = 0; z < y; z++) {
    const pt = U - 1 - z, ct = z - U;
    for (let xt = 0; xt < v; xt++) {
      const Q = xt - et;
      let ot, L;
      const G = pt >= 0 && pt < Cp && Q >= 0 && Q < vi ? B[pt][Q] : void 0;
      if (G)
        ot = G, L = st;
      else if (pt >= 0 && pt <= 1 && Q >= 4 - pt && Q <= 5 - pt)
        ot = tn(Gr, Sc, 0.15), L = st;
      else if (z < Mt) {
        const kt = ul(((z + 0.5) / Mt - 0.15) / 0.85) * 3, J = Math.min(3, Math.floor(kt + Jl(xt + 2, z + 5)));
        ot = tn($, Gr, J * 0.1), L = ht * 0.95;
      } else {
        const kt = (z - Mt + 0.5) / (y - Mt), J = Math.min(1.5, 6e-3 / (kt * kt)), Vt = ul(kt * 1.4) * 3, C = Math.min(3, Math.floor(Vt + Jl(xt + 1, z + 6)));
        ot = tn(Sc, Uu, C / 3);
        const D = 1 + Math.round(kt * 7), _ = Math.floor(xt / (D * 3)), P = 0.06 + 0.16 * kt, gt = xt % (D * 3) < D;
        gt && Mc(_, z) < P ? ot = tn(ot, Gr, 0.18 + 0.1 * (1 - kt)) : gt && kt > 0.5 && Mc(_, z - 1) < P && (ot = tn(ot, mn, 0.12)), L = tt(1 - Math.exp(-J / i)), ct === 0 && Q >= 3 && Q <= 8 ? (ot = tn(ot, Gr, Q < 6 ? 0.8 : 0.45), L = st) : ct >= 0 && ct <= 2 && Q >= vi && Q < vi + 40 ? ((1 - (Q - vi) / 40) * (ct === 1 ? 0.9 : 0.5) > Jl(xt, z + 3) && (ot = tn(ot, Gr, 0.5)), L = st) : ct === 0 && Q >= 6 && Q < vi && (ot = tn(ot, mn, Q % 2 === 0 ? 0.35 : 0.2), L = st);
      }
      const Lt = L > Jl(xt, z) ? S : ot, X = (z * v + xt) * 4;
      k[X] = Lt[0], k[X + 1] = Lt[1], k[X + 2] = Lt[2], k[X + 3] = 255;
    }
  }
  return { data: k, w: v, h: y };
}
const Xu = {
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
}, Ju = 1.6;
function Qu(n, d) {
  const i = n ? Xu[String(n).toUpperCase()] : void 0;
  if (!i || !(d > 0)) return;
  const u = (y) => Math.abs(Math.log(y[2] / d)), v = i.reduce((y, k) => u(k) < u(y) ? k : y);
  return u(v) <= Math.log(Ju) ? { from: v[0], to: v[1], km: v[2] } : void 0;
}
const tf = (n, d) => d === "mi" ? n * 1.609344 : d === "m" ? n / 1e3 : d === "ft" ? n * 3048e-7 : d === "yd" ? n * 9144e-7 : n, ef = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", En = 6e4, Pe = 36e5, _n = 864e5, ml = 1440, af = 6, nf = 10 * En, Tc = 3, of = 3, td = { day: [6, 22], waking: [7, 23], all: [0, 24] }, rf = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], sf = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Lc = (n, d, i, u) => '<circle cx="' + n + '" cy="' + d + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((v) => {
  const y = Math.cos(v * Math.PI / 180), k = Math.sin(v * Math.PI / 180), E = i + 2, S = i + 2 + u;
  return "M" + (n + y * E).toFixed(2) + " " + (d + k * E).toFixed(2) + "L" + (n + y * S).toFixed(2) + " " + (d + k * S).toFixed(2);
}).join("") + '"/>', ui = (n) => '<path d="' + sf + '"' + (n ? ' transform="' + n + '"' : "") + "/>", fi = (n) => '<path d="' + n + '"/>', Ac = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function lf(n, d) {
  const i = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return d ? Ac : Lc(12, 12, 4, 2.5);
    case "clear-night":
      return Ac;
    case "partlycloudy":
      return (d ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Lc(7.5, 7.5, 2.6, 1.4)) + ui("translate(3.6,3) scale(.85)");
    case "cloudy":
      return ui();
    case "fog":
      return fi("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return ui(i) + fi("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return ui(i) + fi("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return ui(i) + fi("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return ui(i) + fi("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return ui(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return ui(i) + fi("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return ui(i) + fi("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return fi("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + fi("M12 8v5M12 16h.01");
  }
}
const Nd = (n, d) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + lf(n, d) + "</svg>", df = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), cf = 30 * En, pf = 7, uf = 3, _c = 1, ff = En, hf = 15 * En, mf = 5, We = {
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
}, Dt = {
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
}, gf = {
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
}, vf = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], bf = Object.keys(Dt.phases), wf = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, xf = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Tp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], ed = 100, Ec = "µg/m³", yf = "weather_alerts.air_quality_pollen", cd = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], kf = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, Mf = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], Sf = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, Cf = { daily: 1, hourly: 2 }, Wt = (n) => String(n ?? "").replace(/[&<>"']/g, (d) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[d]), Ja = (n, d) => n.replace(/\{(\w+)\}/g, (i, u) => d[u] ?? ""), mi = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', Dc = /* @__PURE__ */ new Map();
function Lp(n) {
  let d = Dc.get(n);
  if (d === void 0) {
    const i = "http://www.w3.org/2000/svg", u = document.createElementNS(i, "svg"), v = document.createElementNS(i, "path");
    u.setAttribute("viewBox", "0 0 24 24"), u.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", v.setAttribute("d", n), u.append(v), document.body.append(u);
    const y = v.getBBox();
    u.remove();
    const k = Math.max(y.width, y.height), E = k ? 26 * 24 / k : 0, S = E / 24;
    d = k ? "width:" + E.toFixed(2) + "px;height:" + E.toFixed(2) + "px;translate:" + ((12 - y.x - y.width / 2) * S).toFixed(2) + "px " + ((12 - y.y - y.height / 2) * S).toFixed(2) + "px" : "", Dc.set(n, d);
  }
  return d ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + d + '"><path d="' + n + '"/></svg>' : mi(n);
}
const Tf = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, je = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Bc = /* @__PURE__ */ new Map(), Rc = /* @__PURE__ */ new Map(), Pd = /* @__PURE__ */ new WeakMap(), Lf = (n) => {
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
function Le(n, d, i) {
  const u = Number(n);
  if (Number.isNaN(u)) return String(n);
  const v = (d == null ? void 0 : d.number_format) === "none", y = { maximumFractionDigits: 2, ...i, ...v ? { useGrouping: !1 } : {} }, k = v ? "en-US" : Lf(d), E = JSON.stringify([k, y]);
  let S = Bc.get(E);
  if (!S) {
    try {
      S = new Intl.NumberFormat(k, y);
    } catch {
      S = new Intl.NumberFormat(void 0, y);
    }
    Bc.set(E, S);
  }
  return S.format(u);
}
const rc = (n) => {
  var d;
  return ((d = n == null ? void 0 : n.locale) == null ? void 0 : d.language) || (n == null ? void 0 : n.language) || void 0;
};
function Af(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Pd.has(n)) return Pd.get(n);
  const d = n.time_format, i = d === "language" || d === "system" || !d ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(d === "language" ? n.language : void 0).includes("10") : d === "12";
  return Pd.set(n, i), i;
}
const Ap = (n) => {
  var d, i;
  return ((d = n == null ? void 0 : n.locale) == null ? void 0 : d.time_zone) === "server" && ((i = n == null ? void 0 : n.config) != null && i.time_zone) ? n.config.time_zone : void 0;
};
function _p(n, d) {
  const i = JSON.stringify([n, d]);
  let u = Rc.get(i);
  if (!u) {
    try {
      u = new Intl.DateTimeFormat(n, d);
    } catch {
      u = new Intl.DateTimeFormat(void 0, { ...d, timeZone: void 0 });
    }
    Rc.set(i, u);
  }
  return u;
}
const Qa = (n, d) => _p(rc(d), { hour: "numeric", minute: "2-digit", hourCycle: Af(d == null ? void 0 : d.locale) ? "h12" : "h23", timeZone: Ap(d) }).format(n), Nc = (n, d) => _p(rc(d), { weekday: "short", timeZone: Ap(d) }).format(n), _f = (n, d) => n.toLocaleDateString(rc(d), { weekday: "narrow" }), Ke = (n, d) => je(d) ? Le(Math.round(Number(d)), n.locale) + "°" : "–", ir = (n) => {
  const d = new Date(n);
  return d.setHours(0, 0, 0, 0), d;
}, Es = (n, d) => n.getFullYear() === d.getFullYear() && n.getMonth() === d.getMonth() && n.getDate() === d.getDate(), wn = Math.PI / 180, Ef = 2440588, Df = 2451545, pd = wn * 23.4397, Bf = 149598e3, Rf = -0.833 * wn, Nf = 0.133 * wn, Pc = 5 * En, Ep = (n) => n.getTime() / _n - 0.5 + Ef - Df, Dp = (n, d) => Math.atan2(Math.sin(n) * Math.cos(pd) - Math.tan(d) * Math.sin(pd), Math.cos(n)), Bp = (n, d) => Math.asin(Math.sin(d) * Math.cos(pd) + Math.cos(d) * Math.sin(pd) * Math.sin(n)), Pf = (n, d) => wn * (280.16 + 360.9856235 * n) - d, If = (n, d, i) => Math.asin(Math.sin(d) * Math.sin(i) + Math.cos(d) * Math.cos(i) * Math.cos(n));
function Rp(n) {
  const d = wn * (357.5291 + 0.98560028 * n), i = wn * (1.9148 * Math.sin(d) + 0.02 * Math.sin(2 * d) + 3e-4 * Math.sin(3 * d)), u = d + i + wn * 102.9372 + Math.PI;
  return { ra: Dp(u, 0), dec: Bp(u, 0), dist: Bf };
}
function Np(n) {
  const d = wn * (218.316 + 13.176396 * n), i = wn * (134.963 + 13.064993 * n), u = wn * (93.272 + 13.22935 * n), v = d + wn * 6.289 * Math.sin(i), y = wn * 5.128 * Math.sin(u);
  return { ra: Dp(v, y), dec: Bp(v, y), dist: 385001 - 20905 * Math.cos(i) };
}
const Pp = (n, d, i, u) => {
  const v = Ep(d), y = n(v);
  return If(Pf(v, wn * -u) - y.ra, wn * i, y.dec);
}, ud = (n, d, i) => Pp(Rp, n, d, i), Hf = (n, d, i) => Pp(Np, n, d, i);
function Ip(n, d, i, u) {
  const v = {};
  let y = i.getTime(), k = n(i) - d;
  for (let E = y + Pc; E <= u.getTime(); E += Pc) {
    const S = n(new Date(E)) - d;
    if (k < 0 != S < 0) {
      const B = new Date(y + (E - y) * k / (k - S));
      S > 0 ? v.rise ?? (v.rise = B) : v.set ?? (v.set = B);
    }
    y = E, k = S;
  }
  return v;
}
const Hp = (n) => {
  const d = ir(n);
  return [d, new Date(d.getTime() + _n)];
}, Ff = (n, d, i) => Ip((u) => ud(u, d, i), Rf, ...Hp(n)), Of = (n, d, i) => Ip((u) => Hf(u, d, i), Nf, ...Hp(n));
function Id(n) {
  const d = Ep(n), i = Rp(d), u = Np(d), v = Math.acos(Math.sin(i.dec) * Math.sin(u.dec) + Math.cos(i.dec) * Math.cos(u.dec) * Math.cos(i.ra - u.ra)), y = Math.atan2(i.dist * Math.sin(v), u.dist - i.dist * Math.cos(v)), k = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - u.ra), Math.sin(i.dec) * Math.cos(u.dec) - Math.cos(i.dec) * Math.sin(u.dec) * Math.cos(i.ra - u.ra));
  return { fraction: (1 + Math.cos(y)) / 2, phase: 0.5 + 0.5 * y * (k < 0 ? -1 : 1) / Math.PI };
}
const Wf = (n) => {
  const d = n * 28;
  return d < 0.5 || d > 27.5 ? "new_moon" : d < 6.5 ? "waxing_crescent" : d < 7.5 ? "first_quarter" : d < 13.5 ? "waxing_gibbous" : d < 14.5 ? "full_moon" : d < 20.5 ? "waning_gibbous" : d < 21.5 ? "last_quarter" : "waning_crescent";
}, gl = (n) => {
  const d = n == null ? void 0 : n.config;
  return d && je(d.latitude) && je(d.longitude) ? { lat: Number(d.latitude), lon: Number(d.longitude) } : null;
};
function fl(n, d) {
  var B, Mt, ht;
  const i = gl(n), u = i ? Ff(d, i.lat, i.lon) : {}, v = (B = n == null ? void 0 : n.states) == null ? void 0 : B["sun.sun"], y = ir(d).getTime(), k = ($) => {
    const tt = $ ? new Date($) : null;
    return tt && Number.isFinite(tt.getTime()) && ir(tt).getTime() === y ? tt : null;
  }, E = k((Mt = v == null ? void 0 : v.attributes) == null ? void 0 : Mt.next_rising), S = k((ht = v == null ? void 0 : v.attributes) == null ? void 0 : ht.next_setting);
  return E && (u.rise = E), S && (u.set = S), u;
}
function qf(n) {
  var u;
  const d = (u = n == null ? void 0 : n.states) == null ? void 0 : u["sun.sun"];
  if ((d == null ? void 0 : d.state) === "below_horizon" || (d == null ? void 0 : d.state) === "above_horizon") return d.state === "below_horizon";
  const i = gl(n);
  return i ? ud(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const Ur = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", Bs = (n, d) => {
  var u;
  const i = (u = n.entities) == null ? void 0 : u[d];
  return !i || !i.hidden && !i.entity_category;
}, la = (n, d, i) => {
  var u, v;
  for (const y of d) {
    const k = (u = n.states) == null ? void 0 : u[y];
    if (!Ur(k)) continue;
    const E = (v = k.attributes) == null ? void 0 : v[i];
    if (E != null && E !== "") return { stateObj: k, value: E };
  }
}, jf = (n, d) => d.map((i) => {
  var u;
  return (u = n.states) == null ? void 0 : u[i];
}).find(Ur), zf = (n, d, i) => d.map((u) => {
  var v;
  return (v = n.states) == null ? void 0 : v[u];
}).find((u) => {
  var v;
  return Ur(u) && (((v = u.attributes) == null ? void 0 : v.supported_features) == null || Number(u.attributes.supported_features) & Cf[i]);
});
function nr(n, d, i) {
  var y, k, E, S;
  const u = ((k = (y = n.config) == null ? void 0 : y.unit_system) == null ? void 0 : k.length) || "", v = (d == null ? void 0 : d.attributes) || {};
  switch (i) {
    case "precipitation":
      return v.precipitation_unit || (u === "km" ? "mm" : "in");
    case "pressure":
      return v.pressure_unit || (u === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return v.wind_speed_unit || u + "/h";
    case "visibility":
      return v.visibility_unit || u;
    default:
      return v.temperature_unit || ((S = (E = n.config) == null ? void 0 : E.unit_system) == null ? void 0 : S.temperature) || "";
  }
}
function sd(n, d, i, u) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [v, ...y] = n.formatEntityAttributeValueToParts(d, i, u).map((k) => k.value);
      return { number: v, unit: y.join("").trim() };
    }
  } catch {
  }
  return { number: Le(u, n.locale), unit: nr(n, d, i) };
}
function Ic(n, d, i, u) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(d, i, u);
  } catch {
  }
  const v = sd(n, d, i, u);
  return (v.number + " " + v.unit).trim();
}
function tr(n, d) {
  var u;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(d);
  } catch {
  }
  const i = (u = d.attributes) == null ? void 0 : u.unit_of_measurement;
  return gf[d.state] || (i && je(d.state) ? Le(d.state, n.locale) + " " + i : d.state);
}
function Vr(n, d) {
  var i;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(d, { type: "entity" });
  } catch {
  }
  return ((i = d.attributes) == null ? void 0 : i.friendly_name) || d.entity_id;
}
const Hc = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Hd = (n) => Tp.find(([, d]) => n <= d)[0];
function Vf(n, d) {
  if (d === "Beaufort") return Math.round(n);
  const i = d ? kf[d] : void 0;
  if (i === void 0) return;
  const u = Mf.findIndex((v) => n * i < v);
  return u === -1 ? 12 : u;
}
const Fc = (n, d) => {
  const i = d ? Sf[d] : void 0;
  return i === void 0 ? void 0 : n * i;
}, Oc = (n) => Object.keys(n.states || {}).find((d) => {
  var i, u;
  return d.startsWith("sensor.") && ((u = (i = n.entities) == null ? void 0 : i[d]) == null ? void 0 : u.platform) === "moon";
}), Fd = (n) => Object.values(n.states || {}).filter((d) => {
  var i, u;
  return d.entity_id.startsWith("sensor.") && ((i = d.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((u = d.attributes) == null ? void 0 : u.state_class) ?? "") && Bs(n, d.entity_id);
}).map((d) => d.entity_id).sort()[0];
function Gf(n) {
  var i;
  const d = {};
  for (const [u, v] of Object.entries(((i = n == null ? void 0 : n.core) == null ? void 0 : i.integration) ?? {})) {
    if (v && "integration_type" in v) {
      d[u] = v.categories;
      continue;
    }
    for (const [y, k] of Object.entries((v == null ? void 0 : v.integrations) ?? {})) d[y] = k == null ? void 0 : k.categories;
  }
  return d;
}
const Fp = (n, d, i) => {
  var v, y, k;
  const u = (y = (v = n.entities) == null ? void 0 : v[i]) == null ? void 0 : y.platform;
  return !!u && !!((k = d[u]) != null && k.includes(yf));
};
function Uf(n, d) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((u) => {
    var v;
    return u.entity_id.startsWith("sensor.") && cd.includes(((v = u.attributes) == null ? void 0 : v.device_class) ?? "") && Bs(n, u.entity_id) && Fp(n, d, u.entity_id);
  }).sort((u, v) => u.entity_id.localeCompare(v.entity_id)).forEach((u) => {
    i.has(u.attributes.device_class) || i.set(u.attributes.device_class, u.entity_id);
  }), cd.map((u) => i.get(u)).filter(Boolean);
}
const Yf = (n, d) => Object.values(n.states || {}).filter((i) => {
  var u, v;
  return i.entity_id.startsWith("sensor.") && Bs(n, i.entity_id) && Fp(n, d, i.entity_id) && (((v = (u = n.entities) == null ? void 0 : u[i.entity_id]) == null ? void 0 : v.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function Wc(n, d, i) {
  const u = Math.max(d - n, 1e-6), v = i[i.length - 1], y = i.find((B) => u / B <= 4) ?? v * Math.ceil(u / (4 * v)), k = Math.floor(n / y) * y;
  let E = Math.ceil(d / y) * y;
  E === k && (E = k + y);
  const S = [];
  for (let B = k; B <= E + y / 1e3; B += y) S.push(B);
  return { min: k, max: E, ticks: S };
}
const hl = (n, d, i) => {
  const u = (k) => [1, 3, 5].map((E) => parseInt(k.slice(E, E + 2), 16)), v = u(n), y = u(d);
  return "rgb(" + v.map((k, E) => Math.round(k + (y[E] - k) * i)).join(", ") + ")";
}, Zf = (n, d, i, u) => {
  const v = i * Math.abs(1 - 2 * u), y = u < 0.5 ? 0 : 1;
  return "M " + n + " " + (d - i) + " A " + i + " " + i + " 0 0 0 " + n + " " + (d + i) + " A " + v + " " + i + " 0 0 " + y + " " + n + " " + (d - i) + " Z";
}, An = ({ icon: n, name: d, sub: i, visual: u, double: v, backdrop: y, cls: k, zone: E, callouts: S }) => '<div class="wbCard wbSquare' + (v ? " wbDouble" : "") + (y ? " wbHasBackdrop" : "") + (E != null ? " wbZoned" : "") + (k ? " " + k : "") + '">' + (y ? '<div class="wbBackdrop" aria-hidden="true">' + y + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Lp(n) + '</div><div class="wbText"><span class="wbName">' + Wt(d) + "</span>" + (i ? '<span class="wbSub">' + Wt(i) + "</span>" : "") + "</div></div>" + (E != null ? '<div class="wbZone">' + E + "</div>" + (S != null && S.length ? '<div class="wbCallouts">' + S.slice(0, 3).map((B) => Array.isArray(B) ? '<span class="wbCallout"><span>' + Wt(B[0]) + "</span><span>" + Wt(B[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + Wt(B) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + u + "</div>") + "</div>", er = (n, d) => '<div class="wbValue"><span class="wbNum">' + Wt(n) + "</span>" + (d ? '<span class="wbUnitV">' + Wt(d) + "</span>" : "") + "</div>";
function Kf(n) {
  const d = n.max - n.min || 1, i = (E) => 100 - (Math.min(n.max, Math.max(n.min, E)) - n.min) / d * 100, u = (E) => E / ml * 100 + "%", v = (E) => E.map((S) => S.t + "," + i(S.v)).join(" "), y = n.kind === "line" ? n.points : [];
  let k = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((E) => '<span class="wbDcSunMark" style="left:' + u(E.t) + '">' + mi(E.rise ? We.sunsetUp : We.sunsetDown) + Wt(E.label) + "</span>").join("") + "</div>";
  return k += '<div class="wbDcY">' + n.ticks.map((E) => '<span style="top:' + i(E) + '%">' + Wt(n.format(E)) + "</span>").join("") + "</div>", k += '<div class="wbDcPlot"><svg viewBox="0 0 ' + ml + ' 100" preserveAspectRatio="none">' + n.night.map(([E, S]) => '<rect class="wbDcNight" x="' + E + '" y="0" width="' + (S - E) + '" height="100"></rect>').join("") + n.ticks.map((E) => '<line class="wbDcGrid" x1="0" x2="' + ml + '" y1="' + i(E) + '" y2="' + i(E) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((E) => '<line class="wbDcSunLine" x1="' + E.t + '" x2="' + E.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + v(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (y.length > 1 ? '<polygon class="wbDcArea" points="' + y[0].t + ",100 " + v(y) + " " + y[y.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + v(y) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((E) => E.v > 0).map((E) => '<i class="wbDcBar" style="left:' + u(E.t + 12) + ";width:" + u(36) + ";height:" + (100 - i(E.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + u(n.now.t) + ";top:" + i(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + u(n.peak.t) + ";top:" + i(n.peak.v) + '%">' + Wt(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Wt(n.note) + "</span>" : "") + "</div>", k += '<div class="wbDcX">' + n.hours.map((E) => '<span class="' + (E.minor ? "wbMinor" : "") + '" style="left:' + u(E.t) + '">' + Wt(E.label) + "</span>").join("") + "</div></div>", k;
}
function qc(n, d, i = 120, u = 300) {
  const k = n.map((U) => U.value), E = Math.min(...k), S = Math.max(...k), B = S - E || 1, Mt = (U) => U / (n.length - 1) * u, ht = (U) => 18 + (1 - (U - E) / B) * (i - 18 - 18), $ = n.map((U, z) => Mt(z) + "," + ht(U.value)).join(" "), tt = k.indexOf(S), st = k.indexOf(E), et = (U) => U === 0 ? "start" : U === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + u + " " + i + '" aria-hidden="true"><polygon class="wbArea" points="0,' + (i - 18) + " " + $ + " " + u + "," + (i - 18) + '"></polygon><polyline class="wbLine" points="' + $ + '" vector-effect="non-scaling-stroke"></polyline><text x="' + Mt(tt) + '" y="' + (ht(S) - 6) + '" text-anchor="' + et(tt) + '">' + Wt(d(S)) + '</text><text x="' + Mt(st) + '" y="' + (ht(E) + 14) + '" text-anchor="' + et(st) + '">' + Wt(d(E)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + Wt(n[0].label) + '</text><text x="' + u + '" y="' + i + '" text-anchor="end">' + Wt(n[n.length - 1].label) + "</text></svg>";
}
function $f(n, d) {
  const y = n.map((ht) => ht.value).concat([]), k = Math.min(...y) - 2, E = Math.max(...y) + 1, S = E - k || 1, B = 300 / n.length, Mt = (ht) => (1 - (ht - k) / S) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((ht, $) => '<rect class="wbBar' + (ht.now ? " wbNowBar" : "") + '" x="' + ($ * B + B * 0.2) + '" y="' + Mt(ht.value) + '" width="' + B * 0.6 + '" height="' + (104 - Mt(ht.value)) + '" rx="6"></rect><text x="' + ($ * B + B / 2) + '" y="120" text-anchor="middle">' + Wt(ht.label) + "</text>").join("") + "</svg>";
}
const Xf = [
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
], Jf = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], jc = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Qf = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let th = 0;
function zc(n, { getHass: d, entityId: i, style: u = "bitmap", motion: v = !0, cards: y, onOpen: k, hoursWindow: E } = {}) {
  var Ci, Ti;
  const S = "wb" + ++th + "-", B = document.createElement("div");
  B.className = "wb", B.dataset.style = u;
  const Mt = document.createElement("div");
  Mt.className = "wbBento", B.appendChild(Mt), n.replaceChildren(B);
  const ht = ["aq_tile", "pollen_tile", "radar_tile"], $ = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((p) => !y || y.includes(p)), tt = { current: "wide", hourly: "wide", compared_to_average: "double" }, st = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], et = {};
  $.forEach((p) => {
    const m = document.createElement("div");
    m.className = "wbItem", m.dataset.card = p, m.dataset.size = tt[p] || "tile", m.hidden = !0, st.includes(p) && (m.dataset.xl = ""), Mt.appendChild(m), et[p] = { el: m, html: null };
  });
  let U = !1, z = null, pt = 0, ct = -1, xt = !1, Q = null;
  const ot = "homecore-next-view", L = (() => {
    try {
      return localStorage.getItem(ot);
    } catch {
      return null;
    }
  })(), G = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: L === "bars" ? "bars" : "strip", aq: void 0 }, Lt = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let X = /* @__PURE__ */ new Date(), kt = /* @__PURE__ */ new Date();
  const J = {}, Vt = {}, C = {}, D = (p) => {
    var m;
    return ((m = C[p]) == null ? void 0 : m.forecast) ?? [];
  }, _ = (p, m) => {
    var x;
    return C[m] ? (x = p.states) == null ? void 0 : x[C[m].entityId] : void 0;
  };
  function P(p) {
    const m = Vt[p];
    m && (m.unsub.then((x) => {
      typeof x == "function" && x();
    }).catch(() => {
    }), delete Vt[p]), C[p] && delete C[p];
  }
  function gt(p, m, x) {
    var H;
    if (typeof ((H = p.connection) == null ? void 0 : H.subscribeMessage) != "function") return;
    const T = { entityId: x };
    try {
      T.unsub = Promise.resolve(p.connection.subscribeMessage((N) => {
        U || Vt[m] !== T || (N != null && N.forecast ? C[m] = { entityId: x, forecast: N.forecast } : delete C[m], Vo());
      }, { type: "weather/subscribe_forecast", forecast_type: m, entity_id: x }));
    } catch (N) {
      T.unsub = Promise.reject(N);
    }
    T.unsub.catch(() => {
      Vt[m] === T && delete Vt[m];
    }), Vt[m] = T;
  }
  function mt(p, m) {
    var x;
    for (const T of ["daily", "hourly"]) {
      const H = zf(p, m, T);
      ((x = Vt[T]) == null ? void 0 : x.entityId) !== (H == null ? void 0 : H.entity_id) && (P(T), H && gt(p, T, H.entity_id));
    }
  }
  const V = (p, m, x, T = !1) => p.callWS({
    type: "history/history_during_period",
    start_time: x.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [m],
    minimal_response: T,
    no_attributes: T,
    significant_changes_only: !1
  });
  async function yt(p, m) {
    var Y, rt, K;
    const x = la(p, m, "pressure");
    if (!x) return;
    const T = x.stateObj.entity_id, H = await V(p, T, new Date(Date.now() - 3 * Pe)), N = (K = (rt = (Y = H == null ? void 0 : H[T]) == null ? void 0 : Y.find((Ct) => {
      var At;
      return typeof ((At = Ct.a) == null ? void 0 : At.pressure) == "number";
    })) == null ? void 0 : rt.a) == null ? void 0 : K.pressure;
    Lt.pressureHistory = typeof N == "number" ? { entityId: T, value: N } : void 0;
  }
  async function Tt(p, m) {
    var rt;
    const x = la(p, m, "temperature");
    if (!x) return;
    const T = x.stateObj.entity_id, H = ir(/* @__PURE__ */ new Date()), N = await V(p, T, new Date(H.getTime() - pf * _n)), Y = /* @__PURE__ */ new Map();
    for (const K of (N == null ? void 0 : N[T]) ?? []) {
      const Ct = (rt = K.a) == null ? void 0 : rt.temperature, At = new Date((K.lc ?? K.lu) * 1e3);
      if (typeof Ct != "number" || At >= H) continue;
      const St = At.toDateString();
      Y.set(St, Math.max(Y.get(St) ?? -1 / 0, Ct));
    }
    Lt.temperatureHistory = { entityId: T, dailyHighs: [...Y.values()], days: [...Y.entries()].map(([K, Ct]) => ({ date: new Date(K), high: Ct })) };
  }
  async function te(p) {
    const m = Fd(p);
    if (!m) return;
    const x = await p.callWS({ type: "recorder/statistic_during_period", statistic_id: m, rolling_window: { duration: { hours: 24 } } });
    Lt.rain = { entityId: m, change: (x == null ? void 0 : x.change) ?? void 0 };
  }
  function le() {
    const p = d == null ? void 0 : d();
    if (!p || U || typeof p.callWS != "function") return;
    const m = La(p);
    Lt.lastFetch = Date.now(), [yt(p, m), Tt(p, m), te(p)].forEach((x) => x.then(() => Vo(), () => {
    }));
  }
  async function ea() {
    const p = d == null ? void 0 : d();
    if (!p) return;
    const m = la(p, La(p), "temperature");
    if (!m) return;
    const x = m.stateObj.entity_id, T = ir(/* @__PURE__ */ new Date());
    try {
      const H = await V(p, x, T), N = (Y) => ((H == null ? void 0 : H[x]) ?? []).map((rt) => {
        var K;
        return { time: rt.lu * 1e3, value: (K = rt.a) == null ? void 0 : K[Y] };
      }).filter((rt) => typeof rt.value == "number");
      Lt.todayHistory = { day: T.toDateString(), fetched: Date.now(), temperature: N("temperature"), humidity: N("humidity") }, Vo();
    } catch {
    }
  }
  async function Se(p) {
    const m = d == null ? void 0 : d();
    if (m)
      try {
        const x = await V(m, p, new Date(Date.now() - 24 * Pe), !0), T = ((x == null ? void 0 : x[p]) ?? []).filter((N) => je(N.s)), H = Math.max(1, Math.ceil(T.length / 48));
        Lt.aqHistory = { entityId: p, points: T.filter((N, Y) => Y % H === 0).map((N) => ({ label: Qa(new Date(N.lu * 1e3), m), value: Number(N.s) })) }, Vo();
      } catch {
      }
  }
  function wi(p) {
    Lt.categories === void 0 && (Lt.categories = null, Promise.resolve().then(() => p.callWS({ type: "integration/descriptions" })).then((m) => {
      Lt.categories = Gf(m);
    }, () => {
      Lt.categories = {};
    }).then(() => Vo()));
  }
  function La(p) {
    var x;
    const m = Object.keys(p.states || {}).filter((T) => T.startsWith("weather.") && Bs(p, T)).sort();
    return i && ((x = p.states) != null && x[i]) ? [i, ...m.filter((T) => T !== i)] : m;
  }
  const Ht = (p) => Lt.categories ? { air: Uf(p, Lt.categories), pollen: Yf(p, Lt.categories) } : { air: [], pollen: [] };
  function me(p, m, x, T) {
    if (u === "line") return '<span class="wbWx wbS' + m + ' wbLineIcon" aria-hidden="true">' + Nd(p, x || p === "clear-night") + "</span>";
    if (u === "smooth") {
      const H = Vu(p, m === 90, x, S + "g-" + T);
      return '<span class="wbWx wbS' + m + " wb" + H.k[0].toUpperCase() + H.k.slice(1) + (H.night ? " wbNight" : "") + '" aria-hidden="true">' + H.svg + "</span>";
    }
    return '<span class="wbWx wbS' + m + '" aria-hidden="true"><canvas data-wb-wx="' + Wt(fd(p, x)) + '" data-size="' + m + '"></canvas></span>';
  }
  const da = () => D("daily").filter((p) => p.templow != null).slice(0, af);
  function ue(p, m) {
    const x = new Date(m.datetime), T = /* @__PURE__ */ new Date();
    return Es(x, T) ? Dt.today : Es(x, new Date(T.getTime() + _n)) ? Dt.tomorrow : Nc(x, p);
  }
  const Ue = (p, m, x) => x === 0 ? ue(p, m) : Nc(new Date(m.datetime), p);
  function Yr(p, m) {
    var At, St, Zt, Gt;
    const x = jf(p, m);
    if (!x) return "";
    const T = da(), H = G.openDay !== void 0 ? T[G.openDay] : void 0, N = la(p, m, "temperature"), Y = T[0], rt = Y && Es(new Date(Y.datetime), /* @__PURE__ */ new Date()), K = ((St = (At = p.config) == null ? void 0 : At.unit_system) == null ? void 0 : St.temperature) || ((Zt = x.attributes) == null ? void 0 : Zt.temperature_unit) || "";
    let Ct = '<div class="wbCard wbWeather' + (H ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (H ? " inert" : "") + '><div class="wbNow">' + (k ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Wt(Dt.openPage) + '">' : '<div class="wbCurrent">') + me(x.state, 90, qf(p), "now") + '<div class="wbTempBlock">' + (N && je(N.value) ? '<div class="wbTemp"><span class="wbDeg">' + Wt(Le(Math.round(Number(N.value)), p.locale)) + '</span><span class="wbUnit">' + Wt(K) + "</span></div>" : "") + '<div class="wbPlace">' + Wt(((Gt = p.config) == null ? void 0 : Gt.location_name) ?? "") + "</div></div>" + (k ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Wt(tr(p, x)) + "</div>" + (rt && Y.templow != null ? '<div class="wbRange">' + Wt(Ja(Dt.range, { high: Ke(p, Y.temperature), low: Ke(p, Y.templow) })) + "</div>" : "") + "</div></div>";
    if (Ct += rr(p) + xi(p), T.length) {
      const Nt = rt && N && je(N.value) ? Ke(p, N.value) : "", ee = (jt, _t, Jt) => jt === 0 && Nt ? '<span class="wbAsDay">' + Wt(_t) + '</span><span class="wbAsNow">' + Wt(Jt) + "</span>" : Wt(_t);
      Ct += '<div class="wbColumns" role="list">' + T.map((jt, _t) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + _t + '" data-wb-focus="col-' + _t + '"><span class="wbDay">' + ee(_t, Ue(p, jt, _t), Dt.now) + "</span>" + me(jt.condition ?? "cloudy", 60, !1, "col" + _t) + '<span class="wbTemps"><span class="wbHi">' + ee(_t, Ke(p, jt.temperature), Nt) + '</span><span class="wbLo">' + Wt(Ke(p, jt.templow)) + "</span></span></button>").join("") + "</div>", Ct += '<div class="wbHalves" role="list">' + T.map((jt, _t) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + _t + '" data-wb-focus="half-' + _t + '">' + me(jt.condition ?? "cloudy", 40, !1, "half" + _t) + '<span class="wbText"><span class="wbName">' + Wt(ue(p, jt)) + '</span><span class="wbSub">' + Wt(Ja(Dt.highLow, { high: Ke(p, jt.temperature), low: Ke(p, jt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return Ct + "</div>" + (H ? ge(p, m, H) : "") + "</div>";
  }
  const we = {
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
  function Qt(p) {
    const m = Date.now(), x = D("hourly").filter((St) => new Date(St.datetime).getTime() > m - Pe).slice(0, 13);
    if (x.length < 2) return "";
    const T = (St) => Qa(new Date(St.datetime), p), H = (St) => we[St.condition] || "", N = (St) => ne[St.condition] || St.condition;
    let Y = H(x[0]);
    if (!Y) return "";
    let rt = x[0], K = 0;
    for (const St of x.slice(1))
      K === 2 || N(St) === N(rt) || !H(St) || (Y += (K ? " and " : ", ") + H(St) + " from " + T(St), rt = St, K++);
    const Ct = Number(x[0].temperature), At = x.filter((St) => je(St.temperature));
    if (je(Ct) && At.length) {
      const St = At.reduce((Gt, Nt) => Number(Nt.temperature) < Number(Gt.temperature) ? Nt : Gt), Zt = At.reduce((Gt, Nt) => Number(Nt.temperature) > Number(Gt.temperature) ? Nt : Gt);
      Ct - Number(St.temperature) >= 3 ? Y += ", down to " + Ke(p, St.temperature) + " by " + T(St) : Number(Zt.temperature) - Ct >= 3 && (Y += ", up to " + Ke(p, Zt.temperature) + " by " + T(Zt));
    }
    return Y[0].toUpperCase() + Y.slice(1) + ".";
  }
  const rr = (p) => {
    const m = Qt(p);
    return m ? '<div class="wbSummary"><p class="wbSummaryText">' + Wt(m) + "</p></div>" : "";
  };
  function xi(p) {
    const [m, x] = td[E == null ? void 0 : E()] || td.day, T = Date.now(), H = D("hourly").filter((N) => {
      const Y = new Date(N.datetime), rt = Y.getHours();
      return Y.getTime() > T - Pe / 2 && rt >= m && rt < x && je(N.temperature);
    }).slice(0, 4);
    return H.length ? '<div class="wbNextHours" role="list">' + H.map((N, Y) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Wt(Qa(new Date(N.datetime), p)) + "</span>" + me(N.condition ?? "cloudy", 40, N.is_daytime === !1, "hr" + Y) + '<span class="wbHourTemp">' + Wt(Ke(p, N.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function sr(p) {
    const m = p.getTime(), x = Date.now() - Pe;
    return D("hourly").filter((T) => {
      const H = new Date(T.datetime).getTime();
      return H >= m && H < m + _n && H > x;
    });
  }
  function en(p) {
    if (!p.length) return ["temperature"];
    const m = ["temperature"];
    return p.some((x) => x.precipitation != null || x.precipitation_probability != null) && m.push("precipitation"), p.some((x) => x.humidity != null) && m.push("humidity"), m;
  }
  function ge(p, m, x) {
    const T = ir(new Date(x.datetime)), H = sr(T), N = en(H), Y = N.includes(G.dayMode) ? G.dayMode : "temperature", rt = (K) => K === "humidity" ? Dt.humidity : Dt.modes[K];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + me(x.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Wt(ue(p, x)) + '</span><span class="wbSub">' + Wt(Ja(Dt.highLow, { high: Ke(p, x.temperature), low: Ke(p, x.templow) })) + '</span></div><button class="wbBack" title="' + Wt(Dt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + mi(We.back) + "</button></div>" + (N.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + N.map((K) => '<button aria-pressed="' + (K === Y) + '" data-wb="day-mode" data-mode="' + K + '" data-wb-focus="day-mode-' + K + '">' + Wt(rt(K)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Kf(ca(p, m, T, H, Y)) + "</div></div>";
  }
  function ca(p, m, x, T, H) {
    var wr;
    const N = x.getTime(), Y = Date.now(), rt = Es(x, /* @__PURE__ */ new Date()), K = (ye) => (ye - N) / En, Ct = (ye) => Qa(new Date(ye), p), At = (ye) => new Date(ye.datetime).getTime(), St = [0, 3, 6, 9, 12, 15, 18, 21].map((ye) => ({ t: ye * 60, label: Ct(N + ye * Pe), minor: ye % 6 !== 0 })), { rise: Zt, set: Gt } = fl(p, x), Nt = [], ee = [];
    Zt && (Nt.push({ t: K(Zt.getTime()), label: Ct(Zt.getTime()), rise: !0 }), ee.push([0, K(Zt.getTime())])), Gt && (Nt.push({ t: K(Gt.getTime()), label: Ct(Gt.getTime()), rise: !1 }), ee.push([K(Gt.getTime()), ml]));
    const jt = gl(p);
    !Zt && !Gt && jt && ud(new Date(N + _n / 2), jt.lat, jt.lon) < 0 && ee.push([0, ml]);
    const _t = rt ? K(Y) : void 0, Jt = { hours: St, sun: Nt, night: ee };
    if (!T.length && !rt) return { ...Jt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Dt.noHourly };
    if (H === "precipitation") {
      const ye = T.some((Pa) => Pa.precipitation_probability != null), sn = T.map((Pa) => ({ t: K(At(Pa)), v: Number((ye ? Pa.precipitation_probability : Pa.precipitation) ?? 0) })), Sn = nr(p, _(p, "hourly"), "precipitation"), Gn = Math.max(0, ...sn.map((Pa) => Pa.v)), xr = ye ? 100 : Wc(0, Math.max(Gn, 1), [0.5, 1, 2, 5, 10]).max, Un = (Pa) => ye ? Le(Pa, p.locale) + "%" : Le(Pa, p.locale, { maximumFractionDigits: 1 }) + " " + Sn, ln = sn.find((Pa) => Pa.v === Gn);
      return {
        ...Jt,
        kind: "bars",
        points: sn,
        min: 0,
        max: xr,
        ticks: [0, xr / 2, xr],
        format: Un,
        now: _t !== void 0 ? { t: _t, v: 0 } : void 0,
        peak: ln && Gn > 0 ? { t: ln.t + 30, v: ln.v, label: Un(ln.v) } : void 0,
        note: Gn > 0 ? void 0 : Dt.noRain
      };
    }
    const $t = H === "humidity" ? "humidity" : "temperature", Te = T.filter((ye) => ye[$t] != null && (!rt || At(ye) >= Y)).map((ye) => ({ t: K(At(ye)), v: Number(ye[$t]) }));
    let Rt, He = [];
    if (_t !== void 0) {
      const ye = la(p, m, $t);
      ye && je(ye.value) && (Rt = { t: _t, v: Number(ye.value) }, Te.unshift(Rt)), He = (((wr = Lt.todayHistory) == null ? void 0 : wr.day) === x.toDateString() ? Lt.todayHistory[$t] : []).filter((Sn) => Sn.time <= Y).map((Sn) => ({ t: Math.max(0, K(Sn.time)), v: Sn.value })), Rt && He.length && He.push(Rt);
    }
    const De = [...He, ...Te];
    if (!De.length) return { ...Jt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Dt.noHourly };
    const rn = De.map((ye) => ye.v), no = Wc(Math.min(...rn), Math.max(...rn), $t === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    $t === "humidity" && (no.min = Math.max(0, no.min), no.max = Math.min(100, no.max), no.ticks = no.ticks.filter((ye) => ye >= 0 && ye <= 100));
    const Vn = $t === "humidity" ? (ye) => Le(ye, p.locale) + "%" : (ye) => Ke(p, ye), xa = $t === "temperature" ? De.reduce((ye, sn) => sn.v > ye.v ? sn : ye) : void 0;
    return { ...Jt, kind: "line", points: Te, past: He, ...no, format: Vn, now: Rt, peak: xa ? { ...xa, label: Vn(xa.v) } : void 0 };
  }
  function va(p) {
    const m = ["temperature"];
    return p.some((x) => x.precipitation_probability != null || x.precipitation != null) && m.push("precipitation"), p.some((x) => x.wind_speed != null) && m.push("wind"), m;
  }
  function yi(p, m, x = Tc) {
    var N, Y;
    const T = D("daily"), H = [];
    for (let rt = 0; rt < x; rt++) for (const K of [!1, !0]) {
      const Ct = p.getTime() + (rt * 24 + (K ? 12 : 0)) * Pe, At = Ct + 12 * Pe, St = {};
      m.forEach((Gt) => {
        const Nt = new Date(Gt.datetime).getTime();
        Gt.condition && Nt >= Ct && Nt < At && (St[Gt.condition] = (St[Gt.condition] ?? 0) + (df.has(Gt.condition) ? 2 : 1));
      });
      let Zt = (N = Object.entries(St).sort((Gt, Nt) => Nt[1] - Gt[1])[0]) == null ? void 0 : N[0];
      if (!Zt) {
        const Gt = new Date(Ct).toDateString();
        Zt = ((Y = T.find((Nt) => new Date(Nt.datetime).toDateString() === Gt)) == null ? void 0 : Y.condition) ?? "cloudy";
      }
      H.push({ cond: K && Zt === "sunny" ? "clear-night" : Zt, night: K });
    }
    return H;
  }
  function lr(p, m, x) {
    const T = _(p, "hourly"), H = m.precipitation_probability != null ? Le(m.precipitation_probability, p.locale) + "%" : "", N = m.precipitation ? Le(m.precipitation, p.locale) + " " + nr(p, T, "precipitation") : "";
    switch (x) {
      case "precipitation":
        return H ? [H, N] : [N || "–", ""];
      case "wind":
        return m.wind_speed != null ? [Le(Math.round(m.wind_speed), p.locale), nr(p, T, "wind_speed")] : ["–", ""];
      default:
        return [Ke(p, m.temperature), (m.precipitation_probability ?? 0) >= 20 ? H : ""];
    }
  }
  function Kt(p, m, x) {
    const [T, H] = td[E == null ? void 0 : E()] || td.day, N = [];
    for (let Y = 0; Y < 4 && N.length < 3; Y++) {
      const rt = /* @__PURE__ */ new Date();
      rt.setHours(0, 0, 0, 0), rt.setDate(rt.getDate() + Y);
      const K = new Date(rt);
      K.setHours(H, 0, 0, 0), rt.setHours(T, 0, 0, 0), !(K.getTime() <= x || !m.some((Ct) => {
        const At = new Date(Ct.datetime).getTime();
        return At >= rt.getTime() && At <= K.getTime();
      })) && N.push({ a: rt.getTime(), b: K.getTime(), label: ue(p, { datetime: rt.toISOString() }) });
    }
    return N;
  }
  function It(p, m, x, T, H, N) {
    const Y = (x.b - m.a) / Pe, rt = (_t) => ((_t - m.a) / Pe).toFixed(3), K = 80, Ct = 32, At = [];
    for (const _t = new Date(m.a - _n); _t.getTime() < x.b + _n; _t.setDate(_t.getDate() + 1)) {
      const { rise: Jt, set: $t } = fl(p, new Date(_t));
      Jt && $t && At.push({ rise: Jt.getTime(), set: $t.getTime() });
    }
    const St = (_t, Jt) => K - (K - Ct) * Math.sin(Math.PI * (Jt - _t.rise) / (_t.set - _t.rise)), Zt = (_t) => !At.some((Jt) => _t >= Jt.rise && _t <= Jt.set);
    let Gt = "", Nt = "", ee = "";
    At.forEach((_t, Jt) => {
      const $t = [];
      for (let Rt = _t.rise; Rt <= _t.set; Rt += 15 * En) $t.push(rt(Rt) + "," + St(_t, Rt).toFixed(2));
      $t.push(rt(_t.set) + "," + K), Gt += '<polyline class="wbLineArc" points="' + $t.join(" ") + '"/>';
      const Te = At[Jt + 1];
      Te && (Gt += '<rect class="wbLineNight" x="' + rt(_t.set) + '" y="0" width="' + ((Te.rise - _t.set) / Pe).toFixed(3) + '" height="100"/>'), [[_t.rise, "↑"], [_t.set, "↓"]].forEach(([Rt, He]) => {
        Rt < m.a || Rt > x.b || (Nt += '<line class="wbLineEdge" x1="' + rt(Rt) + '" x2="' + rt(Rt) + '" y1="0" y2="100"/>', ee += '<span class="wbLineTime" style="left:' + N(Rt) + '">' + He + " " + Wt(Qa(new Date(Rt), p)) + "</span>");
      });
    });
    const jt = At.find((_t) => H >= _t.rise && H <= _t.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + Y + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Gt + Nt + '<line class="wbLineHorizon" x1="0" x2="' + Y + '" y1="' + K + '" y2="' + K + '"/></svg>' + ee + (jt ? '<span class="wbLineNow" style="left:' + N(H) + ";top:" + St(jt, H) + '%">' + Nd("sunny", !1) + "</span>" : "") + T.filter((_t) => _t.entry && !_t.now).map((_t) => '<span class="wbLineGlyph' + _t.edge + '" style="left:' + N(_t.t) + '">' + Nd(_t.entry.condition ?? "cloudy", Zt(_t.t)) + "</span>").join("");
  }
  function Yt(p, m) {
    delete J.hourly;
    const x = G.hourlyView === "bars" ? "bars" : "strip", T = '<div class="wbHeader"><h2 class="wbTitle">' + Wt(x === "bars" ? Dt.nextDays : Dt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Wt(Dt.showAs) + '">' + ["strip", "bars"].map((Rt) => '<button aria-pressed="' + (Rt === x) + '" data-wb="hourly-view" data-view="' + Rt + '" data-wb-focus="hourly-view-' + Rt + '">' + Wt(Dt.views[Rt]) + "</button>").join("") + "</div></div>";
    if (x === "bars") return Ra(p, m, T);
    const H = D("hourly"), N = Math.floor(Date.now() / En) * En, Y = H.filter((Rt) => new Date(Rt.datetime).getTime() > N - Pe);
    if (!Y.length) return "";
    const rt = va(Y), K = rt.includes(G.hourlyMode) ? G.hourlyMode : "temperature", Ct = Kt(p, H, N);
    if (!Ct.length) return "";
    const At = Ct[0], St = Ct[Ct.length - 1], Zt = (At.b - At.a) / Pe, Gt = (Rt) => "calc(var(--wb-u) * " + ((Rt - At.a) / Pe).toFixed(3) + ")", Nt = new Date(At.a);
    Nt.setHours(6, 0, 0, 0), Nt.getTime() > At.a && Nt.setDate(Nt.getDate() - 1);
    const ee = Math.ceil((St.b - Nt.getTime()) / _n);
    u !== "line" && (J.hourly = { segs: yi(Nt, H, ee), seed: Nt.getDate(), columns: ee });
    const jt = (Rt) => Rt === At.a ? " wbFirst" : Rt === St.b ? " wbLast" : "", _t = [];
    for (let Rt = At.a; Rt < St.b; ) {
      const He = new Date(Rt);
      He.setHours(24, 0, 0, 0);
      const De = Math.min(He.getTime(), St.b);
      _t.push({ a: Rt, b: De, label: ue(p, { datetime: new Date(Rt).toISOString() }), page: Ct.find((rn) => rn.a >= Rt && rn.a < De) || Ct.find((rn) => rn.a < De && rn.b > Rt) }), Rt = De;
    }
    const Jt = N > At.a && N < St.b ? Math.floor((N - At.a) / (2 * Pe)) * 2 : 0, $t = [];
    for (let Rt = At.a; Rt <= St.b; Rt += Pe) {
      const He = new Date(Rt), De = jt(Rt);
      !De && He.getHours() % of || !De && (Math.abs(At.a - Rt) < 2 * Pe || Math.abs(St.b - Rt) < 2 * Pe) || N >= At.a && Math.abs(Rt - N) < 1.5 * Pe && !De || $t.push({ t: Rt, edge: De, label: Qa(He, p), entry: Rt >= N - Pe ? H.find((rn) => new Date(rn.datetime).getTime() === Rt) : void 0 });
    }
    N > At.a && N < At.b && $t.push({ t: N, edge: N - At.a < Pe ? " wbFirst" : At.b - N < Pe ? " wbLast" : "", label: Dt.now, entry: Y[0], now: !0 });
    const Te = (Rt, He) => '<span class="wbMark' + Rt.edge + (Rt.now ? " wbNowMark" : "") + '" style="left:' + Gt(Rt.t) + '">' + He + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + T + (rt.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + rt.map((Rt) => '<button aria-pressed="' + (Rt === K) + '" data-wb="hourly-mode" data-mode="' + Rt + '" data-wb-focus="hourly-mode-' + Rt + '">' + Wt(Dt.modes[Rt]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Wt(Dt.nextHours) + '" data-span="' + Zt + '" data-start="' + Jt + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Zt + ");width:calc(var(--wb-u) * " + (St.b - At.a) / Pe + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((St.b - At.a) / (2 * Pe)) + 1)].map((Rt, He) => '<i class="wbSnap" style="left:' + Gt(At.a + He * 2 * Pe) + '"></i>').join("") + '<div class="wbDays">' + _t.map((Rt, He) => {
      var De;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Rt.b - Rt.a) / Pe).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (He === 0 ? Jt : ((((De = Rt.page) == null ? void 0 : De.a) ?? Rt.a) - At.a) / Pe) + '" data-wb-focus="hours-day-' + He + '">' + Wt(Rt.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + $t.map((Rt) => Te(Rt, Wt(Rt.label))).join("") + "</div>" + (u === "line" ? '<div class="wbSky wbLineSky">' + It(p, At, St, $t, N, Gt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Gt(Nt.getTime()) + ";width:calc(var(--wb-u) * " + ee * 24 + ')"><canvas data-wb-strip="hourly"' + (u === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (N > At.a ? '<i class="wbPast" style="width:' + Gt(Math.min(N, St.b)) + '"></i><i class="wbNowLine" style="left:' + Gt(N) + '"></i>' : "") + _t.slice(1).map((Rt) => '<i class="wbMidnight" style="left:' + Gt(Rt.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + $t.map((Rt) => {
      if (!Rt.entry) return "";
      const [He, De] = lr(p, Rt.entry, K);
      return Te(Rt, '<span class="wbPrimaryV">' + Wt(He) + '</span><span class="wbSecondary">' + Wt(De) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Ie(p) {
    const m = rf, x = m.findIndex(([K]) => K >= p);
    if (x <= 0) return "rgb(" + m[x < 0 ? m.length - 1 : 0][1].join(",") + ")";
    const [T, H] = m[x - 1], [N, Y] = m[x], rt = (p - T) / (N - T);
    return "rgb(" + H.map((K, Ct) => Math.round(K + (Y[Ct] - K) * rt)).join(",") + ")";
  }
  function Ra(p, m, x) {
    var Gt;
    const T = D("daily").filter((Nt) => je(Nt.templow) && je(Nt.temperature)).slice(0, 7);
    if (!T.length) return "";
    const H = Math.min(...T.map((Nt) => Number(Nt.templow))), N = Math.max(...T.map((Nt) => Number(Nt.temperature))), Y = Math.max(1, N - H), rt = (Nt) => Math.max(0, Math.min(100, (Nt - H) / Y * 100)).toFixed(2), K = /F/.test(nr(p, _(p, "daily"), "temperature")), Ct = (Nt) => K ? (Nt - 32) / 1.8 : Nt, At = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Nt) => Ie(Ct(H + Nt * Y)) + " " + Nt * 100 + "%").join(",") + ")", St = (Gt = la(p, m, "temperature")) == null ? void 0 : Gt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (va(D("hourly").filter((Nt) => new Date(Nt.datetime).getTime() > Date.now() - Pe)).length > 1 ? " wbTabbed" : "") + '">' + x + '<div class="wbDayBars" role="list">' + T.map((Nt, ee) => {
      const jt = ue(p, Nt), _t = Es(new Date(Nt.datetime), /* @__PURE__ */ new Date()), Jt = Number(Nt.templow), $t = Number(Nt.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Wt(Ja(Dt.rangeRow, { day: jt, low: Ke(p, Jt), high: Ke(p, $t) })) + '"><span class="wbRangeDay">' + Wt(jt) + "</span>" + me(Nt.condition, 40, !1, "r" + ee) + '<span class="wbRangeLo">' + Wt(Ke(p, Jt)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + At + ";clip-path:inset(0 " + (100 - rt($t)) + "% 0 " + rt(Jt) + '% round 4px)"></i>' + (_t && je(St) ? '<i class="wbRangeNow" style="left:' + rt(Number(St)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Wt(Ke(p, $t)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  function wo(p) {
    const m = X, { rise: x, set: T } = fl(p, m), H = x && T ? Math.round((T.getTime() - x.getTime()) / En) : 0, N = Math.floor(H / 60), Y = H % 60, rt = x && T ? (m.getTime() - x.getTime()) / (T.getTime() - x.getTime()) : -1, K = rt >= 0 && rt <= 1, Ct = Math.PI * (1 - Math.min(1, Math.max(0, rt))), At = 100 + 74 * Math.cos(Ct), St = 100 - 74 * Math.sin(Ct), Zt = K ? Math.sin(Math.PI * rt) : 0, Gt = K ? hl("#2e0a0d", "#43180a", Zt) : "#0e0507", Nt = K ? hl("#7a1d12", "#8f400f", Zt) : "#1c0709", ee = hl("#f60c08", "#ff8f00", Zt), jt = hl("#fd9b07", "#ffd84a", Zt), _t = K ? hl("#fd9b07", "#ffd84a", Zt) : "#6b3a2a", Jt = (De) => De ? Qa(De, p) : "–", $t = x && T ? new Date((x.getTime() + T.getTime()) / 2) : null, Te = new Date(m);
    Te.setDate(Te.getDate() + 1);
    const Rt = fl(p, Te), He = Rt.rise && Rt.set ? Math.round((Rt.set.getTime() - Rt.rise.getTime()) / En) : 0;
    return An({
      icon: We.sunny,
      name: Dt.sun,
      sub: H ? Ja(Dt.daylightShort, { hours: N, minutes: Y }) : void 0,
      callouts: [[Dt.callout.riseTomorrow, Jt(Rt.rise)], [Dt.callout.setTomorrow, Jt(Rt.set)], ...He ? [[Dt.callout.dayTomorrow, Math.floor(He / 60) + "h " + He % 60 + "m"]] : []],
      zone: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Gt + ", " + Nt + ");--wb-sun-line:" + _t + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + S + 'sun-glow"><stop offset="0" stop-color="' + ee + '"></stop><stop offset="0.45" stop-color="' + ee + '"></stop><stop offset="1" stop-color="' + jt + '"></stop></radialGradient><clipPath id="' + S + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (K ? '<circle cx="' + At + '" cy="' + St + '" r="14" fill="url(#' + S + 'sun-glow)" clip-path="url(#' + S + 'above-horizon)"></circle>' : "") + ($t ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Wt(Jt($t)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Wt(Jt(x)) + '</text><text class="wbSunTime" x="174" y="117">' + Wt(Jt(T)) + "</text></svg></div>"
    });
  }
  function Ut(p, m, x) {
    const T = (Y) => S + "moon-" + Y, H = p > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + T("terminator") + ')" d="' + Zf(61, 61, 57.9, p) + '"' + (m ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", N = (Y, rt, K, Ct, At, St) => '<filter id="' + T(Y) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + rt + '" numOctaves="' + K + '" seed="' + Ct + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Zt) => "<feFunc" + Zt + ' type="linear" slope="' + At + '" intercept="' + St + '"></feFunc' + Zt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + T("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + T("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + T("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + T("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + T("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + N("mottle", "0.045", 4, 3, 1.8, -0.4) + N("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + T("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + T("fill") + ')"></circle><g' + (x ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + T("soften") + ')">' + Xf.map(([Y, rt, K, Ct, At, St]) => '<ellipse cx="' + Y + '" cy="' + rt + '" rx="' + K + '" ry="' + Ct + '" fill-opacity="' + St + '" transform="rotate(' + At + " " + Y + " " + rt + ')"></ellipse>').join("") + "</g>" + Jf.map(([Y, rt, K]) => '<circle class="wbCrater" cx="' + Y + '" cy="' + rt + '" r="' + K + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + T("glow") + ')">' + Qf.map(([Y, rt]) => '<line x1="54.4" y1="95" x2="' + Y + '" y2="' + rt + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + T("glow") + ')">' + jc.map(([Y, rt, K]) => '<circle cx="' + Y + '" cy="' + rt + '" r="' + K * 2 + '"></circle>').join("") + "</g>" + jc.map(([Y, rt, K]) => '<circle class="wbBrightCenter" cx="' + Y + '" cy="' + rt + '" r="' + K + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + T("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + T("grain") + ')"></rect>' + H + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function ie(p) {
    const m = kt, x = gl(p), T = (x == null ? void 0 : x.lat) ?? 0, H = Id(m), N = Oc(p), Y = N ? p.states[N] : void 0, rt = Ur(Y) && bf.includes(Y.state) ? Y.state : Wf(H.phase), { rise: K, set: Ct } = x ? Of(m, x.lat, x.lon) : {}, At = H.phase > 0.5 != T < 0, St = Le(Math.round(H.fraction * 100), p.locale) + "%", Zt = K ?? Ct;
    return Zt && Qa(Zt, p), An({
      icon: We.night,
      name: Dt.moon,
      sub: Dt.phases[rt],
      callouts: [...K ? [[Dt.callout.moonrise, Qa(K, p)]] : [], ...Ct ? [[Dt.callout.moonset, Qa(Ct, p)]] : [], [Dt.callout.lit, St]],
      zone: '<div class="wbMoonBox">' + Ut(H.fraction, At, T < 0) + "</div>"
    });
  }
  function aa(p, m) {
    var Nt;
    const x = la(p, m, "wind_speed");
    if (!x || !je(x.value)) return "";
    const T = la(p, m, "wind_gust_speed"), H = la(p, m, "wind_bearing"), N = H && je(H.value) ? Number(H.value) : void 0, Y = Vf(Number(x.value), (Nt = x.stateObj.attributes) == null ? void 0 : Nt.wind_speed_unit), rt = sd(p, x.stateObj, "wind_speed", x.value), K = N !== void 0 ? Dt.cardinal[vf[((N + 11.25) / 22.5 | 0) % 16]] : void 0, Ct = T ? Ic(p, T.stateObj, "wind_gust_speed", T.value) : void 0, At = [K ? Ja(Dt.windFrom, { direction: K }) : void 0, Y !== void 0 ? Y + " " + Dt.beaufort : void 0].filter(Boolean).join(" · ") || Ct, St = (ee, jt) => {
      const _t = (ee - 90) * Math.PI / 180;
      return [100 + jt * Math.cos(_t), 100 + jt * Math.sin(_t)];
    }, Zt = Array.from({ length: 36 }, (ee, jt) => jt * 10).map((ee) => {
      const jt = ee % 90 === 0, [_t, Jt] = St(ee, 97), [$t, Te] = St(ee, jt ? 83 : 89);
      return '<line class="wbTick' + (jt ? " wbMajor" : "") + '" x1="' + _t + '" y1="' + Jt + '" x2="' + $t + '" y2="' + Te + '"></line>';
    }).join(""), Gt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([ee, jt]) => {
      const [_t, Jt] = St(jt, 64);
      return '<text class="wbLetter' + (ee === "n" ? " wbNorth" : "") + '" x="' + _t + '" y="' + Jt + '">' + Wt(Dt.cardinal[ee]) + "</text>";
    }).join("");
    return An({ icon: We.windy, name: Dt.wind, sub: At, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Zt + Gt + (N !== void 0 ? '<path class="wbMarker" transform="rotate(' + N + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Wt(rt.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Wt(rt.unit) + "</text></svg>" });
  }
  const Jn = (p, m) => {
    if (p < 3) return Dt.advice.fine;
    if (p < 8) return Dt.advice.sunblock;
    const x = Date.now(), T = D("hourly").find((H) => H.uv_index != null && new Date(H.datetime).getTime() > x && H.uv_index < 6);
    return T && new Date(T.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Ja(Dt.advice.avoidUntil, { time: Qa(new Date(T.datetime), m) }) : Dt.advice.avoidToday;
  };
  function Ga(p, m) {
    const x = la(p, m, "uv_index");
    if (!x || !je(x.value)) return "";
    const T = Number(x.value), H = Dt.uvLevel[Hc(T)], N = /* @__PURE__ */ new Date();
    N.setHours(23, 59, 59, 999);
    const Y = D("hourly").filter((At) => At.uv_index != null && new Date(At.datetime) > /* @__PURE__ */ new Date() && new Date(At.datetime) <= N).reduce((At, St) => !At || St.uv_index > At.uv ? { uv: St.uv_index, time: new Date(St.datetime) } : At, void 0), rt = wf[Hc(T)], K = 216 * Math.min(1, Math.max(0.08, 0.4 + (T - 4.5) * (0.5 / 5.5))), Ct = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + S + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + K.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + rt + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + rt + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + rt + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + K.toFixed(1) + '" fill="url(#' + S + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + Wt(Le(Math.round(T), p.locale)) + '</span><span class="wbUvWord">' + Wt(H) + "</span></div>";
    return An({
      icon: We.sunnyAlert,
      name: Dt.metrics.uv_index,
      sub: Y && Y.uv > T ? Ja(Dt.uvPeak, { level: H, uv_index: Le(Math.round(Y.uv), p.locale), time: Qa(Y.time, p) }) : H,
      zone: Ct,
      cls: "wbUv",
      callouts: [Jn(T, p), [Dt.callout.now, Le(Math.round(T), p.locale) + " · " + H], [Dt.callout.peak, Y && Y.uv > T ? Le(Math.round(Y.uv), p.locale) + " at " + Qa(Y.time, p) : Dt.callout.now]]
    });
  }
  function Qe(p) {
    const m = D("daily")[0], x = Lt.temperatureHistory;
    if (!m || new Date(m.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !je(m.temperature) || !x || x.dailyHighs.length < uf) return "";
    const T = Number(m.temperature), H = x.dailyHighs.reduce((jt, _t) => jt + _t, 0) / x.dailyHighs.length, N = Math.round(T - H) || 0, Y = N > 0 ? "above" : N < 0 ? "below" : "same", rt = [...x.days, { date: /* @__PURE__ */ new Date(), high: T, today: !0 }], K = rt.map((jt) => jt.high).concat(H), Ct = Math.min(...K) - 1, At = Math.max(...K) + 1, St = (jt) => (1 - (jt - Ct) / (At - Ct)) * 100, Zt = (jt) => (jt + 0.5) / rt.length * 100, Gt = rt.map((jt, _t) => [Zt(_t), St(jt.high)]), Nt = Gt.map(([jt, _t], Jt) => (Jt ? "L" : "M") + jt.toFixed(2) + " " + _t.toFixed(2)).join(""), ee = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + S + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + Nt + "L" + Gt[Gt.length - 1][0].toFixed(2) + " 100L" + Gt[0][0].toFixed(2) + ' 100Z" fill="url(#' + S + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + St(H).toFixed(2) + '" y2="' + St(H).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + Nt + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + St(H).toFixed(2) + '%">' + Wt(Ke(p, H)) + "</span>" + rt.map((jt, _t) => {
      const Jt = jt.today ? " wbToday" : "", $t = "left:" + Zt(_t).toFixed(2) + "%;top:" + St(jt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Jt + '" style="' + $t + '"></i><span class="wbAvgValue' + Jt + '" style="' + $t + '">' + Wt(Ke(p, jt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + rt.map((jt, _t) => '<span class="wbAvgDay' + (jt.today ? " wbToday" : "") + '" style="left:' + Zt(_t).toFixed(2) + '%">' + Wt(_f(jt.date, p)) + "</span>").join("") + "</div></div>";
    return An({
      icon: We.chartLine,
      name: Dt.metrics.compared_to_average,
      double: !0,
      sub: Ja(Dt.highsLastDays, { days: x.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (N > 0 ? "+" : "") + Wt(Ke(p, N)) + '</div><div class="wbCompareWords">' + Wt(Dt.average[Y]) + '</div><div class="wbCompareTemps">' + Wt(Ja(Dt.todayVsAverage, { today: Ke(p, T), average: Ke(p, H) })) + "</div></div>" + ee + "</div>"
    });
  }
  function ki(p, m) {
    const x = la(p, m, "humidity");
    if (!x || !je(x.value)) return "";
    const T = la(p, m, "dew_point"), H = Math.max(0, Math.min(100, Number(x.value)));
    return An({
      icon: We.waterPercent,
      name: Dt.metrics.humidity,
      sub: T && je(T.value) ? Ja(Dt.dewPoint, { dew_point: Ke(p, T.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + H + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + er(Le(Math.round(Number(x.value)), p.locale), "%") + "</div>"
    });
  }
  function pa(p, m) {
    var jt, _t, Jt;
    const x = la(p, m, "pressure");
    if (!x || !je(x.value)) return "";
    const T = Number(x.value), H = (jt = x.stateObj.attributes) == null ? void 0 : jt.pressure_unit, N = Fc(T, H), Y = ((_t = Lt.pressureHistory) == null ? void 0 : _t.entityId) === x.stateObj.entity_id ? Fc(Lt.pressureHistory.value, H) : void 0;
    let rt;
    if (N !== void 0 && Y !== void 0) {
      const $t = N - Y;
      rt = $t >= _c ? "rising" : $t <= -_c ? "falling" : "steady";
    }
    const K = sd(p, x.stateObj, "pressure", Math.round(T)), Ct = x.stateObj, At = ($t) => H === "inHg" ? Math.round($t * 100) / 100 : Math.round($t), St = ($t) => Ic(p, Ct, "pressure", At($t)), Zt = Y !== void 0 ? Lt.pressureHistory.value : void 0, Gt = Zt !== void 0 ? At(T - Zt) : void 0, Nt = (Jt = Ct.entity_id) != null && Jt.startsWith("weather.") ? D("hourly").find(($t) => je($t.pressure) && new Date($t.datetime).getTime() >= Date.now() + 3 * Pe - 30 * En) : void 0, ee = [
      ...rt ? [Dt.advice[rt]] : [],
      ...Zt !== void 0 ? [[Dt.callout.hoursAgo, St(Zt)], [Dt.callout.change, (Gt > 0 ? "+" : Gt < 0 ? "−" : "") + St(Math.abs(Gt))]] : [],
      ...Nt ? [[Dt.callout.inHours, St(Number(Nt.pressure))]] : []
    ];
    return An({
      icon: We.gauge,
      name: Dt.metrics.pressure,
      sub: rt ? Dt.pressure[rt] : void 0,
      cls: "wbPressure",
      callouts: ee,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + er(K.number) + '<span class="wbTapeUnit">' + Wt(K.unit) + "</span></div>" + (N !== void 0 ? xo(p, N) : "") + "</div>"
    });
  }
  function xo(p, m) {
    const H = Math.floor(m) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (N, Y) => H + Y).map((N) => {
      const Y = 100 - (N - m) * 9;
      if (Y < 22 || Y > 178) return "";
      const rt = N % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(Y - 100) / 100) + '"><line class="wbTapeTick" x1="' + (rt ? 2 : 8) + '" x2="26" y1="' + Y + '" y2="' + Y + '"></line>' + (rt ? '<text class="wbTapeLabel" x="33" y="' + Y + '">' + Wt(Le(N, p.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Wt(Dt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Wt(Dt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function yo(p) {
    var K, Ct;
    const m = Fd(p), x = m ? p.states[m] : void 0;
    if (!x || ((K = Lt.rain) == null ? void 0 : K.entityId) !== m || !je(Lt.rain.change)) return "";
    const T = ((Ct = x.attributes) == null ? void 0 : Ct.unit_of_measurement) ?? "", H = _(p, "hourly"), N = Date.now() + _n, Y = D("hourly").filter((At) => At.precipitation != null && new Date(At.datetime).getTime() <= N), rt = Y.reduce((At, St) => At + Number(St.precipitation), 0);
    return An({
      icon: We.rainy,
      name: Dt.metrics.precipitation,
      sub: H && Y.length ? Ja(Dt.rainExpected, { amount: Le(rt, p.locale, { maximumFractionDigits: 1 }) + " " + nr(p, H, "precipitation") }) : Dt.rainLast24h,
      visual: er(Le(Lt.rain.change, p.locale, { maximumFractionDigits: 1 }), T) + (Y.length > 1 ? $f(Y.map((At) => ({ label: "", value: Number(At.precipitation) }))) : "")
    });
  }
  function ko(p, m) {
    const x = la(p, m, "visibility");
    if (!x || !je(x.value)) return "";
    const T = sd(p, x.stateObj, "visibility", x.value), H = tf(Number(x.value), nr(p, x.stateObj, "visibility"));
    return An({
      icon: We.eyeOutline,
      name: Dt.metrics.visibility,
      sub: Dt.visibilityLevel[ef(H)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + H + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Wt(ua(p, H)) + '</div><div class="wbSeaValue">' + er(T.number, T.unit) + "</div></div>"
    });
  }
  function ua(p, m) {
    var N;
    const x = Qu((N = p.config) == null ? void 0 : N.country, m);
    if (x) return Ja(Dt.visibilityLandmarks, { from: x.from, to: x.to });
    const T = m / mf * 60;
    if (T < 60) {
      const Y = T < 5 ? Math.max(1, Math.round(T)) : 5 * Math.round(T / 5);
      if (Y < 60) return Ja(Dt.walkMinutes, { minutes: Le(Y, p.locale) });
    }
    const H = Math.max(1, Math.round(T / 30) / 2);
    return H < 8 ? Ja(Dt.walkHours, { hours: Le(H, p.locale) }) : Dt.walkDay;
  }
  function In(p) {
    Lt.categories === void 0 && wi(p);
    const m = Ht(p), x = (K) => K.map((Ct) => p.states[Ct]).filter(Ur), T = x(m.air), H = x(m.pollen);
    if (!T.length && !H.length) return "";
    const N = [...T, ...H], Y = (K) => H.includes(K) ? We.flower : We.airFilter, rt = N.find((K) => K.entity_id === G.aq);
    return rt ? Mi(p, rt, Y(rt)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Wt(Dt.airQuality) + '</h2></div><div class="wbAqTiles">' + N.map((K) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Wt(K.entity_id) + '"><span class="wbChip">' + mi(Y(K)) + '</span><span class="wbText"><span class="wbName">' + Wt(Vr(p, K)) + '</span><span class="wbSub">' + Wt(tr(p, K)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Mi(p, m, x) {
    var At, St, Zt;
    const T = ((At = m.attributes) == null ? void 0 : At.unit_of_measurement) ?? "", H = ((St = m.attributes) == null ? void 0 : St.device_class) === "pm25" && T === Ec && je(m.state), N = Number(m.state), Y = H ? Hd(N) : void 0, rt = ((Zt = Lt.aqHistory) == null ? void 0 : Zt.entityId) === m.entity_id ? Lt.aqHistory.points : void 0, K = (Gt) => Math.min(100, Math.max(0, Gt / ed * 100));
    let Ct;
    if (rt && rt.length > 1) Ct = qc(rt, (Gt) => (Le(Gt, p.locale, { maximumFractionDigits: 1 }) + " " + T).trim());
    else if (Y) {
      let Gt = 0;
      const Nt = Tp.map(([ee, jt]) => {
        const _t = K(Math.min(jt, ed)), Jt = xf[ee] + " " + Gt + "% " + _t + "%";
        return Gt = _t, Jt;
      });
      Ct = '<div class="wbScale" role="meter" aria-label="' + Wt(Dt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + ed + '" aria-valuenow="' + N + '" style="background:linear-gradient(to right, ' + Nt.join(", ") + ')"><i style="left:' + K(N) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + ed + " " + Ec + "</span></div>";
    } else Ct = '<span class="wbGraphNote"><span>' + Wt(tr(p, m)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + mi(x) + '</span><span class="wbText"><span class="wbName">' + Wt(Vr(p, m)) + '</span><span class="wbSub">' + Wt(tr(p, m)) + (Y ? " · " + Wt(Dt.aqLevel[Y]) : "") + '</span></span><button class="wbBack" title="' + Wt(Dt.back) + '" data-wb="aq-close">' + mi(We.back) + '</button></div><div class="wbGraph">' + Ct + "</div></div></div>";
  }
  const dr = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, an = (p) => p <= 50 ? "Good" : p <= 100 ? "Moderate" : p <= 150 ? "Unhealthy for some" : p <= 200 ? "Unhealthy" : p <= 300 ? "Very unhealthy" : "Hazardous";
  function Qn(p) {
    const m = /* @__PURE__ */ new Map();
    return Object.values(p.states || {}).filter((x) => {
      var T;
      return x.entity_id.startsWith("sensor.") && cd.includes(((T = x.attributes) == null ? void 0 : T.device_class) ?? "") && Ur(x) && Bs(p, x.entity_id);
    }).sort((x, T) => x.entity_id.localeCompare(T.entity_id)).forEach((x) => {
      m.has(x.attributes.device_class) || m.set(x.attributes.device_class, x);
    }), cd.map((x) => m.get(x)).filter(Boolean);
  }
  const Hn = (p) => Object.values(p.states || {}).filter((m) => {
    var x, T;
    return m.entity_id.startsWith("sensor.") && Ur(m) && Bs(p, m.entity_id) && (((T = (x = p.entities) == null ? void 0 : x[m.entity_id]) == null ? void 0 : T.translation_key) ?? m.entity_id).toLowerCase().includes("pollen");
  }), yn = ["none", "very_low", "low", "moderate", "high", "very_high"], Dn = (p) => je(p.state) ? Number(p.state) : yn.indexOf(String(p.state).toLowerCase().replace(/ /g, "_")), nn = (p) => {
    const m = String(p).replace(/_/g, " ");
    return m[0].toUpperCase() + m.slice(1);
  }, cr = (p, m, x) => {
    const T = x ? p === "aqi" ? m <= 50 ? "good" : m <= 100 ? "moderate" : "poor" : p === "pm25" ? Hd(m) : null : null;
    return T === "good" || T === "fair" ? Dt.advice.window : T === "moderate" || T === null ? Dt.advice.fine : Dt.advice.closed;
  };
  function Fn(p) {
    const m = Qn(p), x = m[0];
    if (!x) return An({ icon: We.airFilter, name: Dt.airQuality, sub: Dt.noAir, visual: er("–", ""), cls: "wbBase" });
    const T = x.attributes.device_class, H = Number(x.state), N = je(x.state), Y = T === "aqi" && N ? an(H) : T === "pm25" && N ? dr[Hd(H)] : tr(p, x);
    return An({
      icon: We.airFilter,
      name: Dt.airQuality,
      sub: Y,
      cls: "wbBase",
      zone: er(N ? Le(Math.round(H), p.locale) : String(x.state), T === "aqi" ? "AQI" : x.attributes.unit_of_measurement || ""),
      callouts: [cr(T, H, N), ...m.slice(1, 3).map((rt) => [Vr(p, rt), tr(p, rt)])]
    });
  }
  const _e = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Mo = (p) => {
    const m = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(p) ? Math.round(p) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: m }, (x, T) => {
      const [H, N] = _e[T % 3], Y = 10 + T * 7 % 9, rt = 2.6 + T * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + H + '" style="top:' + (4 + T * 37 % 52) + "%;--x:" + (T * 29 % 90 + 4) + "%;--s:" + (0.8 + T * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + Y + "s;animation-delay:-" + (T * 2.3 % Y).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + rt.toFixed(1) + "s;animation-delay:-" + (T * 0.7 % rt).toFixed(1) + 's">' + N + "</span></span></span>";
    }).join("") + "</div>";
  };
  function ia(p) {
    const m = Hn(p).sort((H, N) => Dn(N) - Dn(H));
    if (!m.length) return An({ icon: We.flower, name: Dt.pollen, sub: Dt.noPollen, visual: er("–", ""), cls: "wbBase" });
    const x = m[0], T = (H) => je(H.state) ? tr(p, H) : nn(H.state);
    return An({
      icon: We.flower,
      name: Dt.pollen,
      sub: Vr(p, x) + " · " + T(x),
      cls: "wbBase wbPollen",
      zone: Mo(Dn(x)) + er(T(x), ""),
      callouts: m.slice(0, 3).map((H) => [Vr(p, H), T(H)])
    });
  }
  function pr(p) {
    const m = Date.now(), x = D("hourly").filter((N) => {
      const Y = new Date(N.datetime).getTime();
      return Y > m - Pe && Y < m + 12 * Pe;
    }), T = x.find((N) => (N.precipitation_probability ?? 0) >= 50 || (N.precipitation ?? 0) >= 0.2), H = T ? Ja(Dt.rainFrom, { time: Qa(new Date(Math.max(m, new Date(T.datetime).getTime())), p) }) : x.length ? Dt.noRain12 : void 0;
    return An({ icon: We.radar, name: Dt.rainRadar, sub: H, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const Na = {
    current: Yr,
    hourly: Yt,
    sun: wo,
    moon: ie,
    wind: aa,
    uv_index: Ga,
    compared_to_average: Qe,
    humidity: ki,
    pressure: pa,
    precipitation: yo,
    visibility: ko,
    air_quality: In,
    aq_tile: Fn,
    pollen_tile: ia,
    radar_tile: pr
  }, fa = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], ha = (p, m) => {
    var x;
    return m.toLocaleDateString((x = p.locale) == null ? void 0 : x.language, { day: "numeric", month: "short" });
  }, ur = (p) => {
    const m = new Date(p);
    return m.setMinutes(m.getMinutes() - m.getTimezoneOffset()), m.toISOString().slice(0, 10);
  }, qo = () => {
    const p = G.range, m = Date.now();
    if (p.preset !== "custom") {
      const H = fa.find(([N]) => N === p.preset)[2];
      return [m - H * _n, m];
    }
    const x = ir(/* @__PURE__ */ new Date(p.from + "T00:00")).getTime(), T = Math.min(m, ir(/* @__PURE__ */ new Date(p.to + "T00:00")).getTime() + _n);
    return [Math.min(x, T - Pe), T];
  }, fr = (p) => {
    const m = G.range;
    if (m.preset !== "custom") return fa.find(([H]) => H === m.preset)[1];
    const [x, T] = qo();
    return m.from === m.to ? ha(p, new Date(x)) : ha(p, new Date(x)) + " – " + ha(p, new Date(T - 1));
  }, to = () => G.range.preset === "custom" ? G.range.from + "_" + G.range.to : G.range.preset, Aa = (p, m) => m - p <= 2 * _n, jo = (p, m, x, T) => Aa(x, T) ? Qa(m, p) : ha(p, m), Si = (p, m = 60) => {
    const x = Math.max(1, Math.ceil(p.length / m));
    return p.filter((T, H) => H % x === 0 || H === p.length - 1);
  }, $e = (p, m, x, T, H = !1) => p.callWS({
    type: "history/history_during_period",
    start_time: new Date(x).toISOString(),
    end_time: new Date(T).toISOString(),
    entity_ids: [m],
    minimal_response: H,
    no_attributes: H,
    significant_changes_only: !1
  }), _a = (p) => async (m, x, T, H) => {
    const N = la(m, x, p);
    if (!N) return [];
    const Y = N.stateObj.entity_id, rt = await $e(m, Y, T, H);
    return Si(((rt == null ? void 0 : rt[Y]) ?? []).map((K) => {
      var St;
      const Ct = ((St = K.a) == null ? void 0 : St[p]) ?? (je(K.s) ? Number(K.s) : void 0), At = (K.lu ?? K.lc) * 1e3;
      return typeof Ct == "number" && At >= T && At <= H ? { t: new Date(At), value: Ct } : null;
    }).filter(Boolean)).map((K) => ({ label: jo(m, K.t, T, H), value: K.value }));
  }, xe = (p, m) => async (x, T, H, N) => {
    const Y = p(x);
    if (!Y) return [];
    const rt = Y.entity_id, K = await $e(x, rt, H, N, !0);
    return Si(((K == null ? void 0 : K[rt]) ?? []).map((Ct) => {
      const At = m(Ct.s), St = Ct.lu * 1e3;
      return At == null || !Number.isFinite(At) || St < H || St > N ? null : { t: new Date(St), value: At };
    }).filter(Boolean)).map((Ct) => ({ label: jo(x, Ct.t, H, N), value: Ct.value }));
  }, So = (p, m) => async (x, T, H, N) => {
    const Y = gl(x);
    if (!Y) return [];
    const rt = [];
    if (Aa(H, N)) for (let K = H; K <= N; K += Pe / 2) rt.push({ label: Qa(new Date(K), x), value: p(new Date(K), Y) });
    else for (let K = N; K >= H; K -= _n) {
      const Ct = new Date(K), At = m(Ct, Y, x);
      At != null && rt.unshift({ label: ha(x, Ct), value: At });
    }
    return Si(rt);
  }, On = (p) => Hn(p).sort((m, x) => Dn(x) - Dn(m))[0], Wn = (p, m, x) => {
    const T = la(p, m, x);
    return T ? nr(p, T.stateObj, x) : "";
  }, zo = {
    current: { name: () => Dt.modes.temperature, icon: () => We.sunny, load: _a("temperature"), fmt: (p, m, x) => Ke(p, x), now: (p, m) => {
      var x;
      return Ke(p, (x = la(p, m, "temperature")) == null ? void 0 : x.value);
    } },
    sun: {
      name: () => Dt.sun,
      icon: () => We.sunny,
      load: So((p, m) => Math.round(ud(p, m.lat, m.lon) / wn), (p, m, x) => {
        const T = fl(x, p);
        return T.rise && T.set ? Math.round((T.set - T.rise) / Pe * 10) / 10 : null;
      }),
      fmt: (p, m, x, T) => T ? Le(x, p.locale) + "°" : Le(x, p.locale) + " h",
      sub: (p) => p ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => Dt.moon,
      icon: () => We.night,
      load: So((p) => Math.round(Id(p).fraction * 100), (p) => Math.round(Id(p).fraction * 100)),
      fmt: (p, m, x) => Le(x, p.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => Dt.metrics.uv_index, icon: () => We.sunnyAlert, load: _a("uv_index"), fmt: (p, m, x) => Le(Math.round(x * 10) / 10, p.locale), now: (p, m) => {
      const x = la(p, m, "uv_index");
      return x ? Le(Number(x.value), p.locale) : "";
    } },
    humidity: { name: () => Dt.metrics.humidity, icon: () => We.waterPercent, load: _a("humidity"), fmt: (p, m, x) => Le(Math.round(x), p.locale) + "%", now: (p, m) => {
      const x = la(p, m, "humidity");
      return x ? Le(Math.round(Number(x.value)), p.locale) + "%" : "";
    } },
    pressure: { name: () => Dt.metrics.pressure, icon: () => We.gauge, load: _a("pressure"), fmt: (p, m, x) => Le(Math.round(x), p.locale) + " " + Wn(p, m, "pressure"), now: (p, m) => {
      const x = la(p, m, "pressure");
      return x ? Le(Math.round(Number(x.value)), p.locale) + " " + Wn(p, m, "pressure") : "";
    } },
    wind: { name: () => Dt.wind, icon: () => We.windy, load: _a("wind_speed"), fmt: (p, m, x) => Le(Math.round(x), p.locale) + " " + Wn(p, m, "wind_speed"), now: (p, m) => {
      const x = la(p, m, "wind_speed");
      return x ? Le(Math.round(Number(x.value)), p.locale) + " " + Wn(p, m, "wind_speed") : "";
    } },
    visibility: { name: () => Dt.metrics.visibility, icon: () => We.eyeOutline, load: _a("visibility"), fmt: (p, m, x) => Le(Math.round(x * 10) / 10, p.locale) + " " + Wn(p, m, "visibility"), now: (p, m) => {
      const x = la(p, m, "visibility");
      return x ? Le(Number(x.value), p.locale) + " " + Wn(p, m, "visibility") : "";
    } },
    aq_tile: {
      name: (p) => Qn(p)[0] ? Vr(p, Qn(p)[0]) : Dt.airQuality,
      icon: () => We.airFilter,
      load: xe((p) => Qn(p)[0], (p) => je(p) ? Number(p) : null),
      fmt: (p, m, x) => {
        var N, Y;
        const T = Qn(p)[0], H = (N = T == null ? void 0 : T.attributes) == null ? void 0 : N.device_class;
        return Le(Math.round(x * 10) / 10, p.locale) + (H === "aqi" ? " AQI" : (Y = T == null ? void 0 : T.attributes) != null && Y.unit_of_measurement ? " " + T.attributes.unit_of_measurement : "");
      },
      now: (p) => {
        const m = Qn(p)[0];
        return m ? tr(p, m) : "";
      }
    },
    pollen_tile: {
      name: (p) => On(p) ? Vr(p, On(p)) : Dt.pollen,
      icon: () => We.flower,
      load: xe(On, (p) => {
        const m = Dn({ state: p });
        return m < 0 ? null : m;
      }),
      fmt: (p, m, x) => nn(yn[Math.round(x)] || ""),
      now: (p) => {
        const m = On(p);
        return m ? nn(m.state) : "";
      }
    }
  }, kn = {};
  async function Co(p) {
    const m = d == null ? void 0 : d();
    if (!m || !zo[p]) return;
    const x = p + "|" + to(), [T, H] = qo();
    if (!(kn[x] && Date.now() - kn[x].at < 5 * En)) {
      kn[x] = { at: Date.now(), points: null };
      try {
        kn[x].points = await zo[p].load(m, La(m), T, H);
      } catch {
        kn[x].points = [];
      }
      na(!0);
    }
  }
  function Zr(p, m) {
    const x = G.range, T = ur(Date.now()), [H, N] = qo(), Y = x.pickFrom || ur(H), rt = x.pickTo || ur(N - 1);
    return '<div class="wbRangePick' + (m ? " wbPickRight" : "") + '" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + fa.map(([K, Ct]) => '<button class="wbRangePreset" aria-pressed="' + (x.preset === K) + '" data-wb="graph-preset" data-range="' + K + '" data-wb-focus="graph-preset-' + K + '">' + Wt(Ct) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + Y + '" max="' + T + '"></label><label><span>To</span><input type="date" data-range-to value="' + rt + '" max="' + T + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function To(p, m, x) {
    var Zt;
    const T = zo[x], [H, N] = qo(), Y = Aa(H, N), rt = (Zt = kn[x + "|" + to()]) == null ? void 0 : Zt.points, K = et[x].el, Ct = Math.max(120, K.clientWidth - 2 * 18 - 32), At = Math.max(40, K.clientHeight - 2 * 18 - 44 - 14 - 32 - 14 - 24), St = rt ? rt.length > 1 ? qc(rt, (Gt) => T.fmt(p, m, Gt, Y), At, Ct) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbCard wbSquare wbGraphCard"><div class="wbHead"><div class="wbChip wbPlain">' + Lp(T.icon(p)) + '</div><div class="wbText"><span class="wbName">' + Wt(T.name(p)) + '</span><span class="wbSub">' + Wt(T.sub ? T.sub(Y) : T.now ? T.now(p, m) : "") + '</span></div><button class="wbBack" title="' + Wt(Dt.back) + '" data-wb="graph-close" data-wb-focus="graph-close">' + mi(We.back) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!G.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + mi(We.calendar) + "<span>" + Wt(fr(p)) + "</span>" + mi(We.chevronDown) + '</button><div class="wbGraph">' + St + "</div></div>" + (G.picking ? Zr(p, K.getBoundingClientRect().left > innerWidth / 2) : "");
  }
  function na(p) {
    var St, Zt, Gt;
    const m = d == null ? void 0 : d();
    if (!m || U) return;
    const x = La(m);
    mt(m, x), Lt.lastFetch || le();
    const T = Ht(m), H = Oc(m), N = Fd(m), Y = [
      ...x.map((Nt) => m.states[Nt]),
      m.states["sun.sun"],
      H && m.states[H],
      N && m.states[N],
      ...T.air.map((Nt) => m.states[Nt]),
      ...T.pollen.map((Nt) => m.states[Nt]),
      ...$.some((Nt) => ht.includes(Nt)) ? [...Qn(m), ...Hn(m)] : [],
      m.locale,
      m.config,
      m.entities,
      Math.floor(Date.now() / En)
    ];
    if (!p && z && Y.length === z.length && Y.every((Nt, ee) => Nt === z[ee])) return;
    z = Y;
    const rt = B.getRootNode(), K = rt.activeElement || document.activeElement;
    for (const Nt of $) {
      const ee = et[Nt];
      let jt = "";
      try {
        jt = (G.graph === Nt ? To(m, x, Nt) : Na[Nt](m, x)) || "";
      } catch {
        jt = "";
      }
      if (jt === ee.html) continue;
      const _t = K && ee.el.contains(K) ? (St = K.dataset) == null ? void 0 : St.wbFocus : void 0, Jt = ee.el.querySelector(".wbStripScroll"), $t = Jt ? Jt.scrollLeft : null;
      ee.html = jt, ee.el.hidden = !jt, ee.el.innerHTML = jt;
      const Te = ee.el.querySelector(".wbStripScroll");
      Te && $t != null ? Te.scrollTo({ left: $t }) : Te != null && Te.dataset.start && Te.scrollTo({ left: Number(Te.dataset.start) * Te.clientWidth / Number(Te.dataset.span) }), _t && !Q && ((Zt = ee.el.querySelector('[data-wb-focus="' + _t + '"]')) == null || Zt.focus());
    }
    Q && ((Gt = B.querySelector('[data-wb-focus="' + Q + '"]')) == null || Gt.focus({ preventScroll: !0 }), Q = null);
    let Ct = !1, At = !1;
    for (const Nt of $) {
      const ee = et[Nt], jt = !ee.el.hidden, _t = tt[Nt] === "wide" || st.includes(Nt), Jt = $.indexOf(Nt) >= $.indexOf("moon"), $t = jt && (Jt && _t && !Ct || !_t && !At);
      $t && _t && (Ct = !0), $t && !_t && (At = !0), ee.el.toggleAttribute("data-break", $t);
    }
    jn(performance.now());
  }
  function Vo() {
    xt || U || (xt = !0, queueMicrotask(() => {
      xt = !1, na(!0);
    }));
  }
  function hr() {
    const p = getComputedStyle(B), m = (Y) => p.getPropertyValue(Y).trim(), x = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([Y, rt]) => {
      m(rt) && (x[Y] = m(rt));
    });
    const T = m("--color-text-primary") || "#f1f1f1", H = m("--color-bg-card") || "#222222", N = !!B.closest(".light");
    return { colors: { ...xn, ...x }, ink: N ? T : H, paper: N ? H : T };
  }
  const qn = (p, m) => {
    var x;
    p.width !== m.w && (p.width = m.w), p.height !== m.h && (p.height = m.h), (x = p.getContext("2d")) == null || x.putImageData(new ImageData(m.data, m.w, m.h), 0, 0);
  }, Mn = () => v && !Tf();
  function Ua(p, m) {
    B.querySelectorAll("canvas[data-wb-strip]").forEach((x) => mr(x, J[x.dataset.wbStrip], p, m));
  }
  function mr(p, m, x, T) {
    if (!m || !p.getClientRects().length) return;
    const H = p.clientWidth, N = p.clientHeight;
    if (!H || !N) return;
    const Y = { width: H, height: N, columns: m.columns || Tc, colors: T.colors, clock: x, ambient: Mn(), seed: m.seed, soft: 1.5 };
    if (u === "smooth") {
      const rt = Math.min(2, window.devicePixelRatio || 1), K = Math.round(H * rt), Ct = Math.round(N * rt);
      p.width !== K && (p.width = K), p.height !== Ct && (p.height = Ct);
      const At = p.getContext("2d");
      if (!At) return;
      At.setTransform(rt, 0, 0, rt, 0, 0), Pu(At, m.segs, Y);
    } else qn(p, Nu(m.segs, { ...Y, px: 2, oneBit: u === "onebit", ink: T.ink, paper: T.paper }));
  }
  function jn(p) {
    if (U) return;
    const m = hr();
    if (u !== "smooth") {
      const x = Mn();
      B.querySelectorAll("canvas[data-wb-wx]").forEach((T) => {
        T.getClientRects().length && qn(T, hp(Xd(T.dataset.wbWx, m.colors), { size: Number(T.dataset.size) || 40, px: 2, oneBit: u === "onebit", colors: m.colors, ink: m.ink, paper: m.paper, clock: p, idle: x }));
      });
    }
    B.querySelectorAll("canvas[data-wb-sea]").forEach((x) => {
      const T = x.clientWidth, H = x.clientHeight, N = Number(x.dataset.wbSea), Y = T + "x" + H + ":" + N + ":" + m.colors.skyClearDay;
      !T || !H || !(N > 0) || x.dataset.painted === Y || (x.dataset.painted = Y, qn(x, $u(T, H, N, m.colors)));
    }), Ua(p, m);
  }
  function Go(p) {
    if (pt = 0, !(U || !Mn())) {
      if (!document.hidden)
        if (u === "smooth") Ua(p, hr());
        else {
          const m = Math.floor(p / 100);
          m !== ct && (ct = m, jn(p));
        }
      pt = requestAnimationFrame(Go);
    }
  }
  function Ce() {
    B.classList.toggle("wbMotion", Mn()), !pt && !U && Mn() && (pt = requestAnimationFrame(Go));
  }
  function Lo(p) {
    var x, T, H, N, Y, rt;
    const m = (T = (x = p.target).closest) == null ? void 0 : T.call(x, "[data-wb]");
    if (!m || !B.contains(m)) {
      const K = (N = (H = p.target).closest) == null ? void 0 : N.call(H, ".wbItem"), Ct = K == null ? void 0 : K.dataset.card;
      if (!K || !B.contains(K) || !zo[Ct] || G.graph === Ct || B.closest(".tfEditing") || K.offsetHeight < 200 || Ct === "current" && k) return;
      G.graph = Ct, Q = "graph-close", na(!0), Co(Ct);
      return;
    }
    switch (m.dataset.wb) {
      case "day": {
        G.openDay = Number(m.dataset.index), G.opener = m.dataset.wbFocus, Q = "back-day";
        const K = da()[G.openDay], Ct = !Lt.todayHistory || Lt.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Lt.todayHistory.fetched > nf;
        K && Es(new Date(K.datetime), /* @__PURE__ */ new Date()) && Ct && ea();
        break;
      }
      case "close-day":
        G.openDay = void 0, Q = G.opener, G.opener = void 0;
        break;
      case "open-page":
        k == null || k();
        return;
      case "day-mode":
        G.dayMode = m.dataset.mode;
        break;
      case "hourly-mode":
        G.hourlyMode = m.dataset.mode;
        break;
      case "hourly-view":
        G.hourlyView = m.dataset.view;
        try {
          localStorage.setItem(ot, G.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const K = B.querySelector(".wbStripScroll");
        K && K.scrollTo({ left: Number(m.dataset.hours) * K.clientWidth / Number(K.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        G.aq = m.dataset.entity, Se(G.aq);
        break;
      case "aq-close":
        G.aq = void 0;
        break;
      case "graph-close":
        G.graph = void 0, G.picking = !1;
        break;
      case "graph-pick":
        G.picking = !G.picking, Q = G.picking ? "graph-preset-" + (G.range.preset === "custom" ? "day" : G.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        G.range = { preset: m.dataset.range }, G.picking = !1, Q = "graph-pick", na(!0), Co(G.graph);
        return;
      case "graph-apply": {
        let K = G.range.pickFrom || ((Y = B.querySelector("[data-range-from]")) == null ? void 0 : Y.value), Ct = G.range.pickTo || ((rt = B.querySelector("[data-range-to]")) == null ? void 0 : rt.value);
        if (!K || !Ct) return;
        K > Ct && ([K, Ct] = [Ct, K]), G.range = { preset: "custom", from: K, to: Ct }, G.picking = !1, Q = "graph-pick", na(!0), Co(G.graph);
        return;
      }
      default:
        return;
    }
    na(!0);
  }
  function ba(p) {
    var m, x, T, H, N, Y;
    p.key === "Escape" && G.openDay !== void 0 && ((x = (m = p.target).closest) != null && x.call(m, '[data-wb-open="day"]')) ? (G.openDay = void 0, Q = G.opener, G.opener = void 0, na(!0)) : p.key === "Escape" && G.picking && ((H = (T = p.target).closest) != null && H.call(T, ".wbGraphCard")) ? (G.picking = !1, Q = "graph-pick", na(!0)) : p.key === "Escape" && G.graph && ((Y = (N = p.target).closest) != null && Y.call(N, ".wbGraphCard")) && (G.graph = void 0, na(!0));
  }
  let zn = null;
  function Kr(p) {
    var x, T;
    const m = (T = (x = p.target).closest) == null ? void 0 : T.call(x, ".wbStripScroll");
    !m || p.button !== 0 || (zn = { startX: p.pageX, left: m.scrollLeft, moved: !1 }, m.classList.add("wbHeld"), window.addEventListener("mousemove", gr), window.addEventListener("mouseup", Uo, { once: !0 }));
  }
  function gr(p) {
    const m = B.querySelector(".wbStripScroll");
    if (!zn || !m) return;
    const x = p.pageX - zn.startX;
    !zn.moved && Math.abs(x) > 1 && (zn.moved = !0, m.classList.add("wbDragging")), m.scrollLeft = zn.left - x;
  }
  function Uo() {
    zn = null, window.removeEventListener("mousemove", gr);
    const p = B.querySelector(".wbStripScroll");
    if (!p) return;
    p.classList.remove("wbDragging", "wbHeld");
    const m = [...p.querySelectorAll(".wbSnap")];
    if (m.length) {
      const x = m.reduce((T, H) => Math.abs(H.offsetLeft - p.scrollLeft) < Math.abs(T.offsetLeft - p.scrollLeft) ? H : T);
      p.scrollTo({ left: x.offsetLeft, behavior: "smooth" });
    }
  }
  const vr = (p) => {
    var x, T;
    const m = p.target;
    (x = m.matches) != null && x.call(m, "[data-range-from]") ? G.range.pickFrom = m.value : (T = m.matches) != null && T.call(m, "[data-range-to]") && (G.range.pickTo = m.value);
  };
  B.addEventListener("change", vr), B.addEventListener("click", Lo), B.addEventListener("keydown", ba), B.addEventListener("mousedown", Kr);
  const $r = 64, Yo = 30;
  let wa = null, on = 0;
  const eo = () => {
    on = 0, B.querySelectorAll(".wbPollen .wbPush").forEach((p) => {
      let m = 0, x = 0;
      if (wa) {
        const T = p.parentElement.getBoundingClientRect(), H = T.left + T.width / 2 - wa.x, N = T.top + T.height / 2 - wa.y, Y = Math.hypot(H, N) || 1;
        if (Y < $r) {
          const rt = (1 - Y / $r) * Yo;
          m = H / Y * rt, x = N / Y * rt;
        }
      }
      p.style.transform = m || x ? "translate(" + m.toFixed(1) + "px," + x.toFixed(1) + "px)" : "";
    }), wa && (on = requestAnimationFrame(eo));
  }, Xr = (p) => {
    var x, T;
    if (!((T = (x = p.target).closest) == null ? void 0 : T.call(x, ".wbPollen")) || Ea != null && Ea.matches) {
      wa && (wa = null, on || (on = requestAnimationFrame(eo)));
      return;
    }
    wa = { x: p.clientX, y: p.clientY }, on || (on = requestAnimationFrame(eo));
  }, Oa = () => {
    wa = null, on || (on = requestAnimationFrame(eo));
  };
  B.addEventListener("pointermove", Xr), B.addEventListener("pointerleave", Oa);
  const Ya = typeof ResizeObserver == "function" ? new ResizeObserver(() => jn(performance.now())) : null;
  Ya == null || Ya.observe(B);
  const Ea = (Ci = window.matchMedia) == null ? void 0 : Ci.call(window, "(prefers-reduced-motion: reduce)"), br = () => {
    Ce(), jn(performance.now());
  };
  (Ti = Ea == null ? void 0 : Ea.addEventListener) == null || Ti.call(Ea, "change", br);
  const ao = [
    setInterval(() => {
      X = /* @__PURE__ */ new Date(), na(!0);
    }, ff),
    setInterval(() => {
      kt = /* @__PURE__ */ new Date(), na(!0);
    }, hf),
    setInterval(le, cf)
  ];
  return na(!0), Ce(), {
    update() {
      na(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      na(!0);
    },
    setStyle(p) {
      !p || p === u || (u = p, B.dataset.style = u, na(!0), Ce());
    },
    destroy() {
      var p;
      cancelAnimationFrame(on), B.removeEventListener("pointermove", Xr), B.removeEventListener("pointerleave", Oa), U = !0, ao.forEach(clearInterval), pt && cancelAnimationFrame(pt), pt = 0, Ya == null || Ya.disconnect(), (p = Ea == null ? void 0 : Ea.removeEventListener) == null || p.call(Ea, "change", br), Uo(), B.removeEventListener("click", Lo), B.removeEventListener("change", vr), B.removeEventListener("keydown", ba), B.removeEventListener("mousedown", Kr), ["daily", "hourly"].forEach(P), B.remove();
    }
  };
}
const vl = "#E1E1E1", Vc = "#F7F4F0", Od = "#03a9f4", Ae = 14, Re = 172;
let eh = 0;
const Xe = (n) => Math.round(n * 100) / 100, Wo = (n, d, i) => Math.max(d, Math.min(i, n)), bi = (n, d, i, u, v, y) => '<rect x="' + Xe(n) + '" y="' + Xe(d) + '" width="' + Xe(i) + '" height="' + Xe(u) + '" fill="' + v + '"' + (y != null ? ' opacity="' + y + '"' : "") + "/>", Wd = (n) => n.map((d, i) => (i ? "L" : "M") + Xe(d[0]) + " " + Xe(d[1])).join("");
function qd(n) {
  const d = (n == null ? void 0 : n.attributes) || {};
  return d.device_class === "curtain" ? "curtain" : d.device_class === "blind" || d.current_tilt_position != null ? "venetian" : "blind";
}
const ar = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function ah(n) {
  const d = n < 2 ? n + 24 : n;
  let i = ar[0], u = ar[ar.length - 1];
  for (let E = 0; E < ar.length - 1; E++) if (d >= ar[E][0] && d <= ar[E + 1][0]) {
    i = ar[E], u = ar[E + 1];
    break;
  }
  const v = (d - i[0]) / (u[0] - i[0]), y = v * v * (3 - 2 * v), k = (E, S) => {
    const B = parseInt(E.slice(1), 16), Mt = parseInt(S.slice(1), 16);
    return "#" + [16, 8, 0].map((ht) => Math.round((B >> ht & 255) + ((Mt >> ht & 255) - (B >> ht & 255)) * y).toString(16).padStart(2, "0")).join("");
  };
  return { top: k(i[1][0], u[1][0]), bot: k(i[1][1], u[1][1]), warm: k(i[1][2], u[1][2]), cool: k(i[1][3], u[1][3]), op: i[1][4] + (u[1][4] - i[1][4]) * y, t: d };
}
function nh(n) {
  const d = parseInt(n.slice(1), 16), i = (d >> 16 & 255) / 255, u = (d >> 8 & 255) / 255, v = (d & 255) / 255, y = Math.max(i, u, v), k = Math.min(i, u, v);
  let E = 0, S = 0;
  const B = (y + k) / 2;
  if (y !== k) {
    const Mt = y - k;
    S = B > 0.5 ? Mt / (2 - y - k) : Mt / (y + k), E = (y === i ? (u - v) / Mt + (u < v ? 6 : 0) : y === u ? (v - i) / Mt + 2 : (i - u) / Mt + 4) / 6;
  }
  return [E * 360, S * 100, B * 100];
}
function Op(n, d, i) {
  d = Wo(d, 0, 100) / 100, i = Wo(i, 0, 100) / 100;
  const u = (k) => (k + n / 30) % 12, v = d * Math.min(i, 1 - i), y = (k) => i - v * Math.max(-1, Math.min(u(k) - 3, Math.min(9 - u(k), 1)));
  return "#" + [y(0), y(8), y(4)].map((k) => Math.round(k * 255).toString(16).padStart(2, "0")).join("");
}
const [Wp, qp, jp] = nh(vl), Gc = Op(Wp, qp, Math.max(6, jp - 14)), oh = Op(Wp, qp, Math.min(96, jp + 16));
function ih(n, d, i, u, v) {
  const y = Re / 2, k = Re * 0.12, E = y - (y - k) * n, S = (st) => st ** 1.3, B = Wo(i, -1.5, 1.5), Mt = (st) => -(Math.abs(B) * 4.6 * st ** 1.5) * Math.sign(B), ht = n * 1.4, $ = (st, et) => {
    const U = Math.min(4.8, Math.abs(i) * 2.6) * (et ? 1 : -1) * Math.sign(i || 1), z = et ? st + E : st, pt = et ? st : st + E, ct = (Lt) => z + Mt(Lt) + U * Math.sin(Lt * Math.PI * 1.2 + u) * S(Lt) * 1.4 + ht * Math.sin(Lt * Math.PI * 2 + u * 0.6) * S(Lt) * (et ? 1 : -1), xt = [[pt, Ae]];
    for (let Lt = 0; Lt <= 12; Lt++) xt.push([ct(Lt / 12), Ae + Re * Lt / 12]);
    xt.push([pt, Ae + Re]);
    let Q = '<path d="' + Wd(xt) + 'Z" fill="' + vl + '"/>';
    if (v) return Q;
    const ot = 1.35 + ((et ? i > 0 : i < 0) ? 0.35 : 0), L = (Lt) => {
      const X = Lt / 7, kt = et ? 1 - X : X, J = (1 - kt) ** 1.3, Vt = st + E * X;
      return Array.from({ length: 13 }, (C, D) => {
        const _ = D / 12;
        return [Vt + Mt(_) * J + U * ot * Math.sin(_ * Math.PI * 1.2 + u - kt * 3.2) * S(_) * 1.4 * J + ht * 1.6 * Math.sin(_ * Math.PI * 2 + u * 0.6 - kt * 2.5) * S(_) * n * (0.4 + 0.6 * J), Ae + Re * _];
      });
    }, G = [1, 2, 3, 4, 5, 6].map(L);
    for (let Lt = 0; Lt < 6; Lt += 2) Q += '<path d="' + Wd(G[Lt]) + Wd(G[Lt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return Q;
  }, tt = y - (y - k) * d;
  return { body: $(Ae, !0) + $(Ae + Re - E, !1), rails: [{ x: Ae + tt - 4, y: Ae, w: 4, h: Re }, { x: Ae + Re - tt, y: Ae, w: 4, h: Re }], head: 6.4 };
}
function rh(n, d, i) {
  const u = Re * (1 - n);
  let v = "";
  if (u > 1 && (v += bi(Ae, Ae, Re, u, vl), !i))
    for (let y = 1; y < 7; y += 2) v += bi(Ae + Re * y / 7, Ae, Re / 7, u, "#fff");
  return { body: v, rails: [{ x: Ae, y: Ae + Re * (1 - d) - 7, w: Re, h: 11 }], head: 10.4 };
}
function sh(n, d, i, u) {
  const v = 9 - 7 * (i / 100), y = Ae + Re * (1 - n), k = Math.ceil(Re / 10) + 1, E = Ae + v / 2, S = (Ae + Re - v / 2 - E) / (k - 1), B = 0.8, Mt = 0.6, ht = Array.from({ length: k }, (st, et) => Math.max(E + et * Mt, Math.min(E + et * S, y - v / 2 - (k - 1 - et) * Mt))), $ = ht.slice(0, -1).map((st, et) => Wo((ht[et + 1] - st - Mt) / (S - Mt), 0, 1));
  $.push($[k - 2]);
  let tt = "";
  return ht.forEach((st, et) => {
    const U = B + (v - B) * $[et], z = Math.max(0.5, U / 2), pt = Math.max(0.4, U * 0.114);
    tt += bi(Ae, st - z, Re, Math.max(1, U), vl), !u && U > 2.2 && (tt += bi(Ae, st + z - pt, Re, pt, Gc) + bi(Ae, st - z, Re, pt * 0.55, oh, 0.75));
  }), u || [0.22, 0.78].forEach((st) => {
    tt += bi(Ae + Re * st - 0.7, Ae, 1.4, Math.max(0, ht[k - 1] + 1 - Ae), Gc, 0.85);
  }), { body: tt, rails: [{ x: Ae, y: Ae + Re * (1 - d) - 8, w: Re, h: 8 }], head: 8.8 };
}
const Uc = (n, d, i, u, v, y, k) => n === "curtain" ? ih(d, i, v, y, k) : n === "venetian" ? sh(d, i, u, k) : rh(d, i, k);
function lh(n, d) {
  let i = "", u = "";
  return d.forEach((v) => {
    const y = v.w > v.h, k = Wo(y ? Ae + Re / 2 : v.x + v.w / 2, 17, 183), E = Wo(y ? v.y + v.h / 2 : Ae + Re / 2, 17, 183);
    i += y ? bi(Ae, Wo(v.y + v.h / 2, Ae, Ae + Re) - 1, Re, 2, Od) : bi(Wo(v.x + v.w / 2, Ae, Ae + Re) - 1, Ae, 2, Re, Od);
    const S = y ? "M" + Xe(k - 4) + " " + Xe(E - 3) + "l4 -3l4 3M" + Xe(k - 4) + " " + Xe(E + 3) + "l4 3l4 -3" : "M" + Xe(k - 3) + " " + Xe(E - 4) + "l-3 4l3 4M" + Xe(k + 3) + " " + Xe(E - 4) + "l3 4l-3 4";
    u += '<circle cx="' + Xe(k) + '" cy="' + Xe(E) + '" r="11" fill="' + Od + '" filter="url(#' + n + 's)"/><path d="' + S + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: u };
}
function dh(n, d) {
  const i = /* @__PURE__ */ new Date(), u = ah(i.getHours() + i.getMinutes() / 60), v = 42 + 18 * Math.sin(u.t * 0.5), y = u.t >= 5 && u.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (u.t - 5) / 15) : 80, k = Uc(d.kind, d.pos / 100, d.bar / 100, d.tilt, d.vel, d.ph, !1), E = d.ghostAlpha > 4e-3 && d.ghost != null ? Uc(d.kind, d.ghost / 100, d.ghost / 100, d.tilt, 0, 0, !0).body : "", S = d.grip > 4e-3 ? lh(n, k.rails) : null, B = (Mt) => bi(Ae, Ae, Re, Re, Mt);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + u.top + '"/><stop offset="1" stop-color="' + u.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Xe(v) + '%" cy="' + Xe(y) + '%" r="58%"><stop offset="0" stop-color="' + u.warm + '" stop-opacity="' + Xe(u.op * 0.8) + '"/><stop offset="1" stop-color="' + u.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Xe(100 - v * 0.8) + '%" cy="' + Xe(100 - y * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + u.cool + '" stop-opacity="' + Xe(u.op * 0.64) + '"/><stop offset="1" stop-color="' + u.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Vc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + B("url(#" + n + "l)") + B("url(#" + n + "w)") + B("url(#" + n + "k)") + (E ? '<g opacity="' + Xe(d.ghostAlpha) + '">' + E + "</g>" : "") + k.body + '<rect x="14" y="14" width="172" height="' + k.head + '" fill="' + vl + '" filter="url(#' + n + 's)"/></g>' + (S ? '<g clip-path="url(#' + n + 'c)" opacity="' + Xe(d.grip) + '">' + S.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Vc + '" stroke-width="3"/>' + (S ? '<g opacity="' + Xe(d.grip) + '">' + S.knobs + "</g>" : "") + "</svg>";
}
function ch({ onMove: n, onSet: d }) {
  var Q;
  const i = "cv" + ++eh, u = document.createElement("div");
  u.className = "tfCoverArt";
  const v = (Q = window.matchMedia) == null ? void 0 : Q.call(window, "(pointer: coarse)").matches;
  let y = null;
  const k = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let E = 0, S = !1, B = !1, Mt = null, ht = 0, $ = 0;
  const tt = () => (y == null ? void 0 : y.kind) === "curtain" ? "x" : "y", st = () => Mt || S || B || y.moving || y.target != null ? 1 : v ? performance.now() < $ ? 1 : 0.4 : 0, et = () => {
    u.innerHTML = dh(i, { kind: y.kind, pos: k.pos, bar: y.target ?? k.pos, tilt: k.tilt, vel: k.vel, ph: k.ph, ghost: k.gpos, ghostAlpha: k.ghost, grip: k.grip });
  };
  function U(ot) {
    E = 0;
    const L = k.last ? Math.min(0.064, (ot - k.last) / 1e3) : 1 / 60, G = L * 60;
    k.last = ot;
    const Lt = y.pos - k.pos, X = k.pos;
    k.pos += Math.sign(Lt) * Math.min(Math.abs(Lt), Math.max(10.5, Math.abs(Lt) * 1.4) * L), Math.abs(y.pos - k.pos) < 0.03 && (k.pos = y.pos), k.vel = k.vel * 0.86 + (k.pos - X) / G * 0.14, Math.abs(k.vel) < 0.015 && k.pos === y.pos && (k.vel = 0), (k.pos !== X || k.vel) && (k.ph += (0.06 + Math.abs(k.vel) * 0.03) * G);
    const kt = y.tilt - k.tilt;
    k.tilt += Math.sign(kt) * Math.min(Math.abs(kt), Math.max(60, Math.abs(kt) * 4) * L);
    const J = st();
    k.grip += (J - k.grip) * Math.min(1, L * (J > k.grip ? 11 : 3.5)), Math.abs(J - k.grip) < 0.01 && (k.grip = J);
    const Vt = y.target != null && Math.abs(y.target - k.pos) > 0.5 ? 0.22 : 0;
    y.target != null && (k.gpos = y.target), k.ghost += (Vt - k.ghost) * Math.min(1, L * (Vt > k.ghost ? 16 : 3)), Math.abs(Vt - k.ghost) < 4e-3 && (k.ghost = Vt), et(), k.pos !== y.pos || k.vel || k.tilt !== y.tilt || k.grip !== J || k.ghost !== Vt ? E = requestAnimationFrame(U) : k.last = 0;
  }
  const z = () => {
    y && !E && (E = requestAnimationFrame(U));
  }, pt = setInterval(() => {
    y && !E && et();
  }, 60 * 1e3), ct = (ot) => {
    const L = u.getBoundingClientRect();
    return tt() === "x" ? (ot.clientX - L.left) / L.width : (ot.clientY - L.top) / L.height;
  };
  u.addEventListener("pointerdown", (ot) => {
    var Lt;
    if (!(y != null && y.canSet) || ot.button > 0) return;
    ot.preventDefault(), (Lt = u.setPointerCapture) == null || Lt.call(u, ot.pointerId);
    const L = y.target ?? y.pos, G = u.getBoundingClientRect();
    Mt = { p0: ct(ot), from: L, x0: ot.clientX, value: null, side: null }, y.kind === "curtain" && L > 0 && (Mt.side = (ot.clientX - G.left) / G.width < 0.5 ? "L" : "R"), z();
  }), u.addEventListener("pointermove", (ot) => {
    if (!Mt) return;
    let L;
    if (y.kind === "curtain") {
      if (!Mt.side) {
        const Lt = ot.clientX - Mt.x0;
        if (Math.abs(Lt) < 4) return;
        Mt.side = Lt < 0 ? "L" : "R";
      }
      const G = (Re / 2 - Re * 0.12) / 200;
      L = Mt.from + (Mt.side === "L" ? -1 : 1) * ((ct(ot) - Mt.p0) / G) * 100;
    } else L = Mt.from - (ct(ot) - Mt.p0) / (Re / 200) * 100;
    Mt.value = Wo(L, 0, 100), n(Mt.value);
  });
  const xt = () => {
    if (!Mt) return;
    const ot = Mt.value;
    Mt = null, ot != null && d(Math.round(ot)), z();
  };
  return u.addEventListener("pointerup", xt), u.addEventListener("pointercancel", xt), u.addEventListener("lostpointercapture", xt), u.addEventListener("pointerenter", () => {
    S = !0, z();
  }), u.addEventListener("pointerleave", () => {
    S = !1, z();
  }), u.addEventListener("focus", () => {
    B = u.matches(":focus-visible"), z();
  }), u.addEventListener("blur", () => {
    B = !1, z();
  }), u.addEventListener("keydown", (ot) => {
    if (!(y != null && y.canSet)) return;
    const L = Math.round(y.target ?? y.pos), G = ot.shiftKey ? 10 : 1, Lt = { ArrowUp: L + G, ArrowRight: L + G, ArrowDown: L - G, ArrowLeft: L - G, PageUp: L + 25, PageDown: L - 25, Home: 0, End: 100 }[ot.key];
    if (Lt == null) return;
    ot.preventDefault();
    const X = Wo(Lt, 0, 100);
    n(X), clearTimeout(ht), ht = setTimeout(() => d(X), 500);
  }), {
    el: u,
    update(ot) {
      const L = !y;
      y = ot, L && (k.pos = y.pos, k.tilt = y.tilt, $ = performance.now() + 1500, v && setTimeout(z, 1600)), u.classList.toggle("x", tt() === "x"), u.classList.toggle("y", tt() === "y"), y.canSet ? (u.tabIndex = 0, u.setAttribute("role", "slider"), u.setAttribute("aria-valuemin", "0"), u.setAttribute("aria-valuemax", "100"), u.setAttribute("aria-valuenow", String(Math.round(y.target ?? y.pos))), u.setAttribute("aria-orientation", tt() === "x" ? "horizontal" : "vertical")) : u.setAttribute("role", "img"), u.setAttribute("aria-label", y.name + (y.canSet ? " position" : "")), u.setAttribute("aria-valuetext", y.text), z();
    },
    destroy() {
      cancelAnimationFrame(E), E = 0, clearInterval(pt), clearTimeout(ht), u.remove();
    }
  };
}
const Yc = "move-assistant-density", Fo = {
  get(n) {
    try {
      return localStorage.getItem(n);
    } catch {
      return null;
    }
  },
  set(n, d) {
    try {
      localStorage.setItem(n, d);
    } catch {
    }
  }
}, nt = (n) => String(n ?? "").replace(/[&<>"']/g, (d) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[d]), jd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Zc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', ph = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', ad = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Kc = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, $c = 1, uh = 4, Xc = 16, Jc = 32, fh = 128, hh = 256, Qc = 16384, mh = 1, gh = 2, tp = 4, vh = 8, bh = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, ep = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, wh = { curtain: "curtains", blind: "blind", venetian: "blinds" }, zd = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, ap = "move_assistant_house", np = "move-assistant-house-used", xh = ["switch", "fan", "input_boolean", "automation"], op = "move-assistant-house-look", yh = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], kh = [["popup", "Popup"], ["sheet", "Sheet"]], Mh = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Sh = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], Ch = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Vd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Th = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Lh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', ip = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', rp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', sp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', zp = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((d) => '<path d="' + d + '"/>').join("") + "</svg>", lp = zp(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Ah = zp(["M20 6L9 17L4 12"]), Oo = (n, d = "") => '<span class="tfAreaGlyph" data-icon-for="' + nt(n || "") + '"' + (d ? ' data-icon-name="' + nt(d) + '"' : "") + "></span>", _h = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Eh = 1, Dh = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], dp = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Gd = ["hs", "xy", "rgb", "rgbw", "rgbww"], nd = ["door", "window", "garage_door", "opening"], cp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, od = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Bh = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Rh = 10, Nh = 20, Ph = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Ih = ["living room", "bedroom", "office"];
function Hh(n, { config: d, getHass: i }) {
  var $i, ll, dl;
  const u = (t) => n.getElementById(t), v = u("app"), k = String((d || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let E = Fo.get(Yc) === "1", S = {};
  const B = (t) => {
    var a;
    return (a = i()) == null ? void 0 : a.callWS(t);
  }, Mt = (t, a, o) => B({ type: "call_service", domain: t, service: a, service_data: o }), ht = n.querySelector("#appearancePane .toggleList");
  ht && !u("densityToggle") && (ht.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), u("densityToggle").addEventListener("click", () => {
    E = !E, Fo.set(Yc, E ? "1" : "0"), ot();
  }));
  const $ = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Kt(t).device_class === "power" && /^(W|kW)$/.test(Kt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], tt = (t, a, o, l) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + a + '">' + l.map(([c, g]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + o + '="' + c + '">' + g + "</button>").join("") + "</div>", st = (t, a, o, l) => '<div class="toggleRow"' + (l ? ' id="' + l + '"' : "") + "><div><strong>" + t + "</strong>" + (a ? '<div class="status">' + a + "</div>" : "") + "</div>" + o + "</div>";
  function et() {
    var at, it;
    if (!k || u("housePane")) return;
    const t = u("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const a = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], o = (dt, Z) => '<div class="houseTab' + (dt === "look" ? " active" : "") + '" data-house-pane="' + dt + '"><section class="card">' + Z + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + a.map(([dt, Z]) => '<button class="tab segBtn' + (dt === "look" ? " active" : "") + '" type="button" data-house-tab="' + dt + '">' + Z + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    o("look", yh.map(([dt, Z]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + dt + '"><div class="tfCardTitle">' + Z + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    o("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + o("sources", '<div class="toggleList">' + $.map(([dt, Z, bt]) => st(Z, bt, '<select class="settingsSelect" data-source="' + dt + '" aria-label="' + Z + '"></select>')).join("") + "</div>") + o("sums", '<div class="toggleList">' + Object.entries(zd).map(([dt, Z]) => st(Z.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + dt + '" aria-label="' + Z.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const l = (dt) => t.querySelector('[data-look-group="' + dt + '"]'), c = (dt) => dt == null ? void 0 : dt.closest(".toggleRow");
    [c(t.querySelector(".themeBtn"))].forEach((dt) => dt && l("look").appendChild(dt));
    const g = c(u("densityToggle"));
    g && (g.hidden = !0), [c(u("moreInfoChoice")), c(u("namesChoice"))].forEach((dt) => dt && l("house").appendChild(dt)), l("house").insertAdjacentHTML("beforeend", st("Lights", "How lights show on the house page.", tt("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + st("Pad", "What the Dual Axis Controller’s pad sets on its tile.", tt("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [c(u("hoursChoice")), c(u("wxStyleChoice"))].forEach((dt) => dt && l("weather").appendChild(dt));
    const f = u("housePane"), b = f.querySelector(".houseTabs"), M = b.querySelector(".rubberIndicator"), O = "homecore-light-view", I = (dt) => {
      f.classList.toggle("tfLightCardsOn", dt === "cards"), f.querySelectorAll("[data-light-view]").forEach((Z) => Z.setAttribute("aria-pressed", String(Z.dataset.lightView === dt))), Fo.set(O, dt);
    };
    I(Fo.get(O) === "table" ? "table" : "cards"), f.querySelector(".tfLightView").addEventListener("click", (dt) => {
      const Z = dt.target.closest("[data-light-view]");
      Z && I(Z.dataset.lightView);
    }), new ResizeObserver(() => z()).observe(f), (it = (at = document.fonts) == null ? void 0 : at.ready) == null || it.then(() => z());
    const F = (dt) => {
      const Z = b.querySelector(".tab.active");
      M.style.transition = dt ? "" : "none", M.style.left = Z.offsetLeft + "px", M.style.width = Z.offsetWidth + "px", dt && (M.style.transform = "scaleX(1.08)", setTimeout(() => M.style.transform = "", 180));
    };
    new ResizeObserver(() => F(!1)).observe(b), f.addEventListener("click", (dt) => {
      const Z = dt.target.closest("[data-house-tab]");
      if (Z) {
        b.querySelectorAll(".tab").forEach((W) => W.classList.toggle("active", W === Z)), f.querySelectorAll(".houseTab").forEach((W) => W.classList.toggle("active", W.dataset.housePane === Z.dataset.houseTab)), Z.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), F(!0), z();
        return;
      }
      const bt = dt.target.closest("[data-light-fav]");
      if (bt) {
        Qr(bt.dataset.lightFav);
        return;
      }
      const j = dt.target.closest("[data-light-pick]");
      if (j) {
        const [W, Ot] = j.dataset.lightPick.split("|"), Ne = { ...Ht[W] };
        j.dataset.v ? Ne[Ot] = j.dataset.v : delete Ne[Ot], Ht[W] = Ne, me(), [...Oa.keys()].filter((fe) => fe.endsWith(":" + Ot)).forEach((fe) => Oa.delete(fe)), oa();
        return;
      }
      const vt = dt.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!vt || vt.disabled)) {
        if (vt.dataset.lights && (Ht.lights = vt.dataset.lights), vt.dataset.dacPad && (Ht.dacPad = vt.dataset.dacPad), (vt.dataset.lights || vt.dataset.dacPad) && (me(), Oa.clear()), vt.dataset.sumToggle) {
          const W = vt.dataset.sumToggle, Ot = new Set(V.hiddenSums || []);
          Ot.has(W) ? Ot.delete(W) : Ot.add(W), V = { ...V, hiddenSums: [...Ot] }, La();
        }
        oa();
      }
    }), f.addEventListener("change", (dt) => {
      const Z = dt.target;
      Z.dataset.source && (V = { ...V, sources: { ...V.sources || {}, [Z.dataset.source]: Z.value || void 0 } }, La());
      const bt = Z.dataset.lightStyle || Z.dataset.lightPad;
      if (bt) {
        const j = Z.dataset.lightStyle ? "lightStyles" : "lightPads", vt = { ...Ht[j] };
        Z.value ? vt[bt] = Z.value : delete vt[bt], Ht[j] = vt, me(), [...Oa.keys()].filter((W) => W.endsWith(":" + bt)).forEach((W) => Oa.delete(W));
      }
      oa();
    });
  }
  function U() {
    var F, at;
    Ea() && Xr();
    const t = u("housePane");
    if (!t) return;
    const a = !!customElements.get(wa);
    t.querySelectorAll("[data-lights]").forEach((it) => it.setAttribute("aria-pressed", String(it.dataset.lights === Ht.lights))), u("lightsRow").querySelector(".status").textContent = a || !Ea() ? "How lights show on the house page." : eo === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((it) => it.setAttribute("aria-pressed", String(it.dataset.dacPad === Ht.dacPad))), u("dacPadRow").hidden = !Ea();
    for (const it of t.querySelectorAll("[data-source]")) {
      if (it === n.activeElement) continue;
      const [dt] = $.find(([bt]) => bt === it.dataset.source), Z = Object.keys(S).filter($.find(([bt]) => bt === dt)[3]).sort((bt, j) => It(bt).localeCompare(It(j)));
      it.dataset.sig !== Z.join(",") && (it.innerHTML = '<option value="">Automatic</option>' + Z.map((bt) => '<option value="' + nt(bt) + '">' + nt(It(bt)) + "</option>").join(""), it.dataset.sig = Z.join(",")), it.value = Z.includes((F = V.sources) == null ? void 0 : F[dt]) ? V.sources[dt] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((it) => {
      const dt = !(V.hiddenSums || []).includes(it.dataset.sumToggle);
      it.classList.toggle("on", dt), it.setAttribute("aria-checked", String(dt));
    });
    const o = u("lightRows"), l = u("lightCards"), c = n.activeElement, g = o != null && o.contains(c) || l != null && l.contains(c) ? c : null;
    if (!o || g != null && g.matches("select")) {
      z();
      return;
    }
    const f = new Set(xa()), b = (it, dt, Z, bt) => '<option value="' + it + '"' + (it === Z ? " selected" : "") + ">" + dt + "</option>", M = Object.keys(S).filter((it) => it.startsWith("light.")).sort((it, dt) => !Se.get(it) - !Se.get(dt) || (Se.get(it) || "").localeCompare(Se.get(dt) || "") || It(it).localeCompare(It(dt))).map((it) => {
      const dt = Ht.lightStyles[it] || "", Z = Ht.lightPads[it] || "", bt = f.has(it), j = nt(It(it));
      return "<tr><td><strong>" + j + "</strong></td><td>" + nt(Se.get(it) || "—") + "</td><td>" + nt(ia(it)) + '</td><td class="metaSwitchCol"><button class="switch' + (bt ? " on" : "") + '" type="button" role="switch" aria-checked="' + bt + '" data-light-fav="' + nt(it) + '" aria-label="' + j + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + nt(it) + '" aria-label="' + j + ' tile">' + b("", "Default", dt) + b("tile", "HomeCore tile", dt) + b("dac", "Dual Axis Controller", dt) + '</select></td><td><select class="settingsSelect" data-light-pad="' + nt(it) + '" aria-label="' + j + ' pad"' + (Ya(it) ? "" : " disabled") + ">" + b("", "Default", Z) + b("temperature", "Temperature", Z) + b("colour", "Colour", Z) + "</select></td></tr>";
    }).join(""), O = (it, dt, Z, bt, j) => '<div class="themeChoice" role="group" aria-label="' + Z + '">' + bt.map(([vt, W]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (vt === j) + '" data-light-pick="' + it + "|" + nt(dt) + '" data-v="' + vt + '">' + W + "</button>").join("") + "</div>", I = Object.keys(S).filter((it) => it.startsWith("light.")).sort((it, dt) => !Se.get(it) - !Se.get(dt) || (Se.get(it) || "").localeCompare(Se.get(dt) || "") || It(it).localeCompare(It(dt))).map((it) => {
      const dt = f.has(it), Z = nt(It(it)), bt = [Se.get(it), ia(it)].filter(Boolean).map(nt).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + Z + '</strong><div class="status">' + bt + "</div></div></div>" + st("Favourite", "", '<button class="switch' + (dt ? " on" : "") + '" type="button" role="switch" aria-checked="' + dt + '" data-light-fav="' + nt(it) + '" aria-label="' + Z + ' is a favourite"></button>') + st("Tile", "", O("lightStyles", it, Z + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Ht.lightStyles[it] || "")) + (Ya(it) ? st("Pad", "", O("lightPads", it, Z + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Ht.lightPads[it] || "")) : "") + "</div>";
    }).join("");
    o.dataset.html !== M && (o.innerHTML = M, o.dataset.html = M), l.dataset.html !== I && (l.innerHTML = I, l.dataset.html = I), g != null && g.dataset.lightFav && ((at = (l.contains(g) ? l : o).querySelector('[data-light-fav="' + CSS.escape(g.dataset.lightFav) + '"]')) == null || at.focus({ preventScroll: !0 })), z();
  }
  function z() {
    var a, o, l;
    const t = u("housePane");
    if (t)
      for (const c of t.querySelectorAll(".themeChoice")) {
        const g = [...c.querySelectorAll("button")];
        let f = (a = c.nextElementSibling) != null && a.classList.contains("tfChoiceList") ? c.nextElementSibling : null;
        if (!f) {
          f = document.createElement("select"), f.className = "settingsSelect tfChoiceList", f.setAttribute("aria-label", c.getAttribute("aria-label") || ((l = (o = c.closest(".toggleRow")) == null ? void 0 : o.querySelector("strong")) == null ? void 0 : l.textContent) || ""), f.addEventListener("change", () => {
            var F;
            return (F = g[Number(f.value)]) == null ? void 0 : F.click();
          }), c.after(f);
          const I = () => {
            f.innerHTML = g.map((at, it) => '<option value="' + it + '"' + (at.disabled ? " disabled" : "") + ">" + nt(at.textContent) + "</option>").join("");
            const F = g.findIndex((at) => at.getAttribute("aria-pressed") === "true" || at.classList.contains("active"));
            F >= 0 && (f.value = String(F));
          };
          new MutationObserver(I).observe(c, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), I();
        }
        const b = (I) => {
          c.hidden !== !I && (c.hidden = !I), f.hidden !== I && (f.hidden = I);
        };
        if (g.length > 3) {
          b(!1);
          continue;
        }
        if (!c.getClientRects().length && !f.getClientRects().length) {
          f.dataset.fit || b(!0);
          continue;
        }
        const M = c.hidden;
        c.hidden = !1;
        const O = g.every((I) => I.scrollWidth <= I.clientWidth + 1);
        c.hidden = M, b(O), f.dataset.fit = "1";
      }
  }
  const pt = document.createElement("div");
  pt.className = "densityBadge", pt.setAttribute("aria-live", "polite"), pt.hidden = !0, v.appendChild(pt);
  let ct = 0;
  function xt() {
    if (!E) return;
    const t = u("homeView"), a = (g) => g.offsetParent !== null && !g.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((g) => {
      a(g) && (g.dataset.h = Math.round(g.getBoundingClientRect().height) + " px");
    });
    const o = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(a), l = window.innerHeight, c = o.filter((g) => {
      const f = g.getBoundingClientRect();
      return f.height > 0 && f.top >= 0 && f.bottom <= l + 0.5;
    }).length;
    pt.hidden = !t.classList.contains("active"), pt.innerHTML = "<b>" + c + "</b><small>of " + o.length + " readings on screen</small>";
  }
  const Q = () => {
    E && requestAnimationFrame(xt);
  };
  function ot() {
    var t;
    v.classList.toggle("showDensity", E), (t = u("densityToggle")) == null || t.classList.toggle("on", E), pt.hidden = !E, clearInterval(ct), E && (ct = setInterval(xt, 1e3), xt());
  }
  window.addEventListener("scroll", Q, { capture: !0, passive: !0 }), window.addEventListener("resize", Q, { passive: !0 });
  const L = n.querySelector("#homeView .grid");
  let G = null, Lt = null, X = null, kt = null;
  const J = /* @__PURE__ */ new Map(), Vt = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), D = 6;
  let _ = null;
  const P = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map();
  let V = { favourites: null }, yt = {}, Tt = {}, te = [], le = null;
  const ea = (() => {
    try {
      return JSON.parse(Fo.get(np)) || {};
    } catch {
      return {};
    }
  })();
  let Se = /* @__PURE__ */ new Map(), wi = 0;
  function La() {
    clearTimeout(wi), wi = setTimeout(() => Promise.resolve(B({ type: "frontend/set_user_data", key: ap, value: V })).catch(() => {
    }), 400);
  }
  const Ht = (() => {
    let t = {};
    try {
      t = JSON.parse(Fo.get(op)) || {};
    } catch {
    }
    const a = (o, l) => Object.fromEntries(Object.entries(o || {}).filter(([, c]) => l.includes(c)));
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
  })(), me = () => Fo.set(op, JSON.stringify(Ht)), da = () => {
    v.dataset.more = Ht.more, v.dataset.names = Ht.names, Wr();
  };
  k && ht && !u("moreInfoChoice") && (u("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + kh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ht.more === t) + '" data-more-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), u("moreInfoChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-more-style]");
    a && (Ht.more = a.dataset.moreStyle, me(), da(), u("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  }), u("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + Mh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ht.names === t) + '" data-names-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), u("namesChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-names-style]");
    a && (Ht.names = a.dataset.namesStyle, Ht.namesPicked = !0, me(), da(), u("namesChoice").querySelectorAll("[data-names-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  }), u("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Sh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ht.hoursWindow === t) + '" data-hours-window="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), u("hoursChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-hours-window]");
    a && (Ht.hoursWindow = a.dataset.hoursWindow, me(), Qt == null || Qt.refresh(), u("hoursChoice").querySelectorAll("[data-hours-window]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  }), u("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + Ch.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ht.wxStyle === t) + '" data-wx-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), u("wxStyleChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-wx-style]");
    a && (Ht.wxStyle = a.dataset.wxStyle, me(), Qt == null || Qt.setStyle(Ht.wxStyle), va == null || va.forEach((o) => o.setStyle(Ht.wxStyle)), u("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  })), et();
  let ue = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const Ue = /* @__PURE__ */ new Map();
  let Yr = "";
  const we = k ? wu({ onChange: () => Da() }) : null;
  k && v.classList.add("house");
  const ne = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Qt = null, rr = null, xi = !1;
  function sr(t) {
    const a = ln();
    if (v.classList.toggle("houseBento", !!a), Qt && (rr !== a || t == null) && (Qt.destroy(), Qt = null), !a || t == null) {
      ne.remove();
      return;
    }
    ne.isConnected || L.append(ne), ne.style.order = t, !Qt && !xi && (Qt = zc(ne, { getHass: i, entityId: a, style: Ht.wxStyle, hoursWindow: () => Ht.hoursWindow }), rr = a);
  }
  const en = [["wx", ["current"]], ["avg", ["compared_to_average"]], ["aq", ["aq_tile"]], ["pollen", ["pollen_tile"]], ["radar", ["radar_tile"]]], ge = ["aq", "pollen", "radar"], ca = Object.fromEntries(en.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let va = null, yi = null;
  function lr(t) {
    const a = ln();
    va && yi !== a && (va.forEach((o) => o.destroy()), va = null), Object.values(ca).forEach((o) => a ? !o.isConnected && L.append(o) : o.remove()), a && !va && !xi && (va = en.map(([o, l]) => zc(ca[o], { getHass: i, entityId: a, style: Ht.wxStyle, cards: l, onOpen: o === "wx" ? () => vs("weather") : void 0 })), yi = a);
  }
  const Kt = (t) => {
    var a;
    return ((a = S[t]) == null ? void 0 : a.attributes) || {};
  }, It = (t) => Kt(t).friendly_name || t, Yt = (t, a) => Qi(t) || (Number(Kt(t).supported_features) & a) === a, Ie = (t) => {
    const a = String(t ?? "").replace(/_/g, " ");
    return a.charAt(0).toUpperCase() + a.slice(1);
  }, Ra = (t, a = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: a, maximumFractionDigits: a }), wo = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Ut = (t) => Kt(t).supported_color_modes || [], ie = (t) => {
    const a = t / 100;
    return [a <= 66 ? 255 : 329.7 * Math.pow(a - 60, -0.1332), a <= 66 ? 99.47 * Math.log(a) - 161.12 : 288.12 * Math.pow(a - 60, -0.0755), a >= 66 ? 255 : a <= 19 ? 0 : 138.52 * Math.log(a - 10) - 305.04];
  }, aa = (t, a) => [5, 3, 1].map((o) => {
    const l = (o + t / 60) % 6;
    return 255 * (1 - a / 100 * Math.max(0, Math.min(l, 4 - l, 1)));
  }), Jn = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Ga = (t) => 0.2126 * Jn(t[0]) + 0.7152 * Jn(t[1]) + 0.0722 * Jn(t[2]), Qe = (t, a) => {
    const o = Ga(t), l = Ga(a);
    return (Math.max(o, l) + 0.05) / (Math.min(o, l) + 0.05);
  }, ki = 0.55, pa = (t) => {
    const a = Kt(t);
    return (a.rgb_color || (a.hs_color && a.color_mode !== "color_temp" ? aa(...a.hs_color) : a.color_temp_kelvin ? ie(a.color_temp_kelvin) : [255, 170, 0])).map((o) => Math.round(Math.max(0, Math.min(255, o))));
  }, xo = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function yo(t) {
    var l;
    const a = t.split(".")[0], o = (l = S[t]) == null ? void 0 : l.state;
    return !o || o === "unavailable" || o === "unknown" ? null : a === "light" ? o === "on" ? pa(t) : null : a === "climate" ? xo[o] || null : a === "cover" ? o !== "closed" ? [146, 107, 199] : null : a === "lock" ? o !== "locked" ? [244, 67, 54] : null : a === "media_player" ? ["playing", "paused", "on", "buffering"].includes(o) ? [3, 169, 244] : null : a === "humidifier" || a === "valve" ? ["on", "open", "opening", "closing"].includes(o) ? [33, 150, 243] : null : a === "vacuum" ? ["cleaning", "returning"].includes(o) ? [0, 150, 136] : null : a === "alarm_control_panel" ? o !== "disarmed" && o !== "triggered" ? [76, 175, 80] : null : a === "fan" ? o === "on" ? [0, 188, 212] : null : (a === "switch" || a === "input_boolean") && o === "on" ? [255, 193, 7] : null;
  }
  function ko(t, a, o = !1) {
    const [l, c, g] = t.map((dt) => dt / 255), f = Math.max(l, c, g), b = Math.min(l, c, g), M = f - b, O = M ? (f === l ? (c - g) / M + (c < g ? 6 : 0) : f === c ? (g - l) / M + 2 : (l - c) / M + 4) * 60 : 0, I = (f + b) / 2, F = M ? M / (1 - Math.abs(2 * I - 1)) : 0, at = M < 0.1 ? Math.min(F, 0.25) : 1, it = (dt) => {
      const Z = (j) => (j + O / 30) % 12, bt = at * Math.min(dt, 1 - dt);
      return [0, 8, 4].map((j) => Math.round(255 * (dt - bt * Math.max(-1, Math.min(Z(j) - 3, 9 - Z(j), 1)))));
    };
    for (let dt = 0.5; o ? dt < 0.96 : dt > 0.04; dt += o ? 0.01 : -0.01) {
      const Z = it(dt);
      if (Qe(Z, a) >= 3) return "rgb(" + Z.join(",") + ")";
    }
    return o ? "#ffffff" : "#26221e";
  }
  const ua = (t) => {
    const a = [1, 3, 5].map((o) => parseInt(t.slice(o, o + 2), 16));
    return Math.max(...a) - Math.min(...a) < 26 ? "" : ";--sum-d:" + ko(a, [58, 58, 58], !0) + ";--sum-l:" + ko(a, [230, 230, 230]);
  }, In = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, Mi = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + In.d[t] + ";--g" + t + "-l:" + In.l[t]).join(";"), dr = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, a) => '<stop offset="' + t + '" style="stop-color:var(--g' + a + ')"/>').join("") + "</linearGradient></defs></svg>", an = (t) => {
    const a = t.map((o) => Math.round(o + (255 - o) * ki));
    return "--light-soft:rgb(" + a.join(",") + ");--light-ink:" + ko(t, a);
  }, Qn = (t) => an(pa(t)), Hn = (t) => {
    const a = yo(t);
    return a ? ' data-light style="' + an(a) + '"' : "";
  }, yn = (t) => {
    const a = Ut(t);
    return a.length ? a.some((o) => o !== "onoff") : Kt(t).brightness != null;
  }, Dn = (t) => [Kt(t).min_color_temp_kelvin || 2e3, Kt(t).max_color_temp_kelvin || 6500], nn = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function cr(t) {
    const a = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (a < 10) return "Just now";
    if (a < 60) return a + " seconds ago";
    const o = Math.round(a / 60);
    if (o < 60) return o + (o === 1 ? " minute ago" : " minutes ago");
    const l = Math.round(o / 60);
    if (l < 24) return l + (l === 1 ? " hour ago" : " hours ago");
    const c = Math.round(l / 24);
    return c + (c === 1 ? " day ago" : " days ago");
  }
  const Fn = (t) => {
    var a;
    return Kt(t).current_position ?? (((a = S[t]) == null ? void 0 : a.state) === "closed" ? 0 : 100);
  }, _e = (t) => {
    var a;
    return N("pos", t, ((a = P.get(t)) == null ? void 0 : a.pos) ?? Fn(t));
  }, Mo = (t) => {
    var a;
    return N("tilt", t, ((a = P.get(t)) == null ? void 0 : a.tilt) ?? Kt(t).current_tilt_position);
  };
  function ia(t) {
    var f;
    const a = S[t];
    if (!a) return "Not found";
    if (a.state === "unavailable") return "Unavailable";
    const o = a.attributes, l = t.split(".")[0];
    if (l === "light") {
      if (a.state !== "on") return "Off";
      const b = o.color_temp_kelvin;
      return (yn(t) ? wo(a) + "%" : "On") + (o.color_mode === "color_temp" && b ? " · " + Number(b).toLocaleString() + "k" : Gd.includes(o.color_mode) ? " · Colour" : "");
    }
    if (l === "climate") return (a.state === "off" ? "Off" : Ie(o.hvac_action || a.state)) + " · " + Ra(o.current_temperature) + " °C now";
    if (l === "cover") {
      const b = Fn(t), M = o.current_tilt_position;
      return a.state === "opening" || a.state === "closing" ? Ie(a.state) + " - " + b + "%" : (b <= 0 ? "Closed" : b >= 100 ? "Open" : "Partially open") + (M > 0 && M < 100 ? " · tilted" : "");
    }
    if (l === "humidifier") return a.state !== "on" ? "Off" : Ie(o.action || "on") + " · " + o.current_humidity + "% now";
    if (l === "vacuum") return Ie(a.state) + (a.state === "cleaning" && ((f = o.rooms) != null && f.length) ? " · " + o.rooms.join(", ") : "") + (o.battery_level != null ? " · " + o.battery_level + "%" : "");
    if (l === "media_player") return a.state === "playing" || a.state === "paused" ? (a.state === "paused" ? "Paused · " : "") + (o.media_title || "Playing") : Ie(a.state);
    if (l === "alarm_control_panel") return dp[a.state] || Ie(a.state);
    if (l === "lock" || l === "valve") return Ie(a.state);
    if (l === "switch") return a.state === "on" ? "On" : "Off";
    if (l === "plant") return a.state === "ok" ? "Healthy" : Ie(o.problem);
    if (l === "binary_sensor")
      return o.device_class === "battery" ? a.state === "on" ? "Low" : "Normal" : o.device_class === "problem" ? a.state === "on" ? "Problem" : "OK" : o.device_class === "moisture" ? a.state === "on" ? "Wet" : "Dry" : nd.includes(o.device_class) ? a.state === "on" ? "Open" : "Closed" : a.state === "on" ? "Detected" : "Clear";
    if (o.rang) return "Rang at " + nn(o.rang);
    const c = i();
    if (c != null && c.formatEntityState && !Qi(t))
      try {
        return c.formatEntityState(a);
      } catch {
      }
    const g = Number(a.state);
    if (a.state !== "" && Number.isFinite(g)) {
      const b = Math.abs(g) >= 100 ? 0 : Math.abs(g) >= 10 ? 1 : 2, M = o.unit_of_measurement ? o.unit_of_measurement === "%" ? "%" : " " + o.unit_of_measurement : "";
      return g.toLocaleString(void 0, { maximumFractionDigits: b }) + M + (o.plant_low ? " · Low" : o.plant_high ? " · High" : "");
    }
    return Ie(a.state);
  }
  const pr = (t) => t >= 1e3 ? Ra(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function Na(t) {
    var o, l;
    const a = i();
    t.querySelectorAll("[data-icon-for]").forEach((c) => {
      var b;
      const g = S[c.dataset.iconFor], f = c.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && g && !f) {
        let M = c.firstElementChild;
        (!M || M.localName !== "ha-state-icon") && (c.textContent = "", M = document.createElement("ha-state-icon"), c.appendChild(M)), M.hass = a, M.stateObj = g;
      } else if (customElements.get("ha-icon")) {
        let M = c.firstElementChild;
        (!M || M.localName !== "ha-icon") && (c.textContent = "", M = document.createElement("ha-icon"), c.appendChild(M)), M.icon = f || ((b = g == null ? void 0 : g.attributes) == null ? void 0 : b.icon) || "mdi:circle-medium";
      } else c.textContent || (c.textContent = (c.dataset.letter || It(c.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (o = t.querySelectorAll) == null || o.call(t, ".tfIcon").forEach(ha), (l = t.classList) != null && l.contains("tfIcon") && ha(t), jo();
  }
  const fa = /* @__PURE__ */ new Map();
  function ha(t) {
    var g, f, b;
    const a = (((g = t.closest("[data-k]")) == null ? void 0 : g.dataset.k) || "") + "|" + (t.dataset.iconFor || ((f = t.querySelector("[data-icon-for]")) == null ? void 0 : f.dataset.iconFor) || t.getAttribute("aria-label") || ""), o = getComputedStyle(t), l = { backgroundColor: o.backgroundColor, color: o.color }, c = fa.get(a);
    fa.set(a, l), !(!c || c.backgroundColor === l.backgroundColor && c.color === l.color || (b = window.matchMedia) != null && b.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([c, l], { duration: 180, easing: "ease" });
  }
  const ur = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", qo = (t) => {
    const a = [t];
    for (; a.length; ) {
      const o = a.shift();
      if (o.localName === "svg") return o;
      o.shadowRoot && a.push(...o.shadowRoot.children), a.push(...o.children);
    }
    return null;
  };
  function fr(t) {
    var it, dt, Z;
    const a = t.localName === "svg" ? t : qo(t), o = a ? [...a.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!o.length) return !a;
    const l = (it = t.closest(".tfIcon")) == null ? void 0 : it.offsetWidth;
    if (l === void 0) return !0;
    if (!l) return !1;
    const c = l + "|" + o.map((bt) => bt.getAttribute("d") || bt.localName).join("|");
    if (t.dataset.fitted === c) return !0;
    let g = 1 / 0, f = 1 / 0, b = -1 / 0, M = -1 / 0;
    for (const bt of o) {
      const j = bt.getBBox(), vt = getComputedStyle(bt), W = vt.stroke !== "none" ? (parseFloat(vt.strokeWidth) || 0) / 2 : 0;
      !j.width && !j.height || (g = Math.min(g, j.x - W), f = Math.min(f, j.y - W), b = Math.max(b, j.x + j.width + W), M = Math.max(M, j.y + j.height + W));
    }
    if (!(b > g)) return !1;
    const O = (Z = (dt = a.viewBox) == null ? void 0 : dt.baseVal) != null && Z.width ? a.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, I = l - 14, F = I * O.width / Math.max(b - g, M - f), at = F / O.width;
    return t.localName === "svg" ? (t.style.width = F + "px", t.style.height = F + "px") : t.style.setProperty("--mdc-icon-size", F + "px"), a.style.translate = ((O.x + O.width / 2 - (g + b) / 2) * at).toFixed(2) + "px " + ((O.y + O.height / 2 - (f + M) / 2) * at).toFixed(2) + "px", t.dataset.fitted = c, !0;
  }
  let to = 0;
  function Aa(t = 0) {
    clearTimeout(to), [...n.querySelectorAll(ur)].filter((o) => !fr(o)).length && t < 5 && (to = setTimeout(() => Aa(t + 1), 300));
  }
  function jo() {
    clearTimeout(to), to = setTimeout(() => Aa(), 60);
  }
  const Si = (t) => {
    var a, o, l;
    return t.startsWith("light.") && S[t] && !Kt(t).icon && !((l = (o = (a = i()) == null ? void 0 : a.entities) == null ? void 0 : o[t]) != null && l.icon) ? "mdi:lightbulb" : "";
  }, $e = (t, a, o) => (a = a || Si(t), ' data-icon-for="' + nt(t) + '"' + (a ? ' data-icon-name="' + nt(a) + '"' : "") + (o ? ' data-letter="' + nt(o) + '"' : "")), _a = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Kt(t).rang ? "mdi:doorbell" : "", xe = (t, a, o, l) => nt([t, a, o, l ? JSON.stringify(l) : ""].join("|")), So = (t) => nt(JSON.stringify(t));
  function On(t, a) {
    var c, g;
    const o = nt(It(a) + ", " + ia(a));
    return '<div class="activityRow' + (Number.isFinite(Number((c = S[a]) == null ? void 0 : c.state)) && ((g = S[a]) == null ? void 0 : g.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + nt(t + "|" + a) + '" aria-label="' + o + '. Show the last 24 hours"' : '" aria-label="' + o + '"') + '><div class="tfIcon" aria-hidden="true"' + $e(a, _a(a)) + '></div><div><div class="activityRowName">' + nt(It(a)) + '</div><div class="activityRowMeta">' + nt(ia(a)) + "</div></div></div>";
  }
  const Wn = (t, a, o) => '<div class="activityRow" aria-label="' + nt(t + ", " + a) + '"><div class="tfIcon" aria-hidden="true"' + $e("", o, t) + '></div><div><div class="activityRowName">' + nt(t) + '</div><div class="activityRowMeta">' + nt(a) + "</div></div></div>";
  function zo(t) {
    var o;
    const a = ((o = S[t]) == null ? void 0 : o.state) === "on";
    return '<div class="activityRow tfPlug' + (a ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + xe("switch", "toggle", t) + '" aria-label="Turn ' + nt(It(t)) + (a ? " off" : " on") + '"' + $e(t) + '></button><button class="tfName" type="button" data-more="' + nt(t) + '" aria-label="' + nt(It(t) + ", " + ia(t) + ". More info") + '"><span class="activityRowName">' + nt(It(t)) + '</span><span class="activityRowMeta">' + nt(ia(t)) + "</span></button></div>";
  }
  const kn = (t) => {
    var a;
    return ((a = Vt.get(t)) == null ? void 0 : a.name) ?? It(t);
  }, Co = (t) => {
    var a;
    return ((a = Vt.get(t)) == null ? void 0 : a.text) ?? ia(t);
  };
  function Zr(t) {
    var o;
    const a = (o = Vt.get(t)) == null ? void 0 : o.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (a ? $e("", a, kn(t)) : $e(t, _a(t))) + '></div><div><div class="activityRowName">' + nt(kn(t)) + '</div><div class="activityRowMeta">' + nt(Co(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + nt(kn(t)) + '’s last 24 hours">' + jd + '</button></div><svg class="tfGraph" data-graph="' + nt(t) + '" role="img" aria-label="' + nt(kn(t)) + ', last 24 hours"></svg></div>';
  }
  function To(t, a, o, l, c = "", g = null, f = "") {
    const b = G && G.key === t;
    return '<section class="card tfCard' + (f ? " " + f : "") + (b ? " open" : "") + '" data-tf data-k="' + nt(t) + '" style="order:' + a + (b && G.h ? ";min-height:" + G.h + "px" : "") + '" aria-label="' + nt(o) + '"><div class="activityHeader">' + (g ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + nt(g) + '" aria-label="' + nt(o + (S[g] ? ", " + ia(g) : "") + ". More info") + '">' + nt(o) + "</button>" : '<div class="activityTitle">' + nt(o) + "</div>") + "</div>" + (b ? Zr(G.id) : '<div class="activityRows">' + l.join("") + "</div>" + c) + "</section>";
  }
  function na(t, a) {
    const o = "readings:" + t.id, l = t.readings.map((c) => On(o, c));
    return t.power != null && l.push(Wn("Power now", pr(t.power), "mdi:flash")), To(o, a, "Readings", l.concat(t.plugs.map(zo)));
  }
  function Vo(t, a) {
    var b;
    const o = "energy:" + t.id, [l, c] = [t.solar.find((M) => M.endsWith("_power")), t.solar.find((M) => M.endsWith("_today"))], g = [l, c].filter(Boolean).map((M) => On(o, M)), f = Number(((b = S[l]) == null ? void 0 : b.state) || 0) * 1e3;
    return ue.grid && (g.push(On(o, ue.grid)), g.push(Wn("House use", pr(f + Number(S[ue.grid].state)), "mdi:home-lightning-bolt"))), To(o, a, "Energy", g, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const hr = (t, a) => To("plant:" + t.id, a, It(t.id), t.readings.map((o) => On("plant:" + t.id, o)), "", t.id);
  function qn(t, a, o, l, c, g, f = null) {
    const b = o == null ? null : Math.max(0, Math.min(1, o)), M = b == null ? 0 : Math.round(b * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + nt(l) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + M + '"' + (c ? ' aria-valuetext="' + nt(c) + '"' : "") + ' data-drag="' + nt(t + "|" + a) + '">' + (f != null ? '<span class="was" aria-hidden="true" style="left:' + f + '%"></span>' : "") + (g ? b == null ? "" : '<b style="left:' + M + '%"></b>' : '<i style="width:' + M + '%"></i>') + "</div>";
  }
  const Mn = "move-assistant-house-last-bright", Ua = (() => {
    try {
      return JSON.parse(Fo.get(Mn)) || {};
    } catch {
      return {};
    }
  })();
  let mr = 0;
  const jn = (t, a) => {
    !a || Ua[t] === a || (Ua[t] = a, clearTimeout(mr), mr = setTimeout(() => Fo.set(Mn, JSON.stringify(Ua)), 500));
  }, Go = (t, a, o, l) => '<div class="tfStep" role="group" aria-label="' + nt(t) + '"><button type="button" data-act="' + o + '" aria-label="Lower ' + nt(t.toLowerCase()) + '">' + Kc.down + "</button><output>" + nt(a) + '</output><button type="button" data-act="' + l + '" aria-label="Raise ' + nt(t.toLowerCase()) + '">' + Kc.up + "</button></div>", Ce = (t, a, o) => '<div class="' + t + '" role="group" aria-label="' + nt(a) + '">' + o.filter(Boolean).map((l) => '<button type="button" data-act="' + l.act + '"' + (l.pressed != null ? ' aria-pressed="' + l.pressed + '"' : "") + (l.disabled ? " disabled" : "") + (l.aria ? ' aria-label="' + nt(l.aria) + '"' : "") + ">" + (l.html || nt(l.label)) + "</button>").join("") + "</div>", Lo = (t, a) => "width:" + Math.round(Math.max(0, Math.min(1, (t - a * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * a / 3).toFixed(2), ba = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", zn = (t, a) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + nt(It(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-blocks="' + nt(t) + '">' + [0, 1, 2, 3].map((o) => '<span><i style="' + Lo(a, o) + '"></i><b' + (a >= (o + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (o + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + ba(a) + '">' + Math.round(a) + "%</output></div>";
  function Kr(t, a) {
    t.querySelectorAll(":scope>span").forEach((l, c) => {
      l.firstElementChild.setAttribute("style", Lo(a, c)), l.lastElementChild.classList.toggle("lit", a >= (c + 1) * 25 - 12);
    });
    const o = t.querySelector(".tfTip");
    o.setAttribute("style", ba(a)), o.textContent = Math.round(a) + "%", t.setAttribute("aria-valuenow", String(Math.round(a))), t.setAttribute("aria-valuetext", Math.round(a) + "% open");
  }
  const gr = (t, a) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + nt(It(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-drag="tilt|' + nt(t) + '"><i style="width:calc((100% - 8px) * ' + a / 100 + ')"></i><span' + (a > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (a > 92 ? ' class="lit"' : "") + ">Open</span></div>", Uo = (t, a, o) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + nt(It(t)) + '">' + [
    Yt(t, mh) && ["open", "Open", "open_cover", a >= 100 && !o],
    Yt(t, vh) && ["stop", "Stop", "stop_cover", !1],
    Yt(t, gh) && ["close", "Close", "close_cover", a <= 0 && !o]
  ].filter(Boolean).map(([l, c, g, f]) => '<button type="button" data-act="' + xe("cover", g, t) + '" aria-label="' + c + '"' + (f ? " disabled" : "") + ">" + bh[l] + "</button>").join("") + "</div>", vr = (t, a) => '<button class="tfIcon' + (a.art ? " art" : "") + '" type="button" data-act="' + a.button.act + '" aria-label="' + nt(a.button.label) + '"' + (a.art ? ' style="background-image:url(&quot;' + nt(a.art) + '&quot;)"' : $e(t, a.icon)) + "></button>", $r = (t) => '<button class="tfName" type="button" data-more="' + nt(t) + '" aria-label="' + nt(It(t) + ", " + ia(t) + ". More info") + '"><span class="activityRowName">' + nt(It(t)) + '</span><span class="activityRowMeta">' + nt(ia(t)) + "</span></button>";
  function Yo(t, a = !1, o = null) {
    const l = Y(t), c = t.startsWith("light.") && br(t) && !(o && Fi(t) < 3), g = o || (a && t.startsWith("light.") ? ["bright"] : null), f = c ? ['<div class="tfDacPad" data-dac="' + (a ? "more:" : o ? "dash:" : "tile:") + nt(t) + '"></div>'] : l.sections.map((b, M) => b && (!g || g.includes((l.parts || [])[M])) ? b : "").filter(Boolean);
    return '<div class="tfAction' + (c ? " tfDac" : "") + (l.on ? " on" : "") + '" data-k="' + nt(t) + '"' + (l.tone ? ' data-tone="' + l.tone + '"' : "") + Hn(t) + '><div class="tfActionHead">' + vr(t, l) + $r(t) + "</div>" + f.join("") + "</div>";
  }
  const wa = "dual-controller-v3", on = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let eo = null;
  async function Xr() {
    if (eo || customElements.get(wa)) return;
    eo = "loading";
    const t = await Promise.resolve().then(() => B({ type: "lovelace/resources" })).catch(() => null), a = Array.isArray(t) && t.some((l) => /dual-axis-controller/i.test(l.url || ""));
    if (await Promise.race([customElements.whenDefined(wa), new Promise((l) => setTimeout(l, a ? 8e3 : 0))]), customElements.get(wa)) return;
    const o = Object.assign(document.createElement("script"), { src: on });
    o.onerror = () => {
      eo = "failed", U();
    }, document.head.appendChild(o);
  }
  const Oa = /* @__PURE__ */ new Map(), Ya = (t) => (Ht.lightStyles[t] || Ht.lights) === "dac", Ea = () => Ht.lights === "dac" || Object.values(Ht.lightStyles).includes("dac");
  function br(t) {
    return Ya(t) && !!customElements.get(wa);
  }
  const ao = (t) => Ht.lightPads[t] || Ht.dacPad, Ci = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !v.classList.contains("light") },
      callService: (a, o, l, ...c) => t.callService(a, ...ta(a, o, l), ...c)
    };
  }, Ti = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", p = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Ti })).dataset.tf = "");
  }, m = /* @__PURE__ */ new Map(), x = new ResizeObserver((t) => t.forEach(({ target: a }) => {
    const o = a.parentElement;
    !o || !a.offsetHeight || (o.style.removeProperty("min-height"), m.set(o.dataset.dac, o.offsetHeight));
  }));
  function T(t) {
    t.querySelectorAll("[data-dac]").forEach((a) => {
      const o = a.dataset.dac;
      let l = Oa.get(o);
      if (!l) {
        const c = o.slice(o.indexOf(":") + 1);
        l = document.createElement(wa), l.setConfig({ type: "custom:" + wa, entity: c, pad: ao(c), tap_action: { action: "none" } }), Oa.set(o, l);
      }
      l.hass = Ci(), l.parentNode !== a && a.replaceChildren(l), !l.offsetHeight && m.has(o) && (a.style.minHeight = m.get(o) + "px"), x.observe(l), p(l);
    });
  }
  function H() {
    const t = Ci();
    Oa.forEach((a, o) => {
      a.isConnected ? a.hass = t : Oa.delete(o);
    });
  }
  customElements.whenDefined(wa).then(() => {
    k && (L != null && L.querySelector("[data-tf]")) && Xs(oa);
  });
  const N = (t, a, o) => C.has(t + "|" + a) ? C.get(t + "|" + a) : o;
  function Y(t) {
    var g;
    const a = S[t], o = a.attributes, l = t.split(".")[0], c = (f, b) => ({ act: xe(f, "toggle", t), label: b });
    if (l === "light") {
      const f = a.state === "on", b = Ut(t), [M, O] = Dn(t), I = N("bright", t, wo(a));
      f && jn(t, wo(a));
      const F = N("ct", t, f && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), at = N("hue", t, f && Gd.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null);
      return { on: f, button: c("light", "Turn " + It(t) + (f ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        yn(t) && qn("bright", t, I / 100, It(t) + " brightness", I + "%", !1, f ? null : Ua[t] ?? null),
        b.includes("color_temp") && qn("ct", t, F == null ? null : (F - M) / (O - M), It(t) + " warm to cool", F == null ? "" : Math.round(F) + " kelvin", !0),
        b.some((it) => Gd.includes(it)) && qn("hue", t, at == null ? null : at / 360, It(t) + " colour", "", !0)
      ] };
    }
    if (l === "climate") {
      const f = o.target_temp_step || 0.5, b = Number(o.temperature);
      return { on: a.state !== "off", tone: a.state === "cool" || o.hvac_action === "cooling" ? "cool" : "heat", button: c("climate", "Turn " + It(t) + (a.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(b) && Go("Target temperature", Ra(b) + " °C", xe("climate", "set_temperature", t, { temperature: b - f }), xe("climate", "set_temperature", t, { temperature: b + f })),
        Ce("tfSeg", "Mode", (o.hvac_modes || []).map((M) => ({ label: Ie(M), act: xe("climate", "set_hvac_mode", t, { hvac_mode: M }), pressed: a.state === M })))
      ] };
    }
    if (l === "cover") {
      const f = a.state === "opening" || a.state === "closing", b = a.state === "closed", M = _e(t), O = Mo(t);
      return { on: !b, tone: "blue", icon: ep[qd(a)][b ? 1 : 0], button: c("cover", (b ? "Open " : "Close ") + It(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Yt(t, tp) && zn(t, M),
        O != null && gr(t, O),
        Uo(t, M, f)
      ] };
    }
    if (l === "humidifier") {
      const f = Number(o.humidity);
      return { on: a.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: c("humidifier", "Turn " + It(t) + (a.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && Go("Target humidity", f + "%", xe("humidifier", "set_humidity", t, { humidity: f - 1 }), xe("humidifier", "set_humidity", t, { humidity: f + 1 })),
        ((g = o.available_modes) == null ? void 0 : g.length) && Ce("tfSeg", "Mode", o.available_modes.map((b) => ({ label: Ie(b), act: xe("humidifier", "set_mode", t, { mode: b }), pressed: o.mode === b })))
      ] };
    }
    if (l === "media_player") {
      const f = a.state === "playing", b = a.state === "off" || a.state === "standby", M = N("vol", t, o.volume_level), O = b ? { act: xe("media_player", Yt(t, fh) ? "turn_on" : "toggle", t), label: "Turn " + It(t) + " on" } : a.state === "playing" || a.state === "paused" ? { act: xe("media_player", "media_play_pause", t), label: (f ? "Pause " : "Play ") + It(t) } : { act: xe("media_player", Yt(t, hh) ? "turn_off" : "toggle", t), label: "Turn " + It(t) + " off" };
      return { on: !b, tone: "blue", art: !b && o.entity_picture ? o.entity_picture : null, button: O, parts: ["playback", "volume"], sections: b ? [] : [
        (Yt(t, Xc) || Yt(t, Jc) || Yt(t, $c) || Yt(t, Qc)) && Ce("tfSeg", "Playback", [
          { html: ad.prev, aria: "Previous", act: xe("media_player", "media_previous_track", t), disabled: !Yt(t, Xc) },
          { html: f ? ad.pause : ad.play, aria: f ? "Pause" : "Play", act: xe("media_player", "media_play_pause", t), disabled: !(Yt(t, $c) || Yt(t, Qc)) },
          { html: ad.next, aria: "Next", act: xe("media_player", "media_next_track", t), disabled: !Yt(t, Jc) }
        ]),
        Yt(t, uh) && M != null && qn("vol", t, M, It(t) + " volume", Math.round(M * 100) + "%")
      ] };
    }
    if (l === "vacuum") {
      const f = a.state === "cleaning", b = o.rooms || [], M = (I) => b.includes(I) ? b.filter((F) => F !== I) : b.concat(I), O = xe("vacuum", f ? "pause" : "start", t, Qi(t) ? { rooms: b } : null);
      return { on: f || a.state === "returning", tone: "blue", button: { act: O, label: (f ? "Pause " : "Start ") + It(t) }, parts: ["controls", "rooms"], sections: [
        Ce("tfSeg", It(t), [
          { label: f ? "Pause" : "Start", act: O },
          { label: "Dock", act: xe("vacuum", "return_to_base", t), disabled: a.state === "docked" },
          { label: "Locate", act: xe("vacuum", "locate", t) }
        ]),
        Qi(t) && Ce("tfChips", "Rooms to clean", ue.rooms.filter((I) => I.id !== "balcony").map((I) => ({ label: I.name, act: xe("vacuum", "set_rooms", t, { rooms: M(I.name) }), pressed: b.includes(I.name) })))
      ] };
    }
    if (l === "lock") {
      const f = a.state === "locked";
      return { on: !f, tone: "heat", button: { act: xe("lock", f ? "unlock" : "lock", t), label: (f ? "Unlock " : "Lock ") + It(t) }, parts: ["controls"], sections: [
        Ce("tfSeg", It(t), [
          { label: "Lock", act: xe("lock", "lock", t), pressed: f },
          { label: "Unlock", act: xe("lock", "unlock", t), pressed: a.state === "unlocked" },
          Yt(t, Eh) && { label: "Open", act: xe("lock", "open", t), pressed: a.state === "open" }
        ])
      ] };
    }
    if (l === "alarm_control_panel") {
      const f = a.state === "disarmed";
      return { on: !f, tone: a.state === "triggered" ? "alarm" : "blue", button: { act: xe("alarm_control_panel", f ? "alarm_arm_away" : "alarm_disarm", t), label: f ? "Arm " + It(t) + ", away" : "Disarm " + It(t) }, parts: ["controls"], sections: [
        Ce("tfSeg", It(t), Dh.filter(([, , , b]) => !b || Yt(t, b)).map(([b, M, O]) => ({ label: M, act: xe("alarm_control_panel", O, t), pressed: a.state === b })))
      ] };
    }
    if (l === "valve") {
      const f = a.state === "open";
      return { on: f, tone: "blue", icon: "mdi:sprinkler-variant", button: c("valve", (f ? "Close " : "Open ") + It(t)), parts: ["controls"], sections: [
        Ce("tfSeg", It(t), [
          { label: "Open", act: xe("valve", "open_valve", t), pressed: f },
          { label: "Close", act: xe("valve", "close_valve", t), pressed: !f }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: It(t) }, sections: [] };
  }
  const rt = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Ra(t)) + "°";
  function K(t) {
    var bt;
    const a = (j) => t.readings.find((vt) => Kt(vt).device_class === j), o = a("temperature"), l = a("humidity"), c = (j) => {
      var vt;
      return Number((vt = S[j]) == null ? void 0 : vt.state);
    }, g = (j) => t.actions.filter((vt) => j.test(vt)), f = t.lights.filter((j) => {
      var vt;
      return ((vt = S[j]) == null ? void 0 : vt.state) === "on";
    }), b = g(/^cover\./), M = b.filter((j) => {
      var vt;
      return ((vt = S[j]) == null ? void 0 : vt.state) !== "closed";
    }), O = [...new Set(b.map((j) => qd(S[j])))], I = g(/^climate\./)[0], F = g(/^humidifier\./)[0], at = g(/^media_player\./), it = at.find((j) => {
      var vt;
      return ((vt = S[j]) == null ? void 0 : vt.state) === "playing";
    }) || at.find((j) => {
      var vt;
      return ((vt = S[j]) == null ? void 0 : vt.state) === "paused";
    }), dt = t.plugs.filter((j) => {
      var vt;
      return ((vt = S[j]) == null ? void 0 : vt.state) === "on";
    }), Z = [];
    if (o && Number.isFinite(c(o)) && Z.push({ key: "temp", id: o, kind: "reading", icon: Oo(o), label: "Temperature", value: Ra(c(o)) + "°" }), l && Number.isFinite(c(l)) && Z.push({ key: "hum", id: l, kind: "reading", icon: Oo(l), label: "Humidity", value: Math.round(c(l)) + "%" }), t.lights.length && Z.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Oo("", "mdi:lightbulb"),
      label: "Lights",
      value: f.length ? f.length + " of " + t.lights.length + " on" : "All off",
      short: f.length ? f.length + " on" : "Off",
      on: f.length > 0,
      light: f.length ? Qn(f[0]) : "",
      acts: t.lights.map((j) => ["light", f.length ? "turn_off" : "turn_on", j]),
      aria: (f.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), b.length) {
      const j = O.length === 1 ? wh[O[0]] : "covers", vt = Math.round(b.reduce((W, Ot) => W + Fn(Ot), 0) / b.length);
      Z.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: M.length ? an([146, 107, 199]) : "",
        icon: Oo("", ((bt = ep[O[0]]) == null ? void 0 : bt[M.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Ie(j),
        value: vt <= 0 ? "Closed" : vt >= 100 ? "Open" : vt + "% open",
        short: vt <= 0 ? "Closed" : vt + "%",
        on: M.length > 0,
        acts: b.map((W) => ["cover", M.length ? "close_cover" : "open_cover", W]),
        aria: (M.length ? "Close the " : "Open the ") + j + " in " + t.name
      });
    }
    if (I) {
      const j = Kt(I), vt = S[I].state === "off";
      Z.push({
        key: "climate",
        kind: "control",
        tone: j.hvac_action === "cooling" ? "cool" : "heat",
        light: yo(I) ? an(yo(I)) : "",
        icon: Oo(I),
        label: It(I),
        value: vt ? "Off" : Ie(j.hvac_action || S[I].state) + " · " + rt(j.temperature),
        short: vt ? "Off" : rt(j.temperature),
        on: !vt,
        acts: [["climate", "toggle", I]],
        aria: "Turn " + It(I) + (vt ? " on" : " off")
      });
    }
    if (F) {
      const j = S[F].state === "on";
      Z.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: j ? an([33, 150, 243]) : "",
        icon: Oo("", "mdi:air-humidifier"),
        label: It(F),
        value: j ? "On · " + Kt(F).humidity + "%" : "Off",
        short: j ? Kt(F).humidity + "%" : "Off",
        on: j,
        acts: [["humidifier", "toggle", F]],
        aria: "Turn " + It(F) + (j ? " off" : " on")
      });
    }
    if (at.length) {
      const j = it || at[0], vt = S[j], W = vt.state === "playing";
      Z.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: yo(j) ? an(yo(j)) : "",
        icon: Oo(j),
        label: It(j),
        value: ia(j),
        short: W ? "Playing" : vt.state === "paused" ? "Paused" : Ie(vt.state),
        on: W,
        acts: [["media_player", vt.state === "playing" || vt.state === "paused" ? "media_play_pause" : "toggle", j]],
        aria: (W ? "Pause " : "Play ") + It(j)
      });
    }
    return t.plugs.length && Z.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: dt.length ? an([255, 193, 7]) : "",
      icon: Oo("", "mdi:power-plug"),
      label: "Plugs",
      value: dt.length ? dt.length + " of " + t.plugs.length + " on" : "All off",
      short: dt.length ? dt.length + " on" : "Off",
      on: dt.length > 0,
      acts: t.plugs.map((j) => ["switch", dt.length ? "turn_off" : "turn_on", j]),
      aria: (dt.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((j) => Z.push(Kt(j).device_class === "moisture" ? { key: "alert:" + j, kind: "alert", icon: Oo(j), label: "Water leak" } : { key: "note:" + j, kind: "note", icon: Oo(j), label: It(j) + " " + ia(j).toLowerCase() })), Z;
  }
  const Ct = (t, a) => {
    const o = (l) => t.actions.filter((c) => l.test(c));
    return {
      lights: t.lights,
      covers: o(/^cover\./),
      climate: o(/^climate\./).slice(0, 1),
      humidifier: o(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const l = o(/^media_player\./);
        return [l.find((c) => {
          var g;
          return ((g = S[c]) == null ? void 0 : g.state) === "playing";
        }) || l.find((c) => {
          var g;
          return ((g = S[c]) == null ? void 0 : g.state) === "paused";
        }) || l[0]].filter(Boolean);
      })()
    }[a] || [];
  }, At = (t, a, o) => '<button class="' + a + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + So(t.acts) + '" aria-label="' + nt(t.aria) + '" aria-pressed="' + t.on + '">' + o + "</button>", St = (t) => '<button class="tfAName" type="button" data-go="' + nt(t.id) + '" aria-label="Open ' + nt(t.name) + '">' + nt(t.name) + "</button>";
  function Zt(t, a, o = !1) {
    const l = a.find((b) => b.key === "lights"), c = !!(l != null && l.on), g = "", f = '<span class="tfAreaGlyph"' + $e("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return o || !l ? '<span class="tfIcon tfAreaIcon' + (c ? " on" : "") + '"' + g + ' aria-hidden="true">' + f + "</span>" : '<button class="tfIcon tfAreaIcon' + (c ? " on" : "") + '" type="button"' + g + ' data-acts="' + So(l.acts) + '" aria-label="' + nt(l.aria) + '" aria-pressed="' + c + '">' + f + "</button>";
  }
  const Gt = (t) => t.filter((a) => a.kind === "alert" || a.kind === "note").map((a) => '<span class="sourceTag">' + nt(a.label) + "</span>").join(" "), Nt = (t) => t.readings.find((a) => Kt(a).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((a) => S[a]) || null, ee = (t, a) => {
    const o = It(a);
    return o.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? Ie(o.slice(t.name.length + 1)) : o;
  };
  function jt(t) {
    const a = S[t], o = Kt(t), l = t.split(".")[0], c = Number(a.state);
    if (a.state === "unavailable") return { text: "Unavailable" };
    if (l === "sensor" && Number.isFinite(c)) {
      if (o.device_class === "temperature") return { text: rt(c) };
      const g = o.unit_of_measurement || "";
      return g === "%" ? { text: Math.round(c) + "%" } : { text: Ra(c, Number.isInteger(c) ? 0 : 1), unit: g };
    }
    if (l === "climate" && (o.current_temperature ?? o.temperature) != null) return { text: rt(o.current_temperature ?? o.temperature) };
    if (l === "light") return { text: a.state !== "on" ? "Off" : yn(t) ? wo(a) + "%" : "On" };
    if (l === "cover") {
      const g = Fn(t);
      return { text: g <= 0 ? "Closed" : g >= 100 ? "Open" : g + "%" };
    }
    return l === "humidifier" ? { text: a.state === "on" ? o.humidity + "%" : "Off" } : l === "media_player" ? { text: a.state === "playing" ? "Playing" : a.state === "paused" ? "Paused" : Ie(a.state) } : { text: ia(t) };
  }
  const _t = (t, a, o) => {
    const l = o.find((b) => b.key === "temp"), c = o.find((b) => b.key === "hum"), g = Kt(a), f = S[a].state === "off";
    return a.startsWith("climate.") ? [ee(t, a), f ? "Off" : Ie(g.hvac_action || S[a].state) + (g.temperature != null ? " · " + rt(g.temperature) : ""), c && c.value + " humidity"].filter(Boolean).join(" · ") : [!(l && l.id === a) && ee(t, a), l && l.id !== a && l.value, c && c.id !== a && c.value + " humidity"].filter(Boolean).join(" · ");
  };
  function Jt(t, a, o) {
    const l = o && jt(o), c = o ? _t(t, o, a) : "", g = (M) => {
      const O = Ct(t, M.key);
      return O.length === 1 ? O[0] : "group:" + t.id + ":" + M.key;
    }, f = a.filter((M) => M.kind === "control").slice(0, 4).map((M) => '<div class="tfATile' + (M.on ? " on" : "") + '" data-tone="' + M.tone + '"' + (M.light ? ' data-light style="' + M.light + '"' : "") + ">" + At(M, "tfIcon", M.icon) + '<button class="tfName" type="button" data-more="' + nt(g(M)) + '" aria-label="' + nt(t.name + " " + M.label.toLowerCase() + ", " + M.value + ". Open") + '"><span class="activityRowName">' + nt(M.label) + '</span><span class="activityRowMeta">' + nt(M.value) + "</span></button></div>"), b = Gt(a);
    return '<div class="workoutPanelTop">' + Zt(t, a) + '<div class="tfATitle">' + St(t) + "</div>" + (b ? '<div class="tfATags">' + b + "</div>" : "") + "</div>" + (o ? '<button class="tfABig" type="button" data-more="' + nt(o) + '" aria-label="' + nt(It(o) + ", " + ia(o) + ". More info") + '"><span class="tfABigMain' + (l.text.length > 7 ? " long" : "") + '">' + nt(l.text) + (l.unit ? '<span class="tfABigUnit">' + nt(l.unit) + "</span>" : "") + "</span>" + (c ? '<span class="tfABigSub">' + nt(c) + "</span>" : "") + "</button>" : "") + (f.length ? '<div class="tfATiles">' + f.join("") + "</div>" : "");
  }
  function $t(t) {
    const a = t.id === Lt, o = K(t), l = Nt(t), c = l && jt(l), g = [...o.filter((f) => f.kind === "control"), ...o.filter((f) => f.kind !== "control" && f.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (a ? " active" : "") + '" data-area="' + nt(t.id) + '" tabindex="0" aria-expanded="' + a + '" aria-label="' + nt(t.name) + '"><div class="panelExpanded"' + (a ? "" : " inert") + ">" + Jt(t, o, l) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + Zt(t, o, !0) + '<span class="tfACName">' + nt(t.name) + '</span></div><span class="tfACMain">' + (c ? nt(c.text + (c.unit ? " " + c.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + g.map((f) => '<span class="tfACTile"><span class="tfIcon' + (f.kind === "alert" ? " alert" : "") + '"' + (f.on && f.light ? ' data-light style="' + f.light + '"' : "") + ">" + f.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Te = [];
  const Rt = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + Te.map($t).join("") + "</section></div>", He = (t) => t.startsWith("room:"), De = (t) => Te.find((a) => "room:" + a.id === t);
  function rn(t, a) {
    const o = K(t), l = Nt(t), c = l && jt(l), g = l ? _t(t, l, o) : "", f = c ? c.text + (c.unit ? " " + c.unit : "") : "", b = (at) => {
      const it = Ct(t, at.key);
      return it.length === 1 ? it[0] : "group:" + t.id + ":" + at.key;
    }, M = o.filter((at) => at.kind === "control").slice(0, 4), O = (at) => at.on && at.light ? ' data-light style="' + at.light + '"' : "", I = M.map((at) => '<button class="tfIcon' + (at.on ? " on" : "") + '" type="button" data-tone="' + at.tone + '"' + O(at) + ' data-more="' + nt(b(at)) + '" aria-label="' + nt(at.label + ", " + at.value + ". Open its controls") + '">' + at.icon + "</button>"), F = M.map((at) => '<button class="tfRoomDev" type="button" data-more="' + nt(b(at)) + '" aria-label="' + nt(at.label + ", " + at.value + ". Open its controls") + '"><span class="tfIcon' + (at.on ? " on" : "") + '" data-tone="' + at.tone + '"' + O(at) + ">" + at.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + nt(at.label) + '</span><span class="activityRowMeta">' + nt(at.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + nt(a) + '" data-go="' + nt(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + $e("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + nt(t.id) + '" aria-label="Open ' + nt(t.name) + '"><span class="activityRowName">' + nt(t.name) + "</span>" + (f || g ? '<span class="activityRowMeta">' + (f ? '<span class="tfRoomInline">' + nt(f) + (g ? " · " : "") + "</span>" : "") + nt(g) + "</span>" : "") + "</button></div>" + (f ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + nt(f) + "</span>" + (g ? '<span class="tfRoomSub">' + nt(g) + "</span>" : "") + "</div>" : "") + (I.length ? '<div class="tfRoomDevices">' + I.join("") + '</div><div class="tfRoomHeads">' + F.join("") + "</div>" : "") + "</div>";
  }
  const no = () => [
    { key: "home", name: "Home", ids: ue.homeVacuums },
    ...ue.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], Vn = (t, a, o) => t + " " + (t === 1 ? a : o), xa = () => (V.favourites ?? yt.favorite_entities ?? []).filter((t) => S[t]);
  function wr() {
    if (!le) {
      const a = Object.entries(ea).sort((l, c) => c[1] - l[1]).map(([l]) => l), o = ue.rooms.flatMap((l) => l.actions);
      le = [.../* @__PURE__ */ new Set([...te, ...a, ...o.filter((l) => Y(l).on), ...o])];
    }
    const t = xa();
    return le.filter((a) => S[a] && S[a].state !== "unavailable" && !t.includes(a));
  }
  let ye = !1;
  function sn() {
    if (!ye || V.favSeeded || !ue.rooms.length) return;
    const t = (o) => Object.keys(S).find((l) => Qi(l) && o(l)), a = [t((o) => o.startsWith("climate.")), t((o) => o.startsWith("cover.") && /curtain/.test(o)), t((o) => o.startsWith("valve.")), ue.security.locks[0]];
    V = { ...V, favourites: [.../* @__PURE__ */ new Set([...V.favourites ?? yt.favorite_entities ?? [], ...a.filter(Boolean)])], favSeeded: !0 }, La();
  }
  const Sn = () => V.suggest ?? !yt.hide_suggested_entities;
  function Gn() {
    const t = new Set(V.favHidden || []), a = xa().filter((l) => !t.has(l)), o = Sn() ? wr().filter((l) => !t.has(l) && as(l)) : [];
    return [...a, ...o].slice(0, Rh);
  }
  const xr = (t) => {
    const a = xa().includes(t);
    return '<button class="tfStar" type="button" data-star="' + nt(t) + '" aria-pressed="' + a + '" aria-label="Favourite: ' + nt(It(t)) + '">' + _h(a) + "</button>";
  };
  function Un(t, { area: a = !1, star: o = !1, plain: l = !1, say: c = null, alert: g = !1 } = {}) {
    var dt, Z, bt, j, vt, W;
    const f = l && ((vt = (dt = i()) == null ? void 0 : dt.devices) == null ? void 0 : vt[(j = (bt = (Z = i()) == null ? void 0 : Z.entities) == null ? void 0 : bt[t]) == null ? void 0 : j.device_id]), b = f && (f.name_by_user || f.name) || It(t), M = t.split(".")[0], O = !l && od.includes(M) ? Y(t) : null, I = O ? O.on : ["on", "open", "playing"].includes((W = S[t]) == null ? void 0 : W.state), F = l ? null : O ? O.button : xh.includes(M) ? { act: xe(M, "toggle", t), label: "Turn " + It(t) + (I ? " off" : " on") } : M === "scene" || M === "script" ? { act: xe(M, "turn_on", t), label: "Run " + It(t) } : null, at = (c ?? ia(t)) + (a && Se.get(t) ? " · " + Se.get(t) : ""), it = (O == null ? void 0 : O.icon) || _a(t);
    return '<div class="activityRow' + (F ? " tfPlug" : "") + (I ? " on" : "") + (o ? " tfPick" : "") + (g ? " alert" : "") + '" data-k="' + nt((a ? "fav:" : "row:") + t) + '" data-tone="' + (M === "light" ? "light" : (O == null ? void 0 : O.tone) || "blue") + '"' + Hn(t) + ">" + (F && !o ? '<button class="tfIcon" type="button" data-act="' + F.act + '" aria-label="' + nt(F.label) + '"' + $e(t, it) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + $e(t, it) + "></div>") + '<button class="tfName" type="button" data-more="' + nt(t) + '" aria-label="' + nt(b + ", " + at + ". More info") + '"><span class="activityRowName">' + nt(b) + '</span><span class="activityRowMeta">' + nt(at) + "</span></button>" + (o ? xr(t) : "") + "</div>";
  }
  const ln = () => {
    var t;
    return S[(t = V.sources) == null ? void 0 : t.weather] ? V.sources.weather : S["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(S).find((a) => a.startsWith("weather."));
  };
  function Pa() {
    var o;
    const t = (l) => Object.keys(S).filter((c) => c.startsWith("binary_sensor.") && l.includes(Kt(c).device_class));
    return ((o = Tt.alert_entities) != null && o.length ? Tt.alert_entities : [...t(["moisture", "smoke", "gas"]).map((l) => ({ entity: l, severity: "alert" })), ...t(nd).map((l) => ({ entity: l, severity: "warning" }))]).filter((l) => S[l.entity]).map((l) => ({ ...l, on: ["on", "open", "unlocked", "triggered", "problem"].includes(S[l.entity].state) }));
  }
  function Jr() {
    const t = Object.keys(zd), a = /* @__PURE__ */ new Set(), o = [];
    return (yt.shortcuts || []).forEach((l) => {
      if (l.type === "summary") {
        if (!t.includes(l.key) || a.has(l.key)) return;
        a.add(l.key);
      }
      o.push(l);
    }), t.forEach((l) => {
      a.has(l) || o.push({ type: "summary", key: l });
    }), o;
  }
  function yr() {
    var bt;
    const t = ((bt = i()) == null ? void 0 : bt.entities) || {}, a = (j) => Kt(j).device_class, o = Object.keys(S).filter((j) => j.startsWith("sensor.") && a(j) === "battery" || j.startsWith("binary_sensor.") && ["battery", "problem"].includes(a(j))), l = ue.rooms.flatMap((j) => j.plants.map((vt) => vt.id));
    if (!o.length && !l.length) return null;
    const c = (j) => {
      var W;
      const vt = (W = t[j]) == null ? void 0 : W.device_id;
      return !!vt && Object.keys(S).some((Ot) => {
        var Ne;
        return Ot.startsWith("binary_sensor.") && ((Ne = t[Ot]) == null ? void 0 : Ne.device_id) === vt && a(Ot) === "battery_charging" && S[Ot].state === "on";
      });
    }, g = (j) => j.startsWith("vacuum.") ? Kt(j).battery_level <= 20 && S[j].state !== "docked" : j.startsWith("binary_sensor.") ? a(j) === "battery" && S[j].state === "on" : parseFloat(S[j].state) <= 20 && !c(j), f = [...o, ...ue.vacuums].filter((j) => S[j] && g(j)), b = [...o.filter((j) => a(j) === "problem" && S[j].state === "on"), ...l.filter((j) => {
      var vt;
      return ((vt = S[j]) == null ? void 0 : vt.state) === "problem";
    })], M = o.filter((j) => S[j].state === "unavailable"), O = [.../* @__PURE__ */ new Set([...f, ...b, ...M])], I = (j) => {
      const vt = parseFloat(S[j].state);
      return a(j) === "battery" && Number.isFinite(vt) ? vt : 101;
    }, F = [...l, ...ue.vacuums, ...[...o].sort((j, vt) => I(j) - I(vt))].filter((j) => S[j] && !O.includes(j)), at = /* @__PURE__ */ new Map();
    F.forEach((j) => {
      var W;
      const vt = ((W = ue.areaOf) == null ? void 0 : W.call(ue, j)) || "";
      at.set(vt, [...at.get(vt) || [], j]);
    });
    const it = (j) => {
      const vt = ue.rooms.findIndex((W) => W.id === j);
      return j === "" ? 1 / 0 : vt < 0 ? ue.rooms.length : vt;
    }, dt = [...at.keys()].sort((j, vt) => it(j) - it(vt)), Z = (j) => {
      var vt, W, Ot, Ne;
      return ((vt = ue.rooms.find((fe) => fe.id === j)) == null ? void 0 : vt.name) || ((Ne = (Ot = (W = i()) == null ? void 0 : W.areas) == null ? void 0 : Ot[j]) == null ? void 0 : Ne.name) || j;
    };
    return {
      value: [f.length && Vn(f.length, "low battery", "low batteries"), b.length && Vn(b.length, "problem", "problems"), M.length && Vn(M.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: O, alert: !0 }, ...dt.map((j) => ({ name: j ? Z(j) : dt.length > 1 ? "Other devices" : "Devices", ids: at.get(j) }))].filter((j) => j.ids.length)
    };
  }
  function Li() {
    var Ba;
    const t = ue.rooms, a = ue.security, o = (Xt, Ge) => Xt.actions.filter((pi) => Ge.test(pi)), l = (Xt) => t.map((Ge) => ({ name: Ge.name, ids: Xt(Ge) })).filter((Ge) => Ge.ids.length), c = t.flatMap((Xt) => Xt.lights), g = c.filter((Xt) => {
      var Ge;
      return ((Ge = S[Xt]) == null ? void 0 : Ge.state) === "on";
    }).length, f = t.map((Xt) => Xt.readings.find((Ge) => Kt(Ge).device_class === "temperature")).filter(Boolean).map((Xt) => Number(S[Xt].state)).filter(Number.isFinite), [b, M] = [Ra(Math.min(...f)), Ra(Math.max(...f))], O = t.flatMap((Xt) => o(Xt, /^media_player\./)), I = O.filter((Xt) => {
      var Ge;
      return ((Ge = S[Xt]) == null ? void 0 : Ge.state) === "playing";
    }).length, F = Pa(), at = F.filter((Xt) => Xt.severity === "warning" && Xt.on).length, it = a.locks.filter((Xt) => {
      var Ge;
      return ["unlocked", "jammed", "open"].includes((Ge = S[Xt]) == null ? void 0 : Ge.state);
    }).length, dt = a.alarms.filter((Xt) => {
      var Ge;
      return ((Ge = S[Xt]) == null ? void 0 : Ge.state) === "disarmed";
    }).length, Z = at ? Vn(at, "warning", "warnings") : null, bt = it ? it + " unlocked" : dt ? dt + " disarmed" : Z ? null : "All secure", j = yr(), vt = t.flatMap((Xt) => Xt.solar), W = vt.find((Xt) => Xt.endsWith("_power")), Ot = {
      light: c.length && { value: g ? g + " on" : "All off", groups: l((Xt) => Xt.lights) },
      climate: f.length && { value: b === M ? b + "°" : b + " - " + M + "°", groups: l((Xt) => [...Xt.readings.filter((Ge) => ["temperature", "humidity"].includes(Kt(Ge).device_class)), ...o(Xt, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [Z, bt].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((Xt) => Xt.ids.length) },
      media_players: O.length && { value: I ? I + " playing" : "No media playing", groups: l((Xt) => o(Xt, /^media_player\./)) },
      maintenance: j,
      energy: ue.grid && { value: pr(Number(((Ba = S[W]) == null ? void 0 : Ba.state) || 0) * 1e3 + Number(S[ue.grid].state)) + " now", groups: [{ name: "Energy", ids: [...vt, ue.grid] }] }
    }, Ne = [], fe = F.filter((Xt) => Xt.severity !== "warning" && Xt.on);
    return fe.length && Ne.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Vn(fe.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: fe.map((Xt) => Xt.entity) }] }), Jr().forEach((Xt) => {
      Xt.type !== "summary" ? Ne.push({ key: "path:" + Xt.path, name: Xt.label || Xt.path, icon: Xt.icon || "mdi:link-variant", colour: "", value: "" }) : !Xt.hidden && Ot[Xt.key] && !(V.hiddenSums || []).includes(Xt.key) && Ne.push({ key: Xt.key, ...zd[Xt.key], ...Ot[Xt.key] });
    }), Ne;
  }
  const kr = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + nt(t.key) + '" data-k="sum:' + nt(t.key) + '" aria-label="' + nt(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + Mi() + '"' : t.colour && ua(t.colour) ? ' style="' + ua(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? dr : "") + '<div class="tfIcon" aria-hidden="true"' + $e(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + nt(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + nt(t.value) + "</div>" : "") + "</div></div>";
  function Qr(t) {
    const a = xa();
    V = { ...V, favourites: a.includes(t) ? a.filter((o) => o !== t) : [...a, t], favHidden: (V.favHidden || []).filter((o) => o !== t) }, La(), Da();
  }
  function Yn(t) {
    document.querySelector("home-assistant") && (J.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Zo(t, a) {
    if (t.startsWith("path:")) {
      Yn(t.slice(5));
      return;
    }
    al("summary:" + t, a);
  }
  async function hd() {
    const t = (f) => Promise.resolve().then(() => B(f)).catch(() => null), [a, o, l, c] = await Promise.all([
      t({ type: "frontend/get_user_data", key: ap }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), g = (a == null ? void 0 : a.value) || {};
    V = { favourites: g.favourites ?? null, sources: g.sources, hiddenSums: g.hiddenSums, dash: g.dash, named: g.named, favHidden: g.favHidden, suggest: g.suggest, favSeeded: g.favSeeded }, yt = (o == null ? void 0 : o.value) || {}, Tt = (l == null ? void 0 : l.value) || {}, te = Array.isArray(c == null ? void 0 : c.entities) ? c.entities : [], le = null, Object.keys(S).length && Da(), Ai(), ye = !0, sn();
  }
  const bl = "HomeCore";
  async function Ai() {
    var l, c, g;
    const t = location.pathname.split("/")[1], a = V.named || [];
    if (!((c = (l = i()) == null ? void 0 : l.user) != null && c.is_admin) || !t || a.includes(t)) return;
    const o = () => {
      V = { ...V, named: [...a, t] }, La();
    };
    try {
      const f = (g = await B({ type: "lovelace/dashboards/list" })) == null ? void 0 : g.find((O) => O.url_path === t);
      if (!f || f.mode === "yaml") return;
      if (f.title === bl) {
        o();
        return;
      }
      const b = await B({ type: "lovelace/config", url_path: t }), M = ((b == null ? void 0 : b.views) || []).flatMap((O) => [...O.cards || [], ...(O.sections || []).flatMap((I) => I.cards || [])]);
      if (!M.length || !M.every((O) => (O == null ? void 0 : O.type) === "custom:move-assistant-card" && O.layout === "test-focus")) return;
      await B({ type: "lovelace/dashboards/update", dashboard_id: f.id, title: bl }), o();
    } catch {
    }
  }
  let oo = null, _i = 0, Mr = !1;
  const wl = (t) => {
    const a = t.split(".")[0], o = Kt(t).device_class;
    return Bh.includes(a) && (a !== "binary_sensor" || nd.includes(o) || !!cp[o]);
  }, Sr = (t) => t.startsWith("binary_sensor.") ? cp[Kt(t).device_class] : null;
  async function Ns() {
    var t;
    if (!(Mr || Date.now() - _i < 30 * 1e3)) {
      Mr = !0, _i = Date.now();
      try {
        const a = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(wl), o = a.length ? await B({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: a }) : null;
        oo = Array.isArray(o) ? o.filter((l) => l.entity_id && l.state != null && l.when) : null;
      } catch {
        oo = null;
      }
      Mr = !1, Da();
    }
  }
  function ts() {
    const t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = (c) => {
      if (!S[c.entity_id] || !wl(c.entity_id) || !as(c.entity_id) || ["unavailable", "unknown"].includes(c.state)) return;
      if (Sr(c.entity_id)) {
        const f = a.get(c.entity_id);
        c.state === "on" ? (!f || c.when > f.when + 1) && a.set(c.entity_id, { ...c, alarm: !0, cleared: null }) : f && !f.cleared && c.when > f.when && (f.cleared = c.when);
        return;
      }
      const g = t.get(c.entity_id);
      (!g || c.when > g.when + 1) && t.set(c.entity_id, c);
    };
    [...oo || []].sort((c, g) => c.when - g.when).forEach(o);
    const l = oo ? _i / 1e3 - 5 : 0;
    return Object.keys(S).forEach((c) => {
      var b;
      const g = S[c], f = g.last_changed ? Date.parse(g.last_changed) / 1e3 : 0;
      f > l && o({ entity_id: c, state: g.state, when: f, context_user_id: (b = g.context) == null ? void 0 : b.user_id });
    }), [...t.values(), ...a.values()].sort((c, g) => g.when - c.when).slice(0, Nh);
  }
  function xl(t) {
    var l;
    const a = t.context_user_id && Object.keys(S).find((c) => c.startsWith("person.") && Kt(c).user_id === t.context_user_id);
    if (a) return It(a);
    const o = (l = i()) == null ? void 0 : l.user;
    return o && t.context_user_id === o.id ? o.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function md(t) {
    const a = t.entity_id.split(".")[0], o = String(t.state);
    return a === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[o] || Ie(o).toLowerCase() : a === "cover" || a === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[o] || Ie(o).toLowerCase() : a === "binary_sensor" ? o === "on" ? "opened" : "closed" : a === "climate" ? o === "off" ? "turned off" : "set to " + Ie(o).toLowerCase() : a === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[o] || Ie(o).toLowerCase() : a === "alarm_control_panel" ? (dp[o] || Ie(o)).toLowerCase() : a === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[o] || Ie(o).toLowerCase() : o === "on" ? "turned on" : o === "off" ? "turned off" : Ie(o).toLowerCase();
  }
  function Wa(t) {
    const a = t.entity_id, o = t.alarm && Sr(a), l = It(a) + " " + (o ? o[0] : md(t)), c = o ? nn(t.when * 1e3) + (t.cleared ? " · " + o[1] + " since " + nn(t.cleared * 1e3) : "") : [xl(t), nn(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (o ? " alert" : "") + '"><div class="tfIcon' + (o ? " alert" : "") + '" aria-hidden="true"' + $e(a, _a(a)) + '></div><button class="tfName" type="button" data-more="' + nt(a) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + nt(l + ", " + c + ". More info") + '"><span class="activityRowName">' + nt(l) + '</span><span class="activityRowMeta">' + nt(c) + "</span></button></div>";
  }
  let io = null, Ko = 0;
  const gd = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function yl() {
    var a;
    if (Date.now() - Ko < 5 * 60 * 1e3) return;
    Ko = Date.now();
    const t = [];
    try {
      const o = ((a = await B({ type: "energy/get_prefs" })) == null ? void 0 : a.energy_sources) || [], l = (c) => o.filter((g) => g.type === c).flatMap((g) => c === "grid" ? (g.flow_from || []).map((f) => f.stat_energy_from) : [g.stat_energy_from]).filter(Boolean);
      for (const [c, g, f] of [["electricity", "Electricity", l("grid")], ["solar", "Solar", l("solar")], ["gas", "Gas", l("gas")], ["water", "Water", l("water")]]) {
        if (!f.length) continue;
        const b = await Promise.all(f.map((M) => Promise.resolve(B({ type: "recorder/statistic_during_period", statistic_id: M, calendar: { period: "day" }, types: ["change"] })).then((O) => Number(O == null ? void 0 : O.change) || 0, () => 0)));
        t.push({ key: c, name: g, id: f[0], ids: f, value: b.reduce((M, O) => M + O, 0), unit: Kt(f[0]).unit_of_measurement || (c === "gas" || c === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    io = t, Da();
  }
  let Ei = null, Ps = [];
  function Cr() {
    var g;
    const t = Ps = io != null && io.length ? io : gd.map(([f, b, M, O]) => {
      if (f === "solar") {
        const F = Object.keys(S).find((at) => at.endsWith("_solar_today") && !at.includes("made_up_energy"));
        F && Number.isFinite(Number(S[F].state)) && (M = Number(S[F].state));
      }
      const I = "sensor.made_up_energy_" + f;
      return S[I] = { entity_id: I, state: String(M), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: b + " today", unit_of_measurement: O, state_class: "total_increasing" } }, { key: f, name: b, id: I, value: M, unit: O };
    });
    Vt.clear(), t.some((f) => f.id === Ei) || (Ei = t[0].id);
    const a = t.map((f) => {
      const b = Number(f.value).toLocaleString(void 0, { maximumFractionDigits: f.value < 10 ? 2 : 1 }) + " " + f.unit, M = Ph[f.key], O = f.id === Ei;
      return Vt.set(f.id, { name: f.name, text: b, icon: M }), '<div class="activityRow tap' + (O ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + nt(f.id) + '" aria-pressed="' + O + '" aria-label="' + nt(f.name + ", " + b) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + $e("", M, f.name) + '></div><div><div class="activityRowName">' + nt(f.name) + '</div><div class="activityRowMeta">' + nt(b) + "</div></div></div>";
    }), o = t.find((f) => f.id === Ei), l = (((g = ke().opts.energy) == null ? void 0 : g.graph) || "above") === "below", c = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + nt(o.id) + '" role="img" aria-label="' + nt(o.name) + ', last 24 hours"></svg></div>';
    return To("dash:energy", 0, "Energy today", a, c, Li().some((f) => f.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (l ? "" : " graphAbove"));
  }
  function Is(t) {
    const a = L.querySelector(".tfDash-energy"), o = a == null ? void 0 : a.querySelector(".tfDashGraph svg");
    !o || t === Ei || (Ei = t, a.querySelectorAll("[data-energy-pick]").forEach((l) => {
      const c = l.dataset.energyPick === t;
      l.classList.toggle("picked", c), l.setAttribute("aria-pressed", String(c));
    }), o.dataset.graph = t, o.dataset.drawn = "", Ue.set("dash:energy", Cr()), Xa(!0));
  }
  const Di = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, es = /* @__PURE__ */ new Map();
  async function ro(t) {
    const a = /* @__PURE__ */ new Date(), o = new Date(a).setHours(0, 0, 0, 0), l = a.getHours(), c = a.getMinutes() / 60, g = Array.from({ length: 24 }, (b, M) => M <= l ? 0 : null);
    if (!t.ids) {
      const b = Di[t.key] || Di.electricity, M = b.map((I, F) => F < l ? I : F === l ? I * c : 0), O = M.reduce((I, F) => I + F, 0) || 1;
      return g.map((I, F) => I == null ? null : t.value * M[F] / O);
    }
    const f = es.get(t.id);
    if (f && f.day === o && Date.now() - f.at < 5 * 60 * 1e3) return f.hours;
    try {
      const b = await B({ type: "recorder/statistics_during_period", start_time: new Date(o).toISOString(), end_time: a.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((I) => ((b == null ? void 0 : b[I]) || []).forEach((F) => {
        const at = typeof F.start == "number" ? F.start : Date.parse(F.start), it = new Date(at).getHours();
        at >= o && it < l && (g[it] += Number(F.change) || 0);
      }));
      const M = new Date(a).setMinutes(0, 0, 0), O = await Promise.all(t.ids.map((I) => Promise.resolve(B({ type: "recorder/statistic_during_period", statistic_id: I, fixed_period: { start_time: new Date(M).toISOString(), end_time: a.toISOString() }, types: ["change"] })).then((F) => Number(F == null ? void 0 : F.change) || 0, () => 0)));
      g[l] = O.reduce((I, F) => I + F, 0);
    } catch {
    }
    return es.set(t.id, { at: Date.now(), day: o, hours: g }), g;
  }
  async function Tr(t, a) {
    const o = await ro(a);
    if (!t.isConnected) return;
    const l = Math.max(120, t.clientWidth || 260), c = Math.max(60, t.clientHeight || 130), g = 18, f = c - 18, b = l / 24, M = b * 0.72, O = (/* @__PURE__ */ new Date()).getHours(), I = o.map((bt) => bt ?? 0), F = Math.max(0, ...I), at = (bt) => f - (F > 0 ? bt / F * (f - g) : 0), it = (bt) => bt.toLocaleString(void 0, { maximumFractionDigits: bt < 10 ? 2 : 1 }) + " " + a.unit, dt = (bt) => String(bt).padStart(2, "0") + ":00", Z = F > 0 ? I.indexOf(F) : -1;
    t.setAttribute("viewBox", "0 0 " + l + " " + c), t.setAttribute("aria-label", a.name + " today by the hour: " + it(a.value) + (Z >= 0 ? ", most " + it(F) + " at " + dt(Z) : "")), t.innerHTML = [g, (g + f) / 2, f].map((bt) => '<line x1="0" x2="' + l + '" y1="' + bt + '" y2="' + bt + '" stroke="var(--line)" stroke-width="1"/>').join("") + o.map((bt, j) => bt > 0 ? '<rect x="' + (j * b + (b - M) / 2).toFixed(1) + '" y="' + at(bt).toFixed(1) + '" width="' + M.toFixed(1) + '" height="' + (f - at(bt)).toFixed(1) + '" rx="2" fill="' + (j === O ? "var(--primary)" : "var(--text)") + '"' + (j === O ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((bt) => '<text x="' + (bt * b).toFixed(1) + '" y="' + (c - 3) + '">' + String(bt).padStart(2, "0") + "</text>").join("") + (Z >= 0 ? '<text x="0" y="11">Most: ' + nt(it(F)) + " at " + dt(Z) + "</text>" : "");
  }
  function Hs(t) {
    var a;
    (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((o, l) => o.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: l * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function vd(t) {
    var c;
    if ((c = window.matchMedia) != null && c.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [a, o] = t.querySelectorAll("path");
    if (!(o != null && o.getTotalLength)) return;
    const l = o.getTotalLength();
    o.animate([{ strokeDasharray: l, strokeDashoffset: l }, { strokeDasharray: l, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), a == null || a.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let Bi = null, Fs = 0;
  const as = (t) => !t.startsWith("light.") || Ih.includes((Se.get(t) || "").toLowerCase()), Ao = () => Math.max(2, ma((L == null ? void 0 : L.clientWidth) || 0).n), kl = (t) => {
    const a = Y(t);
    return a.sections.map((o, l) => o && (a.parts || [])[l]).filter(Boolean);
  }, Ml = (t) => kl(t).slice(0, Fi(t) - 1);
  function ns(t) {
    const a = ke().tiles;
    if (a) return a.filter((l) => S[l] || De(l));
    if (!Bi) {
      const l = (c) => {
        var g;
        return (((g = S[c]) == null ? void 0 : g.state) === "on" ? 1e6 : 0) + (ea[c] || 0);
      };
      Bi = {
        lights: ue.rooms.flatMap((c) => c.lights).filter((c) => {
          var g;
          return as(c) && ((g = S[c]) == null ? void 0 : g.state) !== "unavailable";
        }).sort((c, g) => l(g) - l(c) || It(c).localeCompare(It(g))),
        climates: ue.rooms.flatMap((c) => c.actions.filter((g) => g.startsWith("climate.")))
      };
    }
    const o = Bi.climates.filter((l) => S[l]).slice(0, t > 3 ? 2 : 1);
    return [...Bi.lights.filter((l) => S[l]).slice(0, Math.max(0, t - o.length)), ...o];
  }
  const Ri = (t, a, o, l) => (c) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + a + '" aria-label="' + o + '">' + (l ? '<div class="activityHeader">' + (a === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + o + "</button>" : '<div class="activityTitle">' + o + "</div>") + "</div>" : "") + '<div class="activityRows">' + c + "</div></section>";
  function Ni(t, a) {
    var g, f;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + nt(((f = (g = i()) == null ? void 0 : g.config) == null ? void 0 : f.location_name) || "Home") + "</h1>" }), a.length && t.push({ key: "sums", wrap: (b) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Ri("tfDash-bar", "sums-bar", "Summaries", !1)(b).replace(" data-tf", "") + "</div>", tiles: a.map((b) => ({ key: "sum:" + b.key, html: kr(b) })) }), Te.length && t.push({ key: "areas", html: Rt(0) });
    const o = Gn();
    o.length && t.push({ key: "favs", wrap: Ri("tfDash-favs", "favs", "Favourites", !0), tiles: o.map((b) => ({ key: "fav:" + b, html: Un(b, { area: !0 }) })) });
    const l = ts();
    t.push({ key: "dash:act", html: To("dash:act", 0, "Activity", l.length ? l.map(Wa) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: Cr() });
    const c = Ao();
    return Fs = c, ns(c >= 3 ? c : c * 2).forEach((b) => t.push({
      key: "dash:tile:" + b,
      wrap: (M) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + nt(b) + '">' + M + "</div>",
      tiles: [{ key: b, html: He(b) ? rn(De(b), b) : Yo(b, !1, Ml(b)) }]
    })), Ns(), yl(), t;
  }
  const Cn = 252, Ve = 16, Pi = 200, Lr = Math.round(Cn * 1.25), Ii = 60, Za = Ii + Ve, Sl = 3, bd = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average", aq: "Air quality", pollen: "Pollen", radar: "Rain radar" }, os = ["wx", "favs", "act", "energy", "avg"], so = ["XS", "S", "M", "L", "XL"], $o = so.length, Xo = ["Narrow", "Wide", "Really wide"], Hi = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4 }, Cl = (t) => !t.includes(".") || !S[t] || t.startsWith("light.") && Ya(t) ? $o : Math.min($o, kl(t).length + 1), Fi = (t) => {
    const a = ke().opts[t] || {}, o = Cl(t), l = Number(a.h) || (a.tall ? 5 : Hi[t] || Os);
    return Math.max(1, Math.min(o, l));
  }, Os = 2, wd = 90, is = 56, Ia = (t) => {
    var a;
    return bd[t] || (t.startsWith("room:") ? ((a = Te.find((o) => "room:" + o.id === t)) == null ? void 0 : a.name) || "Area" : It(t));
  }, lo = 409, Ws = 128;
  let qa = !1, Ee = null, ja = null, Ar = !1, Jo = /* @__PURE__ */ new Map(), rs = 0, _o = 0;
  const co = ["title", "sums"], ma = (t) => {
    const a = Math.max(1, Math.floor((t + Ve) / (Pi + Ve)));
    return { n: a, w: Math.max(1, Math.min(Lr, Math.floor((t - (a - 1) * Ve) / a))) };
  }, ke = () => {
    const t = { cells: {}, spans: {}, hidden: [], opts: {}, ...V.dash || {} }, a = ge.filter((o) => !(t.known || []).includes(o) && !t.hidden.includes(o));
    return a.length ? { ...t, hidden: [...t.hidden, ...a] } : t;
  };
  function ss(t) {
    V = { ...V, dash: { ...t, known: ge } }, La();
  }
  function _r() {
    const t = (a) => L.querySelector(a);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", ca.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", ca.avg, 2],
      ...ge.map((a) => [a, ca[a], 1]),
      ...[...L.querySelectorAll(".tfDashTiles > [data-k]")].map((a) => [a.dataset.k, a, 1, !0])
    ].filter(([, a]) => a == null ? void 0 : a.isConnected).map(([a, o, l, c = !1]) => ({ key: a, el: o, span: l, tile: c }));
  }
  const ls = (t, a, o) => {
    if (t.span === "full") return a;
    const l = t.span === "areas" && ke().spans.areas;
    return l ? l === "full" ? a : Math.min(a, Math.max(2, l)) : t.span === "areas" ? Math.min(a, Math.ceil((lo + Math.max(0, Te.length - 1) * (Ws + Ve) + Ve) / (o + Ve))) : Math.min(a, ke().spans[t.key] ?? t.span);
  }, ds = (t) => Fi(t.key);
  function Er(t, a, o = null) {
    const l = ke().cells, c = t.every((b) => !l[b.key] || l[b.key].col + b.cols <= a), g = (b) => l[b.key] || { row: 1e9, col: 0 };
    return (() => {
      const b = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map(), O = (Z, bt, j, vt) => {
        for (let W = bt; W < bt + vt; W++) for (let Ot = Z; Ot < Z + j; Ot++) if (b.has(Ot + "," + W)) return !1;
        return !0;
      }, I = (Z, bt, j) => {
        for (let vt = j; vt < j + Z.rows; vt++) for (let W = bt; W < bt + Z.cols; W++) b.add(W + "," + vt);
        M.set(Z.key, { col: bt, row: j, cols: Z.cols, rows: Z.rows });
      }, F = (Z, bt, j) => {
        for (bt = Math.max(0, Math.min(a - Z.cols, bt)), j = Math.max(0, j); !O(bt, j, Z.cols, Z.rows); ) j++;
        I(Z, bt, j);
      }, at = (Z) => {
        for (let bt = 0; ; bt++) for (let j = 0; j <= a - Z.cols; j++) if (O(j, bt, Z.cols, Z.rows)) {
          I(Z, j, bt);
          return;
        }
      };
      o && F(o, Ee.col, Ee.row);
      const it = t.filter((Z) => Z !== o), dt = (Z, bt) => g(Z).row - g(bt).row || g(Z).col - g(bt).col;
      return c ? (it.filter((Z) => l[Z.key]).sort(dt).forEach((Z) => F(Z, l[Z.key].col, l[Z.key].row)), it.filter((Z) => !l[Z.key]).forEach(at), M) : ([...it].sort(dt).forEach(at), M);
    })();
  }
  function Tl(t, a) {
    const o = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), c = (g, f, b) => {
      for (let M = f; M < f + b.rows; M++) for (let O = g; O < g + b.cols; O++) if (o.has(O + "," + M)) return !1;
      return !0;
    };
    return t.forEach((g) => {
      for (let f = 0; ; f++) {
        let b = 0;
        for (; b <= a - g.cols && !c(b, f, g); ) b++;
        if (!(b > a - g.cols)) {
          for (let M = f; M < f + g.rows; M++) for (let O = b; O < b + g.cols; O++) o.add(O + "," + M);
          l.set(g.key, { col: b, row: f, cols: g.cols, rows: g.rows });
          return;
        }
      }
    }), l;
  }
  function cs() {
    const t = ke(), a = new Set(t.hidden), o = _r().filter((f) => !co.includes(f.key));
    let l = Jo;
    if (!l.size) {
      const f = t.pegs || 4, b = o.filter((M) => !a.has(M.key));
      b.forEach((M) => {
        M.cols = ls(M, f, Cn), M.rows = ds(M) ?? Os;
      }), l = Er(b, f);
    }
    const c = (f) => !a.has(f.key) && l.get(f.key) || { row: 1e9, col: 0 };
    o.sort((f, b) => c(f).row - c(b).row || c(f).col - c(b).col);
    const g = (t.phone || []).map((f) => o.find((b) => b.key === f && !a.has(f))).filter(Boolean);
    return [...g, ...o.filter((f) => !g.includes(f))];
  }
  const xd = () => {
    const t = cs();
    t.forEach((a, o) => a.el.style.setProperty("--o", String(3 + o))), Ll([..._r().filter((a) => co.includes(a.key)), ...t].map((a) => a.el));
  };
  function Ll(t) {
    if (Ee) return;
    const a = n.activeElement;
    let o = null;
    for (const l of new Set(t.map((c) => {
      for (; c && c.parentElement !== L; ) c = c.parentElement;
      return c;
    }).filter(Boolean))) {
      const c = o ? o.nextSibling : L.querySelector(":scope > [data-tf]");
      if (l !== c)
        try {
          L.moveBefore ? L.moveBefore(l, c) : L.insertBefore(l, c);
        } catch {
          L.insertBefore(l, c);
        }
      o = l;
    }
    a && a !== n.activeElement && a.isConnected && a.focus({ preventScroll: !0 });
  }
  const Qo = (t, a) => ss({ ...t, cells: a, pegs: ma(L.clientWidth).n });
  function ra() {
    var vt;
    if (!k || !L) return;
    const t = L.clientWidth, a = t < 2 * Cn + Ve, o = v.classList.contains("tfDash"), { n: l, w: c } = a ? { n: 2, w: Math.floor((t - Ve) / 2) } : ma(t);
    ne.classList.add("tfPegs"), ne.classList.toggle("tfPhonePegs", a), ne.style.setProperty("--peg-n", l), ne.style.setProperty("--peg-w", c + "px");
    const g = new Set(ke().hidden);
    ge.forEach((W) => {
      var Ot;
      return (Ot = ca[W]) == null ? void 0 : Ot.classList.toggle("tfNotAdded", g.has(W) && !(Ee != null && Ee.fromTray && Ee.key === W));
    }), v.classList.toggle("tfBoard", o), v.classList.toggle("tfEditing", o && qa && !a);
    const f = u("dashEditNav");
    f && (f.hidden = !o || a, f.classList.toggle("active", qa), f.setAttribute("aria-pressed", String(qa)), f.setAttribute("aria-label", qa ? "Done editing" : "Edit the dashboard"), f.title = qa ? "Done" : "Edit", f.innerHTML = qa ? Ah : lp);
    const b = o ? _r() : [];
    if (!o) {
      L.style.height = "", L.querySelectorAll(".tfBoardItem").forEach((W) => {
        W.classList.remove("tfBoardItem", "tfBoardHidden"), W.style.left = W.style.top = W.style.width = W.style.height = "";
      }), (vt = L.querySelector(".tfDash-act > .activityRows")) == null || vt.style.removeProperty("max-height"), Oi(!1), v.classList.contains("tfDash") && xd(), ka();
      return;
    }
    L.style.setProperty("--peg-w", c + "px");
    const M = new Set(ke().hidden), O = c + Ve;
    Ee != null && Ee.fromTray && M.delete(Ee.key), b.forEach((W) => W.el.classList.toggle("tfBoardHidden", M.has(W.key)));
    const I = b.filter((W) => !M.has(W.key) && getComputedStyle(W.el).display !== "none");
    let F = 0;
    I.filter((W) => co.includes(W.key)).forEach((W) => {
      W.el.classList.add("tfBoardItem"), Object.assign(W.el.style, { width: t + "px", height: "", left: "0px", top: F + "px" });
      const Ot = W.key === "sums" && W.el.querySelector(".tfDash-bar"), Ne = Ot ? Ot.querySelectorAll(".activityRow").length : 0;
      Ot && (Ot.style.maxWidth = "none");
      for (let fe = 1; Ot && fe <= Ne && (Ot.style.setProperty("--bar-cols", String(Math.ceil(Ne / fe))), !(Ot.offsetWidth <= t)); fe++)
        ;
      Ot && (Ot.style.maxWidth = ""), F += W.el.offsetHeight + Ve;
    }), _o = F;
    const at = I.filter((W) => !co.includes(W.key));
    at.forEach((W) => {
      W.cols = ls(W, l, c), W.el.classList.add("tfBoardItem"), W.el.style.width = (W.cols === l ? t : W.cols * c + (W.cols - 1) * Ve) + "px", W.el.style.height = "", W.rows = ds(W) ?? Math.max(1, Math.ceil((W.el.offsetHeight + Ve - 6) / Za));
    });
    const it = Ee && at.find((W) => W.key === Ee.key), dt = a && cs().map((W) => W.key), Z = (W) => dt.includes(W.key) ? dt.indexOf(W.key) : -1, bt = a ? Tl([...at].sort((W, Ot) => Z(W) - Z(Ot)), l) : Er(at, l, it);
    bt.forEach((W) => Object.assign(W, { x: W.cols === l ? 0 : W.col * O, y: _o + W.row * Za, w: W.cols === l ? t : W.cols * c + (W.cols - 1) * Ve, h: W.rows * Za - Ve })), at.forEach((W) => {
      const Ot = bt.get(W.key);
      W.el.style.height = Ot.h + "px", W.el.dataset.rows = a && W.key === "wx" ? 5 : Fi(W.key), W.el.toggleAttribute("data-narrow", !a && Ot.cols === 1 && l > 1), W.el.dataset.cols = Ot.cols, W.el.classList.contains("tfDac") && W.el.style.setProperty("--tf-dac-pad", Ot.h - wd + "px"), !(W === it && !Ee.fromTray) && (W.el.style.left = Ot.x + "px", W.el.style.top = Ot.y + "px");
    }), a || (Jo = bt), Ll([...I.filter((W) => co.includes(W.key)), ...at.slice().sort((W, Ot) => bt.get(W.key).row - bt.get(Ot.key).row || bt.get(W.key).col - bt.get(Ot.key).col)].map((W) => W.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([W, Ot]) => {
      const Ne = bt.get(W), fe = Ne && L.querySelector(Ot), Ba = fe == null ? void 0 : fe.querySelector(":scope > .activityRows"), Xt = fe == null ? void 0 : fe.querySelector(":scope > .activityHeader");
      if (!Ba || !Xt) return;
      const Ge = Ba.getBoundingClientRect().top - fe.getBoundingClientRect().top, pi = Ne.rows === 1 ? Ne.h : Math.floor(Ne.h - Ge - parseFloat(getComputedStyle(fe).paddingBottom)), Td = Math.max(1, Math.floor(pi / is));
      Ba.style.setProperty("--fill-row", (pi / Td).toFixed(2) + "px"), Ba.style.maxHeight = pi + "px";
    }), rs = Math.max(0, ...[...bt.values()].map((W) => W.row + W.rows));
    let j = _o + rs * Za - Ve;
    j = Oi(qa && !a, at, bt, j, l, c), L.style.height = j + "px", requestAnimationFrame(() => v.classList.add("tfBoardReady")), b.forEach((W) => ps.observe(W.el)), Xa(), ka();
  }
  const dn = () => {
    Ar || (Ar = !0, requestAnimationFrame(() => {
      Ar = !1, ra();
    }));
  }, ps = new ResizeObserver(() => {
    Ee || dn();
  });
  function Oi(t, a = [], o = /* @__PURE__ */ new Map(), l = 0, c = 1, g = Cn) {
    L.querySelectorAll(".tfEditChips").forEach((I) => {
      (!t || !I.closest(".tfBoardItem")) && I.remove();
    }), L.querySelectorAll(".tfFavHides").forEach((I) => I.remove()), L.querySelectorAll(".tfBoardItem").forEach((I) => [...I.children].forEach((F) => {
      F.classList.contains("tfEditChips") || F.toggleAttribute("inert", t);
    }));
    let f = L.querySelector(".tfBoardCells"), b = L.querySelector(".tfBoardLand");
    if (!t)
      return f == null || f.remove(), b == null || b.remove(), cn(), l;
    const M = rs + Sl;
    if (f || (f = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), f.setAttribute("aria-hidden", "true"), L.prepend(f)), f.style.top = _o + "px", f.dataset.size !== c + "x" + M + "x" + g && (f.dataset.size = c + "x" + M + "x" + g, f.style.gridTemplateColumns = "repeat(" + c + "," + g + "px)", f.innerHTML = "<i></i>".repeat(c * M)), l = Math.max(l, _o + M * Za - Ve), a.forEach((I) => {
      const F = I.el;
      !F || F.querySelector(":scope > .tfEditChips") || F.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Vd + '</span><button class="tfEditChip" type="button" data-board-more="' + nt(I.key) + '" aria-label="' + nt(Ia(I.key)) + ' options" aria-haspopup="menu">' + Th + "</button></div>");
    }), Ee && o.has(Ee.key)) {
      b || (b = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), L.appendChild(b));
      const I = o.get(Ee.key);
      Object.assign(b.style, { left: I.x + "px", top: I.y + "px", width: I.w + "px", height: I.h + "px" });
    } else b == null || b.remove();
    const O = L.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (O) {
      const I = O.getBoundingClientRect();
      O.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...O.querySelectorAll('[data-k^="fav:"]')].map((F) => {
        const at = F.getBoundingClientRect(), it = F.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + nt(it) + '" aria-label="Hide ' + nt(It(it)) + ' from the dashboard" style="left:' + Math.round(at.right - I.left - 42) + "px;top:" + Math.round(at.top - I.top + (at.height - 32) / 2) + 'px">' + ip + "</button>";
      }).join("") + "</div>");
    }
    return l;
  }
  let qs = "";
  function us(t) {
    qa = t, t || (Ee = null, go = vo = !1, cn()), ra(), t ? qs = JSON.stringify(V) : qs && JSON.stringify(V) !== qs && Bn("Changes saved");
  }
  function Tn(t, a) {
    var bt, j;
    cn();
    const o = Jo.get(t), { n: l } = ma(L.clientWidth), c = ke(), g = c.spans[t] ?? (He(t) ? 1 : 2);
    if (!o) return;
    const f = o.cols >= l, b = (vt, W, Ot) => '<button type="button" role="menuitem" data-board-act="' + vt + '"' + (Ot ? " disabled" : "") + ">" + W + "</button>", M = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    M.setAttribute("role", "menu"), M.setAttribute("aria-label", Ia(t) + " options");
    const O = L.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), I = Cl(t), F = Fi(t), at = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + so.map((vt, W) => '<button type="button" role="menuitemradio" aria-checked="' + (W + 1 === F) + '" aria-label="' + vt + ", " + (W + 1) + (W ? " rows" : " row") + '" data-board-act="h:' + (W + 1) + '"' + (W < I ? "" : " disabled") + ">" + vt + "</button>").join("") + "</div></div>", it = [["Wide", 2, l >= 2], ["Really wide", 3, l >= 3], ["Full width", "full", l >= 4]], dt = t === "areas" ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + it.map(([vt, W, Ot]) => '<button type="button" role="menuitemradio" aria-checked="' + (Ot && (W === "full" ? o.cols === l : o.cols === W && !(W === l && c.spans.areas === "full"))) + '" aria-label="' + vt + (W === "full" ? "" : ", " + W + " columns") + '" data-board-act="w:' + W + '"' + (Ot ? "" : " disabled") + ">" + vt + "</button>").join("") + "</div></div>" : os.includes(t) || He(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Xo.map((vt, W) => '<button type="button" role="menuitemradio" aria-checked="' + (W + 1 === Math.min(g, l)) + '" aria-label="' + vt + ", " + (W + 1) + (W ? " columns" : " column") + '" data-board-act="w:' + (W + 1) + '"' + (W < l ? "" : " disabled") + ">" + vt + "</button>").join("") + "</div></div>" : "";
    M.innerHTML = at + dt + (t === "energy" ? b("graph", (((bt = c.opts.energy) == null ? void 0 : bt.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + b("left", "Move left", f || o.col === 0) + b("right", "Move right", f || o.col + o.cols >= l) + b("up", "Move up", o.row <= 0) + b("down", "Move down") + (O ? b("remove", "Remove") : b("hide", "Hide")), L.appendChild(M);
    const Z = Math.min(o.x + o.w - M.offsetWidth, L.clientWidth - M.offsetWidth);
    Object.assign(M.style, { left: Math.max(0, Z) + "px", top: o.y + 28 + "px" }), ja = { key: t, menu: M, opener: a }, (j = M.querySelector("button:not([disabled])")) == null || j.focus();
  }
  function cn(t) {
    if (!ja) return;
    const { menu: a, opener: o } = ja;
    ja = null, a.remove(), t && (o == null || o.focus());
  }
  const po = () => Object.fromEntries([...Jo].map(([t, a]) => [t, { col: a.col, row: a.row }]));
  function Wi(t, a) {
    var f, b;
    if (a === "remove") {
      cn(), yd(t);
      return;
    }
    const o = V, l = ke(), c = po(), g = c[t] || { col: 0, row: 0 };
    a.startsWith("w:") && (l.spans = { ...l.spans, [t]: a === "w:full" ? "full" : Number(a.slice(2)) }), a.startsWith("h:") && (l.opts = { ...l.opts, [t]: { ...l.opts[t] || {}, h: Number(a.slice(2)), tall: void 0 } }), a === "graph" && (l.opts = { ...l.opts, energy: { ...l.opts.energy || {}, graph: (((f = l.opts.energy) == null ? void 0 : f.graph) || "above") === "above" ? "below" : "above" } }), a === "left" && (c[t] = { ...g, col: g.col - 1 }), a === "right" && (c[t] = { ...g, col: g.col + 1 }), a === "up" && (c[t] = { ...g, row: g.row - 1 }), a === "down" && (c[t] = { ...g, row: g.row + 1 }), a === "hide" && (l.hidden = [.../* @__PURE__ */ new Set([...l.hidden, t])]), ["left", "right", "up", "down"].includes(a) && (Ee = { key: t, col: c[t].col, row: c[t].row }), Qo(l, c), Ee && (ra(), Ee = null, Qo(ke(), po())), cn(), a === "graph" && (Ue.delete("dash:energy"), Da()), a.startsWith("h:") && t.includes(".") && Da(), ra(), a !== "hide" ? (b = L.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || b.focus() : Bn(Ia(t) + " hidden", ya(o));
  }
  const js = (t) => {
    var a;
    return ge.includes(t) && !(((a = V.dash) == null ? void 0 : a.cells) || {})[t] ? " added" : " put back";
  };
  function uo(t) {
    const a = ke(), o = Ia(t) + js(t);
    ss({ ...a, hidden: a.hidden.filter((l) => l !== t) }), ra(), Bn(o);
  }
  const fs = () => ke().tiles || [...L.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ke().hidden.includes(t));
  function Zn(t, a) {
    const o = ke();
    Qo({ ...o, tiles: t, hidden: o.hidden.filter((l) => !l.includes(".")) }, a), Da(), ka();
  }
  const Dr = (t) => {
    Zn([...fs().filter((a) => a !== t), t], po()), Bn(Ia(t) + " added"), Gs(t);
  }, yd = (t) => {
    const a = V, o = po();
    delete o[t], Zn(fs().filter((l) => l !== t), o), Bn(Ia(t) + " removed", ya(a));
  };
  let Br = 0;
  function Bn(t, a = null) {
    var f;
    const o = u("toast");
    if (!o) return;
    if (o.replaceChildren(Object.assign(document.createElement("span"), { textContent: t })), a) {
      const b = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      b.addEventListener("click", () => {
        clearTimeout(Br), o.classList.remove("show", "withAction"), a();
      }), o.appendChild(b);
    }
    const l = v.getBoundingClientRect(), c = (f = n.querySelector(".bottomNav")) == null ? void 0 : f.getBoundingClientRect(), g = Fe.classList.contains("open") && !Kn ? Math.min(l.right, Fe.getBoundingClientRect().left) : l.right;
    o.style.left = (l.left + g) / 2 + "px", o.style.bottom = (c != null && c.height ? window.innerHeight - c.top + 12 : 26) + "px", o.classList.add("tfToast", "show"), o.classList.toggle("withAction", !!a), clearTimeout(Br), Br = setTimeout(() => o.classList.remove("show", "withAction"), a ? 5e3 : 2200);
  }
  const zs = 700, fo = 1e3, Ka = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  Ka.setAttribute("role", "tooltip"), Ka.setAttribute("aria-hidden", "true"), v.appendChild(Ka);
  let hs = null, qi = 0, Rn = 0, Al = -1 / 0;
  const Eo = (t) => {
    if (t.nodeType !== 1) return !1;
    const a = getComputedStyle(t);
    return a.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || a.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, kd = (t) => {
    for (let a = t; a && a !== v; a = a.parentElement) if (Eo(a)) return a;
    return null;
  };
  function Vs(t, a) {
    clearTimeout(qi), clearTimeout(Rn);
    const o = () => {
      if (!t.isConnected) return;
      hs = t, Ka.textContent = a, Ka.hidden = !1;
      const l = t.getBoundingClientRect(), c = Ka.getBoundingClientRect(), g = l.top - c.height - 8 >= 8 ? l.top - c.height - 8 : l.bottom + 8;
      Ka.style.left = Math.max(8, Math.min(window.innerWidth - c.width - 8, l.left + l.width / 2 - c.width / 2)) + "px", Ka.style.top = g + "px";
    };
    !Ka.hidden || performance.now() - Al < fo ? o() : qi = setTimeout(o, zs);
  }
  function ho() {
    clearTimeout(qi), clearTimeout(Rn), Ka.hidden || (Al = performance.now()), Ka.hidden = !0, hs = null;
  }
  n.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (Ka.contains(t.target)) {
      clearTimeout(Rn);
      return;
    }
    const a = kd(t.target);
    if (a && Ht.names === "scroll" && a.matches(mo)) {
      Do(a);
      return;
    }
    if (a) {
      a !== hs ? Vs(a, a.textContent.trim()) : clearTimeout(Rn);
      return;
    }
    clearTimeout(qi), clearTimeout(Rn), Rn = setTimeout(ho, 120);
  }), n.addEventListener("focusin", (t) => {
    var l;
    const a = t.target;
    if (!((l = a.matches) != null && l.call(a, ":focus-visible"))) return;
    let o = [a, ...a.querySelectorAll("*")].filter(Eo);
    Ht.names === "scroll" && (o.filter((c) => c.matches(mo)).forEach(Do), o = o.filter((c) => !c.matches(mo))), o.length && Vs(a, o.map((c) => c.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === hs && ho();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !Ka.hidden && (t.stopPropagation(), ho());
  }, !0), window.addEventListener("scroll", () => {
    (!Ka.hidden || qi) && ho();
  }, { capture: !0, passive: !0 });
  const mo = ".activityRowName,.activityRowMeta", qe = /* @__PURE__ */ new WeakSet();
  function Do(t) {
    var o;
    if (Ht.names !== "scroll" || qe.has(t) || t.closest("[inert]") || (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    qe.add(t);
    const a = () => Promise.all([t.closest(".workoutPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((l) => l.getAnimations()).map((l) => l.finished.catch(() => {
    })));
    setTimeout(async () => {
      await a();
      const l = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (l < 2) {
        qe.delete(t);
        return;
      }
      const c = l / 30 * 1e3, g = c + 1e3 + c;
      t.style.textOverflow = "clip";
      const f = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -l + "px", offset: c / g },
        { textIndent: -l + "px", offset: (1e3 + c) / g, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: g });
      f.onfinish = f.oncancel = () => {
        t.style.textOverflow = "", qe.delete(t);
      };
    }, 600);
  }
  const Rr = new IntersectionObserver((t) => t.forEach((a) => {
    a.isIntersecting && !a.target.closest("[inert]") && (Rr.unobserve(a.target), Do(a.target));
  }), { threshold: 1 });
  let Nr = !1;
  new MutationObserver(() => {
    Nr || Ht.names !== "scroll" || (Nr = !0, setTimeout(() => {
      Nr = !1, n.querySelectorAll(mo).forEach((t) => {
        !t.dataset.glided && Eo(t) && (t.dataset.glided = "1", Rr.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const ya = (t) => () => {
    V = t, La(), Da(), ra(), ka();
  };
  function Gs(t) {
    const a = () => L.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var f;
      const o = a();
      if (!o) return;
      const l = (f = window.matchMedia) == null ? void 0 : f.call(window, "(prefers-reduced-motion: reduce)").matches, c = o.getBoundingClientRect();
      (c.top < 0 || c.bottom > window.innerHeight) && o.scrollIntoView({ behavior: l ? "auto" : "smooth", block: "center" });
      const g = (b) => "0 0 0 4px color-mix(in srgb,var(--primary) " + b + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + b + "%,transparent)";
      o.animate([{ boxShadow: g(55) }, { boxShadow: g(0) }], { duration: 1500, easing: l ? "steps(1, end)" : "ease-out" });
    }, _l(t) ? 260 : 0);
  }
  function _l(t) {
    const a = Jo.get(t);
    if (!a || !Fe.classList.contains("open") || Kn) return !1;
    const { n: o, w: l } = ma(L.clientWidth), c = Fe.getBoundingClientRect().left - L.getBoundingClientRect().left, g = (M) => M * (l + Ve) + a.cols * l + (a.cols - 1) * Ve <= c;
    if (g(a.col)) return !1;
    const f = /* @__PURE__ */ new Set();
    Jo.forEach((M, O) => {
      if (O !== t) for (let I = M.row; I < M.row + M.rows; I++) for (let F = M.col; F < M.col + M.cols; F++) f.add(F + "," + I);
    });
    const b = (M, O) => {
      for (let I = O; I < O + a.rows; I++) for (let F = M; F < M + a.cols; F++) if (f.has(F + "," + I)) return !1;
      return !0;
    };
    for (let M = 0; M <= rs; M++) for (let O = 0; O + a.cols <= o && g(O); O++)
      if (b(O, M))
        return Qo(ke(), { ...po(), [t]: { col: O, row: M } }), ra(), !0;
    return !1;
  }
  const El = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Fe = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Fe.setAttribute("aria-label", "Edit the dashboard"), Fe.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">One area on its own, instead of all of them in the Areas card.</p><button class="pill tfTrayAdd" type="button" data-room-add aria-expanded="false">Add area</button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', v.appendChild(Fe);
  let Kn = !1, go = !1, vo = !1, Pr = !1, Ha = null, Ln = !1;
  const ti = {}, ei = (t, a) => {
    if (ti[t] === a) return;
    ti[t] = a;
    const o = Fe.querySelector('[data-tray="' + t + '"]');
    o.innerHTML = a, Na(o);
  }, Us = (t, a) => '<span class="tfTrayName"><span class="activityRowName">' + nt(It(t)) + '</span><span class="activityRowMeta">' + nt(a) + "</span></span>", Dl = (t, a, o) => '<li class="tfTrayFav' + (a ? " off" : "") + '" data-tray-fav="' + nt(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + Vd + '</span><span class="tfIcon"' + $e(t, _a(t)) + "></span>" + Us(t, a ? "Hidden" + (Se.get(t) ? " · " + Se.get(t) : "") : Se.get(t) || ia(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + nt(t) + '" aria-pressed="' + !a + '" aria-label="' + (a ? "Show " : "Hide ") + nt(It(t)) + ' on the dashboard">' + (a ? ip : Lh) + "</button>" + (o ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + nt(t) + '" aria-label="Remove ' + nt(It(t)) + ' from favourites">' + rp + "</button>" : "<span></span>") + "</li>";
  function Bl(t, a, o, l) {
    const c = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(S).filter((f) => a(f) && !o.has(f) && S[f].state !== "unavailable").filter((f) => {
      const b = (It(f) + " " + (Se.get(f) || "") + " " + f).toLowerCase();
      return c.every((M) => b.includes(M));
    }).sort((f, b) => (Se.get(f) || "~").localeCompare(Se.get(b) || "~") || It(f).localeCompare(It(b))).slice(0, 40).map((f) => '<li><button class="tfTrayPickItem" type="button" ' + l + '="' + nt(f) + '"><span class="tfIcon"' + $e(f, _a(f)) + "></span>" + Us(f, Se.get(f) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function ka() {
    const t = qa && v.classList.contains("tfBoard");
    if (Fe.classList.toggle("open", t), Fe.classList.toggle("tucked", t && Kn), Fe.toggleAttribute("inert", !t), t || (Ln = !1), ii(), !t) return;
    const a = Fe.querySelector("[data-tray-tuck]");
    a.innerHTML = Kn ? Zc : sp, a.setAttribute("aria-expanded", String(!Kn)), a.setAttribute("aria-label", Kn ? "Show the edit tray" : "Tuck the edit tray away");
    const o = ke().hidden.filter((f) => _r().some((b) => b.key === f));
    ei("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (o.length ? '<div class="tfTrayCards">' + o.map((f) => '<button class="tfTrayCard" type="button" data-tray-card="' + nt(f) + '" aria-label="' + nt(Ia(f)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + Vd + "</span>" + nt(Ia(f)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), ei("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ke().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Ln + '">' + (Ln ? "Hide the phone" : "Show the phone") + "</button>");
    const l = new Set(V.favHidden || []), c = xa(), g = [...c, ...[...l].filter((f) => !c.includes(f) && S[f])];
    if (ei("favs", g.map((f) => Dl(f, l.has(f), c.includes(f))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Fe.querySelector('[data-pick="tiles"]').hidden = !vo, Fe.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(vo)), vo && ei("tilepick", Bl(Fe.querySelector("[data-tile-search]").value, (f) => od.includes(f.split(".")[0]), new Set(fs()), "data-tile-pick")), Fe.querySelector('[data-tray="roompick"]').hidden = !Pr, Fe.querySelector("[data-room-add]").setAttribute("aria-expanded", String(Pr)), Pr) {
      const f = new Set(fs());
      ei("roompick", Te.filter((b) => !f.has("room:" + b.id)).map((b) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + nt(b.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + $e("area:" + b.id, b.icon || "mdi:texture-box", b.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + nt(b.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Fe.querySelector('[data-pick="favs"]').hidden = !go, Fe.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(go)), go && ei("pick", Bl(Fe.querySelector("[data-fav-search]").value, (f) => El.test(f), new Set(xa()), "data-fav-pick")), ei("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (Sn() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Sn() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const ji = (t) => {
    V = { ...V, ...t }, La(), Da(), ka();
  };
  function ai(t, a) {
    const o = V, l = new Set(V.favHidden || []);
    a ? l.delete(t) : l.add(t), ji({ favHidden: [...l] }), a ? Bn(It(t) + " put back") : Bn(It(t) + " hidden", ya(o));
  }
  const ni = (t) => {
    const a = V;
    ji({ favourites: xa().filter((o) => o !== t), favHidden: (V.favHidden || []).filter((o) => o !== t) }), Bn(It(t) + " removed from favourites", ya(a));
  }, Bo = (t) => {
    ji({ favourites: [...xa().filter((a) => a !== t), t], favHidden: (V.favHidden || []).filter((a) => a !== t) }), Bn(It(t) + " added to favourites");
  };
  Fe.addEventListener("click", (t) => {
    var o;
    const a = t.target.closest("button");
    a && (a.hasAttribute("data-tray-done") ? us(!1) : a.hasAttribute("data-tray-tuck") ? (Kn = !Kn, ka()) : a.hasAttribute("data-phone-toggle") ? (Ln = !Ln, ka(), Ln && ((o = $a.querySelector("[data-phone-key]")) == null || o.focus({ preventScroll: !0 }))) : a.dataset.trayCard ? t.detail === 0 && (uo(a.dataset.trayCard), ka()) : a.dataset.favEye ? ai(a.dataset.favEye, a.getAttribute("aria-pressed") !== "true") : a.dataset.favRemove ? ni(a.dataset.favRemove) : a.hasAttribute("data-fav-add") ? (go = !go, ka(), go && Fe.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : a.dataset.favPick ? Bo(a.dataset.favPick) : a.hasAttribute("data-tile-add") ? (vo = !vo, ka(), vo && Fe.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : a.dataset.tilePick ? Dr(a.dataset.tilePick) : a.hasAttribute("data-room-add") ? (Pr = !Pr, ka()) : a.dataset.roomPick ? Dr("room:" + a.dataset.roomPick) : a.hasAttribute("data-fav-suggest") && ji({ suggest: !Sn() }));
  }), Fe.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && ka();
  }), Fe.addEventListener("keydown", (t) => {
    var o, l;
    const a = !!((l = (o = t.target).closest) != null && l.call(o, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(a ? vo : go) || (t.stopPropagation(), a ? vo = !1 : go = !1, ka(), Fe.querySelector(a ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Ys(t, a, o, l) {
    t.preventDefault();
    const c = t.clientX, g = t.clientY;
    let f = null, b = 0;
    const M = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), O = (F) => {
      if (!f) {
        if (Math.hypot(F.clientX - c, F.clientY - g) < 4) return;
        f = a.cloneNode(!0), f.classList.add("tfTrayGhost"), f.style.width = a.offsetWidth + "px", v.appendChild(f);
      }
      f.style.transform = "translate(" + (F.clientX - 24) + "px," + (F.clientY - 24) + "px)";
      const at = !Kn && F.clientX >= Fe.getBoundingClientRect().left;
      if (o === "card") {
        const Z = L.getBoundingClientRect(), { w: bt } = ma(L.clientWidth);
        Ee = !at && F.clientX >= Z.left && F.clientX <= Z.right && F.clientY >= Z.top + _o ? { key: l, col: Math.max(0, Math.floor((F.clientX - Z.left) / (bt + Ve))), row: Math.max(0, Math.floor((F.clientY - Z.top - _o) / Za)), fromTray: !0 } : null, b || (b = requestAnimationFrame(() => {
          b = 0, ra();
        }));
        return;
      }
      const it = L.querySelector(".tfDash-favs"), dt = it == null ? void 0 : it.getBoundingClientRect();
      if (Ha = null, dt && !at && F.clientX >= dt.left && F.clientX <= dt.right && F.clientY >= dt.top && F.clientY <= dt.bottom) {
        let Z = 1 / 0;
        it.querySelectorAll('[data-k^="fav:"]').forEach((bt, j) => {
          const vt = bt.getBoundingClientRect(), W = Math.hypot(F.clientX - (vt.left + vt.width / 2), F.clientY - (vt.top + vt.height / 2));
          W < Z && (Z = W, Ha = { i: j, r: vt, after: F.clientX > vt.left + vt.width / 2 });
        }), Ha || (Ha = { i: 0, r: null, after: !1 });
      }
      Ha != null && Ha.r ? (M.isConnected || v.appendChild(M), Object.assign(M.style, { left: (Ha.after ? Ha.r.right : Ha.r.left) - 2 + "px", top: Ha.r.top + 8 + "px", height: Ha.r.height - 16 + "px" })) : M.remove();
    }, I = () => {
      if (window.removeEventListener("pointermove", O), window.removeEventListener("pointerup", I), window.removeEventListener("pointercancel", I), cancelAnimationFrame(b), f == null || f.remove(), M.remove(), o === "card") {
        if (!f) uo(l);
        else if (Ee != null && Ee.fromTray) {
          ra();
          const Z = Ia(l) + js(l), bt = ke(), j = po();
          Ee = null, Qo({ ...bt, hidden: bt.hidden.filter((vt) => vt !== l) }, j), Bn(Z);
        }
        Ee = null, ra(), Da(), ka();
        return;
      }
      if (!Ha) return;
      const F = new Set(V.favHidden || []);
      F.delete(l);
      const at = xa().filter((Z) => Z !== l), it = at.filter((Z) => !F.has(Z)), dt = it[Math.min(Ha.i + (Ha.after ? 1 : 0), it.length)];
      at.splice(dt ? at.indexOf(dt) : at.length, 0, l), Ha = null, ji({ favourites: at, favHidden: [...F] }), Bn(It(l) + " put back");
    };
    window.addEventListener("pointermove", O), window.addEventListener("pointerup", I), window.addEventListener("pointercancel", I);
  }
  const oi = { sums: 201, wx: 364, favs: 364, areas: 364, act: 364, energy: 288, avg: 288, aq: 288, pollen: 288, radar: 288 }, Rl = 136, Ir = 288, Md = 0.8, zi = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, $a = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  $a.setAttribute("aria-label", "Phone order"), $a.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + rp + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', v.appendChild($a);
  let Hr = "";
  function ii() {
    var b;
    const t = Ln && qa && v.classList.contains("tfBoard") && !Kn;
    if ($a.classList.toggle("open", t), $a.toggleAttribute("inert", !t), !t) return;
    const a = cs().filter((M) => !ke().hidden.includes(M.key)), o = a.length, l = (M) => Math.round(M * Md * 10) / 10 + "px", c = (M, O) => {
      const I = M.el.classList.contains("tfDac"), F = M.tile ? I ? Ir : Rl : oi[M.key] || Rl;
      return '<button class="tfPhoneBlock' + (M.tile ? " tile" : "") + '" type="button" data-phone-key="' + nt(M.key) + '" style="min-height:' + l(F) + '" aria-label="' + nt(Ia(M.key) + ", " + (O + 1) + " of " + o + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (M.tile ? $e(M.key, _a(M.key)) : $e(M.key, zi[M.key])) + '></span><span class="tfPhoneName">' + nt(Ia(M.key)) + "</span></button>";
    }, g = '<div class="tfPhoneTitle">' + nt(((b = L.querySelector(".tfDashTitle")) == null ? void 0 : b.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + l(oi.sums) + '"><span class="tfPhoneName">' + nt(Ia("sums")) + "</span></div>" + a.map(c).join("");
    if ($a.querySelector('[data-phone="note"]').innerHTML = ke().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", g === Hr) return;
    Hr = g;
    const f = $a.querySelector('[data-phone="list"]');
    f.innerHTML = g, Na(f);
  }
  function Vi(t, a) {
    var o;
    ss({ ...ke(), phone: t }), ka(), a && ((o = $a.querySelector('[data-phone-key="' + CSS.escape(a) + '"]')) == null || o.focus({ preventScroll: !0 }));
  }
  const Fr = () => [...$a.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function Zs(t, a) {
    t.preventDefault();
    const o = a.parentElement, l = $a.querySelector(".tfPhoneScreen"), c = Fr().join();
    a.classList.add("moving");
    const g = (b) => {
      const M = l.getBoundingClientRect();
      b.clientY > M.bottom - 40 ? l.scrollTop += 12 : b.clientY < M.top + 40 && (l.scrollTop -= 12);
      const O = [...o.querySelectorAll("[data-phone-key]")].find((at) => {
        const it = at.getBoundingClientRect();
        return at !== a && b.clientX >= it.left && b.clientX <= it.right && b.clientY >= it.top && b.clientY <= it.bottom;
      });
      if (!O) return;
      const I = O.getBoundingClientRect(), F = O.classList.contains("tile") ? b.clientX < I.left + I.width / 2 : b.clientY < I.top + I.height / 2;
      o.insertBefore(a, F ? O : O.nextSibling);
    }, f = () => {
      window.removeEventListener("pointermove", g), window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f), a.classList.remove("moving");
      const b = Fr();
      Hr = "", b.join() !== c ? Vi(b) : ii();
    };
    window.addEventListener("pointermove", g), window.addEventListener("pointerup", f), window.addEventListener("pointercancel", f);
  }
  $a.addEventListener("pointerdown", (t) => {
    const a = t.target.closest("[data-phone-key]");
    a && t.button <= 0 && Zs(t, a);
  }), $a.addEventListener("click", (t) => {
    var o;
    const a = t.target.closest("button");
    if (a != null && a.hasAttribute("data-phone-close"))
      Ln = !1, ka(), (o = Fe.querySelector("[data-phone-toggle]")) == null || o.focus({ preventScroll: !0 });
    else if (a != null && a.hasAttribute("data-phone-reset")) {
      const { phone: l, ...c } = ke();
      ss(c), ka();
    }
  }), $a.addEventListener("keydown", (t) => {
    var f, b, M, O;
    if (t.key === "Escape") {
      t.stopPropagation(), Ln = !1, ka(), (f = Fe.querySelector("[data-phone-toggle]")) == null || f.focus({ preventScroll: !0 });
      return;
    }
    const a = (O = (M = (b = t.target).closest) == null ? void 0 : M.call(b, "[data-phone-key]")) == null ? void 0 : O.dataset.phoneKey, o = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!a || !o) return;
    t.preventDefault();
    const l = Fr(), c = l.indexOf(a), g = c + o;
    g < 0 || g >= l.length || ([l[c], l[g]] = [l[g], l[c]], Vi(l, a));
  });
  function Gi(t, a) {
    t.preventDefault();
    const o = a.parentElement;
    a.classList.add("moving");
    const l = (g) => {
      const f = [...o.children].find((b) => {
        const M = b.getBoundingClientRect();
        return b !== a && g.clientY >= M.top && g.clientY <= M.bottom;
      });
      if (f) {
        const b = f.getBoundingClientRect();
        o.insertBefore(a, g.clientY < b.top + b.height / 2 ? f : f.nextSibling);
      }
    }, c = () => {
      window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), a.classList.remove("moving");
      const g = new Set(xa());
      ti.favs = null, ji({ favourites: [...o.children].map((f) => f.dataset.trayFav).filter((f) => g.has(f)) });
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", c);
  }
  Fe.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const a = t.target.closest("[data-tray-card]"), o = t.target.closest(".tfTrayFav");
    a ? Ys(t, a, "card", a.dataset.trayCard) : o && t.target.closest(".tfTrayGrip") ? Gi(t, o) : o != null && o.classList.contains("off") && !t.target.closest("button") && Ys(t, o, "fav", o.dataset.trayFav);
  });
  function Ui(t) {
    if (!qa || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const a = t.target.closest(".tfBoardItem"), o = a && _r().find((F) => F.el === a);
    if (!o || co.includes(o.key)) return;
    const l = Jo.get(o.key), { w: c } = ma(L.clientWidth);
    if (!l) return;
    t.preventDefault(), cn();
    const g = t.clientX, f = t.clientY;
    let b = !1, M = 0;
    const O = (F) => {
      const at = F.clientX - g, it = F.clientY - f;
      if (!b) {
        if (Math.hypot(at, it) < 4) return;
        b = !0, Ee = { key: o.key, col: l.col, row: l.row }, a.classList.add("tfDragging");
      }
      a.style.transform = "translate(" + at + "px," + it + "px)", Ee.col = Math.round((l.x + at) / (c + Ve)), Ee.row = Math.round((l.y + it - _o) / Za), M || (M = requestAnimationFrame(() => {
        M = 0, ra();
      }));
    }, I = () => {
      window.removeEventListener("pointermove", O), window.removeEventListener("pointerup", I), window.removeEventListener("pointercancel", I), b && (cancelAnimationFrame(M), ra(), a.classList.remove("tfDragging"), a.style.transform = "", Ee = null, Qo(ke(), po()), ra(), Da());
    };
    window.addEventListener("pointermove", O), window.addEventListener("pointerup", I), window.addEventListener("pointercancel", I);
  }
  function Xa(t = !1) {
    const a = L == null ? void 0 : L.querySelector(".tfDashGraph svg[data-graph]");
    if (!(a != null && a.clientWidth)) return;
    const o = a.dataset.graph + "@" + a.clientWidth + "x" + a.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (a.dataset.drawn === o) return;
    const l = !a.dataset.drawn;
    a.dataset.drawn = o;
    const c = Ps.find((g) => g.id === a.dataset.graph);
    c ? Tr(a, c).then(() => {
      (t || l) && Hs(a);
    }) : Ss(a.dataset.graph, a).then(() => {
      t && vd(a);
    });
  }
  function Ks() {
    var b, M, O;
    ue = we.model(i()), sn(), S = ue.states, S[(b = V.sources) == null ? void 0 : b.grid] && (ue.grid = V.sources.grid), S[(M = V.sources) == null ? void 0 : M.alarm] && (ue.security.alarms = [V.sources.alarm]), P.forEach((I, F) => {
      const at = S[F], it = (at == null ? void 0 : at.attributes) || {};
      if (!at || Date.now() - I.at > 2 * 60 * 1e3) {
        P.delete(F);
        return;
      }
      I.pos != null && at.state !== "opening" && at.state !== "closing" && Math.abs(Fn(F) - I.pos) < 1 && delete I.pos, I.tilt != null && Math.abs((it.current_tilt_position ?? -1) - I.tilt) < 1 && delete I.tilt, I.pos == null && I.tilt == null && P.delete(F);
    });
    const t = [];
    let a = 0;
    const o = no();
    Te = o.filter((I) => I.room).map((I) => I.room), Te.some((I) => I.id === Lt) || (Lt = ((O = Te[0]) == null ? void 0 : O.id) || null);
    const l = X === "weather" ? { key: "weather", name: "Weather" } : X && o.find((I) => I.key === X);
    if (l || (X = null), v.classList.toggle("tfAreaOpen", !!l), v.classList.toggle("tfWeatherOpen", (l == null ? void 0 : l.key) === "weather"), v.classList.toggle("tfDash", !l), Se = /* @__PURE__ */ new Map(), ue.rooms.forEach((I) => [...I.actions, ...I.plugs, ...I.readings, ...I.openings, ...I.solar, ...I.plants.flatMap((F) => [F.id, ...F.readings])].forEach((F) => Se.set(F, I.name))), !l) return Ni(t, Li());
    if (t.push({ key: "areahead", html: Nl(l, ++a) }), l.key === "weather")
      return t.weather = ++a, t;
    const c = l.ids, g = l.room ? l.room.id : l.key, f = l.room;
    return f != null && f.solar.length && t.push({ key: "energy:" + f.id, html: Vo(f, ++a) }), f && (f.readings.length || f.plugs.length || f.power != null) && t.push({ key: "readings:" + f.id, html: na(f, ++a) }), f == null || f.plants.forEach((I) => t.push({ key: "plant:" + I.id, html: hr(I, ++a) })), c.length && t.push({ key: "block:" + g, order: ++a, tiles: c.map((I) => ({ key: I, html: Yo(I) })) }), t;
  }
  const Nl = (t, a) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + a + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Zc + '</button><div class="settingsTitle">' + nt(t.name) + "</div></div>";
  let ms = 0, Pl = null;
  const gs = (t) => t === "weather" ? ca.wx : t.startsWith("room:") && L.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || L.querySelector(".tfAreas");
  function vs(t) {
    var a, o;
    X || (ms = ri().scrollTop, Pl = ((a = gs(t)) == null ? void 0 : a.getBoundingClientRect().top) ?? null), X = t, t.startsWith("room:") && (Lt = t.slice(5)), oa(), ri().scrollTop = 0, (o = L.querySelector("[data-area-back]")) == null || o.focus({ preventScroll: !0 });
  }
  let Ro = null;
  function $s(t, a) {
    if (Ro == null || Ro(), a == null) return;
    const o = ri(), l = performance.now() + 1500, c = ["wheel", "touchstart", "pointerdown", "keydown"];
    let g = 0;
    const f = () => {
      cancelAnimationFrame(g), c.forEach((M) => window.removeEventListener(M, f, !0)), Ro = null;
    }, b = () => {
      const M = t();
      if (M != null && M.isConnected) {
        const O = M.getBoundingClientRect().top - a;
        Math.abs(O) > 0.5 && (o.scrollTop += O);
      }
      performance.now() < l ? g = requestAnimationFrame(b) : f();
    };
    c.forEach((M) => window.addEventListener(M, f, { capture: !0, passive: !0 })), Ro = f, b();
  }
  function No() {
    var o;
    const t = X;
    X = null, oa(), ri().scrollTop = ms, $s(() => gs(t), Pl);
    const a = t.startsWith("room:") ? L.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || L.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? ca.wx.querySelector(".wbOpenPage") : L.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (o = (a == null ? void 0 : a.querySelector("[data-go]")) || a) == null || o.focus({ preventScroll: !0 });
  }
  const Il = (t) => t.wrap ? t.wrap(t.tiles.map((a) => a.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + nt(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((a) => a.html).join("") + "</div></div>", Hl = (t) => t.map((a) => a.key + (a.tiles ? "(" + a.tiles.map((o) => o.key).join(",") + ")" : "")).join(";");
  function ri() {
    for (let t = v.parentElement || v.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const a = getComputedStyle(t).overflowY;
      if ((a === "auto" || a === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Xs(t) {
    const a = ri(), o = (b) => {
      const M = b.getBoundingClientRect();
      return M.height && M.bottom > 0 && M.top < window.innerHeight;
    }, l = [...L.children, ...L.querySelectorAll(".tfDashTiles > *")].find((b) => !b.matches(".tfDashTiles") && o(b)), c = l == null ? void 0 : l.dataset.k, g = l == null ? void 0 : l.getBoundingClientRect().top;
    t();
    const f = l != null && l.isConnected ? l : c && L.querySelector('[data-k="' + CSS.escape(c) + '"]');
    f != null && f.isConnected && g != null && (a.scrollTop += f.getBoundingClientRect().top - g);
  }
  function oa() {
    if (!k || !L) return;
    const t = Ks(), a = (c) => {
      var g;
      return (((g = c.closest("[data-k]")) == null ? void 0 : g.dataset.k) || "") + "|" + c.dataset.iconFor + "|" + (c.dataset.iconName || "");
    }, o = /* @__PURE__ */ new Map();
    L.querySelectorAll("[data-tf] [data-icon-for]").forEach((c) => {
      c.firstElementChild && (o.get(a(c)) || o.set(a(c), []).get(a(c))).push(c.firstElementChild);
    }), L.querySelectorAll("[data-tf]").forEach((c) => c.remove()), Ue.clear();
    const l = document.createElement("div");
    l.innerHTML = t.map((c) => c.tiles ? Il(c) : c.html).join(""), t.forEach((c) => c.tiles ? c.tiles.forEach((g) => Ue.set(g.key, g.html)) : Ue.set(c.key, c.html)), Yr = Hl(t), l.querySelectorAll("[data-icon-for]").forEach((c) => {
      var f;
      const g = !c.firstElementChild && ((f = o.get(a(c))) == null ? void 0 : f.shift());
      g && c.appendChild(g);
    }), L.append(...l.children), sr(t.weather), lr(), ps.disconnect(), ra(), Na(L), xs(L), T(L), U(), G && Ss(G.id), Io(), Yi(), Vl(), requestAnimationFrame(xt);
  }
  const sa = (t) => {
    var o;
    const a = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return a && { label: a.getAttribute("aria-label"), act: (o = a.dataset) == null ? void 0 : o.act };
  }, Or = (t, a) => {
    var o;
    a && ((o = a.label && t.querySelector('[aria-label="' + CSS.escape(a.label) + '"]') || a.act && t.querySelector('[data-act="' + CSS.escape(a.act) + '"]')) == null || o.focus({ preventScroll: !0 }));
  };
  function Js(t, a) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(a), a;
    const o = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), l = a.querySelector(":scope > .tfDacPad");
    if (o)
      return (l == null ? void 0 : l.dataset.dac) !== o.dataset.dac ? (t.replaceWith(a), a) : (t.querySelector(":scope > .tfActionHead").replaceWith(a.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", a.classList.contains("on")), ["data-light", "data-tone"].forEach((f) => a.hasAttribute(f) ? t.setAttribute(f, a.getAttribute(f)) : t.removeAttribute(f)), [...t.style].filter((f) => f.startsWith("--") && !f.startsWith("--tf-")).forEach((f) => t.style.removeProperty(f)), [...a.style].forEach((f) => t.style.setProperty(f, a.style.getPropertyValue(f))), t);
    const c = (f) => {
      var b;
      return ((b = f.dataset) == null ? void 0 : b.iconFor) !== void 0;
    };
    if (c(t) && c(a) && !a.children.length && t.dataset.iconFor === a.dataset.iconFor && t.dataset.iconName === a.dataset.iconName && t.firstElementChild)
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
    const g = [...a.children];
    return [...t.children].forEach((f, b) => Js(f, g[b])), t;
  }
  function Fl(t, a) {
    const o = document.createElement("div");
    o.innerHTML = a;
    const l = sa(t), c = Js(t, o.firstElementChild);
    Na(c), xs(c), T(c), Or(c, l);
  }
  function Da() {
    !k || !L || Ee || Xs(Ol);
  }
  function Ol() {
    if (!L.querySelector("[data-tf]")) {
      oa();
      return;
    }
    const t = Ks();
    if (Hl(t) !== Yr) {
      oa();
      return;
    }
    const a = (o) => [...C.keys()].some((l) => {
      const c = l.slice(l.indexOf("|") + 1);
      return o === c || o.endsWith(":" + c);
    });
    t.forEach((o) => (o.tiles || [o]).forEach((l) => {
      if (Ue.get(l.key) === l.html || a(l.key)) return;
      const c = L.querySelector('[data-k="' + CSS.escape(l.key) + '"]');
      if (c) {
        if (Ue.set(l.key, l.html), G && G.key === l.key && c.querySelector(".tfOpen")) {
          c.querySelector(".tfOpen .activityRowMeta").textContent = Co(G.id);
          return;
        }
        Fl(c, l.html), G && G.key === l.key && Ss(G.id), l.key.startsWith("energy:") && Io();
      }
    })), Yi(), Vl(), H(), U(), Qt == null || Qt.update(), va == null || va.forEach((o) => o.update()), v.classList.contains("tfDash") && dn(), requestAnimationFrame(xt);
  }
  const bs = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && Ie(t.color_mode)]],
    climate: (t) => [["Current temperature", Ra(t.current_temperature) + " °C"], ["Target", Ra(t.temperature) + " °C"], ["Action", Ie(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", Ie(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", Ie(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Ra(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : Ie(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, Wl = (t) => {
    var o;
    const a = (((o = bs[t.split(".")[0]]) == null ? void 0 : o.call(bs, Kt(t))) || []).filter(([, l]) => l != null && l !== "");
    return a.length ? '<div class="tfMoreRows">' + a.map(([l, c]) => '<div class="tfMoreRow"><span>' + nt(l) + "</span><span>" + nt(c) + "</span></div>").join("") + "</div>" : "";
  }, ql = (t) => Qi(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function si(t, a = {}, o = !1) {
    return '<div class="tfMoreList">' + t.map((l) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + nt(l.name) + '</div><div class="tfMoreTiles' + (o ? " single" : "") + '">' + l.ids.map((c) => Un(c, a)).join("") + "</div></div>").join("") + "</div>";
  }
  const de = document.createElement("div");
  de.className = "tfMoreBackdrop", de.hidden = !0, v.appendChild(de);
  const jl = (t, a) => {
    for (let o = t; o && o !== de; o = o.parentElement) {
      const l = getComputedStyle(o).overflowY;
      if ((l === "auto" || l === "scroll") && o.scrollHeight > o.clientHeight + 1 && (a < 0 ? o.scrollTop > 0 : o.scrollTop + o.clientHeight < o.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let pn = null;
  de.addEventListener("touchstart", (t) => {
    pn = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), de.addEventListener("touchmove", (t) => {
    var c, g;
    if (!pn || t.touches.length > 1 || (g = (c = t.target).closest) != null && g.call(c, "input,textarea,select")) return;
    const a = t.touches[0], o = pn.x - a.clientX, l = pn.y - a.clientY;
    pn = { x: a.clientX, y: a.clientY }, Math.abs(l) >= Math.abs(o) && !jl(t.target, l) && t.preventDefault();
  }, { passive: !1 }), de.addEventListener("wheel", (t) => {
    jl(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  function Wr() {
    const t = de.querySelector(".tfMorePair"), a = de.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - a.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Wr, { passive: !0 }), k && da();
  let Po = [];
  const li = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function ws(t) {
    const a = (M, O = "") => '<div class="tfMoreHead">' + (kt != null && kt.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + jd + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + nt(M) + "</div>" + O + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + ph + "</button></div>", o = (M, O) => '<div class="tfMoreNow"><div class="tfMoreState">' + nt(M) + "</div>" + (O ? '<div class="tfMoreSub">' + nt(O) + "</div>" : "") + "</div>", l = si;
    if (t === "favourites") {
      const M = xa(), O = new Set(M), I = [{ name: "Starred", ids: M }, { name: "Home", ids: ue.homeVacuums }, { name: "Security", ids: [...ue.security.alarms, ...ue.security.locks] }, ...ue.rooms.map((F) => ({ name: F.name, ids: [...F.actions, ...F.plugs] }))].map((F, at) => at ? { ...F, ids: F.ids.filter((it) => !O.has(it)) } : F).filter((F) => F.ids.length);
      return [a("Favourites"), o(M.length ? M.length + " starred" : "None starred"), l(I, { star: !0 }, !0)];
    }
    const c = (M, { name: O = "", alert: I = !1, plain: F = !1 } = {}) => {
      const at = F ? [] : M.filter((Z) => od.includes(Z.split(".")[0])), it = M.filter((Z) => !at.includes(Z)), dt = (Z) => Z.startsWith("vacuum.") && Kt(Z).battery_level != null ? Kt(Z).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (O ? '<div class="tfMoreGroupName">' + nt(O) + "</div>" : "") + '<div class="tfMoreActions">' + at.map((Z) => Yo(Z, !0)).join("") + it.map((Z) => Un(Z, { plain: F, alert: I, say: F ? dt(Z) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const M = Li().find((at) => at.key === t.slice(8));
      if (!M) return null;
      const O = M.key === "light" ? (M.groups || []).flatMap((at) => at.ids) : [], I = O.some((at) => {
        var it;
        return ((it = S[at]) == null ? void 0 : it.state) === "on";
      }), F = O.length ? '<button class="primary" type="button" data-acts="' + So(O.map((at) => ["light", I ? "turn_off" : "turn_on", at])) + '">' + (I ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(M.name), '<div class="tfMoreNowRow">' + o(M.value) + F + "</div>", ...(M.groups || []).map((at) => c(at.ids, { name: at.name === M.name ? "" : at.name, alert: at.alert, plain: M.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, M, O] = t.split(":"), I = ue.rooms.find((it) => it.id === M), F = I && K(I).find((it) => it.key === O);
      if (!F) return null;
      const at = F.acts ? '<button class="primary" type="button" data-acts="' + So(F.acts) + '">' + (F.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(I.name + " " + F.label.toLowerCase()), '<div class="tfMoreNowRow">' + o(F.value) + at + "</div>", c(Ct(I, O))];
    }
    const g = t.split(".")[0], f = S[t], b = od.includes(g) ? Y(t) : { sections: [] };
    return [
      a(It(t)),
      o(ia(t), f.last_changed && cr(Date.parse(f.last_changed))),
      (kt == null ? void 0 : kt.at) && '<svg class="tfGraph tfDay" data-day="' + nt(t) + '" role="img" aria-label="' + nt(It(t)) + ', last 24 hours"></svg>',
      g === "cover" && '<div data-cover-art="' + nt(t) + '"></div>',
      ...b.sections.filter(Boolean),
      Qs(t) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(kt != null && kt.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + sp + "</button>"
    ].filter(Boolean);
  }
  const Qs = (t) => li(t) ? "" : Wl(t) + ql(t);
  let qr = "";
  function tl(t) {
    var a;
    kt && (kt.details = t, Yi(), (a = de.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || a.focus({ preventScroll: !0 }));
  }
  const za = (t) => {
    const a = S[t], o = Fn(t), l = _e(t);
    return { kind: qd(a), name: It(t), text: ia(t), pos: o, target: Math.abs(l - o) > 0.5 ? l : null, moving: a.state === "opening" || a.state === "closing", tilt: Mo(t) ?? 100, canSet: Yt(t, tp) };
  };
  function xs(t) {
    t.querySelectorAll("[data-cover-art]").forEach((a) => {
      const o = a.dataset.coverArt, l = a.dataset.artKey || "more:" + o;
      let c = gt.get(l);
      c || (c = ch({ onMove: (g) => Ki(o, g), onSet: (g) => {
        Ki(o, g), Ho("pos", o);
      } }), c.coverId = o, gt.set(l, c)), a.replaceWith(c.el), c.update(za(o));
    });
  }
  const zl = (t) => [...gt.values()].filter((a) => a.coverId === t), el = () => gt.forEach((t) => {
    S[t.coverId] && t.update(za(t.coverId));
  }), Vl = () => {
    gt.forEach((t, a) => {
      t.el.isConnected || (t.destroy(), gt.delete(a));
    }), el();
  };
  function Yi() {
    var g, f;
    if (!kt || !(li(kt.id) || S[kt.id])) {
      de.hidden = !0;
      return;
    }
    if ([...C.keys()].some((b) => b.endsWith("|" + kt.id))) {
      el();
      return;
    }
    const t = ws(kt.id), a = de.querySelector(".tfMore");
    if (!t) {
      ys();
      return;
    }
    const o = sa(de), l = Qs(kt.id), c = kt.frame ? kt.frame.wide : kt.id.startsWith("summary:") || kt.id.startsWith("group:");
    if (de.hidden || !a || t.length !== Po.length || a.classList.contains("wide") !== c) {
      const b = Va ? kt.scroll || 0 : !de.hidden && a ? a.scrollTop : 0;
      de.innerHTML = '<div class="tfMorePair' + (de.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (c ? " wide" : "") + '"' + (kt.frame ? ' style="height:' + kt.frame.h + 'px"' : "") + ">" + t.join("") + "</section>" + (l ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + jd + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + l + "</div></div></aside>" : "") + "</div>", qr = l, de.classList.toggle("wide", c), de.hidden = !1, Wr(), xs(de), T(de), Na(de), de.querySelectorAll("[data-day]").forEach((M) => Ms(M.dataset.day, M, kt.at)), b && (de.querySelector(".tfMore").scrollTop = b), Or(de, o), de.contains(n.activeElement) || (g = de.querySelector("[data-more-close]")) == null || g.focus({ preventScroll: !0 });
    } else {
      if (t.forEach((b, M) => {
        var F, at;
        if (b === Po[M] || b.includes("data-cover-art") || a.children[M].contains((at = (F = n.activeElement) == null ? void 0 : F.matches) != null && at.call(F, "input,select") ? n.activeElement : null) || [...C.keys()].some((it) => a.children[M].querySelector('[data-drag="' + CSS.escape(it) + '"]'))) return;
        const O = document.createElement("div");
        O.innerHTML = b;
        const I = Js(a.children[M], O.firstElementChild);
        Na(I), T(I);
      }), l !== qr) {
        const b = de.querySelector(".tfMoreSideBody");
        b && (b.innerHTML = l), qr = l;
      }
      de.contains(n.activeElement) || Or(de, o);
    }
    (f = de.querySelector(".tfMorePair")) == null || f.classList.toggle("details", !!(kt.details && l)), Po = t, el();
  }
  setInterval(() => {
    kt && Yi();
  }, 15 * 1e3);
  function al(t, a) {
    var c;
    const o = !!(kt && a && de.contains(a)), l = o && de.querySelector(".tfMore");
    o && (kt.scroll = l.scrollTop), kt = { id: t, opener: o ? kt.opener : a, back: o ? kt : null, frame: o ? kt.frame || { wide: l.classList.contains("wide"), h: l.offsetHeight } : null, at: Number((c = a == null ? void 0 : a.dataset) == null ? void 0 : c.at) || null }, nl();
  }
  let Va = !1;
  function nl() {
    Po = [], Va = !de.hidden, gt.forEach((t, a) => {
      a !== kt.id && de.contains(t.el) && (t.destroy(), gt.delete(a));
    }), Yi(), Va = !1;
  }
  function ys() {
    var o, l, c, g, f, b;
    const t = kt == null ? void 0 : kt.opener;
    kt = null, gt.forEach((M, O) => {
      de.contains(M.el) && (M.destroy(), gt.delete(O));
    }), Oa.forEach((M, O) => {
      O.startsWith("more:") && Oa.delete(O);
    }), de.hidden = !0, de.innerHTML = "";
    const a = { preventScroll: !0 };
    t != null && t.isConnected ? t.focus(a) : (o = t == null ? void 0 : t.dataset) != null && o.more ? (l = L.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || l.focus(a) : (c = t == null ? void 0 : t.dataset) != null && c.summary ? (g = L.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || g.focus(a) : (f = t == null ? void 0 : t.hasAttribute) != null && f.call(t, "data-favs-edit") && ((b = L.querySelector("[data-favs-edit]")) == null || b.focus(a));
  }
  function di(t, a, o, l = {}) {
    const c = a.map((bt) => bt[1]), g = l.zero ? 0 : Math.min(...c), f = Math.max(...c), b = Math.max(120, t.clientWidth || 260), M = Math.max(60, t.clientHeight || 130), O = 8, I = M - 20, F = Date.now() - 24 * 3600 * 1e3, at = 24 * 3600 * 1e3, it = (bt) => Math.max(0, Math.min(b, (bt - F) / at * b)), dt = (bt) => f === g ? (O + I) / 2 : I - (bt - g) / (f - g) * (I - O);
    let Z = "M" + it(a[0][0]).toFixed(1) + " " + dt(a[0][1]).toFixed(1);
    for (let bt = 1; bt < a.length; bt++) Z += l.smooth ? "L" + it(a[bt][0]).toFixed(1) + " " + dt(a[bt][1]).toFixed(1) : "H" + it(a[bt][0]).toFixed(1) + "V" + dt(a[bt][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + b + " " + M), t.setAttribute("aria-label", o), t.innerHTML = '<path d="' + Z + "V" + I + "H" + it(a[0][0]).toFixed(1) + 'Z" fill="' + (l.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + Z + '" fill="none" stroke="' + (l.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (M - 4) + '">24 h ago</text><text x="' + b + '" y="' + (M - 4) + '" text-anchor="end">Now</text>';
  }
  const Zi = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, ol = (t, a) => {
    const o = t.split(".")[0];
    return Zi[o] ? Zi[o].includes(a) : o === "alarm_control_panel" || o === "climate" || o === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(a) : a === "on";
  }, Sd = (t) => {
    const a = t.split(".")[0], o = Kt(t).device_class;
    return a === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[o] || (nd.includes(o) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[a] || "On";
  }, jr = /* @__PURE__ */ new Map();
  let ks = 0;
  async function ci(t) {
    let a = jr.get(t);
    if (!a || Date.now() - a.at > 60 * 1e3) {
      let c = [];
      try {
        const g = await B({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        c = ((g == null ? void 0 : g[t]) || []).map((f) => [f.lu != null ? f.lu * 1e3 : Date.parse(f.last_updated || f.last_changed), String(f.s ?? f.state)]).filter(([f]) => Number.isFinite(f));
      } catch {
      }
      c.length || (c = (oo || []).filter((g) => g.entity_id === t).map((g) => [g.when * 1e3, String(g.state)])), a = { at: Date.now(), pts: c }, jr.set(t, a);
    }
    const o = S[t], l = a.pts.slice().sort((c, g) => c[0] - g[0]);
    return o && (!l.length || l[l.length - 1][1] !== o.state) && l.push([Date.parse(o.last_changed) || Date.now(), o.state]), l;
  }
  async function Ms(t, a, o) {
    const l = await ci(t);
    if (!a.isConnected) return;
    const c = l.map(([W, Ot]) => [W, Number(Ot)]);
    if (l.length > 1 && c.every(([, W]) => Number.isFinite(W))) {
      di(a, c, It(t) + ", last 24 hours");
      return;
    }
    const g = Date.now(), f = g - 864e5, b = Math.max(200, a.clientWidth || 360), M = 62, O = (W) => Math.max(0, Math.min(b, (W - f) / 864e5 * b)), I = [];
    let F = null;
    l.forEach(([W, Ot]) => {
      const Ne = ol(t, Ot);
      Ne && F == null ? F = Math.max(W, f) : !Ne && F != null && (I.push([F, Math.max(W, f)]), F = null);
    }), F != null && I.push([F, g]);
    const at = Sr(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", it = Sd(t), dt = "tfDayClip" + ++ks, Z = I.map(([W, Ot]) => it + (Ot >= g - 1e3 && W <= f + 1e3 ? " all day" : Ot >= g - 1e3 ? " since " + nn(W) : W <= f + 1e3 ? " until " + nn(Ot) : " " + nn(W) + "–" + nn(Ot)));
    let bt = "", j = -1 / 0;
    I.forEach(([W], Ot) => {
      const Ne = Z[Ot].length * 5.4, fe = Math.min(O(W), b - Ne);
      fe < j + 8 || (bt += '<text x="' + fe.toFixed(1) + '" y="10">' + nt(Z[Ot]) + "</text>", j = fe + Ne);
    });
    let vt = '<text x="' + b + '" y="' + (M - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((W) => {
      let Ot = new Date(g).setHours(W, 0, 0, 0);
      Ot > g && (Ot -= 864e5), O(Ot) > 8 && O(Ot) < b - 34 && (vt += '<text x="' + O(Ot).toFixed(1) + '" y="' + (M - 2) + '" text-anchor="middle">' + String(W).padStart(2, "0") + "</text>");
    }), a.setAttribute("viewBox", "0 0 " + b + " " + M), a.setAttribute("aria-label", It(t) + ", last 24 hours: " + (Z.length ? Z.join(", ") : "no changes")), a.innerHTML = '<clipPath id="' + dt + '"><rect x="0" y="18" width="' + b + '" height="26" rx="8"/></clipPath>' + bt + '<rect x="0" y="18" width="' + b + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + dt + ')">' + I.map(([W, Ot]) => '<rect x="' + O(W).toFixed(1) + '" y="18" width="' + Math.max(2, O(Ot) - O(W)).toFixed(1) + '" height="26" fill="' + at + '"/>').join("") + "</g>" + (o && o >= f ? '<line x1="' + O(o).toFixed(1) + '" x2="' + O(o).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + vt;
  }
  function Gl(t) {
    var l;
    const a = Number((l = S[t]) == null ? void 0 : l.state), o = Date.now();
    if (Kt(t).state_class === "total_increasing") {
      const c = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), g = Math.max(1, o - c);
      return [...Array(49)].map((f, b) => c + g * b / 48).map((f) => [f, Math.round(a * Math.pow((f - c) / g, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((c, g) => [o - (48 - g) * 30 * 60 * 1e3, Math.round(a * (0.96 + 0.04 * Math.sin(g / 6)) * 10) / 10]);
  }
  async function Ss(t, a) {
    var it, dt;
    let o = J.get(t);
    if (t.endsWith("_solar_power")) o = { at: Date.now(), points: bc() };
    else if (Qi(t)) o = { at: Date.now(), points: Gl(t) };
    else if (!o || Date.now() - o.at > 5 * 60 * 1e3) {
      try {
        const Z = new Date(Date.now() - 864e5).toISOString(), bt = await B({ type: "history/history_during_period", start_time: Z, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), j = ((bt == null ? void 0 : bt[t]) || []).map((vt) => [vt.lu != null ? vt.lu * 1e3 : Date.parse(vt.last_updated || vt.last_changed), Number(vt.s ?? vt.state)]).filter(([vt, W]) => Number.isFinite(vt) && Number.isFinite(W));
        o = { at: Date.now(), points: j };
      } catch {
        o = { at: Date.now(), points: [] };
      }
      J.set(t, o);
    }
    const l = a || L.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!l) return;
    const c = S[t], g = ((it = c == null ? void 0 : c.attributes) == null ? void 0 : it.unit_of_measurement) || "", f = o.points.slice(), b = Number(c == null ? void 0 : c.state);
    if (Number.isFinite(b) && !t.endsWith("_solar_power") && f.push([Date.now(), b]), f.length < 2) {
      l.setAttribute("aria-label", It(t) + ": no history for the last 24 hours"), l.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const M = f.map((Z) => Z[1]), O = Math.min(...M), I = Math.max(...M), F = (Z) => Z.toLocaleString(void 0, { maximumFractionDigits: Math.abs(Z) >= 100 ? 0 : 1 }), at = ((dt = c == null ? void 0 : c.attributes) == null ? void 0 : dt.state_class) === "total_increasing";
    di(l, f, It(t) + ", last 24 hours: " + (at ? "+" + F(M[M.length - 1] - M[0]) : O === I ? F(O) : F(O) + " to " + F(I)) + (g ? " " + g : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power") });
  }
  function Io() {
    const t = L == null ? void 0 : L.querySelector("[data-solar]");
    if (!t) return;
    const a = bc();
    di(t, a, "Solar, last 24 hours: up to " + Ra(Math.max(...a.map((o) => o[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Ul(t, a) {
    const o = a.entity_id, l = P.get(o) || {}, c = { open_cover: 100, close_cover: 0, set_cover_position: a.position, toggle: Fn(o) > 0 ? 0 : 100 }[t], g = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: a.tilt_position }[t];
    c != null && (l.pos = c), g != null && (l.tilt = g), t === "stop_cover" && (delete l.pos, delete l.tilt), t === "stop_cover_tilt" && delete l.tilt, l.at = Date.now(), P.set(o, l);
  }
  function ta(t, a, o) {
    var c;
    const l = o == null ? void 0 : o.entity_id;
    return t !== "light" || typeof l != "string" || !Ua[l] || !yn(l) || o.brightness_pct != null || o.brightness != null ? [a, o] : a !== "turn_on" && !(a === "toggle" && ((c = S[l]) == null ? void 0 : c.state) !== "on") ? [a, o] : ["turn_on", { ...o, brightness_pct: Ua[l] }];
  }
  function Cs(t, a, o, l) {
    let c = { entity_id: o, ...l || {} };
    return [a, c] = ta(t, a, c), t === "cover" && Ul(a, c), ea[o] = (ea[o] || 0) + 1, Fo.set(np, JSON.stringify(ea)), we.call(t, a, c) ? Promise.resolve() : Promise.resolve(Mt(t, a, c));
  }
  function Nn(t) {
    const [a, o, l, c] = t.split("|");
    Cs(a, o, l, c ? JSON.parse(c) : null).catch(() => {
    });
  }
  function Ki(t, a) {
    C.set("pos|" + t, a), Ue.delete(t), Po = Po.map(() => ""), [L, de].forEach((l) => l.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((c) => Kr(c, a)));
    const o = L.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (o && (o.textContent = Math.round(a) + "%"), (kt == null ? void 0 : kt.id) === t) {
      const l = de.querySelector(".tfMoreState"), c = de.querySelector(".tfMoreSub");
      l && (l.textContent = Math.round(a) + "%", l.classList.add("live")), c && (c.textContent = "Currently " + Fn(t) + "%");
    }
    zl(t).forEach((l) => l.update(za(t)));
  }
  const Cd = (t, a) => {
    const o = t.shiftKey ? 10 : 1, l = { ArrowUp: a + o, ArrowRight: a + o, ArrowDown: a - o, ArrowLeft: a - o, PageUp: a + 25, PageDown: a - 25, Home: 0, End: 100 }[t.key];
    return l == null ? null : Math.max(0, Math.min(100, Math.round(l)));
  };
  function il(t, a) {
    var Z;
    const o = t.dataset.blocks;
    (Z = t.setPointerCapture) == null || Z.call(t, a.pointerId);
    const l = (bt) => {
      const j = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (bt.clientX - j.left) / j.width * 100));
    }, c = l(a), g = a.clientX;
    let f = !1, b = _e(o), M = c, O = 0;
    const I = () => {
      b = Math.abs(M - b) < 0.2 ? M : b + (M - b) * 0.14, Ki(o, b), O = requestAnimationFrame(I);
    }, F = () => {
      f || (f = !0, t.classList.add("fine"), O = requestAnimationFrame(I));
    }, at = setTimeout(F, 350), it = (bt) => {
      M = l(bt), Math.abs(bt.clientX - g) > 6 && (clearTimeout(at), F());
    }, dt = () => {
      clearTimeout(at), cancelAnimationFrame(O), t.removeEventListener("pointermove", it), t.removeEventListener("pointerup", dt), t.removeEventListener("pointercancel", dt), t.classList.remove("fine"), Ki(o, f ? Math.round(b) : (Math.min(3, Math.floor(c / 25)) + 1) * 25), Ho("pos", o);
    };
    t.addEventListener("pointermove", it), t.addEventListener("pointerup", dt), t.addEventListener("pointercancel", dt);
  }
  function rl(t) {
    var c;
    const [a, o] = t.dataset.open.split("|"), l = t.closest(".tfCard");
    G = { key: a, id: o, h: l ? Math.round(l.getBoundingClientRect().height) : 0 }, Ue.delete(a), Da(), (c = L.querySelector(".tfOpen [data-close]")) == null || c.focus({ preventScroll: !0 });
  }
  function zr(t) {
    var a;
    Lt = t.dataset.area, L.querySelectorAll(".tfAreaPanel").forEach((o) => {
      var c;
      const l = o === t;
      o.classList.toggle("active", l), o.setAttribute("aria-expanded", String(l)), (c = o.querySelector(".panelExpanded")) == null || c.toggleAttribute("inert", !l);
    }), Ue.set("areas", Rt(((a = L.querySelector('[data-k="areas"]')) == null ? void 0 : a.style.order) || 1));
  }
  const sl = {
    bright: { value: (t, a) => Math.round(a * 100), text: (t, a) => a ? a + "%" : "Off", send: (t, a) => a > 0 ? ["light", "turn_on", { brightness_pct: a }] : ["light", "turn_off", {}] },
    ct: { value: (t, a) => {
      const [o, l] = Dn(t);
      return Math.round(o + a * (l - o));
    }, text: (t, a) => a.toLocaleString() + "k", send: (t, a) => ["light", "turn_on", { color_temp_kelvin: a }] },
    hue: { value: (t, a) => Math.round(a * 360), text: () => "Colour", send: (t, a) => {
      var o;
      return ["light", "turn_on", { hs_color: [a, Math.max(60, ((o = Kt(t).hs_color) == null ? void 0 : o[1]) || 100)] }];
    } },
    pos: { value: (t, a) => Math.round(a * 100), text: (t, a) => Math.round(a) + "%", send: (t, a) => ["cover", "set_cover_position", { position: Math.round(a) }] },
    tilt: { value: (t, a) => Math.round(a * 100), text: (t, a) => "Tilt " + a + "%", send: (t, a) => ["cover", "set_cover_tilt_position", { tilt_position: a }] },
    vol: { value: (t, a) => Math.round(a * 100) / 100, text: (t, a) => Math.round(a * 100) + "%", send: (t, a) => ["media_player", "volume_set", { volume_level: a }] }
  };
  function Ts(t, a, o, l) {
    var M;
    const c = sl[a].value(o, l);
    C.set(a + "|" + o, c);
    const g = Math.round(l * 100) + "%", f = t.querySelector("i");
    if (a === "tilt") {
      f.style.width = "calc((100% - 8px) * " + l + ")";
      const [O, I] = t.querySelectorAll("span");
      O.classList.toggle("lit", l > 0.08), I.classList.toggle("lit", l > 0.92), Ue.delete(o), Po = Po.map(() => ""), zl(o).forEach((F) => F.update(za(o)));
    } else if (f) f.style.width = g;
    else {
      let O = t.querySelector("b");
      O || (O = document.createElement("b"), t.appendChild(O)), O.style.left = g;
    }
    t.setAttribute("aria-valuenow", String(Math.round(l * 100)));
    const b = (M = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : M.querySelector(".tfName .activityRowMeta, .tfMoreState");
    b && (b.textContent = sl[a].text(o, c));
  }
  function Ho(t, a) {
    const o = C.get(t + "|" + a), [l, c, g] = sl[t].send(a, o), f = () => setTimeout(() => {
      C.delete(t + "|" + a), Da();
    }, 1500);
    Cs(l, c, a, g).then(f, f);
  }
  function un(t) {
    t.addEventListener("click", (a) => {
      var l, c;
      const o = a.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (ja && !a.target.closest(".tfBoardMenu,[data-board-more]") && cn(), !(!o || !t.contains(o) || o.disabled))
        if (o.dataset.boardMore)
          (ja == null ? void 0 : ja.key) === o.dataset.boardMore ? cn(!0) : Tn(o.dataset.boardMore, o);
        else if (o.dataset.boardAct) Wi(ja.key, o.dataset.boardAct);
        else if (o.dataset.boardShow) uo(o.dataset.boardShow);
        else if (o.dataset.favHide) ai(o.dataset.favHide, !1);
        else if (o.dataset.energyPick) Is(o.dataset.energyPick);
        else if (o.dataset.act) Nn(o.dataset.act);
        else if (o.hasAttribute("data-details")) tl(!(kt != null && kt.details));
        else if (o.hasAttribute("data-details-close")) tl(!1);
        else if (o.dataset.summary) Zo(o.dataset.summary, o);
        else if (o.dataset.star) Qr(o.dataset.star);
        else if (o.hasAttribute("data-more-back")) {
          const g = kt.id;
          kt = kt.back, nl(), (l = de.querySelector('.tfMore [data-more="' + CSS.escape(g) + '"]')) == null || l.focus({ preventScroll: !0 });
        } else if (o.hasAttribute("data-favs-edit")) al("favourites", o);
        else if (o.dataset.acts) JSON.parse(o.dataset.acts).forEach(([g, f, b, M]) => Cs(g, f, b, M).catch(() => {
        }));
        else if (o.dataset.more) al(o.dataset.more, o);
        else if (o.hasAttribute("data-more-close")) ys();
        else if (o.dataset.go) vs("room:" + o.dataset.go);
        else if (o.hasAttribute("data-area-back")) No();
        else if (o.dataset.open) rl(o);
        else if (o.hasAttribute("data-close")) {
          const g = G;
          G = null, Ue.delete(g.key), Da(), (c = L.querySelector('[data-open="' + CSS.escape(g.key + "|" + g.id) + '"]')) == null || c.focus({ preventScroll: !0 });
        } else o.classList.contains("tfAreaPanel") && !o.classList.contains("active") && zr(o);
    }), t.addEventListener("keydown", (a) => {
      var l, c, g, f, b, M, O;
      const o = a.target;
      if ((l = o.dataset) != null && l.open && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), rl(o)), (c = o.dataset) != null && c.energyPick && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Is(o.dataset.energyPick)), (g = o.classList) != null && g.contains("tfAreaPanel") && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), zr(o)), (f = o.dataset) != null && f.summary && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Zo(o.dataset.summary, o)), a.key === "Escape" && ja && t === L) {
        a.preventDefault(), cn(!0);
        return;
      }
      if (a.key === "Escape" && qa && t === L) {
        a.preventDefault(), us(!1), (b = u("dashEditNav")) == null || b.focus();
        return;
      }
      if (a.key === "Escape" && X && t === L && (a.preventDefault(), No()), (M = o.dataset) != null && M.blocks) {
        const I = o.dataset.blocks, F = Cd(a, Math.round(_e(I)));
        if (F == null) return;
        a.preventDefault(), Ki(I, F), clearTimeout(mt.get(I)), mt.set(I, setTimeout(() => Ho("pos", I), 500));
        return;
      }
      if ((O = o.dataset) != null && O.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(a.key)) {
        a.preventDefault();
        const [I, F] = o.dataset.drag.split("|"), at = Number(o.getAttribute("aria-valuenow")) / 100, it = a.key === "Home" ? 0 : a.key === "End" ? 1 : Math.max(0, Math.min(1, at + (a.key === "ArrowLeft" || a.key === "ArrowDown" ? -0.05 : 0.05)));
        Ts(o, I, F, it), Ho(I, F);
      }
    }), t.addEventListener("pointerdown", (a) => {
      var Ne;
      const o = a.target.closest("[data-blocks]");
      if (o && a.button === 0) {
        a.preventDefault(), il(o, a);
        return;
      }
      const l = a.target.closest("[data-drag]");
      if (!l || a.button > 0) return;
      const [c, g] = l.dataset.drag.split("|"), f = c === "bright" && !yn(g), b = a.pointerType !== "mouse";
      if (f && !b) {
        Nn(xe("light", "toggle", g));
        return;
      }
      const M = c === "bright" && ((Ne = S[g]) == null ? void 0 : Ne.state) !== "on", O = c === "tilt" ? 4 : 0, I = () => l.getBoundingClientRect().width - O * 2, F = (fe) => {
        const Ba = l.getBoundingClientRect();
        return Math.max(0, Math.min(1, (fe.clientX - Ba.left - O) / I()));
      };
      let at = b ? "waiting" : M ? "pressed" : "dragging", it = 0;
      const dt = a.clientX, Z = a.clientY, bt = (fe, Ba) => Math.hypot(fe.clientX - dt, fe.clientY - Z) > Ba, j = () => {
        try {
          l.setPointerCapture(a.pointerId);
        } catch {
        }
      };
      b || (a.preventDefault(), j()), at === "dragging" && Ts(l, c, g, F(a));
      const vt = () => {
        var fe, Ba;
        at = "sliding", _ = l, l.classList.add("held"), j(), (fe = navigator.userActivation) != null && fe.hasBeenActive && ((Ba = navigator.vibrate) == null || Ba.call(navigator, 8)), it = M ? (Ua[g] ?? 100) / 100 : Number(l.getAttribute("aria-valuenow")) / 100;
      }, W = (fe) => {
        at === "waiting" && bt(fe, D) ? !f && Math.abs(fe.clientX - dt) > Math.abs(fe.clientY - Z) ? vt() : at = "gone" : at === "pressed" && bt(fe, 4) && (at = "dragging"), at === "sliding" ? Ts(l, c, g, Math.max(0, Math.min(1, it + (fe.clientX - dt) / I()))) : at === "dragging" && Ts(l, c, g, F(fe));
      }, Ot = (fe) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Ba, Xt) => l.removeEventListener(Ba, Xt ? Ot : W)), l.classList.remove("held"), _ === l && (_ = null), at === "sliding" || at === "dragging" ? Ho(c, g) : fe.type === "pointerup" && f ? Nn(xe("light", "toggle", g)) : fe.type === "pointerup" && M && (at === "waiting" || at === "pressed") && Cs("light", "turn_on", g).catch(() => {
        });
      };
      l.addEventListener("pointermove", W), l.addEventListener("pointerup", Ot), l.addEventListener("pointercancel", Ot);
    }), t.addEventListener("touchmove", (a) => {
      _ && a.cancelable && a.preventDefault();
    }, { passive: !1 });
  }
  return L && k && (hd(), un(L), un(de), de.addEventListener("click", (t) => {
    t.target === de && ys();
  }), ($i = n.getElementById("homeNav")) == null || $i.addEventListener("click", () => {
    X && No();
  }), (ll = n.querySelector(".bottomNav")) == null || ll.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + lp + "</button>"), (dl = u("dashEditNav")) == null || dl.addEventListener("click", () => us(!qa)), L.addEventListener("pointerdown", Ui), new ResizeObserver(() => {
    v.classList.contains("tfDash") && Ao() !== Fs ? Da() : dn();
  }).observe(L), window.addEventListener("resize", dn, { passive: !0 }), de.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.stopPropagation(), kt != null && kt.details ? tl(!1) : ys());
  })), ot(), {
    update(t) {
      if (!k) return;
      const a = !Object.keys(S).length;
      S = { ...Object.fromEntries(Object.entries(S).filter(([l]) => Qi(l))), ...t || {} };
      for (const l in S) l.startsWith("light.") && S[l].state === "on" && yn(l) && jn(l, wo(S[l]));
      a ? oa() : Da();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      xi = !0, Qt == null || Qt.destroy(), Qt = null, va == null || va.forEach((t) => t.destroy()), va = null;
    },
    resume() {
      xi = !1, !(!k || !(L != null && L.querySelector("[data-tf]"))) && (ne.isConnected && sr(ne.style.order), lr());
    }
  };
}
const Fh = "0.72.0", Ud = "move_assistant", Oh = "move_assistant", pp = "move_assistant_checkin_reminder";
function Wh() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class qh extends HTMLElement {
  setConfig(d) {
    this._config = d || {};
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
  set hass(d) {
    var u;
    const i = !this._hass;
    if (this._hass = d, i) {
      this._init();
      return;
    }
    this._app && d.states !== this._lastStates && (this._lastStates = d.states, this._app.updateStates(d.states), (u = this._test) == null || u.update(d.states));
  }
  connectedCallback() {
    var d, i;
    (d = this._app) == null || d.resume(), (i = this._test) == null || i.resume();
  }
  disconnectedCallback() {
    var d, i;
    (d = this._app) == null || d.suspend(), (i = this._test) == null || i.suspend();
  }
  async _init() {
    Wh();
    const d = this.shadowRoot || this.attachShadow({ mode: "open" });
    d.innerHTML = `<style>${Up}${Yp}${Zp}</style>${Kp}`;
    const i = d.getElementById("app");
    i.style.opacity = "0";
    let u = null;
    try {
      const v = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Ud
      });
      u = (v == null ? void 0 : v.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(u), this._app = mu(d, {
      data: u,
      save: (v) => this._save(v),
      fire: (v, y) => this._fire(v, y),
      ws: (v) => this._hass.callWS(v),
      subscribe: (v, y) => {
        var k, E;
        return (E = (k = this._hass) == null ? void 0 : k.connection) != null && E.subscribeMessage ? this._hass.connection.subscribeMessage(y, v) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var v, y;
        return Object.keys(((y = (v = this._hass) == null ? void 0 : v.services) == null ? void 0 : y.notify) || {}).sort();
      },
      setReminderAutomation: (v) => this._setReminderAutomation(v),
      setLight: (v) => this.classList.toggle("lightBody", v),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Hh(d, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const d = (i = this._hass) == null ? void 0 : i.connection;
    d != null && d.subscribeMessage && d.subscribeMessage(
      (u) => {
        var y;
        const v = JSON.stringify((u == null ? void 0 : u.value) ?? null);
        v === this._lastSaved || v === this._pendingJson || (this._lastSaved = v, (y = this._app) == null || y.applyRemoteData(u.value));
      },
      { type: "frontend/subscribe_user_data", key: Ud }
    ).catch(() => {
    });
  }
  _save(d) {
    this._pendingJson = JSON.stringify(d), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Ud,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(d, i = {}) {
    var u, v;
    ((u = this._config) == null ? void 0 : u.events) !== !1 && ((v = this._hass) == null || v.callWS({
      type: "fire_event",
      event_type: Oh,
      event_data: { action: d, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(d) {
    const i = `config/automation/config/${pp}`;
    if (!d) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (y) {
        if ((y == null ? void 0 : y.status_code) !== 404 && (y == null ? void 0 : y.status) !== 404) throw y;
      }
      return;
    }
    const u = (y) => `${y}:00`, v = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: pp,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: u(d.times.morning), id: "morning" },
        { trigger: "time", at: u(d.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${d.target}`,
          data: {
            title: "Move Assistant",
            message: "{{ 'Morning' if trigger.id == 'morning' else 'Evening' }} check-in is ready",
            data: { url: v, clickAction: v }
          }
        }
      ]
    });
  }
  _toggleFullscreen() {
    const d = document;
    if (d.fullscreenElement || d.webkitFullscreenElement) {
      (d.exitFullscreen || d.webkitExitFullscreen).call(d);
      return;
    }
    const i = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(i.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(d) {
    var u;
    const i = (u = this.shadowRoot) == null ? void 0 : u.getElementById("toast");
    i && (i.textContent = d, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", qh), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Fh} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
