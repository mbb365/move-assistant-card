const sp = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#fbf9f6;--color-text-on-selected:#26221e;--color-bg-segment-selected:#fbf9f6;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', lp = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;align-items:start}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDac{grid-column:span 2;min-width:0}.tfDac>dual-controller-v3{display:block}.tfMoreActions .tfDac{grid-column:auto}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);font:400 24px/1 var(--font);cursor:pointer}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px;height:38px;padding:3px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:9px 4px 4px 9px}.tfBlocks>span:nth-child(4){border-radius:4px 9px 9px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 12px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:38px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:3px;bottom:3px;left:3px;border-radius:9px;background:var(--primary)}.tfTilt span{position:relative;padding:0 15px;color:var(--text);font:600 12px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns{display:flex;gap:12px}.tfCoverBtns button{flex:1;display:grid;place-items:center;height:38px;min-width:0;min-height:0;padding:0;border:0;border-radius:12px;background:var(--tile);color:var(--text);cursor:pointer}.tfCoverBtns button:disabled{opacity:.38;cursor:default}.tfCoverBtns svg{display:block;width:22px;height:22px}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}.tfMore .tfCoverBtns{gap:8px}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMore{width:640px}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px)}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px;align-items:start}.tfMoreActions .tfAction{grid-column:auto}.tfMore.wide .tfMoreTiles{grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));padding:var(--inset);border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}@media (max-width:620px){.tfMore.wide{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}.tfDashTiles>.tfAction{justify-content:space-between}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%}#app.tfBoard .tfDashTiles>.tfAction{padding-block:18px}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}', dp = '.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:clamp(8px,calc(5.6cqw * var(--wb-k,1)),14px);aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:clamp(12px,calc(7.9cqw * var(--wb-k,1)),20px);border-radius:clamp(22px,calc(11.1cqw * var(--wb-k,1)),28px);overflow:hidden}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbHead{gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px)}.wbSquare .wbChip{width:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);height:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);border-radius:clamp(12px,calc(6.3cqw * var(--wb-k,1)),16px);--wb-icon:clamp(18px,calc(9.5cqw * var(--wb-k,1)),24px)}.wbSquare .wbName{font-size:clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px);line-height:1.4}.wbSquare .wbSub{font-size:clamp(13px,calc(6.3cqw * var(--wb-k,1)),16px)}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:clamp(6px,calc(4cqw * var(--wb-k,1)),10px)}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:20px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 480px){.wbCard.wbWeather{gap:16px;padding:var(--inset)}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbStripScroll{min-height:150px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}@container wb-card (width < 220px){.wbMoonCaption{display:none}}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}', cp = `<main id="app"><div class="shell">
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
`, _o = {
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
}, jn = (a) => a < 0 ? 0 : a > 1 ? 1 : a, Ed = (a, l, i) => a + (l - a) * i, Wl = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((p) => p + p).join("") : l;
  return [0, 2, 4].map((p) => parseInt(i.slice(p, p + 2), 16) || 0);
}, pp = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), _d = {}, Vt = (a, l, i) => {
  const p = a + l + i;
  return _d[p] || (_d[p] = pp(Wl(a).map((f, g) => f + (Wl(l)[g] - f) * i)));
}, Dd = {}, Os = (a) => Dd[a] || (Dd[a] = Wl(a)), Cl = (a, l, i, p) => (f) => {
  if (f <= 0) return 0;
  if (f >= 1) return 1;
  let g = 0, x = 1, L = f;
  for (let b = 0; b < 18; b++)
    L = (g + x) / 2, 3 * (1 - L) * (1 - L) * L * a + 3 * (1 - L) * L * L * i + L * L * L < f ? g = L : x = L;
  return 3 * (1 - L) * (1 - L) * L * l + 3 * (1 - L) * L * L * p + L * L * L;
}, up = { std: Cl(0.2, 0, 0, 1), acc: Cl(0.3, 0, 1, 1), dec: Cl(0, 0, 0, 1) };
function Gs(a, l) {
  const i = String(a || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || l ? "night" : "day");
}
function vc(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [Vt(l.clear[0], l.cloudy[0], 0.12), Vt(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Vt(l.rain[0], "#000000", 0.22), Vt(l.rain[1], "#000000", 0.22)], l;
}
const zl = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Vl = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], jl = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Gl(a, l = _o) {
  const i = { ..._o, ...l }, p = vc(i), f = String(a).split("/"), g = p[f[0]] ? f[0] : "clear", x = f[1] === "night", L = p[g][x ? 1 : 0], b = {
    night: x,
    clearness: g === "clear" ? 1 : g === "partly" ? 0.7 : 0.25,
    sky: L,
    skyStops: [L],
    skyT: 0,
    sun: { x: 45, y: x ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: x ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: x ? 1 : 0 },
    stars: zl.map(() => ({ o: 0 })),
    rain: Vl.map(() => ({ o: 0, dy: -16 })),
    snow: jl.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, B = (le) => zl.map(() => ({ o: le }));
  return g === "clear" ? x ? (b.moon.o = 1, b.stars = B(1)) : b.sun.o = 1 : g === "partly" ? (b.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: x ? 1 : 0 }, x ? (b.moon = { x: 34, y: 33, d: 48, o: 1 }, b.stars = B(0.7)) : b.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : g === "cloudy" || g === "fog" ? (b.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: x ? 1 : 0 }, x ? b.moon = { x: 40, y: 36, d: 40, o: 0 } : b.sun = { x: 40, y: 36, r: 20, o: 0 }) : (b.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, x ? b.moon = { x: 38, y: 28, d: 36, o: 0 } : b.sun = { x: 38, y: 28, r: 18, o: 0 }, g === "snow" ? b.snow = jl.map(() => ({ o: 1, dy: 0 })) : b.rain = Vl.map((le, ie) => ({ o: g === "storm" && ie === 1 ? 0 : 1, dy: 0 })), g === "storm" && (b.bolt = { o: 1, dy: 0 })), b;
}
const Rd = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function hp(a, l, i, p = _o, f = !1) {
  const g = { ..._o, ...p }, x = (N, P) => N > 0.01 && P > 0.01 ? "stay" : N > 0.01 ? "leave" : P > 0.01 ? "enter" : "none", L = (N, P, Y, Q) => {
    const U = N[0] + P * Q, G = N[1] - (Y - 1 - P) * Q;
    return up[N[2]](jn((i - U) / Math.max(1e-3, G - U)));
  }, b = (N, P, Y, Q = 0, U = 1, G = 0) => {
    const J = x(N.o, P.o);
    if (J === "none") return { ...P, o: 0 };
    const z = L(Rd[Y][J], Q, U, G), K = {};
    for (const re in P) K[re] = f && J !== "stay" && re !== "o" ? J === "leave" ? N[re] : P[re] : Ed(N[re], P[re], z);
    return K;
  }, B = L(Rd.sky, 0, 1, 0);
  let le, ie;
  if (a.night !== l.night) {
    const N = Math.min(a.clearness, l.clearness), P = Vt(Vt(a.sky, l.sky, 0.5), g.dusk, 0.6 * N);
    le = B < 0.5 ? Vt(a.sky, P, B * 2) : Vt(P, l.sky, B * 2 - 1), ie = N > 0.5 ? [a.sky, g.dusk, l.sky] : [a.sky, l.sky];
  } else
    le = Vt(a.sky, l.sky, B), ie = [a.sky, l.sky];
  return {
    night: i < 0.5 ? a.night : l.night,
    clearness: Ed(a.clearness, l.clearness, i),
    sky: le,
    skyStops: ie,
    skyT: B,
    sun: b(a.sun, l.sun, "body"),
    moon: b(a.moon, l.moon, "body"),
    cloud: b(a.cloud, l.cloud, "cloud"),
    stars: l.stars.map((N, P) => b(a.stars[P], N, "fx", P, l.stars.length, 0.05)),
    rain: l.rain.map((N, P) => b(a.rain[P], N, "fx", P, l.rain.length, 0.05)),
    snow: l.snow.map((N, P) => b(a.snow[P], N, "fx", P, l.snow.length, 0.05)),
    bolt: b(a.bolt, l.bolt, "fx")
  };
}
const fp = [
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
], Vn = (a, l) => (fp[(l & 7) * 8 + (a & 7)] + 0.5) / 64, mp = 0, Kl = 1, $l = 2, Xl = 3, Jl = 4, zn = 5, hr = 6, ni = 7, Ql = 8, Ws = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), gp = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], vp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((a) => [a[0] * 13 / 11, a[1] * 28 / 24]), bc = (a, l, i) => {
  let p = !1;
  for (let f = 0, g = a.length - 1; f < a.length; g = f++) {
    const x = a[f], L = a[g];
    x[1] > i != L[1] > i && l < (L[0] - x[0]) * (i - x[1]) / (L[1] - x[1]) + x[0] && (p = !p);
  }
  return p;
};
function wc(a, { size: l = 90, px: i = 2, oneBit: p = !1, colors: f = _o, ink: g = "#26221e", paper: x = "#fbf9f6", clock: L = 0, idle: b = !1 } = {}) {
  const B = { ..._o, ...f }, le = Math.sin, ie = Math.PI * 2, N = Math.max(6, Math.round(l / i)), P = N / 90, Y = b ? Math.floor(L / 100) * 100 : 0, Q = b ? le(ie * Y / 3600) : 0, U = b ? 1.8 * le(ie * Y / 6400) : 0, G = b ? 0.9 * le(ie * Y / 4100) : 0, J = b ? 0.8 * le(ie * Y / 5200) : 0, z = Y / 3400 % 1, K = b && a.bolt.o > 0.5 && (z < 0.04 || z > 0.08 && z < 0.11), re = new Array(N * N), A = new Uint8Array(N * N), V = (y, T, M, _, de) => {
    M == null || y < 0 || T < 0 || y >= N || T >= N || (_ >= 1 || _ > Vn(y + 5, T + 3)) && (re[T * N + y] = M, A[T * N + y] = de);
  }, ve = (y, T, M, _) => {
    for (let de = Math.max(0, Math.floor(T - M) - 1); de <= Math.min(N - 1, T + M + 1); de++) for (let W = Math.max(0, Math.floor(y - M) - 1); W <= Math.min(N - 1, y + M + 1); W++) _(W, de, W + 0.5 - y, de + 0.5 - T);
  }, Te = a.skyStops || [a.sky], v = a.skyT || 0;
  for (let y = 0; y < N; y++) {
    const T = a.night ? jn(1 - (y + 0.5) / (N * 0.7)) * 0.85 : jn(((y + 0.5) / N - 0.35) / 0.65) * 0.85;
    for (let M = 0; M < N; M++) {
      let _ = Te[0];
      if (Te.length > 1) {
        const de = v * (Te.length - 1), W = Math.min(Te.length - 2, Math.floor(de));
        _ = de - W > Vn(M, y) ? Te[W + 1] : Te[W];
      }
      T > Vn(M + 2, y + 5) && (_ = a.night ? Vt(_, "#000000", 0.28) : Vt(_, "#ffffff", 0.2)), re[y * N + M] = K ? Vt(_, "#ffffff", 0.25) : _;
    }
  }
  if (a.sun.o > 0.01) {
    const y = a.sun.x * P, T = a.sun.y * P, M = Math.max(1, a.sun.r * P);
    if (b) {
      const _ = M * (1.45 + 0.06 * Q), de = Vt(B.sun, "#ffffff", 0.55);
      if (ve(y, T, _, (W, ee, se, ue) => {
        const We = Math.sqrt(se * se + ue * ue);
        We > M && We < _ && V(W, ee, de, 0.26 * (1 - (We - M) / (_ - M)) * a.sun.o, mp);
      }), a.sun.o > 0.5) {
        const W = Math.floor(Y / 500) % 2, ee = Math.max(1, M * 0.22);
        for (let se = 0; se < 8; se++) if (se % 2 === W) for (let ue = M + 1.5; ue < M + 1.5 + ee; ue += 0.7) V(Math.floor(y + Math.cos(se * Math.PI / 4) * ue), Math.floor(T + Math.sin(se * Math.PI / 4) * ue), B.sun, a.sun.o, Ql);
      }
    }
    ve(y, T, M, (_, de, W, ee) => {
      if (W * W + ee * ee > M * M) return;
      const se = ((W * 0.643 + ee * 0.766) / M + 1) / 2;
      V(_, de, jn((se - 0.62) / 0.38) > Vn(_, de) ? B.sunEdge : B.sun, a.sun.o, Kl);
    });
  }
  if (zl.forEach((y, T) => {
    const M = a.stars[T].o;
    if (M < 0.01) return;
    const _ = Math.floor(y[0] * P), de = Math.floor(y[1] * P), W = b ? (Math.floor(Y / 300) + T * 3) % 6 : 0;
    if (W === 5) return;
    const ee = Math.round(y[2] * P * (W === 4 ? 0.3 : W < 2 ? 1 : 0.6));
    V(_, de, B.star, M, ni);
    for (let se = 1; se <= ee; se++) {
      const ue = se === ee && ee > 1 ? Vt(B.star, a.sky, 0.5) : B.star;
      V(_ - se, de, ue, M, ni), V(_ + se, de, ue, M, ni), V(_, de - se, ue, M, ni), V(_, de + se, ue, M, ni);
    }
  }), a.moon.o > 0.01) {
    const y = Math.max(1.5, a.moon.d * P * 0.37), T = a.moon.x * P, M = a.moon.y * P + (b && J > 0.4 ? -1 : 0), _ = T + 0.547 * y, de = M - 0.503 * y, W = 0.82 * y, ee = Vt(B.moon, "#ffffff", 0.6);
    ve(T, M, y, (se, ue, We, Xe) => {
      if (We * We + Xe * Xe > y * y) return;
      const vt = se + 0.5 - _, an = ue + 0.5 - de;
      vt * vt + an * an <= W * W || V(se, ue, jn((Xe + y) / (2 * y) * 1.1 - 0.1) > Vn(se, ue) ? B.moon : ee, a.moon.o, $l);
    });
  }
  const Me = Math.max(2, Math.round(15.65 * P)), Se = Math.max(1, Math.round(5.87 * P * 0.5));
  Vl.forEach((y, T) => {
    const M = a.rain[T];
    let _ = M.dy, de = M.o;
    if (de < 0.01) return;
    if (b) {
      const se = (Y / 950 + T / 3) % 1;
      _ += -5 + se * 14, de *= se < 0.18 ? se / 0.18 : se > 0.72 ? (1 - se) / 0.28 : 1;
    }
    const W = (y[0] + 3 + U) * P, ee = (y[1] + _) * P;
    for (let se = 0; se < Me; se++) for (let ue = 0; ue < Se; ue++) V(Math.floor(W - 0.208 * se) + ue, Math.floor(ee) + se, B.rain, de, Jl);
  });
  const qe = Math.max(0, Math.round(7.34 * P / 2.6));
  if (jl.forEach((y, T) => {
    const M = a.snow[T];
    let _ = M.dy, de = 0, W = M.o;
    if (W < 0.01) return;
    if (b) {
      const ue = (Y / 3200 + T / 5) % 1;
      _ += -6 + ue * 14, de = 1.5 * le(ie * (ue * 1.5 + T / 5)), W *= ue < 0.2 ? ue / 0.2 : ue > 0.75 ? (1 - ue) / 0.25 : 1;
    }
    const ee = Math.floor((y[0] + 3.67 + de + U) * P), se = Math.floor((y[1] + 3.67 + _) * P);
    V(ee, se, B.snow, W, zn);
    for (let ue = 1; ue <= qe; ue++)
      V(ee - ue, se, B.snow, W, zn), V(ee + ue, se, B.snow, W, zn), V(ee, se - ue, B.snow, W, zn), V(ee, se + ue, B.snow, W, zn), qe > 1 && ue < qe && (V(ee - ue, se - ue, B.snow, W, zn), V(ee + ue, se - ue, B.snow, W, zn), V(ee - ue, se + ue, B.snow, W, zn), V(ee + ue, se + ue, B.snow, W, zn));
  }), a.bolt.o > 0.01)
    if (N >= 30) {
      const y = 39 + U, T = 50 + a.bolt.dy;
      for (let M = Math.floor(T * P); M <= (T + 28) * P; M++) for (let _ = Math.floor(y * P); _ <= (y + 13) * P; _++)
        bc(vp, (_ + 0.5) / P - y, (M + 0.5) / P - T) && V(_, M, B.sun, a.bolt.o, hr);
    } else {
      const y = N / 18, T = 7, M = 10 + Math.round(a.bolt.dy * 0.2);
      gp.forEach((_, de) => _.split("").forEach((W, ee) => {
        if (W !== "#") return;
        const se = Math.floor((T + ee) * y), ue = Math.floor((M + de) * y);
        for (let We = ue; We < Math.max(ue + 1, Math.floor((M + de + 1) * y)); We++) for (let Xe = se; Xe < Math.max(se + 1, Math.floor((T + ee + 1) * y)); Xe++) V(Xe, We, B.sun, a.bolt.o, hr);
      }));
    }
  if (a.cloud.o > 0.01) {
    const y = Math.max(3, a.cloud.w * P), T = y * 0.6665, M = (a.cloud.x + U) * P - y / 2, _ = (a.cloud.y + G) * P - T / 2, de = Vt(B.cloudDay, B.cloudNight, Math.round(a.cloud.f * 4) / 4), W = Vt(de, "#000000", 0.16);
    for (let ee = Math.max(0, Math.floor(_) - 1); ee <= Math.min(N - 1, _ + T + 1); ee++) for (let se = Math.max(0, Math.floor(M) - 1); se <= Math.min(N - 1, M + y + 1); se++) {
      const ue = (se + 0.5 - M) / y, We = (ee + 0.5 - _) / y;
      Ws(ue, We) && V(se, ee, !Ws(ue, We + 1 / y) || jn((We - 0.42) / 0.25) * 0.8 > Vn(se, ee) ? W : de, a.cloud.o, Xl);
    }
  }
  return xc(re, A, N, N, { oneBit: p, ink: g, paper: x, snowInk: !a.night });
}
function xc(a, l, i, p, { oneBit: f, ink: g, paper: x, snowInk: L }) {
  const b = new Uint8ClampedArray(i * p * 4), B = Os(g), le = Os(x);
  for (let ie = 0; ie < p; ie++) for (let N = 0; N < i; N++) {
    const P = ie * i + N, Y = l[P];
    if (a[P] == null) continue;
    let Q = Os(a[P]);
    if (f) {
      let U;
      Y === Jl || Y === Ql ? U = !0 : Y === zn ? U = L : Y === ni || Y === hr ? U = !1 : U = Math.round((0.2126 * Q[0] + 0.7152 * Q[1] + 0.0722 * Q[2]) / 255 * 4) / 4 <= Vn(N, ie), (Y === Kl || Y === $l || Y === Xl || Y === hr) && (N > 0 && l[P - 1] !== Y || N < i - 1 && l[P + 1] !== Y || ie > 0 && l[P - i] !== Y || ie < p - 1 && l[P + i] !== Y) && (U = !0), Q = U ? B : le;
    }
    b[P * 4] = Q[0], b[P * 4 + 1] = Q[1], b[P * 4 + 2] = Q[2], b[P * 4 + 3] = 255;
  }
  return { w: i, h: p, data: b };
}
const bp = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, wp = (a) => Gs(a, !1).split("/")[0], Sl = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, xp = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", yp = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", kp = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Mp = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Cp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Sp = [".##", "##.", ".#.", "#.."];
function yc(a, { width: l, height: i, colors: p, wave: f = 0.38, soft: g = 6, glow: x = 0.6 }) {
  const L = { ..._o, dawn: "#e5a77e", ...p }, b = vc(L), B = l, le = i, ie = B / 6, N = ie / 2, P = Math.PI * 2, Y = a.length ? a : [{ cond: "cloudy", night: !1 }], Q = [...Array(12)].map((z, K) => {
    const re = Y[Math.min(K, Y.length - 1)], A = wp(re.cond), V = K % 2 === 1;
    return { cond: re.cond, k: A, night: V, sky: b[A][V ? 1 : 0], cover: bp[A] };
  }), U = (z) => le * (0.5 - f * Math.cos(P * (z / ie - 0.25)));
  return { C: L, S: Q, W: B, H: le, cw: ie, sw: N, TAU: P, yb: U, side: (z, K, re) => {
    const A = (z ? U(K) - re : re - U(K)) / Math.max(3, g * 1.4) + 0.5;
    return A <= 0 ? 0 : A >= 1 ? 1 : A;
  }, glowAt: (z) => {
    const K = ((z / ie - 0.25) % 1 + 1) % 1, re = Math.max(0, Math.min(5, Math.round(z / ie - 0.25))), A = Math.max(0, Math.min(5, Math.round(z / ie - 0.75))), V = 1 - (Q[2 * re].cover + Q[2 * A + 1].cover) / 2, ve = Math.sin(Math.PI * Math.min(1, Math.max(0, U(z) / le)));
    return { c: K < 0.5 ? L.dusk : L.dawn, a: x * (0.2 + 0.8 * V) * ve * ve };
  }, soft: g, tw: ie * 0.3, sy: le / 90 };
}
function kc(a, { clock: l = 0, ambient: i = !1, seed: p = 1 }) {
  const { S: f, sw: g, side: x, C: L, TAU: b, sy: B } = a, le = l, ie = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return f.forEach((N, P) => {
    const Y = Sl(p * 977 + P * 131 + 7), Q = (P + 0.5) * g, U = N.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[N.k] : 0;
    for (let G = 0; G < U; G++) {
      const J = Q + (Y() - 0.5) * g * 1.6, z = (6 + Y() * 76) * B, K = Y() < 0.35, re = 1.8 + Y() * 1.6, A = x(!0, J, z) * (K ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(b * le / 2600 + G * 1.7 + P) : 1);
      A >= 0.03 && ie.stars.push({ x: J, y: z, big: K, size: re, o: A });
    }
    if (!N.night && (N.k === "clear" || N.k === "partly")) {
      const G = Q + (Y() - 0.5) * g * 0.3, J = Math.min(15, g * 0.29);
      ie.suns.push({ x: G, y: 32 * B, rad: J, halo: J * 2.8 * (i ? 1 + 0.07 * Math.sin(b * le / 3600 + P) : 1) });
    }
    if (N.night && (N.k === "clear" || N.k === "partly")) {
      const G = Math.min(0.78, g * 0.55 / 34), J = Q - 23 * G + (Y() - 0.5) * g * 0.2;
      ie.moons.push({ x: J + 23 * G, y: (4 + (i ? 0.8 * Math.sin(b * le / 5200 + P) : 0)) * B + 23 * G, d: 46 * G });
    }
  }), f.forEach((N, P) => {
    const Y = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[N.k];
    if (!Y) return;
    const Q = Sl(p * 577 + P * 71 + 3), U = (P + 0.5) * g, G = N.k === "rain" || N.k === "storm" || N.night ? L.cloudNight : L.cloudDay, J = N.night ? 0.82 : N.k === "storm" ? 0.75 : 1;
    for (let z = 0; z < Y; z++) {
      const K = g / 46 * (N.k === "partly" ? 0.85 : 0.75 + Q() * 0.55), re = U + (N.k === "partly" ? g * 0.12 : (Q() - 0.5) * g * 1.05), A = (N.k === "partly" ? 40 : 6 + Q() * 26) * B, V = i ? 2.5 * Math.sin(b * le / 9e3 + P * 1.3 + z * 2.1) : 0, ve = i ? 0.9 * Math.sin(b * le / 6100 + P + z) : 0;
      ie.clouds.push({ x: re - 23 * K + V, y: A - 15.33 * K + ve, w: 46 * K, h: 30.66 * K, fill: G, o: J * (Y > 1 && z === 0 ? 0.85 : 1) });
    }
  }), f.forEach((N, P) => {
    const Y = Sl(p * 313 + P * 29 + 11), Q = (P + 0.5) * g, U = N.cond === "pouring" ? 16 : N.cond === "rainy" || N.cond === "hail" ? 9 : N.cond === "lightning-rainy" ? 12 : N.cond === "snowy-rainy" ? 5 : 0;
    for (let J = 0; J < U; J++) {
      let z = Q + (Y() - 0.5) * g * 1.05, K = 44 + Y() * 36, re = 1;
      if (i) {
        const V = ((K - 44 + le * 0.04) % 36 + 36) % 36;
        z -= 0.21 * (V - (K - 44)), K = 44 + V, re = Math.min(1, V / 6, (36 - V) / 6);
      }
      K *= B;
      const A = x(N.night, z, K) * re;
      A >= 0.05 && ie.drops.push({ x: z, y: K, o: A });
    }
    const G = N.cond === "snowy" ? 11 : N.cond === "snowy-rainy" ? 6 : 0;
    for (let J = 0; J < G; J++) {
      let z = Q + (Y() - 0.5) * g * 1.05, K = 40 + Y() * 44, re = 1;
      if (i) {
        const V = ((K - 40 + le * 9e-3) % 44 + 44) % 44;
        K = 40 + V, z += 1.6 * Math.sin(b * le / 2800 + J * 1.9 + P), re = Math.min(1, V / 6, (44 - V) / 6);
      }
      K *= B;
      const A = x(N.night, z, K) * re;
      A >= 0.05 && ie.flakes.push({ x: z, y: K, o: A });
    }
    if (N.k === "fog") {
      const J = N.night ? "#c8ccd6" : "#ffffff", z = N.night ? 0.28 : 0.62, K = i ? 4 * Math.sin(b * le / 8e3 + P) : 0;
      for (let re = 0; re < 4; re++) ie.fogs.push({ x: Q - g * 0.75 + re % 2 * g * 0.18 + (re % 2 ? K : -K), y: (30 + re * 13) * B, w: g * 1.3, c: J, a: z });
    }
    if (N.k === "storm") {
      const J = (le / 3400 + P * 0.37) % 1;
      ie.bolts.push({ x: Q + (Y() - 0.5) * g * 0.3 - 5, y: 36 * B, o: i && !(J < 0.05 || J > 0.09 && J < 0.12) ? 0.8 : 1 });
    }
  }), ie;
}
function Tp(a, l, i, p, f, g, x, L) {
  const { S: b, C: B, cw: le, yb: ie, glowAt: N, soft: P, tw: Y, sy: Q } = a, U = new Array(i * p), G = new Uint8Array(i * p), J = new Uint8Array(i * p), z = (y, T, M, _, de) => {
    M == null || y < 0 || T < 0 || y >= i || T >= p || (_ >= 1 || _ > Vn(y + 5, T + 3)) && (U[T * i + y] = M, G[T * i + y] = de);
  }, K = (y, T, M, _) => {
    for (let de = Math.max(0, Math.floor(T - M) - 1); de <= Math.min(p - 1, T + M + 1); de++) for (let W = Math.max(0, Math.floor(y - M) - 1); W <= Math.min(i - 1, y + M + 1); W++) _(W, de, W + 0.5 - y, de + 0.5 - T);
  }, re = (y, T, M) => {
    for (let de = 0; de < y.length - 1; de++) {
      const W = (de + T) * le;
      if (M < W - Y / 2) return [y[de], y[de], 0];
      if (M <= W + Y / 2) return [y[de], y[de + 1], (M - W + Y / 2) / Y];
    }
    const _ = y[y.length - 1];
    return [_, _, 0];
  }, A = b.filter((y) => !y.night).map((y) => y.sky), V = b.filter((y) => y.night).map((y) => y.sky), ve = P / g, Te = 16 * Q / g;
  for (let y = 0; y < i; y++) {
    const T = (y + 0.5) * f, M = ie(T) / g, _ = re(A, 0.75, T), de = re(V, 1.25, T), W = N(T);
    for (let ee = 0; ee < p; ee++) {
      const se = Vn(y, ee), ue = ee + 0.5 - M, We = (ve > 0.01 ? jn(0.5 + ue / ve) : ue > 0 ? 1 : 0) > se;
      let Xe = We ? _[2] > se ? _[1] : _[0] : de[2] > se ? de[1] : de[0];
      (We ? jn(((ee + 0.5) / p - 0.45) / 0.55) * 0.7 : jn(1 - (ee + 0.5) / (p * 0.55)) * 0.7) > Vn(y + 2, ee + 5) && (Xe = We ? Vt(Xe, "#ffffff", 0.18) : Vt(Xe, "#000000", 0.25)), We && ue >= 0 && ue < Te && W.a * 1.3 * (1 - ue / Te) > Vn(y + 6, ee + 1) && (Xe = W.c), U[ee * i + y] = Xe, J[ee * i + y] = We ? 0 : 1;
    }
  }
  const v = Vt(B.sun, "#ffffff", 0.55), Me = Vt(B.moon, "#ffffff", 0.6);
  l.stars.forEach((y) => {
    const T = Math.floor(y.x / f), M = Math.floor(y.y / g);
    if (T < 0 || M < 0 || T >= i || M >= p || !J[M * i + T] || y.o < 0.15) return;
    const _ = y.o > 0.45 ? B.star : Vt(B.star, U[M * i + T], 0.5), de = y.big && y.o > 0.6 ? Math.floor(y.size / f) : 0;
    z(T, M, _, 1, ni);
    for (let W = 1; W <= de; W++) [[T - W, M], [T + W, M], [T, M - W], [T, M + W]].forEach((ee) => {
      ee[0] >= 0 && ee[1] >= 0 && ee[0] < i && ee[1] < p && J[ee[1] * i + ee[0]] && z(ee[0], ee[1], _, 1, ni);
    });
  }), l.suns.forEach((y) => {
    const T = Math.max(1.5, y.rad / f), M = y.x / f, _ = y.y / g, de = y.halo / f * 0.85;
    if (K(M, _, de, (W, ee, se, ue) => {
      const We = Math.sqrt(se * se + ue * ue);
      We > T && We < de && !J[ee * i + W] && z(W, ee, v, 0.3 * (1 - (We - T) / (de - T)), 0);
    }), L) {
      const W = Math.floor(x / 500) % 2, ee = Math.max(1, T * 0.3);
      for (let se = 0; se < 8; se++) if (se % 2 === W) for (let ue = T + 1.2; ue < T + 1.2 + ee; ue += 0.7) z(Math.floor(M + Math.cos(se * Math.PI / 4) * ue), Math.floor(_ + Math.sin(se * Math.PI / 4) * ue), B.sun, 1, Ql);
    }
    K(M, _, T, (W, ee, se, ue) => {
      se * se + ue * ue <= T * T && z(W, ee, jn(((ue / T + 1) / 2 - 0.6) / 0.4) > Vn(W, ee) ? B.sunEdge : B.sun, 1, Kl);
    });
  }), l.moons.forEach((y) => {
    const T = Math.max(1.5, y.d * 0.37 / f), M = y.x / f, _ = y.y / g, de = M + 0.547 * T, W = _ - 0.503 * T, ee = 0.82 * T;
    K(M, _, T, (se, ue, We, Xe) => {
      if (We * We + Xe * Xe > T * T) return;
      const vt = se + 0.5 - de, an = ue + 0.5 - W;
      vt * vt + an * an > ee * ee && z(se, ue, jn((Xe + T) / (2 * T) * 1.1 - 0.1) > Vn(se, ue) ? B.moon : Me, 1, $l);
    });
  }), l.clouds.forEach((y) => {
    const T = Math.max(3, y.w / f), M = T * 0.6665, _ = y.x / f, de = y.y / g, W = Vt(y.fill, "#000000", 0.16);
    for (let ee = Math.max(0, Math.floor(de) - 1); ee <= Math.min(p - 1, de + M + 1); ee++) for (let se = Math.max(0, Math.floor(_) - 1); se <= Math.min(i - 1, _ + T + 1); se++) {
      const ue = (se + 0.5 - _) / T, We = (ee + 0.5 - de) / T;
      Ws(ue, We) && z(se, ee, !Ws(ue, We + 1 / T) || jn((We - 0.42) / 0.25) * 0.8 > Vn(se, ee) ? W : y.fill, y.o, Xl);
    }
  }), l.fogs.forEach((y) => {
    const T = Math.floor(y.y / g), M = Math.max(T, Math.floor((y.y + 6 * Q) / g) - 1), _ = Math.floor(y.x / f), de = Math.floor((y.x + y.w) / f);
    for (let W = T; W <= M; W++) for (let ee = _; ee <= de; ee++) {
      const se = (ee - _) / Math.max(1, de - _);
      z(ee, W, y.c, y.a * (se < 0.25 ? se / 0.25 : se > 0.75 ? (1 - se) / 0.25 : 1), 0);
    }
  });
  const Se = Math.max(2, Math.round(9 / g));
  l.drops.forEach((y) => {
    const T = y.x / f, M = Math.floor(y.y / g);
    for (let _ = 0; _ < Se; _++) z(Math.floor(T - 0.208 * _ * g / f), M + _, B.rain, y.o, Jl);
  });
  const qe = Math.max(0, Math.round(4.4 / f / 2.6));
  return l.flakes.forEach((y) => {
    const T = Math.floor(y.x / f), M = Math.floor(y.y / g);
    z(T, M, B.snow, y.o, zn);
    for (let _ = 1; _ <= qe; _++)
      z(T - _, M, B.snow, y.o, zn), z(T + _, M, B.snow, y.o, zn), z(T, M - _, B.snow, y.o, zn), z(T, M + _, B.snow, y.o, zn);
  }), l.bolts.forEach((y) => {
    if (f <= 3.5)
      for (let T = Math.floor(y.y / g); T <= (y.y + 24) / g; T++) for (let M = Math.floor(y.x / f); M <= (y.x + 11) / f; M++)
        bc(Cp, (M + 0.5) * f - y.x, (T + 0.5) * g - y.y) && z(M, T, B.sun, 1, hr);
    else {
      const T = Math.round(y.x / f), M = Math.round(y.y / g);
      Sp.forEach((_, de) => _.split("").forEach((W, ee) => {
        W === "#" && z(T + ee, M + de, B.sun, 1, hr);
      }));
    }
  }), { col: U, ids: G };
}
function Lp(a, l) {
  const i = l.px, p = Math.max(6, Math.round(l.width / i)), f = Math.max(6, Math.round(l.height / i)), g = l.width / p, x = l.height / f, L = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, b = (P) => {
    const Y = yc(P, l);
    return Tp(Y, kc(Y, { clock: L, ambient: l.ambient, seed: l.seed }), p, f, g, x, L, l.ambient);
  }, B = b(a), le = l.reveal == null ? 1 : jn(l.reveal);
  let ie = B.col, N = B.ids;
  if (le < 1) {
    const P = l.prev ? b(l.prev) : null, Y = le * (p + 12);
    ie = new Array(p * f), N = new Uint8Array(p * f);
    for (let Q = 0; Q < p * f; Q++) {
      const U = Q % p, G = Q / p | 0;
      (l.reduce ? le : jn((Y - U) / 12)) > Vn(U, G) ? (ie[Q] = B.col[Q], N[Q] = B.ids[Q]) : P ? (ie[Q] = P.col[Q], N[Q] = P.ids[Q]) : (ie[Q] = null, N[Q] = 255);
    }
  }
  return xc(ie, N, p, f, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function Ap(a, l, i) {
  const p = i.width, f = i.height, g = i.reveal == null ? 1 : jn(i.reveal), x = (N, P) => {
    const Y = yc(P, i);
    Ep(N, Y, kc(Y, i));
  };
  if (a.clearRect(0, 0, p, f), g >= 1) {
    x(a, l);
    return;
  }
  if (i.prev && x(a, i.prev), i.reduce) {
    a.save(), a.globalAlpha = g, x(a, l), a.restore();
    return;
  }
  const L = a.canvas, b = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (b.width !== L.width || b.height !== L.height) && (b.width = L.width, b.height = L.height);
  const B = b.getContext("2d");
  B.setTransform(a.getTransform()), B.clearRect(0, 0, p, f), x(B, l);
  const le = g * (p + 64) - 64, ie = B.createLinearGradient(le, 0, le + 64, 0);
  ie.addColorStop(0, "rgba(0,0,0,1)"), ie.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = ie, B.fillRect(0, 0, p, f), B.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(b, 0, 0), a.restore();
}
function Ep(a, l, i) {
  const { W: p, H: f, S: g, C: x, cw: L, yb: b, glowAt: B, soft: le, tw: ie, sy: N } = l, P = (v, Me) => {
    const Se = Os(v);
    return "rgba(" + Se[0] + "," + Se[1] + "," + Se[2] + "," + Math.max(0, Math.min(1, Me)).toFixed(3) + ")";
  }, Y = (v, Me) => {
    const Se = a.createLinearGradient(0, 0, p, 0);
    Se.addColorStop(0, v[0]);
    for (let qe = 0; qe < v.length - 1; qe++) {
      const y = (qe + Me) * L, T = (y - ie / 2) / p, M = (y + ie / 2) / p;
      T > 0 && T < 1 && Se.addColorStop(T, v[qe]), M > 0 && M < 1 && Se.addColorStop(M, v[qe + 1]);
    }
    return Se.addColorStop(1, v[v.length - 1]), Se;
  }, Q = Math.max(24, Math.ceil(p / 4)), U = (v, Me) => {
    a.beginPath();
    for (let Se = 0; Se <= Q; Se++) {
      const qe = p * Se / Q, y = v == null ? 0 : b(qe) + v;
      Se ? a.lineTo(qe, y) : a.moveTo(qe, y);
    }
    for (let Se = Q; Se >= 0; Se--) {
      const qe = p * Se / Q;
      a.lineTo(qe, b(qe) + Me);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = Y(g.filter((v) => !v.night).map((v) => v.sky), 0.75), a.fillRect(0, 0, p, f);
  const G = a.createLinearGradient(0, 0, p, 0);
  for (let v = 0; v <= 64; v++) {
    const Me = B(p * v / 64);
    G.addColorStop(v / 64, P(Me.c, Math.min(1, Me.a)));
  }
  a.fillStyle = G;
  for (let v = 0; v < 8; v++)
    a.globalAlpha = 1 - v / 8, U(v * 2 * N, (v + 1) * 2 * N);
  a.fillStyle = Y(g.filter((v) => v.night).map((v) => v.sky), 1.25);
  const J = Math.max(0.5, le), z = 6;
  a.globalAlpha = 1, U(null, -J);
  for (let v = 0; v < z; v++)
    a.globalAlpha = 1 - (v + 0.5) / z, U(-J + 2 * J * v / z, -J + 2 * J * (v + 1) / z);
  a.globalAlpha = 1;
  const K = new Path2D(kp), re = new Path2D(yp), A = new Path2D(xp), V = new Path2D(Mp);
  a.fillStyle = x.star, i.stars.forEach((v) => {
    a.globalAlpha = v.o, v.big ? (a.save(), a.translate(v.x, v.y), a.scale(v.size, v.size), a.fill(K), a.restore()) : (a.beginPath(), a.arc(v.x, v.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const ve = Vt(x.sun, "#ffffff", 0.55);
  i.suns.forEach((v) => {
    const Me = a.createRadialGradient(v.x, v.y, 0, v.x, v.y, v.halo);
    Me.addColorStop(0, P(ve, 0.42)), Me.addColorStop(0.7, P(ve, 0)), a.fillStyle = Me, a.beginPath(), a.arc(v.x, v.y, v.halo, 0, Math.PI * 2), a.fill();
    const Se = a.createLinearGradient(0, v.y - v.rad, 0, v.y + v.rad);
    Se.addColorStop(0.6, x.sun), Se.addColorStop(1, x.sunEdge), a.fillStyle = Se, a.beginPath(), a.arc(v.x, v.y, v.rad, 0, Math.PI * 2), a.fill();
  });
  const Te = Vt(x.moon, "#ffffff", 0.6);
  i.moons.forEach((v) => {
    a.save(), a.translate(v.x - v.d / 2, v.y - v.d / 2), a.scale(v.d / 46, v.d / 46);
    const Me = a.createLinearGradient(0, 6, 0, 40);
    Me.addColorStop(0, Te), Me.addColorStop(1, x.moon), a.fillStyle = Me, a.fill(re), a.restore();
  }), i.clouds.forEach((v) => {
    a.save(), a.globalAlpha = v.o, a.translate(v.x, v.y), a.scale(v.w / 46, v.h / 30.66), a.translate(-4, -9.67), a.fillStyle = v.fill, a.fill(A), a.restore();
  }), i.fogs.forEach((v) => {
    const Me = a.createLinearGradient(v.x, 0, v.x + v.w, 0);
    Me.addColorStop(0, P(v.c, 0)), Me.addColorStop(0.25, P(v.c, v.a)), Me.addColorStop(0.75, P(v.c, v.a)), Me.addColorStop(1, P(v.c, 0)), a.fillStyle = Me, a.fillRect(v.x, v.y, v.w, 6 * N);
  }), a.fillStyle = x.rain, i.drops.forEach((v) => {
    a.save(), a.globalAlpha = v.o, a.translate(v.x, v.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = x.snow, i.flakes.forEach((v) => {
    a.globalAlpha = v.o, a.beginPath(), a.arc(v.x, v.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = x.sun, i.bolts.forEach((v) => {
    a.save(), a.globalAlpha = v.o, a.translate(v.x, v.y), a.fill(V), a.restore();
  }), a.restore();
}
function _p(a, l) {
  var kd, Md, Cd, Sd, Td, Ld, Ad;
  const i = (e) => a.getElementById(e), p = i("workoutView"), f = i("workoutNameInput");
  let g = !0;
  const x = i("homeClock");
  function L() {
    x && (x.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  L(), setInterval(L, 15e3);
  const b = i("createFlow"), B = i("createMovementsSlot"), le = i("createTimingSlot"), ie = i("createFinishSlot"), N = i("movementStepSummary"), P = i("timingStepSummary"), Y = i("finishStepSummary"), Q = i("continueToTiming"), U = i("continueToFinish"), G = i("finishMoveButton");
  let J = !1, z = [];
  function K(e) {
    !e || z.some((o) => o.node === e) || z.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function re(e, o) {
    e && (K(e), o.appendChild(e));
  }
  function A() {
    [...z].reverse().forEach(({ node: e, parent: o, next: s }) => {
      o && (s && s.parentNode === o ? o.insertBefore(e, s) : o.appendChild(e));
    }), z = [];
  }
  function V(e) {
    a.querySelectorAll(".createStep").forEach((o) => {
      o.classList.toggle("active", o.dataset.createStep === e);
    }), e === "timing" && (J = !0), ve();
  }
  function ve() {
    var te, ne;
    if (!lt) return;
    Ve[ut];
    const e = at.filter((X) => !X.hidden), o = e.filter((X) => X.kind !== "rest").length, s = e.filter((X) => X.kind === "rest").length;
    N.textContent = o ? o + " movement" + (o === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const c = o > 0, h = a.querySelector('[data-open-step="timing"]'), k = a.querySelector('[data-open-step="finish"]');
    h.disabled = !c, Q.disabled = !c, P.textContent = c ? xn(T.value) + " · " + Ut(M.value) + " movement · " + Ut(_.value) + " rest" : "Add a movement first", k.disabled = !(c && J);
    const E = ((f == null ? void 0 : f.value) || "").trim(), I = [];
    (te = i("includeWarmupPreset")) != null && te.checked && I.push("warm-up"), (ne = i("includeCooldownPreset")) != null && ne.checked && I.push("cooldown"), Y.textContent = E ? E + (I.length ? " · " + I.join(" + ") : "") : I.length ? I.join(" + ") : "Name and optional extras";
  }
  function Te() {
    var Ce, ze, Le;
    b.hidden = !1, J = !1;
    const e = a.querySelector(".editNameRow"), o = i("createMoveOptions"), s = a.querySelector(".timeTiles"), c = i("routineSummaryModal"), h = a.querySelector(".tempoRevealRow"), k = i("tempoExperiment"), E = (Ce = i("warmupList")) == null ? void 0 : Ce.closest("section"), I = i("movementCreatorLaunch"), te = i("movementCreator"), ne = (ze = i("strengthList")) == null ? void 0 : ze.closest("section"), X = (Le = i("cooldownList")) == null ? void 0 : Le.closest("section");
    [o == null ? void 0 : o.querySelector(".createExtras"), E, I, te, ne, X].forEach((ke) => ke && re(ke, B)), [o, s, c, h, k].forEach((ke) => re(ke, le)), re(e, ie), V("movements"), ve();
  }
  function v() {
    A(), b.hidden = !0, a.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  a.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || V(e.dataset.openStep);
  })), Q.addEventListener("click", () => {
    Q.disabled || V("timing");
  }), U.addEventListener("click", () => V("finish")), G.addEventListener("click", () => i("saveWorkoutEdit").click());
  const Me = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, Se = i("homeNav"), qe = i("settingsNav");
  function y(e) {
    Object.entries(Me).forEach(([o, s]) => s.classList.toggle("active", o === e)), Se.classList.toggle("active", e === "home"), qe.classList.toggle("active", e === "settings"), e === "home" && setTimeout(qi, 400), e === "settings" && (requestAnimationFrame(() => Na(a.querySelector(".tab.active"), !1)), m());
  }
  const T = i("totalTime"), M = i("workTime"), _ = i("restTime"), de = i("totalOut"), W = i("workOut"), ee = i("restOut"), se = i("totalFill"), ue = i("workFill"), We = i("restFill"), Xe = i("roundsInput"), vt = i("roundsFill"), an = i("roundsOut"), Dn = i("totalLabel"), Ft = i("routineSummaryModal"), Ze = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Ct = Ze.map((e) => ({ ...e })), at = [
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
  const on = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let bn = on.map((e) => ({ ...e }));
  const _i = {
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
  }, st = ro(l.data), Ve = st.profiles;
  let ut = Ve[st.selected] ? st.selected : st.order.find((e) => Ve[e]) || "kettlebell";
  function ro(e) {
    const o = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, s = o.profiles && Object.keys(o.profiles).length ? o.profiles : JSON.parse(JSON.stringify(_i)), c = (Array.isArray(o.order) ? o.order : Object.keys(s)).filter((h) => s[h]);
    return Object.keys(s).forEach((h) => {
      c.includes(h) || c.push(h);
    }), {
      v: 1,
      profiles: s,
      order: c,
      selected: o.selected || c[0],
      history: Array.isArray(o.history) ? o.history : [],
      checkins: (Array.isArray(o.checkins) ? o.checkins : Di(o.energy)).map(ai),
      settings: { ...o.settings || {} }
    };
  }
  function Di(e) {
    if (!Array.isArray(e)) return [];
    const o = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return e.forEach((c) => {
      const h = new Date(c.at);
      if (isNaN(h)) return;
      const k = h.getFullYear() + "-" + String(h.getMonth() + 1).padStart(2, "0") + "-" + String(h.getDate()).padStart(2, "0"), E = h.getHours() < 14 ? "morning" : "evening";
      if (s.some((te) => te.date === k && te.slot === E)) return;
      const I = o.indexOf(c.value) + 1;
      I > 0 && s.push({ date: k, slot: E, mood: null, energy: I, at: c.at });
    }), s;
  }
  function ai(e) {
    if (e.scale === 100) return e;
    const o = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...e, mood: o(e.mood), energy: o(e.energy), scale: 100 };
  }
  function rn() {
    lt || (st.selected = ut, st.order = st.order.filter((e) => Ve[e] && e !== mt), l.save(st));
  }
  function Je() {
    return st.settings;
  }
  function Rn(e) {
    const o = Ve[e];
    if (!o) return;
    ut = e;
    const s = i("workoutNameInput");
    if (s && (s.value = o.name), T.value = o.total, M.value = o.work, _.value = o.rest, Xe.value = o.rounds || 1, o.customSequence) {
      const c = (o.sequence || []).map((k) => ({ ...k })), h = (k) => c.filter((E) => E.presetRole === k).map(({ presetRole: E, ...I }) => I);
      Ct = (o.warmup || h("warmup")).map((k) => ({ ...k })), bn = (o.cooldown || h("cooldown")).map((k) => ({ ...k })), at = c.filter((k) => !k.presetRole), No(o.preset || "movement", !1);
    } else
      T.min = 3, T.max = 40, T.step = 1, M.min = 20, M.max = 60, M.step = 5, _.min = 5, _.max = 30, _.step = 5, Ct = (o.warmup || Ze).map((c) => ({ ...c })), bn = (o.cooldown || on).map((c) => ({ ...c })), at = o.strength.map((c) => Array.isArray(c) ? (([h, k, E, I = !1]) => ({ id: h, name: k, group: E, kind: "work", hidden: !!I }))(c) : { ...c });
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((c) => c.classList.toggle("active", c.dataset.workout === e)), q();
  }
  function Ri(e, o, s) {
    const c = e.getBoundingClientRect(), h = c.width / 2, k = c.height / 2, E = o - h, I = s - k;
    let te = 1 / 0, ne = 1 / 0;
    E !== 0 && (te = h / Math.abs(E)), I !== 0 && (ne = k / Math.abs(I));
    const X = Math.min(Math.max(1 / Math.min(te, ne), 0), 1);
    let Z = Math.atan2(I, E) * (180 / Math.PI) + 90;
    return Z < 0 && (Z += 360), { edge: X, angle: Z };
  }
  function wt(e, o, s = !1) {
    const c = e.getBoundingClientRect(), h = o.clientX - c.left, k = o.clientY - c.top, { edge: E, angle: I } = Ri(e, h, k), te = s ? 100 : E * 100;
    e.style.setProperty("--edge-proximity", te.toFixed(3)), e.style.setProperty("--cursor-angle", I.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", s || te >= 30);
  }
  function _e(e) {
    e.addEventListener("pointermove", (s) => wt(e, s, !1)), e.addEventListener("pointerenter", (s) => wt(e, s, !1)), e.addEventListener("pointerdown", (s) => wt(e, s, !0));
    const o = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", o), e.addEventListener("pointerup", o), e.addEventListener("pointercancel", o);
  }
  _e(i("addWorkoutPanel"));
  let lt = !1, mt = null;
  function He(e) {
    return String(e ?? "").replace(/[&<>"']/g, (o) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[o]);
  }
  function so(e) {
    return e.summary ? e.summary : e.customSequence ? xn(e.total) + " · custom move" : xn(e.total) + " · " + Ut(e.work) + " / " + Ut(e.rest) + " · warm-up + cooldown";
  }
  function Do(e, o) {
    var k;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = e, s.tabIndex = 0;
    const c = o.activityCount ?? (((k = o.sequence) == null ? void 0 : k.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + He(o.name) + '</div><div class="sub">' + He(so(o)) + '</div><span class="sourceTag">' + He(o.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (c ? c + " activities" + ((o.rounds || 1) > 1 ? " × " + o.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + He(o.name) + "</div></div>";
    const h = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(s, h), _e(s), s.addEventListener("click", (E) => {
      E.target.closest("button") || Rn(e);
    }), s.addEventListener("keydown", (E) => {
      (E.key === "Enter" || E.key === " ") && !E.target.closest("button") && (E.preventDefault(), Rn(e));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (E) => {
      E.stopPropagation(), Rn(e), ss(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (E) => {
      E.stopPropagation(), Rn(e), sl();
    }), s;
  }
  function aa() {
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), st.order.forEach((e) => {
      Ve[e] && Do(e, Ve[e]);
    }), a.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === ut));
  }
  aa(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    lt = !0, mt = "custom-" + Date.now(), Ve[mt] = {
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
    }, Rn(mt), ss(!0);
  });
  let De = [], je = 0, Yt = 0, cn = 1, wn = !1, Nt = null, lo = null, At = !1, Gn = st.settings.upcomingCount ?? "all", Ro = "movement";
  function Et(e, o, s) {
    return (Number(e) - o) / (s - o) * 100;
  }
  function Ut(e) {
    const o = Math.max(0, Number(e) || 0);
    return o >= 3600 && o % 3600 === 0 ? o / 3600 + " hr" : o >= 60 && o % 60 === 0 ? o / 60 + " min" : o >= 60 ? Math.round(o / 60) + " min" : Math.round(o) + " sec";
  }
  function xn(e) {
    const o = Math.max(0, Number(e) || 0);
    return o >= 60 && o % 60 === 0 ? o / 60 + " hr" : o >= 60 ? Math.floor(o / 60) + " hr " + o % 60 + " min" : o + " min";
  }
  function jt() {
    se.style.width = Et(T.value, Number(T.min), Number(T.max)) + "%", ue.style.width = Et(M.value, Number(M.min), Number(M.max)) + "%", We.style.width = Et(_.value, Number(_.min), Number(_.max)) + "%", W.textContent = Ut(M.value), ee.textContent = Ut(_.value);
    const e = Number(Xe.value) || 1;
    vt.style.width = Et(e, 1, 10) + "%", Dn.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function pn(e) {
    return e.filter((o) => !o.hidden);
  }
  function rt(e) {
    const o = Math.max(0, Math.round(Number(e) || 0)), s = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), h = o % 60;
    return (s ? s + ":" + String(c).padStart(2, "0") : c) + ":" + String(h).padStart(2, "0");
  }
  function co(e) {
    let o;
    try {
      o = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const s = o.hostname.replace(/^(www|m|music)\./, "");
    let c = null;
    if (s === "youtu.be") c = o.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(s))
      if (o.pathname === "/watch") c = o.searchParams.get("v");
      else {
        const I = o.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        I && (c = I[2]);
      }
    if (!c || !/^[\w-]{11}$/.test(c)) return null;
    const h = (I) => {
      if (!I) return 0;
      if (/^\d+$/.test(I)) return Number(I);
      const te = I.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return te ? (Number(te[1]) || 0) * 3600 + (Number(te[2]) || 0) * 60 + (Number(te[3]) || 0) : 0;
    }, k = h(o.searchParams.get("t") || o.searchParams.get("start")), E = h(o.searchParams.get("end"));
    return { id: c, start: k, end: E > k ? E : null };
  }
  function oa(e, o) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || o || 300);
    const s = Number(e.start) || 0, c = Number(e.end) || Number(e.videoDuration) || 0;
    return c > s ? Math.round(c - s) : Number(e.duration) || 300;
  }
  function Pa(e, o) {
    const s = Math.max(0, Number(e) || 0);
    return Math.round(o === "hour" ? s * 3600 : o === "min" ? s * 60 : s);
  }
  function No(e, o = !0) {
    Ro = e, a.querySelectorAll(".createPresetBtn").forEach((c) => c.classList.toggle("active", c.dataset.movePreset === e));
    const s = Ve[ut];
    s && (s.preset = e), e === "work" ? (T.min = 30, T.max = 480, T.step = 30, M.min = 300, M.max = 7200, M.step = 300, _.min = 60, _.max = 1800, _.step = 60, o && (T.value = 60, M.value = 1500, _.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (T.min = 3, T.max = 40, T.step = 1, M.min = 20, M.max = 60, M.step = 5, _.min = 5, _.max = 30, _.step = 5, o && (T.value = 20, M.value = 45, _.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), jt();
  }
  function C(e, o) {
    const s = Ro === "work";
    return e.map((c, h) => ({ ...c, id: o + "-" + h + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(M.value) }));
  }
  function D() {
    const e = Ve[ut];
    e != null && e.customSequence && (e.includeWarmup = i("includeWarmupPreset").checked, e.includeCooldown = i("includeCooldownPreset").checked, e.includeWarmup && !Ct.length && (Ct = C(Ze, "warm")), e.includeCooldown && !bn.length && (bn = C(on, "cool")), q());
  }
  function O() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const o = Math.max(1, De.length - 1), s = Gn;
    e.innerHTML = "";
    for (let k = 1; k <= o; k++) {
      const E = document.createElement("option");
      E.value = String(k), E.textContent = String(k), e.appendChild(E);
    }
    const c = document.createElement("option");
    c.value = "all", c.textContent = "All", e.appendChild(c);
    const h = s === "all" ? "all" : String(Math.min(Number(s) || 1, o));
    e.value = h, Gn = h === "all" ? "all" : Number(h);
  }
  function q() {
    Number(T.value) * 60;
    const e = Number(M.value), o = Number(_.value), s = Ve[ut], c = !!(s != null && s.customSequence), h = (c ? !s.includeWarmup : s != null && s.warmupOff) ? [] : pn(Ct), k = pn(at), E = c && !s.includeCooldown ? [] : pn(bn);
    if (s && (s.total = Number(T.value), s.work = e, s.rest = o, s.rounds = Number(Xe.value) || 1, s.customSequence ? (s.sequence = at.map((xe) => ({ ...xe })), s.warmup = Ct.map((xe) => ({ ...xe })), s.cooldown = bn.map((xe) => ({ ...xe }))) : (s.strength = at.map((xe) => ({ ...xe })), s.warmup = Ct.map((xe) => ({ ...xe })), s.cooldown = bn.map((xe) => ({ ...xe })))), s != null && s.customSequence) {
      const xe = [...h.map((tt) => ({ ...tt, section: "warmup" })), ...k, ...E.map((tt) => ({ ...tt, section: "cooldown" }))].map((tt) => {
        if (tt.kind === "video") return { ...tt, duration: oa(tt, e), rest: 0 };
        if (tt.kind === "rest") {
          const en = tt.useGlobalTiming === !0 ? o : Number(tt.duration) || o;
          return { ...tt, duration: en, rest: 0 };
        }
        const Qt = tt.useGlobalTiming === !1 && Number(tt.duration) || e;
        return { ...tt, duration: Qt, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (De = [], xe.forEach((tt, Qt) => {
        De.push(tt);
        const en = xe[Qt + 1];
        tt.kind !== "rest" && en && en.kind !== "rest" && De.push({
          id: "auto-rest-" + Qt,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : De = xe;
    } else
      De = [...h.map((xe) => ({ ...xe, section: "warmup" })), ...k, ...E.map((xe) => ({ ...xe, section: "cooldown" }))].map((xe) => xe.kind === "video" ? { ...xe, duration: oa(xe, e), rest: 0 } : xe.kind === "rest" ? { ...xe, duration: xe.useGlobalTiming === !0 ? o : Number(xe.duration) || o, rest: 0 } : { ...xe, duration: xe.useGlobalTiming === !1 && Number(xe.duration) || e, rest: o }), De.forEach((xe, tt) => {
        var Qt;
        ((Qt = De[tt + 1]) == null ? void 0 : Qt.kind) === "rest" && (xe.rest = 0);
      }), De.length && (De[De.length - 1].rest = 0);
    const I = Math.max(1, Math.min(10, Number(Xe.value) || 1)), te = De, ne = (xe) => I <= 1 ? null : xe.section === "warmup" || xe.presetRole === "warmup" ? "first" : xe.section === "cooldown" || xe.presetRole === "cooldown" ? "last" : xe.kind === "video" && (xe.videoRounds === "first" || xe.videoRounds === "last") ? xe.videoRounds : null, X = (xe) => !!ne(xe), Z = te.filter((xe) => !X(xe)), Ce = te.filter(X), ze = Z.length, Le = Z.reduce((xe, tt) => xe + tt.duration + tt.rest, 0), ke = Ce.reduce((xe, tt) => xe + tt.duration + tt.rest, 0), be = [
      Ce.some((xe) => xe.section === "warmup" || xe.presetRole === "warmup") && "warm-up",
      Ce.some((xe) => xe.section === "cooldown" || xe.presetRole === "cooldown") && "cooldown",
      Ce.some((xe) => xe.kind === "video" && !xe.section && !xe.presetRole) && "video"
    ].filter(Boolean), dt = be.length > 1 ? be.slice(0, -1).join(", ") + " & " + be[be.length - 1] : be[0] || "";
    De = [];
    const ct = (xe, tt) => {
      const Qt = ne(xe);
      return !Qt || (Qt === "first" ? tt === 1 : tt === I);
    };
    for (let xe = 1; xe <= I; xe++)
      if (te.filter((tt) => ct(tt, xe)).forEach((tt, Qt) => De.push({ ...tt, id: tt.id + (I > 1 ? "-r" + xe : ""), round: xe, roundIndex: Qt })), xe < I && ze)
        if (s != null && s.customSequence)
          De.push({ id: "round-break-" + xe, name: "Rest", group: "Round " + (xe + 1) + " next", kind: "rest", hidden: !1, duration: o, rest: 0, round: xe, roundIndex: ze, roundBreak: !0 });
        else {
          const tt = De[De.length - 1];
          tt.rest = o, tt.roundBreakAfter = !0;
        }
    jt();
    const Ae = De.reduce((xe, tt) => xe + tt.duration + tt.rest, 0), pt = Math.round(Le / 60), kt = Math.round(Ae / 60), Qe = I > 1 ? xn(pt) + " × " + I + " rounds" + (ke ? " + " + Ut(ke) + " " + dt : "") + " (" + xn(kt) + ")" : xn(kt), Ye = [h.length ? "warm-up" : "", E.length ? "cooldown" : ""].filter(Boolean), Xt = s != null && s.customSequence ? Qe + " · " + ze + " items" + (Ye.length && !(I > 1 && ke) ? " · " + Ye.join(" + ") : "") : Qe + " · " + Ut(e) + " / " + Ut(o) + (Ye.length && !(I > 1 && ke) ? " · " + Ye.join(" + ") : "");
    de.textContent = Ut(Le);
    const gn = De.filter((xe) => !xe.roundBreak).length, Ht = I > 1 ? gn + " activities · " + I + " rounds" : ze + " activities";
    an.textContent = I > 1 ? I + " rounds · " + xn(kt) + " total" : "1 round", i("roundsCount").textContent = I, a.querySelectorAll("[data-rounds-step]").forEach((xe) => {
      xe.disabled = Number(xe.dataset.roundsStep) < 0 ? I <= 1 : I >= 10;
    }), s && (s.summary = Xt, s.activityCount = ze);
    const Xo = a.querySelector(".workoutPanel.active .sub");
    Xo && (Xo.textContent = Xt), Ft.textContent = Xt, mr(), a.querySelectorAll(".workoutPanel.active .activityCount").forEach((xe) => xe.textContent = Ht), jt(), ht(), Pi(), si(), O(), lt && ve(), Me.workout.classList.contains("active") && !Nt && Ji();
  }
  const he = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', we = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', me = {
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
  }, ye = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (me[e] || "") + "</svg>";
  a.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = ye(e.dataset.icon);
  });
  let pe = null, Ee = null;
  function Oe(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Ke(e = !1) {
    const o = a.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    o && (o.focus({ preventScroll: !0 }), e && o.select());
  }
  function Ge(e, o, s = {}) {
    const c = e.kind === "rest", h = e.kind === "video", k = h ? e.useVideoLength !== !1 : c ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, E = Number(c ? _.value : M.value), I = Oe(h ? e.useVideoLength === !1 ? e.duration : oa({ ...e, useVideoLength: !0 }) : k ? E : e.duration || E), te = h && (Number(e.videoDuration) > 0 || Number(e.end) > 0), ne = h ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + He(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + He(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Ae, pt]) => '<option value="' + Ae + '"' + ((e.videoRounds || "every") === Ae ? " selected" : "") + ">" + pt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + He(e.name) + '" placeholder="' + (c ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + He(e.group) + '" placeholder="' + (c ? "Rest" : "e.g. Glutes + legs") + '"></label>', X = h ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (te ? " · " + rt(oa({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + Ut(E), Z = document.createElement("div");
    Z.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), Z.dataset.index = o, Z.dataset.id = e.id;
    const Ce = s.isNew ?? (Ee == null ? void 0 : Ee.item) === e, ze = s.sheet ? '<div class="moveEditActions sheetActions">' + (Ce ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + He(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Ce ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    Z.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (h ? " videoFields" : "") + '">' + ne + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (k ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + He(X) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + I.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Ae) => '<option value="' + Ae + '"' + (Ae === I.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Ae] + "</option>").join("") + "</select></div></div>" + ze + "</div>";
    const Le = (Ae) => Z.querySelector("[data-f=" + Ae + "]"), ke = () => {
      const Ae = Le("global").checked;
      Le("dur").disabled = Ae, Le("unit").disabled = Ae, Z.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Ae);
    };
    Le("global").addEventListener("change", ke), ke();
    const be = () => {
      var Ae;
      if (s.sheet) {
        (Ae = s.onCancel) == null || Ae.call(s);
        return;
      }
      Ce && Lt(), pe = null, q();
    }, dt = () => {
      var kt;
      if (h) {
        ct();
        return;
      }
      const Ae = Le("name").value.trim();
      if (!Ae) {
        Le("name").focus();
        return;
      }
      e.name = Ae, e.group = Le("group").value.trim() || (c ? "Rest" : "Movement");
      const pt = Le("global").checked;
      if (e.useGlobalTiming = pt, pt || (e.duration = Math.max(c ? 5 : 1, Pa(Le("dur").value, Le("unit").value))), s.sheet) {
        (kt = s.onSaved) == null || kt.call(s);
        return;
      }
      Ce && (Ee = null), pe = null, q(), _t(Ce ? c ? "Rest added" : "Movement added" : "Movement updated");
    }, ct = () => {
      var Ye;
      const Ae = Le("url").value.trim(), pt = co(Ae);
      if (!pt) {
        Le("urlError").hidden = !1, Le("url").classList.add("invalid"), Le("url").focus();
        return;
      }
      const kt = pt.id !== e.videoId;
      e.url = Ae, e.videoId = pt.id, e.start = pt.start, e.end = pt.end, kt && (e.videoDuration = null, e.videoError = null);
      const Qe = Le("name").value.trim();
      e.autoName = !Qe, e.name = Qe || (kt ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = Le("rounds").value, e.useVideoLength = Le("global").checked, e.useVideoLength || (e.duration = Math.max(5, Pa(Le("dur").value, Le("unit").value))), s.sheet ? (Ye = s.onSaved) == null || Ye.call(s) : (Ce && (Ee = null), pe = null, q(), _t(Ce ? "Video added" : "Video updated")), (kt || !e.videoDuration || e.autoName && !e.videoTitle) && vs(e);
    };
    if (h && Le("url").addEventListener("input", () => {
      Le("urlError").hidden = !0, Le("url").classList.remove("invalid");
    }), Z.querySelector("[data-a=cancel]").addEventListener("click", be), Z.querySelector("[data-a=save]").addEventListener("click", dt), s.sheet && !Ce) {
      Z.querySelector("[data-a=hide]").addEventListener("click", () => {
        var pt;
        return (pt = s.onHide) == null ? void 0 : pt.call(s);
      });
      const Ae = Z.querySelector("[data-a=remove]");
      Ra(Ae, Ae.querySelector(".removeFill"), 1200, () => {
        var pt;
        return (pt = s.onRemove) == null ? void 0 : pt.call(s);
      });
    }
    return Z.addEventListener("keydown", (Ae) => {
      Ae.key === "Escape" && (Ae.preventDefault(), Ae.stopPropagation(), be()), Ae.key === "Enter" && Ae.target.matches("input") && (Ae.preventDefault(), dt());
    }), Z;
  }
  function Re(e, o) {
    const s = i(o);
    s.innerHTML = "", e.forEach((c, h) => {
      if (c === pe && !ha()) {
        s.appendChild(Ge(c, h));
        return;
      }
      const k = document.createElement("div");
      k.className = "moveRow" + (c.hidden ? " hidden" : "") + (c.kind === "rest" ? " restItem" : "") + (c.kind === "video" ? " videoItem" : "") + (r(c) ? " noMeta" : ""), k.dataset.index = h, k.dataset.id = c.id;
      const E = c.kind === "rest" ? c.useGlobalTiming === !0 ? "Global timing" : Ut(c.duration) : c.useGlobalTiming === !1 ? Ut(c.duration) : "Global timing", I = c.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", te = c.kind === "video" ? c.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (c.useVideoLength === !1 ? "stops after " + Ut(c.duration) : Number(c.videoDuration) > 0 || Number(c.end) > 0 ? rt(oa(c)) : "plays to the end") + (c.videoRounds === "first" ? " · first round only" : c.videoRounds === "last" ? " · last round only" : "") : c.group + " · " + E, ne = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + He(c.name) + '. Drag, or use the up and down arrow keys">' + he + "</button>", X = '<div class="moveText"><div class="moveItemName">' + He(c.name) + I + '</div><div class="moveMeta">' + He(te) + "</div></div>", Z = (Le) => Le.addEventListener("keydown", (ke) => {
        var ct, Ae;
        if (ke.key !== "ArrowUp" && ke.key !== "ArrowDown") return;
        ke.preventDefault();
        const be = e.indexOf(c), dt = be + (ke.key === "ArrowUp" ? -1 : 1);
        dt < 0 || dt >= e.length || (e.splice(be, 1), e.splice(dt, 0, c), q(), (Ae = (ct = i(o).children[dt]) == null ? void 0 : ct.querySelector(".dragHandle")) == null || Ae.focus());
      });
      if (ha()) {
        k.classList.add("phoneRow"), k.tabIndex = 0, k.setAttribute("role", "button"), k.setAttribute("aria-label", "Edit " + (c.name || "step")), k.innerHTML = ne + X + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Le = k.querySelector(".dragHandle");
        Le.addEventListener("pointerdown", (ke) => et(ke, k, s, e)), Z(Le), k.addEventListener("click", (ke) => {
          ke.target.closest(".dragHandle") || Qr(c, e);
        }), k.addEventListener("keydown", (ke) => {
          ke.key === "Enter" && ke.target === k && (ke.preventDefault(), Qr(c, e));
        }), s.appendChild(k);
        return;
      }
      k.innerHTML = ne + X + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + He(c.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (c.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + He(c.name) + '"><span class="removeFill"></span><span class="removeLabel">' + we + "</span></button></div>", k.querySelector(".editBtn").addEventListener("click", () => {
        Lt(), pe = c, q(), Ke();
      }), k.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        c.hidden = !c.hidden, q();
      });
      const Ce = k.querySelector(".removeBtn");
      Ra(Ce, Ce.querySelector(".removeFill"), 1200, () => {
        const Le = e.indexOf(c);
        Le < 0 || (e.splice(Le, 1), q(), _t("Removed " + c.name, { label: "Undo", run: () => {
          e.splice(Math.min(Le, e.length), 0, c), q();
        } }));
      });
      const ze = k.querySelector(".dragHandle");
      ze.addEventListener("pointerdown", (Le) => et(Le, k, s, e)), Z(ze), s.appendChild(k);
    });
  }
  const Ie = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Be = (e) => {
    var o;
    try {
      (o = navigator.vibrate) == null || o.call(navigator, e);
    } catch {
    }
  };
  function et(e, o, s, c) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const h = e.currentTarget, k = e.pointerId, E = !Ie();
    try {
      h.setPointerCapture(k);
    } catch {
    }
    const I = o.closest(".exerciseScroller") || ia(o), te = s.style.position;
    s.style.position = "relative";
    const ne = [...s.children].filter((nt) => nt.classList.contains("moveRow")), X = ne.indexOf(o), Z = parseFloat(getComputedStyle(s).rowGap) || 8, Ce = o.offsetHeight, ze = Ce + Z, Le = ne.map((nt) => nt.offsetTop), ke = ne.map((nt) => nt.offsetHeight), be = () => s.getBoundingClientRect().top, dt = s.getBoundingClientRect().width, ct = e.clientY - (be() + Le[X]), Ae = e.clientX;
    let pt = e.clientY, kt = e.clientX, Qe = be() + Le[X], Ye = 0, Xt = 0, gn = 0, Ht = 1, Xo = 0, xe = X, tt = !1, Qt = 0, en = !1, As = !1, rr = Le[X];
    s.classList.add("reordering"), o.classList.add("dragging"), o.style.transition = "none", Be(8);
    const Es = () => {
      const nt = pt - ct + Ce / 2 - be();
      let gt = 0;
      return ne.forEach((Rt, qn) => {
        qn !== X && nt > Le[qn] + ke[qn] / 2 && gt++;
      }), gt;
    }, _s = () => {
      ne.forEach((nt, gt) => {
        if (gt === X) return;
        const Rt = X < xe && gt > X && gt <= xe ? -ze : X > xe && gt >= xe && gt < X ? ze : 0;
        nt.style.transform = Rt ? "translateY(" + Rt + "px)" : "";
      });
    }, Gr = () => {
      const nt = s.getBoundingClientRect(), gt = Math.abs(kt - Ae) > Math.max(80, dt * 0.3) || kt < nt.left - 24 || kt > nt.right + 24;
      gt !== tt && (tt = gt, o.classList.toggle("willReturn", gt), Be(gt ? 10 : 4));
      const Rt = tt ? X : Es();
      Rt !== xe && (xe = Rt, _s(), tt || Be(4));
    }, Jo = () => {
      if (xe === X) return Le[X];
      const nt = ne.filter((Rt, qn) => qn !== X);
      let gt = Le[0];
      for (let Rt = 0; Rt < xe; Rt++) gt += nt[Rt].offsetHeight + Z;
      return gt;
    }, sr = () => {
      const nt = E ? Math.min(Math.abs(Ye) / 40, 1) : 0, gt = E && !en ? Math.max(-3, Math.min(3, gn * 0.6)) : 0;
      o.style.transform = "translate(" + Xt.toFixed(2) + "px," + (Qe - (be() + Le[X])).toFixed(2) + "px) rotate(" + gt.toFixed(2) + "deg) scale(" + (Ht * (1 - 0.04 * nt)).toFixed(4) + "," + (Ht * (1 + 0.06 * nt)).toFixed(4) + ")";
    }, $e = () => {
      Qt = requestAnimationFrame($e);
      const nt = kt - Ae, gt = en ? be() + rr : pt - ct, Rt = en ? 0 : tt ? nt * 0.9 : Math.max(-22, Math.min(22, nt * 0.22)), qn = en ? 1 : tt ? 0.97 : 1.035;
      if (!E) {
        Qe = gt, Xt = en ? 0 : Rt, Ht = 1, sr(), en && qt();
        return;
      }
      const ip = en ? 0.24 : 0.2, rp = en ? 0.62 : 0.68;
      Ye = (Ye + (gt - Qe) * ip) * rp, Qe += Ye, gn = (gn + (Rt - Xt) * 0.16) * 0.7, Xt += gn, Xo = (Xo + (qn - Ht) * 0.22) * 0.6, Ht += Xo, sr(), en && Math.abs(Ye) < 0.15 && Math.abs(gt - Qe) < 0.5 && Math.abs(Xt) < 0.5 && Math.abs(Ht - 1) < 3e-3 && qt();
    }, St = setInterval(() => {
      if (!I || en) return;
      const nt = I.getBoundingClientRect(), gt = 56, Rt = pt < nt.top + gt ? -10 : pt > nt.bottom - gt ? 10 : 0;
      Rt && (I.scrollTop += Rt, Gr());
    }, 30);
    function qt() {
      if (As) return;
      As = !0, cancelAnimationFrame(Qt);
      const nt = xe !== X, gt = o.dataset.id;
      if (s.classList.remove("reordering"), ne.forEach((qn) => {
        qn.style.transition = "none", qn.style.transform = "";
      }), o.classList.remove("dragging", "willReturn"), s.style.position = te, nt) {
        const [qn] = c.splice(X, 1);
        c.splice(xe, 0, qn);
      }
      q();
      const Rt = gt && s.querySelector('.moveRow[data-id="' + gt + '"]');
      Rt && E && Rt.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), nt && _t("Order saved");
    }
    const tn = (nt) => {
      if (nt.pointerId === k) {
        if (nt.pointerType === "mouse" && nt.buttons === 0) {
          ca();
          return;
        }
        pt = nt.clientY, kt = nt.clientX, Gr();
      }
    }, On = (nt) => {
      nt.pointerId === k && ca();
    };
    function ca() {
      en || (window.removeEventListener("pointermove", tn, !0), window.removeEventListener("pointerup", On, !0), window.removeEventListener("pointercancel", On, !0), h.removeEventListener("lostpointercapture", ca), clearInterval(St), tt && xe !== X && (xe = X, _s()), rr = Jo(), en = !0, Be(6), setTimeout(qt, 800));
    }
    window.addEventListener("pointermove", tn, !0), window.addEventListener("pointerup", On, !0), window.addEventListener("pointercancel", On, !0), h.addEventListener("lostpointercapture", ca), Qt = requestAnimationFrame($e), sr();
  }
  function ht() {
    var h, k, E, I;
    const e = Ve[ut], o = (h = i("warmupList")) == null ? void 0 : h.closest("section"), s = (k = i("cooldownList")) == null ? void 0 : k.closest("section"), c = (I = (E = i("strengthList")) == null ? void 0 : E.closest("section")) == null ? void 0 : I.querySelector(".sectionTitle");
    e != null && e.customSequence ? (o && (o.hidden = !e.includeWarmup), s && (s.hidden = !e.includeCooldown), c && (c.textContent = "Move sequence")) : (o && (o.hidden = !!(e != null && e.warmupOff)), s && (s.hidden = !1), c && (c.textContent = "Kettlebell work")), Re(Ct, "warmupList"), Re(at, "strengthList"), Re(bn, "cooldownList");
  }
  function Lt() {
    if (!Ee) return;
    const { item: e, arr: o } = Ee;
    Ee = null;
    const s = o.indexOf(e);
    s >= 0 && o.splice(s, 1), pe === e && (pe = null);
  }
  function xt(e) {
    return e.id === "warmupList" ? { arr: Ct, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: bn, kind: "cooldown", group: "Cooldown" } : { arr: at, kind: "work", group: "" };
  }
  function Zt(e, o) {
    const s = xt(o), c = Date.now().toString(36);
    return e === "video" ? { id: "video-" + c, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + c, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(_.value) } : { id: "movement-" + c, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(M.value) };
  }
  const Sn = "cubic-bezier(.34,1.46,.64,1)";
  function Un(e, o) {
    if (Ie() || !e) {
      o();
      return;
    }
    const s = (k) => {
      var E;
      return ((E = k.dataset) == null ? void 0 : E.id) || k;
    }, c = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], h = new Map(c().map((k) => [s(k), k.getBoundingClientRect().top]));
    o(), c().forEach((k) => {
      const E = h.get(s(k));
      if (E === void 0) return;
      const I = E - k.getBoundingClientRect().top;
      Math.abs(I) < 0.5 || k.animate([{ transform: "translateY(" + I + "px)" }, { transform: "none" }], { duration: 440, easing: Sn });
    });
  }
  function Nn(e, o) {
    if (!e || Ie()) return;
    const s = e.offsetHeight, c = Math.max(0, s - (o || 0));
    e.animate([{ clipPath: "inset(0 0 " + c + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Sn });
  }
  function Yn(e, o, s, c) {
    const { arr: h } = xt(o), k = Zt(e, o);
    h.splice(Math.max(0, Math.min(s, h.length)), 0, k), Ee = { item: k, arr: h }, pe = k, Un(o.closest(".exerciseScroller,.createStepSlot") || o, () => q());
    const E = o.querySelector(".moveRow.editing");
    return Nn(E, c), Ke(e === "rest"), E;
  }
  function ia(e) {
    for (let o = e; o && o.nodeType === 1; o = o.parentElement) {
      const s = getComputedStyle(o).overflowY;
      if (/(auto|scroll)/.test(s) && o.scrollHeight > o.clientHeight) return o;
    }
    return null;
  }
  const Ia = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function Bo(e, o) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (e === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + he + '</span><span class="addGhostText"><strong>' + He(o[0]) + "</strong><small>" + He(o[1]) + "</small></span>", i("workoutModal").appendChild(s), s;
  }
  function un(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function ft(e, o, s, c) {
    (pe || Ee) && (Lt(), pe = null, q());
    const h = e.getBoundingClientRect(), k = Bo(o, Ia[o]);
    k.setAttribute("aria-hidden", "true"), k.style.width = h.width + "px", k.style.height = h.height + "px", k.style.transform = "translate(" + h.left + "px," + h.top + "px)", e.classList.add("lifting");
    const E = ia(e);
    return Zn({
      ghost: k,
      origin: h,
      sx: s,
      sy: c,
      scroller: E,
      column: e.closest(".exerciseScroller,.createFlow") || E,
      home: () => e.getBoundingClientRect(),
      onDrop: (I, te, ne) => {
        un(k), e.classList.remove("lifting"), Yn(o, I, te, ne);
      },
      onReturn: () => {
        un(k), e.classList.remove("lifting");
      }
    });
  }
  function Zn({ ghost: e, origin: o, sx: s, sy: c, scroller: h, column: k, home: E, onDrop: I, onReturn: te, rowLook: ne = !1 }) {
    var sr;
    const X = !Ie(), Z = ((sr = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : sr.offsetHeight) || 80, Ce = s - o.left, ze = c - o.top, Le = 44;
    let ke = s, be = c, dt = o.left, ct = o.top, Ae = 0, pt = 0, kt = !X, Qe = null, Ye = null, Xt = -1, gn = 0, Ht = null;
    const Xo = () => ["warmupList", "strengthList", "cooldownList"].map(($e) => i($e)).filter(($e) => $e && $e.getClientRects().length && !$e.closest("[hidden]")), xe = ($e) => {
      if ($e === Qe) return;
      Qe = $e, e.classList.toggle("overList", !!$e || ne);
      const St = $e ? $e.getBoundingClientRect().width : o.width;
      e.style.width = St + "px", e.style.height = ($e ? Z : o.height) + "px";
    }, tt = ($e) => {
      $e.classList.add("leaving"), $e.style.height = "0px", $e.style.marginTop = "-8px", setTimeout(() => $e.remove(), X ? 320 : 0);
    }, Qt = ($e, St, qt) => {
      if (Ye && Ye.parentNode === $e && Xt === qt || (Ye && (tt(Ye), Ye = null, Xt = -1), !$e)) return;
      const tn = document.createElement("div");
      tn.className = "dropSlot", $e.insertBefore(tn, St), Ye = tn, Xt = qt, tn.getBoundingClientRect(), tn.style.height = Z + "px", tn.style.marginTop = "0px";
    }, en = () => {
      let $e = null, St = 1 / 0;
      for (const ca of Xo()) {
        const nt = ca.getBoundingClientRect();
        if (ke < nt.left - 48 || ke > nt.right + 48) continue;
        const gt = nt.top - 28, Rt = nt.bottom + 28, qn = be < gt ? gt - be : be > Rt ? be - Rt : 0;
        qn < St && (St = qn, $e = ca);
      }
      const qt = k == null ? void 0 : k.getBoundingClientRect(), On = qt && ke >= qt.left && ke <= qt.right && be >= qt.top && be <= qt.bottom || St === 0 ? $e : null;
      if (On) {
        const ca = [...On.children].filter((gt) => gt.classList.contains("moveRow"));
        let nt = ca.findIndex((gt) => {
          const Rt = gt.getBoundingClientRect();
          return be < Rt.top + Rt.height / 2;
        });
        nt < 0 && (nt = ca.length), Qt(On, ca[nt] || null, nt);
      } else Qt(null);
      xe(On);
    }, As = () => {
      if (Ht) return Ht.aim();
      if (Qe) {
        const $e = Qe.getBoundingClientRect();
        let St = be - Z / 2;
        return Ye && (St = St * 0.6 + Ye.getBoundingClientRect().top * 0.4), { x: $e.left, y: St };
      }
      return { x: ke - Ce, y: be - ze };
    }, rr = ($e, St, qt, tn) => {
      e.style.transform = "translate(" + dt + "px," + ct + "px) rotate(" + $e + "deg) rotate(" + St + "rad) scale(" + qt + "," + tn + ") rotate(" + -St + "rad)";
    }, Es = () => {
      if (gn = requestAnimationFrame(Es), !kt) {
        const nt = ke - s, gt = be - c, Rt = Math.min(Math.hypot(nt, gt) / Le, 1);
        dt = o.left + nt * 0.35, ct = o.top + gt * 0.35, rr(0, Math.atan2(gt, nt), 1 + 0.155 * Rt, 1 - 0.1 * Rt);
        return;
      }
      const $e = As();
      if (!X) {
        dt = $e.x, ct = $e.y, rr(0, 0, 1, 1), Ht && (cancelAnimationFrame(gn), Ht.done());
        return;
      }
      const St = Ht ? Ht.k : 0.17, qt = Ht ? Ht.d : 0.7;
      Ae = (Ae + ($e.x - dt) * St) * qt, pt = (pt + ($e.y - ct) * St) * qt, dt += Ae, ct += pt;
      const tn = Math.hypot(Ae, pt), On = Math.min(tn / 48, 1), ca = Qe || Ht ? 0 : Math.max(-5, Math.min(5, Ae * 0.32));
      rr(ca, Math.atan2(pt, Ae), 1 + 0.1 * On, 1 - 0.063 * On), Ht && tn < 0.15 && Math.hypot($e.x - dt, $e.y - ct) < 0.6 && (cancelAnimationFrame(gn), Ht.done());
    }, _s = setInterval(() => {
      if (!h || Ht) return;
      const $e = h.getBoundingClientRect(), St = 64, qt = be < $e.top + St ? -($e.top + St - be) / 4 : be > $e.bottom - St ? (be - ($e.bottom - St)) / 4 : 0;
      qt && (h.scrollTop += Math.max(-18, Math.min(18, qt)), en());
    }, 30);
    gn = requestAnimationFrame(Es);
    let Gr = !1;
    const Jo = ($e, St) => {
      if (Gr) return;
      Gr = !0, cancelAnimationFrame(gn);
      const qt = Ye ? Ye.offsetHeight : Z;
      !$e && Ye && (Ye.remove(), Ye = null), $e ? I($e, St, qt) : te();
    };
    return {
      move($e, St) {
        ke = $e, be = St, !kt && Math.hypot(ke - s, be - c) > Le && (kt = !0, Ae = (ke - s) * 0.085, pt = (be - c) * 0.085), kt && en();
      },
      drop($e) {
        clearInterval(_s);
        const St = Qe, qt = Xt;
        if (!$e && St && Ye) {
          const tn = Ye;
          Ht = { k: 0.24, d: 0.62, aim: () => {
            const On = tn.getBoundingClientRect();
            return { x: On.left, y: On.top };
          }, done: () => Jo(St, qt) }, setTimeout(() => Jo(St, qt), 650), X || (cancelAnimationFrame(gn), Jo(St, qt));
          return;
        }
        Qt(null), xe(null), Ht = { k: 0.2, d: 0.66, aim: () => {
          const tn = E();
          return { x: tn.left, y: tn.top };
        }, done: () => Jo(null) }, setTimeout(() => Jo(null), 650), X || (cancelAnimationFrame(gn), Jo(null));
      }
    };
  }
  function pa(e, o) {
    let s = !1;
    e.addEventListener("click", (c) => {
      if (s) {
        s = !1, c.preventDefault();
        return;
      }
      if (ha()) {
        ii(o);
        return;
      }
      const h = i("strengthList"), k = Yn(o, h, xt(h).arr.length, 0);
      k == null || k.scrollIntoView({ block: "nearest", behavior: Ie() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (c) => {
      if (c.button !== void 0 && c.button !== 0) return;
      const h = c.pointerId, k = c.clientX, E = c.clientY;
      let I = null, te = !1;
      try {
        e.setPointerCapture(h);
      } catch {
      }
      const ne = (be) => {
        if (be.pointerId === h) {
          if (be.pointerType === "mouse" && be.buttons === 0) {
            ke(!1);
            return;
          }
          if (!I) {
            if (Math.hypot(be.clientX - k, be.clientY - E) < 6) return;
            I = ft(e, o, k, E);
          }
          I.move(be.clientX, be.clientY);
        }
      }, X = (be) => {
        be.pointerId === h && ke(!1);
      }, Z = (be) => {
        be.pointerId === h && ke(!0);
      }, Ce = () => ke(!1), ze = () => ke(!0), Le = (be) => {
        be.key === "Escape" && I && (be.preventDefault(), be.stopPropagation(), ke(!0));
      };
      function ke(be) {
        if (!te && (te = !0, window.removeEventListener("pointermove", ne, !0), window.removeEventListener("pointerup", X, !0), window.removeEventListener("pointercancel", Z, !0), window.removeEventListener("keydown", Le, !0), window.removeEventListener("blur", ze), e.removeEventListener("lostpointercapture", Ce), I)) {
          const dt = I;
          I = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), dt.drop(be);
        }
      }
      window.addEventListener("pointermove", ne, !0), window.addEventListener("pointerup", X, !0), window.addEventListener("pointercancel", Z, !0), window.addEventListener("keydown", Le, !0), window.addEventListener("blur", ze), e.addEventListener("lostpointercapture", Ce);
    });
  }
  const ua = (kd = window.matchMedia) == null ? void 0 : kd.call(window, "(max-width: 620px)");
  function ha() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const oi = (e) => e.charAt(0).toUpperCase() + e.slice(1), Sa = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let hn = null, Bt = null;
  function Ni(e, o, s, c) {
    sn(), i("sheetTitle").textContent = e;
    const h = i("sheetBody");
    h.innerHTML = "", h.appendChild(o), hn = s || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !h.contains(o)) return;
      const k = c ? h.querySelector("input[data-f=url],input[data-f=name]") : h.querySelector("button,input,select");
      k == null || k.focus({ preventScroll: !0 });
    }, Ie() ? 0 : 360);
  }
  function sn() {
    const e = i("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), i("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(a.activeElement) && a.activeElement.blur();
    const o = hn;
    hn = null, o == null || o(), setTimeout(po, 0);
  }
  i("sheetScrim").addEventListener("click", sn), i("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), sn());
  });
  function Qr(e, o) {
    const s = Ge(e, o.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        sn(), q(), _t(oi(Sa(e)) + " updated");
      },
      onCancel: sn,
      onHide() {
        e.hidden = !e.hidden, sn(), q(), _t((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        sn();
        const c = o.indexOf(e);
        c < 0 || (o.splice(c, 1), q(), _t("Removed " + e.name, { label: "Undo", run: () => {
          o.splice(Math.min(c, o.length), 0, e), q();
        } }));
      }
    });
    Ni("Edit " + Sa(e), s, null, !1);
  }
  function Po() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([o, s, c, h]) => {
      const k = document.createElement("button");
      k.type = "button", k.className = "sheetChoice", k.innerHTML = '<span class="timeIcon" aria-hidden="true">' + ye(s) + "</span><span><strong>" + c + "</strong><small>" + h + "</small></span>", k.addEventListener("click", () => ii(o)), e.appendChild(k);
    }), Ni("Add to the move", e, null, !1);
  }
  function ii(e) {
    Bt && ri();
    const o = Zt(e, i("strengthList")), s = Ge(o, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        sn(), Ys(o, e);
      },
      onCancel: sn
    });
    Ni("New " + Sa(o), s, null, !0);
  }
  const Ha = i("workoutModal").querySelector(".modalStatic"), fr = { parent: Ha.parentNode, next: Ha.nextSibling };
  function es() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(Ha);
    const o = document.createElement("button");
    o.type = "button", o.className = "primary sheetDone", o.textContent = "Done", o.addEventListener("click", sn), e.appendChild(o), Ni("Setup", e, () => {
      fr.parent.insertBefore(Ha, fr.next), mr();
    }, !1);
  }
  function mr() {
    var o, s;
    const e = i("setupSummaryName");
    e && (e.textContent = (((o = i("workoutNameInput")) == null ? void 0 : o.value) || "").trim() || ((s = Ve[ut]) == null ? void 0 : s.name) || "Move", i("setupSummaryMeta").textContent = Ft.textContent);
  }
  i("setupSummary").addEventListener("click", es), i("addFab").addEventListener("click", Po);
  function ts() {
    const e = i("strengthList");
    return ia(e) || e.closest(".exerciseScroller");
  }
  function Bi() {
    const e = i("strengthList").getBoundingClientRect(), o = (ts() || i("strengthList")).getBoundingClientRect(), s = (Bt == null ? void 0 : Bt.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(o.top + 12, Math.min(o.bottom - s - 96, o.top + o.height * 0.55 - s / 2)), width: e.width, height: s };
  }
  function Ys(e, o) {
    var I;
    const s = Bo(o, [e.name || Ia[o][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const c = document.createElement("span");
    c.className = "addGhostActions", c.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + He(e.name) + '">✕</button>', s.appendChild(c), Bt = { item: e, type: o, ghost: s };
    const h = ((I = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : I.offsetHeight) || 64;
    s.style.width = i("strengthList").getBoundingClientRect().width + "px", s.style.height = h + "px";
    const k = Bi(), E = yn.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + k.left + "px," + E + "px)", s.getBoundingClientRect(), Ie() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + k.left + "px," + k.top + "px)", c.querySelector("[data-a=end]").addEventListener("click", ri), c.querySelector("[data-a=discard]").addEventListener("click", Ks), s.addEventListener("pointerdown", Zs);
  }
  function Zs(e) {
    if (!Bt || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: o, ghost: s } = Bt, c = e.pointerId;
    try {
      s.setPointerCapture(c);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const h = s.getBoundingClientRect(), k = ts(), E = Zn({
      ghost: s,
      origin: { left: h.left, top: h.top, width: h.width, height: h.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: k,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || k,
      rowLook: !0,
      home: Bi,
      onDrop: (ke, be, dt) => {
        Bt = null, un(s), gr(o, ke, be, dt);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let I = !1;
    const te = (ke) => {
      if (ke.pointerId === c) {
        if (ke.pointerType === "mouse" && ke.buttons === 0) {
          Le(!1);
          return;
        }
        E.move(ke.clientX, ke.clientY);
      }
    }, ne = (ke) => {
      ke.pointerId === c && Le(!1);
    }, X = (ke) => {
      ke.pointerId === c && Le(!0);
    }, Z = () => Le(!1), Ce = () => Le(!0), ze = (ke) => {
      ke.key === "Escape" && (ke.preventDefault(), Le(!0));
    };
    function Le(ke) {
      I || (I = !0, window.removeEventListener("pointermove", te, !0), window.removeEventListener("pointerup", ne, !0), window.removeEventListener("pointercancel", X, !0), window.removeEventListener("keydown", ze, !0), window.removeEventListener("blur", Ce), s.removeEventListener("lostpointercapture", Z), E.drop(ke));
    }
    window.addEventListener("pointermove", te, !0), window.addEventListener("pointerup", ne, !0), window.addEventListener("pointercancel", X, !0), window.addEventListener("keydown", ze, !0), window.addEventListener("blur", Ce), s.addEventListener("lostpointercapture", Z);
  }
  function gr(e, o, s, c) {
    const h = xt(o);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = h.kind, h.group && (!e.group || e.group === "Movement") && (e.group = h.group)), h.arr.splice(Math.max(0, Math.min(s, h.arr.length)), 0, e), Un(o.closest(".exerciseScroller,.createStepSlot") || o, () => q()), Nn(o.querySelector('.moveRow[data-id="' + e.id + '"]'), c), _t(oi(Sa(e)) + " added");
  }
  function ri() {
    var c;
    if (!Bt) return;
    const { item: e, ghost: o } = Bt;
    Bt = null, un(o);
    const s = i("strengthList");
    gr(e, s, xt(s).arr.length, 0), (c = s.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || c.scrollIntoView({ block: "nearest", behavior: Ie() ? "auto" : "smooth" });
  }
  function Ks() {
    if (!Bt) return;
    const e = Bt.ghost;
    Bt = null, un(e), _t("Discarded");
  }
  function ns() {
    Bt && (Bt.ghost.remove(), Bt = null);
  }
  window.addEventListener("resize", () => {
    if (Bt != null && Bt.ghost.classList.contains("hovering")) {
      const e = Bi();
      Bt.ghost.style.width = e.width + "px", Bt.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (Md = ua == null ? void 0 : ua.addEventListener) == null || Md.call(ua, "change", () => {
    sn(), Bt && !ha() && ri(), ht();
  });
  {
    const e = i("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function po() {
    const e = i("workoutModal"), o = window.visualViewport;
    if (!e.classList.contains("open") || !ha()) {
      uo();
      return;
    }
    const s = o ? o.offsetTop : 0, c = o ? o.offsetLeft : 0, h = o ? o.width : window.innerWidth, k = o ? o.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: h + "px", height: k + "px", top: s + "px", left: c + "px" });
    const E = e.getBoundingClientRect();
    Math.abs(E.top - s) > 0.5 && (e.style.top = 2 * s - E.top + "px"), Math.abs(E.left - c) > 0.5 && (e.style.left = 2 * c - E.left + "px");
  }
  function uo() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => i("workoutModal").style.removeProperty(e));
  }
  (Cd = window.visualViewport) == null || Cd.addEventListener("resize", po), (Sd = window.visualViewport) == null || Sd.addEventListener("scroll", po), window.addEventListener("resize", po), window.addEventListener("scroll", po, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(po, 250));
  function Pi() {
    at.length > 0;
    const e = i("addMovementBtn"), o = i("addRestBtn");
    e && (e.innerHTML = he + "<span>Add movement</span>"), o && (o.innerHTML = he + "<span>Add rest</span>");
    const s = i("addVideoBtn");
    s && (s.innerHTML = he + "<span>Add video</span>");
  }
  function si() {
    const e = i("useGlobalTiming").checked, o = i("addMovementDuration"), s = i("addMovementUnit");
    o.disabled = e, s.disabled = e, o.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + Ut(M.value);
    const c = i("useGlobalRestTiming").checked, h = i("addRestDuration"), k = i("addRestUnit");
    h.disabled = c, k.disabled = c, h.parentElement.style.opacity = c ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + Ut(_.value);
  }
  let li = "movement";
  function Kn(e) {
    li = e;
    const o = i("movementFields"), s = i("restFields");
    o.hidden = e !== "movement", s.hidden = e !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), si();
  }
  function vr() {
    Ve[ut];
    const e = lt ? !0 : i("useGlobalTiming").checked, o = e ? Number(M.value) : Pa(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), s = lt ? !0 : i("useGlobalRestTiming").checked, c = s ? Number(_.value) : Pa(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (li === "rest") {
      const h = i("addRestTitle").value.trim() || "Rest", k = i("addRestGroup").value.trim() || "Rest";
      at.push({
        id: "rest-" + Date.now(),
        name: h,
        group: k,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, c || Number(_.value))
      }), q(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", _t("Rest added"), lt && (V("movements"), ve());
    } else {
      const h = i("addMovementInput").value.trim();
      if (!h) return;
      const k = i("addMovementGroup").value.trim() || "Movement";
      at.push({
        id: "movement-" + Date.now(),
        name: h,
        group: k,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, o || Number(M.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", q(), i("movementCreator").hidden = !0, _t("Movement added"), lt && (V("movements"), ve());
    }
    Pi();
  }
  let Ii = null;
  function _t(e, o) {
    const s = i("toast");
    s.innerHTML = "";
    const c = document.createElement("span");
    if (c.textContent = e, s.appendChild(c), o) {
      const h = document.createElement("button");
      h.type = "button", h.className = "toastAction", h.textContent = o.label, h.addEventListener("click", () => {
        o.run(), s.classList.remove("show", "withAction"), clearTimeout(Ii);
      }), s.appendChild(h);
    }
    s.classList.toggle("withAction", !!o), s.classList.add("show"), clearTimeout(Ii), Ii = setTimeout(() => s.classList.remove("show", "withAction"), o ? 5e3 : 2200);
  }
  const Hi = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], $s = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function as(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function Ta(e, o) {
    return Hi[as(o)];
  }
  function os(e) {
    return $s[as(e)];
  }
  function Ot(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Fa() {
    return { morning: Je().morningTime || "08:00", evening: Je().eveningTime || "19:00" };
  }
  function ho(e) {
    const [o, s] = String(e).split(":").map(Number);
    return (o || 0) * 60 + (s || 0);
  }
  function Xs(e) {
    const o = Fa();
    return e.getHours() * 60 + e.getMinutes() >= ho(o.evening) ? "evening" : "morning";
  }
  function di(e, o) {
    return st.checkins.find((s) => s.date === e && s.slot === o);
  }
  function Fi(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function ci() {
    const e = /* @__PURE__ */ new Date(), o = Ot(e), s = Xs(e), c = Fa(), h = e.getHours() * 60 + e.getMinutes();
    return s === "morning" && h < ho(c.morning) || Fi(di(o, s)) ? null : s;
  }
  const Oa = i("checkinModal"), La = i("checkinTab"), Js = i("checkinBadge"), ra = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function Oi(e) {
    const { input: o, fill: s } = ra[e];
    s.style.width = o.value + "%", o.setAttribute("aria-valuetext", Ta(e, o.value));
  }
  Object.keys(ra).forEach((e) => ra[e].input.addEventListener("input", () => Oi(e)));
  let $n = null;
  function br() {
    const e = Fa(), o = /* @__PURE__ */ new Date(), s = o.getHours() * 60 + o.getMinutes();
    return s < ho(e.morning) ? "Next check-in at " + e.morning : s < ho(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function Qs() {
    const e = Fa(), o = /* @__PURE__ */ new Date(), s = o.getHours() * 60 + o.getMinutes(), c = (h, k) => {
      const [E, I] = h.split(":").map(Number);
      return new Date(o.getFullYear(), o.getMonth(), o.getDate() + (k ? 1 : 0), E, I);
    };
    return s < ho(e.morning) ? { date: c(e.morning), time: e.morning } : s < ho(e.evening) ? { date: c(e.evening), time: e.evening } : { date: c(e.morning, !0), time: e.morning };
  }
  let wr = null, xr = null;
  function is() {
    if (ci()) {
      qa(), Wa();
      return;
    }
    const e = Qs(), o = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), s = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), h = o % 60;
    i("peekCountdown").textContent = s + ":" + String(c).padStart(2, "0") + ":" + String(h).padStart(2, "0"), i("peekAt").textContent = "Available at " + e.time;
  }
  function el() {
    is(), La.classList.add("peek"), clearInterval(xr), xr = setInterval(is, 1e3), clearTimeout(wr), wr = setTimeout(qa, 6e3);
  }
  function qa() {
    La.classList.remove("peek"), clearInterval(xr), clearTimeout(wr);
  }
  function yr() {
    const e = ci();
    if (!e) {
      La.classList.contains("peek") ? qa() : el();
      return;
    }
    $n = { date: Ot(/* @__PURE__ */ new Date()), slot: e };
    const s = di($n.date, e), c = st.checkins.find((h) => Fi(h));
    Object.keys(ra).forEach((h) => {
      ra[h].input.value = (s == null ? void 0 : s[h]) ?? (c == null ? void 0 : c[h]) ?? 50, Oi(h);
    }), i("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", Oa.classList.add("open"), Oa.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => ra.mood.input.focus());
  }
  function pi() {
    Oa.classList.remove("open"), Oa.setAttribute("aria-hidden", "true"), $n && (fa = $n.date + "-" + $n.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", fa);
    } catch {
    }
    $n = null, Wa();
  }
  function tl() {
    if (!$n) return;
    if (Fi(di($n.date, $n.slot))) {
      pi();
      return;
    }
    const { date: e, slot: o } = $n;
    let s = di(e, o);
    s || (s = { date: e, slot: o }, st.checkins.unshift(s), st.checkins = st.checkins.slice(0, 2e3)), s.mood = Number(ra.mood.input.value), s.energy = Number(ra.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), rn(), l.fire("checkin", { slot: o, mood: s.mood, energy: s.energy, mood_label: Ta("mood", s.mood), energy_label: Ta("energy", s.energy) }), _t((o === "morning" ? "Morning" : "Evening") + " check-in saved"), pi(), Wi(), za(), Gt(), la();
  }
  let fa = "";
  try {
    fa = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Wa() {
    const e = ci();
    Js.hidden = !e, La.hidden = !e, e || qa(), La.classList.toggle("due", !!e), La.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : br()), La.title = e ? "Check in now" : br();
  }
  function qi() {
    Wa();
    const e = ci();
    !e || Oa.classList.contains("open") || Je().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !Me.home.classList.contains("active") || yn.classList.contains("open") || fa !== Ot(/* @__PURE__ */ new Date()) + "-" + e && yr());
  }
  La.addEventListener("click", yr), i("checkinLater").addEventListener("click", pi), i("checkinSave").addEventListener("click", tl), Oa.addEventListener("click", (e) => {
    e.target === Oa && pi();
  }), Oa.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), pi());
  }), setInterval(qi, 3e4);
  function Wi() {
    const e = Ot(/* @__PURE__ */ new Date()), o = (s) => st.checkins.find((c) => c.date === e && c[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, c]) => {
      const h = o(s);
      i(c).textContent = h ? Ta(s, h[s]) : "—";
    });
  }
  function za() {
    const e = i("feelCard");
    if (!e) return;
    const o = /* @__PURE__ */ new Date(), s = new Date(o.getFullYear(), o.getMonth(), o.getDate() - (o.getDay() + 6) % 7), c = [...Array(7)].map((ne, X) => {
      const Z = new Date(s.getFullYear(), s.getMonth(), s.getDate() + X), Ce = Ot(Z), ze = st.checkins.filter((ke) => ke.date === Ce), Le = (ke) => {
        const be = ze.map((dt) => dt[ke]).filter((dt) => dt != null);
        return be.length ? be.reduce((dt, ct) => dt + ct, 0) / be.length : null;
      };
      return { d: Z, key: Ce, mood: Le("mood"), energy: Le("energy"), count: ze.filter(Fi).length, future: Z > o && Ce !== Ot(o) };
    }), h = (ne) => {
      const X = c.map((Z) => Z[ne]).filter((Z) => Z != null);
      return X.length ? X.reduce((Z, Ce) => Z + Ce, 0) / X.length : null;
    }, k = h("mood"), E = h("energy"), I = (ne, X) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + ne + "</span><span>" + (X == null ? "—" : He(Ta("", X))) + '</span></div><div class="feelTrack"><span style="width:' + (X == null ? 0 : Math.max(4, X)) + "%;background:" + (X == null ? "transparent" : os(X)) + '"></span></div></div>', te = c.filter((ne) => ne.mood != null && ne.energy != null).sort((ne, X) => X.mood + X.energy - (ne.mood + ne.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (k == null ? "No check-ins yet" : He(Ta("", (k + E) / 2))) + '</div><div class="weekCopy">' + (k == null ? "Your first check-in will appear here." : "on average this week" + (te ? " · best day " + He(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(te.d)) : "")) + '</div></div></div><div class="feelDays">' + c.map(
      (ne) => '<div class="weekChip feelDay' + (ne.future ? " future" : "") + (ne.key === Ot(o) ? " today" : "") + '"><div class="weekChipTop"><strong>' + He(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(ne.d)) + "</strong>" + (ne.count >= 2 ? '<span class="weekTick">' + ye("check") + "</span>" : '<span class="feelDots">' + "●".repeat(ne.count) + "</span>") + "</div>" + I("Mood", ne.mood) + I("Energy", ne.energy) + "</div>"
    ).join("") + "</div>";
  }
  const ui = i("upcomingCountSetting");
  ui.addEventListener("change", () => {
    Gn = ui.value === "all" ? "all" : Number(ui.value), Er();
  });
  const fo = i("tempoRevealBtn"), zi = i("tempoExperiment"), ma = i("tempoQuad"), mo = i("tempoDot"), nl = i("tempoEstimate"), Vi = i("tempoReadout");
  let Wt = { x: 0.5, y: 0.5 }, hi = !1, go = { total: 20, work: 45, rest: 15 };
  function Aa(e, o, s, c) {
    const h = Math.max(o, Math.min(s, e));
    return Math.round((h - o) / c) * c + o;
  }
  function fi(e, o) {
    const s = (e - 0.5) * 2, c = (o - 0.5) * 2, h = Aa(
      go.total + s * 5 + c * 8,
      Number(T.min),
      Number(T.max),
      Number(T.step)
    ), k = Aa(
      go.work + s * 10 + c * 8,
      Number(M.min),
      Number(M.max),
      Number(M.step)
    ), E = Aa(
      go.rest + s * 6 + c * 6,
      Number(_.min),
      Number(_.max),
      Number(_.step)
    );
    return T.value = h, M.value = k, _.value = E, W.textContent = k + " sec", ee.textContent = E + " sec", jt(), { total: h, work: k, rest: E };
  }
  function kr(e, o) {
    const s = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", c = o < 0.34 ? "Fast" : o > 0.66 ? "Slow" : "Balanced", h = fi(e, o);
    Vi.textContent = s + " + " + c, nl.textContent = h.total + " min", ma.setAttribute("aria-valuetext", s + " and " + c + ", estimated " + h.total + " minutes");
  }
  function Mr(e) {
    const o = ma.getBoundingClientRect(), s = Math.max(0, Math.min(1, (e.clientX - o.left) / o.width)), c = Math.max(0, Math.min(1, (e.clientY - o.top) / o.height));
    Wt = { x: s, y: c }, mo.style.left = s * 100 + "%", mo.style.top = c * 100 + "%", kr(s, c);
  }
  fo.addEventListener("click", () => {
    const e = zi.hidden;
    zi.hidden = !e, fo.setAttribute("aria-expanded", e ? "true" : "false"), fo.textContent = e ? "Now close this" : "Don’t try this!", e && (go = {
      total: Number(T.value),
      work: Number(M.value),
      rest: Number(_.value)
    }, Wt = { x: 0.5, y: 0.5 }, mo.style.left = "50%", mo.style.top = "50%", kr(Wt.x, Wt.y));
  }), a.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), a.querySelectorAll("[data-feedback-rating]").forEach((o) => o.classList.toggle("selected", o === e));
  }));
  const ji = i("testingFeedbackForm"), rs = i("testingFeedbackThanks"), al = i("testingFeedbackAgain");
  ji.addEventListener("submit", (e) => {
    e.preventDefault(), ji.hidden = !0, rs.hidden = !1, _t("Feedback captured for prototype");
  }), al.addEventListener("click", (e) => {
    e.preventDefault(), ji.reset(), a.querySelectorAll("[data-feedback-rating]").forEach((o) => o.classList.remove("selected")), rs.hidden = !0, ji.hidden = !1;
  }), ma.addEventListener("pointerdown", (e) => {
    var o;
    hi = !0, Mr(e);
    try {
      (o = ma.setPointerCapture) == null || o.call(ma, e.pointerId);
    } catch {
    }
  }), ma.addEventListener("pointermove", (e) => {
    hi && Mr(e);
  }), ma.addEventListener("pointerup", (e) => {
    hi && (hi = !1, Mr(e), q());
  }), ma.addEventListener("pointercancel", () => hi = !1), ma.addEventListener("keydown", (e) => {
    let { x: o, y: s } = Wt, c = !0;
    e.key === "ArrowLeft" ? o -= 0.05 : e.key === "ArrowRight" ? o += 0.05 : e.key === "ArrowUp" ? s -= 0.05 : e.key === "ArrowDown" ? s += 0.05 : c = !1, c && (e.preventDefault(), o = Math.max(0, Math.min(1, o)), s = Math.max(0, Math.min(1, s)), Wt = { x: o, y: s }, mo.style.left = o * 100 + "%", mo.style.top = s * 100 + "%", kr(o, s), q());
  });
  const yn = i("workoutModal");
  let Va = null;
  function Xn(e) {
    return e.map((o) => ({ ...o }));
  }
  function ol() {
    const e = Ve[ut];
    return {
      key: ut,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: Xn(Ct),
      strength: Xn(at),
      cooldown: Xn(bn),
      total: Number(T.value),
      work: Number(M.value),
      rest: Number(_.value),
      rounds: Number(Xe.value) || 1
    };
  }
  function ss(e = !1) {
    lt = !!e, pe = null, Ee = null, sn(), ns(), Va = ol(), i("moveEditorTitle").textContent = lt ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !lt, i("warmupRow").hidden = lt, i("deleteMoveOpen").hidden = lt;
    const o = i("createMoveOptions");
    o.hidden = !lt;
    {
      const s = Ve[ut];
      i("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), i("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (Tt(), lt) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const s = Ve[ut];
      No((s == null ? void 0 : s.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, Kn("movement"), Pi(), si(), zi.hidden = !0, fo.setAttribute("aria-expanded", "false"), fo.textContent = "Don’t try this!", yn.classList.toggle("createMode", lt), yn.querySelector(".modal").classList.toggle("createMode", lt), yn.classList.add("open"), yn.setAttribute("aria-hidden", "false"), po(), lt && Te();
  }
  function Tn() {
    const e = Ve[ut];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Tt() {
    const e = Tn(), o = i("warmupSwitch");
    o.classList.toggle("on", e), o.setAttribute("aria-checked", String(e));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const e = Ve[ut];
    e && (e.customSequence ? (i("includeWarmupPreset").checked = !e.includeWarmup, D()) : (e.warmupOff = !e.warmupOff, q()), Tt());
  });
  function Bn() {
    sn(), ns(), uo(), Ee = null, pe = null, yn.classList.contains("createMode") && v(), yn.classList.remove("createMode"), yn.querySelector(".modal").classList.remove("createMode"), yn.classList.remove("open"), yn.setAttribute("aria-hidden", "true");
  }
  function Gi() {
    if (!Va) return;
    const e = Va;
    e.profile && (Ve[e.key] = JSON.parse(JSON.stringify(e.profile))), ut = e.key, Ct = Xn(e.warmup), at = Xn(e.strength), bn = Xn(e.cooldown), T.value = e.total, M.value = e.work, _.value = e.rest, Xe.value = e.rounds || 1;
    const o = Ve[ut];
    if (o) {
      a.querySelectorAll(".workoutPanel[data-workout]").forEach((c) => c.classList.toggle("active", c.dataset.workout === ut));
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const c = s.querySelector(".workoutName");
        c && (c.textContent = o.name);
        const h = s.querySelector(".panelCollapsedText");
        h && (h.textContent = o.name);
        const k = s.querySelector(".sourceTag");
        k && (k.textContent = o.source);
      }
      f.value = o.name;
    }
    q();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (lt) {
      const e = ut;
      delete Ve[e], lt = !1, mt = null, Rn(st.order.find((o) => Ve[o]) || Object.keys(Ve)[0]);
    } else
      Gi();
    Bn();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    sn(), Bt && ri();
    const e = Ve[ut], o = f.value.trim() || "New move";
    if (e && (e.name = o), Lt(), pe = null, q(), lt && e)
      Do(ut, e), a.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === ut)), lt = !1, mt = null, st.order.includes(ut) || st.order.push(ut), _t("Move created");
    else {
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const c = s.querySelector(".workoutName");
        c && (c.textContent = o);
        const h = s.querySelector(".panelCollapsedText");
        h && (h.textContent = o);
      }
      _t("Move saved");
    }
    Va = null, Bn(), rn();
  }), yn.addEventListener("click", (e) => {
    if (e.target === yn) {
      if (lt) {
        const o = ut;
        delete Ve[o], lt = !1, mt = null, Rn(st.order.find((s) => Ve[s]) || Object.keys(Ve)[0]);
      } else
        Gi();
      Bn();
    }
  }), pa(i("addMovementBtn"), "movement"), pa(i("addRestBtn"), "rest"), pa(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", si), i("useGlobalRestTiming").addEventListener("change", si), a.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    No(e.dataset.movePreset, !0), q();
  })), i("includeWarmupPreset").addEventListener("change", D), i("includeCooldownPreset").addEventListener("change", D), i("includeWarmupPreset").addEventListener("change", ve), i("includeCooldownPreset").addEventListener("change", ve), f.addEventListener("input", ve), f.addEventListener("input", mr), i("confirmAddMovement").addEventListener("click", vr), i("confirmAddRest").addEventListener("click", vr), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && vr();
  });
  const Ea = i("countdown"), mi = i("countNum"), fn = i("countdownPixelCanvas");
  let ja = null, Ga = "appear";
  class Jt {
    constructor(o, s, c, h, k, E, I) {
      this.width = o.width, this.height = o.height, this.ctx = s, this.x = c, this.y = h, this.color = k, this.speed = (Math.random() * 0.8 + 0.1) * E, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = I, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Io = [], gi = 1, Cr = 1;
  function Ua() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function ls() {
    var ne;
    if (!fn) return;
    const e = Ua(), o = Math.max(1, window.innerWidth / e), s = Math.max(1, window.innerHeight / e);
    gi = o, Cr = s;
    const c = Math.min(window.devicePixelRatio || 1, 2);
    fn.width = Math.floor(o * c), fn.height = Math.floor(s * c), fn.style.width = o + "px", fn.style.height = s + "px";
    const h = fn.getContext("2d");
    h.setTransform(c, 0, 0, c, 0, 0);
    const k = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], E = 12, I = (ne = window.matchMedia) == null ? void 0 : ne.call(window, "(prefers-reduced-motion: reduce)").matches, te = I ? 0 : 0.055;
    Io = [];
    for (let X = 0; X < o; X += E)
      for (let Z = 0; Z < s; Z += E) {
        const Ce = X - o / 2, ze = Z - s / 2, Le = Math.sqrt(Ce * Ce + ze * ze), ke = I ? 0 : Math.random() * 75 + Le * 0.05, be = new Jt({ width: o, height: s }, h, X, Z, k[Math.floor(Math.random() * k.length)], te, ke);
        be.maxSizeInteger = 4, be.maxSize = Math.random() * 3.2 + 0.8, be.sizeStep = 0.35 + Math.random() * 0.45, Io.push(be);
      }
  }
  function Sr(e) {
    cancelAnimationFrame(ja), Ga = e;
    const o = fn == null ? void 0 : fn.getContext("2d");
    if (!o) return;
    function s() {
      o.clearRect(0, 0, gi, Cr);
      let c = !0;
      Io.forEach((h) => {
        h[Ga](), h.isIdle || (c = !1);
      }), Ga === "disappear" && c || (ja = requestAnimationFrame(s));
    }
    ja = requestAnimationFrame(s);
  }
  function Ui() {
    cancelAnimationFrame(ja), ls(), Sr("appear"), setTimeout(() => Sr("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Ea.classList.contains("active") && Ui();
  });
  const Ya = i("pixelTrailCanvas"), ln = Ya.getContext("2d");
  let Jn = !0, vo = 0.7, bo = 600, wo = [], Ho = null, kn = { x: 0, y: 0, ready: !1 };
  function vi() {
    const e = p.getBoundingClientRect(), o = Ua(), s = Math.min(window.devicePixelRatio || 1, 2), c = Math.max(1, e.width / o), h = Math.max(1, e.height / o);
    Ya.width = Math.max(1, Math.floor(c * s)), Ya.height = Math.max(1, Math.floor(h * s)), Ya.style.width = c + "px", Ya.style.height = h + "px", ln.setTransform(s, 0, 0, s, 0, 0);
  }
  function il(e, o) {
    if (!Jn) return;
    const s = performance.now();
    kn.ready || (kn = { x: e, y: o, ready: !0 });
    const c = 7;
    for (let h = 1; h <= c; h++) {
      const k = h / c;
      wo.push({
        x: kn.x + (e - kn.x) * k,
        y: kn.y + (o - kn.y) * k,
        born: s - (c - h) * 10
      });
    }
    kn = { x: e, y: o, ready: !0 };
  }
  function Fo(e) {
    if (Ho = null, !g) return;
    if (!Me.workout.classList.contains("active")) {
      Ho = requestAnimationFrame(Fo);
      return;
    }
    const o = p.getBoundingClientRect(), s = Ua();
    ln.clearRect(0, 0, o.width / s, o.height / s), Jn && (wo = wo.filter((h) => e - h.born < bo), ln.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", wo.forEach((h) => {
      const k = (e - h.born) / bo, E = (1 - k) * vo, I = Math.round(h.x / 14) * 14, te = Math.round(h.y / 14) * 14;
      ln.globalAlpha = Math.max(0, E);
      const ne = 2 + 5 * (1 - k) * vo;
      ln.fillRect(I - ne / 2, te - ne / 2, ne, ne);
    }), ln.globalAlpha = 1), Ho = requestAnimationFrame(Fo);
  }
  p.addEventListener("pointermove", (e) => {
    const o = p.getBoundingClientRect(), s = Ua();
    il((e.clientX - o.left) / s, (e.clientY - o.top) / s);
  }), p.addEventListener("pointerleave", () => kn.ready = !1), new ResizeObserver(vi).observe(p), vi(), Ho = requestAnimationFrame(Fo);
  const Za = i("movementRippleCanvas"), Pt = Za.getContext("2d");
  let Ln = !0, An = null, Mn = performance.now();
  function ga() {
    const e = Za.parentElement.getBoundingClientRect(), o = Ua(), s = Math.max(1, e.width / o), c = Math.max(1, e.height / o), h = Math.min(window.devicePixelRatio || 1, 2);
    Za.width = Math.max(1, Math.floor(s * h)), Za.height = Math.max(1, Math.floor(c * h)), Za.style.width = s + "px", Za.style.height = c + "px", Pt.setTransform(h, 0, 0, h, 0, 0);
  }
  function Yi() {
    var e;
    return At || ((e = De[je]) == null ? void 0 : e.kind) === "rest";
  }
  function bi() {
    const e = De[je];
    return Yi() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function wi(e) {
    if (An = null, !g) return;
    if (!Me.workout.classList.contains("active")) {
      An = requestAnimationFrame(wi);
      return;
    }
    const o = Za.parentElement.getBoundingClientRect(), s = Ua(), c = Math.max(1, o.width / s), h = Math.max(1, o.height / s);
    if (Pt.clearRect(0, 0, c, h), Ln) {
      const k = bi(), E = (e - Mn) % k / k, I = 15, te = Math.max(8, Math.round(I * h / Math.max(1, c))), ne = c / (I + 1), X = h / (te + 1), Z = c * 0.5, Ce = h * 0.52, ze = Math.hypot(Z, Ce), ke = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let be = 1; be <= te; be++)
        for (let dt = 1; dt <= I; dt++) {
          const ct = dt * ne, Ae = be * X, pt = Math.hypot(ct - Z, Ae - Ce) / ze, kt = Yi(), Qe = kt ? Math.exp(-Math.pow((pt - (E * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, Ye = Math.exp(-Math.pow((pt - E * 1.25) * 7, 2)), Xt = kt ? Qe : Ye, gn = kt ? 0.5 + 0.5 * Math.sin(E * Math.PI * 2 - pt * 3) ** 2 : 0.35 + 0.65 * Math.sin(E * Math.PI * 2 - pt * 5) ** 2, Ht = kt ? 1.4 + Xt * 4.2 * gn : 1.2 + Xt * 5 * gn;
          Pt.beginPath(), Pt.arc(ct, Ae, Ht, 0, Math.PI * 2), Pt.fillStyle = `rgba(${ke},${kt ? 0.08 + Xt * 0.48 : 0.05 + Xt * 0.55})`, Pt.fill();
        }
    }
    An = requestAnimationFrame(wi);
  }
  new ResizeObserver(ga).observe(Za.parentElement), ga(), An = requestAnimationFrame(wi);
  const xi = i("exerciseTitle"), _a = i("exerciseMeta"), mn = i("stepLabel"), Ka = i("digits"), Tr = i("fill"), Oo = i("progress"), Lr = i("pause"), ds = i("nextName"), cs = i("nextMeta"), ps = i("nextIcon"), Zi = i("skipNextSession");
  let Pn = null;
  function In(e) {
    for (let o = Math.max(0, e); o < De.length; o++)
      if (!De[o].sessionHidden) return o;
    return -1;
  }
  function En() {
    const e = De[je];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (At) {
      const c = In(je + 1), h = c >= 0 ? De[c] : null;
      return h ? { name: h.name, meta: $i(h), icon: Ki(h) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const o = In(je + 1), s = o >= 0 ? De[o] : null;
    return s ? { name: s.name, meta: $i(s), icon: Ki(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Ar() {
    if (!De[je]) return De.length;
    const o = In(je + 1);
    return o < 0 ? De.length : o + 1;
  }
  function Ki(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function $i(e) {
    return e.kind === "video" ? "YouTube · " + rt(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function qo() {
    return De.length && De[De.length - 1].round || 1;
  }
  function us(e) {
    const o = De[e];
    if (!o) return "";
    const s = qo();
    if (s <= 1) return "Step " + (e + 1) + " of " + De.length;
    if (o.roundBreak) return "Round " + o.round + " of " + s + " · Rest";
    const c = De.filter((h) => h.round === o.round && !h.roundBreak).length;
    return "Round " + o.round + " of " + s + " · Step " + (o.roundIndex + 1) + " of " + c;
  }
  function hs() {
    return Oo.querySelector('[data-step="' + je + '"]');
  }
  function rl() {
    De[je] && Number(Oo.dataset.round) !== (De[je].round || 1) && Ji(), [...Oo.children].forEach((e) => {
      const o = Number(e.dataset.step);
      e.classList.toggle("done", o < je), e.classList.toggle("active", o === je), e.classList.toggle("rewindable", o <= je), e.disabled = o > je, o === je && e.style.setProperty("--segment-progress", "0%");
    }), De[je] && (mn.textContent = us(je), Qa());
  }
  function fs(e) {
    const o = De.indexOf(e);
    o < 0 || o <= je || (e.sessionHidden = !e.sessionHidden, xo(), _t((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function Er() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const o = Ar(), s = De.slice(o);
    (Gn === "all" ? s : s.slice(0, Math.max(1, Number(Gn) || 1))).forEach((h) => {
      const k = document.createElement("section");
      k.className = "upcomingCard" + (h.sessionHidden ? " sessionHidden" : "") + (r(h) ? " noMeta" : ""), k.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + ye(Ki(h)) + '</div><div><div class="upcomingName">' + He(h.name) + '</div><div class="upcomingMeta">' + He($i(h)) + (qo() > 1 ? " · round " + h.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (h.sessionHidden ? "Include this session" : "Skip this session") + "</button>", k.querySelector(".skipSessionBtn").addEventListener("click", () => fs(h)), e.appendChild(k);
    });
  }
  function xo() {
    var o;
    const e = En();
    ds.textContent = e.name, cs.textContent = e.meta, ps.innerHTML = ye(e.icon);
    {
      const s = At ? De[In(je + 1)] : ((o = De[je]) == null ? void 0 : o.rest) > 0 ? { kind: "rest" } : De[In(je + 1)];
      a.querySelector(".nextCard").classList.toggle("noMeta", !!(s && r(s)));
    }
    if (Pn = null, At) {
      const s = In(je + 1);
      s >= 0 && (Pn = De[s]);
    } else {
      const s = De[je];
      if (s && s.rest > 0)
        Pn = null;
      else {
        const c = In(je + 1);
        c >= 0 && (Pn = De[c]);
      }
    }
    Zi && (Zi.hidden = !Pn, Zi.textContent = Pn != null && Pn.sessionHidden ? "Include this session" : "Skip this session"), Er();
  }
  Zi.addEventListener("click", () => {
    Pn && (Pn.sessionHidden = !Pn.sessionHidden, _t((Pn.sessionHidden ? "Hidden " : "Included ") + Pn.name + " for this session"), xo());
  });
  let sa = null, Xi = null;
  function Wo(e, o = {}) {
    const s = Ve[ut];
    l.fire(e, { move: (s == null ? void 0 : s.name) || "", move_id: ut, ...o });
  }
  function _r() {
    const e = Ve[ut];
    sa = { key: ut, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Xi), Xi = setInterval(() => {
      sa && !wn && sa.active++;
    }, 1e3), Wo("started", { steps: De.length });
  }
  function zo(e) {
    if (clearInterval(Xi), !sa) return;
    const o = sa;
    sa = null, Wo(e ? "completed" : "ended", { seconds: o.active }), !(o.active < 30) && (st.history.unshift({ id: "h-" + o.startedAt, move_id: o.key, name: o.name, start: new Date(o.startedAt).toISOString(), seconds: o.active, completed: e }), st.history = st.history.slice(0, 1e3), rn(), Gt(), la());
  }
  function sl() {
    y("workout"), ll();
    const e = In(0);
    e >= 0 && De[e].kind === "video" && Nr(De[e]);
  }
  function yi() {
    Go(), zo(!1), clearInterval(Nt), clearInterval(lo), At = !1, Hn(!1), i("app").classList.remove("resting"), Ea.classList.remove("active"), y("home");
  }
  function ll() {
    Ea.classList.add("active");
    let e = 5;
    mi.textContent = e, requestAnimationFrame(Ui), clearInterval(lo), lo = setInterval(() => {
      e--, e > 0 ? (mi.textContent = e, Ui()) : (clearInterval(lo), mi.textContent = "GO", Ui(), setTimeout(() => {
        Ea.classList.remove("active"), cancelAnimationFrame(ja), $a();
      }, 650));
    }, 1e3);
  }
  function Ji() {
    var o;
    Oo.innerHTML = "";
    const e = ((o = De[Math.max(0, je)] || De[0]) == null ? void 0 : o.round) || 1;
    Oo.dataset.round = e, De.forEach((s, c) => {
      if ((s.round || 1) !== e) return;
      const h = document.createElement("button");
      h.dataset.step = c, h.type = "button", h.className = "progressSegment", h.setAttribute("aria-label", "Go to " + s.name), h.addEventListener("click", () => {
        c <= je && ms(c);
      }), Oo.appendChild(h);
    });
  }
  function Hn(e) {
    e = !!e;
    const o = wn !== e;
    if (wn = e, Lr.textContent = e ? "Resume" : "Pause", i("app").classList.toggle("paused", e), dn && Dt)
      try {
        e ? Dt.pauseVideo() : Dt.playVideo();
      } catch {
      }
    o && sa && Wo(e ? "paused" : "resumed");
  }
  function ms(e) {
    e < 0 || e >= De.length || e > je || (clearInterval(Nt), At = !1, i("app").classList.remove("resting"), je = e, Hn(!1), Ja(), Nt = setInterval(eo, 1e3));
  }
  function $a() {
    if (je = In(0), Hn(!1), Ji(), je < 0) {
      xi.textContent = "No activities", _a.textContent = "Open Edit and enable or add a movement", _a.hidden = !1;
      return;
    }
    _r(), Ja(), clearInterval(Nt), Nt = setInterval(eo, 1e3);
  }
  const Dr = i("videoStage"), Xa = i("videoSound"), dl = 0, Kt = 1, cl = 2;
  let Qi = 0, Vo = null, jo = null, Dt = null, ot = null, ki = 0, yo = !1, dn = null, va = null;
  function Rr() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : Vo || (Vo = new Promise((o, s) => {
      const c = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          c == null || c();
        } catch {
        }
      };
      const h = setInterval(() => {
        var E;
        (E = window.YT) != null && E.Player && (clearInterval(h), clearTimeout(k), o(window.YT));
      }, 100), k = setTimeout(() => {
        clearInterval(h), Vo = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const E = document.createElement("script");
        E.src = "https://www.youtube.com/iframe_api", E.async = !0, E.onerror = () => {
          clearInterval(h), clearTimeout(k), Vo = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(E);
      }
    }), Vo);
  }
  function gs() {
    return jo || (jo = Rr().then((e) => new Promise((o) => {
      const s = document.createElement("div");
      i("videoFrame").appendChild(s), Dt = new e.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => o(Dt), onStateChange: (c) => Pr(c.data), onError: (c) => er(c.data) }
      });
    })), jo.catch(() => {
      jo = null;
    }), jo);
  }
  function Nr(e) {
    !(e != null && e.videoId) || e.videoError || gs().then((o) => {
      dn || ot === e.videoId || (ot = e.videoId, ki = Number(e.start) || 0, yo = !1, o.mute(), o.loadVideoById({ videoId: e.videoId, startSeconds: ki }));
    }).catch(() => {
    });
  }
  function Br() {
    const e = In(je + 1);
    e >= 0 && De[e].kind === "video" && Nr(De[e]);
  }
  function Pr(e) {
    if (!dn) {
      e === Kt && !yo && (yo = !0, Dt.pauseVideo(), Dt.seekTo(ki, !0));
      return;
    }
    Dr.classList.toggle("playing", e === Kt), De[je] === dn && performance.now() > Qi && (e === Kt && wn ? Hn(!1) : e === cl && !wn && Hn(!0)), e === Kt && Fr(dn.videoId, Dt.getDuration()) && rn(), e === dl && Uo();
  }
  function er(e) {
    const o = dn;
    if (!o) {
      ot = null;
      return;
    }
    e === 101 || e === 150 ? (tr(o.videoId), _t("That video can’t play outside YouTube, so it was skipped")) : _t("The video couldn’t play, so it was skipped"), Uo();
  }
  function Ir(e) {
    if (i("app").classList.add("videoStep"), Xa.hidden = !0, dn = e, clearTimeout(va), !e.videoId) {
      _t("This video step has no link yet, so it was skipped"), setTimeout(() => Uo(), 0);
      return;
    }
    gs().then((o) => {
      if (dn !== e) return;
      Qi = performance.now() + 1500;
      const s = Number(e.start) || 0;
      ot !== e.videoId ? (ot = e.videoId, ki = s, o.loadVideoById({ videoId: e.videoId, startSeconds: s })) : (o.seekTo(s, !0), o.playVideo()), o.unMute(), wn && o.pauseVideo(), va = setTimeout(() => {
        dn !== e || wn || (o.getPlayerState() !== Kt ? (o.mute(), o.playVideo(), Xa.hidden = !1) : o.isMuted() && (Xa.hidden = !1));
      }, 1600);
    }).catch(() => {
      dn === e && (_t("YouTube didn’t load, so the video was skipped"), Uo());
    });
  }
  function Hr() {
    if (!i("app").classList.contains("videoStep")) return;
    const e = a.querySelector(".workGrid"), o = a.querySelector(".sessionControlRow"), s = e.getBoundingClientRect().top, c = (o == null ? void 0 : o.offsetHeight) || 42, h = window.innerHeight - s - 16 - c - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(h)) + "px");
  }
  window.addEventListener("resize", Hr);
  function Go() {
    clearTimeout(va);
    const e = dn;
    if (dn = null, i("app").classList.remove("videoStep"), Dr.classList.remove("playing"), Xa.hidden = !0, e && Dt) {
      try {
        Dt.pauseVideo();
      } catch {
      }
      ot = null;
    }
  }
  function Uo() {
    const e = dn;
    !e || De[je] !== e || (Go(), clearInterval(Nt), Da(), Nt = setInterval(eo, 1e3));
  }
  Xa.addEventListener("click", () => {
    Dt && (Dt.unMute(), Dt.playVideo()), Xa.hidden = !0;
  });
  function Mi(e) {
    var c;
    const o = Number(e.start) || 0;
    if (e.useVideoLength === !1) return o + (Number(e.duration) || 300);
    const s = Dt && dn === e && Number((c = Dt.getDuration) == null ? void 0 : c.call(Dt)) || 0;
    return Number(e.end) || s || Number(e.videoDuration) || o + (Number(e.duration) || 300);
  }
  function Ci(e, o) {
    const s = Ve[ut];
    [Ct, at, bn, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((c) => (Array.isArray(c) ? c : []).forEach((h) => {
      h && h.kind === "video" && h.videoId === e && o(h);
    }));
  }
  function Fr(e, o) {
    o = Math.round(Number(o) || 0);
    let s = !1;
    return e && o > 0 && Ci(e, (c) => {
      c.videoDuration !== o && (c.videoDuration = o, s = !0);
    }), s;
  }
  function tr(e) {
    Ci(e, (o) => {
      o.videoError = "embed";
    }), rn();
  }
  function vs(e) {
    const o = e.videoId;
    if (!o) return;
    const s = () => {
      yn.classList.contains("open") ? pe || q() : (q(), rn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + o)).then((c) => c.ok ? c.json() : Promise.reject(c.status)).then((c) => {
      e.videoId === o && (e.videoTitle = c.title || "", e.autoName && c.title && (e.name = c.title), s());
    }).catch((c) => {
      e.videoId === o && c === 401 && (e.videoError = "embed", s());
    }), pl(o).then((c) => {
      Fr(o, c) && s();
    }).catch((c) => {
      c === "embed" && e.videoId === o && (e.videoError = "embed", s());
    });
  }
  function pl(e) {
    return Rr().then((o) => new Promise((s, c) => {
      const h = document.createElement("div");
      h.className = "videoProbe", h.setAttribute("aria-hidden", "true");
      const k = document.createElement("div");
      h.appendChild(k), i("app").appendChild(h);
      let E = null, I = !1;
      const te = (Z, Ce) => {
        I || (I = !0, clearTimeout(ne), setTimeout(() => {
          try {
            E == null || E.destroy();
          } catch {
          }
          h.remove();
        }, 0), Ce ? c(Ce) : s(Z));
      }, ne = setTimeout(() => te(0), 2e4), X = () => {
        var Ce;
        const Z = Number((Ce = E == null ? void 0 : E.getDuration) == null ? void 0 : Ce.call(E)) || 0;
        return Z > 0 && te(Z), Z > 0;
      };
      E = new o.Player(k, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            X() || (E.mute(), E.playVideo());
          },
          onStateChange: () => X(),
          onError: (Z) => te(0, Z.data === 101 || Z.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Ja() {
    At = !1;
    const e = De[je];
    i("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? Ir(e) : Go(), Yt = e.duration, cn = e.duration, xi.textContent = e.name, _a.textContent = e.group, _a.hidden = !0, mn.textContent = us(je), sa && Wo("step", { name: e.name, group: e.group, kind: e.kind, step: je + 1, of: De.length, round: e.round || 1, rounds: qo(), duration: e.duration }), xo(), rl(), Br(), e.kind === "video" && setTimeout(Hr, 0);
  }
  function Qa() {
    var h;
    const e = ((h = De[je]) == null ? void 0 : h.kind) === "video" && !At, o = e && Yt >= 60;
    Ka.textContent = o ? rt(Yt) : Yt, Ka.classList.toggle("long", o), e && (i("videoClock").textContent = rt(Yt) + " left");
    const s = Yt / cn * 100;
    Tr.style.width = s + "%";
    const c = hs();
    if (c && !At) {
      const k = 100 - s;
      c.style.setProperty("--segment-progress", k + "%");
    }
  }
  function eo() {
    var o, s;
    if (wn) return;
    const e = De[je];
    if ((e == null ? void 0 : e.kind) === "video" && !At && dn === e) {
      const c = Number((o = Dt == null ? void 0 : Dt.getCurrentTime) == null ? void 0 : o.call(Dt)) || 0, h = Number(e.start) || 0, k = Mi(e);
      cn = Math.max(1, k - h), (c > h || ((s = Dt == null ? void 0 : Dt.getPlayerState) == null ? void 0 : s.call(Dt)) === Kt) && (Yt = Math.max(0, Math.ceil(k - c))), Qa(), c > h && c >= k - 0.25 && Uo();
      return;
    }
    Yt--, Qa(), Yt <= 0 && (e.rest > 0 ? Or(e.rest) : Da());
  }
  function Or(e) {
    var s;
    At = !0, i("app").classList.add("resting");
    const o = hs();
    o && o.style.setProperty("--segment-progress", "100%"), clearInterval(Nt), Yt = e, cn = e, sa && Wo("rest", { duration: e }), xi.textContent = "Rest", _a.textContent = (s = De[je]) != null && s.roundBreakAfter ? "Round " + (De[je].round + 1) + " next" : "Recovery", xo(), Qa(), Nt = setInterval(() => {
      wn || (Yt--, Qa(), Yt <= 0 && (clearInterval(Nt), Da(), Nt = setInterval(eo, 1e3)));
    }, 1e3);
  }
  function Da() {
    At = !1;
    const e = In(je + 1);
    if (e >= 0)
      je = e, Ja();
    else {
      clearInterval(Nt), Go(), Hn(!1), i("app").classList.remove("resting"), xi.textContent = "Complete", _a.textContent = "Move finished", _a.hidden = !1, Ka.textContent = "✓";
      {
        const o = qo();
        mn.textContent = o > 1 ? o + " rounds done" : De.filter((s) => !s.roundBreak).length + " steps done";
      }
      zo(!0);
      {
        const o = Qn(7).reduce((s, c) => s + c.minutes, 0);
        _a.textContent = "Move finished · " + o + " min in the last 7 days";
      }
      Tr.style.width = "100%", xo();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    bs(), Hn(!1);
  });
  function bs() {
    clearInterval(Nt);
    const e = De[je];
    if (At) {
      At = !1, i("app").classList.remove("resting");
      const s = In(je + 1);
      s >= 0 ? (je = s, Ja(), Nt = setInterval(eo, 1e3)) : Da();
      return;
    }
    if (e && e.rest > 0) {
      Or(e.rest);
      return;
    }
    const o = In(je + 1);
    o >= 0 ? (je = o, Ja(), Nt = setInterval(eo, 1e3)) : Da();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(Nt), Hn(!1), At) {
      const e = De[je];
      Yt = e.rest, cn = e.rest, xi.textContent = "Rest", _a.textContent = "Recovery", i("app").classList.add("resting"), xo(), Qa();
    } else
      Ja();
    Nt = setInterval(At ? () => {
      wn || (Yt--, Qa(), Yt <= 0 && (clearInterval(Nt), Da(), Nt = setInterval(eo, 1e3)));
    } : eo, 1e3);
  });
  function Ra(e, o, s, c) {
    let h = 0, k = null, E = !1;
    function I() {
      k && cancelAnimationFrame(k), k = null, h = 0, E = !1, o.style.width = "0%", e.classList.remove("holding");
    }
    function te(Z) {
      if (!E) return;
      h || (h = Z);
      const Ce = Math.min(1, (Z - h) / s);
      if (o.style.width = Ce * 100 + "%", Ce >= 1) {
        E = !1, k && cancelAnimationFrame(k), k = null, o.style.width = "100%", setTimeout(() => o.style.width = "0%", 90), c();
        return;
      }
      k = requestAnimationFrame(te);
    }
    function ne(Z) {
      var Ce;
      if (!(Z && Z.button !== void 0 && Z.button !== 0)) {
        Z == null || Z.preventDefault(), I(), E = !0, e.classList.add("holding");
        try {
          (Ce = e.setPointerCapture) == null || Ce.call(e, Z.pointerId);
        } catch {
        }
        k = requestAnimationFrame(te);
      }
    }
    function X() {
      E && I();
    }
    e.addEventListener("pointerdown", ne), e.addEventListener("pointerup", X), e.addEventListener("pointercancel", X), e.addEventListener("lostpointercapture", X), e.addEventListener("keydown", (Z) => {
      (Z.key === " " || Z.key === "Enter") && !Z.repeat && ne(Z);
    }), e.addEventListener("keyup", (Z) => {
      (Z.key === " " || Z.key === "Enter") && X();
    });
  }
  const ul = i("endWorkout");
  Ra(ul, i("holdEndFill"), 1500, yi);
  const Yo = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    Yo.classList.add("open"), Yo.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    Yo.classList.remove("open"), Yo.setAttribute("aria-hidden", "true");
  });
  function ws() {
    const e = ut, o = a.querySelector('.workoutPanel[data-workout="' + e + '"]');
    o && o.remove(), delete Ve[e], st.order = st.order.filter((c) => c !== e);
    let s = a.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const c = "custom-" + Date.now();
      Ve[c] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, st.order.push(c), s = Do(c, Ve[c]);
    }
    Yo.classList.remove("open"), Yo.setAttribute("aria-hidden", "true"), Va = null, Bn(), Rn(s.dataset.workout), rn(), _t("Move deleted");
  }
  Ra(i("deleteMoveYes"), i("deleteMoveFill"), 1500, ws);
  const nr = a.querySelector(".rubberTabs"), to = i("rubberIndicator");
  function Na(e, o = !0) {
    if (!e || !nr || !to) return;
    const s = nr.getBoundingClientRect(), c = e.getBoundingClientRect();
    to.style.transition = o ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const h = Ua();
    to.style.left = (c.left - s.left) / h + nr.scrollLeft + "px", to.style.width = c.width / h + "px", o && (to.style.transform = "scaleX(1.08)", setTimeout(() => to.style.transform = "scaleX(1)", 180));
  }
  a.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), a.querySelectorAll(".tab").forEach((o) => o.classList.remove("active")), a.querySelectorAll(".settingsPane").forEach((o) => o.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), Na(e, !0);
  })), requestAnimationFrame(() => Na(a.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Na(a.querySelector(".tab.active"), !1));
  const ko = i("pixelTrailToggle"), ar = i("rippleToggle"), Mo = i("trailStrength"), Co = i("trailLife");
  function Fn(e, o) {
    Je()[e] = o, rn();
  }
  const t = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function n(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function r(e) {
    var o;
    return !!((o = Je().hideMeta) != null && o[n(e)]);
  }
  function d() {
    const e = /* @__PURE__ */ new Map(), o = (s, c, h) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const k = n(s);
      let E = e.get(k);
      E || (E = { key: k, label: k === "rest" ? "Rest" : k === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(k, E)), E.kinds.add(k === "rest" ? "Rest" : k === "video" ? "Video" : c), E.moves.add(h), E.count++;
    };
    return Object.values(Ve).forEach((s) => {
      const c = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Ze)).forEach((h) => o(h, "Warm-up", c)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((h) => o(h, h.presetRole === "warmup" ? "Warm-up" : h.presetRole === "cooldown" ? "Cooldown" : "Movement", c)), (s.cooldown || (s.customSequence ? [] : on)).forEach((h) => o(h, "Cooldown", c));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, c]) => {
      e.has(s) || e.set(s, { key: s, label: c, kinds: /* @__PURE__ */ new Set([c]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, c) => t.indexOf(s.kind) - t.indexOf(c.kind) || s.label.localeCompare(c.label));
  }
  let u = "all";
  function S() {
    const e = i("metaSearch").value.trim().toLowerCase();
    return d().filter((o) => (u === "all" || o.kind === u) && (!e || o.label.toLowerCase().includes(e) || o.moves.some((s) => s.toLowerCase().includes(e))));
  }
  function m() {
    const e = i("metaTableBody");
    if (!e) return;
    const o = Je().hideMeta || {}, s = S();
    e.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((h) => {
      const k = !o[h.key], E = h.count ? (h.moves.length > 2 ? h.moves.slice(0, 2).join(", ") + " + " + (h.moves.length - 2) + " more" : h.moves.join(", ")) + " · " + h.count + " step" + (h.count === 1 ? "" : "s") : "Not used yet", I = document.createElement("tr");
      I.className = k ? "" : "off", I.innerHTML = '<td><div class="metaType">' + He(h.label) + '</div><div class="metaSub">' + He(h.kind + " · " + E) + '</div></td><td class="metaKindCol">' + He(h.kind) + '</td><td class="metaUsedCol">' + He(E) + '</td><td class="metaSwitchCol"><button class="switch' + (k ? " on" : "") + '" type="button" role="switch" aria-checked="' + k + '" aria-label="Second line for ' + He(h.label) + ' on phones"></button></td>', I.querySelector(".switch").addEventListener("click", () => w([h.key], k)), e.appendChild(I);
    });
    const c = s.filter((h) => o[h.key]).length;
    i("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (c ? " · " + c + " hidden on phones" : "") : "";
  }
  function w(e, o) {
    const s = { ...Je().hideMeta || {} };
    e.forEach((c) => {
      o ? s[c] = !0 : delete s[c];
    }), Fn("hideMeta", s), m(), ht(), xo();
  }
  i("metaSearch").addEventListener("input", m), i("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    u = e.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((o) => o.classList.toggle("active", o === e)), m();
  })), i("metaHideAll").addEventListener("click", () => w(S().map((e) => e.key), !0)), i("metaShowAll").addEventListener("click", () => w(S().map((e) => e.key), !1));
  const R = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...Je().toggles || {} };
  function j() {
    a.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", R[s.dataset.toggle] !== !1)), a.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, c]) => {
      i(c).hidden = R[s] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((s) => R[s] !== !1);
    a.querySelector(".activityCard").hidden = !e, i("weatherCard").hidden = !0;
    const o = a.querySelector("#homeView .grid");
    o.classList.toggle("noActivity", !e), o.classList.toggle("noWeather", !0);
  }
  a.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    R[e.dataset.toggle] = R[e.dataset.toggle] === !1, j(), Fn("toggles", { ...R });
  })), j();
  function F() {
    ko.classList.toggle("on", Jn), ar.classList.toggle("on", Ln), Mo.value = Math.round(vo * 100), i("trailStrengthValue").textContent = Mo.value + "%", Co.value = bo, i("trailLifeValue").textContent = Co.value + " ms";
  }
  Je().trailEnabled !== void 0 && (Jn = Je().trailEnabled), Je().rippleEnabled !== void 0 && (Ln = Je().rippleEnabled), Je().trailStrength !== void 0 && (vo = Je().trailStrength), Je().trailMaxAge !== void 0 && (bo = Je().trailMaxAge), F(), ko.addEventListener("click", () => {
    Jn = !Jn, ko.classList.toggle("on", Jn), Jn || (wo = []), Fn("trailEnabled", Jn);
  }), ar.addEventListener("click", () => {
    Ln = !Ln, ar.classList.toggle("on", Ln), Fn("rippleEnabled", Ln);
  }), Mo.addEventListener("input", () => {
    vo = Number(Mo.value) / 100, i("trailStrengthValue").textContent = Mo.value + "%";
  }), Mo.addEventListener("change", () => Fn("trailStrength", vo)), Co.addEventListener("input", () => {
    bo = Number(Co.value), i("trailLifeValue").textContent = Co.value + " ms";
  }), Co.addEventListener("change", () => Fn("trailMaxAge", bo)), ui.addEventListener("change", () => Fn("upcomingCount", Gn));
  function H(e) {
    a.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === e));
    const o = e === "light";
    i("app").classList.toggle("light", o), l.setLight(o), Si(a);
  }
  H(Je().theme || "dark"), a.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    H(e.dataset.theme), Fn("theme", e.dataset.theme);
  }));
  const $ = { steps: null, weather: null, ...Je().entities || {} };
  let ge = null, Ne = {};
  function ce(e) {
    const o = Object.values(e).filter((I) => I.entity_id.startsWith("sensor.") || I.entity_id.startsWith("input_number.")), s = (I) => I.attributes.friendly_name || I.entity_id, c = o.filter((I) => /step/i.test(I.entity_id) || /step/i.test(s(I)) || ["steps", "step"].includes(String(I.attributes.unit_of_measurement || "").toLowerCase())), h = o.filter((I) => !c.includes(I)), k = (I, te) => s(I).localeCompare(s(te)), E = (I, te) => /health_steps/.test(te.entity_id) - /health_steps/.test(I.entity_id) || k(I, te);
    return { suggested: c.sort(E), rest: h.sort(k), label: s };
  }
  function fe(e) {
    const o = i("stepsEntity");
    if (!o || o.matches(":focus")) return;
    const { suggested: s, rest: c, label: h } = ce(e), k = (te) => '<option value="' + He(te.entity_id) + '">' + He(h(te)) + "</option>";
    o.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(k).join("") + "</optgroup>" : "") + (c.length ? '<optgroup label="All sensors">' + c.map(k).join("") + "</optgroup>" : ""), o.value = $.steps || "";
    const E = i("stepsStatus"), I = $.steps && e[$.steps];
    E.textContent = I ? "Connected · " + h(I) : E.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    $.steps = i("stepsEntity").value || null, Fn("entities", { ...$ }), Ne = {}, Zo(), ge && (fe(ge), It(ge));
  });
  function ae(e, o = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: o }).format(e);
  }
  function Ue() {
    const e = $.steps && (ge == null ? void 0 : ge[$.steps]), o = Number(e == null ? void 0 : e.state);
    return Number.isFinite(o) ? o : null;
  }
  function It(e) {
    var c;
    const o = $.steps, s = o ? Number((c = e[o]) == null ? void 0 : c.state) : NaN;
    i("stepsMeta").textContent = o ? Number.isFinite(s) ? ae(s) : "—" : "Set up in Settings";
  }
  let Cn = 0;
  async function Zo() {
    const e = $.steps;
    if (!e || !l.ws) return;
    Cn = Date.now();
    const o = /* @__PURE__ */ new Date(), s = new Date(o.getFullYear(), o.getMonth(), o.getDate() - 30);
    try {
      const c = await l.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: o.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), h = (c == null ? void 0 : c[e]) || [], k = {};
      if (h.forEach((E) => {
        Number.isFinite(E.max) && (k[Ot(new Date(E.start))] = E.max);
      }), !Object.keys(k).length) {
        const E = await l.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: o.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((E == null ? void 0 : E[e]) || []).forEach((I) => {
          const te = Number(I.s ?? I.state), ne = I.lu ? I.lu * 1e3 : Date.parse(I.last_updated || I.last_changed);
          if (!Number.isFinite(te) || !ne) return;
          const X = Ot(new Date(ne));
          k[X] = Math.max(k[X] || 0, te);
        });
      }
      Ne = k, la();
    } catch {
    }
  }
  function Gt() {
    la();
  }
  Gt(), setInterval(() => {
    Gt(), za(), Wa();
  }, 10 * 60 * 1e3);
  function Qn(e) {
    const o = {}, s = {};
    st.history.forEach((E) => {
      const I = Ot(new Date(E.start));
      o[I] = (o[I] || 0) + (E.seconds || 0) / 60, s[I] = (s[I] || 0) + 1;
    });
    const c = /* @__PURE__ */ new Date(), h = Ot(c), k = [];
    for (let E = e - 1; E >= 0; E--) {
      const I = new Date(c.getFullYear(), c.getMonth(), c.getDate() - E), te = Ot(I), ne = st.checkins.filter((Z) => Z.date === te), X = (Z) => {
        const Ce = ne.map((ze) => ze[Z]).filter(Boolean);
        return Ce.length ? Ce.reduce((ze, Le) => ze + Le, 0) / Ce.length : null;
      };
      k.push({
        key: te,
        date: I,
        minutes: Math.round(o[te] || 0),
        moves: s[te] || 0,
        steps: te === h && Ue() != null ? Ue() : Ne[te] ?? null,
        mood: X("mood"),
        energy: X("energy")
      });
    }
    return k;
  }
  function Ko(e) {
    let o = e.length - 1;
    e[o] && !e[o].minutes && o--;
    let s = 0;
    for (; o >= 0 && e[o].minutes > 0; )
      s++, o--;
    return s;
  }
  function la() {
    const e = i("insightCard");
    if (!e) return;
    const o = Qn(30), s = Ko(o), c = o.reduce((ne, X) => ne + X.minutes, 0), h = /* @__PURE__ */ new Date(), k = Ot(h), E = Ot(new Date(h.getFullYear(), h.getMonth(), h.getDate() - (h.getDay() + 6) % 7)), I = o.filter((ne) => ne.key >= E && ne.key <= k).reduce((ne, X) => ne + X.minutes, 0), te = (ne, X, Z) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + ne + '</div><div><div class="activityRowName">' + He(X) + '</div><div class="activityRowMeta">' + He(Z) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + ye("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + te(ye("clock"), "This week", I + " min") + te(ye("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + te(ye("calendar"), "30 days", c + " min") + "</div>";
  }
  const or = {
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
  }, Pe = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", bt = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, So = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let qr = 0;
  const hl = (e, o) => '<path class="' + o + '" d="' + e + '"/>', Uc = (e, o) => ' style="animation-delay:-' + Math.round(e * 137 % o) + 'ms"', ba = (e, o, s, c) => {
    const h = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + Uc(e, 2400) + ' d="M' + e + " " + (o - s) + "L" + (e + h) + " " + (o - h) + "L" + (e + s) + " " + o + "L" + (e + h) + " " + (o + h) + "L" + e + " " + (o + s) + "L" + (e - h) + " " + (o + h) + "L" + (e - s) + " " + o + "L" + (e - h) + " " + (o - h) + 'Z"/>';
  }, ad = ([e, o, s], c) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + o + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Yc = (e, o) => o ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Zc = (e) => (e ? ["29.35", "43.04", "56.74"].map((o, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + o + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + o + ' 60.65)"/></g>') : [19, 26, 33].map((o, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + o + ' 38)"/></g>')).join(""), Kc = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([o, s], c) => '<circle class="wxFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + o + '" cy="' + s + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function od(e, o, s, c) {
    return e === "clear" ? o ? ad(s ? So.l : So.s, c) + (s ? ba(70, 20, 5.83, 1) + ba(78.33, 41.67, 3.75, 0.8) + ba(60, 71.67, 3.33, 0.6) : ba(42, 12, 3.5, 1) + ba(47, 25, 2.25, 0.8) + ba(36, 43, 2, 0.6)) : Yc(c, s) : e === "partly" ? (o ? ad(s ? So.lp : So.sp, c) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + hl(s ? bt.lp : bt.sp, o ? "wxCloudLight" : "wxBright") + (o ? s ? ba(73.33, 16.67, 4.17, 0.9) : ba(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? hl(s ? bt.lc : bt.s, o ? "wxCloudLight" : "wxBright") + (o ? s ? ba(15, 15, 3.75, 0.8) + ba(76.67, 13.33, 2.92, 0.6) : ba(9, 9, 2.25, 0.8) + ba(46, 8, 1.75, 0.6) : "") : hl(s ? bt.lr : bt.s, "wxCloudLight") + (e === "rain" ? Zc(s) : Kc(s));
  }
  const $c = () => {
    var e;
    return ((e = ge == null ? void 0 : ge["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let da = Je().weatherStyle || "bitmap", id = Je().weatherLayout === "strip" ? "strip" : "tiles", Xc = Je().weatherMotion !== !1;
  const Wr = () => Xc && !Ie(), zr = /* @__PURE__ */ new Map(), fl = 700, Jc = (e) => {
    const [o, s] = e.split("/");
    return { k: o === "fog" ? "cloudy" : o === "storm" ? "rain" : o, night: s === "night" };
  };
  function xs(e, o, s, c = da, h, k) {
    let E = Pe(e);
    const I = E === "night" || (k != null ? !!k : !!s && $c());
    E === "night" && (E = "clear");
    const te = o ? 90 : 54, ne = Gs(e, I), X = performance.now();
    let Z = h ? zr.get(h) : null;
    if (h && !Z ? zr.set(h, Z = { key: ne, t0: -1e9 }) : Z && Z.key !== ne && (Z.fromKey = Z.key, Z.from = Z.last || null, Z.key = ne, Z.t0 = X), c !== "smooth") return '<span class="wxIcon pixels' + (o ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + ne + '"' + (h ? ' data-wx-slot="' + h + '"' : "") + ' data-wx-style="' + c + '" data-wx-size="' + te + '"></canvas></span>';
    let Ce = "";
    if (Z && X - Z.t0 < fl && (Wr() || Ie())) {
      const ze = Jc(Z.fromKey);
      Ce = '<span class="wxLayer wxOut ' + ze.k + (ze.night ? " night" : "") + '" style="animation-delay:' + Math.round(Z.t0 - X) + 'ms"><svg viewBox="0 0 ' + te + " " + te + '">' + od(ze.k, ze.night, o, "wxg" + ++qr) + "</svg></span>";
    }
    return '<span class="wxIcon ' + E + (I ? " night" : "") + (o ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + te + " " + te + '">' + od(E, I, o, "wxg" + ++qr) + "</svg>" + Ce + "</span>";
  }
  function ys() {
    const e = i("app"), o = getComputedStyle(e), s = (I) => o.getPropertyValue(I).trim(), c = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([I, te]) => {
      s(te) && (c[I] = s(te));
    });
    const h = s("--color-text-primary") || "#f1f1f1", k = s("--color-bg-card") || "#222222", E = e.classList.contains("light");
    return { colors: c, ink: E ? h : k, paper: E ? k : h };
  }
  function Si(e, o = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const c = ys(), h = Wr(), k = Ie();
    s.forEach((E) => {
      var Z;
      const I = E.dataset.wx, te = E.dataset.wxSlot ? zr.get(E.dataset.wxSlot) : null;
      let ne = Gl(I, c.colors);
      if (te && te.key === I) {
        const Ce = (o - te.t0) / fl;
        Ce < 1 && (h || k) && (ne = hp(te.from || Gl(te.fromKey, c.colors), ne, Math.max(0, Ce), c.colors, k)), te.last = ne;
      }
      const X = wc(ne, { size: Number(E.dataset.wxSize) || 54, px: 2, oneBit: E.dataset.wxStyle === "onebit", colors: c.colors, ink: c.ink, paper: c.paper, clock: o, idle: h });
      E.width !== X.w && (E.width = X.w), E.height !== X.h && (E.height = X.h), (Z = E.getContext("2d")) == null || Z.putImageData(new ImageData(X.data, X.w, X.h), 0, 0);
    });
  }
  let ks = null, rd = -1;
  function sd(e) {
    if (ks = null, !g) return;
    const o = Wr(), s = Math.floor(e / 100), c = [...zr.values()].some((te) => e - te.t0 < fl), h = [...Ms.values()].some((te) => e - te.t0 < te.dur), k = Me.home.classList.contains("active"), E = ea.classList.contains("open"), I = o && da === "smooth" && (E || k && id === "strip");
    !document.hidden && (c || h || I || o && s !== rd) && (rd = s, k && (Si(i("weatherCard"), e), Vr(i("weatherCard"), e)), E && (Si(ea, e), Vr(ea, e))), (o || c || h) && (ks = requestAnimationFrame(sd));
  }
  function Ti() {
    i("app").classList.toggle("wxMotion", Wr()), !ks && g && (ks = requestAnimationFrame(sd));
  }
  let ld = [];
  const $t = 36e5, Qc = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function To() {
    const e = /* @__PURE__ */ new Date(), o = (k, E) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + k, E), s = [], c = [], h = [...Array(6)].map((k, E) => {
      const I = o(E, 6), te = o(E, 18), ne = o(E + 1, 6), X = ld.find((Ce) => Ot(new Date(Ce.datetime)) === Ot(I)), Z = (Ce, ze, Le) => {
        const ke = s.filter((ct) => ct.t >= +Ce && ct.t < +ze);
        if (ke.length) {
          const ct = {};
          return ke.forEach((Ae) => {
            ct[Ae.c] = (ct[Ae.c] || 0) + (Qc.has(Ae.c) ? 2 : 1);
          }), Object.entries(ct).sort((Ae, pt) => pt[1] - Ae[1])[0][0];
        }
        const be = c.find((ct) => {
          const Ae = +new Date(ct.datetime);
          return Ae >= +Ce - 3 * $t && Ae < +ze && (ct.is_daytime == null || !!ct.is_daytime == !Le);
        });
        if (be) return be.condition;
        const dt = (X == null ? void 0 : X.condition) || "cloudy";
        return Le && dt === "sunny" ? "clear-night" : dt;
      };
      return { start: +I, end: +ne, day: Z(I, te, !1), night: Z(te, ne, !0), hi: Number(X == null ? void 0 : X.temperature), lo: Number(X == null ? void 0 : X.templow) };
    });
    return { days: h, hours: s, start: h[0].start, end: h[5].end };
  }
  const dd = (e, o) => {
    const s = e.days.findIndex((h) => o < h.end);
    if (s < 0) return 1;
    const c = e.days[s];
    return Math.max(0, (s + (o - c.start) / (c.end - c.start)) / 6);
  }, ep = (e, o) => {
    const s = Math.max(0, Math.min(0.99999, o)) * 6, c = Math.floor(s), h = e.days[c];
    return h.start + (s - c) * (h.end - h.start);
  };
  function ml(e, o) {
    const s = Math.max(0, e.days.findIndex((te) => o < te.end)), c = e.days[s], h = (o - c.start) / (c.end - c.start) >= 0.5;
    let k = h ? c.night : c.day, E = NaN;
    const I = e.hours;
    if (I.length && o >= I[0].t - $t && o <= I[I.length - 1].t + $t) {
      let te = I.findIndex((Z) => Z.t > o);
      te < 0 && (te = I.length);
      const ne = I[Math.max(0, te - 1)], X = I[Math.min(I.length - 1, te)];
      k = ne.c || k, E = X.t > ne.t ? ne.temp + (X.temp - ne.temp) * Math.max(0, Math.min(1, (o - ne.t) / (X.t - ne.t))) : ne.temp;
    }
    if (!Number.isFinite(E)) {
      const te = [];
      if (e.days.forEach((ne) => {
        Number.isFinite(ne.lo) && te.push([ne.start - $t, ne.lo]), Number.isFinite(ne.hi) && te.push([ne.start + 9 * $t, ne.hi]);
      }), te.length) {
        E = o <= te[0][0] ? te[0][1] : te[te.length - 1][1];
        for (let ne = 1; ne < te.length; ne++) if (o <= te[ne][0] && o > te[ne - 1][0]) {
          const [X, Z] = te[ne - 1], [Ce, ze] = te[ne];
          E = Z + (ze - Z) * (1 - Math.cos(Math.PI * (o - X) / (Ce - X))) / 2;
          break;
        }
      }
    }
    return { cond: h && k === "sunny" ? "clear-night" : k, temp: E, night: h, day: c };
  }
  const cd = (e) => Ot(new Date(e)) === Ot(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), Ms = /* @__PURE__ */ new Map(), tp = 900, np = 700;
  let Cs = null;
  const wa = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((o) => {
    Vr(o.target.parentElement), o.target.closest("#wxDialog") && gd();
  })) : null;
  function Vr(e, o = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const c = To(), h = c.days.flatMap((Z) => [{ cond: Z.day, night: !1 }, { cond: Z.night, night: !0 }]), k = h.map((Z) => Z.cond).join(), E = ys(), I = Wr(), te = Ie(), ne = Number(Ot(new Date(c.start)).replace(/\D/g, "")) % 9973;
    let X = !1;
    s.forEach((Z) => {
      var ct;
      const Ce = Z.clientWidth, ze = Z.clientHeight;
      if (!Ce || !ze) return;
      const Le = Z.dataset.wxStrip;
      let ke = Ms.get(Le);
      ke ? ke.sig !== k && (ke.prev = ke.segs, ke.sig = k, ke.segs = h, ke.t0 = o, ke.dur = np) : Ms.set(Le, ke = { sig: k, segs: h, prev: null, t0: o, dur: tp });
      const be = I || te ? Math.min(1, Math.max(0, (o - ke.t0) / ke.dur)) : 1;
      be < 1 && (X = !0);
      const dt = { width: Ce, height: ze, colors: E.colors, clock: o, ambient: I, seed: ne, reveal: te ? be : 1 - Math.pow(1 - be, 3), prev: be < 1 ? ke.prev : null, reduce: te };
      if (da === "smooth") {
        const Ae = Math.min(2, window.devicePixelRatio || 1), pt = Math.round(Ce * Ae), kt = Math.round(ze * Ae);
        Z.width !== pt && (Z.width = pt), Z.height !== kt && (Z.height = kt);
        const Qe = Z.getContext("2d");
        if (!Qe) return;
        Qe.setTransform(Ae, 0, 0, Ae, 0, 0), Ap(Qe, h, dt);
      } else {
        const Ae = Lp(h, { ...dt, px: 2, oneBit: da === "onebit", ink: E.ink, paper: E.paper });
        Z.width !== Ae.w && (Z.width = Ae.w), Z.height !== Ae.h && (Z.height = Ae.h), (ct = Z.getContext("2d")) == null || ct.putImageData(new ImageData(Ae.data, Ae.w, Ae.h), 0, 0);
      }
    }), X && Ti();
  }
  function pd() {
    const e = i("weatherCard");
    if (!e || e.hidden) return;
    const o = $.weather, s = o && (ge == null ? void 0 : ge[o]);
    if (!s) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + xs("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (o ? "Not available" : "Set up in Settings") + "</div></div></div></div>", Si(e);
      return;
    }
    const c = s.attributes || {}, h = c.temperature_unit || "°", k = (Qe) => Number.isFinite(Number(Qe)) ? Math.round(Number(Qe)) + "°" : "—", E = (c.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", I = or[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), te = Ot(/* @__PURE__ */ new Date()), ne = ld.slice(0, 7), X = ne.find((Qe) => Ot(new Date(Qe.datetime)) === te) || null, Z = ne.filter((Qe) => Ot(new Date(Qe.datetime)) >= te).slice(0, 6), Ce = /* @__PURE__ */ new Date(), ze = Ot(new Date(Ce.getFullYear(), Ce.getMonth(), Ce.getDate() + 1)), Le = X ? "H " + k(X.temperature) + "&ensp; L " + k(X.templow) : "", ke = (Qe) => {
      const Ye = Ot(new Date(Qe.datetime));
      return Ye === te ? "Today" : Ye === ze ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(Qe.datetime));
    }, be = Number.isFinite(Number(c.temperature)) ? Math.round(Number(c.temperature)) : "—", dt = (Qe) => {
      const Ye = new Date(Qe.datetime);
      return Math.round((new Date(Ye.getFullYear(), Ye.getMonth(), Ye.getDate()) - new Date(Ce.getFullYear(), Ce.getMonth(), Ce.getDate())) / 864e5);
    }, ct = (Qe) => (or[Qe] || Qe || "").toLowerCase(), Ae = (Qe, Ye) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + dt(Qe) + '" aria-label="' + He(ke(Qe) + ": " + ct(Qe.condition) + ", " + k(Qe.temperature) + " / " + k(Qe.templow) + ". Open the forecast") + '">' + xs(Qe.condition, !1, !1, da, "day" + Ye) + '<div><div class="activityRowName">' + He(ke(Qe)) + '</div><div class="activityRowMeta">' + k(Qe.temperature) + " / " + k(Qe.templow) + "</div></div></div>", pt = () => '<div class="wxStrip"><div class="wxStripDays">' + To().days.map((Ye, Xt) => {
      const Ht = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(Ye.start)) + ": " + ct(Ye.day) + (ct(Ye.day) === ct(Ye.night) ? " all day and night" : ", then " + ct(Ye.night) + " overnight") + (Number.isFinite(Ye.hi) ? ". High " + k(Ye.hi) : "") + (Number.isFinite(Ye.lo) ? ", low " + k(Ye.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + Xt + '" aria-label="' + He(Ht) + '"><span class="wxDayName">' + He(cd(Ye.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + k(Ye.hi) + '</span><span class="wxLow">' + k(Ye.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + He("Now in " + E + ": " + be + "°, " + ct(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + xs(s.state, !0, !0, da, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + He(String(be)) + '</span><span class="wxUnit">' + He(h) + '</span></div><div class="wxPlace">' + He(E) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + He(I) + "</div>" + (Le ? '<div class="wxRange">' + Le + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (Z.length ? id === "strip" ? pt() : '<div class="activityRows wxDays">' + Z.map(Ae).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", Si(e);
    const kt = e.querySelector("canvas[data-wx-strip]");
    Cs && Cs !== kt && (wa == null || wa.unobserve(Cs)), Cs = kt, kt && (wa == null || wa.observe(kt), Vr(e)), Ti(), md();
  }
  const ud = i("weatherCard"), hd = (e) => {
    const o = e.closest("[data-wx-day]");
    if (o) {
      const c = /* @__PURE__ */ new Date();
      fd(+new Date(c.getFullYear(), c.getMonth(), c.getDate() + Number(o.dataset.wxDay), 12), o);
      return;
    }
    const s = e.closest("[data-wx-open]");
    s && fd(Date.now(), s);
  };
  ud.addEventListener("click", (e) => hd(e.target)), ud.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), hd(e.target));
  });
  const ea = i("wxDialog"), $o = i("wxGraph"), jr = i("wxGraphWrap");
  let Ba = Date.now(), Li = null, gl = !1, ir = null;
  function fd(e, o) {
    const s = To();
    Li = o || null, Ba = Math.max(s.start, Math.min(s.end - $t, e)), Ms.delete("dialog"), zr.delete("scrub"), ea.classList.add("open"), ea.setAttribute("aria-hidden", "false"), md(), wa == null || wa.observe(ea.querySelector("canvas[data-wx-strip]")), $o.focus({ preventScroll: !0 }), Ti();
  }
  function vl() {
    var e;
    ea.classList.remove("open"), ea.setAttribute("aria-hidden", "true"), wa == null || wa.unobserve(ea.querySelector("canvas[data-wx-strip]")), (e = Li == null ? void 0 : Li.focus) == null || e.call(Li, { preventScroll: !0 }), Li = null;
  }
  function md() {
    if (!ea.classList.contains("open")) return;
    const e = To();
    i("wxGraphDays").innerHTML = e.days.map((o) => "<span>" + He(cd(o.start)) + "</span>").join(""), gd(e), Ss(e), Vr(ea);
  }
  function Ss(e = To()) {
    const o = ml(e, Ba), s = ge == null ? void 0 : ge[$.weather], c = (s == null ? void 0 : s.attributes) || {}, h = c.temperature_unit || "°", k = Math.abs(Ba - Date.now()) < $t / 2, E = k && s ? s.state : o.cond, I = k && Number.isFinite(Number(c.temperature)) ? Math.round(Number(c.temperature)) : Number.isFinite(o.temp) ? Math.round(o.temp) : "—", te = or[E] || (E ? E.charAt(0).toUpperCase() + E.slice(1) : "—"), ne = k ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(Ba / $t) * $t)), X = o.day, Z = (Number.isFinite(X.hi) ? "H " + Math.round(X.hi) + "°" : "") + (Number.isFinite(X.lo) ? "&ensp; L " + Math.round(X.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + xs(E, !0, k, da, "scrub", k ? void 0 : o.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + He(String(I)) + '</span><span class="wxUnit">' + He(h) + '</span></div><div class="wxPlace">' + He(ne) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + He(te) + "</div>" + (Z ? '<div class="wxRange">' + Z + "</div>" : "") + "</div>", Si(i("wxDialogNow")), $o.setAttribute("aria-valuenow", String(Math.round((Ba - e.start) / $t))), $o.setAttribute("aria-valuetext", ne + ", " + te.toLowerCase() + ", " + I + "°"), bl(e), Ti();
  }
  function gd(e = To()) {
    const o = i("wxGraphLine"), s = jr.clientWidth, c = jr.clientHeight;
    if (!s || !c) return;
    const h = [];
    for (let be = e.start; be <= e.end; be += $t) {
      const dt = ml(e, be).temp;
      Number.isFinite(dt) && h.push([dd(e, be) * s, dt]);
    }
    if (o.setAttribute("viewBox", "0 0 " + s + " " + c), h.length < 2) {
      o.innerHTML = '<g id="wxCursorMark"></g>', ir = null, bl(e);
      return;
    }
    const k = h.map((be) => be[1]), E = Math.min(...k), I = Math.max(...k), te = Math.max(4, I - E), ne = da !== "smooth", X = (be) => ne ? Math.round(be / 2) * 2 : Math.round(be * 10) / 10;
    ir = (be) => c * 0.84 - (be - E) / te * c * 0.62;
    const Z = ys(), Ce = da === "onebit" ? Z.paper : "#ffffff", ze = da === "onebit" ? Z.ink : "rgba(0,0,0,.28)", Le = "M" + h.map((be) => X(be[0]) + " " + X(ir(be[1]))).join(" L"), ke = (be, dt) => {
      const ct = h.find((Ae) => Ae[1] === be);
      return '<text class="wxLineLabel" x="' + X(Math.min(s - 14, Math.max(14, ct[0]))) + '" y="' + X(ir(be) + (dt ? 18 : -10)) + '" fill="' + Ce + '" stroke="' + ze + '">' + Math.round(be) + "°</text>";
    };
    o.setAttribute("shape-rendering", ne ? "crispEdges" : "auto"), o.innerHTML = '<path d="' + Le + '" fill="none" stroke="' + ze + '" stroke-width="' + (ne ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Le + '" fill="none" stroke="' + Ce + '" stroke-width="2" stroke-linejoin="round"/>' + ke(I, !1) + ke(E, !0) + '<g id="wxCursorMark"></g>', bl(e);
  }
  function bl(e = To()) {
    const o = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!o) return;
    const s = jr.clientWidth, c = jr.clientHeight, h = da !== "smooth", k = (Ce) => h ? Math.round(Ce / 2) * 2 : Ce, E = k(dd(e, Ba) * s), I = ml(e, Ba).temp, te = ys(), ne = da === "onebit" ? te.paper : "#ffffff", X = da === "onebit" ? te.ink : "rgba(0,0,0,.28)", Z = ir && Number.isFinite(I) ? k(ir(I)) : null;
    o.innerHTML = '<rect x="' + (E - 2) + '" y="0" width="4" height="' + c + '" fill="' + X + '"/><rect x="' + (E - 1) + '" y="0" width="2" height="' + c + '" fill="' + ne + '"/>' + (Z == null ? "" : h ? '<rect x="' + (E - 5) + '" y="' + (Z - 5) + '" width="10" height="10" fill="' + ne + '" stroke="' + X + '" stroke-width="2"/>' : '<circle cx="' + E + '" cy="' + Z + '" r="6" fill="' + ne + '" stroke="' + X + '" stroke-width="2"/>');
  }
  const vd = (e) => {
    const o = jr.getBoundingClientRect();
    o.width && (Ba = ep(To(), (e - o.left) / o.width), Ss());
  };
  $o.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      gl = !0;
      try {
        $o.setPointerCapture(e.pointerId);
      } catch {
      }
      vd(e.clientX);
    }
  }), $o.addEventListener("pointermove", (e) => {
    gl && vd(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => $o.addEventListener(e, () => {
    gl = !1;
  })), $o.addEventListener("keydown", (e) => {
    const o = To(), s = { ArrowLeft: -$t, ArrowRight: $t, ArrowDown: -$t, ArrowUp: $t, PageUp: -24 * $t, PageDown: 24 * $t }[e.key];
    s ? (e.preventDefault(), Ba = Math.max(o.start, Math.min(o.end - $t, Math.round(Ba / $t) * $t + s)), Ss(o)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), Ba = e.key === "Home" ? o.start : o.end - $t, Ss(o));
  }), i("wxDialogClose").addEventListener("click", vl), ea.addEventListener("click", (e) => {
    e.target === ea && vl();
  }), ea.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), vl());
  }), pd(), (Ad = (Td = window.matchMedia) == null ? void 0 : (Ld = Td.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || Ad.call(Ld, "change", () => {
    Ti(), Si(a);
  }), Ti();
  const bd = i("tvNav");
  l.fullscreenSupported || (bd.hidden = !0), bd.addEventListener("click", () => l.toggleFullscreen()), a.addEventListener("keydown", (e) => {
    !Me.workout.classList.contains("active") || Ea.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Lr.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), a.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const o = Math.max(1, Math.min(10, (Number(Xe.value) || 1) + Number(e.dataset.roundsStep)));
    String(o) !== Xe.value && (Xe.value = o, Xe.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [T, M, _, Xe].forEach((e) => e.addEventListener("input", () => {
    const o = Ve[ut];
    o && (o.total = Number(T.value), o.work = Number(M.value), o.rest = Number(_.value)), q();
  })), Se.addEventListener("click", yi), qe.addEventListener("click", () => y("settings")), i("settingsBack").addEventListener("click", yi), Lr.addEventListener("click", () => Hn(!wn)), Rn(ut), Wi(), za(), la(), i("healthHelpOpen").addEventListener("click", () => a.querySelector(".tab[data-pane=helpPane]").click()), Ra(i("resetStats"), i("resetStatsFill"), 1500, () => {
    st.history = [], st.checkins = [], fa = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    rn(), Gt(), za(), Wi(), la(), Wa(), _t("Stats reset");
  });
  const wl = i("morningTime"), xl = i("eveningTime"), yl = i("checkinAutoOpen");
  wl.value = Fa().morning, xl.value = Fa().evening, yl.classList.toggle("on", Je().checkinAutoOpen !== !1), [["morningTime", wl], ["eveningTime", xl]].forEach(([e, o]) => o.addEventListener("change", () => {
    o.value && (Fn(e, o.value), Wa());
  })), yl.addEventListener("click", () => {
    const e = Je().checkinAutoOpen === !1;
    yl.classList.toggle("on", e), Fn("checkinAutoOpen", e);
  }), setTimeout(qi, 800);
  const wd = i("checkinNotify"), Ts = i("checkinNotifyTarget"), xd = i("checkinNotifyStatus"), ap = xd.textContent;
  function yd() {
    const e = l.notifyServices(), o = e.filter((h) => h.startsWith("mobile_app_")), s = o.length ? o : e, c = (h) => h.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Ts.innerHTML = s.map((h) => '<option value="' + He(h) + '">' + He(c(h)) + "</option>").join(""), !Je().notifyTarget && s[0] && (Je().notifyTarget = s[0]), Ts.value = Je().notifyTarget || "";
  }
  function Ls() {
    const e = !!Je().notifyOn;
    wd.classList.toggle("on", e), i("checkinNotifyTargetRow").hidden = !e;
    const o = Fa();
    xd.textContent = e ? "Sends at " + o.morning + " and " + o.evening : ap;
  }
  async function kl() {
    const e = !!Je().notifyOn;
    try {
      return await l.setReminderAutomation(e ? { target: Je().notifyTarget, times: Fa() } : null), !0;
    } catch {
      return _t("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  wd.addEventListener("click", async () => {
    const e = !Je().notifyOn;
    if (e && (yd(), !Je().notifyTarget)) {
      _t("Install the Companion app on your phone first");
      return;
    }
    Je().notifyOn = e, Ls(), await kl() ? (rn(), _t(e ? "Check-in notifications on" : "Check-in notifications off")) : (Je().notifyOn = !e, Ls());
  }), Ts.addEventListener("change", () => {
    Fn("notifyTarget", Ts.value), Je().notifyOn && kl();
  }), [wl, xl].forEach((e) => e.addEventListener("change", () => {
    Ls(), Je().notifyOn && kl();
  })), yd(), Ls();
  let Ml = null;
  function op() {
    Ml || (Ml = setTimeout(() => {
      Ml = null, la();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var s, c;
      const o = !ge || ge[$.weather] !== e[$.weather] || ((s = ge["sun.sun"]) == null ? void 0 : s.state) !== ((c = e["sun.sun"]) == null ? void 0 : c.state);
      ge = e, fe(e), It(e), o && pd(), Date.now() - Cn > 60 * 60 * 1e3 && Zo(), op();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (st.history = e.history, Gt()), Array.isArray(e.history) && la(), Array.isArray(e.checkins) && (st.checkins = e.checkins.map(ai), Wa(), Wi(), za(), Gt(), la()), e.profiles && !yn.classList.contains("open") && !sa)) {
        const o = ro(e);
        Object.keys(Ve).forEach((s) => delete Ve[s]), Object.assign(Ve, o.profiles), st.order = o.order, Ve[ut] || (ut = st.order[0]), aa(), Rn(ut);
      }
    },
    suspend() {
      g = !1;
    },
    resume() {
      g || (g = !0, Ho || (Ho = requestAnimationFrame(Fo)), An || (An = requestAnimationFrame(wi)), Ti(), Na(a.querySelector(".tab.active"), !1));
    }
  };
}
const Dp = /* @__PURE__ */ new Set(["roaming", "test_area"]), Rp = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, Ur = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, nn = "made_up_", Ai = (a) => {
  var l;
  return (l = String(a).split(".")[1]) == null ? void 0 : l.startsWith(nn);
}, Ds = (a) => a.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function ed(a) {
  const l = a.getHours() + a.getMinutes() / 60, i = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function Np(a) {
  const l = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  let i = 0;
  for (let p = +l; p < +a; p += 10 * 60 * 1e3) i += ed(new Date(p)) / 6;
  return i;
}
function Nd(a = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let i = 0; i <= 96; i++) {
    const p = +a - (96 - i) * 15 * 60 * 1e3;
    l.push([p, ed(new Date(p))]);
  }
  return l;
}
function Bp({ onChange: a }) {
  const l = {}, i = {}, p = (U, G, J, z) => {
    l[U] = { entity_id: U, state: J, attributes: z, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[U] = G;
  }, f = (U, G, J) => {
    const z = l[U], K = G ?? z.state;
    l[U] = { ...z, state: K, attributes: { ...z.attributes, ...J }, last_changed: K === z.state ? z.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, g = (U, G, J, z) => p("binary_sensor." + nn + (U ? U + "_" : "") + Ds(G), U, z ? "on" : "off", { friendly_name: G, device_class: J });
  Object.entries(Rp).forEach(([U, G]) => {
    if (G.temperature != null && p("sensor." + nn + U + "_temperature", U, String(G.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), G.humidity != null && p("sensor." + nn + U + "_humidity", U, String(G.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), G.vacuum && p("vacuum." + nn + "robot", U, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), G.climate && p("climate." + nn + U, U, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: G.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), G.cover) {
      const [J, z, K, re] = G.cover;
      p("cover." + nn + U + "_" + Ds(J), U, K ? "open" : "closed", { friendly_name: J, device_class: z, current_position: K, ...re != null ? { current_tilt_position: re } : {} });
    }
    if (G.humidifier && p("humidifier." + nn + U, U, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: G.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), G.solar && (p("sensor." + nn + U + "_solar_power", U, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), p("sensor." + nn + U + "_solar_today", U, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), G.valve && p("valve." + nn + U + "_" + Ds(G.valve), U, "closed", { friendly_name: G.valve, device_class: "water" }), G.door && g(U, G.door, "door", G.doorOpen), G.window && g(U, G.window, "window", !1), G.motion && g(U, G.motion, "motion", !1), G.plant) {
      const [J, z, K, re, A] = G.plant, V = nn + Ds(J), ve = (v, Me, Se, qe, y) => p("sensor." + V + "_" + v, U, String(Se), { friendly_name: Me, device_class: y, state_class: "measurement", unit_of_measurement: qe, plant_low: Se < Ur[v][0], plant_high: Se > Ur[v][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[v] });
      ve("moisture", "Moisture", z, "%", "moisture"), ve("light", "Light", K, "lx", "illuminance"), ve("temperature", "Temperature", re, "°C", "temperature"), ve("fertility", "Fertility", A, "µS/cm", "conductivity");
      const Te = Object.entries({ moisture: z, light: K, temperature: re, fertility: A }).filter(([v, Me]) => Me < Ur[v][0] || Me > Ur[v][1]).map(([v, Me]) => v + (Me < Ur[v][0] ? " low" : " high"));
      p("plant." + V, U, Te.length ? "problem" : "ok", { friendly_name: J, moisture: z, brightness: K, temperature: re, conductivity: A, problem: Te.join(", ") || "none" });
    }
  }), p("alarm_control_panel." + nn + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), g(null, "Front door", "door", !1), g(null, "Smoke alarm", "smoke", !1), p("sensor." + nn + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const x = {}, L = {};
  let b = null;
  function B() {
    const U = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((G) => {
      G.endsWith("_solar_power") && (l[G] = { ...l[G], state: ed(U).toFixed(2) }), G.endsWith("_solar_today") && (l[G] = { ...l[G], state: Np(U).toFixed(1) });
    });
  }
  B();
  let le = 0;
  function ie() {
    let U = !1;
    const G = ++le % 10 === 0, J = (re, A, V) => {
      f(re, A, V), U = !0;
    };
    Object.entries(x).forEach(([re, A]) => {
      const V = l[re].attributes.current_position, ve = V < A ? Math.min(A, V + 10) : Math.max(A, V - 10);
      ve === A && delete x[re], J(re, ve === A ? ve === 0 ? "closed" : "open" : A > V ? "opening" : "closing", { current_position: ve });
    }), Object.entries(L).forEach(([re, A]) => {
      const V = l[re].attributes.current_tilt_position, ve = V < A ? Math.min(A, V + 25) : Math.max(A, V - 25);
      ve === A && delete L[re], J(re, null, { current_tilt_position: ve });
    }), Object.keys(l).filter((re) => re.startsWith("climate.")).forEach((re) => {
      const A = l[re], V = A.attributes, ve = V.current_temperature, Te = (A.state === "heat" || A.state === "auto") && ve < V.temperature - 0.05, v = (A.state === "cool" || A.state === "auto") && ve > V.temperature + 0.05, Me = A.state === "off" ? "off" : Te ? "heating" : v ? "cooling" : "idle", Se = G ? Math.round((ve + (Te ? 0.1 : v ? -0.1 : 0)) * 10) / 10 : ve;
      (Se !== ve || Me !== V.hvac_action) && J(re, null, { current_temperature: Se, hvac_action: Me });
    }), Object.keys(l).filter((re) => re.startsWith("humidifier.")).forEach((re) => {
      const A = l[re], V = A.attributes, ve = V.current_humidity, Te = A.state === "on" && ve < V.humidity, v = Te && G ? ve + 1 : ve, Me = A.state !== "on" ? "off" : Te ? "humidifying" : "idle";
      if (v !== ve || Me !== V.action) {
        J(re, null, { current_humidity: v, action: Me });
        const Se = "sensor." + nn + i[re] + "_humidity";
        l[Se] && J(Se, String(v));
      }
    });
    const z = l["vacuum." + nn + "robot"], K = z.attributes;
    z.state === "cleaning" && G && J(z.entity_id, null, { battery_level: Math.max(5, K.battery_level - 1) }), z.state === "returning" && J(z.entity_id, "docked", {}), z.state === "docked" && K.battery_level < 100 && J(z.entity_id, null, { battery_level: Math.min(100, K.battery_level + 2) }), b && Date.now() - b.at > 5e3 && (J("alarm_control_panel." + nn + "house", "armed_" + b.mode, {}), b = null), U && a();
  }
  const N = setInterval(ie, 1e3), P = setInterval(() => {
    B(), a();
  }, 60 * 1e3);
  function Y(U, G, J) {
    const z = J == null ? void 0 : J.entity_id;
    if (!l[z]) return !1;
    const K = l[z], re = K.attributes, A = (V, ve) => f(z, V, ve);
    if (U === "climate" && (G === "set_temperature" && A(null, { temperature: Math.max(re.min_temp, Math.min(re.max_temp, J.temperature)) }), G === "set_hvac_mode" && A(J.hvac_mode, J.hvac_mode === "off" ? { hvac_action: "off" } : {}), G === "toggle" && A(K.state === "off" ? "heat" : "off", K.state === "off" ? {} : { hvac_action: "off" })), U === "cover") {
      const V = G === "open_cover" ? 100 : G === "close_cover" ? 0 : G === "set_cover_position" ? J.position : G === "toggle" ? re.current_position > 0 ? 0 : 100 : null;
      G === "stop_cover" && (delete x[z], delete L[z], A(re.current_position === 0 ? "closed" : "open")), V != null && V !== re.current_position && (x[z] = V, A(V > re.current_position ? "opening" : "closing"));
      const ve = G === "open_cover_tilt" ? 100 : G === "close_cover_tilt" ? 0 : G === "set_cover_tilt_position" ? J.tilt_position : null;
      G === "stop_cover_tilt" && delete L[z], ve != null && re.current_tilt_position != null && ve !== re.current_tilt_position && (L[z] = ve);
    }
    if (U === "humidifier" && (G === "set_humidity" && A(null, { humidity: Math.max(re.min_humidity, Math.min(re.max_humidity, J.humidity)) }), G === "set_mode" && A(null, { mode: J.mode }), G === "turn_on" || G === "turn_off" || G === "toggle")) {
      const V = G === "turn_on" || G === "toggle" && K.state !== "on";
      A(V ? "on" : "off", { action: V ? "idle" : "off" });
    }
    if (U === "vacuum" && (G === "start" && A("cleaning", { rooms: J.rooms || re.rooms }), G === "pause" && A("paused"), G === "return_to_base" && A("returning", { rooms: [] }), G === "locate" && A(null, { located: Date.now() }), G === "set_rooms" && A(null, { rooms: J.rooms })), U === "valve") {
      const V = G === "open_valve" || G === "toggle" && K.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(G) && A(V ? "open" : "closed");
    }
    if (U === "alarm_control_panel") {
      G === "alarm_disarm" && (b = null, A("disarmed", { changed_by: "Matt" }));
      const V = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[G];
      V && (b = { mode: V, at: Date.now() }, A("arming", { changed_by: "Matt" }));
    }
    return a(), !0;
  }
  function Q(U) {
    const G = (U == null ? void 0 : U.states) || {}, J = (U == null ? void 0 : U.entities) || {}, z = (U == null ? void 0 : U.devices) || {}, K = (M) => {
      var de;
      const _ = J[M];
      return _ && (_.area_id || _.device_id && ((de = z[_.device_id]) == null ? void 0 : de.area_id)) || null;
    }, re = (M) => {
      const _ = J[M];
      return G[M] && G[M].state !== "unavailable" && !(_ != null && _.hidden) && !(_ != null && _.entity_category);
    }, A = {};
    Object.keys(G).forEach((M) => {
      const _ = K(M);
      _ && re(M) && (A[_] || (A[_] = [])).push(M);
    });
    const V = { ...G, ...l }, ve = (M) => {
      var _, de;
      return (de = (_ = V[M]) == null ? void 0 : _.attributes) == null ? void 0 : de.device_class;
    }, Te = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], v = Object.keys(G).filter((M) => M.startsWith("vacuum.") && re(M)), Me = Object.values((U == null ? void 0 : U.areas) || {}).filter((M) => !Dp.has(M.area_id)).map((M) => {
      const _ = M.area_id, de = A[_] || [], W = (Ze) => de.filter((Ct) => Ct.startsWith(Ze + ".")), ee = (Ze) => W("sensor").filter((Ct) => ve(Ct) === Ze), se = (Ze) => Object.keys(l).filter((Ct) => i[Ct] === _ && Ze(Ct)), ue = (Ze, Ct) => Ze.length ? Ze : se(Ct), We = ue(ee("temperature"), (Ze) => Ze.endsWith(_ + "_temperature")), Xe = ue(ee("humidity"), (Ze) => Ze.endsWith(_ + "_humidity")), vt = ee("power").filter((Ze) => /^(W|kW)$/.test(V[Ze].attributes.unit_of_measurement || "")), an = W("binary_sensor").filter((Ze) => ve(Ze) === "moisture"), Dn = ue(W("plant"), (Ze) => Ze.startsWith("plant.")).map((Ze) => ({ id: Ze, readings: se((Ct) => Ct.startsWith("sensor." + Ze.split(".")[1] + "_")) })), Ft = [...W("binary_sensor").filter((Ze) => Te.includes(ve(Ze))), ...se((Ze) => Ze.startsWith("binary_sensor."))];
      return {
        id: _,
        name: M.name,
        icon: M.icon,
        readings: [...We.slice(0, 1), ...Xe.slice(0, 1), ...an],
        power: vt.length ? vt.reduce((Ze, Ct) => Ze + Number(V[Ct].state) * (V[Ct].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: W("switch"),
        lights: W("light"),
        actions: [...W("light"), ...ue(W("climate"), (Ze) => Ze.startsWith("climate.")), ...ue(W("cover"), (Ze) => Ze.startsWith("cover.")), ...ue(W("humidifier"), (Ze) => Ze.startsWith("humidifier.")), ...ue(W("valve"), (Ze) => Ze.startsWith("valve.")), ...W("media_player"), ...W("vacuum"), ...v.length ? [] : se((Ze) => Ze.startsWith("vacuum."))],
        solar: se((Ze) => Ze.includes("_solar_")),
        plants: Dn,
        openings: Ft,
        alerts: [...an, ...Ft].filter((Ze) => {
          var Ct;
          return ((Ct = V[Ze]) == null ? void 0 : Ct.state) === "on";
        })
      };
    }).filter((M) => M.readings.length || M.plugs.length || M.actions.length || M.solar.length || M.plants.length), Se = Object.keys(G).find((M) => /^sensor\..*(p1_meter_power|grid_power)$/.test(M) && G[M].state !== "unavailable") || null, qe = (M) => Object.keys(G).filter((_) => _.startsWith(M + ".") && re(_)), y = qe("alarm_control_panel"), T = v.length ? v : ["vacuum." + nn + "robot"];
    return {
      states: V,
      rooms: Me,
      grid: Se,
      vacuums: T,
      homeVacuums: T.filter((M) => !Me.some((_) => _.actions.includes(M))),
      security: {
        alarms: y.length ? y : ["alarm_control_panel." + nn + "house"],
        locks: qe("lock"),
        openings: [...Object.keys(l).filter((M) => M.startsWith("binary_sensor.")), "sensor." + nn + "doorbell"]
      }
    };
  }
  return { model: Q, call: Y, stop() {
    clearInterval(N), clearInterval(P);
  } };
}
const Ao = (a) => a < 0 ? 0 : a > 1 ? 1 : a, Ul = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((p) => p + p).join("") : l;
  return [0, 2, 4].map((p) => parseInt(i.slice(p, p + 2), 16) || 0);
}, Pp = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Bd = {}, Ca = (a, l, i) => {
  const p = a + l + i;
  return Bd[p] || (Bd[p] = Pp(Ul(a).map((f, g) => f + (Ul(l)[g] - f) * i)));
}, Pd = {}, qs = (a) => Pd[a] || (Pd[a] = Ul(a));
function Ip(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [Ca(l.clear[0], l.cloudy[0], 0.12), Ca(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Ca(l.rain[0], "#000000", 0.22), Ca(l.rain[1], "#000000", 0.22)], l;
}
const Hp = [
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
], Lo = (a, l) => (Hp[(l & 7) * 8 + (a & 7)] + 0.5) / 64, Mc = 1, Cc = 2, Sc = 3, Tc = 4, cr = 5, zs = 6, Yl = 7, Lc = 8, Id = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), Fp = (a, l, i) => {
  let p = !1;
  for (let f = 0, g = a.length - 1; f < a.length; g = f++) {
    const x = a[f], L = a[g];
    x[1] > i != L[1] > i && l < (L[0] - x[0]) * (i - x[1]) / (L[1] - x[1]) + x[0] && (p = !p);
  }
  return p;
};
function Op(a, l, i, p, { oneBit: f, ink: g, paper: x, snowInk: L }) {
  const b = new Uint8ClampedArray(i * p * 4), B = qs(g), le = qs(x);
  for (let ie = 0; ie < p; ie++) for (let N = 0; N < i; N++) {
    const P = ie * i + N, Y = l[P];
    if (a[P] == null) continue;
    let Q = qs(a[P]);
    if (f) {
      let U;
      Y === Tc || Y === Lc ? U = !0 : Y === cr ? U = L : Y === Yl || Y === zs ? U = !1 : U = Math.round((0.2126 * Q[0] + 0.7152 * Q[1] + 0.0722 * Q[2]) / 255 * 4) / 4 <= Lo(N, ie), (Y === Mc || Y === Cc || Y === Sc || Y === zs) && (N > 0 && l[P - 1] !== Y || N < i - 1 && l[P + 1] !== Y || ie > 0 && l[P - i] !== Y || ie < p - 1 && l[P + i] !== Y) && (U = !0), Q = U ? B : le;
    }
    b[P * 4] = Q[0], b[P * 4 + 1] = Q[1], b[P * 4 + 2] = Q[2], b[P * 4 + 3] = 255;
  }
  return { w: i, h: p, data: b };
}
const qp = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Wp = (a) => Gs(a, !1).split("/")[0], Tl = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, zp = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Vp = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", jp = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Gp = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Up = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Yp = [".##", "##.", ".#.", "#.."];
function Ac(a, { width: l, height: i, colors: p, wave: f = 0.38, soft: g = 6, glow: x = 0.6, columns: L = 6 }) {
  const b = { ..._o, dawn: "#e5a77e", ...p }, B = Ip(b), le = l, ie = i, N = le / L, P = N / 2, Y = Math.PI * 2, Q = a.length ? a : [{ cond: "cloudy", night: !1 }], U = [...Array(L * 2)].map((K, re) => {
    const A = Q[Math.min(re, Q.length - 1)], V = Wp(A.cond), ve = re % 2 === 1;
    return { cond: A.cond, k: V, night: ve, sky: B[V][ve ? 1 : 0], cover: qp[V] };
  }), G = (K) => ie * (0.5 - f * Math.cos(Y * (K / N - 0.25)));
  return { C: b, S: U, W: le, H: ie, cw: N, sw: P, TAU: Y, yb: G, side: (K, re, A) => {
    const V = (K ? G(re) - A : A - G(re)) / Math.max(3, g * 1.4) + 0.5;
    return V <= 0 ? 0 : V >= 1 ? 1 : V;
  }, glowAt: (K) => {
    const re = ((K / N - 0.25) % 1 + 1) % 1, A = Math.max(0, Math.min(L - 1, Math.round(K / N - 0.25))), V = Math.max(0, Math.min(L - 1, Math.round(K / N - 0.75))), ve = 1 - (U[2 * A].cover + U[2 * V + 1].cover) / 2, Te = Math.sin(Math.PI * Math.min(1, Math.max(0, G(K) / ie)));
    return { c: re < 0.5 ? b.dusk : b.dawn, a: x * (0.2 + 0.8 * ve) * Te * Te };
  }, soft: g, tw: N * 0.3, sy: ie / 90 };
}
function Ec(a, { clock: l = 0, ambient: i = !1, seed: p = 1 }) {
  const { S: f, sw: g, side: x, C: L, TAU: b, sy: B } = a, le = l, ie = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return f.forEach((N, P) => {
    const Y = Tl(p * 977 + P * 131 + 7), Q = (P + 0.5) * g, U = N.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[N.k] : 0;
    for (let G = 0; G < U; G++) {
      const J = Q + (Y() - 0.5) * g * 1.6, z = (6 + Y() * 76) * B, K = Y() < 0.35, re = 1.8 + Y() * 1.6, A = x(!0, J, z) * (K ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(b * le / 2600 + G * 1.7 + P) : 1);
      A >= 0.03 && ie.stars.push({ x: J, y: z, big: K, size: re, o: A });
    }
    if (!N.night && (N.k === "clear" || N.k === "partly")) {
      const G = Q + (Y() - 0.5) * g * 0.3, J = Math.min(15, g * 0.29);
      ie.suns.push({ x: G, y: 32 * B, rad: J, halo: J * 2.8 * (i ? 1 + 0.07 * Math.sin(b * le / 3600 + P) : 1) });
    }
    if (N.night && (N.k === "clear" || N.k === "partly")) {
      const G = Math.min(0.78, g * 0.55 / 34), J = Q - 23 * G + (Y() - 0.5) * g * 0.2;
      ie.moons.push({ x: J + 23 * G, y: (4 + (i ? 0.8 * Math.sin(b * le / 5200 + P) : 0)) * B + 23 * G, d: 46 * G });
    }
  }), f.forEach((N, P) => {
    const Y = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[N.k];
    if (!Y) return;
    const Q = Tl(p * 577 + P * 71 + 3), U = (P + 0.5) * g, G = N.k === "rain" || N.k === "storm" || N.night ? L.cloudNight : L.cloudDay, J = N.night ? 0.82 : N.k === "storm" ? 0.75 : 1;
    for (let z = 0; z < Y; z++) {
      const K = g / 46 * (N.k === "partly" ? 0.85 : 0.75 + Q() * 0.55), re = U + (N.k === "partly" ? g * 0.12 : (Q() - 0.5) * g * 1.05), A = (N.k === "partly" ? 40 : 6 + Q() * 26) * B, V = i ? 2.5 * Math.sin(b * le / 9e3 + P * 1.3 + z * 2.1) : 0, ve = i ? 0.9 * Math.sin(b * le / 6100 + P + z) : 0;
      ie.clouds.push({ x: re - 23 * K + V, y: A - 15.33 * K + ve, w: 46 * K, h: 30.66 * K, fill: G, o: J * (Y > 1 && z === 0 ? 0.85 : 1) });
    }
  }), f.forEach((N, P) => {
    const Y = Tl(p * 313 + P * 29 + 11), Q = (P + 0.5) * g, U = N.cond === "pouring" ? 16 : N.cond === "rainy" || N.cond === "hail" ? 9 : N.cond === "lightning-rainy" ? 12 : N.cond === "snowy-rainy" ? 5 : 0;
    for (let J = 0; J < U; J++) {
      let z = Q + (Y() - 0.5) * g * 1.05, K = 44 + Y() * 36, re = 1;
      if (i) {
        const V = ((K - 44 + le * 0.04) % 36 + 36) % 36;
        z -= 0.21 * (V - (K - 44)), K = 44 + V, re = Math.min(1, V / 6, (36 - V) / 6);
      }
      K *= B;
      const A = x(N.night, z, K) * re;
      A >= 0.05 && ie.drops.push({ x: z, y: K, o: A });
    }
    const G = N.cond === "snowy" ? 11 : N.cond === "snowy-rainy" ? 6 : 0;
    for (let J = 0; J < G; J++) {
      let z = Q + (Y() - 0.5) * g * 1.05, K = 40 + Y() * 44, re = 1;
      if (i) {
        const V = ((K - 40 + le * 9e-3) % 44 + 44) % 44;
        K = 40 + V, z += 1.6 * Math.sin(b * le / 2800 + J * 1.9 + P), re = Math.min(1, V / 6, (44 - V) / 6);
      }
      K *= B;
      const A = x(N.night, z, K) * re;
      A >= 0.05 && ie.flakes.push({ x: z, y: K, o: A });
    }
    if (N.k === "fog") {
      const J = N.night ? "#c8ccd6" : "#ffffff", z = N.night ? 0.28 : 0.62, K = i ? 4 * Math.sin(b * le / 8e3 + P) : 0;
      for (let re = 0; re < 4; re++) ie.fogs.push({ x: Q - g * 0.75 + re % 2 * g * 0.18 + (re % 2 ? K : -K), y: (30 + re * 13) * B, w: g * 1.3, c: J, a: z });
    }
    if (N.k === "storm") {
      const J = (le / 3400 + P * 0.37) % 1;
      ie.bolts.push({ x: Q + (Y() - 0.5) * g * 0.3 - 5, y: 36 * B, o: i && !(J < 0.05 || J > 0.09 && J < 0.12) ? 0.8 : 1 });
    }
  }), ie;
}
function Zp(a, l, i, p, f, g, x, L) {
  const { S: b, C: B, cw: le, yb: ie, glowAt: N, soft: P, tw: Y, sy: Q } = a, U = new Array(i * p), G = new Uint8Array(i * p), J = new Uint8Array(i * p), z = (y, T, M, _, de) => {
    M == null || y < 0 || T < 0 || y >= i || T >= p || (_ >= 1 || _ > Lo(y + 5, T + 3)) && (U[T * i + y] = M, G[T * i + y] = de);
  }, K = (y, T, M, _) => {
    for (let de = Math.max(0, Math.floor(T - M) - 1); de <= Math.min(p - 1, T + M + 1); de++) for (let W = Math.max(0, Math.floor(y - M) - 1); W <= Math.min(i - 1, y + M + 1); W++) _(W, de, W + 0.5 - y, de + 0.5 - T);
  }, re = (y, T, M) => {
    for (let de = 0; de < y.length - 1; de++) {
      const W = (de + T) * le;
      if (M < W - Y / 2) return [y[de], y[de], 0];
      if (M <= W + Y / 2) return [y[de], y[de + 1], (M - W + Y / 2) / Y];
    }
    const _ = y[y.length - 1];
    return [_, _, 0];
  }, A = b.filter((y) => !y.night).map((y) => y.sky), V = b.filter((y) => y.night).map((y) => y.sky), ve = P / g, Te = 16 * Q / g;
  for (let y = 0; y < i; y++) {
    const T = (y + 0.5) * f, M = ie(T) / g, _ = re(A, 0.75, T), de = re(V, 1.25, T), W = N(T);
    for (let ee = 0; ee < p; ee++) {
      const se = Lo(y, ee), ue = ee + 0.5 - M, We = (ve > 0.01 ? Ao(0.5 + ue / ve) : ue > 0 ? 1 : 0) > se;
      let Xe = We ? _[2] > se ? _[1] : _[0] : de[2] > se ? de[1] : de[0];
      (We ? Ao(((ee + 0.5) / p - 0.45) / 0.55) * 0.7 : Ao(1 - (ee + 0.5) / (p * 0.55)) * 0.7) > Lo(y + 2, ee + 5) && (Xe = We ? Ca(Xe, "#ffffff", 0.18) : Ca(Xe, "#000000", 0.25)), We && ue >= 0 && ue < Te && W.a * 1.3 * (1 - ue / Te) > Lo(y + 6, ee + 1) && (Xe = W.c), U[ee * i + y] = Xe, J[ee * i + y] = We ? 0 : 1;
    }
  }
  const v = Ca(B.sun, "#ffffff", 0.55), Me = Ca(B.moon, "#ffffff", 0.6);
  l.stars.forEach((y) => {
    const T = Math.floor(y.x / f), M = Math.floor(y.y / g);
    if (T < 0 || M < 0 || T >= i || M >= p || !J[M * i + T] || y.o < 0.15) return;
    const _ = y.o > 0.45 ? B.star : Ca(B.star, U[M * i + T], 0.5), de = y.big && y.o > 0.6 ? Math.floor(y.size / f) : 0;
    z(T, M, _, 1, Yl);
    for (let W = 1; W <= de; W++) [[T - W, M], [T + W, M], [T, M - W], [T, M + W]].forEach((ee) => {
      ee[0] >= 0 && ee[1] >= 0 && ee[0] < i && ee[1] < p && J[ee[1] * i + ee[0]] && z(ee[0], ee[1], _, 1, Yl);
    });
  }), l.suns.forEach((y) => {
    const T = Math.max(1.5, y.rad / f), M = y.x / f, _ = y.y / g, de = y.halo / f * 0.85;
    if (K(M, _, de, (W, ee, se, ue) => {
      const We = Math.sqrt(se * se + ue * ue);
      We > T && We < de && !J[ee * i + W] && z(W, ee, v, 0.3 * (1 - (We - T) / (de - T)), 0);
    }), L) {
      const W = Math.floor(x / 500) % 2, ee = Math.max(1, T * 0.3);
      for (let se = 0; se < 8; se++) if (se % 2 === W) for (let ue = T + 1.2; ue < T + 1.2 + ee; ue += 0.7) z(Math.floor(M + Math.cos(se * Math.PI / 4) * ue), Math.floor(_ + Math.sin(se * Math.PI / 4) * ue), B.sun, 1, Lc);
    }
    K(M, _, T, (W, ee, se, ue) => {
      se * se + ue * ue <= T * T && z(W, ee, Ao(((ue / T + 1) / 2 - 0.6) / 0.4) > Lo(W, ee) ? B.sunEdge : B.sun, 1, Mc);
    });
  }), l.moons.forEach((y) => {
    const T = Math.max(1.5, y.d * 0.37 / f), M = y.x / f, _ = y.y / g, de = M + 0.547 * T, W = _ - 0.503 * T, ee = 0.82 * T;
    K(M, _, T, (se, ue, We, Xe) => {
      if (We * We + Xe * Xe > T * T) return;
      const vt = se + 0.5 - de, an = ue + 0.5 - W;
      vt * vt + an * an > ee * ee && z(se, ue, Ao((Xe + T) / (2 * T) * 1.1 - 0.1) > Lo(se, ue) ? B.moon : Me, 1, Cc);
    });
  }), l.clouds.forEach((y) => {
    const T = Math.max(3, y.w / f), M = T * 0.6665, _ = y.x / f, de = y.y / g, W = Ca(y.fill, "#000000", 0.16);
    for (let ee = Math.max(0, Math.floor(de) - 1); ee <= Math.min(p - 1, de + M + 1); ee++) for (let se = Math.max(0, Math.floor(_) - 1); se <= Math.min(i - 1, _ + T + 1); se++) {
      const ue = (se + 0.5 - _) / T, We = (ee + 0.5 - de) / T;
      Id(ue, We) && z(se, ee, !Id(ue, We + 1 / T) || Ao((We - 0.42) / 0.25) * 0.8 > Lo(se, ee) ? W : y.fill, y.o, Sc);
    }
  }), l.fogs.forEach((y) => {
    const T = Math.floor(y.y / g), M = Math.max(T, Math.floor((y.y + 6 * Q) / g) - 1), _ = Math.floor(y.x / f), de = Math.floor((y.x + y.w) / f);
    for (let W = T; W <= M; W++) for (let ee = _; ee <= de; ee++) {
      const se = (ee - _) / Math.max(1, de - _);
      z(ee, W, y.c, y.a * (se < 0.25 ? se / 0.25 : se > 0.75 ? (1 - se) / 0.25 : 1), 0);
    }
  });
  const Se = Math.max(2, Math.round(9 / g));
  l.drops.forEach((y) => {
    const T = y.x / f, M = Math.floor(y.y / g);
    for (let _ = 0; _ < Se; _++) z(Math.floor(T - 0.208 * _ * g / f), M + _, B.rain, y.o, Tc);
  });
  const qe = Math.max(0, Math.round(4.4 / f / 2.6));
  return l.flakes.forEach((y) => {
    const T = Math.floor(y.x / f), M = Math.floor(y.y / g);
    z(T, M, B.snow, y.o, cr);
    for (let _ = 1; _ <= qe; _++)
      z(T - _, M, B.snow, y.o, cr), z(T + _, M, B.snow, y.o, cr), z(T, M - _, B.snow, y.o, cr), z(T, M + _, B.snow, y.o, cr);
  }), l.bolts.forEach((y) => {
    if (f <= 3.5)
      for (let T = Math.floor(y.y / g); T <= (y.y + 24) / g; T++) for (let M = Math.floor(y.x / f); M <= (y.x + 11) / f; M++)
        Fp(Up, (M + 0.5) * f - y.x, (T + 0.5) * g - y.y) && z(M, T, B.sun, 1, zs);
    else {
      const T = Math.round(y.x / f), M = Math.round(y.y / g);
      Yp.forEach((_, de) => _.split("").forEach((W, ee) => {
        W === "#" && z(T + ee, M + de, B.sun, 1, zs);
      }));
    }
  }), { col: U, ids: G };
}
function Kp(a, l) {
  const i = l.px, p = Math.max(6, Math.round(l.width / i)), f = Math.max(6, Math.round(l.height / i)), g = l.width / p, x = l.height / f, L = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, b = (P) => {
    const Y = Ac(P, l);
    return Zp(Y, Ec(Y, { clock: L, ambient: l.ambient, seed: l.seed }), p, f, g, x, L, l.ambient);
  }, B = b(a), le = l.reveal == null ? 1 : Ao(l.reveal);
  let ie = B.col, N = B.ids;
  if (le < 1) {
    const P = l.prev ? b(l.prev) : null, Y = le * (p + 12);
    ie = new Array(p * f), N = new Uint8Array(p * f);
    for (let Q = 0; Q < p * f; Q++) {
      const U = Q % p, G = Q / p | 0;
      (l.reduce ? le : Ao((Y - U) / 12)) > Lo(U, G) ? (ie[Q] = B.col[Q], N[Q] = B.ids[Q]) : P ? (ie[Q] = P.col[Q], N[Q] = P.ids[Q]) : (ie[Q] = null, N[Q] = 255);
    }
  }
  return Op(ie, N, p, f, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function $p(a, l, i) {
  const p = i.width, f = i.height, g = i.reveal == null ? 1 : Ao(i.reveal), x = (N, P) => {
    const Y = Ac(P, i);
    Xp(N, Y, Ec(Y, i));
  };
  if (a.clearRect(0, 0, p, f), g >= 1) {
    x(a, l);
    return;
  }
  if (i.prev && x(a, i.prev), i.reduce) {
    a.save(), a.globalAlpha = g, x(a, l), a.restore();
    return;
  }
  const L = a.canvas, b = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (b.width !== L.width || b.height !== L.height) && (b.width = L.width, b.height = L.height);
  const B = b.getContext("2d");
  B.setTransform(a.getTransform()), B.clearRect(0, 0, p, f), x(B, l);
  const le = g * (p + 64) - 64, ie = B.createLinearGradient(le, 0, le + 64, 0);
  ie.addColorStop(0, "rgba(0,0,0,1)"), ie.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = ie, B.fillRect(0, 0, p, f), B.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(b, 0, 0), a.restore();
}
function Xp(a, l, i) {
  const { W: p, H: f, S: g, C: x, cw: L, yb: b, glowAt: B, soft: le, tw: ie, sy: N } = l, P = (v, Me) => {
    const Se = qs(v);
    return "rgba(" + Se[0] + "," + Se[1] + "," + Se[2] + "," + Math.max(0, Math.min(1, Me)).toFixed(3) + ")";
  }, Y = (v, Me) => {
    const Se = a.createLinearGradient(0, 0, p, 0);
    Se.addColorStop(0, v[0]);
    for (let qe = 0; qe < v.length - 1; qe++) {
      const y = (qe + Me) * L, T = (y - ie / 2) / p, M = (y + ie / 2) / p;
      T > 0 && T < 1 && Se.addColorStop(T, v[qe]), M > 0 && M < 1 && Se.addColorStop(M, v[qe + 1]);
    }
    return Se.addColorStop(1, v[v.length - 1]), Se;
  }, Q = Math.max(24, Math.ceil(p / 4)), U = (v, Me) => {
    a.beginPath();
    for (let Se = 0; Se <= Q; Se++) {
      const qe = p * Se / Q, y = v == null ? 0 : b(qe) + v;
      Se ? a.lineTo(qe, y) : a.moveTo(qe, y);
    }
    for (let Se = Q; Se >= 0; Se--) {
      const qe = p * Se / Q;
      a.lineTo(qe, b(qe) + Me);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = Y(g.filter((v) => !v.night).map((v) => v.sky), 0.75), a.fillRect(0, 0, p, f);
  const G = a.createLinearGradient(0, 0, p, 0);
  for (let v = 0; v <= 64; v++) {
    const Me = B(p * v / 64);
    G.addColorStop(v / 64, P(Me.c, Math.min(1, Me.a)));
  }
  a.fillStyle = G;
  for (let v = 0; v < 8; v++)
    a.globalAlpha = 1 - v / 8, U(v * 2 * N, (v + 1) * 2 * N);
  a.fillStyle = Y(g.filter((v) => v.night).map((v) => v.sky), 1.25);
  const J = Math.max(0.5, le), z = 6;
  a.globalAlpha = 1, U(null, -J);
  for (let v = 0; v < z; v++)
    a.globalAlpha = 1 - (v + 0.5) / z, U(-J + 2 * J * v / z, -J + 2 * J * (v + 1) / z);
  a.globalAlpha = 1;
  const K = new Path2D(jp), re = new Path2D(Vp), A = new Path2D(zp), V = new Path2D(Gp);
  a.fillStyle = x.star, i.stars.forEach((v) => {
    a.globalAlpha = v.o, v.big ? (a.save(), a.translate(v.x, v.y), a.scale(v.size, v.size), a.fill(K), a.restore()) : (a.beginPath(), a.arc(v.x, v.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const ve = Ca(x.sun, "#ffffff", 0.55);
  i.suns.forEach((v) => {
    const Me = a.createRadialGradient(v.x, v.y, 0, v.x, v.y, v.halo);
    Me.addColorStop(0, P(ve, 0.42)), Me.addColorStop(0.7, P(ve, 0)), a.fillStyle = Me, a.beginPath(), a.arc(v.x, v.y, v.halo, 0, Math.PI * 2), a.fill();
    const Se = a.createLinearGradient(0, v.y - v.rad, 0, v.y + v.rad);
    Se.addColorStop(0.6, x.sun), Se.addColorStop(1, x.sunEdge), a.fillStyle = Se, a.beginPath(), a.arc(v.x, v.y, v.rad, 0, Math.PI * 2), a.fill();
  });
  const Te = Ca(x.moon, "#ffffff", 0.6);
  i.moons.forEach((v) => {
    a.save(), a.translate(v.x - v.d / 2, v.y - v.d / 2), a.scale(v.d / 46, v.d / 46);
    const Me = a.createLinearGradient(0, 6, 0, 40);
    Me.addColorStop(0, Te), Me.addColorStop(1, x.moon), a.fillStyle = Me, a.fill(re), a.restore();
  }), i.clouds.forEach((v) => {
    a.save(), a.globalAlpha = v.o, a.translate(v.x, v.y), a.scale(v.w / 46, v.h / 30.66), a.translate(-4, -9.67), a.fillStyle = v.fill, a.fill(A), a.restore();
  }), i.fogs.forEach((v) => {
    const Me = a.createLinearGradient(v.x, 0, v.x + v.w, 0);
    Me.addColorStop(0, P(v.c, 0)), Me.addColorStop(0.25, P(v.c, v.a)), Me.addColorStop(0.75, P(v.c, v.a)), Me.addColorStop(1, P(v.c, 0)), a.fillStyle = Me, a.fillRect(v.x, v.y, v.w, 6 * N);
  }), a.fillStyle = x.rain, i.drops.forEach((v) => {
    a.save(), a.globalAlpha = v.o, a.translate(v.x, v.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = x.snow, i.flakes.forEach((v) => {
    a.globalAlpha = v.o, a.beginPath(), a.arc(v.x, v.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = x.sun, i.bolts.forEach((v) => {
    a.save(), a.globalAlpha = v.o, a.translate(v.x, v.y), a.fill(V), a.restore();
  }), a.restore();
}
const Jp = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", lr = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Rs = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Ll = (a, l) => '<path class="' + l + '" d="' + a + '"/>', Qp = (a, l) => ' style="animation-delay:-' + Math.round(a * 137 % l) + 'ms"', xa = (a, l, i, p) => {
  const f = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + Qp(a, 2400) + ' d="M' + a + " " + (l - i) + "L" + (a + f) + " " + (l - f) + "L" + (a + i) + " " + l + "L" + (a + f) + " " + (l + f) + "L" + a + " " + (l + i) + "L" + (a - f) + " " + (l + f) + "L" + (a - i) + " " + l + "L" + (a - f) + " " + (l - f) + 'Z"/>';
}, Hd = ([a, l, i], p) => '<path class="wbMoonPath" d="' + a + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + l + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', eu = (a, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', tu = (a) => (a ? ["29.35", "43.04", "56.74"].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), nu = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, i], p) => '<circle class="wbFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + l + '" cy="' + i + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function au(a, l, i, p) {
  return a === "clear" ? l ? Hd(i ? Rs.l : Rs.s, p) + (i ? xa(70, 20, 5.83, 1) + xa(78.33, 41.67, 3.75, 0.8) + xa(60, 71.67, 3.33, 0.6) : xa(42, 12, 3.5, 1) + xa(47, 25, 2.25, 0.8) + xa(36, 43, 2, 0.6)) : eu(p, i) : a === "partly" ? (l ? Hd(i ? Rs.lp : Rs.sp, p) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Ll(i ? lr.lp : lr.sp, l ? "wbCloudLight" : "wbBright") + (l ? i ? xa(73.33, 16.67, 4.17, 0.9) : xa(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? Ll(i ? lr.lc : lr.s, l ? "wbCloudLight" : "wbBright") + (l ? i ? xa(15, 15, 3.75, 0.8) + xa(76.67, 13.33, 2.92, 0.6) : xa(9, 9, 2.25, 0.8) + xa(46, 8, 1.75, 0.6) : "") : Ll(i ? lr.lr : lr.s, "wbCloudLight") + (a === "rain" ? tu(i) : nu(i));
}
function ou(a, l, i, p) {
  let f = Jp(a);
  const g = f === "night" || !!i;
  f === "night" && (f = "clear");
  const x = l ? 90 : 54;
  return { k: f, night: g, svg: '<svg viewBox="0 0 ' + x + " " + x + '">' + au(f, g, l, p) + "</svg>" };
}
const oo = 6e4, no = 36e5, Ei = 864e5, $r = 1440, iu = 6, ru = 10 * oo, Ns = 3, Al = 20, su = 3, lu = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), du = 30 * oo, cu = 7, pu = 3, Fd = 1, uu = oo, hu = 15 * oo, ta = {
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
}, it = {
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
}, fu = {
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
}, mu = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], gu = Object.keys(it.phases), Bs = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, vu = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, _c = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Ps = 100, Od = "µg/m³", bu = "weather_alerts.air_quality_pollen", qd = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], wu = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, xu = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], yu = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, ku = { daily: 1, hourly: 2 }, Fe = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), ya = (a, l) => a.replace(/\{(\w+)\}/g, (i, p) => l[p] ?? ""), pr = (a) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + a + '"/></svg>', Mu = () => {
  var a;
  return !!((a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches);
}, _n = (a) => a != null && a !== "" && Number.isFinite(Number(a)), Wd = /* @__PURE__ */ new Map(), zd = /* @__PURE__ */ new Map(), El = /* @__PURE__ */ new WeakMap(), Cu = (a) => {
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
function vn(a, l, i) {
  const p = Number(a);
  if (Number.isNaN(p)) return String(a);
  const f = (l == null ? void 0 : l.number_format) === "none", g = { maximumFractionDigits: 2, ...i, ...f ? { useGrouping: !1 } : {} }, x = f ? "en-US" : Cu(l), L = JSON.stringify([x, g]);
  let b = Wd.get(L);
  if (!b) {
    try {
      b = new Intl.NumberFormat(x, g);
    } catch {
      b = new Intl.NumberFormat(void 0, g);
    }
    Wd.set(L, b);
  }
  return b.format(p);
}
const td = (a) => {
  var l;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.language) || (a == null ? void 0 : a.language) || void 0;
};
function Su(a) {
  if (!a) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (El.has(a)) return El.get(a);
  const l = a.time_format, i = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? a.language : void 0).includes("10") : l === "12";
  return El.set(a, i), i;
}
const Dc = (a) => {
  var l, i;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.time_zone) === "server" && ((i = a == null ? void 0 : a.config) != null && i.time_zone) ? a.config.time_zone : void 0;
};
function Rc(a, l) {
  const i = JSON.stringify([a, l]);
  let p = zd.get(i);
  if (!p) {
    try {
      p = new Intl.DateTimeFormat(a, l);
    } catch {
      p = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    zd.set(i, p);
  }
  return p;
}
const dr = (a, l) => Rc(td(l), { hour: "numeric", minute: "2-digit", hourCycle: Su(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: Dc(l) }).format(a), Vd = (a, l) => Rc(td(l), { weekday: "short", timeZone: Dc(l) }).format(a), Tu = (a, l) => a.toLocaleDateString(td(l), { weekday: "narrow" }), Wn = (a, l) => _n(l) ? vn(Math.round(Number(l)), a.locale) + "°" : "–", ur = (a) => {
  const l = new Date(a);
  return l.setHours(0, 0, 0, 0), l;
}, Yr = (a, l) => a.getFullYear() === l.getFullYear() && a.getMonth() === l.getMonth() && a.getDate() === l.getDate(), na = Math.PI / 180, Lu = 2440588, Au = 2451545, Vs = na * 23.4397, Eu = 149598e3, _u = -0.833 * na, Du = 0.133 * na, jd = 5 * oo, Nc = (a) => a.getTime() / Ei - 0.5 + Lu - Au, Bc = (a, l) => Math.atan2(Math.sin(a) * Math.cos(Vs) - Math.tan(l) * Math.sin(Vs), Math.cos(a)), Pc = (a, l) => Math.asin(Math.sin(l) * Math.cos(Vs) + Math.cos(l) * Math.sin(Vs) * Math.sin(a)), Ru = (a, l) => na * (280.16 + 360.9856235 * a) - l, Nu = (a, l, i) => Math.asin(Math.sin(l) * Math.sin(i) + Math.cos(l) * Math.cos(i) * Math.cos(a));
function Ic(a) {
  const l = na * (357.5291 + 0.98560028 * a), i = na * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), p = l + i + na * 102.9372 + Math.PI;
  return { ra: Bc(p, 0), dec: Pc(p, 0), dist: Eu };
}
function Hc(a) {
  const l = na * (218.316 + 13.176396 * a), i = na * (134.963 + 13.064993 * a), p = na * (93.272 + 13.22935 * a), f = l + na * 6.289 * Math.sin(i), g = na * 5.128 * Math.sin(p);
  return { ra: Bc(f, g), dec: Pc(f, g), dist: 385001 - 20905 * Math.cos(i) };
}
const Fc = (a, l, i, p) => {
  const f = Nc(l), g = a(f);
  return Nu(Ru(f, na * -p) - g.ra, na * i, g.dec);
}, nd = (a, l, i) => Fc(Ic, a, l, i), Bu = (a, l, i) => Fc(Hc, a, l, i);
function Oc(a, l, i, p) {
  const f = {};
  let g = i.getTime(), x = a(i) - l;
  for (let L = g + jd; L <= p.getTime(); L += jd) {
    const b = a(new Date(L)) - l;
    if (x < 0 != b < 0) {
      const B = new Date(g + (L - g) * x / (x - b));
      b > 0 ? f.rise ?? (f.rise = B) : f.set ?? (f.set = B);
    }
    g = L, x = b;
  }
  return f;
}
const qc = (a) => {
  const l = ur(a);
  return [l, new Date(l.getTime() + Ei)];
}, Pu = (a, l, i) => Oc((p) => nd(p, l, i), _u, ...qc(a)), Iu = (a, l, i) => Oc((p) => Bu(p, l, i), Du, ...qc(a));
function Hu(a) {
  const l = Nc(a), i = Ic(l), p = Hc(l), f = Math.acos(Math.sin(i.dec) * Math.sin(p.dec) + Math.cos(i.dec) * Math.cos(p.dec) * Math.cos(i.ra - p.ra)), g = Math.atan2(i.dist * Math.sin(f), p.dist - i.dist * Math.cos(f)), x = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - p.ra), Math.sin(i.dec) * Math.cos(p.dec) - Math.cos(i.dec) * Math.sin(p.dec) * Math.cos(i.ra - p.ra));
  return { fraction: (1 + Math.cos(g)) / 2, phase: 0.5 + 0.5 * g * (x < 0 ? -1 : 1) / Math.PI };
}
const Fu = (a) => {
  const l = a * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, js = (a) => {
  const l = a == null ? void 0 : a.config;
  return l && _n(l.latitude) && _n(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function Gd(a, l) {
  var B, le, ie;
  const i = js(a), p = i ? Pu(l, i.lat, i.lon) : {}, f = (B = a == null ? void 0 : a.states) == null ? void 0 : B["sun.sun"], g = ur(l).getTime(), x = (N) => {
    const P = N ? new Date(N) : null;
    return P && Number.isFinite(P.getTime()) && ur(P).getTime() === g ? P : null;
  }, L = x((le = f == null ? void 0 : f.attributes) == null ? void 0 : le.next_rising), b = x((ie = f == null ? void 0 : f.attributes) == null ? void 0 : ie.next_setting);
  return L && (p.rise = L), b && (p.set = b), p;
}
function Ou(a) {
  var p;
  const l = (p = a == null ? void 0 : a.states) == null ? void 0 : p["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const i = js(a);
  return i ? nd(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const Xr = (a) => !!a && a.state !== "unavailable" && a.state !== "unknown", Us = (a, l) => {
  var p;
  const i = (p = a.entities) == null ? void 0 : p[l];
  return !i || !i.hidden && !i.entity_category;
}, ka = (a, l, i) => {
  var p, f;
  for (const g of l) {
    const x = (p = a.states) == null ? void 0 : p[g];
    if (!Xr(x)) continue;
    const L = (f = x.attributes) == null ? void 0 : f[i];
    if (L != null && L !== "") return { stateObj: x, value: L };
  }
}, qu = (a, l) => l.map((i) => {
  var p;
  return (p = a.states) == null ? void 0 : p[i];
}).find(Xr), Wu = (a, l, i) => l.map((p) => {
  var f;
  return (f = a.states) == null ? void 0 : f[p];
}).find((p) => {
  var f;
  return Xr(p) && (((f = p.attributes) == null ? void 0 : f.supported_features) == null || Number(p.attributes.supported_features) & ku[i]);
});
function Kr(a, l, i) {
  var g, x, L, b;
  const p = ((x = (g = a.config) == null ? void 0 : g.unit_system) == null ? void 0 : x.length) || "", f = (l == null ? void 0 : l.attributes) || {};
  switch (i) {
    case "precipitation":
      return f.precipitation_unit || (p === "km" ? "mm" : "in");
    case "pressure":
      return f.pressure_unit || (p === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return f.wind_speed_unit || p + "/h";
    default:
      return f.temperature_unit || ((b = (L = a.config) == null ? void 0 : L.unit_system) == null ? void 0 : b.temperature) || "";
  }
}
function Zl(a, l, i, p) {
  try {
    if (typeof a.formatEntityAttributeValueToParts == "function") {
      const [f, ...g] = a.formatEntityAttributeValueToParts(l, i, p).map((x) => x.value);
      return { number: f, unit: g.join("").trim() };
    }
  } catch {
  }
  return { number: vn(p, a.locale), unit: Kr(a, l, i) };
}
function zu(a, l, i, p) {
  try {
    if (typeof a.formatEntityAttributeValue == "function") return a.formatEntityAttributeValue(l, i, p);
  } catch {
  }
  const f = Zl(a, l, i, p);
  return (f.number + " " + f.unit).trim();
}
function Is(a, l) {
  var p;
  try {
    if (typeof a.formatEntityState == "function") return a.formatEntityState(l);
  } catch {
  }
  const i = (p = l.attributes) == null ? void 0 : p.unit_of_measurement;
  return fu[l.state] || (i && _n(l.state) ? vn(l.state, a.locale) + " " + i : l.state);
}
function Ud(a, l) {
  var i;
  try {
    if (typeof a.formatEntityName == "function") return a.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((i = l.attributes) == null ? void 0 : i.friendly_name) || l.entity_id;
}
const Vu = (a) => a < 3 ? "low" : a < 6 ? "moderate" : a < 8 ? "high" : a < 11 ? "very_high" : "extreme", ju = (a) => _c.find(([, l]) => a <= l)[0];
function Gu(a, l) {
  if (l === "Beaufort") return Math.round(a);
  const i = l ? wu[l] : void 0;
  if (i === void 0) return;
  const p = xu.findIndex((f) => a * i < f);
  return p === -1 ? 12 : p;
}
const Yd = (a, l) => {
  const i = l ? yu[l] : void 0;
  return i === void 0 ? void 0 : a * i;
}, Zd = (a) => Object.keys(a.states || {}).find((l) => {
  var i, p;
  return l.startsWith("sensor.") && ((p = (i = a.entities) == null ? void 0 : i[l]) == null ? void 0 : p.platform) === "moon";
}), _l = (a) => Object.values(a.states || {}).filter((l) => {
  var i, p;
  return l.entity_id.startsWith("sensor.") && ((i = l.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((p = l.attributes) == null ? void 0 : p.state_class) ?? "") && Us(a, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function Uu(a) {
  var i;
  const l = {};
  for (const [p, f] of Object.entries(((i = a == null ? void 0 : a.core) == null ? void 0 : i.integration) ?? {})) {
    if (f && "integration_type" in f) {
      l[p] = f.categories;
      continue;
    }
    for (const [g, x] of Object.entries((f == null ? void 0 : f.integrations) ?? {})) l[g] = x == null ? void 0 : x.categories;
  }
  return l;
}
const Wc = (a, l, i) => {
  var f, g, x;
  const p = (g = (f = a.entities) == null ? void 0 : f[i]) == null ? void 0 : g.platform;
  return !!p && !!((x = l[p]) != null && x.includes(bu));
};
function Yu(a, l) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(a.states || {}).filter((p) => {
    var f;
    return p.entity_id.startsWith("sensor.") && qd.includes(((f = p.attributes) == null ? void 0 : f.device_class) ?? "") && Us(a, p.entity_id) && Wc(a, l, p.entity_id);
  }).sort((p, f) => p.entity_id.localeCompare(f.entity_id)).forEach((p) => {
    i.has(p.attributes.device_class) || i.set(p.attributes.device_class, p.entity_id);
  }), qd.map((p) => i.get(p)).filter(Boolean);
}
const Zu = (a, l) => Object.values(a.states || {}).filter((i) => {
  var p, f;
  return i.entity_id.startsWith("sensor.") && Us(a, i.entity_id) && Wc(a, l, i.entity_id) && (((f = (p = a.entities) == null ? void 0 : p[i.entity_id]) == null ? void 0 : f.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function Kd(a, l, i) {
  const p = Math.max(l - a, 1e-6), f = i[i.length - 1], g = i.find((B) => p / B <= 4) ?? f * Math.ceil(p / (4 * f)), x = Math.floor(a / g) * g;
  let L = Math.ceil(l / g) * g;
  L === x && (L = x + g);
  const b = [];
  for (let B = x; B <= L + g / 1e3; B += g) b.push(B);
  return { min: x, max: L, ticks: b };
}
const Zr = (a, l, i) => {
  const p = (x) => [1, 3, 5].map((L) => parseInt(x.slice(L, L + 2), 16)), f = p(a), g = p(l);
  return "rgb(" + f.map((x, L) => Math.round(x + (g[L] - x) * i)).join(", ") + ")";
}, Ku = (a, l, i, p) => {
  const f = i * Math.abs(1 - 2 * p), g = p < 0.5 ? 0 : 1;
  return "M " + a + " " + (l - i) + " A " + i + " " + i + " 0 0 0 " + a + " " + (l + i) + " A " + f + " " + i + " 0 0 " + g + " " + a + " " + (l - i) + " Z";
}, Qo = ({ icon: a, name: l, sub: i, visual: p, double: f, backdrop: g, cls: x }) => '<div class="wbCard wbSquare' + (f ? " wbDouble" : "") + (g ? " wbHasBackdrop" : "") + (x ? " " + x : "") + '">' + (g ? '<div class="wbBackdrop" aria-hidden="true">' + g + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + pr(a) + '</div><div class="wbText"><span class="wbName">' + Fe(l) + "</span>" + (i ? '<span class="wbSub">' + Fe(i) + "</span>" : "") + '</div></div><div class="wbVisual">' + p + "</div></div>", Dl = (a, l) => '<div class="wbValue"><span class="wbNum">' + Fe(a) + "</span>" + (l ? '<span class="wbUnitV">' + Fe(l) + "</span>" : "") + "</div>";
function $u(a) {
  const l = a.max - a.min || 1, i = (L) => 100 - (Math.min(a.max, Math.max(a.min, L)) - a.min) / l * 100, p = (L) => L / $r * 100 + "%", f = (L) => L.map((b) => b.t + "," + i(b.v)).join(" "), g = a.kind === "line" ? a.points : [];
  let x = '<div class="wbDayChart"><div class="wbDcSun">' + a.sun.map((L) => '<span class="wbDcSunMark" style="left:' + p(L.t) + '">' + pr(L.rise ? ta.sunsetUp : ta.sunsetDown) + Fe(L.label) + "</span>").join("") + "</div>";
  return x += '<div class="wbDcY">' + a.ticks.map((L) => '<span style="top:' + i(L) + '%">' + Fe(a.format(L)) + "</span>").join("") + "</div>", x += '<div class="wbDcPlot"><svg viewBox="0 0 ' + $r + ' 100" preserveAspectRatio="none">' + a.night.map(([L, b]) => '<rect class="wbDcNight" x="' + L + '" y="0" width="' + (b - L) + '" height="100"></rect>').join("") + a.ticks.map((L) => '<line class="wbDcGrid" x1="0" x2="' + $r + '" y1="' + i(L) + '" y2="' + i(L) + '" vector-effect="non-scaling-stroke"></line>').join("") + a.sun.map((L) => '<line class="wbDcSunLine" x1="' + L.t + '" x2="' + L.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (a.past && a.past.length > 1 ? '<polyline class="wbDcPast" points="' + f(a.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (g.length > 1 ? '<polygon class="wbDcArea" points="' + g[0].t + ",100 " + f(g) + " " + g[g.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + f(g) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (a.now ? '<line class="wbDcNow" x1="' + a.now.t + '" x2="' + a.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (a.kind === "bars" ? a.points.filter((L) => L.v > 0).map((L) => '<i class="wbDcBar" style="left:' + p(L.t + 12) + ";width:" + p(36) + ";height:" + (100 - i(L.v)) + '%"></i>').join("") : "") + (a.now && a.kind === "line" ? '<i class="wbDcDot" style="left:' + p(a.now.t) + ";top:" + i(a.now.v) + '%"></i>' : "") + (a.peak ? '<span class="wbDcPeak" style="left:' + p(a.peak.t) + ";top:" + i(a.peak.v) + '%">' + Fe(a.peak.label) + "</span>" : "") + (a.note ? '<span class="wbDcNote">' + Fe(a.note) + "</span>" : "") + "</div>", x += '<div class="wbDcX">' + a.hours.map((L) => '<span class="' + (L.minor ? "wbMinor" : "") + '" style="left:' + p(L.t) + '">' + Fe(L.label) + "</span>").join("") + "</div></div>", x;
}
function Xu(a, l) {
  const x = a.map((U) => U.value), L = Math.min(...x), b = Math.max(...x), B = b - L || 1, le = (U) => U / (a.length - 1) * 300, ie = (U) => 18 + (1 - (U - L) / B) * 84, N = a.map((U, G) => le(G) + "," + ie(U.value)).join(" "), P = x.indexOf(b), Y = x.indexOf(L), Q = (U) => U === 0 ? "start" : U === a.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + N + ' 300,102"></polygon><polyline class="wbLine" points="' + N + '" vector-effect="non-scaling-stroke"></polyline><text x="' + le(P) + '" y="' + (ie(b) - 6) + '" text-anchor="' + Q(P) + '">' + Fe(l(b)) + '</text><text x="' + le(Y) + '" y="' + (ie(L) + 14) + '" text-anchor="' + Q(Y) + '">' + Fe(l(L)) + '</text><text x="0" y="120" text-anchor="start">' + Fe(a[0].label) + '</text><text x="300" y="120" text-anchor="end">' + Fe(a[a.length - 1].label) + "</text></svg>";
}
function Ju(a, l) {
  const g = a.map((ie) => ie.value).concat([]), x = Math.min(...g) - 2, L = Math.max(...g) + 1, b = L - x || 1, B = 300 / a.length, le = (ie) => (1 - (ie - x) / b) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + a.map((ie, N) => '<rect class="wbBar' + (ie.now ? " wbNowBar" : "") + '" x="' + (N * B + B * 0.2) + '" y="' + le(ie.value) + '" width="' + B * 0.6 + '" height="' + (104 - le(ie.value)) + '" rx="6"></rect><text x="' + (N * B + B / 2) + '" y="120" text-anchor="middle">' + Fe(ie.label) + "</text>").join("") + "</svg>";
}
const Qu = [
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
], eh = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], $d = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], th = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let nh = 0;
function Xd(a, { getHass: l, entityId: i, style: p = "bitmap", motion: f = !0, cards: g, onOpen: x } = {}) {
  var Pa, No;
  const L = "wb" + ++nh + "-", b = document.createElement("div");
  b.className = "wb";
  const B = document.createElement("div");
  B.className = "wbBento", b.appendChild(B), a.replaceChildren(b);
  const le = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "air_quality"].filter((C) => !g || g.includes(C)), ie = { current: "wide", hourly: "wide", compared_to_average: "double" }, N = {};
  le.forEach((C) => {
    const D = document.createElement("div");
    D.className = "wbItem", D.dataset.card = C, D.dataset.size = ie[C] || "tile", D.hidden = !0, B.appendChild(D), N[C] = { el: D, html: null };
  });
  let P = !1, Y = null, Q = 0, U = -1, G = !1, J = null;
  const z = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", aq: void 0 }, K = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let re = /* @__PURE__ */ new Date(), A = /* @__PURE__ */ new Date(), V = null;
  const ve = {}, Te = {}, v = (C) => {
    var D;
    return ((D = Te[C]) == null ? void 0 : D.forecast) ?? [];
  }, Me = (C, D) => {
    var O;
    return Te[D] ? (O = C.states) == null ? void 0 : O[Te[D].entityId] : void 0;
  };
  function Se(C) {
    const D = ve[C];
    D && (D.unsub.then((O) => {
      typeof O == "function" && O();
    }).catch(() => {
    }), delete ve[C]), Te[C] && delete Te[C];
  }
  function qe(C, D, O) {
    var he;
    if (typeof ((he = C.connection) == null ? void 0 : he.subscribeMessage) != "function") return;
    const q = { entityId: O };
    try {
      q.unsub = Promise.resolve(C.connection.subscribeMessage((we) => {
        P || ve[D] !== q || (we != null && we.forecast ? Te[D] = { entityId: O, forecast: we.forecast } : delete Te[D], De());
      }, { type: "weather/subscribe_forecast", forecast_type: D, entity_id: O }));
    } catch (we) {
      q.unsub = Promise.reject(we);
    }
    q.unsub.catch(() => {
      ve[D] === q && delete ve[D];
    }), ve[D] = q;
  }
  function y(C, D) {
    var O;
    for (const q of ["daily", "hourly"]) {
      const he = Wu(C, D, q);
      ((O = ve[q]) == null ? void 0 : O.entityId) !== (he == null ? void 0 : he.entity_id) && (Se(q), he && qe(C, q, he.entity_id));
    }
  }
  const T = (C, D, O, q = !1) => C.callWS({
    type: "history/history_during_period",
    start_time: O.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [D],
    minimal_response: q,
    no_attributes: q,
    significant_changes_only: !1
  });
  async function M(C, D) {
    var me, ye, pe;
    const O = ka(C, D, "pressure");
    if (!O) return;
    const q = O.stateObj.entity_id, he = await T(C, q, new Date(Date.now() - 3 * no)), we = (pe = (ye = (me = he == null ? void 0 : he[q]) == null ? void 0 : me.find((Ee) => {
      var Oe;
      return typeof ((Oe = Ee.a) == null ? void 0 : Oe.pressure) == "number";
    })) == null ? void 0 : ye.a) == null ? void 0 : pe.pressure;
    K.pressureHistory = typeof we == "number" ? { entityId: q, value: we } : void 0;
  }
  async function _(C, D) {
    var ye;
    const O = ka(C, D, "temperature");
    if (!O) return;
    const q = O.stateObj.entity_id, he = ur(/* @__PURE__ */ new Date()), we = await T(C, q, new Date(he.getTime() - cu * Ei)), me = /* @__PURE__ */ new Map();
    for (const pe of (we == null ? void 0 : we[q]) ?? []) {
      const Ee = (ye = pe.a) == null ? void 0 : ye.temperature, Oe = new Date((pe.lc ?? pe.lu) * 1e3);
      if (typeof Ee != "number" || Oe >= he) continue;
      const Ke = Oe.toDateString();
      me.set(Ke, Math.max(me.get(Ke) ?? -1 / 0, Ee));
    }
    K.temperatureHistory = { entityId: q, dailyHighs: [...me.values()], days: [...me.entries()].map(([pe, Ee]) => ({ date: new Date(pe), high: Ee })) };
  }
  async function de(C) {
    const D = _l(C);
    if (!D) return;
    const O = await C.callWS({ type: "recorder/statistic_during_period", statistic_id: D, rolling_window: { duration: { hours: 24 } } });
    K.rain = { entityId: D, change: (O == null ? void 0 : O.change) ?? void 0 };
  }
  function W() {
    const C = l == null ? void 0 : l();
    if (!C || P || typeof C.callWS != "function") return;
    const D = We(C);
    K.lastFetch = Date.now(), [M(C, D), _(C, D), de(C)].forEach((O) => O.then(() => De(), () => {
    }));
  }
  async function ee() {
    const C = l == null ? void 0 : l();
    if (!C) return;
    const D = ka(C, We(C), "temperature");
    if (!D) return;
    const O = D.stateObj.entity_id, q = ur(/* @__PURE__ */ new Date());
    try {
      const he = await T(C, O, q), we = (me) => ((he == null ? void 0 : he[O]) ?? []).map((ye) => {
        var pe;
        return { time: ye.lu * 1e3, value: (pe = ye.a) == null ? void 0 : pe[me] };
      }).filter((ye) => typeof ye.value == "number");
      K.todayHistory = { day: q.toDateString(), fetched: Date.now(), temperature: we("temperature"), humidity: we("humidity") }, De();
    } catch {
    }
  }
  async function se(C) {
    const D = l == null ? void 0 : l();
    if (D)
      try {
        const O = await T(D, C, new Date(Date.now() - 24 * no), !0), q = ((O == null ? void 0 : O[C]) ?? []).filter((we) => _n(we.s)), he = Math.max(1, Math.ceil(q.length / 48));
        K.aqHistory = { entityId: C, points: q.filter((we, me) => me % he === 0).map((we) => ({ label: dr(new Date(we.lu * 1e3), D), value: Number(we.s) })) }, De();
      } catch {
      }
  }
  function ue(C) {
    K.categories === void 0 && (K.categories = null, Promise.resolve().then(() => C.callWS({ type: "integration/descriptions" })).then((D) => {
      K.categories = Uu(D);
    }, () => {
      K.categories = {};
    }).then(() => De()));
  }
  function We(C) {
    var O;
    const D = Object.keys(C.states || {}).filter((q) => q.startsWith("weather.") && Us(C, q)).sort();
    return i && ((O = C.states) != null && O[i]) ? [i, ...D.filter((q) => q !== i)] : D;
  }
  const Xe = (C) => K.categories ? { air: Yu(C, K.categories), pollen: Zu(C, K.categories) } : { air: [], pollen: [] };
  function vt(C, D, O, q) {
    if (p === "smooth") {
      const he = ou(C, D === 90, O, L + "g-" + q);
      return '<span class="wbWx wbS' + D + " wb" + he.k[0].toUpperCase() + he.k.slice(1) + (he.night ? " wbNight" : "") + '" aria-hidden="true">' + he.svg + "</span>";
    }
    return '<span class="wbWx wbS' + D + '" aria-hidden="true"><canvas data-wb-wx="' + Fe(Gs(C, O)) + '" data-size="' + D + '"></canvas></span>';
  }
  const an = () => v("daily").filter((C) => C.templow != null).slice(0, iu);
  function Dn(C, D) {
    const O = new Date(D.datetime), q = /* @__PURE__ */ new Date();
    return Yr(O, q) ? it.today : Yr(O, new Date(q.getTime() + Ei)) ? it.tomorrow : Vd(O, C);
  }
  const Ft = (C, D, O) => O === 0 ? Dn(C, D) : Vd(new Date(D.datetime), C);
  function Ze(C, D) {
    var Oe, Ke, Ge, Re;
    const O = qu(C, D);
    if (!O) return "";
    const q = an(), he = z.openDay !== void 0 ? q[z.openDay] : void 0, we = ka(C, D, "temperature"), me = q[0], ye = me && Yr(new Date(me.datetime), /* @__PURE__ */ new Date()), pe = ((Ke = (Oe = C.config) == null ? void 0 : Oe.unit_system) == null ? void 0 : Ke.temperature) || ((Ge = O.attributes) == null ? void 0 : Ge.temperature_unit) || "";
    let Ee = '<div class="wbCard wbWeather' + (he ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (he ? " inert" : "") + '><div class="wbNow">' + (x ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Fe(it.openPage) + '">' : '<div class="wbCurrent">') + vt(O.state, 90, Ou(C), "now") + '<div class="wbTempBlock">' + (we && _n(we.value) ? '<div class="wbTemp"><span class="wbDeg">' + Fe(vn(Math.round(Number(we.value)), C.locale)) + '</span><span class="wbUnit">' + Fe(pe) + "</span></div>" : "") + '<div class="wbPlace">' + Fe(((Re = C.config) == null ? void 0 : Re.location_name) ?? "") + "</div></div>" + (x ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Fe(Is(C, O)) + "</div>" + (ye && me.templow != null ? '<div class="wbRange">' + Fe(ya(it.range, { high: Wn(C, me.temperature), low: Wn(C, me.templow) })) + "</div>" : "") + "</div></div>";
    return q.length && (Ee += '<div class="wbColumns" role="list">' + q.map((Ie, Be) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Be + '" data-wb-focus="col-' + Be + '"><span class="wbDay">' + Fe(Ft(C, Ie, Be)) + "</span>" + vt(Ie.condition ?? "cloudy", 60, !1, "col" + Be) + '<span class="wbTemps"><span class="wbHi">' + Fe(Wn(C, Ie.temperature)) + '</span><span class="wbLo">' + Fe(Wn(C, Ie.templow)) + "</span></span></button>").join("") + "</div>", Ee += '<div class="wbHalves" role="list">' + q.map((Ie, Be) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Be + '" data-wb-focus="half-' + Be + '">' + vt(Ie.condition ?? "cloudy", 40, !1, "half" + Be) + '<span class="wbText"><span class="wbName">' + Fe(Dn(C, Ie)) + '</span><span class="wbSub">' + Fe(ya(it.highLow, { high: Wn(C, Ie.temperature), low: Wn(C, Ie.templow) })) + "</span></span></button>").join("") + "</div>"), Ee + "</div>" + (he ? on(C, D, he) : "") + "</div>";
  }
  function Ct(C) {
    const D = C.getTime(), O = Date.now() - no;
    return v("hourly").filter((q) => {
      const he = new Date(q.datetime).getTime();
      return he >= D && he < D + Ei && he > O;
    });
  }
  function at(C) {
    if (!C.length) return ["temperature"];
    const D = ["temperature"];
    return C.some((O) => O.precipitation != null || O.precipitation_probability != null) && D.push("precipitation"), C.some((O) => O.humidity != null) && D.push("humidity"), D;
  }
  function on(C, D, O) {
    const q = ur(new Date(O.datetime)), he = Ct(q), we = at(he), me = we.includes(z.dayMode) ? z.dayMode : "temperature", ye = (pe) => pe === "humidity" ? it.humidity : it.modes[pe];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + vt(O.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Fe(Dn(C, O)) + '</span><span class="wbSub">' + Fe(ya(it.highLow, { high: Wn(C, O.temperature), low: Wn(C, O.templow) })) + '</span></div><button class="wbBack" title="' + Fe(it.back) + '" data-wb="close-day" data-wb-focus="back-day">' + pr(ta.back) + "</button></div>" + (we.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + we.map((pe) => '<button aria-pressed="' + (pe === me) + '" data-wb="day-mode" data-mode="' + pe + '" data-wb-focus="day-mode-' + pe + '">' + Fe(ye(pe)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + $u(bn(C, D, q, he, me)) + "</div></div>";
  }
  function bn(C, D, O, q, he) {
    var un;
    const we = O.getTime(), me = Date.now(), ye = Yr(O, /* @__PURE__ */ new Date()), pe = (ft) => (ft - we) / oo, Ee = (ft) => dr(new Date(ft), C), Oe = (ft) => new Date(ft.datetime).getTime(), Ke = [0, 3, 6, 9, 12, 15, 18, 21].map((ft) => ({ t: ft * 60, label: Ee(we + ft * no), minor: ft % 6 !== 0 })), { rise: Ge, set: Re } = Gd(C, O), Ie = [], Be = [];
    Ge && (Ie.push({ t: pe(Ge.getTime()), label: Ee(Ge.getTime()), rise: !0 }), Be.push([0, pe(Ge.getTime())])), Re && (Ie.push({ t: pe(Re.getTime()), label: Ee(Re.getTime()), rise: !1 }), Be.push([pe(Re.getTime()), $r]));
    const et = js(C);
    !Ge && !Re && et && nd(new Date(we + Ei / 2), et.lat, et.lon) < 0 && Be.push([0, $r]);
    const ht = ye ? pe(me) : void 0, Lt = { hours: Ke, sun: Ie, night: Be };
    if (!q.length && !ye) return { ...Lt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: it.noHourly };
    if (he === "precipitation") {
      const ft = q.some((hn) => hn.precipitation_probability != null), Zn = q.map((hn) => ({ t: pe(Oe(hn)), v: Number((ft ? hn.precipitation_probability : hn.precipitation) ?? 0) })), pa = Kr(C, Me(C, "hourly"), "precipitation"), ua = Math.max(0, ...Zn.map((hn) => hn.v)), ha = ft ? 100 : Kd(0, Math.max(ua, 1), [0.5, 1, 2, 5, 10]).max, oi = (hn) => ft ? vn(hn, C.locale) + "%" : vn(hn, C.locale, { maximumFractionDigits: 1 }) + " " + pa, Sa = Zn.find((hn) => hn.v === ua);
      return {
        ...Lt,
        kind: "bars",
        points: Zn,
        min: 0,
        max: ha,
        ticks: [0, ha / 2, ha],
        format: oi,
        now: ht !== void 0 ? { t: ht, v: 0 } : void 0,
        peak: Sa && ua > 0 ? { t: Sa.t + 30, v: Sa.v, label: oi(Sa.v) } : void 0,
        note: ua > 0 ? void 0 : it.noRain
      };
    }
    const xt = he === "humidity" ? "humidity" : "temperature", Zt = q.filter((ft) => ft[xt] != null && (!ye || Oe(ft) >= me)).map((ft) => ({ t: pe(Oe(ft)), v: Number(ft[xt]) }));
    let Sn, Un = [];
    if (ht !== void 0) {
      const ft = ka(C, D, xt);
      ft && _n(ft.value) && (Sn = { t: ht, v: Number(ft.value) }, Zt.unshift(Sn)), Un = (((un = K.todayHistory) == null ? void 0 : un.day) === O.toDateString() ? K.todayHistory[xt] : []).filter((pa) => pa.time <= me).map((pa) => ({ t: Math.max(0, pe(pa.time)), v: pa.value })), Sn && Un.length && Un.push(Sn);
    }
    const Nn = [...Un, ...Zt];
    if (!Nn.length) return { ...Lt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: it.noHourly };
    const Yn = Nn.map((ft) => ft.v), ia = Kd(Math.min(...Yn), Math.max(...Yn), xt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    xt === "humidity" && (ia.min = Math.max(0, ia.min), ia.max = Math.min(100, ia.max), ia.ticks = ia.ticks.filter((ft) => ft >= 0 && ft <= 100));
    const Ia = xt === "humidity" ? (ft) => vn(ft, C.locale) + "%" : (ft) => Wn(C, ft), Bo = xt === "temperature" ? Nn.reduce((ft, Zn) => Zn.v > ft.v ? Zn : ft) : void 0;
    return { ...Lt, kind: "line", points: Zt, past: Un, ...ia, format: Ia, now: Sn, peak: Bo ? { ...Bo, label: Ia(Bo.v) } : void 0 };
  }
  function _i(C) {
    const D = ["temperature"];
    return C.some((O) => O.precipitation_probability != null || O.precipitation != null) && D.push("precipitation"), C.some((O) => O.wind_speed != null) && D.push("wind"), D;
  }
  function st() {
    const C = /* @__PURE__ */ new Date();
    return C.setHours(6, 0, 0, 0), C.getTime() > Date.now() && C.setDate(C.getDate() - 1), C;
  }
  function Ve(C, D) {
    var he, we;
    const O = v("daily"), q = [];
    for (let me = 0; me < Ns; me++) for (const ye of [!1, !0]) {
      const pe = C.getTime() + (me * 24 + (ye ? 12 : 0)) * no, Ee = pe + 12 * no, Oe = {};
      D.forEach((Ge) => {
        const Re = new Date(Ge.datetime).getTime();
        Ge.condition && Re >= pe && Re < Ee && (Oe[Ge.condition] = (Oe[Ge.condition] ?? 0) + (lu.has(Ge.condition) ? 2 : 1));
      });
      let Ke = (he = Object.entries(Oe).sort((Ge, Re) => Re[1] - Ge[1])[0]) == null ? void 0 : he[0];
      if (!Ke) {
        const Ge = new Date(pe).toDateString();
        Ke = ((we = O.find((Re) => new Date(Re.datetime).toDateString() === Ge)) == null ? void 0 : we.condition) ?? "cloudy";
      }
      q.push({ cond: ye && Ke === "sunny" ? "clear-night" : Ke, night: ye });
    }
    return q;
  }
  function ut(C, D, O) {
    const q = Me(C, "hourly"), he = D.precipitation_probability != null ? vn(D.precipitation_probability, C.locale) + "%" : "", we = D.precipitation ? vn(D.precipitation, C.locale) + " " + Kr(C, q, "precipitation") : "";
    switch (O) {
      case "precipitation":
        return he ? [he, we] : [we || "–", ""];
      case "wind":
        return D.wind_speed != null ? [vn(Math.round(D.wind_speed), C.locale), Kr(C, q, "wind_speed")] : ["–", ""];
      default:
        return [Wn(C, D.temperature), (D.precipitation_probability ?? 0) >= 20 ? he : ""];
    }
  }
  function ro(C) {
    V = null;
    const D = v("hourly"), O = Math.floor(Date.now() / oo) * oo, q = D.filter((Re) => new Date(Re.datetime).getTime() > O - no);
    if (!q.length) return "";
    const he = _i(q), we = he.includes(z.hourlyMode) ? z.hourlyMode : "temperature", me = st(), ye = me.getTime() + Ns * 24 * no, pe = (O - me.getTime()) / no * Al, Ee = Ns * 24 * Al, Oe = (Re) => (Re - O) / no * Al, Ke = [{ x: 0, label: it.now, entry: q[0] }, ...q.filter((Re) => {
      const Ie = new Date(Re.datetime);
      return Oe(Ie.getTime()) >= 48 && Ie.getTime() < ye && Ie.getHours() % su === 0;
    }).map((Re) => {
      const Ie = new Date(Re.datetime);
      return { x: Oe(Ie.getTime()), label: dr(Ie, C), entry: Re };
    })], Ge = (Re, Ie, Be) => '<span class="wbMark' + (Ie === 0 ? " wbFirst" : "") + '" style="left:' + Re.x + 'px">' + Be + "</span>";
    return V = { segs: Ve(me, D), seed: me.getDate() }, '<div class="wbCard wbHc wbHourly"><div class="wbHeader"><h2 class="wbTitle">' + Fe(it.nextHours) + "</h2></div>" + (he.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + he.map((Re) => '<button aria-pressed="' + (Re === we) + '" data-wb="hourly-mode" data-mode="' + Re + '" data-wb-focus="hourly-mode-' + Re + '">' + Fe(it.modes[Re]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll"><div class="wbStrip" style="width:' + (Ee - pe) + 'px"><div class="wbRow wbTimes">' + Ke.map((Re, Ie) => Ge(Re, Ie, Fe(Re.label))).join("") + '</div><div class="wbSky"><div class="wbSkyArt" style="left:' + -pe + "px;width:" + Ee + 'px"><canvas data-wb-strip' + (p === "smooth" ? "" : ' class="wbPixels"') + '></canvas></div></div><div class="wbRow wbValues">' + Ke.map((Re, Ie) => {
      if (!Re.entry) return "";
      const [Be, et] = ut(C, Re.entry, we);
      return Ge(Re, Ie, '<span class="wbPrimaryV">' + Fe(Be) + '</span><span class="wbSecondary">' + Fe(et) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Di(C) {
    const D = re, { rise: O, set: q } = Gd(C, D), he = O && q ? Math.round((q.getTime() - O.getTime()) / oo) : 0, we = Math.floor(he / 60), me = he % 60, ye = O && q ? (D.getTime() - O.getTime()) / (q.getTime() - O.getTime()) : -1, pe = ye >= 0 && ye <= 1, Ee = Math.PI * (1 - Math.min(1, Math.max(0, ye))), Oe = 100 + 74 * Math.cos(Ee), Ke = 100 - 74 * Math.sin(Ee), Ge = pe ? Math.sin(Math.PI * ye) : 0, Re = pe ? Zr("#2e0a0d", "#43180a", Ge) : "#0e0507", Ie = pe ? Zr("#7a1d12", "#8f400f", Ge) : "#1c0709", Be = Zr("#f60c08", "#ff8f00", Ge), et = Zr("#fd9b07", "#ffd84a", Ge), ht = pe ? Zr("#fd9b07", "#ffd84a", Ge) : "#6b3a2a", Lt = (Zt) => Zt ? dr(Zt, C) : "–", xt = O && q ? new Date((O.getTime() + q.getTime()) / 2) : null;
    return Qo({
      icon: ta.sunny,
      name: it.sun,
      sub: he ? ya(it.daylightShort, { hours: we, minutes: me }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Re + ", " + Ie + ");--wb-sun-line:" + ht + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + L + 'sun-glow"><stop offset="0" stop-color="' + Be + '"></stop><stop offset="0.45" stop-color="' + Be + '"></stop><stop offset="1" stop-color="' + et + '"></stop></radialGradient><clipPath id="' + L + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (pe ? '<circle cx="' + Oe + '" cy="' + Ke + '" r="14" fill="url(#' + L + 'sun-glow)" clip-path="url(#' + L + 'above-horizon)"></circle>' : "") + (xt ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Fe(Lt(xt)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Fe(Lt(O)) + '</text><text class="wbSunTime" x="174" y="117">' + Fe(Lt(q)) + "</text></svg></div>"
    });
  }
  function ai(C, D, O) {
    const q = (me) => L + "moon-" + me, he = C > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + q("terminator") + ')" d="' + Ku(61, 61, 57.9, C) + '"' + (D ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", we = (me, ye, pe, Ee, Oe, Ke) => '<filter id="' + q(me) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + ye + '" numOctaves="' + pe + '" seed="' + Ee + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Ge) => "<feFunc" + Ge + ' type="linear" slope="' + Oe + '" intercept="' + Ke + '"></feFunc' + Ge + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + q("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + q("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + q("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + q("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + q("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + we("mottle", "0.045", 4, 3, 1.8, -0.4) + we("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + q("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + q("fill") + ')"></circle><g' + (O ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + q("soften") + ')">' + Qu.map(([me, ye, pe, Ee, Oe, Ke]) => '<ellipse cx="' + me + '" cy="' + ye + '" rx="' + pe + '" ry="' + Ee + '" fill-opacity="' + Ke + '" transform="rotate(' + Oe + " " + me + " " + ye + ')"></ellipse>').join("") + "</g>" + eh.map(([me, ye, pe]) => '<circle class="wbCrater" cx="' + me + '" cy="' + ye + '" r="' + pe + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + q("glow") + ')">' + th.map(([me, ye]) => '<line x1="54.4" y1="95" x2="' + me + '" y2="' + ye + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + q("glow") + ')">' + $d.map(([me, ye, pe]) => '<circle cx="' + me + '" cy="' + ye + '" r="' + pe * 2 + '"></circle>').join("") + "</g>" + $d.map(([me, ye, pe]) => '<circle class="wbBrightCenter" cx="' + me + '" cy="' + ye + '" r="' + pe + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + q("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + q("grain") + ')"></rect>' + he + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function rn(C) {
    const D = A, O = js(C), q = (O == null ? void 0 : O.lat) ?? 0, he = Hu(D), we = Zd(C), me = we ? C.states[we] : void 0, ye = Xr(me) && gu.includes(me.state) ? me.state : Fu(he.phase), { rise: pe, set: Ee } = O ? Iu(D, O.lat, O.lon) : {}, Oe = he.phase > 0.5 != q < 0, Ke = vn(Math.round(he.fraction * 100), C.locale) + "%", Ge = pe ?? Ee, Re = Ge ? dr(Ge, C) : void 0;
    return Qo({
      icon: ta.night,
      name: it.moon,
      sub: it.phases[ye],
      visual: '<div class="wbMoonBox">' + ai(he.fraction, Oe, q < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (Re ? Fe(ya(pe ? it.moonriseAt : it.moonsetAt, { time: Re })) : "") + "</span><span>" + Fe(ya(it.lit, { illumination: Ke })) + "</span></div>"
    });
  }
  function Je(C, D) {
    var Ie;
    const O = ka(C, D, "wind_speed");
    if (!O || !_n(O.value)) return "";
    const q = ka(C, D, "wind_gust_speed"), he = ka(C, D, "wind_bearing"), we = he && _n(he.value) ? Number(he.value) : void 0, me = Gu(Number(O.value), (Ie = O.stateObj.attributes) == null ? void 0 : Ie.wind_speed_unit), ye = Zl(C, O.stateObj, "wind_speed", O.value), pe = we !== void 0 ? it.cardinal[mu[((we + 11.25) / 22.5 | 0) % 16]] : void 0, Ee = q ? zu(C, q.stateObj, "wind_gust_speed", q.value) : void 0, Oe = [pe ? ya(it.windFrom, { direction: pe }) : void 0, me !== void 0 ? me + " " + it.beaufort : void 0].filter(Boolean).join(" · ") || Ee, Ke = (Be, et) => {
      const ht = (Be - 90) * Math.PI / 180;
      return [100 + et * Math.cos(ht), 100 + et * Math.sin(ht)];
    }, Ge = Array.from({ length: 36 }, (Be, et) => et * 10).map((Be) => {
      const et = Be % 90 === 0, [ht, Lt] = Ke(Be, 97), [xt, Zt] = Ke(Be, et ? 83 : 89);
      return '<line class="wbTick' + (et ? " wbMajor" : "") + '" x1="' + ht + '" y1="' + Lt + '" x2="' + xt + '" y2="' + Zt + '"></line>';
    }).join(""), Re = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Be, et]) => {
      const [ht, Lt] = Ke(et, 64);
      return '<text class="wbLetter' + (Be === "n" ? " wbNorth" : "") + '" x="' + ht + '" y="' + Lt + '">' + Fe(it.cardinal[Be]) + "</text>";
    }).join("");
    return Qo({ icon: ta.windy, name: it.wind, sub: Oe, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Ge + Re + (we !== void 0 ? '<path class="wbMarker" transform="rotate(' + we + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Fe(ye.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Fe(ye.unit) + "</text></svg>" });
  }
  function Rn(C, D) {
    const O = ka(C, D, "uv_index");
    if (!O || !_n(O.value)) return "";
    const q = Number(O.value), he = it.uvLevel[Vu(q)], we = /* @__PURE__ */ new Date();
    we.setHours(23, 59, 59, 999);
    const me = v("hourly").filter((Be) => Be.uv_index != null && new Date(Be.datetime) > /* @__PURE__ */ new Date() && new Date(Be.datetime) <= we).reduce((Be, et) => !Be || et.uv_index > Be.uv ? { uv: et.uv_index, time: new Date(et.datetime) } : Be, void 0), ye = 48, pe = 100, Ee = 130, Oe = (Be) => -ye + Math.min(Be, 11) / 11 * 2 * ye, Ke = (Be, et) => {
      const ht = Be * Math.PI / 180;
      return [pe + et * Math.sin(ht), Ee - et * Math.cos(ht)];
    }, Ge = (Be, et, ht) => {
      const [Lt, xt] = Ke(Oe(Be), ht), [Zt, Sn] = Ke(Oe(et), ht);
      return "M " + Lt + " " + xt + " A " + ht + " " + ht + " 0 0 1 " + Zt + " " + Sn;
    }, Ie = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, Bs.low], [3, 6, Bs.moderate], [6, 8, Bs.high], [8, 11, Bs.very_high]].map(([Be, et, ht]) => '<path class="wbVuZone" d="' + Ge(Be, et, 96) + '" style="stroke:' + ht + '"></path>').join("") + Array.from({ length: 21 }, (Be, et) => ({ angle: -ye + et * (2 * ye / 20), major: et % 2 === 0 })).map(({ angle: Be, major: et }) => {
      const [ht, Lt] = Ke(Be, 102), [xt, Zt] = Ke(Be, et ? 114 : 108);
      return '<line class="wbVuTick' + (et ? " wbMajor" : "") + '" x1="' + ht + '" y1="' + Lt + '" x2="' + xt + '" y2="' + Zt + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + Oe(q) + 'deg"><line x1="' + pe + '" y1="' + Ee + '" x2="' + pe + '" y2="' + (Ee - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + Fe(vn(Math.round(q), C.locale)) + "</text></svg>";
    return Qo({
      icon: ta.sunnyAlert,
      name: it.metrics.uv_index,
      sub: me && me.uv > q ? ya(it.uvPeak, { level: he, uv_index: vn(Math.round(me.uv), C.locale), time: dr(me.time, C) }) : he,
      visual: Ie
    });
  }
  function Ri(C) {
    const D = v("daily")[0], O = K.temperatureHistory;
    if (!D || new Date(D.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !_n(D.temperature) || !O || O.dailyHighs.length < pu) return "";
    const q = Number(D.temperature), he = O.dailyHighs.reduce((xt, Zt) => xt + Zt, 0) / O.dailyHighs.length, we = Math.round(q - he) || 0, me = we > 0 ? "above" : we < 0 ? "below" : "same", ye = [...O.days, { date: /* @__PURE__ */ new Date(), high: q, today: !0 }], pe = 220, Ee = 158, Oe = 22, Ke = 20, Ge = ye.map((xt) => xt.high).concat(he), Re = Math.min(...Ge) - 3, Ie = Math.max(...Ge) + 1, Be = (xt) => Oe + (1 - (xt - Re) / (Ie - Re)) * (Ee - Oe - Ke), et = pe / ye.length, ht = Math.min(18, et * 0.6), Lt = '<svg class="wbCompareBars" viewBox="0 0 ' + pe + " " + Ee + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + pe + '" y1="' + Be(he) + '" y2="' + Be(he) + '"></line>' + ye.map((xt, Zt) => {
      const Sn = Zt * et + et / 2, Un = Be(xt.high), Nn = xt.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + Nn + '" x="' + (Sn - ht / 2) + '" y="' + Un + '" width="' + ht + '" height="' + (Ee - Ke - Un) + '" rx="5"></rect><text class="wbAvgValue' + Nn + '" x="' + Sn + '" y="' + (Un - 6) + '">' + Fe(Wn(C, xt.high)) + '</text><text class="wbAvgDay' + Nn + '" x="' + Sn + '" y="' + (Ee - 4) + '">' + Fe(Tu(xt.date, C)) + "</text>";
    }).join("") + "</svg>";
    return Qo({
      icon: ta.chartLine,
      name: it.metrics.compared_to_average,
      double: !0,
      sub: ya(it.highsLastDays, { days: O.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (we > 0 ? "+" : "") + Fe(Wn(C, we)) + '</div><div class="wbCompareWords">' + Fe(it.average[me]) + '</div><div class="wbCompareTemps">' + Fe(ya(it.todayVsAverage, { today: Wn(C, q), average: Wn(C, he) })) + "</div></div>" + Lt + "</div>"
    });
  }
  function wt(C, D) {
    const O = ka(C, D, "humidity");
    if (!O || !_n(O.value)) return "";
    const q = ka(C, D, "dew_point"), he = Math.max(0, Math.min(100, Number(O.value)));
    return Qo({
      icon: ta.waterPercent,
      name: it.metrics.humidity,
      sub: q && _n(q.value) ? ya(it.dewPoint, { dew_point: Wn(C, q.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + he + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Dl(vn(Math.round(Number(O.value)), C.locale), "%") + "</div>"
    });
  }
  function _e(C, D) {
    var Ee, Oe;
    const O = ka(C, D, "pressure");
    if (!O || !_n(O.value)) return "";
    const q = Number(O.value), he = (Ee = O.stateObj.attributes) == null ? void 0 : Ee.pressure_unit, we = Yd(q, he), me = ((Oe = K.pressureHistory) == null ? void 0 : Oe.entityId) === O.stateObj.entity_id ? Yd(K.pressureHistory.value, he) : void 0;
    let ye;
    if (we !== void 0 && me !== void 0) {
      const Ke = we - me;
      ye = Ke >= Fd ? "rising" : Ke <= -Fd ? "falling" : "steady";
    }
    const pe = Zl(C, O.stateObj, "pressure", Math.round(q));
    return Qo({
      icon: ta.gauge,
      name: it.metrics.pressure,
      sub: ye ? it.pressure[ye] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + Dl(pe.number) + '<span class="wbTapeUnit">' + Fe(pe.unit) + "</span></div>" + (we !== void 0 ? lt(C, we) : "") + "</div>"
    });
  }
  function lt(C, D) {
    const he = Math.floor(D) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (we, me) => he + me).map((we) => {
      const me = 100 - (we - D) * 9;
      if (me < 22 || me > 178) return "";
      const ye = we % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(me - 100) / 100) + '"><line class="wbTapeTick" x1="' + (ye ? 2 : 8) + '" x2="26" y1="' + me + '" y2="' + me + '"></line>' + (ye ? '<text class="wbTapeLabel" x="33" y="' + me + '">' + Fe(vn(we, C.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Fe(it.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Fe(it.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function mt(C) {
    var pe, Ee;
    const D = _l(C), O = D ? C.states[D] : void 0;
    if (!O || ((pe = K.rain) == null ? void 0 : pe.entityId) !== D || !_n(K.rain.change)) return "";
    const q = ((Ee = O.attributes) == null ? void 0 : Ee.unit_of_measurement) ?? "", he = Me(C, "hourly"), we = Date.now() + Ei, me = v("hourly").filter((Oe) => Oe.precipitation != null && new Date(Oe.datetime).getTime() <= we), ye = me.reduce((Oe, Ke) => Oe + Number(Ke.precipitation), 0);
    return Qo({
      icon: ta.rainy,
      name: it.metrics.precipitation,
      sub: he && me.length ? ya(it.rainExpected, { amount: vn(ye, C.locale, { maximumFractionDigits: 1 }) + " " + Kr(C, he, "precipitation") }) : it.rainLast24h,
      visual: Dl(vn(K.rain.change, C.locale, { maximumFractionDigits: 1 }), q) + (me.length > 1 ? Ju(me.map((Oe) => ({ label: "", value: Number(Oe.precipitation) }))) : "")
    });
  }
  function He(C) {
    K.categories === void 0 && ue(C);
    const D = Xe(C), O = (pe) => pe.map((Ee) => C.states[Ee]).filter(Xr), q = O(D.air), he = O(D.pollen);
    if (!q.length && !he.length) return "";
    const we = [...q, ...he], me = (pe) => he.includes(pe) ? ta.flower : ta.airFilter, ye = we.find((pe) => pe.entity_id === z.aq);
    return ye ? so(C, ye, me(ye)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Fe(it.airQuality) + '</h2></div><div class="wbAqTiles">' + we.map((pe) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Fe(pe.entity_id) + '"><span class="wbChip">' + pr(me(pe)) + '</span><span class="wbText"><span class="wbName">' + Fe(Ud(C, pe)) + '</span><span class="wbSub">' + Fe(Is(C, pe)) + "</span></span></button>").join("") + "</div></div>";
  }
  function so(C, D, O) {
    var Oe, Ke, Ge;
    const q = ((Oe = D.attributes) == null ? void 0 : Oe.unit_of_measurement) ?? "", he = ((Ke = D.attributes) == null ? void 0 : Ke.device_class) === "pm25" && q === Od && _n(D.state), we = Number(D.state), me = he ? ju(we) : void 0, ye = ((Ge = K.aqHistory) == null ? void 0 : Ge.entityId) === D.entity_id ? K.aqHistory.points : void 0, pe = (Re) => Math.min(100, Math.max(0, Re / Ps * 100));
    let Ee;
    if (ye && ye.length > 1) Ee = Xu(ye, (Re) => (vn(Re, C.locale, { maximumFractionDigits: 1 }) + " " + q).trim());
    else if (me) {
      let Re = 0;
      const Ie = _c.map(([Be, et]) => {
        const ht = pe(Math.min(et, Ps)), Lt = vu[Be] + " " + Re + "% " + ht + "%";
        return Re = ht, Lt;
      });
      Ee = '<div class="wbScale" role="meter" aria-label="' + Fe(it.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Ps + '" aria-valuenow="' + we + '" style="background:linear-gradient(to right, ' + Ie.join(", ") + ')"><i style="left:' + pe(we) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Ps + " " + Od + "</span></div>";
    } else Ee = '<span class="wbGraphNote"><span>' + Fe(Is(C, D)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + pr(O) + '</span><span class="wbText"><span class="wbName">' + Fe(Ud(C, D)) + '</span><span class="wbSub">' + Fe(Is(C, D)) + (me ? " · " + Fe(it.aqLevel[me]) : "") + '</span></span><button class="wbBack" title="' + Fe(it.back) + '" data-wb="aq-close">' + pr(ta.back) + '</button></div><div class="wbGraph">' + Ee + "</div></div></div>";
  }
  const Do = {
    current: Ze,
    hourly: ro,
    sun: Di,
    moon: rn,
    wind: Je,
    uv_index: Rn,
    compared_to_average: Ri,
    humidity: wt,
    pressure: _e,
    precipitation: mt,
    air_quality: He
  };
  function aa(C) {
    var Ee, Oe, Ke, Ge;
    const D = l == null ? void 0 : l();
    if (!D || P) return;
    const O = We(D);
    y(D, O), K.lastFetch || W();
    const q = Xe(D), he = Zd(D), we = _l(D), me = [
      ...O.map((Re) => D.states[Re]),
      D.states["sun.sun"],
      he && D.states[he],
      we && D.states[we],
      ...q.air.map((Re) => D.states[Re]),
      ...q.pollen.map((Re) => D.states[Re]),
      D.locale,
      D.config,
      D.entities,
      Math.floor(Date.now() / oo)
    ];
    if (!C && Y && me.length === Y.length && me.every((Re, Ie) => Re === Y[Ie])) return;
    Y = me;
    const ye = b.getRootNode(), pe = ye.activeElement || document.activeElement;
    for (const Re of le) {
      const Ie = N[Re];
      let Be = "";
      try {
        Be = Do[Re](D, O) || "";
      } catch {
        Be = "";
      }
      if (Be === Ie.html) continue;
      const et = pe && Ie.el.contains(pe) ? (Ee = pe.dataset) == null ? void 0 : Ee.wbFocus : void 0, ht = Ie.el.querySelector(".wbStripScroll"), Lt = ht ? ht.scrollLeft : 0;
      Ie.html = Be, Ie.el.hidden = !Be, Ie.el.innerHTML = Be, Lt && ((Oe = Ie.el.querySelector(".wbStripScroll")) == null || Oe.scrollTo({ left: Lt })), et && !J && ((Ke = Ie.el.querySelector('[data-wb-focus="' + et + '"]')) == null || Ke.focus());
    }
    J && ((Ge = b.querySelector('[data-wb-focus="' + J + '"]')) == null || Ge.focus(), J = null), Nt(performance.now());
  }
  function De() {
    G || P || (G = !0, queueMicrotask(() => {
      G = !1, aa(!0);
    }));
  }
  function je() {
    const C = getComputedStyle(b), D = (me) => C.getPropertyValue(me).trim(), O = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([me, ye]) => {
      D(ye) && (O[me] = D(ye));
    });
    const q = D("--color-text-primary") || "#f1f1f1", he = D("--color-bg-card") || "#222222", we = !!b.closest(".light");
    return { colors: { ..._o, ...O }, ink: we ? q : he, paper: we ? he : q };
  }
  const Yt = (C, D) => {
    var O;
    C.width !== D.w && (C.width = D.w), C.height !== D.h && (C.height = D.h), (O = C.getContext("2d")) == null || O.putImageData(new ImageData(D.data, D.w, D.h), 0, 0);
  }, cn = () => f && !Mu();
  function wn(C, D) {
    const O = b.querySelector("canvas[data-wb-strip]");
    if (!O || !V || !O.getClientRects().length) return;
    const q = O.clientWidth, he = O.clientHeight;
    if (!q || !he) return;
    const we = { width: q, height: he, columns: Ns, colors: D.colors, clock: C, ambient: cn(), seed: V.seed };
    if (p === "smooth") {
      const me = Math.min(2, window.devicePixelRatio || 1), ye = Math.round(q * me), pe = Math.round(he * me);
      O.width !== ye && (O.width = ye), O.height !== pe && (O.height = pe);
      const Ee = O.getContext("2d");
      if (!Ee) return;
      Ee.setTransform(me, 0, 0, me, 0, 0), $p(Ee, V.segs, we);
    } else Yt(O, Kp(V.segs, { ...we, px: 2, oneBit: p === "onebit", ink: D.ink, paper: D.paper }));
  }
  function Nt(C) {
    if (P) return;
    const D = je();
    if (p !== "smooth") {
      const O = cn();
      b.querySelectorAll("canvas[data-wb-wx]").forEach((q) => {
        q.getClientRects().length && Yt(q, wc(Gl(q.dataset.wbWx, D.colors), { size: Number(q.dataset.size) || 40, px: 2, oneBit: p === "onebit", colors: D.colors, ink: D.ink, paper: D.paper, clock: C, idle: O }));
      });
    }
    wn(C, D);
  }
  function lo(C) {
    if (Q = 0, !(P || !cn())) {
      if (!document.hidden)
        if (p === "smooth") wn(C, je());
        else {
          const D = Math.floor(C / 100);
          D !== U && (U = D, Nt(C));
        }
      Q = requestAnimationFrame(lo);
    }
  }
  function At() {
    b.classList.toggle("wbMotion", cn()), !Q && !P && cn() && (Q = requestAnimationFrame(lo));
  }
  function Gn(C) {
    var O, q;
    const D = (q = (O = C.target).closest) == null ? void 0 : q.call(O, "[data-wb]");
    if (!(!D || !b.contains(D))) {
      switch (D.dataset.wb) {
        case "day": {
          z.openDay = Number(D.dataset.index), z.opener = D.dataset.wbFocus, J = "back-day";
          const he = an()[z.openDay], we = !K.todayHistory || K.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - K.todayHistory.fetched > ru;
          he && Yr(new Date(he.datetime), /* @__PURE__ */ new Date()) && we && ee();
          break;
        }
        case "close-day":
          z.openDay = void 0, J = z.opener, z.opener = void 0;
          break;
        case "open-page":
          x == null || x();
          return;
        case "day-mode":
          z.dayMode = D.dataset.mode;
          break;
        case "hourly-mode":
          z.hourlyMode = D.dataset.mode;
          break;
        case "aq-open":
          z.aq = D.dataset.entity, se(z.aq);
          break;
        case "aq-close":
          z.aq = void 0;
          break;
        default:
          return;
      }
      aa(!0);
    }
  }
  function Ro(C) {
    var D, O;
    C.key === "Escape" && z.openDay !== void 0 && ((O = (D = C.target).closest) != null && O.call(D, '[data-wb-open="day"]')) && (z.openDay = void 0, J = z.opener, z.opener = void 0, aa(!0));
  }
  let Et = null;
  function Ut(C) {
    var O, q;
    const D = (q = (O = C.target).closest) == null ? void 0 : q.call(O, ".wbStripScroll");
    !D || C.button !== 0 || (Et = { startX: C.pageX, left: D.scrollLeft, moved: !1 }, window.addEventListener("mousemove", xn), window.addEventListener("mouseup", jt, { once: !0 }));
  }
  function xn(C) {
    const D = b.querySelector(".wbStripScroll");
    if (!Et || !D) return;
    const O = C.pageX - Et.startX;
    !Et.moved && Math.abs(O) > 1 && (Et.moved = !0, D.classList.add("wbDragging")), D.scrollLeft = Et.left - O;
  }
  function jt() {
    var C;
    Et = null, window.removeEventListener("mousemove", xn), (C = b.querySelector(".wbStripScroll")) == null || C.classList.remove("wbDragging");
  }
  b.addEventListener("click", Gn), b.addEventListener("keydown", Ro), b.addEventListener("mousedown", Ut);
  const pn = typeof ResizeObserver == "function" ? new ResizeObserver(() => Nt(performance.now())) : null;
  pn == null || pn.observe(b);
  const rt = (Pa = window.matchMedia) == null ? void 0 : Pa.call(window, "(prefers-reduced-motion: reduce)"), co = () => {
    At(), Nt(performance.now());
  };
  (No = rt == null ? void 0 : rt.addEventListener) == null || No.call(rt, "change", co);
  const oa = [
    setInterval(() => {
      re = /* @__PURE__ */ new Date(), aa(!0);
    }, uu),
    setInterval(() => {
      A = /* @__PURE__ */ new Date(), aa(!0);
    }, hu),
    setInterval(W, du)
  ];
  return aa(!0), At(), {
    update() {
      aa(!1);
    },
    setStyle(C) {
      !C || C === p || (p = C, aa(!0), At());
    },
    destroy() {
      var C;
      P = !0, oa.forEach(clearInterval), Q && cancelAnimationFrame(Q), Q = 0, pn == null || pn.disconnect(), (C = rt == null ? void 0 : rt.removeEventListener) == null || C.call(rt, "change", co), jt(), b.removeEventListener("click", Gn), b.removeEventListener("keydown", Ro), b.removeEventListener("mousedown", Ut), ["daily", "hourly"].forEach(Se), b.remove();
    }
  };
}
const Jr = "#E1E1E1", Jd = "#F7F4F0", Rl = "#03a9f4", yt = 14, Mt = 172;
let ah = 0;
const zt = (a) => Math.round(a * 100) / 100, io = (a, l, i) => Math.max(l, Math.min(i, a)), Eo = (a, l, i, p, f, g) => '<rect x="' + zt(a) + '" y="' + zt(l) + '" width="' + zt(i) + '" height="' + zt(p) + '" fill="' + f + '"' + (g != null ? ' opacity="' + g + '"' : "") + "/>", Nl = (a) => a.map((l, i) => (i ? "L" : "M") + zt(l[0]) + " " + zt(l[1])).join("");
function Bl(a) {
  const l = (a == null ? void 0 : a.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const ei = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function oh(a) {
  const l = a < 2 ? a + 24 : a;
  let i = ei[0], p = ei[ei.length - 1];
  for (let L = 0; L < ei.length - 1; L++) if (l >= ei[L][0] && l <= ei[L + 1][0]) {
    i = ei[L], p = ei[L + 1];
    break;
  }
  const f = (l - i[0]) / (p[0] - i[0]), g = f * f * (3 - 2 * f), x = (L, b) => {
    const B = parseInt(L.slice(1), 16), le = parseInt(b.slice(1), 16);
    return "#" + [16, 8, 0].map((ie) => Math.round((B >> ie & 255) + ((le >> ie & 255) - (B >> ie & 255)) * g).toString(16).padStart(2, "0")).join("");
  };
  return { top: x(i[1][0], p[1][0]), bot: x(i[1][1], p[1][1]), warm: x(i[1][2], p[1][2]), cool: x(i[1][3], p[1][3]), op: i[1][4] + (p[1][4] - i[1][4]) * g, t: l };
}
function ih(a) {
  const l = parseInt(a.slice(1), 16), i = (l >> 16 & 255) / 255, p = (l >> 8 & 255) / 255, f = (l & 255) / 255, g = Math.max(i, p, f), x = Math.min(i, p, f);
  let L = 0, b = 0;
  const B = (g + x) / 2;
  if (g !== x) {
    const le = g - x;
    b = B > 0.5 ? le / (2 - g - x) : le / (g + x), L = (g === i ? (p - f) / le + (p < f ? 6 : 0) : g === p ? (f - i) / le + 2 : (i - p) / le + 4) / 6;
  }
  return [L * 360, b * 100, B * 100];
}
function zc(a, l, i) {
  l = io(l, 0, 100) / 100, i = io(i, 0, 100) / 100;
  const p = (x) => (x + a / 30) % 12, f = l * Math.min(i, 1 - i), g = (x) => i - f * Math.max(-1, Math.min(p(x) - 3, Math.min(9 - p(x), 1)));
  return "#" + [g(0), g(8), g(4)].map((x) => Math.round(x * 255).toString(16).padStart(2, "0")).join("");
}
const [Vc, jc, Gc] = ih(Jr), Qd = zc(Vc, jc, Math.max(6, Gc - 14)), rh = zc(Vc, jc, Math.min(96, Gc + 16));
function sh(a, l, i, p, f) {
  const g = Mt / 2, x = Mt * 0.12, L = g - (g - x) * a, b = (Y) => Y ** 1.3, B = io(i, -1.5, 1.5), le = (Y) => -(Math.abs(B) * 4.6 * Y ** 1.5) * Math.sign(B), ie = a * 1.4, N = (Y, Q) => {
    const U = Math.min(4.8, Math.abs(i) * 2.6) * (Q ? 1 : -1) * Math.sign(i || 1), G = Q ? Y + L : Y, J = Q ? Y : Y + L, z = (Te) => G + le(Te) + U * Math.sin(Te * Math.PI * 1.2 + p) * b(Te) * 1.4 + ie * Math.sin(Te * Math.PI * 2 + p * 0.6) * b(Te) * (Q ? 1 : -1), K = [[J, yt]];
    for (let Te = 0; Te <= 12; Te++) K.push([z(Te / 12), yt + Mt * Te / 12]);
    K.push([J, yt + Mt]);
    let re = '<path d="' + Nl(K) + 'Z" fill="' + Jr + '"/>';
    if (f) return re;
    const A = 1.35 + ((Q ? i > 0 : i < 0) ? 0.35 : 0), V = (Te) => {
      const v = Te / 7, Me = Q ? 1 - v : v, Se = (1 - Me) ** 1.3, qe = Y + L * v;
      return Array.from({ length: 13 }, (y, T) => {
        const M = T / 12;
        return [qe + le(M) * Se + U * A * Math.sin(M * Math.PI * 1.2 + p - Me * 3.2) * b(M) * 1.4 * Se + ie * 1.6 * Math.sin(M * Math.PI * 2 + p * 0.6 - Me * 2.5) * b(M) * a * (0.4 + 0.6 * Se), yt + Mt * M];
      });
    }, ve = [1, 2, 3, 4, 5, 6].map(V);
    for (let Te = 0; Te < 6; Te += 2) re += '<path d="' + Nl(ve[Te]) + Nl(ve[Te + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return re;
  }, P = g - (g - x) * l;
  return { body: N(yt, !0) + N(yt + Mt - L, !1), rails: [{ x: yt + P - 4, y: yt, w: 4, h: Mt }, { x: yt + Mt - P, y: yt, w: 4, h: Mt }], head: 6.4 };
}
function lh(a, l, i) {
  const p = Mt * (1 - a);
  let f = "";
  if (p > 1 && (f += Eo(yt, yt, Mt, p, Jr), !i))
    for (let g = 1; g < 7; g += 2) f += Eo(yt + Mt * g / 7, yt, Mt / 7, p, "#fff");
  return { body: f, rails: [{ x: yt, y: yt + Mt * (1 - l) - 7, w: Mt, h: 11 }], head: 10.4 };
}
function dh(a, l, i, p) {
  const f = 9 - 7 * (i / 100), g = yt + Mt * (1 - a), x = Math.ceil(Mt / 10) + 1, L = yt + f / 2, b = (yt + Mt - f / 2 - L) / (x - 1), B = 0.8, le = 0.6, ie = Array.from({ length: x }, (Y, Q) => Math.max(L + Q * le, Math.min(L + Q * b, g - f / 2 - (x - 1 - Q) * le))), N = ie.slice(0, -1).map((Y, Q) => io((ie[Q + 1] - Y - le) / (b - le), 0, 1));
  N.push(N[x - 2]);
  let P = "";
  return ie.forEach((Y, Q) => {
    const U = B + (f - B) * N[Q], G = Math.max(0.5, U / 2), J = Math.max(0.4, U * 0.114);
    P += Eo(yt, Y - G, Mt, Math.max(1, U), Jr), !p && U > 2.2 && (P += Eo(yt, Y + G - J, Mt, J, Qd) + Eo(yt, Y - G, Mt, J * 0.55, rh, 0.75));
  }), p || [0.22, 0.78].forEach((Y) => {
    P += Eo(yt + Mt * Y - 0.7, yt, 1.4, Math.max(0, ie[x - 1] + 1 - yt), Qd, 0.85);
  }), { body: P, rails: [{ x: yt, y: yt + Mt * (1 - l) - 8, w: Mt, h: 8 }], head: 8.8 };
}
const ec = (a, l, i, p, f, g, x) => a === "curtain" ? sh(l, i, f, g, x) : a === "venetian" ? dh(l, i, p, x) : lh(l, i, x);
function ch(a, l) {
  let i = "", p = "";
  return l.forEach((f) => {
    const g = f.w > f.h, x = io(g ? yt + Mt / 2 : f.x + f.w / 2, 17, 183), L = io(g ? f.y + f.h / 2 : yt + Mt / 2, 17, 183);
    i += g ? Eo(yt, io(f.y + f.h / 2, yt, yt + Mt) - 1, Mt, 2, Rl) : Eo(io(f.x + f.w / 2, yt, yt + Mt) - 1, yt, 2, Mt, Rl);
    const b = g ? "M" + zt(x - 4) + " " + zt(L - 3) + "l4 -3l4 3M" + zt(x - 4) + " " + zt(L + 3) + "l4 3l4 -3" : "M" + zt(x - 3) + " " + zt(L - 4) + "l-3 4l3 4M" + zt(x + 3) + " " + zt(L - 4) + "l3 4l-3 4";
    p += '<circle cx="' + zt(x) + '" cy="' + zt(L) + '" r="11" fill="' + Rl + '" filter="url(#' + a + 's)"/><path d="' + b + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: p };
}
function ph(a, l) {
  const i = /* @__PURE__ */ new Date(), p = oh(i.getHours() + i.getMinutes() / 60), f = 42 + 18 * Math.sin(p.t * 0.5), g = p.t >= 5 && p.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (p.t - 5) / 15) : 80, x = ec(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), L = l.ghostAlpha > 4e-3 && l.ghost != null ? ec(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", b = l.grip > 4e-3 ? ch(a, x.rails) : null, B = (le) => Eo(yt, yt, Mt, Mt, le);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + a + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + a + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p.top + '"/><stop offset="1" stop-color="' + p.bot + '"/></linearGradient><radialGradient id="' + a + 'w" cx="' + zt(f) + '%" cy="' + zt(g) + '%" r="58%"><stop offset="0" stop-color="' + p.warm + '" stop-opacity="' + zt(p.op * 0.8) + '"/><stop offset="1" stop-color="' + p.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + a + 'k" cx="' + zt(100 - f * 0.8) + '%" cy="' + zt(100 - g * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + p.cool + '" stop-opacity="' + zt(p.op * 0.64) + '"/><stop offset="1" stop-color="' + p.cool + '" stop-opacity="0"/></radialGradient><filter id="' + a + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Jd + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + a + 'c)">' + B("url(#" + a + "l)") + B("url(#" + a + "w)") + B("url(#" + a + "k)") + (L ? '<g opacity="' + zt(l.ghostAlpha) + '">' + L + "</g>" : "") + x.body + '<rect x="14" y="14" width="172" height="' + x.head + '" fill="' + Jr + '" filter="url(#' + a + 's)"/></g>' + (b ? '<g clip-path="url(#' + a + 'c)" opacity="' + zt(l.grip) + '">' + b.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Jd + '" stroke-width="3"/>' + (b ? '<g opacity="' + zt(l.grip) + '">' + b.knobs + "</g>" : "") + "</svg>";
}
function uh({ onMove: a, onSet: l }) {
  var re;
  const i = "cv" + ++ah, p = document.createElement("div");
  p.className = "tfCoverArt";
  const f = (re = window.matchMedia) == null ? void 0 : re.call(window, "(pointer: coarse)").matches;
  let g = null;
  const x = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let L = 0, b = !1, B = !1, le = null, ie = 0, N = 0;
  const P = () => (g == null ? void 0 : g.kind) === "curtain" ? "x" : "y", Y = () => le || b || B || g.moving || g.target != null ? 1 : f ? performance.now() < N ? 1 : 0.4 : 0, Q = () => {
    p.innerHTML = ph(i, { kind: g.kind, pos: x.pos, bar: g.target ?? x.pos, tilt: x.tilt, vel: x.vel, ph: x.ph, ghost: x.gpos, ghostAlpha: x.ghost, grip: x.grip });
  };
  function U(A) {
    L = 0;
    const V = x.last ? Math.min(0.064, (A - x.last) / 1e3) : 1 / 60, ve = V * 60;
    x.last = A;
    const Te = g.pos - x.pos, v = x.pos;
    x.pos += Math.sign(Te) * Math.min(Math.abs(Te), Math.max(10.5, Math.abs(Te) * 1.4) * V), Math.abs(g.pos - x.pos) < 0.03 && (x.pos = g.pos), x.vel = x.vel * 0.86 + (x.pos - v) / ve * 0.14, Math.abs(x.vel) < 0.015 && x.pos === g.pos && (x.vel = 0), (x.pos !== v || x.vel) && (x.ph += (0.06 + Math.abs(x.vel) * 0.03) * ve);
    const Me = g.tilt - x.tilt;
    x.tilt += Math.sign(Me) * Math.min(Math.abs(Me), Math.max(60, Math.abs(Me) * 4) * V);
    const Se = Y();
    x.grip += (Se - x.grip) * Math.min(1, V * (Se > x.grip ? 11 : 3.5)), Math.abs(Se - x.grip) < 0.01 && (x.grip = Se);
    const qe = g.target != null && Math.abs(g.target - x.pos) > 0.5 ? 0.22 : 0;
    g.target != null && (x.gpos = g.target), x.ghost += (qe - x.ghost) * Math.min(1, V * (qe > x.ghost ? 16 : 3)), Math.abs(qe - x.ghost) < 4e-3 && (x.ghost = qe), Q(), x.pos !== g.pos || x.vel || x.tilt !== g.tilt || x.grip !== Se || x.ghost !== qe ? L = requestAnimationFrame(U) : x.last = 0;
  }
  const G = () => {
    g && !L && (L = requestAnimationFrame(U));
  }, J = setInterval(() => {
    g && !L && Q();
  }, 60 * 1e3), z = (A) => {
    const V = p.getBoundingClientRect();
    return P() === "x" ? (A.clientX - V.left) / V.width : (A.clientY - V.top) / V.height;
  };
  p.addEventListener("pointerdown", (A) => {
    var Te;
    if (!(g != null && g.canSet) || A.button > 0) return;
    A.preventDefault(), (Te = p.setPointerCapture) == null || Te.call(p, A.pointerId);
    const V = g.target ?? g.pos, ve = p.getBoundingClientRect();
    le = { p0: z(A), from: V, x0: A.clientX, value: null, side: null }, g.kind === "curtain" && V > 0 && (le.side = (A.clientX - ve.left) / ve.width < 0.5 ? "L" : "R"), G();
  }), p.addEventListener("pointermove", (A) => {
    if (!le) return;
    let V;
    if (g.kind === "curtain") {
      if (!le.side) {
        const Te = A.clientX - le.x0;
        if (Math.abs(Te) < 4) return;
        le.side = Te < 0 ? "L" : "R";
      }
      const ve = (Mt / 2 - Mt * 0.12) / 200;
      V = le.from + (le.side === "L" ? -1 : 1) * ((z(A) - le.p0) / ve) * 100;
    } else V = le.from - (z(A) - le.p0) / (Mt / 200) * 100;
    le.value = io(V, 0, 100), a(le.value);
  });
  const K = () => {
    if (!le) return;
    const A = le.value;
    le = null, A != null && l(Math.round(A)), G();
  };
  return p.addEventListener("pointerup", K), p.addEventListener("pointercancel", K), p.addEventListener("lostpointercapture", K), p.addEventListener("pointerenter", () => {
    b = !0, G();
  }), p.addEventListener("pointerleave", () => {
    b = !1, G();
  }), p.addEventListener("focus", () => {
    B = p.matches(":focus-visible"), G();
  }), p.addEventListener("blur", () => {
    B = !1, G();
  }), p.addEventListener("keydown", (A) => {
    if (!(g != null && g.canSet)) return;
    const V = Math.round(g.target ?? g.pos), ve = A.shiftKey ? 10 : 1, Te = { ArrowUp: V + ve, ArrowRight: V + ve, ArrowDown: V - ve, ArrowLeft: V - ve, PageUp: V + 25, PageDown: V - 25, Home: 0, End: 100 }[A.key];
    if (Te == null) return;
    A.preventDefault();
    const v = io(Te, 0, 100);
    a(v), clearTimeout(ie), ie = setTimeout(() => l(v), 500);
  }), {
    el: p,
    update(A) {
      const V = !g;
      g = A, V && (x.pos = g.pos, x.tilt = g.tilt, N = performance.now() + 1500, f && setTimeout(G, 1600)), p.classList.toggle("x", P() === "x"), p.classList.toggle("y", P() === "y"), g.canSet ? (p.tabIndex = 0, p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", "0"), p.setAttribute("aria-valuemax", "100"), p.setAttribute("aria-valuenow", String(Math.round(g.target ?? g.pos))), p.setAttribute("aria-orientation", P() === "x" ? "horizontal" : "vertical")) : p.setAttribute("role", "img"), p.setAttribute("aria-label", g.name + (g.canSet ? " position" : "")), p.setAttribute("aria-valuetext", g.text), G();
    },
    destroy() {
      cancelAnimationFrame(L), L = 0, clearInterval(J), clearTimeout(ie), p.remove();
    }
  };
}
const tc = "move-assistant-density", ti = {
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
}, oe = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Pl = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', nc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', hh = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Hs = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, ac = 1, fh = 4, oc = 16, ic = 32, mh = 128, gh = 256, rc = 16384, vh = 1, bh = 2, sc = 4, wh = 8, xh = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, yh = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, kh = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Il = {
  light: { name: "Lights", icon: "mdi:lamps", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, lc = "move_assistant_house", dc = "move-assistant-house-used", Mh = ["switch", "fan", "input_boolean", "automation"], cc = "move-assistant-house-look", Ch = [["popup", "Popup"], ["sheet", "Sheet"]], Hl = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Sh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Th = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', pc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', uc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', hc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ma = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + a.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", fc = Ma(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Lh = Ma(["M20 6L9 17L4 12"]), ao = {
  temp: Ma(["M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"]),
  hum: Ma(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z"]),
  lights: Ma(["M9 18h6", "M10 22h4", "M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2Z"]),
  covers: Ma(["M3 3h18", "M5 3v18c3-4 4-10 4-18", "M19 3v18c-3-4-4-10-4-18"]),
  climate: Ma(["M2 8h20", "M2 19h20", "M5 5v17", "M9.5 5v17", "M14.5 5v17", "M19 5v17"]),
  humidifier: Ma(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z", "M9 15a3 3 0 0 0 3 3"]),
  media: Ma(["M3 6h18v12H3Z", "M8 21h8"]),
  plugs: Ma(["M9 2v6", "M15 2v6", "M6 8h12v4a6 6 0 0 1-12 0Z", "M12 18v4"]),
  alert: Ma(["M12 9v4", "M12 17h.01", "M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"]),
  door: Ma(["M13 4h5v16h-5", "M3 20h18", "M13 4L6 6v14l7 0Z", "M10.5 12h.01"])
}, Ah = (a) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (a ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Eh = 1, _h = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], mc = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Fl = ["hs", "xy", "rgb", "rgbw", "rgbww"], Ol = ["door", "window", "garage_door", "opening"], Fs = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Dh = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Rh = 10, Nh = 20, Bh = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Ph = ["living room", "bedroom", "office"];
function Ih(a, { config: l, getHass: i }) {
  var Mo, Co, Fn;
  const p = (t) => a.getElementById(t), f = p("app"), x = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let L = ti.get(tc) === "1", b = {};
  const B = (t) => {
    var n;
    return (n = i()) == null ? void 0 : n.callWS(t);
  }, le = (t, n, r) => B({ type: "call_service", domain: t, service: n, service_data: r }), ie = a.querySelector("#appearancePane .toggleList");
  ie && !p("densityToggle") && (ie.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), p("densityToggle").addEventListener("click", () => {
    L = !L, ti.set(tc, L ? "1" : "0"), re();
  }));
  const N = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && wt(t).device_class === "power" && /^(W|kW)$/.test(wt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm on the Security page.", (t) => t.startsWith("alarm_control_panel.")]
  ], P = (t, n, r, d) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + n + '">' + d.map(([u, S]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + r + '="' + u + '">' + S + "</button>").join("") + "</div>", Y = (t, n, r, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + t + "</strong>" + (n ? '<div class="status">' + n + "</div>" : "") + "</div>" + r + "</div>";
  function Q() {
    var R, j, F;
    if (!x || p("housePane")) return;
    const t = p("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore";
    const n = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], r = (H, $) => '<div class="houseTab' + (H === "look" ? " active" : "") + '" data-house-pane="' + H + '"><section class="card">' + $ + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + n.map(([H, $]) => '<button class="tab segBtn' + (H === "look" ? " active" : "") + '" type="button" data-house-tab="' + H + '">' + $ + "</button>").join("") + "</div>" + r("look", '<div class="toggleList" id="houseLook"></div>') + r("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + r("sources", '<div class="toggleList">' + N.map(([H, $, ge]) => Y($, ge, '<select class="settingsSelect" data-source="' + H + '" aria-label="' + $ + '"></select>')).join("") + "</div>") + r("sums", '<div class="toggleList">' + Object.entries(Il).map(([H, $]) => Y($.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + H + '" aria-label="' + $.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = p("houseLook");
    [(R = t.querySelector(".themeBtn")) == null ? void 0 : R.closest(".toggleRow"), (j = p("densityToggle")) == null ? void 0 : j.closest(".toggleRow"), (F = p("moreInfoChoice")) == null ? void 0 : F.closest(".toggleRow")].forEach((H) => H && d.appendChild(H)), d.insertAdjacentHTML("beforeend", Y("Lights", "How lights show on the house page.", P("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + Y("Pad", "What the Dual Axis Controller’s pad sets on its tile.", P("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const u = p("housePane"), S = u.querySelector(".houseTabs"), m = S.querySelector(".rubberIndicator"), w = (H) => {
      const $ = S.querySelector(".tab.active");
      m.style.transition = H ? "" : "none", m.style.left = $.offsetLeft + "px", m.style.width = $.offsetWidth + "px", H && (m.style.transform = "scaleX(1.08)", setTimeout(() => m.style.transform = "", 180));
    };
    new ResizeObserver(() => w(!1)).observe(S), u.addEventListener("click", (H) => {
      const $ = H.target.closest("[data-house-tab]");
      if ($) {
        S.querySelectorAll(".tab").forEach((ce) => ce.classList.toggle("active", ce === $)), u.querySelectorAll(".houseTab").forEach((ce) => ce.classList.toggle("active", ce.dataset.housePane === $.dataset.houseTab)), $.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), w(!0);
        return;
      }
      const ge = H.target.closest("[data-light-fav]");
      if (ge) {
        di(ge.dataset.lightFav);
        return;
      }
      const Ne = H.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Ne || Ne.disabled)) {
        if (Ne.dataset.lights && (Ft.lights = Ne.dataset.lights), Ne.dataset.dacPad && (Ft.dacPad = Ne.dataset.dacPad), (Ne.dataset.lights || Ne.dataset.dacPad) && (Ze(), un.clear()), Ne.dataset.sumToggle) {
          const ce = Ne.dataset.sumToggle, fe = new Set(W.hiddenSums || []);
          fe.has(ce) ? fe.delete(ce) : fe.add(ce), W = { ...W, hiddenSums: [...fe] }, Dn();
        }
        $a();
      }
    }), u.addEventListener("change", (H) => {
      const $ = H.target;
      $.dataset.source && (W = { ...W, sources: { ...W.sources || {}, [$.dataset.source]: $.value || void 0 } }, Dn());
      const ge = $.dataset.lightStyle || $.dataset.lightPad;
      if (ge) {
        const Ne = $.dataset.lightStyle ? "lightStyles" : "lightPads", ce = { ...Ft[Ne] };
        $.value ? ce[ge] = $.value : delete ce[ge], Ft[Ne] = ce, Ze(), [...un.keys()].filter((fe) => fe.endsWith(":" + ge)).forEach((fe) => un.delete(fe));
      }
      $a();
    });
  }
  function U() {
    var w, R;
    Zn() && Bo();
    const t = p("housePane");
    if (!t) return;
    const n = !!customElements.get(Yn);
    t.querySelectorAll("[data-lights]").forEach((j) => j.setAttribute("aria-pressed", String(j.dataset.lights === Ft.lights))), p("lightsRow").querySelector(".status").textContent = n || !Zn() ? "How lights show on the house page." : Ia === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((j) => j.setAttribute("aria-pressed", String(j.dataset.dacPad === Ft.dacPad))), p("dacPadRow").hidden = !Zn();
    for (const j of t.querySelectorAll("[data-source]")) {
      if (j === a.activeElement) continue;
      const [F] = N.find(([$]) => $ === j.dataset.source), H = Object.keys(b).filter(N.find(([$]) => $ === F)[3]).sort(($, ge) => _e($).localeCompare(_e(ge)));
      j.dataset.sig !== H.join(",") && (j.innerHTML = '<option value="">Automatic</option>' + H.map(($) => '<option value="' + oe($) + '">' + oe(_e($)) + "</option>").join(""), j.dataset.sig = H.join(",")), j.value = H.includes((w = W.sources) == null ? void 0 : w[F]) ? W.sources[F] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((j) => {
      const F = !(W.hiddenSums || []).includes(j.dataset.sumToggle);
      j.classList.toggle("on", F), j.setAttribute("aria-checked", String(F));
    });
    const r = p("lightRows"), d = r != null && r.contains(a.activeElement) ? a.activeElement : null;
    if (!r || d != null && d.matches("select")) return;
    const u = new Set(Kn()), S = (j, F, H, $) => '<option value="' + j + '"' + (j === H ? " selected" : "") + ">" + F + "</option>", m = Object.keys(b).filter((j) => j.startsWith("light.")).sort((j, F) => !vt.get(j) - !vt.get(F) || (vt.get(j) || "").localeCompare(vt.get(F) || "") || _e(j).localeCompare(_e(F))).map((j) => {
      const F = Ft.lightStyles[j] || "", H = Ft.lightPads[j] || "", $ = u.has(j), ge = oe(_e(j));
      return "<tr><td><strong>" + ge + "</strong></td><td>" + oe(vt.get(j) || "—") + "</td><td>" + oe(Et(j)) + '</td><td class="metaSwitchCol"><button class="switch' + ($ ? " on" : "") + '" type="button" role="switch" aria-checked="' + $ + '" data-light-fav="' + oe(j) + '" aria-label="' + ge + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + oe(j) + '" aria-label="' + ge + ' tile">' + S("", "Default", F) + S("tile", "HomeCore tile", F) + S("dac", "Dual Axis Controller", F) + '</select></td><td><select class="settingsSelect" data-light-pad="' + oe(j) + '" aria-label="' + ge + ' pad"' + (ft(j) ? "" : " disabled") + ">" + S("", "Default", H) + S("temperature", "Temperature", H) + S("colour", "Colour", H) + "</select></td></tr>";
    }).join("");
    r.dataset.html !== m && (r.innerHTML = m, r.dataset.html = m, d != null && d.dataset.lightFav && ((R = r.querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || R.focus({ preventScroll: !0 })));
  }
  const G = document.createElement("div");
  G.className = "densityBadge", G.setAttribute("aria-live", "polite"), G.hidden = !0, f.appendChild(G);
  let J = 0;
  function z() {
    if (!L) return;
    const t = p("homeView"), n = (S) => S.offsetParent !== null && !S.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((S) => {
      n(S) && (S.dataset.h = Math.round(S.getBoundingClientRect().height) + " px");
    });
    const r = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(n), d = window.innerHeight, u = r.filter((S) => {
      const m = S.getBoundingClientRect();
      return m.height > 0 && m.top >= 0 && m.bottom <= d + 0.5;
    }).length;
    G.hidden = !t.classList.contains("active"), G.innerHTML = "<b>" + u + "</b><small>of " + r.length + " readings on screen</small>";
  }
  const K = () => {
    L && requestAnimationFrame(z);
  };
  function re() {
    var t;
    f.classList.toggle("showDensity", L), (t = p("densityToggle")) == null || t.classList.toggle("on", L), G.hidden = !L, clearInterval(J), L && (J = setInterval(z, 1e3), z());
  }
  window.addEventListener("scroll", K, { capture: !0, passive: !0 }), window.addEventListener("resize", K, { passive: !0 });
  const A = a.querySelector("#homeView .grid");
  let V = null, ve = null, Te = null, v = null;
  const Me = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map(), y = 350;
  let T = null;
  const M = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map();
  let W = { favourites: null }, ee = {}, se = {}, ue = [], We = null;
  const Xe = (() => {
    try {
      return JSON.parse(ti.get(dc)) || {};
    } catch {
      return {};
    }
  })();
  let vt = /* @__PURE__ */ new Map(), an = 0;
  function Dn() {
    clearTimeout(an), an = setTimeout(() => Promise.resolve(B({ type: "frontend/set_user_data", key: lc, value: W })).catch(() => {
    }), 400);
  }
  const Ft = (() => {
    let t = {};
    try {
      t = JSON.parse(ti.get(cc)) || {};
    } catch {
    }
    const n = (r, d) => Object.fromEntries(Object.entries(r || {}).filter(([, u]) => d.includes(u)));
    return {
      more: t.more === "sheet" ? "sheet" : "popup",
      lights: t.lights === "dac" ? "dac" : "tile",
      dacPad: t.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: n(t.lightStyles, ["tile", "dac"]),
      lightPads: n(t.lightPads, ["temperature", "colour"])
    };
  })(), Ze = () => ti.set(cc, JSON.stringify(Ft)), Ct = () => {
    f.dataset.more = Ft.more, dn();
  };
  x && ie && !p("moreInfoChoice") && (p("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Ch.map(([t, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ft.more === t) + '" data-more-style="' + t + '">' + n + "</button>").join("") + "</div></div>"
  ), p("moreInfoChoice").addEventListener("click", (t) => {
    const n = t.target.closest("[data-more-style]");
    n && (Ft.more = n.dataset.moreStyle, Ze(), Ct(), p("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((r) => r.setAttribute("aria-pressed", String(r === n))));
  })), Q();
  let at = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const on = /* @__PURE__ */ new Map();
  let bn = "";
  const _i = x ? Bp({ onChange: () => Kt() }) : null;
  x && f.classList.add("house");
  const st = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ve = null, ut = null, ro = !1;
  function Di(t) {
    const n = os();
    if (f.classList.toggle("houseBento", !!n), Ve && (ut !== n || t == null) && (Ve.destroy(), Ve = null), !n || t == null) {
      st.remove();
      return;
    }
    st.isConnected || A.append(st), st.style.order = t, !Ve && !ro && (Ve = Xd(st, { getHass: i, entityId: n, style: "bitmap" }), ut = n);
  }
  const ai = [["wx", ["current"]], ["avg", ["compared_to_average"]]], rn = Object.fromEntries(ai.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Je = null, Rn = null;
  function Ri(t) {
    const n = os();
    Je && Rn !== n && (Je.forEach((r) => r.destroy()), Je = null), Object.values(rn).forEach((r) => n ? !r.isConnected && A.append(r) : r.remove()), n && !Je && !ro && (Je = ai.map(([r, d]) => Xd(rn[r], { getHass: i, entityId: n, style: "bitmap", cards: d, onOpen: r === "wx" ? () => _r("weather") : void 0 })), Rn = n);
  }
  const wt = (t) => {
    var n;
    return ((n = b[t]) == null ? void 0 : n.attributes) || {};
  }, _e = (t) => wt(t).friendly_name || t, lt = (t, n) => Ai(t) || (Number(wt(t).supported_features) & n) === n, mt = (t) => {
    const n = String(t ?? "").replace(/_/g, " ");
    return n.charAt(0).toUpperCase() + n.slice(1);
  }, He = (t, n = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: n, maximumFractionDigits: n }), so = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Do = (t) => wt(t).supported_color_modes || [], aa = (t) => {
    const n = t / 100;
    return [n <= 66 ? 255 : 329.7 * Math.pow(n - 60, -0.1332), n <= 66 ? 99.47 * Math.log(n) - 161.12 : 288.12 * Math.pow(n - 60, -0.0755), n >= 66 ? 255 : n <= 19 ? 0 : 138.52 * Math.log(n - 10) - 305.04];
  }, De = (t, n) => [5, 3, 1].map((r) => {
    const d = (r + t / 60) % 6;
    return 255 * (1 - n / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  });
  function je(t) {
    const n = wt(t), r = (n.rgb_color || (n.hs_color && n.color_mode !== "color_temp" ? De(...n.hs_color) : n.color_temp_kelvin ? aa(n.color_temp_kelvin) : [255, 170, 0])).map((u) => Math.round(Math.max(0, Math.min(255, u)))), d = (0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]) / 255 > 0.8;
    return "--light:rgb(" + r.join(",") + ");--light-ink:" + (d ? "#26221e" : "#ffffff");
  }
  const Yt = (t) => {
    var n;
    return t.startsWith("light.") && ((n = b[t]) == null ? void 0 : n.state) === "on" ? ' data-light style="' + je(t) + '"' : "";
  }, cn = (t) => {
    const n = Do(t);
    return n.length ? n.some((r) => r !== "onoff") : wt(t).brightness != null;
  }, wn = (t) => [wt(t).min_color_temp_kelvin || 2e3, wt(t).max_color_temp_kelvin || 6500], Nt = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function lo(t) {
    const n = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (n < 10) return "Just now";
    if (n < 60) return n + " seconds ago";
    const r = Math.round(n / 60);
    if (r < 60) return r + (r === 1 ? " minute ago" : " minutes ago");
    const d = Math.round(r / 60);
    if (d < 24) return d + (d === 1 ? " hour ago" : " hours ago");
    const u = Math.round(d / 24);
    return u + (u === 1 ? " day ago" : " days ago");
  }
  const At = (t) => {
    var n;
    return wt(t).current_position ?? (((n = b[t]) == null ? void 0 : n.state) === "closed" ? 0 : 100);
  }, Gn = (t) => {
    var n;
    return Po("pos", t, ((n = M.get(t)) == null ? void 0 : n.pos) ?? At(t));
  }, Ro = (t) => {
    var n;
    return Po("tilt", t, ((n = M.get(t)) == null ? void 0 : n.tilt) ?? wt(t).current_tilt_position);
  };
  function Et(t) {
    var m;
    const n = b[t];
    if (!n) return "Not found";
    if (n.state === "unavailable") return "Unavailable";
    const r = n.attributes, d = t.split(".")[0];
    if (d === "light") {
      if (n.state !== "on") return "Off";
      const w = r.color_temp_kelvin;
      return (cn(t) ? so(n) + "%" : "On") + (r.color_mode === "color_temp" && w ? " · " + Number(w).toLocaleString() + "k" : Fl.includes(r.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (n.state === "off" ? "Off" : mt(r.hvac_action || n.state)) + " · " + He(r.current_temperature) + " °C now";
    if (d === "cover") {
      const w = At(t), R = r.current_tilt_position;
      return n.state === "opening" || n.state === "closing" ? mt(n.state) + " - " + w + "%" : (w <= 0 ? "Closed" : w >= 100 ? "Open" : "Partially open") + (R > 0 && R < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return n.state !== "on" ? "Off" : mt(r.action || "on") + " · " + r.current_humidity + "% now";
    if (d === "vacuum") return mt(n.state) + (n.state === "cleaning" && ((m = r.rooms) != null && m.length) ? " · " + r.rooms.join(", ") : "") + (r.battery_level != null ? " · " + r.battery_level + "%" : "");
    if (d === "media_player") return n.state === "playing" || n.state === "paused" ? (n.state === "paused" ? "Paused · " : "") + (r.media_title || "Playing") : mt(n.state);
    if (d === "alarm_control_panel") return mc[n.state] || mt(n.state);
    if (d === "lock" || d === "valve") return mt(n.state);
    if (d === "switch") return n.state === "on" ? "On" : "Off";
    if (d === "plant") return n.state === "ok" ? "Healthy" : mt(r.problem);
    if (d === "binary_sensor")
      return r.device_class === "moisture" ? n.state === "on" ? "Wet" : "Dry" : Ol.includes(r.device_class) ? n.state === "on" ? "Open" : "Closed" : n.state === "on" ? "Detected" : "Clear";
    if (r.rang) return "Rang at " + Nt(r.rang);
    const u = i();
    if (u != null && u.formatEntityState && !Ai(t))
      try {
        return u.formatEntityState(n);
      } catch {
      }
    const S = Number(n.state);
    if (n.state !== "" && Number.isFinite(S)) {
      const w = Math.abs(S) >= 100 ? 0 : Math.abs(S) >= 10 ? 1 : 2, R = r.unit_of_measurement ? r.unit_of_measurement === "%" ? "%" : " " + r.unit_of_measurement : "";
      return S.toLocaleString(void 0, { maximumFractionDigits: w }) + R + (r.plant_low ? " · Low" : r.plant_high ? " · High" : "");
    }
    return mt(n.state);
  }
  const Ut = (t) => t >= 1e3 ? He(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function xn(t) {
    const n = i();
    t.querySelectorAll("[data-icon-for]").forEach((r) => {
      var S;
      const d = b[r.dataset.iconFor], u = r.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && d && !u) {
        let m = r.firstElementChild;
        (!m || m.localName !== "ha-state-icon") && (r.textContent = "", m = document.createElement("ha-state-icon"), r.appendChild(m)), m.hass = n, m.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let m = r.firstElementChild;
        (!m || m.localName !== "ha-icon") && (r.textContent = "", m = document.createElement("ha-icon"), r.appendChild(m)), m.icon = u || ((S = d == null ? void 0 : d.attributes) == null ? void 0 : S.icon) || "mdi:circle-medium";
      } else r.textContent || (r.textContent = (r.dataset.letter || _e(r.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    });
  }
  const jt = (t, n, r) => ' data-icon-for="' + oe(t) + '"' + (n ? ' data-icon-name="' + oe(n) + '"' : "") + (r ? ' data-letter="' + oe(r) + '"' : ""), pn = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : wt(t).rang ? "mdi:doorbell" : "", rt = (t, n, r, d) => oe([t, n, r, d ? JSON.stringify(d) : ""].join("|")), co = (t) => oe(JSON.stringify(t));
  function oa(t, n) {
    var u, S;
    const r = oe(_e(n) + ", " + Et(n));
    return '<div class="activityRow' + (Number.isFinite(Number((u = b[n]) == null ? void 0 : u.state)) && ((S = b[n]) == null ? void 0 : S.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + oe(t + "|" + n) + '" aria-label="' + r + '. Show the last 24 hours"' : '" aria-label="' + r + '"') + '><div class="tfIcon" aria-hidden="true"' + jt(n, pn(n)) + '></div><div><div class="activityRowName">' + oe(_e(n)) + '</div><div class="activityRowMeta">' + oe(Et(n)) + "</div></div></div>";
  }
  const Pa = (t, n, r) => '<div class="activityRow" aria-label="' + oe(t + ", " + n) + '"><div class="tfIcon" aria-hidden="true"' + jt("", r, t) + '></div><div><div class="activityRowName">' + oe(t) + '</div><div class="activityRowMeta">' + oe(n) + "</div></div></div>";
  function No(t) {
    var r;
    const n = ((r = b[t]) == null ? void 0 : r.state) === "on";
    return '<div class="activityRow tfPlug' + (n ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + rt("switch", "toggle", t) + '" aria-label="Turn ' + oe(_e(t)) + (n ? " off" : " on") + '"' + jt(t) + '></button><div><div class="activityRowName">' + oe(_e(t)) + '</div><div class="activityRowMeta">' + oe(Et(t)) + "</div></div></div>";
  }
  const C = (t) => {
    var n;
    return ((n = Se.get(t)) == null ? void 0 : n.name) ?? _e(t);
  }, D = (t) => {
    var n;
    return ((n = Se.get(t)) == null ? void 0 : n.text) ?? Et(t);
  };
  function O(t) {
    var r;
    const n = (r = Se.get(t)) == null ? void 0 : r.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (n ? jt("", n, C(t)) : jt(t, pn(t))) + '></div><div><div class="activityRowName">' + oe(C(t)) + '</div><div class="activityRowMeta">' + oe(D(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + oe(C(t)) + '’s last 24 hours">' + Pl + '</button></div><svg class="tfGraph" data-graph="' + oe(t) + '" role="img" aria-label="' + oe(C(t)) + ', last 24 hours"></svg></div>';
  }
  function q(t, n, r, d, u = "", S = null, m = "") {
    const w = V && V.key === t;
    return '<section class="card tfCard' + (m ? " " + m : "") + (w ? " open" : "") + '" data-tf data-k="' + oe(t) + '" style="order:' + n + (w && V.h ? ";min-height:" + V.h + "px" : "") + '" aria-label="' + oe(r) + '"><div class="activityHeader">' + (S ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + oe(S) + '" aria-label="' + oe(r + ", " + Et(S) + ". More info") + '">' + oe(r) + "</button>" : '<div class="activityTitle">' + oe(r) + "</div>") + "</div>" + (w ? O(V.id) : '<div class="activityRows">' + d.join("") + "</div>" + u) + "</section>";
  }
  function he(t, n) {
    const r = "readings:" + t.id, d = t.readings.map((u) => oa(r, u));
    return t.power != null && d.push(Pa("Power now", Ut(t.power), "mdi:flash")), q(r, n, "Readings", d.concat(t.plugs.map(No)));
  }
  function we(t, n) {
    var w;
    const r = "energy:" + t.id, [d, u] = [t.solar.find((R) => R.endsWith("_power")), t.solar.find((R) => R.endsWith("_today"))], S = [d, u].filter(Boolean).map((R) => oa(r, R)), m = Number(((w = b[d]) == null ? void 0 : w.state) || 0) * 1e3;
    return at.grid && (S.push(oa(r, at.grid)), S.push(Pa("House use", Ut(m + Number(b[at.grid].state)), "mdi:home-lightning-bolt"))), q(r, n, "Energy", S, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const me = (t, n) => q("plant:" + t.id, n, _e(t.id), t.readings.map((r) => oa("plant:" + t.id, r)), "", t.id), ye = (t) => q("openings", t, "Doors and windows", at.security.openings.map((n) => oa("openings", n)));
  function pe(t, n, r, d, u, S, m = null) {
    const w = r == null ? null : Math.max(0, Math.min(1, r)), R = w == null ? 0 : Math.round(w * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + oe(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + R + '"' + (u ? ' aria-valuetext="' + oe(u) + '"' : "") + ' data-drag="' + oe(t + "|" + n) + '">' + (m != null ? '<span class="was" aria-hidden="true" style="left:' + m + '%"></span>' : "") + (S ? w == null ? "" : '<b style="left:' + R + '%"></b>' : '<i style="width:' + R + '%"></i>') + "</div>";
  }
  const Ee = "move-assistant-house-last-bright", Oe = (() => {
    try {
      return JSON.parse(ti.get(Ee)) || {};
    } catch {
      return {};
    }
  })();
  let Ke = 0;
  const Ge = (t, n) => {
    !n || Oe[t] === n || (Oe[t] = n, clearTimeout(Ke), Ke = setTimeout(() => ti.set(Ee, JSON.stringify(Oe)), 500));
  }, Re = (t, n, r, d) => '<div class="tfStep" role="group" aria-label="' + oe(t) + '"><button type="button" data-act="' + r + '" aria-label="Lower ' + oe(t.toLowerCase()) + '">−</button><output>' + oe(n) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + oe(t.toLowerCase()) + '">+</button></div>', Ie = (t, n, r) => '<div class="' + t + '" role="group" aria-label="' + oe(n) + '">' + r.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + oe(d.aria) + '"' : "") + ">" + (d.html || oe(d.label)) + "</button>").join("") + "</div>", Be = (t, n) => "width:" + Math.round(Math.max(0, Math.min(1, (t - n * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * n / 3).toFixed(2), et = (t) => "left:calc(3px + " + t / 100 + " * (100% - 6px))", ht = (t, n) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + oe(_e(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-blocks="' + oe(t) + '">' + [0, 1, 2, 3].map((r) => '<span><i style="' + Be(n, r) + '"></i><b' + (n >= (r + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (r + 1) * 25 + "%</b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + et(n) + '">' + Math.round(n) + "%</output></div>";
  function Lt(t, n) {
    t.querySelectorAll(":scope>span").forEach((d, u) => {
      d.firstElementChild.setAttribute("style", Be(n, u)), d.lastElementChild.classList.toggle("lit", n >= (u + 1) * 25 - 12);
    });
    const r = t.querySelector(".tfTip");
    r.setAttribute("style", et(n)), r.textContent = Math.round(n) + "%", t.setAttribute("aria-valuenow", String(Math.round(n))), t.setAttribute("aria-valuetext", Math.round(n) + "% open");
  }
  const xt = (t, n) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + oe(_e(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-drag="tilt|' + oe(t) + '"><i style="width:calc((100% - 6px) * ' + n / 100 + ')"></i><span' + (n > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (n > 92 ? ' class="lit"' : "") + ">Open</span></div>", Zt = (t, n, r) => '<div class="tfCoverBtns" role="group" aria-label="' + oe(_e(t)) + '">' + [
    lt(t, vh) && ["open", "Open", "open_cover", n >= 100 && !r],
    lt(t, wh) && ["stop", "Stop", "stop_cover", !1],
    lt(t, bh) && ["close", "Close", "close_cover", n <= 0 && !r]
  ].filter(Boolean).map(([d, u, S, m]) => '<button type="button" data-act="' + rt("cover", S, t) + '" aria-label="' + u + '"' + (m ? " disabled" : "") + ">" + xh[d] + "</button>").join("") + "</div>", Sn = (t, n) => '<button class="tfIcon' + (n.art ? " art" : "") + '" type="button" data-act="' + n.button.act + '" aria-label="' + oe(n.button.label) + '"' + (n.art ? ' style="background-image:url(&quot;' + oe(n.art) + '&quot;)"' : jt(t, n.icon)) + "></button>", Un = (t) => '<button class="tfName" type="button" data-more="' + oe(t) + '" aria-label="' + oe(_e(t) + ", " + Et(t) + ". More info") + '"><span class="activityRowName">' + oe(_e(t)) + '</span><span class="activityRowMeta">' + oe(Et(t)) + "</span></button>";
  function Nn(t, n = !1, r = null) {
    if (t.startsWith("light.") && pa(t)) return '<div class="tfDac" data-k="' + oe(t) + '" data-dac="' + (n ? "more:" : r ? "dash:" : "tile:") + oe(t) + '"></div>';
    const d = ii(t), u = r || (n && t.startsWith("light.") ? ["bright"] : null), S = d.sections.map((m, w) => m && (!u || u.includes((d.parts || [])[w])) ? m : "").filter(Boolean);
    return '<div class="tfAction' + (d.on ? " on" : "") + '" data-k="' + oe(t) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + Yt(t) + '><div class="tfActionHead">' + Sn(t, d) + Un(t) + "</div>" + S.join("") + "</div>";
  }
  const Yn = "dual-controller-v3", ia = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.4/dist/dual-axis-controller-v4.js";
  let Ia = null;
  async function Bo() {
    if (Ia || customElements.get(Yn)) return;
    Ia = "loading";
    const t = await Promise.resolve().then(() => B({ type: "lovelace/resources" })).catch(() => null), n = Array.isArray(t) && t.some((d) => /dual-axis-controller/i.test(d.url || ""));
    if (await Promise.race([customElements.whenDefined(Yn), new Promise((d) => setTimeout(d, n ? 8e3 : 0))]), customElements.get(Yn)) return;
    const r = Object.assign(document.createElement("script"), { src: ia });
    r.onerror = () => {
      Ia = "failed", U();
    }, document.head.appendChild(r);
  }
  const un = /* @__PURE__ */ new Map(), ft = (t) => (Ft.lightStyles[t] || Ft.lights) === "dac", Zn = () => Ft.lights === "dac" || Object.values(Ft.lightStyles).includes("dac");
  function pa(t) {
    return ft(t) && !!customElements.get(Yn);
  }
  const ua = (t) => Ft.lightPads[t] || Ft.dacPad, ha = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !f.classList.contains("light") },
      callService: (n, r, d, ...u) => t.callService(n, ...Or(n, r, d), ...u)
    };
  }, oi = ".halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", Sa = ".hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}", hn = (t, n) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Sa + (n ? oi : "") })).dataset.tf = "");
  }, Bt = /* @__PURE__ */ new Map(), Ni = new ResizeObserver((t) => t.forEach(({ target: n }) => {
    const r = n.parentElement;
    !r || !n.offsetHeight || (r.style.removeProperty("min-height"), Bt.set(r.dataset.dac, r.offsetHeight));
  }));
  function sn(t) {
    t.querySelectorAll("[data-dac]").forEach((n) => {
      const r = n.dataset.dac, d = r.startsWith("dash:");
      let u = un.get(r);
      if (!u) {
        const S = r.slice(r.indexOf(":") + 1);
        u = document.createElement(Yn), u.setConfig({ type: "custom:" + Yn, entity: S, pad: ua(S), ...d ? { tap_action: { action: "none" } } : {} }), un.set(r, u);
      }
      u.hass = ha(), u.parentNode !== n && n.replaceChildren(u, ...n.querySelectorAll(":scope > .tfEditChips")), !u.offsetHeight && Bt.has(r) && (n.style.minHeight = Bt.get(r) + "px"), Ni.observe(u), hn(u, d);
    });
  }
  function Qr() {
    const t = ha();
    un.forEach((n, r) => {
      n.isConnected ? n.hass = t : un.delete(r);
    });
  }
  customElements.whenDefined(Yn).then(() => {
    x && (A != null && A.querySelector("[data-tf]")) && ms($a);
  });
  const Po = (t, n, r) => qe.has(t + "|" + n) ? qe.get(t + "|" + n) : r;
  function ii(t) {
    var S;
    const n = b[t], r = n.attributes, d = t.split(".")[0], u = (m, w) => ({ act: rt(m, "toggle", t), label: w });
    if (d === "light") {
      const m = n.state === "on", w = Do(t), [R, j] = wn(t), F = Po("bright", t, so(n));
      m && Ge(t, so(n));
      const H = Po("ct", t, m && r.color_mode === "color_temp" ? r.color_temp_kelvin : null), $ = Po("hue", t, m && Fl.includes(r.color_mode) && r.hs_color ? r.hs_color[0] : null);
      return { on: m, button: u("light", "Turn " + _e(t) + (m ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        cn(t) && pe("bright", t, F / 100, _e(t) + " brightness", F + "%", !1, m ? null : Oe[t] ?? null),
        w.includes("color_temp") && pe("ct", t, H == null ? null : (H - R) / (j - R), _e(t) + " warm to cool", H == null ? "" : Math.round(H) + " kelvin", !0),
        w.some((ge) => Fl.includes(ge)) && pe("hue", t, $ == null ? null : $ / 360, _e(t) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const m = r.target_temp_step || 0.5, w = Number(r.temperature);
      return { on: n.state !== "off", tone: n.state === "cool" || r.hvac_action === "cooling" ? "cool" : "heat", button: u("climate", "Turn " + _e(t) + (n.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(w) && Re("Target temperature", He(w) + " °C", rt("climate", "set_temperature", t, { temperature: w - m }), rt("climate", "set_temperature", t, { temperature: w + m })),
        Ie("tfSeg", "Mode", (r.hvac_modes || []).map((R) => ({ label: mt(R), act: rt("climate", "set_hvac_mode", t, { hvac_mode: R }), pressed: n.state === R })))
      ] };
    }
    if (d === "cover") {
      const m = n.state === "opening" || n.state === "closing", w = n.state === "closed", R = Gn(t), j = Ro(t);
      return { on: !w, tone: "blue", icon: yh[Bl(n)][w ? 1 : 0], button: u("cover", (w ? "Open " : "Close ") + _e(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        lt(t, sc) && ht(t, R),
        j != null && xt(t, j),
        Zt(t, R, m)
      ] };
    }
    if (d === "humidifier") {
      const m = Number(r.humidity);
      return { on: n.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: u("humidifier", "Turn " + _e(t) + (n.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(m) && Re("Target humidity", m + "%", rt("humidifier", "set_humidity", t, { humidity: m - 1 }), rt("humidifier", "set_humidity", t, { humidity: m + 1 })),
        ((S = r.available_modes) == null ? void 0 : S.length) && Ie("tfSeg", "Mode", r.available_modes.map((w) => ({ label: mt(w), act: rt("humidifier", "set_mode", t, { mode: w }), pressed: r.mode === w })))
      ] };
    }
    if (d === "media_player") {
      const m = n.state === "playing", w = n.state === "off" || n.state === "standby", R = Po("vol", t, r.volume_level), j = w ? { act: rt("media_player", lt(t, mh) ? "turn_on" : "toggle", t), label: "Turn " + _e(t) + " on" } : n.state === "playing" || n.state === "paused" ? { act: rt("media_player", "media_play_pause", t), label: (m ? "Pause " : "Play ") + _e(t) } : { act: rt("media_player", lt(t, gh) ? "turn_off" : "toggle", t), label: "Turn " + _e(t) + " off" };
      return { on: !w, tone: "blue", art: !w && r.entity_picture ? r.entity_picture : null, button: j, parts: ["playback", "volume"], sections: w ? [] : [
        (lt(t, oc) || lt(t, ic) || lt(t, ac) || lt(t, rc)) && Ie("tfSeg", "Playback", [
          { html: Hs.prev, aria: "Previous", act: rt("media_player", "media_previous_track", t), disabled: !lt(t, oc) },
          { html: m ? Hs.pause : Hs.play, aria: m ? "Pause" : "Play", act: rt("media_player", "media_play_pause", t), disabled: !(lt(t, ac) || lt(t, rc)) },
          { html: Hs.next, aria: "Next", act: rt("media_player", "media_next_track", t), disabled: !lt(t, ic) }
        ]),
        lt(t, fh) && R != null && pe("vol", t, R, _e(t) + " volume", Math.round(R * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const m = n.state === "cleaning", w = r.rooms || [], R = (F) => w.includes(F) ? w.filter((H) => H !== F) : w.concat(F), j = rt("vacuum", m ? "pause" : "start", t, Ai(t) ? { rooms: w } : null);
      return { on: m || n.state === "returning", tone: "blue", button: { act: j, label: (m ? "Pause " : "Start ") + _e(t) }, parts: ["controls", "rooms"], sections: [
        Ie("tfSeg", _e(t), [
          { label: m ? "Pause" : "Start", act: j },
          { label: "Dock", act: rt("vacuum", "return_to_base", t), disabled: n.state === "docked" },
          { label: "Locate", act: rt("vacuum", "locate", t) }
        ]),
        Ai(t) && Ie("tfChips", "Rooms to clean", at.rooms.filter((F) => F.id !== "balcony").map((F) => ({ label: F.name, act: rt("vacuum", "set_rooms", t, { rooms: R(F.name) }), pressed: w.includes(F.name) })))
      ] };
    }
    if (d === "lock") {
      const m = n.state === "locked";
      return { on: !m, tone: "heat", button: { act: rt("lock", m ? "unlock" : "lock", t), label: (m ? "Unlock " : "Lock ") + _e(t) }, parts: ["controls"], sections: [
        Ie("tfSeg", _e(t), [
          { label: "Lock", act: rt("lock", "lock", t), pressed: m },
          { label: "Unlock", act: rt("lock", "unlock", t), pressed: n.state === "unlocked" },
          lt(t, Eh) && { label: "Open", act: rt("lock", "open", t), pressed: n.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const m = n.state === "disarmed";
      return { on: !m, tone: n.state === "triggered" ? "alarm" : "blue", button: { act: rt("alarm_control_panel", m ? "alarm_arm_away" : "alarm_disarm", t), label: m ? "Arm " + _e(t) + ", away" : "Disarm " + _e(t) }, parts: ["controls"], sections: [
        Ie("tfSeg", _e(t), _h.filter(([, , , w]) => !w || lt(t, w)).map(([w, R, j]) => ({ label: R, act: rt("alarm_control_panel", j, t), pressed: n.state === w })))
      ] };
    }
    if (d === "valve") {
      const m = n.state === "open";
      return { on: m, tone: "blue", icon: "mdi:sprinkler-variant", button: u("valve", (m ? "Close " : "Open ") + _e(t)), parts: ["controls"], sections: [
        Ie("tfSeg", _e(t), [
          { label: "Open", act: rt("valve", "open_valve", t), pressed: m },
          { label: "Close", act: rt("valve", "close_valve", t), pressed: !m }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: _e(t) }, sections: [] };
  }
  const Ha = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : He(t)) + "°";
  function fr(t) {
    const n = (fe) => t.readings.find((ae) => wt(ae).device_class === fe), r = n("temperature"), d = n("humidity"), u = (fe) => {
      var ae;
      return Number((ae = b[fe]) == null ? void 0 : ae.state);
    }, S = (fe) => t.actions.filter((ae) => fe.test(ae)), m = t.lights.filter((fe) => {
      var ae;
      return ((ae = b[fe]) == null ? void 0 : ae.state) === "on";
    }), w = S(/^cover\./), R = w.filter((fe) => {
      var ae;
      return ((ae = b[fe]) == null ? void 0 : ae.state) !== "closed";
    }), j = [...new Set(w.map((fe) => Bl(b[fe])))], F = S(/^climate\./)[0], H = S(/^humidifier\./)[0], $ = S(/^media_player\./), ge = $.find((fe) => {
      var ae;
      return ((ae = b[fe]) == null ? void 0 : ae.state) === "playing";
    }) || $.find((fe) => {
      var ae;
      return ((ae = b[fe]) == null ? void 0 : ae.state) === "paused";
    }), Ne = t.plugs.filter((fe) => {
      var ae;
      return ((ae = b[fe]) == null ? void 0 : ae.state) === "on";
    }), ce = [];
    if (r && Number.isFinite(u(r)) && ce.push({ key: "temp", id: r, kind: "reading", icon: ao.temp, label: "Temperature", value: He(u(r)) + "°" }), d && Number.isFinite(u(d)) && ce.push({ key: "hum", id: d, kind: "reading", icon: ao.hum, label: "Humidity", value: Math.round(u(d)) + "%" }), t.lights.length && ce.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: ao.lights,
      label: "Lights",
      value: m.length ? m.length + " of " + t.lights.length + " on" : "All off",
      short: m.length ? m.length + " on" : "Off",
      on: m.length > 0,
      light: m.length ? je(m[0]) : "",
      acts: t.lights.map((fe) => ["light", m.length ? "turn_off" : "turn_on", fe]),
      aria: (m.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), w.length) {
      const fe = j.length === 1 ? kh[j[0]] : "covers", ae = Math.round(w.reduce((Ue, It) => Ue + At(It), 0) / w.length);
      ce.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: ao.covers,
        label: mt(fe),
        value: ae <= 0 ? "Closed" : ae >= 100 ? "Open" : ae + "% open",
        short: ae <= 0 ? "Closed" : ae + "%",
        on: R.length > 0,
        acts: w.map((Ue) => ["cover", R.length ? "close_cover" : "open_cover", Ue]),
        aria: (R.length ? "Close the " : "Open the ") + fe + " in " + t.name
      });
    }
    if (F) {
      const fe = wt(F), ae = b[F].state === "off";
      ce.push({
        key: "climate",
        kind: "control",
        tone: fe.hvac_action === "cooling" ? "cool" : "heat",
        icon: ao.climate,
        label: _e(F),
        value: ae ? "Off" : mt(fe.hvac_action || b[F].state) + " · " + Ha(fe.temperature),
        short: ae ? "Off" : Ha(fe.temperature),
        on: !ae,
        acts: [["climate", "toggle", F]],
        aria: "Turn " + _e(F) + (ae ? " on" : " off")
      });
    }
    if (H) {
      const fe = b[H].state === "on";
      ce.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: ao.humidifier,
        label: _e(H),
        value: fe ? "On · " + wt(H).humidity + "%" : "Off",
        short: fe ? wt(H).humidity + "%" : "Off",
        on: fe,
        acts: [["humidifier", "toggle", H]],
        aria: "Turn " + _e(H) + (fe ? " off" : " on")
      });
    }
    if ($.length) {
      const fe = ge || $[0], ae = b[fe], Ue = ae.state === "playing";
      ce.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: ao.media,
        label: _e(fe),
        value: Et(fe),
        short: Ue ? "Playing" : ae.state === "paused" ? "Paused" : mt(ae.state),
        on: Ue,
        acts: [["media_player", ae.state === "playing" || ae.state === "paused" ? "media_play_pause" : "toggle", fe]],
        aria: (Ue ? "Pause " : "Play ") + _e(fe)
      });
    }
    return t.plugs.length && ce.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: ao.plugs,
      label: "Plugs",
      value: Ne.length ? Ne.length + " of " + t.plugs.length + " on" : "All off",
      short: Ne.length ? Ne.length + " on" : "Off",
      on: Ne.length > 0,
      acts: t.plugs.map((fe) => ["switch", Ne.length ? "turn_off" : "turn_on", fe]),
      aria: (Ne.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((fe) => ce.push(wt(fe).device_class === "moisture" ? { key: "alert:" + fe, kind: "alert", icon: ao.alert, label: "Water leak" } : { key: "note:" + fe, kind: "note", icon: ao.door, label: _e(fe) + " " + Et(fe).toLowerCase() })), ce;
  }
  const es = (t, n) => {
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
          var S;
          return ((S = b[u]) == null ? void 0 : S.state) === "playing";
        }) || d.find((u) => {
          var S;
          return ((S = b[u]) == null ? void 0 : S.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[n] || [];
  }, mr = (t, n, r) => '<button class="' + n + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + co(t.acts) + '" aria-label="' + oe(t.aria) + '" aria-pressed="' + t.on + '">' + r + "</button>", ts = (t) => '<button class="tfAName" type="button" data-go="' + oe(t.id) + '" aria-label="Open ' + oe(t.name) + '">' + oe(t.name) + "</button>";
  function Bi(t, n, r = !1) {
    const d = n.find((w) => w.key === "lights"), u = !!(d != null && d.on), S = u && d.light ? ' data-light style="' + d.light + '"' : "", m = '<span class="tfAreaGlyph"' + jt("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return r || !d ? '<span class="tfIcon tfAreaIcon' + (u ? " on" : "") + '"' + S + ' aria-hidden="true">' + m + "</span>" : '<button class="tfIcon tfAreaIcon' + (u ? " on" : "") + '" type="button"' + S + ' data-acts="' + co(d.acts) + '" aria-label="' + oe(d.aria) + '" aria-pressed="' + u + '">' + m + "</button>";
  }
  const Ys = (t) => t.filter((n) => n.kind === "alert" || n.kind === "note").map((n) => '<span class="sourceTag">' + oe(n.label) + "</span>").join(" "), Zs = (t) => t.readings.find((n) => wt(n).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((n) => b[n]) || null, gr = (t, n) => {
    const r = _e(n);
    return r.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? mt(r.slice(t.name.length + 1)) : r;
  };
  function ri(t) {
    const n = b[t], r = wt(t), d = t.split(".")[0], u = Number(n.state);
    if (n.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(u)) {
      if (r.device_class === "temperature") return { text: Ha(u) };
      const S = r.unit_of_measurement || "";
      return S === "%" ? { text: Math.round(u) + "%" } : { text: He(u, Number.isInteger(u) ? 0 : 1), unit: S };
    }
    if (d === "climate" && (r.current_temperature ?? r.temperature) != null) return { text: Ha(r.current_temperature ?? r.temperature) };
    if (d === "light") return { text: n.state !== "on" ? "Off" : cn(t) ? so(n) + "%" : "On" };
    if (d === "cover") {
      const S = At(t);
      return { text: S <= 0 ? "Closed" : S >= 100 ? "Open" : S + "%" };
    }
    return d === "humidifier" ? { text: n.state === "on" ? r.humidity + "%" : "Off" } : d === "media_player" ? { text: n.state === "playing" ? "Playing" : n.state === "paused" ? "Paused" : mt(n.state) } : { text: Et(t) };
  }
  const Ks = (t, n, r) => {
    const d = r.find((w) => w.key === "temp"), u = r.find((w) => w.key === "hum"), S = wt(n), m = b[n].state === "off";
    return n.startsWith("climate.") ? [gr(t, n), m ? "Off" : mt(S.hvac_action || b[n].state) + (S.temperature != null ? " · " + Ha(S.temperature) : ""), u && u.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === n) && gr(t, n), d && d.id !== n && d.value, u && u.id !== n && u.value + " humidity"].filter(Boolean).join(" · ");
  };
  function ns(t, n, r) {
    const d = r && ri(r), u = r ? Ks(t, r, n) : "", S = (w) => {
      const R = es(t, w.key);
      return R.length === 1 ? R[0] : "group:" + t.id + ":" + w.key;
    }, m = n.filter((w) => w.kind === "control").slice(0, 4).map((w) => '<div class="tfATile' + (w.on ? " on" : "") + '" data-tone="' + w.tone + '"' + (w.light ? ' data-light style="' + w.light + '"' : "") + ">" + mr(w, "tfIcon", w.icon) + '<button class="tfName" type="button" data-more="' + oe(S(w)) + '" aria-label="' + oe(t.name + " " + w.label.toLowerCase() + ", " + w.value + ". Open") + '"><span class="activityRowName">' + oe(w.label) + '</span><span class="activityRowMeta">' + oe(w.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + Bi(t, n) + '<div class="tfATitle">' + ts(t) + Ys(n) + "</div></div>" + (r ? '<button class="tfABig" type="button" data-more="' + oe(r) + '" aria-label="' + oe(_e(r) + ", " + Et(r) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + oe(d.text) + (d.unit ? '<span class="tfABigUnit">' + oe(d.unit) + "</span>" : "") + "</span>" + (u ? '<span class="tfABigSub">' + oe(u) + "</span>" : "") + "</button>" : "") + (m.length ? '<div class="tfATiles">' + m.join("") + "</div>" : "");
  }
  function po(t) {
    const n = t.id === ve, r = fr(t), d = Zs(t), u = d && ri(d), S = [...r.filter((m) => m.kind === "control"), ...r.filter((m) => m.kind !== "control" && m.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (n ? " active" : "") + '" data-area="' + oe(t.id) + '" tabindex="0" aria-expanded="' + n + '" aria-label="' + oe(t.name) + '"><div class="panelExpanded"' + (n ? "" : " inert") + ">" + ns(t, r, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + Bi(t, r, !0) + '<span class="tfACName">' + oe(t.name) + '</span></div><span class="tfACMain">' + (u ? oe(u.text + (u.unit ? " " + u.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + S.map((m) => '<span class="tfACTile"><span class="tfIcon' + (m.kind === "alert" ? " alert" : "") + '"' + (m.on && m.light ? ' data-light style="' + m.light + '"' : "") + ">" + m.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let uo = [];
  const Pi = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + uo.map(po).join("") + "</section></div>", si = () => [
    { key: "home", name: "Home", ids: at.homeVacuums },
    { key: "security", name: "Security", ids: [...at.security.alarms, ...at.security.locks] },
    ...at.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], li = (t, n, r) => t + " " + (t === 1 ? n : r), Kn = () => (W.favourites ?? ee.favorite_entities ?? []).filter((t) => b[t]);
  function vr() {
    if (!We) {
      const n = Object.entries(Xe).sort((d, u) => u[1] - d[1]).map(([d]) => d), r = at.rooms.flatMap((d) => d.actions);
      We = [.../* @__PURE__ */ new Set([...ue, ...n, ...r.filter((d) => ii(d).on), ...r])];
    }
    const t = Kn();
    return We.filter((n) => b[n] && b[n].state !== "unavailable" && !t.includes(n));
  }
  let Ii = !1;
  function _t() {
    if (!Ii || W.favSeeded || !at.rooms.length) return;
    const t = (r) => Object.keys(b).find((d) => Ai(d) && r(d)), n = [t((r) => r.startsWith("climate.")), t((r) => r.startsWith("cover.") && /curtain/.test(r)), t((r) => r.startsWith("valve.")), at.security.locks[0]];
    W = { ...W, favourites: [.../* @__PURE__ */ new Set([...W.favourites ?? ee.favorite_entities ?? [], ...n.filter(Boolean)])], favSeeded: !0 }, Dn();
  }
  const Hi = () => W.suggest ?? !ee.hide_suggested_entities;
  function $s() {
    const t = new Set(W.favHidden || []), n = Kn().filter((d) => !t.has(d)), r = Hi() ? vr().filter((d) => !t.has(d) && fo(d)) : [];
    return [...n, ...r].slice(0, Rh);
  }
  const as = (t) => {
    const n = Kn().includes(t);
    return '<button class="tfStar" type="button" data-star="' + oe(t) + '" aria-pressed="' + n + '" aria-label="Favourite: ' + oe(_e(t)) + '">' + Ah(n) + "</button>";
  };
  function Ta(t, { area: n = !1, star: r = !1 } = {}) {
    var j;
    const d = t.split(".")[0], u = Fs.includes(d) ? ii(t) : null, S = u ? u.on : ["on", "open", "playing"].includes((j = b[t]) == null ? void 0 : j.state), m = u ? u.button : Mh.includes(d) ? { act: rt(d, "toggle", t), label: "Turn " + _e(t) + (S ? " off" : " on") } : d === "scene" || d === "script" ? { act: rt(d, "turn_on", t), label: "Run " + _e(t) } : null, w = Et(t) + (n && vt.get(t) ? " · " + vt.get(t) : ""), R = (u == null ? void 0 : u.icon) || pn(t);
    return '<div class="activityRow' + (m ? " tfPlug" : "") + (S ? " on" : "") + (r ? " tfPick" : "") + '" data-k="' + oe((n ? "fav:" : "row:") + t) + '" data-tone="' + (d === "light" ? "light" : (u == null ? void 0 : u.tone) || "blue") + '"' + Yt(t) + ">" + (m && !r ? '<button class="tfIcon" type="button" data-act="' + m.act + '" aria-label="' + oe(m.label) + '"' + jt(t, R) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + jt(t, R) + "></div>") + '<button class="tfName" type="button" data-more="' + oe(t) + '" aria-label="' + oe(_e(t) + ", " + w + ". More info") + '"><span class="activityRowName">' + oe(_e(t)) + '</span><span class="activityRowMeta">' + oe(w) + "</span></button>" + (r ? as(t) : "") + "</div>";
  }
  const os = () => {
    var t;
    return b[(t = W.sources) == null ? void 0 : t.weather] ? W.sources.weather : b["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(b).find((n) => n.startsWith("weather."));
  };
  function Ot() {
    var r;
    const t = (d) => Object.keys(b).filter((u) => u.startsWith("binary_sensor.") && d.includes(wt(u).device_class));
    return ((r = se.alert_entities) != null && r.length ? se.alert_entities : [...t(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...t(Ol).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => b[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(b[d.entity].state) }));
  }
  function Fa() {
    const t = Object.keys(Il), n = /* @__PURE__ */ new Set(), r = [];
    return (ee.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!t.includes(d.key) || n.has(d.key)) return;
        n.add(d.key);
      }
      r.push(d);
    }), t.forEach((d) => {
      n.has(d) || r.push({ type: "summary", key: d });
    }), r;
  }
  function ho() {
    var or;
    const t = at.rooms, n = at.security, r = (Pe, bt) => Pe.actions.filter((So) => bt.test(So)), d = (Pe) => t.map((bt) => ({ name: bt.name, ids: Pe(bt) })).filter((bt) => bt.ids.length), u = t.flatMap((Pe) => Pe.lights), S = u.filter((Pe) => {
      var bt;
      return ((bt = b[Pe]) == null ? void 0 : bt.state) === "on";
    }).length, m = t.map((Pe) => Pe.readings.find((bt) => wt(bt).device_class === "temperature")).filter(Boolean).map((Pe) => Number(b[Pe].state)).filter(Number.isFinite), [w, R] = [He(Math.min(...m)), He(Math.max(...m))], j = t.flatMap((Pe) => r(Pe, /^media_player\./)), F = j.filter((Pe) => {
      var bt;
      return ((bt = b[Pe]) == null ? void 0 : bt.state) === "playing";
    }).length, H = Ot(), $ = H.filter((Pe) => Pe.severity === "warning" && Pe.on).length, ge = n.locks.filter((Pe) => {
      var bt;
      return ["unlocked", "jammed", "open"].includes((bt = b[Pe]) == null ? void 0 : bt.state);
    }).length, Ne = n.alarms.filter((Pe) => {
      var bt;
      return ((bt = b[Pe]) == null ? void 0 : bt.state) === "disarmed";
    }).length, ce = $ ? li($, "warning", "warnings") : null, fe = ge ? ge + " unlocked" : Ne ? Ne + " disarmed" : ce ? null : "All secure", ae = Object.keys(b).filter((Pe) => Pe.startsWith("sensor.") && wt(Pe).device_class === "battery").sort((Pe, bt) => Number(b[Pe].state) - Number(b[bt].state)), Ue = [...ae.filter((Pe) => Number(b[Pe].state) < 20), ...at.vacuums.filter((Pe) => wt(Pe).battery_level < 20)], It = t.flatMap((Pe) => Pe.plants.map((bt) => bt.id)).sort((Pe, bt) => {
      var So, qr;
      return (((So = b[bt]) == null ? void 0 : So.state) === "problem") - (((qr = b[Pe]) == null ? void 0 : qr.state) === "problem");
    }), Cn = It.filter((Pe) => {
      var bt;
      return ((bt = b[Pe]) == null ? void 0 : bt.state) === "problem";
    }), Zo = t.flatMap((Pe) => Pe.solar), Gt = Zo.find((Pe) => Pe.endsWith("_power")), Qn = {
      light: u.length && { value: S ? S + " on" : "All off", groups: d((Pe) => Pe.lights) },
      climate: m.length && { value: w === R ? w + "°" : w + " - " + R + "°", groups: d((Pe) => [...Pe.readings.filter((bt) => ["temperature", "humidity"].includes(wt(bt).device_class)), ...r(Pe, /^(climate|humidifier)\./)]) },
      security: (n.alarms.length || n.locks.length) && { value: [ce, fe].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...n.alarms, ...n.locks] }, { name: "Doors and windows", ids: n.openings }].filter((Pe) => Pe.ids.length) },
      media_players: j.length && { value: F ? F + " playing" : "No media playing", groups: d((Pe) => r(Pe, /^media_player\./)) },
      maintenance: (ae.length || It.length) && { value: [Ue.length && li(Ue.length, "low battery", "low batteries"), Cn.length && li(Cn.length, "problem", "problems")].filter(Boolean).join(", ") || "All good", groups: [{ name: "Plants", ids: It }, { name: "Batteries", ids: [...at.vacuums, ...ae] }].filter((Pe) => Pe.ids.length) },
      energy: at.grid && { value: Ut(Number(((or = b[Gt]) == null ? void 0 : or.state) || 0) * 1e3 + Number(b[at.grid].state)) + " now", groups: [{ name: "Energy", ids: [...Zo, at.grid] }] }
    }, Ko = [], la = H.filter((Pe) => Pe.severity !== "warning" && Pe.on);
    return la.length && Ko.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: li(la.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: la.map((Pe) => Pe.entity) }] }), Fa().forEach((Pe) => {
      Pe.type !== "summary" ? Ko.push({ key: "path:" + Pe.path, name: Pe.label || Pe.path, icon: Pe.icon || "mdi:link-variant", colour: "", value: "" }) : !Pe.hidden && Qn[Pe.key] && !(W.hiddenSums || []).includes(Pe.key) && Ko.push({ key: Pe.key, ...Il[Pe.key], ...Qn[Pe.key] });
    }), Ko;
  }
  const Xs = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + oe(t.key) + '" data-k="sum:' + oe(t.key) + '" aria-label="' + oe(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + jt(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + oe(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + oe(t.value) + "</div>" : "") + "</div></div>";
  function di(t) {
    const n = Kn();
    W = { ...W, favourites: n.includes(t) ? n.filter((r) => r !== t) : [...n, t], favHidden: (W.favHidden || []).filter((r) => r !== t) }, Dn(), Kt();
  }
  function Fi(t) {
    document.querySelector("home-assistant") && (Me.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function ci(t, n) {
    if (t.startsWith("path:")) {
      Fi(t.slice(5));
      return;
    }
    if (t === "security") {
      _r("security");
      return;
    }
    Ci("summary:" + t, n);
  }
  async function Oa() {
    const t = (m) => Promise.resolve().then(() => B(m)).catch(() => null), [n, r, d, u] = await Promise.all([
      t({ type: "frontend/get_user_data", key: lc }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), S = (n == null ? void 0 : n.value) || {};
    W = { favourites: S.favourites ?? null, sources: S.sources, hiddenSums: S.hiddenSums, dash: S.dash, named: S.named, favHidden: S.favHidden, suggest: S.suggest, favSeeded: S.favSeeded }, ee = (r == null ? void 0 : r.value) || {}, se = (d == null ? void 0 : d.value) || {}, ue = Array.isArray(u == null ? void 0 : u.entities) ? u.entities : [], We = null, Object.keys(b).length && Kt(), Js(), Ii = !0, _t();
  }
  const La = "HomeCore";
  async function Js() {
    var d, u, S;
    const t = location.pathname.split("/")[1], n = W.named || [];
    if (!((u = (d = i()) == null ? void 0 : d.user) != null && u.is_admin) || !t || n.includes(t)) return;
    const r = () => {
      W = { ...W, named: [...n, t] }, Dn();
    };
    try {
      const m = (S = await B({ type: "lovelace/dashboards/list" })) == null ? void 0 : S.find((j) => j.url_path === t);
      if (!m || m.mode === "yaml") return;
      if (m.title === La) {
        r();
        return;
      }
      const w = await B({ type: "lovelace/config", url_path: t }), R = ((w == null ? void 0 : w.views) || []).flatMap((j) => [...j.cards || [], ...(j.sections || []).flatMap((F) => F.cards || [])]);
      if (!R.length || !R.every((j) => (j == null ? void 0 : j.type) === "custom:move-assistant-card" && j.layout === "test-focus")) return;
      await B({ type: "lovelace/dashboards/update", dashboard_id: m.id, title: La }), r();
    } catch {
    }
  }
  let ra = null, Oi = 0, $n = !1;
  const br = (t) => {
    const n = t.split(".")[0];
    return Dh.includes(n) && (n !== "binary_sensor" || Ol.includes(wt(t).device_class));
  };
  async function Qs() {
    var t;
    if (!($n || Date.now() - Oi < 30 * 1e3)) {
      $n = !0, Oi = Date.now();
      try {
        const n = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(br), r = n.length ? await B({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: n }) : null;
        ra = Array.isArray(r) ? r.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        ra = null;
      }
      $n = !1, Kt();
    }
  }
  function wr() {
    const t = /* @__PURE__ */ new Map(), n = (d) => {
      if (!b[d.entity_id] || !br(d.entity_id) || !fo(d.entity_id) || ["unavailable", "unknown"].includes(d.state)) return;
      const u = t.get(d.entity_id);
      (!u || d.when > u.when + 1) && t.set(d.entity_id, d);
    };
    (ra || []).forEach(n);
    const r = ra ? Oi / 1e3 - 5 : 0;
    return Object.keys(b).forEach((d) => {
      var m;
      const u = b[d], S = u.last_changed ? Date.parse(u.last_changed) / 1e3 : 0;
      S > r && n({ entity_id: d, state: u.state, when: S, context_user_id: (m = u.context) == null ? void 0 : m.user_id });
    }), [...t.values()].sort((d, u) => u.when - d.when).slice(0, Nh);
  }
  function xr(t) {
    var d;
    const n = t.context_user_id && Object.keys(b).find((u) => u.startsWith("person.") && wt(u).user_id === t.context_user_id);
    if (n) return _e(n);
    const r = (d = i()) == null ? void 0 : d.user;
    return r && t.context_user_id === r.id ? r.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function is(t) {
    const n = t.entity_id.split(".")[0], r = String(t.state);
    return n === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[r] || mt(r).toLowerCase() : n === "cover" || n === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[r] || mt(r).toLowerCase() : n === "binary_sensor" ? r === "on" ? "opened" : "closed" : n === "climate" ? r === "off" ? "turned off" : "set to " + mt(r).toLowerCase() : n === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[r] || mt(r).toLowerCase() : n === "alarm_control_panel" ? (mc[r] || mt(r)).toLowerCase() : n === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[r] || mt(r).toLowerCase() : r === "on" ? "turned on" : r === "off" ? "turned off" : mt(r).toLowerCase();
  }
  function el(t) {
    const n = t.entity_id, r = _e(n) + " " + is(t), d = [xr(t), Nt(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow"><div class="tfIcon" aria-hidden="true"' + jt(n, pn(n)) + '></div><button class="tfName" type="button" data-more="' + oe(n) + '" aria-label="' + oe(r + ", " + d + ". More info") + '"><span class="activityRowName">' + oe(r) + '</span><span class="activityRowMeta">' + oe(d) + "</span></button></div>";
  }
  let qa = null, yr = 0;
  const pi = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function tl() {
    var n;
    if (Date.now() - yr < 5 * 60 * 1e3) return;
    yr = Date.now();
    const t = [];
    try {
      const r = ((n = await B({ type: "energy/get_prefs" })) == null ? void 0 : n.energy_sources) || [], d = (u) => r.filter((S) => S.type === u).flatMap((S) => u === "grid" ? (S.flow_from || []).map((m) => m.stat_energy_from) : [S.stat_energy_from]).filter(Boolean);
      for (const [u, S, m] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!m.length) continue;
        const w = await Promise.all(m.map((R) => Promise.resolve(B({ type: "recorder/statistic_during_period", statistic_id: R, calendar: { period: "day" }, types: ["change"] })).then((j) => Number(j == null ? void 0 : j.change) || 0, () => 0)));
        t.push({ key: u, name: S, id: m[0], value: w.reduce((R, j) => R + j, 0), unit: wt(m[0]).unit_of_measurement || (u === "gas" || u === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    qa = t, Kt();
  }
  let fa = null;
  function Wa() {
    var S;
    const t = qa != null && qa.length ? qa : pi.map(([m, w, R, j]) => {
      const F = "sensor.made_up_energy_" + m;
      return b[F] = { entity_id: F, state: String(R), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: w + " today", unit_of_measurement: j, state_class: "total_increasing" } }, { key: m, name: w, id: F, value: R, unit: j };
    });
    Se.clear(), t.some((m) => m.id === fa) || (fa = t[0].id);
    const n = t.map((m) => {
      const w = Number(m.value).toLocaleString(void 0, { maximumFractionDigits: m.value < 10 ? 2 : 1 }) + " " + m.unit, R = Bh[m.key], j = m.id === fa;
      return Se.set(m.id, { name: m.name, text: w, icon: R }), '<div class="activityRow tap' + (j ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + oe(m.id) + '" aria-pressed="' + j + '" aria-label="' + oe(m.name + ", " + w) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + jt("", R, m.name) + '></div><div><div class="activityRowName">' + oe(m.name) + '</div><div class="activityRowMeta">' + oe(w) + "</div></div></div>";
    }), r = t.find((m) => m.id === fa), d = (((S = Jt().opts.energy) == null ? void 0 : S.graph) || "above") === "below", u = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + oe(r.id) + '" role="img" aria-label="' + oe(r.name) + ', last 24 hours"></svg></div>';
    return q("dash:energy", 0, "Energy today", n, u, null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function qi(t) {
    const n = A.querySelector(".tfDash-energy"), r = n == null ? void 0 : n.querySelector(".tfDashGraph svg");
    !r || t === fa || (fa = t, n.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const u = d.dataset.energyPick === t;
      d.classList.toggle("picked", u), d.setAttribute("aria-pressed", String(u));
    }), r.dataset.graph = t, r.dataset.drawn = "", on.set("dash:energy", Wa()), fs(!0));
  }
  function Wi(t) {
    var u;
    if ((u = window.matchMedia) != null && u.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [n, r] = t.querySelectorAll("path");
    if (!(r != null && r.getTotalLength)) return;
    const d = r.getTotalLength();
    r.animate([{ strokeDasharray: d, strokeDashoffset: d }, { strokeDasharray: d, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), n == null || n.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let za = null, ui = 0;
  const fo = (t) => !t.startsWith("light.") || Ph.includes((vt.get(t) || "").toLowerCase()), zi = () => Math.max(2, Ga((A == null ? void 0 : A.clientWidth) || 0).n);
  function ma(t) {
    if (!za) {
      const r = (d) => {
        var u;
        return (((u = b[d]) == null ? void 0 : u.state) === "on" ? 1e6 : 0) + (Xe[d] || 0);
      };
      za = {
        lights: at.rooms.flatMap((d) => d.lights).filter((d) => {
          var u;
          return fo(d) && ((u = b[d]) == null ? void 0 : u.state) !== "unavailable";
        }).sort((d, u) => r(u) - r(d) || _e(d).localeCompare(_e(u))),
        climates: at.rooms.flatMap((d) => d.actions.filter((u) => u.startsWith("climate.")))
      };
    }
    const n = za.climates.filter((r) => b[r]).slice(0, t > 3 ? 2 : 1);
    return [...za.lights.filter((r) => b[r]).slice(0, Math.max(0, t - n.length)), ...n];
  }
  const mo = (t, n, r, d) => (u) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + n + '" aria-label="' + r + '">' + (d ? '<div class="activityHeader"><div class="activityTitle">' + r + "</div></div>" : "") + '<div class="activityRows">' + u + "</div></section>";
  function nl(t, n) {
    var S, m;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + oe(((m = (S = i()) == null ? void 0 : S.config) == null ? void 0 : m.location_name) || "Home") + "</h1>" }), n.length && t.push({ key: "sums", wrap: (w) => '<div class="tfDashBarRow" data-tf data-k="sums">' + mo("tfDash-bar", "sums-bar", "Summaries", !1)(w).replace(" data-tf", "") + "</div>", tiles: n.map((w) => ({ key: "sum:" + w.key, html: Xs(w) })) }), uo.length && t.push({ key: "areas", html: Pi(0) });
    const r = $s();
    r.length && t.push({ key: "favs", wrap: mo("tfDash-favs", "favs", "Favourites", !0), tiles: r.map((w) => ({ key: "fav:" + w, html: Ta(w, { area: !0 }) })) });
    const d = wr();
    t.push({ key: "dash:act", html: q("dash:act", 0, "Activity", d.length ? d.map(el) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: Wa() });
    const u = zi();
    return ui = u, t.push({
      key: "dash:tiles",
      wrap: (w) => '<div class="tfDashTiles" data-tf data-k="dash:tiles">' + w + "</div>",
      tiles: ma(u >= 3 ? u : u * 2).map((w) => ({ key: w, html: Nn(w, !1, w.startsWith("climate.") ? ["step"] : ["bright"]) }))
    }), Qs(), tl(), t;
  }
  const Vi = 252, Wt = 16, hi = 230, go = 60, Aa = go + Wt, fi = 5, kr = 3, Mr = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average" }, ji = ["wx", "favs", "act", "energy", "avg"], rs = { wx: fi, areas: fi, favs: fi, act: fi, energy: 4, avg: 4 }, al = 3, yn = 94, Va = (t) => {
    var n;
    return !!((n = Jt().opts[t]) != null && n.tall);
  }, Xn = (t) => Mr[t] || _e(t), ol = 409, ss = 128;
  let Tn = !1, Tt = null, Bn = null, Gi = !1, Ea = /* @__PURE__ */ new Map(), mi = 0, fn = 0;
  const ja = ["title", "sums"], Ga = (t) => {
    let n = Math.floor((t + Wt) / (Vi + Wt)), r = Vi;
    return n < 4 && t >= 4 * hi + 3 * Wt && (n = 4, r = Math.floor((t - 3 * Wt) / 4)), { n: Math.max(1, n), w: r };
  }, Jt = () => ({ cells: {}, spans: {}, hidden: [], opts: {}, ...W.dash || {} });
  function Io(t) {
    W = { ...W, dash: t }, Dn();
  }
  function gi() {
    const t = (n) => A.querySelector(n);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", rn.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", rn.avg, 2],
      ...[...A.querySelectorAll(".tfDashTiles > [data-k]")].map((n) => [n.dataset.k, n, 1, !0])
    ].filter(([, n]) => n == null ? void 0 : n.isConnected).map(([n, r, d, u = !1]) => ({ key: n, el: r, span: d, tile: u }));
  }
  const Cr = (t, n, r) => t.span === "full" ? n : t.span === "areas" ? Math.min(n, Math.ceil((ol + Math.max(0, uo.length - 1) * (ss + Wt) + Wt) / (r + Wt))) : Math.min(n, Jt().spans[t.key] ?? t.span), Ua = (t) => rs[t.key] ?? (t.el.classList.contains("tfDac") ? Va(t.key) ? fi : al : null);
  function ls(t, n, r = null) {
    const d = Jt().cells, u = t.every((w) => !d[w.key] || d[w.key].col + w.cols <= n), S = (w) => d[w.key] || { row: 1e9, col: 0 }, m = () => {
      const w = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Map(), j = (ce, fe, ae, Ue) => {
        for (let It = fe; It < fe + Ue; It++) for (let Cn = ce; Cn < ce + ae; Cn++) if (w.has(Cn + "," + It)) return !1;
        return !0;
      }, F = (ce, fe, ae) => {
        for (let Ue = ae; Ue < ae + ce.rows; Ue++) for (let It = fe; It < fe + ce.cols; It++) w.add(It + "," + Ue);
        R.set(ce.key, { col: fe, row: ae, cols: ce.cols, rows: ce.rows });
      }, H = (ce, fe, ae) => {
        for (fe = Math.max(0, Math.min(n - ce.cols, fe)), ae = Math.max(0, ae); !j(fe, ae, ce.cols, ce.rows); ) ae++;
        F(ce, fe, ae);
      }, $ = (ce) => {
        for (let fe = 0; ; fe++) for (let ae = 0; ae <= n - ce.cols; ae++) if (j(ae, fe, ce.cols, ce.rows)) {
          F(ce, ae, fe);
          return;
        }
      };
      r && H(r, Tt.col, Tt.row);
      const ge = t.filter((ce) => ce !== r), Ne = (ce, fe) => S(ce).row - S(fe).row || S(ce).col - S(fe).col;
      return u ? (ge.filter((ce) => d[ce.key]).sort(Ne).forEach((ce) => H(ce, d[ce.key].col, d[ce.key].row)), ge.filter((ce) => !d[ce.key]).forEach($), R) : ([...ge].sort(Ne).forEach($), R);
    };
    for (let w = 0; ; w++) {
      const R = m();
      if (w === 3) return R;
      const j = t.filter((H) => H.tile && !Va(H.key)).map((H) => ({ it: H, p: R.get(H.key) })).sort((H, $) => H.p.row - $.p.row || H.p.col - $.p.col);
      let F = !1;
      for (let H = 0, $; H < j.length; H = $) {
        for ($ = H + 1; $ < j.length && j[$].p.row === j[H].p.row && j[$].p.col === j[$ - 1].p.col + 1; $++) ;
        const ge = j.slice(H, $), Ne = Math.max(...ge.map((ce) => ce.it.rows));
        ge.forEach((ce) => {
          ce.it.rows < Ne && (ce.it.rows = Ne, F = !0);
        });
      }
      if (!F) return R;
    }
  }
  function Sr() {
    const t = Jt(), n = new Set(t.hidden), r = gi().filter((m) => !ja.includes(m.key));
    let d = Ea;
    if (!d.size) {
      const m = t.pegs || 4, w = r.filter((R) => !n.has(R.key));
      w.forEach((R) => {
        R.cols = Cr(R, m, Vi), R.rows = Ua(R) ?? 2;
      }), d = ls(w, m);
    }
    const u = (m) => !n.has(m.key) && d.get(m.key) || { row: 1e9, col: 0 };
    r.sort((m, w) => u(m).row - u(w).row || u(m).col - u(w).col);
    const S = (t.phone || []).map((m) => r.find((w) => w.key === m && !n.has(m))).filter(Boolean);
    return [...S, ...r.filter((m) => !S.includes(m))];
  }
  const Ui = () => Sr().forEach((t, n) => t.el.style.setProperty("--o", String(3 + n))), Ya = (t, n) => Io({ ...t, cells: n, pegs: Ga(A.clientWidth).n });
  function ln() {
    var fe;
    if (!x || !A) return;
    const t = A.clientWidth, { n, w: r } = Ga(t), d = f.classList.contains("tfDash") && n >= 2;
    f.classList.toggle("tfBoard", d), f.classList.toggle("tfEditing", d && Tn);
    const u = p("dashEditNav");
    u && (u.hidden = !d, u.classList.toggle("active", Tn), u.setAttribute("aria-pressed", String(Tn)), u.setAttribute("aria-label", Tn ? "Done editing" : "Edit the dashboard"), u.title = Tn ? "Done" : "Edit", u.innerHTML = Tn ? Lh : fc);
    const S = d ? gi() : [];
    if (!d) {
      A.style.height = "", A.querySelectorAll(".tfBoardItem").forEach((ae) => {
        ae.classList.remove("tfBoardItem", "tfBoardHidden"), ae.style.left = ae.style.top = ae.style.width = ae.style.height = "";
      }), (fe = A.querySelector(".tfDash-act > .activityRows")) == null || fe.style.removeProperty("max-height"), bo(!1), f.classList.contains("tfDash") && Ui(), mn();
      return;
    }
    A.style.setProperty("--peg-w", r + "px");
    const m = new Set(Jt().hidden), w = r + Wt;
    Tt != null && Tt.fromTray && m.delete(Tt.key), S.forEach((ae) => ae.el.classList.toggle("tfBoardHidden", m.has(ae.key)));
    const R = S.filter((ae) => !m.has(ae.key) && getComputedStyle(ae.el).display !== "none");
    let j = 0;
    R.filter((ae) => ja.includes(ae.key)).forEach((ae) => {
      ae.el.classList.add("tfBoardItem"), Object.assign(ae.el.style, { width: t + "px", height: "", left: "0px", top: j + "px" });
      const Ue = ae.key === "sums" && ae.el.querySelector(".tfDash-bar"), It = Ue ? Ue.querySelectorAll(".activityRow").length : 0;
      Ue && (Ue.style.maxWidth = "none");
      for (let Cn = 1; Ue && Cn <= It && (Ue.style.setProperty("--bar-cols", String(Math.ceil(It / Cn))), !(Ue.offsetWidth <= t)); Cn++)
        ;
      Ue && (Ue.style.maxWidth = ""), j += ae.el.offsetHeight + Wt;
    }), fn = j;
    const F = R.filter((ae) => !ja.includes(ae.key));
    F.forEach((ae) => {
      ae.cols = Cr(ae, n, r), ae.el.classList.add("tfBoardItem"), ae.el.style.width = (ae.cols === n ? t : ae.cols * r + (ae.cols - 1) * Wt) + "px", ae.el.style.height = "", ae.rows = Ua(ae) ?? Math.max(1, Math.ceil((ae.el.offsetHeight + Wt - 6) / Aa));
    });
    const H = Tt && F.find((ae) => ae.key === Tt.key), $ = ls(F, n, H);
    $.forEach((ae) => Object.assign(ae, { x: ae.cols === n ? 0 : ae.col * w, y: fn + ae.row * Aa, w: ae.cols === n ? t : ae.cols * r + (ae.cols - 1) * Wt, h: ae.rows * Aa - Wt })), F.forEach((ae) => {
      const Ue = $.get(ae.key);
      ae.el.style.height = Ue.h + "px", ae.el.classList.contains("tfDac") && ae.el.style.setProperty("--tf-dac-pad", Ue.h - yn + "px"), !(ae === H && !Tt.fromTray) && (ae.el.style.left = Ue.x + "px", ae.el.style.top = Ue.y + "px");
    }), Ea = $;
    const ge = $.get("act"), Ne = ge && A.querySelector(".tfDash-act > .activityRows");
    Ne && (Ne.style.maxHeight = Math.max(go, Math.floor((ge.h - Ne.offsetTop - 10) / go) * go) + "px"), mi = Math.max(0, ...[...$.values()].map((ae) => ae.row + ae.rows));
    let ce = fn + mi * Aa - Wt;
    ce = bo(Tn, F, $, ce, n, r), A.style.height = ce + "px", requestAnimationFrame(() => f.classList.add("tfBoardReady")), S.forEach((ae) => vo.observe(ae.el)), fs(), mn();
  }
  const Jn = () => {
    Gi || (Gi = !0, requestAnimationFrame(() => {
      Gi = !1, ln();
    }));
  }, vo = new ResizeObserver(() => {
    Tt || Jn();
  });
  function bo(t, n = [], r = /* @__PURE__ */ new Map(), d = 0, u = 1, S = Vi) {
    A.querySelectorAll(".tfEditChips").forEach((F) => {
      (!t || !F.closest(".tfBoardItem")) && F.remove();
    }), A.querySelectorAll(".tfFavHides").forEach((F) => F.remove()), A.querySelectorAll(".tfBoardItem").forEach((F) => [...F.children].forEach((H) => {
      H.classList.contains("tfEditChips") || H.toggleAttribute("inert", t);
    }));
    let m = A.querySelector(".tfBoardCells"), w = A.querySelector(".tfBoardLand");
    if (!t)
      return m == null || m.remove(), w == null || w.remove(), kn(), d;
    const R = mi + kr;
    if (m || (m = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), m.setAttribute("aria-hidden", "true"), A.prepend(m)), m.style.top = fn + "px", m.dataset.size !== u + "x" + R + "x" + S && (m.dataset.size = u + "x" + R + "x" + S, m.style.gridTemplateColumns = "repeat(" + u + "," + S + "px)", m.innerHTML = "<i></i>".repeat(u * R)), d = Math.max(d, fn + R * Aa - Wt), n.forEach((F) => {
      const H = F.el;
      !H || H.querySelector(":scope > .tfEditChips") || H.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Hl + '</span><button class="tfEditChip" type="button" data-board-more="' + oe(F.key) + '" aria-label="' + oe(Xn(F.key)) + ' options" aria-haspopup="menu">' + Sh + "</button></div>");
    }), Tt && r.has(Tt.key)) {
      w || (w = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), A.appendChild(w));
      const F = r.get(Tt.key);
      Object.assign(w.style, { left: F.x + "px", top: F.y + "px", width: F.w + "px", height: F.h + "px" });
    } else w == null || w.remove();
    const j = A.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (j) {
      const F = j.getBoundingClientRect();
      j.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...j.querySelectorAll('[data-k^="fav:"]')].map((H) => {
        const $ = H.getBoundingClientRect(), ge = H.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + oe(ge) + '" aria-label="Hide ' + oe(_e(ge)) + ' from the dashboard" style="left:' + Math.round($.right - F.left - 42) + "px;top:" + Math.round($.top - F.top + ($.height - 32) / 2) + 'px">' + pc + "</button>";
      }).join("") + "</div>");
    }
    return d;
  }
  function wo(t) {
    Tn = t, t || (Tt = null, An = !1, kn()), ln();
  }
  function Ho(t, n) {
    var H, $;
    kn();
    const r = Ea.get(t), { n: d } = Ga(A.clientWidth), u = Jt(), S = u.spans[t] ?? 2;
    if (!r) return;
    const m = r.cols >= d, w = (ge, Ne, ce) => '<button type="button" role="menuitem" data-board-act="' + ge + '"' + (ce ? " disabled" : "") + ">" + Ne + "</button>", R = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    R.setAttribute("role", "menu"), R.setAttribute("aria-label", Xn(t) + " options");
    const j = A.querySelector('.tfDashTiles > .tfDac[data-k="' + CSS.escape(t) + '"]');
    R.innerHTML = (ji.includes(t) ? w("size", S === 1 ? "Card size" : "Tile size") : "") + (j ? w("tall", Va(t) ? "Make shorter" : "Make taller") : "") + (t === "energy" ? w("graph", (((H = u.opts.energy) == null ? void 0 : H.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + w("left", "Move left", m || r.col === 0) + w("right", "Move right", m || r.col + r.cols >= d) + w("up", "Move up", r.row <= 0) + w("down", "Move down") + w("hide", "Hide"), A.appendChild(R);
    const F = Math.min(r.x + r.w - R.offsetWidth, A.clientWidth - R.offsetWidth);
    Object.assign(R.style, { left: Math.max(0, F) + "px", top: r.y + 28 + "px" }), Bn = { key: t, menu: R, opener: n }, ($ = R.querySelector("button:not([disabled])")) == null || $.focus();
  }
  function kn(t) {
    if (!Bn) return;
    const { menu: n, opener: r } = Bn;
    Bn = null, n.remove(), t && (r == null || r.focus());
  }
  const vi = () => Object.fromEntries([...Ea].map(([t, n]) => [t, { col: n.col, row: n.row }]));
  function il(t, n) {
    var S, m;
    const r = Jt(), d = vi(), u = d[t] || { col: 0, row: 0 };
    n === "size" && (r.spans = { ...r.spans, [t]: (r.spans[t] ?? 2) === 1 ? 2 : 1 }), n === "tall" && (r.opts = { ...r.opts, [t]: { ...r.opts[t] || {}, tall: !Va(t) } }), n === "graph" && (r.opts = { ...r.opts, energy: { ...r.opts.energy || {}, graph: (((S = r.opts.energy) == null ? void 0 : S.graph) || "above") === "above" ? "below" : "above" } }), n === "left" && (d[t] = { ...u, col: u.col - 1 }), n === "right" && (d[t] = { ...u, col: u.col + 1 }), n === "up" && (d[t] = { ...u, row: u.row - 1 }), n === "down" && (d[t] = { ...u, row: u.row + 1 }), n === "hide" && (r.hidden = [.../* @__PURE__ */ new Set([...r.hidden, t])]), ["left", "right", "up", "down"].includes(n) && (Tt = { key: t, col: d[t].col, row: d[t].row }), Ya(r, d), Tt && (ln(), Tt = null, Ya(Jt(), vi())), kn(), n === "graph" && (on.delete("dash:energy"), Kt()), ln(), n !== "hide" && ((m = A.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || m.focus());
  }
  function Fo(t) {
    const n = Jt();
    Io({ ...n, hidden: n.hidden.filter((r) => r !== t) }), ln();
  }
  const Za = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Pt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Pt.setAttribute("aria-label", "Edit the dashboard"), Pt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', f.appendChild(Pt);
  let Ln = !1, An = !1, Mn = null, ga = !1;
  const Yi = {}, bi = (t, n) => {
    if (Yi[t] === n) return;
    Yi[t] = n;
    const r = Pt.querySelector('[data-tray="' + t + '"]');
    r.innerHTML = n, xn(r);
  }, wi = (t, n) => '<span class="tfTrayName"><span class="activityRowName">' + oe(_e(t)) + '</span><span class="activityRowMeta">' + oe(n) + "</span></span>", xi = (t, n, r) => '<li class="tfTrayFav' + (n ? " off" : "") + '" data-tray-fav="' + oe(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + Hl + '</span><span class="tfIcon"' + jt(t, pn(t)) + "></span>" + wi(t, n ? "Hidden" + (vt.get(t) ? " · " + vt.get(t) : "") : vt.get(t) || Et(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + oe(t) + '" aria-pressed="' + !n + '" aria-label="' + (n ? "Show " : "Hide ") + oe(_e(t)) + ' on the dashboard">' + (n ? pc : Th) + "</button>" + (r ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + oe(t) + '" aria-label="Remove ' + oe(_e(t)) + ' from favourites">' + uc + "</button>" : "<span></span>") + "</li>";
  function _a(t) {
    const n = new Set(Kn()), r = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(b).filter((u) => Za.test(u) && !n.has(u) && b[u].state !== "unavailable").filter((u) => {
      const S = (_e(u) + " " + (vt.get(u) || "") + " " + u).toLowerCase();
      return r.every((m) => S.includes(m));
    }).sort((u, S) => (vt.get(u) || "~").localeCompare(vt.get(S) || "~") || _e(u).localeCompare(_e(S))).slice(0, 40).map((u) => '<li><button class="tfTrayPickItem" type="button" data-fav-pick="' + oe(u) + '"><span class="tfIcon"' + jt(u, pn(u)) + "></span>" + wi(u, vt.get(u) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function mn() {
    const t = Tn && f.classList.contains("tfBoard");
    if (Pt.classList.toggle("open", t), Pt.classList.toggle("tucked", t && Ln), Pt.toggleAttribute("inert", !t), t || (ga = !1), Ki(), !t) return;
    const n = Pt.querySelector("[data-tray-tuck]");
    n.innerHTML = Ln ? nc : hc, n.setAttribute("aria-expanded", String(!Ln)), n.setAttribute("aria-label", Ln ? "Show the edit tray" : "Tuck the edit tray away");
    const r = Jt().hidden.filter((m) => gi().some((w) => w.key === m));
    bi("cards", '<div class="sectionLabel">Hidden cards</div>' + (r.length ? '<div class="tfTrayCards">' + r.map((m) => '<button class="tfTrayCard" type="button" data-tray-card="' + oe(m) + '" aria-label="' + oe(Xn(m)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + Hl + "</span>" + oe(Xn(m)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide wait here.</p>')), bi("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (Jt().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + ga + '">' + (ga ? "Hide the phone" : "Show the phone") + "</button>");
    const d = new Set(W.favHidden || []), u = Kn(), S = [...u, ...[...d].filter((m) => !u.includes(m) && b[m])];
    bi("favs", S.map((m) => xi(m, d.has(m), u.includes(m))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Pt.querySelector(".tfTrayPick").hidden = !An, Pt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(An)), An && bi("pick", _a(Pt.querySelector("[data-fav-search]").value)), bi("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (Hi() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Hi() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Ka = (t) => {
    W = { ...W, ...t }, Dn(), Kt(), mn();
  };
  function Tr(t, n) {
    const r = new Set(W.favHidden || []);
    n ? r.delete(t) : r.add(t), Ka({ favHidden: [...r] });
  }
  const Oo = (t) => Ka({ favourites: Kn().filter((n) => n !== t), favHidden: (W.favHidden || []).filter((n) => n !== t) }), Lr = (t) => Ka({ favourites: [...Kn().filter((n) => n !== t), t], favHidden: (W.favHidden || []).filter((n) => n !== t) });
  Pt.addEventListener("click", (t) => {
    var r;
    const n = t.target.closest("button");
    n && (n.hasAttribute("data-tray-done") ? wo(!1) : n.hasAttribute("data-tray-tuck") ? (Ln = !Ln, mn()) : n.hasAttribute("data-phone-toggle") ? (ga = !ga, mn(), ga && ((r = En.querySelector("[data-phone-key]")) == null || r.focus({ preventScroll: !0 }))) : n.dataset.trayCard ? t.detail === 0 && (Fo(n.dataset.trayCard), mn()) : n.dataset.favEye ? Tr(n.dataset.favEye, n.getAttribute("aria-pressed") !== "true") : n.dataset.favRemove ? Oo(n.dataset.favRemove) : n.hasAttribute("data-fav-add") ? (An = !An, mn(), An && Pt.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : n.dataset.favPick ? Lr(n.dataset.favPick) : n.hasAttribute("data-fav-suggest") && Ka({ suggest: !Hi() }));
  }), Pt.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search]") && mn();
  }), Pt.addEventListener("keydown", (t) => {
    t.key !== "Escape" || !An || (t.stopPropagation(), An = !1, mn(), Pt.querySelector("[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function ds(t, n, r, d) {
    t.preventDefault();
    const u = t.clientX, S = t.clientY;
    let m = null, w = 0;
    const R = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), j = (H) => {
      if (!m) {
        if (Math.hypot(H.clientX - u, H.clientY - S) < 4) return;
        m = n.cloneNode(!0), m.classList.add("tfTrayGhost"), m.style.width = n.offsetWidth + "px", f.appendChild(m);
      }
      m.style.transform = "translate(" + (H.clientX - 24) + "px," + (H.clientY - 24) + "px)";
      const $ = !Ln && H.clientX >= Pt.getBoundingClientRect().left;
      if (r === "card") {
        const ce = A.getBoundingClientRect(), { w: fe } = Ga(A.clientWidth);
        Tt = !$ && H.clientX >= ce.left && H.clientX <= ce.right && H.clientY >= ce.top + fn ? { key: d, col: Math.max(0, Math.floor((H.clientX - ce.left) / (fe + Wt))), row: Math.max(0, Math.floor((H.clientY - ce.top - fn) / Aa)), fromTray: !0 } : null, w || (w = requestAnimationFrame(() => {
          w = 0, ln();
        }));
        return;
      }
      const ge = A.querySelector(".tfDash-favs"), Ne = ge == null ? void 0 : ge.getBoundingClientRect();
      if (Mn = null, Ne && !$ && H.clientX >= Ne.left && H.clientX <= Ne.right && H.clientY >= Ne.top && H.clientY <= Ne.bottom) {
        let ce = 1 / 0;
        ge.querySelectorAll('[data-k^="fav:"]').forEach((fe, ae) => {
          const Ue = fe.getBoundingClientRect(), It = Math.hypot(H.clientX - (Ue.left + Ue.width / 2), H.clientY - (Ue.top + Ue.height / 2));
          It < ce && (ce = It, Mn = { i: ae, r: Ue, after: H.clientX > Ue.left + Ue.width / 2 });
        }), Mn || (Mn = { i: 0, r: null, after: !1 });
      }
      Mn != null && Mn.r ? (R.isConnected || f.appendChild(R), Object.assign(R.style, { left: (Mn.after ? Mn.r.right : Mn.r.left) - 2 + "px", top: Mn.r.top + 8 + "px", height: Mn.r.height - 16 + "px" })) : R.remove();
    }, F = () => {
      if (window.removeEventListener("pointermove", j), window.removeEventListener("pointerup", F), window.removeEventListener("pointercancel", F), cancelAnimationFrame(w), m == null || m.remove(), R.remove(), r === "card") {
        if (!m) Fo(d);
        else if (Tt != null && Tt.fromTray) {
          ln();
          const ce = Jt(), fe = vi();
          Tt = null, Ya({ ...ce, hidden: ce.hidden.filter((ae) => ae !== d) }, fe);
        }
        Tt = null, ln(), Kt(), mn();
        return;
      }
      if (!Mn) return;
      const H = new Set(W.favHidden || []);
      H.delete(d);
      const $ = Kn().filter((ce) => ce !== d), ge = $.filter((ce) => !H.has(ce)), Ne = ge[Math.min(Mn.i + (Mn.after ? 1 : 0), ge.length)];
      $.splice(Ne ? $.indexOf(Ne) : $.length, 0, d), Mn = null, Ka({ favourites: $, favHidden: [...H] });
    };
    window.addEventListener("pointermove", j), window.addEventListener("pointerup", F), window.addEventListener("pointercancel", F);
  }
  const cs = { sums: 201, wx: 286, favs: 363, areas: 323, act: 363, energy: 301, avg: 182 }, ps = 140, Zi = 252, Pn = 0.8, In = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line" }, En = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  En.setAttribute("aria-label", "Phone order"), En.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + uc + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', f.appendChild(En);
  let Ar = "";
  function Ki() {
    var w;
    const t = ga && Tn && f.classList.contains("tfBoard") && !Ln;
    if (En.classList.toggle("open", t), En.toggleAttribute("inert", !t), !t) return;
    const n = Sr().filter((R) => !Jt().hidden.includes(R.key)), r = n.length, d = (R) => Math.round(R * Pn * 10) / 10 + "px", u = (R, j) => {
      const F = R.el.classList.contains("tfDac"), H = R.tile ? F ? Zi : ps : cs[R.key] || ps;
      return '<button class="tfPhoneBlock' + (R.tile ? " tile" : "") + '" type="button" data-phone-key="' + oe(R.key) + '" style="min-height:' + d(H) + '" aria-label="' + oe(Xn(R.key) + ", " + (j + 1) + " of " + r + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (R.tile ? jt(R.key, pn(R.key)) : jt(R.key, In[R.key])) + '></span><span class="tfPhoneName">' + oe(Xn(R.key)) + "</span></button>";
    }, S = '<div class="tfPhoneTitle">' + oe(((w = A.querySelector(".tfDashTitle")) == null ? void 0 : w.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + d(cs.sums) + '"><span class="tfPhoneName">' + oe(Xn("sums")) + "</span></div>" + n.map(u).join("");
    if (En.querySelector('[data-phone="note"]').innerHTML = Jt().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", S === Ar) return;
    Ar = S;
    const m = En.querySelector('[data-phone="list"]');
    m.innerHTML = S, xn(m);
  }
  function $i(t, n) {
    var r;
    Io({ ...Jt(), phone: t }), mn(), n && ((r = En.querySelector('[data-phone-key="' + CSS.escape(n) + '"]')) == null || r.focus({ preventScroll: !0 }));
  }
  const qo = () => [...En.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function us(t, n) {
    t.preventDefault();
    const r = n.parentElement, d = En.querySelector(".tfPhoneScreen"), u = qo().join();
    n.classList.add("moving");
    const S = (w) => {
      const R = d.getBoundingClientRect();
      w.clientY > R.bottom - 40 ? d.scrollTop += 12 : w.clientY < R.top + 40 && (d.scrollTop -= 12);
      const j = [...r.querySelectorAll("[data-phone-key]")].find(($) => {
        const ge = $.getBoundingClientRect();
        return $ !== n && w.clientX >= ge.left && w.clientX <= ge.right && w.clientY >= ge.top && w.clientY <= ge.bottom;
      });
      if (!j) return;
      const F = j.getBoundingClientRect(), H = j.classList.contains("tile") ? w.clientX < F.left + F.width / 2 : w.clientY < F.top + F.height / 2;
      r.insertBefore(n, H ? j : j.nextSibling);
    }, m = () => {
      window.removeEventListener("pointermove", S), window.removeEventListener("pointerup", m), window.removeEventListener("pointercancel", m), n.classList.remove("moving");
      const w = qo();
      Ar = "", w.join() !== u ? $i(w) : Ki();
    };
    window.addEventListener("pointermove", S), window.addEventListener("pointerup", m), window.addEventListener("pointercancel", m);
  }
  En.addEventListener("pointerdown", (t) => {
    const n = t.target.closest("[data-phone-key]");
    n && t.button <= 0 && us(t, n);
  }), En.addEventListener("click", (t) => {
    var r;
    const n = t.target.closest("button");
    if (n != null && n.hasAttribute("data-phone-close"))
      ga = !1, mn(), (r = Pt.querySelector("[data-phone-toggle]")) == null || r.focus({ preventScroll: !0 });
    else if (n != null && n.hasAttribute("data-phone-reset")) {
      const { phone: d, ...u } = Jt();
      Io(u), mn();
    }
  }), En.addEventListener("keydown", (t) => {
    var m, w, R, j;
    if (t.key === "Escape") {
      t.stopPropagation(), ga = !1, mn(), (m = Pt.querySelector("[data-phone-toggle]")) == null || m.focus({ preventScroll: !0 });
      return;
    }
    const n = (j = (R = (w = t.target).closest) == null ? void 0 : R.call(w, "[data-phone-key]")) == null ? void 0 : j.dataset.phoneKey, r = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!n || !r) return;
    t.preventDefault();
    const d = qo(), u = d.indexOf(n), S = u + r;
    S < 0 || S >= d.length || ([d[u], d[S]] = [d[S], d[u]], $i(d, n));
  });
  function hs(t, n) {
    t.preventDefault();
    const r = n.parentElement;
    n.classList.add("moving");
    const d = (S) => {
      const m = [...r.children].find((w) => {
        const R = w.getBoundingClientRect();
        return w !== n && S.clientY >= R.top && S.clientY <= R.bottom;
      });
      if (m) {
        const w = m.getBoundingClientRect();
        r.insertBefore(n, S.clientY < w.top + w.height / 2 ? m : m.nextSibling);
      }
    }, u = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", u), n.classList.remove("moving");
      const S = new Set(Kn());
      Yi.favs = null, Ka({ favourites: [...r.children].map((m) => m.dataset.trayFav).filter((m) => S.has(m)) });
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", u), window.addEventListener("pointercancel", u);
  }
  Pt.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const n = t.target.closest("[data-tray-card]"), r = t.target.closest(".tfTrayFav");
    n ? ds(t, n, "card", n.dataset.trayCard) : r && t.target.closest(".tfTrayGrip") ? hs(t, r) : r != null && r.classList.contains("off") && !t.target.closest("button") && ds(t, r, "fav", r.dataset.trayFav);
  });
  function rl(t) {
    if (!Tn || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const n = t.target.closest(".tfBoardItem"), r = n && gi().find((H) => H.el === n);
    if (!r || ja.includes(r.key)) return;
    const d = Ea.get(r.key), { w: u } = Ga(A.clientWidth);
    if (!d) return;
    t.preventDefault(), kn();
    const S = t.clientX, m = t.clientY;
    let w = !1, R = 0;
    const j = (H) => {
      const $ = H.clientX - S, ge = H.clientY - m;
      if (!w) {
        if (Math.hypot($, ge) < 4) return;
        w = !0, Tt = { key: r.key, col: d.col, row: d.row }, n.classList.add("tfDragging");
      }
      n.style.transform = "translate(" + $ + "px," + ge + "px)", Tt.col = Math.round((d.x + $) / (u + Wt)), Tt.row = Math.round((d.y + ge - fn) / Aa), R || (R = requestAnimationFrame(() => {
        R = 0, ln();
      }));
    }, F = () => {
      window.removeEventListener("pointermove", j), window.removeEventListener("pointerup", F), window.removeEventListener("pointercancel", F), w && (cancelAnimationFrame(R), ln(), n.classList.remove("tfDragging"), n.style.transform = "", Tt = null, Ya(Jt(), vi()), ln(), Kt());
    };
    window.addEventListener("pointermove", j), window.addEventListener("pointerup", F), window.addEventListener("pointercancel", F);
  }
  function fs(t = !1) {
    const n = A == null ? void 0 : A.querySelector(".tfDashGraph svg[data-graph]");
    if (!(n != null && n.clientWidth)) return;
    const r = n.dataset.graph + "@" + n.clientWidth + "x" + n.clientHeight;
    n.dataset.drawn !== r && (n.dataset.drawn = r, Ja(n.dataset.graph, n).then(() => {
      t && Wi(n);
    }));
  }
  function Er() {
    var w, R, j;
    at = _i.model(i()), _t(), b = at.states, b[(w = W.sources) == null ? void 0 : w.grid] && (at.grid = W.sources.grid), b[(R = W.sources) == null ? void 0 : R.alarm] && (at.security.alarms = [W.sources.alarm]), M.forEach((F, H) => {
      const $ = b[H], ge = ($ == null ? void 0 : $.attributes) || {};
      if (!$ || Date.now() - F.at > 2 * 60 * 1e3) {
        M.delete(H);
        return;
      }
      F.pos != null && $.state !== "opening" && $.state !== "closing" && Math.abs(At(H) - F.pos) < 1 && delete F.pos, F.tilt != null && Math.abs((ge.current_tilt_position ?? -1) - F.tilt) < 1 && delete F.tilt, F.pos == null && F.tilt == null && M.delete(H);
    });
    const t = [];
    let n = 0;
    const r = si();
    uo = r.filter((F) => F.room).map((F) => F.room), uo.some((F) => F.id === ve) || (ve = ((j = uo[0]) == null ? void 0 : j.id) || null);
    const d = Te === "weather" ? { key: "weather", name: "Weather" } : Te && r.find((F) => F.key === Te);
    if (d || (Te = null), f.classList.toggle("tfAreaOpen", !!d), f.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), f.classList.toggle("tfDash", !d), vt = /* @__PURE__ */ new Map(), at.rooms.forEach((F) => [...F.actions, ...F.plugs, ...F.readings, ...F.openings, ...F.solar, ...F.plants.flatMap((H) => [H.id, ...H.readings])].forEach((H) => vt.set(H, F.name))), !d) return nl(t, ho());
    if (t.push({ key: "areahead", html: xo(d, ++n) }), d.key === "weather")
      return t.weather = ++n, t;
    const u = d.ids, S = d.room ? d.room.id : d.key, m = d.room;
    return m != null && m.solar.length && t.push({ key: "energy:" + m.id, html: we(m, ++n) }), m && (m.readings.length || m.plugs.length || m.power != null) && t.push({ key: "readings:" + m.id, html: he(m, ++n) }), m == null || m.plants.forEach((F) => t.push({ key: "plant:" + F.id, html: me(F, ++n) })), u.length && t.push({ key: "block:" + S, order: ++n, tiles: u.map((F) => ({ key: F, html: Nn(F) })) }), d.key === "security" && t.push({ key: "openings", html: ye(++n) }), t;
  }
  const xo = (t, n) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + n + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + nc + '</button><div class="settingsTitle">' + oe(t.name) + "</div></div>";
  let sa = 0, Xi = null;
  const Wo = (t) => t === "weather" ? rn.wx : t.startsWith("room:") ? A.querySelector(".tfAreas") : A.querySelector(".tfDashBarRow");
  function _r(t) {
    var n, r;
    Te || (sa = Hn().scrollTop, Xi = ((n = Wo(t)) == null ? void 0 : n.getBoundingClientRect().top) ?? null), Te = t, t.startsWith("room:") && (ve = t.slice(5)), $a(), Hn().scrollTop = 0, (r = A.querySelector("[data-area-back]")) == null || r.focus({ preventScroll: !0 });
  }
  let zo = null;
  function sl(t, n) {
    if (zo == null || zo(), n == null) return;
    const r = Hn(), d = performance.now() + 1500, u = ["wheel", "touchstart", "pointerdown", "keydown"];
    let S = 0;
    const m = () => {
      cancelAnimationFrame(S), u.forEach((R) => window.removeEventListener(R, m, !0)), zo = null;
    }, w = () => {
      const R = t();
      if (R != null && R.isConnected) {
        const j = R.getBoundingClientRect().top - n;
        Math.abs(j) > 0.5 && (r.scrollTop += j);
      }
      performance.now() < d ? S = requestAnimationFrame(w) : m();
    };
    u.forEach((R) => window.addEventListener(R, m, { capture: !0, passive: !0 })), zo = m, w();
  }
  function yi() {
    var r;
    const t = Te;
    Te = null, $a(), Hn().scrollTop = sa, sl(() => Wo(t), Xi);
    const n = t.startsWith("room:") ? A.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? rn.wx.querySelector(".wbOpenPage") : A.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (r = (n == null ? void 0 : n.querySelector("[data-go]")) || n) == null || r.focus({ preventScroll: !0 });
  }
  const ll = (t) => t.wrap ? t.wrap(t.tiles.map((n) => n.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + oe(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((n) => n.html).join("") + "</div></div>", Ji = (t) => t.map((n) => n.key + (n.tiles ? "(" + n.tiles.map((r) => r.key).join(",") + ")" : "")).join(";");
  function Hn() {
    for (let t = f.parentElement || f.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const n = getComputedStyle(t).overflowY;
      if ((n === "auto" || n === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function ms(t) {
    const n = Hn(), r = (w) => {
      const R = w.getBoundingClientRect();
      return R.height && R.bottom > 0 && R.top < window.innerHeight;
    }, d = [...A.children, ...A.querySelectorAll(".tfDashTiles > *")].find((w) => !w.matches(".tfDashTiles") && r(w)), u = d == null ? void 0 : d.dataset.k, S = d == null ? void 0 : d.getBoundingClientRect().top;
    t();
    const m = d != null && d.isConnected ? d : u && A.querySelector('[data-k="' + CSS.escape(u) + '"]');
    m != null && m.isConnected && S != null && (n.scrollTop += m.getBoundingClientRect().top - S);
  }
  function $a() {
    if (!x || !A) return;
    const t = Er();
    A.querySelectorAll("[data-tf]").forEach((r) => r.remove()), on.clear();
    const n = document.createElement("div");
    n.innerHTML = t.map((r) => r.tiles ? ll(r) : r.html).join(""), t.forEach((r) => r.tiles ? r.tiles.forEach((d) => on.set(d.key, d.html)) : on.set(r.key, r.html)), bn = Ji(t), A.append(...n.children), Di(t.weather), Ri(), vo.disconnect(), ln(), xn(A), Ir(A), sn(A), U(), V && Ja(V.id), Qa(), Mi(), Uo(), requestAnimationFrame(z);
  }
  const Dr = (t) => {
    var r;
    const n = a.activeElement && t.contains(a.activeElement) ? a.activeElement : null;
    return n && { label: n.getAttribute("aria-label"), act: (r = n.dataset) == null ? void 0 : r.act };
  }, Xa = (t, n) => {
    var r;
    n && ((r = n.label && t.querySelector('[aria-label="' + CSS.escape(n.label) + '"]') || n.act && t.querySelector('[data-act="' + CSS.escape(n.act) + '"]')) == null || r.focus({ preventScroll: !0 }));
  };
  function dl(t, n) {
    const r = document.createElement("div");
    r.innerHTML = n;
    const d = r.firstElementChild, u = Dr(t);
    t.replaceWith(d), xn(d), Ir(d), sn(d), Xa(d, u);
  }
  function Kt() {
    !x || !A || Tt || ms(cl);
  }
  function cl() {
    if (!A.querySelector("[data-tf]")) {
      $a();
      return;
    }
    const t = Er();
    if (Ji(t) !== bn) {
      $a();
      return;
    }
    const n = (r) => [...qe.keys()].some((d) => {
      const u = d.slice(d.indexOf("|") + 1);
      return r === u || r.endsWith(":" + u);
    });
    t.forEach((r) => (r.tiles || [r]).forEach((d) => {
      if (on.get(d.key) === d.html || n(d.key)) return;
      const u = A.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (u) {
        if (on.set(d.key, d.html), V && V.key === d.key && u.querySelector(".tfOpen")) {
          u.querySelector(".tfOpen .activityRowMeta").textContent = D(V.id);
          return;
        }
        dl(u, d.html), V && V.key === d.key && Ja(V.id), d.key.startsWith("energy:") && Qa();
      }
    })), Mi(), Uo(), Qr(), U(), Ve == null || Ve.update(), Je == null || Je.forEach((r) => r.update()), f.classList.contains("tfDash") && Jn(), requestAnimationFrame(z);
  }
  const Qi = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && mt(t.color_mode)]],
    climate: (t) => [["Current temperature", He(t.current_temperature) + " °C"], ["Target", He(t.temperature) + " °C"], ["Action", mt(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", mt(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", mt(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", He(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : mt(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, Vo = (t) => {
    var r;
    const n = (((r = Qi[t.split(".")[0]]) == null ? void 0 : r.call(Qi, wt(t))) || []).filter(([, d]) => d != null && d !== "");
    return n.length ? '<div class="tfMoreRows">' + n.map(([d, u]) => '<div class="tfMoreRow"><span>' + oe(d) + "</span><span>" + oe(u) + "</span></div>").join("") + "</div>" : "";
  }, jo = (t) => Ai(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Dt(t, n = {}, r = !1) {
    return '<div class="tfMoreList">' + t.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + oe(d.name) + '</div><div class="tfMoreTiles' + (r ? " single" : "") + '">' + d.ids.map((u) => Ta(u, n)).join("") + "</div></div>").join("") + "</div>";
  }
  const ot = document.createElement("div");
  ot.className = "tfMoreBackdrop", ot.hidden = !0, f.appendChild(ot);
  const ki = (t, n) => {
    for (let r = t; r && r !== ot; r = r.parentElement) {
      const d = getComputedStyle(r).overflowY;
      if ((d === "auto" || d === "scroll") && r.scrollHeight > r.clientHeight + 1 && (n < 0 ? r.scrollTop > 0 : r.scrollTop + r.clientHeight < r.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let yo = null;
  ot.addEventListener("touchstart", (t) => {
    yo = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), ot.addEventListener("touchmove", (t) => {
    var u, S;
    if (!yo || t.touches.length > 1 || (S = (u = t.target).closest) != null && S.call(u, "input,textarea,select")) return;
    const n = t.touches[0], r = yo.x - n.clientX, d = yo.y - n.clientY;
    yo = { x: n.clientX, y: n.clientY }, Math.abs(d) >= Math.abs(r) && !ki(t.target, d) && t.preventDefault();
  }, { passive: !1 }), ot.addEventListener("wheel", (t) => {
    ki(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  function dn() {
    const t = ot.querySelector(".tfMorePair"), n = ot.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - n.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", dn, { passive: !0 }), x && Ct();
  let va = [];
  const Rr = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function gs(t) {
    const n = (w, R = "") => '<div class="tfMoreHead">' + (v != null && v.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Pl + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + oe(w) + "</div>" + R + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + hh + "</button></div>", r = (w, R) => '<div class="tfMoreNow"><div class="tfMoreState">' + oe(w) + "</div>" + (R ? '<div class="tfMoreSub">' + oe(R) + "</div>" : "") + "</div>", d = Dt;
    if (t === "favourites") {
      const w = Kn(), R = new Set(w), j = [{ name: "Starred", ids: w }, { name: "Home", ids: at.homeVacuums }, { name: "Security", ids: [...at.security.alarms, ...at.security.locks] }, ...at.rooms.map((F) => ({ name: F.name, ids: [...F.actions, ...F.plugs] }))].map((F, H) => H ? { ...F, ids: F.ids.filter(($) => !R.has($)) } : F).filter((F) => F.ids.length);
      return [n("Favourites"), r(w.length ? w.length + " starred" : "None starred"), d(j, { star: !0 }, !0)];
    }
    if (t.startsWith("summary:")) {
      const w = ho().find((H) => H.key === t.slice(8));
      if (!w) return null;
      const R = w.key === "light" ? (w.groups || []).flatMap((H) => H.ids) : [], j = R.some((H) => {
        var $;
        return (($ = b[H]) == null ? void 0 : $.state) === "on";
      }), F = R.length ? '<button class="primary" type="button" data-acts="' + co(R.map((H) => ["light", j ? "turn_off" : "turn_on", H])) + '">' + (j ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(w.name), '<div class="tfMoreNowRow">' + r(w.value) + F + "</div>", ...(w.groups || []).map((H) => {
        const $ = H.ids.filter((Ne) => Fs.includes(Ne.split(".")[0])), ge = H.ids.filter((Ne) => !$.includes(Ne));
        return '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + oe(H.name) + "</div>" + ($.length ? '<div class="tfMoreActions">' + $.map((Ne) => Nn(Ne, !0)).join("") + "</div>" : "") + (ge.length ? '<div class="tfMoreTiles">' + ge.map((Ne) => Ta(Ne, {})).join("") + "</div>" : "") + "</div>";
      })];
    }
    if (t.startsWith("group:")) {
      const [, w, R] = t.split(":"), j = at.rooms.find((ce) => ce.id === w), F = j && fr(j).find((ce) => ce.key === R);
      if (!F) return null;
      const H = es(j, R), $ = H.filter((ce) => Fs.includes(ce.split(".")[0])), ge = H.filter((ce) => !$.includes(ce)), Ne = F.acts ? '<button class="primary" type="button" data-acts="' + co(F.acts) + '">' + (F.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(j.name + " " + F.label.toLowerCase()), '<div class="tfMoreNowRow">' + r(F.value) + Ne + "</div>", '<div class="tfMoreGroup">' + ($.length ? '<div class="tfMoreActions">' + $.map((ce) => Nn(ce, !0)).join("") + "</div>" : "") + (ge.length ? '<div class="tfMoreTiles">' + ge.map((ce) => Ta(ce, {})).join("") + "</div>" : "") + "</div>"];
    }
    const u = t.split(".")[0], S = b[t], m = Fs.includes(u) ? ii(t) : { sections: [] };
    return [
      n(_e(t)),
      r(Et(t), S.last_changed && lo(Date.parse(S.last_changed))),
      u === "cover" && '<div data-cover-art="' + oe(t) + '"></div>',
      ...m.sections.filter(Boolean),
      Nr(t) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(v != null && v.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + hc + "</button>"
    ].filter(Boolean);
  }
  const Nr = (t) => Rr(t) ? "" : Vo(t) + jo(t);
  let Br = "";
  function Pr(t) {
    var n;
    v && (v.details = t, Mi(), (n = ot.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || n.focus({ preventScroll: !0 }));
  }
  const er = (t) => {
    const n = b[t], r = At(t), d = Gn(t);
    return { kind: Bl(n), name: _e(t), text: Et(t), pos: r, target: Math.abs(d - r) > 0.5 ? d : null, moving: n.state === "opening" || n.state === "closing", tilt: Ro(t) ?? 100, canSet: lt(t, sc) };
  };
  function Ir(t) {
    t.querySelectorAll("[data-cover-art]").forEach((n) => {
      const r = n.dataset.coverArt, d = n.dataset.artKey || "more:" + r;
      let u = _.get(d);
      u || (u = uh({ onMove: (S) => Ra(r, S), onSet: (S) => {
        Ra(r, S), ko("pos", r);
      } }), u.coverId = r, _.set(d, u)), n.replaceWith(u.el), u.update(er(r));
    });
  }
  const Hr = (t) => [..._.values()].filter((n) => n.coverId === t), Go = () => _.forEach((t) => {
    b[t.coverId] && t.update(er(t.coverId));
  }), Uo = () => {
    _.forEach((t, n) => {
      t.el.isConnected || (t.destroy(), _.delete(n));
    }), Go();
  };
  function Mi() {
    var S, m;
    if (!v || !(Rr(v.id) || b[v.id])) {
      ot.hidden = !0;
      return;
    }
    if ([...qe.keys()].some((w) => w.endsWith("|" + v.id))) {
      Go();
      return;
    }
    const t = gs(v.id), n = ot.querySelector(".tfMore");
    if (!t) {
      tr();
      return;
    }
    const r = Dr(ot), d = Nr(v.id), u = v.id.startsWith("summary:") || v.id.startsWith("group:");
    if (ot.hidden || !n || t.length !== va.length || n.classList.contains("wide") !== u) {
      const w = !ot.hidden && n ? n.scrollTop : 0;
      ot.innerHTML = '<div class="tfMorePair" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (u ? " wide" : "") + '">' + t.join("") + "</section>" + (d ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + Pl + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + d + "</div></div></aside>" : "") + "</div>", Br = d, ot.hidden = !1, dn(), Ir(ot), sn(ot), xn(ot), w && (ot.querySelector(".tfMore").scrollTop = w), Xa(ot, r), ot.contains(a.activeElement) || (S = ot.querySelector("[data-more-close]")) == null || S.focus({ preventScroll: !0 });
    } else {
      if (t.forEach((w, R) => {
        var H, $;
        if (w === va[R] || w.includes("data-cover-art") || n.children[R].contains(($ = (H = a.activeElement) == null ? void 0 : H.matches) != null && $.call(H, "input,select") ? a.activeElement : null) || [...qe.keys()].some((ge) => n.children[R].querySelector('[data-drag="' + CSS.escape(ge) + '"]'))) return;
        const j = document.createElement("div");
        j.innerHTML = w;
        const F = j.firstElementChild;
        n.children[R].replaceWith(F), xn(F), sn(F);
      }), d !== Br) {
        const w = ot.querySelector(".tfMoreSideBody");
        w && (w.innerHTML = d), Br = d;
      }
      ot.contains(a.activeElement) || Xa(ot, r);
    }
    (m = ot.querySelector(".tfMorePair")) == null || m.classList.toggle("details", !!(v.details && d)), va = t, Go();
  }
  setInterval(() => {
    v && Mi();
  }, 15 * 1e3);
  function Ci(t, n) {
    const r = !!(v && n && ot.contains(n));
    v = { id: t, opener: r ? v.opener : n, back: r ? v : null }, Fr();
  }
  function Fr() {
    va = [], ot.hidden = !0, _.forEach((t, n) => {
      n !== v.id && ot.contains(t.el) && (t.destroy(), _.delete(n));
    }), Mi();
  }
  function tr() {
    var r, d, u, S, m, w;
    const t = v == null ? void 0 : v.opener;
    v = null, _.forEach((R, j) => {
      ot.contains(R.el) && (R.destroy(), _.delete(j));
    }), un.forEach((R, j) => {
      j.startsWith("more:") && un.delete(j);
    }), ot.hidden = !0, ot.innerHTML = "";
    const n = { preventScroll: !0 };
    t != null && t.isConnected ? t.focus(n) : (r = t == null ? void 0 : t.dataset) != null && r.more ? (d = A.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || d.focus(n) : (u = t == null ? void 0 : t.dataset) != null && u.summary ? (S = A.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || S.focus(n) : (m = t == null ? void 0 : t.hasAttribute) != null && m.call(t, "data-favs-edit") && ((w = A.querySelector("[data-favs-edit]")) == null || w.focus(n));
  }
  function vs(t, n, r, d = {}) {
    const u = n.map((fe) => fe[1]), S = d.zero ? 0 : Math.min(...u), m = Math.max(...u), w = Math.max(120, t.clientWidth || 260), R = Math.max(60, t.clientHeight || 130), j = 8, F = R - 20, H = Date.now() - 24 * 3600 * 1e3, $ = 24 * 3600 * 1e3, ge = (fe) => Math.max(0, Math.min(w, (fe - H) / $ * w)), Ne = (fe) => m === S ? (j + F) / 2 : F - (fe - S) / (m - S) * (F - j);
    let ce = "M" + ge(n[0][0]).toFixed(1) + " " + Ne(n[0][1]).toFixed(1);
    for (let fe = 1; fe < n.length; fe++) ce += d.smooth ? "L" + ge(n[fe][0]).toFixed(1) + " " + Ne(n[fe][1]).toFixed(1) : "H" + ge(n[fe][0]).toFixed(1) + "V" + Ne(n[fe][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + w + " " + R), t.setAttribute("aria-label", r), t.innerHTML = '<path d="' + ce + "V" + F + "H" + ge(n[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + ce + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (R - 4) + '">24 h ago</text><text x="' + w + '" y="' + (R - 4) + '" text-anchor="end">Now</text>';
  }
  function pl(t) {
    var d;
    const n = Number((d = b[t]) == null ? void 0 : d.state), r = Date.now();
    if (wt(t).state_class === "total_increasing") {
      const u = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), S = Math.max(1, r - u);
      return [...Array(49)].map((m, w) => u + S * w / 48).map((m) => [m, Math.round(n * Math.pow((m - u) / S, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((u, S) => [r - (48 - S) * 30 * 60 * 1e3, Math.round(n * (0.96 + 0.04 * Math.sin(S / 6)) * 10) / 10]);
  }
  async function Ja(t, n) {
    var ge, Ne;
    let r = Me.get(t);
    if (t.endsWith("_solar_power")) r = { at: Date.now(), points: Nd() };
    else if (Ai(t)) r = { at: Date.now(), points: pl(t) };
    else if (!r || Date.now() - r.at > 5 * 60 * 1e3) {
      try {
        const ce = new Date(Date.now() - 864e5).toISOString(), fe = await B({ type: "history/history_during_period", start_time: ce, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), ae = ((fe == null ? void 0 : fe[t]) || []).map((Ue) => [Ue.lu != null ? Ue.lu * 1e3 : Date.parse(Ue.last_updated || Ue.last_changed), Number(Ue.s ?? Ue.state)]).filter(([Ue, It]) => Number.isFinite(Ue) && Number.isFinite(It));
        r = { at: Date.now(), points: ae };
      } catch {
        r = { at: Date.now(), points: [] };
      }
      Me.set(t, r);
    }
    const d = n || A.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!d) return;
    const u = b[t], S = ((ge = u == null ? void 0 : u.attributes) == null ? void 0 : ge.unit_of_measurement) || "", m = r.points.slice(), w = Number(u == null ? void 0 : u.state);
    if (Number.isFinite(w) && !t.endsWith("_solar_power") && m.push([Date.now(), w]), m.length < 2) {
      d.setAttribute("aria-label", _e(t) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const R = m.map((ce) => ce[1]), j = Math.min(...R), F = Math.max(...R), H = (ce) => ce.toLocaleString(void 0, { maximumFractionDigits: Math.abs(ce) >= 100 ? 0 : 1 }), $ = ((Ne = u == null ? void 0 : u.attributes) == null ? void 0 : Ne.state_class) === "total_increasing";
    vs(d, m, _e(t) + ", last 24 hours: " + ($ ? "+" + H(R[R.length - 1] - R[0]) : j === F ? H(j) : H(j) + " to " + H(F)) + (S ? " " + S : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power") });
  }
  function Qa() {
    const t = A == null ? void 0 : A.querySelector("[data-solar]");
    if (!t) return;
    const n = Nd();
    vs(t, n, "Solar, last 24 hours: up to " + He(Math.max(...n.map((r) => r[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function eo(t, n) {
    const r = n.entity_id, d = M.get(r) || {}, u = { open_cover: 100, close_cover: 0, set_cover_position: n.position, toggle: At(r) > 0 ? 0 : 100 }[t], S = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: n.tilt_position }[t];
    u != null && (d.pos = u), S != null && (d.tilt = S), t === "stop_cover" && (delete d.pos, delete d.tilt), t === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), M.set(r, d);
  }
  function Or(t, n, r) {
    var u;
    const d = r == null ? void 0 : r.entity_id;
    return t !== "light" || typeof d != "string" || !Oe[d] || !cn(d) || r.brightness_pct != null || r.brightness != null ? [n, r] : n !== "turn_on" && !(n === "toggle" && ((u = b[d]) == null ? void 0 : u.state) !== "on") ? [n, r] : ["turn_on", { ...r, brightness_pct: Oe[d] }];
  }
  function Da(t, n, r, d) {
    let u = { entity_id: r, ...d || {} };
    return [n, u] = Or(t, n, u), t === "cover" && eo(n, u), Xe[r] = (Xe[r] || 0) + 1, ti.set(dc, JSON.stringify(Xe)), _i.call(t, n, u) ? Promise.resolve() : Promise.resolve(le(t, n, u));
  }
  function bs(t) {
    const [n, r, d, u] = t.split("|");
    Da(n, r, d, u ? JSON.parse(u) : null).catch(() => {
    });
  }
  function Ra(t, n) {
    qe.set("pos|" + t, n), on.delete(t), va = va.map(() => ""), [A, ot].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((u) => Lt(u, n)));
    const r = A.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (r && (r.textContent = Math.round(n) + "%"), (v == null ? void 0 : v.id) === t) {
      const d = ot.querySelector(".tfMoreState"), u = ot.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(n) + "%", d.classList.add("live")), u && (u.textContent = "Currently " + At(t) + "%");
    }
    Hr(t).forEach((d) => d.update(er(t)));
  }
  const ul = (t, n) => {
    const r = t.shiftKey ? 10 : 1, d = { ArrowUp: n + r, ArrowRight: n + r, ArrowDown: n - r, ArrowLeft: n - r, PageUp: n + 25, PageDown: n - 25, Home: 0, End: 100 }[t.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function Yo(t, n) {
    var ce;
    const r = t.dataset.blocks;
    (ce = t.setPointerCapture) == null || ce.call(t, n.pointerId);
    const d = (fe) => {
      const ae = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (fe.clientX - ae.left) / ae.width * 100));
    }, u = d(n), S = n.clientX;
    let m = !1, w = Gn(r), R = u, j = 0;
    const F = () => {
      w = Math.abs(R - w) < 0.2 ? R : w + (R - w) * 0.14, Ra(r, w), j = requestAnimationFrame(F);
    }, H = () => {
      m || (m = !0, t.classList.add("fine"), j = requestAnimationFrame(F));
    }, $ = setTimeout(H, 350), ge = (fe) => {
      R = d(fe), Math.abs(fe.clientX - S) > 6 && (clearTimeout($), H());
    }, Ne = () => {
      clearTimeout($), cancelAnimationFrame(j), t.removeEventListener("pointermove", ge), t.removeEventListener("pointerup", Ne), t.removeEventListener("pointercancel", Ne), t.classList.remove("fine"), Ra(r, m ? Math.round(w) : (Math.min(3, Math.floor(u / 25)) + 1) * 25), ko("pos", r);
    };
    t.addEventListener("pointermove", ge), t.addEventListener("pointerup", Ne), t.addEventListener("pointercancel", Ne);
  }
  function ws(t) {
    var u;
    const [n, r] = t.dataset.open.split("|"), d = t.closest(".tfCard");
    V = { key: n, id: r, h: d ? Math.round(d.getBoundingClientRect().height) : 0 }, on.delete(n), Kt(), (u = A.querySelector(".tfOpen [data-close]")) == null || u.focus({ preventScroll: !0 });
  }
  function nr(t) {
    var n;
    ve = t.dataset.area, A.querySelectorAll(".tfAreaPanel").forEach((r) => {
      var u;
      const d = r === t;
      r.classList.toggle("active", d), r.setAttribute("aria-expanded", String(d)), (u = r.querySelector(".panelExpanded")) == null || u.toggleAttribute("inert", !d);
    }), on.set("areas", Pi(((n = A.querySelector('[data-k="areas"]')) == null ? void 0 : n.style.order) || 1));
  }
  const to = {
    bright: { value: (t, n) => Math.round(n * 100), text: (t, n) => n ? n + "%" : "Off", send: (t, n) => n > 0 ? ["light", "turn_on", { brightness_pct: n }] : ["light", "turn_off", {}] },
    ct: { value: (t, n) => {
      const [r, d] = wn(t);
      return Math.round(r + n * (d - r));
    }, text: (t, n) => n.toLocaleString() + "k", send: (t, n) => ["light", "turn_on", { color_temp_kelvin: n }] },
    hue: { value: (t, n) => Math.round(n * 360), text: () => "Colour", send: (t, n) => {
      var r;
      return ["light", "turn_on", { hs_color: [n, Math.max(60, ((r = wt(t).hs_color) == null ? void 0 : r[1]) || 100)] }];
    } },
    pos: { value: (t, n) => Math.round(n * 100), text: (t, n) => Math.round(n) + "%", send: (t, n) => ["cover", "set_cover_position", { position: Math.round(n) }] },
    tilt: { value: (t, n) => Math.round(n * 100), text: (t, n) => "Tilt " + n + "%", send: (t, n) => ["cover", "set_cover_tilt_position", { tilt_position: n }] },
    vol: { value: (t, n) => Math.round(n * 100) / 100, text: (t, n) => Math.round(n * 100) + "%", send: (t, n) => ["media_player", "volume_set", { volume_level: n }] }
  };
  function Na(t, n, r, d) {
    var R;
    const u = to[n].value(r, d);
    qe.set(n + "|" + r, u);
    const S = Math.round(d * 100) + "%", m = t.querySelector("i");
    if (n === "tilt") {
      m.style.width = "calc((100% - 6px) * " + d + ")";
      const [j, F] = t.querySelectorAll("span");
      j.classList.toggle("lit", d > 0.08), F.classList.toggle("lit", d > 0.92), on.delete(r), va = va.map(() => ""), Hr(r).forEach((H) => H.update(er(r)));
    } else if (m) m.style.width = S;
    else {
      let j = t.querySelector("b");
      j || (j = document.createElement("b"), t.appendChild(j)), j.style.left = S;
    }
    t.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const w = (R = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : R.querySelector(".tfName .activityRowMeta, .tfMoreState");
    w && (w.textContent = to[n].text(r, u));
  }
  function ko(t, n) {
    const r = qe.get(t + "|" + n), [d, u, S] = to[t].send(n, r), m = () => setTimeout(() => {
      qe.delete(t + "|" + n), Kt();
    }, 1500);
    Da(d, u, n, S).then(m, m);
  }
  function ar(t) {
    t.addEventListener("click", (n) => {
      var d;
      const r = n.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (Bn && !n.target.closest(".tfBoardMenu,[data-board-more]") && kn(), !(!r || !t.contains(r) || r.disabled))
        if (r.dataset.boardMore)
          (Bn == null ? void 0 : Bn.key) === r.dataset.boardMore ? kn(!0) : Ho(r.dataset.boardMore, r);
        else if (r.dataset.boardAct) il(Bn.key, r.dataset.boardAct);
        else if (r.dataset.boardShow) Fo(r.dataset.boardShow);
        else if (r.dataset.favHide) Tr(r.dataset.favHide, !1);
        else if (r.dataset.energyPick) qi(r.dataset.energyPick);
        else if (r.dataset.act) bs(r.dataset.act);
        else if (r.hasAttribute("data-details")) Pr(!(v != null && v.details));
        else if (r.hasAttribute("data-details-close")) Pr(!1);
        else if (r.dataset.summary) ci(r.dataset.summary, r);
        else if (r.dataset.star) di(r.dataset.star);
        else if (r.hasAttribute("data-more-back"))
          v = v.back, Fr();
        else if (r.hasAttribute("data-favs-edit")) Ci("favourites", r);
        else if (r.dataset.acts) JSON.parse(r.dataset.acts).forEach(([u, S, m, w]) => Da(u, S, m, w).catch(() => {
        }));
        else if (r.dataset.more) Ci(r.dataset.more, r);
        else if (r.hasAttribute("data-more-close")) tr();
        else if (r.dataset.go) _r("room:" + r.dataset.go);
        else if (r.hasAttribute("data-area-back")) yi();
        else if (r.dataset.open) ws(r);
        else if (r.hasAttribute("data-close")) {
          const u = V;
          V = null, on.delete(u.key), Kt(), (d = A.querySelector('[data-open="' + CSS.escape(u.key + "|" + u.id) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else r.classList.contains("tfAreaPanel") && !r.classList.contains("active") && nr(r);
    }), t.addEventListener("keydown", (n) => {
      var d, u, S, m, w, R, j;
      const r = n.target;
      if ((d = r.dataset) != null && d.open && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), ws(r)), (u = r.dataset) != null && u.energyPick && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), qi(r.dataset.energyPick)), (S = r.classList) != null && S.contains("tfAreaPanel") && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), nr(r)), (m = r.dataset) != null && m.summary && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), ci(r.dataset.summary, r)), n.key === "Escape" && Bn && t === A) {
        n.preventDefault(), kn(!0);
        return;
      }
      if (n.key === "Escape" && Tn && t === A) {
        n.preventDefault(), wo(!1), (w = p("dashEditNav")) == null || w.focus();
        return;
      }
      if (n.key === "Escape" && Te && t === A && (n.preventDefault(), yi()), (R = r.dataset) != null && R.blocks) {
        const F = r.dataset.blocks, H = ul(n, Math.round(Gn(F)));
        if (H == null) return;
        n.preventDefault(), Ra(F, H), clearTimeout(de.get(F)), de.set(F, setTimeout(() => ko("pos", F), 500));
        return;
      }
      if ((j = r.dataset) != null && j.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(n.key)) {
        n.preventDefault();
        const [F, H] = r.dataset.drag.split("|"), $ = Number(r.getAttribute("aria-valuenow")) / 100, ge = n.key === "Home" ? 0 : n.key === "End" ? 1 : Math.max(0, Math.min(1, $ + (n.key === "ArrowLeft" || n.key === "ArrowDown" ? -0.05 : 0.05)));
        Na(r, F, H, ge), ko(F, H);
      }
    }), t.addEventListener("pointerdown", (n) => {
      var Zo;
      const r = n.target.closest("[data-blocks]");
      if (r && n.button === 0) {
        n.preventDefault(), Yo(r, n);
        return;
      }
      const d = n.target.closest("[data-drag]");
      if (!d || n.button > 0) return;
      const [u, S] = d.dataset.drag.split("|");
      if (u === "bright" && !cn(S)) {
        bs(rt("light", "toggle", S));
        return;
      }
      const m = u === "bright" && ((Zo = b[S]) == null ? void 0 : Zo.state) !== "on", w = n.pointerType !== "mouse", R = u === "tilt" ? 3 : 0, j = () => d.getBoundingClientRect().width - R * 2, F = (Gt) => {
        const Qn = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (Gt.clientX - Qn.left - R) / j()));
      };
      let H = w ? "waiting" : m ? "pressed" : "dragging", $ = 0, ge = 0;
      const Ne = n.clientX, ce = n.clientY, fe = (Gt, Qn) => Math.hypot(Gt.clientX - Ne, Gt.clientY - ce) > Qn, ae = () => {
        try {
          d.setPointerCapture(n.pointerId);
        } catch {
        }
      };
      w || (n.preventDefault(), ae()), H === "dragging" && Na(d, u, S, F(n));
      const Ue = w && setTimeout(() => {
        var Gt, Qn;
        H === "waiting" && (H = "held", T = d, d.classList.add("held"), ae(), (Gt = navigator.userActivation) != null && Gt.hasBeenActive && ((Qn = navigator.vibrate) == null || Qn.call(navigator, 8)), $ = m ? (Oe[S] ?? 100) / 100 : Number(d.getAttribute("aria-valuenow")) / 100, ge = Ne, Na(d, u, S, $));
      }, y), It = (Gt) => {
        H === "waiting" && fe(Gt, 8) ? H = "gone" : H === "pressed" && fe(Gt, 4) && (H = "dragging"), H === "held" ? Na(d, u, S, Math.max(0, Math.min(1, $ + (Gt.clientX - ge) / j()))) : H === "dragging" && Na(d, u, S, F(Gt));
      }, Cn = (Gt) => {
        clearTimeout(Ue), ["pointermove", "pointerup", "pointercancel"].forEach((Qn, Ko) => d.removeEventListener(Qn, Ko ? Cn : It)), d.classList.remove("held"), T === d && (T = null), H === "held" || H === "dragging" ? ko(u, S) : Gt.type === "pointerup" && m && (H === "waiting" || H === "pressed") && Da("light", "turn_on", S).catch(() => {
        });
      };
      d.addEventListener("pointermove", It), d.addEventListener("pointerup", Cn), d.addEventListener("pointercancel", Cn);
    }), t.addEventListener("touchmove", (n) => {
      T && n.cancelable && n.preventDefault();
    }, { passive: !1 });
  }
  return A && x && (Oa(), ar(A), ar(ot), ot.addEventListener("click", (t) => {
    t.target === ot && tr();
  }), (Mo = a.getElementById("homeNav")) == null || Mo.addEventListener("click", () => {
    Te && yi();
  }), (Co = a.querySelector(".bottomNav")) == null || Co.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + fc + "</button>"), (Fn = p("dashEditNav")) == null || Fn.addEventListener("click", () => wo(!Tn)), A.addEventListener("pointerdown", rl), A.addEventListener("hass-action", (t) => {
    var d, u;
    const n = (u = (d = t.target).closest) == null ? void 0 : u.call(d, ".tfDac"), r = n == null ? void 0 : n.dataset.k;
    !r || !n.dataset.dac.startsWith("dash:") || Tn || (t.stopPropagation(), Ci(r, n));
  }), new ResizeObserver(() => {
    f.classList.contains("tfDash") && zi() !== ui ? Kt() : Jn();
  }).observe(A), window.addEventListener("resize", Jn, { passive: !0 }), ot.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.stopPropagation(), v != null && v.details ? Pr(!1) : tr());
  })), re(), {
    update(t) {
      if (!x) return;
      const n = !Object.keys(b).length;
      b = t || {};
      for (const r in b) r.startsWith("light.") && b[r].state === "on" && cn(r) && Ge(r, so(b[r]));
      n ? $a() : Kt();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      ro = !0, Ve == null || Ve.destroy(), Ve = null, Je == null || Je.forEach((t) => t.destroy()), Je = null;
    },
    resume() {
      ro = !1, !(!x || !(A != null && A.querySelector("[data-tf]"))) && (st.isConnected && Di(st.style.order), Ri());
    }
  };
}
const Hh = "0.47.0", ql = "move_assistant", Fh = "move_assistant", gc = "move_assistant_checkin_reminder";
function Oh() {
  if (document.getElementById("move-assistant-inter")) return;
  const a = document.createElement("link");
  a.id = "move-assistant-inter", a.rel = "stylesheet", a.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(a);
}
class qh extends HTMLElement {
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
    var p;
    const i = !this._hass;
    if (this._hass = l, i) {
      this._init();
      return;
    }
    this._app && l.states !== this._lastStates && (this._lastStates = l.states, this._app.updateStates(l.states), (p = this._test) == null || p.update(l.states));
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
    Oh();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${sp}${lp}${dp}</style>${cp}`;
    const i = l.getElementById("app");
    i.style.opacity = "0";
    let p = null;
    try {
      const f = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: ql
      });
      p = (f == null ? void 0 : f.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(p), this._app = _p(l, {
      data: p,
      save: (f) => this._save(f),
      fire: (f, g) => this._fire(f, g),
      ws: (f) => this._hass.callWS(f),
      subscribe: (f, g) => {
        var x, L;
        return (L = (x = this._hass) == null ? void 0 : x.connection) != null && L.subscribeMessage ? this._hass.connection.subscribeMessage(g, f) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var f, g;
        return Object.keys(((g = (f = this._hass) == null ? void 0 : f.services) == null ? void 0 : g.notify) || {}).sort();
      },
      setReminderAutomation: (f) => this._setReminderAutomation(f),
      setLight: (f) => this.classList.toggle("lightBody", f),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Ih(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const l = (i = this._hass) == null ? void 0 : i.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (p) => {
        var g;
        const f = JSON.stringify((p == null ? void 0 : p.value) ?? null);
        f === this._lastSaved || f === this._pendingJson || (this._lastSaved = f, (g = this._app) == null || g.applyRemoteData(p.value));
      },
      { type: "frontend/subscribe_user_data", key: ql }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: ql,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(l, i = {}) {
    var p, f;
    ((p = this._config) == null ? void 0 : p.events) !== !1 && ((f = this._hass) == null || f.callWS({
      type: "fire_event",
      event_type: Fh,
      event_data: { action: l, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const i = `config/automation/config/${gc}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (g) {
        if ((g == null ? void 0 : g.status_code) !== 404 && (g == null ? void 0 : g.status) !== 404) throw g;
      }
      return;
    }
    const p = (g) => `${g}:00`, f = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: gc,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: p(l.times.morning), id: "morning" },
        { trigger: "time", at: p(l.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${l.target}`,
          data: {
            title: "Move Assistant",
            message: "{{ 'Morning' if trigger.id == 'morning' else 'Evening' }} check-in is ready",
            data: { url: f, clickAction: f }
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
    var p;
    const i = (p = this.shadowRoot) == null ? void 0 : p.getElementById("toast");
    i && (i.textContent = l, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", qh), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Hh} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
