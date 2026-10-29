const Mu = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#fbf9f6;--color-text-on-selected:#26221e;--color-bg-segment-selected:#fbf9f6;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Cu = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;align-items:start}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDac{grid-column:span 2;min-width:0}.tfDac>dual-controller-v3{display:block}.tfMoreActions .tfDac{grid-column:auto}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);font:400 24px/1 var(--font);cursor:pointer}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px;height:38px;padding:3px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:9px 4px 4px 9px}.tfBlocks>span:nth-child(4){border-radius:4px 9px 9px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 12px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:38px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:3px;bottom:3px;left:3px;border-radius:9px;background:var(--primary)}.tfTilt span{position:relative;padding:0 15px;color:var(--text);font:600 12px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns{display:flex;gap:12px}.tfCoverBtns button{flex:1;display:grid;place-items:center;height:38px;min-width:0;min-height:0;padding:0;border:0;border-radius:12px;background:var(--tile);color:var(--text);cursor:pointer}.tfCoverBtns button:disabled{opacity:.38;cursor:default}.tfCoverBtns svg{display:block;width:22px;height:22px}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}.tfMore .tfCoverBtns{gap:8px}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:640px}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px;align-items:start}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:flex;align-items:center;gap:12px;min-width:0;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}.tfDashTiles>.tfAction{justify-content:space-between}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%}#app.tfBoard .tfDashTiles>.tfAction{padding-block:18px}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}', Su = '.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:clamp(8px,calc(5.6cqw * var(--wb-k,1)),14px);aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:clamp(12px,calc(7.9cqw * var(--wb-k,1)),20px);border-radius:clamp(22px,calc(11.1cqw * var(--wb-k,1)),28px);overflow:hidden}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbHead{gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px)}.wbSquare .wbChip{width:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);height:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);border-radius:clamp(12px,calc(6.3cqw * var(--wb-k,1)),16px);--wb-icon:clamp(18px,calc(9.5cqw * var(--wb-k,1)),24px)}.wbSquare .wbName{font-size:clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px);line-height:1.4}.wbSquare .wbSub{font-size:clamp(13px,calc(6.3cqw * var(--wb-k,1)),16px)}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:clamp(6px,calc(4cqw * var(--wb-k,1)),10px)}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:20px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 480px){.wbCard.wbWeather{gap:16px;padding:var(--inset)}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbStripScroll{min-height:150px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}@container wb-card (width < 220px){.wbMoonCaption{display:none}}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}', Tu = `<main id="app"><div class="shell">
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
}, Qn = (a) => a < 0 ? 0 : a > 1 ? 1 : a, Yd = (a, l, o) => a + (l - a) * o, dd = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, Lu = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Zd = {}, jt = (a, l, o) => {
  const c = a + l + o;
  return Zd[c] || (Zd[c] = Lu(dd(a).map((m, g) => m + (dd(l)[g] - m) * o)));
}, Kd = {}, il = (a) => Kd[a] || (Kd[a] = dd(a)), Gl = (a, l, o, c) => (m) => {
  if (m <= 0) return 0;
  if (m >= 1) return 1;
  let g = 0, v = 1, L = m;
  for (let w = 0; w < 18; w++)
    L = (g + v) / 2, 3 * (1 - L) * (1 - L) * L * a + 3 * (1 - L) * L * L * o + L * L * L < m ? g = L : v = L;
  return 3 * (1 - L) * (1 - L) * L * l + 3 * (1 - L) * L * L * c + L * L * L;
}, Au = { std: Gl(0.2, 0, 0, 1), acc: Gl(0.3, 0, 1, 1), dec: Gl(0, 0, 0, 1) };
function pl(a, l) {
  const o = String(a || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || l ? "night" : "day");
}
function Oc(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [jt(l.clear[0], l.cloudy[0], 0.12), jt(l.clear[1], l.cloudy[1], 0.12)], l.storm = [jt(l.rain[0], "#000000", 0.22), jt(l.rain[1], "#000000", 0.22)], l;
}
const cd = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], ud = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], pd = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function hd(a, l = ea) {
  const o = { ...ea, ...l }, c = Oc(o), m = String(a).split("/"), g = c[m[0]] ? m[0] : "clear", v = m[1] === "night", L = c[g][v ? 1 : 0], w = {
    night: v,
    clearness: g === "clear" ? 1 : g === "partly" ? 0.7 : 0.25,
    sky: L,
    skyStops: [L],
    skyT: 0,
    sun: { x: 45, y: v ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: v ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: v ? 1 : 0 },
    stars: cd.map(() => ({ o: 0 })),
    rain: ud.map(() => ({ o: 0, dy: -16 })),
    snow: pd.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, P = (re) => cd.map(() => ({ o: re }));
  return g === "clear" ? v ? (w.moon.o = 1, w.stars = P(1)) : w.sun.o = 1 : g === "partly" ? (w.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: v ? 1 : 0 }, v ? (w.moon = { x: 34, y: 33, d: 48, o: 1 }, w.stars = P(0.7)) : w.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : g === "cloudy" || g === "fog" ? (w.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: v ? 1 : 0 }, v ? w.moon = { x: 40, y: 36, d: 40, o: 0 } : w.sun = { x: 40, y: 36, r: 20, o: 0 }) : (w.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, v ? w.moon = { x: 38, y: 28, d: 36, o: 0 } : w.sun = { x: 38, y: 28, r: 18, o: 0 }, g === "snow" ? w.snow = pd.map(() => ({ o: 1, dy: 0 })) : w.rain = ud.map((re, ne) => ({ o: g === "storm" && ne === 1 ? 0 : 1, dy: 0 })), g === "storm" && (w.bolt = { o: 1, dy: 0 })), w;
}
const $d = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function _u(a, l, o, c = ea, m = !1) {
  const g = { ...ea, ...c }, v = (F, q) => F > 0.01 && q > 0.01 ? "stay" : F > 0.01 ? "leave" : q > 0.01 ? "enter" : "none", L = (F, q, $, te) => {
    const U = F[0] + q * te, W = F[1] - ($ - 1 - q) * te;
    return Au[F[2]](Qn((o - U) / Math.max(1e-3, W - U)));
  }, w = (F, q, $, te = 0, U = 1, W = 0) => {
    const X = v(F.o, q.o);
    if (X === "none") return { ...q, o: 0 };
    const G = L($d[$][X], te, U, W), Z = {};
    for (const Q in q) Z[Q] = m && X !== "stay" && Q !== "o" ? X === "leave" ? F[Q] : q[Q] : Yd(F[Q], q[Q], G);
    return Z;
  }, P = L($d.sky, 0, 1, 0);
  let re, ne;
  if (a.night !== l.night) {
    const F = Math.min(a.clearness, l.clearness), q = jt(jt(a.sky, l.sky, 0.5), g.dusk, 0.6 * F);
    re = P < 0.5 ? jt(a.sky, q, P * 2) : jt(q, l.sky, P * 2 - 1), ne = F > 0.5 ? [a.sky, g.dusk, l.sky] : [a.sky, l.sky];
  } else
    re = jt(a.sky, l.sky, P), ne = [a.sky, l.sky];
  return {
    night: o < 0.5 ? a.night : l.night,
    clearness: Yd(a.clearness, l.clearness, o),
    sky: re,
    skyStops: ne,
    skyT: P,
    sun: w(a.sun, l.sun, "body"),
    moon: w(a.moon, l.moon, "body"),
    cloud: w(a.cloud, l.cloud, "cloud"),
    stars: l.stars.map((F, q) => w(a.stars[q], F, "fx", q, l.stars.length, 0.05)),
    rain: l.rain.map((F, q) => w(a.rain[q], F, "fx", q, l.rain.length, 0.05)),
    snow: l.snow.map((F, q) => w(a.snow[q], F, "fx", q, l.snow.length, 0.05)),
    bolt: w(a.bolt, l.bolt, "fx")
  };
}
const Eu = [
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
], Jn = (a, l) => (Eu[(l & 7) * 8 + (a & 7)] + 0.5) / 64, Du = 0, gd = 1, vd = 2, bd = 3, wd = 4, Xn = 5, xr = 6, di = 7, xd = 8, ll = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), Ru = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Nu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((a) => [a[0] * 13 / 11, a[1] * 28 / 24]), qc = (a, l, o) => {
  let c = !1;
  for (let m = 0, g = a.length - 1; m < a.length; g = m++) {
    const v = a[m], L = a[g];
    v[1] > o != L[1] > o && l < (L[0] - v[0]) * (o - v[1]) / (L[1] - v[1]) + v[0] && (c = !c);
  }
  return c;
};
function Wc(a, { size: l = 90, px: o = 2, oneBit: c = !1, colors: m = ea, ink: g = "#26221e", paper: v = "#fbf9f6", clock: L = 0, idle: w = !1 } = {}) {
  const P = { ...ea, ...m }, re = Math.sin, ne = Math.PI * 2, F = Math.max(6, Math.round(l / o)), q = F / 90, $ = w ? Math.floor(L / 100) * 100 : 0, te = w ? re(ne * $ / 3600) : 0, U = w ? 1.8 * re(ne * $ / 6400) : 0, W = w ? 0.9 * re(ne * $ / 4100) : 0, X = w ? 0.8 * re(ne * $ / 5200) : 0, G = $ / 3400 % 1, Z = w && a.bolt.o > 0.5 && (G < 0.04 || G > 0.08 && G < 0.11), Q = new Array(F * F), _ = new Uint8Array(F * F), j = (k, E, C, N, ce) => {
    C == null || k < 0 || E < 0 || k >= F || E >= F || (N >= 1 || N > Jn(k + 5, E + 3)) && (Q[E * F + k] = C, _[E * F + k] = ce);
  }, ge = (k, E, C, N) => {
    for (let ce = Math.max(0, Math.floor(E - C) - 1); ce <= Math.min(F - 1, E + C + 1); ce++) for (let V = Math.max(0, Math.floor(k - C) - 1); V <= Math.min(F - 1, k + C + 1); V++) N(V, ce, V + 0.5 - k, ce + 0.5 - E);
  }, Te = a.skyStops || [a.sky], b = a.skyT || 0;
  for (let k = 0; k < F; k++) {
    const E = a.night ? Qn(1 - (k + 0.5) / (F * 0.7)) * 0.85 : Qn(((k + 0.5) / F - 0.35) / 0.65) * 0.85;
    for (let C = 0; C < F; C++) {
      let N = Te[0];
      if (Te.length > 1) {
        const ce = b * (Te.length - 1), V = Math.min(Te.length - 2, Math.floor(ce));
        N = ce - V > Jn(C, k) ? Te[V + 1] : Te[V];
      }
      E > Jn(C + 2, k + 5) && (N = a.night ? jt(N, "#000000", 0.28) : jt(N, "#ffffff", 0.2)), Q[k * F + C] = Z ? jt(N, "#ffffff", 0.25) : N;
    }
  }
  if (a.sun.o > 0.01) {
    const k = a.sun.x * q, E = a.sun.y * q, C = Math.max(1, a.sun.r * q);
    if (w) {
      const N = C * (1.45 + 0.06 * te), ce = jt(P.sun, "#ffffff", 0.55);
      if (ge(k, E, N, (V, ae, le, me) => {
        const We = Math.sqrt(le * le + me * me);
        We > C && We < N && j(V, ae, ce, 0.26 * (1 - (We - C) / (N - C)) * a.sun.o, Du);
      }), a.sun.o > 0.5) {
        const V = Math.floor($ / 500) % 2, ae = Math.max(1, C * 0.22);
        for (let le = 0; le < 8; le++) if (le % 2 === V) for (let me = C + 1.5; me < C + 1.5 + ae; me += 0.7) j(Math.floor(k + Math.cos(le * Math.PI / 4) * me), Math.floor(E + Math.sin(le * Math.PI / 4) * me), P.sun, a.sun.o, xd);
      }
    }
    ge(k, E, C, (N, ce, V, ae) => {
      if (V * V + ae * ae > C * C) return;
      const le = ((V * 0.643 + ae * 0.766) / C + 1) / 2;
      j(N, ce, Qn((le - 0.62) / 0.38) > Jn(N, ce) ? P.sunEdge : P.sun, a.sun.o, gd);
    });
  }
  if (cd.forEach((k, E) => {
    const C = a.stars[E].o;
    if (C < 0.01) return;
    const N = Math.floor(k[0] * q), ce = Math.floor(k[1] * q), V = w ? (Math.floor($ / 300) + E * 3) % 6 : 0;
    if (V === 5) return;
    const ae = Math.round(k[2] * q * (V === 4 ? 0.3 : V < 2 ? 1 : 0.6));
    j(N, ce, P.star, C, di);
    for (let le = 1; le <= ae; le++) {
      const me = le === ae && ae > 1 ? jt(P.star, a.sky, 0.5) : P.star;
      j(N - le, ce, me, C, di), j(N + le, ce, me, C, di), j(N, ce - le, me, C, di), j(N, ce + le, me, C, di);
    }
  }), a.moon.o > 0.01) {
    const k = Math.max(1.5, a.moon.d * q * 0.37), E = a.moon.x * q, C = a.moon.y * q + (w && X > 0.4 ? -1 : 0), N = E + 0.547 * k, ce = C - 0.503 * k, V = 0.82 * k, ae = jt(P.moon, "#ffffff", 0.6);
    ge(E, C, k, (le, me, We, tt) => {
      if (We * We + tt * tt > k * k) return;
      const xt = le + 0.5 - N, vn = me + 0.5 - ce;
      xt * xt + vn * vn <= V * V || j(le, me, Qn((tt + k) / (2 * k) * 1.1 - 0.1) > Jn(le, me) ? P.moon : ae, a.moon.o, vd);
    });
  }
  const be = Math.max(2, Math.round(15.65 * q)), Ce = Math.max(1, Math.round(5.87 * q * 0.5));
  ud.forEach((k, E) => {
    const C = a.rain[E];
    let N = C.dy, ce = C.o;
    if (ce < 0.01) return;
    if (w) {
      const le = ($ / 950 + E / 3) % 1;
      N += -5 + le * 14, ce *= le < 0.18 ? le / 0.18 : le > 0.72 ? (1 - le) / 0.28 : 1;
    }
    const V = (k[0] + 3 + U) * q, ae = (k[1] + N) * q;
    for (let le = 0; le < be; le++) for (let me = 0; me < Ce; me++) j(Math.floor(V - 0.208 * le) + me, Math.floor(ae) + le, P.rain, ce, wd);
  });
  const Oe = Math.max(0, Math.round(7.34 * q / 2.6));
  if (pd.forEach((k, E) => {
    const C = a.snow[E];
    let N = C.dy, ce = 0, V = C.o;
    if (V < 0.01) return;
    if (w) {
      const me = ($ / 3200 + E / 5) % 1;
      N += -6 + me * 14, ce = 1.5 * re(ne * (me * 1.5 + E / 5)), V *= me < 0.2 ? me / 0.2 : me > 0.75 ? (1 - me) / 0.25 : 1;
    }
    const ae = Math.floor((k[0] + 3.67 + ce + U) * q), le = Math.floor((k[1] + 3.67 + N) * q);
    j(ae, le, P.snow, V, Xn);
    for (let me = 1; me <= Oe; me++)
      j(ae - me, le, P.snow, V, Xn), j(ae + me, le, P.snow, V, Xn), j(ae, le - me, P.snow, V, Xn), j(ae, le + me, P.snow, V, Xn), Oe > 1 && me < Oe && (j(ae - me, le - me, P.snow, V, Xn), j(ae + me, le - me, P.snow, V, Xn), j(ae - me, le + me, P.snow, V, Xn), j(ae + me, le + me, P.snow, V, Xn));
  }), a.bolt.o > 0.01)
    if (F >= 30) {
      const k = 39 + U, E = 50 + a.bolt.dy;
      for (let C = Math.floor(E * q); C <= (E + 28) * q; C++) for (let N = Math.floor(k * q); N <= (k + 13) * q; N++)
        qc(Nu, (N + 0.5) / q - k, (C + 0.5) / q - E) && j(N, C, P.sun, a.bolt.o, xr);
    } else {
      const k = F / 18, E = 7, C = 10 + Math.round(a.bolt.dy * 0.2);
      Ru.forEach((N, ce) => N.split("").forEach((V, ae) => {
        if (V !== "#") return;
        const le = Math.floor((E + ae) * k), me = Math.floor((C + ce) * k);
        for (let We = me; We < Math.max(me + 1, Math.floor((C + ce + 1) * k)); We++) for (let tt = le; tt < Math.max(le + 1, Math.floor((E + ae + 1) * k)); tt++) j(tt, We, P.sun, a.bolt.o, xr);
      }));
    }
  if (a.cloud.o > 0.01) {
    const k = Math.max(3, a.cloud.w * q), E = k * 0.6665, C = (a.cloud.x + U) * q - k / 2, N = (a.cloud.y + W) * q - E / 2, ce = jt(P.cloudDay, P.cloudNight, Math.round(a.cloud.f * 4) / 4), V = jt(ce, "#000000", 0.16);
    for (let ae = Math.max(0, Math.floor(N) - 1); ae <= Math.min(F - 1, N + E + 1); ae++) for (let le = Math.max(0, Math.floor(C) - 1); le <= Math.min(F - 1, C + k + 1); le++) {
      const me = (le + 0.5 - C) / k, We = (ae + 0.5 - N) / k;
      ll(me, We) && j(le, ae, !ll(me, We + 1 / k) || Qn((We - 0.42) / 0.25) * 0.8 > Jn(le, ae) ? V : ce, a.cloud.o, bd);
    }
  }
  return Vc(Q, _, F, F, { oneBit: c, ink: g, paper: v, snowInk: !a.night });
}
function Vc(a, l, o, c, { oneBit: m, ink: g, paper: v, snowInk: L }) {
  const w = new Uint8ClampedArray(o * c * 4), P = il(g), re = il(v);
  for (let ne = 0; ne < c; ne++) for (let F = 0; F < o; F++) {
    const q = ne * o + F, $ = l[q];
    if (a[q] == null) continue;
    let te = il(a[q]);
    if (m) {
      let U;
      $ === wd || $ === xd ? U = !0 : $ === Xn ? U = L : $ === di || $ === xr ? U = !1 : U = Math.round((0.2126 * te[0] + 0.7152 * te[1] + 0.0722 * te[2]) / 255 * 4) / 4 <= Jn(F, ne), ($ === gd || $ === vd || $ === bd || $ === xr) && (F > 0 && l[q - 1] !== $ || F < o - 1 && l[q + 1] !== $ || ne > 0 && l[q - o] !== $ || ne < c - 1 && l[q + o] !== $) && (U = !0), te = U ? P : re;
    }
    w[q * 4] = te[0], w[q * 4 + 1] = te[1], w[q * 4 + 2] = te[2], w[q * 4 + 3] = 255;
  }
  return { w: o, h: c, data: w };
}
const Bu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Pu = (a) => pl(a, !1).split("/")[0], Ul = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Iu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Hu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Fu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Ou = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", qu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Wu = [".##", "##.", ".#.", "#.."];
function zc(a, { width: l, height: o, colors: c, wave: m = 0.38, soft: g = 6, glow: v = 0.6 }) {
  const L = { ...ea, dawn: "#e5a77e", ...c }, w = Oc(L), P = l, re = o, ne = P / 6, F = ne / 2, q = Math.PI * 2, $ = a.length ? a : [{ cond: "cloudy", night: !1 }], te = [...Array(12)].map((G, Z) => {
    const Q = $[Math.min(Z, $.length - 1)], _ = Pu(Q.cond), j = Z % 2 === 1;
    return { cond: Q.cond, k: _, night: j, sky: w[_][j ? 1 : 0], cover: Bu[_] };
  }), U = (G) => re * (0.5 - m * Math.cos(q * (G / ne - 0.25)));
  return { C: L, S: te, W: P, H: re, cw: ne, sw: F, TAU: q, yb: U, side: (G, Z, Q) => {
    const _ = (G ? U(Z) - Q : Q - U(Z)) / Math.max(3, g * 1.4) + 0.5;
    return _ <= 0 ? 0 : _ >= 1 ? 1 : _;
  }, glowAt: (G) => {
    const Z = ((G / ne - 0.25) % 1 + 1) % 1, Q = Math.max(0, Math.min(5, Math.round(G / ne - 0.25))), _ = Math.max(0, Math.min(5, Math.round(G / ne - 0.75))), j = 1 - (te[2 * Q].cover + te[2 * _ + 1].cover) / 2, ge = Math.sin(Math.PI * Math.min(1, Math.max(0, U(G) / re)));
    return { c: Z < 0.5 ? L.dusk : L.dawn, a: v * (0.2 + 0.8 * j) * ge * ge };
  }, soft: g, tw: ne * 0.3, sy: re / 90 };
}
function jc(a, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: g, side: v, C: L, TAU: w, sy: P } = a, re = l, ne = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((F, q) => {
    const $ = Ul(c * 977 + q * 131 + 7), te = (q + 0.5) * g, U = F.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[F.k] : 0;
    for (let W = 0; W < U; W++) {
      const X = te + ($() - 0.5) * g * 1.6, G = (6 + $() * 76) * P, Z = $() < 0.35, Q = 1.8 + $() * 1.6, _ = v(!0, X, G) * (Z ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(w * re / 2600 + W * 1.7 + q) : 1);
      _ >= 0.03 && ne.stars.push({ x: X, y: G, big: Z, size: Q, o: _ });
    }
    if (!F.night && (F.k === "clear" || F.k === "partly")) {
      const W = te + ($() - 0.5) * g * 0.3, X = Math.min(15, g * 0.29);
      ne.suns.push({ x: W, y: 32 * P, rad: X, halo: X * 2.8 * (o ? 1 + 0.07 * Math.sin(w * re / 3600 + q) : 1) });
    }
    if (F.night && (F.k === "clear" || F.k === "partly")) {
      const W = Math.min(0.78, g * 0.55 / 34), X = te - 23 * W + ($() - 0.5) * g * 0.2;
      ne.moons.push({ x: X + 23 * W, y: (4 + (o ? 0.8 * Math.sin(w * re / 5200 + q) : 0)) * P + 23 * W, d: 46 * W });
    }
  }), m.forEach((F, q) => {
    const $ = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[F.k];
    if (!$) return;
    const te = Ul(c * 577 + q * 71 + 3), U = (q + 0.5) * g, W = F.k === "rain" || F.k === "storm" || F.night ? L.cloudNight : L.cloudDay, X = F.night ? 0.82 : F.k === "storm" ? 0.75 : 1;
    for (let G = 0; G < $; G++) {
      const Z = g / 46 * (F.k === "partly" ? 0.85 : 0.75 + te() * 0.55), Q = U + (F.k === "partly" ? g * 0.12 : (te() - 0.5) * g * 1.05), _ = (F.k === "partly" ? 40 : 6 + te() * 26) * P, j = o ? 2.5 * Math.sin(w * re / 9e3 + q * 1.3 + G * 2.1) : 0, ge = o ? 0.9 * Math.sin(w * re / 6100 + q + G) : 0;
      ne.clouds.push({ x: Q - 23 * Z + j, y: _ - 15.33 * Z + ge, w: 46 * Z, h: 30.66 * Z, fill: W, o: X * ($ > 1 && G === 0 ? 0.85 : 1) });
    }
  }), m.forEach((F, q) => {
    const $ = Ul(c * 313 + q * 29 + 11), te = (q + 0.5) * g, U = F.cond === "pouring" ? 16 : F.cond === "rainy" || F.cond === "hail" ? 9 : F.cond === "lightning-rainy" ? 12 : F.cond === "snowy-rainy" ? 5 : 0;
    for (let X = 0; X < U; X++) {
      let G = te + ($() - 0.5) * g * 1.05, Z = 44 + $() * 36, Q = 1;
      if (o) {
        const j = ((Z - 44 + re * 0.04) % 36 + 36) % 36;
        G -= 0.21 * (j - (Z - 44)), Z = 44 + j, Q = Math.min(1, j / 6, (36 - j) / 6);
      }
      Z *= P;
      const _ = v(F.night, G, Z) * Q;
      _ >= 0.05 && ne.drops.push({ x: G, y: Z, o: _ });
    }
    const W = F.cond === "snowy" ? 11 : F.cond === "snowy-rainy" ? 6 : 0;
    for (let X = 0; X < W; X++) {
      let G = te + ($() - 0.5) * g * 1.05, Z = 40 + $() * 44, Q = 1;
      if (o) {
        const j = ((Z - 40 + re * 9e-3) % 44 + 44) % 44;
        Z = 40 + j, G += 1.6 * Math.sin(w * re / 2800 + X * 1.9 + q), Q = Math.min(1, j / 6, (44 - j) / 6);
      }
      Z *= P;
      const _ = v(F.night, G, Z) * Q;
      _ >= 0.05 && ne.flakes.push({ x: G, y: Z, o: _ });
    }
    if (F.k === "fog") {
      const X = F.night ? "#c8ccd6" : "#ffffff", G = F.night ? 0.28 : 0.62, Z = o ? 4 * Math.sin(w * re / 8e3 + q) : 0;
      for (let Q = 0; Q < 4; Q++) ne.fogs.push({ x: te - g * 0.75 + Q % 2 * g * 0.18 + (Q % 2 ? Z : -Z), y: (30 + Q * 13) * P, w: g * 1.3, c: X, a: G });
    }
    if (F.k === "storm") {
      const X = (re / 3400 + q * 0.37) % 1;
      ne.bolts.push({ x: te + ($() - 0.5) * g * 0.3 - 5, y: 36 * P, o: o && !(X < 0.05 || X > 0.09 && X < 0.12) ? 0.8 : 1 });
    }
  }), ne;
}
function Vu(a, l, o, c, m, g, v, L) {
  const { S: w, C: P, cw: re, yb: ne, glowAt: F, soft: q, tw: $, sy: te } = a, U = new Array(o * c), W = new Uint8Array(o * c), X = new Uint8Array(o * c), G = (k, E, C, N, ce) => {
    C == null || k < 0 || E < 0 || k >= o || E >= c || (N >= 1 || N > Jn(k + 5, E + 3)) && (U[E * o + k] = C, W[E * o + k] = ce);
  }, Z = (k, E, C, N) => {
    for (let ce = Math.max(0, Math.floor(E - C) - 1); ce <= Math.min(c - 1, E + C + 1); ce++) for (let V = Math.max(0, Math.floor(k - C) - 1); V <= Math.min(o - 1, k + C + 1); V++) N(V, ce, V + 0.5 - k, ce + 0.5 - E);
  }, Q = (k, E, C) => {
    for (let ce = 0; ce < k.length - 1; ce++) {
      const V = (ce + E) * re;
      if (C < V - $ / 2) return [k[ce], k[ce], 0];
      if (C <= V + $ / 2) return [k[ce], k[ce + 1], (C - V + $ / 2) / $];
    }
    const N = k[k.length - 1];
    return [N, N, 0];
  }, _ = w.filter((k) => !k.night).map((k) => k.sky), j = w.filter((k) => k.night).map((k) => k.sky), ge = q / g, Te = 16 * te / g;
  for (let k = 0; k < o; k++) {
    const E = (k + 0.5) * m, C = ne(E) / g, N = Q(_, 0.75, E), ce = Q(j, 1.25, E), V = F(E);
    for (let ae = 0; ae < c; ae++) {
      const le = Jn(k, ae), me = ae + 0.5 - C, We = (ge > 0.01 ? Qn(0.5 + me / ge) : me > 0 ? 1 : 0) > le;
      let tt = We ? N[2] > le ? N[1] : N[0] : ce[2] > le ? ce[1] : ce[0];
      (We ? Qn(((ae + 0.5) / c - 0.45) / 0.55) * 0.7 : Qn(1 - (ae + 0.5) / (c * 0.55)) * 0.7) > Jn(k + 2, ae + 5) && (tt = We ? jt(tt, "#ffffff", 0.18) : jt(tt, "#000000", 0.25)), We && me >= 0 && me < Te && V.a * 1.3 * (1 - me / Te) > Jn(k + 6, ae + 1) && (tt = V.c), U[ae * o + k] = tt, X[ae * o + k] = We ? 0 : 1;
    }
  }
  const b = jt(P.sun, "#ffffff", 0.55), be = jt(P.moon, "#ffffff", 0.6);
  l.stars.forEach((k) => {
    const E = Math.floor(k.x / m), C = Math.floor(k.y / g);
    if (E < 0 || C < 0 || E >= o || C >= c || !X[C * o + E] || k.o < 0.15) return;
    const N = k.o > 0.45 ? P.star : jt(P.star, U[C * o + E], 0.5), ce = k.big && k.o > 0.6 ? Math.floor(k.size / m) : 0;
    G(E, C, N, 1, di);
    for (let V = 1; V <= ce; V++) [[E - V, C], [E + V, C], [E, C - V], [E, C + V]].forEach((ae) => {
      ae[0] >= 0 && ae[1] >= 0 && ae[0] < o && ae[1] < c && X[ae[1] * o + ae[0]] && G(ae[0], ae[1], N, 1, di);
    });
  }), l.suns.forEach((k) => {
    const E = Math.max(1.5, k.rad / m), C = k.x / m, N = k.y / g, ce = k.halo / m * 0.85;
    if (Z(C, N, ce, (V, ae, le, me) => {
      const We = Math.sqrt(le * le + me * me);
      We > E && We < ce && !X[ae * o + V] && G(V, ae, b, 0.3 * (1 - (We - E) / (ce - E)), 0);
    }), L) {
      const V = Math.floor(v / 500) % 2, ae = Math.max(1, E * 0.3);
      for (let le = 0; le < 8; le++) if (le % 2 === V) for (let me = E + 1.2; me < E + 1.2 + ae; me += 0.7) G(Math.floor(C + Math.cos(le * Math.PI / 4) * me), Math.floor(N + Math.sin(le * Math.PI / 4) * me), P.sun, 1, xd);
    }
    Z(C, N, E, (V, ae, le, me) => {
      le * le + me * me <= E * E && G(V, ae, Qn(((me / E + 1) / 2 - 0.6) / 0.4) > Jn(V, ae) ? P.sunEdge : P.sun, 1, gd);
    });
  }), l.moons.forEach((k) => {
    const E = Math.max(1.5, k.d * 0.37 / m), C = k.x / m, N = k.y / g, ce = C + 0.547 * E, V = N - 0.503 * E, ae = 0.82 * E;
    Z(C, N, E, (le, me, We, tt) => {
      if (We * We + tt * tt > E * E) return;
      const xt = le + 0.5 - ce, vn = me + 0.5 - V;
      xt * xt + vn * vn > ae * ae && G(le, me, Qn((tt + E) / (2 * E) * 1.1 - 0.1) > Jn(le, me) ? P.moon : be, 1, vd);
    });
  }), l.clouds.forEach((k) => {
    const E = Math.max(3, k.w / m), C = E * 0.6665, N = k.x / m, ce = k.y / g, V = jt(k.fill, "#000000", 0.16);
    for (let ae = Math.max(0, Math.floor(ce) - 1); ae <= Math.min(c - 1, ce + C + 1); ae++) for (let le = Math.max(0, Math.floor(N) - 1); le <= Math.min(o - 1, N + E + 1); le++) {
      const me = (le + 0.5 - N) / E, We = (ae + 0.5 - ce) / E;
      ll(me, We) && G(le, ae, !ll(me, We + 1 / E) || Qn((We - 0.42) / 0.25) * 0.8 > Jn(le, ae) ? V : k.fill, k.o, bd);
    }
  }), l.fogs.forEach((k) => {
    const E = Math.floor(k.y / g), C = Math.max(E, Math.floor((k.y + 6 * te) / g) - 1), N = Math.floor(k.x / m), ce = Math.floor((k.x + k.w) / m);
    for (let V = E; V <= C; V++) for (let ae = N; ae <= ce; ae++) {
      const le = (ae - N) / Math.max(1, ce - N);
      G(ae, V, k.c, k.a * (le < 0.25 ? le / 0.25 : le > 0.75 ? (1 - le) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / g));
  l.drops.forEach((k) => {
    const E = k.x / m, C = Math.floor(k.y / g);
    for (let N = 0; N < Ce; N++) G(Math.floor(E - 0.208 * N * g / m), C + N, P.rain, k.o, wd);
  });
  const Oe = Math.max(0, Math.round(4.4 / m / 2.6));
  return l.flakes.forEach((k) => {
    const E = Math.floor(k.x / m), C = Math.floor(k.y / g);
    G(E, C, P.snow, k.o, Xn);
    for (let N = 1; N <= Oe; N++)
      G(E - N, C, P.snow, k.o, Xn), G(E + N, C, P.snow, k.o, Xn), G(E, C - N, P.snow, k.o, Xn), G(E, C + N, P.snow, k.o, Xn);
  }), l.bolts.forEach((k) => {
    if (m <= 3.5)
      for (let E = Math.floor(k.y / g); E <= (k.y + 24) / g; E++) for (let C = Math.floor(k.x / m); C <= (k.x + 11) / m; C++)
        qc(qu, (C + 0.5) * m - k.x, (E + 0.5) * g - k.y) && G(C, E, P.sun, 1, xr);
    else {
      const E = Math.round(k.x / m), C = Math.round(k.y / g);
      Wu.forEach((N, ce) => N.split("").forEach((V, ae) => {
        V === "#" && G(E + ae, C + ce, P.sun, 1, xr);
      }));
    }
  }), { col: U, ids: W };
}
function zu(a, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), m = Math.max(6, Math.round(l.height / o)), g = l.width / c, v = l.height / m, L = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, w = (q) => {
    const $ = zc(q, l);
    return Vu($, jc($, { clock: L, ambient: l.ambient, seed: l.seed }), c, m, g, v, L, l.ambient);
  }, P = w(a), re = l.reveal == null ? 1 : Qn(l.reveal);
  let ne = P.col, F = P.ids;
  if (re < 1) {
    const q = l.prev ? w(l.prev) : null, $ = re * (c + 12);
    ne = new Array(c * m), F = new Uint8Array(c * m);
    for (let te = 0; te < c * m; te++) {
      const U = te % c, W = te / c | 0;
      (l.reduce ? re : Qn(($ - U) / 12)) > Jn(U, W) ? (ne[te] = P.col[te], F[te] = P.ids[te]) : q ? (ne[te] = q.col[te], F[te] = q.ids[te]) : (ne[te] = null, F[te] = 255);
    }
  }
  return Vc(ne, F, c, m, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function ju(a, l, o) {
  const c = o.width, m = o.height, g = o.reveal == null ? 1 : Qn(o.reveal), v = (F, q) => {
    const $ = zc(q, o);
    Gu(F, $, jc($, o));
  };
  if (a.clearRect(0, 0, c, m), g >= 1) {
    v(a, l);
    return;
  }
  if (o.prev && v(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = g, v(a, l), a.restore();
    return;
  }
  const L = a.canvas, w = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (w.width !== L.width || w.height !== L.height) && (w.width = L.width, w.height = L.height);
  const P = w.getContext("2d");
  P.setTransform(a.getTransform()), P.clearRect(0, 0, c, m), v(P, l);
  const re = g * (c + 64) - 64, ne = P.createLinearGradient(re, 0, re + 64, 0);
  ne.addColorStop(0, "rgba(0,0,0,1)"), ne.addColorStop(1, "rgba(0,0,0,0)"), P.globalCompositeOperation = "destination-in", P.fillStyle = ne, P.fillRect(0, 0, c, m), P.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(w, 0, 0), a.restore();
}
function Gu(a, l, o) {
  const { W: c, H: m, S: g, C: v, cw: L, yb: w, glowAt: P, soft: re, tw: ne, sy: F } = l, q = (b, be) => {
    const Ce = il(b);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, be)).toFixed(3) + ")";
  }, $ = (b, be) => {
    const Ce = a.createLinearGradient(0, 0, c, 0);
    Ce.addColorStop(0, b[0]);
    for (let Oe = 0; Oe < b.length - 1; Oe++) {
      const k = (Oe + be) * L, E = (k - ne / 2) / c, C = (k + ne / 2) / c;
      E > 0 && E < 1 && Ce.addColorStop(E, b[Oe]), C > 0 && C < 1 && Ce.addColorStop(C, b[Oe + 1]);
    }
    return Ce.addColorStop(1, b[b.length - 1]), Ce;
  }, te = Math.max(24, Math.ceil(c / 4)), U = (b, be) => {
    a.beginPath();
    for (let Ce = 0; Ce <= te; Ce++) {
      const Oe = c * Ce / te, k = b == null ? 0 : w(Oe) + b;
      Ce ? a.lineTo(Oe, k) : a.moveTo(Oe, k);
    }
    for (let Ce = te; Ce >= 0; Ce--) {
      const Oe = c * Ce / te;
      a.lineTo(Oe, w(Oe) + be);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = $(g.filter((b) => !b.night).map((b) => b.sky), 0.75), a.fillRect(0, 0, c, m);
  const W = a.createLinearGradient(0, 0, c, 0);
  for (let b = 0; b <= 64; b++) {
    const be = P(c * b / 64);
    W.addColorStop(b / 64, q(be.c, Math.min(1, be.a)));
  }
  a.fillStyle = W;
  for (let b = 0; b < 8; b++)
    a.globalAlpha = 1 - b / 8, U(b * 2 * F, (b + 1) * 2 * F);
  a.fillStyle = $(g.filter((b) => b.night).map((b) => b.sky), 1.25);
  const X = Math.max(0.5, re), G = 6;
  a.globalAlpha = 1, U(null, -X);
  for (let b = 0; b < G; b++)
    a.globalAlpha = 1 - (b + 0.5) / G, U(-X + 2 * X * b / G, -X + 2 * X * (b + 1) / G);
  a.globalAlpha = 1;
  const Z = new Path2D(Fu), Q = new Path2D(Hu), _ = new Path2D(Iu), j = new Path2D(Ou);
  a.fillStyle = v.star, o.stars.forEach((b) => {
    a.globalAlpha = b.o, b.big ? (a.save(), a.translate(b.x, b.y), a.scale(b.size, b.size), a.fill(Z), a.restore()) : (a.beginPath(), a.arc(b.x, b.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const ge = jt(v.sun, "#ffffff", 0.55);
  o.suns.forEach((b) => {
    const be = a.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.halo);
    be.addColorStop(0, q(ge, 0.42)), be.addColorStop(0.7, q(ge, 0)), a.fillStyle = be, a.beginPath(), a.arc(b.x, b.y, b.halo, 0, Math.PI * 2), a.fill();
    const Ce = a.createLinearGradient(0, b.y - b.rad, 0, b.y + b.rad);
    Ce.addColorStop(0.6, v.sun), Ce.addColorStop(1, v.sunEdge), a.fillStyle = Ce, a.beginPath(), a.arc(b.x, b.y, b.rad, 0, Math.PI * 2), a.fill();
  });
  const Te = jt(v.moon, "#ffffff", 0.6);
  o.moons.forEach((b) => {
    a.save(), a.translate(b.x - b.d / 2, b.y - b.d / 2), a.scale(b.d / 46, b.d / 46);
    const be = a.createLinearGradient(0, 6, 0, 40);
    be.addColorStop(0, Te), be.addColorStop(1, v.moon), a.fillStyle = be, a.fill(Q), a.restore();
  }), o.clouds.forEach((b) => {
    a.save(), a.globalAlpha = b.o, a.translate(b.x, b.y), a.scale(b.w / 46, b.h / 30.66), a.translate(-4, -9.67), a.fillStyle = b.fill, a.fill(_), a.restore();
  }), o.fogs.forEach((b) => {
    const be = a.createLinearGradient(b.x, 0, b.x + b.w, 0);
    be.addColorStop(0, q(b.c, 0)), be.addColorStop(0.25, q(b.c, b.a)), be.addColorStop(0.75, q(b.c, b.a)), be.addColorStop(1, q(b.c, 0)), a.fillStyle = be, a.fillRect(b.x, b.y, b.w, 6 * F);
  }), a.fillStyle = v.rain, o.drops.forEach((b) => {
    a.save(), a.globalAlpha = b.o, a.translate(b.x, b.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = v.snow, o.flakes.forEach((b) => {
    a.globalAlpha = b.o, a.beginPath(), a.arc(b.x, b.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = v.sun, o.bolts.forEach((b) => {
    a.save(), a.globalAlpha = b.o, a.translate(b.x, b.y), a.fill(j), a.restore();
  }), a.restore();
}
function Uu(a, l) {
  var qd, Wd, Vd, zd, jd, Gd, Ud;
  const o = (t) => a.getElementById(t), c = o("workoutView"), m = o("workoutNameInput");
  let g = !0;
  const v = o("homeClock");
  function L() {
    v && (v.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  L(), setInterval(L, 15e3);
  const w = o("createFlow"), P = o("createMovementsSlot"), re = o("createTimingSlot"), ne = o("createFinishSlot"), F = o("movementStepSummary"), q = o("timingStepSummary"), $ = o("finishStepSummary"), te = o("continueToTiming"), U = o("continueToFinish"), W = o("finishMoveButton");
  let X = !1, G = [];
  function Z(t) {
    !t || G.some((i) => i.node === t) || G.push({ node: t, parent: t.parentNode, next: t.nextSibling });
  }
  function Q(t, i) {
    t && (Z(t), i.appendChild(t));
  }
  function _() {
    [...G].reverse().forEach(({ node: t, parent: i, next: s }) => {
      i && (s && s.parentNode === i ? i.insertBefore(t, s) : i.appendChild(t));
    }), G = [];
  }
  function j(t) {
    a.querySelectorAll(".createStep").forEach((i) => {
      i.classList.toggle("active", i.dataset.createStep === t);
    }), t === "timing" && (X = !0), ge();
  }
  function ge() {
    var oe, se;
    if (!lt) return;
    Ye[ht];
    const t = Je.filter((ee) => !ee.hidden), i = t.filter((ee) => ee.kind !== "rest").length, s = t.filter((ee) => ee.kind === "rest").length;
    F.textContent = i ? i + " movement" + (i === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const u = i > 0, f = a.querySelector('[data-open-step="timing"]'), M = a.querySelector('[data-open-step="finish"]');
    f.disabled = !u, te.disabled = !u, q.textContent = u ? Qt(E.value) + " · " + $t(C.value) + " movement · " + $t(N.value) + " rest" : "Add a movement first", M.disabled = !(u && X);
    const D = ((m == null ? void 0 : m.value) || "").trim(), z = [];
    (oe = o("includeWarmupPreset")) != null && oe.checked && z.push("warm-up"), (se = o("includeCooldownPreset")) != null && se.checked && z.push("cooldown"), $.textContent = D ? D + (z.length ? " · " + z.join(" + ") : "") : z.length ? z.join(" + ") : "Name and optional extras";
  }
  function Te() {
    var Se, Ue, _e;
    w.hidden = !1, X = !1;
    const t = a.querySelector(".editNameRow"), i = o("createMoveOptions"), s = a.querySelector(".timeTiles"), u = o("routineSummaryModal"), f = a.querySelector(".tempoRevealRow"), M = o("tempoExperiment"), D = (Se = o("warmupList")) == null ? void 0 : Se.closest("section"), z = o("movementCreatorLaunch"), oe = o("movementCreator"), se = (Ue = o("strengthList")) == null ? void 0 : Ue.closest("section"), ee = (_e = o("cooldownList")) == null ? void 0 : _e.closest("section");
    [i == null ? void 0 : i.querySelector(".createExtras"), D, z, oe, se, ee].forEach((Me) => Me && Q(Me, P)), [i, s, u, f, M].forEach((Me) => Q(Me, re)), Q(t, ne), j("movements"), ge();
  }
  function b() {
    _(), w.hidden = !0, a.querySelectorAll(".createStep").forEach((t) => t.classList.remove("active"));
  }
  a.querySelectorAll("[data-open-step]").forEach((t) => t.addEventListener("click", () => {
    t.disabled || j(t.dataset.openStep);
  })), te.addEventListener("click", () => {
    te.disabled || j("timing");
  }), U.addEventListener("click", () => j("finish")), W.addEventListener("click", () => o("saveWorkoutEdit").click());
  const be = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, Ce = o("homeNav"), Oe = o("settingsNav");
  function k(t) {
    Object.entries(be).forEach(([i, s]) => s.classList.toggle("active", i === t)), Ce.classList.toggle("active", t === "home"), Oe.classList.toggle("active", t === "settings"), t === "home" && setTimeout($i, 400), t === "settings" && (requestAnimationFrame(() => Ao(a.querySelector(".tab.active"), !1)), Ei());
  }
  const E = o("totalTime"), C = o("workTime"), N = o("restTime"), ce = o("totalOut"), V = o("workOut"), ae = o("restOut"), le = o("totalFill"), me = o("workFill"), We = o("restFill"), tt = o("roundsInput"), xt = o("roundsFill"), vn = o("roundsOut"), Dn = o("totalLabel"), Ft = o("routineSummaryModal"), Xe = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let St = Xe.map((t) => ({ ...t })), Je = [
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
  const bn = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let Cn = bn.map((t) => ({ ...t }));
  const Oi = {
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
  }, st = co(l.data), Ye = st.profiles;
  let ht = Ye[st.selected] ? st.selected : st.order.find((t) => Ye[t]) || "kettlebell";
  function co(t) {
    const i = t && typeof t == "object" ? JSON.parse(JSON.stringify(t)) : {}, s = i.profiles && Object.keys(i.profiles).length ? i.profiles : JSON.parse(JSON.stringify(Oi)), u = (Array.isArray(i.order) ? i.order : Object.keys(s)).filter((f) => s[f]);
    return Object.keys(s).forEach((f) => {
      u.includes(f) || u.push(f);
    }), {
      v: 1,
      profiles: s,
      order: u,
      selected: i.selected || u[0],
      history: Array.isArray(i.history) ? i.history : [],
      checkins: (Array.isArray(i.checkins) ? i.checkins : qi(i.energy)).map(ci),
      settings: { ...i.settings || {} }
    };
  }
  function qi(t) {
    if (!Array.isArray(t)) return [];
    const i = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return t.forEach((u) => {
      const f = new Date(u.at);
      if (isNaN(f)) return;
      const M = f.getFullYear() + "-" + String(f.getMonth() + 1).padStart(2, "0") + "-" + String(f.getDate()).padStart(2, "0"), D = f.getHours() < 14 ? "morning" : "evening";
      if (s.some((oe) => oe.date === M && oe.slot === D)) return;
      const z = i.indexOf(u.value) + 1;
      z > 0 && s.push({ date: M, slot: D, mood: null, energy: z, at: u.at });
    }), s;
  }
  function ci(t) {
    if (t.scale === 100) return t;
    const i = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...t, mood: i(t.mood), energy: i(t.energy), scale: 100 };
  }
  function wn() {
    lt || (st.selected = ht, st.order = st.order.filter((t) => Ye[t] && t !== vt), l.save(st));
  }
  function nt() {
    return st.settings;
  }
  function Vn(t) {
    const i = Ye[t];
    if (!i) return;
    ht = t;
    const s = o("workoutNameInput");
    if (s && (s.value = i.name), E.value = i.total, C.value = i.work, N.value = i.rest, tt.value = i.rounds || 1, i.customSequence) {
      const u = (i.sequence || []).map((M) => ({ ...M })), f = (M) => u.filter((D) => D.presetRole === M).map(({ presetRole: D, ...z }) => z);
      St = (i.warmup || f("warmup")).map((M) => ({ ...M })), Cn = (i.cooldown || f("cooldown")).map((M) => ({ ...M })), Je = u.filter((M) => !M.presetRole), ui(i.preset || "movement", !1);
    } else
      E.min = 3, E.max = 40, E.step = 1, C.min = 20, C.max = 60, C.step = 5, N.min = 5, N.max = 30, N.step = 5, St = (i.warmup || Xe).map((u) => ({ ...u })), Cn = (i.cooldown || bn).map((u) => ({ ...u })), Je = i.strength.map((u) => Array.isArray(u) ? (([f, M, D, z = !1]) => ({ id: f, name: M, group: D, kind: "work", hidden: !!z }))(u) : { ...u });
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === t)), T();
  }
  function Wi(t, i, s) {
    const u = t.getBoundingClientRect(), f = u.width / 2, M = u.height / 2, D = i - f, z = s - M;
    let oe = 1 / 0, se = 1 / 0;
    D !== 0 && (oe = f / Math.abs(D)), z !== 0 && (se = M / Math.abs(z));
    const ee = Math.min(Math.max(1 / Math.min(oe, se), 0), 1);
    let J = Math.atan2(z, D) * (180 / Math.PI) + 90;
    return J < 0 && (J += 360), { edge: ee, angle: J };
  }
  function mt(t, i, s = !1) {
    const u = t.getBoundingClientRect(), f = i.clientX - u.left, M = i.clientY - u.top, { edge: D, angle: z } = Wi(t, f, M), oe = s ? 100 : D * 100;
    t.style.setProperty("--edge-proximity", oe.toFixed(3)), t.style.setProperty("--cursor-angle", z.toFixed(3) + "deg"), t.classList.toggle("borderGlowActive", s || oe >= 30);
  }
  function Le(t) {
    t.addEventListener("pointermove", (s) => mt(t, s, !1)), t.addEventListener("pointerenter", (s) => mt(t, s, !1)), t.addEventListener("pointerdown", (s) => mt(t, s, !0));
    const i = () => {
      t.classList.remove("borderGlowActive"), t.style.setProperty("--edge-proximity", "0");
    };
    t.addEventListener("pointerleave", i), t.addEventListener("pointerup", i), t.addEventListener("pointercancel", i);
  }
  Le(o("addWorkoutPanel"));
  let lt = !1, vt = null;
  function He(t) {
    return String(t ?? "").replace(/[&<>"']/g, (i) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[i]);
  }
  function uo(t) {
    return t.summary ? t.summary : t.customSequence ? Qt(t.total) + " · custom move" : Qt(t.total) + " · " + $t(t.work) + " / " + $t(t.rest) + " · warm-up + cooldown";
  }
  function Ho(t, i) {
    var M;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = t, s.tabIndex = 0;
    const u = i.activityCount ?? (((M = i.sequence) == null ? void 0 : M.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + He(i.name) + '</div><div class="sub">' + He(uo(i)) + '</div><span class="sourceTag">' + He(i.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (u ? u + " activities" + ((i.rounds || 1) > 1 ? " × " + i.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + He(i.name) + "</div></div>";
    const f = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(s, f), Le(s), s.addEventListener("click", (D) => {
      D.target.closest("button") || Vn(t);
    }), s.addEventListener("keydown", (D) => {
      (D.key === "Enter" || D.key === " ") && !D.target.closest("button") && (D.preventDefault(), Vn(t));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (D) => {
      D.stopPropagation(), Vn(t), ma(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (D) => {
      D.stopPropagation(), Vn(t), Ms();
    }), s;
  }
  function Vi() {
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.remove()), st.order.forEach((t) => {
      Ye[t] && Ho(t, Ye[t]);
    }), a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.classList.toggle("active", t.dataset.workout === ht));
  }
  Vi(), o("addWorkoutPanel").addEventListener("keydown", (t) => {
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
    }, Vn(vt), ma(!0);
  });
  let Be = [], Ve = 0, Gt = 0, zn = 1, kn = !1, kt = null, po = null, Rt = !1, ta = st.settings.upcomingCount ?? "all", ho = "movement";
  function Ut(t, i, s) {
    return (Number(t) - i) / (s - i) * 100;
  }
  function $t(t) {
    const i = Math.max(0, Number(t) || 0);
    return i >= 3600 && i % 3600 === 0 ? i / 3600 + " hr" : i >= 60 && i % 60 === 0 ? i / 60 + " min" : i >= 60 ? Math.round(i / 60) + " min" : Math.round(i) + " sec";
  }
  function Qt(t) {
    const i = Math.max(0, Number(t) || 0);
    return i >= 60 && i % 60 === 0 ? i / 60 + " hr" : i >= 60 ? Math.floor(i / 60) + " hr " + i % 60 + " min" : i + " min";
  }
  function Yt() {
    le.style.width = Ut(E.value, Number(E.min), Number(E.max)) + "%", me.style.width = Ut(C.value, Number(C.min), Number(C.max)) + "%", We.style.width = Ut(N.value, Number(N.min), Number(N.max)) + "%", V.textContent = $t(C.value), ae.textContent = $t(N.value);
    const t = Number(tt.value) || 1;
    xt.style.width = Ut(t, 1, 10) + "%", Dn.textContent = t > 1 ? "Time per round" : "Total time";
  }
  function na(t) {
    return t.filter((i) => !i.hidden);
  }
  function bt(t) {
    const i = Math.max(0, Math.round(Number(t) || 0)), s = Math.floor(i / 3600), u = Math.floor(i % 3600 / 60), f = i % 60;
    return (s ? s + ":" + String(u).padStart(2, "0") : u) + ":" + String(f).padStart(2, "0");
  }
  function ha(t) {
    let i;
    try {
      i = new URL(String(t || "").trim());
    } catch {
      return null;
    }
    const s = i.hostname.replace(/^(www|m|music)\./, "");
    let u = null;
    if (s === "youtu.be") u = i.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(s))
      if (i.pathname === "/watch") u = i.searchParams.get("v");
      else {
        const z = i.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        z && (u = z[2]);
      }
    if (!u || !/^[\w-]{11}$/.test(u)) return null;
    const f = (z) => {
      if (!z) return 0;
      if (/^\d+$/.test(z)) return Number(z);
      const oe = z.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return oe ? (Number(oe[1]) || 0) * 3600 + (Number(oe[2]) || 0) * 60 + (Number(oe[3]) || 0) : 0;
    }, M = f(i.searchParams.get("t") || i.searchParams.get("start")), D = f(i.searchParams.get("end"));
    return { id: u, start: M, end: D > M ? D : null };
  }
  function nn(t, i) {
    if (t.useVideoLength === !1) return Math.max(5, Number(t.duration) || i || 300);
    const s = Number(t.start) || 0, u = Number(t.end) || Number(t.videoDuration) || 0;
    return u > s ? Math.round(u - s) : Number(t.duration) || 300;
  }
  function Ga(t, i) {
    const s = Math.max(0, Number(t) || 0);
    return Math.round(i === "hour" ? s * 3600 : i === "min" ? s * 60 : s);
  }
  function ui(t, i = !0) {
    ho = t, a.querySelectorAll(".createPresetBtn").forEach((u) => u.classList.toggle("active", u.dataset.movePreset === t));
    const s = Ye[ht];
    s && (s.preset = t), t === "work" ? (E.min = 30, E.max = 480, E.step = 30, C.min = 300, C.max = 7200, C.step = 300, N.min = 60, N.max = 1800, N.step = 60, i && (E.value = 60, C.value = 1500, N.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (E.min = 3, E.max = 40, E.step = 1, C.min = 20, C.max = 60, C.step = 5, N.min = 5, N.max = 30, N.step = 5, i && (E.value = 20, C.value = 45, N.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), Yt();
  }
  function Ua(t, i) {
    const s = ho === "work";
    return t.map((u, f) => ({ ...u, id: i + "-" + f + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(C.value) }));
  }
  function fo() {
    const t = Ye[ht];
    t != null && t.customSequence && (t.includeWarmup = o("includeWarmupPreset").checked, t.includeCooldown = o("includeCooldownPreset").checked, t.includeWarmup && !St.length && (St = Ua(Xe, "warm")), t.includeCooldown && !Cn.length && (Cn = Ua(bn, "cool")), T());
  }
  function A() {
    const t = o("upcomingCountSetting");
    if (!t) return;
    const i = Math.max(1, Be.length - 1), s = ta;
    t.innerHTML = "";
    for (let M = 1; M <= i; M++) {
      const D = document.createElement("option");
      D.value = String(M), D.textContent = String(M), t.appendChild(D);
    }
    const u = document.createElement("option");
    u.value = "all", u.textContent = "All", t.appendChild(u);
    const f = s === "all" ? "all" : String(Math.min(Number(s) || 1, i));
    t.value = f, ta = f === "all" ? "all" : Number(f);
  }
  function T() {
    Number(E.value) * 60;
    const t = Number(C.value), i = Number(N.value), s = Ye[ht], u = !!(s != null && s.customSequence), f = (u ? !s.includeWarmup : s != null && s.warmupOff) ? [] : na(St), M = na(Je), D = u && !s.includeCooldown ? [] : na(Cn);
    if (s && (s.total = Number(E.value), s.work = t, s.rest = i, s.rounds = Number(tt.value) || 1, s.customSequence ? (s.sequence = Je.map((ke) => ({ ...ke })), s.warmup = St.map((ke) => ({ ...ke })), s.cooldown = Cn.map((ke) => ({ ...ke }))) : (s.strength = Je.map((ke) => ({ ...ke })), s.warmup = St.map((ke) => ({ ...ke })), s.cooldown = Cn.map((ke) => ({ ...ke })))), s != null && s.customSequence) {
      const ke = [...f.map((it) => ({ ...it, section: "warmup" })), ...M, ...D.map((it) => ({ ...it, section: "cooldown" }))].map((it) => {
        if (it.kind === "video") return { ...it, duration: nn(it, t), rest: 0 };
        if (it.kind === "rest") {
          const hn = it.useGlobalTiming === !0 ? i : Number(it.duration) || i;
          return { ...it, duration: hn, rest: 0 };
        }
        const pn = it.useGlobalTiming === !1 && Number(it.duration) || t;
        return { ...it, duration: pn, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Be = [], ke.forEach((it, pn) => {
        Be.push(it);
        const hn = ke[pn + 1];
        it.kind !== "rest" && hn && hn.kind !== "rest" && Be.push({
          id: "auto-rest-" + pn,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Be = ke;
    } else
      Be = [...f.map((ke) => ({ ...ke, section: "warmup" })), ...M, ...D.map((ke) => ({ ...ke, section: "cooldown" }))].map((ke) => ke.kind === "video" ? { ...ke, duration: nn(ke, t), rest: 0 } : ke.kind === "rest" ? { ...ke, duration: ke.useGlobalTiming === !0 ? i : Number(ke.duration) || i, rest: 0 } : { ...ke, duration: ke.useGlobalTiming === !1 && Number(ke.duration) || t, rest: i }), Be.forEach((ke, it) => {
        var pn;
        ((pn = Be[it + 1]) == null ? void 0 : pn.kind) === "rest" && (ke.rest = 0);
      }), Be.length && (Be[Be.length - 1].rest = 0);
    const z = Math.max(1, Math.min(10, Number(tt.value) || 1)), oe = Be, se = (ke) => z <= 1 ? null : ke.section === "warmup" || ke.presetRole === "warmup" ? "first" : ke.section === "cooldown" || ke.presetRole === "cooldown" ? "last" : ke.kind === "video" && (ke.videoRounds === "first" || ke.videoRounds === "last") ? ke.videoRounds : null, ee = (ke) => !!se(ke), J = oe.filter((ke) => !ee(ke)), Se = oe.filter(ee), Ue = J.length, _e = J.reduce((ke, it) => ke + it.duration + it.rest, 0), Me = Se.reduce((ke, it) => ke + it.duration + it.rest, 0), xe = [
      Se.some((ke) => ke.section === "warmup" || ke.presetRole === "warmup") && "warm-up",
      Se.some((ke) => ke.section === "cooldown" || ke.presetRole === "cooldown") && "cooldown",
      Se.some((ke) => ke.kind === "video" && !ke.section && !ke.presetRole) && "video"
    ].filter(Boolean), ct = xe.length > 1 ? xe.slice(0, -1).join(", ") + " & " + xe[xe.length - 1] : xe[0] || "";
    Be = [];
    const ut = (ke, it) => {
      const pn = se(ke);
      return !pn || (pn === "first" ? it === 1 : it === z);
    };
    for (let ke = 1; ke <= z; ke++)
      if (oe.filter((it) => ut(it, ke)).forEach((it, pn) => Be.push({ ...it, id: it.id + (z > 1 ? "-r" + ke : ""), round: ke, roundIndex: pn })), ke < z && Ue)
        if (s != null && s.customSequence)
          Be.push({ id: "round-break-" + ke, name: "Rest", group: "Round " + (ke + 1) + " next", kind: "rest", hidden: !1, duration: i, rest: 0, round: ke, roundIndex: Ue, roundBreak: !0 });
        else {
          const it = Be[Be.length - 1];
          it.rest = i, it.roundBreakAfter = !0;
        }
    Yt();
    const Ee = Be.reduce((ke, it) => ke + it.duration + it.rest, 0), pt = Math.round(_e / 60), Mt = Math.round(Ee / 60), ot = z > 1 ? Qt(pt) + " × " + z + " rounds" + (Me ? " + " + $t(Me) + " " + ct : "") + " (" + Qt(Mt) + ")" : Qt(Mt), $e = [f.length ? "warm-up" : "", D.length ? "cooldown" : ""].filter(Boolean), ln = s != null && s.customSequence ? ot + " · " + Ue + " items" + ($e.length && !(z > 1 && Me) ? " · " + $e.join(" + ") : "") : ot + " · " + $t(t) + " / " + $t(i) + ($e.length && !(z > 1 && Me) ? " · " + $e.join(" + ") : "");
    ce.textContent = $t(_e);
    const Mn = Be.filter((ke) => !ke.roundBreak).length, Ht = z > 1 ? Mn + " activities · " + z + " rounds" : Ue + " activities";
    vn.textContent = z > 1 ? z + " rounds · " + Qt(Mt) + " total" : "1 round", o("roundsCount").textContent = z, a.querySelectorAll("[data-rounds-step]").forEach((ke) => {
      ke.disabled = Number(ke.dataset.roundsStep) < 0 ? z <= 1 : z >= 10;
    }), s && (s.summary = ln, s.activityCount = Ue);
    const ii = a.querySelector(".workoutPanel.active .sub");
    ii && (ii.textContent = ln), Ft.textContent = ln, kr(), a.querySelectorAll(".workoutPanel.active .activityCount").forEach((ke) => ke.textContent = Ht), Yt(), Pe(), Lr(), _a(), A(), lt && ge(), be.workout.classList.contains("active") && !kt && Wr();
  }
  const I = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', K = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', he = {
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
  }, fe = (t) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (he[t] || "") + "</svg>";
  a.querySelectorAll("[data-icon]").forEach((t) => {
    t.innerHTML = fe(t.dataset.icon);
  });
  let ue = null, ve = null;
  function we(t) {
    return t = Math.max(1, Number(t) || 0), t >= 3600 && t % 3600 === 0 ? { value: t / 3600, unit: "hour" } : t >= 60 && t % 60 === 0 ? { value: t / 60, unit: "min" } : { value: t, unit: "sec" };
  }
  function Ie(t = !1) {
    const i = a.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    i && (i.focus({ preventScroll: !0 }), t && i.select());
  }
  function ze(t, i, s = {}) {
    const u = t.kind === "rest", f = t.kind === "video", M = f ? t.useVideoLength !== !1 : u ? t.useGlobalTiming === !0 : t.useGlobalTiming !== !1, D = Number(u ? N.value : C.value), z = we(f ? t.useVideoLength === !1 ? t.duration : nn({ ...t, useVideoLength: !0 }) : M ? D : t.duration || D), oe = f && (Number(t.videoDuration) > 0 || Number(t.end) > 0), se = f ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + He(t.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + He(t.autoName ? "" : t.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Ee, pt]) => '<option value="' + Ee + '"' + ((t.videoRounds || "every") === Ee ? " selected" : "") + ">" + pt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + He(t.name) + '" placeholder="' + (u ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + He(t.group) + '" placeholder="' + (u ? "Rest" : "e.g. Glutes + legs") + '"></label>', ee = f ? "Play the whole " + (Number(t.start) > 0 || Number(t.end) > 0 ? "clip" : "video") + (oe ? " · " + bt(nn({ ...t, useVideoLength: !0 })) : "") : "Use global timing · " + $t(D), J = document.createElement("div");
    J.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), J.dataset.index = i, J.dataset.id = t.id;
    const Se = s.isNew ?? (ve == null ? void 0 : ve.item) === t, Ue = s.sheet ? '<div class="moveEditActions sheetActions">' + (Se ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (t.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + He(t.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Se ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    J.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (f ? " videoFields" : "") + '">' + se + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (M ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + He(ee) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + z.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Ee) => '<option value="' + Ee + '"' + (Ee === z.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Ee] + "</option>").join("") + "</select></div></div>" + Ue + "</div>";
    const _e = (Ee) => J.querySelector("[data-f=" + Ee + "]"), Me = () => {
      const Ee = _e("global").checked;
      _e("dur").disabled = Ee, _e("unit").disabled = Ee, J.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Ee);
    };
    _e("global").addEventListener("change", Me), Me();
    const xe = () => {
      var Ee;
      if (s.sheet) {
        (Ee = s.onCancel) == null || Ee.call(s);
        return;
      }
      Se && at(), ue = null, T();
    }, ct = () => {
      var Mt;
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
      if (t.useGlobalTiming = pt, pt || (t.duration = Math.max(u ? 5 : 1, Ga(_e("dur").value, _e("unit").value))), s.sheet) {
        (Mt = s.onSaved) == null || Mt.call(s);
        return;
      }
      Se && (ve = null), ue = null, T(), _t(Se ? u ? "Rest added" : "Movement added" : "Movement updated");
    }, ut = () => {
      var $e;
      const Ee = _e("url").value.trim(), pt = ha(Ee);
      if (!pt) {
        _e("urlError").hidden = !1, _e("url").classList.add("invalid"), _e("url").focus();
        return;
      }
      const Mt = pt.id !== t.videoId;
      t.url = Ee, t.videoId = pt.id, t.start = pt.start, t.end = pt.end, Mt && (t.videoDuration = null, t.videoError = null);
      const ot = _e("name").value.trim();
      t.autoName = !ot, t.name = ot || (Mt ? "" : t.name) || t.videoTitle || "YouTube video", t.group = "Video", t.videoRounds = _e("rounds").value, t.useVideoLength = _e("global").checked, t.useVideoLength || (t.duration = Math.max(5, Ga(_e("dur").value, _e("unit").value))), s.sheet ? ($e = s.onSaved) == null || $e.call(s) : (Se && (ve = null), ue = null, T(), _t(Se ? "Video added" : "Video updated")), (Mt || !t.videoDuration || t.autoName && !t.videoTitle) && Bl(t);
    };
    if (f && _e("url").addEventListener("input", () => {
      _e("urlError").hidden = !0, _e("url").classList.remove("invalid");
    }), J.querySelector("[data-a=cancel]").addEventListener("click", xe), J.querySelector("[data-a=save]").addEventListener("click", ct), s.sheet && !Se) {
      J.querySelector("[data-a=hide]").addEventListener("click", () => {
        var pt;
        return (pt = s.onHide) == null ? void 0 : pt.call(s);
      });
      const Ee = J.querySelector("[data-a=remove]");
      Qo(Ee, Ee.querySelector(".removeFill"), 1200, () => {
        var pt;
        return (pt = s.onRemove) == null ? void 0 : pt.call(s);
      });
    }
    return J.addEventListener("keydown", (Ee) => {
      Ee.key === "Escape" && (Ee.preventDefault(), Ee.stopPropagation(), xe()), Ee.key === "Enter" && Ee.target.matches("input") && (Ee.preventDefault(), ct());
    }), J;
  }
  function je(t, i) {
    const s = o(i);
    s.innerHTML = "", t.forEach((u, f) => {
      if (u === ue && !oa()) {
        s.appendChild(ze(u, f));
        return;
      }
      const M = document.createElement("div");
      M.className = "moveRow" + (u.hidden ? " hidden" : "") + (u.kind === "rest" ? " restItem" : "") + (u.kind === "video" ? " videoItem" : "") + (Ur(u) ? " noMeta" : ""), M.dataset.index = f, M.dataset.id = u.id;
      const D = u.kind === "rest" ? u.useGlobalTiming === !0 ? "Global timing" : $t(u.duration) : u.useGlobalTiming === !1 ? $t(u.duration) : "Global timing", z = u.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", oe = u.kind === "video" ? u.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (u.useVideoLength === !1 ? "stops after " + $t(u.duration) : Number(u.videoDuration) > 0 || Number(u.end) > 0 ? bt(nn(u)) : "plays to the end") + (u.videoRounds === "first" ? " · first round only" : u.videoRounds === "last" ? " · last round only" : "") : u.group + " · " + D, se = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + He(u.name) + '. Drag, or use the up and down arrow keys">' + I + "</button>", ee = '<div class="moveText"><div class="moveItemName">' + He(u.name) + z + '</div><div class="moveMeta">' + He(oe) + "</div></div>", J = (_e) => _e.addEventListener("keydown", (Me) => {
        var ut, Ee;
        if (Me.key !== "ArrowUp" && Me.key !== "ArrowDown") return;
        Me.preventDefault();
        const xe = t.indexOf(u), ct = xe + (Me.key === "ArrowUp" ? -1 : 1);
        ct < 0 || ct >= t.length || (t.splice(xe, 1), t.splice(ct, 0, u), T(), (Ee = (ut = o(i).children[ct]) == null ? void 0 : ut.querySelector(".dragHandle")) == null || Ee.focus());
      });
      if (oa()) {
        M.classList.add("phoneRow"), M.tabIndex = 0, M.setAttribute("role", "button"), M.setAttribute("aria-label", "Edit " + (u.name || "step")), M.innerHTML = se + ee + '<span class="rowChevron" aria-hidden="true">›</span>';
        const _e = M.querySelector(".dragHandle");
        _e.addEventListener("pointerdown", (Me) => Ke(Me, M, s, t)), J(_e), M.addEventListener("click", (Me) => {
          Me.target.closest(".dragHandle") || vo(u, t);
        }), M.addEventListener("keydown", (Me) => {
          Me.key === "Enter" && Me.target === M && (Me.preventDefault(), vo(u, t));
        }), s.appendChild(M);
        return;
      }
      M.innerHTML = se + ee + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + He(u.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (u.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + He(u.name) + '"><span class="removeFill"></span><span class="removeLabel">' + K + "</span></button></div>", M.querySelector(".editBtn").addEventListener("click", () => {
        at(), ue = u, T(), Ie();
      }), M.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        u.hidden = !u.hidden, T();
      });
      const Se = M.querySelector(".removeBtn");
      Qo(Se, Se.querySelector(".removeFill"), 1200, () => {
        const _e = t.indexOf(u);
        _e < 0 || (t.splice(_e, 1), T(), _t("Removed " + u.name, { label: "Undo", run: () => {
          t.splice(Math.min(_e, t.length), 0, u), T();
        } }));
      });
      const Ue = M.querySelector(".dragHandle");
      Ue.addEventListener("pointerdown", (_e) => Ke(_e, M, s, t)), J(Ue), s.appendChild(M);
    });
  }
  const qe = () => {
    var t;
    return (t = window.matchMedia) == null ? void 0 : t.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, De = (t) => {
    var i;
    try {
      (i = navigator.vibrate) == null || i.call(navigator, t);
    } catch {
    }
  };
  function Ke(t, i, s, u) {
    if (t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const f = t.currentTarget, M = t.pointerId, D = !qe();
    try {
      f.setPointerCapture(M);
    } catch {
    }
    const z = i.closest(".exerciseScroller") || Rn(i), oe = s.style.position;
    s.style.position = "relative";
    const se = [...s.children].filter((rt) => rt.classList.contains("moveRow")), ee = se.indexOf(i), J = parseFloat(getComputedStyle(s).rowGap) || 8, Se = i.offsetHeight, Ue = Se + J, _e = se.map((rt) => rt.offsetTop), Me = se.map((rt) => rt.offsetHeight), xe = () => s.getBoundingClientRect().top, ct = s.getBoundingClientRect().width, ut = t.clientY - (xe() + _e[ee]), Ee = t.clientX;
    let pt = t.clientY, Mt = t.clientX, ot = xe() + _e[ee], $e = 0, ln = 0, Mn = 0, Ht = 1, ii = 0, ke = ee, it = !1, pn = 0, hn = !1, js = !1, pr = _e[ee];
    s.classList.add("reordering"), i.classList.add("dragging"), i.style.transition = "none", De(8);
    const Gs = () => {
      const rt = pt - ut + Se / 2 - xe();
      let wt = 0;
      return se.forEach((Pt, Un) => {
        Un !== ee && rt > _e[Un] + Me[Un] / 2 && wt++;
      }), wt;
    }, Us = () => {
      se.forEach((rt, wt) => {
        if (wt === ee) return;
        const Pt = ee < ke && wt > ee && wt <= ke ? -Ue : ee > ke && wt >= ke && wt < ee ? Ue : 0;
        rt.style.transform = Pt ? "translateY(" + Pt + "px)" : "";
      });
    }, es = () => {
      const rt = s.getBoundingClientRect(), wt = Math.abs(Mt - Ee) > Math.max(80, ct * 0.3) || Mt < rt.left - 24 || Mt > rt.right + 24;
      wt !== it && (it = wt, i.classList.toggle("willReturn", wt), De(wt ? 10 : 4));
      const Pt = it ? ee : Gs();
      Pt !== ke && (ke = Pt, Us(), it || De(4));
    }, ri = () => {
      if (ke === ee) return _e[ee];
      const rt = se.filter((Pt, Un) => Un !== ee);
      let wt = _e[0];
      for (let Pt = 0; Pt < ke; Pt++) wt += rt[Pt].offsetHeight + J;
      return wt;
    }, hr = () => {
      const rt = D ? Math.min(Math.abs($e) / 40, 1) : 0, wt = D && !hn ? Math.max(-3, Math.min(3, Mn * 0.6)) : 0;
      i.style.transform = "translate(" + ln.toFixed(2) + "px," + (ot - (xe() + _e[ee])).toFixed(2) + "px) rotate(" + wt.toFixed(2) + "deg) scale(" + (Ht * (1 - 0.04 * rt)).toFixed(4) + "," + (Ht * (1 + 0.06 * rt)).toFixed(4) + ")";
    }, et = () => {
      pn = requestAnimationFrame(et);
      const rt = Mt - Ee, wt = hn ? xe() + pr : pt - ut, Pt = hn ? 0 : it ? rt * 0.9 : Math.max(-22, Math.min(22, rt * 0.22)), Un = hn ? 1 : it ? 0.97 : 1.035;
      if (!D) {
        ot = wt, ln = hn ? 0 : Pt, Ht = 1, hr(), hn && Wt();
        return;
      }
      const yu = hn ? 0.24 : 0.2, ku = hn ? 0.62 : 0.68;
      $e = ($e + (wt - ot) * yu) * ku, ot += $e, Mn = (Mn + (Pt - ln) * 0.16) * 0.7, ln += Mn, ii = (ii + (Un - Ht) * 0.22) * 0.6, Ht += ii, hr(), hn && Math.abs($e) < 0.15 && Math.abs(wt - ot) < 0.5 && Math.abs(ln) < 0.5 && Math.abs(Ht - 1) < 3e-3 && Wt();
    }, Lt = setInterval(() => {
      if (!z || hn) return;
      const rt = z.getBoundingClientRect(), wt = 56, Pt = pt < rt.top + wt ? -10 : pt > rt.bottom - wt ? 10 : 0;
      Pt && (z.scrollTop += Pt, es());
    }, 30);
    function Wt() {
      if (js) return;
      js = !0, cancelAnimationFrame(pn);
      const rt = ke !== ee, wt = i.dataset.id;
      if (s.classList.remove("reordering"), se.forEach((Un) => {
        Un.style.transition = "none", Un.style.transform = "";
      }), i.classList.remove("dragging", "willReturn"), s.style.position = oe, rt) {
        const [Un] = u.splice(ee, 1);
        u.splice(ke, 0, Un);
      }
      T();
      const Pt = wt && s.querySelector('.moveRow[data-id="' + wt + '"]');
      Pt && D && Pt.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), rt && _t("Order saved");
    }
    const fn = (rt) => {
      if (rt.pointerId === M) {
        if (rt.pointerType === "mouse" && rt.buttons === 0) {
          ba();
          return;
        }
        pt = rt.clientY, Mt = rt.clientX, es();
      }
    }, Gn = (rt) => {
      rt.pointerId === M && ba();
    };
    function ba() {
      hn || (window.removeEventListener("pointermove", fn, !0), window.removeEventListener("pointerup", Gn, !0), window.removeEventListener("pointercancel", Gn, !0), f.removeEventListener("lostpointercapture", ba), clearInterval(Lt), it && ke !== ee && (ke = ee, Us()), pr = ri(), hn = !0, De(6), setTimeout(Wt, 800));
    }
    window.addEventListener("pointermove", fn, !0), window.addEventListener("pointerup", Gn, !0), window.addEventListener("pointercancel", Gn, !0), f.addEventListener("lostpointercapture", ba), pn = requestAnimationFrame(et), hr();
  }
  function Pe() {
    var f, M, D, z;
    const t = Ye[ht], i = (f = o("warmupList")) == null ? void 0 : f.closest("section"), s = (M = o("cooldownList")) == null ? void 0 : M.closest("section"), u = (z = (D = o("strengthList")) == null ? void 0 : D.closest("section")) == null ? void 0 : z.querySelector(".sectionTitle");
    t != null && t.customSequence ? (i && (i.hidden = !t.includeWarmup), s && (s.hidden = !t.includeCooldown), u && (u.textContent = "Move sequence")) : (i && (i.hidden = !!(t != null && t.warmupOff)), s && (s.hidden = !1), u && (u.textContent = "Kettlebell work")), je(St, "warmupList"), je(Je, "strengthList"), je(Cn, "cooldownList");
  }
  function at() {
    if (!ve) return;
    const { item: t, arr: i } = ve;
    ve = null;
    const s = i.indexOf(t);
    s >= 0 && i.splice(s, 1), ue === t && (ue = null);
  }
  function ft(t) {
    return t.id === "warmupList" ? { arr: St, kind: "warmup", group: "Warm-up" } : t.id === "cooldownList" ? { arr: Cn, kind: "cooldown", group: "Cooldown" } : { arr: Je, kind: "work", group: "" };
  }
  function It(t, i) {
    const s = ft(i), u = Date.now().toString(36);
    return t === "video" ? { id: "video-" + u, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : t === "rest" ? { id: "rest-" + u, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(N.value) } : { id: "movement-" + u, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(C.value) };
  }
  const Tt = "cubic-bezier(.34,1.46,.64,1)";
  function Xt(t, i) {
    if (qe() || !t) {
      i();
      return;
    }
    const s = (M) => {
      var D;
      return ((D = M.dataset) == null ? void 0 : D.id) || M;
    }, u = () => [...t.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], f = new Map(u().map((M) => [s(M), M.getBoundingClientRect().top]));
    i(), u().forEach((M) => {
      const D = f.get(s(M));
      if (D === void 0) return;
      const z = D - M.getBoundingClientRect().top;
      Math.abs(z) < 0.5 || M.animate([{ transform: "translateY(" + z + "px)" }, { transform: "none" }], { duration: 440, easing: Tt });
    });
  }
  function Jt(t, i) {
    if (!t || qe()) return;
    const s = t.offsetHeight, u = Math.max(0, s - (i || 0));
    t.animate([{ clipPath: "inset(0 0 " + u + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Tt });
  }
  function aa(t, i, s, u) {
    const { arr: f } = ft(i), M = It(t, i);
    f.splice(Math.max(0, Math.min(s, f.length)), 0, M), ve = { item: M, arr: f }, ue = M, Xt(i.closest(".exerciseScroller,.createStepSlot") || i, () => T());
    const D = i.querySelector(".moveRow.editing");
    return Jt(D, u), Ie(t === "rest"), D;
  }
  function Rn(t) {
    for (let i = t; i && i.nodeType === 1; i = i.parentElement) {
      const s = getComputedStyle(i).overflowY;
      if (/(auto|scroll)/.test(s) && i.scrollHeight > i.clientHeight) return i;
    }
    return null;
  }
  const pi = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function dn(t, i) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (t === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + I + '</span><span class="addGhostText"><strong>' + He(i[0]) + "</strong><small>" + He(i[1]) + "</small></span>", o("workoutModal").appendChild(s), s;
  }
  function Aa(t) {
    t.classList.add("leaving"), setTimeout(() => t.remove(), 180);
  }
  function mo(t, i, s, u) {
    (ue || ve) && (at(), ue = null, T());
    const f = t.getBoundingClientRect(), M = dn(i, pi[i]);
    M.setAttribute("aria-hidden", "true"), M.style.width = f.width + "px", M.style.height = f.height + "px", M.style.transform = "translate(" + f.left + "px," + f.top + "px)", t.classList.add("lifting");
    const D = Rn(t);
    return hi({
      ghost: M,
      origin: f,
      sx: s,
      sy: u,
      scroller: D,
      column: t.closest(".exerciseScroller,.createFlow") || D,
      home: () => t.getBoundingClientRect(),
      onDrop: (z, oe, se) => {
        Aa(M), t.classList.remove("lifting"), aa(i, z, oe, se);
      },
      onReturn: () => {
        Aa(M), t.classList.remove("lifting");
      }
    });
  }
  function hi({ ghost: t, origin: i, sx: s, sy: u, scroller: f, column: M, home: D, onDrop: z, onReturn: oe, rowLook: se = !1 }) {
    var hr;
    const ee = !qe(), J = ((hr = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : hr.offsetHeight) || 80, Se = s - i.left, Ue = u - i.top, _e = 44;
    let Me = s, xe = u, ct = i.left, ut = i.top, Ee = 0, pt = 0, Mt = !ee, ot = null, $e = null, ln = -1, Mn = 0, Ht = null;
    const ii = () => ["warmupList", "strengthList", "cooldownList"].map((et) => o(et)).filter((et) => et && et.getClientRects().length && !et.closest("[hidden]")), ke = (et) => {
      if (et === ot) return;
      ot = et, t.classList.toggle("overList", !!et || se);
      const Lt = et ? et.getBoundingClientRect().width : i.width;
      t.style.width = Lt + "px", t.style.height = (et ? J : i.height) + "px";
    }, it = (et) => {
      et.classList.add("leaving"), et.style.height = "0px", et.style.marginTop = "-8px", setTimeout(() => et.remove(), ee ? 320 : 0);
    }, pn = (et, Lt, Wt) => {
      if ($e && $e.parentNode === et && ln === Wt || ($e && (it($e), $e = null, ln = -1), !et)) return;
      const fn = document.createElement("div");
      fn.className = "dropSlot", et.insertBefore(fn, Lt), $e = fn, ln = Wt, fn.getBoundingClientRect(), fn.style.height = J + "px", fn.style.marginTop = "0px";
    }, hn = () => {
      let et = null, Lt = 1 / 0;
      for (const ba of ii()) {
        const rt = ba.getBoundingClientRect();
        if (Me < rt.left - 48 || Me > rt.right + 48) continue;
        const wt = rt.top - 28, Pt = rt.bottom + 28, Un = xe < wt ? wt - xe : xe > Pt ? xe - Pt : 0;
        Un < Lt && (Lt = Un, et = ba);
      }
      const Wt = M == null ? void 0 : M.getBoundingClientRect(), Gn = Wt && Me >= Wt.left && Me <= Wt.right && xe >= Wt.top && xe <= Wt.bottom || Lt === 0 ? et : null;
      if (Gn) {
        const ba = [...Gn.children].filter((wt) => wt.classList.contains("moveRow"));
        let rt = ba.findIndex((wt) => {
          const Pt = wt.getBoundingClientRect();
          return xe < Pt.top + Pt.height / 2;
        });
        rt < 0 && (rt = ba.length), pn(Gn, ba[rt] || null, rt);
      } else pn(null);
      ke(Gn);
    }, js = () => {
      if (Ht) return Ht.aim();
      if (ot) {
        const et = ot.getBoundingClientRect();
        let Lt = xe - J / 2;
        return $e && (Lt = Lt * 0.6 + $e.getBoundingClientRect().top * 0.4), { x: et.left, y: Lt };
      }
      return { x: Me - Se, y: xe - Ue };
    }, pr = (et, Lt, Wt, fn) => {
      t.style.transform = "translate(" + ct + "px," + ut + "px) rotate(" + et + "deg) rotate(" + Lt + "rad) scale(" + Wt + "," + fn + ") rotate(" + -Lt + "rad)";
    }, Gs = () => {
      if (Mn = requestAnimationFrame(Gs), !Mt) {
        const rt = Me - s, wt = xe - u, Pt = Math.min(Math.hypot(rt, wt) / _e, 1);
        ct = i.left + rt * 0.35, ut = i.top + wt * 0.35, pr(0, Math.atan2(wt, rt), 1 + 0.155 * Pt, 1 - 0.1 * Pt);
        return;
      }
      const et = js();
      if (!ee) {
        ct = et.x, ut = et.y, pr(0, 0, 1, 1), Ht && (cancelAnimationFrame(Mn), Ht.done());
        return;
      }
      const Lt = Ht ? Ht.k : 0.17, Wt = Ht ? Ht.d : 0.7;
      Ee = (Ee + (et.x - ct) * Lt) * Wt, pt = (pt + (et.y - ut) * Lt) * Wt, ct += Ee, ut += pt;
      const fn = Math.hypot(Ee, pt), Gn = Math.min(fn / 48, 1), ba = ot || Ht ? 0 : Math.max(-5, Math.min(5, Ee * 0.32));
      pr(ba, Math.atan2(pt, Ee), 1 + 0.1 * Gn, 1 - 0.063 * Gn), Ht && fn < 0.15 && Math.hypot(et.x - ct, et.y - ut) < 0.6 && (cancelAnimationFrame(Mn), Ht.done());
    }, Us = setInterval(() => {
      if (!f || Ht) return;
      const et = f.getBoundingClientRect(), Lt = 64, Wt = xe < et.top + Lt ? -(et.top + Lt - xe) / 4 : xe > et.bottom - Lt ? (xe - (et.bottom - Lt)) / 4 : 0;
      Wt && (f.scrollTop += Math.max(-18, Math.min(18, Wt)), hn());
    }, 30);
    Mn = requestAnimationFrame(Gs);
    let es = !1;
    const ri = (et, Lt) => {
      if (es) return;
      es = !0, cancelAnimationFrame(Mn);
      const Wt = $e ? $e.offsetHeight : J;
      !et && $e && ($e.remove(), $e = null), et ? z(et, Lt, Wt) : oe();
    };
    return {
      move(et, Lt) {
        Me = et, xe = Lt, !Mt && Math.hypot(Me - s, xe - u) > _e && (Mt = !0, Ee = (Me - s) * 0.085, pt = (xe - u) * 0.085), Mt && hn();
      },
      drop(et) {
        clearInterval(Us);
        const Lt = ot, Wt = ln;
        if (!et && Lt && $e) {
          const fn = $e;
          Ht = { k: 0.24, d: 0.62, aim: () => {
            const Gn = fn.getBoundingClientRect();
            return { x: Gn.left, y: Gn.top };
          }, done: () => ri(Lt, Wt) }, setTimeout(() => ri(Lt, Wt), 650), ee || (cancelAnimationFrame(Mn), ri(Lt, Wt));
          return;
        }
        pn(null), ke(null), Ht = { k: 0.2, d: 0.66, aim: () => {
          const fn = D();
          return { x: fn.left, y: fn.top };
        }, done: () => ri(null) }, setTimeout(() => ri(null), 650), ee || (cancelAnimationFrame(Mn), ri(null));
      }
    };
  }
  function gt(t, i) {
    let s = !1;
    t.addEventListener("click", (u) => {
      if (s) {
        s = !1, u.preventDefault();
        return;
      }
      if (oa()) {
        Fo(i);
        return;
      }
      const f = o("strengthList"), M = aa(i, f, ft(f).arr.length, 0);
      M == null || M.scrollIntoView({ block: "nearest", behavior: qe() ? "auto" : "smooth" });
    }), t.addEventListener("pointerdown", (u) => {
      if (u.button !== void 0 && u.button !== 0) return;
      const f = u.pointerId, M = u.clientX, D = u.clientY;
      let z = null, oe = !1;
      try {
        t.setPointerCapture(f);
      } catch {
      }
      const se = (xe) => {
        if (xe.pointerId === f) {
          if (xe.pointerType === "mouse" && xe.buttons === 0) {
            Me(!1);
            return;
          }
          if (!z) {
            if (Math.hypot(xe.clientX - M, xe.clientY - D) < 6) return;
            z = mo(t, i, M, D);
          }
          z.move(xe.clientX, xe.clientY);
        }
      }, ee = (xe) => {
        xe.pointerId === f && Me(!1);
      }, J = (xe) => {
        xe.pointerId === f && Me(!0);
      }, Se = () => Me(!1), Ue = () => Me(!0), _e = (xe) => {
        xe.key === "Escape" && z && (xe.preventDefault(), xe.stopPropagation(), Me(!0));
      };
      function Me(xe) {
        if (!oe && (oe = !0, window.removeEventListener("pointermove", se, !0), window.removeEventListener("pointerup", ee, !0), window.removeEventListener("pointercancel", J, !0), window.removeEventListener("keydown", _e, !0), window.removeEventListener("blur", Ue), t.removeEventListener("lostpointercapture", Se), z)) {
          const ct = z;
          z = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), ct.drop(xe);
        }
      }
      window.addEventListener("pointermove", se, !0), window.addEventListener("pointerup", ee, !0), window.addEventListener("pointercancel", J, !0), window.addEventListener("keydown", _e, !0), window.addEventListener("blur", Ue), t.addEventListener("lostpointercapture", Se);
    });
  }
  const Nn = (qd = window.matchMedia) == null ? void 0 : qd.call(window, "(max-width: 620px)");
  function oa() {
    var t;
    return !!((t = window.matchMedia) != null && t.call(window, "(max-width: 620px)").matches);
  }
  const go = (t) => t.charAt(0).toUpperCase() + t.slice(1), Ya = (t) => t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "movement";
  let Za = null, At = null;
  function en(t, i, s, u) {
    Bn(), o("sheetTitle").textContent = t;
    const f = o("sheetBody");
    f.innerHTML = "", f.appendChild(i), Za = s || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !f.contains(i)) return;
      const M = u ? f.querySelector("input[data-f=url],input[data-f=name]") : f.querySelector("button,input,select");
      M == null || M.focus({ preventScroll: !0 });
    }, qe() ? 0 : 360);
  }
  function Bn() {
    const t = o("sheet");
    if (!t.classList.contains("open")) return;
    t.classList.remove("open"), o("sheetScrim").classList.remove("open"), t.setAttribute("aria-hidden", "true"), t.contains(a.activeElement) && a.activeElement.blur();
    const i = Za;
    Za = null, i == null || i(), setTimeout(ia, 0);
  }
  o("sheetScrim").addEventListener("click", Bn), o("sheet").addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Bn());
  });
  function vo(t, i) {
    const s = ze(t, i.indexOf(t), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Bn(), T(), _t(go(Ya(t)) + " updated");
      },
      onCancel: Bn,
      onHide() {
        t.hidden = !t.hidden, Bn(), T(), _t((t.hidden ? "Hidden: " : "Showing: ") + t.name);
      },
      onRemove() {
        Bn();
        const u = i.indexOf(t);
        u < 0 || (i.splice(u, 1), T(), _t("Removed " + t.name, { label: "Undo", run: () => {
          i.splice(Math.min(u, i.length), 0, t), T();
        } }));
      }
    });
    en("Edit " + Ya(t), s, null, !1);
  }
  function fi() {
    const t = document.createElement("div");
    t.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([i, s, u, f]) => {
      const M = document.createElement("button");
      M.type = "button", M.className = "sheetChoice", M.innerHTML = '<span class="timeIcon" aria-hidden="true">' + fe(s) + "</span><span><strong>" + u + "</strong><small>" + f + "</small></span>", M.addEventListener("click", () => Fo(i)), t.appendChild(M);
    }), en("Add to the move", t, null, !1);
  }
  function Fo(t) {
    At && zi();
    const i = It(t, o("strengthList")), s = ze(i, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Bn(), ml(i, t);
      },
      onCancel: Bn
    });
    en("New " + Ya(i), s, null, !0);
  }
  const mi = o("workoutModal").querySelector(".modalStatic"), yr = { parent: mi.parentNode, next: mi.nextSibling };
  function fl() {
    const t = document.createElement("div");
    t.className = "sheetSetup", t.appendChild(mi);
    const i = document.createElement("button");
    i.type = "button", i.className = "primary sheetDone", i.textContent = "Done", i.addEventListener("click", Bn), t.appendChild(i), en("Setup", t, () => {
      yr.parent.insertBefore(mi, yr.next), kr();
    }, !1);
  }
  function kr() {
    var i, s;
    const t = o("setupSummaryName");
    t && (t.textContent = (((i = o("workoutNameInput")) == null ? void 0 : i.value) || "").trim() || ((s = Ye[ht]) == null ? void 0 : s.name) || "Move", o("setupSummaryMeta").textContent = Ft.textContent);
  }
  o("setupSummary").addEventListener("click", fl), o("addFab").addEventListener("click", fi);
  function Mr() {
    const t = o("strengthList");
    return Rn(t) || t.closest(".exerciseScroller");
  }
  function Cr() {
    const t = o("strengthList").getBoundingClientRect(), i = (Mr() || o("strengthList")).getBoundingClientRect(), s = (At == null ? void 0 : At.ghost.offsetHeight) || 64;
    return { left: t.left, top: Math.max(i.top + 12, Math.min(i.bottom - s - 96, i.top + i.height * 0.55 - s / 2)), width: t.width, height: s };
  }
  function ml(t, i) {
    var z;
    const s = dn(i, [t.name || pi[i][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (t.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const u = document.createElement("span");
    u.className = "addGhostActions", u.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + He(t.name) + '">✕</button>', s.appendChild(u), At = { item: t, type: i, ghost: s };
    const f = ((z = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : z.offsetHeight) || 64;
    s.style.width = o("strengthList").getBoundingClientRect().width + "px", s.style.height = f + "px";
    const M = Cr(), D = Sn.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + M.left + "px," + D + "px)", s.getBoundingClientRect(), qe() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + M.left + "px," + M.top + "px)", u.querySelector("[data-a=end]").addEventListener("click", zi), u.querySelector("[data-a=discard]").addEventListener("click", gl), s.addEventListener("pointerdown", ls);
  }
  function ls(t) {
    if (!At || t.target.closest("button") || t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const { item: i, ghost: s } = At, u = t.pointerId;
    try {
      s.setPointerCapture(u);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const f = s.getBoundingClientRect(), M = Mr(), D = hi({
      ghost: s,
      origin: { left: f.left, top: f.top, width: f.width, height: f.height },
      sx: t.clientX,
      sy: t.clientY,
      scroller: M,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || M,
      rowLook: !0,
      home: Cr,
      onDrop: (Me, xe, ct) => {
        At = null, Aa(s), Sr(i, Me, xe, ct);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let z = !1;
    const oe = (Me) => {
      if (Me.pointerId === u) {
        if (Me.pointerType === "mouse" && Me.buttons === 0) {
          _e(!1);
          return;
        }
        D.move(Me.clientX, Me.clientY);
      }
    }, se = (Me) => {
      Me.pointerId === u && _e(!1);
    }, ee = (Me) => {
      Me.pointerId === u && _e(!0);
    }, J = () => _e(!1), Se = () => _e(!0), Ue = (Me) => {
      Me.key === "Escape" && (Me.preventDefault(), _e(!0));
    };
    function _e(Me) {
      z || (z = !0, window.removeEventListener("pointermove", oe, !0), window.removeEventListener("pointerup", se, !0), window.removeEventListener("pointercancel", ee, !0), window.removeEventListener("keydown", Ue, !0), window.removeEventListener("blur", Se), s.removeEventListener("lostpointercapture", J), D.drop(Me));
    }
    window.addEventListener("pointermove", oe, !0), window.addEventListener("pointerup", se, !0), window.addEventListener("pointercancel", ee, !0), window.addEventListener("keydown", Ue, !0), window.addEventListener("blur", Se), s.addEventListener("lostpointercapture", J);
  }
  function Sr(t, i, s, u) {
    const f = ft(i);
    t.kind !== "rest" && t.kind !== "video" && (t.kind = f.kind, f.group && (!t.group || t.group === "Movement") && (t.group = f.group)), f.arr.splice(Math.max(0, Math.min(s, f.arr.length)), 0, t), Xt(i.closest(".exerciseScroller,.createStepSlot") || i, () => T()), Jt(i.querySelector('.moveRow[data-id="' + t.id + '"]'), u), _t(go(Ya(t)) + " added");
  }
  function zi() {
    var u;
    if (!At) return;
    const { item: t, ghost: i } = At;
    At = null, Aa(i);
    const s = o("strengthList");
    Sr(t, s, ft(s).arr.length, 0), (u = s.querySelector('.moveRow[data-id="' + t.id + '"]')) == null || u.scrollIntoView({ block: "nearest", behavior: qe() ? "auto" : "smooth" });
  }
  function gl() {
    if (!At) return;
    const t = At.ghost;
    At = null, Aa(t), _t("Discarded");
  }
  function ds() {
    At && (At.ghost.remove(), At = null);
  }
  window.addEventListener("resize", () => {
    if (At != null && At.ghost.classList.contains("hovering")) {
      const t = Cr();
      At.ghost.style.width = t.width + "px", At.ghost.style.transform = "translate(" + t.left + "px," + t.top + "px)";
    }
  }), (Wd = Nn == null ? void 0 : Nn.addEventListener) == null || Wd.call(Nn, "change", () => {
    Bn(), At && !oa() && zi(), Pe();
  });
  {
    const t = o("workoutModal").querySelector(".modal");
    t.addEventListener("scroll", () => {
      (t.scrollTop || t.scrollLeft) && (t.scrollTop = 0, t.scrollLeft = 0);
    });
  }
  function ia() {
    const t = o("workoutModal"), i = window.visualViewport;
    if (!t.classList.contains("open") || !oa()) {
      Tr();
      return;
    }
    const s = i ? i.offsetTop : 0, u = i ? i.offsetLeft : 0, f = i ? i.width : window.innerWidth, M = i ? i.height : window.innerHeight;
    Object.assign(t.style, { right: "auto", bottom: "auto", width: f + "px", height: M + "px", top: s + "px", left: u + "px" });
    const D = t.getBoundingClientRect();
    Math.abs(D.top - s) > 0.5 && (t.style.top = 2 * s - D.top + "px"), Math.abs(D.left - u) > 0.5 && (t.style.left = 2 * u - D.left + "px");
  }
  function Tr() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((t) => o("workoutModal").style.removeProperty(t));
  }
  (Vd = window.visualViewport) == null || Vd.addEventListener("resize", ia), (zd = window.visualViewport) == null || zd.addEventListener("scroll", ia), window.addEventListener("resize", ia), window.addEventListener("scroll", ia, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(ia, 250));
  function Lr() {
    Je.length > 0;
    const t = o("addMovementBtn"), i = o("addRestBtn");
    t && (t.innerHTML = I + "<span>Add movement</span>"), i && (i.innerHTML = I + "<span>Add rest</span>");
    const s = o("addVideoBtn");
    s && (s.innerHTML = I + "<span>Add video</span>");
  }
  function _a() {
    const t = o("useGlobalTiming").checked, i = o("addMovementDuration"), s = o("addMovementUnit");
    i.disabled = t, s.disabled = t, i.parentElement.style.opacity = t ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + $t(C.value);
    const u = o("useGlobalRestTiming").checked, f = o("addRestDuration"), M = o("addRestUnit");
    f.disabled = u, M.disabled = u, f.parentElement.style.opacity = u ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + $t(N.value);
  }
  let jn = "movement";
  function vl(t) {
    jn = t;
    const i = o("movementFields"), s = o("restFields");
    i.hidden = t !== "movement", s.hidden = t !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), _a();
  }
  function ji() {
    Ye[ht];
    const t = lt ? !0 : o("useGlobalTiming").checked, i = t ? Number(C.value) : Ga(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), s = lt ? !0 : o("useGlobalRestTiming").checked, u = s ? Number(N.value) : Ga(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (jn === "rest") {
      const f = o("addRestTitle").value.trim() || "Rest", M = o("addRestGroup").value.trim() || "Rest";
      Je.push({
        id: "rest-" + Date.now(),
        name: f,
        group: M,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, u || Number(N.value))
      }), T(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", _t("Rest added"), lt && (j("movements"), ge());
    } else {
      const f = o("addMovementInput").value.trim();
      if (!f) return;
      const M = o("addMovementGroup").value.trim() || "Movement";
      Je.push({
        id: "movement-" + Date.now(),
        name: f,
        group: M,
        kind: "work",
        hidden: !1,
        useGlobalTiming: t,
        duration: Math.max(5, i || Number(C.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", T(), o("movementCreator").hidden = !0, _t("Movement added"), lt && (j("movements"), ge());
    }
    Lr();
  }
  let Gi = null;
  function _t(t, i) {
    const s = o("toast");
    s.innerHTML = "";
    const u = document.createElement("span");
    if (u.textContent = t, s.appendChild(u), i) {
      const f = document.createElement("button");
      f.type = "button", f.className = "toastAction", f.textContent = i.label, f.addEventListener("click", () => {
        i.run(), s.classList.remove("show", "withAction"), clearTimeout(Gi);
      }), s.appendChild(f);
    }
    s.classList.toggle("withAction", !!i), s.classList.add("show"), clearTimeout(Gi), Gi = setTimeout(() => s.classList.remove("show", "withAction"), i ? 5e3 : 2200);
  }
  const bl = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], wl = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Ui(t) {
    return Math.max(0, Math.min(5, Math.floor(Number(t) / 100 * 6)));
  }
  function bo(t, i) {
    return bl[Ui(i)];
  }
  function xl(t) {
    return wl[Ui(t)];
  }
  function Ot(t) {
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  function Ka() {
    return { morning: nt().morningTime || "08:00", evening: nt().eveningTime || "19:00" };
  }
  function wo(t) {
    const [i, s] = String(t).split(":").map(Number);
    return (i || 0) * 60 + (s || 0);
  }
  function yl(t) {
    const i = Ka();
    return t.getHours() * 60 + t.getMinutes() >= wo(i.evening) ? "evening" : "morning";
  }
  function gi(t, i) {
    return st.checkins.find((s) => s.date === t && s.slot === i);
  }
  function Yi(t) {
    return !!(t && t.mood != null && t.energy != null);
  }
  function vi() {
    const t = /* @__PURE__ */ new Date(), i = Ot(t), s = yl(t), u = Ka(), f = t.getHours() * 60 + t.getMinutes();
    return s === "morning" && f < wo(u.morning) || Yi(gi(i, s)) ? null : s;
  }
  const $a = o("checkinModal"), Ea = o("checkinTab"), kl = o("checkinBadge"), ra = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function Zi(t) {
    const { input: i, fill: s } = ra[t];
    s.style.width = i.value + "%", i.setAttribute("aria-valuetext", bo(t, i.value));
  }
  Object.keys(ra).forEach((t) => ra[t].input.addEventListener("input", () => Zi(t)));
  let sa = null;
  function Ar() {
    const t = Ka(), i = /* @__PURE__ */ new Date(), s = i.getHours() * 60 + i.getMinutes();
    return s < wo(t.morning) ? "Next check-in at " + t.morning : s < wo(t.evening) ? "Next check-in at " + t.evening : "Next check-in tomorrow at " + t.morning;
  }
  function _r() {
    const t = Ka(), i = /* @__PURE__ */ new Date(), s = i.getHours() * 60 + i.getMinutes(), u = (f, M) => {
      const [D, z] = f.split(":").map(Number);
      return new Date(i.getFullYear(), i.getMonth(), i.getDate() + (M ? 1 : 0), D, z);
    };
    return s < wo(t.morning) ? { date: u(t.morning), time: t.morning } : s < wo(t.evening) ? { date: u(t.evening), time: t.evening } : { date: u(t.morning, !0), time: t.morning };
  }
  let Er = null, Dr = null;
  function cs() {
    if (vi()) {
      Ki(), la();
      return;
    }
    const t = _r(), i = Math.max(0, Math.round((t.date - Date.now()) / 1e3)), s = Math.floor(i / 3600), u = Math.floor(i % 3600 / 60), f = i % 60;
    o("peekCountdown").textContent = s + ":" + String(u).padStart(2, "0") + ":" + String(f).padStart(2, "0"), o("peekAt").textContent = "Available at " + t.time;
  }
  function Ml() {
    cs(), Ea.classList.add("peek"), clearInterval(Dr), Dr = setInterval(cs, 1e3), clearTimeout(Er), Er = setTimeout(Ki, 6e3);
  }
  function Ki() {
    Ea.classList.remove("peek"), clearInterval(Dr), clearTimeout(Er);
  }
  function Oo() {
    const t = vi();
    if (!t) {
      Ea.classList.contains("peek") ? Ki() : Ml();
      return;
    }
    sa = { date: Ot(/* @__PURE__ */ new Date()), slot: t };
    const s = gi(sa.date, t), u = st.checkins.find((f) => Yi(f));
    Object.keys(ra).forEach((f) => {
      ra[f].input.value = (s == null ? void 0 : s[f]) ?? (u == null ? void 0 : u[f]) ?? 50, Zi(f);
    }), o("checkinTitle").textContent = t === "morning" ? "Morning check-in" : "Evening check-in", $a.classList.add("open"), $a.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => ra.mood.input.focus());
  }
  function qo() {
    $a.classList.remove("open"), $a.setAttribute("aria-hidden", "true"), sa && (bi = sa.date + "-" + sa.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", bi);
    } catch {
    }
    sa = null, la();
  }
  function Cl() {
    if (!sa) return;
    if (Yi(gi(sa.date, sa.slot))) {
      qo();
      return;
    }
    const { date: t, slot: i } = sa;
    let s = gi(t, i);
    s || (s = { date: t, slot: i }, st.checkins.unshift(s), st.checkins = st.checkins.slice(0, 2e3)), s.mood = Number(ra.mood.input.value), s.energy = Number(ra.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), wn(), l.fire("checkin", { slot: i, mood: s.mood, energy: s.energy, mood_label: bo("mood", s.mood), energy_label: bo("energy", s.energy) }), _t((i === "morning" ? "Morning" : "Evening") + " check-in saved"), qo(), wi(), xi(), n(), p();
  }
  let bi = "";
  try {
    bi = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function la() {
    const t = vi();
    kl.hidden = !t, Ea.hidden = !t, t || Ki(), Ea.classList.toggle("due", !!t), Ea.setAttribute("aria-label", t ? (t === "morning" ? "Morning" : "Evening") + " check-in is due" : Ar()), Ea.title = t ? "Check in now" : Ar();
  }
  function $i() {
    la();
    const t = vi();
    !t || $a.classList.contains("open") || nt().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !be.home.classList.contains("active") || Sn.classList.contains("open") || bi !== Ot(/* @__PURE__ */ new Date()) + "-" + t && Oo());
  }
  Ea.addEventListener("click", Oo), o("checkinLater").addEventListener("click", qo), o("checkinSave").addEventListener("click", Cl), $a.addEventListener("click", (t) => {
    t.target === $a && qo();
  }), $a.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), qo());
  }), setInterval($i, 3e4);
  function wi() {
    const t = Ot(/* @__PURE__ */ new Date()), i = (s) => st.checkins.find((u) => u.date === t && u[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, u]) => {
      const f = i(s);
      o(u).textContent = f ? bo(s, f[s]) : "—";
    });
  }
  function xi() {
    const t = o("feelCard");
    if (!t) return;
    const i = /* @__PURE__ */ new Date(), s = new Date(i.getFullYear(), i.getMonth(), i.getDate() - (i.getDay() + 6) % 7), u = [...Array(7)].map((se, ee) => {
      const J = new Date(s.getFullYear(), s.getMonth(), s.getDate() + ee), Se = Ot(J), Ue = st.checkins.filter((Me) => Me.date === Se), _e = (Me) => {
        const xe = Ue.map((ct) => ct[Me]).filter((ct) => ct != null);
        return xe.length ? xe.reduce((ct, ut) => ct + ut, 0) / xe.length : null;
      };
      return { d: J, key: Se, mood: _e("mood"), energy: _e("energy"), count: Ue.filter(Yi).length, future: J > i && Se !== Ot(i) };
    }), f = (se) => {
      const ee = u.map((J) => J[se]).filter((J) => J != null);
      return ee.length ? ee.reduce((J, Se) => J + Se, 0) / ee.length : null;
    }, M = f("mood"), D = f("energy"), z = (se, ee) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + se + "</span><span>" + (ee == null ? "—" : He(bo("", ee))) + '</span></div><div class="feelTrack"><span style="width:' + (ee == null ? 0 : Math.max(4, ee)) + "%;background:" + (ee == null ? "transparent" : xl(ee)) + '"></span></div></div>', oe = u.filter((se) => se.mood != null && se.energy != null).sort((se, ee) => ee.mood + ee.energy - (se.mood + se.energy))[0];
    t.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (M == null ? "No check-ins yet" : He(bo("", (M + D) / 2))) + '</div><div class="weekCopy">' + (M == null ? "Your first check-in will appear here." : "on average this week" + (oe ? " · best day " + He(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(oe.d)) : "")) + '</div></div></div><div class="feelDays">' + u.map(
      (se) => '<div class="weekChip feelDay' + (se.future ? " future" : "") + (se.key === Ot(i) ? " today" : "") + '"><div class="weekChipTop"><strong>' + He(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(se.d)) + "</strong>" + (se.count >= 2 ? '<span class="weekTick">' + fe("check") + "</span>" : '<span class="feelDots">' + "●".repeat(se.count) + "</span>") + "</div>" + z("Mood", se.mood) + z("Energy", se.energy) + "</div>"
    ).join("") + "</div>";
  }
  const xo = o("upcomingCountSetting");
  xo.addEventListener("change", () => {
    ta = xo.value === "all" ? "all" : Number(xo.value), Hr();
  });
  const Wo = o("tempoRevealBtn"), yi = o("tempoExperiment"), fa = o("tempoQuad"), Vo = o("tempoDot"), Sl = o("tempoEstimate"), us = o("tempoReadout");
  let zo = { x: 0.5, y: 0.5 }, Xa = !1, Vt = { total: 20, work: 45, rest: 15 };
  function Rr(t, i, s, u) {
    const f = Math.max(i, Math.min(s, t));
    return Math.round((f - i) / u) * u + i;
  }
  function Xi(t, i) {
    const s = (t - 0.5) * 2, u = (i - 0.5) * 2, f = Rr(
      Vt.total + s * 5 + u * 8,
      Number(E.min),
      Number(E.max),
      Number(E.step)
    ), M = Rr(
      Vt.work + s * 10 + u * 8,
      Number(C.min),
      Number(C.max),
      Number(C.step)
    ), D = Rr(
      Vt.rest + s * 6 + u * 6,
      Number(N.min),
      Number(N.max),
      Number(N.step)
    );
    return E.value = f, C.value = M, N.value = D, V.textContent = M + " sec", ae.textContent = D + " sec", Yt(), { total: f, work: M, rest: D };
  }
  function Da(t, i) {
    const s = t < 0.34 ? "Low" : t > 0.66 ? "Hard" : "Medium", u = i < 0.34 ? "Fast" : i > 0.66 ? "Slow" : "Balanced", f = Xi(t, i);
    us.textContent = s + " + " + u, Sl.textContent = f.total + " min", fa.setAttribute("aria-valuetext", s + " and " + u + ", estimated " + f.total + " minutes");
  }
  function yo(t) {
    const i = fa.getBoundingClientRect(), s = Math.max(0, Math.min(1, (t.clientX - i.left) / i.width)), u = Math.max(0, Math.min(1, (t.clientY - i.top) / i.height));
    zo = { x: s, y: u }, Vo.style.left = s * 100 + "%", Vo.style.top = u * 100 + "%", Da(s, u);
  }
  Wo.addEventListener("click", () => {
    const t = yi.hidden;
    yi.hidden = !t, Wo.setAttribute("aria-expanded", t ? "true" : "false"), Wo.textContent = t ? "Now close this" : "Don’t try this!", t && (Vt = {
      total: Number(E.value),
      work: Number(C.value),
      rest: Number(N.value)
    }, zo = { x: 0.5, y: 0.5 }, Vo.style.left = "50%", Vo.style.top = "50%", Da(zo.x, zo.y));
  }), a.querySelectorAll("[data-feedback-rating]").forEach((t) => t.addEventListener("click", () => {
    Number(t.dataset.feedbackRating), a.querySelectorAll("[data-feedback-rating]").forEach((i) => i.classList.toggle("selected", i === t));
  }));
  const Ji = o("testingFeedbackForm"), ps = o("testingFeedbackThanks"), Tl = o("testingFeedbackAgain");
  Ji.addEventListener("submit", (t) => {
    t.preventDefault(), Ji.hidden = !0, ps.hidden = !1, _t("Feedback captured for prototype");
  }), Tl.addEventListener("click", (t) => {
    t.preventDefault(), Ji.reset(), a.querySelectorAll("[data-feedback-rating]").forEach((i) => i.classList.remove("selected")), ps.hidden = !0, Ji.hidden = !1;
  }), fa.addEventListener("pointerdown", (t) => {
    var i;
    Xa = !0, yo(t);
    try {
      (i = fa.setPointerCapture) == null || i.call(fa, t.pointerId);
    } catch {
    }
  }), fa.addEventListener("pointermove", (t) => {
    Xa && yo(t);
  }), fa.addEventListener("pointerup", (t) => {
    Xa && (Xa = !1, yo(t), T());
  }), fa.addEventListener("pointercancel", () => Xa = !1), fa.addEventListener("keydown", (t) => {
    let { x: i, y: s } = zo, u = !0;
    t.key === "ArrowLeft" ? i -= 0.05 : t.key === "ArrowRight" ? i += 0.05 : t.key === "ArrowUp" ? s -= 0.05 : t.key === "ArrowDown" ? s += 0.05 : u = !1, u && (t.preventDefault(), i = Math.max(0, Math.min(1, i)), s = Math.max(0, Math.min(1, s)), zo = { x: i, y: s }, Vo.style.left = i * 100 + "%", Vo.style.top = s * 100 + "%", Da(i, s), T());
  });
  const Sn = o("workoutModal");
  let ki = null;
  function jo(t) {
    return t.map((i) => ({ ...i }));
  }
  function Qi() {
    const t = Ye[ht];
    return {
      key: ht,
      profile: t ? JSON.parse(JSON.stringify(t)) : null,
      warmup: jo(St),
      strength: jo(Je),
      cooldown: jo(Cn),
      total: Number(E.value),
      work: Number(C.value),
      rest: Number(N.value),
      rounds: Number(tt.value) || 1
    };
  }
  function ma(t = !1) {
    lt = !!t, ue = null, ve = null, Bn(), ds(), ki = Qi(), o("moveEditorTitle").textContent = lt ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !lt, o("warmupRow").hidden = lt, o("deleteMoveOpen").hidden = lt;
    const i = o("createMoveOptions");
    i.hidden = !lt;
    {
      const s = Ye[ht];
      o("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), o("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (hs(), lt) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const s = Ye[ht];
      ui((s == null ? void 0 : s.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, vl("movement"), Lr(), _a(), yi.hidden = !0, Wo.setAttribute("aria-expanded", "false"), Wo.textContent = "Don’t try this!", Sn.classList.toggle("createMode", lt), Sn.querySelector(".modal").classList.toggle("createMode", lt), Sn.classList.add("open"), Sn.setAttribute("aria-hidden", "false"), ia(), lt && Te();
  }
  function Ll() {
    const t = Ye[ht];
    return t != null && t.customSequence ? !!t.includeWarmup : !(t != null && t.warmupOff);
  }
  function hs() {
    const t = Ll(), i = o("warmupSwitch");
    i.classList.toggle("on", t), i.setAttribute("aria-checked", String(t));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const t = Ye[ht];
    t && (t.customSequence ? (o("includeWarmupPreset").checked = !t.includeWarmup, fo()) : (t.warmupOff = !t.warmupOff, T()), hs());
  });
  function xn() {
    Bn(), ds(), Tr(), ve = null, ue = null, Sn.classList.contains("createMode") && b(), Sn.classList.remove("createMode"), Sn.querySelector(".modal").classList.remove("createMode"), Sn.classList.remove("open"), Sn.setAttribute("aria-hidden", "true");
  }
  function Et() {
    if (!ki) return;
    const t = ki;
    t.profile && (Ye[t.key] = JSON.parse(JSON.stringify(t.profile))), ht = t.key, St = jo(t.warmup), Je = jo(t.strength), Cn = jo(t.cooldown), E.value = t.total, C.value = t.work, N.value = t.rest, tt.value = t.rounds || 1;
    const i = Ye[ht];
    if (i) {
      a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === ht));
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const u = s.querySelector(".workoutName");
        u && (u.textContent = i.name);
        const f = s.querySelector(".panelCollapsedText");
        f && (f.textContent = i.name);
        const M = s.querySelector(".sourceTag");
        M && (M.textContent = i.source);
      }
      m.value = i.name;
    }
    T();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (lt) {
      const t = ht;
      delete Ye[t], lt = !1, vt = null, Vn(st.order.find((i) => Ye[i]) || Object.keys(Ye)[0]);
    } else
      Et();
    xn();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    Bn(), At && zi();
    const t = Ye[ht], i = m.value.trim() || "New move";
    if (t && (t.name = i), at(), ue = null, T(), lt && t)
      Ho(ht, t), a.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === ht)), lt = !1, vt = null, st.order.includes(ht) || st.order.push(ht), _t("Move created");
    else {
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const u = s.querySelector(".workoutName");
        u && (u.textContent = i);
        const f = s.querySelector(".panelCollapsedText");
        f && (f.textContent = i);
      }
      _t("Move saved");
    }
    ki = null, xn(), wn();
  }), Sn.addEventListener("click", (t) => {
    if (t.target === Sn) {
      if (lt) {
        const i = ht;
        delete Ye[i], lt = !1, vt = null, Vn(st.order.find((s) => Ye[s]) || Object.keys(Ye)[0]);
      } else
        Et();
      xn();
    }
  }), gt(o("addMovementBtn"), "movement"), gt(o("addRestBtn"), "rest"), gt(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", _a), o("useGlobalRestTiming").addEventListener("change", _a), a.querySelectorAll(".createPresetBtn").forEach((t) => t.addEventListener("click", () => {
    ui(t.dataset.movePreset, !0), T();
  })), o("includeWarmupPreset").addEventListener("change", fo), o("includeCooldownPreset").addEventListener("change", fo), o("includeWarmupPreset").addEventListener("change", ge), o("includeCooldownPreset").addEventListener("change", ge), m.addEventListener("input", ge), m.addEventListener("input", kr), o("confirmAddMovement").addEventListener("click", ji), o("confirmAddRest").addEventListener("click", ji), o("addMovementInput").addEventListener("keydown", (t) => {
    t.key === "Enter" && ji();
  });
  const Pn = o("countdown"), Mi = o("countNum"), Tn = o("countdownPixelCanvas");
  let Ja = null, xa = "appear";
  class er {
    constructor(i, s, u, f, M, D, z) {
      this.width = i.width, this.height = i.height, this.ctx = s, this.x = u, this.y = f, this.color = M, this.speed = (Math.random() * 0.8 + 0.1) * D, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = z, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
    }
    draw() {
      const i = this.maxSizeInteger * 0.5 - this.size * 0.5;
      this.ctx.fillStyle = this.color, this.ctx.fillRect(this.x + i, this.y + i, this.size, this.size);
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
  let Ra = [], qt = 1, Ci = 1;
  function ya() {
    const t = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(t) && t > 0 ? t : 1;
  }
  function fs() {
    var se;
    if (!Tn) return;
    const t = ya(), i = Math.max(1, window.innerWidth / t), s = Math.max(1, window.innerHeight / t);
    qt = i, Ci = s;
    const u = Math.min(window.devicePixelRatio || 1, 2);
    Tn.width = Math.floor(i * u), Tn.height = Math.floor(s * u), Tn.style.width = i + "px", Tn.style.height = s + "px";
    const f = Tn.getContext("2d");
    f.setTransform(u, 0, 0, u, 0, 0);
    const M = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], D = 12, z = (se = window.matchMedia) == null ? void 0 : se.call(window, "(prefers-reduced-motion: reduce)").matches, oe = z ? 0 : 0.055;
    Ra = [];
    for (let ee = 0; ee < i; ee += D)
      for (let J = 0; J < s; J += D) {
        const Se = ee - i / 2, Ue = J - s / 2, _e = Math.sqrt(Se * Se + Ue * Ue), Me = z ? 0 : Math.random() * 75 + _e * 0.05, xe = new er({ width: i, height: s }, f, ee, J, M[Math.floor(Math.random() * M.length)], oe, Me);
        xe.maxSizeInteger = 4, xe.maxSize = Math.random() * 3.2 + 0.8, xe.sizeStep = 0.35 + Math.random() * 0.45, Ra.push(xe);
      }
  }
  function Nr(t) {
    cancelAnimationFrame(Ja), xa = t;
    const i = Tn == null ? void 0 : Tn.getContext("2d");
    if (!i) return;
    function s() {
      i.clearRect(0, 0, qt, Ci);
      let u = !0;
      Ra.forEach((f) => {
        f[xa](), f.isIdle || (u = !1);
      }), xa === "disappear" && u || (Ja = requestAnimationFrame(s));
    }
    Ja = requestAnimationFrame(s);
  }
  function Si() {
    cancelAnimationFrame(Ja), fs(), Nr("appear"), setTimeout(() => Nr("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Pn.classList.contains("active") && Si();
  });
  const Go = o("pixelTrailCanvas"), Uo = Go.getContext("2d");
  let In = !0, an = 0.7, Na = 600, Yo = [], ko = null, ka = { x: 0, y: 0, ready: !1 };
  function tr() {
    const t = c.getBoundingClientRect(), i = ya(), s = Math.min(window.devicePixelRatio || 1, 2), u = Math.max(1, t.width / i), f = Math.max(1, t.height / i);
    Go.width = Math.max(1, Math.floor(u * s)), Go.height = Math.max(1, Math.floor(f * s)), Go.style.width = u + "px", Go.style.height = f + "px", Uo.setTransform(s, 0, 0, s, 0, 0);
  }
  function Al(t, i) {
    if (!In) return;
    const s = performance.now();
    ka.ready || (ka = { x: t, y: i, ready: !0 });
    const u = 7;
    for (let f = 1; f <= u; f++) {
      const M = f / u;
      Yo.push({
        x: ka.x + (t - ka.x) * M,
        y: ka.y + (i - ka.y) * M,
        born: s - (u - f) * 10
      });
    }
    ka = { x: t, y: i, ready: !0 };
  }
  function da(t) {
    if (ko = null, !g) return;
    if (!be.workout.classList.contains("active")) {
      ko = requestAnimationFrame(da);
      return;
    }
    const i = c.getBoundingClientRect(), s = ya();
    Uo.clearRect(0, 0, i.width / s, i.height / s), In && (Yo = Yo.filter((f) => t - f.born < Na), Uo.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Yo.forEach((f) => {
      const M = (t - f.born) / Na, D = (1 - M) * an, z = Math.round(f.x / 14) * 14, oe = Math.round(f.y / 14) * 14;
      Uo.globalAlpha = Math.max(0, D);
      const se = 2 + 5 * (1 - M) * an;
      Uo.fillRect(z - se / 2, oe - se / 2, se, se);
    }), Uo.globalAlpha = 1), ko = requestAnimationFrame(da);
  }
  c.addEventListener("pointermove", (t) => {
    const i = c.getBoundingClientRect(), s = ya();
    Al((t.clientX - i.left) / s, (t.clientY - i.top) / s);
  }), c.addEventListener("pointerleave", () => ka.ready = !1), new ResizeObserver(tr).observe(c), tr(), ko = requestAnimationFrame(da);
  const Hn = o("movementRippleCanvas"), Zo = Hn.getContext("2d");
  let Ba = !0, Qa = null, ms = performance.now();
  function gs() {
    const t = Hn.parentElement.getBoundingClientRect(), i = ya(), s = Math.max(1, t.width / i), u = Math.max(1, t.height / i), f = Math.min(window.devicePixelRatio || 1, 2);
    Hn.width = Math.max(1, Math.floor(s * f)), Hn.height = Math.max(1, Math.floor(u * f)), Hn.style.width = s + "px", Hn.style.height = u + "px", Zo.setTransform(f, 0, 0, f, 0, 0);
  }
  function vs() {
    var t;
    return Rt || ((t = Be[Ve]) == null ? void 0 : t.kind) === "rest";
  }
  function Br() {
    const t = Be[Ve];
    return vs() ? 2200 : t ? t.kind === "warmup" || t.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Fn(t) {
    if (Qa = null, !g) return;
    if (!be.workout.classList.contains("active")) {
      Qa = requestAnimationFrame(Fn);
      return;
    }
    const i = Hn.parentElement.getBoundingClientRect(), s = ya(), u = Math.max(1, i.width / s), f = Math.max(1, i.height / s);
    if (Zo.clearRect(0, 0, u, f), Ba) {
      const M = Br(), D = (t - ms) % M / M, z = 15, oe = Math.max(8, Math.round(z * f / Math.max(1, u))), se = u / (z + 1), ee = f / (oe + 1), J = u * 0.5, Se = f * 0.52, Ue = Math.hypot(J, Se), Me = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let xe = 1; xe <= oe; xe++)
        for (let ct = 1; ct <= z; ct++) {
          const ut = ct * se, Ee = xe * ee, pt = Math.hypot(ut - J, Ee - Se) / Ue, Mt = vs(), ot = Mt ? Math.exp(-Math.pow((pt - (D * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, $e = Math.exp(-Math.pow((pt - D * 1.25) * 7, 2)), ln = Mt ? ot : $e, Mn = Mt ? 0.5 + 0.5 * Math.sin(D * Math.PI * 2 - pt * 3) ** 2 : 0.35 + 0.65 * Math.sin(D * Math.PI * 2 - pt * 5) ** 2, Ht = Mt ? 1.4 + ln * 4.2 * Mn : 1.2 + ln * 5 * Mn;
          Zo.beginPath(), Zo.arc(ut, Ee, Ht, 0, Math.PI * 2), Zo.fillStyle = `rgba(${Me},${Mt ? 0.08 + ln * 0.48 : 0.05 + ln * 0.55})`, Zo.fill();
        }
    }
    Qa = requestAnimationFrame(Fn);
  }
  new ResizeObserver(gs).observe(Hn.parentElement), gs(), Qa = requestAnimationFrame(Fn);
  const eo = o("exerciseTitle"), Pa = o("exerciseMeta"), Pr = o("stepLabel"), Ir = o("digits"), Dt = o("fill"), Ln = o("progress"), ga = o("pause"), Ia = o("nextName"), An = o("nextMeta"), Ha = o("nextIcon"), Ko = o("skipNextSession");
  let cn = null;
  function On(t) {
    for (let i = Math.max(0, t); i < Be.length; i++)
      if (!Be[i].sessionHidden) return i;
    return -1;
  }
  function _l() {
    const t = Be[Ve];
    if (!t) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Rt) {
      const u = On(Ve + 1), f = u >= 0 ? Be[u] : null;
      return f ? { name: f.name, meta: to(f), icon: on(f) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (t.rest > 0) return { name: "Rest", meta: t.rest + " sec · " + (t.roundBreakAfter ? "round " + (t.round + 1) + " next" : "recovery"), icon: "pause" };
    const i = On(Ve + 1), s = i >= 0 ? Be[i] : null;
    return s ? { name: s.name, meta: to(s), icon: on(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function bs() {
    if (!Be[Ve]) return Be.length;
    const i = On(Ve + 1);
    return i < 0 ? Be.length : i + 1;
  }
  function on(t) {
    return t.kind === "video" ? "play" : "clock";
  }
  function to(t) {
    return t.kind === "video" ? "YouTube · " + bt(t.duration) : t.group + " · " + t.duration + " sec";
  }
  function Ti() {
    return Be.length && Be[Be.length - 1].round || 1;
  }
  function ws(t) {
    const i = Be[t];
    if (!i) return "";
    const s = Ti();
    if (s <= 1) return "Step " + (t + 1) + " of " + Be.length;
    if (i.roundBreak) return "Round " + i.round + " of " + s + " · Rest";
    const u = Be.filter((f) => f.round === i.round && !f.roundBreak).length;
    return "Round " + i.round + " of " + s + " · Step " + (i.roundIndex + 1) + " of " + u;
  }
  function xs() {
    return Ln.querySelector('[data-step="' + Ve + '"]');
  }
  function ys() {
    Be[Ve] && Number(Ln.dataset.round) !== (Be[Ve].round || 1) && Wr(), [...Ln.children].forEach((t) => {
      const i = Number(t.dataset.step);
      t.classList.toggle("done", i < Ve), t.classList.toggle("active", i === Ve), t.classList.toggle("rewindable", i <= Ve), t.disabled = i > Ve, i === Ve && t.style.setProperty("--segment-progress", "0%");
    }), Be[Ve] && (Pr.textContent = ws(Ve), qa());
  }
  function ks(t) {
    const i = Be.indexOf(t);
    i < 0 || i <= Ve || (t.sessionHidden = !t.sessionHidden, Mo(), _t((t.sessionHidden ? "Hidden " : "Included ") + t.name + " for this session"));
  }
  function Hr() {
    const t = o("upcomingList");
    if (!t) return;
    t.innerHTML = "";
    const i = bs(), s = Be.slice(i);
    (ta === "all" ? s : s.slice(0, Math.max(1, Number(ta) || 1))).forEach((f) => {
      const M = document.createElement("section");
      M.className = "upcomingCard" + (f.sessionHidden ? " sessionHidden" : "") + (Ur(f) ? " noMeta" : ""), M.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + fe(on(f)) + '</div><div><div class="upcomingName">' + He(f.name) + '</div><div class="upcomingMeta">' + He(to(f)) + (Ti() > 1 ? " · round " + f.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (f.sessionHidden ? "Include this session" : "Skip this session") + "</button>", M.querySelector(".skipSessionBtn").addEventListener("click", () => ks(f)), t.appendChild(M);
    });
  }
  function Mo() {
    var i;
    const t = _l();
    Ia.textContent = t.name, An.textContent = t.meta, Ha.innerHTML = fe(t.icon);
    {
      const s = Rt ? Be[On(Ve + 1)] : ((i = Be[Ve]) == null ? void 0 : i.rest) > 0 ? { kind: "rest" } : Be[On(Ve + 1)];
      a.querySelector(".nextCard").classList.toggle("noMeta", !!(s && Ur(s)));
    }
    if (cn = null, Rt) {
      const s = On(Ve + 1);
      s >= 0 && (cn = Be[s]);
    } else {
      const s = Be[Ve];
      if (s && s.rest > 0)
        cn = null;
      else {
        const u = On(Ve + 1);
        u >= 0 && (cn = Be[u]);
      }
    }
    Ko && (Ko.hidden = !cn, Ko.textContent = cn != null && cn.sessionHidden ? "Include this session" : "Skip this session"), Hr();
  }
  Ko.addEventListener("click", () => {
    cn && (cn.sessionHidden = !cn.sessionHidden, _t((cn.sessionHidden ? "Hidden " : "Included ") + cn.name + " for this session"), Mo());
  });
  let Ma = null, Fr = null;
  function un(t, i = {}) {
    const s = Ye[ht];
    l.fire(t, { move: (s == null ? void 0 : s.name) || "", move_id: ht, ...i });
  }
  function Or() {
    const t = Ye[ht];
    Ma = { key: ht, name: (t == null ? void 0 : t.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Fr), Fr = setInterval(() => {
      Ma && !kn && Ma.active++;
    }, 1e3), un("started", { steps: Be.length });
  }
  function qr(t) {
    if (clearInterval(Fr), !Ma) return;
    const i = Ma;
    Ma = null, un(t ? "completed" : "ended", { seconds: i.active }), !(i.active < 30) && (st.history.unshift({ id: "h-" + i.startedAt, move_id: i.key, name: i.name, start: new Date(i.startedAt).toISOString(), seconds: i.active, completed: t }), st.history = st.history.slice(0, 1e3), wn(), n(), p());
  }
  function Ms() {
    k("workout"), El();
    const t = On(0);
    t >= 0 && Be[t].kind === "video" && yn(Be[t]);
  }
  function Li() {
    Qe(), qr(!1), clearInterval(kt), clearInterval(po), Rt = !1, Fa(!1), o("app").classList.remove("resting"), Pn.classList.remove("active"), k("home");
  }
  function El() {
    Pn.classList.add("active");
    let t = 5;
    Mi.textContent = t, requestAnimationFrame(Si), clearInterval(po), po = setInterval(() => {
      t--, t > 0 ? (Mi.textContent = t, Si()) : (clearInterval(po), Mi.textContent = "GO", Si(), setTimeout(() => {
        Pn.classList.remove("active"), cancelAnimationFrame(Ja), Ss();
      }, 650));
    }, 1e3);
  }
  function Wr() {
    var i;
    Ln.innerHTML = "";
    const t = ((i = Be[Math.max(0, Ve)] || Be[0]) == null ? void 0 : i.round) || 1;
    Ln.dataset.round = t, Be.forEach((s, u) => {
      if ((s.round || 1) !== t) return;
      const f = document.createElement("button");
      f.dataset.step = u, f.type = "button", f.className = "progressSegment", f.setAttribute("aria-label", "Go to " + s.name), f.addEventListener("click", () => {
        u <= Ve && Cs(u);
      }), Ln.appendChild(f);
    });
  }
  function Fa(t) {
    t = !!t;
    const i = kn !== t;
    if (kn = t, ga.textContent = t ? "Resume" : "Pause", o("app").classList.toggle("paused", t), Zt && Bt)
      try {
        t ? Bt.pauseVideo() : Bt.playVideo();
      } catch {
      }
    i && Ma && un(t ? "paused" : "resumed");
  }
  function Cs(t) {
    t < 0 || t >= Be.length || t > Ve || (clearInterval(kt), Rt = !1, o("app").classList.remove("resting"), Ve = t, Fa(!1), oo(), kt = setInterval(va, 1e3));
  }
  function Ss() {
    if (Ve = On(0), Fa(!1), Wr(), Ve < 0) {
      eo.textContent = "No activities", Pa.textContent = "Open Edit and enable or add a movement", Pa.hidden = !1;
      return;
    }
    Or(), oo(), clearInterval(kt), kt = setInterval(va, 1e3);
  }
  const Ts = o("videoStage"), Co = o("videoSound"), Ls = 0, So = 1, As = 2;
  let $o = 0, Xo = null, no = null, Bt = null, To = null, ao = 0, nr = !1, Zt = null, ar = null;
  function or() {
    var t;
    return (t = window.YT) != null && t.Player ? Promise.resolve(window.YT) : Xo || (Xo = new Promise((i, s) => {
      const u = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          u == null || u();
        } catch {
        }
      };
      const f = setInterval(() => {
        var D;
        (D = window.YT) != null && D.Player && (clearInterval(f), clearTimeout(M), i(window.YT));
      }, 100), M = setTimeout(() => {
        clearInterval(f), Xo = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const D = document.createElement("script");
        D.src = "https://www.youtube.com/iframe_api", D.async = !0, D.onerror = () => {
          clearInterval(f), clearTimeout(M), Xo = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(D);
      }
    }), Xo);
  }
  function _s() {
    return no || (no = or().then((t) => new Promise((i) => {
      const s = document.createElement("div");
      o("videoFrame").appendChild(s), Bt = new t.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => i(Bt), onStateChange: (u) => Vr(u.data), onError: (u) => Rl(u.data) }
      });
    })), no.catch(() => {
      no = null;
    }), no);
  }
  function yn(t) {
    !(t != null && t.videoId) || t.videoError || _s().then((i) => {
      Zt || To === t.videoId || (To = t.videoId, ao = Number(t.start) || 0, nr = !1, i.mute(), i.loadVideoById({ videoId: t.videoId, startSeconds: ao }));
    }).catch(() => {
    });
  }
  function Dl() {
    const t = On(Ve + 1);
    t >= 0 && Be[t].kind === "video" && yn(Be[t]);
  }
  function Vr(t) {
    if (!Zt) {
      t === So && !nr && (nr = !0, Bt.pauseVideo(), Bt.seekTo(ao, !0));
      return;
    }
    Ts.classList.toggle("playing", t === So), Be[Ve] === Zt && performance.now() > $o && (t === So && kn ? Fa(!1) : t === As && !kn && Fa(!0)), t === So && Oa(Zt.videoId, Bt.getDuration()) && wn(), t === Ls && Jo();
  }
  function Rl(t) {
    const i = Zt;
    if (!i) {
      To = null;
      return;
    }
    t === 101 || t === 150 ? (Ds(i.videoId), _t("That video can’t play outside YouTube, so it was skipped")) : _t("The video couldn’t play, so it was skipped"), Jo();
  }
  function Nl(t) {
    if (o("app").classList.add("videoStep"), Co.hidden = !0, Zt = t, clearTimeout(ar), !t.videoId) {
      _t("This video step has no link yet, so it was skipped"), setTimeout(() => Jo(), 0);
      return;
    }
    _s().then((i) => {
      if (Zt !== t) return;
      $o = performance.now() + 1500;
      const s = Number(t.start) || 0;
      To !== t.videoId ? (To = t.videoId, ao = s, i.loadVideoById({ videoId: t.videoId, startSeconds: s })) : (i.seekTo(s, !0), i.playVideo()), i.unMute(), kn && i.pauseVideo(), ar = setTimeout(() => {
        Zt !== t || kn || (i.getPlayerState() !== So ? (i.mute(), i.playVideo(), Co.hidden = !1) : i.isMuted() && (Co.hidden = !1));
      }, 1600);
    }).catch(() => {
      Zt === t && (_t("YouTube didn’t load, so the video was skipped"), Jo());
    });
  }
  function Es() {
    if (!o("app").classList.contains("videoStep")) return;
    const t = a.querySelector(".workGrid"), i = a.querySelector(".sessionControlRow"), s = t.getBoundingClientRect().top, u = (i == null ? void 0 : i.offsetHeight) || 42, f = window.innerHeight - s - 16 - u - 84;
    t.style.setProperty("--theater-h", Math.max(240, Math.round(f)) + "px");
  }
  window.addEventListener("resize", Es);
  function Qe() {
    clearTimeout(ar);
    const t = Zt;
    if (Zt = null, o("app").classList.remove("videoStep"), Ts.classList.remove("playing"), Co.hidden = !0, t && Bt) {
      try {
        Bt.pauseVideo();
      } catch {
      }
      To = null;
    }
  }
  function Jo() {
    const t = Zt;
    !t || Be[Ve] !== t || (Qe(), clearInterval(kt), Lo(), kt = setInterval(va, 1e3));
  }
  Co.addEventListener("click", () => {
    Bt && (Bt.unMute(), Bt.playVideo()), Co.hidden = !0;
  });
  function Ai(t) {
    var u;
    const i = Number(t.start) || 0;
    if (t.useVideoLength === !1) return i + (Number(t.duration) || 300);
    const s = Bt && Zt === t && Number((u = Bt.getDuration) == null ? void 0 : u.call(Bt)) || 0;
    return Number(t.end) || s || Number(t.videoDuration) || i + (Number(t.duration) || 300);
  }
  function ir(t, i) {
    const s = Ye[ht];
    [St, Je, Cn, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((u) => (Array.isArray(u) ? u : []).forEach((f) => {
      f && f.kind === "video" && f.videoId === t && i(f);
    }));
  }
  function Oa(t, i) {
    i = Math.round(Number(i) || 0);
    let s = !1;
    return t && i > 0 && ir(t, (u) => {
      u.videoDuration !== i && (u.videoDuration = i, s = !0);
    }), s;
  }
  function Ds(t) {
    ir(t, (i) => {
      i.videoError = "embed";
    }), wn();
  }
  function Bl(t) {
    const i = t.videoId;
    if (!i) return;
    const s = () => {
      Sn.classList.contains("open") ? ue || T() : (T(), wn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + i)).then((u) => u.ok ? u.json() : Promise.reject(u.status)).then((u) => {
      t.videoId === i && (t.videoTitle = u.title || "", t.autoName && u.title && (t.name = u.title), s());
    }).catch((u) => {
      t.videoId === i && u === 401 && (t.videoError = "embed", s());
    }), Rs(i).then((u) => {
      Oa(i, u) && s();
    }).catch((u) => {
      u === "embed" && t.videoId === i && (t.videoError = "embed", s());
    });
  }
  function Rs(t) {
    return or().then((i) => new Promise((s, u) => {
      const f = document.createElement("div");
      f.className = "videoProbe", f.setAttribute("aria-hidden", "true");
      const M = document.createElement("div");
      f.appendChild(M), o("app").appendChild(f);
      let D = null, z = !1;
      const oe = (J, Se) => {
        z || (z = !0, clearTimeout(se), setTimeout(() => {
          try {
            D == null || D.destroy();
          } catch {
          }
          f.remove();
        }, 0), Se ? u(Se) : s(J));
      }, se = setTimeout(() => oe(0), 2e4), ee = () => {
        var Se;
        const J = Number((Se = D == null ? void 0 : D.getDuration) == null ? void 0 : Se.call(D)) || 0;
        return J > 0 && oe(J), J > 0;
      };
      D = new i.Player(M, {
        width: 320,
        height: 180,
        videoId: t,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            ee() || (D.mute(), D.playVideo());
          },
          onStateChange: () => ee(),
          onError: (J) => oe(0, J.data === 101 || J.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function oo() {
    Rt = !1;
    const t = Be[Ve];
    o("app").classList.toggle("resting", t.kind === "rest"), t.kind === "video" ? Nl(t) : Qe(), Gt = t.duration, zn = t.duration, eo.textContent = t.name, Pa.textContent = t.group, Pa.hidden = !0, Pr.textContent = ws(Ve), Ma && un("step", { name: t.name, group: t.group, kind: t.kind, step: Ve + 1, of: Be.length, round: t.round || 1, rounds: Ti(), duration: t.duration }), Mo(), ys(), Dl(), t.kind === "video" && setTimeout(Es, 0);
  }
  function qa() {
    var f;
    const t = ((f = Be[Ve]) == null ? void 0 : f.kind) === "video" && !Rt, i = t && Gt >= 60;
    Ir.textContent = i ? bt(Gt) : Gt, Ir.classList.toggle("long", i), t && (o("videoClock").textContent = bt(Gt) + " left");
    const s = Gt / zn * 100;
    Dt.style.width = s + "%";
    const u = xs();
    if (u && !Rt) {
      const M = 100 - s;
      u.style.setProperty("--segment-progress", M + "%");
    }
  }
  function va() {
    var i, s;
    if (kn) return;
    const t = Be[Ve];
    if ((t == null ? void 0 : t.kind) === "video" && !Rt && Zt === t) {
      const u = Number((i = Bt == null ? void 0 : Bt.getCurrentTime) == null ? void 0 : i.call(Bt)) || 0, f = Number(t.start) || 0, M = Ai(t);
      zn = Math.max(1, M - f), (u > f || ((s = Bt == null ? void 0 : Bt.getPlayerState) == null ? void 0 : s.call(Bt)) === So) && (Gt = Math.max(0, Math.ceil(M - u))), qa(), u > f && u >= M - 0.25 && Jo();
      return;
    }
    Gt--, qa(), Gt <= 0 && (t.rest > 0 ? rr(t.rest) : Lo());
  }
  function rr(t) {
    var s;
    Rt = !0, o("app").classList.add("resting");
    const i = xs();
    i && i.style.setProperty("--segment-progress", "100%"), clearInterval(kt), Gt = t, zn = t, Ma && un("rest", { duration: t }), eo.textContent = "Rest", Pa.textContent = (s = Be[Ve]) != null && s.roundBreakAfter ? "Round " + (Be[Ve].round + 1) + " next" : "Recovery", Mo(), qa(), kt = setInterval(() => {
      kn || (Gt--, qa(), Gt <= 0 && (clearInterval(kt), Lo(), kt = setInterval(va, 1e3)));
    }, 1e3);
  }
  function Lo() {
    Rt = !1;
    const t = On(Ve + 1);
    if (t >= 0)
      Ve = t, oo();
    else {
      clearInterval(kt), Qe(), Fa(!1), o("app").classList.remove("resting"), eo.textContent = "Complete", Pa.textContent = "Move finished", Pa.hidden = !1, Ir.textContent = "✓";
      {
        const i = Ti();
        Pr.textContent = i > 1 ? i + " rounds done" : Be.filter((s) => !s.roundBreak).length + " steps done";
      }
      qr(!0);
      {
        const i = r(7).reduce((s, u) => s + u.minutes, 0);
        Pa.textContent = "Move finished · " + i + " min in the last 7 days";
      }
      Dt.style.width = "100%", Mo();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    zr(), Fa(!1);
  });
  function zr() {
    clearInterval(kt);
    const t = Be[Ve];
    if (Rt) {
      Rt = !1, o("app").classList.remove("resting");
      const s = On(Ve + 1);
      s >= 0 ? (Ve = s, oo(), kt = setInterval(va, 1e3)) : Lo();
      return;
    }
    if (t && t.rest > 0) {
      rr(t.rest);
      return;
    }
    const i = On(Ve + 1);
    i >= 0 ? (Ve = i, oo(), kt = setInterval(va, 1e3)) : Lo();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(kt), Fa(!1), Rt) {
      const t = Be[Ve];
      Gt = t.rest, zn = t.rest, eo.textContent = "Rest", Pa.textContent = "Recovery", o("app").classList.add("resting"), Mo(), qa();
    } else
      oo();
    kt = setInterval(Rt ? () => {
      kn || (Gt--, qa(), Gt <= 0 && (clearInterval(kt), Lo(), kt = setInterval(va, 1e3)));
    } : va, 1e3);
  });
  function Qo(t, i, s, u) {
    let f = 0, M = null, D = !1;
    function z() {
      M && cancelAnimationFrame(M), M = null, f = 0, D = !1, i.style.width = "0%", t.classList.remove("holding");
    }
    function oe(J) {
      if (!D) return;
      f || (f = J);
      const Se = Math.min(1, (J - f) / s);
      if (i.style.width = Se * 100 + "%", Se >= 1) {
        D = !1, M && cancelAnimationFrame(M), M = null, i.style.width = "100%", setTimeout(() => i.style.width = "0%", 90), u();
        return;
      }
      M = requestAnimationFrame(oe);
    }
    function se(J) {
      var Se;
      if (!(J && J.button !== void 0 && J.button !== 0)) {
        J == null || J.preventDefault(), z(), D = !0, t.classList.add("holding");
        try {
          (Se = t.setPointerCapture) == null || Se.call(t, J.pointerId);
        } catch {
        }
        M = requestAnimationFrame(oe);
      }
    }
    function ee() {
      D && z();
    }
    t.addEventListener("pointerdown", se), t.addEventListener("pointerup", ee), t.addEventListener("pointercancel", ee), t.addEventListener("lostpointercapture", ee), t.addEventListener("keydown", (J) => {
      (J.key === " " || J.key === "Enter") && !J.repeat && se(J);
    }), t.addEventListener("keyup", (J) => {
      (J.key === " " || J.key === "Enter") && ee();
    });
  }
  const _i = o("endWorkout");
  Qo(_i, o("holdEndFill"), 1500, Li);
  const Wa = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    Wa.classList.add("open"), Wa.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    Wa.classList.remove("open"), Wa.setAttribute("aria-hidden", "true");
  });
  function jr() {
    const t = ht, i = a.querySelector('.workoutPanel[data-workout="' + t + '"]');
    i && i.remove(), delete Ye[t], st.order = st.order.filter((u) => u !== t);
    let s = a.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const u = "custom-" + Date.now();
      Ye[u] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, st.order.push(u), s = Ho(u, Ye[u]);
    }
    Wa.classList.remove("open"), Wa.setAttribute("aria-hidden", "true"), ki = null, xn(), Vn(s.dataset.workout), wn(), _t("Move deleted");
  }
  Qo(o("deleteMoveYes"), o("deleteMoveFill"), 1500, jr);
  const sr = a.querySelector(".rubberTabs"), Va = o("rubberIndicator");
  function Ao(t, i = !0) {
    if (!t || !sr || !Va) return;
    const s = sr.getBoundingClientRect(), u = t.getBoundingClientRect();
    Va.style.transition = i ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const f = ya();
    Va.style.left = (u.left - s.left) / f + sr.scrollLeft + "px", Va.style.width = u.width / f + "px", i && (Va.style.transform = "scaleX(1.08)", setTimeout(() => Va.style.transform = "scaleX(1)", 180));
  }
  a.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => {
    t.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), a.querySelectorAll(".tab").forEach((i) => i.classList.remove("active")), a.querySelectorAll(".settingsPane").forEach((i) => i.classList.remove("active")), t.classList.add("active"), o(t.dataset.pane).classList.add("active"), Ao(t, !0);
  })), requestAnimationFrame(() => Ao(a.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Ao(a.querySelector(".tab.active"), !1));
  const lr = o("pixelTrailToggle"), Gr = o("rippleToggle"), ei = o("trailStrength"), _o = o("trailLife");
  function ca(t, i) {
    nt()[t] = i, wn();
  }
  const Ns = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Bs(t) {
    return t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "g:" + String(t.group || "").trim().toLowerCase();
  }
  function Ur(t) {
    var i;
    return !!((i = nt().hideMeta) != null && i[Bs(t)]);
  }
  function Yr() {
    const t = /* @__PURE__ */ new Map(), i = (s, u, f) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const M = Bs(s);
      let D = t.get(M);
      D || (D = { key: M, label: M === "rest" ? "Rest" : M === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, t.set(M, D)), D.kinds.add(M === "rest" ? "Rest" : M === "video" ? "Video" : u), D.moves.add(f), D.count++;
    };
    return Object.values(Ye).forEach((s) => {
      const u = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Xe)).forEach((f) => i(f, "Warm-up", u)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((f) => i(f, f.presetRole === "warmup" ? "Warm-up" : f.presetRole === "cooldown" ? "Cooldown" : "Movement", u)), (s.cooldown || (s.customSequence ? [] : bn)).forEach((f) => i(f, "Cooldown", u));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, u]) => {
      t.has(s) || t.set(s, { key: s, label: u, kinds: /* @__PURE__ */ new Set([u]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...t.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, u) => Ns.indexOf(s.kind) - Ns.indexOf(u.kind) || s.label.localeCompare(u.label));
  }
  let dr = "all";
  function Zr() {
    const t = o("metaSearch").value.trim().toLowerCase();
    return Yr().filter((i) => (dr === "all" || i.kind === dr) && (!t || i.label.toLowerCase().includes(t) || i.moves.some((s) => s.toLowerCase().includes(t))));
  }
  function Ei() {
    const t = o("metaTableBody");
    if (!t) return;
    const i = nt().hideMeta || {}, s = Zr();
    t.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((f) => {
      const M = !i[f.key], D = f.count ? (f.moves.length > 2 ? f.moves.slice(0, 2).join(", ") + " + " + (f.moves.length - 2) + " more" : f.moves.join(", ")) + " · " + f.count + " step" + (f.count === 1 ? "" : "s") : "Not used yet", z = document.createElement("tr");
      z.className = M ? "" : "off", z.innerHTML = '<td><div class="metaType">' + He(f.label) + '</div><div class="metaSub">' + He(f.kind + " · " + D) + '</div></td><td class="metaKindCol">' + He(f.kind) + '</td><td class="metaUsedCol">' + He(D) + '</td><td class="metaSwitchCol"><button class="switch' + (M ? " on" : "") + '" type="button" role="switch" aria-checked="' + M + '" aria-label="Second line for ' + He(f.label) + ' on phones"></button></td>', z.querySelector(".switch").addEventListener("click", () => ti([f.key], M)), t.appendChild(z);
    });
    const u = s.filter((f) => i[f.key]).length;
    o("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (u ? " · " + u + " hidden on phones" : "") : "";
  }
  function ti(t, i) {
    const s = { ...nt().hideMeta || {} };
    t.forEach((u) => {
      i ? s[u] = !0 : delete s[u];
    }), ca("hideMeta", s), Ei(), Pe(), Mo();
  }
  o("metaSearch").addEventListener("input", Ei), o("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.addEventListener("click", () => {
    dr = t.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((i) => i.classList.toggle("active", i === t)), Ei();
  })), o("metaHideAll").addEventListener("click", () => ti(Zr().map((t) => t.key), !0)), o("metaShowAll").addEventListener("click", () => ti(Zr().map((t) => t.key), !1));
  const Eo = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...nt().toggles || {} };
  function ni() {
    a.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", Eo[s.dataset.toggle] !== !1)), a.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, u]) => {
      o(u).hidden = Eo[s] === !1;
    });
    const t = ["steps", "mood", "energyLevel"].some((s) => Eo[s] !== !1);
    a.querySelector(".activityCard").hidden = !t, o("weatherCard").hidden = !0;
    const i = a.querySelector("#homeView .grid");
    i.classList.toggle("noActivity", !t), i.classList.toggle("noWeather", !0);
  }
  a.querySelectorAll("[data-toggle]").forEach((t) => t.addEventListener("click", () => {
    Eo[t.dataset.toggle] = Eo[t.dataset.toggle] === !1, ni(), ca("toggles", { ...Eo });
  })), ni();
  function Pl() {
    lr.classList.toggle("on", In), Gr.classList.toggle("on", Ba), ei.value = Math.round(an * 100), o("trailStrengthValue").textContent = ei.value + "%", _o.value = Na, o("trailLifeValue").textContent = _o.value + " ms";
  }
  nt().trailEnabled !== void 0 && (In = nt().trailEnabled), nt().rippleEnabled !== void 0 && (Ba = nt().rippleEnabled), nt().trailStrength !== void 0 && (an = nt().trailStrength), nt().trailMaxAge !== void 0 && (Na = nt().trailMaxAge), Pl(), lr.addEventListener("click", () => {
    In = !In, lr.classList.toggle("on", In), In || (Yo = []), ca("trailEnabled", In);
  }), Gr.addEventListener("click", () => {
    Ba = !Ba, Gr.classList.toggle("on", Ba), ca("rippleEnabled", Ba);
  }), ei.addEventListener("input", () => {
    an = Number(ei.value) / 100, o("trailStrengthValue").textContent = ei.value + "%";
  }), ei.addEventListener("change", () => ca("trailStrength", an)), _o.addEventListener("input", () => {
    Na = Number(_o.value), o("trailLifeValue").textContent = _o.value + " ms";
  }), _o.addEventListener("change", () => ca("trailMaxAge", Na)), xo.addEventListener("change", () => ca("upcomingCount", ta));
  function Ps(t) {
    a.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === t));
    const i = t === "light";
    o("app").classList.toggle("light", i), l.setLight(i), Ni(a);
  }
  Ps(nt().theme || "dark"), a.querySelectorAll(".themeBtn").forEach((t) => t.addEventListener("click", () => {
    Ps(t.dataset.theme), ca("theme", t.dataset.theme);
  }));
  const qn = { steps: null, weather: null, ...nt().entities || {} };
  let tn = null, Di = {};
  function Ri(t) {
    const i = Object.values(t).filter((z) => z.entity_id.startsWith("sensor.") || z.entity_id.startsWith("input_number.")), s = (z) => z.attributes.friendly_name || z.entity_id, u = i.filter((z) => /step/i.test(z.entity_id) || /step/i.test(s(z)) || ["steps", "step"].includes(String(z.attributes.unit_of_measurement || "").toLowerCase())), f = i.filter((z) => !u.includes(z)), M = (z, oe) => s(z).localeCompare(s(oe)), D = (z, oe) => /health_steps/.test(oe.entity_id) - /health_steps/.test(z.entity_id) || M(z, oe);
    return { suggested: u.sort(D), rest: f.sort(M), label: s };
  }
  function ai(t) {
    const i = o("stepsEntity");
    if (!i || i.matches(":focus")) return;
    const { suggested: s, rest: u, label: f } = Ri(t), M = (oe) => '<option value="' + He(oe.entity_id) + '">' + He(f(oe)) + "</option>";
    i.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(M).join("") + "</optgroup>" : "") + (u.length ? '<optgroup label="All sensors">' + u.map(M).join("") + "</optgroup>" : ""), i.value = qn.steps || "";
    const D = o("stepsStatus"), z = qn.steps && t[qn.steps];
    D.textContent = z ? "Connected · " + f(z) : D.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    qn.steps = o("stepsEntity").value || null, ca("entities", { ...qn }), Di = {}, e(), tn && (ai(tn), $r(tn));
  });
  function Is(t, i = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: i }).format(t);
  }
  function Kr() {
    const t = qn.steps && (tn == null ? void 0 : tn[qn.steps]), i = Number(t == null ? void 0 : t.state);
    return Number.isFinite(i) ? i : null;
  }
  function $r(t) {
    var u;
    const i = qn.steps, s = i ? Number((u = t[i]) == null ? void 0 : u.state) : NaN;
    o("stepsMeta").textContent = i ? Number.isFinite(s) ? Is(s) : "—" : "Set up in Settings";
  }
  let Xr = 0;
  async function e() {
    const t = qn.steps;
    if (!t || !l.ws) return;
    Xr = Date.now();
    const i = /* @__PURE__ */ new Date(), s = new Date(i.getFullYear(), i.getMonth(), i.getDate() - 30);
    try {
      const u = await l.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: i.toISOString(), statistic_ids: [t], period: "day", types: ["max"] }), f = (u == null ? void 0 : u[t]) || [], M = {};
      if (f.forEach((D) => {
        Number.isFinite(D.max) && (M[Ot(new Date(D.start))] = D.max);
      }), !Object.keys(M).length) {
        const D = await l.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: i.toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((D == null ? void 0 : D[t]) || []).forEach((z) => {
          const oe = Number(z.s ?? z.state), se = z.lu ? z.lu * 1e3 : Date.parse(z.last_updated || z.last_changed);
          if (!Number.isFinite(oe) || !se) return;
          const ee = Ot(new Date(se));
          M[ee] = Math.max(M[ee] || 0, oe);
        });
      }
      Di = M, p();
    } catch {
    }
  }
  function n() {
    p();
  }
  n(), setInterval(() => {
    n(), xi(), la();
  }, 10 * 60 * 1e3);
  function r(t) {
    const i = {}, s = {};
    st.history.forEach((D) => {
      const z = Ot(new Date(D.start));
      i[z] = (i[z] || 0) + (D.seconds || 0) / 60, s[z] = (s[z] || 0) + 1;
    });
    const u = /* @__PURE__ */ new Date(), f = Ot(u), M = [];
    for (let D = t - 1; D >= 0; D--) {
      const z = new Date(u.getFullYear(), u.getMonth(), u.getDate() - D), oe = Ot(z), se = st.checkins.filter((J) => J.date === oe), ee = (J) => {
        const Se = se.map((Ue) => Ue[J]).filter(Boolean);
        return Se.length ? Se.reduce((Ue, _e) => Ue + _e, 0) / Se.length : null;
      };
      M.push({
        key: oe,
        date: z,
        minutes: Math.round(i[oe] || 0),
        moves: s[oe] || 0,
        steps: oe === f && Kr() != null ? Kr() : Di[oe] ?? null,
        mood: ee("mood"),
        energy: ee("energy")
      });
    }
    return M;
  }
  function d(t) {
    let i = t.length - 1;
    t[i] && !t[i].minutes && i--;
    let s = 0;
    for (; i >= 0 && t[i].minutes > 0; )
      s++, i--;
    return s;
  }
  function p() {
    const t = o("insightCard");
    if (!t) return;
    const i = r(30), s = d(i), u = i.reduce((se, ee) => se + ee.minutes, 0), f = /* @__PURE__ */ new Date(), M = Ot(f), D = Ot(new Date(f.getFullYear(), f.getMonth(), f.getDate() - (f.getDay() + 6) % 7)), z = i.filter((se) => se.key >= D && se.key <= M).reduce((se, ee) => se + ee.minutes, 0), oe = (se, ee, J) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + se + '</div><div><div class="activityRowName">' + He(ee) + '</div><div class="activityRowMeta">' + He(J) + "</div></div></div>";
    t.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + fe("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + oe(fe("clock"), "This week", z + " min") + oe(fe("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + oe(fe("calendar"), "30 days", u + " min") + "</div>";
  }
  const y = {
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
  }, h = (t) => t === "sunny" ? "clear" : t === "clear-night" ? "night" : t === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(t) ? "rain" : ["snowy", "snowy-rainy"].includes(t) ? "snow" : "cloudy", x = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, S = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let R = 0;
  const H = (t, i) => '<path class="' + i + '" d="' + t + '"/>', B = (t, i) => ' style="animation-delay:-' + Math.round(t * 137 % i) + 'ms"', Y = (t, i, s, u) => {
    const f = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + B(t, 2400) + ' d="M' + t + " " + (i - s) + "L" + (t + f) + " " + (i - f) + "L" + (t + s) + " " + i + "L" + (t + f) + " " + (i + f) + "L" + t + " " + (i + s) + "L" + (t - f) + " " + (i + f) + "L" + (t - s) + " " + i + "L" + (t - f) + " " + (i - f) + 'Z"/>';
  }, ye = ([t, i, s], u) => '<path class="wxMoonPath" d="' + t + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + i + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Re = (t, i) => i ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', de = (t) => (t ? ["29.35", "43.04", "56.74"].map((i, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + i + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + i + ' 60.65)"/></g>') : [19, 26, 33].map((i, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + i + ' 38)"/></g>')).join(""), pe = (t) => (t ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([i, s], u) => '<circle class="wxFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + i + '" cy="' + s + '" r="' + (t ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function O(t, i, s, u) {
    return t === "clear" ? i ? ye(s ? S.l : S.s, u) + (s ? Y(70, 20, 5.83, 1) + Y(78.33, 41.67, 3.75, 0.8) + Y(60, 71.67, 3.33, 0.6) : Y(42, 12, 3.5, 1) + Y(47, 25, 2.25, 0.8) + Y(36, 43, 2, 0.6)) : Re(u, s) : t === "partly" ? (i ? ye(s ? S.lp : S.sp, u) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + H(s ? x.lp : x.sp, i ? "wxCloudLight" : "wxBright") + (i ? s ? Y(73.33, 16.67, 4.17, 0.9) : Y(44, 10, 2.5, 0.9) : "") : t === "cloudy" ? H(s ? x.lc : x.s, i ? "wxCloudLight" : "wxBright") + (i ? s ? Y(15, 15, 3.75, 0.8) + Y(76.67, 13.33, 2.92, 0.6) : Y(9, 9, 2.25, 0.8) + Y(46, 8, 1.75, 0.6) : "") : H(s ? x.lr : x.s, "wxCloudLight") + (t === "rain" ? de(s) : pe(s));
  }
  const Ae = () => {
    var t;
    return ((t = tn == null ? void 0 : tn["sun.sun"]) == null ? void 0 : t.state) === "below_horizon";
  };
  let Ne = nt().weatherStyle || "bitmap", dt = nt().weatherLayout === "strip" ? "strip" : "tiles", rn = nt().weatherMotion !== !1;
  const Nt = () => rn && !qe(), _n = /* @__PURE__ */ new Map(), Ge = 700, Kt = (t) => {
    const [i, s] = t.split("/");
    return { k: i === "fog" ? "cloudy" : i === "storm" ? "rain" : i, night: s === "night" };
  };
  function cr(t, i, s, u = Ne, f, M) {
    let D = h(t);
    const z = D === "night" || (M != null ? !!M : !!s && Ae());
    D === "night" && (D = "clear");
    const oe = i ? 90 : 54, se = pl(t, z), ee = performance.now();
    let J = f ? _n.get(f) : null;
    if (f && !J ? _n.set(f, J = { key: se, t0: -1e9 }) : J && J.key !== se && (J.fromKey = J.key, J.from = J.last || null, J.key = se, J.t0 = ee), u !== "smooth") return '<span class="wxIcon pixels' + (i ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + se + '"' + (f ? ' data-wx-slot="' + f + '"' : "") + ' data-wx-style="' + u + '" data-wx-size="' + oe + '"></canvas></span>';
    let Se = "";
    if (J && ee - J.t0 < Ge && (Nt() || qe())) {
      const Ue = Kt(J.fromKey);
      Se = '<span class="wxLayer wxOut ' + Ue.k + (Ue.night ? " night" : "") + '" style="animation-delay:' + Math.round(J.t0 - ee) + 'ms"><svg viewBox="0 0 ' + oe + " " + oe + '">' + O(Ue.k, Ue.night, i, "wxg" + ++R) + "</svg></span>";
    }
    return '<span class="wxIcon ' + D + (z ? " night" : "") + (i ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + oe + " " + oe + '">' + O(D, z, i, "wxg" + ++R) + "</svg>" + Se + "</span>";
  }
  function Hs() {
    const t = o("app"), i = getComputedStyle(t), s = (z) => i.getPropertyValue(z).trim(), u = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([z, oe]) => {
      s(oe) && (u[z] = s(oe));
    });
    const f = s("--color-text-primary") || "#f1f1f1", M = s("--color-bg-card") || "#222222", D = t.classList.contains("light");
    return { colors: u, ink: D ? f : M, paper: D ? M : f };
  }
  function Ni(t, i = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const u = Hs(), f = Nt(), M = qe();
    s.forEach((D) => {
      var J;
      const z = D.dataset.wx, oe = D.dataset.wxSlot ? _n.get(D.dataset.wxSlot) : null;
      let se = hd(z, u.colors);
      if (oe && oe.key === z) {
        const Se = (i - oe.t0) / Ge;
        Se < 1 && (f || M) && (se = _u(oe.from || hd(oe.fromKey, u.colors), se, Math.max(0, Se), u.colors, M)), oe.last = se;
      }
      const ee = Wc(se, { size: Number(D.dataset.wxSize) || 54, px: 2, oneBit: D.dataset.wxStyle === "onebit", colors: u.colors, ink: u.ink, paper: u.paper, clock: i, idle: f });
      D.width !== ee.w && (D.width = ee.w), D.height !== ee.h && (D.height = ee.h), (J = D.getContext("2d")) == null || J.putImageData(new ImageData(ee.data, ee.w, ee.h), 0, 0);
    });
  }
  let Fs = null, Cd = -1;
  function Sd(t) {
    if (Fs = null, !g) return;
    const i = Nt(), s = Math.floor(t / 100), u = [..._n.values()].some((oe) => t - oe.t0 < Ge), f = [...Os.values()].some((oe) => t - oe.t0 < oe.dur), M = be.home.classList.contains("active"), D = ua.classList.contains("open"), z = i && Ne === "smooth" && (D || M && dt === "strip");
    !document.hidden && (u || f || z || i && s !== Cd) && (Cd = s, M && (Ni(o("weatherCard"), t), Jr(o("weatherCard"), t)), D && (Ni(ua, t), Jr(ua, t))), (i || u || f) && (Fs = requestAnimationFrame(Sd));
  }
  function Bi() {
    o("app").classList.toggle("wxMotion", Nt()), !Fs && g && (Fs = requestAnimationFrame(Sd));
  }
  let Td = [];
  const sn = 36e5, mu = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function Do() {
    const t = /* @__PURE__ */ new Date(), i = (M, D) => new Date(t.getFullYear(), t.getMonth(), t.getDate() + M, D), s = [], u = [], f = [...Array(6)].map((M, D) => {
      const z = i(D, 6), oe = i(D, 18), se = i(D + 1, 6), ee = Td.find((Se) => Ot(new Date(Se.datetime)) === Ot(z)), J = (Se, Ue, _e) => {
        const Me = s.filter((ut) => ut.t >= +Se && ut.t < +Ue);
        if (Me.length) {
          const ut = {};
          return Me.forEach((Ee) => {
            ut[Ee.c] = (ut[Ee.c] || 0) + (mu.has(Ee.c) ? 2 : 1);
          }), Object.entries(ut).sort((Ee, pt) => pt[1] - Ee[1])[0][0];
        }
        const xe = u.find((ut) => {
          const Ee = +new Date(ut.datetime);
          return Ee >= +Se - 3 * sn && Ee < +Ue && (ut.is_daytime == null || !!ut.is_daytime == !_e);
        });
        if (xe) return xe.condition;
        const ct = (ee == null ? void 0 : ee.condition) || "cloudy";
        return _e && ct === "sunny" ? "clear-night" : ct;
      };
      return { start: +z, end: +se, day: J(z, oe, !1), night: J(oe, se, !0), hi: Number(ee == null ? void 0 : ee.temperature), lo: Number(ee == null ? void 0 : ee.templow) };
    });
    return { days: f, hours: s, start: f[0].start, end: f[5].end };
  }
  const Ld = (t, i) => {
    const s = t.days.findIndex((f) => i < f.end);
    if (s < 0) return 1;
    const u = t.days[s];
    return Math.max(0, (s + (i - u.start) / (u.end - u.start)) / 6);
  }, gu = (t, i) => {
    const s = Math.max(0, Math.min(0.99999, i)) * 6, u = Math.floor(s), f = t.days[u];
    return f.start + (s - u) * (f.end - f.start);
  };
  function Il(t, i) {
    const s = Math.max(0, t.days.findIndex((oe) => i < oe.end)), u = t.days[s], f = (i - u.start) / (u.end - u.start) >= 0.5;
    let M = f ? u.night : u.day, D = NaN;
    const z = t.hours;
    if (z.length && i >= z[0].t - sn && i <= z[z.length - 1].t + sn) {
      let oe = z.findIndex((J) => J.t > i);
      oe < 0 && (oe = z.length);
      const se = z[Math.max(0, oe - 1)], ee = z[Math.min(z.length - 1, oe)];
      M = se.c || M, D = ee.t > se.t ? se.temp + (ee.temp - se.temp) * Math.max(0, Math.min(1, (i - se.t) / (ee.t - se.t))) : se.temp;
    }
    if (!Number.isFinite(D)) {
      const oe = [];
      if (t.days.forEach((se) => {
        Number.isFinite(se.lo) && oe.push([se.start - sn, se.lo]), Number.isFinite(se.hi) && oe.push([se.start + 9 * sn, se.hi]);
      }), oe.length) {
        D = i <= oe[0][0] ? oe[0][1] : oe[oe.length - 1][1];
        for (let se = 1; se < oe.length; se++) if (i <= oe[se][0] && i > oe[se - 1][0]) {
          const [ee, J] = oe[se - 1], [Se, Ue] = oe[se];
          D = J + (Ue - J) * (1 - Math.cos(Math.PI * (i - ee) / (Se - ee))) / 2;
          break;
        }
      }
    }
    return { cond: f && M === "sunny" ? "clear-night" : M, temp: D, night: f, day: u };
  }
  const Ad = (t) => Ot(new Date(t)) === Ot(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(t)), Os = /* @__PURE__ */ new Map(), vu = 900, bu = 700;
  let qs = null;
  const Ca = typeof ResizeObserver == "function" ? new ResizeObserver((t) => t.forEach((i) => {
    Jr(i.target.parentElement), i.target.closest("#wxDialog") && Bd();
  })) : null;
  function Jr(t, i = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const u = Do(), f = u.days.flatMap((J) => [{ cond: J.day, night: !1 }, { cond: J.night, night: !0 }]), M = f.map((J) => J.cond).join(), D = Hs(), z = Nt(), oe = qe(), se = Number(Ot(new Date(u.start)).replace(/\D/g, "")) % 9973;
    let ee = !1;
    s.forEach((J) => {
      var ut;
      const Se = J.clientWidth, Ue = J.clientHeight;
      if (!Se || !Ue) return;
      const _e = J.dataset.wxStrip;
      let Me = Os.get(_e);
      Me ? Me.sig !== M && (Me.prev = Me.segs, Me.sig = M, Me.segs = f, Me.t0 = i, Me.dur = bu) : Os.set(_e, Me = { sig: M, segs: f, prev: null, t0: i, dur: vu });
      const xe = z || oe ? Math.min(1, Math.max(0, (i - Me.t0) / Me.dur)) : 1;
      xe < 1 && (ee = !0);
      const ct = { width: Se, height: Ue, colors: D.colors, clock: i, ambient: z, seed: se, reveal: oe ? xe : 1 - Math.pow(1 - xe, 3), prev: xe < 1 ? Me.prev : null, reduce: oe };
      if (Ne === "smooth") {
        const Ee = Math.min(2, window.devicePixelRatio || 1), pt = Math.round(Se * Ee), Mt = Math.round(Ue * Ee);
        J.width !== pt && (J.width = pt), J.height !== Mt && (J.height = Mt);
        const ot = J.getContext("2d");
        if (!ot) return;
        ot.setTransform(Ee, 0, 0, Ee, 0, 0), ju(ot, f, ct);
      } else {
        const Ee = zu(f, { ...ct, px: 2, oneBit: Ne === "onebit", ink: D.ink, paper: D.paper });
        J.width !== Ee.w && (J.width = Ee.w), J.height !== Ee.h && (J.height = Ee.h), (ut = J.getContext("2d")) == null || ut.putImageData(new ImageData(Ee.data, Ee.w, Ee.h), 0, 0);
      }
    }), ee && Bi();
  }
  function _d() {
    const t = o("weatherCard");
    if (!t || t.hidden) return;
    const i = qn.weather, s = i && (tn == null ? void 0 : tn[i]);
    if (!s) {
      t.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + cr("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (i ? "Not available" : "Set up in Settings") + "</div></div></div></div>", Ni(t);
      return;
    }
    const u = s.attributes || {}, f = u.temperature_unit || "°", M = (ot) => Number.isFinite(Number(ot)) ? Math.round(Number(ot)) + "°" : "—", D = (u.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", z = y[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), oe = Ot(/* @__PURE__ */ new Date()), se = Td.slice(0, 7), ee = se.find((ot) => Ot(new Date(ot.datetime)) === oe) || null, J = se.filter((ot) => Ot(new Date(ot.datetime)) >= oe).slice(0, 6), Se = /* @__PURE__ */ new Date(), Ue = Ot(new Date(Se.getFullYear(), Se.getMonth(), Se.getDate() + 1)), _e = ee ? "H " + M(ee.temperature) + "&ensp; L " + M(ee.templow) : "", Me = (ot) => {
      const $e = Ot(new Date(ot.datetime));
      return $e === oe ? "Today" : $e === Ue ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(ot.datetime));
    }, xe = Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : "—", ct = (ot) => {
      const $e = new Date(ot.datetime);
      return Math.round((new Date($e.getFullYear(), $e.getMonth(), $e.getDate()) - new Date(Se.getFullYear(), Se.getMonth(), Se.getDate())) / 864e5);
    }, ut = (ot) => (y[ot] || ot || "").toLowerCase(), Ee = (ot, $e) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + ct(ot) + '" aria-label="' + He(Me(ot) + ": " + ut(ot.condition) + ", " + M(ot.temperature) + " / " + M(ot.templow) + ". Open the forecast") + '">' + cr(ot.condition, !1, !1, Ne, "day" + $e) + '<div><div class="activityRowName">' + He(Me(ot)) + '</div><div class="activityRowMeta">' + M(ot.temperature) + " / " + M(ot.templow) + "</div></div></div>", pt = () => '<div class="wxStrip"><div class="wxStripDays">' + Do().days.map(($e, ln) => {
      const Ht = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date($e.start)) + ": " + ut($e.day) + (ut($e.day) === ut($e.night) ? " all day and night" : ", then " + ut($e.night) + " overnight") + (Number.isFinite($e.hi) ? ". High " + M($e.hi) : "") + (Number.isFinite($e.lo) ? ", low " + M($e.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + ln + '" aria-label="' + He(Ht) + '"><span class="wxDayName">' + He(Ad($e.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + M($e.hi) + '</span><span class="wxLow">' + M($e.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    t.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + He("Now in " + D + ": " + xe + "°, " + ut(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + cr(s.state, !0, !0, Ne, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + He(String(xe)) + '</span><span class="wxUnit">' + He(f) + '</span></div><div class="wxPlace">' + He(D) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + He(z) + "</div>" + (_e ? '<div class="wxRange">' + _e + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (J.length ? dt === "strip" ? pt() : '<div class="activityRows wxDays">' + J.map(Ee).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", Ni(t);
    const Mt = t.querySelector("canvas[data-wx-strip]");
    qs && qs !== Mt && (Ca == null || Ca.unobserve(qs)), qs = Mt, Mt && (Ca == null || Ca.observe(Mt), Jr(t)), Bi(), Nd();
  }
  const Ed = o("weatherCard"), Dd = (t) => {
    const i = t.closest("[data-wx-day]");
    if (i) {
      const u = /* @__PURE__ */ new Date();
      Rd(+new Date(u.getFullYear(), u.getMonth(), u.getDate() + Number(i.dataset.wxDay), 12), i);
      return;
    }
    const s = t.closest("[data-wx-open]");
    s && Rd(Date.now(), s);
  };
  Ed.addEventListener("click", (t) => Dd(t.target)), Ed.addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && t.target.matches("[data-wx-day],[data-wx-open]") && (t.preventDefault(), Dd(t.target));
  });
  const ua = o("wxDialog"), oi = o("wxGraph"), Qr = o("wxGraphWrap");
  let za = Date.now(), Pi = null, Hl = !1, ur = null;
  function Rd(t, i) {
    const s = Do();
    Pi = i || null, za = Math.max(s.start, Math.min(s.end - sn, t)), Os.delete("dialog"), _n.delete("scrub"), ua.classList.add("open"), ua.setAttribute("aria-hidden", "false"), Nd(), Ca == null || Ca.observe(ua.querySelector("canvas[data-wx-strip]")), oi.focus({ preventScroll: !0 }), Bi();
  }
  function Fl() {
    var t;
    ua.classList.remove("open"), ua.setAttribute("aria-hidden", "true"), Ca == null || Ca.unobserve(ua.querySelector("canvas[data-wx-strip]")), (t = Pi == null ? void 0 : Pi.focus) == null || t.call(Pi, { preventScroll: !0 }), Pi = null;
  }
  function Nd() {
    if (!ua.classList.contains("open")) return;
    const t = Do();
    o("wxGraphDays").innerHTML = t.days.map((i) => "<span>" + He(Ad(i.start)) + "</span>").join(""), Bd(t), Ws(t), Jr(ua);
  }
  function Ws(t = Do()) {
    const i = Il(t, za), s = tn == null ? void 0 : tn[qn.weather], u = (s == null ? void 0 : s.attributes) || {}, f = u.temperature_unit || "°", M = Math.abs(za - Date.now()) < sn / 2, D = M && s ? s.state : i.cond, z = M && Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : Number.isFinite(i.temp) ? Math.round(i.temp) : "—", oe = y[D] || (D ? D.charAt(0).toUpperCase() + D.slice(1) : "—"), se = M ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(za / sn) * sn)), ee = i.day, J = (Number.isFinite(ee.hi) ? "H " + Math.round(ee.hi) + "°" : "") + (Number.isFinite(ee.lo) ? "&ensp; L " + Math.round(ee.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + cr(D, !0, M, Ne, "scrub", M ? void 0 : i.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + He(String(z)) + '</span><span class="wxUnit">' + He(f) + '</span></div><div class="wxPlace">' + He(se) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + He(oe) + "</div>" + (J ? '<div class="wxRange">' + J + "</div>" : "") + "</div>", Ni(o("wxDialogNow")), oi.setAttribute("aria-valuenow", String(Math.round((za - t.start) / sn))), oi.setAttribute("aria-valuetext", se + ", " + oe.toLowerCase() + ", " + z + "°"), Ol(t), Bi();
  }
  function Bd(t = Do()) {
    const i = o("wxGraphLine"), s = Qr.clientWidth, u = Qr.clientHeight;
    if (!s || !u) return;
    const f = [];
    for (let xe = t.start; xe <= t.end; xe += sn) {
      const ct = Il(t, xe).temp;
      Number.isFinite(ct) && f.push([Ld(t, xe) * s, ct]);
    }
    if (i.setAttribute("viewBox", "0 0 " + s + " " + u), f.length < 2) {
      i.innerHTML = '<g id="wxCursorMark"></g>', ur = null, Ol(t);
      return;
    }
    const M = f.map((xe) => xe[1]), D = Math.min(...M), z = Math.max(...M), oe = Math.max(4, z - D), se = Ne !== "smooth", ee = (xe) => se ? Math.round(xe / 2) * 2 : Math.round(xe * 10) / 10;
    ur = (xe) => u * 0.84 - (xe - D) / oe * u * 0.62;
    const J = Hs(), Se = Ne === "onebit" ? J.paper : "#ffffff", Ue = Ne === "onebit" ? J.ink : "rgba(0,0,0,.28)", _e = "M" + f.map((xe) => ee(xe[0]) + " " + ee(ur(xe[1]))).join(" L"), Me = (xe, ct) => {
      const ut = f.find((Ee) => Ee[1] === xe);
      return '<text class="wxLineLabel" x="' + ee(Math.min(s - 14, Math.max(14, ut[0]))) + '" y="' + ee(ur(xe) + (ct ? 18 : -10)) + '" fill="' + Se + '" stroke="' + Ue + '">' + Math.round(xe) + "°</text>";
    };
    i.setAttribute("shape-rendering", se ? "crispEdges" : "auto"), i.innerHTML = '<path d="' + _e + '" fill="none" stroke="' + Ue + '" stroke-width="' + (se ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + _e + '" fill="none" stroke="' + Se + '" stroke-width="2" stroke-linejoin="round"/>' + Me(z, !1) + Me(D, !0) + '<g id="wxCursorMark"></g>', Ol(t);
  }
  function Ol(t = Do()) {
    const i = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!i) return;
    const s = Qr.clientWidth, u = Qr.clientHeight, f = Ne !== "smooth", M = (Se) => f ? Math.round(Se / 2) * 2 : Se, D = M(Ld(t, za) * s), z = Il(t, za).temp, oe = Hs(), se = Ne === "onebit" ? oe.paper : "#ffffff", ee = Ne === "onebit" ? oe.ink : "rgba(0,0,0,.28)", J = ur && Number.isFinite(z) ? M(ur(z)) : null;
    i.innerHTML = '<rect x="' + (D - 2) + '" y="0" width="4" height="' + u + '" fill="' + ee + '"/><rect x="' + (D - 1) + '" y="0" width="2" height="' + u + '" fill="' + se + '"/>' + (J == null ? "" : f ? '<rect x="' + (D - 5) + '" y="' + (J - 5) + '" width="10" height="10" fill="' + se + '" stroke="' + ee + '" stroke-width="2"/>' : '<circle cx="' + D + '" cy="' + J + '" r="6" fill="' + se + '" stroke="' + ee + '" stroke-width="2"/>');
  }
  const Pd = (t) => {
    const i = Qr.getBoundingClientRect();
    i.width && (za = gu(Do(), (t - i.left) / i.width), Ws());
  };
  oi.addEventListener("pointerdown", (t) => {
    if (t.button === 0) {
      Hl = !0;
      try {
        oi.setPointerCapture(t.pointerId);
      } catch {
      }
      Pd(t.clientX);
    }
  }), oi.addEventListener("pointermove", (t) => {
    Hl && Pd(t.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((t) => oi.addEventListener(t, () => {
    Hl = !1;
  })), oi.addEventListener("keydown", (t) => {
    const i = Do(), s = { ArrowLeft: -sn, ArrowRight: sn, ArrowDown: -sn, ArrowUp: sn, PageUp: -24 * sn, PageDown: 24 * sn }[t.key];
    s ? (t.preventDefault(), za = Math.max(i.start, Math.min(i.end - sn, Math.round(za / sn) * sn + s)), Ws(i)) : (t.key === "Home" || t.key === "End") && (t.preventDefault(), za = t.key === "Home" ? i.start : i.end - sn, Ws(i));
  }), o("wxDialogClose").addEventListener("click", Fl), ua.addEventListener("click", (t) => {
    t.target === ua && Fl();
  }), ua.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Fl());
  }), _d(), (Ud = (jd = window.matchMedia) == null ? void 0 : (Gd = jd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || Ud.call(Gd, "change", () => {
    Bi(), Ni(a);
  }), Bi();
  const Id = o("tvNav");
  l.fullscreenSupported || (Id.hidden = !0), Id.addEventListener("click", () => l.toggleFullscreen()), a.addEventListener("keydown", (t) => {
    !be.workout.classList.contains("active") || Pn.classList.contains("active") || t.target.closest("input,select,textarea,.holdEnd") || (t.key === "MediaPlayPause" || t.key === " " && !t.target.closest("button") ? (t.preventDefault(), ga.click()) : t.key === "MediaTrackNext" ? (t.preventDefault(), o("skipExercise").click()) : t.key === "MediaTrackPrevious" && (t.preventDefault(), o("restartSegment").click()));
  }), a.querySelectorAll("[data-rounds-step]").forEach((t) => t.addEventListener("click", () => {
    const i = Math.max(1, Math.min(10, (Number(tt.value) || 1) + Number(t.dataset.roundsStep)));
    String(i) !== tt.value && (tt.value = i, tt.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [E, C, N, tt].forEach((t) => t.addEventListener("input", () => {
    const i = Ye[ht];
    i && (i.total = Number(E.value), i.work = Number(C.value), i.rest = Number(N.value)), T();
  })), Ce.addEventListener("click", Li), Oe.addEventListener("click", () => k("settings")), o("settingsBack").addEventListener("click", Li), ga.addEventListener("click", () => Fa(!kn)), Vn(ht), wi(), xi(), p(), o("healthHelpOpen").addEventListener("click", () => a.querySelector(".tab[data-pane=helpPane]").click()), Qo(o("resetStats"), o("resetStatsFill"), 1500, () => {
    st.history = [], st.checkins = [], bi = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    wn(), n(), xi(), wi(), p(), la(), _t("Stats reset");
  });
  const ql = o("morningTime"), Wl = o("eveningTime"), Vl = o("checkinAutoOpen");
  ql.value = Ka().morning, Wl.value = Ka().evening, Vl.classList.toggle("on", nt().checkinAutoOpen !== !1), [["morningTime", ql], ["eveningTime", Wl]].forEach(([t, i]) => i.addEventListener("change", () => {
    i.value && (ca(t, i.value), la());
  })), Vl.addEventListener("click", () => {
    const t = nt().checkinAutoOpen === !1;
    Vl.classList.toggle("on", t), ca("checkinAutoOpen", t);
  }), setTimeout($i, 800);
  const Hd = o("checkinNotify"), Vs = o("checkinNotifyTarget"), Fd = o("checkinNotifyStatus"), wu = Fd.textContent;
  function Od() {
    const t = l.notifyServices(), i = t.filter((f) => f.startsWith("mobile_app_")), s = i.length ? i : t, u = (f) => f.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Vs.innerHTML = s.map((f) => '<option value="' + He(f) + '">' + He(u(f)) + "</option>").join(""), !nt().notifyTarget && s[0] && (nt().notifyTarget = s[0]), Vs.value = nt().notifyTarget || "";
  }
  function zs() {
    const t = !!nt().notifyOn;
    Hd.classList.toggle("on", t), o("checkinNotifyTargetRow").hidden = !t;
    const i = Ka();
    Fd.textContent = t ? "Sends at " + i.morning + " and " + i.evening : wu;
  }
  async function zl() {
    const t = !!nt().notifyOn;
    try {
      return await l.setReminderAutomation(t ? { target: nt().notifyTarget, times: Ka() } : null), !0;
    } catch {
      return _t("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  Hd.addEventListener("click", async () => {
    const t = !nt().notifyOn;
    if (t && (Od(), !nt().notifyTarget)) {
      _t("Install the Companion app on your phone first");
      return;
    }
    nt().notifyOn = t, zs(), await zl() ? (wn(), _t(t ? "Check-in notifications on" : "Check-in notifications off")) : (nt().notifyOn = !t, zs());
  }), Vs.addEventListener("change", () => {
    ca("notifyTarget", Vs.value), nt().notifyOn && zl();
  }), [ql, Wl].forEach((t) => t.addEventListener("change", () => {
    zs(), nt().notifyOn && zl();
  })), Od(), zs();
  let jl = null;
  function xu() {
    jl || (jl = setTimeout(() => {
      jl = null, p();
    }, 3e4));
  }
  return {
    updateStates(t) {
      var s, u;
      const i = !tn || tn[qn.weather] !== t[qn.weather] || ((s = tn["sun.sun"]) == null ? void 0 : s.state) !== ((u = t["sun.sun"]) == null ? void 0 : u.state);
      tn = t, ai(t), $r(t), i && _d(), Date.now() - Xr > 60 * 60 * 1e3 && e(), xu();
    },
    applyRemoteData(t) {
      if (t && (Array.isArray(t.history) && (st.history = t.history, n()), Array.isArray(t.history) && p(), Array.isArray(t.checkins) && (st.checkins = t.checkins.map(ci), la(), wi(), xi(), n(), p()), t.profiles && !Sn.classList.contains("open") && !Ma)) {
        const i = co(t);
        Object.keys(Ye).forEach((s) => delete Ye[s]), Object.assign(Ye, i.profiles), st.order = i.order, Ye[ht] || (ht = st.order[0]), Vi(), Vn(ht);
      }
    },
    suspend() {
      g = !1;
    },
    resume() {
      g || (g = !0, ko || (ko = requestAnimationFrame(da)), Qa || (Qa = requestAnimationFrame(Fn)), Bi(), Ao(a.querySelector(".tab.active"), !1));
    }
  };
}
const Yu = /* @__PURE__ */ new Set(["roaming", "test_area"]), Zu = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, ts = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, mn = "made_up_", Ii = (a) => {
  var l;
  return (l = String(a).split(".")[1]) == null ? void 0 : l.startsWith(mn);
}, Ys = (a) => a.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function yd(a) {
  const l = a.getHours() + a.getMinutes() / 60, o = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * o * o;
}
function Ku(a) {
  const l = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  let o = 0;
  for (let c = +l; c < +a; c += 10 * 60 * 1e3) o += yd(new Date(c)) / 6;
  return o;
}
function Xd(a = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let o = 0; o <= 96; o++) {
    const c = +a - (96 - o) * 15 * 60 * 1e3;
    l.push([c, yd(new Date(c))]);
  }
  return l;
}
function $u({ onChange: a }) {
  const l = {}, o = {}, c = (U, W, X, G) => {
    l[U] = { entity_id: U, state: X, attributes: G, last_changed: new Date(Date.now() - 18e6).toISOString() }, o[U] = W;
  }, m = (U, W, X) => {
    const G = l[U], Z = W ?? G.state;
    l[U] = { ...G, state: Z, attributes: { ...G.attributes, ...X }, last_changed: Z === G.state ? G.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, g = (U, W, X, G) => c("binary_sensor." + mn + (U ? U + "_" : "") + Ys(W), U, G ? "on" : "off", { friendly_name: W, device_class: X });
  Object.entries(Zu).forEach(([U, W]) => {
    if (W.temperature != null && c("sensor." + mn + U + "_temperature", U, String(W.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), W.humidity != null && c("sensor." + mn + U + "_humidity", U, String(W.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), W.vacuum && c("vacuum." + mn + "robot", U, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), W.climate && c("climate." + mn + U, U, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: W.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), W.cover) {
      const [X, G, Z, Q] = W.cover;
      c("cover." + mn + U + "_" + Ys(X), U, Z ? "open" : "closed", { friendly_name: X, device_class: G, current_position: Z, ...Q != null ? { current_tilt_position: Q } : {} });
    }
    if (W.humidifier && c("humidifier." + mn + U, U, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: W.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), W.solar && (c("sensor." + mn + U + "_solar_power", U, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + mn + U + "_solar_today", U, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), W.valve && c("valve." + mn + U + "_" + Ys(W.valve), U, "closed", { friendly_name: W.valve, device_class: "water" }), W.door && g(U, W.door, "door", W.doorOpen), W.window && g(U, W.window, "window", !1), W.motion && g(U, W.motion, "motion", !1), W.plant) {
      const [X, G, Z, Q, _] = W.plant, j = mn + Ys(X), ge = (b, be, Ce, Oe, k) => c("sensor." + j + "_" + b, U, String(Ce), { friendly_name: be, device_class: k, state_class: "measurement", unit_of_measurement: Oe, plant_low: Ce < ts[b][0], plant_high: Ce > ts[b][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[b] });
      ge("moisture", "Moisture", G, "%", "moisture"), ge("light", "Light", Z, "lx", "illuminance"), ge("temperature", "Temperature", Q, "°C", "temperature"), ge("fertility", "Fertility", _, "µS/cm", "conductivity");
      const Te = Object.entries({ moisture: G, light: Z, temperature: Q, fertility: _ }).filter(([b, be]) => be < ts[b][0] || be > ts[b][1]).map(([b, be]) => b + (be < ts[b][0] ? " low" : " high"));
      c("plant." + j, U, Te.length ? "problem" : "ok", { friendly_name: X, moisture: G, brightness: Z, temperature: Q, conductivity: _, problem: Te.join(", ") || "none" });
    }
  }), c("alarm_control_panel." + mn + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), g(null, "Front door", "door", !1), g(null, "Smoke alarm", "smoke", !1), c("sensor." + mn + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const v = {}, L = {};
  let w = null;
  function P() {
    const U = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((W) => {
      W.endsWith("_solar_power") && (l[W] = { ...l[W], state: yd(U).toFixed(2) }), W.endsWith("_solar_today") && (l[W] = { ...l[W], state: Ku(U).toFixed(1) });
    });
  }
  P();
  let re = 0;
  function ne() {
    let U = !1;
    const W = ++re % 10 === 0, X = (Q, _, j) => {
      m(Q, _, j), U = !0;
    };
    Object.entries(v).forEach(([Q, _]) => {
      const j = l[Q].attributes.current_position, ge = j < _ ? Math.min(_, j + 10) : Math.max(_, j - 10);
      ge === _ && delete v[Q], X(Q, ge === _ ? ge === 0 ? "closed" : "open" : _ > j ? "opening" : "closing", { current_position: ge });
    }), Object.entries(L).forEach(([Q, _]) => {
      const j = l[Q].attributes.current_tilt_position, ge = j < _ ? Math.min(_, j + 25) : Math.max(_, j - 25);
      ge === _ && delete L[Q], X(Q, null, { current_tilt_position: ge });
    }), Object.keys(l).filter((Q) => Q.startsWith("climate.")).forEach((Q) => {
      const _ = l[Q], j = _.attributes, ge = j.current_temperature, Te = (_.state === "heat" || _.state === "auto") && ge < j.temperature - 0.05, b = (_.state === "cool" || _.state === "auto") && ge > j.temperature + 0.05, be = _.state === "off" ? "off" : Te ? "heating" : b ? "cooling" : "idle", Ce = W ? Math.round((ge + (Te ? 0.1 : b ? -0.1 : 0)) * 10) / 10 : ge;
      (Ce !== ge || be !== j.hvac_action) && X(Q, null, { current_temperature: Ce, hvac_action: be });
    }), Object.keys(l).filter((Q) => Q.startsWith("humidifier.")).forEach((Q) => {
      const _ = l[Q], j = _.attributes, ge = j.current_humidity, Te = _.state === "on" && ge < j.humidity, b = Te && W ? ge + 1 : ge, be = _.state !== "on" ? "off" : Te ? "humidifying" : "idle";
      if (b !== ge || be !== j.action) {
        X(Q, null, { current_humidity: b, action: be });
        const Ce = "sensor." + mn + o[Q] + "_humidity";
        l[Ce] && X(Ce, String(b));
      }
    });
    const G = l["vacuum." + mn + "robot"], Z = G.attributes;
    G.state === "cleaning" && W && X(G.entity_id, null, { battery_level: Math.max(5, Z.battery_level - 1) }), G.state === "returning" && X(G.entity_id, "docked", {}), G.state === "docked" && Z.battery_level < 100 && X(G.entity_id, null, { battery_level: Math.min(100, Z.battery_level + 2) }), w && Date.now() - w.at > 5e3 && (X("alarm_control_panel." + mn + "house", "armed_" + w.mode, {}), w = null), U && a();
  }
  const F = setInterval(ne, 1e3), q = setInterval(() => {
    P(), a();
  }, 60 * 1e3);
  function $(U, W, X) {
    const G = X == null ? void 0 : X.entity_id;
    if (!l[G]) return !1;
    const Z = l[G], Q = Z.attributes, _ = (j, ge) => m(G, j, ge);
    if (U === "climate" && (W === "set_temperature" && _(null, { temperature: Math.max(Q.min_temp, Math.min(Q.max_temp, X.temperature)) }), W === "set_hvac_mode" && _(X.hvac_mode, X.hvac_mode === "off" ? { hvac_action: "off" } : {}), W === "toggle" && _(Z.state === "off" ? "heat" : "off", Z.state === "off" ? {} : { hvac_action: "off" })), U === "cover") {
      const j = W === "open_cover" ? 100 : W === "close_cover" ? 0 : W === "set_cover_position" ? X.position : W === "toggle" ? Q.current_position > 0 ? 0 : 100 : null;
      W === "stop_cover" && (delete v[G], delete L[G], _(Q.current_position === 0 ? "closed" : "open")), j != null && j !== Q.current_position && (v[G] = j, _(j > Q.current_position ? "opening" : "closing"));
      const ge = W === "open_cover_tilt" ? 100 : W === "close_cover_tilt" ? 0 : W === "set_cover_tilt_position" ? X.tilt_position : null;
      W === "stop_cover_tilt" && delete L[G], ge != null && Q.current_tilt_position != null && ge !== Q.current_tilt_position && (L[G] = ge);
    }
    if (U === "humidifier" && (W === "set_humidity" && _(null, { humidity: Math.max(Q.min_humidity, Math.min(Q.max_humidity, X.humidity)) }), W === "set_mode" && _(null, { mode: X.mode }), W === "turn_on" || W === "turn_off" || W === "toggle")) {
      const j = W === "turn_on" || W === "toggle" && Z.state !== "on";
      _(j ? "on" : "off", { action: j ? "idle" : "off" });
    }
    if (U === "vacuum" && (W === "start" && _("cleaning", { rooms: X.rooms || Q.rooms }), W === "pause" && _("paused"), W === "return_to_base" && _("returning", { rooms: [] }), W === "locate" && _(null, { located: Date.now() }), W === "set_rooms" && _(null, { rooms: X.rooms })), U === "valve") {
      const j = W === "open_valve" || W === "toggle" && Z.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(W) && _(j ? "open" : "closed");
    }
    if (U === "alarm_control_panel") {
      W === "alarm_disarm" && (w = null, _("disarmed", { changed_by: "Matt" }));
      const j = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[W];
      j && (w = { mode: j, at: Date.now() }, _("arming", { changed_by: "Matt" }));
    }
    return a(), !0;
  }
  function te(U) {
    const W = (U == null ? void 0 : U.states) || {}, X = (U == null ? void 0 : U.entities) || {}, G = (U == null ? void 0 : U.devices) || {}, Z = (C) => {
      var ce;
      const N = X[C];
      return N && (N.area_id || N.device_id && ((ce = G[N.device_id]) == null ? void 0 : ce.area_id)) || null;
    }, Q = (C) => {
      const N = X[C];
      return W[C] && W[C].state !== "unavailable" && !(N != null && N.hidden) && !(N != null && N.entity_category);
    }, _ = {};
    Object.keys(W).forEach((C) => {
      const N = Z(C);
      N && Q(C) && (_[N] || (_[N] = [])).push(C);
    });
    const j = { ...W, ...l }, ge = (C) => {
      var N, ce;
      return (ce = (N = j[C]) == null ? void 0 : N.attributes) == null ? void 0 : ce.device_class;
    }, Te = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], b = Object.keys(W).filter((C) => C.startsWith("vacuum.") && Q(C)), be = Object.values((U == null ? void 0 : U.areas) || {}).filter((C) => !Yu.has(C.area_id)).map((C) => {
      const N = C.area_id, ce = _[N] || [], V = (Xe) => ce.filter((St) => St.startsWith(Xe + ".")), ae = (Xe) => V("sensor").filter((St) => ge(St) === Xe), le = (Xe) => Object.keys(l).filter((St) => o[St] === N && Xe(St)), me = (Xe, St) => Xe.length ? Xe : le(St), We = me(ae("temperature"), (Xe) => Xe.endsWith(N + "_temperature")), tt = me(ae("humidity"), (Xe) => Xe.endsWith(N + "_humidity")), xt = ae("power").filter((Xe) => /^(W|kW)$/.test(j[Xe].attributes.unit_of_measurement || "")), vn = V("binary_sensor").filter((Xe) => ge(Xe) === "moisture"), Dn = me(V("plant"), (Xe) => Xe.startsWith("plant.")).map((Xe) => ({ id: Xe, readings: le((St) => St.startsWith("sensor." + Xe.split(".")[1] + "_")) })), Ft = [...V("binary_sensor").filter((Xe) => Te.includes(ge(Xe))), ...le((Xe) => Xe.startsWith("binary_sensor."))];
      return {
        id: N,
        name: C.name,
        icon: C.icon,
        readings: [...We.slice(0, 1), ...tt.slice(0, 1), ...vn],
        power: xt.length ? xt.reduce((Xe, St) => Xe + Number(j[St].state) * (j[St].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: V("switch"),
        lights: V("light"),
        actions: [...V("light"), ...me(V("climate"), (Xe) => Xe.startsWith("climate.")), ...me(V("cover"), (Xe) => Xe.startsWith("cover.")), ...me(V("humidifier"), (Xe) => Xe.startsWith("humidifier.")), ...me(V("valve"), (Xe) => Xe.startsWith("valve.")), ...V("media_player"), ...V("vacuum"), ...b.length ? [] : le((Xe) => Xe.startsWith("vacuum."))],
        solar: le((Xe) => Xe.includes("_solar_")),
        plants: Dn,
        openings: Ft,
        alerts: [...vn, ...Ft].filter((Xe) => {
          var St;
          return ((St = j[Xe]) == null ? void 0 : St.state) === "on";
        })
      };
    }).filter((C) => C.readings.length || C.plugs.length || C.actions.length || C.solar.length || C.plants.length), Ce = Object.keys(W).find((C) => /^sensor\..*(p1_meter_power|grid_power)$/.test(C) && W[C].state !== "unavailable") || null, Oe = (C) => Object.keys(W).filter((N) => N.startsWith(C + ".") && Q(N)), k = Oe("alarm_control_panel"), E = b.length ? b : ["vacuum." + mn + "robot"];
    return {
      states: j,
      rooms: be,
      grid: Ce,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (C) => l[C] ? o[C] : Z(C),
      vacuums: E,
      homeVacuums: E.filter((C) => !be.some((N) => N.actions.includes(C))),
      security: {
        alarms: k.length ? k : ["alarm_control_panel." + mn + "house"],
        locks: Oe("lock"),
        openings: [...Object.keys(l).filter((C) => C.startsWith("binary_sensor.")), "sensor." + mn + "doorbell"]
      }
    };
  }
  return { model: te, call: $, stop() {
    clearInterval(F), clearInterval(q);
  } };
}
const Bo = (a) => a < 0 ? 0 : a > 1 ? 1 : a, fd = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, Xu = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Jd = {}, La = (a, l, o) => {
  const c = a + l + o;
  return Jd[c] || (Jd[c] = Xu(fd(a).map((m, g) => m + (fd(l)[g] - m) * o)));
}, Qd = {}, rl = (a) => Qd[a] || (Qd[a] = fd(a));
function Ju(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [La(l.clear[0], l.cloudy[0], 0.12), La(l.clear[1], l.cloudy[1], 0.12)], l.storm = [La(l.rain[0], "#000000", 0.22), La(l.rain[1], "#000000", 0.22)], l;
}
const Qu = [
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
], No = (a, l) => (Qu[(l & 7) * 8 + (a & 7)] + 0.5) / 64, Gc = 1, Uc = 2, Yc = 3, Zc = 4, gr = 5, dl = 6, md = 7, Kc = 8, ec = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), ep = (a, l, o) => {
  let c = !1;
  for (let m = 0, g = a.length - 1; m < a.length; g = m++) {
    const v = a[m], L = a[g];
    v[1] > o != L[1] > o && l < (L[0] - v[0]) * (o - v[1]) / (L[1] - v[1]) + v[0] && (c = !c);
  }
  return c;
};
function tp(a, l, o, c, { oneBit: m, ink: g, paper: v, snowInk: L }) {
  const w = new Uint8ClampedArray(o * c * 4), P = rl(g), re = rl(v);
  for (let ne = 0; ne < c; ne++) for (let F = 0; F < o; F++) {
    const q = ne * o + F, $ = l[q];
    if (a[q] == null) continue;
    let te = rl(a[q]);
    if (m) {
      let U;
      $ === Zc || $ === Kc ? U = !0 : $ === gr ? U = L : $ === md || $ === dl ? U = !1 : U = Math.round((0.2126 * te[0] + 0.7152 * te[1] + 0.0722 * te[2]) / 255 * 4) / 4 <= No(F, ne), ($ === Gc || $ === Uc || $ === Yc || $ === dl) && (F > 0 && l[q - 1] !== $ || F < o - 1 && l[q + 1] !== $ || ne > 0 && l[q - o] !== $ || ne < c - 1 && l[q + o] !== $) && (U = !0), te = U ? P : re;
    }
    w[q * 4] = te[0], w[q * 4 + 1] = te[1], w[q * 4 + 2] = te[2], w[q * 4 + 3] = 255;
  }
  return { w: o, h: c, data: w };
}
const np = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, ap = (a) => pl(a, !1).split("/")[0], Yl = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, op = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", ip = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", rp = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", sp = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", lp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], dp = [".##", "##.", ".#.", "#.."];
function $c(a, { width: l, height: o, colors: c, wave: m = 0.38, soft: g = 6, glow: v = 0.6, columns: L = 6 }) {
  const w = { ...ea, dawn: "#e5a77e", ...c }, P = Ju(w), re = l, ne = o, F = re / L, q = F / 2, $ = Math.PI * 2, te = a.length ? a : [{ cond: "cloudy", night: !1 }], U = [...Array(L * 2)].map((Z, Q) => {
    const _ = te[Math.min(Q, te.length - 1)], j = ap(_.cond), ge = Q % 2 === 1;
    return { cond: _.cond, k: j, night: ge, sky: P[j][ge ? 1 : 0], cover: np[j] };
  }), W = (Z) => ne * (0.5 - m * Math.cos($ * (Z / F - 0.25)));
  return { C: w, S: U, W: re, H: ne, cw: F, sw: q, TAU: $, yb: W, side: (Z, Q, _) => {
    const j = (Z ? W(Q) - _ : _ - W(Q)) / Math.max(3, g * 1.4) + 0.5;
    return j <= 0 ? 0 : j >= 1 ? 1 : j;
  }, glowAt: (Z) => {
    const Q = ((Z / F - 0.25) % 1 + 1) % 1, _ = Math.max(0, Math.min(L - 1, Math.round(Z / F - 0.25))), j = Math.max(0, Math.min(L - 1, Math.round(Z / F - 0.75))), ge = 1 - (U[2 * _].cover + U[2 * j + 1].cover) / 2, Te = Math.sin(Math.PI * Math.min(1, Math.max(0, W(Z) / ne)));
    return { c: Q < 0.5 ? w.dusk : w.dawn, a: v * (0.2 + 0.8 * ge) * Te * Te };
  }, soft: g, tw: F * 0.3, sy: ne / 90 };
}
function Xc(a, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: g, side: v, C: L, TAU: w, sy: P } = a, re = l, ne = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((F, q) => {
    const $ = Yl(c * 977 + q * 131 + 7), te = (q + 0.5) * g, U = F.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[F.k] : 0;
    for (let W = 0; W < U; W++) {
      const X = te + ($() - 0.5) * g * 1.6, G = (6 + $() * 76) * P, Z = $() < 0.35, Q = 1.8 + $() * 1.6, _ = v(!0, X, G) * (Z ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(w * re / 2600 + W * 1.7 + q) : 1);
      _ >= 0.03 && ne.stars.push({ x: X, y: G, big: Z, size: Q, o: _ });
    }
    if (!F.night && (F.k === "clear" || F.k === "partly")) {
      const W = te + ($() - 0.5) * g * 0.3, X = Math.min(15, g * 0.29);
      ne.suns.push({ x: W, y: 32 * P, rad: X, halo: X * 2.8 * (o ? 1 + 0.07 * Math.sin(w * re / 3600 + q) : 1) });
    }
    if (F.night && (F.k === "clear" || F.k === "partly")) {
      const W = Math.min(0.78, g * 0.55 / 34), X = te - 23 * W + ($() - 0.5) * g * 0.2;
      ne.moons.push({ x: X + 23 * W, y: (4 + (o ? 0.8 * Math.sin(w * re / 5200 + q) : 0)) * P + 23 * W, d: 46 * W });
    }
  }), m.forEach((F, q) => {
    const $ = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[F.k];
    if (!$) return;
    const te = Yl(c * 577 + q * 71 + 3), U = (q + 0.5) * g, W = F.k === "rain" || F.k === "storm" || F.night ? L.cloudNight : L.cloudDay, X = F.night ? 0.82 : F.k === "storm" ? 0.75 : 1;
    for (let G = 0; G < $; G++) {
      const Z = g / 46 * (F.k === "partly" ? 0.85 : 0.75 + te() * 0.55), Q = U + (F.k === "partly" ? g * 0.12 : (te() - 0.5) * g * 1.05), _ = (F.k === "partly" ? 40 : 6 + te() * 26) * P, j = o ? 2.5 * Math.sin(w * re / 9e3 + q * 1.3 + G * 2.1) : 0, ge = o ? 0.9 * Math.sin(w * re / 6100 + q + G) : 0;
      ne.clouds.push({ x: Q - 23 * Z + j, y: _ - 15.33 * Z + ge, w: 46 * Z, h: 30.66 * Z, fill: W, o: X * ($ > 1 && G === 0 ? 0.85 : 1) });
    }
  }), m.forEach((F, q) => {
    const $ = Yl(c * 313 + q * 29 + 11), te = (q + 0.5) * g, U = F.cond === "pouring" ? 16 : F.cond === "rainy" || F.cond === "hail" ? 9 : F.cond === "lightning-rainy" ? 12 : F.cond === "snowy-rainy" ? 5 : 0;
    for (let X = 0; X < U; X++) {
      let G = te + ($() - 0.5) * g * 1.05, Z = 44 + $() * 36, Q = 1;
      if (o) {
        const j = ((Z - 44 + re * 0.04) % 36 + 36) % 36;
        G -= 0.21 * (j - (Z - 44)), Z = 44 + j, Q = Math.min(1, j / 6, (36 - j) / 6);
      }
      Z *= P;
      const _ = v(F.night, G, Z) * Q;
      _ >= 0.05 && ne.drops.push({ x: G, y: Z, o: _ });
    }
    const W = F.cond === "snowy" ? 11 : F.cond === "snowy-rainy" ? 6 : 0;
    for (let X = 0; X < W; X++) {
      let G = te + ($() - 0.5) * g * 1.05, Z = 40 + $() * 44, Q = 1;
      if (o) {
        const j = ((Z - 40 + re * 9e-3) % 44 + 44) % 44;
        Z = 40 + j, G += 1.6 * Math.sin(w * re / 2800 + X * 1.9 + q), Q = Math.min(1, j / 6, (44 - j) / 6);
      }
      Z *= P;
      const _ = v(F.night, G, Z) * Q;
      _ >= 0.05 && ne.flakes.push({ x: G, y: Z, o: _ });
    }
    if (F.k === "fog") {
      const X = F.night ? "#c8ccd6" : "#ffffff", G = F.night ? 0.28 : 0.62, Z = o ? 4 * Math.sin(w * re / 8e3 + q) : 0;
      for (let Q = 0; Q < 4; Q++) ne.fogs.push({ x: te - g * 0.75 + Q % 2 * g * 0.18 + (Q % 2 ? Z : -Z), y: (30 + Q * 13) * P, w: g * 1.3, c: X, a: G });
    }
    if (F.k === "storm") {
      const X = (re / 3400 + q * 0.37) % 1;
      ne.bolts.push({ x: te + ($() - 0.5) * g * 0.3 - 5, y: 36 * P, o: o && !(X < 0.05 || X > 0.09 && X < 0.12) ? 0.8 : 1 });
    }
  }), ne;
}
function cp(a, l, o, c, m, g, v, L) {
  const { S: w, C: P, cw: re, yb: ne, glowAt: F, soft: q, tw: $, sy: te } = a, U = new Array(o * c), W = new Uint8Array(o * c), X = new Uint8Array(o * c), G = (k, E, C, N, ce) => {
    C == null || k < 0 || E < 0 || k >= o || E >= c || (N >= 1 || N > No(k + 5, E + 3)) && (U[E * o + k] = C, W[E * o + k] = ce);
  }, Z = (k, E, C, N) => {
    for (let ce = Math.max(0, Math.floor(E - C) - 1); ce <= Math.min(c - 1, E + C + 1); ce++) for (let V = Math.max(0, Math.floor(k - C) - 1); V <= Math.min(o - 1, k + C + 1); V++) N(V, ce, V + 0.5 - k, ce + 0.5 - E);
  }, Q = (k, E, C) => {
    for (let ce = 0; ce < k.length - 1; ce++) {
      const V = (ce + E) * re;
      if (C < V - $ / 2) return [k[ce], k[ce], 0];
      if (C <= V + $ / 2) return [k[ce], k[ce + 1], (C - V + $ / 2) / $];
    }
    const N = k[k.length - 1];
    return [N, N, 0];
  }, _ = w.filter((k) => !k.night).map((k) => k.sky), j = w.filter((k) => k.night).map((k) => k.sky), ge = q / g, Te = 16 * te / g;
  for (let k = 0; k < o; k++) {
    const E = (k + 0.5) * m, C = ne(E) / g, N = Q(_, 0.75, E), ce = Q(j, 1.25, E), V = F(E);
    for (let ae = 0; ae < c; ae++) {
      const le = No(k, ae), me = ae + 0.5 - C, We = (ge > 0.01 ? Bo(0.5 + me / ge) : me > 0 ? 1 : 0) > le;
      let tt = We ? N[2] > le ? N[1] : N[0] : ce[2] > le ? ce[1] : ce[0];
      (We ? Bo(((ae + 0.5) / c - 0.45) / 0.55) * 0.7 : Bo(1 - (ae + 0.5) / (c * 0.55)) * 0.7) > No(k + 2, ae + 5) && (tt = We ? La(tt, "#ffffff", 0.18) : La(tt, "#000000", 0.25)), We && me >= 0 && me < Te && V.a * 1.3 * (1 - me / Te) > No(k + 6, ae + 1) && (tt = V.c), U[ae * o + k] = tt, X[ae * o + k] = We ? 0 : 1;
    }
  }
  const b = La(P.sun, "#ffffff", 0.55), be = La(P.moon, "#ffffff", 0.6);
  l.stars.forEach((k) => {
    const E = Math.floor(k.x / m), C = Math.floor(k.y / g);
    if (E < 0 || C < 0 || E >= o || C >= c || !X[C * o + E] || k.o < 0.15) return;
    const N = k.o > 0.45 ? P.star : La(P.star, U[C * o + E], 0.5), ce = k.big && k.o > 0.6 ? Math.floor(k.size / m) : 0;
    G(E, C, N, 1, md);
    for (let V = 1; V <= ce; V++) [[E - V, C], [E + V, C], [E, C - V], [E, C + V]].forEach((ae) => {
      ae[0] >= 0 && ae[1] >= 0 && ae[0] < o && ae[1] < c && X[ae[1] * o + ae[0]] && G(ae[0], ae[1], N, 1, md);
    });
  }), l.suns.forEach((k) => {
    const E = Math.max(1.5, k.rad / m), C = k.x / m, N = k.y / g, ce = k.halo / m * 0.85;
    if (Z(C, N, ce, (V, ae, le, me) => {
      const We = Math.sqrt(le * le + me * me);
      We > E && We < ce && !X[ae * o + V] && G(V, ae, b, 0.3 * (1 - (We - E) / (ce - E)), 0);
    }), L) {
      const V = Math.floor(v / 500) % 2, ae = Math.max(1, E * 0.3);
      for (let le = 0; le < 8; le++) if (le % 2 === V) for (let me = E + 1.2; me < E + 1.2 + ae; me += 0.7) G(Math.floor(C + Math.cos(le * Math.PI / 4) * me), Math.floor(N + Math.sin(le * Math.PI / 4) * me), P.sun, 1, Kc);
    }
    Z(C, N, E, (V, ae, le, me) => {
      le * le + me * me <= E * E && G(V, ae, Bo(((me / E + 1) / 2 - 0.6) / 0.4) > No(V, ae) ? P.sunEdge : P.sun, 1, Gc);
    });
  }), l.moons.forEach((k) => {
    const E = Math.max(1.5, k.d * 0.37 / m), C = k.x / m, N = k.y / g, ce = C + 0.547 * E, V = N - 0.503 * E, ae = 0.82 * E;
    Z(C, N, E, (le, me, We, tt) => {
      if (We * We + tt * tt > E * E) return;
      const xt = le + 0.5 - ce, vn = me + 0.5 - V;
      xt * xt + vn * vn > ae * ae && G(le, me, Bo((tt + E) / (2 * E) * 1.1 - 0.1) > No(le, me) ? P.moon : be, 1, Uc);
    });
  }), l.clouds.forEach((k) => {
    const E = Math.max(3, k.w / m), C = E * 0.6665, N = k.x / m, ce = k.y / g, V = La(k.fill, "#000000", 0.16);
    for (let ae = Math.max(0, Math.floor(ce) - 1); ae <= Math.min(c - 1, ce + C + 1); ae++) for (let le = Math.max(0, Math.floor(N) - 1); le <= Math.min(o - 1, N + E + 1); le++) {
      const me = (le + 0.5 - N) / E, We = (ae + 0.5 - ce) / E;
      ec(me, We) && G(le, ae, !ec(me, We + 1 / E) || Bo((We - 0.42) / 0.25) * 0.8 > No(le, ae) ? V : k.fill, k.o, Yc);
    }
  }), l.fogs.forEach((k) => {
    const E = Math.floor(k.y / g), C = Math.max(E, Math.floor((k.y + 6 * te) / g) - 1), N = Math.floor(k.x / m), ce = Math.floor((k.x + k.w) / m);
    for (let V = E; V <= C; V++) for (let ae = N; ae <= ce; ae++) {
      const le = (ae - N) / Math.max(1, ce - N);
      G(ae, V, k.c, k.a * (le < 0.25 ? le / 0.25 : le > 0.75 ? (1 - le) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / g));
  l.drops.forEach((k) => {
    const E = k.x / m, C = Math.floor(k.y / g);
    for (let N = 0; N < Ce; N++) G(Math.floor(E - 0.208 * N * g / m), C + N, P.rain, k.o, Zc);
  });
  const Oe = Math.max(0, Math.round(4.4 / m / 2.6));
  return l.flakes.forEach((k) => {
    const E = Math.floor(k.x / m), C = Math.floor(k.y / g);
    G(E, C, P.snow, k.o, gr);
    for (let N = 1; N <= Oe; N++)
      G(E - N, C, P.snow, k.o, gr), G(E + N, C, P.snow, k.o, gr), G(E, C - N, P.snow, k.o, gr), G(E, C + N, P.snow, k.o, gr);
  }), l.bolts.forEach((k) => {
    if (m <= 3.5)
      for (let E = Math.floor(k.y / g); E <= (k.y + 24) / g; E++) for (let C = Math.floor(k.x / m); C <= (k.x + 11) / m; C++)
        ep(lp, (C + 0.5) * m - k.x, (E + 0.5) * g - k.y) && G(C, E, P.sun, 1, dl);
    else {
      const E = Math.round(k.x / m), C = Math.round(k.y / g);
      dp.forEach((N, ce) => N.split("").forEach((V, ae) => {
        V === "#" && G(E + ae, C + ce, P.sun, 1, dl);
      }));
    }
  }), { col: U, ids: W };
}
function up(a, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), m = Math.max(6, Math.round(l.height / o)), g = l.width / c, v = l.height / m, L = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, w = (q) => {
    const $ = $c(q, l);
    return cp($, Xc($, { clock: L, ambient: l.ambient, seed: l.seed }), c, m, g, v, L, l.ambient);
  }, P = w(a), re = l.reveal == null ? 1 : Bo(l.reveal);
  let ne = P.col, F = P.ids;
  if (re < 1) {
    const q = l.prev ? w(l.prev) : null, $ = re * (c + 12);
    ne = new Array(c * m), F = new Uint8Array(c * m);
    for (let te = 0; te < c * m; te++) {
      const U = te % c, W = te / c | 0;
      (l.reduce ? re : Bo(($ - U) / 12)) > No(U, W) ? (ne[te] = P.col[te], F[te] = P.ids[te]) : q ? (ne[te] = q.col[te], F[te] = q.ids[te]) : (ne[te] = null, F[te] = 255);
    }
  }
  return tp(ne, F, c, m, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function pp(a, l, o) {
  const c = o.width, m = o.height, g = o.reveal == null ? 1 : Bo(o.reveal), v = (F, q) => {
    const $ = $c(q, o);
    hp(F, $, Xc($, o));
  };
  if (a.clearRect(0, 0, c, m), g >= 1) {
    v(a, l);
    return;
  }
  if (o.prev && v(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = g, v(a, l), a.restore();
    return;
  }
  const L = a.canvas, w = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (w.width !== L.width || w.height !== L.height) && (w.width = L.width, w.height = L.height);
  const P = w.getContext("2d");
  P.setTransform(a.getTransform()), P.clearRect(0, 0, c, m), v(P, l);
  const re = g * (c + 64) - 64, ne = P.createLinearGradient(re, 0, re + 64, 0);
  ne.addColorStop(0, "rgba(0,0,0,1)"), ne.addColorStop(1, "rgba(0,0,0,0)"), P.globalCompositeOperation = "destination-in", P.fillStyle = ne, P.fillRect(0, 0, c, m), P.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(w, 0, 0), a.restore();
}
function hp(a, l, o) {
  const { W: c, H: m, S: g, C: v, cw: L, yb: w, glowAt: P, soft: re, tw: ne, sy: F } = l, q = (b, be) => {
    const Ce = rl(b);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, be)).toFixed(3) + ")";
  }, $ = (b, be) => {
    const Ce = a.createLinearGradient(0, 0, c, 0);
    Ce.addColorStop(0, b[0]);
    for (let Oe = 0; Oe < b.length - 1; Oe++) {
      const k = (Oe + be) * L, E = (k - ne / 2) / c, C = (k + ne / 2) / c;
      E > 0 && E < 1 && Ce.addColorStop(E, b[Oe]), C > 0 && C < 1 && Ce.addColorStop(C, b[Oe + 1]);
    }
    return Ce.addColorStop(1, b[b.length - 1]), Ce;
  }, te = Math.max(24, Math.ceil(c / 4)), U = (b, be) => {
    a.beginPath();
    for (let Ce = 0; Ce <= te; Ce++) {
      const Oe = c * Ce / te, k = b == null ? 0 : w(Oe) + b;
      Ce ? a.lineTo(Oe, k) : a.moveTo(Oe, k);
    }
    for (let Ce = te; Ce >= 0; Ce--) {
      const Oe = c * Ce / te;
      a.lineTo(Oe, w(Oe) + be);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = $(g.filter((b) => !b.night).map((b) => b.sky), 0.75), a.fillRect(0, 0, c, m);
  const W = a.createLinearGradient(0, 0, c, 0);
  for (let b = 0; b <= 64; b++) {
    const be = P(c * b / 64);
    W.addColorStop(b / 64, q(be.c, Math.min(1, be.a)));
  }
  a.fillStyle = W;
  for (let b = 0; b < 8; b++)
    a.globalAlpha = 1 - b / 8, U(b * 2 * F, (b + 1) * 2 * F);
  a.fillStyle = $(g.filter((b) => b.night).map((b) => b.sky), 1.25);
  const X = Math.max(0.5, re), G = 6;
  a.globalAlpha = 1, U(null, -X);
  for (let b = 0; b < G; b++)
    a.globalAlpha = 1 - (b + 0.5) / G, U(-X + 2 * X * b / G, -X + 2 * X * (b + 1) / G);
  a.globalAlpha = 1;
  const Z = new Path2D(rp), Q = new Path2D(ip), _ = new Path2D(op), j = new Path2D(sp);
  a.fillStyle = v.star, o.stars.forEach((b) => {
    a.globalAlpha = b.o, b.big ? (a.save(), a.translate(b.x, b.y), a.scale(b.size, b.size), a.fill(Z), a.restore()) : (a.beginPath(), a.arc(b.x, b.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const ge = La(v.sun, "#ffffff", 0.55);
  o.suns.forEach((b) => {
    const be = a.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.halo);
    be.addColorStop(0, q(ge, 0.42)), be.addColorStop(0.7, q(ge, 0)), a.fillStyle = be, a.beginPath(), a.arc(b.x, b.y, b.halo, 0, Math.PI * 2), a.fill();
    const Ce = a.createLinearGradient(0, b.y - b.rad, 0, b.y + b.rad);
    Ce.addColorStop(0.6, v.sun), Ce.addColorStop(1, v.sunEdge), a.fillStyle = Ce, a.beginPath(), a.arc(b.x, b.y, b.rad, 0, Math.PI * 2), a.fill();
  });
  const Te = La(v.moon, "#ffffff", 0.6);
  o.moons.forEach((b) => {
    a.save(), a.translate(b.x - b.d / 2, b.y - b.d / 2), a.scale(b.d / 46, b.d / 46);
    const be = a.createLinearGradient(0, 6, 0, 40);
    be.addColorStop(0, Te), be.addColorStop(1, v.moon), a.fillStyle = be, a.fill(Q), a.restore();
  }), o.clouds.forEach((b) => {
    a.save(), a.globalAlpha = b.o, a.translate(b.x, b.y), a.scale(b.w / 46, b.h / 30.66), a.translate(-4, -9.67), a.fillStyle = b.fill, a.fill(_), a.restore();
  }), o.fogs.forEach((b) => {
    const be = a.createLinearGradient(b.x, 0, b.x + b.w, 0);
    be.addColorStop(0, q(b.c, 0)), be.addColorStop(0.25, q(b.c, b.a)), be.addColorStop(0.75, q(b.c, b.a)), be.addColorStop(1, q(b.c, 0)), a.fillStyle = be, a.fillRect(b.x, b.y, b.w, 6 * F);
  }), a.fillStyle = v.rain, o.drops.forEach((b) => {
    a.save(), a.globalAlpha = b.o, a.translate(b.x, b.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = v.snow, o.flakes.forEach((b) => {
    a.globalAlpha = b.o, a.beginPath(), a.arc(b.x, b.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = v.sun, o.bolts.forEach((b) => {
    a.save(), a.globalAlpha = b.o, a.translate(b.x, b.y), a.fill(j), a.restore();
  }), a.restore();
}
const fp = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", fr = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Zs = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Zl = (a, l) => '<path class="' + l + '" d="' + a + '"/>', mp = (a, l) => ' style="animation-delay:-' + Math.round(a * 137 % l) + 'ms"', Sa = (a, l, o, c) => {
  const m = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + mp(a, 2400) + ' d="M' + a + " " + (l - o) + "L" + (a + m) + " " + (l - m) + "L" + (a + o) + " " + l + "L" + (a + m) + " " + (l + m) + "L" + a + " " + (l + o) + "L" + (a - m) + " " + (l + m) + "L" + (a - o) + " " + l + "L" + (a - m) + " " + (l - m) + 'Z"/>';
}, tc = ([a, l, o], c) => '<path class="wbMoonPath" d="' + a + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + l + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', gp = (a, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', vp = (a) => (a ? ["29.35", "43.04", "56.74"].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), bp = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, o], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + l + '" cy="' + o + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function wp(a, l, o, c) {
  return a === "clear" ? l ? tc(o ? Zs.l : Zs.s, c) + (o ? Sa(70, 20, 5.83, 1) + Sa(78.33, 41.67, 3.75, 0.8) + Sa(60, 71.67, 3.33, 0.6) : Sa(42, 12, 3.5, 1) + Sa(47, 25, 2.25, 0.8) + Sa(36, 43, 2, 0.6)) : gp(c, o) : a === "partly" ? (l ? tc(o ? Zs.lp : Zs.sp, c) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Zl(o ? fr.lp : fr.sp, l ? "wbCloudLight" : "wbBright") + (l ? o ? Sa(73.33, 16.67, 4.17, 0.9) : Sa(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? Zl(o ? fr.lc : fr.s, l ? "wbCloudLight" : "wbBright") + (l ? o ? Sa(15, 15, 3.75, 0.8) + Sa(76.67, 13.33, 2.92, 0.6) : Sa(9, 9, 2.25, 0.8) + Sa(46, 8, 1.75, 0.6) : "") : Zl(o ? fr.lr : fr.s, "wbCloudLight") + (a === "rain" ? vp(o) : bp(o));
}
function xp(a, l, o, c) {
  let m = fp(a);
  const g = m === "night" || !!o;
  m === "night" && (m = "clear");
  const v = l ? 90 : 54;
  return { k: m, night: g, svg: '<svg viewBox="0 0 ' + v + " " + v + '">' + wp(m, g, l, c) + "</svg>" };
}
const yp = [
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
], Ks = (a, l) => (yp[l % 8 * 8 + a % 8] + 0.5) / 64, ja = (a) => [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)], Wn = (a, l, o) => [Math.round(a[0] + (l[0] - a[0]) * o), Math.round(a[1] + (l[1] - a[1]) * o), Math.round(a[2] + (l[2] - a[2]) * o)], ns = (a) => a < 0 ? 0 : a > 1 ? 1 : a, nc = (a, l) => {
  let o = a * 374761393 + l * 668265263 ^ 1540483477;
  return o = Math.imul(o ^ o >>> 13, 1274126177), ((o ^ o >>> 16) >>> 0) / 4294967296;
}, Hi = [255, 255, 255], Kn = ja("#26221e"), ac = ja("#0288d1"), kp = ja("#01579b"), Kl = ja(ea.cloudDay), $l = ja(ea.cloudNight), $s = ja(ea.dusk), Xl = ja(ea.sunEdge), Mp = ja(ea.sun), Cp = 10, oc = 0.3, Po = 56, Jc = 21;
function Sp(a) {
  const l = Array.from({ length: Jc }, () => new Array(Po).fill(void 0)), o = (v, L, w) => {
    l[L][v] = w;
  }, c = Wn($s, Kn, 0.35), m = Wn(Kn, Hi, 0.22);
  for (let v = 0; v <= 6; v++) {
    const L = v < 2 ? Po - 2 : Po - 1;
    for (let w = 6 - v; w <= L; w++) o(w, v, v < 2 ? c : v === 6 ? m : Kn);
  }
  const g = [$s, Xl, $l, ja(ea.skyRainDay), Wn($s, Kn, 0.2), Wn(a, Kn, 0.35)];
  [2, 3, 2, 3, 3].forEach((v, L) => {
    const w = 9 + L * 6;
    for (let P = 0; P < v; P++) {
      const re = g[(L * 2 + P * 3) % g.length];
      for (let ne = w; ne < w + 5; ne++)
        o(ne, 7 + P * 2, Wn(re, Kn, 0.12)), o(ne, 8 + P * 2, P === v - 1 ? Wn(re, Hi, 0.3) : re);
      o(w + 5, 7 + P * 2, Kn), o(w + 5, 8 + P * 2, Kn);
    }
  });
  for (let v = 7; v <= 12; v++) o(5, v, Kn);
  o(5, 13, Xl);
  for (let v = 7; v <= 14; v++) for (let L = 42; L <= 51; L++) o(L, v, L === 51 ? $l : Kl);
  for (let v = 43; v <= 50; v += 2)
    o(v, 12, Kn), o(v, 9, Wn(Kn, Kl, 0.4));
  for (let v = 40; v <= 53; v++) o(v, 14, v === 40 || v === 53 ? $l : Kl);
  for (let v = 15; v <= 18; v++) for (let L = 46; L <= 49; L++) o(L, v, v === 18 ? Kn : v === 16 ? Xl : $s);
  for (let v = 15; v <= 19; v++) o(44, v, Kn);
  return o(44, 20, Mp), l;
}
function Tp(a, l, o, c) {
  const m = Math.max(1, Math.round(a)), g = Math.max(1, Math.round(l)), v = new Uint8ClampedArray(m * g * 4), L = ja(c.skyClearDay), w = ja(c.skyFogDay), P = Sp(L), re = Math.round(g * 0.55), ne = ns(1 - Math.log(o / oc) / Math.log(Cp / oc)), F = Wn(L, w, ne), q = (W) => ns((W - 0.1) / 0.9), $ = ns((1 - Math.exp(-2 / o) - 0.2) / 0.8), te = Math.round(m / 2 - Po / 2), U = re + 3;
  for (let W = 0; W < g; W++) {
    const X = U - 1 - W, G = W - U;
    for (let Z = 0; Z < m; Z++) {
      const Q = Z - te;
      let _, j;
      const ge = X >= 0 && X < Jc && Q >= 0 && Q < Po ? P[X][Q] : void 0;
      if (ge)
        _ = ge, j = $;
      else if (X >= 0 && X <= 1 && Q >= 4 - X && Q <= 5 - X)
        _ = Wn(Hi, ac, 0.15), j = $;
      else if (W < re) {
        const be = ns(((W + 0.5) / re - 0.15) / 0.85) * 3, Ce = Math.min(3, Math.floor(be + Ks(Z + 2, W + 5)));
        _ = Wn(F, Hi, Ce * 0.1), j = ne * 0.95;
      } else {
        const be = (W - re + 0.5) / (g - re), Ce = Math.min(1.5, 6e-3 / (be * be)), Oe = ns(be * 1.4) * 3, k = Math.min(3, Math.floor(Oe + Ks(Z + 1, W + 6)));
        _ = Wn(ac, kp, k / 3);
        const E = 1 + Math.round(be * 7), C = Math.floor(Z / (E * 3)), N = 0.06 + 0.16 * be, ce = Z % (E * 3) < E;
        ce && nc(C, W) < N ? _ = Wn(_, Hi, 0.18 + 0.1 * (1 - be)) : ce && be > 0.5 && nc(C, W - 1) < N && (_ = Wn(_, Kn, 0.12)), j = q(1 - Math.exp(-Ce / o)), G === 0 && Q >= 3 && Q <= 8 ? (_ = Wn(_, Hi, Q < 6 ? 0.8 : 0.45), j = $) : G >= 0 && G <= 2 && Q >= Po && Q < Po + 40 ? ((1 - (Q - Po) / 40) * (G === 1 ? 0.9 : 0.5) > Ks(Z, W + 3) && (_ = Wn(_, Hi, 0.5)), j = $) : G === 0 && Q >= 6 && Q < Po && (_ = Wn(_, Kn, Q % 2 === 0 ? 0.35 : 0.2), j = $);
      }
      const Te = j > Ks(Z, W) ? w : _, b = (W * m + Z) * 4;
      v[b] = Te[0], v[b + 1] = Te[1], v[b + 2] = Te[2], v[b + 3] = 255;
    }
  }
  return { data: v, w: m, h: g };
}
const Lp = {
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
}, Ap = 1.6;
function _p(a, l) {
  const o = a ? Lp[String(a).toUpperCase()] : void 0;
  if (!o || !(l > 0)) return;
  const c = (g) => Math.abs(Math.log(g[2] / l)), m = o.reduce((g, v) => c(v) < c(g) ? v : g);
  return c(m) <= Math.log(Ap) ? { from: m[0], to: m[1], km: m[2] } : void 0;
}
const Ep = (a, l) => l === "mi" ? a * 1.609344 : l === "m" ? a / 1e3 : l === "ft" ? a * 3048e-7 : l === "yd" ? a * 9144e-7 : a, Dp = (a) => a < 1 ? "very_poor" : a < 4 ? "poor" : a < 10 ? "moderate" : a < 20 ? "good" : a < 40 ? "very_good" : "excellent", so = 6e4, io = 36e5, Fi = 864e5, is = 1440, Rp = 6, Np = 10 * so, Xs = 3, Jl = 20, Bp = 3, Pp = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Ip = 30 * so, Hp = 7, Fp = 3, ic = 1, Op = so, qp = 15 * so, Wp = 5, $n = {
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
}, zp = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], jp = Object.keys(Ze.phases), Js = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, Gp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Qc = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Qs = 100, rc = "µg/m³", Up = "weather_alerts.air_quality_pollen", sc = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Yp = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, Zp = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], Kp = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, $p = { daily: 1, hourly: 2 }, Fe = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Yn = (a, l) => a.replace(/\{(\w+)\}/g, (o, c) => l[c] ?? ""), br = (a) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + a + '"/></svg>', Xp = () => {
  var a;
  return !!((a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches);
}, En = (a) => a != null && a !== "" && Number.isFinite(Number(a)), lc = /* @__PURE__ */ new Map(), dc = /* @__PURE__ */ new Map(), Ql = /* @__PURE__ */ new WeakMap(), Jp = (a) => {
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
function gn(a, l, o) {
  const c = Number(a);
  if (Number.isNaN(c)) return String(a);
  const m = (l == null ? void 0 : l.number_format) === "none", g = { maximumFractionDigits: 2, ...o, ...m ? { useGrouping: !1 } : {} }, v = m ? "en-US" : Jp(l), L = JSON.stringify([v, g]);
  let w = lc.get(L);
  if (!w) {
    try {
      w = new Intl.NumberFormat(v, g);
    } catch {
      w = new Intl.NumberFormat(void 0, g);
    }
    lc.set(L, w);
  }
  return w.format(c);
}
const kd = (a) => {
  var l;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.language) || (a == null ? void 0 : a.language) || void 0;
};
function Qp(a) {
  if (!a) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Ql.has(a)) return Ql.get(a);
  const l = a.time_format, o = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? a.language : void 0).includes("10") : l === "12";
  return Ql.set(a, o), o;
}
const eu = (a) => {
  var l, o;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.time_zone) === "server" && ((o = a == null ? void 0 : a.config) != null && o.time_zone) ? a.config.time_zone : void 0;
};
function tu(a, l) {
  const o = JSON.stringify([a, l]);
  let c = dc.get(o);
  if (!c) {
    try {
      c = new Intl.DateTimeFormat(a, l);
    } catch {
      c = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    dc.set(o, c);
  }
  return c;
}
const mr = (a, l) => tu(kd(l), { hour: "numeric", minute: "2-digit", hourCycle: Qp(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: eu(l) }).format(a), cc = (a, l) => tu(kd(l), { weekday: "short", timeZone: eu(l) }).format(a), eh = (a, l) => a.toLocaleDateString(kd(l), { weekday: "narrow" }), Zn = (a, l) => En(l) ? gn(Math.round(Number(l)), a.locale) + "°" : "–", wr = (a) => {
  const l = new Date(a);
  return l.setHours(0, 0, 0, 0), l;
}, as = (a, l) => a.getFullYear() === l.getFullYear() && a.getMonth() === l.getMonth() && a.getDate() === l.getDate(), pa = Math.PI / 180, th = 2440588, nh = 2451545, cl = pa * 23.4397, ah = 149598e3, oh = -0.833 * pa, ih = 0.133 * pa, uc = 5 * so, nu = (a) => a.getTime() / Fi - 0.5 + th - nh, au = (a, l) => Math.atan2(Math.sin(a) * Math.cos(cl) - Math.tan(l) * Math.sin(cl), Math.cos(a)), ou = (a, l) => Math.asin(Math.sin(l) * Math.cos(cl) + Math.cos(l) * Math.sin(cl) * Math.sin(a)), rh = (a, l) => pa * (280.16 + 360.9856235 * a) - l, sh = (a, l, o) => Math.asin(Math.sin(l) * Math.sin(o) + Math.cos(l) * Math.cos(o) * Math.cos(a));
function iu(a) {
  const l = pa * (357.5291 + 0.98560028 * a), o = pa * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), c = l + o + pa * 102.9372 + Math.PI;
  return { ra: au(c, 0), dec: ou(c, 0), dist: ah };
}
function ru(a) {
  const l = pa * (218.316 + 13.176396 * a), o = pa * (134.963 + 13.064993 * a), c = pa * (93.272 + 13.22935 * a), m = l + pa * 6.289 * Math.sin(o), g = pa * 5.128 * Math.sin(c);
  return { ra: au(m, g), dec: ou(m, g), dist: 385001 - 20905 * Math.cos(o) };
}
const su = (a, l, o, c) => {
  const m = nu(l), g = a(m);
  return sh(rh(m, pa * -c) - g.ra, pa * o, g.dec);
}, Md = (a, l, o) => su(iu, a, l, o), lh = (a, l, o) => su(ru, a, l, o);
function lu(a, l, o, c) {
  const m = {};
  let g = o.getTime(), v = a(o) - l;
  for (let L = g + uc; L <= c.getTime(); L += uc) {
    const w = a(new Date(L)) - l;
    if (v < 0 != w < 0) {
      const P = new Date(g + (L - g) * v / (v - w));
      w > 0 ? m.rise ?? (m.rise = P) : m.set ?? (m.set = P);
    }
    g = L, v = w;
  }
  return m;
}
const du = (a) => {
  const l = wr(a);
  return [l, new Date(l.getTime() + Fi)];
}, dh = (a, l, o) => lu((c) => Md(c, l, o), oh, ...du(a)), ch = (a, l, o) => lu((c) => lh(c, l, o), ih, ...du(a));
function uh(a) {
  const l = nu(a), o = iu(l), c = ru(l), m = Math.acos(Math.sin(o.dec) * Math.sin(c.dec) + Math.cos(o.dec) * Math.cos(c.dec) * Math.cos(o.ra - c.ra)), g = Math.atan2(o.dist * Math.sin(m), c.dist - o.dist * Math.cos(m)), v = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - c.ra), Math.sin(o.dec) * Math.cos(c.dec) - Math.cos(o.dec) * Math.sin(c.dec) * Math.cos(o.ra - c.ra));
  return { fraction: (1 + Math.cos(g)) / 2, phase: 0.5 + 0.5 * g * (v < 0 ? -1 : 1) / Math.PI };
}
const ph = (a) => {
  const l = a * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, ul = (a) => {
  const l = a == null ? void 0 : a.config;
  return l && En(l.latitude) && En(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function pc(a, l) {
  var P, re, ne;
  const o = ul(a), c = o ? dh(l, o.lat, o.lon) : {}, m = (P = a == null ? void 0 : a.states) == null ? void 0 : P["sun.sun"], g = wr(l).getTime(), v = (F) => {
    const q = F ? new Date(F) : null;
    return q && Number.isFinite(q.getTime()) && wr(q).getTime() === g ? q : null;
  }, L = v((re = m == null ? void 0 : m.attributes) == null ? void 0 : re.next_rising), w = v((ne = m == null ? void 0 : m.attributes) == null ? void 0 : ne.next_setting);
  return L && (c.rise = L), w && (c.set = w), c;
}
function hh(a) {
  var c;
  const l = (c = a == null ? void 0 : a.states) == null ? void 0 : c["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const o = ul(a);
  return o ? Md(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const rs = (a) => !!a && a.state !== "unavailable" && a.state !== "unknown", hl = (a, l) => {
  var c;
  const o = (c = a.entities) == null ? void 0 : c[l];
  return !o || !o.hidden && !o.entity_category;
}, wa = (a, l, o) => {
  var c, m;
  for (const g of l) {
    const v = (c = a.states) == null ? void 0 : c[g];
    if (!rs(v)) continue;
    const L = (m = v.attributes) == null ? void 0 : m[o];
    if (L != null && L !== "") return { stateObj: v, value: L };
  }
}, fh = (a, l) => l.map((o) => {
  var c;
  return (c = a.states) == null ? void 0 : c[o];
}).find(rs), mh = (a, l, o) => l.map((c) => {
  var m;
  return (m = a.states) == null ? void 0 : m[c];
}).find((c) => {
  var m;
  return rs(c) && (((m = c.attributes) == null ? void 0 : m.supported_features) == null || Number(c.attributes.supported_features) & $p[o]);
});
function vr(a, l, o) {
  var g, v, L, w;
  const c = ((v = (g = a.config) == null ? void 0 : g.unit_system) == null ? void 0 : v.length) || "", m = (l == null ? void 0 : l.attributes) || {};
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
      return m.temperature_unit || ((w = (L = a.config) == null ? void 0 : L.unit_system) == null ? void 0 : w.temperature) || "";
  }
}
function sl(a, l, o, c) {
  try {
    if (typeof a.formatEntityAttributeValueToParts == "function") {
      const [m, ...g] = a.formatEntityAttributeValueToParts(l, o, c).map((v) => v.value);
      return { number: m, unit: g.join("").trim() };
    }
  } catch {
  }
  return { number: gn(c, a.locale), unit: vr(a, l, o) };
}
function gh(a, l, o, c) {
  try {
    if (typeof a.formatEntityAttributeValue == "function") return a.formatEntityAttributeValue(l, o, c);
  } catch {
  }
  const m = sl(a, l, o, c);
  return (m.number + " " + m.unit).trim();
}
function el(a, l) {
  var c;
  try {
    if (typeof a.formatEntityState == "function") return a.formatEntityState(l);
  } catch {
  }
  const o = (c = l.attributes) == null ? void 0 : c.unit_of_measurement;
  return Vp[l.state] || (o && En(l.state) ? gn(l.state, a.locale) + " " + o : l.state);
}
function hc(a, l) {
  var o;
  try {
    if (typeof a.formatEntityName == "function") return a.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((o = l.attributes) == null ? void 0 : o.friendly_name) || l.entity_id;
}
const vh = (a) => a < 3 ? "low" : a < 6 ? "moderate" : a < 8 ? "high" : a < 11 ? "very_high" : "extreme", bh = (a) => Qc.find(([, l]) => a <= l)[0];
function wh(a, l) {
  if (l === "Beaufort") return Math.round(a);
  const o = l ? Yp[l] : void 0;
  if (o === void 0) return;
  const c = Zp.findIndex((m) => a * o < m);
  return c === -1 ? 12 : c;
}
const fc = (a, l) => {
  const o = l ? Kp[l] : void 0;
  return o === void 0 ? void 0 : a * o;
}, mc = (a) => Object.keys(a.states || {}).find((l) => {
  var o, c;
  return l.startsWith("sensor.") && ((c = (o = a.entities) == null ? void 0 : o[l]) == null ? void 0 : c.platform) === "moon";
}), ed = (a) => Object.values(a.states || {}).filter((l) => {
  var o, c;
  return l.entity_id.startsWith("sensor.") && ((o = l.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = l.attributes) == null ? void 0 : c.state_class) ?? "") && hl(a, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function xh(a) {
  var o;
  const l = {};
  for (const [c, m] of Object.entries(((o = a == null ? void 0 : a.core) == null ? void 0 : o.integration) ?? {})) {
    if (m && "integration_type" in m) {
      l[c] = m.categories;
      continue;
    }
    for (const [g, v] of Object.entries((m == null ? void 0 : m.integrations) ?? {})) l[g] = v == null ? void 0 : v.categories;
  }
  return l;
}
const cu = (a, l, o) => {
  var m, g, v;
  const c = (g = (m = a.entities) == null ? void 0 : m[o]) == null ? void 0 : g.platform;
  return !!c && !!((v = l[c]) != null && v.includes(Up));
};
function yh(a, l) {
  const o = /* @__PURE__ */ new Map();
  return Object.values(a.states || {}).filter((c) => {
    var m;
    return c.entity_id.startsWith("sensor.") && sc.includes(((m = c.attributes) == null ? void 0 : m.device_class) ?? "") && hl(a, c.entity_id) && cu(a, l, c.entity_id);
  }).sort((c, m) => c.entity_id.localeCompare(m.entity_id)).forEach((c) => {
    o.has(c.attributes.device_class) || o.set(c.attributes.device_class, c.entity_id);
  }), sc.map((c) => o.get(c)).filter(Boolean);
}
const kh = (a, l) => Object.values(a.states || {}).filter((o) => {
  var c, m;
  return o.entity_id.startsWith("sensor.") && hl(a, o.entity_id) && cu(a, l, o.entity_id) && (((m = (c = a.entities) == null ? void 0 : c[o.entity_id]) == null ? void 0 : m.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function gc(a, l, o) {
  const c = Math.max(l - a, 1e-6), m = o[o.length - 1], g = o.find((P) => c / P <= 4) ?? m * Math.ceil(c / (4 * m)), v = Math.floor(a / g) * g;
  let L = Math.ceil(l / g) * g;
  L === v && (L = v + g);
  const w = [];
  for (let P = v; P <= L + g / 1e3; P += g) w.push(P);
  return { min: v, max: L, ticks: w };
}
const os = (a, l, o) => {
  const c = (v) => [1, 3, 5].map((L) => parseInt(v.slice(L, L + 2), 16)), m = c(a), g = c(l);
  return "rgb(" + m.map((v, L) => Math.round(v + (g[L] - v) * o)).join(", ") + ")";
}, Mh = (a, l, o, c) => {
  const m = o * Math.abs(1 - 2 * c), g = c < 0.5 ? 0 : 1;
  return "M " + a + " " + (l - o) + " A " + o + " " + o + " 0 0 0 " + a + " " + (l + o) + " A " + m + " " + o + " 0 0 " + g + " " + a + " " + (l - o) + " Z";
}, Ro = ({ icon: a, name: l, sub: o, visual: c, double: m, backdrop: g, cls: v }) => '<div class="wbCard wbSquare' + (m ? " wbDouble" : "") + (g ? " wbHasBackdrop" : "") + (v ? " " + v : "") + '">' + (g ? '<div class="wbBackdrop" aria-hidden="true">' + g + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + br(a) + '</div><div class="wbText"><span class="wbName">' + Fe(l) + "</span>" + (o ? '<span class="wbSub">' + Fe(o) + "</span>" : "") + '</div></div><div class="wbVisual">' + c + "</div></div>", tl = (a, l) => '<div class="wbValue"><span class="wbNum">' + Fe(a) + "</span>" + (l ? '<span class="wbUnitV">' + Fe(l) + "</span>" : "") + "</div>";
function Ch(a) {
  const l = a.max - a.min || 1, o = (L) => 100 - (Math.min(a.max, Math.max(a.min, L)) - a.min) / l * 100, c = (L) => L / is * 100 + "%", m = (L) => L.map((w) => w.t + "," + o(w.v)).join(" "), g = a.kind === "line" ? a.points : [];
  let v = '<div class="wbDayChart"><div class="wbDcSun">' + a.sun.map((L) => '<span class="wbDcSunMark" style="left:' + c(L.t) + '">' + br(L.rise ? $n.sunsetUp : $n.sunsetDown) + Fe(L.label) + "</span>").join("") + "</div>";
  return v += '<div class="wbDcY">' + a.ticks.map((L) => '<span style="top:' + o(L) + '%">' + Fe(a.format(L)) + "</span>").join("") + "</div>", v += '<div class="wbDcPlot"><svg viewBox="0 0 ' + is + ' 100" preserveAspectRatio="none">' + a.night.map(([L, w]) => '<rect class="wbDcNight" x="' + L + '" y="0" width="' + (w - L) + '" height="100"></rect>').join("") + a.ticks.map((L) => '<line class="wbDcGrid" x1="0" x2="' + is + '" y1="' + o(L) + '" y2="' + o(L) + '" vector-effect="non-scaling-stroke"></line>').join("") + a.sun.map((L) => '<line class="wbDcSunLine" x1="' + L.t + '" x2="' + L.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (a.past && a.past.length > 1 ? '<polyline class="wbDcPast" points="' + m(a.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (g.length > 1 ? '<polygon class="wbDcArea" points="' + g[0].t + ",100 " + m(g) + " " + g[g.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + m(g) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (a.now ? '<line class="wbDcNow" x1="' + a.now.t + '" x2="' + a.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (a.kind === "bars" ? a.points.filter((L) => L.v > 0).map((L) => '<i class="wbDcBar" style="left:' + c(L.t + 12) + ";width:" + c(36) + ";height:" + (100 - o(L.v)) + '%"></i>').join("") : "") + (a.now && a.kind === "line" ? '<i class="wbDcDot" style="left:' + c(a.now.t) + ";top:" + o(a.now.v) + '%"></i>' : "") + (a.peak ? '<span class="wbDcPeak" style="left:' + c(a.peak.t) + ";top:" + o(a.peak.v) + '%">' + Fe(a.peak.label) + "</span>" : "") + (a.note ? '<span class="wbDcNote">' + Fe(a.note) + "</span>" : "") + "</div>", v += '<div class="wbDcX">' + a.hours.map((L) => '<span class="' + (L.minor ? "wbMinor" : "") + '" style="left:' + c(L.t) + '">' + Fe(L.label) + "</span>").join("") + "</div></div>", v;
}
function Sh(a, l) {
  const v = a.map((U) => U.value), L = Math.min(...v), w = Math.max(...v), P = w - L || 1, re = (U) => U / (a.length - 1) * 300, ne = (U) => 18 + (1 - (U - L) / P) * 84, F = a.map((U, W) => re(W) + "," + ne(U.value)).join(" "), q = v.indexOf(w), $ = v.indexOf(L), te = (U) => U === 0 ? "start" : U === a.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + F + ' 300,102"></polygon><polyline class="wbLine" points="' + F + '" vector-effect="non-scaling-stroke"></polyline><text x="' + re(q) + '" y="' + (ne(w) - 6) + '" text-anchor="' + te(q) + '">' + Fe(l(w)) + '</text><text x="' + re($) + '" y="' + (ne(L) + 14) + '" text-anchor="' + te($) + '">' + Fe(l(L)) + '</text><text x="0" y="120" text-anchor="start">' + Fe(a[0].label) + '</text><text x="300" y="120" text-anchor="end">' + Fe(a[a.length - 1].label) + "</text></svg>";
}
function Th(a, l) {
  const g = a.map((ne) => ne.value).concat([]), v = Math.min(...g) - 2, L = Math.max(...g) + 1, w = L - v || 1, P = 300 / a.length, re = (ne) => (1 - (ne - v) / w) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + a.map((ne, F) => '<rect class="wbBar' + (ne.now ? " wbNowBar" : "") + '" x="' + (F * P + P * 0.2) + '" y="' + re(ne.value) + '" width="' + P * 0.6 + '" height="' + (104 - re(ne.value)) + '" rx="6"></rect><text x="' + (F * P + P / 2) + '" y="120" text-anchor="middle">' + Fe(ne.label) + "</text>").join("") + "</svg>";
}
const Lh = [
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
], Ah = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], vc = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], _h = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Eh = 0;
function bc(a, { getHass: l, entityId: o, style: c = "bitmap", motion: m = !0, cards: g, onOpen: v } = {}) {
  var Ua, fo;
  const L = "wb" + ++Eh + "-", w = document.createElement("div");
  w.className = "wb";
  const P = document.createElement("div");
  P.className = "wbBento", w.appendChild(P), a.replaceChildren(w);
  const re = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality"].filter((A) => !g || g.includes(A)), ne = { current: "wide", hourly: "wide", compared_to_average: "double" }, F = {};
  re.forEach((A) => {
    const T = document.createElement("div");
    T.className = "wbItem", T.dataset.card = A, T.dataset.size = ne[A] || "tile", T.hidden = !0, P.appendChild(T), F[A] = { el: T, html: null };
  });
  let q = !1, $ = null, te = 0, U = -1, W = !1, X = null;
  const G = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", aq: void 0 }, Z = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Q = /* @__PURE__ */ new Date(), _ = /* @__PURE__ */ new Date(), j = null;
  const ge = {}, Te = {}, b = (A) => {
    var T;
    return ((T = Te[A]) == null ? void 0 : T.forecast) ?? [];
  }, be = (A, T) => {
    var I;
    return Te[T] ? (I = A.states) == null ? void 0 : I[Te[T].entityId] : void 0;
  };
  function Ce(A) {
    const T = ge[A];
    T && (T.unsub.then((I) => {
      typeof I == "function" && I();
    }).catch(() => {
    }), delete ge[A]), Te[A] && delete Te[A];
  }
  function Oe(A, T, I) {
    var he;
    if (typeof ((he = A.connection) == null ? void 0 : he.subscribeMessage) != "function") return;
    const K = { entityId: I };
    try {
      K.unsub = Promise.resolve(A.connection.subscribeMessage((fe) => {
        q || ge[T] !== K || (fe != null && fe.forecast ? Te[T] = { entityId: I, forecast: fe.forecast } : delete Te[T], Gt());
      }, { type: "weather/subscribe_forecast", forecast_type: T, entity_id: I }));
    } catch (fe) {
      K.unsub = Promise.reject(fe);
    }
    K.unsub.catch(() => {
      ge[T] === K && delete ge[T];
    }), ge[T] = K;
  }
  function k(A, T) {
    var I;
    for (const K of ["daily", "hourly"]) {
      const he = mh(A, T, K);
      ((I = ge[K]) == null ? void 0 : I.entityId) !== (he == null ? void 0 : he.entity_id) && (Ce(K), he && Oe(A, K, he.entity_id));
    }
  }
  const E = (A, T, I, K = !1) => A.callWS({
    type: "history/history_during_period",
    start_time: I.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [T],
    minimal_response: K,
    no_attributes: K,
    significant_changes_only: !1
  });
  async function C(A, T) {
    var ue, ve, we;
    const I = wa(A, T, "pressure");
    if (!I) return;
    const K = I.stateObj.entity_id, he = await E(A, K, new Date(Date.now() - 3 * io)), fe = (we = (ve = (ue = he == null ? void 0 : he[K]) == null ? void 0 : ue.find((Ie) => {
      var ze;
      return typeof ((ze = Ie.a) == null ? void 0 : ze.pressure) == "number";
    })) == null ? void 0 : ve.a) == null ? void 0 : we.pressure;
    Z.pressureHistory = typeof fe == "number" ? { entityId: K, value: fe } : void 0;
  }
  async function N(A, T) {
    var ve;
    const I = wa(A, T, "temperature");
    if (!I) return;
    const K = I.stateObj.entity_id, he = wr(/* @__PURE__ */ new Date()), fe = await E(A, K, new Date(he.getTime() - Hp * Fi)), ue = /* @__PURE__ */ new Map();
    for (const we of (fe == null ? void 0 : fe[K]) ?? []) {
      const Ie = (ve = we.a) == null ? void 0 : ve.temperature, ze = new Date((we.lc ?? we.lu) * 1e3);
      if (typeof Ie != "number" || ze >= he) continue;
      const je = ze.toDateString();
      ue.set(je, Math.max(ue.get(je) ?? -1 / 0, Ie));
    }
    Z.temperatureHistory = { entityId: K, dailyHighs: [...ue.values()], days: [...ue.entries()].map(([we, Ie]) => ({ date: new Date(we), high: Ie })) };
  }
  async function ce(A) {
    const T = ed(A);
    if (!T) return;
    const I = await A.callWS({ type: "recorder/statistic_during_period", statistic_id: T, rolling_window: { duration: { hours: 24 } } });
    Z.rain = { entityId: T, change: (I == null ? void 0 : I.change) ?? void 0 };
  }
  function V() {
    const A = l == null ? void 0 : l();
    if (!A || q || typeof A.callWS != "function") return;
    const T = We(A);
    Z.lastFetch = Date.now(), [C(A, T), N(A, T), ce(A)].forEach((I) => I.then(() => Gt(), () => {
    }));
  }
  async function ae() {
    const A = l == null ? void 0 : l();
    if (!A) return;
    const T = wa(A, We(A), "temperature");
    if (!T) return;
    const I = T.stateObj.entity_id, K = wr(/* @__PURE__ */ new Date());
    try {
      const he = await E(A, I, K), fe = (ue) => ((he == null ? void 0 : he[I]) ?? []).map((ve) => {
        var we;
        return { time: ve.lu * 1e3, value: (we = ve.a) == null ? void 0 : we[ue] };
      }).filter((ve) => typeof ve.value == "number");
      Z.todayHistory = { day: K.toDateString(), fetched: Date.now(), temperature: fe("temperature"), humidity: fe("humidity") }, Gt();
    } catch {
    }
  }
  async function le(A) {
    const T = l == null ? void 0 : l();
    if (T)
      try {
        const I = await E(T, A, new Date(Date.now() - 24 * io), !0), K = ((I == null ? void 0 : I[A]) ?? []).filter((fe) => En(fe.s)), he = Math.max(1, Math.ceil(K.length / 48));
        Z.aqHistory = { entityId: A, points: K.filter((fe, ue) => ue % he === 0).map((fe) => ({ label: mr(new Date(fe.lu * 1e3), T), value: Number(fe.s) })) }, Gt();
      } catch {
      }
  }
  function me(A) {
    Z.categories === void 0 && (Z.categories = null, Promise.resolve().then(() => A.callWS({ type: "integration/descriptions" })).then((T) => {
      Z.categories = xh(T);
    }, () => {
      Z.categories = {};
    }).then(() => Gt()));
  }
  function We(A) {
    var I;
    const T = Object.keys(A.states || {}).filter((K) => K.startsWith("weather.") && hl(A, K)).sort();
    return o && ((I = A.states) != null && I[o]) ? [o, ...T.filter((K) => K !== o)] : T;
  }
  const tt = (A) => Z.categories ? { air: yh(A, Z.categories), pollen: kh(A, Z.categories) } : { air: [], pollen: [] };
  function xt(A, T, I, K) {
    if (c === "smooth") {
      const he = xp(A, T === 90, I, L + "g-" + K);
      return '<span class="wbWx wbS' + T + " wb" + he.k[0].toUpperCase() + he.k.slice(1) + (he.night ? " wbNight" : "") + '" aria-hidden="true">' + he.svg + "</span>";
    }
    return '<span class="wbWx wbS' + T + '" aria-hidden="true"><canvas data-wb-wx="' + Fe(pl(A, I)) + '" data-size="' + T + '"></canvas></span>';
  }
  const vn = () => b("daily").filter((A) => A.templow != null).slice(0, Rp);
  function Dn(A, T) {
    const I = new Date(T.datetime), K = /* @__PURE__ */ new Date();
    return as(I, K) ? Ze.today : as(I, new Date(K.getTime() + Fi)) ? Ze.tomorrow : cc(I, A);
  }
  const Ft = (A, T, I) => I === 0 ? Dn(A, T) : cc(new Date(T.datetime), A);
  function Xe(A, T) {
    var ze, je, qe, De;
    const I = fh(A, T);
    if (!I) return "";
    const K = vn(), he = G.openDay !== void 0 ? K[G.openDay] : void 0, fe = wa(A, T, "temperature"), ue = K[0], ve = ue && as(new Date(ue.datetime), /* @__PURE__ */ new Date()), we = ((je = (ze = A.config) == null ? void 0 : ze.unit_system) == null ? void 0 : je.temperature) || ((qe = I.attributes) == null ? void 0 : qe.temperature_unit) || "";
    let Ie = '<div class="wbCard wbWeather' + (he ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (he ? " inert" : "") + '><div class="wbNow">' + (v ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Fe(Ze.openPage) + '">' : '<div class="wbCurrent">') + xt(I.state, 90, hh(A), "now") + '<div class="wbTempBlock">' + (fe && En(fe.value) ? '<div class="wbTemp"><span class="wbDeg">' + Fe(gn(Math.round(Number(fe.value)), A.locale)) + '</span><span class="wbUnit">' + Fe(we) + "</span></div>" : "") + '<div class="wbPlace">' + Fe(((De = A.config) == null ? void 0 : De.location_name) ?? "") + "</div></div>" + (v ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Fe(el(A, I)) + "</div>" + (ve && ue.templow != null ? '<div class="wbRange">' + Fe(Yn(Ze.range, { high: Zn(A, ue.temperature), low: Zn(A, ue.templow) })) + "</div>" : "") + "</div></div>";
    return K.length && (Ie += '<div class="wbColumns" role="list">' + K.map((Ke, Pe) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Pe + '" data-wb-focus="col-' + Pe + '"><span class="wbDay">' + Fe(Ft(A, Ke, Pe)) + "</span>" + xt(Ke.condition ?? "cloudy", 60, !1, "col" + Pe) + '<span class="wbTemps"><span class="wbHi">' + Fe(Zn(A, Ke.temperature)) + '</span><span class="wbLo">' + Fe(Zn(A, Ke.templow)) + "</span></span></button>").join("") + "</div>", Ie += '<div class="wbHalves" role="list">' + K.map((Ke, Pe) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Pe + '" data-wb-focus="half-' + Pe + '">' + xt(Ke.condition ?? "cloudy", 40, !1, "half" + Pe) + '<span class="wbText"><span class="wbName">' + Fe(Dn(A, Ke)) + '</span><span class="wbSub">' + Fe(Yn(Ze.highLow, { high: Zn(A, Ke.temperature), low: Zn(A, Ke.templow) })) + "</span></span></button>").join("") + "</div>"), Ie + "</div>" + (he ? bn(A, T, he) : "") + "</div>";
  }
  function St(A) {
    const T = A.getTime(), I = Date.now() - io;
    return b("hourly").filter((K) => {
      const he = new Date(K.datetime).getTime();
      return he >= T && he < T + Fi && he > I;
    });
  }
  function Je(A) {
    if (!A.length) return ["temperature"];
    const T = ["temperature"];
    return A.some((I) => I.precipitation != null || I.precipitation_probability != null) && T.push("precipitation"), A.some((I) => I.humidity != null) && T.push("humidity"), T;
  }
  function bn(A, T, I) {
    const K = wr(new Date(I.datetime)), he = St(K), fe = Je(he), ue = fe.includes(G.dayMode) ? G.dayMode : "temperature", ve = (we) => we === "humidity" ? Ze.humidity : Ze.modes[we];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + xt(I.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Fe(Dn(A, I)) + '</span><span class="wbSub">' + Fe(Yn(Ze.highLow, { high: Zn(A, I.temperature), low: Zn(A, I.templow) })) + '</span></div><button class="wbBack" title="' + Fe(Ze.back) + '" data-wb="close-day" data-wb-focus="back-day">' + br($n.back) + "</button></div>" + (fe.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + fe.map((we) => '<button aria-pressed="' + (we === ue) + '" data-wb="day-mode" data-mode="' + we + '" data-wb-focus="day-mode-' + we + '">' + Fe(ve(we)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Ch(Cn(A, T, K, he, ue)) + "</div></div>";
  }
  function Cn(A, T, I, K, he) {
    var hi;
    const fe = I.getTime(), ue = Date.now(), ve = as(I, /* @__PURE__ */ new Date()), we = (gt) => (gt - fe) / so, Ie = (gt) => mr(new Date(gt), A), ze = (gt) => new Date(gt.datetime).getTime(), je = [0, 3, 6, 9, 12, 15, 18, 21].map((gt) => ({ t: gt * 60, label: Ie(fe + gt * io), minor: gt % 6 !== 0 })), { rise: qe, set: De } = pc(A, I), Ke = [], Pe = [];
    qe && (Ke.push({ t: we(qe.getTime()), label: Ie(qe.getTime()), rise: !0 }), Pe.push([0, we(qe.getTime())])), De && (Ke.push({ t: we(De.getTime()), label: Ie(De.getTime()), rise: !1 }), Pe.push([we(De.getTime()), is]));
    const at = ul(A);
    !qe && !De && at && Md(new Date(fe + Fi / 2), at.lat, at.lon) < 0 && Pe.push([0, is]);
    const ft = ve ? we(ue) : void 0, It = { hours: je, sun: Ke, night: Pe };
    if (!K.length && !ve) return { ...It, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ze.noHourly };
    if (he === "precipitation") {
      const gt = K.some((en) => en.precipitation_probability != null), Nn = K.map((en) => ({ t: we(ze(en)), v: Number((gt ? en.precipitation_probability : en.precipitation) ?? 0) })), oa = vr(A, be(A, "hourly"), "precipitation"), go = Math.max(0, ...Nn.map((en) => en.v)), Ya = gt ? 100 : gc(0, Math.max(go, 1), [0.5, 1, 2, 5, 10]).max, Za = (en) => gt ? gn(en, A.locale) + "%" : gn(en, A.locale, { maximumFractionDigits: 1 }) + " " + oa, At = Nn.find((en) => en.v === go);
      return {
        ...It,
        kind: "bars",
        points: Nn,
        min: 0,
        max: Ya,
        ticks: [0, Ya / 2, Ya],
        format: Za,
        now: ft !== void 0 ? { t: ft, v: 0 } : void 0,
        peak: At && go > 0 ? { t: At.t + 30, v: At.v, label: Za(At.v) } : void 0,
        note: go > 0 ? void 0 : Ze.noRain
      };
    }
    const Tt = he === "humidity" ? "humidity" : "temperature", Xt = K.filter((gt) => gt[Tt] != null && (!ve || ze(gt) >= ue)).map((gt) => ({ t: we(ze(gt)), v: Number(gt[Tt]) }));
    let Jt, aa = [];
    if (ft !== void 0) {
      const gt = wa(A, T, Tt);
      gt && En(gt.value) && (Jt = { t: ft, v: Number(gt.value) }, Xt.unshift(Jt)), aa = (((hi = Z.todayHistory) == null ? void 0 : hi.day) === I.toDateString() ? Z.todayHistory[Tt] : []).filter((oa) => oa.time <= ue).map((oa) => ({ t: Math.max(0, we(oa.time)), v: oa.value })), Jt && aa.length && aa.push(Jt);
    }
    const Rn = [...aa, ...Xt];
    if (!Rn.length) return { ...It, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ze.noHourly };
    const pi = Rn.map((gt) => gt.v), dn = gc(Math.min(...pi), Math.max(...pi), Tt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    Tt === "humidity" && (dn.min = Math.max(0, dn.min), dn.max = Math.min(100, dn.max), dn.ticks = dn.ticks.filter((gt) => gt >= 0 && gt <= 100));
    const Aa = Tt === "humidity" ? (gt) => gn(gt, A.locale) + "%" : (gt) => Zn(A, gt), mo = Tt === "temperature" ? Rn.reduce((gt, Nn) => Nn.v > gt.v ? Nn : gt) : void 0;
    return { ...It, kind: "line", points: Xt, past: aa, ...dn, format: Aa, now: Jt, peak: mo ? { ...mo, label: Aa(mo.v) } : void 0 };
  }
  function Oi(A) {
    const T = ["temperature"];
    return A.some((I) => I.precipitation_probability != null || I.precipitation != null) && T.push("precipitation"), A.some((I) => I.wind_speed != null) && T.push("wind"), T;
  }
  function st() {
    const A = /* @__PURE__ */ new Date();
    return A.setHours(6, 0, 0, 0), A.getTime() > Date.now() && A.setDate(A.getDate() - 1), A;
  }
  function Ye(A, T) {
    var he, fe;
    const I = b("daily"), K = [];
    for (let ue = 0; ue < Xs; ue++) for (const ve of [!1, !0]) {
      const we = A.getTime() + (ue * 24 + (ve ? 12 : 0)) * io, Ie = we + 12 * io, ze = {};
      T.forEach((qe) => {
        const De = new Date(qe.datetime).getTime();
        qe.condition && De >= we && De < Ie && (ze[qe.condition] = (ze[qe.condition] ?? 0) + (Pp.has(qe.condition) ? 2 : 1));
      });
      let je = (he = Object.entries(ze).sort((qe, De) => De[1] - qe[1])[0]) == null ? void 0 : he[0];
      if (!je) {
        const qe = new Date(we).toDateString();
        je = ((fe = I.find((De) => new Date(De.datetime).toDateString() === qe)) == null ? void 0 : fe.condition) ?? "cloudy";
      }
      K.push({ cond: ve && je === "sunny" ? "clear-night" : je, night: ve });
    }
    return K;
  }
  function ht(A, T, I) {
    const K = be(A, "hourly"), he = T.precipitation_probability != null ? gn(T.precipitation_probability, A.locale) + "%" : "", fe = T.precipitation ? gn(T.precipitation, A.locale) + " " + vr(A, K, "precipitation") : "";
    switch (I) {
      case "precipitation":
        return he ? [he, fe] : [fe || "–", ""];
      case "wind":
        return T.wind_speed != null ? [gn(Math.round(T.wind_speed), A.locale), vr(A, K, "wind_speed")] : ["–", ""];
      default:
        return [Zn(A, T.temperature), (T.precipitation_probability ?? 0) >= 20 ? he : ""];
    }
  }
  function co(A) {
    j = null;
    const T = b("hourly"), I = Math.floor(Date.now() / so) * so, K = T.filter((De) => new Date(De.datetime).getTime() > I - io);
    if (!K.length) return "";
    const he = Oi(K), fe = he.includes(G.hourlyMode) ? G.hourlyMode : "temperature", ue = st(), ve = ue.getTime() + Xs * 24 * io, we = (I - ue.getTime()) / io * Jl, Ie = Xs * 24 * Jl, ze = (De) => (De - I) / io * Jl, je = [{ x: 0, label: Ze.now, entry: K[0] }, ...K.filter((De) => {
      const Ke = new Date(De.datetime);
      return ze(Ke.getTime()) >= 48 && Ke.getTime() < ve && Ke.getHours() % Bp === 0;
    }).map((De) => {
      const Ke = new Date(De.datetime);
      return { x: ze(Ke.getTime()), label: mr(Ke, A), entry: De };
    })], qe = (De, Ke, Pe) => '<span class="wbMark' + (Ke === 0 ? " wbFirst" : "") + '" style="left:' + De.x + 'px">' + Pe + "</span>";
    return j = { segs: Ye(ue, T), seed: ue.getDate() }, '<div class="wbCard wbHc wbHourly"><div class="wbHeader"><h2 class="wbTitle">' + Fe(Ze.nextHours) + "</h2></div>" + (he.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + he.map((De) => '<button aria-pressed="' + (De === fe) + '" data-wb="hourly-mode" data-mode="' + De + '" data-wb-focus="hourly-mode-' + De + '">' + Fe(Ze.modes[De]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll"><div class="wbStrip" style="width:' + (Ie - we) + 'px"><div class="wbRow wbTimes">' + je.map((De, Ke) => qe(De, Ke, Fe(De.label))).join("") + '</div><div class="wbSky"><div class="wbSkyArt" style="left:' + -we + "px;width:" + Ie + 'px"><canvas data-wb-strip' + (c === "smooth" ? "" : ' class="wbPixels"') + '></canvas></div></div><div class="wbRow wbValues">' + je.map((De, Ke) => {
      if (!De.entry) return "";
      const [Pe, at] = ht(A, De.entry, fe);
      return qe(De, Ke, '<span class="wbPrimaryV">' + Fe(Pe) + '</span><span class="wbSecondary">' + Fe(at) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function qi(A) {
    const T = Q, { rise: I, set: K } = pc(A, T), he = I && K ? Math.round((K.getTime() - I.getTime()) / so) : 0, fe = Math.floor(he / 60), ue = he % 60, ve = I && K ? (T.getTime() - I.getTime()) / (K.getTime() - I.getTime()) : -1, we = ve >= 0 && ve <= 1, Ie = Math.PI * (1 - Math.min(1, Math.max(0, ve))), ze = 100 + 74 * Math.cos(Ie), je = 100 - 74 * Math.sin(Ie), qe = we ? Math.sin(Math.PI * ve) : 0, De = we ? os("#2e0a0d", "#43180a", qe) : "#0e0507", Ke = we ? os("#7a1d12", "#8f400f", qe) : "#1c0709", Pe = os("#f60c08", "#ff8f00", qe), at = os("#fd9b07", "#ffd84a", qe), ft = we ? os("#fd9b07", "#ffd84a", qe) : "#6b3a2a", It = (Xt) => Xt ? mr(Xt, A) : "–", Tt = I && K ? new Date((I.getTime() + K.getTime()) / 2) : null;
    return Ro({
      icon: $n.sunny,
      name: Ze.sun,
      sub: he ? Yn(Ze.daylightShort, { hours: fe, minutes: ue }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + De + ", " + Ke + ");--wb-sun-line:" + ft + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + L + 'sun-glow"><stop offset="0" stop-color="' + Pe + '"></stop><stop offset="0.45" stop-color="' + Pe + '"></stop><stop offset="1" stop-color="' + at + '"></stop></radialGradient><clipPath id="' + L + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (we ? '<circle cx="' + ze + '" cy="' + je + '" r="14" fill="url(#' + L + 'sun-glow)" clip-path="url(#' + L + 'above-horizon)"></circle>' : "") + (Tt ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Fe(It(Tt)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Fe(It(I)) + '</text><text class="wbSunTime" x="174" y="117">' + Fe(It(K)) + "</text></svg></div>"
    });
  }
  function ci(A, T, I) {
    const K = (ue) => L + "moon-" + ue, he = A > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + K("terminator") + ')" d="' + Mh(61, 61, 57.9, A) + '"' + (T ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", fe = (ue, ve, we, Ie, ze, je) => '<filter id="' + K(ue) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + ve + '" numOctaves="' + we + '" seed="' + Ie + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((qe) => "<feFunc" + qe + ' type="linear" slope="' + ze + '" intercept="' + je + '"></feFunc' + qe + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + K("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + K("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + K("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + K("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + K("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + fe("mottle", "0.045", 4, 3, 1.8, -0.4) + fe("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + K("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + K("fill") + ')"></circle><g' + (I ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + K("soften") + ')">' + Lh.map(([ue, ve, we, Ie, ze, je]) => '<ellipse cx="' + ue + '" cy="' + ve + '" rx="' + we + '" ry="' + Ie + '" fill-opacity="' + je + '" transform="rotate(' + ze + " " + ue + " " + ve + ')"></ellipse>').join("") + "</g>" + Ah.map(([ue, ve, we]) => '<circle class="wbCrater" cx="' + ue + '" cy="' + ve + '" r="' + we + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + K("glow") + ')">' + _h.map(([ue, ve]) => '<line x1="54.4" y1="95" x2="' + ue + '" y2="' + ve + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + K("glow") + ')">' + vc.map(([ue, ve, we]) => '<circle cx="' + ue + '" cy="' + ve + '" r="' + we * 2 + '"></circle>').join("") + "</g>" + vc.map(([ue, ve, we]) => '<circle class="wbBrightCenter" cx="' + ue + '" cy="' + ve + '" r="' + we + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + K("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + K("grain") + ')"></rect>' + he + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function wn(A) {
    const T = _, I = ul(A), K = (I == null ? void 0 : I.lat) ?? 0, he = uh(T), fe = mc(A), ue = fe ? A.states[fe] : void 0, ve = rs(ue) && jp.includes(ue.state) ? ue.state : ph(he.phase), { rise: we, set: Ie } = I ? ch(T, I.lat, I.lon) : {}, ze = he.phase > 0.5 != K < 0, je = gn(Math.round(he.fraction * 100), A.locale) + "%", qe = we ?? Ie, De = qe ? mr(qe, A) : void 0;
    return Ro({
      icon: $n.night,
      name: Ze.moon,
      sub: Ze.phases[ve],
      visual: '<div class="wbMoonBox">' + ci(he.fraction, ze, K < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (De ? Fe(Yn(we ? Ze.moonriseAt : Ze.moonsetAt, { time: De })) : "") + "</span><span>" + Fe(Yn(Ze.lit, { illumination: je })) + "</span></div>"
    });
  }
  function nt(A, T) {
    var Ke;
    const I = wa(A, T, "wind_speed");
    if (!I || !En(I.value)) return "";
    const K = wa(A, T, "wind_gust_speed"), he = wa(A, T, "wind_bearing"), fe = he && En(he.value) ? Number(he.value) : void 0, ue = wh(Number(I.value), (Ke = I.stateObj.attributes) == null ? void 0 : Ke.wind_speed_unit), ve = sl(A, I.stateObj, "wind_speed", I.value), we = fe !== void 0 ? Ze.cardinal[zp[((fe + 11.25) / 22.5 | 0) % 16]] : void 0, Ie = K ? gh(A, K.stateObj, "wind_gust_speed", K.value) : void 0, ze = [we ? Yn(Ze.windFrom, { direction: we }) : void 0, ue !== void 0 ? ue + " " + Ze.beaufort : void 0].filter(Boolean).join(" · ") || Ie, je = (Pe, at) => {
      const ft = (Pe - 90) * Math.PI / 180;
      return [100 + at * Math.cos(ft), 100 + at * Math.sin(ft)];
    }, qe = Array.from({ length: 36 }, (Pe, at) => at * 10).map((Pe) => {
      const at = Pe % 90 === 0, [ft, It] = je(Pe, 97), [Tt, Xt] = je(Pe, at ? 83 : 89);
      return '<line class="wbTick' + (at ? " wbMajor" : "") + '" x1="' + ft + '" y1="' + It + '" x2="' + Tt + '" y2="' + Xt + '"></line>';
    }).join(""), De = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Pe, at]) => {
      const [ft, It] = je(at, 64);
      return '<text class="wbLetter' + (Pe === "n" ? " wbNorth" : "") + '" x="' + ft + '" y="' + It + '">' + Fe(Ze.cardinal[Pe]) + "</text>";
    }).join("");
    return Ro({ icon: $n.windy, name: Ze.wind, sub: ze, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + qe + De + (fe !== void 0 ? '<path class="wbMarker" transform="rotate(' + fe + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Fe(ve.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Fe(ve.unit) + "</text></svg>" });
  }
  function Vn(A, T) {
    const I = wa(A, T, "uv_index");
    if (!I || !En(I.value)) return "";
    const K = Number(I.value), he = Ze.uvLevel[vh(K)], fe = /* @__PURE__ */ new Date();
    fe.setHours(23, 59, 59, 999);
    const ue = b("hourly").filter((Pe) => Pe.uv_index != null && new Date(Pe.datetime) > /* @__PURE__ */ new Date() && new Date(Pe.datetime) <= fe).reduce((Pe, at) => !Pe || at.uv_index > Pe.uv ? { uv: at.uv_index, time: new Date(at.datetime) } : Pe, void 0), ve = 48, we = 100, Ie = 130, ze = (Pe) => -ve + Math.min(Pe, 11) / 11 * 2 * ve, je = (Pe, at) => {
      const ft = Pe * Math.PI / 180;
      return [we + at * Math.sin(ft), Ie - at * Math.cos(ft)];
    }, qe = (Pe, at, ft) => {
      const [It, Tt] = je(ze(Pe), ft), [Xt, Jt] = je(ze(at), ft);
      return "M " + It + " " + Tt + " A " + ft + " " + ft + " 0 0 1 " + Xt + " " + Jt;
    }, Ke = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, Js.low], [3, 6, Js.moderate], [6, 8, Js.high], [8, 11, Js.very_high]].map(([Pe, at, ft]) => '<path class="wbVuZone" d="' + qe(Pe, at, 96) + '" style="stroke:' + ft + '"></path>').join("") + Array.from({ length: 21 }, (Pe, at) => ({ angle: -ve + at * (2 * ve / 20), major: at % 2 === 0 })).map(({ angle: Pe, major: at }) => {
      const [ft, It] = je(Pe, 102), [Tt, Xt] = je(Pe, at ? 114 : 108);
      return '<line class="wbVuTick' + (at ? " wbMajor" : "") + '" x1="' + ft + '" y1="' + It + '" x2="' + Tt + '" y2="' + Xt + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + ze(K) + 'deg"><line x1="' + we + '" y1="' + Ie + '" x2="' + we + '" y2="' + (Ie - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + Fe(gn(Math.round(K), A.locale)) + "</text></svg>";
    return Ro({
      icon: $n.sunnyAlert,
      name: Ze.metrics.uv_index,
      sub: ue && ue.uv > K ? Yn(Ze.uvPeak, { level: he, uv_index: gn(Math.round(ue.uv), A.locale), time: mr(ue.time, A) }) : he,
      visual: Ke
    });
  }
  function Wi(A) {
    const T = b("daily")[0], I = Z.temperatureHistory;
    if (!T || new Date(T.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !En(T.temperature) || !I || I.dailyHighs.length < Fp) return "";
    const K = Number(T.temperature), he = I.dailyHighs.reduce((Tt, Xt) => Tt + Xt, 0) / I.dailyHighs.length, fe = Math.round(K - he) || 0, ue = fe > 0 ? "above" : fe < 0 ? "below" : "same", ve = [...I.days, { date: /* @__PURE__ */ new Date(), high: K, today: !0 }], we = 220, Ie = 158, ze = 22, je = 20, qe = ve.map((Tt) => Tt.high).concat(he), De = Math.min(...qe) - 3, Ke = Math.max(...qe) + 1, Pe = (Tt) => ze + (1 - (Tt - De) / (Ke - De)) * (Ie - ze - je), at = we / ve.length, ft = Math.min(18, at * 0.6), It = '<svg class="wbCompareBars" viewBox="0 0 ' + we + " " + Ie + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + we + '" y1="' + Pe(he) + '" y2="' + Pe(he) + '"></line>' + ve.map((Tt, Xt) => {
      const Jt = Xt * at + at / 2, aa = Pe(Tt.high), Rn = Tt.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + Rn + '" x="' + (Jt - ft / 2) + '" y="' + aa + '" width="' + ft + '" height="' + (Ie - je - aa) + '" rx="5"></rect><text class="wbAvgValue' + Rn + '" x="' + Jt + '" y="' + (aa - 6) + '">' + Fe(Zn(A, Tt.high)) + '</text><text class="wbAvgDay' + Rn + '" x="' + Jt + '" y="' + (Ie - 4) + '">' + Fe(eh(Tt.date, A)) + "</text>";
    }).join("") + "</svg>";
    return Ro({
      icon: $n.chartLine,
      name: Ze.metrics.compared_to_average,
      double: !0,
      sub: Yn(Ze.highsLastDays, { days: I.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (fe > 0 ? "+" : "") + Fe(Zn(A, fe)) + '</div><div class="wbCompareWords">' + Fe(Ze.average[ue]) + '</div><div class="wbCompareTemps">' + Fe(Yn(Ze.todayVsAverage, { today: Zn(A, K), average: Zn(A, he) })) + "</div></div>" + It + "</div>"
    });
  }
  function mt(A, T) {
    const I = wa(A, T, "humidity");
    if (!I || !En(I.value)) return "";
    const K = wa(A, T, "dew_point"), he = Math.max(0, Math.min(100, Number(I.value)));
    return Ro({
      icon: $n.waterPercent,
      name: Ze.metrics.humidity,
      sub: K && En(K.value) ? Yn(Ze.dewPoint, { dew_point: Zn(A, K.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + he + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + tl(gn(Math.round(Number(I.value)), A.locale), "%") + "</div>"
    });
  }
  function Le(A, T) {
    var Ie, ze;
    const I = wa(A, T, "pressure");
    if (!I || !En(I.value)) return "";
    const K = Number(I.value), he = (Ie = I.stateObj.attributes) == null ? void 0 : Ie.pressure_unit, fe = fc(K, he), ue = ((ze = Z.pressureHistory) == null ? void 0 : ze.entityId) === I.stateObj.entity_id ? fc(Z.pressureHistory.value, he) : void 0;
    let ve;
    if (fe !== void 0 && ue !== void 0) {
      const je = fe - ue;
      ve = je >= ic ? "rising" : je <= -ic ? "falling" : "steady";
    }
    const we = sl(A, I.stateObj, "pressure", Math.round(K));
    return Ro({
      icon: $n.gauge,
      name: Ze.metrics.pressure,
      sub: ve ? Ze.pressure[ve] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + tl(we.number) + '<span class="wbTapeUnit">' + Fe(we.unit) + "</span></div>" + (fe !== void 0 ? lt(A, fe) : "") + "</div>"
    });
  }
  function lt(A, T) {
    const he = Math.floor(T) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (fe, ue) => he + ue).map((fe) => {
      const ue = 100 - (fe - T) * 9;
      if (ue < 22 || ue > 178) return "";
      const ve = fe % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(ue - 100) / 100) + '"><line class="wbTapeTick" x1="' + (ve ? 2 : 8) + '" x2="26" y1="' + ue + '" y2="' + ue + '"></line>' + (ve ? '<text class="wbTapeLabel" x="33" y="' + ue + '">' + Fe(gn(fe, A.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Fe(Ze.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Fe(Ze.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function vt(A) {
    var we, Ie;
    const T = ed(A), I = T ? A.states[T] : void 0;
    if (!I || ((we = Z.rain) == null ? void 0 : we.entityId) !== T || !En(Z.rain.change)) return "";
    const K = ((Ie = I.attributes) == null ? void 0 : Ie.unit_of_measurement) ?? "", he = be(A, "hourly"), fe = Date.now() + Fi, ue = b("hourly").filter((ze) => ze.precipitation != null && new Date(ze.datetime).getTime() <= fe), ve = ue.reduce((ze, je) => ze + Number(je.precipitation), 0);
    return Ro({
      icon: $n.rainy,
      name: Ze.metrics.precipitation,
      sub: he && ue.length ? Yn(Ze.rainExpected, { amount: gn(ve, A.locale, { maximumFractionDigits: 1 }) + " " + vr(A, he, "precipitation") }) : Ze.rainLast24h,
      visual: tl(gn(Z.rain.change, A.locale, { maximumFractionDigits: 1 }), K) + (ue.length > 1 ? Th(ue.map((ze) => ({ label: "", value: Number(ze.precipitation) }))) : "")
    });
  }
  function He(A, T) {
    const I = wa(A, T, "visibility");
    if (!I || !En(I.value)) return "";
    const K = sl(A, I.stateObj, "visibility", I.value), he = Ep(Number(I.value), vr(A, I.stateObj, "visibility"));
    return Ro({
      icon: $n.eyeOutline,
      name: Ze.metrics.visibility,
      sub: Ze.visibilityLevel[Dp(he)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + he + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Fe(uo(A, he)) + '</div><div class="wbSeaValue">' + tl(K.number, K.unit) + "</div></div>"
    });
  }
  function uo(A, T) {
    var fe;
    const I = _p((fe = A.config) == null ? void 0 : fe.country, T);
    if (I) return Yn(Ze.visibilityLandmarks, { from: I.from, to: I.to });
    const K = T / Wp * 60;
    if (K < 60) {
      const ue = K < 5 ? Math.max(1, Math.round(K)) : 5 * Math.round(K / 5);
      if (ue < 60) return Yn(Ze.walkMinutes, { minutes: gn(ue, A.locale) });
    }
    const he = Math.max(1, Math.round(K / 30) / 2);
    return he < 8 ? Yn(Ze.walkHours, { hours: gn(he, A.locale) }) : Ze.walkDay;
  }
  function Ho(A) {
    Z.categories === void 0 && me(A);
    const T = tt(A), I = (we) => we.map((Ie) => A.states[Ie]).filter(rs), K = I(T.air), he = I(T.pollen);
    if (!K.length && !he.length) return "";
    const fe = [...K, ...he], ue = (we) => he.includes(we) ? $n.flower : $n.airFilter, ve = fe.find((we) => we.entity_id === G.aq);
    return ve ? Vi(A, ve, ue(ve)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Fe(Ze.airQuality) + '</h2></div><div class="wbAqTiles">' + fe.map((we) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Fe(we.entity_id) + '"><span class="wbChip">' + br(ue(we)) + '</span><span class="wbText"><span class="wbName">' + Fe(hc(A, we)) + '</span><span class="wbSub">' + Fe(el(A, we)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Vi(A, T, I) {
    var ze, je, qe;
    const K = ((ze = T.attributes) == null ? void 0 : ze.unit_of_measurement) ?? "", he = ((je = T.attributes) == null ? void 0 : je.device_class) === "pm25" && K === rc && En(T.state), fe = Number(T.state), ue = he ? bh(fe) : void 0, ve = ((qe = Z.aqHistory) == null ? void 0 : qe.entityId) === T.entity_id ? Z.aqHistory.points : void 0, we = (De) => Math.min(100, Math.max(0, De / Qs * 100));
    let Ie;
    if (ve && ve.length > 1) Ie = Sh(ve, (De) => (gn(De, A.locale, { maximumFractionDigits: 1 }) + " " + K).trim());
    else if (ue) {
      let De = 0;
      const Ke = Qc.map(([Pe, at]) => {
        const ft = we(Math.min(at, Qs)), It = Gp[Pe] + " " + De + "% " + ft + "%";
        return De = ft, It;
      });
      Ie = '<div class="wbScale" role="meter" aria-label="' + Fe(Ze.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Qs + '" aria-valuenow="' + fe + '" style="background:linear-gradient(to right, ' + Ke.join(", ") + ')"><i style="left:' + we(fe) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Qs + " " + rc + "</span></div>";
    } else Ie = '<span class="wbGraphNote"><span>' + Fe(el(A, T)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + br(I) + '</span><span class="wbText"><span class="wbName">' + Fe(hc(A, T)) + '</span><span class="wbSub">' + Fe(el(A, T)) + (ue ? " · " + Fe(Ze.aqLevel[ue]) : "") + '</span></span><button class="wbBack" title="' + Fe(Ze.back) + '" data-wb="aq-close">' + br($n.back) + '</button></div><div class="wbGraph">' + Ie + "</div></div></div>";
  }
  const Be = {
    current: Xe,
    hourly: co,
    sun: qi,
    moon: wn,
    wind: nt,
    uv_index: Vn,
    compared_to_average: Wi,
    humidity: mt,
    pressure: Le,
    precipitation: vt,
    visibility: He,
    air_quality: Ho
  };
  function Ve(A) {
    var Ie, ze, je, qe;
    const T = l == null ? void 0 : l();
    if (!T || q) return;
    const I = We(T);
    k(T, I), Z.lastFetch || V();
    const K = tt(T), he = mc(T), fe = ed(T), ue = [
      ...I.map((De) => T.states[De]),
      T.states["sun.sun"],
      he && T.states[he],
      fe && T.states[fe],
      ...K.air.map((De) => T.states[De]),
      ...K.pollen.map((De) => T.states[De]),
      T.locale,
      T.config,
      T.entities,
      Math.floor(Date.now() / so)
    ];
    if (!A && $ && ue.length === $.length && ue.every((De, Ke) => De === $[Ke])) return;
    $ = ue;
    const ve = w.getRootNode(), we = ve.activeElement || document.activeElement;
    for (const De of re) {
      const Ke = F[De];
      let Pe = "";
      try {
        Pe = Be[De](T, I) || "";
      } catch {
        Pe = "";
      }
      if (Pe === Ke.html) continue;
      const at = we && Ke.el.contains(we) ? (Ie = we.dataset) == null ? void 0 : Ie.wbFocus : void 0, ft = Ke.el.querySelector(".wbStripScroll"), It = ft ? ft.scrollLeft : 0;
      Ke.html = Pe, Ke.el.hidden = !Pe, Ke.el.innerHTML = Pe, It && ((ze = Ke.el.querySelector(".wbStripScroll")) == null || ze.scrollTo({ left: It })), at && !X && ((je = Ke.el.querySelector('[data-wb-focus="' + at + '"]')) == null || je.focus());
    }
    X && ((qe = w.querySelector('[data-wb-focus="' + X + '"]')) == null || qe.focus(), X = null), Rt(performance.now());
  }
  function Gt() {
    W || q || (W = !0, queueMicrotask(() => {
      W = !1, Ve(!0);
    }));
  }
  function zn() {
    const A = getComputedStyle(w), T = (ue) => A.getPropertyValue(ue).trim(), I = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([ue, ve]) => {
      T(ve) && (I[ue] = T(ve));
    });
    const K = T("--color-text-primary") || "#f1f1f1", he = T("--color-bg-card") || "#222222", fe = !!w.closest(".light");
    return { colors: { ...ea, ...I }, ink: fe ? K : he, paper: fe ? he : K };
  }
  const kn = (A, T) => {
    var I;
    A.width !== T.w && (A.width = T.w), A.height !== T.h && (A.height = T.h), (I = A.getContext("2d")) == null || I.putImageData(new ImageData(T.data, T.w, T.h), 0, 0);
  }, kt = () => m && !Xp();
  function po(A, T) {
    const I = w.querySelector("canvas[data-wb-strip]");
    if (!I || !j || !I.getClientRects().length) return;
    const K = I.clientWidth, he = I.clientHeight;
    if (!K || !he) return;
    const fe = { width: K, height: he, columns: Xs, colors: T.colors, clock: A, ambient: kt(), seed: j.seed };
    if (c === "smooth") {
      const ue = Math.min(2, window.devicePixelRatio || 1), ve = Math.round(K * ue), we = Math.round(he * ue);
      I.width !== ve && (I.width = ve), I.height !== we && (I.height = we);
      const Ie = I.getContext("2d");
      if (!Ie) return;
      Ie.setTransform(ue, 0, 0, ue, 0, 0), pp(Ie, j.segs, fe);
    } else kn(I, up(j.segs, { ...fe, px: 2, oneBit: c === "onebit", ink: T.ink, paper: T.paper }));
  }
  function Rt(A) {
    if (q) return;
    const T = zn();
    if (c !== "smooth") {
      const I = kt();
      w.querySelectorAll("canvas[data-wb-wx]").forEach((K) => {
        K.getClientRects().length && kn(K, Wc(hd(K.dataset.wbWx, T.colors), { size: Number(K.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: T.colors, ink: T.ink, paper: T.paper, clock: A, idle: I }));
      });
    }
    w.querySelectorAll("canvas[data-wb-sea]").forEach((I) => {
      const K = I.clientWidth, he = I.clientHeight, fe = Number(I.dataset.wbSea), ue = K + "x" + he + ":" + fe + ":" + T.colors.skyClearDay;
      !K || !he || !(fe > 0) || I.dataset.painted === ue || (I.dataset.painted = ue, kn(I, Tp(K, he, fe, T.colors)));
    }), po(A, T);
  }
  function ta(A) {
    if (te = 0, !(q || !kt())) {
      if (!document.hidden)
        if (c === "smooth") po(A, zn());
        else {
          const T = Math.floor(A / 100);
          T !== U && (U = T, Rt(A));
        }
      te = requestAnimationFrame(ta);
    }
  }
  function ho() {
    w.classList.toggle("wbMotion", kt()), !te && !q && kt() && (te = requestAnimationFrame(ta));
  }
  function Ut(A) {
    var I, K;
    const T = (K = (I = A.target).closest) == null ? void 0 : K.call(I, "[data-wb]");
    if (!(!T || !w.contains(T))) {
      switch (T.dataset.wb) {
        case "day": {
          G.openDay = Number(T.dataset.index), G.opener = T.dataset.wbFocus, X = "back-day";
          const he = vn()[G.openDay], fe = !Z.todayHistory || Z.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Z.todayHistory.fetched > Np;
          he && as(new Date(he.datetime), /* @__PURE__ */ new Date()) && fe && ae();
          break;
        }
        case "close-day":
          G.openDay = void 0, X = G.opener, G.opener = void 0;
          break;
        case "open-page":
          v == null || v();
          return;
        case "day-mode":
          G.dayMode = T.dataset.mode;
          break;
        case "hourly-mode":
          G.hourlyMode = T.dataset.mode;
          break;
        case "aq-open":
          G.aq = T.dataset.entity, le(G.aq);
          break;
        case "aq-close":
          G.aq = void 0;
          break;
        default:
          return;
      }
      Ve(!0);
    }
  }
  function $t(A) {
    var T, I;
    A.key === "Escape" && G.openDay !== void 0 && ((I = (T = A.target).closest) != null && I.call(T, '[data-wb-open="day"]')) && (G.openDay = void 0, X = G.opener, G.opener = void 0, Ve(!0));
  }
  let Qt = null;
  function Yt(A) {
    var I, K;
    const T = (K = (I = A.target).closest) == null ? void 0 : K.call(I, ".wbStripScroll");
    !T || A.button !== 0 || (Qt = { startX: A.pageX, left: T.scrollLeft, moved: !1 }, window.addEventListener("mousemove", na), window.addEventListener("mouseup", bt, { once: !0 }));
  }
  function na(A) {
    const T = w.querySelector(".wbStripScroll");
    if (!Qt || !T) return;
    const I = A.pageX - Qt.startX;
    !Qt.moved && Math.abs(I) > 1 && (Qt.moved = !0, T.classList.add("wbDragging")), T.scrollLeft = Qt.left - I;
  }
  function bt() {
    var A;
    Qt = null, window.removeEventListener("mousemove", na), (A = w.querySelector(".wbStripScroll")) == null || A.classList.remove("wbDragging");
  }
  w.addEventListener("click", Ut), w.addEventListener("keydown", $t), w.addEventListener("mousedown", Yt);
  const ha = typeof ResizeObserver == "function" ? new ResizeObserver(() => Rt(performance.now())) : null;
  ha == null || ha.observe(w);
  const nn = (Ua = window.matchMedia) == null ? void 0 : Ua.call(window, "(prefers-reduced-motion: reduce)"), Ga = () => {
    ho(), Rt(performance.now());
  };
  (fo = nn == null ? void 0 : nn.addEventListener) == null || fo.call(nn, "change", Ga);
  const ui = [
    setInterval(() => {
      Q = /* @__PURE__ */ new Date(), Ve(!0);
    }, Op),
    setInterval(() => {
      _ = /* @__PURE__ */ new Date(), Ve(!0);
    }, qp),
    setInterval(V, Ip)
  ];
  return Ve(!0), ho(), {
    update() {
      Ve(!1);
    },
    setStyle(A) {
      !A || A === c || (c = A, Ve(!0), ho());
    },
    destroy() {
      var A;
      q = !0, ui.forEach(clearInterval), te && cancelAnimationFrame(te), te = 0, ha == null || ha.disconnect(), (A = nn == null ? void 0 : nn.removeEventListener) == null || A.call(nn, "change", Ga), bt(), w.removeEventListener("click", Ut), w.removeEventListener("keydown", $t), w.removeEventListener("mousedown", Yt), ["daily", "hourly"].forEach(Ce), w.remove();
    }
  };
}
const ss = "#E1E1E1", wc = "#F7F4F0", td = "#03a9f4", yt = 14, Ct = 172;
let Dh = 0;
const zt = (a) => Math.round(a * 100) / 100, lo = (a, l, o) => Math.max(l, Math.min(o, a)), Io = (a, l, o, c, m, g) => '<rect x="' + zt(a) + '" y="' + zt(l) + '" width="' + zt(o) + '" height="' + zt(c) + '" fill="' + m + '"' + (g != null ? ' opacity="' + g + '"' : "") + "/>", nd = (a) => a.map((l, o) => (o ? "L" : "M") + zt(l[0]) + " " + zt(l[1])).join("");
function ad(a) {
  const l = (a == null ? void 0 : a.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const si = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function Rh(a) {
  const l = a < 2 ? a + 24 : a;
  let o = si[0], c = si[si.length - 1];
  for (let L = 0; L < si.length - 1; L++) if (l >= si[L][0] && l <= si[L + 1][0]) {
    o = si[L], c = si[L + 1];
    break;
  }
  const m = (l - o[0]) / (c[0] - o[0]), g = m * m * (3 - 2 * m), v = (L, w) => {
    const P = parseInt(L.slice(1), 16), re = parseInt(w.slice(1), 16);
    return "#" + [16, 8, 0].map((ne) => Math.round((P >> ne & 255) + ((re >> ne & 255) - (P >> ne & 255)) * g).toString(16).padStart(2, "0")).join("");
  };
  return { top: v(o[1][0], c[1][0]), bot: v(o[1][1], c[1][1]), warm: v(o[1][2], c[1][2]), cool: v(o[1][3], c[1][3]), op: o[1][4] + (c[1][4] - o[1][4]) * g, t: l };
}
function Nh(a) {
  const l = parseInt(a.slice(1), 16), o = (l >> 16 & 255) / 255, c = (l >> 8 & 255) / 255, m = (l & 255) / 255, g = Math.max(o, c, m), v = Math.min(o, c, m);
  let L = 0, w = 0;
  const P = (g + v) / 2;
  if (g !== v) {
    const re = g - v;
    w = P > 0.5 ? re / (2 - g - v) : re / (g + v), L = (g === o ? (c - m) / re + (c < m ? 6 : 0) : g === c ? (m - o) / re + 2 : (o - c) / re + 4) / 6;
  }
  return [L * 360, w * 100, P * 100];
}
function uu(a, l, o) {
  l = lo(l, 0, 100) / 100, o = lo(o, 0, 100) / 100;
  const c = (v) => (v + a / 30) % 12, m = l * Math.min(o, 1 - o), g = (v) => o - m * Math.max(-1, Math.min(c(v) - 3, Math.min(9 - c(v), 1)));
  return "#" + [g(0), g(8), g(4)].map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("");
}
const [pu, hu, fu] = Nh(ss), xc = uu(pu, hu, Math.max(6, fu - 14)), Bh = uu(pu, hu, Math.min(96, fu + 16));
function Ph(a, l, o, c, m) {
  const g = Ct / 2, v = Ct * 0.12, L = g - (g - v) * a, w = ($) => $ ** 1.3, P = lo(o, -1.5, 1.5), re = ($) => -(Math.abs(P) * 4.6 * $ ** 1.5) * Math.sign(P), ne = a * 1.4, F = ($, te) => {
    const U = Math.min(4.8, Math.abs(o) * 2.6) * (te ? 1 : -1) * Math.sign(o || 1), W = te ? $ + L : $, X = te ? $ : $ + L, G = (Te) => W + re(Te) + U * Math.sin(Te * Math.PI * 1.2 + c) * w(Te) * 1.4 + ne * Math.sin(Te * Math.PI * 2 + c * 0.6) * w(Te) * (te ? 1 : -1), Z = [[X, yt]];
    for (let Te = 0; Te <= 12; Te++) Z.push([G(Te / 12), yt + Ct * Te / 12]);
    Z.push([X, yt + Ct]);
    let Q = '<path d="' + nd(Z) + 'Z" fill="' + ss + '"/>';
    if (m) return Q;
    const _ = 1.35 + ((te ? o > 0 : o < 0) ? 0.35 : 0), j = (Te) => {
      const b = Te / 7, be = te ? 1 - b : b, Ce = (1 - be) ** 1.3, Oe = $ + L * b;
      return Array.from({ length: 13 }, (k, E) => {
        const C = E / 12;
        return [Oe + re(C) * Ce + U * _ * Math.sin(C * Math.PI * 1.2 + c - be * 3.2) * w(C) * 1.4 * Ce + ne * 1.6 * Math.sin(C * Math.PI * 2 + c * 0.6 - be * 2.5) * w(C) * a * (0.4 + 0.6 * Ce), yt + Ct * C];
      });
    }, ge = [1, 2, 3, 4, 5, 6].map(j);
    for (let Te = 0; Te < 6; Te += 2) Q += '<path d="' + nd(ge[Te]) + nd(ge[Te + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return Q;
  }, q = g - (g - v) * l;
  return { body: F(yt, !0) + F(yt + Ct - L, !1), rails: [{ x: yt + q - 4, y: yt, w: 4, h: Ct }, { x: yt + Ct - q, y: yt, w: 4, h: Ct }], head: 6.4 };
}
function Ih(a, l, o) {
  const c = Ct * (1 - a);
  let m = "";
  if (c > 1 && (m += Io(yt, yt, Ct, c, ss), !o))
    for (let g = 1; g < 7; g += 2) m += Io(yt + Ct * g / 7, yt, Ct / 7, c, "#fff");
  return { body: m, rails: [{ x: yt, y: yt + Ct * (1 - l) - 7, w: Ct, h: 11 }], head: 10.4 };
}
function Hh(a, l, o, c) {
  const m = 9 - 7 * (o / 100), g = yt + Ct * (1 - a), v = Math.ceil(Ct / 10) + 1, L = yt + m / 2, w = (yt + Ct - m / 2 - L) / (v - 1), P = 0.8, re = 0.6, ne = Array.from({ length: v }, ($, te) => Math.max(L + te * re, Math.min(L + te * w, g - m / 2 - (v - 1 - te) * re))), F = ne.slice(0, -1).map(($, te) => lo((ne[te + 1] - $ - re) / (w - re), 0, 1));
  F.push(F[v - 2]);
  let q = "";
  return ne.forEach(($, te) => {
    const U = P + (m - P) * F[te], W = Math.max(0.5, U / 2), X = Math.max(0.4, U * 0.114);
    q += Io(yt, $ - W, Ct, Math.max(1, U), ss), !c && U > 2.2 && (q += Io(yt, $ + W - X, Ct, X, xc) + Io(yt, $ - W, Ct, X * 0.55, Bh, 0.75));
  }), c || [0.22, 0.78].forEach(($) => {
    q += Io(yt + Ct * $ - 0.7, yt, 1.4, Math.max(0, ne[v - 1] + 1 - yt), xc, 0.85);
  }), { body: q, rails: [{ x: yt, y: yt + Ct * (1 - l) - 8, w: Ct, h: 8 }], head: 8.8 };
}
const yc = (a, l, o, c, m, g, v) => a === "curtain" ? Ph(l, o, m, g, v) : a === "venetian" ? Hh(l, o, c, v) : Ih(l, o, v);
function Fh(a, l) {
  let o = "", c = "";
  return l.forEach((m) => {
    const g = m.w > m.h, v = lo(g ? yt + Ct / 2 : m.x + m.w / 2, 17, 183), L = lo(g ? m.y + m.h / 2 : yt + Ct / 2, 17, 183);
    o += g ? Io(yt, lo(m.y + m.h / 2, yt, yt + Ct) - 1, Ct, 2, td) : Io(lo(m.x + m.w / 2, yt, yt + Ct) - 1, yt, 2, Ct, td);
    const w = g ? "M" + zt(v - 4) + " " + zt(L - 3) + "l4 -3l4 3M" + zt(v - 4) + " " + zt(L + 3) + "l4 3l4 -3" : "M" + zt(v - 3) + " " + zt(L - 4) + "l-3 4l3 4M" + zt(v + 3) + " " + zt(L - 4) + "l3 4l-3 4";
    c += '<circle cx="' + zt(v) + '" cy="' + zt(L) + '" r="11" fill="' + td + '" filter="url(#' + a + 's)"/><path d="' + w + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: c };
}
function Oh(a, l) {
  const o = /* @__PURE__ */ new Date(), c = Rh(o.getHours() + o.getMinutes() / 60), m = 42 + 18 * Math.sin(c.t * 0.5), g = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, v = yc(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), L = l.ghostAlpha > 4e-3 && l.ghost != null ? yc(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", w = l.grip > 4e-3 ? Fh(a, v.rails) : null, P = (re) => Io(yt, yt, Ct, Ct, re);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + a + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + a + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + a + 'w" cx="' + zt(m) + '%" cy="' + zt(g) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + zt(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + a + 'k" cx="' + zt(100 - m * 0.8) + '%" cy="' + zt(100 - g * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + zt(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + a + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + wc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + a + 'c)">' + P("url(#" + a + "l)") + P("url(#" + a + "w)") + P("url(#" + a + "k)") + (L ? '<g opacity="' + zt(l.ghostAlpha) + '">' + L + "</g>" : "") + v.body + '<rect x="14" y="14" width="172" height="' + v.head + '" fill="' + ss + '" filter="url(#' + a + 's)"/></g>' + (w ? '<g clip-path="url(#' + a + 'c)" opacity="' + zt(l.grip) + '">' + w.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + wc + '" stroke-width="3"/>' + (w ? '<g opacity="' + zt(l.grip) + '">' + w.knobs + "</g>" : "") + "</svg>";
}
function qh({ onMove: a, onSet: l }) {
  var Q;
  const o = "cv" + ++Dh, c = document.createElement("div");
  c.className = "tfCoverArt";
  const m = (Q = window.matchMedia) == null ? void 0 : Q.call(window, "(pointer: coarse)").matches;
  let g = null;
  const v = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let L = 0, w = !1, P = !1, re = null, ne = 0, F = 0;
  const q = () => (g == null ? void 0 : g.kind) === "curtain" ? "x" : "y", $ = () => re || w || P || g.moving || g.target != null ? 1 : m ? performance.now() < F ? 1 : 0.4 : 0, te = () => {
    c.innerHTML = Oh(o, { kind: g.kind, pos: v.pos, bar: g.target ?? v.pos, tilt: v.tilt, vel: v.vel, ph: v.ph, ghost: v.gpos, ghostAlpha: v.ghost, grip: v.grip });
  };
  function U(_) {
    L = 0;
    const j = v.last ? Math.min(0.064, (_ - v.last) / 1e3) : 1 / 60, ge = j * 60;
    v.last = _;
    const Te = g.pos - v.pos, b = v.pos;
    v.pos += Math.sign(Te) * Math.min(Math.abs(Te), Math.max(10.5, Math.abs(Te) * 1.4) * j), Math.abs(g.pos - v.pos) < 0.03 && (v.pos = g.pos), v.vel = v.vel * 0.86 + (v.pos - b) / ge * 0.14, Math.abs(v.vel) < 0.015 && v.pos === g.pos && (v.vel = 0), (v.pos !== b || v.vel) && (v.ph += (0.06 + Math.abs(v.vel) * 0.03) * ge);
    const be = g.tilt - v.tilt;
    v.tilt += Math.sign(be) * Math.min(Math.abs(be), Math.max(60, Math.abs(be) * 4) * j);
    const Ce = $();
    v.grip += (Ce - v.grip) * Math.min(1, j * (Ce > v.grip ? 11 : 3.5)), Math.abs(Ce - v.grip) < 0.01 && (v.grip = Ce);
    const Oe = g.target != null && Math.abs(g.target - v.pos) > 0.5 ? 0.22 : 0;
    g.target != null && (v.gpos = g.target), v.ghost += (Oe - v.ghost) * Math.min(1, j * (Oe > v.ghost ? 16 : 3)), Math.abs(Oe - v.ghost) < 4e-3 && (v.ghost = Oe), te(), v.pos !== g.pos || v.vel || v.tilt !== g.tilt || v.grip !== Ce || v.ghost !== Oe ? L = requestAnimationFrame(U) : v.last = 0;
  }
  const W = () => {
    g && !L && (L = requestAnimationFrame(U));
  }, X = setInterval(() => {
    g && !L && te();
  }, 60 * 1e3), G = (_) => {
    const j = c.getBoundingClientRect();
    return q() === "x" ? (_.clientX - j.left) / j.width : (_.clientY - j.top) / j.height;
  };
  c.addEventListener("pointerdown", (_) => {
    var Te;
    if (!(g != null && g.canSet) || _.button > 0) return;
    _.preventDefault(), (Te = c.setPointerCapture) == null || Te.call(c, _.pointerId);
    const j = g.target ?? g.pos, ge = c.getBoundingClientRect();
    re = { p0: G(_), from: j, x0: _.clientX, value: null, side: null }, g.kind === "curtain" && j > 0 && (re.side = (_.clientX - ge.left) / ge.width < 0.5 ? "L" : "R"), W();
  }), c.addEventListener("pointermove", (_) => {
    if (!re) return;
    let j;
    if (g.kind === "curtain") {
      if (!re.side) {
        const Te = _.clientX - re.x0;
        if (Math.abs(Te) < 4) return;
        re.side = Te < 0 ? "L" : "R";
      }
      const ge = (Ct / 2 - Ct * 0.12) / 200;
      j = re.from + (re.side === "L" ? -1 : 1) * ((G(_) - re.p0) / ge) * 100;
    } else j = re.from - (G(_) - re.p0) / (Ct / 200) * 100;
    re.value = lo(j, 0, 100), a(re.value);
  });
  const Z = () => {
    if (!re) return;
    const _ = re.value;
    re = null, _ != null && l(Math.round(_)), W();
  };
  return c.addEventListener("pointerup", Z), c.addEventListener("pointercancel", Z), c.addEventListener("lostpointercapture", Z), c.addEventListener("pointerenter", () => {
    w = !0, W();
  }), c.addEventListener("pointerleave", () => {
    w = !1, W();
  }), c.addEventListener("focus", () => {
    P = c.matches(":focus-visible"), W();
  }), c.addEventListener("blur", () => {
    P = !1, W();
  }), c.addEventListener("keydown", (_) => {
    if (!(g != null && g.canSet)) return;
    const j = Math.round(g.target ?? g.pos), ge = _.shiftKey ? 10 : 1, Te = { ArrowUp: j + ge, ArrowRight: j + ge, ArrowDown: j - ge, ArrowLeft: j - ge, PageUp: j + 25, PageDown: j - 25, Home: 0, End: 100 }[_.key];
    if (Te == null) return;
    _.preventDefault();
    const b = lo(Te, 0, 100);
    a(b), clearTimeout(ne), ne = setTimeout(() => l(b), 500);
  }), {
    el: c,
    update(_) {
      const j = !g;
      g = _, j && (v.pos = g.pos, v.tilt = g.tilt, F = performance.now() + 1500, m && setTimeout(W, 1600)), c.classList.toggle("x", q() === "x"), c.classList.toggle("y", q() === "y"), g.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(g.target ?? g.pos))), c.setAttribute("aria-orientation", q() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", g.name + (g.canSet ? " position" : "")), c.setAttribute("aria-valuetext", g.text), W();
    },
    destroy() {
      cancelAnimationFrame(L), L = 0, clearInterval(X), clearTimeout(ne), c.remove();
    }
  };
}
const kc = "move-assistant-density", li = {
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
}, ie = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), od = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Mc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Wh = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', nl = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Cc = 1, Vh = 4, Sc = 16, Tc = 32, zh = 128, jh = 256, Lc = 16384, Gh = 1, Uh = 2, Ac = 4, Yh = 8, Zh = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Kh = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, $h = { curtain: "curtains", blind: "blind", venetian: "blinds" }, id = {
  light: { name: "Lights", icon: "mdi:lamps", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, _c = "move_assistant_house", Ec = "move-assistant-house-used", Xh = ["switch", "fan", "input_boolean", "automation"], Dc = "move-assistant-house-look", Jh = [["popup", "Popup"], ["sheet", "Sheet"]], rd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Qh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', ef = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Rc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Nc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', Bc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ta = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + a.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", Pc = Ta(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), tf = Ta(["M20 6L9 17L4 12"]), ro = {
  temp: Ta(["M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"]),
  hum: Ta(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z"]),
  lights: Ta(["M9 18h6", "M10 22h4", "M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2Z"]),
  covers: Ta(["M3 3h18", "M5 3v18c3-4 4-10 4-18", "M19 3v18c-3-4-4-10-4-18"]),
  climate: Ta(["M2 8h20", "M2 19h20", "M5 5v17", "M9.5 5v17", "M14.5 5v17", "M19 5v17"]),
  humidifier: Ta(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z", "M9 15a3 3 0 0 0 3 3"]),
  media: Ta(["M3 6h18v12H3Z", "M8 21h8"]),
  plugs: Ta(["M9 2v6", "M15 2v6", "M6 8h12v4a6 6 0 0 1-12 0Z", "M12 18v4"]),
  alert: Ta(["M12 9v4", "M12 17h.01", "M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"]),
  door: Ta(["M13 4h5v16h-5", "M3 20h18", "M13 4L6 6v14l7 0Z", "M10.5 12h.01"])
}, nf = (a) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (a ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', af = 1, of = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Ic = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, sd = ["hs", "xy", "rgb", "rgbw", "rgbww"], al = ["door", "window", "garage_door", "opening"], Hc = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, ol = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], rf = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], sf = 10, lf = 20, df = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, cf = ["living room", "bedroom", "office"];
function uf(a, { config: l, getHass: o }) {
  var Kr, $r, Xr;
  const c = (e) => a.getElementById(e), m = c("app"), v = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let L = li.get(kc) === "1", w = {};
  const P = (e) => {
    var n;
    return (n = o()) == null ? void 0 : n.callWS(e);
  }, re = (e, n, r) => P({ type: "call_service", domain: e, service: n, service_data: r }), ne = a.querySelector("#appearancePane .toggleList");
  ne && !c("densityToggle") && (ne.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    L = !L, li.set(kc, L ? "1" : "0"), Q();
  }));
  const F = [
    ["weather", "Weather", "The forecast under Home.", (e) => e.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (e) => e.startsWith("sensor.") && mt(e).device_class === "power" && /^(W|kW)$/.test(mt(e).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (e) => e.startsWith("alarm_control_panel.")]
  ], q = (e, n, r, d) => '<div class="themeChoice" id="' + e + '" role="group" aria-label="' + n + '">' + d.map(([p, y]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + r + '="' + p + '">' + y + "</button>").join("") + "</div>", $ = (e, n, r, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + e + "</strong>" + (n ? '<div class="status">' + n + "</div>" : "") + "</div>" + r + "</div>";
  function te() {
    var S, R, H;
    if (!v || c("housePane")) return;
    const e = c("settingsView");
    e.querySelector(".settingsTitle").textContent = "HomeCore";
    const n = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], r = (B, Y) => '<div class="houseTab' + (B === "look" ? " active" : "") + '" data-house-pane="' + B + '"><section class="card">' + Y + "</section></div>";
    e.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + n.map(([B, Y]) => '<button class="tab segBtn' + (B === "look" ? " active" : "") + '" type="button" data-house-tab="' + B + '">' + Y + "</button>").join("") + "</div>" + r("look", '<div class="toggleList" id="houseLook"></div>') + r("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + r("sources", '<div class="toggleList">' + F.map(([B, Y, ye]) => $(Y, ye, '<select class="settingsSelect" data-source="' + B + '" aria-label="' + Y + '"></select>')).join("") + "</div>") + r("sums", '<div class="toggleList">' + Object.entries(id).map(([B, Y]) => $(Y.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + B + '" aria-label="' + Y.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = c("houseLook");
    [(S = e.querySelector(".themeBtn")) == null ? void 0 : S.closest(".toggleRow"), (R = c("densityToggle")) == null ? void 0 : R.closest(".toggleRow"), (H = c("moreInfoChoice")) == null ? void 0 : H.closest(".toggleRow")].forEach((B) => B && d.appendChild(B)), d.insertAdjacentHTML("beforeend", $("Lights", "How lights show on the house page.", q("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + $("Pad", "What the Dual Axis Controller’s pad sets on its tile.", q("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const p = c("housePane"), y = p.querySelector(".houseTabs"), h = y.querySelector(".rubberIndicator"), x = (B) => {
      const Y = y.querySelector(".tab.active");
      h.style.transition = B ? "" : "none", h.style.left = Y.offsetLeft + "px", h.style.width = Y.offsetWidth + "px", B && (h.style.transform = "scaleX(1.08)", setTimeout(() => h.style.transform = "", 180));
    };
    new ResizeObserver(() => x(!1)).observe(y), p.addEventListener("click", (B) => {
      const Y = B.target.closest("[data-house-tab]");
      if (Y) {
        y.querySelectorAll(".tab").forEach((de) => de.classList.toggle("active", de === Y)), p.querySelectorAll(".houseTab").forEach((de) => de.classList.toggle("active", de.dataset.housePane === Y.dataset.houseTab)), Y.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x(!0);
        return;
      }
      const ye = B.target.closest("[data-light-fav]");
      if (ye) {
        gi(ye.dataset.lightFav);
        return;
      }
      const Re = B.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Re || Re.disabled)) {
        if (Re.dataset.lights && (Ft.lights = Re.dataset.lights), Re.dataset.dacPad && (Ft.dacPad = Re.dataset.dacPad), (Re.dataset.lights || Re.dataset.dacPad) && (Xe(), dn.clear()), Re.dataset.sumToggle) {
          const de = Re.dataset.sumToggle, pe = new Set(V.hiddenSums || []);
          pe.has(de) ? pe.delete(de) : pe.add(de), V = { ...V, hiddenSums: [...pe] }, Dn();
        }
        Zt();
      }
    }), p.addEventListener("change", (B) => {
      const Y = B.target;
      Y.dataset.source && (V = { ...V, sources: { ...V.sources || {}, [Y.dataset.source]: Y.value || void 0 } }, Dn());
      const ye = Y.dataset.lightStyle || Y.dataset.lightPad;
      if (ye) {
        const Re = Y.dataset.lightStyle ? "lightStyles" : "lightPads", de = { ...Ft[Re] };
        Y.value ? de[ye] = Y.value : delete de[ye], Ft[Re] = de, Xe(), [...dn.keys()].filter((pe) => pe.endsWith(":" + ye)).forEach((pe) => dn.delete(pe));
      }
      Zt();
    });
  }
  function U() {
    var x, S;
    mo() && pi();
    const e = c("housePane");
    if (!e) return;
    const n = !!customElements.get(Jt);
    e.querySelectorAll("[data-lights]").forEach((R) => R.setAttribute("aria-pressed", String(R.dataset.lights === Ft.lights))), c("lightsRow").querySelector(".status").textContent = n || !mo() ? "How lights show on the house page." : Rn === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", e.querySelectorAll("[data-dac-pad]").forEach((R) => R.setAttribute("aria-pressed", String(R.dataset.dacPad === Ft.dacPad))), c("dacPadRow").hidden = !mo();
    for (const R of e.querySelectorAll("[data-source]")) {
      if (R === a.activeElement) continue;
      const [H] = F.find(([Y]) => Y === R.dataset.source), B = Object.keys(w).filter(F.find(([Y]) => Y === H)[3]).sort((Y, ye) => Le(Y).localeCompare(Le(ye)));
      R.dataset.sig !== B.join(",") && (R.innerHTML = '<option value="">Automatic</option>' + B.map((Y) => '<option value="' + ie(Y) + '">' + ie(Le(Y)) + "</option>").join(""), R.dataset.sig = B.join(",")), R.value = B.includes((x = V.sources) == null ? void 0 : x[H]) ? V.sources[H] : "";
    }
    e.querySelectorAll("[data-sum-toggle]").forEach((R) => {
      const H = !(V.hiddenSums || []).includes(R.dataset.sumToggle);
      R.classList.toggle("on", H), R.setAttribute("aria-checked", String(H));
    });
    const r = c("lightRows"), d = r != null && r.contains(a.activeElement) ? a.activeElement : null;
    if (!r || d != null && d.matches("select")) return;
    const p = new Set(jn()), y = (R, H, B, Y) => '<option value="' + R + '"' + (R === B ? " selected" : "") + ">" + H + "</option>", h = Object.keys(w).filter((R) => R.startsWith("light.")).sort((R, H) => !xt.get(R) - !xt.get(H) || (xt.get(R) || "").localeCompare(xt.get(H) || "") || Le(R).localeCompare(Le(H))).map((R) => {
      const H = Ft.lightStyles[R] || "", B = Ft.lightPads[R] || "", Y = p.has(R), ye = ie(Le(R));
      return "<tr><td><strong>" + ye + "</strong></td><td>" + ie(xt.get(R) || "—") + "</td><td>" + ie(Ut(R)) + '</td><td class="metaSwitchCol"><button class="switch' + (Y ? " on" : "") + '" type="button" role="switch" aria-checked="' + Y + '" data-light-fav="' + ie(R) + '" aria-label="' + ye + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + ie(R) + '" aria-label="' + ye + ' tile">' + y("", "Default", H) + y("tile", "HomeCore tile", H) + y("dac", "Dual Axis Controller", H) + '</select></td><td><select class="settingsSelect" data-light-pad="' + ie(R) + '" aria-label="' + ye + ' pad"' + (Aa(R) ? "" : " disabled") + ">" + y("", "Default", B) + y("temperature", "Temperature", B) + y("colour", "Colour", B) + "</select></td></tr>";
    }).join("");
    r.dataset.html !== h && (r.innerHTML = h, r.dataset.html = h, d != null && d.dataset.lightFav && ((S = r.querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || S.focus({ preventScroll: !0 })));
  }
  const W = document.createElement("div");
  W.className = "densityBadge", W.setAttribute("aria-live", "polite"), W.hidden = !0, m.appendChild(W);
  let X = 0;
  function G() {
    if (!L) return;
    const e = c("homeView"), n = (y) => y.offsetParent !== null && !y.closest("[hidden]");
    e.querySelectorAll(":scope .card, :scope .tfAction").forEach((y) => {
      n(y) && (y.dataset.h = Math.round(y.getBoundingClientRect().height) + " px");
    });
    const r = [...e.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(n), d = window.innerHeight, p = r.filter((y) => {
      const h = y.getBoundingClientRect();
      return h.height > 0 && h.top >= 0 && h.bottom <= d + 0.5;
    }).length;
    W.hidden = !e.classList.contains("active"), W.innerHTML = "<b>" + p + "</b><small>of " + r.length + " readings on screen</small>";
  }
  const Z = () => {
    L && requestAnimationFrame(G);
  };
  function Q() {
    var e;
    m.classList.toggle("showDensity", L), (e = c("densityToggle")) == null || e.classList.toggle("on", L), W.hidden = !L, clearInterval(X), L && (X = setInterval(G, 1e3), G());
  }
  window.addEventListener("scroll", Z, { capture: !0, passive: !0 }), window.addEventListener("resize", Z, { passive: !0 });
  const _ = a.querySelector("#homeView .grid");
  let j = null, ge = null, Te = null, b = null;
  const be = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), k = 350;
  let E = null;
  const C = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map();
  let V = { favourites: null }, ae = {}, le = {}, me = [], We = null;
  const tt = (() => {
    try {
      return JSON.parse(li.get(Ec)) || {};
    } catch {
      return {};
    }
  })();
  let xt = /* @__PURE__ */ new Map(), vn = 0;
  function Dn() {
    clearTimeout(vn), vn = setTimeout(() => Promise.resolve(P({ type: "frontend/set_user_data", key: _c, value: V })).catch(() => {
    }), 400);
  }
  const Ft = (() => {
    let e = {};
    try {
      e = JSON.parse(li.get(Dc)) || {};
    } catch {
    }
    const n = (r, d) => Object.fromEntries(Object.entries(r || {}).filter(([, p]) => d.includes(p)));
    return {
      more: e.more === "sheet" ? "sheet" : "popup",
      lights: e.lights === "dac" ? "dac" : "tile",
      dacPad: e.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: n(e.lightStyles, ["tile", "dac"]),
      lightPads: n(e.lightPads, ["temperature", "colour"])
    };
  })(), Xe = () => li.set(Dc, JSON.stringify(Ft)), St = () => {
    m.dataset.more = Ft.more, ir();
  };
  v && ne && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Jh.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ft.more === e) + '" data-more-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-more-style]");
    n && (Ft.more = n.dataset.moreStyle, Xe(), St(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((r) => r.setAttribute("aria-pressed", String(r === n))));
  })), te();
  let Je = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const bn = /* @__PURE__ */ new Map();
  let Cn = "";
  const Oi = v ? $u({ onChange: () => yn() }) : null;
  v && m.classList.add("house");
  const st = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ye = null, ht = null, co = !1;
  function qi(e) {
    const n = bo();
    if (m.classList.toggle("houseBento", !!n), Ye && (ht !== n || e == null) && (Ye.destroy(), Ye = null), !n || e == null) {
      st.remove();
      return;
    }
    st.isConnected || _.append(st), st.style.order = e, !Ye && !co && (Ye = bc(st, { getHass: o, entityId: n, style: "bitmap" }), ht = n);
  }
  const ci = [["wx", ["current"]], ["avg", ["compared_to_average"]]], wn = Object.fromEntries(ci.map(([e]) => [e, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + e })]));
  let nt = null, Vn = null;
  function Wi(e) {
    const n = bo();
    nt && Vn !== n && (nt.forEach((r) => r.destroy()), nt = null), Object.values(wn).forEach((r) => n ? !r.isConnected && _.append(r) : r.remove()), n && !nt && !co && (nt = ci.map(([r, d]) => bc(wn[r], { getHass: o, entityId: n, style: "bitmap", cards: d, onOpen: r === "wx" ? () => As("weather") : void 0 })), Vn = n);
  }
  const mt = (e) => {
    var n;
    return ((n = w[e]) == null ? void 0 : n.attributes) || {};
  }, Le = (e) => mt(e).friendly_name || e, lt = (e, n) => Ii(e) || (Number(mt(e).supported_features) & n) === n, vt = (e) => {
    const n = String(e ?? "").replace(/_/g, " ");
    return n.charAt(0).toUpperCase() + n.slice(1);
  }, He = (e, n = 1) => Number(e).toLocaleString(void 0, { minimumFractionDigits: n, maximumFractionDigits: n }), uo = (e) => (e == null ? void 0 : e.state) === "on" ? e.attributes.brightness != null ? Math.max(1, Math.round(e.attributes.brightness / 2.55)) : 100 : 0, Ho = (e) => mt(e).supported_color_modes || [], Vi = (e) => {
    const n = e / 100;
    return [n <= 66 ? 255 : 329.7 * Math.pow(n - 60, -0.1332), n <= 66 ? 99.47 * Math.log(n) - 161.12 : 288.12 * Math.pow(n - 60, -0.0755), n >= 66 ? 255 : n <= 19 ? 0 : 138.52 * Math.log(n - 10) - 305.04];
  }, Be = (e, n) => [5, 3, 1].map((r) => {
    const d = (r + e / 60) % 6;
    return 255 * (1 - n / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  });
  function Ve(e) {
    const n = mt(e), r = (n.rgb_color || (n.hs_color && n.color_mode !== "color_temp" ? Be(...n.hs_color) : n.color_temp_kelvin ? Vi(n.color_temp_kelvin) : [255, 170, 0])).map((p) => Math.round(Math.max(0, Math.min(255, p)))), d = (0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]) / 255 > 0.8;
    return "--light:rgb(" + r.join(",") + ");--light-ink:" + (d ? "#26221e" : "#ffffff");
  }
  const Gt = (e) => {
    var n;
    return e.startsWith("light.") && ((n = w[e]) == null ? void 0 : n.state) === "on" ? ' data-light style="' + Ve(e) + '"' : "";
  }, zn = (e) => {
    const n = Ho(e);
    return n.length ? n.some((r) => r !== "onoff") : mt(e).brightness != null;
  }, kn = (e) => [mt(e).min_color_temp_kelvin || 2e3, mt(e).max_color_temp_kelvin || 6500], kt = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function po(e) {
    const n = Math.max(1, Math.round((Date.now() - e) / 1e3));
    if (n < 10) return "Just now";
    if (n < 60) return n + " seconds ago";
    const r = Math.round(n / 60);
    if (r < 60) return r + (r === 1 ? " minute ago" : " minutes ago");
    const d = Math.round(r / 60);
    if (d < 24) return d + (d === 1 ? " hour ago" : " hours ago");
    const p = Math.round(d / 24);
    return p + (p === 1 ? " day ago" : " days ago");
  }
  const Rt = (e) => {
    var n;
    return mt(e).current_position ?? (((n = w[e]) == null ? void 0 : n.state) === "closed" ? 0 : 100);
  }, ta = (e) => {
    var n;
    return vo("pos", e, ((n = C.get(e)) == null ? void 0 : n.pos) ?? Rt(e));
  }, ho = (e) => {
    var n;
    return vo("tilt", e, ((n = C.get(e)) == null ? void 0 : n.tilt) ?? mt(e).current_tilt_position);
  };
  function Ut(e) {
    var h;
    const n = w[e];
    if (!n) return "Not found";
    if (n.state === "unavailable") return "Unavailable";
    const r = n.attributes, d = e.split(".")[0];
    if (d === "light") {
      if (n.state !== "on") return "Off";
      const x = r.color_temp_kelvin;
      return (zn(e) ? uo(n) + "%" : "On") + (r.color_mode === "color_temp" && x ? " · " + Number(x).toLocaleString() + "k" : sd.includes(r.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (n.state === "off" ? "Off" : vt(r.hvac_action || n.state)) + " · " + He(r.current_temperature) + " °C now";
    if (d === "cover") {
      const x = Rt(e), S = r.current_tilt_position;
      return n.state === "opening" || n.state === "closing" ? vt(n.state) + " - " + x + "%" : (x <= 0 ? "Closed" : x >= 100 ? "Open" : "Partially open") + (S > 0 && S < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return n.state !== "on" ? "Off" : vt(r.action || "on") + " · " + r.current_humidity + "% now";
    if (d === "vacuum") return vt(n.state) + (n.state === "cleaning" && ((h = r.rooms) != null && h.length) ? " · " + r.rooms.join(", ") : "") + (r.battery_level != null ? " · " + r.battery_level + "%" : "");
    if (d === "media_player") return n.state === "playing" || n.state === "paused" ? (n.state === "paused" ? "Paused · " : "") + (r.media_title || "Playing") : vt(n.state);
    if (d === "alarm_control_panel") return Ic[n.state] || vt(n.state);
    if (d === "lock" || d === "valve") return vt(n.state);
    if (d === "switch") return n.state === "on" ? "On" : "Off";
    if (d === "plant") return n.state === "ok" ? "Healthy" : vt(r.problem);
    if (d === "binary_sensor")
      return r.device_class === "battery" ? n.state === "on" ? "Low" : "Normal" : r.device_class === "problem" ? n.state === "on" ? "Problem" : "OK" : r.device_class === "moisture" ? n.state === "on" ? "Wet" : "Dry" : al.includes(r.device_class) ? n.state === "on" ? "Open" : "Closed" : n.state === "on" ? "Detected" : "Clear";
    if (r.rang) return "Rang at " + kt(r.rang);
    const p = o();
    if (p != null && p.formatEntityState && !Ii(e))
      try {
        return p.formatEntityState(n);
      } catch {
      }
    const y = Number(n.state);
    if (n.state !== "" && Number.isFinite(y)) {
      const x = Math.abs(y) >= 100 ? 0 : Math.abs(y) >= 10 ? 1 : 2, S = r.unit_of_measurement ? r.unit_of_measurement === "%" ? "%" : " " + r.unit_of_measurement : "";
      return y.toLocaleString(void 0, { maximumFractionDigits: x }) + S + (r.plant_low ? " · Low" : r.plant_high ? " · High" : "");
    }
    return vt(n.state);
  }
  const $t = (e) => e >= 1e3 ? He(e / 1e3, 2) + " kW" : Math.round(e).toLocaleString() + " W";
  function Qt(e) {
    const n = o();
    e.querySelectorAll("[data-icon-for]").forEach((r) => {
      var y;
      const d = w[r.dataset.iconFor], p = r.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && d && !p) {
        let h = r.firstElementChild;
        (!h || h.localName !== "ha-state-icon") && (r.textContent = "", h = document.createElement("ha-state-icon"), r.appendChild(h)), h.hass = n, h.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let h = r.firstElementChild;
        (!h || h.localName !== "ha-icon") && (r.textContent = "", h = document.createElement("ha-icon"), r.appendChild(h)), h.icon = p || ((y = d == null ? void 0 : d.attributes) == null ? void 0 : y.icon) || "mdi:circle-medium";
      } else r.textContent || (r.textContent = (r.dataset.letter || Le(r.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    });
  }
  const Yt = (e, n, r) => ' data-icon-for="' + ie(e) + '"' + (n ? ' data-icon-name="' + ie(n) + '"' : "") + (r ? ' data-letter="' + ie(r) + '"' : ""), na = (e) => e.endsWith("_solar_power") ? "mdi:solar-power-variant" : mt(e).rang ? "mdi:doorbell" : "", bt = (e, n, r, d) => ie([e, n, r, d ? JSON.stringify(d) : ""].join("|")), ha = (e) => ie(JSON.stringify(e));
  function nn(e, n) {
    var p, y;
    const r = ie(Le(n) + ", " + Ut(n));
    return '<div class="activityRow' + (Number.isFinite(Number((p = w[n]) == null ? void 0 : p.state)) && ((y = w[n]) == null ? void 0 : y.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + ie(e + "|" + n) + '" aria-label="' + r + '. Show the last 24 hours"' : '" aria-label="' + r + '"') + '><div class="tfIcon" aria-hidden="true"' + Yt(n, na(n)) + '></div><div><div class="activityRowName">' + ie(Le(n)) + '</div><div class="activityRowMeta">' + ie(Ut(n)) + "</div></div></div>";
  }
  const Ga = (e, n, r) => '<div class="activityRow" aria-label="' + ie(e + ", " + n) + '"><div class="tfIcon" aria-hidden="true"' + Yt("", r, e) + '></div><div><div class="activityRowName">' + ie(e) + '</div><div class="activityRowMeta">' + ie(n) + "</div></div></div>";
  function ui(e) {
    var r;
    const n = ((r = w[e]) == null ? void 0 : r.state) === "on";
    return '<div class="activityRow tfPlug' + (n ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + bt("switch", "toggle", e) + '" aria-label="Turn ' + ie(Le(e)) + (n ? " off" : " on") + '"' + Yt(e) + '></button><div><div class="activityRowName">' + ie(Le(e)) + '</div><div class="activityRowMeta">' + ie(Ut(e)) + "</div></div></div>";
  }
  const Ua = (e) => {
    var n;
    return ((n = Ce.get(e)) == null ? void 0 : n.name) ?? Le(e);
  }, fo = (e) => {
    var n;
    return ((n = Ce.get(e)) == null ? void 0 : n.text) ?? Ut(e);
  };
  function A(e) {
    var r;
    const n = (r = Ce.get(e)) == null ? void 0 : r.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (n ? Yt("", n, Ua(e)) : Yt(e, na(e))) + '></div><div><div class="activityRowName">' + ie(Ua(e)) + '</div><div class="activityRowMeta">' + ie(fo(e)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + ie(Ua(e)) + '’s last 24 hours">' + od + '</button></div><svg class="tfGraph" data-graph="' + ie(e) + '" role="img" aria-label="' + ie(Ua(e)) + ', last 24 hours"></svg></div>';
  }
  function T(e, n, r, d, p = "", y = null, h = "") {
    const x = j && j.key === e;
    return '<section class="card tfCard' + (h ? " " + h : "") + (x ? " open" : "") + '" data-tf data-k="' + ie(e) + '" style="order:' + n + (x && j.h ? ";min-height:" + j.h + "px" : "") + '" aria-label="' + ie(r) + '"><div class="activityHeader">' + (y ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + ie(y) + '" aria-label="' + ie(r + ", " + Ut(y) + ". More info") + '">' + ie(r) + "</button>" : '<div class="activityTitle">' + ie(r) + "</div>") + "</div>" + (x ? A(j.id) : '<div class="activityRows">' + d.join("") + "</div>" + p) + "</section>";
  }
  function I(e, n) {
    const r = "readings:" + e.id, d = e.readings.map((p) => nn(r, p));
    return e.power != null && d.push(Ga("Power now", $t(e.power), "mdi:flash")), T(r, n, "Readings", d.concat(e.plugs.map(ui)));
  }
  function K(e, n) {
    var x;
    const r = "energy:" + e.id, [d, p] = [e.solar.find((S) => S.endsWith("_power")), e.solar.find((S) => S.endsWith("_today"))], y = [d, p].filter(Boolean).map((S) => nn(r, S)), h = Number(((x = w[d]) == null ? void 0 : x.state) || 0) * 1e3;
    return Je.grid && (y.push(nn(r, Je.grid)), y.push(Ga("House use", $t(h + Number(w[Je.grid].state)), "mdi:home-lightning-bolt"))), T(r, n, "Energy", y, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const he = (e, n) => T("plant:" + e.id, n, Le(e.id), e.readings.map((r) => nn("plant:" + e.id, r)), "", e.id);
  function fe(e, n, r, d, p, y, h = null) {
    const x = r == null ? null : Math.max(0, Math.min(1, r)), S = x == null ? 0 : Math.round(x * 100);
    return '<div class="tfBar ' + e + '" role="slider" tabindex="0" aria-label="' + ie(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + S + '"' + (p ? ' aria-valuetext="' + ie(p) + '"' : "") + ' data-drag="' + ie(e + "|" + n) + '">' + (h != null ? '<span class="was" aria-hidden="true" style="left:' + h + '%"></span>' : "") + (y ? x == null ? "" : '<b style="left:' + S + '%"></b>' : '<i style="width:' + S + '%"></i>') + "</div>";
  }
  const ue = "move-assistant-house-last-bright", ve = (() => {
    try {
      return JSON.parse(li.get(ue)) || {};
    } catch {
      return {};
    }
  })();
  let we = 0;
  const Ie = (e, n) => {
    !n || ve[e] === n || (ve[e] = n, clearTimeout(we), we = setTimeout(() => li.set(ue, JSON.stringify(ve)), 500));
  }, ze = (e, n, r, d) => '<div class="tfStep" role="group" aria-label="' + ie(e) + '"><button type="button" data-act="' + r + '" aria-label="Lower ' + ie(e.toLowerCase()) + '">−</button><output>' + ie(n) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + ie(e.toLowerCase()) + '">+</button></div>', je = (e, n, r) => '<div class="' + e + '" role="group" aria-label="' + ie(n) + '">' + r.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + ie(d.aria) + '"' : "") + ">" + (d.html || ie(d.label)) + "</button>").join("") + "</div>", qe = (e, n) => "width:" + Math.round(Math.max(0, Math.min(1, (e - n * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * n / 3).toFixed(2), De = (e) => "left:calc(3px + " + e / 100 + " * (100% - 6px))", Ke = (e, n) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + ie(Le(e)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-blocks="' + ie(e) + '">' + [0, 1, 2, 3].map((r) => '<span><i style="' + qe(n, r) + '"></i><b' + (n >= (r + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (r + 1) * 25 + "%</b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + De(n) + '">' + Math.round(n) + "%</output></div>";
  function Pe(e, n) {
    e.querySelectorAll(":scope>span").forEach((d, p) => {
      d.firstElementChild.setAttribute("style", qe(n, p)), d.lastElementChild.classList.toggle("lit", n >= (p + 1) * 25 - 12);
    });
    const r = e.querySelector(".tfTip");
    r.setAttribute("style", De(n)), r.textContent = Math.round(n) + "%", e.setAttribute("aria-valuenow", String(Math.round(n))), e.setAttribute("aria-valuetext", Math.round(n) + "% open");
  }
  const at = (e, n) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + ie(Le(e)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-drag="tilt|' + ie(e) + '"><i style="width:calc((100% - 6px) * ' + n / 100 + ')"></i><span' + (n > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (n > 92 ? ' class="lit"' : "") + ">Open</span></div>", ft = (e, n, r) => '<div class="tfCoverBtns" role="group" aria-label="' + ie(Le(e)) + '">' + [
    lt(e, Gh) && ["open", "Open", "open_cover", n >= 100 && !r],
    lt(e, Yh) && ["stop", "Stop", "stop_cover", !1],
    lt(e, Uh) && ["close", "Close", "close_cover", n <= 0 && !r]
  ].filter(Boolean).map(([d, p, y, h]) => '<button type="button" data-act="' + bt("cover", y, e) + '" aria-label="' + p + '"' + (h ? " disabled" : "") + ">" + Zh[d] + "</button>").join("") + "</div>", It = (e, n) => '<button class="tfIcon' + (n.art ? " art" : "") + '" type="button" data-act="' + n.button.act + '" aria-label="' + ie(n.button.label) + '"' + (n.art ? ' style="background-image:url(&quot;' + ie(n.art) + '&quot;)"' : Yt(e, n.icon)) + "></button>", Tt = (e) => '<button class="tfName" type="button" data-more="' + ie(e) + '" aria-label="' + ie(Le(e) + ", " + Ut(e) + ". More info") + '"><span class="activityRowName">' + ie(Le(e)) + '</span><span class="activityRowMeta">' + ie(Ut(e)) + "</span></button>";
  function Xt(e, n = !1, r = null) {
    if (e.startsWith("light.") && hi(e)) return '<div class="tfDac" data-k="' + ie(e) + '" data-dac="' + (n ? "more:" : r ? "dash:" : "tile:") + ie(e) + '"></div>';
    const d = fi(e), p = r || (n && e.startsWith("light.") ? ["bright"] : null), y = d.sections.map((h, x) => h && (!p || p.includes((d.parts || [])[x])) ? h : "").filter(Boolean);
    return '<div class="tfAction' + (d.on ? " on" : "") + '" data-k="' + ie(e) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + Gt(e) + '><div class="tfActionHead">' + It(e, d) + Tt(e) + "</div>" + y.join("") + "</div>";
  }
  const Jt = "dual-controller-v3", aa = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.4/dist/dual-axis-controller-v4.js";
  let Rn = null;
  async function pi() {
    if (Rn || customElements.get(Jt)) return;
    Rn = "loading";
    const e = await Promise.resolve().then(() => P({ type: "lovelace/resources" })).catch(() => null), n = Array.isArray(e) && e.some((d) => /dual-axis-controller/i.test(d.url || ""));
    if (await Promise.race([customElements.whenDefined(Jt), new Promise((d) => setTimeout(d, n ? 8e3 : 0))]), customElements.get(Jt)) return;
    const r = Object.assign(document.createElement("script"), { src: aa });
    r.onerror = () => {
      Rn = "failed", U();
    }, document.head.appendChild(r);
  }
  const dn = /* @__PURE__ */ new Map(), Aa = (e) => (Ft.lightStyles[e] || Ft.lights) === "dac", mo = () => Ft.lights === "dac" || Object.values(Ft.lightStyles).includes("dac");
  function hi(e) {
    return Aa(e) && !!customElements.get(Jt);
  }
  const gt = (e) => Ft.lightPads[e] || Ft.dacPad, Nn = () => {
    const e = o();
    return e && {
      ...e,
      themes: { ...e.themes || {}, darkMode: !m.classList.contains("light") },
      callService: (n, r, d, ...p) => e.callService(n, ...Ei(n, r, d), ...p)
    };
  }, oa = ".halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", go = ".hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}", Ya = (e, n) => {
    !e.shadowRoot || e.shadowRoot.querySelector("style[data-tf]") || (e.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: go + (n ? oa : "") })).dataset.tf = "");
  }, Za = /* @__PURE__ */ new Map(), At = new ResizeObserver((e) => e.forEach(({ target: n }) => {
    const r = n.parentElement;
    !r || !n.offsetHeight || (r.style.removeProperty("min-height"), Za.set(r.dataset.dac, r.offsetHeight));
  }));
  function en(e) {
    e.querySelectorAll("[data-dac]").forEach((n) => {
      const r = n.dataset.dac, d = r.startsWith("dash:");
      let p = dn.get(r);
      if (!p) {
        const y = r.slice(r.indexOf(":") + 1);
        p = document.createElement(Jt), p.setConfig({ type: "custom:" + Jt, entity: y, pad: gt(y), ...d ? { tap_action: { action: "none" } } : {} }), dn.set(r, p);
      }
      p.hass = Nn(), p.parentNode !== n && n.replaceChildren(p, ...n.querySelectorAll(":scope > .tfEditChips")), !p.offsetHeight && Za.has(r) && (n.style.minHeight = Za.get(r) + "px"), At.observe(p), Ya(p, d);
    });
  }
  function Bn() {
    const e = Nn();
    dn.forEach((n, r) => {
      n.isConnected ? n.hass = e : dn.delete(r);
    });
  }
  customElements.whenDefined(Jt).then(() => {
    v && (_ != null && _.querySelector("[data-tf]")) && nr(Zt);
  });
  const vo = (e, n, r) => Oe.has(e + "|" + n) ? Oe.get(e + "|" + n) : r;
  function fi(e) {
    var y;
    const n = w[e], r = n.attributes, d = e.split(".")[0], p = (h, x) => ({ act: bt(h, "toggle", e), label: x });
    if (d === "light") {
      const h = n.state === "on", x = Ho(e), [S, R] = kn(e), H = vo("bright", e, uo(n));
      h && Ie(e, uo(n));
      const B = vo("ct", e, h && r.color_mode === "color_temp" ? r.color_temp_kelvin : null), Y = vo("hue", e, h && sd.includes(r.color_mode) && r.hs_color ? r.hs_color[0] : null);
      return { on: h, button: p("light", "Turn " + Le(e) + (h ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        zn(e) && fe("bright", e, H / 100, Le(e) + " brightness", H + "%", !1, h ? null : ve[e] ?? null),
        x.includes("color_temp") && fe("ct", e, B == null ? null : (B - S) / (R - S), Le(e) + " warm to cool", B == null ? "" : Math.round(B) + " kelvin", !0),
        x.some((ye) => sd.includes(ye)) && fe("hue", e, Y == null ? null : Y / 360, Le(e) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const h = r.target_temp_step || 0.5, x = Number(r.temperature);
      return { on: n.state !== "off", tone: n.state === "cool" || r.hvac_action === "cooling" ? "cool" : "heat", button: p("climate", "Turn " + Le(e) + (n.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(x) && ze("Target temperature", He(x) + " °C", bt("climate", "set_temperature", e, { temperature: x - h }), bt("climate", "set_temperature", e, { temperature: x + h })),
        je("tfSeg", "Mode", (r.hvac_modes || []).map((S) => ({ label: vt(S), act: bt("climate", "set_hvac_mode", e, { hvac_mode: S }), pressed: n.state === S })))
      ] };
    }
    if (d === "cover") {
      const h = n.state === "opening" || n.state === "closing", x = n.state === "closed", S = ta(e), R = ho(e);
      return { on: !x, tone: "blue", icon: Kh[ad(n)][x ? 1 : 0], button: p("cover", (x ? "Open " : "Close ") + Le(e)), parts: ["blocks", "tilt", "buttons"], sections: [
        lt(e, Ac) && Ke(e, S),
        R != null && at(e, R),
        ft(e, S, h)
      ] };
    }
    if (d === "humidifier") {
      const h = Number(r.humidity);
      return { on: n.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: p("humidifier", "Turn " + Le(e) + (n.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(h) && ze("Target humidity", h + "%", bt("humidifier", "set_humidity", e, { humidity: h - 1 }), bt("humidifier", "set_humidity", e, { humidity: h + 1 })),
        ((y = r.available_modes) == null ? void 0 : y.length) && je("tfSeg", "Mode", r.available_modes.map((x) => ({ label: vt(x), act: bt("humidifier", "set_mode", e, { mode: x }), pressed: r.mode === x })))
      ] };
    }
    if (d === "media_player") {
      const h = n.state === "playing", x = n.state === "off" || n.state === "standby", S = vo("vol", e, r.volume_level), R = x ? { act: bt("media_player", lt(e, zh) ? "turn_on" : "toggle", e), label: "Turn " + Le(e) + " on" } : n.state === "playing" || n.state === "paused" ? { act: bt("media_player", "media_play_pause", e), label: (h ? "Pause " : "Play ") + Le(e) } : { act: bt("media_player", lt(e, jh) ? "turn_off" : "toggle", e), label: "Turn " + Le(e) + " off" };
      return { on: !x, tone: "blue", art: !x && r.entity_picture ? r.entity_picture : null, button: R, parts: ["playback", "volume"], sections: x ? [] : [
        (lt(e, Sc) || lt(e, Tc) || lt(e, Cc) || lt(e, Lc)) && je("tfSeg", "Playback", [
          { html: nl.prev, aria: "Previous", act: bt("media_player", "media_previous_track", e), disabled: !lt(e, Sc) },
          { html: h ? nl.pause : nl.play, aria: h ? "Pause" : "Play", act: bt("media_player", "media_play_pause", e), disabled: !(lt(e, Cc) || lt(e, Lc)) },
          { html: nl.next, aria: "Next", act: bt("media_player", "media_next_track", e), disabled: !lt(e, Tc) }
        ]),
        lt(e, Vh) && S != null && fe("vol", e, S, Le(e) + " volume", Math.round(S * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const h = n.state === "cleaning", x = r.rooms || [], S = (H) => x.includes(H) ? x.filter((B) => B !== H) : x.concat(H), R = bt("vacuum", h ? "pause" : "start", e, Ii(e) ? { rooms: x } : null);
      return { on: h || n.state === "returning", tone: "blue", button: { act: R, label: (h ? "Pause " : "Start ") + Le(e) }, parts: ["controls", "rooms"], sections: [
        je("tfSeg", Le(e), [
          { label: h ? "Pause" : "Start", act: R },
          { label: "Dock", act: bt("vacuum", "return_to_base", e), disabled: n.state === "docked" },
          { label: "Locate", act: bt("vacuum", "locate", e) }
        ]),
        Ii(e) && je("tfChips", "Rooms to clean", Je.rooms.filter((H) => H.id !== "balcony").map((H) => ({ label: H.name, act: bt("vacuum", "set_rooms", e, { rooms: S(H.name) }), pressed: x.includes(H.name) })))
      ] };
    }
    if (d === "lock") {
      const h = n.state === "locked";
      return { on: !h, tone: "heat", button: { act: bt("lock", h ? "unlock" : "lock", e), label: (h ? "Unlock " : "Lock ") + Le(e) }, parts: ["controls"], sections: [
        je("tfSeg", Le(e), [
          { label: "Lock", act: bt("lock", "lock", e), pressed: h },
          { label: "Unlock", act: bt("lock", "unlock", e), pressed: n.state === "unlocked" },
          lt(e, af) && { label: "Open", act: bt("lock", "open", e), pressed: n.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const h = n.state === "disarmed";
      return { on: !h, tone: n.state === "triggered" ? "alarm" : "blue", button: { act: bt("alarm_control_panel", h ? "alarm_arm_away" : "alarm_disarm", e), label: h ? "Arm " + Le(e) + ", away" : "Disarm " + Le(e) }, parts: ["controls"], sections: [
        je("tfSeg", Le(e), of.filter(([, , , x]) => !x || lt(e, x)).map(([x, S, R]) => ({ label: S, act: bt("alarm_control_panel", R, e), pressed: n.state === x })))
      ] };
    }
    if (d === "valve") {
      const h = n.state === "open";
      return { on: h, tone: "blue", icon: "mdi:sprinkler-variant", button: p("valve", (h ? "Close " : "Open ") + Le(e)), parts: ["controls"], sections: [
        je("tfSeg", Le(e), [
          { label: "Open", act: bt("valve", "open_valve", e), pressed: h },
          { label: "Close", act: bt("valve", "close_valve", e), pressed: !h }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Le(e) }, sections: [] };
  }
  const Fo = (e) => (Number.isInteger(Number(e)) ? String(Number(e)) : He(e)) + "°";
  function mi(e) {
    const n = (pe) => e.readings.find((O) => mt(O).device_class === pe), r = n("temperature"), d = n("humidity"), p = (pe) => {
      var O;
      return Number((O = w[pe]) == null ? void 0 : O.state);
    }, y = (pe) => e.actions.filter((O) => pe.test(O)), h = e.lights.filter((pe) => {
      var O;
      return ((O = w[pe]) == null ? void 0 : O.state) === "on";
    }), x = y(/^cover\./), S = x.filter((pe) => {
      var O;
      return ((O = w[pe]) == null ? void 0 : O.state) !== "closed";
    }), R = [...new Set(x.map((pe) => ad(w[pe])))], H = y(/^climate\./)[0], B = y(/^humidifier\./)[0], Y = y(/^media_player\./), ye = Y.find((pe) => {
      var O;
      return ((O = w[pe]) == null ? void 0 : O.state) === "playing";
    }) || Y.find((pe) => {
      var O;
      return ((O = w[pe]) == null ? void 0 : O.state) === "paused";
    }), Re = e.plugs.filter((pe) => {
      var O;
      return ((O = w[pe]) == null ? void 0 : O.state) === "on";
    }), de = [];
    if (r && Number.isFinite(p(r)) && de.push({ key: "temp", id: r, kind: "reading", icon: ro.temp, label: "Temperature", value: He(p(r)) + "°" }), d && Number.isFinite(p(d)) && de.push({ key: "hum", id: d, kind: "reading", icon: ro.hum, label: "Humidity", value: Math.round(p(d)) + "%" }), e.lights.length && de.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: ro.lights,
      label: "Lights",
      value: h.length ? h.length + " of " + e.lights.length + " on" : "All off",
      short: h.length ? h.length + " on" : "Off",
      on: h.length > 0,
      light: h.length ? Ve(h[0]) : "",
      acts: e.lights.map((pe) => ["light", h.length ? "turn_off" : "turn_on", pe]),
      aria: (h.length ? "Turn off" : "Turn on") + " the lights in " + e.name
    }), x.length) {
      const pe = R.length === 1 ? $h[R[0]] : "covers", O = Math.round(x.reduce((Ae, Ne) => Ae + Rt(Ne), 0) / x.length);
      de.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: ro.covers,
        label: vt(pe),
        value: O <= 0 ? "Closed" : O >= 100 ? "Open" : O + "% open",
        short: O <= 0 ? "Closed" : O + "%",
        on: S.length > 0,
        acts: x.map((Ae) => ["cover", S.length ? "close_cover" : "open_cover", Ae]),
        aria: (S.length ? "Close the " : "Open the ") + pe + " in " + e.name
      });
    }
    if (H) {
      const pe = mt(H), O = w[H].state === "off";
      de.push({
        key: "climate",
        kind: "control",
        tone: pe.hvac_action === "cooling" ? "cool" : "heat",
        icon: ro.climate,
        label: Le(H),
        value: O ? "Off" : vt(pe.hvac_action || w[H].state) + " · " + Fo(pe.temperature),
        short: O ? "Off" : Fo(pe.temperature),
        on: !O,
        acts: [["climate", "toggle", H]],
        aria: "Turn " + Le(H) + (O ? " on" : " off")
      });
    }
    if (B) {
      const pe = w[B].state === "on";
      de.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: ro.humidifier,
        label: Le(B),
        value: pe ? "On · " + mt(B).humidity + "%" : "Off",
        short: pe ? mt(B).humidity + "%" : "Off",
        on: pe,
        acts: [["humidifier", "toggle", B]],
        aria: "Turn " + Le(B) + (pe ? " off" : " on")
      });
    }
    if (Y.length) {
      const pe = ye || Y[0], O = w[pe], Ae = O.state === "playing";
      de.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: ro.media,
        label: Le(pe),
        value: Ut(pe),
        short: Ae ? "Playing" : O.state === "paused" ? "Paused" : vt(O.state),
        on: Ae,
        acts: [["media_player", O.state === "playing" || O.state === "paused" ? "media_play_pause" : "toggle", pe]],
        aria: (Ae ? "Pause " : "Play ") + Le(pe)
      });
    }
    return e.plugs.length && de.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: ro.plugs,
      label: "Plugs",
      value: Re.length ? Re.length + " of " + e.plugs.length + " on" : "All off",
      short: Re.length ? Re.length + " on" : "Off",
      on: Re.length > 0,
      acts: e.plugs.map((pe) => ["switch", Re.length ? "turn_off" : "turn_on", pe]),
      aria: (Re.length ? "Turn off" : "Turn on") + " the plugs in " + e.name
    }), e.alerts.forEach((pe) => de.push(mt(pe).device_class === "moisture" ? { key: "alert:" + pe, kind: "alert", icon: ro.alert, label: "Water leak" } : { key: "note:" + pe, kind: "note", icon: ro.door, label: Le(pe) + " " + Ut(pe).toLowerCase() })), de;
  }
  const yr = (e, n) => {
    const r = (d) => e.actions.filter((p) => d.test(p));
    return {
      lights: e.lights,
      covers: r(/^cover\./),
      climate: r(/^climate\./).slice(0, 1),
      humidifier: r(/^humidifier\./).slice(0, 1),
      plugs: e.plugs,
      media: (() => {
        const d = r(/^media_player\./);
        return [d.find((p) => {
          var y;
          return ((y = w[p]) == null ? void 0 : y.state) === "playing";
        }) || d.find((p) => {
          var y;
          return ((y = w[p]) == null ? void 0 : y.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[n] || [];
  }, fl = (e, n, r) => '<button class="' + n + (e.on ? " on" : "") + '" type="button" data-tone="' + e.tone + '" data-acts="' + ha(e.acts) + '" aria-label="' + ie(e.aria) + '" aria-pressed="' + e.on + '">' + r + "</button>", kr = (e) => '<button class="tfAName" type="button" data-go="' + ie(e.id) + '" aria-label="Open ' + ie(e.name) + '">' + ie(e.name) + "</button>";
  function Mr(e, n, r = !1) {
    const d = n.find((x) => x.key === "lights"), p = !!(d != null && d.on), y = p && d.light ? ' data-light style="' + d.light + '"' : "", h = '<span class="tfAreaGlyph"' + Yt("area:" + e.id, e.icon || "mdi:texture-box", e.name) + "></span>";
    return r || !d ? '<span class="tfIcon tfAreaIcon' + (p ? " on" : "") + '"' + y + ' aria-hidden="true">' + h + "</span>" : '<button class="tfIcon tfAreaIcon' + (p ? " on" : "") + '" type="button"' + y + ' data-acts="' + ha(d.acts) + '" aria-label="' + ie(d.aria) + '" aria-pressed="' + p + '">' + h + "</button>";
  }
  const Cr = (e) => e.filter((n) => n.kind === "alert" || n.kind === "note").map((n) => '<span class="sourceTag">' + ie(n.label) + "</span>").join(" "), ml = (e) => e.readings.find((n) => mt(n).device_class === "temperature") || [...e.readings, ...e.solar, ...e.openings, ...e.actions, ...e.plugs].find((n) => w[n]) || null, ls = (e, n) => {
    const r = Le(n);
    return r.toLowerCase().startsWith(e.name.toLowerCase() + " ") ? vt(r.slice(e.name.length + 1)) : r;
  };
  function Sr(e) {
    const n = w[e], r = mt(e), d = e.split(".")[0], p = Number(n.state);
    if (n.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(p)) {
      if (r.device_class === "temperature") return { text: Fo(p) };
      const y = r.unit_of_measurement || "";
      return y === "%" ? { text: Math.round(p) + "%" } : { text: He(p, Number.isInteger(p) ? 0 : 1), unit: y };
    }
    if (d === "climate" && (r.current_temperature ?? r.temperature) != null) return { text: Fo(r.current_temperature ?? r.temperature) };
    if (d === "light") return { text: n.state !== "on" ? "Off" : zn(e) ? uo(n) + "%" : "On" };
    if (d === "cover") {
      const y = Rt(e);
      return { text: y <= 0 ? "Closed" : y >= 100 ? "Open" : y + "%" };
    }
    return d === "humidifier" ? { text: n.state === "on" ? r.humidity + "%" : "Off" } : d === "media_player" ? { text: n.state === "playing" ? "Playing" : n.state === "paused" ? "Paused" : vt(n.state) } : { text: Ut(e) };
  }
  const zi = (e, n, r) => {
    const d = r.find((x) => x.key === "temp"), p = r.find((x) => x.key === "hum"), y = mt(n), h = w[n].state === "off";
    return n.startsWith("climate.") ? [ls(e, n), h ? "Off" : vt(y.hvac_action || w[n].state) + (y.temperature != null ? " · " + Fo(y.temperature) : ""), p && p.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === n) && ls(e, n), d && d.id !== n && d.value, p && p.id !== n && p.value + " humidity"].filter(Boolean).join(" · ");
  };
  function gl(e, n, r) {
    const d = r && Sr(r), p = r ? zi(e, r, n) : "", y = (x) => {
      const S = yr(e, x.key);
      return S.length === 1 ? S[0] : "group:" + e.id + ":" + x.key;
    }, h = n.filter((x) => x.kind === "control").slice(0, 4).map((x) => '<div class="tfATile' + (x.on ? " on" : "") + '" data-tone="' + x.tone + '"' + (x.light ? ' data-light style="' + x.light + '"' : "") + ">" + fl(x, "tfIcon", x.icon) + '<button class="tfName" type="button" data-more="' + ie(y(x)) + '" aria-label="' + ie(e.name + " " + x.label.toLowerCase() + ", " + x.value + ". Open") + '"><span class="activityRowName">' + ie(x.label) + '</span><span class="activityRowMeta">' + ie(x.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + Mr(e, n) + '<div class="tfATitle">' + kr(e) + Cr(n) + "</div></div>" + (r ? '<button class="tfABig" type="button" data-more="' + ie(r) + '" aria-label="' + ie(Le(r) + ", " + Ut(r) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + ie(d.text) + (d.unit ? '<span class="tfABigUnit">' + ie(d.unit) + "</span>" : "") + "</span>" + (p ? '<span class="tfABigSub">' + ie(p) + "</span>" : "") + "</button>" : "") + (h.length ? '<div class="tfATiles">' + h.join("") + "</div>" : "");
  }
  function ds(e) {
    const n = e.id === ge, r = mi(e), d = ml(e), p = d && Sr(d), y = [...r.filter((h) => h.kind === "control"), ...r.filter((h) => h.kind !== "control" && h.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (n ? " active" : "") + '" data-area="' + ie(e.id) + '" tabindex="0" aria-expanded="' + n + '" aria-label="' + ie(e.name) + '"><div class="panelExpanded"' + (n ? "" : " inert") + ">" + gl(e, r, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + Mr(e, r, !0) + '<span class="tfACName">' + ie(e.name) + '</span></div><span class="tfACMain">' + (p ? ie(p.text + (p.unit ? " " + p.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + y.map((h) => '<span class="tfACTile"><span class="tfIcon' + (h.kind === "alert" ? " alert" : "") + '"' + (h.on && h.light ? ' data-light style="' + h.light + '"' : "") + ">" + h.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let ia = [];
  const Tr = (e) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + e + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + ia.map(ds).join("") + "</section></div>", Lr = () => [
    { key: "home", name: "Home", ids: Je.homeVacuums },
    ...Je.rooms.map((e) => ({ key: "room:" + e.id, name: e.name, room: e, ids: e.actions }))
  ], _a = (e, n, r) => e + " " + (e === 1 ? n : r), jn = () => (V.favourites ?? ae.favorite_entities ?? []).filter((e) => w[e]);
  function vl() {
    if (!We) {
      const n = Object.entries(tt).sort((d, p) => p[1] - d[1]).map(([d]) => d), r = Je.rooms.flatMap((d) => d.actions);
      We = [.../* @__PURE__ */ new Set([...me, ...n, ...r.filter((d) => fi(d).on), ...r])];
    }
    const e = jn();
    return We.filter((n) => w[n] && w[n].state !== "unavailable" && !e.includes(n));
  }
  let ji = !1;
  function Gi() {
    if (!ji || V.favSeeded || !Je.rooms.length) return;
    const e = (r) => Object.keys(w).find((d) => Ii(d) && r(d)), n = [e((r) => r.startsWith("climate.")), e((r) => r.startsWith("cover.") && /curtain/.test(r)), e((r) => r.startsWith("valve.")), Je.security.locks[0]];
    V = { ...V, favourites: [.../* @__PURE__ */ new Set([...V.favourites ?? ae.favorite_entities ?? [], ...n.filter(Boolean)])], favSeeded: !0 }, Dn();
  }
  const _t = () => V.suggest ?? !ae.hide_suggested_entities;
  function bl() {
    const e = new Set(V.favHidden || []), n = jn().filter((d) => !e.has(d)), r = _t() ? vl().filter((d) => !e.has(d) && yi(d)) : [];
    return [...n, ...r].slice(0, sf);
  }
  const wl = (e) => {
    const n = jn().includes(e);
    return '<button class="tfStar" type="button" data-star="' + ie(e) + '" aria-pressed="' + n + '" aria-label="Favourite: ' + ie(Le(e)) + '">' + nf(n) + "</button>";
  };
  function Ui(e, { area: n = !1, star: r = !1, plain: d = !1, say: p = null, alert: y = !1 } = {}) {
    var Re, de, pe, O, Ae, Ne;
    const h = d && ((Ae = (Re = o()) == null ? void 0 : Re.devices) == null ? void 0 : Ae[(O = (pe = (de = o()) == null ? void 0 : de.entities) == null ? void 0 : pe[e]) == null ? void 0 : O.device_id]), x = h && (h.name_by_user || h.name) || Le(e), S = e.split(".")[0], R = !d && ol.includes(S) ? fi(e) : null, H = R ? R.on : ["on", "open", "playing"].includes((Ne = w[e]) == null ? void 0 : Ne.state), B = d ? null : R ? R.button : Xh.includes(S) ? { act: bt(S, "toggle", e), label: "Turn " + Le(e) + (H ? " off" : " on") } : S === "scene" || S === "script" ? { act: bt(S, "turn_on", e), label: "Run " + Le(e) } : null, Y = (p ?? Ut(e)) + (n && xt.get(e) ? " · " + xt.get(e) : ""), ye = (R == null ? void 0 : R.icon) || na(e);
    return '<div class="activityRow' + (B ? " tfPlug" : "") + (H ? " on" : "") + (r ? " tfPick" : "") + (y ? " alert" : "") + '" data-k="' + ie((n ? "fav:" : "row:") + e) + '" data-tone="' + (S === "light" ? "light" : (R == null ? void 0 : R.tone) || "blue") + '"' + Gt(e) + ">" + (B && !r ? '<button class="tfIcon" type="button" data-act="' + B.act + '" aria-label="' + ie(B.label) + '"' + Yt(e, ye) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Yt(e, ye) + "></div>") + '<button class="tfName" type="button" data-more="' + ie(e) + '" aria-label="' + ie(x + ", " + Y + ". More info") + '"><span class="activityRowName">' + ie(x) + '</span><span class="activityRowMeta">' + ie(Y) + "</span></button>" + (r ? wl(e) : "") + "</div>";
  }
  const bo = () => {
    var e;
    return w[(e = V.sources) == null ? void 0 : e.weather] ? V.sources.weather : w["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(w).find((n) => n.startsWith("weather."));
  };
  function xl() {
    var r;
    const e = (d) => Object.keys(w).filter((p) => p.startsWith("binary_sensor.") && d.includes(mt(p).device_class));
    return ((r = le.alert_entities) != null && r.length ? le.alert_entities : [...e(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...e(al).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => w[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(w[d.entity].state) }));
  }
  function Ot() {
    const e = Object.keys(id), n = /* @__PURE__ */ new Set(), r = [];
    return (ae.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!e.includes(d.key) || n.has(d.key)) return;
        n.add(d.key);
      }
      r.push(d);
    }), e.forEach((d) => {
      n.has(d) || r.push({ type: "summary", key: d });
    }), r;
  }
  function Ka() {
    var pe;
    const e = ((pe = o()) == null ? void 0 : pe.entities) || {}, n = (O) => mt(O).device_class, r = Object.keys(w).filter((O) => O.startsWith("sensor.") && n(O) === "battery" || O.startsWith("binary_sensor.") && ["battery", "problem"].includes(n(O))), d = Je.rooms.flatMap((O) => O.plants.map((Ae) => Ae.id));
    if (!r.length && !d.length) return null;
    const p = (O) => {
      var Ne;
      const Ae = (Ne = e[O]) == null ? void 0 : Ne.device_id;
      return !!Ae && Object.keys(w).some((dt) => {
        var rn;
        return dt.startsWith("binary_sensor.") && ((rn = e[dt]) == null ? void 0 : rn.device_id) === Ae && n(dt) === "battery_charging" && w[dt].state === "on";
      });
    }, y = (O) => O.startsWith("vacuum.") ? mt(O).battery_level <= 20 && w[O].state !== "docked" : O.startsWith("binary_sensor.") ? n(O) === "battery" && w[O].state === "on" : parseFloat(w[O].state) <= 20 && !p(O), h = [...r, ...Je.vacuums].filter((O) => w[O] && y(O)), x = [...r.filter((O) => n(O) === "problem" && w[O].state === "on"), ...d.filter((O) => {
      var Ae;
      return ((Ae = w[O]) == null ? void 0 : Ae.state) === "problem";
    })], S = r.filter((O) => w[O].state === "unavailable"), R = [.../* @__PURE__ */ new Set([...h, ...x, ...S])], H = (O) => {
      const Ae = parseFloat(w[O].state);
      return n(O) === "battery" && Number.isFinite(Ae) ? Ae : 101;
    }, B = [...d, ...Je.vacuums, ...[...r].sort((O, Ae) => H(O) - H(Ae))].filter((O) => w[O] && !R.includes(O)), Y = /* @__PURE__ */ new Map();
    B.forEach((O) => {
      var Ne;
      const Ae = ((Ne = Je.areaOf) == null ? void 0 : Ne.call(Je, O)) || "";
      Y.set(Ae, [...Y.get(Ae) || [], O]);
    });
    const ye = (O) => {
      const Ae = Je.rooms.findIndex((Ne) => Ne.id === O);
      return O === "" ? 1 / 0 : Ae < 0 ? Je.rooms.length : Ae;
    }, Re = [...Y.keys()].sort((O, Ae) => ye(O) - ye(Ae)), de = (O) => {
      var Ae, Ne, dt, rn;
      return ((Ae = Je.rooms.find((Nt) => Nt.id === O)) == null ? void 0 : Ae.name) || ((rn = (dt = (Ne = o()) == null ? void 0 : Ne.areas) == null ? void 0 : dt[O]) == null ? void 0 : rn.name) || O;
    };
    return {
      value: [h.length && _a(h.length, "low battery", "low batteries"), x.length && _a(x.length, "problem", "problems"), S.length && _a(S.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: R, alert: !0 }, ...Re.map((O) => ({ name: O ? de(O) : Re.length > 1 ? "Other devices" : "Devices", ids: Y.get(O) }))].filter((O) => O.ids.length)
    };
  }
  function wo() {
    var _n;
    const e = Je.rooms, n = Je.security, r = (Ge, Kt) => Ge.actions.filter((cr) => Kt.test(cr)), d = (Ge) => e.map((Kt) => ({ name: Kt.name, ids: Ge(Kt) })).filter((Kt) => Kt.ids.length), p = e.flatMap((Ge) => Ge.lights), y = p.filter((Ge) => {
      var Kt;
      return ((Kt = w[Ge]) == null ? void 0 : Kt.state) === "on";
    }).length, h = e.map((Ge) => Ge.readings.find((Kt) => mt(Kt).device_class === "temperature")).filter(Boolean).map((Ge) => Number(w[Ge].state)).filter(Number.isFinite), [x, S] = [He(Math.min(...h)), He(Math.max(...h))], R = e.flatMap((Ge) => r(Ge, /^media_player\./)), H = R.filter((Ge) => {
      var Kt;
      return ((Kt = w[Ge]) == null ? void 0 : Kt.state) === "playing";
    }).length, B = xl(), Y = B.filter((Ge) => Ge.severity === "warning" && Ge.on).length, ye = n.locks.filter((Ge) => {
      var Kt;
      return ["unlocked", "jammed", "open"].includes((Kt = w[Ge]) == null ? void 0 : Kt.state);
    }).length, Re = n.alarms.filter((Ge) => {
      var Kt;
      return ((Kt = w[Ge]) == null ? void 0 : Kt.state) === "disarmed";
    }).length, de = Y ? _a(Y, "warning", "warnings") : null, pe = ye ? ye + " unlocked" : Re ? Re + " disarmed" : de ? null : "All secure", O = Ka(), Ae = e.flatMap((Ge) => Ge.solar), Ne = Ae.find((Ge) => Ge.endsWith("_power")), dt = {
      light: p.length && { value: y ? y + " on" : "All off", groups: d((Ge) => Ge.lights) },
      climate: h.length && { value: x === S ? x + "°" : x + " - " + S + "°", groups: d((Ge) => [...Ge.readings.filter((Kt) => ["temperature", "humidity"].includes(mt(Kt).device_class)), ...r(Ge, /^(climate|humidifier)\./)]) },
      security: (n.alarms.length || n.locks.length) && { value: [de, pe].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...n.alarms, ...n.locks] }, { name: "Doors and windows", ids: n.openings }].filter((Ge) => Ge.ids.length) },
      media_players: R.length && { value: H ? H + " playing" : "No media playing", groups: d((Ge) => r(Ge, /^media_player\./)) },
      maintenance: O,
      energy: Je.grid && { value: $t(Number(((_n = w[Ne]) == null ? void 0 : _n.state) || 0) * 1e3 + Number(w[Je.grid].state)) + " now", groups: [{ name: "Energy", ids: [...Ae, Je.grid] }] }
    }, rn = [], Nt = B.filter((Ge) => Ge.severity !== "warning" && Ge.on);
    return Nt.length && rn.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: _a(Nt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Nt.map((Ge) => Ge.entity) }] }), Ot().forEach((Ge) => {
      Ge.type !== "summary" ? rn.push({ key: "path:" + Ge.path, name: Ge.label || Ge.path, icon: Ge.icon || "mdi:link-variant", colour: "", value: "" }) : !Ge.hidden && dt[Ge.key] && !(V.hiddenSums || []).includes(Ge.key) && rn.push({ key: Ge.key, ...id[Ge.key], ...dt[Ge.key] });
    }), rn;
  }
  const yl = (e) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + ie(e.key) + '" data-k="sum:' + ie(e.key) + '" aria-label="' + ie(e.name + (e.value ? ", " + e.value : "")) + '"' + (e.key === "alerts" ? ' style="--sum:' + e.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + Yt(e.id || "", e.icon, e.name) + '></div><div><div class="activityRowName">' + ie(e.name) + "</div>" + (e.value ? '<div class="activityRowMeta">' + ie(e.value) + "</div>" : "") + "</div></div>";
  function gi(e) {
    const n = jn();
    V = { ...V, favourites: n.includes(e) ? n.filter((r) => r !== e) : [...n, e], favHidden: (V.favHidden || []).filter((r) => r !== e) }, Dn(), yn();
  }
  function Yi(e) {
    document.querySelector("home-assistant") && (be.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function vi(e, n) {
    if (e.startsWith("path:")) {
      Yi(e.slice(5));
      return;
    }
    Wa("summary:" + e, n);
  }
  async function $a() {
    const e = (h) => Promise.resolve().then(() => P(h)).catch(() => null), [n, r, d, p] = await Promise.all([
      e({ type: "frontend/get_user_data", key: _c }),
      e({ type: "frontend/get_system_data", key: "home" }),
      e({ type: "frontend/get_system_data", key: "security" }),
      e({ type: "usage_prediction/common_control" })
    ]), y = (n == null ? void 0 : n.value) || {};
    V = { favourites: y.favourites ?? null, sources: y.sources, hiddenSums: y.hiddenSums, dash: y.dash, named: y.named, favHidden: y.favHidden, suggest: y.suggest, favSeeded: y.favSeeded }, ae = (r == null ? void 0 : r.value) || {}, le = (d == null ? void 0 : d.value) || {}, me = Array.isArray(p == null ? void 0 : p.entities) ? p.entities : [], We = null, Object.keys(w).length && yn(), kl(), ji = !0, Gi();
  }
  const Ea = "HomeCore";
  async function kl() {
    var d, p, y;
    const e = location.pathname.split("/")[1], n = V.named || [];
    if (!((p = (d = o()) == null ? void 0 : d.user) != null && p.is_admin) || !e || n.includes(e)) return;
    const r = () => {
      V = { ...V, named: [...n, e] }, Dn();
    };
    try {
      const h = (y = await P({ type: "lovelace/dashboards/list" })) == null ? void 0 : y.find((R) => R.url_path === e);
      if (!h || h.mode === "yaml") return;
      if (h.title === Ea) {
        r();
        return;
      }
      const x = await P({ type: "lovelace/config", url_path: e }), S = ((x == null ? void 0 : x.views) || []).flatMap((R) => [...R.cards || [], ...(R.sections || []).flatMap((H) => H.cards || [])]);
      if (!S.length || !S.every((R) => (R == null ? void 0 : R.type) === "custom:move-assistant-card" && R.layout === "test-focus")) return;
      await P({ type: "lovelace/dashboards/update", dashboard_id: h.id, title: Ea }), r();
    } catch {
    }
  }
  let ra = null, Zi = 0, sa = !1;
  const Ar = (e) => {
    const n = e.split(".")[0], r = mt(e).device_class;
    return rf.includes(n) && (n !== "binary_sensor" || al.includes(r) || !!Hc[r]);
  }, _r = (e) => e.startsWith("binary_sensor.") ? Hc[mt(e).device_class] : null;
  async function Er() {
    var e;
    if (!(sa || Date.now() - Zi < 30 * 1e3)) {
      sa = !0, Zi = Date.now();
      try {
        const n = Object.keys(((e = o()) == null ? void 0 : e.states) || {}).filter(Ar), r = n.length ? await P({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: n }) : null;
        ra = Array.isArray(r) ? r.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        ra = null;
      }
      sa = !1, yn();
    }
  }
  function Dr() {
    const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = (p) => {
      if (!w[p.entity_id] || !Ar(p.entity_id) || !yi(p.entity_id) || ["unavailable", "unknown"].includes(p.state)) return;
      if (_r(p.entity_id)) {
        const h = n.get(p.entity_id);
        p.state === "on" ? (!h || p.when > h.when + 1) && n.set(p.entity_id, { ...p, alarm: !0, cleared: null }) : h && !h.cleared && p.when > h.when && (h.cleared = p.when);
        return;
      }
      const y = e.get(p.entity_id);
      (!y || p.when > y.when + 1) && e.set(p.entity_id, p);
    };
    [...ra || []].sort((p, y) => p.when - y.when).forEach(r);
    const d = ra ? Zi / 1e3 - 5 : 0;
    return Object.keys(w).forEach((p) => {
      var x;
      const y = w[p], h = y.last_changed ? Date.parse(y.last_changed) / 1e3 : 0;
      h > d && r({ entity_id: p, state: y.state, when: h, context_user_id: (x = y.context) == null ? void 0 : x.user_id });
    }), [...e.values(), ...n.values()].sort((p, y) => y.when - p.when).slice(0, lf);
  }
  function cs(e) {
    var d;
    const n = e.context_user_id && Object.keys(w).find((p) => p.startsWith("person.") && mt(p).user_id === e.context_user_id);
    if (n) return Le(n);
    const r = (d = o()) == null ? void 0 : d.user;
    return r && e.context_user_id === r.id ? r.name : ["automation", "script"].includes(e.context_domain) || e.context_event_type === "automation_triggered" ? e.context_name || "Home Assistant" : "";
  }
  function Ml(e) {
    const n = e.entity_id.split(".")[0], r = String(e.state);
    return n === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[r] || vt(r).toLowerCase() : n === "cover" || n === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[r] || vt(r).toLowerCase() : n === "binary_sensor" ? r === "on" ? "opened" : "closed" : n === "climate" ? r === "off" ? "turned off" : "set to " + vt(r).toLowerCase() : n === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[r] || vt(r).toLowerCase() : n === "alarm_control_panel" ? (Ic[r] || vt(r)).toLowerCase() : n === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[r] || vt(r).toLowerCase() : r === "on" ? "turned on" : r === "off" ? "turned off" : vt(r).toLowerCase();
  }
  function Ki(e) {
    const n = e.entity_id, r = e.alarm && _r(n), d = Le(n) + " " + (r ? r[0] : Ml(e)), p = r ? kt(e.when * 1e3) + (e.cleared ? " · " + r[1] + " since " + kt(e.cleared * 1e3) : "") : [cs(e), kt(e.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (r ? " alert" : "") + '"><div class="tfIcon' + (r ? " alert" : "") + '" aria-hidden="true"' + Yt(n, na(n)) + '></div><button class="tfName" type="button" data-more="' + ie(n) + '" data-at="' + Math.round(e.when * 1e3) + '" aria-label="' + ie(d + ", " + p + ". More info") + '"><span class="activityRowName">' + ie(d) + '</span><span class="activityRowMeta">' + ie(p) + "</span></button></div>";
  }
  let Oo = null, qo = 0;
  const Cl = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function bi() {
    var n;
    if (Date.now() - qo < 5 * 60 * 1e3) return;
    qo = Date.now();
    const e = [];
    try {
      const r = ((n = await P({ type: "energy/get_prefs" })) == null ? void 0 : n.energy_sources) || [], d = (p) => r.filter((y) => y.type === p).flatMap((y) => p === "grid" ? (y.flow_from || []).map((h) => h.stat_energy_from) : [y.stat_energy_from]).filter(Boolean);
      for (const [p, y, h] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!h.length) continue;
        const x = await Promise.all(h.map((S) => Promise.resolve(P({ type: "recorder/statistic_during_period", statistic_id: S, calendar: { period: "day" }, types: ["change"] })).then((R) => Number(R == null ? void 0 : R.change) || 0, () => 0)));
        e.push({ key: p, name: y, id: h[0], value: x.reduce((S, R) => S + R, 0), unit: mt(h[0]).unit_of_measurement || (p === "gas" || p === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Oo = e, yn();
  }
  let la = null;
  function $i() {
    var y;
    const e = Oo != null && Oo.length ? Oo : Cl.map(([h, x, S, R]) => {
      const H = "sensor.made_up_energy_" + h;
      return w[H] = { entity_id: H, state: String(S), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: x + " today", unit_of_measurement: R, state_class: "total_increasing" } }, { key: h, name: x, id: H, value: S, unit: R };
    });
    Ce.clear(), e.some((h) => h.id === la) || (la = e[0].id);
    const n = e.map((h) => {
      const x = Number(h.value).toLocaleString(void 0, { maximumFractionDigits: h.value < 10 ? 2 : 1 }) + " " + h.unit, S = df[h.key], R = h.id === la;
      return Ce.set(h.id, { name: h.name, text: x, icon: S }), '<div class="activityRow tap' + (R ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + ie(h.id) + '" aria-pressed="' + R + '" aria-label="' + ie(h.name + ", " + x) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Yt("", S, h.name) + '></div><div><div class="activityRowName">' + ie(h.name) + '</div><div class="activityRowMeta">' + ie(x) + "</div></div></div>";
    }), r = e.find((h) => h.id === la), d = (((y = qt().opts.energy) == null ? void 0 : y.graph) || "above") === "below", p = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + ie(r.id) + '" role="img" aria-label="' + ie(r.name) + ', last 24 hours"></svg></div>';
    return T("dash:energy", 0, "Energy today", n, p, null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function wi(e) {
    const n = _.querySelector(".tfDash-energy"), r = n == null ? void 0 : n.querySelector(".tfDashGraph svg");
    !r || e === la || (la = e, n.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const p = d.dataset.energyPick === e;
      d.classList.toggle("picked", p), d.setAttribute("aria-pressed", String(p));
    }), r.dataset.graph = e, r.dataset.drawn = "", bn.set("dash:energy", $i()), Cs(!0));
  }
  function xi(e) {
    var p;
    if ((p = window.matchMedia) != null && p.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [n, r] = e.querySelectorAll("path");
    if (!(r != null && r.getTotalLength)) return;
    const d = r.getTotalLength();
    r.animate([{ strokeDasharray: d, strokeDashoffset: d }, { strokeDasharray: d, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), n == null || n.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let xo = null, Wo = 0;
  const yi = (e) => !e.startsWith("light.") || cf.includes((xt.get(e) || "").toLowerCase()), fa = () => Math.max(2, Ra((_ == null ? void 0 : _.clientWidth) || 0).n), Vo = (e) => {
    const n = fi(e), r = n.sections.findIndex(Boolean);
    return r < 0 ? [] : [n.parts[r]];
  };
  function Sl(e) {
    const n = qt().tiles;
    if (n) return n.filter((d) => w[d]);
    if (!xo) {
      const d = (p) => {
        var y;
        return (((y = w[p]) == null ? void 0 : y.state) === "on" ? 1e6 : 0) + (tt[p] || 0);
      };
      xo = {
        lights: Je.rooms.flatMap((p) => p.lights).filter((p) => {
          var y;
          return yi(p) && ((y = w[p]) == null ? void 0 : y.state) !== "unavailable";
        }).sort((p, y) => d(y) - d(p) || Le(p).localeCompare(Le(y))),
        climates: Je.rooms.flatMap((p) => p.actions.filter((y) => y.startsWith("climate.")))
      };
    }
    const r = xo.climates.filter((d) => w[d]).slice(0, e > 3 ? 2 : 1);
    return [...xo.lights.filter((d) => w[d]).slice(0, Math.max(0, e - r.length)), ...r];
  }
  const us = (e, n, r, d) => (p) => '<section class="card tfCard tfDashCard ' + e + '" data-tf data-k="' + n + '" aria-label="' + r + '">' + (d ? '<div class="activityHeader"><div class="activityTitle">' + r + "</div></div>" : "") + '<div class="activityRows">' + p + "</div></section>";
  function zo(e, n) {
    var y, h;
    e.dash = !0, e.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ie(((h = (y = o()) == null ? void 0 : y.config) == null ? void 0 : h.location_name) || "Home") + "</h1>" }), n.length && e.push({ key: "sums", wrap: (x) => '<div class="tfDashBarRow" data-tf data-k="sums">' + us("tfDash-bar", "sums-bar", "Summaries", !1)(x).replace(" data-tf", "") + "</div>", tiles: n.map((x) => ({ key: "sum:" + x.key, html: yl(x) })) }), ia.length && e.push({ key: "areas", html: Tr(0) });
    const r = bl();
    r.length && e.push({ key: "favs", wrap: us("tfDash-favs", "favs", "Favourites", !0), tiles: r.map((x) => ({ key: "fav:" + x, html: Ui(x, { area: !0 }) })) });
    const d = Dr();
    e.push({ key: "dash:act", html: T("dash:act", 0, "Activity", d.length ? d.map(Ki) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), e.push({ key: "dash:energy", html: $i() });
    const p = fa();
    return Wo = p, e.push({
      key: "dash:tiles",
      wrap: (x) => '<div class="tfDashTiles" data-tf data-k="dash:tiles">' + x + "</div>",
      tiles: Sl(p >= 3 ? p : p * 2).map((x) => ({ key: x, html: Xt(x, !1, Vo(x)) }))
    }), Er(), bi(), e;
  }
  const Xa = 252, Vt = 16, Rr = 230, Xi = 60, Da = Xi + Vt, yo = 5, Ji = 3, ps = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average" }, Tl = ["wx", "favs", "act", "energy", "avg"], Sn = { wx: yo, areas: yo, favs: yo, act: yo, energy: 4, avg: 4 }, ki = 3, jo = 94, Qi = (e) => {
    var n;
    return !!((n = qt().opts[e]) != null && n.tall);
  }, ma = (e) => ps[e] || Le(e), Ll = 409, hs = 128;
  let xn = !1, Et = null, Pn = null, Mi = !1, Tn = /* @__PURE__ */ new Map(), Ja = 0, xa = 0;
  const er = ["title", "sums"], Ra = (e) => {
    let n = Math.floor((e + Vt) / (Xa + Vt)), r = Xa;
    return n < 4 && e >= 4 * Rr + 3 * Vt && (n = 4, r = Math.floor((e - 3 * Vt) / 4)), { n: Math.max(1, n), w: r };
  }, qt = () => ({ cells: {}, spans: {}, hidden: [], opts: {}, ...V.dash || {} });
  function Ci(e) {
    V = { ...V, dash: e }, Dn();
  }
  function ya() {
    const e = (n) => _.querySelector(n);
    return [
      ["title", e(".tfDashTitle"), "full"],
      ["sums", e(".tfDashBarRow"), "full"],
      ["wx", wn.wx, 2],
      ["areas", e(".tfAreas"), "areas"],
      ["favs", e(".tfDash-favs"), 2],
      ["act", e(".tfDash-act"), 2],
      ["energy", e(".tfDash-energy"), 2],
      ["avg", wn.avg, 2],
      ...[..._.querySelectorAll(".tfDashTiles > [data-k]")].map((n) => [n.dataset.k, n, 1, !0])
    ].filter(([, n]) => n == null ? void 0 : n.isConnected).map(([n, r, d, p = !1]) => ({ key: n, el: r, span: d, tile: p }));
  }
  const fs = (e, n, r) => e.span === "full" ? n : e.span === "areas" ? Math.min(n, Math.ceil((Ll + Math.max(0, ia.length - 1) * (hs + Vt) + Vt) / (r + Vt))) : Math.min(n, qt().spans[e.key] ?? e.span), Nr = (e) => Sn[e.key] ?? (e.el.classList.contains("tfDac") ? Qi(e.key) ? yo : ki : null);
  function Si(e, n, r = null) {
    const d = qt().cells, p = e.every((x) => !d[x.key] || d[x.key].col + x.cols <= n), y = (x) => d[x.key] || { row: 1e9, col: 0 }, h = () => {
      const x = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Map(), R = (de, pe, O, Ae) => {
        for (let Ne = pe; Ne < pe + Ae; Ne++) for (let dt = de; dt < de + O; dt++) if (x.has(dt + "," + Ne)) return !1;
        return !0;
      }, H = (de, pe, O) => {
        for (let Ae = O; Ae < O + de.rows; Ae++) for (let Ne = pe; Ne < pe + de.cols; Ne++) x.add(Ne + "," + Ae);
        S.set(de.key, { col: pe, row: O, cols: de.cols, rows: de.rows });
      }, B = (de, pe, O) => {
        for (pe = Math.max(0, Math.min(n - de.cols, pe)), O = Math.max(0, O); !R(pe, O, de.cols, de.rows); ) O++;
        H(de, pe, O);
      }, Y = (de) => {
        for (let pe = 0; ; pe++) for (let O = 0; O <= n - de.cols; O++) if (R(O, pe, de.cols, de.rows)) {
          H(de, O, pe);
          return;
        }
      };
      r && B(r, Et.col, Et.row);
      const ye = e.filter((de) => de !== r), Re = (de, pe) => y(de).row - y(pe).row || y(de).col - y(pe).col;
      return p ? (ye.filter((de) => d[de.key]).sort(Re).forEach((de) => B(de, d[de.key].col, d[de.key].row)), ye.filter((de) => !d[de.key]).forEach(Y), S) : ([...ye].sort(Re).forEach(Y), S);
    };
    for (let x = 0; ; x++) {
      const S = h();
      if (x === 3) return S;
      const R = e.filter((B) => B.tile && !Qi(B.key)).map((B) => ({ it: B, p: S.get(B.key) })).sort((B, Y) => B.p.row - Y.p.row || B.p.col - Y.p.col);
      let H = !1;
      for (let B = 0, Y; B < R.length; B = Y) {
        for (Y = B + 1; Y < R.length && R[Y].p.row === R[B].p.row && R[Y].p.col === R[Y - 1].p.col + 1; Y++) ;
        const ye = R.slice(B, Y), Re = Math.max(...ye.map((de) => de.it.rows));
        ye.forEach((de) => {
          de.it.rows < Re && (de.it.rows = Re, H = !0);
        });
      }
      if (!H) return S;
    }
  }
  function Go() {
    const e = qt(), n = new Set(e.hidden), r = ya().filter((h) => !er.includes(h.key));
    let d = Tn;
    if (!d.size) {
      const h = e.pegs || 4, x = r.filter((S) => !n.has(S.key));
      x.forEach((S) => {
        S.cols = fs(S, h, Xa), S.rows = Nr(S) ?? 2;
      }), d = Si(x, h);
    }
    const p = (h) => !n.has(h.key) && d.get(h.key) || { row: 1e9, col: 0 };
    r.sort((h, x) => p(h).row - p(x).row || p(h).col - p(x).col);
    const y = (e.phone || []).map((h) => r.find((x) => x.key === h && !n.has(h))).filter(Boolean);
    return [...y, ...r.filter((h) => !y.includes(h))];
  }
  const Uo = () => Go().forEach((e, n) => e.el.style.setProperty("--o", String(3 + n))), In = (e, n) => Ci({ ...e, cells: n, pegs: Ra(_.clientWidth).n });
  function an() {
    var pe;
    if (!v || !_) return;
    const e = _.clientWidth, { n, w: r } = Ra(e), d = m.classList.contains("tfDash") && n >= 2;
    m.classList.toggle("tfBoard", d), m.classList.toggle("tfEditing", d && xn);
    const p = c("dashEditNav");
    p && (p.hidden = !d, p.classList.toggle("active", xn), p.setAttribute("aria-pressed", String(xn)), p.setAttribute("aria-label", xn ? "Done editing" : "Edit the dashboard"), p.title = xn ? "Done" : "Edit", p.innerHTML = xn ? tf : Pc);
    const y = d ? ya() : [];
    if (!d) {
      _.style.height = "", _.querySelectorAll(".tfBoardItem").forEach((O) => {
        O.classList.remove("tfBoardItem", "tfBoardHidden"), O.style.left = O.style.top = O.style.width = O.style.height = "";
      }), (pe = _.querySelector(".tfDash-act > .activityRows")) == null || pe.style.removeProperty("max-height"), ko(!1), m.classList.contains("tfDash") && Uo(), on();
      return;
    }
    _.style.setProperty("--peg-w", r + "px");
    const h = new Set(qt().hidden), x = r + Vt;
    Et != null && Et.fromTray && h.delete(Et.key), y.forEach((O) => O.el.classList.toggle("tfBoardHidden", h.has(O.key)));
    const S = y.filter((O) => !h.has(O.key) && getComputedStyle(O.el).display !== "none");
    let R = 0;
    S.filter((O) => er.includes(O.key)).forEach((O) => {
      O.el.classList.add("tfBoardItem"), Object.assign(O.el.style, { width: e + "px", height: "", left: "0px", top: R + "px" });
      const Ae = O.key === "sums" && O.el.querySelector(".tfDash-bar"), Ne = Ae ? Ae.querySelectorAll(".activityRow").length : 0;
      Ae && (Ae.style.maxWidth = "none");
      for (let dt = 1; Ae && dt <= Ne && (Ae.style.setProperty("--bar-cols", String(Math.ceil(Ne / dt))), !(Ae.offsetWidth <= e)); dt++)
        ;
      Ae && (Ae.style.maxWidth = ""), R += O.el.offsetHeight + Vt;
    }), xa = R;
    const H = S.filter((O) => !er.includes(O.key));
    H.forEach((O) => {
      O.cols = fs(O, n, r), O.el.classList.add("tfBoardItem"), O.el.style.width = (O.cols === n ? e : O.cols * r + (O.cols - 1) * Vt) + "px", O.el.style.height = "", O.rows = Nr(O) ?? Math.max(1, Math.ceil((O.el.offsetHeight + Vt - 6) / Da));
    });
    const B = Et && H.find((O) => O.key === Et.key), Y = Si(H, n, B);
    Y.forEach((O) => Object.assign(O, { x: O.cols === n ? 0 : O.col * x, y: xa + O.row * Da, w: O.cols === n ? e : O.cols * r + (O.cols - 1) * Vt, h: O.rows * Da - Vt })), H.forEach((O) => {
      const Ae = Y.get(O.key);
      O.el.style.height = Ae.h + "px", O.el.classList.contains("tfDac") && O.el.style.setProperty("--tf-dac-pad", Ae.h - jo + "px"), !(O === B && !Et.fromTray) && (O.el.style.left = Ae.x + "px", O.el.style.top = Ae.y + "px");
    }), Tn = Y;
    const ye = Y.get("act"), Re = ye && _.querySelector(".tfDash-act > .activityRows");
    Re && (Re.style.maxHeight = Math.max(Xi, Math.floor((ye.h - Re.offsetTop - 10) / Xi) * Xi) + "px"), Ja = Math.max(0, ...[...Y.values()].map((O) => O.row + O.rows));
    let de = xa + Ja * Da - Vt;
    de = ko(xn, H, Y, de, n, r), _.style.height = de + "px", requestAnimationFrame(() => m.classList.add("tfBoardReady")), y.forEach((O) => Yo.observe(O.el)), Cs(), on();
  }
  const Na = () => {
    Mi || (Mi = !0, requestAnimationFrame(() => {
      Mi = !1, an();
    }));
  }, Yo = new ResizeObserver(() => {
    Et || Na();
  });
  function ko(e, n = [], r = /* @__PURE__ */ new Map(), d = 0, p = 1, y = Xa) {
    _.querySelectorAll(".tfEditChips").forEach((H) => {
      (!e || !H.closest(".tfBoardItem")) && H.remove();
    }), _.querySelectorAll(".tfFavHides").forEach((H) => H.remove()), _.querySelectorAll(".tfBoardItem").forEach((H) => [...H.children].forEach((B) => {
      B.classList.contains("tfEditChips") || B.toggleAttribute("inert", e);
    }));
    let h = _.querySelector(".tfBoardCells"), x = _.querySelector(".tfBoardLand");
    if (!e)
      return h == null || h.remove(), x == null || x.remove(), da(), d;
    const S = Ja + Ji;
    if (h || (h = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), h.setAttribute("aria-hidden", "true"), _.prepend(h)), h.style.top = xa + "px", h.dataset.size !== p + "x" + S + "x" + y && (h.dataset.size = p + "x" + S + "x" + y, h.style.gridTemplateColumns = "repeat(" + p + "," + y + "px)", h.innerHTML = "<i></i>".repeat(p * S)), d = Math.max(d, xa + S * Da - Vt), n.forEach((H) => {
      const B = H.el;
      !B || B.querySelector(":scope > .tfEditChips") || B.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + rd + '</span><button class="tfEditChip" type="button" data-board-more="' + ie(H.key) + '" aria-label="' + ie(ma(H.key)) + ' options" aria-haspopup="menu">' + Qh + "</button></div>");
    }), Et && r.has(Et.key)) {
      x || (x = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), _.appendChild(x));
      const H = r.get(Et.key);
      Object.assign(x.style, { left: H.x + "px", top: H.y + "px", width: H.w + "px", height: H.h + "px" });
    } else x == null || x.remove();
    const R = _.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (R) {
      const H = R.getBoundingClientRect();
      R.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...R.querySelectorAll('[data-k^="fav:"]')].map((B) => {
        const Y = B.getBoundingClientRect(), ye = B.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + ie(ye) + '" aria-label="Hide ' + ie(Le(ye)) + ' from the dashboard" style="left:' + Math.round(Y.right - H.left - 42) + "px;top:" + Math.round(Y.top - H.top + (Y.height - 32) / 2) + 'px">' + Rc + "</button>";
      }).join("") + "</div>");
    }
    return d;
  }
  let ka = "";
  function tr(e) {
    xn = e, e || (Et = null, ga = Ia = !1, da()), an(), e ? ka = JSON.stringify(V) : ka && JSON.stringify(V) !== ka && Fn("Changes saved");
  }
  function Al(e, n) {
    var Y, ye;
    da();
    const r = Tn.get(e), { n: d } = Ra(_.clientWidth), p = qt(), y = p.spans[e] ?? 2;
    if (!r) return;
    const h = r.cols >= d, x = (Re, de, pe) => '<button type="button" role="menuitem" data-board-act="' + Re + '"' + (pe ? " disabled" : "") + ">" + de + "</button>", S = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    S.setAttribute("role", "menu"), S.setAttribute("aria-label", ma(e) + " options");
    const R = _.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]'), H = R == null ? void 0 : R.classList.contains("tfDac");
    S.innerHTML = (Tl.includes(e) ? x("size", y === 1 ? "Card size" : "Tile size") : "") + (H ? x("tall", Qi(e) ? "Make shorter" : "Make taller") : "") + (e === "energy" ? x("graph", (((Y = p.opts.energy) == null ? void 0 : Y.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + x("left", "Move left", h || r.col === 0) + x("right", "Move right", h || r.col + r.cols >= d) + x("up", "Move up", r.row <= 0) + x("down", "Move down") + (R ? x("remove", "Remove") : x("hide", "Hide")), _.appendChild(S);
    const B = Math.min(r.x + r.w - S.offsetWidth, _.clientWidth - S.offsetWidth);
    Object.assign(S.style, { left: Math.max(0, B) + "px", top: r.y + 28 + "px" }), Pn = { key: e, menu: S, opener: n }, (ye = S.querySelector("button:not([disabled])")) == null || ye.focus();
  }
  function da(e) {
    if (!Pn) return;
    const { menu: n, opener: r } = Pn;
    Pn = null, n.remove(), e && (r == null || r.focus());
  }
  const Hn = () => Object.fromEntries([...Tn].map(([e, n]) => [e, { col: n.col, row: n.row }]));
  function Zo(e, n) {
    var h, x;
    if (n === "remove") {
      da(), vs(e);
      return;
    }
    const r = V, d = qt(), p = Hn(), y = p[e] || { col: 0, row: 0 };
    n === "size" && (d.spans = { ...d.spans, [e]: (d.spans[e] ?? 2) === 1 ? 2 : 1 }), n === "tall" && (d.opts = { ...d.opts, [e]: { ...d.opts[e] || {}, tall: !Qi(e) } }), n === "graph" && (d.opts = { ...d.opts, energy: { ...d.opts.energy || {}, graph: (((h = d.opts.energy) == null ? void 0 : h.graph) || "above") === "above" ? "below" : "above" } }), n === "left" && (p[e] = { ...y, col: y.col - 1 }), n === "right" && (p[e] = { ...y, col: y.col + 1 }), n === "up" && (p[e] = { ...y, row: y.row - 1 }), n === "down" && (p[e] = { ...y, row: y.row + 1 }), n === "hide" && (d.hidden = [.../* @__PURE__ */ new Set([...d.hidden, e])]), ["left", "right", "up", "down"].includes(n) && (Et = { key: e, col: p[e].col, row: p[e].row }), In(d, p), Et && (an(), Et = null, In(qt(), Hn())), da(), n === "graph" && (bn.delete("dash:energy"), yn()), an(), n !== "hide" ? (x = _.querySelector('[data-board-more="' + CSS.escape(e) + '"]')) == null || x.focus() : Fn(ma(e) + " hidden", eo(r));
  }
  function Ba(e) {
    const n = qt();
    Ci({ ...n, hidden: n.hidden.filter((r) => r !== e) }), an(), Fn(ma(e) + " put back");
  }
  const Qa = () => qt().tiles || [..._.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => e.dataset.k).filter((e) => !qt().hidden.includes(e));
  function ms(e, n) {
    const r = qt();
    In({ ...r, tiles: e, hidden: r.hidden.filter((d) => !d.includes(".")) }, n), yn(), on();
  }
  const gs = (e) => {
    ms([...Qa().filter((n) => n !== e), e], Hn()), Fn(Le(e) + " added"), Pa(e);
  }, vs = (e) => {
    const n = V, r = Hn();
    delete r[e], ms(Qa().filter((d) => d !== e), r), Fn(Le(e) + " removed", eo(n));
  };
  let Br = 0;
  function Fn(e, n = null) {
    var h;
    const r = c("toast");
    if (!r) return;
    if (r.replaceChildren(Object.assign(document.createElement("span"), { textContent: e })), n) {
      const x = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      x.addEventListener("click", () => {
        clearTimeout(Br), r.classList.remove("show", "withAction"), n();
      }), r.appendChild(x);
    }
    const d = m.getBoundingClientRect(), p = (h = a.querySelector(".bottomNav")) == null ? void 0 : h.getBoundingClientRect(), y = Dt.classList.contains("open") && !Ln ? Math.min(d.right, Dt.getBoundingClientRect().left) : d.right;
    r.style.left = (d.left + y) / 2 + "px", r.style.bottom = (p != null && p.height ? window.innerHeight - p.top + 12 : 26) + "px", r.classList.add("tfToast", "show"), r.classList.toggle("withAction", !!n), clearTimeout(Br), Br = setTimeout(() => r.classList.remove("show", "withAction"), n ? 5e3 : 2200);
  }
  const eo = (e) => () => {
    V = e, Dn(), yn(), an(), on();
  };
  function Pa(e) {
    const n = () => _.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]');
    setTimeout(() => {
      var h;
      const r = n();
      if (!r) return;
      const d = (h = window.matchMedia) == null ? void 0 : h.call(window, "(prefers-reduced-motion: reduce)").matches, p = r.getBoundingClientRect();
      (p.top < 0 || p.bottom > window.innerHeight) && r.scrollIntoView({ behavior: d ? "auto" : "smooth", block: "center" });
      const y = (x) => "0 0 0 4px color-mix(in srgb,var(--primary) " + x + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + x + "%,transparent)";
      r.animate([{ boxShadow: y(55) }, { boxShadow: y(0) }], { duration: 1500, easing: d ? "steps(1, end)" : "ease-out" });
    }, Pr(e) ? 260 : 0);
  }
  function Pr(e) {
    const n = Tn.get(e);
    if (!n || !Dt.classList.contains("open") || Ln) return !1;
    const { n: r, w: d } = Ra(_.clientWidth), p = Dt.getBoundingClientRect().left - _.getBoundingClientRect().left, y = (S) => S * (d + Vt) + n.cols * d + (n.cols - 1) * Vt <= p;
    if (y(n.col)) return !1;
    const h = /* @__PURE__ */ new Set();
    Tn.forEach((S, R) => {
      if (R !== e) for (let H = S.row; H < S.row + S.rows; H++) for (let B = S.col; B < S.col + S.cols; B++) h.add(B + "," + H);
    });
    const x = (S, R) => {
      for (let H = R; H < R + n.rows; H++) for (let B = S; B < S + n.cols; B++) if (h.has(B + "," + H)) return !1;
      return !0;
    };
    for (let S = 0; S <= Ja; S++) for (let R = 0; R + n.cols <= r && y(R); R++)
      if (x(R, S))
        return In(qt(), { ...Hn(), [e]: { col: R, row: S } }), an(), !0;
    return !1;
  }
  const Ir = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Dt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Dt.setAttribute("aria-label", "Edit the dashboard"), Dt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', m.appendChild(Dt);
  let Ln = !1, ga = !1, Ia = !1, An = null, Ha = !1;
  const Ko = {}, cn = (e, n) => {
    if (Ko[e] === n) return;
    Ko[e] = n;
    const r = Dt.querySelector('[data-tray="' + e + '"]');
    r.innerHTML = n, Qt(r);
  }, On = (e, n) => '<span class="tfTrayName"><span class="activityRowName">' + ie(Le(e)) + '</span><span class="activityRowMeta">' + ie(n) + "</span></span>", _l = (e, n, r) => '<li class="tfTrayFav' + (n ? " off" : "") + '" data-tray-fav="' + ie(e) + '"><span class="tfTrayGrip" aria-hidden="true">' + rd + '</span><span class="tfIcon"' + Yt(e, na(e)) + "></span>" + On(e, n ? "Hidden" + (xt.get(e) ? " · " + xt.get(e) : "") : xt.get(e) || Ut(e)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + ie(e) + '" aria-pressed="' + !n + '" aria-label="' + (n ? "Show " : "Hide ") + ie(Le(e)) + ' on the dashboard">' + (n ? Rc : ef) + "</button>" + (r ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + ie(e) + '" aria-label="Remove ' + ie(Le(e)) + ' from favourites">' + Nc + "</button>" : "<span></span>") + "</li>";
  function bs(e, n, r, d) {
    const p = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(w).filter((h) => n(h) && !r.has(h) && w[h].state !== "unavailable").filter((h) => {
      const x = (Le(h) + " " + (xt.get(h) || "") + " " + h).toLowerCase();
      return p.every((S) => x.includes(S));
    }).sort((h, x) => (xt.get(h) || "~").localeCompare(xt.get(x) || "~") || Le(h).localeCompare(Le(x))).slice(0, 40).map((h) => '<li><button class="tfTrayPickItem" type="button" ' + d + '="' + ie(h) + '"><span class="tfIcon"' + Yt(h, na(h)) + "></span>" + On(h, xt.get(h) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function on() {
    const e = xn && m.classList.contains("tfBoard");
    if (Dt.classList.toggle("open", e), Dt.classList.toggle("tucked", e && Ln), Dt.toggleAttribute("inert", !e), e || (Ha = !1), qr(), !e) return;
    const n = Dt.querySelector("[data-tray-tuck]");
    n.innerHTML = Ln ? Mc : Bc, n.setAttribute("aria-expanded", String(!Ln)), n.setAttribute("aria-label", Ln ? "Show the edit tray" : "Tuck the edit tray away");
    const r = qt().hidden.filter((h) => ya().some((x) => x.key === h));
    cn("cards", '<div class="sectionLabel">Hidden cards</div>' + (r.length ? '<div class="tfTrayCards">' + r.map((h) => '<button class="tfTrayCard" type="button" data-tray-card="' + ie(h) + '" aria-label="' + ie(ma(h)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + rd + "</span>" + ie(ma(h)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide wait here.</p>')), cn("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (qt().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Ha + '">' + (Ha ? "Hide the phone" : "Show the phone") + "</button>");
    const d = new Set(V.favHidden || []), p = jn(), y = [...p, ...[...d].filter((h) => !p.includes(h) && w[h])];
    cn("favs", y.map((h) => _l(h, d.has(h), p.includes(h))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Dt.querySelector('[data-pick="tiles"]').hidden = !Ia, Dt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(Ia)), Ia && cn("tilepick", bs(Dt.querySelector("[data-tile-search]").value, (h) => ol.includes(h.split(".")[0]), new Set(Qa()), "data-tile-pick")), Dt.querySelector('[data-pick="favs"]').hidden = !ga, Dt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(ga)), ga && cn("pick", bs(Dt.querySelector("[data-fav-search]").value, (h) => Ir.test(h), new Set(jn()), "data-fav-pick")), cn("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (_t() ? " on" : "") + '" type="button" role="switch" aria-checked="' + _t() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const to = (e) => {
    V = { ...V, ...e }, Dn(), yn(), on();
  };
  function Ti(e, n) {
    const r = V, d = new Set(V.favHidden || []);
    n ? d.delete(e) : d.add(e), to({ favHidden: [...d] }), n ? Fn(Le(e) + " put back") : Fn(Le(e) + " hidden", eo(r));
  }
  const ws = (e) => {
    const n = V;
    to({ favourites: jn().filter((r) => r !== e), favHidden: (V.favHidden || []).filter((r) => r !== e) }), Fn(Le(e) + " removed from favourites", eo(n));
  }, xs = (e) => {
    to({ favourites: [...jn().filter((n) => n !== e), e], favHidden: (V.favHidden || []).filter((n) => n !== e) }), Fn(Le(e) + " added to favourites");
  };
  Dt.addEventListener("click", (e) => {
    var r;
    const n = e.target.closest("button");
    n && (n.hasAttribute("data-tray-done") ? tr(!1) : n.hasAttribute("data-tray-tuck") ? (Ln = !Ln, on()) : n.hasAttribute("data-phone-toggle") ? (Ha = !Ha, on(), Ha && ((r = un.querySelector("[data-phone-key]")) == null || r.focus({ preventScroll: !0 }))) : n.dataset.trayCard ? e.detail === 0 && (Ba(n.dataset.trayCard), on()) : n.dataset.favEye ? Ti(n.dataset.favEye, n.getAttribute("aria-pressed") !== "true") : n.dataset.favRemove ? ws(n.dataset.favRemove) : n.hasAttribute("data-fav-add") ? (ga = !ga, on(), ga && Dt.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : n.dataset.favPick ? xs(n.dataset.favPick) : n.hasAttribute("data-tile-add") ? (Ia = !Ia, on(), Ia && Dt.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : n.dataset.tilePick ? gs(n.dataset.tilePick) : n.hasAttribute("data-fav-suggest") && to({ suggest: !_t() }));
  }), Dt.addEventListener("input", (e) => {
    e.target.matches("[data-fav-search],[data-tile-search]") && on();
  }), Dt.addEventListener("keydown", (e) => {
    var r, d;
    const n = !!((d = (r = e.target).closest) != null && d.call(r, '[data-pick="tiles"],[data-tile-add]'));
    e.key !== "Escape" || !(n ? Ia : ga) || (e.stopPropagation(), n ? Ia = !1 : ga = !1, on(), Dt.querySelector(n ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function ys(e, n, r, d) {
    e.preventDefault();
    const p = e.clientX, y = e.clientY;
    let h = null, x = 0;
    const S = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), R = (B) => {
      if (!h) {
        if (Math.hypot(B.clientX - p, B.clientY - y) < 4) return;
        h = n.cloneNode(!0), h.classList.add("tfTrayGhost"), h.style.width = n.offsetWidth + "px", m.appendChild(h);
      }
      h.style.transform = "translate(" + (B.clientX - 24) + "px," + (B.clientY - 24) + "px)";
      const Y = !Ln && B.clientX >= Dt.getBoundingClientRect().left;
      if (r === "card") {
        const de = _.getBoundingClientRect(), { w: pe } = Ra(_.clientWidth);
        Et = !Y && B.clientX >= de.left && B.clientX <= de.right && B.clientY >= de.top + xa ? { key: d, col: Math.max(0, Math.floor((B.clientX - de.left) / (pe + Vt))), row: Math.max(0, Math.floor((B.clientY - de.top - xa) / Da)), fromTray: !0 } : null, x || (x = requestAnimationFrame(() => {
          x = 0, an();
        }));
        return;
      }
      const ye = _.querySelector(".tfDash-favs"), Re = ye == null ? void 0 : ye.getBoundingClientRect();
      if (An = null, Re && !Y && B.clientX >= Re.left && B.clientX <= Re.right && B.clientY >= Re.top && B.clientY <= Re.bottom) {
        let de = 1 / 0;
        ye.querySelectorAll('[data-k^="fav:"]').forEach((pe, O) => {
          const Ae = pe.getBoundingClientRect(), Ne = Math.hypot(B.clientX - (Ae.left + Ae.width / 2), B.clientY - (Ae.top + Ae.height / 2));
          Ne < de && (de = Ne, An = { i: O, r: Ae, after: B.clientX > Ae.left + Ae.width / 2 });
        }), An || (An = { i: 0, r: null, after: !1 });
      }
      An != null && An.r ? (S.isConnected || m.appendChild(S), Object.assign(S.style, { left: (An.after ? An.r.right : An.r.left) - 2 + "px", top: An.r.top + 8 + "px", height: An.r.height - 16 + "px" })) : S.remove();
    }, H = () => {
      if (window.removeEventListener("pointermove", R), window.removeEventListener("pointerup", H), window.removeEventListener("pointercancel", H), cancelAnimationFrame(x), h == null || h.remove(), S.remove(), r === "card") {
        if (!h) Ba(d);
        else if (Et != null && Et.fromTray) {
          an();
          const de = qt(), pe = Hn();
          Et = null, In({ ...de, hidden: de.hidden.filter((O) => O !== d) }, pe), Fn(ma(d) + " put back");
        }
        Et = null, an(), yn(), on();
        return;
      }
      if (!An) return;
      const B = new Set(V.favHidden || []);
      B.delete(d);
      const Y = jn().filter((de) => de !== d), ye = Y.filter((de) => !B.has(de)), Re = ye[Math.min(An.i + (An.after ? 1 : 0), ye.length)];
      Y.splice(Re ? Y.indexOf(Re) : Y.length, 0, d), An = null, to({ favourites: Y, favHidden: [...B] }), Fn(Le(d) + " put back");
    };
    window.addEventListener("pointermove", R), window.addEventListener("pointerup", H), window.addEventListener("pointercancel", H);
  }
  const ks = { sums: 201, wx: 286, favs: 363, areas: 323, act: 363, energy: 301, avg: 182 }, Hr = 140, Mo = 252, Ma = 0.8, Fr = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line" }, un = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  un.setAttribute("aria-label", "Phone order"), un.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Nc + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', m.appendChild(un);
  let Or = "";
  function qr() {
    var x;
    const e = Ha && xn && m.classList.contains("tfBoard") && !Ln;
    if (un.classList.toggle("open", e), un.toggleAttribute("inert", !e), !e) return;
    const n = Go().filter((S) => !qt().hidden.includes(S.key)), r = n.length, d = (S) => Math.round(S * Ma * 10) / 10 + "px", p = (S, R) => {
      const H = S.el.classList.contains("tfDac"), B = S.tile ? H ? Mo : Hr : ks[S.key] || Hr;
      return '<button class="tfPhoneBlock' + (S.tile ? " tile" : "") + '" type="button" data-phone-key="' + ie(S.key) + '" style="min-height:' + d(B) + '" aria-label="' + ie(ma(S.key) + ", " + (R + 1) + " of " + r + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (S.tile ? Yt(S.key, na(S.key)) : Yt(S.key, Fr[S.key])) + '></span><span class="tfPhoneName">' + ie(ma(S.key)) + "</span></button>";
    }, y = '<div class="tfPhoneTitle">' + ie(((x = _.querySelector(".tfDashTitle")) == null ? void 0 : x.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + d(ks.sums) + '"><span class="tfPhoneName">' + ie(ma("sums")) + "</span></div>" + n.map(p).join("");
    if (un.querySelector('[data-phone="note"]').innerHTML = qt().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", y === Or) return;
    Or = y;
    const h = un.querySelector('[data-phone="list"]');
    h.innerHTML = y, Qt(h);
  }
  function Ms(e, n) {
    var r;
    Ci({ ...qt(), phone: e }), on(), n && ((r = un.querySelector('[data-phone-key="' + CSS.escape(n) + '"]')) == null || r.focus({ preventScroll: !0 }));
  }
  const Li = () => [...un.querySelectorAll("[data-phone-key]")].map((e) => e.dataset.phoneKey);
  function El(e, n) {
    e.preventDefault();
    const r = n.parentElement, d = un.querySelector(".tfPhoneScreen"), p = Li().join();
    n.classList.add("moving");
    const y = (x) => {
      const S = d.getBoundingClientRect();
      x.clientY > S.bottom - 40 ? d.scrollTop += 12 : x.clientY < S.top + 40 && (d.scrollTop -= 12);
      const R = [...r.querySelectorAll("[data-phone-key]")].find((Y) => {
        const ye = Y.getBoundingClientRect();
        return Y !== n && x.clientX >= ye.left && x.clientX <= ye.right && x.clientY >= ye.top && x.clientY <= ye.bottom;
      });
      if (!R) return;
      const H = R.getBoundingClientRect(), B = R.classList.contains("tile") ? x.clientX < H.left + H.width / 2 : x.clientY < H.top + H.height / 2;
      r.insertBefore(n, B ? R : R.nextSibling);
    }, h = () => {
      window.removeEventListener("pointermove", y), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h), n.classList.remove("moving");
      const x = Li();
      Or = "", x.join() !== p ? Ms(x) : qr();
    };
    window.addEventListener("pointermove", y), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  }
  un.addEventListener("pointerdown", (e) => {
    const n = e.target.closest("[data-phone-key]");
    n && e.button <= 0 && El(e, n);
  }), un.addEventListener("click", (e) => {
    var r;
    const n = e.target.closest("button");
    if (n != null && n.hasAttribute("data-phone-close"))
      Ha = !1, on(), (r = Dt.querySelector("[data-phone-toggle]")) == null || r.focus({ preventScroll: !0 });
    else if (n != null && n.hasAttribute("data-phone-reset")) {
      const { phone: d, ...p } = qt();
      Ci(p), on();
    }
  }), un.addEventListener("keydown", (e) => {
    var h, x, S, R;
    if (e.key === "Escape") {
      e.stopPropagation(), Ha = !1, on(), (h = Dt.querySelector("[data-phone-toggle]")) == null || h.focus({ preventScroll: !0 });
      return;
    }
    const n = (R = (S = (x = e.target).closest) == null ? void 0 : S.call(x, "[data-phone-key]")) == null ? void 0 : R.dataset.phoneKey, r = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!n || !r) return;
    e.preventDefault();
    const d = Li(), p = d.indexOf(n), y = p + r;
    y < 0 || y >= d.length || ([d[p], d[y]] = [d[y], d[p]], Ms(d, n));
  });
  function Wr(e, n) {
    e.preventDefault();
    const r = n.parentElement;
    n.classList.add("moving");
    const d = (y) => {
      const h = [...r.children].find((x) => {
        const S = x.getBoundingClientRect();
        return x !== n && y.clientY >= S.top && y.clientY <= S.bottom;
      });
      if (h) {
        const x = h.getBoundingClientRect();
        r.insertBefore(n, y.clientY < x.top + x.height / 2 ? h : h.nextSibling);
      }
    }, p = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), n.classList.remove("moving");
      const y = new Set(jn());
      Ko.favs = null, to({ favourites: [...r.children].map((h) => h.dataset.trayFav).filter((h) => y.has(h)) });
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  Dt.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    const n = e.target.closest("[data-tray-card]"), r = e.target.closest(".tfTrayFav");
    n ? ys(e, n, "card", n.dataset.trayCard) : r && e.target.closest(".tfTrayGrip") ? Wr(e, r) : r != null && r.classList.contains("off") && !e.target.closest("button") && ys(e, r, "fav", r.dataset.trayFav);
  });
  function Fa(e) {
    if (!xn || e.button !== 0 || e.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const n = e.target.closest(".tfBoardItem"), r = n && ya().find((B) => B.el === n);
    if (!r || er.includes(r.key)) return;
    const d = Tn.get(r.key), { w: p } = Ra(_.clientWidth);
    if (!d) return;
    e.preventDefault(), da();
    const y = e.clientX, h = e.clientY;
    let x = !1, S = 0;
    const R = (B) => {
      const Y = B.clientX - y, ye = B.clientY - h;
      if (!x) {
        if (Math.hypot(Y, ye) < 4) return;
        x = !0, Et = { key: r.key, col: d.col, row: d.row }, n.classList.add("tfDragging");
      }
      n.style.transform = "translate(" + Y + "px," + ye + "px)", Et.col = Math.round((d.x + Y) / (p + Vt)), Et.row = Math.round((d.y + ye - xa) / Da), S || (S = requestAnimationFrame(() => {
        S = 0, an();
      }));
    }, H = () => {
      window.removeEventListener("pointermove", R), window.removeEventListener("pointerup", H), window.removeEventListener("pointercancel", H), x && (cancelAnimationFrame(S), an(), n.classList.remove("tfDragging"), n.style.transform = "", Et = null, In(qt(), Hn()), an(), yn());
    };
    window.addEventListener("pointermove", R), window.addEventListener("pointerup", H), window.addEventListener("pointercancel", H);
  }
  function Cs(e = !1) {
    const n = _ == null ? void 0 : _.querySelector(".tfDashGraph svg[data-graph]");
    if (!(n != null && n.clientWidth)) return;
    const r = n.dataset.graph + "@" + n.clientWidth + "x" + n.clientHeight;
    n.dataset.drawn !== r && (n.dataset.drawn = r, Yr(n.dataset.graph, n).then(() => {
      e && xi(n);
    }));
  }
  function Ss() {
    var x, S, R;
    Je = Oi.model(o()), Gi(), w = Je.states, w[(x = V.sources) == null ? void 0 : x.grid] && (Je.grid = V.sources.grid), w[(S = V.sources) == null ? void 0 : S.alarm] && (Je.security.alarms = [V.sources.alarm]), C.forEach((H, B) => {
      const Y = w[B], ye = (Y == null ? void 0 : Y.attributes) || {};
      if (!Y || Date.now() - H.at > 2 * 60 * 1e3) {
        C.delete(B);
        return;
      }
      H.pos != null && Y.state !== "opening" && Y.state !== "closing" && Math.abs(Rt(B) - H.pos) < 1 && delete H.pos, H.tilt != null && Math.abs((ye.current_tilt_position ?? -1) - H.tilt) < 1 && delete H.tilt, H.pos == null && H.tilt == null && C.delete(B);
    });
    const e = [];
    let n = 0;
    const r = Lr();
    ia = r.filter((H) => H.room).map((H) => H.room), ia.some((H) => H.id === ge) || (ge = ((R = ia[0]) == null ? void 0 : R.id) || null);
    const d = Te === "weather" ? { key: "weather", name: "Weather" } : Te && r.find((H) => H.key === Te);
    if (d || (Te = null), m.classList.toggle("tfAreaOpen", !!d), m.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), m.classList.toggle("tfDash", !d), xt = /* @__PURE__ */ new Map(), Je.rooms.forEach((H) => [...H.actions, ...H.plugs, ...H.readings, ...H.openings, ...H.solar, ...H.plants.flatMap((B) => [B.id, ...B.readings])].forEach((B) => xt.set(B, H.name))), !d) return zo(e, wo());
    if (e.push({ key: "areahead", html: Ts(d, ++n) }), d.key === "weather")
      return e.weather = ++n, e;
    const p = d.ids, y = d.room ? d.room.id : d.key, h = d.room;
    return h != null && h.solar.length && e.push({ key: "energy:" + h.id, html: K(h, ++n) }), h && (h.readings.length || h.plugs.length || h.power != null) && e.push({ key: "readings:" + h.id, html: I(h, ++n) }), h == null || h.plants.forEach((H) => e.push({ key: "plant:" + H.id, html: he(H, ++n) })), p.length && e.push({ key: "block:" + y, order: ++n, tiles: p.map((H) => ({ key: H, html: Xt(H) })) }), e;
  }
  const Ts = (e, n) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + n + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Mc + '</button><div class="settingsTitle">' + ie(e.name) + "</div></div>";
  let Co = 0, Ls = null;
  const So = (e) => e === "weather" ? wn.wx : _.querySelector(".tfAreas");
  function As(e) {
    var n, r;
    Te || (Co = ao().scrollTop, Ls = ((n = So(e)) == null ? void 0 : n.getBoundingClientRect().top) ?? null), Te = e, e.startsWith("room:") && (ge = e.slice(5)), Zt(), ao().scrollTop = 0, (r = _.querySelector("[data-area-back]")) == null || r.focus({ preventScroll: !0 });
  }
  let $o = null;
  function Xo(e, n) {
    if ($o == null || $o(), n == null) return;
    const r = ao(), d = performance.now() + 1500, p = ["wheel", "touchstart", "pointerdown", "keydown"];
    let y = 0;
    const h = () => {
      cancelAnimationFrame(y), p.forEach((S) => window.removeEventListener(S, h, !0)), $o = null;
    }, x = () => {
      const S = e();
      if (S != null && S.isConnected) {
        const R = S.getBoundingClientRect().top - n;
        Math.abs(R) > 0.5 && (r.scrollTop += R);
      }
      performance.now() < d ? y = requestAnimationFrame(x) : h();
    };
    p.forEach((S) => window.addEventListener(S, h, { capture: !0, passive: !0 })), $o = h, x();
  }
  function no() {
    var r;
    const e = Te;
    Te = null, Zt(), ao().scrollTop = Co, Xo(() => So(e), Ls);
    const n = e.startsWith("room:") ? _.querySelector('.tfAreaPanel[data-area="' + CSS.escape(e.slice(5)) + '"]') : e === "weather" ? wn.wx.querySelector(".wbOpenPage") : _.querySelector('[data-k="sum:' + CSS.escape(e) + '"]');
    (r = (n == null ? void 0 : n.querySelector("[data-go]")) || n) == null || r.focus({ preventScroll: !0 });
  }
  const Bt = (e) => e.wrap ? e.wrap(e.tiles.map((n) => n.html).join(""), e) : '<div class="tfBlock" data-tf data-k="' + ie(e.key) + '" style="order:' + e.order + '"><div class="tfActions">' + e.tiles.map((n) => n.html).join("") + "</div></div>", To = (e) => e.map((n) => n.key + (n.tiles ? "(" + n.tiles.map((r) => r.key).join(",") + ")" : "")).join(";");
  function ao() {
    for (let e = m.parentElement || m.getRootNode().host; e; e = e.parentElement || e.getRootNode().host) {
      const n = getComputedStyle(e).overflowY;
      if ((n === "auto" || n === "scroll") && e.scrollHeight > e.clientHeight) return e;
    }
    return document.scrollingElement;
  }
  function nr(e) {
    const n = ao(), r = (x) => {
      const S = x.getBoundingClientRect();
      return S.height && S.bottom > 0 && S.top < window.innerHeight;
    }, d = [..._.children, ..._.querySelectorAll(".tfDashTiles > *")].find((x) => !x.matches(".tfDashTiles") && r(x)), p = d == null ? void 0 : d.dataset.k, y = d == null ? void 0 : d.getBoundingClientRect().top;
    e();
    const h = d != null && d.isConnected ? d : p && _.querySelector('[data-k="' + CSS.escape(p) + '"]');
    h != null && h.isConnected && y != null && (n.scrollTop += h.getBoundingClientRect().top - y);
  }
  function Zt() {
    if (!v || !_) return;
    const e = Ss();
    _.querySelectorAll("[data-tf]").forEach((r) => r.remove()), bn.clear();
    const n = document.createElement("div");
    n.innerHTML = e.map((r) => r.tiles ? Bt(r) : r.html).join(""), e.forEach((r) => r.tiles ? r.tiles.forEach((d) => bn.set(d.key, d.html)) : bn.set(r.key, r.html)), Cn = To(e), _.append(...n.children), qi(e.weather), Wi(), Yo.disconnect(), an(), Qt(_), rr(_), en(_), U(), j && Yr(j.id), dr(), _i(), Qo(), requestAnimationFrame(G);
  }
  const ar = (e) => {
    var r;
    const n = a.activeElement && e.contains(a.activeElement) ? a.activeElement : null;
    return n && { label: n.getAttribute("aria-label"), act: (r = n.dataset) == null ? void 0 : r.act };
  }, or = (e, n) => {
    var r;
    n && ((r = n.label && e.querySelector('[aria-label="' + CSS.escape(n.label) + '"]') || n.act && e.querySelector('[data-act="' + CSS.escape(n.act) + '"]')) == null || r.focus({ preventScroll: !0 }));
  };
  function _s(e, n) {
    const r = document.createElement("div");
    r.innerHTML = n;
    const d = r.firstElementChild, p = ar(e);
    e.replaceWith(d), Qt(d), rr(d), en(d), or(d, p);
  }
  function yn() {
    !v || !_ || Et || nr(Dl);
  }
  function Dl() {
    if (!_.querySelector("[data-tf]")) {
      Zt();
      return;
    }
    const e = Ss();
    if (To(e) !== Cn) {
      Zt();
      return;
    }
    const n = (r) => [...Oe.keys()].some((d) => {
      const p = d.slice(d.indexOf("|") + 1);
      return r === p || r.endsWith(":" + p);
    });
    e.forEach((r) => (r.tiles || [r]).forEach((d) => {
      if (bn.get(d.key) === d.html || n(d.key)) return;
      const p = _.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (p) {
        if (bn.set(d.key, d.html), j && j.key === d.key && p.querySelector(".tfOpen")) {
          p.querySelector(".tfOpen .activityRowMeta").textContent = fo(j.id);
          return;
        }
        _s(p, d.html), j && j.key === d.key && Yr(j.id), d.key.startsWith("energy:") && dr();
      }
    })), _i(), Qo(), Bn(), U(), Ye == null || Ye.update(), nt == null || nt.forEach((r) => r.update()), m.classList.contains("tfDash") && Na(), requestAnimationFrame(G);
  }
  const Vr = {
    light: (e) => [["Brightness", e.brightness != null ? Math.round(e.brightness / 2.55) + "%" : null], ["Colour temperature", e.color_temp_kelvin ? Number(e.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", e.color_mode && vt(e.color_mode)]],
    climate: (e) => [["Current temperature", He(e.current_temperature) + " °C"], ["Target", He(e.temperature) + " °C"], ["Action", vt(e.hvac_action)]],
    cover: (e) => [["Position", e.current_position != null ? e.current_position + "% open" : null], ["Tilt", e.current_tilt_position != null ? e.current_tilt_position + "% open" : null]],
    humidifier: (e) => [["Current humidity", e.current_humidity + "%"], ["Target", e.humidity + "%"], ["Mode", vt(e.mode)]],
    media_player: (e) => [["Title", e.media_title], ["Artist", e.media_artist], ["Volume", e.volume_level != null ? Math.round(e.volume_level * 100) + "%" : null], ["Source", e.source]],
    vacuum: (e) => [["Battery", e.battery_level + "%"], ["Fan speed", vt(e.fan_speed)], ["Rooms", (e.rooms || []).join(", ") || null]],
    lock: (e) => [["Changed by", e.changed_by]],
    alarm_control_panel: (e) => [["Changed by", e.changed_by]],
    valve: () => [],
    plant: (e) => [["Moisture", e.moisture + "%"], ["Light", Number(e.brightness).toLocaleString() + " lx"], ["Temperature", He(e.temperature) + " °C"], ["Fertility", e.conductivity + " µS/cm"], ["Problems", e.problem === "none" ? "None" : vt(e.problem)]],
    weather: (e) => [["Temperature", e.temperature != null ? e.temperature + " " + (e.temperature_unit || "°C") : null], ["Humidity", e.humidity != null ? e.humidity + "%" : null], ["Wind", e.wind_speed != null ? e.wind_speed + " " + (e.wind_speed_unit || "km/h") : null], ["Pressure", e.pressure != null ? e.pressure + " " + (e.pressure_unit || "hPa") : null]]
  }, Rl = (e) => {
    var r;
    const n = (((r = Vr[e.split(".")[0]]) == null ? void 0 : r.call(Vr, mt(e))) || []).filter(([, d]) => d != null && d !== "");
    return n.length ? '<div class="tfMoreRows">' + n.map(([d, p]) => '<div class="tfMoreRow"><span>' + ie(d) + "</span><span>" + ie(p) + "</span></div>").join("") + "</div>" : "";
  }, Nl = (e) => Ii(e) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Es(e, n = {}, r = !1) {
    return '<div class="tfMoreList">' + e.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + ie(d.name) + '</div><div class="tfMoreTiles' + (r ? " single" : "") + '">' + d.ids.map((p) => Ui(p, n)).join("") + "</div></div>").join("") + "</div>";
  }
  const Qe = document.createElement("div");
  Qe.className = "tfMoreBackdrop", Qe.hidden = !0, m.appendChild(Qe);
  const Jo = (e, n) => {
    for (let r = e; r && r !== Qe; r = r.parentElement) {
      const d = getComputedStyle(r).overflowY;
      if ((d === "auto" || d === "scroll") && r.scrollHeight > r.clientHeight + 1 && (n < 0 ? r.scrollTop > 0 : r.scrollTop + r.clientHeight < r.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Ai = null;
  Qe.addEventListener("touchstart", (e) => {
    Ai = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: !0 }), Qe.addEventListener("touchmove", (e) => {
    var p, y;
    if (!Ai || e.touches.length > 1 || (y = (p = e.target).closest) != null && y.call(p, "input,textarea,select")) return;
    const n = e.touches[0], r = Ai.x - n.clientX, d = Ai.y - n.clientY;
    Ai = { x: n.clientX, y: n.clientY }, Math.abs(d) >= Math.abs(r) && !Jo(e.target, d) && e.preventDefault();
  }, { passive: !1 }), Qe.addEventListener("wheel", (e) => {
    Jo(e.target, e.deltaY) || e.preventDefault();
  }, { passive: !1 });
  function ir() {
    const e = Qe.querySelector(".tfMorePair"), n = Qe.querySelector(".tfMore");
    e == null || e.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - n.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", ir, { passive: !0 }), v && St();
  let Oa = [];
  const Ds = (e) => e === "favourites" || e.startsWith("summary:") || e.startsWith("group:");
  function Bl(e) {
    const n = (S, R = "") => '<div class="tfMoreHead">' + (b != null && b.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + od + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + ie(S) + "</div>" + R + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Wh + "</button></div>", r = (S, R) => '<div class="tfMoreNow"><div class="tfMoreState">' + ie(S) + "</div>" + (R ? '<div class="tfMoreSub">' + ie(R) + "</div>" : "") + "</div>", d = Es;
    if (e === "favourites") {
      const S = jn(), R = new Set(S), H = [{ name: "Starred", ids: S }, { name: "Home", ids: Je.homeVacuums }, { name: "Security", ids: [...Je.security.alarms, ...Je.security.locks] }, ...Je.rooms.map((B) => ({ name: B.name, ids: [...B.actions, ...B.plugs] }))].map((B, Y) => Y ? { ...B, ids: B.ids.filter((ye) => !R.has(ye)) } : B).filter((B) => B.ids.length);
      return [n("Favourites"), r(S.length ? S.length + " starred" : "None starred"), d(H, { star: !0 }, !0)];
    }
    const p = (S, { name: R = "", alert: H = !1, plain: B = !1 } = {}) => {
      const Y = B ? [] : S.filter((de) => ol.includes(de.split(".")[0])), ye = S.filter((de) => !Y.includes(de)), Re = (de) => de.startsWith("vacuum.") && mt(de).battery_level != null ? mt(de).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (R ? '<div class="tfMoreGroupName">' + ie(R) + "</div>" : "") + '<div class="tfMoreActions">' + Y.map((de) => Xt(de, !0)).join("") + ye.map((de) => Ui(de, { plain: B, alert: H, say: B ? Re(de) : null })).join("") + "</div></div>";
    };
    if (e.startsWith("summary:")) {
      const S = wo().find((Y) => Y.key === e.slice(8));
      if (!S) return null;
      const R = S.key === "light" ? (S.groups || []).flatMap((Y) => Y.ids) : [], H = R.some((Y) => {
        var ye;
        return ((ye = w[Y]) == null ? void 0 : ye.state) === "on";
      }), B = R.length ? '<button class="primary" type="button" data-acts="' + ha(R.map((Y) => ["light", H ? "turn_off" : "turn_on", Y])) + '">' + (H ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(S.name), '<div class="tfMoreNowRow">' + r(S.value) + B + "</div>", ...(S.groups || []).map((Y) => p(Y.ids, { name: Y.name === S.name ? "" : Y.name, alert: Y.alert, plain: S.plain }))];
    }
    if (e.startsWith("group:")) {
      const [, S, R] = e.split(":"), H = Je.rooms.find((ye) => ye.id === S), B = H && mi(H).find((ye) => ye.key === R);
      if (!B) return null;
      const Y = B.acts ? '<button class="primary" type="button" data-acts="' + ha(B.acts) + '">' + (B.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(H.name + " " + B.label.toLowerCase()), '<div class="tfMoreNowRow">' + r(B.value) + Y + "</div>", p(yr(H, R))];
    }
    const y = e.split(".")[0], h = w[e], x = ol.includes(y) ? fi(e) : { sections: [] };
    return [
      n(Le(e)),
      r(Ut(e), h.last_changed && po(Date.parse(h.last_changed))),
      (b == null ? void 0 : b.at) && '<svg class="tfGraph tfDay" data-day="' + ie(e) + '" role="img" aria-label="' + ie(Le(e)) + ', last 24 hours"></svg>',
      y === "cover" && '<div data-cover-art="' + ie(e) + '"></div>',
      ...x.sections.filter(Boolean),
      Rs(e) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(b != null && b.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Bc + "</button>"
    ].filter(Boolean);
  }
  const Rs = (e) => Ds(e) ? "" : Rl(e) + Nl(e);
  let oo = "";
  function qa(e) {
    var n;
    b && (b.details = e, _i(), (n = Qe.querySelector(e ? "[data-details-close]" : "[data-details]")) == null || n.focus({ preventScroll: !0 }));
  }
  const va = (e) => {
    const n = w[e], r = Rt(e), d = ta(e);
    return { kind: ad(n), name: Le(e), text: Ut(e), pos: r, target: Math.abs(d - r) > 0.5 ? d : null, moving: n.state === "opening" || n.state === "closing", tilt: ho(e) ?? 100, canSet: lt(e, Ac) };
  };
  function rr(e) {
    e.querySelectorAll("[data-cover-art]").forEach((n) => {
      const r = n.dataset.coverArt, d = n.dataset.artKey || "more:" + r;
      let p = N.get(d);
      p || (p = qh({ onMove: (y) => ni(r, y), onSet: (y) => {
        ni(r, y), ai("pos", r);
      } }), p.coverId = r, N.set(d, p)), n.replaceWith(p.el), p.update(va(r));
    });
  }
  const Lo = (e) => [...N.values()].filter((n) => n.coverId === e), zr = () => N.forEach((e) => {
    w[e.coverId] && e.update(va(e.coverId));
  }), Qo = () => {
    N.forEach((e, n) => {
      e.el.isConnected || (e.destroy(), N.delete(n));
    }), zr();
  };
  function _i() {
    var y, h;
    if (!b || !(Ds(b.id) || w[b.id])) {
      Qe.hidden = !0;
      return;
    }
    if ([...Oe.keys()].some((x) => x.endsWith("|" + b.id))) {
      zr();
      return;
    }
    const e = Bl(b.id), n = Qe.querySelector(".tfMore");
    if (!e) {
      Va();
      return;
    }
    const r = ar(Qe), d = Rs(b.id), p = b.frame ? b.frame.wide : b.id.startsWith("summary:") || b.id.startsWith("group:");
    if (Qe.hidden || !n || e.length !== Oa.length || n.classList.contains("wide") !== p) {
      const x = jr ? b.scroll || 0 : !Qe.hidden && n ? n.scrollTop : 0;
      Qe.innerHTML = '<div class="tfMorePair' + (Qe.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (p ? " wide" : "") + '"' + (b.frame ? ' style="height:' + b.frame.h + 'px"' : "") + ">" + e.join("") + "</section>" + (d ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + od + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + d + "</div></div></aside>" : "") + "</div>", oo = d, Qe.classList.toggle("wide", p), Qe.hidden = !1, ir(), rr(Qe), en(Qe), Qt(Qe), Qe.querySelectorAll("[data-day]").forEach((S) => Bs(S.dataset.day, S, b.at)), x && (Qe.querySelector(".tfMore").scrollTop = x), or(Qe, r), Qe.contains(a.activeElement) || (y = Qe.querySelector("[data-more-close]")) == null || y.focus({ preventScroll: !0 });
    } else {
      if (e.forEach((x, S) => {
        var B, Y;
        if (x === Oa[S] || x.includes("data-cover-art") || n.children[S].contains((Y = (B = a.activeElement) == null ? void 0 : B.matches) != null && Y.call(B, "input,select") ? a.activeElement : null) || [...Oe.keys()].some((ye) => n.children[S].querySelector('[data-drag="' + CSS.escape(ye) + '"]'))) return;
        const R = document.createElement("div");
        R.innerHTML = x;
        const H = R.firstElementChild;
        n.children[S].replaceWith(H), Qt(H), en(H);
      }), d !== oo) {
        const x = Qe.querySelector(".tfMoreSideBody");
        x && (x.innerHTML = d), oo = d;
      }
      Qe.contains(a.activeElement) || or(Qe, r);
    }
    (h = Qe.querySelector(".tfMorePair")) == null || h.classList.toggle("details", !!(b.details && d)), Oa = e, zr();
  }
  setInterval(() => {
    b && _i();
  }, 15 * 1e3);
  function Wa(e, n) {
    var p;
    const r = !!(b && n && Qe.contains(n)), d = r && Qe.querySelector(".tfMore");
    r && (b.scroll = d.scrollTop), b = { id: e, opener: r ? b.opener : n, back: r ? b : null, frame: r ? b.frame || { wide: d.classList.contains("wide"), h: d.offsetHeight } : null, at: Number((p = n == null ? void 0 : n.dataset) == null ? void 0 : p.at) || null }, sr();
  }
  let jr = !1;
  function sr() {
    Oa = [], jr = !Qe.hidden, N.forEach((e, n) => {
      n !== b.id && Qe.contains(e.el) && (e.destroy(), N.delete(n));
    }), _i(), jr = !1;
  }
  function Va() {
    var r, d, p, y, h, x;
    const e = b == null ? void 0 : b.opener;
    b = null, N.forEach((S, R) => {
      Qe.contains(S.el) && (S.destroy(), N.delete(R));
    }), dn.forEach((S, R) => {
      R.startsWith("more:") && dn.delete(R);
    }), Qe.hidden = !0, Qe.innerHTML = "";
    const n = { preventScroll: !0 };
    e != null && e.isConnected ? e.focus(n) : (r = e == null ? void 0 : e.dataset) != null && r.more ? (d = _.querySelector('[data-more="' + CSS.escape(e.dataset.more) + '"]')) == null || d.focus(n) : (p = e == null ? void 0 : e.dataset) != null && p.summary ? (y = _.querySelector('[data-summary="' + CSS.escape(e.dataset.summary) + '"]')) == null || y.focus(n) : (h = e == null ? void 0 : e.hasAttribute) != null && h.call(e, "data-favs-edit") && ((x = _.querySelector("[data-favs-edit]")) == null || x.focus(n));
  }
  function Ao(e, n, r, d = {}) {
    const p = n.map((pe) => pe[1]), y = d.zero ? 0 : Math.min(...p), h = Math.max(...p), x = Math.max(120, e.clientWidth || 260), S = Math.max(60, e.clientHeight || 130), R = 8, H = S - 20, B = Date.now() - 24 * 3600 * 1e3, Y = 24 * 3600 * 1e3, ye = (pe) => Math.max(0, Math.min(x, (pe - B) / Y * x)), Re = (pe) => h === y ? (R + H) / 2 : H - (pe - y) / (h - y) * (H - R);
    let de = "M" + ye(n[0][0]).toFixed(1) + " " + Re(n[0][1]).toFixed(1);
    for (let pe = 1; pe < n.length; pe++) de += d.smooth ? "L" + ye(n[pe][0]).toFixed(1) + " " + Re(n[pe][1]).toFixed(1) : "H" + ye(n[pe][0]).toFixed(1) + "V" + Re(n[pe][1]).toFixed(1);
    e.setAttribute("viewBox", "0 0 " + x + " " + S), e.setAttribute("aria-label", r), e.innerHTML = '<path d="' + de + "V" + H + "H" + ye(n[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + de + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (S - 4) + '">24 h ago</text><text x="' + x + '" y="' + (S - 4) + '" text-anchor="end">Now</text>';
  }
  const lr = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, Gr = (e, n) => {
    const r = e.split(".")[0];
    return lr[r] ? lr[r].includes(n) : r === "alarm_control_panel" || r === "climate" || r === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(n) : n === "on";
  }, ei = (e) => {
    const n = e.split(".")[0], r = mt(e).device_class;
    return n === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[r] || (al.includes(r) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[n] || "On";
  }, _o = /* @__PURE__ */ new Map();
  let ca = 0;
  async function Ns(e) {
    let n = _o.get(e);
    if (!n || Date.now() - n.at > 60 * 1e3) {
      let p = [];
      try {
        const y = await P({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        p = ((y == null ? void 0 : y[e]) || []).map((h) => [h.lu != null ? h.lu * 1e3 : Date.parse(h.last_updated || h.last_changed), String(h.s ?? h.state)]).filter(([h]) => Number.isFinite(h));
      } catch {
      }
      p.length || (p = (ra || []).filter((y) => y.entity_id === e).map((y) => [y.when * 1e3, String(y.state)])), n = { at: Date.now(), pts: p }, _o.set(e, n);
    }
    const r = w[e], d = n.pts.slice().sort((p, y) => p[0] - y[0]);
    return r && (!d.length || d[d.length - 1][1] !== r.state) && d.push([Date.parse(r.last_changed) || Date.now(), r.state]), d;
  }
  async function Bs(e, n, r) {
    const d = await Ns(e);
    if (!n.isConnected) return;
    const p = d.map(([Ne, dt]) => [Ne, Number(dt)]);
    if (d.length > 1 && p.every(([, Ne]) => Number.isFinite(Ne))) {
      Ao(n, p, Le(e) + ", last 24 hours");
      return;
    }
    const y = Date.now(), h = y - 864e5, x = Math.max(200, n.clientWidth || 360), S = 62, R = (Ne) => Math.max(0, Math.min(x, (Ne - h) / 864e5 * x)), H = [];
    let B = null;
    d.forEach(([Ne, dt]) => {
      const rn = Gr(e, dt);
      rn && B == null ? B = Math.max(Ne, h) : !rn && B != null && (H.push([B, Math.max(Ne, h)]), B = null);
    }), B != null && H.push([B, y]);
    const Y = _r(e) ? "var(--danger)" : e.startsWith("light.") ? "#ffaa00" : "var(--primary)", ye = ei(e), Re = "tfDayClip" + ++ca, de = H.map(([Ne, dt]) => ye + (dt >= y - 1e3 && Ne <= h + 1e3 ? " all day" : dt >= y - 1e3 ? " since " + kt(Ne) : Ne <= h + 1e3 ? " until " + kt(dt) : " " + kt(Ne) + "–" + kt(dt)));
    let pe = "", O = -1 / 0;
    H.forEach(([Ne], dt) => {
      const rn = de[dt].length * 5.4, Nt = Math.min(R(Ne), x - rn);
      Nt < O + 8 || (pe += '<text x="' + Nt.toFixed(1) + '" y="10">' + ie(de[dt]) + "</text>", O = Nt + rn);
    });
    let Ae = '<text x="' + x + '" y="' + (S - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((Ne) => {
      let dt = new Date(y).setHours(Ne, 0, 0, 0);
      dt > y && (dt -= 864e5), R(dt) > 8 && R(dt) < x - 34 && (Ae += '<text x="' + R(dt).toFixed(1) + '" y="' + (S - 2) + '" text-anchor="middle">' + String(Ne).padStart(2, "0") + "</text>");
    }), n.setAttribute("viewBox", "0 0 " + x + " " + S), n.setAttribute("aria-label", Le(e) + ", last 24 hours: " + (de.length ? de.join(", ") : "no changes")), n.innerHTML = '<clipPath id="' + Re + '"><rect x="0" y="18" width="' + x + '" height="26" rx="8"/></clipPath>' + pe + '<rect x="0" y="18" width="' + x + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + Re + ')">' + H.map(([Ne, dt]) => '<rect x="' + R(Ne).toFixed(1) + '" y="18" width="' + Math.max(2, R(dt) - R(Ne)).toFixed(1) + '" height="26" fill="' + Y + '"/>').join("") + "</g>" + (r && r >= h ? '<line x1="' + R(r).toFixed(1) + '" x2="' + R(r).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + Ae;
  }
  function Ur(e) {
    var d;
    const n = Number((d = w[e]) == null ? void 0 : d.state), r = Date.now();
    if (mt(e).state_class === "total_increasing") {
      const p = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), y = Math.max(1, r - p);
      return [...Array(49)].map((h, x) => p + y * x / 48).map((h) => [h, Math.round(n * Math.pow((h - p) / y, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((p, y) => [r - (48 - y) * 30 * 60 * 1e3, Math.round(n * (0.96 + 0.04 * Math.sin(y / 6)) * 10) / 10]);
  }
  async function Yr(e, n) {
    var ye, Re;
    let r = be.get(e);
    if (e.endsWith("_solar_power")) r = { at: Date.now(), points: Xd() };
    else if (Ii(e)) r = { at: Date.now(), points: Ur(e) };
    else if (!r || Date.now() - r.at > 5 * 60 * 1e3) {
      try {
        const de = new Date(Date.now() - 864e5).toISOString(), pe = await P({ type: "history/history_during_period", start_time: de, entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), O = ((pe == null ? void 0 : pe[e]) || []).map((Ae) => [Ae.lu != null ? Ae.lu * 1e3 : Date.parse(Ae.last_updated || Ae.last_changed), Number(Ae.s ?? Ae.state)]).filter(([Ae, Ne]) => Number.isFinite(Ae) && Number.isFinite(Ne));
        r = { at: Date.now(), points: O };
      } catch {
        r = { at: Date.now(), points: [] };
      }
      be.set(e, r);
    }
    const d = n || _.querySelector('[data-graph="' + CSS.escape(e) + '"]');
    if (!d) return;
    const p = w[e], y = ((ye = p == null ? void 0 : p.attributes) == null ? void 0 : ye.unit_of_measurement) || "", h = r.points.slice(), x = Number(p == null ? void 0 : p.state);
    if (Number.isFinite(x) && !e.endsWith("_solar_power") && h.push([Date.now(), x]), h.length < 2) {
      d.setAttribute("aria-label", Le(e) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const S = h.map((de) => de[1]), R = Math.min(...S), H = Math.max(...S), B = (de) => de.toLocaleString(void 0, { maximumFractionDigits: Math.abs(de) >= 100 ? 0 : 1 }), Y = ((Re = p == null ? void 0 : p.attributes) == null ? void 0 : Re.state_class) === "total_increasing";
    Ao(d, h, Le(e) + ", last 24 hours: " + (Y ? "+" + B(S[S.length - 1] - S[0]) : R === H ? B(R) : B(R) + " to " + B(H)) + (y ? " " + y : ""), { smooth: e.endsWith("_solar_power"), zero: e.endsWith("_solar_power") });
  }
  function dr() {
    const e = _ == null ? void 0 : _.querySelector("[data-solar]");
    if (!e) return;
    const n = Xd();
    Ao(e, n, "Solar, last 24 hours: up to " + He(Math.max(...n.map((r) => r[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Zr(e, n) {
    const r = n.entity_id, d = C.get(r) || {}, p = { open_cover: 100, close_cover: 0, set_cover_position: n.position, toggle: Rt(r) > 0 ? 0 : 100 }[e], y = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: n.tilt_position }[e];
    p != null && (d.pos = p), y != null && (d.tilt = y), e === "stop_cover" && (delete d.pos, delete d.tilt), e === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), C.set(r, d);
  }
  function Ei(e, n, r) {
    var p;
    const d = r == null ? void 0 : r.entity_id;
    return e !== "light" || typeof d != "string" || !ve[d] || !zn(d) || r.brightness_pct != null || r.brightness != null ? [n, r] : n !== "turn_on" && !(n === "toggle" && ((p = w[d]) == null ? void 0 : p.state) !== "on") ? [n, r] : ["turn_on", { ...r, brightness_pct: ve[d] }];
  }
  function ti(e, n, r, d) {
    let p = { entity_id: r, ...d || {} };
    return [n, p] = Ei(e, n, p), e === "cover" && Zr(n, p), tt[r] = (tt[r] || 0) + 1, li.set(Ec, JSON.stringify(tt)), Oi.call(e, n, p) ? Promise.resolve() : Promise.resolve(re(e, n, p));
  }
  function Eo(e) {
    const [n, r, d, p] = e.split("|");
    ti(n, r, d, p ? JSON.parse(p) : null).catch(() => {
    });
  }
  function ni(e, n) {
    Oe.set("pos|" + e, n), bn.delete(e), Oa = Oa.map(() => ""), [_, Qe].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(e) + '"]').forEach((p) => Pe(p, n)));
    const r = _.querySelector('.tfAction[data-k="' + CSS.escape(e) + '"] .tfName .activityRowMeta');
    if (r && (r.textContent = Math.round(n) + "%"), (b == null ? void 0 : b.id) === e) {
      const d = Qe.querySelector(".tfMoreState"), p = Qe.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(n) + "%", d.classList.add("live")), p && (p.textContent = "Currently " + Rt(e) + "%");
    }
    Lo(e).forEach((d) => d.update(va(e)));
  }
  const Pl = (e, n) => {
    const r = e.shiftKey ? 10 : 1, d = { ArrowUp: n + r, ArrowRight: n + r, ArrowDown: n - r, ArrowLeft: n - r, PageUp: n + 25, PageDown: n - 25, Home: 0, End: 100 }[e.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function Ps(e, n) {
    var de;
    const r = e.dataset.blocks;
    (de = e.setPointerCapture) == null || de.call(e, n.pointerId);
    const d = (pe) => {
      const O = e.getBoundingClientRect();
      return Math.max(0, Math.min(100, (pe.clientX - O.left) / O.width * 100));
    }, p = d(n), y = n.clientX;
    let h = !1, x = ta(r), S = p, R = 0;
    const H = () => {
      x = Math.abs(S - x) < 0.2 ? S : x + (S - x) * 0.14, ni(r, x), R = requestAnimationFrame(H);
    }, B = () => {
      h || (h = !0, e.classList.add("fine"), R = requestAnimationFrame(H));
    }, Y = setTimeout(B, 350), ye = (pe) => {
      S = d(pe), Math.abs(pe.clientX - y) > 6 && (clearTimeout(Y), B());
    }, Re = () => {
      clearTimeout(Y), cancelAnimationFrame(R), e.removeEventListener("pointermove", ye), e.removeEventListener("pointerup", Re), e.removeEventListener("pointercancel", Re), e.classList.remove("fine"), ni(r, h ? Math.round(x) : (Math.min(3, Math.floor(p / 25)) + 1) * 25), ai("pos", r);
    };
    e.addEventListener("pointermove", ye), e.addEventListener("pointerup", Re), e.addEventListener("pointercancel", Re);
  }
  function qn(e) {
    var p;
    const [n, r] = e.dataset.open.split("|"), d = e.closest(".tfCard");
    j = { key: n, id: r, h: d ? Math.round(d.getBoundingClientRect().height) : 0 }, bn.delete(n), yn(), (p = _.querySelector(".tfOpen [data-close]")) == null || p.focus({ preventScroll: !0 });
  }
  function tn(e) {
    var n;
    ge = e.dataset.area, _.querySelectorAll(".tfAreaPanel").forEach((r) => {
      var p;
      const d = r === e;
      r.classList.toggle("active", d), r.setAttribute("aria-expanded", String(d)), (p = r.querySelector(".panelExpanded")) == null || p.toggleAttribute("inert", !d);
    }), bn.set("areas", Tr(((n = _.querySelector('[data-k="areas"]')) == null ? void 0 : n.style.order) || 1));
  }
  const Di = {
    bright: { value: (e, n) => Math.round(n * 100), text: (e, n) => n ? n + "%" : "Off", send: (e, n) => n > 0 ? ["light", "turn_on", { brightness_pct: n }] : ["light", "turn_off", {}] },
    ct: { value: (e, n) => {
      const [r, d] = kn(e);
      return Math.round(r + n * (d - r));
    }, text: (e, n) => n.toLocaleString() + "k", send: (e, n) => ["light", "turn_on", { color_temp_kelvin: n }] },
    hue: { value: (e, n) => Math.round(n * 360), text: () => "Colour", send: (e, n) => {
      var r;
      return ["light", "turn_on", { hs_color: [n, Math.max(60, ((r = mt(e).hs_color) == null ? void 0 : r[1]) || 100)] }];
    } },
    pos: { value: (e, n) => Math.round(n * 100), text: (e, n) => Math.round(n) + "%", send: (e, n) => ["cover", "set_cover_position", { position: Math.round(n) }] },
    tilt: { value: (e, n) => Math.round(n * 100), text: (e, n) => "Tilt " + n + "%", send: (e, n) => ["cover", "set_cover_tilt_position", { tilt_position: n }] },
    vol: { value: (e, n) => Math.round(n * 100) / 100, text: (e, n) => Math.round(n * 100) + "%", send: (e, n) => ["media_player", "volume_set", { volume_level: n }] }
  };
  function Ri(e, n, r, d) {
    var S;
    const p = Di[n].value(r, d);
    Oe.set(n + "|" + r, p);
    const y = Math.round(d * 100) + "%", h = e.querySelector("i");
    if (n === "tilt") {
      h.style.width = "calc((100% - 6px) * " + d + ")";
      const [R, H] = e.querySelectorAll("span");
      R.classList.toggle("lit", d > 0.08), H.classList.toggle("lit", d > 0.92), bn.delete(r), Oa = Oa.map(() => ""), Lo(r).forEach((B) => B.update(va(r)));
    } else if (h) h.style.width = y;
    else {
      let R = e.querySelector("b");
      R || (R = document.createElement("b"), e.appendChild(R)), R.style.left = y;
    }
    e.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const x = (S = e.closest(".tfAction") || e.closest(".tfMore")) == null ? void 0 : S.querySelector(".tfName .activityRowMeta, .tfMoreState");
    x && (x.textContent = Di[n].text(r, p));
  }
  function ai(e, n) {
    const r = Oe.get(e + "|" + n), [d, p, y] = Di[e].send(n, r), h = () => setTimeout(() => {
      Oe.delete(e + "|" + n), yn();
    }, 1500);
    ti(d, p, n, y).then(h, h);
  }
  function Is(e) {
    e.addEventListener("click", (n) => {
      var d, p;
      const r = n.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (Pn && !n.target.closest(".tfBoardMenu,[data-board-more]") && da(), !(!r || !e.contains(r) || r.disabled))
        if (r.dataset.boardMore)
          (Pn == null ? void 0 : Pn.key) === r.dataset.boardMore ? da(!0) : Al(r.dataset.boardMore, r);
        else if (r.dataset.boardAct) Zo(Pn.key, r.dataset.boardAct);
        else if (r.dataset.boardShow) Ba(r.dataset.boardShow);
        else if (r.dataset.favHide) Ti(r.dataset.favHide, !1);
        else if (r.dataset.energyPick) wi(r.dataset.energyPick);
        else if (r.dataset.act) Eo(r.dataset.act);
        else if (r.hasAttribute("data-details")) qa(!(b != null && b.details));
        else if (r.hasAttribute("data-details-close")) qa(!1);
        else if (r.dataset.summary) vi(r.dataset.summary, r);
        else if (r.dataset.star) gi(r.dataset.star);
        else if (r.hasAttribute("data-more-back")) {
          const y = b.id;
          b = b.back, sr(), (d = Qe.querySelector('.tfMore [data-more="' + CSS.escape(y) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else if (r.hasAttribute("data-favs-edit")) Wa("favourites", r);
        else if (r.dataset.acts) JSON.parse(r.dataset.acts).forEach(([y, h, x, S]) => ti(y, h, x, S).catch(() => {
        }));
        else if (r.dataset.more) Wa(r.dataset.more, r);
        else if (r.hasAttribute("data-more-close")) Va();
        else if (r.dataset.go) As("room:" + r.dataset.go);
        else if (r.hasAttribute("data-area-back")) no();
        else if (r.dataset.open) qn(r);
        else if (r.hasAttribute("data-close")) {
          const y = j;
          j = null, bn.delete(y.key), yn(), (p = _.querySelector('[data-open="' + CSS.escape(y.key + "|" + y.id) + '"]')) == null || p.focus({ preventScroll: !0 });
        } else r.classList.contains("tfAreaPanel") && !r.classList.contains("active") && tn(r);
    }), e.addEventListener("keydown", (n) => {
      var d, p, y, h, x, S, R;
      const r = n.target;
      if ((d = r.dataset) != null && d.open && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), qn(r)), (p = r.dataset) != null && p.energyPick && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), wi(r.dataset.energyPick)), (y = r.classList) != null && y.contains("tfAreaPanel") && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), tn(r)), (h = r.dataset) != null && h.summary && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), vi(r.dataset.summary, r)), n.key === "Escape" && Pn && e === _) {
        n.preventDefault(), da(!0);
        return;
      }
      if (n.key === "Escape" && xn && e === _) {
        n.preventDefault(), tr(!1), (x = c("dashEditNav")) == null || x.focus();
        return;
      }
      if (n.key === "Escape" && Te && e === _ && (n.preventDefault(), no()), (S = r.dataset) != null && S.blocks) {
        const H = r.dataset.blocks, B = Pl(n, Math.round(ta(H)));
        if (B == null) return;
        n.preventDefault(), ni(H, B), clearTimeout(ce.get(H)), ce.set(H, setTimeout(() => ai("pos", H), 500));
        return;
      }
      if ((R = r.dataset) != null && R.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(n.key)) {
        n.preventDefault();
        const [H, B] = r.dataset.drag.split("|"), Y = Number(r.getAttribute("aria-valuenow")) / 100, ye = n.key === "Home" ? 0 : n.key === "End" ? 1 : Math.max(0, Math.min(1, Y + (n.key === "ArrowLeft" || n.key === "ArrowDown" ? -0.05 : 0.05)));
        Ri(r, H, B, ye), ai(H, B);
      }
    }), e.addEventListener("pointerdown", (n) => {
      var rn;
      const r = n.target.closest("[data-blocks]");
      if (r && n.button === 0) {
        n.preventDefault(), Ps(r, n);
        return;
      }
      const d = n.target.closest("[data-drag]");
      if (!d || n.button > 0) return;
      const [p, y] = d.dataset.drag.split("|");
      if (p === "bright" && !zn(y)) {
        Eo(bt("light", "toggle", y));
        return;
      }
      const h = p === "bright" && ((rn = w[y]) == null ? void 0 : rn.state) !== "on", x = n.pointerType !== "mouse", S = p === "tilt" ? 3 : 0, R = () => d.getBoundingClientRect().width - S * 2, H = (Nt) => {
        const _n = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (Nt.clientX - _n.left - S) / R()));
      };
      let B = x ? "waiting" : h ? "pressed" : "dragging", Y = 0, ye = 0;
      const Re = n.clientX, de = n.clientY, pe = (Nt, _n) => Math.hypot(Nt.clientX - Re, Nt.clientY - de) > _n, O = () => {
        try {
          d.setPointerCapture(n.pointerId);
        } catch {
        }
      };
      x || (n.preventDefault(), O()), B === "dragging" && Ri(d, p, y, H(n));
      const Ae = x && setTimeout(() => {
        var Nt, _n;
        B === "waiting" && (B = "held", E = d, d.classList.add("held"), O(), (Nt = navigator.userActivation) != null && Nt.hasBeenActive && ((_n = navigator.vibrate) == null || _n.call(navigator, 8)), Y = h ? (ve[y] ?? 100) / 100 : Number(d.getAttribute("aria-valuenow")) / 100, ye = Re, Ri(d, p, y, Y));
      }, k), Ne = (Nt) => {
        B === "waiting" && pe(Nt, 8) ? B = "gone" : B === "pressed" && pe(Nt, 4) && (B = "dragging"), B === "held" ? Ri(d, p, y, Math.max(0, Math.min(1, Y + (Nt.clientX - ye) / R()))) : B === "dragging" && Ri(d, p, y, H(Nt));
      }, dt = (Nt) => {
        clearTimeout(Ae), ["pointermove", "pointerup", "pointercancel"].forEach((_n, Ge) => d.removeEventListener(_n, Ge ? dt : Ne)), d.classList.remove("held"), E === d && (E = null), B === "held" || B === "dragging" ? ai(p, y) : Nt.type === "pointerup" && h && (B === "waiting" || B === "pressed") && ti("light", "turn_on", y).catch(() => {
        });
      };
      d.addEventListener("pointermove", Ne), d.addEventListener("pointerup", dt), d.addEventListener("pointercancel", dt);
    }), e.addEventListener("touchmove", (n) => {
      E && n.cancelable && n.preventDefault();
    }, { passive: !1 });
  }
  return _ && v && ($a(), Is(_), Is(Qe), Qe.addEventListener("click", (e) => {
    e.target === Qe && Va();
  }), (Kr = a.getElementById("homeNav")) == null || Kr.addEventListener("click", () => {
    Te && no();
  }), ($r = a.querySelector(".bottomNav")) == null || $r.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Pc + "</button>"), (Xr = c("dashEditNav")) == null || Xr.addEventListener("click", () => tr(!xn)), _.addEventListener("pointerdown", Fa), _.addEventListener("hass-action", (e) => {
    var d, p;
    const n = (p = (d = e.target).closest) == null ? void 0 : p.call(d, ".tfDac"), r = n == null ? void 0 : n.dataset.k;
    !r || !n.dataset.dac.startsWith("dash:") || xn || (e.stopPropagation(), Wa(r, n));
  }), new ResizeObserver(() => {
    m.classList.contains("tfDash") && fa() !== Wo ? yn() : Na();
  }).observe(_), window.addEventListener("resize", Na, { passive: !0 }), Qe.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.stopPropagation(), b != null && b.details ? qa(!1) : Va());
  })), Q(), {
    update(e) {
      if (!v) return;
      const n = !Object.keys(w).length;
      w = e || {};
      for (const r in w) r.startsWith("light.") && w[r].state === "on" && zn(r) && Ie(r, uo(w[r]));
      n ? Zt() : yn();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      co = !0, Ye == null || Ye.destroy(), Ye = null, nt == null || nt.forEach((e) => e.destroy()), nt = null;
    },
    resume() {
      co = !1, !(!v || !(_ != null && _.querySelector("[data-tf]"))) && (st.isConnected && qi(st.style.order), Wi());
    }
  };
}
const pf = "0.49.0", ld = "move_assistant", hf = "move_assistant", Fc = "move_assistant_checkin_reminder";
function ff() {
  if (document.getElementById("move-assistant-inter")) return;
  const a = document.createElement("link");
  a.id = "move-assistant-inter", a.rel = "stylesheet", a.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(a);
}
class mf extends HTMLElement {
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
    ff();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${Mu}${Cu}${Su}</style>${Tu}`;
    const o = l.getElementById("app");
    o.style.opacity = "0";
    let c = null;
    try {
      const m = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: ld
      });
      c = (m == null ? void 0 : m.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(c), this._app = Uu(l, {
      data: c,
      save: (m) => this._save(m),
      fire: (m, g) => this._fire(m, g),
      ws: (m) => this._hass.callWS(m),
      subscribe: (m, g) => {
        var v, L;
        return (L = (v = this._hass) == null ? void 0 : v.connection) != null && L.subscribeMessage ? this._hass.connection.subscribeMessage(g, m) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var m, g;
        return Object.keys(((g = (m = this._hass) == null ? void 0 : m.services) == null ? void 0 : g.notify) || {}).sort();
      },
      setReminderAutomation: (m) => this._setReminderAutomation(m),
      setLight: (m) => this.classList.toggle("lightBody", m),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = uf(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), o.style.transition = "opacity .2s ease", o.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var o;
    const l = (o = this._hass) == null ? void 0 : o.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (c) => {
        var g;
        const m = JSON.stringify((c == null ? void 0 : c.value) ?? null);
        m === this._lastSaved || m === this._pendingJson || (this._lastSaved = m, (g = this._app) == null || g.applyRemoteData(c.value));
      },
      { type: "frontend/subscribe_user_data", key: ld }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: ld,
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
      event_type: hf,
      event_data: { action: l, ...o }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const o = `config/automation/config/${Fc}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (g) {
        if ((g == null ? void 0 : g.status_code) !== 404 && (g == null ? void 0 : g.status) !== 404) throw g;
      }
      return;
    }
    const c = (g) => `${g}:00`, m = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: Fc,
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
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", mf), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${pf} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
