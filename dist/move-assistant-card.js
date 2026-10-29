const Mu = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Cu = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;align-items:start}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDac{grid-column:span 2;min-width:0}.tfDac>dual-controller-v3{display:block}.tfMoreActions .tfDac{grid-column:auto}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);font:400 24px/1 var(--font);cursor:pointer}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px;height:38px;padding:3px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:9px 4px 4px 9px}.tfBlocks>span:nth-child(4){border-radius:4px 9px 9px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 12px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:38px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:3px;bottom:3px;left:3px;border-radius:9px;background:var(--primary)}.tfTilt span{position:relative;padding:0 15px;color:var(--text);font:600 12px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns{display:flex;gap:12px}.tfCoverBtns button{flex:1;display:grid;place-items:center;height:38px;min-width:0;min-height:0;padding:0;border:0;border-radius:12px;background:var(--tile);color:var(--text);cursor:pointer}.tfCoverBtns button:disabled{opacity:.38;cursor:default}.tfCoverBtns svg{display:block;width:22px;height:22px}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}.tfMore .tfCoverBtns{gap:8px}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:640px}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px;align-items:start}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:flex;align-items:center;gap:12px;min-width:0;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}.tfDashTiles>.tfAction{justify-content:space-between}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%}#app.tfBoard .tfDashTiles>.tfAction{padding-block:18px}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}', Su = '.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:clamp(8px,calc(5.6cqw * var(--wb-k,1)),14px);aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:clamp(12px,calc(7.9cqw * var(--wb-k,1)),20px);border-radius:clamp(22px,calc(11.1cqw * var(--wb-k,1)),28px);overflow:hidden}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbHead{gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px)}.wbSquare .wbChip{width:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);height:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);border-radius:clamp(12px,calc(6.3cqw * var(--wb-k,1)),16px);--wb-icon:clamp(18px,calc(9.5cqw * var(--wb-k,1)),24px)}.wbSquare .wbName{font-size:clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px);line-height:1.4}.wbSquare .wbSub{font-size:clamp(13px,calc(6.3cqw * var(--wb-k,1)),16px)}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:clamp(6px,calc(4cqw * var(--wb-k,1)),10px)}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:20px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 480px){.wbCard.wbWeather{gap:16px;padding:var(--inset)}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbStripScroll{min-height:150px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}@container wb-card (width < 220px){.wbMoonCaption{display:none}}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}', Tu = `<main id="app"><div class="shell">
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
`, Jn = {
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
}, Xn = (a) => a < 0 ? 0 : a > 1 ? 1 : a, Yd = (a, l, o) => a + (l - a) * o, dd = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, Lu = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Zd = {}, Yt = (a, l, o) => {
  const c = a + l + o;
  return Zd[c] || (Zd[c] = Lu(dd(a).map((m, g) => m + (dd(l)[g] - m) * o)));
}, Kd = {}, cl = (a) => Kd[a] || (Kd[a] = dd(a)), Gl = (a, l, o, c) => (m) => {
  if (m <= 0) return 0;
  if (m >= 1) return 1;
  let g = 0, v = 1, A = m;
  for (let w = 0; w < 18; w++)
    A = (g + v) / 2, 3 * (1 - A) * (1 - A) * A * a + 3 * (1 - A) * A * A * o + A * A * A < m ? g = A : v = A;
  return 3 * (1 - A) * (1 - A) * A * l + 3 * (1 - A) * A * A * c + A * A * A;
}, Au = { std: Gl(0.2, 0, 0, 1), acc: Gl(0.3, 0, 1, 1), dec: Gl(0, 0, 0, 1) };
function vl(a, l) {
  const o = String(a || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || l ? "night" : "day");
}
function Oc(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [Yt(l.clear[0], l.cloudy[0], 0.12), Yt(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Yt(l.rain[0], "#000000", 0.22), Yt(l.rain[1], "#000000", 0.22)], l;
}
const cd = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], ud = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], pd = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function hd(a, l = Jn) {
  const o = { ...Jn, ...l }, c = Oc(o), m = String(a).split("/"), g = c[m[0]] ? m[0] : "clear", v = m[1] === "night", A = c[g][v ? 1 : 0], w = {
    night: v,
    clearness: g === "clear" ? 1 : g === "partly" ? 0.7 : 0.25,
    sky: A,
    skyStops: [A],
    skyT: 0,
    sun: { x: 45, y: v ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: v ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: v ? 1 : 0 },
    stars: cd.map(() => ({ o: 0 })),
    rain: ud.map(() => ({ o: 0, dy: -16 })),
    snow: pd.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, P = (se) => cd.map(() => ({ o: se }));
  return g === "clear" ? v ? (w.moon.o = 1, w.stars = P(1)) : w.sun.o = 1 : g === "partly" ? (w.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: v ? 1 : 0 }, v ? (w.moon = { x: 34, y: 33, d: 48, o: 1 }, w.stars = P(0.7)) : w.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : g === "cloudy" || g === "fog" ? (w.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: v ? 1 : 0 }, v ? w.moon = { x: 40, y: 36, d: 40, o: 0 } : w.sun = { x: 40, y: 36, r: 20, o: 0 }) : (w.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, v ? w.moon = { x: 38, y: 28, d: 36, o: 0 } : w.sun = { x: 38, y: 28, r: 18, o: 0 }, g === "snow" ? w.snow = pd.map(() => ({ o: 1, dy: 0 })) : w.rain = ud.map((se, ne) => ({ o: g === "storm" && ne === 1 ? 0 : 1, dy: 0 })), g === "storm" && (w.bolt = { o: 1, dy: 0 })), w;
}
const $d = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function _u(a, l, o, c = Jn, m = !1) {
  const g = { ...Jn, ...c }, v = (O, q) => O > 0.01 && q > 0.01 ? "stay" : O > 0.01 ? "leave" : q > 0.01 ? "enter" : "none", A = (O, q, K, te) => {
    const U = O[0] + q * te, W = O[1] - (K - 1 - q) * te;
    return Au[O[2]](Xn((o - U) / Math.max(1e-3, W - U)));
  }, w = (O, q, K, te = 0, U = 1, W = 0) => {
    const X = v(O.o, q.o);
    if (X === "none") return { ...q, o: 0 };
    const G = A($d[K][X], te, U, W), Z = {};
    for (const Q in q) Z[Q] = m && X !== "stay" && Q !== "o" ? X === "leave" ? O[Q] : q[Q] : Yd(O[Q], q[Q], G);
    return Z;
  }, P = A($d.sky, 0, 1, 0);
  let se, ne;
  if (a.night !== l.night) {
    const O = Math.min(a.clearness, l.clearness), q = Yt(Yt(a.sky, l.sky, 0.5), g.dusk, 0.6 * O);
    se = P < 0.5 ? Yt(a.sky, q, P * 2) : Yt(q, l.sky, P * 2 - 1), ne = O > 0.5 ? [a.sky, g.dusk, l.sky] : [a.sky, l.sky];
  } else
    se = Yt(a.sky, l.sky, P), ne = [a.sky, l.sky];
  return {
    night: o < 0.5 ? a.night : l.night,
    clearness: Yd(a.clearness, l.clearness, o),
    sky: se,
    skyStops: ne,
    skyT: P,
    sun: w(a.sun, l.sun, "body"),
    moon: w(a.moon, l.moon, "body"),
    cloud: w(a.cloud, l.cloud, "cloud"),
    stars: l.stars.map((O, q) => w(a.stars[q], O, "fx", q, l.stars.length, 0.05)),
    rain: l.rain.map((O, q) => w(a.rain[q], O, "fx", q, l.rain.length, 0.05)),
    snow: l.snow.map((O, q) => w(a.snow[q], O, "fx", q, l.snow.length, 0.05)),
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
], $n = (a, l) => (Eu[(l & 7) * 8 + (a & 7)] + 0.5) / 64, Du = 0, gd = 1, vd = 2, bd = 3, wd = 4, Kn = 5, Ar = 6, bi = 7, xd = 8, hl = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), Ru = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Nu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((a) => [a[0] * 13 / 11, a[1] * 28 / 24]), qc = (a, l, o) => {
  let c = !1;
  for (let m = 0, g = a.length - 1; m < a.length; g = m++) {
    const v = a[m], A = a[g];
    v[1] > o != A[1] > o && l < (A[0] - v[0]) * (o - v[1]) / (A[1] - v[1]) + v[0] && (c = !c);
  }
  return c;
};
function Wc(a, { size: l = 90, px: o = 2, oneBit: c = !1, colors: m = Jn, ink: g = "#26221e", paper: v = "#fbf9f6", clock: A = 0, idle: w = !1 } = {}) {
  const P = { ...Jn, ...m }, se = Math.sin, ne = Math.PI * 2, O = Math.max(6, Math.round(l / o)), q = O / 90, K = w ? Math.floor(A / 100) * 100 : 0, te = w ? se(ne * K / 3600) : 0, U = w ? 1.8 * se(ne * K / 6400) : 0, W = w ? 0.9 * se(ne * K / 4100) : 0, X = w ? 0.8 * se(ne * K / 5200) : 0, G = K / 3400 % 1, Z = w && a.bolt.o > 0.5 && (G < 0.04 || G > 0.08 && G < 0.11), Q = new Array(O * O), T = new Uint8Array(O * O), j = (k, E, C, N, ue) => {
    C == null || k < 0 || E < 0 || k >= O || E >= O || (N >= 1 || N > $n(k + 5, E + 3)) && (Q[E * O + k] = C, T[E * O + k] = ue);
  }, ge = (k, E, C, N) => {
    for (let ue = Math.max(0, Math.floor(E - C) - 1); ue <= Math.min(O - 1, E + C + 1); ue++) for (let V = Math.max(0, Math.floor(k - C) - 1); V <= Math.min(O - 1, k + C + 1); V++) N(V, ue, V + 0.5 - k, ue + 0.5 - E);
  }, Te = a.skyStops || [a.sky], b = a.skyT || 0;
  for (let k = 0; k < O; k++) {
    const E = a.night ? Xn(1 - (k + 0.5) / (O * 0.7)) * 0.85 : Xn(((k + 0.5) / O - 0.35) / 0.65) * 0.85;
    for (let C = 0; C < O; C++) {
      let N = Te[0];
      if (Te.length > 1) {
        const ue = b * (Te.length - 1), V = Math.min(Te.length - 2, Math.floor(ue));
        N = ue - V > $n(C, k) ? Te[V + 1] : Te[V];
      }
      E > $n(C + 2, k + 5) && (N = a.night ? Yt(N, "#000000", 0.28) : Yt(N, "#ffffff", 0.2)), Q[k * O + C] = Z ? Yt(N, "#ffffff", 0.25) : N;
    }
  }
  if (a.sun.o > 0.01) {
    const k = a.sun.x * q, E = a.sun.y * q, C = Math.max(1, a.sun.r * q);
    if (w) {
      const N = C * (1.45 + 0.06 * te), ue = Yt(P.sun, "#ffffff", 0.55);
      if (ge(k, E, N, (V, ae, de, fe) => {
        const We = Math.sqrt(de * de + fe * fe);
        We > C && We < N && j(V, ae, ue, 0.26 * (1 - (We - C) / (N - C)) * a.sun.o, Du);
      }), a.sun.o > 0.5) {
        const V = Math.floor(K / 500) % 2, ae = Math.max(1, C * 0.22);
        for (let de = 0; de < 8; de++) if (de % 2 === V) for (let fe = C + 1.5; fe < C + 1.5 + ae; fe += 0.7) j(Math.floor(k + Math.cos(de * Math.PI / 4) * fe), Math.floor(E + Math.sin(de * Math.PI / 4) * fe), P.sun, a.sun.o, xd);
      }
    }
    ge(k, E, C, (N, ue, V, ae) => {
      if (V * V + ae * ae > C * C) return;
      const de = ((V * 0.643 + ae * 0.766) / C + 1) / 2;
      j(N, ue, Xn((de - 0.62) / 0.38) > $n(N, ue) ? P.sunEdge : P.sun, a.sun.o, gd);
    });
  }
  if (cd.forEach((k, E) => {
    const C = a.stars[E].o;
    if (C < 0.01) return;
    const N = Math.floor(k[0] * q), ue = Math.floor(k[1] * q), V = w ? (Math.floor(K / 300) + E * 3) % 6 : 0;
    if (V === 5) return;
    const ae = Math.round(k[2] * q * (V === 4 ? 0.3 : V < 2 ? 1 : 0.6));
    j(N, ue, P.star, C, bi);
    for (let de = 1; de <= ae; de++) {
      const fe = de === ae && ae > 1 ? Yt(P.star, a.sky, 0.5) : P.star;
      j(N - de, ue, fe, C, bi), j(N + de, ue, fe, C, bi), j(N, ue - de, fe, C, bi), j(N, ue + de, fe, C, bi);
    }
  }), a.moon.o > 0.01) {
    const k = Math.max(1.5, a.moon.d * q * 0.37), E = a.moon.x * q, C = a.moon.y * q + (w && X > 0.4 ? -1 : 0), N = E + 0.547 * k, ue = C - 0.503 * k, V = 0.82 * k, ae = Yt(P.moon, "#ffffff", 0.6);
    ge(E, C, k, (de, fe, We, et) => {
      if (We * We + et * et > k * k) return;
      const xt = de + 0.5 - N, mn = fe + 0.5 - ue;
      xt * xt + mn * mn <= V * V || j(de, fe, Xn((et + k) / (2 * k) * 1.1 - 0.1) > $n(de, fe) ? P.moon : ae, a.moon.o, vd);
    });
  }
  const ve = Math.max(2, Math.round(15.65 * q)), Ce = Math.max(1, Math.round(5.87 * q * 0.5));
  ud.forEach((k, E) => {
    const C = a.rain[E];
    let N = C.dy, ue = C.o;
    if (ue < 0.01) return;
    if (w) {
      const de = (K / 950 + E / 3) % 1;
      N += -5 + de * 14, ue *= de < 0.18 ? de / 0.18 : de > 0.72 ? (1 - de) / 0.28 : 1;
    }
    const V = (k[0] + 3 + U) * q, ae = (k[1] + N) * q;
    for (let de = 0; de < ve; de++) for (let fe = 0; fe < Ce; fe++) j(Math.floor(V - 0.208 * de) + fe, Math.floor(ae) + de, P.rain, ue, wd);
  });
  const Oe = Math.max(0, Math.round(7.34 * q / 2.6));
  if (pd.forEach((k, E) => {
    const C = a.snow[E];
    let N = C.dy, ue = 0, V = C.o;
    if (V < 0.01) return;
    if (w) {
      const fe = (K / 3200 + E / 5) % 1;
      N += -6 + fe * 14, ue = 1.5 * se(ne * (fe * 1.5 + E / 5)), V *= fe < 0.2 ? fe / 0.2 : fe > 0.75 ? (1 - fe) / 0.25 : 1;
    }
    const ae = Math.floor((k[0] + 3.67 + ue + U) * q), de = Math.floor((k[1] + 3.67 + N) * q);
    j(ae, de, P.snow, V, Kn);
    for (let fe = 1; fe <= Oe; fe++)
      j(ae - fe, de, P.snow, V, Kn), j(ae + fe, de, P.snow, V, Kn), j(ae, de - fe, P.snow, V, Kn), j(ae, de + fe, P.snow, V, Kn), Oe > 1 && fe < Oe && (j(ae - fe, de - fe, P.snow, V, Kn), j(ae + fe, de - fe, P.snow, V, Kn), j(ae - fe, de + fe, P.snow, V, Kn), j(ae + fe, de + fe, P.snow, V, Kn));
  }), a.bolt.o > 0.01)
    if (O >= 30) {
      const k = 39 + U, E = 50 + a.bolt.dy;
      for (let C = Math.floor(E * q); C <= (E + 28) * q; C++) for (let N = Math.floor(k * q); N <= (k + 13) * q; N++)
        qc(Nu, (N + 0.5) / q - k, (C + 0.5) / q - E) && j(N, C, P.sun, a.bolt.o, Ar);
    } else {
      const k = O / 18, E = 7, C = 10 + Math.round(a.bolt.dy * 0.2);
      Ru.forEach((N, ue) => N.split("").forEach((V, ae) => {
        if (V !== "#") return;
        const de = Math.floor((E + ae) * k), fe = Math.floor((C + ue) * k);
        for (let We = fe; We < Math.max(fe + 1, Math.floor((C + ue + 1) * k)); We++) for (let et = de; et < Math.max(de + 1, Math.floor((E + ae + 1) * k)); et++) j(et, We, P.sun, a.bolt.o, Ar);
      }));
    }
  if (a.cloud.o > 0.01) {
    const k = Math.max(3, a.cloud.w * q), E = k * 0.6665, C = (a.cloud.x + U) * q - k / 2, N = (a.cloud.y + W) * q - E / 2, ue = Yt(P.cloudDay, P.cloudNight, Math.round(a.cloud.f * 4) / 4), V = Yt(ue, "#000000", 0.16);
    for (let ae = Math.max(0, Math.floor(N) - 1); ae <= Math.min(O - 1, N + E + 1); ae++) for (let de = Math.max(0, Math.floor(C) - 1); de <= Math.min(O - 1, C + k + 1); de++) {
      const fe = (de + 0.5 - C) / k, We = (ae + 0.5 - N) / k;
      hl(fe, We) && j(de, ae, !hl(fe, We + 1 / k) || Xn((We - 0.42) / 0.25) * 0.8 > $n(de, ae) ? V : ue, a.cloud.o, bd);
    }
  }
  return Vc(Q, T, O, O, { oneBit: c, ink: g, paper: v, snowInk: !a.night });
}
function Vc(a, l, o, c, { oneBit: m, ink: g, paper: v, snowInk: A }) {
  const w = new Uint8ClampedArray(o * c * 4), P = cl(g), se = cl(v);
  for (let ne = 0; ne < c; ne++) for (let O = 0; O < o; O++) {
    const q = ne * o + O, K = l[q];
    if (a[q] == null) continue;
    let te = cl(a[q]);
    if (m) {
      let U;
      K === wd || K === xd ? U = !0 : K === Kn ? U = A : K === bi || K === Ar ? U = !1 : U = Math.round((0.2126 * te[0] + 0.7152 * te[1] + 0.0722 * te[2]) / 255 * 4) / 4 <= $n(O, ne), (K === gd || K === vd || K === bd || K === Ar) && (O > 0 && l[q - 1] !== K || O < o - 1 && l[q + 1] !== K || ne > 0 && l[q - o] !== K || ne < c - 1 && l[q + o] !== K) && (U = !0), te = U ? P : se;
    }
    w[q * 4] = te[0], w[q * 4 + 1] = te[1], w[q * 4 + 2] = te[2], w[q * 4 + 3] = 255;
  }
  return { w: o, h: c, data: w };
}
const Bu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Pu = (a) => vl(a, !1).split("/")[0], Ul = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Iu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Hu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Fu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Ou = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", qu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Wu = [".##", "##.", ".#.", "#.."];
function zc(a, { width: l, height: o, colors: c, wave: m = 0.38, soft: g = 6, glow: v = 0.6 }) {
  const A = { ...Jn, dawn: "#e5a77e", ...c }, w = Oc(A), P = l, se = o, ne = P / 6, O = ne / 2, q = Math.PI * 2, K = a.length ? a : [{ cond: "cloudy", night: !1 }], te = [...Array(12)].map((G, Z) => {
    const Q = K[Math.min(Z, K.length - 1)], T = Pu(Q.cond), j = Z % 2 === 1;
    return { cond: Q.cond, k: T, night: j, sky: w[T][j ? 1 : 0], cover: Bu[T] };
  }), U = (G) => se * (0.5 - m * Math.cos(q * (G / ne - 0.25)));
  return { C: A, S: te, W: P, H: se, cw: ne, sw: O, TAU: q, yb: U, side: (G, Z, Q) => {
    const T = (G ? U(Z) - Q : Q - U(Z)) / Math.max(3, g * 1.4) + 0.5;
    return T <= 0 ? 0 : T >= 1 ? 1 : T;
  }, glowAt: (G) => {
    const Z = ((G / ne - 0.25) % 1 + 1) % 1, Q = Math.max(0, Math.min(5, Math.round(G / ne - 0.25))), T = Math.max(0, Math.min(5, Math.round(G / ne - 0.75))), j = 1 - (te[2 * Q].cover + te[2 * T + 1].cover) / 2, ge = Math.sin(Math.PI * Math.min(1, Math.max(0, U(G) / se)));
    return { c: Z < 0.5 ? A.dusk : A.dawn, a: v * (0.2 + 0.8 * j) * ge * ge };
  }, soft: g, tw: ne * 0.3, sy: se / 90 };
}
function jc(a, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: g, side: v, C: A, TAU: w, sy: P } = a, se = l, ne = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((O, q) => {
    const K = Ul(c * 977 + q * 131 + 7), te = (q + 0.5) * g, U = O.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[O.k] : 0;
    for (let W = 0; W < U; W++) {
      const X = te + (K() - 0.5) * g * 1.6, G = (6 + K() * 76) * P, Z = K() < 0.35, Q = 1.8 + K() * 1.6, T = v(!0, X, G) * (Z ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(w * se / 2600 + W * 1.7 + q) : 1);
      T >= 0.03 && ne.stars.push({ x: X, y: G, big: Z, size: Q, o: T });
    }
    if (!O.night && (O.k === "clear" || O.k === "partly")) {
      const W = te + (K() - 0.5) * g * 0.3, X = Math.min(15, g * 0.29);
      ne.suns.push({ x: W, y: 32 * P, rad: X, halo: X * 2.8 * (o ? 1 + 0.07 * Math.sin(w * se / 3600 + q) : 1) });
    }
    if (O.night && (O.k === "clear" || O.k === "partly")) {
      const W = Math.min(0.78, g * 0.55 / 34), X = te - 23 * W + (K() - 0.5) * g * 0.2;
      ne.moons.push({ x: X + 23 * W, y: (4 + (o ? 0.8 * Math.sin(w * se / 5200 + q) : 0)) * P + 23 * W, d: 46 * W });
    }
  }), m.forEach((O, q) => {
    const K = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[O.k];
    if (!K) return;
    const te = Ul(c * 577 + q * 71 + 3), U = (q + 0.5) * g, W = O.k === "rain" || O.k === "storm" || O.night ? A.cloudNight : A.cloudDay, X = O.night ? 0.82 : O.k === "storm" ? 0.75 : 1;
    for (let G = 0; G < K; G++) {
      const Z = g / 46 * (O.k === "partly" ? 0.85 : 0.75 + te() * 0.55), Q = U + (O.k === "partly" ? g * 0.12 : (te() - 0.5) * g * 1.05), T = (O.k === "partly" ? 40 : 6 + te() * 26) * P, j = o ? 2.5 * Math.sin(w * se / 9e3 + q * 1.3 + G * 2.1) : 0, ge = o ? 0.9 * Math.sin(w * se / 6100 + q + G) : 0;
      ne.clouds.push({ x: Q - 23 * Z + j, y: T - 15.33 * Z + ge, w: 46 * Z, h: 30.66 * Z, fill: W, o: X * (K > 1 && G === 0 ? 0.85 : 1) });
    }
  }), m.forEach((O, q) => {
    const K = Ul(c * 313 + q * 29 + 11), te = (q + 0.5) * g, U = O.cond === "pouring" ? 16 : O.cond === "rainy" || O.cond === "hail" ? 9 : O.cond === "lightning-rainy" ? 12 : O.cond === "snowy-rainy" ? 5 : 0;
    for (let X = 0; X < U; X++) {
      let G = te + (K() - 0.5) * g * 1.05, Z = 44 + K() * 36, Q = 1;
      if (o) {
        const j = ((Z - 44 + se * 0.04) % 36 + 36) % 36;
        G -= 0.21 * (j - (Z - 44)), Z = 44 + j, Q = Math.min(1, j / 6, (36 - j) / 6);
      }
      Z *= P;
      const T = v(O.night, G, Z) * Q;
      T >= 0.05 && ne.drops.push({ x: G, y: Z, o: T });
    }
    const W = O.cond === "snowy" ? 11 : O.cond === "snowy-rainy" ? 6 : 0;
    for (let X = 0; X < W; X++) {
      let G = te + (K() - 0.5) * g * 1.05, Z = 40 + K() * 44, Q = 1;
      if (o) {
        const j = ((Z - 40 + se * 9e-3) % 44 + 44) % 44;
        Z = 40 + j, G += 1.6 * Math.sin(w * se / 2800 + X * 1.9 + q), Q = Math.min(1, j / 6, (44 - j) / 6);
      }
      Z *= P;
      const T = v(O.night, G, Z) * Q;
      T >= 0.05 && ne.flakes.push({ x: G, y: Z, o: T });
    }
    if (O.k === "fog") {
      const X = O.night ? "#c8ccd6" : "#ffffff", G = O.night ? 0.28 : 0.62, Z = o ? 4 * Math.sin(w * se / 8e3 + q) : 0;
      for (let Q = 0; Q < 4; Q++) ne.fogs.push({ x: te - g * 0.75 + Q % 2 * g * 0.18 + (Q % 2 ? Z : -Z), y: (30 + Q * 13) * P, w: g * 1.3, c: X, a: G });
    }
    if (O.k === "storm") {
      const X = (se / 3400 + q * 0.37) % 1;
      ne.bolts.push({ x: te + (K() - 0.5) * g * 0.3 - 5, y: 36 * P, o: o && !(X < 0.05 || X > 0.09 && X < 0.12) ? 0.8 : 1 });
    }
  }), ne;
}
function Vu(a, l, o, c, m, g, v, A) {
  const { S: w, C: P, cw: se, yb: ne, glowAt: O, soft: q, tw: K, sy: te } = a, U = new Array(o * c), W = new Uint8Array(o * c), X = new Uint8Array(o * c), G = (k, E, C, N, ue) => {
    C == null || k < 0 || E < 0 || k >= o || E >= c || (N >= 1 || N > $n(k + 5, E + 3)) && (U[E * o + k] = C, W[E * o + k] = ue);
  }, Z = (k, E, C, N) => {
    for (let ue = Math.max(0, Math.floor(E - C) - 1); ue <= Math.min(c - 1, E + C + 1); ue++) for (let V = Math.max(0, Math.floor(k - C) - 1); V <= Math.min(o - 1, k + C + 1); V++) N(V, ue, V + 0.5 - k, ue + 0.5 - E);
  }, Q = (k, E, C) => {
    for (let ue = 0; ue < k.length - 1; ue++) {
      const V = (ue + E) * se;
      if (C < V - K / 2) return [k[ue], k[ue], 0];
      if (C <= V + K / 2) return [k[ue], k[ue + 1], (C - V + K / 2) / K];
    }
    const N = k[k.length - 1];
    return [N, N, 0];
  }, T = w.filter((k) => !k.night).map((k) => k.sky), j = w.filter((k) => k.night).map((k) => k.sky), ge = q / g, Te = 16 * te / g;
  for (let k = 0; k < o; k++) {
    const E = (k + 0.5) * m, C = ne(E) / g, N = Q(T, 0.75, E), ue = Q(j, 1.25, E), V = O(E);
    for (let ae = 0; ae < c; ae++) {
      const de = $n(k, ae), fe = ae + 0.5 - C, We = (ge > 0.01 ? Xn(0.5 + fe / ge) : fe > 0 ? 1 : 0) > de;
      let et = We ? N[2] > de ? N[1] : N[0] : ue[2] > de ? ue[1] : ue[0];
      (We ? Xn(((ae + 0.5) / c - 0.45) / 0.55) * 0.7 : Xn(1 - (ae + 0.5) / (c * 0.55)) * 0.7) > $n(k + 2, ae + 5) && (et = We ? Yt(et, "#ffffff", 0.18) : Yt(et, "#000000", 0.25)), We && fe >= 0 && fe < Te && V.a * 1.3 * (1 - fe / Te) > $n(k + 6, ae + 1) && (et = V.c), U[ae * o + k] = et, X[ae * o + k] = We ? 0 : 1;
    }
  }
  const b = Yt(P.sun, "#ffffff", 0.55), ve = Yt(P.moon, "#ffffff", 0.6);
  l.stars.forEach((k) => {
    const E = Math.floor(k.x / m), C = Math.floor(k.y / g);
    if (E < 0 || C < 0 || E >= o || C >= c || !X[C * o + E] || k.o < 0.15) return;
    const N = k.o > 0.45 ? P.star : Yt(P.star, U[C * o + E], 0.5), ue = k.big && k.o > 0.6 ? Math.floor(k.size / m) : 0;
    G(E, C, N, 1, bi);
    for (let V = 1; V <= ue; V++) [[E - V, C], [E + V, C], [E, C - V], [E, C + V]].forEach((ae) => {
      ae[0] >= 0 && ae[1] >= 0 && ae[0] < o && ae[1] < c && X[ae[1] * o + ae[0]] && G(ae[0], ae[1], N, 1, bi);
    });
  }), l.suns.forEach((k) => {
    const E = Math.max(1.5, k.rad / m), C = k.x / m, N = k.y / g, ue = k.halo / m * 0.85;
    if (Z(C, N, ue, (V, ae, de, fe) => {
      const We = Math.sqrt(de * de + fe * fe);
      We > E && We < ue && !X[ae * o + V] && G(V, ae, b, 0.3 * (1 - (We - E) / (ue - E)), 0);
    }), A) {
      const V = Math.floor(v / 500) % 2, ae = Math.max(1, E * 0.3);
      for (let de = 0; de < 8; de++) if (de % 2 === V) for (let fe = E + 1.2; fe < E + 1.2 + ae; fe += 0.7) G(Math.floor(C + Math.cos(de * Math.PI / 4) * fe), Math.floor(N + Math.sin(de * Math.PI / 4) * fe), P.sun, 1, xd);
    }
    Z(C, N, E, (V, ae, de, fe) => {
      de * de + fe * fe <= E * E && G(V, ae, Xn(((fe / E + 1) / 2 - 0.6) / 0.4) > $n(V, ae) ? P.sunEdge : P.sun, 1, gd);
    });
  }), l.moons.forEach((k) => {
    const E = Math.max(1.5, k.d * 0.37 / m), C = k.x / m, N = k.y / g, ue = C + 0.547 * E, V = N - 0.503 * E, ae = 0.82 * E;
    Z(C, N, E, (de, fe, We, et) => {
      if (We * We + et * et > E * E) return;
      const xt = de + 0.5 - ue, mn = fe + 0.5 - V;
      xt * xt + mn * mn > ae * ae && G(de, fe, Xn((et + E) / (2 * E) * 1.1 - 0.1) > $n(de, fe) ? P.moon : ve, 1, vd);
    });
  }), l.clouds.forEach((k) => {
    const E = Math.max(3, k.w / m), C = E * 0.6665, N = k.x / m, ue = k.y / g, V = Yt(k.fill, "#000000", 0.16);
    for (let ae = Math.max(0, Math.floor(ue) - 1); ae <= Math.min(c - 1, ue + C + 1); ae++) for (let de = Math.max(0, Math.floor(N) - 1); de <= Math.min(o - 1, N + E + 1); de++) {
      const fe = (de + 0.5 - N) / E, We = (ae + 0.5 - ue) / E;
      hl(fe, We) && G(de, ae, !hl(fe, We + 1 / E) || Xn((We - 0.42) / 0.25) * 0.8 > $n(de, ae) ? V : k.fill, k.o, bd);
    }
  }), l.fogs.forEach((k) => {
    const E = Math.floor(k.y / g), C = Math.max(E, Math.floor((k.y + 6 * te) / g) - 1), N = Math.floor(k.x / m), ue = Math.floor((k.x + k.w) / m);
    for (let V = E; V <= C; V++) for (let ae = N; ae <= ue; ae++) {
      const de = (ae - N) / Math.max(1, ue - N);
      G(ae, V, k.c, k.a * (de < 0.25 ? de / 0.25 : de > 0.75 ? (1 - de) / 0.25 : 1), 0);
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
    G(E, C, P.snow, k.o, Kn);
    for (let N = 1; N <= Oe; N++)
      G(E - N, C, P.snow, k.o, Kn), G(E + N, C, P.snow, k.o, Kn), G(E, C - N, P.snow, k.o, Kn), G(E, C + N, P.snow, k.o, Kn);
  }), l.bolts.forEach((k) => {
    if (m <= 3.5)
      for (let E = Math.floor(k.y / g); E <= (k.y + 24) / g; E++) for (let C = Math.floor(k.x / m); C <= (k.x + 11) / m; C++)
        qc(qu, (C + 0.5) * m - k.x, (E + 0.5) * g - k.y) && G(C, E, P.sun, 1, Ar);
    else {
      const E = Math.round(k.x / m), C = Math.round(k.y / g);
      Wu.forEach((N, ue) => N.split("").forEach((V, ae) => {
        V === "#" && G(E + ae, C + ue, P.sun, 1, Ar);
      }));
    }
  }), { col: U, ids: W };
}
function zu(a, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), m = Math.max(6, Math.round(l.height / o)), g = l.width / c, v = l.height / m, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, w = (q) => {
    const K = zc(q, l);
    return Vu(K, jc(K, { clock: A, ambient: l.ambient, seed: l.seed }), c, m, g, v, A, l.ambient);
  }, P = w(a), se = l.reveal == null ? 1 : Xn(l.reveal);
  let ne = P.col, O = P.ids;
  if (se < 1) {
    const q = l.prev ? w(l.prev) : null, K = se * (c + 12);
    ne = new Array(c * m), O = new Uint8Array(c * m);
    for (let te = 0; te < c * m; te++) {
      const U = te % c, W = te / c | 0;
      (l.reduce ? se : Xn((K - U) / 12)) > $n(U, W) ? (ne[te] = P.col[te], O[te] = P.ids[te]) : q ? (ne[te] = q.col[te], O[te] = q.ids[te]) : (ne[te] = null, O[te] = 255);
    }
  }
  return Vc(ne, O, c, m, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function ju(a, l, o) {
  const c = o.width, m = o.height, g = o.reveal == null ? 1 : Xn(o.reveal), v = (O, q) => {
    const K = zc(q, o);
    Gu(O, K, jc(K, o));
  };
  if (a.clearRect(0, 0, c, m), g >= 1) {
    v(a, l);
    return;
  }
  if (o.prev && v(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = g, v(a, l), a.restore();
    return;
  }
  const A = a.canvas, w = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (w.width !== A.width || w.height !== A.height) && (w.width = A.width, w.height = A.height);
  const P = w.getContext("2d");
  P.setTransform(a.getTransform()), P.clearRect(0, 0, c, m), v(P, l);
  const se = g * (c + 64) - 64, ne = P.createLinearGradient(se, 0, se + 64, 0);
  ne.addColorStop(0, "rgba(0,0,0,1)"), ne.addColorStop(1, "rgba(0,0,0,0)"), P.globalCompositeOperation = "destination-in", P.fillStyle = ne, P.fillRect(0, 0, c, m), P.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(w, 0, 0), a.restore();
}
function Gu(a, l, o) {
  const { W: c, H: m, S: g, C: v, cw: A, yb: w, glowAt: P, soft: se, tw: ne, sy: O } = l, q = (b, ve) => {
    const Ce = cl(b);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, ve)).toFixed(3) + ")";
  }, K = (b, ve) => {
    const Ce = a.createLinearGradient(0, 0, c, 0);
    Ce.addColorStop(0, b[0]);
    for (let Oe = 0; Oe < b.length - 1; Oe++) {
      const k = (Oe + ve) * A, E = (k - ne / 2) / c, C = (k + ne / 2) / c;
      E > 0 && E < 1 && Ce.addColorStop(E, b[Oe]), C > 0 && C < 1 && Ce.addColorStop(C, b[Oe + 1]);
    }
    return Ce.addColorStop(1, b[b.length - 1]), Ce;
  }, te = Math.max(24, Math.ceil(c / 4)), U = (b, ve) => {
    a.beginPath();
    for (let Ce = 0; Ce <= te; Ce++) {
      const Oe = c * Ce / te, k = b == null ? 0 : w(Oe) + b;
      Ce ? a.lineTo(Oe, k) : a.moveTo(Oe, k);
    }
    for (let Ce = te; Ce >= 0; Ce--) {
      const Oe = c * Ce / te;
      a.lineTo(Oe, w(Oe) + ve);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = K(g.filter((b) => !b.night).map((b) => b.sky), 0.75), a.fillRect(0, 0, c, m);
  const W = a.createLinearGradient(0, 0, c, 0);
  for (let b = 0; b <= 64; b++) {
    const ve = P(c * b / 64);
    W.addColorStop(b / 64, q(ve.c, Math.min(1, ve.a)));
  }
  a.fillStyle = W;
  for (let b = 0; b < 8; b++)
    a.globalAlpha = 1 - b / 8, U(b * 2 * O, (b + 1) * 2 * O);
  a.fillStyle = K(g.filter((b) => b.night).map((b) => b.sky), 1.25);
  const X = Math.max(0.5, se), G = 6;
  a.globalAlpha = 1, U(null, -X);
  for (let b = 0; b < G; b++)
    a.globalAlpha = 1 - (b + 0.5) / G, U(-X + 2 * X * b / G, -X + 2 * X * (b + 1) / G);
  a.globalAlpha = 1;
  const Z = new Path2D(Fu), Q = new Path2D(Hu), T = new Path2D(Iu), j = new Path2D(Ou);
  a.fillStyle = v.star, o.stars.forEach((b) => {
    a.globalAlpha = b.o, b.big ? (a.save(), a.translate(b.x, b.y), a.scale(b.size, b.size), a.fill(Z), a.restore()) : (a.beginPath(), a.arc(b.x, b.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const ge = Yt(v.sun, "#ffffff", 0.55);
  o.suns.forEach((b) => {
    const ve = a.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.halo);
    ve.addColorStop(0, q(ge, 0.42)), ve.addColorStop(0.7, q(ge, 0)), a.fillStyle = ve, a.beginPath(), a.arc(b.x, b.y, b.halo, 0, Math.PI * 2), a.fill();
    const Ce = a.createLinearGradient(0, b.y - b.rad, 0, b.y + b.rad);
    Ce.addColorStop(0.6, v.sun), Ce.addColorStop(1, v.sunEdge), a.fillStyle = Ce, a.beginPath(), a.arc(b.x, b.y, b.rad, 0, Math.PI * 2), a.fill();
  });
  const Te = Yt(v.moon, "#ffffff", 0.6);
  o.moons.forEach((b) => {
    a.save(), a.translate(b.x - b.d / 2, b.y - b.d / 2), a.scale(b.d / 46, b.d / 46);
    const ve = a.createLinearGradient(0, 6, 0, 40);
    ve.addColorStop(0, Te), ve.addColorStop(1, v.moon), a.fillStyle = ve, a.fill(Q), a.restore();
  }), o.clouds.forEach((b) => {
    a.save(), a.globalAlpha = b.o, a.translate(b.x, b.y), a.scale(b.w / 46, b.h / 30.66), a.translate(-4, -9.67), a.fillStyle = b.fill, a.fill(T), a.restore();
  }), o.fogs.forEach((b) => {
    const ve = a.createLinearGradient(b.x, 0, b.x + b.w, 0);
    ve.addColorStop(0, q(b.c, 0)), ve.addColorStop(0.25, q(b.c, b.a)), ve.addColorStop(0.75, q(b.c, b.a)), ve.addColorStop(1, q(b.c, 0)), a.fillStyle = ve, a.fillRect(b.x, b.y, b.w, 6 * O);
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
  function A() {
    v && (v.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  A(), setInterval(A, 15e3);
  const w = o("createFlow"), P = o("createMovementsSlot"), se = o("createTimingSlot"), ne = o("createFinishSlot"), O = o("movementStepSummary"), q = o("timingStepSummary"), K = o("finishStepSummary"), te = o("continueToTiming"), U = o("continueToFinish"), W = o("finishMoveButton");
  let X = !1, G = [];
  function Z(t) {
    !t || G.some((i) => i.node === t) || G.push({ node: t, parent: t.parentNode, next: t.nextSibling });
  }
  function Q(t, i) {
    t && (Z(t), i.appendChild(t));
  }
  function T() {
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
    var oe, le;
    if (!ct) return;
    Ue[mt];
    const t = Je.filter((ee) => !ee.hidden), i = t.filter((ee) => ee.kind !== "rest").length, s = t.filter((ee) => ee.kind === "rest").length;
    O.textContent = i ? i + " movement" + (i === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const u = i > 0, f = a.querySelector('[data-open-step="timing"]'), M = a.querySelector('[data-open-step="finish"]');
    f.disabled = !u, te.disabled = !u, q.textContent = u ? Et(E.value) + " · " + Xt(C.value) + " movement · " + Xt(N.value) + " rest" : "Add a movement first", M.disabled = !(u && X);
    const R = ((m == null ? void 0 : m.value) || "").trim(), z = [];
    (oe = o("includeWarmupPreset")) != null && oe.checked && z.push("warm-up"), (le = o("includeCooldownPreset")) != null && le.checked && z.push("cooldown"), K.textContent = R ? R + (z.length ? " · " + z.join(" + ") : "") : z.length ? z.join(" + ") : "Name and optional extras";
  }
  function Te() {
    var Se, Ge, Ee;
    w.hidden = !1, X = !1;
    const t = a.querySelector(".editNameRow"), i = o("createMoveOptions"), s = a.querySelector(".timeTiles"), u = o("routineSummaryModal"), f = a.querySelector(".tempoRevealRow"), M = o("tempoExperiment"), R = (Se = o("warmupList")) == null ? void 0 : Se.closest("section"), z = o("movementCreatorLaunch"), oe = o("movementCreator"), le = (Ge = o("strengthList")) == null ? void 0 : Ge.closest("section"), ee = (Ee = o("cooldownList")) == null ? void 0 : Ee.closest("section");
    [i == null ? void 0 : i.querySelector(".createExtras"), R, z, oe, le, ee].forEach((Me) => Me && Q(Me, P)), [i, s, u, f, M].forEach((Me) => Q(Me, se)), Q(t, ne), j("movements"), ge();
  }
  function b() {
    T(), w.hidden = !0, a.querySelectorAll(".createStep").forEach((t) => t.classList.remove("active"));
  }
  a.querySelectorAll("[data-open-step]").forEach((t) => t.addEventListener("click", () => {
    t.disabled || j(t.dataset.openStep);
  })), te.addEventListener("click", () => {
    te.disabled || j("timing");
  }), U.addEventListener("click", () => j("finish")), W.addEventListener("click", () => o("saveWorkoutEdit").click());
  const ve = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, Ce = o("homeNav"), Oe = o("settingsNav");
  function k(t) {
    Object.entries(ve).forEach(([i, s]) => s.classList.toggle("active", i === t)), Ce.classList.toggle("active", t === "home"), Oe.classList.toggle("active", t === "settings"), t === "home" && setTimeout(Nr, 400), t === "settings" && (requestAnimationFrame(() => So(a.querySelector(".tab.active"), !1)), di());
  }
  const E = o("totalTime"), C = o("workTime"), N = o("restTime"), ue = o("totalOut"), V = o("workOut"), ae = o("restOut"), de = o("totalFill"), fe = o("workFill"), We = o("restFill"), et = o("roundsInput"), xt = o("roundsFill"), mn = o("roundsOut"), Ln = o("totalLabel"), Vt = o("routineSummaryModal"), Xe = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Ct = Xe.map((t) => ({ ...t })), Je = [
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
  const gn = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let Mn = gn.map((t) => ({ ...t }));
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
  }, dt = ro(l.data), Ue = dt.profiles;
  let mt = Ue[dt.selected] ? dt.selected : dt.order.find((t) => Ue[t]) || "kettlebell";
  function ro(t) {
    const i = t && typeof t == "object" ? JSON.parse(JSON.stringify(t)) : {}, s = i.profiles && Object.keys(i.profiles).length ? i.profiles : JSON.parse(JSON.stringify(ji)), u = (Array.isArray(i.order) ? i.order : Object.keys(s)).filter((f) => s[f]);
    return Object.keys(s).forEach((f) => {
      u.includes(f) || u.push(f);
    }), {
      v: 1,
      profiles: s,
      order: u,
      selected: i.selected || u[0],
      history: Array.isArray(i.history) ? i.history : [],
      checkins: (Array.isArray(i.checkins) ? i.checkins : Gi(i.energy)).map(wi),
      settings: { ...i.settings || {} }
    };
  }
  function Gi(t) {
    if (!Array.isArray(t)) return [];
    const i = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return t.forEach((u) => {
      const f = new Date(u.at);
      if (isNaN(f)) return;
      const M = f.getFullYear() + "-" + String(f.getMonth() + 1).padStart(2, "0") + "-" + String(f.getDate()).padStart(2, "0"), R = f.getHours() < 14 ? "morning" : "evening";
      if (s.some((oe) => oe.date === M && oe.slot === R)) return;
      const z = i.indexOf(u.value) + 1;
      z > 0 && s.push({ date: M, slot: R, mood: null, energy: z, at: u.at });
    }), s;
  }
  function wi(t) {
    if (t.scale === 100) return t;
    const i = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...t, mood: i(t.mood), energy: i(t.energy), scale: 100 };
  }
  function vn() {
    ct || (dt.selected = mt, dt.order = dt.order.filter((t) => Ue[t] && t !== bt), l.save(dt));
  }
  function tt() {
    return dt.settings;
  }
  function Hn(t) {
    const i = Ue[t];
    if (!i) return;
    mt = t;
    const s = o("workoutNameInput");
    if (s && (s.value = i.name), E.value = i.total, C.value = i.work, N.value = i.rest, et.value = i.rounds || 1, i.customSequence) {
      const u = (i.sequence || []).map((M) => ({ ...M })), f = (M) => u.filter((R) => R.presetRole === M).map(({ presetRole: R, ...z }) => z);
      Ct = (i.warmup || f("warmup")).map((M) => ({ ...M })), Mn = (i.cooldown || f("cooldown")).map((M) => ({ ...M })), Je = u.filter((M) => !M.presetRole), qa(i.preset || "movement", !1);
    } else
      E.min = 3, E.max = 40, E.step = 1, C.min = 20, C.max = 60, C.step = 5, N.min = 5, N.max = 30, N.step = 5, Ct = (i.warmup || Xe).map((u) => ({ ...u })), Mn = (i.cooldown || gn).map((u) => ({ ...u })), Je = i.strength.map((u) => Array.isArray(u) ? (([f, M, R, z = !1]) => ({ id: f, name: M, group: R, kind: "work", hidden: !!z }))(u) : { ...u });
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === t)), _();
  }
  function Ui(t, i, s) {
    const u = t.getBoundingClientRect(), f = u.width / 2, M = u.height / 2, R = i - f, z = s - M;
    let oe = 1 / 0, le = 1 / 0;
    R !== 0 && (oe = f / Math.abs(R)), z !== 0 && (le = M / Math.abs(z));
    const ee = Math.min(Math.max(1 / Math.min(oe, le), 0), 1);
    let J = Math.atan2(z, R) * (180 / Math.PI) + 90;
    return J < 0 && (J += 360), { edge: ee, angle: J };
  }
  function vt(t, i, s = !1) {
    const u = t.getBoundingClientRect(), f = i.clientX - u.left, M = i.clientY - u.top, { edge: R, angle: z } = Ui(t, f, M), oe = s ? 100 : R * 100;
    t.style.setProperty("--edge-proximity", oe.toFixed(3)), t.style.setProperty("--cursor-angle", z.toFixed(3) + "deg"), t.classList.toggle("borderGlowActive", s || oe >= 30);
  }
  function Ae(t) {
    t.addEventListener("pointermove", (s) => vt(t, s, !1)), t.addEventListener("pointerenter", (s) => vt(t, s, !1)), t.addEventListener("pointerdown", (s) => vt(t, s, !0));
    const i = () => {
      t.classList.remove("borderGlowActive"), t.style.setProperty("--edge-proximity", "0");
    };
    t.addEventListener("pointerleave", i), t.addEventListener("pointerup", i), t.addEventListener("pointercancel", i);
  }
  Ae(o("addWorkoutPanel"));
  let ct = !1, bt = null;
  function Ie(t) {
    return String(t ?? "").replace(/[&<>"']/g, (i) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[i]);
  }
  function so(t) {
    return t.summary ? t.summary : t.customSequence ? Et(t.total) + " · custom move" : Et(t.total) + " · " + Xt(t.work) + " / " + Xt(t.rest) + " · warm-up + cooldown";
  }
  function No(t, i) {
    var M;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = t, s.tabIndex = 0;
    const u = i.activityCount ?? (((M = i.sequence) == null ? void 0 : M.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Ie(i.name) + '</div><div class="sub">' + Ie(so(i)) + '</div><span class="sourceTag">' + Ie(i.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (u ? u + " activities" + ((i.rounds || 1) > 1 ? " × " + i.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Ie(i.name) + "</div></div>";
    const f = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(s, f), Ae(s), s.addEventListener("click", (R) => {
      R.target.closest("button") || Hn(t);
    }), s.addEventListener("keydown", (R) => {
      (R.key === "Enter" || R.key === " ") && !R.target.closest("button") && (R.preventDefault(), Hn(t));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (R) => {
      R.stopPropagation(), Hn(t), As(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (R) => {
      R.stopPropagation(), Hn(t), Bn();
    }), s;
  }
  function Yi() {
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.remove()), dt.order.forEach((t) => {
      Ue[t] && No(t, Ue[t]);
    }), a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.classList.toggle("active", t.dataset.workout === mt));
  }
  Yi(), o("addWorkoutPanel").addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && (t.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    ct = !0, bt = "custom-" + Date.now(), Ue[bt] = {
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
    }, Hn(bt), As(!0);
  });
  let Ne = [], Ve = 0, Zt = 0, Ta = 1, wn = !1, Tt = null, Oa = null, Nt = !1, La = dt.settings.upcomingCount ?? "all", Fn = "movement";
  function fa(t, i, s) {
    return (Number(t) - i) / (s - i) * 100;
  }
  function Xt(t) {
    const i = Math.max(0, Number(t) || 0);
    return i >= 3600 && i % 3600 === 0 ? i / 3600 + " hr" : i >= 60 && i % 60 === 0 ? i / 60 + " min" : i >= 60 ? Math.round(i / 60) + " min" : Math.round(i) + " sec";
  }
  function Et(t) {
    const i = Math.max(0, Number(t) || 0);
    return i >= 60 && i % 60 === 0 ? i / 60 + " hr" : i >= 60 ? Math.floor(i / 60) + " hr " + i % 60 + " min" : i + " min";
  }
  function Aa() {
    de.style.width = fa(E.value, Number(E.min), Number(E.max)) + "%", fe.style.width = fa(C.value, Number(C.min), Number(C.max)) + "%", We.style.width = fa(N.value, Number(N.min), Number(N.max)) + "%", V.textContent = Xt(C.value), ae.textContent = Xt(N.value);
    const t = Number(et.value) || 1;
    xt.style.width = fa(t, 1, 10) + "%", Ln.textContent = t > 1 ? "Time per round" : "Total time";
  }
  function ia(t) {
    return t.filter((i) => !i.hidden);
  }
  function Gt(t) {
    const i = Math.max(0, Math.round(Number(t) || 0)), s = Math.floor(i / 3600), u = Math.floor(i % 3600 / 60), f = i % 60;
    return (s ? s + ":" + String(u).padStart(2, "0") : u) + ":" + String(f).padStart(2, "0");
  }
  function An(t) {
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
    }, M = f(i.searchParams.get("t") || i.searchParams.get("start")), R = f(i.searchParams.get("end"));
    return { id: u, start: M, end: R > M ? R : null };
  }
  function lt(t, i) {
    if (t.useVideoLength === !1) return Math.max(5, Number(t.duration) || i || 300);
    const s = Number(t.start) || 0, u = Number(t.end) || Number(t.videoDuration) || 0;
    return u > s ? Math.round(u - s) : Number(t.duration) || 300;
  }
  function ma(t, i) {
    const s = Math.max(0, Number(t) || 0);
    return Math.round(i === "hour" ? s * 3600 : i === "min" ? s * 60 : s);
  }
  function qa(t, i = !0) {
    Fn = t, a.querySelectorAll(".createPresetBtn").forEach((u) => u.classList.toggle("active", u.dataset.movePreset === t));
    const s = Ue[mt];
    s && (s.preset = t), t === "work" ? (E.min = 30, E.max = 480, E.step = 30, C.min = 300, C.max = 7200, C.step = 300, N.min = 60, N.max = 1800, N.step = 60, i && (E.value = 60, C.value = 1500, N.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (E.min = 3, E.max = 40, E.step = 1, C.min = 20, C.max = 60, C.step = 5, N.min = 5, N.max = 30, N.step = 5, i && (E.value = 20, C.value = 45, N.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), Aa();
  }
  function Bo(t, i) {
    const s = Fn === "work";
    return t.map((u, f) => ({ ...u, id: i + "-" + f + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(C.value) }));
  }
  function Po() {
    const t = Ue[mt];
    t != null && t.customSequence && (t.includeWarmup = o("includeWarmupPreset").checked, t.includeCooldown = o("includeCooldownPreset").checked, t.includeWarmup && !Ct.length && (Ct = Bo(Xe, "warm")), t.includeCooldown && !Mn.length && (Mn = Bo(gn, "cool")), _());
  }
  function L() {
    const t = o("upcomingCountSetting");
    if (!t) return;
    const i = Math.max(1, Ne.length - 1), s = La;
    t.innerHTML = "";
    for (let M = 1; M <= i; M++) {
      const R = document.createElement("option");
      R.value = String(M), R.textContent = String(M), t.appendChild(R);
    }
    const u = document.createElement("option");
    u.value = "all", u.textContent = "All", t.appendChild(u);
    const f = s === "all" ? "all" : String(Math.min(Number(s) || 1, i));
    t.value = f, La = f === "all" ? "all" : Number(f);
  }
  function _() {
    Number(E.value) * 60;
    const t = Number(C.value), i = Number(N.value), s = Ue[mt], u = !!(s != null && s.customSequence), f = (u ? !s.includeWarmup : s != null && s.warmupOff) ? [] : ia(Ct), M = ia(Je), R = u && !s.includeCooldown ? [] : ia(Mn);
    if (s && (s.total = Number(E.value), s.work = t, s.rest = i, s.rounds = Number(et.value) || 1, s.customSequence ? (s.sequence = Je.map((ke) => ({ ...ke })), s.warmup = Ct.map((ke) => ({ ...ke })), s.cooldown = Mn.map((ke) => ({ ...ke }))) : (s.strength = Je.map((ke) => ({ ...ke })), s.warmup = Ct.map((ke) => ({ ...ke })), s.cooldown = Mn.map((ke) => ({ ...ke })))), s != null && s.customSequence) {
      const ke = [...f.map((it) => ({ ...it, section: "warmup" })), ...M, ...R.map((it) => ({ ...it, section: "cooldown" }))].map((it) => {
        if (it.kind === "video") return { ...it, duration: lt(it, t), rest: 0 };
        if (it.kind === "rest") {
          const un = it.useGlobalTiming === !0 ? i : Number(it.duration) || i;
          return { ...it, duration: un, rest: 0 };
        }
        const cn = it.useGlobalTiming === !1 && Number(it.duration) || t;
        return { ...it, duration: cn, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Ne = [], ke.forEach((it, cn) => {
        Ne.push(it);
        const un = ke[cn + 1];
        it.kind !== "rest" && un && un.kind !== "rest" && Ne.push({
          id: "auto-rest-" + cn,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Ne = ke;
    } else
      Ne = [...f.map((ke) => ({ ...ke, section: "warmup" })), ...M, ...R.map((ke) => ({ ...ke, section: "cooldown" }))].map((ke) => ke.kind === "video" ? { ...ke, duration: lt(ke, t), rest: 0 } : ke.kind === "rest" ? { ...ke, duration: ke.useGlobalTiming === !0 ? i : Number(ke.duration) || i, rest: 0 } : { ...ke, duration: ke.useGlobalTiming === !1 && Number(ke.duration) || t, rest: i }), Ne.forEach((ke, it) => {
        var cn;
        ((cn = Ne[it + 1]) == null ? void 0 : cn.kind) === "rest" && (ke.rest = 0);
      }), Ne.length && (Ne[Ne.length - 1].rest = 0);
    const z = Math.max(1, Math.min(10, Number(et.value) || 1)), oe = Ne, le = (ke) => z <= 1 ? null : ke.section === "warmup" || ke.presetRole === "warmup" ? "first" : ke.section === "cooldown" || ke.presetRole === "cooldown" ? "last" : ke.kind === "video" && (ke.videoRounds === "first" || ke.videoRounds === "last") ? ke.videoRounds : null, ee = (ke) => !!le(ke), J = oe.filter((ke) => !ee(ke)), Se = oe.filter(ee), Ge = J.length, Ee = J.reduce((ke, it) => ke + it.duration + it.rest, 0), Me = Se.reduce((ke, it) => ke + it.duration + it.rest, 0), xe = [
      Se.some((ke) => ke.section === "warmup" || ke.presetRole === "warmup") && "warm-up",
      Se.some((ke) => ke.section === "cooldown" || ke.presetRole === "cooldown") && "cooldown",
      Se.some((ke) => ke.kind === "video" && !ke.section && !ke.presetRole) && "video"
    ].filter(Boolean), ut = xe.length > 1 ? xe.slice(0, -1).join(", ") + " & " + xe[xe.length - 1] : xe[0] || "";
    Ne = [];
    const pt = (ke, it) => {
      const cn = le(ke);
      return !cn || (cn === "first" ? it === 1 : it === z);
    };
    for (let ke = 1; ke <= z; ke++)
      if (oe.filter((it) => pt(it, ke)).forEach((it, cn) => Ne.push({ ...it, id: it.id + (z > 1 ? "-r" + ke : ""), round: ke, roundIndex: cn })), ke < z && Ge)
        if (s != null && s.customSequence)
          Ne.push({ id: "round-break-" + ke, name: "Rest", group: "Round " + (ke + 1) + " next", kind: "rest", hidden: !1, duration: i, rest: 0, round: ke, roundIndex: Ge, roundBreak: !0 });
        else {
          const it = Ne[Ne.length - 1];
          it.rest = i, it.roundBreakAfter = !0;
        }
    Aa();
    const De = Ne.reduce((ke, it) => ke + it.duration + it.rest, 0), ft = Math.round(Ee / 60), kt = Math.round(De / 60), at = z > 1 ? Et(ft) + " × " + z + " rounds" + (Me ? " + " + Xt(Me) + " " + ut : "") + " (" + Et(kt) + ")" : Et(kt), $e = [f.length ? "warm-up" : "", R.length ? "cooldown" : ""].filter(Boolean), on = s != null && s.customSequence ? at + " · " + Ge + " items" + ($e.length && !(z > 1 && Me) ? " · " + $e.join(" + ") : "") : at + " · " + Xt(t) + " / " + Xt(i) + ($e.length && !(z > 1 && Me) ? " · " + $e.join(" + ") : "");
    ue.textContent = Xt(Ee);
    const kn = Ne.filter((ke) => !ke.roundBreak).length, Wt = z > 1 ? kn + " activities · " + z + " rounds" : Ge + " activities";
    mn.textContent = z > 1 ? z + " rounds · " + Et(kt) + " total" : "1 round", o("roundsCount").textContent = z, a.querySelectorAll("[data-rounds-step]").forEach((ke) => {
      ke.disabled = Number(ke.dataset.roundsStep) < 0 ? z <= 1 : z >= 10;
    }), s && (s.summary = on, s.activityCount = Ge);
    const fi = a.querySelector(".workoutPanel.active .sub");
    fi && (fi.textContent = on), Vt.textContent = on, Zi(), a.querySelectorAll(".workoutPanel.active .activityCount").forEach((ke) => ke.textContent = Wt), Aa(), Pe(), Ga(), Oo(), L(), ct && ge(), ve.workout.classList.contains("active") && !Tt && cr();
  }
  const I = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', Y = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', he = {
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
  }, me = (t) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (he[t] || "") + "</svg>";
  a.querySelectorAll("[data-icon]").forEach((t) => {
    t.innerHTML = me(t.dataset.icon);
  });
  let pe = null, we = null;
  function be(t) {
    return t = Math.max(1, Number(t) || 0), t >= 3600 && t % 3600 === 0 ? { value: t / 3600, unit: "hour" } : t >= 60 && t % 60 === 0 ? { value: t / 60, unit: "min" } : { value: t, unit: "sec" };
  }
  function Be(t = !1) {
    const i = a.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    i && (i.focus({ preventScroll: !0 }), t && i.select());
  }
  function ze(t, i, s = {}) {
    const u = t.kind === "rest", f = t.kind === "video", M = f ? t.useVideoLength !== !1 : u ? t.useGlobalTiming === !0 : t.useGlobalTiming !== !1, R = Number(u ? N.value : C.value), z = be(f ? t.useVideoLength === !1 ? t.duration : lt({ ...t, useVideoLength: !0 }) : M ? R : t.duration || R), oe = f && (Number(t.videoDuration) > 0 || Number(t.end) > 0), le = f ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Ie(t.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ie(t.autoName ? "" : t.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([De, ft]) => '<option value="' + De + '"' + ((t.videoRounds || "every") === De ? " selected" : "") + ">" + ft + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ie(t.name) + '" placeholder="' + (u ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Ie(t.group) + '" placeholder="' + (u ? "Rest" : "e.g. Glutes + legs") + '"></label>', ee = f ? "Play the whole " + (Number(t.start) > 0 || Number(t.end) > 0 ? "clip" : "video") + (oe ? " · " + Gt(lt({ ...t, useVideoLength: !0 })) : "") : "Use global timing · " + Xt(R), J = document.createElement("div");
    J.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), J.dataset.index = i, J.dataset.id = t.id;
    const Se = s.isNew ?? (we == null ? void 0 : we.item) === t, Ge = s.sheet ? '<div class="moveEditActions sheetActions">' + (Se ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (t.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Ie(t.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Se ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    J.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (f ? " videoFields" : "") + '">' + le + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (M ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Ie(ee) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + z.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((De) => '<option value="' + De + '"' + (De === z.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[De] + "</option>").join("") + "</select></div></div>" + Ge + "</div>";
    const Ee = (De) => J.querySelector("[data-f=" + De + "]"), Me = () => {
      const De = Ee("global").checked;
      Ee("dur").disabled = De, Ee("unit").disabled = De, J.querySelector(".creatorDurationRow").classList.toggle("isDisabled", De);
    };
    Ee("global").addEventListener("change", Me), Me();
    const xe = () => {
      var De;
      if (s.sheet) {
        (De = s.onCancel) == null || De.call(s);
        return;
      }
      Se && nt(), pe = null, _();
    }, ut = () => {
      var kt;
      if (f) {
        pt();
        return;
      }
      const De = Ee("name").value.trim();
      if (!De) {
        Ee("name").focus();
        return;
      }
      t.name = De, t.group = Ee("group").value.trim() || (u ? "Rest" : "Movement");
      const ft = Ee("global").checked;
      if (t.useGlobalTiming = ft, ft || (t.duration = Math.max(u ? 5 : 1, ma(Ee("dur").value, Ee("unit").value))), s.sheet) {
        (kt = s.onSaved) == null || kt.call(s);
        return;
      }
      Se && (we = null), pe = null, _(), It(Se ? u ? "Rest added" : "Movement added" : "Movement updated");
    }, pt = () => {
      var $e;
      const De = Ee("url").value.trim(), ft = An(De);
      if (!ft) {
        Ee("urlError").hidden = !1, Ee("url").classList.add("invalid"), Ee("url").focus();
        return;
      }
      const kt = ft.id !== t.videoId;
      t.url = De, t.videoId = ft.id, t.start = ft.start, t.end = ft.end, kt && (t.videoDuration = null, t.videoError = null);
      const at = Ee("name").value.trim();
      t.autoName = !at, t.name = at || (kt ? "" : t.name) || t.videoTitle || "YouTube video", t.group = "Video", t.videoRounds = Ee("rounds").value, t.useVideoLength = Ee("global").checked, t.useVideoLength || (t.duration = Math.max(5, ma(Ee("dur").value, Ee("unit").value))), s.sheet ? ($e = s.onSaved) == null || $e.call(s) : (Se && (we = null), pe = null, _(), It(Se ? "Video added" : "Video updated")), (kt || !t.videoDuration || t.autoName && !t.videoTitle) && Gr(t);
    };
    if (f && Ee("url").addEventListener("input", () => {
      Ee("urlError").hidden = !0, Ee("url").classList.remove("invalid");
    }), J.querySelector("[data-a=cancel]").addEventListener("click", xe), J.querySelector("[data-a=save]").addEventListener("click", ut), s.sheet && !Se) {
      J.querySelector("[data-a=hide]").addEventListener("click", () => {
        var ft;
        return (ft = s.onHide) == null ? void 0 : ft.call(s);
      });
      const De = J.querySelector("[data-a=remove]");
      Mo(De, De.querySelector(".removeFill"), 1200, () => {
        var ft;
        return (ft = s.onRemove) == null ? void 0 : ft.call(s);
      });
    }
    return J.addEventListener("keydown", (De) => {
      De.key === "Escape" && (De.preventDefault(), De.stopPropagation(), xe()), De.key === "Enter" && De.target.matches("input") && (De.preventDefault(), ut());
    }), J;
  }
  function Ke(t, i) {
    const s = o(i);
    s.innerHTML = "", t.forEach((u, f) => {
      if (u === pe && !Qn()) {
        s.appendChild(ze(u, f));
        return;
      }
      const M = document.createElement("div");
      M.className = "moveRow" + (u.hidden ? " hidden" : "") + (u.kind === "rest" ? " restItem" : "") + (u.kind === "video" ? " videoItem" : "") + (Yr(u) ? " noMeta" : ""), M.dataset.index = f, M.dataset.id = u.id;
      const R = u.kind === "rest" ? u.useGlobalTiming === !0 ? "Global timing" : Xt(u.duration) : u.useGlobalTiming === !1 ? Xt(u.duration) : "Global timing", z = u.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", oe = u.kind === "video" ? u.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (u.useVideoLength === !1 ? "stops after " + Xt(u.duration) : Number(u.videoDuration) > 0 || Number(u.end) > 0 ? Gt(lt(u)) : "plays to the end") + (u.videoRounds === "first" ? " · first round only" : u.videoRounds === "last" ? " · last round only" : "") : u.group + " · " + R, le = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Ie(u.name) + '. Drag, or use the up and down arrow keys">' + I + "</button>", ee = '<div class="moveText"><div class="moveItemName">' + Ie(u.name) + z + '</div><div class="moveMeta">' + Ie(oe) + "</div></div>", J = (Ee) => Ee.addEventListener("keydown", (Me) => {
        var pt, De;
        if (Me.key !== "ArrowUp" && Me.key !== "ArrowDown") return;
        Me.preventDefault();
        const xe = t.indexOf(u), ut = xe + (Me.key === "ArrowUp" ? -1 : 1);
        ut < 0 || ut >= t.length || (t.splice(xe, 1), t.splice(ut, 0, u), _(), (De = (pt = o(i).children[ut]) == null ? void 0 : pt.querySelector(".dragHandle")) == null || De.focus());
      });
      if (Qn()) {
        M.classList.add("phoneRow"), M.tabIndex = 0, M.setAttribute("role", "button"), M.setAttribute("aria-label", "Edit " + (u.name || "step")), M.innerHTML = le + ee + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Ee = M.querySelector(".dragHandle");
        Ee.addEventListener("pointerdown", (Me) => Ye(Me, M, s, t)), J(Ee), M.addEventListener("click", (Me) => {
          Me.target.closest(".dragHandle") || yi(u, t);
        }), M.addEventListener("keydown", (Me) => {
          Me.key === "Enter" && Me.target === M && (Me.preventDefault(), yi(u, t));
        }), s.appendChild(M);
        return;
      }
      M.innerHTML = le + ee + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Ie(u.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (u.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Ie(u.name) + '"><span class="removeFill"></span><span class="removeLabel">' + Y + "</span></button></div>", M.querySelector(".editBtn").addEventListener("click", () => {
        nt(), pe = u, _(), Be();
      }), M.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        u.hidden = !u.hidden, _();
      });
      const Se = M.querySelector(".removeBtn");
      Mo(Se, Se.querySelector(".removeFill"), 1200, () => {
        const Ee = t.indexOf(u);
        Ee < 0 || (t.splice(Ee, 1), _(), It("Removed " + u.name, { label: "Undo", run: () => {
          t.splice(Math.min(Ee, t.length), 0, u), _();
        } }));
      });
      const Ge = M.querySelector(".dragHandle");
      Ge.addEventListener("pointerdown", (Ee) => Ye(Ee, M, s, t)), J(Ge), s.appendChild(M);
    });
  }
  const qe = () => {
    var t;
    return (t = window.matchMedia) == null ? void 0 : t.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, _e = (t) => {
    var i;
    try {
      (i = navigator.vibrate) == null || i.call(navigator, t);
    } catch {
    }
  };
  function Ye(t, i, s, u) {
    if (t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const f = t.currentTarget, M = t.pointerId, R = !qe();
    try {
      f.setPointerCapture(M);
    } catch {
    }
    const z = i.closest(".exerciseScroller") || rn(i), oe = s.style.position;
    s.style.position = "relative";
    const le = [...s.children].filter((rt) => rt.classList.contains("moveRow")), ee = le.indexOf(i), J = parseFloat(getComputedStyle(s).rowGap) || 8, Se = i.offsetHeight, Ge = Se + J, Ee = le.map((rt) => rt.offsetTop), Me = le.map((rt) => rt.offsetHeight), xe = () => s.getBoundingClientRect().top, ut = s.getBoundingClientRect().width, pt = t.clientY - (xe() + Ee[ee]), De = t.clientX;
    let ft = t.clientY, kt = t.clientX, at = xe() + Ee[ee], $e = 0, on = 0, kn = 0, Wt = 1, fi = 0, ke = ee, it = !1, cn = 0, un = !1, Ks = !1, xr = Ee[ee];
    s.classList.add("reordering"), i.classList.add("dragging"), i.style.transition = "none", _e(8);
    const $s = () => {
      const rt = ft - pt + Se / 2 - xe();
      let wt = 0;
      return le.forEach((Ft, jn) => {
        jn !== ee && rt > Ee[jn] + Me[jn] / 2 && wt++;
      }), wt;
    }, Xs = () => {
      le.forEach((rt, wt) => {
        if (wt === ee) return;
        const Ft = ee < ke && wt > ee && wt <= ke ? -Ge : ee > ke && wt >= ke && wt < ee ? Ge : 0;
        rt.style.transform = Ft ? "translateY(" + Ft + "px)" : "";
      });
    }, rs = () => {
      const rt = s.getBoundingClientRect(), wt = Math.abs(kt - De) > Math.max(80, ut * 0.3) || kt < rt.left - 24 || kt > rt.right + 24;
      wt !== it && (it = wt, i.classList.toggle("willReturn", wt), _e(wt ? 10 : 4));
      const Ft = it ? ee : $s();
      Ft !== ke && (ke = Ft, Xs(), it || _e(4));
    }, mi = () => {
      if (ke === ee) return Ee[ee];
      const rt = le.filter((Ft, jn) => jn !== ee);
      let wt = Ee[0];
      for (let Ft = 0; Ft < ke; Ft++) wt += rt[Ft].offsetHeight + J;
      return wt;
    }, yr = () => {
      const rt = R ? Math.min(Math.abs($e) / 40, 1) : 0, wt = R && !un ? Math.max(-3, Math.min(3, kn * 0.6)) : 0;
      i.style.transform = "translate(" + on.toFixed(2) + "px," + (at - (xe() + Ee[ee])).toFixed(2) + "px) rotate(" + wt.toFixed(2) + "deg) scale(" + (Wt * (1 - 0.04 * rt)).toFixed(4) + "," + (Wt * (1 + 0.06 * rt)).toFixed(4) + ")";
    }, Qe = () => {
      cn = requestAnimationFrame(Qe);
      const rt = kt - De, wt = un ? xe() + xr : ft - pt, Ft = un ? 0 : it ? rt * 0.9 : Math.max(-22, Math.min(22, rt * 0.22)), jn = un ? 1 : it ? 0.97 : 1.035;
      if (!R) {
        at = wt, on = un ? 0 : Ft, Wt = 1, yr(), un && jt();
        return;
      }
      const yu = un ? 0.24 : 0.2, ku = un ? 0.62 : 0.68;
      $e = ($e + (wt - at) * yu) * ku, at += $e, kn = (kn + (Ft - on) * 0.16) * 0.7, on += kn, fi = (fi + (jn - Wt) * 0.22) * 0.6, Wt += fi, yr(), un && Math.abs($e) < 0.15 && Math.abs(wt - at) < 0.5 && Math.abs(on) < 0.5 && Math.abs(Wt - 1) < 3e-3 && jt();
    }, _t = setInterval(() => {
      if (!z || un) return;
      const rt = z.getBoundingClientRect(), wt = 56, Ft = ft < rt.top + wt ? -10 : ft > rt.bottom - wt ? 10 : 0;
      Ft && (z.scrollTop += Ft, rs());
    }, 30);
    function jt() {
      if (Ks) return;
      Ks = !0, cancelAnimationFrame(cn);
      const rt = ke !== ee, wt = i.dataset.id;
      if (s.classList.remove("reordering"), le.forEach((jn) => {
        jn.style.transition = "none", jn.style.transform = "";
      }), i.classList.remove("dragging", "willReturn"), s.style.position = oe, rt) {
        const [jn] = u.splice(ee, 1);
        u.splice(ke, 0, jn);
      }
      _();
      const Ft = wt && s.querySelector('.moveRow[data-id="' + wt + '"]');
      Ft && R && Ft.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), rt && It("Order saved");
    }
    const pn = (rt) => {
      if (rt.pointerId === M) {
        if (rt.pointerType === "mouse" && rt.buttons === 0) {
          pa();
          return;
        }
        ft = rt.clientY, kt = rt.clientX, rs();
      }
    }, zn = (rt) => {
      rt.pointerId === M && pa();
    };
    function pa() {
      un || (window.removeEventListener("pointermove", pn, !0), window.removeEventListener("pointerup", zn, !0), window.removeEventListener("pointercancel", zn, !0), f.removeEventListener("lostpointercapture", pa), clearInterval(_t), it && ke !== ee && (ke = ee, Xs()), xr = mi(), un = !0, _e(6), setTimeout(jt, 800));
    }
    window.addEventListener("pointermove", pn, !0), window.addEventListener("pointerup", zn, !0), window.addEventListener("pointercancel", zn, !0), f.addEventListener("lostpointercapture", pa), cn = requestAnimationFrame(Qe), yr();
  }
  function Pe() {
    var f, M, R, z;
    const t = Ue[mt], i = (f = o("warmupList")) == null ? void 0 : f.closest("section"), s = (M = o("cooldownList")) == null ? void 0 : M.closest("section"), u = (z = (R = o("strengthList")) == null ? void 0 : R.closest("section")) == null ? void 0 : z.querySelector(".sectionTitle");
    t != null && t.customSequence ? (i && (i.hidden = !t.includeWarmup), s && (s.hidden = !t.includeCooldown), u && (u.textContent = "Move sequence")) : (i && (i.hidden = !!(t != null && t.warmupOff)), s && (s.hidden = !1), u && (u.textContent = "Kettlebell work")), Ke(Ct, "warmupList"), Ke(Je, "strengthList"), Ke(Mn, "cooldownList");
  }
  function nt() {
    if (!we) return;
    const { item: t, arr: i } = we;
    we = null;
    const s = i.indexOf(t);
    s >= 0 && i.splice(s, 1), pe === t && (pe = null);
  }
  function gt(t) {
    return t.id === "warmupList" ? { arr: Ct, kind: "warmup", group: "Warm-up" } : t.id === "cooldownList" ? { arr: Mn, kind: "cooldown", group: "Cooldown" } : { arr: Je, kind: "work", group: "" };
  }
  function Ot(t, i) {
    const s = gt(i), u = Date.now().toString(36);
    return t === "video" ? { id: "video-" + u, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : t === "rest" ? { id: "rest-" + u, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(N.value) } : { id: "movement-" + u, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(C.value) };
  }
  const St = "cubic-bezier(.34,1.46,.64,1)";
  function Qt(t, i) {
    if (qe() || !t) {
      i();
      return;
    }
    const s = (M) => {
      var R;
      return ((R = M.dataset) == null ? void 0 : R.id) || M;
    }, u = () => [...t.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], f = new Map(u().map((M) => [s(M), M.getBoundingClientRect().top]));
    i(), u().forEach((M) => {
      const R = f.get(s(M));
      if (R === void 0) return;
      const z = R - M.getBoundingClientRect().top;
      Math.abs(z) < 0.5 || M.animate([{ transform: "translateY(" + z + "px)" }, { transform: "none" }], { duration: 440, easing: St });
    });
  }
  function _n(t, i) {
    if (!t || qe()) return;
    const s = t.offsetHeight, u = Math.max(0, s - (i || 0));
    t.animate([{ clipPath: "inset(0 0 " + u + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: St });
  }
  function En(t, i, s, u) {
    const { arr: f } = gt(i), M = Ot(t, i);
    f.splice(Math.max(0, Math.min(s, f.length)), 0, M), we = { item: M, arr: f }, pe = M, Qt(i.closest(".exerciseScroller,.createStepSlot") || i, () => _());
    const R = i.querySelector(".moveRow.editing");
    return _n(R, u), Be(t === "rest"), R;
  }
  function rn(t) {
    for (let i = t; i && i.nodeType === 1; i = i.parentElement) {
      const s = getComputedStyle(i).overflowY;
      if (/(auto|scroll)/.test(s) && i.scrollHeight > i.clientHeight) return i;
    }
    return null;
  }
  const xi = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function On(t, i) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (t === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + I + '</span><span class="addGhostText"><strong>' + Ie(i[0]) + "</strong><small>" + Ie(i[1]) + "</small></span>", o("workoutModal").appendChild(s), s;
  }
  function Wa(t) {
    t.classList.add("leaving"), setTimeout(() => t.remove(), 180);
  }
  function qn(t, i, s, u) {
    (pe || we) && (nt(), pe = null, _());
    const f = t.getBoundingClientRect(), M = On(i, xi[i]);
    M.setAttribute("aria-hidden", "true"), M.style.width = f.width + "px", M.style.height = f.height + "px", M.style.transform = "translate(" + f.left + "px," + f.top + "px)", t.classList.add("lifting");
    const R = rn(t);
    return Io({
      ghost: M,
      origin: f,
      sx: s,
      sy: u,
      scroller: R,
      column: t.closest(".exerciseScroller,.createFlow") || R,
      home: () => t.getBoundingClientRect(),
      onDrop: (z, oe, le) => {
        Wa(M), t.classList.remove("lifting"), En(i, z, oe, le);
      },
      onReturn: () => {
        Wa(M), t.classList.remove("lifting");
      }
    });
  }
  function Io({ ghost: t, origin: i, sx: s, sy: u, scroller: f, column: M, home: R, onDrop: z, onReturn: oe, rowLook: le = !1 }) {
    var yr;
    const ee = !qe(), J = ((yr = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : yr.offsetHeight) || 80, Se = s - i.left, Ge = u - i.top, Ee = 44;
    let Me = s, xe = u, ut = i.left, pt = i.top, De = 0, ft = 0, kt = !ee, at = null, $e = null, on = -1, kn = 0, Wt = null;
    const fi = () => ["warmupList", "strengthList", "cooldownList"].map((Qe) => o(Qe)).filter((Qe) => Qe && Qe.getClientRects().length && !Qe.closest("[hidden]")), ke = (Qe) => {
      if (Qe === at) return;
      at = Qe, t.classList.toggle("overList", !!Qe || le);
      const _t = Qe ? Qe.getBoundingClientRect().width : i.width;
      t.style.width = _t + "px", t.style.height = (Qe ? J : i.height) + "px";
    }, it = (Qe) => {
      Qe.classList.add("leaving"), Qe.style.height = "0px", Qe.style.marginTop = "-8px", setTimeout(() => Qe.remove(), ee ? 320 : 0);
    }, cn = (Qe, _t, jt) => {
      if ($e && $e.parentNode === Qe && on === jt || ($e && (it($e), $e = null, on = -1), !Qe)) return;
      const pn = document.createElement("div");
      pn.className = "dropSlot", Qe.insertBefore(pn, _t), $e = pn, on = jt, pn.getBoundingClientRect(), pn.style.height = J + "px", pn.style.marginTop = "0px";
    }, un = () => {
      let Qe = null, _t = 1 / 0;
      for (const pa of fi()) {
        const rt = pa.getBoundingClientRect();
        if (Me < rt.left - 48 || Me > rt.right + 48) continue;
        const wt = rt.top - 28, Ft = rt.bottom + 28, jn = xe < wt ? wt - xe : xe > Ft ? xe - Ft : 0;
        jn < _t && (_t = jn, Qe = pa);
      }
      const jt = M == null ? void 0 : M.getBoundingClientRect(), zn = jt && Me >= jt.left && Me <= jt.right && xe >= jt.top && xe <= jt.bottom || _t === 0 ? Qe : null;
      if (zn) {
        const pa = [...zn.children].filter((wt) => wt.classList.contains("moveRow"));
        let rt = pa.findIndex((wt) => {
          const Ft = wt.getBoundingClientRect();
          return xe < Ft.top + Ft.height / 2;
        });
        rt < 0 && (rt = pa.length), cn(zn, pa[rt] || null, rt);
      } else cn(null);
      ke(zn);
    }, Ks = () => {
      if (Wt) return Wt.aim();
      if (at) {
        const Qe = at.getBoundingClientRect();
        let _t = xe - J / 2;
        return $e && (_t = _t * 0.6 + $e.getBoundingClientRect().top * 0.4), { x: Qe.left, y: _t };
      }
      return { x: Me - Se, y: xe - Ge };
    }, xr = (Qe, _t, jt, pn) => {
      t.style.transform = "translate(" + ut + "px," + pt + "px) rotate(" + Qe + "deg) rotate(" + _t + "rad) scale(" + jt + "," + pn + ") rotate(" + -_t + "rad)";
    }, $s = () => {
      if (kn = requestAnimationFrame($s), !kt) {
        const rt = Me - s, wt = xe - u, Ft = Math.min(Math.hypot(rt, wt) / Ee, 1);
        ut = i.left + rt * 0.35, pt = i.top + wt * 0.35, xr(0, Math.atan2(wt, rt), 1 + 0.155 * Ft, 1 - 0.1 * Ft);
        return;
      }
      const Qe = Ks();
      if (!ee) {
        ut = Qe.x, pt = Qe.y, xr(0, 0, 1, 1), Wt && (cancelAnimationFrame(kn), Wt.done());
        return;
      }
      const _t = Wt ? Wt.k : 0.17, jt = Wt ? Wt.d : 0.7;
      De = (De + (Qe.x - ut) * _t) * jt, ft = (ft + (Qe.y - pt) * _t) * jt, ut += De, pt += ft;
      const pn = Math.hypot(De, ft), zn = Math.min(pn / 48, 1), pa = at || Wt ? 0 : Math.max(-5, Math.min(5, De * 0.32));
      xr(pa, Math.atan2(ft, De), 1 + 0.1 * zn, 1 - 0.063 * zn), Wt && pn < 0.15 && Math.hypot(Qe.x - ut, Qe.y - pt) < 0.6 && (cancelAnimationFrame(kn), Wt.done());
    }, Xs = setInterval(() => {
      if (!f || Wt) return;
      const Qe = f.getBoundingClientRect(), _t = 64, jt = xe < Qe.top + _t ? -(Qe.top + _t - xe) / 4 : xe > Qe.bottom - _t ? (xe - (Qe.bottom - _t)) / 4 : 0;
      jt && (f.scrollTop += Math.max(-18, Math.min(18, jt)), un());
    }, 30);
    kn = requestAnimationFrame($s);
    let rs = !1;
    const mi = (Qe, _t) => {
      if (rs) return;
      rs = !0, cancelAnimationFrame(kn);
      const jt = $e ? $e.offsetHeight : J;
      !Qe && $e && ($e.remove(), $e = null), Qe ? z(Qe, _t, jt) : oe();
    };
    return {
      move(Qe, _t) {
        Me = Qe, xe = _t, !kt && Math.hypot(Me - s, xe - u) > Ee && (kt = !0, De = (Me - s) * 0.085, ft = (xe - u) * 0.085), kt && un();
      },
      drop(Qe) {
        clearInterval(Xs);
        const _t = at, jt = on;
        if (!Qe && _t && $e) {
          const pn = $e;
          Wt = { k: 0.24, d: 0.62, aim: () => {
            const zn = pn.getBoundingClientRect();
            return { x: zn.left, y: zn.top };
          }, done: () => mi(_t, jt) }, setTimeout(() => mi(_t, jt), 650), ee || (cancelAnimationFrame(kn), mi(_t, jt));
          return;
        }
        cn(null), ke(null), Wt = { k: 0.2, d: 0.66, aim: () => {
          const pn = R();
          return { x: pn.left, y: pn.top };
        }, done: () => mi(null) }, setTimeout(() => mi(null), 650), ee || (cancelAnimationFrame(kn), mi(null));
      }
    };
  }
  function ht(t, i) {
    let s = !1;
    t.addEventListener("click", (u) => {
      if (s) {
        s = !1, u.preventDefault();
        return;
      }
      if (Qn()) {
        lo(i);
        return;
      }
      const f = o("strengthList"), M = En(i, f, gt(f).arr.length, 0);
      M == null || M.scrollIntoView({ block: "nearest", behavior: qe() ? "auto" : "smooth" });
    }), t.addEventListener("pointerdown", (u) => {
      if (u.button !== void 0 && u.button !== 0) return;
      const f = u.pointerId, M = u.clientX, R = u.clientY;
      let z = null, oe = !1;
      try {
        t.setPointerCapture(f);
      } catch {
      }
      const le = (xe) => {
        if (xe.pointerId === f) {
          if (xe.pointerType === "mouse" && xe.buttons === 0) {
            Me(!1);
            return;
          }
          if (!z) {
            if (Math.hypot(xe.clientX - M, xe.clientY - R) < 6) return;
            z = qn(t, i, M, R);
          }
          z.move(xe.clientX, xe.clientY);
        }
      }, ee = (xe) => {
        xe.pointerId === f && Me(!1);
      }, J = (xe) => {
        xe.pointerId === f && Me(!0);
      }, Se = () => Me(!1), Ge = () => Me(!0), Ee = (xe) => {
        xe.key === "Escape" && z && (xe.preventDefault(), xe.stopPropagation(), Me(!0));
      };
      function Me(xe) {
        if (!oe && (oe = !0, window.removeEventListener("pointermove", le, !0), window.removeEventListener("pointerup", ee, !0), window.removeEventListener("pointercancel", J, !0), window.removeEventListener("keydown", Ee, !0), window.removeEventListener("blur", Ge), t.removeEventListener("lostpointercapture", Se), z)) {
          const ut = z;
          z = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), ut.drop(xe);
        }
      }
      window.addEventListener("pointermove", le, !0), window.addEventListener("pointerup", ee, !0), window.addEventListener("pointercancel", J, !0), window.addEventListener("keydown", Ee, !0), window.addEventListener("blur", Ge), t.addEventListener("lostpointercapture", Se);
    });
  }
  const Wn = (qd = window.matchMedia) == null ? void 0 : qd.call(window, "(max-width: 620px)");
  function Qn() {
    var t;
    return !!((t = window.matchMedia) != null && t.call(window, "(max-width: 620px)").matches);
  }
  const Va = (t) => t.charAt(0).toUpperCase() + t.slice(1), za = (t) => t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "movement";
  let Ho = null, Dt = null;
  function en(t, i, s, u) {
    Dn(), o("sheetTitle").textContent = t;
    const f = o("sheetBody");
    f.innerHTML = "", f.appendChild(i), Ho = s || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !f.contains(i)) return;
      const M = u ? f.querySelector("input[data-f=url],input[data-f=name]") : f.querySelector("button,input,select");
      M == null || M.focus({ preventScroll: !0 });
    }, qe() ? 0 : 360);
  }
  function Dn() {
    const t = o("sheet");
    if (!t.classList.contains("open")) return;
    t.classList.remove("open"), o("sheetScrim").classList.remove("open"), t.setAttribute("aria-hidden", "true"), t.contains(a.activeElement) && a.activeElement.blur();
    const i = Ho;
    Ho = null, i == null || i(), setTimeout(co, 0);
  }
  o("sheetScrim").addEventListener("click", Dn), o("sheet").addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Dn());
  });
  function yi(t, i) {
    const s = ze(t, i.indexOf(t), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Dn(), _(), It(Va(za(t)) + " updated");
      },
      onCancel: Dn,
      onHide() {
        t.hidden = !t.hidden, Dn(), _(), It((t.hidden ? "Hidden: " : "Showing: ") + t.name);
      },
      onRemove() {
        Dn();
        const u = i.indexOf(t);
        u < 0 || (i.splice(u, 1), _(), It("Removed " + t.name, { label: "Undo", run: () => {
          i.splice(Math.min(u, i.length), 0, t), _();
        } }));
      }
    });
    en("Edit " + za(t), s, null, !1);
  }
  function wl() {
    const t = document.createElement("div");
    t.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([i, s, u, f]) => {
      const M = document.createElement("button");
      M.type = "button", M.className = "sheetChoice", M.innerHTML = '<span class="timeIcon" aria-hidden="true">' + me(s) + "</span><span><strong>" + u + "</strong><small>" + f + "</small></span>", M.addEventListener("click", () => lo(i)), t.appendChild(M);
    }), en("Add to the move", t, null, !1);
  }
  function lo(t) {
    Dt && ki();
    const i = Ot(t, o("strengthList")), s = ze(i, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Dn(), gs(i, t);
      },
      onCancel: Dn
    });
    en("New " + za(i), s, null, !0);
  }
  const ja = o("workoutModal").querySelector(".modalStatic"), Fo = { parent: ja.parentNode, next: ja.nextSibling };
  function fs() {
    const t = document.createElement("div");
    t.className = "sheetSetup", t.appendChild(ja);
    const i = document.createElement("button");
    i.type = "button", i.className = "primary sheetDone", i.textContent = "Done", i.addEventListener("click", Dn), t.appendChild(i), en("Setup", t, () => {
      Fo.parent.insertBefore(ja, Fo.next), Zi();
    }, !1);
  }
  function Zi() {
    var i, s;
    const t = o("setupSummaryName");
    t && (t.textContent = (((i = o("workoutNameInput")) == null ? void 0 : i.value) || "").trim() || ((s = Ue[mt]) == null ? void 0 : s.name) || "Move", o("setupSummaryMeta").textContent = Vt.textContent);
  }
  o("setupSummary").addEventListener("click", fs), o("addFab").addEventListener("click", wl);
  function ms() {
    const t = o("strengthList");
    return rn(t) || t.closest(".exerciseScroller");
  }
  function _r() {
    const t = o("strengthList").getBoundingClientRect(), i = (ms() || o("strengthList")).getBoundingClientRect(), s = (Dt == null ? void 0 : Dt.ghost.offsetHeight) || 64;
    return { left: t.left, top: Math.max(i.top + 12, Math.min(i.bottom - s - 96, i.top + i.height * 0.55 - s / 2)), width: t.width, height: s };
  }
  function gs(t, i) {
    var z;
    const s = On(i, [t.name || xi[i][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (t.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const u = document.createElement("span");
    u.className = "addGhostActions", u.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Ie(t.name) + '">✕</button>', s.appendChild(u), Dt = { item: t, type: i, ghost: s };
    const f = ((z = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : z.offsetHeight) || 64;
    s.style.width = o("strengthList").getBoundingClientRect().width + "px", s.style.height = f + "px";
    const M = _r(), R = Cn.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + M.left + "px," + R + "px)", s.getBoundingClientRect(), qe() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + M.left + "px," + M.top + "px)", u.querySelector("[data-a=end]").addEventListener("click", ki), u.querySelector("[data-a=discard]").addEventListener("click", bs), s.addEventListener("pointerdown", xl);
  }
  function xl(t) {
    if (!Dt || t.target.closest("button") || t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const { item: i, ghost: s } = Dt, u = t.pointerId;
    try {
      s.setPointerCapture(u);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const f = s.getBoundingClientRect(), M = ms(), R = Io({
      ghost: s,
      origin: { left: f.left, top: f.top, width: f.width, height: f.height },
      sx: t.clientX,
      sy: t.clientY,
      scroller: M,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || M,
      rowLook: !0,
      home: _r,
      onDrop: (Me, xe, ut) => {
        Dt = null, Wa(s), vs(i, Me, xe, ut);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let z = !1;
    const oe = (Me) => {
      if (Me.pointerId === u) {
        if (Me.pointerType === "mouse" && Me.buttons === 0) {
          Ee(!1);
          return;
        }
        R.move(Me.clientX, Me.clientY);
      }
    }, le = (Me) => {
      Me.pointerId === u && Ee(!1);
    }, ee = (Me) => {
      Me.pointerId === u && Ee(!0);
    }, J = () => Ee(!1), Se = () => Ee(!0), Ge = (Me) => {
      Me.key === "Escape" && (Me.preventDefault(), Ee(!0));
    };
    function Ee(Me) {
      z || (z = !0, window.removeEventListener("pointermove", oe, !0), window.removeEventListener("pointerup", le, !0), window.removeEventListener("pointercancel", ee, !0), window.removeEventListener("keydown", Ge, !0), window.removeEventListener("blur", Se), s.removeEventListener("lostpointercapture", J), R.drop(Me));
    }
    window.addEventListener("pointermove", oe, !0), window.addEventListener("pointerup", le, !0), window.addEventListener("pointercancel", ee, !0), window.addEventListener("keydown", Ge, !0), window.addEventListener("blur", Se), s.addEventListener("lostpointercapture", J);
  }
  function vs(t, i, s, u) {
    const f = gt(i);
    t.kind !== "rest" && t.kind !== "video" && (t.kind = f.kind, f.group && (!t.group || t.group === "Movement") && (t.group = f.group)), f.arr.splice(Math.max(0, Math.min(s, f.arr.length)), 0, t), Qt(i.closest(".exerciseScroller,.createStepSlot") || i, () => _()), _n(i.querySelector('.moveRow[data-id="' + t.id + '"]'), u), It(Va(za(t)) + " added");
  }
  function ki() {
    var u;
    if (!Dt) return;
    const { item: t, ghost: i } = Dt;
    Dt = null, Wa(i);
    const s = o("strengthList");
    vs(t, s, gt(s).arr.length, 0), (u = s.querySelector('.moveRow[data-id="' + t.id + '"]')) == null || u.scrollIntoView({ block: "nearest", behavior: qe() ? "auto" : "smooth" });
  }
  function bs() {
    if (!Dt) return;
    const t = Dt.ghost;
    Dt = null, Wa(t), It("Discarded");
  }
  function ws() {
    Dt && (Dt.ghost.remove(), Dt = null);
  }
  window.addEventListener("resize", () => {
    if (Dt != null && Dt.ghost.classList.contains("hovering")) {
      const t = _r();
      Dt.ghost.style.width = t.width + "px", Dt.ghost.style.transform = "translate(" + t.left + "px," + t.top + "px)";
    }
  }), (Wd = Wn == null ? void 0 : Wn.addEventListener) == null || Wd.call(Wn, "change", () => {
    Dn(), Dt && !Qn() && ki(), Pe();
  });
  {
    const t = o("workoutModal").querySelector(".modal");
    t.addEventListener("scroll", () => {
      (t.scrollTop || t.scrollLeft) && (t.scrollTop = 0, t.scrollLeft = 0);
    });
  }
  function co() {
    const t = o("workoutModal"), i = window.visualViewport;
    if (!t.classList.contains("open") || !Qn()) {
      xs();
      return;
    }
    const s = i ? i.offsetTop : 0, u = i ? i.offsetLeft : 0, f = i ? i.width : window.innerWidth, M = i ? i.height : window.innerHeight;
    Object.assign(t.style, { right: "auto", bottom: "auto", width: f + "px", height: M + "px", top: s + "px", left: u + "px" });
    const R = t.getBoundingClientRect();
    Math.abs(R.top - s) > 0.5 && (t.style.top = 2 * s - R.top + "px"), Math.abs(R.left - u) > 0.5 && (t.style.left = 2 * u - R.left + "px");
  }
  function xs() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((t) => o("workoutModal").style.removeProperty(t));
  }
  (Vd = window.visualViewport) == null || Vd.addEventListener("resize", co), (zd = window.visualViewport) == null || zd.addEventListener("scroll", co), window.addEventListener("resize", co), window.addEventListener("scroll", co, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(co, 250));
  function Ga() {
    Je.length > 0;
    const t = o("addMovementBtn"), i = o("addRestBtn");
    t && (t.innerHTML = I + "<span>Add movement</span>"), i && (i.innerHTML = I + "<span>Add rest</span>");
    const s = o("addVideoBtn");
    s && (s.innerHTML = I + "<span>Add video</span>");
  }
  function Oo() {
    const t = o("useGlobalTiming").checked, i = o("addMovementDuration"), s = o("addMovementUnit");
    i.disabled = t, s.disabled = t, i.parentElement.style.opacity = t ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + Xt(C.value);
    const u = o("useGlobalRestTiming").checked, f = o("addRestDuration"), M = o("addRestUnit");
    f.disabled = u, M.disabled = u, f.parentElement.style.opacity = u ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + Xt(N.value);
  }
  let ys = "movement";
  function Mi(t) {
    ys = t;
    const i = o("movementFields"), s = o("restFields");
    i.hidden = t !== "movement", s.hidden = t !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), Oo();
  }
  function Rn() {
    Ue[mt];
    const t = ct ? !0 : o("useGlobalTiming").checked, i = t ? Number(C.value) : ma(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), s = ct ? !0 : o("useGlobalRestTiming").checked, u = s ? Number(N.value) : ma(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (ys === "rest") {
      const f = o("addRestTitle").value.trim() || "Rest", M = o("addRestGroup").value.trim() || "Rest";
      Je.push({
        id: "rest-" + Date.now(),
        name: f,
        group: M,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, u || Number(N.value))
      }), _(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", It("Rest added"), ct && (j("movements"), ge());
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
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", _(), o("movementCreator").hidden = !0, It("Movement added"), ct && (j("movements"), ge());
    }
    Ga();
  }
  let Er = null;
  function It(t, i) {
    const s = o("toast");
    s.innerHTML = "";
    const u = document.createElement("span");
    if (u.textContent = t, s.appendChild(u), i) {
      const f = document.createElement("button");
      f.type = "button", f.className = "toastAction", f.textContent = i.label, f.addEventListener("click", () => {
        i.run(), s.classList.remove("show", "withAction"), clearTimeout(Er);
      }), s.appendChild(f);
    }
    s.classList.toggle("withAction", !!i), s.classList.add("show"), clearTimeout(Er), Er = setTimeout(() => s.classList.remove("show", "withAction"), i ? 5e3 : 2200);
  }
  const ks = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Ki = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Ms(t) {
    return Math.max(0, Math.min(5, Math.floor(Number(t) / 100 * 6)));
  }
  function qo(t, i) {
    return ks[Ms(i)];
  }
  function Dr(t) {
    return Ki[Ms(t)];
  }
  function qt(t) {
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  function Ua() {
    return { morning: tt().morningTime || "08:00", evening: tt().eveningTime || "19:00" };
  }
  function Wo(t) {
    const [i, s] = String(t).split(":").map(Number);
    return (i || 0) * 60 + (s || 0);
  }
  function yl(t) {
    const i = Ua();
    return t.getHours() * 60 + t.getMinutes() >= Wo(i.evening) ? "evening" : "morning";
  }
  function Ci(t, i) {
    return dt.checkins.find((s) => s.date === t && s.slot === i);
  }
  function $i(t) {
    return !!(t && t.mood != null && t.energy != null);
  }
  function Si() {
    const t = /* @__PURE__ */ new Date(), i = qt(t), s = yl(t), u = Ua(), f = t.getHours() * 60 + t.getMinutes();
    return s === "morning" && f < Wo(u.morning) || $i(Ci(i, s)) ? null : s;
  }
  const Ya = o("checkinModal"), _a = o("checkinTab"), kl = o("checkinBadge"), Ea = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function Cs(t) {
    const { input: i, fill: s } = Ea[t];
    s.style.width = i.value + "%", i.setAttribute("aria-valuetext", qo(t, i.value));
  }
  Object.keys(Ea).forEach((t) => Ea[t].input.addEventListener("input", () => Cs(t)));
  let Nn = null;
  function Xi() {
    const t = Ua(), i = /* @__PURE__ */ new Date(), s = i.getHours() * 60 + i.getMinutes();
    return s < Wo(t.morning) ? "Next check-in at " + t.morning : s < Wo(t.evening) ? "Next check-in at " + t.evening : "Next check-in tomorrow at " + t.morning;
  }
  function Rr() {
    const t = Ua(), i = /* @__PURE__ */ new Date(), s = i.getHours() * 60 + i.getMinutes(), u = (f, M) => {
      const [R, z] = f.split(":").map(Number);
      return new Date(i.getFullYear(), i.getMonth(), i.getDate() + (M ? 1 : 0), R, z);
    };
    return s < Wo(t.morning) ? { date: u(t.morning), time: t.morning } : s < Wo(t.evening) ? { date: u(t.evening), time: t.evening } : { date: u(t.morning, !0), time: t.morning };
  }
  let Ji = null, Ti = null;
  function Ss() {
    if (Si()) {
      Qi(), uo();
      return;
    }
    const t = Rr(), i = Math.max(0, Math.round((t.date - Date.now()) / 1e3)), s = Math.floor(i / 3600), u = Math.floor(i % 3600 / 60), f = i % 60;
    o("peekCountdown").textContent = s + ":" + String(u).padStart(2, "0") + ":" + String(f).padStart(2, "0"), o("peekAt").textContent = "Available at " + t.time;
  }
  function Ml() {
    Ss(), _a.classList.add("peek"), clearInterval(Ti), Ti = setInterval(Ss, 1e3), clearTimeout(Ji), Ji = setTimeout(Qi, 6e3);
  }
  function Qi() {
    _a.classList.remove("peek"), clearInterval(Ti), clearTimeout(Ji);
  }
  function Ts() {
    const t = Si();
    if (!t) {
      _a.classList.contains("peek") ? Qi() : Ml();
      return;
    }
    Nn = { date: qt(/* @__PURE__ */ new Date()), slot: t };
    const s = Ci(Nn.date, t), u = dt.checkins.find((f) => $i(f));
    Object.keys(Ea).forEach((f) => {
      Ea[f].input.value = (s == null ? void 0 : s[f]) ?? (u == null ? void 0 : u[f]) ?? 50, Cs(f);
    }), o("checkinTitle").textContent = t === "morning" ? "Morning check-in" : "Evening check-in", Ya.classList.add("open"), Ya.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Ea.mood.input.focus());
  }
  function Li() {
    Ya.classList.remove("open"), Ya.setAttribute("aria-hidden", "true"), Nn && (Vo = Nn.date + "-" + Nn.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Vo);
    } catch {
    }
    Nn = null, uo();
  }
  function Ai() {
    if (!Nn) return;
    if ($i(Ci(Nn.date, Nn.slot))) {
      Li();
      return;
    }
    const { date: t, slot: i } = Nn;
    let s = Ci(t, i);
    s || (s = { date: t, slot: i }, dt.checkins.unshift(s), dt.checkins = dt.checkins.slice(0, 2e3)), s.mood = Number(Ea.mood.input.value), s.energy = Number(Ea.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), vn(), l.fire("checkin", { slot: i, mood: s.mood, energy: s.energy, mood_label: qo("mood", s.mood), energy_label: qo("energy", s.energy) }), It((i === "morning" ? "Morning" : "Evening") + " check-in saved"), Li(), Da(), zo(), to(), n();
  }
  let Vo = "";
  try {
    Vo = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function uo() {
    const t = Si();
    kl.hidden = !t, _a.hidden = !t, t || Qi(), _a.classList.toggle("due", !!t), _a.setAttribute("aria-label", t ? (t === "morning" ? "Morning" : "Evening") + " check-in is due" : Xi()), _a.title = t ? "Check in now" : Xi();
  }
  function Nr() {
    uo();
    const t = Si();
    !t || Ya.classList.contains("open") || tt().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !ve.home.classList.contains("active") || Cn.classList.contains("open") || Vo !== qt(/* @__PURE__ */ new Date()) + "-" + t && Ts());
  }
  _a.addEventListener("click", Ts), o("checkinLater").addEventListener("click", Li), o("checkinSave").addEventListener("click", Ai), Ya.addEventListener("click", (t) => {
    t.target === Ya && Li();
  }), Ya.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Li());
  }), setInterval(Nr, 3e4);
  function Da() {
    const t = qt(/* @__PURE__ */ new Date()), i = (s) => dt.checkins.find((u) => u.date === t && u[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, u]) => {
      const f = i(s);
      o(u).textContent = f ? qo(s, f[s]) : "—";
    });
  }
  function zo() {
    const t = o("feelCard");
    if (!t) return;
    const i = /* @__PURE__ */ new Date(), s = new Date(i.getFullYear(), i.getMonth(), i.getDate() - (i.getDay() + 6) % 7), u = [...Array(7)].map((le, ee) => {
      const J = new Date(s.getFullYear(), s.getMonth(), s.getDate() + ee), Se = qt(J), Ge = dt.checkins.filter((Me) => Me.date === Se), Ee = (Me) => {
        const xe = Ge.map((ut) => ut[Me]).filter((ut) => ut != null);
        return xe.length ? xe.reduce((ut, pt) => ut + pt, 0) / xe.length : null;
      };
      return { d: J, key: Se, mood: Ee("mood"), energy: Ee("energy"), count: Ge.filter($i).length, future: J > i && Se !== qt(i) };
    }), f = (le) => {
      const ee = u.map((J) => J[le]).filter((J) => J != null);
      return ee.length ? ee.reduce((J, Se) => J + Se, 0) / ee.length : null;
    }, M = f("mood"), R = f("energy"), z = (le, ee) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + le + "</span><span>" + (ee == null ? "—" : Ie(qo("", ee))) + '</span></div><div class="feelTrack"><span style="width:' + (ee == null ? 0 : Math.max(4, ee)) + "%;background:" + (ee == null ? "transparent" : Dr(ee)) + '"></span></div></div>', oe = u.filter((le) => le.mood != null && le.energy != null).sort((le, ee) => ee.mood + ee.energy - (le.mood + le.energy))[0];
    t.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (M == null ? "No check-ins yet" : Ie(qo("", (M + R) / 2))) + '</div><div class="weekCopy">' + (M == null ? "Your first check-in will appear here." : "on average this week" + (oe ? " · best day " + Ie(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(oe.d)) : "")) + '</div></div></div><div class="feelDays">' + u.map(
      (le) => '<div class="weekChip feelDay' + (le.future ? " future" : "") + (le.key === qt(i) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Ie(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(le.d)) + "</strong>" + (le.count >= 2 ? '<span class="weekTick">' + me("check") + "</span>" : '<span class="feelDots">' + "●".repeat(le.count) + "</span>") + "</div>" + z("Mood", le.mood) + z("Energy", le.energy) + "</div>"
    ).join("") + "</div>";
  }
  const _i = o("upcomingCountSetting");
  _i.addEventListener("change", () => {
    La = _i.value === "all" ? "all" : Number(_i.value), Bs();
  });
  const Ei = o("tempoRevealBtn"), jo = o("tempoExperiment"), ra = o("tempoQuad"), Za = o("tempoDot"), Ls = o("tempoEstimate"), Cl = o("tempoReadout");
  let Go = { x: 0.5, y: 0.5 }, Uo = !1, er = { total: 20, work: 45, rest: 15 };
  function Yo(t, i, s, u) {
    const f = Math.max(i, Math.min(s, t));
    return Math.round((f - i) / u) * u + i;
  }
  function Jt(t, i) {
    const s = (t - 0.5) * 2, u = (i - 0.5) * 2, f = Yo(
      er.total + s * 5 + u * 8,
      Number(E.min),
      Number(E.max),
      Number(E.step)
    ), M = Yo(
      er.work + s * 10 + u * 8,
      Number(C.min),
      Number(C.max),
      Number(C.step)
    ), R = Yo(
      er.rest + s * 6 + u * 6,
      Number(N.min),
      Number(N.max),
      Number(N.step)
    );
    return E.value = f, C.value = M, N.value = R, V.textContent = M + " sec", ae.textContent = R + " sec", Aa(), { total: f, work: M, rest: R };
  }
  function Br(t, i) {
    const s = t < 0.34 ? "Low" : t > 0.66 ? "Hard" : "Medium", u = i < 0.34 ? "Fast" : i > 0.66 ? "Slow" : "Balanced", f = Jt(t, i);
    Cl.textContent = s + " + " + u, Ls.textContent = f.total + " min", ra.setAttribute("aria-valuetext", s + " and " + u + ", estimated " + f.total + " minutes");
  }
  function Zo(t) {
    const i = ra.getBoundingClientRect(), s = Math.max(0, Math.min(1, (t.clientX - i.left) / i.width)), u = Math.max(0, Math.min(1, (t.clientY - i.top) / i.height));
    Go = { x: s, y: u }, Za.style.left = s * 100 + "%", Za.style.top = u * 100 + "%", Br(s, u);
  }
  Ei.addEventListener("click", () => {
    const t = jo.hidden;
    jo.hidden = !t, Ei.setAttribute("aria-expanded", t ? "true" : "false"), Ei.textContent = t ? "Now close this" : "Don’t try this!", t && (er = {
      total: Number(E.value),
      work: Number(C.value),
      rest: Number(N.value)
    }, Go = { x: 0.5, y: 0.5 }, Za.style.left = "50%", Za.style.top = "50%", Br(Go.x, Go.y));
  }), a.querySelectorAll("[data-feedback-rating]").forEach((t) => t.addEventListener("click", () => {
    Number(t.dataset.feedbackRating), a.querySelectorAll("[data-feedback-rating]").forEach((i) => i.classList.toggle("selected", i === t));
  }));
  const ga = o("testingFeedbackForm"), Ko = o("testingFeedbackThanks"), Sl = o("testingFeedbackAgain");
  ga.addEventListener("submit", (t) => {
    t.preventDefault(), ga.hidden = !0, Ko.hidden = !1, It("Feedback captured for prototype");
  }), Sl.addEventListener("click", (t) => {
    t.preventDefault(), ga.reset(), a.querySelectorAll("[data-feedback-rating]").forEach((i) => i.classList.remove("selected")), Ko.hidden = !0, ga.hidden = !1;
  }), ra.addEventListener("pointerdown", (t) => {
    var i;
    Uo = !0, Zo(t);
    try {
      (i = ra.setPointerCapture) == null || i.call(ra, t.pointerId);
    } catch {
    }
  }), ra.addEventListener("pointermove", (t) => {
    Uo && Zo(t);
  }), ra.addEventListener("pointerup", (t) => {
    Uo && (Uo = !1, Zo(t), _());
  }), ra.addEventListener("pointercancel", () => Uo = !1), ra.addEventListener("keydown", (t) => {
    let { x: i, y: s } = Go, u = !0;
    t.key === "ArrowLeft" ? i -= 0.05 : t.key === "ArrowRight" ? i += 0.05 : t.key === "ArrowUp" ? s -= 0.05 : t.key === "ArrowDown" ? s += 0.05 : u = !1, u && (t.preventDefault(), i = Math.max(0, Math.min(1, i)), s = Math.max(0, Math.min(1, s)), Go = { x: i, y: s }, Za.style.left = i * 100 + "%", Za.style.top = s * 100 + "%", Br(i, s), _());
  });
  const Cn = o("workoutModal");
  let Di = null;
  function $o(t) {
    return t.map((i) => ({ ...i }));
  }
  function Tl() {
    const t = Ue[mt];
    return {
      key: mt,
      profile: t ? JSON.parse(JSON.stringify(t)) : null,
      warmup: $o(Ct),
      strength: $o(Je),
      cooldown: $o(Mn),
      total: Number(E.value),
      work: Number(C.value),
      rest: Number(N.value),
      rounds: Number(et.value) || 1
    };
  }
  function As(t = !1) {
    ct = !!t, pe = null, we = null, Dn(), ws(), Di = Tl(), o("moveEditorTitle").textContent = ct ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !ct, o("warmupRow").hidden = ct, o("deleteMoveOpen").hidden = ct;
    const i = o("createMoveOptions");
    i.hidden = !ct;
    {
      const s = Ue[mt];
      o("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), o("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (sa(), ct) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const s = Ue[mt];
      qa((s == null ? void 0 : s.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, Mi("movement"), Ga(), Oo(), jo.hidden = !0, Ei.setAttribute("aria-expanded", "false"), Ei.textContent = "Don’t try this!", Cn.classList.toggle("createMode", ct), Cn.querySelector(".modal").classList.toggle("createMode", ct), Cn.classList.add("open"), Cn.setAttribute("aria-hidden", "false"), co(), ct && Te();
  }
  function tr() {
    const t = Ue[mt];
    return t != null && t.customSequence ? !!t.includeWarmup : !(t != null && t.warmupOff);
  }
  function sa() {
    const t = tr(), i = o("warmupSwitch");
    i.classList.toggle("on", t), i.setAttribute("aria-checked", String(t));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const t = Ue[mt];
    t && (t.customSequence ? (o("includeWarmupPreset").checked = !t.includeWarmup, Po()) : (t.warmupOff = !t.warmupOff, _()), sa());
  });
  function nr() {
    Dn(), ws(), xs(), we = null, pe = null, Cn.classList.contains("createMode") && b(), Cn.classList.remove("createMode"), Cn.querySelector(".modal").classList.remove("createMode"), Cn.classList.remove("open"), Cn.setAttribute("aria-hidden", "true");
  }
  function _s() {
    if (!Di) return;
    const t = Di;
    t.profile && (Ue[t.key] = JSON.parse(JSON.stringify(t.profile))), mt = t.key, Ct = $o(t.warmup), Je = $o(t.strength), Mn = $o(t.cooldown), E.value = t.total, C.value = t.work, N.value = t.rest, et.value = t.rounds || 1;
    const i = Ue[mt];
    if (i) {
      a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === mt));
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
    _();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (ct) {
      const t = mt;
      delete Ue[t], ct = !1, bt = null, Hn(dt.order.find((i) => Ue[i]) || Object.keys(Ue)[0]);
    } else
      _s();
    nr();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    Dn(), Dt && ki();
    const t = Ue[mt], i = m.value.trim() || "New move";
    if (t && (t.name = i), nt(), pe = null, _(), ct && t)
      No(mt, t), a.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === mt)), ct = !1, bt = null, dt.order.includes(mt) || dt.order.push(mt), It("Move created");
    else {
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const u = s.querySelector(".workoutName");
        u && (u.textContent = i);
        const f = s.querySelector(".panelCollapsedText");
        f && (f.textContent = i);
      }
      It("Move saved");
    }
    Di = null, nr(), vn();
  }), Cn.addEventListener("click", (t) => {
    if (t.target === Cn) {
      if (ct) {
        const i = mt;
        delete Ue[i], ct = !1, bt = null, Hn(dt.order.find((s) => Ue[s]) || Object.keys(Ue)[0]);
      } else
        _s();
      nr();
    }
  }), ht(o("addMovementBtn"), "movement"), ht(o("addRestBtn"), "rest"), ht(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", Oo), o("useGlobalRestTiming").addEventListener("change", Oo), a.querySelectorAll(".createPresetBtn").forEach((t) => t.addEventListener("click", () => {
    qa(t.dataset.movePreset, !0), _();
  })), o("includeWarmupPreset").addEventListener("change", Po), o("includeCooldownPreset").addEventListener("change", Po), o("includeWarmupPreset").addEventListener("change", ge), o("includeCooldownPreset").addEventListener("change", ge), m.addEventListener("input", ge), m.addEventListener("input", Zi), o("confirmAddMovement").addEventListener("click", Rn), o("confirmAddRest").addEventListener("click", Rn), o("addMovementInput").addEventListener("keydown", (t) => {
    t.key === "Enter" && Rn();
  });
  const sn = o("countdown"), Lt = o("countNum"), ln = o("countdownPixelCanvas");
  let po = null, Ra = "appear";
  class ar {
    constructor(i, s, u, f, M, R, z) {
      this.width = i.width, this.height = i.height, this.ctx = s, this.x = u, this.y = f, this.color = M, this.speed = (Math.random() * 0.8 + 0.1) * R, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = z, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let va = [], ho = 1, Ka = 1;
  function Rt() {
    const t = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(t) && t > 0 ? t : 1;
  }
  function or() {
    var le;
    if (!ln) return;
    const t = Rt(), i = Math.max(1, window.innerWidth / t), s = Math.max(1, window.innerHeight / t);
    ho = i, Ka = s;
    const u = Math.min(window.devicePixelRatio || 1, 2);
    ln.width = Math.floor(i * u), ln.height = Math.floor(s * u), ln.style.width = i + "px", ln.style.height = s + "px";
    const f = ln.getContext("2d");
    f.setTransform(u, 0, 0, u, 0, 0);
    const M = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], R = 12, z = (le = window.matchMedia) == null ? void 0 : le.call(window, "(prefers-reduced-motion: reduce)").matches, oe = z ? 0 : 0.055;
    va = [];
    for (let ee = 0; ee < i; ee += R)
      for (let J = 0; J < s; J += R) {
        const Se = ee - i / 2, Ge = J - s / 2, Ee = Math.sqrt(Se * Se + Ge * Ge), Me = z ? 0 : Math.random() * 75 + Ee * 0.05, xe = new ar({ width: i, height: s }, f, ee, J, M[Math.floor(Math.random() * M.length)], oe, Me);
        xe.maxSizeInteger = 4, xe.maxSize = Math.random() * 3.2 + 0.8, xe.sizeStep = 0.35 + Math.random() * 0.45, va.push(xe);
      }
  }
  function Xo(t) {
    cancelAnimationFrame(po), Ra = t;
    const i = ln == null ? void 0 : ln.getContext("2d");
    if (!i) return;
    function s() {
      i.clearRect(0, 0, ho, Ka);
      let u = !0;
      va.forEach((f) => {
        f[Ra](), f.isIdle || (u = !1);
      }), Ra === "disappear" && u || (po = requestAnimationFrame(s));
    }
    po = requestAnimationFrame(s);
  }
  function Ri() {
    cancelAnimationFrame(po), or(), Xo("appear"), setTimeout(() => Xo("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    sn.classList.contains("active") && Ri();
  });
  const Jo = o("pixelTrailCanvas"), fo = Jo.getContext("2d");
  let ba = !0, Qo = 0.7, mo = 600, wa = [], tn = null, la = { x: 0, y: 0, ready: !1 };
  function Pr() {
    const t = c.getBoundingClientRect(), i = Rt(), s = Math.min(window.devicePixelRatio || 1, 2), u = Math.max(1, t.width / i), f = Math.max(1, t.height / i);
    Jo.width = Math.max(1, Math.floor(u * s)), Jo.height = Math.max(1, Math.floor(f * s)), Jo.style.width = u + "px", Jo.style.height = f + "px", fo.setTransform(s, 0, 0, s, 0, 0);
  }
  function Es(t, i) {
    if (!ba) return;
    const s = performance.now();
    la.ready || (la = { x: t, y: i, ready: !0 });
    const u = 7;
    for (let f = 1; f <= u; f++) {
      const M = f / u;
      wa.push({
        x: la.x + (t - la.x) * M,
        y: la.y + (i - la.y) * M,
        born: s - (u - f) * 10
      });
    }
    la = { x: t, y: i, ready: !0 };
  }
  function ei(t) {
    if (tn = null, !g) return;
    if (!ve.workout.classList.contains("active")) {
      tn = requestAnimationFrame(ei);
      return;
    }
    const i = c.getBoundingClientRect(), s = Rt();
    fo.clearRect(0, 0, i.width / s, i.height / s), ba && (wa = wa.filter((f) => t - f.born < mo), fo.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", wa.forEach((f) => {
      const M = (t - f.born) / mo, R = (1 - M) * Qo, z = Math.round(f.x / 14) * 14, oe = Math.round(f.y / 14) * 14;
      fo.globalAlpha = Math.max(0, R);
      const le = 2 + 5 * (1 - M) * Qo;
      fo.fillRect(z - le / 2, oe - le / 2, le, le);
    }), fo.globalAlpha = 1), tn = requestAnimationFrame(ei);
  }
  c.addEventListener("pointermove", (t) => {
    const i = c.getBoundingClientRect(), s = Rt();
    Es((t.clientX - i.left) / s, (t.clientY - i.top) / s);
  }), c.addEventListener("pointerleave", () => la.ready = !1), new ResizeObserver(Pr).observe(c), Pr(), tn = requestAnimationFrame(ei);
  const xa = o("movementRippleCanvas"), ti = xa.getContext("2d");
  let Sn = !0, ea = null, Ll = performance.now();
  function ir() {
    const t = xa.parentElement.getBoundingClientRect(), i = Rt(), s = Math.max(1, t.width / i), u = Math.max(1, t.height / i), f = Math.min(window.devicePixelRatio || 1, 2);
    xa.width = Math.max(1, Math.floor(s * f)), xa.height = Math.max(1, Math.floor(u * f)), xa.style.width = s + "px", xa.style.height = u + "px", ti.setTransform(f, 0, 0, f, 0, 0);
  }
  function rr() {
    var t;
    return Nt || ((t = Ne[Ve]) == null ? void 0 : t.kind) === "rest";
  }
  function Ds() {
    const t = Ne[Ve];
    return rr() ? 2200 : t ? t.kind === "warmup" || t.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function sr(t) {
    if (ea = null, !g) return;
    if (!ve.workout.classList.contains("active")) {
      ea = requestAnimationFrame(sr);
      return;
    }
    const i = xa.parentElement.getBoundingClientRect(), s = Rt(), u = Math.max(1, i.width / s), f = Math.max(1, i.height / s);
    if (ti.clearRect(0, 0, u, f), Sn) {
      const M = Ds(), R = (t - Ll) % M / M, z = 15, oe = Math.max(8, Math.round(z * f / Math.max(1, u))), le = u / (z + 1), ee = f / (oe + 1), J = u * 0.5, Se = f * 0.52, Ge = Math.hypot(J, Se), Me = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let xe = 1; xe <= oe; xe++)
        for (let ut = 1; ut <= z; ut++) {
          const pt = ut * le, De = xe * ee, ft = Math.hypot(pt - J, De - Se) / Ge, kt = rr(), at = kt ? Math.exp(-Math.pow((ft - (R * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, $e = Math.exp(-Math.pow((ft - R * 1.25) * 7, 2)), on = kt ? at : $e, kn = kt ? 0.5 + 0.5 * Math.sin(R * Math.PI * 2 - ft * 3) ** 2 : 0.35 + 0.65 * Math.sin(R * Math.PI * 2 - ft * 5) ** 2, Wt = kt ? 1.4 + on * 4.2 * kn : 1.2 + on * 5 * kn;
          ti.beginPath(), ti.arc(pt, De, Wt, 0, Math.PI * 2), ti.fillStyle = `rgba(${Me},${kt ? 0.08 + on * 0.48 : 0.05 + on * 0.55})`, ti.fill();
        }
    }
    ea = requestAnimationFrame(sr);
  }
  new ResizeObserver(ir).observe(xa.parentElement), ir(), ea = requestAnimationFrame(sr);
  const Ni = o("exerciseTitle"), da = o("exerciseMeta"), Vn = o("stepLabel"), ni = o("digits"), Rs = o("fill"), ai = o("progress"), Ir = o("pause"), Bt = o("nextName"), ya = o("nextMeta"), Na = o("nextIcon"), ta = o("skipNextSession");
  let Ht = null;
  function Kt(t) {
    for (let i = Math.max(0, t); i < Ne.length; i++)
      if (!Ne[i].sessionHidden) return i;
    return -1;
  }
  function Hr() {
    const t = Ne[Ve];
    if (!t) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Nt) {
      const u = Kt(Ve + 1), f = u >= 0 ? Ne[u] : null;
      return f ? { name: f.name, meta: Fr(f), icon: lr(f) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (t.rest > 0) return { name: "Rest", meta: t.rest + " sec · " + (t.roundBreakAfter ? "round " + (t.round + 1) + " next" : "recovery"), icon: "pause" };
    const i = Kt(Ve + 1), s = i >= 0 ? Ne[i] : null;
    return s ? { name: s.name, meta: Fr(s), icon: lr(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function oi() {
    if (!Ne[Ve]) return Ne.length;
    const i = Kt(Ve + 1);
    return i < 0 ? Ne.length : i + 1;
  }
  function lr(t) {
    return t.kind === "video" ? "play" : "clock";
  }
  function Fr(t) {
    return t.kind === "video" ? "YouTube · " + Gt(t.duration) : t.group + " · " + t.duration + " sec";
  }
  function Bi() {
    return Ne.length && Ne[Ne.length - 1].round || 1;
  }
  function dn(t) {
    const i = Ne[t];
    if (!i) return "";
    const s = Bi();
    if (s <= 1) return "Step " + (t + 1) + " of " + Ne.length;
    if (i.roundBreak) return "Round " + i.round + " of " + s + " · Rest";
    const u = Ne.filter((f) => f.round === i.round && !f.roundBreak).length;
    return "Round " + i.round + " of " + s + " · Step " + (i.roundIndex + 1) + " of " + u;
  }
  function go() {
    return ai.querySelector('[data-step="' + Ve + '"]');
  }
  function Ns() {
    Ne[Ve] && Number(ai.dataset.round) !== (Ne[Ve].round || 1) && cr(), [...ai.children].forEach((t) => {
      const i = Number(t.dataset.step);
      t.classList.toggle("done", i < Ve), t.classList.toggle("active", i === Ve), t.classList.toggle("rewindable", i <= Ve), t.disabled = i > Ve, i === Ve && t.style.setProperty("--segment-progress", "0%");
    }), Ne[Ve] && (Vn.textContent = dn(Ve), ko());
  }
  function Al(t) {
    const i = Ne.indexOf(t);
    i < 0 || i <= Ve || (t.sessionHidden = !t.sessionHidden, $a(), It((t.sessionHidden ? "Hidden " : "Included ") + t.name + " for this session"));
  }
  function Bs() {
    const t = o("upcomingList");
    if (!t) return;
    t.innerHTML = "";
    const i = oi(), s = Ne.slice(i);
    (La === "all" ? s : s.slice(0, Math.max(1, Number(La) || 1))).forEach((f) => {
      const M = document.createElement("section");
      M.className = "upcomingCard" + (f.sessionHidden ? " sessionHidden" : "") + (Yr(f) ? " noMeta" : ""), M.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + me(lr(f)) + '</div><div><div class="upcomingName">' + Ie(f.name) + '</div><div class="upcomingMeta">' + Ie(Fr(f)) + (Bi() > 1 ? " · round " + f.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (f.sessionHidden ? "Include this session" : "Skip this session") + "</button>", M.querySelector(".skipSessionBtn").addEventListener("click", () => Al(f)), t.appendChild(M);
    });
  }
  function $a() {
    var i;
    const t = Hr();
    Bt.textContent = t.name, ya.textContent = t.meta, Na.innerHTML = me(t.icon);
    {
      const s = Nt ? Ne[Kt(Ve + 1)] : ((i = Ne[Ve]) == null ? void 0 : i.rest) > 0 ? { kind: "rest" } : Ne[Kt(Ve + 1)];
      a.querySelector(".nextCard").classList.toggle("noMeta", !!(s && Yr(s)));
    }
    if (Ht = null, Nt) {
      const s = Kt(Ve + 1);
      s >= 0 && (Ht = Ne[s]);
    } else {
      const s = Ne[Ve];
      if (s && s.rest > 0)
        Ht = null;
      else {
        const u = Kt(Ve + 1);
        u >= 0 && (Ht = Ne[u]);
      }
    }
    ta && (ta.hidden = !Ht, ta.textContent = Ht != null && Ht.sessionHidden ? "Include this session" : "Skip this session"), Bs();
  }
  ta.addEventListener("click", () => {
    Ht && (Ht.sessionHidden = !Ht.sessionHidden, It((Ht.sessionHidden ? "Hidden " : "Included ") + Ht.name + " for this session"), $a());
  });
  let ca = null, dr = null;
  function Pi(t, i = {}) {
    const s = Ue[mt];
    l.fire(t, { move: (s == null ? void 0 : s.name) || "", move_id: mt, ...i });
  }
  function _l() {
    const t = Ue[mt];
    ca = { key: mt, name: (t == null ? void 0 : t.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(dr), dr = setInterval(() => {
      ca && !wn && ca.active++;
    }, 1e3), Pi("started", { steps: Ne.length });
  }
  function Ps(t) {
    if (clearInterval(dr), !ca) return;
    const i = ca;
    ca = null, Pi(t ? "completed" : "ended", { seconds: i.active }), !(i.active < 30) && (dt.history.unshift({ id: "h-" + i.startedAt, move_id: i.key, name: i.name, start: new Date(i.startedAt).toISOString(), seconds: i.active, completed: t }), dt.history = dt.history.slice(0, 1e3), vn(), to(), n());
  }
  function Bn() {
    k("workout"), Is();
    const t = Kt(0);
    t >= 0 && Ne[t].kind === "video" && Vr(Ne[t]);
  }
  function Ii() {
    pr(), Ps(!1), clearInterval(Tt), clearInterval(Oa), Nt = !1, ua(!1), o("app").classList.remove("resting"), sn.classList.remove("active"), k("home");
  }
  function Is() {
    sn.classList.add("active");
    let t = 5;
    Lt.textContent = t, requestAnimationFrame(Ri), clearInterval(Oa), Oa = setInterval(() => {
      t--, t > 0 ? (Lt.textContent = t, Ri()) : (clearInterval(Oa), Lt.textContent = "GO", Ri(), setTimeout(() => {
        sn.classList.remove("active"), cancelAnimationFrame(po), Dl();
      }, 650));
    }, 1e3);
  }
  function cr() {
    var i;
    ai.innerHTML = "";
    const t = ((i = Ne[Math.max(0, Ve)] || Ne[0]) == null ? void 0 : i.round) || 1;
    ai.dataset.round = t, Ne.forEach((s, u) => {
      if ((s.round || 1) !== t) return;
      const f = document.createElement("button");
      f.dataset.step = u, f.type = "button", f.className = "progressSegment", f.setAttribute("aria-label", "Go to " + s.name), f.addEventListener("click", () => {
        u <= Ve && El(u);
      }), ai.appendChild(f);
    });
  }
  function ua(t) {
    t = !!t;
    const i = wn !== t;
    if (wn = t, Ir.textContent = t ? "Resume" : "Pause", o("app").classList.toggle("paused", t), xn && At)
      try {
        t ? At.pauseVideo() : At.playVideo();
      } catch {
      }
    i && ca && Pi(t ? "paused" : "resumed");
  }
  function El(t) {
    t < 0 || t >= Ne.length || t > Ve || (clearInterval(Tt), Nt = !1, o("app").classList.remove("resting"), Ve = t, ua(!1), yo(), Tt = setInterval(Pa, 1e3));
  }
  function Dl() {
    if (Ve = Kt(0), ua(!1), cr(), Ve < 0) {
      Ni.textContent = "No activities", da.textContent = "Open Edit and enable or add a movement", da.hidden = !1;
      return;
    }
    _l(), yo(), clearInterval(Tt), Tt = setInterval(Pa, 1e3);
  }
  const Hs = o("videoStage"), vo = o("videoSound"), Fs = 0, ii = 1, Os = 2;
  let Or = 0, bo = null, wo = null, At = null, ri = null, si = 0, qr = !1, xn = null, xo = null;
  function Wr() {
    var t;
    return (t = window.YT) != null && t.Player ? Promise.resolve(window.YT) : bo || (bo = new Promise((i, s) => {
      const u = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          u == null || u();
        } catch {
        }
      };
      const f = setInterval(() => {
        var R;
        (R = window.YT) != null && R.Player && (clearInterval(f), clearTimeout(M), i(window.YT));
      }, 100), M = setTimeout(() => {
        clearInterval(f), bo = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const R = document.createElement("script");
        R.src = "https://www.youtube.com/iframe_api", R.async = !0, R.onerror = () => {
          clearInterval(f), clearTimeout(M), bo = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(R);
      }
    }), bo);
  }
  function Ba() {
    return wo || (wo = Wr().then((t) => new Promise((i) => {
      const s = document.createElement("div");
      o("videoFrame").appendChild(s), At = new t.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => i(At), onStateChange: (u) => Rl(u.data), onError: (u) => yn(u.data) }
      });
    })), wo.catch(() => {
      wo = null;
    }), wo);
  }
  function Vr(t) {
    !(t != null && t.videoId) || t.videoError || Ba().then((i) => {
      xn || ri === t.videoId || (ri = t.videoId, si = Number(t.start) || 0, qr = !1, i.mute(), i.loadVideoById({ videoId: t.videoId, startSeconds: si }));
    }).catch(() => {
    });
  }
  function zr() {
    const t = Kt(Ve + 1);
    t >= 0 && Ne[t].kind === "video" && Vr(Ne[t]);
  }
  function Rl(t) {
    if (!xn) {
      t === ii && !qr && (qr = !0, At.pauseVideo(), At.seekTo(si, !0));
      return;
    }
    Hs.classList.toggle("playing", t === ii), Ne[Ve] === xn && performance.now() > Or && (t === ii && wn ? ua(!1) : t === Os && !wn && ua(!0)), t === ii && jr(xn.videoId, At.getDuration()) && vn(), t === Fs && Hi();
  }
  function yn(t) {
    const i = xn;
    if (!i) {
      ri = null;
      return;
    }
    t === 101 || t === 150 ? (Fi(i.videoId), It("That video can’t play outside YouTube, so it was skipped")) : It("The video couldn’t play, so it was skipped"), Hi();
  }
  function Nl(t) {
    if (o("app").classList.add("videoStep"), vo.hidden = !0, xn = t, clearTimeout(xo), !t.videoId) {
      It("This video step has no link yet, so it was skipped"), setTimeout(() => Hi(), 0);
      return;
    }
    Ba().then((i) => {
      if (xn !== t) return;
      Or = performance.now() + 1500;
      const s = Number(t.start) || 0;
      ri !== t.videoId ? (ri = t.videoId, si = s, i.loadVideoById({ videoId: t.videoId, startSeconds: s })) : (i.seekTo(s, !0), i.playVideo()), i.unMute(), wn && i.pauseVideo(), xo = setTimeout(() => {
        xn !== t || wn || (i.getPlayerState() !== ii ? (i.mute(), i.playVideo(), vo.hidden = !1) : i.isMuted() && (vo.hidden = !1));
      }, 1600);
    }).catch(() => {
      xn === t && (It("YouTube didn’t load, so the video was skipped"), Hi());
    });
  }
  function ur() {
    if (!o("app").classList.contains("videoStep")) return;
    const t = a.querySelector(".workGrid"), i = a.querySelector(".sessionControlRow"), s = t.getBoundingClientRect().top, u = (i == null ? void 0 : i.offsetHeight) || 42, f = window.innerHeight - s - 16 - u - 84;
    t.style.setProperty("--theater-h", Math.max(240, Math.round(f)) + "px");
  }
  window.addEventListener("resize", ur);
  function pr() {
    clearTimeout(xo);
    const t = xn;
    if (xn = null, o("app").classList.remove("videoStep"), Hs.classList.remove("playing"), vo.hidden = !0, t && At) {
      try {
        At.pauseVideo();
      } catch {
      }
      ri = null;
    }
  }
  function Hi() {
    const t = xn;
    !t || Ne[Ve] !== t || (pr(), clearInterval(Tt), Ja(), Tt = setInterval(Pa, 1e3));
  }
  vo.addEventListener("click", () => {
    At && (At.unMute(), At.playVideo()), vo.hidden = !0;
  });
  function Bl(t) {
    var u;
    const i = Number(t.start) || 0;
    if (t.useVideoLength === !1) return i + (Number(t.duration) || 300);
    const s = At && xn === t && Number((u = At.getDuration) == null ? void 0 : u.call(At)) || 0;
    return Number(t.end) || s || Number(t.videoDuration) || i + (Number(t.duration) || 300);
  }
  function ot(t, i) {
    const s = Ue[mt];
    [Ct, Je, Mn, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((u) => (Array.isArray(u) ? u : []).forEach((f) => {
      f && f.kind === "video" && f.videoId === t && i(f);
    }));
  }
  function jr(t, i) {
    i = Math.round(Number(i) || 0);
    let s = !1;
    return t && i > 0 && ot(t, (u) => {
      u.videoDuration !== i && (u.videoDuration = i, s = !0);
    }), s;
  }
  function Fi(t) {
    ot(t, (i) => {
      i.videoError = "embed";
    }), vn();
  }
  function Gr(t) {
    const i = t.videoId;
    if (!i) return;
    const s = () => {
      Cn.classList.contains("open") ? pe || _() : (_(), vn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + i)).then((u) => u.ok ? u.json() : Promise.reject(u.status)).then((u) => {
      t.videoId === i && (t.videoTitle = u.title || "", t.autoName && u.title && (t.name = u.title), s());
    }).catch((u) => {
      t.videoId === i && u === 401 && (t.videoError = "embed", s());
    }), Xa(i).then((u) => {
      jr(i, u) && s();
    }).catch((u) => {
      u === "embed" && t.videoId === i && (t.videoError = "embed", s());
    });
  }
  function Xa(t) {
    return Wr().then((i) => new Promise((s, u) => {
      const f = document.createElement("div");
      f.className = "videoProbe", f.setAttribute("aria-hidden", "true");
      const M = document.createElement("div");
      f.appendChild(M), o("app").appendChild(f);
      let R = null, z = !1;
      const oe = (J, Se) => {
        z || (z = !0, clearTimeout(le), setTimeout(() => {
          try {
            R == null || R.destroy();
          } catch {
          }
          f.remove();
        }, 0), Se ? u(Se) : s(J));
      }, le = setTimeout(() => oe(0), 2e4), ee = () => {
        var Se;
        const J = Number((Se = R == null ? void 0 : R.getDuration) == null ? void 0 : Se.call(R)) || 0;
        return J > 0 && oe(J), J > 0;
      };
      R = new i.Player(M, {
        width: 320,
        height: 180,
        videoId: t,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            ee() || (R.mute(), R.playVideo());
          },
          onStateChange: () => ee(),
          onError: (J) => oe(0, J.data === 101 || J.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function yo() {
    Nt = !1;
    const t = Ne[Ve];
    o("app").classList.toggle("resting", t.kind === "rest"), t.kind === "video" ? Nl(t) : pr(), Zt = t.duration, Ta = t.duration, Ni.textContent = t.name, da.textContent = t.group, da.hidden = !0, Vn.textContent = dn(Ve), ca && Pi("step", { name: t.name, group: t.group, kind: t.kind, step: Ve + 1, of: Ne.length, round: t.round || 1, rounds: Bi(), duration: t.duration }), $a(), Ns(), zr(), t.kind === "video" && setTimeout(ur, 0);
  }
  function ko() {
    var f;
    const t = ((f = Ne[Ve]) == null ? void 0 : f.kind) === "video" && !Nt, i = t && Zt >= 60;
    ni.textContent = i ? Gt(Zt) : Zt, ni.classList.toggle("long", i), t && (o("videoClock").textContent = Gt(Zt) + " left");
    const s = Zt / Ta * 100;
    Rs.style.width = s + "%";
    const u = go();
    if (u && !Nt) {
      const M = 100 - s;
      u.style.setProperty("--segment-progress", M + "%");
    }
  }
  function Pa() {
    var i, s;
    if (wn) return;
    const t = Ne[Ve];
    if ((t == null ? void 0 : t.kind) === "video" && !Nt && xn === t) {
      const u = Number((i = At == null ? void 0 : At.getCurrentTime) == null ? void 0 : i.call(At)) || 0, f = Number(t.start) || 0, M = Bl(t);
      Ta = Math.max(1, M - f), (u > f || ((s = At == null ? void 0 : At.getPlayerState) == null ? void 0 : s.call(At)) === ii) && (Zt = Math.max(0, Math.ceil(M - u))), ko(), u > f && u >= M - 0.25 && Hi();
      return;
    }
    Zt--, ko(), Zt <= 0 && (t.rest > 0 ? hr(t.rest) : Ja());
  }
  function hr(t) {
    var s;
    Nt = !0, o("app").classList.add("resting");
    const i = go();
    i && i.style.setProperty("--segment-progress", "100%"), clearInterval(Tt), Zt = t, Ta = t, ca && Pi("rest", { duration: t }), Ni.textContent = "Rest", da.textContent = (s = Ne[Ve]) != null && s.roundBreakAfter ? "Round " + (Ne[Ve].round + 1) + " next" : "Recovery", $a(), ko(), Tt = setInterval(() => {
      wn || (Zt--, ko(), Zt <= 0 && (clearInterval(Tt), Ja(), Tt = setInterval(Pa, 1e3)));
    }, 1e3);
  }
  function Ja() {
    Nt = !1;
    const t = Kt(Ve + 1);
    if (t >= 0)
      Ve = t, yo();
    else {
      clearInterval(Tt), pr(), ua(!1), o("app").classList.remove("resting"), Ni.textContent = "Complete", da.textContent = "Move finished", da.hidden = !1, ni.textContent = "✓";
      {
        const i = Bi();
        Vn.textContent = i > 1 ? i + " rounds done" : Ne.filter((s) => !s.roundBreak).length + " steps done";
      }
      Ps(!0);
      {
        const i = as(7).reduce((s, u) => s + u.minutes, 0);
        da.textContent = "Move finished · " + i + " min in the last 7 days";
      }
      Rs.style.width = "100%", $a();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    fr(), ua(!1);
  });
  function fr() {
    clearInterval(Tt);
    const t = Ne[Ve];
    if (Nt) {
      Nt = !1, o("app").classList.remove("resting");
      const s = Kt(Ve + 1);
      s >= 0 ? (Ve = s, yo(), Tt = setInterval(Pa, 1e3)) : Ja();
      return;
    }
    if (t && t.rest > 0) {
      hr(t.rest);
      return;
    }
    const i = Kt(Ve + 1);
    i >= 0 ? (Ve = i, yo(), Tt = setInterval(Pa, 1e3)) : Ja();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(Tt), ua(!1), Nt) {
      const t = Ne[Ve];
      Zt = t.rest, Ta = t.rest, Ni.textContent = "Rest", da.textContent = "Recovery", o("app").classList.add("resting"), $a(), ko();
    } else
      yo();
    Tt = setInterval(Nt ? () => {
      wn || (Zt--, ko(), Zt <= 0 && (clearInterval(Tt), Ja(), Tt = setInterval(Pa, 1e3)));
    } : Pa, 1e3);
  });
  function Mo(t, i, s, u) {
    let f = 0, M = null, R = !1;
    function z() {
      M && cancelAnimationFrame(M), M = null, f = 0, R = !1, i.style.width = "0%", t.classList.remove("holding");
    }
    function oe(J) {
      if (!R) return;
      f || (f = J);
      const Se = Math.min(1, (J - f) / s);
      if (i.style.width = Se * 100 + "%", Se >= 1) {
        R = !1, M && cancelAnimationFrame(M), M = null, i.style.width = "100%", setTimeout(() => i.style.width = "0%", 90), u();
        return;
      }
      M = requestAnimationFrame(oe);
    }
    function le(J) {
      var Se;
      if (!(J && J.button !== void 0 && J.button !== 0)) {
        J == null || J.preventDefault(), z(), R = !0, t.classList.add("holding");
        try {
          (Se = t.setPointerCapture) == null || Se.call(t, J.pointerId);
        } catch {
        }
        M = requestAnimationFrame(oe);
      }
    }
    function ee() {
      R && z();
    }
    t.addEventListener("pointerdown", le), t.addEventListener("pointerup", ee), t.addEventListener("pointercancel", ee), t.addEventListener("lostpointercapture", ee), t.addEventListener("keydown", (J) => {
      (J.key === " " || J.key === "Enter") && !J.repeat && le(J);
    }), t.addEventListener("keyup", (J) => {
      (J.key === " " || J.key === "Enter") && ee();
    });
  }
  const qs = o("endWorkout");
  Mo(qs, o("holdEndFill"), 1500, Ii);
  const Qa = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    Qa.classList.add("open"), Qa.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    Qa.classList.remove("open"), Qa.setAttribute("aria-hidden", "true");
  });
  function Ws() {
    const t = mt, i = a.querySelector('.workoutPanel[data-workout="' + t + '"]');
    i && i.remove(), delete Ue[t], dt.order = dt.order.filter((u) => u !== t);
    let s = a.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const u = "custom-" + Date.now();
      Ue[u] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, dt.order.push(u), s = No(u, Ue[u]);
    }
    Qa.classList.remove("open"), Qa.setAttribute("aria-hidden", "true"), Di = null, nr(), Hn(s.dataset.workout), vn(), It("Move deleted");
  }
  Mo(o("deleteMoveYes"), o("deleteMoveFill"), 1500, Ws);
  const Co = a.querySelector(".rubberTabs"), Ia = o("rubberIndicator");
  function So(t, i = !0) {
    if (!t || !Co || !Ia) return;
    const s = Co.getBoundingClientRect(), u = t.getBoundingClientRect();
    Ia.style.transition = i ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const f = Rt();
    Ia.style.left = (u.left - s.left) / f + Co.scrollLeft + "px", Ia.style.width = u.width / f + "px", i && (Ia.style.transform = "scaleX(1.08)", setTimeout(() => Ia.style.transform = "scaleX(1)", 180));
  }
  a.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => {
    t.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), a.querySelectorAll(".tab").forEach((i) => i.classList.remove("active")), a.querySelectorAll(".settingsPane").forEach((i) => i.classList.remove("active")), t.classList.add("active"), o(t.dataset.pane).classList.add("active"), So(t, !0);
  })), requestAnimationFrame(() => So(a.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => So(a.querySelector(".tab.active"), !1));
  const mr = o("pixelTrailToggle"), li = o("rippleToggle"), eo = o("trailStrength"), To = o("trailLife");
  function na(t, i) {
    tt()[t] = i, vn();
  }
  const Vs = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Ur(t) {
    return t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "g:" + String(t.group || "").trim().toLowerCase();
  }
  function Yr(t) {
    var i;
    return !!((i = tt().hideMeta) != null && i[Ur(t)]);
  }
  function Pl() {
    const t = /* @__PURE__ */ new Map(), i = (s, u, f) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const M = Ur(s);
      let R = t.get(M);
      R || (R = { key: M, label: M === "rest" ? "Rest" : M === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, t.set(M, R)), R.kinds.add(M === "rest" ? "Rest" : M === "video" ? "Video" : u), R.moves.add(f), R.count++;
    };
    return Object.values(Ue).forEach((s) => {
      const u = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Xe)).forEach((f) => i(f, "Warm-up", u)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((f) => i(f, f.presetRole === "warmup" ? "Warm-up" : f.presetRole === "cooldown" ? "Cooldown" : "Movement", u)), (s.cooldown || (s.customSequence ? [] : gn)).forEach((f) => i(f, "Cooldown", u));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, u]) => {
      t.has(s) || t.set(s, { key: s, label: u, kinds: /* @__PURE__ */ new Set([u]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...t.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, u) => Vs.indexOf(s.kind) - Vs.indexOf(u.kind) || s.label.localeCompare(u.label));
  }
  let Zr = "all";
  function Kr() {
    const t = o("metaSearch").value.trim().toLowerCase();
    return Pl().filter((i) => (Zr === "all" || i.kind === Zr) && (!t || i.label.toLowerCase().includes(t) || i.moves.some((s) => s.toLowerCase().includes(t))));
  }
  function di() {
    const t = o("metaTableBody");
    if (!t) return;
    const i = tt().hideMeta || {}, s = Kr();
    t.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((f) => {
      const M = !i[f.key], R = f.count ? (f.moves.length > 2 ? f.moves.slice(0, 2).join(", ") + " + " + (f.moves.length - 2) + " more" : f.moves.join(", ")) + " · " + f.count + " step" + (f.count === 1 ? "" : "s") : "Not used yet", z = document.createElement("tr");
      z.className = M ? "" : "off", z.innerHTML = '<td><div class="metaType">' + Ie(f.label) + '</div><div class="metaSub">' + Ie(f.kind + " · " + R) + '</div></td><td class="metaKindCol">' + Ie(f.kind) + '</td><td class="metaUsedCol">' + Ie(R) + '</td><td class="metaSwitchCol"><button class="switch' + (M ? " on" : "") + '" type="button" role="switch" aria-checked="' + M + '" aria-label="Second line for ' + Ie(f.label) + ' on phones"></button></td>', z.querySelector(".switch").addEventListener("click", () => gr([f.key], M)), t.appendChild(z);
    });
    const u = s.filter((f) => i[f.key]).length;
    o("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (u ? " · " + u + " hidden on phones" : "") : "";
  }
  function gr(t, i) {
    const s = { ...tt().hideMeta || {} };
    t.forEach((u) => {
      i ? s[u] = !0 : delete s[u];
    }), na("hideMeta", s), di(), Pe(), $a();
  }
  o("metaSearch").addEventListener("input", di), o("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.addEventListener("click", () => {
    Zr = t.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((i) => i.classList.toggle("active", i === t)), di();
  })), o("metaHideAll").addEventListener("click", () => gr(Kr().map((t) => t.key), !0)), o("metaShowAll").addEventListener("click", () => gr(Kr().map((t) => t.key), !1));
  const ci = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...tt().toggles || {} };
  function $r() {
    a.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", ci[s.dataset.toggle] !== !1)), a.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, u]) => {
      o(u).hidden = ci[s] === !1;
    });
    const t = ["steps", "mood", "energyLevel"].some((s) => ci[s] !== !1);
    a.querySelector(".activityCard").hidden = !t, o("weatherCard").hidden = !0;
    const i = a.querySelector("#homeView .grid");
    i.classList.toggle("noActivity", !t), i.classList.toggle("noWeather", !0);
  }
  a.querySelectorAll("[data-toggle]").forEach((t) => t.addEventListener("click", () => {
    ci[t.dataset.toggle] = ci[t.dataset.toggle] === !1, $r(), na("toggles", { ...ci });
  })), $r();
  function vr() {
    mr.classList.toggle("on", ba), li.classList.toggle("on", Sn), eo.value = Math.round(Qo * 100), o("trailStrengthValue").textContent = eo.value + "%", To.value = mo, o("trailLifeValue").textContent = To.value + " ms";
  }
  tt().trailEnabled !== void 0 && (ba = tt().trailEnabled), tt().rippleEnabled !== void 0 && (Sn = tt().rippleEnabled), tt().trailStrength !== void 0 && (Qo = tt().trailStrength), tt().trailMaxAge !== void 0 && (mo = tt().trailMaxAge), vr(), mr.addEventListener("click", () => {
    ba = !ba, mr.classList.toggle("on", ba), ba || (wa = []), na("trailEnabled", ba);
  }), li.addEventListener("click", () => {
    Sn = !Sn, li.classList.toggle("on", Sn), na("rippleEnabled", Sn);
  }), eo.addEventListener("input", () => {
    Qo = Number(eo.value) / 100, o("trailStrengthValue").textContent = eo.value + "%";
  }), eo.addEventListener("change", () => na("trailStrength", Qo)), To.addEventListener("input", () => {
    mo = Number(To.value), o("trailLifeValue").textContent = To.value + " ms";
  }), To.addEventListener("change", () => na("trailMaxAge", mo)), _i.addEventListener("change", () => na("upcomingCount", La));
  function Xr(t) {
    a.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === t));
    const i = t === "light";
    o("app").classList.toggle("light", i), l.setLight(i), Pt(a);
  }
  Xr(tt().theme || "dark"), a.querySelectorAll(".themeBtn").forEach((t) => t.addEventListener("click", () => {
    Xr(t.dataset.theme), na("theme", t.dataset.theme);
  }));
  const bn = { steps: null, weather: null, ...tt().entities || {} };
  let nn = null, Jr = {};
  function zs(t) {
    const i = Object.values(t).filter((z) => z.entity_id.startsWith("sensor.") || z.entity_id.startsWith("input_number.")), s = (z) => z.attributes.friendly_name || z.entity_id, u = i.filter((z) => /step/i.test(z.entity_id) || /step/i.test(s(z)) || ["steps", "step"].includes(String(z.attributes.unit_of_measurement || "").toLowerCase())), f = i.filter((z) => !u.includes(z)), M = (z, oe) => s(z).localeCompare(s(oe)), R = (z, oe) => /health_steps/.test(oe.entity_id) - /health_steps/.test(z.entity_id) || M(z, oe);
    return { suggested: u.sort(R), rest: f.sort(M), label: s };
  }
  function Qr(t) {
    const i = o("stepsEntity");
    if (!i || i.matches(":focus")) return;
    const { suggested: s, rest: u, label: f } = zs(t), M = (oe) => '<option value="' + Ie(oe.entity_id) + '">' + Ie(f(oe)) + "</option>";
    i.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(M).join("") + "</optgroup>" : "") + (u.length ? '<optgroup label="All sensors">' + u.map(M).join("") + "</optgroup>" : ""), i.value = bn.steps || "";
    const R = o("stepsStatus"), z = bn.steps && t[bn.steps];
    R.textContent = z ? "Connected · " + f(z) : R.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    bn.steps = o("stepsEntity").value || null, na("entities", { ...bn }), Jr = {}, ns(), nn && (Qr(nn), pi(nn));
  });
  function es(t, i = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: i }).format(t);
  }
  function ui() {
    const t = bn.steps && (nn == null ? void 0 : nn[bn.steps]), i = Number(t == null ? void 0 : t.state);
    return Number.isFinite(i) ? i : null;
  }
  function pi(t) {
    var u;
    const i = bn.steps, s = i ? Number((u = t[i]) == null ? void 0 : u.state) : NaN;
    o("stepsMeta").textContent = i ? Number.isFinite(s) ? es(s) : "—" : "Set up in Settings";
  }
  let ts = 0;
  async function ns() {
    const t = bn.steps;
    if (!t || !l.ws) return;
    ts = Date.now();
    const i = /* @__PURE__ */ new Date(), s = new Date(i.getFullYear(), i.getMonth(), i.getDate() - 30);
    try {
      const u = await l.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: i.toISOString(), statistic_ids: [t], period: "day", types: ["max"] }), f = (u == null ? void 0 : u[t]) || [], M = {};
      if (f.forEach((R) => {
        Number.isFinite(R.max) && (M[qt(new Date(R.start))] = R.max);
      }), !Object.keys(M).length) {
        const R = await l.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: i.toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((R == null ? void 0 : R[t]) || []).forEach((z) => {
          const oe = Number(z.s ?? z.state), le = z.lu ? z.lu * 1e3 : Date.parse(z.last_updated || z.last_changed);
          if (!Number.isFinite(oe) || !le) return;
          const ee = qt(new Date(le));
          M[ee] = Math.max(M[ee] || 0, oe);
        });
      }
      Jr = M, n();
    } catch {
    }
  }
  function to() {
    n();
  }
  to(), setInterval(() => {
    to(), zo(), uo();
  }, 10 * 60 * 1e3);
  function as(t) {
    const i = {}, s = {};
    dt.history.forEach((R) => {
      const z = qt(new Date(R.start));
      i[z] = (i[z] || 0) + (R.seconds || 0) / 60, s[z] = (s[z] || 0) + 1;
    });
    const u = /* @__PURE__ */ new Date(), f = qt(u), M = [];
    for (let R = t - 1; R >= 0; R--) {
      const z = new Date(u.getFullYear(), u.getMonth(), u.getDate() - R), oe = qt(z), le = dt.checkins.filter((J) => J.date === oe), ee = (J) => {
        const Se = le.map((Ge) => Ge[J]).filter(Boolean);
        return Se.length ? Se.reduce((Ge, Ee) => Ge + Ee, 0) / Se.length : null;
      };
      M.push({
        key: oe,
        date: z,
        minutes: Math.round(i[oe] || 0),
        moves: s[oe] || 0,
        steps: oe === f && ui() != null ? ui() : Jr[oe] ?? null,
        mood: ee("mood"),
        energy: ee("energy")
      });
    }
    return M;
  }
  function e(t) {
    let i = t.length - 1;
    t[i] && !t[i].minutes && i--;
    let s = 0;
    for (; i >= 0 && t[i].minutes > 0; )
      s++, i--;
    return s;
  }
  function n() {
    const t = o("insightCard");
    if (!t) return;
    const i = as(30), s = e(i), u = i.reduce((le, ee) => le + ee.minutes, 0), f = /* @__PURE__ */ new Date(), M = qt(f), R = qt(new Date(f.getFullYear(), f.getMonth(), f.getDate() - (f.getDay() + 6) % 7)), z = i.filter((le) => le.key >= R && le.key <= M).reduce((le, ee) => le + ee.minutes, 0), oe = (le, ee, J) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + le + '</div><div><div class="activityRowName">' + Ie(ee) + '</div><div class="activityRowMeta">' + Ie(J) + "</div></div></div>";
    t.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + me("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + oe(me("clock"), "This week", z + " min") + oe(me("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + oe(me("calendar"), "30 days", u + " min") + "</div>";
  }
  const r = {
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
  }, d = (t) => t === "sunny" ? "clear" : t === "clear-night" ? "night" : t === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(t) ? "rain" : ["snowy", "snowy-rainy"].includes(t) ? "snow" : "cloudy", p = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, y = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let h = 0;
  const x = (t, i) => '<path class="' + i + '" d="' + t + '"/>', S = (t, i) => ' style="animation-delay:-' + Math.round(t * 137 % i) + 'ms"', D = (t, i, s, u) => {
    const f = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + S(t, 2400) + ' d="M' + t + " " + (i - s) + "L" + (t + f) + " " + (i - f) + "L" + (t + s) + " " + i + "L" + (t + f) + " " + (i + f) + "L" + t + " " + (i + s) + "L" + (t - f) + " " + (i + f) + "L" + (t - s) + " " + i + "L" + (t - f) + " " + (i - f) + 'Z"/>';
  }, F = ([t, i, s], u) => '<path class="wxMoonPath" d="' + t + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + i + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', B = (t, i) => i ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', $ = (t) => (t ? ["29.35", "43.04", "56.74"].map((i, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + i + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + i + ' 60.65)"/></g>') : [19, 26, 33].map((i, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + i + ' 38)"/></g>')).join(""), ye = (t) => (t ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([i, s], u) => '<circle class="wxFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + i + '" cy="' + s + '" r="' + (t ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Re(t, i, s, u) {
    return t === "clear" ? i ? F(s ? y.l : y.s, u) + (s ? D(70, 20, 5.83, 1) + D(78.33, 41.67, 3.75, 0.8) + D(60, 71.67, 3.33, 0.6) : D(42, 12, 3.5, 1) + D(47, 25, 2.25, 0.8) + D(36, 43, 2, 0.6)) : B(u, s) : t === "partly" ? (i ? F(s ? y.lp : y.sp, u) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + x(s ? p.lp : p.sp, i ? "wxCloudLight" : "wxBright") + (i ? s ? D(73.33, 16.67, 4.17, 0.9) : D(44, 10, 2.5, 0.9) : "") : t === "cloudy" ? x(s ? p.lc : p.s, i ? "wxCloudLight" : "wxBright") + (i ? s ? D(15, 15, 3.75, 0.8) + D(76.67, 13.33, 2.92, 0.6) : D(9, 9, 2.25, 0.8) + D(46, 8, 1.75, 0.6) : "") : x(s ? p.lr : p.s, "wxCloudLight") + (t === "rain" ? $(s) : ye(s));
  }
  const ce = () => {
    var t;
    return ((t = nn == null ? void 0 : nn["sun.sun"]) == null ? void 0 : t.state) === "below_horizon";
  };
  let ie = tt().weatherStyle || "bitmap", H = tt().weatherLayout === "strip" ? "strip" : "tiles", Le = tt().weatherMotion !== !1;
  const He = () => Le && !qe(), st = /* @__PURE__ */ new Map(), $t = 700, zt = (t) => {
    const [i, s] = t.split("/");
    return { k: i === "fog" ? "cloudy" : i === "storm" ? "rain" : i, night: s === "night" };
  };
  function Pn(t, i, s, u = ie, f, M) {
    let R = d(t);
    const z = R === "night" || (M != null ? !!M : !!s && ce());
    R === "night" && (R = "clear");
    const oe = i ? 90 : 54, le = vl(t, z), ee = performance.now();
    let J = f ? st.get(f) : null;
    if (f && !J ? st.set(f, J = { key: le, t0: -1e9 }) : J && J.key !== le && (J.fromKey = J.key, J.from = J.last || null, J.key = le, J.t0 = ee), u !== "smooth") return '<span class="wxIcon pixels' + (i ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + le + '"' + (f ? ' data-wx-slot="' + f + '"' : "") + ' data-wx-style="' + u + '" data-wx-size="' + oe + '"></canvas></span>';
    let Se = "";
    if (J && ee - J.t0 < $t && (He() || qe())) {
      const Ge = zt(J.fromKey);
      Se = '<span class="wxLayer wxOut ' + Ge.k + (Ge.night ? " night" : "") + '" style="animation-delay:' + Math.round(J.t0 - ee) + 'ms"><svg viewBox="0 0 ' + oe + " " + oe + '">' + Re(Ge.k, Ge.night, i, "wxg" + ++h) + "</svg></span>";
    }
    return '<span class="wxIcon ' + R + (z ? " night" : "") + (i ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + oe + " " + oe + '">' + Re(R, z, i, "wxg" + ++h) + "</svg>" + Se + "</span>";
  }
  function je() {
    const t = o("app"), i = getComputedStyle(t), s = (z) => i.getPropertyValue(z).trim(), u = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([z, oe]) => {
      s(oe) && (u[z] = s(oe));
    });
    const f = s("--color-text-primary") || "#f1f1f1", M = s("--color-bg-card") || "#222222", R = t.classList.contains("light");
    return { colors: u, ink: R ? f : M, paper: R ? M : f };
  }
  function Pt(t, i = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const u = je(), f = He(), M = qe();
    s.forEach((R) => {
      var J;
      const z = R.dataset.wx, oe = R.dataset.wxSlot ? st.get(R.dataset.wxSlot) : null;
      let le = hd(z, u.colors);
      if (oe && oe.key === z) {
        const Se = (i - oe.t0) / $t;
        Se < 1 && (f || M) && (le = _u(oe.from || hd(oe.fromKey, u.colors), le, Math.max(0, Se), u.colors, M)), oe.last = le;
      }
      const ee = Wc(le, { size: Number(R.dataset.wxSize) || 54, px: 2, oneBit: R.dataset.wxStyle === "onebit", colors: u.colors, ink: u.ink, paper: u.paper, clock: i, idle: f });
      R.width !== ee.w && (R.width = ee.w), R.height !== ee.h && (R.height = ee.h), (J = R.getContext("2d")) == null || J.putImageData(new ImageData(ee.data, ee.w, ee.h), 0, 0);
    });
  }
  let br = null, Cd = -1;
  function Sd(t) {
    if (br = null, !g) return;
    const i = He(), s = Math.floor(t / 100), u = [...st.values()].some((oe) => t - oe.t0 < $t), f = [...js.values()].some((oe) => t - oe.t0 < oe.dur), M = ve.home.classList.contains("active"), R = aa.classList.contains("open"), z = i && ie === "smooth" && (R || M && H === "strip");
    !document.hidden && (u || f || z || i && s !== Cd) && (Cd = s, M && (Pt(o("weatherCard"), t), os(o("weatherCard"), t)), R && (Pt(aa, t), os(aa, t))), (i || u || f) && (br = requestAnimationFrame(Sd));
  }
  function Oi() {
    o("app").classList.toggle("wxMotion", He()), !br && g && (br = requestAnimationFrame(Sd));
  }
  let Td = [];
  const an = 36e5, mu = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function Lo() {
    const t = /* @__PURE__ */ new Date(), i = (M, R) => new Date(t.getFullYear(), t.getMonth(), t.getDate() + M, R), s = [], u = [], f = [...Array(6)].map((M, R) => {
      const z = i(R, 6), oe = i(R, 18), le = i(R + 1, 6), ee = Td.find((Se) => qt(new Date(Se.datetime)) === qt(z)), J = (Se, Ge, Ee) => {
        const Me = s.filter((pt) => pt.t >= +Se && pt.t < +Ge);
        if (Me.length) {
          const pt = {};
          return Me.forEach((De) => {
            pt[De.c] = (pt[De.c] || 0) + (mu.has(De.c) ? 2 : 1);
          }), Object.entries(pt).sort((De, ft) => ft[1] - De[1])[0][0];
        }
        const xe = u.find((pt) => {
          const De = +new Date(pt.datetime);
          return De >= +Se - 3 * an && De < +Ge && (pt.is_daytime == null || !!pt.is_daytime == !Ee);
        });
        if (xe) return xe.condition;
        const ut = (ee == null ? void 0 : ee.condition) || "cloudy";
        return Ee && ut === "sunny" ? "clear-night" : ut;
      };
      return { start: +z, end: +le, day: J(z, oe, !1), night: J(oe, le, !0), hi: Number(ee == null ? void 0 : ee.temperature), lo: Number(ee == null ? void 0 : ee.templow) };
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
    let M = f ? u.night : u.day, R = NaN;
    const z = t.hours;
    if (z.length && i >= z[0].t - an && i <= z[z.length - 1].t + an) {
      let oe = z.findIndex((J) => J.t > i);
      oe < 0 && (oe = z.length);
      const le = z[Math.max(0, oe - 1)], ee = z[Math.min(z.length - 1, oe)];
      M = le.c || M, R = ee.t > le.t ? le.temp + (ee.temp - le.temp) * Math.max(0, Math.min(1, (i - le.t) / (ee.t - le.t))) : le.temp;
    }
    if (!Number.isFinite(R)) {
      const oe = [];
      if (t.days.forEach((le) => {
        Number.isFinite(le.lo) && oe.push([le.start - an, le.lo]), Number.isFinite(le.hi) && oe.push([le.start + 9 * an, le.hi]);
      }), oe.length) {
        R = i <= oe[0][0] ? oe[0][1] : oe[oe.length - 1][1];
        for (let le = 1; le < oe.length; le++) if (i <= oe[le][0] && i > oe[le - 1][0]) {
          const [ee, J] = oe[le - 1], [Se, Ge] = oe[le];
          R = J + (Ge - J) * (1 - Math.cos(Math.PI * (i - ee) / (Se - ee))) / 2;
          break;
        }
      }
    }
    return { cond: f && M === "sunny" ? "clear-night" : M, temp: R, night: f, day: u };
  }
  const Ad = (t) => qt(new Date(t)) === qt(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(t)), js = /* @__PURE__ */ new Map(), vu = 900, bu = 700;
  let Gs = null;
  const ka = typeof ResizeObserver == "function" ? new ResizeObserver((t) => t.forEach((i) => {
    os(i.target.parentElement), i.target.closest("#wxDialog") && Bd();
  })) : null;
  function os(t, i = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const u = Lo(), f = u.days.flatMap((J) => [{ cond: J.day, night: !1 }, { cond: J.night, night: !0 }]), M = f.map((J) => J.cond).join(), R = je(), z = He(), oe = qe(), le = Number(qt(new Date(u.start)).replace(/\D/g, "")) % 9973;
    let ee = !1;
    s.forEach((J) => {
      var pt;
      const Se = J.clientWidth, Ge = J.clientHeight;
      if (!Se || !Ge) return;
      const Ee = J.dataset.wxStrip;
      let Me = js.get(Ee);
      Me ? Me.sig !== M && (Me.prev = Me.segs, Me.sig = M, Me.segs = f, Me.t0 = i, Me.dur = bu) : js.set(Ee, Me = { sig: M, segs: f, prev: null, t0: i, dur: vu });
      const xe = z || oe ? Math.min(1, Math.max(0, (i - Me.t0) / Me.dur)) : 1;
      xe < 1 && (ee = !0);
      const ut = { width: Se, height: Ge, colors: R.colors, clock: i, ambient: z, seed: le, reveal: oe ? xe : 1 - Math.pow(1 - xe, 3), prev: xe < 1 ? Me.prev : null, reduce: oe };
      if (ie === "smooth") {
        const De = Math.min(2, window.devicePixelRatio || 1), ft = Math.round(Se * De), kt = Math.round(Ge * De);
        J.width !== ft && (J.width = ft), J.height !== kt && (J.height = kt);
        const at = J.getContext("2d");
        if (!at) return;
        at.setTransform(De, 0, 0, De, 0, 0), ju(at, f, ut);
      } else {
        const De = zu(f, { ...ut, px: 2, oneBit: ie === "onebit", ink: R.ink, paper: R.paper });
        J.width !== De.w && (J.width = De.w), J.height !== De.h && (J.height = De.h), (pt = J.getContext("2d")) == null || pt.putImageData(new ImageData(De.data, De.w, De.h), 0, 0);
      }
    }), ee && Oi();
  }
  function _d() {
    const t = o("weatherCard");
    if (!t || t.hidden) return;
    const i = bn.weather, s = i && (nn == null ? void 0 : nn[i]);
    if (!s) {
      t.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Pn("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (i ? "Not available" : "Set up in Settings") + "</div></div></div></div>", Pt(t);
      return;
    }
    const u = s.attributes || {}, f = u.temperature_unit || "°", M = (at) => Number.isFinite(Number(at)) ? Math.round(Number(at)) + "°" : "—", R = (u.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", z = r[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), oe = qt(/* @__PURE__ */ new Date()), le = Td.slice(0, 7), ee = le.find((at) => qt(new Date(at.datetime)) === oe) || null, J = le.filter((at) => qt(new Date(at.datetime)) >= oe).slice(0, 6), Se = /* @__PURE__ */ new Date(), Ge = qt(new Date(Se.getFullYear(), Se.getMonth(), Se.getDate() + 1)), Ee = ee ? "H " + M(ee.temperature) + "&ensp; L " + M(ee.templow) : "", Me = (at) => {
      const $e = qt(new Date(at.datetime));
      return $e === oe ? "Today" : $e === Ge ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(at.datetime));
    }, xe = Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : "—", ut = (at) => {
      const $e = new Date(at.datetime);
      return Math.round((new Date($e.getFullYear(), $e.getMonth(), $e.getDate()) - new Date(Se.getFullYear(), Se.getMonth(), Se.getDate())) / 864e5);
    }, pt = (at) => (r[at] || at || "").toLowerCase(), De = (at, $e) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + ut(at) + '" aria-label="' + Ie(Me(at) + ": " + pt(at.condition) + ", " + M(at.temperature) + " / " + M(at.templow) + ". Open the forecast") + '">' + Pn(at.condition, !1, !1, ie, "day" + $e) + '<div><div class="activityRowName">' + Ie(Me(at)) + '</div><div class="activityRowMeta">' + M(at.temperature) + " / " + M(at.templow) + "</div></div></div>", ft = () => '<div class="wxStrip"><div class="wxStripDays">' + Lo().days.map(($e, on) => {
      const Wt = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date($e.start)) + ": " + pt($e.day) + (pt($e.day) === pt($e.night) ? " all day and night" : ", then " + pt($e.night) + " overnight") + (Number.isFinite($e.hi) ? ". High " + M($e.hi) : "") + (Number.isFinite($e.lo) ? ", low " + M($e.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + on + '" aria-label="' + Ie(Wt) + '"><span class="wxDayName">' + Ie(Ad($e.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + M($e.hi) + '</span><span class="wxLow">' + M($e.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    t.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Ie("Now in " + R + ": " + xe + "°, " + pt(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Pn(s.state, !0, !0, ie, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ie(String(xe)) + '</span><span class="wxUnit">' + Ie(f) + '</span></div><div class="wxPlace">' + Ie(R) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ie(z) + "</div>" + (Ee ? '<div class="wxRange">' + Ee + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (J.length ? H === "strip" ? ft() : '<div class="activityRows wxDays">' + J.map(De).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", Pt(t);
    const kt = t.querySelector("canvas[data-wx-strip]");
    Gs && Gs !== kt && (ka == null || ka.unobserve(Gs)), Gs = kt, kt && (ka == null || ka.observe(kt), os(t)), Oi(), Nd();
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
  const aa = o("wxDialog"), hi = o("wxGraph"), is = o("wxGraphWrap");
  let Ha = Date.now(), qi = null, Hl = !1, wr = null;
  function Rd(t, i) {
    const s = Lo();
    qi = i || null, Ha = Math.max(s.start, Math.min(s.end - an, t)), js.delete("dialog"), st.delete("scrub"), aa.classList.add("open"), aa.setAttribute("aria-hidden", "false"), Nd(), ka == null || ka.observe(aa.querySelector("canvas[data-wx-strip]")), hi.focus({ preventScroll: !0 }), Oi();
  }
  function Fl() {
    var t;
    aa.classList.remove("open"), aa.setAttribute("aria-hidden", "true"), ka == null || ka.unobserve(aa.querySelector("canvas[data-wx-strip]")), (t = qi == null ? void 0 : qi.focus) == null || t.call(qi, { preventScroll: !0 }), qi = null;
  }
  function Nd() {
    if (!aa.classList.contains("open")) return;
    const t = Lo();
    o("wxGraphDays").innerHTML = t.days.map((i) => "<span>" + Ie(Ad(i.start)) + "</span>").join(""), Bd(t), Us(t), os(aa);
  }
  function Us(t = Lo()) {
    const i = Il(t, Ha), s = nn == null ? void 0 : nn[bn.weather], u = (s == null ? void 0 : s.attributes) || {}, f = u.temperature_unit || "°", M = Math.abs(Ha - Date.now()) < an / 2, R = M && s ? s.state : i.cond, z = M && Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : Number.isFinite(i.temp) ? Math.round(i.temp) : "—", oe = r[R] || (R ? R.charAt(0).toUpperCase() + R.slice(1) : "—"), le = M ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(Ha / an) * an)), ee = i.day, J = (Number.isFinite(ee.hi) ? "H " + Math.round(ee.hi) + "°" : "") + (Number.isFinite(ee.lo) ? "&ensp; L " + Math.round(ee.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Pn(R, !0, M, ie, "scrub", M ? void 0 : i.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ie(String(z)) + '</span><span class="wxUnit">' + Ie(f) + '</span></div><div class="wxPlace">' + Ie(le) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ie(oe) + "</div>" + (J ? '<div class="wxRange">' + J + "</div>" : "") + "</div>", Pt(o("wxDialogNow")), hi.setAttribute("aria-valuenow", String(Math.round((Ha - t.start) / an))), hi.setAttribute("aria-valuetext", le + ", " + oe.toLowerCase() + ", " + z + "°"), Ol(t), Oi();
  }
  function Bd(t = Lo()) {
    const i = o("wxGraphLine"), s = is.clientWidth, u = is.clientHeight;
    if (!s || !u) return;
    const f = [];
    for (let xe = t.start; xe <= t.end; xe += an) {
      const ut = Il(t, xe).temp;
      Number.isFinite(ut) && f.push([Ld(t, xe) * s, ut]);
    }
    if (i.setAttribute("viewBox", "0 0 " + s + " " + u), f.length < 2) {
      i.innerHTML = '<g id="wxCursorMark"></g>', wr = null, Ol(t);
      return;
    }
    const M = f.map((xe) => xe[1]), R = Math.min(...M), z = Math.max(...M), oe = Math.max(4, z - R), le = ie !== "smooth", ee = (xe) => le ? Math.round(xe / 2) * 2 : Math.round(xe * 10) / 10;
    wr = (xe) => u * 0.84 - (xe - R) / oe * u * 0.62;
    const J = je(), Se = ie === "onebit" ? J.paper : "#ffffff", Ge = ie === "onebit" ? J.ink : "rgba(0,0,0,.28)", Ee = "M" + f.map((xe) => ee(xe[0]) + " " + ee(wr(xe[1]))).join(" L"), Me = (xe, ut) => {
      const pt = f.find((De) => De[1] === xe);
      return '<text class="wxLineLabel" x="' + ee(Math.min(s - 14, Math.max(14, pt[0]))) + '" y="' + ee(wr(xe) + (ut ? 18 : -10)) + '" fill="' + Se + '" stroke="' + Ge + '">' + Math.round(xe) + "°</text>";
    };
    i.setAttribute("shape-rendering", le ? "crispEdges" : "auto"), i.innerHTML = '<path d="' + Ee + '" fill="none" stroke="' + Ge + '" stroke-width="' + (le ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Ee + '" fill="none" stroke="' + Se + '" stroke-width="2" stroke-linejoin="round"/>' + Me(z, !1) + Me(R, !0) + '<g id="wxCursorMark"></g>', Ol(t);
  }
  function Ol(t = Lo()) {
    const i = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!i) return;
    const s = is.clientWidth, u = is.clientHeight, f = ie !== "smooth", M = (Se) => f ? Math.round(Se / 2) * 2 : Se, R = M(Ld(t, Ha) * s), z = Il(t, Ha).temp, oe = je(), le = ie === "onebit" ? oe.paper : "#ffffff", ee = ie === "onebit" ? oe.ink : "rgba(0,0,0,.28)", J = wr && Number.isFinite(z) ? M(wr(z)) : null;
    i.innerHTML = '<rect x="' + (R - 2) + '" y="0" width="4" height="' + u + '" fill="' + ee + '"/><rect x="' + (R - 1) + '" y="0" width="2" height="' + u + '" fill="' + le + '"/>' + (J == null ? "" : f ? '<rect x="' + (R - 5) + '" y="' + (J - 5) + '" width="10" height="10" fill="' + le + '" stroke="' + ee + '" stroke-width="2"/>' : '<circle cx="' + R + '" cy="' + J + '" r="6" fill="' + le + '" stroke="' + ee + '" stroke-width="2"/>');
  }
  const Pd = (t) => {
    const i = is.getBoundingClientRect();
    i.width && (Ha = gu(Lo(), (t - i.left) / i.width), Us());
  };
  hi.addEventListener("pointerdown", (t) => {
    if (t.button === 0) {
      Hl = !0;
      try {
        hi.setPointerCapture(t.pointerId);
      } catch {
      }
      Pd(t.clientX);
    }
  }), hi.addEventListener("pointermove", (t) => {
    Hl && Pd(t.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((t) => hi.addEventListener(t, () => {
    Hl = !1;
  })), hi.addEventListener("keydown", (t) => {
    const i = Lo(), s = { ArrowLeft: -an, ArrowRight: an, ArrowDown: -an, ArrowUp: an, PageUp: -24 * an, PageDown: 24 * an }[t.key];
    s ? (t.preventDefault(), Ha = Math.max(i.start, Math.min(i.end - an, Math.round(Ha / an) * an + s)), Us(i)) : (t.key === "Home" || t.key === "End") && (t.preventDefault(), Ha = t.key === "Home" ? i.start : i.end - an, Us(i));
  }), o("wxDialogClose").addEventListener("click", Fl), aa.addEventListener("click", (t) => {
    t.target === aa && Fl();
  }), aa.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Fl());
  }), _d(), (Ud = (jd = window.matchMedia) == null ? void 0 : (Gd = jd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || Ud.call(Gd, "change", () => {
    Oi(), Pt(a);
  }), Oi();
  const Id = o("tvNav");
  l.fullscreenSupported || (Id.hidden = !0), Id.addEventListener("click", () => l.toggleFullscreen()), a.addEventListener("keydown", (t) => {
    !ve.workout.classList.contains("active") || sn.classList.contains("active") || t.target.closest("input,select,textarea,.holdEnd") || (t.key === "MediaPlayPause" || t.key === " " && !t.target.closest("button") ? (t.preventDefault(), Ir.click()) : t.key === "MediaTrackNext" ? (t.preventDefault(), o("skipExercise").click()) : t.key === "MediaTrackPrevious" && (t.preventDefault(), o("restartSegment").click()));
  }), a.querySelectorAll("[data-rounds-step]").forEach((t) => t.addEventListener("click", () => {
    const i = Math.max(1, Math.min(10, (Number(et.value) || 1) + Number(t.dataset.roundsStep)));
    String(i) !== et.value && (et.value = i, et.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [E, C, N, et].forEach((t) => t.addEventListener("input", () => {
    const i = Ue[mt];
    i && (i.total = Number(E.value), i.work = Number(C.value), i.rest = Number(N.value)), _();
  })), Ce.addEventListener("click", Ii), Oe.addEventListener("click", () => k("settings")), o("settingsBack").addEventListener("click", Ii), Ir.addEventListener("click", () => ua(!wn)), Hn(mt), Da(), zo(), n(), o("healthHelpOpen").addEventListener("click", () => a.querySelector(".tab[data-pane=helpPane]").click()), Mo(o("resetStats"), o("resetStatsFill"), 1500, () => {
    dt.history = [], dt.checkins = [], Vo = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    vn(), to(), zo(), Da(), n(), uo(), It("Stats reset");
  });
  const ql = o("morningTime"), Wl = o("eveningTime"), Vl = o("checkinAutoOpen");
  ql.value = Ua().morning, Wl.value = Ua().evening, Vl.classList.toggle("on", tt().checkinAutoOpen !== !1), [["morningTime", ql], ["eveningTime", Wl]].forEach(([t, i]) => i.addEventListener("change", () => {
    i.value && (na(t, i.value), uo());
  })), Vl.addEventListener("click", () => {
    const t = tt().checkinAutoOpen === !1;
    Vl.classList.toggle("on", t), na("checkinAutoOpen", t);
  }), setTimeout(Nr, 800);
  const Hd = o("checkinNotify"), Ys = o("checkinNotifyTarget"), Fd = o("checkinNotifyStatus"), wu = Fd.textContent;
  function Od() {
    const t = l.notifyServices(), i = t.filter((f) => f.startsWith("mobile_app_")), s = i.length ? i : t, u = (f) => f.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Ys.innerHTML = s.map((f) => '<option value="' + Ie(f) + '">' + Ie(u(f)) + "</option>").join(""), !tt().notifyTarget && s[0] && (tt().notifyTarget = s[0]), Ys.value = tt().notifyTarget || "";
  }
  function Zs() {
    const t = !!tt().notifyOn;
    Hd.classList.toggle("on", t), o("checkinNotifyTargetRow").hidden = !t;
    const i = Ua();
    Fd.textContent = t ? "Sends at " + i.morning + " and " + i.evening : wu;
  }
  async function zl() {
    const t = !!tt().notifyOn;
    try {
      return await l.setReminderAutomation(t ? { target: tt().notifyTarget, times: Ua() } : null), !0;
    } catch {
      return It("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  Hd.addEventListener("click", async () => {
    const t = !tt().notifyOn;
    if (t && (Od(), !tt().notifyTarget)) {
      It("Install the Companion app on your phone first");
      return;
    }
    tt().notifyOn = t, Zs(), await zl() ? (vn(), It(t ? "Check-in notifications on" : "Check-in notifications off")) : (tt().notifyOn = !t, Zs());
  }), Ys.addEventListener("change", () => {
    na("notifyTarget", Ys.value), tt().notifyOn && zl();
  }), [ql, Wl].forEach((t) => t.addEventListener("change", () => {
    Zs(), tt().notifyOn && zl();
  })), Od(), Zs();
  let jl = null;
  function xu() {
    jl || (jl = setTimeout(() => {
      jl = null, n();
    }, 3e4));
  }
  return {
    updateStates(t) {
      var s, u;
      const i = !nn || nn[bn.weather] !== t[bn.weather] || ((s = nn["sun.sun"]) == null ? void 0 : s.state) !== ((u = t["sun.sun"]) == null ? void 0 : u.state);
      nn = t, Qr(t), pi(t), i && _d(), Date.now() - ts > 60 * 60 * 1e3 && ns(), xu();
    },
    applyRemoteData(t) {
      if (t && (Array.isArray(t.history) && (dt.history = t.history, to()), Array.isArray(t.history) && n(), Array.isArray(t.checkins) && (dt.checkins = t.checkins.map(wi), uo(), Da(), zo(), to(), n()), t.profiles && !Cn.classList.contains("open") && !ca)) {
        const i = ro(t);
        Object.keys(Ue).forEach((s) => delete Ue[s]), Object.assign(Ue, i.profiles), dt.order = i.order, Ue[mt] || (mt = dt.order[0]), Yi(), Hn(mt);
      }
    },
    suspend() {
      g = !1;
    },
    resume() {
      g || (g = !0, tn || (tn = requestAnimationFrame(ei)), ea || (ea = requestAnimationFrame(sr)), Oi(), So(a.querySelector(".tab.active"), !1));
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
}, ss = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, hn = "made_up_", Wi = (a) => {
  var l;
  return (l = String(a).split(".")[1]) == null ? void 0 : l.startsWith(hn);
}, Js = (a) => a.toLowerCase().replace(/[^a-z0-9]+/g, "_");
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
  }, g = (U, W, X, G) => c("binary_sensor." + hn + (U ? U + "_" : "") + Js(W), U, G ? "on" : "off", { friendly_name: W, device_class: X });
  Object.entries(Zu).forEach(([U, W]) => {
    if (W.temperature != null && c("sensor." + hn + U + "_temperature", U, String(W.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), W.humidity != null && c("sensor." + hn + U + "_humidity", U, String(W.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), W.vacuum && c("vacuum." + hn + "robot", U, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), W.climate && c("climate." + hn + U, U, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: W.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), W.cover) {
      const [X, G, Z, Q] = W.cover;
      c("cover." + hn + U + "_" + Js(X), U, Z ? "open" : "closed", { friendly_name: X, device_class: G, current_position: Z, ...Q != null ? { current_tilt_position: Q } : {} });
    }
    if (W.humidifier && c("humidifier." + hn + U, U, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: W.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), W.solar && (c("sensor." + hn + U + "_solar_power", U, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + hn + U + "_solar_today", U, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), W.valve && c("valve." + hn + U + "_" + Js(W.valve), U, "closed", { friendly_name: W.valve, device_class: "water" }), W.door && g(U, W.door, "door", W.doorOpen), W.window && g(U, W.window, "window", !1), W.motion && g(U, W.motion, "motion", !1), W.plant) {
      const [X, G, Z, Q, T] = W.plant, j = hn + Js(X), ge = (b, ve, Ce, Oe, k) => c("sensor." + j + "_" + b, U, String(Ce), { friendly_name: ve, device_class: k, state_class: "measurement", unit_of_measurement: Oe, plant_low: Ce < ss[b][0], plant_high: Ce > ss[b][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[b] });
      ge("moisture", "Moisture", G, "%", "moisture"), ge("light", "Light", Z, "lx", "illuminance"), ge("temperature", "Temperature", Q, "°C", "temperature"), ge("fertility", "Fertility", T, "µS/cm", "conductivity");
      const Te = Object.entries({ moisture: G, light: Z, temperature: Q, fertility: T }).filter(([b, ve]) => ve < ss[b][0] || ve > ss[b][1]).map(([b, ve]) => b + (ve < ss[b][0] ? " low" : " high"));
      c("plant." + j, U, Te.length ? "problem" : "ok", { friendly_name: X, moisture: G, brightness: Z, temperature: Q, conductivity: T, problem: Te.join(", ") || "none" });
    }
  }), c("alarm_control_panel." + hn + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), g(null, "Front door", "door", !1), g(null, "Smoke alarm", "smoke", !1), c("sensor." + hn + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const v = {}, A = {};
  let w = null;
  function P() {
    const U = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((W) => {
      W.endsWith("_solar_power") && (l[W] = { ...l[W], state: yd(U).toFixed(2) }), W.endsWith("_solar_today") && (l[W] = { ...l[W], state: Ku(U).toFixed(1) });
    });
  }
  P();
  let se = 0;
  function ne() {
    let U = !1;
    const W = ++se % 10 === 0, X = (Q, T, j) => {
      m(Q, T, j), U = !0;
    };
    Object.entries(v).forEach(([Q, T]) => {
      const j = l[Q].attributes.current_position, ge = j < T ? Math.min(T, j + 10) : Math.max(T, j - 10);
      ge === T && delete v[Q], X(Q, ge === T ? ge === 0 ? "closed" : "open" : T > j ? "opening" : "closing", { current_position: ge });
    }), Object.entries(A).forEach(([Q, T]) => {
      const j = l[Q].attributes.current_tilt_position, ge = j < T ? Math.min(T, j + 25) : Math.max(T, j - 25);
      ge === T && delete A[Q], X(Q, null, { current_tilt_position: ge });
    }), Object.keys(l).filter((Q) => Q.startsWith("climate.")).forEach((Q) => {
      const T = l[Q], j = T.attributes, ge = j.current_temperature, Te = (T.state === "heat" || T.state === "auto") && ge < j.temperature - 0.05, b = (T.state === "cool" || T.state === "auto") && ge > j.temperature + 0.05, ve = T.state === "off" ? "off" : Te ? "heating" : b ? "cooling" : "idle", Ce = W ? Math.round((ge + (Te ? 0.1 : b ? -0.1 : 0)) * 10) / 10 : ge;
      (Ce !== ge || ve !== j.hvac_action) && X(Q, null, { current_temperature: Ce, hvac_action: ve });
    }), Object.keys(l).filter((Q) => Q.startsWith("humidifier.")).forEach((Q) => {
      const T = l[Q], j = T.attributes, ge = j.current_humidity, Te = T.state === "on" && ge < j.humidity, b = Te && W ? ge + 1 : ge, ve = T.state !== "on" ? "off" : Te ? "humidifying" : "idle";
      if (b !== ge || ve !== j.action) {
        X(Q, null, { current_humidity: b, action: ve });
        const Ce = "sensor." + hn + o[Q] + "_humidity";
        l[Ce] && X(Ce, String(b));
      }
    });
    const G = l["vacuum." + hn + "robot"], Z = G.attributes;
    G.state === "cleaning" && W && X(G.entity_id, null, { battery_level: Math.max(5, Z.battery_level - 1) }), G.state === "returning" && X(G.entity_id, "docked", {}), G.state === "docked" && Z.battery_level < 100 && X(G.entity_id, null, { battery_level: Math.min(100, Z.battery_level + 2) }), w && Date.now() - w.at > 5e3 && (X("alarm_control_panel." + hn + "house", "armed_" + w.mode, {}), w = null), U && a();
  }
  const O = setInterval(ne, 1e3), q = setInterval(() => {
    P(), a();
  }, 60 * 1e3);
  function K(U, W, X) {
    const G = X == null ? void 0 : X.entity_id;
    if (!l[G]) return !1;
    const Z = l[G], Q = Z.attributes, T = (j, ge) => m(G, j, ge);
    if (U === "climate" && (W === "set_temperature" && T(null, { temperature: Math.max(Q.min_temp, Math.min(Q.max_temp, X.temperature)) }), W === "set_hvac_mode" && T(X.hvac_mode, X.hvac_mode === "off" ? { hvac_action: "off" } : {}), W === "toggle" && T(Z.state === "off" ? "heat" : "off", Z.state === "off" ? {} : { hvac_action: "off" })), U === "cover") {
      const j = W === "open_cover" ? 100 : W === "close_cover" ? 0 : W === "set_cover_position" ? X.position : W === "toggle" ? Q.current_position > 0 ? 0 : 100 : null;
      W === "stop_cover" && (delete v[G], delete A[G], T(Q.current_position === 0 ? "closed" : "open")), j != null && j !== Q.current_position && (v[G] = j, T(j > Q.current_position ? "opening" : "closing"));
      const ge = W === "open_cover_tilt" ? 100 : W === "close_cover_tilt" ? 0 : W === "set_cover_tilt_position" ? X.tilt_position : null;
      W === "stop_cover_tilt" && delete A[G], ge != null && Q.current_tilt_position != null && ge !== Q.current_tilt_position && (A[G] = ge);
    }
    if (U === "humidifier" && (W === "set_humidity" && T(null, { humidity: Math.max(Q.min_humidity, Math.min(Q.max_humidity, X.humidity)) }), W === "set_mode" && T(null, { mode: X.mode }), W === "turn_on" || W === "turn_off" || W === "toggle")) {
      const j = W === "turn_on" || W === "toggle" && Z.state !== "on";
      T(j ? "on" : "off", { action: j ? "idle" : "off" });
    }
    if (U === "vacuum" && (W === "start" && T("cleaning", { rooms: X.rooms || Q.rooms }), W === "pause" && T("paused"), W === "return_to_base" && T("returning", { rooms: [] }), W === "locate" && T(null, { located: Date.now() }), W === "set_rooms" && T(null, { rooms: X.rooms })), U === "valve") {
      const j = W === "open_valve" || W === "toggle" && Z.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(W) && T(j ? "open" : "closed");
    }
    if (U === "alarm_control_panel") {
      W === "alarm_disarm" && (w = null, T("disarmed", { changed_by: "Matt" }));
      const j = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[W];
      j && (w = { mode: j, at: Date.now() }, T("arming", { changed_by: "Matt" }));
    }
    return a(), !0;
  }
  function te(U) {
    const W = (U == null ? void 0 : U.states) || {}, X = (U == null ? void 0 : U.entities) || {}, G = (U == null ? void 0 : U.devices) || {}, Z = (C) => {
      var ue;
      const N = X[C];
      return N && (N.area_id || N.device_id && ((ue = G[N.device_id]) == null ? void 0 : ue.area_id)) || null;
    }, Q = (C) => {
      const N = X[C];
      return W[C] && W[C].state !== "unavailable" && !(N != null && N.hidden) && !(N != null && N.entity_category);
    }, T = {};
    Object.keys(W).forEach((C) => {
      const N = Z(C);
      N && Q(C) && (T[N] || (T[N] = [])).push(C);
    });
    const j = { ...W, ...l }, ge = (C) => {
      var N, ue;
      return (ue = (N = j[C]) == null ? void 0 : N.attributes) == null ? void 0 : ue.device_class;
    }, Te = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], b = Object.keys(W).filter((C) => C.startsWith("vacuum.") && Q(C)), ve = Object.values((U == null ? void 0 : U.areas) || {}).filter((C) => !Yu.has(C.area_id)).map((C) => {
      const N = C.area_id, ue = T[N] || [], V = (Xe) => ue.filter((Ct) => Ct.startsWith(Xe + ".")), ae = (Xe) => V("sensor").filter((Ct) => ge(Ct) === Xe), de = (Xe) => Object.keys(l).filter((Ct) => o[Ct] === N && Xe(Ct)), fe = (Xe, Ct) => Xe.length ? Xe : de(Ct), We = fe(ae("temperature"), (Xe) => Xe.endsWith(N + "_temperature")), et = fe(ae("humidity"), (Xe) => Xe.endsWith(N + "_humidity")), xt = ae("power").filter((Xe) => /^(W|kW)$/.test(j[Xe].attributes.unit_of_measurement || "")), mn = V("binary_sensor").filter((Xe) => ge(Xe) === "moisture"), Ln = fe(V("plant"), (Xe) => Xe.startsWith("plant.")).map((Xe) => ({ id: Xe, readings: de((Ct) => Ct.startsWith("sensor." + Xe.split(".")[1] + "_")) })), Vt = [...V("binary_sensor").filter((Xe) => Te.includes(ge(Xe))), ...de((Xe) => Xe.startsWith("binary_sensor."))];
      return {
        id: N,
        name: C.name,
        icon: C.icon,
        readings: [...We.slice(0, 1), ...et.slice(0, 1), ...mn],
        power: xt.length ? xt.reduce((Xe, Ct) => Xe + Number(j[Ct].state) * (j[Ct].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: V("switch"),
        lights: V("light"),
        actions: [...V("light"), ...fe(V("climate"), (Xe) => Xe.startsWith("climate.")), ...fe(V("cover"), (Xe) => Xe.startsWith("cover.")), ...fe(V("humidifier"), (Xe) => Xe.startsWith("humidifier.")), ...fe(V("valve"), (Xe) => Xe.startsWith("valve.")), ...V("media_player"), ...V("vacuum"), ...b.length ? [] : de((Xe) => Xe.startsWith("vacuum."))],
        solar: de((Xe) => Xe.includes("_solar_")),
        plants: Ln,
        openings: Vt,
        alerts: [...mn, ...Vt].filter((Xe) => {
          var Ct;
          return ((Ct = j[Xe]) == null ? void 0 : Ct.state) === "on";
        })
      };
    }).filter((C) => C.readings.length || C.plugs.length || C.actions.length || C.solar.length || C.plants.length), Ce = Object.keys(W).find((C) => /^sensor\..*(p1_meter_power|grid_power)$/.test(C) && W[C].state !== "unavailable") || null, Oe = (C) => Object.keys(W).filter((N) => N.startsWith(C + ".") && Q(N)), k = Oe("alarm_control_panel"), E = b.length ? b : ["vacuum." + hn + "robot"];
    return {
      states: j,
      rooms: ve,
      grid: Ce,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (C) => l[C] ? o[C] : Z(C),
      vacuums: E,
      homeVacuums: E.filter((C) => !ve.some((N) => N.actions.includes(C))),
      security: {
        alarms: k.length ? k : ["alarm_control_panel." + hn + "house"],
        locks: Oe("lock"),
        openings: [...Object.keys(l).filter((C) => C.startsWith("binary_sensor.")), "sensor." + hn + "doorbell"]
      }
    };
  }
  return { model: te, call: K, stop() {
    clearInterval(O), clearInterval(q);
  } };
}
const Eo = (a) => a < 0 ? 0 : a > 1 ? 1 : a, fd = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, Xu = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Jd = {}, Sa = (a, l, o) => {
  const c = a + l + o;
  return Jd[c] || (Jd[c] = Xu(fd(a).map((m, g) => m + (fd(l)[g] - m) * o)));
}, Qd = {}, ul = (a) => Qd[a] || (Qd[a] = fd(a));
function Ju(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [Sa(l.clear[0], l.cloudy[0], 0.12), Sa(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Sa(l.rain[0], "#000000", 0.22), Sa(l.rain[1], "#000000", 0.22)], l;
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
], _o = (a, l) => (Qu[(l & 7) * 8 + (a & 7)] + 0.5) / 64, Gc = 1, Uc = 2, Yc = 3, Zc = 4, Cr = 5, fl = 6, md = 7, Kc = 8, ec = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), ep = (a, l, o) => {
  let c = !1;
  for (let m = 0, g = a.length - 1; m < a.length; g = m++) {
    const v = a[m], A = a[g];
    v[1] > o != A[1] > o && l < (A[0] - v[0]) * (o - v[1]) / (A[1] - v[1]) + v[0] && (c = !c);
  }
  return c;
};
function tp(a, l, o, c, { oneBit: m, ink: g, paper: v, snowInk: A }) {
  const w = new Uint8ClampedArray(o * c * 4), P = ul(g), se = ul(v);
  for (let ne = 0; ne < c; ne++) for (let O = 0; O < o; O++) {
    const q = ne * o + O, K = l[q];
    if (a[q] == null) continue;
    let te = ul(a[q]);
    if (m) {
      let U;
      K === Zc || K === Kc ? U = !0 : K === Cr ? U = A : K === md || K === fl ? U = !1 : U = Math.round((0.2126 * te[0] + 0.7152 * te[1] + 0.0722 * te[2]) / 255 * 4) / 4 <= _o(O, ne), (K === Gc || K === Uc || K === Yc || K === fl) && (O > 0 && l[q - 1] !== K || O < o - 1 && l[q + 1] !== K || ne > 0 && l[q - o] !== K || ne < c - 1 && l[q + o] !== K) && (U = !0), te = U ? P : se;
    }
    w[q * 4] = te[0], w[q * 4 + 1] = te[1], w[q * 4 + 2] = te[2], w[q * 4 + 3] = 255;
  }
  return { w: o, h: c, data: w };
}
const np = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, ap = (a) => vl(a, !1).split("/")[0], Yl = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, op = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", ip = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", rp = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", sp = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", lp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], dp = [".##", "##.", ".#.", "#.."];
function $c(a, { width: l, height: o, colors: c, wave: m = 0.38, soft: g = 6, glow: v = 0.6, columns: A = 6 }) {
  const w = { ...Jn, dawn: "#e5a77e", ...c }, P = Ju(w), se = l, ne = o, O = se / A, q = O / 2, K = Math.PI * 2, te = a.length ? a : [{ cond: "cloudy", night: !1 }], U = [...Array(A * 2)].map((Z, Q) => {
    const T = te[Math.min(Q, te.length - 1)], j = ap(T.cond), ge = Q % 2 === 1;
    return { cond: T.cond, k: j, night: ge, sky: P[j][ge ? 1 : 0], cover: np[j] };
  }), W = (Z) => ne * (0.5 - m * Math.cos(K * (Z / O - 0.25)));
  return { C: w, S: U, W: se, H: ne, cw: O, sw: q, TAU: K, yb: W, side: (Z, Q, T) => {
    const j = (Z ? W(Q) - T : T - W(Q)) / Math.max(3, g * 1.4) + 0.5;
    return j <= 0 ? 0 : j >= 1 ? 1 : j;
  }, glowAt: (Z) => {
    const Q = ((Z / O - 0.25) % 1 + 1) % 1, T = Math.max(0, Math.min(A - 1, Math.round(Z / O - 0.25))), j = Math.max(0, Math.min(A - 1, Math.round(Z / O - 0.75))), ge = 1 - (U[2 * T].cover + U[2 * j + 1].cover) / 2, Te = Math.sin(Math.PI * Math.min(1, Math.max(0, W(Z) / ne)));
    return { c: Q < 0.5 ? w.dusk : w.dawn, a: v * (0.2 + 0.8 * ge) * Te * Te };
  }, soft: g, tw: O * 0.3, sy: ne / 90 };
}
function Xc(a, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: g, side: v, C: A, TAU: w, sy: P } = a, se = l, ne = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((O, q) => {
    const K = Yl(c * 977 + q * 131 + 7), te = (q + 0.5) * g, U = O.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[O.k] : 0;
    for (let W = 0; W < U; W++) {
      const X = te + (K() - 0.5) * g * 1.6, G = (6 + K() * 76) * P, Z = K() < 0.35, Q = 1.8 + K() * 1.6, T = v(!0, X, G) * (Z ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(w * se / 2600 + W * 1.7 + q) : 1);
      T >= 0.03 && ne.stars.push({ x: X, y: G, big: Z, size: Q, o: T });
    }
    if (!O.night && (O.k === "clear" || O.k === "partly")) {
      const W = te + (K() - 0.5) * g * 0.3, X = Math.min(15, g * 0.29);
      ne.suns.push({ x: W, y: 32 * P, rad: X, halo: X * 2.8 * (o ? 1 + 0.07 * Math.sin(w * se / 3600 + q) : 1) });
    }
    if (O.night && (O.k === "clear" || O.k === "partly")) {
      const W = Math.min(0.78, g * 0.55 / 34), X = te - 23 * W + (K() - 0.5) * g * 0.2;
      ne.moons.push({ x: X + 23 * W, y: (4 + (o ? 0.8 * Math.sin(w * se / 5200 + q) : 0)) * P + 23 * W, d: 46 * W });
    }
  }), m.forEach((O, q) => {
    const K = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[O.k];
    if (!K) return;
    const te = Yl(c * 577 + q * 71 + 3), U = (q + 0.5) * g, W = O.k === "rain" || O.k === "storm" || O.night ? A.cloudNight : A.cloudDay, X = O.night ? 0.82 : O.k === "storm" ? 0.75 : 1;
    for (let G = 0; G < K; G++) {
      const Z = g / 46 * (O.k === "partly" ? 0.85 : 0.75 + te() * 0.55), Q = U + (O.k === "partly" ? g * 0.12 : (te() - 0.5) * g * 1.05), T = (O.k === "partly" ? 40 : 6 + te() * 26) * P, j = o ? 2.5 * Math.sin(w * se / 9e3 + q * 1.3 + G * 2.1) : 0, ge = o ? 0.9 * Math.sin(w * se / 6100 + q + G) : 0;
      ne.clouds.push({ x: Q - 23 * Z + j, y: T - 15.33 * Z + ge, w: 46 * Z, h: 30.66 * Z, fill: W, o: X * (K > 1 && G === 0 ? 0.85 : 1) });
    }
  }), m.forEach((O, q) => {
    const K = Yl(c * 313 + q * 29 + 11), te = (q + 0.5) * g, U = O.cond === "pouring" ? 16 : O.cond === "rainy" || O.cond === "hail" ? 9 : O.cond === "lightning-rainy" ? 12 : O.cond === "snowy-rainy" ? 5 : 0;
    for (let X = 0; X < U; X++) {
      let G = te + (K() - 0.5) * g * 1.05, Z = 44 + K() * 36, Q = 1;
      if (o) {
        const j = ((Z - 44 + se * 0.04) % 36 + 36) % 36;
        G -= 0.21 * (j - (Z - 44)), Z = 44 + j, Q = Math.min(1, j / 6, (36 - j) / 6);
      }
      Z *= P;
      const T = v(O.night, G, Z) * Q;
      T >= 0.05 && ne.drops.push({ x: G, y: Z, o: T });
    }
    const W = O.cond === "snowy" ? 11 : O.cond === "snowy-rainy" ? 6 : 0;
    for (let X = 0; X < W; X++) {
      let G = te + (K() - 0.5) * g * 1.05, Z = 40 + K() * 44, Q = 1;
      if (o) {
        const j = ((Z - 40 + se * 9e-3) % 44 + 44) % 44;
        Z = 40 + j, G += 1.6 * Math.sin(w * se / 2800 + X * 1.9 + q), Q = Math.min(1, j / 6, (44 - j) / 6);
      }
      Z *= P;
      const T = v(O.night, G, Z) * Q;
      T >= 0.05 && ne.flakes.push({ x: G, y: Z, o: T });
    }
    if (O.k === "fog") {
      const X = O.night ? "#c8ccd6" : "#ffffff", G = O.night ? 0.28 : 0.62, Z = o ? 4 * Math.sin(w * se / 8e3 + q) : 0;
      for (let Q = 0; Q < 4; Q++) ne.fogs.push({ x: te - g * 0.75 + Q % 2 * g * 0.18 + (Q % 2 ? Z : -Z), y: (30 + Q * 13) * P, w: g * 1.3, c: X, a: G });
    }
    if (O.k === "storm") {
      const X = (se / 3400 + q * 0.37) % 1;
      ne.bolts.push({ x: te + (K() - 0.5) * g * 0.3 - 5, y: 36 * P, o: o && !(X < 0.05 || X > 0.09 && X < 0.12) ? 0.8 : 1 });
    }
  }), ne;
}
function cp(a, l, o, c, m, g, v, A) {
  const { S: w, C: P, cw: se, yb: ne, glowAt: O, soft: q, tw: K, sy: te } = a, U = new Array(o * c), W = new Uint8Array(o * c), X = new Uint8Array(o * c), G = (k, E, C, N, ue) => {
    C == null || k < 0 || E < 0 || k >= o || E >= c || (N >= 1 || N > _o(k + 5, E + 3)) && (U[E * o + k] = C, W[E * o + k] = ue);
  }, Z = (k, E, C, N) => {
    for (let ue = Math.max(0, Math.floor(E - C) - 1); ue <= Math.min(c - 1, E + C + 1); ue++) for (let V = Math.max(0, Math.floor(k - C) - 1); V <= Math.min(o - 1, k + C + 1); V++) N(V, ue, V + 0.5 - k, ue + 0.5 - E);
  }, Q = (k, E, C) => {
    for (let ue = 0; ue < k.length - 1; ue++) {
      const V = (ue + E) * se;
      if (C < V - K / 2) return [k[ue], k[ue], 0];
      if (C <= V + K / 2) return [k[ue], k[ue + 1], (C - V + K / 2) / K];
    }
    const N = k[k.length - 1];
    return [N, N, 0];
  }, T = w.filter((k) => !k.night).map((k) => k.sky), j = w.filter((k) => k.night).map((k) => k.sky), ge = q / g, Te = 16 * te / g;
  for (let k = 0; k < o; k++) {
    const E = (k + 0.5) * m, C = ne(E) / g, N = Q(T, 0.75, E), ue = Q(j, 1.25, E), V = O(E);
    for (let ae = 0; ae < c; ae++) {
      const de = _o(k, ae), fe = ae + 0.5 - C, We = (ge > 0.01 ? Eo(0.5 + fe / ge) : fe > 0 ? 1 : 0) > de;
      let et = We ? N[2] > de ? N[1] : N[0] : ue[2] > de ? ue[1] : ue[0];
      (We ? Eo(((ae + 0.5) / c - 0.45) / 0.55) * 0.7 : Eo(1 - (ae + 0.5) / (c * 0.55)) * 0.7) > _o(k + 2, ae + 5) && (et = We ? Sa(et, "#ffffff", 0.18) : Sa(et, "#000000", 0.25)), We && fe >= 0 && fe < Te && V.a * 1.3 * (1 - fe / Te) > _o(k + 6, ae + 1) && (et = V.c), U[ae * o + k] = et, X[ae * o + k] = We ? 0 : 1;
    }
  }
  const b = Sa(P.sun, "#ffffff", 0.55), ve = Sa(P.moon, "#ffffff", 0.6);
  l.stars.forEach((k) => {
    const E = Math.floor(k.x / m), C = Math.floor(k.y / g);
    if (E < 0 || C < 0 || E >= o || C >= c || !X[C * o + E] || k.o < 0.15) return;
    const N = k.o > 0.45 ? P.star : Sa(P.star, U[C * o + E], 0.5), ue = k.big && k.o > 0.6 ? Math.floor(k.size / m) : 0;
    G(E, C, N, 1, md);
    for (let V = 1; V <= ue; V++) [[E - V, C], [E + V, C], [E, C - V], [E, C + V]].forEach((ae) => {
      ae[0] >= 0 && ae[1] >= 0 && ae[0] < o && ae[1] < c && X[ae[1] * o + ae[0]] && G(ae[0], ae[1], N, 1, md);
    });
  }), l.suns.forEach((k) => {
    const E = Math.max(1.5, k.rad / m), C = k.x / m, N = k.y / g, ue = k.halo / m * 0.85;
    if (Z(C, N, ue, (V, ae, de, fe) => {
      const We = Math.sqrt(de * de + fe * fe);
      We > E && We < ue && !X[ae * o + V] && G(V, ae, b, 0.3 * (1 - (We - E) / (ue - E)), 0);
    }), A) {
      const V = Math.floor(v / 500) % 2, ae = Math.max(1, E * 0.3);
      for (let de = 0; de < 8; de++) if (de % 2 === V) for (let fe = E + 1.2; fe < E + 1.2 + ae; fe += 0.7) G(Math.floor(C + Math.cos(de * Math.PI / 4) * fe), Math.floor(N + Math.sin(de * Math.PI / 4) * fe), P.sun, 1, Kc);
    }
    Z(C, N, E, (V, ae, de, fe) => {
      de * de + fe * fe <= E * E && G(V, ae, Eo(((fe / E + 1) / 2 - 0.6) / 0.4) > _o(V, ae) ? P.sunEdge : P.sun, 1, Gc);
    });
  }), l.moons.forEach((k) => {
    const E = Math.max(1.5, k.d * 0.37 / m), C = k.x / m, N = k.y / g, ue = C + 0.547 * E, V = N - 0.503 * E, ae = 0.82 * E;
    Z(C, N, E, (de, fe, We, et) => {
      if (We * We + et * et > E * E) return;
      const xt = de + 0.5 - ue, mn = fe + 0.5 - V;
      xt * xt + mn * mn > ae * ae && G(de, fe, Eo((et + E) / (2 * E) * 1.1 - 0.1) > _o(de, fe) ? P.moon : ve, 1, Uc);
    });
  }), l.clouds.forEach((k) => {
    const E = Math.max(3, k.w / m), C = E * 0.6665, N = k.x / m, ue = k.y / g, V = Sa(k.fill, "#000000", 0.16);
    for (let ae = Math.max(0, Math.floor(ue) - 1); ae <= Math.min(c - 1, ue + C + 1); ae++) for (let de = Math.max(0, Math.floor(N) - 1); de <= Math.min(o - 1, N + E + 1); de++) {
      const fe = (de + 0.5 - N) / E, We = (ae + 0.5 - ue) / E;
      ec(fe, We) && G(de, ae, !ec(fe, We + 1 / E) || Eo((We - 0.42) / 0.25) * 0.8 > _o(de, ae) ? V : k.fill, k.o, Yc);
    }
  }), l.fogs.forEach((k) => {
    const E = Math.floor(k.y / g), C = Math.max(E, Math.floor((k.y + 6 * te) / g) - 1), N = Math.floor(k.x / m), ue = Math.floor((k.x + k.w) / m);
    for (let V = E; V <= C; V++) for (let ae = N; ae <= ue; ae++) {
      const de = (ae - N) / Math.max(1, ue - N);
      G(ae, V, k.c, k.a * (de < 0.25 ? de / 0.25 : de > 0.75 ? (1 - de) / 0.25 : 1), 0);
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
    G(E, C, P.snow, k.o, Cr);
    for (let N = 1; N <= Oe; N++)
      G(E - N, C, P.snow, k.o, Cr), G(E + N, C, P.snow, k.o, Cr), G(E, C - N, P.snow, k.o, Cr), G(E, C + N, P.snow, k.o, Cr);
  }), l.bolts.forEach((k) => {
    if (m <= 3.5)
      for (let E = Math.floor(k.y / g); E <= (k.y + 24) / g; E++) for (let C = Math.floor(k.x / m); C <= (k.x + 11) / m; C++)
        ep(lp, (C + 0.5) * m - k.x, (E + 0.5) * g - k.y) && G(C, E, P.sun, 1, fl);
    else {
      const E = Math.round(k.x / m), C = Math.round(k.y / g);
      dp.forEach((N, ue) => N.split("").forEach((V, ae) => {
        V === "#" && G(E + ae, C + ue, P.sun, 1, fl);
      }));
    }
  }), { col: U, ids: W };
}
function up(a, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), m = Math.max(6, Math.round(l.height / o)), g = l.width / c, v = l.height / m, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, w = (q) => {
    const K = $c(q, l);
    return cp(K, Xc(K, { clock: A, ambient: l.ambient, seed: l.seed }), c, m, g, v, A, l.ambient);
  }, P = w(a), se = l.reveal == null ? 1 : Eo(l.reveal);
  let ne = P.col, O = P.ids;
  if (se < 1) {
    const q = l.prev ? w(l.prev) : null, K = se * (c + 12);
    ne = new Array(c * m), O = new Uint8Array(c * m);
    for (let te = 0; te < c * m; te++) {
      const U = te % c, W = te / c | 0;
      (l.reduce ? se : Eo((K - U) / 12)) > _o(U, W) ? (ne[te] = P.col[te], O[te] = P.ids[te]) : q ? (ne[te] = q.col[te], O[te] = q.ids[te]) : (ne[te] = null, O[te] = 255);
    }
  }
  return tp(ne, O, c, m, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function pp(a, l, o) {
  const c = o.width, m = o.height, g = o.reveal == null ? 1 : Eo(o.reveal), v = (O, q) => {
    const K = $c(q, o);
    hp(O, K, Xc(K, o));
  };
  if (a.clearRect(0, 0, c, m), g >= 1) {
    v(a, l);
    return;
  }
  if (o.prev && v(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = g, v(a, l), a.restore();
    return;
  }
  const A = a.canvas, w = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (w.width !== A.width || w.height !== A.height) && (w.width = A.width, w.height = A.height);
  const P = w.getContext("2d");
  P.setTransform(a.getTransform()), P.clearRect(0, 0, c, m), v(P, l);
  const se = g * (c + 64) - 64, ne = P.createLinearGradient(se, 0, se + 64, 0);
  ne.addColorStop(0, "rgba(0,0,0,1)"), ne.addColorStop(1, "rgba(0,0,0,0)"), P.globalCompositeOperation = "destination-in", P.fillStyle = ne, P.fillRect(0, 0, c, m), P.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(w, 0, 0), a.restore();
}
function hp(a, l, o) {
  const { W: c, H: m, S: g, C: v, cw: A, yb: w, glowAt: P, soft: se, tw: ne, sy: O } = l, q = (b, ve) => {
    const Ce = ul(b);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, ve)).toFixed(3) + ")";
  }, K = (b, ve) => {
    const Ce = a.createLinearGradient(0, 0, c, 0);
    Ce.addColorStop(0, b[0]);
    for (let Oe = 0; Oe < b.length - 1; Oe++) {
      const k = (Oe + ve) * A, E = (k - ne / 2) / c, C = (k + ne / 2) / c;
      E > 0 && E < 1 && Ce.addColorStop(E, b[Oe]), C > 0 && C < 1 && Ce.addColorStop(C, b[Oe + 1]);
    }
    return Ce.addColorStop(1, b[b.length - 1]), Ce;
  }, te = Math.max(24, Math.ceil(c / 4)), U = (b, ve) => {
    a.beginPath();
    for (let Ce = 0; Ce <= te; Ce++) {
      const Oe = c * Ce / te, k = b == null ? 0 : w(Oe) + b;
      Ce ? a.lineTo(Oe, k) : a.moveTo(Oe, k);
    }
    for (let Ce = te; Ce >= 0; Ce--) {
      const Oe = c * Ce / te;
      a.lineTo(Oe, w(Oe) + ve);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = K(g.filter((b) => !b.night).map((b) => b.sky), 0.75), a.fillRect(0, 0, c, m);
  const W = a.createLinearGradient(0, 0, c, 0);
  for (let b = 0; b <= 64; b++) {
    const ve = P(c * b / 64);
    W.addColorStop(b / 64, q(ve.c, Math.min(1, ve.a)));
  }
  a.fillStyle = W;
  for (let b = 0; b < 8; b++)
    a.globalAlpha = 1 - b / 8, U(b * 2 * O, (b + 1) * 2 * O);
  a.fillStyle = K(g.filter((b) => b.night).map((b) => b.sky), 1.25);
  const X = Math.max(0.5, se), G = 6;
  a.globalAlpha = 1, U(null, -X);
  for (let b = 0; b < G; b++)
    a.globalAlpha = 1 - (b + 0.5) / G, U(-X + 2 * X * b / G, -X + 2 * X * (b + 1) / G);
  a.globalAlpha = 1;
  const Z = new Path2D(rp), Q = new Path2D(ip), T = new Path2D(op), j = new Path2D(sp);
  a.fillStyle = v.star, o.stars.forEach((b) => {
    a.globalAlpha = b.o, b.big ? (a.save(), a.translate(b.x, b.y), a.scale(b.size, b.size), a.fill(Z), a.restore()) : (a.beginPath(), a.arc(b.x, b.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const ge = Sa(v.sun, "#ffffff", 0.55);
  o.suns.forEach((b) => {
    const ve = a.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.halo);
    ve.addColorStop(0, q(ge, 0.42)), ve.addColorStop(0.7, q(ge, 0)), a.fillStyle = ve, a.beginPath(), a.arc(b.x, b.y, b.halo, 0, Math.PI * 2), a.fill();
    const Ce = a.createLinearGradient(0, b.y - b.rad, 0, b.y + b.rad);
    Ce.addColorStop(0.6, v.sun), Ce.addColorStop(1, v.sunEdge), a.fillStyle = Ce, a.beginPath(), a.arc(b.x, b.y, b.rad, 0, Math.PI * 2), a.fill();
  });
  const Te = Sa(v.moon, "#ffffff", 0.6);
  o.moons.forEach((b) => {
    a.save(), a.translate(b.x - b.d / 2, b.y - b.d / 2), a.scale(b.d / 46, b.d / 46);
    const ve = a.createLinearGradient(0, 6, 0, 40);
    ve.addColorStop(0, Te), ve.addColorStop(1, v.moon), a.fillStyle = ve, a.fill(Q), a.restore();
  }), o.clouds.forEach((b) => {
    a.save(), a.globalAlpha = b.o, a.translate(b.x, b.y), a.scale(b.w / 46, b.h / 30.66), a.translate(-4, -9.67), a.fillStyle = b.fill, a.fill(T), a.restore();
  }), o.fogs.forEach((b) => {
    const ve = a.createLinearGradient(b.x, 0, b.x + b.w, 0);
    ve.addColorStop(0, q(b.c, 0)), ve.addColorStop(0.25, q(b.c, b.a)), ve.addColorStop(0.75, q(b.c, b.a)), ve.addColorStop(1, q(b.c, 0)), a.fillStyle = ve, a.fillRect(b.x, b.y, b.w, 6 * O);
  }), a.fillStyle = v.rain, o.drops.forEach((b) => {
    a.save(), a.globalAlpha = b.o, a.translate(b.x, b.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = v.snow, o.flakes.forEach((b) => {
    a.globalAlpha = b.o, a.beginPath(), a.arc(b.x, b.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = v.sun, o.bolts.forEach((b) => {
    a.save(), a.globalAlpha = b.o, a.translate(b.x, b.y), a.fill(j), a.restore();
  }), a.restore();
}
const fp = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", kr = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Qs = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Zl = (a, l) => '<path class="' + l + '" d="' + a + '"/>', mp = (a, l) => ' style="animation-delay:-' + Math.round(a * 137 % l) + 'ms"', Ma = (a, l, o, c) => {
  const m = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + mp(a, 2400) + ' d="M' + a + " " + (l - o) + "L" + (a + m) + " " + (l - m) + "L" + (a + o) + " " + l + "L" + (a + m) + " " + (l + m) + "L" + a + " " + (l + o) + "L" + (a - m) + " " + (l + m) + "L" + (a - o) + " " + l + "L" + (a - m) + " " + (l - m) + 'Z"/>';
}, tc = ([a, l, o], c) => '<path class="wbMoonPath" d="' + a + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + l + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', gp = (a, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', vp = (a) => (a ? ["29.35", "43.04", "56.74"].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), bp = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, o], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + l + '" cy="' + o + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function wp(a, l, o, c) {
  return a === "clear" ? l ? tc(o ? Qs.l : Qs.s, c) + (o ? Ma(70, 20, 5.83, 1) + Ma(78.33, 41.67, 3.75, 0.8) + Ma(60, 71.67, 3.33, 0.6) : Ma(42, 12, 3.5, 1) + Ma(47, 25, 2.25, 0.8) + Ma(36, 43, 2, 0.6)) : gp(c, o) : a === "partly" ? (l ? tc(o ? Qs.lp : Qs.sp, c) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Zl(o ? kr.lp : kr.sp, l ? "wbCloudLight" : "wbBright") + (l ? o ? Ma(73.33, 16.67, 4.17, 0.9) : Ma(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? Zl(o ? kr.lc : kr.s, l ? "wbCloudLight" : "wbBright") + (l ? o ? Ma(15, 15, 3.75, 0.8) + Ma(76.67, 13.33, 2.92, 0.6) : Ma(9, 9, 2.25, 0.8) + Ma(46, 8, 1.75, 0.6) : "") : Zl(o ? kr.lr : kr.s, "wbCloudLight") + (a === "rain" ? vp(o) : bp(o));
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
], el = (a, l) => (yp[l % 8 * 8 + a % 8] + 0.5) / 64, Fa = (a) => [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)], In = (a, l, o) => [Math.round(a[0] + (l[0] - a[0]) * o), Math.round(a[1] + (l[1] - a[1]) * o), Math.round(a[2] + (l[2] - a[2]) * o)], ls = (a) => a < 0 ? 0 : a > 1 ? 1 : a, nc = (a, l) => {
  let o = a * 374761393 + l * 668265263 ^ 1540483477;
  return o = Math.imul(o ^ o >>> 13, 1274126177), ((o ^ o >>> 16) >>> 0) / 4294967296;
}, Vi = [255, 255, 255], Yn = Fa("#26221e"), ac = Fa("#0288d1"), kp = Fa("#01579b"), Kl = Fa(Jn.cloudDay), $l = Fa(Jn.cloudNight), tl = Fa(Jn.dusk), Xl = Fa(Jn.sunEdge), Mp = Fa(Jn.sun), Cp = 10, oc = 0.3, Do = 56, Jc = 21;
function Sp(a) {
  const l = Array.from({ length: Jc }, () => new Array(Do).fill(void 0)), o = (v, A, w) => {
    l[A][v] = w;
  }, c = In(tl, Yn, 0.35), m = In(Yn, Vi, 0.22);
  for (let v = 0; v <= 6; v++) {
    const A = v < 2 ? Do - 2 : Do - 1;
    for (let w = 6 - v; w <= A; w++) o(w, v, v < 2 ? c : v === 6 ? m : Yn);
  }
  const g = [tl, Xl, $l, Fa(Jn.skyRainDay), In(tl, Yn, 0.2), In(a, Yn, 0.35)];
  [2, 3, 2, 3, 3].forEach((v, A) => {
    const w = 9 + A * 6;
    for (let P = 0; P < v; P++) {
      const se = g[(A * 2 + P * 3) % g.length];
      for (let ne = w; ne < w + 5; ne++)
        o(ne, 7 + P * 2, In(se, Yn, 0.12)), o(ne, 8 + P * 2, P === v - 1 ? In(se, Vi, 0.3) : se);
      o(w + 5, 7 + P * 2, Yn), o(w + 5, 8 + P * 2, Yn);
    }
  });
  for (let v = 7; v <= 12; v++) o(5, v, Yn);
  o(5, 13, Xl);
  for (let v = 7; v <= 14; v++) for (let A = 42; A <= 51; A++) o(A, v, A === 51 ? $l : Kl);
  for (let v = 43; v <= 50; v += 2)
    o(v, 12, Yn), o(v, 9, In(Yn, Kl, 0.4));
  for (let v = 40; v <= 53; v++) o(v, 14, v === 40 || v === 53 ? $l : Kl);
  for (let v = 15; v <= 18; v++) for (let A = 46; A <= 49; A++) o(A, v, v === 18 ? Yn : v === 16 ? Xl : tl);
  for (let v = 15; v <= 19; v++) o(44, v, Yn);
  return o(44, 20, Mp), l;
}
function Tp(a, l, o, c) {
  const m = Math.max(1, Math.round(a)), g = Math.max(1, Math.round(l)), v = new Uint8ClampedArray(m * g * 4), A = Fa(c.skyClearDay), w = Fa(c.skyFogDay), P = Sp(A), se = Math.round(g * 0.55), ne = ls(1 - Math.log(o / oc) / Math.log(Cp / oc)), O = In(A, w, ne), q = (W) => ls((W - 0.1) / 0.9), K = ls((1 - Math.exp(-2 / o) - 0.2) / 0.8), te = Math.round(m / 2 - Do / 2), U = se + 3;
  for (let W = 0; W < g; W++) {
    const X = U - 1 - W, G = W - U;
    for (let Z = 0; Z < m; Z++) {
      const Q = Z - te;
      let T, j;
      const ge = X >= 0 && X < Jc && Q >= 0 && Q < Do ? P[X][Q] : void 0;
      if (ge)
        T = ge, j = K;
      else if (X >= 0 && X <= 1 && Q >= 4 - X && Q <= 5 - X)
        T = In(Vi, ac, 0.15), j = K;
      else if (W < se) {
        const ve = ls(((W + 0.5) / se - 0.15) / 0.85) * 3, Ce = Math.min(3, Math.floor(ve + el(Z + 2, W + 5)));
        T = In(O, Vi, Ce * 0.1), j = ne * 0.95;
      } else {
        const ve = (W - se + 0.5) / (g - se), Ce = Math.min(1.5, 6e-3 / (ve * ve)), Oe = ls(ve * 1.4) * 3, k = Math.min(3, Math.floor(Oe + el(Z + 1, W + 6)));
        T = In(ac, kp, k / 3);
        const E = 1 + Math.round(ve * 7), C = Math.floor(Z / (E * 3)), N = 0.06 + 0.16 * ve, ue = Z % (E * 3) < E;
        ue && nc(C, W) < N ? T = In(T, Vi, 0.18 + 0.1 * (1 - ve)) : ue && ve > 0.5 && nc(C, W - 1) < N && (T = In(T, Yn, 0.12)), j = q(1 - Math.exp(-Ce / o)), G === 0 && Q >= 3 && Q <= 8 ? (T = In(T, Vi, Q < 6 ? 0.8 : 0.45), j = K) : G >= 0 && G <= 2 && Q >= Do && Q < Do + 40 ? ((1 - (Q - Do) / 40) * (G === 1 ? 0.9 : 0.5) > el(Z, W + 3) && (T = In(T, Vi, 0.5)), j = K) : G === 0 && Q >= 6 && Q < Do && (T = In(T, Yn, Q % 2 === 0 ? 0.35 : 0.2), j = K);
      }
      const Te = j > el(Z, W) ? w : T, b = (W * m + Z) * 4;
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
const Ep = (a, l) => l === "mi" ? a * 1.609344 : l === "m" ? a / 1e3 : l === "ft" ? a * 3048e-7 : l === "yd" ? a * 9144e-7 : a, Dp = (a) => a < 1 ? "very_poor" : a < 4 ? "poor" : a < 10 ? "moderate" : a < 20 ? "good" : a < 40 ? "very_good" : "excellent", oo = 6e4, no = 36e5, zi = 864e5, us = 1440, Rp = 6, Np = 10 * oo, nl = 3, Jl = 20, Bp = 3, Pp = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Ip = 30 * oo, Hp = 7, Fp = 3, ic = 1, Op = oo, qp = 15 * oo, Wp = 5, Zn = {
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
}, zp = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], jp = Object.keys(Ze.phases), al = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, Gp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Qc = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], ol = 100, rc = "µg/m³", Up = "weather_alerts.air_quality_pollen", sc = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Yp = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, Zp = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], Kp = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, $p = { daily: 1, hourly: 2 }, Fe = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Gn = (a, l) => a.replace(/\{(\w+)\}/g, (o, c) => l[c] ?? ""), Tr = (a) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + a + '"/></svg>', Xp = () => {
  var a;
  return !!((a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Tn = (a) => a != null && a !== "" && Number.isFinite(Number(a)), lc = /* @__PURE__ */ new Map(), dc = /* @__PURE__ */ new Map(), Ql = /* @__PURE__ */ new WeakMap(), Jp = (a) => {
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
function fn(a, l, o) {
  const c = Number(a);
  if (Number.isNaN(c)) return String(a);
  const m = (l == null ? void 0 : l.number_format) === "none", g = { maximumFractionDigits: 2, ...o, ...m ? { useGrouping: !1 } : {} }, v = m ? "en-US" : Jp(l), A = JSON.stringify([v, g]);
  let w = lc.get(A);
  if (!w) {
    try {
      w = new Intl.NumberFormat(v, g);
    } catch {
      w = new Intl.NumberFormat(void 0, g);
    }
    lc.set(A, w);
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
const Mr = (a, l) => tu(kd(l), { hour: "numeric", minute: "2-digit", hourCycle: Qp(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: eu(l) }).format(a), cc = (a, l) => tu(kd(l), { weekday: "short", timeZone: eu(l) }).format(a), eh = (a, l) => a.toLocaleDateString(kd(l), { weekday: "narrow" }), Un = (a, l) => Tn(l) ? fn(Math.round(Number(l)), a.locale) + "°" : "–", Lr = (a) => {
  const l = new Date(a);
  return l.setHours(0, 0, 0, 0), l;
}, ds = (a, l) => a.getFullYear() === l.getFullYear() && a.getMonth() === l.getMonth() && a.getDate() === l.getDate(), oa = Math.PI / 180, th = 2440588, nh = 2451545, ml = oa * 23.4397, ah = 149598e3, oh = -0.833 * oa, ih = 0.133 * oa, uc = 5 * oo, nu = (a) => a.getTime() / zi - 0.5 + th - nh, au = (a, l) => Math.atan2(Math.sin(a) * Math.cos(ml) - Math.tan(l) * Math.sin(ml), Math.cos(a)), ou = (a, l) => Math.asin(Math.sin(l) * Math.cos(ml) + Math.cos(l) * Math.sin(ml) * Math.sin(a)), rh = (a, l) => oa * (280.16 + 360.9856235 * a) - l, sh = (a, l, o) => Math.asin(Math.sin(l) * Math.sin(o) + Math.cos(l) * Math.cos(o) * Math.cos(a));
function iu(a) {
  const l = oa * (357.5291 + 0.98560028 * a), o = oa * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), c = l + o + oa * 102.9372 + Math.PI;
  return { ra: au(c, 0), dec: ou(c, 0), dist: ah };
}
function ru(a) {
  const l = oa * (218.316 + 13.176396 * a), o = oa * (134.963 + 13.064993 * a), c = oa * (93.272 + 13.22935 * a), m = l + oa * 6.289 * Math.sin(o), g = oa * 5.128 * Math.sin(c);
  return { ra: au(m, g), dec: ou(m, g), dist: 385001 - 20905 * Math.cos(o) };
}
const su = (a, l, o, c) => {
  const m = nu(l), g = a(m);
  return sh(rh(m, oa * -c) - g.ra, oa * o, g.dec);
}, Md = (a, l, o) => su(iu, a, l, o), lh = (a, l, o) => su(ru, a, l, o);
function lu(a, l, o, c) {
  const m = {};
  let g = o.getTime(), v = a(o) - l;
  for (let A = g + uc; A <= c.getTime(); A += uc) {
    const w = a(new Date(A)) - l;
    if (v < 0 != w < 0) {
      const P = new Date(g + (A - g) * v / (v - w));
      w > 0 ? m.rise ?? (m.rise = P) : m.set ?? (m.set = P);
    }
    g = A, v = w;
  }
  return m;
}
const du = (a) => {
  const l = Lr(a);
  return [l, new Date(l.getTime() + zi)];
}, dh = (a, l, o) => lu((c) => Md(c, l, o), oh, ...du(a)), ch = (a, l, o) => lu((c) => lh(c, l, o), ih, ...du(a));
function uh(a) {
  const l = nu(a), o = iu(l), c = ru(l), m = Math.acos(Math.sin(o.dec) * Math.sin(c.dec) + Math.cos(o.dec) * Math.cos(c.dec) * Math.cos(o.ra - c.ra)), g = Math.atan2(o.dist * Math.sin(m), c.dist - o.dist * Math.cos(m)), v = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - c.ra), Math.sin(o.dec) * Math.cos(c.dec) - Math.cos(o.dec) * Math.sin(c.dec) * Math.cos(o.ra - c.ra));
  return { fraction: (1 + Math.cos(g)) / 2, phase: 0.5 + 0.5 * g * (v < 0 ? -1 : 1) / Math.PI };
}
const ph = (a) => {
  const l = a * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, gl = (a) => {
  const l = a == null ? void 0 : a.config;
  return l && Tn(l.latitude) && Tn(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function pc(a, l) {
  var P, se, ne;
  const o = gl(a), c = o ? dh(l, o.lat, o.lon) : {}, m = (P = a == null ? void 0 : a.states) == null ? void 0 : P["sun.sun"], g = Lr(l).getTime(), v = (O) => {
    const q = O ? new Date(O) : null;
    return q && Number.isFinite(q.getTime()) && Lr(q).getTime() === g ? q : null;
  }, A = v((se = m == null ? void 0 : m.attributes) == null ? void 0 : se.next_rising), w = v((ne = m == null ? void 0 : m.attributes) == null ? void 0 : ne.next_setting);
  return A && (c.rise = A), w && (c.set = w), c;
}
function hh(a) {
  var c;
  const l = (c = a == null ? void 0 : a.states) == null ? void 0 : c["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const o = gl(a);
  return o ? Md(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const ps = (a) => !!a && a.state !== "unavailable" && a.state !== "unknown", bl = (a, l) => {
  var c;
  const o = (c = a.entities) == null ? void 0 : c[l];
  return !o || !o.hidden && !o.entity_category;
}, ha = (a, l, o) => {
  var c, m;
  for (const g of l) {
    const v = (c = a.states) == null ? void 0 : c[g];
    if (!ps(v)) continue;
    const A = (m = v.attributes) == null ? void 0 : m[o];
    if (A != null && A !== "") return { stateObj: v, value: A };
  }
}, fh = (a, l) => l.map((o) => {
  var c;
  return (c = a.states) == null ? void 0 : c[o];
}).find(ps), mh = (a, l, o) => l.map((c) => {
  var m;
  return (m = a.states) == null ? void 0 : m[c];
}).find((c) => {
  var m;
  return ps(c) && (((m = c.attributes) == null ? void 0 : m.supported_features) == null || Number(c.attributes.supported_features) & $p[o]);
});
function Sr(a, l, o) {
  var g, v, A, w;
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
      return m.temperature_unit || ((w = (A = a.config) == null ? void 0 : A.unit_system) == null ? void 0 : w.temperature) || "";
  }
}
function pl(a, l, o, c) {
  try {
    if (typeof a.formatEntityAttributeValueToParts == "function") {
      const [m, ...g] = a.formatEntityAttributeValueToParts(l, o, c).map((v) => v.value);
      return { number: m, unit: g.join("").trim() };
    }
  } catch {
  }
  return { number: fn(c, a.locale), unit: Sr(a, l, o) };
}
function gh(a, l, o, c) {
  try {
    if (typeof a.formatEntityAttributeValue == "function") return a.formatEntityAttributeValue(l, o, c);
  } catch {
  }
  const m = pl(a, l, o, c);
  return (m.number + " " + m.unit).trim();
}
function il(a, l) {
  var c;
  try {
    if (typeof a.formatEntityState == "function") return a.formatEntityState(l);
  } catch {
  }
  const o = (c = l.attributes) == null ? void 0 : c.unit_of_measurement;
  return Vp[l.state] || (o && Tn(l.state) ? fn(l.state, a.locale) + " " + o : l.state);
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
  return l.entity_id.startsWith("sensor.") && ((o = l.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = l.attributes) == null ? void 0 : c.state_class) ?? "") && bl(a, l.entity_id);
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
    return c.entity_id.startsWith("sensor.") && sc.includes(((m = c.attributes) == null ? void 0 : m.device_class) ?? "") && bl(a, c.entity_id) && cu(a, l, c.entity_id);
  }).sort((c, m) => c.entity_id.localeCompare(m.entity_id)).forEach((c) => {
    o.has(c.attributes.device_class) || o.set(c.attributes.device_class, c.entity_id);
  }), sc.map((c) => o.get(c)).filter(Boolean);
}
const kh = (a, l) => Object.values(a.states || {}).filter((o) => {
  var c, m;
  return o.entity_id.startsWith("sensor.") && bl(a, o.entity_id) && cu(a, l, o.entity_id) && (((m = (c = a.entities) == null ? void 0 : c[o.entity_id]) == null ? void 0 : m.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function gc(a, l, o) {
  const c = Math.max(l - a, 1e-6), m = o[o.length - 1], g = o.find((P) => c / P <= 4) ?? m * Math.ceil(c / (4 * m)), v = Math.floor(a / g) * g;
  let A = Math.ceil(l / g) * g;
  A === v && (A = v + g);
  const w = [];
  for (let P = v; P <= A + g / 1e3; P += g) w.push(P);
  return { min: v, max: A, ticks: w };
}
const cs = (a, l, o) => {
  const c = (v) => [1, 3, 5].map((A) => parseInt(v.slice(A, A + 2), 16)), m = c(a), g = c(l);
  return "rgb(" + m.map((v, A) => Math.round(v + (g[A] - v) * o)).join(", ") + ")";
}, Mh = (a, l, o, c) => {
  const m = o * Math.abs(1 - 2 * c), g = c < 0.5 ? 0 : 1;
  return "M " + a + " " + (l - o) + " A " + o + " " + o + " 0 0 0 " + a + " " + (l + o) + " A " + m + " " + o + " 0 0 " + g + " " + a + " " + (l - o) + " Z";
}, Ao = ({ icon: a, name: l, sub: o, visual: c, double: m, backdrop: g, cls: v }) => '<div class="wbCard wbSquare' + (m ? " wbDouble" : "") + (g ? " wbHasBackdrop" : "") + (v ? " " + v : "") + '">' + (g ? '<div class="wbBackdrop" aria-hidden="true">' + g + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Tr(a) + '</div><div class="wbText"><span class="wbName">' + Fe(l) + "</span>" + (o ? '<span class="wbSub">' + Fe(o) + "</span>" : "") + '</div></div><div class="wbVisual">' + c + "</div></div>", rl = (a, l) => '<div class="wbValue"><span class="wbNum">' + Fe(a) + "</span>" + (l ? '<span class="wbUnitV">' + Fe(l) + "</span>" : "") + "</div>";
function Ch(a) {
  const l = a.max - a.min || 1, o = (A) => 100 - (Math.min(a.max, Math.max(a.min, A)) - a.min) / l * 100, c = (A) => A / us * 100 + "%", m = (A) => A.map((w) => w.t + "," + o(w.v)).join(" "), g = a.kind === "line" ? a.points : [];
  let v = '<div class="wbDayChart"><div class="wbDcSun">' + a.sun.map((A) => '<span class="wbDcSunMark" style="left:' + c(A.t) + '">' + Tr(A.rise ? Zn.sunsetUp : Zn.sunsetDown) + Fe(A.label) + "</span>").join("") + "</div>";
  return v += '<div class="wbDcY">' + a.ticks.map((A) => '<span style="top:' + o(A) + '%">' + Fe(a.format(A)) + "</span>").join("") + "</div>", v += '<div class="wbDcPlot"><svg viewBox="0 0 ' + us + ' 100" preserveAspectRatio="none">' + a.night.map(([A, w]) => '<rect class="wbDcNight" x="' + A + '" y="0" width="' + (w - A) + '" height="100"></rect>').join("") + a.ticks.map((A) => '<line class="wbDcGrid" x1="0" x2="' + us + '" y1="' + o(A) + '" y2="' + o(A) + '" vector-effect="non-scaling-stroke"></line>').join("") + a.sun.map((A) => '<line class="wbDcSunLine" x1="' + A.t + '" x2="' + A.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (a.past && a.past.length > 1 ? '<polyline class="wbDcPast" points="' + m(a.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (g.length > 1 ? '<polygon class="wbDcArea" points="' + g[0].t + ",100 " + m(g) + " " + g[g.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + m(g) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (a.now ? '<line class="wbDcNow" x1="' + a.now.t + '" x2="' + a.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (a.kind === "bars" ? a.points.filter((A) => A.v > 0).map((A) => '<i class="wbDcBar" style="left:' + c(A.t + 12) + ";width:" + c(36) + ";height:" + (100 - o(A.v)) + '%"></i>').join("") : "") + (a.now && a.kind === "line" ? '<i class="wbDcDot" style="left:' + c(a.now.t) + ";top:" + o(a.now.v) + '%"></i>' : "") + (a.peak ? '<span class="wbDcPeak" style="left:' + c(a.peak.t) + ";top:" + o(a.peak.v) + '%">' + Fe(a.peak.label) + "</span>" : "") + (a.note ? '<span class="wbDcNote">' + Fe(a.note) + "</span>" : "") + "</div>", v += '<div class="wbDcX">' + a.hours.map((A) => '<span class="' + (A.minor ? "wbMinor" : "") + '" style="left:' + c(A.t) + '">' + Fe(A.label) + "</span>").join("") + "</div></div>", v;
}
function Sh(a, l) {
  const v = a.map((U) => U.value), A = Math.min(...v), w = Math.max(...v), P = w - A || 1, se = (U) => U / (a.length - 1) * 300, ne = (U) => 18 + (1 - (U - A) / P) * 84, O = a.map((U, W) => se(W) + "," + ne(U.value)).join(" "), q = v.indexOf(w), K = v.indexOf(A), te = (U) => U === 0 ? "start" : U === a.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + O + ' 300,102"></polygon><polyline class="wbLine" points="' + O + '" vector-effect="non-scaling-stroke"></polyline><text x="' + se(q) + '" y="' + (ne(w) - 6) + '" text-anchor="' + te(q) + '">' + Fe(l(w)) + '</text><text x="' + se(K) + '" y="' + (ne(A) + 14) + '" text-anchor="' + te(K) + '">' + Fe(l(A)) + '</text><text x="0" y="120" text-anchor="start">' + Fe(a[0].label) + '</text><text x="300" y="120" text-anchor="end">' + Fe(a[a.length - 1].label) + "</text></svg>";
}
function Th(a, l) {
  const g = a.map((ne) => ne.value).concat([]), v = Math.min(...g) - 2, A = Math.max(...g) + 1, w = A - v || 1, P = 300 / a.length, se = (ne) => (1 - (ne - v) / w) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + a.map((ne, O) => '<rect class="wbBar' + (ne.now ? " wbNowBar" : "") + '" x="' + (O * P + P * 0.2) + '" y="' + se(ne.value) + '" width="' + P * 0.6 + '" height="' + (104 - se(ne.value)) + '" rx="6"></rect><text x="' + (O * P + P / 2) + '" y="120" text-anchor="middle">' + Fe(ne.label) + "</text>").join("") + "</svg>";
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
  var Bo, Po;
  const A = "wb" + ++Eh + "-", w = document.createElement("div");
  w.className = "wb";
  const P = document.createElement("div");
  P.className = "wbBento", w.appendChild(P), a.replaceChildren(w);
  const se = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality"].filter((L) => !g || g.includes(L)), ne = { current: "wide", hourly: "wide", compared_to_average: "double" }, O = {};
  se.forEach((L) => {
    const _ = document.createElement("div");
    _.className = "wbItem", _.dataset.card = L, _.dataset.size = ne[L] || "tile", _.hidden = !0, P.appendChild(_), O[L] = { el: _, html: null };
  });
  let q = !1, K = null, te = 0, U = -1, W = !1, X = null;
  const G = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", aq: void 0 }, Z = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Q = /* @__PURE__ */ new Date(), T = /* @__PURE__ */ new Date(), j = null;
  const ge = {}, Te = {}, b = (L) => {
    var _;
    return ((_ = Te[L]) == null ? void 0 : _.forecast) ?? [];
  }, ve = (L, _) => {
    var I;
    return Te[_] ? (I = L.states) == null ? void 0 : I[Te[_].entityId] : void 0;
  };
  function Ce(L) {
    const _ = ge[L];
    _ && (_.unsub.then((I) => {
      typeof I == "function" && I();
    }).catch(() => {
    }), delete ge[L]), Te[L] && delete Te[L];
  }
  function Oe(L, _, I) {
    var he;
    if (typeof ((he = L.connection) == null ? void 0 : he.subscribeMessage) != "function") return;
    const Y = { entityId: I };
    try {
      Y.unsub = Promise.resolve(L.connection.subscribeMessage((me) => {
        q || ge[_] !== Y || (me != null && me.forecast ? Te[_] = { entityId: I, forecast: me.forecast } : delete Te[_], Zt());
      }, { type: "weather/subscribe_forecast", forecast_type: _, entity_id: I }));
    } catch (me) {
      Y.unsub = Promise.reject(me);
    }
    Y.unsub.catch(() => {
      ge[_] === Y && delete ge[_];
    }), ge[_] = Y;
  }
  function k(L, _) {
    var I;
    for (const Y of ["daily", "hourly"]) {
      const he = mh(L, _, Y);
      ((I = ge[Y]) == null ? void 0 : I.entityId) !== (he == null ? void 0 : he.entity_id) && (Ce(Y), he && Oe(L, Y, he.entity_id));
    }
  }
  const E = (L, _, I, Y = !1) => L.callWS({
    type: "history/history_during_period",
    start_time: I.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [_],
    minimal_response: Y,
    no_attributes: Y,
    significant_changes_only: !1
  });
  async function C(L, _) {
    var pe, we, be;
    const I = ha(L, _, "pressure");
    if (!I) return;
    const Y = I.stateObj.entity_id, he = await E(L, Y, new Date(Date.now() - 3 * no)), me = (be = (we = (pe = he == null ? void 0 : he[Y]) == null ? void 0 : pe.find((Be) => {
      var ze;
      return typeof ((ze = Be.a) == null ? void 0 : ze.pressure) == "number";
    })) == null ? void 0 : we.a) == null ? void 0 : be.pressure;
    Z.pressureHistory = typeof me == "number" ? { entityId: Y, value: me } : void 0;
  }
  async function N(L, _) {
    var we;
    const I = ha(L, _, "temperature");
    if (!I) return;
    const Y = I.stateObj.entity_id, he = Lr(/* @__PURE__ */ new Date()), me = await E(L, Y, new Date(he.getTime() - Hp * zi)), pe = /* @__PURE__ */ new Map();
    for (const be of (me == null ? void 0 : me[Y]) ?? []) {
      const Be = (we = be.a) == null ? void 0 : we.temperature, ze = new Date((be.lc ?? be.lu) * 1e3);
      if (typeof Be != "number" || ze >= he) continue;
      const Ke = ze.toDateString();
      pe.set(Ke, Math.max(pe.get(Ke) ?? -1 / 0, Be));
    }
    Z.temperatureHistory = { entityId: Y, dailyHighs: [...pe.values()], days: [...pe.entries()].map(([be, Be]) => ({ date: new Date(be), high: Be })) };
  }
  async function ue(L) {
    const _ = ed(L);
    if (!_) return;
    const I = await L.callWS({ type: "recorder/statistic_during_period", statistic_id: _, rolling_window: { duration: { hours: 24 } } });
    Z.rain = { entityId: _, change: (I == null ? void 0 : I.change) ?? void 0 };
  }
  function V() {
    const L = l == null ? void 0 : l();
    if (!L || q || typeof L.callWS != "function") return;
    const _ = We(L);
    Z.lastFetch = Date.now(), [C(L, _), N(L, _), ue(L)].forEach((I) => I.then(() => Zt(), () => {
    }));
  }
  async function ae() {
    const L = l == null ? void 0 : l();
    if (!L) return;
    const _ = ha(L, We(L), "temperature");
    if (!_) return;
    const I = _.stateObj.entity_id, Y = Lr(/* @__PURE__ */ new Date());
    try {
      const he = await E(L, I, Y), me = (pe) => ((he == null ? void 0 : he[I]) ?? []).map((we) => {
        var be;
        return { time: we.lu * 1e3, value: (be = we.a) == null ? void 0 : be[pe] };
      }).filter((we) => typeof we.value == "number");
      Z.todayHistory = { day: Y.toDateString(), fetched: Date.now(), temperature: me("temperature"), humidity: me("humidity") }, Zt();
    } catch {
    }
  }
  async function de(L) {
    const _ = l == null ? void 0 : l();
    if (_)
      try {
        const I = await E(_, L, new Date(Date.now() - 24 * no), !0), Y = ((I == null ? void 0 : I[L]) ?? []).filter((me) => Tn(me.s)), he = Math.max(1, Math.ceil(Y.length / 48));
        Z.aqHistory = { entityId: L, points: Y.filter((me, pe) => pe % he === 0).map((me) => ({ label: Mr(new Date(me.lu * 1e3), _), value: Number(me.s) })) }, Zt();
      } catch {
      }
  }
  function fe(L) {
    Z.categories === void 0 && (Z.categories = null, Promise.resolve().then(() => L.callWS({ type: "integration/descriptions" })).then((_) => {
      Z.categories = xh(_);
    }, () => {
      Z.categories = {};
    }).then(() => Zt()));
  }
  function We(L) {
    var I;
    const _ = Object.keys(L.states || {}).filter((Y) => Y.startsWith("weather.") && bl(L, Y)).sort();
    return o && ((I = L.states) != null && I[o]) ? [o, ..._.filter((Y) => Y !== o)] : _;
  }
  const et = (L) => Z.categories ? { air: yh(L, Z.categories), pollen: kh(L, Z.categories) } : { air: [], pollen: [] };
  function xt(L, _, I, Y) {
    if (c === "smooth") {
      const he = xp(L, _ === 90, I, A + "g-" + Y);
      return '<span class="wbWx wbS' + _ + " wb" + he.k[0].toUpperCase() + he.k.slice(1) + (he.night ? " wbNight" : "") + '" aria-hidden="true">' + he.svg + "</span>";
    }
    return '<span class="wbWx wbS' + _ + '" aria-hidden="true"><canvas data-wb-wx="' + Fe(vl(L, I)) + '" data-size="' + _ + '"></canvas></span>';
  }
  const mn = () => b("daily").filter((L) => L.templow != null).slice(0, Rp);
  function Ln(L, _) {
    const I = new Date(_.datetime), Y = /* @__PURE__ */ new Date();
    return ds(I, Y) ? Ze.today : ds(I, new Date(Y.getTime() + zi)) ? Ze.tomorrow : cc(I, L);
  }
  const Vt = (L, _, I) => I === 0 ? Ln(L, _) : cc(new Date(_.datetime), L);
  function Xe(L, _) {
    var ze, Ke, qe, _e;
    const I = fh(L, _);
    if (!I) return "";
    const Y = mn(), he = G.openDay !== void 0 ? Y[G.openDay] : void 0, me = ha(L, _, "temperature"), pe = Y[0], we = pe && ds(new Date(pe.datetime), /* @__PURE__ */ new Date()), be = ((Ke = (ze = L.config) == null ? void 0 : ze.unit_system) == null ? void 0 : Ke.temperature) || ((qe = I.attributes) == null ? void 0 : qe.temperature_unit) || "";
    let Be = '<div class="wbCard wbWeather' + (he ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (he ? " inert" : "") + '><div class="wbNow">' + (v ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Fe(Ze.openPage) + '">' : '<div class="wbCurrent">') + xt(I.state, 90, hh(L), "now") + '<div class="wbTempBlock">' + (me && Tn(me.value) ? '<div class="wbTemp"><span class="wbDeg">' + Fe(fn(Math.round(Number(me.value)), L.locale)) + '</span><span class="wbUnit">' + Fe(be) + "</span></div>" : "") + '<div class="wbPlace">' + Fe(((_e = L.config) == null ? void 0 : _e.location_name) ?? "") + "</div></div>" + (v ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Fe(il(L, I)) + "</div>" + (we && pe.templow != null ? '<div class="wbRange">' + Fe(Gn(Ze.range, { high: Un(L, pe.temperature), low: Un(L, pe.templow) })) + "</div>" : "") + "</div></div>";
    return Y.length && (Be += '<div class="wbColumns" role="list">' + Y.map((Ye, Pe) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Pe + '" data-wb-focus="col-' + Pe + '"><span class="wbDay">' + Fe(Vt(L, Ye, Pe)) + "</span>" + xt(Ye.condition ?? "cloudy", 60, !1, "col" + Pe) + '<span class="wbTemps"><span class="wbHi">' + Fe(Un(L, Ye.temperature)) + '</span><span class="wbLo">' + Fe(Un(L, Ye.templow)) + "</span></span></button>").join("") + "</div>", Be += '<div class="wbHalves" role="list">' + Y.map((Ye, Pe) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Pe + '" data-wb-focus="half-' + Pe + '">' + xt(Ye.condition ?? "cloudy", 40, !1, "half" + Pe) + '<span class="wbText"><span class="wbName">' + Fe(Ln(L, Ye)) + '</span><span class="wbSub">' + Fe(Gn(Ze.highLow, { high: Un(L, Ye.temperature), low: Un(L, Ye.templow) })) + "</span></span></button>").join("") + "</div>"), Be + "</div>" + (he ? gn(L, _, he) : "") + "</div>";
  }
  function Ct(L) {
    const _ = L.getTime(), I = Date.now() - no;
    return b("hourly").filter((Y) => {
      const he = new Date(Y.datetime).getTime();
      return he >= _ && he < _ + zi && he > I;
    });
  }
  function Je(L) {
    if (!L.length) return ["temperature"];
    const _ = ["temperature"];
    return L.some((I) => I.precipitation != null || I.precipitation_probability != null) && _.push("precipitation"), L.some((I) => I.humidity != null) && _.push("humidity"), _;
  }
  function gn(L, _, I) {
    const Y = Lr(new Date(I.datetime)), he = Ct(Y), me = Je(he), pe = me.includes(G.dayMode) ? G.dayMode : "temperature", we = (be) => be === "humidity" ? Ze.humidity : Ze.modes[be];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + xt(I.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Fe(Ln(L, I)) + '</span><span class="wbSub">' + Fe(Gn(Ze.highLow, { high: Un(L, I.temperature), low: Un(L, I.templow) })) + '</span></div><button class="wbBack" title="' + Fe(Ze.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Tr(Zn.back) + "</button></div>" + (me.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + me.map((be) => '<button aria-pressed="' + (be === pe) + '" data-wb="day-mode" data-mode="' + be + '" data-wb-focus="day-mode-' + be + '">' + Fe(we(be)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Ch(Mn(L, _, Y, he, pe)) + "</div></div>";
  }
  function Mn(L, _, I, Y, he) {
    var Io;
    const me = I.getTime(), pe = Date.now(), we = ds(I, /* @__PURE__ */ new Date()), be = (ht) => (ht - me) / oo, Be = (ht) => Mr(new Date(ht), L), ze = (ht) => new Date(ht.datetime).getTime(), Ke = [0, 3, 6, 9, 12, 15, 18, 21].map((ht) => ({ t: ht * 60, label: Be(me + ht * no), minor: ht % 6 !== 0 })), { rise: qe, set: _e } = pc(L, I), Ye = [], Pe = [];
    qe && (Ye.push({ t: be(qe.getTime()), label: Be(qe.getTime()), rise: !0 }), Pe.push([0, be(qe.getTime())])), _e && (Ye.push({ t: be(_e.getTime()), label: Be(_e.getTime()), rise: !1 }), Pe.push([be(_e.getTime()), us]));
    const nt = gl(L);
    !qe && !_e && nt && Md(new Date(me + zi / 2), nt.lat, nt.lon) < 0 && Pe.push([0, us]);
    const gt = we ? be(pe) : void 0, Ot = { hours: Ke, sun: Ye, night: Pe };
    if (!Y.length && !we) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ze.noHourly };
    if (he === "precipitation") {
      const ht = Y.some((en) => en.precipitation_probability != null), Wn = Y.map((en) => ({ t: be(ze(en)), v: Number((ht ? en.precipitation_probability : en.precipitation) ?? 0) })), Qn = Sr(L, ve(L, "hourly"), "precipitation"), Va = Math.max(0, ...Wn.map((en) => en.v)), za = ht ? 100 : gc(0, Math.max(Va, 1), [0.5, 1, 2, 5, 10]).max, Ho = (en) => ht ? fn(en, L.locale) + "%" : fn(en, L.locale, { maximumFractionDigits: 1 }) + " " + Qn, Dt = Wn.find((en) => en.v === Va);
      return {
        ...Ot,
        kind: "bars",
        points: Wn,
        min: 0,
        max: za,
        ticks: [0, za / 2, za],
        format: Ho,
        now: gt !== void 0 ? { t: gt, v: 0 } : void 0,
        peak: Dt && Va > 0 ? { t: Dt.t + 30, v: Dt.v, label: Ho(Dt.v) } : void 0,
        note: Va > 0 ? void 0 : Ze.noRain
      };
    }
    const St = he === "humidity" ? "humidity" : "temperature", Qt = Y.filter((ht) => ht[St] != null && (!we || ze(ht) >= pe)).map((ht) => ({ t: be(ze(ht)), v: Number(ht[St]) }));
    let _n, En = [];
    if (gt !== void 0) {
      const ht = ha(L, _, St);
      ht && Tn(ht.value) && (_n = { t: gt, v: Number(ht.value) }, Qt.unshift(_n)), En = (((Io = Z.todayHistory) == null ? void 0 : Io.day) === I.toDateString() ? Z.todayHistory[St] : []).filter((Qn) => Qn.time <= pe).map((Qn) => ({ t: Math.max(0, be(Qn.time)), v: Qn.value })), _n && En.length && En.push(_n);
    }
    const rn = [...En, ...Qt];
    if (!rn.length) return { ...Ot, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ze.noHourly };
    const xi = rn.map((ht) => ht.v), On = gc(Math.min(...xi), Math.max(...xi), St === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    St === "humidity" && (On.min = Math.max(0, On.min), On.max = Math.min(100, On.max), On.ticks = On.ticks.filter((ht) => ht >= 0 && ht <= 100));
    const Wa = St === "humidity" ? (ht) => fn(ht, L.locale) + "%" : (ht) => Un(L, ht), qn = St === "temperature" ? rn.reduce((ht, Wn) => Wn.v > ht.v ? Wn : ht) : void 0;
    return { ...Ot, kind: "line", points: Qt, past: En, ...On, format: Wa, now: _n, peak: qn ? { ...qn, label: Wa(qn.v) } : void 0 };
  }
  function ji(L) {
    const _ = ["temperature"];
    return L.some((I) => I.precipitation_probability != null || I.precipitation != null) && _.push("precipitation"), L.some((I) => I.wind_speed != null) && _.push("wind"), _;
  }
  function dt() {
    const L = /* @__PURE__ */ new Date();
    return L.setHours(6, 0, 0, 0), L.getTime() > Date.now() && L.setDate(L.getDate() - 1), L;
  }
  function Ue(L, _) {
    var he, me;
    const I = b("daily"), Y = [];
    for (let pe = 0; pe < nl; pe++) for (const we of [!1, !0]) {
      const be = L.getTime() + (pe * 24 + (we ? 12 : 0)) * no, Be = be + 12 * no, ze = {};
      _.forEach((qe) => {
        const _e = new Date(qe.datetime).getTime();
        qe.condition && _e >= be && _e < Be && (ze[qe.condition] = (ze[qe.condition] ?? 0) + (Pp.has(qe.condition) ? 2 : 1));
      });
      let Ke = (he = Object.entries(ze).sort((qe, _e) => _e[1] - qe[1])[0]) == null ? void 0 : he[0];
      if (!Ke) {
        const qe = new Date(be).toDateString();
        Ke = ((me = I.find((_e) => new Date(_e.datetime).toDateString() === qe)) == null ? void 0 : me.condition) ?? "cloudy";
      }
      Y.push({ cond: we && Ke === "sunny" ? "clear-night" : Ke, night: we });
    }
    return Y;
  }
  function mt(L, _, I) {
    const Y = ve(L, "hourly"), he = _.precipitation_probability != null ? fn(_.precipitation_probability, L.locale) + "%" : "", me = _.precipitation ? fn(_.precipitation, L.locale) + " " + Sr(L, Y, "precipitation") : "";
    switch (I) {
      case "precipitation":
        return he ? [he, me] : [me || "–", ""];
      case "wind":
        return _.wind_speed != null ? [fn(Math.round(_.wind_speed), L.locale), Sr(L, Y, "wind_speed")] : ["–", ""];
      default:
        return [Un(L, _.temperature), (_.precipitation_probability ?? 0) >= 20 ? he : ""];
    }
  }
  function ro(L) {
    j = null;
    const _ = b("hourly"), I = Math.floor(Date.now() / oo) * oo, Y = _.filter((_e) => new Date(_e.datetime).getTime() > I - no);
    if (!Y.length) return "";
    const he = ji(Y), me = he.includes(G.hourlyMode) ? G.hourlyMode : "temperature", pe = dt(), we = pe.getTime() + nl * 24 * no, be = (I - pe.getTime()) / no * Jl, Be = nl * 24 * Jl, ze = (_e) => (_e - I) / no * Jl, Ke = [{ x: 0, label: Ze.now, entry: Y[0] }, ...Y.filter((_e) => {
      const Ye = new Date(_e.datetime);
      return ze(Ye.getTime()) >= 48 && Ye.getTime() < we && Ye.getHours() % Bp === 0;
    }).map((_e) => {
      const Ye = new Date(_e.datetime);
      return { x: ze(Ye.getTime()), label: Mr(Ye, L), entry: _e };
    })], qe = (_e, Ye, Pe) => '<span class="wbMark' + (Ye === 0 ? " wbFirst" : "") + '" style="left:' + _e.x + 'px">' + Pe + "</span>";
    return j = { segs: Ue(pe, _), seed: pe.getDate() }, '<div class="wbCard wbHc wbHourly"><div class="wbHeader"><h2 class="wbTitle">' + Fe(Ze.nextHours) + "</h2></div>" + (he.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + he.map((_e) => '<button aria-pressed="' + (_e === me) + '" data-wb="hourly-mode" data-mode="' + _e + '" data-wb-focus="hourly-mode-' + _e + '">' + Fe(Ze.modes[_e]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll"><div class="wbStrip" style="width:' + (Be - be) + 'px"><div class="wbRow wbTimes">' + Ke.map((_e, Ye) => qe(_e, Ye, Fe(_e.label))).join("") + '</div><div class="wbSky"><div class="wbSkyArt" style="left:' + -be + "px;width:" + Be + 'px"><canvas data-wb-strip' + (c === "smooth" ? "" : ' class="wbPixels"') + '></canvas></div></div><div class="wbRow wbValues">' + Ke.map((_e, Ye) => {
      if (!_e.entry) return "";
      const [Pe, nt] = mt(L, _e.entry, me);
      return qe(_e, Ye, '<span class="wbPrimaryV">' + Fe(Pe) + '</span><span class="wbSecondary">' + Fe(nt) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Gi(L) {
    const _ = Q, { rise: I, set: Y } = pc(L, _), he = I && Y ? Math.round((Y.getTime() - I.getTime()) / oo) : 0, me = Math.floor(he / 60), pe = he % 60, we = I && Y ? (_.getTime() - I.getTime()) / (Y.getTime() - I.getTime()) : -1, be = we >= 0 && we <= 1, Be = Math.PI * (1 - Math.min(1, Math.max(0, we))), ze = 100 + 74 * Math.cos(Be), Ke = 100 - 74 * Math.sin(Be), qe = be ? Math.sin(Math.PI * we) : 0, _e = be ? cs("#2e0a0d", "#43180a", qe) : "#0e0507", Ye = be ? cs("#7a1d12", "#8f400f", qe) : "#1c0709", Pe = cs("#f60c08", "#ff8f00", qe), nt = cs("#fd9b07", "#ffd84a", qe), gt = be ? cs("#fd9b07", "#ffd84a", qe) : "#6b3a2a", Ot = (Qt) => Qt ? Mr(Qt, L) : "–", St = I && Y ? new Date((I.getTime() + Y.getTime()) / 2) : null;
    return Ao({
      icon: Zn.sunny,
      name: Ze.sun,
      sub: he ? Gn(Ze.daylightShort, { hours: me, minutes: pe }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + _e + ", " + Ye + ");--wb-sun-line:" + gt + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + A + 'sun-glow"><stop offset="0" stop-color="' + Pe + '"></stop><stop offset="0.45" stop-color="' + Pe + '"></stop><stop offset="1" stop-color="' + nt + '"></stop></radialGradient><clipPath id="' + A + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (be ? '<circle cx="' + ze + '" cy="' + Ke + '" r="14" fill="url(#' + A + 'sun-glow)" clip-path="url(#' + A + 'above-horizon)"></circle>' : "") + (St ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Fe(Ot(St)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Fe(Ot(I)) + '</text><text class="wbSunTime" x="174" y="117">' + Fe(Ot(Y)) + "</text></svg></div>"
    });
  }
  function wi(L, _, I) {
    const Y = (pe) => A + "moon-" + pe, he = L > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + Y("terminator") + ')" d="' + Mh(61, 61, 57.9, L) + '"' + (_ ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", me = (pe, we, be, Be, ze, Ke) => '<filter id="' + Y(pe) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + we + '" numOctaves="' + be + '" seed="' + Be + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((qe) => "<feFunc" + qe + ' type="linear" slope="' + ze + '" intercept="' + Ke + '"></feFunc' + qe + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + Y("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + Y("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + Y("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + Y("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + Y("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + me("mottle", "0.045", 4, 3, 1.8, -0.4) + me("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + Y("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + Y("fill") + ')"></circle><g' + (I ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + Y("soften") + ')">' + Lh.map(([pe, we, be, Be, ze, Ke]) => '<ellipse cx="' + pe + '" cy="' + we + '" rx="' + be + '" ry="' + Be + '" fill-opacity="' + Ke + '" transform="rotate(' + ze + " " + pe + " " + we + ')"></ellipse>').join("") + "</g>" + Ah.map(([pe, we, be]) => '<circle class="wbCrater" cx="' + pe + '" cy="' + we + '" r="' + be + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + Y("glow") + ')">' + _h.map(([pe, we]) => '<line x1="54.4" y1="95" x2="' + pe + '" y2="' + we + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + Y("glow") + ')">' + vc.map(([pe, we, be]) => '<circle cx="' + pe + '" cy="' + we + '" r="' + be * 2 + '"></circle>').join("") + "</g>" + vc.map(([pe, we, be]) => '<circle class="wbBrightCenter" cx="' + pe + '" cy="' + we + '" r="' + be + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + Y("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + Y("grain") + ')"></rect>' + he + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function vn(L) {
    const _ = T, I = gl(L), Y = (I == null ? void 0 : I.lat) ?? 0, he = uh(_), me = mc(L), pe = me ? L.states[me] : void 0, we = ps(pe) && jp.includes(pe.state) ? pe.state : ph(he.phase), { rise: be, set: Be } = I ? ch(_, I.lat, I.lon) : {}, ze = he.phase > 0.5 != Y < 0, Ke = fn(Math.round(he.fraction * 100), L.locale) + "%", qe = be ?? Be, _e = qe ? Mr(qe, L) : void 0;
    return Ao({
      icon: Zn.night,
      name: Ze.moon,
      sub: Ze.phases[we],
      visual: '<div class="wbMoonBox">' + wi(he.fraction, ze, Y < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (_e ? Fe(Gn(be ? Ze.moonriseAt : Ze.moonsetAt, { time: _e })) : "") + "</span><span>" + Fe(Gn(Ze.lit, { illumination: Ke })) + "</span></div>"
    });
  }
  function tt(L, _) {
    var Ye;
    const I = ha(L, _, "wind_speed");
    if (!I || !Tn(I.value)) return "";
    const Y = ha(L, _, "wind_gust_speed"), he = ha(L, _, "wind_bearing"), me = he && Tn(he.value) ? Number(he.value) : void 0, pe = wh(Number(I.value), (Ye = I.stateObj.attributes) == null ? void 0 : Ye.wind_speed_unit), we = pl(L, I.stateObj, "wind_speed", I.value), be = me !== void 0 ? Ze.cardinal[zp[((me + 11.25) / 22.5 | 0) % 16]] : void 0, Be = Y ? gh(L, Y.stateObj, "wind_gust_speed", Y.value) : void 0, ze = [be ? Gn(Ze.windFrom, { direction: be }) : void 0, pe !== void 0 ? pe + " " + Ze.beaufort : void 0].filter(Boolean).join(" · ") || Be, Ke = (Pe, nt) => {
      const gt = (Pe - 90) * Math.PI / 180;
      return [100 + nt * Math.cos(gt), 100 + nt * Math.sin(gt)];
    }, qe = Array.from({ length: 36 }, (Pe, nt) => nt * 10).map((Pe) => {
      const nt = Pe % 90 === 0, [gt, Ot] = Ke(Pe, 97), [St, Qt] = Ke(Pe, nt ? 83 : 89);
      return '<line class="wbTick' + (nt ? " wbMajor" : "") + '" x1="' + gt + '" y1="' + Ot + '" x2="' + St + '" y2="' + Qt + '"></line>';
    }).join(""), _e = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Pe, nt]) => {
      const [gt, Ot] = Ke(nt, 64);
      return '<text class="wbLetter' + (Pe === "n" ? " wbNorth" : "") + '" x="' + gt + '" y="' + Ot + '">' + Fe(Ze.cardinal[Pe]) + "</text>";
    }).join("");
    return Ao({ icon: Zn.windy, name: Ze.wind, sub: ze, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + qe + _e + (me !== void 0 ? '<path class="wbMarker" transform="rotate(' + me + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Fe(we.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Fe(we.unit) + "</text></svg>" });
  }
  function Hn(L, _) {
    const I = ha(L, _, "uv_index");
    if (!I || !Tn(I.value)) return "";
    const Y = Number(I.value), he = Ze.uvLevel[vh(Y)], me = /* @__PURE__ */ new Date();
    me.setHours(23, 59, 59, 999);
    const pe = b("hourly").filter((Pe) => Pe.uv_index != null && new Date(Pe.datetime) > /* @__PURE__ */ new Date() && new Date(Pe.datetime) <= me).reduce((Pe, nt) => !Pe || nt.uv_index > Pe.uv ? { uv: nt.uv_index, time: new Date(nt.datetime) } : Pe, void 0), we = 48, be = 100, Be = 130, ze = (Pe) => -we + Math.min(Pe, 11) / 11 * 2 * we, Ke = (Pe, nt) => {
      const gt = Pe * Math.PI / 180;
      return [be + nt * Math.sin(gt), Be - nt * Math.cos(gt)];
    }, qe = (Pe, nt, gt) => {
      const [Ot, St] = Ke(ze(Pe), gt), [Qt, _n] = Ke(ze(nt), gt);
      return "M " + Ot + " " + St + " A " + gt + " " + gt + " 0 0 1 " + Qt + " " + _n;
    }, Ye = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, al.low], [3, 6, al.moderate], [6, 8, al.high], [8, 11, al.very_high]].map(([Pe, nt, gt]) => '<path class="wbVuZone" d="' + qe(Pe, nt, 96) + '" style="stroke:' + gt + '"></path>').join("") + Array.from({ length: 21 }, (Pe, nt) => ({ angle: -we + nt * (2 * we / 20), major: nt % 2 === 0 })).map(({ angle: Pe, major: nt }) => {
      const [gt, Ot] = Ke(Pe, 102), [St, Qt] = Ke(Pe, nt ? 114 : 108);
      return '<line class="wbVuTick' + (nt ? " wbMajor" : "") + '" x1="' + gt + '" y1="' + Ot + '" x2="' + St + '" y2="' + Qt + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + ze(Y) + 'deg"><line x1="' + be + '" y1="' + Be + '" x2="' + be + '" y2="' + (Be - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + Fe(fn(Math.round(Y), L.locale)) + "</text></svg>";
    return Ao({
      icon: Zn.sunnyAlert,
      name: Ze.metrics.uv_index,
      sub: pe && pe.uv > Y ? Gn(Ze.uvPeak, { level: he, uv_index: fn(Math.round(pe.uv), L.locale), time: Mr(pe.time, L) }) : he,
      visual: Ye
    });
  }
  function Ui(L) {
    const _ = b("daily")[0], I = Z.temperatureHistory;
    if (!_ || new Date(_.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Tn(_.temperature) || !I || I.dailyHighs.length < Fp) return "";
    const Y = Number(_.temperature), he = I.dailyHighs.reduce((St, Qt) => St + Qt, 0) / I.dailyHighs.length, me = Math.round(Y - he) || 0, pe = me > 0 ? "above" : me < 0 ? "below" : "same", we = [...I.days, { date: /* @__PURE__ */ new Date(), high: Y, today: !0 }], be = 220, Be = 158, ze = 22, Ke = 20, qe = we.map((St) => St.high).concat(he), _e = Math.min(...qe) - 3, Ye = Math.max(...qe) + 1, Pe = (St) => ze + (1 - (St - _e) / (Ye - _e)) * (Be - ze - Ke), nt = be / we.length, gt = Math.min(18, nt * 0.6), Ot = '<svg class="wbCompareBars" viewBox="0 0 ' + be + " " + Be + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + be + '" y1="' + Pe(he) + '" y2="' + Pe(he) + '"></line>' + we.map((St, Qt) => {
      const _n = Qt * nt + nt / 2, En = Pe(St.high), rn = St.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + rn + '" x="' + (_n - gt / 2) + '" y="' + En + '" width="' + gt + '" height="' + (Be - Ke - En) + '" rx="5"></rect><text class="wbAvgValue' + rn + '" x="' + _n + '" y="' + (En - 6) + '">' + Fe(Un(L, St.high)) + '</text><text class="wbAvgDay' + rn + '" x="' + _n + '" y="' + (Be - 4) + '">' + Fe(eh(St.date, L)) + "</text>";
    }).join("") + "</svg>";
    return Ao({
      icon: Zn.chartLine,
      name: Ze.metrics.compared_to_average,
      double: !0,
      sub: Gn(Ze.highsLastDays, { days: I.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (me > 0 ? "+" : "") + Fe(Un(L, me)) + '</div><div class="wbCompareWords">' + Fe(Ze.average[pe]) + '</div><div class="wbCompareTemps">' + Fe(Gn(Ze.todayVsAverage, { today: Un(L, Y), average: Un(L, he) })) + "</div></div>" + Ot + "</div>"
    });
  }
  function vt(L, _) {
    const I = ha(L, _, "humidity");
    if (!I || !Tn(I.value)) return "";
    const Y = ha(L, _, "dew_point"), he = Math.max(0, Math.min(100, Number(I.value)));
    return Ao({
      icon: Zn.waterPercent,
      name: Ze.metrics.humidity,
      sub: Y && Tn(Y.value) ? Gn(Ze.dewPoint, { dew_point: Un(L, Y.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + he + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + rl(fn(Math.round(Number(I.value)), L.locale), "%") + "</div>"
    });
  }
  function Ae(L, _) {
    var Be, ze;
    const I = ha(L, _, "pressure");
    if (!I || !Tn(I.value)) return "";
    const Y = Number(I.value), he = (Be = I.stateObj.attributes) == null ? void 0 : Be.pressure_unit, me = fc(Y, he), pe = ((ze = Z.pressureHistory) == null ? void 0 : ze.entityId) === I.stateObj.entity_id ? fc(Z.pressureHistory.value, he) : void 0;
    let we;
    if (me !== void 0 && pe !== void 0) {
      const Ke = me - pe;
      we = Ke >= ic ? "rising" : Ke <= -ic ? "falling" : "steady";
    }
    const be = pl(L, I.stateObj, "pressure", Math.round(Y));
    return Ao({
      icon: Zn.gauge,
      name: Ze.metrics.pressure,
      sub: we ? Ze.pressure[we] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + rl(be.number) + '<span class="wbTapeUnit">' + Fe(be.unit) + "</span></div>" + (me !== void 0 ? ct(L, me) : "") + "</div>"
    });
  }
  function ct(L, _) {
    const he = Math.floor(_) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (me, pe) => he + pe).map((me) => {
      const pe = 100 - (me - _) * 9;
      if (pe < 22 || pe > 178) return "";
      const we = me % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(pe - 100) / 100) + '"><line class="wbTapeTick" x1="' + (we ? 2 : 8) + '" x2="26" y1="' + pe + '" y2="' + pe + '"></line>' + (we ? '<text class="wbTapeLabel" x="33" y="' + pe + '">' + Fe(fn(me, L.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Fe(Ze.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Fe(Ze.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function bt(L) {
    var be, Be;
    const _ = ed(L), I = _ ? L.states[_] : void 0;
    if (!I || ((be = Z.rain) == null ? void 0 : be.entityId) !== _ || !Tn(Z.rain.change)) return "";
    const Y = ((Be = I.attributes) == null ? void 0 : Be.unit_of_measurement) ?? "", he = ve(L, "hourly"), me = Date.now() + zi, pe = b("hourly").filter((ze) => ze.precipitation != null && new Date(ze.datetime).getTime() <= me), we = pe.reduce((ze, Ke) => ze + Number(Ke.precipitation), 0);
    return Ao({
      icon: Zn.rainy,
      name: Ze.metrics.precipitation,
      sub: he && pe.length ? Gn(Ze.rainExpected, { amount: fn(we, L.locale, { maximumFractionDigits: 1 }) + " " + Sr(L, he, "precipitation") }) : Ze.rainLast24h,
      visual: rl(fn(Z.rain.change, L.locale, { maximumFractionDigits: 1 }), Y) + (pe.length > 1 ? Th(pe.map((ze) => ({ label: "", value: Number(ze.precipitation) }))) : "")
    });
  }
  function Ie(L, _) {
    const I = ha(L, _, "visibility");
    if (!I || !Tn(I.value)) return "";
    const Y = pl(L, I.stateObj, "visibility", I.value), he = Ep(Number(I.value), Sr(L, I.stateObj, "visibility"));
    return Ao({
      icon: Zn.eyeOutline,
      name: Ze.metrics.visibility,
      sub: Ze.visibilityLevel[Dp(he)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + he + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Fe(so(L, he)) + '</div><div class="wbSeaValue">' + rl(Y.number, Y.unit) + "</div></div>"
    });
  }
  function so(L, _) {
    var me;
    const I = _p((me = L.config) == null ? void 0 : me.country, _);
    if (I) return Gn(Ze.visibilityLandmarks, { from: I.from, to: I.to });
    const Y = _ / Wp * 60;
    if (Y < 60) {
      const pe = Y < 5 ? Math.max(1, Math.round(Y)) : 5 * Math.round(Y / 5);
      if (pe < 60) return Gn(Ze.walkMinutes, { minutes: fn(pe, L.locale) });
    }
    const he = Math.max(1, Math.round(Y / 30) / 2);
    return he < 8 ? Gn(Ze.walkHours, { hours: fn(he, L.locale) }) : Ze.walkDay;
  }
  function No(L) {
    Z.categories === void 0 && fe(L);
    const _ = et(L), I = (be) => be.map((Be) => L.states[Be]).filter(ps), Y = I(_.air), he = I(_.pollen);
    if (!Y.length && !he.length) return "";
    const me = [...Y, ...he], pe = (be) => he.includes(be) ? Zn.flower : Zn.airFilter, we = me.find((be) => be.entity_id === G.aq);
    return we ? Yi(L, we, pe(we)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Fe(Ze.airQuality) + '</h2></div><div class="wbAqTiles">' + me.map((be) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Fe(be.entity_id) + '"><span class="wbChip">' + Tr(pe(be)) + '</span><span class="wbText"><span class="wbName">' + Fe(hc(L, be)) + '</span><span class="wbSub">' + Fe(il(L, be)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Yi(L, _, I) {
    var ze, Ke, qe;
    const Y = ((ze = _.attributes) == null ? void 0 : ze.unit_of_measurement) ?? "", he = ((Ke = _.attributes) == null ? void 0 : Ke.device_class) === "pm25" && Y === rc && Tn(_.state), me = Number(_.state), pe = he ? bh(me) : void 0, we = ((qe = Z.aqHistory) == null ? void 0 : qe.entityId) === _.entity_id ? Z.aqHistory.points : void 0, be = (_e) => Math.min(100, Math.max(0, _e / ol * 100));
    let Be;
    if (we && we.length > 1) Be = Sh(we, (_e) => (fn(_e, L.locale, { maximumFractionDigits: 1 }) + " " + Y).trim());
    else if (pe) {
      let _e = 0;
      const Ye = Qc.map(([Pe, nt]) => {
        const gt = be(Math.min(nt, ol)), Ot = Gp[Pe] + " " + _e + "% " + gt + "%";
        return _e = gt, Ot;
      });
      Be = '<div class="wbScale" role="meter" aria-label="' + Fe(Ze.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + ol + '" aria-valuenow="' + me + '" style="background:linear-gradient(to right, ' + Ye.join(", ") + ')"><i style="left:' + be(me) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + ol + " " + rc + "</span></div>";
    } else Be = '<span class="wbGraphNote"><span>' + Fe(il(L, _)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Tr(I) + '</span><span class="wbText"><span class="wbName">' + Fe(hc(L, _)) + '</span><span class="wbSub">' + Fe(il(L, _)) + (pe ? " · " + Fe(Ze.aqLevel[pe]) : "") + '</span></span><button class="wbBack" title="' + Fe(Ze.back) + '" data-wb="aq-close">' + Tr(Zn.back) + '</button></div><div class="wbGraph">' + Be + "</div></div></div>";
  }
  const Ne = {
    current: Xe,
    hourly: ro,
    sun: Gi,
    moon: vn,
    wind: tt,
    uv_index: Hn,
    compared_to_average: Ui,
    humidity: vt,
    pressure: Ae,
    precipitation: bt,
    visibility: Ie,
    air_quality: No
  };
  function Ve(L) {
    var Be, ze, Ke, qe;
    const _ = l == null ? void 0 : l();
    if (!_ || q) return;
    const I = We(_);
    k(_, I), Z.lastFetch || V();
    const Y = et(_), he = mc(_), me = ed(_), pe = [
      ...I.map((_e) => _.states[_e]),
      _.states["sun.sun"],
      he && _.states[he],
      me && _.states[me],
      ...Y.air.map((_e) => _.states[_e]),
      ...Y.pollen.map((_e) => _.states[_e]),
      _.locale,
      _.config,
      _.entities,
      Math.floor(Date.now() / oo)
    ];
    if (!L && K && pe.length === K.length && pe.every((_e, Ye) => _e === K[Ye])) return;
    K = pe;
    const we = w.getRootNode(), be = we.activeElement || document.activeElement;
    for (const _e of se) {
      const Ye = O[_e];
      let Pe = "";
      try {
        Pe = Ne[_e](_, I) || "";
      } catch {
        Pe = "";
      }
      if (Pe === Ye.html) continue;
      const nt = be && Ye.el.contains(be) ? (Be = be.dataset) == null ? void 0 : Be.wbFocus : void 0, gt = Ye.el.querySelector(".wbStripScroll"), Ot = gt ? gt.scrollLeft : 0;
      Ye.html = Pe, Ye.el.hidden = !Pe, Ye.el.innerHTML = Pe, Ot && ((ze = Ye.el.querySelector(".wbStripScroll")) == null || ze.scrollTo({ left: Ot })), nt && !X && ((Ke = Ye.el.querySelector('[data-wb-focus="' + nt + '"]')) == null || Ke.focus());
    }
    X && ((qe = w.querySelector('[data-wb-focus="' + X + '"]')) == null || qe.focus(), X = null), Nt(performance.now());
  }
  function Zt() {
    W || q || (W = !0, queueMicrotask(() => {
      W = !1, Ve(!0);
    }));
  }
  function Ta() {
    const L = getComputedStyle(w), _ = (pe) => L.getPropertyValue(pe).trim(), I = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([pe, we]) => {
      _(we) && (I[pe] = _(we));
    });
    const Y = _("--color-text-primary") || "#f1f1f1", he = _("--color-bg-card") || "#222222", me = !!w.closest(".light");
    return { colors: { ...Jn, ...I }, ink: me ? Y : he, paper: me ? he : Y };
  }
  const wn = (L, _) => {
    var I;
    L.width !== _.w && (L.width = _.w), L.height !== _.h && (L.height = _.h), (I = L.getContext("2d")) == null || I.putImageData(new ImageData(_.data, _.w, _.h), 0, 0);
  }, Tt = () => m && !Xp();
  function Oa(L, _) {
    const I = w.querySelector("canvas[data-wb-strip]");
    if (!I || !j || !I.getClientRects().length) return;
    const Y = I.clientWidth, he = I.clientHeight;
    if (!Y || !he) return;
    const me = { width: Y, height: he, columns: nl, colors: _.colors, clock: L, ambient: Tt(), seed: j.seed };
    if (c === "smooth") {
      const pe = Math.min(2, window.devicePixelRatio || 1), we = Math.round(Y * pe), be = Math.round(he * pe);
      I.width !== we && (I.width = we), I.height !== be && (I.height = be);
      const Be = I.getContext("2d");
      if (!Be) return;
      Be.setTransform(pe, 0, 0, pe, 0, 0), pp(Be, j.segs, me);
    } else wn(I, up(j.segs, { ...me, px: 2, oneBit: c === "onebit", ink: _.ink, paper: _.paper }));
  }
  function Nt(L) {
    if (q) return;
    const _ = Ta();
    if (c !== "smooth") {
      const I = Tt();
      w.querySelectorAll("canvas[data-wb-wx]").forEach((Y) => {
        Y.getClientRects().length && wn(Y, Wc(hd(Y.dataset.wbWx, _.colors), { size: Number(Y.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: _.colors, ink: _.ink, paper: _.paper, clock: L, idle: I }));
      });
    }
    w.querySelectorAll("canvas[data-wb-sea]").forEach((I) => {
      const Y = I.clientWidth, he = I.clientHeight, me = Number(I.dataset.wbSea), pe = Y + "x" + he + ":" + me + ":" + _.colors.skyClearDay;
      !Y || !he || !(me > 0) || I.dataset.painted === pe || (I.dataset.painted = pe, wn(I, Tp(Y, he, me, _.colors)));
    }), Oa(L, _);
  }
  function La(L) {
    if (te = 0, !(q || !Tt())) {
      if (!document.hidden)
        if (c === "smooth") Oa(L, Ta());
        else {
          const _ = Math.floor(L / 100);
          _ !== U && (U = _, Nt(L));
        }
      te = requestAnimationFrame(La);
    }
  }
  function Fn() {
    w.classList.toggle("wbMotion", Tt()), !te && !q && Tt() && (te = requestAnimationFrame(La));
  }
  function fa(L) {
    var I, Y;
    const _ = (Y = (I = L.target).closest) == null ? void 0 : Y.call(I, "[data-wb]");
    if (!(!_ || !w.contains(_))) {
      switch (_.dataset.wb) {
        case "day": {
          G.openDay = Number(_.dataset.index), G.opener = _.dataset.wbFocus, X = "back-day";
          const he = mn()[G.openDay], me = !Z.todayHistory || Z.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Z.todayHistory.fetched > Np;
          he && ds(new Date(he.datetime), /* @__PURE__ */ new Date()) && me && ae();
          break;
        }
        case "close-day":
          G.openDay = void 0, X = G.opener, G.opener = void 0;
          break;
        case "open-page":
          v == null || v();
          return;
        case "day-mode":
          G.dayMode = _.dataset.mode;
          break;
        case "hourly-mode":
          G.hourlyMode = _.dataset.mode;
          break;
        case "aq-open":
          G.aq = _.dataset.entity, de(G.aq);
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
  function Xt(L) {
    var _, I;
    L.key === "Escape" && G.openDay !== void 0 && ((I = (_ = L.target).closest) != null && I.call(_, '[data-wb-open="day"]')) && (G.openDay = void 0, X = G.opener, G.opener = void 0, Ve(!0));
  }
  let Et = null;
  function Aa(L) {
    var I, Y;
    const _ = (Y = (I = L.target).closest) == null ? void 0 : Y.call(I, ".wbStripScroll");
    !_ || L.button !== 0 || (Et = { startX: L.pageX, left: _.scrollLeft, moved: !1 }, window.addEventListener("mousemove", ia), window.addEventListener("mouseup", Gt, { once: !0 }));
  }
  function ia(L) {
    const _ = w.querySelector(".wbStripScroll");
    if (!Et || !_) return;
    const I = L.pageX - Et.startX;
    !Et.moved && Math.abs(I) > 1 && (Et.moved = !0, _.classList.add("wbDragging")), _.scrollLeft = Et.left - I;
  }
  function Gt() {
    var L;
    Et = null, window.removeEventListener("mousemove", ia), (L = w.querySelector(".wbStripScroll")) == null || L.classList.remove("wbDragging");
  }
  w.addEventListener("click", fa), w.addEventListener("keydown", Xt), w.addEventListener("mousedown", Aa);
  const An = typeof ResizeObserver == "function" ? new ResizeObserver(() => Nt(performance.now())) : null;
  An == null || An.observe(w);
  const lt = (Bo = window.matchMedia) == null ? void 0 : Bo.call(window, "(prefers-reduced-motion: reduce)"), ma = () => {
    Fn(), Nt(performance.now());
  };
  (Po = lt == null ? void 0 : lt.addEventListener) == null || Po.call(lt, "change", ma);
  const qa = [
    setInterval(() => {
      Q = /* @__PURE__ */ new Date(), Ve(!0);
    }, Op),
    setInterval(() => {
      T = /* @__PURE__ */ new Date(), Ve(!0);
    }, qp),
    setInterval(V, Ip)
  ];
  return Ve(!0), Fn(), {
    update() {
      Ve(!1);
    },
    setStyle(L) {
      !L || L === c || (c = L, Ve(!0), Fn());
    },
    destroy() {
      var L;
      q = !0, qa.forEach(clearInterval), te && cancelAnimationFrame(te), te = 0, An == null || An.disconnect(), (L = lt == null ? void 0 : lt.removeEventListener) == null || L.call(lt, "change", ma), Gt(), w.removeEventListener("click", fa), w.removeEventListener("keydown", Xt), w.removeEventListener("mousedown", Aa), ["daily", "hourly"].forEach(Ce), w.remove();
    }
  };
}
const hs = "#E1E1E1", wc = "#F7F4F0", td = "#03a9f4", yt = 14, Mt = 172;
let Dh = 0;
const Ut = (a) => Math.round(a * 100) / 100, io = (a, l, o) => Math.max(l, Math.min(o, a)), Ro = (a, l, o, c, m, g) => '<rect x="' + Ut(a) + '" y="' + Ut(l) + '" width="' + Ut(o) + '" height="' + Ut(c) + '" fill="' + m + '"' + (g != null ? ' opacity="' + g + '"' : "") + "/>", nd = (a) => a.map((l, o) => (o ? "L" : "M") + Ut(l[0]) + " " + Ut(l[1])).join("");
function ad(a) {
  const l = (a == null ? void 0 : a.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const gi = [
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
  let o = gi[0], c = gi[gi.length - 1];
  for (let A = 0; A < gi.length - 1; A++) if (l >= gi[A][0] && l <= gi[A + 1][0]) {
    o = gi[A], c = gi[A + 1];
    break;
  }
  const m = (l - o[0]) / (c[0] - o[0]), g = m * m * (3 - 2 * m), v = (A, w) => {
    const P = parseInt(A.slice(1), 16), se = parseInt(w.slice(1), 16);
    return "#" + [16, 8, 0].map((ne) => Math.round((P >> ne & 255) + ((se >> ne & 255) - (P >> ne & 255)) * g).toString(16).padStart(2, "0")).join("");
  };
  return { top: v(o[1][0], c[1][0]), bot: v(o[1][1], c[1][1]), warm: v(o[1][2], c[1][2]), cool: v(o[1][3], c[1][3]), op: o[1][4] + (c[1][4] - o[1][4]) * g, t: l };
}
function Nh(a) {
  const l = parseInt(a.slice(1), 16), o = (l >> 16 & 255) / 255, c = (l >> 8 & 255) / 255, m = (l & 255) / 255, g = Math.max(o, c, m), v = Math.min(o, c, m);
  let A = 0, w = 0;
  const P = (g + v) / 2;
  if (g !== v) {
    const se = g - v;
    w = P > 0.5 ? se / (2 - g - v) : se / (g + v), A = (g === o ? (c - m) / se + (c < m ? 6 : 0) : g === c ? (m - o) / se + 2 : (o - c) / se + 4) / 6;
  }
  return [A * 360, w * 100, P * 100];
}
function uu(a, l, o) {
  l = io(l, 0, 100) / 100, o = io(o, 0, 100) / 100;
  const c = (v) => (v + a / 30) % 12, m = l * Math.min(o, 1 - o), g = (v) => o - m * Math.max(-1, Math.min(c(v) - 3, Math.min(9 - c(v), 1)));
  return "#" + [g(0), g(8), g(4)].map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("");
}
const [pu, hu, fu] = Nh(hs), xc = uu(pu, hu, Math.max(6, fu - 14)), Bh = uu(pu, hu, Math.min(96, fu + 16));
function Ph(a, l, o, c, m) {
  const g = Mt / 2, v = Mt * 0.12, A = g - (g - v) * a, w = (K) => K ** 1.3, P = io(o, -1.5, 1.5), se = (K) => -(Math.abs(P) * 4.6 * K ** 1.5) * Math.sign(P), ne = a * 1.4, O = (K, te) => {
    const U = Math.min(4.8, Math.abs(o) * 2.6) * (te ? 1 : -1) * Math.sign(o || 1), W = te ? K + A : K, X = te ? K : K + A, G = (Te) => W + se(Te) + U * Math.sin(Te * Math.PI * 1.2 + c) * w(Te) * 1.4 + ne * Math.sin(Te * Math.PI * 2 + c * 0.6) * w(Te) * (te ? 1 : -1), Z = [[X, yt]];
    for (let Te = 0; Te <= 12; Te++) Z.push([G(Te / 12), yt + Mt * Te / 12]);
    Z.push([X, yt + Mt]);
    let Q = '<path d="' + nd(Z) + 'Z" fill="' + hs + '"/>';
    if (m) return Q;
    const T = 1.35 + ((te ? o > 0 : o < 0) ? 0.35 : 0), j = (Te) => {
      const b = Te / 7, ve = te ? 1 - b : b, Ce = (1 - ve) ** 1.3, Oe = K + A * b;
      return Array.from({ length: 13 }, (k, E) => {
        const C = E / 12;
        return [Oe + se(C) * Ce + U * T * Math.sin(C * Math.PI * 1.2 + c - ve * 3.2) * w(C) * 1.4 * Ce + ne * 1.6 * Math.sin(C * Math.PI * 2 + c * 0.6 - ve * 2.5) * w(C) * a * (0.4 + 0.6 * Ce), yt + Mt * C];
      });
    }, ge = [1, 2, 3, 4, 5, 6].map(j);
    for (let Te = 0; Te < 6; Te += 2) Q += '<path d="' + nd(ge[Te]) + nd(ge[Te + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return Q;
  }, q = g - (g - v) * l;
  return { body: O(yt, !0) + O(yt + Mt - A, !1), rails: [{ x: yt + q - 4, y: yt, w: 4, h: Mt }, { x: yt + Mt - q, y: yt, w: 4, h: Mt }], head: 6.4 };
}
function Ih(a, l, o) {
  const c = Mt * (1 - a);
  let m = "";
  if (c > 1 && (m += Ro(yt, yt, Mt, c, hs), !o))
    for (let g = 1; g < 7; g += 2) m += Ro(yt + Mt * g / 7, yt, Mt / 7, c, "#fff");
  return { body: m, rails: [{ x: yt, y: yt + Mt * (1 - l) - 7, w: Mt, h: 11 }], head: 10.4 };
}
function Hh(a, l, o, c) {
  const m = 9 - 7 * (o / 100), g = yt + Mt * (1 - a), v = Math.ceil(Mt / 10) + 1, A = yt + m / 2, w = (yt + Mt - m / 2 - A) / (v - 1), P = 0.8, se = 0.6, ne = Array.from({ length: v }, (K, te) => Math.max(A + te * se, Math.min(A + te * w, g - m / 2 - (v - 1 - te) * se))), O = ne.slice(0, -1).map((K, te) => io((ne[te + 1] - K - se) / (w - se), 0, 1));
  O.push(O[v - 2]);
  let q = "";
  return ne.forEach((K, te) => {
    const U = P + (m - P) * O[te], W = Math.max(0.5, U / 2), X = Math.max(0.4, U * 0.114);
    q += Ro(yt, K - W, Mt, Math.max(1, U), hs), !c && U > 2.2 && (q += Ro(yt, K + W - X, Mt, X, xc) + Ro(yt, K - W, Mt, X * 0.55, Bh, 0.75));
  }), c || [0.22, 0.78].forEach((K) => {
    q += Ro(yt + Mt * K - 0.7, yt, 1.4, Math.max(0, ne[v - 1] + 1 - yt), xc, 0.85);
  }), { body: q, rails: [{ x: yt, y: yt + Mt * (1 - l) - 8, w: Mt, h: 8 }], head: 8.8 };
}
const yc = (a, l, o, c, m, g, v) => a === "curtain" ? Ph(l, o, m, g, v) : a === "venetian" ? Hh(l, o, c, v) : Ih(l, o, v);
function Fh(a, l) {
  let o = "", c = "";
  return l.forEach((m) => {
    const g = m.w > m.h, v = io(g ? yt + Mt / 2 : m.x + m.w / 2, 17, 183), A = io(g ? m.y + m.h / 2 : yt + Mt / 2, 17, 183);
    o += g ? Ro(yt, io(m.y + m.h / 2, yt, yt + Mt) - 1, Mt, 2, td) : Ro(io(m.x + m.w / 2, yt, yt + Mt) - 1, yt, 2, Mt, td);
    const w = g ? "M" + Ut(v - 4) + " " + Ut(A - 3) + "l4 -3l4 3M" + Ut(v - 4) + " " + Ut(A + 3) + "l4 3l4 -3" : "M" + Ut(v - 3) + " " + Ut(A - 4) + "l-3 4l3 4M" + Ut(v + 3) + " " + Ut(A - 4) + "l3 4l-3 4";
    c += '<circle cx="' + Ut(v) + '" cy="' + Ut(A) + '" r="11" fill="' + td + '" filter="url(#' + a + 's)"/><path d="' + w + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: c };
}
function Oh(a, l) {
  const o = /* @__PURE__ */ new Date(), c = Rh(o.getHours() + o.getMinutes() / 60), m = 42 + 18 * Math.sin(c.t * 0.5), g = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, v = yc(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), A = l.ghostAlpha > 4e-3 && l.ghost != null ? yc(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", w = l.grip > 4e-3 ? Fh(a, v.rails) : null, P = (se) => Ro(yt, yt, Mt, Mt, se);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + a + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + a + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + a + 'w" cx="' + Ut(m) + '%" cy="' + Ut(g) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + Ut(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + a + 'k" cx="' + Ut(100 - m * 0.8) + '%" cy="' + Ut(100 - g * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + Ut(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + a + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + wc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + a + 'c)">' + P("url(#" + a + "l)") + P("url(#" + a + "w)") + P("url(#" + a + "k)") + (A ? '<g opacity="' + Ut(l.ghostAlpha) + '">' + A + "</g>" : "") + v.body + '<rect x="14" y="14" width="172" height="' + v.head + '" fill="' + hs + '" filter="url(#' + a + 's)"/></g>' + (w ? '<g clip-path="url(#' + a + 'c)" opacity="' + Ut(l.grip) + '">' + w.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + wc + '" stroke-width="3"/>' + (w ? '<g opacity="' + Ut(l.grip) + '">' + w.knobs + "</g>" : "") + "</svg>";
}
function qh({ onMove: a, onSet: l }) {
  var Q;
  const o = "cv" + ++Dh, c = document.createElement("div");
  c.className = "tfCoverArt";
  const m = (Q = window.matchMedia) == null ? void 0 : Q.call(window, "(pointer: coarse)").matches;
  let g = null;
  const v = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let A = 0, w = !1, P = !1, se = null, ne = 0, O = 0;
  const q = () => (g == null ? void 0 : g.kind) === "curtain" ? "x" : "y", K = () => se || w || P || g.moving || g.target != null ? 1 : m ? performance.now() < O ? 1 : 0.4 : 0, te = () => {
    c.innerHTML = Oh(o, { kind: g.kind, pos: v.pos, bar: g.target ?? v.pos, tilt: v.tilt, vel: v.vel, ph: v.ph, ghost: v.gpos, ghostAlpha: v.ghost, grip: v.grip });
  };
  function U(T) {
    A = 0;
    const j = v.last ? Math.min(0.064, (T - v.last) / 1e3) : 1 / 60, ge = j * 60;
    v.last = T;
    const Te = g.pos - v.pos, b = v.pos;
    v.pos += Math.sign(Te) * Math.min(Math.abs(Te), Math.max(10.5, Math.abs(Te) * 1.4) * j), Math.abs(g.pos - v.pos) < 0.03 && (v.pos = g.pos), v.vel = v.vel * 0.86 + (v.pos - b) / ge * 0.14, Math.abs(v.vel) < 0.015 && v.pos === g.pos && (v.vel = 0), (v.pos !== b || v.vel) && (v.ph += (0.06 + Math.abs(v.vel) * 0.03) * ge);
    const ve = g.tilt - v.tilt;
    v.tilt += Math.sign(ve) * Math.min(Math.abs(ve), Math.max(60, Math.abs(ve) * 4) * j);
    const Ce = K();
    v.grip += (Ce - v.grip) * Math.min(1, j * (Ce > v.grip ? 11 : 3.5)), Math.abs(Ce - v.grip) < 0.01 && (v.grip = Ce);
    const Oe = g.target != null && Math.abs(g.target - v.pos) > 0.5 ? 0.22 : 0;
    g.target != null && (v.gpos = g.target), v.ghost += (Oe - v.ghost) * Math.min(1, j * (Oe > v.ghost ? 16 : 3)), Math.abs(Oe - v.ghost) < 4e-3 && (v.ghost = Oe), te(), v.pos !== g.pos || v.vel || v.tilt !== g.tilt || v.grip !== Ce || v.ghost !== Oe ? A = requestAnimationFrame(U) : v.last = 0;
  }
  const W = () => {
    g && !A && (A = requestAnimationFrame(U));
  }, X = setInterval(() => {
    g && !A && te();
  }, 60 * 1e3), G = (T) => {
    const j = c.getBoundingClientRect();
    return q() === "x" ? (T.clientX - j.left) / j.width : (T.clientY - j.top) / j.height;
  };
  c.addEventListener("pointerdown", (T) => {
    var Te;
    if (!(g != null && g.canSet) || T.button > 0) return;
    T.preventDefault(), (Te = c.setPointerCapture) == null || Te.call(c, T.pointerId);
    const j = g.target ?? g.pos, ge = c.getBoundingClientRect();
    se = { p0: G(T), from: j, x0: T.clientX, value: null, side: null }, g.kind === "curtain" && j > 0 && (se.side = (T.clientX - ge.left) / ge.width < 0.5 ? "L" : "R"), W();
  }), c.addEventListener("pointermove", (T) => {
    if (!se) return;
    let j;
    if (g.kind === "curtain") {
      if (!se.side) {
        const Te = T.clientX - se.x0;
        if (Math.abs(Te) < 4) return;
        se.side = Te < 0 ? "L" : "R";
      }
      const ge = (Mt / 2 - Mt * 0.12) / 200;
      j = se.from + (se.side === "L" ? -1 : 1) * ((G(T) - se.p0) / ge) * 100;
    } else j = se.from - (G(T) - se.p0) / (Mt / 200) * 100;
    se.value = io(j, 0, 100), a(se.value);
  });
  const Z = () => {
    if (!se) return;
    const T = se.value;
    se = null, T != null && l(Math.round(T)), W();
  };
  return c.addEventListener("pointerup", Z), c.addEventListener("pointercancel", Z), c.addEventListener("lostpointercapture", Z), c.addEventListener("pointerenter", () => {
    w = !0, W();
  }), c.addEventListener("pointerleave", () => {
    w = !1, W();
  }), c.addEventListener("focus", () => {
    P = c.matches(":focus-visible"), W();
  }), c.addEventListener("blur", () => {
    P = !1, W();
  }), c.addEventListener("keydown", (T) => {
    if (!(g != null && g.canSet)) return;
    const j = Math.round(g.target ?? g.pos), ge = T.shiftKey ? 10 : 1, Te = { ArrowUp: j + ge, ArrowRight: j + ge, ArrowDown: j - ge, ArrowLeft: j - ge, PageUp: j + 25, PageDown: j - 25, Home: 0, End: 100 }[T.key];
    if (Te == null) return;
    T.preventDefault();
    const b = io(Te, 0, 100);
    a(b), clearTimeout(ne), ne = setTimeout(() => l(b), 500);
  }), {
    el: c,
    update(T) {
      const j = !g;
      g = T, j && (v.pos = g.pos, v.tilt = g.tilt, O = performance.now() + 1500, m && setTimeout(W, 1600)), c.classList.toggle("x", q() === "x"), c.classList.toggle("y", q() === "y"), g.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(g.target ?? g.pos))), c.setAttribute("aria-orientation", q() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", g.name + (g.canSet ? " position" : "")), c.setAttribute("aria-valuetext", g.text), W();
    },
    destroy() {
      cancelAnimationFrame(A), A = 0, clearInterval(X), clearTimeout(ne), c.remove();
    }
  };
}
const kc = "move-assistant-density", vi = {
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
}, re = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), od = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Mc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Wh = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', sl = {
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
}, _c = "move_assistant_house", Ec = "move-assistant-house-used", Xh = ["switch", "fan", "input_boolean", "automation"], Dc = "move-assistant-house-look", Jh = [["popup", "Popup"], ["sheet", "Sheet"]], rd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Qh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', ef = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Rc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Nc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', Bc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ca = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + a.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", Pc = Ca(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), tf = Ca(["M20 6L9 17L4 12"]), ao = {
  temp: Ca(["M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"]),
  hum: Ca(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z"]),
  lights: Ca(["M9 18h6", "M10 22h4", "M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2Z"]),
  covers: Ca(["M3 3h18", "M5 3v18c3-4 4-10 4-18", "M19 3v18c-3-4-4-10-4-18"]),
  climate: Ca(["M2 8h20", "M2 19h20", "M5 5v17", "M9.5 5v17", "M14.5 5v17", "M19 5v17"]),
  humidifier: Ca(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z", "M9 15a3 3 0 0 0 3 3"]),
  media: Ca(["M3 6h18v12H3Z", "M8 21h8"]),
  plugs: Ca(["M9 2v6", "M15 2v6", "M6 8h12v4a6 6 0 0 1-12 0Z", "M12 18v4"]),
  alert: Ca(["M12 9v4", "M12 17h.01", "M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"]),
  door: Ca(["M13 4h5v16h-5", "M3 20h18", "M13 4L6 6v14l7 0Z", "M10.5 12h.01"])
}, nf = (a) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (a ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', af = 1, of = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Ic = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, sd = ["hs", "xy", "rgb", "rgbw", "rgbww"], ll = ["door", "window", "garage_door", "opening"], Hc = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, dl = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], rf = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], sf = 10, lf = 20, df = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, cf = ["living room", "bedroom", "office"];
function uf(a, { config: l, getHass: o }) {
  var ns, to, as;
  const c = (e) => a.getElementById(e), m = c("app"), v = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let A = vi.get(kc) === "1", w = {};
  const P = (e) => {
    var n;
    return (n = o()) == null ? void 0 : n.callWS(e);
  }, se = (e, n, r) => P({ type: "call_service", domain: e, service: n, service_data: r }), ne = a.querySelector("#appearancePane .toggleList");
  ne && !c("densityToggle") && (ne.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    A = !A, vi.set(kc, A ? "1" : "0"), Q();
  }));
  const O = [
    ["weather", "Weather", "The forecast under Home.", (e) => e.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (e) => e.startsWith("sensor.") && vt(e).device_class === "power" && /^(W|kW)$/.test(vt(e).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (e) => e.startsWith("alarm_control_panel.")]
  ], q = (e, n, r, d) => '<div class="themeChoice" id="' + e + '" role="group" aria-label="' + n + '">' + d.map(([p, y]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + r + '="' + p + '">' + y + "</button>").join("") + "</div>", K = (e, n, r, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + e + "</strong>" + (n ? '<div class="status">' + n + "</div>" : "") + "</div>" + r + "</div>";
  function te() {
    var S, D, F;
    if (!v || c("housePane")) return;
    const e = c("settingsView");
    e.querySelector(".settingsTitle").textContent = "HomeCore";
    const n = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], r = (B, $) => '<div class="houseTab' + (B === "look" ? " active" : "") + '" data-house-pane="' + B + '"><section class="card">' + $ + "</section></div>";
    e.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + n.map(([B, $]) => '<button class="tab segBtn' + (B === "look" ? " active" : "") + '" type="button" data-house-tab="' + B + '">' + $ + "</button>").join("") + "</div>" + r("look", '<div class="toggleList" id="houseLook"></div>') + r("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + r("sources", '<div class="toggleList">' + O.map(([B, $, ye]) => K($, ye, '<select class="settingsSelect" data-source="' + B + '" aria-label="' + $ + '"></select>')).join("") + "</div>") + r("sums", '<div class="toggleList">' + Object.entries(id).map(([B, $]) => K($.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + B + '" aria-label="' + $.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = c("houseLook");
    [(S = e.querySelector(".themeBtn")) == null ? void 0 : S.closest(".toggleRow"), (D = c("densityToggle")) == null ? void 0 : D.closest(".toggleRow"), (F = c("moreInfoChoice")) == null ? void 0 : F.closest(".toggleRow")].forEach((B) => B && d.appendChild(B)), d.insertAdjacentHTML("beforeend", K("Lights", "How lights show on the house page.", q("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + K("Pad", "What the Dual Axis Controller’s pad sets on its tile.", q("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const p = c("housePane"), y = p.querySelector(".houseTabs"), h = y.querySelector(".rubberIndicator"), x = (B) => {
      const $ = y.querySelector(".tab.active");
      h.style.transition = B ? "" : "none", h.style.left = $.offsetLeft + "px", h.style.width = $.offsetWidth + "px", B && (h.style.transform = "scaleX(1.08)", setTimeout(() => h.style.transform = "", 180));
    };
    new ResizeObserver(() => x(!1)).observe(y), p.addEventListener("click", (B) => {
      const $ = B.target.closest("[data-house-tab]");
      if ($) {
        y.querySelectorAll(".tab").forEach((ce) => ce.classList.toggle("active", ce === $)), p.querySelectorAll(".houseTab").forEach((ce) => ce.classList.toggle("active", ce.dataset.housePane === $.dataset.houseTab)), $.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x(!0);
        return;
      }
      const ye = B.target.closest("[data-light-fav]");
      if (ye) {
        Si(ye.dataset.lightFav);
        return;
      }
      const Re = B.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Re || Re.disabled)) {
        if (Re.dataset.lights && (Vt.lights = Re.dataset.lights), Re.dataset.dacPad && (Vt.dacPad = Re.dataset.dacPad), (Re.dataset.lights || Re.dataset.dacPad) && (Xe(), qn.clear()), Re.dataset.sumToggle) {
          const ce = Re.dataset.sumToggle, ie = new Set(V.hiddenSums || []);
          ie.has(ce) ? ie.delete(ce) : ie.add(ce), V = { ...V, hiddenSums: [...ie] }, Ln();
        }
        Ba();
      }
    }), p.addEventListener("change", (B) => {
      const $ = B.target;
      $.dataset.source && (V = { ...V, sources: { ...V.sources || {}, [$.dataset.source]: $.value || void 0 } }, Ln());
      const ye = $.dataset.lightStyle || $.dataset.lightPad;
      if (ye) {
        const Re = $.dataset.lightStyle ? "lightStyles" : "lightPads", ce = { ...Vt[Re] };
        $.value ? ce[ye] = $.value : delete ce[ye], Vt[Re] = ce, Xe(), [...qn.keys()].filter((ie) => ie.endsWith(":" + ye)).forEach((ie) => qn.delete(ie));
      }
      Ba();
    });
  }
  function U() {
    var x, S;
    ht() && Wa();
    const e = c("housePane");
    if (!e) return;
    const n = !!customElements.get(rn);
    e.querySelectorAll("[data-lights]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.lights === Vt.lights))), c("lightsRow").querySelector(".status").textContent = n || !ht() ? "How lights show on the house page." : On === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", e.querySelectorAll("[data-dac-pad]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.dacPad === Vt.dacPad))), c("dacPadRow").hidden = !ht();
    for (const D of e.querySelectorAll("[data-source]")) {
      if (D === a.activeElement) continue;
      const [F] = O.find(([$]) => $ === D.dataset.source), B = Object.keys(w).filter(O.find(([$]) => $ === F)[3]).sort(($, ye) => Ae($).localeCompare(Ae(ye)));
      D.dataset.sig !== B.join(",") && (D.innerHTML = '<option value="">Automatic</option>' + B.map(($) => '<option value="' + re($) + '">' + re(Ae($)) + "</option>").join(""), D.dataset.sig = B.join(",")), D.value = B.includes((x = V.sources) == null ? void 0 : x[F]) ? V.sources[F] : "";
    }
    e.querySelectorAll("[data-sum-toggle]").forEach((D) => {
      const F = !(V.hiddenSums || []).includes(D.dataset.sumToggle);
      D.classList.toggle("on", F), D.setAttribute("aria-checked", String(F));
    });
    const r = c("lightRows"), d = r != null && r.contains(a.activeElement) ? a.activeElement : null;
    if (!r || d != null && d.matches("select")) return;
    const p = new Set(Rn()), y = (D, F, B, $) => '<option value="' + D + '"' + (D === B ? " selected" : "") + ">" + F + "</option>", h = Object.keys(w).filter((D) => D.startsWith("light.")).sort((D, F) => !xt.get(D) - !xt.get(F) || (xt.get(D) || "").localeCompare(xt.get(F) || "") || Ae(D).localeCompare(Ae(F))).map((D) => {
      const F = Vt.lightStyles[D] || "", B = Vt.lightPads[D] || "", $ = p.has(D), ye = re(Ae(D));
      return "<tr><td><strong>" + ye + "</strong></td><td>" + re(xt.get(D) || "—") + "</td><td>" + re(Et(D)) + '</td><td class="metaSwitchCol"><button class="switch' + ($ ? " on" : "") + '" type="button" role="switch" aria-checked="' + $ + '" data-light-fav="' + re(D) + '" aria-label="' + ye + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + re(D) + '" aria-label="' + ye + ' tile">' + y("", "Default", F) + y("tile", "HomeCore tile", F) + y("dac", "Dual Axis Controller", F) + '</select></td><td><select class="settingsSelect" data-light-pad="' + re(D) + '" aria-label="' + ye + ' pad"' + (Io(D) ? "" : " disabled") + ">" + y("", "Default", B) + y("temperature", "Temperature", B) + y("colour", "Colour", B) + "</select></td></tr>";
    }).join("");
    r.dataset.html !== h && (r.innerHTML = h, r.dataset.html = h, d != null && d.dataset.lightFav && ((S = r.querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || S.focus({ preventScroll: !0 })));
  }
  const W = document.createElement("div");
  W.className = "densityBadge", W.setAttribute("aria-live", "polite"), W.hidden = !0, m.appendChild(W);
  let X = 0;
  function G() {
    if (!A) return;
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
    A && requestAnimationFrame(G);
  };
  function Q() {
    var e;
    m.classList.toggle("showDensity", A), (e = c("densityToggle")) == null || e.classList.toggle("on", A), W.hidden = !A, clearInterval(X), A && (X = setInterval(G, 1e3), G());
  }
  window.addEventListener("scroll", Z, { capture: !0, passive: !0 }), window.addEventListener("resize", Z, { passive: !0 });
  const T = a.querySelector("#homeView .grid");
  let j = null, ge = null, Te = null, b = null;
  const ve = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), k = 350;
  let E = null;
  const C = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map();
  let V = { favourites: null }, ae = {}, de = {}, fe = [], We = null;
  const et = (() => {
    try {
      return JSON.parse(vi.get(Ec)) || {};
    } catch {
      return {};
    }
  })();
  let xt = /* @__PURE__ */ new Map(), mn = 0;
  function Ln() {
    clearTimeout(mn), mn = setTimeout(() => Promise.resolve(P({ type: "frontend/set_user_data", key: _c, value: V })).catch(() => {
    }), 400);
  }
  const Vt = (() => {
    let e = {};
    try {
      e = JSON.parse(vi.get(Dc)) || {};
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
  })(), Xe = () => vi.set(Dc, JSON.stringify(Vt)), Ct = () => {
    m.dataset.more = Vt.more, Gr();
  };
  v && ne && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Jh.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Vt.more === e) + '" data-more-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-more-style]");
    n && (Vt.more = n.dataset.moreStyle, Xe(), Ct(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((r) => r.setAttribute("aria-pressed", String(r === n))));
  })), te();
  let Je = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const gn = /* @__PURE__ */ new Map();
  let Mn = "";
  const ji = v ? $u({ onChange: () => yn() }) : null;
  v && m.classList.add("house");
  const dt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ue = null, mt = null, ro = !1;
  function Gi(e) {
    const n = qt();
    if (m.classList.toggle("houseBento", !!n), Ue && (mt !== n || e == null) && (Ue.destroy(), Ue = null), !n || e == null) {
      dt.remove();
      return;
    }
    dt.isConnected || T.append(dt), dt.style.order = e, !Ue && !ro && (Ue = bc(dt, { getHass: o, entityId: n, style: "bitmap" }), mt = n);
  }
  const wi = [["wx", ["current"]], ["avg", ["compared_to_average"]]], vn = Object.fromEntries(wi.map(([e]) => [e, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + e })]));
  let tt = null, Hn = null;
  function Ui(e) {
    const n = qt();
    tt && Hn !== n && (tt.forEach((r) => r.destroy()), tt = null), Object.values(vn).forEach((r) => n ? !r.isConnected && T.append(r) : r.remove()), n && !tt && !ro && (tt = wi.map(([r, d]) => bc(vn[r], { getHass: o, entityId: n, style: "bitmap", cards: d, onOpen: r === "wx" ? () => wo("weather") : void 0 })), Hn = n);
  }
  const vt = (e) => {
    var n;
    return ((n = w[e]) == null ? void 0 : n.attributes) || {};
  }, Ae = (e) => vt(e).friendly_name || e, ct = (e, n) => Wi(e) || (Number(vt(e).supported_features) & n) === n, bt = (e) => {
    const n = String(e ?? "").replace(/_/g, " ");
    return n.charAt(0).toUpperCase() + n.slice(1);
  }, Ie = (e, n = 1) => Number(e).toLocaleString(void 0, { minimumFractionDigits: n, maximumFractionDigits: n }), so = (e) => (e == null ? void 0 : e.state) === "on" ? e.attributes.brightness != null ? Math.max(1, Math.round(e.attributes.brightness / 2.55)) : 100 : 0, No = (e) => vt(e).supported_color_modes || [], Yi = (e) => {
    const n = e / 100;
    return [n <= 66 ? 255 : 329.7 * Math.pow(n - 60, -0.1332), n <= 66 ? 99.47 * Math.log(n) - 161.12 : 288.12 * Math.pow(n - 60, -0.0755), n >= 66 ? 255 : n <= 19 ? 0 : 138.52 * Math.log(n - 10) - 305.04];
  }, Ne = (e, n) => [5, 3, 1].map((r) => {
    const d = (r + e / 60) % 6;
    return 255 * (1 - n / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  }), Ve = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)), Zt = (e) => {
    const n = 0.2126 * Ve(e[0]) + 0.7152 * Ve(e[1]) + 0.0722 * Ve(e[2]);
    return (n + 0.05) / 0.0664 > 1.05 / (n + 0.05);
  };
  function Ta(e) {
    const n = vt(e), r = (n.rgb_color || (n.hs_color && n.color_mode !== "color_temp" ? Ne(...n.hs_color) : n.color_temp_kelvin ? Yi(n.color_temp_kelvin) : [255, 170, 0])).map((d) => Math.round(Math.max(0, Math.min(255, d))));
    return "--light:rgb(" + r.join(",") + ");--light-ink:" + (Zt(r) ? "#26221e" : "#ffffff");
  }
  const wn = (e) => {
    var n;
    return e.startsWith("light.") && ((n = w[e]) == null ? void 0 : n.state) === "on" ? ' data-light style="' + Ta(e) + '"' : "";
  }, Tt = (e) => {
    const n = No(e);
    return n.length ? n.some((r) => r !== "onoff") : vt(e).brightness != null;
  }, Oa = (e) => [vt(e).min_color_temp_kelvin || 2e3, vt(e).max_color_temp_kelvin || 6500], Nt = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function La(e) {
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
  const Fn = (e) => {
    var n;
    return vt(e).current_position ?? (((n = w[e]) == null ? void 0 : n.state) === "closed" ? 0 : 100);
  }, fa = (e) => {
    var n;
    return lo("pos", e, ((n = C.get(e)) == null ? void 0 : n.pos) ?? Fn(e));
  }, Xt = (e) => {
    var n;
    return lo("tilt", e, ((n = C.get(e)) == null ? void 0 : n.tilt) ?? vt(e).current_tilt_position);
  };
  function Et(e) {
    var h;
    const n = w[e];
    if (!n) return "Not found";
    if (n.state === "unavailable") return "Unavailable";
    const r = n.attributes, d = e.split(".")[0];
    if (d === "light") {
      if (n.state !== "on") return "Off";
      const x = r.color_temp_kelvin;
      return (Tt(e) ? so(n) + "%" : "On") + (r.color_mode === "color_temp" && x ? " · " + Number(x).toLocaleString() + "k" : sd.includes(r.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (n.state === "off" ? "Off" : bt(r.hvac_action || n.state)) + " · " + Ie(r.current_temperature) + " °C now";
    if (d === "cover") {
      const x = Fn(e), S = r.current_tilt_position;
      return n.state === "opening" || n.state === "closing" ? bt(n.state) + " - " + x + "%" : (x <= 0 ? "Closed" : x >= 100 ? "Open" : "Partially open") + (S > 0 && S < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return n.state !== "on" ? "Off" : bt(r.action || "on") + " · " + r.current_humidity + "% now";
    if (d === "vacuum") return bt(n.state) + (n.state === "cleaning" && ((h = r.rooms) != null && h.length) ? " · " + r.rooms.join(", ") : "") + (r.battery_level != null ? " · " + r.battery_level + "%" : "");
    if (d === "media_player") return n.state === "playing" || n.state === "paused" ? (n.state === "paused" ? "Paused · " : "") + (r.media_title || "Playing") : bt(n.state);
    if (d === "alarm_control_panel") return Ic[n.state] || bt(n.state);
    if (d === "lock" || d === "valve") return bt(n.state);
    if (d === "switch") return n.state === "on" ? "On" : "Off";
    if (d === "plant") return n.state === "ok" ? "Healthy" : bt(r.problem);
    if (d === "binary_sensor")
      return r.device_class === "battery" ? n.state === "on" ? "Low" : "Normal" : r.device_class === "problem" ? n.state === "on" ? "Problem" : "OK" : r.device_class === "moisture" ? n.state === "on" ? "Wet" : "Dry" : ll.includes(r.device_class) ? n.state === "on" ? "Open" : "Closed" : n.state === "on" ? "Detected" : "Clear";
    if (r.rang) return "Rang at " + Nt(r.rang);
    const p = o();
    if (p != null && p.formatEntityState && !Wi(e))
      try {
        return p.formatEntityState(n);
      } catch {
      }
    const y = Number(n.state);
    if (n.state !== "" && Number.isFinite(y)) {
      const x = Math.abs(y) >= 100 ? 0 : Math.abs(y) >= 10 ? 1 : 2, S = r.unit_of_measurement ? r.unit_of_measurement === "%" ? "%" : " " + r.unit_of_measurement : "";
      return y.toLocaleString(void 0, { maximumFractionDigits: x }) + S + (r.plant_low ? " · Low" : r.plant_high ? " · High" : "");
    }
    return bt(n.state);
  }
  const Aa = (e) => e >= 1e3 ? Ie(e / 1e3, 2) + " kW" : Math.round(e).toLocaleString() + " W";
  function ia(e) {
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
      } else r.textContent || (r.textContent = (r.dataset.letter || Ae(r.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    });
  }
  const Gt = (e, n, r) => ' data-icon-for="' + re(e) + '"' + (n ? ' data-icon-name="' + re(n) + '"' : "") + (r ? ' data-letter="' + re(r) + '"' : ""), An = (e) => e.endsWith("_solar_power") ? "mdi:solar-power-variant" : vt(e).rang ? "mdi:doorbell" : "", lt = (e, n, r, d) => re([e, n, r, d ? JSON.stringify(d) : ""].join("|")), ma = (e) => re(JSON.stringify(e));
  function qa(e, n) {
    var p, y;
    const r = re(Ae(n) + ", " + Et(n));
    return '<div class="activityRow' + (Number.isFinite(Number((p = w[n]) == null ? void 0 : p.state)) && ((y = w[n]) == null ? void 0 : y.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + re(e + "|" + n) + '" aria-label="' + r + '. Show the last 24 hours"' : '" aria-label="' + r + '"') + '><div class="tfIcon" aria-hidden="true"' + Gt(n, An(n)) + '></div><div><div class="activityRowName">' + re(Ae(n)) + '</div><div class="activityRowMeta">' + re(Et(n)) + "</div></div></div>";
  }
  const Bo = (e, n, r) => '<div class="activityRow" aria-label="' + re(e + ", " + n) + '"><div class="tfIcon" aria-hidden="true"' + Gt("", r, e) + '></div><div><div class="activityRowName">' + re(e) + '</div><div class="activityRowMeta">' + re(n) + "</div></div></div>";
  function Po(e) {
    var r;
    const n = ((r = w[e]) == null ? void 0 : r.state) === "on";
    return '<div class="activityRow tfPlug' + (n ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + lt("switch", "toggle", e) + '" aria-label="Turn ' + re(Ae(e)) + (n ? " off" : " on") + '"' + Gt(e) + '></button><div><div class="activityRowName">' + re(Ae(e)) + '</div><div class="activityRowMeta">' + re(Et(e)) + "</div></div></div>";
  }
  const L = (e) => {
    var n;
    return ((n = Ce.get(e)) == null ? void 0 : n.name) ?? Ae(e);
  }, _ = (e) => {
    var n;
    return ((n = Ce.get(e)) == null ? void 0 : n.text) ?? Et(e);
  };
  function I(e) {
    var r;
    const n = (r = Ce.get(e)) == null ? void 0 : r.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (n ? Gt("", n, L(e)) : Gt(e, An(e))) + '></div><div><div class="activityRowName">' + re(L(e)) + '</div><div class="activityRowMeta">' + re(_(e)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + re(L(e)) + '’s last 24 hours">' + od + '</button></div><svg class="tfGraph" data-graph="' + re(e) + '" role="img" aria-label="' + re(L(e)) + ', last 24 hours"></svg></div>';
  }
  function Y(e, n, r, d, p = "", y = null, h = "") {
    const x = j && j.key === e;
    return '<section class="card tfCard' + (h ? " " + h : "") + (x ? " open" : "") + '" data-tf data-k="' + re(e) + '" style="order:' + n + (x && j.h ? ";min-height:" + j.h + "px" : "") + '" aria-label="' + re(r) + '"><div class="activityHeader">' + (y ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + re(y) + '" aria-label="' + re(r + ", " + Et(y) + ". More info") + '">' + re(r) + "</button>" : '<div class="activityTitle">' + re(r) + "</div>") + "</div>" + (x ? I(j.id) : '<div class="activityRows">' + d.join("") + "</div>" + p) + "</section>";
  }
  function he(e, n) {
    const r = "readings:" + e.id, d = e.readings.map((p) => qa(r, p));
    return e.power != null && d.push(Bo("Power now", Aa(e.power), "mdi:flash")), Y(r, n, "Readings", d.concat(e.plugs.map(Po)));
  }
  function me(e, n) {
    var x;
    const r = "energy:" + e.id, [d, p] = [e.solar.find((S) => S.endsWith("_power")), e.solar.find((S) => S.endsWith("_today"))], y = [d, p].filter(Boolean).map((S) => qa(r, S)), h = Number(((x = w[d]) == null ? void 0 : x.state) || 0) * 1e3;
    return Je.grid && (y.push(qa(r, Je.grid)), y.push(Bo("House use", Aa(h + Number(w[Je.grid].state)), "mdi:home-lightning-bolt"))), Y(r, n, "Energy", y, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const pe = (e, n) => Y("plant:" + e.id, n, Ae(e.id), e.readings.map((r) => qa("plant:" + e.id, r)), "", e.id);
  function we(e, n, r, d, p, y, h = null) {
    const x = r == null ? null : Math.max(0, Math.min(1, r)), S = x == null ? 0 : Math.round(x * 100);
    return '<div class="tfBar ' + e + '" role="slider" tabindex="0" aria-label="' + re(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + S + '"' + (p ? ' aria-valuetext="' + re(p) + '"' : "") + ' data-drag="' + re(e + "|" + n) + '">' + (h != null ? '<span class="was" aria-hidden="true" style="left:' + h + '%"></span>' : "") + (y ? x == null ? "" : '<b style="left:' + S + '%"></b>' : '<i style="width:' + S + '%"></i>') + "</div>";
  }
  const be = "move-assistant-house-last-bright", Be = (() => {
    try {
      return JSON.parse(vi.get(be)) || {};
    } catch {
      return {};
    }
  })();
  let ze = 0;
  const Ke = (e, n) => {
    !n || Be[e] === n || (Be[e] = n, clearTimeout(ze), ze = setTimeout(() => vi.set(be, JSON.stringify(Be)), 500));
  }, qe = (e, n, r, d) => '<div class="tfStep" role="group" aria-label="' + re(e) + '"><button type="button" data-act="' + r + '" aria-label="Lower ' + re(e.toLowerCase()) + '">−</button><output>' + re(n) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + re(e.toLowerCase()) + '">+</button></div>', _e = (e, n, r) => '<div class="' + e + '" role="group" aria-label="' + re(n) + '">' + r.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + re(d.aria) + '"' : "") + ">" + (d.html || re(d.label)) + "</button>").join("") + "</div>", Ye = (e, n) => "width:" + Math.round(Math.max(0, Math.min(1, (e - n * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * n / 3).toFixed(2), Pe = (e) => "left:calc(3px + " + e / 100 + " * (100% - 6px))", nt = (e, n) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + re(Ae(e)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-blocks="' + re(e) + '">' + [0, 1, 2, 3].map((r) => '<span><i style="' + Ye(n, r) + '"></i><b' + (n >= (r + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (r + 1) * 25 + "%</b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Pe(n) + '">' + Math.round(n) + "%</output></div>";
  function gt(e, n) {
    e.querySelectorAll(":scope>span").forEach((d, p) => {
      d.firstElementChild.setAttribute("style", Ye(n, p)), d.lastElementChild.classList.toggle("lit", n >= (p + 1) * 25 - 12);
    });
    const r = e.querySelector(".tfTip");
    r.setAttribute("style", Pe(n)), r.textContent = Math.round(n) + "%", e.setAttribute("aria-valuenow", String(Math.round(n))), e.setAttribute("aria-valuetext", Math.round(n) + "% open");
  }
  const Ot = (e, n) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + re(Ae(e)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-drag="tilt|' + re(e) + '"><i style="width:calc((100% - 6px) * ' + n / 100 + ')"></i><span' + (n > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (n > 92 ? ' class="lit"' : "") + ">Open</span></div>", St = (e, n, r) => '<div class="tfCoverBtns" role="group" aria-label="' + re(Ae(e)) + '">' + [
    ct(e, Gh) && ["open", "Open", "open_cover", n >= 100 && !r],
    ct(e, Yh) && ["stop", "Stop", "stop_cover", !1],
    ct(e, Uh) && ["close", "Close", "close_cover", n <= 0 && !r]
  ].filter(Boolean).map(([d, p, y, h]) => '<button type="button" data-act="' + lt("cover", y, e) + '" aria-label="' + p + '"' + (h ? " disabled" : "") + ">" + Zh[d] + "</button>").join("") + "</div>", Qt = (e, n) => '<button class="tfIcon' + (n.art ? " art" : "") + '" type="button" data-act="' + n.button.act + '" aria-label="' + re(n.button.label) + '"' + (n.art ? ' style="background-image:url(&quot;' + re(n.art) + '&quot;)"' : Gt(e, n.icon)) + "></button>", _n = (e) => '<button class="tfName" type="button" data-more="' + re(e) + '" aria-label="' + re(Ae(e) + ", " + Et(e) + ". More info") + '"><span class="activityRowName">' + re(Ae(e)) + '</span><span class="activityRowMeta">' + re(Et(e)) + "</span></button>";
  function En(e, n = !1, r = null) {
    if (e.startsWith("light.") && Wn(e)) return '<div class="tfDac" data-k="' + re(e) + '" data-dac="' + (n ? "more:" : r ? "dash:" : "tile:") + re(e) + '"></div>';
    const d = ja(e), p = r || (n && e.startsWith("light.") ? ["bright"] : null), y = d.sections.map((h, x) => h && (!p || p.includes((d.parts || [])[x])) ? h : "").filter(Boolean);
    return '<div class="tfAction' + (d.on ? " on" : "") + '" data-k="' + re(e) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + wn(e) + '><div class="tfActionHead">' + Qt(e, d) + _n(e) + "</div>" + y.join("") + "</div>";
  }
  const rn = "dual-controller-v3", xi = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.4/dist/dual-axis-controller-v4.js";
  let On = null;
  async function Wa() {
    if (On || customElements.get(rn)) return;
    On = "loading";
    const e = await Promise.resolve().then(() => P({ type: "lovelace/resources" })).catch(() => null), n = Array.isArray(e) && e.some((d) => /dual-axis-controller/i.test(d.url || ""));
    if (await Promise.race([customElements.whenDefined(rn), new Promise((d) => setTimeout(d, n ? 8e3 : 0))]), customElements.get(rn)) return;
    const r = Object.assign(document.createElement("script"), { src: xi });
    r.onerror = () => {
      On = "failed", U();
    }, document.head.appendChild(r);
  }
  const qn = /* @__PURE__ */ new Map(), Io = (e) => (Vt.lightStyles[e] || Vt.lights) === "dac", ht = () => Vt.lights === "dac" || Object.values(Vt.lightStyles).includes("dac");
  function Wn(e) {
    return Io(e) && !!customElements.get(rn);
  }
  const Qn = (e) => Vt.lightPads[e] || Vt.dacPad, Va = () => {
    const e = o();
    return e && {
      ...e,
      themes: { ...e.themes || {}, darkMode: !m.classList.contains("light") },
      callService: (n, r, d, ...p) => e.callService(n, ...$r(n, r, d), ...p)
    };
  }, za = ".halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", Ho = ".hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}", Dt = (e, n) => {
    !e.shadowRoot || e.shadowRoot.querySelector("style[data-tf]") || (e.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Ho + (n ? za : "") })).dataset.tf = "");
  }, en = /* @__PURE__ */ new Map(), Dn = new ResizeObserver((e) => e.forEach(({ target: n }) => {
    const r = n.parentElement;
    !r || !n.offsetHeight || (r.style.removeProperty("min-height"), en.set(r.dataset.dac, r.offsetHeight));
  }));
  function yi(e) {
    e.querySelectorAll("[data-dac]").forEach((n) => {
      const r = n.dataset.dac, d = r.startsWith("dash:");
      let p = qn.get(r);
      if (!p) {
        const y = r.slice(r.indexOf(":") + 1);
        p = document.createElement(rn), p.setConfig({ type: "custom:" + rn, entity: y, pad: Qn(y), ...d ? { tap_action: { action: "none" } } : {} }), qn.set(r, p);
      }
      p.hass = Va(), p.parentNode !== n && n.replaceChildren(p, ...n.querySelectorAll(":scope > .tfEditChips")), !p.offsetHeight && en.has(r) && (n.style.minHeight = en.get(r) + "px"), Dn.observe(p), Dt(p, d);
    });
  }
  function wl() {
    const e = Va();
    qn.forEach((n, r) => {
      n.isConnected ? n.hass = e : qn.delete(r);
    });
  }
  customElements.whenDefined(rn).then(() => {
    v && (T != null && T.querySelector("[data-tf]")) && Wr(Ba);
  });
  const lo = (e, n, r) => Oe.has(e + "|" + n) ? Oe.get(e + "|" + n) : r;
  function ja(e) {
    var y;
    const n = w[e], r = n.attributes, d = e.split(".")[0], p = (h, x) => ({ act: lt(h, "toggle", e), label: x });
    if (d === "light") {
      const h = n.state === "on", x = No(e), [S, D] = Oa(e), F = lo("bright", e, so(n));
      h && Ke(e, so(n));
      const B = lo("ct", e, h && r.color_mode === "color_temp" ? r.color_temp_kelvin : null), $ = lo("hue", e, h && sd.includes(r.color_mode) && r.hs_color ? r.hs_color[0] : null);
      return { on: h, button: p("light", "Turn " + Ae(e) + (h ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Tt(e) && we("bright", e, F / 100, Ae(e) + " brightness", F + "%", !1, h ? null : Be[e] ?? null),
        x.includes("color_temp") && we("ct", e, B == null ? null : (B - S) / (D - S), Ae(e) + " warm to cool", B == null ? "" : Math.round(B) + " kelvin", !0),
        x.some((ye) => sd.includes(ye)) && we("hue", e, $ == null ? null : $ / 360, Ae(e) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const h = r.target_temp_step || 0.5, x = Number(r.temperature);
      return { on: n.state !== "off", tone: n.state === "cool" || r.hvac_action === "cooling" ? "cool" : "heat", button: p("climate", "Turn " + Ae(e) + (n.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(x) && qe("Target temperature", Ie(x) + " °C", lt("climate", "set_temperature", e, { temperature: x - h }), lt("climate", "set_temperature", e, { temperature: x + h })),
        _e("tfSeg", "Mode", (r.hvac_modes || []).map((S) => ({ label: bt(S), act: lt("climate", "set_hvac_mode", e, { hvac_mode: S }), pressed: n.state === S })))
      ] };
    }
    if (d === "cover") {
      const h = n.state === "opening" || n.state === "closing", x = n.state === "closed", S = fa(e), D = Xt(e);
      return { on: !x, tone: "blue", icon: Kh[ad(n)][x ? 1 : 0], button: p("cover", (x ? "Open " : "Close ") + Ae(e)), parts: ["blocks", "tilt", "buttons"], sections: [
        ct(e, Ac) && nt(e, S),
        D != null && Ot(e, D),
        St(e, S, h)
      ] };
    }
    if (d === "humidifier") {
      const h = Number(r.humidity);
      return { on: n.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: p("humidifier", "Turn " + Ae(e) + (n.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(h) && qe("Target humidity", h + "%", lt("humidifier", "set_humidity", e, { humidity: h - 1 }), lt("humidifier", "set_humidity", e, { humidity: h + 1 })),
        ((y = r.available_modes) == null ? void 0 : y.length) && _e("tfSeg", "Mode", r.available_modes.map((x) => ({ label: bt(x), act: lt("humidifier", "set_mode", e, { mode: x }), pressed: r.mode === x })))
      ] };
    }
    if (d === "media_player") {
      const h = n.state === "playing", x = n.state === "off" || n.state === "standby", S = lo("vol", e, r.volume_level), D = x ? { act: lt("media_player", ct(e, zh) ? "turn_on" : "toggle", e), label: "Turn " + Ae(e) + " on" } : n.state === "playing" || n.state === "paused" ? { act: lt("media_player", "media_play_pause", e), label: (h ? "Pause " : "Play ") + Ae(e) } : { act: lt("media_player", ct(e, jh) ? "turn_off" : "toggle", e), label: "Turn " + Ae(e) + " off" };
      return { on: !x, tone: "blue", art: !x && r.entity_picture ? r.entity_picture : null, button: D, parts: ["playback", "volume"], sections: x ? [] : [
        (ct(e, Sc) || ct(e, Tc) || ct(e, Cc) || ct(e, Lc)) && _e("tfSeg", "Playback", [
          { html: sl.prev, aria: "Previous", act: lt("media_player", "media_previous_track", e), disabled: !ct(e, Sc) },
          { html: h ? sl.pause : sl.play, aria: h ? "Pause" : "Play", act: lt("media_player", "media_play_pause", e), disabled: !(ct(e, Cc) || ct(e, Lc)) },
          { html: sl.next, aria: "Next", act: lt("media_player", "media_next_track", e), disabled: !ct(e, Tc) }
        ]),
        ct(e, Vh) && S != null && we("vol", e, S, Ae(e) + " volume", Math.round(S * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const h = n.state === "cleaning", x = r.rooms || [], S = (F) => x.includes(F) ? x.filter((B) => B !== F) : x.concat(F), D = lt("vacuum", h ? "pause" : "start", e, Wi(e) ? { rooms: x } : null);
      return { on: h || n.state === "returning", tone: "blue", button: { act: D, label: (h ? "Pause " : "Start ") + Ae(e) }, parts: ["controls", "rooms"], sections: [
        _e("tfSeg", Ae(e), [
          { label: h ? "Pause" : "Start", act: D },
          { label: "Dock", act: lt("vacuum", "return_to_base", e), disabled: n.state === "docked" },
          { label: "Locate", act: lt("vacuum", "locate", e) }
        ]),
        Wi(e) && _e("tfChips", "Rooms to clean", Je.rooms.filter((F) => F.id !== "balcony").map((F) => ({ label: F.name, act: lt("vacuum", "set_rooms", e, { rooms: S(F.name) }), pressed: x.includes(F.name) })))
      ] };
    }
    if (d === "lock") {
      const h = n.state === "locked";
      return { on: !h, tone: "heat", button: { act: lt("lock", h ? "unlock" : "lock", e), label: (h ? "Unlock " : "Lock ") + Ae(e) }, parts: ["controls"], sections: [
        _e("tfSeg", Ae(e), [
          { label: "Lock", act: lt("lock", "lock", e), pressed: h },
          { label: "Unlock", act: lt("lock", "unlock", e), pressed: n.state === "unlocked" },
          ct(e, af) && { label: "Open", act: lt("lock", "open", e), pressed: n.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const h = n.state === "disarmed";
      return { on: !h, tone: n.state === "triggered" ? "alarm" : "blue", button: { act: lt("alarm_control_panel", h ? "alarm_arm_away" : "alarm_disarm", e), label: h ? "Arm " + Ae(e) + ", away" : "Disarm " + Ae(e) }, parts: ["controls"], sections: [
        _e("tfSeg", Ae(e), of.filter(([, , , x]) => !x || ct(e, x)).map(([x, S, D]) => ({ label: S, act: lt("alarm_control_panel", D, e), pressed: n.state === x })))
      ] };
    }
    if (d === "valve") {
      const h = n.state === "open";
      return { on: h, tone: "blue", icon: "mdi:sprinkler-variant", button: p("valve", (h ? "Close " : "Open ") + Ae(e)), parts: ["controls"], sections: [
        _e("tfSeg", Ae(e), [
          { label: "Open", act: lt("valve", "open_valve", e), pressed: h },
          { label: "Close", act: lt("valve", "close_valve", e), pressed: !h }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Ae(e) }, sections: [] };
  }
  const Fo = (e) => (Number.isInteger(Number(e)) ? String(Number(e)) : Ie(e)) + "°";
  function fs(e) {
    const n = (ie) => e.readings.find((H) => vt(H).device_class === ie), r = n("temperature"), d = n("humidity"), p = (ie) => {
      var H;
      return Number((H = w[ie]) == null ? void 0 : H.state);
    }, y = (ie) => e.actions.filter((H) => ie.test(H)), h = e.lights.filter((ie) => {
      var H;
      return ((H = w[ie]) == null ? void 0 : H.state) === "on";
    }), x = y(/^cover\./), S = x.filter((ie) => {
      var H;
      return ((H = w[ie]) == null ? void 0 : H.state) !== "closed";
    }), D = [...new Set(x.map((ie) => ad(w[ie])))], F = y(/^climate\./)[0], B = y(/^humidifier\./)[0], $ = y(/^media_player\./), ye = $.find((ie) => {
      var H;
      return ((H = w[ie]) == null ? void 0 : H.state) === "playing";
    }) || $.find((ie) => {
      var H;
      return ((H = w[ie]) == null ? void 0 : H.state) === "paused";
    }), Re = e.plugs.filter((ie) => {
      var H;
      return ((H = w[ie]) == null ? void 0 : H.state) === "on";
    }), ce = [];
    if (r && Number.isFinite(p(r)) && ce.push({ key: "temp", id: r, kind: "reading", icon: ao.temp, label: "Temperature", value: Ie(p(r)) + "°" }), d && Number.isFinite(p(d)) && ce.push({ key: "hum", id: d, kind: "reading", icon: ao.hum, label: "Humidity", value: Math.round(p(d)) + "%" }), e.lights.length && ce.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: ao.lights,
      label: "Lights",
      value: h.length ? h.length + " of " + e.lights.length + " on" : "All off",
      short: h.length ? h.length + " on" : "Off",
      on: h.length > 0,
      light: h.length ? Ta(h[0]) : "",
      acts: e.lights.map((ie) => ["light", h.length ? "turn_off" : "turn_on", ie]),
      aria: (h.length ? "Turn off" : "Turn on") + " the lights in " + e.name
    }), x.length) {
      const ie = D.length === 1 ? $h[D[0]] : "covers", H = Math.round(x.reduce((Le, He) => Le + Fn(He), 0) / x.length);
      ce.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: ao.covers,
        label: bt(ie),
        value: H <= 0 ? "Closed" : H >= 100 ? "Open" : H + "% open",
        short: H <= 0 ? "Closed" : H + "%",
        on: S.length > 0,
        acts: x.map((Le) => ["cover", S.length ? "close_cover" : "open_cover", Le]),
        aria: (S.length ? "Close the " : "Open the ") + ie + " in " + e.name
      });
    }
    if (F) {
      const ie = vt(F), H = w[F].state === "off";
      ce.push({
        key: "climate",
        kind: "control",
        tone: ie.hvac_action === "cooling" ? "cool" : "heat",
        icon: ao.climate,
        label: Ae(F),
        value: H ? "Off" : bt(ie.hvac_action || w[F].state) + " · " + Fo(ie.temperature),
        short: H ? "Off" : Fo(ie.temperature),
        on: !H,
        acts: [["climate", "toggle", F]],
        aria: "Turn " + Ae(F) + (H ? " on" : " off")
      });
    }
    if (B) {
      const ie = w[B].state === "on";
      ce.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: ao.humidifier,
        label: Ae(B),
        value: ie ? "On · " + vt(B).humidity + "%" : "Off",
        short: ie ? vt(B).humidity + "%" : "Off",
        on: ie,
        acts: [["humidifier", "toggle", B]],
        aria: "Turn " + Ae(B) + (ie ? " off" : " on")
      });
    }
    if ($.length) {
      const ie = ye || $[0], H = w[ie], Le = H.state === "playing";
      ce.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: ao.media,
        label: Ae(ie),
        value: Et(ie),
        short: Le ? "Playing" : H.state === "paused" ? "Paused" : bt(H.state),
        on: Le,
        acts: [["media_player", H.state === "playing" || H.state === "paused" ? "media_play_pause" : "toggle", ie]],
        aria: (Le ? "Pause " : "Play ") + Ae(ie)
      });
    }
    return e.plugs.length && ce.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: ao.plugs,
      label: "Plugs",
      value: Re.length ? Re.length + " of " + e.plugs.length + " on" : "All off",
      short: Re.length ? Re.length + " on" : "Off",
      on: Re.length > 0,
      acts: e.plugs.map((ie) => ["switch", Re.length ? "turn_off" : "turn_on", ie]),
      aria: (Re.length ? "Turn off" : "Turn on") + " the plugs in " + e.name
    }), e.alerts.forEach((ie) => ce.push(vt(ie).device_class === "moisture" ? { key: "alert:" + ie, kind: "alert", icon: ao.alert, label: "Water leak" } : { key: "note:" + ie, kind: "note", icon: ao.door, label: Ae(ie) + " " + Et(ie).toLowerCase() })), ce;
  }
  const Zi = (e, n) => {
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
  }, ms = (e, n, r) => '<button class="' + n + (e.on ? " on" : "") + '" type="button" data-tone="' + e.tone + '" data-acts="' + ma(e.acts) + '" aria-label="' + re(e.aria) + '" aria-pressed="' + e.on + '">' + r + "</button>", _r = (e) => '<button class="tfAName" type="button" data-go="' + re(e.id) + '" aria-label="Open ' + re(e.name) + '">' + re(e.name) + "</button>";
  function gs(e, n, r = !1) {
    const d = n.find((x) => x.key === "lights"), p = !!(d != null && d.on), y = p && d.light ? ' data-light style="' + d.light + '"' : "", h = '<span class="tfAreaGlyph"' + Gt("area:" + e.id, e.icon || "mdi:texture-box", e.name) + "></span>";
    return r || !d ? '<span class="tfIcon tfAreaIcon' + (p ? " on" : "") + '"' + y + ' aria-hidden="true">' + h + "</span>" : '<button class="tfIcon tfAreaIcon' + (p ? " on" : "") + '" type="button"' + y + ' data-acts="' + ma(d.acts) + '" aria-label="' + re(d.aria) + '" aria-pressed="' + p + '">' + h + "</button>";
  }
  const xl = (e) => e.filter((n) => n.kind === "alert" || n.kind === "note").map((n) => '<span class="sourceTag">' + re(n.label) + "</span>").join(" "), vs = (e) => e.readings.find((n) => vt(n).device_class === "temperature") || [...e.readings, ...e.solar, ...e.openings, ...e.actions, ...e.plugs].find((n) => w[n]) || null, ki = (e, n) => {
    const r = Ae(n);
    return r.toLowerCase().startsWith(e.name.toLowerCase() + " ") ? bt(r.slice(e.name.length + 1)) : r;
  };
  function bs(e) {
    const n = w[e], r = vt(e), d = e.split(".")[0], p = Number(n.state);
    if (n.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(p)) {
      if (r.device_class === "temperature") return { text: Fo(p) };
      const y = r.unit_of_measurement || "";
      return y === "%" ? { text: Math.round(p) + "%" } : { text: Ie(p, Number.isInteger(p) ? 0 : 1), unit: y };
    }
    if (d === "climate" && (r.current_temperature ?? r.temperature) != null) return { text: Fo(r.current_temperature ?? r.temperature) };
    if (d === "light") return { text: n.state !== "on" ? "Off" : Tt(e) ? so(n) + "%" : "On" };
    if (d === "cover") {
      const y = Fn(e);
      return { text: y <= 0 ? "Closed" : y >= 100 ? "Open" : y + "%" };
    }
    return d === "humidifier" ? { text: n.state === "on" ? r.humidity + "%" : "Off" } : d === "media_player" ? { text: n.state === "playing" ? "Playing" : n.state === "paused" ? "Paused" : bt(n.state) } : { text: Et(e) };
  }
  const ws = (e, n, r) => {
    const d = r.find((x) => x.key === "temp"), p = r.find((x) => x.key === "hum"), y = vt(n), h = w[n].state === "off";
    return n.startsWith("climate.") ? [ki(e, n), h ? "Off" : bt(y.hvac_action || w[n].state) + (y.temperature != null ? " · " + Fo(y.temperature) : ""), p && p.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === n) && ki(e, n), d && d.id !== n && d.value, p && p.id !== n && p.value + " humidity"].filter(Boolean).join(" · ");
  };
  function co(e, n, r) {
    const d = r && bs(r), p = r ? ws(e, r, n) : "", y = (x) => {
      const S = Zi(e, x.key);
      return S.length === 1 ? S[0] : "group:" + e.id + ":" + x.key;
    }, h = n.filter((x) => x.kind === "control").slice(0, 4).map((x) => '<div class="tfATile' + (x.on ? " on" : "") + '" data-tone="' + x.tone + '"' + (x.light ? ' data-light style="' + x.light + '"' : "") + ">" + ms(x, "tfIcon", x.icon) + '<button class="tfName" type="button" data-more="' + re(y(x)) + '" aria-label="' + re(e.name + " " + x.label.toLowerCase() + ", " + x.value + ". Open") + '"><span class="activityRowName">' + re(x.label) + '</span><span class="activityRowMeta">' + re(x.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + gs(e, n) + '<div class="tfATitle">' + _r(e) + xl(n) + "</div></div>" + (r ? '<button class="tfABig" type="button" data-more="' + re(r) + '" aria-label="' + re(Ae(r) + ", " + Et(r) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + re(d.text) + (d.unit ? '<span class="tfABigUnit">' + re(d.unit) + "</span>" : "") + "</span>" + (p ? '<span class="tfABigSub">' + re(p) + "</span>" : "") + "</button>" : "") + (h.length ? '<div class="tfATiles">' + h.join("") + "</div>" : "");
  }
  function xs(e) {
    const n = e.id === ge, r = fs(e), d = vs(e), p = d && bs(d), y = [...r.filter((h) => h.kind === "control"), ...r.filter((h) => h.kind !== "control" && h.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (n ? " active" : "") + '" data-area="' + re(e.id) + '" tabindex="0" aria-expanded="' + n + '" aria-label="' + re(e.name) + '"><div class="panelExpanded"' + (n ? "" : " inert") + ">" + co(e, r, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + gs(e, r, !0) + '<span class="tfACName">' + re(e.name) + '</span></div><span class="tfACMain">' + (p ? re(p.text + (p.unit ? " " + p.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + y.map((h) => '<span class="tfACTile"><span class="tfIcon' + (h.kind === "alert" ? " alert" : "") + '"' + (h.on && h.light ? ' data-light style="' + h.light + '"' : "") + ">" + h.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Ga = [];
  const Oo = (e) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + e + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + Ga.map(xs).join("") + "</section></div>", ys = () => [
    { key: "home", name: "Home", ids: Je.homeVacuums },
    ...Je.rooms.map((e) => ({ key: "room:" + e.id, name: e.name, room: e, ids: e.actions }))
  ], Mi = (e, n, r) => e + " " + (e === 1 ? n : r), Rn = () => (V.favourites ?? ae.favorite_entities ?? []).filter((e) => w[e]);
  function Er() {
    if (!We) {
      const n = Object.entries(et).sort((d, p) => p[1] - d[1]).map(([d]) => d), r = Je.rooms.flatMap((d) => d.actions);
      We = [.../* @__PURE__ */ new Set([...fe, ...n, ...r.filter((d) => ja(d).on), ...r])];
    }
    const e = Rn();
    return We.filter((n) => w[n] && w[n].state !== "unavailable" && !e.includes(n));
  }
  let It = !1;
  function ks() {
    if (!It || V.favSeeded || !Je.rooms.length) return;
    const e = (r) => Object.keys(w).find((d) => Wi(d) && r(d)), n = [e((r) => r.startsWith("climate.")), e((r) => r.startsWith("cover.") && /curtain/.test(r)), e((r) => r.startsWith("valve.")), Je.security.locks[0]];
    V = { ...V, favourites: [.../* @__PURE__ */ new Set([...V.favourites ?? ae.favorite_entities ?? [], ...n.filter(Boolean)])], favSeeded: !0 }, Ln();
  }
  const Ki = () => V.suggest ?? !ae.hide_suggested_entities;
  function Ms() {
    const e = new Set(V.favHidden || []), n = Rn().filter((d) => !e.has(d)), r = Ki() ? Er().filter((d) => !e.has(d) && Za(d)) : [];
    return [...n, ...r].slice(0, sf);
  }
  const qo = (e) => {
    const n = Rn().includes(e);
    return '<button class="tfStar" type="button" data-star="' + re(e) + '" aria-pressed="' + n + '" aria-label="Favourite: ' + re(Ae(e)) + '">' + nf(n) + "</button>";
  };
  function Dr(e, { area: n = !1, star: r = !1, plain: d = !1, say: p = null, alert: y = !1 } = {}) {
    var Re, ce, ie, H, Le, He;
    const h = d && ((Le = (Re = o()) == null ? void 0 : Re.devices) == null ? void 0 : Le[(H = (ie = (ce = o()) == null ? void 0 : ce.entities) == null ? void 0 : ie[e]) == null ? void 0 : H.device_id]), x = h && (h.name_by_user || h.name) || Ae(e), S = e.split(".")[0], D = !d && dl.includes(S) ? ja(e) : null, F = D ? D.on : ["on", "open", "playing"].includes((He = w[e]) == null ? void 0 : He.state), B = d ? null : D ? D.button : Xh.includes(S) ? { act: lt(S, "toggle", e), label: "Turn " + Ae(e) + (F ? " off" : " on") } : S === "scene" || S === "script" ? { act: lt(S, "turn_on", e), label: "Run " + Ae(e) } : null, $ = (p ?? Et(e)) + (n && xt.get(e) ? " · " + xt.get(e) : ""), ye = (D == null ? void 0 : D.icon) || An(e);
    return '<div class="activityRow' + (B ? " tfPlug" : "") + (F ? " on" : "") + (r ? " tfPick" : "") + (y ? " alert" : "") + '" data-k="' + re((n ? "fav:" : "row:") + e) + '" data-tone="' + (S === "light" ? "light" : (D == null ? void 0 : D.tone) || "blue") + '"' + wn(e) + ">" + (B && !r ? '<button class="tfIcon" type="button" data-act="' + B.act + '" aria-label="' + re(B.label) + '"' + Gt(e, ye) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Gt(e, ye) + "></div>") + '<button class="tfName" type="button" data-more="' + re(e) + '" aria-label="' + re(x + ", " + $ + ". More info") + '"><span class="activityRowName">' + re(x) + '</span><span class="activityRowMeta">' + re($) + "</span></button>" + (r ? qo(e) : "") + "</div>";
  }
  const qt = () => {
    var e;
    return w[(e = V.sources) == null ? void 0 : e.weather] ? V.sources.weather : w["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(w).find((n) => n.startsWith("weather."));
  };
  function Ua() {
    var r;
    const e = (d) => Object.keys(w).filter((p) => p.startsWith("binary_sensor.") && d.includes(vt(p).device_class));
    return ((r = de.alert_entities) != null && r.length ? de.alert_entities : [...e(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...e(ll).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => w[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(w[d.entity].state) }));
  }
  function Wo() {
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
  function yl() {
    var ie;
    const e = ((ie = o()) == null ? void 0 : ie.entities) || {}, n = (H) => vt(H).device_class, r = Object.keys(w).filter((H) => H.startsWith("sensor.") && n(H) === "battery" || H.startsWith("binary_sensor.") && ["battery", "problem"].includes(n(H))), d = Je.rooms.flatMap((H) => H.plants.map((Le) => Le.id));
    if (!r.length && !d.length) return null;
    const p = (H) => {
      var He;
      const Le = (He = e[H]) == null ? void 0 : He.device_id;
      return !!Le && Object.keys(w).some((st) => {
        var $t;
        return st.startsWith("binary_sensor.") && (($t = e[st]) == null ? void 0 : $t.device_id) === Le && n(st) === "battery_charging" && w[st].state === "on";
      });
    }, y = (H) => H.startsWith("vacuum.") ? vt(H).battery_level <= 20 && w[H].state !== "docked" : H.startsWith("binary_sensor.") ? n(H) === "battery" && w[H].state === "on" : parseFloat(w[H].state) <= 20 && !p(H), h = [...r, ...Je.vacuums].filter((H) => w[H] && y(H)), x = [...r.filter((H) => n(H) === "problem" && w[H].state === "on"), ...d.filter((H) => {
      var Le;
      return ((Le = w[H]) == null ? void 0 : Le.state) === "problem";
    })], S = r.filter((H) => w[H].state === "unavailable"), D = [.../* @__PURE__ */ new Set([...h, ...x, ...S])], F = (H) => {
      const Le = parseFloat(w[H].state);
      return n(H) === "battery" && Number.isFinite(Le) ? Le : 101;
    }, B = [...d, ...Je.vacuums, ...[...r].sort((H, Le) => F(H) - F(Le))].filter((H) => w[H] && !D.includes(H)), $ = /* @__PURE__ */ new Map();
    B.forEach((H) => {
      var He;
      const Le = ((He = Je.areaOf) == null ? void 0 : He.call(Je, H)) || "";
      $.set(Le, [...$.get(Le) || [], H]);
    });
    const ye = (H) => {
      const Le = Je.rooms.findIndex((He) => He.id === H);
      return H === "" ? 1 / 0 : Le < 0 ? Je.rooms.length : Le;
    }, Re = [...$.keys()].sort((H, Le) => ye(H) - ye(Le)), ce = (H) => {
      var Le, He, st, $t;
      return ((Le = Je.rooms.find((zt) => zt.id === H)) == null ? void 0 : Le.name) || (($t = (st = (He = o()) == null ? void 0 : He.areas) == null ? void 0 : st[H]) == null ? void 0 : $t.name) || H;
    };
    return {
      value: [h.length && Mi(h.length, "low battery", "low batteries"), x.length && Mi(x.length, "problem", "problems"), S.length && Mi(S.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: D, alert: !0 }, ...Re.map((H) => ({ name: H ? ce(H) : Re.length > 1 ? "Other devices" : "Devices", ids: $.get(H) }))].filter((H) => H.ids.length)
    };
  }
  function Ci() {
    var Pn;
    const e = Je.rooms, n = Je.security, r = (je, Pt) => je.actions.filter((br) => Pt.test(br)), d = (je) => e.map((Pt) => ({ name: Pt.name, ids: je(Pt) })).filter((Pt) => Pt.ids.length), p = e.flatMap((je) => je.lights), y = p.filter((je) => {
      var Pt;
      return ((Pt = w[je]) == null ? void 0 : Pt.state) === "on";
    }).length, h = e.map((je) => je.readings.find((Pt) => vt(Pt).device_class === "temperature")).filter(Boolean).map((je) => Number(w[je].state)).filter(Number.isFinite), [x, S] = [Ie(Math.min(...h)), Ie(Math.max(...h))], D = e.flatMap((je) => r(je, /^media_player\./)), F = D.filter((je) => {
      var Pt;
      return ((Pt = w[je]) == null ? void 0 : Pt.state) === "playing";
    }).length, B = Ua(), $ = B.filter((je) => je.severity === "warning" && je.on).length, ye = n.locks.filter((je) => {
      var Pt;
      return ["unlocked", "jammed", "open"].includes((Pt = w[je]) == null ? void 0 : Pt.state);
    }).length, Re = n.alarms.filter((je) => {
      var Pt;
      return ((Pt = w[je]) == null ? void 0 : Pt.state) === "disarmed";
    }).length, ce = $ ? Mi($, "warning", "warnings") : null, ie = ye ? ye + " unlocked" : Re ? Re + " disarmed" : ce ? null : "All secure", H = yl(), Le = e.flatMap((je) => je.solar), He = Le.find((je) => je.endsWith("_power")), st = {
      light: p.length && { value: y ? y + " on" : "All off", groups: d((je) => je.lights) },
      climate: h.length && { value: x === S ? x + "°" : x + " - " + S + "°", groups: d((je) => [...je.readings.filter((Pt) => ["temperature", "humidity"].includes(vt(Pt).device_class)), ...r(je, /^(climate|humidifier)\./)]) },
      security: (n.alarms.length || n.locks.length) && { value: [ce, ie].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...n.alarms, ...n.locks] }, { name: "Doors and windows", ids: n.openings }].filter((je) => je.ids.length) },
      media_players: D.length && { value: F ? F + " playing" : "No media playing", groups: d((je) => r(je, /^media_player\./)) },
      maintenance: H,
      energy: Je.grid && { value: Aa(Number(((Pn = w[He]) == null ? void 0 : Pn.state) || 0) * 1e3 + Number(w[Je.grid].state)) + " now", groups: [{ name: "Energy", ids: [...Le, Je.grid] }] }
    }, $t = [], zt = B.filter((je) => je.severity !== "warning" && je.on);
    return zt.length && $t.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Mi(zt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: zt.map((je) => je.entity) }] }), Wo().forEach((je) => {
      je.type !== "summary" ? $t.push({ key: "path:" + je.path, name: je.label || je.path, icon: je.icon || "mdi:link-variant", colour: "", value: "" }) : !je.hidden && st[je.key] && !(V.hiddenSums || []).includes(je.key) && $t.push({ key: je.key, ...id[je.key], ...st[je.key] });
    }), $t;
  }
  const $i = (e) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + re(e.key) + '" data-k="sum:' + re(e.key) + '" aria-label="' + re(e.name + (e.value ? ", " + e.value : "")) + '"' + (e.key === "alerts" ? ' style="--sum:' + e.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + Gt(e.id || "", e.icon, e.name) + '></div><div><div class="activityRowName">' + re(e.name) + "</div>" + (e.value ? '<div class="activityRowMeta">' + re(e.value) + "</div>" : "") + "</div></div>";
  function Si(e) {
    const n = Rn();
    V = { ...V, favourites: n.includes(e) ? n.filter((r) => r !== e) : [...n, e], favHidden: (V.favHidden || []).filter((r) => r !== e) }, Ln(), yn();
  }
  function Ya(e) {
    document.querySelector("home-assistant") && (ve.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function _a(e, n) {
    if (e.startsWith("path:")) {
      Ya(e.slice(5));
      return;
    }
    Ia("summary:" + e, n);
  }
  async function kl() {
    const e = (h) => Promise.resolve().then(() => P(h)).catch(() => null), [n, r, d, p] = await Promise.all([
      e({ type: "frontend/get_user_data", key: _c }),
      e({ type: "frontend/get_system_data", key: "home" }),
      e({ type: "frontend/get_system_data", key: "security" }),
      e({ type: "usage_prediction/common_control" })
    ]), y = (n == null ? void 0 : n.value) || {};
    V = { favourites: y.favourites ?? null, sources: y.sources, hiddenSums: y.hiddenSums, dash: y.dash, named: y.named, favHidden: y.favHidden, suggest: y.suggest, favSeeded: y.favSeeded }, ae = (r == null ? void 0 : r.value) || {}, de = (d == null ? void 0 : d.value) || {}, fe = Array.isArray(p == null ? void 0 : p.entities) ? p.entities : [], We = null, Object.keys(w).length && yn(), Cs(), It = !0, ks();
  }
  const Ea = "HomeCore";
  async function Cs() {
    var d, p, y;
    const e = location.pathname.split("/")[1], n = V.named || [];
    if (!((p = (d = o()) == null ? void 0 : d.user) != null && p.is_admin) || !e || n.includes(e)) return;
    const r = () => {
      V = { ...V, named: [...n, e] }, Ln();
    };
    try {
      const h = (y = await P({ type: "lovelace/dashboards/list" })) == null ? void 0 : y.find((D) => D.url_path === e);
      if (!h || h.mode === "yaml") return;
      if (h.title === Ea) {
        r();
        return;
      }
      const x = await P({ type: "lovelace/config", url_path: e }), S = ((x == null ? void 0 : x.views) || []).flatMap((D) => [...D.cards || [], ...(D.sections || []).flatMap((F) => F.cards || [])]);
      if (!S.length || !S.every((D) => (D == null ? void 0 : D.type) === "custom:move-assistant-card" && D.layout === "test-focus")) return;
      await P({ type: "lovelace/dashboards/update", dashboard_id: h.id, title: Ea }), r();
    } catch {
    }
  }
  let Nn = null, Xi = 0, Rr = !1;
  const Ji = (e) => {
    const n = e.split(".")[0], r = vt(e).device_class;
    return rf.includes(n) && (n !== "binary_sensor" || ll.includes(r) || !!Hc[r]);
  }, Ti = (e) => e.startsWith("binary_sensor.") ? Hc[vt(e).device_class] : null;
  async function Ss() {
    var e;
    if (!(Rr || Date.now() - Xi < 30 * 1e3)) {
      Rr = !0, Xi = Date.now();
      try {
        const n = Object.keys(((e = o()) == null ? void 0 : e.states) || {}).filter(Ji), r = n.length ? await P({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: n }) : null;
        Nn = Array.isArray(r) ? r.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        Nn = null;
      }
      Rr = !1, yn();
    }
  }
  function Ml() {
    const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = (p) => {
      if (!w[p.entity_id] || !Ji(p.entity_id) || !Za(p.entity_id) || ["unavailable", "unknown"].includes(p.state)) return;
      if (Ti(p.entity_id)) {
        const h = n.get(p.entity_id);
        p.state === "on" ? (!h || p.when > h.when + 1) && n.set(p.entity_id, { ...p, alarm: !0, cleared: null }) : h && !h.cleared && p.when > h.when && (h.cleared = p.when);
        return;
      }
      const y = e.get(p.entity_id);
      (!y || p.when > y.when + 1) && e.set(p.entity_id, p);
    };
    [...Nn || []].sort((p, y) => p.when - y.when).forEach(r);
    const d = Nn ? Xi / 1e3 - 5 : 0;
    return Object.keys(w).forEach((p) => {
      var x;
      const y = w[p], h = y.last_changed ? Date.parse(y.last_changed) / 1e3 : 0;
      h > d && r({ entity_id: p, state: y.state, when: h, context_user_id: (x = y.context) == null ? void 0 : x.user_id });
    }), [...e.values(), ...n.values()].sort((p, y) => y.when - p.when).slice(0, lf);
  }
  function Qi(e) {
    var d;
    const n = e.context_user_id && Object.keys(w).find((p) => p.startsWith("person.") && vt(p).user_id === e.context_user_id);
    if (n) return Ae(n);
    const r = (d = o()) == null ? void 0 : d.user;
    return r && e.context_user_id === r.id ? r.name : ["automation", "script"].includes(e.context_domain) || e.context_event_type === "automation_triggered" ? e.context_name || "Home Assistant" : "";
  }
  function Ts(e) {
    const n = e.entity_id.split(".")[0], r = String(e.state);
    return n === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[r] || bt(r).toLowerCase() : n === "cover" || n === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[r] || bt(r).toLowerCase() : n === "binary_sensor" ? r === "on" ? "opened" : "closed" : n === "climate" ? r === "off" ? "turned off" : "set to " + bt(r).toLowerCase() : n === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[r] || bt(r).toLowerCase() : n === "alarm_control_panel" ? (Ic[r] || bt(r)).toLowerCase() : n === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[r] || bt(r).toLowerCase() : r === "on" ? "turned on" : r === "off" ? "turned off" : bt(r).toLowerCase();
  }
  function Li(e) {
    const n = e.entity_id, r = e.alarm && Ti(n), d = Ae(n) + " " + (r ? r[0] : Ts(e)), p = r ? Nt(e.when * 1e3) + (e.cleared ? " · " + r[1] + " since " + Nt(e.cleared * 1e3) : "") : [Qi(e), Nt(e.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (r ? " alert" : "") + '"><div class="tfIcon' + (r ? " alert" : "") + '" aria-hidden="true"' + Gt(n, An(n)) + '></div><button class="tfName" type="button" data-more="' + re(n) + '" data-at="' + Math.round(e.when * 1e3) + '" aria-label="' + re(d + ", " + p + ". More info") + '"><span class="activityRowName">' + re(d) + '</span><span class="activityRowMeta">' + re(p) + "</span></button></div>";
  }
  let Ai = null, Vo = 0;
  const uo = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Nr() {
    var n;
    if (Date.now() - Vo < 5 * 60 * 1e3) return;
    Vo = Date.now();
    const e = [];
    try {
      const r = ((n = await P({ type: "energy/get_prefs" })) == null ? void 0 : n.energy_sources) || [], d = (p) => r.filter((y) => y.type === p).flatMap((y) => p === "grid" ? (y.flow_from || []).map((h) => h.stat_energy_from) : [y.stat_energy_from]).filter(Boolean);
      for (const [p, y, h] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!h.length) continue;
        const x = await Promise.all(h.map((S) => Promise.resolve(P({ type: "recorder/statistic_during_period", statistic_id: S, calendar: { period: "day" }, types: ["change"] })).then((D) => Number(D == null ? void 0 : D.change) || 0, () => 0)));
        e.push({ key: p, name: y, id: h[0], value: x.reduce((S, D) => S + D, 0), unit: vt(h[0]).unit_of_measurement || (p === "gas" || p === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Ai = e, yn();
  }
  let Da = null;
  function zo() {
    var y;
    const e = Ai != null && Ai.length ? Ai : uo.map(([h, x, S, D]) => {
      const F = "sensor.made_up_energy_" + h;
      return w[F] = { entity_id: F, state: String(S), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: x + " today", unit_of_measurement: D, state_class: "total_increasing" } }, { key: h, name: x, id: F, value: S, unit: D };
    });
    Ce.clear(), e.some((h) => h.id === Da) || (Da = e[0].id);
    const n = e.map((h) => {
      const x = Number(h.value).toLocaleString(void 0, { maximumFractionDigits: h.value < 10 ? 2 : 1 }) + " " + h.unit, S = df[h.key], D = h.id === Da;
      return Ce.set(h.id, { name: h.name, text: x, icon: S }), '<div class="activityRow tap' + (D ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + re(h.id) + '" aria-pressed="' + D + '" aria-label="' + re(h.name + ", " + x) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Gt("", S, h.name) + '></div><div><div class="activityRowName">' + re(h.name) + '</div><div class="activityRowMeta">' + re(x) + "</div></div></div>";
    }), r = e.find((h) => h.id === Da), d = (((y = Rt().opts.energy) == null ? void 0 : y.graph) || "above") === "below", p = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + re(r.id) + '" role="img" aria-label="' + re(r.name) + ', last 24 hours"></svg></div>';
    return Y("dash:energy", 0, "Energy today", n, p, null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function _i(e) {
    const n = T.querySelector(".tfDash-energy"), r = n == null ? void 0 : n.querySelector(".tfDashGraph svg");
    !r || e === Da || (Da = e, n.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const p = d.dataset.energyPick === e;
      d.classList.toggle("picked", p), d.setAttribute("aria-pressed", String(p));
    }), r.dataset.graph = e, r.dataset.drawn = "", gn.set("dash:energy", zo()), vo(!0));
  }
  function Ei(e) {
    var p;
    if ((p = window.matchMedia) != null && p.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [n, r] = e.querySelectorAll("path");
    if (!(r != null && r.getTotalLength)) return;
    const d = r.getTotalLength();
    r.animate([{ strokeDasharray: d, strokeDashoffset: d }, { strokeDasharray: d, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), n == null || n.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let jo = null, ra = 0;
  const Za = (e) => !e.startsWith("light.") || cf.includes((xt.get(e) || "").toLowerCase()), Ls = () => Math.max(2, Ka((T == null ? void 0 : T.clientWidth) || 0).n), Cl = (e) => {
    const n = ja(e), r = n.sections.findIndex(Boolean);
    return r < 0 ? [] : [n.parts[r]];
  };
  function Go(e) {
    const n = Rt().tiles;
    if (n) return n.filter((d) => w[d]);
    if (!jo) {
      const d = (p) => {
        var y;
        return (((y = w[p]) == null ? void 0 : y.state) === "on" ? 1e6 : 0) + (et[p] || 0);
      };
      jo = {
        lights: Je.rooms.flatMap((p) => p.lights).filter((p) => {
          var y;
          return Za(p) && ((y = w[p]) == null ? void 0 : y.state) !== "unavailable";
        }).sort((p, y) => d(y) - d(p) || Ae(p).localeCompare(Ae(y))),
        climates: Je.rooms.flatMap((p) => p.actions.filter((y) => y.startsWith("climate.")))
      };
    }
    const r = jo.climates.filter((d) => w[d]).slice(0, e > 3 ? 2 : 1);
    return [...jo.lights.filter((d) => w[d]).slice(0, Math.max(0, e - r.length)), ...r];
  }
  const Uo = (e, n, r, d) => (p) => '<section class="card tfCard tfDashCard ' + e + '" data-tf data-k="' + n + '" aria-label="' + r + '">' + (d ? '<div class="activityHeader"><div class="activityTitle">' + r + "</div></div>" : "") + '<div class="activityRows">' + p + "</div></section>";
  function er(e, n) {
    var y, h;
    e.dash = !0, e.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + re(((h = (y = o()) == null ? void 0 : y.config) == null ? void 0 : h.location_name) || "Home") + "</h1>" }), n.length && e.push({ key: "sums", wrap: (x) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Uo("tfDash-bar", "sums-bar", "Summaries", !1)(x).replace(" data-tf", "") + "</div>", tiles: n.map((x) => ({ key: "sum:" + x.key, html: $i(x) })) }), Ga.length && e.push({ key: "areas", html: Oo(0) });
    const r = Ms();
    r.length && e.push({ key: "favs", wrap: Uo("tfDash-favs", "favs", "Favourites", !0), tiles: r.map((x) => ({ key: "fav:" + x, html: Dr(x, { area: !0 }) })) });
    const d = Ml();
    e.push({ key: "dash:act", html: Y("dash:act", 0, "Activity", d.length ? d.map(Li) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), e.push({ key: "dash:energy", html: zo() });
    const p = Ls();
    return ra = p, Go(p >= 3 ? p : p * 2).forEach((x) => e.push({
      key: "dash:tile:" + x,
      wrap: (S) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + re(x) + '">' + S + "</div>",
      tiles: [{ key: x, html: En(x, !1, Cl(x)) }]
    })), Ss(), Nr(), e;
  }
  const Yo = 252, Jt = 16, Br = 230, Zo = 60, ga = Zo + Jt, Ko = 5, Sl = 3, Cn = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average" }, Di = ["wx", "favs", "act", "energy", "avg"], $o = { wx: Ko, areas: Ko, favs: Ko, act: Ko, energy: 4, avg: 4 }, Tl = 3, As = 94, tr = (e) => {
    var n;
    return !!((n = Rt().opts[e]) != null && n.tall);
  }, sa = (e) => Cn[e] || Ae(e), nr = 409, _s = 128;
  let sn = !1, Lt = null, ln = null, po = !1, Ra = /* @__PURE__ */ new Map(), ar = 0, va = 0;
  const ho = ["title", "sums"], Ka = (e) => {
    let n = Math.floor((e + Jt) / (Yo + Jt)), r = Yo;
    return n < 4 && e >= 4 * Br + 3 * Jt && (n = 4, r = Math.floor((e - 3 * Jt) / 4)), { n: Math.max(1, n), w: r };
  }, Rt = () => ({ cells: {}, spans: {}, hidden: [], opts: {}, ...V.dash || {} });
  function or(e) {
    V = { ...V, dash: e }, Ln();
  }
  function Xo() {
    const e = (n) => T.querySelector(n);
    return [
      ["title", e(".tfDashTitle"), "full"],
      ["sums", e(".tfDashBarRow"), "full"],
      ["wx", vn.wx, 2],
      ["areas", e(".tfAreas"), "areas"],
      ["favs", e(".tfDash-favs"), 2],
      ["act", e(".tfDash-act"), 2],
      ["energy", e(".tfDash-energy"), 2],
      ["avg", vn.avg, 2],
      ...[...T.querySelectorAll(".tfDashTiles > [data-k]")].map((n) => [n.dataset.k, n, 1, !0])
    ].filter(([, n]) => n == null ? void 0 : n.isConnected).map(([n, r, d, p = !1]) => ({ key: n, el: r, span: d, tile: p }));
  }
  const Ri = (e, n, r) => e.span === "full" ? n : e.span === "areas" ? Math.min(n, Math.ceil((nr + Math.max(0, Ga.length - 1) * (_s + Jt) + Jt) / (r + Jt))) : Math.min(n, Rt().spans[e.key] ?? e.span), Jo = (e) => $o[e.key] ?? (e.el.classList.contains("tfDac") ? tr(e.key) ? Ko : Tl : null);
  function fo(e, n, r = null) {
    const d = Rt().cells, p = e.every((x) => !d[x.key] || d[x.key].col + x.cols <= n), y = (x) => d[x.key] || { row: 1e9, col: 0 }, h = () => {
      const x = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Map(), D = (ce, ie, H, Le) => {
        for (let He = ie; He < ie + Le; He++) for (let st = ce; st < ce + H; st++) if (x.has(st + "," + He)) return !1;
        return !0;
      }, F = (ce, ie, H) => {
        for (let Le = H; Le < H + ce.rows; Le++) for (let He = ie; He < ie + ce.cols; He++) x.add(He + "," + Le);
        S.set(ce.key, { col: ie, row: H, cols: ce.cols, rows: ce.rows });
      }, B = (ce, ie, H) => {
        for (ie = Math.max(0, Math.min(n - ce.cols, ie)), H = Math.max(0, H); !D(ie, H, ce.cols, ce.rows); ) H++;
        F(ce, ie, H);
      }, $ = (ce) => {
        for (let ie = 0; ; ie++) for (let H = 0; H <= n - ce.cols; H++) if (D(H, ie, ce.cols, ce.rows)) {
          F(ce, H, ie);
          return;
        }
      };
      r && B(r, Lt.col, Lt.row);
      const ye = e.filter((ce) => ce !== r), Re = (ce, ie) => y(ce).row - y(ie).row || y(ce).col - y(ie).col;
      return p ? (ye.filter((ce) => d[ce.key]).sort(Re).forEach((ce) => B(ce, d[ce.key].col, d[ce.key].row)), ye.filter((ce) => !d[ce.key]).forEach($), S) : ([...ye].sort(Re).forEach($), S);
    };
    for (let x = 0; ; x++) {
      const S = h();
      if (x === 3) return S;
      const D = e.filter((B) => B.tile && !tr(B.key)).map((B) => ({ it: B, p: S.get(B.key) })).sort((B, $) => B.p.row - $.p.row || B.p.col - $.p.col);
      let F = !1;
      for (let B = 0, $; B < D.length; B = $) {
        for ($ = B + 1; $ < D.length && D[$].p.row === D[B].p.row && D[$].p.col === D[$ - 1].p.col + 1; $++) ;
        const ye = D.slice(B, $), Re = Math.max(...ye.map((ce) => ce.it.rows));
        ye.forEach((ce) => {
          ce.it.rows < Re && (ce.it.rows = Re, F = !0);
        });
      }
      if (!F) return S;
    }
  }
  function ba() {
    const e = Rt(), n = new Set(e.hidden), r = Xo().filter((h) => !ho.includes(h.key));
    let d = Ra;
    if (!d.size) {
      const h = e.pegs || 4, x = r.filter((S) => !n.has(S.key));
      x.forEach((S) => {
        S.cols = Ri(S, h, Yo), S.rows = Jo(S) ?? 2;
      }), d = fo(x, h);
    }
    const p = (h) => !n.has(h.key) && d.get(h.key) || { row: 1e9, col: 0 };
    r.sort((h, x) => p(h).row - p(x).row || p(h).col - p(x).col);
    const y = (e.phone || []).map((h) => r.find((x) => x.key === h && !n.has(h))).filter(Boolean);
    return [...y, ...r.filter((h) => !y.includes(h))];
  }
  const Qo = () => {
    const e = ba();
    e.forEach((n, r) => n.el.style.setProperty("--o", String(3 + r))), mo([...Xo().filter((n) => ho.includes(n.key)), ...e].map((n) => n.el));
  };
  function mo(e) {
    if (Lt) return;
    const n = a.activeElement;
    let r = null;
    for (const d of new Set(e.map((p) => {
      for (; p && p.parentElement !== T; ) p = p.parentElement;
      return p;
    }).filter(Boolean))) {
      const p = r ? r.nextSibling : T.querySelector(":scope > [data-tf]");
      if (d !== p)
        try {
          T.moveBefore ? T.moveBefore(d, p) : T.insertBefore(d, p);
        } catch {
          T.insertBefore(d, p);
        }
      r = d;
    }
    n && n !== a.activeElement && n.isConnected && n.focus({ preventScroll: !0 });
  }
  const wa = (e, n) => or({ ...e, cells: n, pegs: Ka(T.clientWidth).n });
  function tn() {
    var ie;
    if (!v || !T) return;
    const e = T.clientWidth, { n, w: r } = Ka(e), d = m.classList.contains("tfDash") && n >= 2;
    m.classList.toggle("tfBoard", d), m.classList.toggle("tfEditing", d && sn);
    const p = c("dashEditNav");
    p && (p.hidden = !d, p.classList.toggle("active", sn), p.setAttribute("aria-pressed", String(sn)), p.setAttribute("aria-label", sn ? "Done editing" : "Edit the dashboard"), p.title = sn ? "Done" : "Edit", p.innerHTML = sn ? tf : Pc);
    const y = d ? Xo() : [];
    if (!d) {
      T.style.height = "", T.querySelectorAll(".tfBoardItem").forEach((H) => {
        H.classList.remove("tfBoardItem", "tfBoardHidden"), H.style.left = H.style.top = H.style.width = H.style.height = "";
      }), (ie = T.querySelector(".tfDash-act > .activityRows")) == null || ie.style.removeProperty("max-height"), Es(!1), m.classList.contains("tfDash") && Qo(), dn();
      return;
    }
    T.style.setProperty("--peg-w", r + "px");
    const h = new Set(Rt().hidden), x = r + Jt;
    Lt != null && Lt.fromTray && h.delete(Lt.key), y.forEach((H) => H.el.classList.toggle("tfBoardHidden", h.has(H.key)));
    const S = y.filter((H) => !h.has(H.key) && getComputedStyle(H.el).display !== "none");
    let D = 0;
    S.filter((H) => ho.includes(H.key)).forEach((H) => {
      H.el.classList.add("tfBoardItem"), Object.assign(H.el.style, { width: e + "px", height: "", left: "0px", top: D + "px" });
      const Le = H.key === "sums" && H.el.querySelector(".tfDash-bar"), He = Le ? Le.querySelectorAll(".activityRow").length : 0;
      Le && (Le.style.maxWidth = "none");
      for (let st = 1; Le && st <= He && (Le.style.setProperty("--bar-cols", String(Math.ceil(He / st))), !(Le.offsetWidth <= e)); st++)
        ;
      Le && (Le.style.maxWidth = ""), D += H.el.offsetHeight + Jt;
    }), va = D;
    const F = S.filter((H) => !ho.includes(H.key));
    F.forEach((H) => {
      H.cols = Ri(H, n, r), H.el.classList.add("tfBoardItem"), H.el.style.width = (H.cols === n ? e : H.cols * r + (H.cols - 1) * Jt) + "px", H.el.style.height = "", H.rows = Jo(H) ?? Math.max(1, Math.ceil((H.el.offsetHeight + Jt - 6) / ga));
    });
    const B = Lt && F.find((H) => H.key === Lt.key), $ = fo(F, n, B);
    $.forEach((H) => Object.assign(H, { x: H.cols === n ? 0 : H.col * x, y: va + H.row * ga, w: H.cols === n ? e : H.cols * r + (H.cols - 1) * Jt, h: H.rows * ga - Jt })), F.forEach((H) => {
      const Le = $.get(H.key);
      H.el.style.height = Le.h + "px", H.el.classList.contains("tfDac") && H.el.style.setProperty("--tf-dac-pad", Le.h - As + "px"), !(H === B && !Lt.fromTray) && (H.el.style.left = Le.x + "px", H.el.style.top = Le.y + "px");
    }), Ra = $, mo([...S.filter((H) => ho.includes(H.key)), ...F.slice().sort((H, Le) => $.get(H.key).row - $.get(Le.key).row || $.get(H.key).col - $.get(Le.key).col)].map((H) => H.el));
    const ye = $.get("act"), Re = ye && T.querySelector(".tfDash-act > .activityRows");
    Re && (Re.style.maxHeight = Math.max(Zo, Math.floor((ye.h - Re.offsetTop - 10) / Zo) * Zo) + "px"), ar = Math.max(0, ...[...$.values()].map((H) => H.row + H.rows));
    let ce = va + ar * ga - Jt;
    ce = Es(sn, F, $, ce, n, r), T.style.height = ce + "px", requestAnimationFrame(() => m.classList.add("tfBoardReady")), y.forEach((H) => Pr.observe(H.el)), vo(), dn();
  }
  const la = () => {
    po || (po = !0, requestAnimationFrame(() => {
      po = !1, tn();
    }));
  }, Pr = new ResizeObserver(() => {
    Lt || la();
  });
  function Es(e, n = [], r = /* @__PURE__ */ new Map(), d = 0, p = 1, y = Yo) {
    T.querySelectorAll(".tfEditChips").forEach((F) => {
      (!e || !F.closest(".tfBoardItem")) && F.remove();
    }), T.querySelectorAll(".tfFavHides").forEach((F) => F.remove()), T.querySelectorAll(".tfBoardItem").forEach((F) => [...F.children].forEach((B) => {
      B.classList.contains("tfEditChips") || B.toggleAttribute("inert", e);
    }));
    let h = T.querySelector(".tfBoardCells"), x = T.querySelector(".tfBoardLand");
    if (!e)
      return h == null || h.remove(), x == null || x.remove(), Sn(), d;
    const S = ar + Sl;
    if (h || (h = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), h.setAttribute("aria-hidden", "true"), T.prepend(h)), h.style.top = va + "px", h.dataset.size !== p + "x" + S + "x" + y && (h.dataset.size = p + "x" + S + "x" + y, h.style.gridTemplateColumns = "repeat(" + p + "," + y + "px)", h.innerHTML = "<i></i>".repeat(p * S)), d = Math.max(d, va + S * ga - Jt), n.forEach((F) => {
      const B = F.el;
      !B || B.querySelector(":scope > .tfEditChips") || B.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + rd + '</span><button class="tfEditChip" type="button" data-board-more="' + re(F.key) + '" aria-label="' + re(sa(F.key)) + ' options" aria-haspopup="menu">' + Qh + "</button></div>");
    }), Lt && r.has(Lt.key)) {
      x || (x = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), T.appendChild(x));
      const F = r.get(Lt.key);
      Object.assign(x.style, { left: F.x + "px", top: F.y + "px", width: F.w + "px", height: F.h + "px" });
    } else x == null || x.remove();
    const D = T.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (D) {
      const F = D.getBoundingClientRect();
      D.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...D.querySelectorAll('[data-k^="fav:"]')].map((B) => {
        const $ = B.getBoundingClientRect(), ye = B.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + re(ye) + '" aria-label="Hide ' + re(Ae(ye)) + ' from the dashboard" style="left:' + Math.round($.right - F.left - 42) + "px;top:" + Math.round($.top - F.top + ($.height - 32) / 2) + 'px">' + Rc + "</button>";
      }).join("") + "</div>");
    }
    return d;
  }
  let ei = "";
  function xa(e) {
    sn = e, e || (Lt = null, Na = ta = !1, Sn()), tn(), e ? ei = JSON.stringify(V) : ei && JSON.stringify(V) !== ei && Vn("Changes saved");
  }
  function ti(e, n) {
    var $, ye;
    Sn();
    const r = Ra.get(e), { n: d } = Ka(T.clientWidth), p = Rt(), y = p.spans[e] ?? 2;
    if (!r) return;
    const h = r.cols >= d, x = (Re, ce, ie) => '<button type="button" role="menuitem" data-board-act="' + Re + '"' + (ie ? " disabled" : "") + ">" + ce + "</button>", S = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    S.setAttribute("role", "menu"), S.setAttribute("aria-label", sa(e) + " options");
    const D = T.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]'), F = D == null ? void 0 : D.classList.contains("tfDac");
    S.innerHTML = (Di.includes(e) ? x("size", y === 1 ? "Card size" : "Tile size") : "") + (F ? x("tall", tr(e) ? "Make shorter" : "Make taller") : "") + (e === "energy" ? x("graph", ((($ = p.opts.energy) == null ? void 0 : $.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + x("left", "Move left", h || r.col === 0) + x("right", "Move right", h || r.col + r.cols >= d) + x("up", "Move up", r.row <= 0) + x("down", "Move down") + (D ? x("remove", "Remove") : x("hide", "Hide")), T.appendChild(S);
    const B = Math.min(r.x + r.w - S.offsetWidth, T.clientWidth - S.offsetWidth);
    Object.assign(S.style, { left: Math.max(0, B) + "px", top: r.y + 28 + "px" }), ln = { key: e, menu: S, opener: n }, (ye = S.querySelector("button:not([disabled])")) == null || ye.focus();
  }
  function Sn(e) {
    if (!ln) return;
    const { menu: n, opener: r } = ln;
    ln = null, n.remove(), e && (r == null || r.focus());
  }
  const ea = () => Object.fromEntries([...Ra].map(([e, n]) => [e, { col: n.col, row: n.row }]));
  function Ll(e, n) {
    var h, x;
    if (n === "remove") {
      Sn(), Ni(e);
      return;
    }
    const r = V, d = Rt(), p = ea(), y = p[e] || { col: 0, row: 0 };
    n === "size" && (d.spans = { ...d.spans, [e]: (d.spans[e] ?? 2) === 1 ? 2 : 1 }), n === "tall" && (d.opts = { ...d.opts, [e]: { ...d.opts[e] || {}, tall: !tr(e) } }), n === "graph" && (d.opts = { ...d.opts, energy: { ...d.opts.energy || {}, graph: (((h = d.opts.energy) == null ? void 0 : h.graph) || "above") === "above" ? "below" : "above" } }), n === "left" && (p[e] = { ...y, col: y.col - 1 }), n === "right" && (p[e] = { ...y, col: y.col + 1 }), n === "up" && (p[e] = { ...y, row: y.row - 1 }), n === "down" && (p[e] = { ...y, row: y.row + 1 }), n === "hide" && (d.hidden = [.../* @__PURE__ */ new Set([...d.hidden, e])]), ["left", "right", "up", "down"].includes(n) && (Lt = { key: e, col: p[e].col, row: p[e].row }), wa(d, p), Lt && (tn(), Lt = null, wa(Rt(), ea())), Sn(), n === "graph" && (gn.delete("dash:energy"), yn()), tn(), n !== "hide" ? (x = T.querySelector('[data-board-more="' + CSS.escape(e) + '"]')) == null || x.focus() : Vn(sa(e) + " hidden", ni(r));
  }
  function ir(e) {
    const n = Rt();
    or({ ...n, hidden: n.hidden.filter((r) => r !== e) }), tn(), Vn(sa(e) + " put back");
  }
  const rr = () => Rt().tiles || [...T.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => e.dataset.k).filter((e) => !Rt().hidden.includes(e));
  function Ds(e, n) {
    const r = Rt();
    wa({ ...r, tiles: e, hidden: r.hidden.filter((d) => !d.includes(".")) }, n), yn(), dn();
  }
  const sr = (e) => {
    Ds([...rr().filter((n) => n !== e), e], ea()), Vn(Ae(e) + " added"), Rs(e);
  }, Ni = (e) => {
    const n = V, r = ea();
    delete r[e], Ds(rr().filter((d) => d !== e), r), Vn(Ae(e) + " removed", ni(n));
  };
  let da = 0;
  function Vn(e, n = null) {
    var h;
    const r = c("toast");
    if (!r) return;
    if (r.replaceChildren(Object.assign(document.createElement("span"), { textContent: e })), n) {
      const x = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      x.addEventListener("click", () => {
        clearTimeout(da), r.classList.remove("show", "withAction"), n();
      }), r.appendChild(x);
    }
    const d = m.getBoundingClientRect(), p = (h = a.querySelector(".bottomNav")) == null ? void 0 : h.getBoundingClientRect(), y = Bt.classList.contains("open") && !ya ? Math.min(d.right, Bt.getBoundingClientRect().left) : d.right;
    r.style.left = (d.left + y) / 2 + "px", r.style.bottom = (p != null && p.height ? window.innerHeight - p.top + 12 : 26) + "px", r.classList.add("tfToast", "show"), r.classList.toggle("withAction", !!n), clearTimeout(da), da = setTimeout(() => r.classList.remove("show", "withAction"), n ? 5e3 : 2200);
  }
  const ni = (e) => () => {
    V = e, Ln(), yn(), tn(), dn();
  };
  function Rs(e) {
    const n = () => T.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]');
    setTimeout(() => {
      var h;
      const r = n();
      if (!r) return;
      const d = (h = window.matchMedia) == null ? void 0 : h.call(window, "(prefers-reduced-motion: reduce)").matches, p = r.getBoundingClientRect();
      (p.top < 0 || p.bottom > window.innerHeight) && r.scrollIntoView({ behavior: d ? "auto" : "smooth", block: "center" });
      const y = (x) => "0 0 0 4px color-mix(in srgb,var(--primary) " + x + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + x + "%,transparent)";
      r.animate([{ boxShadow: y(55) }, { boxShadow: y(0) }], { duration: 1500, easing: d ? "steps(1, end)" : "ease-out" });
    }, ai(e) ? 260 : 0);
  }
  function ai(e) {
    const n = Ra.get(e);
    if (!n || !Bt.classList.contains("open") || ya) return !1;
    const { n: r, w: d } = Ka(T.clientWidth), p = Bt.getBoundingClientRect().left - T.getBoundingClientRect().left, y = (S) => S * (d + Jt) + n.cols * d + (n.cols - 1) * Jt <= p;
    if (y(n.col)) return !1;
    const h = /* @__PURE__ */ new Set();
    Ra.forEach((S, D) => {
      if (D !== e) for (let F = S.row; F < S.row + S.rows; F++) for (let B = S.col; B < S.col + S.cols; B++) h.add(B + "," + F);
    });
    const x = (S, D) => {
      for (let F = D; F < D + n.rows; F++) for (let B = S; B < S + n.cols; B++) if (h.has(B + "," + F)) return !1;
      return !0;
    };
    for (let S = 0; S <= ar; S++) for (let D = 0; D + n.cols <= r && y(D); D++)
      if (x(D, S))
        return wa(Rt(), { ...ea(), [e]: { col: D, row: S } }), tn(), !0;
    return !1;
  }
  const Ir = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Bt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Bt.setAttribute("aria-label", "Edit the dashboard"), Bt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', m.appendChild(Bt);
  let ya = !1, Na = !1, ta = !1, Ht = null, Kt = !1;
  const Hr = {}, oi = (e, n) => {
    if (Hr[e] === n) return;
    Hr[e] = n;
    const r = Bt.querySelector('[data-tray="' + e + '"]');
    r.innerHTML = n, ia(r);
  }, lr = (e, n) => '<span class="tfTrayName"><span class="activityRowName">' + re(Ae(e)) + '</span><span class="activityRowMeta">' + re(n) + "</span></span>", Fr = (e, n, r) => '<li class="tfTrayFav' + (n ? " off" : "") + '" data-tray-fav="' + re(e) + '"><span class="tfTrayGrip" aria-hidden="true">' + rd + '</span><span class="tfIcon"' + Gt(e, An(e)) + "></span>" + lr(e, n ? "Hidden" + (xt.get(e) ? " · " + xt.get(e) : "") : xt.get(e) || Et(e)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + re(e) + '" aria-pressed="' + !n + '" aria-label="' + (n ? "Show " : "Hide ") + re(Ae(e)) + ' on the dashboard">' + (n ? Rc : ef) + "</button>" + (r ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + re(e) + '" aria-label="Remove ' + re(Ae(e)) + ' from favourites">' + Nc + "</button>" : "<span></span>") + "</li>";
  function Bi(e, n, r, d) {
    const p = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(w).filter((h) => n(h) && !r.has(h) && w[h].state !== "unavailable").filter((h) => {
      const x = (Ae(h) + " " + (xt.get(h) || "") + " " + h).toLowerCase();
      return p.every((S) => x.includes(S));
    }).sort((h, x) => (xt.get(h) || "~").localeCompare(xt.get(x) || "~") || Ae(h).localeCompare(Ae(x))).slice(0, 40).map((h) => '<li><button class="tfTrayPickItem" type="button" ' + d + '="' + re(h) + '"><span class="tfIcon"' + Gt(h, An(h)) + "></span>" + lr(h, xt.get(h) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function dn() {
    const e = sn && m.classList.contains("tfBoard");
    if (Bt.classList.toggle("open", e), Bt.classList.toggle("tucked", e && ya), Bt.toggleAttribute("inert", !e), e || (Kt = !1), Is(), !e) return;
    const n = Bt.querySelector("[data-tray-tuck]");
    n.innerHTML = ya ? Mc : Bc, n.setAttribute("aria-expanded", String(!ya)), n.setAttribute("aria-label", ya ? "Show the edit tray" : "Tuck the edit tray away");
    const r = Rt().hidden.filter((h) => Xo().some((x) => x.key === h));
    oi("cards", '<div class="sectionLabel">Hidden cards</div>' + (r.length ? '<div class="tfTrayCards">' + r.map((h) => '<button class="tfTrayCard" type="button" data-tray-card="' + re(h) + '" aria-label="' + re(sa(h)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + rd + "</span>" + re(sa(h)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide wait here.</p>')), oi("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (Rt().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Kt + '">' + (Kt ? "Hide the phone" : "Show the phone") + "</button>");
    const d = new Set(V.favHidden || []), p = Rn(), y = [...p, ...[...d].filter((h) => !p.includes(h) && w[h])];
    oi("favs", y.map((h) => Fr(h, d.has(h), p.includes(h))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Bt.querySelector('[data-pick="tiles"]').hidden = !ta, Bt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(ta)), ta && oi("tilepick", Bi(Bt.querySelector("[data-tile-search]").value, (h) => dl.includes(h.split(".")[0]), new Set(rr()), "data-tile-pick")), Bt.querySelector('[data-pick="favs"]').hidden = !Na, Bt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Na)), Na && oi("pick", Bi(Bt.querySelector("[data-fav-search]").value, (h) => Ir.test(h), new Set(Rn()), "data-fav-pick")), oi("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (Ki() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Ki() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const go = (e) => {
    V = { ...V, ...e }, Ln(), yn(), dn();
  };
  function Ns(e, n) {
    const r = V, d = new Set(V.favHidden || []);
    n ? d.delete(e) : d.add(e), go({ favHidden: [...d] }), n ? Vn(Ae(e) + " put back") : Vn(Ae(e) + " hidden", ni(r));
  }
  const Al = (e) => {
    const n = V;
    go({ favourites: Rn().filter((r) => r !== e), favHidden: (V.favHidden || []).filter((r) => r !== e) }), Vn(Ae(e) + " removed from favourites", ni(n));
  }, Bs = (e) => {
    go({ favourites: [...Rn().filter((n) => n !== e), e], favHidden: (V.favHidden || []).filter((n) => n !== e) }), Vn(Ae(e) + " added to favourites");
  };
  Bt.addEventListener("click", (e) => {
    var r;
    const n = e.target.closest("button");
    n && (n.hasAttribute("data-tray-done") ? xa(!1) : n.hasAttribute("data-tray-tuck") ? (ya = !ya, dn()) : n.hasAttribute("data-phone-toggle") ? (Kt = !Kt, dn(), Kt && ((r = Bn.querySelector("[data-phone-key]")) == null || r.focus({ preventScroll: !0 }))) : n.dataset.trayCard ? e.detail === 0 && (ir(n.dataset.trayCard), dn()) : n.dataset.favEye ? Ns(n.dataset.favEye, n.getAttribute("aria-pressed") !== "true") : n.dataset.favRemove ? Al(n.dataset.favRemove) : n.hasAttribute("data-fav-add") ? (Na = !Na, dn(), Na && Bt.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : n.dataset.favPick ? Bs(n.dataset.favPick) : n.hasAttribute("data-tile-add") ? (ta = !ta, dn(), ta && Bt.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : n.dataset.tilePick ? sr(n.dataset.tilePick) : n.hasAttribute("data-fav-suggest") && go({ suggest: !Ki() }));
  }), Bt.addEventListener("input", (e) => {
    e.target.matches("[data-fav-search],[data-tile-search]") && dn();
  }), Bt.addEventListener("keydown", (e) => {
    var r, d;
    const n = !!((d = (r = e.target).closest) != null && d.call(r, '[data-pick="tiles"],[data-tile-add]'));
    e.key !== "Escape" || !(n ? ta : Na) || (e.stopPropagation(), n ? ta = !1 : Na = !1, dn(), Bt.querySelector(n ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function $a(e, n, r, d) {
    e.preventDefault();
    const p = e.clientX, y = e.clientY;
    let h = null, x = 0;
    const S = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), D = (B) => {
      if (!h) {
        if (Math.hypot(B.clientX - p, B.clientY - y) < 4) return;
        h = n.cloneNode(!0), h.classList.add("tfTrayGhost"), h.style.width = n.offsetWidth + "px", m.appendChild(h);
      }
      h.style.transform = "translate(" + (B.clientX - 24) + "px," + (B.clientY - 24) + "px)";
      const $ = !ya && B.clientX >= Bt.getBoundingClientRect().left;
      if (r === "card") {
        const ce = T.getBoundingClientRect(), { w: ie } = Ka(T.clientWidth);
        Lt = !$ && B.clientX >= ce.left && B.clientX <= ce.right && B.clientY >= ce.top + va ? { key: d, col: Math.max(0, Math.floor((B.clientX - ce.left) / (ie + Jt))), row: Math.max(0, Math.floor((B.clientY - ce.top - va) / ga)), fromTray: !0 } : null, x || (x = requestAnimationFrame(() => {
          x = 0, tn();
        }));
        return;
      }
      const ye = T.querySelector(".tfDash-favs"), Re = ye == null ? void 0 : ye.getBoundingClientRect();
      if (Ht = null, Re && !$ && B.clientX >= Re.left && B.clientX <= Re.right && B.clientY >= Re.top && B.clientY <= Re.bottom) {
        let ce = 1 / 0;
        ye.querySelectorAll('[data-k^="fav:"]').forEach((ie, H) => {
          const Le = ie.getBoundingClientRect(), He = Math.hypot(B.clientX - (Le.left + Le.width / 2), B.clientY - (Le.top + Le.height / 2));
          He < ce && (ce = He, Ht = { i: H, r: Le, after: B.clientX > Le.left + Le.width / 2 });
        }), Ht || (Ht = { i: 0, r: null, after: !1 });
      }
      Ht != null && Ht.r ? (S.isConnected || m.appendChild(S), Object.assign(S.style, { left: (Ht.after ? Ht.r.right : Ht.r.left) - 2 + "px", top: Ht.r.top + 8 + "px", height: Ht.r.height - 16 + "px" })) : S.remove();
    }, F = () => {
      if (window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", F), window.removeEventListener("pointercancel", F), cancelAnimationFrame(x), h == null || h.remove(), S.remove(), r === "card") {
        if (!h) ir(d);
        else if (Lt != null && Lt.fromTray) {
          tn();
          const ce = Rt(), ie = ea();
          Lt = null, wa({ ...ce, hidden: ce.hidden.filter((H) => H !== d) }, ie), Vn(sa(d) + " put back");
        }
        Lt = null, tn(), yn(), dn();
        return;
      }
      if (!Ht) return;
      const B = new Set(V.favHidden || []);
      B.delete(d);
      const $ = Rn().filter((ce) => ce !== d), ye = $.filter((ce) => !B.has(ce)), Re = ye[Math.min(Ht.i + (Ht.after ? 1 : 0), ye.length)];
      $.splice(Re ? $.indexOf(Re) : $.length, 0, d), Ht = null, go({ favourites: $, favHidden: [...B] }), Vn(Ae(d) + " put back");
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", F), window.addEventListener("pointercancel", F);
  }
  const ca = { sums: 201, wx: 286, favs: 363, areas: 323, act: 363, energy: 301, avg: 182 }, dr = 140, Pi = 252, _l = 0.8, Ps = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line" }, Bn = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  Bn.setAttribute("aria-label", "Phone order"), Bn.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Nc + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', m.appendChild(Bn);
  let Ii = "";
  function Is() {
    var x;
    const e = Kt && sn && m.classList.contains("tfBoard") && !ya;
    if (Bn.classList.toggle("open", e), Bn.toggleAttribute("inert", !e), !e) return;
    const n = ba().filter((S) => !Rt().hidden.includes(S.key)), r = n.length, d = (S) => Math.round(S * _l * 10) / 10 + "px", p = (S, D) => {
      const F = S.el.classList.contains("tfDac"), B = S.tile ? F ? Pi : dr : ca[S.key] || dr;
      return '<button class="tfPhoneBlock' + (S.tile ? " tile" : "") + '" type="button" data-phone-key="' + re(S.key) + '" style="min-height:' + d(B) + '" aria-label="' + re(sa(S.key) + ", " + (D + 1) + " of " + r + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (S.tile ? Gt(S.key, An(S.key)) : Gt(S.key, Ps[S.key])) + '></span><span class="tfPhoneName">' + re(sa(S.key)) + "</span></button>";
    }, y = '<div class="tfPhoneTitle">' + re(((x = T.querySelector(".tfDashTitle")) == null ? void 0 : x.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + d(ca.sums) + '"><span class="tfPhoneName">' + re(sa("sums")) + "</span></div>" + n.map(p).join("");
    if (Bn.querySelector('[data-phone="note"]').innerHTML = Rt().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", y === Ii) return;
    Ii = y;
    const h = Bn.querySelector('[data-phone="list"]');
    h.innerHTML = y, ia(h);
  }
  function cr(e, n) {
    var r;
    or({ ...Rt(), phone: e }), dn(), n && ((r = Bn.querySelector('[data-phone-key="' + CSS.escape(n) + '"]')) == null || r.focus({ preventScroll: !0 }));
  }
  const ua = () => [...Bn.querySelectorAll("[data-phone-key]")].map((e) => e.dataset.phoneKey);
  function El(e, n) {
    e.preventDefault();
    const r = n.parentElement, d = Bn.querySelector(".tfPhoneScreen"), p = ua().join();
    n.classList.add("moving");
    const y = (x) => {
      const S = d.getBoundingClientRect();
      x.clientY > S.bottom - 40 ? d.scrollTop += 12 : x.clientY < S.top + 40 && (d.scrollTop -= 12);
      const D = [...r.querySelectorAll("[data-phone-key]")].find(($) => {
        const ye = $.getBoundingClientRect();
        return $ !== n && x.clientX >= ye.left && x.clientX <= ye.right && x.clientY >= ye.top && x.clientY <= ye.bottom;
      });
      if (!D) return;
      const F = D.getBoundingClientRect(), B = D.classList.contains("tile") ? x.clientX < F.left + F.width / 2 : x.clientY < F.top + F.height / 2;
      r.insertBefore(n, B ? D : D.nextSibling);
    }, h = () => {
      window.removeEventListener("pointermove", y), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h), n.classList.remove("moving");
      const x = ua();
      Ii = "", x.join() !== p ? cr(x) : Is();
    };
    window.addEventListener("pointermove", y), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  }
  Bn.addEventListener("pointerdown", (e) => {
    const n = e.target.closest("[data-phone-key]");
    n && e.button <= 0 && El(e, n);
  }), Bn.addEventListener("click", (e) => {
    var r;
    const n = e.target.closest("button");
    if (n != null && n.hasAttribute("data-phone-close"))
      Kt = !1, dn(), (r = Bt.querySelector("[data-phone-toggle]")) == null || r.focus({ preventScroll: !0 });
    else if (n != null && n.hasAttribute("data-phone-reset")) {
      const { phone: d, ...p } = Rt();
      or(p), dn();
    }
  }), Bn.addEventListener("keydown", (e) => {
    var h, x, S, D;
    if (e.key === "Escape") {
      e.stopPropagation(), Kt = !1, dn(), (h = Bt.querySelector("[data-phone-toggle]")) == null || h.focus({ preventScroll: !0 });
      return;
    }
    const n = (D = (S = (x = e.target).closest) == null ? void 0 : S.call(x, "[data-phone-key]")) == null ? void 0 : D.dataset.phoneKey, r = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!n || !r) return;
    e.preventDefault();
    const d = ua(), p = d.indexOf(n), y = p + r;
    y < 0 || y >= d.length || ([d[p], d[y]] = [d[y], d[p]], cr(d, n));
  });
  function Dl(e, n) {
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
      const y = new Set(Rn());
      Hr.favs = null, go({ favourites: [...r.children].map((h) => h.dataset.trayFav).filter((h) => y.has(h)) });
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  Bt.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    const n = e.target.closest("[data-tray-card]"), r = e.target.closest(".tfTrayFav");
    n ? $a(e, n, "card", n.dataset.trayCard) : r && e.target.closest(".tfTrayGrip") ? Dl(e, r) : r != null && r.classList.contains("off") && !e.target.closest("button") && $a(e, r, "fav", r.dataset.trayFav);
  });
  function Hs(e) {
    if (!sn || e.button !== 0 || e.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const n = e.target.closest(".tfBoardItem"), r = n && Xo().find((B) => B.el === n);
    if (!r || ho.includes(r.key)) return;
    const d = Ra.get(r.key), { w: p } = Ka(T.clientWidth);
    if (!d) return;
    e.preventDefault(), Sn();
    const y = e.clientX, h = e.clientY;
    let x = !1, S = 0;
    const D = (B) => {
      const $ = B.clientX - y, ye = B.clientY - h;
      if (!x) {
        if (Math.hypot($, ye) < 4) return;
        x = !0, Lt = { key: r.key, col: d.col, row: d.row }, n.classList.add("tfDragging");
      }
      n.style.transform = "translate(" + $ + "px," + ye + "px)", Lt.col = Math.round((d.x + $) / (p + Jt)), Lt.row = Math.round((d.y + ye - va) / ga), S || (S = requestAnimationFrame(() => {
        S = 0, tn();
      }));
    }, F = () => {
      window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", F), window.removeEventListener("pointercancel", F), x && (cancelAnimationFrame(S), tn(), n.classList.remove("tfDragging"), n.style.transform = "", Lt = null, wa(Rt(), ea()), tn(), yn());
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", F), window.addEventListener("pointercancel", F);
  }
  function vo(e = !1) {
    const n = T == null ? void 0 : T.querySelector(".tfDashGraph svg[data-graph]");
    if (!(n != null && n.clientWidth)) return;
    const r = n.dataset.graph + "@" + n.clientWidth + "x" + n.clientHeight;
    n.dataset.drawn !== r && (n.dataset.drawn = r, di(n.dataset.graph, n).then(() => {
      e && Ei(n);
    }));
  }
  function Fs() {
    var x, S, D;
    Je = ji.model(o()), ks(), w = Je.states, w[(x = V.sources) == null ? void 0 : x.grid] && (Je.grid = V.sources.grid), w[(S = V.sources) == null ? void 0 : S.alarm] && (Je.security.alarms = [V.sources.alarm]), C.forEach((F, B) => {
      const $ = w[B], ye = ($ == null ? void 0 : $.attributes) || {};
      if (!$ || Date.now() - F.at > 2 * 60 * 1e3) {
        C.delete(B);
        return;
      }
      F.pos != null && $.state !== "opening" && $.state !== "closing" && Math.abs(Fn(B) - F.pos) < 1 && delete F.pos, F.tilt != null && Math.abs((ye.current_tilt_position ?? -1) - F.tilt) < 1 && delete F.tilt, F.pos == null && F.tilt == null && C.delete(B);
    });
    const e = [];
    let n = 0;
    const r = ys();
    Ga = r.filter((F) => F.room).map((F) => F.room), Ga.some((F) => F.id === ge) || (ge = ((D = Ga[0]) == null ? void 0 : D.id) || null);
    const d = Te === "weather" ? { key: "weather", name: "Weather" } : Te && r.find((F) => F.key === Te);
    if (d || (Te = null), m.classList.toggle("tfAreaOpen", !!d), m.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), m.classList.toggle("tfDash", !d), xt = /* @__PURE__ */ new Map(), Je.rooms.forEach((F) => [...F.actions, ...F.plugs, ...F.readings, ...F.openings, ...F.solar, ...F.plants.flatMap((B) => [B.id, ...B.readings])].forEach((B) => xt.set(B, F.name))), !d) return er(e, Ci());
    if (e.push({ key: "areahead", html: ii(d, ++n) }), d.key === "weather")
      return e.weather = ++n, e;
    const p = d.ids, y = d.room ? d.room.id : d.key, h = d.room;
    return h != null && h.solar.length && e.push({ key: "energy:" + h.id, html: me(h, ++n) }), h && (h.readings.length || h.plugs.length || h.power != null) && e.push({ key: "readings:" + h.id, html: he(h, ++n) }), h == null || h.plants.forEach((F) => e.push({ key: "plant:" + F.id, html: pe(F, ++n) })), p.length && e.push({ key: "block:" + y, order: ++n, tiles: p.map((F) => ({ key: F, html: En(F) })) }), e;
  }
  const ii = (e, n) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + n + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Mc + '</button><div class="settingsTitle">' + re(e.name) + "</div></div>";
  let Os = 0, Or = null;
  const bo = (e) => e === "weather" ? vn.wx : T.querySelector(".tfAreas");
  function wo(e) {
    var n, r;
    Te || (Os = xo().scrollTop, Or = ((n = bo(e)) == null ? void 0 : n.getBoundingClientRect().top) ?? null), Te = e, e.startsWith("room:") && (ge = e.slice(5)), Ba(), xo().scrollTop = 0, (r = T.querySelector("[data-area-back]")) == null || r.focus({ preventScroll: !0 });
  }
  let At = null;
  function ri(e, n) {
    if (At == null || At(), n == null) return;
    const r = xo(), d = performance.now() + 1500, p = ["wheel", "touchstart", "pointerdown", "keydown"];
    let y = 0;
    const h = () => {
      cancelAnimationFrame(y), p.forEach((S) => window.removeEventListener(S, h, !0)), At = null;
    }, x = () => {
      const S = e();
      if (S != null && S.isConnected) {
        const D = S.getBoundingClientRect().top - n;
        Math.abs(D) > 0.5 && (r.scrollTop += D);
      }
      performance.now() < d ? y = requestAnimationFrame(x) : h();
    };
    p.forEach((S) => window.addEventListener(S, h, { capture: !0, passive: !0 })), At = h, x();
  }
  function si() {
    var r;
    const e = Te;
    Te = null, Ba(), xo().scrollTop = Os, ri(() => bo(e), Or);
    const n = e.startsWith("room:") ? T.querySelector('.tfAreaPanel[data-area="' + CSS.escape(e.slice(5)) + '"]') : e === "weather" ? vn.wx.querySelector(".wbOpenPage") : T.querySelector('[data-k="sum:' + CSS.escape(e) + '"]');
    (r = (n == null ? void 0 : n.querySelector("[data-go]")) || n) == null || r.focus({ preventScroll: !0 });
  }
  const qr = (e) => e.wrap ? e.wrap(e.tiles.map((n) => n.html).join(""), e) : '<div class="tfBlock" data-tf data-k="' + re(e.key) + '" style="order:' + e.order + '"><div class="tfActions">' + e.tiles.map((n) => n.html).join("") + "</div></div>", xn = (e) => e.map((n) => n.key + (n.tiles ? "(" + n.tiles.map((r) => r.key).join(",") + ")" : "")).join(";");
  function xo() {
    for (let e = m.parentElement || m.getRootNode().host; e; e = e.parentElement || e.getRootNode().host) {
      const n = getComputedStyle(e).overflowY;
      if ((n === "auto" || n === "scroll") && e.scrollHeight > e.clientHeight) return e;
    }
    return document.scrollingElement;
  }
  function Wr(e) {
    const n = xo(), r = (x) => {
      const S = x.getBoundingClientRect();
      return S.height && S.bottom > 0 && S.top < window.innerHeight;
    }, d = [...T.children, ...T.querySelectorAll(".tfDashTiles > *")].find((x) => !x.matches(".tfDashTiles") && r(x)), p = d == null ? void 0 : d.dataset.k, y = d == null ? void 0 : d.getBoundingClientRect().top;
    e();
    const h = d != null && d.isConnected ? d : p && T.querySelector('[data-k="' + CSS.escape(p) + '"]');
    h != null && h.isConnected && y != null && (n.scrollTop += h.getBoundingClientRect().top - y);
  }
  function Ba() {
    if (!v || !T) return;
    const e = Fs();
    T.querySelectorAll("[data-tf]").forEach((r) => r.remove()), gn.clear();
    const n = document.createElement("div");
    n.innerHTML = e.map((r) => r.tiles ? qr(r) : r.html).join(""), e.forEach((r) => r.tiles ? r.tiles.forEach((d) => gn.set(d.key, d.html)) : gn.set(r.key, r.html)), Mn = xn(e), T.append(...n.children), Gi(e.weather), Ui(), Pr.disconnect(), tn(), ia(T), Mo(T), yi(T), U(), j && di(j.id), gr(), Co(), Ws(), requestAnimationFrame(G);
  }
  const Vr = (e) => {
    var r;
    const n = a.activeElement && e.contains(a.activeElement) ? a.activeElement : null;
    return n && { label: n.getAttribute("aria-label"), act: (r = n.dataset) == null ? void 0 : r.act };
  }, zr = (e, n) => {
    var r;
    n && ((r = n.label && e.querySelector('[aria-label="' + CSS.escape(n.label) + '"]') || n.act && e.querySelector('[data-act="' + CSS.escape(n.act) + '"]')) == null || r.focus({ preventScroll: !0 }));
  };
  function Rl(e, n) {
    const r = document.createElement("div");
    r.innerHTML = n;
    const d = r.firstElementChild, p = Vr(e);
    e.replaceWith(d), ia(d), Mo(d), yi(d), zr(d, p);
  }
  function yn() {
    !v || !T || Lt || Wr(Nl);
  }
  function Nl() {
    if (!T.querySelector("[data-tf]")) {
      Ba();
      return;
    }
    const e = Fs();
    if (xn(e) !== Mn) {
      Ba();
      return;
    }
    const n = (r) => [...Oe.keys()].some((d) => {
      const p = d.slice(d.indexOf("|") + 1);
      return r === p || r.endsWith(":" + p);
    });
    e.forEach((r) => (r.tiles || [r]).forEach((d) => {
      if (gn.get(d.key) === d.html || n(d.key)) return;
      const p = T.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (p) {
        if (gn.set(d.key, d.html), j && j.key === d.key && p.querySelector(".tfOpen")) {
          p.querySelector(".tfOpen .activityRowMeta").textContent = _(j.id);
          return;
        }
        Rl(p, d.html), j && j.key === d.key && di(j.id), d.key.startsWith("energy:") && gr();
      }
    })), Co(), Ws(), wl(), U(), Ue == null || Ue.update(), tt == null || tt.forEach((r) => r.update()), m.classList.contains("tfDash") && la(), requestAnimationFrame(G);
  }
  const ur = {
    light: (e) => [["Brightness", e.brightness != null ? Math.round(e.brightness / 2.55) + "%" : null], ["Colour temperature", e.color_temp_kelvin ? Number(e.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", e.color_mode && bt(e.color_mode)]],
    climate: (e) => [["Current temperature", Ie(e.current_temperature) + " °C"], ["Target", Ie(e.temperature) + " °C"], ["Action", bt(e.hvac_action)]],
    cover: (e) => [["Position", e.current_position != null ? e.current_position + "% open" : null], ["Tilt", e.current_tilt_position != null ? e.current_tilt_position + "% open" : null]],
    humidifier: (e) => [["Current humidity", e.current_humidity + "%"], ["Target", e.humidity + "%"], ["Mode", bt(e.mode)]],
    media_player: (e) => [["Title", e.media_title], ["Artist", e.media_artist], ["Volume", e.volume_level != null ? Math.round(e.volume_level * 100) + "%" : null], ["Source", e.source]],
    vacuum: (e) => [["Battery", e.battery_level + "%"], ["Fan speed", bt(e.fan_speed)], ["Rooms", (e.rooms || []).join(", ") || null]],
    lock: (e) => [["Changed by", e.changed_by]],
    alarm_control_panel: (e) => [["Changed by", e.changed_by]],
    valve: () => [],
    plant: (e) => [["Moisture", e.moisture + "%"], ["Light", Number(e.brightness).toLocaleString() + " lx"], ["Temperature", Ie(e.temperature) + " °C"], ["Fertility", e.conductivity + " µS/cm"], ["Problems", e.problem === "none" ? "None" : bt(e.problem)]],
    weather: (e) => [["Temperature", e.temperature != null ? e.temperature + " " + (e.temperature_unit || "°C") : null], ["Humidity", e.humidity != null ? e.humidity + "%" : null], ["Wind", e.wind_speed != null ? e.wind_speed + " " + (e.wind_speed_unit || "km/h") : null], ["Pressure", e.pressure != null ? e.pressure + " " + (e.pressure_unit || "hPa") : null]]
  }, pr = (e) => {
    var r;
    const n = (((r = ur[e.split(".")[0]]) == null ? void 0 : r.call(ur, vt(e))) || []).filter(([, d]) => d != null && d !== "");
    return n.length ? '<div class="tfMoreRows">' + n.map(([d, p]) => '<div class="tfMoreRow"><span>' + re(d) + "</span><span>" + re(p) + "</span></div>").join("") + "</div>" : "";
  }, Hi = (e) => Wi(e) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Bl(e, n = {}, r = !1) {
    return '<div class="tfMoreList">' + e.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + re(d.name) + '</div><div class="tfMoreTiles' + (r ? " single" : "") + '">' + d.ids.map((p) => Dr(p, n)).join("") + "</div></div>").join("") + "</div>";
  }
  const ot = document.createElement("div");
  ot.className = "tfMoreBackdrop", ot.hidden = !0, m.appendChild(ot);
  const jr = (e, n) => {
    for (let r = e; r && r !== ot; r = r.parentElement) {
      const d = getComputedStyle(r).overflowY;
      if ((d === "auto" || d === "scroll") && r.scrollHeight > r.clientHeight + 1 && (n < 0 ? r.scrollTop > 0 : r.scrollTop + r.clientHeight < r.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Fi = null;
  ot.addEventListener("touchstart", (e) => {
    Fi = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: !0 }), ot.addEventListener("touchmove", (e) => {
    var p, y;
    if (!Fi || e.touches.length > 1 || (y = (p = e.target).closest) != null && y.call(p, "input,textarea,select")) return;
    const n = e.touches[0], r = Fi.x - n.clientX, d = Fi.y - n.clientY;
    Fi = { x: n.clientX, y: n.clientY }, Math.abs(d) >= Math.abs(r) && !jr(e.target, d) && e.preventDefault();
  }, { passive: !1 }), ot.addEventListener("wheel", (e) => {
    jr(e.target, e.deltaY) || e.preventDefault();
  }, { passive: !1 });
  function Gr() {
    const e = ot.querySelector(".tfMorePair"), n = ot.querySelector(".tfMore");
    e == null || e.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - n.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Gr, { passive: !0 }), v && Ct();
  let Xa = [];
  const yo = (e) => e === "favourites" || e.startsWith("summary:") || e.startsWith("group:");
  function ko(e) {
    const n = (S, D = "") => '<div class="tfMoreHead">' + (b != null && b.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + od + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + re(S) + "</div>" + D + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Wh + "</button></div>", r = (S, D) => '<div class="tfMoreNow"><div class="tfMoreState">' + re(S) + "</div>" + (D ? '<div class="tfMoreSub">' + re(D) + "</div>" : "") + "</div>", d = Bl;
    if (e === "favourites") {
      const S = Rn(), D = new Set(S), F = [{ name: "Starred", ids: S }, { name: "Home", ids: Je.homeVacuums }, { name: "Security", ids: [...Je.security.alarms, ...Je.security.locks] }, ...Je.rooms.map((B) => ({ name: B.name, ids: [...B.actions, ...B.plugs] }))].map((B, $) => $ ? { ...B, ids: B.ids.filter((ye) => !D.has(ye)) } : B).filter((B) => B.ids.length);
      return [n("Favourites"), r(S.length ? S.length + " starred" : "None starred"), d(F, { star: !0 }, !0)];
    }
    const p = (S, { name: D = "", alert: F = !1, plain: B = !1 } = {}) => {
      const $ = B ? [] : S.filter((ce) => dl.includes(ce.split(".")[0])), ye = S.filter((ce) => !$.includes(ce)), Re = (ce) => ce.startsWith("vacuum.") && vt(ce).battery_level != null ? vt(ce).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (D ? '<div class="tfMoreGroupName">' + re(D) + "</div>" : "") + '<div class="tfMoreActions">' + $.map((ce) => En(ce, !0)).join("") + ye.map((ce) => Dr(ce, { plain: B, alert: F, say: B ? Re(ce) : null })).join("") + "</div></div>";
    };
    if (e.startsWith("summary:")) {
      const S = Ci().find(($) => $.key === e.slice(8));
      if (!S) return null;
      const D = S.key === "light" ? (S.groups || []).flatMap(($) => $.ids) : [], F = D.some(($) => {
        var ye;
        return ((ye = w[$]) == null ? void 0 : ye.state) === "on";
      }), B = D.length ? '<button class="primary" type="button" data-acts="' + ma(D.map(($) => ["light", F ? "turn_off" : "turn_on", $])) + '">' + (F ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(S.name), '<div class="tfMoreNowRow">' + r(S.value) + B + "</div>", ...(S.groups || []).map(($) => p($.ids, { name: $.name === S.name ? "" : $.name, alert: $.alert, plain: S.plain }))];
    }
    if (e.startsWith("group:")) {
      const [, S, D] = e.split(":"), F = Je.rooms.find((ye) => ye.id === S), B = F && fs(F).find((ye) => ye.key === D);
      if (!B) return null;
      const $ = B.acts ? '<button class="primary" type="button" data-acts="' + ma(B.acts) + '">' + (B.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(F.name + " " + B.label.toLowerCase()), '<div class="tfMoreNowRow">' + r(B.value) + $ + "</div>", p(Zi(F, D))];
    }
    const y = e.split(".")[0], h = w[e], x = dl.includes(y) ? ja(e) : { sections: [] };
    return [
      n(Ae(e)),
      r(Et(e), h.last_changed && La(Date.parse(h.last_changed))),
      (b == null ? void 0 : b.at) && '<svg class="tfGraph tfDay" data-day="' + re(e) + '" role="img" aria-label="' + re(Ae(e)) + ', last 24 hours"></svg>',
      y === "cover" && '<div data-cover-art="' + re(e) + '"></div>',
      ...x.sections.filter(Boolean),
      Pa(e) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(b != null && b.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Bc + "</button>"
    ].filter(Boolean);
  }
  const Pa = (e) => yo(e) ? "" : pr(e) + Hi(e);
  let hr = "";
  function Ja(e) {
    var n;
    b && (b.details = e, Co(), (n = ot.querySelector(e ? "[data-details-close]" : "[data-details]")) == null || n.focus({ preventScroll: !0 }));
  }
  const fr = (e) => {
    const n = w[e], r = Fn(e), d = fa(e);
    return { kind: ad(n), name: Ae(e), text: Et(e), pos: r, target: Math.abs(d - r) > 0.5 ? d : null, moving: n.state === "opening" || n.state === "closing", tilt: Xt(e) ?? 100, canSet: ct(e, Ac) };
  };
  function Mo(e) {
    e.querySelectorAll("[data-cover-art]").forEach((n) => {
      const r = n.dataset.coverArt, d = n.dataset.artKey || "more:" + r;
      let p = N.get(d);
      p || (p = qh({ onMove: (y) => bn(r, y), onSet: (y) => {
        bn(r, y), pi("pos", r);
      } }), p.coverId = r, N.set(d, p)), n.replaceWith(p.el), p.update(fr(r));
    });
  }
  const qs = (e) => [...N.values()].filter((n) => n.coverId === e), Qa = () => N.forEach((e) => {
    w[e.coverId] && e.update(fr(e.coverId));
  }), Ws = () => {
    N.forEach((e, n) => {
      e.el.isConnected || (e.destroy(), N.delete(n));
    }), Qa();
  };
  function Co() {
    var y, h;
    if (!b || !(yo(b.id) || w[b.id])) {
      ot.hidden = !0;
      return;
    }
    if ([...Oe.keys()].some((x) => x.endsWith("|" + b.id))) {
      Qa();
      return;
    }
    const e = ko(b.id), n = ot.querySelector(".tfMore");
    if (!e) {
      li();
      return;
    }
    const r = Vr(ot), d = Pa(b.id), p = b.frame ? b.frame.wide : b.id.startsWith("summary:") || b.id.startsWith("group:");
    if (ot.hidden || !n || e.length !== Xa.length || n.classList.contains("wide") !== p) {
      const x = So ? b.scroll || 0 : !ot.hidden && n ? n.scrollTop : 0;
      ot.innerHTML = '<div class="tfMorePair' + (ot.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (p ? " wide" : "") + '"' + (b.frame ? ' style="height:' + b.frame.h + 'px"' : "") + ">" + e.join("") + "</section>" + (d ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + od + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + d + "</div></div></aside>" : "") + "</div>", hr = d, ot.classList.toggle("wide", p), ot.hidden = !1, Gr(), Mo(ot), yi(ot), ia(ot), ot.querySelectorAll("[data-day]").forEach((S) => Zr(S.dataset.day, S, b.at)), x && (ot.querySelector(".tfMore").scrollTop = x), zr(ot, r), ot.contains(a.activeElement) || (y = ot.querySelector("[data-more-close]")) == null || y.focus({ preventScroll: !0 });
    } else {
      if (e.forEach((x, S) => {
        var B, $;
        if (x === Xa[S] || x.includes("data-cover-art") || n.children[S].contains(($ = (B = a.activeElement) == null ? void 0 : B.matches) != null && $.call(B, "input,select") ? a.activeElement : null) || [...Oe.keys()].some((ye) => n.children[S].querySelector('[data-drag="' + CSS.escape(ye) + '"]'))) return;
        const D = document.createElement("div");
        D.innerHTML = x;
        const F = D.firstElementChild;
        n.children[S].replaceWith(F), ia(F), yi(F);
      }), d !== hr) {
        const x = ot.querySelector(".tfMoreSideBody");
        x && (x.innerHTML = d), hr = d;
      }
      ot.contains(a.activeElement) || zr(ot, r);
    }
    (h = ot.querySelector(".tfMorePair")) == null || h.classList.toggle("details", !!(b.details && d)), Xa = e, Qa();
  }
  setInterval(() => {
    b && Co();
  }, 15 * 1e3);
  function Ia(e, n) {
    var p;
    const r = !!(b && n && ot.contains(n)), d = r && ot.querySelector(".tfMore");
    r && (b.scroll = d.scrollTop), b = { id: e, opener: r ? b.opener : n, back: r ? b : null, frame: r ? b.frame || { wide: d.classList.contains("wide"), h: d.offsetHeight } : null, at: Number((p = n == null ? void 0 : n.dataset) == null ? void 0 : p.at) || null }, mr();
  }
  let So = !1;
  function mr() {
    Xa = [], So = !ot.hidden, N.forEach((e, n) => {
      n !== b.id && ot.contains(e.el) && (e.destroy(), N.delete(n));
    }), Co(), So = !1;
  }
  function li() {
    var r, d, p, y, h, x;
    const e = b == null ? void 0 : b.opener;
    b = null, N.forEach((S, D) => {
      ot.contains(S.el) && (S.destroy(), N.delete(D));
    }), qn.forEach((S, D) => {
      D.startsWith("more:") && qn.delete(D);
    }), ot.hidden = !0, ot.innerHTML = "";
    const n = { preventScroll: !0 };
    e != null && e.isConnected ? e.focus(n) : (r = e == null ? void 0 : e.dataset) != null && r.more ? (d = T.querySelector('[data-more="' + CSS.escape(e.dataset.more) + '"]')) == null || d.focus(n) : (p = e == null ? void 0 : e.dataset) != null && p.summary ? (y = T.querySelector('[data-summary="' + CSS.escape(e.dataset.summary) + '"]')) == null || y.focus(n) : (h = e == null ? void 0 : e.hasAttribute) != null && h.call(e, "data-favs-edit") && ((x = T.querySelector("[data-favs-edit]")) == null || x.focus(n));
  }
  function eo(e, n, r, d = {}) {
    const p = n.map((ie) => ie[1]), y = d.zero ? 0 : Math.min(...p), h = Math.max(...p), x = Math.max(120, e.clientWidth || 260), S = Math.max(60, e.clientHeight || 130), D = 8, F = S - 20, B = Date.now() - 24 * 3600 * 1e3, $ = 24 * 3600 * 1e3, ye = (ie) => Math.max(0, Math.min(x, (ie - B) / $ * x)), Re = (ie) => h === y ? (D + F) / 2 : F - (ie - y) / (h - y) * (F - D);
    let ce = "M" + ye(n[0][0]).toFixed(1) + " " + Re(n[0][1]).toFixed(1);
    for (let ie = 1; ie < n.length; ie++) ce += d.smooth ? "L" + ye(n[ie][0]).toFixed(1) + " " + Re(n[ie][1]).toFixed(1) : "H" + ye(n[ie][0]).toFixed(1) + "V" + Re(n[ie][1]).toFixed(1);
    e.setAttribute("viewBox", "0 0 " + x + " " + S), e.setAttribute("aria-label", r), e.innerHTML = '<path d="' + ce + "V" + F + "H" + ye(n[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + ce + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (S - 4) + '">24 h ago</text><text x="' + x + '" y="' + (S - 4) + '" text-anchor="end">Now</text>';
  }
  const To = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, na = (e, n) => {
    const r = e.split(".")[0];
    return To[r] ? To[r].includes(n) : r === "alarm_control_panel" || r === "climate" || r === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(n) : n === "on";
  }, Vs = (e) => {
    const n = e.split(".")[0], r = vt(e).device_class;
    return n === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[r] || (ll.includes(r) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[n] || "On";
  }, Ur = /* @__PURE__ */ new Map();
  let Yr = 0;
  async function Pl(e) {
    let n = Ur.get(e);
    if (!n || Date.now() - n.at > 60 * 1e3) {
      let p = [];
      try {
        const y = await P({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        p = ((y == null ? void 0 : y[e]) || []).map((h) => [h.lu != null ? h.lu * 1e3 : Date.parse(h.last_updated || h.last_changed), String(h.s ?? h.state)]).filter(([h]) => Number.isFinite(h));
      } catch {
      }
      p.length || (p = (Nn || []).filter((y) => y.entity_id === e).map((y) => [y.when * 1e3, String(y.state)])), n = { at: Date.now(), pts: p }, Ur.set(e, n);
    }
    const r = w[e], d = n.pts.slice().sort((p, y) => p[0] - y[0]);
    return r && (!d.length || d[d.length - 1][1] !== r.state) && d.push([Date.parse(r.last_changed) || Date.now(), r.state]), d;
  }
  async function Zr(e, n, r) {
    const d = await Pl(e);
    if (!n.isConnected) return;
    const p = d.map(([He, st]) => [He, Number(st)]);
    if (d.length > 1 && p.every(([, He]) => Number.isFinite(He))) {
      eo(n, p, Ae(e) + ", last 24 hours");
      return;
    }
    const y = Date.now(), h = y - 864e5, x = Math.max(200, n.clientWidth || 360), S = 62, D = (He) => Math.max(0, Math.min(x, (He - h) / 864e5 * x)), F = [];
    let B = null;
    d.forEach(([He, st]) => {
      const $t = na(e, st);
      $t && B == null ? B = Math.max(He, h) : !$t && B != null && (F.push([B, Math.max(He, h)]), B = null);
    }), B != null && F.push([B, y]);
    const $ = Ti(e) ? "var(--danger)" : e.startsWith("light.") ? "#ffaa00" : "var(--primary)", ye = Vs(e), Re = "tfDayClip" + ++Yr, ce = F.map(([He, st]) => ye + (st >= y - 1e3 && He <= h + 1e3 ? " all day" : st >= y - 1e3 ? " since " + Nt(He) : He <= h + 1e3 ? " until " + Nt(st) : " " + Nt(He) + "–" + Nt(st)));
    let ie = "", H = -1 / 0;
    F.forEach(([He], st) => {
      const $t = ce[st].length * 5.4, zt = Math.min(D(He), x - $t);
      zt < H + 8 || (ie += '<text x="' + zt.toFixed(1) + '" y="10">' + re(ce[st]) + "</text>", H = zt + $t);
    });
    let Le = '<text x="' + x + '" y="' + (S - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((He) => {
      let st = new Date(y).setHours(He, 0, 0, 0);
      st > y && (st -= 864e5), D(st) > 8 && D(st) < x - 34 && (Le += '<text x="' + D(st).toFixed(1) + '" y="' + (S - 2) + '" text-anchor="middle">' + String(He).padStart(2, "0") + "</text>");
    }), n.setAttribute("viewBox", "0 0 " + x + " " + S), n.setAttribute("aria-label", Ae(e) + ", last 24 hours: " + (ce.length ? ce.join(", ") : "no changes")), n.innerHTML = '<clipPath id="' + Re + '"><rect x="0" y="18" width="' + x + '" height="26" rx="8"/></clipPath>' + ie + '<rect x="0" y="18" width="' + x + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + Re + ')">' + F.map(([He, st]) => '<rect x="' + D(He).toFixed(1) + '" y="18" width="' + Math.max(2, D(st) - D(He)).toFixed(1) + '" height="26" fill="' + $ + '"/>').join("") + "</g>" + (r && r >= h ? '<line x1="' + D(r).toFixed(1) + '" x2="' + D(r).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + Le;
  }
  function Kr(e) {
    var d;
    const n = Number((d = w[e]) == null ? void 0 : d.state), r = Date.now();
    if (vt(e).state_class === "total_increasing") {
      const p = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), y = Math.max(1, r - p);
      return [...Array(49)].map((h, x) => p + y * x / 48).map((h) => [h, Math.round(n * Math.pow((h - p) / y, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((p, y) => [r - (48 - y) * 30 * 60 * 1e3, Math.round(n * (0.96 + 0.04 * Math.sin(y / 6)) * 10) / 10]);
  }
  async function di(e, n) {
    var ye, Re;
    let r = ve.get(e);
    if (e.endsWith("_solar_power")) r = { at: Date.now(), points: Xd() };
    else if (Wi(e)) r = { at: Date.now(), points: Kr(e) };
    else if (!r || Date.now() - r.at > 5 * 60 * 1e3) {
      try {
        const ce = new Date(Date.now() - 864e5).toISOString(), ie = await P({ type: "history/history_during_period", start_time: ce, entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), H = ((ie == null ? void 0 : ie[e]) || []).map((Le) => [Le.lu != null ? Le.lu * 1e3 : Date.parse(Le.last_updated || Le.last_changed), Number(Le.s ?? Le.state)]).filter(([Le, He]) => Number.isFinite(Le) && Number.isFinite(He));
        r = { at: Date.now(), points: H };
      } catch {
        r = { at: Date.now(), points: [] };
      }
      ve.set(e, r);
    }
    const d = n || T.querySelector('[data-graph="' + CSS.escape(e) + '"]');
    if (!d) return;
    const p = w[e], y = ((ye = p == null ? void 0 : p.attributes) == null ? void 0 : ye.unit_of_measurement) || "", h = r.points.slice(), x = Number(p == null ? void 0 : p.state);
    if (Number.isFinite(x) && !e.endsWith("_solar_power") && h.push([Date.now(), x]), h.length < 2) {
      d.setAttribute("aria-label", Ae(e) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const S = h.map((ce) => ce[1]), D = Math.min(...S), F = Math.max(...S), B = (ce) => ce.toLocaleString(void 0, { maximumFractionDigits: Math.abs(ce) >= 100 ? 0 : 1 }), $ = ((Re = p == null ? void 0 : p.attributes) == null ? void 0 : Re.state_class) === "total_increasing";
    eo(d, h, Ae(e) + ", last 24 hours: " + ($ ? "+" + B(S[S.length - 1] - S[0]) : D === F ? B(D) : B(D) + " to " + B(F)) + (y ? " " + y : ""), { smooth: e.endsWith("_solar_power"), zero: e.endsWith("_solar_power") });
  }
  function gr() {
    const e = T == null ? void 0 : T.querySelector("[data-solar]");
    if (!e) return;
    const n = Xd();
    eo(e, n, "Solar, last 24 hours: up to " + Ie(Math.max(...n.map((r) => r[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function ci(e, n) {
    const r = n.entity_id, d = C.get(r) || {}, p = { open_cover: 100, close_cover: 0, set_cover_position: n.position, toggle: Fn(r) > 0 ? 0 : 100 }[e], y = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: n.tilt_position }[e];
    p != null && (d.pos = p), y != null && (d.tilt = y), e === "stop_cover" && (delete d.pos, delete d.tilt), e === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), C.set(r, d);
  }
  function $r(e, n, r) {
    var p;
    const d = r == null ? void 0 : r.entity_id;
    return e !== "light" || typeof d != "string" || !Be[d] || !Tt(d) || r.brightness_pct != null || r.brightness != null ? [n, r] : n !== "turn_on" && !(n === "toggle" && ((p = w[d]) == null ? void 0 : p.state) !== "on") ? [n, r] : ["turn_on", { ...r, brightness_pct: Be[d] }];
  }
  function vr(e, n, r, d) {
    let p = { entity_id: r, ...d || {} };
    return [n, p] = $r(e, n, p), e === "cover" && ci(n, p), et[r] = (et[r] || 0) + 1, vi.set(Ec, JSON.stringify(et)), ji.call(e, n, p) ? Promise.resolve() : Promise.resolve(se(e, n, p));
  }
  function Xr(e) {
    const [n, r, d, p] = e.split("|");
    vr(n, r, d, p ? JSON.parse(p) : null).catch(() => {
    });
  }
  function bn(e, n) {
    Oe.set("pos|" + e, n), gn.delete(e), Xa = Xa.map(() => ""), [T, ot].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(e) + '"]').forEach((p) => gt(p, n)));
    const r = T.querySelector('.tfAction[data-k="' + CSS.escape(e) + '"] .tfName .activityRowMeta');
    if (r && (r.textContent = Math.round(n) + "%"), (b == null ? void 0 : b.id) === e) {
      const d = ot.querySelector(".tfMoreState"), p = ot.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(n) + "%", d.classList.add("live")), p && (p.textContent = "Currently " + Fn(e) + "%");
    }
    qs(e).forEach((d) => d.update(fr(e)));
  }
  const nn = (e, n) => {
    const r = e.shiftKey ? 10 : 1, d = { ArrowUp: n + r, ArrowRight: n + r, ArrowDown: n - r, ArrowLeft: n - r, PageUp: n + 25, PageDown: n - 25, Home: 0, End: 100 }[e.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function Jr(e, n) {
    var ce;
    const r = e.dataset.blocks;
    (ce = e.setPointerCapture) == null || ce.call(e, n.pointerId);
    const d = (ie) => {
      const H = e.getBoundingClientRect();
      return Math.max(0, Math.min(100, (ie.clientX - H.left) / H.width * 100));
    }, p = d(n), y = n.clientX;
    let h = !1, x = fa(r), S = p, D = 0;
    const F = () => {
      x = Math.abs(S - x) < 0.2 ? S : x + (S - x) * 0.14, bn(r, x), D = requestAnimationFrame(F);
    }, B = () => {
      h || (h = !0, e.classList.add("fine"), D = requestAnimationFrame(F));
    }, $ = setTimeout(B, 350), ye = (ie) => {
      S = d(ie), Math.abs(ie.clientX - y) > 6 && (clearTimeout($), B());
    }, Re = () => {
      clearTimeout($), cancelAnimationFrame(D), e.removeEventListener("pointermove", ye), e.removeEventListener("pointerup", Re), e.removeEventListener("pointercancel", Re), e.classList.remove("fine"), bn(r, h ? Math.round(x) : (Math.min(3, Math.floor(p / 25)) + 1) * 25), pi("pos", r);
    };
    e.addEventListener("pointermove", ye), e.addEventListener("pointerup", Re), e.addEventListener("pointercancel", Re);
  }
  function zs(e) {
    var p;
    const [n, r] = e.dataset.open.split("|"), d = e.closest(".tfCard");
    j = { key: n, id: r, h: d ? Math.round(d.getBoundingClientRect().height) : 0 }, gn.delete(n), yn(), (p = T.querySelector(".tfOpen [data-close]")) == null || p.focus({ preventScroll: !0 });
  }
  function Qr(e) {
    var n;
    ge = e.dataset.area, T.querySelectorAll(".tfAreaPanel").forEach((r) => {
      var p;
      const d = r === e;
      r.classList.toggle("active", d), r.setAttribute("aria-expanded", String(d)), (p = r.querySelector(".panelExpanded")) == null || p.toggleAttribute("inert", !d);
    }), gn.set("areas", Oo(((n = T.querySelector('[data-k="areas"]')) == null ? void 0 : n.style.order) || 1));
  }
  const es = {
    bright: { value: (e, n) => Math.round(n * 100), text: (e, n) => n ? n + "%" : "Off", send: (e, n) => n > 0 ? ["light", "turn_on", { brightness_pct: n }] : ["light", "turn_off", {}] },
    ct: { value: (e, n) => {
      const [r, d] = Oa(e);
      return Math.round(r + n * (d - r));
    }, text: (e, n) => n.toLocaleString() + "k", send: (e, n) => ["light", "turn_on", { color_temp_kelvin: n }] },
    hue: { value: (e, n) => Math.round(n * 360), text: () => "Colour", send: (e, n) => {
      var r;
      return ["light", "turn_on", { hs_color: [n, Math.max(60, ((r = vt(e).hs_color) == null ? void 0 : r[1]) || 100)] }];
    } },
    pos: { value: (e, n) => Math.round(n * 100), text: (e, n) => Math.round(n) + "%", send: (e, n) => ["cover", "set_cover_position", { position: Math.round(n) }] },
    tilt: { value: (e, n) => Math.round(n * 100), text: (e, n) => "Tilt " + n + "%", send: (e, n) => ["cover", "set_cover_tilt_position", { tilt_position: n }] },
    vol: { value: (e, n) => Math.round(n * 100) / 100, text: (e, n) => Math.round(n * 100) + "%", send: (e, n) => ["media_player", "volume_set", { volume_level: n }] }
  };
  function ui(e, n, r, d) {
    var S;
    const p = es[n].value(r, d);
    Oe.set(n + "|" + r, p);
    const y = Math.round(d * 100) + "%", h = e.querySelector("i");
    if (n === "tilt") {
      h.style.width = "calc((100% - 6px) * " + d + ")";
      const [D, F] = e.querySelectorAll("span");
      D.classList.toggle("lit", d > 0.08), F.classList.toggle("lit", d > 0.92), gn.delete(r), Xa = Xa.map(() => ""), qs(r).forEach((B) => B.update(fr(r)));
    } else if (h) h.style.width = y;
    else {
      let D = e.querySelector("b");
      D || (D = document.createElement("b"), e.appendChild(D)), D.style.left = y;
    }
    e.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const x = (S = e.closest(".tfAction") || e.closest(".tfMore")) == null ? void 0 : S.querySelector(".tfName .activityRowMeta, .tfMoreState");
    x && (x.textContent = es[n].text(r, p));
  }
  function pi(e, n) {
    const r = Oe.get(e + "|" + n), [d, p, y] = es[e].send(n, r), h = () => setTimeout(() => {
      Oe.delete(e + "|" + n), yn();
    }, 1500);
    vr(d, p, n, y).then(h, h);
  }
  function ts(e) {
    e.addEventListener("click", (n) => {
      var d, p;
      const r = n.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (ln && !n.target.closest(".tfBoardMenu,[data-board-more]") && Sn(), !(!r || !e.contains(r) || r.disabled))
        if (r.dataset.boardMore)
          (ln == null ? void 0 : ln.key) === r.dataset.boardMore ? Sn(!0) : ti(r.dataset.boardMore, r);
        else if (r.dataset.boardAct) Ll(ln.key, r.dataset.boardAct);
        else if (r.dataset.boardShow) ir(r.dataset.boardShow);
        else if (r.dataset.favHide) Ns(r.dataset.favHide, !1);
        else if (r.dataset.energyPick) _i(r.dataset.energyPick);
        else if (r.dataset.act) Xr(r.dataset.act);
        else if (r.hasAttribute("data-details")) Ja(!(b != null && b.details));
        else if (r.hasAttribute("data-details-close")) Ja(!1);
        else if (r.dataset.summary) _a(r.dataset.summary, r);
        else if (r.dataset.star) Si(r.dataset.star);
        else if (r.hasAttribute("data-more-back")) {
          const y = b.id;
          b = b.back, mr(), (d = ot.querySelector('.tfMore [data-more="' + CSS.escape(y) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else if (r.hasAttribute("data-favs-edit")) Ia("favourites", r);
        else if (r.dataset.acts) JSON.parse(r.dataset.acts).forEach(([y, h, x, S]) => vr(y, h, x, S).catch(() => {
        }));
        else if (r.dataset.more) Ia(r.dataset.more, r);
        else if (r.hasAttribute("data-more-close")) li();
        else if (r.dataset.go) wo("room:" + r.dataset.go);
        else if (r.hasAttribute("data-area-back")) si();
        else if (r.dataset.open) zs(r);
        else if (r.hasAttribute("data-close")) {
          const y = j;
          j = null, gn.delete(y.key), yn(), (p = T.querySelector('[data-open="' + CSS.escape(y.key + "|" + y.id) + '"]')) == null || p.focus({ preventScroll: !0 });
        } else r.classList.contains("tfAreaPanel") && !r.classList.contains("active") && Qr(r);
    }), e.addEventListener("keydown", (n) => {
      var d, p, y, h, x, S, D;
      const r = n.target;
      if ((d = r.dataset) != null && d.open && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), zs(r)), (p = r.dataset) != null && p.energyPick && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), _i(r.dataset.energyPick)), (y = r.classList) != null && y.contains("tfAreaPanel") && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Qr(r)), (h = r.dataset) != null && h.summary && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), _a(r.dataset.summary, r)), n.key === "Escape" && ln && e === T) {
        n.preventDefault(), Sn(!0);
        return;
      }
      if (n.key === "Escape" && sn && e === T) {
        n.preventDefault(), xa(!1), (x = c("dashEditNav")) == null || x.focus();
        return;
      }
      if (n.key === "Escape" && Te && e === T && (n.preventDefault(), si()), (S = r.dataset) != null && S.blocks) {
        const F = r.dataset.blocks, B = nn(n, Math.round(fa(F)));
        if (B == null) return;
        n.preventDefault(), bn(F, B), clearTimeout(ue.get(F)), ue.set(F, setTimeout(() => pi("pos", F), 500));
        return;
      }
      if ((D = r.dataset) != null && D.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(n.key)) {
        n.preventDefault();
        const [F, B] = r.dataset.drag.split("|"), $ = Number(r.getAttribute("aria-valuenow")) / 100, ye = n.key === "Home" ? 0 : n.key === "End" ? 1 : Math.max(0, Math.min(1, $ + (n.key === "ArrowLeft" || n.key === "ArrowDown" ? -0.05 : 0.05)));
        ui(r, F, B, ye), pi(F, B);
      }
    }), e.addEventListener("pointerdown", (n) => {
      var $t;
      const r = n.target.closest("[data-blocks]");
      if (r && n.button === 0) {
        n.preventDefault(), Jr(r, n);
        return;
      }
      const d = n.target.closest("[data-drag]");
      if (!d || n.button > 0) return;
      const [p, y] = d.dataset.drag.split("|");
      if (p === "bright" && !Tt(y)) {
        Xr(lt("light", "toggle", y));
        return;
      }
      const h = p === "bright" && (($t = w[y]) == null ? void 0 : $t.state) !== "on", x = n.pointerType !== "mouse", S = p === "tilt" ? 3 : 0, D = () => d.getBoundingClientRect().width - S * 2, F = (zt) => {
        const Pn = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (zt.clientX - Pn.left - S) / D()));
      };
      let B = x ? "waiting" : h ? "pressed" : "dragging", $ = 0, ye = 0;
      const Re = n.clientX, ce = n.clientY, ie = (zt, Pn) => Math.hypot(zt.clientX - Re, zt.clientY - ce) > Pn, H = () => {
        try {
          d.setPointerCapture(n.pointerId);
        } catch {
        }
      };
      x || (n.preventDefault(), H()), B === "dragging" && ui(d, p, y, F(n));
      const Le = x && setTimeout(() => {
        var zt, Pn;
        B === "waiting" && (B = "held", E = d, d.classList.add("held"), H(), (zt = navigator.userActivation) != null && zt.hasBeenActive && ((Pn = navigator.vibrate) == null || Pn.call(navigator, 8)), $ = h ? (Be[y] ?? 100) / 100 : Number(d.getAttribute("aria-valuenow")) / 100, ye = Re, ui(d, p, y, $));
      }, k), He = (zt) => {
        B === "waiting" && ie(zt, 8) ? B = "gone" : B === "pressed" && ie(zt, 4) && (B = "dragging"), B === "held" ? ui(d, p, y, Math.max(0, Math.min(1, $ + (zt.clientX - ye) / D()))) : B === "dragging" && ui(d, p, y, F(zt));
      }, st = (zt) => {
        clearTimeout(Le), ["pointermove", "pointerup", "pointercancel"].forEach((Pn, je) => d.removeEventListener(Pn, je ? st : He)), d.classList.remove("held"), E === d && (E = null), B === "held" || B === "dragging" ? pi(p, y) : zt.type === "pointerup" && h && (B === "waiting" || B === "pressed") && vr("light", "turn_on", y).catch(() => {
        });
      };
      d.addEventListener("pointermove", He), d.addEventListener("pointerup", st), d.addEventListener("pointercancel", st);
    }), e.addEventListener("touchmove", (n) => {
      E && n.cancelable && n.preventDefault();
    }, { passive: !1 });
  }
  return T && v && (kl(), ts(T), ts(ot), ot.addEventListener("click", (e) => {
    e.target === ot && li();
  }), (ns = a.getElementById("homeNav")) == null || ns.addEventListener("click", () => {
    Te && si();
  }), (to = a.querySelector(".bottomNav")) == null || to.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Pc + "</button>"), (as = c("dashEditNav")) == null || as.addEventListener("click", () => xa(!sn)), T.addEventListener("pointerdown", Hs), T.addEventListener("hass-action", (e) => {
    var d, p;
    const n = (p = (d = e.target).closest) == null ? void 0 : p.call(d, ".tfDac"), r = n == null ? void 0 : n.dataset.k;
    !r || !n.dataset.dac.startsWith("dash:") || sn || (e.stopPropagation(), Ia(r, n));
  }), new ResizeObserver(() => {
    m.classList.contains("tfDash") && Ls() !== ra ? yn() : la();
  }).observe(T), window.addEventListener("resize", la, { passive: !0 }), ot.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.stopPropagation(), b != null && b.details ? Ja(!1) : li());
  })), Q(), {
    update(e) {
      if (!v) return;
      const n = !Object.keys(w).length;
      w = e || {};
      for (const r in w) r.startsWith("light.") && w[r].state === "on" && Tt(r) && Ke(r, so(w[r]));
      n ? Ba() : yn();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      ro = !0, Ue == null || Ue.destroy(), Ue = null, tt == null || tt.forEach((e) => e.destroy()), tt = null;
    },
    resume() {
      ro = !1, !(!v || !(T != null && T.querySelector("[data-tf]"))) && (dt.isConnected && Gi(dt.style.order), Ui());
    }
  };
}
const pf = "0.50.0", ld = "move_assistant", hf = "move_assistant", Fc = "move_assistant_checkin_reminder";
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
        var v, A;
        return (A = (v = this._hass) == null ? void 0 : v.connection) != null && A.subscribeMessage ? this._hass.connection.subscribeMessage(g, m) : Promise.reject(new Error("no connection"));
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
