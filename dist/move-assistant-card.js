const Du = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Ru = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--muted)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDac{grid-column:span 2;min-width:0}.tfDac>dual-controller-v3{display:block}.tfMoreActions .tfDac{grid-column:auto}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg,.tfDash-aq,.tfDash-pollen,.tfDash-radar){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg,.tfDash-aq,.tfDash-pollen,.tfDash-radar){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app:not(.tfBoard) :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar) .wbCard.wbSquare{aspect-ratio:auto;min-height:212px}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}', Nu = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:clamp(8px,calc(5.6cqw * var(--wb-k,1)),14px);aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:clamp(12px,calc(7.9cqw * var(--wb-k,1)),20px);border-radius:clamp(22px,calc(11.1cqw * var(--wb-k,1)),28px);overflow:hidden}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbHead{gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px)}.wbSquare .wbChip{width:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);height:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);border-radius:clamp(12px,calc(6.3cqw * var(--wb-k,1)),16px);--wb-icon:clamp(18px,calc(9.5cqw * var(--wb-k,1)),24px)}.wbSquare .wbName{font-size:clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px);line-height:1.4}.wbSquare .wbSub{font-size:clamp(13px,calc(6.3cqw * var(--wb-k,1)),16px)}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:clamp(6px,calc(4cqw * var(--wb-k,1)),10px)}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px);color:var(--muted);font:400 clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px)/1.4 var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbSummary{display:none}.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}@container wb-card (width < 220px){.wbMoonCaption{display:none}}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}`, Bu = `<main id="app"><div class="shell">
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
`, ra = {
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
}, ia = (a) => a < 0 ? 0 : a > 1 ? 1 : a, ed = (a, l, o) => a + (l - a) * o, _c = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((d) => d + d).join("") : l;
  return [0, 2, 4].map((d) => parseInt(o.slice(d, d + 2), 16) || 0);
}, Pu = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), td = {}, Jt = (a, l, o) => {
  const d = a + l + o;
  return td[d] || (td[d] = Pu(_c(a).map((f, v) => f + (_c(l)[v] - f) * o)));
}, nd = {}, _l = (a) => nd[a] || (nd[a] = _c(a)), dc = (a, l, o, d) => (f) => {
  if (f <= 0) return 0;
  if (f >= 1) return 1;
  let v = 0, w = 1, E = f;
  for (let x = 0; x < 18; x++)
    E = (v + w) / 2, 3 * (1 - E) * (1 - E) * E * a + 3 * (1 - E) * E * E * o + E * E * E < f ? v = E : w = E;
  return 3 * (1 - E) * (1 - E) * E * l + 3 * (1 - E) * E * E * d + E * E * E;
}, Iu = { std: dc(0.2, 0, 0, 1), acc: dc(0.3, 0, 1, 1), dec: dc(0, 0, 0, 1) };
function Hl(a, l) {
  const o = String(a || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || l ? "night" : "day");
}
function $d(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [Jt(l.clear[0], l.cloudy[0], 0.12), Jt(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Jt(l.rain[0], "#000000", 0.22), Jt(l.rain[1], "#000000", 0.22)], l;
}
const Ec = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Dc = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Rc = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Nc(a, l = ra) {
  const o = { ...ra, ...l }, d = $d(o), f = String(a).split("/"), v = d[f[0]] ? f[0] : "clear", w = f[1] === "night", E = d[v][w ? 1 : 0], x = {
    night: w,
    clearness: v === "clear" ? 1 : v === "partly" ? 0.7 : 0.25,
    sky: E,
    skyStops: [E],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Ec.map(() => ({ o: 0 })),
    rain: Dc.map(() => ({ o: 0, dy: -16 })),
    snow: Rc.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, N = (ge) => Ec.map(() => ({ o: ge }));
  return v === "clear" ? w ? (x.moon.o = 1, x.stars = N(1)) : x.sun.o = 1 : v === "partly" ? (x.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (x.moon = { x: 34, y: 33, d: 48, o: 1 }, x.stars = N(0.7)) : x.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : v === "cloudy" || v === "fog" ? (x.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? x.moon = { x: 40, y: 36, d: 40, o: 0 } : x.sun = { x: 40, y: 36, r: 20, o: 0 }) : (x.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? x.moon = { x: 38, y: 28, d: 36, o: 0 } : x.sun = { x: 38, y: 28, r: 18, o: 0 }, v === "snow" ? x.snow = Rc.map(() => ({ o: 1, dy: 0 })) : x.rain = Dc.map((ge, oe) => ({ o: v === "storm" && oe === 1 ? 0 : 1, dy: 0 })), v === "storm" && (x.bolt = { o: 1, dy: 0 })), x;
}
const ad = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Hu(a, l, o, d = ra, f = !1) {
  const v = { ...ra, ...d }, w = (Y, $) => Y > 0.01 && $ > 0.01 ? "stay" : Y > 0.01 ? "leave" : $ > 0.01 ? "enter" : "none", E = (Y, $, ne, Z) => {
    const U = Y[0] + $ * Z, q = Y[1] - (ne - 1 - $) * Z;
    return Iu[Y[2]](ia((o - U) / Math.max(1e-3, q - U)));
  }, x = (Y, $, ne, Z = 0, U = 1, q = 0) => {
    const ue = w(Y.o, $.o);
    if (ue === "none") return { ...$, o: 0 };
    const ee = E(ad[ne][ue], Z, U, q), pe = {};
    for (const X in $) pe[X] = f && ue !== "stay" && X !== "o" ? ue === "leave" ? Y[X] : $[X] : ed(Y[X], $[X], ee);
    return pe;
  }, N = E(ad.sky, 0, 1, 0);
  let ge, oe;
  if (a.night !== l.night) {
    const Y = Math.min(a.clearness, l.clearness), $ = Jt(Jt(a.sky, l.sky, 0.5), v.dusk, 0.6 * Y);
    ge = N < 0.5 ? Jt(a.sky, $, N * 2) : Jt($, l.sky, N * 2 - 1), oe = Y > 0.5 ? [a.sky, v.dusk, l.sky] : [a.sky, l.sky];
  } else
    ge = Jt(a.sky, l.sky, N), oe = [a.sky, l.sky];
  return {
    night: o < 0.5 ? a.night : l.night,
    clearness: ed(a.clearness, l.clearness, o),
    sky: ge,
    skyStops: oe,
    skyT: N,
    sun: x(a.sun, l.sun, "body"),
    moon: x(a.moon, l.moon, "body"),
    cloud: x(a.cloud, l.cloud, "cloud"),
    stars: l.stars.map((Y, $) => x(a.stars[$], Y, "fx", $, l.stars.length, 0.05)),
    rain: l.rain.map((Y, $) => x(a.rain[$], Y, "fx", $, l.rain.length, 0.05)),
    snow: l.snow.map((Y, $) => x(a.snow[$], Y, "fx", $, l.snow.length, 0.05)),
    bolt: x(a.bolt, l.bolt, "fx")
  };
}
const Fu = [
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
], oa = (a, l) => (Fu[(l & 7) * 8 + (a & 7)] + 0.5) / 64, Ou = 0, Ic = 1, Hc = 2, Fc = 3, Oc = 4, aa = 5, ts = 6, Ni = 7, qc = 8, Rl = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), qu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Wu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((a) => [a[0] * 13 / 11, a[1] * 28 / 24]), Xd = (a, l, o) => {
  let d = !1;
  for (let f = 0, v = a.length - 1; f < a.length; v = f++) {
    const w = a[f], E = a[v];
    w[1] > o != E[1] > o && l < (E[0] - w[0]) * (o - w[1]) / (E[1] - w[1]) + w[0] && (d = !d);
  }
  return d;
};
function Jd(a, { size: l = 90, px: o = 2, oneBit: d = !1, colors: f = ra, ink: v = "#26221e", paper: w = "#fbf9f6", clock: E = 0, idle: x = !1 } = {}) {
  const N = { ...ra, ...f }, ge = Math.sin, oe = Math.PI * 2, Y = Math.max(6, Math.round(l / o)), $ = Y / 90, ne = x ? Math.floor(E / 100) * 100 : 0, Z = x ? ge(oe * ne / 3600) : 0, U = x ? 1.8 * ge(oe * ne / 6400) : 0, q = x ? 0.9 * ge(oe * ne / 4100) : 0, ue = x ? 0.8 * ge(oe * ne / 5200) : 0, ee = ne / 3400 % 1, pe = x && a.bolt.o > 0.5 && (ee < 0.04 || ee > 0.08 && ee < 0.11), X = new Array(Y * Y), A = new Uint8Array(Y * Y), I = (k, _, C, H, fe) => {
    C == null || k < 0 || _ < 0 || k >= Y || _ >= Y || (H >= 1 || H > oa(k + 5, _ + 3)) && (X[_ * Y + k] = C, A[_ * Y + k] = fe);
  }, ie = (k, _, C, H) => {
    for (let fe = Math.max(0, Math.floor(_ - C) - 1); fe <= Math.min(Y - 1, _ + C + 1); fe++) for (let W = Math.max(0, Math.floor(k - C) - 1); W <= Math.min(Y - 1, k + C + 1); W++) H(W, fe, W + 0.5 - k, fe + 0.5 - _);
  }, Ae = a.skyStops || [a.sky], F = a.skyT || 0;
  for (let k = 0; k < Y; k++) {
    const _ = a.night ? ia(1 - (k + 0.5) / (Y * 0.7)) * 0.85 : ia(((k + 0.5) / Y - 0.35) / 0.65) * 0.85;
    for (let C = 0; C < Y; C++) {
      let H = Ae[0];
      if (Ae.length > 1) {
        const fe = F * (Ae.length - 1), W = Math.min(Ae.length - 2, Math.floor(fe));
        H = fe - W > oa(C, k) ? Ae[W + 1] : Ae[W];
      }
      _ > oa(C + 2, k + 5) && (H = a.night ? Jt(H, "#000000", 0.28) : Jt(H, "#ffffff", 0.2)), X[k * Y + C] = pe ? Jt(H, "#ffffff", 0.25) : H;
    }
  }
  if (a.sun.o > 0.01) {
    const k = a.sun.x * $, _ = a.sun.y * $, C = Math.max(1, a.sun.r * $);
    if (x) {
      const H = C * (1.45 + 0.06 * Z), fe = Jt(N.sun, "#ffffff", 0.55);
      if (ie(k, _, H, (W, se, me, ye) => {
        const Ze = Math.sqrt(me * me + ye * ye);
        Ze > C && Ze < H && I(W, se, fe, 0.26 * (1 - (Ze - C) / (H - C)) * a.sun.o, Ou);
      }), a.sun.o > 0.5) {
        const W = Math.floor(ne / 500) % 2, se = Math.max(1, C * 0.22);
        for (let me = 0; me < 8; me++) if (me % 2 === W) for (let ye = C + 1.5; ye < C + 1.5 + se; ye += 0.7) I(Math.floor(k + Math.cos(me * Math.PI / 4) * ye), Math.floor(_ + Math.sin(me * Math.PI / 4) * ye), N.sun, a.sun.o, qc);
      }
    }
    ie(k, _, C, (H, fe, W, se) => {
      if (W * W + se * se > C * C) return;
      const me = ((W * 0.643 + se * 0.766) / C + 1) / 2;
      I(H, fe, ia((me - 0.62) / 0.38) > oa(H, fe) ? N.sunEdge : N.sun, a.sun.o, Ic);
    });
  }
  if (Ec.forEach((k, _) => {
    const C = a.stars[_].o;
    if (C < 0.01) return;
    const H = Math.floor(k[0] * $), fe = Math.floor(k[1] * $), W = x ? (Math.floor(ne / 300) + _ * 3) % 6 : 0;
    if (W === 5) return;
    const se = Math.round(k[2] * $ * (W === 4 ? 0.3 : W < 2 ? 1 : 0.6));
    I(H, fe, N.star, C, Ni);
    for (let me = 1; me <= se; me++) {
      const ye = me === se && se > 1 ? Jt(N.star, a.sky, 0.5) : N.star;
      I(H - me, fe, ye, C, Ni), I(H + me, fe, ye, C, Ni), I(H, fe - me, ye, C, Ni), I(H, fe + me, ye, C, Ni);
    }
  }), a.moon.o > 0.01) {
    const k = Math.max(1.5, a.moon.d * $ * 0.37), _ = a.moon.x * $, C = a.moon.y * $ + (x && ue > 0.4 ? -1 : 0), H = _ + 0.547 * k, fe = C - 0.503 * k, W = 0.82 * k, se = Jt(N.moon, "#ffffff", 0.6);
    ie(_, C, k, (me, ye, Ze, lt) => {
      if (Ze * Ze + lt * lt > k * k) return;
      const Lt = me + 0.5 - H, Mn = ye + 0.5 - fe;
      Lt * Lt + Mn * Mn <= W * W || I(me, ye, ia((lt + k) / (2 * k) * 1.1 - 0.1) > oa(me, ye) ? N.moon : se, a.moon.o, Hc);
    });
  }
  const Ie = Math.max(2, Math.round(15.65 * $)), V = Math.max(1, Math.round(5.87 * $ * 0.5));
  Dc.forEach((k, _) => {
    const C = a.rain[_];
    let H = C.dy, fe = C.o;
    if (fe < 0.01) return;
    if (x) {
      const me = (ne / 950 + _ / 3) % 1;
      H += -5 + me * 14, fe *= me < 0.18 ? me / 0.18 : me > 0.72 ? (1 - me) / 0.28 : 1;
    }
    const W = (k[0] + 3 + U) * $, se = (k[1] + H) * $;
    for (let me = 0; me < Ie; me++) for (let ye = 0; ye < V; ye++) I(Math.floor(W - 0.208 * me) + ye, Math.floor(se) + me, N.rain, fe, Oc);
  });
  const We = Math.max(0, Math.round(7.34 * $ / 2.6));
  if (Rc.forEach((k, _) => {
    const C = a.snow[_];
    let H = C.dy, fe = 0, W = C.o;
    if (W < 0.01) return;
    if (x) {
      const ye = (ne / 3200 + _ / 5) % 1;
      H += -6 + ye * 14, fe = 1.5 * ge(oe * (ye * 1.5 + _ / 5)), W *= ye < 0.2 ? ye / 0.2 : ye > 0.75 ? (1 - ye) / 0.25 : 1;
    }
    const se = Math.floor((k[0] + 3.67 + fe + U) * $), me = Math.floor((k[1] + 3.67 + H) * $);
    I(se, me, N.snow, W, aa);
    for (let ye = 1; ye <= We; ye++)
      I(se - ye, me, N.snow, W, aa), I(se + ye, me, N.snow, W, aa), I(se, me - ye, N.snow, W, aa), I(se, me + ye, N.snow, W, aa), We > 1 && ye < We && (I(se - ye, me - ye, N.snow, W, aa), I(se + ye, me - ye, N.snow, W, aa), I(se - ye, me + ye, N.snow, W, aa), I(se + ye, me + ye, N.snow, W, aa));
  }), a.bolt.o > 0.01)
    if (Y >= 30) {
      const k = 39 + U, _ = 50 + a.bolt.dy;
      for (let C = Math.floor(_ * $); C <= (_ + 28) * $; C++) for (let H = Math.floor(k * $); H <= (k + 13) * $; H++)
        Xd(Wu, (H + 0.5) / $ - k, (C + 0.5) / $ - _) && I(H, C, N.sun, a.bolt.o, ts);
    } else {
      const k = Y / 18, _ = 7, C = 10 + Math.round(a.bolt.dy * 0.2);
      qu.forEach((H, fe) => H.split("").forEach((W, se) => {
        if (W !== "#") return;
        const me = Math.floor((_ + se) * k), ye = Math.floor((C + fe) * k);
        for (let Ze = ye; Ze < Math.max(ye + 1, Math.floor((C + fe + 1) * k)); Ze++) for (let lt = me; lt < Math.max(me + 1, Math.floor((_ + se + 1) * k)); lt++) I(lt, Ze, N.sun, a.bolt.o, ts);
      }));
    }
  if (a.cloud.o > 0.01) {
    const k = Math.max(3, a.cloud.w * $), _ = k * 0.6665, C = (a.cloud.x + U) * $ - k / 2, H = (a.cloud.y + q) * $ - _ / 2, fe = Jt(N.cloudDay, N.cloudNight, Math.round(a.cloud.f * 4) / 4), W = Jt(fe, "#000000", 0.16);
    for (let se = Math.max(0, Math.floor(H) - 1); se <= Math.min(Y - 1, H + _ + 1); se++) for (let me = Math.max(0, Math.floor(C) - 1); me <= Math.min(Y - 1, C + k + 1); me++) {
      const ye = (me + 0.5 - C) / k, Ze = (se + 0.5 - H) / k;
      Rl(ye, Ze) && I(me, se, !Rl(ye, Ze + 1 / k) || ia((Ze - 0.42) / 0.25) * 0.8 > oa(me, se) ? W : fe, a.cloud.o, Fc);
    }
  }
  return Qd(X, A, Y, Y, { oneBit: d, ink: v, paper: w, snowInk: !a.night });
}
function Qd(a, l, o, d, { oneBit: f, ink: v, paper: w, snowInk: E }) {
  const x = new Uint8ClampedArray(o * d * 4), N = _l(v), ge = _l(w);
  for (let oe = 0; oe < d; oe++) for (let Y = 0; Y < o; Y++) {
    const $ = oe * o + Y, ne = l[$];
    if (a[$] == null) continue;
    let Z = _l(a[$]);
    if (f) {
      let U;
      ne === Oc || ne === qc ? U = !0 : ne === aa ? U = E : ne === Ni || ne === ts ? U = !1 : U = Math.round((0.2126 * Z[0] + 0.7152 * Z[1] + 0.0722 * Z[2]) / 255 * 4) / 4 <= oa(Y, oe), (ne === Ic || ne === Hc || ne === Fc || ne === ts) && (Y > 0 && l[$ - 1] !== ne || Y < o - 1 && l[$ + 1] !== ne || oe > 0 && l[$ - o] !== ne || oe < d - 1 && l[$ + o] !== ne) && (U = !0), Z = U ? N : ge;
    }
    x[$ * 4] = Z[0], x[$ * 4 + 1] = Z[1], x[$ * 4 + 2] = Z[2], x[$ * 4 + 3] = 255;
  }
  return { w: o, h: d, data: x };
}
const ju = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, zu = (a) => Hl(a, !1).split("/")[0], uc = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Vu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Gu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Uu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Yu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Zu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Ku = [".##", "##.", ".#.", "#.."];
function eu(a, { width: l, height: o, colors: d, wave: f = 0.38, soft: v = 6, glow: w = 0.6 }) {
  const E = { ...ra, dawn: "#e5a77e", ...d }, x = $d(E), N = l, ge = o, oe = N / 6, Y = oe / 2, $ = Math.PI * 2, ne = a.length ? a : [{ cond: "cloudy", night: !1 }], Z = [...Array(12)].map((ee, pe) => {
    const X = ne[Math.min(pe, ne.length - 1)], A = zu(X.cond), I = pe % 2 === 1;
    return { cond: X.cond, k: A, night: I, sky: x[A][I ? 1 : 0], cover: ju[A] };
  }), U = (ee) => ge * (0.5 - f * Math.cos($ * (ee / oe - 0.25)));
  return { C: E, S: Z, W: N, H: ge, cw: oe, sw: Y, TAU: $, yb: U, side: (ee, pe, X) => {
    const A = (ee ? U(pe) - X : X - U(pe)) / Math.max(3, v * 1.4) + 0.5;
    return A <= 0 ? 0 : A >= 1 ? 1 : A;
  }, glowAt: (ee) => {
    const pe = ((ee / oe - 0.25) % 1 + 1) % 1, X = Math.max(0, Math.min(5, Math.round(ee / oe - 0.25))), A = Math.max(0, Math.min(5, Math.round(ee / oe - 0.75))), I = 1 - (Z[2 * X].cover + Z[2 * A + 1].cover) / 2, ie = Math.sin(Math.PI * Math.min(1, Math.max(0, U(ee) / ge)));
    return { c: pe < 0.5 ? E.dusk : E.dawn, a: w * (0.2 + 0.8 * I) * ie * ie };
  }, soft: v, tw: oe * 0.3, sy: ge / 90 };
}
function tu(a, { clock: l = 0, ambient: o = !1, seed: d = 1 }) {
  const { S: f, sw: v, side: w, C: E, TAU: x, sy: N } = a, ge = l, oe = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return f.forEach((Y, $) => {
    const ne = uc(d * 977 + $ * 131 + 7), Z = ($ + 0.5) * v, U = Y.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[Y.k] : 0;
    for (let q = 0; q < U; q++) {
      const ue = Z + (ne() - 0.5) * v * 1.6, ee = (6 + ne() * 76) * N, pe = ne() < 0.35, X = 1.8 + ne() * 1.6, A = w(!0, ue, ee) * (pe ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(x * ge / 2600 + q * 1.7 + $) : 1);
      A >= 0.03 && oe.stars.push({ x: ue, y: ee, big: pe, size: X, o: A });
    }
    if (!Y.night && (Y.k === "clear" || Y.k === "partly")) {
      const q = Z + (ne() - 0.5) * v * 0.3, ue = Math.min(15, v * 0.29);
      oe.suns.push({ x: q, y: 32 * N, rad: ue, halo: ue * 2.8 * (o ? 1 + 0.07 * Math.sin(x * ge / 3600 + $) : 1) });
    }
    if (Y.night && (Y.k === "clear" || Y.k === "partly")) {
      const q = Math.min(0.78, v * 0.55 / 34), ue = Z - 23 * q + (ne() - 0.5) * v * 0.2;
      oe.moons.push({ x: ue + 23 * q, y: (4 + (o ? 0.8 * Math.sin(x * ge / 5200 + $) : 0)) * N + 23 * q, d: 46 * q });
    }
  }), f.forEach((Y, $) => {
    const ne = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[Y.k];
    if (!ne) return;
    const Z = uc(d * 577 + $ * 71 + 3), U = ($ + 0.5) * v, q = Y.k === "rain" || Y.k === "storm" || Y.night ? E.cloudNight : E.cloudDay, ue = Y.night ? 0.82 : Y.k === "storm" ? 0.75 : 1;
    for (let ee = 0; ee < ne; ee++) {
      const pe = v / 46 * (Y.k === "partly" ? 0.85 : 0.75 + Z() * 0.55), X = U + (Y.k === "partly" ? v * 0.12 : (Z() - 0.5) * v * 1.05), A = (Y.k === "partly" ? 40 : 6 + Z() * 26) * N, I = o ? 2.5 * Math.sin(x * ge / 9e3 + $ * 1.3 + ee * 2.1) : 0, ie = o ? 0.9 * Math.sin(x * ge / 6100 + $ + ee) : 0;
      oe.clouds.push({ x: X - 23 * pe + I, y: A - 15.33 * pe + ie, w: 46 * pe, h: 30.66 * pe, fill: q, o: ue * (ne > 1 && ee === 0 ? 0.85 : 1) });
    }
  }), f.forEach((Y, $) => {
    const ne = uc(d * 313 + $ * 29 + 11), Z = ($ + 0.5) * v, U = Y.cond === "pouring" ? 16 : Y.cond === "rainy" || Y.cond === "hail" ? 9 : Y.cond === "lightning-rainy" ? 12 : Y.cond === "snowy-rainy" ? 5 : 0;
    for (let ue = 0; ue < U; ue++) {
      let ee = Z + (ne() - 0.5) * v * 1.05, pe = 44 + ne() * 36, X = 1;
      if (o) {
        const I = ((pe - 44 + ge * 0.04) % 36 + 36) % 36;
        ee -= 0.21 * (I - (pe - 44)), pe = 44 + I, X = Math.min(1, I / 6, (36 - I) / 6);
      }
      pe *= N;
      const A = w(Y.night, ee, pe) * X;
      A >= 0.05 && oe.drops.push({ x: ee, y: pe, o: A });
    }
    const q = Y.cond === "snowy" ? 11 : Y.cond === "snowy-rainy" ? 6 : 0;
    for (let ue = 0; ue < q; ue++) {
      let ee = Z + (ne() - 0.5) * v * 1.05, pe = 40 + ne() * 44, X = 1;
      if (o) {
        const I = ((pe - 40 + ge * 9e-3) % 44 + 44) % 44;
        pe = 40 + I, ee += 1.6 * Math.sin(x * ge / 2800 + ue * 1.9 + $), X = Math.min(1, I / 6, (44 - I) / 6);
      }
      pe *= N;
      const A = w(Y.night, ee, pe) * X;
      A >= 0.05 && oe.flakes.push({ x: ee, y: pe, o: A });
    }
    if (Y.k === "fog") {
      const ue = Y.night ? "#c8ccd6" : "#ffffff", ee = Y.night ? 0.28 : 0.62, pe = o ? 4 * Math.sin(x * ge / 8e3 + $) : 0;
      for (let X = 0; X < 4; X++) oe.fogs.push({ x: Z - v * 0.75 + X % 2 * v * 0.18 + (X % 2 ? pe : -pe), y: (30 + X * 13) * N, w: v * 1.3, c: ue, a: ee });
    }
    if (Y.k === "storm") {
      const ue = (ge / 3400 + $ * 0.37) % 1;
      oe.bolts.push({ x: Z + (ne() - 0.5) * v * 0.3 - 5, y: 36 * N, o: o && !(ue < 0.05 || ue > 0.09 && ue < 0.12) ? 0.8 : 1 });
    }
  }), oe;
}
function $u(a, l, o, d, f, v, w, E) {
  const { S: x, C: N, cw: ge, yb: oe, glowAt: Y, soft: $, tw: ne, sy: Z } = a, U = new Array(o * d), q = new Uint8Array(o * d), ue = new Uint8Array(o * d), ee = (k, _, C, H, fe) => {
    C == null || k < 0 || _ < 0 || k >= o || _ >= d || (H >= 1 || H > oa(k + 5, _ + 3)) && (U[_ * o + k] = C, q[_ * o + k] = fe);
  }, pe = (k, _, C, H) => {
    for (let fe = Math.max(0, Math.floor(_ - C) - 1); fe <= Math.min(d - 1, _ + C + 1); fe++) for (let W = Math.max(0, Math.floor(k - C) - 1); W <= Math.min(o - 1, k + C + 1); W++) H(W, fe, W + 0.5 - k, fe + 0.5 - _);
  }, X = (k, _, C) => {
    for (let fe = 0; fe < k.length - 1; fe++) {
      const W = (fe + _) * ge;
      if (C < W - ne / 2) return [k[fe], k[fe], 0];
      if (C <= W + ne / 2) return [k[fe], k[fe + 1], (C - W + ne / 2) / ne];
    }
    const H = k[k.length - 1];
    return [H, H, 0];
  }, A = x.filter((k) => !k.night).map((k) => k.sky), I = x.filter((k) => k.night).map((k) => k.sky), ie = $ / v, Ae = 16 * Z / v;
  for (let k = 0; k < o; k++) {
    const _ = (k + 0.5) * f, C = oe(_) / v, H = X(A, 0.75, _), fe = X(I, 1.25, _), W = Y(_);
    for (let se = 0; se < d; se++) {
      const me = oa(k, se), ye = se + 0.5 - C, Ze = (ie > 0.01 ? ia(0.5 + ye / ie) : ye > 0 ? 1 : 0) > me;
      let lt = Ze ? H[2] > me ? H[1] : H[0] : fe[2] > me ? fe[1] : fe[0];
      (Ze ? ia(((se + 0.5) / d - 0.45) / 0.55) * 0.7 : ia(1 - (se + 0.5) / (d * 0.55)) * 0.7) > oa(k + 2, se + 5) && (lt = Ze ? Jt(lt, "#ffffff", 0.18) : Jt(lt, "#000000", 0.25)), Ze && ye >= 0 && ye < Ae && W.a * 1.3 * (1 - ye / Ae) > oa(k + 6, se + 1) && (lt = W.c), U[se * o + k] = lt, ue[se * o + k] = Ze ? 0 : 1;
    }
  }
  const F = Jt(N.sun, "#ffffff", 0.55), Ie = Jt(N.moon, "#ffffff", 0.6);
  l.stars.forEach((k) => {
    const _ = Math.floor(k.x / f), C = Math.floor(k.y / v);
    if (_ < 0 || C < 0 || _ >= o || C >= d || !ue[C * o + _] || k.o < 0.15) return;
    const H = k.o > 0.45 ? N.star : Jt(N.star, U[C * o + _], 0.5), fe = k.big && k.o > 0.6 ? Math.floor(k.size / f) : 0;
    ee(_, C, H, 1, Ni);
    for (let W = 1; W <= fe; W++) [[_ - W, C], [_ + W, C], [_, C - W], [_, C + W]].forEach((se) => {
      se[0] >= 0 && se[1] >= 0 && se[0] < o && se[1] < d && ue[se[1] * o + se[0]] && ee(se[0], se[1], H, 1, Ni);
    });
  }), l.suns.forEach((k) => {
    const _ = Math.max(1.5, k.rad / f), C = k.x / f, H = k.y / v, fe = k.halo / f * 0.85;
    if (pe(C, H, fe, (W, se, me, ye) => {
      const Ze = Math.sqrt(me * me + ye * ye);
      Ze > _ && Ze < fe && !ue[se * o + W] && ee(W, se, F, 0.3 * (1 - (Ze - _) / (fe - _)), 0);
    }), E) {
      const W = Math.floor(w / 500) % 2, se = Math.max(1, _ * 0.3);
      for (let me = 0; me < 8; me++) if (me % 2 === W) for (let ye = _ + 1.2; ye < _ + 1.2 + se; ye += 0.7) ee(Math.floor(C + Math.cos(me * Math.PI / 4) * ye), Math.floor(H + Math.sin(me * Math.PI / 4) * ye), N.sun, 1, qc);
    }
    pe(C, H, _, (W, se, me, ye) => {
      me * me + ye * ye <= _ * _ && ee(W, se, ia(((ye / _ + 1) / 2 - 0.6) / 0.4) > oa(W, se) ? N.sunEdge : N.sun, 1, Ic);
    });
  }), l.moons.forEach((k) => {
    const _ = Math.max(1.5, k.d * 0.37 / f), C = k.x / f, H = k.y / v, fe = C + 0.547 * _, W = H - 0.503 * _, se = 0.82 * _;
    pe(C, H, _, (me, ye, Ze, lt) => {
      if (Ze * Ze + lt * lt > _ * _) return;
      const Lt = me + 0.5 - fe, Mn = ye + 0.5 - W;
      Lt * Lt + Mn * Mn > se * se && ee(me, ye, ia((lt + _) / (2 * _) * 1.1 - 0.1) > oa(me, ye) ? N.moon : Ie, 1, Hc);
    });
  }), l.clouds.forEach((k) => {
    const _ = Math.max(3, k.w / f), C = _ * 0.6665, H = k.x / f, fe = k.y / v, W = Jt(k.fill, "#000000", 0.16);
    for (let se = Math.max(0, Math.floor(fe) - 1); se <= Math.min(d - 1, fe + C + 1); se++) for (let me = Math.max(0, Math.floor(H) - 1); me <= Math.min(o - 1, H + _ + 1); me++) {
      const ye = (me + 0.5 - H) / _, Ze = (se + 0.5 - fe) / _;
      Rl(ye, Ze) && ee(me, se, !Rl(ye, Ze + 1 / _) || ia((Ze - 0.42) / 0.25) * 0.8 > oa(me, se) ? W : k.fill, k.o, Fc);
    }
  }), l.fogs.forEach((k) => {
    const _ = Math.floor(k.y / v), C = Math.max(_, Math.floor((k.y + 6 * Z) / v) - 1), H = Math.floor(k.x / f), fe = Math.floor((k.x + k.w) / f);
    for (let W = _; W <= C; W++) for (let se = H; se <= fe; se++) {
      const me = (se - H) / Math.max(1, fe - H);
      ee(se, W, k.c, k.a * (me < 0.25 ? me / 0.25 : me > 0.75 ? (1 - me) / 0.25 : 1), 0);
    }
  });
  const V = Math.max(2, Math.round(9 / v));
  l.drops.forEach((k) => {
    const _ = k.x / f, C = Math.floor(k.y / v);
    for (let H = 0; H < V; H++) ee(Math.floor(_ - 0.208 * H * v / f), C + H, N.rain, k.o, Oc);
  });
  const We = Math.max(0, Math.round(4.4 / f / 2.6));
  return l.flakes.forEach((k) => {
    const _ = Math.floor(k.x / f), C = Math.floor(k.y / v);
    ee(_, C, N.snow, k.o, aa);
    for (let H = 1; H <= We; H++)
      ee(_ - H, C, N.snow, k.o, aa), ee(_ + H, C, N.snow, k.o, aa), ee(_, C - H, N.snow, k.o, aa), ee(_, C + H, N.snow, k.o, aa);
  }), l.bolts.forEach((k) => {
    if (f <= 3.5)
      for (let _ = Math.floor(k.y / v); _ <= (k.y + 24) / v; _++) for (let C = Math.floor(k.x / f); C <= (k.x + 11) / f; C++)
        Xd(Zu, (C + 0.5) * f - k.x, (_ + 0.5) * v - k.y) && ee(C, _, N.sun, 1, ts);
    else {
      const _ = Math.round(k.x / f), C = Math.round(k.y / v);
      Ku.forEach((H, fe) => H.split("").forEach((W, se) => {
        W === "#" && ee(_ + se, C + fe, N.sun, 1, ts);
      }));
    }
  }), { col: U, ids: q };
}
function Xu(a, l) {
  const o = l.px, d = Math.max(6, Math.round(l.width / o)), f = Math.max(6, Math.round(l.height / o)), v = l.width / d, w = l.height / f, E = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, x = ($) => {
    const ne = eu($, l);
    return $u(ne, tu(ne, { clock: E, ambient: l.ambient, seed: l.seed }), d, f, v, w, E, l.ambient);
  }, N = x(a), ge = l.reveal == null ? 1 : ia(l.reveal);
  let oe = N.col, Y = N.ids;
  if (ge < 1) {
    const $ = l.prev ? x(l.prev) : null, ne = ge * (d + 12);
    oe = new Array(d * f), Y = new Uint8Array(d * f);
    for (let Z = 0; Z < d * f; Z++) {
      const U = Z % d, q = Z / d | 0;
      (l.reduce ? ge : ia((ne - U) / 12)) > oa(U, q) ? (oe[Z] = N.col[Z], Y[Z] = N.ids[Z]) : $ ? (oe[Z] = $.col[Z], Y[Z] = $.ids[Z]) : (oe[Z] = null, Y[Z] = 255);
    }
  }
  return Qd(oe, Y, d, f, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function Ju(a, l, o) {
  const d = o.width, f = o.height, v = o.reveal == null ? 1 : ia(o.reveal), w = (Y, $) => {
    const ne = eu($, o);
    Qu(Y, ne, tu(ne, o));
  };
  if (a.clearRect(0, 0, d, f), v >= 1) {
    w(a, l);
    return;
  }
  if (o.prev && w(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = v, w(a, l), a.restore();
    return;
  }
  const E = a.canvas, x = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (x.width !== E.width || x.height !== E.height) && (x.width = E.width, x.height = E.height);
  const N = x.getContext("2d");
  N.setTransform(a.getTransform()), N.clearRect(0, 0, d, f), w(N, l);
  const ge = v * (d + 64) - 64, oe = N.createLinearGradient(ge, 0, ge + 64, 0);
  oe.addColorStop(0, "rgba(0,0,0,1)"), oe.addColorStop(1, "rgba(0,0,0,0)"), N.globalCompositeOperation = "destination-in", N.fillStyle = oe, N.fillRect(0, 0, d, f), N.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(x, 0, 0), a.restore();
}
function Qu(a, l, o) {
  const { W: d, H: f, S: v, C: w, cw: E, yb: x, glowAt: N, soft: ge, tw: oe, sy: Y } = l, $ = (F, Ie) => {
    const V = _l(F);
    return "rgba(" + V[0] + "," + V[1] + "," + V[2] + "," + Math.max(0, Math.min(1, Ie)).toFixed(3) + ")";
  }, ne = (F, Ie) => {
    const V = a.createLinearGradient(0, 0, d, 0);
    V.addColorStop(0, F[0]);
    for (let We = 0; We < F.length - 1; We++) {
      const k = (We + Ie) * E, _ = (k - oe / 2) / d, C = (k + oe / 2) / d;
      _ > 0 && _ < 1 && V.addColorStop(_, F[We]), C > 0 && C < 1 && V.addColorStop(C, F[We + 1]);
    }
    return V.addColorStop(1, F[F.length - 1]), V;
  }, Z = Math.max(24, Math.ceil(d / 4)), U = (F, Ie) => {
    a.beginPath();
    for (let V = 0; V <= Z; V++) {
      const We = d * V / Z, k = F == null ? 0 : x(We) + F;
      V ? a.lineTo(We, k) : a.moveTo(We, k);
    }
    for (let V = Z; V >= 0; V--) {
      const We = d * V / Z;
      a.lineTo(We, x(We) + Ie);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = ne(v.filter((F) => !F.night).map((F) => F.sky), 0.75), a.fillRect(0, 0, d, f);
  const q = a.createLinearGradient(0, 0, d, 0);
  for (let F = 0; F <= 64; F++) {
    const Ie = N(d * F / 64);
    q.addColorStop(F / 64, $(Ie.c, Math.min(1, Ie.a)));
  }
  a.fillStyle = q;
  for (let F = 0; F < 8; F++)
    a.globalAlpha = 1 - F / 8, U(F * 2 * Y, (F + 1) * 2 * Y);
  a.fillStyle = ne(v.filter((F) => F.night).map((F) => F.sky), 1.25);
  const ue = Math.max(0.5, ge), ee = 6;
  a.globalAlpha = 1, U(null, -ue);
  for (let F = 0; F < ee; F++)
    a.globalAlpha = 1 - (F + 0.5) / ee, U(-ue + 2 * ue * F / ee, -ue + 2 * ue * (F + 1) / ee);
  a.globalAlpha = 1;
  const pe = new Path2D(Uu), X = new Path2D(Gu), A = new Path2D(Vu), I = new Path2D(Yu);
  a.fillStyle = w.star, o.stars.forEach((F) => {
    a.globalAlpha = F.o, F.big ? (a.save(), a.translate(F.x, F.y), a.scale(F.size, F.size), a.fill(pe), a.restore()) : (a.beginPath(), a.arc(F.x, F.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const ie = Jt(w.sun, "#ffffff", 0.55);
  o.suns.forEach((F) => {
    const Ie = a.createRadialGradient(F.x, F.y, 0, F.x, F.y, F.halo);
    Ie.addColorStop(0, $(ie, 0.42)), Ie.addColorStop(0.7, $(ie, 0)), a.fillStyle = Ie, a.beginPath(), a.arc(F.x, F.y, F.halo, 0, Math.PI * 2), a.fill();
    const V = a.createLinearGradient(0, F.y - F.rad, 0, F.y + F.rad);
    V.addColorStop(0.6, w.sun), V.addColorStop(1, w.sunEdge), a.fillStyle = V, a.beginPath(), a.arc(F.x, F.y, F.rad, 0, Math.PI * 2), a.fill();
  });
  const Ae = Jt(w.moon, "#ffffff", 0.6);
  o.moons.forEach((F) => {
    a.save(), a.translate(F.x - F.d / 2, F.y - F.d / 2), a.scale(F.d / 46, F.d / 46);
    const Ie = a.createLinearGradient(0, 6, 0, 40);
    Ie.addColorStop(0, Ae), Ie.addColorStop(1, w.moon), a.fillStyle = Ie, a.fill(X), a.restore();
  }), o.clouds.forEach((F) => {
    a.save(), a.globalAlpha = F.o, a.translate(F.x, F.y), a.scale(F.w / 46, F.h / 30.66), a.translate(-4, -9.67), a.fillStyle = F.fill, a.fill(A), a.restore();
  }), o.fogs.forEach((F) => {
    const Ie = a.createLinearGradient(F.x, 0, F.x + F.w, 0);
    Ie.addColorStop(0, $(F.c, 0)), Ie.addColorStop(0.25, $(F.c, F.a)), Ie.addColorStop(0.75, $(F.c, F.a)), Ie.addColorStop(1, $(F.c, 0)), a.fillStyle = Ie, a.fillRect(F.x, F.y, F.w, 6 * Y);
  }), a.fillStyle = w.rain, o.drops.forEach((F) => {
    a.save(), a.globalAlpha = F.o, a.translate(F.x, F.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = w.snow, o.flakes.forEach((F) => {
    a.globalAlpha = F.o, a.beginPath(), a.arc(F.x, F.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = w.sun, o.bolts.forEach((F) => {
    a.save(), a.globalAlpha = F.o, a.translate(F.x, F.y), a.fill(I), a.restore();
  }), a.restore();
}
function ep(a, l) {
  var Yc, Zc, Kc, $c, Xc, Jc, Qc;
  const o = (t) => a.getElementById(t), d = o("workoutView"), f = o("workoutNameInput");
  let v = !0;
  const w = o("homeClock");
  function E() {
    w && (w.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  E(), setInterval(E, 15e3);
  const x = o("createFlow"), N = o("createMovementsSlot"), ge = o("createTimingSlot"), oe = o("createFinishSlot"), Y = o("movementStepSummary"), $ = o("timingStepSummary"), ne = o("finishStepSummary"), Z = o("continueToTiming"), U = o("continueToFinish"), q = o("finishMoveButton");
  let ue = !1, ee = [];
  function pe(t) {
    !t || ee.some((r) => r.node === t) || ee.push({ node: t, parent: t.parentNode, next: t.nextSibling });
  }
  function X(t, r) {
    t && (pe(t), r.appendChild(t));
  }
  function A() {
    [...ee].reverse().forEach(({ node: t, parent: r, next: s }) => {
      r && (s && s.parentNode === r ? r.insertBefore(t, s) : r.appendChild(t));
    }), ee = [];
  }
  function I(t) {
    a.querySelectorAll(".createStep").forEach((r) => {
      r.classList.toggle("active", r.dataset.createStep === t);
    }), t === "timing" && (ue = !0), ie();
  }
  function ie() {
    var le, he;
    if (!ke) return;
    Ye[bt];
    const t = $e.filter((ae) => !ae.hidden), r = t.filter((ae) => ae.kind !== "rest").length, s = t.filter((ae) => ae.kind === "rest").length;
    Y.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const u = r > 0, m = a.querySelector('[data-open-step="timing"]'), T = a.querySelector('[data-open-step="finish"]');
    m.disabled = !u, Z.disabled = !u, $.textContent = u ? za(_.value) + " · " + Wt(C.value) + " movement · " + Wt(H.value) + " rest" : "Add a movement first", T.disabled = !(u && ue);
    const P = ((f == null ? void 0 : f.value) || "").trim(), z = [];
    (le = o("includeWarmupPreset")) != null && le.checked && z.push("warm-up"), (he = o("includeCooldownPreset")) != null && he.checked && z.push("cooldown"), ne.textContent = P ? P + (z.length ? " · " + z.join(" + ") : "") : z.length ? z.join(" + ") : "Name and optional extras";
  }
  function Ae() {
    var De, Je, qe;
    x.hidden = !1, ue = !1;
    const t = a.querySelector(".editNameRow"), r = o("createMoveOptions"), s = a.querySelector(".timeTiles"), u = o("routineSummaryModal"), m = a.querySelector(".tempoRevealRow"), T = o("tempoExperiment"), P = (De = o("warmupList")) == null ? void 0 : De.closest("section"), z = o("movementCreatorLaunch"), le = o("movementCreator"), he = (Je = o("strengthList")) == null ? void 0 : Je.closest("section"), ae = (qe = o("cooldownList")) == null ? void 0 : qe.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), P, z, le, he, ae].forEach((Ee) => Ee && X(Ee, N)), [r, s, u, m, T].forEach((Ee) => X(Ee, ge)), X(t, oe), I("movements"), ie();
  }
  function F() {
    A(), x.hidden = !0, a.querySelectorAll(".createStep").forEach((t) => t.classList.remove("active"));
  }
  a.querySelectorAll("[data-open-step]").forEach((t) => t.addEventListener("click", () => {
    t.disabled || I(t.dataset.openStep);
  })), Z.addEventListener("click", () => {
    Z.disabled || I("timing");
  }), U.addEventListener("click", () => I("finish")), q.addEventListener("click", () => o("saveWorkoutEdit").click());
  const Ie = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, V = o("homeNav"), We = o("settingsNav");
  function k(t) {
    Object.entries(Ie).forEach(([r, s]) => s.classList.toggle("active", r === t)), V.classList.toggle("active", t === "home"), We.classList.toggle("active", t === "settings"), t === "home" && setTimeout(Do, 400), t === "settings" && (requestAnimationFrame(() => Mi(a.querySelector(".tab.active"), !1)), Ci());
  }
  const _ = o("totalTime"), C = o("workTime"), H = o("restTime"), fe = o("totalOut"), W = o("workOut"), se = o("restOut"), me = o("totalFill"), ye = o("workFill"), Ze = o("restFill"), lt = o("roundsInput"), Lt = o("roundsFill"), Mn = o("roundsOut"), On = o("totalLabel"), mt = o("routineSummaryModal"), Ke = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Ct = Ke.map((t) => ({ ...t })), $e = [
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
  const yn = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let An = yn.map((t) => ({ ...t }));
  const ur = {
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
  }, ht = ko(l.data), Ye = ht.profiles;
  let bt = Ye[ht.selected] ? ht.selected : ht.order.find((t) => Ye[t]) || "kettlebell";
  function ko(t) {
    const r = t && typeof t == "object" ? JSON.parse(JSON.stringify(t)) : {}, s = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(ur)), u = (Array.isArray(r.order) ? r.order : Object.keys(s)).filter((m) => s[m]);
    return Object.keys(s).forEach((m) => {
      u.includes(m) || u.push(m);
    }), {
      v: 1,
      profiles: s,
      order: u,
      selected: r.selected || u[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : pr(r.energy)).map(Bi),
      settings: { ...r.settings || {} }
    };
  }
  function pr(t) {
    if (!Array.isArray(t)) return [];
    const r = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return t.forEach((u) => {
      const m = new Date(u.at);
      if (isNaN(m)) return;
      const T = m.getFullYear() + "-" + String(m.getMonth() + 1).padStart(2, "0") + "-" + String(m.getDate()).padStart(2, "0"), P = m.getHours() < 14 ? "morning" : "evening";
      if (s.some((le) => le.date === T && le.slot === P)) return;
      const z = r.indexOf(u.value) + 1;
      z > 0 && s.push({ date: T, slot: P, mood: null, energy: z, at: u.at });
    }), s;
  }
  function Bi(t) {
    if (t.scale === 100) return t;
    const r = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...t, mood: r(t.mood), energy: r(t.energy), scale: 100 };
  }
  function Sn() {
    ke || (ht.selected = bt, ht.order = ht.order.filter((t) => Ye[t] && t !== Ht), l.save(ht));
  }
  function pt() {
    return ht.settings;
  }
  function It(t) {
    const r = Ye[t];
    if (!r) return;
    bt = t;
    const s = o("workoutNameInput");
    if (s && (s.value = r.name), _.value = r.total, C.value = r.work, H.value = r.rest, lt.value = r.rounds || 1, r.customSequence) {
      const u = (r.sequence || []).map((T) => ({ ...T })), m = (T) => u.filter((P) => P.presetRole === T).map(({ presetRole: P, ...z }) => z);
      Ct = (r.warmup || m("warmup")).map((T) => ({ ...T })), An = (r.cooldown || m("cooldown")).map((T) => ({ ...T })), $e = u.filter((T) => !T.presetRole), Jo(r.preset || "movement", !1);
    } else
      _.min = 3, _.max = 40, _.step = 1, C.min = 20, C.max = 60, C.step = 5, H.min = 5, H.max = 30, H.step = 5, Ct = (r.warmup || Ke).map((u) => ({ ...u })), An = (r.cooldown || yn).map((u) => ({ ...u })), $e = r.strength.map((u) => Array.isArray(u) ? (([m, T, P, z = !1]) => ({ id: m, name: T, group: P, kind: "work", hidden: !!z }))(u) : { ...u });
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === t)), yt();
  }
  function hr(t, r, s) {
    const u = t.getBoundingClientRect(), m = u.width / 2, T = u.height / 2, P = r - m, z = s - T;
    let le = 1 / 0, he = 1 / 0;
    P !== 0 && (le = m / Math.abs(P)), z !== 0 && (he = T / Math.abs(z));
    const ae = Math.min(Math.max(1 / Math.min(le, he), 0), 1);
    let te = Math.atan2(z, P) * (180 / Math.PI) + 90;
    return te < 0 && (te += 360), { edge: ae, angle: te };
  }
  function $o(t, r, s = !1) {
    const u = t.getBoundingClientRect(), m = r.clientX - u.left, T = r.clientY - u.top, { edge: P, angle: z } = hr(t, m, T), le = s ? 100 : P * 100;
    t.style.setProperty("--edge-proximity", le.toFixed(3)), t.style.setProperty("--cursor-angle", z.toFixed(3) + "deg"), t.classList.toggle("borderGlowActive", s || le >= 30);
  }
  function wt(t) {
    t.addEventListener("pointermove", (s) => $o(t, s, !1)), t.addEventListener("pointerenter", (s) => $o(t, s, !1)), t.addEventListener("pointerdown", (s) => $o(t, s, !0));
    const r = () => {
      t.classList.remove("borderGlowActive"), t.style.setProperty("--edge-proximity", "0");
    };
    t.addEventListener("pointerleave", r), t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r);
  }
  wt(o("addWorkoutPanel"));
  let ke = !1, Ht = null;
  function Oe(t) {
    return String(t ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function qn(t) {
    return t.summary ? t.summary : t.customSequence ? za(t.total) + " · custom move" : za(t.total) + " · " + Wt(t.work) + " / " + Wt(t.rest) + " · warm-up + cooldown";
  }
  function Wa(t, r) {
    var T;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = t, s.tabIndex = 0;
    const u = r.activityCount ?? (((T = r.sequence) == null ? void 0 : T.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Oe(r.name) + '</div><div class="sub">' + Oe(qn(r)) + '</div><span class="sourceTag">' + Oe(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (u ? u + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Oe(r.name) + "</div></div>";
    const m = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(s, m), wt(s), s.addEventListener("click", (P) => {
      P.target.closest("button") || It(t);
    }), s.addEventListener("keydown", (P) => {
      (P.key === "Enter" || P.key === " ") && !P.target.closest("button") && (P.preventDefault(), It(t));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (P) => {
      P.stopPropagation(), It(t), Gi(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (P) => {
      P.stopPropagation(), It(t), wi();
    }), s;
  }
  function Pi() {
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.remove()), ht.order.forEach((t) => {
      Ye[t] && Wa(t, Ye[t]);
    }), a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.classList.toggle("active", t.dataset.workout === bt));
  }
  Pi(), o("addWorkoutPanel").addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && (t.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    ke = !0, Ht = "custom-" + Date.now(), Ye[Ht] = {
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
    }, It(Ht), Gi(!0);
  });
  let Ge = [], ot = 0, Qt = 0, Mo = 1, Wn = !1, en = null, Xo = null, ln = !1, La = ht.settings.upcomingCount ?? "all", ja = "movement";
  function So(t, r, s) {
    return (Number(t) - r) / (s - r) * 100;
  }
  function Wt(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function za(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function jn() {
    me.style.width = So(_.value, Number(_.min), Number(_.max)) + "%", ye.style.width = So(C.value, Number(C.min), Number(C.max)) + "%", Ze.style.width = So(H.value, Number(H.min), Number(H.max)) + "%", W.textContent = Wt(C.value), se.textContent = Wt(H.value);
    const t = Number(lt.value) || 1;
    Lt.style.width = So(t, 1, 10) + "%", On.textContent = t > 1 ? "Time per round" : "Total time";
  }
  function Va(t) {
    return t.filter((r) => !r.hidden);
  }
  function ro(t) {
    const r = Math.max(0, Math.round(Number(t) || 0)), s = Math.floor(r / 3600), u = Math.floor(r % 3600 / 60), m = r % 60;
    return (s ? s + ":" + String(u).padStart(2, "0") : u) + ":" + String(m).padStart(2, "0");
  }
  function on(t) {
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
    const m = (z) => {
      if (!z) return 0;
      if (/^\d+$/.test(z)) return Number(z);
      const le = z.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return le ? (Number(le[1]) || 0) * 3600 + (Number(le[2]) || 0) * 60 + (Number(le[3]) || 0) : 0;
    }, T = m(r.searchParams.get("t") || r.searchParams.get("start")), P = m(r.searchParams.get("end"));
    return { id: u, start: T, end: P > T ? P : null };
  }
  function Ga(t, r) {
    if (t.useVideoLength === !1) return Math.max(5, Number(t.duration) || r || 300);
    const s = Number(t.start) || 0, u = Number(t.end) || Number(t.videoDuration) || 0;
    return u > s ? Math.round(u - s) : Number(t.duration) || 300;
  }
  function sa(t, r) {
    const s = Math.max(0, Number(t) || 0);
    return Math.round(r === "hour" ? s * 3600 : r === "min" ? s * 60 : s);
  }
  function Jo(t, r = !0) {
    ja = t, a.querySelectorAll(".createPresetBtn").forEach((u) => u.classList.toggle("active", u.dataset.movePreset === t));
    const s = Ye[bt];
    s && (s.preset = t), t === "work" ? (_.min = 30, _.max = 480, _.step = 30, C.min = 300, C.max = 7200, C.step = 300, H.min = 60, H.max = 1800, H.step = 60, r && (_.value = 60, C.value = 1500, H.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (_.min = 3, _.max = 40, _.step = 1, C.min = 20, C.max = 60, C.step = 5, H.min = 5, H.max = 30, H.step = 5, r && (_.value = 20, C.value = 45, H.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), jn();
  }
  function Ii(t, r) {
    const s = ja === "work";
    return t.map((u, m) => ({ ...u, id: r + "-" + m + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(C.value) }));
  }
  function Hi() {
    const t = Ye[bt];
    t != null && t.customSequence && (t.includeWarmup = o("includeWarmupPreset").checked, t.includeCooldown = o("includeCooldownPreset").checked, t.includeWarmup && !Ct.length && (Ct = Ii(Ke, "warm")), t.includeCooldown && !An.length && (An = Ii(yn, "cool")), yt());
  }
  function ns() {
    const t = o("upcomingCountSetting");
    if (!t) return;
    const r = Math.max(1, Ge.length - 1), s = La;
    t.innerHTML = "";
    for (let T = 1; T <= r; T++) {
      const P = document.createElement("option");
      P.value = String(T), P.textContent = String(T), t.appendChild(P);
    }
    const u = document.createElement("option");
    u.value = "all", u.textContent = "All", t.appendChild(u);
    const m = s === "all" ? "all" : String(Math.min(Number(s) || 1, r));
    t.value = m, La = m === "all" ? "all" : Number(m);
  }
  function yt() {
    Number(_.value) * 60;
    const t = Number(C.value), r = Number(H.value), s = Ye[bt], u = !!(s != null && s.customSequence), m = (u ? !s.includeWarmup : s != null && s.warmupOff) ? [] : Va(Ct), T = Va($e), P = u && !s.includeCooldown ? [] : Va(An);
    if (s && (s.total = Number(_.value), s.work = t, s.rest = r, s.rounds = Number(lt.value) || 1, s.customSequence ? (s.sequence = $e.map((Le) => ({ ...Le })), s.warmup = Ct.map((Le) => ({ ...Le })), s.cooldown = An.map((Le) => ({ ...Le }))) : (s.strength = $e.map((Le) => ({ ...Le })), s.warmup = Ct.map((Le) => ({ ...Le })), s.cooldown = An.map((Le) => ({ ...Le })))), s != null && s.customSequence) {
      const Le = [...m.map((ct) => ({ ...ct, section: "warmup" })), ...T, ...P.map((ct) => ({ ...ct, section: "cooldown" }))].map((ct) => {
        if (ct.kind === "video") return { ...ct, duration: Ga(ct, t), rest: 0 };
        if (ct.kind === "rest") {
          const gn = ct.useGlobalTiming === !0 ? r : Number(ct.duration) || r;
          return { ...ct, duration: gn, rest: 0 };
        }
        const mn = ct.useGlobalTiming === !1 && Number(ct.duration) || t;
        return { ...ct, duration: mn, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Ge = [], Le.forEach((ct, mn) => {
        Ge.push(ct);
        const gn = Le[mn + 1];
        ct.kind !== "rest" && gn && gn.kind !== "rest" && Ge.push({
          id: "auto-rest-" + mn,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Ge = Le;
    } else
      Ge = [...m.map((Le) => ({ ...Le, section: "warmup" })), ...T, ...P.map((Le) => ({ ...Le, section: "cooldown" }))].map((Le) => Le.kind === "video" ? { ...Le, duration: Ga(Le, t), rest: 0 } : Le.kind === "rest" ? { ...Le, duration: Le.useGlobalTiming === !0 ? r : Number(Le.duration) || r, rest: 0 } : { ...Le, duration: Le.useGlobalTiming === !1 && Number(Le.duration) || t, rest: r }), Ge.forEach((Le, ct) => {
        var mn;
        ((mn = Ge[ct + 1]) == null ? void 0 : mn.kind) === "rest" && (Le.rest = 0);
      }), Ge.length && (Ge[Ge.length - 1].rest = 0);
    const z = Math.max(1, Math.min(10, Number(lt.value) || 1)), le = Ge, he = (Le) => z <= 1 ? null : Le.section === "warmup" || Le.presetRole === "warmup" ? "first" : Le.section === "cooldown" || Le.presetRole === "cooldown" ? "last" : Le.kind === "video" && (Le.videoRounds === "first" || Le.videoRounds === "last") ? Le.videoRounds : null, ae = (Le) => !!he(Le), te = le.filter((Le) => !ae(Le)), De = le.filter(ae), Je = te.length, qe = te.reduce((Le, ct) => Le + ct.duration + ct.rest, 0), Ee = De.reduce((Le, ct) => Le + ct.duration + ct.rest, 0), Se = [
      De.some((Le) => Le.section === "warmup" || Le.presetRole === "warmup") && "warm-up",
      De.some((Le) => Le.section === "cooldown" || Le.presetRole === "cooldown") && "cooldown",
      De.some((Le) => Le.kind === "video" && !Le.section && !Le.presetRole) && "video"
    ].filter(Boolean), ft = Se.length > 1 ? Se.slice(0, -1).join(", ") + " & " + Se[Se.length - 1] : Se[0] || "";
    Ge = [];
    const gt = (Le, ct) => {
      const mn = he(Le);
      return !mn || (mn === "first" ? ct === 1 : ct === z);
    };
    for (let Le = 1; Le <= z; Le++)
      if (le.filter((ct) => gt(ct, Le)).forEach((ct, mn) => Ge.push({ ...ct, id: ct.id + (z > 1 ? "-r" + Le : ""), round: Le, roundIndex: mn })), Le < z && Je)
        if (s != null && s.customSequence)
          Ge.push({ id: "round-break-" + Le, name: "Rest", group: "Round " + (Le + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: Le, roundIndex: Je, roundBreak: !0 });
        else {
          const ct = Ge[Ge.length - 1];
          ct.rest = r, ct.roundBreakAfter = !0;
        }
    jn();
    const je = Ge.reduce((Le, ct) => Le + ct.duration + ct.rest, 0), vt = Math.round(qe / 60), At = Math.round(je / 60), st = z > 1 ? za(vt) + " × " + z + " rounds" + (Ee ? " + " + Wt(Ee) + " " + ft : "") + " (" + za(At) + ")" : za(At), at = [m.length ? "warm-up" : "", P.length ? "cooldown" : ""].filter(Boolean), un = s != null && s.customSequence ? st + " · " + Je + " items" + (at.length && !(z > 1 && Ee) ? " · " + at.join(" + ") : "") : st + " · " + Wt(t) + " / " + Wt(r) + (at.length && !(z > 1 && Ee) ? " · " + at.join(" + ") : "");
    fe.textContent = Wt(qe);
    const Ln = Ge.filter((Le) => !Le.roundBreak).length, Vt = z > 1 ? Ln + " activities · " + z + " rounds" : Je + " activities";
    Mn.textContent = z > 1 ? z + " rounds · " + za(At) + " total" : "1 round", o("roundsCount").textContent = z, a.querySelectorAll("[data-rounds-step]").forEach((Le) => {
      Le.disabled = Number(Le.dataset.roundsStep) < 0 ? z <= 1 : z >= 10;
    }), s && (s.summary = un, s.activityCount = Je);
    const Ai = a.querySelector(".workoutPanel.active .sub");
    Ai && (Ai.textContent = un), mt.textContent = un, Pe(), a.querySelectorAll(".workoutPanel.active .activityCount").forEach((Le) => Le.textContent = Vt), jn(), ei(), da(), _a(), ns(), ke && ie(), Ie.workout.classList.contains("active") && !en && vs();
  }
  const zn = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', Fi = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', Oi = {
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
  }, _n = (t) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Oi[t] || "") + "</svg>";
  a.querySelectorAll("[data-icon]").forEach((t) => {
    t.innerHTML = _n(t.dataset.icon);
  });
  let Et = null, rn = null;
  function Mt(t) {
    return t = Math.max(1, Number(t) || 0), t >= 3600 && t % 3600 === 0 ? { value: t / 3600, unit: "hour" } : t >= 60 && t % 60 === 0 ? { value: t / 60, unit: "min" } : { value: t, unit: "sec" };
  }
  function so(t = !1) {
    const r = a.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), t && r.select());
  }
  function Aa(t, r, s = {}) {
    const u = t.kind === "rest", m = t.kind === "video", T = m ? t.useVideoLength !== !1 : u ? t.useGlobalTiming === !0 : t.useGlobalTiming !== !1, P = Number(u ? H.value : C.value), z = Mt(m ? t.useVideoLength === !1 ? t.duration : Ga({ ...t, useVideoLength: !0 }) : T ? P : t.duration || P), le = m && (Number(t.videoDuration) > 0 || Number(t.end) > 0), he = m ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Oe(t.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Oe(t.autoName ? "" : t.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([je, vt]) => '<option value="' + je + '"' + ((t.videoRounds || "every") === je ? " selected" : "") + ">" + vt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Oe(t.name) + '" placeholder="' + (u ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Oe(t.group) + '" placeholder="' + (u ? "Rest" : "e.g. Glutes + legs") + '"></label>', ae = m ? "Play the whole " + (Number(t.start) > 0 || Number(t.end) > 0 ? "clip" : "video") + (le ? " · " + ro(Ga({ ...t, useVideoLength: !0 })) : "") : "Use global timing · " + Wt(P), te = document.createElement("div");
    te.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), te.dataset.index = r, te.dataset.id = t.id;
    const De = s.isNew ?? (rn == null ? void 0 : rn.item) === t, Je = s.sheet ? '<div class="moveEditActions sheetActions">' + (De ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (t.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Oe(t.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (De ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    te.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (m ? " videoFields" : "") + '">' + he + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (T ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Oe(ae) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + z.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((je) => '<option value="' + je + '"' + (je === z.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[je] + "</option>").join("") + "</select></div></div>" + Je + "</div>";
    const qe = (je) => te.querySelector("[data-f=" + je + "]"), Ee = () => {
      const je = qe("global").checked;
      qe("dur").disabled = je, qe("unit").disabled = je, te.querySelector(".creatorDurationRow").classList.toggle("isDisabled", je);
    };
    qe("global").addEventListener("change", Ee), Ee();
    const Se = () => {
      var je;
      if (s.sheet) {
        (je = s.onCancel) == null || je.call(s);
        return;
      }
      De && va(), Et = null, yt();
    }, ft = () => {
      var At;
      if (m) {
        gt();
        return;
      }
      const je = qe("name").value.trim();
      if (!je) {
        qe("name").focus();
        return;
      }
      t.name = je, t.group = qe("group").value.trim() || (u ? "Rest" : "Movement");
      const vt = qe("global").checked;
      if (t.useGlobalTiming = vt, vt || (t.duration = Math.max(u ? 5 : 1, sa(qe("dur").value, qe("unit").value))), s.sheet) {
        (At = s.onSaved) == null || At.call(s);
        return;
      }
      De && (rn = null), Et = null, yt(), Ot(De ? u ? "Rest added" : "Movement added" : "Movement updated");
    }, gt = () => {
      var at;
      const je = qe("url").value.trim(), vt = on(je);
      if (!vt) {
        qe("urlError").hidden = !1, qe("url").classList.add("invalid"), qe("url").focus();
        return;
      }
      const At = vt.id !== t.videoId;
      t.url = je, t.videoId = vt.id, t.start = vt.start, t.end = vt.end, At && (t.videoDuration = null, t.videoError = null);
      const st = qe("name").value.trim();
      t.autoName = !st, t.name = st || (At ? "" : t.name) || t.videoTitle || "YouTube video", t.group = "Video", t.videoRounds = qe("rounds").value, t.useVideoLength = qe("global").checked, t.useVideoLength || (t.duration = Math.max(5, sa(qe("dur").value, qe("unit").value))), s.sheet ? (at = s.onSaved) == null || at.call(s) : (De && (rn = null), Et = null, yt(), Ot(De ? "Video added" : "Video updated")), (At || !t.videoDuration || t.autoName && !t.videoTitle) && Ql(t);
    };
    if (m && qe("url").addEventListener("input", () => {
      qe("urlError").hidden = !0, qe("url").classList.remove("invalid");
    }), te.querySelector("[data-a=cancel]").addEventListener("click", Se), te.querySelector("[data-a=save]").addEventListener("click", ft), s.sheet && !De) {
      te.querySelector("[data-a=hide]").addEventListener("click", () => {
        var vt;
        return (vt = s.onHide) == null ? void 0 : vt.call(s);
      });
      const je = te.querySelector("[data-a=remove]");
      tr(je, je.querySelector(".removeFill"), 1200, () => {
        var vt;
        return (vt = s.onRemove) == null ? void 0 : vt.call(s);
      });
    }
    return te.addEventListener("keydown", (je) => {
      je.key === "Escape" && (je.preventDefault(), je.stopPropagation(), Se()), je.key === "Enter" && je.target.matches("input") && (je.preventDefault(), ft());
    }), te;
  }
  function Co(t, r) {
    const s = o(r);
    s.innerHTML = "", t.forEach((u, m) => {
      if (u === Et && !ve()) {
        s.appendChild(Aa(u, m));
        return;
      }
      const T = document.createElement("div");
      T.className = "moveRow" + (u.hidden ? " hidden" : "") + (u.kind === "rest" ? " restItem" : "") + (u.kind === "video" ? " videoItem" : "") + (Oo(u) ? " noMeta" : ""), T.dataset.index = m, T.dataset.id = u.id;
      const P = u.kind === "rest" ? u.useGlobalTiming === !0 ? "Global timing" : Wt(u.duration) : u.useGlobalTiming === !1 ? Wt(u.duration) : "Global timing", z = u.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", le = u.kind === "video" ? u.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (u.useVideoLength === !1 ? "stops after " + Wt(u.duration) : Number(u.videoDuration) > 0 || Number(u.end) > 0 ? ro(Ga(u)) : "plays to the end") + (u.videoRounds === "first" ? " · first round only" : u.videoRounds === "last" ? " · last round only" : "") : u.group + " · " + P, he = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Oe(u.name) + '. Drag, or use the up and down arrow keys">' + zn + "</button>", ae = '<div class="moveText"><div class="moveItemName">' + Oe(u.name) + z + '</div><div class="moveMeta">' + Oe(le) + "</div></div>", te = (qe) => qe.addEventListener("keydown", (Ee) => {
        var gt, je;
        if (Ee.key !== "ArrowUp" && Ee.key !== "ArrowDown") return;
        Ee.preventDefault();
        const Se = t.indexOf(u), ft = Se + (Ee.key === "ArrowUp" ? -1 : 1);
        ft < 0 || ft >= t.length || (t.splice(Se, 1), t.splice(ft, 0, u), yt(), (je = (gt = o(r).children[ft]) == null ? void 0 : gt.querySelector(".dragHandle")) == null || je.focus());
      });
      if (ve()) {
        T.classList.add("phoneRow"), T.tabIndex = 0, T.setAttribute("role", "button"), T.setAttribute("aria-label", "Edit " + (u.name || "step")), T.innerHTML = he + ae + '<span class="rowChevron" aria-hidden="true">›</span>';
        const qe = T.querySelector(".dragHandle");
        qe.addEventListener("pointerdown", (Ee) => Qo(Ee, T, s, t)), te(qe), T.addEventListener("click", (Ee) => {
          Ee.target.closest(".dragHandle") || Ve(u, t);
        }), T.addEventListener("keydown", (Ee) => {
          Ee.key === "Enter" && Ee.target === T && (Ee.preventDefault(), Ve(u, t));
        }), s.appendChild(T);
        return;
      }
      T.innerHTML = he + ae + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Oe(u.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (u.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Oe(u.name) + '"><span class="removeFill"></span><span class="removeLabel">' + Fi + "</span></button></div>", T.querySelector(".editBtn").addEventListener("click", () => {
        va(), Et = u, yt(), so();
      }), T.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        u.hidden = !u.hidden, yt();
      });
      const De = T.querySelector(".removeBtn");
      tr(De, De.querySelector(".removeFill"), 1200, () => {
        const qe = t.indexOf(u);
        qe < 0 || (t.splice(qe, 1), yt(), Ot("Removed " + u.name, { label: "Undo", run: () => {
          t.splice(Math.min(qe, t.length), 0, u), yt();
        } }));
      });
      const Je = T.querySelector(".dragHandle");
      Je.addEventListener("pointerdown", (qe) => Qo(qe, T, s, t)), te(Je), s.appendChild(T);
    });
  }
  const En = () => {
    var t;
    return (t = window.matchMedia) == null ? void 0 : t.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Dn = (t) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, t);
    } catch {
    }
  };
  function Qo(t, r, s, u) {
    if (t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const m = t.currentTarget, T = t.pointerId, P = !En();
    try {
      m.setPointerCapture(T);
    } catch {
    }
    const z = r.closest(".exerciseScroller") || y(r), le = s.style.position;
    s.style.position = "relative";
    const he = [...s.children].filter((dt) => dt.classList.contains("moveRow")), ae = he.indexOf(r), te = parseFloat(getComputedStyle(s).rowGap) || 8, De = r.offsetHeight, Je = De + te, qe = he.map((dt) => dt.offsetTop), Ee = he.map((dt) => dt.offsetHeight), Se = () => s.getBoundingClientRect().top, ft = s.getBoundingClientRect().width, gt = t.clientY - (Se() + qe[ae]), je = t.clientX;
    let vt = t.clientY, At = t.clientX, st = Se() + qe[ae], at = 0, un = 0, Ln = 0, Vt = 1, Ai = 0, Le = ae, ct = !1, mn = 0, gn = !1, vl = !1, Yr = qe[ae];
    s.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", Dn(8);
    const bl = () => {
      const dt = vt - gt + De / 2 - Se();
      let kt = 0;
      return he.forEach((Bt, ta) => {
        ta !== ae && dt > qe[ta] + Ee[ta] / 2 && kt++;
      }), kt;
    }, wl = () => {
      he.forEach((dt, kt) => {
        if (kt === ae) return;
        const Bt = ae < Le && kt > ae && kt <= Le ? -Je : ae > Le && kt >= Le && kt < ae ? Je : 0;
        dt.style.transform = Bt ? "translateY(" + Bt + "px)" : "";
      });
    }, Is = () => {
      const dt = s.getBoundingClientRect(), kt = Math.abs(At - je) > Math.max(80, ft * 0.3) || At < dt.left - 24 || At > dt.right + 24;
      kt !== ct && (ct = kt, r.classList.toggle("willReturn", kt), Dn(kt ? 10 : 4));
      const Bt = ct ? ae : bl();
      Bt !== Le && (Le = Bt, wl(), ct || Dn(4));
    }, _i = () => {
      if (Le === ae) return qe[ae];
      const dt = he.filter((Bt, ta) => ta !== ae);
      let kt = qe[0];
      for (let Bt = 0; Bt < Le; Bt++) kt += dt[Bt].offsetHeight + te;
      return kt;
    }, Zr = () => {
      const dt = P ? Math.min(Math.abs(at) / 40, 1) : 0, kt = P && !gn ? Math.max(-3, Math.min(3, Ln * 0.6)) : 0;
      r.style.transform = "translate(" + un.toFixed(2) + "px," + (st - (Se() + qe[ae])).toFixed(2) + "px) rotate(" + kt.toFixed(2) + "deg) scale(" + (Vt * (1 - 0.04 * dt)).toFixed(4) + "," + (Vt * (1 + 0.06 * dt)).toFixed(4) + ")";
    }, it = () => {
      mn = requestAnimationFrame(it);
      const dt = At - je, kt = gn ? Se() + Yr : vt - gt, Bt = gn ? 0 : ct ? dt * 0.9 : Math.max(-22, Math.min(22, dt * 0.22)), ta = gn ? 1 : ct ? 0.97 : 1.035;
      if (!P) {
        st = kt, un = gn ? 0 : Bt, Vt = 1, Zr(), gn && Kt();
        return;
      }
      const _u = gn ? 0.24 : 0.2, Eu = gn ? 0.62 : 0.68;
      at = (at + (kt - st) * _u) * Eu, st += at, Ln = (Ln + (Bt - un) * 0.16) * 0.7, un += Ln, Ai = (Ai + (ta - Vt) * 0.22) * 0.6, Vt += Ai, Zr(), gn && Math.abs(at) < 0.15 && Math.abs(kt - st) < 0.5 && Math.abs(un) < 0.5 && Math.abs(Vt - 1) < 3e-3 && Kt();
    }, Dt = setInterval(() => {
      if (!z || gn) return;
      const dt = z.getBoundingClientRect(), kt = 56, Bt = vt < dt.top + kt ? -10 : vt > dt.bottom - kt ? 10 : 0;
      Bt && (z.scrollTop += Bt, Is());
    }, 30);
    function Kt() {
      if (vl) return;
      vl = !0, cancelAnimationFrame(mn);
      const dt = Le !== ae, kt = r.dataset.id;
      if (s.classList.remove("reordering"), he.forEach((ta) => {
        ta.style.transition = "none", ta.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), s.style.position = le, dt) {
        const [ta] = u.splice(ae, 1);
        u.splice(Le, 0, ta);
      }
      yt();
      const Bt = kt && s.querySelector('.moveRow[data-id="' + kt + '"]');
      Bt && P && Bt.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), dt && Ot("Order saved");
    }
    const vn = (dt) => {
      if (dt.pointerId === T) {
        if (dt.pointerType === "mouse" && dt.buttons === 0) {
          Ta();
          return;
        }
        vt = dt.clientY, At = dt.clientX, Is();
      }
    }, ea = (dt) => {
      dt.pointerId === T && Ta();
    };
    function Ta() {
      gn || (window.removeEventListener("pointermove", vn, !0), window.removeEventListener("pointerup", ea, !0), window.removeEventListener("pointercancel", ea, !0), m.removeEventListener("lostpointercapture", Ta), clearInterval(Dt), ct && Le !== ae && (Le = ae, wl()), Yr = _i(), gn = !0, Dn(6), setTimeout(Kt, 800));
    }
    window.addEventListener("pointermove", vn, !0), window.addEventListener("pointerup", ea, !0), window.addEventListener("pointercancel", ea, !0), m.addEventListener("lostpointercapture", Ta), mn = requestAnimationFrame(it), Zr();
  }
  function ei() {
    var m, T, P, z;
    const t = Ye[bt], r = (m = o("warmupList")) == null ? void 0 : m.closest("section"), s = (T = o("cooldownList")) == null ? void 0 : T.closest("section"), u = (z = (P = o("strengthList")) == null ? void 0 : P.closest("section")) == null ? void 0 : z.querySelector(".sectionTitle");
    t != null && t.customSequence ? (r && (r.hidden = !t.includeWarmup), s && (s.hidden = !t.includeCooldown), u && (u.textContent = "Move sequence")) : (r && (r.hidden = !!(t != null && t.warmupOff)), s && (s.hidden = !1), u && (u.textContent = "Kettlebell work")), Co(Ct, "warmupList"), Co($e, "strengthList"), Co(An, "cooldownList");
  }
  function va() {
    if (!rn) return;
    const { item: t, arr: r } = rn;
    rn = null;
    const s = r.indexOf(t);
    s >= 0 && r.splice(s, 1), Et === t && (Et = null);
  }
  function la(t) {
    return t.id === "warmupList" ? { arr: Ct, kind: "warmup", group: "Warm-up" } : t.id === "cooldownList" ? { arr: An, kind: "cooldown", group: "Cooldown" } : { arr: $e, kind: "work", group: "" };
  }
  function Zn(t, r) {
    const s = la(r), u = Date.now().toString(36);
    return t === "video" ? { id: "video-" + u, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : t === "rest" ? { id: "rest-" + u, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(H.value) } : { id: "movement-" + u, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(C.value) };
  }
  const qi = "cubic-bezier(.34,1.46,.64,1)";
  function To(t, r) {
    if (En() || !t) {
      r();
      return;
    }
    const s = (T) => {
      var P;
      return ((P = T.dataset) == null ? void 0 : P.id) || T;
    }, u = () => [...t.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], m = new Map(u().map((T) => [s(T), T.getBoundingClientRect().top]));
    r(), u().forEach((T) => {
      const P = m.get(s(T));
      if (P === void 0) return;
      const z = P - T.getBoundingClientRect().top;
      Math.abs(z) < 0.5 || T.animate([{ transform: "translateY(" + z + "px)" }, { transform: "none" }], { duration: 440, easing: qi });
    });
  }
  function ti(t, r) {
    if (!t || En()) return;
    const s = t.offsetHeight, u = Math.max(0, s - (r || 0));
    t.animate([{ clipPath: "inset(0 0 " + u + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: qi });
  }
  function ba(t, r, s, u) {
    const { arr: m } = la(r), T = Zn(t, r);
    m.splice(Math.max(0, Math.min(s, m.length)), 0, T), rn = { item: T, arr: m }, Et = T, To(r.closest(".exerciseScroller,.createStepSlot") || r, () => yt());
    const P = r.querySelector(".moveRow.editing");
    return ti(P, u), so(t === "rest"), P;
  }
  function y(t) {
    for (let r = t; r && r.nodeType === 1; r = r.parentElement) {
      const s = getComputedStyle(r).overflowY;
      if (/(auto|scroll)/.test(s) && r.scrollHeight > r.clientHeight) return r;
    }
    return null;
  }
  const S = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function L(t, r) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (t === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + zn + '</span><span class="addGhostText"><strong>' + Oe(r[0]) + "</strong><small>" + Oe(r[1]) + "</small></span>", o("workoutModal").appendChild(s), s;
  }
  function O(t) {
    t.classList.add("leaving"), setTimeout(() => t.remove(), 180);
  }
  function K(t, r, s, u) {
    (Et || rn) && (va(), Et = null, yt());
    const m = t.getBoundingClientRect(), T = L(r, S[r]);
    T.setAttribute("aria-hidden", "true"), T.style.width = m.width + "px", T.style.height = m.height + "px", T.style.transform = "translate(" + m.left + "px," + m.top + "px)", t.classList.add("lifting");
    const P = y(t);
    return Q({
      ghost: T,
      origin: m,
      sx: s,
      sy: u,
      scroller: P,
      column: t.closest(".exerciseScroller,.createFlow") || P,
      home: () => t.getBoundingClientRect(),
      onDrop: (z, le, he) => {
        O(T), t.classList.remove("lifting"), ba(r, z, le, he);
      },
      onReturn: () => {
        O(T), t.classList.remove("lifting");
      }
    });
  }
  function Q({ ghost: t, origin: r, sx: s, sy: u, scroller: m, column: T, home: P, onDrop: z, onReturn: le, rowLook: he = !1 }) {
    var Zr;
    const ae = !En(), te = ((Zr = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Zr.offsetHeight) || 80, De = s - r.left, Je = u - r.top, qe = 44;
    let Ee = s, Se = u, ft = r.left, gt = r.top, je = 0, vt = 0, At = !ae, st = null, at = null, un = -1, Ln = 0, Vt = null;
    const Ai = () => ["warmupList", "strengthList", "cooldownList"].map((it) => o(it)).filter((it) => it && it.getClientRects().length && !it.closest("[hidden]")), Le = (it) => {
      if (it === st) return;
      st = it, t.classList.toggle("overList", !!it || he);
      const Dt = it ? it.getBoundingClientRect().width : r.width;
      t.style.width = Dt + "px", t.style.height = (it ? te : r.height) + "px";
    }, ct = (it) => {
      it.classList.add("leaving"), it.style.height = "0px", it.style.marginTop = "-8px", setTimeout(() => it.remove(), ae ? 320 : 0);
    }, mn = (it, Dt, Kt) => {
      if (at && at.parentNode === it && un === Kt || (at && (ct(at), at = null, un = -1), !it)) return;
      const vn = document.createElement("div");
      vn.className = "dropSlot", it.insertBefore(vn, Dt), at = vn, un = Kt, vn.getBoundingClientRect(), vn.style.height = te + "px", vn.style.marginTop = "0px";
    }, gn = () => {
      let it = null, Dt = 1 / 0;
      for (const Ta of Ai()) {
        const dt = Ta.getBoundingClientRect();
        if (Ee < dt.left - 48 || Ee > dt.right + 48) continue;
        const kt = dt.top - 28, Bt = dt.bottom + 28, ta = Se < kt ? kt - Se : Se > Bt ? Se - Bt : 0;
        ta < Dt && (Dt = ta, it = Ta);
      }
      const Kt = T == null ? void 0 : T.getBoundingClientRect(), ea = Kt && Ee >= Kt.left && Ee <= Kt.right && Se >= Kt.top && Se <= Kt.bottom || Dt === 0 ? it : null;
      if (ea) {
        const Ta = [...ea.children].filter((kt) => kt.classList.contains("moveRow"));
        let dt = Ta.findIndex((kt) => {
          const Bt = kt.getBoundingClientRect();
          return Se < Bt.top + Bt.height / 2;
        });
        dt < 0 && (dt = Ta.length), mn(ea, Ta[dt] || null, dt);
      } else mn(null);
      Le(ea);
    }, vl = () => {
      if (Vt) return Vt.aim();
      if (st) {
        const it = st.getBoundingClientRect();
        let Dt = Se - te / 2;
        return at && (Dt = Dt * 0.6 + at.getBoundingClientRect().top * 0.4), { x: it.left, y: Dt };
      }
      return { x: Ee - De, y: Se - Je };
    }, Yr = (it, Dt, Kt, vn) => {
      t.style.transform = "translate(" + ft + "px," + gt + "px) rotate(" + it + "deg) rotate(" + Dt + "rad) scale(" + Kt + "," + vn + ") rotate(" + -Dt + "rad)";
    }, bl = () => {
      if (Ln = requestAnimationFrame(bl), !At) {
        const dt = Ee - s, kt = Se - u, Bt = Math.min(Math.hypot(dt, kt) / qe, 1);
        ft = r.left + dt * 0.35, gt = r.top + kt * 0.35, Yr(0, Math.atan2(kt, dt), 1 + 0.155 * Bt, 1 - 0.1 * Bt);
        return;
      }
      const it = vl();
      if (!ae) {
        ft = it.x, gt = it.y, Yr(0, 0, 1, 1), Vt && (cancelAnimationFrame(Ln), Vt.done());
        return;
      }
      const Dt = Vt ? Vt.k : 0.17, Kt = Vt ? Vt.d : 0.7;
      je = (je + (it.x - ft) * Dt) * Kt, vt = (vt + (it.y - gt) * Dt) * Kt, ft += je, gt += vt;
      const vn = Math.hypot(je, vt), ea = Math.min(vn / 48, 1), Ta = st || Vt ? 0 : Math.max(-5, Math.min(5, je * 0.32));
      Yr(Ta, Math.atan2(vt, je), 1 + 0.1 * ea, 1 - 0.063 * ea), Vt && vn < 0.15 && Math.hypot(it.x - ft, it.y - gt) < 0.6 && (cancelAnimationFrame(Ln), Vt.done());
    }, wl = setInterval(() => {
      if (!m || Vt) return;
      const it = m.getBoundingClientRect(), Dt = 64, Kt = Se < it.top + Dt ? -(it.top + Dt - Se) / 4 : Se > it.bottom - Dt ? (Se - (it.bottom - Dt)) / 4 : 0;
      Kt && (m.scrollTop += Math.max(-18, Math.min(18, Kt)), gn());
    }, 30);
    Ln = requestAnimationFrame(bl);
    let Is = !1;
    const _i = (it, Dt) => {
      if (Is) return;
      Is = !0, cancelAnimationFrame(Ln);
      const Kt = at ? at.offsetHeight : te;
      !it && at && (at.remove(), at = null), it ? z(it, Dt, Kt) : le();
    };
    return {
      move(it, Dt) {
        Ee = it, Se = Dt, !At && Math.hypot(Ee - s, Se - u) > qe && (At = !0, je = (Ee - s) * 0.085, vt = (Se - u) * 0.085), At && gn();
      },
      drop(it) {
        clearInterval(wl);
        const Dt = st, Kt = un;
        if (!it && Dt && at) {
          const vn = at;
          Vt = { k: 0.24, d: 0.62, aim: () => {
            const ea = vn.getBoundingClientRect();
            return { x: ea.left, y: ea.top };
          }, done: () => _i(Dt, Kt) }, setTimeout(() => _i(Dt, Kt), 650), ae || (cancelAnimationFrame(Ln), _i(Dt, Kt));
          return;
        }
        mn(null), Le(null), Vt = { k: 0.2, d: 0.66, aim: () => {
          const vn = P();
          return { x: vn.left, y: vn.top };
        }, done: () => _i(null) }, setTimeout(() => _i(null), 650), ae || (cancelAnimationFrame(Ln), _i(null));
      }
    };
  }
  function de(t, r) {
    let s = !1;
    t.addEventListener("click", (u) => {
      if (s) {
        s = !1, u.preventDefault();
        return;
      }
      if (ve()) {
        Be(r);
        return;
      }
      const m = o("strengthList"), T = ba(r, m, la(m).arr.length, 0);
      T == null || T.scrollIntoView({ block: "nearest", behavior: En() ? "auto" : "smooth" });
    }), t.addEventListener("pointerdown", (u) => {
      if (u.button !== void 0 && u.button !== 0) return;
      const m = u.pointerId, T = u.clientX, P = u.clientY;
      let z = null, le = !1;
      try {
        t.setPointerCapture(m);
      } catch {
      }
      const he = (Se) => {
        if (Se.pointerId === m) {
          if (Se.pointerType === "mouse" && Se.buttons === 0) {
            Ee(!1);
            return;
          }
          if (!z) {
            if (Math.hypot(Se.clientX - T, Se.clientY - P) < 6) return;
            z = K(t, r, T, P);
          }
          z.move(Se.clientX, Se.clientY);
        }
      }, ae = (Se) => {
        Se.pointerId === m && Ee(!1);
      }, te = (Se) => {
        Se.pointerId === m && Ee(!0);
      }, De = () => Ee(!1), Je = () => Ee(!0), qe = (Se) => {
        Se.key === "Escape" && z && (Se.preventDefault(), Se.stopPropagation(), Ee(!0));
      };
      function Ee(Se) {
        if (!le && (le = !0, window.removeEventListener("pointermove", he, !0), window.removeEventListener("pointerup", ae, !0), window.removeEventListener("pointercancel", te, !0), window.removeEventListener("keydown", qe, !0), window.removeEventListener("blur", Je), t.removeEventListener("lostpointercapture", De), z)) {
          const ft = z;
          z = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), ft.drop(Se);
        }
      }
      window.addEventListener("pointermove", he, !0), window.addEventListener("pointerup", ae, !0), window.addEventListener("pointercancel", te, !0), window.addEventListener("keydown", qe, !0), window.addEventListener("blur", Je), t.addEventListener("lostpointercapture", De);
    });
  }
  const be = (Yc = window.matchMedia) == null ? void 0 : Yc.call(window, "(max-width: 620px)");
  function ve() {
    var t;
    return !!((t = window.matchMedia) != null && t.call(window, "(max-width: 620px)").matches);
  }
  const He = (t) => t.charAt(0).toUpperCase() + t.slice(1), Ce = (t) => t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "movement";
  let Re = null, Ne = null;
  function Fe(t, r, s, u) {
    Te(), o("sheetTitle").textContent = t;
    const m = o("sheetBody");
    m.innerHTML = "", m.appendChild(r), Re = s || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !m.contains(r)) return;
      const T = u ? m.querySelector("input[data-f=url],input[data-f=name]") : m.querySelector("button,input,select");
      T == null || T.focus({ preventScroll: !0 });
    }, En() ? 0 : 360);
  }
  function Te() {
    const t = o("sheet");
    if (!t.classList.contains("open")) return;
    t.classList.remove("open"), o("sheetScrim").classList.remove("open"), t.setAttribute("aria-hidden", "true"), t.contains(a.activeElement) && a.activeElement.blur();
    const r = Re;
    Re = null, r == null || r(), setTimeout(sn, 0);
  }
  o("sheetScrim").addEventListener("click", Te), o("sheet").addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Te());
  });
  function Ve(t, r) {
    const s = Aa(t, r.indexOf(t), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Te(), yt(), Ot(He(Ce(t)) + " updated");
      },
      onCancel: Te,
      onHide() {
        t.hidden = !t.hidden, Te(), yt(), Ot((t.hidden ? "Hidden: " : "Showing: ") + t.name);
      },
      onRemove() {
        Te();
        const u = r.indexOf(t);
        u < 0 || (r.splice(u, 1), yt(), Ot("Removed " + t.name, { label: "Undo", run: () => {
          r.splice(Math.min(u, r.length), 0, t), yt();
        } }));
      }
    });
    Fe("Edit " + Ce(t), s, null, !1);
  }
  function tt() {
    const t = document.createElement("div");
    t.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, s, u, m]) => {
      const T = document.createElement("button");
      T.type = "button", T.className = "sheetChoice", T.innerHTML = '<span class="timeIcon" aria-hidden="true">' + _n(s) + "</span><span><strong>" + u + "</strong><small>" + m + "</small></span>", T.addEventListener("click", () => Be(r)), t.appendChild(T);
    }), Fe("Add to the move", t, null, !1);
  }
  function Be(t) {
    Ne && lo();
    const r = Zn(t, o("strengthList")), s = Aa(r, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Te(), ca(r, t);
      },
      onCancel: Te
    });
    Fe("New " + Ce(r), s, null, !0);
  }
  const et = o("workoutModal").querySelector(".modalStatic"), nt = { parent: et.parentNode, next: et.nextSibling };
  function Gt() {
    const t = document.createElement("div");
    t.className = "sheetSetup", t.appendChild(et);
    const r = document.createElement("button");
    r.type = "button", r.className = "primary sheetDone", r.textContent = "Done", r.addEventListener("click", Te), t.appendChild(r), Fe("Setup", t, () => {
      nt.parent.insertBefore(et, nt.next), Pe();
    }, !1);
  }
  function Pe() {
    var r, s;
    const t = o("setupSummaryName");
    t && (t.textContent = (((r = o("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((s = Ye[bt]) == null ? void 0 : s.name) || "Move", o("setupSummaryMeta").textContent = mt.textContent);
  }
  o("setupSummary").addEventListener("click", Gt), o("addFab").addEventListener("click", tt);
  function Rt() {
    const t = o("strengthList");
    return y(t) || t.closest(".exerciseScroller");
  }
  function Ft() {
    const t = o("strengthList").getBoundingClientRect(), r = (Rt() || o("strengthList")).getBoundingClientRect(), s = (Ne == null ? void 0 : Ne.ghost.offsetHeight) || 64;
    return { left: t.left, top: Math.max(r.top + 12, Math.min(r.bottom - s - 96, r.top + r.height * 0.55 - s / 2)), width: t.width, height: s };
  }
  function ca(t, r) {
    var z;
    const s = L(r, [t.name || S[r][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (t.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const u = document.createElement("span");
    u.className = "addGhostActions", u.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Oe(t.name) + '">✕</button>', s.appendChild(u), Ne = { item: t, type: r, ghost: s };
    const m = ((z = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : z.offsetHeight) || 64;
    s.style.width = o("strengthList").getBoundingClientRect().width + "px", s.style.height = m + "px";
    const T = Ft(), P = Nn.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + T.left + "px," + P + "px)", s.getBoundingClientRect(), En() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + T.left + "px," + T.top + "px)", u.querySelector("[data-a=end]").addEventListener("click", lo), u.querySelector("[data-a=discard]").addEventListener("click", Ao), s.addEventListener("pointerdown", Ua);
  }
  function Ua(t) {
    if (!Ne || t.target.closest("button") || t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const { item: r, ghost: s } = Ne, u = t.pointerId;
    try {
      s.setPointerCapture(u);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const m = s.getBoundingClientRect(), T = Rt(), P = Q({
      ghost: s,
      origin: { left: m.left, top: m.top, width: m.width, height: m.height },
      sx: t.clientX,
      sy: t.clientY,
      scroller: T,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || T,
      rowLook: !0,
      home: Ft,
      onDrop: (Ee, Se, ft) => {
        Ne = null, O(s), Lo(r, Ee, Se, ft);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let z = !1;
    const le = (Ee) => {
      if (Ee.pointerId === u) {
        if (Ee.pointerType === "mouse" && Ee.buttons === 0) {
          qe(!1);
          return;
        }
        P.move(Ee.clientX, Ee.clientY);
      }
    }, he = (Ee) => {
      Ee.pointerId === u && qe(!1);
    }, ae = (Ee) => {
      Ee.pointerId === u && qe(!0);
    }, te = () => qe(!1), De = () => qe(!0), Je = (Ee) => {
      Ee.key === "Escape" && (Ee.preventDefault(), qe(!0));
    };
    function qe(Ee) {
      z || (z = !0, window.removeEventListener("pointermove", le, !0), window.removeEventListener("pointerup", he, !0), window.removeEventListener("pointercancel", ae, !0), window.removeEventListener("keydown", Je, !0), window.removeEventListener("blur", De), s.removeEventListener("lostpointercapture", te), P.drop(Ee));
    }
    window.addEventListener("pointermove", le, !0), window.addEventListener("pointerup", he, !0), window.addEventListener("pointercancel", ae, !0), window.addEventListener("keydown", Je, !0), window.addEventListener("blur", De), s.addEventListener("lostpointercapture", te);
  }
  function Lo(t, r, s, u) {
    const m = la(r);
    t.kind !== "rest" && t.kind !== "video" && (t.kind = m.kind, m.group && (!t.group || t.group === "Movement") && (t.group = m.group)), m.arr.splice(Math.max(0, Math.min(s, m.arr.length)), 0, t), To(r.closest(".exerciseScroller,.createStepSlot") || r, () => yt()), ti(r.querySelector('.moveRow[data-id="' + t.id + '"]'), u), Ot(He(Ce(t)) + " added");
  }
  function lo() {
    var u;
    if (!Ne) return;
    const { item: t, ghost: r } = Ne;
    Ne = null, O(r);
    const s = o("strengthList");
    Lo(t, s, la(s).arr.length, 0), (u = s.querySelector('.moveRow[data-id="' + t.id + '"]')) == null || u.scrollIntoView({ block: "nearest", behavior: En() ? "auto" : "smooth" });
  }
  function Ao() {
    if (!Ne) return;
    const t = Ne.ghost;
    Ne = null, O(t), Ot("Discarded");
  }
  function xt() {
    Ne && (Ne.ghost.remove(), Ne = null);
  }
  window.addEventListener("resize", () => {
    if (Ne != null && Ne.ghost.classList.contains("hovering")) {
      const t = Ft();
      Ne.ghost.style.width = t.width + "px", Ne.ghost.style.transform = "translate(" + t.left + "px," + t.top + "px)";
    }
  }), (Zc = be == null ? void 0 : be.addEventListener) == null || Zc.call(be, "change", () => {
    Te(), Ne && !ve() && lo(), ei();
  });
  {
    const t = o("workoutModal").querySelector(".modal");
    t.addEventListener("scroll", () => {
      (t.scrollTop || t.scrollLeft) && (t.scrollTop = 0, t.scrollLeft = 0);
    });
  }
  function sn() {
    const t = o("workoutModal"), r = window.visualViewport;
    if (!t.classList.contains("open") || !ve()) {
      Kn();
      return;
    }
    const s = r ? r.offsetTop : 0, u = r ? r.offsetLeft : 0, m = r ? r.width : window.innerWidth, T = r ? r.height : window.innerHeight;
    Object.assign(t.style, { right: "auto", bottom: "auto", width: m + "px", height: T + "px", top: s + "px", left: u + "px" });
    const P = t.getBoundingClientRect();
    Math.abs(P.top - s) > 0.5 && (t.style.top = 2 * s - P.top + "px"), Math.abs(P.left - u) > 0.5 && (t.style.left = 2 * u - P.left + "px");
  }
  function Kn() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((t) => o("workoutModal").style.removeProperty(t));
  }
  (Kc = window.visualViewport) == null || Kc.addEventListener("resize", sn), ($c = window.visualViewport) == null || $c.addEventListener("scroll", sn), window.addEventListener("resize", sn), window.addEventListener("scroll", sn, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(sn, 250));
  function da() {
    $e.length > 0;
    const t = o("addMovementBtn"), r = o("addRestBtn");
    t && (t.innerHTML = zn + "<span>Add movement</span>"), r && (r.innerHTML = zn + "<span>Add rest</span>");
    const s = o("addVideoBtn");
    s && (s.innerHTML = zn + "<span>Add video</span>");
  }
  function _a() {
    const t = o("useGlobalTiming").checked, r = o("addMovementDuration"), s = o("addMovementUnit");
    r.disabled = t, s.disabled = t, r.parentElement.style.opacity = t ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + Wt(C.value);
    const u = o("useGlobalRestTiming").checked, m = o("addRestDuration"), T = o("addRestUnit");
    m.disabled = u, T.disabled = u, m.parentElement.style.opacity = u ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + Wt(H.value);
  }
  let ni = "movement";
  function ai(t) {
    ni = t;
    const r = o("movementFields"), s = o("restFields");
    r.hidden = t !== "movement", s.hidden = t !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), _a();
  }
  function Cn() {
    Ye[bt];
    const t = ke ? !0 : o("useGlobalTiming").checked, r = t ? Number(C.value) : sa(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), s = ke ? !0 : o("useGlobalRestTiming").checked, u = s ? Number(H.value) : sa(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (ni === "rest") {
      const m = o("addRestTitle").value.trim() || "Rest", T = o("addRestGroup").value.trim() || "Rest";
      $e.push({
        id: "rest-" + Date.now(),
        name: m,
        group: T,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, u || Number(H.value))
      }), yt(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", Ot("Rest added"), ke && (I("movements"), ie());
    } else {
      const m = o("addMovementInput").value.trim();
      if (!m) return;
      const T = o("addMovementGroup").value.trim() || "Movement";
      $e.push({
        id: "movement-" + Date.now(),
        name: m,
        group: T,
        kind: "work",
        hidden: !1,
        useGlobalTiming: t,
        duration: Math.max(5, r || Number(C.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", yt(), o("movementCreator").hidden = !0, Ot("Movement added"), ke && (I("movements"), ie());
    }
    da();
  }
  let fr = null;
  function Ot(t, r) {
    const s = o("toast");
    s.innerHTML = "";
    const u = document.createElement("span");
    if (u.textContent = t, s.appendChild(u), r) {
      const m = document.createElement("button");
      m.type = "button", m.className = "toastAction", m.textContent = r.label, m.addEventListener("click", () => {
        r.run(), s.classList.remove("show", "withAction"), clearTimeout(fr);
      }), s.appendChild(m);
    }
    s.classList.toggle("withAction", !!r), s.classList.add("show"), clearTimeout(fr), fr = setTimeout(() => s.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const Fl = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], zs = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function as(t) {
    return Math.max(0, Math.min(5, Math.floor(Number(t) / 100 * 6)));
  }
  function oi(t, r) {
    return Fl[as(r)];
  }
  function Ol(t) {
    return zs[as(t)];
  }
  function Ut(t) {
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  function $n() {
    return { morning: pt().morningTime || "08:00", evening: pt().eveningTime || "19:00" };
  }
  function _o(t) {
    const [r, s] = String(t).split(":").map(Number);
    return (r || 0) * 60 + (s || 0);
  }
  function ql(t) {
    const r = $n();
    return t.getHours() * 60 + t.getMinutes() >= _o(r.evening) ? "evening" : "morning";
  }
  function co(t, r) {
    return ht.checkins.find((s) => s.date === t && s.slot === r);
  }
  function Rn(t) {
    return !!(t && t.mood != null && t.energy != null);
  }
  function mr() {
    const t = /* @__PURE__ */ new Date(), r = Ut(t), s = ql(t), u = $n(), m = t.getHours() * 60 + t.getMinutes();
    return s === "morning" && m < _o(u.morning) || Rn(co(r, s)) ? null : s;
  }
  const Ya = o("checkinModal"), Za = o("checkinTab"), gr = o("checkinBadge"), uo = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function Vs(t) {
    const { input: r, fill: s } = uo[t];
    s.style.width = r.value + "%", r.setAttribute("aria-valuetext", oi(t, r.value));
  }
  Object.keys(uo).forEach((t) => uo[t].input.addEventListener("input", () => Vs(t)));
  let ua = null;
  function os() {
    const t = $n(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes();
    return s < _o(t.morning) ? "Next check-in at " + t.morning : s < _o(t.evening) ? "Next check-in at " + t.evening : "Next check-in tomorrow at " + t.morning;
  }
  function Wl() {
    const t = $n(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes(), u = (m, T) => {
      const [P, z] = m.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (T ? 1 : 0), P, z);
    };
    return s < _o(t.morning) ? { date: u(t.morning), time: t.morning } : s < _o(t.evening) ? { date: u(t.evening), time: t.evening } : { date: u(t.morning, !0), time: t.morning };
  }
  let is = null, rs = null;
  function vr() {
    if (mr()) {
      Wi(), Eo();
      return;
    }
    const t = Wl(), r = Math.max(0, Math.round((t.date - Date.now()) / 1e3)), s = Math.floor(r / 3600), u = Math.floor(r % 3600 / 60), m = r % 60;
    o("peekCountdown").textContent = s + ":" + String(u).padStart(2, "0") + ":" + String(m).padStart(2, "0"), o("peekAt").textContent = "Available at " + t.time;
  }
  function jl() {
    vr(), Za.classList.add("peek"), clearInterval(rs), rs = setInterval(vr, 1e3), clearTimeout(is), is = setTimeout(Wi, 6e3);
  }
  function Wi() {
    Za.classList.remove("peek"), clearInterval(rs), clearTimeout(is);
  }
  function Gs() {
    const t = mr();
    if (!t) {
      Za.classList.contains("peek") ? Wi() : jl();
      return;
    }
    ua = { date: Ut(/* @__PURE__ */ new Date()), slot: t };
    const s = co(ua.date, t), u = ht.checkins.find((m) => Rn(m));
    Object.keys(uo).forEach((m) => {
      uo[m].input.value = (s == null ? void 0 : s[m]) ?? (u == null ? void 0 : u[m]) ?? 50, Vs(m);
    }), o("checkinTitle").textContent = t === "morning" ? "Morning check-in" : "Evening check-in", Ya.classList.add("open"), Ya.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => uo.mood.input.focus());
  }
  function ii() {
    Ya.classList.remove("open"), Ya.setAttribute("aria-hidden", "true"), ua && (ri = ua.date + "-" + ua.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", ri);
    } catch {
    }
    ua = null, Eo();
  }
  function zl() {
    if (!ua) return;
    if (Rn(co(ua.date, ua.slot))) {
      ii();
      return;
    }
    const { date: t, slot: r } = ua;
    let s = co(t, r);
    s || (s = { date: t, slot: r }, ht.checkins.unshift(s), ht.checkins = ht.checkins.slice(0, 2e3)), s.mood = Number(uo.mood.input.value), s.energy = Number(uo.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), Sn(), l.fire("checkin", { slot: r, mood: s.mood, energy: s.energy, mood_label: oi("mood", s.mood), energy_label: oi("energy", s.energy) }), Ot((r === "morning" ? "Morning" : "Evening") + " check-in saved"), ii(), si(), Ro(), ao(), Sa();
  }
  let ri = "";
  try {
    ri = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Eo() {
    const t = mr();
    gr.hidden = !t, Za.hidden = !t, t || Wi(), Za.classList.toggle("due", !!t), Za.setAttribute("aria-label", t ? (t === "morning" ? "Morning" : "Evening") + " check-in is due" : os()), Za.title = t ? "Check in now" : os();
  }
  function Do() {
    Eo();
    const t = mr();
    !t || Ya.classList.contains("open") || pt().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !Ie.home.classList.contains("active") || Nn.classList.contains("open") || ri !== Ut(/* @__PURE__ */ new Date()) + "-" + t && Gs());
  }
  Za.addEventListener("click", Gs), o("checkinLater").addEventListener("click", ii), o("checkinSave").addEventListener("click", zl), Ya.addEventListener("click", (t) => {
    t.target === Ya && ii();
  }), Ya.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), ii());
  }), setInterval(Do, 3e4);
  function si() {
    const t = Ut(/* @__PURE__ */ new Date()), r = (s) => ht.checkins.find((u) => u.date === t && u[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, u]) => {
      const m = r(s);
      o(u).textContent = m ? oi(s, m[s]) : "—";
    });
  }
  function Ro() {
    const t = o("feelCard");
    if (!t) return;
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), u = [...Array(7)].map((he, ae) => {
      const te = new Date(s.getFullYear(), s.getMonth(), s.getDate() + ae), De = Ut(te), Je = ht.checkins.filter((Ee) => Ee.date === De), qe = (Ee) => {
        const Se = Je.map((ft) => ft[Ee]).filter((ft) => ft != null);
        return Se.length ? Se.reduce((ft, gt) => ft + gt, 0) / Se.length : null;
      };
      return { d: te, key: De, mood: qe("mood"), energy: qe("energy"), count: Je.filter(Rn).length, future: te > r && De !== Ut(r) };
    }), m = (he) => {
      const ae = u.map((te) => te[he]).filter((te) => te != null);
      return ae.length ? ae.reduce((te, De) => te + De, 0) / ae.length : null;
    }, T = m("mood"), P = m("energy"), z = (he, ae) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + he + "</span><span>" + (ae == null ? "—" : Oe(oi("", ae))) + '</span></div><div class="feelTrack"><span style="width:' + (ae == null ? 0 : Math.max(4, ae)) + "%;background:" + (ae == null ? "transparent" : Ol(ae)) + '"></span></div></div>', le = u.filter((he) => he.mood != null && he.energy != null).sort((he, ae) => ae.mood + ae.energy - (he.mood + he.energy))[0];
    t.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (T == null ? "No check-ins yet" : Oe(oi("", (T + P) / 2))) + '</div><div class="weekCopy">' + (T == null ? "Your first check-in will appear here." : "on average this week" + (le ? " · best day " + Oe(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(le.d)) : "")) + '</div></div></div><div class="feelDays">' + u.map(
      (he) => '<div class="weekChip feelDay' + (he.future ? " future" : "") + (he.key === Ut(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Oe(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(he.d)) + "</strong>" + (he.count >= 2 ? '<span class="weekTick">' + _n("check") + "</span>" : '<span class="feelDots">' + "●".repeat(he.count) + "</span>") + "</div>" + z("Mood", he.mood) + z("Energy", he.energy) + "</div>"
    ).join("") + "</div>";
  }
  const ji = o("upcomingCountSetting");
  ji.addEventListener("change", () => {
    La = ji.value === "all" ? "all" : Number(ji.value), Ar();
  });
  const No = o("tempoRevealBtn"), ss = o("tempoExperiment"), Ea = o("tempoQuad"), li = o("tempoDot"), Vl = o("tempoEstimate"), Gl = o("tempoReadout");
  let Da = { x: 0.5, y: 0.5 }, ci = !1, br = { total: 20, work: 45, rest: 15 };
  function ls(t, r, s, u) {
    const m = Math.max(r, Math.min(s, t));
    return Math.round((m - r) / u) * u + r;
  }
  function di(t, r) {
    const s = (t - 0.5) * 2, u = (r - 0.5) * 2, m = ls(
      br.total + s * 5 + u * 8,
      Number(_.min),
      Number(_.max),
      Number(_.step)
    ), T = ls(
      br.work + s * 10 + u * 8,
      Number(C.min),
      Number(C.max),
      Number(C.step)
    ), P = ls(
      br.rest + s * 6 + u * 6,
      Number(H.min),
      Number(H.max),
      Number(H.step)
    );
    return _.value = m, C.value = T, H.value = P, W.textContent = T + " sec", se.textContent = P + " sec", jn(), { total: m, work: T, rest: P };
  }
  function wr(t, r) {
    const s = t < 0.34 ? "Low" : t > 0.66 ? "Hard" : "Medium", u = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", m = di(t, r);
    Gl.textContent = s + " + " + u, Vl.textContent = m.total + " min", Ea.setAttribute("aria-valuetext", s + " and " + u + ", estimated " + m.total + " minutes");
  }
  function yr(t) {
    const r = Ea.getBoundingClientRect(), s = Math.max(0, Math.min(1, (t.clientX - r.left) / r.width)), u = Math.max(0, Math.min(1, (t.clientY - r.top) / r.height));
    Da = { x: s, y: u }, li.style.left = s * 100 + "%", li.style.top = u * 100 + "%", wr(s, u);
  }
  No.addEventListener("click", () => {
    const t = ss.hidden;
    ss.hidden = !t, No.setAttribute("aria-expanded", t ? "true" : "false"), No.textContent = t ? "Now close this" : "Don’t try this!", t && (br = {
      total: Number(_.value),
      work: Number(C.value),
      rest: Number(H.value)
    }, Da = { x: 0.5, y: 0.5 }, li.style.left = "50%", li.style.top = "50%", wr(Da.x, Da.y));
  }), a.querySelectorAll("[data-feedback-rating]").forEach((t) => t.addEventListener("click", () => {
    Number(t.dataset.feedbackRating), a.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === t));
  }));
  const zi = o("testingFeedbackForm"), cs = o("testingFeedbackThanks"), Us = o("testingFeedbackAgain");
  zi.addEventListener("submit", (t) => {
    t.preventDefault(), zi.hidden = !0, cs.hidden = !1, Ot("Feedback captured for prototype");
  }), Us.addEventListener("click", (t) => {
    t.preventDefault(), zi.reset(), a.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), cs.hidden = !0, zi.hidden = !1;
  }), Ea.addEventListener("pointerdown", (t) => {
    var r;
    ci = !0, yr(t);
    try {
      (r = Ea.setPointerCapture) == null || r.call(Ea, t.pointerId);
    } catch {
    }
  }), Ea.addEventListener("pointermove", (t) => {
    ci && yr(t);
  }), Ea.addEventListener("pointerup", (t) => {
    ci && (ci = !1, yr(t), yt());
  }), Ea.addEventListener("pointercancel", () => ci = !1), Ea.addEventListener("keydown", (t) => {
    let { x: r, y: s } = Da, u = !0;
    t.key === "ArrowLeft" ? r -= 0.05 : t.key === "ArrowRight" ? r += 0.05 : t.key === "ArrowUp" ? s -= 0.05 : t.key === "ArrowDown" ? s += 0.05 : u = !1, u && (t.preventDefault(), r = Math.max(0, Math.min(1, r)), s = Math.max(0, Math.min(1, s)), Da = { x: r, y: s }, li.style.left = r * 100 + "%", li.style.top = s * 100 + "%", wr(r, s), yt());
  });
  const Nn = o("workoutModal");
  let Vi = null;
  function ui(t) {
    return t.map((r) => ({ ...r }));
  }
  function Ul() {
    const t = Ye[bt];
    return {
      key: bt,
      profile: t ? JSON.parse(JSON.stringify(t)) : null,
      warmup: ui(Ct),
      strength: ui($e),
      cooldown: ui(An),
      total: Number(_.value),
      work: Number(C.value),
      rest: Number(H.value),
      rounds: Number(lt.value) || 1
    };
  }
  function Gi(t = !1) {
    ke = !!t, Et = null, rn = null, Te(), xt(), Vi = Ul(), o("moveEditorTitle").textContent = ke ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !ke, o("warmupRow").hidden = ke, o("deleteMoveOpen").hidden = ke;
    const r = o("createMoveOptions");
    r.hidden = !ke;
    {
      const s = Ye[bt];
      o("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), o("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (xr(), ke) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const s = Ye[bt];
      Jo((s == null ? void 0 : s.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, ai("movement"), da(), _a(), ss.hidden = !0, No.setAttribute("aria-expanded", "false"), No.textContent = "Don’t try this!", Nn.classList.toggle("createMode", ke), Nn.querySelector(".modal").classList.toggle("createMode", ke), Nn.classList.add("open"), Nn.setAttribute("aria-hidden", "false"), sn(), ke && Ae();
  }
  function Ys() {
    const t = Ye[bt];
    return t != null && t.customSequence ? !!t.includeWarmup : !(t != null && t.warmupOff);
  }
  function xr() {
    const t = Ys(), r = o("warmupSwitch");
    r.classList.toggle("on", t), r.setAttribute("aria-checked", String(t));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const t = Ye[bt];
    t && (t.customSequence ? (o("includeWarmupPreset").checked = !t.includeWarmup, Hi()) : (t.warmupOff = !t.warmupOff, yt()), xr());
  });
  function Ui() {
    Te(), xt(), Kn(), rn = null, Et = null, Nn.classList.contains("createMode") && F(), Nn.classList.remove("createMode"), Nn.querySelector(".modal").classList.remove("createMode"), Nn.classList.remove("open"), Nn.setAttribute("aria-hidden", "true");
  }
  function Zs() {
    if (!Vi) return;
    const t = Vi;
    t.profile && (Ye[t.key] = JSON.parse(JSON.stringify(t.profile))), bt = t.key, Ct = ui(t.warmup), $e = ui(t.strength), An = ui(t.cooldown), _.value = t.total, C.value = t.work, H.value = t.rest, lt.value = t.rounds || 1;
    const r = Ye[bt];
    if (r) {
      a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === bt));
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const u = s.querySelector(".workoutName");
        u && (u.textContent = r.name);
        const m = s.querySelector(".panelCollapsedText");
        m && (m.textContent = r.name);
        const T = s.querySelector(".sourceTag");
        T && (T.textContent = r.source);
      }
      f.value = r.name;
    }
    yt();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (ke) {
      const t = bt;
      delete Ye[t], ke = !1, Ht = null, It(ht.order.find((r) => Ye[r]) || Object.keys(Ye)[0]);
    } else
      Zs();
    Ui();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    Te(), Ne && lo();
    const t = Ye[bt], r = f.value.trim() || "New move";
    if (t && (t.name = r), va(), Et = null, yt(), ke && t)
      Wa(bt, t), a.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === bt)), ke = !1, Ht = null, ht.order.includes(bt) || ht.order.push(bt), Ot("Move created");
    else {
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const u = s.querySelector(".workoutName");
        u && (u.textContent = r);
        const m = s.querySelector(".panelCollapsedText");
        m && (m.textContent = r);
      }
      Ot("Move saved");
    }
    Vi = null, Ui(), Sn();
  }), Nn.addEventListener("click", (t) => {
    if (t.target === Nn) {
      if (ke) {
        const r = bt;
        delete Ye[r], ke = !1, Ht = null, It(ht.order.find((s) => Ye[s]) || Object.keys(Ye)[0]);
      } else
        Zs();
      Ui();
    }
  }), de(o("addMovementBtn"), "movement"), de(o("addRestBtn"), "rest"), de(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", _a), o("useGlobalRestTiming").addEventListener("change", _a), a.querySelectorAll(".createPresetBtn").forEach((t) => t.addEventListener("click", () => {
    Jo(t.dataset.movePreset, !0), yt();
  })), o("includeWarmupPreset").addEventListener("change", Hi), o("includeCooldownPreset").addEventListener("change", Hi), o("includeWarmupPreset").addEventListener("change", ie), o("includeCooldownPreset").addEventListener("change", ie), f.addEventListener("input", ie), f.addEventListener("input", Pe), o("confirmAddMovement").addEventListener("click", Cn), o("confirmAddRest").addEventListener("click", Cn), o("addMovementInput").addEventListener("keydown", (t) => {
    t.key === "Enter" && Cn();
  });
  const Yi = o("countdown"), kr = o("countNum"), Ka = o("countdownPixelCanvas");
  let po = null, tn = "appear";
  class Yl {
    constructor(r, s, u, m, T, P, z) {
      this.width = r.width, this.height = r.height, this.ctx = s, this.x = u, this.y = m, this.color = T, this.speed = (Math.random() * 0.8 + 0.1) * P, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = z, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let ds = [], Zi = 1, ho = 1;
  function wa() {
    const t = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(t) && t > 0 ? t : 1;
  }
  function Zl() {
    var he;
    if (!Ka) return;
    const t = wa(), r = Math.max(1, window.innerWidth / t), s = Math.max(1, window.innerHeight / t);
    Zi = r, ho = s;
    const u = Math.min(window.devicePixelRatio || 1, 2);
    Ka.width = Math.floor(r * u), Ka.height = Math.floor(s * u), Ka.style.width = r + "px", Ka.style.height = s + "px";
    const m = Ka.getContext("2d");
    m.setTransform(u, 0, 0, u, 0, 0);
    const T = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], P = 12, z = (he = window.matchMedia) == null ? void 0 : he.call(window, "(prefers-reduced-motion: reduce)").matches, le = z ? 0 : 0.055;
    ds = [];
    for (let ae = 0; ae < r; ae += P)
      for (let te = 0; te < s; te += P) {
        const De = ae - r / 2, Je = te - s / 2, qe = Math.sqrt(De * De + Je * Je), Ee = z ? 0 : Math.random() * 75 + qe * 0.05, Se = new Yl({ width: r, height: s }, m, ae, te, T[Math.floor(Math.random() * T.length)], le, Ee);
        Se.maxSizeInteger = 4, Se.maxSize = Math.random() * 3.2 + 0.8, Se.sizeStep = 0.35 + Math.random() * 0.45, ds.push(Se);
      }
  }
  function Ks(t) {
    cancelAnimationFrame(po), tn = t;
    const r = Ka == null ? void 0 : Ka.getContext("2d");
    if (!r) return;
    function s() {
      r.clearRect(0, 0, Zi, ho);
      let u = !0;
      ds.forEach((m) => {
        m[tn](), m.isIdle || (u = !1);
      }), tn === "disappear" && u || (po = requestAnimationFrame(s));
    }
    po = requestAnimationFrame(s);
  }
  function Mr() {
    cancelAnimationFrame(po), Zl(), Ks("appear"), setTimeout(() => Ks("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Yi.classList.contains("active") && Mr();
  });
  const Ki = o("pixelTrailCanvas"), pi = Ki.getContext("2d");
  let $a = !0, Xa = 0.7, Bn = 600, $i = [], hi = null, nn = { x: 0, y: 0, ready: !1 };
  function Tt() {
    const t = d.getBoundingClientRect(), r = wa(), s = Math.min(window.devicePixelRatio || 1, 2), u = Math.max(1, t.width / r), m = Math.max(1, t.height / r);
    Ki.width = Math.max(1, Math.floor(u * s)), Ki.height = Math.max(1, Math.floor(m * s)), Ki.style.width = u + "px", Ki.style.height = m + "px", pi.setTransform(s, 0, 0, s, 0, 0);
  }
  function Ra(t, r) {
    if (!$a) return;
    const s = performance.now();
    nn.ready || (nn = { x: t, y: r, ready: !0 });
    const u = 7;
    for (let m = 1; m <= u; m++) {
      const T = m / u;
      $i.push({
        x: nn.x + (t - nn.x) * T,
        y: nn.y + (r - nn.y) * T,
        born: s - (u - m) * 10
      });
    }
    nn = { x: t, y: r, ready: !0 };
  }
  function fi(t) {
    if (hi = null, !v) return;
    if (!Ie.workout.classList.contains("active")) {
      hi = requestAnimationFrame(fi);
      return;
    }
    const r = d.getBoundingClientRect(), s = wa();
    pi.clearRect(0, 0, r.width / s, r.height / s), $a && ($i = $i.filter((m) => t - m.born < Bn), pi.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", $i.forEach((m) => {
      const T = (t - m.born) / Bn, P = (1 - T) * Xa, z = Math.round(m.x / 14) * 14, le = Math.round(m.y / 14) * 14;
      pi.globalAlpha = Math.max(0, P);
      const he = 2 + 5 * (1 - T) * Xa;
      pi.fillRect(z - he / 2, le - he / 2, he, he);
    }), pi.globalAlpha = 1), hi = requestAnimationFrame(fi);
  }
  d.addEventListener("pointermove", (t) => {
    const r = d.getBoundingClientRect(), s = wa();
    Ra((t.clientX - r.left) / s, (t.clientY - r.top) / s);
  }), d.addEventListener("pointerleave", () => nn.ready = !1), new ResizeObserver(Tt).observe(d), Tt(), hi = requestAnimationFrame(fi);
  const Vn = o("movementRippleCanvas"), Ja = Vn.getContext("2d");
  let Gn = !0, ya = null, Bo = performance.now();
  function jt() {
    const t = Vn.parentElement.getBoundingClientRect(), r = wa(), s = Math.max(1, t.width / r), u = Math.max(1, t.height / r), m = Math.min(window.devicePixelRatio || 1, 2);
    Vn.width = Math.max(1, Math.floor(s * m)), Vn.height = Math.max(1, Math.floor(u * m)), Vn.style.width = s + "px", Vn.style.height = u + "px", Ja.setTransform(m, 0, 0, m, 0, 0);
  }
  function Xi() {
    var t;
    return ln || ((t = Ge[ot]) == null ? void 0 : t.kind) === "rest";
  }
  function Ji() {
    const t = Ge[ot];
    return Xi() ? 2200 : t ? t.kind === "warmup" || t.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Qi(t) {
    if (ya = null, !v) return;
    if (!Ie.workout.classList.contains("active")) {
      ya = requestAnimationFrame(Qi);
      return;
    }
    const r = Vn.parentElement.getBoundingClientRect(), s = wa(), u = Math.max(1, r.width / s), m = Math.max(1, r.height / s);
    if (Ja.clearRect(0, 0, u, m), Gn) {
      const T = Ji(), P = (t - Bo) % T / T, z = 15, le = Math.max(8, Math.round(z * m / Math.max(1, u))), he = u / (z + 1), ae = m / (le + 1), te = u * 0.5, De = m * 0.52, Je = Math.hypot(te, De), Ee = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let Se = 1; Se <= le; Se++)
        for (let ft = 1; ft <= z; ft++) {
          const gt = ft * he, je = Se * ae, vt = Math.hypot(gt - te, je - De) / Je, At = Xi(), st = At ? Math.exp(-Math.pow((vt - (P * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, at = Math.exp(-Math.pow((vt - P * 1.25) * 7, 2)), un = At ? st : at, Ln = At ? 0.5 + 0.5 * Math.sin(P * Math.PI * 2 - vt * 3) ** 2 : 0.35 + 0.65 * Math.sin(P * Math.PI * 2 - vt * 5) ** 2, Vt = At ? 1.4 + un * 4.2 * Ln : 1.2 + un * 5 * Ln;
          Ja.beginPath(), Ja.arc(gt, je, Vt, 0, Math.PI * 2), Ja.fillStyle = `rgba(${Ee},${At ? 0.08 + un * 0.48 : 0.05 + un * 0.55})`, Ja.fill();
        }
    }
    ya = requestAnimationFrame(Qi);
  }
  new ResizeObserver(jt).observe(Vn.parentElement), jt(), ya = requestAnimationFrame(Qi);
  const mi = o("exerciseTitle"), Na = o("exerciseMeta"), Sr = o("stepLabel"), us = o("digits"), ps = o("fill"), xa = o("progress"), Tn = o("pause"), Cr = o("nextName"), $s = o("nextMeta"), Xs = o("nextIcon"), gi = o("skipNextSession");
  let Pn = null;
  function Xn(t) {
    for (let r = Math.max(0, t); r < Ge.length; r++)
      if (!Ge[r].sessionHidden) return r;
    return -1;
  }
  function Qa() {
    const t = Ge[ot];
    if (!t) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (ln) {
      const u = Xn(ot + 1), m = u >= 0 ? Ge[u] : null;
      return m ? { name: m.name, meta: Tr(m), icon: hs(m) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (t.rest > 0) return { name: "Rest", meta: t.rest + " sec · " + (t.roundBreakAfter ? "round " + (t.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = Xn(ot + 1), s = r >= 0 ? Ge[r] : null;
    return s ? { name: s.name, meta: Tr(s), icon: hs(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Po() {
    if (!Ge[ot]) return Ge.length;
    const r = Xn(ot + 1);
    return r < 0 ? Ge.length : r + 1;
  }
  function hs(t) {
    return t.kind === "video" ? "play" : "clock";
  }
  function Tr(t) {
    return t.kind === "video" ? "YouTube · " + ro(t.duration) : t.group + " · " + t.duration + " sec";
  }
  function vi() {
    return Ge.length && Ge[Ge.length - 1].round || 1;
  }
  function Lr(t) {
    const r = Ge[t];
    if (!r) return "";
    const s = vi();
    if (s <= 1) return "Step " + (t + 1) + " of " + Ge.length;
    if (r.roundBreak) return "Round " + r.round + " of " + s + " · Rest";
    const u = Ge.filter((m) => m.round === r.round && !m.roundBreak).length;
    return "Round " + r.round + " of " + s + " · Step " + (r.roundIndex + 1) + " of " + u;
  }
  function fs() {
    return xa.querySelector('[data-step="' + ot + '"]');
  }
  function Kl() {
    Ge[ot] && Number(xa.dataset.round) !== (Ge[ot].round || 1) && vs(), [...xa.children].forEach((t) => {
      const r = Number(t.dataset.step);
      t.classList.toggle("done", r < ot), t.classList.toggle("active", r === ot), t.classList.toggle("rewindable", r <= ot), t.disabled = r > ot, r === ot && t.style.setProperty("--segment-progress", "0%");
    }), Ge[ot] && (Sr.textContent = Lr(ot), eo());
  }
  function $l(t) {
    const r = Ge.indexOf(t);
    r < 0 || r <= ot || (t.sessionHidden = !t.sessionHidden, xn(), Ot((t.sessionHidden ? "Hidden " : "Included ") + t.name + " for this session"));
  }
  function Ar() {
    const t = o("upcomingList");
    if (!t) return;
    t.innerHTML = "";
    const r = Po(), s = Ge.slice(r);
    (La === "all" ? s : s.slice(0, Math.max(1, Number(La) || 1))).forEach((m) => {
      const T = document.createElement("section");
      T.className = "upcomingCard" + (m.sessionHidden ? " sessionHidden" : "") + (Oo(m) ? " noMeta" : ""), T.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + _n(hs(m)) + '</div><div><div class="upcomingName">' + Oe(m.name) + '</div><div class="upcomingMeta">' + Oe(Tr(m)) + (vi() > 1 ? " · round " + m.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (m.sessionHidden ? "Include this session" : "Skip this session") + "</button>", T.querySelector(".skipSessionBtn").addEventListener("click", () => $l(m)), t.appendChild(T);
    });
  }
  function xn() {
    var r;
    const t = Qa();
    Cr.textContent = t.name, $s.textContent = t.meta, Xs.innerHTML = _n(t.icon);
    {
      const s = ln ? Ge[Xn(ot + 1)] : ((r = Ge[ot]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : Ge[Xn(ot + 1)];
      a.querySelector(".nextCard").classList.toggle("noMeta", !!(s && Oo(s)));
    }
    if (Pn = null, ln) {
      const s = Xn(ot + 1);
      s >= 0 && (Pn = Ge[s]);
    } else {
      const s = Ge[ot];
      if (s && s.rest > 0)
        Pn = null;
      else {
        const u = Xn(ot + 1);
        u >= 0 && (Pn = Ge[u]);
      }
    }
    gi && (gi.hidden = !Pn, gi.textContent = Pn != null && Pn.sessionHidden ? "Include this session" : "Skip this session"), Ar();
  }
  gi.addEventListener("click", () => {
    Pn && (Pn.sessionHidden = !Pn.sessionHidden, Ot((Pn.sessionHidden ? "Hidden " : "Included ") + Pn.name + " for this session"), xn());
  });
  let Ba = null, ms = null;
  function fn(t, r = {}) {
    const s = Ye[bt];
    l.fire(t, { move: (s == null ? void 0 : s.name) || "", move_id: bt, ...r });
  }
  function _r() {
    const t = Ye[bt];
    Ba = { key: bt, name: (t == null ? void 0 : t.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(ms), ms = setInterval(() => {
      Ba && !Wn && Ba.active++;
    }, 1e3), fn("started", { steps: Ge.length });
  }
  function bi(t) {
    if (clearInterval(ms), !Ba) return;
    const r = Ba;
    Ba = null, fn(t ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (ht.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: t }), ht.history = ht.history.slice(0, 1e3), Sn(), ao(), Sa());
  }
  function wi() {
    k("workout"), gs();
    const t = Xn(0);
    t >= 0 && Ge[t].kind === "video" && bs(Ge[t]);
  }
  function Er() {
    Ir(), bi(!1), clearInterval(en), clearInterval(Xo), ln = !1, Pa(!1), o("app").classList.remove("resting"), Yi.classList.remove("active"), k("home");
  }
  function gs() {
    Yi.classList.add("active");
    let t = 5;
    kr.textContent = t, requestAnimationFrame(Mr), clearInterval(Xo), Xo = setInterval(() => {
      t--, t > 0 ? (kr.textContent = t, Mr()) : (clearInterval(Xo), kr.textContent = "GO", Mr(), setTimeout(() => {
        Yi.classList.remove("active"), cancelAnimationFrame(po), Rr();
      }, 650));
    }, 1e3);
  }
  function vs() {
    var r;
    xa.innerHTML = "";
    const t = ((r = Ge[Math.max(0, ot)] || Ge[0]) == null ? void 0 : r.round) || 1;
    xa.dataset.round = t, Ge.forEach((s, u) => {
      if ((s.round || 1) !== t) return;
      const m = document.createElement("button");
      m.dataset.step = u, m.type = "button", m.className = "progressSegment", m.setAttribute("aria-label", "Go to " + s.name), m.addEventListener("click", () => {
        u <= ot && Dr(u);
      }), xa.appendChild(m);
    });
  }
  function Pa(t) {
    t = !!t;
    const r = Wn !== t;
    if (Wn = t, Tn.textContent = t ? "Resume" : "Pause", o("app").classList.toggle("paused", t), Nt && Qe)
      try {
        t ? Qe.pauseVideo() : Qe.playVideo();
      } catch {
      }
    r && Ba && fn(t ? "paused" : "resumed");
  }
  function Dr(t) {
    t < 0 || t >= Ge.length || t > ot || (clearInterval(en), ln = !1, o("app").classList.remove("resting"), ot = t, Pa(!1), cn(), en = setInterval(to, 1e3));
  }
  function Rr() {
    if (ot = Xn(0), Pa(!1), vs(), ot < 0) {
      mi.textContent = "No activities", Na.textContent = "Open Edit and enable or add a movement", Na.hidden = !1;
      return;
    }
    _r(), cn(), clearInterval(en), en = setInterval(to, 1e3);
  }
  const Nr = o("videoStage"), fo = o("videoSound"), Js = 0, mo = 1, Br = 2;
  let Qs = 0, yi = null, xi = null, Qe = null, In = null, pa = 0, ka = !1, Nt = null, Ma = null;
  function Pr() {
    var t;
    return (t = window.YT) != null && t.Player ? Promise.resolve(window.YT) : yi || (yi = new Promise((r, s) => {
      const u = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          u == null || u();
        } catch {
        }
      };
      const m = setInterval(() => {
        var P;
        (P = window.YT) != null && P.Player && (clearInterval(m), clearTimeout(T), r(window.YT));
      }, 100), T = setTimeout(() => {
        clearInterval(m), yi = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const P = document.createElement("script");
        P.src = "https://www.youtube.com/iframe_api", P.async = !0, P.onerror = () => {
          clearInterval(m), clearTimeout(T), yi = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(P);
      }
    }), yi);
  }
  function Io() {
    return xi || (xi = Pr().then((t) => new Promise((r) => {
      const s = document.createElement("div");
      o("videoFrame").appendChild(s), Qe = new t.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(Qe), onStateChange: (u) => el(u.data), onError: (u) => kn(u.data) }
      });
    })), xi.catch(() => {
      xi = null;
    }), xi);
  }
  function bs(t) {
    !(t != null && t.videoId) || t.videoError || Io().then((r) => {
      Nt || In === t.videoId || (In = t.videoId, pa = Number(t.start) || 0, ka = !1, r.mute(), r.loadVideoById({ videoId: t.videoId, startSeconds: pa }));
    }).catch(() => {
    });
  }
  function Xl() {
    const t = Xn(ot + 1);
    t >= 0 && Ge[t].kind === "video" && bs(Ge[t]);
  }
  function el(t) {
    if (!Nt) {
      t === mo && !ka && (ka = !0, Qe.pauseVideo(), Qe.seekTo(pa, !0));
      return;
    }
    Nr.classList.toggle("playing", t === mo), Ge[ot] === Nt && performance.now() > Qs && (t === mo && Wn ? Pa(!1) : t === Br && !Wn && Pa(!0)), t === mo && xs(Nt.videoId, Qe.getDuration()) && Sn(), t === Js && er();
  }
  function kn(t) {
    const r = Nt;
    if (!r) {
      In = null;
      return;
    }
    t === 101 || t === 150 ? (Jl(r.videoId), Ot("That video can’t play outside YouTube, so it was skipped")) : Ot("The video couldn’t play, so it was skipped"), er();
  }
  function ki(t) {
    if (o("app").classList.add("videoStep"), fo.hidden = !0, Nt = t, clearTimeout(Ma), !t.videoId) {
      Ot("This video step has no link yet, so it was skipped"), setTimeout(() => er(), 0);
      return;
    }
    Io().then((r) => {
      if (Nt !== t) return;
      Qs = performance.now() + 1500;
      const s = Number(t.start) || 0;
      In !== t.videoId ? (In = t.videoId, pa = s, r.loadVideoById({ videoId: t.videoId, startSeconds: s })) : (r.seekTo(s, !0), r.playVideo()), r.unMute(), Wn && r.pauseVideo(), Ma = setTimeout(() => {
        Nt !== t || Wn || (r.getPlayerState() !== mo ? (r.mute(), r.playVideo(), fo.hidden = !1) : r.isMuted() && (fo.hidden = !1));
      }, 1600);
    }).catch(() => {
      Nt === t && (Ot("YouTube didn’t load, so the video was skipped"), er());
    });
  }
  function ws() {
    if (!o("app").classList.contains("videoStep")) return;
    const t = a.querySelector(".workGrid"), r = a.querySelector(".sessionControlRow"), s = t.getBoundingClientRect().top, u = (r == null ? void 0 : r.offsetHeight) || 42, m = window.innerHeight - s - 16 - u - 84;
    t.style.setProperty("--theater-h", Math.max(240, Math.round(m)) + "px");
  }
  window.addEventListener("resize", ws);
  function Ir() {
    clearTimeout(Ma);
    const t = Nt;
    if (Nt = null, o("app").classList.remove("videoStep"), Nr.classList.remove("playing"), fo.hidden = !0, t && Qe) {
      try {
        Qe.pauseVideo();
      } catch {
      }
      In = null;
    }
  }
  function er() {
    const t = Nt;
    !t || Ge[ot] !== t || (Ir(), clearInterval(en), go(), en = setInterval(to, 1e3));
  }
  fo.addEventListener("click", () => {
    Qe && (Qe.unMute(), Qe.playVideo()), fo.hidden = !0;
  });
  function tl(t) {
    var u;
    const r = Number(t.start) || 0;
    if (t.useVideoLength === !1) return r + (Number(t.duration) || 300);
    const s = Qe && Nt === t && Number((u = Qe.getDuration) == null ? void 0 : u.call(Qe)) || 0;
    return Number(t.end) || s || Number(t.videoDuration) || r + (Number(t.duration) || 300);
  }
  function ys(t, r) {
    const s = Ye[bt];
    [Ct, $e, An, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((u) => (Array.isArray(u) ? u : []).forEach((m) => {
      m && m.kind === "video" && m.videoId === t && r(m);
    }));
  }
  function xs(t, r) {
    r = Math.round(Number(r) || 0);
    let s = !1;
    return t && r > 0 && ys(t, (u) => {
      u.videoDuration !== r && (u.videoDuration = r, s = !0);
    }), s;
  }
  function Jl(t) {
    ys(t, (r) => {
      r.videoError = "embed";
    }), Sn();
  }
  function Ql(t) {
    const r = t.videoId;
    if (!r) return;
    const s = () => {
      Nn.classList.contains("open") ? Et || yt() : (yt(), Sn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((u) => u.ok ? u.json() : Promise.reject(u.status)).then((u) => {
      t.videoId === r && (t.videoTitle = u.title || "", t.autoName && u.title && (t.name = u.title), s());
    }).catch((u) => {
      t.videoId === r && u === 401 && (t.videoError = "embed", s());
    }), ec(r).then((u) => {
      xs(r, u) && s();
    }).catch((u) => {
      u === "embed" && t.videoId === r && (t.videoError = "embed", s());
    });
  }
  function ec(t) {
    return Pr().then((r) => new Promise((s, u) => {
      const m = document.createElement("div");
      m.className = "videoProbe", m.setAttribute("aria-hidden", "true");
      const T = document.createElement("div");
      m.appendChild(T), o("app").appendChild(m);
      let P = null, z = !1;
      const le = (te, De) => {
        z || (z = !0, clearTimeout(he), setTimeout(() => {
          try {
            P == null || P.destroy();
          } catch {
          }
          m.remove();
        }, 0), De ? u(De) : s(te));
      }, he = setTimeout(() => le(0), 2e4), ae = () => {
        var De;
        const te = Number((De = P == null ? void 0 : P.getDuration) == null ? void 0 : De.call(P)) || 0;
        return te > 0 && le(te), te > 0;
      };
      P = new r.Player(T, {
        width: 320,
        height: 180,
        videoId: t,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            ae() || (P.mute(), P.playVideo());
          },
          onStateChange: () => ae(),
          onError: (te) => le(0, te.data === 101 || te.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function cn() {
    ln = !1;
    const t = Ge[ot];
    o("app").classList.toggle("resting", t.kind === "rest"), t.kind === "video" ? ki(t) : Ir(), Qt = t.duration, Mo = t.duration, mi.textContent = t.name, Na.textContent = t.group, Na.hidden = !0, Sr.textContent = Lr(ot), Ba && fn("step", { name: t.name, group: t.group, kind: t.kind, step: ot + 1, of: Ge.length, round: t.round || 1, rounds: vi(), duration: t.duration }), xn(), Kl(), Xl(), t.kind === "video" && setTimeout(ws, 0);
  }
  function eo() {
    var m;
    const t = ((m = Ge[ot]) == null ? void 0 : m.kind) === "video" && !ln, r = t && Qt >= 60;
    us.textContent = r ? ro(Qt) : Qt, us.classList.toggle("long", r), t && (o("videoClock").textContent = ro(Qt) + " left");
    const s = Qt / Mo * 100;
    ps.style.width = s + "%";
    const u = fs();
    if (u && !ln) {
      const T = 100 - s;
      u.style.setProperty("--segment-progress", T + "%");
    }
  }
  function to() {
    var r, s;
    if (Wn) return;
    const t = Ge[ot];
    if ((t == null ? void 0 : t.kind) === "video" && !ln && Nt === t) {
      const u = Number((r = Qe == null ? void 0 : Qe.getCurrentTime) == null ? void 0 : r.call(Qe)) || 0, m = Number(t.start) || 0, T = tl(t);
      Mo = Math.max(1, T - m), (u > m || ((s = Qe == null ? void 0 : Qe.getPlayerState) == null ? void 0 : s.call(Qe)) === mo) && (Qt = Math.max(0, Math.ceil(T - u))), eo(), u > m && u >= T - 0.25 && er();
      return;
    }
    Qt--, eo(), Qt <= 0 && (t.rest > 0 ? ks(t.rest) : go());
  }
  function ks(t) {
    var s;
    ln = !0, o("app").classList.add("resting");
    const r = fs();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(en), Qt = t, Mo = t, Ba && fn("rest", { duration: t }), mi.textContent = "Rest", Na.textContent = (s = Ge[ot]) != null && s.roundBreakAfter ? "Round " + (Ge[ot].round + 1) + " next" : "Recovery", xn(), eo(), en = setInterval(() => {
      Wn || (Qt--, eo(), Qt <= 0 && (clearInterval(en), go(), en = setInterval(to, 1e3)));
    }, 1e3);
  }
  function go() {
    ln = !1;
    const t = Xn(ot + 1);
    if (t >= 0)
      ot = t, cn();
    else {
      clearInterval(en), Ir(), Pa(!1), o("app").classList.remove("resting"), mi.textContent = "Complete", Na.textContent = "Move finished", Na.hidden = !1, us.textContent = "✓";
      {
        const r = vi();
        Sr.textContent = r > 1 ? r + " rounds done" : Ge.filter((s) => !s.roundBreak).length + " steps done";
      }
      bi(!0);
      {
        const r = qr(7).reduce((s, u) => s + u.minutes, 0);
        Na.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      ps.style.width = "100%", xn();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    tc(), Pa(!1);
  });
  function tc() {
    clearInterval(en);
    const t = Ge[ot];
    if (ln) {
      ln = !1, o("app").classList.remove("resting");
      const s = Xn(ot + 1);
      s >= 0 ? (ot = s, cn(), en = setInterval(to, 1e3)) : go();
      return;
    }
    if (t && t.rest > 0) {
      ks(t.rest);
      return;
    }
    const r = Xn(ot + 1);
    r >= 0 ? (ot = r, cn(), en = setInterval(to, 1e3)) : go();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(en), Pa(!1), ln) {
      const t = Ge[ot];
      Qt = t.rest, Mo = t.rest, mi.textContent = "Rest", Na.textContent = "Recovery", o("app").classList.add("resting"), xn(), eo();
    } else
      cn();
    en = setInterval(ln ? () => {
      Wn || (Qt--, eo(), Qt <= 0 && (clearInterval(en), go(), en = setInterval(to, 1e3)));
    } : to, 1e3);
  });
  function tr(t, r, s, u) {
    let m = 0, T = null, P = !1;
    function z() {
      T && cancelAnimationFrame(T), T = null, m = 0, P = !1, r.style.width = "0%", t.classList.remove("holding");
    }
    function le(te) {
      if (!P) return;
      m || (m = te);
      const De = Math.min(1, (te - m) / s);
      if (r.style.width = De * 100 + "%", De >= 1) {
        P = !1, T && cancelAnimationFrame(T), T = null, r.style.width = "100%", setTimeout(() => r.style.width = "0%", 90), u();
        return;
      }
      T = requestAnimationFrame(le);
    }
    function he(te) {
      var De;
      if (!(te && te.button !== void 0 && te.button !== 0)) {
        te == null || te.preventDefault(), z(), P = !0, t.classList.add("holding");
        try {
          (De = t.setPointerCapture) == null || De.call(t, te.pointerId);
        } catch {
        }
        T = requestAnimationFrame(le);
      }
    }
    function ae() {
      P && z();
    }
    t.addEventListener("pointerdown", he), t.addEventListener("pointerup", ae), t.addEventListener("pointercancel", ae), t.addEventListener("lostpointercapture", ae), t.addEventListener("keydown", (te) => {
      (te.key === " " || te.key === "Enter") && !te.repeat && he(te);
    }), t.addEventListener("keyup", (te) => {
      (te.key === " " || te.key === "Enter") && ae();
    });
  }
  const nc = o("endWorkout");
  tr(nc, o("holdEndFill"), 1500, Er);
  const Ho = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    Ho.classList.add("open"), Ho.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    Ho.classList.remove("open"), Ho.setAttribute("aria-hidden", "true");
  });
  function nl() {
    const t = bt, r = a.querySelector('.workoutPanel[data-workout="' + t + '"]');
    r && r.remove(), delete Ye[t], ht.order = ht.order.filter((u) => u !== t);
    let s = a.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const u = "custom-" + Date.now();
      Ye[u] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, ht.order.push(u), s = Wa(u, Ye[u]);
    }
    Ho.classList.remove("open"), Ho.setAttribute("aria-hidden", "true"), Vi = null, Ui(), It(s.dataset.workout), Sn(), Ot("Move deleted");
  }
  tr(o("deleteMoveYes"), o("deleteMoveFill"), 1500, nl);
  const Ms = a.querySelector(".rubberTabs"), Fo = o("rubberIndicator");
  function Mi(t, r = !0) {
    if (!t || !Ms || !Fo) return;
    const s = Ms.getBoundingClientRect(), u = t.getBoundingClientRect();
    Fo.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const m = wa();
    Fo.style.left = (u.left - s.left) / m + Ms.scrollLeft + "px", Fo.style.width = u.width / m + "px", r && (Fo.style.transform = "scaleX(1.08)", setTimeout(() => Fo.style.transform = "scaleX(1)", 180));
  }
  a.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => {
    t.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), a.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), a.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), t.classList.add("active"), o(t.dataset.pane).classList.add("active"), Mi(t, !0);
  })), requestAnimationFrame(() => Mi(a.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Mi(a.querySelector(".tab.active"), !1));
  const Hr = o("pixelTrailToggle"), Fr = o("rippleToggle"), Ia = o("trailStrength"), Si = o("trailLife");
  function Un(t, r) {
    pt()[t] = r, Sn();
  }
  const al = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Ss(t) {
    return t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "g:" + String(t.group || "").trim().toLowerCase();
  }
  function Oo(t) {
    var r;
    return !!((r = pt().hideMeta) != null && r[Ss(t)]);
  }
  function ol() {
    const t = /* @__PURE__ */ new Map(), r = (s, u, m) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const T = Ss(s);
      let P = t.get(T);
      P || (P = { key: T, label: T === "rest" ? "Rest" : T === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, t.set(T, P)), P.kinds.add(T === "rest" ? "Rest" : T === "video" ? "Video" : u), P.moves.add(m), P.count++;
    };
    return Object.values(Ye).forEach((s) => {
      const u = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Ke)).forEach((m) => r(m, "Warm-up", u)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((m) => r(m, m.presetRole === "warmup" ? "Warm-up" : m.presetRole === "cooldown" ? "Cooldown" : "Movement", u)), (s.cooldown || (s.customSequence ? [] : yn)).forEach((m) => r(m, "Cooldown", u));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, u]) => {
      t.has(s) || t.set(s, { key: s, label: u, kinds: /* @__PURE__ */ new Set([u]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...t.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, u) => al.indexOf(s.kind) - al.indexOf(u.kind) || s.label.localeCompare(u.label));
  }
  let Ha = "all";
  function Or() {
    const t = o("metaSearch").value.trim().toLowerCase();
    return ol().filter((r) => (Ha === "all" || r.kind === Ha) && (!t || r.label.toLowerCase().includes(t) || r.moves.some((s) => s.toLowerCase().includes(t))));
  }
  function Ci() {
    const t = o("metaTableBody");
    if (!t) return;
    const r = pt().hideMeta || {}, s = Or();
    t.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((m) => {
      const T = !r[m.key], P = m.count ? (m.moves.length > 2 ? m.moves.slice(0, 2).join(", ") + " + " + (m.moves.length - 2) + " more" : m.moves.join(", ")) + " · " + m.count + " step" + (m.count === 1 ? "" : "s") : "Not used yet", z = document.createElement("tr");
      z.className = T ? "" : "off", z.innerHTML = '<td><div class="metaType">' + Oe(m.label) + '</div><div class="metaSub">' + Oe(m.kind + " · " + P) + '</div></td><td class="metaKindCol">' + Oe(m.kind) + '</td><td class="metaUsedCol">' + Oe(P) + '</td><td class="metaSwitchCol"><button class="switch' + (T ? " on" : "") + '" type="button" role="switch" aria-checked="' + T + '" aria-label="Second line for ' + Oe(m.label) + ' on phones"></button></td>', z.querySelector(".switch").addEventListener("click", () => Cs([m.key], T)), t.appendChild(z);
    });
    const u = s.filter((m) => r[m.key]).length;
    o("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (u ? " · " + u + " hidden on phones" : "") : "";
  }
  function Cs(t, r) {
    const s = { ...pt().hideMeta || {} };
    t.forEach((u) => {
      r ? s[u] = !0 : delete s[u];
    }), Un("hideMeta", s), Ci(), ei(), xn();
  }
  o("metaSearch").addEventListener("input", Ci), o("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.addEventListener("click", () => {
    Ha = t.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === t)), Ci();
  })), o("metaHideAll").addEventListener("click", () => Cs(Or().map((t) => t.key), !0)), o("metaShowAll").addEventListener("click", () => Cs(Or().map((t) => t.key), !1));
  const an = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...pt().toggles || {} };
  function il() {
    a.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", an[s.dataset.toggle] !== !1)), a.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, u]) => {
      o(u).hidden = an[s] === !1;
    });
    const t = ["steps", "mood", "energyLevel"].some((s) => an[s] !== !1);
    a.querySelector(".activityCard").hidden = !t, o("weatherCard").hidden = !0;
    const r = a.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !t), r.classList.toggle("noWeather", !0);
  }
  a.querySelectorAll("[data-toggle]").forEach((t) => t.addEventListener("click", () => {
    an[t.dataset.toggle] = an[t.dataset.toggle] === !1, il(), Un("toggles", { ...an });
  })), il();
  function Ts() {
    Hr.classList.toggle("on", $a), Fr.classList.toggle("on", Gn), Ia.value = Math.round(Xa * 100), o("trailStrengthValue").textContent = Ia.value + "%", Si.value = Bn, o("trailLifeValue").textContent = Si.value + " ms";
  }
  pt().trailEnabled !== void 0 && ($a = pt().trailEnabled), pt().rippleEnabled !== void 0 && (Gn = pt().rippleEnabled), pt().trailStrength !== void 0 && (Xa = pt().trailStrength), pt().trailMaxAge !== void 0 && (Bn = pt().trailMaxAge), Ts(), Hr.addEventListener("click", () => {
    $a = !$a, Hr.classList.toggle("on", $a), $a || ($i = []), Un("trailEnabled", $a);
  }), Fr.addEventListener("click", () => {
    Gn = !Gn, Fr.classList.toggle("on", Gn), Un("rippleEnabled", Gn);
  }), Ia.addEventListener("input", () => {
    Xa = Number(Ia.value) / 100, o("trailStrengthValue").textContent = Ia.value + "%";
  }), Ia.addEventListener("change", () => Un("trailStrength", Xa)), Si.addEventListener("input", () => {
    Bn = Number(Si.value), o("trailLifeValue").textContent = Si.value + " ms";
  }), Si.addEventListener("change", () => Un("trailMaxAge", Bn)), ji.addEventListener("change", () => Un("upcomingCount", La));
  function rl(t) {
    a.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === t));
    const r = t === "light";
    o("app").classList.toggle("light", r), l.setLight(r), Ca(a);
  }
  rl(pt().theme || "dark"), a.querySelectorAll(".themeBtn").forEach((t) => t.addEventListener("click", () => {
    rl(t.dataset.theme), Un("theme", t.dataset.theme);
  }));
  const Jn = { steps: null, weather: null, ...pt().entities || {} };
  let dn = null, rt = {};
  function sl(t) {
    const r = Object.values(t).filter((z) => z.entity_id.startsWith("sensor.") || z.entity_id.startsWith("input_number.")), s = (z) => z.attributes.friendly_name || z.entity_id, u = r.filter((z) => /step/i.test(z.entity_id) || /step/i.test(s(z)) || ["steps", "step"].includes(String(z.attributes.unit_of_measurement || "").toLowerCase())), m = r.filter((z) => !u.includes(z)), T = (z, le) => s(z).localeCompare(s(le)), P = (z, le) => /health_steps/.test(le.entity_id) - /health_steps/.test(z.entity_id) || T(z, le);
    return { suggested: u.sort(P), rest: m.sort(T), label: s };
  }
  function Ti(t) {
    const r = o("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: s, rest: u, label: m } = sl(t), T = (le) => '<option value="' + Oe(le.entity_id) + '">' + Oe(m(le)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(T).join("") + "</optgroup>" : "") + (u.length ? '<optgroup label="All sensors">' + u.map(T).join("") + "</optgroup>" : ""), r.value = Jn.steps || "";
    const P = o("stepsStatus"), z = Jn.steps && t[Jn.steps];
    P.textContent = z ? "Connected · " + m(z) : P.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    Jn.steps = o("stepsEntity").value || null, Un("entities", { ...Jn }), rt = {}, _s(), dn && (Ti(dn), As(dn));
  });
  function Ls(t, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(t);
  }
  function no() {
    const t = Jn.steps && (dn == null ? void 0 : dn[Jn.steps]), r = Number(t == null ? void 0 : t.state);
    return Number.isFinite(r) ? r : null;
  }
  function As(t) {
    var u;
    const r = Jn.steps, s = r ? Number((u = t[r]) == null ? void 0 : u.state) : NaN;
    o("stepsMeta").textContent = r ? Number.isFinite(s) ? Ls(s) : "—" : "Set up in Settings";
  }
  let ll = 0;
  async function _s() {
    const t = Jn.steps;
    if (!t || !l.ws) return;
    ll = Date.now();
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const u = await l.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: r.toISOString(), statistic_ids: [t], period: "day", types: ["max"] }), m = (u == null ? void 0 : u[t]) || [], T = {};
      if (m.forEach((P) => {
        Number.isFinite(P.max) && (T[Ut(new Date(P.start))] = P.max);
      }), !Object.keys(T).length) {
        const P = await l.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: r.toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((P == null ? void 0 : P[t]) || []).forEach((z) => {
          const le = Number(z.s ?? z.state), he = z.lu ? z.lu * 1e3 : Date.parse(z.last_updated || z.last_changed);
          if (!Number.isFinite(le) || !he) return;
          const ae = Ut(new Date(he));
          T[ae] = Math.max(T[ae] || 0, le);
        });
      }
      rt = T, Sa();
    } catch {
    }
  }
  function ao() {
    Sa();
  }
  ao(), setInterval(() => {
    ao(), Ro(), Eo();
  }, 10 * 60 * 1e3);
  function qr(t) {
    const r = {}, s = {};
    ht.history.forEach((P) => {
      const z = Ut(new Date(P.start));
      r[z] = (r[z] || 0) + (P.seconds || 0) / 60, s[z] = (s[z] || 0) + 1;
    });
    const u = /* @__PURE__ */ new Date(), m = Ut(u), T = [];
    for (let P = t - 1; P >= 0; P--) {
      const z = new Date(u.getFullYear(), u.getMonth(), u.getDate() - P), le = Ut(z), he = ht.checkins.filter((te) => te.date === le), ae = (te) => {
        const De = he.map((Je) => Je[te]).filter(Boolean);
        return De.length ? De.reduce((Je, qe) => Je + qe, 0) / De.length : null;
      };
      T.push({
        key: le,
        date: z,
        minutes: Math.round(r[le] || 0),
        moves: s[le] || 0,
        steps: le === m && no() != null ? no() : rt[le] ?? null,
        mood: ae("mood"),
        energy: ae("energy")
      });
    }
    return T;
  }
  function Wr(t) {
    let r = t.length - 1;
    t[r] && !t[r].minutes && r--;
    let s = 0;
    for (; r >= 0 && t[r].minutes > 0; )
      s++, r--;
    return s;
  }
  function Sa() {
    const t = o("insightCard");
    if (!t) return;
    const r = qr(30), s = Wr(r), u = r.reduce((he, ae) => he + ae.minutes, 0), m = /* @__PURE__ */ new Date(), T = Ut(m), P = Ut(new Date(m.getFullYear(), m.getMonth(), m.getDate() - (m.getDay() + 6) % 7)), z = r.filter((he) => he.key >= P && he.key <= T).reduce((he, ae) => he + ae.minutes, 0), le = (he, ae, te) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + he + '</div><div><div class="activityRowName">' + Oe(ae) + '</div><div class="activityRowMeta">' + Oe(te) + "</div></div></div>";
    t.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + _n("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + le(_n("clock"), "This week", z + " min") + le(_n("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + le(_n("calendar"), "30 days", u + " min") + "</div>";
  }
  const jr = {
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
  }, Es = (t) => t === "sunny" ? "clear" : t === "clear-night" ? "night" : t === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(t) ? "rain" : ["snowy", "snowy-rainy"].includes(t) ? "snow" : "cloudy", qo = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, vo = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let nr = 0;
  const ar = (t, r) => '<path class="' + r + '" d="' + t + '"/>', cl = (t, r) => ' style="animation-delay:-' + Math.round(t * 137 % r) + 'ms"', Hn = (t, r, s, u) => {
    const m = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + cl(t, 2400) + ' d="M' + t + " " + (r - s) + "L" + (t + m) + " " + (r - m) + "L" + (t + s) + " " + r + "L" + (t + m) + " " + (r + m) + "L" + t + " " + (r + s) + "L" + (t - m) + " " + (r + m) + "L" + (t - s) + " " + r + "L" + (t - m) + " " + (r - m) + 'Z"/>';
  }, zr = ([t, r, s], u) => '<path class="wxMoonPath" d="' + t + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + r + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', dl = (t, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', ac = (t) => (t ? ["29.35", "43.04", "56.74"].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), oc = (t) => (t ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, s], u) => '<circle class="wxFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + r + '" cy="' + s + '" r="' + (t ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Ds(t, r, s, u) {
    return t === "clear" ? r ? zr(s ? vo.l : vo.s, u) + (s ? Hn(70, 20, 5.83, 1) + Hn(78.33, 41.67, 3.75, 0.8) + Hn(60, 71.67, 3.33, 0.6) : Hn(42, 12, 3.5, 1) + Hn(47, 25, 2.25, 0.8) + Hn(36, 43, 2, 0.6)) : dl(u, s) : t === "partly" ? (r ? zr(s ? vo.lp : vo.sp, u) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + ar(s ? qo.lp : qo.sp, r ? "wxCloudLight" : "wxBright") + (r ? s ? Hn(73.33, 16.67, 4.17, 0.9) : Hn(44, 10, 2.5, 0.9) : "") : t === "cloudy" ? ar(s ? qo.lc : qo.s, r ? "wxCloudLight" : "wxBright") + (r ? s ? Hn(15, 15, 3.75, 0.8) + Hn(76.67, 13.33, 2.92, 0.6) : Hn(9, 9, 2.25, 0.8) + Hn(46, 8, 1.75, 0.6) : "") : ar(s ? qo.lr : qo.s, "wxCloudLight") + (t === "rain" ? ac(s) : oc(s));
  }
  const ic = () => {
    var t;
    return ((t = dn == null ? void 0 : dn["sun.sun"]) == null ? void 0 : t.state) === "below_horizon";
  };
  let Qn = pt().weatherStyle || "bitmap", ul = pt().weatherLayout === "strip" ? "strip" : "tiles", rc = pt().weatherMotion !== !1;
  const Wo = () => rc && !En(), Li = /* @__PURE__ */ new Map(), Rs = 700, pl = (t) => {
    const [r, s] = t.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: s === "night" };
  };
  function jo(t, r, s, u = Qn, m, T) {
    let P = Es(t);
    const z = P === "night" || (T != null ? !!T : !!s && ic());
    P === "night" && (P = "clear");
    const le = r ? 90 : 54, he = Hl(t, z), ae = performance.now();
    let te = m ? Li.get(m) : null;
    if (m && !te ? Li.set(m, te = { key: he, t0: -1e9 }) : te && te.key !== he && (te.fromKey = te.key, te.from = te.last || null, te.key = he, te.t0 = ae), u !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + he + '"' + (m ? ' data-wx-slot="' + m + '"' : "") + ' data-wx-style="' + u + '" data-wx-size="' + le + '"></canvas></span>';
    let De = "";
    if (te && ae - te.t0 < Rs && (Wo() || En())) {
      const Je = pl(te.fromKey);
      De = '<span class="wxLayer wxOut ' + Je.k + (Je.night ? " night" : "") + '" style="animation-delay:' + Math.round(te.t0 - ae) + 'ms"><svg viewBox="0 0 ' + le + " " + le + '">' + Ds(Je.k, Je.night, r, "wxg" + ++nr) + "</svg></span>";
    }
    return '<span class="wxIcon ' + P + (z ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + le + " " + le + '">' + Ds(P, z, r, "wxg" + ++nr) + "</svg>" + De + "</span>";
  }
  function or() {
    const t = o("app"), r = getComputedStyle(t), s = (z) => r.getPropertyValue(z).trim(), u = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([z, le]) => {
      s(le) && (u[z] = s(le));
    });
    const m = s("--color-text-primary") || "#f1f1f1", T = s("--color-bg-card") || "#222222", P = t.classList.contains("light");
    return { colors: u, ink: P ? m : T, paper: P ? T : m };
  }
  function Ca(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const u = or(), m = Wo(), T = En();
    s.forEach((P) => {
      var te;
      const z = P.dataset.wx, le = P.dataset.wxSlot ? Li.get(P.dataset.wxSlot) : null;
      let he = Nc(z, u.colors);
      if (le && le.key === z) {
        const De = (r - le.t0) / Rs;
        De < 1 && (m || T) && (he = Hu(le.from || Nc(le.fromKey, u.colors), he, Math.max(0, De), u.colors, T)), le.last = he;
      }
      const ae = Jd(he, { size: Number(P.dataset.wxSize) || 54, px: 2, oneBit: P.dataset.wxStyle === "onebit", colors: u.colors, ink: u.ink, paper: u.paper, clock: r, idle: m });
      P.width !== ae.w && (P.width = ae.w), P.height !== ae.h && (P.height = ae.h), (te = P.getContext("2d")) == null || te.putImageData(new ImageData(ae.data, ae.w, ae.h), 0, 0);
    });
  }
  let Vr = null, hl = -1;
  function Ns(t) {
    if (Vr = null, !v) return;
    const r = Wo(), s = Math.floor(t / 100), u = [...Li.values()].some((le) => t - le.t0 < Rs), m = [...n.values()].some((le) => t - le.t0 < le.dur), T = Ie.home.classList.contains("active"), P = B.classList.contains("open"), z = r && Qn === "smooth" && (P || T && ul === "strip");
    !document.hidden && (u || m || z || r && s !== hl) && (hl = s, T && (Ca(o("weatherCard"), t), h(o("weatherCard"), t)), P && (Ca(B, t), h(B, t))), (r || u || m) && (Vr = requestAnimationFrame(Ns));
  }
  function bo() {
    o("app").classList.toggle("wxMotion", Wo()), !Vr && v && (Vr = requestAnimationFrame(Ns));
  }
  let Gr = [];
  const zt = 36e5, ir = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function Fa() {
    const t = /* @__PURE__ */ new Date(), r = (T, P) => new Date(t.getFullYear(), t.getMonth(), t.getDate() + T, P), s = [], u = [], m = [...Array(6)].map((T, P) => {
      const z = r(P, 6), le = r(P, 18), he = r(P + 1, 6), ae = Gr.find((De) => Ut(new Date(De.datetime)) === Ut(z)), te = (De, Je, qe) => {
        const Ee = s.filter((gt) => gt.t >= +De && gt.t < +Je);
        if (Ee.length) {
          const gt = {};
          return Ee.forEach((je) => {
            gt[je.c] = (gt[je.c] || 0) + (ir.has(je.c) ? 2 : 1);
          }), Object.entries(gt).sort((je, vt) => vt[1] - je[1])[0][0];
        }
        const Se = u.find((gt) => {
          const je = +new Date(gt.datetime);
          return je >= +De - 3 * zt && je < +Je && (gt.is_daytime == null || !!gt.is_daytime == !qe);
        });
        if (Se) return Se.condition;
        const ft = (ae == null ? void 0 : ae.condition) || "cloudy";
        return qe && ft === "sunny" ? "clear-night" : ft;
      };
      return { start: +z, end: +he, day: te(z, le, !1), night: te(le, he, !0), hi: Number(ae == null ? void 0 : ae.temperature), lo: Number(ae == null ? void 0 : ae.templow) };
    });
    return { days: m, hours: s, start: m[0].start, end: m[5].end };
  }
  const Bs = (t, r) => {
    const s = t.days.findIndex((m) => r < m.end);
    if (s < 0) return 1;
    const u = t.days[s];
    return Math.max(0, (s + (r - u.start) / (u.end - u.start)) / 6);
  }, fl = (t, r) => {
    const s = Math.max(0, Math.min(0.99999, r)) * 6, u = Math.floor(s), m = t.days[u];
    return m.start + (s - u) * (m.end - m.start);
  };
  function Ur(t, r) {
    const s = Math.max(0, t.days.findIndex((le) => r < le.end)), u = t.days[s], m = (r - u.start) / (u.end - u.start) >= 0.5;
    let T = m ? u.night : u.day, P = NaN;
    const z = t.hours;
    if (z.length && r >= z[0].t - zt && r <= z[z.length - 1].t + zt) {
      let le = z.findIndex((te) => te.t > r);
      le < 0 && (le = z.length);
      const he = z[Math.max(0, le - 1)], ae = z[Math.min(z.length - 1, le)];
      T = he.c || T, P = ae.t > he.t ? he.temp + (ae.temp - he.temp) * Math.max(0, Math.min(1, (r - he.t) / (ae.t - he.t))) : he.temp;
    }
    if (!Number.isFinite(P)) {
      const le = [];
      if (t.days.forEach((he) => {
        Number.isFinite(he.lo) && le.push([he.start - zt, he.lo]), Number.isFinite(he.hi) && le.push([he.start + 9 * zt, he.hi]);
      }), le.length) {
        P = r <= le[0][0] ? le[0][1] : le[le.length - 1][1];
        for (let he = 1; he < le.length; he++) if (r <= le[he][0] && r > le[he - 1][0]) {
          const [ae, te] = le[he - 1], [De, Je] = le[he];
          P = te + (Je - te) * (1 - Math.cos(Math.PI * (r - ae) / (De - ae))) / 2;
          break;
        }
      }
    }
    return { cond: m && T === "sunny" ? "clear-night" : T, temp: P, night: m, day: u };
  }
  const e = (t) => Ut(new Date(t)) === Ut(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(t)), n = /* @__PURE__ */ new Map(), i = 900, c = 700;
  let p = null;
  const g = typeof ResizeObserver == "function" ? new ResizeObserver((t) => t.forEach((r) => {
    h(r.target.parentElement), r.target.closest("#wxDialog") && Yt();
  })) : null;
  function h(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const u = Fa(), m = u.days.flatMap((te) => [{ cond: te.day, night: !1 }, { cond: te.night, night: !0 }]), T = m.map((te) => te.cond).join(), P = or(), z = Wo(), le = En(), he = Number(Ut(new Date(u.start)).replace(/\D/g, "")) % 9973;
    let ae = !1;
    s.forEach((te) => {
      var gt;
      const De = te.clientWidth, Je = te.clientHeight;
      if (!De || !Je) return;
      const qe = te.dataset.wxStrip;
      let Ee = n.get(qe);
      Ee ? Ee.sig !== T && (Ee.prev = Ee.segs, Ee.sig = T, Ee.segs = m, Ee.t0 = r, Ee.dur = c) : n.set(qe, Ee = { sig: T, segs: m, prev: null, t0: r, dur: i });
      const Se = z || le ? Math.min(1, Math.max(0, (r - Ee.t0) / Ee.dur)) : 1;
      Se < 1 && (ae = !0);
      const ft = { width: De, height: Je, colors: P.colors, clock: r, ambient: z, seed: he, reveal: le ? Se : 1 - Math.pow(1 - Se, 3), prev: Se < 1 ? Ee.prev : null, reduce: le };
      if (Qn === "smooth") {
        const je = Math.min(2, window.devicePixelRatio || 1), vt = Math.round(De * je), At = Math.round(Je * je);
        te.width !== vt && (te.width = vt), te.height !== At && (te.height = At);
        const st = te.getContext("2d");
        if (!st) return;
        st.setTransform(je, 0, 0, je, 0, 0), Ju(st, m, ft);
      } else {
        const je = Xu(m, { ...ft, px: 2, oneBit: Qn === "onebit", ink: P.ink, paper: P.paper });
        te.width !== je.w && (te.width = je.w), te.height !== je.h && (te.height = je.h), (gt = te.getContext("2d")) == null || gt.putImageData(new ImageData(je.data, je.w, je.h), 0, 0);
      }
    }), ae && bo();
  }
  function b() {
    const t = o("weatherCard");
    if (!t || t.hidden) return;
    const r = Jn.weather, s = r && (dn == null ? void 0 : dn[r]);
    if (!s) {
      t.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + jo("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", Ca(t);
      return;
    }
    const u = s.attributes || {}, m = u.temperature_unit || "°", T = (st) => Number.isFinite(Number(st)) ? Math.round(Number(st)) + "°" : "—", P = (u.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", z = jr[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), le = Ut(/* @__PURE__ */ new Date()), he = Gr.slice(0, 7), ae = he.find((st) => Ut(new Date(st.datetime)) === le) || null, te = he.filter((st) => Ut(new Date(st.datetime)) >= le).slice(0, 6), De = /* @__PURE__ */ new Date(), Je = Ut(new Date(De.getFullYear(), De.getMonth(), De.getDate() + 1)), qe = ae ? "H " + T(ae.temperature) + "&ensp; L " + T(ae.templow) : "", Ee = (st) => {
      const at = Ut(new Date(st.datetime));
      return at === le ? "Today" : at === Je ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(st.datetime));
    }, Se = Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : "—", ft = (st) => {
      const at = new Date(st.datetime);
      return Math.round((new Date(at.getFullYear(), at.getMonth(), at.getDate()) - new Date(De.getFullYear(), De.getMonth(), De.getDate())) / 864e5);
    }, gt = (st) => (jr[st] || st || "").toLowerCase(), je = (st, at) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + ft(st) + '" aria-label="' + Oe(Ee(st) + ": " + gt(st.condition) + ", " + T(st.temperature) + " / " + T(st.templow) + ". Open the forecast") + '">' + jo(st.condition, !1, !1, Qn, "day" + at) + '<div><div class="activityRowName">' + Oe(Ee(st)) + '</div><div class="activityRowMeta">' + T(st.temperature) + " / " + T(st.templow) + "</div></div></div>", vt = () => '<div class="wxStrip"><div class="wxStripDays">' + Fa().days.map((at, un) => {
      const Vt = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(at.start)) + ": " + gt(at.day) + (gt(at.day) === gt(at.night) ? " all day and night" : ", then " + gt(at.night) + " overnight") + (Number.isFinite(at.hi) ? ". High " + T(at.hi) : "") + (Number.isFinite(at.lo) ? ", low " + T(at.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + un + '" aria-label="' + Oe(Vt) + '"><span class="wxDayName">' + Oe(e(at.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + T(at.hi) + '</span><span class="wxLow">' + T(at.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    t.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Oe("Now in " + P + ": " + Se + "°, " + gt(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + jo(s.state, !0, !0, Qn, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Oe(String(Se)) + '</span><span class="wxUnit">' + Oe(m) + '</span></div><div class="wxPlace">' + Oe(P) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Oe(z) + "</div>" + (qe ? '<div class="wxRange">' + qe + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (te.length ? ul === "strip" ? vt() : '<div class="activityRows wxDays">' + te.map(je).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", Ca(t);
    const At = t.querySelector("canvas[data-wx-strip]");
    p && p !== At && (g == null || g.unobserve(p)), p = At, At && (g == null || g.observe(At), h(t)), bo(), Me();
  }
  const M = o("weatherCard"), R = (t) => {
    const r = t.closest("[data-wx-day]");
    if (r) {
      const u = /* @__PURE__ */ new Date();
      G(+new Date(u.getFullYear(), u.getMonth(), u.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const s = t.closest("[data-wx-open]");
    s && G(Date.now(), s);
  };
  M.addEventListener("click", (t) => R(t.target)), M.addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && t.target.matches("[data-wx-day],[data-wx-open]") && (t.preventDefault(), R(t.target));
  });
  const B = o("wxDialog"), D = o("wxGraph"), ce = o("wxGraphWrap");
  let we = Date.now(), _e = null, J = !1, xe = null;
  function G(t, r) {
    const s = Fa();
    _e = r || null, we = Math.max(s.start, Math.min(s.end - zt, t)), n.delete("dialog"), Li.delete("scrub"), B.classList.add("open"), B.setAttribute("aria-hidden", "false"), Me(), g == null || g.observe(B.querySelector("canvas[data-wx-strip]")), D.focus({ preventScroll: !0 }), bo();
  }
  function j() {
    var t;
    B.classList.remove("open"), B.setAttribute("aria-hidden", "true"), g == null || g.unobserve(B.querySelector("canvas[data-wx-strip]")), (t = _e == null ? void 0 : _e.focus) == null || t.call(_e, { preventScroll: !0 }), _e = null;
  }
  function Me() {
    if (!B.classList.contains("open")) return;
    const t = Fa();
    o("wxGraphDays").innerHTML = t.days.map((r) => "<span>" + Oe(e(r.start)) + "</span>").join(""), Yt(t), ut(t), h(B);
  }
  function ut(t = Fa()) {
    const r = Ur(t, we), s = dn == null ? void 0 : dn[Jn.weather], u = (s == null ? void 0 : s.attributes) || {}, m = u.temperature_unit || "°", T = Math.abs(we - Date.now()) < zt / 2, P = T && s ? s.state : r.cond, z = T && Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", le = jr[P] || (P ? P.charAt(0).toUpperCase() + P.slice(1) : "—"), he = T ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(we / zt) * zt)), ae = r.day, te = (Number.isFinite(ae.hi) ? "H " + Math.round(ae.hi) + "°" : "") + (Number.isFinite(ae.lo) ? "&ensp; L " + Math.round(ae.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + jo(P, !0, T, Qn, "scrub", T ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Oe(String(z)) + '</span><span class="wxUnit">' + Oe(m) + '</span></div><div class="wxPlace">' + Oe(he) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Oe(le) + "</div>" + (te ? '<div class="wxRange">' + te + "</div>" : "") + "</div>", Ca(o("wxDialogNow")), D.setAttribute("aria-valuenow", String(Math.round((we - t.start) / zt))), D.setAttribute("aria-valuetext", he + ", " + le.toLowerCase() + ", " + z + "°"), qt(t), bo();
  }
  function Yt(t = Fa()) {
    const r = o("wxGraphLine"), s = ce.clientWidth, u = ce.clientHeight;
    if (!s || !u) return;
    const m = [];
    for (let Se = t.start; Se <= t.end; Se += zt) {
      const ft = Ur(t, Se).temp;
      Number.isFinite(ft) && m.push([Bs(t, Se) * s, ft]);
    }
    if (r.setAttribute("viewBox", "0 0 " + s + " " + u), m.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', xe = null, qt(t);
      return;
    }
    const T = m.map((Se) => Se[1]), P = Math.min(...T), z = Math.max(...T), le = Math.max(4, z - P), he = Qn !== "smooth", ae = (Se) => he ? Math.round(Se / 2) * 2 : Math.round(Se * 10) / 10;
    xe = (Se) => u * 0.84 - (Se - P) / le * u * 0.62;
    const te = or(), De = Qn === "onebit" ? te.paper : "#ffffff", Je = Qn === "onebit" ? te.ink : "rgba(0,0,0,.28)", qe = "M" + m.map((Se) => ae(Se[0]) + " " + ae(xe(Se[1]))).join(" L"), Ee = (Se, ft) => {
      const gt = m.find((je) => je[1] === Se);
      return '<text class="wxLineLabel" x="' + ae(Math.min(s - 14, Math.max(14, gt[0]))) + '" y="' + ae(xe(Se) + (ft ? 18 : -10)) + '" fill="' + De + '" stroke="' + Je + '">' + Math.round(Se) + "°</text>";
    };
    r.setAttribute("shape-rendering", he ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + qe + '" fill="none" stroke="' + Je + '" stroke-width="' + (he ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + qe + '" fill="none" stroke="' + De + '" stroke-width="2" stroke-linejoin="round"/>' + Ee(z, !1) + Ee(P, !0) + '<g id="wxCursorMark"></g>', qt(t);
  }
  function qt(t = Fa()) {
    const r = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const s = ce.clientWidth, u = ce.clientHeight, m = Qn !== "smooth", T = (De) => m ? Math.round(De / 2) * 2 : De, P = T(Bs(t, we) * s), z = Ur(t, we).temp, le = or(), he = Qn === "onebit" ? le.paper : "#ffffff", ae = Qn === "onebit" ? le.ink : "rgba(0,0,0,.28)", te = xe && Number.isFinite(z) ? T(xe(z)) : null;
    r.innerHTML = '<rect x="' + (P - 2) + '" y="0" width="4" height="' + u + '" fill="' + ae + '"/><rect x="' + (P - 1) + '" y="0" width="2" height="' + u + '" fill="' + he + '"/>' + (te == null ? "" : m ? '<rect x="' + (P - 5) + '" y="' + (te - 5) + '" width="10" height="10" fill="' + he + '" stroke="' + ae + '" stroke-width="2"/>' : '<circle cx="' + P + '" cy="' + te + '" r="6" fill="' + he + '" stroke="' + ae + '" stroke-width="2"/>');
  }
  const ha = (t) => {
    const r = ce.getBoundingClientRect();
    r.width && (we = fl(Fa(), (t - r.left) / r.width), ut());
  };
  D.addEventListener("pointerdown", (t) => {
    if (t.button === 0) {
      J = !0;
      try {
        D.setPointerCapture(t.pointerId);
      } catch {
      }
      ha(t.clientX);
    }
  }), D.addEventListener("pointermove", (t) => {
    J && ha(t.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((t) => D.addEventListener(t, () => {
    J = !1;
  })), D.addEventListener("keydown", (t) => {
    const r = Fa(), s = { ArrowLeft: -zt, ArrowRight: zt, ArrowDown: -zt, ArrowUp: zt, PageUp: -24 * zt, PageDown: 24 * zt }[t.key];
    s ? (t.preventDefault(), we = Math.max(r.start, Math.min(r.end - zt, Math.round(we / zt) * zt + s)), ut(r)) : (t.key === "Home" || t.key === "End") && (t.preventDefault(), we = t.key === "Home" ? r.start : r.end - zt, ut(r));
  }), o("wxDialogClose").addEventListener("click", j), B.addEventListener("click", (t) => {
    t.target === B && j();
  }), B.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), j());
  }), b(), (Qc = (Xc = window.matchMedia) == null ? void 0 : (Jc = Xc.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || Qc.call(Jc, "change", () => {
    bo(), Ca(a);
  }), bo();
  const Xe = o("tvNav");
  l.fullscreenSupported || (Xe.hidden = !0), Xe.addEventListener("click", () => l.toggleFullscreen()), a.addEventListener("keydown", (t) => {
    !Ie.workout.classList.contains("active") || Yi.classList.contains("active") || t.target.closest("input,select,textarea,.holdEnd") || (t.key === "MediaPlayPause" || t.key === " " && !t.target.closest("button") ? (t.preventDefault(), Tn.click()) : t.key === "MediaTrackNext" ? (t.preventDefault(), o("skipExercise").click()) : t.key === "MediaTrackPrevious" && (t.preventDefault(), o("restartSegment").click()));
  }), a.querySelectorAll("[data-rounds-step]").forEach((t) => t.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(lt.value) || 1) + Number(t.dataset.roundsStep)));
    String(r) !== lt.value && (lt.value = r, lt.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [_, C, H, lt].forEach((t) => t.addEventListener("input", () => {
    const r = Ye[bt];
    r && (r.total = Number(_.value), r.work = Number(C.value), r.rest = Number(H.value)), yt();
  })), V.addEventListener("click", Er), We.addEventListener("click", () => k("settings")), o("settingsBack").addEventListener("click", Er), Tn.addEventListener("click", () => Pa(!Wn)), It(bt), si(), Ro(), Sa(), o("healthHelpOpen").addEventListener("click", () => a.querySelector(".tab[data-pane=helpPane]").click()), tr(o("resetStats"), o("resetStatsFill"), 1500, () => {
    ht.history = [], ht.checkins = [], ri = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Sn(), ao(), Ro(), si(), Sa(), Eo(), Ot("Stats reset");
  });
  const Zt = o("morningTime"), Ps = o("eveningTime"), sc = o("checkinAutoOpen");
  Zt.value = $n().morning, Ps.value = $n().evening, sc.classList.toggle("on", pt().checkinAutoOpen !== !1), [["morningTime", Zt], ["eveningTime", Ps]].forEach(([t, r]) => r.addEventListener("change", () => {
    r.value && (Un(t, r.value), Eo());
  })), sc.addEventListener("click", () => {
    const t = pt().checkinAutoOpen === !1;
    sc.classList.toggle("on", t), Un("checkinAutoOpen", t);
  }), setTimeout(Do, 800);
  const Vc = o("checkinNotify"), ml = o("checkinNotifyTarget"), Gc = o("checkinNotifyStatus"), Lu = Gc.textContent;
  function Uc() {
    const t = l.notifyServices(), r = t.filter((m) => m.startsWith("mobile_app_")), s = r.length ? r : t, u = (m) => m.replace(/^mobile_app_/, "").replace(/_/g, " ");
    ml.innerHTML = s.map((m) => '<option value="' + Oe(m) + '">' + Oe(u(m)) + "</option>").join(""), !pt().notifyTarget && s[0] && (pt().notifyTarget = s[0]), ml.value = pt().notifyTarget || "";
  }
  function gl() {
    const t = !!pt().notifyOn;
    Vc.classList.toggle("on", t), o("checkinNotifyTargetRow").hidden = !t;
    const r = $n();
    Gc.textContent = t ? "Sends at " + r.morning + " and " + r.evening : Lu;
  }
  async function lc() {
    const t = !!pt().notifyOn;
    try {
      return await l.setReminderAutomation(t ? { target: pt().notifyTarget, times: $n() } : null), !0;
    } catch {
      return Ot("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  Vc.addEventListener("click", async () => {
    const t = !pt().notifyOn;
    if (t && (Uc(), !pt().notifyTarget)) {
      Ot("Install the Companion app on your phone first");
      return;
    }
    pt().notifyOn = t, gl(), await lc() ? (Sn(), Ot(t ? "Check-in notifications on" : "Check-in notifications off")) : (pt().notifyOn = !t, gl());
  }), ml.addEventListener("change", () => {
    Un("notifyTarget", ml.value), pt().notifyOn && lc();
  }), [Zt, Ps].forEach((t) => t.addEventListener("change", () => {
    gl(), pt().notifyOn && lc();
  })), Uc(), gl();
  let cc = null;
  function Au() {
    cc || (cc = setTimeout(() => {
      cc = null, Sa();
    }, 3e4));
  }
  return {
    updateStates(t) {
      var s, u;
      const r = !dn || dn[Jn.weather] !== t[Jn.weather] || ((s = dn["sun.sun"]) == null ? void 0 : s.state) !== ((u = t["sun.sun"]) == null ? void 0 : u.state);
      dn = t, Ti(t), As(t), r && b(), Date.now() - ll > 60 * 60 * 1e3 && _s(), Au();
    },
    applyRemoteData(t) {
      if (t && (Array.isArray(t.history) && (ht.history = t.history, ao()), Array.isArray(t.history) && Sa(), Array.isArray(t.checkins) && (ht.checkins = t.checkins.map(Bi), Eo(), si(), Ro(), ao(), Sa()), t.profiles && !Nn.classList.contains("open") && !Ba)) {
        const r = ko(t);
        Object.keys(Ye).forEach((s) => delete Ye[s]), Object.assign(Ye, r.profiles), ht.order = r.order, Ye[bt] || (bt = ht.order[0]), Pi(), It(bt);
      }
    },
    suspend() {
      v = !1;
    },
    resume() {
      v || (v = !0, hi || (hi = requestAnimationFrame(fi)), ya || (ya = requestAnimationFrame(Qi)), bo(), Mi(a.querySelector(".tab.active"), !1));
    }
  };
}
const tp = /* @__PURE__ */ new Set(["roaming", "test_area"]), np = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, Hs = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, bn = "made_up_", rr = (a) => {
  var l;
  return (l = String(a).split(".")[1]) == null ? void 0 : l.startsWith(bn);
}, yl = (a) => a.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Wc(a) {
  const l = a.getHours() + a.getMinutes() / 60, o = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * o * o;
}
function ap(a) {
  const l = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  let o = 0;
  for (let d = +l; d < +a; d += 10 * 60 * 1e3) o += Wc(new Date(d)) / 6;
  return o;
}
function od(a = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let o = 0; o <= 96; o++) {
    const d = +a - (96 - o) * 15 * 60 * 1e3;
    l.push([d, Wc(new Date(d))]);
  }
  return l;
}
function op({ onChange: a }) {
  const l = {}, o = {}, d = (U, q, ue, ee) => {
    l[U] = { entity_id: U, state: ue, attributes: ee, last_changed: new Date(Date.now() - 18e6).toISOString() }, o[U] = q;
  }, f = (U, q, ue) => {
    const ee = l[U], pe = q ?? ee.state;
    l[U] = { ...ee, state: pe, attributes: { ...ee.attributes, ...ue }, last_changed: pe === ee.state ? ee.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, v = (U, q, ue, ee) => d("binary_sensor." + bn + (U ? U + "_" : "") + yl(q), U, ee ? "on" : "off", { friendly_name: q, device_class: ue });
  Object.entries(np).forEach(([U, q]) => {
    if (q.temperature != null && d("sensor." + bn + U + "_temperature", U, String(q.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), q.humidity != null && d("sensor." + bn + U + "_humidity", U, String(q.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), q.vacuum && d("vacuum." + bn + "robot", U, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), q.climate && d("climate." + bn + U, U, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: q.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), q.cover) {
      const [ue, ee, pe, X] = q.cover;
      d("cover." + bn + U + "_" + yl(ue), U, pe ? "open" : "closed", { friendly_name: ue, device_class: ee, current_position: pe, ...X != null ? { current_tilt_position: X } : {} });
    }
    if (q.humidifier && d("humidifier." + bn + U, U, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: q.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), q.solar && (d("sensor." + bn + U + "_solar_power", U, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), d("sensor." + bn + U + "_solar_today", U, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), q.valve && d("valve." + bn + U + "_" + yl(q.valve), U, "closed", { friendly_name: q.valve, device_class: "water" }), q.door && v(U, q.door, "door", q.doorOpen), q.window && v(U, q.window, "window", !1), q.motion && v(U, q.motion, "motion", !1), q.plant) {
      const [ue, ee, pe, X, A] = q.plant, I = bn + yl(ue), ie = (F, Ie, V, We, k) => d("sensor." + I + "_" + F, U, String(V), { friendly_name: Ie, device_class: k, state_class: "measurement", unit_of_measurement: We, plant_low: V < Hs[F][0], plant_high: V > Hs[F][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[F] });
      ie("moisture", "Moisture", ee, "%", "moisture"), ie("light", "Light", pe, "lx", "illuminance"), ie("temperature", "Temperature", X, "°C", "temperature"), ie("fertility", "Fertility", A, "µS/cm", "conductivity");
      const Ae = Object.entries({ moisture: ee, light: pe, temperature: X, fertility: A }).filter(([F, Ie]) => Ie < Hs[F][0] || Ie > Hs[F][1]).map(([F, Ie]) => F + (Ie < Hs[F][0] ? " low" : " high"));
      d("plant." + I, U, Ae.length ? "problem" : "ok", { friendly_name: ue, moisture: ee, brightness: pe, temperature: X, conductivity: A, problem: Ae.join(", ") || "none" });
    }
  }), d("alarm_control_panel." + bn + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), v(null, "Front door", "door", !1), v(null, "Smoke alarm", "smoke", !1), d("sensor." + bn + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, E = {};
  let x = null;
  function N() {
    const U = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((q) => {
      q.endsWith("_solar_power") && (l[q] = { ...l[q], state: Wc(U).toFixed(2) }), q.endsWith("_solar_today") && (l[q] = { ...l[q], state: ap(U).toFixed(1) });
    });
  }
  N();
  let ge = 0;
  function oe() {
    let U = !1;
    const q = ++ge % 10 === 0, ue = (X, A, I) => {
      f(X, A, I), U = !0;
    };
    Object.entries(w).forEach(([X, A]) => {
      const I = l[X].attributes.current_position, ie = I < A ? Math.min(A, I + 10) : Math.max(A, I - 10);
      ie === A && delete w[X], ue(X, ie === A ? ie === 0 ? "closed" : "open" : A > I ? "opening" : "closing", { current_position: ie });
    }), Object.entries(E).forEach(([X, A]) => {
      const I = l[X].attributes.current_tilt_position, ie = I < A ? Math.min(A, I + 25) : Math.max(A, I - 25);
      ie === A && delete E[X], ue(X, null, { current_tilt_position: ie });
    }), Object.keys(l).filter((X) => X.startsWith("climate.")).forEach((X) => {
      const A = l[X], I = A.attributes, ie = I.current_temperature, Ae = (A.state === "heat" || A.state === "auto") && ie < I.temperature - 0.05, F = (A.state === "cool" || A.state === "auto") && ie > I.temperature + 0.05, Ie = A.state === "off" ? "off" : Ae ? "heating" : F ? "cooling" : "idle", V = q ? Math.round((ie + (Ae ? 0.1 : F ? -0.1 : 0)) * 10) / 10 : ie;
      (V !== ie || Ie !== I.hvac_action) && ue(X, null, { current_temperature: V, hvac_action: Ie });
    }), Object.keys(l).filter((X) => X.startsWith("humidifier.")).forEach((X) => {
      const A = l[X], I = A.attributes, ie = I.current_humidity, Ae = A.state === "on" && ie < I.humidity, F = Ae && q ? ie + 1 : ie, Ie = A.state !== "on" ? "off" : Ae ? "humidifying" : "idle";
      if (F !== ie || Ie !== I.action) {
        ue(X, null, { current_humidity: F, action: Ie });
        const V = "sensor." + bn + o[X] + "_humidity";
        l[V] && ue(V, String(F));
      }
    });
    const ee = l["vacuum." + bn + "robot"], pe = ee.attributes;
    ee.state === "cleaning" && q && ue(ee.entity_id, null, { battery_level: Math.max(5, pe.battery_level - 1) }), ee.state === "returning" && ue(ee.entity_id, "docked", {}), ee.state === "docked" && pe.battery_level < 100 && ue(ee.entity_id, null, { battery_level: Math.min(100, pe.battery_level + 2) }), x && Date.now() - x.at > 5e3 && (ue("alarm_control_panel." + bn + "house", "armed_" + x.mode, {}), x = null), U && a();
  }
  const Y = setInterval(oe, 1e3), $ = setInterval(() => {
    N(), a();
  }, 60 * 1e3);
  function ne(U, q, ue) {
    const ee = ue == null ? void 0 : ue.entity_id;
    if (!l[ee]) return !1;
    const pe = l[ee], X = pe.attributes, A = (I, ie) => f(ee, I, ie);
    if (U === "climate" && (q === "set_temperature" && A(null, { temperature: Math.max(X.min_temp, Math.min(X.max_temp, ue.temperature)) }), q === "set_hvac_mode" && A(ue.hvac_mode, ue.hvac_mode === "off" ? { hvac_action: "off" } : {}), q === "toggle" && A(pe.state === "off" ? "heat" : "off", pe.state === "off" ? {} : { hvac_action: "off" })), U === "cover") {
      const I = q === "open_cover" ? 100 : q === "close_cover" ? 0 : q === "set_cover_position" ? ue.position : q === "toggle" ? X.current_position > 0 ? 0 : 100 : null;
      q === "stop_cover" && (delete w[ee], delete E[ee], A(X.current_position === 0 ? "closed" : "open")), I != null && I !== X.current_position && (w[ee] = I, A(I > X.current_position ? "opening" : "closing"));
      const ie = q === "open_cover_tilt" ? 100 : q === "close_cover_tilt" ? 0 : q === "set_cover_tilt_position" ? ue.tilt_position : null;
      q === "stop_cover_tilt" && delete E[ee], ie != null && X.current_tilt_position != null && ie !== X.current_tilt_position && (E[ee] = ie);
    }
    if (U === "humidifier" && (q === "set_humidity" && A(null, { humidity: Math.max(X.min_humidity, Math.min(X.max_humidity, ue.humidity)) }), q === "set_mode" && A(null, { mode: ue.mode }), q === "turn_on" || q === "turn_off" || q === "toggle")) {
      const I = q === "turn_on" || q === "toggle" && pe.state !== "on";
      A(I ? "on" : "off", { action: I ? "idle" : "off" });
    }
    if (U === "vacuum" && (q === "start" && A("cleaning", { rooms: ue.rooms || X.rooms }), q === "pause" && A("paused"), q === "return_to_base" && A("returning", { rooms: [] }), q === "locate" && A(null, { located: Date.now() }), q === "set_rooms" && A(null, { rooms: ue.rooms })), U === "valve") {
      const I = q === "open_valve" || q === "toggle" && pe.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(q) && A(I ? "open" : "closed");
    }
    if (U === "alarm_control_panel") {
      q === "alarm_disarm" && (x = null, A("disarmed", { changed_by: "Matt" }));
      const I = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[q];
      I && (x = { mode: I, at: Date.now() }, A("arming", { changed_by: "Matt" }));
    }
    return a(), !0;
  }
  function Z(U) {
    const q = (U == null ? void 0 : U.states) || {}, ue = (U == null ? void 0 : U.entities) || {}, ee = (U == null ? void 0 : U.devices) || {}, pe = (C) => {
      var fe;
      const H = ue[C];
      return H && (H.area_id || H.device_id && ((fe = ee[H.device_id]) == null ? void 0 : fe.area_id)) || null;
    }, X = (C) => {
      const H = ue[C];
      return q[C] && q[C].state !== "unavailable" && !(H != null && H.hidden) && !(H != null && H.entity_category);
    }, A = {};
    Object.keys(q).forEach((C) => {
      const H = pe(C);
      H && X(C) && (A[H] || (A[H] = [])).push(C);
    });
    const I = { ...q, ...l }, ie = (C) => {
      var H, fe;
      return (fe = (H = I[C]) == null ? void 0 : H.attributes) == null ? void 0 : fe.device_class;
    }, Ae = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], F = Object.keys(q).filter((C) => C.startsWith("vacuum.") && X(C)), Ie = Object.values((U == null ? void 0 : U.areas) || {}).filter((C) => !tp.has(C.area_id)).map((C) => {
      const H = C.area_id, fe = A[H] || [], W = (Ke) => fe.filter((Ct) => Ct.startsWith(Ke + ".")), se = (Ke) => W("sensor").filter((Ct) => ie(Ct) === Ke), me = (Ke) => Object.keys(l).filter((Ct) => o[Ct] === H && Ke(Ct)), ye = (Ke, Ct) => Ke.length ? Ke : me(Ct), Ze = ye(se("temperature"), (Ke) => Ke.endsWith(H + "_temperature")), lt = ye(se("humidity"), (Ke) => Ke.endsWith(H + "_humidity")), Lt = se("power").filter((Ke) => /^(W|kW)$/.test(I[Ke].attributes.unit_of_measurement || "")), Mn = W("binary_sensor").filter((Ke) => ie(Ke) === "moisture"), On = ye(W("plant"), (Ke) => Ke.startsWith("plant.")).map((Ke) => ({ id: Ke, readings: me((Ct) => Ct.startsWith("sensor." + Ke.split(".")[1] + "_")) })), mt = [...W("binary_sensor").filter((Ke) => Ae.includes(ie(Ke))), ...me((Ke) => Ke.startsWith("binary_sensor."))];
      return {
        id: H,
        name: C.name,
        icon: C.icon,
        readings: [...Ze.slice(0, 1), ...lt.slice(0, 1), ...Mn],
        power: Lt.length ? Lt.reduce((Ke, Ct) => Ke + Number(I[Ct].state) * (I[Ct].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: W("switch"),
        lights: W("light"),
        actions: [...W("light"), ...ye(W("climate"), (Ke) => Ke.startsWith("climate.")), ...ye(W("cover"), (Ke) => Ke.startsWith("cover.")), ...ye(W("humidifier"), (Ke) => Ke.startsWith("humidifier.")), ...ye(W("valve"), (Ke) => Ke.startsWith("valve.")), ...W("media_player"), ...W("vacuum"), ...F.length ? [] : me((Ke) => Ke.startsWith("vacuum."))],
        solar: me((Ke) => Ke.includes("_solar_")),
        plants: On,
        openings: mt,
        alerts: [...Mn, ...mt].filter((Ke) => {
          var Ct;
          return ((Ct = I[Ke]) == null ? void 0 : Ct.state) === "on";
        })
      };
    }).filter((C) => C.readings.length || C.plugs.length || C.actions.length || C.solar.length || C.plants.length), V = Object.keys(q).find((C) => /^sensor\..*(p1_meter_power|grid_power)$/.test(C) && q[C].state !== "unavailable") || null, We = (C) => Object.keys(q).filter((H) => H.startsWith(C + ".") && X(H)), k = We("alarm_control_panel"), _ = F.length ? F : ["vacuum." + bn + "robot"];
    return {
      states: I,
      rooms: Ie,
      grid: V,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (C) => l[C] ? o[C] : pe(C),
      vacuums: _,
      homeVacuums: _.filter((C) => !Ie.some((H) => H.actions.includes(C))),
      security: {
        alarms: k.length ? k : ["alarm_control_panel." + bn + "house"],
        locks: We("lock"),
        openings: [...Object.keys(l).filter((C) => C.startsWith("binary_sensor.")), "sensor." + bn + "doorbell"]
      }
    };
  }
  return { model: Z, call: ne, stop() {
    clearInterval(Y), clearInterval($);
  } };
}
const Yo = (a) => a < 0 ? 0 : a > 1 ? 1 : a, Bc = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((d) => d + d).join("") : l;
  return [0, 2, 4].map((d) => parseInt(o.slice(d, d + 2), 16) || 0);
}, ip = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), id = {}, qa = (a, l, o) => {
  const d = a + l + o;
  return id[d] || (id[d] = ip(Bc(a).map((f, v) => f + (Bc(l)[v] - f) * o)));
}, rd = {}, El = (a) => rd[a] || (rd[a] = Bc(a));
function rp(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [qa(l.clear[0], l.cloudy[0], 0.12), qa(l.clear[1], l.cloudy[1], 0.12)], l.storm = [qa(l.rain[0], "#000000", 0.22), qa(l.rain[1], "#000000", 0.22)], l;
}
const sp = [
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
], Uo = (a, l) => (sp[(l & 7) * 8 + (a & 7)] + 0.5) / 64, nu = 1, au = 2, ou = 3, iu = 4, Xr = 5, Nl = 6, Pc = 7, ru = 8, sd = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), lp = (a, l, o) => {
  let d = !1;
  for (let f = 0, v = a.length - 1; f < a.length; v = f++) {
    const w = a[f], E = a[v];
    w[1] > o != E[1] > o && l < (E[0] - w[0]) * (o - w[1]) / (E[1] - w[1]) + w[0] && (d = !d);
  }
  return d;
};
function cp(a, l, o, d, { oneBit: f, ink: v, paper: w, snowInk: E }) {
  const x = new Uint8ClampedArray(o * d * 4), N = El(v), ge = El(w);
  for (let oe = 0; oe < d; oe++) for (let Y = 0; Y < o; Y++) {
    const $ = oe * o + Y, ne = l[$];
    if (a[$] == null) continue;
    let Z = El(a[$]);
    if (f) {
      let U;
      ne === iu || ne === ru ? U = !0 : ne === Xr ? U = E : ne === Pc || ne === Nl ? U = !1 : U = Math.round((0.2126 * Z[0] + 0.7152 * Z[1] + 0.0722 * Z[2]) / 255 * 4) / 4 <= Uo(Y, oe), (ne === nu || ne === au || ne === ou || ne === Nl) && (Y > 0 && l[$ - 1] !== ne || Y < o - 1 && l[$ + 1] !== ne || oe > 0 && l[$ - o] !== ne || oe < d - 1 && l[$ + o] !== ne) && (U = !0), Z = U ? N : ge;
    }
    x[$ * 4] = Z[0], x[$ * 4 + 1] = Z[1], x[$ * 4 + 2] = Z[2], x[$ * 4 + 3] = 255;
  }
  return { w: o, h: d, data: x };
}
const dp = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, up = (a) => Hl(a, !1).split("/")[0], pc = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, pp = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", hp = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", fp = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", mp = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", gp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], vp = [".##", "##.", ".#.", "#.."];
function su(a, { width: l, height: o, colors: d, wave: f = 0.38, soft: v = 6, glow: w = 0.6, columns: E = 6 }) {
  const x = { ...ra, dawn: "#e5a77e", ...d }, N = rp(x), ge = l, oe = o, Y = ge / E, $ = Y / 2, ne = Math.PI * 2, Z = a.length ? a : [{ cond: "cloudy", night: !1 }], U = [...Array(E * 2)].map((pe, X) => {
    const A = Z[Math.min(X, Z.length - 1)], I = up(A.cond), ie = X % 2 === 1;
    return { cond: A.cond, k: I, night: ie, sky: N[I][ie ? 1 : 0], cover: dp[I] };
  }), q = (pe) => oe * (0.5 - f * Math.cos(ne * (pe / Y - 0.25)));
  return { C: x, S: U, W: ge, H: oe, cw: Y, sw: $, TAU: ne, yb: q, side: (pe, X, A) => {
    const I = (pe ? q(X) - A : A - q(X)) / Math.max(3, v * 1.4) + 0.5;
    return I <= 0 ? 0 : I >= 1 ? 1 : I;
  }, glowAt: (pe) => {
    const X = ((pe / Y - 0.25) % 1 + 1) % 1, A = Math.max(0, Math.min(E - 1, Math.round(pe / Y - 0.25))), I = Math.max(0, Math.min(E - 1, Math.round(pe / Y - 0.75))), ie = 1 - (U[2 * A].cover + U[2 * I + 1].cover) / 2, Ae = Math.sin(Math.PI * Math.min(1, Math.max(0, q(pe) / oe)));
    return { c: X < 0.5 ? x.dusk : x.dawn, a: w * (0.2 + 0.8 * ie) * Ae * Ae };
  }, soft: v, tw: Y * 0.3, sy: oe / 90 };
}
function lu(a, { clock: l = 0, ambient: o = !1, seed: d = 1 }) {
  const { S: f, sw: v, side: w, C: E, TAU: x, sy: N, H: ge } = a, oe = l, Y = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  f.forEach((Z, U) => {
    const q = pc(d * 977 + U * 131 + 7), ue = (U + 0.5) * v, ee = Z.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[Z.k] : 0;
    for (let pe = 0; pe < ee; pe++) {
      const X = ue + (q() - 0.5) * v * 1.6, A = (6 + q() * 76) * N, I = q() < 0.35, ie = 1.8 + q() * 1.6, Ae = w(!0, X, A) * (I ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(x * oe / 2600 + pe * 1.7 + U) : 1);
      Ae >= 0.03 && Y.stars.push({ x: X, y: A, big: I, size: ie, o: Ae });
    }
    if (!Z.night && (Z.k === "clear" || Z.k === "partly")) {
      const pe = ue + (q() - 0.5) * v * 0.3, X = Math.min(15, v * 0.29);
      Y.suns.push({ x: pe, y: 32 * N, rad: X, halo: X * 2.8 * (o ? 1 + 0.07 * Math.sin(x * oe / 3600 + U) : 1) });
    }
    if (Z.night && (Z.k === "clear" || Z.k === "partly")) {
      const pe = Math.min(0.78, v * 0.55 / 34), X = ue - 23 * pe + (q() - 0.5) * v * 0.2;
      Y.moons.push({ x: X + 23 * pe, y: (4 + (o ? 0.8 * Math.sin(x * oe / 5200 + U) : 0)) * N + 23 * pe, d: 46 * pe });
    }
  });
  const $ = Math.max(56, Math.min(100, ge * 0.45)), ne = Math.max(1, v / ($ * 2.4));
  return f.forEach((Z, U) => {
    const q = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[Z.k];
    if (!q) return;
    const ue = Z.k === "partly" ? 1 : Math.round(q * ne), ee = pc(d * 577 + U * 71 + 3), pe = (U + 0.5) * v, X = Z.k === "rain" || Z.k === "storm" || Z.night ? E.cloudNight : E.cloudDay, A = Z.night ? 0.82 : Z.k === "storm" ? 0.75 : 1;
    for (let I = 0; I < ue; I++) {
      const ie = $ / 46 * (Z.k === "partly" ? 1 : 0.8 + ee() * 0.4), Ae = pe + (Z.k === "partly" ? v * 0.12 : ((I + 0.5) / ue - 0.5) * v * 0.95 + (ee() - 0.5) * v * 0.5 / ue), F = (Z.k === "partly" ? 40 : 6 + ee() * 26) * N, Ie = o ? 2.5 * Math.sin(x * oe / 9e3 + U * 1.3 + I * 2.1) : 0, V = o ? 0.9 * Math.sin(x * oe / 6100 + U + I) : 0;
      Y.clouds.push({ x: Ae - 23 * ie + Ie, y: F - 15.33 * ie + V, w: 46 * ie, h: 30.66 * ie, fill: X, o: A * (ue > 1 && I === 0 ? 0.85 : 1) });
    }
  }), f.forEach((Z, U) => {
    const q = pc(d * 313 + U * 29 + 11), ue = (U + 0.5) * v, ee = Z.cond === "pouring" ? 16 : Z.cond === "rainy" || Z.cond === "hail" ? 9 : Z.cond === "lightning-rainy" ? 12 : Z.cond === "snowy-rainy" ? 5 : 0;
    for (let X = 0; X < ee; X++) {
      let A = ue + (q() - 0.5) * v * 1.05, I = 44 + q() * 36, ie = 1;
      if (o) {
        const F = ((I - 44 + oe * 0.04) % 36 + 36) % 36;
        A -= 0.21 * (F - (I - 44)), I = 44 + F, ie = Math.min(1, F / 6, (36 - F) / 6);
      }
      I *= N;
      const Ae = w(Z.night, A, I) * ie;
      Ae >= 0.05 && Y.drops.push({ x: A, y: I, o: Ae });
    }
    const pe = Z.cond === "snowy" ? 11 : Z.cond === "snowy-rainy" ? 6 : 0;
    for (let X = 0; X < pe; X++) {
      let A = ue + (q() - 0.5) * v * 1.05, I = 40 + q() * 44, ie = 1;
      if (o) {
        const F = ((I - 40 + oe * 9e-3) % 44 + 44) % 44;
        I = 40 + F, A += 1.6 * Math.sin(x * oe / 2800 + X * 1.9 + U), ie = Math.min(1, F / 6, (44 - F) / 6);
      }
      I *= N;
      const Ae = w(Z.night, A, I) * ie;
      Ae >= 0.05 && Y.flakes.push({ x: A, y: I, o: Ae });
    }
    if (Z.k === "fog") {
      const X = Z.night ? "#c8ccd6" : "#ffffff", A = Z.night ? 0.28 : 0.62, I = o ? 4 * Math.sin(x * oe / 8e3 + U) : 0;
      for (let ie = 0; ie < 4; ie++) Y.fogs.push({ x: ue - v * 0.75 + ie % 2 * v * 0.18 + (ie % 2 ? I : -I), y: (30 + ie * 13) * N, w: v * 1.3, c: X, a: A });
    }
    if (Z.k === "storm") {
      const X = (oe / 3400 + U * 0.37) % 1;
      Y.bolts.push({ x: ue + (q() - 0.5) * v * 0.3 - 5, y: 36 * N, o: o && !(X < 0.05 || X > 0.09 && X < 0.12) ? 0.8 : 1 });
    }
  }), Y;
}
function bp(a, l, o, d, f, v, w, E) {
  const { S: x, C: N, cw: ge, yb: oe, glowAt: Y, soft: $, tw: ne, sy: Z } = a, U = new Array(o * d), q = new Uint8Array(o * d), ue = new Uint8Array(o * d), ee = (k, _, C, H, fe) => {
    C == null || k < 0 || _ < 0 || k >= o || _ >= d || (H >= 1 || H > Uo(k + 5, _ + 3)) && (U[_ * o + k] = C, q[_ * o + k] = fe);
  }, pe = (k, _, C, H) => {
    for (let fe = Math.max(0, Math.floor(_ - C) - 1); fe <= Math.min(d - 1, _ + C + 1); fe++) for (let W = Math.max(0, Math.floor(k - C) - 1); W <= Math.min(o - 1, k + C + 1); W++) H(W, fe, W + 0.5 - k, fe + 0.5 - _);
  }, X = (k, _, C) => {
    for (let fe = 0; fe < k.length - 1; fe++) {
      const W = (fe + _) * ge;
      if (C < W - ne / 2) return [k[fe], k[fe], 0];
      if (C <= W + ne / 2) return [k[fe], k[fe + 1], (C - W + ne / 2) / ne];
    }
    const H = k[k.length - 1];
    return [H, H, 0];
  }, A = x.filter((k) => !k.night).map((k) => k.sky), I = x.filter((k) => k.night).map((k) => k.sky), ie = $ / v, Ae = 16 * Z / v;
  for (let k = 0; k < o; k++) {
    const _ = (k + 0.5) * f, C = oe(_) / v, H = X(A, 0.75, _), fe = X(I, 1.25, _), W = Y(_);
    for (let se = 0; se < d; se++) {
      const me = Uo(k, se), ye = se + 0.5 - C, Ze = (ie > 0.01 ? Yo(0.5 + ye / ie) : ye > 0 ? 1 : 0) > me;
      let lt = Ze ? H[2] > me ? H[1] : H[0] : fe[2] > me ? fe[1] : fe[0];
      (Ze ? Yo(((se + 0.5) / d - 0.45) / 0.55) * 0.7 : Yo(1 - (se + 0.5) / (d * 0.55)) * 0.7) > Uo(k + 2, se + 5) && (lt = Ze ? qa(lt, "#ffffff", 0.18) : qa(lt, "#000000", 0.25)), Ze && ye >= 0 && ye < Ae && W.a * 1.3 * (1 - ye / Ae) > Uo(k + 6, se + 1) && (lt = W.c), U[se * o + k] = lt, ue[se * o + k] = Ze ? 0 : 1;
    }
  }
  const F = qa(N.sun, "#ffffff", 0.55), Ie = qa(N.moon, "#ffffff", 0.6);
  l.stars.forEach((k) => {
    const _ = Math.floor(k.x / f), C = Math.floor(k.y / v);
    if (_ < 0 || C < 0 || _ >= o || C >= d || !ue[C * o + _] || k.o < 0.15) return;
    const H = k.o > 0.45 ? N.star : qa(N.star, U[C * o + _], 0.5), fe = k.big && k.o > 0.6 ? Math.floor(k.size / f) : 0;
    ee(_, C, H, 1, Pc);
    for (let W = 1; W <= fe; W++) [[_ - W, C], [_ + W, C], [_, C - W], [_, C + W]].forEach((se) => {
      se[0] >= 0 && se[1] >= 0 && se[0] < o && se[1] < d && ue[se[1] * o + se[0]] && ee(se[0], se[1], H, 1, Pc);
    });
  }), l.suns.forEach((k) => {
    const _ = Math.max(1.5, k.rad / f), C = k.x / f, H = k.y / v, fe = k.halo / f * 0.85;
    if (pe(C, H, fe, (W, se, me, ye) => {
      const Ze = Math.sqrt(me * me + ye * ye);
      Ze > _ && Ze < fe && !ue[se * o + W] && ee(W, se, F, 0.3 * (1 - (Ze - _) / (fe - _)), 0);
    }), E) {
      const W = Math.floor(w / 500) % 2, se = Math.max(1, _ * 0.3);
      for (let me = 0; me < 8; me++) if (me % 2 === W) for (let ye = _ + 1.2; ye < _ + 1.2 + se; ye += 0.7) ee(Math.floor(C + Math.cos(me * Math.PI / 4) * ye), Math.floor(H + Math.sin(me * Math.PI / 4) * ye), N.sun, 1, ru);
    }
    pe(C, H, _, (W, se, me, ye) => {
      me * me + ye * ye <= _ * _ && ee(W, se, Yo(((ye / _ + 1) / 2 - 0.6) / 0.4) > Uo(W, se) ? N.sunEdge : N.sun, 1, nu);
    });
  }), l.moons.forEach((k) => {
    const _ = Math.max(1.5, k.d * 0.37 / f), C = k.x / f, H = k.y / v, fe = C + 0.547 * _, W = H - 0.503 * _, se = 0.82 * _;
    pe(C, H, _, (me, ye, Ze, lt) => {
      if (Ze * Ze + lt * lt > _ * _) return;
      const Lt = me + 0.5 - fe, Mn = ye + 0.5 - W;
      Lt * Lt + Mn * Mn > se * se && ee(me, ye, Yo((lt + _) / (2 * _) * 1.1 - 0.1) > Uo(me, ye) ? N.moon : Ie, 1, au);
    });
  }), l.clouds.forEach((k) => {
    const _ = Math.max(3, k.w / f), C = _ * 0.6665, H = k.x / f, fe = k.y / v, W = qa(k.fill, "#000000", 0.16);
    for (let se = Math.max(0, Math.floor(fe) - 1); se <= Math.min(d - 1, fe + C + 1); se++) for (let me = Math.max(0, Math.floor(H) - 1); me <= Math.min(o - 1, H + _ + 1); me++) {
      const ye = (me + 0.5 - H) / _, Ze = (se + 0.5 - fe) / _;
      sd(ye, Ze) && ee(me, se, !sd(ye, Ze + 1 / _) || Yo((Ze - 0.42) / 0.25) * 0.8 > Uo(me, se) ? W : k.fill, k.o, ou);
    }
  }), l.fogs.forEach((k) => {
    const _ = Math.floor(k.y / v), C = Math.max(_, Math.floor((k.y + 6 * Z) / v) - 1), H = Math.floor(k.x / f), fe = Math.floor((k.x + k.w) / f);
    for (let W = _; W <= C; W++) for (let se = H; se <= fe; se++) {
      const me = (se - H) / Math.max(1, fe - H);
      ee(se, W, k.c, k.a * (me < 0.25 ? me / 0.25 : me > 0.75 ? (1 - me) / 0.25 : 1), 0);
    }
  });
  const V = Math.max(2, Math.round(9 / v));
  l.drops.forEach((k) => {
    const _ = k.x / f, C = Math.floor(k.y / v);
    for (let H = 0; H < V; H++) ee(Math.floor(_ - 0.208 * H * v / f), C + H, N.rain, k.o, iu);
  });
  const We = Math.max(0, Math.round(4.4 / f / 2.6));
  return l.flakes.forEach((k) => {
    const _ = Math.floor(k.x / f), C = Math.floor(k.y / v);
    ee(_, C, N.snow, k.o, Xr);
    for (let H = 1; H <= We; H++)
      ee(_ - H, C, N.snow, k.o, Xr), ee(_ + H, C, N.snow, k.o, Xr), ee(_, C - H, N.snow, k.o, Xr), ee(_, C + H, N.snow, k.o, Xr);
  }), l.bolts.forEach((k) => {
    if (f <= 3.5)
      for (let _ = Math.floor(k.y / v); _ <= (k.y + 24) / v; _++) for (let C = Math.floor(k.x / f); C <= (k.x + 11) / f; C++)
        lp(gp, (C + 0.5) * f - k.x, (_ + 0.5) * v - k.y) && ee(C, _, N.sun, 1, Nl);
    else {
      const _ = Math.round(k.x / f), C = Math.round(k.y / v);
      vp.forEach((H, fe) => H.split("").forEach((W, se) => {
        W === "#" && ee(_ + se, C + fe, N.sun, 1, Nl);
      }));
    }
  }), { col: U, ids: q };
}
function wp(a, l) {
  const o = l.px, d = Math.max(6, Math.round(l.width / o)), f = Math.max(6, Math.round(l.height / o)), v = l.width / d, w = l.height / f, E = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, x = ($) => {
    const ne = su($, l);
    return bp(ne, lu(ne, { clock: E, ambient: l.ambient, seed: l.seed }), d, f, v, w, E, l.ambient);
  }, N = x(a), ge = l.reveal == null ? 1 : Yo(l.reveal);
  let oe = N.col, Y = N.ids;
  if (ge < 1) {
    const $ = l.prev ? x(l.prev) : null, ne = ge * (d + 12);
    oe = new Array(d * f), Y = new Uint8Array(d * f);
    for (let Z = 0; Z < d * f; Z++) {
      const U = Z % d, q = Z / d | 0;
      (l.reduce ? ge : Yo((ne - U) / 12)) > Uo(U, q) ? (oe[Z] = N.col[Z], Y[Z] = N.ids[Z]) : $ ? (oe[Z] = $.col[Z], Y[Z] = $.ids[Z]) : (oe[Z] = null, Y[Z] = 255);
    }
  }
  return cp(oe, Y, d, f, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function yp(a, l, o) {
  const d = o.width, f = o.height, v = o.reveal == null ? 1 : Yo(o.reveal), w = (Y, $) => {
    const ne = su($, o);
    xp(Y, ne, lu(ne, o));
  };
  if (a.clearRect(0, 0, d, f), v >= 1) {
    w(a, l);
    return;
  }
  if (o.prev && w(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = v, w(a, l), a.restore();
    return;
  }
  const E = a.canvas, x = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (x.width !== E.width || x.height !== E.height) && (x.width = E.width, x.height = E.height);
  const N = x.getContext("2d");
  N.setTransform(a.getTransform()), N.clearRect(0, 0, d, f), w(N, l);
  const ge = v * (d + 64) - 64, oe = N.createLinearGradient(ge, 0, ge + 64, 0);
  oe.addColorStop(0, "rgba(0,0,0,1)"), oe.addColorStop(1, "rgba(0,0,0,0)"), N.globalCompositeOperation = "destination-in", N.fillStyle = oe, N.fillRect(0, 0, d, f), N.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(x, 0, 0), a.restore();
}
function xp(a, l, o) {
  const { W: d, H: f, S: v, C: w, cw: E, yb: x, glowAt: N, soft: ge, tw: oe, sy: Y } = l, $ = a.getTransform().a || 1, ne = (V) => {
    a.shadowColor = V ? "rgba(28,18,8,.22)" : "transparent", a.shadowBlur = V ? 4 * $ : 0, a.shadowOffsetY = V ? 1.5 * $ : 0;
  }, Z = (V, We) => {
    const k = El(V);
    return "rgba(" + k[0] + "," + k[1] + "," + k[2] + "," + Math.max(0, Math.min(1, We)).toFixed(3) + ")";
  }, U = (V, We) => {
    const k = a.createLinearGradient(0, 0, d, 0);
    k.addColorStop(0, V[0]);
    for (let _ = 0; _ < V.length - 1; _++) {
      const C = (_ + We) * E, H = (C - oe / 2) / d, fe = (C + oe / 2) / d;
      H > 0 && H < 1 && k.addColorStop(H, V[_]), fe > 0 && fe < 1 && k.addColorStop(fe, V[_ + 1]);
    }
    return k.addColorStop(1, V[V.length - 1]), k;
  }, q = Math.max(24, Math.ceil(d / 4)), ue = (V, We) => {
    a.beginPath();
    for (let k = 0; k <= q; k++) {
      const _ = d * k / q, C = V == null ? 0 : x(_) + V;
      k ? a.lineTo(_, C) : a.moveTo(_, C);
    }
    for (let k = q; k >= 0; k--) {
      const _ = d * k / q;
      a.lineTo(_, x(_) + We);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = U(v.filter((V) => !V.night).map((V) => V.sky), 0.75), a.fillRect(0, 0, d, f);
  const ee = a.createLinearGradient(0, 0, d, 0);
  for (let V = 0; V <= 64; V++) {
    const We = N(d * V / 64);
    ee.addColorStop(V / 64, Z(We.c, Math.min(1, We.a)));
  }
  a.fillStyle = ee;
  for (let V = 0; V < 8; V++)
    a.globalAlpha = 1 - V / 8, ue(V * 2 * Y, (V + 1) * 2 * Y);
  a.fillStyle = U(v.filter((V) => V.night).map((V) => V.sky), 1.25);
  const pe = Math.max(0.5, ge), X = 6;
  a.globalAlpha = 1, ue(null, -pe);
  for (let V = 0; V < X; V++)
    a.globalAlpha = 1 - (V + 0.5) / X, ue(-pe + 2 * pe * V / X, -pe + 2 * pe * (V + 1) / X);
  a.globalAlpha = 1;
  const A = new Path2D(fp), I = new Path2D(hp), ie = new Path2D(pp), Ae = new Path2D(mp);
  a.fillStyle = w.star, o.stars.forEach((V) => {
    a.globalAlpha = V.o, V.big ? (a.save(), a.translate(V.x, V.y), a.scale(V.size, V.size), a.fill(A), a.restore()) : (a.beginPath(), a.arc(V.x, V.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const F = qa(w.sun, "#ffffff", 0.55);
  o.suns.forEach((V) => {
    const We = a.createRadialGradient(V.x, V.y, 0, V.x, V.y, V.halo);
    We.addColorStop(0, Z(F, 0.42)), We.addColorStop(0.7, Z(F, 0)), a.fillStyle = We, a.beginPath(), a.arc(V.x, V.y, V.halo, 0, Math.PI * 2), a.fill();
    const k = a.createLinearGradient(0, V.y - V.rad, 0, V.y + V.rad);
    k.addColorStop(0.6, w.sun), k.addColorStop(1, w.sunEdge), a.fillStyle = k, ne(!0), a.beginPath(), a.arc(V.x, V.y, V.rad, 0, Math.PI * 2), a.fill(), ne(!1);
  });
  const Ie = qa(w.moon, "#ffffff", 0.6);
  o.moons.forEach((V) => {
    a.save(), a.translate(V.x - V.d / 2, V.y - V.d / 2), a.scale(V.d / 46, V.d / 46);
    const We = a.createLinearGradient(0, 6, 0, 40);
    We.addColorStop(0, Ie), We.addColorStop(1, w.moon), a.fillStyle = We, ne(!0), a.fill(I), ne(!1), a.restore();
  }), o.clouds.forEach((V) => {
    a.save(), a.globalAlpha = V.o, a.translate(V.x, V.y), a.scale(V.w / 46, V.h / 30.66), a.translate(-4, -9.67), a.fillStyle = V.fill, ne(!0), a.fill(ie), ne(!1), a.restore();
  }), o.fogs.forEach((V) => {
    const We = a.createLinearGradient(V.x, 0, V.x + V.w, 0);
    We.addColorStop(0, Z(V.c, 0)), We.addColorStop(0.25, Z(V.c, V.a)), We.addColorStop(0.75, Z(V.c, V.a)), We.addColorStop(1, Z(V.c, 0)), a.fillStyle = We, a.fillRect(V.x, V.y, V.w, 6 * Y);
  }), a.fillStyle = w.rain, o.drops.forEach((V) => {
    a.save(), a.globalAlpha = V.o, a.translate(V.x, V.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = w.snow, o.flakes.forEach((V) => {
    a.globalAlpha = V.o, a.beginPath(), a.arc(V.x, V.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = w.sun, o.bolts.forEach((V) => {
    a.save(), a.globalAlpha = V.o, a.translate(V.x, V.y), a.fill(Ae), a.restore();
  }), a.restore();
}
const kp = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", Kr = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, xl = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, hc = (a, l) => '<path class="' + l + '" d="' + a + '"/>', Mp = (a, l) => ' style="animation-delay:-' + Math.round(a * 137 % l) + 'ms"', Oa = (a, l, o, d) => {
  const f = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (d < 1 ? ' opacity="' + d + '"' : "") + Mp(a, 2400) + ' d="M' + a + " " + (l - o) + "L" + (a + f) + " " + (l - f) + "L" + (a + o) + " " + l + "L" + (a + f) + " " + (l + f) + "L" + a + " " + (l + o) + "L" + (a - f) + " " + (l + f) + "L" + (a - o) + " " + l + "L" + (a - f) + " " + (l - f) + 'Z"/>';
}, ld = ([a, l, o], d) => '<path class="wbMoonPath" d="' + a + '" fill="url(#' + d + ')"/><defs><linearGradient id="' + d + '" x1="0" y1="' + l + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Sp = (a, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Cp = (a) => (a ? ["29.35", "43.04", "56.74"].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), Tp = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, o], d) => '<circle class="wbFlake" style="animation-delay:-' + d * 640 + 'ms" cx="' + l + '" cy="' + o + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Lp(a, l, o, d) {
  const f = (v) => '<g filter="url(#' + d + '-sh)">' + v + "</g>";
  return a === "clear" ? l ? f(ld(o ? xl.l : xl.s, d)) + (o ? Oa(70, 20, 5.83, 1) + Oa(78.33, 41.67, 3.75, 0.8) + Oa(60, 71.67, 3.33, 0.6) : Oa(42, 12, 3.5, 1) + Oa(47, 25, 2.25, 0.8) + Oa(36, 43, 2, 0.6)) : f(Sp(d, o)) : a === "partly" ? f(l ? ld(o ? xl.lp : xl.sp, d) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + f(hc(o ? Kr.lp : Kr.sp, l ? "wbCloudLight" : "wbBright")) + (l ? o ? Oa(73.33, 16.67, 4.17, 0.9) : Oa(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? f(hc(o ? Kr.lc : Kr.s, l ? "wbCloudLight" : "wbBright")) + (l ? o ? Oa(15, 15, 3.75, 0.8) + Oa(76.67, 13.33, 2.92, 0.6) : Oa(9, 9, 2.25, 0.8) + Oa(46, 8, 1.75, 0.6) : "") : f(hc(o ? Kr.lr : Kr.s, "wbCloudLight")) + (a === "rain" ? Cp(o) : Tp(o));
}
const Ap = (a, l) => '<defs><filter id="' + a + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (l ? 1.6 : 1) + '" stdDeviation="' + (l ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function _p(a, l, o, d) {
  let f = kp(a);
  const v = f === "night" || !!o;
  f === "night" && (f = "clear");
  const w = l ? 90 : 54;
  return { k: f, night: v, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + Ap(d, l) + Lp(f, v, l, d) + "</svg>" };
}
const Ep = [
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
], kl = (a, l) => (Ep[l % 8 * 8 + a % 8] + 0.5) / 64, io = (a) => [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)], Yn = (a, l, o) => [Math.round(a[0] + (l[0] - a[0]) * o), Math.round(a[1] + (l[1] - a[1]) * o), Math.round(a[2] + (l[2] - a[2]) * o)], Fs = (a) => a < 0 ? 0 : a > 1 ? 1 : a, cd = (a, l) => {
  let o = a * 374761393 + l * 668265263 ^ 1540483477;
  return o = Math.imul(o ^ o >>> 13, 1274126177), ((o ^ o >>> 16) >>> 0) / 4294967296;
}, cr = [255, 255, 255], na = io("#26221e"), dd = io("#0288d1"), Dp = io("#01579b"), fc = io(ra.cloudDay), mc = io(ra.cloudNight), Ml = io(ra.dusk), gc = io(ra.sunEdge), Rp = io(ra.sun), Np = 10, ud = 0.3, Zo = 56, cu = 21;
function Bp(a) {
  const l = Array.from({ length: cu }, () => new Array(Zo).fill(void 0)), o = (w, E, x) => {
    l[E][w] = x;
  }, d = Yn(Ml, na, 0.35), f = Yn(na, cr, 0.22);
  for (let w = 0; w <= 6; w++) {
    const E = w < 2 ? Zo - 2 : Zo - 1;
    for (let x = 6 - w; x <= E; x++) o(x, w, w < 2 ? d : w === 6 ? f : na);
  }
  const v = [Ml, gc, mc, io(ra.skyRainDay), Yn(Ml, na, 0.2), Yn(a, na, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, E) => {
    const x = 9 + E * 6;
    for (let N = 0; N < w; N++) {
      const ge = v[(E * 2 + N * 3) % v.length];
      for (let oe = x; oe < x + 5; oe++)
        o(oe, 7 + N * 2, Yn(ge, na, 0.12)), o(oe, 8 + N * 2, N === w - 1 ? Yn(ge, cr, 0.3) : ge);
      o(x + 5, 7 + N * 2, na), o(x + 5, 8 + N * 2, na);
    }
  });
  for (let w = 7; w <= 12; w++) o(5, w, na);
  o(5, 13, gc);
  for (let w = 7; w <= 14; w++) for (let E = 42; E <= 51; E++) o(E, w, E === 51 ? mc : fc);
  for (let w = 43; w <= 50; w += 2)
    o(w, 12, na), o(w, 9, Yn(na, fc, 0.4));
  for (let w = 40; w <= 53; w++) o(w, 14, w === 40 || w === 53 ? mc : fc);
  for (let w = 15; w <= 18; w++) for (let E = 46; E <= 49; E++) o(E, w, w === 18 ? na : w === 16 ? gc : Ml);
  for (let w = 15; w <= 19; w++) o(44, w, na);
  return o(44, 20, Rp), l;
}
function Pp(a, l, o, d) {
  const f = Math.max(1, Math.round(a)), v = Math.max(1, Math.round(l)), w = new Uint8ClampedArray(f * v * 4), E = io(d.skyClearDay), x = io(d.skyFogDay), N = Bp(E), ge = Math.round(v * 0.55), oe = Fs(1 - Math.log(o / ud) / Math.log(Np / ud)), Y = Yn(E, x, oe), $ = (q) => Fs((q - 0.1) / 0.9), ne = Fs((1 - Math.exp(-2 / o) - 0.2) / 0.8), Z = Math.round(f / 2 - Zo / 2), U = ge + 3;
  for (let q = 0; q < v; q++) {
    const ue = U - 1 - q, ee = q - U;
    for (let pe = 0; pe < f; pe++) {
      const X = pe - Z;
      let A, I;
      const ie = ue >= 0 && ue < cu && X >= 0 && X < Zo ? N[ue][X] : void 0;
      if (ie)
        A = ie, I = ne;
      else if (ue >= 0 && ue <= 1 && X >= 4 - ue && X <= 5 - ue)
        A = Yn(cr, dd, 0.15), I = ne;
      else if (q < ge) {
        const Ie = Fs(((q + 0.5) / ge - 0.15) / 0.85) * 3, V = Math.min(3, Math.floor(Ie + kl(pe + 2, q + 5)));
        A = Yn(Y, cr, V * 0.1), I = oe * 0.95;
      } else {
        const Ie = (q - ge + 0.5) / (v - ge), V = Math.min(1.5, 6e-3 / (Ie * Ie)), We = Fs(Ie * 1.4) * 3, k = Math.min(3, Math.floor(We + kl(pe + 1, q + 6)));
        A = Yn(dd, Dp, k / 3);
        const _ = 1 + Math.round(Ie * 7), C = Math.floor(pe / (_ * 3)), H = 0.06 + 0.16 * Ie, fe = pe % (_ * 3) < _;
        fe && cd(C, q) < H ? A = Yn(A, cr, 0.18 + 0.1 * (1 - Ie)) : fe && Ie > 0.5 && cd(C, q - 1) < H && (A = Yn(A, na, 0.12)), I = $(1 - Math.exp(-V / o)), ee === 0 && X >= 3 && X <= 8 ? (A = Yn(A, cr, X < 6 ? 0.8 : 0.45), I = ne) : ee >= 0 && ee <= 2 && X >= Zo && X < Zo + 40 ? ((1 - (X - Zo) / 40) * (ee === 1 ? 0.9 : 0.5) > kl(pe, q + 3) && (A = Yn(A, cr, 0.5)), I = ne) : ee === 0 && X >= 6 && X < Zo && (A = Yn(A, na, X % 2 === 0 ? 0.35 : 0.2), I = ne);
      }
      const Ae = I > kl(pe, q) ? x : A, F = (q * f + pe) * 4;
      w[F] = Ae[0], w[F + 1] = Ae[1], w[F + 2] = Ae[2], w[F + 3] = 255;
    }
  }
  return { data: w, w: f, h: v };
}
const Ip = {
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
}, Hp = 1.6;
function Fp(a, l) {
  const o = a ? Ip[String(a).toUpperCase()] : void 0;
  if (!o || !(l > 0)) return;
  const d = (v) => Math.abs(Math.log(v[2] / l)), f = o.reduce((v, w) => d(w) < d(v) ? w : v);
  return d(f) <= Math.log(Hp) ? { from: f[0], to: f[1], km: f[2] } : void 0;
}
const Op = (a, l) => l === "mi" ? a * 1.609344 : l === "m" ? a / 1e3 : l === "ft" ? a * 3048e-7 : l === "yd" ? a * 9144e-7 : a, qp = (a) => a < 1 ? "very_poor" : a < 4 ? "poor" : a < 10 ? "moderate" : a < 20 ? "good" : a < 40 ? "very_good" : "excellent", oo = 6e4, Pt = 36e5, yo = 864e5, Ws = 1440, Wp = 6, jp = 10 * oo, pd = 3, zp = 3, hd = { day: [6, 22], waking: [7, 23], all: [0, 24] }, Vp = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], Gp = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", fd = (a, l, o, d) => '<circle cx="' + a + '" cy="' + l + '" r="' + o + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((f) => {
  const v = Math.cos(f * Math.PI / 180), w = Math.sin(f * Math.PI / 180), E = o + 2, x = o + 2 + d;
  return "M" + (a + v * E).toFixed(2) + " " + (l + w * E).toFixed(2) + "L" + (a + v * x).toFixed(2) + " " + (l + w * x).toFixed(2);
}).join("") + '"/>', zo = (a) => '<path d="' + Gp + '"' + (a ? ' transform="' + a + '"' : "") + "/>", Vo = (a) => '<path d="' + a + '"/>', md = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function Up(a, l) {
  const o = "translate(0,-3)";
  switch (a) {
    case "sunny":
      return l ? md : fd(12, 12, 4, 2.5);
    case "clear-night":
      return md;
    case "partlycloudy":
      return (l ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : fd(7.5, 7.5, 2.6, 1.4)) + zo("translate(3.6,3) scale(.85)");
    case "cloudy":
      return zo();
    case "fog":
      return Vo("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return zo(o) + Vo("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return zo(o) + Vo("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return zo(o) + Vo("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return zo(o) + Vo("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return zo(o) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return zo(o) + Vo("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return zo(o) + Vo("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return Vo("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + Vo("M12 8v5M12 16h.01");
  }
}
const vc = (a, l) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + Up(a, l) + "</svg>", Yp = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Zp = 30 * oo, Kp = 7, $p = 3, gd = 1, Xp = oo, Jp = 15 * oo, Qp = 5, wn = {
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
  radar: "M19.07,4.93L17.66,6.34C19.1,7.79 20,9.79 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12C4,7.92 7.05,4.56 11,4.07V6.09C8.16,6.57 6,9.03 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12C18,10.34 17.33,8.84 16.24,7.76L14.83,9.17C15.55,9.9 16,10.9 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12C8,10.14 9.28,8.59 11,8.14V10.28C10.4,10.63 10,11.26 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.26 13.6,10.62 13,10.28V2H12A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,9.24 20.88,6.74 19.07,4.93Z",
  airFilter: "M19,18.31V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16.3C4.54,16.12 3.95,16 3,16A1,1 0 0,1 2,15A1,1 0 0,1 3,14C3.82,14 4.47,14.08 5,14.21V12.3C4.54,12.12 3.95,12 3,12A1,1 0 0,1 2,11A1,1 0 0,1 3,10C3.82,10 4.47,10.08 5,10.21V8.3C4.54,8.12 3.95,8 3,8A1,1 0 0,1 2,7A1,1 0 0,1 3,6C3.82,6 4.47,6.08 5,6.21V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V6.16C20.78,6.47 21.54,7.13 21.71,7.29C22.1,7.68 22.1,8.32 21.71,8.71C21.32,9.1 20.8,9.09 20.29,8.71V8.71C20.29,8.71 19.25,8 17,8C15.74,8 14.91,8.41 13.95,8.9C12.91,9.41 11.74,10 10,10C9.64,10 9.31,10 9,9.96V7.95C9.3,8 9.63,8 10,8C11.26,8 12.09,7.59 13.05,7.11C14.09,6.59 15.27,6 17,6V4H7V20H17V18C18.5,18 18.97,18.29 19,18.31M17,10C15.27,10 14.09,10.59 13.05,11.11C12.09,11.59 11.26,12 10,12C9.63,12 9.3,12 9,11.95V13.96C9.31,14 9.64,14 10,14C11.74,14 12.91,13.41 13.95,12.9C14.91,12.42 15.74,12 17,12C19.25,12 20.29,12.71 20.29,12.71V12.71C20.8,13.1 21.32,13.1 21.71,12.71C22.1,12.32 22.1,11.69 21.71,11.29C21.5,11.08 20.25,10 17,10M17,14C15.27,14 14.09,14.59 13.05,15.11C12.09,15.59 11.26,16 10,16C9.63,16 9.3,16 9,15.95V17.96C9.31,18 9.64,18 10,18C11.74,18 12.91,17.41 13.95,16.9C14.91,16.42 15.74,16 17,16C19.25,16 20.29,16.71 20.29,16.71V16.71C20.8,17.1 21.32,17.1 21.71,16.71C22.1,16.32 22.1,15.69 21.71,15.29C21.5,15.08 20.25,14 17,14Z",
  eyeOutline: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z",
  flower: "M3,13A9,9 0 0,0 12,22C12,17 7.97,13 3,13M12,5.5A2.5,2.5 0 0,1 14.5,8A2.5,2.5 0 0,1 12,10.5A2.5,2.5 0 0,1 9.5,8A2.5,2.5 0 0,1 12,5.5M5.6,10.25A2.5,2.5 0 0,0 8.1,12.75C8.63,12.75 9.12,12.58 9.5,12.31C9.5,12.37 9.5,12.43 9.5,12.5A2.5,2.5 0 0,0 12,15A2.5,2.5 0 0,0 14.5,12.5C14.5,12.43 14.5,12.37 14.5,12.31C14.88,12.58 15.37,12.75 15.9,12.75C17.28,12.75 18.4,11.63 18.4,10.25C18.4,9.25 17.81,8.4 16.97,8C17.81,7.6 18.4,6.74 18.4,5.75C18.4,4.37 17.28,3.25 15.9,3.25C15.37,3.25 14.88,3.41 14.5,3.69C14.5,3.63 14.5,3.56 14.5,3.5A2.5,2.5 0 0,0 12,1A2.5,2.5 0 0,0 9.5,3.5C9.5,3.56 9.5,3.63 9.5,3.69C9.12,3.41 8.63,3.25 8.1,3.25A2.5,2.5 0 0,0 5.6,5.75C5.6,6.74 6.19,7.6 7.03,8C6.19,8.4 5.6,9.25 5.6,10.25M12,22A9,9 0 0,0 21,13C16,13 12,17 12,22Z"
}, Ue = {
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
  pollen: "Pollen",
  rainRadar: "Rain radar",
  noAir: "No air quality sensor yet",
  noPollen: "No pollen sensor yet",
  rainFrom: "Rain from {time}",
  noRain12: "No rain in the next 12 hours",
  fineParticles: "fine particles",
  aqLevel: { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }
}, eh = {
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
}, th = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], nh = Object.keys(Ue.phases), Sl = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, ah = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, du = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Cl = 100, vd = "µg/m³", oh = "weather_alerts.air_quality_pollen", Bl = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], ih = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, rh = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], sh = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, lh = { daily: 1, hourly: 2 }, ze = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Fn = (a, l) => a.replace(/\{(\w+)\}/g, (o, d) => l[d] ?? ""), Jr = (a) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + a + '"/></svg>', ch = () => {
  var a;
  return !!((a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches);
}, $t = (a) => a != null && a !== "" && Number.isFinite(Number(a)), bd = /* @__PURE__ */ new Map(), wd = /* @__PURE__ */ new Map(), bc = /* @__PURE__ */ new WeakMap(), dh = (a) => {
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
function hn(a, l, o) {
  const d = Number(a);
  if (Number.isNaN(d)) return String(a);
  const f = (l == null ? void 0 : l.number_format) === "none", v = { maximumFractionDigits: 2, ...o, ...f ? { useGrouping: !1 } : {} }, w = f ? "en-US" : dh(l), E = JSON.stringify([w, v]);
  let x = bd.get(E);
  if (!x) {
    try {
      x = new Intl.NumberFormat(w, v);
    } catch {
      x = new Intl.NumberFormat(void 0, v);
    }
    bd.set(E, x);
  }
  return x.format(d);
}
const jc = (a) => {
  var l;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.language) || (a == null ? void 0 : a.language) || void 0;
};
function uh(a) {
  if (!a) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (bc.has(a)) return bc.get(a);
  const l = a.time_format, o = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? a.language : void 0).includes("10") : l === "12";
  return bc.set(a, o), o;
}
const uu = (a) => {
  var l, o;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.time_zone) === "server" && ((o = a == null ? void 0 : a.config) != null && o.time_zone) ? a.config.time_zone : void 0;
};
function pu(a, l) {
  const o = JSON.stringify([a, l]);
  let d = wd.get(o);
  if (!d) {
    try {
      d = new Intl.DateTimeFormat(a, l);
    } catch {
      d = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    wd.set(o, d);
  }
  return d;
}
const Go = (a, l) => pu(jc(l), { hour: "numeric", minute: "2-digit", hourCycle: uh(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: uu(l) }).format(a), yd = (a, l) => pu(jc(l), { weekday: "short", timeZone: uu(l) }).format(a), ph = (a, l) => a.toLocaleDateString(jc(l), { weekday: "narrow" }), pn = (a, l) => $t(l) ? hn(Math.round(Number(l)), a.locale) + "°" : "–", Qr = (a) => {
  const l = new Date(a);
  return l.setHours(0, 0, 0, 0), l;
}, $r = (a, l) => a.getFullYear() === l.getFullYear() && a.getMonth() === l.getMonth() && a.getDate() === l.getDate(), ga = Math.PI / 180, hh = 2440588, fh = 2451545, Pl = ga * 23.4397, mh = 149598e3, gh = -0.833 * ga, vh = 0.133 * ga, xd = 5 * oo, hu = (a) => a.getTime() / yo - 0.5 + hh - fh, fu = (a, l) => Math.atan2(Math.sin(a) * Math.cos(Pl) - Math.tan(l) * Math.sin(Pl), Math.cos(a)), mu = (a, l) => Math.asin(Math.sin(l) * Math.cos(Pl) + Math.cos(l) * Math.sin(Pl) * Math.sin(a)), bh = (a, l) => ga * (280.16 + 360.9856235 * a) - l, wh = (a, l, o) => Math.asin(Math.sin(l) * Math.sin(o) + Math.cos(l) * Math.cos(o) * Math.cos(a));
function gu(a) {
  const l = ga * (357.5291 + 0.98560028 * a), o = ga * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), d = l + o + ga * 102.9372 + Math.PI;
  return { ra: fu(d, 0), dec: mu(d, 0), dist: mh };
}
function vu(a) {
  const l = ga * (218.316 + 13.176396 * a), o = ga * (134.963 + 13.064993 * a), d = ga * (93.272 + 13.22935 * a), f = l + ga * 6.289 * Math.sin(o), v = ga * 5.128 * Math.sin(d);
  return { ra: fu(f, v), dec: mu(f, v), dist: 385001 - 20905 * Math.cos(o) };
}
const bu = (a, l, o, d) => {
  const f = hu(l), v = a(f);
  return wh(bh(f, ga * -d) - v.ra, ga * o, v.dec);
}, zc = (a, l, o) => bu(gu, a, l, o), yh = (a, l, o) => bu(vu, a, l, o);
function wu(a, l, o, d) {
  const f = {};
  let v = o.getTime(), w = a(o) - l;
  for (let E = v + xd; E <= d.getTime(); E += xd) {
    const x = a(new Date(E)) - l;
    if (w < 0 != x < 0) {
      const N = new Date(v + (E - v) * w / (w - x));
      x > 0 ? f.rise ?? (f.rise = N) : f.set ?? (f.set = N);
    }
    v = E, w = x;
  }
  return f;
}
const yu = (a) => {
  const l = Qr(a);
  return [l, new Date(l.getTime() + yo)];
}, xh = (a, l, o) => wu((d) => zc(d, l, o), gh, ...yu(a)), kh = (a, l, o) => wu((d) => yh(d, l, o), vh, ...yu(a));
function Mh(a) {
  const l = hu(a), o = gu(l), d = vu(l), f = Math.acos(Math.sin(o.dec) * Math.sin(d.dec) + Math.cos(o.dec) * Math.cos(d.dec) * Math.cos(o.ra - d.ra)), v = Math.atan2(o.dist * Math.sin(f), d.dist - o.dist * Math.cos(f)), w = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - d.ra), Math.sin(o.dec) * Math.cos(d.dec) - Math.cos(o.dec) * Math.sin(d.dec) * Math.cos(o.ra - d.ra));
  return { fraction: (1 + Math.cos(v)) / 2, phase: 0.5 + 0.5 * v * (w < 0 ? -1 : 1) / Math.PI };
}
const Sh = (a) => {
  const l = a * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, Il = (a) => {
  const l = a == null ? void 0 : a.config;
  return l && $t(l.latitude) && $t(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function wc(a, l) {
  var N, ge, oe;
  const o = Il(a), d = o ? xh(l, o.lat, o.lon) : {}, f = (N = a == null ? void 0 : a.states) == null ? void 0 : N["sun.sun"], v = Qr(l).getTime(), w = (Y) => {
    const $ = Y ? new Date(Y) : null;
    return $ && Number.isFinite($.getTime()) && Qr($).getTime() === v ? $ : null;
  }, E = w((ge = f == null ? void 0 : f.attributes) == null ? void 0 : ge.next_rising), x = w((oe = f == null ? void 0 : f.attributes) == null ? void 0 : oe.next_setting);
  return E && (d.rise = E), x && (d.set = x), d;
}
function Ch(a) {
  var d;
  const l = (d = a == null ? void 0 : a.states) == null ? void 0 : d["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const o = Il(a);
  return o ? zc(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const dr = (a) => !!a && a.state !== "unavailable" && a.state !== "unknown", es = (a, l) => {
  var d;
  const o = (d = a.entities) == null ? void 0 : d[l];
  return !o || !o.hidden && !o.entity_category;
}, fa = (a, l, o) => {
  var d, f;
  for (const v of l) {
    const w = (d = a.states) == null ? void 0 : d[v];
    if (!dr(w)) continue;
    const E = (f = w.attributes) == null ? void 0 : f[o];
    if (E != null && E !== "") return { stateObj: w, value: E };
  }
}, Th = (a, l) => l.map((o) => {
  var d;
  return (d = a.states) == null ? void 0 : d[o];
}).find(dr), Lh = (a, l, o) => l.map((d) => {
  var f;
  return (f = a.states) == null ? void 0 : f[d];
}).find((d) => {
  var f;
  return dr(d) && (((f = d.attributes) == null ? void 0 : f.supported_features) == null || Number(d.attributes.supported_features) & lh[o]);
});
function lr(a, l, o) {
  var v, w, E, x;
  const d = ((w = (v = a.config) == null ? void 0 : v.unit_system) == null ? void 0 : w.length) || "", f = (l == null ? void 0 : l.attributes) || {};
  switch (o) {
    case "precipitation":
      return f.precipitation_unit || (d === "km" ? "mm" : "in");
    case "pressure":
      return f.pressure_unit || (d === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return f.wind_speed_unit || d + "/h";
    case "visibility":
      return f.visibility_unit || d;
    default:
      return f.temperature_unit || ((x = (E = a.config) == null ? void 0 : E.unit_system) == null ? void 0 : x.temperature) || "";
  }
}
function Dl(a, l, o, d) {
  try {
    if (typeof a.formatEntityAttributeValueToParts == "function") {
      const [f, ...v] = a.formatEntityAttributeValueToParts(l, o, d).map((w) => w.value);
      return { number: f, unit: v.join("").trim() };
    }
  } catch {
  }
  return { number: hn(d, a.locale), unit: lr(a, l, o) };
}
function Ah(a, l, o, d) {
  try {
    if (typeof a.formatEntityAttributeValue == "function") return a.formatEntityAttributeValue(l, o, d);
  } catch {
  }
  const f = Dl(a, l, o, d);
  return (f.number + " " + f.unit).trim();
}
function sr(a, l) {
  var d;
  try {
    if (typeof a.formatEntityState == "function") return a.formatEntityState(l);
  } catch {
  }
  const o = (d = l.attributes) == null ? void 0 : d.unit_of_measurement;
  return eh[l.state] || (o && $t(l.state) ? hn(l.state, a.locale) + " " + o : l.state);
}
function Os(a, l) {
  var o;
  try {
    if (typeof a.formatEntityName == "function") return a.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((o = l.attributes) == null ? void 0 : o.friendly_name) || l.entity_id;
}
const _h = (a) => a < 3 ? "low" : a < 6 ? "moderate" : a < 8 ? "high" : a < 11 ? "very_high" : "extreme", kd = (a) => du.find(([, l]) => a <= l)[0];
function Eh(a, l) {
  if (l === "Beaufort") return Math.round(a);
  const o = l ? ih[l] : void 0;
  if (o === void 0) return;
  const d = rh.findIndex((f) => a * o < f);
  return d === -1 ? 12 : d;
}
const Md = (a, l) => {
  const o = l ? sh[l] : void 0;
  return o === void 0 ? void 0 : a * o;
}, Sd = (a) => Object.keys(a.states || {}).find((l) => {
  var o, d;
  return l.startsWith("sensor.") && ((d = (o = a.entities) == null ? void 0 : o[l]) == null ? void 0 : d.platform) === "moon";
}), yc = (a) => Object.values(a.states || {}).filter((l) => {
  var o, d;
  return l.entity_id.startsWith("sensor.") && ((o = l.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((d = l.attributes) == null ? void 0 : d.state_class) ?? "") && es(a, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function Dh(a) {
  var o;
  const l = {};
  for (const [d, f] of Object.entries(((o = a == null ? void 0 : a.core) == null ? void 0 : o.integration) ?? {})) {
    if (f && "integration_type" in f) {
      l[d] = f.categories;
      continue;
    }
    for (const [v, w] of Object.entries((f == null ? void 0 : f.integrations) ?? {})) l[v] = w == null ? void 0 : w.categories;
  }
  return l;
}
const xu = (a, l, o) => {
  var f, v, w;
  const d = (v = (f = a.entities) == null ? void 0 : f[o]) == null ? void 0 : v.platform;
  return !!d && !!((w = l[d]) != null && w.includes(oh));
};
function Rh(a, l) {
  const o = /* @__PURE__ */ new Map();
  return Object.values(a.states || {}).filter((d) => {
    var f;
    return d.entity_id.startsWith("sensor.") && Bl.includes(((f = d.attributes) == null ? void 0 : f.device_class) ?? "") && es(a, d.entity_id) && xu(a, l, d.entity_id);
  }).sort((d, f) => d.entity_id.localeCompare(f.entity_id)).forEach((d) => {
    o.has(d.attributes.device_class) || o.set(d.attributes.device_class, d.entity_id);
  }), Bl.map((d) => o.get(d)).filter(Boolean);
}
const Nh = (a, l) => Object.values(a.states || {}).filter((o) => {
  var d, f;
  return o.entity_id.startsWith("sensor.") && es(a, o.entity_id) && xu(a, l, o.entity_id) && (((f = (d = a.entities) == null ? void 0 : d[o.entity_id]) == null ? void 0 : f.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function Cd(a, l, o) {
  const d = Math.max(l - a, 1e-6), f = o[o.length - 1], v = o.find((N) => d / N <= 4) ?? f * Math.ceil(d / (4 * f)), w = Math.floor(a / v) * v;
  let E = Math.ceil(l / v) * v;
  E === w && (E = w + v);
  const x = [];
  for (let N = w; N <= E + v / 1e3; N += v) x.push(N);
  return { min: w, max: E, ticks: x };
}
const qs = (a, l, o) => {
  const d = (w) => [1, 3, 5].map((E) => parseInt(w.slice(E, E + 2), 16)), f = d(a), v = d(l);
  return "rgb(" + f.map((w, E) => Math.round(w + (v[E] - w) * o)).join(", ") + ")";
}, Bh = (a, l, o, d) => {
  const f = o * Math.abs(1 - 2 * d), v = d < 0.5 ? 0 : 1;
  return "M " + a + " " + (l - o) + " A " + o + " " + o + " 0 0 0 " + a + " " + (l + o) + " A " + f + " " + o + " 0 0 " + v + " " + a + " " + (l - o) + " Z";
}, ma = ({ icon: a, name: l, sub: o, visual: d, double: f, backdrop: v, cls: w }) => '<div class="wbCard wbSquare' + (f ? " wbDouble" : "") + (v ? " wbHasBackdrop" : "") + (w ? " " + w : "") + '">' + (v ? '<div class="wbBackdrop" aria-hidden="true">' + v + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Jr(a) + '</div><div class="wbText"><span class="wbName">' + ze(l) + "</span>" + (o ? '<span class="wbSub">' + ze(o) + "</span>" : "") + '</div></div><div class="wbVisual">' + d + "</div></div>", Ei = (a, l) => '<div class="wbValue"><span class="wbNum">' + ze(a) + "</span>" + (l ? '<span class="wbUnitV">' + ze(l) + "</span>" : "") + "</div>";
function Ph(a) {
  const l = a.max - a.min || 1, o = (E) => 100 - (Math.min(a.max, Math.max(a.min, E)) - a.min) / l * 100, d = (E) => E / Ws * 100 + "%", f = (E) => E.map((x) => x.t + "," + o(x.v)).join(" "), v = a.kind === "line" ? a.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + a.sun.map((E) => '<span class="wbDcSunMark" style="left:' + d(E.t) + '">' + Jr(E.rise ? wn.sunsetUp : wn.sunsetDown) + ze(E.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + a.ticks.map((E) => '<span style="top:' + o(E) + '%">' + ze(a.format(E)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Ws + ' 100" preserveAspectRatio="none">' + a.night.map(([E, x]) => '<rect class="wbDcNight" x="' + E + '" y="0" width="' + (x - E) + '" height="100"></rect>').join("") + a.ticks.map((E) => '<line class="wbDcGrid" x1="0" x2="' + Ws + '" y1="' + o(E) + '" y2="' + o(E) + '" vector-effect="non-scaling-stroke"></line>').join("") + a.sun.map((E) => '<line class="wbDcSunLine" x1="' + E.t + '" x2="' + E.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (a.past && a.past.length > 1 ? '<polyline class="wbDcPast" points="' + f(a.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (v.length > 1 ? '<polygon class="wbDcArea" points="' + v[0].t + ",100 " + f(v) + " " + v[v.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + f(v) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (a.now ? '<line class="wbDcNow" x1="' + a.now.t + '" x2="' + a.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (a.kind === "bars" ? a.points.filter((E) => E.v > 0).map((E) => '<i class="wbDcBar" style="left:' + d(E.t + 12) + ";width:" + d(36) + ";height:" + (100 - o(E.v)) + '%"></i>').join("") : "") + (a.now && a.kind === "line" ? '<i class="wbDcDot" style="left:' + d(a.now.t) + ";top:" + o(a.now.v) + '%"></i>' : "") + (a.peak ? '<span class="wbDcPeak" style="left:' + d(a.peak.t) + ";top:" + o(a.peak.v) + '%">' + ze(a.peak.label) + "</span>" : "") + (a.note ? '<span class="wbDcNote">' + ze(a.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + a.hours.map((E) => '<span class="' + (E.minor ? "wbMinor" : "") + '" style="left:' + d(E.t) + '">' + ze(E.label) + "</span>").join("") + "</div></div>", w;
}
function Ih(a, l) {
  const w = a.map((U) => U.value), E = Math.min(...w), x = Math.max(...w), N = x - E || 1, ge = (U) => U / (a.length - 1) * 300, oe = (U) => 18 + (1 - (U - E) / N) * 84, Y = a.map((U, q) => ge(q) + "," + oe(U.value)).join(" "), $ = w.indexOf(x), ne = w.indexOf(E), Z = (U) => U === 0 ? "start" : U === a.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + Y + ' 300,102"></polygon><polyline class="wbLine" points="' + Y + '" vector-effect="non-scaling-stroke"></polyline><text x="' + ge($) + '" y="' + (oe(x) - 6) + '" text-anchor="' + Z($) + '">' + ze(l(x)) + '</text><text x="' + ge(ne) + '" y="' + (oe(E) + 14) + '" text-anchor="' + Z(ne) + '">' + ze(l(E)) + '</text><text x="0" y="120" text-anchor="start">' + ze(a[0].label) + '</text><text x="300" y="120" text-anchor="end">' + ze(a[a.length - 1].label) + "</text></svg>";
}
function Hh(a, l) {
  const v = a.map((oe) => oe.value).concat([]), w = Math.min(...v) - 2, E = Math.max(...v) + 1, x = E - w || 1, N = 300 / a.length, ge = (oe) => (1 - (oe - w) / x) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + a.map((oe, Y) => '<rect class="wbBar' + (oe.now ? " wbNowBar" : "") + '" x="' + (Y * N + N * 0.2) + '" y="' + ge(oe.value) + '" width="' + N * 0.6 + '" height="' + (104 - ge(oe.value)) + '" rx="6"></rect><text x="' + (Y * N + N / 2) + '" y="120" text-anchor="middle">' + ze(oe.label) + "</text>").join("") + "</svg>";
}
const Fh = [
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
], Oh = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Td = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], qh = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Wh = 0;
function Ld(a, { getHass: l, entityId: o, style: d = "bitmap", motion: f = !0, cards: v, onOpen: w, hoursWindow: E } = {}) {
  var ti, ba;
  const x = "wb" + ++Wh + "-", N = document.createElement("div");
  N.className = "wb", N.dataset.style = d;
  const ge = document.createElement("div");
  ge.className = "wbBento", N.appendChild(ge), a.replaceChildren(N);
  const oe = ["aq_tile", "pollen_tile", "radar_tile"], Y = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality", ...oe].filter((y) => !v || v.includes(y)), $ = { current: "wide", hourly: "wide", compared_to_average: "double" }, ne = {};
  Y.forEach((y) => {
    const S = document.createElement("div");
    S.className = "wbItem", S.dataset.card = y, S.dataset.size = $[y] || "tile", S.hidden = !0, ge.appendChild(S), ne[y] = { el: S, html: null };
  });
  let Z = !1, U = null, q = 0, ue = -1, ee = !1, pe = null;
  const X = "homecore-next-view", I = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: (() => {
    try {
      return localStorage.getItem(X);
    } catch {
      return null;
    }
  })() === "bars" ? "bars" : "strip", aq: void 0 }, ie = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Ae = /* @__PURE__ */ new Date(), F = /* @__PURE__ */ new Date();
  const Ie = {}, V = {}, We = {}, k = (y) => {
    var S;
    return ((S = We[y]) == null ? void 0 : S.forecast) ?? [];
  }, _ = (y, S) => {
    var L;
    return We[S] ? (L = y.states) == null ? void 0 : L[We[S].entityId] : void 0;
  };
  function C(y) {
    const S = V[y];
    S && (S.unsub.then((L) => {
      typeof L == "function" && L();
    }).catch(() => {
    }), delete V[y]), We[y] && delete We[y];
  }
  function H(y, S, L) {
    var K;
    if (typeof ((K = y.connection) == null ? void 0 : K.subscribeMessage) != "function") return;
    const O = { entityId: L };
    try {
      O.unsub = Promise.resolve(y.connection.subscribeMessage((Q) => {
        Z || V[S] !== O || (Q != null && Q.forecast ? We[S] = { entityId: L, forecast: Q.forecast } : delete We[S], zn());
      }, { type: "weather/subscribe_forecast", forecast_type: S, entity_id: L }));
    } catch (Q) {
      O.unsub = Promise.reject(Q);
    }
    O.unsub.catch(() => {
      V[S] === O && delete V[S];
    }), V[S] = O;
  }
  function fe(y, S) {
    var L;
    for (const O of ["daily", "hourly"]) {
      const K = Lh(y, S, O);
      ((L = V[O]) == null ? void 0 : L.entityId) !== (K == null ? void 0 : K.entity_id) && (C(O), K && H(y, O, K.entity_id));
    }
  }
  const W = (y, S, L, O = !1) => y.callWS({
    type: "history/history_during_period",
    start_time: L.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [S],
    minimal_response: O,
    no_attributes: O,
    significant_changes_only: !1
  });
  async function se(y, S) {
    var de, be, ve;
    const L = fa(y, S, "pressure");
    if (!L) return;
    const O = L.stateObj.entity_id, K = await W(y, O, new Date(Date.now() - 3 * Pt)), Q = (ve = (be = (de = K == null ? void 0 : K[O]) == null ? void 0 : de.find((He) => {
      var Ce;
      return typeof ((Ce = He.a) == null ? void 0 : Ce.pressure) == "number";
    })) == null ? void 0 : be.a) == null ? void 0 : ve.pressure;
    ie.pressureHistory = typeof Q == "number" ? { entityId: O, value: Q } : void 0;
  }
  async function me(y, S) {
    var be;
    const L = fa(y, S, "temperature");
    if (!L) return;
    const O = L.stateObj.entity_id, K = Qr(/* @__PURE__ */ new Date()), Q = await W(y, O, new Date(K.getTime() - Kp * yo)), de = /* @__PURE__ */ new Map();
    for (const ve of (Q == null ? void 0 : Q[O]) ?? []) {
      const He = (be = ve.a) == null ? void 0 : be.temperature, Ce = new Date((ve.lc ?? ve.lu) * 1e3);
      if (typeof He != "number" || Ce >= K) continue;
      const Re = Ce.toDateString();
      de.set(Re, Math.max(de.get(Re) ?? -1 / 0, He));
    }
    ie.temperatureHistory = { entityId: O, dailyHighs: [...de.values()], days: [...de.entries()].map(([ve, He]) => ({ date: new Date(ve), high: He })) };
  }
  async function ye(y) {
    const S = yc(y);
    if (!S) return;
    const L = await y.callWS({ type: "recorder/statistic_during_period", statistic_id: S, rolling_window: { duration: { hours: 24 } } });
    ie.rain = { entityId: S, change: (L == null ? void 0 : L.change) ?? void 0 };
  }
  function Ze() {
    const y = l == null ? void 0 : l();
    if (!y || Z || typeof y.callWS != "function") return;
    const S = On(y);
    ie.lastFetch = Date.now(), [se(y, S), me(y, S), ye(y)].forEach((L) => L.then(() => zn(), () => {
    }));
  }
  async function lt() {
    const y = l == null ? void 0 : l();
    if (!y) return;
    const S = fa(y, On(y), "temperature");
    if (!S) return;
    const L = S.stateObj.entity_id, O = Qr(/* @__PURE__ */ new Date());
    try {
      const K = await W(y, L, O), Q = (de) => ((K == null ? void 0 : K[L]) ?? []).map((be) => {
        var ve;
        return { time: be.lu * 1e3, value: (ve = be.a) == null ? void 0 : ve[de] };
      }).filter((be) => typeof be.value == "number");
      ie.todayHistory = { day: O.toDateString(), fetched: Date.now(), temperature: Q("temperature"), humidity: Q("humidity") }, zn();
    } catch {
    }
  }
  async function Lt(y) {
    const S = l == null ? void 0 : l();
    if (S)
      try {
        const L = await W(S, y, new Date(Date.now() - 24 * Pt), !0), O = ((L == null ? void 0 : L[y]) ?? []).filter((Q) => $t(Q.s)), K = Math.max(1, Math.ceil(O.length / 48));
        ie.aqHistory = { entityId: y, points: O.filter((Q, de) => de % K === 0).map((Q) => ({ label: Go(new Date(Q.lu * 1e3), S), value: Number(Q.s) })) }, zn();
      } catch {
      }
  }
  function Mn(y) {
    ie.categories === void 0 && (ie.categories = null, Promise.resolve().then(() => y.callWS({ type: "integration/descriptions" })).then((S) => {
      ie.categories = Dh(S);
    }, () => {
      ie.categories = {};
    }).then(() => zn()));
  }
  function On(y) {
    var L;
    const S = Object.keys(y.states || {}).filter((O) => O.startsWith("weather.") && es(y, O)).sort();
    return o && ((L = y.states) != null && L[o]) ? [o, ...S.filter((O) => O !== o)] : S;
  }
  const mt = (y) => ie.categories ? { air: Rh(y, ie.categories), pollen: Nh(y, ie.categories) } : { air: [], pollen: [] };
  function Ke(y, S, L, O) {
    if (d === "line") return '<span class="wbWx wbS' + S + ' wbLineIcon" aria-hidden="true">' + vc(y, L || y === "clear-night") + "</span>";
    if (d === "smooth") {
      const K = _p(y, S === 90, L, x + "g-" + O);
      return '<span class="wbWx wbS' + S + " wb" + K.k[0].toUpperCase() + K.k.slice(1) + (K.night ? " wbNight" : "") + '" aria-hidden="true">' + K.svg + "</span>";
    }
    return '<span class="wbWx wbS' + S + '" aria-hidden="true"><canvas data-wb-wx="' + ze(Hl(y, L)) + '" data-size="' + S + '"></canvas></span>';
  }
  const Ct = () => k("daily").filter((y) => y.templow != null).slice(0, Wp);
  function $e(y, S) {
    const L = new Date(S.datetime), O = /* @__PURE__ */ new Date();
    return $r(L, O) ? Ue.today : $r(L, new Date(O.getTime() + yo)) ? Ue.tomorrow : yd(L, y);
  }
  const yn = (y, S, L) => L === 0 ? $e(y, S) : yd(new Date(S.datetime), y);
  function An(y, S) {
    var Ce, Re, Ne, Fe;
    const L = Th(y, S);
    if (!L) return "";
    const O = Ct(), K = I.openDay !== void 0 ? O[I.openDay] : void 0, Q = fa(y, S, "temperature"), de = O[0], be = de && $r(new Date(de.datetime), /* @__PURE__ */ new Date()), ve = ((Re = (Ce = y.config) == null ? void 0 : Ce.unit_system) == null ? void 0 : Re.temperature) || ((Ne = L.attributes) == null ? void 0 : Ne.temperature_unit) || "";
    let He = '<div class="wbCard wbWeather' + (K ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (K ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + ze(Ue.openPage) + '">' : '<div class="wbCurrent">') + Ke(L.state, 90, Ch(y), "now") + '<div class="wbTempBlock">' + (Q && $t(Q.value) ? '<div class="wbTemp"><span class="wbDeg">' + ze(hn(Math.round(Number(Q.value)), y.locale)) + '</span><span class="wbUnit">' + ze(ve) + "</span></div>" : "") + '<div class="wbPlace">' + ze(((Fe = y.config) == null ? void 0 : Fe.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + ze(sr(y, L)) + "</div>" + (be && de.templow != null ? '<div class="wbRange">' + ze(Fn(Ue.range, { high: pn(y, de.temperature), low: pn(y, de.templow) })) + "</div>" : "") + "</div></div>";
    return He += bt(y), O.length && (He += '<div class="wbColumns" role="list">' + O.map((Te, Ve) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Ve + '" data-wb-focus="col-' + Ve + '"><span class="wbDay">' + ze(yn(y, Te, Ve)) + "</span>" + Ke(Te.condition ?? "cloudy", 60, !1, "col" + Ve) + '<span class="wbTemps"><span class="wbHi">' + ze(pn(y, Te.temperature)) + '</span><span class="wbLo">' + ze(pn(y, Te.templow)) + "</span></span></button>").join("") + "</div>", He += '<div class="wbHalves" role="list">' + O.map((Te, Ve) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Ve + '" data-wb-focus="half-' + Ve + '">' + Ke(Te.condition ?? "cloudy", 40, !1, "half" + Ve) + '<span class="wbText"><span class="wbName">' + ze($e(y, Te)) + '</span><span class="wbSub">' + ze(Fn(Ue.highLow, { high: pn(y, Te.temperature), low: pn(y, Te.templow) })) + "</span></span></button>").join("") + "</div>"), He + "</div>" + (K ? Bi(y, S, K) : "") + "</div>";
  }
  const ur = {
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
  }, ht = {
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
  function Ye(y) {
    const S = Date.now(), L = k("hourly").filter((Re) => new Date(Re.datetime).getTime() > S - Pt).slice(0, 13);
    if (L.length < 2) return "";
    const O = (Re) => Go(new Date(Re.datetime), y), K = (Re) => ur[Re.condition] || "", Q = (Re) => ht[Re.condition] || Re.condition;
    let de = K(L[0]);
    if (!de) return "";
    let be = L[0], ve = 0;
    for (const Re of L.slice(1))
      ve === 2 || Q(Re) === Q(be) || !K(Re) || (de += (ve ? " and " : ", ") + K(Re) + " from " + O(Re), be = Re, ve++);
    const He = Number(L[0].temperature), Ce = L.filter((Re) => $t(Re.temperature));
    if ($t(He) && Ce.length) {
      const Re = Ce.reduce((Fe, Te) => Number(Te.temperature) < Number(Fe.temperature) ? Te : Fe), Ne = Ce.reduce((Fe, Te) => Number(Te.temperature) > Number(Fe.temperature) ? Te : Fe);
      He - Number(Re.temperature) >= 3 ? de += ", down to " + pn(y, Re.temperature) + " by " + O(Re) : Number(Ne.temperature) - He >= 3 && (de += ", up to " + pn(y, Ne.temperature) + " by " + O(Ne));
    }
    return de[0].toUpperCase() + de.slice(1) + ".";
  }
  const bt = (y) => {
    const S = Ye(y);
    return S ? '<div class="wbSummary"><p class="wbSummaryText">' + ze(S) + "</p></div>" : "";
  };
  function ko(y) {
    const S = y.getTime(), L = Date.now() - Pt;
    return k("hourly").filter((O) => {
      const K = new Date(O.datetime).getTime();
      return K >= S && K < S + yo && K > L;
    });
  }
  function pr(y) {
    if (!y.length) return ["temperature"];
    const S = ["temperature"];
    return y.some((L) => L.precipitation != null || L.precipitation_probability != null) && S.push("precipitation"), y.some((L) => L.humidity != null) && S.push("humidity"), S;
  }
  function Bi(y, S, L) {
    const O = Qr(new Date(L.datetime)), K = ko(O), Q = pr(K), de = Q.includes(I.dayMode) ? I.dayMode : "temperature", be = (ve) => ve === "humidity" ? Ue.humidity : Ue.modes[ve];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Ke(L.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + ze($e(y, L)) + '</span><span class="wbSub">' + ze(Fn(Ue.highLow, { high: pn(y, L.temperature), low: pn(y, L.templow) })) + '</span></div><button class="wbBack" title="' + ze(Ue.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Jr(wn.back) + "</button></div>" + (Q.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + Q.map((ve) => '<button aria-pressed="' + (ve === de) + '" data-wb="day-mode" data-mode="' + ve + '" data-wb-focus="day-mode-' + ve + '">' + ze(be(ve)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Ph(Sn(y, S, O, K, de)) + "</div></div>";
  }
  function Sn(y, S, L, O, K) {
    var Ao;
    const Q = L.getTime(), de = Date.now(), be = $r(L, /* @__PURE__ */ new Date()), ve = (xt) => (xt - Q) / oo, He = (xt) => Go(new Date(xt), y), Ce = (xt) => new Date(xt.datetime).getTime(), Re = [0, 3, 6, 9, 12, 15, 18, 21].map((xt) => ({ t: xt * 60, label: He(Q + xt * Pt), minor: xt % 6 !== 0 })), { rise: Ne, set: Fe } = wc(y, L), Te = [], Ve = [];
    Ne && (Te.push({ t: ve(Ne.getTime()), label: He(Ne.getTime()), rise: !0 }), Ve.push([0, ve(Ne.getTime())])), Fe && (Te.push({ t: ve(Fe.getTime()), label: He(Fe.getTime()), rise: !1 }), Ve.push([ve(Fe.getTime()), Ws]));
    const tt = Il(y);
    !Ne && !Fe && tt && zc(new Date(Q + yo / 2), tt.lat, tt.lon) < 0 && Ve.push([0, Ws]);
    const Be = be ? ve(de) : void 0, et = { hours: Re, sun: Te, night: Ve };
    if (!O.length && !be) return { ...et, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ue.noHourly };
    if (K === "precipitation") {
      const xt = O.some((Cn) => Cn.precipitation_probability != null), sn = O.map((Cn) => ({ t: ve(Ce(Cn)), v: Number((xt ? Cn.precipitation_probability : Cn.precipitation) ?? 0) })), Kn = lr(y, _(y, "hourly"), "precipitation"), da = Math.max(0, ...sn.map((Cn) => Cn.v)), _a = xt ? 100 : Cd(0, Math.max(da, 1), [0.5, 1, 2, 5, 10]).max, ni = (Cn) => xt ? hn(Cn, y.locale) + "%" : hn(Cn, y.locale, { maximumFractionDigits: 1 }) + " " + Kn, ai = sn.find((Cn) => Cn.v === da);
      return {
        ...et,
        kind: "bars",
        points: sn,
        min: 0,
        max: _a,
        ticks: [0, _a / 2, _a],
        format: ni,
        now: Be !== void 0 ? { t: Be, v: 0 } : void 0,
        peak: ai && da > 0 ? { t: ai.t + 30, v: ai.v, label: ni(ai.v) } : void 0,
        note: da > 0 ? void 0 : Ue.noRain
      };
    }
    const nt = K === "humidity" ? "humidity" : "temperature", Gt = O.filter((xt) => xt[nt] != null && (!be || Ce(xt) >= de)).map((xt) => ({ t: ve(Ce(xt)), v: Number(xt[nt]) }));
    let Pe, Rt = [];
    if (Be !== void 0) {
      const xt = fa(y, S, nt);
      xt && $t(xt.value) && (Pe = { t: Be, v: Number(xt.value) }, Gt.unshift(Pe)), Rt = (((Ao = ie.todayHistory) == null ? void 0 : Ao.day) === L.toDateString() ? ie.todayHistory[nt] : []).filter((Kn) => Kn.time <= de).map((Kn) => ({ t: Math.max(0, ve(Kn.time)), v: Kn.value })), Pe && Rt.length && Rt.push(Pe);
    }
    const Ft = [...Rt, ...Gt];
    if (!Ft.length) return { ...et, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ue.noHourly };
    const ca = Ft.map((xt) => xt.v), Ua = Cd(Math.min(...ca), Math.max(...ca), nt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    nt === "humidity" && (Ua.min = Math.max(0, Ua.min), Ua.max = Math.min(100, Ua.max), Ua.ticks = Ua.ticks.filter((xt) => xt >= 0 && xt <= 100));
    const Lo = nt === "humidity" ? (xt) => hn(xt, y.locale) + "%" : (xt) => pn(y, xt), lo = nt === "temperature" ? Ft.reduce((xt, sn) => sn.v > xt.v ? sn : xt) : void 0;
    return { ...et, kind: "line", points: Gt, past: Rt, ...Ua, format: Lo, now: Pe, peak: lo ? { ...lo, label: Lo(lo.v) } : void 0 };
  }
  function pt(y) {
    const S = ["temperature"];
    return y.some((L) => L.precipitation_probability != null || L.precipitation != null) && S.push("precipitation"), y.some((L) => L.wind_speed != null) && S.push("wind"), S;
  }
  function It(y, S, L = pd) {
    var Q, de;
    const O = k("daily"), K = [];
    for (let be = 0; be < L; be++) for (const ve of [!1, !0]) {
      const He = y.getTime() + (be * 24 + (ve ? 12 : 0)) * Pt, Ce = He + 12 * Pt, Re = {};
      S.forEach((Fe) => {
        const Te = new Date(Fe.datetime).getTime();
        Fe.condition && Te >= He && Te < Ce && (Re[Fe.condition] = (Re[Fe.condition] ?? 0) + (Yp.has(Fe.condition) ? 2 : 1));
      });
      let Ne = (Q = Object.entries(Re).sort((Fe, Te) => Te[1] - Fe[1])[0]) == null ? void 0 : Q[0];
      if (!Ne) {
        const Fe = new Date(He).toDateString();
        Ne = ((de = O.find((Te) => new Date(Te.datetime).toDateString() === Fe)) == null ? void 0 : de.condition) ?? "cloudy";
      }
      K.push({ cond: ve && Ne === "sunny" ? "clear-night" : Ne, night: ve });
    }
    return K;
  }
  function hr(y, S, L) {
    const O = _(y, "hourly"), K = S.precipitation_probability != null ? hn(S.precipitation_probability, y.locale) + "%" : "", Q = S.precipitation ? hn(S.precipitation, y.locale) + " " + lr(y, O, "precipitation") : "";
    switch (L) {
      case "precipitation":
        return K ? [K, Q] : [Q || "–", ""];
      case "wind":
        return S.wind_speed != null ? [hn(Math.round(S.wind_speed), y.locale), lr(y, O, "wind_speed")] : ["–", ""];
      default:
        return [pn(y, S.temperature), (S.precipitation_probability ?? 0) >= 20 ? K : ""];
    }
  }
  function $o(y, S, L) {
    const [O, K] = hd[E == null ? void 0 : E()] || hd.day, Q = [];
    for (let de = 0; de < 4 && Q.length < 3; de++) {
      const be = /* @__PURE__ */ new Date();
      be.setHours(0, 0, 0, 0), be.setDate(be.getDate() + de);
      const ve = new Date(be);
      ve.setHours(K, 0, 0, 0), be.setHours(O, 0, 0, 0), !(ve.getTime() <= L || !S.some((He) => {
        const Ce = new Date(He.datetime).getTime();
        return Ce >= be.getTime() && Ce <= ve.getTime();
      })) && Q.push({ a: be.getTime(), b: ve.getTime(), label: $e(y, { datetime: be.toISOString() }) });
    }
    return Q;
  }
  function wt(y, S, L, O, K, Q) {
    const de = (L.b - S.a) / Pt, be = (Be) => ((Be - S.a) / Pt).toFixed(3), ve = 80, He = 32, Ce = [];
    for (const Be = new Date(S.a - yo); Be.getTime() < L.b + yo; Be.setDate(Be.getDate() + 1)) {
      const { rise: et, set: nt } = wc(y, new Date(Be));
      et && nt && Ce.push({ rise: et.getTime(), set: nt.getTime() });
    }
    const Re = (Be, et) => ve - (ve - He) * Math.sin(Math.PI * (et - Be.rise) / (Be.set - Be.rise)), Ne = (Be) => !Ce.some((et) => Be >= et.rise && Be <= et.set);
    let Fe = "", Te = "", Ve = "";
    Ce.forEach((Be, et) => {
      const nt = [];
      for (let Pe = Be.rise; Pe <= Be.set; Pe += 15 * oo) nt.push(be(Pe) + "," + Re(Be, Pe).toFixed(2));
      nt.push(be(Be.set) + "," + ve), Fe += '<polyline class="wbLineArc" points="' + nt.join(" ") + '"/>';
      const Gt = Ce[et + 1];
      Gt && (Fe += '<rect class="wbLineNight" x="' + be(Be.set) + '" y="0" width="' + ((Gt.rise - Be.set) / Pt).toFixed(3) + '" height="100"/>'), [[Be.rise, "↑"], [Be.set, "↓"]].forEach(([Pe, Rt]) => {
        Pe < S.a || Pe > L.b || (Te += '<line class="wbLineEdge" x1="' + be(Pe) + '" x2="' + be(Pe) + '" y1="0" y2="100"/>', Ve += '<span class="wbLineTime" style="left:' + Q(Pe) + '">' + Rt + " " + ze(Go(new Date(Pe), y)) + "</span>");
      });
    });
    const tt = Ce.find((Be) => K >= Be.rise && K <= Be.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + de + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Fe + Te + '<line class="wbLineHorizon" x1="0" x2="' + de + '" y1="' + ve + '" y2="' + ve + '"/></svg>' + Ve + (tt ? '<span class="wbLineNow" style="left:' + Q(K) + ";top:" + Re(tt, K) + '%">' + vc("sunny", !1) + "</span>" : "") + O.filter((Be) => Be.entry && !Be.now).map((Be) => '<span class="wbLineGlyph' + Be.edge + '" style="left:' + Q(Be.t) + '">' + vc(Be.entry.condition ?? "cloudy", Ne(Be.t)) + "</span>").join("");
  }
  function ke(y, S) {
    delete Ie.hourly;
    const L = I.hourlyView === "bars" ? "bars" : "strip", O = '<div class="wbHeader"><h2 class="wbTitle">' + ze(L === "bars" ? Ue.nextDays : Ue.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + ze(Ue.showAs) + '">' + ["strip", "bars"].map((Pe) => '<button aria-pressed="' + (Pe === L) + '" data-wb="hourly-view" data-view="' + Pe + '" data-wb-focus="hourly-view-' + Pe + '">' + ze(Ue.views[Pe]) + "</button>").join("") + "</div></div>";
    if (L === "bars") return Oe(y, S, O);
    const K = k("hourly"), Q = Math.floor(Date.now() / oo) * oo, de = K.filter((Pe) => new Date(Pe.datetime).getTime() > Q - Pt);
    if (!de.length) return "";
    const be = pt(de), ve = be.includes(I.hourlyMode) ? I.hourlyMode : "temperature", He = $o(y, K, Q);
    if (!He.length) return "";
    const Ce = He[0], Re = He[He.length - 1], Ne = (Ce.b - Ce.a) / Pt, Fe = (Pe) => "calc(var(--wb-u) * " + ((Pe - Ce.a) / Pt).toFixed(3) + ")", Te = new Date(Ce.a);
    Te.setHours(6, 0, 0, 0), Te.getTime() > Ce.a && Te.setDate(Te.getDate() - 1);
    const Ve = Math.ceil((Re.b - Te.getTime()) / yo);
    d !== "line" && (Ie.hourly = { segs: It(Te, K, Ve), seed: Te.getDate(), columns: Ve });
    const tt = (Pe) => Pe === Ce.a ? " wbFirst" : Pe === Re.b ? " wbLast" : "", Be = [];
    for (let Pe = Ce.a; Pe < Re.b; ) {
      const Rt = new Date(Pe);
      Rt.setHours(24, 0, 0, 0);
      const Ft = Math.min(Rt.getTime(), Re.b);
      Be.push({ a: Pe, b: Ft, label: $e(y, { datetime: new Date(Pe).toISOString() }), page: He.find((ca) => ca.a >= Pe && ca.a < Ft) || He.find((ca) => ca.a < Ft && ca.b > Pe) }), Pe = Ft;
    }
    const et = Q > Ce.a && Q < Re.b ? Math.floor((Q - Ce.a) / (2 * Pt)) * 2 : 0, nt = [];
    for (let Pe = Ce.a; Pe <= Re.b; Pe += Pt) {
      const Rt = new Date(Pe), Ft = tt(Pe);
      !Ft && Rt.getHours() % zp || !Ft && (Math.abs(Ce.a - Pe) < 2 * Pt || Math.abs(Re.b - Pe) < 2 * Pt) || Q >= Ce.a && Math.abs(Pe - Q) < 1.5 * Pt && !Ft || nt.push({ t: Pe, edge: Ft, label: Go(Rt, y), entry: Pe >= Q - Pt ? K.find((ca) => new Date(ca.datetime).getTime() === Pe) : void 0 });
    }
    Q > Ce.a && Q < Ce.b && nt.push({ t: Q, edge: Q - Ce.a < Pt ? " wbFirst" : Ce.b - Q < Pt ? " wbLast" : "", label: Ue.now, entry: de[0], now: !0 });
    const Gt = (Pe, Rt) => '<span class="wbMark' + Pe.edge + (Pe.now ? " wbNowMark" : "") + '" style="left:' + Fe(Pe.t) + '">' + Rt + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + O + (be.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + be.map((Pe) => '<button aria-pressed="' + (Pe === ve) + '" data-wb="hourly-mode" data-mode="' + Pe + '" data-wb-focus="hourly-mode-' + Pe + '">' + ze(Ue.modes[Pe]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + ze(Ue.nextHours) + '" data-span="' + Ne + '" data-start="' + et + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Ne + ");width:calc(var(--wb-u) * " + (Re.b - Ce.a) / Pt + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((Re.b - Ce.a) / (2 * Pt)) + 1)].map((Pe, Rt) => '<i class="wbSnap" style="left:' + Fe(Ce.a + Rt * 2 * Pt) + '"></i>').join("") + '<div class="wbDays">' + Be.map((Pe, Rt) => {
      var Ft;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Pe.b - Pe.a) / Pt).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (Rt === 0 ? et : ((((Ft = Pe.page) == null ? void 0 : Ft.a) ?? Pe.a) - Ce.a) / Pt) + '" data-wb-focus="hours-day-' + Rt + '">' + ze(Pe.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + nt.map((Pe) => Gt(Pe, ze(Pe.label))).join("") + "</div>" + (d === "line" ? '<div class="wbSky wbLineSky">' + wt(y, Ce, Re, nt, Q, Fe) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Fe(Te.getTime()) + ";width:calc(var(--wb-u) * " + Ve * 24 + ')"><canvas data-wb-strip="hourly"' + (d === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (Q > Ce.a ? '<i class="wbPast" style="width:' + Fe(Math.min(Q, Re.b)) + '"></i><i class="wbNowLine" style="left:' + Fe(Q) + '"></i>' : "") + Be.slice(1).map((Pe) => '<i class="wbMidnight" style="left:' + Fe(Pe.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + nt.map((Pe) => {
      if (!Pe.entry) return "";
      const [Rt, Ft] = hr(y, Pe.entry, ve);
      return Gt(Pe, '<span class="wbPrimaryV">' + ze(Rt) + '</span><span class="wbSecondary">' + ze(Ft) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Ht(y) {
    const S = Vp, L = S.findIndex(([ve]) => ve >= y);
    if (L <= 0) return "rgb(" + S[L < 0 ? S.length - 1 : 0][1].join(",") + ")";
    const [O, K] = S[L - 1], [Q, de] = S[L], be = (y - O) / (Q - O);
    return "rgb(" + K.map((ve, He) => Math.round(ve + (de[He] - ve) * be)).join(",") + ")";
  }
  function Oe(y, S, L) {
    var Fe;
    const O = k("daily").filter((Te) => $t(Te.templow) && $t(Te.temperature)).slice(0, 7);
    if (!O.length) return "";
    const K = Math.min(...O.map((Te) => Number(Te.templow))), Q = Math.max(...O.map((Te) => Number(Te.temperature))), de = Math.max(1, Q - K), be = (Te) => Math.max(0, Math.min(100, (Te - K) / de * 100)).toFixed(2), ve = /F/.test(lr(y, _(y, "daily"), "temperature")), He = (Te) => ve ? (Te - 32) / 1.8 : Te, Ce = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Te) => Ht(He(K + Te * de)) + " " + Te * 100 + "%").join(",") + ")", Re = (Fe = fa(y, S, "temperature")) == null ? void 0 : Fe.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (pt(k("hourly").filter((Te) => new Date(Te.datetime).getTime() > Date.now() - Pt)).length > 1 ? " wbTabbed" : "") + '">' + L + '<div class="wbDayBars" role="list">' + O.map((Te, Ve) => {
      const tt = $e(y, Te), Be = $r(new Date(Te.datetime), /* @__PURE__ */ new Date()), et = Number(Te.templow), nt = Number(Te.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + ze(Fn(Ue.rangeRow, { day: tt, low: pn(y, et), high: pn(y, nt) })) + '"><span class="wbRangeDay">' + ze(tt) + "</span>" + Ke(Te.condition, 40, !1, "r" + Ve) + '<span class="wbRangeLo">' + ze(pn(y, et)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + Ce + ";clip-path:inset(0 " + (100 - be(nt)) + "% 0 " + be(et) + '% round 4px)"></i>' + (Be && $t(Re) ? '<i class="wbRangeNow" style="left:' + be(Number(Re)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + ze(pn(y, nt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  function qn(y) {
    const S = Ae, { rise: L, set: O } = wc(y, S), K = L && O ? Math.round((O.getTime() - L.getTime()) / oo) : 0, Q = Math.floor(K / 60), de = K % 60, be = L && O ? (S.getTime() - L.getTime()) / (O.getTime() - L.getTime()) : -1, ve = be >= 0 && be <= 1, He = Math.PI * (1 - Math.min(1, Math.max(0, be))), Ce = 100 + 74 * Math.cos(He), Re = 100 - 74 * Math.sin(He), Ne = ve ? Math.sin(Math.PI * be) : 0, Fe = ve ? qs("#2e0a0d", "#43180a", Ne) : "#0e0507", Te = ve ? qs("#7a1d12", "#8f400f", Ne) : "#1c0709", Ve = qs("#f60c08", "#ff8f00", Ne), tt = qs("#fd9b07", "#ffd84a", Ne), Be = ve ? qs("#fd9b07", "#ffd84a", Ne) : "#6b3a2a", et = (Gt) => Gt ? Go(Gt, y) : "–", nt = L && O ? new Date((L.getTime() + O.getTime()) / 2) : null;
    return ma({
      icon: wn.sunny,
      name: Ue.sun,
      sub: K ? Fn(Ue.daylightShort, { hours: Q, minutes: de }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Fe + ", " + Te + ");--wb-sun-line:" + Be + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + x + 'sun-glow"><stop offset="0" stop-color="' + Ve + '"></stop><stop offset="0.45" stop-color="' + Ve + '"></stop><stop offset="1" stop-color="' + tt + '"></stop></radialGradient><clipPath id="' + x + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (ve ? '<circle cx="' + Ce + '" cy="' + Re + '" r="14" fill="url(#' + x + 'sun-glow)" clip-path="url(#' + x + 'above-horizon)"></circle>' : "") + (nt ? '<text class="wbSunTime wbNoon" x="100" y="1">' + ze(et(nt)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + ze(et(L)) + '</text><text class="wbSunTime" x="174" y="117">' + ze(et(O)) + "</text></svg></div>"
    });
  }
  function Wa(y, S, L) {
    const O = (de) => x + "moon-" + de, K = y > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + O("terminator") + ')" d="' + Bh(61, 61, 57.9, y) + '"' + (S ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", Q = (de, be, ve, He, Ce, Re) => '<filter id="' + O(de) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + be + '" numOctaves="' + ve + '" seed="' + He + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Ne) => "<feFunc" + Ne + ' type="linear" slope="' + Ce + '" intercept="' + Re + '"></feFunc' + Ne + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + O("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + O("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + O("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + O("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + O("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + Q("mottle", "0.045", 4, 3, 1.8, -0.4) + Q("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + O("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + O("fill") + ')"></circle><g' + (L ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + O("soften") + ')">' + Fh.map(([de, be, ve, He, Ce, Re]) => '<ellipse cx="' + de + '" cy="' + be + '" rx="' + ve + '" ry="' + He + '" fill-opacity="' + Re + '" transform="rotate(' + Ce + " " + de + " " + be + ')"></ellipse>').join("") + "</g>" + Oh.map(([de, be, ve]) => '<circle class="wbCrater" cx="' + de + '" cy="' + be + '" r="' + ve + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + O("glow") + ')">' + qh.map(([de, be]) => '<line x1="54.4" y1="95" x2="' + de + '" y2="' + be + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + O("glow") + ')">' + Td.map(([de, be, ve]) => '<circle cx="' + de + '" cy="' + be + '" r="' + ve * 2 + '"></circle>').join("") + "</g>" + Td.map(([de, be, ve]) => '<circle class="wbBrightCenter" cx="' + de + '" cy="' + be + '" r="' + ve + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + O("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + O("grain") + ')"></rect>' + K + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Pi(y) {
    const S = F, L = Il(y), O = (L == null ? void 0 : L.lat) ?? 0, K = Mh(S), Q = Sd(y), de = Q ? y.states[Q] : void 0, be = dr(de) && nh.includes(de.state) ? de.state : Sh(K.phase), { rise: ve, set: He } = L ? kh(S, L.lat, L.lon) : {}, Ce = K.phase > 0.5 != O < 0, Re = hn(Math.round(K.fraction * 100), y.locale) + "%", Ne = ve ?? He, Fe = Ne ? Go(Ne, y) : void 0;
    return ma({
      icon: wn.night,
      name: Ue.moon,
      sub: Ue.phases[be],
      visual: '<div class="wbMoonBox">' + Wa(K.fraction, Ce, O < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (Fe ? ze(Fn(ve ? Ue.moonriseAt : Ue.moonsetAt, { time: Fe })) : "") + "</span><span>" + ze(Fn(Ue.lit, { illumination: Re })) + "</span></div>"
    });
  }
  function Ge(y, S) {
    var Te;
    const L = fa(y, S, "wind_speed");
    if (!L || !$t(L.value)) return "";
    const O = fa(y, S, "wind_gust_speed"), K = fa(y, S, "wind_bearing"), Q = K && $t(K.value) ? Number(K.value) : void 0, de = Eh(Number(L.value), (Te = L.stateObj.attributes) == null ? void 0 : Te.wind_speed_unit), be = Dl(y, L.stateObj, "wind_speed", L.value), ve = Q !== void 0 ? Ue.cardinal[th[((Q + 11.25) / 22.5 | 0) % 16]] : void 0, He = O ? Ah(y, O.stateObj, "wind_gust_speed", O.value) : void 0, Ce = [ve ? Fn(Ue.windFrom, { direction: ve }) : void 0, de !== void 0 ? de + " " + Ue.beaufort : void 0].filter(Boolean).join(" · ") || He, Re = (Ve, tt) => {
      const Be = (Ve - 90) * Math.PI / 180;
      return [100 + tt * Math.cos(Be), 100 + tt * Math.sin(Be)];
    }, Ne = Array.from({ length: 36 }, (Ve, tt) => tt * 10).map((Ve) => {
      const tt = Ve % 90 === 0, [Be, et] = Re(Ve, 97), [nt, Gt] = Re(Ve, tt ? 83 : 89);
      return '<line class="wbTick' + (tt ? " wbMajor" : "") + '" x1="' + Be + '" y1="' + et + '" x2="' + nt + '" y2="' + Gt + '"></line>';
    }).join(""), Fe = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Ve, tt]) => {
      const [Be, et] = Re(tt, 64);
      return '<text class="wbLetter' + (Ve === "n" ? " wbNorth" : "") + '" x="' + Be + '" y="' + et + '">' + ze(Ue.cardinal[Ve]) + "</text>";
    }).join("");
    return ma({ icon: wn.windy, name: Ue.wind, sub: Ce, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Ne + Fe + (Q !== void 0 ? '<path class="wbMarker" transform="rotate(' + Q + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + ze(be.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + ze(be.unit) + "</text></svg>" });
  }
  function ot(y, S) {
    const L = fa(y, S, "uv_index");
    if (!L || !$t(L.value)) return "";
    const O = Number(L.value), K = Ue.uvLevel[_h(O)], Q = /* @__PURE__ */ new Date();
    Q.setHours(23, 59, 59, 999);
    const de = k("hourly").filter((Ve) => Ve.uv_index != null && new Date(Ve.datetime) > /* @__PURE__ */ new Date() && new Date(Ve.datetime) <= Q).reduce((Ve, tt) => !Ve || tt.uv_index > Ve.uv ? { uv: tt.uv_index, time: new Date(tt.datetime) } : Ve, void 0), be = 48, ve = 100, He = 130, Ce = (Ve) => -be + Math.min(Ve, 11) / 11 * 2 * be, Re = (Ve, tt) => {
      const Be = Ve * Math.PI / 180;
      return [ve + tt * Math.sin(Be), He - tt * Math.cos(Be)];
    }, Ne = (Ve, tt, Be) => {
      const [et, nt] = Re(Ce(Ve), Be), [Gt, Pe] = Re(Ce(tt), Be);
      return "M " + et + " " + nt + " A " + Be + " " + Be + " 0 0 1 " + Gt + " " + Pe;
    }, Te = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, Sl.low], [3, 6, Sl.moderate], [6, 8, Sl.high], [8, 11, Sl.very_high]].map(([Ve, tt, Be]) => '<path class="wbVuZone" d="' + Ne(Ve, tt, 96) + '" style="stroke:' + Be + '"></path>').join("") + Array.from({ length: 21 }, (Ve, tt) => ({ angle: -be + tt * (2 * be / 20), major: tt % 2 === 0 })).map(({ angle: Ve, major: tt }) => {
      const [Be, et] = Re(Ve, 102), [nt, Gt] = Re(Ve, tt ? 114 : 108);
      return '<line class="wbVuTick' + (tt ? " wbMajor" : "") + '" x1="' + Be + '" y1="' + et + '" x2="' + nt + '" y2="' + Gt + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + Ce(O) + 'deg"><line x1="' + ve + '" y1="' + He + '" x2="' + ve + '" y2="' + (He - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + ze(hn(Math.round(O), y.locale)) + "</text></svg>";
    return ma({
      icon: wn.sunnyAlert,
      name: Ue.metrics.uv_index,
      sub: de && de.uv > O ? Fn(Ue.uvPeak, { level: K, uv_index: hn(Math.round(de.uv), y.locale), time: Go(de.time, y) }) : K,
      visual: Te
    });
  }
  function Qt(y) {
    const S = k("daily")[0], L = ie.temperatureHistory;
    if (!S || new Date(S.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !$t(S.temperature) || !L || L.dailyHighs.length < $p) return "";
    const O = Number(S.temperature), K = L.dailyHighs.reduce((nt, Gt) => nt + Gt, 0) / L.dailyHighs.length, Q = Math.round(O - K) || 0, de = Q > 0 ? "above" : Q < 0 ? "below" : "same", be = [...L.days, { date: /* @__PURE__ */ new Date(), high: O, today: !0 }], ve = 220, He = 158, Ce = 22, Re = 20, Ne = be.map((nt) => nt.high).concat(K), Fe = Math.min(...Ne) - 3, Te = Math.max(...Ne) + 1, Ve = (nt) => Ce + (1 - (nt - Fe) / (Te - Fe)) * (He - Ce - Re), tt = ve / be.length, Be = Math.min(18, tt * 0.6), et = '<svg class="wbCompareBars" viewBox="0 0 ' + ve + " " + He + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + ve + '" y1="' + Ve(K) + '" y2="' + Ve(K) + '"></line>' + be.map((nt, Gt) => {
      const Pe = Gt * tt + tt / 2, Rt = Ve(nt.high), Ft = nt.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + Ft + '" x="' + (Pe - Be / 2) + '" y="' + Rt + '" width="' + Be + '" height="' + (He - Re - Rt) + '" rx="5"></rect><text class="wbAvgValue' + Ft + '" x="' + Pe + '" y="' + (Rt - 6) + '">' + ze(pn(y, nt.high)) + '</text><text class="wbAvgDay' + Ft + '" x="' + Pe + '" y="' + (He - 4) + '">' + ze(ph(nt.date, y)) + "</text>";
    }).join("") + "</svg>";
    return ma({
      icon: wn.chartLine,
      name: Ue.metrics.compared_to_average,
      double: !0,
      sub: Fn(Ue.highsLastDays, { days: L.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (Q > 0 ? "+" : "") + ze(pn(y, Q)) + '</div><div class="wbCompareWords">' + ze(Ue.average[de]) + '</div><div class="wbCompareTemps">' + ze(Fn(Ue.todayVsAverage, { today: pn(y, O), average: pn(y, K) })) + "</div></div>" + et + "</div>"
    });
  }
  function Mo(y, S) {
    const L = fa(y, S, "humidity");
    if (!L || !$t(L.value)) return "";
    const O = fa(y, S, "dew_point"), K = Math.max(0, Math.min(100, Number(L.value)));
    return ma({
      icon: wn.waterPercent,
      name: Ue.metrics.humidity,
      sub: O && $t(O.value) ? Fn(Ue.dewPoint, { dew_point: pn(y, O.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + K + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Ei(hn(Math.round(Number(L.value)), y.locale), "%") + "</div>"
    });
  }
  function Wn(y, S) {
    var He, Ce;
    const L = fa(y, S, "pressure");
    if (!L || !$t(L.value)) return "";
    const O = Number(L.value), K = (He = L.stateObj.attributes) == null ? void 0 : He.pressure_unit, Q = Md(O, K), de = ((Ce = ie.pressureHistory) == null ? void 0 : Ce.entityId) === L.stateObj.entity_id ? Md(ie.pressureHistory.value, K) : void 0;
    let be;
    if (Q !== void 0 && de !== void 0) {
      const Re = Q - de;
      be = Re >= gd ? "rising" : Re <= -gd ? "falling" : "steady";
    }
    const ve = Dl(y, L.stateObj, "pressure", Math.round(O));
    return ma({
      icon: wn.gauge,
      name: Ue.metrics.pressure,
      sub: be ? Ue.pressure[be] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + Ei(ve.number) + '<span class="wbTapeUnit">' + ze(ve.unit) + "</span></div>" + (Q !== void 0 ? en(y, Q) : "") + "</div>"
    });
  }
  function en(y, S) {
    const K = Math.floor(S) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (Q, de) => K + de).map((Q) => {
      const de = 100 - (Q - S) * 9;
      if (de < 22 || de > 178) return "";
      const be = Q % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(de - 100) / 100) + '"><line class="wbTapeTick" x1="' + (be ? 2 : 8) + '" x2="26" y1="' + de + '" y2="' + de + '"></line>' + (be ? '<text class="wbTapeLabel" x="33" y="' + de + '">' + ze(hn(Q, y.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + ze(Ue.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + ze(Ue.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Xo(y) {
    var ve, He;
    const S = yc(y), L = S ? y.states[S] : void 0;
    if (!L || ((ve = ie.rain) == null ? void 0 : ve.entityId) !== S || !$t(ie.rain.change)) return "";
    const O = ((He = L.attributes) == null ? void 0 : He.unit_of_measurement) ?? "", K = _(y, "hourly"), Q = Date.now() + yo, de = k("hourly").filter((Ce) => Ce.precipitation != null && new Date(Ce.datetime).getTime() <= Q), be = de.reduce((Ce, Re) => Ce + Number(Re.precipitation), 0);
    return ma({
      icon: wn.rainy,
      name: Ue.metrics.precipitation,
      sub: K && de.length ? Fn(Ue.rainExpected, { amount: hn(be, y.locale, { maximumFractionDigits: 1 }) + " " + lr(y, K, "precipitation") }) : Ue.rainLast24h,
      visual: Ei(hn(ie.rain.change, y.locale, { maximumFractionDigits: 1 }), O) + (de.length > 1 ? Hh(de.map((Ce) => ({ label: "", value: Number(Ce.precipitation) }))) : "")
    });
  }
  function ln(y, S) {
    const L = fa(y, S, "visibility");
    if (!L || !$t(L.value)) return "";
    const O = Dl(y, L.stateObj, "visibility", L.value), K = Op(Number(L.value), lr(y, L.stateObj, "visibility"));
    return ma({
      icon: wn.eyeOutline,
      name: Ue.metrics.visibility,
      sub: Ue.visibilityLevel[qp(K)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + K + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + ze(La(y, K)) + '</div><div class="wbSeaValue">' + Ei(O.number, O.unit) + "</div></div>"
    });
  }
  function La(y, S) {
    var Q;
    const L = Fp((Q = y.config) == null ? void 0 : Q.country, S);
    if (L) return Fn(Ue.visibilityLandmarks, { from: L.from, to: L.to });
    const O = S / Qp * 60;
    if (O < 60) {
      const de = O < 5 ? Math.max(1, Math.round(O)) : 5 * Math.round(O / 5);
      if (de < 60) return Fn(Ue.walkMinutes, { minutes: hn(de, y.locale) });
    }
    const K = Math.max(1, Math.round(O / 30) / 2);
    return K < 8 ? Fn(Ue.walkHours, { hours: hn(K, y.locale) }) : Ue.walkDay;
  }
  function ja(y) {
    ie.categories === void 0 && Mn(y);
    const S = mt(y), L = (ve) => ve.map((He) => y.states[He]).filter(dr), O = L(S.air), K = L(S.pollen);
    if (!O.length && !K.length) return "";
    const Q = [...O, ...K], de = (ve) => K.includes(ve) ? wn.flower : wn.airFilter, be = Q.find((ve) => ve.entity_id === I.aq);
    return be ? So(y, be, de(be)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + ze(Ue.airQuality) + '</h2></div><div class="wbAqTiles">' + Q.map((ve) => '<button class="wbTile" data-wb="aq-open" data-entity="' + ze(ve.entity_id) + '"><span class="wbChip">' + Jr(de(ve)) + '</span><span class="wbText"><span class="wbName">' + ze(Os(y, ve)) + '</span><span class="wbSub">' + ze(sr(y, ve)) + "</span></span></button>").join("") + "</div></div>";
  }
  function So(y, S, L) {
    var Ce, Re, Ne;
    const O = ((Ce = S.attributes) == null ? void 0 : Ce.unit_of_measurement) ?? "", K = ((Re = S.attributes) == null ? void 0 : Re.device_class) === "pm25" && O === vd && $t(S.state), Q = Number(S.state), de = K ? kd(Q) : void 0, be = ((Ne = ie.aqHistory) == null ? void 0 : Ne.entityId) === S.entity_id ? ie.aqHistory.points : void 0, ve = (Fe) => Math.min(100, Math.max(0, Fe / Cl * 100));
    let He;
    if (be && be.length > 1) He = Ih(be, (Fe) => (hn(Fe, y.locale, { maximumFractionDigits: 1 }) + " " + O).trim());
    else if (de) {
      let Fe = 0;
      const Te = du.map(([Ve, tt]) => {
        const Be = ve(Math.min(tt, Cl)), et = ah[Ve] + " " + Fe + "% " + Be + "%";
        return Fe = Be, et;
      });
      He = '<div class="wbScale" role="meter" aria-label="' + ze(Ue.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Cl + '" aria-valuenow="' + Q + '" style="background:linear-gradient(to right, ' + Te.join(", ") + ')"><i style="left:' + ve(Q) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Cl + " " + vd + "</span></div>";
    } else He = '<span class="wbGraphNote"><span>' + ze(sr(y, S)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Jr(L) + '</span><span class="wbText"><span class="wbName">' + ze(Os(y, S)) + '</span><span class="wbSub">' + ze(sr(y, S)) + (de ? " · " + ze(Ue.aqLevel[de]) : "") + '</span></span><button class="wbBack" title="' + ze(Ue.back) + '" data-wb="aq-close">' + Jr(wn.back) + '</button></div><div class="wbGraph">' + He + "</div></div></div>";
  }
  const Wt = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, za = (y) => y <= 50 ? "Good" : y <= 100 ? "Moderate" : y <= 150 ? "Unhealthy for some" : y <= 200 ? "Unhealthy" : y <= 300 ? "Very unhealthy" : "Hazardous";
  function jn(y) {
    const S = /* @__PURE__ */ new Map();
    return Object.values(y.states || {}).filter((L) => {
      var O;
      return L.entity_id.startsWith("sensor.") && Bl.includes(((O = L.attributes) == null ? void 0 : O.device_class) ?? "") && dr(L) && es(y, L.entity_id);
    }).sort((L, O) => L.entity_id.localeCompare(O.entity_id)).forEach((L) => {
      S.has(L.attributes.device_class) || S.set(L.attributes.device_class, L);
    }), Bl.map((L) => S.get(L)).filter(Boolean);
  }
  const Va = (y) => Object.values(y.states || {}).filter((S) => {
    var L, O;
    return S.entity_id.startsWith("sensor.") && dr(S) && es(y, S.entity_id) && (((O = (L = y.entities) == null ? void 0 : L[S.entity_id]) == null ? void 0 : O.translation_key) ?? S.entity_id).toLowerCase().includes("pollen");
  }), ro = ["none", "very_low", "low", "moderate", "high", "very_high"], on = (y) => $t(y.state) ? Number(y.state) : ro.indexOf(String(y.state).toLowerCase().replace(/ /g, "_")), Ga = (y) => {
    const S = String(y).replace(/_/g, " ");
    return S[0].toUpperCase() + S.slice(1);
  }, sa = (y) => y.length ? '<div class="wbBaseRows">' + y.map(([S, L]) => '<span class="wbBaseRow"><span>' + ze(S) + "</span><span>" + ze(L) + "</span></span>").join("") + "</div>" : "";
  function Jo(y) {
    const S = jn(y), L = S[0];
    if (!L) return ma({ icon: wn.airFilter, name: Ue.airQuality, sub: Ue.noAir, visual: Ei("–", ""), cls: "wbBase" });
    const O = L.attributes.device_class, K = Number(L.state), Q = $t(L.state), de = O === "aqi" && Q ? za(K) : O === "pm25" && Q ? Wt[kd(K)] : sr(y, L);
    return ma({
      icon: wn.airFilter,
      name: Ue.airQuality,
      sub: de,
      cls: "wbBase",
      visual: Ei(Q ? hn(Math.round(K), y.locale) : String(L.state), O === "aqi" ? "AQI" : L.attributes.unit_of_measurement || "") + sa(S.slice(1, 3).map((be) => [Os(y, be), sr(y, be)]))
    });
  }
  function Ii(y) {
    const S = Va(y).sort((K, Q) => on(Q) - on(K));
    if (!S.length) return ma({ icon: wn.flower, name: Ue.pollen, sub: Ue.noPollen, visual: Ei("–", ""), cls: "wbBase" });
    const L = S[0], O = (K) => $t(K.state) ? sr(y, K) : Ga(K.state);
    return ma({
      icon: wn.flower,
      name: Ue.pollen,
      sub: Os(y, L) + " · " + O(L),
      cls: "wbBase",
      visual: Ei(O(L), "") + sa(S.slice(1, 3).map((K) => [Os(y, K), O(K)]))
    });
  }
  function Hi(y) {
    const S = Date.now(), L = k("hourly").filter((Q) => {
      const de = new Date(Q.datetime).getTime();
      return de > S - Pt && de < S + 12 * Pt;
    }), O = L.find((Q) => (Q.precipitation_probability ?? 0) >= 50 || (Q.precipitation ?? 0) >= 0.2), K = O ? Fn(Ue.rainFrom, { time: Go(new Date(Math.max(S, new Date(O.datetime).getTime())), y) }) : L.length ? Ue.noRain12 : void 0;
    return ma({ icon: wn.radar, name: Ue.rainRadar, sub: K, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const ns = {
    current: An,
    hourly: ke,
    sun: qn,
    moon: Pi,
    wind: Ge,
    uv_index: ot,
    compared_to_average: Qt,
    humidity: Mo,
    pressure: Wn,
    precipitation: Xo,
    visibility: ln,
    air_quality: ja,
    aq_tile: Jo,
    pollen_tile: Ii,
    radar_tile: Hi
  };
  function yt(y) {
    var He, Ce, Re;
    const S = l == null ? void 0 : l();
    if (!S || Z) return;
    const L = On(S);
    fe(S, L), ie.lastFetch || Ze();
    const O = mt(S), K = Sd(S), Q = yc(S), de = [
      ...L.map((Ne) => S.states[Ne]),
      S.states["sun.sun"],
      K && S.states[K],
      Q && S.states[Q],
      ...O.air.map((Ne) => S.states[Ne]),
      ...O.pollen.map((Ne) => S.states[Ne]),
      ...Y.some((Ne) => oe.includes(Ne)) ? [...jn(S), ...Va(S)] : [],
      S.locale,
      S.config,
      S.entities,
      Math.floor(Date.now() / oo)
    ];
    if (!y && U && de.length === U.length && de.every((Ne, Fe) => Ne === U[Fe])) return;
    U = de;
    const be = N.getRootNode(), ve = be.activeElement || document.activeElement;
    for (const Ne of Y) {
      const Fe = ne[Ne];
      let Te = "";
      try {
        Te = ns[Ne](S, L) || "";
      } catch {
        Te = "";
      }
      if (Te === Fe.html) continue;
      const Ve = ve && Fe.el.contains(ve) ? (He = ve.dataset) == null ? void 0 : He.wbFocus : void 0, tt = Fe.el.querySelector(".wbStripScroll"), Be = tt ? tt.scrollLeft : null;
      Fe.html = Te, Fe.el.hidden = !Te, Fe.el.innerHTML = Te;
      const et = Fe.el.querySelector(".wbStripScroll");
      et && Be != null ? et.scrollTo({ left: Be }) : et != null && et.dataset.start && et.scrollTo({ left: Number(et.dataset.start) * et.clientWidth / Number(et.dataset.span) }), Ve && !pe && ((Ce = Fe.el.querySelector('[data-wb-focus="' + Ve + '"]')) == null || Ce.focus());
    }
    pe && ((Re = N.querySelector('[data-wb-focus="' + pe + '"]')) == null || Re.focus(), pe = null), Mt(performance.now());
  }
  function zn() {
    ee || Z || (ee = !0, queueMicrotask(() => {
      ee = !1, yt(!0);
    }));
  }
  function Fi() {
    const y = getComputedStyle(N), S = (de) => y.getPropertyValue(de).trim(), L = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([de, be]) => {
      S(be) && (L[de] = S(be));
    });
    const O = S("--color-text-primary") || "#f1f1f1", K = S("--color-bg-card") || "#222222", Q = !!N.closest(".light");
    return { colors: { ...ra, ...L }, ink: Q ? O : K, paper: Q ? K : O };
  }
  const Oi = (y, S) => {
    var L;
    y.width !== S.w && (y.width = S.w), y.height !== S.h && (y.height = S.h), (L = y.getContext("2d")) == null || L.putImageData(new ImageData(S.data, S.w, S.h), 0, 0);
  }, _n = () => f && !ch();
  function Et(y, S) {
    N.querySelectorAll("canvas[data-wb-strip]").forEach((L) => rn(L, Ie[L.dataset.wbStrip], y, S));
  }
  function rn(y, S, L, O) {
    if (!S || !y.getClientRects().length) return;
    const K = y.clientWidth, Q = y.clientHeight;
    if (!K || !Q) return;
    const de = { width: K, height: Q, columns: S.columns || pd, colors: O.colors, clock: L, ambient: _n(), seed: S.seed, soft: 1.5 };
    if (d === "smooth") {
      const be = Math.min(2, window.devicePixelRatio || 1), ve = Math.round(K * be), He = Math.round(Q * be);
      y.width !== ve && (y.width = ve), y.height !== He && (y.height = He);
      const Ce = y.getContext("2d");
      if (!Ce) return;
      Ce.setTransform(be, 0, 0, be, 0, 0), yp(Ce, S.segs, de);
    } else Oi(y, wp(S.segs, { ...de, px: 2, oneBit: d === "onebit", ink: O.ink, paper: O.paper }));
  }
  function Mt(y) {
    if (Z) return;
    const S = Fi();
    if (d !== "smooth") {
      const L = _n();
      N.querySelectorAll("canvas[data-wb-wx]").forEach((O) => {
        O.getClientRects().length && Oi(O, Jd(Nc(O.dataset.wbWx, S.colors), { size: Number(O.dataset.size) || 40, px: 2, oneBit: d === "onebit", colors: S.colors, ink: S.ink, paper: S.paper, clock: y, idle: L }));
      });
    }
    N.querySelectorAll("canvas[data-wb-sea]").forEach((L) => {
      const O = L.clientWidth, K = L.clientHeight, Q = Number(L.dataset.wbSea), de = O + "x" + K + ":" + Q + ":" + S.colors.skyClearDay;
      !O || !K || !(Q > 0) || L.dataset.painted === de || (L.dataset.painted = de, Oi(L, Pp(O, K, Q, S.colors)));
    }), Et(y, S);
  }
  function so(y) {
    if (q = 0, !(Z || !_n())) {
      if (!document.hidden)
        if (d === "smooth") Et(y, Fi());
        else {
          const S = Math.floor(y / 100);
          S !== ue && (ue = S, Mt(y));
        }
      q = requestAnimationFrame(so);
    }
  }
  function Aa() {
    N.classList.toggle("wbMotion", _n()), !q && !Z && _n() && (q = requestAnimationFrame(so));
  }
  function Co(y) {
    var L, O;
    const S = (O = (L = y.target).closest) == null ? void 0 : O.call(L, "[data-wb]");
    if (!(!S || !N.contains(S))) {
      switch (S.dataset.wb) {
        case "day": {
          I.openDay = Number(S.dataset.index), I.opener = S.dataset.wbFocus, pe = "back-day";
          const K = Ct()[I.openDay], Q = !ie.todayHistory || ie.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - ie.todayHistory.fetched > jp;
          K && $r(new Date(K.datetime), /* @__PURE__ */ new Date()) && Q && lt();
          break;
        }
        case "close-day":
          I.openDay = void 0, pe = I.opener, I.opener = void 0;
          break;
        case "open-page":
          w == null || w();
          return;
        case "day-mode":
          I.dayMode = S.dataset.mode;
          break;
        case "hourly-mode":
          I.hourlyMode = S.dataset.mode;
          break;
        case "hourly-view":
          I.hourlyView = S.dataset.view;
          try {
            localStorage.setItem(X, I.hourlyView);
          } catch {
          }
          break;
        case "hours-day": {
          const K = N.querySelector(".wbStripScroll");
          K && K.scrollTo({ left: Number(S.dataset.hours) * K.clientWidth / Number(K.dataset.span), behavior: "smooth" });
          return;
        }
        case "aq-open":
          I.aq = S.dataset.entity, Lt(I.aq);
          break;
        case "aq-close":
          I.aq = void 0;
          break;
        default:
          return;
      }
      yt(!0);
    }
  }
  function En(y) {
    var S, L;
    y.key === "Escape" && I.openDay !== void 0 && ((L = (S = y.target).closest) != null && L.call(S, '[data-wb-open="day"]')) && (I.openDay = void 0, pe = I.opener, I.opener = void 0, yt(!0));
  }
  let Dn = null;
  function Qo(y) {
    var L, O;
    const S = (O = (L = y.target).closest) == null ? void 0 : O.call(L, ".wbStripScroll");
    !S || y.button !== 0 || (Dn = { startX: y.pageX, left: S.scrollLeft, moved: !1 }, S.classList.add("wbHeld"), window.addEventListener("mousemove", ei), window.addEventListener("mouseup", va, { once: !0 }));
  }
  function ei(y) {
    const S = N.querySelector(".wbStripScroll");
    if (!Dn || !S) return;
    const L = y.pageX - Dn.startX;
    !Dn.moved && Math.abs(L) > 1 && (Dn.moved = !0, S.classList.add("wbDragging")), S.scrollLeft = Dn.left - L;
  }
  function va() {
    Dn = null, window.removeEventListener("mousemove", ei);
    const y = N.querySelector(".wbStripScroll");
    if (!y) return;
    y.classList.remove("wbDragging", "wbHeld");
    const S = [...y.querySelectorAll(".wbSnap")];
    if (S.length) {
      const L = S.reduce((O, K) => Math.abs(K.offsetLeft - y.scrollLeft) < Math.abs(O.offsetLeft - y.scrollLeft) ? K : O);
      y.scrollTo({ left: L.offsetLeft, behavior: "smooth" });
    }
  }
  N.addEventListener("click", Co), N.addEventListener("keydown", En), N.addEventListener("mousedown", Qo);
  const la = typeof ResizeObserver == "function" ? new ResizeObserver(() => Mt(performance.now())) : null;
  la == null || la.observe(N);
  const Zn = (ti = window.matchMedia) == null ? void 0 : ti.call(window, "(prefers-reduced-motion: reduce)"), qi = () => {
    Aa(), Mt(performance.now());
  };
  (ba = Zn == null ? void 0 : Zn.addEventListener) == null || ba.call(Zn, "change", qi);
  const To = [
    setInterval(() => {
      Ae = /* @__PURE__ */ new Date(), yt(!0);
    }, Xp),
    setInterval(() => {
      F = /* @__PURE__ */ new Date(), yt(!0);
    }, Jp),
    setInterval(Ze, Zp)
  ];
  return yt(!0), Aa(), {
    update() {
      yt(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      yt(!0);
    },
    setStyle(y) {
      !y || y === d || (d = y, N.dataset.style = d, yt(!0), Aa());
    },
    destroy() {
      var y;
      Z = !0, To.forEach(clearInterval), q && cancelAnimationFrame(q), q = 0, la == null || la.disconnect(), (y = Zn == null ? void 0 : Zn.removeEventListener) == null || y.call(Zn, "change", qi), va(), N.removeEventListener("click", Co), N.removeEventListener("keydown", En), N.removeEventListener("mousedown", Qo), ["daily", "hourly"].forEach(C), N.remove();
    }
  };
}
const js = "#E1E1E1", Ad = "#F7F4F0", xc = "#03a9f4", St = 14, _t = 172;
let jh = 0;
const Xt = (a) => Math.round(a * 100) / 100, xo = (a, l, o) => Math.max(l, Math.min(o, a)), Ko = (a, l, o, d, f, v) => '<rect x="' + Xt(a) + '" y="' + Xt(l) + '" width="' + Xt(o) + '" height="' + Xt(d) + '" fill="' + f + '"' + (v != null ? ' opacity="' + v + '"' : "") + "/>", kc = (a) => a.map((l, o) => (o ? "L" : "M") + Xt(l[0]) + " " + Xt(l[1])).join("");
function Mc(a) {
  const l = (a == null ? void 0 : a.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const Di = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function zh(a) {
  const l = a < 2 ? a + 24 : a;
  let o = Di[0], d = Di[Di.length - 1];
  for (let E = 0; E < Di.length - 1; E++) if (l >= Di[E][0] && l <= Di[E + 1][0]) {
    o = Di[E], d = Di[E + 1];
    break;
  }
  const f = (l - o[0]) / (d[0] - o[0]), v = f * f * (3 - 2 * f), w = (E, x) => {
    const N = parseInt(E.slice(1), 16), ge = parseInt(x.slice(1), 16);
    return "#" + [16, 8, 0].map((oe) => Math.round((N >> oe & 255) + ((ge >> oe & 255) - (N >> oe & 255)) * v).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(o[1][0], d[1][0]), bot: w(o[1][1], d[1][1]), warm: w(o[1][2], d[1][2]), cool: w(o[1][3], d[1][3]), op: o[1][4] + (d[1][4] - o[1][4]) * v, t: l };
}
function Vh(a) {
  const l = parseInt(a.slice(1), 16), o = (l >> 16 & 255) / 255, d = (l >> 8 & 255) / 255, f = (l & 255) / 255, v = Math.max(o, d, f), w = Math.min(o, d, f);
  let E = 0, x = 0;
  const N = (v + w) / 2;
  if (v !== w) {
    const ge = v - w;
    x = N > 0.5 ? ge / (2 - v - w) : ge / (v + w), E = (v === o ? (d - f) / ge + (d < f ? 6 : 0) : v === d ? (f - o) / ge + 2 : (o - d) / ge + 4) / 6;
  }
  return [E * 360, x * 100, N * 100];
}
function ku(a, l, o) {
  l = xo(l, 0, 100) / 100, o = xo(o, 0, 100) / 100;
  const d = (w) => (w + a / 30) % 12, f = l * Math.min(o, 1 - o), v = (w) => o - f * Math.max(-1, Math.min(d(w) - 3, Math.min(9 - d(w), 1)));
  return "#" + [v(0), v(8), v(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [Mu, Su, Cu] = Vh(js), _d = ku(Mu, Su, Math.max(6, Cu - 14)), Gh = ku(Mu, Su, Math.min(96, Cu + 16));
function Uh(a, l, o, d, f) {
  const v = _t / 2, w = _t * 0.12, E = v - (v - w) * a, x = (ne) => ne ** 1.3, N = xo(o, -1.5, 1.5), ge = (ne) => -(Math.abs(N) * 4.6 * ne ** 1.5) * Math.sign(N), oe = a * 1.4, Y = (ne, Z) => {
    const U = Math.min(4.8, Math.abs(o) * 2.6) * (Z ? 1 : -1) * Math.sign(o || 1), q = Z ? ne + E : ne, ue = Z ? ne : ne + E, ee = (Ae) => q + ge(Ae) + U * Math.sin(Ae * Math.PI * 1.2 + d) * x(Ae) * 1.4 + oe * Math.sin(Ae * Math.PI * 2 + d * 0.6) * x(Ae) * (Z ? 1 : -1), pe = [[ue, St]];
    for (let Ae = 0; Ae <= 12; Ae++) pe.push([ee(Ae / 12), St + _t * Ae / 12]);
    pe.push([ue, St + _t]);
    let X = '<path d="' + kc(pe) + 'Z" fill="' + js + '"/>';
    if (f) return X;
    const A = 1.35 + ((Z ? o > 0 : o < 0) ? 0.35 : 0), I = (Ae) => {
      const F = Ae / 7, Ie = Z ? 1 - F : F, V = (1 - Ie) ** 1.3, We = ne + E * F;
      return Array.from({ length: 13 }, (k, _) => {
        const C = _ / 12;
        return [We + ge(C) * V + U * A * Math.sin(C * Math.PI * 1.2 + d - Ie * 3.2) * x(C) * 1.4 * V + oe * 1.6 * Math.sin(C * Math.PI * 2 + d * 0.6 - Ie * 2.5) * x(C) * a * (0.4 + 0.6 * V), St + _t * C];
      });
    }, ie = [1, 2, 3, 4, 5, 6].map(I);
    for (let Ae = 0; Ae < 6; Ae += 2) X += '<path d="' + kc(ie[Ae]) + kc(ie[Ae + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return X;
  }, $ = v - (v - w) * l;
  return { body: Y(St, !0) + Y(St + _t - E, !1), rails: [{ x: St + $ - 4, y: St, w: 4, h: _t }, { x: St + _t - $, y: St, w: 4, h: _t }], head: 6.4 };
}
function Yh(a, l, o) {
  const d = _t * (1 - a);
  let f = "";
  if (d > 1 && (f += Ko(St, St, _t, d, js), !o))
    for (let v = 1; v < 7; v += 2) f += Ko(St + _t * v / 7, St, _t / 7, d, "#fff");
  return { body: f, rails: [{ x: St, y: St + _t * (1 - l) - 7, w: _t, h: 11 }], head: 10.4 };
}
function Zh(a, l, o, d) {
  const f = 9 - 7 * (o / 100), v = St + _t * (1 - a), w = Math.ceil(_t / 10) + 1, E = St + f / 2, x = (St + _t - f / 2 - E) / (w - 1), N = 0.8, ge = 0.6, oe = Array.from({ length: w }, (ne, Z) => Math.max(E + Z * ge, Math.min(E + Z * x, v - f / 2 - (w - 1 - Z) * ge))), Y = oe.slice(0, -1).map((ne, Z) => xo((oe[Z + 1] - ne - ge) / (x - ge), 0, 1));
  Y.push(Y[w - 2]);
  let $ = "";
  return oe.forEach((ne, Z) => {
    const U = N + (f - N) * Y[Z], q = Math.max(0.5, U / 2), ue = Math.max(0.4, U * 0.114);
    $ += Ko(St, ne - q, _t, Math.max(1, U), js), !d && U > 2.2 && ($ += Ko(St, ne + q - ue, _t, ue, _d) + Ko(St, ne - q, _t, ue * 0.55, Gh, 0.75));
  }), d || [0.22, 0.78].forEach((ne) => {
    $ += Ko(St + _t * ne - 0.7, St, 1.4, Math.max(0, oe[w - 1] + 1 - St), _d, 0.85);
  }), { body: $, rails: [{ x: St, y: St + _t * (1 - l) - 8, w: _t, h: 8 }], head: 8.8 };
}
const Ed = (a, l, o, d, f, v, w) => a === "curtain" ? Uh(l, o, f, v, w) : a === "venetian" ? Zh(l, o, d, w) : Yh(l, o, w);
function Kh(a, l) {
  let o = "", d = "";
  return l.forEach((f) => {
    const v = f.w > f.h, w = xo(v ? St + _t / 2 : f.x + f.w / 2, 17, 183), E = xo(v ? f.y + f.h / 2 : St + _t / 2, 17, 183);
    o += v ? Ko(St, xo(f.y + f.h / 2, St, St + _t) - 1, _t, 2, xc) : Ko(xo(f.x + f.w / 2, St, St + _t) - 1, St, 2, _t, xc);
    const x = v ? "M" + Xt(w - 4) + " " + Xt(E - 3) + "l4 -3l4 3M" + Xt(w - 4) + " " + Xt(E + 3) + "l4 3l4 -3" : "M" + Xt(w - 3) + " " + Xt(E - 4) + "l-3 4l3 4M" + Xt(w + 3) + " " + Xt(E - 4) + "l3 4l-3 4";
    d += '<circle cx="' + Xt(w) + '" cy="' + Xt(E) + '" r="11" fill="' + xc + '" filter="url(#' + a + 's)"/><path d="' + x + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: d };
}
function $h(a, l) {
  const o = /* @__PURE__ */ new Date(), d = zh(o.getHours() + o.getMinutes() / 60), f = 42 + 18 * Math.sin(d.t * 0.5), v = d.t >= 5 && d.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (d.t - 5) / 15) : 80, w = Ed(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), E = l.ghostAlpha > 4e-3 && l.ghost != null ? Ed(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", x = l.grip > 4e-3 ? Kh(a, w.rails) : null, N = (ge) => Ko(St, St, _t, _t, ge);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + a + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + a + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + d.top + '"/><stop offset="1" stop-color="' + d.bot + '"/></linearGradient><radialGradient id="' + a + 'w" cx="' + Xt(f) + '%" cy="' + Xt(v) + '%" r="58%"><stop offset="0" stop-color="' + d.warm + '" stop-opacity="' + Xt(d.op * 0.8) + '"/><stop offset="1" stop-color="' + d.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + a + 'k" cx="' + Xt(100 - f * 0.8) + '%" cy="' + Xt(100 - v * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + d.cool + '" stop-opacity="' + Xt(d.op * 0.64) + '"/><stop offset="1" stop-color="' + d.cool + '" stop-opacity="0"/></radialGradient><filter id="' + a + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Ad + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + a + 'c)">' + N("url(#" + a + "l)") + N("url(#" + a + "w)") + N("url(#" + a + "k)") + (E ? '<g opacity="' + Xt(l.ghostAlpha) + '">' + E + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + js + '" filter="url(#' + a + 's)"/></g>' + (x ? '<g clip-path="url(#' + a + 'c)" opacity="' + Xt(l.grip) + '">' + x.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Ad + '" stroke-width="3"/>' + (x ? '<g opacity="' + Xt(l.grip) + '">' + x.knobs + "</g>" : "") + "</svg>";
}
function Xh({ onMove: a, onSet: l }) {
  var X;
  const o = "cv" + ++jh, d = document.createElement("div");
  d.className = "tfCoverArt";
  const f = (X = window.matchMedia) == null ? void 0 : X.call(window, "(pointer: coarse)").matches;
  let v = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let E = 0, x = !1, N = !1, ge = null, oe = 0, Y = 0;
  const $ = () => (v == null ? void 0 : v.kind) === "curtain" ? "x" : "y", ne = () => ge || x || N || v.moving || v.target != null ? 1 : f ? performance.now() < Y ? 1 : 0.4 : 0, Z = () => {
    d.innerHTML = $h(o, { kind: v.kind, pos: w.pos, bar: v.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function U(A) {
    E = 0;
    const I = w.last ? Math.min(0.064, (A - w.last) / 1e3) : 1 / 60, ie = I * 60;
    w.last = A;
    const Ae = v.pos - w.pos, F = w.pos;
    w.pos += Math.sign(Ae) * Math.min(Math.abs(Ae), Math.max(10.5, Math.abs(Ae) * 1.4) * I), Math.abs(v.pos - w.pos) < 0.03 && (w.pos = v.pos), w.vel = w.vel * 0.86 + (w.pos - F) / ie * 0.14, Math.abs(w.vel) < 0.015 && w.pos === v.pos && (w.vel = 0), (w.pos !== F || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * ie);
    const Ie = v.tilt - w.tilt;
    w.tilt += Math.sign(Ie) * Math.min(Math.abs(Ie), Math.max(60, Math.abs(Ie) * 4) * I);
    const V = ne();
    w.grip += (V - w.grip) * Math.min(1, I * (V > w.grip ? 11 : 3.5)), Math.abs(V - w.grip) < 0.01 && (w.grip = V);
    const We = v.target != null && Math.abs(v.target - w.pos) > 0.5 ? 0.22 : 0;
    v.target != null && (w.gpos = v.target), w.ghost += (We - w.ghost) * Math.min(1, I * (We > w.ghost ? 16 : 3)), Math.abs(We - w.ghost) < 4e-3 && (w.ghost = We), Z(), w.pos !== v.pos || w.vel || w.tilt !== v.tilt || w.grip !== V || w.ghost !== We ? E = requestAnimationFrame(U) : w.last = 0;
  }
  const q = () => {
    v && !E && (E = requestAnimationFrame(U));
  }, ue = setInterval(() => {
    v && !E && Z();
  }, 60 * 1e3), ee = (A) => {
    const I = d.getBoundingClientRect();
    return $() === "x" ? (A.clientX - I.left) / I.width : (A.clientY - I.top) / I.height;
  };
  d.addEventListener("pointerdown", (A) => {
    var Ae;
    if (!(v != null && v.canSet) || A.button > 0) return;
    A.preventDefault(), (Ae = d.setPointerCapture) == null || Ae.call(d, A.pointerId);
    const I = v.target ?? v.pos, ie = d.getBoundingClientRect();
    ge = { p0: ee(A), from: I, x0: A.clientX, value: null, side: null }, v.kind === "curtain" && I > 0 && (ge.side = (A.clientX - ie.left) / ie.width < 0.5 ? "L" : "R"), q();
  }), d.addEventListener("pointermove", (A) => {
    if (!ge) return;
    let I;
    if (v.kind === "curtain") {
      if (!ge.side) {
        const Ae = A.clientX - ge.x0;
        if (Math.abs(Ae) < 4) return;
        ge.side = Ae < 0 ? "L" : "R";
      }
      const ie = (_t / 2 - _t * 0.12) / 200;
      I = ge.from + (ge.side === "L" ? -1 : 1) * ((ee(A) - ge.p0) / ie) * 100;
    } else I = ge.from - (ee(A) - ge.p0) / (_t / 200) * 100;
    ge.value = xo(I, 0, 100), a(ge.value);
  });
  const pe = () => {
    if (!ge) return;
    const A = ge.value;
    ge = null, A != null && l(Math.round(A)), q();
  };
  return d.addEventListener("pointerup", pe), d.addEventListener("pointercancel", pe), d.addEventListener("lostpointercapture", pe), d.addEventListener("pointerenter", () => {
    x = !0, q();
  }), d.addEventListener("pointerleave", () => {
    x = !1, q();
  }), d.addEventListener("focus", () => {
    N = d.matches(":focus-visible"), q();
  }), d.addEventListener("blur", () => {
    N = !1, q();
  }), d.addEventListener("keydown", (A) => {
    if (!(v != null && v.canSet)) return;
    const I = Math.round(v.target ?? v.pos), ie = A.shiftKey ? 10 : 1, Ae = { ArrowUp: I + ie, ArrowRight: I + ie, ArrowDown: I - ie, ArrowLeft: I - ie, PageUp: I + 25, PageDown: I - 25, Home: 0, End: 100 }[A.key];
    if (Ae == null) return;
    A.preventDefault();
    const F = xo(Ae, 0, 100);
    a(F), clearTimeout(oe), oe = setTimeout(() => l(F), 500);
  }), {
    el: d,
    update(A) {
      const I = !v;
      v = A, I && (w.pos = v.pos, w.tilt = v.tilt, Y = performance.now() + 1500, f && setTimeout(q, 1600)), d.classList.toggle("x", $() === "x"), d.classList.toggle("y", $() === "y"), v.canSet ? (d.tabIndex = 0, d.setAttribute("role", "slider"), d.setAttribute("aria-valuemin", "0"), d.setAttribute("aria-valuemax", "100"), d.setAttribute("aria-valuenow", String(Math.round(v.target ?? v.pos))), d.setAttribute("aria-orientation", $() === "x" ? "horizontal" : "vertical")) : d.setAttribute("role", "img"), d.setAttribute("aria-label", v.name + (v.canSet ? " position" : "")), d.setAttribute("aria-valuetext", v.text), q();
    },
    destroy() {
      cancelAnimationFrame(E), E = 0, clearInterval(ue), clearTimeout(oe), d.remove();
    }
  };
}
const Dd = "move-assistant-density", Ri = {
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
}, re = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Sc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Rd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Jh = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Tl = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Nd = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Bd = 1, Qh = 4, Pd = 16, Id = 32, ef = 128, tf = 256, Hd = 16384, nf = 1, af = 2, Fd = 4, of = 8, rf = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Od = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, sf = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Cc = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, qd = "move_assistant_house", Wd = "move-assistant-house-used", lf = ["switch", "fan", "input_boolean", "automation"], jd = "move-assistant-house-look", cf = [["popup", "Popup"], ["sheet", "Sheet"]], df = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], uf = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], pf = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Tc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', hf = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', ff = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', zd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Vd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', Gd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Tu = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + a.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", Ud = Tu(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), mf = Tu(["M20 6L9 17L4 12"]), wo = (a, l = "") => '<span class="tfAreaGlyph" data-icon-for="' + re(a || "") + '"' + (l ? ' data-icon-name="' + re(l) + '"' : "") + "></span>", gf = (a) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (a ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', vf = 1, bf = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Yd = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Lc = ["hs", "xy", "rgb", "rgbw", "rgbww"], Ll = ["door", "window", "garage_door", "opening"], Zd = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Al = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], wf = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], yf = 10, xf = 20, kf = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Mf = ["living room", "bedroom", "office"];
function Sf(a, { config: l, getHass: o }) {
  var Bs, fl, Ur;
  const d = (e) => a.getElementById(e), f = d("app"), w = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let E = Ri.get(Dd) === "1", x = {};
  const N = (e) => {
    var n;
    return (n = o()) == null ? void 0 : n.callWS(e);
  }, ge = (e, n, i) => N({ type: "call_service", domain: e, service: n, service_data: i }), oe = a.querySelector("#appearancePane .toggleList");
  oe && !d("densityToggle") && (oe.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), d("densityToggle").addEventListener("click", () => {
    E = !E, Ri.set(Dd, E ? "1" : "0"), X();
  }));
  const Y = [
    ["weather", "Weather", "The forecast under Home.", (e) => e.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (e) => e.startsWith("sensor.") && wt(e).device_class === "power" && /^(W|kW)$/.test(wt(e).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (e) => e.startsWith("alarm_control_panel.")]
  ], $ = (e, n, i, c) => '<div class="themeChoice" id="' + e + '" role="group" aria-label="' + n + '">' + c.map(([p, g]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + i + '="' + p + '">' + g + "</button>").join("") + "</div>", ne = (e, n, i, c) => '<div class="toggleRow"' + (c ? ' id="' + c + '"' : "") + "><div><strong>" + e + "</strong>" + (n ? '<div class="status">' + n + "</div>" : "") + "</div>" + i + "</div>";
  function Z() {
    var M, R, B, D, ce, we;
    if (!w || d("housePane")) return;
    const e = d("settingsView");
    e.querySelector(".settingsTitle").textContent = "HomeCore";
    const n = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], i = (_e, J) => '<div class="houseTab' + (_e === "look" ? " active" : "") + '" data-house-pane="' + _e + '"><section class="card">' + J + "</section></div>";
    e.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + n.map(([_e, J]) => '<button class="tab segBtn' + (_e === "look" ? " active" : "") + '" type="button" data-house-tab="' + _e + '">' + J + "</button>").join("") + "</div>" + i("look", '<div class="toggleList" id="houseLook"></div>') + i("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + i("sources", '<div class="toggleList">' + Y.map(([_e, J, xe]) => ne(J, xe, '<select class="settingsSelect" data-source="' + _e + '" aria-label="' + J + '"></select>')).join("") + "</div>") + i("sums", '<div class="toggleList">' + Object.entries(Cc).map(([_e, J]) => ne(J.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + _e + '" aria-label="' + J.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const c = d("houseLook");
    [(M = e.querySelector(".themeBtn")) == null ? void 0 : M.closest(".toggleRow"), (R = d("densityToggle")) == null ? void 0 : R.closest(".toggleRow"), (B = d("moreInfoChoice")) == null ? void 0 : B.closest(".toggleRow"), (D = d("namesChoice")) == null ? void 0 : D.closest(".toggleRow"), (ce = d("hoursChoice")) == null ? void 0 : ce.closest(".toggleRow"), (we = d("wxStyleChoice")) == null ? void 0 : we.closest(".toggleRow")].forEach((_e) => _e && c.appendChild(_e)), c.insertAdjacentHTML("beforeend", ne("Lights", "How lights show on the house page.", $("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + ne("Pad", "What the Dual Axis Controller’s pad sets on its tile.", $("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const p = d("housePane"), g = p.querySelector(".houseTabs"), h = g.querySelector(".rubberIndicator"), b = (_e) => {
      const J = g.querySelector(".tab.active");
      h.style.transition = _e ? "" : "none", h.style.left = J.offsetLeft + "px", h.style.width = J.offsetWidth + "px", _e && (h.style.transform = "scaleX(1.08)", setTimeout(() => h.style.transform = "", 180));
    };
    new ResizeObserver(() => b(!1)).observe(g), p.addEventListener("click", (_e) => {
      const J = _e.target.closest("[data-house-tab]");
      if (J) {
        g.querySelectorAll(".tab").forEach((j) => j.classList.toggle("active", j === J)), p.querySelectorAll(".houseTab").forEach((j) => j.classList.toggle("active", j.dataset.housePane === J.dataset.houseTab)), J.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), b(!0);
        return;
      }
      const xe = _e.target.closest("[data-light-fav]");
      if (xe) {
        Wi(xe.dataset.lightFav);
        return;
      }
      const G = _e.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!G || G.disabled)) {
        if (G.dataset.lights && (mt.lights = G.dataset.lights), G.dataset.dacPad && (mt.dacPad = G.dataset.dacPad), (G.dataset.lights || G.dataset.dacPad) && (Ke(), Be.clear()), G.dataset.sumToggle) {
          const j = G.dataset.sumToggle, Me = new Set(W.hiddenSums || []);
          Me.has(j) ? Me.delete(j) : Me.add(j), W = { ...W, hiddenSums: [...Me] }, On();
        }
        Ha();
      }
    }), p.addEventListener("change", (_e) => {
      const J = _e.target;
      J.dataset.source && (W = { ...W, sources: { ...W.sources || {}, [J.dataset.source]: J.value || void 0 } }, On());
      const xe = J.dataset.lightStyle || J.dataset.lightPad;
      if (xe) {
        const G = J.dataset.lightStyle ? "lightStyles" : "lightPads", j = { ...mt[G] };
        J.value ? j[xe] = J.value : delete j[xe], mt[G] = j, Ke(), [...Be.keys()].filter((Me) => Me.endsWith(":" + xe)).forEach((Me) => Be.delete(Me));
      }
      Ha();
    });
  }
  function U() {
    var b, M;
    nt() && tt();
    const e = d("housePane");
    if (!e) return;
    const n = !!customElements.get(Fe);
    e.querySelectorAll("[data-lights]").forEach((R) => R.setAttribute("aria-pressed", String(R.dataset.lights === mt.lights))), d("lightsRow").querySelector(".status").textContent = n || !nt() ? "How lights show on the house page." : Ve === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", e.querySelectorAll("[data-dac-pad]").forEach((R) => R.setAttribute("aria-pressed", String(R.dataset.dacPad === mt.dacPad))), d("dacPadRow").hidden = !nt();
    for (const R of e.querySelectorAll("[data-source]")) {
      if (R === a.activeElement) continue;
      const [B] = Y.find(([ce]) => ce === R.dataset.source), D = Object.keys(x).filter(Y.find(([ce]) => ce === B)[3]).sort((ce, we) => ke(ce).localeCompare(ke(we)));
      R.dataset.sig !== D.join(",") && (R.innerHTML = '<option value="">Automatic</option>' + D.map((ce) => '<option value="' + re(ce) + '">' + re(ke(ce)) + "</option>").join(""), R.dataset.sig = D.join(",")), R.value = D.includes((b = W.sources) == null ? void 0 : b[B]) ? W.sources[B] : "";
    }
    e.querySelectorAll("[data-sum-toggle]").forEach((R) => {
      const B = !(W.hiddenSums || []).includes(R.dataset.sumToggle);
      R.classList.toggle("on", B), R.setAttribute("aria-checked", String(B));
    });
    const i = d("lightRows"), c = i != null && i.contains(a.activeElement) ? a.activeElement : null;
    if (!i || c != null && c.matches("select")) return;
    const p = new Set(Rn()), g = (R, B, D, ce) => '<option value="' + R + '"' + (R === D ? " selected" : "") + ">" + B + "</option>", h = Object.keys(x).filter((R) => R.startsWith("light.")).sort((R, B) => !Lt.get(R) - !Lt.get(B) || (Lt.get(R) || "").localeCompare(Lt.get(B) || "") || ke(R).localeCompare(ke(B))).map((R) => {
      const B = mt.lightStyles[R] || "", D = mt.lightPads[R] || "", ce = p.has(R), we = re(ke(R));
      return "<tr><td><strong>" + we + "</strong></td><td>" + re(Lt.get(R) || "—") + "</td><td>" + re(on(R)) + '</td><td class="metaSwitchCol"><button class="switch' + (ce ? " on" : "") + '" type="button" role="switch" aria-checked="' + ce + '" data-light-fav="' + re(R) + '" aria-label="' + we + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + re(R) + '" aria-label="' + we + ' tile">' + g("", "Default", B) + g("tile", "HomeCore tile", B) + g("dac", "Dual Axis Controller", B) + '</select></td><td><select class="settingsSelect" data-light-pad="' + re(R) + '" aria-label="' + we + ' pad"' + (et(R) ? "" : " disabled") + ">" + g("", "Default", D) + g("temperature", "Temperature", D) + g("colour", "Colour", D) + "</select></td></tr>";
    }).join("");
    i.dataset.html !== h && (i.innerHTML = h, i.dataset.html = h, c != null && c.dataset.lightFav && ((M = i.querySelector('[data-light-fav="' + CSS.escape(c.dataset.lightFav) + '"]')) == null || M.focus({ preventScroll: !0 })));
  }
  const q = document.createElement("div");
  q.className = "densityBadge", q.setAttribute("aria-live", "polite"), q.hidden = !0, f.appendChild(q);
  let ue = 0;
  function ee() {
    if (!E) return;
    const e = d("homeView"), n = (g) => g.offsetParent !== null && !g.closest("[hidden]");
    e.querySelectorAll(":scope .card, :scope .tfAction").forEach((g) => {
      n(g) && (g.dataset.h = Math.round(g.getBoundingClientRect().height) + " px");
    });
    const i = [...e.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(n), c = window.innerHeight, p = i.filter((g) => {
      const h = g.getBoundingClientRect();
      return h.height > 0 && h.top >= 0 && h.bottom <= c + 0.5;
    }).length;
    q.hidden = !e.classList.contains("active"), q.innerHTML = "<b>" + p + "</b><small>of " + i.length + " readings on screen</small>";
  }
  const pe = () => {
    E && requestAnimationFrame(ee);
  };
  function X() {
    var e;
    f.classList.toggle("showDensity", E), (e = d("densityToggle")) == null || e.classList.toggle("on", E), q.hidden = !E, clearInterval(ue), E && (ue = setInterval(ee, 1e3), ee());
  }
  window.addEventListener("scroll", pe, { capture: !0, passive: !0 }), window.addEventListener("resize", pe, { passive: !0 });
  const A = a.querySelector("#homeView .grid");
  let I = null, ie = null, Ae = null, F = null;
  const Ie = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), We = /* @__PURE__ */ new Map(), k = 350;
  let _ = null;
  const C = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map();
  let W = { favourites: null }, se = {}, me = {}, ye = [], Ze = null;
  const lt = (() => {
    try {
      return JSON.parse(Ri.get(Wd)) || {};
    } catch {
      return {};
    }
  })();
  let Lt = /* @__PURE__ */ new Map(), Mn = 0;
  function On() {
    clearTimeout(Mn), Mn = setTimeout(() => Promise.resolve(N({ type: "frontend/set_user_data", key: qd, value: W })).catch(() => {
    }), 400);
  }
  const mt = (() => {
    let e = {};
    try {
      e = JSON.parse(Ri.get(jd)) || {};
    } catch {
    }
    const n = (i, c) => Object.fromEntries(Object.entries(i || {}).filter(([, p]) => c.includes(p)));
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
  })(), Ke = () => Ri.set(jd, JSON.stringify(mt)), Ct = () => {
    f.dataset.more = mt.more, f.dataset.names = mt.names, Ls();
  };
  w && oe && !d("moreInfoChoice") && (d("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + cf.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (mt.more === e) + '" data-more-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), d("moreInfoChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-more-style]");
    n && (mt.more = n.dataset.moreStyle, Ke(), Ct(), d("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  }), d("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + df.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (mt.names === e) + '" data-names-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), d("namesChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-names-style]");
    n && (mt.names = n.dataset.namesStyle, mt.namesPicked = !0, Ke(), Ct(), d("namesChoice").querySelectorAll("[data-names-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  }), d("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + uf.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (mt.hoursWindow === e) + '" data-hours-window="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), d("hoursChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-hours-window]");
    n && (mt.hoursWindow = n.dataset.hoursWindow, Ke(), Ye == null || Ye.refresh(), d("hoursChoice").querySelectorAll("[data-hours-window]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  }), d("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + pf.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (mt.wxStyle === e) + '" data-wx-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), d("wxStyleChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-wx-style]");
    n && (mt.wxStyle = n.dataset.wxStyle, Ke(), Ye == null || Ye.setStyle(mt.wxStyle), It == null || It.forEach((i) => i.setStyle(mt.wxStyle)), d("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  })), Z();
  let $e = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const yn = /* @__PURE__ */ new Map();
  let An = "";
  const ur = w ? op({ onChange: () => an() }) : null;
  w && f.classList.add("house");
  const ht = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ye = null, bt = null, ko = !1;
  function pr(e) {
    const n = os();
    if (f.classList.toggle("houseBento", !!n), Ye && (bt !== n || e == null) && (Ye.destroy(), Ye = null), !n || e == null) {
      ht.remove();
      return;
    }
    ht.isConnected || A.append(ht), ht.style.order = e, !Ye && !ko && (Ye = Ld(ht, { getHass: o, entityId: n, style: mt.wxStyle, hoursWindow: () => mt.hoursWindow }), bt = n);
  }
  const Bi = [["wx", ["current"]], ["avg", ["compared_to_average"]], ["aq", ["aq_tile"]], ["pollen", ["pollen_tile"]], ["radar", ["radar_tile"]]], Sn = ["aq", "pollen", "radar"], pt = Object.fromEntries(Bi.map(([e]) => [e, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + e })]));
  let It = null, hr = null;
  function $o(e) {
    const n = os();
    It && hr !== n && (It.forEach((i) => i.destroy()), It = null), Object.values(pt).forEach((i) => n ? !i.isConnected && A.append(i) : i.remove()), n && !It && !ko && (It = Bi.map(([i, c]) => Ld(pt[i], { getHass: o, entityId: n, style: mt.wxStyle, cards: c, onOpen: i === "wx" ? () => Fr("weather") : void 0 })), hr = n);
  }
  const wt = (e) => {
    var n;
    return ((n = x[e]) == null ? void 0 : n.attributes) || {};
  }, ke = (e) => wt(e).friendly_name || e, Ht = (e, n) => rr(e) || (Number(wt(e).supported_features) & n) === n, Oe = (e) => {
    const n = String(e ?? "").replace(/_/g, " ");
    return n.charAt(0).toUpperCase() + n.slice(1);
  }, qn = (e, n = 1) => Number(e).toLocaleString(void 0, { minimumFractionDigits: n, maximumFractionDigits: n }), Wa = (e) => (e == null ? void 0 : e.state) === "on" ? e.attributes.brightness != null ? Math.max(1, Math.round(e.attributes.brightness / 2.55)) : 100 : 0, Pi = (e) => wt(e).supported_color_modes || [], Ge = (e) => {
    const n = e / 100;
    return [n <= 66 ? 255 : 329.7 * Math.pow(n - 60, -0.1332), n <= 66 ? 99.47 * Math.log(n) - 161.12 : 288.12 * Math.pow(n - 60, -0.0755), n >= 66 ? 255 : n <= 19 ? 0 : 138.52 * Math.log(n - 10) - 305.04];
  }, ot = (e, n) => [5, 3, 1].map((i) => {
    const c = (i + e / 60) % 6;
    return 255 * (1 - n / 100 * Math.max(0, Math.min(c, 4 - c, 1)));
  }), Qt = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)), Mo = (e) => {
    const n = 0.2126 * Qt(e[0]) + 0.7152 * Qt(e[1]) + 0.0722 * Qt(e[2]);
    return (n + 0.05) / 0.0664 > 1.05 / (n + 0.05);
  }, Wn = (e) => 0.2126 * Qt(e[0]) + 0.7152 * Qt(e[1]) + 0.0722 * Qt(e[2]), en = (e, n) => {
    const i = Wn(e), c = Wn(n);
    return (Math.max(i, c) + 0.05) / (Math.min(i, c) + 0.05);
  }, Xo = (e, n) => {
    const i = Mo(e);
    for (let c = 0.1; c < 1; c += 0.02) {
      const p = e.map((g) => Math.round(i ? g * (1 - c) : g + (255 - g) * c));
      if (en(p, e) >= n) return "rgb(" + p.join(",") + ")";
    }
    return i ? "#26221e" : "#ffffff";
  };
  function ln(e) {
    const n = wt(e), i = (n.rgb_color || (n.hs_color && n.color_mode !== "color_temp" ? ot(...n.hs_color) : n.color_temp_kelvin ? Ge(n.color_temp_kelvin) : [255, 170, 0])).map((c) => Math.round(Math.max(0, Math.min(255, c))));
    return "--light:rgb(" + i.join(",") + ");--light-ink:" + Xo(i, 3.5);
  }
  const La = (e) => {
    var n;
    return e.startsWith("light.") && ((n = x[e]) == null ? void 0 : n.state) === "on" ? ' data-light style="' + ln(e) + '"' : "";
  }, ja = (e) => {
    const n = Pi(e);
    return n.length ? n.some((i) => i !== "onoff") : wt(e).brightness != null;
  }, So = (e) => [wt(e).min_color_temp_kelvin || 2e3, wt(e).max_color_temp_kelvin || 6500], Wt = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function za(e) {
    const n = Math.max(1, Math.round((Date.now() - e) / 1e3));
    if (n < 10) return "Just now";
    if (n < 60) return n + " seconds ago";
    const i = Math.round(n / 60);
    if (i < 60) return i + (i === 1 ? " minute ago" : " minutes ago");
    const c = Math.round(i / 60);
    if (c < 24) return c + (c === 1 ? " hour ago" : " hours ago");
    const p = Math.round(c / 24);
    return p + (p === 1 ? " day ago" : " days ago");
  }
  const jn = (e) => {
    var n;
    return wt(e).current_position ?? (((n = x[e]) == null ? void 0 : n.state) === "closed" ? 0 : 100);
  }, Va = (e) => {
    var n;
    return sn("pos", e, ((n = C.get(e)) == null ? void 0 : n.pos) ?? jn(e));
  }, ro = (e) => {
    var n;
    return sn("tilt", e, ((n = C.get(e)) == null ? void 0 : n.tilt) ?? wt(e).current_tilt_position);
  };
  function on(e) {
    var h;
    const n = x[e];
    if (!n) return "Not found";
    if (n.state === "unavailable") return "Unavailable";
    const i = n.attributes, c = e.split(".")[0];
    if (c === "light") {
      if (n.state !== "on") return "Off";
      const b = i.color_temp_kelvin;
      return (ja(e) ? Wa(n) + "%" : "On") + (i.color_mode === "color_temp" && b ? " · " + Number(b).toLocaleString() + "k" : Lc.includes(i.color_mode) ? " · Colour" : "");
    }
    if (c === "climate") return (n.state === "off" ? "Off" : Oe(i.hvac_action || n.state)) + " · " + qn(i.current_temperature) + " °C now";
    if (c === "cover") {
      const b = jn(e), M = i.current_tilt_position;
      return n.state === "opening" || n.state === "closing" ? Oe(n.state) + " - " + b + "%" : (b <= 0 ? "Closed" : b >= 100 ? "Open" : "Partially open") + (M > 0 && M < 100 ? " · tilted" : "");
    }
    if (c === "humidifier") return n.state !== "on" ? "Off" : Oe(i.action || "on") + " · " + i.current_humidity + "% now";
    if (c === "vacuum") return Oe(n.state) + (n.state === "cleaning" && ((h = i.rooms) != null && h.length) ? " · " + i.rooms.join(", ") : "") + (i.battery_level != null ? " · " + i.battery_level + "%" : "");
    if (c === "media_player") return n.state === "playing" || n.state === "paused" ? (n.state === "paused" ? "Paused · " : "") + (i.media_title || "Playing") : Oe(n.state);
    if (c === "alarm_control_panel") return Yd[n.state] || Oe(n.state);
    if (c === "lock" || c === "valve") return Oe(n.state);
    if (c === "switch") return n.state === "on" ? "On" : "Off";
    if (c === "plant") return n.state === "ok" ? "Healthy" : Oe(i.problem);
    if (c === "binary_sensor")
      return i.device_class === "battery" ? n.state === "on" ? "Low" : "Normal" : i.device_class === "problem" ? n.state === "on" ? "Problem" : "OK" : i.device_class === "moisture" ? n.state === "on" ? "Wet" : "Dry" : Ll.includes(i.device_class) ? n.state === "on" ? "Open" : "Closed" : n.state === "on" ? "Detected" : "Clear";
    if (i.rang) return "Rang at " + Wt(i.rang);
    const p = o();
    if (p != null && p.formatEntityState && !rr(e))
      try {
        return p.formatEntityState(n);
      } catch {
      }
    const g = Number(n.state);
    if (n.state !== "" && Number.isFinite(g)) {
      const b = Math.abs(g) >= 100 ? 0 : Math.abs(g) >= 10 ? 1 : 2, M = i.unit_of_measurement ? i.unit_of_measurement === "%" ? "%" : " " + i.unit_of_measurement : "";
      return g.toLocaleString(void 0, { maximumFractionDigits: b }) + M + (i.plant_low ? " · Low" : i.plant_high ? " · High" : "");
    }
    return Oe(n.state);
  }
  const Ga = (e) => e >= 1e3 ? qn(e / 1e3, 2) + " kW" : Math.round(e).toLocaleString() + " W";
  function sa(e) {
    var i, c;
    const n = o();
    e.querySelectorAll("[data-icon-for]").forEach((p) => {
      var b;
      const g = x[p.dataset.iconFor], h = p.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && g && !h) {
        let M = p.firstElementChild;
        (!M || M.localName !== "ha-state-icon") && (p.textContent = "", M = document.createElement("ha-state-icon"), p.appendChild(M)), M.hass = n, M.stateObj = g;
      } else if (customElements.get("ha-icon")) {
        let M = p.firstElementChild;
        (!M || M.localName !== "ha-icon") && (p.textContent = "", M = document.createElement("ha-icon"), p.appendChild(M)), M.icon = h || ((b = g == null ? void 0 : g.attributes) == null ? void 0 : b.icon) || "mdi:circle-medium";
      } else p.textContent || (p.textContent = (p.dataset.letter || ke(p.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (i = e.querySelectorAll) == null || i.call(e, ".tfIcon").forEach(Ii), (c = e.classList) != null && c.contains("tfIcon") && Ii(e), Oi();
  }
  const Jo = /* @__PURE__ */ new Map();
  function Ii(e) {
    var g, h, b;
    const n = (((g = e.closest("[data-k]")) == null ? void 0 : g.dataset.k) || "") + "|" + (e.dataset.iconFor || ((h = e.querySelector("[data-icon-for]")) == null ? void 0 : h.dataset.iconFor) || e.getAttribute("aria-label") || ""), i = getComputedStyle(e), c = { backgroundColor: i.backgroundColor, color: i.color }, p = Jo.get(n);
    Jo.set(n, c), !(!p || p.backgroundColor === c.backgroundColor && p.color === c.color || (b = window.matchMedia) != null && b.call(window, "(prefers-reduced-motion: reduce)").matches) && e.animate([p, c], { duration: 180, easing: "ease" });
  }
  const Hi = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", ns = (e) => {
    const n = [e];
    for (; n.length; ) {
      const i = n.shift();
      if (i.localName === "svg") return i;
      i.shadowRoot && n.push(...i.shadowRoot.children), n.push(...i.children);
    }
    return null;
  };
  function yt(e) {
    var we, _e, J;
    const n = e.localName === "svg" ? e : ns(e), i = n ? [...n.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!i.length) return !n;
    const c = (we = e.closest(".tfIcon")) == null ? void 0 : we.offsetWidth;
    if (c === void 0) return !0;
    if (!c) return !1;
    const p = c + "|" + i.map((xe) => xe.getAttribute("d") || xe.localName).join("|");
    if (e.dataset.fitted === p) return !0;
    let g = 1 / 0, h = 1 / 0, b = -1 / 0, M = -1 / 0;
    for (const xe of i) {
      const G = xe.getBBox(), j = getComputedStyle(xe), Me = j.stroke !== "none" ? (parseFloat(j.strokeWidth) || 0) / 2 : 0;
      !G.width && !G.height || (g = Math.min(g, G.x - Me), h = Math.min(h, G.y - Me), b = Math.max(b, G.x + G.width + Me), M = Math.max(M, G.y + G.height + Me));
    }
    if (!(b > g)) return !1;
    const R = (J = (_e = n.viewBox) == null ? void 0 : _e.baseVal) != null && J.width ? n.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, B = c - 14, D = B * R.width / Math.max(b - g, M - h), ce = D / R.width;
    return e.localName === "svg" ? (e.style.width = D + "px", e.style.height = D + "px") : e.style.setProperty("--mdc-icon-size", D + "px"), n.style.translate = ((R.x + R.width / 2 - (g + b) / 2) * ce).toFixed(2) + "px " + ((R.y + R.height / 2 - (h + M) / 2) * ce).toFixed(2) + "px", e.dataset.fitted = p, !0;
  }
  let zn = 0;
  function Fi(e = 0) {
    clearTimeout(zn), [...a.querySelectorAll(Hi)].filter((i) => !yt(i)).length && e < 5 && (zn = setTimeout(() => Fi(e + 1), 300));
  }
  function Oi() {
    clearTimeout(zn), zn = setTimeout(() => Fi(), 60);
  }
  const _n = (e) => {
    var n, i, c;
    return e.startsWith("light.") && x[e] && !wt(e).icon && !((c = (i = (n = o()) == null ? void 0 : n.entities) == null ? void 0 : i[e]) != null && c.icon) ? "mdi:lightbulb" : "";
  }, Et = (e, n, i) => (n = n || _n(e), ' data-icon-for="' + re(e) + '"' + (n ? ' data-icon-name="' + re(n) + '"' : "") + (i ? ' data-letter="' + re(i) + '"' : "")), rn = (e) => e.endsWith("_solar_power") ? "mdi:solar-power-variant" : wt(e).rang ? "mdi:doorbell" : "", Mt = (e, n, i, c) => re([e, n, i, c ? JSON.stringify(c) : ""].join("|")), so = (e) => re(JSON.stringify(e));
  function Aa(e, n) {
    var p, g;
    const i = re(ke(n) + ", " + on(n));
    return '<div class="activityRow' + (Number.isFinite(Number((p = x[n]) == null ? void 0 : p.state)) && ((g = x[n]) == null ? void 0 : g.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + re(e + "|" + n) + '" aria-label="' + i + '. Show the last 24 hours"' : '" aria-label="' + i + '"') + '><div class="tfIcon" aria-hidden="true"' + Et(n, rn(n)) + '></div><div><div class="activityRowName">' + re(ke(n)) + '</div><div class="activityRowMeta">' + re(on(n)) + "</div></div></div>";
  }
  const Co = (e, n, i) => '<div class="activityRow" aria-label="' + re(e + ", " + n) + '"><div class="tfIcon" aria-hidden="true"' + Et("", i, e) + '></div><div><div class="activityRowName">' + re(e) + '</div><div class="activityRowMeta">' + re(n) + "</div></div></div>";
  function En(e) {
    var i;
    const n = ((i = x[e]) == null ? void 0 : i.state) === "on";
    return '<div class="activityRow tfPlug' + (n ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + Mt("switch", "toggle", e) + '" aria-label="Turn ' + re(ke(e)) + (n ? " off" : " on") + '"' + Et(e) + '></button><button class="tfName" type="button" data-more="' + re(e) + '" aria-label="' + re(ke(e) + ", " + on(e) + ". More info") + '"><span class="activityRowName">' + re(ke(e)) + '</span><span class="activityRowMeta">' + re(on(e)) + "</span></button></div>";
  }
  const Dn = (e) => {
    var n;
    return ((n = V.get(e)) == null ? void 0 : n.name) ?? ke(e);
  }, Qo = (e) => {
    var n;
    return ((n = V.get(e)) == null ? void 0 : n.text) ?? on(e);
  };
  function ei(e) {
    var i;
    const n = (i = V.get(e)) == null ? void 0 : i.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (n ? Et("", n, Dn(e)) : Et(e, rn(e))) + '></div><div><div class="activityRowName">' + re(Dn(e)) + '</div><div class="activityRowMeta">' + re(Qo(e)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + re(Dn(e)) + '’s last 24 hours">' + Sc + '</button></div><svg class="tfGraph" data-graph="' + re(e) + '" role="img" aria-label="' + re(Dn(e)) + ', last 24 hours"></svg></div>';
  }
  function va(e, n, i, c, p = "", g = null, h = "") {
    const b = I && I.key === e;
    return '<section class="card tfCard' + (h ? " " + h : "") + (b ? " open" : "") + '" data-tf data-k="' + re(e) + '" style="order:' + n + (b && I.h ? ";min-height:" + I.h + "px" : "") + '" aria-label="' + re(i) + '"><div class="activityHeader">' + (g ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + re(g) + '" aria-label="' + re(i + (x[g] ? ", " + on(g) : "") + ". More info") + '">' + re(i) + "</button>" : '<div class="activityTitle">' + re(i) + "</div>") + "</div>" + (b ? ei(I.id) : '<div class="activityRows">' + c.join("") + "</div>" + p) + "</section>";
  }
  function la(e, n) {
    const i = "readings:" + e.id, c = e.readings.map((p) => Aa(i, p));
    return e.power != null && c.push(Co("Power now", Ga(e.power), "mdi:flash")), va(i, n, "Readings", c.concat(e.plugs.map(En)));
  }
  function Zn(e, n) {
    var b;
    const i = "energy:" + e.id, [c, p] = [e.solar.find((M) => M.endsWith("_power")), e.solar.find((M) => M.endsWith("_today"))], g = [c, p].filter(Boolean).map((M) => Aa(i, M)), h = Number(((b = x[c]) == null ? void 0 : b.state) || 0) * 1e3;
    return $e.grid && (g.push(Aa(i, $e.grid)), g.push(Co("House use", Ga(h + Number(x[$e.grid].state)), "mdi:home-lightning-bolt"))), va(i, n, "Energy", g, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const qi = (e, n) => va("plant:" + e.id, n, ke(e.id), e.readings.map((i) => Aa("plant:" + e.id, i)), "", e.id);
  function To(e, n, i, c, p, g, h = null) {
    const b = i == null ? null : Math.max(0, Math.min(1, i)), M = b == null ? 0 : Math.round(b * 100);
    return '<div class="tfBar ' + e + '" role="slider" tabindex="0" aria-label="' + re(c) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + M + '"' + (p ? ' aria-valuetext="' + re(p) + '"' : "") + ' data-drag="' + re(e + "|" + n) + '">' + (h != null ? '<span class="was" aria-hidden="true" style="left:' + h + '%"></span>' : "") + (g ? b == null ? "" : '<b style="left:' + M + '%"></b>' : '<i style="width:' + M + '%"></i>') + "</div>";
  }
  const ti = "move-assistant-house-last-bright", ba = (() => {
    try {
      return JSON.parse(Ri.get(ti)) || {};
    } catch {
      return {};
    }
  })();
  let y = 0;
  const S = (e, n) => {
    !n || ba[e] === n || (ba[e] = n, clearTimeout(y), y = setTimeout(() => Ri.set(ti, JSON.stringify(ba)), 500));
  }, L = (e, n, i, c) => '<div class="tfStep" role="group" aria-label="' + re(e) + '"><button type="button" data-act="' + i + '" aria-label="Lower ' + re(e.toLowerCase()) + '">' + Nd.down + "</button><output>" + re(n) + '</output><button type="button" data-act="' + c + '" aria-label="Raise ' + re(e.toLowerCase()) + '">' + Nd.up + "</button></div>", O = (e, n, i) => '<div class="' + e + '" role="group" aria-label="' + re(n) + '">' + i.filter(Boolean).map((c) => '<button type="button" data-act="' + c.act + '"' + (c.pressed != null ? ' aria-pressed="' + c.pressed + '"' : "") + (c.disabled ? " disabled" : "") + (c.aria ? ' aria-label="' + re(c.aria) + '"' : "") + ">" + (c.html || re(c.label)) + "</button>").join("") + "</div>", K = (e, n) => "width:" + Math.round(Math.max(0, Math.min(1, (e - n * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * n / 3).toFixed(2), Q = (e) => "left:calc(4px + " + e / 100 + " * (100% - 8px))", de = (e, n) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + re(ke(e)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-blocks="' + re(e) + '">' + [0, 1, 2, 3].map((i) => '<span><i style="' + K(n, i) + '"></i><b' + (n >= (i + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (i + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Q(n) + '">' + Math.round(n) + "%</output></div>";
  function be(e, n) {
    e.querySelectorAll(":scope>span").forEach((c, p) => {
      c.firstElementChild.setAttribute("style", K(n, p)), c.lastElementChild.classList.toggle("lit", n >= (p + 1) * 25 - 12);
    });
    const i = e.querySelector(".tfTip");
    i.setAttribute("style", Q(n)), i.textContent = Math.round(n) + "%", e.setAttribute("aria-valuenow", String(Math.round(n))), e.setAttribute("aria-valuetext", Math.round(n) + "% open");
  }
  const ve = (e, n) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + re(ke(e)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-drag="tilt|' + re(e) + '"><i style="width:calc((100% - 8px) * ' + n / 100 + ')"></i><span' + (n > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (n > 92 ? ' class="lit"' : "") + ">Open</span></div>", He = (e, n, i) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + re(ke(e)) + '">' + [
    Ht(e, nf) && ["open", "Open", "open_cover", n >= 100 && !i],
    Ht(e, of) && ["stop", "Stop", "stop_cover", !1],
    Ht(e, af) && ["close", "Close", "close_cover", n <= 0 && !i]
  ].filter(Boolean).map(([c, p, g, h]) => '<button type="button" data-act="' + Mt("cover", g, e) + '" aria-label="' + p + '"' + (h ? " disabled" : "") + ">" + rf[c] + "</button>").join("") + "</div>", Ce = (e, n) => '<button class="tfIcon' + (n.art ? " art" : "") + '" type="button" data-act="' + n.button.act + '" aria-label="' + re(n.button.label) + '"' + (n.art ? ' style="background-image:url(&quot;' + re(n.art) + '&quot;)"' : Et(e, n.icon)) + "></button>", Re = (e) => '<button class="tfName" type="button" data-more="' + re(e) + '" aria-label="' + re(ke(e) + ", " + on(e) + ". More info") + '"><span class="activityRowName">' + re(ke(e)) + '</span><span class="activityRowMeta">' + re(on(e)) + "</span></button>";
  function Ne(e, n = !1, i = null) {
    if (e.startsWith("light.") && Gt(e)) return '<div class="tfDac" data-k="' + re(e) + '" data-dac="' + (n ? "more:" : i ? "dash:" : "tile:") + re(e) + '"' + La(e) + "></div>";
    const c = Kn(e), p = i || (n && e.startsWith("light.") ? ["bright"] : null), g = c.sections.map((h, b) => h && (!p || p.includes((c.parts || [])[b])) ? h : "").filter(Boolean);
    return '<div class="tfAction' + (c.on ? " on" : "") + '" data-k="' + re(e) + '"' + (c.tone ? ' data-tone="' + c.tone + '"' : "") + La(e) + '><div class="tfActionHead">' + Ce(e, c) + Re(e) + "</div>" + g.join("") + "</div>";
  }
  const Fe = "dual-controller-v3", Te = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.4/dist/dual-axis-controller-v4.js";
  let Ve = null;
  async function tt() {
    if (Ve || customElements.get(Fe)) return;
    Ve = "loading";
    const e = await Promise.resolve().then(() => N({ type: "lovelace/resources" })).catch(() => null), n = Array.isArray(e) && e.some((c) => /dual-axis-controller/i.test(c.url || ""));
    if (await Promise.race([customElements.whenDefined(Fe), new Promise((c) => setTimeout(c, n ? 8e3 : 0))]), customElements.get(Fe)) return;
    const i = Object.assign(document.createElement("script"), { src: Te });
    i.onerror = () => {
      Ve = "failed", U();
    }, document.head.appendChild(i);
  }
  const Be = /* @__PURE__ */ new Map(), et = (e) => (mt.lightStyles[e] || mt.lights) === "dac", nt = () => mt.lights === "dac" || Object.values(mt.lightStyles).includes("dac");
  function Gt(e) {
    return et(e) && !!customElements.get(Fe);
  }
  const Pe = (e) => mt.lightPads[e] || mt.dacPad, Rt = () => {
    const e = o();
    return e && {
      ...e,
      themes: { ...e.themes || {}, darkMode: !f.classList.contains("light") },
      callService: (n, i, c, ...p) => e.callService(n, ...pl(n, i, c), ...p)
    };
  }, Ft = ".halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", ca = ".hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.hcChip:not(.is-on){background:var(--hc-icon,var(--hc-tile))!important;color:var(--hc-icon-ink,var(--hc-text))!important}.hcChip.is-on{background:var(--light,var(--hc-light-on))!important;color:var(--light-ink,#ffffff)!important}", Ua = (e, n) => {
    !e.shadowRoot || e.shadowRoot.querySelector("style[data-tf]") || (e.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: ca + (n ? Ft : "") })).dataset.tf = "");
  }, Lo = /* @__PURE__ */ new Map(), lo = new ResizeObserver((e) => e.forEach(({ target: n }) => {
    const i = n.parentElement;
    !i || !n.offsetHeight || (i.style.removeProperty("min-height"), Lo.set(i.dataset.dac, i.offsetHeight));
  }));
  function Ao(e) {
    var n;
    [...(n = e.matches) != null && n.call(e, "[data-dac]") ? [e] : [], ...e.querySelectorAll("[data-dac]")].forEach((i) => {
      const c = i.dataset.dac, p = c.startsWith("dash:");
      let g = Be.get(c);
      if (!g) {
        const h = c.slice(c.indexOf(":") + 1);
        g = document.createElement(Fe), g.setConfig({ type: "custom:" + Fe, entity: h, pad: Pe(h), ...p ? { tap_action: { action: "none" } } : {} }), Be.set(c, g);
      }
      g.hass = Rt(), g.parentNode !== i && i.replaceChildren(g, ...i.querySelectorAll(":scope > .tfEditChips")), !g.offsetHeight && Lo.has(c) && (i.style.minHeight = Lo.get(c) + "px"), lo.observe(g), Ua(g, p);
    });
  }
  function xt() {
    const e = Rt();
    Be.forEach((n, i) => {
      n.isConnected ? n.hass = e : Be.delete(i);
    });
  }
  customElements.whenDefined(Fe).then(() => {
    w && (A != null && A.querySelector("[data-tf]")) && ol(Ha);
  });
  const sn = (e, n, i) => We.has(e + "|" + n) ? We.get(e + "|" + n) : i;
  function Kn(e) {
    var g;
    const n = x[e], i = n.attributes, c = e.split(".")[0], p = (h, b) => ({ act: Mt(h, "toggle", e), label: b });
    if (c === "light") {
      const h = n.state === "on", b = Pi(e), [M, R] = So(e), B = sn("bright", e, Wa(n));
      h && S(e, Wa(n));
      const D = sn("ct", e, h && i.color_mode === "color_temp" ? i.color_temp_kelvin : null), ce = sn("hue", e, h && Lc.includes(i.color_mode) && i.hs_color ? i.hs_color[0] : null);
      return { on: h, button: p("light", "Turn " + ke(e) + (h ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        ja(e) && To("bright", e, B / 100, ke(e) + " brightness", B + "%", !1, h ? null : ba[e] ?? null),
        b.includes("color_temp") && To("ct", e, D == null ? null : (D - M) / (R - M), ke(e) + " warm to cool", D == null ? "" : Math.round(D) + " kelvin", !0),
        b.some((we) => Lc.includes(we)) && To("hue", e, ce == null ? null : ce / 360, ke(e) + " colour", "", !0)
      ] };
    }
    if (c === "climate") {
      const h = i.target_temp_step || 0.5, b = Number(i.temperature);
      return { on: n.state !== "off", tone: n.state === "cool" || i.hvac_action === "cooling" ? "cool" : "heat", button: p("climate", "Turn " + ke(e) + (n.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(b) && L("Target temperature", qn(b) + " °C", Mt("climate", "set_temperature", e, { temperature: b - h }), Mt("climate", "set_temperature", e, { temperature: b + h })),
        O("tfSeg", "Mode", (i.hvac_modes || []).map((M) => ({ label: Oe(M), act: Mt("climate", "set_hvac_mode", e, { hvac_mode: M }), pressed: n.state === M })))
      ] };
    }
    if (c === "cover") {
      const h = n.state === "opening" || n.state === "closing", b = n.state === "closed", M = Va(e), R = ro(e);
      return { on: !b, tone: "blue", icon: Od[Mc(n)][b ? 1 : 0], button: p("cover", (b ? "Open " : "Close ") + ke(e)), parts: ["blocks", "tilt", "buttons"], sections: [
        Ht(e, Fd) && de(e, M),
        R != null && ve(e, R),
        He(e, M, h)
      ] };
    }
    if (c === "humidifier") {
      const h = Number(i.humidity);
      return { on: n.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: p("humidifier", "Turn " + ke(e) + (n.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(h) && L("Target humidity", h + "%", Mt("humidifier", "set_humidity", e, { humidity: h - 1 }), Mt("humidifier", "set_humidity", e, { humidity: h + 1 })),
        ((g = i.available_modes) == null ? void 0 : g.length) && O("tfSeg", "Mode", i.available_modes.map((b) => ({ label: Oe(b), act: Mt("humidifier", "set_mode", e, { mode: b }), pressed: i.mode === b })))
      ] };
    }
    if (c === "media_player") {
      const h = n.state === "playing", b = n.state === "off" || n.state === "standby", M = sn("vol", e, i.volume_level), R = b ? { act: Mt("media_player", Ht(e, ef) ? "turn_on" : "toggle", e), label: "Turn " + ke(e) + " on" } : n.state === "playing" || n.state === "paused" ? { act: Mt("media_player", "media_play_pause", e), label: (h ? "Pause " : "Play ") + ke(e) } : { act: Mt("media_player", Ht(e, tf) ? "turn_off" : "toggle", e), label: "Turn " + ke(e) + " off" };
      return { on: !b, tone: "blue", art: !b && i.entity_picture ? i.entity_picture : null, button: R, parts: ["playback", "volume"], sections: b ? [] : [
        (Ht(e, Pd) || Ht(e, Id) || Ht(e, Bd) || Ht(e, Hd)) && O("tfSeg", "Playback", [
          { html: Tl.prev, aria: "Previous", act: Mt("media_player", "media_previous_track", e), disabled: !Ht(e, Pd) },
          { html: h ? Tl.pause : Tl.play, aria: h ? "Pause" : "Play", act: Mt("media_player", "media_play_pause", e), disabled: !(Ht(e, Bd) || Ht(e, Hd)) },
          { html: Tl.next, aria: "Next", act: Mt("media_player", "media_next_track", e), disabled: !Ht(e, Id) }
        ]),
        Ht(e, Qh) && M != null && To("vol", e, M, ke(e) + " volume", Math.round(M * 100) + "%")
      ] };
    }
    if (c === "vacuum") {
      const h = n.state === "cleaning", b = i.rooms || [], M = (B) => b.includes(B) ? b.filter((D) => D !== B) : b.concat(B), R = Mt("vacuum", h ? "pause" : "start", e, rr(e) ? { rooms: b } : null);
      return { on: h || n.state === "returning", tone: "blue", button: { act: R, label: (h ? "Pause " : "Start ") + ke(e) }, parts: ["controls", "rooms"], sections: [
        O("tfSeg", ke(e), [
          { label: h ? "Pause" : "Start", act: R },
          { label: "Dock", act: Mt("vacuum", "return_to_base", e), disabled: n.state === "docked" },
          { label: "Locate", act: Mt("vacuum", "locate", e) }
        ]),
        rr(e) && O("tfChips", "Rooms to clean", $e.rooms.filter((B) => B.id !== "balcony").map((B) => ({ label: B.name, act: Mt("vacuum", "set_rooms", e, { rooms: M(B.name) }), pressed: b.includes(B.name) })))
      ] };
    }
    if (c === "lock") {
      const h = n.state === "locked";
      return { on: !h, tone: "heat", button: { act: Mt("lock", h ? "unlock" : "lock", e), label: (h ? "Unlock " : "Lock ") + ke(e) }, parts: ["controls"], sections: [
        O("tfSeg", ke(e), [
          { label: "Lock", act: Mt("lock", "lock", e), pressed: h },
          { label: "Unlock", act: Mt("lock", "unlock", e), pressed: n.state === "unlocked" },
          Ht(e, vf) && { label: "Open", act: Mt("lock", "open", e), pressed: n.state === "open" }
        ])
      ] };
    }
    if (c === "alarm_control_panel") {
      const h = n.state === "disarmed";
      return { on: !h, tone: n.state === "triggered" ? "alarm" : "blue", button: { act: Mt("alarm_control_panel", h ? "alarm_arm_away" : "alarm_disarm", e), label: h ? "Arm " + ke(e) + ", away" : "Disarm " + ke(e) }, parts: ["controls"], sections: [
        O("tfSeg", ke(e), bf.filter(([, , , b]) => !b || Ht(e, b)).map(([b, M, R]) => ({ label: M, act: Mt("alarm_control_panel", R, e), pressed: n.state === b })))
      ] };
    }
    if (c === "valve") {
      const h = n.state === "open";
      return { on: h, tone: "blue", icon: "mdi:sprinkler-variant", button: p("valve", (h ? "Close " : "Open ") + ke(e)), parts: ["controls"], sections: [
        O("tfSeg", ke(e), [
          { label: "Open", act: Mt("valve", "open_valve", e), pressed: h },
          { label: "Close", act: Mt("valve", "close_valve", e), pressed: !h }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: ke(e) }, sections: [] };
  }
  const da = (e) => (Number.isInteger(Number(e)) ? String(Number(e)) : qn(e)) + "°";
  function _a(e) {
    var xe;
    const n = (G) => e.readings.find((j) => wt(j).device_class === G), i = n("temperature"), c = n("humidity"), p = (G) => {
      var j;
      return Number((j = x[G]) == null ? void 0 : j.state);
    }, g = (G) => e.actions.filter((j) => G.test(j)), h = e.lights.filter((G) => {
      var j;
      return ((j = x[G]) == null ? void 0 : j.state) === "on";
    }), b = g(/^cover\./), M = b.filter((G) => {
      var j;
      return ((j = x[G]) == null ? void 0 : j.state) !== "closed";
    }), R = [...new Set(b.map((G) => Mc(x[G])))], B = g(/^climate\./)[0], D = g(/^humidifier\./)[0], ce = g(/^media_player\./), we = ce.find((G) => {
      var j;
      return ((j = x[G]) == null ? void 0 : j.state) === "playing";
    }) || ce.find((G) => {
      var j;
      return ((j = x[G]) == null ? void 0 : j.state) === "paused";
    }), _e = e.plugs.filter((G) => {
      var j;
      return ((j = x[G]) == null ? void 0 : j.state) === "on";
    }), J = [];
    if (i && Number.isFinite(p(i)) && J.push({ key: "temp", id: i, kind: "reading", icon: wo(i), label: "Temperature", value: qn(p(i)) + "°" }), c && Number.isFinite(p(c)) && J.push({ key: "hum", id: c, kind: "reading", icon: wo(c), label: "Humidity", value: Math.round(p(c)) + "%" }), e.lights.length && J.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: wo("", "mdi:lightbulb"),
      label: "Lights",
      value: h.length ? h.length + " of " + e.lights.length + " on" : "All off",
      short: h.length ? h.length + " on" : "Off",
      on: h.length > 0,
      light: h.length ? ln(h[0]) : "",
      acts: e.lights.map((G) => ["light", h.length ? "turn_off" : "turn_on", G]),
      aria: (h.length ? "Turn off" : "Turn on") + " the lights in " + e.name
    }), b.length) {
      const G = R.length === 1 ? sf[R[0]] : "covers", j = Math.round(b.reduce((Me, ut) => Me + jn(ut), 0) / b.length);
      J.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: wo("", ((xe = Od[R[0]]) == null ? void 0 : xe[M.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Oe(G),
        value: j <= 0 ? "Closed" : j >= 100 ? "Open" : j + "% open",
        short: j <= 0 ? "Closed" : j + "%",
        on: M.length > 0,
        acts: b.map((Me) => ["cover", M.length ? "close_cover" : "open_cover", Me]),
        aria: (M.length ? "Close the " : "Open the ") + G + " in " + e.name
      });
    }
    if (B) {
      const G = wt(B), j = x[B].state === "off";
      J.push({
        key: "climate",
        kind: "control",
        tone: G.hvac_action === "cooling" ? "cool" : "heat",
        icon: wo(B),
        label: ke(B),
        value: j ? "Off" : Oe(G.hvac_action || x[B].state) + " · " + da(G.temperature),
        short: j ? "Off" : da(G.temperature),
        on: !j,
        acts: [["climate", "toggle", B]],
        aria: "Turn " + ke(B) + (j ? " on" : " off")
      });
    }
    if (D) {
      const G = x[D].state === "on";
      J.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: wo("", "mdi:air-humidifier"),
        label: ke(D),
        value: G ? "On · " + wt(D).humidity + "%" : "Off",
        short: G ? wt(D).humidity + "%" : "Off",
        on: G,
        acts: [["humidifier", "toggle", D]],
        aria: "Turn " + ke(D) + (G ? " off" : " on")
      });
    }
    if (ce.length) {
      const G = we || ce[0], j = x[G], Me = j.state === "playing";
      J.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: wo(G),
        label: ke(G),
        value: on(G),
        short: Me ? "Playing" : j.state === "paused" ? "Paused" : Oe(j.state),
        on: Me,
        acts: [["media_player", j.state === "playing" || j.state === "paused" ? "media_play_pause" : "toggle", G]],
        aria: (Me ? "Pause " : "Play ") + ke(G)
      });
    }
    return e.plugs.length && J.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: wo("", "mdi:power-plug"),
      label: "Plugs",
      value: _e.length ? _e.length + " of " + e.plugs.length + " on" : "All off",
      short: _e.length ? _e.length + " on" : "Off",
      on: _e.length > 0,
      acts: e.plugs.map((G) => ["switch", _e.length ? "turn_off" : "turn_on", G]),
      aria: (_e.length ? "Turn off" : "Turn on") + " the plugs in " + e.name
    }), e.alerts.forEach((G) => J.push(wt(G).device_class === "moisture" ? { key: "alert:" + G, kind: "alert", icon: wo(G), label: "Water leak" } : { key: "note:" + G, kind: "note", icon: wo(G), label: ke(G) + " " + on(G).toLowerCase() })), J;
  }
  const ni = (e, n) => {
    const i = (c) => e.actions.filter((p) => c.test(p));
    return {
      lights: e.lights,
      covers: i(/^cover\./),
      climate: i(/^climate\./).slice(0, 1),
      humidifier: i(/^humidifier\./).slice(0, 1),
      plugs: e.plugs,
      media: (() => {
        const c = i(/^media_player\./);
        return [c.find((p) => {
          var g;
          return ((g = x[p]) == null ? void 0 : g.state) === "playing";
        }) || c.find((p) => {
          var g;
          return ((g = x[p]) == null ? void 0 : g.state) === "paused";
        }) || c[0]].filter(Boolean);
      })()
    }[n] || [];
  }, ai = (e, n, i) => '<button class="' + n + (e.on ? " on" : "") + '" type="button" data-tone="' + e.tone + '" data-acts="' + so(e.acts) + '" aria-label="' + re(e.aria) + '" aria-pressed="' + e.on + '">' + i + "</button>", Cn = (e) => '<button class="tfAName" type="button" data-go="' + re(e.id) + '" aria-label="Open ' + re(e.name) + '">' + re(e.name) + "</button>";
  function fr(e, n, i = !1) {
    const c = n.find((b) => b.key === "lights"), p = !!(c != null && c.on), g = "", h = '<span class="tfAreaGlyph"' + Et("area:" + e.id, e.icon || "mdi:texture-box", e.name) + "></span>";
    return i || !c ? '<span class="tfIcon tfAreaIcon' + (p ? " on" : "") + '"' + g + ' aria-hidden="true">' + h + "</span>" : '<button class="tfIcon tfAreaIcon' + (p ? " on" : "") + '" type="button"' + g + ' data-acts="' + so(c.acts) + '" aria-label="' + re(c.aria) + '" aria-pressed="' + p + '">' + h + "</button>";
  }
  const Ot = (e) => e.filter((n) => n.kind === "alert" || n.kind === "note").map((n) => '<span class="sourceTag">' + re(n.label) + "</span>").join(" "), Fl = (e) => e.readings.find((n) => wt(n).device_class === "temperature") || [...e.readings, ...e.solar, ...e.openings, ...e.actions, ...e.plugs].find((n) => x[n]) || null, zs = (e, n) => {
    const i = ke(n);
    return i.toLowerCase().startsWith(e.name.toLowerCase() + " ") ? Oe(i.slice(e.name.length + 1)) : i;
  };
  function as(e) {
    const n = x[e], i = wt(e), c = e.split(".")[0], p = Number(n.state);
    if (n.state === "unavailable") return { text: "Unavailable" };
    if (c === "sensor" && Number.isFinite(p)) {
      if (i.device_class === "temperature") return { text: da(p) };
      const g = i.unit_of_measurement || "";
      return g === "%" ? { text: Math.round(p) + "%" } : { text: qn(p, Number.isInteger(p) ? 0 : 1), unit: g };
    }
    if (c === "climate" && (i.current_temperature ?? i.temperature) != null) return { text: da(i.current_temperature ?? i.temperature) };
    if (c === "light") return { text: n.state !== "on" ? "Off" : ja(e) ? Wa(n) + "%" : "On" };
    if (c === "cover") {
      const g = jn(e);
      return { text: g <= 0 ? "Closed" : g >= 100 ? "Open" : g + "%" };
    }
    return c === "humidifier" ? { text: n.state === "on" ? i.humidity + "%" : "Off" } : c === "media_player" ? { text: n.state === "playing" ? "Playing" : n.state === "paused" ? "Paused" : Oe(n.state) } : { text: on(e) };
  }
  const oi = (e, n, i) => {
    const c = i.find((b) => b.key === "temp"), p = i.find((b) => b.key === "hum"), g = wt(n), h = x[n].state === "off";
    return n.startsWith("climate.") ? [zs(e, n), h ? "Off" : Oe(g.hvac_action || x[n].state) + (g.temperature != null ? " · " + da(g.temperature) : ""), p && p.value + " humidity"].filter(Boolean).join(" · ") : [!(c && c.id === n) && zs(e, n), c && c.id !== n && c.value, p && p.id !== n && p.value + " humidity"].filter(Boolean).join(" · ");
  };
  function Ol(e, n, i) {
    const c = i && as(i), p = i ? oi(e, i, n) : "", g = (b) => {
      const M = ni(e, b.key);
      return M.length === 1 ? M[0] : "group:" + e.id + ":" + b.key;
    }, h = n.filter((b) => b.kind === "control").slice(0, 4).map((b) => '<div class="tfATile' + (b.on ? " on" : "") + '" data-tone="' + b.tone + '"' + (b.light ? ' data-light style="' + b.light + '"' : "") + ">" + ai(b, "tfIcon", b.icon) + '<button class="tfName" type="button" data-more="' + re(g(b)) + '" aria-label="' + re(e.name + " " + b.label.toLowerCase() + ", " + b.value + ". Open") + '"><span class="activityRowName">' + re(b.label) + '</span><span class="activityRowMeta">' + re(b.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + fr(e, n) + '<div class="tfATitle">' + Cn(e) + Ot(n) + "</div></div>" + (i ? '<button class="tfABig" type="button" data-more="' + re(i) + '" aria-label="' + re(ke(i) + ", " + on(i) + ". More info") + '"><span class="tfABigMain' + (c.text.length > 7 ? " long" : "") + '">' + re(c.text) + (c.unit ? '<span class="tfABigUnit">' + re(c.unit) + "</span>" : "") + "</span>" + (p ? '<span class="tfABigSub">' + re(p) + "</span>" : "") + "</button>" : "") + (h.length ? '<div class="tfATiles">' + h.join("") + "</div>" : "");
  }
  function Ut(e) {
    const n = e.id === ie, i = _a(e), c = Fl(e), p = c && as(c), g = [...i.filter((h) => h.kind === "control"), ...i.filter((h) => h.kind !== "control" && h.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (n ? " active" : "") + '" data-area="' + re(e.id) + '" tabindex="0" aria-expanded="' + n + '" aria-label="' + re(e.name) + '"><div class="panelExpanded"' + (n ? "" : " inert") + ">" + Ol(e, i, c) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + fr(e, i, !0) + '<span class="tfACName">' + re(e.name) + '</span></div><span class="tfACMain">' + (p ? re(p.text + (p.unit ? " " + p.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + g.map((h) => '<span class="tfACTile"><span class="tfIcon' + (h.kind === "alert" ? " alert" : "") + '"' + (h.on && h.light ? ' data-light style="' + h.light + '"' : "") + ">" + h.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let $n = [];
  const _o = (e) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + e + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + $n.map(Ut).join("") + "</section></div>", ql = () => [
    { key: "home", name: "Home", ids: $e.homeVacuums },
    ...$e.rooms.map((e) => ({ key: "room:" + e.id, name: e.name, room: e, ids: e.actions }))
  ], co = (e, n, i) => e + " " + (e === 1 ? n : i), Rn = () => (W.favourites ?? se.favorite_entities ?? []).filter((e) => x[e]);
  function mr() {
    if (!Ze) {
      const n = Object.entries(lt).sort((c, p) => p[1] - c[1]).map(([c]) => c), i = $e.rooms.flatMap((c) => c.actions);
      Ze = [.../* @__PURE__ */ new Set([...ye, ...n, ...i.filter((c) => Kn(c).on), ...i])];
    }
    const e = Rn();
    return Ze.filter((n) => x[n] && x[n].state !== "unavailable" && !e.includes(n));
  }
  let Ya = !1;
  function Za() {
    if (!Ya || W.favSeeded || !$e.rooms.length) return;
    const e = (i) => Object.keys(x).find((c) => rr(c) && i(c)), n = [e((i) => i.startsWith("climate.")), e((i) => i.startsWith("cover.") && /curtain/.test(i)), e((i) => i.startsWith("valve.")), $e.security.locks[0]];
    W = { ...W, favourites: [.../* @__PURE__ */ new Set([...W.favourites ?? se.favorite_entities ?? [], ...n.filter(Boolean)])], favSeeded: !0 }, On();
  }
  const gr = () => W.suggest ?? !se.hide_suggested_entities;
  function uo() {
    const e = new Set(W.favHidden || []), n = Rn().filter((c) => !e.has(c)), i = gr() ? mr().filter((c) => !e.has(c) && xr(c)) : [];
    return [...n, ...i].slice(0, yf);
  }
  const Vs = (e) => {
    const n = Rn().includes(e);
    return '<button class="tfStar" type="button" data-star="' + re(e) + '" aria-pressed="' + n + '" aria-label="Favourite: ' + re(ke(e)) + '">' + gf(n) + "</button>";
  };
  function ua(e, { area: n = !1, star: i = !1, plain: c = !1, say: p = null, alert: g = !1 } = {}) {
    var _e, J, xe, G, j, Me;
    const h = c && ((j = (_e = o()) == null ? void 0 : _e.devices) == null ? void 0 : j[(G = (xe = (J = o()) == null ? void 0 : J.entities) == null ? void 0 : xe[e]) == null ? void 0 : G.device_id]), b = h && (h.name_by_user || h.name) || ke(e), M = e.split(".")[0], R = !c && Al.includes(M) ? Kn(e) : null, B = R ? R.on : ["on", "open", "playing"].includes((Me = x[e]) == null ? void 0 : Me.state), D = c ? null : R ? R.button : lf.includes(M) ? { act: Mt(M, "toggle", e), label: "Turn " + ke(e) + (B ? " off" : " on") } : M === "scene" || M === "script" ? { act: Mt(M, "turn_on", e), label: "Run " + ke(e) } : null, ce = (p ?? on(e)) + (n && Lt.get(e) ? " · " + Lt.get(e) : ""), we = (R == null ? void 0 : R.icon) || rn(e);
    return '<div class="activityRow' + (D ? " tfPlug" : "") + (B ? " on" : "") + (i ? " tfPick" : "") + (g ? " alert" : "") + '" data-k="' + re((n ? "fav:" : "row:") + e) + '" data-tone="' + (M === "light" ? "light" : (R == null ? void 0 : R.tone) || "blue") + '"' + La(e) + ">" + (D && !i ? '<button class="tfIcon" type="button" data-act="' + D.act + '" aria-label="' + re(D.label) + '"' + Et(e, we) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Et(e, we) + "></div>") + '<button class="tfName" type="button" data-more="' + re(e) + '" aria-label="' + re(b + ", " + ce + ". More info") + '"><span class="activityRowName">' + re(b) + '</span><span class="activityRowMeta">' + re(ce) + "</span></button>" + (i ? Vs(e) : "") + "</div>";
  }
  const os = () => {
    var e;
    return x[(e = W.sources) == null ? void 0 : e.weather] ? W.sources.weather : x["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(x).find((n) => n.startsWith("weather."));
  };
  function Wl() {
    var i;
    const e = (c) => Object.keys(x).filter((p) => p.startsWith("binary_sensor.") && c.includes(wt(p).device_class));
    return ((i = me.alert_entities) != null && i.length ? me.alert_entities : [...e(["moisture", "smoke", "gas"]).map((c) => ({ entity: c, severity: "alert" })), ...e(Ll).map((c) => ({ entity: c, severity: "warning" }))]).filter((c) => x[c.entity]).map((c) => ({ ...c, on: ["on", "open", "unlocked", "triggered", "problem"].includes(x[c.entity].state) }));
  }
  function is() {
    const e = Object.keys(Cc), n = /* @__PURE__ */ new Set(), i = [];
    return (se.shortcuts || []).forEach((c) => {
      if (c.type === "summary") {
        if (!e.includes(c.key) || n.has(c.key)) return;
        n.add(c.key);
      }
      i.push(c);
    }), e.forEach((c) => {
      n.has(c) || i.push({ type: "summary", key: c });
    }), i;
  }
  function rs() {
    var xe;
    const e = ((xe = o()) == null ? void 0 : xe.entities) || {}, n = (G) => wt(G).device_class, i = Object.keys(x).filter((G) => G.startsWith("sensor.") && n(G) === "battery" || G.startsWith("binary_sensor.") && ["battery", "problem"].includes(n(G))), c = $e.rooms.flatMap((G) => G.plants.map((j) => j.id));
    if (!i.length && !c.length) return null;
    const p = (G) => {
      var Me;
      const j = (Me = e[G]) == null ? void 0 : Me.device_id;
      return !!j && Object.keys(x).some((ut) => {
        var Yt;
        return ut.startsWith("binary_sensor.") && ((Yt = e[ut]) == null ? void 0 : Yt.device_id) === j && n(ut) === "battery_charging" && x[ut].state === "on";
      });
    }, g = (G) => G.startsWith("vacuum.") ? wt(G).battery_level <= 20 && x[G].state !== "docked" : G.startsWith("binary_sensor.") ? n(G) === "battery" && x[G].state === "on" : parseFloat(x[G].state) <= 20 && !p(G), h = [...i, ...$e.vacuums].filter((G) => x[G] && g(G)), b = [...i.filter((G) => n(G) === "problem" && x[G].state === "on"), ...c.filter((G) => {
      var j;
      return ((j = x[G]) == null ? void 0 : j.state) === "problem";
    })], M = i.filter((G) => x[G].state === "unavailable"), R = [.../* @__PURE__ */ new Set([...h, ...b, ...M])], B = (G) => {
      const j = parseFloat(x[G].state);
      return n(G) === "battery" && Number.isFinite(j) ? j : 101;
    }, D = [...c, ...$e.vacuums, ...[...i].sort((G, j) => B(G) - B(j))].filter((G) => x[G] && !R.includes(G)), ce = /* @__PURE__ */ new Map();
    D.forEach((G) => {
      var Me;
      const j = ((Me = $e.areaOf) == null ? void 0 : Me.call($e, G)) || "";
      ce.set(j, [...ce.get(j) || [], G]);
    });
    const we = (G) => {
      const j = $e.rooms.findIndex((Me) => Me.id === G);
      return G === "" ? 1 / 0 : j < 0 ? $e.rooms.length : j;
    }, _e = [...ce.keys()].sort((G, j) => we(G) - we(j)), J = (G) => {
      var j, Me, ut, Yt;
      return ((j = $e.rooms.find((qt) => qt.id === G)) == null ? void 0 : j.name) || ((Yt = (ut = (Me = o()) == null ? void 0 : Me.areas) == null ? void 0 : ut[G]) == null ? void 0 : Yt.name) || G;
    };
    return {
      value: [h.length && co(h.length, "low battery", "low batteries"), b.length && co(b.length, "problem", "problems"), M.length && co(M.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: R, alert: !0 }, ..._e.map((G) => ({ name: G ? J(G) : _e.length > 1 ? "Other devices" : "Devices", ids: ce.get(G) }))].filter((G) => G.ids.length)
    };
  }
  function vr() {
    var ha;
    const e = $e.rooms, n = $e.security, i = (Xe, Zt) => Xe.actions.filter((Ps) => Zt.test(Ps)), c = (Xe) => e.map((Zt) => ({ name: Zt.name, ids: Xe(Zt) })).filter((Zt) => Zt.ids.length), p = e.flatMap((Xe) => Xe.lights), g = p.filter((Xe) => {
      var Zt;
      return ((Zt = x[Xe]) == null ? void 0 : Zt.state) === "on";
    }).length, h = e.map((Xe) => Xe.readings.find((Zt) => wt(Zt).device_class === "temperature")).filter(Boolean).map((Xe) => Number(x[Xe].state)).filter(Number.isFinite), [b, M] = [qn(Math.min(...h)), qn(Math.max(...h))], R = e.flatMap((Xe) => i(Xe, /^media_player\./)), B = R.filter((Xe) => {
      var Zt;
      return ((Zt = x[Xe]) == null ? void 0 : Zt.state) === "playing";
    }).length, D = Wl(), ce = D.filter((Xe) => Xe.severity === "warning" && Xe.on).length, we = n.locks.filter((Xe) => {
      var Zt;
      return ["unlocked", "jammed", "open"].includes((Zt = x[Xe]) == null ? void 0 : Zt.state);
    }).length, _e = n.alarms.filter((Xe) => {
      var Zt;
      return ((Zt = x[Xe]) == null ? void 0 : Zt.state) === "disarmed";
    }).length, J = ce ? co(ce, "warning", "warnings") : null, xe = we ? we + " unlocked" : _e ? _e + " disarmed" : J ? null : "All secure", G = rs(), j = e.flatMap((Xe) => Xe.solar), Me = j.find((Xe) => Xe.endsWith("_power")), ut = {
      light: p.length && { value: g ? g + " on" : "All off", groups: c((Xe) => Xe.lights) },
      climate: h.length && { value: b === M ? b + "°" : b + " - " + M + "°", groups: c((Xe) => [...Xe.readings.filter((Zt) => ["temperature", "humidity"].includes(wt(Zt).device_class)), ...i(Xe, /^(climate|humidifier)\./)]) },
      security: (n.alarms.length || n.locks.length) && { value: [J, xe].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...n.alarms, ...n.locks] }, { name: "Doors and windows", ids: n.openings }].filter((Xe) => Xe.ids.length) },
      media_players: R.length && { value: B ? B + " playing" : "No media playing", groups: c((Xe) => i(Xe, /^media_player\./)) },
      maintenance: G,
      energy: $e.grid && { value: Ga(Number(((ha = x[Me]) == null ? void 0 : ha.state) || 0) * 1e3 + Number(x[$e.grid].state)) + " now", groups: [{ name: "Energy", ids: [...j, $e.grid] }] }
    }, Yt = [], qt = D.filter((Xe) => Xe.severity !== "warning" && Xe.on);
    return qt.length && Yt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: co(qt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: qt.map((Xe) => Xe.entity) }] }), is().forEach((Xe) => {
      Xe.type !== "summary" ? Yt.push({ key: "path:" + Xe.path, name: Xe.label || Xe.path, icon: Xe.icon || "mdi:link-variant", colour: "", value: "" }) : !Xe.hidden && ut[Xe.key] && !(W.hiddenSums || []).includes(Xe.key) && Yt.push({ key: Xe.key, ...Cc[Xe.key], ...ut[Xe.key] });
    }), Yt;
  }
  const jl = (e) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + re(e.key) + '" data-k="sum:' + re(e.key) + '" aria-label="' + re(e.name + (e.value ? ", " + e.value : "")) + '"' + (e.key === "alerts" ? ' style="--sum:' + e.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + Et(e.id || "", e.icon, e.name) + '></div><div><div class="activityRowName">' + re(e.name) + "</div>" + (e.value ? '<div class="activityRowMeta">' + re(e.value) + "</div>" : "") + "</div></div>";
  function Wi(e) {
    const n = Rn();
    W = { ...W, favourites: n.includes(e) ? n.filter((i) => i !== e) : [...n, e], favHidden: (W.favHidden || []).filter((i) => i !== e) }, On(), an();
  }
  function Gs(e) {
    document.querySelector("home-assistant") && (Ie.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function ii(e, n) {
    if (e.startsWith("path:")) {
      Gs(e.slice(5));
      return;
    }
    nr("summary:" + e, n);
  }
  async function zl() {
    const e = (h) => Promise.resolve().then(() => N(h)).catch(() => null), [n, i, c, p] = await Promise.all([
      e({ type: "frontend/get_user_data", key: qd }),
      e({ type: "frontend/get_system_data", key: "home" }),
      e({ type: "frontend/get_system_data", key: "security" }),
      e({ type: "usage_prediction/common_control" })
    ]), g = (n == null ? void 0 : n.value) || {};
    W = { favourites: g.favourites ?? null, sources: g.sources, hiddenSums: g.hiddenSums, dash: g.dash, named: g.named, favHidden: g.favHidden, suggest: g.suggest, favSeeded: g.favSeeded }, se = (i == null ? void 0 : i.value) || {}, me = (c == null ? void 0 : c.value) || {}, ye = Array.isArray(p == null ? void 0 : p.entities) ? p.entities : [], Ze = null, Object.keys(x).length && an(), Eo(), Ya = !0, Za();
  }
  const ri = "HomeCore";
  async function Eo() {
    var c, p, g;
    const e = location.pathname.split("/")[1], n = W.named || [];
    if (!((p = (c = o()) == null ? void 0 : c.user) != null && p.is_admin) || !e || n.includes(e)) return;
    const i = () => {
      W = { ...W, named: [...n, e] }, On();
    };
    try {
      const h = (g = await N({ type: "lovelace/dashboards/list" })) == null ? void 0 : g.find((R) => R.url_path === e);
      if (!h || h.mode === "yaml") return;
      if (h.title === ri) {
        i();
        return;
      }
      const b = await N({ type: "lovelace/config", url_path: e }), M = ((b == null ? void 0 : b.views) || []).flatMap((R) => [...R.cards || [], ...(R.sections || []).flatMap((B) => B.cards || [])]);
      if (!M.length || !M.every((R) => (R == null ? void 0 : R.type) === "custom:move-assistant-card" && R.layout === "test-focus")) return;
      await N({ type: "lovelace/dashboards/update", dashboard_id: h.id, title: ri }), i();
    } catch {
    }
  }
  let Do = null, si = 0, Ro = !1;
  const ji = (e) => {
    const n = e.split(".")[0], i = wt(e).device_class;
    return wf.includes(n) && (n !== "binary_sensor" || Ll.includes(i) || !!Zd[i]);
  }, No = (e) => e.startsWith("binary_sensor.") ? Zd[wt(e).device_class] : null;
  async function ss() {
    var e;
    if (!(Ro || Date.now() - si < 30 * 1e3)) {
      Ro = !0, si = Date.now();
      try {
        const n = Object.keys(((e = o()) == null ? void 0 : e.states) || {}).filter(ji), i = n.length ? await N({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: n }) : null;
        Do = Array.isArray(i) ? i.filter((c) => c.entity_id && c.state != null && c.when) : null;
      } catch {
        Do = null;
      }
      Ro = !1, an();
    }
  }
  function Ea() {
    const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = (p) => {
      if (!x[p.entity_id] || !ji(p.entity_id) || !xr(p.entity_id) || ["unavailable", "unknown"].includes(p.state)) return;
      if (No(p.entity_id)) {
        const h = n.get(p.entity_id);
        p.state === "on" ? (!h || p.when > h.when + 1) && n.set(p.entity_id, { ...p, alarm: !0, cleared: null }) : h && !h.cleared && p.when > h.when && (h.cleared = p.when);
        return;
      }
      const g = e.get(p.entity_id);
      (!g || p.when > g.when + 1) && e.set(p.entity_id, p);
    };
    [...Do || []].sort((p, g) => p.when - g.when).forEach(i);
    const c = Do ? si / 1e3 - 5 : 0;
    return Object.keys(x).forEach((p) => {
      var b;
      const g = x[p], h = g.last_changed ? Date.parse(g.last_changed) / 1e3 : 0;
      h > c && i({ entity_id: p, state: g.state, when: h, context_user_id: (b = g.context) == null ? void 0 : b.user_id });
    }), [...e.values(), ...n.values()].sort((p, g) => g.when - p.when).slice(0, xf);
  }
  function li(e) {
    var c;
    const n = e.context_user_id && Object.keys(x).find((p) => p.startsWith("person.") && wt(p).user_id === e.context_user_id);
    if (n) return ke(n);
    const i = (c = o()) == null ? void 0 : c.user;
    return i && e.context_user_id === i.id ? i.name : ["automation", "script"].includes(e.context_domain) || e.context_event_type === "automation_triggered" ? e.context_name || "Home Assistant" : "";
  }
  function Vl(e) {
    const n = e.entity_id.split(".")[0], i = String(e.state);
    return n === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[i] || Oe(i).toLowerCase() : n === "cover" || n === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[i] || Oe(i).toLowerCase() : n === "binary_sensor" ? i === "on" ? "opened" : "closed" : n === "climate" ? i === "off" ? "turned off" : "set to " + Oe(i).toLowerCase() : n === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[i] || Oe(i).toLowerCase() : n === "alarm_control_panel" ? (Yd[i] || Oe(i)).toLowerCase() : n === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[i] || Oe(i).toLowerCase() : i === "on" ? "turned on" : i === "off" ? "turned off" : Oe(i).toLowerCase();
  }
  function Gl(e) {
    const n = e.entity_id, i = e.alarm && No(n), c = ke(n) + " " + (i ? i[0] : Vl(e)), p = i ? Wt(e.when * 1e3) + (e.cleared ? " · " + i[1] + " since " + Wt(e.cleared * 1e3) : "") : [li(e), Wt(e.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (i ? " alert" : "") + '"><div class="tfIcon' + (i ? " alert" : "") + '" aria-hidden="true"' + Et(n, rn(n)) + '></div><button class="tfName" type="button" data-more="' + re(n) + '" data-at="' + Math.round(e.when * 1e3) + '" aria-label="' + re(c + ", " + p + ". More info") + '"><span class="activityRowName">' + re(c) + '</span><span class="activityRowMeta">' + re(p) + "</span></button></div>";
  }
  let Da = null, ci = 0;
  const br = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function ls() {
    var n;
    if (Date.now() - ci < 5 * 60 * 1e3) return;
    ci = Date.now();
    const e = [];
    try {
      const i = ((n = await N({ type: "energy/get_prefs" })) == null ? void 0 : n.energy_sources) || [], c = (p) => i.filter((g) => g.type === p).flatMap((g) => p === "grid" ? (g.flow_from || []).map((h) => h.stat_energy_from) : [g.stat_energy_from]).filter(Boolean);
      for (const [p, g, h] of [["electricity", "Electricity", c("grid")], ["solar", "Solar", c("solar")], ["gas", "Gas", c("gas")], ["water", "Water", c("water")]]) {
        if (!h.length) continue;
        const b = await Promise.all(h.map((M) => Promise.resolve(N({ type: "recorder/statistic_during_period", statistic_id: M, calendar: { period: "day" }, types: ["change"] })).then((R) => Number(R == null ? void 0 : R.change) || 0, () => 0)));
        e.push({ key: p, name: g, id: h[0], ids: h, value: b.reduce((M, R) => M + R, 0), unit: wt(h[0]).unit_of_measurement || (p === "gas" || p === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Da = e, an();
  }
  let di = null, wr = [];
  function yr() {
    var g;
    const e = wr = Da != null && Da.length ? Da : br.map(([h, b, M, R]) => {
      const B = "sensor.made_up_energy_" + h;
      return x[B] = { entity_id: B, state: String(M), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: b + " today", unit_of_measurement: R, state_class: "total_increasing" } }, { key: h, name: b, id: B, value: M, unit: R };
    });
    V.clear(), e.some((h) => h.id === di) || (di = e[0].id);
    const n = e.map((h) => {
      const b = Number(h.value).toLocaleString(void 0, { maximumFractionDigits: h.value < 10 ? 2 : 1 }) + " " + h.unit, M = kf[h.key], R = h.id === di;
      return V.set(h.id, { name: h.name, text: b, icon: M }), '<div class="activityRow tap' + (R ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + re(h.id) + '" aria-pressed="' + R + '" aria-label="' + re(h.name + ", " + b) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Et("", M, h.name) + '></div><div><div class="activityRowName">' + re(h.name) + '</div><div class="activityRowMeta">' + re(b) + "</div></div></div>";
    }), i = e.find((h) => h.id === di), c = (((g = jt().opts.energy) == null ? void 0 : g.graph) || "above") === "below", p = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + re(i.id) + '" role="img" aria-label="' + re(i.name) + ', last 24 hours"></svg></div>';
    return va("dash:energy", 0, "Energy today", n, p, vr().some((h) => h.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (c ? "" : " graphAbove"));
  }
  function zi(e) {
    const n = A.querySelector(".tfDash-energy"), i = n == null ? void 0 : n.querySelector(".tfDashGraph svg");
    !i || e === di || (di = e, n.querySelectorAll("[data-energy-pick]").forEach((c) => {
      const p = c.dataset.energyPick === e;
      c.classList.toggle("picked", p), c.setAttribute("aria-pressed", String(p));
    }), i.dataset.graph = e, i.dataset.drawn = "", yn.set("dash:energy", yr()), Ho(!0));
  }
  const cs = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, Us = /* @__PURE__ */ new Map();
  async function Nn(e) {
    const n = /* @__PURE__ */ new Date(), i = new Date(n).setHours(0, 0, 0, 0), c = n.getHours(), p = n.getMinutes() / 60, g = Array.from({ length: 24 }, (b, M) => M <= c ? 0 : null);
    if (!e.ids) {
      const b = cs[e.key] || cs.electricity, M = b.map((B, D) => D < c ? B : D === c ? B * p : 0), R = M.reduce((B, D) => B + D, 0) || 1;
      return g.map((B, D) => B == null ? null : e.value * M[D] / R);
    }
    const h = Us.get(e.id);
    if (h && h.day === i && Date.now() - h.at < 5 * 60 * 1e3) return h.hours;
    try {
      const b = await N({ type: "recorder/statistics_during_period", start_time: new Date(i).toISOString(), end_time: n.toISOString(), statistic_ids: e.ids, period: "hour", types: ["change"] });
      e.ids.forEach((B) => ((b == null ? void 0 : b[B]) || []).forEach((D) => {
        const ce = typeof D.start == "number" ? D.start : Date.parse(D.start), we = new Date(ce).getHours();
        ce >= i && we < c && (g[we] += Number(D.change) || 0);
      }));
      const M = new Date(n).setMinutes(0, 0, 0), R = await Promise.all(e.ids.map((B) => Promise.resolve(N({ type: "recorder/statistic_during_period", statistic_id: B, fixed_period: { start_time: new Date(M).toISOString(), end_time: n.toISOString() }, types: ["change"] })).then((D) => Number(D == null ? void 0 : D.change) || 0, () => 0)));
      g[c] = R.reduce((B, D) => B + D, 0);
    } catch {
    }
    return Us.set(e.id, { at: Date.now(), day: i, hours: g }), g;
  }
  async function Vi(e, n) {
    const i = await Nn(n);
    if (!e.isConnected) return;
    const c = Math.max(120, e.clientWidth || 260), p = Math.max(60, e.clientHeight || 130), g = 18, h = p - 18, b = c / 24, M = b * 0.72, R = (/* @__PURE__ */ new Date()).getHours(), B = i.map((xe) => xe ?? 0), D = Math.max(0, ...B), ce = (xe) => h - (D > 0 ? xe / D * (h - g) : 0), we = (xe) => xe.toLocaleString(void 0, { maximumFractionDigits: xe < 10 ? 2 : 1 }) + " " + n.unit, _e = (xe) => String(xe).padStart(2, "0") + ":00", J = D > 0 ? B.indexOf(D) : -1;
    e.setAttribute("viewBox", "0 0 " + c + " " + p), e.setAttribute("aria-label", n.name + " today by the hour: " + we(n.value) + (J >= 0 ? ", most " + we(D) + " at " + _e(J) : "")), e.innerHTML = [g, (g + h) / 2, h].map((xe) => '<line x1="0" x2="' + c + '" y1="' + xe + '" y2="' + xe + '" stroke="var(--line)" stroke-width="1"/>').join("") + i.map((xe, G) => xe > 0 ? '<rect x="' + (G * b + (b - M) / 2).toFixed(1) + '" y="' + ce(xe).toFixed(1) + '" width="' + M.toFixed(1) + '" height="' + (h - ce(xe)).toFixed(1) + '" rx="2" fill="' + (G === R ? "var(--primary)" : "var(--text)") + '"' + (G === R ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((xe) => '<text x="' + (xe * b).toFixed(1) + '" y="' + (p - 3) + '">' + String(xe).padStart(2, "0") + "</text>").join("") + (J >= 0 ? '<text x="0" y="11">Most: ' + re(we(D)) + " at " + _e(J) + "</text>" : "");
  }
  function ui(e) {
    var n;
    (n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches || e.querySelectorAll("rect").forEach((i, c) => i.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: c * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Ul(e) {
    var p;
    if ((p = window.matchMedia) != null && p.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [n, i] = e.querySelectorAll("path");
    if (!(i != null && i.getTotalLength)) return;
    const c = i.getTotalLength();
    i.animate([{ strokeDasharray: c, strokeDashoffset: c }, { strokeDasharray: c, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), n == null || n.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let Gi = null, Ys = 0;
  const xr = (e) => !e.startsWith("light.") || Mf.includes((Lt.get(e) || "").toLowerCase()), Ui = () => Math.max(2, Bo((A == null ? void 0 : A.clientWidth) || 0).n), Zs = (e) => {
    const n = Kn(e), i = n.sections.findIndex(Boolean);
    return i < 0 ? [] : [n.parts[i]];
  };
  function Yi(e) {
    const n = jt().tiles;
    if (n) return n.filter((c) => x[c]);
    if (!Gi) {
      const c = (p) => {
        var g;
        return (((g = x[p]) == null ? void 0 : g.state) === "on" ? 1e6 : 0) + (lt[p] || 0);
      };
      Gi = {
        lights: $e.rooms.flatMap((p) => p.lights).filter((p) => {
          var g;
          return xr(p) && ((g = x[p]) == null ? void 0 : g.state) !== "unavailable";
        }).sort((p, g) => c(g) - c(p) || ke(p).localeCompare(ke(g))),
        climates: $e.rooms.flatMap((p) => p.actions.filter((g) => g.startsWith("climate.")))
      };
    }
    const i = Gi.climates.filter((c) => x[c]).slice(0, e > 3 ? 2 : 1);
    return [...Gi.lights.filter((c) => x[c]).slice(0, Math.max(0, e - i.length)), ...i];
  }
  const kr = (e, n, i, c) => (p) => '<section class="card tfCard tfDashCard ' + e + '" data-tf data-k="' + n + '" aria-label="' + i + '">' + (c ? '<div class="activityHeader">' + (n === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + i + "</button>" : '<div class="activityTitle">' + i + "</div>") + "</div>" : "") + '<div class="activityRows">' + p + "</div></section>";
  function Ka(e, n) {
    var g, h;
    e.dash = !0, e.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + re(((h = (g = o()) == null ? void 0 : g.config) == null ? void 0 : h.location_name) || "Home") + "</h1>" }), n.length && e.push({ key: "sums", wrap: (b) => '<div class="tfDashBarRow" data-tf data-k="sums">' + kr("tfDash-bar", "sums-bar", "Summaries", !1)(b).replace(" data-tf", "") + "</div>", tiles: n.map((b) => ({ key: "sum:" + b.key, html: jl(b) })) }), $n.length && e.push({ key: "areas", html: _o(0) });
    const i = uo();
    i.length && e.push({ key: "favs", wrap: kr("tfDash-favs", "favs", "Favourites", !0), tiles: i.map((b) => ({ key: "fav:" + b, html: ua(b, { area: !0 }) })) });
    const c = Ea();
    e.push({ key: "dash:act", html: va("dash:act", 0, "Activity", c.length ? c.map(Gl) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), e.push({ key: "dash:energy", html: yr() });
    const p = Ui();
    return Ys = p, Yi(p >= 3 ? p : p * 2).forEach((b) => e.push({
      key: "dash:tile:" + b,
      wrap: (M) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + re(b) + '">' + M + "</div>",
      tiles: [{ key: b, html: Ne(b, !1, Zs(b)) }]
    })), ss(), ls(), e;
  }
  const po = 252, tn = 16, Yl = 200, ds = Math.round(po * 1.25), Zi = 60, ho = Zi + tn, wa = 5, Zl = 3, Ks = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average", aq: "Air quality", pollen: "Pollen", radar: "Rain radar" }, Mr = ["wx", "favs", "act", "energy", "avg"], Ki = { wx: wa, areas: wa, favs: wa, act: wa, energy: 4, avg: 4, aq: 3, pollen: 3, radar: 3 }, pi = 3, $a = 94, Xa = (e) => {
    var n;
    return !!((n = jt().opts[e]) != null && n.tall);
  }, Bn = (e) => Ks[e] || ke(e), $i = 409, hi = 128;
  let nn = !1, Tt = null, Ra = null, fi = !1, Vn = /* @__PURE__ */ new Map(), Ja = 0, Gn = 0;
  const ya = ["title", "sums"], Bo = (e) => {
    const n = Math.max(1, Math.floor((e + tn) / (Yl + tn)));
    return { n, w: Math.max(1, Math.min(ds, Math.floor((e - (n - 1) * tn) / n))) };
  }, jt = () => {
    const e = { cells: {}, spans: {}, hidden: [], opts: {}, ...W.dash || {} }, n = Sn.filter((i) => !(e.known || []).includes(i) && !e.hidden.includes(i));
    return n.length ? { ...e, hidden: [...e.hidden, ...n] } : e;
  };
  function Xi(e) {
    W = { ...W, dash: { ...e, known: Sn } }, On();
  }
  function Ji() {
    const e = (n) => A.querySelector(n);
    return [
      ["title", e(".tfDashTitle"), "full"],
      ["sums", e(".tfDashBarRow"), "full"],
      ["wx", pt.wx, 2],
      ["areas", e(".tfAreas"), "areas"],
      ["favs", e(".tfDash-favs"), 2],
      ["act", e(".tfDash-act"), 2],
      ["energy", e(".tfDash-energy"), 2],
      ["avg", pt.avg, 2],
      ...Sn.map((n) => [n, pt[n], 1]),
      ...[...A.querySelectorAll(".tfDashTiles > [data-k]")].map((n) => [n.dataset.k, n, 1, !0])
    ].filter(([, n]) => n == null ? void 0 : n.isConnected).map(([n, i, c, p = !1]) => ({ key: n, el: i, span: c, tile: p }));
  }
  const Qi = (e, n, i) => e.span === "full" ? n : e.span === "areas" ? Math.min(n, Math.ceil(($i + Math.max(0, $n.length - 1) * (hi + tn) + tn) / (i + tn))) : Math.min(n, jt().spans[e.key] ?? e.span), mi = (e) => Ki[e.key] ?? (e.el.classList.contains("tfDac") ? Xa(e.key) ? wa : pi : null);
  function Na(e, n, i = null) {
    const c = jt().cells, p = e.every((b) => !c[b.key] || c[b.key].col + b.cols <= n), g = (b) => c[b.key] || { row: 1e9, col: 0 }, h = () => {
      const b = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map(), R = (J, xe, G, j) => {
        for (let Me = xe; Me < xe + j; Me++) for (let ut = J; ut < J + G; ut++) if (b.has(ut + "," + Me)) return !1;
        return !0;
      }, B = (J, xe, G) => {
        for (let j = G; j < G + J.rows; j++) for (let Me = xe; Me < xe + J.cols; Me++) b.add(Me + "," + j);
        M.set(J.key, { col: xe, row: G, cols: J.cols, rows: J.rows });
      }, D = (J, xe, G) => {
        for (xe = Math.max(0, Math.min(n - J.cols, xe)), G = Math.max(0, G); !R(xe, G, J.cols, J.rows); ) G++;
        B(J, xe, G);
      }, ce = (J) => {
        for (let xe = 0; ; xe++) for (let G = 0; G <= n - J.cols; G++) if (R(G, xe, J.cols, J.rows)) {
          B(J, G, xe);
          return;
        }
      };
      i && D(i, Tt.col, Tt.row);
      const we = e.filter((J) => J !== i), _e = (J, xe) => g(J).row - g(xe).row || g(J).col - g(xe).col;
      return p ? (we.filter((J) => c[J.key]).sort(_e).forEach((J) => D(J, c[J.key].col, c[J.key].row)), we.filter((J) => !c[J.key]).forEach(ce), M) : ([...we].sort(_e).forEach(ce), M);
    };
    for (let b = 0; ; b++) {
      const M = h();
      if (b === 3) return M;
      const R = e.filter((D) => D.tile && !Xa(D.key)).map((D) => ({ it: D, p: M.get(D.key) })).sort((D, ce) => D.p.row - ce.p.row || D.p.col - ce.p.col);
      let B = !1;
      for (let D = 0, ce; D < R.length; D = ce) {
        for (ce = D + 1; ce < R.length && R[ce].p.row === R[D].p.row && R[ce].p.col === R[ce - 1].p.col + 1; ce++) ;
        const we = R.slice(D, ce), _e = Math.max(...we.map((J) => J.it.rows));
        we.forEach((J) => {
          J.it.rows < _e && (J.it.rows = _e, B = !0);
        });
      }
      if (!B) return M;
    }
  }
  function Sr() {
    const e = jt(), n = new Set(e.hidden), i = Ji().filter((h) => !ya.includes(h.key));
    let c = Vn;
    if (!c.size) {
      const h = e.pegs || 4, b = i.filter((M) => !n.has(M.key));
      b.forEach((M) => {
        M.cols = Qi(M, h, po), M.rows = mi(M) ?? 2;
      }), c = Na(b, h);
    }
    const p = (h) => !n.has(h.key) && c.get(h.key) || { row: 1e9, col: 0 };
    i.sort((h, b) => p(h).row - p(b).row || p(h).col - p(b).col);
    const g = (e.phone || []).map((h) => i.find((b) => b.key === h && !n.has(h))).filter(Boolean);
    return [...g, ...i.filter((h) => !g.includes(h))];
  }
  const us = () => {
    const e = Sr();
    e.forEach((n, i) => n.el.style.setProperty("--o", String(3 + i))), ps([...Ji().filter((n) => ya.includes(n.key)), ...e].map((n) => n.el));
  };
  function ps(e) {
    if (Tt) return;
    const n = a.activeElement;
    let i = null;
    for (const c of new Set(e.map((p) => {
      for (; p && p.parentElement !== A; ) p = p.parentElement;
      return p;
    }).filter(Boolean))) {
      const p = i ? i.nextSibling : A.querySelector(":scope > [data-tf]");
      if (c !== p)
        try {
          A.moveBefore ? A.moveBefore(c, p) : A.insertBefore(c, p);
        } catch {
          A.insertBefore(c, p);
        }
      i = c;
    }
    n && n !== a.activeElement && n.isConnected && n.focus({ preventScroll: !0 });
  }
  const xa = (e, n) => Xi({ ...e, cells: n, pegs: Bo(A.clientWidth).n });
  function Tn() {
    var G;
    if (!w || !A) return;
    const e = A.clientWidth, { n, w: i } = Bo(e), c = f.classList.contains("tfDash") && e >= 2 * po + tn, p = new Set(jt().hidden);
    Sn.forEach((j) => {
      var Me;
      return (Me = pt[j]) == null ? void 0 : Me.classList.toggle("tfNotAdded", p.has(j) && !(Tt != null && Tt.fromTray && Tt.key === j));
    }), f.classList.toggle("tfBoard", c), f.classList.toggle("tfEditing", c && nn);
    const g = d("dashEditNav");
    g && (g.hidden = !c, g.classList.toggle("active", nn), g.setAttribute("aria-pressed", String(nn)), g.setAttribute("aria-label", nn ? "Done editing" : "Edit the dashboard"), g.title = nn ? "Done" : "Edit", g.innerHTML = nn ? mf : Ud);
    const h = c ? Ji() : [];
    if (!c) {
      A.style.height = "", A.querySelectorAll(".tfBoardItem").forEach((j) => {
        j.classList.remove("tfBoardItem", "tfBoardHidden"), j.style.left = j.style.top = j.style.width = j.style.height = "";
      }), (G = A.querySelector(".tfDash-act > .activityRows")) == null || G.style.removeProperty("max-height"), Xs(!1), f.classList.contains("tfDash") && us(), kn();
      return;
    }
    A.style.setProperty("--peg-w", i + "px");
    const b = new Set(jt().hidden), M = i + tn;
    Tt != null && Tt.fromTray && b.delete(Tt.key), h.forEach((j) => j.el.classList.toggle("tfBoardHidden", b.has(j.key)));
    const R = h.filter((j) => !b.has(j.key) && getComputedStyle(j.el).display !== "none");
    let B = 0;
    R.filter((j) => ya.includes(j.key)).forEach((j) => {
      j.el.classList.add("tfBoardItem"), Object.assign(j.el.style, { width: e + "px", height: "", left: "0px", top: B + "px" });
      const Me = j.key === "sums" && j.el.querySelector(".tfDash-bar"), ut = Me ? Me.querySelectorAll(".activityRow").length : 0;
      Me && (Me.style.maxWidth = "none");
      for (let Yt = 1; Me && Yt <= ut && (Me.style.setProperty("--bar-cols", String(Math.ceil(ut / Yt))), !(Me.offsetWidth <= e)); Yt++)
        ;
      Me && (Me.style.maxWidth = ""), B += j.el.offsetHeight + tn;
    }), Gn = B;
    const D = R.filter((j) => !ya.includes(j.key));
    D.forEach((j) => {
      j.cols = Qi(j, n, i), j.el.classList.add("tfBoardItem"), j.el.style.width = (j.cols === n ? e : j.cols * i + (j.cols - 1) * tn) + "px", j.el.style.height = "", j.rows = mi(j) ?? Math.max(1, Math.ceil((j.el.offsetHeight + tn - 6) / ho));
    });
    const ce = Tt && D.find((j) => j.key === Tt.key), we = Na(D, n, ce);
    we.forEach((j) => Object.assign(j, { x: j.cols === n ? 0 : j.col * M, y: Gn + j.row * ho, w: j.cols === n ? e : j.cols * i + (j.cols - 1) * tn, h: j.rows * ho - tn })), D.forEach((j) => {
      const Me = we.get(j.key);
      j.el.style.height = Me.h + "px", j.el.classList.contains("tfDac") && j.el.style.setProperty("--tf-dac-pad", Me.h - $a + "px"), !(j === ce && !Tt.fromTray) && (j.el.style.left = Me.x + "px", j.el.style.top = Me.y + "px");
    }), Vn = we, ps([...R.filter((j) => ya.includes(j.key)), ...D.slice().sort((j, Me) => we.get(j.key).row - we.get(Me.key).row || we.get(j.key).col - we.get(Me.key).col)].map((j) => j.el));
    const _e = we.get("act"), J = _e && A.querySelector(".tfDash-act > .activityRows");
    J && (J.style.maxHeight = Math.max(Zi, Math.floor((_e.h - J.offsetTop - 10) / Zi) * Zi) + "px"), Ja = Math.max(0, ...[...we.values()].map((j) => j.row + j.rows));
    let xe = Gn + Ja * ho - tn;
    xe = Xs(nn, D, we, xe, n, i), A.style.height = xe + "px", requestAnimationFrame(() => f.classList.add("tfBoardReady")), h.forEach((j) => $s.observe(j.el)), Ho(), kn();
  }
  const Cr = () => {
    fi || (fi = !0, requestAnimationFrame(() => {
      fi = !1, Tn();
    }));
  }, $s = new ResizeObserver(() => {
    Tt || Cr();
  });
  function Xs(e, n = [], i = /* @__PURE__ */ new Map(), c = 0, p = 1, g = po) {
    A.querySelectorAll(".tfEditChips").forEach((B) => {
      (!e || !B.closest(".tfBoardItem")) && B.remove();
    }), A.querySelectorAll(".tfFavHides").forEach((B) => B.remove()), A.querySelectorAll(".tfBoardItem").forEach((B) => [...B.children].forEach((D) => {
      D.classList.contains("tfEditChips") || D.toggleAttribute("inert", e);
    }));
    let h = A.querySelector(".tfBoardCells"), b = A.querySelector(".tfBoardLand");
    if (!e)
      return h == null || h.remove(), b == null || b.remove(), Qa(), c;
    const M = Ja + Zl;
    if (h || (h = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), h.setAttribute("aria-hidden", "true"), A.prepend(h)), h.style.top = Gn + "px", h.dataset.size !== p + "x" + M + "x" + g && (h.dataset.size = p + "x" + M + "x" + g, h.style.gridTemplateColumns = "repeat(" + p + "," + g + "px)", h.innerHTML = "<i></i>".repeat(p * M)), c = Math.max(c, Gn + M * ho - tn), n.forEach((B) => {
      const D = B.el;
      !D || D.querySelector(":scope > .tfEditChips") || D.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Tc + '</span><button class="tfEditChip" type="button" data-board-more="' + re(B.key) + '" aria-label="' + re(Bn(B.key)) + ' options" aria-haspopup="menu">' + hf + "</button></div>");
    }), Tt && i.has(Tt.key)) {
      b || (b = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), A.appendChild(b));
      const B = i.get(Tt.key);
      Object.assign(b.style, { left: B.x + "px", top: B.y + "px", width: B.w + "px", height: B.h + "px" });
    } else b == null || b.remove();
    const R = A.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (R) {
      const B = R.getBoundingClientRect();
      R.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...R.querySelectorAll('[data-k^="fav:"]')].map((D) => {
        const ce = D.getBoundingClientRect(), we = D.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + re(we) + '" aria-label="Hide ' + re(ke(we)) + ' from the dashboard" style="left:' + Math.round(ce.right - B.left - 42) + "px;top:" + Math.round(ce.top - B.top + (ce.height - 32) / 2) + 'px">' + zd + "</button>";
      }).join("") + "</div>");
    }
    return c;
  }
  let gi = "";
  function Pn(e) {
    nn = e, e || (Tt = null, pa = ka = !1, Qa()), Tn(), e ? gi = JSON.stringify(W) : gi && JSON.stringify(W) !== gi && xn("Changes saved");
  }
  function Xn(e, n) {
    var ce, we;
    Qa();
    const i = Vn.get(e), { n: c } = Bo(A.clientWidth), p = jt(), g = p.spans[e] ?? 2;
    if (!i) return;
    const h = i.cols >= c, b = (_e, J, xe) => '<button type="button" role="menuitem" data-board-act="' + _e + '"' + (xe ? " disabled" : "") + ">" + J + "</button>", M = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    M.setAttribute("role", "menu"), M.setAttribute("aria-label", Bn(e) + " options");
    const R = A.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]'), B = R == null ? void 0 : R.classList.contains("tfDac");
    M.innerHTML = (Mr.includes(e) ? b("size", g === 1 ? "Card size" : "Tile size") : "") + (B ? b("tall", Xa(e) ? "Make shorter" : "Make taller") : "") + (e === "energy" ? b("graph", (((ce = p.opts.energy) == null ? void 0 : ce.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + b("left", "Move left", h || i.col === 0) + b("right", "Move right", h || i.col + i.cols >= c) + b("up", "Move up", i.row <= 0) + b("down", "Move down") + (R ? b("remove", "Remove") : b("hide", "Hide")), A.appendChild(M);
    const D = Math.min(i.x + i.w - M.offsetWidth, A.clientWidth - M.offsetWidth);
    Object.assign(M.style, { left: Math.max(0, D) + "px", top: i.y + 28 + "px" }), Ra = { key: e, menu: M, opener: n }, (we = M.querySelector("button:not([disabled])")) == null || we.focus();
  }
  function Qa(e) {
    if (!Ra) return;
    const { menu: n, opener: i } = Ra;
    Ra = null, n.remove(), e && (i == null || i.focus());
  }
  const Po = () => Object.fromEntries([...Vn].map(([e, n]) => [e, { col: n.col, row: n.row }]));
  function hs(e, n) {
    var h, b;
    if (n === "remove") {
      Qa(), $l(e);
      return;
    }
    const i = W, c = jt(), p = Po(), g = p[e] || { col: 0, row: 0 };
    n === "size" && (c.spans = { ...c.spans, [e]: (c.spans[e] ?? 2) === 1 ? 2 : 1 }), n === "tall" && (c.opts = { ...c.opts, [e]: { ...c.opts[e] || {}, tall: !Xa(e) } }), n === "graph" && (c.opts = { ...c.opts, energy: { ...c.opts.energy || {}, graph: (((h = c.opts.energy) == null ? void 0 : h.graph) || "above") === "above" ? "below" : "above" } }), n === "left" && (p[e] = { ...g, col: g.col - 1 }), n === "right" && (p[e] = { ...g, col: g.col + 1 }), n === "up" && (p[e] = { ...g, row: g.row - 1 }), n === "down" && (p[e] = { ...g, row: g.row + 1 }), n === "hide" && (c.hidden = [.../* @__PURE__ */ new Set([...c.hidden, e])]), ["left", "right", "up", "down"].includes(n) && (Tt = { key: e, col: p[e].col, row: p[e].row }), xa(c, p), Tt && (Tn(), Tt = null, xa(jt(), Po())), Qa(), n === "graph" && (yn.delete("dash:energy"), an()), Tn(), n !== "hide" ? (b = A.querySelector('[data-board-more="' + CSS.escape(e) + '"]')) == null || b.focus() : xn(Bn(e) + " hidden", Br(i));
  }
  const Tr = (e) => {
    var n;
    return Sn.includes(e) && !(((n = W.dash) == null ? void 0 : n.cells) || {})[e] ? " added" : " put back";
  };
  function vi(e) {
    const n = jt(), i = Bn(e) + Tr(e);
    Xi({ ...n, hidden: n.hidden.filter((c) => c !== e) }), Tn(), xn(i);
  }
  const Lr = () => jt().tiles || [...A.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => e.dataset.k).filter((e) => !jt().hidden.includes(e));
  function fs(e, n) {
    const i = jt();
    xa({ ...i, tiles: e, hidden: i.hidden.filter((c) => !c.includes(".")) }, n), an(), kn();
  }
  const Kl = (e) => {
    fs([...Lr().filter((n) => n !== e), e], Po()), xn(ke(e) + " added"), Qs(e);
  }, $l = (e) => {
    const n = W, i = Po();
    delete i[e], fs(Lr().filter((c) => c !== e), i), xn(ke(e) + " removed", Br(n));
  };
  let Ar = 0;
  function xn(e, n = null) {
    var h;
    const i = d("toast");
    if (!i) return;
    if (i.replaceChildren(Object.assign(document.createElement("span"), { textContent: e })), n) {
      const b = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      b.addEventListener("click", () => {
        clearTimeout(Ar), i.classList.remove("show", "withAction"), n();
      }), i.appendChild(b);
    }
    const c = f.getBoundingClientRect(), p = (h = a.querySelector(".bottomNav")) == null ? void 0 : h.getBoundingClientRect(), g = Qe.classList.contains("open") && !In ? Math.min(c.right, Qe.getBoundingClientRect().left) : c.right;
    i.style.left = (c.left + g) / 2 + "px", i.style.bottom = (p != null && p.height ? window.innerHeight - p.top + 12 : 26) + "px", i.classList.add("tfToast", "show"), i.classList.toggle("withAction", !!n), clearTimeout(Ar), Ar = setTimeout(() => i.classList.remove("show", "withAction"), n ? 5e3 : 2200);
  }
  const Ba = 700, ms = 1e3, fn = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  fn.setAttribute("role", "tooltip"), fn.setAttribute("aria-hidden", "true"), f.appendChild(fn);
  let _r = null, bi = 0, wi = 0, Er = -1 / 0;
  const gs = (e) => {
    if (e.nodeType !== 1) return !1;
    const n = getComputedStyle(e);
    return n.textOverflow === "ellipsis" && e.scrollWidth > e.clientWidth + 1 || n.webkitLineClamp !== "none" && e.scrollHeight > e.clientHeight + 1;
  }, vs = (e) => {
    for (let n = e; n && n !== f; n = n.parentElement) if (gs(n)) return n;
    return null;
  };
  function Pa(e, n) {
    clearTimeout(bi), clearTimeout(wi);
    const i = () => {
      if (!e.isConnected) return;
      _r = e, fn.textContent = n, fn.hidden = !1;
      const c = e.getBoundingClientRect(), p = fn.getBoundingClientRect(), g = c.top - p.height - 8 >= 8 ? c.top - p.height - 8 : c.bottom + 8;
      fn.style.left = Math.max(8, Math.min(window.innerWidth - p.width - 8, c.left + c.width / 2 - p.width / 2)) + "px", fn.style.top = g + "px";
    };
    !fn.hidden || performance.now() - Er < ms ? i() : bi = setTimeout(i, Ba);
  }
  function Dr() {
    clearTimeout(bi), clearTimeout(wi), fn.hidden || (Er = performance.now()), fn.hidden = !0, _r = null;
  }
  a.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    if (fn.contains(e.target)) {
      clearTimeout(wi);
      return;
    }
    const n = vs(e.target);
    if (n && mt.names === "scroll" && n.matches(Rr)) {
      fo(n);
      return;
    }
    if (n) {
      n !== _r ? Pa(n, n.textContent.trim()) : clearTimeout(wi);
      return;
    }
    clearTimeout(bi), clearTimeout(wi), wi = setTimeout(Dr, 120);
  }), a.addEventListener("focusin", (e) => {
    var c;
    const n = e.target;
    if (!((c = n.matches) != null && c.call(n, ":focus-visible"))) return;
    let i = [n, ...n.querySelectorAll("*")].filter(gs);
    mt.names === "scroll" && (i.filter((p) => p.matches(Rr)).forEach(fo), i = i.filter((p) => !p.matches(Rr))), i.length && Pa(n, i.map((p) => p.textContent.trim()).join(" · "));
  }), a.addEventListener("focusout", (e) => {
    e.target === _r && Dr();
  }), a.addEventListener("keydown", (e) => {
    e.key === "Escape" && !fn.hidden && (e.stopPropagation(), Dr());
  }, !0), window.addEventListener("scroll", () => {
    (!fn.hidden || bi) && Dr();
  }, { capture: !0, passive: !0 });
  const Rr = ".activityRowName,.activityRowMeta", Nr = /* @__PURE__ */ new WeakSet();
  function fo(e) {
    var g;
    if (mt.names !== "scroll" || Nr.has(e) || (g = window.matchMedia) != null && g.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const n = e.scrollWidth - e.clientWidth;
    if (n < 2) return;
    const i = n / 30 * 1e3, c = 600 + i + 1e3 + i;
    Nr.add(e), e.style.textOverflow = "clip";
    const p = e.animate([
      { textIndent: "0px", offset: 0 },
      { textIndent: "0px", offset: 600 / c, easing: "ease-in-out" },
      { textIndent: -n + "px", offset: (600 + i) / c },
      { textIndent: -n + "px", offset: (1600 + i) / c, easing: "ease-in-out" },
      { textIndent: "0px", offset: 1 }
    ], { duration: c });
    p.onfinish = p.oncancel = () => {
      e.style.textOverflow = "", Nr.delete(e);
    };
  }
  const Js = new IntersectionObserver((e) => e.forEach((n) => {
    n.isIntersecting && (Js.unobserve(n.target), fo(n.target));
  }), { threshold: 1 });
  let mo = !1;
  new MutationObserver(() => {
    mo || mt.names !== "scroll" || (mo = !0, setTimeout(() => {
      mo = !1, a.querySelectorAll(Rr).forEach((e) => {
        !e.dataset.glided && gs(e) && (e.dataset.glided = "1", Js.observe(e));
      });
    }, 300));
  }).observe(a, { childList: !0, subtree: !0 });
  const Br = (e) => () => {
    W = e, On(), an(), Tn(), kn();
  };
  function Qs(e) {
    const n = () => A.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]');
    setTimeout(() => {
      var h;
      const i = n();
      if (!i) return;
      const c = (h = window.matchMedia) == null ? void 0 : h.call(window, "(prefers-reduced-motion: reduce)").matches, p = i.getBoundingClientRect();
      (p.top < 0 || p.bottom > window.innerHeight) && i.scrollIntoView({ behavior: c ? "auto" : "smooth", block: "center" });
      const g = (b) => "0 0 0 4px color-mix(in srgb,var(--primary) " + b + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + b + "%,transparent)";
      i.animate([{ boxShadow: g(55) }, { boxShadow: g(0) }], { duration: 1500, easing: c ? "steps(1, end)" : "ease-out" });
    }, yi(e) ? 260 : 0);
  }
  function yi(e) {
    const n = Vn.get(e);
    if (!n || !Qe.classList.contains("open") || In) return !1;
    const { n: i, w: c } = Bo(A.clientWidth), p = Qe.getBoundingClientRect().left - A.getBoundingClientRect().left, g = (M) => M * (c + tn) + n.cols * c + (n.cols - 1) * tn <= p;
    if (g(n.col)) return !1;
    const h = /* @__PURE__ */ new Set();
    Vn.forEach((M, R) => {
      if (R !== e) for (let B = M.row; B < M.row + M.rows; B++) for (let D = M.col; D < M.col + M.cols; D++) h.add(D + "," + B);
    });
    const b = (M, R) => {
      for (let B = R; B < R + n.rows; B++) for (let D = M; D < M + n.cols; D++) if (h.has(D + "," + B)) return !1;
      return !0;
    };
    for (let M = 0; M <= Ja; M++) for (let R = 0; R + n.cols <= i && g(R); R++)
      if (b(R, M))
        return xa(jt(), { ...Po(), [e]: { col: R, row: M } }), Tn(), !0;
    return !1;
  }
  const xi = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Qe = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Qe.setAttribute("aria-label", "Edit the dashboard"), Qe.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', f.appendChild(Qe);
  let In = !1, pa = !1, ka = !1, Nt = null, Ma = !1;
  const Pr = {}, Io = (e, n) => {
    if (Pr[e] === n) return;
    Pr[e] = n;
    const i = Qe.querySelector('[data-tray="' + e + '"]');
    i.innerHTML = n, sa(i);
  }, bs = (e, n) => '<span class="tfTrayName"><span class="activityRowName">' + re(ke(e)) + '</span><span class="activityRowMeta">' + re(n) + "</span></span>", Xl = (e, n, i) => '<li class="tfTrayFav' + (n ? " off" : "") + '" data-tray-fav="' + re(e) + '"><span class="tfTrayGrip" aria-hidden="true">' + Tc + '</span><span class="tfIcon"' + Et(e, rn(e)) + "></span>" + bs(e, n ? "Hidden" + (Lt.get(e) ? " · " + Lt.get(e) : "") : Lt.get(e) || on(e)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + re(e) + '" aria-pressed="' + !n + '" aria-label="' + (n ? "Show " : "Hide ") + re(ke(e)) + ' on the dashboard">' + (n ? zd : ff) + "</button>" + (i ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + re(e) + '" aria-label="Remove ' + re(ke(e)) + ' from favourites">' + Vd + "</button>" : "<span></span>") + "</li>";
  function el(e, n, i, c) {
    const p = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(x).filter((h) => n(h) && !i.has(h) && x[h].state !== "unavailable").filter((h) => {
      const b = (ke(h) + " " + (Lt.get(h) || "") + " " + h).toLowerCase();
      return p.every((M) => b.includes(M));
    }).sort((h, b) => (Lt.get(h) || "~").localeCompare(Lt.get(b) || "~") || ke(h).localeCompare(ke(b))).slice(0, 40).map((h) => '<li><button class="tfTrayPickItem" type="button" ' + c + '="' + re(h) + '"><span class="tfIcon"' + Et(h, rn(h)) + "></span>" + bs(h, Lt.get(h) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function kn() {
    const e = nn && f.classList.contains("tfBoard");
    if (Qe.classList.toggle("open", e), Qe.classList.toggle("tucked", e && In), Qe.toggleAttribute("inert", !e), e || (Ma = !1), to(), !e) return;
    const n = Qe.querySelector("[data-tray-tuck]");
    n.innerHTML = In ? Rd : Gd, n.setAttribute("aria-expanded", String(!In)), n.setAttribute("aria-label", In ? "Show the edit tray" : "Tuck the edit tray away");
    const i = jt().hidden.filter((h) => Ji().some((b) => b.key === h));
    Io("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((h) => '<button class="tfTrayCard" type="button" data-tray-card="' + re(h) + '" aria-label="' + re(Bn(h)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + Tc + "</span>" + re(Bn(h)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Io("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (jt().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Ma + '">' + (Ma ? "Hide the phone" : "Show the phone") + "</button>");
    const c = new Set(W.favHidden || []), p = Rn(), g = [...p, ...[...c].filter((h) => !p.includes(h) && x[h])];
    Io("favs", g.map((h) => Xl(h, c.has(h), p.includes(h))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Qe.querySelector('[data-pick="tiles"]').hidden = !ka, Qe.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(ka)), ka && Io("tilepick", el(Qe.querySelector("[data-tile-search]").value, (h) => Al.includes(h.split(".")[0]), new Set(Lr()), "data-tile-pick")), Qe.querySelector('[data-pick="favs"]').hidden = !pa, Qe.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(pa)), pa && Io("pick", el(Qe.querySelector("[data-fav-search]").value, (h) => xi.test(h), new Set(Rn()), "data-fav-pick")), Io("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (gr() ? " on" : "") + '" type="button" role="switch" aria-checked="' + gr() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const ki = (e) => {
    W = { ...W, ...e }, On(), an(), kn();
  };
  function ws(e, n) {
    const i = W, c = new Set(W.favHidden || []);
    n ? c.delete(e) : c.add(e), ki({ favHidden: [...c] }), n ? xn(ke(e) + " put back") : xn(ke(e) + " hidden", Br(i));
  }
  const Ir = (e) => {
    const n = W;
    ki({ favourites: Rn().filter((i) => i !== e), favHidden: (W.favHidden || []).filter((i) => i !== e) }), xn(ke(e) + " removed from favourites", Br(n));
  }, er = (e) => {
    ki({ favourites: [...Rn().filter((n) => n !== e), e], favHidden: (W.favHidden || []).filter((n) => n !== e) }), xn(ke(e) + " added to favourites");
  };
  Qe.addEventListener("click", (e) => {
    var i;
    const n = e.target.closest("button");
    n && (n.hasAttribute("data-tray-done") ? Pn(!1) : n.hasAttribute("data-tray-tuck") ? (In = !In, kn()) : n.hasAttribute("data-phone-toggle") ? (Ma = !Ma, kn(), Ma && ((i = cn.querySelector("[data-phone-key]")) == null || i.focus({ preventScroll: !0 }))) : n.dataset.trayCard ? e.detail === 0 && (vi(n.dataset.trayCard), kn()) : n.dataset.favEye ? ws(n.dataset.favEye, n.getAttribute("aria-pressed") !== "true") : n.dataset.favRemove ? Ir(n.dataset.favRemove) : n.hasAttribute("data-fav-add") ? (pa = !pa, kn(), pa && Qe.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : n.dataset.favPick ? er(n.dataset.favPick) : n.hasAttribute("data-tile-add") ? (ka = !ka, kn(), ka && Qe.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : n.dataset.tilePick ? Kl(n.dataset.tilePick) : n.hasAttribute("data-fav-suggest") && ki({ suggest: !gr() }));
  }), Qe.addEventListener("input", (e) => {
    e.target.matches("[data-fav-search],[data-tile-search]") && kn();
  }), Qe.addEventListener("keydown", (e) => {
    var i, c;
    const n = !!((c = (i = e.target).closest) != null && c.call(i, '[data-pick="tiles"],[data-tile-add]'));
    e.key !== "Escape" || !(n ? ka : pa) || (e.stopPropagation(), n ? ka = !1 : pa = !1, kn(), Qe.querySelector(n ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function tl(e, n, i, c) {
    e.preventDefault();
    const p = e.clientX, g = e.clientY;
    let h = null, b = 0;
    const M = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), R = (D) => {
      if (!h) {
        if (Math.hypot(D.clientX - p, D.clientY - g) < 4) return;
        h = n.cloneNode(!0), h.classList.add("tfTrayGhost"), h.style.width = n.offsetWidth + "px", f.appendChild(h);
      }
      h.style.transform = "translate(" + (D.clientX - 24) + "px," + (D.clientY - 24) + "px)";
      const ce = !In && D.clientX >= Qe.getBoundingClientRect().left;
      if (i === "card") {
        const J = A.getBoundingClientRect(), { w: xe } = Bo(A.clientWidth);
        Tt = !ce && D.clientX >= J.left && D.clientX <= J.right && D.clientY >= J.top + Gn ? { key: c, col: Math.max(0, Math.floor((D.clientX - J.left) / (xe + tn))), row: Math.max(0, Math.floor((D.clientY - J.top - Gn) / ho)), fromTray: !0 } : null, b || (b = requestAnimationFrame(() => {
          b = 0, Tn();
        }));
        return;
      }
      const we = A.querySelector(".tfDash-favs"), _e = we == null ? void 0 : we.getBoundingClientRect();
      if (Nt = null, _e && !ce && D.clientX >= _e.left && D.clientX <= _e.right && D.clientY >= _e.top && D.clientY <= _e.bottom) {
        let J = 1 / 0;
        we.querySelectorAll('[data-k^="fav:"]').forEach((xe, G) => {
          const j = xe.getBoundingClientRect(), Me = Math.hypot(D.clientX - (j.left + j.width / 2), D.clientY - (j.top + j.height / 2));
          Me < J && (J = Me, Nt = { i: G, r: j, after: D.clientX > j.left + j.width / 2 });
        }), Nt || (Nt = { i: 0, r: null, after: !1 });
      }
      Nt != null && Nt.r ? (M.isConnected || f.appendChild(M), Object.assign(M.style, { left: (Nt.after ? Nt.r.right : Nt.r.left) - 2 + "px", top: Nt.r.top + 8 + "px", height: Nt.r.height - 16 + "px" })) : M.remove();
    }, B = () => {
      if (window.removeEventListener("pointermove", R), window.removeEventListener("pointerup", B), window.removeEventListener("pointercancel", B), cancelAnimationFrame(b), h == null || h.remove(), M.remove(), i === "card") {
        if (!h) vi(c);
        else if (Tt != null && Tt.fromTray) {
          Tn();
          const J = Bn(c) + Tr(c), xe = jt(), G = Po();
          Tt = null, xa({ ...xe, hidden: xe.hidden.filter((j) => j !== c) }, G), xn(J);
        }
        Tt = null, Tn(), an(), kn();
        return;
      }
      if (!Nt) return;
      const D = new Set(W.favHidden || []);
      D.delete(c);
      const ce = Rn().filter((J) => J !== c), we = ce.filter((J) => !D.has(J)), _e = we[Math.min(Nt.i + (Nt.after ? 1 : 0), we.length)];
      ce.splice(_e ? ce.indexOf(_e) : ce.length, 0, c), Nt = null, ki({ favourites: ce, favHidden: [...D] }), xn(ke(c) + " put back");
    };
    window.addEventListener("pointermove", R), window.addEventListener("pointerup", B), window.addEventListener("pointercancel", B);
  }
  const ys = { sums: 201, wx: 286, favs: 363, areas: 323, act: 363, energy: 301, avg: 182 }, xs = 140, Jl = 252, Ql = 0.8, ec = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, cn = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  cn.setAttribute("aria-label", "Phone order"), cn.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Vd + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', f.appendChild(cn);
  let eo = "";
  function to() {
    var b;
    const e = Ma && nn && f.classList.contains("tfBoard") && !In;
    if (cn.classList.toggle("open", e), cn.toggleAttribute("inert", !e), !e) return;
    const n = Sr().filter((M) => !jt().hidden.includes(M.key)), i = n.length, c = (M) => Math.round(M * Ql * 10) / 10 + "px", p = (M, R) => {
      const B = M.el.classList.contains("tfDac"), D = M.tile ? B ? Jl : xs : ys[M.key] || xs;
      return '<button class="tfPhoneBlock' + (M.tile ? " tile" : "") + '" type="button" data-phone-key="' + re(M.key) + '" style="min-height:' + c(D) + '" aria-label="' + re(Bn(M.key) + ", " + (R + 1) + " of " + i + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (M.tile ? Et(M.key, rn(M.key)) : Et(M.key, ec[M.key])) + '></span><span class="tfPhoneName">' + re(Bn(M.key)) + "</span></button>";
    }, g = '<div class="tfPhoneTitle">' + re(((b = A.querySelector(".tfDashTitle")) == null ? void 0 : b.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + c(ys.sums) + '"><span class="tfPhoneName">' + re(Bn("sums")) + "</span></div>" + n.map(p).join("");
    if (cn.querySelector('[data-phone="note"]').innerHTML = jt().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", g === eo) return;
    eo = g;
    const h = cn.querySelector('[data-phone="list"]');
    h.innerHTML = g, sa(h);
  }
  function ks(e, n) {
    var i;
    Xi({ ...jt(), phone: e }), kn(), n && ((i = cn.querySelector('[data-phone-key="' + CSS.escape(n) + '"]')) == null || i.focus({ preventScroll: !0 }));
  }
  const go = () => [...cn.querySelectorAll("[data-phone-key]")].map((e) => e.dataset.phoneKey);
  function tc(e, n) {
    e.preventDefault();
    const i = n.parentElement, c = cn.querySelector(".tfPhoneScreen"), p = go().join();
    n.classList.add("moving");
    const g = (b) => {
      const M = c.getBoundingClientRect();
      b.clientY > M.bottom - 40 ? c.scrollTop += 12 : b.clientY < M.top + 40 && (c.scrollTop -= 12);
      const R = [...i.querySelectorAll("[data-phone-key]")].find((ce) => {
        const we = ce.getBoundingClientRect();
        return ce !== n && b.clientX >= we.left && b.clientX <= we.right && b.clientY >= we.top && b.clientY <= we.bottom;
      });
      if (!R) return;
      const B = R.getBoundingClientRect(), D = R.classList.contains("tile") ? b.clientX < B.left + B.width / 2 : b.clientY < B.top + B.height / 2;
      i.insertBefore(n, D ? R : R.nextSibling);
    }, h = () => {
      window.removeEventListener("pointermove", g), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h), n.classList.remove("moving");
      const b = go();
      eo = "", b.join() !== p ? ks(b) : to();
    };
    window.addEventListener("pointermove", g), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  }
  cn.addEventListener("pointerdown", (e) => {
    const n = e.target.closest("[data-phone-key]");
    n && e.button <= 0 && tc(e, n);
  }), cn.addEventListener("click", (e) => {
    var i;
    const n = e.target.closest("button");
    if (n != null && n.hasAttribute("data-phone-close"))
      Ma = !1, kn(), (i = Qe.querySelector("[data-phone-toggle]")) == null || i.focus({ preventScroll: !0 });
    else if (n != null && n.hasAttribute("data-phone-reset")) {
      const { phone: c, ...p } = jt();
      Xi(p), kn();
    }
  }), cn.addEventListener("keydown", (e) => {
    var h, b, M, R;
    if (e.key === "Escape") {
      e.stopPropagation(), Ma = !1, kn(), (h = Qe.querySelector("[data-phone-toggle]")) == null || h.focus({ preventScroll: !0 });
      return;
    }
    const n = (R = (M = (b = e.target).closest) == null ? void 0 : M.call(b, "[data-phone-key]")) == null ? void 0 : R.dataset.phoneKey, i = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!n || !i) return;
    e.preventDefault();
    const c = go(), p = c.indexOf(n), g = p + i;
    g < 0 || g >= c.length || ([c[p], c[g]] = [c[g], c[p]], ks(c, n));
  });
  function tr(e, n) {
    e.preventDefault();
    const i = n.parentElement;
    n.classList.add("moving");
    const c = (g) => {
      const h = [...i.children].find((b) => {
        const M = b.getBoundingClientRect();
        return b !== n && g.clientY >= M.top && g.clientY <= M.bottom;
      });
      if (h) {
        const b = h.getBoundingClientRect();
        i.insertBefore(n, g.clientY < b.top + b.height / 2 ? h : h.nextSibling);
      }
    }, p = () => {
      window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), n.classList.remove("moving");
      const g = new Set(Rn());
      Pr.favs = null, ki({ favourites: [...i.children].map((h) => h.dataset.trayFav).filter((h) => g.has(h)) });
    };
    window.addEventListener("pointermove", c), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  Qe.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    const n = e.target.closest("[data-tray-card]"), i = e.target.closest(".tfTrayFav");
    n ? tl(e, n, "card", n.dataset.trayCard) : i && e.target.closest(".tfTrayGrip") ? tr(e, i) : i != null && i.classList.contains("off") && !e.target.closest("button") && tl(e, i, "fav", i.dataset.trayFav);
  });
  function nc(e) {
    if (!nn || e.button !== 0 || e.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const n = e.target.closest(".tfBoardItem"), i = n && Ji().find((D) => D.el === n);
    if (!i || ya.includes(i.key)) return;
    const c = Vn.get(i.key), { w: p } = Bo(A.clientWidth);
    if (!c) return;
    e.preventDefault(), Qa();
    const g = e.clientX, h = e.clientY;
    let b = !1, M = 0;
    const R = (D) => {
      const ce = D.clientX - g, we = D.clientY - h;
      if (!b) {
        if (Math.hypot(ce, we) < 4) return;
        b = !0, Tt = { key: i.key, col: c.col, row: c.row }, n.classList.add("tfDragging");
      }
      n.style.transform = "translate(" + ce + "px," + we + "px)", Tt.col = Math.round((c.x + ce) / (p + tn)), Tt.row = Math.round((c.y + we - Gn) / ho), M || (M = requestAnimationFrame(() => {
        M = 0, Tn();
      }));
    }, B = () => {
      window.removeEventListener("pointermove", R), window.removeEventListener("pointerup", B), window.removeEventListener("pointercancel", B), b && (cancelAnimationFrame(M), Tn(), n.classList.remove("tfDragging"), n.style.transform = "", Tt = null, xa(jt(), Po()), Tn(), an());
    };
    window.addEventListener("pointermove", R), window.addEventListener("pointerup", B), window.addEventListener("pointercancel", B);
  }
  function Ho(e = !1) {
    const n = A == null ? void 0 : A.querySelector(".tfDashGraph svg[data-graph]");
    if (!(n != null && n.clientWidth)) return;
    const i = n.dataset.graph + "@" + n.clientWidth + "x" + n.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (n.dataset.drawn === i) return;
    const c = !n.dataset.drawn;
    n.dataset.drawn = i;
    const p = wr.find((g) => g.id === n.dataset.graph);
    p ? Vi(n, p).then(() => {
      (e || c) && ui(n);
    }) : Wo(n.dataset.graph, n).then(() => {
      e && Ul(n);
    });
  }
  function nl() {
    var b, M, R;
    $e = ur.model(o()), Za(), x = $e.states, x[(b = W.sources) == null ? void 0 : b.grid] && ($e.grid = W.sources.grid), x[(M = W.sources) == null ? void 0 : M.alarm] && ($e.security.alarms = [W.sources.alarm]), C.forEach((B, D) => {
      const ce = x[D], we = (ce == null ? void 0 : ce.attributes) || {};
      if (!ce || Date.now() - B.at > 2 * 60 * 1e3) {
        C.delete(D);
        return;
      }
      B.pos != null && ce.state !== "opening" && ce.state !== "closing" && Math.abs(jn(D) - B.pos) < 1 && delete B.pos, B.tilt != null && Math.abs((we.current_tilt_position ?? -1) - B.tilt) < 1 && delete B.tilt, B.pos == null && B.tilt == null && C.delete(D);
    });
    const e = [];
    let n = 0;
    const i = ql();
    $n = i.filter((B) => B.room).map((B) => B.room), $n.some((B) => B.id === ie) || (ie = ((R = $n[0]) == null ? void 0 : R.id) || null);
    const c = Ae === "weather" ? { key: "weather", name: "Weather" } : Ae && i.find((B) => B.key === Ae);
    if (c || (Ae = null), f.classList.toggle("tfAreaOpen", !!c), f.classList.toggle("tfWeatherOpen", (c == null ? void 0 : c.key) === "weather"), f.classList.toggle("tfDash", !c), Lt = /* @__PURE__ */ new Map(), $e.rooms.forEach((B) => [...B.actions, ...B.plugs, ...B.readings, ...B.openings, ...B.solar, ...B.plants.flatMap((D) => [D.id, ...D.readings])].forEach((D) => Lt.set(D, B.name))), !c) return Ka(e, vr());
    if (e.push({ key: "areahead", html: Ms(c, ++n) }), c.key === "weather")
      return e.weather = ++n, e;
    const p = c.ids, g = c.room ? c.room.id : c.key, h = c.room;
    return h != null && h.solar.length && e.push({ key: "energy:" + h.id, html: Zn(h, ++n) }), h && (h.readings.length || h.plugs.length || h.power != null) && e.push({ key: "readings:" + h.id, html: la(h, ++n) }), h == null || h.plants.forEach((B) => e.push({ key: "plant:" + B.id, html: qi(B, ++n) })), p.length && e.push({ key: "block:" + g, order: ++n, tiles: p.map((B) => ({ key: B, html: Ne(B) })) }), e;
  }
  const Ms = (e, n) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + n + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Rd + '</button><div class="settingsTitle">' + re(e.name) + "</div></div>";
  let Fo = 0, Mi = null;
  const Hr = (e) => e === "weather" ? pt.wx : A.querySelector(".tfAreas");
  function Fr(e) {
    var n, i;
    Ae || (Fo = Oo().scrollTop, Mi = ((n = Hr(e)) == null ? void 0 : n.getBoundingClientRect().top) ?? null), Ae = e, e.startsWith("room:") && (ie = e.slice(5)), Ha(), Oo().scrollTop = 0, (i = A.querySelector("[data-area-back]")) == null || i.focus({ preventScroll: !0 });
  }
  let Ia = null;
  function Si(e, n) {
    if (Ia == null || Ia(), n == null) return;
    const i = Oo(), c = performance.now() + 1500, p = ["wheel", "touchstart", "pointerdown", "keydown"];
    let g = 0;
    const h = () => {
      cancelAnimationFrame(g), p.forEach((M) => window.removeEventListener(M, h, !0)), Ia = null;
    }, b = () => {
      const M = e();
      if (M != null && M.isConnected) {
        const R = M.getBoundingClientRect().top - n;
        Math.abs(R) > 0.5 && (i.scrollTop += R);
      }
      performance.now() < c ? g = requestAnimationFrame(b) : h();
    };
    p.forEach((M) => window.addEventListener(M, h, { capture: !0, passive: !0 })), Ia = h, b();
  }
  function Un() {
    var i;
    const e = Ae;
    Ae = null, Ha(), Oo().scrollTop = Fo, Si(() => Hr(e), Mi);
    const n = e.startsWith("room:") ? A.querySelector('.tfAreaPanel[data-area="' + CSS.escape(e.slice(5)) + '"]') : e === "weather" ? pt.wx.querySelector(".wbOpenPage") : A.querySelector('[data-k="sum:' + CSS.escape(e) + '"]');
    (i = (n == null ? void 0 : n.querySelector("[data-go]")) || n) == null || i.focus({ preventScroll: !0 });
  }
  const al = (e) => e.wrap ? e.wrap(e.tiles.map((n) => n.html).join(""), e) : '<div class="tfBlock" data-tf data-k="' + re(e.key) + '" style="order:' + e.order + '"><div class="tfActions">' + e.tiles.map((n) => n.html).join("") + "</div></div>", Ss = (e) => e.map((n) => n.key + (n.tiles ? "(" + n.tiles.map((i) => i.key).join(",") + ")" : "")).join(";");
  function Oo() {
    for (let e = f.parentElement || f.getRootNode().host; e; e = e.parentElement || e.getRootNode().host) {
      const n = getComputedStyle(e).overflowY;
      if ((n === "auto" || n === "scroll") && e.scrollHeight > e.clientHeight) return e;
    }
    return document.scrollingElement;
  }
  function ol(e) {
    const n = Oo(), i = (b) => {
      const M = b.getBoundingClientRect();
      return M.height && M.bottom > 0 && M.top < window.innerHeight;
    }, c = [...A.children, ...A.querySelectorAll(".tfDashTiles > *")].find((b) => !b.matches(".tfDashTiles") && i(b)), p = c == null ? void 0 : c.dataset.k, g = c == null ? void 0 : c.getBoundingClientRect().top;
    e();
    const h = c != null && c.isConnected ? c : p && A.querySelector('[data-k="' + CSS.escape(p) + '"]');
    h != null && h.isConnected && g != null && (n.scrollTop += h.getBoundingClientRect().top - g);
  }
  function Ha() {
    if (!w || !A) return;
    const e = nl();
    A.querySelectorAll("[data-tf]").forEach((i) => i.remove()), yn.clear();
    const n = document.createElement("div");
    n.innerHTML = e.map((i) => i.tiles ? al(i) : i.html).join(""), e.forEach((i) => i.tiles ? i.tiles.forEach((c) => yn.set(c.key, c.html)) : yn.set(i.key, i.html)), An = Ss(e), A.append(...n.children), pr(e.weather), $o(), $s.disconnect(), Tn(), sa(A), Sa(A), Ao(A), U(), I && Wo(I.id), Li(), vo(), qo(), requestAnimationFrame(ee);
  }
  const Or = (e) => {
    var i;
    const n = a.activeElement && e.contains(a.activeElement) ? a.activeElement : null;
    return n && { label: n.getAttribute("aria-label"), act: (i = n.dataset) == null ? void 0 : i.act };
  }, Ci = (e, n) => {
    var i;
    n && ((i = n.label && e.querySelector('[aria-label="' + CSS.escape(n.label) + '"]') || n.act && e.querySelector('[data-act="' + CSS.escape(n.act) + '"]')) == null || i.focus({ preventScroll: !0 }));
  };
  function Cs(e, n) {
    const i = document.createElement("div");
    i.innerHTML = n;
    const c = i.firstElementChild, p = Or(e);
    e.replaceWith(c), sa(c), Sa(c), Ao(c), Ci(c, p);
  }
  function an() {
    !w || !A || Tt || ol(il);
  }
  function il() {
    if (!A.querySelector("[data-tf]")) {
      Ha();
      return;
    }
    const e = nl();
    if (Ss(e) !== An) {
      Ha();
      return;
    }
    const n = (i) => [...We.keys()].some((c) => {
      const p = c.slice(c.indexOf("|") + 1);
      return i === p || i.endsWith(":" + p);
    });
    e.forEach((i) => (i.tiles || [i]).forEach((c) => {
      if (yn.get(c.key) === c.html || n(c.key)) return;
      const p = A.querySelector('[data-k="' + CSS.escape(c.key) + '"]');
      if (p) {
        if (yn.set(c.key, c.html), I && I.key === c.key && p.querySelector(".tfOpen")) {
          p.querySelector(".tfOpen .activityRowMeta").textContent = Qo(I.id);
          return;
        }
        Cs(p, c.html), I && I.key === c.key && Wo(I.id), c.key.startsWith("energy:") && Li();
      }
    })), vo(), qo(), xt(), U(), Ye == null || Ye.update(), It == null || It.forEach((i) => i.update()), f.classList.contains("tfDash") && Cr(), requestAnimationFrame(ee);
  }
  const Ts = {
    light: (e) => [["Brightness", e.brightness != null ? Math.round(e.brightness / 2.55) + "%" : null], ["Colour temperature", e.color_temp_kelvin ? Number(e.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", e.color_mode && Oe(e.color_mode)]],
    climate: (e) => [["Current temperature", qn(e.current_temperature) + " °C"], ["Target", qn(e.temperature) + " °C"], ["Action", Oe(e.hvac_action)]],
    cover: (e) => [["Position", e.current_position != null ? e.current_position + "% open" : null], ["Tilt", e.current_tilt_position != null ? e.current_tilt_position + "% open" : null]],
    humidifier: (e) => [["Current humidity", e.current_humidity + "%"], ["Target", e.humidity + "%"], ["Mode", Oe(e.mode)]],
    media_player: (e) => [["Title", e.media_title], ["Artist", e.media_artist], ["Volume", e.volume_level != null ? Math.round(e.volume_level * 100) + "%" : null], ["Source", e.source]],
    vacuum: (e) => [["Battery", e.battery_level + "%"], ["Fan speed", Oe(e.fan_speed)], ["Rooms", (e.rooms || []).join(", ") || null]],
    lock: (e) => [["Changed by", e.changed_by]],
    alarm_control_panel: (e) => [["Changed by", e.changed_by]],
    valve: () => [],
    plant: (e) => [["Moisture", e.moisture + "%"], ["Light", Number(e.brightness).toLocaleString() + " lx"], ["Temperature", qn(e.temperature) + " °C"], ["Fertility", e.conductivity + " µS/cm"], ["Problems", e.problem === "none" ? "None" : Oe(e.problem)]],
    weather: (e) => [["Temperature", e.temperature != null ? e.temperature + " " + (e.temperature_unit || "°C") : null], ["Humidity", e.humidity != null ? e.humidity + "%" : null], ["Wind", e.wind_speed != null ? e.wind_speed + " " + (e.wind_speed_unit || "km/h") : null], ["Pressure", e.pressure != null ? e.pressure + " " + (e.pressure_unit || "hPa") : null]]
  }, rl = (e) => {
    var i;
    const n = (((i = Ts[e.split(".")[0]]) == null ? void 0 : i.call(Ts, wt(e))) || []).filter(([, c]) => c != null && c !== "");
    return n.length ? '<div class="tfMoreRows">' + n.map(([c, p]) => '<div class="tfMoreRow"><span>' + re(c) + "</span><span>" + re(p) + "</span></div>").join("") + "</div>" : "";
  }, Jn = (e) => rr(e) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function dn(e, n = {}, i = !1) {
    return '<div class="tfMoreList">' + e.map((c) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + re(c.name) + '</div><div class="tfMoreTiles' + (i ? " single" : "") + '">' + c.ids.map((p) => ua(p, n)).join("") + "</div></div>").join("") + "</div>";
  }
  const rt = document.createElement("div");
  rt.className = "tfMoreBackdrop", rt.hidden = !0, f.appendChild(rt);
  const sl = (e, n) => {
    for (let i = e; i && i !== rt; i = i.parentElement) {
      const c = getComputedStyle(i).overflowY;
      if ((c === "auto" || c === "scroll") && i.scrollHeight > i.clientHeight + 1 && (n < 0 ? i.scrollTop > 0 : i.scrollTop + i.clientHeight < i.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Ti = null;
  rt.addEventListener("touchstart", (e) => {
    Ti = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: !0 }), rt.addEventListener("touchmove", (e) => {
    var p, g;
    if (!Ti || e.touches.length > 1 || (g = (p = e.target).closest) != null && g.call(p, "input,textarea,select")) return;
    const n = e.touches[0], i = Ti.x - n.clientX, c = Ti.y - n.clientY;
    Ti = { x: n.clientX, y: n.clientY }, Math.abs(c) >= Math.abs(i) && !sl(e.target, c) && e.preventDefault();
  }, { passive: !1 }), rt.addEventListener("wheel", (e) => {
    sl(e.target, e.deltaY) || e.preventDefault();
  }, { passive: !1 });
  function Ls() {
    const e = rt.querySelector(".tfMorePair"), n = rt.querySelector(".tfMore");
    e == null || e.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - n.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Ls, { passive: !0 }), w && Ct();
  let no = [];
  const As = (e) => e === "favourites" || e.startsWith("summary:") || e.startsWith("group:");
  function ll(e) {
    const n = (M, R = "") => '<div class="tfMoreHead">' + (F != null && F.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Sc + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + re(M) + "</div>" + R + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Jh + "</button></div>", i = (M, R) => '<div class="tfMoreNow"><div class="tfMoreState">' + re(M) + "</div>" + (R ? '<div class="tfMoreSub">' + re(R) + "</div>" : "") + "</div>", c = dn;
    if (e === "favourites") {
      const M = Rn(), R = new Set(M), B = [{ name: "Starred", ids: M }, { name: "Home", ids: $e.homeVacuums }, { name: "Security", ids: [...$e.security.alarms, ...$e.security.locks] }, ...$e.rooms.map((D) => ({ name: D.name, ids: [...D.actions, ...D.plugs] }))].map((D, ce) => ce ? { ...D, ids: D.ids.filter((we) => !R.has(we)) } : D).filter((D) => D.ids.length);
      return [n("Favourites"), i(M.length ? M.length + " starred" : "None starred"), c(B, { star: !0 }, !0)];
    }
    const p = (M, { name: R = "", alert: B = !1, plain: D = !1 } = {}) => {
      const ce = D ? [] : M.filter((J) => Al.includes(J.split(".")[0])), we = M.filter((J) => !ce.includes(J)), _e = (J) => J.startsWith("vacuum.") && wt(J).battery_level != null ? wt(J).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (R ? '<div class="tfMoreGroupName">' + re(R) + "</div>" : "") + '<div class="tfMoreActions">' + ce.map((J) => Ne(J, !0)).join("") + we.map((J) => ua(J, { plain: D, alert: B, say: D ? _e(J) : null })).join("") + "</div></div>";
    };
    if (e.startsWith("summary:")) {
      const M = vr().find((ce) => ce.key === e.slice(8));
      if (!M) return null;
      const R = M.key === "light" ? (M.groups || []).flatMap((ce) => ce.ids) : [], B = R.some((ce) => {
        var we;
        return ((we = x[ce]) == null ? void 0 : we.state) === "on";
      }), D = R.length ? '<button class="primary" type="button" data-acts="' + so(R.map((ce) => ["light", B ? "turn_off" : "turn_on", ce])) + '">' + (B ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(M.name), '<div class="tfMoreNowRow">' + i(M.value) + D + "</div>", ...(M.groups || []).map((ce) => p(ce.ids, { name: ce.name === M.name ? "" : ce.name, alert: ce.alert, plain: M.plain }))];
    }
    if (e.startsWith("group:")) {
      const [, M, R] = e.split(":"), B = $e.rooms.find((we) => we.id === M), D = B && _a(B).find((we) => we.key === R);
      if (!D) return null;
      const ce = D.acts ? '<button class="primary" type="button" data-acts="' + so(D.acts) + '">' + (D.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(B.name + " " + D.label.toLowerCase()), '<div class="tfMoreNowRow">' + i(D.value) + ce + "</div>", p(ni(B, R))];
    }
    const g = e.split(".")[0], h = x[e], b = Al.includes(g) ? Kn(e) : { sections: [] };
    return [
      n(ke(e)),
      i(on(e), h.last_changed && za(Date.parse(h.last_changed))),
      (F == null ? void 0 : F.at) && '<svg class="tfGraph tfDay" data-day="' + re(e) + '" role="img" aria-label="' + re(ke(e)) + ', last 24 hours"></svg>',
      g === "cover" && '<div data-cover-art="' + re(e) + '"></div>',
      ...b.sections.filter(Boolean),
      _s(e) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(F != null && F.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Gd + "</button>"
    ].filter(Boolean);
  }
  const _s = (e) => As(e) ? "" : rl(e) + Jn(e);
  let ao = "";
  function qr(e) {
    var n;
    F && (F.details = e, vo(), (n = rt.querySelector(e ? "[data-details-close]" : "[data-details]")) == null || n.focus({ preventScroll: !0 }));
  }
  const Wr = (e) => {
    const n = x[e], i = jn(e), c = Va(e);
    return { kind: Mc(n), name: ke(e), text: on(e), pos: i, target: Math.abs(c - i) > 0.5 ? c : null, moving: n.state === "opening" || n.state === "closing", tilt: ro(e) ?? 100, canSet: Ht(e, Fd) };
  };
  function Sa(e) {
    e.querySelectorAll("[data-cover-art]").forEach((n) => {
      const i = n.dataset.coverArt, c = n.dataset.artKey || "more:" + i;
      let p = H.get(c);
      p || (p = Xh({ onMove: (g) => Ca(i, g), onSet: (g) => {
        Ca(i, g), ir("pos", i);
      } }), p.coverId = i, H.set(c, p)), n.replaceWith(p.el), p.update(Wr(i));
    });
  }
  const jr = (e) => [...H.values()].filter((n) => n.coverId === e), Es = () => H.forEach((e) => {
    x[e.coverId] && e.update(Wr(e.coverId));
  }), qo = () => {
    H.forEach((e, n) => {
      e.el.isConnected || (e.destroy(), H.delete(n));
    }), Es();
  };
  function vo() {
    var g, h;
    if (!F || !(As(F.id) || x[F.id])) {
      rt.hidden = !0;
      return;
    }
    if ([...We.keys()].some((b) => b.endsWith("|" + F.id))) {
      Es();
      return;
    }
    const e = ll(F.id), n = rt.querySelector(".tfMore");
    if (!e) {
      Hn();
      return;
    }
    const i = Or(rt), c = _s(F.id), p = F.frame ? F.frame.wide : F.id.startsWith("summary:") || F.id.startsWith("group:");
    if (rt.hidden || !n || e.length !== no.length || n.classList.contains("wide") !== p) {
      const b = ar ? F.scroll || 0 : !rt.hidden && n ? n.scrollTop : 0;
      rt.innerHTML = '<div class="tfMorePair' + (rt.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (p ? " wide" : "") + '"' + (F.frame ? ' style="height:' + F.frame.h + 'px"' : "") + ">" + e.join("") + "</section>" + (c ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + Sc + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + c + "</div></div></aside>" : "") + "</div>", ao = c, rt.classList.toggle("wide", p), rt.hidden = !1, Ls(), Sa(rt), Ao(rt), sa(rt), rt.querySelectorAll("[data-day]").forEach((M) => ul(M.dataset.day, M, F.at)), b && (rt.querySelector(".tfMore").scrollTop = b), Ci(rt, i), rt.contains(a.activeElement) || (g = rt.querySelector("[data-more-close]")) == null || g.focus({ preventScroll: !0 });
    } else {
      if (e.forEach((b, M) => {
        var D, ce;
        if (b === no[M] || b.includes("data-cover-art") || n.children[M].contains((ce = (D = a.activeElement) == null ? void 0 : D.matches) != null && ce.call(D, "input,select") ? a.activeElement : null) || [...We.keys()].some((we) => n.children[M].querySelector('[data-drag="' + CSS.escape(we) + '"]'))) return;
        const R = document.createElement("div");
        R.innerHTML = b;
        const B = R.firstElementChild;
        n.children[M].replaceWith(B), sa(B), Ao(B);
      }), c !== ao) {
        const b = rt.querySelector(".tfMoreSideBody");
        b && (b.innerHTML = c), ao = c;
      }
      rt.contains(a.activeElement) || Ci(rt, i);
    }
    (h = rt.querySelector(".tfMorePair")) == null || h.classList.toggle("details", !!(F.details && c)), no = e, Es();
  }
  setInterval(() => {
    F && vo();
  }, 15 * 1e3);
  function nr(e, n) {
    var p;
    const i = !!(F && n && rt.contains(n)), c = i && rt.querySelector(".tfMore");
    i && (F.scroll = c.scrollTop), F = { id: e, opener: i ? F.opener : n, back: i ? F : null, frame: i ? F.frame || { wide: c.classList.contains("wide"), h: c.offsetHeight } : null, at: Number((p = n == null ? void 0 : n.dataset) == null ? void 0 : p.at) || null }, cl();
  }
  let ar = !1;
  function cl() {
    no = [], ar = !rt.hidden, H.forEach((e, n) => {
      n !== F.id && rt.contains(e.el) && (e.destroy(), H.delete(n));
    }), vo(), ar = !1;
  }
  function Hn() {
    var i, c, p, g, h, b;
    const e = F == null ? void 0 : F.opener;
    F = null, H.forEach((M, R) => {
      rt.contains(M.el) && (M.destroy(), H.delete(R));
    }), Be.forEach((M, R) => {
      R.startsWith("more:") && Be.delete(R);
    }), rt.hidden = !0, rt.innerHTML = "";
    const n = { preventScroll: !0 };
    e != null && e.isConnected ? e.focus(n) : (i = e == null ? void 0 : e.dataset) != null && i.more ? (c = A.querySelector('[data-more="' + CSS.escape(e.dataset.more) + '"]')) == null || c.focus(n) : (p = e == null ? void 0 : e.dataset) != null && p.summary ? (g = A.querySelector('[data-summary="' + CSS.escape(e.dataset.summary) + '"]')) == null || g.focus(n) : (h = e == null ? void 0 : e.hasAttribute) != null && h.call(e, "data-favs-edit") && ((b = A.querySelector("[data-favs-edit]")) == null || b.focus(n));
  }
  function zr(e, n, i, c = {}) {
    const p = n.map((xe) => xe[1]), g = c.zero ? 0 : Math.min(...p), h = Math.max(...p), b = Math.max(120, e.clientWidth || 260), M = Math.max(60, e.clientHeight || 130), R = 8, B = M - 20, D = Date.now() - 24 * 3600 * 1e3, ce = 24 * 3600 * 1e3, we = (xe) => Math.max(0, Math.min(b, (xe - D) / ce * b)), _e = (xe) => h === g ? (R + B) / 2 : B - (xe - g) / (h - g) * (B - R);
    let J = "M" + we(n[0][0]).toFixed(1) + " " + _e(n[0][1]).toFixed(1);
    for (let xe = 1; xe < n.length; xe++) J += c.smooth ? "L" + we(n[xe][0]).toFixed(1) + " " + _e(n[xe][1]).toFixed(1) : "H" + we(n[xe][0]).toFixed(1) + "V" + _e(n[xe][1]).toFixed(1);
    e.setAttribute("viewBox", "0 0 " + b + " " + M), e.setAttribute("aria-label", i), e.innerHTML = '<path d="' + J + "V" + B + "H" + we(n[0][0]).toFixed(1) + 'Z" fill="' + (c.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + J + '" fill="none" stroke="' + (c.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (M - 4) + '">24 h ago</text><text x="' + b + '" y="' + (M - 4) + '" text-anchor="end">Now</text>';
  }
  const dl = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, ac = (e, n) => {
    const i = e.split(".")[0];
    return dl[i] ? dl[i].includes(n) : i === "alarm_control_panel" || i === "climate" || i === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(n) : n === "on";
  }, oc = (e) => {
    const n = e.split(".")[0], i = wt(e).device_class;
    return n === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[i] || (Ll.includes(i) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[n] || "On";
  }, Ds = /* @__PURE__ */ new Map();
  let ic = 0;
  async function Qn(e) {
    let n = Ds.get(e);
    if (!n || Date.now() - n.at > 60 * 1e3) {
      let p = [];
      try {
        const g = await N({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        p = ((g == null ? void 0 : g[e]) || []).map((h) => [h.lu != null ? h.lu * 1e3 : Date.parse(h.last_updated || h.last_changed), String(h.s ?? h.state)]).filter(([h]) => Number.isFinite(h));
      } catch {
      }
      p.length || (p = (Do || []).filter((g) => g.entity_id === e).map((g) => [g.when * 1e3, String(g.state)])), n = { at: Date.now(), pts: p }, Ds.set(e, n);
    }
    const i = x[e], c = n.pts.slice().sort((p, g) => p[0] - g[0]);
    return i && (!c.length || c[c.length - 1][1] !== i.state) && c.push([Date.parse(i.last_changed) || Date.now(), i.state]), c;
  }
  async function ul(e, n, i) {
    const c = await Qn(e);
    if (!n.isConnected) return;
    const p = c.map(([Me, ut]) => [Me, Number(ut)]);
    if (c.length > 1 && p.every(([, Me]) => Number.isFinite(Me))) {
      zr(n, p, ke(e) + ", last 24 hours");
      return;
    }
    const g = Date.now(), h = g - 864e5, b = Math.max(200, n.clientWidth || 360), M = 62, R = (Me) => Math.max(0, Math.min(b, (Me - h) / 864e5 * b)), B = [];
    let D = null;
    c.forEach(([Me, ut]) => {
      const Yt = ac(e, ut);
      Yt && D == null ? D = Math.max(Me, h) : !Yt && D != null && (B.push([D, Math.max(Me, h)]), D = null);
    }), D != null && B.push([D, g]);
    const ce = No(e) ? "var(--danger)" : e.startsWith("light.") ? "#ffaa00" : "var(--primary)", we = oc(e), _e = "tfDayClip" + ++ic, J = B.map(([Me, ut]) => we + (ut >= g - 1e3 && Me <= h + 1e3 ? " all day" : ut >= g - 1e3 ? " since " + Wt(Me) : Me <= h + 1e3 ? " until " + Wt(ut) : " " + Wt(Me) + "–" + Wt(ut)));
    let xe = "", G = -1 / 0;
    B.forEach(([Me], ut) => {
      const Yt = J[ut].length * 5.4, qt = Math.min(R(Me), b - Yt);
      qt < G + 8 || (xe += '<text x="' + qt.toFixed(1) + '" y="10">' + re(J[ut]) + "</text>", G = qt + Yt);
    });
    let j = '<text x="' + b + '" y="' + (M - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((Me) => {
      let ut = new Date(g).setHours(Me, 0, 0, 0);
      ut > g && (ut -= 864e5), R(ut) > 8 && R(ut) < b - 34 && (j += '<text x="' + R(ut).toFixed(1) + '" y="' + (M - 2) + '" text-anchor="middle">' + String(Me).padStart(2, "0") + "</text>");
    }), n.setAttribute("viewBox", "0 0 " + b + " " + M), n.setAttribute("aria-label", ke(e) + ", last 24 hours: " + (J.length ? J.join(", ") : "no changes")), n.innerHTML = '<clipPath id="' + _e + '"><rect x="0" y="18" width="' + b + '" height="26" rx="8"/></clipPath>' + xe + '<rect x="0" y="18" width="' + b + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + _e + ')">' + B.map(([Me, ut]) => '<rect x="' + R(Me).toFixed(1) + '" y="18" width="' + Math.max(2, R(ut) - R(Me)).toFixed(1) + '" height="26" fill="' + ce + '"/>').join("") + "</g>" + (i && i >= h ? '<line x1="' + R(i).toFixed(1) + '" x2="' + R(i).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + j;
  }
  function rc(e) {
    var c;
    const n = Number((c = x[e]) == null ? void 0 : c.state), i = Date.now();
    if (wt(e).state_class === "total_increasing") {
      const p = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), g = Math.max(1, i - p);
      return [...Array(49)].map((h, b) => p + g * b / 48).map((h) => [h, Math.round(n * Math.pow((h - p) / g, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((p, g) => [i - (48 - g) * 30 * 60 * 1e3, Math.round(n * (0.96 + 0.04 * Math.sin(g / 6)) * 10) / 10]);
  }
  async function Wo(e, n) {
    var we, _e;
    let i = Ie.get(e);
    if (e.endsWith("_solar_power")) i = { at: Date.now(), points: od() };
    else if (rr(e)) i = { at: Date.now(), points: rc(e) };
    else if (!i || Date.now() - i.at > 5 * 60 * 1e3) {
      try {
        const J = new Date(Date.now() - 864e5).toISOString(), xe = await N({ type: "history/history_during_period", start_time: J, entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), G = ((xe == null ? void 0 : xe[e]) || []).map((j) => [j.lu != null ? j.lu * 1e3 : Date.parse(j.last_updated || j.last_changed), Number(j.s ?? j.state)]).filter(([j, Me]) => Number.isFinite(j) && Number.isFinite(Me));
        i = { at: Date.now(), points: G };
      } catch {
        i = { at: Date.now(), points: [] };
      }
      Ie.set(e, i);
    }
    const c = n || A.querySelector('[data-graph="' + CSS.escape(e) + '"]');
    if (!c) return;
    const p = x[e], g = ((we = p == null ? void 0 : p.attributes) == null ? void 0 : we.unit_of_measurement) || "", h = i.points.slice(), b = Number(p == null ? void 0 : p.state);
    if (Number.isFinite(b) && !e.endsWith("_solar_power") && h.push([Date.now(), b]), h.length < 2) {
      c.setAttribute("aria-label", ke(e) + ": no history for the last 24 hours"), c.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const M = h.map((J) => J[1]), R = Math.min(...M), B = Math.max(...M), D = (J) => J.toLocaleString(void 0, { maximumFractionDigits: Math.abs(J) >= 100 ? 0 : 1 }), ce = ((_e = p == null ? void 0 : p.attributes) == null ? void 0 : _e.state_class) === "total_increasing";
    zr(c, h, ke(e) + ", last 24 hours: " + (ce ? "+" + D(M[M.length - 1] - M[0]) : R === B ? D(R) : D(R) + " to " + D(B)) + (g ? " " + g : ""), { smooth: e.endsWith("_solar_power"), zero: e.endsWith("_solar_power") });
  }
  function Li() {
    const e = A == null ? void 0 : A.querySelector("[data-solar]");
    if (!e) return;
    const n = od();
    zr(e, n, "Solar, last 24 hours: up to " + qn(Math.max(...n.map((i) => i[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Rs(e, n) {
    const i = n.entity_id, c = C.get(i) || {}, p = { open_cover: 100, close_cover: 0, set_cover_position: n.position, toggle: jn(i) > 0 ? 0 : 100 }[e], g = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: n.tilt_position }[e];
    p != null && (c.pos = p), g != null && (c.tilt = g), e === "stop_cover" && (delete c.pos, delete c.tilt), e === "stop_cover_tilt" && delete c.tilt, c.at = Date.now(), C.set(i, c);
  }
  function pl(e, n, i) {
    var p;
    const c = i == null ? void 0 : i.entity_id;
    return e !== "light" || typeof c != "string" || !ba[c] || !ja(c) || i.brightness_pct != null || i.brightness != null ? [n, i] : n !== "turn_on" && !(n === "toggle" && ((p = x[c]) == null ? void 0 : p.state) !== "on") ? [n, i] : ["turn_on", { ...i, brightness_pct: ba[c] }];
  }
  function jo(e, n, i, c) {
    let p = { entity_id: i, ...c || {} };
    return [n, p] = pl(e, n, p), e === "cover" && Rs(n, p), lt[i] = (lt[i] || 0) + 1, Ri.set(Wd, JSON.stringify(lt)), ur.call(e, n, p) ? Promise.resolve() : Promise.resolve(ge(e, n, p));
  }
  function or(e) {
    const [n, i, c, p] = e.split("|");
    jo(n, i, c, p ? JSON.parse(p) : null).catch(() => {
    });
  }
  function Ca(e, n) {
    We.set("pos|" + e, n), yn.delete(e), no = no.map(() => ""), [A, rt].forEach((c) => c.querySelectorAll('[data-blocks="' + CSS.escape(e) + '"]').forEach((p) => be(p, n)));
    const i = A.querySelector('.tfAction[data-k="' + CSS.escape(e) + '"] .tfName .activityRowMeta');
    if (i && (i.textContent = Math.round(n) + "%"), (F == null ? void 0 : F.id) === e) {
      const c = rt.querySelector(".tfMoreState"), p = rt.querySelector(".tfMoreSub");
      c && (c.textContent = Math.round(n) + "%", c.classList.add("live")), p && (p.textContent = "Currently " + jn(e) + "%");
    }
    jr(e).forEach((c) => c.update(Wr(e)));
  }
  const Vr = (e, n) => {
    const i = e.shiftKey ? 10 : 1, c = { ArrowUp: n + i, ArrowRight: n + i, ArrowDown: n - i, ArrowLeft: n - i, PageUp: n + 25, PageDown: n - 25, Home: 0, End: 100 }[e.key];
    return c == null ? null : Math.max(0, Math.min(100, Math.round(c)));
  };
  function hl(e, n) {
    var J;
    const i = e.dataset.blocks;
    (J = e.setPointerCapture) == null || J.call(e, n.pointerId);
    const c = (xe) => {
      const G = e.getBoundingClientRect();
      return Math.max(0, Math.min(100, (xe.clientX - G.left) / G.width * 100));
    }, p = c(n), g = n.clientX;
    let h = !1, b = Va(i), M = p, R = 0;
    const B = () => {
      b = Math.abs(M - b) < 0.2 ? M : b + (M - b) * 0.14, Ca(i, b), R = requestAnimationFrame(B);
    }, D = () => {
      h || (h = !0, e.classList.add("fine"), R = requestAnimationFrame(B));
    }, ce = setTimeout(D, 350), we = (xe) => {
      M = c(xe), Math.abs(xe.clientX - g) > 6 && (clearTimeout(ce), D());
    }, _e = () => {
      clearTimeout(ce), cancelAnimationFrame(R), e.removeEventListener("pointermove", we), e.removeEventListener("pointerup", _e), e.removeEventListener("pointercancel", _e), e.classList.remove("fine"), Ca(i, h ? Math.round(b) : (Math.min(3, Math.floor(p / 25)) + 1) * 25), ir("pos", i);
    };
    e.addEventListener("pointermove", we), e.addEventListener("pointerup", _e), e.addEventListener("pointercancel", _e);
  }
  function Ns(e) {
    var p;
    const [n, i] = e.dataset.open.split("|"), c = e.closest(".tfCard");
    I = { key: n, id: i, h: c ? Math.round(c.getBoundingClientRect().height) : 0 }, yn.delete(n), an(), (p = A.querySelector(".tfOpen [data-close]")) == null || p.focus({ preventScroll: !0 });
  }
  function bo(e) {
    var n;
    ie = e.dataset.area, A.querySelectorAll(".tfAreaPanel").forEach((i) => {
      var p;
      const c = i === e;
      i.classList.toggle("active", c), i.setAttribute("aria-expanded", String(c)), (p = i.querySelector(".panelExpanded")) == null || p.toggleAttribute("inert", !c);
    }), yn.set("areas", _o(((n = A.querySelector('[data-k="areas"]')) == null ? void 0 : n.style.order) || 1));
  }
  const Gr = {
    bright: { value: (e, n) => Math.round(n * 100), text: (e, n) => n ? n + "%" : "Off", send: (e, n) => n > 0 ? ["light", "turn_on", { brightness_pct: n }] : ["light", "turn_off", {}] },
    ct: { value: (e, n) => {
      const [i, c] = So(e);
      return Math.round(i + n * (c - i));
    }, text: (e, n) => n.toLocaleString() + "k", send: (e, n) => ["light", "turn_on", { color_temp_kelvin: n }] },
    hue: { value: (e, n) => Math.round(n * 360), text: () => "Colour", send: (e, n) => {
      var i;
      return ["light", "turn_on", { hs_color: [n, Math.max(60, ((i = wt(e).hs_color) == null ? void 0 : i[1]) || 100)] }];
    } },
    pos: { value: (e, n) => Math.round(n * 100), text: (e, n) => Math.round(n) + "%", send: (e, n) => ["cover", "set_cover_position", { position: Math.round(n) }] },
    tilt: { value: (e, n) => Math.round(n * 100), text: (e, n) => "Tilt " + n + "%", send: (e, n) => ["cover", "set_cover_tilt_position", { tilt_position: n }] },
    vol: { value: (e, n) => Math.round(n * 100) / 100, text: (e, n) => Math.round(n * 100) + "%", send: (e, n) => ["media_player", "volume_set", { volume_level: n }] }
  };
  function zt(e, n, i, c) {
    var M;
    const p = Gr[n].value(i, c);
    We.set(n + "|" + i, p);
    const g = Math.round(c * 100) + "%", h = e.querySelector("i");
    if (n === "tilt") {
      h.style.width = "calc((100% - 8px) * " + c + ")";
      const [R, B] = e.querySelectorAll("span");
      R.classList.toggle("lit", c > 0.08), B.classList.toggle("lit", c > 0.92), yn.delete(i), no = no.map(() => ""), jr(i).forEach((D) => D.update(Wr(i)));
    } else if (h) h.style.width = g;
    else {
      let R = e.querySelector("b");
      R || (R = document.createElement("b"), e.appendChild(R)), R.style.left = g;
    }
    e.setAttribute("aria-valuenow", String(Math.round(c * 100)));
    const b = (M = e.closest(".tfAction") || e.closest(".tfMore")) == null ? void 0 : M.querySelector(".tfName .activityRowMeta, .tfMoreState");
    b && (b.textContent = Gr[n].text(i, p));
  }
  function ir(e, n) {
    const i = We.get(e + "|" + n), [c, p, g] = Gr[e].send(n, i), h = () => setTimeout(() => {
      We.delete(e + "|" + n), an();
    }, 1500);
    jo(c, p, n, g).then(h, h);
  }
  function Fa(e) {
    e.addEventListener("click", (n) => {
      var c, p;
      const i = n.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (Ra && !n.target.closest(".tfBoardMenu,[data-board-more]") && Qa(), !(!i || !e.contains(i) || i.disabled))
        if (i.dataset.boardMore)
          (Ra == null ? void 0 : Ra.key) === i.dataset.boardMore ? Qa(!0) : Xn(i.dataset.boardMore, i);
        else if (i.dataset.boardAct) hs(Ra.key, i.dataset.boardAct);
        else if (i.dataset.boardShow) vi(i.dataset.boardShow);
        else if (i.dataset.favHide) ws(i.dataset.favHide, !1);
        else if (i.dataset.energyPick) zi(i.dataset.energyPick);
        else if (i.dataset.act) or(i.dataset.act);
        else if (i.hasAttribute("data-details")) qr(!(F != null && F.details));
        else if (i.hasAttribute("data-details-close")) qr(!1);
        else if (i.dataset.summary) ii(i.dataset.summary, i);
        else if (i.dataset.star) Wi(i.dataset.star);
        else if (i.hasAttribute("data-more-back")) {
          const g = F.id;
          F = F.back, cl(), (c = rt.querySelector('.tfMore [data-more="' + CSS.escape(g) + '"]')) == null || c.focus({ preventScroll: !0 });
        } else if (i.hasAttribute("data-favs-edit")) nr("favourites", i);
        else if (i.dataset.acts) JSON.parse(i.dataset.acts).forEach(([g, h, b, M]) => jo(g, h, b, M).catch(() => {
        }));
        else if (i.dataset.more) nr(i.dataset.more, i);
        else if (i.hasAttribute("data-more-close")) Hn();
        else if (i.dataset.go) Fr("room:" + i.dataset.go);
        else if (i.hasAttribute("data-area-back")) Un();
        else if (i.dataset.open) Ns(i);
        else if (i.hasAttribute("data-close")) {
          const g = I;
          I = null, yn.delete(g.key), an(), (p = A.querySelector('[data-open="' + CSS.escape(g.key + "|" + g.id) + '"]')) == null || p.focus({ preventScroll: !0 });
        } else i.classList.contains("tfAreaPanel") && !i.classList.contains("active") && bo(i);
    }), e.addEventListener("keydown", (n) => {
      var c, p, g, h, b, M, R;
      const i = n.target;
      if ((c = i.dataset) != null && c.open && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Ns(i)), (p = i.dataset) != null && p.energyPick && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), zi(i.dataset.energyPick)), (g = i.classList) != null && g.contains("tfAreaPanel") && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), bo(i)), (h = i.dataset) != null && h.summary && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), ii(i.dataset.summary, i)), n.key === "Escape" && Ra && e === A) {
        n.preventDefault(), Qa(!0);
        return;
      }
      if (n.key === "Escape" && nn && e === A) {
        n.preventDefault(), Pn(!1), (b = d("dashEditNav")) == null || b.focus();
        return;
      }
      if (n.key === "Escape" && Ae && e === A && (n.preventDefault(), Un()), (M = i.dataset) != null && M.blocks) {
        const B = i.dataset.blocks, D = Vr(n, Math.round(Va(B)));
        if (D == null) return;
        n.preventDefault(), Ca(B, D), clearTimeout(fe.get(B)), fe.set(B, setTimeout(() => ir("pos", B), 500));
        return;
      }
      if ((R = i.dataset) != null && R.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(n.key)) {
        n.preventDefault();
        const [B, D] = i.dataset.drag.split("|"), ce = Number(i.getAttribute("aria-valuenow")) / 100, we = n.key === "Home" ? 0 : n.key === "End" ? 1 : Math.max(0, Math.min(1, ce + (n.key === "ArrowLeft" || n.key === "ArrowDown" ? -0.05 : 0.05)));
        zt(i, B, D, we), ir(B, D);
      }
    }), e.addEventListener("pointerdown", (n) => {
      var Yt;
      const i = n.target.closest("[data-blocks]");
      if (i && n.button === 0) {
        n.preventDefault(), hl(i, n);
        return;
      }
      const c = n.target.closest("[data-drag]");
      if (!c || n.button > 0) return;
      const [p, g] = c.dataset.drag.split("|");
      if (p === "bright" && !ja(g)) {
        or(Mt("light", "toggle", g));
        return;
      }
      const h = p === "bright" && ((Yt = x[g]) == null ? void 0 : Yt.state) !== "on", b = n.pointerType !== "mouse", M = p === "tilt" ? 4 : 0, R = () => c.getBoundingClientRect().width - M * 2, B = (qt) => {
        const ha = c.getBoundingClientRect();
        return Math.max(0, Math.min(1, (qt.clientX - ha.left - M) / R()));
      };
      let D = b ? "waiting" : h ? "pressed" : "dragging", ce = 0, we = 0;
      const _e = n.clientX, J = n.clientY, xe = (qt, ha) => Math.hypot(qt.clientX - _e, qt.clientY - J) > ha, G = () => {
        try {
          c.setPointerCapture(n.pointerId);
        } catch {
        }
      };
      b || (n.preventDefault(), G()), D === "dragging" && zt(c, p, g, B(n));
      const j = b && setTimeout(() => {
        var qt, ha;
        D === "waiting" && (D = "held", _ = c, c.classList.add("held"), G(), (qt = navigator.userActivation) != null && qt.hasBeenActive && ((ha = navigator.vibrate) == null || ha.call(navigator, 8)), ce = h ? (ba[g] ?? 100) / 100 : Number(c.getAttribute("aria-valuenow")) / 100, we = _e, zt(c, p, g, ce));
      }, k), Me = (qt) => {
        D === "waiting" && xe(qt, 8) ? D = "gone" : D === "pressed" && xe(qt, 4) && (D = "dragging"), D === "held" ? zt(c, p, g, Math.max(0, Math.min(1, ce + (qt.clientX - we) / R()))) : D === "dragging" && zt(c, p, g, B(qt));
      }, ut = (qt) => {
        clearTimeout(j), ["pointermove", "pointerup", "pointercancel"].forEach((ha, Xe) => c.removeEventListener(ha, Xe ? ut : Me)), c.classList.remove("held"), _ === c && (_ = null), D === "held" || D === "dragging" ? ir(p, g) : qt.type === "pointerup" && h && (D === "waiting" || D === "pressed") && jo("light", "turn_on", g).catch(() => {
        });
      };
      c.addEventListener("pointermove", Me), c.addEventListener("pointerup", ut), c.addEventListener("pointercancel", ut);
    }), e.addEventListener("touchmove", (n) => {
      _ && n.cancelable && n.preventDefault();
    }, { passive: !1 });
  }
  return A && w && (zl(), Fa(A), Fa(rt), rt.addEventListener("click", (e) => {
    e.target === rt && Hn();
  }), (Bs = a.getElementById("homeNav")) == null || Bs.addEventListener("click", () => {
    Ae && Un();
  }), (fl = a.querySelector(".bottomNav")) == null || fl.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Ud + "</button>"), (Ur = d("dashEditNav")) == null || Ur.addEventListener("click", () => Pn(!nn)), A.addEventListener("pointerdown", nc), A.addEventListener("hass-action", (e) => {
    var c, p;
    const n = (p = (c = e.target).closest) == null ? void 0 : p.call(c, ".tfDac"), i = n == null ? void 0 : n.dataset.k;
    !i || !n.dataset.dac.startsWith("dash:") || nn || (e.stopPropagation(), nr(i, n));
  }), new ResizeObserver(() => {
    f.classList.contains("tfDash") && Ui() !== Ys ? an() : Cr();
  }).observe(A), window.addEventListener("resize", Cr, { passive: !0 }), rt.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.stopPropagation(), F != null && F.details ? qr(!1) : Hn());
  })), X(), {
    update(e) {
      if (!w) return;
      const n = !Object.keys(x).length;
      x = e || {};
      for (const i in x) i.startsWith("light.") && x[i].state === "on" && ja(i) && S(i, Wa(x[i]));
      n ? Ha() : an();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      ko = !0, Ye == null || Ye.destroy(), Ye = null, It == null || It.forEach((e) => e.destroy()), It = null;
    },
    resume() {
      ko = !1, !(!w || !(A != null && A.querySelector("[data-tf]"))) && (ht.isConnected && pr(ht.style.order), $o());
    }
  };
}
const Cf = "0.59.0", Ac = "move_assistant", Tf = "move_assistant", Kd = "move_assistant_checkin_reminder";
function Lf() {
  if (document.getElementById("move-assistant-inter")) return;
  const a = document.createElement("link");
  a.id = "move-assistant-inter", a.rel = "stylesheet", a.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(a);
}
class Af extends HTMLElement {
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
    var d;
    const o = !this._hass;
    if (this._hass = l, o) {
      this._init();
      return;
    }
    this._app && l.states !== this._lastStates && (this._lastStates = l.states, this._app.updateStates(l.states), (d = this._test) == null || d.update(l.states));
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
    Lf();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${Du}${Ru}${Nu}</style>${Bu}`;
    const o = l.getElementById("app");
    o.style.opacity = "0";
    let d = null;
    try {
      const f = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Ac
      });
      d = (f == null ? void 0 : f.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(d), this._app = ep(l, {
      data: d,
      save: (f) => this._save(f),
      fire: (f, v) => this._fire(f, v),
      ws: (f) => this._hass.callWS(f),
      subscribe: (f, v) => {
        var w, E;
        return (E = (w = this._hass) == null ? void 0 : w.connection) != null && E.subscribeMessage ? this._hass.connection.subscribeMessage(v, f) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var f, v;
        return Object.keys(((v = (f = this._hass) == null ? void 0 : f.services) == null ? void 0 : v.notify) || {}).sort();
      },
      setReminderAutomation: (f) => this._setReminderAutomation(f),
      setLight: (f) => this.classList.toggle("lightBody", f),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Sf(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), o.style.transition = "opacity .2s ease", o.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var o;
    const l = (o = this._hass) == null ? void 0 : o.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (d) => {
        var v;
        const f = JSON.stringify((d == null ? void 0 : d.value) ?? null);
        f === this._lastSaved || f === this._pendingJson || (this._lastSaved = f, (v = this._app) == null || v.applyRemoteData(d.value));
      },
      { type: "frontend/subscribe_user_data", key: Ac }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Ac,
          value: JSON.parse(o)
        }), this._lastSaved = o;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(l, o = {}) {
    var d, f;
    ((d = this._config) == null ? void 0 : d.events) !== !1 && ((f = this._hass) == null || f.callWS({
      type: "fire_event",
      event_type: Tf,
      event_data: { action: l, ...o }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const o = `config/automation/config/${Kd}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (v) {
        if ((v == null ? void 0 : v.status_code) !== 404 && (v == null ? void 0 : v.status) !== 404) throw v;
      }
      return;
    }
    const d = (v) => `${v}:00`, f = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: Kd,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: d(l.times.morning), id: "morning" },
        { trigger: "time", at: d(l.times.evening), id: "evening" }
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
    const o = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(o.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(l) {
    var d;
    const o = (d = this.shadowRoot) == null ? void 0 : d.getElementById("toast");
    o && (o.textContent = l, o.classList.add("show"), setTimeout(() => o.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Af), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Cf} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
