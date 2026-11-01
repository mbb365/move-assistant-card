const Cu = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Tu = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--muted)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDac{grid-column:span 2;min-width:0}.tfDac>dual-controller-v3{display:block}.tfMoreActions .tfDac{grid-column:auto}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}', Lu = '.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:clamp(8px,calc(5.6cqw * var(--wb-k,1)),14px);aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:clamp(12px,calc(7.9cqw * var(--wb-k,1)),20px);border-radius:clamp(22px,calc(11.1cqw * var(--wb-k,1)),28px);overflow:hidden}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbHead{gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px)}.wbSquare .wbChip{width:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);height:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);border-radius:clamp(12px,calc(6.3cqw * var(--wb-k,1)),16px);--wb-icon:clamp(18px,calc(9.5cqw * var(--wb-k,1)),24px)}.wbSquare .wbName{font-size:clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px);line-height:1.4}.wbSquare .wbSub{font-size:clamp(13px,calc(6.3cqw * var(--wb-k,1)),16px)}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:clamp(6px,calc(4cqw * var(--wb-k,1)),10px)}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 480px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}@container wb-card (width < 220px){.wbMoonCaption{display:none}}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}', Au = `<main id="app"><div class="shell">
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
`, aa = {
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
}, na = (a) => a < 0 ? 0 : a > 1 ? 1 : a, $d = (a, l, i) => a + (l - a) * i, Md = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(i.slice(c, c + 2), 16) || 0);
}, _u = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Xd = {}, jt = (a, l, i) => {
  const c = a + l + i;
  return Xd[c] || (Xd[c] = _u(Md(a).map((m, g) => m + (Md(l)[g] - m) * i)));
}, Jd = {}, kl = (a) => Jd[a] || (Jd[a] = Md(a)), id = (a, l, i, c) => (m) => {
  if (m <= 0) return 0;
  if (m >= 1) return 1;
  let g = 0, w = 1, A = m;
  for (let x = 0; x < 18; x++)
    A = (g + w) / 2, 3 * (1 - A) * (1 - A) * A * a + 3 * (1 - A) * A * A * i + A * A * A < m ? g = A : w = A;
  return 3 * (1 - A) * (1 - A) * A * l + 3 * (1 - A) * A * A * c + A * A * A;
}, Eu = { std: id(0.2, 0, 0, 1), acc: id(0.3, 0, 1, 1), dec: id(0, 0, 0, 1) };
function _l(a, l) {
  const i = String(a || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || l ? "night" : "day");
}
function Vc(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [jt(l.clear[0], l.cloudy[0], 0.12), jt(l.clear[1], l.cloudy[1], 0.12)], l.storm = [jt(l.rain[0], "#000000", 0.22), jt(l.rain[1], "#000000", 0.22)], l;
}
const Sd = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Cd = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Td = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Ld(a, l = aa) {
  const i = { ...aa, ...l }, c = Vc(i), m = String(a).split("/"), g = c[m[0]] ? m[0] : "clear", w = m[1] === "night", A = c[g][w ? 1 : 0], x = {
    night: w,
    clearness: g === "clear" ? 1 : g === "partly" ? 0.7 : 0.25,
    sky: A,
    skyStops: [A],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Sd.map(() => ({ o: 0 })),
    rain: Cd.map(() => ({ o: 0, dy: -16 })),
    snow: Td.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, H = (le) => Sd.map(() => ({ o: le }));
  return g === "clear" ? w ? (x.moon.o = 1, x.stars = H(1)) : x.sun.o = 1 : g === "partly" ? (x.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (x.moon = { x: 34, y: 33, d: 48, o: 1 }, x.stars = H(0.7)) : x.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : g === "cloudy" || g === "fog" ? (x.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? x.moon = { x: 40, y: 36, d: 40, o: 0 } : x.sun = { x: 40, y: 36, r: 20, o: 0 }) : (x.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? x.moon = { x: 38, y: 28, d: 36, o: 0 } : x.sun = { x: 38, y: 28, r: 18, o: 0 }, g === "snow" ? x.snow = Td.map(() => ({ o: 1, dy: 0 })) : x.rain = Cd.map((le, ie) => ({ o: g === "storm" && ie === 1 ? 0 : 1, dy: 0 })), g === "storm" && (x.bolt = { o: 1, dy: 0 })), x;
}
const Qd = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Du(a, l, i, c = aa, m = !1) {
  const g = { ...aa, ...c }, w = (O, q) => O > 0.01 && q > 0.01 ? "stay" : O > 0.01 ? "leave" : q > 0.01 ? "enter" : "none", A = (O, q, $, ae) => {
    const Y = O[0] + q * ae, W = O[1] - ($ - 1 - q) * ae;
    return Eu[O[2]](na((i - Y) / Math.max(1e-3, W - Y)));
  }, x = (O, q, $, ae = 0, Y = 1, W = 0) => {
    const X = w(O.o, q.o);
    if (X === "none") return { ...q, o: 0 };
    const G = A(Qd[$][X], ae, Y, W), K = {};
    for (const Q in q) K[Q] = m && X !== "stay" && Q !== "o" ? X === "leave" ? O[Q] : q[Q] : $d(O[Q], q[Q], G);
    return K;
  }, H = A(Qd.sky, 0, 1, 0);
  let le, ie;
  if (a.night !== l.night) {
    const O = Math.min(a.clearness, l.clearness), q = jt(jt(a.sky, l.sky, 0.5), g.dusk, 0.6 * O);
    le = H < 0.5 ? jt(a.sky, q, H * 2) : jt(q, l.sky, H * 2 - 1), ie = O > 0.5 ? [a.sky, g.dusk, l.sky] : [a.sky, l.sky];
  } else
    le = jt(a.sky, l.sky, H), ie = [a.sky, l.sky];
  return {
    night: i < 0.5 ? a.night : l.night,
    clearness: $d(a.clearness, l.clearness, i),
    sky: le,
    skyStops: ie,
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
const Ru = [
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
], ta = (a, l) => (Ru[(l & 7) * 8 + (a & 7)] + 0.5) / 64, Nu = 0, Ed = 1, Dd = 2, Rd = 3, Nd = 4, ea = 5, Lr = 6, li = 7, Bd = 8, Cl = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), Bu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Pu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((a) => [a[0] * 13 / 11, a[1] * 28 / 24]), Gc = (a, l, i) => {
  let c = !1;
  for (let m = 0, g = a.length - 1; m < a.length; g = m++) {
    const w = a[m], A = a[g];
    w[1] > i != A[1] > i && l < (A[0] - w[0]) * (i - w[1]) / (A[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function Uc(a, { size: l = 90, px: i = 2, oneBit: c = !1, colors: m = aa, ink: g = "#26221e", paper: w = "#fbf9f6", clock: A = 0, idle: x = !1 } = {}) {
  const H = { ...aa, ...m }, le = Math.sin, ie = Math.PI * 2, O = Math.max(6, Math.round(l / i)), q = O / 90, $ = x ? Math.floor(A / 100) * 100 : 0, ae = x ? le(ie * $ / 3600) : 0, Y = x ? 1.8 * le(ie * $ / 6400) : 0, W = x ? 0.9 * le(ie * $ / 4100) : 0, X = x ? 0.8 * le(ie * $ / 5200) : 0, G = $ / 3400 % 1, K = x && a.bolt.o > 0.5 && (G < 0.04 || G > 0.08 && G < 0.11), Q = new Array(O * O), T = new Uint8Array(O * O), V = (M, R, C, I, fe) => {
    C == null || M < 0 || R < 0 || M >= O || R >= O || (I >= 1 || I > ta(M + 5, R + 3)) && (Q[R * O + M] = C, T[R * O + M] = fe);
  }, be = (M, R, C, I) => {
    for (let fe = Math.max(0, Math.floor(R - C) - 1); fe <= Math.min(O - 1, R + C + 1); fe++) for (let z = Math.max(0, Math.floor(M - C) - 1); z <= Math.min(O - 1, M + C + 1); z++) I(z, fe, z + 0.5 - M, fe + 0.5 - R);
  }, Ae = a.skyStops || [a.sky], y = a.skyT || 0;
  for (let M = 0; M < O; M++) {
    const R = a.night ? na(1 - (M + 0.5) / (O * 0.7)) * 0.85 : na(((M + 0.5) / O - 0.35) / 0.65) * 0.85;
    for (let C = 0; C < O; C++) {
      let I = Ae[0];
      if (Ae.length > 1) {
        const fe = y * (Ae.length - 1), z = Math.min(Ae.length - 2, Math.floor(fe));
        I = fe - z > ta(C, M) ? Ae[z + 1] : Ae[z];
      }
      R > ta(C + 2, M + 5) && (I = a.night ? jt(I, "#000000", 0.28) : jt(I, "#ffffff", 0.2)), Q[M * O + C] = K ? jt(I, "#ffffff", 0.25) : I;
    }
  }
  if (a.sun.o > 0.01) {
    const M = a.sun.x * q, R = a.sun.y * q, C = Math.max(1, a.sun.r * q);
    if (x) {
      const I = C * (1.45 + 0.06 * ae), fe = jt(H.sun, "#ffffff", 0.55);
      if (be(M, R, I, (z, re, ce, ge) => {
        const We = Math.sqrt(ce * ce + ge * ge);
        We > C && We < I && V(z, re, fe, 0.26 * (1 - (We - C) / (I - C)) * a.sun.o, Nu);
      }), a.sun.o > 0.5) {
        const z = Math.floor($ / 500) % 2, re = Math.max(1, C * 0.22);
        for (let ce = 0; ce < 8; ce++) if (ce % 2 === z) for (let ge = C + 1.5; ge < C + 1.5 + re; ge += 0.7) V(Math.floor(M + Math.cos(ce * Math.PI / 4) * ge), Math.floor(R + Math.sin(ce * Math.PI / 4) * ge), H.sun, a.sun.o, Bd);
      }
    }
    be(M, R, C, (I, fe, z, re) => {
      if (z * z + re * re > C * C) return;
      const ce = ((z * 0.643 + re * 0.766) / C + 1) / 2;
      V(I, fe, na((ce - 0.62) / 0.38) > ta(I, fe) ? H.sunEdge : H.sun, a.sun.o, Ed);
    });
  }
  if (Sd.forEach((M, R) => {
    const C = a.stars[R].o;
    if (C < 0.01) return;
    const I = Math.floor(M[0] * q), fe = Math.floor(M[1] * q), z = x ? (Math.floor($ / 300) + R * 3) % 6 : 0;
    if (z === 5) return;
    const re = Math.round(M[2] * q * (z === 4 ? 0.3 : z < 2 ? 1 : 0.6));
    V(I, fe, H.star, C, li);
    for (let ce = 1; ce <= re; ce++) {
      const ge = ce === re && re > 1 ? jt(H.star, a.sky, 0.5) : H.star;
      V(I - ce, fe, ge, C, li), V(I + ce, fe, ge, C, li), V(I, fe - ce, ge, C, li), V(I, fe + ce, ge, C, li);
    }
  }), a.moon.o > 0.01) {
    const M = Math.max(1.5, a.moon.d * q * 0.37), R = a.moon.x * q, C = a.moon.y * q + (x && X > 0.4 ? -1 : 0), I = R + 0.547 * M, fe = C - 0.503 * M, z = 0.82 * M, re = jt(H.moon, "#ffffff", 0.6);
    be(R, C, M, (ce, ge, We, tt) => {
      if (We * We + tt * tt > M * M) return;
      const yt = ce + 0.5 - I, fn = ge + 0.5 - fe;
      yt * yt + fn * fn <= z * z || V(ce, ge, na((tt + M) / (2 * M) * 1.1 - 0.1) > ta(ce, ge) ? H.moon : re, a.moon.o, Dd);
    });
  }
  const we = Math.max(2, Math.round(15.65 * q)), Ce = Math.max(1, Math.round(5.87 * q * 0.5));
  Cd.forEach((M, R) => {
    const C = a.rain[R];
    let I = C.dy, fe = C.o;
    if (fe < 0.01) return;
    if (x) {
      const ce = ($ / 950 + R / 3) % 1;
      I += -5 + ce * 14, fe *= ce < 0.18 ? ce / 0.18 : ce > 0.72 ? (1 - ce) / 0.28 : 1;
    }
    const z = (M[0] + 3 + Y) * q, re = (M[1] + I) * q;
    for (let ce = 0; ce < we; ce++) for (let ge = 0; ge < Ce; ge++) V(Math.floor(z - 0.208 * ce) + ge, Math.floor(re) + ce, H.rain, fe, Nd);
  });
  const qe = Math.max(0, Math.round(7.34 * q / 2.6));
  if (Td.forEach((M, R) => {
    const C = a.snow[R];
    let I = C.dy, fe = 0, z = C.o;
    if (z < 0.01) return;
    if (x) {
      const ge = ($ / 3200 + R / 5) % 1;
      I += -6 + ge * 14, fe = 1.5 * le(ie * (ge * 1.5 + R / 5)), z *= ge < 0.2 ? ge / 0.2 : ge > 0.75 ? (1 - ge) / 0.25 : 1;
    }
    const re = Math.floor((M[0] + 3.67 + fe + Y) * q), ce = Math.floor((M[1] + 3.67 + I) * q);
    V(re, ce, H.snow, z, ea);
    for (let ge = 1; ge <= qe; ge++)
      V(re - ge, ce, H.snow, z, ea), V(re + ge, ce, H.snow, z, ea), V(re, ce - ge, H.snow, z, ea), V(re, ce + ge, H.snow, z, ea), qe > 1 && ge < qe && (V(re - ge, ce - ge, H.snow, z, ea), V(re + ge, ce - ge, H.snow, z, ea), V(re - ge, ce + ge, H.snow, z, ea), V(re + ge, ce + ge, H.snow, z, ea));
  }), a.bolt.o > 0.01)
    if (O >= 30) {
      const M = 39 + Y, R = 50 + a.bolt.dy;
      for (let C = Math.floor(R * q); C <= (R + 28) * q; C++) for (let I = Math.floor(M * q); I <= (M + 13) * q; I++)
        Gc(Pu, (I + 0.5) / q - M, (C + 0.5) / q - R) && V(I, C, H.sun, a.bolt.o, Lr);
    } else {
      const M = O / 18, R = 7, C = 10 + Math.round(a.bolt.dy * 0.2);
      Bu.forEach((I, fe) => I.split("").forEach((z, re) => {
        if (z !== "#") return;
        const ce = Math.floor((R + re) * M), ge = Math.floor((C + fe) * M);
        for (let We = ge; We < Math.max(ge + 1, Math.floor((C + fe + 1) * M)); We++) for (let tt = ce; tt < Math.max(ce + 1, Math.floor((R + re + 1) * M)); tt++) V(tt, We, H.sun, a.bolt.o, Lr);
      }));
    }
  if (a.cloud.o > 0.01) {
    const M = Math.max(3, a.cloud.w * q), R = M * 0.6665, C = (a.cloud.x + Y) * q - M / 2, I = (a.cloud.y + W) * q - R / 2, fe = jt(H.cloudDay, H.cloudNight, Math.round(a.cloud.f * 4) / 4), z = jt(fe, "#000000", 0.16);
    for (let re = Math.max(0, Math.floor(I) - 1); re <= Math.min(O - 1, I + R + 1); re++) for (let ce = Math.max(0, Math.floor(C) - 1); ce <= Math.min(O - 1, C + M + 1); ce++) {
      const ge = (ce + 0.5 - C) / M, We = (re + 0.5 - I) / M;
      Cl(ge, We) && V(ce, re, !Cl(ge, We + 1 / M) || na((We - 0.42) / 0.25) * 0.8 > ta(ce, re) ? z : fe, a.cloud.o, Rd);
    }
  }
  return Yc(Q, T, O, O, { oneBit: c, ink: g, paper: w, snowInk: !a.night });
}
function Yc(a, l, i, c, { oneBit: m, ink: g, paper: w, snowInk: A }) {
  const x = new Uint8ClampedArray(i * c * 4), H = kl(g), le = kl(w);
  for (let ie = 0; ie < c; ie++) for (let O = 0; O < i; O++) {
    const q = ie * i + O, $ = l[q];
    if (a[q] == null) continue;
    let ae = kl(a[q]);
    if (m) {
      let Y;
      $ === Nd || $ === Bd ? Y = !0 : $ === ea ? Y = A : $ === li || $ === Lr ? Y = !1 : Y = Math.round((0.2126 * ae[0] + 0.7152 * ae[1] + 0.0722 * ae[2]) / 255 * 4) / 4 <= ta(O, ie), ($ === Ed || $ === Dd || $ === Rd || $ === Lr) && (O > 0 && l[q - 1] !== $ || O < i - 1 && l[q + 1] !== $ || ie > 0 && l[q - i] !== $ || ie < c - 1 && l[q + i] !== $) && (Y = !0), ae = Y ? H : le;
    }
    x[q * 4] = ae[0], x[q * 4 + 1] = ae[1], x[q * 4 + 2] = ae[2], x[q * 4 + 3] = 255;
  }
  return { w: i, h: c, data: x };
}
const Iu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Hu = (a) => _l(a, !1).split("/")[0], rd = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Fu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Ou = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", qu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Wu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", zu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], ju = [".##", "##.", ".#.", "#.."];
function Zc(a, { width: l, height: i, colors: c, wave: m = 0.38, soft: g = 6, glow: w = 0.6 }) {
  const A = { ...aa, dawn: "#e5a77e", ...c }, x = Vc(A), H = l, le = i, ie = H / 6, O = ie / 2, q = Math.PI * 2, $ = a.length ? a : [{ cond: "cloudy", night: !1 }], ae = [...Array(12)].map((G, K) => {
    const Q = $[Math.min(K, $.length - 1)], T = Hu(Q.cond), V = K % 2 === 1;
    return { cond: Q.cond, k: T, night: V, sky: x[T][V ? 1 : 0], cover: Iu[T] };
  }), Y = (G) => le * (0.5 - m * Math.cos(q * (G / ie - 0.25)));
  return { C: A, S: ae, W: H, H: le, cw: ie, sw: O, TAU: q, yb: Y, side: (G, K, Q) => {
    const T = (G ? Y(K) - Q : Q - Y(K)) / Math.max(3, g * 1.4) + 0.5;
    return T <= 0 ? 0 : T >= 1 ? 1 : T;
  }, glowAt: (G) => {
    const K = ((G / ie - 0.25) % 1 + 1) % 1, Q = Math.max(0, Math.min(5, Math.round(G / ie - 0.25))), T = Math.max(0, Math.min(5, Math.round(G / ie - 0.75))), V = 1 - (ae[2 * Q].cover + ae[2 * T + 1].cover) / 2, be = Math.sin(Math.PI * Math.min(1, Math.max(0, Y(G) / le)));
    return { c: K < 0.5 ? A.dusk : A.dawn, a: w * (0.2 + 0.8 * V) * be * be };
  }, soft: g, tw: ie * 0.3, sy: le / 90 };
}
function Kc(a, { clock: l = 0, ambient: i = !1, seed: c = 1 }) {
  const { S: m, sw: g, side: w, C: A, TAU: x, sy: H } = a, le = l, ie = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((O, q) => {
    const $ = rd(c * 977 + q * 131 + 7), ae = (q + 0.5) * g, Y = O.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[O.k] : 0;
    for (let W = 0; W < Y; W++) {
      const X = ae + ($() - 0.5) * g * 1.6, G = (6 + $() * 76) * H, K = $() < 0.35, Q = 1.8 + $() * 1.6, T = w(!0, X, G) * (K ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(x * le / 2600 + W * 1.7 + q) : 1);
      T >= 0.03 && ie.stars.push({ x: X, y: G, big: K, size: Q, o: T });
    }
    if (!O.night && (O.k === "clear" || O.k === "partly")) {
      const W = ae + ($() - 0.5) * g * 0.3, X = Math.min(15, g * 0.29);
      ie.suns.push({ x: W, y: 32 * H, rad: X, halo: X * 2.8 * (i ? 1 + 0.07 * Math.sin(x * le / 3600 + q) : 1) });
    }
    if (O.night && (O.k === "clear" || O.k === "partly")) {
      const W = Math.min(0.78, g * 0.55 / 34), X = ae - 23 * W + ($() - 0.5) * g * 0.2;
      ie.moons.push({ x: X + 23 * W, y: (4 + (i ? 0.8 * Math.sin(x * le / 5200 + q) : 0)) * H + 23 * W, d: 46 * W });
    }
  }), m.forEach((O, q) => {
    const $ = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[O.k];
    if (!$) return;
    const ae = rd(c * 577 + q * 71 + 3), Y = (q + 0.5) * g, W = O.k === "rain" || O.k === "storm" || O.night ? A.cloudNight : A.cloudDay, X = O.night ? 0.82 : O.k === "storm" ? 0.75 : 1;
    for (let G = 0; G < $; G++) {
      const K = g / 46 * (O.k === "partly" ? 0.85 : 0.75 + ae() * 0.55), Q = Y + (O.k === "partly" ? g * 0.12 : (ae() - 0.5) * g * 1.05), T = (O.k === "partly" ? 40 : 6 + ae() * 26) * H, V = i ? 2.5 * Math.sin(x * le / 9e3 + q * 1.3 + G * 2.1) : 0, be = i ? 0.9 * Math.sin(x * le / 6100 + q + G) : 0;
      ie.clouds.push({ x: Q - 23 * K + V, y: T - 15.33 * K + be, w: 46 * K, h: 30.66 * K, fill: W, o: X * ($ > 1 && G === 0 ? 0.85 : 1) });
    }
  }), m.forEach((O, q) => {
    const $ = rd(c * 313 + q * 29 + 11), ae = (q + 0.5) * g, Y = O.cond === "pouring" ? 16 : O.cond === "rainy" || O.cond === "hail" ? 9 : O.cond === "lightning-rainy" ? 12 : O.cond === "snowy-rainy" ? 5 : 0;
    for (let X = 0; X < Y; X++) {
      let G = ae + ($() - 0.5) * g * 1.05, K = 44 + $() * 36, Q = 1;
      if (i) {
        const V = ((K - 44 + le * 0.04) % 36 + 36) % 36;
        G -= 0.21 * (V - (K - 44)), K = 44 + V, Q = Math.min(1, V / 6, (36 - V) / 6);
      }
      K *= H;
      const T = w(O.night, G, K) * Q;
      T >= 0.05 && ie.drops.push({ x: G, y: K, o: T });
    }
    const W = O.cond === "snowy" ? 11 : O.cond === "snowy-rainy" ? 6 : 0;
    for (let X = 0; X < W; X++) {
      let G = ae + ($() - 0.5) * g * 1.05, K = 40 + $() * 44, Q = 1;
      if (i) {
        const V = ((K - 40 + le * 9e-3) % 44 + 44) % 44;
        K = 40 + V, G += 1.6 * Math.sin(x * le / 2800 + X * 1.9 + q), Q = Math.min(1, V / 6, (44 - V) / 6);
      }
      K *= H;
      const T = w(O.night, G, K) * Q;
      T >= 0.05 && ie.flakes.push({ x: G, y: K, o: T });
    }
    if (O.k === "fog") {
      const X = O.night ? "#c8ccd6" : "#ffffff", G = O.night ? 0.28 : 0.62, K = i ? 4 * Math.sin(x * le / 8e3 + q) : 0;
      for (let Q = 0; Q < 4; Q++) ie.fogs.push({ x: ae - g * 0.75 + Q % 2 * g * 0.18 + (Q % 2 ? K : -K), y: (30 + Q * 13) * H, w: g * 1.3, c: X, a: G });
    }
    if (O.k === "storm") {
      const X = (le / 3400 + q * 0.37) % 1;
      ie.bolts.push({ x: ae + ($() - 0.5) * g * 0.3 - 5, y: 36 * H, o: i && !(X < 0.05 || X > 0.09 && X < 0.12) ? 0.8 : 1 });
    }
  }), ie;
}
function Vu(a, l, i, c, m, g, w, A) {
  const { S: x, C: H, cw: le, yb: ie, glowAt: O, soft: q, tw: $, sy: ae } = a, Y = new Array(i * c), W = new Uint8Array(i * c), X = new Uint8Array(i * c), G = (M, R, C, I, fe) => {
    C == null || M < 0 || R < 0 || M >= i || R >= c || (I >= 1 || I > ta(M + 5, R + 3)) && (Y[R * i + M] = C, W[R * i + M] = fe);
  }, K = (M, R, C, I) => {
    for (let fe = Math.max(0, Math.floor(R - C) - 1); fe <= Math.min(c - 1, R + C + 1); fe++) for (let z = Math.max(0, Math.floor(M - C) - 1); z <= Math.min(i - 1, M + C + 1); z++) I(z, fe, z + 0.5 - M, fe + 0.5 - R);
  }, Q = (M, R, C) => {
    for (let fe = 0; fe < M.length - 1; fe++) {
      const z = (fe + R) * le;
      if (C < z - $ / 2) return [M[fe], M[fe], 0];
      if (C <= z + $ / 2) return [M[fe], M[fe + 1], (C - z + $ / 2) / $];
    }
    const I = M[M.length - 1];
    return [I, I, 0];
  }, T = x.filter((M) => !M.night).map((M) => M.sky), V = x.filter((M) => M.night).map((M) => M.sky), be = q / g, Ae = 16 * ae / g;
  for (let M = 0; M < i; M++) {
    const R = (M + 0.5) * m, C = ie(R) / g, I = Q(T, 0.75, R), fe = Q(V, 1.25, R), z = O(R);
    for (let re = 0; re < c; re++) {
      const ce = ta(M, re), ge = re + 0.5 - C, We = (be > 0.01 ? na(0.5 + ge / be) : ge > 0 ? 1 : 0) > ce;
      let tt = We ? I[2] > ce ? I[1] : I[0] : fe[2] > ce ? fe[1] : fe[0];
      (We ? na(((re + 0.5) / c - 0.45) / 0.55) * 0.7 : na(1 - (re + 0.5) / (c * 0.55)) * 0.7) > ta(M + 2, re + 5) && (tt = We ? jt(tt, "#ffffff", 0.18) : jt(tt, "#000000", 0.25)), We && ge >= 0 && ge < Ae && z.a * 1.3 * (1 - ge / Ae) > ta(M + 6, re + 1) && (tt = z.c), Y[re * i + M] = tt, X[re * i + M] = We ? 0 : 1;
    }
  }
  const y = jt(H.sun, "#ffffff", 0.55), we = jt(H.moon, "#ffffff", 0.6);
  l.stars.forEach((M) => {
    const R = Math.floor(M.x / m), C = Math.floor(M.y / g);
    if (R < 0 || C < 0 || R >= i || C >= c || !X[C * i + R] || M.o < 0.15) return;
    const I = M.o > 0.45 ? H.star : jt(H.star, Y[C * i + R], 0.5), fe = M.big && M.o > 0.6 ? Math.floor(M.size / m) : 0;
    G(R, C, I, 1, li);
    for (let z = 1; z <= fe; z++) [[R - z, C], [R + z, C], [R, C - z], [R, C + z]].forEach((re) => {
      re[0] >= 0 && re[1] >= 0 && re[0] < i && re[1] < c && X[re[1] * i + re[0]] && G(re[0], re[1], I, 1, li);
    });
  }), l.suns.forEach((M) => {
    const R = Math.max(1.5, M.rad / m), C = M.x / m, I = M.y / g, fe = M.halo / m * 0.85;
    if (K(C, I, fe, (z, re, ce, ge) => {
      const We = Math.sqrt(ce * ce + ge * ge);
      We > R && We < fe && !X[re * i + z] && G(z, re, y, 0.3 * (1 - (We - R) / (fe - R)), 0);
    }), A) {
      const z = Math.floor(w / 500) % 2, re = Math.max(1, R * 0.3);
      for (let ce = 0; ce < 8; ce++) if (ce % 2 === z) for (let ge = R + 1.2; ge < R + 1.2 + re; ge += 0.7) G(Math.floor(C + Math.cos(ce * Math.PI / 4) * ge), Math.floor(I + Math.sin(ce * Math.PI / 4) * ge), H.sun, 1, Bd);
    }
    K(C, I, R, (z, re, ce, ge) => {
      ce * ce + ge * ge <= R * R && G(z, re, na(((ge / R + 1) / 2 - 0.6) / 0.4) > ta(z, re) ? H.sunEdge : H.sun, 1, Ed);
    });
  }), l.moons.forEach((M) => {
    const R = Math.max(1.5, M.d * 0.37 / m), C = M.x / m, I = M.y / g, fe = C + 0.547 * R, z = I - 0.503 * R, re = 0.82 * R;
    K(C, I, R, (ce, ge, We, tt) => {
      if (We * We + tt * tt > R * R) return;
      const yt = ce + 0.5 - fe, fn = ge + 0.5 - z;
      yt * yt + fn * fn > re * re && G(ce, ge, na((tt + R) / (2 * R) * 1.1 - 0.1) > ta(ce, ge) ? H.moon : we, 1, Dd);
    });
  }), l.clouds.forEach((M) => {
    const R = Math.max(3, M.w / m), C = R * 0.6665, I = M.x / m, fe = M.y / g, z = jt(M.fill, "#000000", 0.16);
    for (let re = Math.max(0, Math.floor(fe) - 1); re <= Math.min(c - 1, fe + C + 1); re++) for (let ce = Math.max(0, Math.floor(I) - 1); ce <= Math.min(i - 1, I + R + 1); ce++) {
      const ge = (ce + 0.5 - I) / R, We = (re + 0.5 - fe) / R;
      Cl(ge, We) && G(ce, re, !Cl(ge, We + 1 / R) || na((We - 0.42) / 0.25) * 0.8 > ta(ce, re) ? z : M.fill, M.o, Rd);
    }
  }), l.fogs.forEach((M) => {
    const R = Math.floor(M.y / g), C = Math.max(R, Math.floor((M.y + 6 * ae) / g) - 1), I = Math.floor(M.x / m), fe = Math.floor((M.x + M.w) / m);
    for (let z = R; z <= C; z++) for (let re = I; re <= fe; re++) {
      const ce = (re - I) / Math.max(1, fe - I);
      G(re, z, M.c, M.a * (ce < 0.25 ? ce / 0.25 : ce > 0.75 ? (1 - ce) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / g));
  l.drops.forEach((M) => {
    const R = M.x / m, C = Math.floor(M.y / g);
    for (let I = 0; I < Ce; I++) G(Math.floor(R - 0.208 * I * g / m), C + I, H.rain, M.o, Nd);
  });
  const qe = Math.max(0, Math.round(4.4 / m / 2.6));
  return l.flakes.forEach((M) => {
    const R = Math.floor(M.x / m), C = Math.floor(M.y / g);
    G(R, C, H.snow, M.o, ea);
    for (let I = 1; I <= qe; I++)
      G(R - I, C, H.snow, M.o, ea), G(R + I, C, H.snow, M.o, ea), G(R, C - I, H.snow, M.o, ea), G(R, C + I, H.snow, M.o, ea);
  }), l.bolts.forEach((M) => {
    if (m <= 3.5)
      for (let R = Math.floor(M.y / g); R <= (M.y + 24) / g; R++) for (let C = Math.floor(M.x / m); C <= (M.x + 11) / m; C++)
        Gc(zu, (C + 0.5) * m - M.x, (R + 0.5) * g - M.y) && G(C, R, H.sun, 1, Lr);
    else {
      const R = Math.round(M.x / m), C = Math.round(M.y / g);
      ju.forEach((I, fe) => I.split("").forEach((z, re) => {
        z === "#" && G(R + re, C + fe, H.sun, 1, Lr);
      }));
    }
  }), { col: Y, ids: W };
}
function Gu(a, l) {
  const i = l.px, c = Math.max(6, Math.round(l.width / i)), m = Math.max(6, Math.round(l.height / i)), g = l.width / c, w = l.height / m, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, x = (q) => {
    const $ = Zc(q, l);
    return Vu($, Kc($, { clock: A, ambient: l.ambient, seed: l.seed }), c, m, g, w, A, l.ambient);
  }, H = x(a), le = l.reveal == null ? 1 : na(l.reveal);
  let ie = H.col, O = H.ids;
  if (le < 1) {
    const q = l.prev ? x(l.prev) : null, $ = le * (c + 12);
    ie = new Array(c * m), O = new Uint8Array(c * m);
    for (let ae = 0; ae < c * m; ae++) {
      const Y = ae % c, W = ae / c | 0;
      (l.reduce ? le : na(($ - Y) / 12)) > ta(Y, W) ? (ie[ae] = H.col[ae], O[ae] = H.ids[ae]) : q ? (ie[ae] = q.col[ae], O[ae] = q.ids[ae]) : (ie[ae] = null, O[ae] = 255);
    }
  }
  return Yc(ie, O, c, m, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function Uu(a, l, i) {
  const c = i.width, m = i.height, g = i.reveal == null ? 1 : na(i.reveal), w = (O, q) => {
    const $ = Zc(q, i);
    Yu(O, $, Kc($, i));
  };
  if (a.clearRect(0, 0, c, m), g >= 1) {
    w(a, l);
    return;
  }
  if (i.prev && w(a, i.prev), i.reduce) {
    a.save(), a.globalAlpha = g, w(a, l), a.restore();
    return;
  }
  const A = a.canvas, x = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (x.width !== A.width || x.height !== A.height) && (x.width = A.width, x.height = A.height);
  const H = x.getContext("2d");
  H.setTransform(a.getTransform()), H.clearRect(0, 0, c, m), w(H, l);
  const le = g * (c + 64) - 64, ie = H.createLinearGradient(le, 0, le + 64, 0);
  ie.addColorStop(0, "rgba(0,0,0,1)"), ie.addColorStop(1, "rgba(0,0,0,0)"), H.globalCompositeOperation = "destination-in", H.fillStyle = ie, H.fillRect(0, 0, c, m), H.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(x, 0, 0), a.restore();
}
function Yu(a, l, i) {
  const { W: c, H: m, S: g, C: w, cw: A, yb: x, glowAt: H, soft: le, tw: ie, sy: O } = l, q = (y, we) => {
    const Ce = kl(y);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, we)).toFixed(3) + ")";
  }, $ = (y, we) => {
    const Ce = a.createLinearGradient(0, 0, c, 0);
    Ce.addColorStop(0, y[0]);
    for (let qe = 0; qe < y.length - 1; qe++) {
      const M = (qe + we) * A, R = (M - ie / 2) / c, C = (M + ie / 2) / c;
      R > 0 && R < 1 && Ce.addColorStop(R, y[qe]), C > 0 && C < 1 && Ce.addColorStop(C, y[qe + 1]);
    }
    return Ce.addColorStop(1, y[y.length - 1]), Ce;
  }, ae = Math.max(24, Math.ceil(c / 4)), Y = (y, we) => {
    a.beginPath();
    for (let Ce = 0; Ce <= ae; Ce++) {
      const qe = c * Ce / ae, M = y == null ? 0 : x(qe) + y;
      Ce ? a.lineTo(qe, M) : a.moveTo(qe, M);
    }
    for (let Ce = ae; Ce >= 0; Ce--) {
      const qe = c * Ce / ae;
      a.lineTo(qe, x(qe) + we);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = $(g.filter((y) => !y.night).map((y) => y.sky), 0.75), a.fillRect(0, 0, c, m);
  const W = a.createLinearGradient(0, 0, c, 0);
  for (let y = 0; y <= 64; y++) {
    const we = H(c * y / 64);
    W.addColorStop(y / 64, q(we.c, Math.min(1, we.a)));
  }
  a.fillStyle = W;
  for (let y = 0; y < 8; y++)
    a.globalAlpha = 1 - y / 8, Y(y * 2 * O, (y + 1) * 2 * O);
  a.fillStyle = $(g.filter((y) => y.night).map((y) => y.sky), 1.25);
  const X = Math.max(0.5, le), G = 6;
  a.globalAlpha = 1, Y(null, -X);
  for (let y = 0; y < G; y++)
    a.globalAlpha = 1 - (y + 0.5) / G, Y(-X + 2 * X * y / G, -X + 2 * X * (y + 1) / G);
  a.globalAlpha = 1;
  const K = new Path2D(qu), Q = new Path2D(Ou), T = new Path2D(Fu), V = new Path2D(Wu);
  a.fillStyle = w.star, i.stars.forEach((y) => {
    a.globalAlpha = y.o, y.big ? (a.save(), a.translate(y.x, y.y), a.scale(y.size, y.size), a.fill(K), a.restore()) : (a.beginPath(), a.arc(y.x, y.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const be = jt(w.sun, "#ffffff", 0.55);
  i.suns.forEach((y) => {
    const we = a.createRadialGradient(y.x, y.y, 0, y.x, y.y, y.halo);
    we.addColorStop(0, q(be, 0.42)), we.addColorStop(0.7, q(be, 0)), a.fillStyle = we, a.beginPath(), a.arc(y.x, y.y, y.halo, 0, Math.PI * 2), a.fill();
    const Ce = a.createLinearGradient(0, y.y - y.rad, 0, y.y + y.rad);
    Ce.addColorStop(0.6, w.sun), Ce.addColorStop(1, w.sunEdge), a.fillStyle = Ce, a.beginPath(), a.arc(y.x, y.y, y.rad, 0, Math.PI * 2), a.fill();
  });
  const Ae = jt(w.moon, "#ffffff", 0.6);
  i.moons.forEach((y) => {
    a.save(), a.translate(y.x - y.d / 2, y.y - y.d / 2), a.scale(y.d / 46, y.d / 46);
    const we = a.createLinearGradient(0, 6, 0, 40);
    we.addColorStop(0, Ae), we.addColorStop(1, w.moon), a.fillStyle = we, a.fill(Q), a.restore();
  }), i.clouds.forEach((y) => {
    a.save(), a.globalAlpha = y.o, a.translate(y.x, y.y), a.scale(y.w / 46, y.h / 30.66), a.translate(-4, -9.67), a.fillStyle = y.fill, a.fill(T), a.restore();
  }), i.fogs.forEach((y) => {
    const we = a.createLinearGradient(y.x, 0, y.x + y.w, 0);
    we.addColorStop(0, q(y.c, 0)), we.addColorStop(0.25, q(y.c, y.a)), we.addColorStop(0.75, q(y.c, y.a)), we.addColorStop(1, q(y.c, 0)), a.fillStyle = we, a.fillRect(y.x, y.y, y.w, 6 * O);
  }), a.fillStyle = w.rain, i.drops.forEach((y) => {
    a.save(), a.globalAlpha = y.o, a.translate(y.x, y.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = w.snow, i.flakes.forEach((y) => {
    a.globalAlpha = y.o, a.beginPath(), a.arc(y.x, y.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = w.sun, i.bolts.forEach((y) => {
    a.save(), a.globalAlpha = y.o, a.translate(y.x, y.y), a.fill(V), a.restore();
  }), a.restore();
}
function Zu(a, l) {
  var jd, Vd, Gd, Ud, Yd, Zd, Kd;
  const i = (t) => a.getElementById(t), c = i("workoutView"), m = i("workoutNameInput");
  let g = !0;
  const w = i("homeClock");
  function A() {
    w && (w.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  A(), setInterval(A, 15e3);
  const x = i("createFlow"), H = i("createMovementsSlot"), le = i("createTimingSlot"), ie = i("createFinishSlot"), O = i("movementStepSummary"), q = i("timingStepSummary"), $ = i("finishStepSummary"), ae = i("continueToTiming"), Y = i("continueToFinish"), W = i("finishMoveButton");
  let X = !1, G = [];
  function K(t) {
    !t || G.some((r) => r.node === t) || G.push({ node: t, parent: t.parentNode, next: t.nextSibling });
  }
  function Q(t, r) {
    t && (K(t), r.appendChild(t));
  }
  function T() {
    [...G].reverse().forEach(({ node: t, parent: r, next: s }) => {
      r && (s && s.parentNode === r ? r.insertBefore(t, s) : r.appendChild(t));
    }), G = [];
  }
  function V(t) {
    a.querySelectorAll(".createStep").forEach((r) => {
      r.classList.toggle("active", r.dataset.createStep === t);
    }), t === "timing" && (X = !0), be();
  }
  function be() {
    var se, de;
    if (!dt) return;
    Ue[mt];
    const t = Je.filter((ne) => !ne.hidden), r = t.filter((ne) => ne.kind !== "rest").length, s = t.filter((ne) => ne.kind === "rest").length;
    O.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const u = r > 0, h = a.querySelector('[data-open-step="timing"]'), S = a.querySelector('[data-open-step="finish"]');
    h.disabled = !u, ae.disabled = !u, q.textContent = u ? Gt(R.value) + " · " + en(C.value) + " movement · " + en(I.value) + " rest" : "Add a movement first", S.disabled = !(u && X);
    const P = ((m == null ? void 0 : m.value) || "").trim(), j = [];
    (se = i("includeWarmupPreset")) != null && se.checked && j.push("warm-up"), (de = i("includeCooldownPreset")) != null && de.checked && j.push("cooldown"), $.textContent = P ? P + (j.length ? " · " + j.join(" + ") : "") : j.length ? j.join(" + ") : "Name and optional extras";
  }
  function Ae() {
    var Le, Ge, Ee;
    x.hidden = !1, X = !1;
    const t = a.querySelector(".editNameRow"), r = i("createMoveOptions"), s = a.querySelector(".timeTiles"), u = i("routineSummaryModal"), h = a.querySelector(".tempoRevealRow"), S = i("tempoExperiment"), P = (Le = i("warmupList")) == null ? void 0 : Le.closest("section"), j = i("movementCreatorLaunch"), se = i("movementCreator"), de = (Ge = i("strengthList")) == null ? void 0 : Ge.closest("section"), ne = (Ee = i("cooldownList")) == null ? void 0 : Ee.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), P, j, se, de, ne].forEach((Se) => Se && Q(Se, H)), [r, s, u, h, S].forEach((Se) => Q(Se, le)), Q(t, ie), V("movements"), be();
  }
  function y() {
    T(), x.hidden = !0, a.querySelectorAll(".createStep").forEach((t) => t.classList.remove("active"));
  }
  a.querySelectorAll("[data-open-step]").forEach((t) => t.addEventListener("click", () => {
    t.disabled || V(t.dataset.openStep);
  })), ae.addEventListener("click", () => {
    ae.disabled || V("timing");
  }), Y.addEventListener("click", () => V("finish")), W.addEventListener("click", () => i("saveWorkoutEdit").click());
  const we = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, Ce = i("homeNav"), qe = i("settingsNav");
  function M(t) {
    Object.entries(we).forEach(([r, s]) => s.classList.toggle("active", r === t)), Ce.classList.toggle("active", t === "home"), qe.classList.toggle("active", t === "settings"), t === "home" && setTimeout(Ji, 400), t === "settings" && (requestAnimationFrame(() => Pi(a.querySelector(".tab.active"), !1)), Xo());
  }
  const R = i("totalTime"), C = i("workTime"), I = i("restTime"), fe = i("totalOut"), z = i("workOut"), re = i("restOut"), ce = i("totalFill"), ge = i("workFill"), We = i("restFill"), tt = i("roundsInput"), yt = i("roundsFill"), fn = i("roundsOut"), Rn = i("totalLabel"), Lt = i("routineSummaryModal"), Ze = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Mt = Ze.map((t) => ({ ...t })), Je = [
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
  const ji = {
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
  }, lt = fo(l.data), Ue = lt.profiles;
  let mt = Ue[lt.selected] ? lt.selected : lt.order.find((t) => Ue[t]) || "kettlebell";
  function fo(t) {
    const r = t && typeof t == "object" ? JSON.parse(JSON.stringify(t)) : {}, s = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(ji)), u = (Array.isArray(r.order) ? r.order : Object.keys(s)).filter((h) => s[h]);
    return Object.keys(s).forEach((h) => {
      u.includes(h) || u.push(h);
    }), {
      v: 1,
      profiles: s,
      order: u,
      selected: r.selected || u[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : Vi(r.energy)).map(di),
      settings: { ...r.settings || {} }
    };
  }
  function Vi(t) {
    if (!Array.isArray(t)) return [];
    const r = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return t.forEach((u) => {
      const h = new Date(u.at);
      if (isNaN(h)) return;
      const S = h.getFullYear() + "-" + String(h.getMonth() + 1).padStart(2, "0") + "-" + String(h.getDate()).padStart(2, "0"), P = h.getHours() < 14 ? "morning" : "evening";
      if (s.some((se) => se.date === S && se.slot === P)) return;
      const j = r.indexOf(u.value) + 1;
      j > 0 && s.push({ date: S, slot: P, mood: null, energy: j, at: u.at });
    }), s;
  }
  function di(t) {
    if (t.scale === 100) return t;
    const r = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...t, mood: r(t.mood), energy: r(t.energy), scale: 100 };
  }
  function mn() {
    dt || (lt.selected = mt, lt.order = lt.order.filter((t) => Ue[t] && t !== wt), l.save(lt));
  }
  function nt() {
    return lt.settings;
  }
  function Wn(t) {
    const r = Ue[t];
    if (!r) return;
    mt = t;
    const s = i("workoutNameInput");
    if (s && (s.value = r.name), R.value = r.total, C.value = r.work, I.value = r.rest, tt.value = r.rounds || 1, r.customSequence) {
      const u = (r.sequence || []).map((S) => ({ ...S })), h = (S) => u.filter((P) => P.presetRole === S).map(({ presetRole: P, ...j }) => j);
      Mt = (r.warmup || h("warmup")).map((S) => ({ ...S })), kn = (r.cooldown || h("cooldown")).map((S) => ({ ...S })), Je = u.filter((S) => !S.presetRole), ci(r.preset || "movement", !1);
    } else
      R.min = 3, R.max = 40, R.step = 1, C.min = 20, C.max = 60, C.step = 5, I.min = 5, I.max = 30, I.step = 5, Mt = (r.warmup || Ze).map((u) => ({ ...u })), kn = (r.cooldown || hn).map((u) => ({ ...u })), Je = r.strength.map((u) => Array.isArray(u) ? (([h, S, P, j = !1]) => ({ id: h, name: S, group: P, kind: "work", hidden: !!j }))(u) : { ...u });
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === t)), D();
  }
  function Gi(t, r, s) {
    const u = t.getBoundingClientRect(), h = u.width / 2, S = u.height / 2, P = r - h, j = s - S;
    let se = 1 / 0, de = 1 / 0;
    P !== 0 && (se = h / Math.abs(P)), j !== 0 && (de = S / Math.abs(j));
    const ne = Math.min(Math.max(1 / Math.min(se, de), 0), 1);
    let J = Math.atan2(j, P) * (180 / Math.PI) + 90;
    return J < 0 && (J += 360), { edge: ne, angle: J };
  }
  function gt(t, r, s = !1) {
    const u = t.getBoundingClientRect(), h = r.clientX - u.left, S = r.clientY - u.top, { edge: P, angle: j } = Gi(t, h, S), se = s ? 100 : P * 100;
    t.style.setProperty("--edge-proximity", se.toFixed(3)), t.style.setProperty("--cursor-angle", j.toFixed(3) + "deg"), t.classList.toggle("borderGlowActive", s || se >= 30);
  }
  function _e(t) {
    t.addEventListener("pointermove", (s) => gt(t, s, !1)), t.addEventListener("pointerenter", (s) => gt(t, s, !1)), t.addEventListener("pointerdown", (s) => gt(t, s, !0));
    const r = () => {
      t.classList.remove("borderGlowActive"), t.style.setProperty("--edge-proximity", "0");
    };
    t.addEventListener("pointerleave", r), t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r);
  }
  _e(i("addWorkoutPanel"));
  let dt = !1, wt = null;
  function Ie(t) {
    return String(t ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function ho(t) {
    return t.summary ? t.summary : t.customSequence ? Gt(t.total) + " · custom move" : Gt(t.total) + " · " + en(t.work) + " / " + en(t.rest) + " · warm-up + cooldown";
  }
  function Fo(t, r) {
    var S;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = t, s.tabIndex = 0;
    const u = r.activityCount ?? (((S = r.sequence) == null ? void 0 : S.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Ie(r.name) + '</div><div class="sub">' + Ie(ho(r)) + '</div><span class="sourceTag">' + Ie(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (u ? u + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Ie(r.name) + "</div></div>";
    const h = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(s, h), _e(s), s.addEventListener("click", (P) => {
      P.target.closest("button") || Wn(t);
    }), s.addEventListener("keydown", (P) => {
      (P.key === "Enter" || P.key === " ") && !P.target.closest("button") && (P.preventDefault(), Wn(t));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (P) => {
      P.stopPropagation(), Wn(t), zr(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (P) => {
      P.stopPropagation(), Wn(t), Os();
    }), s;
  }
  function Ui() {
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.remove()), lt.order.forEach((t) => {
      Ue[t] && Fo(t, Ue[t]);
    }), a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.classList.toggle("active", t.dataset.workout === mt));
  }
  Ui(), i("addWorkoutPanel").addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && (t.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    dt = !0, wt = "custom-" + Date.now(), Ue[wt] = {
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
    }, Wn(wt), zr(!0);
  });
  let Be = [], He = 0, Kt = 0, Na = 1, Mn = !1, Pt = null, Va = null, Vt = !1, Nn = lt.settings.upcomingCount ?? "all", mo = "movement";
  function Bn(t, r, s) {
    return (Number(t) - r) / (s - r) * 100;
  }
  function en(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function Gt(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function wa() {
    ce.style.width = Bn(R.value, Number(R.min), Number(R.max)) + "%", ge.style.width = Bn(C.value, Number(C.min), Number(C.max)) + "%", We.style.width = Bn(I.value, Number(I.min), Number(I.max)) + "%", z.textContent = en(C.value), re.textContent = en(I.value);
    const t = Number(tt.value) || 1;
    yt.style.width = Bn(t, 1, 10) + "%", Rn.textContent = t > 1 ? "Time per round" : "Total time";
  }
  function go(t) {
    return t.filter((r) => !r.hidden);
  }
  function Ft(t) {
    const r = Math.max(0, Math.round(Number(t) || 0)), s = Math.floor(r / 3600), u = Math.floor(r % 3600 / 60), h = r % 60;
    return (s ? s + ":" + String(u).padStart(2, "0") : u) + ":" + String(h).padStart(2, "0");
  }
  function xa(t) {
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
        const j = r.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        j && (u = j[2]);
      }
    if (!u || !/^[\w-]{11}$/.test(u)) return null;
    const h = (j) => {
      if (!j) return 0;
      if (/^\d+$/.test(j)) return Number(j);
      const se = j.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return se ? (Number(se[1]) || 0) * 3600 + (Number(se[2]) || 0) * 60 + (Number(se[3]) || 0) : 0;
    }, S = h(r.searchParams.get("t") || r.searchParams.get("start")), P = h(r.searchParams.get("end"));
    return { id: u, start: S, end: P > S ? P : null };
  }
  function $t(t, r) {
    if (t.useVideoLength === !1) return Math.max(5, Number(t.duration) || r || 300);
    const s = Number(t.start) || 0, u = Number(t.end) || Number(t.videoDuration) || 0;
    return u > s ? Math.round(u - s) : Number(t.duration) || 300;
  }
  function vo(t, r) {
    const s = Math.max(0, Number(t) || 0);
    return Math.round(r === "hour" ? s * 3600 : r === "min" ? s * 60 : s);
  }
  function ci(t, r = !0) {
    mo = t, a.querySelectorAll(".createPresetBtn").forEach((u) => u.classList.toggle("active", u.dataset.movePreset === t));
    const s = Ue[mt];
    s && (s.preset = t), t === "work" ? (R.min = 30, R.max = 480, R.step = 30, C.min = 300, C.max = 7200, C.step = 300, I.min = 60, I.max = 1800, I.step = 60, r && (R.value = 60, C.value = 1500, I.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (R.min = 3, R.max = 40, R.step = 1, C.min = 20, C.max = 60, C.step = 5, I.min = 5, I.max = 30, I.step = 5, r && (R.value = 20, C.value = 45, I.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), wa();
  }
  function ui(t, r) {
    const s = mo === "work";
    return t.map((u, h) => ({ ...u, id: r + "-" + h + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(C.value) }));
  }
  function Ba() {
    const t = Ue[mt];
    t != null && t.customSequence && (t.includeWarmup = i("includeWarmupPreset").checked, t.includeCooldown = i("includeCooldownPreset").checked, t.includeWarmup && !Mt.length && (Mt = ui(Ze, "warm")), t.includeCooldown && !kn.length && (kn = ui(hn, "cool")), D());
  }
  function _() {
    const t = i("upcomingCountSetting");
    if (!t) return;
    const r = Math.max(1, Be.length - 1), s = Nn;
    t.innerHTML = "";
    for (let S = 1; S <= r; S++) {
      const P = document.createElement("option");
      P.value = String(S), P.textContent = String(S), t.appendChild(P);
    }
    const u = document.createElement("option");
    u.value = "all", u.textContent = "All", t.appendChild(u);
    const h = s === "all" ? "all" : String(Math.min(Number(s) || 1, r));
    t.value = h, Nn = h === "all" ? "all" : Number(h);
  }
  function D() {
    Number(R.value) * 60;
    const t = Number(C.value), r = Number(I.value), s = Ue[mt], u = !!(s != null && s.customSequence), h = (u ? !s.includeWarmup : s != null && s.warmupOff) ? [] : go(Mt), S = go(Je), P = u && !s.includeCooldown ? [] : go(kn);
    if (s && (s.total = Number(R.value), s.work = t, s.rest = r, s.rounds = Number(tt.value) || 1, s.customSequence ? (s.sequence = Je.map((Me) => ({ ...Me })), s.warmup = Mt.map((Me) => ({ ...Me })), s.cooldown = kn.map((Me) => ({ ...Me }))) : (s.strength = Je.map((Me) => ({ ...Me })), s.warmup = Mt.map((Me) => ({ ...Me })), s.cooldown = kn.map((Me) => ({ ...Me })))), s != null && s.customSequence) {
      const Me = [...h.map((it) => ({ ...it, section: "warmup" })), ...S, ...P.map((it) => ({ ...it, section: "cooldown" }))].map((it) => {
        if (it.kind === "video") return { ...it, duration: $t(it, t), rest: 0 };
        if (it.kind === "rest") {
          const dn = it.useGlobalTiming === !0 ? r : Number(it.duration) || r;
          return { ...it, duration: dn, rest: 0 };
        }
        const ln = it.useGlobalTiming === !1 && Number(it.duration) || t;
        return { ...it, duration: ln, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Be = [], Me.forEach((it, ln) => {
        Be.push(it);
        const dn = Me[ln + 1];
        it.kind !== "rest" && dn && dn.kind !== "rest" && Be.push({
          id: "auto-rest-" + ln,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Be = Me;
    } else
      Be = [...h.map((Me) => ({ ...Me, section: "warmup" })), ...S, ...P.map((Me) => ({ ...Me, section: "cooldown" }))].map((Me) => Me.kind === "video" ? { ...Me, duration: $t(Me, t), rest: 0 } : Me.kind === "rest" ? { ...Me, duration: Me.useGlobalTiming === !0 ? r : Number(Me.duration) || r, rest: 0 } : { ...Me, duration: Me.useGlobalTiming === !1 && Number(Me.duration) || t, rest: r }), Be.forEach((Me, it) => {
        var ln;
        ((ln = Be[it + 1]) == null ? void 0 : ln.kind) === "rest" && (Me.rest = 0);
      }), Be.length && (Be[Be.length - 1].rest = 0);
    const j = Math.max(1, Math.min(10, Number(tt.value) || 1)), se = Be, de = (Me) => j <= 1 ? null : Me.section === "warmup" || Me.presetRole === "warmup" ? "first" : Me.section === "cooldown" || Me.presetRole === "cooldown" ? "last" : Me.kind === "video" && (Me.videoRounds === "first" || Me.videoRounds === "last") ? Me.videoRounds : null, ne = (Me) => !!de(Me), J = se.filter((Me) => !ne(Me)), Le = se.filter(ne), Ge = J.length, Ee = J.reduce((Me, it) => Me + it.duration + it.rest, 0), Se = Le.reduce((Me, it) => Me + it.duration + it.rest, 0), ke = [
      Le.some((Me) => Me.section === "warmup" || Me.presetRole === "warmup") && "warm-up",
      Le.some((Me) => Me.section === "cooldown" || Me.presetRole === "cooldown") && "cooldown",
      Le.some((Me) => Me.kind === "video" && !Me.section && !Me.presetRole) && "video"
    ].filter(Boolean), ut = ke.length > 1 ? ke.slice(0, -1).join(", ") + " & " + ke[ke.length - 1] : ke[0] || "";
    Be = [];
    const pt = (Me, it) => {
      const ln = de(Me);
      return !ln || (ln === "first" ? it === 1 : it === j);
    };
    for (let Me = 1; Me <= j; Me++)
      if (se.filter((it) => pt(it, Me)).forEach((it, ln) => Be.push({ ...it, id: it.id + (j > 1 ? "-r" + Me : ""), round: Me, roundIndex: ln })), Me < j && Ge)
        if (s != null && s.customSequence)
          Be.push({ id: "round-break-" + Me, name: "Rest", group: "Round " + (Me + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: Me, roundIndex: Ge, roundBreak: !0 });
        else {
          const it = Be[Be.length - 1];
          it.rest = r, it.roundBreakAfter = !0;
        }
    wa();
    const Re = Be.reduce((Me, it) => Me + it.duration + it.rest, 0), ht = Math.round(Ee / 60), Ct = Math.round(Re / 60), ot = j > 1 ? Gt(ht) + " × " + j + " rounds" + (Se ? " + " + en(Se) + " " + ut : "") + " (" + Gt(Ct) + ")" : Gt(Ct), Xe = [h.length ? "warm-up" : "", P.length ? "cooldown" : ""].filter(Boolean), an = s != null && s.customSequence ? ot + " · " + Ge + " items" + (Xe.length && !(j > 1 && Se) ? " · " + Xe.join(" + ") : "") : ot + " · " + en(t) + " / " + en(r) + (Xe.length && !(j > 1 && Se) ? " · " + Xe.join(" + ") : "");
    fe.textContent = en(Ee);
    const yn = Be.filter((Me) => !Me.roundBreak).length, Ht = j > 1 ? yn + " activities · " + j + " rounds" : Ge + " activities";
    fn.textContent = j > 1 ? j + " rounds · " + Gt(Ct) + " total" : "1 round", i("roundsCount").textContent = j, a.querySelectorAll("[data-rounds-step]").forEach((Me) => {
      Me.disabled = Number(Me.dataset.roundsStep) < 0 ? j <= 1 : j >= 10;
    }), s && (s.summary = an, s.activityCount = Ge);
    const oi = a.querySelector(".workoutPanel.active .sub");
    oi && (oi.textContent = an), Lt.textContent = an, Dr(), a.querySelectorAll(".workoutPanel.active .activityCount").forEach((Me) => Me.textContent = Ht), wa(), Pe(), Nr(), gi(), _(), dt && be(), we.workout.classList.contains("active") && !Pt && Ei();
  }
  const F = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', U = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', ue = {
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
  }, te = (t) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (ue[t] || "") + "</svg>";
  a.querySelectorAll("[data-icon]").forEach((t) => {
    t.innerHTML = te(t.dataset.icon);
  });
  let pe = null, ye = null;
  function xe(t) {
    return t = Math.max(1, Number(t) || 0), t >= 3600 && t % 3600 === 0 ? { value: t / 3600, unit: "hour" } : t >= 60 && t % 60 === 0 ? { value: t / 60, unit: "min" } : { value: t, unit: "sec" };
  }
  function Fe(t = !1) {
    const r = a.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), t && r.select());
  }
  function ze(t, r, s = {}) {
    const u = t.kind === "rest", h = t.kind === "video", S = h ? t.useVideoLength !== !1 : u ? t.useGlobalTiming === !0 : t.useGlobalTiming !== !1, P = Number(u ? I.value : C.value), j = xe(h ? t.useVideoLength === !1 ? t.duration : $t({ ...t, useVideoLength: !0 }) : S ? P : t.duration || P), se = h && (Number(t.videoDuration) > 0 || Number(t.end) > 0), de = h ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Ie(t.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ie(t.autoName ? "" : t.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Re, ht]) => '<option value="' + Re + '"' + ((t.videoRounds || "every") === Re ? " selected" : "") + ">" + ht + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ie(t.name) + '" placeholder="' + (u ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Ie(t.group) + '" placeholder="' + (u ? "Rest" : "e.g. Glutes + legs") + '"></label>', ne = h ? "Play the whole " + (Number(t.start) > 0 || Number(t.end) > 0 ? "clip" : "video") + (se ? " · " + Ft($t({ ...t, useVideoLength: !0 })) : "") : "Use global timing · " + en(P), J = document.createElement("div");
    J.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), J.dataset.index = r, J.dataset.id = t.id;
    const Le = s.isNew ?? (ye == null ? void 0 : ye.item) === t, Ge = s.sheet ? '<div class="moveEditActions sheetActions">' + (Le ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (t.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Ie(t.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Le ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    J.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (h ? " videoFields" : "") + '">' + de + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (S ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Ie(ne) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + j.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Re) => '<option value="' + Re + '"' + (Re === j.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Re] + "</option>").join("") + "</select></div></div>" + Ge + "</div>";
    const Ee = (Re) => J.querySelector("[data-f=" + Re + "]"), Se = () => {
      const Re = Ee("global").checked;
      Ee("dur").disabled = Re, Ee("unit").disabled = Re, J.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Re);
    };
    Ee("global").addEventListener("change", Se), Se();
    const ke = () => {
      var Re;
      if (s.sheet) {
        (Re = s.onCancel) == null || Re.call(s);
        return;
      }
      Le && at(), pe = null, D();
    }, ut = () => {
      var Ct;
      if (h) {
        pt();
        return;
      }
      const Re = Ee("name").value.trim();
      if (!Re) {
        Ee("name").focus();
        return;
      }
      t.name = Re, t.group = Ee("group").value.trim() || (u ? "Rest" : "Movement");
      const ht = Ee("global").checked;
      if (t.useGlobalTiming = ht, ht || (t.duration = Math.max(u ? 5 : 1, vo(Ee("dur").value, Ee("unit").value))), s.sheet) {
        (Ct = s.onSaved) == null || Ct.call(s);
        return;
      }
      Le && (ye = null), pe = null, D(), Nt(Le ? u ? "Rest added" : "Movement added" : "Movement updated");
    }, pt = () => {
      var Xe;
      const Re = Ee("url").value.trim(), ht = xa(Re);
      if (!ht) {
        Ee("urlError").hidden = !1, Ee("url").classList.add("invalid"), Ee("url").focus();
        return;
      }
      const Ct = ht.id !== t.videoId;
      t.url = Re, t.videoId = ht.id, t.start = ht.start, t.end = ht.end, Ct && (t.videoDuration = null, t.videoError = null);
      const ot = Ee("name").value.trim();
      t.autoName = !ot, t.name = ot || (Ct ? "" : t.name) || t.videoTitle || "YouTube video", t.group = "Video", t.videoRounds = Ee("rounds").value, t.useVideoLength = Ee("global").checked, t.useVideoLength || (t.duration = Math.max(5, vo(Ee("dur").value, Ee("unit").value))), s.sheet ? (Xe = s.onSaved) == null || Xe.call(s) : (Le && (ye = null), pe = null, D(), Nt(Le ? "Video added" : "Video updated")), (Ct || !t.videoDuration || t.autoName && !t.videoTitle) && Vs(t);
    };
    if (h && Ee("url").addEventListener("input", () => {
      Ee("urlError").hidden = !0, Ee("url").classList.remove("invalid");
    }), J.querySelector("[data-a=cancel]").addEventListener("click", ke), J.querySelector("[data-a=save]").addEventListener("click", ut), s.sheet && !Le) {
      J.querySelector("[data-a=hide]").addEventListener("click", () => {
        var ht;
        return (ht = s.onHide) == null ? void 0 : ht.call(s);
      });
      const Re = J.querySelector("[data-a=remove]");
      Bi(Re, Re.querySelector(".removeFill"), 1200, () => {
        var ht;
        return (ht = s.onRemove) == null ? void 0 : ht.call(s);
      });
    }
    return J.addEventListener("keydown", (Re) => {
      Re.key === "Escape" && (Re.preventDefault(), Re.stopPropagation(), ke()), Re.key === "Enter" && Re.target.matches("input") && (Re.preventDefault(), ut());
    }), J;
  }
  function Ke(t, r) {
    const s = i(r);
    s.innerHTML = "", t.forEach((u, h) => {
      if (u === pe && !oa()) {
        s.appendChild(ze(u, h));
        return;
      }
      const S = document.createElement("div");
      S.className = "moveRow" + (u.hidden ? " hidden" : "") + (u.kind === "rest" ? " restItem" : "") + (u.kind === "video" ? " videoItem" : "") + (Hi(u) ? " noMeta" : ""), S.dataset.index = h, S.dataset.id = u.id;
      const P = u.kind === "rest" ? u.useGlobalTiming === !0 ? "Global timing" : en(u.duration) : u.useGlobalTiming === !1 ? en(u.duration) : "Global timing", j = u.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", se = u.kind === "video" ? u.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (u.useVideoLength === !1 ? "stops after " + en(u.duration) : Number(u.videoDuration) > 0 || Number(u.end) > 0 ? Ft($t(u)) : "plays to the end") + (u.videoRounds === "first" ? " · first round only" : u.videoRounds === "last" ? " · last round only" : "") : u.group + " · " + P, de = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Ie(u.name) + '. Drag, or use the up and down arrow keys">' + F + "</button>", ne = '<div class="moveText"><div class="moveItemName">' + Ie(u.name) + j + '</div><div class="moveMeta">' + Ie(se) + "</div></div>", J = (Ee) => Ee.addEventListener("keydown", (Se) => {
        var pt, Re;
        if (Se.key !== "ArrowUp" && Se.key !== "ArrowDown") return;
        Se.preventDefault();
        const ke = t.indexOf(u), ut = ke + (Se.key === "ArrowUp" ? -1 : 1);
        ut < 0 || ut >= t.length || (t.splice(ke, 1), t.splice(ut, 0, u), D(), (Re = (pt = i(r).children[ut]) == null ? void 0 : pt.querySelector(".dragHandle")) == null || Re.focus());
      });
      if (oa()) {
        S.classList.add("phoneRow"), S.tabIndex = 0, S.setAttribute("role", "button"), S.setAttribute("aria-label", "Edit " + (u.name || "step")), S.innerHTML = de + ne + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Ee = S.querySelector(".dragHandle");
        Ee.addEventListener("pointerdown", (Se) => $e(Se, S, s, t)), J(Ee), S.addEventListener("click", (Se) => {
          Se.target.closest(".dragHandle") || Ar(u, t);
        }), S.addEventListener("keydown", (Se) => {
          Se.key === "Enter" && Se.target === S && (Se.preventDefault(), Ar(u, t));
        }), s.appendChild(S);
        return;
      }
      S.innerHTML = de + ne + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Ie(u.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (u.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Ie(u.name) + '"><span class="removeFill"></span><span class="removeLabel">' + U + "</span></button></div>", S.querySelector(".editBtn").addEventListener("click", () => {
        at(), pe = u, D(), Fe();
      }), S.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        u.hidden = !u.hidden, D();
      });
      const Le = S.querySelector(".removeBtn");
      Bi(Le, Le.querySelector(".removeFill"), 1200, () => {
        const Ee = t.indexOf(u);
        Ee < 0 || (t.splice(Ee, 1), D(), Nt("Removed " + u.name, { label: "Undo", run: () => {
          t.splice(Math.min(Ee, t.length), 0, u), D();
        } }));
      });
      const Ge = S.querySelector(".dragHandle");
      Ge.addEventListener("pointerdown", (Ee) => $e(Ee, S, s, t)), J(Ge), s.appendChild(S);
    });
  }
  const je = () => {
    var t;
    return (t = window.matchMedia) == null ? void 0 : t.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, De = (t) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, t);
    } catch {
    }
  };
  function $e(t, r, s, u) {
    if (t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const h = t.currentTarget, S = t.pointerId, P = !je();
    try {
      h.setPointerCapture(S);
    } catch {
    }
    const j = r.closest(".exerciseScroller") || on(r), se = s.style.position;
    s.style.position = "relative";
    const de = [...s.children].filter((rt) => rt.classList.contains("moveRow")), ne = de.indexOf(r), J = parseFloat(getComputedStyle(s).rowGap) || 8, Le = r.offsetHeight, Ge = Le + J, Ee = de.map((rt) => rt.offsetTop), Se = de.map((rt) => rt.offsetHeight), ke = () => s.getBoundingClientRect().top, ut = s.getBoundingClientRect().width, pt = t.clientY - (ke() + Ee[ne]), Re = t.clientX;
    let ht = t.clientY, Ct = t.clientX, ot = ke() + Ee[ne], Xe = 0, an = 0, yn = 0, Ht = 1, oi = 0, Me = ne, it = !1, ln = 0, dn = !1, sl = !1, wr = Ee[ne];
    s.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", De(8);
    const ll = () => {
      const rt = ht - pt + Le / 2 - ke();
      let xt = 0;
      return de.forEach((Bt, Kn) => {
        Kn !== ne && rt > Ee[Kn] + Se[Kn] / 2 && xt++;
      }), xt;
    }, dl = () => {
      de.forEach((rt, xt) => {
        if (xt === ne) return;
        const Bt = ne < Me && xt > ne && xt <= Me ? -Ge : ne > Me && xt >= Me && xt < ne ? Ge : 0;
        rt.style.transform = Bt ? "translateY(" + Bt + "px)" : "";
      });
    }, ps = () => {
      const rt = s.getBoundingClientRect(), xt = Math.abs(Ct - Re) > Math.max(80, ut * 0.3) || Ct < rt.left - 24 || Ct > rt.right + 24;
      xt !== it && (it = xt, r.classList.toggle("willReturn", xt), De(xt ? 10 : 4));
      const Bt = it ? ne : ll();
      Bt !== Me && (Me = Bt, dl(), it || De(4));
    }, ii = () => {
      if (Me === ne) return Ee[ne];
      const rt = de.filter((Bt, Kn) => Kn !== ne);
      let xt = Ee[0];
      for (let Bt = 0; Bt < Me; Bt++) xt += rt[Bt].offsetHeight + J;
      return xt;
    }, xr = () => {
      const rt = P ? Math.min(Math.abs(Xe) / 40, 1) : 0, xt = P && !dn ? Math.max(-3, Math.min(3, yn * 0.6)) : 0;
      r.style.transform = "translate(" + an.toFixed(2) + "px," + (ot - (ke() + Ee[ne])).toFixed(2) + "px) rotate(" + xt.toFixed(2) + "deg) scale(" + (Ht * (1 - 0.04 * rt)).toFixed(4) + "," + (Ht * (1 + 0.06 * rt)).toFixed(4) + ")";
    }, et = () => {
      ln = requestAnimationFrame(et);
      const rt = Ct - Re, xt = dn ? ke() + wr : ht - pt, Bt = dn ? 0 : it ? rt * 0.9 : Math.max(-22, Math.min(22, rt * 0.22)), Kn = dn ? 1 : it ? 0.97 : 1.035;
      if (!P) {
        ot = xt, an = dn ? 0 : Bt, Ht = 1, xr(), dn && qt();
        return;
      }
      const Mu = dn ? 0.24 : 0.2, Su = dn ? 0.62 : 0.68;
      Xe = (Xe + (xt - ot) * Mu) * Su, ot += Xe, yn = (yn + (Bt - an) * 0.16) * 0.7, an += yn, oi = (oi + (Kn - Ht) * 0.22) * 0.6, Ht += oi, xr(), dn && Math.abs(Xe) < 0.15 && Math.abs(xt - ot) < 0.5 && Math.abs(an) < 0.5 && Math.abs(Ht - 1) < 3e-3 && qt();
    }, _t = setInterval(() => {
      if (!j || dn) return;
      const rt = j.getBoundingClientRect(), xt = 56, Bt = ht < rt.top + xt ? -10 : ht > rt.bottom - xt ? 10 : 0;
      Bt && (j.scrollTop += Bt, ps());
    }, 30);
    function qt() {
      if (sl) return;
      sl = !0, cancelAnimationFrame(ln);
      const rt = Me !== ne, xt = r.dataset.id;
      if (s.classList.remove("reordering"), de.forEach((Kn) => {
        Kn.style.transition = "none", Kn.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), s.style.position = se, rt) {
        const [Kn] = u.splice(ne, 1);
        u.splice(Me, 0, Kn);
      }
      D();
      const Bt = xt && s.querySelector('.moveRow[data-id="' + xt + '"]');
      Bt && P && Bt.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), rt && Nt("Order saved");
    }
    const cn = (rt) => {
      if (rt.pointerId === S) {
        if (rt.pointerType === "mouse" && rt.buttons === 0) {
          va();
          return;
        }
        ht = rt.clientY, Ct = rt.clientX, ps();
      }
    }, Zn = (rt) => {
      rt.pointerId === S && va();
    };
    function va() {
      dn || (window.removeEventListener("pointermove", cn, !0), window.removeEventListener("pointerup", Zn, !0), window.removeEventListener("pointercancel", Zn, !0), h.removeEventListener("lostpointercapture", va), clearInterval(_t), it && Me !== ne && (Me = ne, dl()), wr = ii(), dn = !0, De(6), setTimeout(qt, 800));
    }
    window.addEventListener("pointermove", cn, !0), window.addEventListener("pointerup", Zn, !0), window.addEventListener("pointercancel", Zn, !0), h.addEventListener("lostpointercapture", va), ln = requestAnimationFrame(et), xr();
  }
  function Pe() {
    var h, S, P, j;
    const t = Ue[mt], r = (h = i("warmupList")) == null ? void 0 : h.closest("section"), s = (S = i("cooldownList")) == null ? void 0 : S.closest("section"), u = (j = (P = i("strengthList")) == null ? void 0 : P.closest("section")) == null ? void 0 : j.querySelector(".sectionTitle");
    t != null && t.customSequence ? (r && (r.hidden = !t.includeWarmup), s && (s.hidden = !t.includeCooldown), u && (u.textContent = "Move sequence")) : (r && (r.hidden = !!(t != null && t.warmupOff)), s && (s.hidden = !1), u && (u.textContent = "Kettlebell work")), Ke(Mt, "warmupList"), Ke(Je, "strengthList"), Ke(kn, "cooldownList");
  }
  function at() {
    if (!ye) return;
    const { item: t, arr: r } = ye;
    ye = null;
    const s = r.indexOf(t);
    s >= 0 && r.splice(s, 1), pe === t && (pe = null);
  }
  function ct(t) {
    return t.id === "warmupList" ? { arr: Mt, kind: "warmup", group: "Warm-up" } : t.id === "cooldownList" ? { arr: kn, kind: "cooldown", group: "Cooldown" } : { arr: Je, kind: "work", group: "" };
  }
  function Rt(t, r) {
    const s = ct(r), u = Date.now().toString(36);
    return t === "video" ? { id: "video-" + u, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : t === "rest" ? { id: "rest-" + u, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(I.value) } : { id: "movement-" + u, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(C.value) };
  }
  const bt = "cubic-bezier(.34,1.46,.64,1)";
  function Jt(t, r) {
    if (je() || !t) {
      r();
      return;
    }
    const s = (S) => {
      var P;
      return ((P = S.dataset) == null ? void 0 : P.id) || S;
    }, u = () => [...t.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], h = new Map(u().map((S) => [s(S), S.getBoundingClientRect().top]));
    r(), u().forEach((S) => {
      const P = h.get(s(S));
      if (P === void 0) return;
      const j = P - S.getBoundingClientRect().top;
      Math.abs(j) < 0.5 || S.animate([{ transform: "translateY(" + j + "px)" }, { transform: "none" }], { duration: 440, easing: bt });
    });
  }
  function Sn(t, r) {
    if (!t || je()) return;
    const s = t.offsetHeight, u = Math.max(0, s - (r || 0));
    t.animate([{ clipPath: "inset(0 0 " + u + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: bt });
  }
  function zn(t, r, s, u) {
    const { arr: h } = ct(r), S = Rt(t, r);
    h.splice(Math.max(0, Math.min(s, h.length)), 0, S), ye = { item: S, arr: h }, pe = S, Jt(r.closest(".exerciseScroller,.createStepSlot") || r, () => D());
    const P = r.querySelector(".moveRow.editing");
    return Sn(P, u), Fe(t === "rest"), P;
  }
  function on(t) {
    for (let r = t; r && r.nodeType === 1; r = r.parentElement) {
      const s = getComputedStyle(r).overflowY;
      if (/(auto|scroll)/.test(s) && r.scrollHeight > r.clientHeight) return r;
    }
    return null;
  }
  const Oo = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function pa(t, r) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (t === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + F + '</span><span class="addGhostText"><strong>' + Ie(r[0]) + "</strong><small>" + Ie(r[1]) + "</small></span>", i("workoutModal").appendChild(s), s;
  }
  function Ga(t) {
    t.classList.add("leaving"), setTimeout(() => t.remove(), 180);
  }
  function pi(t, r, s, u) {
    (pe || ye) && (at(), pe = null, D());
    const h = t.getBoundingClientRect(), S = pa(r, Oo[r]);
    S.setAttribute("aria-hidden", "true"), S.style.width = h.width + "px", S.style.height = h.height + "px", S.style.transform = "translate(" + h.left + "px," + h.top + "px)", t.classList.add("lifting");
    const P = on(t);
    return fi({
      ghost: S,
      origin: h,
      sx: s,
      sy: u,
      scroller: P,
      column: t.closest(".exerciseScroller,.createFlow") || P,
      home: () => t.getBoundingClientRect(),
      onDrop: (j, se, de) => {
        Ga(S), t.classList.remove("lifting"), zn(r, j, se, de);
      },
      onReturn: () => {
        Ga(S), t.classList.remove("lifting");
      }
    });
  }
  function fi({ ghost: t, origin: r, sx: s, sy: u, scroller: h, column: S, home: P, onDrop: j, onReturn: se, rowLook: de = !1 }) {
    var xr;
    const ne = !je(), J = ((xr = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : xr.offsetHeight) || 80, Le = s - r.left, Ge = u - r.top, Ee = 44;
    let Se = s, ke = u, ut = r.left, pt = r.top, Re = 0, ht = 0, Ct = !ne, ot = null, Xe = null, an = -1, yn = 0, Ht = null;
    const oi = () => ["warmupList", "strengthList", "cooldownList"].map((et) => i(et)).filter((et) => et && et.getClientRects().length && !et.closest("[hidden]")), Me = (et) => {
      if (et === ot) return;
      ot = et, t.classList.toggle("overList", !!et || de);
      const _t = et ? et.getBoundingClientRect().width : r.width;
      t.style.width = _t + "px", t.style.height = (et ? J : r.height) + "px";
    }, it = (et) => {
      et.classList.add("leaving"), et.style.height = "0px", et.style.marginTop = "-8px", setTimeout(() => et.remove(), ne ? 320 : 0);
    }, ln = (et, _t, qt) => {
      if (Xe && Xe.parentNode === et && an === qt || (Xe && (it(Xe), Xe = null, an = -1), !et)) return;
      const cn = document.createElement("div");
      cn.className = "dropSlot", et.insertBefore(cn, _t), Xe = cn, an = qt, cn.getBoundingClientRect(), cn.style.height = J + "px", cn.style.marginTop = "0px";
    }, dn = () => {
      let et = null, _t = 1 / 0;
      for (const va of oi()) {
        const rt = va.getBoundingClientRect();
        if (Se < rt.left - 48 || Se > rt.right + 48) continue;
        const xt = rt.top - 28, Bt = rt.bottom + 28, Kn = ke < xt ? xt - ke : ke > Bt ? ke - Bt : 0;
        Kn < _t && (_t = Kn, et = va);
      }
      const qt = S == null ? void 0 : S.getBoundingClientRect(), Zn = qt && Se >= qt.left && Se <= qt.right && ke >= qt.top && ke <= qt.bottom || _t === 0 ? et : null;
      if (Zn) {
        const va = [...Zn.children].filter((xt) => xt.classList.contains("moveRow"));
        let rt = va.findIndex((xt) => {
          const Bt = xt.getBoundingClientRect();
          return ke < Bt.top + Bt.height / 2;
        });
        rt < 0 && (rt = va.length), ln(Zn, va[rt] || null, rt);
      } else ln(null);
      Me(Zn);
    }, sl = () => {
      if (Ht) return Ht.aim();
      if (ot) {
        const et = ot.getBoundingClientRect();
        let _t = ke - J / 2;
        return Xe && (_t = _t * 0.6 + Xe.getBoundingClientRect().top * 0.4), { x: et.left, y: _t };
      }
      return { x: Se - Le, y: ke - Ge };
    }, wr = (et, _t, qt, cn) => {
      t.style.transform = "translate(" + ut + "px," + pt + "px) rotate(" + et + "deg) rotate(" + _t + "rad) scale(" + qt + "," + cn + ") rotate(" + -_t + "rad)";
    }, ll = () => {
      if (yn = requestAnimationFrame(ll), !Ct) {
        const rt = Se - s, xt = ke - u, Bt = Math.min(Math.hypot(rt, xt) / Ee, 1);
        ut = r.left + rt * 0.35, pt = r.top + xt * 0.35, wr(0, Math.atan2(xt, rt), 1 + 0.155 * Bt, 1 - 0.1 * Bt);
        return;
      }
      const et = sl();
      if (!ne) {
        ut = et.x, pt = et.y, wr(0, 0, 1, 1), Ht && (cancelAnimationFrame(yn), Ht.done());
        return;
      }
      const _t = Ht ? Ht.k : 0.17, qt = Ht ? Ht.d : 0.7;
      Re = (Re + (et.x - ut) * _t) * qt, ht = (ht + (et.y - pt) * _t) * qt, ut += Re, pt += ht;
      const cn = Math.hypot(Re, ht), Zn = Math.min(cn / 48, 1), va = ot || Ht ? 0 : Math.max(-5, Math.min(5, Re * 0.32));
      wr(va, Math.atan2(ht, Re), 1 + 0.1 * Zn, 1 - 0.063 * Zn), Ht && cn < 0.15 && Math.hypot(et.x - ut, et.y - pt) < 0.6 && (cancelAnimationFrame(yn), Ht.done());
    }, dl = setInterval(() => {
      if (!h || Ht) return;
      const et = h.getBoundingClientRect(), _t = 64, qt = ke < et.top + _t ? -(et.top + _t - ke) / 4 : ke > et.bottom - _t ? (ke - (et.bottom - _t)) / 4 : 0;
      qt && (h.scrollTop += Math.max(-18, Math.min(18, qt)), dn());
    }, 30);
    yn = requestAnimationFrame(ll);
    let ps = !1;
    const ii = (et, _t) => {
      if (ps) return;
      ps = !0, cancelAnimationFrame(yn);
      const qt = Xe ? Xe.offsetHeight : J;
      !et && Xe && (Xe.remove(), Xe = null), et ? j(et, _t, qt) : se();
    };
    return {
      move(et, _t) {
        Se = et, ke = _t, !Ct && Math.hypot(Se - s, ke - u) > Ee && (Ct = !0, Re = (Se - s) * 0.085, ht = (ke - u) * 0.085), Ct && dn();
      },
      drop(et) {
        clearInterval(dl);
        const _t = ot, qt = an;
        if (!et && _t && Xe) {
          const cn = Xe;
          Ht = { k: 0.24, d: 0.62, aim: () => {
            const Zn = cn.getBoundingClientRect();
            return { x: Zn.left, y: Zn.top };
          }, done: () => ii(_t, qt) }, setTimeout(() => ii(_t, qt), 650), ne || (cancelAnimationFrame(yn), ii(_t, qt));
          return;
        }
        ln(null), Me(null), Ht = { k: 0.2, d: 0.66, aim: () => {
          const cn = P();
          return { x: cn.left, y: cn.top };
        }, done: () => ii(null) }, setTimeout(() => ii(null), 650), ne || (cancelAnimationFrame(yn), ii(null));
      }
    };
  }
  function vt(t, r) {
    let s = !1;
    t.addEventListener("click", (u) => {
      if (s) {
        s = !1, u.preventDefault();
        return;
      }
      if (oa()) {
        xs(r);
        return;
      }
      const h = i("strengthList"), S = zn(r, h, ct(h).arr.length, 0);
      S == null || S.scrollIntoView({ block: "nearest", behavior: je() ? "auto" : "smooth" });
    }), t.addEventListener("pointerdown", (u) => {
      if (u.button !== void 0 && u.button !== 0) return;
      const h = u.pointerId, S = u.clientX, P = u.clientY;
      let j = null, se = !1;
      try {
        t.setPointerCapture(h);
      } catch {
      }
      const de = (ke) => {
        if (ke.pointerId === h) {
          if (ke.pointerType === "mouse" && ke.buttons === 0) {
            Se(!1);
            return;
          }
          if (!j) {
            if (Math.hypot(ke.clientX - S, ke.clientY - P) < 6) return;
            j = pi(t, r, S, P);
          }
          j.move(ke.clientX, ke.clientY);
        }
      }, ne = (ke) => {
        ke.pointerId === h && Se(!1);
      }, J = (ke) => {
        ke.pointerId === h && Se(!0);
      }, Le = () => Se(!1), Ge = () => Se(!0), Ee = (ke) => {
        ke.key === "Escape" && j && (ke.preventDefault(), ke.stopPropagation(), Se(!0));
      };
      function Se(ke) {
        if (!se && (se = !0, window.removeEventListener("pointermove", de, !0), window.removeEventListener("pointerup", ne, !0), window.removeEventListener("pointercancel", J, !0), window.removeEventListener("keydown", Ee, !0), window.removeEventListener("blur", Ge), t.removeEventListener("lostpointercapture", Le), j)) {
          const ut = j;
          j = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), ut.drop(ke);
        }
      }
      window.addEventListener("pointermove", de, !0), window.addEventListener("pointerup", ne, !0), window.addEventListener("pointercancel", J, !0), window.addEventListener("keydown", Ee, !0), window.addEventListener("blur", Ge), t.addEventListener("lostpointercapture", Le);
    });
  }
  const jn = (jd = window.matchMedia) == null ? void 0 : jd.call(window, "(max-width: 620px)");
  function oa() {
    var t;
    return !!((t = window.matchMedia) != null && t.call(window, "(max-width: 620px)").matches);
  }
  const Pa = (t) => t.charAt(0).toUpperCase() + t.slice(1), Cn = (t) => t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "movement";
  let qo = null, At = null;
  function gn(t, r, s, u) {
    Ut(), i("sheetTitle").textContent = t;
    const h = i("sheetBody");
    h.innerHTML = "", h.appendChild(r), qo = s || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !h.contains(r)) return;
      const S = u ? h.querySelector("input[data-f=url],input[data-f=name]") : h.querySelector("button,input,select");
      S == null || S.focus({ preventScroll: !0 });
    }, je() ? 0 : 360);
  }
  function Ut() {
    const t = i("sheet");
    if (!t.classList.contains("open")) return;
    t.classList.remove("open"), i("sheetScrim").classList.remove("open"), t.setAttribute("aria-hidden", "true"), t.contains(a.activeElement) && a.activeElement.blur();
    const r = qo;
    qo = null, r == null || r(), setTimeout(Ua, 0);
  }
  i("sheetScrim").addEventListener("click", Ut), i("sheet").addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Ut());
  });
  function Ar(t, r) {
    const s = ze(t, r.indexOf(t), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Ut(), D(), Nt(Pa(Cn(t)) + " updated");
      },
      onCancel: Ut,
      onHide() {
        t.hidden = !t.hidden, Ut(), D(), Nt((t.hidden ? "Hidden: " : "Showing: ") + t.name);
      },
      onRemove() {
        Ut();
        const u = r.indexOf(t);
        u < 0 || (r.splice(u, 1), D(), Nt("Removed " + t.name, { label: "Undo", run: () => {
          r.splice(Math.min(u, r.length), 0, t), D();
        } }));
      }
    });
    gn("Edit " + Cn(t), s, null, !1);
  }
  function _r() {
    const t = document.createElement("div");
    t.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, s, u, h]) => {
      const S = document.createElement("button");
      S.type = "button", S.className = "sheetChoice", S.innerHTML = '<span class="timeIcon" aria-hidden="true">' + te(s) + "</span><span><strong>" + u + "</strong><small>" + h + "</small></span>", S.addEventListener("click", () => xs(r)), t.appendChild(S);
    }), gn("Add to the move", t, null, !1);
  }
  function xs(t) {
    At && Ia();
    const r = Rt(t, i("strengthList")), s = ze(r, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Ut(), Rl(r, t);
      },
      onCancel: Ut
    });
    gn("New " + Cn(r), s, null, !0);
  }
  const Yi = i("workoutModal").querySelector(".modalStatic"), Er = { parent: Yi.parentNode, next: Yi.nextSibling };
  function Dl() {
    const t = document.createElement("div");
    t.className = "sheetSetup", t.appendChild(Yi);
    const r = document.createElement("button");
    r.type = "button", r.className = "primary sheetDone", r.textContent = "Done", r.addEventListener("click", Ut), t.appendChild(r), gn("Setup", t, () => {
      Er.parent.insertBefore(Yi, Er.next), Dr();
    }, !1);
  }
  function Dr() {
    var r, s;
    const t = i("setupSummaryName");
    t && (t.textContent = (((r = i("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((s = Ue[mt]) == null ? void 0 : s.name) || "Move", i("setupSummaryMeta").textContent = Lt.textContent);
  }
  i("setupSummary").addEventListener("click", Dl), i("addFab").addEventListener("click", _r);
  function ys() {
    const t = i("strengthList");
    return on(t) || t.closest(".exerciseScroller");
  }
  function hi() {
    const t = i("strengthList").getBoundingClientRect(), r = (ys() || i("strengthList")).getBoundingClientRect(), s = (At == null ? void 0 : At.ghost.offsetHeight) || 64;
    return { left: t.left, top: Math.max(r.top + 12, Math.min(r.bottom - s - 96, r.top + r.height * 0.55 - s / 2)), width: t.width, height: s };
  }
  function Rl(t, r) {
    var j;
    const s = pa(r, [t.name || Oo[r][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (t.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const u = document.createElement("span");
    u.className = "addGhostActions", u.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Ie(t.name) + '">✕</button>', s.appendChild(u), At = { item: t, type: r, ghost: s };
    const h = ((j = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : j.offsetHeight) || 64;
    s.style.width = i("strengthList").getBoundingClientRect().width + "px", s.style.height = h + "px";
    const S = hi(), P = Tn.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + S.left + "px," + P + "px)", s.getBoundingClientRect(), je() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + S.left + "px," + S.top + "px)", u.querySelector("[data-a=end]").addEventListener("click", Ia), u.querySelector("[data-a=discard]").addEventListener("click", mi), s.addEventListener("pointerdown", Zi);
  }
  function Zi(t) {
    if (!At || t.target.closest("button") || t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const { item: r, ghost: s } = At, u = t.pointerId;
    try {
      s.setPointerCapture(u);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const h = s.getBoundingClientRect(), S = ys(), P = fi({
      ghost: s,
      origin: { left: h.left, top: h.top, width: h.width, height: h.height },
      sx: t.clientX,
      sy: t.clientY,
      scroller: S,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || S,
      rowLook: !0,
      home: hi,
      onDrop: (Se, ke, ut) => {
        At = null, Ga(s), ks(r, Se, ke, ut);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let j = !1;
    const se = (Se) => {
      if (Se.pointerId === u) {
        if (Se.pointerType === "mouse" && Se.buttons === 0) {
          Ee(!1);
          return;
        }
        P.move(Se.clientX, Se.clientY);
      }
    }, de = (Se) => {
      Se.pointerId === u && Ee(!1);
    }, ne = (Se) => {
      Se.pointerId === u && Ee(!0);
    }, J = () => Ee(!1), Le = () => Ee(!0), Ge = (Se) => {
      Se.key === "Escape" && (Se.preventDefault(), Ee(!0));
    };
    function Ee(Se) {
      j || (j = !0, window.removeEventListener("pointermove", se, !0), window.removeEventListener("pointerup", de, !0), window.removeEventListener("pointercancel", ne, !0), window.removeEventListener("keydown", Ge, !0), window.removeEventListener("blur", Le), s.removeEventListener("lostpointercapture", J), P.drop(Se));
    }
    window.addEventListener("pointermove", se, !0), window.addEventListener("pointerup", de, !0), window.addEventListener("pointercancel", ne, !0), window.addEventListener("keydown", Ge, !0), window.addEventListener("blur", Le), s.addEventListener("lostpointercapture", J);
  }
  function ks(t, r, s, u) {
    const h = ct(r);
    t.kind !== "rest" && t.kind !== "video" && (t.kind = h.kind, h.group && (!t.group || t.group === "Movement") && (t.group = h.group)), h.arr.splice(Math.max(0, Math.min(s, h.arr.length)), 0, t), Jt(r.closest(".exerciseScroller,.createStepSlot") || r, () => D()), Sn(r.querySelector('.moveRow[data-id="' + t.id + '"]'), u), Nt(Pa(Cn(t)) + " added");
  }
  function Ia() {
    var u;
    if (!At) return;
    const { item: t, ghost: r } = At;
    At = null, Ga(r);
    const s = i("strengthList");
    ks(t, s, ct(s).arr.length, 0), (u = s.querySelector('.moveRow[data-id="' + t.id + '"]')) == null || u.scrollIntoView({ block: "nearest", behavior: je() ? "auto" : "smooth" });
  }
  function mi() {
    if (!At) return;
    const t = At.ghost;
    At = null, Ga(t), Nt("Discarded");
  }
  function Wo() {
    At && (At.ghost.remove(), At = null);
  }
  window.addEventListener("resize", () => {
    if (At != null && At.ghost.classList.contains("hovering")) {
      const t = hi();
      At.ghost.style.width = t.width + "px", At.ghost.style.transform = "translate(" + t.left + "px," + t.top + "px)";
    }
  }), (Vd = jn == null ? void 0 : jn.addEventListener) == null || Vd.call(jn, "change", () => {
    Ut(), At && !oa() && Ia(), Pe();
  });
  {
    const t = i("workoutModal").querySelector(".modal");
    t.addEventListener("scroll", () => {
      (t.scrollTop || t.scrollLeft) && (t.scrollTop = 0, t.scrollLeft = 0);
    });
  }
  function Ua() {
    const t = i("workoutModal"), r = window.visualViewport;
    if (!t.classList.contains("open") || !oa()) {
      Rr();
      return;
    }
    const s = r ? r.offsetTop : 0, u = r ? r.offsetLeft : 0, h = r ? r.width : window.innerWidth, S = r ? r.height : window.innerHeight;
    Object.assign(t.style, { right: "auto", bottom: "auto", width: h + "px", height: S + "px", top: s + "px", left: u + "px" });
    const P = t.getBoundingClientRect();
    Math.abs(P.top - s) > 0.5 && (t.style.top = 2 * s - P.top + "px"), Math.abs(P.left - u) > 0.5 && (t.style.left = 2 * u - P.left + "px");
  }
  function Rr() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((t) => i("workoutModal").style.removeProperty(t));
  }
  (Gd = window.visualViewport) == null || Gd.addEventListener("resize", Ua), (Ud = window.visualViewport) == null || Ud.addEventListener("scroll", Ua), window.addEventListener("resize", Ua), window.addEventListener("scroll", Ua, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(Ua, 250));
  function Nr() {
    Je.length > 0;
    const t = i("addMovementBtn"), r = i("addRestBtn");
    t && (t.innerHTML = F + "<span>Add movement</span>"), r && (r.innerHTML = F + "<span>Add rest</span>");
    const s = i("addVideoBtn");
    s && (s.innerHTML = F + "<span>Add video</span>");
  }
  function gi() {
    const t = i("useGlobalTiming").checked, r = i("addMovementDuration"), s = i("addMovementUnit");
    r.disabled = t, s.disabled = t, r.parentElement.style.opacity = t ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + en(C.value);
    const u = i("useGlobalRestTiming").checked, h = i("addRestDuration"), S = i("addRestUnit");
    h.disabled = u, S.disabled = u, h.parentElement.style.opacity = u ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + en(I.value);
  }
  let Br = "movement";
  function Nl(t) {
    Br = t;
    const r = i("movementFields"), s = i("restFields");
    r.hidden = t !== "movement", s.hidden = t !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), gi();
  }
  function Pr() {
    Ue[mt];
    const t = dt ? !0 : i("useGlobalTiming").checked, r = t ? Number(C.value) : vo(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), s = dt ? !0 : i("useGlobalRestTiming").checked, u = s ? Number(I.value) : vo(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (Br === "rest") {
      const h = i("addRestTitle").value.trim() || "Rest", S = i("addRestGroup").value.trim() || "Rest";
      Je.push({
        id: "rest-" + Date.now(),
        name: h,
        group: S,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, u || Number(I.value))
      }), D(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", Nt("Rest added"), dt && (V("movements"), be());
    } else {
      const h = i("addMovementInput").value.trim();
      if (!h) return;
      const S = i("addMovementGroup").value.trim() || "Movement";
      Je.push({
        id: "movement-" + Date.now(),
        name: h,
        group: S,
        kind: "work",
        hidden: !1,
        useGlobalTiming: t,
        duration: Math.max(5, r || Number(C.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", D(), i("movementCreator").hidden = !0, Nt("Movement added"), dt && (V("movements"), be());
    }
    Nr();
  }
  let Ki = null;
  function Nt(t, r) {
    const s = i("toast");
    s.innerHTML = "";
    const u = document.createElement("span");
    if (u.textContent = t, s.appendChild(u), r) {
      const h = document.createElement("button");
      h.type = "button", h.className = "toastAction", h.textContent = r.label, h.addEventListener("click", () => {
        r.run(), s.classList.remove("show", "withAction"), clearTimeout(Ki);
      }), s.appendChild(h);
    }
    s.classList.toggle("withAction", !!r), s.classList.add("show"), clearTimeout(Ki), Ki = setTimeout(() => s.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const Bl = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Pl = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Ms(t) {
    return Math.max(0, Math.min(5, Math.floor(Number(t) / 100 * 6)));
  }
  function fa(t, r) {
    return Bl[Ms(r)];
  }
  function Ss(t) {
    return Pl[Ms(t)];
  }
  function Ot(t) {
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  function ia() {
    return { morning: nt().morningTime || "08:00", evening: nt().eveningTime || "19:00" };
  }
  function vn(t) {
    const [r, s] = String(t).split(":").map(Number);
    return (r || 0) * 60 + (s || 0);
  }
  function Il(t) {
    const r = ia();
    return t.getHours() * 60 + t.getMinutes() >= vn(r.evening) ? "evening" : "morning";
  }
  function vi(t, r) {
    return lt.checkins.find((s) => s.date === t && s.slot === r);
  }
  function bi(t) {
    return !!(t && t.mood != null && t.energy != null);
  }
  function bo() {
    const t = /* @__PURE__ */ new Date(), r = Ot(t), s = Il(t), u = ia(), h = t.getHours() * 60 + t.getMinutes();
    return s === "morning" && h < vn(u.morning) || bi(vi(r, s)) ? null : s;
  }
  const Ya = i("checkinModal"), Za = i("checkinTab"), Ir = i("checkinBadge"), Ha = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function Cs(t) {
    const { input: r, fill: s } = Ha[t];
    s.style.width = r.value + "%", r.setAttribute("aria-valuetext", fa(t, r.value));
  }
  Object.keys(Ha).forEach((t) => Ha[t].input.addEventListener("input", () => Cs(t)));
  let ya = null;
  function Ts() {
    const t = ia(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes();
    return s < vn(t.morning) ? "Next check-in at " + t.morning : s < vn(t.evening) ? "Next check-in at " + t.evening : "Next check-in tomorrow at " + t.morning;
  }
  function Hr() {
    const t = ia(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes(), u = (h, S) => {
      const [P, j] = h.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (S ? 1 : 0), P, j);
    };
    return s < vn(t.morning) ? { date: u(t.morning), time: t.morning } : s < vn(t.evening) ? { date: u(t.evening), time: t.evening } : { date: u(t.morning, !0), time: t.morning };
  }
  let Fr = null, $i = null;
  function Ls() {
    if (bo()) {
      Xi(), Fa();
      return;
    }
    const t = Hr(), r = Math.max(0, Math.round((t.date - Date.now()) / 1e3)), s = Math.floor(r / 3600), u = Math.floor(r % 3600 / 60), h = r % 60;
    i("peekCountdown").textContent = s + ":" + String(u).padStart(2, "0") + ":" + String(h).padStart(2, "0"), i("peekAt").textContent = "Available at " + t.time;
  }
  function As() {
    Ls(), Za.classList.add("peek"), clearInterval($i), $i = setInterval(Ls, 1e3), clearTimeout(Fr), Fr = setTimeout(Xi, 6e3);
  }
  function Xi() {
    Za.classList.remove("peek"), clearInterval($i), clearTimeout(Fr);
  }
  function Or() {
    const t = bo();
    if (!t) {
      Za.classList.contains("peek") ? Xi() : As();
      return;
    }
    ya = { date: Ot(/* @__PURE__ */ new Date()), slot: t };
    const s = vi(ya.date, t), u = lt.checkins.find((h) => bi(h));
    Object.keys(Ha).forEach((h) => {
      Ha[h].input.value = (s == null ? void 0 : s[h]) ?? (u == null ? void 0 : u[h]) ?? 50, Cs(h);
    }), i("checkinTitle").textContent = t === "morning" ? "Morning check-in" : "Evening check-in", Ya.classList.add("open"), Ya.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Ha.mood.input.focus());
  }
  function wi() {
    Ya.classList.remove("open"), Ya.setAttribute("aria-hidden", "true"), ya && (wo = ya.date + "-" + ya.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", wo);
    } catch {
    }
    ya = null, Fa();
  }
  function xi() {
    if (!ya) return;
    if (bi(vi(ya.date, ya.slot))) {
      wi();
      return;
    }
    const { date: t, slot: r } = ya;
    let s = vi(t, r);
    s || (s = { date: t, slot: r }, lt.checkins.unshift(s), lt.checkins = lt.checkins.slice(0, 2e3)), s.mood = Number(Ha.mood.input.value), s.energy = Number(Ha.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), mn(), l.fire("checkin", { slot: r, mood: s.mood, energy: s.energy, mood_label: fa("mood", s.mood), energy_label: fa("energy", s.energy) }), Nt((r === "morning" ? "Morning" : "Evening") + " check-in saved"), wi(), zo(), yi(), oo(), Yn();
  }
  let wo = "";
  try {
    wo = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Fa() {
    const t = bo();
    Ir.hidden = !t, Za.hidden = !t, t || Xi(), Za.classList.toggle("due", !!t), Za.setAttribute("aria-label", t ? (t === "morning" ? "Morning" : "Evening") + " check-in is due" : Ts()), Za.title = t ? "Check in now" : Ts();
  }
  function Ji() {
    Fa();
    const t = bo();
    !t || Ya.classList.contains("open") || nt().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !we.home.classList.contains("active") || Tn.classList.contains("open") || wo !== Ot(/* @__PURE__ */ new Date()) + "-" + t && Or());
  }
  Za.addEventListener("click", Or), i("checkinLater").addEventListener("click", wi), i("checkinSave").addEventListener("click", xi), Ya.addEventListener("click", (t) => {
    t.target === Ya && wi();
  }), Ya.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), wi());
  }), setInterval(Ji, 3e4);
  function zo() {
    const t = Ot(/* @__PURE__ */ new Date()), r = (s) => lt.checkins.find((u) => u.date === t && u[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, u]) => {
      const h = r(s);
      i(u).textContent = h ? fa(s, h[s]) : "—";
    });
  }
  function yi() {
    const t = i("feelCard");
    if (!t) return;
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), u = [...Array(7)].map((de, ne) => {
      const J = new Date(s.getFullYear(), s.getMonth(), s.getDate() + ne), Le = Ot(J), Ge = lt.checkins.filter((Se) => Se.date === Le), Ee = (Se) => {
        const ke = Ge.map((ut) => ut[Se]).filter((ut) => ut != null);
        return ke.length ? ke.reduce((ut, pt) => ut + pt, 0) / ke.length : null;
      };
      return { d: J, key: Le, mood: Ee("mood"), energy: Ee("energy"), count: Ge.filter(bi).length, future: J > r && Le !== Ot(r) };
    }), h = (de) => {
      const ne = u.map((J) => J[de]).filter((J) => J != null);
      return ne.length ? ne.reduce((J, Le) => J + Le, 0) / ne.length : null;
    }, S = h("mood"), P = h("energy"), j = (de, ne) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + de + "</span><span>" + (ne == null ? "—" : Ie(fa("", ne))) + '</span></div><div class="feelTrack"><span style="width:' + (ne == null ? 0 : Math.max(4, ne)) + "%;background:" + (ne == null ? "transparent" : Ss(ne)) + '"></span></div></div>', se = u.filter((de) => de.mood != null && de.energy != null).sort((de, ne) => ne.mood + ne.energy - (de.mood + de.energy))[0];
    t.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (S == null ? "No check-ins yet" : Ie(fa("", (S + P) / 2))) + '</div><div class="weekCopy">' + (S == null ? "Your first check-in will appear here." : "on average this week" + (se ? " · best day " + Ie(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(se.d)) : "")) + '</div></div></div><div class="feelDays">' + u.map(
      (de) => '<div class="weekChip feelDay' + (de.future ? " future" : "") + (de.key === Ot(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Ie(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(de.d)) + "</strong>" + (de.count >= 2 ? '<span class="weekTick">' + te("check") + "</span>" : '<span class="feelDots">' + "●".repeat(de.count) + "</span>") + "</div>" + j("Mood", de.mood) + j("Energy", de.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Qi = i("upcomingCountSetting");
  Qi.addEventListener("change", () => {
    Nn = Qi.value === "all" ? "all" : Number(Qi.value), _n();
  });
  const ki = i("tempoRevealBtn"), qr = i("tempoExperiment"), ka = i("tempoQuad"), Ma = i("tempoDot"), _s = i("tempoEstimate"), Hl = i("tempoReadout");
  let jo = { x: 0.5, y: 0.5 }, Sa = !1, Mi = { total: 20, work: 45, rest: 15 };
  function er(t, r, s, u) {
    const h = Math.max(r, Math.min(s, t));
    return Math.round((h - r) / u) * u + r;
  }
  function Es(t, r) {
    const s = (t - 0.5) * 2, u = (r - 0.5) * 2, h = er(
      Mi.total + s * 5 + u * 8,
      Number(R.min),
      Number(R.max),
      Number(R.step)
    ), S = er(
      Mi.work + s * 10 + u * 8,
      Number(C.min),
      Number(C.max),
      Number(C.step)
    ), P = er(
      Mi.rest + s * 6 + u * 6,
      Number(I.min),
      Number(I.max),
      Number(I.step)
    );
    return R.value = h, C.value = S, I.value = P, z.textContent = S + " sec", re.textContent = P + " sec", wa(), { total: h, work: S, rest: P };
  }
  function tr(t, r) {
    const s = t < 0.34 ? "Low" : t > 0.66 ? "Hard" : "Medium", u = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", h = Es(t, r);
    Hl.textContent = s + " + " + u, _s.textContent = h.total + " min", ka.setAttribute("aria-valuetext", s + " and " + u + ", estimated " + h.total + " minutes");
  }
  function nr(t) {
    const r = ka.getBoundingClientRect(), s = Math.max(0, Math.min(1, (t.clientX - r.left) / r.width)), u = Math.max(0, Math.min(1, (t.clientY - r.top) / r.height));
    jo = { x: s, y: u }, Ma.style.left = s * 100 + "%", Ma.style.top = u * 100 + "%", tr(s, u);
  }
  ki.addEventListener("click", () => {
    const t = qr.hidden;
    qr.hidden = !t, ki.setAttribute("aria-expanded", t ? "true" : "false"), ki.textContent = t ? "Now close this" : "Don’t try this!", t && (Mi = {
      total: Number(R.value),
      work: Number(C.value),
      rest: Number(I.value)
    }, jo = { x: 0.5, y: 0.5 }, Ma.style.left = "50%", Ma.style.top = "50%", tr(jo.x, jo.y));
  }), a.querySelectorAll("[data-feedback-rating]").forEach((t) => t.addEventListener("click", () => {
    Number(t.dataset.feedbackRating), a.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === t));
  }));
  const ar = i("testingFeedbackForm"), Ds = i("testingFeedbackThanks"), Fl = i("testingFeedbackAgain");
  ar.addEventListener("submit", (t) => {
    t.preventDefault(), ar.hidden = !0, Ds.hidden = !1, Nt("Feedback captured for prototype");
  }), Fl.addEventListener("click", (t) => {
    t.preventDefault(), ar.reset(), a.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), Ds.hidden = !0, ar.hidden = !1;
  }), ka.addEventListener("pointerdown", (t) => {
    var r;
    Sa = !0, nr(t);
    try {
      (r = ka.setPointerCapture) == null || r.call(ka, t.pointerId);
    } catch {
    }
  }), ka.addEventListener("pointermove", (t) => {
    Sa && nr(t);
  }), ka.addEventListener("pointerup", (t) => {
    Sa && (Sa = !1, nr(t), D());
  }), ka.addEventListener("pointercancel", () => Sa = !1), ka.addEventListener("keydown", (t) => {
    let { x: r, y: s } = jo, u = !0;
    t.key === "ArrowLeft" ? r -= 0.05 : t.key === "ArrowRight" ? r += 0.05 : t.key === "ArrowUp" ? s -= 0.05 : t.key === "ArrowDown" ? s += 0.05 : u = !1, u && (t.preventDefault(), r = Math.max(0, Math.min(1, r)), s = Math.max(0, Math.min(1, s)), jo = { x: r, y: s }, Ma.style.left = r * 100 + "%", Ma.style.top = s * 100 + "%", tr(r, s), D());
  });
  const Tn = i("workoutModal");
  let Ka = null;
  function xo(t) {
    return t.map((r) => ({ ...r }));
  }
  function Wr() {
    const t = Ue[mt];
    return {
      key: mt,
      profile: t ? JSON.parse(JSON.stringify(t)) : null,
      warmup: xo(Mt),
      strength: xo(Je),
      cooldown: xo(kn),
      total: Number(R.value),
      work: Number(C.value),
      rest: Number(I.value),
      rounds: Number(tt.value) || 1
    };
  }
  function zr(t = !1) {
    dt = !!t, pe = null, ye = null, Ut(), Wo(), Ka = Wr(), i("moveEditorTitle").textContent = dt ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !dt, i("warmupRow").hidden = dt, i("deleteMoveOpen").hidden = dt;
    const r = i("createMoveOptions");
    r.hidden = !dt;
    {
      const s = Ue[mt];
      i("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), i("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (Rs(), dt) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const s = Ue[mt];
      ci((s == null ? void 0 : s.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, Nl("movement"), Nr(), gi(), qr.hidden = !0, ki.setAttribute("aria-expanded", "false"), ki.textContent = "Don’t try this!", Tn.classList.toggle("createMode", dt), Tn.querySelector(".modal").classList.toggle("createMode", dt), Tn.classList.add("open"), Tn.setAttribute("aria-hidden", "false"), Ua(), dt && Ae();
  }
  function Ol() {
    const t = Ue[mt];
    return t != null && t.customSequence ? !!t.includeWarmup : !(t != null && t.warmupOff);
  }
  function Rs() {
    const t = Ol(), r = i("warmupSwitch");
    r.classList.toggle("on", t), r.setAttribute("aria-checked", String(t));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const t = Ue[mt];
    t && (t.customSequence ? (i("includeWarmupPreset").checked = !t.includeWarmup, Ba()) : (t.warmupOff = !t.warmupOff, D()), Rs());
  });
  function Si() {
    Ut(), Wo(), Rr(), ye = null, pe = null, Tn.classList.contains("createMode") && y(), Tn.classList.remove("createMode"), Tn.querySelector(".modal").classList.remove("createMode"), Tn.classList.remove("open"), Tn.setAttribute("aria-hidden", "true");
  }
  function Ns() {
    if (!Ka) return;
    const t = Ka;
    t.profile && (Ue[t.key] = JSON.parse(JSON.stringify(t.profile))), mt = t.key, Mt = xo(t.warmup), Je = xo(t.strength), kn = xo(t.cooldown), R.value = t.total, C.value = t.work, I.value = t.rest, tt.value = t.rounds || 1;
    const r = Ue[mt];
    if (r) {
      a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === mt));
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const u = s.querySelector(".workoutName");
        u && (u.textContent = r.name);
        const h = s.querySelector(".panelCollapsedText");
        h && (h.textContent = r.name);
        const S = s.querySelector(".sourceTag");
        S && (S.textContent = r.source);
      }
      m.value = r.name;
    }
    D();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (dt) {
      const t = mt;
      delete Ue[t], dt = !1, wt = null, Wn(lt.order.find((r) => Ue[r]) || Object.keys(Ue)[0]);
    } else
      Ns();
    Si();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    Ut(), At && Ia();
    const t = Ue[mt], r = m.value.trim() || "New move";
    if (t && (t.name = r), at(), pe = null, D(), dt && t)
      Fo(mt, t), a.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === mt)), dt = !1, wt = null, lt.order.includes(mt) || lt.order.push(mt), Nt("Move created");
    else {
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const u = s.querySelector(".workoutName");
        u && (u.textContent = r);
        const h = s.querySelector(".panelCollapsedText");
        h && (h.textContent = r);
      }
      Nt("Move saved");
    }
    Ka = null, Si(), mn();
  }), Tn.addEventListener("click", (t) => {
    if (t.target === Tn) {
      if (dt) {
        const r = mt;
        delete Ue[r], dt = !1, wt = null, Wn(lt.order.find((s) => Ue[s]) || Object.keys(Ue)[0]);
      } else
        Ns();
      Si();
    }
  }), vt(i("addMovementBtn"), "movement"), vt(i("addRestBtn"), "rest"), vt(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", gi), i("useGlobalRestTiming").addEventListener("change", gi), a.querySelectorAll(".createPresetBtn").forEach((t) => t.addEventListener("click", () => {
    ci(t.dataset.movePreset, !0), D();
  })), i("includeWarmupPreset").addEventListener("change", Ba), i("includeCooldownPreset").addEventListener("change", Ba), i("includeWarmupPreset").addEventListener("change", be), i("includeCooldownPreset").addEventListener("change", be), m.addEventListener("input", be), m.addEventListener("input", Dr), i("confirmAddMovement").addEventListener("click", Pr), i("confirmAddRest").addEventListener("click", Pr), i("addMovementInput").addEventListener("keydown", (t) => {
    t.key === "Enter" && Pr();
  });
  const $a = i("countdown"), Yt = i("countNum"), Oa = i("countdownPixelCanvas");
  let Ci = null, Vo = "appear";
  class yo {
    constructor(r, s, u, h, S, P, j) {
      this.width = r.width, this.height = r.height, this.ctx = s, this.x = u, this.y = h, this.color = S, this.speed = (Math.random() * 0.8 + 0.1) * P, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = j, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let ko = [], Bs = 1, Ps = 1;
  function Mo() {
    const t = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(t) && t > 0 ? t : 1;
  }
  function ql() {
    var de;
    if (!Oa) return;
    const t = Mo(), r = Math.max(1, window.innerWidth / t), s = Math.max(1, window.innerHeight / t);
    Bs = r, Ps = s;
    const u = Math.min(window.devicePixelRatio || 1, 2);
    Oa.width = Math.floor(r * u), Oa.height = Math.floor(s * u), Oa.style.width = r + "px", Oa.style.height = s + "px";
    const h = Oa.getContext("2d");
    h.setTransform(u, 0, 0, u, 0, 0);
    const S = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], P = 12, j = (de = window.matchMedia) == null ? void 0 : de.call(window, "(prefers-reduced-motion: reduce)").matches, se = j ? 0 : 0.055;
    ko = [];
    for (let ne = 0; ne < r; ne += P)
      for (let J = 0; J < s; J += P) {
        const Le = ne - r / 2, Ge = J - s / 2, Ee = Math.sqrt(Le * Le + Ge * Ge), Se = j ? 0 : Math.random() * 75 + Ee * 0.05, ke = new yo({ width: r, height: s }, h, ne, J, S[Math.floor(Math.random() * S.length)], se, Se);
        ke.maxSizeInteger = 4, ke.maxSize = Math.random() * 3.2 + 0.8, ke.sizeStep = 0.35 + Math.random() * 0.45, ko.push(ke);
      }
  }
  function Is(t) {
    cancelAnimationFrame(Ci), Vo = t;
    const r = Oa == null ? void 0 : Oa.getContext("2d");
    if (!r) return;
    function s() {
      r.clearRect(0, 0, Bs, Ps);
      let u = !0;
      ko.forEach((h) => {
        h[Vo](), h.isIdle || (u = !1);
      }), Vo === "disappear" && u || (Ci = requestAnimationFrame(s));
    }
    Ci = requestAnimationFrame(s);
  }
  function or() {
    cancelAnimationFrame(Ci), ql(), Is("appear"), setTimeout(() => Is("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    $a.classList.contains("active") && or();
  });
  const Xa = i("pixelTrailCanvas"), Ln = Xa.getContext("2d");
  let qa = !0, Go = 0.7, tn = 600, St = [], An = null, Ca = { x: 0, y: 0, ready: !1 };
  function Ja() {
    const t = c.getBoundingClientRect(), r = Mo(), s = Math.min(window.devicePixelRatio || 1, 2), u = Math.max(1, t.width / r), h = Math.max(1, t.height / r);
    Xa.width = Math.max(1, Math.floor(u * s)), Xa.height = Math.max(1, Math.floor(h * s)), Xa.style.width = u + "px", Xa.style.height = h + "px", Ln.setTransform(s, 0, 0, s, 0, 0);
  }
  function ir(t, r) {
    if (!qa) return;
    const s = performance.now();
    Ca.ready || (Ca = { x: t, y: r, ready: !0 });
    const u = 7;
    for (let h = 1; h <= u; h++) {
      const S = h / u;
      St.push({
        x: Ca.x + (t - Ca.x) * S,
        y: Ca.y + (r - Ca.y) * S,
        born: s - (u - h) * 10
      });
    }
    Ca = { x: t, y: r, ready: !0 };
  }
  function ha(t) {
    if (An = null, !g) return;
    if (!we.workout.classList.contains("active")) {
      An = requestAnimationFrame(ha);
      return;
    }
    const r = c.getBoundingClientRect(), s = Mo();
    Ln.clearRect(0, 0, r.width / s, r.height / s), qa && (St = St.filter((h) => t - h.born < tn), Ln.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", St.forEach((h) => {
      const S = (t - h.born) / tn, P = (1 - S) * Go, j = Math.round(h.x / 14) * 14, se = Math.round(h.y / 14) * 14;
      Ln.globalAlpha = Math.max(0, P);
      const de = 2 + 5 * (1 - S) * Go;
      Ln.fillRect(j - de / 2, se - de / 2, de, de);
    }), Ln.globalAlpha = 1), An = requestAnimationFrame(ha);
  }
  c.addEventListener("pointermove", (t) => {
    const r = c.getBoundingClientRect(), s = Mo();
    ir((t.clientX - r.left) / s, (t.clientY - r.top) / s);
  }), c.addEventListener("pointerleave", () => Ca.ready = !1), new ResizeObserver(Ja).observe(c), Ja(), An = requestAnimationFrame(ha);
  const Vn = i("movementRippleCanvas"), ra = Vn.getContext("2d");
  let Et = !0, Wa = null, Ti = performance.now();
  function jr() {
    const t = Vn.parentElement.getBoundingClientRect(), r = Mo(), s = Math.max(1, t.width / r), u = Math.max(1, t.height / r), h = Math.min(window.devicePixelRatio || 1, 2);
    Vn.width = Math.max(1, Math.floor(s * h)), Vn.height = Math.max(1, Math.floor(u * h)), Vn.style.width = s + "px", Vn.style.height = u + "px", ra.setTransform(h, 0, 0, h, 0, 0);
  }
  function Vr() {
    var t;
    return Vt || ((t = Be[He]) == null ? void 0 : t.kind) === "rest";
  }
  function Hs() {
    const t = Be[He];
    return Vr() ? 2200 : t ? t.kind === "warmup" || t.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Li(t) {
    if (Wa = null, !g) return;
    if (!we.workout.classList.contains("active")) {
      Wa = requestAnimationFrame(Li);
      return;
    }
    const r = Vn.parentElement.getBoundingClientRect(), s = Mo(), u = Math.max(1, r.width / s), h = Math.max(1, r.height / s);
    if (ra.clearRect(0, 0, u, h), Et) {
      const S = Hs(), P = (t - Ti) % S / S, j = 15, se = Math.max(8, Math.round(j * h / Math.max(1, u))), de = u / (j + 1), ne = h / (se + 1), J = u * 0.5, Le = h * 0.52, Ge = Math.hypot(J, Le), Se = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let ke = 1; ke <= se; ke++)
        for (let ut = 1; ut <= j; ut++) {
          const pt = ut * de, Re = ke * ne, ht = Math.hypot(pt - J, Re - Le) / Ge, Ct = Vr(), ot = Ct ? Math.exp(-Math.pow((ht - (P * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, Xe = Math.exp(-Math.pow((ht - P * 1.25) * 7, 2)), an = Ct ? ot : Xe, yn = Ct ? 0.5 + 0.5 * Math.sin(P * Math.PI * 2 - ht * 3) ** 2 : 0.35 + 0.65 * Math.sin(P * Math.PI * 2 - ht * 5) ** 2, Ht = Ct ? 1.4 + an * 4.2 * yn : 1.2 + an * 5 * yn;
          ra.beginPath(), ra.arc(pt, Re, Ht, 0, Math.PI * 2), ra.fillStyle = `rgba(${Se},${Ct ? 0.08 + an * 0.48 : 0.05 + an * 0.55})`, ra.fill();
        }
    }
    Wa = requestAnimationFrame(Li);
  }
  new ResizeObserver(jr).observe(Vn.parentElement), jr(), Wa = requestAnimationFrame(Li);
  const Ai = i("exerciseTitle"), Ta = i("exerciseMeta"), Qa = i("stepLabel"), wn = i("digits"), _i = i("fill"), So = i("progress"), rr = i("pause"), Gr = i("nextName"), Ur = i("nextMeta"), Wl = i("nextIcon"), sa = i("skipNextSession");
  let nn = null;
  function Gn(t) {
    for (let r = Math.max(0, t); r < Be.length; r++)
      if (!Be[r].sessionHidden) return r;
    return -1;
  }
  function Yr() {
    const t = Be[He];
    if (!t) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Vt) {
      const u = Gn(He + 1), h = u >= 0 ? Be[u] : null;
      return h ? { name: h.name, meta: Kr(h), icon: sr(h) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (t.rest > 0) return { name: "Rest", meta: t.rest + " sec · " + (t.roundBreakAfter ? "round " + (t.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = Gn(He + 1), s = r >= 0 ? Be[r] : null;
    return s ? { name: s.name, meta: Kr(s), icon: sr(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Zr() {
    if (!Be[He]) return Be.length;
    const r = Gn(He + 1);
    return r < 0 ? Be.length : r + 1;
  }
  function sr(t) {
    return t.kind === "video" ? "play" : "clock";
  }
  function Kr(t) {
    return t.kind === "video" ? "YouTube · " + Ft(t.duration) : t.group + " · " + t.duration + " sec";
  }
  function lr() {
    return Be.length && Be[Be.length - 1].round || 1;
  }
  function dr(t) {
    const r = Be[t];
    if (!r) return "";
    const s = lr();
    if (s <= 1) return "Step " + (t + 1) + " of " + Be.length;
    if (r.roundBreak) return "Round " + r.round + " of " + s + " · Rest";
    const u = Be.filter((h) => h.round === r.round && !h.roundBreak).length;
    return "Round " + r.round + " of " + s + " · Step " + (r.roundIndex + 1) + " of " + u;
  }
  function la() {
    return So.querySelector('[data-step="' + He + '"]');
  }
  function zl() {
    Be[He] && Number(So.dataset.round) !== (Be[He].round || 1) && Ei(), [...So.children].forEach((t) => {
      const r = Number(t.dataset.step);
      t.classList.toggle("done", r < He), t.classList.toggle("active", r === He), t.classList.toggle("rewindable", r <= He), t.disabled = r > He, r === He && t.style.setProperty("--segment-progress", "0%");
    }), Be[He] && (Qa.textContent = dr(He), To());
  }
  function jl(t) {
    const r = Be.indexOf(t);
    r < 0 || r <= He || (t.sessionHidden = !t.sessionHidden, La(), Nt((t.sessionHidden ? "Hidden " : "Included ") + t.name + " for this session"));
  }
  function _n() {
    const t = i("upcomingList");
    if (!t) return;
    t.innerHTML = "";
    const r = Zr(), s = Be.slice(r);
    (Nn === "all" ? s : s.slice(0, Math.max(1, Number(Nn) || 1))).forEach((h) => {
      const S = document.createElement("section");
      S.className = "upcomingCard" + (h.sessionHidden ? " sessionHidden" : "") + (Hi(h) ? " noMeta" : ""), S.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + te(sr(h)) + '</div><div><div class="upcomingName">' + Ie(h.name) + '</div><div class="upcomingMeta">' + Ie(Kr(h)) + (lr() > 1 ? " · round " + h.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (h.sessionHidden ? "Include this session" : "Skip this session") + "</button>", S.querySelector(".skipSessionBtn").addEventListener("click", () => jl(h)), t.appendChild(S);
    });
  }
  function La() {
    var r;
    const t = Yr();
    Gr.textContent = t.name, Ur.textContent = t.meta, Wl.innerHTML = te(t.icon);
    {
      const s = Vt ? Be[Gn(He + 1)] : ((r = Be[He]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : Be[Gn(He + 1)];
      a.querySelector(".nextCard").classList.toggle("noMeta", !!(s && Hi(s)));
    }
    if (nn = null, Vt) {
      const s = Gn(He + 1);
      s >= 0 && (nn = Be[s]);
    } else {
      const s = Be[He];
      if (s && s.rest > 0)
        nn = null;
      else {
        const u = Gn(He + 1);
        u >= 0 && (nn = Be[u]);
      }
    }
    sa && (sa.hidden = !nn, sa.textContent = nn != null && nn.sessionHidden ? "Include this session" : "Skip this session"), _n();
  }
  sa.addEventListener("click", () => {
    nn && (nn.sessionHidden = !nn.sessionHidden, Nt((nn.sessionHidden ? "Hidden " : "Included ") + nn.name + " for this session"), La());
  });
  let Pn = null, eo = null;
  function Uo(t, r = {}) {
    const s = Ue[mt];
    l.fire(t, { move: (s == null ? void 0 : s.name) || "", move_id: mt, ...r });
  }
  function $r() {
    const t = Ue[mt];
    Pn = { key: mt, name: (t == null ? void 0 : t.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(eo), eo = setInterval(() => {
      Pn && !Mn && Pn.active++;
    }, 1e3), Uo("started", { steps: Be.length });
  }
  function Fs(t) {
    if (clearInterval(eo), !Pn) return;
    const r = Pn;
    Pn = null, Uo(t ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (lt.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: t }), lt.history = lt.history.slice(0, 1e3), mn(), oo(), Yn());
  }
  function Os() {
    M("workout"), cr();
    const t = Gn(0);
    t >= 0 && Be[t].kind === "video" && Co(Be[t]);
  }
  function Yo() {
    Ri(), Fs(!1), clearInterval(Pt), clearInterval(Va), Vt = !1, ma(!1), i("app").classList.remove("resting"), $a.classList.remove("active"), M("home");
  }
  function cr() {
    $a.classList.add("active");
    let t = 5;
    Yt.textContent = t, requestAnimationFrame(or), clearInterval(Va), Va = setInterval(() => {
      t--, t > 0 ? (Yt.textContent = t, or()) : (clearInterval(Va), Yt.textContent = "GO", or(), setTimeout(() => {
        $a.classList.remove("active"), cancelAnimationFrame(Ci), Xr();
      }, 650));
    }, 1e3);
  }
  function Ei() {
    var r;
    So.innerHTML = "";
    const t = ((r = Be[Math.max(0, He)] || Be[0]) == null ? void 0 : r.round) || 1;
    So.dataset.round = t, Be.forEach((s, u) => {
      if ((s.round || 1) !== t) return;
      const h = document.createElement("button");
      h.dataset.step = u, h.type = "button", h.className = "progressSegment", h.setAttribute("aria-label", "Go to " + s.name), h.addEventListener("click", () => {
        u <= He && qs(u);
      }), So.appendChild(h);
    });
  }
  function ma(t) {
    t = !!t;
    const r = Mn !== t;
    if (Mn = t, rr.textContent = t ? "Resume" : "Pause", i("app").classList.toggle("paused", t), xn && ft)
      try {
        t ? ft.pauseVideo() : ft.playVideo();
      } catch {
      }
    r && Pn && Uo(t ? "paused" : "resumed");
  }
  function qs(t) {
    t < 0 || t >= Be.length || t > He || (clearInterval(Pt), Vt = !1, i("app").classList.remove("resting"), He = t, ma(!1), no(), Pt = setInterval(ao, 1e3));
  }
  function Xr() {
    if (He = Gn(0), ma(!1), Ei(), He < 0) {
      Ai.textContent = "No activities", Ta.textContent = "Open Edit and enable or add a movement", Ta.hidden = !1;
      return;
    }
    $r(), no(), clearInterval(Pt), Pt = setInterval(ao, 1e3);
  }
  const Di = i("videoStage"), Zo = i("videoSound"), Vl = 0, Ko = 1, Dt = 2;
  let ga = 0, In = null, Hn = null, ft = null, Fn = null, $o = 0, to = !1, xn = null, Jr = null;
  function Qr() {
    var t;
    return (t = window.YT) != null && t.Player ? Promise.resolve(window.YT) : In || (In = new Promise((r, s) => {
      const u = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          u == null || u();
        } catch {
        }
      };
      const h = setInterval(() => {
        var P;
        (P = window.YT) != null && P.Player && (clearInterval(h), clearTimeout(S), r(window.YT));
      }, 100), S = setTimeout(() => {
        clearInterval(h), In = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const P = document.createElement("script");
        P.src = "https://www.youtube.com/iframe_api", P.async = !0, P.onerror = () => {
          clearInterval(h), clearTimeout(S), In = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(P);
      }
    }), In);
  }
  function rn() {
    return Hn || (Hn = Qr().then((t) => new Promise((r) => {
      const s = document.createElement("div");
      i("videoFrame").appendChild(s), ft = new t.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(ft), onStateChange: (u) => Gl(u.data), onError: (u) => Ul(u.data) }
      });
    })), Hn.catch(() => {
      Hn = null;
    }), Hn);
  }
  function Co(t) {
    !(t != null && t.videoId) || t.videoError || rn().then((r) => {
      xn || Fn === t.videoId || (Fn = t.videoId, $o = Number(t.start) || 0, to = !1, r.mute(), r.loadVideoById({ videoId: t.videoId, startSeconds: $o }));
    }).catch(() => {
    });
  }
  function Ws() {
    const t = Gn(He + 1);
    t >= 0 && Be[t].kind === "video" && Co(Be[t]);
  }
  function Gl(t) {
    if (!xn) {
      t === Ko && !to && (to = !0, ft.pauseVideo(), ft.seekTo($o, !0));
      return;
    }
    Di.classList.toggle("playing", t === Ko), Be[He] === xn && performance.now() > ga && (t === Ko && Mn ? ma(!1) : t === Dt && !Mn && ma(!0)), t === Ko && En(xn.videoId, ft.getDuration()) && mn(), t === Vl && Ni();
  }
  function Ul(t) {
    const r = xn;
    if (!r) {
      Fn = null;
      return;
    }
    t === 101 || t === 150 ? (ts(r.videoId), Nt("That video can’t play outside YouTube, so it was skipped")) : Nt("The video couldn’t play, so it was skipped"), Ni();
  }
  function zs(t) {
    if (i("app").classList.add("videoStep"), Zo.hidden = !0, xn = t, clearTimeout(Jr), !t.videoId) {
      Nt("This video step has no link yet, so it was skipped"), setTimeout(() => Ni(), 0);
      return;
    }
    rn().then((r) => {
      if (xn !== t) return;
      ga = performance.now() + 1500;
      const s = Number(t.start) || 0;
      Fn !== t.videoId ? (Fn = t.videoId, $o = s, r.loadVideoById({ videoId: t.videoId, startSeconds: s })) : (r.seekTo(s, !0), r.playVideo()), r.unMute(), Mn && r.pauseVideo(), Jr = setTimeout(() => {
        xn !== t || Mn || (r.getPlayerState() !== Ko ? (r.mute(), r.playVideo(), Zo.hidden = !1) : r.isMuted() && (Zo.hidden = !1));
      }, 1600);
    }).catch(() => {
      xn === t && (Nt("YouTube didn’t load, so the video was skipped"), Ni());
    });
  }
  function es() {
    if (!i("app").classList.contains("videoStep")) return;
    const t = a.querySelector(".workGrid"), r = a.querySelector(".sessionControlRow"), s = t.getBoundingClientRect().top, u = (r == null ? void 0 : r.offsetHeight) || 42, h = window.innerHeight - s - 16 - u - 84;
    t.style.setProperty("--theater-h", Math.max(240, Math.round(h)) + "px");
  }
  window.addEventListener("resize", es);
  function Ri() {
    clearTimeout(Jr);
    const t = xn;
    if (xn = null, i("app").classList.remove("videoStep"), Di.classList.remove("playing"), Zo.hidden = !0, t && ft) {
      try {
        ft.pauseVideo();
      } catch {
      }
      Fn = null;
    }
  }
  function Ni() {
    const t = xn;
    !t || Be[He] !== t || (Ri(), clearInterval(Pt), Lo(), Pt = setInterval(ao, 1e3));
  }
  Zo.addEventListener("click", () => {
    ft && (ft.unMute(), ft.playVideo()), Zo.hidden = !0;
  });
  function Yl(t) {
    var u;
    const r = Number(t.start) || 0;
    if (t.useVideoLength === !1) return r + (Number(t.duration) || 300);
    const s = ft && xn === t && Number((u = ft.getDuration) == null ? void 0 : u.call(ft)) || 0;
    return Number(t.end) || s || Number(t.videoDuration) || r + (Number(t.duration) || 300);
  }
  function js(t, r) {
    const s = Ue[mt];
    [Mt, Je, kn, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((u) => (Array.isArray(u) ? u : []).forEach((h) => {
      h && h.kind === "video" && h.videoId === t && r(h);
    }));
  }
  function En(t, r) {
    r = Math.round(Number(r) || 0);
    let s = !1;
    return t && r > 0 && js(t, (u) => {
      u.videoDuration !== r && (u.videoDuration = r, s = !0);
    }), s;
  }
  function ts(t) {
    js(t, (r) => {
      r.videoError = "embed";
    }), mn();
  }
  function Vs(t) {
    const r = t.videoId;
    if (!r) return;
    const s = () => {
      Tn.classList.contains("open") ? pe || D() : (D(), mn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((u) => u.ok ? u.json() : Promise.reject(u.status)).then((u) => {
      t.videoId === r && (t.videoTitle = u.title || "", t.autoName && u.title && (t.name = u.title), s());
    }).catch((u) => {
      t.videoId === r && u === 401 && (t.videoError = "embed", s());
    }), Gs(r).then((u) => {
      En(r, u) && s();
    }).catch((u) => {
      u === "embed" && t.videoId === r && (t.videoError = "embed", s());
    });
  }
  function Gs(t) {
    return Qr().then((r) => new Promise((s, u) => {
      const h = document.createElement("div");
      h.className = "videoProbe", h.setAttribute("aria-hidden", "true");
      const S = document.createElement("div");
      h.appendChild(S), i("app").appendChild(h);
      let P = null, j = !1;
      const se = (J, Le) => {
        j || (j = !0, clearTimeout(de), setTimeout(() => {
          try {
            P == null || P.destroy();
          } catch {
          }
          h.remove();
        }, 0), Le ? u(Le) : s(J));
      }, de = setTimeout(() => se(0), 2e4), ne = () => {
        var Le;
        const J = Number((Le = P == null ? void 0 : P.getDuration) == null ? void 0 : Le.call(P)) || 0;
        return J > 0 && se(J), J > 0;
      };
      P = new r.Player(S, {
        width: 320,
        height: 180,
        videoId: t,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            ne() || (P.mute(), P.playVideo());
          },
          onStateChange: () => ne(),
          onError: (J) => se(0, J.data === 101 || J.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function no() {
    Vt = !1;
    const t = Be[He];
    i("app").classList.toggle("resting", t.kind === "rest"), t.kind === "video" ? zs(t) : Ri(), Kt = t.duration, Na = t.duration, Ai.textContent = t.name, Ta.textContent = t.group, Ta.hidden = !0, Qa.textContent = dr(He), Pn && Uo("step", { name: t.name, group: t.group, kind: t.kind, step: He + 1, of: Be.length, round: t.round || 1, rounds: lr(), duration: t.duration }), La(), zl(), Ws(), t.kind === "video" && setTimeout(es, 0);
  }
  function To() {
    var h;
    const t = ((h = Be[He]) == null ? void 0 : h.kind) === "video" && !Vt, r = t && Kt >= 60;
    wn.textContent = r ? Ft(Kt) : Kt, wn.classList.toggle("long", r), t && (i("videoClock").textContent = Ft(Kt) + " left");
    const s = Kt / Na * 100;
    _i.style.width = s + "%";
    const u = la();
    if (u && !Vt) {
      const S = 100 - s;
      u.style.setProperty("--segment-progress", S + "%");
    }
  }
  function ao() {
    var r, s;
    if (Mn) return;
    const t = Be[He];
    if ((t == null ? void 0 : t.kind) === "video" && !Vt && xn === t) {
      const u = Number((r = ft == null ? void 0 : ft.getCurrentTime) == null ? void 0 : r.call(ft)) || 0, h = Number(t.start) || 0, S = Yl(t);
      Na = Math.max(1, S - h), (u > h || ((s = ft == null ? void 0 : ft.getPlayerState) == null ? void 0 : s.call(ft)) === Ko) && (Kt = Math.max(0, Math.ceil(S - u))), To(), u > h && u >= S - 0.25 && Ni();
      return;
    }
    Kt--, To(), Kt <= 0 && (t.rest > 0 ? Us(t.rest) : Lo());
  }
  function Us(t) {
    var s;
    Vt = !0, i("app").classList.add("resting");
    const r = la();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(Pt), Kt = t, Na = t, Pn && Uo("rest", { duration: t }), Ai.textContent = "Rest", Ta.textContent = (s = Be[He]) != null && s.roundBreakAfter ? "Round " + (Be[He].round + 1) + " next" : "Recovery", La(), To(), Pt = setInterval(() => {
      Mn || (Kt--, To(), Kt <= 0 && (clearInterval(Pt), Lo(), Pt = setInterval(ao, 1e3)));
    }, 1e3);
  }
  function Lo() {
    Vt = !1;
    const t = Gn(He + 1);
    if (t >= 0)
      He = t, no();
    else {
      clearInterval(Pt), Ri(), ma(!1), i("app").classList.remove("resting"), Ai.textContent = "Complete", Ta.textContent = "Move finished", Ta.hidden = !1, wn.textContent = "✓";
      {
        const r = lr();
        Qa.textContent = r > 1 ? r + " rounds done" : Be.filter((s) => !s.roundBreak).length + " steps done";
      }
      Fs(!0);
      {
        const r = mr(7).reduce((s, u) => s + u.minutes, 0);
        Ta.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      _i.style.width = "100%", La();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    Ys(), ma(!1);
  });
  function Ys() {
    clearInterval(Pt);
    const t = Be[He];
    if (Vt) {
      Vt = !1, i("app").classList.remove("resting");
      const s = Gn(He + 1);
      s >= 0 ? (He = s, no(), Pt = setInterval(ao, 1e3)) : Lo();
      return;
    }
    if (t && t.rest > 0) {
      Us(t.rest);
      return;
    }
    const r = Gn(He + 1);
    r >= 0 ? (He = r, no(), Pt = setInterval(ao, 1e3)) : Lo();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(Pt), ma(!1), Vt) {
      const t = Be[He];
      Kt = t.rest, Na = t.rest, Ai.textContent = "Rest", Ta.textContent = "Recovery", i("app").classList.add("resting"), La(), To();
    } else
      no();
    Pt = setInterval(Vt ? () => {
      Mn || (Kt--, To(), Kt <= 0 && (clearInterval(Pt), Lo(), Pt = setInterval(ao, 1e3)));
    } : ao, 1e3);
  });
  function Bi(t, r, s, u) {
    let h = 0, S = null, P = !1;
    function j() {
      S && cancelAnimationFrame(S), S = null, h = 0, P = !1, r.style.width = "0%", t.classList.remove("holding");
    }
    function se(J) {
      if (!P) return;
      h || (h = J);
      const Le = Math.min(1, (J - h) / s);
      if (r.style.width = Le * 100 + "%", Le >= 1) {
        P = !1, S && cancelAnimationFrame(S), S = null, r.style.width = "100%", setTimeout(() => r.style.width = "0%", 90), u();
        return;
      }
      S = requestAnimationFrame(se);
    }
    function de(J) {
      var Le;
      if (!(J && J.button !== void 0 && J.button !== 0)) {
        J == null || J.preventDefault(), j(), P = !0, t.classList.add("holding");
        try {
          (Le = t.setPointerCapture) == null || Le.call(t, J.pointerId);
        } catch {
        }
        S = requestAnimationFrame(se);
      }
    }
    function ne() {
      P && j();
    }
    t.addEventListener("pointerdown", de), t.addEventListener("pointerup", ne), t.addEventListener("pointercancel", ne), t.addEventListener("lostpointercapture", ne), t.addEventListener("keydown", (J) => {
      (J.key === " " || J.key === "Enter") && !J.repeat && de(J);
    }), t.addEventListener("keyup", (J) => {
      (J.key === " " || J.key === "Enter") && ne();
    });
  }
  const Zs = i("endWorkout");
  Bi(Zs, i("holdEndFill"), 1500, Yo);
  const Ao = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    Ao.classList.add("open"), Ao.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    Ao.classList.remove("open"), Ao.setAttribute("aria-hidden", "true");
  });
  function Ks() {
    const t = mt, r = a.querySelector('.workoutPanel[data-workout="' + t + '"]');
    r && r.remove(), delete Ue[t], lt.order = lt.order.filter((u) => u !== t);
    let s = a.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const u = "custom-" + Date.now();
      Ue[u] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, lt.order.push(u), s = Fo(u, Ue[u]);
    }
    Ao.classList.remove("open"), Ao.setAttribute("aria-hidden", "true"), Ka = null, Si(), Wn(s.dataset.workout), mn(), Nt("Move deleted");
  }
  Bi(i("deleteMoveYes"), i("deleteMoveFill"), 1500, Ks);
  const ur = a.querySelector(".rubberTabs"), Aa = i("rubberIndicator");
  function Pi(t, r = !0) {
    if (!t || !ur || !Aa) return;
    const s = ur.getBoundingClientRect(), u = t.getBoundingClientRect();
    Aa.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const h = Mo();
    Aa.style.left = (u.left - s.left) / h + ur.scrollLeft + "px", Aa.style.width = u.width / h + "px", r && (Aa.style.transform = "scaleX(1.08)", setTimeout(() => Aa.style.transform = "scaleX(1)", 180));
  }
  a.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => {
    t.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), a.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), a.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), t.classList.add("active"), i(t.dataset.pane).classList.add("active"), Pi(t, !0);
  })), requestAnimationFrame(() => Pi(a.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Pi(a.querySelector(".tab.active"), !1));
  const Ii = i("pixelTrailToggle"), ns = i("rippleToggle"), _o = i("trailStrength"), _a = i("trailLife");
  function Un(t, r) {
    nt()[t] = r, mn();
  }
  const za = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function as(t) {
    return t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "g:" + String(t.group || "").trim().toLowerCase();
  }
  function Hi(t) {
    var r;
    return !!((r = nt().hideMeta) != null && r[as(t)]);
  }
  function Zl() {
    const t = /* @__PURE__ */ new Map(), r = (s, u, h) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const S = as(s);
      let P = t.get(S);
      P || (P = { key: S, label: S === "rest" ? "Rest" : S === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, t.set(S, P)), P.kinds.add(S === "rest" ? "Rest" : S === "video" ? "Video" : u), P.moves.add(h), P.count++;
    };
    return Object.values(Ue).forEach((s) => {
      const u = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Ze)).forEach((h) => r(h, "Warm-up", u)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((h) => r(h, h.presetRole === "warmup" ? "Warm-up" : h.presetRole === "cooldown" ? "Cooldown" : "Movement", u)), (s.cooldown || (s.customSequence ? [] : hn)).forEach((h) => r(h, "Cooldown", u));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, u]) => {
      t.has(s) || t.set(s, { key: s, label: u, kinds: /* @__PURE__ */ new Set([u]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...t.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, u) => za.indexOf(s.kind) - za.indexOf(u.kind) || s.label.localeCompare(u.label));
  }
  let sn = "all";
  function os() {
    const t = i("metaSearch").value.trim().toLowerCase();
    return Zl().filter((r) => (sn === "all" || r.kind === sn) && (!t || r.label.toLowerCase().includes(t) || r.moves.some((s) => s.toLowerCase().includes(t))));
  }
  function Xo() {
    const t = i("metaTableBody");
    if (!t) return;
    const r = nt().hideMeta || {}, s = os();
    t.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((h) => {
      const S = !r[h.key], P = h.count ? (h.moves.length > 2 ? h.moves.slice(0, 2).join(", ") + " + " + (h.moves.length - 2) + " more" : h.moves.join(", ")) + " · " + h.count + " step" + (h.count === 1 ? "" : "s") : "Not used yet", j = document.createElement("tr");
      j.className = S ? "" : "off", j.innerHTML = '<td><div class="metaType">' + Ie(h.label) + '</div><div class="metaSub">' + Ie(h.kind + " · " + P) + '</div></td><td class="metaKindCol">' + Ie(h.kind) + '</td><td class="metaUsedCol">' + Ie(P) + '</td><td class="metaSwitchCol"><button class="switch' + (S ? " on" : "") + '" type="button" role="switch" aria-checked="' + S + '" aria-label="Second line for ' + Ie(h.label) + ' on phones"></button></td>', j.querySelector(".switch").addEventListener("click", () => is([h.key], S)), t.appendChild(j);
    });
    const u = s.filter((h) => r[h.key]).length;
    i("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (u ? " · " + u + " hidden on phones" : "") : "";
  }
  function is(t, r) {
    const s = { ...nt().hideMeta || {} };
    t.forEach((u) => {
      r ? s[u] = !0 : delete s[u];
    }), Un("hideMeta", s), Xo(), Pe(), La();
  }
  i("metaSearch").addEventListener("input", Xo), i("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.addEventListener("click", () => {
    sn = t.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === t)), Xo();
  })), i("metaHideAll").addEventListener("click", () => is(os().map((t) => t.key), !0)), i("metaShowAll").addEventListener("click", () => is(os().map((t) => t.key), !1));
  const Jo = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...nt().toggles || {} };
  function $s() {
    a.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", Jo[s.dataset.toggle] !== !1)), a.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, u]) => {
      i(u).hidden = Jo[s] === !1;
    });
    const t = ["steps", "mood", "energyLevel"].some((s) => Jo[s] !== !1);
    a.querySelector(".activityCard").hidden = !t, i("weatherCard").hidden = !0;
    const r = a.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !t), r.classList.toggle("noWeather", !0);
  }
  a.querySelectorAll("[data-toggle]").forEach((t) => t.addEventListener("click", () => {
    Jo[t.dataset.toggle] = Jo[t.dataset.toggle] === !1, $s(), Un("toggles", { ...Jo });
  })), $s();
  function st() {
    Ii.classList.toggle("on", qa), ns.classList.toggle("on", Et), _o.value = Math.round(Go * 100), i("trailStrengthValue").textContent = _o.value + "%", _a.value = tn, i("trailLifeValue").textContent = _a.value + " ms";
  }
  nt().trailEnabled !== void 0 && (qa = nt().trailEnabled), nt().rippleEnabled !== void 0 && (Et = nt().rippleEnabled), nt().trailStrength !== void 0 && (Go = nt().trailStrength), nt().trailMaxAge !== void 0 && (tn = nt().trailMaxAge), st(), Ii.addEventListener("click", () => {
    qa = !qa, Ii.classList.toggle("on", qa), qa || (St = []), Un("trailEnabled", qa);
  }), ns.addEventListener("click", () => {
    Et = !Et, ns.classList.toggle("on", Et), Un("rippleEnabled", Et);
  }), _o.addEventListener("input", () => {
    Go = Number(_o.value) / 100, i("trailStrengthValue").textContent = _o.value + "%";
  }), _o.addEventListener("change", () => Un("trailStrength", Go)), _a.addEventListener("input", () => {
    tn = Number(_a.value), i("trailLifeValue").textContent = _a.value + " ms";
  }), _a.addEventListener("change", () => Un("trailMaxAge", tn)), Qi.addEventListener("change", () => Un("upcomingCount", Nn));
  function rs(t) {
    a.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === t));
    const r = t === "light";
    i("app").classList.toggle("light", r), l.setLight(r), ro(a);
  }
  rs(nt().theme || "dark"), a.querySelectorAll(".themeBtn").forEach((t) => t.addEventListener("click", () => {
    rs(t.dataset.theme), Un("theme", t.dataset.theme);
  }));
  const bn = { steps: null, weather: null, ...nt().entities || {} };
  let Xt = null, Ea = {};
  function Xs(t) {
    const r = Object.values(t).filter((j) => j.entity_id.startsWith("sensor.") || j.entity_id.startsWith("input_number.")), s = (j) => j.attributes.friendly_name || j.entity_id, u = r.filter((j) => /step/i.test(j.entity_id) || /step/i.test(s(j)) || ["steps", "step"].includes(String(j.attributes.unit_of_measurement || "").toLowerCase())), h = r.filter((j) => !u.includes(j)), S = (j, se) => s(j).localeCompare(s(se)), P = (j, se) => /health_steps/.test(se.entity_id) - /health_steps/.test(j.entity_id) || S(j, se);
    return { suggested: u.sort(P), rest: h.sort(S), label: s };
  }
  function Js(t) {
    const r = i("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: s, rest: u, label: h } = Xs(t), S = (se) => '<option value="' + Ie(se.entity_id) + '">' + Ie(h(se)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(S).join("") + "</optgroup>" : "") + (u.length ? '<optgroup label="All sensors">' + u.map(S).join("") + "</optgroup>" : ""), r.value = bn.steps || "";
    const P = i("stepsStatus"), j = bn.steps && t[bn.steps];
    P.textContent = j ? "Connected · " + h(j) : P.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    bn.steps = i("stepsEntity").value || null, Un("entities", { ...bn }), Ea = {}, hr(), Xt && (Js(Xt), fr(Xt));
  });
  function Qs(t, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(t);
  }
  function pr() {
    const t = bn.steps && (Xt == null ? void 0 : Xt[bn.steps]), r = Number(t == null ? void 0 : t.state);
    return Number.isFinite(r) ? r : null;
  }
  function fr(t) {
    var u;
    const r = bn.steps, s = r ? Number((u = t[r]) == null ? void 0 : u.state) : NaN;
    i("stepsMeta").textContent = r ? Number.isFinite(s) ? Qs(s) : "—" : "Set up in Settings";
  }
  let Fi = 0;
  async function hr() {
    const t = bn.steps;
    if (!t || !l.ws) return;
    Fi = Date.now();
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const u = await l.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: r.toISOString(), statistic_ids: [t], period: "day", types: ["max"] }), h = (u == null ? void 0 : u[t]) || [], S = {};
      if (h.forEach((P) => {
        Number.isFinite(P.max) && (S[Ot(new Date(P.start))] = P.max);
      }), !Object.keys(S).length) {
        const P = await l.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: r.toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((P == null ? void 0 : P[t]) || []).forEach((j) => {
          const se = Number(j.s ?? j.state), de = j.lu ? j.lu * 1e3 : Date.parse(j.last_updated || j.last_changed);
          if (!Number.isFinite(se) || !de) return;
          const ne = Ot(new Date(de));
          S[ne] = Math.max(S[ne] || 0, se);
        });
      }
      Ea = S, Yn();
    } catch {
    }
  }
  function oo() {
    Yn();
  }
  oo(), setInterval(() => {
    oo(), yi(), Fa();
  }, 10 * 60 * 1e3);
  function mr(t) {
    const r = {}, s = {};
    lt.history.forEach((P) => {
      const j = Ot(new Date(P.start));
      r[j] = (r[j] || 0) + (P.seconds || 0) / 60, s[j] = (s[j] || 0) + 1;
    });
    const u = /* @__PURE__ */ new Date(), h = Ot(u), S = [];
    for (let P = t - 1; P >= 0; P--) {
      const j = new Date(u.getFullYear(), u.getMonth(), u.getDate() - P), se = Ot(j), de = lt.checkins.filter((J) => J.date === se), ne = (J) => {
        const Le = de.map((Ge) => Ge[J]).filter(Boolean);
        return Le.length ? Le.reduce((Ge, Ee) => Ge + Ee, 0) / Le.length : null;
      };
      S.push({
        key: se,
        date: j,
        minutes: Math.round(r[se] || 0),
        moves: s[se] || 0,
        steps: se === h && pr() != null ? pr() : Ea[se] ?? null,
        mood: ne("mood"),
        energy: ne("energy")
      });
    }
    return S;
  }
  function el(t) {
    let r = t.length - 1;
    t[r] && !t[r].minutes && r--;
    let s = 0;
    for (; r >= 0 && t[r].minutes > 0; )
      s++, r--;
    return s;
  }
  function Yn() {
    const t = i("insightCard");
    if (!t) return;
    const r = mr(30), s = el(r), u = r.reduce((de, ne) => de + ne.minutes, 0), h = /* @__PURE__ */ new Date(), S = Ot(h), P = Ot(new Date(h.getFullYear(), h.getMonth(), h.getDate() - (h.getDay() + 6) % 7)), j = r.filter((de) => de.key >= P && de.key <= S).reduce((de, ne) => de + ne.minutes, 0), se = (de, ne, J) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + de + '</div><div><div class="activityRowName">' + Ie(ne) + '</div><div class="activityRowMeta">' + Ie(J) + "</div></div></div>";
    t.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + te("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + se(te("clock"), "This week", j + " min") + se(te("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + se(te("calendar"), "30 days", u + " min") + "</div>";
  }
  const Qo = {
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
  }, ss = (t) => t === "sunny" ? "clear" : t === "clear-night" ? "night" : t === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(t) ? "rain" : ["snowy", "snowy-rainy"].includes(t) ? "snow" : "cloudy", Eo = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Do = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let gr = 0;
  const vr = (t, r) => '<path class="' + r + '" d="' + t + '"/>', Kl = (t, r) => ' style="animation-delay:-' + Math.round(t * 137 % r) + 'ms"', da = (t, r, s, u) => {
    const h = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + Kl(t, 2400) + ' d="M' + t + " " + (r - s) + "L" + (t + h) + " " + (r - h) + "L" + (t + s) + " " + r + "L" + (t + h) + " " + (r + h) + "L" + t + " " + (r + s) + "L" + (t - h) + " " + (r + h) + "L" + (t - s) + " " + r + "L" + (t - h) + " " + (r - h) + 'Z"/>';
  }, ls = ([t, r, s], u) => '<path class="wxMoonPath" d="' + t + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + r + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', $l = (t, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Xl = (t) => (t ? ["29.35", "43.04", "56.74"].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), Jl = (t) => (t ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, s], u) => '<circle class="wxFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + r + '" cy="' + s + '" r="' + (t ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function tl(t, r, s, u) {
    return t === "clear" ? r ? ls(s ? Do.l : Do.s, u) + (s ? da(70, 20, 5.83, 1) + da(78.33, 41.67, 3.75, 0.8) + da(60, 71.67, 3.33, 0.6) : da(42, 12, 3.5, 1) + da(47, 25, 2.25, 0.8) + da(36, 43, 2, 0.6)) : $l(u, s) : t === "partly" ? (r ? ls(s ? Do.lp : Do.sp, u) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + vr(s ? Eo.lp : Eo.sp, r ? "wxCloudLight" : "wxBright") + (r ? s ? da(73.33, 16.67, 4.17, 0.9) : da(44, 10, 2.5, 0.9) : "") : t === "cloudy" ? vr(s ? Eo.lc : Eo.s, r ? "wxCloudLight" : "wxBright") + (r ? s ? da(15, 15, 3.75, 0.8) + da(76.67, 13.33, 2.92, 0.6) : da(9, 9, 2.25, 0.8) + da(46, 8, 1.75, 0.6) : "") : vr(s ? Eo.lr : Eo.s, "wxCloudLight") + (t === "rain" ? Xl(s) : Jl(s));
  }
  const ds = () => {
    var t;
    return ((t = Xt == null ? void 0 : Xt["sun.sun"]) == null ? void 0 : t.state) === "below_horizon";
  };
  let On = nt().weatherStyle || "bitmap", nl = nt().weatherLayout === "strip" ? "strip" : "tiles", al = nt().weatherMotion !== !1;
  const io = () => al && !je(), ei = /* @__PURE__ */ new Map(), Ro = 700, Ql = (t) => {
    const [r, s] = t.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: s === "night" };
  };
  function br(t, r, s, u = On, h, S) {
    let P = ss(t);
    const j = P === "night" || (S != null ? !!S : !!s && ds());
    P === "night" && (P = "clear");
    const se = r ? 90 : 54, de = _l(t, j), ne = performance.now();
    let J = h ? ei.get(h) : null;
    if (h && !J ? ei.set(h, J = { key: de, t0: -1e9 }) : J && J.key !== de && (J.fromKey = J.key, J.from = J.last || null, J.key = de, J.t0 = ne), u !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + de + '"' + (h ? ' data-wx-slot="' + h + '"' : "") + ' data-wx-style="' + u + '" data-wx-size="' + se + '"></canvas></span>';
    let Le = "";
    if (J && ne - J.t0 < Ro && (io() || je())) {
      const Ge = Ql(J.fromKey);
      Le = '<span class="wxLayer wxOut ' + Ge.k + (Ge.night ? " night" : "") + '" style="animation-delay:' + Math.round(J.t0 - ne) + 'ms"><svg viewBox="0 0 ' + se + " " + se + '">' + tl(Ge.k, Ge.night, r, "wxg" + ++gr) + "</svg></span>";
    }
    return '<span class="wxIcon ' + P + (j ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + se + " " + se + '">' + tl(P, j, r, "wxg" + ++gr) + "</svg>" + Le + "</span>";
  }
  function Oi() {
    const t = i("app"), r = getComputedStyle(t), s = (j) => r.getPropertyValue(j).trim(), u = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([j, se]) => {
      s(se) && (u[j] = s(se));
    });
    const h = s("--color-text-primary") || "#f1f1f1", S = s("--color-bg-card") || "#222222", P = t.classList.contains("light");
    return { colors: u, ink: P ? h : S, paper: P ? S : h };
  }
  function ro(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const u = Oi(), h = io(), S = je();
    s.forEach((P) => {
      var J;
      const j = P.dataset.wx, se = P.dataset.wxSlot ? ei.get(P.dataset.wxSlot) : null;
      let de = Ld(j, u.colors);
      if (se && se.key === j) {
        const Le = (r - se.t0) / Ro;
        Le < 1 && (h || S) && (de = Du(se.from || Ld(se.fromKey, u.colors), de, Math.max(0, Le), u.colors, S)), se.last = de;
      }
      const ne = Uc(de, { size: Number(P.dataset.wxSize) || 54, px: 2, oneBit: P.dataset.wxStyle === "onebit", colors: u.colors, ink: u.ink, paper: u.paper, clock: r, idle: h });
      P.width !== ne.w && (P.width = ne.w), P.height !== ne.h && (P.height = ne.h), (J = P.getContext("2d")) == null || J.putImageData(new ImageData(ne.data, ne.w, ne.h), 0, 0);
    });
  }
  let ti = null, ni = -1;
  function ai(t) {
    if (ti = null, !g) return;
    const r = io(), s = Math.floor(t / 100), u = [...ei.values()].some((se) => t - se.t0 < Ro), h = [...v.values()].some((se) => t - se.t0 < se.dur), S = we.home.classList.contains("active"), P = Te.classList.contains("open"), j = r && On === "smooth" && (P || S && nl === "strip");
    !document.hidden && (u || h || j || r && s !== ni) && (ni = s, S && (ro(i("weatherCard"), t), B(i("weatherCard"), t)), P && (ro(Te, t), B(Te, t))), (r || u || h) && (ti = requestAnimationFrame(ai));
  }
  function so() {
    i("app").classList.toggle("wxMotion", io()), !ti && g && (ti = requestAnimationFrame(ai));
  }
  let cs = [];
  const Zt = 36e5, ol = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function e() {
    const t = /* @__PURE__ */ new Date(), r = (S, P) => new Date(t.getFullYear(), t.getMonth(), t.getDate() + S, P), s = [], u = [], h = [...Array(6)].map((S, P) => {
      const j = r(P, 6), se = r(P, 18), de = r(P + 1, 6), ne = cs.find((Le) => Ot(new Date(Le.datetime)) === Ot(j)), J = (Le, Ge, Ee) => {
        const Se = s.filter((pt) => pt.t >= +Le && pt.t < +Ge);
        if (Se.length) {
          const pt = {};
          return Se.forEach((Re) => {
            pt[Re.c] = (pt[Re.c] || 0) + (ol.has(Re.c) ? 2 : 1);
          }), Object.entries(pt).sort((Re, ht) => ht[1] - Re[1])[0][0];
        }
        const ke = u.find((pt) => {
          const Re = +new Date(pt.datetime);
          return Re >= +Le - 3 * Zt && Re < +Ge && (pt.is_daytime == null || !!pt.is_daytime == !Ee);
        });
        if (ke) return ke.condition;
        const ut = (ne == null ? void 0 : ne.condition) || "cloudy";
        return Ee && ut === "sunny" ? "clear-night" : ut;
      };
      return { start: +j, end: +de, day: J(j, se, !1), night: J(se, de, !0), hi: Number(ne == null ? void 0 : ne.temperature), lo: Number(ne == null ? void 0 : ne.templow) };
    });
    return { days: h, hours: s, start: h[0].start, end: h[5].end };
  }
  const n = (t, r) => {
    const s = t.days.findIndex((h) => r < h.end);
    if (s < 0) return 1;
    const u = t.days[s];
    return Math.max(0, (s + (r - u.start) / (u.end - u.start)) / 6);
  }, o = (t, r) => {
    const s = Math.max(0, Math.min(0.99999, r)) * 6, u = Math.floor(s), h = t.days[u];
    return h.start + (s - u) * (h.end - h.start);
  };
  function d(t, r) {
    const s = Math.max(0, t.days.findIndex((se) => r < se.end)), u = t.days[s], h = (r - u.start) / (u.end - u.start) >= 0.5;
    let S = h ? u.night : u.day, P = NaN;
    const j = t.hours;
    if (j.length && r >= j[0].t - Zt && r <= j[j.length - 1].t + Zt) {
      let se = j.findIndex((J) => J.t > r);
      se < 0 && (se = j.length);
      const de = j[Math.max(0, se - 1)], ne = j[Math.min(j.length - 1, se)];
      S = de.c || S, P = ne.t > de.t ? de.temp + (ne.temp - de.temp) * Math.max(0, Math.min(1, (r - de.t) / (ne.t - de.t))) : de.temp;
    }
    if (!Number.isFinite(P)) {
      const se = [];
      if (t.days.forEach((de) => {
        Number.isFinite(de.lo) && se.push([de.start - Zt, de.lo]), Number.isFinite(de.hi) && se.push([de.start + 9 * Zt, de.hi]);
      }), se.length) {
        P = r <= se[0][0] ? se[0][1] : se[se.length - 1][1];
        for (let de = 1; de < se.length; de++) if (r <= se[de][0] && r > se[de - 1][0]) {
          const [ne, J] = se[de - 1], [Le, Ge] = se[de];
          P = J + (Ge - J) * (1 - Math.cos(Math.PI * (r - ne) / (Le - ne))) / 2;
          break;
        }
      }
    }
    return { cond: h && S === "sunny" ? "clear-night" : S, temp: P, night: h, day: u };
  }
  const p = (t) => Ot(new Date(t)) === Ot(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(t)), v = /* @__PURE__ */ new Map(), f = 900, b = 700;
  let k = null;
  const E = typeof ResizeObserver == "function" ? new ResizeObserver((t) => t.forEach((r) => {
    B(r.target.parentElement), r.target.closest("#wxDialog") && Wt();
  })) : null;
  function B(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const u = e(), h = u.days.flatMap((J) => [{ cond: J.day, night: !1 }, { cond: J.night, night: !0 }]), S = h.map((J) => J.cond).join(), P = Oi(), j = io(), se = je(), de = Number(Ot(new Date(u.start)).replace(/\D/g, "")) % 9973;
    let ne = !1;
    s.forEach((J) => {
      var pt;
      const Le = J.clientWidth, Ge = J.clientHeight;
      if (!Le || !Ge) return;
      const Ee = J.dataset.wxStrip;
      let Se = v.get(Ee);
      Se ? Se.sig !== S && (Se.prev = Se.segs, Se.sig = S, Se.segs = h, Se.t0 = r, Se.dur = b) : v.set(Ee, Se = { sig: S, segs: h, prev: null, t0: r, dur: f });
      const ke = j || se ? Math.min(1, Math.max(0, (r - Se.t0) / Se.dur)) : 1;
      ke < 1 && (ne = !0);
      const ut = { width: Le, height: Ge, colors: P.colors, clock: r, ambient: j, seed: de, reveal: se ? ke : 1 - Math.pow(1 - ke, 3), prev: ke < 1 ? Se.prev : null, reduce: se };
      if (On === "smooth") {
        const Re = Math.min(2, window.devicePixelRatio || 1), ht = Math.round(Le * Re), Ct = Math.round(Ge * Re);
        J.width !== ht && (J.width = ht), J.height !== Ct && (J.height = Ct);
        const ot = J.getContext("2d");
        if (!ot) return;
        ot.setTransform(Re, 0, 0, Re, 0, 0), Uu(ot, h, ut);
      } else {
        const Re = Gu(h, { ...ut, px: 2, oneBit: On === "onebit", ink: P.ink, paper: P.paper });
        J.width !== Re.w && (J.width = Re.w), J.height !== Re.h && (J.height = Re.h), (pt = J.getContext("2d")) == null || pt.putImageData(new ImageData(Re.data, Re.w, Re.h), 0, 0);
      }
    }), ne && so();
  }
  function N() {
    const t = i("weatherCard");
    if (!t || t.hidden) return;
    const r = bn.weather, s = r && (Xt == null ? void 0 : Xt[r]);
    if (!s) {
      t.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + br("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", ro(t);
      return;
    }
    const u = s.attributes || {}, h = u.temperature_unit || "°", S = (ot) => Number.isFinite(Number(ot)) ? Math.round(Number(ot)) + "°" : "—", P = (u.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", j = Qo[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), se = Ot(/* @__PURE__ */ new Date()), de = cs.slice(0, 7), ne = de.find((ot) => Ot(new Date(ot.datetime)) === se) || null, J = de.filter((ot) => Ot(new Date(ot.datetime)) >= se).slice(0, 6), Le = /* @__PURE__ */ new Date(), Ge = Ot(new Date(Le.getFullYear(), Le.getMonth(), Le.getDate() + 1)), Ee = ne ? "H " + S(ne.temperature) + "&ensp; L " + S(ne.templow) : "", Se = (ot) => {
      const Xe = Ot(new Date(ot.datetime));
      return Xe === se ? "Today" : Xe === Ge ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(ot.datetime));
    }, ke = Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : "—", ut = (ot) => {
      const Xe = new Date(ot.datetime);
      return Math.round((new Date(Xe.getFullYear(), Xe.getMonth(), Xe.getDate()) - new Date(Le.getFullYear(), Le.getMonth(), Le.getDate())) / 864e5);
    }, pt = (ot) => (Qo[ot] || ot || "").toLowerCase(), Re = (ot, Xe) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + ut(ot) + '" aria-label="' + Ie(Se(ot) + ": " + pt(ot.condition) + ", " + S(ot.temperature) + " / " + S(ot.templow) + ". Open the forecast") + '">' + br(ot.condition, !1, !1, On, "day" + Xe) + '<div><div class="activityRowName">' + Ie(Se(ot)) + '</div><div class="activityRowMeta">' + S(ot.temperature) + " / " + S(ot.templow) + "</div></div></div>", ht = () => '<div class="wxStrip"><div class="wxStripDays">' + e().days.map((Xe, an) => {
      const Ht = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(Xe.start)) + ": " + pt(Xe.day) + (pt(Xe.day) === pt(Xe.night) ? " all day and night" : ", then " + pt(Xe.night) + " overnight") + (Number.isFinite(Xe.hi) ? ". High " + S(Xe.hi) : "") + (Number.isFinite(Xe.lo) ? ", low " + S(Xe.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + an + '" aria-label="' + Ie(Ht) + '"><span class="wxDayName">' + Ie(p(Xe.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + S(Xe.hi) + '</span><span class="wxLow">' + S(Xe.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    t.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Ie("Now in " + P + ": " + ke + "°, " + pt(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + br(s.state, !0, !0, On, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ie(String(ke)) + '</span><span class="wxUnit">' + Ie(h) + '</span></div><div class="wxPlace">' + Ie(P) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ie(j) + "</div>" + (Ee ? '<div class="wxRange">' + Ee + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (J.length ? nl === "strip" ? ht() : '<div class="activityRows wxDays">' + J.map(Re).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", ro(t);
    const Ct = t.querySelector("canvas[data-wx-strip]");
    k && k !== Ct && (E == null || E.unobserve(k)), k = Ct, Ct && (E == null || E.observe(Ct), B(t)), so(), ca();
  }
  const Z = i("weatherCard"), he = (t) => {
    const r = t.closest("[data-wx-day]");
    if (r) {
      const u = /* @__PURE__ */ new Date();
      Qt(+new Date(u.getFullYear(), u.getMonth(), u.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const s = t.closest("[data-wx-open]");
    s && Qt(Date.now(), s);
  };
  Z.addEventListener("click", (t) => he(t.target)), Z.addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && t.target.matches("[data-wx-day],[data-wx-open]") && (t.preventDefault(), he(t.target));
  });
  const Te = i("wxDialog"), ee = i("wxGraph"), ve = i("wxGraphWrap");
  let L = Date.now(), me = null, Ne = !1, Qe = null;
  function Qt(t, r) {
    const s = e();
    me = r || null, L = Math.max(s.start, Math.min(s.end - Zt, t)), v.delete("dialog"), ei.delete("scrub"), Te.classList.add("open"), Te.setAttribute("aria-hidden", "false"), ca(), E == null || E.observe(Te.querySelector("canvas[data-wx-strip]")), ee.focus({ preventScroll: !0 }), so();
  }
  function It() {
    var t;
    Te.classList.remove("open"), Te.setAttribute("aria-hidden", "true"), E == null || E.unobserve(Te.querySelector("canvas[data-wx-strip]")), (t = me == null ? void 0 : me.focus) == null || t.call(me, { preventScroll: !0 }), me = null;
  }
  function ca() {
    if (!Te.classList.contains("open")) return;
    const t = e();
    i("wxGraphDays").innerHTML = t.days.map((r) => "<span>" + Ie(p(r.start)) + "</span>").join(""), Wt(t), Ve(t), B(Te);
  }
  function Ve(t = e()) {
    const r = d(t, L), s = Xt == null ? void 0 : Xt[bn.weather], u = (s == null ? void 0 : s.attributes) || {}, h = u.temperature_unit || "°", S = Math.abs(L - Date.now()) < Zt / 2, P = S && s ? s.state : r.cond, j = S && Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", se = Qo[P] || (P ? P.charAt(0).toUpperCase() + P.slice(1) : "—"), de = S ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(L / Zt) * Zt)), ne = r.day, J = (Number.isFinite(ne.hi) ? "H " + Math.round(ne.hi) + "°" : "") + (Number.isFinite(ne.lo) ? "&ensp; L " + Math.round(ne.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + br(P, !0, S, On, "scrub", S ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ie(String(j)) + '</span><span class="wxUnit">' + Ie(h) + '</span></div><div class="wxPlace">' + Ie(de) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ie(se) + "</div>" + (J ? '<div class="wxRange">' + J + "</div>" : "") + "</div>", ro(i("wxDialogNow")), ee.setAttribute("aria-valuenow", String(Math.round((L - t.start) / Zt))), ee.setAttribute("aria-valuetext", de + ", " + se.toLowerCase() + ", " + j + "°"), us(t), so();
  }
  function Wt(t = e()) {
    const r = i("wxGraphLine"), s = ve.clientWidth, u = ve.clientHeight;
    if (!s || !u) return;
    const h = [];
    for (let ke = t.start; ke <= t.end; ke += Zt) {
      const ut = d(t, ke).temp;
      Number.isFinite(ut) && h.push([n(t, ke) * s, ut]);
    }
    if (r.setAttribute("viewBox", "0 0 " + s + " " + u), h.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', Qe = null, us(t);
      return;
    }
    const S = h.map((ke) => ke[1]), P = Math.min(...S), j = Math.max(...S), se = Math.max(4, j - P), de = On !== "smooth", ne = (ke) => de ? Math.round(ke / 2) * 2 : Math.round(ke * 10) / 10;
    Qe = (ke) => u * 0.84 - (ke - P) / se * u * 0.62;
    const J = Oi(), Le = On === "onebit" ? J.paper : "#ffffff", Ge = On === "onebit" ? J.ink : "rgba(0,0,0,.28)", Ee = "M" + h.map((ke) => ne(ke[0]) + " " + ne(Qe(ke[1]))).join(" L"), Se = (ke, ut) => {
      const pt = h.find((Re) => Re[1] === ke);
      return '<text class="wxLineLabel" x="' + ne(Math.min(s - 14, Math.max(14, pt[0]))) + '" y="' + ne(Qe(ke) + (ut ? 18 : -10)) + '" fill="' + Le + '" stroke="' + Ge + '">' + Math.round(ke) + "°</text>";
    };
    r.setAttribute("shape-rendering", de ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + Ee + '" fill="none" stroke="' + Ge + '" stroke-width="' + (de ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Ee + '" fill="none" stroke="' + Le + '" stroke-width="2" stroke-linejoin="round"/>' + Se(j, !1) + Se(P, !0) + '<g id="wxCursorMark"></g>', us(t);
  }
  function us(t = e()) {
    const r = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const s = ve.clientWidth, u = ve.clientHeight, h = On !== "smooth", S = (Le) => h ? Math.round(Le / 2) * 2 : Le, P = S(n(t, L) * s), j = d(t, L).temp, se = Oi(), de = On === "onebit" ? se.paper : "#ffffff", ne = On === "onebit" ? se.ink : "rgba(0,0,0,.28)", J = Qe && Number.isFinite(j) ? S(Qe(j)) : null;
    r.innerHTML = '<rect x="' + (P - 2) + '" y="0" width="4" height="' + u + '" fill="' + ne + '"/><rect x="' + (P - 1) + '" y="0" width="2" height="' + u + '" fill="' + de + '"/>' + (J == null ? "" : h ? '<rect x="' + (P - 5) + '" y="' + (J - 5) + '" width="10" height="10" fill="' + de + '" stroke="' + ne + '" stroke-width="2"/>' : '<circle cx="' + P + '" cy="' + J + '" r="6" fill="' + de + '" stroke="' + ne + '" stroke-width="2"/>');
  }
  const Fd = (t) => {
    const r = ve.getBoundingClientRect();
    r.width && (L = o(e(), (t - r.left) / r.width), Ve());
  };
  ee.addEventListener("pointerdown", (t) => {
    if (t.button === 0) {
      Ne = !0;
      try {
        ee.setPointerCapture(t.pointerId);
      } catch {
      }
      Fd(t.clientX);
    }
  }), ee.addEventListener("pointermove", (t) => {
    Ne && Fd(t.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((t) => ee.addEventListener(t, () => {
    Ne = !1;
  })), ee.addEventListener("keydown", (t) => {
    const r = e(), s = { ArrowLeft: -Zt, ArrowRight: Zt, ArrowDown: -Zt, ArrowUp: Zt, PageUp: -24 * Zt, PageDown: 24 * Zt }[t.key];
    s ? (t.preventDefault(), L = Math.max(r.start, Math.min(r.end - Zt, Math.round(L / Zt) * Zt + s)), Ve(r)) : (t.key === "Home" || t.key === "End") && (t.preventDefault(), L = t.key === "Home" ? r.start : r.end - Zt, Ve(r));
  }), i("wxDialogClose").addEventListener("click", It), Te.addEventListener("click", (t) => {
    t.target === Te && It();
  }), Te.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), It());
  }), N(), (Kd = (Yd = window.matchMedia) == null ? void 0 : (Zd = Yd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || Kd.call(Zd, "change", () => {
    so(), ro(a);
  }), so();
  const Od = i("tvNav");
  l.fullscreenSupported || (Od.hidden = !0), Od.addEventListener("click", () => l.toggleFullscreen()), a.addEventListener("keydown", (t) => {
    !we.workout.classList.contains("active") || $a.classList.contains("active") || t.target.closest("input,select,textarea,.holdEnd") || (t.key === "MediaPlayPause" || t.key === " " && !t.target.closest("button") ? (t.preventDefault(), rr.click()) : t.key === "MediaTrackNext" ? (t.preventDefault(), i("skipExercise").click()) : t.key === "MediaTrackPrevious" && (t.preventDefault(), i("restartSegment").click()));
  }), a.querySelectorAll("[data-rounds-step]").forEach((t) => t.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(tt.value) || 1) + Number(t.dataset.roundsStep)));
    String(r) !== tt.value && (tt.value = r, tt.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [R, C, I, tt].forEach((t) => t.addEventListener("input", () => {
    const r = Ue[mt];
    r && (r.total = Number(R.value), r.work = Number(C.value), r.rest = Number(I.value)), D();
  })), Ce.addEventListener("click", Yo), qe.addEventListener("click", () => M("settings")), i("settingsBack").addEventListener("click", Yo), rr.addEventListener("click", () => ma(!Mn)), Wn(mt), zo(), yi(), Yn(), i("healthHelpOpen").addEventListener("click", () => a.querySelector(".tab[data-pane=helpPane]").click()), Bi(i("resetStats"), i("resetStatsFill"), 1500, () => {
    lt.history = [], lt.checkins = [], wo = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    mn(), oo(), yi(), zo(), Yn(), Fa(), Nt("Stats reset");
  });
  const ed = i("morningTime"), td = i("eveningTime"), nd = i("checkinAutoOpen");
  ed.value = ia().morning, td.value = ia().evening, nd.classList.toggle("on", nt().checkinAutoOpen !== !1), [["morningTime", ed], ["eveningTime", td]].forEach(([t, r]) => r.addEventListener("change", () => {
    r.value && (Un(t, r.value), Fa());
  })), nd.addEventListener("click", () => {
    const t = nt().checkinAutoOpen === !1;
    nd.classList.toggle("on", t), Un("checkinAutoOpen", t);
  }), setTimeout(Ji, 800);
  const qd = i("checkinNotify"), il = i("checkinNotifyTarget"), Wd = i("checkinNotifyStatus"), yu = Wd.textContent;
  function zd() {
    const t = l.notifyServices(), r = t.filter((h) => h.startsWith("mobile_app_")), s = r.length ? r : t, u = (h) => h.replace(/^mobile_app_/, "").replace(/_/g, " ");
    il.innerHTML = s.map((h) => '<option value="' + Ie(h) + '">' + Ie(u(h)) + "</option>").join(""), !nt().notifyTarget && s[0] && (nt().notifyTarget = s[0]), il.value = nt().notifyTarget || "";
  }
  function rl() {
    const t = !!nt().notifyOn;
    qd.classList.toggle("on", t), i("checkinNotifyTargetRow").hidden = !t;
    const r = ia();
    Wd.textContent = t ? "Sends at " + r.morning + " and " + r.evening : yu;
  }
  async function ad() {
    const t = !!nt().notifyOn;
    try {
      return await l.setReminderAutomation(t ? { target: nt().notifyTarget, times: ia() } : null), !0;
    } catch {
      return Nt("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  qd.addEventListener("click", async () => {
    const t = !nt().notifyOn;
    if (t && (zd(), !nt().notifyTarget)) {
      Nt("Install the Companion app on your phone first");
      return;
    }
    nt().notifyOn = t, rl(), await ad() ? (mn(), Nt(t ? "Check-in notifications on" : "Check-in notifications off")) : (nt().notifyOn = !t, rl());
  }), il.addEventListener("change", () => {
    Un("notifyTarget", il.value), nt().notifyOn && ad();
  }), [ed, td].forEach((t) => t.addEventListener("change", () => {
    rl(), nt().notifyOn && ad();
  })), zd(), rl();
  let od = null;
  function ku() {
    od || (od = setTimeout(() => {
      od = null, Yn();
    }, 3e4));
  }
  return {
    updateStates(t) {
      var s, u;
      const r = !Xt || Xt[bn.weather] !== t[bn.weather] || ((s = Xt["sun.sun"]) == null ? void 0 : s.state) !== ((u = t["sun.sun"]) == null ? void 0 : u.state);
      Xt = t, Js(t), fr(t), r && N(), Date.now() - Fi > 60 * 60 * 1e3 && hr(), ku();
    },
    applyRemoteData(t) {
      if (t && (Array.isArray(t.history) && (lt.history = t.history, oo()), Array.isArray(t.history) && Yn(), Array.isArray(t.checkins) && (lt.checkins = t.checkins.map(di), Fa(), zo(), yi(), oo(), Yn()), t.profiles && !Tn.classList.contains("open") && !Pn)) {
        const r = fo(t);
        Object.keys(Ue).forEach((s) => delete Ue[s]), Object.assign(Ue, r.profiles), lt.order = r.order, Ue[mt] || (mt = lt.order[0]), Ui(), Wn(mt);
      }
    },
    suspend() {
      g = !1;
    },
    resume() {
      g || (g = !0, An || (An = requestAnimationFrame(ha)), Wa || (Wa = requestAnimationFrame(Li)), so(), Pi(a.querySelector(".tab.active"), !1));
    }
  };
}
const Ku = /* @__PURE__ */ new Set(["roaming", "test_area"]), $u = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, fs = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, un = "made_up_", qi = (a) => {
  var l;
  return (l = String(a).split(".")[1]) == null ? void 0 : l.startsWith(un);
}, cl = (a) => a.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Pd(a) {
  const l = a.getHours() + a.getMinutes() / 60, i = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function Xu(a) {
  const l = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  let i = 0;
  for (let c = +l; c < +a; c += 10 * 60 * 1e3) i += Pd(new Date(c)) / 6;
  return i;
}
function ec(a = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let i = 0; i <= 96; i++) {
    const c = +a - (96 - i) * 15 * 60 * 1e3;
    l.push([c, Pd(new Date(c))]);
  }
  return l;
}
function Ju({ onChange: a }) {
  const l = {}, i = {}, c = (Y, W, X, G) => {
    l[Y] = { entity_id: Y, state: X, attributes: G, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[Y] = W;
  }, m = (Y, W, X) => {
    const G = l[Y], K = W ?? G.state;
    l[Y] = { ...G, state: K, attributes: { ...G.attributes, ...X }, last_changed: K === G.state ? G.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, g = (Y, W, X, G) => c("binary_sensor." + un + (Y ? Y + "_" : "") + cl(W), Y, G ? "on" : "off", { friendly_name: W, device_class: X });
  Object.entries($u).forEach(([Y, W]) => {
    if (W.temperature != null && c("sensor." + un + Y + "_temperature", Y, String(W.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), W.humidity != null && c("sensor." + un + Y + "_humidity", Y, String(W.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), W.vacuum && c("vacuum." + un + "robot", Y, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), W.climate && c("climate." + un + Y, Y, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: W.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), W.cover) {
      const [X, G, K, Q] = W.cover;
      c("cover." + un + Y + "_" + cl(X), Y, K ? "open" : "closed", { friendly_name: X, device_class: G, current_position: K, ...Q != null ? { current_tilt_position: Q } : {} });
    }
    if (W.humidifier && c("humidifier." + un + Y, Y, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: W.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), W.solar && (c("sensor." + un + Y + "_solar_power", Y, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + un + Y + "_solar_today", Y, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), W.valve && c("valve." + un + Y + "_" + cl(W.valve), Y, "closed", { friendly_name: W.valve, device_class: "water" }), W.door && g(Y, W.door, "door", W.doorOpen), W.window && g(Y, W.window, "window", !1), W.motion && g(Y, W.motion, "motion", !1), W.plant) {
      const [X, G, K, Q, T] = W.plant, V = un + cl(X), be = (y, we, Ce, qe, M) => c("sensor." + V + "_" + y, Y, String(Ce), { friendly_name: we, device_class: M, state_class: "measurement", unit_of_measurement: qe, plant_low: Ce < fs[y][0], plant_high: Ce > fs[y][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[y] });
      be("moisture", "Moisture", G, "%", "moisture"), be("light", "Light", K, "lx", "illuminance"), be("temperature", "Temperature", Q, "°C", "temperature"), be("fertility", "Fertility", T, "µS/cm", "conductivity");
      const Ae = Object.entries({ moisture: G, light: K, temperature: Q, fertility: T }).filter(([y, we]) => we < fs[y][0] || we > fs[y][1]).map(([y, we]) => y + (we < fs[y][0] ? " low" : " high"));
      c("plant." + V, Y, Ae.length ? "problem" : "ok", { friendly_name: X, moisture: G, brightness: K, temperature: Q, conductivity: T, problem: Ae.join(", ") || "none" });
    }
  }), c("alarm_control_panel." + un + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), g(null, "Front door", "door", !1), g(null, "Smoke alarm", "smoke", !1), c("sensor." + un + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, A = {};
  let x = null;
  function H() {
    const Y = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((W) => {
      W.endsWith("_solar_power") && (l[W] = { ...l[W], state: Pd(Y).toFixed(2) }), W.endsWith("_solar_today") && (l[W] = { ...l[W], state: Xu(Y).toFixed(1) });
    });
  }
  H();
  let le = 0;
  function ie() {
    let Y = !1;
    const W = ++le % 10 === 0, X = (Q, T, V) => {
      m(Q, T, V), Y = !0;
    };
    Object.entries(w).forEach(([Q, T]) => {
      const V = l[Q].attributes.current_position, be = V < T ? Math.min(T, V + 10) : Math.max(T, V - 10);
      be === T && delete w[Q], X(Q, be === T ? be === 0 ? "closed" : "open" : T > V ? "opening" : "closing", { current_position: be });
    }), Object.entries(A).forEach(([Q, T]) => {
      const V = l[Q].attributes.current_tilt_position, be = V < T ? Math.min(T, V + 25) : Math.max(T, V - 25);
      be === T && delete A[Q], X(Q, null, { current_tilt_position: be });
    }), Object.keys(l).filter((Q) => Q.startsWith("climate.")).forEach((Q) => {
      const T = l[Q], V = T.attributes, be = V.current_temperature, Ae = (T.state === "heat" || T.state === "auto") && be < V.temperature - 0.05, y = (T.state === "cool" || T.state === "auto") && be > V.temperature + 0.05, we = T.state === "off" ? "off" : Ae ? "heating" : y ? "cooling" : "idle", Ce = W ? Math.round((be + (Ae ? 0.1 : y ? -0.1 : 0)) * 10) / 10 : be;
      (Ce !== be || we !== V.hvac_action) && X(Q, null, { current_temperature: Ce, hvac_action: we });
    }), Object.keys(l).filter((Q) => Q.startsWith("humidifier.")).forEach((Q) => {
      const T = l[Q], V = T.attributes, be = V.current_humidity, Ae = T.state === "on" && be < V.humidity, y = Ae && W ? be + 1 : be, we = T.state !== "on" ? "off" : Ae ? "humidifying" : "idle";
      if (y !== be || we !== V.action) {
        X(Q, null, { current_humidity: y, action: we });
        const Ce = "sensor." + un + i[Q] + "_humidity";
        l[Ce] && X(Ce, String(y));
      }
    });
    const G = l["vacuum." + un + "robot"], K = G.attributes;
    G.state === "cleaning" && W && X(G.entity_id, null, { battery_level: Math.max(5, K.battery_level - 1) }), G.state === "returning" && X(G.entity_id, "docked", {}), G.state === "docked" && K.battery_level < 100 && X(G.entity_id, null, { battery_level: Math.min(100, K.battery_level + 2) }), x && Date.now() - x.at > 5e3 && (X("alarm_control_panel." + un + "house", "armed_" + x.mode, {}), x = null), Y && a();
  }
  const O = setInterval(ie, 1e3), q = setInterval(() => {
    H(), a();
  }, 60 * 1e3);
  function $(Y, W, X) {
    const G = X == null ? void 0 : X.entity_id;
    if (!l[G]) return !1;
    const K = l[G], Q = K.attributes, T = (V, be) => m(G, V, be);
    if (Y === "climate" && (W === "set_temperature" && T(null, { temperature: Math.max(Q.min_temp, Math.min(Q.max_temp, X.temperature)) }), W === "set_hvac_mode" && T(X.hvac_mode, X.hvac_mode === "off" ? { hvac_action: "off" } : {}), W === "toggle" && T(K.state === "off" ? "heat" : "off", K.state === "off" ? {} : { hvac_action: "off" })), Y === "cover") {
      const V = W === "open_cover" ? 100 : W === "close_cover" ? 0 : W === "set_cover_position" ? X.position : W === "toggle" ? Q.current_position > 0 ? 0 : 100 : null;
      W === "stop_cover" && (delete w[G], delete A[G], T(Q.current_position === 0 ? "closed" : "open")), V != null && V !== Q.current_position && (w[G] = V, T(V > Q.current_position ? "opening" : "closing"));
      const be = W === "open_cover_tilt" ? 100 : W === "close_cover_tilt" ? 0 : W === "set_cover_tilt_position" ? X.tilt_position : null;
      W === "stop_cover_tilt" && delete A[G], be != null && Q.current_tilt_position != null && be !== Q.current_tilt_position && (A[G] = be);
    }
    if (Y === "humidifier" && (W === "set_humidity" && T(null, { humidity: Math.max(Q.min_humidity, Math.min(Q.max_humidity, X.humidity)) }), W === "set_mode" && T(null, { mode: X.mode }), W === "turn_on" || W === "turn_off" || W === "toggle")) {
      const V = W === "turn_on" || W === "toggle" && K.state !== "on";
      T(V ? "on" : "off", { action: V ? "idle" : "off" });
    }
    if (Y === "vacuum" && (W === "start" && T("cleaning", { rooms: X.rooms || Q.rooms }), W === "pause" && T("paused"), W === "return_to_base" && T("returning", { rooms: [] }), W === "locate" && T(null, { located: Date.now() }), W === "set_rooms" && T(null, { rooms: X.rooms })), Y === "valve") {
      const V = W === "open_valve" || W === "toggle" && K.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(W) && T(V ? "open" : "closed");
    }
    if (Y === "alarm_control_panel") {
      W === "alarm_disarm" && (x = null, T("disarmed", { changed_by: "Matt" }));
      const V = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[W];
      V && (x = { mode: V, at: Date.now() }, T("arming", { changed_by: "Matt" }));
    }
    return a(), !0;
  }
  function ae(Y) {
    const W = (Y == null ? void 0 : Y.states) || {}, X = (Y == null ? void 0 : Y.entities) || {}, G = (Y == null ? void 0 : Y.devices) || {}, K = (C) => {
      var fe;
      const I = X[C];
      return I && (I.area_id || I.device_id && ((fe = G[I.device_id]) == null ? void 0 : fe.area_id)) || null;
    }, Q = (C) => {
      const I = X[C];
      return W[C] && W[C].state !== "unavailable" && !(I != null && I.hidden) && !(I != null && I.entity_category);
    }, T = {};
    Object.keys(W).forEach((C) => {
      const I = K(C);
      I && Q(C) && (T[I] || (T[I] = [])).push(C);
    });
    const V = { ...W, ...l }, be = (C) => {
      var I, fe;
      return (fe = (I = V[C]) == null ? void 0 : I.attributes) == null ? void 0 : fe.device_class;
    }, Ae = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], y = Object.keys(W).filter((C) => C.startsWith("vacuum.") && Q(C)), we = Object.values((Y == null ? void 0 : Y.areas) || {}).filter((C) => !Ku.has(C.area_id)).map((C) => {
      const I = C.area_id, fe = T[I] || [], z = (Ze) => fe.filter((Mt) => Mt.startsWith(Ze + ".")), re = (Ze) => z("sensor").filter((Mt) => be(Mt) === Ze), ce = (Ze) => Object.keys(l).filter((Mt) => i[Mt] === I && Ze(Mt)), ge = (Ze, Mt) => Ze.length ? Ze : ce(Mt), We = ge(re("temperature"), (Ze) => Ze.endsWith(I + "_temperature")), tt = ge(re("humidity"), (Ze) => Ze.endsWith(I + "_humidity")), yt = re("power").filter((Ze) => /^(W|kW)$/.test(V[Ze].attributes.unit_of_measurement || "")), fn = z("binary_sensor").filter((Ze) => be(Ze) === "moisture"), Rn = ge(z("plant"), (Ze) => Ze.startsWith("plant.")).map((Ze) => ({ id: Ze, readings: ce((Mt) => Mt.startsWith("sensor." + Ze.split(".")[1] + "_")) })), Lt = [...z("binary_sensor").filter((Ze) => Ae.includes(be(Ze))), ...ce((Ze) => Ze.startsWith("binary_sensor."))];
      return {
        id: I,
        name: C.name,
        icon: C.icon,
        readings: [...We.slice(0, 1), ...tt.slice(0, 1), ...fn],
        power: yt.length ? yt.reduce((Ze, Mt) => Ze + Number(V[Mt].state) * (V[Mt].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: z("switch"),
        lights: z("light"),
        actions: [...z("light"), ...ge(z("climate"), (Ze) => Ze.startsWith("climate.")), ...ge(z("cover"), (Ze) => Ze.startsWith("cover.")), ...ge(z("humidifier"), (Ze) => Ze.startsWith("humidifier.")), ...ge(z("valve"), (Ze) => Ze.startsWith("valve.")), ...z("media_player"), ...z("vacuum"), ...y.length ? [] : ce((Ze) => Ze.startsWith("vacuum."))],
        solar: ce((Ze) => Ze.includes("_solar_")),
        plants: Rn,
        openings: Lt,
        alerts: [...fn, ...Lt].filter((Ze) => {
          var Mt;
          return ((Mt = V[Ze]) == null ? void 0 : Mt.state) === "on";
        })
      };
    }).filter((C) => C.readings.length || C.plugs.length || C.actions.length || C.solar.length || C.plants.length), Ce = Object.keys(W).find((C) => /^sensor\..*(p1_meter_power|grid_power)$/.test(C) && W[C].state !== "unavailable") || null, qe = (C) => Object.keys(W).filter((I) => I.startsWith(C + ".") && Q(I)), M = qe("alarm_control_panel"), R = y.length ? y : ["vacuum." + un + "robot"];
    return {
      states: V,
      rooms: we,
      grid: Ce,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (C) => l[C] ? i[C] : K(C),
      vacuums: R,
      homeVacuums: R.filter((C) => !we.some((I) => I.actions.includes(C))),
      security: {
        alarms: M.length ? M : ["alarm_control_panel." + un + "house"],
        locks: qe("lock"),
        openings: [...Object.keys(l).filter((C) => C.startsWith("binary_sensor.")), "sensor." + un + "doorbell"]
      }
    };
  }
  return { model: ae, call: $, stop() {
    clearInterval(O), clearInterval(q);
  } };
}
const Po = (a) => a < 0 ? 0 : a > 1 ? 1 : a, Ad = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(i.slice(c, c + 2), 16) || 0);
}, Qu = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), tc = {}, Ra = (a, l, i) => {
  const c = a + l + i;
  return tc[c] || (tc[c] = Qu(Ad(a).map((m, g) => m + (Ad(l)[g] - m) * i)));
}, nc = {}, Ml = (a) => nc[a] || (nc[a] = Ad(a));
function ep(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [Ra(l.clear[0], l.cloudy[0], 0.12), Ra(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Ra(l.rain[0], "#000000", 0.22), Ra(l.rain[1], "#000000", 0.22)], l;
}
const tp = [
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
], Bo = (a, l) => (tp[(l & 7) * 8 + (a & 7)] + 0.5) / 64, $c = 1, Xc = 2, Jc = 3, Qc = 4, Mr = 5, Tl = 6, _d = 7, eu = 8, ac = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), np = (a, l, i) => {
  let c = !1;
  for (let m = 0, g = a.length - 1; m < a.length; g = m++) {
    const w = a[m], A = a[g];
    w[1] > i != A[1] > i && l < (A[0] - w[0]) * (i - w[1]) / (A[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function ap(a, l, i, c, { oneBit: m, ink: g, paper: w, snowInk: A }) {
  const x = new Uint8ClampedArray(i * c * 4), H = Ml(g), le = Ml(w);
  for (let ie = 0; ie < c; ie++) for (let O = 0; O < i; O++) {
    const q = ie * i + O, $ = l[q];
    if (a[q] == null) continue;
    let ae = Ml(a[q]);
    if (m) {
      let Y;
      $ === Qc || $ === eu ? Y = !0 : $ === Mr ? Y = A : $ === _d || $ === Tl ? Y = !1 : Y = Math.round((0.2126 * ae[0] + 0.7152 * ae[1] + 0.0722 * ae[2]) / 255 * 4) / 4 <= Bo(O, ie), ($ === $c || $ === Xc || $ === Jc || $ === Tl) && (O > 0 && l[q - 1] !== $ || O < i - 1 && l[q + 1] !== $ || ie > 0 && l[q - i] !== $ || ie < c - 1 && l[q + i] !== $) && (Y = !0), ae = Y ? H : le;
    }
    x[q * 4] = ae[0], x[q * 4 + 1] = ae[1], x[q * 4 + 2] = ae[2], x[q * 4 + 3] = 255;
  }
  return { w: i, h: c, data: x };
}
const op = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, ip = (a) => _l(a, !1).split("/")[0], sd = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, rp = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", lp = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", dp = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", cp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], up = [".##", "##.", ".#.", "#.."];
function tu(a, { width: l, height: i, colors: c, wave: m = 0.38, soft: g = 6, glow: w = 0.6, columns: A = 6 }) {
  const x = { ...aa, dawn: "#e5a77e", ...c }, H = ep(x), le = l, ie = i, O = le / A, q = O / 2, $ = Math.PI * 2, ae = a.length ? a : [{ cond: "cloudy", night: !1 }], Y = [...Array(A * 2)].map((K, Q) => {
    const T = ae[Math.min(Q, ae.length - 1)], V = ip(T.cond), be = Q % 2 === 1;
    return { cond: T.cond, k: V, night: be, sky: H[V][be ? 1 : 0], cover: op[V] };
  }), W = (K) => ie * (0.5 - m * Math.cos($ * (K / O - 0.25)));
  return { C: x, S: Y, W: le, H: ie, cw: O, sw: q, TAU: $, yb: W, side: (K, Q, T) => {
    const V = (K ? W(Q) - T : T - W(Q)) / Math.max(3, g * 1.4) + 0.5;
    return V <= 0 ? 0 : V >= 1 ? 1 : V;
  }, glowAt: (K) => {
    const Q = ((K / O - 0.25) % 1 + 1) % 1, T = Math.max(0, Math.min(A - 1, Math.round(K / O - 0.25))), V = Math.max(0, Math.min(A - 1, Math.round(K / O - 0.75))), be = 1 - (Y[2 * T].cover + Y[2 * V + 1].cover) / 2, Ae = Math.sin(Math.PI * Math.min(1, Math.max(0, W(K) / ie)));
    return { c: Q < 0.5 ? x.dusk : x.dawn, a: w * (0.2 + 0.8 * be) * Ae * Ae };
  }, soft: g, tw: O * 0.3, sy: ie / 90 };
}
function nu(a, { clock: l = 0, ambient: i = !1, seed: c = 1 }) {
  const { S: m, sw: g, side: w, C: A, TAU: x, sy: H } = a, le = l, ie = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((O, q) => {
    const $ = sd(c * 977 + q * 131 + 7), ae = (q + 0.5) * g, Y = O.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[O.k] : 0;
    for (let W = 0; W < Y; W++) {
      const X = ae + ($() - 0.5) * g * 1.6, G = (6 + $() * 76) * H, K = $() < 0.35, Q = 1.8 + $() * 1.6, T = w(!0, X, G) * (K ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(x * le / 2600 + W * 1.7 + q) : 1);
      T >= 0.03 && ie.stars.push({ x: X, y: G, big: K, size: Q, o: T });
    }
    if (!O.night && (O.k === "clear" || O.k === "partly")) {
      const W = ae + ($() - 0.5) * g * 0.3, X = Math.min(15, g * 0.29);
      ie.suns.push({ x: W, y: 32 * H, rad: X, halo: X * 2.8 * (i ? 1 + 0.07 * Math.sin(x * le / 3600 + q) : 1) });
    }
    if (O.night && (O.k === "clear" || O.k === "partly")) {
      const W = Math.min(0.78, g * 0.55 / 34), X = ae - 23 * W + ($() - 0.5) * g * 0.2;
      ie.moons.push({ x: X + 23 * W, y: (4 + (i ? 0.8 * Math.sin(x * le / 5200 + q) : 0)) * H + 23 * W, d: 46 * W });
    }
  }), m.forEach((O, q) => {
    const $ = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[O.k];
    if (!$) return;
    const ae = sd(c * 577 + q * 71 + 3), Y = (q + 0.5) * g, W = O.k === "rain" || O.k === "storm" || O.night ? A.cloudNight : A.cloudDay, X = O.night ? 0.82 : O.k === "storm" ? 0.75 : 1;
    for (let G = 0; G < $; G++) {
      const K = g / 46 * (O.k === "partly" ? 0.85 : 0.75 + ae() * 0.55), Q = Y + (O.k === "partly" ? g * 0.12 : (ae() - 0.5) * g * 1.05), T = (O.k === "partly" ? 40 : 6 + ae() * 26) * H, V = i ? 2.5 * Math.sin(x * le / 9e3 + q * 1.3 + G * 2.1) : 0, be = i ? 0.9 * Math.sin(x * le / 6100 + q + G) : 0;
      ie.clouds.push({ x: Q - 23 * K + V, y: T - 15.33 * K + be, w: 46 * K, h: 30.66 * K, fill: W, o: X * ($ > 1 && G === 0 ? 0.85 : 1) });
    }
  }), m.forEach((O, q) => {
    const $ = sd(c * 313 + q * 29 + 11), ae = (q + 0.5) * g, Y = O.cond === "pouring" ? 16 : O.cond === "rainy" || O.cond === "hail" ? 9 : O.cond === "lightning-rainy" ? 12 : O.cond === "snowy-rainy" ? 5 : 0;
    for (let X = 0; X < Y; X++) {
      let G = ae + ($() - 0.5) * g * 1.05, K = 44 + $() * 36, Q = 1;
      if (i) {
        const V = ((K - 44 + le * 0.04) % 36 + 36) % 36;
        G -= 0.21 * (V - (K - 44)), K = 44 + V, Q = Math.min(1, V / 6, (36 - V) / 6);
      }
      K *= H;
      const T = w(O.night, G, K) * Q;
      T >= 0.05 && ie.drops.push({ x: G, y: K, o: T });
    }
    const W = O.cond === "snowy" ? 11 : O.cond === "snowy-rainy" ? 6 : 0;
    for (let X = 0; X < W; X++) {
      let G = ae + ($() - 0.5) * g * 1.05, K = 40 + $() * 44, Q = 1;
      if (i) {
        const V = ((K - 40 + le * 9e-3) % 44 + 44) % 44;
        K = 40 + V, G += 1.6 * Math.sin(x * le / 2800 + X * 1.9 + q), Q = Math.min(1, V / 6, (44 - V) / 6);
      }
      K *= H;
      const T = w(O.night, G, K) * Q;
      T >= 0.05 && ie.flakes.push({ x: G, y: K, o: T });
    }
    if (O.k === "fog") {
      const X = O.night ? "#c8ccd6" : "#ffffff", G = O.night ? 0.28 : 0.62, K = i ? 4 * Math.sin(x * le / 8e3 + q) : 0;
      for (let Q = 0; Q < 4; Q++) ie.fogs.push({ x: ae - g * 0.75 + Q % 2 * g * 0.18 + (Q % 2 ? K : -K), y: (30 + Q * 13) * H, w: g * 1.3, c: X, a: G });
    }
    if (O.k === "storm") {
      const X = (le / 3400 + q * 0.37) % 1;
      ie.bolts.push({ x: ae + ($() - 0.5) * g * 0.3 - 5, y: 36 * H, o: i && !(X < 0.05 || X > 0.09 && X < 0.12) ? 0.8 : 1 });
    }
  }), ie;
}
function pp(a, l, i, c, m, g, w, A) {
  const { S: x, C: H, cw: le, yb: ie, glowAt: O, soft: q, tw: $, sy: ae } = a, Y = new Array(i * c), W = new Uint8Array(i * c), X = new Uint8Array(i * c), G = (M, R, C, I, fe) => {
    C == null || M < 0 || R < 0 || M >= i || R >= c || (I >= 1 || I > Bo(M + 5, R + 3)) && (Y[R * i + M] = C, W[R * i + M] = fe);
  }, K = (M, R, C, I) => {
    for (let fe = Math.max(0, Math.floor(R - C) - 1); fe <= Math.min(c - 1, R + C + 1); fe++) for (let z = Math.max(0, Math.floor(M - C) - 1); z <= Math.min(i - 1, M + C + 1); z++) I(z, fe, z + 0.5 - M, fe + 0.5 - R);
  }, Q = (M, R, C) => {
    for (let fe = 0; fe < M.length - 1; fe++) {
      const z = (fe + R) * le;
      if (C < z - $ / 2) return [M[fe], M[fe], 0];
      if (C <= z + $ / 2) return [M[fe], M[fe + 1], (C - z + $ / 2) / $];
    }
    const I = M[M.length - 1];
    return [I, I, 0];
  }, T = x.filter((M) => !M.night).map((M) => M.sky), V = x.filter((M) => M.night).map((M) => M.sky), be = q / g, Ae = 16 * ae / g;
  for (let M = 0; M < i; M++) {
    const R = (M + 0.5) * m, C = ie(R) / g, I = Q(T, 0.75, R), fe = Q(V, 1.25, R), z = O(R);
    for (let re = 0; re < c; re++) {
      const ce = Bo(M, re), ge = re + 0.5 - C, We = (be > 0.01 ? Po(0.5 + ge / be) : ge > 0 ? 1 : 0) > ce;
      let tt = We ? I[2] > ce ? I[1] : I[0] : fe[2] > ce ? fe[1] : fe[0];
      (We ? Po(((re + 0.5) / c - 0.45) / 0.55) * 0.7 : Po(1 - (re + 0.5) / (c * 0.55)) * 0.7) > Bo(M + 2, re + 5) && (tt = We ? Ra(tt, "#ffffff", 0.18) : Ra(tt, "#000000", 0.25)), We && ge >= 0 && ge < Ae && z.a * 1.3 * (1 - ge / Ae) > Bo(M + 6, re + 1) && (tt = z.c), Y[re * i + M] = tt, X[re * i + M] = We ? 0 : 1;
    }
  }
  const y = Ra(H.sun, "#ffffff", 0.55), we = Ra(H.moon, "#ffffff", 0.6);
  l.stars.forEach((M) => {
    const R = Math.floor(M.x / m), C = Math.floor(M.y / g);
    if (R < 0 || C < 0 || R >= i || C >= c || !X[C * i + R] || M.o < 0.15) return;
    const I = M.o > 0.45 ? H.star : Ra(H.star, Y[C * i + R], 0.5), fe = M.big && M.o > 0.6 ? Math.floor(M.size / m) : 0;
    G(R, C, I, 1, _d);
    for (let z = 1; z <= fe; z++) [[R - z, C], [R + z, C], [R, C - z], [R, C + z]].forEach((re) => {
      re[0] >= 0 && re[1] >= 0 && re[0] < i && re[1] < c && X[re[1] * i + re[0]] && G(re[0], re[1], I, 1, _d);
    });
  }), l.suns.forEach((M) => {
    const R = Math.max(1.5, M.rad / m), C = M.x / m, I = M.y / g, fe = M.halo / m * 0.85;
    if (K(C, I, fe, (z, re, ce, ge) => {
      const We = Math.sqrt(ce * ce + ge * ge);
      We > R && We < fe && !X[re * i + z] && G(z, re, y, 0.3 * (1 - (We - R) / (fe - R)), 0);
    }), A) {
      const z = Math.floor(w / 500) % 2, re = Math.max(1, R * 0.3);
      for (let ce = 0; ce < 8; ce++) if (ce % 2 === z) for (let ge = R + 1.2; ge < R + 1.2 + re; ge += 0.7) G(Math.floor(C + Math.cos(ce * Math.PI / 4) * ge), Math.floor(I + Math.sin(ce * Math.PI / 4) * ge), H.sun, 1, eu);
    }
    K(C, I, R, (z, re, ce, ge) => {
      ce * ce + ge * ge <= R * R && G(z, re, Po(((ge / R + 1) / 2 - 0.6) / 0.4) > Bo(z, re) ? H.sunEdge : H.sun, 1, $c);
    });
  }), l.moons.forEach((M) => {
    const R = Math.max(1.5, M.d * 0.37 / m), C = M.x / m, I = M.y / g, fe = C + 0.547 * R, z = I - 0.503 * R, re = 0.82 * R;
    K(C, I, R, (ce, ge, We, tt) => {
      if (We * We + tt * tt > R * R) return;
      const yt = ce + 0.5 - fe, fn = ge + 0.5 - z;
      yt * yt + fn * fn > re * re && G(ce, ge, Po((tt + R) / (2 * R) * 1.1 - 0.1) > Bo(ce, ge) ? H.moon : we, 1, Xc);
    });
  }), l.clouds.forEach((M) => {
    const R = Math.max(3, M.w / m), C = R * 0.6665, I = M.x / m, fe = M.y / g, z = Ra(M.fill, "#000000", 0.16);
    for (let re = Math.max(0, Math.floor(fe) - 1); re <= Math.min(c - 1, fe + C + 1); re++) for (let ce = Math.max(0, Math.floor(I) - 1); ce <= Math.min(i - 1, I + R + 1); ce++) {
      const ge = (ce + 0.5 - I) / R, We = (re + 0.5 - fe) / R;
      ac(ge, We) && G(ce, re, !ac(ge, We + 1 / R) || Po((We - 0.42) / 0.25) * 0.8 > Bo(ce, re) ? z : M.fill, M.o, Jc);
    }
  }), l.fogs.forEach((M) => {
    const R = Math.floor(M.y / g), C = Math.max(R, Math.floor((M.y + 6 * ae) / g) - 1), I = Math.floor(M.x / m), fe = Math.floor((M.x + M.w) / m);
    for (let z = R; z <= C; z++) for (let re = I; re <= fe; re++) {
      const ce = (re - I) / Math.max(1, fe - I);
      G(re, z, M.c, M.a * (ce < 0.25 ? ce / 0.25 : ce > 0.75 ? (1 - ce) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / g));
  l.drops.forEach((M) => {
    const R = M.x / m, C = Math.floor(M.y / g);
    for (let I = 0; I < Ce; I++) G(Math.floor(R - 0.208 * I * g / m), C + I, H.rain, M.o, Qc);
  });
  const qe = Math.max(0, Math.round(4.4 / m / 2.6));
  return l.flakes.forEach((M) => {
    const R = Math.floor(M.x / m), C = Math.floor(M.y / g);
    G(R, C, H.snow, M.o, Mr);
    for (let I = 1; I <= qe; I++)
      G(R - I, C, H.snow, M.o, Mr), G(R + I, C, H.snow, M.o, Mr), G(R, C - I, H.snow, M.o, Mr), G(R, C + I, H.snow, M.o, Mr);
  }), l.bolts.forEach((M) => {
    if (m <= 3.5)
      for (let R = Math.floor(M.y / g); R <= (M.y + 24) / g; R++) for (let C = Math.floor(M.x / m); C <= (M.x + 11) / m; C++)
        np(cp, (C + 0.5) * m - M.x, (R + 0.5) * g - M.y) && G(C, R, H.sun, 1, Tl);
    else {
      const R = Math.round(M.x / m), C = Math.round(M.y / g);
      up.forEach((I, fe) => I.split("").forEach((z, re) => {
        z === "#" && G(R + re, C + fe, H.sun, 1, Tl);
      }));
    }
  }), { col: Y, ids: W };
}
function fp(a, l) {
  const i = l.px, c = Math.max(6, Math.round(l.width / i)), m = Math.max(6, Math.round(l.height / i)), g = l.width / c, w = l.height / m, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, x = (q) => {
    const $ = tu(q, l);
    return pp($, nu($, { clock: A, ambient: l.ambient, seed: l.seed }), c, m, g, w, A, l.ambient);
  }, H = x(a), le = l.reveal == null ? 1 : Po(l.reveal);
  let ie = H.col, O = H.ids;
  if (le < 1) {
    const q = l.prev ? x(l.prev) : null, $ = le * (c + 12);
    ie = new Array(c * m), O = new Uint8Array(c * m);
    for (let ae = 0; ae < c * m; ae++) {
      const Y = ae % c, W = ae / c | 0;
      (l.reduce ? le : Po(($ - Y) / 12)) > Bo(Y, W) ? (ie[ae] = H.col[ae], O[ae] = H.ids[ae]) : q ? (ie[ae] = q.col[ae], O[ae] = q.ids[ae]) : (ie[ae] = null, O[ae] = 255);
    }
  }
  return ap(ie, O, c, m, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function hp(a, l, i) {
  const c = i.width, m = i.height, g = i.reveal == null ? 1 : Po(i.reveal), w = (O, q) => {
    const $ = tu(q, i);
    mp(O, $, nu($, i));
  };
  if (a.clearRect(0, 0, c, m), g >= 1) {
    w(a, l);
    return;
  }
  if (i.prev && w(a, i.prev), i.reduce) {
    a.save(), a.globalAlpha = g, w(a, l), a.restore();
    return;
  }
  const A = a.canvas, x = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (x.width !== A.width || x.height !== A.height) && (x.width = A.width, x.height = A.height);
  const H = x.getContext("2d");
  H.setTransform(a.getTransform()), H.clearRect(0, 0, c, m), w(H, l);
  const le = g * (c + 64) - 64, ie = H.createLinearGradient(le, 0, le + 64, 0);
  ie.addColorStop(0, "rgba(0,0,0,1)"), ie.addColorStop(1, "rgba(0,0,0,0)"), H.globalCompositeOperation = "destination-in", H.fillStyle = ie, H.fillRect(0, 0, c, m), H.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(x, 0, 0), a.restore();
}
function mp(a, l, i) {
  const { W: c, H: m, S: g, C: w, cw: A, yb: x, glowAt: H, soft: le, tw: ie, sy: O } = l, q = (y, we) => {
    const Ce = Ml(y);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, we)).toFixed(3) + ")";
  }, $ = (y, we) => {
    const Ce = a.createLinearGradient(0, 0, c, 0);
    Ce.addColorStop(0, y[0]);
    for (let qe = 0; qe < y.length - 1; qe++) {
      const M = (qe + we) * A, R = (M - ie / 2) / c, C = (M + ie / 2) / c;
      R > 0 && R < 1 && Ce.addColorStop(R, y[qe]), C > 0 && C < 1 && Ce.addColorStop(C, y[qe + 1]);
    }
    return Ce.addColorStop(1, y[y.length - 1]), Ce;
  }, ae = Math.max(24, Math.ceil(c / 4)), Y = (y, we) => {
    a.beginPath();
    for (let Ce = 0; Ce <= ae; Ce++) {
      const qe = c * Ce / ae, M = y == null ? 0 : x(qe) + y;
      Ce ? a.lineTo(qe, M) : a.moveTo(qe, M);
    }
    for (let Ce = ae; Ce >= 0; Ce--) {
      const qe = c * Ce / ae;
      a.lineTo(qe, x(qe) + we);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = $(g.filter((y) => !y.night).map((y) => y.sky), 0.75), a.fillRect(0, 0, c, m);
  const W = a.createLinearGradient(0, 0, c, 0);
  for (let y = 0; y <= 64; y++) {
    const we = H(c * y / 64);
    W.addColorStop(y / 64, q(we.c, Math.min(1, we.a)));
  }
  a.fillStyle = W;
  for (let y = 0; y < 8; y++)
    a.globalAlpha = 1 - y / 8, Y(y * 2 * O, (y + 1) * 2 * O);
  a.fillStyle = $(g.filter((y) => y.night).map((y) => y.sky), 1.25);
  const X = Math.max(0.5, le), G = 6;
  a.globalAlpha = 1, Y(null, -X);
  for (let y = 0; y < G; y++)
    a.globalAlpha = 1 - (y + 0.5) / G, Y(-X + 2 * X * y / G, -X + 2 * X * (y + 1) / G);
  a.globalAlpha = 1;
  const K = new Path2D(lp), Q = new Path2D(sp), T = new Path2D(rp), V = new Path2D(dp);
  a.fillStyle = w.star, i.stars.forEach((y) => {
    a.globalAlpha = y.o, y.big ? (a.save(), a.translate(y.x, y.y), a.scale(y.size, y.size), a.fill(K), a.restore()) : (a.beginPath(), a.arc(y.x, y.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const be = Ra(w.sun, "#ffffff", 0.55);
  i.suns.forEach((y) => {
    const we = a.createRadialGradient(y.x, y.y, 0, y.x, y.y, y.halo);
    we.addColorStop(0, q(be, 0.42)), we.addColorStop(0.7, q(be, 0)), a.fillStyle = we, a.beginPath(), a.arc(y.x, y.y, y.halo, 0, Math.PI * 2), a.fill();
    const Ce = a.createLinearGradient(0, y.y - y.rad, 0, y.y + y.rad);
    Ce.addColorStop(0.6, w.sun), Ce.addColorStop(1, w.sunEdge), a.fillStyle = Ce, a.beginPath(), a.arc(y.x, y.y, y.rad, 0, Math.PI * 2), a.fill();
  });
  const Ae = Ra(w.moon, "#ffffff", 0.6);
  i.moons.forEach((y) => {
    a.save(), a.translate(y.x - y.d / 2, y.y - y.d / 2), a.scale(y.d / 46, y.d / 46);
    const we = a.createLinearGradient(0, 6, 0, 40);
    we.addColorStop(0, Ae), we.addColorStop(1, w.moon), a.fillStyle = we, a.fill(Q), a.restore();
  }), i.clouds.forEach((y) => {
    a.save(), a.globalAlpha = y.o, a.translate(y.x, y.y), a.scale(y.w / 46, y.h / 30.66), a.translate(-4, -9.67), a.fillStyle = y.fill, a.fill(T), a.restore();
  }), i.fogs.forEach((y) => {
    const we = a.createLinearGradient(y.x, 0, y.x + y.w, 0);
    we.addColorStop(0, q(y.c, 0)), we.addColorStop(0.25, q(y.c, y.a)), we.addColorStop(0.75, q(y.c, y.a)), we.addColorStop(1, q(y.c, 0)), a.fillStyle = we, a.fillRect(y.x, y.y, y.w, 6 * O);
  }), a.fillStyle = w.rain, i.drops.forEach((y) => {
    a.save(), a.globalAlpha = y.o, a.translate(y.x, y.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = w.snow, i.flakes.forEach((y) => {
    a.globalAlpha = y.o, a.beginPath(), a.arc(y.x, y.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = w.sun, i.bolts.forEach((y) => {
    a.save(), a.globalAlpha = y.o, a.translate(y.x, y.y), a.fill(V), a.restore();
  }), a.restore();
}
const gp = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", yr = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, ul = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, ld = (a, l) => '<path class="' + l + '" d="' + a + '"/>', vp = (a, l) => ' style="animation-delay:-' + Math.round(a * 137 % l) + 'ms"', Da = (a, l, i, c) => {
  const m = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + vp(a, 2400) + ' d="M' + a + " " + (l - i) + "L" + (a + m) + " " + (l - m) + "L" + (a + i) + " " + l + "L" + (a + m) + " " + (l + m) + "L" + a + " " + (l + i) + "L" + (a - m) + " " + (l + m) + "L" + (a - i) + " " + l + "L" + (a - m) + " " + (l - m) + 'Z"/>';
}, oc = ([a, l, i], c) => '<path class="wbMoonPath" d="' + a + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + l + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', bp = (a, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', wp = (a) => (a ? ["29.35", "43.04", "56.74"].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), xp = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, i], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + l + '" cy="' + i + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function yp(a, l, i, c) {
  return a === "clear" ? l ? oc(i ? ul.l : ul.s, c) + (i ? Da(70, 20, 5.83, 1) + Da(78.33, 41.67, 3.75, 0.8) + Da(60, 71.67, 3.33, 0.6) : Da(42, 12, 3.5, 1) + Da(47, 25, 2.25, 0.8) + Da(36, 43, 2, 0.6)) : bp(c, i) : a === "partly" ? (l ? oc(i ? ul.lp : ul.sp, c) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + ld(i ? yr.lp : yr.sp, l ? "wbCloudLight" : "wbBright") + (l ? i ? Da(73.33, 16.67, 4.17, 0.9) : Da(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? ld(i ? yr.lc : yr.s, l ? "wbCloudLight" : "wbBright") + (l ? i ? Da(15, 15, 3.75, 0.8) + Da(76.67, 13.33, 2.92, 0.6) : Da(9, 9, 2.25, 0.8) + Da(46, 8, 1.75, 0.6) : "") : ld(i ? yr.lr : yr.s, "wbCloudLight") + (a === "rain" ? wp(i) : xp(i));
}
function kp(a, l, i, c) {
  let m = gp(a);
  const g = m === "night" || !!i;
  m === "night" && (m = "clear");
  const w = l ? 90 : 54;
  return { k: m, night: g, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + yp(m, g, l, c) + "</svg>" };
}
const Mp = [
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
], pl = (a, l) => (Mp[l % 8 * 8 + a % 8] + 0.5) / 64, ja = (a) => [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)], qn = (a, l, i) => [Math.round(a[0] + (l[0] - a[0]) * i), Math.round(a[1] + (l[1] - a[1]) * i), Math.round(a[2] + (l[2] - a[2]) * i)], hs = (a) => a < 0 ? 0 : a > 1 ? 1 : a, ic = (a, l) => {
  let i = a * 374761393 + l * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Wi = [255, 255, 255], Jn = ja("#26221e"), rc = ja("#0288d1"), Sp = ja("#01579b"), dd = ja(aa.cloudDay), cd = ja(aa.cloudNight), fl = ja(aa.dusk), ud = ja(aa.sunEdge), Cp = ja(aa.sun), Tp = 10, sc = 0.3, Io = 56, au = 21;
function Lp(a) {
  const l = Array.from({ length: au }, () => new Array(Io).fill(void 0)), i = (w, A, x) => {
    l[A][w] = x;
  }, c = qn(fl, Jn, 0.35), m = qn(Jn, Wi, 0.22);
  for (let w = 0; w <= 6; w++) {
    const A = w < 2 ? Io - 2 : Io - 1;
    for (let x = 6 - w; x <= A; x++) i(x, w, w < 2 ? c : w === 6 ? m : Jn);
  }
  const g = [fl, ud, cd, ja(aa.skyRainDay), qn(fl, Jn, 0.2), qn(a, Jn, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, A) => {
    const x = 9 + A * 6;
    for (let H = 0; H < w; H++) {
      const le = g[(A * 2 + H * 3) % g.length];
      for (let ie = x; ie < x + 5; ie++)
        i(ie, 7 + H * 2, qn(le, Jn, 0.12)), i(ie, 8 + H * 2, H === w - 1 ? qn(le, Wi, 0.3) : le);
      i(x + 5, 7 + H * 2, Jn), i(x + 5, 8 + H * 2, Jn);
    }
  });
  for (let w = 7; w <= 12; w++) i(5, w, Jn);
  i(5, 13, ud);
  for (let w = 7; w <= 14; w++) for (let A = 42; A <= 51; A++) i(A, w, A === 51 ? cd : dd);
  for (let w = 43; w <= 50; w += 2)
    i(w, 12, Jn), i(w, 9, qn(Jn, dd, 0.4));
  for (let w = 40; w <= 53; w++) i(w, 14, w === 40 || w === 53 ? cd : dd);
  for (let w = 15; w <= 18; w++) for (let A = 46; A <= 49; A++) i(A, w, w === 18 ? Jn : w === 16 ? ud : fl);
  for (let w = 15; w <= 19; w++) i(44, w, Jn);
  return i(44, 20, Cp), l;
}
function Ap(a, l, i, c) {
  const m = Math.max(1, Math.round(a)), g = Math.max(1, Math.round(l)), w = new Uint8ClampedArray(m * g * 4), A = ja(c.skyClearDay), x = ja(c.skyFogDay), H = Lp(A), le = Math.round(g * 0.55), ie = hs(1 - Math.log(i / sc) / Math.log(Tp / sc)), O = qn(A, x, ie), q = (W) => hs((W - 0.1) / 0.9), $ = hs((1 - Math.exp(-2 / i) - 0.2) / 0.8), ae = Math.round(m / 2 - Io / 2), Y = le + 3;
  for (let W = 0; W < g; W++) {
    const X = Y - 1 - W, G = W - Y;
    for (let K = 0; K < m; K++) {
      const Q = K - ae;
      let T, V;
      const be = X >= 0 && X < au && Q >= 0 && Q < Io ? H[X][Q] : void 0;
      if (be)
        T = be, V = $;
      else if (X >= 0 && X <= 1 && Q >= 4 - X && Q <= 5 - X)
        T = qn(Wi, rc, 0.15), V = $;
      else if (W < le) {
        const we = hs(((W + 0.5) / le - 0.15) / 0.85) * 3, Ce = Math.min(3, Math.floor(we + pl(K + 2, W + 5)));
        T = qn(O, Wi, Ce * 0.1), V = ie * 0.95;
      } else {
        const we = (W - le + 0.5) / (g - le), Ce = Math.min(1.5, 6e-3 / (we * we)), qe = hs(we * 1.4) * 3, M = Math.min(3, Math.floor(qe + pl(K + 1, W + 6)));
        T = qn(rc, Sp, M / 3);
        const R = 1 + Math.round(we * 7), C = Math.floor(K / (R * 3)), I = 0.06 + 0.16 * we, fe = K % (R * 3) < R;
        fe && ic(C, W) < I ? T = qn(T, Wi, 0.18 + 0.1 * (1 - we)) : fe && we > 0.5 && ic(C, W - 1) < I && (T = qn(T, Jn, 0.12)), V = q(1 - Math.exp(-Ce / i)), G === 0 && Q >= 3 && Q <= 8 ? (T = qn(T, Wi, Q < 6 ? 0.8 : 0.45), V = $) : G >= 0 && G <= 2 && Q >= Io && Q < Io + 40 ? ((1 - (Q - Io) / 40) * (G === 1 ? 0.9 : 0.5) > pl(K, W + 3) && (T = qn(T, Wi, 0.5)), V = $) : G === 0 && Q >= 6 && Q < Io && (T = qn(T, Jn, Q % 2 === 0 ? 0.35 : 0.2), V = $);
      }
      const Ae = V > pl(K, W) ? x : T, y = (W * m + K) * 4;
      w[y] = Ae[0], w[y + 1] = Ae[1], w[y + 2] = Ae[2], w[y + 3] = 255;
    }
  }
  return { data: w, w: m, h: g };
}
const _p = {
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
}, Ep = 1.6;
function Dp(a, l) {
  const i = a ? _p[String(a).toUpperCase()] : void 0;
  if (!i || !(l > 0)) return;
  const c = (g) => Math.abs(Math.log(g[2] / l)), m = i.reduce((g, w) => c(w) < c(g) ? w : g);
  return c(m) <= Math.log(Ep) ? { from: m[0], to: m[1], km: m[2] } : void 0;
}
const Rp = (a, l) => l === "mi" ? a * 1.609344 : l === "m" ? a / 1e3 : l === "ft" ? a * 3048e-7 : l === "yd" ? a * 9144e-7 : a, Np = (a) => a < 1 ? "very_poor" : a < 4 ? "poor" : a < 10 ? "moderate" : a < 20 ? "good" : a < 40 ? "very_good" : "excellent", uo = 6e4, lo = 36e5, zi = 864e5, vs = 1440, Bp = 6, Pp = 10 * uo, hl = 3, pd = 20, Ip = 3, Hp = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Fp = 30 * uo, Op = 7, qp = 3, lc = 1, Wp = uo, zp = 15 * uo, jp = 5, Qn = {
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
}, Ye = {
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
}, Vp = {
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
}, Gp = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], Up = Object.keys(Ye.phases), ml = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, Yp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, ou = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], gl = 100, dc = "µg/m³", Zp = "weather_alerts.air_quality_pollen", cc = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Kp = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, $p = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], Xp = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, Jp = { daily: 1, hourly: 2 }, Oe = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), $n = (a, l) => a.replace(/\{(\w+)\}/g, (i, c) => l[c] ?? ""), Cr = (a) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + a + '"/></svg>', Qp = () => {
  var a;
  return !!((a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Dn = (a) => a != null && a !== "" && Number.isFinite(Number(a)), uc = /* @__PURE__ */ new Map(), pc = /* @__PURE__ */ new Map(), fd = /* @__PURE__ */ new WeakMap(), ef = (a) => {
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
function pn(a, l, i) {
  const c = Number(a);
  if (Number.isNaN(c)) return String(a);
  const m = (l == null ? void 0 : l.number_format) === "none", g = { maximumFractionDigits: 2, ...i, ...m ? { useGrouping: !1 } : {} }, w = m ? "en-US" : ef(l), A = JSON.stringify([w, g]);
  let x = uc.get(A);
  if (!x) {
    try {
      x = new Intl.NumberFormat(w, g);
    } catch {
      x = new Intl.NumberFormat(void 0, g);
    }
    uc.set(A, x);
  }
  return x.format(c);
}
const Id = (a) => {
  var l;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.language) || (a == null ? void 0 : a.language) || void 0;
};
function tf(a) {
  if (!a) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (fd.has(a)) return fd.get(a);
  const l = a.time_format, i = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? a.language : void 0).includes("10") : l === "12";
  return fd.set(a, i), i;
}
const iu = (a) => {
  var l, i;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.time_zone) === "server" && ((i = a == null ? void 0 : a.config) != null && i.time_zone) ? a.config.time_zone : void 0;
};
function ru(a, l) {
  const i = JSON.stringify([a, l]);
  let c = pc.get(i);
  if (!c) {
    try {
      c = new Intl.DateTimeFormat(a, l);
    } catch {
      c = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    pc.set(i, c);
  }
  return c;
}
const kr = (a, l) => ru(Id(l), { hour: "numeric", minute: "2-digit", hourCycle: tf(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: iu(l) }).format(a), fc = (a, l) => ru(Id(l), { weekday: "short", timeZone: iu(l) }).format(a), nf = (a, l) => a.toLocaleDateString(Id(l), { weekday: "narrow" }), Xn = (a, l) => Dn(l) ? pn(Math.round(Number(l)), a.locale) + "°" : "–", Tr = (a) => {
  const l = new Date(a);
  return l.setHours(0, 0, 0, 0), l;
}, ms = (a, l) => a.getFullYear() === l.getFullYear() && a.getMonth() === l.getMonth() && a.getDate() === l.getDate(), ua = Math.PI / 180, af = 2440588, of = 2451545, Ll = ua * 23.4397, rf = 149598e3, sf = -0.833 * ua, lf = 0.133 * ua, hc = 5 * uo, su = (a) => a.getTime() / zi - 0.5 + af - of, lu = (a, l) => Math.atan2(Math.sin(a) * Math.cos(Ll) - Math.tan(l) * Math.sin(Ll), Math.cos(a)), du = (a, l) => Math.asin(Math.sin(l) * Math.cos(Ll) + Math.cos(l) * Math.sin(Ll) * Math.sin(a)), df = (a, l) => ua * (280.16 + 360.9856235 * a) - l, cf = (a, l, i) => Math.asin(Math.sin(l) * Math.sin(i) + Math.cos(l) * Math.cos(i) * Math.cos(a));
function cu(a) {
  const l = ua * (357.5291 + 0.98560028 * a), i = ua * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), c = l + i + ua * 102.9372 + Math.PI;
  return { ra: lu(c, 0), dec: du(c, 0), dist: rf };
}
function uu(a) {
  const l = ua * (218.316 + 13.176396 * a), i = ua * (134.963 + 13.064993 * a), c = ua * (93.272 + 13.22935 * a), m = l + ua * 6.289 * Math.sin(i), g = ua * 5.128 * Math.sin(c);
  return { ra: lu(m, g), dec: du(m, g), dist: 385001 - 20905 * Math.cos(i) };
}
const pu = (a, l, i, c) => {
  const m = su(l), g = a(m);
  return cf(df(m, ua * -c) - g.ra, ua * i, g.dec);
}, Hd = (a, l, i) => pu(cu, a, l, i), uf = (a, l, i) => pu(uu, a, l, i);
function fu(a, l, i, c) {
  const m = {};
  let g = i.getTime(), w = a(i) - l;
  for (let A = g + hc; A <= c.getTime(); A += hc) {
    const x = a(new Date(A)) - l;
    if (w < 0 != x < 0) {
      const H = new Date(g + (A - g) * w / (w - x));
      x > 0 ? m.rise ?? (m.rise = H) : m.set ?? (m.set = H);
    }
    g = A, w = x;
  }
  return m;
}
const hu = (a) => {
  const l = Tr(a);
  return [l, new Date(l.getTime() + zi)];
}, pf = (a, l, i) => fu((c) => Hd(c, l, i), sf, ...hu(a)), ff = (a, l, i) => fu((c) => uf(c, l, i), lf, ...hu(a));
function hf(a) {
  const l = su(a), i = cu(l), c = uu(l), m = Math.acos(Math.sin(i.dec) * Math.sin(c.dec) + Math.cos(i.dec) * Math.cos(c.dec) * Math.cos(i.ra - c.ra)), g = Math.atan2(i.dist * Math.sin(m), c.dist - i.dist * Math.cos(m)), w = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - c.ra), Math.sin(i.dec) * Math.cos(c.dec) - Math.cos(i.dec) * Math.sin(c.dec) * Math.cos(i.ra - c.ra));
  return { fraction: (1 + Math.cos(g)) / 2, phase: 0.5 + 0.5 * g * (w < 0 ? -1 : 1) / Math.PI };
}
const mf = (a) => {
  const l = a * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, Al = (a) => {
  const l = a == null ? void 0 : a.config;
  return l && Dn(l.latitude) && Dn(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function mc(a, l) {
  var H, le, ie;
  const i = Al(a), c = i ? pf(l, i.lat, i.lon) : {}, m = (H = a == null ? void 0 : a.states) == null ? void 0 : H["sun.sun"], g = Tr(l).getTime(), w = (O) => {
    const q = O ? new Date(O) : null;
    return q && Number.isFinite(q.getTime()) && Tr(q).getTime() === g ? q : null;
  }, A = w((le = m == null ? void 0 : m.attributes) == null ? void 0 : le.next_rising), x = w((ie = m == null ? void 0 : m.attributes) == null ? void 0 : ie.next_setting);
  return A && (c.rise = A), x && (c.set = x), c;
}
function gf(a) {
  var c;
  const l = (c = a == null ? void 0 : a.states) == null ? void 0 : c["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const i = Al(a);
  return i ? Hd(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const bs = (a) => !!a && a.state !== "unavailable" && a.state !== "unknown", El = (a, l) => {
  var c;
  const i = (c = a.entities) == null ? void 0 : c[l];
  return !i || !i.hidden && !i.entity_category;
}, ba = (a, l, i) => {
  var c, m;
  for (const g of l) {
    const w = (c = a.states) == null ? void 0 : c[g];
    if (!bs(w)) continue;
    const A = (m = w.attributes) == null ? void 0 : m[i];
    if (A != null && A !== "") return { stateObj: w, value: A };
  }
}, vf = (a, l) => l.map((i) => {
  var c;
  return (c = a.states) == null ? void 0 : c[i];
}).find(bs), bf = (a, l, i) => l.map((c) => {
  var m;
  return (m = a.states) == null ? void 0 : m[c];
}).find((c) => {
  var m;
  return bs(c) && (((m = c.attributes) == null ? void 0 : m.supported_features) == null || Number(c.attributes.supported_features) & Jp[i]);
});
function Sr(a, l, i) {
  var g, w, A, x;
  const c = ((w = (g = a.config) == null ? void 0 : g.unit_system) == null ? void 0 : w.length) || "", m = (l == null ? void 0 : l.attributes) || {};
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
      return m.temperature_unit || ((x = (A = a.config) == null ? void 0 : A.unit_system) == null ? void 0 : x.temperature) || "";
  }
}
function Sl(a, l, i, c) {
  try {
    if (typeof a.formatEntityAttributeValueToParts == "function") {
      const [m, ...g] = a.formatEntityAttributeValueToParts(l, i, c).map((w) => w.value);
      return { number: m, unit: g.join("").trim() };
    }
  } catch {
  }
  return { number: pn(c, a.locale), unit: Sr(a, l, i) };
}
function wf(a, l, i, c) {
  try {
    if (typeof a.formatEntityAttributeValue == "function") return a.formatEntityAttributeValue(l, i, c);
  } catch {
  }
  const m = Sl(a, l, i, c);
  return (m.number + " " + m.unit).trim();
}
function vl(a, l) {
  var c;
  try {
    if (typeof a.formatEntityState == "function") return a.formatEntityState(l);
  } catch {
  }
  const i = (c = l.attributes) == null ? void 0 : c.unit_of_measurement;
  return Vp[l.state] || (i && Dn(l.state) ? pn(l.state, a.locale) + " " + i : l.state);
}
function gc(a, l) {
  var i;
  try {
    if (typeof a.formatEntityName == "function") return a.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((i = l.attributes) == null ? void 0 : i.friendly_name) || l.entity_id;
}
const xf = (a) => a < 3 ? "low" : a < 6 ? "moderate" : a < 8 ? "high" : a < 11 ? "very_high" : "extreme", yf = (a) => ou.find(([, l]) => a <= l)[0];
function kf(a, l) {
  if (l === "Beaufort") return Math.round(a);
  const i = l ? Kp[l] : void 0;
  if (i === void 0) return;
  const c = $p.findIndex((m) => a * i < m);
  return c === -1 ? 12 : c;
}
const vc = (a, l) => {
  const i = l ? Xp[l] : void 0;
  return i === void 0 ? void 0 : a * i;
}, bc = (a) => Object.keys(a.states || {}).find((l) => {
  var i, c;
  return l.startsWith("sensor.") && ((c = (i = a.entities) == null ? void 0 : i[l]) == null ? void 0 : c.platform) === "moon";
}), hd = (a) => Object.values(a.states || {}).filter((l) => {
  var i, c;
  return l.entity_id.startsWith("sensor.") && ((i = l.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = l.attributes) == null ? void 0 : c.state_class) ?? "") && El(a, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function Mf(a) {
  var i;
  const l = {};
  for (const [c, m] of Object.entries(((i = a == null ? void 0 : a.core) == null ? void 0 : i.integration) ?? {})) {
    if (m && "integration_type" in m) {
      l[c] = m.categories;
      continue;
    }
    for (const [g, w] of Object.entries((m == null ? void 0 : m.integrations) ?? {})) l[g] = w == null ? void 0 : w.categories;
  }
  return l;
}
const mu = (a, l, i) => {
  var m, g, w;
  const c = (g = (m = a.entities) == null ? void 0 : m[i]) == null ? void 0 : g.platform;
  return !!c && !!((w = l[c]) != null && w.includes(Zp));
};
function Sf(a, l) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(a.states || {}).filter((c) => {
    var m;
    return c.entity_id.startsWith("sensor.") && cc.includes(((m = c.attributes) == null ? void 0 : m.device_class) ?? "") && El(a, c.entity_id) && mu(a, l, c.entity_id);
  }).sort((c, m) => c.entity_id.localeCompare(m.entity_id)).forEach((c) => {
    i.has(c.attributes.device_class) || i.set(c.attributes.device_class, c.entity_id);
  }), cc.map((c) => i.get(c)).filter(Boolean);
}
const Cf = (a, l) => Object.values(a.states || {}).filter((i) => {
  var c, m;
  return i.entity_id.startsWith("sensor.") && El(a, i.entity_id) && mu(a, l, i.entity_id) && (((m = (c = a.entities) == null ? void 0 : c[i.entity_id]) == null ? void 0 : m.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function wc(a, l, i) {
  const c = Math.max(l - a, 1e-6), m = i[i.length - 1], g = i.find((H) => c / H <= 4) ?? m * Math.ceil(c / (4 * m)), w = Math.floor(a / g) * g;
  let A = Math.ceil(l / g) * g;
  A === w && (A = w + g);
  const x = [];
  for (let H = w; H <= A + g / 1e3; H += g) x.push(H);
  return { min: w, max: A, ticks: x };
}
const gs = (a, l, i) => {
  const c = (w) => [1, 3, 5].map((A) => parseInt(w.slice(A, A + 2), 16)), m = c(a), g = c(l);
  return "rgb(" + m.map((w, A) => Math.round(w + (g[A] - w) * i)).join(", ") + ")";
}, Tf = (a, l, i, c) => {
  const m = i * Math.abs(1 - 2 * c), g = c < 0.5 ? 0 : 1;
  return "M " + a + " " + (l - i) + " A " + i + " " + i + " 0 0 0 " + a + " " + (l + i) + " A " + m + " " + i + " 0 0 " + g + " " + a + " " + (l - i) + " Z";
}, No = ({ icon: a, name: l, sub: i, visual: c, double: m, backdrop: g, cls: w }) => '<div class="wbCard wbSquare' + (m ? " wbDouble" : "") + (g ? " wbHasBackdrop" : "") + (w ? " " + w : "") + '">' + (g ? '<div class="wbBackdrop" aria-hidden="true">' + g + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Cr(a) + '</div><div class="wbText"><span class="wbName">' + Oe(l) + "</span>" + (i ? '<span class="wbSub">' + Oe(i) + "</span>" : "") + '</div></div><div class="wbVisual">' + c + "</div></div>", bl = (a, l) => '<div class="wbValue"><span class="wbNum">' + Oe(a) + "</span>" + (l ? '<span class="wbUnitV">' + Oe(l) + "</span>" : "") + "</div>";
function Lf(a) {
  const l = a.max - a.min || 1, i = (A) => 100 - (Math.min(a.max, Math.max(a.min, A)) - a.min) / l * 100, c = (A) => A / vs * 100 + "%", m = (A) => A.map((x) => x.t + "," + i(x.v)).join(" "), g = a.kind === "line" ? a.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + a.sun.map((A) => '<span class="wbDcSunMark" style="left:' + c(A.t) + '">' + Cr(A.rise ? Qn.sunsetUp : Qn.sunsetDown) + Oe(A.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + a.ticks.map((A) => '<span style="top:' + i(A) + '%">' + Oe(a.format(A)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + vs + ' 100" preserveAspectRatio="none">' + a.night.map(([A, x]) => '<rect class="wbDcNight" x="' + A + '" y="0" width="' + (x - A) + '" height="100"></rect>').join("") + a.ticks.map((A) => '<line class="wbDcGrid" x1="0" x2="' + vs + '" y1="' + i(A) + '" y2="' + i(A) + '" vector-effect="non-scaling-stroke"></line>').join("") + a.sun.map((A) => '<line class="wbDcSunLine" x1="' + A.t + '" x2="' + A.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (a.past && a.past.length > 1 ? '<polyline class="wbDcPast" points="' + m(a.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (g.length > 1 ? '<polygon class="wbDcArea" points="' + g[0].t + ",100 " + m(g) + " " + g[g.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + m(g) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (a.now ? '<line class="wbDcNow" x1="' + a.now.t + '" x2="' + a.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (a.kind === "bars" ? a.points.filter((A) => A.v > 0).map((A) => '<i class="wbDcBar" style="left:' + c(A.t + 12) + ";width:" + c(36) + ";height:" + (100 - i(A.v)) + '%"></i>').join("") : "") + (a.now && a.kind === "line" ? '<i class="wbDcDot" style="left:' + c(a.now.t) + ";top:" + i(a.now.v) + '%"></i>' : "") + (a.peak ? '<span class="wbDcPeak" style="left:' + c(a.peak.t) + ";top:" + i(a.peak.v) + '%">' + Oe(a.peak.label) + "</span>" : "") + (a.note ? '<span class="wbDcNote">' + Oe(a.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + a.hours.map((A) => '<span class="' + (A.minor ? "wbMinor" : "") + '" style="left:' + c(A.t) + '">' + Oe(A.label) + "</span>").join("") + "</div></div>", w;
}
function Af(a, l) {
  const w = a.map((Y) => Y.value), A = Math.min(...w), x = Math.max(...w), H = x - A || 1, le = (Y) => Y / (a.length - 1) * 300, ie = (Y) => 18 + (1 - (Y - A) / H) * 84, O = a.map((Y, W) => le(W) + "," + ie(Y.value)).join(" "), q = w.indexOf(x), $ = w.indexOf(A), ae = (Y) => Y === 0 ? "start" : Y === a.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + O + ' 300,102"></polygon><polyline class="wbLine" points="' + O + '" vector-effect="non-scaling-stroke"></polyline><text x="' + le(q) + '" y="' + (ie(x) - 6) + '" text-anchor="' + ae(q) + '">' + Oe(l(x)) + '</text><text x="' + le($) + '" y="' + (ie(A) + 14) + '" text-anchor="' + ae($) + '">' + Oe(l(A)) + '</text><text x="0" y="120" text-anchor="start">' + Oe(a[0].label) + '</text><text x="300" y="120" text-anchor="end">' + Oe(a[a.length - 1].label) + "</text></svg>";
}
function _f(a, l) {
  const g = a.map((ie) => ie.value).concat([]), w = Math.min(...g) - 2, A = Math.max(...g) + 1, x = A - w || 1, H = 300 / a.length, le = (ie) => (1 - (ie - w) / x) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + a.map((ie, O) => '<rect class="wbBar' + (ie.now ? " wbNowBar" : "") + '" x="' + (O * H + H * 0.2) + '" y="' + le(ie.value) + '" width="' + H * 0.6 + '" height="' + (104 - le(ie.value)) + '" rx="6"></rect><text x="' + (O * H + H / 2) + '" y="120" text-anchor="middle">' + Oe(ie.label) + "</text>").join("") + "</svg>";
}
const Ef = [
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
], Df = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], xc = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Rf = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Nf = 0;
function yc(a, { getHass: l, entityId: i, style: c = "bitmap", motion: m = !0, cards: g, onOpen: w } = {}) {
  var ui, Ba;
  const A = "wb" + ++Nf + "-", x = document.createElement("div");
  x.className = "wb";
  const H = document.createElement("div");
  H.className = "wbBento", x.appendChild(H), a.replaceChildren(x);
  const le = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality"].filter((_) => !g || g.includes(_)), ie = { current: "wide", hourly: "wide", compared_to_average: "double" }, O = {};
  le.forEach((_) => {
    const D = document.createElement("div");
    D.className = "wbItem", D.dataset.card = _, D.dataset.size = ie[_] || "tile", D.hidden = !0, H.appendChild(D), O[_] = { el: D, html: null };
  });
  let q = !1, $ = null, ae = 0, Y = -1, W = !1, X = null;
  const G = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", aq: void 0 }, K = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Q = /* @__PURE__ */ new Date(), T = /* @__PURE__ */ new Date(), V = null;
  const be = {}, Ae = {}, y = (_) => {
    var D;
    return ((D = Ae[_]) == null ? void 0 : D.forecast) ?? [];
  }, we = (_, D) => {
    var F;
    return Ae[D] ? (F = _.states) == null ? void 0 : F[Ae[D].entityId] : void 0;
  };
  function Ce(_) {
    const D = be[_];
    D && (D.unsub.then((F) => {
      typeof F == "function" && F();
    }).catch(() => {
    }), delete be[_]), Ae[_] && delete Ae[_];
  }
  function qe(_, D, F) {
    var ue;
    if (typeof ((ue = _.connection) == null ? void 0 : ue.subscribeMessage) != "function") return;
    const U = { entityId: F };
    try {
      U.unsub = Promise.resolve(_.connection.subscribeMessage((te) => {
        q || be[D] !== U || (te != null && te.forecast ? Ae[D] = { entityId: F, forecast: te.forecast } : delete Ae[D], Kt());
      }, { type: "weather/subscribe_forecast", forecast_type: D, entity_id: F }));
    } catch (te) {
      U.unsub = Promise.reject(te);
    }
    U.unsub.catch(() => {
      be[D] === U && delete be[D];
    }), be[D] = U;
  }
  function M(_, D) {
    var F;
    for (const U of ["daily", "hourly"]) {
      const ue = bf(_, D, U);
      ((F = be[U]) == null ? void 0 : F.entityId) !== (ue == null ? void 0 : ue.entity_id) && (Ce(U), ue && qe(_, U, ue.entity_id));
    }
  }
  const R = (_, D, F, U = !1) => _.callWS({
    type: "history/history_during_period",
    start_time: F.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [D],
    minimal_response: U,
    no_attributes: U,
    significant_changes_only: !1
  });
  async function C(_, D) {
    var pe, ye, xe;
    const F = ba(_, D, "pressure");
    if (!F) return;
    const U = F.stateObj.entity_id, ue = await R(_, U, new Date(Date.now() - 3 * lo)), te = (xe = (ye = (pe = ue == null ? void 0 : ue[U]) == null ? void 0 : pe.find((Fe) => {
      var ze;
      return typeof ((ze = Fe.a) == null ? void 0 : ze.pressure) == "number";
    })) == null ? void 0 : ye.a) == null ? void 0 : xe.pressure;
    K.pressureHistory = typeof te == "number" ? { entityId: U, value: te } : void 0;
  }
  async function I(_, D) {
    var ye;
    const F = ba(_, D, "temperature");
    if (!F) return;
    const U = F.stateObj.entity_id, ue = Tr(/* @__PURE__ */ new Date()), te = await R(_, U, new Date(ue.getTime() - Op * zi)), pe = /* @__PURE__ */ new Map();
    for (const xe of (te == null ? void 0 : te[U]) ?? []) {
      const Fe = (ye = xe.a) == null ? void 0 : ye.temperature, ze = new Date((xe.lc ?? xe.lu) * 1e3);
      if (typeof Fe != "number" || ze >= ue) continue;
      const Ke = ze.toDateString();
      pe.set(Ke, Math.max(pe.get(Ke) ?? -1 / 0, Fe));
    }
    K.temperatureHistory = { entityId: U, dailyHighs: [...pe.values()], days: [...pe.entries()].map(([xe, Fe]) => ({ date: new Date(xe), high: Fe })) };
  }
  async function fe(_) {
    const D = hd(_);
    if (!D) return;
    const F = await _.callWS({ type: "recorder/statistic_during_period", statistic_id: D, rolling_window: { duration: { hours: 24 } } });
    K.rain = { entityId: D, change: (F == null ? void 0 : F.change) ?? void 0 };
  }
  function z() {
    const _ = l == null ? void 0 : l();
    if (!_ || q || typeof _.callWS != "function") return;
    const D = We(_);
    K.lastFetch = Date.now(), [C(_, D), I(_, D), fe(_)].forEach((F) => F.then(() => Kt(), () => {
    }));
  }
  async function re() {
    const _ = l == null ? void 0 : l();
    if (!_) return;
    const D = ba(_, We(_), "temperature");
    if (!D) return;
    const F = D.stateObj.entity_id, U = Tr(/* @__PURE__ */ new Date());
    try {
      const ue = await R(_, F, U), te = (pe) => ((ue == null ? void 0 : ue[F]) ?? []).map((ye) => {
        var xe;
        return { time: ye.lu * 1e3, value: (xe = ye.a) == null ? void 0 : xe[pe] };
      }).filter((ye) => typeof ye.value == "number");
      K.todayHistory = { day: U.toDateString(), fetched: Date.now(), temperature: te("temperature"), humidity: te("humidity") }, Kt();
    } catch {
    }
  }
  async function ce(_) {
    const D = l == null ? void 0 : l();
    if (D)
      try {
        const F = await R(D, _, new Date(Date.now() - 24 * lo), !0), U = ((F == null ? void 0 : F[_]) ?? []).filter((te) => Dn(te.s)), ue = Math.max(1, Math.ceil(U.length / 48));
        K.aqHistory = { entityId: _, points: U.filter((te, pe) => pe % ue === 0).map((te) => ({ label: kr(new Date(te.lu * 1e3), D), value: Number(te.s) })) }, Kt();
      } catch {
      }
  }
  function ge(_) {
    K.categories === void 0 && (K.categories = null, Promise.resolve().then(() => _.callWS({ type: "integration/descriptions" })).then((D) => {
      K.categories = Mf(D);
    }, () => {
      K.categories = {};
    }).then(() => Kt()));
  }
  function We(_) {
    var F;
    const D = Object.keys(_.states || {}).filter((U) => U.startsWith("weather.") && El(_, U)).sort();
    return i && ((F = _.states) != null && F[i]) ? [i, ...D.filter((U) => U !== i)] : D;
  }
  const tt = (_) => K.categories ? { air: Sf(_, K.categories), pollen: Cf(_, K.categories) } : { air: [], pollen: [] };
  function yt(_, D, F, U) {
    if (c === "smooth") {
      const ue = kp(_, D === 90, F, A + "g-" + U);
      return '<span class="wbWx wbS' + D + " wb" + ue.k[0].toUpperCase() + ue.k.slice(1) + (ue.night ? " wbNight" : "") + '" aria-hidden="true">' + ue.svg + "</span>";
    }
    return '<span class="wbWx wbS' + D + '" aria-hidden="true"><canvas data-wb-wx="' + Oe(_l(_, F)) + '" data-size="' + D + '"></canvas></span>';
  }
  const fn = () => y("daily").filter((_) => _.templow != null).slice(0, Bp);
  function Rn(_, D) {
    const F = new Date(D.datetime), U = /* @__PURE__ */ new Date();
    return ms(F, U) ? Ye.today : ms(F, new Date(U.getTime() + zi)) ? Ye.tomorrow : fc(F, _);
  }
  const Lt = (_, D, F) => F === 0 ? Rn(_, D) : fc(new Date(D.datetime), _);
  function Ze(_, D) {
    var ze, Ke, je, De;
    const F = vf(_, D);
    if (!F) return "";
    const U = fn(), ue = G.openDay !== void 0 ? U[G.openDay] : void 0, te = ba(_, D, "temperature"), pe = U[0], ye = pe && ms(new Date(pe.datetime), /* @__PURE__ */ new Date()), xe = ((Ke = (ze = _.config) == null ? void 0 : ze.unit_system) == null ? void 0 : Ke.temperature) || ((je = F.attributes) == null ? void 0 : je.temperature_unit) || "";
    let Fe = '<div class="wbCard wbWeather' + (ue ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (ue ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Oe(Ye.openPage) + '">' : '<div class="wbCurrent">') + yt(F.state, 90, gf(_), "now") + '<div class="wbTempBlock">' + (te && Dn(te.value) ? '<div class="wbTemp"><span class="wbDeg">' + Oe(pn(Math.round(Number(te.value)), _.locale)) + '</span><span class="wbUnit">' + Oe(xe) + "</span></div>" : "") + '<div class="wbPlace">' + Oe(((De = _.config) == null ? void 0 : De.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Oe(vl(_, F)) + "</div>" + (ye && pe.templow != null ? '<div class="wbRange">' + Oe($n(Ye.range, { high: Xn(_, pe.temperature), low: Xn(_, pe.templow) })) + "</div>" : "") + "</div></div>";
    return U.length && (Fe += '<div class="wbColumns" role="list">' + U.map(($e, Pe) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Pe + '" data-wb-focus="col-' + Pe + '"><span class="wbDay">' + Oe(Lt(_, $e, Pe)) + "</span>" + yt($e.condition ?? "cloudy", 60, !1, "col" + Pe) + '<span class="wbTemps"><span class="wbHi">' + Oe(Xn(_, $e.temperature)) + '</span><span class="wbLo">' + Oe(Xn(_, $e.templow)) + "</span></span></button>").join("") + "</div>", Fe += '<div class="wbHalves" role="list">' + U.map(($e, Pe) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Pe + '" data-wb-focus="half-' + Pe + '">' + yt($e.condition ?? "cloudy", 40, !1, "half" + Pe) + '<span class="wbText"><span class="wbName">' + Oe(Rn(_, $e)) + '</span><span class="wbSub">' + Oe($n(Ye.highLow, { high: Xn(_, $e.temperature), low: Xn(_, $e.templow) })) + "</span></span></button>").join("") + "</div>"), Fe + "</div>" + (ue ? hn(_, D, ue) : "") + "</div>";
  }
  function Mt(_) {
    const D = _.getTime(), F = Date.now() - lo;
    return y("hourly").filter((U) => {
      const ue = new Date(U.datetime).getTime();
      return ue >= D && ue < D + zi && ue > F;
    });
  }
  function Je(_) {
    if (!_.length) return ["temperature"];
    const D = ["temperature"];
    return _.some((F) => F.precipitation != null || F.precipitation_probability != null) && D.push("precipitation"), _.some((F) => F.humidity != null) && D.push("humidity"), D;
  }
  function hn(_, D, F) {
    const U = Tr(new Date(F.datetime)), ue = Mt(U), te = Je(ue), pe = te.includes(G.dayMode) ? G.dayMode : "temperature", ye = (xe) => xe === "humidity" ? Ye.humidity : Ye.modes[xe];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + yt(F.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Oe(Rn(_, F)) + '</span><span class="wbSub">' + Oe($n(Ye.highLow, { high: Xn(_, F.temperature), low: Xn(_, F.templow) })) + '</span></div><button class="wbBack" title="' + Oe(Ye.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Cr(Qn.back) + "</button></div>" + (te.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + te.map((xe) => '<button aria-pressed="' + (xe === pe) + '" data-wb="day-mode" data-mode="' + xe + '" data-wb-focus="day-mode-' + xe + '">' + Oe(ye(xe)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Lf(kn(_, D, U, ue, pe)) + "</div></div>";
  }
  function kn(_, D, F, U, ue) {
    var fi;
    const te = F.getTime(), pe = Date.now(), ye = ms(F, /* @__PURE__ */ new Date()), xe = (vt) => (vt - te) / uo, Fe = (vt) => kr(new Date(vt), _), ze = (vt) => new Date(vt.datetime).getTime(), Ke = [0, 3, 6, 9, 12, 15, 18, 21].map((vt) => ({ t: vt * 60, label: Fe(te + vt * lo), minor: vt % 6 !== 0 })), { rise: je, set: De } = mc(_, F), $e = [], Pe = [];
    je && ($e.push({ t: xe(je.getTime()), label: Fe(je.getTime()), rise: !0 }), Pe.push([0, xe(je.getTime())])), De && ($e.push({ t: xe(De.getTime()), label: Fe(De.getTime()), rise: !1 }), Pe.push([xe(De.getTime()), vs]));
    const at = Al(_);
    !je && !De && at && Hd(new Date(te + zi / 2), at.lat, at.lon) < 0 && Pe.push([0, vs]);
    const ct = ye ? xe(pe) : void 0, Rt = { hours: Ke, sun: $e, night: Pe };
    if (!U.length && !ye) return { ...Rt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ye.noHourly };
    if (ue === "precipitation") {
      const vt = U.some((gn) => gn.precipitation_probability != null), jn = U.map((gn) => ({ t: xe(ze(gn)), v: Number((vt ? gn.precipitation_probability : gn.precipitation) ?? 0) })), oa = Sr(_, we(_, "hourly"), "precipitation"), Pa = Math.max(0, ...jn.map((gn) => gn.v)), Cn = vt ? 100 : wc(0, Math.max(Pa, 1), [0.5, 1, 2, 5, 10]).max, qo = (gn) => vt ? pn(gn, _.locale) + "%" : pn(gn, _.locale, { maximumFractionDigits: 1 }) + " " + oa, At = jn.find((gn) => gn.v === Pa);
      return {
        ...Rt,
        kind: "bars",
        points: jn,
        min: 0,
        max: Cn,
        ticks: [0, Cn / 2, Cn],
        format: qo,
        now: ct !== void 0 ? { t: ct, v: 0 } : void 0,
        peak: At && Pa > 0 ? { t: At.t + 30, v: At.v, label: qo(At.v) } : void 0,
        note: Pa > 0 ? void 0 : Ye.noRain
      };
    }
    const bt = ue === "humidity" ? "humidity" : "temperature", Jt = U.filter((vt) => vt[bt] != null && (!ye || ze(vt) >= pe)).map((vt) => ({ t: xe(ze(vt)), v: Number(vt[bt]) }));
    let Sn, zn = [];
    if (ct !== void 0) {
      const vt = ba(_, D, bt);
      vt && Dn(vt.value) && (Sn = { t: ct, v: Number(vt.value) }, Jt.unshift(Sn)), zn = (((fi = K.todayHistory) == null ? void 0 : fi.day) === F.toDateString() ? K.todayHistory[bt] : []).filter((oa) => oa.time <= pe).map((oa) => ({ t: Math.max(0, xe(oa.time)), v: oa.value })), Sn && zn.length && zn.push(Sn);
    }
    const on = [...zn, ...Jt];
    if (!on.length) return { ...Rt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ye.noHourly };
    const Oo = on.map((vt) => vt.v), pa = wc(Math.min(...Oo), Math.max(...Oo), bt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    bt === "humidity" && (pa.min = Math.max(0, pa.min), pa.max = Math.min(100, pa.max), pa.ticks = pa.ticks.filter((vt) => vt >= 0 && vt <= 100));
    const Ga = bt === "humidity" ? (vt) => pn(vt, _.locale) + "%" : (vt) => Xn(_, vt), pi = bt === "temperature" ? on.reduce((vt, jn) => jn.v > vt.v ? jn : vt) : void 0;
    return { ...Rt, kind: "line", points: Jt, past: zn, ...pa, format: Ga, now: Sn, peak: pi ? { ...pi, label: Ga(pi.v) } : void 0 };
  }
  function ji(_) {
    const D = ["temperature"];
    return _.some((F) => F.precipitation_probability != null || F.precipitation != null) && D.push("precipitation"), _.some((F) => F.wind_speed != null) && D.push("wind"), D;
  }
  function lt() {
    const _ = /* @__PURE__ */ new Date();
    return _.setHours(6, 0, 0, 0), _.getTime() > Date.now() && _.setDate(_.getDate() - 1), _;
  }
  function Ue(_, D) {
    var ue, te;
    const F = y("daily"), U = [];
    for (let pe = 0; pe < hl; pe++) for (const ye of [!1, !0]) {
      const xe = _.getTime() + (pe * 24 + (ye ? 12 : 0)) * lo, Fe = xe + 12 * lo, ze = {};
      D.forEach((je) => {
        const De = new Date(je.datetime).getTime();
        je.condition && De >= xe && De < Fe && (ze[je.condition] = (ze[je.condition] ?? 0) + (Hp.has(je.condition) ? 2 : 1));
      });
      let Ke = (ue = Object.entries(ze).sort((je, De) => De[1] - je[1])[0]) == null ? void 0 : ue[0];
      if (!Ke) {
        const je = new Date(xe).toDateString();
        Ke = ((te = F.find((De) => new Date(De.datetime).toDateString() === je)) == null ? void 0 : te.condition) ?? "cloudy";
      }
      U.push({ cond: ye && Ke === "sunny" ? "clear-night" : Ke, night: ye });
    }
    return U;
  }
  function mt(_, D, F) {
    const U = we(_, "hourly"), ue = D.precipitation_probability != null ? pn(D.precipitation_probability, _.locale) + "%" : "", te = D.precipitation ? pn(D.precipitation, _.locale) + " " + Sr(_, U, "precipitation") : "";
    switch (F) {
      case "precipitation":
        return ue ? [ue, te] : [te || "–", ""];
      case "wind":
        return D.wind_speed != null ? [pn(Math.round(D.wind_speed), _.locale), Sr(_, U, "wind_speed")] : ["–", ""];
      default:
        return [Xn(_, D.temperature), (D.precipitation_probability ?? 0) >= 20 ? ue : ""];
    }
  }
  function fo(_) {
    V = null;
    const D = y("hourly"), F = Math.floor(Date.now() / uo) * uo, U = D.filter((De) => new Date(De.datetime).getTime() > F - lo);
    if (!U.length) return "";
    const ue = ji(U), te = ue.includes(G.hourlyMode) ? G.hourlyMode : "temperature", pe = lt(), ye = pe.getTime() + hl * 24 * lo, xe = (F - pe.getTime()) / lo * pd, Fe = hl * 24 * pd, ze = (De) => (De - F) / lo * pd, Ke = [{ x: 0, label: Ye.now, entry: U[0] }, ...U.filter((De) => {
      const $e = new Date(De.datetime);
      return ze($e.getTime()) >= 48 && $e.getTime() < ye && $e.getHours() % Ip === 0;
    }).map((De) => {
      const $e = new Date(De.datetime);
      return { x: ze($e.getTime()), label: kr($e, _), entry: De };
    })], je = (De, $e, Pe) => '<span class="wbMark' + ($e === 0 ? " wbFirst" : "") + '" style="left:' + De.x + 'px">' + Pe + "</span>";
    return V = { segs: Ue(pe, D), seed: pe.getDate() }, '<div class="wbCard wbHc wbHourly"><div class="wbHeader"><h2 class="wbTitle">' + Oe(Ye.nextHours) + "</h2></div>" + (ue.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + ue.map((De) => '<button aria-pressed="' + (De === te) + '" data-wb="hourly-mode" data-mode="' + De + '" data-wb-focus="hourly-mode-' + De + '">' + Oe(Ye.modes[De]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll"><div class="wbStrip" style="width:' + (Fe - xe) + 'px"><div class="wbRow wbTimes">' + Ke.map((De, $e) => je(De, $e, Oe(De.label))).join("") + '</div><div class="wbSky"><div class="wbSkyArt" style="left:' + -xe + "px;width:" + Fe + 'px"><canvas data-wb-strip' + (c === "smooth" ? "" : ' class="wbPixels"') + '></canvas></div></div><div class="wbRow wbValues">' + Ke.map((De, $e) => {
      if (!De.entry) return "";
      const [Pe, at] = mt(_, De.entry, te);
      return je(De, $e, '<span class="wbPrimaryV">' + Oe(Pe) + '</span><span class="wbSecondary">' + Oe(at) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Vi(_) {
    const D = Q, { rise: F, set: U } = mc(_, D), ue = F && U ? Math.round((U.getTime() - F.getTime()) / uo) : 0, te = Math.floor(ue / 60), pe = ue % 60, ye = F && U ? (D.getTime() - F.getTime()) / (U.getTime() - F.getTime()) : -1, xe = ye >= 0 && ye <= 1, Fe = Math.PI * (1 - Math.min(1, Math.max(0, ye))), ze = 100 + 74 * Math.cos(Fe), Ke = 100 - 74 * Math.sin(Fe), je = xe ? Math.sin(Math.PI * ye) : 0, De = xe ? gs("#2e0a0d", "#43180a", je) : "#0e0507", $e = xe ? gs("#7a1d12", "#8f400f", je) : "#1c0709", Pe = gs("#f60c08", "#ff8f00", je), at = gs("#fd9b07", "#ffd84a", je), ct = xe ? gs("#fd9b07", "#ffd84a", je) : "#6b3a2a", Rt = (Jt) => Jt ? kr(Jt, _) : "–", bt = F && U ? new Date((F.getTime() + U.getTime()) / 2) : null;
    return No({
      icon: Qn.sunny,
      name: Ye.sun,
      sub: ue ? $n(Ye.daylightShort, { hours: te, minutes: pe }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + De + ", " + $e + ");--wb-sun-line:" + ct + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + A + 'sun-glow"><stop offset="0" stop-color="' + Pe + '"></stop><stop offset="0.45" stop-color="' + Pe + '"></stop><stop offset="1" stop-color="' + at + '"></stop></radialGradient><clipPath id="' + A + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (xe ? '<circle cx="' + ze + '" cy="' + Ke + '" r="14" fill="url(#' + A + 'sun-glow)" clip-path="url(#' + A + 'above-horizon)"></circle>' : "") + (bt ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Oe(Rt(bt)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Oe(Rt(F)) + '</text><text class="wbSunTime" x="174" y="117">' + Oe(Rt(U)) + "</text></svg></div>"
    });
  }
  function di(_, D, F) {
    const U = (pe) => A + "moon-" + pe, ue = _ > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + U("terminator") + ')" d="' + Tf(61, 61, 57.9, _) + '"' + (D ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", te = (pe, ye, xe, Fe, ze, Ke) => '<filter id="' + U(pe) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + ye + '" numOctaves="' + xe + '" seed="' + Fe + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((je) => "<feFunc" + je + ' type="linear" slope="' + ze + '" intercept="' + Ke + '"></feFunc' + je + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + U("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + U("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + U("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + U("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + U("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + te("mottle", "0.045", 4, 3, 1.8, -0.4) + te("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + U("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + U("fill") + ')"></circle><g' + (F ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + U("soften") + ')">' + Ef.map(([pe, ye, xe, Fe, ze, Ke]) => '<ellipse cx="' + pe + '" cy="' + ye + '" rx="' + xe + '" ry="' + Fe + '" fill-opacity="' + Ke + '" transform="rotate(' + ze + " " + pe + " " + ye + ')"></ellipse>').join("") + "</g>" + Df.map(([pe, ye, xe]) => '<circle class="wbCrater" cx="' + pe + '" cy="' + ye + '" r="' + xe + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + U("glow") + ')">' + Rf.map(([pe, ye]) => '<line x1="54.4" y1="95" x2="' + pe + '" y2="' + ye + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + U("glow") + ')">' + xc.map(([pe, ye, xe]) => '<circle cx="' + pe + '" cy="' + ye + '" r="' + xe * 2 + '"></circle>').join("") + "</g>" + xc.map(([pe, ye, xe]) => '<circle class="wbBrightCenter" cx="' + pe + '" cy="' + ye + '" r="' + xe + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + U("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + U("grain") + ')"></rect>' + ue + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function mn(_) {
    const D = T, F = Al(_), U = (F == null ? void 0 : F.lat) ?? 0, ue = hf(D), te = bc(_), pe = te ? _.states[te] : void 0, ye = bs(pe) && Up.includes(pe.state) ? pe.state : mf(ue.phase), { rise: xe, set: Fe } = F ? ff(D, F.lat, F.lon) : {}, ze = ue.phase > 0.5 != U < 0, Ke = pn(Math.round(ue.fraction * 100), _.locale) + "%", je = xe ?? Fe, De = je ? kr(je, _) : void 0;
    return No({
      icon: Qn.night,
      name: Ye.moon,
      sub: Ye.phases[ye],
      visual: '<div class="wbMoonBox">' + di(ue.fraction, ze, U < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (De ? Oe($n(xe ? Ye.moonriseAt : Ye.moonsetAt, { time: De })) : "") + "</span><span>" + Oe($n(Ye.lit, { illumination: Ke })) + "</span></div>"
    });
  }
  function nt(_, D) {
    var $e;
    const F = ba(_, D, "wind_speed");
    if (!F || !Dn(F.value)) return "";
    const U = ba(_, D, "wind_gust_speed"), ue = ba(_, D, "wind_bearing"), te = ue && Dn(ue.value) ? Number(ue.value) : void 0, pe = kf(Number(F.value), ($e = F.stateObj.attributes) == null ? void 0 : $e.wind_speed_unit), ye = Sl(_, F.stateObj, "wind_speed", F.value), xe = te !== void 0 ? Ye.cardinal[Gp[((te + 11.25) / 22.5 | 0) % 16]] : void 0, Fe = U ? wf(_, U.stateObj, "wind_gust_speed", U.value) : void 0, ze = [xe ? $n(Ye.windFrom, { direction: xe }) : void 0, pe !== void 0 ? pe + " " + Ye.beaufort : void 0].filter(Boolean).join(" · ") || Fe, Ke = (Pe, at) => {
      const ct = (Pe - 90) * Math.PI / 180;
      return [100 + at * Math.cos(ct), 100 + at * Math.sin(ct)];
    }, je = Array.from({ length: 36 }, (Pe, at) => at * 10).map((Pe) => {
      const at = Pe % 90 === 0, [ct, Rt] = Ke(Pe, 97), [bt, Jt] = Ke(Pe, at ? 83 : 89);
      return '<line class="wbTick' + (at ? " wbMajor" : "") + '" x1="' + ct + '" y1="' + Rt + '" x2="' + bt + '" y2="' + Jt + '"></line>';
    }).join(""), De = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Pe, at]) => {
      const [ct, Rt] = Ke(at, 64);
      return '<text class="wbLetter' + (Pe === "n" ? " wbNorth" : "") + '" x="' + ct + '" y="' + Rt + '">' + Oe(Ye.cardinal[Pe]) + "</text>";
    }).join("");
    return No({ icon: Qn.windy, name: Ye.wind, sub: ze, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + je + De + (te !== void 0 ? '<path class="wbMarker" transform="rotate(' + te + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Oe(ye.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Oe(ye.unit) + "</text></svg>" });
  }
  function Wn(_, D) {
    const F = ba(_, D, "uv_index");
    if (!F || !Dn(F.value)) return "";
    const U = Number(F.value), ue = Ye.uvLevel[xf(U)], te = /* @__PURE__ */ new Date();
    te.setHours(23, 59, 59, 999);
    const pe = y("hourly").filter((Pe) => Pe.uv_index != null && new Date(Pe.datetime) > /* @__PURE__ */ new Date() && new Date(Pe.datetime) <= te).reduce((Pe, at) => !Pe || at.uv_index > Pe.uv ? { uv: at.uv_index, time: new Date(at.datetime) } : Pe, void 0), ye = 48, xe = 100, Fe = 130, ze = (Pe) => -ye + Math.min(Pe, 11) / 11 * 2 * ye, Ke = (Pe, at) => {
      const ct = Pe * Math.PI / 180;
      return [xe + at * Math.sin(ct), Fe - at * Math.cos(ct)];
    }, je = (Pe, at, ct) => {
      const [Rt, bt] = Ke(ze(Pe), ct), [Jt, Sn] = Ke(ze(at), ct);
      return "M " + Rt + " " + bt + " A " + ct + " " + ct + " 0 0 1 " + Jt + " " + Sn;
    }, $e = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, ml.low], [3, 6, ml.moderate], [6, 8, ml.high], [8, 11, ml.very_high]].map(([Pe, at, ct]) => '<path class="wbVuZone" d="' + je(Pe, at, 96) + '" style="stroke:' + ct + '"></path>').join("") + Array.from({ length: 21 }, (Pe, at) => ({ angle: -ye + at * (2 * ye / 20), major: at % 2 === 0 })).map(({ angle: Pe, major: at }) => {
      const [ct, Rt] = Ke(Pe, 102), [bt, Jt] = Ke(Pe, at ? 114 : 108);
      return '<line class="wbVuTick' + (at ? " wbMajor" : "") + '" x1="' + ct + '" y1="' + Rt + '" x2="' + bt + '" y2="' + Jt + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + ze(U) + 'deg"><line x1="' + xe + '" y1="' + Fe + '" x2="' + xe + '" y2="' + (Fe - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + Oe(pn(Math.round(U), _.locale)) + "</text></svg>";
    return No({
      icon: Qn.sunnyAlert,
      name: Ye.metrics.uv_index,
      sub: pe && pe.uv > U ? $n(Ye.uvPeak, { level: ue, uv_index: pn(Math.round(pe.uv), _.locale), time: kr(pe.time, _) }) : ue,
      visual: $e
    });
  }
  function Gi(_) {
    const D = y("daily")[0], F = K.temperatureHistory;
    if (!D || new Date(D.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Dn(D.temperature) || !F || F.dailyHighs.length < qp) return "";
    const U = Number(D.temperature), ue = F.dailyHighs.reduce((bt, Jt) => bt + Jt, 0) / F.dailyHighs.length, te = Math.round(U - ue) || 0, pe = te > 0 ? "above" : te < 0 ? "below" : "same", ye = [...F.days, { date: /* @__PURE__ */ new Date(), high: U, today: !0 }], xe = 220, Fe = 158, ze = 22, Ke = 20, je = ye.map((bt) => bt.high).concat(ue), De = Math.min(...je) - 3, $e = Math.max(...je) + 1, Pe = (bt) => ze + (1 - (bt - De) / ($e - De)) * (Fe - ze - Ke), at = xe / ye.length, ct = Math.min(18, at * 0.6), Rt = '<svg class="wbCompareBars" viewBox="0 0 ' + xe + " " + Fe + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + xe + '" y1="' + Pe(ue) + '" y2="' + Pe(ue) + '"></line>' + ye.map((bt, Jt) => {
      const Sn = Jt * at + at / 2, zn = Pe(bt.high), on = bt.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + on + '" x="' + (Sn - ct / 2) + '" y="' + zn + '" width="' + ct + '" height="' + (Fe - Ke - zn) + '" rx="5"></rect><text class="wbAvgValue' + on + '" x="' + Sn + '" y="' + (zn - 6) + '">' + Oe(Xn(_, bt.high)) + '</text><text class="wbAvgDay' + on + '" x="' + Sn + '" y="' + (Fe - 4) + '">' + Oe(nf(bt.date, _)) + "</text>";
    }).join("") + "</svg>";
    return No({
      icon: Qn.chartLine,
      name: Ye.metrics.compared_to_average,
      double: !0,
      sub: $n(Ye.highsLastDays, { days: F.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (te > 0 ? "+" : "") + Oe(Xn(_, te)) + '</div><div class="wbCompareWords">' + Oe(Ye.average[pe]) + '</div><div class="wbCompareTemps">' + Oe($n(Ye.todayVsAverage, { today: Xn(_, U), average: Xn(_, ue) })) + "</div></div>" + Rt + "</div>"
    });
  }
  function gt(_, D) {
    const F = ba(_, D, "humidity");
    if (!F || !Dn(F.value)) return "";
    const U = ba(_, D, "dew_point"), ue = Math.max(0, Math.min(100, Number(F.value)));
    return No({
      icon: Qn.waterPercent,
      name: Ye.metrics.humidity,
      sub: U && Dn(U.value) ? $n(Ye.dewPoint, { dew_point: Xn(_, U.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + ue + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + bl(pn(Math.round(Number(F.value)), _.locale), "%") + "</div>"
    });
  }
  function _e(_, D) {
    var Fe, ze;
    const F = ba(_, D, "pressure");
    if (!F || !Dn(F.value)) return "";
    const U = Number(F.value), ue = (Fe = F.stateObj.attributes) == null ? void 0 : Fe.pressure_unit, te = vc(U, ue), pe = ((ze = K.pressureHistory) == null ? void 0 : ze.entityId) === F.stateObj.entity_id ? vc(K.pressureHistory.value, ue) : void 0;
    let ye;
    if (te !== void 0 && pe !== void 0) {
      const Ke = te - pe;
      ye = Ke >= lc ? "rising" : Ke <= -lc ? "falling" : "steady";
    }
    const xe = Sl(_, F.stateObj, "pressure", Math.round(U));
    return No({
      icon: Qn.gauge,
      name: Ye.metrics.pressure,
      sub: ye ? Ye.pressure[ye] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + bl(xe.number) + '<span class="wbTapeUnit">' + Oe(xe.unit) + "</span></div>" + (te !== void 0 ? dt(_, te) : "") + "</div>"
    });
  }
  function dt(_, D) {
    const ue = Math.floor(D) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (te, pe) => ue + pe).map((te) => {
      const pe = 100 - (te - D) * 9;
      if (pe < 22 || pe > 178) return "";
      const ye = te % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(pe - 100) / 100) + '"><line class="wbTapeTick" x1="' + (ye ? 2 : 8) + '" x2="26" y1="' + pe + '" y2="' + pe + '"></line>' + (ye ? '<text class="wbTapeLabel" x="33" y="' + pe + '">' + Oe(pn(te, _.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Oe(Ye.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Oe(Ye.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function wt(_) {
    var xe, Fe;
    const D = hd(_), F = D ? _.states[D] : void 0;
    if (!F || ((xe = K.rain) == null ? void 0 : xe.entityId) !== D || !Dn(K.rain.change)) return "";
    const U = ((Fe = F.attributes) == null ? void 0 : Fe.unit_of_measurement) ?? "", ue = we(_, "hourly"), te = Date.now() + zi, pe = y("hourly").filter((ze) => ze.precipitation != null && new Date(ze.datetime).getTime() <= te), ye = pe.reduce((ze, Ke) => ze + Number(Ke.precipitation), 0);
    return No({
      icon: Qn.rainy,
      name: Ye.metrics.precipitation,
      sub: ue && pe.length ? $n(Ye.rainExpected, { amount: pn(ye, _.locale, { maximumFractionDigits: 1 }) + " " + Sr(_, ue, "precipitation") }) : Ye.rainLast24h,
      visual: bl(pn(K.rain.change, _.locale, { maximumFractionDigits: 1 }), U) + (pe.length > 1 ? _f(pe.map((ze) => ({ label: "", value: Number(ze.precipitation) }))) : "")
    });
  }
  function Ie(_, D) {
    const F = ba(_, D, "visibility");
    if (!F || !Dn(F.value)) return "";
    const U = Sl(_, F.stateObj, "visibility", F.value), ue = Rp(Number(F.value), Sr(_, F.stateObj, "visibility"));
    return No({
      icon: Qn.eyeOutline,
      name: Ye.metrics.visibility,
      sub: Ye.visibilityLevel[Np(ue)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + ue + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Oe(ho(_, ue)) + '</div><div class="wbSeaValue">' + bl(U.number, U.unit) + "</div></div>"
    });
  }
  function ho(_, D) {
    var te;
    const F = Dp((te = _.config) == null ? void 0 : te.country, D);
    if (F) return $n(Ye.visibilityLandmarks, { from: F.from, to: F.to });
    const U = D / jp * 60;
    if (U < 60) {
      const pe = U < 5 ? Math.max(1, Math.round(U)) : 5 * Math.round(U / 5);
      if (pe < 60) return $n(Ye.walkMinutes, { minutes: pn(pe, _.locale) });
    }
    const ue = Math.max(1, Math.round(U / 30) / 2);
    return ue < 8 ? $n(Ye.walkHours, { hours: pn(ue, _.locale) }) : Ye.walkDay;
  }
  function Fo(_) {
    K.categories === void 0 && ge(_);
    const D = tt(_), F = (xe) => xe.map((Fe) => _.states[Fe]).filter(bs), U = F(D.air), ue = F(D.pollen);
    if (!U.length && !ue.length) return "";
    const te = [...U, ...ue], pe = (xe) => ue.includes(xe) ? Qn.flower : Qn.airFilter, ye = te.find((xe) => xe.entity_id === G.aq);
    return ye ? Ui(_, ye, pe(ye)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Oe(Ye.airQuality) + '</h2></div><div class="wbAqTiles">' + te.map((xe) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Oe(xe.entity_id) + '"><span class="wbChip">' + Cr(pe(xe)) + '</span><span class="wbText"><span class="wbName">' + Oe(gc(_, xe)) + '</span><span class="wbSub">' + Oe(vl(_, xe)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Ui(_, D, F) {
    var ze, Ke, je;
    const U = ((ze = D.attributes) == null ? void 0 : ze.unit_of_measurement) ?? "", ue = ((Ke = D.attributes) == null ? void 0 : Ke.device_class) === "pm25" && U === dc && Dn(D.state), te = Number(D.state), pe = ue ? yf(te) : void 0, ye = ((je = K.aqHistory) == null ? void 0 : je.entityId) === D.entity_id ? K.aqHistory.points : void 0, xe = (De) => Math.min(100, Math.max(0, De / gl * 100));
    let Fe;
    if (ye && ye.length > 1) Fe = Af(ye, (De) => (pn(De, _.locale, { maximumFractionDigits: 1 }) + " " + U).trim());
    else if (pe) {
      let De = 0;
      const $e = ou.map(([Pe, at]) => {
        const ct = xe(Math.min(at, gl)), Rt = Yp[Pe] + " " + De + "% " + ct + "%";
        return De = ct, Rt;
      });
      Fe = '<div class="wbScale" role="meter" aria-label="' + Oe(Ye.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + gl + '" aria-valuenow="' + te + '" style="background:linear-gradient(to right, ' + $e.join(", ") + ')"><i style="left:' + xe(te) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + gl + " " + dc + "</span></div>";
    } else Fe = '<span class="wbGraphNote"><span>' + Oe(vl(_, D)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Cr(F) + '</span><span class="wbText"><span class="wbName">' + Oe(gc(_, D)) + '</span><span class="wbSub">' + Oe(vl(_, D)) + (pe ? " · " + Oe(Ye.aqLevel[pe]) : "") + '</span></span><button class="wbBack" title="' + Oe(Ye.back) + '" data-wb="aq-close">' + Cr(Qn.back) + '</button></div><div class="wbGraph">' + Fe + "</div></div></div>";
  }
  const Be = {
    current: Ze,
    hourly: fo,
    sun: Vi,
    moon: mn,
    wind: nt,
    uv_index: Wn,
    compared_to_average: Gi,
    humidity: gt,
    pressure: _e,
    precipitation: wt,
    visibility: Ie,
    air_quality: Fo
  };
  function He(_) {
    var Fe, ze, Ke, je;
    const D = l == null ? void 0 : l();
    if (!D || q) return;
    const F = We(D);
    M(D, F), K.lastFetch || z();
    const U = tt(D), ue = bc(D), te = hd(D), pe = [
      ...F.map((De) => D.states[De]),
      D.states["sun.sun"],
      ue && D.states[ue],
      te && D.states[te],
      ...U.air.map((De) => D.states[De]),
      ...U.pollen.map((De) => D.states[De]),
      D.locale,
      D.config,
      D.entities,
      Math.floor(Date.now() / uo)
    ];
    if (!_ && $ && pe.length === $.length && pe.every((De, $e) => De === $[$e])) return;
    $ = pe;
    const ye = x.getRootNode(), xe = ye.activeElement || document.activeElement;
    for (const De of le) {
      const $e = O[De];
      let Pe = "";
      try {
        Pe = Be[De](D, F) || "";
      } catch {
        Pe = "";
      }
      if (Pe === $e.html) continue;
      const at = xe && $e.el.contains(xe) ? (Fe = xe.dataset) == null ? void 0 : Fe.wbFocus : void 0, ct = $e.el.querySelector(".wbStripScroll"), Rt = ct ? ct.scrollLeft : 0;
      $e.html = Pe, $e.el.hidden = !Pe, $e.el.innerHTML = Pe, Rt && ((ze = $e.el.querySelector(".wbStripScroll")) == null || ze.scrollTo({ left: Rt })), at && !X && ((Ke = $e.el.querySelector('[data-wb-focus="' + at + '"]')) == null || Ke.focus());
    }
    X && ((je = x.querySelector('[data-wb-focus="' + X + '"]')) == null || je.focus(), X = null), Vt(performance.now());
  }
  function Kt() {
    W || q || (W = !0, queueMicrotask(() => {
      W = !1, He(!0);
    }));
  }
  function Na() {
    const _ = getComputedStyle(x), D = (pe) => _.getPropertyValue(pe).trim(), F = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([pe, ye]) => {
      D(ye) && (F[pe] = D(ye));
    });
    const U = D("--color-text-primary") || "#f1f1f1", ue = D("--color-bg-card") || "#222222", te = !!x.closest(".light");
    return { colors: { ...aa, ...F }, ink: te ? U : ue, paper: te ? ue : U };
  }
  const Mn = (_, D) => {
    var F;
    _.width !== D.w && (_.width = D.w), _.height !== D.h && (_.height = D.h), (F = _.getContext("2d")) == null || F.putImageData(new ImageData(D.data, D.w, D.h), 0, 0);
  }, Pt = () => m && !Qp();
  function Va(_, D) {
    const F = x.querySelector("canvas[data-wb-strip]");
    if (!F || !V || !F.getClientRects().length) return;
    const U = F.clientWidth, ue = F.clientHeight;
    if (!U || !ue) return;
    const te = { width: U, height: ue, columns: hl, colors: D.colors, clock: _, ambient: Pt(), seed: V.seed };
    if (c === "smooth") {
      const pe = Math.min(2, window.devicePixelRatio || 1), ye = Math.round(U * pe), xe = Math.round(ue * pe);
      F.width !== ye && (F.width = ye), F.height !== xe && (F.height = xe);
      const Fe = F.getContext("2d");
      if (!Fe) return;
      Fe.setTransform(pe, 0, 0, pe, 0, 0), hp(Fe, V.segs, te);
    } else Mn(F, fp(V.segs, { ...te, px: 2, oneBit: c === "onebit", ink: D.ink, paper: D.paper }));
  }
  function Vt(_) {
    if (q) return;
    const D = Na();
    if (c !== "smooth") {
      const F = Pt();
      x.querySelectorAll("canvas[data-wb-wx]").forEach((U) => {
        U.getClientRects().length && Mn(U, Uc(Ld(U.dataset.wbWx, D.colors), { size: Number(U.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: D.colors, ink: D.ink, paper: D.paper, clock: _, idle: F }));
      });
    }
    x.querySelectorAll("canvas[data-wb-sea]").forEach((F) => {
      const U = F.clientWidth, ue = F.clientHeight, te = Number(F.dataset.wbSea), pe = U + "x" + ue + ":" + te + ":" + D.colors.skyClearDay;
      !U || !ue || !(te > 0) || F.dataset.painted === pe || (F.dataset.painted = pe, Mn(F, Ap(U, ue, te, D.colors)));
    }), Va(_, D);
  }
  function Nn(_) {
    if (ae = 0, !(q || !Pt())) {
      if (!document.hidden)
        if (c === "smooth") Va(_, Na());
        else {
          const D = Math.floor(_ / 100);
          D !== Y && (Y = D, Vt(_));
        }
      ae = requestAnimationFrame(Nn);
    }
  }
  function mo() {
    x.classList.toggle("wbMotion", Pt()), !ae && !q && Pt() && (ae = requestAnimationFrame(Nn));
  }
  function Bn(_) {
    var F, U;
    const D = (U = (F = _.target).closest) == null ? void 0 : U.call(F, "[data-wb]");
    if (!(!D || !x.contains(D))) {
      switch (D.dataset.wb) {
        case "day": {
          G.openDay = Number(D.dataset.index), G.opener = D.dataset.wbFocus, X = "back-day";
          const ue = fn()[G.openDay], te = !K.todayHistory || K.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - K.todayHistory.fetched > Pp;
          ue && ms(new Date(ue.datetime), /* @__PURE__ */ new Date()) && te && re();
          break;
        }
        case "close-day":
          G.openDay = void 0, X = G.opener, G.opener = void 0;
          break;
        case "open-page":
          w == null || w();
          return;
        case "day-mode":
          G.dayMode = D.dataset.mode;
          break;
        case "hourly-mode":
          G.hourlyMode = D.dataset.mode;
          break;
        case "aq-open":
          G.aq = D.dataset.entity, ce(G.aq);
          break;
        case "aq-close":
          G.aq = void 0;
          break;
        default:
          return;
      }
      He(!0);
    }
  }
  function en(_) {
    var D, F;
    _.key === "Escape" && G.openDay !== void 0 && ((F = (D = _.target).closest) != null && F.call(D, '[data-wb-open="day"]')) && (G.openDay = void 0, X = G.opener, G.opener = void 0, He(!0));
  }
  let Gt = null;
  function wa(_) {
    var F, U;
    const D = (U = (F = _.target).closest) == null ? void 0 : U.call(F, ".wbStripScroll");
    !D || _.button !== 0 || (Gt = { startX: _.pageX, left: D.scrollLeft, moved: !1 }, window.addEventListener("mousemove", go), window.addEventListener("mouseup", Ft, { once: !0 }));
  }
  function go(_) {
    const D = x.querySelector(".wbStripScroll");
    if (!Gt || !D) return;
    const F = _.pageX - Gt.startX;
    !Gt.moved && Math.abs(F) > 1 && (Gt.moved = !0, D.classList.add("wbDragging")), D.scrollLeft = Gt.left - F;
  }
  function Ft() {
    var _;
    Gt = null, window.removeEventListener("mousemove", go), (_ = x.querySelector(".wbStripScroll")) == null || _.classList.remove("wbDragging");
  }
  x.addEventListener("click", Bn), x.addEventListener("keydown", en), x.addEventListener("mousedown", wa);
  const xa = typeof ResizeObserver == "function" ? new ResizeObserver(() => Vt(performance.now())) : null;
  xa == null || xa.observe(x);
  const $t = (ui = window.matchMedia) == null ? void 0 : ui.call(window, "(prefers-reduced-motion: reduce)"), vo = () => {
    mo(), Vt(performance.now());
  };
  (Ba = $t == null ? void 0 : $t.addEventListener) == null || Ba.call($t, "change", vo);
  const ci = [
    setInterval(() => {
      Q = /* @__PURE__ */ new Date(), He(!0);
    }, Wp),
    setInterval(() => {
      T = /* @__PURE__ */ new Date(), He(!0);
    }, zp),
    setInterval(z, Fp)
  ];
  return He(!0), mo(), {
    update() {
      He(!1);
    },
    setStyle(_) {
      !_ || _ === c || (c = _, He(!0), mo());
    },
    destroy() {
      var _;
      q = !0, ci.forEach(clearInterval), ae && cancelAnimationFrame(ae), ae = 0, xa == null || xa.disconnect(), (_ = $t == null ? void 0 : $t.removeEventListener) == null || _.call($t, "change", vo), Ft(), x.removeEventListener("click", Bn), x.removeEventListener("keydown", en), x.removeEventListener("mousedown", wa), ["daily", "hourly"].forEach(Ce), x.remove();
    }
  };
}
const ws = "#E1E1E1", kc = "#F7F4F0", md = "#03a9f4", kt = 14, Tt = 172;
let Bf = 0;
const zt = (a) => Math.round(a * 100) / 100, po = (a, l, i) => Math.max(l, Math.min(i, a)), Ho = (a, l, i, c, m, g) => '<rect x="' + zt(a) + '" y="' + zt(l) + '" width="' + zt(i) + '" height="' + zt(c) + '" fill="' + m + '"' + (g != null ? ' opacity="' + g + '"' : "") + "/>", gd = (a) => a.map((l, i) => (i ? "L" : "M") + zt(l[0]) + " " + zt(l[1])).join("");
function vd(a) {
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
function Pf(a) {
  const l = a < 2 ? a + 24 : a;
  let i = ri[0], c = ri[ri.length - 1];
  for (let A = 0; A < ri.length - 1; A++) if (l >= ri[A][0] && l <= ri[A + 1][0]) {
    i = ri[A], c = ri[A + 1];
    break;
  }
  const m = (l - i[0]) / (c[0] - i[0]), g = m * m * (3 - 2 * m), w = (A, x) => {
    const H = parseInt(A.slice(1), 16), le = parseInt(x.slice(1), 16);
    return "#" + [16, 8, 0].map((ie) => Math.round((H >> ie & 255) + ((le >> ie & 255) - (H >> ie & 255)) * g).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(i[1][0], c[1][0]), bot: w(i[1][1], c[1][1]), warm: w(i[1][2], c[1][2]), cool: w(i[1][3], c[1][3]), op: i[1][4] + (c[1][4] - i[1][4]) * g, t: l };
}
function If(a) {
  const l = parseInt(a.slice(1), 16), i = (l >> 16 & 255) / 255, c = (l >> 8 & 255) / 255, m = (l & 255) / 255, g = Math.max(i, c, m), w = Math.min(i, c, m);
  let A = 0, x = 0;
  const H = (g + w) / 2;
  if (g !== w) {
    const le = g - w;
    x = H > 0.5 ? le / (2 - g - w) : le / (g + w), A = (g === i ? (c - m) / le + (c < m ? 6 : 0) : g === c ? (m - i) / le + 2 : (i - c) / le + 4) / 6;
  }
  return [A * 360, x * 100, H * 100];
}
function gu(a, l, i) {
  l = po(l, 0, 100) / 100, i = po(i, 0, 100) / 100;
  const c = (w) => (w + a / 30) % 12, m = l * Math.min(i, 1 - i), g = (w) => i - m * Math.max(-1, Math.min(c(w) - 3, Math.min(9 - c(w), 1)));
  return "#" + [g(0), g(8), g(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [vu, bu, wu] = If(ws), Mc = gu(vu, bu, Math.max(6, wu - 14)), Hf = gu(vu, bu, Math.min(96, wu + 16));
function Ff(a, l, i, c, m) {
  const g = Tt / 2, w = Tt * 0.12, A = g - (g - w) * a, x = ($) => $ ** 1.3, H = po(i, -1.5, 1.5), le = ($) => -(Math.abs(H) * 4.6 * $ ** 1.5) * Math.sign(H), ie = a * 1.4, O = ($, ae) => {
    const Y = Math.min(4.8, Math.abs(i) * 2.6) * (ae ? 1 : -1) * Math.sign(i || 1), W = ae ? $ + A : $, X = ae ? $ : $ + A, G = (Ae) => W + le(Ae) + Y * Math.sin(Ae * Math.PI * 1.2 + c) * x(Ae) * 1.4 + ie * Math.sin(Ae * Math.PI * 2 + c * 0.6) * x(Ae) * (ae ? 1 : -1), K = [[X, kt]];
    for (let Ae = 0; Ae <= 12; Ae++) K.push([G(Ae / 12), kt + Tt * Ae / 12]);
    K.push([X, kt + Tt]);
    let Q = '<path d="' + gd(K) + 'Z" fill="' + ws + '"/>';
    if (m) return Q;
    const T = 1.35 + ((ae ? i > 0 : i < 0) ? 0.35 : 0), V = (Ae) => {
      const y = Ae / 7, we = ae ? 1 - y : y, Ce = (1 - we) ** 1.3, qe = $ + A * y;
      return Array.from({ length: 13 }, (M, R) => {
        const C = R / 12;
        return [qe + le(C) * Ce + Y * T * Math.sin(C * Math.PI * 1.2 + c - we * 3.2) * x(C) * 1.4 * Ce + ie * 1.6 * Math.sin(C * Math.PI * 2 + c * 0.6 - we * 2.5) * x(C) * a * (0.4 + 0.6 * Ce), kt + Tt * C];
      });
    }, be = [1, 2, 3, 4, 5, 6].map(V);
    for (let Ae = 0; Ae < 6; Ae += 2) Q += '<path d="' + gd(be[Ae]) + gd(be[Ae + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return Q;
  }, q = g - (g - w) * l;
  return { body: O(kt, !0) + O(kt + Tt - A, !1), rails: [{ x: kt + q - 4, y: kt, w: 4, h: Tt }, { x: kt + Tt - q, y: kt, w: 4, h: Tt }], head: 6.4 };
}
function Of(a, l, i) {
  const c = Tt * (1 - a);
  let m = "";
  if (c > 1 && (m += Ho(kt, kt, Tt, c, ws), !i))
    for (let g = 1; g < 7; g += 2) m += Ho(kt + Tt * g / 7, kt, Tt / 7, c, "#fff");
  return { body: m, rails: [{ x: kt, y: kt + Tt * (1 - l) - 7, w: Tt, h: 11 }], head: 10.4 };
}
function qf(a, l, i, c) {
  const m = 9 - 7 * (i / 100), g = kt + Tt * (1 - a), w = Math.ceil(Tt / 10) + 1, A = kt + m / 2, x = (kt + Tt - m / 2 - A) / (w - 1), H = 0.8, le = 0.6, ie = Array.from({ length: w }, ($, ae) => Math.max(A + ae * le, Math.min(A + ae * x, g - m / 2 - (w - 1 - ae) * le))), O = ie.slice(0, -1).map(($, ae) => po((ie[ae + 1] - $ - le) / (x - le), 0, 1));
  O.push(O[w - 2]);
  let q = "";
  return ie.forEach(($, ae) => {
    const Y = H + (m - H) * O[ae], W = Math.max(0.5, Y / 2), X = Math.max(0.4, Y * 0.114);
    q += Ho(kt, $ - W, Tt, Math.max(1, Y), ws), !c && Y > 2.2 && (q += Ho(kt, $ + W - X, Tt, X, Mc) + Ho(kt, $ - W, Tt, X * 0.55, Hf, 0.75));
  }), c || [0.22, 0.78].forEach(($) => {
    q += Ho(kt + Tt * $ - 0.7, kt, 1.4, Math.max(0, ie[w - 1] + 1 - kt), Mc, 0.85);
  }), { body: q, rails: [{ x: kt, y: kt + Tt * (1 - l) - 8, w: Tt, h: 8 }], head: 8.8 };
}
const Sc = (a, l, i, c, m, g, w) => a === "curtain" ? Ff(l, i, m, g, w) : a === "venetian" ? qf(l, i, c, w) : Of(l, i, w);
function Wf(a, l) {
  let i = "", c = "";
  return l.forEach((m) => {
    const g = m.w > m.h, w = po(g ? kt + Tt / 2 : m.x + m.w / 2, 17, 183), A = po(g ? m.y + m.h / 2 : kt + Tt / 2, 17, 183);
    i += g ? Ho(kt, po(m.y + m.h / 2, kt, kt + Tt) - 1, Tt, 2, md) : Ho(po(m.x + m.w / 2, kt, kt + Tt) - 1, kt, 2, Tt, md);
    const x = g ? "M" + zt(w - 4) + " " + zt(A - 3) + "l4 -3l4 3M" + zt(w - 4) + " " + zt(A + 3) + "l4 3l4 -3" : "M" + zt(w - 3) + " " + zt(A - 4) + "l-3 4l3 4M" + zt(w + 3) + " " + zt(A - 4) + "l3 4l-3 4";
    c += '<circle cx="' + zt(w) + '" cy="' + zt(A) + '" r="11" fill="' + md + '" filter="url(#' + a + 's)"/><path d="' + x + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: c };
}
function zf(a, l) {
  const i = /* @__PURE__ */ new Date(), c = Pf(i.getHours() + i.getMinutes() / 60), m = 42 + 18 * Math.sin(c.t * 0.5), g = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, w = Sc(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), A = l.ghostAlpha > 4e-3 && l.ghost != null ? Sc(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", x = l.grip > 4e-3 ? Wf(a, w.rails) : null, H = (le) => Ho(kt, kt, Tt, Tt, le);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + a + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + a + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + a + 'w" cx="' + zt(m) + '%" cy="' + zt(g) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + zt(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + a + 'k" cx="' + zt(100 - m * 0.8) + '%" cy="' + zt(100 - g * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + zt(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + a + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + kc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + a + 'c)">' + H("url(#" + a + "l)") + H("url(#" + a + "w)") + H("url(#" + a + "k)") + (A ? '<g opacity="' + zt(l.ghostAlpha) + '">' + A + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + ws + '" filter="url(#' + a + 's)"/></g>' + (x ? '<g clip-path="url(#' + a + 'c)" opacity="' + zt(l.grip) + '">' + x.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + kc + '" stroke-width="3"/>' + (x ? '<g opacity="' + zt(l.grip) + '">' + x.knobs + "</g>" : "") + "</svg>";
}
function jf({ onMove: a, onSet: l }) {
  var Q;
  const i = "cv" + ++Bf, c = document.createElement("div");
  c.className = "tfCoverArt";
  const m = (Q = window.matchMedia) == null ? void 0 : Q.call(window, "(pointer: coarse)").matches;
  let g = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let A = 0, x = !1, H = !1, le = null, ie = 0, O = 0;
  const q = () => (g == null ? void 0 : g.kind) === "curtain" ? "x" : "y", $ = () => le || x || H || g.moving || g.target != null ? 1 : m ? performance.now() < O ? 1 : 0.4 : 0, ae = () => {
    c.innerHTML = zf(i, { kind: g.kind, pos: w.pos, bar: g.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function Y(T) {
    A = 0;
    const V = w.last ? Math.min(0.064, (T - w.last) / 1e3) : 1 / 60, be = V * 60;
    w.last = T;
    const Ae = g.pos - w.pos, y = w.pos;
    w.pos += Math.sign(Ae) * Math.min(Math.abs(Ae), Math.max(10.5, Math.abs(Ae) * 1.4) * V), Math.abs(g.pos - w.pos) < 0.03 && (w.pos = g.pos), w.vel = w.vel * 0.86 + (w.pos - y) / be * 0.14, Math.abs(w.vel) < 0.015 && w.pos === g.pos && (w.vel = 0), (w.pos !== y || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * be);
    const we = g.tilt - w.tilt;
    w.tilt += Math.sign(we) * Math.min(Math.abs(we), Math.max(60, Math.abs(we) * 4) * V);
    const Ce = $();
    w.grip += (Ce - w.grip) * Math.min(1, V * (Ce > w.grip ? 11 : 3.5)), Math.abs(Ce - w.grip) < 0.01 && (w.grip = Ce);
    const qe = g.target != null && Math.abs(g.target - w.pos) > 0.5 ? 0.22 : 0;
    g.target != null && (w.gpos = g.target), w.ghost += (qe - w.ghost) * Math.min(1, V * (qe > w.ghost ? 16 : 3)), Math.abs(qe - w.ghost) < 4e-3 && (w.ghost = qe), ae(), w.pos !== g.pos || w.vel || w.tilt !== g.tilt || w.grip !== Ce || w.ghost !== qe ? A = requestAnimationFrame(Y) : w.last = 0;
  }
  const W = () => {
    g && !A && (A = requestAnimationFrame(Y));
  }, X = setInterval(() => {
    g && !A && ae();
  }, 60 * 1e3), G = (T) => {
    const V = c.getBoundingClientRect();
    return q() === "x" ? (T.clientX - V.left) / V.width : (T.clientY - V.top) / V.height;
  };
  c.addEventListener("pointerdown", (T) => {
    var Ae;
    if (!(g != null && g.canSet) || T.button > 0) return;
    T.preventDefault(), (Ae = c.setPointerCapture) == null || Ae.call(c, T.pointerId);
    const V = g.target ?? g.pos, be = c.getBoundingClientRect();
    le = { p0: G(T), from: V, x0: T.clientX, value: null, side: null }, g.kind === "curtain" && V > 0 && (le.side = (T.clientX - be.left) / be.width < 0.5 ? "L" : "R"), W();
  }), c.addEventListener("pointermove", (T) => {
    if (!le) return;
    let V;
    if (g.kind === "curtain") {
      if (!le.side) {
        const Ae = T.clientX - le.x0;
        if (Math.abs(Ae) < 4) return;
        le.side = Ae < 0 ? "L" : "R";
      }
      const be = (Tt / 2 - Tt * 0.12) / 200;
      V = le.from + (le.side === "L" ? -1 : 1) * ((G(T) - le.p0) / be) * 100;
    } else V = le.from - (G(T) - le.p0) / (Tt / 200) * 100;
    le.value = po(V, 0, 100), a(le.value);
  });
  const K = () => {
    if (!le) return;
    const T = le.value;
    le = null, T != null && l(Math.round(T)), W();
  };
  return c.addEventListener("pointerup", K), c.addEventListener("pointercancel", K), c.addEventListener("lostpointercapture", K), c.addEventListener("pointerenter", () => {
    x = !0, W();
  }), c.addEventListener("pointerleave", () => {
    x = !1, W();
  }), c.addEventListener("focus", () => {
    H = c.matches(":focus-visible"), W();
  }), c.addEventListener("blur", () => {
    H = !1, W();
  }), c.addEventListener("keydown", (T) => {
    if (!(g != null && g.canSet)) return;
    const V = Math.round(g.target ?? g.pos), be = T.shiftKey ? 10 : 1, Ae = { ArrowUp: V + be, ArrowRight: V + be, ArrowDown: V - be, ArrowLeft: V - be, PageUp: V + 25, PageDown: V - 25, Home: 0, End: 100 }[T.key];
    if (Ae == null) return;
    T.preventDefault();
    const y = po(Ae, 0, 100);
    a(y), clearTimeout(ie), ie = setTimeout(() => l(y), 500);
  }), {
    el: c,
    update(T) {
      const V = !g;
      g = T, V && (w.pos = g.pos, w.tilt = g.tilt, O = performance.now() + 1500, m && setTimeout(W, 1600)), c.classList.toggle("x", q() === "x"), c.classList.toggle("y", q() === "y"), g.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(g.target ?? g.pos))), c.setAttribute("aria-orientation", q() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", g.name + (g.canSet ? " position" : "")), c.setAttribute("aria-valuetext", g.text), W();
    },
    destroy() {
      cancelAnimationFrame(A), A = 0, clearInterval(X), clearTimeout(ie), c.remove();
    }
  };
}
const Cc = "move-assistant-density", si = {
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
}, oe = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), bd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Tc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Vf = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', wl = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Lc = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Ac = 1, Gf = 4, _c = 16, Ec = 32, Uf = 128, Yf = 256, Dc = 16384, Zf = 1, Kf = 2, Rc = 4, $f = 8, Xf = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Nc = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, Jf = { curtain: "curtains", blind: "blind", venetian: "blinds" }, wd = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, Bc = "move_assistant_house", Pc = "move-assistant-house-used", Qf = ["switch", "fan", "input_boolean", "automation"], Ic = "move-assistant-house-look", eh = [["popup", "Popup"], ["sheet", "Sheet"]], th = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], xd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', nh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', ah = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Hc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Fc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', Oc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', xu = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + a.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", qc = xu(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), oh = xu(["M20 6L9 17L4 12"]), co = (a, l = "") => '<span class="tfAreaGlyph" data-icon-for="' + oe(a || "") + '"' + (l ? ' data-icon-name="' + oe(l) + '"' : "") + "></span>", ih = (a) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (a ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', rh = 1, sh = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Wc = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, yd = ["hs", "xy", "rgb", "rgbw", "rgbww"], xl = ["door", "window", "garage_door", "opening"], zc = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, yl = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], lh = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], dh = 10, ch = 20, uh = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, ph = ["living room", "bedroom", "office"];
function fh(a, { config: l, getHass: i }) {
  var cs, Zt, ol;
  const c = (e) => a.getElementById(e), m = c("app"), w = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let A = si.get(Cc) === "1", x = {};
  const H = (e) => {
    var n;
    return (n = i()) == null ? void 0 : n.callWS(e);
  }, le = (e, n, o) => H({ type: "call_service", domain: e, service: n, service_data: o }), ie = a.querySelector("#appearancePane .toggleList");
  ie && !c("densityToggle") && (ie.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    A = !A, si.set(Cc, A ? "1" : "0"), Q();
  }));
  const O = [
    ["weather", "Weather", "The forecast under Home.", (e) => e.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (e) => e.startsWith("sensor.") && gt(e).device_class === "power" && /^(W|kW)$/.test(gt(e).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (e) => e.startsWith("alarm_control_panel.")]
  ], q = (e, n, o, d) => '<div class="themeChoice" id="' + e + '" role="group" aria-label="' + n + '">' + d.map(([p, v]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + o + '="' + p + '">' + v + "</button>").join("") + "</div>", $ = (e, n, o, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + e + "</strong>" + (n ? '<div class="status">' + n + "</div>" : "") + "</div>" + o + "</div>";
  function ae() {
    var k, E, B, N;
    if (!w || c("housePane")) return;
    const e = c("settingsView");
    e.querySelector(".settingsTitle").textContent = "HomeCore";
    const n = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], o = (Z, he) => '<div class="houseTab' + (Z === "look" ? " active" : "") + '" data-house-pane="' + Z + '"><section class="card">' + he + "</section></div>";
    e.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + n.map(([Z, he]) => '<button class="tab segBtn' + (Z === "look" ? " active" : "") + '" type="button" data-house-tab="' + Z + '">' + he + "</button>").join("") + "</div>" + o("look", '<div class="toggleList" id="houseLook"></div>') + o("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + o("sources", '<div class="toggleList">' + O.map(([Z, he, Te]) => $(he, Te, '<select class="settingsSelect" data-source="' + Z + '" aria-label="' + he + '"></select>')).join("") + "</div>") + o("sums", '<div class="toggleList">' + Object.entries(wd).map(([Z, he]) => $(he.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + Z + '" aria-label="' + he.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = c("houseLook");
    [(k = e.querySelector(".themeBtn")) == null ? void 0 : k.closest(".toggleRow"), (E = c("densityToggle")) == null ? void 0 : E.closest(".toggleRow"), (B = c("moreInfoChoice")) == null ? void 0 : B.closest(".toggleRow"), (N = c("namesChoice")) == null ? void 0 : N.closest(".toggleRow")].forEach((Z) => Z && d.appendChild(Z)), d.insertAdjacentHTML("beforeend", $("Lights", "How lights show on the house page.", q("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + $("Pad", "What the Dual Axis Controller’s pad sets on its tile.", q("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const p = c("housePane"), v = p.querySelector(".houseTabs"), f = v.querySelector(".rubberIndicator"), b = (Z) => {
      const he = v.querySelector(".tab.active");
      f.style.transition = Z ? "" : "none", f.style.left = he.offsetLeft + "px", f.style.width = he.offsetWidth + "px", Z && (f.style.transform = "scaleX(1.08)", setTimeout(() => f.style.transform = "", 180));
    };
    new ResizeObserver(() => b(!1)).observe(v), p.addEventListener("click", (Z) => {
      const he = Z.target.closest("[data-house-tab]");
      if (he) {
        v.querySelectorAll(".tab").forEach((ve) => ve.classList.toggle("active", ve === he)), p.querySelectorAll(".houseTab").forEach((ve) => ve.classList.toggle("active", ve.dataset.housePane === he.dataset.houseTab)), he.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), b(!0);
        return;
      }
      const Te = Z.target.closest("[data-light-fav]");
      if (Te) {
        $i(Te.dataset.lightFav);
        return;
      }
      const ee = Z.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!ee || ee.disabled)) {
        if (ee.dataset.lights && (Lt.lights = ee.dataset.lights), ee.dataset.dacPad && (Lt.dacPad = ee.dataset.dacPad), (ee.dataset.lights || ee.dataset.dacPad) && (Ze(), Ut.clear()), ee.dataset.sumToggle) {
          const ve = ee.dataset.sumToggle, L = new Set(z.hiddenSums || []);
          L.has(ve) ? L.delete(ve) : L.add(ve), z = { ...z, hiddenSums: [...L] }, Rn();
        }
        za();
      }
    }), p.addEventListener("change", (Z) => {
      const he = Z.target;
      he.dataset.source && (z = { ...z, sources: { ...z.sources || {}, [he.dataset.source]: he.value || void 0 } }, Rn());
      const Te = he.dataset.lightStyle || he.dataset.lightPad;
      if (Te) {
        const ee = he.dataset.lightStyle ? "lightStyles" : "lightPads", ve = { ...Lt[ee] };
        he.value ? ve[Te] = he.value : delete ve[Te], Lt[ee] = ve, Ze(), [...Ut.keys()].filter((L) => L.endsWith(":" + Te)).forEach((L) => Ut.delete(L));
      }
      za();
    });
  }
  function Y() {
    var b, k;
    _r() && gn();
    const e = c("housePane");
    if (!e) return;
    const n = !!customElements.get(Cn);
    e.querySelectorAll("[data-lights]").forEach((E) => E.setAttribute("aria-pressed", String(E.dataset.lights === Lt.lights))), c("lightsRow").querySelector(".status").textContent = n || !_r() ? "How lights show on the house page." : At === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", e.querySelectorAll("[data-dac-pad]").forEach((E) => E.setAttribute("aria-pressed", String(E.dataset.dacPad === Lt.dacPad))), c("dacPadRow").hidden = !_r();
    for (const E of e.querySelectorAll("[data-source]")) {
      if (E === a.activeElement) continue;
      const [B] = O.find(([Z]) => Z === E.dataset.source), N = Object.keys(x).filter(O.find(([Z]) => Z === B)[3]).sort((Z, he) => _e(Z).localeCompare(_e(he)));
      E.dataset.sig !== N.join(",") && (E.innerHTML = '<option value="">Automatic</option>' + N.map((Z) => '<option value="' + oe(Z) + '">' + oe(_e(Z)) + "</option>").join(""), E.dataset.sig = N.join(",")), E.value = N.includes((b = z.sources) == null ? void 0 : b[B]) ? z.sources[B] : "";
    }
    e.querySelectorAll("[data-sum-toggle]").forEach((E) => {
      const B = !(z.hiddenSums || []).includes(E.dataset.sumToggle);
      E.classList.toggle("on", B), E.setAttribute("aria-checked", String(B));
    });
    const o = c("lightRows"), d = o != null && o.contains(a.activeElement) ? a.activeElement : null;
    if (!o || d != null && d.matches("select")) return;
    const p = new Set(vn()), v = (E, B, N, Z) => '<option value="' + E + '"' + (E === N ? " selected" : "") + ">" + B + "</option>", f = Object.keys(x).filter((E) => E.startsWith("light.")).sort((E, B) => !yt.get(E) - !yt.get(B) || (yt.get(E) || "").localeCompare(yt.get(B) || "") || _e(E).localeCompare(_e(B))).map((E) => {
      const B = Lt.lightStyles[E] || "", N = Lt.lightPads[E] || "", Z = p.has(E), he = oe(_e(E));
      return "<tr><td><strong>" + he + "</strong></td><td>" + oe(yt.get(E) || "—") + "</td><td>" + oe(Ft(E)) + '</td><td class="metaSwitchCol"><button class="switch' + (Z ? " on" : "") + '" type="button" role="switch" aria-checked="' + Z + '" data-light-fav="' + oe(E) + '" aria-label="' + he + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + oe(E) + '" aria-label="' + he + ' tile">' + v("", "Default", B) + v("tile", "HomeCore tile", B) + v("dac", "Dual Axis Controller", B) + '</select></td><td><select class="settingsSelect" data-light-pad="' + oe(E) + '" aria-label="' + he + ' pad"' + (Ar(E) ? "" : " disabled") + ">" + v("", "Default", N) + v("temperature", "Temperature", N) + v("colour", "Colour", N) + "</select></td></tr>";
    }).join("");
    o.dataset.html !== f && (o.innerHTML = f, o.dataset.html = f, d != null && d.dataset.lightFav && ((k = o.querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || k.focus({ preventScroll: !0 })));
  }
  const W = document.createElement("div");
  W.className = "densityBadge", W.setAttribute("aria-live", "polite"), W.hidden = !0, m.appendChild(W);
  let X = 0;
  function G() {
    if (!A) return;
    const e = c("homeView"), n = (v) => v.offsetParent !== null && !v.closest("[hidden]");
    e.querySelectorAll(":scope .card, :scope .tfAction").forEach((v) => {
      n(v) && (v.dataset.h = Math.round(v.getBoundingClientRect().height) + " px");
    });
    const o = [...e.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(n), d = window.innerHeight, p = o.filter((v) => {
      const f = v.getBoundingClientRect();
      return f.height > 0 && f.top >= 0 && f.bottom <= d + 0.5;
    }).length;
    W.hidden = !e.classList.contains("active"), W.innerHTML = "<b>" + p + "</b><small>of " + o.length + " readings on screen</small>";
  }
  const K = () => {
    A && requestAnimationFrame(G);
  };
  function Q() {
    var e;
    m.classList.toggle("showDensity", A), (e = c("densityToggle")) == null || e.classList.toggle("on", A), W.hidden = !A, clearInterval(X), A && (X = setInterval(G, 1e3), G());
  }
  window.addEventListener("scroll", K, { capture: !0, passive: !0 }), window.addEventListener("resize", K, { passive: !0 });
  const T = a.querySelector("#homeView .grid");
  let V = null, be = null, Ae = null, y = null;
  const we = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map(), M = 350;
  let R = null;
  const C = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map();
  let z = { favourites: null }, re = {}, ce = {}, ge = [], We = null;
  const tt = (() => {
    try {
      return JSON.parse(si.get(Pc)) || {};
    } catch {
      return {};
    }
  })();
  let yt = /* @__PURE__ */ new Map(), fn = 0;
  function Rn() {
    clearTimeout(fn), fn = setTimeout(() => Promise.resolve(H({ type: "frontend/set_user_data", key: Bc, value: z })).catch(() => {
    }), 400);
  }
  const Lt = (() => {
    let e = {};
    try {
      e = JSON.parse(si.get(Ic)) || {};
    } catch {
    }
    const n = (o, d) => Object.fromEntries(Object.entries(o || {}).filter(([, p]) => d.includes(p)));
    return {
      more: e.more === "sheet" ? "sheet" : "popup",
      names: e.namesPicked && ["auto", "cut", "wrap", "scroll"].includes(e.names) ? e.names : "scroll",
      namesPicked: !!e.namesPicked,
      lights: e.lights === "dac" ? "dac" : "tile",
      dacPad: e.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: n(e.lightStyles, ["tile", "dac"]),
      lightPads: n(e.lightPads, ["temperature", "colour"])
    };
  })(), Ze = () => si.set(Ic, JSON.stringify(Lt)), Mt = () => {
    m.dataset.more = Lt.more, m.dataset.names = Lt.names, Xt();
  };
  w && ie && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + eh.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Lt.more === e) + '" data-more-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-more-style]");
    n && (Lt.more = n.dataset.moreStyle, Ze(), Mt(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === n))));
  }), c("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + th.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Lt.names === e) + '" data-names-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), c("namesChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-names-style]");
    n && (Lt.names = n.dataset.namesStyle, Lt.namesPicked = !0, Ze(), Mt(), c("namesChoice").querySelectorAll("[data-names-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === n))));
  })), ae();
  let Je = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const hn = /* @__PURE__ */ new Map();
  let kn = "";
  const ji = w ? Ju({ onChange: () => sn() }) : null;
  w && m.classList.add("house");
  const lt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ue = null, mt = null, fo = !1;
  function Vi(e) {
    const n = Ha();
    if (m.classList.toggle("houseBento", !!n), Ue && (mt !== n || e == null) && (Ue.destroy(), Ue = null), !n || e == null) {
      lt.remove();
      return;
    }
    lt.isConnected || T.append(lt), lt.style.order = e, !Ue && !fo && (Ue = yc(lt, { getHass: i, entityId: n, style: "bitmap" }), mt = n);
  }
  const di = [["wx", ["current"]], ["avg", ["compared_to_average"]]], mn = Object.fromEntries(di.map(([e]) => [e, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + e })]));
  let nt = null, Wn = null;
  function Gi(e) {
    const n = Ha();
    nt && Wn !== n && (nt.forEach((o) => o.destroy()), nt = null), Object.values(mn).forEach((o) => n ? !o.isConnected && T.append(o) : o.remove()), n && !nt && !fo && (nt = di.map(([o, d]) => yc(mn[o], { getHass: i, entityId: n, style: "bitmap", cards: d, onOpen: o === "wx" ? () => ur("weather") : void 0 })), Wn = n);
  }
  const gt = (e) => {
    var n;
    return ((n = x[e]) == null ? void 0 : n.attributes) || {};
  }, _e = (e) => gt(e).friendly_name || e, dt = (e, n) => qi(e) || (Number(gt(e).supported_features) & n) === n, wt = (e) => {
    const n = String(e ?? "").replace(/_/g, " ");
    return n.charAt(0).toUpperCase() + n.slice(1);
  }, Ie = (e, n = 1) => Number(e).toLocaleString(void 0, { minimumFractionDigits: n, maximumFractionDigits: n }), ho = (e) => (e == null ? void 0 : e.state) === "on" ? e.attributes.brightness != null ? Math.max(1, Math.round(e.attributes.brightness / 2.55)) : 100 : 0, Fo = (e) => gt(e).supported_color_modes || [], Ui = (e) => {
    const n = e / 100;
    return [n <= 66 ? 255 : 329.7 * Math.pow(n - 60, -0.1332), n <= 66 ? 99.47 * Math.log(n) - 161.12 : 288.12 * Math.pow(n - 60, -0.0755), n >= 66 ? 255 : n <= 19 ? 0 : 138.52 * Math.log(n - 10) - 305.04];
  }, Be = (e, n) => [5, 3, 1].map((o) => {
    const d = (o + e / 60) % 6;
    return 255 * (1 - n / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  }), He = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)), Kt = (e) => {
    const n = 0.2126 * He(e[0]) + 0.7152 * He(e[1]) + 0.0722 * He(e[2]);
    return (n + 0.05) / 0.0664 > 1.05 / (n + 0.05);
  }, Na = (e) => 0.2126 * He(e[0]) + 0.7152 * He(e[1]) + 0.0722 * He(e[2]), Mn = (e, n) => {
    const o = Na(e), d = Na(n);
    return (Math.max(o, d) + 0.05) / (Math.min(o, d) + 0.05);
  }, Pt = (e, n) => {
    const o = Kt(e);
    for (let d = 0.1; d < 1; d += 0.02) {
      const p = e.map((v) => Math.round(o ? v * (1 - d) : v + (255 - v) * d));
      if (Mn(p, e) >= n) return "rgb(" + p.join(",") + ")";
    }
    return o ? "#26221e" : "#ffffff";
  };
  function Va(e) {
    const n = gt(e), o = (n.rgb_color || (n.hs_color && n.color_mode !== "color_temp" ? Be(...n.hs_color) : n.color_temp_kelvin ? Ui(n.color_temp_kelvin) : [255, 170, 0])).map((d) => Math.round(Math.max(0, Math.min(255, d))));
    return "--light:rgb(" + o.join(",") + ");--light-ink:" + Pt(o, 3.5);
  }
  const Vt = (e) => {
    var n;
    return e.startsWith("light.") && ((n = x[e]) == null ? void 0 : n.state) === "on" ? ' data-light style="' + Va(e) + '"' : "";
  }, Nn = (e) => {
    const n = Fo(e);
    return n.length ? n.some((o) => o !== "onoff") : gt(e).brightness != null;
  }, mo = (e) => [gt(e).min_color_temp_kelvin || 2e3, gt(e).max_color_temp_kelvin || 6500], Bn = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function en(e) {
    const n = Math.max(1, Math.round((Date.now() - e) / 1e3));
    if (n < 10) return "Just now";
    if (n < 60) return n + " seconds ago";
    const o = Math.round(n / 60);
    if (o < 60) return o + (o === 1 ? " minute ago" : " minutes ago");
    const d = Math.round(o / 60);
    if (d < 24) return d + (d === 1 ? " hour ago" : " hours ago");
    const p = Math.round(d / 24);
    return p + (p === 1 ? " day ago" : " days ago");
  }
  const Gt = (e) => {
    var n;
    return gt(e).current_position ?? (((n = x[e]) == null ? void 0 : n.state) === "closed" ? 0 : 100);
  }, wa = (e) => {
    var n;
    return Ia("pos", e, ((n = C.get(e)) == null ? void 0 : n.pos) ?? Gt(e));
  }, go = (e) => {
    var n;
    return Ia("tilt", e, ((n = C.get(e)) == null ? void 0 : n.tilt) ?? gt(e).current_tilt_position);
  };
  function Ft(e) {
    var f;
    const n = x[e];
    if (!n) return "Not found";
    if (n.state === "unavailable") return "Unavailable";
    const o = n.attributes, d = e.split(".")[0];
    if (d === "light") {
      if (n.state !== "on") return "Off";
      const b = o.color_temp_kelvin;
      return (Nn(e) ? ho(n) + "%" : "On") + (o.color_mode === "color_temp" && b ? " · " + Number(b).toLocaleString() + "k" : yd.includes(o.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (n.state === "off" ? "Off" : wt(o.hvac_action || n.state)) + " · " + Ie(o.current_temperature) + " °C now";
    if (d === "cover") {
      const b = Gt(e), k = o.current_tilt_position;
      return n.state === "opening" || n.state === "closing" ? wt(n.state) + " - " + b + "%" : (b <= 0 ? "Closed" : b >= 100 ? "Open" : "Partially open") + (k > 0 && k < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return n.state !== "on" ? "Off" : wt(o.action || "on") + " · " + o.current_humidity + "% now";
    if (d === "vacuum") return wt(n.state) + (n.state === "cleaning" && ((f = o.rooms) != null && f.length) ? " · " + o.rooms.join(", ") : "") + (o.battery_level != null ? " · " + o.battery_level + "%" : "");
    if (d === "media_player") return n.state === "playing" || n.state === "paused" ? (n.state === "paused" ? "Paused · " : "") + (o.media_title || "Playing") : wt(n.state);
    if (d === "alarm_control_panel") return Wc[n.state] || wt(n.state);
    if (d === "lock" || d === "valve") return wt(n.state);
    if (d === "switch") return n.state === "on" ? "On" : "Off";
    if (d === "plant") return n.state === "ok" ? "Healthy" : wt(o.problem);
    if (d === "binary_sensor")
      return o.device_class === "battery" ? n.state === "on" ? "Low" : "Normal" : o.device_class === "problem" ? n.state === "on" ? "Problem" : "OK" : o.device_class === "moisture" ? n.state === "on" ? "Wet" : "Dry" : xl.includes(o.device_class) ? n.state === "on" ? "Open" : "Closed" : n.state === "on" ? "Detected" : "Clear";
    if (o.rang) return "Rang at " + Bn(o.rang);
    const p = i();
    if (p != null && p.formatEntityState && !qi(e))
      try {
        return p.formatEntityState(n);
      } catch {
      }
    const v = Number(n.state);
    if (n.state !== "" && Number.isFinite(v)) {
      const b = Math.abs(v) >= 100 ? 0 : Math.abs(v) >= 10 ? 1 : 2, k = o.unit_of_measurement ? o.unit_of_measurement === "%" ? "%" : " " + o.unit_of_measurement : "";
      return v.toLocaleString(void 0, { maximumFractionDigits: b }) + k + (o.plant_low ? " · Low" : o.plant_high ? " · High" : "");
    }
    return wt(n.state);
  }
  const xa = (e) => e >= 1e3 ? Ie(e / 1e3, 2) + " kW" : Math.round(e).toLocaleString() + " W";
  function $t(e) {
    const n = i();
    e.querySelectorAll("[data-icon-for]").forEach((o) => {
      var v;
      const d = x[o.dataset.iconFor], p = o.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && d && !p) {
        let f = o.firstElementChild;
        (!f || f.localName !== "ha-state-icon") && (o.textContent = "", f = document.createElement("ha-state-icon"), o.appendChild(f)), f.hass = n, f.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let f = o.firstElementChild;
        (!f || f.localName !== "ha-icon") && (o.textContent = "", f = document.createElement("ha-icon"), o.appendChild(f)), f.icon = p || ((v = d == null ? void 0 : d.attributes) == null ? void 0 : v.icon) || "mdi:circle-medium";
      } else o.textContent || (o.textContent = (o.dataset.letter || _e(o.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), D();
  }
  const vo = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", ci = (e) => {
    const n = [e];
    for (; n.length; ) {
      const o = n.shift();
      if (o.localName === "svg") return o;
      o.shadowRoot && n.push(...o.shadowRoot.children), n.push(...o.children);
    }
    return null;
  };
  function ui(e) {
    var he, Te, ee;
    const n = e.localName === "svg" ? e : ci(e), o = n ? [...n.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!o.length) return !n;
    const d = (he = e.closest(".tfIcon")) == null ? void 0 : he.offsetWidth;
    if (d === void 0) return !0;
    if (!d) return !1;
    const p = d + "|" + o.map((ve) => ve.getAttribute("d") || ve.localName).join("|");
    if (e.dataset.fitted === p) return !0;
    let v = 1 / 0, f = 1 / 0, b = -1 / 0, k = -1 / 0;
    for (const ve of o) {
      const L = ve.getBBox(), me = getComputedStyle(ve), Ne = me.stroke !== "none" ? (parseFloat(me.strokeWidth) || 0) / 2 : 0;
      !L.width && !L.height || (v = Math.min(v, L.x - Ne), f = Math.min(f, L.y - Ne), b = Math.max(b, L.x + L.width + Ne), k = Math.max(k, L.y + L.height + Ne));
    }
    if (!(b > v)) return !1;
    const E = (ee = (Te = n.viewBox) == null ? void 0 : Te.baseVal) != null && ee.width ? n.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, B = d - 14, N = B * E.width / Math.max(b - v, k - f), Z = N / E.width;
    return e.localName === "svg" ? (e.style.width = N + "px", e.style.height = N + "px") : e.style.setProperty("--mdc-icon-size", N + "px"), n.style.translate = ((E.x + E.width / 2 - (v + b) / 2) * Z).toFixed(2) + "px " + ((E.y + E.height / 2 - (f + k) / 2) * Z).toFixed(2) + "px", e.dataset.fitted = p, !0;
  }
  let Ba = 0;
  function _(e = 0) {
    clearTimeout(Ba), [...a.querySelectorAll(vo)].filter((o) => !ui(o)).length && e < 5 && (Ba = setTimeout(() => _(e + 1), 300));
  }
  function D() {
    clearTimeout(Ba), Ba = setTimeout(() => _(), 60);
  }
  const F = (e) => {
    var n, o, d;
    return e.startsWith("light.") && x[e] && !gt(e).icon && !((d = (o = (n = i()) == null ? void 0 : n.entities) == null ? void 0 : o[e]) != null && d.icon) ? "mdi:lightbulb" : "";
  }, U = (e, n, o) => (n = n || F(e), ' data-icon-for="' + oe(e) + '"' + (n ? ' data-icon-name="' + oe(n) + '"' : "") + (o ? ' data-letter="' + oe(o) + '"' : "")), ue = (e) => e.endsWith("_solar_power") ? "mdi:solar-power-variant" : gt(e).rang ? "mdi:doorbell" : "", te = (e, n, o, d) => oe([e, n, o, d ? JSON.stringify(d) : ""].join("|")), pe = (e) => oe(JSON.stringify(e));
  function ye(e, n) {
    var p, v;
    const o = oe(_e(n) + ", " + Ft(n));
    return '<div class="activityRow' + (Number.isFinite(Number((p = x[n]) == null ? void 0 : p.state)) && ((v = x[n]) == null ? void 0 : v.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + oe(e + "|" + n) + '" aria-label="' + o + '. Show the last 24 hours"' : '" aria-label="' + o + '"') + '><div class="tfIcon" aria-hidden="true"' + U(n, ue(n)) + '></div><div><div class="activityRowName">' + oe(_e(n)) + '</div><div class="activityRowMeta">' + oe(Ft(n)) + "</div></div></div>";
  }
  const xe = (e, n, o) => '<div class="activityRow" aria-label="' + oe(e + ", " + n) + '"><div class="tfIcon" aria-hidden="true"' + U("", o, e) + '></div><div><div class="activityRowName">' + oe(e) + '</div><div class="activityRowMeta">' + oe(n) + "</div></div></div>";
  function Fe(e) {
    var o;
    const n = ((o = x[e]) == null ? void 0 : o.state) === "on";
    return '<div class="activityRow tfPlug' + (n ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + te("switch", "toggle", e) + '" aria-label="Turn ' + oe(_e(e)) + (n ? " off" : " on") + '"' + U(e) + '></button><button class="tfName" type="button" data-more="' + oe(e) + '" aria-label="' + oe(_e(e) + ", " + Ft(e) + ". More info") + '"><span class="activityRowName">' + oe(_e(e)) + '</span><span class="activityRowMeta">' + oe(Ft(e)) + "</span></button></div>";
  }
  const ze = (e) => {
    var n;
    return ((n = Ce.get(e)) == null ? void 0 : n.name) ?? _e(e);
  }, Ke = (e) => {
    var n;
    return ((n = Ce.get(e)) == null ? void 0 : n.text) ?? Ft(e);
  };
  function je(e) {
    var o;
    const n = (o = Ce.get(e)) == null ? void 0 : o.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (n ? U("", n, ze(e)) : U(e, ue(e))) + '></div><div><div class="activityRowName">' + oe(ze(e)) + '</div><div class="activityRowMeta">' + oe(Ke(e)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + oe(ze(e)) + '’s last 24 hours">' + bd + '</button></div><svg class="tfGraph" data-graph="' + oe(e) + '" role="img" aria-label="' + oe(ze(e)) + ', last 24 hours"></svg></div>';
  }
  function De(e, n, o, d, p = "", v = null, f = "") {
    const b = V && V.key === e;
    return '<section class="card tfCard' + (f ? " " + f : "") + (b ? " open" : "") + '" data-tf data-k="' + oe(e) + '" style="order:' + n + (b && V.h ? ";min-height:" + V.h + "px" : "") + '" aria-label="' + oe(o) + '"><div class="activityHeader">' + (v ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + oe(v) + '" aria-label="' + oe(o + (x[v] ? ", " + Ft(v) : "") + ". More info") + '">' + oe(o) + "</button>" : '<div class="activityTitle">' + oe(o) + "</div>") + "</div>" + (b ? je(V.id) : '<div class="activityRows">' + d.join("") + "</div>" + p) + "</section>";
  }
  function $e(e, n) {
    const o = "readings:" + e.id, d = e.readings.map((p) => ye(o, p));
    return e.power != null && d.push(xe("Power now", xa(e.power), "mdi:flash")), De(o, n, "Readings", d.concat(e.plugs.map(Fe)));
  }
  function Pe(e, n) {
    var b;
    const o = "energy:" + e.id, [d, p] = [e.solar.find((k) => k.endsWith("_power")), e.solar.find((k) => k.endsWith("_today"))], v = [d, p].filter(Boolean).map((k) => ye(o, k)), f = Number(((b = x[d]) == null ? void 0 : b.state) || 0) * 1e3;
    return Je.grid && (v.push(ye(o, Je.grid)), v.push(xe("House use", xa(f + Number(x[Je.grid].state)), "mdi:home-lightning-bolt"))), De(o, n, "Energy", v, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const at = (e, n) => De("plant:" + e.id, n, _e(e.id), e.readings.map((o) => ye("plant:" + e.id, o)), "", e.id);
  function ct(e, n, o, d, p, v, f = null) {
    const b = o == null ? null : Math.max(0, Math.min(1, o)), k = b == null ? 0 : Math.round(b * 100);
    return '<div class="tfBar ' + e + '" role="slider" tabindex="0" aria-label="' + oe(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + k + '"' + (p ? ' aria-valuetext="' + oe(p) + '"' : "") + ' data-drag="' + oe(e + "|" + n) + '">' + (f != null ? '<span class="was" aria-hidden="true" style="left:' + f + '%"></span>' : "") + (v ? b == null ? "" : '<b style="left:' + k + '%"></b>' : '<i style="width:' + k + '%"></i>') + "</div>";
  }
  const Rt = "move-assistant-house-last-bright", bt = (() => {
    try {
      return JSON.parse(si.get(Rt)) || {};
    } catch {
      return {};
    }
  })();
  let Jt = 0;
  const Sn = (e, n) => {
    !n || bt[e] === n || (bt[e] = n, clearTimeout(Jt), Jt = setTimeout(() => si.set(Rt, JSON.stringify(bt)), 500));
  }, zn = (e, n, o, d) => '<div class="tfStep" role="group" aria-label="' + oe(e) + '"><button type="button" data-act="' + o + '" aria-label="Lower ' + oe(e.toLowerCase()) + '">' + Lc.down + "</button><output>" + oe(n) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + oe(e.toLowerCase()) + '">' + Lc.up + "</button></div>", on = (e, n, o) => '<div class="' + e + '" role="group" aria-label="' + oe(n) + '">' + o.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + oe(d.aria) + '"' : "") + ">" + (d.html || oe(d.label)) + "</button>").join("") + "</div>", Oo = (e, n) => "width:" + Math.round(Math.max(0, Math.min(1, (e - n * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * n / 3).toFixed(2), pa = (e) => "left:calc(4px + " + e / 100 + " * (100% - 8px))", Ga = (e, n) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + oe(_e(e)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-blocks="' + oe(e) + '">' + [0, 1, 2, 3].map((o) => '<span><i style="' + Oo(n, o) + '"></i><b' + (n >= (o + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (o + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + pa(n) + '">' + Math.round(n) + "%</output></div>";
  function pi(e, n) {
    e.querySelectorAll(":scope>span").forEach((d, p) => {
      d.firstElementChild.setAttribute("style", Oo(n, p)), d.lastElementChild.classList.toggle("lit", n >= (p + 1) * 25 - 12);
    });
    const o = e.querySelector(".tfTip");
    o.setAttribute("style", pa(n)), o.textContent = Math.round(n) + "%", e.setAttribute("aria-valuenow", String(Math.round(n))), e.setAttribute("aria-valuetext", Math.round(n) + "% open");
  }
  const fi = (e, n) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + oe(_e(e)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-drag="tilt|' + oe(e) + '"><i style="width:calc((100% - 8px) * ' + n / 100 + ')"></i><span' + (n > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (n > 92 ? ' class="lit"' : "") + ">Open</span></div>", vt = (e, n, o) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + oe(_e(e)) + '">' + [
    dt(e, Zf) && ["open", "Open", "open_cover", n >= 100 && !o],
    dt(e, $f) && ["stop", "Stop", "stop_cover", !1],
    dt(e, Kf) && ["close", "Close", "close_cover", n <= 0 && !o]
  ].filter(Boolean).map(([d, p, v, f]) => '<button type="button" data-act="' + te("cover", v, e) + '" aria-label="' + p + '"' + (f ? " disabled" : "") + ">" + Xf[d] + "</button>").join("") + "</div>", jn = (e, n) => '<button class="tfIcon' + (n.art ? " art" : "") + '" type="button" data-act="' + n.button.act + '" aria-label="' + oe(n.button.label) + '"' + (n.art ? ' style="background-image:url(&quot;' + oe(n.art) + '&quot;)"' : U(e, n.icon)) + "></button>", oa = (e) => '<button class="tfName" type="button" data-more="' + oe(e) + '" aria-label="' + oe(_e(e) + ", " + Ft(e) + ". More info") + '"><span class="activityRowName">' + oe(_e(e)) + '</span><span class="activityRowMeta">' + oe(Ft(e)) + "</span></button>";
  function Pa(e, n = !1, o = null) {
    if (e.startsWith("light.") && xs(e)) return '<div class="tfDac" data-k="' + oe(e) + '" data-dac="' + (n ? "more:" : o ? "dash:" : "tile:") + oe(e) + '"></div>';
    const d = mi(e), p = o || (n && e.startsWith("light.") ? ["bright"] : null), v = d.sections.map((f, b) => f && (!p || p.includes((d.parts || [])[b])) ? f : "").filter(Boolean);
    return '<div class="tfAction' + (d.on ? " on" : "") + '" data-k="' + oe(e) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + Vt(e) + '><div class="tfActionHead">' + jn(e, d) + oa(e) + "</div>" + v.join("") + "</div>";
  }
  const Cn = "dual-controller-v3", qo = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.4/dist/dual-axis-controller-v4.js";
  let At = null;
  async function gn() {
    if (At || customElements.get(Cn)) return;
    At = "loading";
    const e = await Promise.resolve().then(() => H({ type: "lovelace/resources" })).catch(() => null), n = Array.isArray(e) && e.some((d) => /dual-axis-controller/i.test(d.url || ""));
    if (await Promise.race([customElements.whenDefined(Cn), new Promise((d) => setTimeout(d, n ? 8e3 : 0))]), customElements.get(Cn)) return;
    const o = Object.assign(document.createElement("script"), { src: qo });
    o.onerror = () => {
      At = "failed", Y();
    }, document.head.appendChild(o);
  }
  const Ut = /* @__PURE__ */ new Map(), Ar = (e) => (Lt.lightStyles[e] || Lt.lights) === "dac", _r = () => Lt.lights === "dac" || Object.values(Lt.lightStyles).includes("dac");
  function xs(e) {
    return Ar(e) && !!customElements.get(Cn);
  }
  const Yi = (e) => Lt.lightPads[e] || Lt.dacPad, Er = () => {
    const e = i();
    return e && {
      ...e,
      themes: { ...e.themes || {}, darkMode: !m.classList.contains("light") },
      callService: (n, o, d, ...p) => e.callService(n, ...al(n, o, d), ...p)
    };
  }, Dl = ".halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", Dr = ".hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}", ys = (e, n) => {
    !e.shadowRoot || e.shadowRoot.querySelector("style[data-tf]") || (e.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Dr + (n ? Dl : "") })).dataset.tf = "");
  }, hi = /* @__PURE__ */ new Map(), Rl = new ResizeObserver((e) => e.forEach(({ target: n }) => {
    const o = n.parentElement;
    !o || !n.offsetHeight || (o.style.removeProperty("min-height"), hi.set(o.dataset.dac, o.offsetHeight));
  }));
  function Zi(e) {
    e.querySelectorAll("[data-dac]").forEach((n) => {
      const o = n.dataset.dac, d = o.startsWith("dash:");
      let p = Ut.get(o);
      if (!p) {
        const v = o.slice(o.indexOf(":") + 1);
        p = document.createElement(Cn), p.setConfig({ type: "custom:" + Cn, entity: v, pad: Yi(v), ...d ? { tap_action: { action: "none" } } : {} }), Ut.set(o, p);
      }
      p.hass = Er(), p.parentNode !== n && n.replaceChildren(p, ...n.querySelectorAll(":scope > .tfEditChips")), !p.offsetHeight && hi.has(o) && (n.style.minHeight = hi.get(o) + "px"), Rl.observe(p), ys(p, d);
    });
  }
  function ks() {
    const e = Er();
    Ut.forEach((n, o) => {
      n.isConnected ? n.hass = e : Ut.delete(o);
    });
  }
  customElements.whenDefined(Cn).then(() => {
    w && (T != null && T.querySelector("[data-tf]")) && Un(za);
  });
  const Ia = (e, n, o) => qe.has(e + "|" + n) ? qe.get(e + "|" + n) : o;
  function mi(e) {
    var v;
    const n = x[e], o = n.attributes, d = e.split(".")[0], p = (f, b) => ({ act: te(f, "toggle", e), label: b });
    if (d === "light") {
      const f = n.state === "on", b = Fo(e), [k, E] = mo(e), B = Ia("bright", e, ho(n));
      f && Sn(e, ho(n));
      const N = Ia("ct", e, f && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), Z = Ia("hue", e, f && yd.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null);
      return { on: f, button: p("light", "Turn " + _e(e) + (f ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Nn(e) && ct("bright", e, B / 100, _e(e) + " brightness", B + "%", !1, f ? null : bt[e] ?? null),
        b.includes("color_temp") && ct("ct", e, N == null ? null : (N - k) / (E - k), _e(e) + " warm to cool", N == null ? "" : Math.round(N) + " kelvin", !0),
        b.some((he) => yd.includes(he)) && ct("hue", e, Z == null ? null : Z / 360, _e(e) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const f = o.target_temp_step || 0.5, b = Number(o.temperature);
      return { on: n.state !== "off", tone: n.state === "cool" || o.hvac_action === "cooling" ? "cool" : "heat", button: p("climate", "Turn " + _e(e) + (n.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(b) && zn("Target temperature", Ie(b) + " °C", te("climate", "set_temperature", e, { temperature: b - f }), te("climate", "set_temperature", e, { temperature: b + f })),
        on("tfSeg", "Mode", (o.hvac_modes || []).map((k) => ({ label: wt(k), act: te("climate", "set_hvac_mode", e, { hvac_mode: k }), pressed: n.state === k })))
      ] };
    }
    if (d === "cover") {
      const f = n.state === "opening" || n.state === "closing", b = n.state === "closed", k = wa(e), E = go(e);
      return { on: !b, tone: "blue", icon: Nc[vd(n)][b ? 1 : 0], button: p("cover", (b ? "Open " : "Close ") + _e(e)), parts: ["blocks", "tilt", "buttons"], sections: [
        dt(e, Rc) && Ga(e, k),
        E != null && fi(e, E),
        vt(e, k, f)
      ] };
    }
    if (d === "humidifier") {
      const f = Number(o.humidity);
      return { on: n.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: p("humidifier", "Turn " + _e(e) + (n.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && zn("Target humidity", f + "%", te("humidifier", "set_humidity", e, { humidity: f - 1 }), te("humidifier", "set_humidity", e, { humidity: f + 1 })),
        ((v = o.available_modes) == null ? void 0 : v.length) && on("tfSeg", "Mode", o.available_modes.map((b) => ({ label: wt(b), act: te("humidifier", "set_mode", e, { mode: b }), pressed: o.mode === b })))
      ] };
    }
    if (d === "media_player") {
      const f = n.state === "playing", b = n.state === "off" || n.state === "standby", k = Ia("vol", e, o.volume_level), E = b ? { act: te("media_player", dt(e, Uf) ? "turn_on" : "toggle", e), label: "Turn " + _e(e) + " on" } : n.state === "playing" || n.state === "paused" ? { act: te("media_player", "media_play_pause", e), label: (f ? "Pause " : "Play ") + _e(e) } : { act: te("media_player", dt(e, Yf) ? "turn_off" : "toggle", e), label: "Turn " + _e(e) + " off" };
      return { on: !b, tone: "blue", art: !b && o.entity_picture ? o.entity_picture : null, button: E, parts: ["playback", "volume"], sections: b ? [] : [
        (dt(e, _c) || dt(e, Ec) || dt(e, Ac) || dt(e, Dc)) && on("tfSeg", "Playback", [
          { html: wl.prev, aria: "Previous", act: te("media_player", "media_previous_track", e), disabled: !dt(e, _c) },
          { html: f ? wl.pause : wl.play, aria: f ? "Pause" : "Play", act: te("media_player", "media_play_pause", e), disabled: !(dt(e, Ac) || dt(e, Dc)) },
          { html: wl.next, aria: "Next", act: te("media_player", "media_next_track", e), disabled: !dt(e, Ec) }
        ]),
        dt(e, Gf) && k != null && ct("vol", e, k, _e(e) + " volume", Math.round(k * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const f = n.state === "cleaning", b = o.rooms || [], k = (B) => b.includes(B) ? b.filter((N) => N !== B) : b.concat(B), E = te("vacuum", f ? "pause" : "start", e, qi(e) ? { rooms: b } : null);
      return { on: f || n.state === "returning", tone: "blue", button: { act: E, label: (f ? "Pause " : "Start ") + _e(e) }, parts: ["controls", "rooms"], sections: [
        on("tfSeg", _e(e), [
          { label: f ? "Pause" : "Start", act: E },
          { label: "Dock", act: te("vacuum", "return_to_base", e), disabled: n.state === "docked" },
          { label: "Locate", act: te("vacuum", "locate", e) }
        ]),
        qi(e) && on("tfChips", "Rooms to clean", Je.rooms.filter((B) => B.id !== "balcony").map((B) => ({ label: B.name, act: te("vacuum", "set_rooms", e, { rooms: k(B.name) }), pressed: b.includes(B.name) })))
      ] };
    }
    if (d === "lock") {
      const f = n.state === "locked";
      return { on: !f, tone: "heat", button: { act: te("lock", f ? "unlock" : "lock", e), label: (f ? "Unlock " : "Lock ") + _e(e) }, parts: ["controls"], sections: [
        on("tfSeg", _e(e), [
          { label: "Lock", act: te("lock", "lock", e), pressed: f },
          { label: "Unlock", act: te("lock", "unlock", e), pressed: n.state === "unlocked" },
          dt(e, rh) && { label: "Open", act: te("lock", "open", e), pressed: n.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const f = n.state === "disarmed";
      return { on: !f, tone: n.state === "triggered" ? "alarm" : "blue", button: { act: te("alarm_control_panel", f ? "alarm_arm_away" : "alarm_disarm", e), label: f ? "Arm " + _e(e) + ", away" : "Disarm " + _e(e) }, parts: ["controls"], sections: [
        on("tfSeg", _e(e), sh.filter(([, , , b]) => !b || dt(e, b)).map(([b, k, E]) => ({ label: k, act: te("alarm_control_panel", E, e), pressed: n.state === b })))
      ] };
    }
    if (d === "valve") {
      const f = n.state === "open";
      return { on: f, tone: "blue", icon: "mdi:sprinkler-variant", button: p("valve", (f ? "Close " : "Open ") + _e(e)), parts: ["controls"], sections: [
        on("tfSeg", _e(e), [
          { label: "Open", act: te("valve", "open_valve", e), pressed: f },
          { label: "Close", act: te("valve", "close_valve", e), pressed: !f }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: _e(e) }, sections: [] };
  }
  const Wo = (e) => (Number.isInteger(Number(e)) ? String(Number(e)) : Ie(e)) + "°";
  function Ua(e) {
    var ve;
    const n = (L) => e.readings.find((me) => gt(me).device_class === L), o = n("temperature"), d = n("humidity"), p = (L) => {
      var me;
      return Number((me = x[L]) == null ? void 0 : me.state);
    }, v = (L) => e.actions.filter((me) => L.test(me)), f = e.lights.filter((L) => {
      var me;
      return ((me = x[L]) == null ? void 0 : me.state) === "on";
    }), b = v(/^cover\./), k = b.filter((L) => {
      var me;
      return ((me = x[L]) == null ? void 0 : me.state) !== "closed";
    }), E = [...new Set(b.map((L) => vd(x[L])))], B = v(/^climate\./)[0], N = v(/^humidifier\./)[0], Z = v(/^media_player\./), he = Z.find((L) => {
      var me;
      return ((me = x[L]) == null ? void 0 : me.state) === "playing";
    }) || Z.find((L) => {
      var me;
      return ((me = x[L]) == null ? void 0 : me.state) === "paused";
    }), Te = e.plugs.filter((L) => {
      var me;
      return ((me = x[L]) == null ? void 0 : me.state) === "on";
    }), ee = [];
    if (o && Number.isFinite(p(o)) && ee.push({ key: "temp", id: o, kind: "reading", icon: co(o), label: "Temperature", value: Ie(p(o)) + "°" }), d && Number.isFinite(p(d)) && ee.push({ key: "hum", id: d, kind: "reading", icon: co(d), label: "Humidity", value: Math.round(p(d)) + "%" }), e.lights.length && ee.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: co("", "mdi:lightbulb"),
      label: "Lights",
      value: f.length ? f.length + " of " + e.lights.length + " on" : "All off",
      short: f.length ? f.length + " on" : "Off",
      on: f.length > 0,
      light: f.length ? Va(f[0]) : "",
      acts: e.lights.map((L) => ["light", f.length ? "turn_off" : "turn_on", L]),
      aria: (f.length ? "Turn off" : "Turn on") + " the lights in " + e.name
    }), b.length) {
      const L = E.length === 1 ? Jf[E[0]] : "covers", me = Math.round(b.reduce((Ne, Qe) => Ne + Gt(Qe), 0) / b.length);
      ee.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: co("", ((ve = Nc[E[0]]) == null ? void 0 : ve[k.length ? 0 : 1]) || "mdi:window-shutter"),
        label: wt(L),
        value: me <= 0 ? "Closed" : me >= 100 ? "Open" : me + "% open",
        short: me <= 0 ? "Closed" : me + "%",
        on: k.length > 0,
        acts: b.map((Ne) => ["cover", k.length ? "close_cover" : "open_cover", Ne]),
        aria: (k.length ? "Close the " : "Open the ") + L + " in " + e.name
      });
    }
    if (B) {
      const L = gt(B), me = x[B].state === "off";
      ee.push({
        key: "climate",
        kind: "control",
        tone: L.hvac_action === "cooling" ? "cool" : "heat",
        icon: co(B),
        label: _e(B),
        value: me ? "Off" : wt(L.hvac_action || x[B].state) + " · " + Wo(L.temperature),
        short: me ? "Off" : Wo(L.temperature),
        on: !me,
        acts: [["climate", "toggle", B]],
        aria: "Turn " + _e(B) + (me ? " on" : " off")
      });
    }
    if (N) {
      const L = x[N].state === "on";
      ee.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: co("", "mdi:air-humidifier"),
        label: _e(N),
        value: L ? "On · " + gt(N).humidity + "%" : "Off",
        short: L ? gt(N).humidity + "%" : "Off",
        on: L,
        acts: [["humidifier", "toggle", N]],
        aria: "Turn " + _e(N) + (L ? " off" : " on")
      });
    }
    if (Z.length) {
      const L = he || Z[0], me = x[L], Ne = me.state === "playing";
      ee.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: co(L),
        label: _e(L),
        value: Ft(L),
        short: Ne ? "Playing" : me.state === "paused" ? "Paused" : wt(me.state),
        on: Ne,
        acts: [["media_player", me.state === "playing" || me.state === "paused" ? "media_play_pause" : "toggle", L]],
        aria: (Ne ? "Pause " : "Play ") + _e(L)
      });
    }
    return e.plugs.length && ee.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: co("", "mdi:power-plug"),
      label: "Plugs",
      value: Te.length ? Te.length + " of " + e.plugs.length + " on" : "All off",
      short: Te.length ? Te.length + " on" : "Off",
      on: Te.length > 0,
      acts: e.plugs.map((L) => ["switch", Te.length ? "turn_off" : "turn_on", L]),
      aria: (Te.length ? "Turn off" : "Turn on") + " the plugs in " + e.name
    }), e.alerts.forEach((L) => ee.push(gt(L).device_class === "moisture" ? { key: "alert:" + L, kind: "alert", icon: co(L), label: "Water leak" } : { key: "note:" + L, kind: "note", icon: co(L), label: _e(L) + " " + Ft(L).toLowerCase() })), ee;
  }
  const Rr = (e, n) => {
    const o = (d) => e.actions.filter((p) => d.test(p));
    return {
      lights: e.lights,
      covers: o(/^cover\./),
      climate: o(/^climate\./).slice(0, 1),
      humidifier: o(/^humidifier\./).slice(0, 1),
      plugs: e.plugs,
      media: (() => {
        const d = o(/^media_player\./);
        return [d.find((p) => {
          var v;
          return ((v = x[p]) == null ? void 0 : v.state) === "playing";
        }) || d.find((p) => {
          var v;
          return ((v = x[p]) == null ? void 0 : v.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[n] || [];
  }, Nr = (e, n, o) => '<button class="' + n + (e.on ? " on" : "") + '" type="button" data-tone="' + e.tone + '" data-acts="' + pe(e.acts) + '" aria-label="' + oe(e.aria) + '" aria-pressed="' + e.on + '">' + o + "</button>", gi = (e) => '<button class="tfAName" type="button" data-go="' + oe(e.id) + '" aria-label="Open ' + oe(e.name) + '">' + oe(e.name) + "</button>";
  function Br(e, n, o = !1) {
    const d = n.find((b) => b.key === "lights"), p = !!(d != null && d.on), v = p && d.light ? ' data-light style="' + d.light + '"' : "", f = '<span class="tfAreaGlyph"' + U("area:" + e.id, e.icon || "mdi:texture-box", e.name) + "></span>";
    return o || !d ? '<span class="tfIcon tfAreaIcon' + (p ? " on" : "") + '"' + v + ' aria-hidden="true">' + f + "</span>" : '<button class="tfIcon tfAreaIcon' + (p ? " on" : "") + '" type="button"' + v + ' data-acts="' + pe(d.acts) + '" aria-label="' + oe(d.aria) + '" aria-pressed="' + p + '">' + f + "</button>";
  }
  const Nl = (e) => e.filter((n) => n.kind === "alert" || n.kind === "note").map((n) => '<span class="sourceTag">' + oe(n.label) + "</span>").join(" "), Pr = (e) => e.readings.find((n) => gt(n).device_class === "temperature") || [...e.readings, ...e.solar, ...e.openings, ...e.actions, ...e.plugs].find((n) => x[n]) || null, Ki = (e, n) => {
    const o = _e(n);
    return o.toLowerCase().startsWith(e.name.toLowerCase() + " ") ? wt(o.slice(e.name.length + 1)) : o;
  };
  function Nt(e) {
    const n = x[e], o = gt(e), d = e.split(".")[0], p = Number(n.state);
    if (n.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(p)) {
      if (o.device_class === "temperature") return { text: Wo(p) };
      const v = o.unit_of_measurement || "";
      return v === "%" ? { text: Math.round(p) + "%" } : { text: Ie(p, Number.isInteger(p) ? 0 : 1), unit: v };
    }
    if (d === "climate" && (o.current_temperature ?? o.temperature) != null) return { text: Wo(o.current_temperature ?? o.temperature) };
    if (d === "light") return { text: n.state !== "on" ? "Off" : Nn(e) ? ho(n) + "%" : "On" };
    if (d === "cover") {
      const v = Gt(e);
      return { text: v <= 0 ? "Closed" : v >= 100 ? "Open" : v + "%" };
    }
    return d === "humidifier" ? { text: n.state === "on" ? o.humidity + "%" : "Off" } : d === "media_player" ? { text: n.state === "playing" ? "Playing" : n.state === "paused" ? "Paused" : wt(n.state) } : { text: Ft(e) };
  }
  const Bl = (e, n, o) => {
    const d = o.find((b) => b.key === "temp"), p = o.find((b) => b.key === "hum"), v = gt(n), f = x[n].state === "off";
    return n.startsWith("climate.") ? [Ki(e, n), f ? "Off" : wt(v.hvac_action || x[n].state) + (v.temperature != null ? " · " + Wo(v.temperature) : ""), p && p.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === n) && Ki(e, n), d && d.id !== n && d.value, p && p.id !== n && p.value + " humidity"].filter(Boolean).join(" · ");
  };
  function Pl(e, n, o) {
    const d = o && Nt(o), p = o ? Bl(e, o, n) : "", v = (b) => {
      const k = Rr(e, b.key);
      return k.length === 1 ? k[0] : "group:" + e.id + ":" + b.key;
    }, f = n.filter((b) => b.kind === "control").slice(0, 4).map((b) => '<div class="tfATile' + (b.on ? " on" : "") + '" data-tone="' + b.tone + '"' + (b.light ? ' data-light style="' + b.light + '"' : "") + ">" + Nr(b, "tfIcon", b.icon) + '<button class="tfName" type="button" data-more="' + oe(v(b)) + '" aria-label="' + oe(e.name + " " + b.label.toLowerCase() + ", " + b.value + ". Open") + '"><span class="activityRowName">' + oe(b.label) + '</span><span class="activityRowMeta">' + oe(b.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + Br(e, n) + '<div class="tfATitle">' + gi(e) + Nl(n) + "</div></div>" + (o ? '<button class="tfABig" type="button" data-more="' + oe(o) + '" aria-label="' + oe(_e(o) + ", " + Ft(o) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + oe(d.text) + (d.unit ? '<span class="tfABigUnit">' + oe(d.unit) + "</span>" : "") + "</span>" + (p ? '<span class="tfABigSub">' + oe(p) + "</span>" : "") + "</button>" : "") + (f.length ? '<div class="tfATiles">' + f.join("") + "</div>" : "");
  }
  function Ms(e) {
    const n = e.id === be, o = Ua(e), d = Pr(e), p = d && Nt(d), v = [...o.filter((f) => f.kind === "control"), ...o.filter((f) => f.kind !== "control" && f.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (n ? " active" : "") + '" data-area="' + oe(e.id) + '" tabindex="0" aria-expanded="' + n + '" aria-label="' + oe(e.name) + '"><div class="panelExpanded"' + (n ? "" : " inert") + ">" + Pl(e, o, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + Br(e, o, !0) + '<span class="tfACName">' + oe(e.name) + '</span></div><span class="tfACMain">' + (p ? oe(p.text + (p.unit ? " " + p.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + v.map((f) => '<span class="tfACTile"><span class="tfIcon' + (f.kind === "alert" ? " alert" : "") + '"' + (f.on && f.light ? ' data-light style="' + f.light + '"' : "") + ">" + f.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let fa = [];
  const Ss = (e) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + e + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + fa.map(Ms).join("") + "</section></div>", Ot = () => [
    { key: "home", name: "Home", ids: Je.homeVacuums },
    ...Je.rooms.map((e) => ({ key: "room:" + e.id, name: e.name, room: e, ids: e.actions }))
  ], ia = (e, n, o) => e + " " + (e === 1 ? n : o), vn = () => (z.favourites ?? re.favorite_entities ?? []).filter((e) => x[e]);
  function Il() {
    if (!We) {
      const n = Object.entries(tt).sort((d, p) => p[1] - d[1]).map(([d]) => d), o = Je.rooms.flatMap((d) => d.actions);
      We = [.../* @__PURE__ */ new Set([...ge, ...n, ...o.filter((d) => mi(d).on), ...o])];
    }
    const e = vn();
    return We.filter((n) => x[n] && x[n].state !== "unavailable" && !e.includes(n));
  }
  let vi = !1;
  function bi() {
    if (!vi || z.favSeeded || !Je.rooms.length) return;
    const e = (o) => Object.keys(x).find((d) => qi(d) && o(d)), n = [e((o) => o.startsWith("climate.")), e((o) => o.startsWith("cover.") && /curtain/.test(o)), e((o) => o.startsWith("valve.")), Je.security.locks[0]];
    z = { ...z, favourites: [.../* @__PURE__ */ new Set([...z.favourites ?? re.favorite_entities ?? [], ...n.filter(Boolean)])], favSeeded: !0 }, Rn();
  }
  const bo = () => z.suggest ?? !re.hide_suggested_entities;
  function Ya() {
    const e = new Set(z.favHidden || []), n = vn().filter((d) => !e.has(d)), o = bo() ? Il().filter((d) => !e.has(d) && Wr(d)) : [];
    return [...n, ...o].slice(0, dh);
  }
  const Za = (e) => {
    const n = vn().includes(e);
    return '<button class="tfStar" type="button" data-star="' + oe(e) + '" aria-pressed="' + n + '" aria-label="Favourite: ' + oe(_e(e)) + '">' + ih(n) + "</button>";
  };
  function Ir(e, { area: n = !1, star: o = !1, plain: d = !1, say: p = null, alert: v = !1 } = {}) {
    var Te, ee, ve, L, me, Ne;
    const f = d && ((me = (Te = i()) == null ? void 0 : Te.devices) == null ? void 0 : me[(L = (ve = (ee = i()) == null ? void 0 : ee.entities) == null ? void 0 : ve[e]) == null ? void 0 : L.device_id]), b = f && (f.name_by_user || f.name) || _e(e), k = e.split(".")[0], E = !d && yl.includes(k) ? mi(e) : null, B = E ? E.on : ["on", "open", "playing"].includes((Ne = x[e]) == null ? void 0 : Ne.state), N = d ? null : E ? E.button : Qf.includes(k) ? { act: te(k, "toggle", e), label: "Turn " + _e(e) + (B ? " off" : " on") } : k === "scene" || k === "script" ? { act: te(k, "turn_on", e), label: "Run " + _e(e) } : null, Z = (p ?? Ft(e)) + (n && yt.get(e) ? " · " + yt.get(e) : ""), he = (E == null ? void 0 : E.icon) || ue(e);
    return '<div class="activityRow' + (N ? " tfPlug" : "") + (B ? " on" : "") + (o ? " tfPick" : "") + (v ? " alert" : "") + '" data-k="' + oe((n ? "fav:" : "row:") + e) + '" data-tone="' + (k === "light" ? "light" : (E == null ? void 0 : E.tone) || "blue") + '"' + Vt(e) + ">" + (N && !o ? '<button class="tfIcon" type="button" data-act="' + N.act + '" aria-label="' + oe(N.label) + '"' + U(e, he) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + U(e, he) + "></div>") + '<button class="tfName" type="button" data-more="' + oe(e) + '" aria-label="' + oe(b + ", " + Z + ". More info") + '"><span class="activityRowName">' + oe(b) + '</span><span class="activityRowMeta">' + oe(Z) + "</span></button>" + (o ? Za(e) : "") + "</div>";
  }
  const Ha = () => {
    var e;
    return x[(e = z.sources) == null ? void 0 : e.weather] ? z.sources.weather : x["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(x).find((n) => n.startsWith("weather."));
  };
  function Cs() {
    var o;
    const e = (d) => Object.keys(x).filter((p) => p.startsWith("binary_sensor.") && d.includes(gt(p).device_class));
    return ((o = ce.alert_entities) != null && o.length ? ce.alert_entities : [...e(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...e(xl).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => x[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(x[d.entity].state) }));
  }
  function ya() {
    const e = Object.keys(wd), n = /* @__PURE__ */ new Set(), o = [];
    return (re.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!e.includes(d.key) || n.has(d.key)) return;
        n.add(d.key);
      }
      o.push(d);
    }), e.forEach((d) => {
      n.has(d) || o.push({ type: "summary", key: d });
    }), o;
  }
  function Ts() {
    var ve;
    const e = ((ve = i()) == null ? void 0 : ve.entities) || {}, n = (L) => gt(L).device_class, o = Object.keys(x).filter((L) => L.startsWith("sensor.") && n(L) === "battery" || L.startsWith("binary_sensor.") && ["battery", "problem"].includes(n(L))), d = Je.rooms.flatMap((L) => L.plants.map((me) => me.id));
    if (!o.length && !d.length) return null;
    const p = (L) => {
      var Ne;
      const me = (Ne = e[L]) == null ? void 0 : Ne.device_id;
      return !!me && Object.keys(x).some((Qe) => {
        var Qt;
        return Qe.startsWith("binary_sensor.") && ((Qt = e[Qe]) == null ? void 0 : Qt.device_id) === me && n(Qe) === "battery_charging" && x[Qe].state === "on";
      });
    }, v = (L) => L.startsWith("vacuum.") ? gt(L).battery_level <= 20 && x[L].state !== "docked" : L.startsWith("binary_sensor.") ? n(L) === "battery" && x[L].state === "on" : parseFloat(x[L].state) <= 20 && !p(L), f = [...o, ...Je.vacuums].filter((L) => x[L] && v(L)), b = [...o.filter((L) => n(L) === "problem" && x[L].state === "on"), ...d.filter((L) => {
      var me;
      return ((me = x[L]) == null ? void 0 : me.state) === "problem";
    })], k = o.filter((L) => x[L].state === "unavailable"), E = [.../* @__PURE__ */ new Set([...f, ...b, ...k])], B = (L) => {
      const me = parseFloat(x[L].state);
      return n(L) === "battery" && Number.isFinite(me) ? me : 101;
    }, N = [...d, ...Je.vacuums, ...[...o].sort((L, me) => B(L) - B(me))].filter((L) => x[L] && !E.includes(L)), Z = /* @__PURE__ */ new Map();
    N.forEach((L) => {
      var Ne;
      const me = ((Ne = Je.areaOf) == null ? void 0 : Ne.call(Je, L)) || "";
      Z.set(me, [...Z.get(me) || [], L]);
    });
    const he = (L) => {
      const me = Je.rooms.findIndex((Ne) => Ne.id === L);
      return L === "" ? 1 / 0 : me < 0 ? Je.rooms.length : me;
    }, Te = [...Z.keys()].sort((L, me) => he(L) - he(me)), ee = (L) => {
      var me, Ne, Qe, Qt;
      return ((me = Je.rooms.find((It) => It.id === L)) == null ? void 0 : me.name) || ((Qt = (Qe = (Ne = i()) == null ? void 0 : Ne.areas) == null ? void 0 : Qe[L]) == null ? void 0 : Qt.name) || L;
    };
    return {
      value: [f.length && ia(f.length, "low battery", "low batteries"), b.length && ia(b.length, "problem", "problems"), k.length && ia(k.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: E, alert: !0 }, ...Te.map((L) => ({ name: L ? ee(L) : Te.length > 1 ? "Other devices" : "Devices", ids: Z.get(L) }))].filter((L) => L.ids.length)
    };
  }
  function Hr() {
    var ca;
    const e = Je.rooms, n = Je.security, o = (Ve, Wt) => Ve.actions.filter((us) => Wt.test(us)), d = (Ve) => e.map((Wt) => ({ name: Wt.name, ids: Ve(Wt) })).filter((Wt) => Wt.ids.length), p = e.flatMap((Ve) => Ve.lights), v = p.filter((Ve) => {
      var Wt;
      return ((Wt = x[Ve]) == null ? void 0 : Wt.state) === "on";
    }).length, f = e.map((Ve) => Ve.readings.find((Wt) => gt(Wt).device_class === "temperature")).filter(Boolean).map((Ve) => Number(x[Ve].state)).filter(Number.isFinite), [b, k] = [Ie(Math.min(...f)), Ie(Math.max(...f))], E = e.flatMap((Ve) => o(Ve, /^media_player\./)), B = E.filter((Ve) => {
      var Wt;
      return ((Wt = x[Ve]) == null ? void 0 : Wt.state) === "playing";
    }).length, N = Cs(), Z = N.filter((Ve) => Ve.severity === "warning" && Ve.on).length, he = n.locks.filter((Ve) => {
      var Wt;
      return ["unlocked", "jammed", "open"].includes((Wt = x[Ve]) == null ? void 0 : Wt.state);
    }).length, Te = n.alarms.filter((Ve) => {
      var Wt;
      return ((Wt = x[Ve]) == null ? void 0 : Wt.state) === "disarmed";
    }).length, ee = Z ? ia(Z, "warning", "warnings") : null, ve = he ? he + " unlocked" : Te ? Te + " disarmed" : ee ? null : "All secure", L = Ts(), me = e.flatMap((Ve) => Ve.solar), Ne = me.find((Ve) => Ve.endsWith("_power")), Qe = {
      light: p.length && { value: v ? v + " on" : "All off", groups: d((Ve) => Ve.lights) },
      climate: f.length && { value: b === k ? b + "°" : b + " - " + k + "°", groups: d((Ve) => [...Ve.readings.filter((Wt) => ["temperature", "humidity"].includes(gt(Wt).device_class)), ...o(Ve, /^(climate|humidifier)\./)]) },
      security: (n.alarms.length || n.locks.length) && { value: [ee, ve].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...n.alarms, ...n.locks] }, { name: "Doors and windows", ids: n.openings }].filter((Ve) => Ve.ids.length) },
      media_players: E.length && { value: B ? B + " playing" : "No media playing", groups: d((Ve) => o(Ve, /^media_player\./)) },
      maintenance: L,
      energy: Je.grid && { value: xa(Number(((ca = x[Ne]) == null ? void 0 : ca.state) || 0) * 1e3 + Number(x[Je.grid].state)) + " now", groups: [{ name: "Energy", ids: [...me, Je.grid] }] }
    }, Qt = [], It = N.filter((Ve) => Ve.severity !== "warning" && Ve.on);
    return It.length && Qt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: ia(It.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: It.map((Ve) => Ve.entity) }] }), ya().forEach((Ve) => {
      Ve.type !== "summary" ? Qt.push({ key: "path:" + Ve.path, name: Ve.label || Ve.path, icon: Ve.icon || "mdi:link-variant", colour: "", value: "" }) : !Ve.hidden && Qe[Ve.key] && !(z.hiddenSums || []).includes(Ve.key) && Qt.push({ key: Ve.key, ...wd[Ve.key], ...Qe[Ve.key] });
    }), Qt;
  }
  const Fr = (e) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + oe(e.key) + '" data-k="sum:' + oe(e.key) + '" aria-label="' + oe(e.name + (e.value ? ", " + e.value : "")) + '"' + (e.key === "alerts" ? ' style="--sum:' + e.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + U(e.id || "", e.icon, e.name) + '></div><div><div class="activityRowName">' + oe(e.name) + "</div>" + (e.value ? '<div class="activityRowMeta">' + oe(e.value) + "</div>" : "") + "</div></div>";
  function $i(e) {
    const n = vn();
    z = { ...z, favourites: n.includes(e) ? n.filter((o) => o !== e) : [...n, e], favHidden: (z.favHidden || []).filter((o) => o !== e) }, Rn(), sn();
  }
  function Ls(e) {
    document.querySelector("home-assistant") && (we.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function As(e, n) {
    if (e.startsWith("path:")) {
      Ls(e.slice(5));
      return;
    }
    Qo("summary:" + e, n);
  }
  async function Xi() {
    const e = (f) => Promise.resolve().then(() => H(f)).catch(() => null), [n, o, d, p] = await Promise.all([
      e({ type: "frontend/get_user_data", key: Bc }),
      e({ type: "frontend/get_system_data", key: "home" }),
      e({ type: "frontend/get_system_data", key: "security" }),
      e({ type: "usage_prediction/common_control" })
    ]), v = (n == null ? void 0 : n.value) || {};
    z = { favourites: v.favourites ?? null, sources: v.sources, hiddenSums: v.hiddenSums, dash: v.dash, named: v.named, favHidden: v.favHidden, suggest: v.suggest, favSeeded: v.favSeeded }, re = (o == null ? void 0 : o.value) || {}, ce = (d == null ? void 0 : d.value) || {}, ge = Array.isArray(p == null ? void 0 : p.entities) ? p.entities : [], We = null, Object.keys(x).length && sn(), wi(), vi = !0, bi();
  }
  const Or = "HomeCore";
  async function wi() {
    var d, p, v;
    const e = location.pathname.split("/")[1], n = z.named || [];
    if (!((p = (d = i()) == null ? void 0 : d.user) != null && p.is_admin) || !e || n.includes(e)) return;
    const o = () => {
      z = { ...z, named: [...n, e] }, Rn();
    };
    try {
      const f = (v = await H({ type: "lovelace/dashboards/list" })) == null ? void 0 : v.find((E) => E.url_path === e);
      if (!f || f.mode === "yaml") return;
      if (f.title === Or) {
        o();
        return;
      }
      const b = await H({ type: "lovelace/config", url_path: e }), k = ((b == null ? void 0 : b.views) || []).flatMap((E) => [...E.cards || [], ...(E.sections || []).flatMap((B) => B.cards || [])]);
      if (!k.length || !k.every((E) => (E == null ? void 0 : E.type) === "custom:move-assistant-card" && E.layout === "test-focus")) return;
      await H({ type: "lovelace/dashboards/update", dashboard_id: f.id, title: Or }), o();
    } catch {
    }
  }
  let xi = null, wo = 0, Fa = !1;
  const Ji = (e) => {
    const n = e.split(".")[0], o = gt(e).device_class;
    return lh.includes(n) && (n !== "binary_sensor" || xl.includes(o) || !!zc[o]);
  }, zo = (e) => e.startsWith("binary_sensor.") ? zc[gt(e).device_class] : null;
  async function yi() {
    var e;
    if (!(Fa || Date.now() - wo < 30 * 1e3)) {
      Fa = !0, wo = Date.now();
      try {
        const n = Object.keys(((e = i()) == null ? void 0 : e.states) || {}).filter(Ji), o = n.length ? await H({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: n }) : null;
        xi = Array.isArray(o) ? o.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        xi = null;
      }
      Fa = !1, sn();
    }
  }
  function Qi() {
    const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), o = (p) => {
      if (!x[p.entity_id] || !Ji(p.entity_id) || !Wr(p.entity_id) || ["unavailable", "unknown"].includes(p.state)) return;
      if (zo(p.entity_id)) {
        const f = n.get(p.entity_id);
        p.state === "on" ? (!f || p.when > f.when + 1) && n.set(p.entity_id, { ...p, alarm: !0, cleared: null }) : f && !f.cleared && p.when > f.when && (f.cleared = p.when);
        return;
      }
      const v = e.get(p.entity_id);
      (!v || p.when > v.when + 1) && e.set(p.entity_id, p);
    };
    [...xi || []].sort((p, v) => p.when - v.when).forEach(o);
    const d = xi ? wo / 1e3 - 5 : 0;
    return Object.keys(x).forEach((p) => {
      var b;
      const v = x[p], f = v.last_changed ? Date.parse(v.last_changed) / 1e3 : 0;
      f > d && o({ entity_id: p, state: v.state, when: f, context_user_id: (b = v.context) == null ? void 0 : b.user_id });
    }), [...e.values(), ...n.values()].sort((p, v) => v.when - p.when).slice(0, ch);
  }
  function ki(e) {
    var d;
    const n = e.context_user_id && Object.keys(x).find((p) => p.startsWith("person.") && gt(p).user_id === e.context_user_id);
    if (n) return _e(n);
    const o = (d = i()) == null ? void 0 : d.user;
    return o && e.context_user_id === o.id ? o.name : ["automation", "script"].includes(e.context_domain) || e.context_event_type === "automation_triggered" ? e.context_name || "Home Assistant" : "";
  }
  function qr(e) {
    const n = e.entity_id.split(".")[0], o = String(e.state);
    return n === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[o] || wt(o).toLowerCase() : n === "cover" || n === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[o] || wt(o).toLowerCase() : n === "binary_sensor" ? o === "on" ? "opened" : "closed" : n === "climate" ? o === "off" ? "turned off" : "set to " + wt(o).toLowerCase() : n === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[o] || wt(o).toLowerCase() : n === "alarm_control_panel" ? (Wc[o] || wt(o)).toLowerCase() : n === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[o] || wt(o).toLowerCase() : o === "on" ? "turned on" : o === "off" ? "turned off" : wt(o).toLowerCase();
  }
  function ka(e) {
    const n = e.entity_id, o = e.alarm && zo(n), d = _e(n) + " " + (o ? o[0] : qr(e)), p = o ? Bn(e.when * 1e3) + (e.cleared ? " · " + o[1] + " since " + Bn(e.cleared * 1e3) : "") : [ki(e), Bn(e.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (o ? " alert" : "") + '"><div class="tfIcon' + (o ? " alert" : "") + '" aria-hidden="true"' + U(n, ue(n)) + '></div><button class="tfName" type="button" data-more="' + oe(n) + '" data-at="' + Math.round(e.when * 1e3) + '" aria-label="' + oe(d + ", " + p + ". More info") + '"><span class="activityRowName">' + oe(d) + '</span><span class="activityRowMeta">' + oe(p) + "</span></button></div>";
  }
  let Ma = null, _s = 0;
  const Hl = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function jo() {
    var n;
    if (Date.now() - _s < 5 * 60 * 1e3) return;
    _s = Date.now();
    const e = [];
    try {
      const o = ((n = await H({ type: "energy/get_prefs" })) == null ? void 0 : n.energy_sources) || [], d = (p) => o.filter((v) => v.type === p).flatMap((v) => p === "grid" ? (v.flow_from || []).map((f) => f.stat_energy_from) : [v.stat_energy_from]).filter(Boolean);
      for (const [p, v, f] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!f.length) continue;
        const b = await Promise.all(f.map((k) => Promise.resolve(H({ type: "recorder/statistic_during_period", statistic_id: k, calendar: { period: "day" }, types: ["change"] })).then((E) => Number(E == null ? void 0 : E.change) || 0, () => 0)));
        e.push({ key: p, name: v, id: f[0], ids: f, value: b.reduce((k, E) => k + E, 0), unit: gt(f[0]).unit_of_measurement || (p === "gas" || p === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Ma = e, sn();
  }
  let Sa = null, Mi = [];
  function er() {
    var v;
    const e = Mi = Ma != null && Ma.length ? Ma : Hl.map(([f, b, k, E]) => {
      const B = "sensor.made_up_energy_" + f;
      return x[B] = { entity_id: B, state: String(k), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: b + " today", unit_of_measurement: E, state_class: "total_increasing" } }, { key: f, name: b, id: B, value: k, unit: E };
    });
    Ce.clear(), e.some((f) => f.id === Sa) || (Sa = e[0].id);
    const n = e.map((f) => {
      const b = Number(f.value).toLocaleString(void 0, { maximumFractionDigits: f.value < 10 ? 2 : 1 }) + " " + f.unit, k = uh[f.key], E = f.id === Sa;
      return Ce.set(f.id, { name: f.name, text: b, icon: k }), '<div class="activityRow tap' + (E ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + oe(f.id) + '" aria-pressed="' + E + '" aria-label="' + oe(f.name + ", " + b) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + U("", k, f.name) + '></div><div><div class="activityRowName">' + oe(f.name) + '</div><div class="activityRowMeta">' + oe(b) + "</div></div></div>";
    }), o = e.find((f) => f.id === Sa), d = (((v = Et().opts.energy) == null ? void 0 : v.graph) || "above") === "below", p = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + oe(o.id) + '" role="img" aria-label="' + oe(o.name) + ', last 24 hours"></svg></div>';
    return De("dash:energy", 0, "Energy today", n, p, Hr().some((f) => f.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function Es(e) {
    const n = T.querySelector(".tfDash-energy"), o = n == null ? void 0 : n.querySelector(".tfDashGraph svg");
    !o || e === Sa || (Sa = e, n.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const p = d.dataset.energyPick === e;
      d.classList.toggle("picked", p), d.setAttribute("aria-pressed", String(p));
    }), o.dataset.graph = e, o.dataset.drawn = "", hn.set("dash:energy", er()), Lo(!0));
  }
  const tr = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, nr = /* @__PURE__ */ new Map();
  async function ar(e) {
    const n = /* @__PURE__ */ new Date(), o = new Date(n).setHours(0, 0, 0, 0), d = n.getHours(), p = n.getMinutes() / 60, v = Array.from({ length: 24 }, (b, k) => k <= d ? 0 : null);
    if (!e.ids) {
      const b = tr[e.key] || tr.electricity, k = b.map((B, N) => N < d ? B : N === d ? B * p : 0), E = k.reduce((B, N) => B + N, 0) || 1;
      return v.map((B, N) => B == null ? null : e.value * k[N] / E);
    }
    const f = nr.get(e.id);
    if (f && f.day === o && Date.now() - f.at < 5 * 60 * 1e3) return f.hours;
    try {
      const b = await H({ type: "recorder/statistics_during_period", start_time: new Date(o).toISOString(), end_time: n.toISOString(), statistic_ids: e.ids, period: "hour", types: ["change"] });
      e.ids.forEach((B) => ((b == null ? void 0 : b[B]) || []).forEach((N) => {
        const Z = typeof N.start == "number" ? N.start : Date.parse(N.start), he = new Date(Z).getHours();
        Z >= o && he < d && (v[he] += Number(N.change) || 0);
      }));
      const k = new Date(n).setMinutes(0, 0, 0), E = await Promise.all(e.ids.map((B) => Promise.resolve(H({ type: "recorder/statistic_during_period", statistic_id: B, fixed_period: { start_time: new Date(k).toISOString(), end_time: n.toISOString() }, types: ["change"] })).then((N) => Number(N == null ? void 0 : N.change) || 0, () => 0)));
      v[d] = E.reduce((B, N) => B + N, 0);
    } catch {
    }
    return nr.set(e.id, { at: Date.now(), day: o, hours: v }), v;
  }
  async function Ds(e, n) {
    const o = await ar(n);
    if (!e.isConnected) return;
    const d = Math.max(120, e.clientWidth || 260), p = Math.max(60, e.clientHeight || 130), v = 18, f = p - 18, b = d / 24, k = b * 0.72, E = (/* @__PURE__ */ new Date()).getHours(), B = o.map((ve) => ve ?? 0), N = Math.max(0, ...B), Z = (ve) => f - (N > 0 ? ve / N * (f - v) : 0), he = (ve) => ve.toLocaleString(void 0, { maximumFractionDigits: ve < 10 ? 2 : 1 }) + " " + n.unit, Te = (ve) => String(ve).padStart(2, "0") + ":00", ee = N > 0 ? B.indexOf(N) : -1;
    e.setAttribute("viewBox", "0 0 " + d + " " + p), e.setAttribute("aria-label", n.name + " today by the hour: " + he(n.value) + (ee >= 0 ? ", most " + he(N) + " at " + Te(ee) : "")), e.innerHTML = [v, (v + f) / 2, f].map((ve) => '<line x1="0" x2="' + d + '" y1="' + ve + '" y2="' + ve + '" stroke="var(--line)" stroke-width="1"/>').join("") + o.map((ve, L) => ve > 0 ? '<rect x="' + (L * b + (b - k) / 2).toFixed(1) + '" y="' + Z(ve).toFixed(1) + '" width="' + k.toFixed(1) + '" height="' + (f - Z(ve)).toFixed(1) + '" rx="2" fill="' + (L === E ? "var(--primary)" : "var(--text)") + '"' + (L === E ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((ve) => '<text x="' + (ve * b).toFixed(1) + '" y="' + (p - 3) + '">' + String(ve).padStart(2, "0") + "</text>").join("") + (ee >= 0 ? '<text x="0" y="11">Most: ' + oe(he(N)) + " at " + Te(ee) + "</text>" : "");
  }
  function Fl(e) {
    var n;
    (n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches || e.querySelectorAll("rect").forEach((o, d) => o.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: d * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Tn(e) {
    var p;
    if ((p = window.matchMedia) != null && p.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [n, o] = e.querySelectorAll("path");
    if (!(o != null && o.getTotalLength)) return;
    const d = o.getTotalLength();
    o.animate([{ strokeDasharray: d, strokeDashoffset: d }, { strokeDasharray: d, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), n == null || n.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let Ka = null, xo = 0;
  const Wr = (e) => !e.startsWith("light.") || ph.includes((yt.get(e) || "").toLowerCase()), zr = () => Math.max(2, ra((T == null ? void 0 : T.clientWidth) || 0).n), Ol = (e) => {
    const n = mi(e), o = n.sections.findIndex(Boolean);
    return o < 0 ? [] : [n.parts[o]];
  };
  function Rs(e) {
    const n = Et().tiles;
    if (n) return n.filter((d) => x[d]);
    if (!Ka) {
      const d = (p) => {
        var v;
        return (((v = x[p]) == null ? void 0 : v.state) === "on" ? 1e6 : 0) + (tt[p] || 0);
      };
      Ka = {
        lights: Je.rooms.flatMap((p) => p.lights).filter((p) => {
          var v;
          return Wr(p) && ((v = x[p]) == null ? void 0 : v.state) !== "unavailable";
        }).sort((p, v) => d(v) - d(p) || _e(p).localeCompare(_e(v))),
        climates: Je.rooms.flatMap((p) => p.actions.filter((v) => v.startsWith("climate.")))
      };
    }
    const o = Ka.climates.filter((d) => x[d]).slice(0, e > 3 ? 2 : 1);
    return [...Ka.lights.filter((d) => x[d]).slice(0, Math.max(0, e - o.length)), ...o];
  }
  const Si = (e, n, o, d) => (p) => '<section class="card tfCard tfDashCard ' + e + '" data-tf data-k="' + n + '" aria-label="' + o + '">' + (d ? '<div class="activityHeader">' + (n === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + o + "</button>" : '<div class="activityTitle">' + o + "</div>") + "</div>" : "") + '<div class="activityRows">' + p + "</div></section>";
  function Ns(e, n) {
    var v, f;
    e.dash = !0, e.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + oe(((f = (v = i()) == null ? void 0 : v.config) == null ? void 0 : f.location_name) || "Home") + "</h1>" }), n.length && e.push({ key: "sums", wrap: (b) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Si("tfDash-bar", "sums-bar", "Summaries", !1)(b).replace(" data-tf", "") + "</div>", tiles: n.map((b) => ({ key: "sum:" + b.key, html: Fr(b) })) }), fa.length && e.push({ key: "areas", html: Ss(0) });
    const o = Ya();
    o.length && e.push({ key: "favs", wrap: Si("tfDash-favs", "favs", "Favourites", !0), tiles: o.map((b) => ({ key: "fav:" + b, html: Ir(b, { area: !0 }) })) });
    const d = Qi();
    e.push({ key: "dash:act", html: De("dash:act", 0, "Activity", d.length ? d.map(ka) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), e.push({ key: "dash:energy", html: er() });
    const p = zr();
    return xo = p, Rs(p >= 3 ? p : p * 2).forEach((b) => e.push({
      key: "dash:tile:" + b,
      wrap: (k) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + oe(b) + '">' + k + "</div>",
      tiles: [{ key: b, html: Pa(b, !1, Ol(b)) }]
    })), yi(), jo(), e;
  }
  const $a = 252, Yt = 16, Oa = 200, Ci = Math.round($a * 1.25), Vo = 60, yo = Vo + Yt, ko = 5, Bs = 3, Ps = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average" }, Mo = ["wx", "favs", "act", "energy", "avg"], ql = { wx: ko, areas: ko, favs: ko, act: ko, energy: 4, avg: 4 }, Is = 3, or = 94, Xa = (e) => {
    var n;
    return !!((n = Et().opts[e]) != null && n.tall);
  }, Ln = (e) => Ps[e] || _e(e), qa = 409, Go = 128;
  let tn = !1, St = null, An = null, Ca = !1, Ja = /* @__PURE__ */ new Map(), ir = 0, ha = 0;
  const Vn = ["title", "sums"], ra = (e) => {
    const n = Math.max(1, Math.floor((e + Yt) / (Oa + Yt)));
    return { n, w: Math.max(1, Math.min(Ci, Math.floor((e - (n - 1) * Yt) / n))) };
  }, Et = () => ({ cells: {}, spans: {}, hidden: [], opts: {}, ...z.dash || {} });
  function Wa(e) {
    z = { ...z, dash: e }, Rn();
  }
  function Ti() {
    const e = (n) => T.querySelector(n);
    return [
      ["title", e(".tfDashTitle"), "full"],
      ["sums", e(".tfDashBarRow"), "full"],
      ["wx", mn.wx, 2],
      ["areas", e(".tfAreas"), "areas"],
      ["favs", e(".tfDash-favs"), 2],
      ["act", e(".tfDash-act"), 2],
      ["energy", e(".tfDash-energy"), 2],
      ["avg", mn.avg, 2],
      ...[...T.querySelectorAll(".tfDashTiles > [data-k]")].map((n) => [n.dataset.k, n, 1, !0])
    ].filter(([, n]) => n == null ? void 0 : n.isConnected).map(([n, o, d, p = !1]) => ({ key: n, el: o, span: d, tile: p }));
  }
  const jr = (e, n, o) => e.span === "full" ? n : e.span === "areas" ? Math.min(n, Math.ceil((qa + Math.max(0, fa.length - 1) * (Go + Yt) + Yt) / (o + Yt))) : Math.min(n, Et().spans[e.key] ?? e.span), Vr = (e) => ql[e.key] ?? (e.el.classList.contains("tfDac") ? Xa(e.key) ? ko : Is : null);
  function Hs(e, n, o = null) {
    const d = Et().cells, p = e.every((b) => !d[b.key] || d[b.key].col + b.cols <= n), v = (b) => d[b.key] || { row: 1e9, col: 0 }, f = () => {
      const b = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Map(), E = (ee, ve, L, me) => {
        for (let Ne = ve; Ne < ve + me; Ne++) for (let Qe = ee; Qe < ee + L; Qe++) if (b.has(Qe + "," + Ne)) return !1;
        return !0;
      }, B = (ee, ve, L) => {
        for (let me = L; me < L + ee.rows; me++) for (let Ne = ve; Ne < ve + ee.cols; Ne++) b.add(Ne + "," + me);
        k.set(ee.key, { col: ve, row: L, cols: ee.cols, rows: ee.rows });
      }, N = (ee, ve, L) => {
        for (ve = Math.max(0, Math.min(n - ee.cols, ve)), L = Math.max(0, L); !E(ve, L, ee.cols, ee.rows); ) L++;
        B(ee, ve, L);
      }, Z = (ee) => {
        for (let ve = 0; ; ve++) for (let L = 0; L <= n - ee.cols; L++) if (E(L, ve, ee.cols, ee.rows)) {
          B(ee, L, ve);
          return;
        }
      };
      o && N(o, St.col, St.row);
      const he = e.filter((ee) => ee !== o), Te = (ee, ve) => v(ee).row - v(ve).row || v(ee).col - v(ve).col;
      return p ? (he.filter((ee) => d[ee.key]).sort(Te).forEach((ee) => N(ee, d[ee.key].col, d[ee.key].row)), he.filter((ee) => !d[ee.key]).forEach(Z), k) : ([...he].sort(Te).forEach(Z), k);
    };
    for (let b = 0; ; b++) {
      const k = f();
      if (b === 3) return k;
      const E = e.filter((N) => N.tile && !Xa(N.key)).map((N) => ({ it: N, p: k.get(N.key) })).sort((N, Z) => N.p.row - Z.p.row || N.p.col - Z.p.col);
      let B = !1;
      for (let N = 0, Z; N < E.length; N = Z) {
        for (Z = N + 1; Z < E.length && E[Z].p.row === E[N].p.row && E[Z].p.col === E[Z - 1].p.col + 1; Z++) ;
        const he = E.slice(N, Z), Te = Math.max(...he.map((ee) => ee.it.rows));
        he.forEach((ee) => {
          ee.it.rows < Te && (ee.it.rows = Te, B = !0);
        });
      }
      if (!B) return k;
    }
  }
  function Li() {
    const e = Et(), n = new Set(e.hidden), o = Ti().filter((f) => !Vn.includes(f.key));
    let d = Ja;
    if (!d.size) {
      const f = e.pegs || 4, b = o.filter((k) => !n.has(k.key));
      b.forEach((k) => {
        k.cols = jr(k, f, $a), k.rows = Vr(k) ?? 2;
      }), d = Hs(b, f);
    }
    const p = (f) => !n.has(f.key) && d.get(f.key) || { row: 1e9, col: 0 };
    o.sort((f, b) => p(f).row - p(b).row || p(f).col - p(b).col);
    const v = (e.phone || []).map((f) => o.find((b) => b.key === f && !n.has(f))).filter(Boolean);
    return [...v, ...o.filter((f) => !v.includes(f))];
  }
  const Ai = () => {
    const e = Li();
    e.forEach((n, o) => n.el.style.setProperty("--o", String(3 + o))), Ta([...Ti().filter((n) => Vn.includes(n.key)), ...e].map((n) => n.el));
  };
  function Ta(e) {
    if (St) return;
    const n = a.activeElement;
    let o = null;
    for (const d of new Set(e.map((p) => {
      for (; p && p.parentElement !== T; ) p = p.parentElement;
      return p;
    }).filter(Boolean))) {
      const p = o ? o.nextSibling : T.querySelector(":scope > [data-tf]");
      if (d !== p)
        try {
          T.moveBefore ? T.moveBefore(d, p) : T.insertBefore(d, p);
        } catch {
          T.insertBefore(d, p);
        }
      o = d;
    }
    n && n !== a.activeElement && n.isConnected && n.focus({ preventScroll: !0 });
  }
  const Qa = (e, n) => Wa({ ...e, cells: n, pegs: ra(T.clientWidth).n });
  function wn() {
    var ve;
    if (!w || !T) return;
    const e = T.clientWidth, { n, w: o } = ra(e), d = m.classList.contains("tfDash") && e >= 2 * $a + Yt;
    m.classList.toggle("tfBoard", d), m.classList.toggle("tfEditing", d && tn);
    const p = c("dashEditNav");
    p && (p.hidden = !d, p.classList.toggle("active", tn), p.setAttribute("aria-pressed", String(tn)), p.setAttribute("aria-label", tn ? "Done editing" : "Edit the dashboard"), p.title = tn ? "Done" : "Edit", p.innerHTML = tn ? oh : qc);
    const v = d ? Ti() : [];
    if (!d) {
      T.style.height = "", T.querySelectorAll(".tfBoardItem").forEach((L) => {
        L.classList.remove("tfBoardItem", "tfBoardHidden"), L.style.left = L.style.top = L.style.width = L.style.height = "";
      }), (ve = T.querySelector(".tfDash-act > .activityRows")) == null || ve.style.removeProperty("max-height"), rr(!1), m.classList.contains("tfDash") && Ai(), rn();
      return;
    }
    T.style.setProperty("--peg-w", o + "px");
    const f = new Set(Et().hidden), b = o + Yt;
    St != null && St.fromTray && f.delete(St.key), v.forEach((L) => L.el.classList.toggle("tfBoardHidden", f.has(L.key)));
    const k = v.filter((L) => !f.has(L.key) && getComputedStyle(L.el).display !== "none");
    let E = 0;
    k.filter((L) => Vn.includes(L.key)).forEach((L) => {
      L.el.classList.add("tfBoardItem"), Object.assign(L.el.style, { width: e + "px", height: "", left: "0px", top: E + "px" });
      const me = L.key === "sums" && L.el.querySelector(".tfDash-bar"), Ne = me ? me.querySelectorAll(".activityRow").length : 0;
      me && (me.style.maxWidth = "none");
      for (let Qe = 1; me && Qe <= Ne && (me.style.setProperty("--bar-cols", String(Math.ceil(Ne / Qe))), !(me.offsetWidth <= e)); Qe++)
        ;
      me && (me.style.maxWidth = ""), E += L.el.offsetHeight + Yt;
    }), ha = E;
    const B = k.filter((L) => !Vn.includes(L.key));
    B.forEach((L) => {
      L.cols = jr(L, n, o), L.el.classList.add("tfBoardItem"), L.el.style.width = (L.cols === n ? e : L.cols * o + (L.cols - 1) * Yt) + "px", L.el.style.height = "", L.rows = Vr(L) ?? Math.max(1, Math.ceil((L.el.offsetHeight + Yt - 6) / yo));
    });
    const N = St && B.find((L) => L.key === St.key), Z = Hs(B, n, N);
    Z.forEach((L) => Object.assign(L, { x: L.cols === n ? 0 : L.col * b, y: ha + L.row * yo, w: L.cols === n ? e : L.cols * o + (L.cols - 1) * Yt, h: L.rows * yo - Yt })), B.forEach((L) => {
      const me = Z.get(L.key);
      L.el.style.height = me.h + "px", L.el.classList.contains("tfDac") && L.el.style.setProperty("--tf-dac-pad", me.h - or + "px"), !(L === N && !St.fromTray) && (L.el.style.left = me.x + "px", L.el.style.top = me.y + "px");
    }), Ja = Z, Ta([...k.filter((L) => Vn.includes(L.key)), ...B.slice().sort((L, me) => Z.get(L.key).row - Z.get(me.key).row || Z.get(L.key).col - Z.get(me.key).col)].map((L) => L.el));
    const he = Z.get("act"), Te = he && T.querySelector(".tfDash-act > .activityRows");
    Te && (Te.style.maxHeight = Math.max(Vo, Math.floor((he.h - Te.offsetTop - 10) / Vo) * Vo) + "px"), ir = Math.max(0, ...[...Z.values()].map((L) => L.row + L.rows));
    let ee = ha + ir * yo - Yt;
    ee = rr(tn, B, Z, ee, n, o), T.style.height = ee + "px", requestAnimationFrame(() => m.classList.add("tfBoardReady")), v.forEach((L) => So.observe(L.el)), Lo(), rn();
  }
  const _i = () => {
    Ca || (Ca = !0, requestAnimationFrame(() => {
      Ca = !1, wn();
    }));
  }, So = new ResizeObserver(() => {
    St || _i();
  });
  function rr(e, n = [], o = /* @__PURE__ */ new Map(), d = 0, p = 1, v = $a) {
    T.querySelectorAll(".tfEditChips").forEach((B) => {
      (!e || !B.closest(".tfBoardItem")) && B.remove();
    }), T.querySelectorAll(".tfFavHides").forEach((B) => B.remove()), T.querySelectorAll(".tfBoardItem").forEach((B) => [...B.children].forEach((N) => {
      N.classList.contains("tfEditChips") || N.toggleAttribute("inert", e);
    }));
    let f = T.querySelector(".tfBoardCells"), b = T.querySelector(".tfBoardLand");
    if (!e)
      return f == null || f.remove(), b == null || b.remove(), sa(), d;
    const k = ir + Bs;
    if (f || (f = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), f.setAttribute("aria-hidden", "true"), T.prepend(f)), f.style.top = ha + "px", f.dataset.size !== p + "x" + k + "x" + v && (f.dataset.size = p + "x" + k + "x" + v, f.style.gridTemplateColumns = "repeat(" + p + "," + v + "px)", f.innerHTML = "<i></i>".repeat(p * k)), d = Math.max(d, ha + k * yo - Yt), n.forEach((B) => {
      const N = B.el;
      !N || N.querySelector(":scope > .tfEditChips") || N.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + xd + '</span><button class="tfEditChip" type="button" data-board-more="' + oe(B.key) + '" aria-label="' + oe(Ln(B.key)) + ' options" aria-haspopup="menu">' + nh + "</button></div>");
    }), St && o.has(St.key)) {
      b || (b = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), T.appendChild(b));
      const B = o.get(St.key);
      Object.assign(b.style, { left: B.x + "px", top: B.y + "px", width: B.w + "px", height: B.h + "px" });
    } else b == null || b.remove();
    const E = T.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (E) {
      const B = E.getBoundingClientRect();
      E.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...E.querySelectorAll('[data-k^="fav:"]')].map((N) => {
        const Z = N.getBoundingClientRect(), he = N.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + oe(he) + '" aria-label="Hide ' + oe(_e(he)) + ' from the dashboard" style="left:' + Math.round(Z.right - B.left - 42) + "px;top:" + Math.round(Z.top - B.top + (Z.height - 32) / 2) + 'px">' + Hc + "</button>";
      }).join("") + "</div>");
    }
    return d;
  }
  let Gr = "";
  function Ur(e) {
    tn = e, e || (St = null, In = Hn = !1, sa()), wn(), e ? Gr = JSON.stringify(z) : Gr && JSON.stringify(z) !== Gr && la("Changes saved");
  }
  function Wl(e, n) {
    var Z, he;
    sa();
    const o = Ja.get(e), { n: d } = ra(T.clientWidth), p = Et(), v = p.spans[e] ?? 2;
    if (!o) return;
    const f = o.cols >= d, b = (Te, ee, ve) => '<button type="button" role="menuitem" data-board-act="' + Te + '"' + (ve ? " disabled" : "") + ">" + ee + "</button>", k = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    k.setAttribute("role", "menu"), k.setAttribute("aria-label", Ln(e) + " options");
    const E = T.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]'), B = E == null ? void 0 : E.classList.contains("tfDac");
    k.innerHTML = (Mo.includes(e) ? b("size", v === 1 ? "Card size" : "Tile size") : "") + (B ? b("tall", Xa(e) ? "Make shorter" : "Make taller") : "") + (e === "energy" ? b("graph", (((Z = p.opts.energy) == null ? void 0 : Z.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + b("left", "Move left", f || o.col === 0) + b("right", "Move right", f || o.col + o.cols >= d) + b("up", "Move up", o.row <= 0) + b("down", "Move down") + (E ? b("remove", "Remove") : b("hide", "Hide")), T.appendChild(k);
    const N = Math.min(o.x + o.w - k.offsetWidth, T.clientWidth - k.offsetWidth);
    Object.assign(k.style, { left: Math.max(0, N) + "px", top: o.y + 28 + "px" }), An = { key: e, menu: k, opener: n }, (he = k.querySelector("button:not([disabled])")) == null || he.focus();
  }
  function sa(e) {
    if (!An) return;
    const { menu: n, opener: o } = An;
    An = null, n.remove(), e && (o == null || o.focus());
  }
  const nn = () => Object.fromEntries([...Ja].map(([e, n]) => [e, { col: n.col, row: n.row }]));
  function Gn(e, n) {
    var f, b;
    if (n === "remove") {
      sa(), lr(e);
      return;
    }
    const o = z, d = Et(), p = nn(), v = p[e] || { col: 0, row: 0 };
    n === "size" && (d.spans = { ...d.spans, [e]: (d.spans[e] ?? 2) === 1 ? 2 : 1 }), n === "tall" && (d.opts = { ...d.opts, [e]: { ...d.opts[e] || {}, tall: !Xa(e) } }), n === "graph" && (d.opts = { ...d.opts, energy: { ...d.opts.energy || {}, graph: (((f = d.opts.energy) == null ? void 0 : f.graph) || "above") === "above" ? "below" : "above" } }), n === "left" && (p[e] = { ...v, col: v.col - 1 }), n === "right" && (p[e] = { ...v, col: v.col + 1 }), n === "up" && (p[e] = { ...v, row: v.row - 1 }), n === "down" && (p[e] = { ...v, row: v.row + 1 }), n === "hide" && (d.hidden = [.../* @__PURE__ */ new Set([...d.hidden, e])]), ["left", "right", "up", "down"].includes(n) && (St = { key: e, col: p[e].col, row: p[e].row }), Qa(d, p), St && (wn(), St = null, Qa(Et(), nn())), sa(), n === "graph" && (hn.delete("dash:energy"), sn()), wn(), n !== "hide" ? (b = T.querySelector('[data-board-more="' + CSS.escape(e) + '"]')) == null || b.focus() : la(Ln(e) + " hidden", Di(o));
  }
  function Yr(e) {
    const n = Et();
    Wa({ ...n, hidden: n.hidden.filter((o) => o !== e) }), wn(), la(Ln(e) + " put back");
  }
  const Zr = () => Et().tiles || [...T.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => e.dataset.k).filter((e) => !Et().hidden.includes(e));
  function sr(e, n) {
    const o = Et();
    Qa({ ...o, tiles: e, hidden: o.hidden.filter((d) => !d.includes(".")) }, n), sn(), rn();
  }
  const Kr = (e) => {
    sr([...Zr().filter((n) => n !== e), e], nn()), la(_e(e) + " added"), Zo(e);
  }, lr = (e) => {
    const n = z, o = nn();
    delete o[e], sr(Zr().filter((d) => d !== e), o), la(_e(e) + " removed", Di(n));
  };
  let dr = 0;
  function la(e, n = null) {
    var f;
    const o = c("toast");
    if (!o) return;
    if (o.replaceChildren(Object.assign(document.createElement("span"), { textContent: e })), n) {
      const b = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      b.addEventListener("click", () => {
        clearTimeout(dr), o.classList.remove("show", "withAction"), n();
      }), o.appendChild(b);
    }
    const d = m.getBoundingClientRect(), p = (f = a.querySelector(".bottomNav")) == null ? void 0 : f.getBoundingClientRect(), v = Dt.classList.contains("open") && !ga ? Math.min(d.right, Dt.getBoundingClientRect().left) : d.right;
    o.style.left = (d.left + v) / 2 + "px", o.style.bottom = (p != null && p.height ? window.innerHeight - p.top + 12 : 26) + "px", o.classList.add("tfToast", "show"), o.classList.toggle("withAction", !!n), clearTimeout(dr), dr = setTimeout(() => o.classList.remove("show", "withAction"), n ? 5e3 : 2200);
  }
  const zl = 700, jl = 1e3, _n = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  _n.setAttribute("role", "tooltip"), _n.setAttribute("aria-hidden", "true"), m.appendChild(_n);
  let La = null, Pn = 0, eo = 0, Uo = -1 / 0;
  const $r = (e) => {
    if (e.nodeType !== 1) return !1;
    const n = getComputedStyle(e);
    return n.textOverflow === "ellipsis" && e.scrollWidth > e.clientWidth + 1 || n.webkitLineClamp !== "none" && e.scrollHeight > e.clientHeight + 1;
  }, Fs = (e) => {
    for (let n = e; n && n !== m; n = n.parentElement) if ($r(n)) return n;
    return null;
  };
  function Os(e, n) {
    clearTimeout(Pn), clearTimeout(eo);
    const o = () => {
      if (!e.isConnected) return;
      La = e, _n.textContent = n, _n.hidden = !1;
      const d = e.getBoundingClientRect(), p = _n.getBoundingClientRect(), v = d.top - p.height - 8 >= 8 ? d.top - p.height - 8 : d.bottom + 8;
      _n.style.left = Math.max(8, Math.min(window.innerWidth - p.width - 8, d.left + d.width / 2 - p.width / 2)) + "px", _n.style.top = v + "px";
    };
    !_n.hidden || performance.now() - Uo < jl ? o() : Pn = setTimeout(o, zl);
  }
  function Yo() {
    clearTimeout(Pn), clearTimeout(eo), _n.hidden || (Uo = performance.now()), _n.hidden = !0, La = null;
  }
  a.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    if (_n.contains(e.target)) {
      clearTimeout(eo);
      return;
    }
    const n = Fs(e.target);
    if (n && Lt.names === "scroll" && n.matches(cr)) {
      ma(n);
      return;
    }
    if (n) {
      n !== La ? Os(n, n.textContent.trim()) : clearTimeout(eo);
      return;
    }
    clearTimeout(Pn), clearTimeout(eo), eo = setTimeout(Yo, 120);
  }), a.addEventListener("focusin", (e) => {
    var d;
    const n = e.target;
    if (!((d = n.matches) != null && d.call(n, ":focus-visible"))) return;
    let o = [n, ...n.querySelectorAll("*")].filter($r);
    Lt.names === "scroll" && (o.filter((p) => p.matches(cr)).forEach(ma), o = o.filter((p) => !p.matches(cr))), o.length && Os(n, o.map((p) => p.textContent.trim()).join(" · "));
  }), a.addEventListener("focusout", (e) => {
    e.target === La && Yo();
  }), a.addEventListener("keydown", (e) => {
    e.key === "Escape" && !_n.hidden && (e.stopPropagation(), Yo());
  }, !0), window.addEventListener("scroll", () => {
    (!_n.hidden || Pn) && Yo();
  }, { capture: !0, passive: !0 });
  const cr = ".activityRowName,.activityRowMeta", Ei = /* @__PURE__ */ new WeakSet();
  function ma(e) {
    var v;
    if (Lt.names !== "scroll" || Ei.has(e) || (v = window.matchMedia) != null && v.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const n = e.scrollWidth - e.clientWidth;
    if (n < 2) return;
    const o = n / 30 * 1e3, d = 600 + o + 1e3 + o;
    Ei.add(e), e.style.textOverflow = "clip";
    const p = e.animate([
      { textIndent: "0px", offset: 0 },
      { textIndent: "0px", offset: 600 / d, easing: "ease-in-out" },
      { textIndent: -n + "px", offset: (600 + o) / d },
      { textIndent: -n + "px", offset: (1600 + o) / d, easing: "ease-in-out" },
      { textIndent: "0px", offset: 1 }
    ], { duration: d });
    p.onfinish = p.oncancel = () => {
      e.style.textOverflow = "", Ei.delete(e);
    };
  }
  const qs = new IntersectionObserver((e) => e.forEach((n) => {
    n.isIntersecting && (qs.unobserve(n.target), ma(n.target));
  }), { threshold: 1 });
  let Xr = !1;
  new MutationObserver(() => {
    Xr || Lt.names !== "scroll" || (Xr = !0, setTimeout(() => {
      Xr = !1, a.querySelectorAll(cr).forEach((e) => {
        !e.dataset.glided && $r(e) && (e.dataset.glided = "1", qs.observe(e));
      });
    }, 300));
  }).observe(a, { childList: !0, subtree: !0 });
  const Di = (e) => () => {
    z = e, Rn(), sn(), wn(), rn();
  };
  function Zo(e) {
    const n = () => T.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]');
    setTimeout(() => {
      var f;
      const o = n();
      if (!o) return;
      const d = (f = window.matchMedia) == null ? void 0 : f.call(window, "(prefers-reduced-motion: reduce)").matches, p = o.getBoundingClientRect();
      (p.top < 0 || p.bottom > window.innerHeight) && o.scrollIntoView({ behavior: d ? "auto" : "smooth", block: "center" });
      const v = (b) => "0 0 0 4px color-mix(in srgb,var(--primary) " + b + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + b + "%,transparent)";
      o.animate([{ boxShadow: v(55) }, { boxShadow: v(0) }], { duration: 1500, easing: d ? "steps(1, end)" : "ease-out" });
    }, Vl(e) ? 260 : 0);
  }
  function Vl(e) {
    const n = Ja.get(e);
    if (!n || !Dt.classList.contains("open") || ga) return !1;
    const { n: o, w: d } = ra(T.clientWidth), p = Dt.getBoundingClientRect().left - T.getBoundingClientRect().left, v = (k) => k * (d + Yt) + n.cols * d + (n.cols - 1) * Yt <= p;
    if (v(n.col)) return !1;
    const f = /* @__PURE__ */ new Set();
    Ja.forEach((k, E) => {
      if (E !== e) for (let B = k.row; B < k.row + k.rows; B++) for (let N = k.col; N < k.col + k.cols; N++) f.add(N + "," + B);
    });
    const b = (k, E) => {
      for (let B = E; B < E + n.rows; B++) for (let N = k; N < k + n.cols; N++) if (f.has(N + "," + B)) return !1;
      return !0;
    };
    for (let k = 0; k <= ir; k++) for (let E = 0; E + n.cols <= o && v(E); E++)
      if (b(E, k))
        return Qa(Et(), { ...nn(), [e]: { col: E, row: k } }), wn(), !0;
    return !1;
  }
  const Ko = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Dt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Dt.setAttribute("aria-label", "Edit the dashboard"), Dt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', m.appendChild(Dt);
  let ga = !1, In = !1, Hn = !1, ft = null, Fn = !1;
  const $o = {}, to = (e, n) => {
    if ($o[e] === n) return;
    $o[e] = n;
    const o = Dt.querySelector('[data-tray="' + e + '"]');
    o.innerHTML = n, $t(o);
  }, xn = (e, n) => '<span class="tfTrayName"><span class="activityRowName">' + oe(_e(e)) + '</span><span class="activityRowMeta">' + oe(n) + "</span></span>", Jr = (e, n, o) => '<li class="tfTrayFav' + (n ? " off" : "") + '" data-tray-fav="' + oe(e) + '"><span class="tfTrayGrip" aria-hidden="true">' + xd + '</span><span class="tfIcon"' + U(e, ue(e)) + "></span>" + xn(e, n ? "Hidden" + (yt.get(e) ? " · " + yt.get(e) : "") : yt.get(e) || Ft(e)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + oe(e) + '" aria-pressed="' + !n + '" aria-label="' + (n ? "Show " : "Hide ") + oe(_e(e)) + ' on the dashboard">' + (n ? Hc : ah) + "</button>" + (o ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + oe(e) + '" aria-label="Remove ' + oe(_e(e)) + ' from favourites">' + Fc + "</button>" : "<span></span>") + "</li>";
  function Qr(e, n, o, d) {
    const p = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(x).filter((f) => n(f) && !o.has(f) && x[f].state !== "unavailable").filter((f) => {
      const b = (_e(f) + " " + (yt.get(f) || "") + " " + f).toLowerCase();
      return p.every((k) => b.includes(k));
    }).sort((f, b) => (yt.get(f) || "~").localeCompare(yt.get(b) || "~") || _e(f).localeCompare(_e(b))).slice(0, 40).map((f) => '<li><button class="tfTrayPickItem" type="button" ' + d + '="' + oe(f) + '"><span class="tfIcon"' + U(f, ue(f)) + "></span>" + xn(f, yt.get(f) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function rn() {
    const e = tn && m.classList.contains("tfBoard");
    if (Dt.classList.toggle("open", e), Dt.classList.toggle("tucked", e && ga), Dt.toggleAttribute("inert", !e), e || (Fn = !1), Vs(), !e) return;
    const n = Dt.querySelector("[data-tray-tuck]");
    n.innerHTML = ga ? Tc : Oc, n.setAttribute("aria-expanded", String(!ga)), n.setAttribute("aria-label", ga ? "Show the edit tray" : "Tuck the edit tray away");
    const o = Et().hidden.filter((f) => Ti().some((b) => b.key === f));
    to("cards", '<div class="sectionLabel">Hidden cards</div>' + (o.length ? '<div class="tfTrayCards">' + o.map((f) => '<button class="tfTrayCard" type="button" data-tray-card="' + oe(f) + '" aria-label="' + oe(Ln(f)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + xd + "</span>" + oe(Ln(f)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide wait here.</p>')), to("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (Et().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Fn + '">' + (Fn ? "Hide the phone" : "Show the phone") + "</button>");
    const d = new Set(z.favHidden || []), p = vn(), v = [...p, ...[...d].filter((f) => !p.includes(f) && x[f])];
    to("favs", v.map((f) => Jr(f, d.has(f), p.includes(f))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Dt.querySelector('[data-pick="tiles"]').hidden = !Hn, Dt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(Hn)), Hn && to("tilepick", Qr(Dt.querySelector("[data-tile-search]").value, (f) => yl.includes(f.split(".")[0]), new Set(Zr()), "data-tile-pick")), Dt.querySelector('[data-pick="favs"]').hidden = !In, Dt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(In)), In && to("pick", Qr(Dt.querySelector("[data-fav-search]").value, (f) => Ko.test(f), new Set(vn()), "data-fav-pick")), to("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (bo() ? " on" : "") + '" type="button" role="switch" aria-checked="' + bo() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Co = (e) => {
    z = { ...z, ...e }, Rn(), sn(), rn();
  };
  function Ws(e, n) {
    const o = z, d = new Set(z.favHidden || []);
    n ? d.delete(e) : d.add(e), Co({ favHidden: [...d] }), n ? la(_e(e) + " put back") : la(_e(e) + " hidden", Di(o));
  }
  const Gl = (e) => {
    const n = z;
    Co({ favourites: vn().filter((o) => o !== e), favHidden: (z.favHidden || []).filter((o) => o !== e) }), la(_e(e) + " removed from favourites", Di(n));
  }, Ul = (e) => {
    Co({ favourites: [...vn().filter((n) => n !== e), e], favHidden: (z.favHidden || []).filter((n) => n !== e) }), la(_e(e) + " added to favourites");
  };
  Dt.addEventListener("click", (e) => {
    var o;
    const n = e.target.closest("button");
    n && (n.hasAttribute("data-tray-done") ? Ur(!1) : n.hasAttribute("data-tray-tuck") ? (ga = !ga, rn()) : n.hasAttribute("data-phone-toggle") ? (Fn = !Fn, rn(), Fn && ((o = En.querySelector("[data-phone-key]")) == null || o.focus({ preventScroll: !0 }))) : n.dataset.trayCard ? e.detail === 0 && (Yr(n.dataset.trayCard), rn()) : n.dataset.favEye ? Ws(n.dataset.favEye, n.getAttribute("aria-pressed") !== "true") : n.dataset.favRemove ? Gl(n.dataset.favRemove) : n.hasAttribute("data-fav-add") ? (In = !In, rn(), In && Dt.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : n.dataset.favPick ? Ul(n.dataset.favPick) : n.hasAttribute("data-tile-add") ? (Hn = !Hn, rn(), Hn && Dt.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : n.dataset.tilePick ? Kr(n.dataset.tilePick) : n.hasAttribute("data-fav-suggest") && Co({ suggest: !bo() }));
  }), Dt.addEventListener("input", (e) => {
    e.target.matches("[data-fav-search],[data-tile-search]") && rn();
  }), Dt.addEventListener("keydown", (e) => {
    var o, d;
    const n = !!((d = (o = e.target).closest) != null && d.call(o, '[data-pick="tiles"],[data-tile-add]'));
    e.key !== "Escape" || !(n ? Hn : In) || (e.stopPropagation(), n ? Hn = !1 : In = !1, rn(), Dt.querySelector(n ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function zs(e, n, o, d) {
    e.preventDefault();
    const p = e.clientX, v = e.clientY;
    let f = null, b = 0;
    const k = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), E = (N) => {
      if (!f) {
        if (Math.hypot(N.clientX - p, N.clientY - v) < 4) return;
        f = n.cloneNode(!0), f.classList.add("tfTrayGhost"), f.style.width = n.offsetWidth + "px", m.appendChild(f);
      }
      f.style.transform = "translate(" + (N.clientX - 24) + "px," + (N.clientY - 24) + "px)";
      const Z = !ga && N.clientX >= Dt.getBoundingClientRect().left;
      if (o === "card") {
        const ee = T.getBoundingClientRect(), { w: ve } = ra(T.clientWidth);
        St = !Z && N.clientX >= ee.left && N.clientX <= ee.right && N.clientY >= ee.top + ha ? { key: d, col: Math.max(0, Math.floor((N.clientX - ee.left) / (ve + Yt))), row: Math.max(0, Math.floor((N.clientY - ee.top - ha) / yo)), fromTray: !0 } : null, b || (b = requestAnimationFrame(() => {
          b = 0, wn();
        }));
        return;
      }
      const he = T.querySelector(".tfDash-favs"), Te = he == null ? void 0 : he.getBoundingClientRect();
      if (ft = null, Te && !Z && N.clientX >= Te.left && N.clientX <= Te.right && N.clientY >= Te.top && N.clientY <= Te.bottom) {
        let ee = 1 / 0;
        he.querySelectorAll('[data-k^="fav:"]').forEach((ve, L) => {
          const me = ve.getBoundingClientRect(), Ne = Math.hypot(N.clientX - (me.left + me.width / 2), N.clientY - (me.top + me.height / 2));
          Ne < ee && (ee = Ne, ft = { i: L, r: me, after: N.clientX > me.left + me.width / 2 });
        }), ft || (ft = { i: 0, r: null, after: !1 });
      }
      ft != null && ft.r ? (k.isConnected || m.appendChild(k), Object.assign(k.style, { left: (ft.after ? ft.r.right : ft.r.left) - 2 + "px", top: ft.r.top + 8 + "px", height: ft.r.height - 16 + "px" })) : k.remove();
    }, B = () => {
      if (window.removeEventListener("pointermove", E), window.removeEventListener("pointerup", B), window.removeEventListener("pointercancel", B), cancelAnimationFrame(b), f == null || f.remove(), k.remove(), o === "card") {
        if (!f) Yr(d);
        else if (St != null && St.fromTray) {
          wn();
          const ee = Et(), ve = nn();
          St = null, Qa({ ...ee, hidden: ee.hidden.filter((L) => L !== d) }, ve), la(Ln(d) + " put back");
        }
        St = null, wn(), sn(), rn();
        return;
      }
      if (!ft) return;
      const N = new Set(z.favHidden || []);
      N.delete(d);
      const Z = vn().filter((ee) => ee !== d), he = Z.filter((ee) => !N.has(ee)), Te = he[Math.min(ft.i + (ft.after ? 1 : 0), he.length)];
      Z.splice(Te ? Z.indexOf(Te) : Z.length, 0, d), ft = null, Co({ favourites: Z, favHidden: [...N] }), la(_e(d) + " put back");
    };
    window.addEventListener("pointermove", E), window.addEventListener("pointerup", B), window.addEventListener("pointercancel", B);
  }
  const es = { sums: 201, wx: 286, favs: 363, areas: 323, act: 363, energy: 301, avg: 182 }, Ri = 140, Ni = 252, Yl = 0.8, js = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line" }, En = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  En.setAttribute("aria-label", "Phone order"), En.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Fc + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', m.appendChild(En);
  let ts = "";
  function Vs() {
    var b;
    const e = Fn && tn && m.classList.contains("tfBoard") && !ga;
    if (En.classList.toggle("open", e), En.toggleAttribute("inert", !e), !e) return;
    const n = Li().filter((k) => !Et().hidden.includes(k.key)), o = n.length, d = (k) => Math.round(k * Yl * 10) / 10 + "px", p = (k, E) => {
      const B = k.el.classList.contains("tfDac"), N = k.tile ? B ? Ni : Ri : es[k.key] || Ri;
      return '<button class="tfPhoneBlock' + (k.tile ? " tile" : "") + '" type="button" data-phone-key="' + oe(k.key) + '" style="min-height:' + d(N) + '" aria-label="' + oe(Ln(k.key) + ", " + (E + 1) + " of " + o + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (k.tile ? U(k.key, ue(k.key)) : U(k.key, js[k.key])) + '></span><span class="tfPhoneName">' + oe(Ln(k.key)) + "</span></button>";
    }, v = '<div class="tfPhoneTitle">' + oe(((b = T.querySelector(".tfDashTitle")) == null ? void 0 : b.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + d(es.sums) + '"><span class="tfPhoneName">' + oe(Ln("sums")) + "</span></div>" + n.map(p).join("");
    if (En.querySelector('[data-phone="note"]').innerHTML = Et().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", v === ts) return;
    ts = v;
    const f = En.querySelector('[data-phone="list"]');
    f.innerHTML = v, $t(f);
  }
  function Gs(e, n) {
    var o;
    Wa({ ...Et(), phone: e }), rn(), n && ((o = En.querySelector('[data-phone-key="' + CSS.escape(n) + '"]')) == null || o.focus({ preventScroll: !0 }));
  }
  const no = () => [...En.querySelectorAll("[data-phone-key]")].map((e) => e.dataset.phoneKey);
  function To(e, n) {
    e.preventDefault();
    const o = n.parentElement, d = En.querySelector(".tfPhoneScreen"), p = no().join();
    n.classList.add("moving");
    const v = (b) => {
      const k = d.getBoundingClientRect();
      b.clientY > k.bottom - 40 ? d.scrollTop += 12 : b.clientY < k.top + 40 && (d.scrollTop -= 12);
      const E = [...o.querySelectorAll("[data-phone-key]")].find((Z) => {
        const he = Z.getBoundingClientRect();
        return Z !== n && b.clientX >= he.left && b.clientX <= he.right && b.clientY >= he.top && b.clientY <= he.bottom;
      });
      if (!E) return;
      const B = E.getBoundingClientRect(), N = E.classList.contains("tile") ? b.clientX < B.left + B.width / 2 : b.clientY < B.top + B.height / 2;
      o.insertBefore(n, N ? E : E.nextSibling);
    }, f = () => {
      window.removeEventListener("pointermove", v), window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f), n.classList.remove("moving");
      const b = no();
      ts = "", b.join() !== p ? Gs(b) : Vs();
    };
    window.addEventListener("pointermove", v), window.addEventListener("pointerup", f), window.addEventListener("pointercancel", f);
  }
  En.addEventListener("pointerdown", (e) => {
    const n = e.target.closest("[data-phone-key]");
    n && e.button <= 0 && To(e, n);
  }), En.addEventListener("click", (e) => {
    var o;
    const n = e.target.closest("button");
    if (n != null && n.hasAttribute("data-phone-close"))
      Fn = !1, rn(), (o = Dt.querySelector("[data-phone-toggle]")) == null || o.focus({ preventScroll: !0 });
    else if (n != null && n.hasAttribute("data-phone-reset")) {
      const { phone: d, ...p } = Et();
      Wa(p), rn();
    }
  }), En.addEventListener("keydown", (e) => {
    var f, b, k, E;
    if (e.key === "Escape") {
      e.stopPropagation(), Fn = !1, rn(), (f = Dt.querySelector("[data-phone-toggle]")) == null || f.focus({ preventScroll: !0 });
      return;
    }
    const n = (E = (k = (b = e.target).closest) == null ? void 0 : k.call(b, "[data-phone-key]")) == null ? void 0 : E.dataset.phoneKey, o = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!n || !o) return;
    e.preventDefault();
    const d = no(), p = d.indexOf(n), v = p + o;
    v < 0 || v >= d.length || ([d[p], d[v]] = [d[v], d[p]], Gs(d, n));
  });
  function ao(e, n) {
    e.preventDefault();
    const o = n.parentElement;
    n.classList.add("moving");
    const d = (v) => {
      const f = [...o.children].find((b) => {
        const k = b.getBoundingClientRect();
        return b !== n && v.clientY >= k.top && v.clientY <= k.bottom;
      });
      if (f) {
        const b = f.getBoundingClientRect();
        o.insertBefore(n, v.clientY < b.top + b.height / 2 ? f : f.nextSibling);
      }
    }, p = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), n.classList.remove("moving");
      const v = new Set(vn());
      $o.favs = null, Co({ favourites: [...o.children].map((f) => f.dataset.trayFav).filter((f) => v.has(f)) });
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  Dt.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    const n = e.target.closest("[data-tray-card]"), o = e.target.closest(".tfTrayFav");
    n ? zs(e, n, "card", n.dataset.trayCard) : o && e.target.closest(".tfTrayGrip") ? ao(e, o) : o != null && o.classList.contains("off") && !e.target.closest("button") && zs(e, o, "fav", o.dataset.trayFav);
  });
  function Us(e) {
    if (!tn || e.button !== 0 || e.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const n = e.target.closest(".tfBoardItem"), o = n && Ti().find((N) => N.el === n);
    if (!o || Vn.includes(o.key)) return;
    const d = Ja.get(o.key), { w: p } = ra(T.clientWidth);
    if (!d) return;
    e.preventDefault(), sa();
    const v = e.clientX, f = e.clientY;
    let b = !1, k = 0;
    const E = (N) => {
      const Z = N.clientX - v, he = N.clientY - f;
      if (!b) {
        if (Math.hypot(Z, he) < 4) return;
        b = !0, St = { key: o.key, col: d.col, row: d.row }, n.classList.add("tfDragging");
      }
      n.style.transform = "translate(" + Z + "px," + he + "px)", St.col = Math.round((d.x + Z) / (p + Yt)), St.row = Math.round((d.y + he - ha) / yo), k || (k = requestAnimationFrame(() => {
        k = 0, wn();
      }));
    }, B = () => {
      window.removeEventListener("pointermove", E), window.removeEventListener("pointerup", B), window.removeEventListener("pointercancel", B), b && (cancelAnimationFrame(k), wn(), n.classList.remove("tfDragging"), n.style.transform = "", St = null, Qa(Et(), nn()), wn(), sn());
    };
    window.addEventListener("pointermove", E), window.addEventListener("pointerup", B), window.addEventListener("pointercancel", B);
  }
  function Lo(e = !1) {
    const n = T == null ? void 0 : T.querySelector(".tfDashGraph svg[data-graph]");
    if (!(n != null && n.clientWidth)) return;
    const o = n.dataset.graph + "@" + n.clientWidth + "x" + n.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (n.dataset.drawn === o) return;
    const d = !n.dataset.drawn;
    n.dataset.drawn = o;
    const p = Mi.find((v) => v.id === n.dataset.graph);
    p ? Ds(n, p).then(() => {
      (e || d) && Fl(n);
    }) : ds(n.dataset.graph, n).then(() => {
      e && Tn(n);
    });
  }
  function Ys() {
    var b, k, E;
    Je = ji.model(i()), bi(), x = Je.states, x[(b = z.sources) == null ? void 0 : b.grid] && (Je.grid = z.sources.grid), x[(k = z.sources) == null ? void 0 : k.alarm] && (Je.security.alarms = [z.sources.alarm]), C.forEach((B, N) => {
      const Z = x[N], he = (Z == null ? void 0 : Z.attributes) || {};
      if (!Z || Date.now() - B.at > 2 * 60 * 1e3) {
        C.delete(N);
        return;
      }
      B.pos != null && Z.state !== "opening" && Z.state !== "closing" && Math.abs(Gt(N) - B.pos) < 1 && delete B.pos, B.tilt != null && Math.abs((he.current_tilt_position ?? -1) - B.tilt) < 1 && delete B.tilt, B.pos == null && B.tilt == null && C.delete(N);
    });
    const e = [];
    let n = 0;
    const o = Ot();
    fa = o.filter((B) => B.room).map((B) => B.room), fa.some((B) => B.id === be) || (be = ((E = fa[0]) == null ? void 0 : E.id) || null);
    const d = Ae === "weather" ? { key: "weather", name: "Weather" } : Ae && o.find((B) => B.key === Ae);
    if (d || (Ae = null), m.classList.toggle("tfAreaOpen", !!d), m.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), m.classList.toggle("tfDash", !d), yt = /* @__PURE__ */ new Map(), Je.rooms.forEach((B) => [...B.actions, ...B.plugs, ...B.readings, ...B.openings, ...B.solar, ...B.plants.flatMap((N) => [N.id, ...N.readings])].forEach((N) => yt.set(N, B.name))), !d) return Ns(e, Hr());
    if (e.push({ key: "areahead", html: Bi(d, ++n) }), d.key === "weather")
      return e.weather = ++n, e;
    const p = d.ids, v = d.room ? d.room.id : d.key, f = d.room;
    return f != null && f.solar.length && e.push({ key: "energy:" + f.id, html: Pe(f, ++n) }), f && (f.readings.length || f.plugs.length || f.power != null) && e.push({ key: "readings:" + f.id, html: $e(f, ++n) }), f == null || f.plants.forEach((B) => e.push({ key: "plant:" + B.id, html: at(B, ++n) })), p.length && e.push({ key: "block:" + v, order: ++n, tiles: p.map((B) => ({ key: B, html: Pa(B) })) }), e;
  }
  const Bi = (e, n) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + n + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Tc + '</button><div class="settingsTitle">' + oe(e.name) + "</div></div>";
  let Zs = 0, Ao = null;
  const Ks = (e) => e === "weather" ? mn.wx : T.querySelector(".tfAreas");
  function ur(e) {
    var n, o;
    Ae || (Zs = _a().scrollTop, Ao = ((n = Ks(e)) == null ? void 0 : n.getBoundingClientRect().top) ?? null), Ae = e, e.startsWith("room:") && (be = e.slice(5)), za(), _a().scrollTop = 0, (o = T.querySelector("[data-area-back]")) == null || o.focus({ preventScroll: !0 });
  }
  let Aa = null;
  function Pi(e, n) {
    if (Aa == null || Aa(), n == null) return;
    const o = _a(), d = performance.now() + 1500, p = ["wheel", "touchstart", "pointerdown", "keydown"];
    let v = 0;
    const f = () => {
      cancelAnimationFrame(v), p.forEach((k) => window.removeEventListener(k, f, !0)), Aa = null;
    }, b = () => {
      const k = e();
      if (k != null && k.isConnected) {
        const E = k.getBoundingClientRect().top - n;
        Math.abs(E) > 0.5 && (o.scrollTop += E);
      }
      performance.now() < d ? v = requestAnimationFrame(b) : f();
    };
    p.forEach((k) => window.addEventListener(k, f, { capture: !0, passive: !0 })), Aa = f, b();
  }
  function Ii() {
    var o;
    const e = Ae;
    Ae = null, za(), _a().scrollTop = Zs, Pi(() => Ks(e), Ao);
    const n = e.startsWith("room:") ? T.querySelector('.tfAreaPanel[data-area="' + CSS.escape(e.slice(5)) + '"]') : e === "weather" ? mn.wx.querySelector(".wbOpenPage") : T.querySelector('[data-k="sum:' + CSS.escape(e) + '"]');
    (o = (n == null ? void 0 : n.querySelector("[data-go]")) || n) == null || o.focus({ preventScroll: !0 });
  }
  const ns = (e) => e.wrap ? e.wrap(e.tiles.map((n) => n.html).join(""), e) : '<div class="tfBlock" data-tf data-k="' + oe(e.key) + '" style="order:' + e.order + '"><div class="tfActions">' + e.tiles.map((n) => n.html).join("") + "</div></div>", _o = (e) => e.map((n) => n.key + (n.tiles ? "(" + n.tiles.map((o) => o.key).join(",") + ")" : "")).join(";");
  function _a() {
    for (let e = m.parentElement || m.getRootNode().host; e; e = e.parentElement || e.getRootNode().host) {
      const n = getComputedStyle(e).overflowY;
      if ((n === "auto" || n === "scroll") && e.scrollHeight > e.clientHeight) return e;
    }
    return document.scrollingElement;
  }
  function Un(e) {
    const n = _a(), o = (b) => {
      const k = b.getBoundingClientRect();
      return k.height && k.bottom > 0 && k.top < window.innerHeight;
    }, d = [...T.children, ...T.querySelectorAll(".tfDashTiles > *")].find((b) => !b.matches(".tfDashTiles") && o(b)), p = d == null ? void 0 : d.dataset.k, v = d == null ? void 0 : d.getBoundingClientRect().top;
    e();
    const f = d != null && d.isConnected ? d : p && T.querySelector('[data-k="' + CSS.escape(p) + '"]');
    f != null && f.isConnected && v != null && (n.scrollTop += f.getBoundingClientRect().top - v);
  }
  function za() {
    if (!w || !T) return;
    const e = Ys();
    T.querySelectorAll("[data-tf]").forEach((o) => o.remove()), hn.clear();
    const n = document.createElement("div");
    n.innerHTML = e.map((o) => o.tiles ? ns(o) : o.html).join(""), e.forEach((o) => o.tiles ? o.tiles.forEach((d) => hn.set(d.key, d.html)) : hn.set(o.key, o.html)), kn = _o(e), T.append(...n.children), Vi(e.weather), Gi(), So.disconnect(), wn(), $t(T), hr(T), Zi(T), Y(), V && ds(V.id), On(), Yn(), el(), requestAnimationFrame(G);
  }
  const as = (e) => {
    var o;
    const n = a.activeElement && e.contains(a.activeElement) ? a.activeElement : null;
    return n && { label: n.getAttribute("aria-label"), act: (o = n.dataset) == null ? void 0 : o.act };
  }, Hi = (e, n) => {
    var o;
    n && ((o = n.label && e.querySelector('[aria-label="' + CSS.escape(n.label) + '"]') || n.act && e.querySelector('[data-act="' + CSS.escape(n.act) + '"]')) == null || o.focus({ preventScroll: !0 }));
  };
  function Zl(e, n) {
    const o = document.createElement("div");
    o.innerHTML = n;
    const d = o.firstElementChild, p = as(e);
    e.replaceWith(d), $t(d), hr(d), Zi(d), Hi(d, p);
  }
  function sn() {
    !w || !T || St || Un(os);
  }
  function os() {
    if (!T.querySelector("[data-tf]")) {
      za();
      return;
    }
    const e = Ys();
    if (_o(e) !== kn) {
      za();
      return;
    }
    const n = (o) => [...qe.keys()].some((d) => {
      const p = d.slice(d.indexOf("|") + 1);
      return o === p || o.endsWith(":" + p);
    });
    e.forEach((o) => (o.tiles || [o]).forEach((d) => {
      if (hn.get(d.key) === d.html || n(d.key)) return;
      const p = T.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (p) {
        if (hn.set(d.key, d.html), V && V.key === d.key && p.querySelector(".tfOpen")) {
          p.querySelector(".tfOpen .activityRowMeta").textContent = Ke(V.id);
          return;
        }
        Zl(p, d.html), V && V.key === d.key && ds(V.id), d.key.startsWith("energy:") && On();
      }
    })), Yn(), el(), ks(), Y(), Ue == null || Ue.update(), nt == null || nt.forEach((o) => o.update()), m.classList.contains("tfDash") && _i(), requestAnimationFrame(G);
  }
  const Xo = {
    light: (e) => [["Brightness", e.brightness != null ? Math.round(e.brightness / 2.55) + "%" : null], ["Colour temperature", e.color_temp_kelvin ? Number(e.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", e.color_mode && wt(e.color_mode)]],
    climate: (e) => [["Current temperature", Ie(e.current_temperature) + " °C"], ["Target", Ie(e.temperature) + " °C"], ["Action", wt(e.hvac_action)]],
    cover: (e) => [["Position", e.current_position != null ? e.current_position + "% open" : null], ["Tilt", e.current_tilt_position != null ? e.current_tilt_position + "% open" : null]],
    humidifier: (e) => [["Current humidity", e.current_humidity + "%"], ["Target", e.humidity + "%"], ["Mode", wt(e.mode)]],
    media_player: (e) => [["Title", e.media_title], ["Artist", e.media_artist], ["Volume", e.volume_level != null ? Math.round(e.volume_level * 100) + "%" : null], ["Source", e.source]],
    vacuum: (e) => [["Battery", e.battery_level + "%"], ["Fan speed", wt(e.fan_speed)], ["Rooms", (e.rooms || []).join(", ") || null]],
    lock: (e) => [["Changed by", e.changed_by]],
    alarm_control_panel: (e) => [["Changed by", e.changed_by]],
    valve: () => [],
    plant: (e) => [["Moisture", e.moisture + "%"], ["Light", Number(e.brightness).toLocaleString() + " lx"], ["Temperature", Ie(e.temperature) + " °C"], ["Fertility", e.conductivity + " µS/cm"], ["Problems", e.problem === "none" ? "None" : wt(e.problem)]],
    weather: (e) => [["Temperature", e.temperature != null ? e.temperature + " " + (e.temperature_unit || "°C") : null], ["Humidity", e.humidity != null ? e.humidity + "%" : null], ["Wind", e.wind_speed != null ? e.wind_speed + " " + (e.wind_speed_unit || "km/h") : null], ["Pressure", e.pressure != null ? e.pressure + " " + (e.pressure_unit || "hPa") : null]]
  }, is = (e) => {
    var o;
    const n = (((o = Xo[e.split(".")[0]]) == null ? void 0 : o.call(Xo, gt(e))) || []).filter(([, d]) => d != null && d !== "");
    return n.length ? '<div class="tfMoreRows">' + n.map(([d, p]) => '<div class="tfMoreRow"><span>' + oe(d) + "</span><span>" + oe(p) + "</span></div>").join("") + "</div>" : "";
  }, Jo = (e) => qi(e) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function $s(e, n = {}, o = !1) {
    return '<div class="tfMoreList">' + e.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + oe(d.name) + '</div><div class="tfMoreTiles' + (o ? " single" : "") + '">' + d.ids.map((p) => Ir(p, n)).join("") + "</div></div>").join("") + "</div>";
  }
  const st = document.createElement("div");
  st.className = "tfMoreBackdrop", st.hidden = !0, m.appendChild(st);
  const rs = (e, n) => {
    for (let o = e; o && o !== st; o = o.parentElement) {
      const d = getComputedStyle(o).overflowY;
      if ((d === "auto" || d === "scroll") && o.scrollHeight > o.clientHeight + 1 && (n < 0 ? o.scrollTop > 0 : o.scrollTop + o.clientHeight < o.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let bn = null;
  st.addEventListener("touchstart", (e) => {
    bn = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: !0 }), st.addEventListener("touchmove", (e) => {
    var p, v;
    if (!bn || e.touches.length > 1 || (v = (p = e.target).closest) != null && v.call(p, "input,textarea,select")) return;
    const n = e.touches[0], o = bn.x - n.clientX, d = bn.y - n.clientY;
    bn = { x: n.clientX, y: n.clientY }, Math.abs(d) >= Math.abs(o) && !rs(e.target, d) && e.preventDefault();
  }, { passive: !1 }), st.addEventListener("wheel", (e) => {
    rs(e.target, e.deltaY) || e.preventDefault();
  }, { passive: !1 });
  function Xt() {
    const e = st.querySelector(".tfMorePair"), n = st.querySelector(".tfMore");
    e == null || e.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - n.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Xt, { passive: !0 }), w && Mt();
  let Ea = [];
  const Xs = (e) => e === "favourites" || e.startsWith("summary:") || e.startsWith("group:");
  function Js(e) {
    const n = (k, E = "") => '<div class="tfMoreHead">' + (y != null && y.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + bd + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + oe(k) + "</div>" + E + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Vf + "</button></div>", o = (k, E) => '<div class="tfMoreNow"><div class="tfMoreState">' + oe(k) + "</div>" + (E ? '<div class="tfMoreSub">' + oe(E) + "</div>" : "") + "</div>", d = $s;
    if (e === "favourites") {
      const k = vn(), E = new Set(k), B = [{ name: "Starred", ids: k }, { name: "Home", ids: Je.homeVacuums }, { name: "Security", ids: [...Je.security.alarms, ...Je.security.locks] }, ...Je.rooms.map((N) => ({ name: N.name, ids: [...N.actions, ...N.plugs] }))].map((N, Z) => Z ? { ...N, ids: N.ids.filter((he) => !E.has(he)) } : N).filter((N) => N.ids.length);
      return [n("Favourites"), o(k.length ? k.length + " starred" : "None starred"), d(B, { star: !0 }, !0)];
    }
    const p = (k, { name: E = "", alert: B = !1, plain: N = !1 } = {}) => {
      const Z = N ? [] : k.filter((ee) => yl.includes(ee.split(".")[0])), he = k.filter((ee) => !Z.includes(ee)), Te = (ee) => ee.startsWith("vacuum.") && gt(ee).battery_level != null ? gt(ee).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (E ? '<div class="tfMoreGroupName">' + oe(E) + "</div>" : "") + '<div class="tfMoreActions">' + Z.map((ee) => Pa(ee, !0)).join("") + he.map((ee) => Ir(ee, { plain: N, alert: B, say: N ? Te(ee) : null })).join("") + "</div></div>";
    };
    if (e.startsWith("summary:")) {
      const k = Hr().find((Z) => Z.key === e.slice(8));
      if (!k) return null;
      const E = k.key === "light" ? (k.groups || []).flatMap((Z) => Z.ids) : [], B = E.some((Z) => {
        var he;
        return ((he = x[Z]) == null ? void 0 : he.state) === "on";
      }), N = E.length ? '<button class="primary" type="button" data-acts="' + pe(E.map((Z) => ["light", B ? "turn_off" : "turn_on", Z])) + '">' + (B ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(k.name), '<div class="tfMoreNowRow">' + o(k.value) + N + "</div>", ...(k.groups || []).map((Z) => p(Z.ids, { name: Z.name === k.name ? "" : Z.name, alert: Z.alert, plain: k.plain }))];
    }
    if (e.startsWith("group:")) {
      const [, k, E] = e.split(":"), B = Je.rooms.find((he) => he.id === k), N = B && Ua(B).find((he) => he.key === E);
      if (!N) return null;
      const Z = N.acts ? '<button class="primary" type="button" data-acts="' + pe(N.acts) + '">' + (N.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(B.name + " " + N.label.toLowerCase()), '<div class="tfMoreNowRow">' + o(N.value) + Z + "</div>", p(Rr(B, E))];
    }
    const v = e.split(".")[0], f = x[e], b = yl.includes(v) ? mi(e) : { sections: [] };
    return [
      n(_e(e)),
      o(Ft(e), f.last_changed && en(Date.parse(f.last_changed))),
      (y == null ? void 0 : y.at) && '<svg class="tfGraph tfDay" data-day="' + oe(e) + '" role="img" aria-label="' + oe(_e(e)) + ', last 24 hours"></svg>',
      v === "cover" && '<div data-cover-art="' + oe(e) + '"></div>',
      ...b.sections.filter(Boolean),
      Qs(e) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(y != null && y.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Oc + "</button>"
    ].filter(Boolean);
  }
  const Qs = (e) => Xs(e) ? "" : is(e) + Jo(e);
  let pr = "";
  function fr(e) {
    var n;
    y && (y.details = e, Yn(), (n = st.querySelector(e ? "[data-details-close]" : "[data-details]")) == null || n.focus({ preventScroll: !0 }));
  }
  const Fi = (e) => {
    const n = x[e], o = Gt(e), d = wa(e);
    return { kind: vd(n), name: _e(e), text: Ft(e), pos: o, target: Math.abs(d - o) > 0.5 ? d : null, moving: n.state === "opening" || n.state === "closing", tilt: go(e) ?? 100, canSet: dt(e, Rc) };
  };
  function hr(e) {
    e.querySelectorAll("[data-cover-art]").forEach((n) => {
      const o = n.dataset.coverArt, d = n.dataset.artKey || "more:" + o;
      let p = I.get(d);
      p || (p = jf({ onMove: (v) => Ro(o, v), onSet: (v) => {
        Ro(o, v), ai("pos", o);
      } }), p.coverId = o, I.set(d, p)), n.replaceWith(p.el), p.update(Fi(o));
    });
  }
  const oo = (e) => [...I.values()].filter((n) => n.coverId === e), mr = () => I.forEach((e) => {
    x[e.coverId] && e.update(Fi(e.coverId));
  }), el = () => {
    I.forEach((e, n) => {
      e.el.isConnected || (e.destroy(), I.delete(n));
    }), mr();
  };
  function Yn() {
    var v, f;
    if (!y || !(Xs(y.id) || x[y.id])) {
      st.hidden = !0;
      return;
    }
    if ([...qe.keys()].some((b) => b.endsWith("|" + y.id))) {
      mr();
      return;
    }
    const e = Js(y.id), n = st.querySelector(".tfMore");
    if (!e) {
      Do();
      return;
    }
    const o = as(st), d = Qs(y.id), p = y.frame ? y.frame.wide : y.id.startsWith("summary:") || y.id.startsWith("group:");
    if (st.hidden || !n || e.length !== Ea.length || n.classList.contains("wide") !== p) {
      const b = ss ? y.scroll || 0 : !st.hidden && n ? n.scrollTop : 0;
      st.innerHTML = '<div class="tfMorePair' + (st.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (p ? " wide" : "") + '"' + (y.frame ? ' style="height:' + y.frame.h + 'px"' : "") + ">" + e.join("") + "</section>" + (d ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + bd + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + d + "</div></div></aside>" : "") + "</div>", pr = d, st.classList.toggle("wide", p), st.hidden = !1, Xt(), hr(st), Zi(st), $t(st), st.querySelectorAll("[data-day]").forEach((k) => Jl(k.dataset.day, k, y.at)), b && (st.querySelector(".tfMore").scrollTop = b), Hi(st, o), st.contains(a.activeElement) || (v = st.querySelector("[data-more-close]")) == null || v.focus({ preventScroll: !0 });
    } else {
      if (e.forEach((b, k) => {
        var N, Z;
        if (b === Ea[k] || b.includes("data-cover-art") || n.children[k].contains((Z = (N = a.activeElement) == null ? void 0 : N.matches) != null && Z.call(N, "input,select") ? a.activeElement : null) || [...qe.keys()].some((he) => n.children[k].querySelector('[data-drag="' + CSS.escape(he) + '"]'))) return;
        const E = document.createElement("div");
        E.innerHTML = b;
        const B = E.firstElementChild;
        n.children[k].replaceWith(B), $t(B), Zi(B);
      }), d !== pr) {
        const b = st.querySelector(".tfMoreSideBody");
        b && (b.innerHTML = d), pr = d;
      }
      st.contains(a.activeElement) || Hi(st, o);
    }
    (f = st.querySelector(".tfMorePair")) == null || f.classList.toggle("details", !!(y.details && d)), Ea = e, mr();
  }
  setInterval(() => {
    y && Yn();
  }, 15 * 1e3);
  function Qo(e, n) {
    var p;
    const o = !!(y && n && st.contains(n)), d = o && st.querySelector(".tfMore");
    o && (y.scroll = d.scrollTop), y = { id: e, opener: o ? y.opener : n, back: o ? y : null, frame: o ? y.frame || { wide: d.classList.contains("wide"), h: d.offsetHeight } : null, at: Number((p = n == null ? void 0 : n.dataset) == null ? void 0 : p.at) || null }, Eo();
  }
  let ss = !1;
  function Eo() {
    Ea = [], ss = !st.hidden, I.forEach((e, n) => {
      n !== y.id && st.contains(e.el) && (e.destroy(), I.delete(n));
    }), Yn(), ss = !1;
  }
  function Do() {
    var o, d, p, v, f, b;
    const e = y == null ? void 0 : y.opener;
    y = null, I.forEach((k, E) => {
      st.contains(k.el) && (k.destroy(), I.delete(E));
    }), Ut.forEach((k, E) => {
      E.startsWith("more:") && Ut.delete(E);
    }), st.hidden = !0, st.innerHTML = "";
    const n = { preventScroll: !0 };
    e != null && e.isConnected ? e.focus(n) : (o = e == null ? void 0 : e.dataset) != null && o.more ? (d = T.querySelector('[data-more="' + CSS.escape(e.dataset.more) + '"]')) == null || d.focus(n) : (p = e == null ? void 0 : e.dataset) != null && p.summary ? (v = T.querySelector('[data-summary="' + CSS.escape(e.dataset.summary) + '"]')) == null || v.focus(n) : (f = e == null ? void 0 : e.hasAttribute) != null && f.call(e, "data-favs-edit") && ((b = T.querySelector("[data-favs-edit]")) == null || b.focus(n));
  }
  function gr(e, n, o, d = {}) {
    const p = n.map((ve) => ve[1]), v = d.zero ? 0 : Math.min(...p), f = Math.max(...p), b = Math.max(120, e.clientWidth || 260), k = Math.max(60, e.clientHeight || 130), E = 8, B = k - 20, N = Date.now() - 24 * 3600 * 1e3, Z = 24 * 3600 * 1e3, he = (ve) => Math.max(0, Math.min(b, (ve - N) / Z * b)), Te = (ve) => f === v ? (E + B) / 2 : B - (ve - v) / (f - v) * (B - E);
    let ee = "M" + he(n[0][0]).toFixed(1) + " " + Te(n[0][1]).toFixed(1);
    for (let ve = 1; ve < n.length; ve++) ee += d.smooth ? "L" + he(n[ve][0]).toFixed(1) + " " + Te(n[ve][1]).toFixed(1) : "H" + he(n[ve][0]).toFixed(1) + "V" + Te(n[ve][1]).toFixed(1);
    e.setAttribute("viewBox", "0 0 " + b + " " + k), e.setAttribute("aria-label", o), e.innerHTML = '<path d="' + ee + "V" + B + "H" + he(n[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + ee + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (k - 4) + '">24 h ago</text><text x="' + b + '" y="' + (k - 4) + '" text-anchor="end">Now</text>';
  }
  const vr = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, Kl = (e, n) => {
    const o = e.split(".")[0];
    return vr[o] ? vr[o].includes(n) : o === "alarm_control_panel" || o === "climate" || o === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(n) : n === "on";
  }, da = (e) => {
    const n = e.split(".")[0], o = gt(e).device_class;
    return n === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[o] || (xl.includes(o) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[n] || "On";
  }, ls = /* @__PURE__ */ new Map();
  let $l = 0;
  async function Xl(e) {
    let n = ls.get(e);
    if (!n || Date.now() - n.at > 60 * 1e3) {
      let p = [];
      try {
        const v = await H({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        p = ((v == null ? void 0 : v[e]) || []).map((f) => [f.lu != null ? f.lu * 1e3 : Date.parse(f.last_updated || f.last_changed), String(f.s ?? f.state)]).filter(([f]) => Number.isFinite(f));
      } catch {
      }
      p.length || (p = (xi || []).filter((v) => v.entity_id === e).map((v) => [v.when * 1e3, String(v.state)])), n = { at: Date.now(), pts: p }, ls.set(e, n);
    }
    const o = x[e], d = n.pts.slice().sort((p, v) => p[0] - v[0]);
    return o && (!d.length || d[d.length - 1][1] !== o.state) && d.push([Date.parse(o.last_changed) || Date.now(), o.state]), d;
  }
  async function Jl(e, n, o) {
    const d = await Xl(e);
    if (!n.isConnected) return;
    const p = d.map(([Ne, Qe]) => [Ne, Number(Qe)]);
    if (d.length > 1 && p.every(([, Ne]) => Number.isFinite(Ne))) {
      gr(n, p, _e(e) + ", last 24 hours");
      return;
    }
    const v = Date.now(), f = v - 864e5, b = Math.max(200, n.clientWidth || 360), k = 62, E = (Ne) => Math.max(0, Math.min(b, (Ne - f) / 864e5 * b)), B = [];
    let N = null;
    d.forEach(([Ne, Qe]) => {
      const Qt = Kl(e, Qe);
      Qt && N == null ? N = Math.max(Ne, f) : !Qt && N != null && (B.push([N, Math.max(Ne, f)]), N = null);
    }), N != null && B.push([N, v]);
    const Z = zo(e) ? "var(--danger)" : e.startsWith("light.") ? "#ffaa00" : "var(--primary)", he = da(e), Te = "tfDayClip" + ++$l, ee = B.map(([Ne, Qe]) => he + (Qe >= v - 1e3 && Ne <= f + 1e3 ? " all day" : Qe >= v - 1e3 ? " since " + Bn(Ne) : Ne <= f + 1e3 ? " until " + Bn(Qe) : " " + Bn(Ne) + "–" + Bn(Qe)));
    let ve = "", L = -1 / 0;
    B.forEach(([Ne], Qe) => {
      const Qt = ee[Qe].length * 5.4, It = Math.min(E(Ne), b - Qt);
      It < L + 8 || (ve += '<text x="' + It.toFixed(1) + '" y="10">' + oe(ee[Qe]) + "</text>", L = It + Qt);
    });
    let me = '<text x="' + b + '" y="' + (k - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((Ne) => {
      let Qe = new Date(v).setHours(Ne, 0, 0, 0);
      Qe > v && (Qe -= 864e5), E(Qe) > 8 && E(Qe) < b - 34 && (me += '<text x="' + E(Qe).toFixed(1) + '" y="' + (k - 2) + '" text-anchor="middle">' + String(Ne).padStart(2, "0") + "</text>");
    }), n.setAttribute("viewBox", "0 0 " + b + " " + k), n.setAttribute("aria-label", _e(e) + ", last 24 hours: " + (ee.length ? ee.join(", ") : "no changes")), n.innerHTML = '<clipPath id="' + Te + '"><rect x="0" y="18" width="' + b + '" height="26" rx="8"/></clipPath>' + ve + '<rect x="0" y="18" width="' + b + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + Te + ')">' + B.map(([Ne, Qe]) => '<rect x="' + E(Ne).toFixed(1) + '" y="18" width="' + Math.max(2, E(Qe) - E(Ne)).toFixed(1) + '" height="26" fill="' + Z + '"/>').join("") + "</g>" + (o && o >= f ? '<line x1="' + E(o).toFixed(1) + '" x2="' + E(o).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + me;
  }
  function tl(e) {
    var d;
    const n = Number((d = x[e]) == null ? void 0 : d.state), o = Date.now();
    if (gt(e).state_class === "total_increasing") {
      const p = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), v = Math.max(1, o - p);
      return [...Array(49)].map((f, b) => p + v * b / 48).map((f) => [f, Math.round(n * Math.pow((f - p) / v, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((p, v) => [o - (48 - v) * 30 * 60 * 1e3, Math.round(n * (0.96 + 0.04 * Math.sin(v / 6)) * 10) / 10]);
  }
  async function ds(e, n) {
    var he, Te;
    let o = we.get(e);
    if (e.endsWith("_solar_power")) o = { at: Date.now(), points: ec() };
    else if (qi(e)) o = { at: Date.now(), points: tl(e) };
    else if (!o || Date.now() - o.at > 5 * 60 * 1e3) {
      try {
        const ee = new Date(Date.now() - 864e5).toISOString(), ve = await H({ type: "history/history_during_period", start_time: ee, entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), L = ((ve == null ? void 0 : ve[e]) || []).map((me) => [me.lu != null ? me.lu * 1e3 : Date.parse(me.last_updated || me.last_changed), Number(me.s ?? me.state)]).filter(([me, Ne]) => Number.isFinite(me) && Number.isFinite(Ne));
        o = { at: Date.now(), points: L };
      } catch {
        o = { at: Date.now(), points: [] };
      }
      we.set(e, o);
    }
    const d = n || T.querySelector('[data-graph="' + CSS.escape(e) + '"]');
    if (!d) return;
    const p = x[e], v = ((he = p == null ? void 0 : p.attributes) == null ? void 0 : he.unit_of_measurement) || "", f = o.points.slice(), b = Number(p == null ? void 0 : p.state);
    if (Number.isFinite(b) && !e.endsWith("_solar_power") && f.push([Date.now(), b]), f.length < 2) {
      d.setAttribute("aria-label", _e(e) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const k = f.map((ee) => ee[1]), E = Math.min(...k), B = Math.max(...k), N = (ee) => ee.toLocaleString(void 0, { maximumFractionDigits: Math.abs(ee) >= 100 ? 0 : 1 }), Z = ((Te = p == null ? void 0 : p.attributes) == null ? void 0 : Te.state_class) === "total_increasing";
    gr(d, f, _e(e) + ", last 24 hours: " + (Z ? "+" + N(k[k.length - 1] - k[0]) : E === B ? N(E) : N(E) + " to " + N(B)) + (v ? " " + v : ""), { smooth: e.endsWith("_solar_power"), zero: e.endsWith("_solar_power") });
  }
  function On() {
    const e = T == null ? void 0 : T.querySelector("[data-solar]");
    if (!e) return;
    const n = ec();
    gr(e, n, "Solar, last 24 hours: up to " + Ie(Math.max(...n.map((o) => o[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function nl(e, n) {
    const o = n.entity_id, d = C.get(o) || {}, p = { open_cover: 100, close_cover: 0, set_cover_position: n.position, toggle: Gt(o) > 0 ? 0 : 100 }[e], v = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: n.tilt_position }[e];
    p != null && (d.pos = p), v != null && (d.tilt = v), e === "stop_cover" && (delete d.pos, delete d.tilt), e === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), C.set(o, d);
  }
  function al(e, n, o) {
    var p;
    const d = o == null ? void 0 : o.entity_id;
    return e !== "light" || typeof d != "string" || !bt[d] || !Nn(d) || o.brightness_pct != null || o.brightness != null ? [n, o] : n !== "turn_on" && !(n === "toggle" && ((p = x[d]) == null ? void 0 : p.state) !== "on") ? [n, o] : ["turn_on", { ...o, brightness_pct: bt[d] }];
  }
  function io(e, n, o, d) {
    let p = { entity_id: o, ...d || {} };
    return [n, p] = al(e, n, p), e === "cover" && nl(n, p), tt[o] = (tt[o] || 0) + 1, si.set(Pc, JSON.stringify(tt)), ji.call(e, n, p) ? Promise.resolve() : Promise.resolve(le(e, n, p));
  }
  function ei(e) {
    const [n, o, d, p] = e.split("|");
    io(n, o, d, p ? JSON.parse(p) : null).catch(() => {
    });
  }
  function Ro(e, n) {
    qe.set("pos|" + e, n), hn.delete(e), Ea = Ea.map(() => ""), [T, st].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(e) + '"]').forEach((p) => pi(p, n)));
    const o = T.querySelector('.tfAction[data-k="' + CSS.escape(e) + '"] .tfName .activityRowMeta');
    if (o && (o.textContent = Math.round(n) + "%"), (y == null ? void 0 : y.id) === e) {
      const d = st.querySelector(".tfMoreState"), p = st.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(n) + "%", d.classList.add("live")), p && (p.textContent = "Currently " + Gt(e) + "%");
    }
    oo(e).forEach((d) => d.update(Fi(e)));
  }
  const Ql = (e, n) => {
    const o = e.shiftKey ? 10 : 1, d = { ArrowUp: n + o, ArrowRight: n + o, ArrowDown: n - o, ArrowLeft: n - o, PageUp: n + 25, PageDown: n - 25, Home: 0, End: 100 }[e.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function br(e, n) {
    var ee;
    const o = e.dataset.blocks;
    (ee = e.setPointerCapture) == null || ee.call(e, n.pointerId);
    const d = (ve) => {
      const L = e.getBoundingClientRect();
      return Math.max(0, Math.min(100, (ve.clientX - L.left) / L.width * 100));
    }, p = d(n), v = n.clientX;
    let f = !1, b = wa(o), k = p, E = 0;
    const B = () => {
      b = Math.abs(k - b) < 0.2 ? k : b + (k - b) * 0.14, Ro(o, b), E = requestAnimationFrame(B);
    }, N = () => {
      f || (f = !0, e.classList.add("fine"), E = requestAnimationFrame(B));
    }, Z = setTimeout(N, 350), he = (ve) => {
      k = d(ve), Math.abs(ve.clientX - v) > 6 && (clearTimeout(Z), N());
    }, Te = () => {
      clearTimeout(Z), cancelAnimationFrame(E), e.removeEventListener("pointermove", he), e.removeEventListener("pointerup", Te), e.removeEventListener("pointercancel", Te), e.classList.remove("fine"), Ro(o, f ? Math.round(b) : (Math.min(3, Math.floor(p / 25)) + 1) * 25), ai("pos", o);
    };
    e.addEventListener("pointermove", he), e.addEventListener("pointerup", Te), e.addEventListener("pointercancel", Te);
  }
  function Oi(e) {
    var p;
    const [n, o] = e.dataset.open.split("|"), d = e.closest(".tfCard");
    V = { key: n, id: o, h: d ? Math.round(d.getBoundingClientRect().height) : 0 }, hn.delete(n), sn(), (p = T.querySelector(".tfOpen [data-close]")) == null || p.focus({ preventScroll: !0 });
  }
  function ro(e) {
    var n;
    be = e.dataset.area, T.querySelectorAll(".tfAreaPanel").forEach((o) => {
      var p;
      const d = o === e;
      o.classList.toggle("active", d), o.setAttribute("aria-expanded", String(d)), (p = o.querySelector(".panelExpanded")) == null || p.toggleAttribute("inert", !d);
    }), hn.set("areas", Ss(((n = T.querySelector('[data-k="areas"]')) == null ? void 0 : n.style.order) || 1));
  }
  const ti = {
    bright: { value: (e, n) => Math.round(n * 100), text: (e, n) => n ? n + "%" : "Off", send: (e, n) => n > 0 ? ["light", "turn_on", { brightness_pct: n }] : ["light", "turn_off", {}] },
    ct: { value: (e, n) => {
      const [o, d] = mo(e);
      return Math.round(o + n * (d - o));
    }, text: (e, n) => n.toLocaleString() + "k", send: (e, n) => ["light", "turn_on", { color_temp_kelvin: n }] },
    hue: { value: (e, n) => Math.round(n * 360), text: () => "Colour", send: (e, n) => {
      var o;
      return ["light", "turn_on", { hs_color: [n, Math.max(60, ((o = gt(e).hs_color) == null ? void 0 : o[1]) || 100)] }];
    } },
    pos: { value: (e, n) => Math.round(n * 100), text: (e, n) => Math.round(n) + "%", send: (e, n) => ["cover", "set_cover_position", { position: Math.round(n) }] },
    tilt: { value: (e, n) => Math.round(n * 100), text: (e, n) => "Tilt " + n + "%", send: (e, n) => ["cover", "set_cover_tilt_position", { tilt_position: n }] },
    vol: { value: (e, n) => Math.round(n * 100) / 100, text: (e, n) => Math.round(n * 100) + "%", send: (e, n) => ["media_player", "volume_set", { volume_level: n }] }
  };
  function ni(e, n, o, d) {
    var k;
    const p = ti[n].value(o, d);
    qe.set(n + "|" + o, p);
    const v = Math.round(d * 100) + "%", f = e.querySelector("i");
    if (n === "tilt") {
      f.style.width = "calc((100% - 8px) * " + d + ")";
      const [E, B] = e.querySelectorAll("span");
      E.classList.toggle("lit", d > 0.08), B.classList.toggle("lit", d > 0.92), hn.delete(o), Ea = Ea.map(() => ""), oo(o).forEach((N) => N.update(Fi(o)));
    } else if (f) f.style.width = v;
    else {
      let E = e.querySelector("b");
      E || (E = document.createElement("b"), e.appendChild(E)), E.style.left = v;
    }
    e.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const b = (k = e.closest(".tfAction") || e.closest(".tfMore")) == null ? void 0 : k.querySelector(".tfName .activityRowMeta, .tfMoreState");
    b && (b.textContent = ti[n].text(o, p));
  }
  function ai(e, n) {
    const o = qe.get(e + "|" + n), [d, p, v] = ti[e].send(n, o), f = () => setTimeout(() => {
      qe.delete(e + "|" + n), sn();
    }, 1500);
    io(d, p, n, v).then(f, f);
  }
  function so(e) {
    e.addEventListener("click", (n) => {
      var d, p;
      const o = n.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (An && !n.target.closest(".tfBoardMenu,[data-board-more]") && sa(), !(!o || !e.contains(o) || o.disabled))
        if (o.dataset.boardMore)
          (An == null ? void 0 : An.key) === o.dataset.boardMore ? sa(!0) : Wl(o.dataset.boardMore, o);
        else if (o.dataset.boardAct) Gn(An.key, o.dataset.boardAct);
        else if (o.dataset.boardShow) Yr(o.dataset.boardShow);
        else if (o.dataset.favHide) Ws(o.dataset.favHide, !1);
        else if (o.dataset.energyPick) Es(o.dataset.energyPick);
        else if (o.dataset.act) ei(o.dataset.act);
        else if (o.hasAttribute("data-details")) fr(!(y != null && y.details));
        else if (o.hasAttribute("data-details-close")) fr(!1);
        else if (o.dataset.summary) As(o.dataset.summary, o);
        else if (o.dataset.star) $i(o.dataset.star);
        else if (o.hasAttribute("data-more-back")) {
          const v = y.id;
          y = y.back, Eo(), (d = st.querySelector('.tfMore [data-more="' + CSS.escape(v) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else if (o.hasAttribute("data-favs-edit")) Qo("favourites", o);
        else if (o.dataset.acts) JSON.parse(o.dataset.acts).forEach(([v, f, b, k]) => io(v, f, b, k).catch(() => {
        }));
        else if (o.dataset.more) Qo(o.dataset.more, o);
        else if (o.hasAttribute("data-more-close")) Do();
        else if (o.dataset.go) ur("room:" + o.dataset.go);
        else if (o.hasAttribute("data-area-back")) Ii();
        else if (o.dataset.open) Oi(o);
        else if (o.hasAttribute("data-close")) {
          const v = V;
          V = null, hn.delete(v.key), sn(), (p = T.querySelector('[data-open="' + CSS.escape(v.key + "|" + v.id) + '"]')) == null || p.focus({ preventScroll: !0 });
        } else o.classList.contains("tfAreaPanel") && !o.classList.contains("active") && ro(o);
    }), e.addEventListener("keydown", (n) => {
      var d, p, v, f, b, k, E;
      const o = n.target;
      if ((d = o.dataset) != null && d.open && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Oi(o)), (p = o.dataset) != null && p.energyPick && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Es(o.dataset.energyPick)), (v = o.classList) != null && v.contains("tfAreaPanel") && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), ro(o)), (f = o.dataset) != null && f.summary && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), As(o.dataset.summary, o)), n.key === "Escape" && An && e === T) {
        n.preventDefault(), sa(!0);
        return;
      }
      if (n.key === "Escape" && tn && e === T) {
        n.preventDefault(), Ur(!1), (b = c("dashEditNav")) == null || b.focus();
        return;
      }
      if (n.key === "Escape" && Ae && e === T && (n.preventDefault(), Ii()), (k = o.dataset) != null && k.blocks) {
        const B = o.dataset.blocks, N = Ql(n, Math.round(wa(B)));
        if (N == null) return;
        n.preventDefault(), Ro(B, N), clearTimeout(fe.get(B)), fe.set(B, setTimeout(() => ai("pos", B), 500));
        return;
      }
      if ((E = o.dataset) != null && E.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(n.key)) {
        n.preventDefault();
        const [B, N] = o.dataset.drag.split("|"), Z = Number(o.getAttribute("aria-valuenow")) / 100, he = n.key === "Home" ? 0 : n.key === "End" ? 1 : Math.max(0, Math.min(1, Z + (n.key === "ArrowLeft" || n.key === "ArrowDown" ? -0.05 : 0.05)));
        ni(o, B, N, he), ai(B, N);
      }
    }), e.addEventListener("pointerdown", (n) => {
      var Qt;
      const o = n.target.closest("[data-blocks]");
      if (o && n.button === 0) {
        n.preventDefault(), br(o, n);
        return;
      }
      const d = n.target.closest("[data-drag]");
      if (!d || n.button > 0) return;
      const [p, v] = d.dataset.drag.split("|");
      if (p === "bright" && !Nn(v)) {
        ei(te("light", "toggle", v));
        return;
      }
      const f = p === "bright" && ((Qt = x[v]) == null ? void 0 : Qt.state) !== "on", b = n.pointerType !== "mouse", k = p === "tilt" ? 4 : 0, E = () => d.getBoundingClientRect().width - k * 2, B = (It) => {
        const ca = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (It.clientX - ca.left - k) / E()));
      };
      let N = b ? "waiting" : f ? "pressed" : "dragging", Z = 0, he = 0;
      const Te = n.clientX, ee = n.clientY, ve = (It, ca) => Math.hypot(It.clientX - Te, It.clientY - ee) > ca, L = () => {
        try {
          d.setPointerCapture(n.pointerId);
        } catch {
        }
      };
      b || (n.preventDefault(), L()), N === "dragging" && ni(d, p, v, B(n));
      const me = b && setTimeout(() => {
        var It, ca;
        N === "waiting" && (N = "held", R = d, d.classList.add("held"), L(), (It = navigator.userActivation) != null && It.hasBeenActive && ((ca = navigator.vibrate) == null || ca.call(navigator, 8)), Z = f ? (bt[v] ?? 100) / 100 : Number(d.getAttribute("aria-valuenow")) / 100, he = Te, ni(d, p, v, Z));
      }, M), Ne = (It) => {
        N === "waiting" && ve(It, 8) ? N = "gone" : N === "pressed" && ve(It, 4) && (N = "dragging"), N === "held" ? ni(d, p, v, Math.max(0, Math.min(1, Z + (It.clientX - he) / E()))) : N === "dragging" && ni(d, p, v, B(It));
      }, Qe = (It) => {
        clearTimeout(me), ["pointermove", "pointerup", "pointercancel"].forEach((ca, Ve) => d.removeEventListener(ca, Ve ? Qe : Ne)), d.classList.remove("held"), R === d && (R = null), N === "held" || N === "dragging" ? ai(p, v) : It.type === "pointerup" && f && (N === "waiting" || N === "pressed") && io("light", "turn_on", v).catch(() => {
        });
      };
      d.addEventListener("pointermove", Ne), d.addEventListener("pointerup", Qe), d.addEventListener("pointercancel", Qe);
    }), e.addEventListener("touchmove", (n) => {
      R && n.cancelable && n.preventDefault();
    }, { passive: !1 });
  }
  return T && w && (Xi(), so(T), so(st), st.addEventListener("click", (e) => {
    e.target === st && Do();
  }), (cs = a.getElementById("homeNav")) == null || cs.addEventListener("click", () => {
    Ae && Ii();
  }), (Zt = a.querySelector(".bottomNav")) == null || Zt.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + qc + "</button>"), (ol = c("dashEditNav")) == null || ol.addEventListener("click", () => Ur(!tn)), T.addEventListener("pointerdown", Us), T.addEventListener("hass-action", (e) => {
    var d, p;
    const n = (p = (d = e.target).closest) == null ? void 0 : p.call(d, ".tfDac"), o = n == null ? void 0 : n.dataset.k;
    !o || !n.dataset.dac.startsWith("dash:") || tn || (e.stopPropagation(), Qo(o, n));
  }), new ResizeObserver(() => {
    m.classList.contains("tfDash") && zr() !== xo ? sn() : _i();
  }).observe(T), window.addEventListener("resize", _i, { passive: !0 }), st.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.stopPropagation(), y != null && y.details ? fr(!1) : Do());
  })), Q(), {
    update(e) {
      if (!w) return;
      const n = !Object.keys(x).length;
      x = e || {};
      for (const o in x) o.startsWith("light.") && x[o].state === "on" && Nn(o) && Sn(o, ho(x[o]));
      n ? za() : sn();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      fo = !0, Ue == null || Ue.destroy(), Ue = null, nt == null || nt.forEach((e) => e.destroy()), nt = null;
    },
    resume() {
      fo = !1, !(!w || !(T != null && T.querySelector("[data-tf]"))) && (lt.isConnected && Vi(lt.style.order), Gi());
    }
  };
}
const hh = "0.54.0", kd = "move_assistant", mh = "move_assistant", jc = "move_assistant_checkin_reminder";
function gh() {
  if (document.getElementById("move-assistant-inter")) return;
  const a = document.createElement("link");
  a.id = "move-assistant-inter", a.rel = "stylesheet", a.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(a);
}
class vh extends HTMLElement {
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
    gh();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${Cu}${Tu}${Lu}</style>${Au}`;
    const i = l.getElementById("app");
    i.style.opacity = "0";
    let c = null;
    try {
      const m = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: kd
      });
      c = (m == null ? void 0 : m.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(c), this._app = Zu(l, {
      data: c,
      save: (m) => this._save(m),
      fire: (m, g) => this._fire(m, g),
      ws: (m) => this._hass.callWS(m),
      subscribe: (m, g) => {
        var w, A;
        return (A = (w = this._hass) == null ? void 0 : w.connection) != null && A.subscribeMessage ? this._hass.connection.subscribeMessage(g, m) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var m, g;
        return Object.keys(((g = (m = this._hass) == null ? void 0 : m.services) == null ? void 0 : g.notify) || {}).sort();
      },
      setReminderAutomation: (m) => this._setReminderAutomation(m),
      setLight: (m) => this.classList.toggle("lightBody", m),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = fh(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const l = (i = this._hass) == null ? void 0 : i.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (c) => {
        var g;
        const m = JSON.stringify((c == null ? void 0 : c.value) ?? null);
        m === this._lastSaved || m === this._pendingJson || (this._lastSaved = m, (g = this._app) == null || g.applyRemoteData(c.value));
      },
      { type: "frontend/subscribe_user_data", key: kd }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: kd,
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
      event_type: mh,
      event_data: { action: l, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const i = `config/automation/config/${jc}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (g) {
        if ((g == null ? void 0 : g.status_code) !== 404 && (g == null ? void 0 : g.status) !== 404) throw g;
      }
      return;
    }
    const c = (g) => `${g}:00`, m = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: jc,
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
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", vh), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${hh} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
