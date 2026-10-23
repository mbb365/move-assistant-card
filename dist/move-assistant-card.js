const Ys = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#f1f1f1;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#fbf9f6;--color-text-on-selected:#26221e;--color-bg-segment-selected:#fbf9f6;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto;border-radius:22.4px;background:var(--raised)}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}#settingsView .metaTableWrap{border-radius:var(--r-tile);background:var(--group-bg)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg:only-child{display:block;width:100%;height:100%}.wxIcon.clear,.wxIcon.partly{background:var(--wx-clear)}.wxIcon.cloudy{background:var(--wx-cloudy)}.wxIcon.rain,.wxIcon.snow{background:var(--color-text-muted)}.wxIcon.night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}#settingsView .toggleRow.wxStyleRow{flex-direction:column;align-items:stretch}.wxStyleChoice{display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:8px}.wxStyleBtn{display:grid;justify-items:start;gap:var(--inset);padding:var(--inset);border:.8px solid var(--field-line);border-radius:var(--r-tile);background:transparent;color:var(--text);text-align:left;cursor:pointer}.wxStyleBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxStylePreview{display:grid;grid-template-columns:repeat(2,54px);gap:8px}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Us = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}#homeView .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer;transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow.tap:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--primary);color:var(--hc-on-accent)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfActionHead>div{min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--tile);color:var(--text);cursor:pointer}.tfAction.on .tfIcon{background:#fa0;color:#fff}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:none}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfLights{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}@container (max-width:289px){.tfLights{grid-template-columns:1fr}}.tfPairs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;align-content:start}@container (max-width:289px){.tfPairs{grid-template-columns:1fr}}.tfPairs .tfOpen{grid-column:1/-1}.tfHalf.tap{cursor:pointer;transition:background .15s ease}.tfHalf.tap:hover{background:var(--tile)}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfHalf{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair)}.tfHalf .tfIcon{background:var(--tile);color:var(--text)}.tfHalf>div{min-width:0}:is(.tfAction,.tfHalf) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfHeadIcon{--mdc-icon-size:28px}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction,.tfHalf){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}', Ks = `<main id="app"><div class="shell">
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
        <div class="integration"><div><strong>Weather</strong><div class="status" id="weatherStatus" data-empty="The forecast on Home, from a Home Assistant weather entity">The forecast on Home, from a Home Assistant weather entity</div></div><select class="settingsSelect entitySelect" id="weatherEntity" aria-label="Weather entity"></select></div>
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
        <div class="toggleRow"><div><strong>Weather</strong><div class="status">Today and the next days, beside Movement</div></div><button class="switch on" data-toggle="weather"></button></div>
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

        <div class="toggleRow wxStyleRow">
          <div>
            <strong>Weather style</strong>
            <div class="status">How the weather pictures on Home are drawn.</div>
          </div>
          <div class="wxStyleChoice" id="wxStyleChoice" role="group" aria-label="Weather style">
            <button class="wxStyleBtn" type="button" aria-pressed="false" data-wx-style="bitmap"><span class="wxStylePreview"></span><strong>Bitmap</strong></button>
            <button class="wxStyleBtn" type="button" aria-pressed="false" data-wx-style="onebit"><span class="wxStylePreview"></span><strong>1-bit</strong></button>
            <button class="wxStyleBtn" type="button" aria-pressed="false" data-wx-style="smooth"><span class="wxStylePreview"></span><strong>Smooth</strong></button>
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
`, Vi = {
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
}, Qn = (c) => c < 0 ? 0 : c > 1 ? 1 : c, Va = (c) => {
  const g = String(c || "#000000").trim().replace("#", ""), a = g.length === 3 ? g.split("").map((N) => N + N).join("") : g;
  return [0, 2, 4].map((N) => parseInt(a.slice(N, N + 2), 16) || 0);
}, Zs = (c) => "#" + c.map((g) => Math.round(Math.max(0, Math.min(255, g))).toString(16).padStart(2, "0")).join(""), pr = {}, rt = (c, g, a) => {
  const N = c + g + a;
  return pr[N] || (pr[N] = Zs(Va(c).map((B, F) => B + (Va(g)[F] - B) * a)));
}, ur = {}, za = (c) => ur[c] || (ur[c] = Va(c));
function Xs(c, g) {
  const a = String(c || "");
  return (a === "sunny" || a === "clear-night" ? "clear" : a === "partlycloudy" ? "partly" : a === "fog" ? "fog" : a === "lightning" || a === "lightning-rainy" ? "storm" : a === "snowy" || a === "snowy-rainy" ? "snow" : a === "rainy" || a === "pouring" || a === "hail" ? "rain" : "cloudy") + "/" + (a === "clear-night" || g ? "night" : "day");
}
function Js(c) {
  const g = { clear: [c.skyClearDay, c.skyClearNight], cloudy: [c.skyCloudyDay, c.skyCloudyNight], rain: [c.skyRainDay, c.skyRainNight], snow: [c.skySnowDay, c.skySnowNight], fog: [c.skyFogDay, c.skyFogNight] };
  return g.partly = [rt(g.clear[0], g.cloudy[0], 0.12), rt(g.clear[1], g.cloudy[1], 0.12)], g.storm = [rt(g.rain[0], "#000000", 0.22), rt(g.rain[1], "#000000", 0.22)], g;
}
const Ga = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Wa = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], ja = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function $s(c, g = Vi) {
  const a = { ...Vi, ...g }, N = Js(a), B = String(c).split("/"), F = N[B[0]] ? B[0] : "clear", re = B[1] === "night", fe = N[F][re ? 1 : 0], z = {
    night: re,
    clearness: F === "clear" ? 1 : F === "partly" ? 0.7 : 0.25,
    sky: fe,
    skyStops: [fe],
    skyT: 0,
    sun: { x: 45, y: re ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: re ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: re ? 1 : 0 },
    stars: Ga.map(() => ({ o: 0 })),
    rain: Wa.map(() => ({ o: 0, dy: -16 })),
    snow: ja.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, ne = (ze) => Ga.map(() => ({ o: ze }));
  return F === "clear" ? re ? (z.moon.o = 1, z.stars = ne(1)) : z.sun.o = 1 : F === "partly" ? (z.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: re ? 1 : 0 }, re ? (z.moon = { x: 34, y: 33, d: 48, o: 1 }, z.stars = ne(0.7)) : z.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : F === "cloudy" || F === "fog" ? (z.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: re ? 1 : 0 }, re ? z.moon = { x: 40, y: 36, d: 40, o: 0 } : z.sun = { x: 40, y: 36, r: 20, o: 0 }) : (z.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, re ? z.moon = { x: 38, y: 28, d: 36, o: 0 } : z.sun = { x: 38, y: 28, r: 18, o: 0 }, F === "snow" ? z.snow = ja.map(() => ({ o: 1, dy: 0 })) : z.rain = Wa.map((ze, it) => ({ o: F === "storm" && it === 1 ? 0 : 1, dy: 0 })), F === "storm" && (z.bolt = { o: 1, dy: 0 })), z;
}
const Qs = [
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
], Ut = (c, g) => (Qs[(g & 7) * 8 + (c & 7)] + 0.5) / 64, el = 0, mr = 1, gr = 2, hr = 3, vr = 4, mt = 5, Oi = 6, Tn = 7, fr = 8, br = (c, g) => g <= 0.6665 && ((c - 0.5) * (c - 0.5) + (g - 0.2877) * (g - 0.2877) <= 0.0824 || (c - 0.25) * (c - 0.25) + (g - 0.416) * (g - 0.416) <= 0.0625 || (c - 0.791) * (c - 0.791) + (g - 0.458) * (g - 0.458) <= 0.0437 || c >= 0.25 && c <= 0.791 && g >= 0.416), tl = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], nl = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((c) => [c[0] * 13 / 11, c[1] * 28 / 24]), il = (c, g, a) => {
  let N = !1;
  for (let B = 0, F = c.length - 1; B < c.length; F = B++) {
    const re = c[B], fe = c[F];
    re[1] > a != fe[1] > a && g < (fe[0] - re[0]) * (a - re[1]) / (fe[1] - re[1]) + re[0] && (N = !N);
  }
  return N;
};
function al(c, { size: g = 90, px: a = 2, oneBit: N = !1, colors: B = Vi, ink: F = "#26221e", paper: re = "#fbf9f6", clock: fe = 0, idle: z = !1 } = {}) {
  const ne = { ...Vi, ...B }, ze = Math.sin, it = Math.PI * 2, G = Math.max(6, Math.round(g / a)), oe = G / 90, De = z ? Math.floor(fe / 100) * 100 : 0, kt = z ? ze(it * De / 3600) : 0, gt = z ? 1.8 * ze(it * De / 6400) : 0, be = z ? 0.9 * ze(it * De / 4100) : 0, St = z ? 0.8 * ze(it * De / 5200) : 0, Oe = De / 3400 % 1, we = z && c.bolt.o > 0.5 && (Oe < 0.04 || Oe > 0.08 && Oe < 0.11), dt = new Array(G * G), Fe = new Uint8Array(G * G), te = (h, P, T, L, d) => {
    T == null || h < 0 || P < 0 || h >= G || P >= G || (L >= 1 || L > Ut(h + 5, P + 3)) && (dt[P * G + h] = T, Fe[P * G + h] = d);
  }, he = (h, P, T, L) => {
    for (let d = Math.max(0, Math.floor(P - T) - 1); d <= Math.min(G - 1, P + T + 1); d++) for (let l = Math.max(0, Math.floor(h - T) - 1); l <= Math.min(G - 1, h + T + 1); l++) L(l, d, l + 0.5 - h, d + 0.5 - P);
  }, $e = c.skyStops || [c.sky], Kt = c.skyT || 0;
  for (let h = 0; h < G; h++) {
    const P = c.night ? Qn(1 - (h + 0.5) / (G * 0.7)) * 0.85 : Qn(((h + 0.5) / G - 0.35) / 0.65) * 0.85;
    for (let T = 0; T < G; T++) {
      let L = $e[0];
      if ($e.length > 1) {
        const d = Kt * ($e.length - 1), l = Math.min($e.length - 2, Math.floor(d));
        L = d - l > Ut(T, h) ? $e[l + 1] : $e[l];
      }
      P > Ut(T + 2, h + 5) && (L = c.night ? rt(L, "#000000", 0.28) : rt(L, "#ffffff", 0.2)), dt[h * G + T] = we ? rt(L, "#ffffff", 0.25) : L;
    }
  }
  if (c.sun.o > 0.01) {
    const h = c.sun.x * oe, P = c.sun.y * oe, T = Math.max(1, c.sun.r * oe);
    if (z) {
      const L = T * (1.45 + 0.06 * kt), d = rt(ne.sun, "#ffffff", 0.55);
      if (he(h, P, L, (l, m, u, b) => {
        const R = Math.sqrt(u * u + b * b);
        R > T && R < L && te(l, m, d, 0.26 * (1 - (R - T) / (L - T)) * c.sun.o, el);
      }), c.sun.o > 0.5) {
        const l = Math.floor(De / 500) % 2, m = Math.max(1, T * 0.22);
        for (let u = 0; u < 8; u++) if (u % 2 === l) for (let b = T + 1.5; b < T + 1.5 + m; b += 0.7) te(Math.floor(h + Math.cos(u * Math.PI / 4) * b), Math.floor(P + Math.sin(u * Math.PI / 4) * b), ne.sun, c.sun.o, fr);
      }
    }
    he(h, P, T, (L, d, l, m) => {
      if (l * l + m * m > T * T) return;
      const u = ((l * 0.643 + m * 0.766) / T + 1) / 2;
      te(L, d, Qn((u - 0.62) / 0.38) > Ut(L, d) ? ne.sunEdge : ne.sun, c.sun.o, mr);
    });
  }
  if (Ga.forEach((h, P) => {
    const T = c.stars[P].o;
    if (T < 0.01) return;
    const L = Math.floor(h[0] * oe), d = Math.floor(h[1] * oe), l = z ? (Math.floor(De / 300) + P * 3) % 6 : 0;
    if (l === 5) return;
    const m = Math.round(h[2] * oe * (l === 4 ? 0.3 : l < 2 ? 1 : 0.6));
    te(L, d, ne.star, T, Tn);
    for (let u = 1; u <= m; u++) {
      const b = u === m && m > 1 ? rt(ne.star, c.sky, 0.5) : ne.star;
      te(L - u, d, b, T, Tn), te(L + u, d, b, T, Tn), te(L, d - u, b, T, Tn), te(L, d + u, b, T, Tn);
    }
  }), c.moon.o > 0.01) {
    const h = Math.max(1.5, c.moon.d * oe * 0.37), P = c.moon.x * oe, T = c.moon.y * oe + (z && St > 0.4 ? -1 : 0), L = P + 0.547 * h, d = T - 0.503 * h, l = 0.82 * h, m = rt(ne.moon, "#ffffff", 0.6);
    he(P, T, h, (u, b, R, O) => {
      if (R * R + O * O > h * h) return;
      const Ee = u + 0.5 - L, ke = b + 0.5 - d;
      Ee * Ee + ke * ke <= l * l || te(u, b, Qn((O + h) / (2 * h) * 1.1 - 0.1) > Ut(u, b) ? ne.moon : m, c.moon.o, gr);
    });
  }
  const Ve = Math.max(2, Math.round(15.65 * oe)), Ht = Math.max(1, Math.round(5.87 * oe * 0.5));
  Wa.forEach((h, P) => {
    const T = c.rain[P];
    let L = T.dy, d = T.o;
    if (d < 0.01) return;
    if (z) {
      const u = (De / 950 + P / 3) % 1;
      L += -5 + u * 14, d *= u < 0.18 ? u / 0.18 : u > 0.72 ? (1 - u) / 0.28 : 1;
    }
    const l = (h[0] + 3 + gt) * oe, m = (h[1] + L) * oe;
    for (let u = 0; u < Ve; u++) for (let b = 0; b < Ht; b++) te(Math.floor(l - 0.208 * u) + b, Math.floor(m) + u, ne.rain, d, vr);
  });
  const Ct = Math.max(0, Math.round(7.34 * oe / 2.6));
  if (ja.forEach((h, P) => {
    const T = c.snow[P];
    let L = T.dy, d = 0, l = T.o;
    if (l < 0.01) return;
    if (z) {
      const b = (De / 3200 + P / 5) % 1;
      L += -6 + b * 14, d = 1.5 * ze(it * (b * 1.5 + P / 5)), l *= b < 0.2 ? b / 0.2 : b > 0.75 ? (1 - b) / 0.25 : 1;
    }
    const m = Math.floor((h[0] + 3.67 + d + gt) * oe), u = Math.floor((h[1] + 3.67 + L) * oe);
    te(m, u, ne.snow, l, mt);
    for (let b = 1; b <= Ct; b++)
      te(m - b, u, ne.snow, l, mt), te(m + b, u, ne.snow, l, mt), te(m, u - b, ne.snow, l, mt), te(m, u + b, ne.snow, l, mt), Ct > 1 && b < Ct && (te(m - b, u - b, ne.snow, l, mt), te(m + b, u - b, ne.snow, l, mt), te(m - b, u + b, ne.snow, l, mt), te(m + b, u + b, ne.snow, l, mt));
  }), c.bolt.o > 0.01)
    if (G >= 30) {
      const h = 39 + gt, P = 50 + c.bolt.dy;
      for (let T = Math.floor(P * oe); T <= (P + 28) * oe; T++) for (let L = Math.floor(h * oe); L <= (h + 13) * oe; L++)
        il(nl, (L + 0.5) / oe - h, (T + 0.5) / oe - P) && te(L, T, ne.sun, c.bolt.o, Oi);
    } else {
      const h = G / 18, P = 7, T = 10 + Math.round(c.bolt.dy * 0.2);
      tl.forEach((L, d) => L.split("").forEach((l, m) => {
        if (l !== "#") return;
        const u = Math.floor((P + m) * h), b = Math.floor((T + d) * h);
        for (let R = b; R < Math.max(b + 1, Math.floor((T + d + 1) * h)); R++) for (let O = u; O < Math.max(u + 1, Math.floor((P + m + 1) * h)); O++) te(O, R, ne.sun, c.bolt.o, Oi);
      }));
    }
  if (c.cloud.o > 0.01) {
    const h = Math.max(3, c.cloud.w * oe), P = h * 0.6665, T = (c.cloud.x + gt) * oe - h / 2, L = (c.cloud.y + be) * oe - P / 2, d = rt(ne.cloudDay, ne.cloudNight, Math.round(c.cloud.f * 4) / 4), l = rt(d, "#000000", 0.16);
    for (let m = Math.max(0, Math.floor(L) - 1); m <= Math.min(G - 1, L + P + 1); m++) for (let u = Math.max(0, Math.floor(T) - 1); u <= Math.min(G - 1, T + h + 1); u++) {
      const b = (u + 0.5 - T) / h, R = (m + 0.5 - L) / h;
      br(b, R) && te(u, m, !br(b, R + 1 / h) || Qn((R - 0.42) / 0.25) * 0.8 > Ut(u, m) ? l : d, c.cloud.o, hr);
    }
  }
  const st = new Uint8ClampedArray(G * G * 4), ie = za(F), W = za(re);
  for (let h = 0; h < G; h++) for (let P = 0; P < G; P++) {
    const T = h * G + P, L = Fe[T];
    let d = za(dt[T]);
    if (N) {
      let l;
      L === vr || L === fr ? l = !0 : L === mt ? l = !c.night : L === Tn || L === Oi ? l = !1 : l = Math.round((0.2126 * d[0] + 0.7152 * d[1] + 0.0722 * d[2]) / 255 * 4) / 4 <= Ut(P, h), (L === mr || L === gr || L === hr || L === Oi) && (P > 0 && Fe[T - 1] !== L || P < G - 1 && Fe[T + 1] !== L || h > 0 && Fe[T - G] !== L || h < G - 1 && Fe[T + G] !== L) && (l = !0), d = l ? ie : W;
    }
    st[T * 4] = d[0], st[T * 4 + 1] = d[1], st[T * 4 + 2] = d[2], st[T * 4 + 3] = 255;
  }
  return { w: G, h: G, data: st };
}
function ol(c, g) {
  var sr, lr, dr, cr;
  const a = (e) => c.getElementById(e), N = a("workoutView"), B = a("workoutNameInput");
  let F = !0;
  const re = a("homeClock");
  function fe() {
    re && (re.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  fe(), setInterval(fe, 15e3);
  const z = a("createFlow"), ne = a("createMovementsSlot"), ze = a("createTimingSlot"), it = a("createFinishSlot"), G = a("movementStepSummary"), oe = a("timingStepSummary"), De = a("finishStepSummary"), kt = a("continueToTiming"), gt = a("continueToFinish"), be = a("finishMoveButton");
  let St = !1, Oe = [];
  function we(e) {
    !e || Oe.some((t) => t.node === e) || Oe.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function dt(e, t) {
    e && (we(e), t.appendChild(e));
  }
  function Fe() {
    [...Oe].reverse().forEach(({ node: e, parent: t, next: n }) => {
      t && (n && n.parentNode === t ? t.insertBefore(e, n) : t.appendChild(e));
    }), Oe = [];
  }
  function te(e) {
    c.querySelectorAll(".createStep").forEach((t) => {
      t.classList.toggle("active", t.dataset.createStep === e);
    }), e === "timing" && (St = !0), he();
  }
  function he() {
    var w, y;
    if (!Q) return;
    q[U];
    const e = ye.filter((v) => !v.hidden), t = e.filter((v) => v.kind !== "rest").length, n = e.filter((v) => v.kind === "rest").length;
    G.textContent = t ? t + " movement" + (t === 1 ? "" : "s") + (n ? " · " + n + " rest" + (n === 1 ? "" : "s") : "") : "No movements yet";
    const i = t > 0, o = c.querySelector('[data-open-step="timing"]'), r = c.querySelector('[data-open-step="finish"]');
    o.disabled = !i, kt.disabled = !i, oe.textContent = i ? _t(ie.value) + " · " + qe(W.value) + " movement · " + qe(h.value) + " rest" : "Add a movement first", r.disabled = !(i && St);
    const s = ((B == null ? void 0 : B.value) || "").trim(), p = [];
    (w = a("includeWarmupPreset")) != null && w.checked && p.push("warm-up"), (y = a("includeCooldownPreset")) != null && y.checked && p.push("cooldown"), De.textContent = s ? s + (p.length ? " · " + p.join(" + ") : "") : p.length ? p.join(" + ") : "Name and optional extras";
  }
  function $e() {
    var E, j, S;
    z.hidden = !1, St = !1;
    const e = c.querySelector(".editNameRow"), t = a("createMoveOptions"), n = c.querySelector(".timeTiles"), i = a("routineSummaryModal"), o = c.querySelector(".tempoRevealRow"), r = a("tempoExperiment"), s = (E = a("warmupList")) == null ? void 0 : E.closest("section"), p = a("movementCreatorLaunch"), w = a("movementCreator"), y = (j = a("strengthList")) == null ? void 0 : j.closest("section"), v = (S = a("cooldownList")) == null ? void 0 : S.closest("section");
    [t == null ? void 0 : t.querySelector(".createExtras"), s, p, w, y, v].forEach((k) => k && dt(k, ne)), [t, n, i, o, r].forEach((k) => dt(k, ze)), dt(e, it), te("movements"), he();
  }
  function Kt() {
    Fe(), z.hidden = !0, c.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  c.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || te(e.dataset.openStep);
  })), kt.addEventListener("click", () => {
    kt.disabled || te("timing");
  }), gt.addEventListener("click", () => te("finish")), be.addEventListener("click", () => a("saveWorkoutEdit").click());
  const Ve = { home: a("homeView"), workout: a("workoutView"), settings: a("settingsView") }, Ht = a("homeNav"), Ct = a("settingsNav");
  function st(e) {
    Object.entries(Ve).forEach(([t, n]) => n.classList.toggle("active", t === e)), Ht.classList.toggle("active", e === "home"), Ct.classList.toggle("active", e === "settings"), e === "home" && setTimeout(ra, 400), e === "settings" && (requestAnimationFrame(() => Jn(c.querySelector(".tab.active"), !1)), Ei());
  }
  const ie = a("totalTime"), W = a("workTime"), h = a("restTime"), P = a("totalOut"), T = a("workOut"), L = a("restOut"), d = a("totalFill"), l = a("workFill"), m = a("restFill"), u = a("roundsInput"), b = a("roundsFill"), R = a("roundsOut"), O = a("totalLabel"), Ee = a("routineSummaryModal"), ke = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let se = ke.map((e) => ({ ...e })), ye = [
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
  const Zt = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let Pe = Zt.map((e) => ({ ...e }));
  const Xt = {
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
  }, Y = ei(g.data), q = Y.profiles;
  let U = q[Y.selected] ? Y.selected : Y.order.find((e) => q[e]) || "kettlebell";
  function ei(e) {
    const t = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, n = t.profiles && Object.keys(t.profiles).length ? t.profiles : JSON.parse(JSON.stringify(Xt)), i = (Array.isArray(t.order) ? t.order : Object.keys(n)).filter((o) => n[o]);
    return Object.keys(n).forEach((o) => {
      i.includes(o) || i.push(o);
    }), {
      v: 1,
      profiles: n,
      order: i,
      selected: t.selected || i[0],
      history: Array.isArray(t.history) ? t.history : [],
      checkins: (Array.isArray(t.checkins) ? t.checkins : Mn(t.energy)).map(Ln),
      settings: { ...t.settings || {} }
    };
  }
  function Mn(e) {
    if (!Array.isArray(e)) return [];
    const t = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], n = [];
    return e.forEach((i) => {
      const o = new Date(i.at);
      if (isNaN(o)) return;
      const r = o.getFullYear() + "-" + String(o.getMonth() + 1).padStart(2, "0") + "-" + String(o.getDate()).padStart(2, "0"), s = o.getHours() < 14 ? "morning" : "evening";
      if (n.some((w) => w.date === r && w.slot === s)) return;
      const p = t.indexOf(i.value) + 1;
      p > 0 && n.push({ date: r, slot: s, mood: null, energy: p, at: i.at });
    }), n;
  }
  function Ln(e) {
    if (e.scale === 100) return e;
    const t = (n) => n == null ? null : Math.round((Number(n) - 1) / 5 * 100);
    return { ...e, mood: t(e.mood), energy: t(e.energy), scale: 100 };
  }
  function Ke() {
    Q || (Y.selected = U, Y.order = Y.order.filter((e) => q[e] && e !== ht), g.save(Y));
  }
  function J() {
    return Y.settings;
  }
  function Qe(e) {
    const t = q[e];
    if (!t) return;
    U = e;
    const n = a("workoutNameInput");
    if (n && (n.value = t.name), ie.value = t.total, W.value = t.work, h.value = t.rest, u.value = t.rounds || 1, t.customSequence) {
      const i = (t.sequence || []).map((r) => ({ ...r })), o = (r) => i.filter((s) => s.presetRole === r).map(({ presetRole: s, ...p }) => p);
      se = (t.warmup || o("warmup")).map((r) => ({ ...r })), Pe = (t.cooldown || o("cooldown")).map((r) => ({ ...r })), ye = i.filter((r) => !r.presetRole), ji(t.preset || "movement", !1);
    } else
      ie.min = 3, ie.max = 40, ie.step = 1, W.min = 20, W.max = 60, W.step = 5, h.min = 5, h.max = 30, h.step = 5, se = (t.warmup || ke).map((i) => ({ ...i })), Pe = (t.cooldown || Zt).map((i) => ({ ...i })), ye = t.strength.map((i) => Array.isArray(i) ? (([o, r, s, p = !1]) => ({ id: o, name: r, group: s, kind: "work", hidden: !!p }))(i) : { ...i });
    c.querySelectorAll(".workoutPanel[data-workout]").forEach((i) => i.classList.toggle("active", i.dataset.workout === e)), le();
  }
  function Ne(e, t, n) {
    const i = e.getBoundingClientRect(), o = i.width / 2, r = i.height / 2, s = t - o, p = n - r;
    let w = 1 / 0, y = 1 / 0;
    s !== 0 && (w = o / Math.abs(s)), p !== 0 && (y = r / Math.abs(p));
    const v = Math.min(Math.max(1 / Math.min(w, y), 0), 1);
    let x = Math.atan2(p, s) * (180 / Math.PI) + 90;
    return x < 0 && (x += 360), { edge: v, angle: x };
  }
  function Dt(e, t, n = !1) {
    const i = e.getBoundingClientRect(), o = t.clientX - i.left, r = t.clientY - i.top, { edge: s, angle: p } = Ne(e, o, r), w = n ? 100 : s * 100;
    e.style.setProperty("--edge-proximity", w.toFixed(3)), e.style.setProperty("--cursor-angle", p.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", n || w >= 30);
  }
  function ti(e) {
    e.addEventListener("pointermove", (n) => Dt(e, n, !1)), e.addEventListener("pointerenter", (n) => Dt(e, n, !1)), e.addEventListener("pointerdown", (n) => Dt(e, n, !0));
    const t = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", t), e.addEventListener("pointerup", t), e.addEventListener("pointercancel", t);
  }
  ti(a("addWorkoutPanel"));
  let Q = !1, ht = null;
  function V(e) {
    return String(e ?? "").replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
  }
  function Sr(e) {
    return e.summary ? e.summary : e.customSequence ? _t(e.total) + " · custom move" : _t(e.total) + " · " + qe(e.work) + " / " + qe(e.rest) + " · warm-up + cooldown";
  }
  function Gi(e, t) {
    var r;
    const n = document.createElement("article");
    n.className = "workoutPanel", n.dataset.workout = e, n.tabIndex = 0;
    const i = t.activityCount ?? (((r = t.sequence) == null ? void 0 : r.length) || 0);
    n.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + V(t.name) + '</div><div class="sub">' + V(Sr(t)) + '</div><span class="sourceTag">' + V(t.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (i ? i + " activities" + ((t.rounds || 1) > 1 ? " × " + t.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + V(t.name) + "</div></div>";
    const o = a("addWorkoutPanel");
    return a("workoutGallery").insertBefore(n, o), ti(n), n.addEventListener("click", (s) => {
      s.target.closest("button") || Qe(e);
    }), n.addEventListener("keydown", (s) => {
      (s.key === "Enter" || s.key === " ") && !s.target.closest("button") && (s.preventDefault(), Qe(e));
    }), n.querySelector(".seeWorkoutBtn").addEventListener("click", (s) => {
      s.stopPropagation(), Qe(e), yo(!1);
    }), n.querySelector(".startWorkoutBtn").addEventListener("click", (s) => {
      s.stopPropagation(), Qe(e), ds();
    }), n;
  }
  function Ya() {
    c.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), Y.order.forEach((e) => {
      q[e] && Gi(e, q[e]);
    }), c.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === U));
  }
  Ya(), a("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), a("addWorkoutPanel").click());
  }), a("addWorkoutPanel").addEventListener("click", () => {
    Q = !0, ht = "custom-" + Date.now(), q[ht] = {
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
    }, Qe(ht), yo(!0);
  });
  let M = [], _ = 0, Ge = 0, En = 1, lt = !1, Se = null, ni = null, _e = !1, Jt = Y.settings.upcomingCount ?? "all", Ua = "movement";
  function ii(e, t, n) {
    return (Number(e) - t) / (n - t) * 100;
  }
  function qe(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 3600 && t % 3600 === 0 ? t / 3600 + " hr" : t >= 60 && t % 60 === 0 ? t / 60 + " min" : t >= 60 ? Math.round(t / 60) + " min" : Math.round(t) + " sec";
  }
  function _t(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 60 && t % 60 === 0 ? t / 60 + " hr" : t >= 60 ? Math.floor(t / 60) + " hr " + t % 60 + " min" : t + " min";
  }
  function ai() {
    d.style.width = ii(ie.value, Number(ie.min), Number(ie.max)) + "%", l.style.width = ii(W.value, Number(W.min), Number(W.max)) + "%", m.style.width = ii(h.value, Number(h.min), Number(h.max)) + "%", T.textContent = qe(W.value), L.textContent = qe(h.value);
    const e = Number(u.value) || 1;
    b.style.width = ii(e, 1, 10) + "%", O.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function Wi(e) {
    return e.filter((t) => !t.hidden);
  }
  function Rn(e) {
    const t = Math.max(0, Math.round(Number(e) || 0)), n = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), o = t % 60;
    return (n ? n + ":" + String(i).padStart(2, "0") : i) + ":" + String(o).padStart(2, "0");
  }
  function Cr(e) {
    let t;
    try {
      t = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const n = t.hostname.replace(/^(www|m|music)\./, "");
    let i = null;
    if (n === "youtu.be") i = t.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(n))
      if (t.pathname === "/watch") i = t.searchParams.get("v");
      else {
        const p = t.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        p && (i = p[2]);
      }
    if (!i || !/^[\w-]{11}$/.test(i)) return null;
    const o = (p) => {
      if (!p) return 0;
      if (/^\d+$/.test(p)) return Number(p);
      const w = p.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return w ? (Number(w[1]) || 0) * 3600 + (Number(w[2]) || 0) * 60 + (Number(w[3]) || 0) : 0;
    }, r = o(t.searchParams.get("t") || t.searchParams.get("start")), s = o(t.searchParams.get("end"));
    return { id: i, start: r, end: s > r ? s : null };
  }
  function An(e, t) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || t || 300);
    const n = Number(e.start) || 0, i = Number(e.end) || Number(e.videoDuration) || 0;
    return i > n ? Math.round(i - n) : Number(e.duration) || 300;
  }
  function oi(e, t) {
    const n = Math.max(0, Number(e) || 0);
    return Math.round(t === "hour" ? n * 3600 : t === "min" ? n * 60 : n);
  }
  function ji(e, t = !0) {
    Ua = e, c.querySelectorAll(".createPresetBtn").forEach((i) => i.classList.toggle("active", i.dataset.movePreset === e));
    const n = q[U];
    n && (n.preset = e), e === "work" ? (ie.min = 30, ie.max = 480, ie.step = 30, W.min = 300, W.max = 7200, W.step = 300, h.min = 60, h.max = 1800, h.step = 60, t && (ie.value = 60, W.value = 1500, h.value = 300), a("addMovementUnit").value = "min", a("addMovementDuration").value = 25, a("addRestUnit").value = "min", a("addRestDuration").value = 5) : (ie.min = 3, ie.max = 40, ie.step = 1, W.min = 20, W.max = 60, W.step = 5, h.min = 5, h.max = 30, h.step = 5, t && (ie.value = 20, W.value = 45, h.value = 15), a("addMovementUnit").value = "sec", a("addMovementDuration").value = 45, a("addRestUnit").value = "sec", a("addRestDuration").value = 30), ai();
  }
  function Ka(e, t) {
    const n = Ua === "work";
    return e.map((i, o) => ({ ...i, id: t + "-" + o + "-" + Date.now().toString(36), useGlobalTiming: !n, duration: n ? 60 : Number(W.value) }));
  }
  function Yi() {
    const e = q[U];
    e != null && e.customSequence && (e.includeWarmup = a("includeWarmupPreset").checked, e.includeCooldown = a("includeCooldownPreset").checked, e.includeWarmup && !se.length && (se = Ka(ke, "warm")), e.includeCooldown && !Pe.length && (Pe = Ka(Zt, "cool")), le());
  }
  function Tr() {
    const e = a("upcomingCountSetting");
    if (!e) return;
    const t = Math.max(1, M.length - 1), n = Jt;
    e.innerHTML = "";
    for (let r = 1; r <= t; r++) {
      const s = document.createElement("option");
      s.value = String(r), s.textContent = String(r), e.appendChild(s);
    }
    const i = document.createElement("option");
    i.value = "all", i.textContent = "All", e.appendChild(i);
    const o = n === "all" ? "all" : String(Math.min(Number(n) || 1, t));
    e.value = o, Jt = o === "all" ? "all" : Number(o);
  }
  function le() {
    Number(ie.value) * 60;
    const e = Number(W.value), t = Number(h.value), n = q[U], i = !!(n != null && n.customSequence), o = (i ? !n.includeWarmup : n != null && n.warmupOff) ? [] : Wi(se), r = Wi(ye), s = i && !n.includeCooldown ? [] : Wi(Pe);
    if (n && (n.total = Number(ie.value), n.work = e, n.rest = t, n.rounds = Number(u.value) || 1, n.customSequence ? (n.sequence = ye.map((f) => ({ ...f })), n.warmup = se.map((f) => ({ ...f })), n.cooldown = Pe.map((f) => ({ ...f }))) : (n.strength = ye.map((f) => ({ ...f })), n.warmup = se.map((f) => ({ ...f })), n.cooldown = Pe.map((f) => ({ ...f })))), n != null && n.customSequence) {
      const f = [...o.map((H) => ({ ...H, section: "warmup" })), ...r, ...s.map((H) => ({ ...H, section: "cooldown" }))].map((H) => {
        if (H.kind === "video") return { ...H, duration: An(H, e), rest: 0 };
        if (H.kind === "rest") {
          const Me = H.useGlobalTiming === !0 ? t : Number(H.duration) || t;
          return { ...H, duration: Me, rest: 0 };
        }
        const Te = H.useGlobalTiming === !1 && Number(H.duration) || e;
        return { ...H, duration: Te, rest: 0 };
      });
      n.autoRest && Number(n.autoRestDuration) > 0 ? (M = [], f.forEach((H, Te) => {
        M.push(H);
        const Me = f[Te + 1];
        H.kind !== "rest" && Me && Me.kind !== "rest" && M.push({
          id: "auto-rest-" + Te,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(n.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : M = f;
    } else
      M = [...o.map((f) => ({ ...f, section: "warmup" })), ...r, ...s.map((f) => ({ ...f, section: "cooldown" }))].map((f) => f.kind === "video" ? { ...f, duration: An(f, e), rest: 0 } : f.kind === "rest" ? { ...f, duration: f.useGlobalTiming === !0 ? t : Number(f.duration) || t, rest: 0 } : { ...f, duration: f.useGlobalTiming === !1 && Number(f.duration) || e, rest: t }), M.forEach((f, H) => {
        var Te;
        ((Te = M[H + 1]) == null ? void 0 : Te.kind) === "rest" && (f.rest = 0);
      }), M.length && (M[M.length - 1].rest = 0);
    const p = Math.max(1, Math.min(10, Number(u.value) || 1)), w = M, y = (f) => p <= 1 ? null : f.section === "warmup" || f.presetRole === "warmup" ? "first" : f.section === "cooldown" || f.presetRole === "cooldown" ? "last" : f.kind === "video" && (f.videoRounds === "first" || f.videoRounds === "last") ? f.videoRounds : null, v = (f) => !!y(f), x = w.filter((f) => !v(f)), E = w.filter(v), j = x.length, S = x.reduce((f, H) => f + H.duration + H.rest, 0), k = E.reduce((f, H) => f + H.duration + H.rest, 0), C = [
      E.some((f) => f.section === "warmup" || f.presetRole === "warmup") && "warm-up",
      E.some((f) => f.section === "cooldown" || f.presetRole === "cooldown") && "cooldown",
      E.some((f) => f.kind === "video" && !f.section && !f.presetRole) && "video"
    ].filter(Boolean), $ = C.length > 1 ? C.slice(0, -1).join(", ") + " & " + C[C.length - 1] : C[0] || "";
    M = [];
    const Z = (f, H) => {
      const Te = y(f);
      return !Te || (Te === "first" ? H === 1 : H === p);
    };
    for (let f = 1; f <= p; f++)
      if (w.filter((H) => Z(H, f)).forEach((H, Te) => M.push({ ...H, id: H.id + (p > 1 ? "-r" + f : ""), round: f, roundIndex: Te })), f < p && j)
        if (n != null && n.customSequence)
          M.push({ id: "round-break-" + f, name: "Rest", group: "Round " + (f + 1) + " next", kind: "rest", hidden: !1, duration: t, rest: 0, round: f, roundIndex: j, roundBreak: !0 });
        else {
          const H = M[M.length - 1];
          H.rest = t, H.roundBreakAfter = !0;
        }
    ai();
    const A = M.reduce((f, H) => f + H.duration + H.rest, 0), X = Math.round(S / 60), ue = Math.round(A / 60), Ce = p > 1 ? _t(X) + " × " + p + " rounds" + (k ? " + " + qe(k) + " " + $ : "") + " (" + _t(ue) + ")" : _t(ue), ae = [o.length ? "warm-up" : "", s.length ? "cooldown" : ""].filter(Boolean), Ae = n != null && n.customSequence ? Ce + " · " + j + " items" + (ae.length && !(p > 1 && k) ? " · " + ae.join(" + ") : "") : Ce + " · " + qe(e) + " / " + qe(t) + (ae.length && !(p > 1 && k) ? " · " + ae.join(" + ") : "");
    P.textContent = qe(S);
    const He = M.filter((f) => !f.roundBreak).length, ve = p > 1 ? He + " activities · " + p + " rounds" : j + " activities";
    R.textContent = p > 1 ? p + " rounds · " + _t(ue) + " total" : "1 round", a("roundsCount").textContent = p, c.querySelectorAll("[data-rounds-step]").forEach((f) => {
      f.disabled = Number(f.dataset.roundsStep) < 0 ? p <= 1 : p >= 10;
    }), n && (n.summary = Ae, n.activityCount = j);
    const Ft = c.querySelector(".workoutPanel.active .sub");
    Ft && (Ft.textContent = Ae), Ee.textContent = Ae, Qi(), c.querySelectorAll(".workoutPanel.active .activityCount").forEach((f) => f.textContent = ve), ai(), Zi(), ta(), Hn(), Tr(), Q && he(), Ve.workout.classList.contains("active") && !Se && ya();
  }
  const Nn = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', Mr = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', Lr = {
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
    add: '<path d="M5 12H19"/><path d="M12 5V19"/>',
    play: '<path d="M8 5.5V18.5L18.5 12L8 5.5Z"/>',
    pause: '<path d="M9 6V18"/><path d="M15 6V18"/>'
  }, vt = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Lr[e] || "") + "</svg>";
  c.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = vt(e.dataset.icon);
  });
  let Ze = null, at = null;
  function Er(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Za(e = !1) {
    const t = c.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    t && (t.focus({ preventScroll: !0 }), e && t.select());
  }
  function Ui(e, t, n = {}) {
    const i = e.kind === "rest", o = e.kind === "video", r = o ? e.useVideoLength !== !1 : i ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, s = Number(i ? h.value : W.value), p = Er(o ? e.useVideoLength === !1 ? e.duration : An({ ...e, useVideoLength: !0 }) : r ? s : e.duration || s), w = o && (Number(e.videoDuration) > 0 || Number(e.end) > 0), y = o ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + V(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + V(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([A, X]) => '<option value="' + A + '"' + ((e.videoRounds || "every") === A ? " selected" : "") + ">" + X + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + V(e.name) + '" placeholder="' + (i ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + V(e.group) + '" placeholder="' + (i ? "Rest" : "e.g. Glutes + legs") + '"></label>', v = o ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (w ? " · " + Rn(An({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + qe(s), x = document.createElement("div");
    x.className = "moveRow editing" + (n.sheet ? " inSheet" : ""), x.dataset.index = t, x.dataset.id = e.id;
    const E = n.isNew ?? (at == null ? void 0 : at.item) === e, j = n.sheet ? '<div class="moveEditActions sheetActions">' + (E ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + V(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (E ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    x.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (o ? " videoFields" : "") + '">' + y + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (r ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + V(v) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + p.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((A) => '<option value="' + A + '"' + (A === p.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[A] + "</option>").join("") + "</select></div></div>" + j + "</div>";
    const S = (A) => x.querySelector("[data-f=" + A + "]"), k = () => {
      const A = S("global").checked;
      S("dur").disabled = A, S("unit").disabled = A, x.querySelector(".creatorDurationRow").classList.toggle("isDisabled", A);
    };
    S("global").addEventListener("change", k), k();
    const C = () => {
      var A;
      if (n.sheet) {
        (A = n.onCancel) == null || A.call(n);
        return;
      }
      E && si(), Ze = null, le();
    }, $ = () => {
      var ue;
      if (o) {
        Z();
        return;
      }
      const A = S("name").value.trim();
      if (!A) {
        S("name").focus();
        return;
      }
      e.name = A, e.group = S("group").value.trim() || (i ? "Rest" : "Movement");
      const X = S("global").checked;
      if (e.useGlobalTiming = X, X || (e.duration = Math.max(i ? 5 : 1, oi(S("dur").value, S("unit").value))), n.sheet) {
        (ue = n.onSaved) == null || ue.call(n);
        return;
      }
      E && (at = null), Ze = null, le(), me(E ? i ? "Rest added" : "Movement added" : "Movement updated");
    }, Z = () => {
      var ae;
      const A = S("url").value.trim(), X = Cr(A);
      if (!X) {
        S("urlError").hidden = !1, S("url").classList.add("invalid"), S("url").focus();
        return;
      }
      const ue = X.id !== e.videoId;
      e.url = A, e.videoId = X.id, e.start = X.start, e.end = X.end, ue && (e.videoDuration = null, e.videoError = null);
      const Ce = S("name").value.trim();
      e.autoName = !Ce, e.name = Ce || (ue ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = S("rounds").value, e.useVideoLength = S("global").checked, e.useVideoLength || (e.duration = Math.max(5, oi(S("dur").value, S("unit").value))), n.sheet ? (ae = n.onSaved) == null || ae.call(n) : (E && (at = null), Ze = null, le(), me(E ? "Video added" : "Video updated")), (ue || !e.videoDuration || e.autoName && !e.videoTitle) && ys(e);
    };
    if (o && S("url").addEventListener("input", () => {
      S("urlError").hidden = !0, S("url").classList.remove("invalid");
    }), x.querySelector("[data-a=cancel]").addEventListener("click", C), x.querySelector("[data-a=save]").addEventListener("click", $), n.sheet && !E) {
      x.querySelector("[data-a=hide]").addEventListener("click", () => {
        var X;
        return (X = n.onHide) == null ? void 0 : X.call(n);
      });
      const A = x.querySelector("[data-a=remove]");
      Xn(A, A.querySelector(".removeFill"), 1200, () => {
        var X;
        return (X = n.onRemove) == null ? void 0 : X.call(n);
      });
    }
    return x.addEventListener("keydown", (A) => {
      A.key === "Escape" && (A.preventDefault(), A.stopPropagation(), C()), A.key === "Enter" && A.target.matches("input") && (A.preventDefault(), $());
    }), x;
  }
  function Ki(e, t) {
    const n = a(t);
    n.innerHTML = "", e.forEach((i, o) => {
      if (i === Ze && !Pn()) {
        n.appendChild(Ui(i, o));
        return;
      }
      const r = document.createElement("div");
      r.className = "moveRow" + (i.hidden ? " hidden" : "") + (i.kind === "rest" ? " restItem" : "") + (i.kind === "video" ? " videoItem" : "") + (La(i) ? " noMeta" : ""), r.dataset.index = o, r.dataset.id = i.id;
      const s = i.kind === "rest" ? i.useGlobalTiming === !0 ? "Global timing" : qe(i.duration) : i.useGlobalTiming === !1 ? qe(i.duration) : "Global timing", p = i.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", w = i.kind === "video" ? i.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (i.useVideoLength === !1 ? "stops after " + qe(i.duration) : Number(i.videoDuration) > 0 || Number(i.end) > 0 ? Rn(An(i)) : "plays to the end") + (i.videoRounds === "first" ? " · first round only" : i.videoRounds === "last" ? " · last round only" : "") : i.group + " · " + s, y = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + V(i.name) + '. Drag, or use the up and down arrow keys">' + Nn + "</button>", v = '<div class="moveText"><div class="moveItemName">' + V(i.name) + p + '</div><div class="moveMeta">' + V(w) + "</div></div>", x = (S) => S.addEventListener("keydown", (k) => {
        var Z, A;
        if (k.key !== "ArrowUp" && k.key !== "ArrowDown") return;
        k.preventDefault();
        const C = e.indexOf(i), $ = C + (k.key === "ArrowUp" ? -1 : 1);
        $ < 0 || $ >= e.length || (e.splice(C, 1), e.splice($, 0, i), le(), (A = (Z = a(t).children[$]) == null ? void 0 : Z.querySelector(".dragHandle")) == null || A.focus());
      });
      if (Pn()) {
        r.classList.add("phoneRow"), r.tabIndex = 0, r.setAttribute("role", "button"), r.setAttribute("aria-label", "Edit " + (i.name || "step")), r.innerHTML = y + v + '<span class="rowChevron" aria-hidden="true">›</span>';
        const S = r.querySelector(".dragHandle");
        S.addEventListener("pointerdown", (k) => Xa(k, r, n, e)), x(S), r.addEventListener("click", (k) => {
          k.target.closest(".dragHandle") || ro(i, e);
        }), r.addEventListener("keydown", (k) => {
          k.key === "Enter" && k.target === r && (k.preventDefault(), ro(i, e));
        }), n.appendChild(r);
        return;
      }
      r.innerHTML = y + v + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + V(i.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (i.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + V(i.name) + '"><span class="removeFill"></span><span class="removeLabel">' + Mr + "</span></button></div>", r.querySelector(".editBtn").addEventListener("click", () => {
        si(), Ze = i, le(), Za();
      }), r.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        i.hidden = !i.hidden, le();
      });
      const E = r.querySelector(".removeBtn");
      Xn(E, E.querySelector(".removeFill"), 1200, () => {
        const S = e.indexOf(i);
        S < 0 || (e.splice(S, 1), le(), me("Removed " + i.name, { label: "Undo", run: () => {
          e.splice(Math.min(S, e.length), 0, i), le();
        } }));
      });
      const j = r.querySelector(".dragHandle");
      j.addEventListener("pointerdown", (S) => Xa(S, r, n, e)), x(j), n.appendChild(r);
    });
  }
  const Tt = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, ri = (e) => {
    var t;
    try {
      (t = navigator.vibrate) == null || t.call(navigator, e);
    } catch {
    }
  };
  function Xa(e, t, n, i) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const o = e.currentTarget, r = e.pointerId, s = !Tt();
    try {
      o.setPointerCapture(r);
    } catch {
    }
    const p = t.closest(".exerciseScroller") || Xi(t), w = n.style.position;
    n.style.position = "relative";
    const y = [...n.children].filter((D) => D.classList.contains("moveRow")), v = y.indexOf(t), x = parseFloat(getComputedStyle(n).rowGap) || 8, E = t.offsetHeight, j = E + x, S = y.map((D) => D.offsetTop), k = y.map((D) => D.offsetHeight), C = () => n.getBoundingClientRect().top, $ = n.getBoundingClientRect().width, Z = e.clientY - (C() + S[v]), A = e.clientX;
    let X = e.clientY, ue = e.clientX, Ce = C() + S[v], ae = 0, Ae = 0, He = 0, ve = 1, Ft = 0, f = v, H = !1, Te = 0, Me = !1, _i = !1, Sn = S[v];
    n.classList.add("reordering"), t.classList.add("dragging"), t.style.transition = "none", ri(8);
    const qi = () => {
      const D = X - Z + E / 2 - C();
      let K = 0;
      return y.forEach((de, Ue) => {
        Ue !== v && D > S[Ue] + k[Ue] / 2 && K++;
      }), K;
    }, zi = () => {
      y.forEach((D, K) => {
        if (K === v) return;
        const de = v < f && K > v && K <= f ? -j : v > f && K >= f && K < v ? j : 0;
        D.style.transform = de ? "translateY(" + de + "px)" : "";
      });
    }, $n = () => {
      const D = n.getBoundingClientRect(), K = Math.abs(ue - A) > Math.max(80, $ * 0.3) || ue < D.left - 24 || ue > D.right + 24;
      K !== H && (H = K, t.classList.toggle("willReturn", K), ri(K ? 10 : 4));
      const de = H ? v : qi();
      de !== f && (f = de, zi(), H || ri(4));
    }, Pt = () => {
      if (f === v) return S[v];
      const D = y.filter((de, Ue) => Ue !== v);
      let K = S[0];
      for (let de = 0; de < f; de++) K += D[de].offsetHeight + x;
      return K;
    }, Cn = () => {
      const D = s ? Math.min(Math.abs(ae) / 40, 1) : 0, K = s && !Me ? Math.max(-3, Math.min(3, He * 0.6)) : 0;
      t.style.transform = "translate(" + Ae.toFixed(2) + "px," + (Ce - (C() + S[v])).toFixed(2) + "px) rotate(" + K.toFixed(2) + "deg) scale(" + (ve * (1 - 0.04 * D)).toFixed(4) + "," + (ve * (1 + 0.06 * D)).toFixed(4) + ")";
    }, I = () => {
      Te = requestAnimationFrame(I);
      const D = ue - A, K = Me ? C() + Sn : X - Z, de = Me ? 0 : H ? D * 0.9 : Math.max(-22, Math.min(22, D * 0.22)), Ue = Me ? 1 : H ? 0.97 : 1.035;
      if (!s) {
        Ce = K, Ae = Me ? 0 : de, ve = 1, Cn(), Me && ge();
        return;
      }
      const Ws = Me ? 0.24 : 0.2, js = Me ? 0.62 : 0.68;
      ae = (ae + (K - Ce) * Ws) * js, Ce += ae, He = (He + (de - Ae) * 0.16) * 0.7, Ae += He, Ft = (Ft + (Ue - ve) * 0.22) * 0.6, ve += Ft, Cn(), Me && Math.abs(ae) < 0.15 && Math.abs(K - Ce) < 0.5 && Math.abs(Ae) < 0.5 && Math.abs(ve - 1) < 3e-3 && ge();
    }, ee = setInterval(() => {
      if (!p || Me) return;
      const D = p.getBoundingClientRect(), K = 56, de = X < D.top + K ? -10 : X > D.bottom - K ? 10 : 0;
      de && (p.scrollTop += de, $n());
    }, 30);
    function ge() {
      if (_i) return;
      _i = !0, cancelAnimationFrame(Te);
      const D = f !== v, K = t.dataset.id;
      if (n.classList.remove("reordering"), y.forEach((Ue) => {
        Ue.style.transition = "none", Ue.style.transform = "";
      }), t.classList.remove("dragging", "willReturn"), n.style.position = w, D) {
        const [Ue] = i.splice(v, 1);
        i.splice(f, 0, Ue);
      }
      le();
      const de = K && n.querySelector('.moveRow[data-id="' + K + '"]');
      de && s && de.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), D && me("Order saved");
    }
    const Le = (D) => {
      if (D.pointerId === r) {
        if (D.pointerType === "mouse" && D.buttons === 0) {
          nt();
          return;
        }
        X = D.clientY, ue = D.clientX, $n();
      }
    }, Ye = (D) => {
      D.pointerId === r && nt();
    };
    function nt() {
      Me || (window.removeEventListener("pointermove", Le, !0), window.removeEventListener("pointerup", Ye, !0), window.removeEventListener("pointercancel", Ye, !0), o.removeEventListener("lostpointercapture", nt), clearInterval(ee), H && f !== v && (f = v, zi()), Sn = Pt(), Me = !0, ri(6), setTimeout(ge, 800));
    }
    window.addEventListener("pointermove", Le, !0), window.addEventListener("pointerup", Ye, !0), window.addEventListener("pointercancel", Ye, !0), o.addEventListener("lostpointercapture", nt), Te = requestAnimationFrame(I), Cn();
  }
  function Zi() {
    var o, r, s, p;
    const e = q[U], t = (o = a("warmupList")) == null ? void 0 : o.closest("section"), n = (r = a("cooldownList")) == null ? void 0 : r.closest("section"), i = (p = (s = a("strengthList")) == null ? void 0 : s.closest("section")) == null ? void 0 : p.querySelector(".sectionTitle");
    e != null && e.customSequence ? (t && (t.hidden = !e.includeWarmup), n && (n.hidden = !e.includeCooldown), i && (i.textContent = "Move sequence")) : (t && (t.hidden = !!(e != null && e.warmupOff)), n && (n.hidden = !1), i && (i.textContent = "Kettlebell work")), Ki(se, "warmupList"), Ki(ye, "strengthList"), Ki(Pe, "cooldownList");
  }
  function si() {
    if (!at) return;
    const { item: e, arr: t } = at;
    at = null;
    const n = t.indexOf(e);
    n >= 0 && t.splice(n, 1), Ze === e && (Ze = null);
  }
  function Bn(e) {
    return e.id === "warmupList" ? { arr: se, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: Pe, kind: "cooldown", group: "Cooldown" } : { arr: ye, kind: "work", group: "" };
  }
  function Ja(e, t) {
    const n = Bn(t), i = Date.now().toString(36);
    return e === "video" ? { id: "video-" + i, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + i, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(h.value) } : { id: "movement-" + i, name: "", group: n.group, kind: n.kind, hidden: !1, useGlobalTiming: !0, duration: Number(W.value) };
  }
  const $a = "cubic-bezier(.34,1.46,.64,1)";
  function Qa(e, t) {
    if (Tt() || !e) {
      t();
      return;
    }
    const n = (r) => {
      var s;
      return ((s = r.dataset) == null ? void 0 : s.id) || r;
    }, i = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], o = new Map(i().map((r) => [n(r), r.getBoundingClientRect().top]));
    t(), i().forEach((r) => {
      const s = o.get(n(r));
      if (s === void 0) return;
      const p = s - r.getBoundingClientRect().top;
      Math.abs(p) < 0.5 || r.animate([{ transform: "translateY(" + p + "px)" }, { transform: "none" }], { duration: 440, easing: $a });
    });
  }
  function eo(e, t) {
    if (!e || Tt()) return;
    const n = e.offsetHeight, i = Math.max(0, n - (t || 0));
    e.animate([{ clipPath: "inset(0 0 " + i + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: $a });
  }
  function to(e, t, n, i) {
    const { arr: o } = Bn(t), r = Ja(e, t);
    o.splice(Math.max(0, Math.min(n, o.length)), 0, r), at = { item: r, arr: o }, Ze = r, Qa(t.closest(".exerciseScroller,.createStepSlot") || t, () => le());
    const s = t.querySelector(".moveRow.editing");
    return eo(s, i), Za(e === "rest"), s;
  }
  function Xi(e) {
    for (let t = e; t && t.nodeType === 1; t = t.parentElement) {
      const n = getComputedStyle(t).overflowY;
      if (/(auto|scroll)/.test(n) && t.scrollHeight > t.clientHeight) return t;
    }
    return null;
  }
  const no = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function io(e, t) {
    const n = document.createElement("div");
    return n.className = "addGhost" + (e === "movement" ? "" : " rest"), n.innerHTML = '<span class="addGhostGrip">' + Nn + '</span><span class="addGhostText"><strong>' + V(t[0]) + "</strong><small>" + V(t[1]) + "</small></span>", a("workoutModal").appendChild(n), n;
  }
  function In(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function Rr(e, t, n, i) {
    (Ze || at) && (si(), Ze = null, le());
    const o = e.getBoundingClientRect(), r = io(t, no[t]);
    r.setAttribute("aria-hidden", "true"), r.style.width = o.width + "px", r.style.height = o.height + "px", r.style.transform = "translate(" + o.left + "px," + o.top + "px)", e.classList.add("lifting");
    const s = Xi(e);
    return ao({
      ghost: r,
      origin: o,
      sx: n,
      sy: i,
      scroller: s,
      column: e.closest(".exerciseScroller,.createFlow") || s,
      home: () => e.getBoundingClientRect(),
      onDrop: (p, w, y) => {
        In(r), e.classList.remove("lifting"), to(t, p, w, y);
      },
      onReturn: () => {
        In(r), e.classList.remove("lifting");
      }
    });
  }
  function ao({ ghost: e, origin: t, sx: n, sy: i, scroller: o, column: r, home: s, onDrop: p, onReturn: w, rowLook: y = !1 }) {
    var Cn;
    const v = !Tt(), x = ((Cn = c.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Cn.offsetHeight) || 80, E = n - t.left, j = i - t.top, S = 44;
    let k = n, C = i, $ = t.left, Z = t.top, A = 0, X = 0, ue = !v, Ce = null, ae = null, Ae = -1, He = 0, ve = null;
    const Ft = () => ["warmupList", "strengthList", "cooldownList"].map((I) => a(I)).filter((I) => I && I.getClientRects().length && !I.closest("[hidden]")), f = (I) => {
      if (I === Ce) return;
      Ce = I, e.classList.toggle("overList", !!I || y);
      const ee = I ? I.getBoundingClientRect().width : t.width;
      e.style.width = ee + "px", e.style.height = (I ? x : t.height) + "px";
    }, H = (I) => {
      I.classList.add("leaving"), I.style.height = "0px", I.style.marginTop = "-8px", setTimeout(() => I.remove(), v ? 320 : 0);
    }, Te = (I, ee, ge) => {
      if (ae && ae.parentNode === I && Ae === ge || (ae && (H(ae), ae = null, Ae = -1), !I)) return;
      const Le = document.createElement("div");
      Le.className = "dropSlot", I.insertBefore(Le, ee), ae = Le, Ae = ge, Le.getBoundingClientRect(), Le.style.height = x + "px", Le.style.marginTop = "0px";
    }, Me = () => {
      let I = null, ee = 1 / 0;
      for (const nt of Ft()) {
        const D = nt.getBoundingClientRect();
        if (k < D.left - 48 || k > D.right + 48) continue;
        const K = D.top - 28, de = D.bottom + 28, Ue = C < K ? K - C : C > de ? C - de : 0;
        Ue < ee && (ee = Ue, I = nt);
      }
      const ge = r == null ? void 0 : r.getBoundingClientRect(), Ye = ge && k >= ge.left && k <= ge.right && C >= ge.top && C <= ge.bottom || ee === 0 ? I : null;
      if (Ye) {
        const nt = [...Ye.children].filter((K) => K.classList.contains("moveRow"));
        let D = nt.findIndex((K) => {
          const de = K.getBoundingClientRect();
          return C < de.top + de.height / 2;
        });
        D < 0 && (D = nt.length), Te(Ye, nt[D] || null, D);
      } else Te(null);
      f(Ye);
    }, _i = () => {
      if (ve) return ve.aim();
      if (Ce) {
        const I = Ce.getBoundingClientRect();
        let ee = C - x / 2;
        return ae && (ee = ee * 0.6 + ae.getBoundingClientRect().top * 0.4), { x: I.left, y: ee };
      }
      return { x: k - E, y: C - j };
    }, Sn = (I, ee, ge, Le) => {
      e.style.transform = "translate(" + $ + "px," + Z + "px) rotate(" + I + "deg) rotate(" + ee + "rad) scale(" + ge + "," + Le + ") rotate(" + -ee + "rad)";
    }, qi = () => {
      if (He = requestAnimationFrame(qi), !ue) {
        const D = k - n, K = C - i, de = Math.min(Math.hypot(D, K) / S, 1);
        $ = t.left + D * 0.35, Z = t.top + K * 0.35, Sn(0, Math.atan2(K, D), 1 + 0.155 * de, 1 - 0.1 * de);
        return;
      }
      const I = _i();
      if (!v) {
        $ = I.x, Z = I.y, Sn(0, 0, 1, 1), ve && (cancelAnimationFrame(He), ve.done());
        return;
      }
      const ee = ve ? ve.k : 0.17, ge = ve ? ve.d : 0.7;
      A = (A + (I.x - $) * ee) * ge, X = (X + (I.y - Z) * ee) * ge, $ += A, Z += X;
      const Le = Math.hypot(A, X), Ye = Math.min(Le / 48, 1), nt = Ce || ve ? 0 : Math.max(-5, Math.min(5, A * 0.32));
      Sn(nt, Math.atan2(X, A), 1 + 0.1 * Ye, 1 - 0.063 * Ye), ve && Le < 0.15 && Math.hypot(I.x - $, I.y - Z) < 0.6 && (cancelAnimationFrame(He), ve.done());
    }, zi = setInterval(() => {
      if (!o || ve) return;
      const I = o.getBoundingClientRect(), ee = 64, ge = C < I.top + ee ? -(I.top + ee - C) / 4 : C > I.bottom - ee ? (C - (I.bottom - ee)) / 4 : 0;
      ge && (o.scrollTop += Math.max(-18, Math.min(18, ge)), Me());
    }, 30);
    He = requestAnimationFrame(qi);
    let $n = !1;
    const Pt = (I, ee) => {
      if ($n) return;
      $n = !0, cancelAnimationFrame(He);
      const ge = ae ? ae.offsetHeight : x;
      !I && ae && (ae.remove(), ae = null), I ? p(I, ee, ge) : w();
    };
    return {
      move(I, ee) {
        k = I, C = ee, !ue && Math.hypot(k - n, C - i) > S && (ue = !0, A = (k - n) * 0.085, X = (C - i) * 0.085), ue && Me();
      },
      drop(I) {
        clearInterval(zi);
        const ee = Ce, ge = Ae;
        if (!I && ee && ae) {
          const Le = ae;
          ve = { k: 0.24, d: 0.62, aim: () => {
            const Ye = Le.getBoundingClientRect();
            return { x: Ye.left, y: Ye.top };
          }, done: () => Pt(ee, ge) }, setTimeout(() => Pt(ee, ge), 650), v || (cancelAnimationFrame(He), Pt(ee, ge));
          return;
        }
        Te(null), f(null), ve = { k: 0.2, d: 0.66, aim: () => {
          const Le = s();
          return { x: Le.left, y: Le.top };
        }, done: () => Pt(null) }, setTimeout(() => Pt(null), 650), v || (cancelAnimationFrame(He), Pt(null));
      }
    };
  }
  function Ji(e, t) {
    let n = !1;
    e.addEventListener("click", (i) => {
      if (n) {
        n = !1, i.preventDefault();
        return;
      }
      if (Pn()) {
        so(t);
        return;
      }
      const o = a("strengthList"), r = to(t, o, Bn(o).arr.length, 0);
      r == null || r.scrollIntoView({ block: "nearest", behavior: Tt() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (i) => {
      if (i.button !== void 0 && i.button !== 0) return;
      const o = i.pointerId, r = i.clientX, s = i.clientY;
      let p = null, w = !1;
      try {
        e.setPointerCapture(o);
      } catch {
      }
      const y = (C) => {
        if (C.pointerId === o) {
          if (C.pointerType === "mouse" && C.buttons === 0) {
            k(!1);
            return;
          }
          if (!p) {
            if (Math.hypot(C.clientX - r, C.clientY - s) < 6) return;
            p = Rr(e, t, r, s);
          }
          p.move(C.clientX, C.clientY);
        }
      }, v = (C) => {
        C.pointerId === o && k(!1);
      }, x = (C) => {
        C.pointerId === o && k(!0);
      }, E = () => k(!1), j = () => k(!0), S = (C) => {
        C.key === "Escape" && p && (C.preventDefault(), C.stopPropagation(), k(!0));
      };
      function k(C) {
        if (!w && (w = !0, window.removeEventListener("pointermove", y, !0), window.removeEventListener("pointerup", v, !0), window.removeEventListener("pointercancel", x, !0), window.removeEventListener("keydown", S, !0), window.removeEventListener("blur", j), e.removeEventListener("lostpointercapture", E), p)) {
          const $ = p;
          p = null, n = !0, setTimeout(() => {
            n = !1;
          }, 0), $.drop(C);
        }
      }
      window.addEventListener("pointermove", y, !0), window.addEventListener("pointerup", v, !0), window.addEventListener("pointercancel", x, !0), window.addEventListener("keydown", S, !0), window.addEventListener("blur", j), e.addEventListener("lostpointercapture", E);
    });
  }
  const Fn = (sr = window.matchMedia) == null ? void 0 : sr.call(window, "(max-width: 620px)");
  function Pn() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const oo = (e) => e.charAt(0).toUpperCase() + e.slice(1), li = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let $i = null, xe = null;
  function di(e, t, n, i) {
    Xe(), a("sheetTitle").textContent = e;
    const o = a("sheetBody");
    o.innerHTML = "", o.appendChild(t), $i = n || null, a("sheet").setAttribute("aria-hidden", "false"), a("sheetScrim").classList.add("open"), a("sheet").classList.add("open"), setTimeout(() => {
      if (!a("sheet").classList.contains("open") || !o.contains(t)) return;
      const r = i ? o.querySelector("input[data-f=url],input[data-f=name]") : o.querySelector("button,input,select");
      r == null || r.focus({ preventScroll: !0 });
    }, Tt() ? 0 : 360);
  }
  function Xe() {
    const e = a("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), a("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(c.activeElement) && c.activeElement.blur();
    const t = $i;
    $i = null, t == null || t(), setTimeout(qt, 0);
  }
  a("sheetScrim").addEventListener("click", Xe), a("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Xe());
  });
  function ro(e, t) {
    const n = Ui(e, t.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Xe(), le(), me(oo(li(e)) + " updated");
      },
      onCancel: Xe,
      onHide() {
        e.hidden = !e.hidden, Xe(), le(), me((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        Xe();
        const i = t.indexOf(e);
        i < 0 || (t.splice(i, 1), le(), me("Removed " + e.name, { label: "Undo", run: () => {
          t.splice(Math.min(i, t.length), 0, e), le();
        } }));
      }
    });
    di("Edit " + li(e), n, null, !1);
  }
  function Ar() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([t, n, i, o]) => {
      const r = document.createElement("button");
      r.type = "button", r.className = "sheetChoice", r.innerHTML = '<span class="timeIcon" aria-hidden="true">' + vt(n) + "</span><span><strong>" + i + "</strong><small>" + o + "</small></span>", r.addEventListener("click", () => so(t)), e.appendChild(r);
    }), di("Add to the move", e, null, !1);
  }
  function so(e) {
    xe && pi();
    const t = Ja(e, a("strengthList")), n = Ui(t, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Xe(), Br(t, e);
      },
      onCancel: Xe
    });
    di("New " + li(t), n, null, !0);
  }
  const ci = a("workoutModal").querySelector(".modalStatic"), lo = { parent: ci.parentNode, next: ci.nextSibling };
  function Nr() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(ci);
    const t = document.createElement("button");
    t.type = "button", t.className = "primary sheetDone", t.textContent = "Done", t.addEventListener("click", Xe), e.appendChild(t), di("Setup", e, () => {
      lo.parent.insertBefore(ci, lo.next), Qi();
    }, !1);
  }
  function Qi() {
    var t, n;
    const e = a("setupSummaryName");
    e && (e.textContent = (((t = a("workoutNameInput")) == null ? void 0 : t.value) || "").trim() || ((n = q[U]) == null ? void 0 : n.name) || "Move", a("setupSummaryMeta").textContent = Ee.textContent);
  }
  a("setupSummary").addEventListener("click", Nr), a("addFab").addEventListener("click", Ar);
  function co() {
    const e = a("strengthList");
    return Xi(e) || e.closest(".exerciseScroller");
  }
  function ea() {
    const e = a("strengthList").getBoundingClientRect(), t = (co() || a("strengthList")).getBoundingClientRect(), n = (xe == null ? void 0 : xe.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(t.top + 12, Math.min(t.bottom - n - 96, t.top + t.height * 0.55 - n / 2)), width: e.width, height: n };
  }
  function Br(e, t) {
    var p;
    const n = io(t, [e.name || no[t][0], "Drag into place"]);
    n.classList.add("overList", "hovering"), n.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const i = document.createElement("span");
    i.className = "addGhostActions", i.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + V(e.name) + '">✕</button>', n.appendChild(i), xe = { item: e, type: t, ghost: n };
    const o = ((p = c.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : p.offsetHeight) || 64;
    n.style.width = a("strengthList").getBoundingClientRect().width + "px", n.style.height = o + "px";
    const r = ea(), s = We.querySelector(".modal").getBoundingClientRect().bottom;
    n.style.transform = "translate(" + r.left + "px," + s + "px)", n.getBoundingClientRect(), Tt() || (n.classList.add("rising"), setTimeout(() => n.classList.remove("rising"), 650)), n.style.transform = "translate(" + r.left + "px," + r.top + "px)", i.querySelector("[data-a=end]").addEventListener("click", pi), i.querySelector("[data-a=discard]").addEventListener("click", Fr), n.addEventListener("pointerdown", Ir);
  }
  function Ir(e) {
    if (!xe || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: t, ghost: n } = xe, i = e.pointerId;
    try {
      n.setPointerCapture(i);
    } catch {
    }
    n.classList.remove("hovering", "rising"), n.classList.add("held");
    const o = n.getBoundingClientRect(), r = co(), s = ao({
      ghost: n,
      origin: { left: o.left, top: o.top, width: o.width, height: o.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: r,
      column: a("strengthList").closest(".exerciseScroller,.createFlow") || r,
      rowLook: !0,
      home: ea,
      onDrop: (k, C, $) => {
        xe = null, In(n), po(t, k, C, $);
      },
      onReturn: () => {
        n.classList.remove("held"), n.classList.add("hovering");
      }
    });
    let p = !1;
    const w = (k) => {
      if (k.pointerId === i) {
        if (k.pointerType === "mouse" && k.buttons === 0) {
          S(!1);
          return;
        }
        s.move(k.clientX, k.clientY);
      }
    }, y = (k) => {
      k.pointerId === i && S(!1);
    }, v = (k) => {
      k.pointerId === i && S(!0);
    }, x = () => S(!1), E = () => S(!0), j = (k) => {
      k.key === "Escape" && (k.preventDefault(), S(!0));
    };
    function S(k) {
      p || (p = !0, window.removeEventListener("pointermove", w, !0), window.removeEventListener("pointerup", y, !0), window.removeEventListener("pointercancel", v, !0), window.removeEventListener("keydown", j, !0), window.removeEventListener("blur", E), n.removeEventListener("lostpointercapture", x), s.drop(k));
    }
    window.addEventListener("pointermove", w, !0), window.addEventListener("pointerup", y, !0), window.addEventListener("pointercancel", v, !0), window.addEventListener("keydown", j, !0), window.addEventListener("blur", E), n.addEventListener("lostpointercapture", x);
  }
  function po(e, t, n, i) {
    const o = Bn(t);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = o.kind, o.group && (!e.group || e.group === "Movement") && (e.group = o.group)), o.arr.splice(Math.max(0, Math.min(n, o.arr.length)), 0, e), Qa(t.closest(".exerciseScroller,.createStepSlot") || t, () => le()), eo(t.querySelector('.moveRow[data-id="' + e.id + '"]'), i), me(oo(li(e)) + " added");
  }
  function pi() {
    var i;
    if (!xe) return;
    const { item: e, ghost: t } = xe;
    xe = null, In(t);
    const n = a("strengthList");
    po(e, n, Bn(n).arr.length, 0), (i = n.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || i.scrollIntoView({ block: "nearest", behavior: Tt() ? "auto" : "smooth" });
  }
  function Fr() {
    if (!xe) return;
    const e = xe.ghost;
    xe = null, In(e), me("Discarded");
  }
  function uo() {
    xe && (xe.ghost.remove(), xe = null);
  }
  window.addEventListener("resize", () => {
    if (xe != null && xe.ghost.classList.contains("hovering")) {
      const e = ea();
      xe.ghost.style.width = e.width + "px", xe.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (lr = Fn == null ? void 0 : Fn.addEventListener) == null || lr.call(Fn, "change", () => {
    Xe(), xe && !Pn() && pi(), Zi();
  });
  {
    const e = a("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function qt() {
    const e = a("workoutModal"), t = window.visualViewport;
    if (!e.classList.contains("open") || !Pn()) {
      mo();
      return;
    }
    const n = t ? t.offsetTop : 0, i = t ? t.offsetLeft : 0, o = t ? t.width : window.innerWidth, r = t ? t.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: o + "px", height: r + "px", top: n + "px", left: i + "px" });
    const s = e.getBoundingClientRect();
    Math.abs(s.top - n) > 0.5 && (e.style.top = 2 * n - s.top + "px"), Math.abs(s.left - i) > 0.5 && (e.style.left = 2 * i - s.left + "px");
  }
  function mo() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => a("workoutModal").style.removeProperty(e));
  }
  (dr = window.visualViewport) == null || dr.addEventListener("resize", qt), (cr = window.visualViewport) == null || cr.addEventListener("scroll", qt), window.addEventListener("resize", qt), window.addEventListener("scroll", qt, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(qt, 250));
  function ta() {
    ye.length > 0;
    const e = a("addMovementBtn"), t = a("addRestBtn");
    e && (e.innerHTML = Nn + "<span>Add movement</span>"), t && (t.innerHTML = Nn + "<span>Add rest</span>");
    const n = a("addVideoBtn");
    n && (n.innerHTML = Nn + "<span>Add video</span>");
  }
  function Hn() {
    const e = a("useGlobalTiming").checked, t = a("addMovementDuration"), n = a("addMovementUnit");
    t.disabled = e, n.disabled = e, t.parentElement.style.opacity = e ? ".38" : "1", a("globalTimingValue").textContent = "Use global timing · " + qe(W.value);
    const i = a("useGlobalRestTiming").checked, o = a("addRestDuration"), r = a("addRestUnit");
    o.disabled = i, r.disabled = i, o.parentElement.style.opacity = i ? ".38" : "1", a("globalRestTimingValue").textContent = "Use global timing · " + qe(h.value);
  }
  let go = "movement";
  function Pr(e) {
    go = e;
    const t = a("movementFields"), n = a("restFields");
    t.hidden = e !== "movement", n.hidden = e !== "rest", a("movementCreatorHeading").textContent = "Add movement", a("movementCreator").setAttribute("aria-label", "Create movement"), Hn();
  }
  function na() {
    q[U];
    const e = Q ? !0 : a("useGlobalTiming").checked, t = e ? Number(W.value) : oi(
      a("addMovementDuration").value,
      a("addMovementUnit").value
    ), n = Q ? !0 : a("useGlobalRestTiming").checked, i = n ? Number(h.value) : oi(
      a("addRestDuration").value,
      a("addRestUnit").value
    );
    if (go === "rest") {
      const o = a("addRestTitle").value.trim() || "Rest", r = a("addRestGroup").value.trim() || "Rest";
      ye.push({
        id: "rest-" + Date.now(),
        name: o,
        group: r,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: n,
        duration: Math.max(5, i || Number(h.value))
      }), le(), a("movementCreator").hidden = !0, a("addRestTitle").value = "Rest", a("addRestGroup").value = "Rest", me("Rest added"), Q && (te("movements"), he());
    } else {
      const o = a("addMovementInput").value.trim();
      if (!o) return;
      const r = a("addMovementGroup").value.trim() || "Movement";
      ye.push({
        id: "movement-" + Date.now(),
        name: o,
        group: r,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, t || Number(W.value))
      }), a("addMovementInput").value = "", a("addMovementGroup").value = "", le(), a("movementCreator").hidden = !0, me("Movement added"), Q && (te("movements"), he());
    }
    ta();
  }
  let ia = null;
  function me(e, t) {
    const n = a("toast");
    n.innerHTML = "";
    const i = document.createElement("span");
    if (i.textContent = e, n.appendChild(i), t) {
      const o = document.createElement("button");
      o.type = "button", o.className = "toastAction", o.textContent = t.label, o.addEventListener("click", () => {
        t.run(), n.classList.remove("show", "withAction"), clearTimeout(ia);
      }), n.appendChild(o);
    }
    n.classList.toggle("withAction", !!t), n.classList.add("show"), clearTimeout(ia), ia = setTimeout(() => n.classList.remove("show", "withAction"), t ? 5e3 : 2200);
  }
  const Hr = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Dr = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function ho(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function $t(e, t) {
    return Hr[ho(t)];
  }
  function _r(e) {
    return Dr[ho(e)];
  }
  function Re(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Mt() {
    return { morning: J().morningTime || "08:00", evening: J().eveningTime || "19:00" };
  }
  function Qt(e) {
    const [t, n] = String(e).split(":").map(Number);
    return (t || 0) * 60 + (n || 0);
  }
  function qr(e) {
    const t = Mt();
    return e.getHours() * 60 + e.getMinutes() >= Qt(t.evening) ? "evening" : "morning";
  }
  function ui(e, t) {
    return Y.checkins.find((n) => n.date === e && n.slot === t);
  }
  function mi(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function gi() {
    const e = /* @__PURE__ */ new Date(), t = Re(e), n = qr(e), i = Mt(), o = e.getHours() * 60 + e.getMinutes();
    return n === "morning" && o < Qt(i.morning) || mi(ui(t, n)) ? null : n;
  }
  const Lt = a("checkinModal"), Et = a("checkinTab"), zr = a("checkinBadge"), Rt = { mood: { input: a("moodInput"), fill: a("moodFill") }, energy: { input: a("energyLevelInput"), fill: a("energyLevelFill") } };
  function vo(e) {
    const { input: t, fill: n } = Rt[e];
    n.style.width = t.value + "%", t.setAttribute("aria-valuetext", $t(e, t.value));
  }
  Object.keys(Rt).forEach((e) => Rt[e].input.addEventListener("input", () => vo(e)));
  let ct = null;
  function fo() {
    const e = Mt(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes();
    return n < Qt(e.morning) ? "Next check-in at " + e.morning : n < Qt(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function Or() {
    const e = Mt(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes(), i = (o, r) => {
      const [s, p] = o.split(":").map(Number);
      return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (r ? 1 : 0), s, p);
    };
    return n < Qt(e.morning) ? { date: i(e.morning), time: e.morning } : n < Qt(e.evening) ? { date: i(e.evening), time: e.evening } : { date: i(e.morning, !0), time: e.morning };
  }
  let aa = null, oa = null;
  function bo() {
    if (gi()) {
      hi(), zt();
      return;
    }
    const e = Or(), t = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), n = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), o = t % 60;
    a("peekCountdown").textContent = n + ":" + String(i).padStart(2, "0") + ":" + String(o).padStart(2, "0"), a("peekAt").textContent = "Available at " + e.time;
  }
  function Vr() {
    bo(), Et.classList.add("peek"), clearInterval(oa), oa = setInterval(bo, 1e3), clearTimeout(aa), aa = setTimeout(hi, 6e3);
  }
  function hi() {
    Et.classList.remove("peek"), clearInterval(oa), clearTimeout(aa);
  }
  function xo() {
    const e = gi();
    if (!e) {
      Et.classList.contains("peek") ? hi() : Vr();
      return;
    }
    ct = { date: Re(/* @__PURE__ */ new Date()), slot: e };
    const n = ui(ct.date, e), i = Y.checkins.find((o) => mi(o));
    Object.keys(Rt).forEach((o) => {
      Rt[o].input.value = (n == null ? void 0 : n[o]) ?? (i == null ? void 0 : i[o]) ?? 50, vo(o);
    }), a("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", Lt.classList.add("open"), Lt.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Rt.mood.input.focus());
  }
  function Dn() {
    Lt.classList.remove("open"), Lt.setAttribute("aria-hidden", "true"), ct && (_n = ct.date + "-" + ct.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", _n);
    } catch {
    }
    ct = null, zt();
  }
  function Gr() {
    if (!ct) return;
    if (mi(ui(ct.date, ct.slot))) {
      Dn();
      return;
    }
    const { date: e, slot: t } = ct;
    let n = ui(e, t);
    n || (n = { date: e, slot: t }, Y.checkins.unshift(n), Y.checkins = Y.checkins.slice(0, 2e3)), n.mood = Number(Rt.mood.input.value), n.energy = Number(Rt.energy.input.value), n.scale = 100, n.at = (/* @__PURE__ */ new Date()).toISOString(), Ke(), g.fire("checkin", { slot: t, mood: n.mood, energy: n.energy, mood_label: $t("mood", n.mood), energy_label: $t("energy", n.energy) }), me((t === "morning" ? "Morning" : "Evening") + " check-in saved"), Dn(), vi(), qn(), jt(), yt();
  }
  let _n = "";
  try {
    _n = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function zt() {
    const e = gi();
    zr.hidden = !e, Et.hidden = !e, e || hi(), Et.classList.toggle("due", !!e), Et.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : fo()), Et.title = e ? "Check in now" : fo();
  }
  function ra() {
    zt();
    const e = gi();
    !e || Lt.classList.contains("open") || J().checkinAutoOpen !== !1 && (!Ve.home.classList.contains("active") || We.classList.contains("open") || _n !== Re(/* @__PURE__ */ new Date()) + "-" + e && xo());
  }
  Et.addEventListener("click", xo), a("checkinLater").addEventListener("click", Dn), a("checkinSave").addEventListener("click", Gr), Lt.addEventListener("click", (e) => {
    e.target === Lt && Dn();
  }), Lt.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Dn());
  }), setInterval(ra, 3e4);
  function vi() {
    const e = Re(/* @__PURE__ */ new Date()), t = (n) => Y.checkins.find((i) => i.date === e && i[n] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([n, i]) => {
      const o = t(n);
      a(i).textContent = o ? $t(n, o[n]) : "—";
    });
  }
  function qn() {
    const e = a("feelCard");
    if (!e) return;
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - (t.getDay() + 6) % 7), i = [...Array(7)].map((y, v) => {
      const x = new Date(n.getFullYear(), n.getMonth(), n.getDate() + v), E = Re(x), j = Y.checkins.filter((k) => k.date === E), S = (k) => {
        const C = j.map(($) => $[k]).filter(($) => $ != null);
        return C.length ? C.reduce(($, Z) => $ + Z, 0) / C.length : null;
      };
      return { d: x, key: E, mood: S("mood"), energy: S("energy"), count: j.filter(mi).length, future: x > t && E !== Re(t) };
    }), o = (y) => {
      const v = i.map((x) => x[y]).filter((x) => x != null);
      return v.length ? v.reduce((x, E) => x + E, 0) / v.length : null;
    }, r = o("mood"), s = o("energy"), p = (y, v) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + y + "</span><span>" + (v == null ? "—" : V($t("", v))) + '</span></div><div class="feelTrack"><span style="width:' + (v == null ? 0 : Math.max(4, v)) + "%;background:" + (v == null ? "transparent" : _r(v)) + '"></span></div></div>', w = i.filter((y) => y.mood != null && y.energy != null).sort((y, v) => v.mood + v.energy - (y.mood + y.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (r == null ? "No check-ins yet" : V($t("", (r + s) / 2))) + '</div><div class="weekCopy">' + (r == null ? "Your first check-in will appear here." : "on average this week" + (w ? " · best day " + V(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(w.d)) : "")) + '</div></div></div><div class="feelDays">' + i.map(
      (y) => '<div class="weekChip feelDay' + (y.future ? " future" : "") + (y.key === Re(t) ? " today" : "") + '"><div class="weekChipTop"><strong>' + V(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(y.d)) + "</strong>" + (y.count >= 2 ? '<span class="weekTick">' + vt("check") + "</span>" : '<span class="feelDots">' + "●".repeat(y.count) + "</span>") + "</div>" + p("Mood", y.mood) + p("Energy", y.energy) + "</div>"
    ).join("") + "</div>";
  }
  const fi = a("upcomingCountSetting");
  fi.addEventListener("change", () => {
    Jt = fi.value === "all" ? "all" : Number(fi.value), Io();
  });
  const zn = a("tempoRevealBtn"), sa = a("tempoExperiment"), pt = a("tempoQuad"), en = a("tempoDot"), Wr = a("tempoEstimate"), jr = a("tempoReadout");
  let tn = { x: 0.5, y: 0.5 }, On = !1, bi = { total: 20, work: 45, rest: 15 };
  function la(e, t, n, i) {
    const o = Math.max(t, Math.min(n, e));
    return Math.round((o - t) / i) * i + t;
  }
  function Yr(e, t) {
    const n = (e - 0.5) * 2, i = (t - 0.5) * 2, o = la(
      bi.total + n * 5 + i * 8,
      Number(ie.min),
      Number(ie.max),
      Number(ie.step)
    ), r = la(
      bi.work + n * 10 + i * 8,
      Number(W.min),
      Number(W.max),
      Number(W.step)
    ), s = la(
      bi.rest + n * 6 + i * 6,
      Number(h.min),
      Number(h.max),
      Number(h.step)
    );
    return ie.value = o, W.value = r, h.value = s, T.textContent = r + " sec", L.textContent = s + " sec", ai(), { total: o, work: r, rest: s };
  }
  function da(e, t) {
    const n = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", i = t < 0.34 ? "Fast" : t > 0.66 ? "Slow" : "Balanced", o = Yr(e, t);
    jr.textContent = n + " + " + i, Wr.textContent = o.total + " min", pt.setAttribute("aria-valuetext", n + " and " + i + ", estimated " + o.total + " minutes");
  }
  function ca(e) {
    const t = pt.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), i = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
    tn = { x: n, y: i }, en.style.left = n * 100 + "%", en.style.top = i * 100 + "%", da(n, i);
  }
  zn.addEventListener("click", () => {
    const e = sa.hidden;
    sa.hidden = !e, zn.setAttribute("aria-expanded", e ? "true" : "false"), zn.textContent = e ? "Now close this" : "Don’t try this!", e && (bi = {
      total: Number(ie.value),
      work: Number(W.value),
      rest: Number(h.value)
    }, tn = { x: 0.5, y: 0.5 }, en.style.left = "50%", en.style.top = "50%", da(tn.x, tn.y));
  }), c.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), c.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.toggle("selected", t === e));
  }));
  const xi = a("testingFeedbackForm"), wo = a("testingFeedbackThanks"), Ur = a("testingFeedbackAgain");
  xi.addEventListener("submit", (e) => {
    e.preventDefault(), xi.hidden = !0, wo.hidden = !1, me("Feedback captured for prototype");
  }), Ur.addEventListener("click", (e) => {
    e.preventDefault(), xi.reset(), c.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.remove("selected")), wo.hidden = !0, xi.hidden = !1;
  }), pt.addEventListener("pointerdown", (e) => {
    var t;
    On = !0, ca(e);
    try {
      (t = pt.setPointerCapture) == null || t.call(pt, e.pointerId);
    } catch {
    }
  }), pt.addEventListener("pointermove", (e) => {
    On && ca(e);
  }), pt.addEventListener("pointerup", (e) => {
    On && (On = !1, ca(e), le());
  }), pt.addEventListener("pointercancel", () => On = !1), pt.addEventListener("keydown", (e) => {
    let { x: t, y: n } = tn, i = !0;
    e.key === "ArrowLeft" ? t -= 0.05 : e.key === "ArrowRight" ? t += 0.05 : e.key === "ArrowUp" ? n -= 0.05 : e.key === "ArrowDown" ? n += 0.05 : i = !1, i && (e.preventDefault(), t = Math.max(0, Math.min(1, t)), n = Math.max(0, Math.min(1, n)), tn = { x: t, y: n }, en.style.left = t * 100 + "%", en.style.top = n * 100 + "%", da(t, n), le());
  });
  const We = a("workoutModal");
  let Vn = null;
  function nn(e) {
    return e.map((t) => ({ ...t }));
  }
  function Kr() {
    const e = q[U];
    return {
      key: U,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: nn(se),
      strength: nn(ye),
      cooldown: nn(Pe),
      total: Number(ie.value),
      work: Number(W.value),
      rest: Number(h.value),
      rounds: Number(u.value) || 1
    };
  }
  function yo(e = !1) {
    Q = !!e, Ze = null, at = null, Xe(), uo(), Vn = Kr(), a("moveEditorTitle").textContent = Q ? "Create new move" : "Edit move", a("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", a("moveEditorSubtitle").hidden = !Q, a("warmupRow").hidden = Q, a("deleteMoveOpen").hidden = Q;
    const t = a("createMoveOptions");
    t.hidden = !Q;
    {
      const n = q[U];
      a("includeWarmupPreset").checked = !!(n != null && n.includeWarmup), a("includeCooldownPreset").checked = !!(n != null && n.includeCooldown);
    }
    if (ko(), Q) {
      a("useGlobalTiming").checked = !0, a("useGlobalRestTiming").checked = !0;
      const n = q[U];
      ji((n == null ? void 0 : n.preset) || "movement", !1);
    }
    a("movementCreator").hidden = !0, Pr("movement"), ta(), Hn(), sa.hidden = !0, zn.setAttribute("aria-expanded", "false"), zn.textContent = "Don’t try this!", We.classList.toggle("createMode", Q), We.querySelector(".modal").classList.toggle("createMode", Q), We.classList.add("open"), We.setAttribute("aria-hidden", "false"), qt(), Q && $e();
  }
  function Zr() {
    const e = q[U];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function ko() {
    const e = Zr(), t = a("warmupSwitch");
    t.classList.toggle("on", e), t.setAttribute("aria-checked", String(e));
  }
  a("warmupSwitch").addEventListener("click", () => {
    const e = q[U];
    e && (e.customSequence ? (a("includeWarmupPreset").checked = !e.includeWarmup, Yi()) : (e.warmupOff = !e.warmupOff, le()), ko());
  });
  function wi() {
    Xe(), uo(), mo(), at = null, Ze = null, We.classList.contains("createMode") && Kt(), We.classList.remove("createMode"), We.querySelector(".modal").classList.remove("createMode"), We.classList.remove("open"), We.setAttribute("aria-hidden", "true");
  }
  function So() {
    if (!Vn) return;
    const e = Vn;
    e.profile && (q[e.key] = JSON.parse(JSON.stringify(e.profile))), U = e.key, se = nn(e.warmup), ye = nn(e.strength), Pe = nn(e.cooldown), ie.value = e.total, W.value = e.work, h.value = e.rest, u.value = e.rounds || 1;
    const t = q[U];
    if (t) {
      c.querySelectorAll(".workoutPanel[data-workout]").forEach((i) => i.classList.toggle("active", i.dataset.workout === U));
      const n = c.querySelector(".workoutPanel.active");
      if (n) {
        const i = n.querySelector(".workoutName");
        i && (i.textContent = t.name);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t.name);
        const r = n.querySelector(".sourceTag");
        r && (r.textContent = t.source);
      }
      B.value = t.name;
    }
    le();
  }
  a("cancelWorkoutEdit").addEventListener("click", () => {
    if (Q) {
      const e = U;
      delete q[e], Q = !1, ht = null, Qe(Y.order.find((t) => q[t]) || Object.keys(q)[0]);
    } else
      So();
    wi();
  }), a("saveWorkoutEdit").addEventListener("click", () => {
    Xe(), xe && pi();
    const e = q[U], t = B.value.trim() || "New move";
    if (e && (e.name = t), si(), Ze = null, le(), Q && e)
      Gi(U, e), c.querySelectorAll(".workoutPanel[data-workout]").forEach((n) => n.classList.toggle("active", n.dataset.workout === U)), Q = !1, ht = null, Y.order.includes(U) || Y.order.push(U), me("Move created");
    else {
      const n = c.querySelector(".workoutPanel.active");
      if (n) {
        const i = n.querySelector(".workoutName");
        i && (i.textContent = t);
        const o = n.querySelector(".panelCollapsedText");
        o && (o.textContent = t);
      }
      me("Move saved");
    }
    Vn = null, wi(), Ke();
  }), We.addEventListener("click", (e) => {
    if (e.target === We) {
      if (Q) {
        const t = U;
        delete q[t], Q = !1, ht = null, Qe(Y.order.find((n) => q[n]) || Object.keys(q)[0]);
      } else
        So();
      wi();
    }
  }), Ji(a("addMovementBtn"), "movement"), Ji(a("addRestBtn"), "rest"), Ji(a("addVideoBtn"), "video"), a("closeMovementCreator").addEventListener("click", () => {
    a("movementCreator").hidden = !0;
  }), a("useGlobalTiming").addEventListener("change", Hn), a("useGlobalRestTiming").addEventListener("change", Hn), c.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    ji(e.dataset.movePreset, !0), le();
  })), a("includeWarmupPreset").addEventListener("change", Yi), a("includeCooldownPreset").addEventListener("change", Yi), a("includeWarmupPreset").addEventListener("change", he), a("includeCooldownPreset").addEventListener("change", he), B.addEventListener("input", he), B.addEventListener("input", Qi), a("confirmAddMovement").addEventListener("click", na), a("confirmAddRest").addEventListener("click", na), a("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && na();
  });
  const Gn = a("countdown"), pa = a("countNum"), ft = a("countdownPixelCanvas");
  let Wn = null, ua = "appear";
  class Xr {
    constructor(t, n, i, o, r, s, p) {
      this.width = t.width, this.height = t.height, this.ctx = n, this.x = i, this.y = o, this.color = r, this.speed = (Math.random() * 0.8 + 0.1) * s, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = p, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
    }
    draw() {
      const t = this.maxSizeInteger * 0.5 - this.size * 0.5;
      this.ctx.fillStyle = this.color, this.ctx.fillRect(this.x + t, this.y + t, this.size, this.size);
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
  let ma = [], Co = 1, To = 1;
  function Ot() {
    const e = parseFloat(getComputedStyle(a("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function Jr() {
    var y;
    if (!ft) return;
    const e = Ot(), t = Math.max(1, window.innerWidth / e), n = Math.max(1, window.innerHeight / e);
    Co = t, To = n;
    const i = Math.min(window.devicePixelRatio || 1, 2);
    ft.width = Math.floor(t * i), ft.height = Math.floor(n * i), ft.style.width = t + "px", ft.style.height = n + "px";
    const o = ft.getContext("2d");
    o.setTransform(i, 0, 0, i, 0, 0);
    const r = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], s = 12, p = (y = window.matchMedia) == null ? void 0 : y.call(window, "(prefers-reduced-motion: reduce)").matches, w = p ? 0 : 0.055;
    ma = [];
    for (let v = 0; v < t; v += s)
      for (let x = 0; x < n; x += s) {
        const E = v - t / 2, j = x - n / 2, S = Math.sqrt(E * E + j * j), k = p ? 0 : Math.random() * 75 + S * 0.05, C = new Xr({ width: t, height: n }, o, v, x, r[Math.floor(Math.random() * r.length)], w, k);
        C.maxSizeInteger = 4, C.maxSize = Math.random() * 3.2 + 0.8, C.sizeStep = 0.35 + Math.random() * 0.45, ma.push(C);
      }
  }
  function Mo(e) {
    cancelAnimationFrame(Wn), ua = e;
    const t = ft == null ? void 0 : ft.getContext("2d");
    if (!t) return;
    function n() {
      t.clearRect(0, 0, Co, To);
      let i = !0;
      ma.forEach((o) => {
        o[ua](), o.isIdle || (i = !1);
      }), ua === "disappear" && i || (Wn = requestAnimationFrame(n));
    }
    Wn = requestAnimationFrame(n);
  }
  function yi() {
    cancelAnimationFrame(Wn), Jr(), Mo("appear"), setTimeout(() => Mo("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Gn.classList.contains("active") && yi();
  });
  const jn = a("pixelTrailCanvas"), an = jn.getContext("2d");
  let bt = !0, on = 0.7, rn = 600, Yn = [], sn = null, At = { x: 0, y: 0, ready: !1 };
  function Lo() {
    const e = N.getBoundingClientRect(), t = Ot(), n = Math.min(window.devicePixelRatio || 1, 2), i = Math.max(1, e.width / t), o = Math.max(1, e.height / t);
    jn.width = Math.max(1, Math.floor(i * n)), jn.height = Math.max(1, Math.floor(o * n)), jn.style.width = i + "px", jn.style.height = o + "px", an.setTransform(n, 0, 0, n, 0, 0);
  }
  function $r(e, t) {
    if (!bt) return;
    const n = performance.now();
    At.ready || (At = { x: e, y: t, ready: !0 });
    const i = 7;
    for (let o = 1; o <= i; o++) {
      const r = o / i;
      Yn.push({
        x: At.x + (e - At.x) * r,
        y: At.y + (t - At.y) * r,
        born: n - (i - o) * 10
      });
    }
    At = { x: e, y: t, ready: !0 };
  }
  function ki(e) {
    if (sn = null, !F) return;
    if (!Ve.workout.classList.contains("active")) {
      sn = requestAnimationFrame(ki);
      return;
    }
    const t = N.getBoundingClientRect(), n = Ot();
    an.clearRect(0, 0, t.width / n, t.height / n), bt && (Yn = Yn.filter((o) => e - o.born < rn), an.fillStyle = a("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Yn.forEach((o) => {
      const r = (e - o.born) / rn, s = (1 - r) * on, p = Math.round(o.x / 14) * 14, w = Math.round(o.y / 14) * 14;
      an.globalAlpha = Math.max(0, s);
      const y = 2 + 5 * (1 - r) * on;
      an.fillRect(p - y / 2, w - y / 2, y, y);
    }), an.globalAlpha = 1), sn = requestAnimationFrame(ki);
  }
  N.addEventListener("pointermove", (e) => {
    const t = N.getBoundingClientRect(), n = Ot();
    $r((e.clientX - t.left) / n, (e.clientY - t.top) / n);
  }), N.addEventListener("pointerleave", () => At.ready = !1), new ResizeObserver(Lo).observe(N), Lo(), sn = requestAnimationFrame(ki);
  const Nt = a("movementRippleCanvas"), ln = Nt.getContext("2d");
  let Vt = !0, dn = null, Qr = performance.now();
  function Eo() {
    const e = Nt.parentElement.getBoundingClientRect(), t = Ot(), n = Math.max(1, e.width / t), i = Math.max(1, e.height / t), o = Math.min(window.devicePixelRatio || 1, 2);
    Nt.width = Math.max(1, Math.floor(n * o)), Nt.height = Math.max(1, Math.floor(i * o)), Nt.style.width = n + "px", Nt.style.height = i + "px", ln.setTransform(o, 0, 0, o, 0, 0);
  }
  function Ro() {
    var e;
    return _e || ((e = M[_]) == null ? void 0 : e.kind) === "rest";
  }
  function es() {
    const e = M[_];
    return Ro() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Si(e) {
    if (dn = null, !F) return;
    if (!Ve.workout.classList.contains("active")) {
      dn = requestAnimationFrame(Si);
      return;
    }
    const t = Nt.parentElement.getBoundingClientRect(), n = Ot(), i = Math.max(1, t.width / n), o = Math.max(1, t.height / n);
    if (ln.clearRect(0, 0, i, o), Vt) {
      const r = es(), s = (e - Qr) % r / r, p = 15, w = Math.max(8, Math.round(p * o / Math.max(1, i))), y = i / (p + 1), v = o / (w + 1), x = i * 0.5, E = o * 0.52, j = Math.hypot(x, E), k = a("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let C = 1; C <= w; C++)
        for (let $ = 1; $ <= p; $++) {
          const Z = $ * y, A = C * v, X = Math.hypot(Z - x, A - E) / j, ue = Ro(), Ce = ue ? Math.exp(-Math.pow((X - (s * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, ae = Math.exp(-Math.pow((X - s * 1.25) * 7, 2)), Ae = ue ? Ce : ae, He = ue ? 0.5 + 0.5 * Math.sin(s * Math.PI * 2 - X * 3) ** 2 : 0.35 + 0.65 * Math.sin(s * Math.PI * 2 - X * 5) ** 2, ve = ue ? 1.4 + Ae * 4.2 * He : 1.2 + Ae * 5 * He;
          ln.beginPath(), ln.arc(Z, A, ve, 0, Math.PI * 2), ln.fillStyle = `rgba(${k},${ue ? 0.08 + Ae * 0.48 : 0.05 + Ae * 0.55})`, ln.fill();
        }
    }
    dn = requestAnimationFrame(Si);
  }
  new ResizeObserver(Eo).observe(Nt.parentElement), Eo(), dn = requestAnimationFrame(Si);
  const Un = a("exerciseTitle"), xt = a("exerciseMeta"), ga = a("stepLabel"), ha = a("digits"), Ao = a("fill"), cn = a("progress"), va = a("pause"), ts = a("nextName"), ns = a("nextMeta"), is = a("nextIcon"), Ci = a("skipNextSession");
  let et = null;
  function tt(e) {
    for (let t = Math.max(0, e); t < M.length; t++)
      if (!M[t].sessionHidden) return t;
    return -1;
  }
  function as() {
    const e = M[_];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (_e) {
      const i = tt(_ + 1), o = i >= 0 ? M[i] : null;
      return o ? { name: o.name, meta: ba(o), icon: fa(o) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const t = tt(_ + 1), n = t >= 0 ? M[t] : null;
    return n ? { name: n.name, meta: ba(n), icon: fa(n) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function os() {
    if (!M[_]) return M.length;
    const t = tt(_ + 1);
    return t < 0 ? M.length : t + 1;
  }
  function fa(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function ba(e) {
    return e.kind === "video" ? "YouTube · " + Rn(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function Ti() {
    return M.length && M[M.length - 1].round || 1;
  }
  function No(e) {
    const t = M[e];
    if (!t) return "";
    const n = Ti();
    if (n <= 1) return "Step " + (e + 1) + " of " + M.length;
    if (t.roundBreak) return "Round " + t.round + " of " + n + " · Rest";
    const i = M.filter((o) => o.round === t.round && !o.roundBreak).length;
    return "Round " + t.round + " of " + n + " · Step " + (t.roundIndex + 1) + " of " + i;
  }
  function Bo() {
    return cn.querySelector('[data-step="' + _ + '"]');
  }
  function rs() {
    M[_] && Number(cn.dataset.round) !== (M[_].round || 1) && ya(), [...cn.children].forEach((e) => {
      const t = Number(e.dataset.step);
      e.classList.toggle("done", t < _), e.classList.toggle("active", t === _), e.classList.toggle("rewindable", t <= _), e.disabled = t > _, t === _ && e.style.setProperty("--segment-progress", "0%");
    }), M[_] && (ga.textContent = No(_), Wt());
  }
  function ss(e) {
    const t = M.indexOf(e);
    t < 0 || t <= _ || (e.sessionHidden = !e.sessionHidden, Gt(), me((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function Io() {
    const e = a("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const t = os(), n = M.slice(t);
    (Jt === "all" ? n : n.slice(0, Math.max(1, Number(Jt) || 1))).forEach((o) => {
      const r = document.createElement("section");
      r.className = "upcomingCard" + (o.sessionHidden ? " sessionHidden" : "") + (La(o) ? " noMeta" : ""), r.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + vt(fa(o)) + '</div><div><div class="upcomingName">' + V(o.name) + '</div><div class="upcomingMeta">' + V(ba(o)) + (Ti() > 1 ? " · round " + o.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (o.sessionHidden ? "Include this session" : "Skip this session") + "</button>", r.querySelector(".skipSessionBtn").addEventListener("click", () => ss(o)), e.appendChild(r);
    });
  }
  function Gt() {
    var t;
    const e = as();
    ts.textContent = e.name, ns.textContent = e.meta, is.innerHTML = vt(e.icon);
    {
      const n = _e ? M[tt(_ + 1)] : ((t = M[_]) == null ? void 0 : t.rest) > 0 ? { kind: "rest" } : M[tt(_ + 1)];
      c.querySelector(".nextCard").classList.toggle("noMeta", !!(n && La(n)));
    }
    if (et = null, _e) {
      const n = tt(_ + 1);
      n >= 0 && (et = M[n]);
    } else {
      const n = M[_];
      if (n && n.rest > 0)
        et = null;
      else {
        const i = tt(_ + 1);
        i >= 0 && (et = M[i]);
      }
    }
    Ci && (Ci.hidden = !et, Ci.textContent = et != null && et.sessionHidden ? "Include this session" : "Skip this session"), Io();
  }
  Ci.addEventListener("click", () => {
    et && (et.sessionHidden = !et.sessionHidden, me((et.sessionHidden ? "Hidden " : "Included ") + et.name + " for this session"), Gt());
  });
  let ut = null, xa = null;
  function Kn(e, t = {}) {
    const n = q[U];
    g.fire(e, { move: (n == null ? void 0 : n.name) || "", move_id: U, ...t });
  }
  function ls() {
    const e = q[U];
    ut = { key: U, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(xa), xa = setInterval(() => {
      ut && !lt && ut.active++;
    }, 1e3), Kn("started", { steps: M.length });
  }
  function Fo(e) {
    if (clearInterval(xa), !ut) return;
    const t = ut;
    ut = null, Kn(e ? "completed" : "ended", { seconds: t.active }), !(t.active < 30) && (Y.history.unshift({ id: "h-" + t.startedAt, move_id: t.key, name: t.name, start: new Date(t.startedAt).toISOString(), seconds: t.active, completed: e }), Y.history = Y.history.slice(0, 1e3), Ke(), jt(), yt());
  }
  function ds() {
    st("workout"), cs();
    const e = tt(0);
    e >= 0 && M[e].kind === "video" && qo(M[e]);
  }
  function wa() {
    Li(), Fo(!1), clearInterval(Se), clearInterval(ni), _e = !1, wt(!1), a("app").classList.remove("resting"), Gn.classList.remove("active"), st("home");
  }
  function cs() {
    Gn.classList.add("active");
    let e = 5;
    pa.textContent = e, requestAnimationFrame(yi), clearInterval(ni), ni = setInterval(() => {
      e--, e > 0 ? (pa.textContent = e, yi()) : (clearInterval(ni), pa.textContent = "GO", yi(), setTimeout(() => {
        Gn.classList.remove("active"), cancelAnimationFrame(Wn), us();
      }, 650));
    }, 1e3);
  }
  function ya() {
    var t;
    cn.innerHTML = "";
    const e = ((t = M[Math.max(0, _)] || M[0]) == null ? void 0 : t.round) || 1;
    cn.dataset.round = e, M.forEach((n, i) => {
      if ((n.round || 1) !== e) return;
      const o = document.createElement("button");
      o.dataset.step = i, o.type = "button", o.className = "progressSegment", o.setAttribute("aria-label", "Go to " + n.name), o.addEventListener("click", () => {
        i <= _ && ps(i);
      }), cn.appendChild(o);
    });
  }
  function wt(e) {
    e = !!e;
    const t = lt !== e;
    if (lt = e, va.textContent = e ? "Resume" : "Pause", a("app").classList.toggle("paused", e), je && pe)
      try {
        e ? pe.pauseVideo() : pe.playVideo();
      } catch {
      }
    t && ut && Kn(e ? "paused" : "resumed");
  }
  function ps(e) {
    e < 0 || e >= M.length || e > _ || (clearInterval(Se), _e = !1, a("app").classList.remove("resting"), _ = e, wt(!1), vn(), Se = setInterval(Bt, 1e3));
  }
  function us() {
    if (_ = tt(0), wt(!1), ya(), _ < 0) {
      Un.textContent = "No activities", xt.textContent = "Open Edit and enable or add a movement", xt.hidden = !1;
      return;
    }
    ls(), vn(), clearInterval(Se), Se = setInterval(Bt, 1e3);
  }
  const Po = a("videoStage"), pn = a("videoSound"), ms = 0, un = 1, gs = 2;
  let Ho = 0, mn = null, gn = null, pe = null, hn = null, Mi = 0, ka = !1, je = null, Sa = null;
  function Do() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : mn || (mn = new Promise((t, n) => {
      const i = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          i == null || i();
        } catch {
        }
      };
      const o = setInterval(() => {
        var s;
        (s = window.YT) != null && s.Player && (clearInterval(o), clearTimeout(r), t(window.YT));
      }, 100), r = setTimeout(() => {
        clearInterval(o), mn = null, n(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const s = document.createElement("script");
        s.src = "https://www.youtube.com/iframe_api", s.async = !0, s.onerror = () => {
          clearInterval(o), clearTimeout(r), mn = null, n(new Error("YouTube did not load"));
        }, document.head.appendChild(s);
      }
    }), mn);
  }
  function _o() {
    return gn || (gn = Do().then((e) => new Promise((t) => {
      const n = document.createElement("div");
      a("videoFrame").appendChild(n), pe = new e.Player(n, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => t(pe), onStateChange: (i) => vs(i.data), onError: (i) => fs(i.data) }
      });
    })), gn.catch(() => {
      gn = null;
    }), gn);
  }
  function qo(e) {
    !(e != null && e.videoId) || e.videoError || _o().then((t) => {
      je || hn === e.videoId || (hn = e.videoId, Mi = Number(e.start) || 0, ka = !1, t.mute(), t.loadVideoById({ videoId: e.videoId, startSeconds: Mi }));
    }).catch(() => {
    });
  }
  function hs() {
    const e = tt(_ + 1);
    e >= 0 && M[e].kind === "video" && qo(M[e]);
  }
  function vs(e) {
    if (!je) {
      e === un && !ka && (ka = !0, pe.pauseVideo(), pe.seekTo(Mi, !0));
      return;
    }
    Po.classList.toggle("playing", e === un), M[_] === je && performance.now() > Ho && (e === un && lt ? wt(!1) : e === gs && !lt && wt(!0)), e === un && Vo(je.videoId, pe.getDuration()) && Ke(), e === ms && Zn();
  }
  function fs(e) {
    const t = je;
    if (!t) {
      hn = null;
      return;
    }
    e === 101 || e === 150 ? (ws(t.videoId), me("That video can’t play outside YouTube, so it was skipped")) : me("The video couldn’t play, so it was skipped"), Zn();
  }
  function bs(e) {
    if (a("app").classList.add("videoStep"), pn.hidden = !0, je = e, clearTimeout(Sa), !e.videoId) {
      me("This video step has no link yet, so it was skipped"), setTimeout(() => Zn(), 0);
      return;
    }
    _o().then((t) => {
      if (je !== e) return;
      Ho = performance.now() + 1500;
      const n = Number(e.start) || 0;
      hn !== e.videoId ? (hn = e.videoId, Mi = n, t.loadVideoById({ videoId: e.videoId, startSeconds: n })) : (t.seekTo(n, !0), t.playVideo()), t.unMute(), lt && t.pauseVideo(), Sa = setTimeout(() => {
        je !== e || lt || (t.getPlayerState() !== un ? (t.mute(), t.playVideo(), pn.hidden = !1) : t.isMuted() && (pn.hidden = !1));
      }, 1600);
    }).catch(() => {
      je === e && (me("YouTube didn’t load, so the video was skipped"), Zn());
    });
  }
  function zo() {
    if (!a("app").classList.contains("videoStep")) return;
    const e = c.querySelector(".workGrid"), t = c.querySelector(".sessionControlRow"), n = e.getBoundingClientRect().top, i = (t == null ? void 0 : t.offsetHeight) || 42, o = window.innerHeight - n - 16 - i - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(o)) + "px");
  }
  window.addEventListener("resize", zo);
  function Li() {
    clearTimeout(Sa);
    const e = je;
    if (je = null, a("app").classList.remove("videoStep"), Po.classList.remove("playing"), pn.hidden = !0, e && pe) {
      try {
        pe.pauseVideo();
      } catch {
      }
      hn = null;
    }
  }
  function Zn() {
    const e = je;
    !e || M[_] !== e || (Li(), clearInterval(Se), fn(), Se = setInterval(Bt, 1e3));
  }
  pn.addEventListener("click", () => {
    pe && (pe.unMute(), pe.playVideo()), pn.hidden = !0;
  });
  function xs(e) {
    var i;
    const t = Number(e.start) || 0;
    if (e.useVideoLength === !1) return t + (Number(e.duration) || 300);
    const n = pe && je === e && Number((i = pe.getDuration) == null ? void 0 : i.call(pe)) || 0;
    return Number(e.end) || n || Number(e.videoDuration) || t + (Number(e.duration) || 300);
  }
  function Oo(e, t) {
    const n = q[U];
    [se, ye, Pe, n == null ? void 0 : n.warmup, n == null ? void 0 : n.strength, n == null ? void 0 : n.cooldown, n == null ? void 0 : n.sequence].forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
      o && o.kind === "video" && o.videoId === e && t(o);
    }));
  }
  function Vo(e, t) {
    t = Math.round(Number(t) || 0);
    let n = !1;
    return e && t > 0 && Oo(e, (i) => {
      i.videoDuration !== t && (i.videoDuration = t, n = !0);
    }), n;
  }
  function ws(e) {
    Oo(e, (t) => {
      t.videoError = "embed";
    }), Ke();
  }
  function ys(e) {
    const t = e.videoId;
    if (!t) return;
    const n = () => {
      We.classList.contains("open") ? Ze || le() : (le(), Ke());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + t)).then((i) => i.ok ? i.json() : Promise.reject(i.status)).then((i) => {
      e.videoId === t && (e.videoTitle = i.title || "", e.autoName && i.title && (e.name = i.title), n());
    }).catch((i) => {
      e.videoId === t && i === 401 && (e.videoError = "embed", n());
    }), ks(t).then((i) => {
      Vo(t, i) && n();
    }).catch((i) => {
      i === "embed" && e.videoId === t && (e.videoError = "embed", n());
    });
  }
  function ks(e) {
    return Do().then((t) => new Promise((n, i) => {
      const o = document.createElement("div");
      o.className = "videoProbe", o.setAttribute("aria-hidden", "true");
      const r = document.createElement("div");
      o.appendChild(r), a("app").appendChild(o);
      let s = null, p = !1;
      const w = (x, E) => {
        p || (p = !0, clearTimeout(y), setTimeout(() => {
          try {
            s == null || s.destroy();
          } catch {
          }
          o.remove();
        }, 0), E ? i(E) : n(x));
      }, y = setTimeout(() => w(0), 2e4), v = () => {
        var E;
        const x = Number((E = s == null ? void 0 : s.getDuration) == null ? void 0 : E.call(s)) || 0;
        return x > 0 && w(x), x > 0;
      };
      s = new t.Player(r, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            v() || (s.mute(), s.playVideo());
          },
          onStateChange: () => v(),
          onError: (x) => w(0, x.data === 101 || x.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function vn() {
    _e = !1;
    const e = M[_];
    a("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? bs(e) : Li(), Ge = e.duration, En = e.duration, Un.textContent = e.name, xt.textContent = e.group, xt.hidden = !0, ga.textContent = No(_), ut && Kn("step", { name: e.name, group: e.group, kind: e.kind, step: _ + 1, of: M.length, round: e.round || 1, rounds: Ti(), duration: e.duration }), Gt(), rs(), hs(), e.kind === "video" && setTimeout(zo, 0);
  }
  function Wt() {
    var o;
    const e = ((o = M[_]) == null ? void 0 : o.kind) === "video" && !_e, t = e && Ge >= 60;
    ha.textContent = t ? Rn(Ge) : Ge, ha.classList.toggle("long", t), e && (a("videoClock").textContent = Rn(Ge) + " left");
    const n = Ge / En * 100;
    Ao.style.width = n + "%";
    const i = Bo();
    if (i && !_e) {
      const r = 100 - n;
      i.style.setProperty("--segment-progress", r + "%");
    }
  }
  function Bt() {
    var t, n;
    if (lt) return;
    const e = M[_];
    if ((e == null ? void 0 : e.kind) === "video" && !_e && je === e) {
      const i = Number((t = pe == null ? void 0 : pe.getCurrentTime) == null ? void 0 : t.call(pe)) || 0, o = Number(e.start) || 0, r = xs(e);
      En = Math.max(1, r - o), (i > o || ((n = pe == null ? void 0 : pe.getPlayerState) == null ? void 0 : n.call(pe)) === un) && (Ge = Math.max(0, Math.ceil(r - i))), Wt(), i > o && i >= r - 0.25 && Zn();
      return;
    }
    Ge--, Wt(), Ge <= 0 && (e.rest > 0 ? Go(e.rest) : fn());
  }
  function Go(e) {
    var n;
    _e = !0, a("app").classList.add("resting");
    const t = Bo();
    t && t.style.setProperty("--segment-progress", "100%"), clearInterval(Se), Ge = e, En = e, ut && Kn("rest", { duration: e }), Un.textContent = "Rest", xt.textContent = (n = M[_]) != null && n.roundBreakAfter ? "Round " + (M[_].round + 1) + " next" : "Recovery", Gt(), Wt(), Se = setInterval(() => {
      lt || (Ge--, Wt(), Ge <= 0 && (clearInterval(Se), fn(), Se = setInterval(Bt, 1e3)));
    }, 1e3);
  }
  function fn() {
    _e = !1;
    const e = tt(_ + 1);
    if (e >= 0)
      _ = e, vn();
    else {
      clearInterval(Se), Li(), wt(!1), a("app").classList.remove("resting"), Un.textContent = "Complete", xt.textContent = "Move finished", xt.hidden = !1, ha.textContent = "✓";
      {
        const t = Ti();
        ga.textContent = t > 1 ? t + " rounds done" : M.filter((n) => !n.roundBreak).length + " steps done";
      }
      Fo(!0);
      {
        const t = Qo(7).reduce((n, i) => n + i.minutes, 0);
        xt.textContent = "Move finished · " + t + " min in the last 7 days";
      }
      Ao.style.width = "100%", Gt();
    }
  }
  a("skipExercise").addEventListener("click", () => {
    Ss(), wt(!1);
  });
  function Ss() {
    clearInterval(Se);
    const e = M[_];
    if (_e) {
      _e = !1, a("app").classList.remove("resting");
      const n = tt(_ + 1);
      n >= 0 ? (_ = n, vn(), Se = setInterval(Bt, 1e3)) : fn();
      return;
    }
    if (e && e.rest > 0) {
      Go(e.rest);
      return;
    }
    const t = tt(_ + 1);
    t >= 0 ? (_ = t, vn(), Se = setInterval(Bt, 1e3)) : fn();
  }
  a("restartSegment").addEventListener("click", () => {
    if (clearInterval(Se), wt(!1), _e) {
      const e = M[_];
      Ge = e.rest, En = e.rest, Un.textContent = "Rest", xt.textContent = "Recovery", a("app").classList.add("resting"), Gt(), Wt();
    } else
      vn();
    Se = setInterval(_e ? () => {
      lt || (Ge--, Wt(), Ge <= 0 && (clearInterval(Se), fn(), Se = setInterval(Bt, 1e3)));
    } : Bt, 1e3);
  });
  function Xn(e, t, n, i) {
    let o = 0, r = null, s = !1;
    function p() {
      r && cancelAnimationFrame(r), r = null, o = 0, s = !1, t.style.width = "0%", e.classList.remove("holding");
    }
    function w(x) {
      if (!s) return;
      o || (o = x);
      const E = Math.min(1, (x - o) / n);
      if (t.style.width = E * 100 + "%", E >= 1) {
        s = !1, r && cancelAnimationFrame(r), r = null, t.style.width = "100%", setTimeout(() => t.style.width = "0%", 90), i();
        return;
      }
      r = requestAnimationFrame(w);
    }
    function y(x) {
      var E;
      if (!(x && x.button !== void 0 && x.button !== 0)) {
        x == null || x.preventDefault(), p(), s = !0, e.classList.add("holding");
        try {
          (E = e.setPointerCapture) == null || E.call(e, x.pointerId);
        } catch {
        }
        r = requestAnimationFrame(w);
      }
    }
    function v() {
      s && p();
    }
    e.addEventListener("pointerdown", y), e.addEventListener("pointerup", v), e.addEventListener("pointercancel", v), e.addEventListener("lostpointercapture", v), e.addEventListener("keydown", (x) => {
      (x.key === " " || x.key === "Enter") && !x.repeat && y(x);
    }), e.addEventListener("keyup", (x) => {
      (x.key === " " || x.key === "Enter") && v();
    });
  }
  const Cs = a("endWorkout");
  Xn(Cs, a("holdEndFill"), 1500, wa);
  const bn = a("deleteMoveConfirm");
  a("deleteMoveOpen").addEventListener("click", () => {
    bn.classList.add("open"), bn.setAttribute("aria-hidden", "false");
  }), a("deleteMoveCancel").addEventListener("click", () => {
    bn.classList.remove("open"), bn.setAttribute("aria-hidden", "true");
  });
  function Ts() {
    const e = U, t = c.querySelector('.workoutPanel[data-workout="' + e + '"]');
    t && t.remove(), delete q[e], Y.order = Y.order.filter((i) => i !== e);
    let n = c.querySelector(".workoutPanel[data-workout]");
    if (!n) {
      const i = "custom-" + Date.now();
      q[i] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, Y.order.push(i), n = Gi(i, q[i]);
    }
    bn.classList.remove("open"), bn.setAttribute("aria-hidden", "true"), Vn = null, wi(), Qe(n.dataset.workout), Ke(), me("Move deleted");
  }
  Xn(a("deleteMoveYes"), a("deleteMoveFill"), 1500, Ts);
  const Ca = c.querySelector(".rubberTabs"), xn = a("rubberIndicator");
  function Jn(e, t = !0) {
    if (!e || !Ca || !xn) return;
    const n = Ca.getBoundingClientRect(), i = e.getBoundingClientRect();
    xn.style.transition = t ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const o = Ot();
    xn.style.left = (i.left - n.left) / o + Ca.scrollLeft + "px", xn.style.width = i.width / o + "px", t && (xn.style.transform = "scaleX(1.08)", setTimeout(() => xn.style.transform = "scaleX(1)", 180));
  }
  c.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), c.querySelectorAll(".tab").forEach((t) => t.classList.remove("active")), c.querySelectorAll(".settingsPane").forEach((t) => t.classList.remove("active")), e.classList.add("active"), a(e.dataset.pane).classList.add("active"), Jn(e, !0);
  })), requestAnimationFrame(() => Jn(c.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Jn(c.querySelector(".tab.active"), !1));
  const Ta = a("pixelTrailToggle"), Ma = a("rippleToggle"), wn = a("trailStrength"), yn = a("trailLife");
  function Je(e, t) {
    J()[e] = t, Ke();
  }
  const Wo = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function jo(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function La(e) {
    var t;
    return !!((t = J().hideMeta) != null && t[jo(e)]);
  }
  function Ms() {
    const e = /* @__PURE__ */ new Map(), t = (n, i, o) => {
      if (!n) return;
      Array.isArray(n) && (n = { name: n[1], group: n[2], kind: "work" });
      const r = jo(n);
      let s = e.get(r);
      s || (s = { key: r, label: r === "rest" ? "Rest" : r === "video" ? "Video" : String(n.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(r, s)), s.kinds.add(r === "rest" ? "Rest" : r === "video" ? "Video" : i), s.moves.add(o), s.count++;
    };
    return Object.values(q).forEach((n) => {
      const i = n.name || "Move";
      (n.warmup || (n.customSequence ? [] : ke)).forEach((o) => t(o, "Warm-up", i)), (n.customSequence ? n.sequence || [] : n.strength || []).forEach((o) => t(o, o.presetRole === "warmup" ? "Warm-up" : o.presetRole === "cooldown" ? "Cooldown" : "Movement", i)), (n.cooldown || (n.customSequence ? [] : Zt)).forEach((o) => t(o, "Cooldown", i));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([n, i]) => {
      e.has(n) || e.set(n, { key: n, label: i, kinds: /* @__PURE__ */ new Set([i]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((n) => ({ ...n, kind: n.kinds.has("Movement") ? "Movement" : [...n.kinds][0], moves: [...n.moves] })).sort((n, i) => Wo.indexOf(n.kind) - Wo.indexOf(i.kind) || n.label.localeCompare(i.label));
  }
  let Ea = "all";
  function Ra() {
    const e = a("metaSearch").value.trim().toLowerCase();
    return Ms().filter((t) => (Ea === "all" || t.kind === Ea) && (!e || t.label.toLowerCase().includes(e) || t.moves.some((n) => n.toLowerCase().includes(e))));
  }
  function Ei() {
    const e = a("metaTableBody");
    if (!e) return;
    const t = J().hideMeta || {}, n = Ra();
    e.innerHTML = n.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', n.forEach((o) => {
      const r = !t[o.key], s = o.count ? (o.moves.length > 2 ? o.moves.slice(0, 2).join(", ") + " + " + (o.moves.length - 2) + " more" : o.moves.join(", ")) + " · " + o.count + " step" + (o.count === 1 ? "" : "s") : "Not used yet", p = document.createElement("tr");
      p.className = r ? "" : "off", p.innerHTML = '<td><div class="metaType">' + V(o.label) + '</div><div class="metaSub">' + V(o.kind + " · " + s) + '</div></td><td class="metaKindCol">' + V(o.kind) + '</td><td class="metaUsedCol">' + V(s) + '</td><td class="metaSwitchCol"><button class="switch' + (r ? " on" : "") + '" type="button" role="switch" aria-checked="' + r + '" aria-label="Second line for ' + V(o.label) + ' on phones"></button></td>', p.querySelector(".switch").addEventListener("click", () => Aa([o.key], r)), e.appendChild(p);
    });
    const i = n.filter((o) => t[o.key]).length;
    a("metaCount").textContent = n.length ? n.length + " type" + (n.length === 1 ? "" : "s") + (i ? " · " + i + " hidden on phones" : "") : "";
  }
  function Aa(e, t) {
    const n = { ...J().hideMeta || {} };
    e.forEach((i) => {
      t ? n[i] = !0 : delete n[i];
    }), Je("hideMeta", n), Ei(), Zi(), Gt();
  }
  a("metaSearch").addEventListener("input", Ei), a("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    Ea = e.dataset.kind, a("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.classList.toggle("active", t === e)), Ei();
  })), a("metaHideAll").addEventListener("click", () => Aa(Ra().map((e) => e.key), !0)), a("metaShowAll").addEventListener("click", () => Aa(Ra().map((e) => e.key), !1));
  const It = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...J().toggles || {} };
  function Yo() {
    c.querySelectorAll("[data-toggle]").forEach((n) => n.classList.toggle("on", It[n.dataset.toggle] !== !1)), c.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([n, i]) => {
      a(i).hidden = It[n] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((n) => It[n] !== !1);
    c.querySelector(".activityCard").hidden = !e, a("weatherCard").hidden = It.weather === !1;
    const t = c.querySelector("#homeView .grid");
    t.classList.toggle("noActivity", !e), t.classList.toggle("noWeather", It.weather === !1);
  }
  c.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    It[e.dataset.toggle] = It[e.dataset.toggle] === !1, Yo(), Je("toggles", { ...It });
  })), Yo();
  function Ls() {
    Ta.classList.toggle("on", bt), Ma.classList.toggle("on", Vt), wn.value = Math.round(on * 100), a("trailStrengthValue").textContent = wn.value + "%", yn.value = rn, a("trailLifeValue").textContent = yn.value + " ms";
  }
  J().trailEnabled !== void 0 && (bt = J().trailEnabled), J().rippleEnabled !== void 0 && (Vt = J().rippleEnabled), J().trailStrength !== void 0 && (on = J().trailStrength), J().trailMaxAge !== void 0 && (rn = J().trailMaxAge), Ls(), Ta.addEventListener("click", () => {
    bt = !bt, Ta.classList.toggle("on", bt), bt || (Yn = []), Je("trailEnabled", bt);
  }), Ma.addEventListener("click", () => {
    Vt = !Vt, Ma.classList.toggle("on", Vt), Je("rippleEnabled", Vt);
  }), wn.addEventListener("input", () => {
    on = Number(wn.value) / 100, a("trailStrengthValue").textContent = wn.value + "%";
  }), wn.addEventListener("change", () => Je("trailStrength", on)), yn.addEventListener("input", () => {
    rn = Number(yn.value), a("trailLifeValue").textContent = yn.value + " ms";
  }), yn.addEventListener("change", () => Je("trailMaxAge", rn)), fi.addEventListener("change", () => Je("upcomingCount", Jt));
  function Uo(e) {
    c.querySelectorAll(".themeBtn").forEach((n) => n.classList.toggle("active", n.dataset.theme === e));
    const t = e === "light";
    a("app").classList.toggle("light", t), g.setLight(t), Bi(c);
  }
  Uo(J().theme || "dark"), c.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Uo(e.dataset.theme), Je("theme", e.dataset.theme);
  }));
  const Be = { steps: null, weather: null, ...J().entities || {} };
  let Ie = null, Na = {};
  function Es(e) {
    const t = Object.values(e).filter((p) => p.entity_id.startsWith("sensor.") || p.entity_id.startsWith("input_number.")), n = (p) => p.attributes.friendly_name || p.entity_id, i = t.filter((p) => /step/i.test(p.entity_id) || /step/i.test(n(p)) || ["steps", "step"].includes(String(p.attributes.unit_of_measurement || "").toLowerCase())), o = t.filter((p) => !i.includes(p)), r = (p, w) => n(p).localeCompare(n(w)), s = (p, w) => /health_steps/.test(w.entity_id) - /health_steps/.test(p.entity_id) || r(p, w);
    return { suggested: i.sort(s), rest: o.sort(r), label: n };
  }
  function Ko(e) {
    const t = a("stepsEntity");
    if (!t || t.matches(":focus")) return;
    const { suggested: n, rest: i, label: o } = Es(e), r = (w) => '<option value="' + V(w.entity_id) + '">' + V(o(w)) + "</option>";
    t.innerHTML = '<option value="">Not connected</option>' + (n.length ? '<optgroup label="Suggested">' + n.map(r).join("") + "</optgroup>" : "") + (i.length ? '<optgroup label="All sensors">' + i.map(r).join("") + "</optgroup>" : ""), t.value = Be.steps || "";
    const s = a("stepsStatus"), p = Be.steps && e[Be.steps];
    s.textContent = p ? "Connected · " + o(p) : s.dataset.empty;
  }
  a("stepsEntity").addEventListener("change", () => {
    Be.steps = a("stepsEntity").value || null, Je("entities", { ...Be }), Na = {}, $o(), Ie && (Ko(Ie), Xo(Ie));
  });
  function Rs(e, t = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: t }).format(e);
  }
  function Zo() {
    const e = Be.steps && (Ie == null ? void 0 : Ie[Be.steps]), t = Number(e == null ? void 0 : e.state);
    return Number.isFinite(t) ? t : null;
  }
  function Xo(e) {
    var i;
    const t = Be.steps, n = t ? Number((i = e[t]) == null ? void 0 : i.state) : NaN;
    a("stepsMeta").textContent = t ? Number.isFinite(n) ? Rs(n) : "—" : "Set up in Settings";
  }
  let Jo = 0;
  async function $o() {
    const e = Be.steps;
    if (!e || !g.ws) return;
    Jo = Date.now();
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - 30);
    try {
      const i = await g.ws({ type: "recorder/statistics_during_period", start_time: n.toISOString(), end_time: t.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), o = (i == null ? void 0 : i[e]) || [], r = {};
      if (o.forEach((s) => {
        Number.isFinite(s.max) && (r[Re(new Date(s.start))] = s.max);
      }), !Object.keys(r).length) {
        const s = await g.ws({ type: "history/history_during_period", start_time: n.toISOString(), end_time: t.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((s == null ? void 0 : s[e]) || []).forEach((p) => {
          const w = Number(p.s ?? p.state), y = p.lu ? p.lu * 1e3 : Date.parse(p.last_updated || p.last_changed);
          if (!Number.isFinite(w) || !y) return;
          const v = Re(new Date(y));
          r[v] = Math.max(r[v] || 0, w);
        });
      }
      Na = r, yt();
    } catch {
    }
  }
  function jt() {
    yt();
  }
  jt(), setInterval(() => {
    jt(), qn(), zt();
  }, 10 * 60 * 1e3);
  function Qo(e) {
    const t = {}, n = {};
    Y.history.forEach((s) => {
      const p = Re(new Date(s.start));
      t[p] = (t[p] || 0) + (s.seconds || 0) / 60, n[p] = (n[p] || 0) + 1;
    });
    const i = /* @__PURE__ */ new Date(), o = Re(i), r = [];
    for (let s = e - 1; s >= 0; s--) {
      const p = new Date(i.getFullYear(), i.getMonth(), i.getDate() - s), w = Re(p), y = Y.checkins.filter((x) => x.date === w), v = (x) => {
        const E = y.map((j) => j[x]).filter(Boolean);
        return E.length ? E.reduce((j, S) => j + S, 0) / E.length : null;
      };
      r.push({
        key: w,
        date: p,
        minutes: Math.round(t[w] || 0),
        moves: n[w] || 0,
        steps: w === o && Zo() != null ? Zo() : Na[w] ?? null,
        mood: v("mood"),
        energy: v("energy")
      });
    }
    return r;
  }
  function As(e) {
    let t = e.length - 1;
    e[t] && !e[t].minutes && t--;
    let n = 0;
    for (; t >= 0 && e[t].minutes > 0; )
      n++, t--;
    return n;
  }
  function yt() {
    const e = a("insightCard");
    if (!e) return;
    const t = Qo(30), n = As(t), i = t.reduce((y, v) => y + v.minutes, 0), o = /* @__PURE__ */ new Date(), r = Re(o), s = Re(new Date(o.getFullYear(), o.getMonth(), o.getDate() - (o.getDay() + 6) % 7)), p = t.filter((y) => y.key >= s && y.key <= r).reduce((y, v) => y + v.minutes, 0), w = (y, v, x) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + y + '</div><div><div class="activityRowName">' + V(v) + '</div><div class="activityRowMeta">' + V(x) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + vt("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + w(vt("clock"), "This week", p + " min") + w(vt("streak"), "Streak", n + " day" + (n === 1 ? "" : "s")) + w(vt("calendar"), "30 days", i + " min") + "</div>";
  }
  const Ns = {
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
  }, Bs = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", kn = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Ri = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Is = 0;
  const Ba = (e, t) => '<path class="' + t + '" d="' + e + '"/>', ot = (e, t, n, i) => {
    const o = n * 0.2687;
    return '<path fill="#fff"' + (i < 1 ? ' opacity="' + i + '"' : "") + ' d="M' + e + " " + (t - n) + "L" + (e + o) + " " + (t - o) + "L" + (e + n) + " " + t + "L" + (e + o) + " " + (t + o) + "L" + e + " " + (t + n) + "L" + (e - o) + " " + (t + o) + "L" + (e - n) + " " + t + "L" + (e - o) + " " + (t - o) + 'Z"/>';
  }, er = ([e, t, n], i) => '<path d="' + e + '" fill="url(#' + i + ')"/><defs><linearGradient id="' + i + '" x1="0" y1="' + t + '" x2="0" y2="' + n + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Fs = (e, t) => t ? '<circle cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Ps = (e) => (e ? ["29.35", "43.04", "56.74"].map((t) => '<rect class="wxAccent" x="' + t + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + t + ' 60.65)"/>') : [19, 26, 33].map((t) => '<rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + t + ' 38)"/>')).join(""), Hs = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([t, n]) => '<circle cx="' + t + '" cy="' + n + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Ds(e, t, n, i) {
    return e === "clear" ? t ? er(n ? Ri.l : Ri.s, i) + (n ? ot(70, 20, 5.83, 1) + ot(78.33, 41.67, 3.75, 0.8) + ot(60, 71.67, 3.33, 0.6) : ot(42, 12, 3.5, 1) + ot(47, 25, 2.25, 0.8) + ot(36, 43, 2, 0.6)) : Fs(i, n) : e === "partly" ? (t ? er(n ? Ri.lp : Ri.sp, i) : n ? '<circle cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle cx="18" cy="17" r="12" fill="#FFE100"/>') + Ba(n ? kn.lp : kn.sp, t ? "wxCloudLight" : "wxBright") + (t ? n ? ot(73.33, 16.67, 4.17, 0.9) : ot(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? Ba(n ? kn.lc : kn.s, t ? "wxCloudLight" : "wxBright") + (t ? n ? ot(15, 15, 3.75, 0.8) + ot(76.67, 13.33, 2.92, 0.6) : ot(9, 9, 2.25, 0.8) + ot(46, 8, 1.75, 0.6) : "") : Ba(n ? kn.lr : kn.s, "wxCloudLight") + (e === "rain" ? Ps(n) : Hs(n));
  }
  const _s = () => {
    var e;
    return ((e = Ie == null ? void 0 : Ie["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let Ai = J().weatherStyle || "bitmap";
  function Ni(e, t, n, i = Ai) {
    let o = Bs(e);
    const r = o === "night" || !!n && _s();
    o === "night" && (o = "clear");
    const s = t ? 90 : 54;
    return i !== "smooth" ? '<span class="wxIcon pixels' + (t ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + Xs(e, r) + '" data-wx-style="' + i + '" data-wx-size="' + s + '"></canvas></span>' : '<span class="wxIcon ' + o + (r ? " night" : "") + (t ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + s + " " + s + '">' + Ds(o, r, t, "wxg" + ++Is) + "</svg></span>";
  }
  function qs() {
    const e = a("app"), t = getComputedStyle(e), n = (p) => t.getPropertyValue(p).trim(), i = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([p, w]) => {
      n(w) && (i[p] = n(w));
    });
    const o = n("--color-text-primary") || "#f1f1f1", r = n("--color-bg-card") || "#222222", s = e.classList.contains("light");
    return { colors: i, ink: s ? o : r, paper: s ? r : o };
  }
  function Bi(e) {
    const t = e.querySelectorAll("canvas[data-wx]");
    if (!t.length) return;
    const n = qs();
    t.forEach((i) => {
      var r;
      const o = al($s(i.dataset.wx, n.colors), { size: Number(i.dataset.wxSize) || 54, px: 2, oneBit: i.dataset.wxStyle === "onebit", colors: n.colors, ink: n.ink, paper: n.paper });
      i.width = o.w, i.height = o.h, (r = i.getContext("2d")) == null || r.putImageData(new ImageData(o.data, o.w, o.h), 0, 0);
    });
  }
  let Ia = [], Ii, Fi = null, Fa = !1;
  function zs(e) {
    return Object.values(e).filter((t) => t.entity_id.startsWith("weather.")).sort((t, n) => (t.attributes.friendly_name || t.entity_id).localeCompare(n.attributes.friendly_name || n.entity_id));
  }
  function tr(e) {
    const t = a("weatherEntity");
    if (!t || t.matches(":focus")) return;
    const n = zs(e);
    t.innerHTML = '<option value="">Not connected</option>' + n.map((o) => '<option value="' + V(o.entity_id) + '">' + V(o.attributes.friendly_name || o.entity_id) + "</option>").join(""), t.value = Be.weather || "";
    const i = Be.weather && e[Be.weather];
    a("weatherStatus").textContent = i ? "Connected · " + (i.attributes.friendly_name || i.entity_id) : a("weatherStatus").dataset.empty;
  }
  function nr() {
    const e = Be.weather || null;
    if (e === Ii) return;
    Ii = e, Ia = [], Fa = !1;
    const t = Fi;
    if (Fi = null, t == null || t.then((n) => typeof n == "function" && n()).catch(() => {
    }), !e || !g.subscribe) {
      Yt();
      return;
    }
    Fi = g.subscribe({ type: "weather/subscribe_forecast", forecast_type: "daily", entity_id: e }, (n) => {
      Ii === e && (Ia = Array.isArray(n == null ? void 0 : n.forecast) ? n.forecast : [], Yt());
    }), Fi.catch(() => {
      Ii === e && (Fa = !0, Yt());
    }), Yt();
  }
  a("weatherEntity").addEventListener("change", () => {
    Be.weather = a("weatherEntity").value || null, Je("entities", { ...Be }), Ie && tr(Ie), nr();
  });
  function Yt() {
    const e = a("weatherCard");
    if (!e) return;
    const t = Be.weather, n = t && (Ie == null ? void 0 : Ie[t]);
    if (!n) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Ni("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (t ? "Not available" : "Set up in Settings") + "</div></div></div></div>", Bi(e);
      return;
    }
    const i = n.attributes || {}, o = i.temperature_unit || "°", r = (Z) => Number.isFinite(Number(Z)) ? Math.round(Number(Z)) + "°" : "—", s = (i.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", p = Ns[n.state] || (n.state ? n.state.charAt(0).toUpperCase() + n.state.slice(1) : "—"), w = Re(/* @__PURE__ */ new Date()), y = Ia.slice(0, 7), v = y.find((Z) => Re(new Date(Z.datetime)) === w) || null, x = y.filter((Z) => Re(new Date(Z.datetime)) >= w).slice(0, 6), E = /* @__PURE__ */ new Date(), j = Re(new Date(E.getFullYear(), E.getMonth(), E.getDate() + 1)), S = v ? "H " + r(v.temperature) + "&ensp; L " + r(v.templow) : "", k = (Z) => {
      const A = Re(new Date(Z.datetime));
      return A === w ? "Today" : A === j ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(Z.datetime));
    }, C = Number.isFinite(Number(i.temperature)) ? Math.round(Number(i.temperature)) : "—", $ = (Z, A, X) => '<div class="activityRow">' + Z + '<div><div class="activityRowName">' + V(A) + '</div><div class="activityRowMeta">' + X + "</div></div></div>";
    e.innerHTML = '<div class="wxWide"><div class="wxNow"><div class="wxCurrent">' + Ni(n.state, !0, !0) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + V(String(C)) + '</span><span class="wxUnit">' + V(o) + '</span></div><div class="wxPlace">' + V(s) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + V(p) + "</div>" + (S ? '<div class="wxRange">' + S + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal")
    (x.length ? '<div class="activityRows wxDays">' + x.map((Z) => $(Ni(Z.condition), k(Z), r(Z.temperature) + " / " + r(Z.templow))).join("") + "</div>" : '<div class="wxNoDays">' + (Fa ? "This weather service has no daily forecast" : "Loading the forecast…") + "</div>") + "</div>", Bi(e);
  }
  Yt();
  const Pi = a("wxStyleChoice");
  function Os() {
    Pi.querySelectorAll(".wxStyleBtn").forEach((e) => {
      e.setAttribute("aria-pressed", String(e.dataset.wxStyle === Ai)), e.querySelector(".wxStylePreview").innerHTML = ["sunny", "partlycloudy", "rainy", "clear-night"].map((t) => Ni(t, !1, !1, e.dataset.wxStyle)).join("");
    }), Bi(Pi);
  }
  Pi.querySelectorAll(".wxStyleBtn").forEach((e) => e.addEventListener("click", () => {
    Ai = e.dataset.wxStyle, Je("weatherStyle", Ai), Pi.querySelectorAll(".wxStyleBtn").forEach((t) => t.setAttribute("aria-pressed", String(t === e))), Yt();
  })), Os();
  const ir = a("tvNav");
  g.fullscreenSupported || (ir.hidden = !0), ir.addEventListener("click", () => g.toggleFullscreen()), c.addEventListener("keydown", (e) => {
    !Ve.workout.classList.contains("active") || Gn.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), va.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), a("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), a("restartSegment").click()));
  }), c.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const t = Math.max(1, Math.min(10, (Number(u.value) || 1) + Number(e.dataset.roundsStep)));
    String(t) !== u.value && (u.value = t, u.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [ie, W, h, u].forEach((e) => e.addEventListener("input", () => {
    const t = q[U];
    t && (t.total = Number(ie.value), t.work = Number(W.value), t.rest = Number(h.value)), le();
  })), Ht.addEventListener("click", wa), Ct.addEventListener("click", () => st("settings")), a("settingsBack").addEventListener("click", wa), va.addEventListener("click", () => wt(!lt)), Qe(U), vi(), qn(), yt(), a("healthHelpOpen").addEventListener("click", () => c.querySelector(".tab[data-pane=helpPane]").click()), Xn(a("resetStats"), a("resetStatsFill"), 1500, () => {
    Y.history = [], Y.checkins = [], _n = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Ke(), jt(), qn(), vi(), yt(), zt(), me("Stats reset");
  });
  const Pa = a("morningTime"), Ha = a("eveningTime"), Da = a("checkinAutoOpen");
  Pa.value = Mt().morning, Ha.value = Mt().evening, Da.classList.toggle("on", J().checkinAutoOpen !== !1), [["morningTime", Pa], ["eveningTime", Ha]].forEach(([e, t]) => t.addEventListener("change", () => {
    t.value && (Je(e, t.value), zt());
  })), Da.addEventListener("click", () => {
    const e = J().checkinAutoOpen === !1;
    Da.classList.toggle("on", e), Je("checkinAutoOpen", e);
  }), setTimeout(ra, 800);
  const ar = a("checkinNotify"), Hi = a("checkinNotifyTarget"), or = a("checkinNotifyStatus"), Vs = or.textContent;
  function rr() {
    const e = g.notifyServices(), t = e.filter((o) => o.startsWith("mobile_app_")), n = t.length ? t : e, i = (o) => o.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Hi.innerHTML = n.map((o) => '<option value="' + V(o) + '">' + V(i(o)) + "</option>").join(""), !J().notifyTarget && n[0] && (J().notifyTarget = n[0]), Hi.value = J().notifyTarget || "";
  }
  function Di() {
    const e = !!J().notifyOn;
    ar.classList.toggle("on", e), a("checkinNotifyTargetRow").hidden = !e;
    const t = Mt();
    or.textContent = e ? "Sends at " + t.morning + " and " + t.evening : Vs;
  }
  async function _a() {
    const e = !!J().notifyOn;
    try {
      return await g.setReminderAutomation(e ? { target: J().notifyTarget, times: Mt() } : null), !0;
    } catch {
      return me("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  ar.addEventListener("click", async () => {
    const e = !J().notifyOn;
    if (e && (rr(), !J().notifyTarget)) {
      me("Install the Companion app on your phone first");
      return;
    }
    J().notifyOn = e, Di(), await _a() ? (Ke(), me(e ? "Check-in notifications on" : "Check-in notifications off")) : (J().notifyOn = !e, Di());
  }), Hi.addEventListener("change", () => {
    Je("notifyTarget", Hi.value), J().notifyOn && _a();
  }), [Pa, Ha].forEach((e) => e.addEventListener("change", () => {
    Di(), J().notifyOn && _a();
  })), rr(), Di();
  let qa = null;
  function Gs() {
    qa || (qa = setTimeout(() => {
      qa = null, yt();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var n, i;
      const t = !Ie || Ie[Be.weather] !== e[Be.weather] || ((n = Ie["sun.sun"]) == null ? void 0 : n.state) !== ((i = e["sun.sun"]) == null ? void 0 : i.state);
      Ie = e, Ko(e), tr(e), Xo(e), nr(), t && Yt(), Date.now() - Jo > 60 * 60 * 1e3 && $o(), Gs();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (Y.history = e.history, jt()), Array.isArray(e.history) && yt(), Array.isArray(e.checkins) && (Y.checkins = e.checkins.map(Ln), zt(), vi(), qn(), jt(), yt()), e.profiles && !We.classList.contains("open") && !ut)) {
        const t = ei(e);
        Object.keys(q).forEach((n) => delete q[n]), Object.assign(q, t.profiles), Y.order = t.order, q[U] || (U = Y.order[0]), Ya(), Qe(U);
      }
    },
    suspend() {
      F = !1;
    },
    resume() {
      F || (F = !0, sn || (sn = requestAnimationFrame(ki)), dn || (dn = requestAnimationFrame(Si)), Jn(c.querySelector(".tab.active"), !1));
    }
  };
}
const xr = "move-assistant-density", wr = {
  get(c) {
    try {
      return localStorage.getItem(c);
    } catch {
      return null;
    }
  },
  set(c, g) {
    try {
      localStorage.setItem(c, g);
    } catch {
    }
  }
}, ce = (c) => String(c ?? "").replace(/[&<>"']/g, (g) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[g]), rl = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', sl = ["power", "energy", "voltage", "current", "gas", "water", "monetary", "apparent_power", "reactive_power", "power_factor", "battery", "energy_storage"], ll = ["temperature", "humidity", "pressure", "atmospheric_pressure", "illuminance", "carbon_dioxide", "pm25", "pm10", "volatile_organic_compounds", "moisture", "wind_speed", "precipitation"], yr = {
  lights: { title: "Lights" },
  energy: { title: "Energy", icon: "mdi:lightning-bolt" },
  climate: { title: "Climate", icon: "mdi:thermometer" },
  readings: { title: "Readings", icon: "mdi:gauge" }
};
function dl(c, { config: g, getHass: a }) {
  const N = (d) => c.getElementById(d), B = N("app"), F = g || {}, re = String(F.layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let fe = wr.get(xr) === "1", z = {};
  const ne = (d) => {
    var l;
    return (l = a()) == null ? void 0 : l.callWS(d);
  }, ze = (d, l, m) => ne({ type: "call_service", domain: d, service: l, service_data: m }), it = c.querySelector("#appearancePane .toggleList");
  it && !N("densityToggle") && (it.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), N("densityToggle").addEventListener("click", () => {
    fe = !fe, wr.set(xr, fe ? "1" : "0"), gt();
  }));
  const G = document.createElement("div");
  G.className = "densityBadge", G.setAttribute("aria-live", "polite"), G.hidden = !0, B.appendChild(G);
  let oe = 0;
  function De() {
    if (!fe) return;
    const d = N("homeView"), l = (R) => R.offsetParent !== null && !R.closest("[hidden]");
    d.querySelectorAll(":scope .card, :scope .tfAction").forEach((R) => {
      l(R) && (R.dataset.h = Math.round(R.getBoundingClientRect().height) + " px");
    });
    const m = [...d.querySelectorAll(".activityRow, .tfAction, .tfHalf, .wxNow")].filter(l), u = window.innerHeight, b = m.filter((R) => {
      const O = R.getBoundingClientRect();
      return O.height > 0 && O.top >= 0 && O.bottom <= u + 0.5;
    }).length;
    G.hidden = !d.classList.contains("active"), G.innerHTML = "<b>" + b + "</b><small>of " + m.length + " readings on screen</small>";
  }
  const kt = () => {
    fe && requestAnimationFrame(De);
  };
  function gt() {
    var d;
    B.classList.toggle("showDensity", fe), (d = N("densityToggle")) == null || d.classList.toggle("on", fe), G.hidden = !fe, clearInterval(oe), fe && (oe = setInterval(De, 1e3), De());
  }
  window.addEventListener("scroll", kt, { capture: !0, passive: !0 }), window.addEventListener("resize", kt, { passive: !0 });
  const be = c.querySelector("#homeView .grid"), St = c.querySelector("#homeView .feelSection");
  let Oe = [], we = null;
  const dt = /* @__PURE__ */ new Map(), Fe = /* @__PURE__ */ new Map();
  function te() {
    if (Array.isArray(F.test_focus) && F.test_focus.length)
      return F.test_focus.map((l) => ({ type: l.type || "readings", title: l.title, icon: l.icon, entities: (l.entities || []).map((m) => typeof m == "string" ? { entity: m } : m).filter((m, u, b) => b.findIndex((R) => R.entity === m.entity) === u) }));
    const d = { lights: [], energy: [], climate: [], readings: [] };
    return (F.entities || []).map((l) => typeof l == "string" ? { entity: l } : l).forEach((l) => {
      var b, R;
      const m = String(l.entity).split(".")[0], u = (R = (b = z[l.entity]) == null ? void 0 : b.attributes) == null ? void 0 : R.device_class;
      if (m === "light") d.lights.push(l);
      else {
        if (m === "weather") return;
        sl.includes(u) ? d.energy.push(l) : ll.includes(u) ? d.climate.push(l) : d.readings.push(l);
      }
    }), Object.entries(d).filter(([, l]) => l.length).map(([l, m]) => ({ type: l === "lights" ? "lights" : "readings", title: yr[l].title, icon: yr[l].icon, entities: m }));
  }
  const he = (d) => {
    var l, m;
    return d.name || ((m = (l = z[d.entity]) == null ? void 0 : l.attributes) == null ? void 0 : m.friendly_name) || d.entity;
  }, $e = (d) => (d == null ? void 0 : d.state) === "on" ? d.attributes.brightness != null ? Math.max(1, Math.round(d.attributes.brightness / 2.55)) : 100 : 0, Kt = (d) => {
    var m, u;
    const l = (m = d == null ? void 0 : d.attributes) == null ? void 0 : m.supported_color_modes;
    return Array.isArray(l) ? l.some((b) => b !== "onoff") : ((u = d == null ? void 0 : d.attributes) == null ? void 0 : u.brightness) != null;
  };
  function Ve(d) {
    const l = z[d.entity];
    if (!l) return "Not found";
    if (l.state === "unavailable") return "Unavailable";
    if (l.entity_id.startsWith("light.")) {
      if (l.state !== "on") return "Off";
      const b = l.attributes.color_temp_kelvin;
      return (Kt(l) ? $e(l) + "%" : "On") + (l.attributes.color_mode === "color_temp" && b ? " · " + Number(b).toLocaleString() + "k" : "");
    }
    const m = a();
    if (m != null && m.formatEntityState)
      try {
        return m.formatEntityState(l);
      } catch {
      }
    const u = Number(l.state);
    if (l.state !== "" && Number.isFinite(u)) {
      const b = Math.abs(u) >= 100 ? 0 : Math.abs(u) >= 10 ? 1 : 2;
      return u.toLocaleString(void 0, { maximumFractionDigits: b }) + (l.attributes.unit_of_measurement ? " " + l.attributes.unit_of_measurement : "");
    }
    return l.state.charAt(0).toUpperCase() + l.state.slice(1);
  }
  function Ht(d) {
    const l = a();
    d.querySelectorAll("[data-icon-for]").forEach((m) => {
      var R;
      const u = z[m.dataset.iconFor], b = m.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && u && !b) {
        let O = m.firstElementChild;
        (!O || O.localName !== "ha-state-icon") && (m.textContent = "", O = document.createElement("ha-state-icon"), m.appendChild(O)), O.hass = l, O.stateObj = u;
      } else if (customElements.get("ha-icon")) {
        let O = m.firstElementChild;
        (!O || O.localName !== "ha-icon") && (m.textContent = "", O = document.createElement("ha-icon"), m.appendChild(O)), O.icon = b || ((R = u == null ? void 0 : u.attributes) == null ? void 0 : R.icon) || "mdi:circle-medium";
      } else m.textContent || (m.textContent = (he({ entity: m.dataset.iconFor }) || "?").trim().charAt(0).toUpperCase());
    });
  }
  function Ct(d, l) {
    return '<div class="activityRow tap" role="button" tabindex="0" data-open="' + l + "|" + ce(d.entity) + '" aria-label="' + ce(he(d)) + ", " + ce(Ve(d)) + '. Show the last 24 hours"><div class="tfIcon" aria-hidden="true" data-icon-for="' + ce(d.entity) + '"' + (d.icon ? ' data-icon-name="' + ce(d.icon) + '"' : "") + '></div><div><div class="activityRowName">' + ce(he(d)) + '</div><div class="activityRowMeta">' + ce(Ve(d)) + "</div></div></div>";
  }
  function st(d) {
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true" data-icon-for="' + ce(d.entity) + '"' + (d.icon ? ' data-icon-name="' + ce(d.icon) + '"' : "") + '></div><div><div class="activityRowName">' + ce(he(d)) + '</div><div class="activityRowMeta">' + ce(Ve(d)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + ce(he(d)) + '’s last 24 hours">' + rl + '</button></div><svg class="tfGraph" data-graph="' + ce(d.entity) + '" role="img" aria-label="' + ce(he(d)) + ', last 24 hours"></svg></div>';
  }
  function ie(d) {
    const l = z[d.entity], m = Fe.has(d.entity) ? Fe.get(d.entity) : $e(l), u = (l == null ? void 0 : l.state) === "on";
    return '<div class="tfAction' + (u ? " on" : "") + '" data-light="' + ce(d.entity) + '"><div class="tfActionHead"><button class="tfIcon" type="button" data-toggle-light="' + ce(d.entity) + '" aria-label="Turn ' + ce(he(d)) + (u ? " off" : " on") + '" data-icon-for="' + ce(d.entity) + '"' + (d.icon ? ' data-icon-name="' + ce(d.icon) + '"' : "") + '></button><div><div class="activityRowName">' + ce(he(d)) + '</div><div class="activityRowMeta">' + ce(Fe.has(d.entity) ? m + "%" : Ve(d)) + '</div></div></div><div class="tfBar" role="slider" tabindex="0" aria-label="' + ce(he(d)) + ' brightness" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + m + '" data-bar="' + ce(d.entity) + '"><i style="width:' + m + '%"></i></div></div>';
  }
  function W() {
    if (!re || !be) return;
    if (be.querySelectorAll("[data-tf]").forEach((u) => u.remove()), Oe = te(), !Oe.length) {
      be.insertBefore(Object.assign(document.createElement("div"), { className: "sectionLabel rowLabel tfLabel", textContent: "Test focus: add entities to this card’s YAML" }), St), be.lastElementChild.dataset.tf = "";
      return;
    }
    const d = (u, b, R) => '<div class="tfBlock' + (" " + R) + '"><div class="sectionLabel tfGroupLabel">' + ce(u) + "</div>" + b + "</div>", l = Oe.map((u, b) => {
      var Ee;
      if (u.type === "lights") return d(u.title || "Lights", '<div class="tfLights" role="group" aria-label="' + ce(u.title || "Lights") + '">' + u.entities.map(ie).join("") + "</div>", "tfLightsBlock");
      const O = we && we.gi === b && u.entities.find((ke) => ke.entity === we.entity);
      return '<section class="card tfCard' + (O ? " open" : "") + '"' + (O && we.h ? ' style="min-height:' + we.h + 'px"' : "") + ' aria-label="' + ce(u.title || "Readings") + '"><div class="activityHeader"><div class="activityIcon tfHeadIcon" aria-hidden="true" data-icon-for="' + ce((Ee = u.entities[0]) == null ? void 0 : Ee.entity) + '"' + (u.icon ? ' data-icon-name="' + ce(u.icon) + '"' : "") + '></div><div class="activityTitle">' + ce(u.title || "Readings") + "</div></div>" + (O ? st(O) : '<div class="activityRows">' + u.entities.map((ke) => Ct(ke, b)).join("") + "</div>") + "</section>";
    }).join(""), m = document.createElement("div");
    m.innerHTML = l, [...m.children].forEach((u) => {
      u.dataset.tf = "", be.insertBefore(u, St);
    }), Ht(be), we && P(we.entity), requestAnimationFrame(De);
  }
  function h() {
    if (!(!re || !be)) {
      if (!be.querySelector("[data-tf]") || Oe.length !== te().length) {
        W();
        return;
      }
      if (Oe.forEach((d, l) => d.entities.forEach((m) => {
        const u = Ve(m);
        be.querySelectorAll('[data-open="' + l + "|" + CSS.escape(m.entity) + '"] .activityRowMeta, .tfHalf [data-icon-for="' + CSS.escape(m.entity) + '"] + div .activityRowMeta').forEach((R) => {
          R.textContent = u;
        });
        const b = be.querySelector('[data-light="' + CSS.escape(m.entity) + '"]');
        if (b && !Fe.has(m.entity)) {
          const R = z[m.entity], O = $e(R);
          b.classList.toggle("on", (R == null ? void 0 : R.state) === "on"), b.querySelector(".activityRowMeta").textContent = u, b.querySelector(".tfBar i").style.width = O + "%", b.querySelector(".tfBar").setAttribute("aria-valuenow", String(O)), b.querySelector("[data-toggle-light]").setAttribute("aria-label", "Turn " + he(m) + ((R == null ? void 0 : R.state) === "on" ? " off" : " on"));
        }
      })), we) {
        const d = be.querySelector(".tfOpen .activityRowMeta"), l = Oe[we.gi], m = l == null ? void 0 : l.entities.find((u) => u.entity === we.entity);
        d && m && (d.textContent = Ve(m));
      }
      Ht(be);
    }
  }
  async function P(d) {
    var J, Qe;
    let l = dt.get(d);
    if (!l || Date.now() - l.at > 5 * 60 * 1e3) {
      try {
        const Ne = new Date(Date.now() - 864e5).toISOString(), Dt = await ne({ type: "history/history_during_period", start_time: Ne, entity_ids: [d], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), ti = ((Dt == null ? void 0 : Dt[d]) || []).map((Q) => [Q.lu != null ? Q.lu * 1e3 : Date.parse(Q.last_updated || Q.last_changed), Number(Q.s ?? Q.state)]).filter(([Q, ht]) => Number.isFinite(Q) && Number.isFinite(ht));
        l = { at: Date.now(), points: ti };
      } catch {
        l = { at: Date.now(), points: [] };
      }
      dt.set(d, l);
    }
    const m = be.querySelector('[data-graph="' + CSS.escape(d) + '"]');
    if (!m) return;
    const u = z[d], b = ((J = u == null ? void 0 : u.attributes) == null ? void 0 : J.unit_of_measurement) || "", R = l.points.slice(), O = Number(u == null ? void 0 : u.state);
    if (Number.isFinite(O) && R.push([Date.now(), O]), R.length < 2) {
      m.setAttribute("aria-label", he({ entity: d }) + ": no history for the last 24 hours"), m.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const Ee = R.map((Ne) => Ne[1]), ke = Math.min(...Ee), se = Math.max(...Ee), ye = (Ne) => Ne.toLocaleString(void 0, { maximumFractionDigits: Math.abs(Ne) >= 100 ? 0 : 1 }), Zt = ((Qe = u == null ? void 0 : u.attributes) == null ? void 0 : Qe.state_class) === "total_increasing";
    m.setAttribute("aria-label", he({ entity: d }) + ", last 24 hours: " + (Zt ? "+" + ye(Ee[Ee.length - 1] - Ee[0]) : ke === se ? ye(ke) : ye(ke) + " to " + ye(se)) + (b ? " " + b : ""));
    const Pe = Math.max(120, m.clientWidth || 260), Xt = Math.max(80, m.clientHeight || 130), Y = 8, q = Xt - 20, U = Date.now() - 24 * 3600 * 1e3, ei = 24 * 3600 * 1e3, Mn = (Ne) => Math.max(0, Math.min(Pe, (Ne - U) / ei * Pe)), Ln = (Ne) => se === ke ? (Y + q) / 2 : q - (Ne - ke) / (se - ke) * (q - Y);
    let Ke = "M" + Mn(R[0][0]).toFixed(1) + " " + Ln(R[0][1]).toFixed(1);
    for (let Ne = 1; Ne < R.length; Ne++) Ke += "H" + Mn(R[Ne][0]).toFixed(1) + "V" + Ln(R[Ne][1]).toFixed(1);
    m.setAttribute("viewBox", "0 0 " + Pe + " " + Xt), m.innerHTML = '<path d="' + Ke + "V" + q + "H" + Mn(R[0][0]).toFixed(1) + 'Z" fill="var(--primary)" fill-opacity=".14"/><path d="' + Ke + '" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (Xt - 4) + '">24 h ago</text><text x="' + Pe + '" y="' + (Xt - 4) + '" text-anchor="end">Now</text>';
  }
  function T(d) {
    var b;
    const [l, m] = d.dataset.open.split("|"), u = d.closest(".tfCard");
    we = { gi: Number(l), entity: m, h: u ? Math.round(u.getBoundingClientRect().height) : 0 }, W(), (b = be.querySelector(".tfOpen [data-close]")) == null || b.focus();
  }
  be && re && (be.addEventListener("click", (d) => {
    var m;
    const l = d.target.closest("[data-open],[data-close],[data-toggle-light]");
    if (!(!l || !be.contains(l)))
      if (l.dataset.open) T(l);
      else if (l.hasAttribute("data-close")) {
        const u = we == null ? void 0 : we.gi, b = we == null ? void 0 : we.entity;
        we = null, W(), (m = be.querySelector('[data-open="' + u + "|" + CSS.escape(b || "") + '"]')) == null || m.focus();
      } else l.dataset.toggleLight && ze("light", "toggle", { entity_id: l.dataset.toggleLight });
  }), be.addEventListener("keydown", (d) => {
    var m, u;
    const l = d.target;
    if ((m = l.dataset) != null && m.open && (d.key === "Enter" || d.key === " ") && (d.preventDefault(), T(l)), (u = l.dataset) != null && u.bar && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(d.key)) {
      d.preventDefault();
      const b = z[l.dataset.bar], R = $e(b), O = d.key === "Home" ? 0 : d.key === "End" ? 100 : Math.max(0, Math.min(100, R + (d.key === "ArrowLeft" || d.key === "ArrowDown" ? -10 : 10)));
      L(l.dataset.bar, O);
    }
  }), be.addEventListener("pointerdown", (d) => {
    var ke;
    const l = d.target.closest("[data-bar]");
    if (!l) return;
    const m = l.dataset.bar, u = z[m];
    if (!Kt(u)) {
      ze("light", "toggle", { entity_id: m });
      return;
    }
    d.preventDefault(), (ke = l.setPointerCapture) == null || ke.call(l, d.pointerId);
    const b = (se) => {
      const ye = l.getBoundingClientRect();
      return Math.round(Math.max(0, Math.min(1, (se.clientX - ye.left) / ye.width)) * 100);
    }, R = (se) => {
      Fe.set(m, se), l.querySelector("i").style.width = se + "%", l.setAttribute("aria-valuenow", String(se)), l.closest(".tfAction").querySelector(".activityRowMeta").textContent = se ? se + "%" : "Off";
    };
    R(b(d));
    const O = (se) => R(b(se)), Ee = () => {
      l.removeEventListener("pointermove", O), l.removeEventListener("pointerup", Ee), l.removeEventListener("pointercancel", Ee);
      const se = Fe.get(m);
      L(m, se);
    };
    l.addEventListener("pointermove", O), l.addEventListener("pointerup", Ee), l.addEventListener("pointercancel", Ee);
  }));
  function L(d, l) {
    var u;
    Fe.set(d, l);
    const m = () => setTimeout(() => {
      Fe.delete(d), h();
    }, 1500);
    (u = l > 0 ? ze("light", "turn_on", { entity_id: d, brightness_pct: l }) : ze("light", "turn_off", { entity_id: d })) == null || u.then(m, m);
  }
  return gt(), {
    update(d) {
      const l = !Object.keys(z).length;
      z = d || {}, l ? W() : h();
    }
  };
}
const cl = "0.40.0", Oa = "move_assistant", pl = "move_assistant", kr = "move_assistant_checkin_reminder";
function ul() {
  if (document.getElementById("move-assistant-inter")) return;
  const c = document.createElement("link");
  c.id = "move-assistant-inter", c.rel = "stylesheet", c.href = "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(c);
}
class ml extends HTMLElement {
  setConfig(g) {
    this._config = g || {};
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
  set hass(g) {
    var N;
    const a = !this._hass;
    if (this._hass = g, a) {
      this._init();
      return;
    }
    this._app && g.states !== this._lastStates && (this._lastStates = g.states, this._app.updateStates(g.states), (N = this._test) == null || N.update(g.states));
  }
  connectedCallback() {
    var g;
    (g = this._app) == null || g.resume();
  }
  disconnectedCallback() {
    var g;
    (g = this._app) == null || g.suspend();
  }
  async _init() {
    ul();
    const g = this.shadowRoot || this.attachShadow({ mode: "open" });
    g.innerHTML = `<style>${Ys}${Us}</style>${Ks}`;
    const a = g.getElementById("app");
    a.style.opacity = "0";
    let N = null;
    try {
      const B = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Oa
      });
      N = (B == null ? void 0 : B.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(N), this._app = ol(g, {
      data: N,
      save: (B) => this._save(B),
      fire: (B, F) => this._fire(B, F),
      ws: (B) => this._hass.callWS(B),
      subscribe: (B, F) => {
        var re, fe;
        return (fe = (re = this._hass) == null ? void 0 : re.connection) != null && fe.subscribeMessage ? this._hass.connection.subscribeMessage(F, B) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var B, F;
        return Object.keys(((F = (B = this._hass) == null ? void 0 : B.services) == null ? void 0 : F.notify) || {}).sort();
      },
      setReminderAutomation: (B) => this._setReminderAutomation(B),
      setLight: (B) => this.classList.toggle("lightBody", B),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = dl(g, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || this._app.suspend(), a.style.transition = "opacity .2s ease", a.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var a;
    const g = (a = this._hass) == null ? void 0 : a.connection;
    g != null && g.subscribeMessage && g.subscribeMessage(
      (N) => {
        var F;
        const B = JSON.stringify((N == null ? void 0 : N.value) ?? null);
        B === this._lastSaved || B === this._pendingJson || (this._lastSaved = B, (F = this._app) == null || F.applyRemoteData(N.value));
      },
      { type: "frontend/subscribe_user_data", key: Oa }
    ).catch(() => {
    });
  }
  _save(g) {
    this._pendingJson = JSON.stringify(g), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const a = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Oa,
          value: JSON.parse(a)
        }), this._lastSaved = a;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(g, a = {}) {
    var N, B;
    ((N = this._config) == null ? void 0 : N.events) !== !1 && ((B = this._hass) == null || B.callWS({
      type: "fire_event",
      event_type: pl,
      event_data: { action: g, ...a }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(g) {
    const a = `config/automation/config/${kr}`;
    if (!g) {
      try {
        await this._hass.callApi("DELETE", a);
      } catch (F) {
        if ((F == null ? void 0 : F.status_code) !== 404 && (F == null ? void 0 : F.status) !== 404) throw F;
      }
      return;
    }
    const N = (F) => `${F}:00`, B = window.location.pathname;
    await this._hass.callApi("POST", a, {
      id: kr,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: N(g.times.morning), id: "morning" },
        { trigger: "time", at: N(g.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${g.target}`,
          data: {
            title: "Move Assistant",
            message: "{{ 'Morning' if trigger.id == 'morning' else 'Evening' }} check-in is ready",
            data: { url: B, clickAction: B }
          }
        }
      ]
    });
  }
  _toggleFullscreen() {
    const g = document;
    if (g.fullscreenElement || g.webkitFullscreenElement) {
      (g.exitFullscreen || g.webkitExitFullscreen).call(g);
      return;
    }
    const a = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(a.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(g) {
    var N;
    const a = (N = this.shadowRoot) == null ? void 0 : N.getElementById("toast");
    a && (a.textContent = g, a.classList.add("show"), setTimeout(() => a.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", ml), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${cl} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
