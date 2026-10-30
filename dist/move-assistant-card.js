const Mu = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Cu = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;align-items:start}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDac{grid-column:span 2;min-width:0}.tfDac>dual-controller-v3{display:block}.tfMoreActions .tfDac{grid-column:auto}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);font:400 24px/1 var(--font);cursor:pointer}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px;height:38px;padding:3px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:9px 4px 4px 9px}.tfBlocks>span:nth-child(4){border-radius:4px 9px 9px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 12px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:38px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:3px;bottom:3px;left:3px;border-radius:9px;background:var(--primary)}.tfTilt span{position:relative;padding:0 15px;color:var(--text);font:600 12px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns{display:flex;gap:12px}.tfCoverBtns button{flex:1;display:grid;place-items:center;height:38px;min-width:0;min-height:0;padding:0;border:0;border-radius:12px;background:var(--tile);color:var(--text);cursor:pointer}.tfCoverBtns button:disabled{opacity:.38;cursor:default}.tfCoverBtns svg{display:block;width:22px;height:22px}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}.tfMore .tfCoverBtns{gap:8px}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:640px}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px;align-items:start}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:flex;align-items:center;gap:12px;min-width:0;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}.tfDashTiles>.tfAction{justify-content:space-between}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%}#app.tfBoard .tfDashTiles>.tfAction{padding-block:18px}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}', Su = '.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:clamp(8px,calc(5.6cqw * var(--wb-k,1)),14px);aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:clamp(12px,calc(7.9cqw * var(--wb-k,1)),20px);border-radius:clamp(22px,calc(11.1cqw * var(--wb-k,1)),28px);overflow:hidden}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbHead{gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px)}.wbSquare .wbChip{width:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);height:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);border-radius:clamp(12px,calc(6.3cqw * var(--wb-k,1)),16px);--wb-icon:clamp(18px,calc(9.5cqw * var(--wb-k,1)),24px)}.wbSquare .wbName{font-size:clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px);line-height:1.4}.wbSquare .wbSub{font-size:clamp(13px,calc(6.3cqw * var(--wb-k,1)),16px)}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:clamp(6px,calc(4cqw * var(--wb-k,1)),10px)}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:20px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 480px){.wbCard.wbWeather{gap:16px;padding:var(--inset)}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}@container wb-card (width < 220px){.wbMoonCaption{display:none}}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}', Tu = `<main id="app"><div class="shell">
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
`, Qn = {
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
}, Jn = (a) => a < 0 ? 0 : a > 1 ? 1 : a, $d = (a, l, o) => a + (l - a) * o, vd = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, Lu = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Xd = {}, Zt = (a, l, o) => {
  const c = a + l + o;
  return Xd[c] || (Xd[c] = Lu(vd(a).map((m, g) => m + (vd(l)[g] - m) * o)));
}, Jd = {}, gl = (a) => Jd[a] || (Jd[a] = vd(a)), Ql = (a, l, o, c) => (m) => {
  if (m <= 0) return 0;
  if (m >= 1) return 1;
  let g = 0, v = 1, L = m;
  for (let b = 0; b < 18; b++)
    L = (g + v) / 2, 3 * (1 - L) * (1 - L) * L * a + 3 * (1 - L) * L * L * o + L * L * L < m ? g = L : v = L;
  return 3 * (1 - L) * (1 - L) * L * l + 3 * (1 - L) * L * L * c + L * L * L;
}, Au = { std: Ql(0.2, 0, 0, 1), acc: Ql(0.3, 0, 1, 1), dec: Ql(0, 0, 0, 1) };
function Ml(a, l) {
  const o = String(a || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || l ? "night" : "day");
}
function Vc(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [Zt(l.clear[0], l.cloudy[0], 0.12), Zt(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Zt(l.rain[0], "#000000", 0.22), Zt(l.rain[1], "#000000", 0.22)], l;
}
const bd = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], wd = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], xd = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function yd(a, l = Qn) {
  const o = { ...Qn, ...l }, c = Vc(o), m = String(a).split("/"), g = c[m[0]] ? m[0] : "clear", v = m[1] === "night", L = c[g][v ? 1 : 0], b = {
    night: v,
    clearness: g === "clear" ? 1 : g === "partly" ? 0.7 : 0.25,
    sky: L,
    skyStops: [L],
    skyT: 0,
    sun: { x: 45, y: v ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: v ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: v ? 1 : 0 },
    stars: bd.map(() => ({ o: 0 })),
    rain: wd.map(() => ({ o: 0, dy: -16 })),
    snow: xd.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, I = (re) => bd.map(() => ({ o: re }));
  return g === "clear" ? v ? (b.moon.o = 1, b.stars = I(1)) : b.sun.o = 1 : g === "partly" ? (b.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: v ? 1 : 0 }, v ? (b.moon = { x: 34, y: 33, d: 48, o: 1 }, b.stars = I(0.7)) : b.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : g === "cloudy" || g === "fog" ? (b.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: v ? 1 : 0 }, v ? b.moon = { x: 40, y: 36, d: 40, o: 0 } : b.sun = { x: 40, y: 36, r: 20, o: 0 }) : (b.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, v ? b.moon = { x: 38, y: 28, d: 36, o: 0 } : b.sun = { x: 38, y: 28, r: 18, o: 0 }, g === "snow" ? b.snow = xd.map(() => ({ o: 1, dy: 0 })) : b.rain = wd.map((re, ne) => ({ o: g === "storm" && ne === 1 ? 0 : 1, dy: 0 })), g === "storm" && (b.bolt = { o: 1, dy: 0 })), b;
}
const Qd = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function _u(a, l, o, c = Qn, m = !1) {
  const g = { ...Qn, ...c }, v = (O, q) => O > 0.01 && q > 0.01 ? "stay" : O > 0.01 ? "leave" : q > 0.01 ? "enter" : "none", L = (O, q, $, te) => {
    const U = O[0] + q * te, W = O[1] - ($ - 1 - q) * te;
    return Au[O[2]](Jn((o - U) / Math.max(1e-3, W - U)));
  }, b = (O, q, $, te = 0, U = 1, W = 0) => {
    const X = v(O.o, q.o);
    if (X === "none") return { ...q, o: 0 };
    const G = L(Qd[$][X], te, U, W), Z = {};
    for (const Q in q) Z[Q] = m && X !== "stay" && Q !== "o" ? X === "leave" ? O[Q] : q[Q] : $d(O[Q], q[Q], G);
    return Z;
  }, I = L(Qd.sky, 0, 1, 0);
  let re, ne;
  if (a.night !== l.night) {
    const O = Math.min(a.clearness, l.clearness), q = Zt(Zt(a.sky, l.sky, 0.5), g.dusk, 0.6 * O);
    re = I < 0.5 ? Zt(a.sky, q, I * 2) : Zt(q, l.sky, I * 2 - 1), ne = O > 0.5 ? [a.sky, g.dusk, l.sky] : [a.sky, l.sky];
  } else
    re = Zt(a.sky, l.sky, I), ne = [a.sky, l.sky];
  return {
    night: o < 0.5 ? a.night : l.night,
    clearness: $d(a.clearness, l.clearness, o),
    sky: re,
    skyStops: ne,
    skyT: I,
    sun: b(a.sun, l.sun, "body"),
    moon: b(a.moon, l.moon, "body"),
    cloud: b(a.cloud, l.cloud, "cloud"),
    stars: l.stars.map((O, q) => b(a.stars[q], O, "fx", q, l.stars.length, 0.05)),
    rain: l.rain.map((O, q) => b(a.rain[q], O, "fx", q, l.rain.length, 0.05)),
    snow: l.snow.map((O, q) => b(a.snow[q], O, "fx", q, l.snow.length, 0.05)),
    bolt: b(a.bolt, l.bolt, "fx")
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
], Xn = (a, l) => (Eu[(l & 7) * 8 + (a & 7)] + 0.5) / 64, Du = 0, Cd = 1, Sd = 2, Td = 3, Ld = 4, $n = 5, _r = 6, vi = 7, Ad = 8, wl = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), Ru = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Bu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((a) => [a[0] * 13 / 11, a[1] * 28 / 24]), zc = (a, l, o) => {
  let c = !1;
  for (let m = 0, g = a.length - 1; m < a.length; g = m++) {
    const v = a[m], L = a[g];
    v[1] > o != L[1] > o && l < (L[0] - v[0]) * (o - v[1]) / (L[1] - v[1]) + v[0] && (c = !c);
  }
  return c;
};
function jc(a, { size: l = 90, px: o = 2, oneBit: c = !1, colors: m = Qn, ink: g = "#26221e", paper: v = "#fbf9f6", clock: L = 0, idle: b = !1 } = {}) {
  const I = { ...Qn, ...m }, re = Math.sin, ne = Math.PI * 2, O = Math.max(6, Math.round(l / o)), q = O / 90, $ = b ? Math.floor(L / 100) * 100 : 0, te = b ? re(ne * $ / 3600) : 0, U = b ? 1.8 * re(ne * $ / 6400) : 0, W = b ? 0.9 * re(ne * $ / 4100) : 0, X = b ? 0.8 * re(ne * $ / 5200) : 0, G = $ / 3400 % 1, Z = b && a.bolt.o > 0.5 && (G < 0.04 || G > 0.08 && G < 0.11), Q = new Array(O * O), T = new Uint8Array(O * O), j = (k, E, C, N, ue) => {
    C == null || k < 0 || E < 0 || k >= O || E >= O || (N >= 1 || N > Xn(k + 5, E + 3)) && (Q[E * O + k] = C, T[E * O + k] = ue);
  }, ve = (k, E, C, N) => {
    for (let ue = Math.max(0, Math.floor(E - C) - 1); ue <= Math.min(O - 1, E + C + 1); ue++) for (let V = Math.max(0, Math.floor(k - C) - 1); V <= Math.min(O - 1, k + C + 1); V++) N(V, ue, V + 0.5 - k, ue + 0.5 - E);
  }, Le = a.skyStops || [a.sky], w = a.skyT || 0;
  for (let k = 0; k < O; k++) {
    const E = a.night ? Jn(1 - (k + 0.5) / (O * 0.7)) * 0.85 : Jn(((k + 0.5) / O - 0.35) / 0.65) * 0.85;
    for (let C = 0; C < O; C++) {
      let N = Le[0];
      if (Le.length > 1) {
        const ue = w * (Le.length - 1), V = Math.min(Le.length - 2, Math.floor(ue));
        N = ue - V > Xn(C, k) ? Le[V + 1] : Le[V];
      }
      E > Xn(C + 2, k + 5) && (N = a.night ? Zt(N, "#000000", 0.28) : Zt(N, "#ffffff", 0.2)), Q[k * O + C] = Z ? Zt(N, "#ffffff", 0.25) : N;
    }
  }
  if (a.sun.o > 0.01) {
    const k = a.sun.x * q, E = a.sun.y * q, C = Math.max(1, a.sun.r * q);
    if (b) {
      const N = C * (1.45 + 0.06 * te), ue = Zt(I.sun, "#ffffff", 0.55);
      if (ve(k, E, N, (V, ae, ce, fe) => {
        const We = Math.sqrt(ce * ce + fe * fe);
        We > C && We < N && j(V, ae, ue, 0.26 * (1 - (We - C) / (N - C)) * a.sun.o, Du);
      }), a.sun.o > 0.5) {
        const V = Math.floor($ / 500) % 2, ae = Math.max(1, C * 0.22);
        for (let ce = 0; ce < 8; ce++) if (ce % 2 === V) for (let fe = C + 1.5; fe < C + 1.5 + ae; fe += 0.7) j(Math.floor(k + Math.cos(ce * Math.PI / 4) * fe), Math.floor(E + Math.sin(ce * Math.PI / 4) * fe), I.sun, a.sun.o, Ad);
      }
    }
    ve(k, E, C, (N, ue, V, ae) => {
      if (V * V + ae * ae > C * C) return;
      const ce = ((V * 0.643 + ae * 0.766) / C + 1) / 2;
      j(N, ue, Jn((ce - 0.62) / 0.38) > Xn(N, ue) ? I.sunEdge : I.sun, a.sun.o, Cd);
    });
  }
  if (bd.forEach((k, E) => {
    const C = a.stars[E].o;
    if (C < 0.01) return;
    const N = Math.floor(k[0] * q), ue = Math.floor(k[1] * q), V = b ? (Math.floor($ / 300) + E * 3) % 6 : 0;
    if (V === 5) return;
    const ae = Math.round(k[2] * q * (V === 4 ? 0.3 : V < 2 ? 1 : 0.6));
    j(N, ue, I.star, C, vi);
    for (let ce = 1; ce <= ae; ce++) {
      const fe = ce === ae && ae > 1 ? Zt(I.star, a.sky, 0.5) : I.star;
      j(N - ce, ue, fe, C, vi), j(N + ce, ue, fe, C, vi), j(N, ue - ce, fe, C, vi), j(N, ue + ce, fe, C, vi);
    }
  }), a.moon.o > 0.01) {
    const k = Math.max(1.5, a.moon.d * q * 0.37), E = a.moon.x * q, C = a.moon.y * q + (b && X > 0.4 ? -1 : 0), N = E + 0.547 * k, ue = C - 0.503 * k, V = 0.82 * k, ae = Zt(I.moon, "#ffffff", 0.6);
    ve(E, C, k, (ce, fe, We, at) => {
      if (We * We + at * at > k * k) return;
      const wt = ce + 0.5 - N, pn = fe + 0.5 - ue;
      wt * wt + pn * pn <= V * V || j(ce, fe, Jn((at + k) / (2 * k) * 1.1 - 0.1) > Xn(ce, fe) ? I.moon : ae, a.moon.o, Sd);
    });
  }
  const we = Math.max(2, Math.round(15.65 * q)), Se = Math.max(1, Math.round(5.87 * q * 0.5));
  wd.forEach((k, E) => {
    const C = a.rain[E];
    let N = C.dy, ue = C.o;
    if (ue < 0.01) return;
    if (b) {
      const ce = ($ / 950 + E / 3) % 1;
      N += -5 + ce * 14, ue *= ce < 0.18 ? ce / 0.18 : ce > 0.72 ? (1 - ce) / 0.28 : 1;
    }
    const V = (k[0] + 3 + U) * q, ae = (k[1] + N) * q;
    for (let ce = 0; ce < we; ce++) for (let fe = 0; fe < Se; fe++) j(Math.floor(V - 0.208 * ce) + fe, Math.floor(ae) + ce, I.rain, ue, Ld);
  });
  const Oe = Math.max(0, Math.round(7.34 * q / 2.6));
  if (xd.forEach((k, E) => {
    const C = a.snow[E];
    let N = C.dy, ue = 0, V = C.o;
    if (V < 0.01) return;
    if (b) {
      const fe = ($ / 3200 + E / 5) % 1;
      N += -6 + fe * 14, ue = 1.5 * re(ne * (fe * 1.5 + E / 5)), V *= fe < 0.2 ? fe / 0.2 : fe > 0.75 ? (1 - fe) / 0.25 : 1;
    }
    const ae = Math.floor((k[0] + 3.67 + ue + U) * q), ce = Math.floor((k[1] + 3.67 + N) * q);
    j(ae, ce, I.snow, V, $n);
    for (let fe = 1; fe <= Oe; fe++)
      j(ae - fe, ce, I.snow, V, $n), j(ae + fe, ce, I.snow, V, $n), j(ae, ce - fe, I.snow, V, $n), j(ae, ce + fe, I.snow, V, $n), Oe > 1 && fe < Oe && (j(ae - fe, ce - fe, I.snow, V, $n), j(ae + fe, ce - fe, I.snow, V, $n), j(ae - fe, ce + fe, I.snow, V, $n), j(ae + fe, ce + fe, I.snow, V, $n));
  }), a.bolt.o > 0.01)
    if (O >= 30) {
      const k = 39 + U, E = 50 + a.bolt.dy;
      for (let C = Math.floor(E * q); C <= (E + 28) * q; C++) for (let N = Math.floor(k * q); N <= (k + 13) * q; N++)
        zc(Bu, (N + 0.5) / q - k, (C + 0.5) / q - E) && j(N, C, I.sun, a.bolt.o, _r);
    } else {
      const k = O / 18, E = 7, C = 10 + Math.round(a.bolt.dy * 0.2);
      Ru.forEach((N, ue) => N.split("").forEach((V, ae) => {
        if (V !== "#") return;
        const ce = Math.floor((E + ae) * k), fe = Math.floor((C + ue) * k);
        for (let We = fe; We < Math.max(fe + 1, Math.floor((C + ue + 1) * k)); We++) for (let at = ce; at < Math.max(ce + 1, Math.floor((E + ae + 1) * k)); at++) j(at, We, I.sun, a.bolt.o, _r);
      }));
    }
  if (a.cloud.o > 0.01) {
    const k = Math.max(3, a.cloud.w * q), E = k * 0.6665, C = (a.cloud.x + U) * q - k / 2, N = (a.cloud.y + W) * q - E / 2, ue = Zt(I.cloudDay, I.cloudNight, Math.round(a.cloud.f * 4) / 4), V = Zt(ue, "#000000", 0.16);
    for (let ae = Math.max(0, Math.floor(N) - 1); ae <= Math.min(O - 1, N + E + 1); ae++) for (let ce = Math.max(0, Math.floor(C) - 1); ce <= Math.min(O - 1, C + k + 1); ce++) {
      const fe = (ce + 0.5 - C) / k, We = (ae + 0.5 - N) / k;
      wl(fe, We) && j(ce, ae, !wl(fe, We + 1 / k) || Jn((We - 0.42) / 0.25) * 0.8 > Xn(ce, ae) ? V : ue, a.cloud.o, Td);
    }
  }
  return Gc(Q, T, O, O, { oneBit: c, ink: g, paper: v, snowInk: !a.night });
}
function Gc(a, l, o, c, { oneBit: m, ink: g, paper: v, snowInk: L }) {
  const b = new Uint8ClampedArray(o * c * 4), I = gl(g), re = gl(v);
  for (let ne = 0; ne < c; ne++) for (let O = 0; O < o; O++) {
    const q = ne * o + O, $ = l[q];
    if (a[q] == null) continue;
    let te = gl(a[q]);
    if (m) {
      let U;
      $ === Ld || $ === Ad ? U = !0 : $ === $n ? U = L : $ === vi || $ === _r ? U = !1 : U = Math.round((0.2126 * te[0] + 0.7152 * te[1] + 0.0722 * te[2]) / 255 * 4) / 4 <= Xn(O, ne), ($ === Cd || $ === Sd || $ === Td || $ === _r) && (O > 0 && l[q - 1] !== $ || O < o - 1 && l[q + 1] !== $ || ne > 0 && l[q - o] !== $ || ne < c - 1 && l[q + o] !== $) && (U = !0), te = U ? I : re;
    }
    b[q * 4] = te[0], b[q * 4 + 1] = te[1], b[q * 4 + 2] = te[2], b[q * 4 + 3] = 255;
  }
  return { w: o, h: c, data: b };
}
const Nu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Pu = (a) => Ml(a, !1).split("/")[0], ed = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Iu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Hu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Fu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Ou = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", qu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Wu = [".##", "##.", ".#.", "#.."];
function Uc(a, { width: l, height: o, colors: c, wave: m = 0.38, soft: g = 6, glow: v = 0.6 }) {
  const L = { ...Qn, dawn: "#e5a77e", ...c }, b = Vc(L), I = l, re = o, ne = I / 6, O = ne / 2, q = Math.PI * 2, $ = a.length ? a : [{ cond: "cloudy", night: !1 }], te = [...Array(12)].map((G, Z) => {
    const Q = $[Math.min(Z, $.length - 1)], T = Pu(Q.cond), j = Z % 2 === 1;
    return { cond: Q.cond, k: T, night: j, sky: b[T][j ? 1 : 0], cover: Nu[T] };
  }), U = (G) => re * (0.5 - m * Math.cos(q * (G / ne - 0.25)));
  return { C: L, S: te, W: I, H: re, cw: ne, sw: O, TAU: q, yb: U, side: (G, Z, Q) => {
    const T = (G ? U(Z) - Q : Q - U(Z)) / Math.max(3, g * 1.4) + 0.5;
    return T <= 0 ? 0 : T >= 1 ? 1 : T;
  }, glowAt: (G) => {
    const Z = ((G / ne - 0.25) % 1 + 1) % 1, Q = Math.max(0, Math.min(5, Math.round(G / ne - 0.25))), T = Math.max(0, Math.min(5, Math.round(G / ne - 0.75))), j = 1 - (te[2 * Q].cover + te[2 * T + 1].cover) / 2, ve = Math.sin(Math.PI * Math.min(1, Math.max(0, U(G) / re)));
    return { c: Z < 0.5 ? L.dusk : L.dawn, a: v * (0.2 + 0.8 * j) * ve * ve };
  }, soft: g, tw: ne * 0.3, sy: re / 90 };
}
function Yc(a, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: g, side: v, C: L, TAU: b, sy: I } = a, re = l, ne = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((O, q) => {
    const $ = ed(c * 977 + q * 131 + 7), te = (q + 0.5) * g, U = O.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[O.k] : 0;
    for (let W = 0; W < U; W++) {
      const X = te + ($() - 0.5) * g * 1.6, G = (6 + $() * 76) * I, Z = $() < 0.35, Q = 1.8 + $() * 1.6, T = v(!0, X, G) * (Z ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(b * re / 2600 + W * 1.7 + q) : 1);
      T >= 0.03 && ne.stars.push({ x: X, y: G, big: Z, size: Q, o: T });
    }
    if (!O.night && (O.k === "clear" || O.k === "partly")) {
      const W = te + ($() - 0.5) * g * 0.3, X = Math.min(15, g * 0.29);
      ne.suns.push({ x: W, y: 32 * I, rad: X, halo: X * 2.8 * (o ? 1 + 0.07 * Math.sin(b * re / 3600 + q) : 1) });
    }
    if (O.night && (O.k === "clear" || O.k === "partly")) {
      const W = Math.min(0.78, g * 0.55 / 34), X = te - 23 * W + ($() - 0.5) * g * 0.2;
      ne.moons.push({ x: X + 23 * W, y: (4 + (o ? 0.8 * Math.sin(b * re / 5200 + q) : 0)) * I + 23 * W, d: 46 * W });
    }
  }), m.forEach((O, q) => {
    const $ = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[O.k];
    if (!$) return;
    const te = ed(c * 577 + q * 71 + 3), U = (q + 0.5) * g, W = O.k === "rain" || O.k === "storm" || O.night ? L.cloudNight : L.cloudDay, X = O.night ? 0.82 : O.k === "storm" ? 0.75 : 1;
    for (let G = 0; G < $; G++) {
      const Z = g / 46 * (O.k === "partly" ? 0.85 : 0.75 + te() * 0.55), Q = U + (O.k === "partly" ? g * 0.12 : (te() - 0.5) * g * 1.05), T = (O.k === "partly" ? 40 : 6 + te() * 26) * I, j = o ? 2.5 * Math.sin(b * re / 9e3 + q * 1.3 + G * 2.1) : 0, ve = o ? 0.9 * Math.sin(b * re / 6100 + q + G) : 0;
      ne.clouds.push({ x: Q - 23 * Z + j, y: T - 15.33 * Z + ve, w: 46 * Z, h: 30.66 * Z, fill: W, o: X * ($ > 1 && G === 0 ? 0.85 : 1) });
    }
  }), m.forEach((O, q) => {
    const $ = ed(c * 313 + q * 29 + 11), te = (q + 0.5) * g, U = O.cond === "pouring" ? 16 : O.cond === "rainy" || O.cond === "hail" ? 9 : O.cond === "lightning-rainy" ? 12 : O.cond === "snowy-rainy" ? 5 : 0;
    for (let X = 0; X < U; X++) {
      let G = te + ($() - 0.5) * g * 1.05, Z = 44 + $() * 36, Q = 1;
      if (o) {
        const j = ((Z - 44 + re * 0.04) % 36 + 36) % 36;
        G -= 0.21 * (j - (Z - 44)), Z = 44 + j, Q = Math.min(1, j / 6, (36 - j) / 6);
      }
      Z *= I;
      const T = v(O.night, G, Z) * Q;
      T >= 0.05 && ne.drops.push({ x: G, y: Z, o: T });
    }
    const W = O.cond === "snowy" ? 11 : O.cond === "snowy-rainy" ? 6 : 0;
    for (let X = 0; X < W; X++) {
      let G = te + ($() - 0.5) * g * 1.05, Z = 40 + $() * 44, Q = 1;
      if (o) {
        const j = ((Z - 40 + re * 9e-3) % 44 + 44) % 44;
        Z = 40 + j, G += 1.6 * Math.sin(b * re / 2800 + X * 1.9 + q), Q = Math.min(1, j / 6, (44 - j) / 6);
      }
      Z *= I;
      const T = v(O.night, G, Z) * Q;
      T >= 0.05 && ne.flakes.push({ x: G, y: Z, o: T });
    }
    if (O.k === "fog") {
      const X = O.night ? "#c8ccd6" : "#ffffff", G = O.night ? 0.28 : 0.62, Z = o ? 4 * Math.sin(b * re / 8e3 + q) : 0;
      for (let Q = 0; Q < 4; Q++) ne.fogs.push({ x: te - g * 0.75 + Q % 2 * g * 0.18 + (Q % 2 ? Z : -Z), y: (30 + Q * 13) * I, w: g * 1.3, c: X, a: G });
    }
    if (O.k === "storm") {
      const X = (re / 3400 + q * 0.37) % 1;
      ne.bolts.push({ x: te + ($() - 0.5) * g * 0.3 - 5, y: 36 * I, o: o && !(X < 0.05 || X > 0.09 && X < 0.12) ? 0.8 : 1 });
    }
  }), ne;
}
function Vu(a, l, o, c, m, g, v, L) {
  const { S: b, C: I, cw: re, yb: ne, glowAt: O, soft: q, tw: $, sy: te } = a, U = new Array(o * c), W = new Uint8Array(o * c), X = new Uint8Array(o * c), G = (k, E, C, N, ue) => {
    C == null || k < 0 || E < 0 || k >= o || E >= c || (N >= 1 || N > Xn(k + 5, E + 3)) && (U[E * o + k] = C, W[E * o + k] = ue);
  }, Z = (k, E, C, N) => {
    for (let ue = Math.max(0, Math.floor(E - C) - 1); ue <= Math.min(c - 1, E + C + 1); ue++) for (let V = Math.max(0, Math.floor(k - C) - 1); V <= Math.min(o - 1, k + C + 1); V++) N(V, ue, V + 0.5 - k, ue + 0.5 - E);
  }, Q = (k, E, C) => {
    for (let ue = 0; ue < k.length - 1; ue++) {
      const V = (ue + E) * re;
      if (C < V - $ / 2) return [k[ue], k[ue], 0];
      if (C <= V + $ / 2) return [k[ue], k[ue + 1], (C - V + $ / 2) / $];
    }
    const N = k[k.length - 1];
    return [N, N, 0];
  }, T = b.filter((k) => !k.night).map((k) => k.sky), j = b.filter((k) => k.night).map((k) => k.sky), ve = q / g, Le = 16 * te / g;
  for (let k = 0; k < o; k++) {
    const E = (k + 0.5) * m, C = ne(E) / g, N = Q(T, 0.75, E), ue = Q(j, 1.25, E), V = O(E);
    for (let ae = 0; ae < c; ae++) {
      const ce = Xn(k, ae), fe = ae + 0.5 - C, We = (ve > 0.01 ? Jn(0.5 + fe / ve) : fe > 0 ? 1 : 0) > ce;
      let at = We ? N[2] > ce ? N[1] : N[0] : ue[2] > ce ? ue[1] : ue[0];
      (We ? Jn(((ae + 0.5) / c - 0.45) / 0.55) * 0.7 : Jn(1 - (ae + 0.5) / (c * 0.55)) * 0.7) > Xn(k + 2, ae + 5) && (at = We ? Zt(at, "#ffffff", 0.18) : Zt(at, "#000000", 0.25)), We && fe >= 0 && fe < Le && V.a * 1.3 * (1 - fe / Le) > Xn(k + 6, ae + 1) && (at = V.c), U[ae * o + k] = at, X[ae * o + k] = We ? 0 : 1;
    }
  }
  const w = Zt(I.sun, "#ffffff", 0.55), we = Zt(I.moon, "#ffffff", 0.6);
  l.stars.forEach((k) => {
    const E = Math.floor(k.x / m), C = Math.floor(k.y / g);
    if (E < 0 || C < 0 || E >= o || C >= c || !X[C * o + E] || k.o < 0.15) return;
    const N = k.o > 0.45 ? I.star : Zt(I.star, U[C * o + E], 0.5), ue = k.big && k.o > 0.6 ? Math.floor(k.size / m) : 0;
    G(E, C, N, 1, vi);
    for (let V = 1; V <= ue; V++) [[E - V, C], [E + V, C], [E, C - V], [E, C + V]].forEach((ae) => {
      ae[0] >= 0 && ae[1] >= 0 && ae[0] < o && ae[1] < c && X[ae[1] * o + ae[0]] && G(ae[0], ae[1], N, 1, vi);
    });
  }), l.suns.forEach((k) => {
    const E = Math.max(1.5, k.rad / m), C = k.x / m, N = k.y / g, ue = k.halo / m * 0.85;
    if (Z(C, N, ue, (V, ae, ce, fe) => {
      const We = Math.sqrt(ce * ce + fe * fe);
      We > E && We < ue && !X[ae * o + V] && G(V, ae, w, 0.3 * (1 - (We - E) / (ue - E)), 0);
    }), L) {
      const V = Math.floor(v / 500) % 2, ae = Math.max(1, E * 0.3);
      for (let ce = 0; ce < 8; ce++) if (ce % 2 === V) for (let fe = E + 1.2; fe < E + 1.2 + ae; fe += 0.7) G(Math.floor(C + Math.cos(ce * Math.PI / 4) * fe), Math.floor(N + Math.sin(ce * Math.PI / 4) * fe), I.sun, 1, Ad);
    }
    Z(C, N, E, (V, ae, ce, fe) => {
      ce * ce + fe * fe <= E * E && G(V, ae, Jn(((fe / E + 1) / 2 - 0.6) / 0.4) > Xn(V, ae) ? I.sunEdge : I.sun, 1, Cd);
    });
  }), l.moons.forEach((k) => {
    const E = Math.max(1.5, k.d * 0.37 / m), C = k.x / m, N = k.y / g, ue = C + 0.547 * E, V = N - 0.503 * E, ae = 0.82 * E;
    Z(C, N, E, (ce, fe, We, at) => {
      if (We * We + at * at > E * E) return;
      const wt = ce + 0.5 - ue, pn = fe + 0.5 - V;
      wt * wt + pn * pn > ae * ae && G(ce, fe, Jn((at + E) / (2 * E) * 1.1 - 0.1) > Xn(ce, fe) ? I.moon : we, 1, Sd);
    });
  }), l.clouds.forEach((k) => {
    const E = Math.max(3, k.w / m), C = E * 0.6665, N = k.x / m, ue = k.y / g, V = Zt(k.fill, "#000000", 0.16);
    for (let ae = Math.max(0, Math.floor(ue) - 1); ae <= Math.min(c - 1, ue + C + 1); ae++) for (let ce = Math.max(0, Math.floor(N) - 1); ce <= Math.min(o - 1, N + E + 1); ce++) {
      const fe = (ce + 0.5 - N) / E, We = (ae + 0.5 - ue) / E;
      wl(fe, We) && G(ce, ae, !wl(fe, We + 1 / E) || Jn((We - 0.42) / 0.25) * 0.8 > Xn(ce, ae) ? V : k.fill, k.o, Td);
    }
  }), l.fogs.forEach((k) => {
    const E = Math.floor(k.y / g), C = Math.max(E, Math.floor((k.y + 6 * te) / g) - 1), N = Math.floor(k.x / m), ue = Math.floor((k.x + k.w) / m);
    for (let V = E; V <= C; V++) for (let ae = N; ae <= ue; ae++) {
      const ce = (ae - N) / Math.max(1, ue - N);
      G(ae, V, k.c, k.a * (ce < 0.25 ? ce / 0.25 : ce > 0.75 ? (1 - ce) / 0.25 : 1), 0);
    }
  });
  const Se = Math.max(2, Math.round(9 / g));
  l.drops.forEach((k) => {
    const E = k.x / m, C = Math.floor(k.y / g);
    for (let N = 0; N < Se; N++) G(Math.floor(E - 0.208 * N * g / m), C + N, I.rain, k.o, Ld);
  });
  const Oe = Math.max(0, Math.round(4.4 / m / 2.6));
  return l.flakes.forEach((k) => {
    const E = Math.floor(k.x / m), C = Math.floor(k.y / g);
    G(E, C, I.snow, k.o, $n);
    for (let N = 1; N <= Oe; N++)
      G(E - N, C, I.snow, k.o, $n), G(E + N, C, I.snow, k.o, $n), G(E, C - N, I.snow, k.o, $n), G(E, C + N, I.snow, k.o, $n);
  }), l.bolts.forEach((k) => {
    if (m <= 3.5)
      for (let E = Math.floor(k.y / g); E <= (k.y + 24) / g; E++) for (let C = Math.floor(k.x / m); C <= (k.x + 11) / m; C++)
        zc(qu, (C + 0.5) * m - k.x, (E + 0.5) * g - k.y) && G(C, E, I.sun, 1, _r);
    else {
      const E = Math.round(k.x / m), C = Math.round(k.y / g);
      Wu.forEach((N, ue) => N.split("").forEach((V, ae) => {
        V === "#" && G(E + ae, C + ue, I.sun, 1, _r);
      }));
    }
  }), { col: U, ids: W };
}
function zu(a, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), m = Math.max(6, Math.round(l.height / o)), g = l.width / c, v = l.height / m, L = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, b = (q) => {
    const $ = Uc(q, l);
    return Vu($, Yc($, { clock: L, ambient: l.ambient, seed: l.seed }), c, m, g, v, L, l.ambient);
  }, I = b(a), re = l.reveal == null ? 1 : Jn(l.reveal);
  let ne = I.col, O = I.ids;
  if (re < 1) {
    const q = l.prev ? b(l.prev) : null, $ = re * (c + 12);
    ne = new Array(c * m), O = new Uint8Array(c * m);
    for (let te = 0; te < c * m; te++) {
      const U = te % c, W = te / c | 0;
      (l.reduce ? re : Jn(($ - U) / 12)) > Xn(U, W) ? (ne[te] = I.col[te], O[te] = I.ids[te]) : q ? (ne[te] = q.col[te], O[te] = q.ids[te]) : (ne[te] = null, O[te] = 255);
    }
  }
  return Gc(ne, O, c, m, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function ju(a, l, o) {
  const c = o.width, m = o.height, g = o.reveal == null ? 1 : Jn(o.reveal), v = (O, q) => {
    const $ = Uc(q, o);
    Gu(O, $, Yc($, o));
  };
  if (a.clearRect(0, 0, c, m), g >= 1) {
    v(a, l);
    return;
  }
  if (o.prev && v(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = g, v(a, l), a.restore();
    return;
  }
  const L = a.canvas, b = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (b.width !== L.width || b.height !== L.height) && (b.width = L.width, b.height = L.height);
  const I = b.getContext("2d");
  I.setTransform(a.getTransform()), I.clearRect(0, 0, c, m), v(I, l);
  const re = g * (c + 64) - 64, ne = I.createLinearGradient(re, 0, re + 64, 0);
  ne.addColorStop(0, "rgba(0,0,0,1)"), ne.addColorStop(1, "rgba(0,0,0,0)"), I.globalCompositeOperation = "destination-in", I.fillStyle = ne, I.fillRect(0, 0, c, m), I.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(b, 0, 0), a.restore();
}
function Gu(a, l, o) {
  const { W: c, H: m, S: g, C: v, cw: L, yb: b, glowAt: I, soft: re, tw: ne, sy: O } = l, q = (w, we) => {
    const Se = gl(w);
    return "rgba(" + Se[0] + "," + Se[1] + "," + Se[2] + "," + Math.max(0, Math.min(1, we)).toFixed(3) + ")";
  }, $ = (w, we) => {
    const Se = a.createLinearGradient(0, 0, c, 0);
    Se.addColorStop(0, w[0]);
    for (let Oe = 0; Oe < w.length - 1; Oe++) {
      const k = (Oe + we) * L, E = (k - ne / 2) / c, C = (k + ne / 2) / c;
      E > 0 && E < 1 && Se.addColorStop(E, w[Oe]), C > 0 && C < 1 && Se.addColorStop(C, w[Oe + 1]);
    }
    return Se.addColorStop(1, w[w.length - 1]), Se;
  }, te = Math.max(24, Math.ceil(c / 4)), U = (w, we) => {
    a.beginPath();
    for (let Se = 0; Se <= te; Se++) {
      const Oe = c * Se / te, k = w == null ? 0 : b(Oe) + w;
      Se ? a.lineTo(Oe, k) : a.moveTo(Oe, k);
    }
    for (let Se = te; Se >= 0; Se--) {
      const Oe = c * Se / te;
      a.lineTo(Oe, b(Oe) + we);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = $(g.filter((w) => !w.night).map((w) => w.sky), 0.75), a.fillRect(0, 0, c, m);
  const W = a.createLinearGradient(0, 0, c, 0);
  for (let w = 0; w <= 64; w++) {
    const we = I(c * w / 64);
    W.addColorStop(w / 64, q(we.c, Math.min(1, we.a)));
  }
  a.fillStyle = W;
  for (let w = 0; w < 8; w++)
    a.globalAlpha = 1 - w / 8, U(w * 2 * O, (w + 1) * 2 * O);
  a.fillStyle = $(g.filter((w) => w.night).map((w) => w.sky), 1.25);
  const X = Math.max(0.5, re), G = 6;
  a.globalAlpha = 1, U(null, -X);
  for (let w = 0; w < G; w++)
    a.globalAlpha = 1 - (w + 0.5) / G, U(-X + 2 * X * w / G, -X + 2 * X * (w + 1) / G);
  a.globalAlpha = 1;
  const Z = new Path2D(Fu), Q = new Path2D(Hu), T = new Path2D(Iu), j = new Path2D(Ou);
  a.fillStyle = v.star, o.stars.forEach((w) => {
    a.globalAlpha = w.o, w.big ? (a.save(), a.translate(w.x, w.y), a.scale(w.size, w.size), a.fill(Z), a.restore()) : (a.beginPath(), a.arc(w.x, w.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const ve = Zt(v.sun, "#ffffff", 0.55);
  o.suns.forEach((w) => {
    const we = a.createRadialGradient(w.x, w.y, 0, w.x, w.y, w.halo);
    we.addColorStop(0, q(ve, 0.42)), we.addColorStop(0.7, q(ve, 0)), a.fillStyle = we, a.beginPath(), a.arc(w.x, w.y, w.halo, 0, Math.PI * 2), a.fill();
    const Se = a.createLinearGradient(0, w.y - w.rad, 0, w.y + w.rad);
    Se.addColorStop(0.6, v.sun), Se.addColorStop(1, v.sunEdge), a.fillStyle = Se, a.beginPath(), a.arc(w.x, w.y, w.rad, 0, Math.PI * 2), a.fill();
  });
  const Le = Zt(v.moon, "#ffffff", 0.6);
  o.moons.forEach((w) => {
    a.save(), a.translate(w.x - w.d / 2, w.y - w.d / 2), a.scale(w.d / 46, w.d / 46);
    const we = a.createLinearGradient(0, 6, 0, 40);
    we.addColorStop(0, Le), we.addColorStop(1, v.moon), a.fillStyle = we, a.fill(Q), a.restore();
  }), o.clouds.forEach((w) => {
    a.save(), a.globalAlpha = w.o, a.translate(w.x, w.y), a.scale(w.w / 46, w.h / 30.66), a.translate(-4, -9.67), a.fillStyle = w.fill, a.fill(T), a.restore();
  }), o.fogs.forEach((w) => {
    const we = a.createLinearGradient(w.x, 0, w.x + w.w, 0);
    we.addColorStop(0, q(w.c, 0)), we.addColorStop(0.25, q(w.c, w.a)), we.addColorStop(0.75, q(w.c, w.a)), we.addColorStop(1, q(w.c, 0)), a.fillStyle = we, a.fillRect(w.x, w.y, w.w, 6 * O);
  }), a.fillStyle = v.rain, o.drops.forEach((w) => {
    a.save(), a.globalAlpha = w.o, a.translate(w.x, w.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = v.snow, o.flakes.forEach((w) => {
    a.globalAlpha = w.o, a.beginPath(), a.arc(w.x, w.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = v.sun, o.bolts.forEach((w) => {
    a.save(), a.globalAlpha = w.o, a.translate(w.x, w.y), a.fill(j), a.restore();
  }), a.restore();
}
function Uu(a, l) {
  var zd, jd, Gd, Ud, Yd, Zd, Kd;
  const o = (t) => a.getElementById(t), c = o("workoutView"), m = o("workoutNameInput");
  let g = !0;
  const v = o("homeClock");
  function L() {
    v && (v.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  L(), setInterval(L, 15e3);
  const b = o("createFlow"), I = o("createMovementsSlot"), re = o("createTimingSlot"), ne = o("createFinishSlot"), O = o("movementStepSummary"), q = o("timingStepSummary"), $ = o("finishStepSummary"), te = o("continueToTiming"), U = o("continueToFinish"), W = o("finishMoveButton");
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
    }), t === "timing" && (X = !0), ve();
  }
  function ve() {
    var oe, se;
    if (!dt) return;
    Ye[ht];
    const t = Qe.filter((ee) => !ee.hidden), i = t.filter((ee) => ee.kind !== "rest").length, s = t.filter((ee) => ee.kind === "rest").length;
    O.textContent = i ? i + " movement" + (i === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const u = i > 0, f = a.querySelector('[data-open-step="timing"]'), M = a.querySelector('[data-open-step="finish"]');
    f.disabled = !u, te.disabled = !u, q.textContent = u ? _t(E.value) + " · " + Qt(C.value) + " movement · " + Qt(N.value) + " rest" : "Add a movement first", M.disabled = !(u && X);
    const D = ((m == null ? void 0 : m.value) || "").trim(), z = [];
    (oe = o("includeWarmupPreset")) != null && oe.checked && z.push("warm-up"), (se = o("includeCooldownPreset")) != null && se.checked && z.push("cooldown"), $.textContent = D ? D + (z.length ? " · " + z.join(" + ") : "") : z.length ? z.join(" + ") : "Name and optional extras";
  }
  function Le() {
    var Te, Ue, _e;
    b.hidden = !1, X = !1;
    const t = a.querySelector(".editNameRow"), i = o("createMoveOptions"), s = a.querySelector(".timeTiles"), u = o("routineSummaryModal"), f = a.querySelector(".tempoRevealRow"), M = o("tempoExperiment"), D = (Te = o("warmupList")) == null ? void 0 : Te.closest("section"), z = o("movementCreatorLaunch"), oe = o("movementCreator"), se = (Ue = o("strengthList")) == null ? void 0 : Ue.closest("section"), ee = (_e = o("cooldownList")) == null ? void 0 : _e.closest("section");
    [i == null ? void 0 : i.querySelector(".createExtras"), D, z, oe, se, ee].forEach((Ce) => Ce && Q(Ce, I)), [i, s, u, f, M].forEach((Ce) => Q(Ce, re)), Q(t, ne), j("movements"), ve();
  }
  function w() {
    T(), b.hidden = !0, a.querySelectorAll(".createStep").forEach((t) => t.classList.remove("active"));
  }
  a.querySelectorAll("[data-open-step]").forEach((t) => t.addEventListener("click", () => {
    t.disabled || j(t.dataset.openStep);
  })), te.addEventListener("click", () => {
    te.disabled || j("timing");
  }), U.addEventListener("click", () => j("finish")), W.addEventListener("click", () => o("saveWorkoutEdit").click());
  const we = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, Se = o("homeNav"), Oe = o("settingsNav");
  function k(t) {
    Object.entries(we).forEach(([i, s]) => s.classList.toggle("active", i === t)), Se.classList.toggle("active", t === "home"), Oe.classList.toggle("active", t === "settings"), t === "home" && setTimeout(Hr, 400), t === "settings" && (requestAnimationFrame(() => ra(a.querySelector(".tab.active"), !1)), Ho());
  }
  const E = o("totalTime"), C = o("workTime"), N = o("restTime"), ue = o("totalOut"), V = o("workOut"), ae = o("restOut"), ce = o("totalFill"), fe = o("workFill"), We = o("restFill"), at = o("roundsInput"), wt = o("roundsFill"), pn = o("roundsOut"), Tn = o("totalLabel"), qt = o("routineSummaryModal"), Je = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let St = Je.map((t) => ({ ...t })), Qe = [
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
  let xn = hn.map((t) => ({ ...t }));
  const Yi = {
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
  }, lt = fo(l.data), Ye = lt.profiles;
  let ht = Ye[lt.selected] ? lt.selected : lt.order.find((t) => Ye[t]) || "kettlebell";
  function fo(t) {
    const i = t && typeof t == "object" ? JSON.parse(JSON.stringify(t)) : {}, s = i.profiles && Object.keys(i.profiles).length ? i.profiles : JSON.parse(JSON.stringify(Yi)), u = (Array.isArray(i.order) ? i.order : Object.keys(s)).filter((f) => s[f]);
    return Object.keys(s).forEach((f) => {
      u.includes(f) || u.push(f);
    }), {
      v: 1,
      profiles: s,
      order: u,
      selected: i.selected || u[0],
      history: Array.isArray(i.history) ? i.history : [],
      checkins: (Array.isArray(i.checkins) ? i.checkins : Zi(i.energy)).map(bi),
      settings: { ...i.settings || {} }
    };
  }
  function Zi(t) {
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
  function bi(t) {
    if (t.scale === 100) return t;
    const i = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...t, mood: i(t.mood), energy: i(t.energy), scale: 100 };
  }
  function fn() {
    dt || (lt.selected = ht, lt.order = lt.order.filter((t) => Ye[t] && t !== vt), l.save(lt));
  }
  function ot() {
    return lt.settings;
  }
  function Nn(t) {
    const i = Ye[t];
    if (!i) return;
    ht = t;
    const s = o("workoutNameInput");
    if (s && (s.value = i.name), E.value = i.total, C.value = i.work, N.value = i.rest, at.value = i.rounds || 1, i.customSequence) {
      const u = (i.sequence || []).map((M) => ({ ...M })), f = (M) => u.filter((D) => D.presetRole === M).map(({ presetRole: D, ...z }) => z);
      St = (i.warmup || f("warmup")).map((M) => ({ ...M })), xn = (i.cooldown || f("cooldown")).map((M) => ({ ...M })), Qe = u.filter((M) => !M.presetRole), Za(i.preset || "movement", !1);
    } else
      E.min = 3, E.max = 40, E.step = 1, C.min = 20, C.max = 60, C.step = 5, N.min = 5, N.max = 30, N.step = 5, St = (i.warmup || Je).map((u) => ({ ...u })), xn = (i.cooldown || hn).map((u) => ({ ...u })), Qe = i.strength.map((u) => Array.isArray(u) ? (([f, M, D, z = !1]) => ({ id: f, name: M, group: D, kind: "work", hidden: !!z }))(u) : { ...u });
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === t)), A();
  }
  function Ki(t, i, s) {
    const u = t.getBoundingClientRect(), f = u.width / 2, M = u.height / 2, D = i - f, z = s - M;
    let oe = 1 / 0, se = 1 / 0;
    D !== 0 && (oe = f / Math.abs(D)), z !== 0 && (se = M / Math.abs(z));
    const ee = Math.min(Math.max(1 / Math.min(oe, se), 0), 1);
    let J = Math.atan2(z, D) * (180 / Math.PI) + 90;
    return J < 0 && (J += 360), { edge: ee, angle: J };
  }
  function ft(t, i, s = !1) {
    const u = t.getBoundingClientRect(), f = i.clientX - u.left, M = i.clientY - u.top, { edge: D, angle: z } = Ki(t, f, M), oe = s ? 100 : D * 100;
    t.style.setProperty("--edge-proximity", oe.toFixed(3)), t.style.setProperty("--cursor-angle", z.toFixed(3) + "deg"), t.classList.toggle("borderGlowActive", s || oe >= 30);
  }
  function Ae(t) {
    t.addEventListener("pointermove", (s) => ft(t, s, !1)), t.addEventListener("pointerenter", (s) => ft(t, s, !1)), t.addEventListener("pointerdown", (s) => ft(t, s, !0));
    const i = () => {
      t.classList.remove("borderGlowActive"), t.style.setProperty("--edge-proximity", "0");
    };
    t.addEventListener("pointerleave", i), t.addEventListener("pointerup", i), t.addEventListener("pointercancel", i);
  }
  Ae(o("addWorkoutPanel"));
  let dt = !1, vt = null;
  function Ie(t) {
    return String(t ?? "").replace(/[&<>"']/g, (i) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[i]);
  }
  function mo(t) {
    return t.summary ? t.summary : t.customSequence ? _t(t.total) + " · custom move" : _t(t.total) + " · " + Qt(t.work) + " / " + Qt(t.rest) + " · warm-up + cooldown";
  }
  function Uo(t, i) {
    var M;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = t, s.tabIndex = 0;
    const u = i.activityCount ?? (((M = i.sequence) == null ? void 0 : M.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Ie(i.name) + '</div><div class="sub">' + Ie(mo(i)) + '</div><span class="sourceTag">' + Ie(i.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (u ? u + " activities" + ((i.rounds || 1) > 1 ? " × " + i.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Ie(i.name) + "</div></div>";
    const f = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(s, f), Ae(s), s.addEventListener("click", (D) => {
      D.target.closest("button") || Nn(t);
    }), s.addEventListener("keydown", (D) => {
      (D.key === "Enter" || D.key === " ") && !D.target.closest("button") && (D.preventDefault(), Nn(t));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (D) => {
      D.stopPropagation(), Nn(t), As(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (D) => {
      D.stopPropagation(), Nn(t), Nl();
    }), s;
  }
  function $i() {
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.remove()), lt.order.forEach((t) => {
      Ye[t] && Uo(t, Ye[t]);
    }), a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.classList.toggle("active", t.dataset.workout === ht));
  }
  $i(), o("addWorkoutPanel").addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && (t.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    dt = !0, vt = "custom-" + Date.now(), Ye[vt] = {
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
    }, Nn(vt), As(!0);
  });
  let Be = [], Ve = 0, Jt = 0, La = 1, vn = !1, Lt = null, Ua = null, Dt = !1, Aa = lt.settings.upcomingCount ?? "all", Pn = "movement";
  function ma(t, i, s) {
    return (Number(t) - i) / (s - i) * 100;
  }
  function Qt(t) {
    const i = Math.max(0, Number(t) || 0);
    return i >= 3600 && i % 3600 === 0 ? i / 3600 + " hr" : i >= 60 && i % 60 === 0 ? i / 60 + " min" : i >= 60 ? Math.round(i / 60) + " min" : Math.round(i) + " sec";
  }
  function _t(t) {
    const i = Math.max(0, Number(t) || 0);
    return i >= 60 && i % 60 === 0 ? i / 60 + " hr" : i >= 60 ? Math.floor(i / 60) + " hr " + i % 60 + " min" : i + " min";
  }
  function _a() {
    ce.style.width = ma(E.value, Number(E.min), Number(E.max)) + "%", fe.style.width = ma(C.value, Number(C.min), Number(C.max)) + "%", We.style.width = ma(N.value, Number(N.min), Number(N.max)) + "%", V.textContent = Qt(C.value), ae.textContent = Qt(N.value);
    const t = Number(at.value) || 1;
    wt.style.width = ma(t, 1, 10) + "%", Tn.textContent = t > 1 ? "Time per round" : "Total time";
  }
  function da(t) {
    return t.filter((i) => !i.hidden);
  }
  function Ya(t) {
    const i = Math.max(0, Math.round(Number(t) || 0)), s = Math.floor(i / 3600), u = Math.floor(i % 3600 / 60), f = i % 60;
    return (s ? s + ":" + String(u).padStart(2, "0") : u) + ":" + String(f).padStart(2, "0");
  }
  function Gt(t) {
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
  function Kt(t, i) {
    if (t.useVideoLength === !1) return Math.max(5, Number(t.duration) || i || 300);
    const s = Number(t.start) || 0, u = Number(t.end) || Number(t.videoDuration) || 0;
    return u > s ? Math.round(u - s) : Number(t.duration) || 300;
  }
  function xt(t, i) {
    const s = Math.max(0, Number(t) || 0);
    return Math.round(i === "hour" ? s * 3600 : i === "min" ? s * 60 : s);
  }
  function Za(t, i = !0) {
    Pn = t, a.querySelectorAll(".createPresetBtn").forEach((u) => u.classList.toggle("active", u.dataset.movePreset === t));
    const s = Ye[ht];
    s && (s.preset = t), t === "work" ? (E.min = 30, E.max = 480, E.step = 30, C.min = 300, C.max = 7200, C.step = 300, N.min = 60, N.max = 1800, N.step = 60, i && (E.value = 60, C.value = 1500, N.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (E.min = 3, E.max = 40, E.step = 1, C.min = 20, C.max = 60, C.step = 5, N.min = 5, N.max = 30, N.step = 5, i && (E.value = 20, C.value = 45, N.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), _a();
  }
  function Ka(t, i) {
    const s = Pn === "work";
    return t.map((u, f) => ({ ...u, id: i + "-" + f + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(C.value) }));
  }
  function go() {
    const t = Ye[ht];
    t != null && t.customSequence && (t.includeWarmup = o("includeWarmupPreset").checked, t.includeCooldown = o("includeCooldownPreset").checked, t.includeWarmup && !St.length && (St = Ka(Je, "warm")), t.includeCooldown && !xn.length && (xn = Ka(hn, "cool")), A());
  }
  function _() {
    const t = o("upcomingCountSetting");
    if (!t) return;
    const i = Math.max(1, Be.length - 1), s = Aa;
    t.innerHTML = "";
    for (let M = 1; M <= i; M++) {
      const D = document.createElement("option");
      D.value = String(M), D.textContent = String(M), t.appendChild(D);
    }
    const u = document.createElement("option");
    u.value = "all", u.textContent = "All", t.appendChild(u);
    const f = s === "all" ? "all" : String(Math.min(Number(s) || 1, i));
    t.value = f, Aa = f === "all" ? "all" : Number(f);
  }
  function A() {
    Number(E.value) * 60;
    const t = Number(C.value), i = Number(N.value), s = Ye[ht], u = !!(s != null && s.customSequence), f = (u ? !s.includeWarmup : s != null && s.warmupOff) ? [] : da(St), M = da(Qe), D = u && !s.includeCooldown ? [] : da(xn);
    if (s && (s.total = Number(E.value), s.work = t, s.rest = i, s.rounds = Number(at.value) || 1, s.customSequence ? (s.sequence = Qe.map((Me) => ({ ...Me })), s.warmup = St.map((Me) => ({ ...Me })), s.cooldown = xn.map((Me) => ({ ...Me }))) : (s.strength = Qe.map((Me) => ({ ...Me })), s.warmup = St.map((Me) => ({ ...Me })), s.cooldown = xn.map((Me) => ({ ...Me })))), s != null && s.customSequence) {
      const Me = [...f.map((rt) => ({ ...rt, section: "warmup" })), ...M, ...D.map((rt) => ({ ...rt, section: "cooldown" }))].map((rt) => {
        if (rt.kind === "video") return { ...rt, duration: Kt(rt, t), rest: 0 };
        if (rt.kind === "rest") {
          const ln = rt.useGlobalTiming === !0 ? i : Number(rt.duration) || i;
          return { ...rt, duration: ln, rest: 0 };
        }
        const sn = rt.useGlobalTiming === !1 && Number(rt.duration) || t;
        return { ...rt, duration: sn, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Be = [], Me.forEach((rt, sn) => {
        Be.push(rt);
        const ln = Me[sn + 1];
        rt.kind !== "rest" && ln && ln.kind !== "rest" && Be.push({
          id: "auto-rest-" + sn,
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
      Be = [...f.map((Me) => ({ ...Me, section: "warmup" })), ...M, ...D.map((Me) => ({ ...Me, section: "cooldown" }))].map((Me) => Me.kind === "video" ? { ...Me, duration: Kt(Me, t), rest: 0 } : Me.kind === "rest" ? { ...Me, duration: Me.useGlobalTiming === !0 ? i : Number(Me.duration) || i, rest: 0 } : { ...Me, duration: Me.useGlobalTiming === !1 && Number(Me.duration) || t, rest: i }), Be.forEach((Me, rt) => {
        var sn;
        ((sn = Be[rt + 1]) == null ? void 0 : sn.kind) === "rest" && (Me.rest = 0);
      }), Be.length && (Be[Be.length - 1].rest = 0);
    const z = Math.max(1, Math.min(10, Number(at.value) || 1)), oe = Be, se = (Me) => z <= 1 ? null : Me.section === "warmup" || Me.presetRole === "warmup" ? "first" : Me.section === "cooldown" || Me.presetRole === "cooldown" ? "last" : Me.kind === "video" && (Me.videoRounds === "first" || Me.videoRounds === "last") ? Me.videoRounds : null, ee = (Me) => !!se(Me), J = oe.filter((Me) => !ee(Me)), Te = oe.filter(ee), Ue = J.length, _e = J.reduce((Me, rt) => Me + rt.duration + rt.rest, 0), Ce = Te.reduce((Me, rt) => Me + rt.duration + rt.rest, 0), ye = [
      Te.some((Me) => Me.section === "warmup" || Me.presetRole === "warmup") && "warm-up",
      Te.some((Me) => Me.section === "cooldown" || Me.presetRole === "cooldown") && "cooldown",
      Te.some((Me) => Me.kind === "video" && !Me.section && !Me.presetRole) && "video"
    ].filter(Boolean), ct = ye.length > 1 ? ye.slice(0, -1).join(", ") + " & " + ye[ye.length - 1] : ye[0] || "";
    Be = [];
    const ut = (Me, rt) => {
      const sn = se(Me);
      return !sn || (sn === "first" ? rt === 1 : rt === z);
    };
    for (let Me = 1; Me <= z; Me++)
      if (oe.filter((rt) => ut(rt, Me)).forEach((rt, sn) => Be.push({ ...rt, id: rt.id + (z > 1 ? "-r" + Me : ""), round: Me, roundIndex: sn })), Me < z && Ue)
        if (s != null && s.customSequence)
          Be.push({ id: "round-break-" + Me, name: "Rest", group: "Round " + (Me + 1) + " next", kind: "rest", hidden: !1, duration: i, rest: 0, round: Me, roundIndex: Ue, roundBreak: !0 });
        else {
          const rt = Be[Be.length - 1];
          rt.rest = i, rt.roundBreakAfter = !0;
        }
    _a();
    const Ee = Be.reduce((Me, rt) => Me + rt.duration + rt.rest, 0), pt = Math.round(_e / 60), Mt = Math.round(Ee / 60), it = z > 1 ? _t(pt) + " × " + z + " rounds" + (Ce ? " + " + Qt(Ce) + " " + ct : "") + " (" + _t(Mt) + ")" : _t(Mt), Xe = [f.length ? "warm-up" : "", D.length ? "cooldown" : ""].filter(Boolean), rn = s != null && s.customSequence ? it + " · " + Ue + " items" + (Xe.length && !(z > 1 && Ce) ? " · " + Xe.join(" + ") : "") : it + " · " + Qt(t) + " / " + Qt(i) + (Xe.length && !(z > 1 && Ce) ? " · " + Xe.join(" + ") : "");
    ue.textContent = Qt(_e);
    const wn = Be.filter((Me) => !Me.roundBreak).length, Ot = z > 1 ? wn + " activities · " + z + " rounds" : Ue + " activities";
    pn.textContent = z > 1 ? z + " rounds · " + _t(Mt) + " total" : "1 round", o("roundsCount").textContent = z, a.querySelectorAll("[data-rounds-step]").forEach((Me) => {
      Me.disabled = Number(Me.dataset.roundsStep) < 0 ? z <= 1 : z >= 10;
    }), s && (s.summary = rn, s.activityCount = Ue);
    const hi = a.querySelector(".workoutPanel.active .sub");
    hi && (hi.textContent = rn), qt.textContent = rn, Ji(), a.querySelectorAll(".workoutPanel.active .activityCount").forEach((Me) => Me.textContent = Ot), _a(), Ne(), Br(), va(), _(), dt && ve(), we.workout.classList.contains("active") && !Lt && to();
  }
  const P = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', K = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', pe = {
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
  }, me = (t) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (pe[t] || "") + "</svg>";
  a.querySelectorAll("[data-icon]").forEach((t) => {
    t.innerHTML = me(t.dataset.icon);
  });
  let he = null, ke = null;
  function be(t) {
    return t = Math.max(1, Number(t) || 0), t >= 3600 && t % 3600 === 0 ? { value: t / 3600, unit: "hour" } : t >= 60 && t % 60 === 0 ? { value: t / 60, unit: "min" } : { value: t, unit: "sec" };
  }
  function Pe(t = !1) {
    const i = a.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    i && (i.focus({ preventScroll: !0 }), t && i.select());
  }
  function He(t, i, s = {}) {
    const u = t.kind === "rest", f = t.kind === "video", M = f ? t.useVideoLength !== !1 : u ? t.useGlobalTiming === !0 : t.useGlobalTiming !== !1, D = Number(u ? N.value : C.value), z = be(f ? t.useVideoLength === !1 ? t.duration : Kt({ ...t, useVideoLength: !0 }) : M ? D : t.duration || D), oe = f && (Number(t.videoDuration) > 0 || Number(t.end) > 0), se = f ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Ie(t.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ie(t.autoName ? "" : t.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Ee, pt]) => '<option value="' + Ee + '"' + ((t.videoRounds || "every") === Ee ? " selected" : "") + ">" + pt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ie(t.name) + '" placeholder="' + (u ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Ie(t.group) + '" placeholder="' + (u ? "Rest" : "e.g. Glutes + legs") + '"></label>', ee = f ? "Play the whole " + (Number(t.start) > 0 || Number(t.end) > 0 ? "clip" : "video") + (oe ? " · " + Ya(Kt({ ...t, useVideoLength: !0 })) : "") : "Use global timing · " + Qt(D), J = document.createElement("div");
    J.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), J.dataset.index = i, J.dataset.id = t.id;
    const Te = s.isNew ?? (ke == null ? void 0 : ke.item) === t, Ue = s.sheet ? '<div class="moveEditActions sheetActions">' + (Te ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (t.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Ie(t.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Te ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    J.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (f ? " videoFields" : "") + '">' + se + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (M ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Ie(ee) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + z.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Ee) => '<option value="' + Ee + '"' + (Ee === z.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Ee] + "</option>").join("") + "</select></div></div>" + Ue + "</div>";
    const _e = (Ee) => J.querySelector("[data-f=" + Ee + "]"), Ce = () => {
      const Ee = _e("global").checked;
      _e("dur").disabled = Ee, _e("unit").disabled = Ee, J.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Ee);
    };
    _e("global").addEventListener("change", Ce), Ce();
    const ye = () => {
      var Ee;
      if (s.sheet) {
        (Ee = s.onCancel) == null || Ee.call(s);
        return;
      }
      Te && tt(), he = null, A();
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
      if (t.useGlobalTiming = pt, pt || (t.duration = Math.max(u ? 5 : 1, xt(_e("dur").value, _e("unit").value))), s.sheet) {
        (Mt = s.onSaved) == null || Mt.call(s);
        return;
      }
      Te && (ke = null), he = null, A(), It(Te ? u ? "Rest added" : "Movement added" : "Movement updated");
    }, ut = () => {
      var Xe;
      const Ee = _e("url").value.trim(), pt = Gt(Ee);
      if (!pt) {
        _e("urlError").hidden = !1, _e("url").classList.add("invalid"), _e("url").focus();
        return;
      }
      const Mt = pt.id !== t.videoId;
      t.url = Ee, t.videoId = pt.id, t.start = pt.start, t.end = pt.end, Mt && (t.videoDuration = null, t.videoError = null);
      const it = _e("name").value.trim();
      t.autoName = !it, t.name = it || (Mt ? "" : t.name) || t.videoTitle || "YouTube video", t.group = "Video", t.videoRounds = _e("rounds").value, t.useVideoLength = _e("global").checked, t.useVideoLength || (t.duration = Math.max(5, xt(_e("dur").value, _e("unit").value))), s.sheet ? (Xe = s.onSaved) == null || Xe.call(s) : (Te && (ke = null), he = null, A(), It(Te ? "Video added" : "Video updated")), (Mt || !t.videoDuration || t.autoName && !t.videoTitle) && ao(t);
    };
    if (f && _e("url").addEventListener("input", () => {
      _e("urlError").hidden = !0, _e("url").classList.remove("invalid");
    }), J.querySelector("[data-a=cancel]").addEventListener("click", ye), J.querySelector("[data-a=save]").addEventListener("click", ct), s.sheet && !Te) {
      J.querySelector("[data-a=hide]").addEventListener("click", () => {
        var pt;
        return (pt = s.onHide) == null ? void 0 : pt.call(s);
      });
      const Ee = J.querySelector("[data-a=remove]");
      Ii(Ee, Ee.querySelector(".removeFill"), 1200, () => {
        var pt;
        return (pt = s.onRemove) == null ? void 0 : pt.call(s);
      });
    }
    return J.addEventListener("keydown", (Ee) => {
      Ee.key === "Escape" && (Ee.preventDefault(), Ee.stopPropagation(), ye()), Ee.key === "Enter" && Ee.target.matches("input") && (Ee.preventDefault(), ct());
    }), J;
  }
  function Ke(t, i) {
    const s = o(i);
    s.innerHTML = "", t.forEach((u, f) => {
      if (u === he && !na()) {
        s.appendChild(He(u, f));
        return;
      }
      const M = document.createElement("div");
      M.className = "moveRow" + (u.hidden ? " hidden" : "") + (u.kind === "rest" ? " restItem" : "") + (u.kind === "video" ? " videoItem" : "") + (mr(u) ? " noMeta" : ""), M.dataset.index = f, M.dataset.id = u.id;
      const D = u.kind === "rest" ? u.useGlobalTiming === !0 ? "Global timing" : Qt(u.duration) : u.useGlobalTiming === !1 ? Qt(u.duration) : "Global timing", z = u.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", oe = u.kind === "video" ? u.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (u.useVideoLength === !1 ? "stops after " + Qt(u.duration) : Number(u.videoDuration) > 0 || Number(u.end) > 0 ? Ya(Kt(u)) : "plays to the end") + (u.videoRounds === "first" ? " · first round only" : u.videoRounds === "last" ? " · last round only" : "") : u.group + " · " + D, se = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Ie(u.name) + '. Drag, or use the up and down arrow keys">' + P + "</button>", ee = '<div class="moveText"><div class="moveItemName">' + Ie(u.name) + z + '</div><div class="moveMeta">' + Ie(oe) + "</div></div>", J = (_e) => _e.addEventListener("keydown", (Ce) => {
        var ut, Ee;
        if (Ce.key !== "ArrowUp" && Ce.key !== "ArrowDown") return;
        Ce.preventDefault();
        const ye = t.indexOf(u), ct = ye + (Ce.key === "ArrowUp" ? -1 : 1);
        ct < 0 || ct >= t.length || (t.splice(ye, 1), t.splice(ct, 0, u), A(), (Ee = (ut = o(i).children[ct]) == null ? void 0 : ut.querySelector(".dragHandle")) == null || Ee.focus());
      });
      if (na()) {
        M.classList.add("phoneRow"), M.tabIndex = 0, M.setAttribute("role", "button"), M.setAttribute("aria-label", "Edit " + (u.name || "step")), M.innerHTML = se + ee + '<span class="rowChevron" aria-hidden="true">›</span>';
        const _e = M.querySelector(".dragHandle");
        _e.addEventListener("pointerdown", (Ce) => ze(Ce, M, s, t)), J(_e), M.addEventListener("click", (Ce) => {
          Ce.target.closest(".dragHandle") || vs(u, t);
        }), M.addEventListener("keydown", (Ce) => {
          Ce.key === "Enter" && Ce.target === M && (Ce.preventDefault(), vs(u, t));
        }), s.appendChild(M);
        return;
      }
      M.innerHTML = se + ee + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Ie(u.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (u.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Ie(u.name) + '"><span class="removeFill"></span><span class="removeLabel">' + K + "</span></button></div>", M.querySelector(".editBtn").addEventListener("click", () => {
        tt(), he = u, A(), Pe();
      }), M.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        u.hidden = !u.hidden, A();
      });
      const Te = M.querySelector(".removeBtn");
      Ii(Te, Te.querySelector(".removeFill"), 1200, () => {
        const _e = t.indexOf(u);
        _e < 0 || (t.splice(_e, 1), A(), It("Removed " + u.name, { label: "Undo", run: () => {
          t.splice(Math.min(_e, t.length), 0, u), A();
        } }));
      });
      const Ue = M.querySelector(".dragHandle");
      Ue.addEventListener("pointerdown", (_e) => ze(_e, M, s, t)), J(Ue), s.appendChild(M);
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
  function ze(t, i, s, u) {
    if (t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const f = t.currentTarget, M = t.pointerId, D = !qe();
    try {
      f.setPointerCapture(M);
    } catch {
    }
    const z = i.closest(".exerciseScroller") || In(i), oe = s.style.position;
    s.style.position = "relative";
    const se = [...s.children].filter((st) => st.classList.contains("moveRow")), ee = se.indexOf(i), J = parseFloat(getComputedStyle(s).rowGap) || 8, Te = i.offsetHeight, Ue = Te + J, _e = se.map((st) => st.offsetTop), Ce = se.map((st) => st.offsetHeight), ye = () => s.getBoundingClientRect().top, ct = s.getBoundingClientRect().width, ut = t.clientY - (ye() + _e[ee]), Ee = t.clientX;
    let pt = t.clientY, Mt = t.clientX, it = ye() + _e[ee], Xe = 0, rn = 0, wn = 0, Ot = 1, hi = 0, Me = ee, rt = !1, sn = 0, ln = !1, tl = !1, yr = _e[ee];
    s.classList.add("reordering"), i.classList.add("dragging"), i.style.transition = "none", De(8);
    const nl = () => {
      const st = pt - ut + Te / 2 - ye();
      let bt = 0;
      return se.forEach((Nt, Gn) => {
        Gn !== ee && st > _e[Gn] + Ce[Gn] / 2 && bt++;
      }), bt;
    }, al = () => {
      se.forEach((st, bt) => {
        if (bt === ee) return;
        const Nt = ee < Me && bt > ee && bt <= Me ? -Ue : ee > Me && bt >= Me && bt < ee ? Ue : 0;
        st.style.transform = Nt ? "translateY(" + Nt + "px)" : "";
      });
    }, ds = () => {
      const st = s.getBoundingClientRect(), bt = Math.abs(Mt - Ee) > Math.max(80, ct * 0.3) || Mt < st.left - 24 || Mt > st.right + 24;
      bt !== rt && (rt = bt, i.classList.toggle("willReturn", bt), De(bt ? 10 : 4));
      const Nt = rt ? ee : nl();
      Nt !== Me && (Me = Nt, al(), rt || De(4));
    }, fi = () => {
      if (Me === ee) return _e[ee];
      const st = se.filter((Nt, Gn) => Gn !== ee);
      let bt = _e[0];
      for (let Nt = 0; Nt < Me; Nt++) bt += st[Nt].offsetHeight + J;
      return bt;
    }, kr = () => {
      const st = D ? Math.min(Math.abs(Xe) / 40, 1) : 0, bt = D && !ln ? Math.max(-3, Math.min(3, wn * 0.6)) : 0;
      i.style.transform = "translate(" + rn.toFixed(2) + "px," + (it - (ye() + _e[ee])).toFixed(2) + "px) rotate(" + bt.toFixed(2) + "deg) scale(" + (Ot * (1 - 0.04 * st)).toFixed(4) + "," + (Ot * (1 + 0.06 * st)).toFixed(4) + ")";
    }, nt = () => {
      sn = requestAnimationFrame(nt);
      const st = Mt - Ee, bt = ln ? ye() + yr : pt - ut, Nt = ln ? 0 : rt ? st * 0.9 : Math.max(-22, Math.min(22, st * 0.22)), Gn = ln ? 1 : rt ? 0.97 : 1.035;
      if (!D) {
        it = bt, rn = ln ? 0 : Nt, Ot = 1, kr(), ln && jt();
        return;
      }
      const yu = ln ? 0.24 : 0.2, ku = ln ? 0.62 : 0.68;
      Xe = (Xe + (bt - it) * yu) * ku, it += Xe, wn = (wn + (Nt - rn) * 0.16) * 0.7, rn += wn, hi = (hi + (Gn - Ot) * 0.22) * 0.6, Ot += hi, kr(), ln && Math.abs(Xe) < 0.15 && Math.abs(bt - it) < 0.5 && Math.abs(rn) < 0.5 && Math.abs(Ot - 1) < 3e-3 && jt();
    }, At = setInterval(() => {
      if (!z || ln) return;
      const st = z.getBoundingClientRect(), bt = 56, Nt = pt < st.top + bt ? -10 : pt > st.bottom - bt ? 10 : 0;
      Nt && (z.scrollTop += Nt, ds());
    }, 30);
    function jt() {
      if (tl) return;
      tl = !0, cancelAnimationFrame(sn);
      const st = Me !== ee, bt = i.dataset.id;
      if (s.classList.remove("reordering"), se.forEach((Gn) => {
        Gn.style.transition = "none", Gn.style.transform = "";
      }), i.classList.remove("dragging", "willReturn"), s.style.position = oe, st) {
        const [Gn] = u.splice(ee, 1);
        u.splice(Me, 0, Gn);
      }
      A();
      const Nt = bt && s.querySelector('.moveRow[data-id="' + bt + '"]');
      Nt && D && Nt.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), st && It("Order saved");
    }
    const dn = (st) => {
      if (st.pointerId === M) {
        if (st.pointerType === "mouse" && st.buttons === 0) {
          ha();
          return;
        }
        pt = st.clientY, Mt = st.clientX, ds();
      }
    }, jn = (st) => {
      st.pointerId === M && ha();
    };
    function ha() {
      ln || (window.removeEventListener("pointermove", dn, !0), window.removeEventListener("pointerup", jn, !0), window.removeEventListener("pointercancel", jn, !0), f.removeEventListener("lostpointercapture", ha), clearInterval(At), rt && Me !== ee && (Me = ee, al()), yr = fi(), ln = !0, De(6), setTimeout(jt, 800));
    }
    window.addEventListener("pointermove", dn, !0), window.addEventListener("pointerup", jn, !0), window.addEventListener("pointercancel", jn, !0), f.addEventListener("lostpointercapture", ha), sn = requestAnimationFrame(nt), kr();
  }
  function Ne() {
    var f, M, D, z;
    const t = Ye[ht], i = (f = o("warmupList")) == null ? void 0 : f.closest("section"), s = (M = o("cooldownList")) == null ? void 0 : M.closest("section"), u = (z = (D = o("strengthList")) == null ? void 0 : D.closest("section")) == null ? void 0 : z.querySelector(".sectionTitle");
    t != null && t.customSequence ? (i && (i.hidden = !t.includeWarmup), s && (s.hidden = !t.includeCooldown), u && (u.textContent = "Move sequence")) : (i && (i.hidden = !!(t != null && t.warmupOff)), s && (s.hidden = !1), u && (u.textContent = "Kettlebell work")), Ke(St, "warmupList"), Ke(Qe, "strengthList"), Ke(xn, "cooldownList");
  }
  function tt() {
    if (!ke) return;
    const { item: t, arr: i } = ke;
    ke = null;
    const s = i.indexOf(t);
    s >= 0 && i.splice(s, 1), he === t && (he = null);
  }
  function mt(t) {
    return t.id === "warmupList" ? { arr: St, kind: "warmup", group: "Warm-up" } : t.id === "cooldownList" ? { arr: xn, kind: "cooldown", group: "Cooldown" } : { arr: Qe, kind: "work", group: "" };
  }
  function Pt(t, i) {
    const s = mt(i), u = Date.now().toString(36);
    return t === "video" ? { id: "video-" + u, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : t === "rest" ? { id: "rest-" + u, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(N.value) } : { id: "movement-" + u, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(C.value) };
  }
  const Tt = "cubic-bezier(.34,1.46,.64,1)";
  function tn(t, i) {
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
  function Ln(t, i) {
    if (!t || qe()) return;
    const s = t.offsetHeight, u = Math.max(0, s - (i || 0));
    t.animate([{ clipPath: "inset(0 0 " + u + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Tt });
  }
  function ea(t, i, s, u) {
    const { arr: f } = mt(i), M = Pt(t, i);
    f.splice(Math.max(0, Math.min(s, f.length)), 0, M), ke = { item: M, arr: f }, he = M, tn(i.closest(".exerciseScroller,.createStepSlot") || i, () => A());
    const D = i.querySelector(".moveRow.editing");
    return Ln(D, u), Pe(t === "rest"), D;
  }
  function In(t) {
    for (let i = t; i && i.nodeType === 1; i = i.parentElement) {
      const s = getComputedStyle(i).overflowY;
      if (/(auto|scroll)/.test(s) && i.scrollHeight > i.clientHeight) return i;
    }
    return null;
  }
  const ta = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function ga(t, i) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (t === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + P + '</span><span class="addGhostText"><strong>' + Ie(i[0]) + "</strong><small>" + Ie(i[1]) + "</small></span>", o("workoutModal").appendChild(s), s;
  }
  function ca(t) {
    t.classList.add("leaving"), setTimeout(() => t.remove(), 180);
  }
  function wi(t, i, s, u) {
    (he || ke) && (tt(), he = null, A());
    const f = t.getBoundingClientRect(), M = ga(i, ta[i]);
    M.setAttribute("aria-hidden", "true"), M.style.width = f.width + "px", M.style.height = f.height + "px", M.style.transform = "translate(" + f.left + "px," + f.top + "px)", t.classList.add("lifting");
    const D = In(t);
    return Hn({
      ghost: M,
      origin: f,
      sx: s,
      sy: u,
      scroller: D,
      column: t.closest(".exerciseScroller,.createFlow") || D,
      home: () => t.getBoundingClientRect(),
      onDrop: (z, oe, se) => {
        ca(M), t.classList.remove("lifting"), ea(i, z, oe, se);
      },
      onReturn: () => {
        ca(M), t.classList.remove("lifting");
      }
    });
  }
  function Hn({ ghost: t, origin: i, sx: s, sy: u, scroller: f, column: M, home: D, onDrop: z, onReturn: oe, rowLook: se = !1 }) {
    var kr;
    const ee = !qe(), J = ((kr = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : kr.offsetHeight) || 80, Te = s - i.left, Ue = u - i.top, _e = 44;
    let Ce = s, ye = u, ct = i.left, ut = i.top, Ee = 0, pt = 0, Mt = !ee, it = null, Xe = null, rn = -1, wn = 0, Ot = null;
    const hi = () => ["warmupList", "strengthList", "cooldownList"].map((nt) => o(nt)).filter((nt) => nt && nt.getClientRects().length && !nt.closest("[hidden]")), Me = (nt) => {
      if (nt === it) return;
      it = nt, t.classList.toggle("overList", !!nt || se);
      const At = nt ? nt.getBoundingClientRect().width : i.width;
      t.style.width = At + "px", t.style.height = (nt ? J : i.height) + "px";
    }, rt = (nt) => {
      nt.classList.add("leaving"), nt.style.height = "0px", nt.style.marginTop = "-8px", setTimeout(() => nt.remove(), ee ? 320 : 0);
    }, sn = (nt, At, jt) => {
      if (Xe && Xe.parentNode === nt && rn === jt || (Xe && (rt(Xe), Xe = null, rn = -1), !nt)) return;
      const dn = document.createElement("div");
      dn.className = "dropSlot", nt.insertBefore(dn, At), Xe = dn, rn = jt, dn.getBoundingClientRect(), dn.style.height = J + "px", dn.style.marginTop = "0px";
    }, ln = () => {
      let nt = null, At = 1 / 0;
      for (const ha of hi()) {
        const st = ha.getBoundingClientRect();
        if (Ce < st.left - 48 || Ce > st.right + 48) continue;
        const bt = st.top - 28, Nt = st.bottom + 28, Gn = ye < bt ? bt - ye : ye > Nt ? ye - Nt : 0;
        Gn < At && (At = Gn, nt = ha);
      }
      const jt = M == null ? void 0 : M.getBoundingClientRect(), jn = jt && Ce >= jt.left && Ce <= jt.right && ye >= jt.top && ye <= jt.bottom || At === 0 ? nt : null;
      if (jn) {
        const ha = [...jn.children].filter((bt) => bt.classList.contains("moveRow"));
        let st = ha.findIndex((bt) => {
          const Nt = bt.getBoundingClientRect();
          return ye < Nt.top + Nt.height / 2;
        });
        st < 0 && (st = ha.length), sn(jn, ha[st] || null, st);
      } else sn(null);
      Me(jn);
    }, tl = () => {
      if (Ot) return Ot.aim();
      if (it) {
        const nt = it.getBoundingClientRect();
        let At = ye - J / 2;
        return Xe && (At = At * 0.6 + Xe.getBoundingClientRect().top * 0.4), { x: nt.left, y: At };
      }
      return { x: Ce - Te, y: ye - Ue };
    }, yr = (nt, At, jt, dn) => {
      t.style.transform = "translate(" + ct + "px," + ut + "px) rotate(" + nt + "deg) rotate(" + At + "rad) scale(" + jt + "," + dn + ") rotate(" + -At + "rad)";
    }, nl = () => {
      if (wn = requestAnimationFrame(nl), !Mt) {
        const st = Ce - s, bt = ye - u, Nt = Math.min(Math.hypot(st, bt) / _e, 1);
        ct = i.left + st * 0.35, ut = i.top + bt * 0.35, yr(0, Math.atan2(bt, st), 1 + 0.155 * Nt, 1 - 0.1 * Nt);
        return;
      }
      const nt = tl();
      if (!ee) {
        ct = nt.x, ut = nt.y, yr(0, 0, 1, 1), Ot && (cancelAnimationFrame(wn), Ot.done());
        return;
      }
      const At = Ot ? Ot.k : 0.17, jt = Ot ? Ot.d : 0.7;
      Ee = (Ee + (nt.x - ct) * At) * jt, pt = (pt + (nt.y - ut) * At) * jt, ct += Ee, ut += pt;
      const dn = Math.hypot(Ee, pt), jn = Math.min(dn / 48, 1), ha = it || Ot ? 0 : Math.max(-5, Math.min(5, Ee * 0.32));
      yr(ha, Math.atan2(pt, Ee), 1 + 0.1 * jn, 1 - 0.063 * jn), Ot && dn < 0.15 && Math.hypot(nt.x - ct, nt.y - ut) < 0.6 && (cancelAnimationFrame(wn), Ot.done());
    }, al = setInterval(() => {
      if (!f || Ot) return;
      const nt = f.getBoundingClientRect(), At = 64, jt = ye < nt.top + At ? -(nt.top + At - ye) / 4 : ye > nt.bottom - At ? (ye - (nt.bottom - At)) / 4 : 0;
      jt && (f.scrollTop += Math.max(-18, Math.min(18, jt)), ln());
    }, 30);
    wn = requestAnimationFrame(nl);
    let ds = !1;
    const fi = (nt, At) => {
      if (ds) return;
      ds = !0, cancelAnimationFrame(wn);
      const jt = Xe ? Xe.offsetHeight : J;
      !nt && Xe && (Xe.remove(), Xe = null), nt ? z(nt, At, jt) : oe();
    };
    return {
      move(nt, At) {
        Ce = nt, ye = At, !Mt && Math.hypot(Ce - s, ye - u) > _e && (Mt = !0, Ee = (Ce - s) * 0.085, pt = (ye - u) * 0.085), Mt && ln();
      },
      drop(nt) {
        clearInterval(al);
        const At = it, jt = rn;
        if (!nt && At && Xe) {
          const dn = Xe;
          Ot = { k: 0.24, d: 0.62, aim: () => {
            const jn = dn.getBoundingClientRect();
            return { x: jn.left, y: jn.top };
          }, done: () => fi(At, jt) }, setTimeout(() => fi(At, jt), 650), ee || (cancelAnimationFrame(wn), fi(At, jt));
          return;
        }
        sn(null), Me(null), Ot = { k: 0.2, d: 0.66, aim: () => {
          const dn = D();
          return { x: dn.left, y: dn.top };
        }, done: () => fi(null) }, setTimeout(() => fi(null), 650), ee || (cancelAnimationFrame(wn), fi(null));
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
      if (na()) {
        bs(i);
        return;
      }
      const f = o("strengthList"), M = ea(i, f, mt(f).arr.length, 0);
      M == null || M.scrollIntoView({ block: "nearest", behavior: qe() ? "auto" : "smooth" });
    }), t.addEventListener("pointerdown", (u) => {
      if (u.button !== void 0 && u.button !== 0) return;
      const f = u.pointerId, M = u.clientX, D = u.clientY;
      let z = null, oe = !1;
      try {
        t.setPointerCapture(f);
      } catch {
      }
      const se = (ye) => {
        if (ye.pointerId === f) {
          if (ye.pointerType === "mouse" && ye.buttons === 0) {
            Ce(!1);
            return;
          }
          if (!z) {
            if (Math.hypot(ye.clientX - M, ye.clientY - D) < 6) return;
            z = wi(t, i, M, D);
          }
          z.move(ye.clientX, ye.clientY);
        }
      }, ee = (ye) => {
        ye.pointerId === f && Ce(!1);
      }, J = (ye) => {
        ye.pointerId === f && Ce(!0);
      }, Te = () => Ce(!1), Ue = () => Ce(!0), _e = (ye) => {
        ye.key === "Escape" && z && (ye.preventDefault(), ye.stopPropagation(), Ce(!0));
      };
      function Ce(ye) {
        if (!oe && (oe = !0, window.removeEventListener("pointermove", se, !0), window.removeEventListener("pointerup", ee, !0), window.removeEventListener("pointercancel", J, !0), window.removeEventListener("keydown", _e, !0), window.removeEventListener("blur", Ue), t.removeEventListener("lostpointercapture", Te), z)) {
          const ct = z;
          z = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), ct.drop(ye);
        }
      }
      window.addEventListener("pointermove", se, !0), window.addEventListener("pointerup", ee, !0), window.addEventListener("pointercancel", J, !0), window.addEventListener("keydown", _e, !0), window.addEventListener("blur", Ue), t.addEventListener("lostpointercapture", Te);
    });
  }
  const yn = (zd = window.matchMedia) == null ? void 0 : zd.call(window, "(max-width: 620px)");
  function na() {
    var t;
    return !!((t = window.matchMedia) != null && t.call(window, "(max-width: 620px)").matches);
  }
  const vo = (t) => t.charAt(0).toUpperCase() + t.slice(1), Ea = (t) => t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "movement";
  let Yo = null, Et = null;
  function mn(t, i, s, u) {
    bn(), o("sheetTitle").textContent = t;
    const f = o("sheetBody");
    f.innerHTML = "", f.appendChild(i), Yo = s || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !f.contains(i)) return;
      const M = u ? f.querySelector("input[data-f=url],input[data-f=name]") : f.querySelector("button,input,select");
      M == null || M.focus({ preventScroll: !0 });
    }, qe() ? 0 : 360);
  }
  function bn() {
    const t = o("sheet");
    if (!t.classList.contains("open")) return;
    t.classList.remove("open"), o("sheetScrim").classList.remove("open"), t.setAttribute("aria-hidden", "true"), t.contains(a.activeElement) && a.activeElement.blur();
    const i = Yo;
    Yo = null, i == null || i(), setTimeout(bo, 0);
  }
  o("sheetScrim").addEventListener("click", bn), o("sheet").addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), bn());
  });
  function vs(t, i) {
    const s = He(t, i.indexOf(t), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        bn(), A(), It(vo(Ea(t)) + " updated");
      },
      onCancel: bn,
      onHide() {
        t.hidden = !t.hidden, bn(), A(), It((t.hidden ? "Hidden: " : "Showing: ") + t.name);
      },
      onRemove() {
        bn();
        const u = i.indexOf(t);
        u < 0 || (i.splice(u, 1), A(), It("Removed " + t.name, { label: "Undo", run: () => {
          i.splice(Math.min(u, i.length), 0, t), A();
        } }));
      }
    });
    mn("Edit " + Ea(t), s, null, !1);
  }
  function Xi() {
    const t = document.createElement("div");
    t.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([i, s, u, f]) => {
      const M = document.createElement("button");
      M.type = "button", M.className = "sheetChoice", M.innerHTML = '<span class="timeIcon" aria-hidden="true">' + me(s) + "</span><span><strong>" + u + "</strong><small>" + f + "</small></span>", M.addEventListener("click", () => bs(i)), t.appendChild(M);
    }), mn("Add to the move", t, null, !1);
  }
  function bs(t) {
    Et && Qi();
    const i = Pt(t, o("strengthList")), s = He(i, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        bn(), Sl(i, t);
      },
      onCancel: bn
    });
    mn("New " + Ea(i), s, null, !0);
  }
  const Da = o("workoutModal").querySelector(".modalStatic"), Zo = { parent: Da.parentNode, next: Da.nextSibling };
  function xi() {
    const t = document.createElement("div");
    t.className = "sheetSetup", t.appendChild(Da);
    const i = document.createElement("button");
    i.type = "button", i.className = "primary sheetDone", i.textContent = "Done", i.addEventListener("click", bn), t.appendChild(i), mn("Setup", t, () => {
      Zo.parent.insertBefore(Da, Zo.next), Ji();
    }, !1);
  }
  function Ji() {
    var i, s;
    const t = o("setupSummaryName");
    t && (t.textContent = (((i = o("workoutNameInput")) == null ? void 0 : i.value) || "").trim() || ((s = Ye[ht]) == null ? void 0 : s.name) || "Move", o("setupSummaryMeta").textContent = qt.textContent);
  }
  o("setupSummary").addEventListener("click", xi), o("addFab").addEventListener("click", Xi);
  function Er() {
    const t = o("strengthList");
    return In(t) || t.closest(".exerciseScroller");
  }
  function Dr() {
    const t = o("strengthList").getBoundingClientRect(), i = (Er() || o("strengthList")).getBoundingClientRect(), s = (Et == null ? void 0 : Et.ghost.offsetHeight) || 64;
    return { left: t.left, top: Math.max(i.top + 12, Math.min(i.bottom - s - 96, i.top + i.height * 0.55 - s / 2)), width: t.width, height: s };
  }
  function Sl(t, i) {
    var z;
    const s = ga(i, [t.name || ta[i][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (t.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const u = document.createElement("span");
    u.className = "addGhostActions", u.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Ie(t.name) + '">✕</button>', s.appendChild(u), Et = { item: t, type: i, ghost: s };
    const f = ((z = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : z.offsetHeight) || 64;
    s.style.width = o("strengthList").getBoundingClientRect().width + "px", s.style.height = f + "px";
    const M = Dr(), D = nn.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + M.left + "px," + D + "px)", s.getBoundingClientRect(), qe() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + M.left + "px," + M.top + "px)", u.querySelector("[data-a=end]").addEventListener("click", Qi), u.querySelector("[data-a=discard]").addEventListener("click", ys), s.addEventListener("pointerdown", ws);
  }
  function ws(t) {
    if (!Et || t.target.closest("button") || t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const { item: i, ghost: s } = Et, u = t.pointerId;
    try {
      s.setPointerCapture(u);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const f = s.getBoundingClientRect(), M = Er(), D = Hn({
      ghost: s,
      origin: { left: f.left, top: f.top, width: f.width, height: f.height },
      sx: t.clientX,
      sy: t.clientY,
      scroller: M,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || M,
      rowLook: !0,
      home: Dr,
      onDrop: (Ce, ye, ct) => {
        Et = null, ca(s), xs(i, Ce, ye, ct);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let z = !1;
    const oe = (Ce) => {
      if (Ce.pointerId === u) {
        if (Ce.pointerType === "mouse" && Ce.buttons === 0) {
          _e(!1);
          return;
        }
        D.move(Ce.clientX, Ce.clientY);
      }
    }, se = (Ce) => {
      Ce.pointerId === u && _e(!1);
    }, ee = (Ce) => {
      Ce.pointerId === u && _e(!0);
    }, J = () => _e(!1), Te = () => _e(!0), Ue = (Ce) => {
      Ce.key === "Escape" && (Ce.preventDefault(), _e(!0));
    };
    function _e(Ce) {
      z || (z = !0, window.removeEventListener("pointermove", oe, !0), window.removeEventListener("pointerup", se, !0), window.removeEventListener("pointercancel", ee, !0), window.removeEventListener("keydown", Ue, !0), window.removeEventListener("blur", Te), s.removeEventListener("lostpointercapture", J), D.drop(Ce));
    }
    window.addEventListener("pointermove", oe, !0), window.addEventListener("pointerup", se, !0), window.addEventListener("pointercancel", ee, !0), window.addEventListener("keydown", Ue, !0), window.addEventListener("blur", Te), s.addEventListener("lostpointercapture", J);
  }
  function xs(t, i, s, u) {
    const f = mt(i);
    t.kind !== "rest" && t.kind !== "video" && (t.kind = f.kind, f.group && (!t.group || t.group === "Movement") && (t.group = f.group)), f.arr.splice(Math.max(0, Math.min(s, f.arr.length)), 0, t), tn(i.closest(".exerciseScroller,.createStepSlot") || i, () => A()), Ln(i.querySelector('.moveRow[data-id="' + t.id + '"]'), u), It(vo(Ea(t)) + " added");
  }
  function Qi() {
    var u;
    if (!Et) return;
    const { item: t, ghost: i } = Et;
    Et = null, ca(i);
    const s = o("strengthList");
    xs(t, s, mt(s).arr.length, 0), (u = s.querySelector('.moveRow[data-id="' + t.id + '"]')) == null || u.scrollIntoView({ block: "nearest", behavior: qe() ? "auto" : "smooth" });
  }
  function ys() {
    if (!Et) return;
    const t = Et.ghost;
    Et = null, ca(t), It("Discarded");
  }
  function Rr() {
    Et && (Et.ghost.remove(), Et = null);
  }
  window.addEventListener("resize", () => {
    if (Et != null && Et.ghost.classList.contains("hovering")) {
      const t = Dr();
      Et.ghost.style.width = t.width + "px", Et.ghost.style.transform = "translate(" + t.left + "px," + t.top + "px)";
    }
  }), (jd = yn == null ? void 0 : yn.addEventListener) == null || jd.call(yn, "change", () => {
    bn(), Et && !na() && Qi(), Ne();
  });
  {
    const t = o("workoutModal").querySelector(".modal");
    t.addEventListener("scroll", () => {
      (t.scrollTop || t.scrollLeft) && (t.scrollTop = 0, t.scrollLeft = 0);
    });
  }
  function bo() {
    const t = o("workoutModal"), i = window.visualViewport;
    if (!t.classList.contains("open") || !na()) {
      ks();
      return;
    }
    const s = i ? i.offsetTop : 0, u = i ? i.offsetLeft : 0, f = i ? i.width : window.innerWidth, M = i ? i.height : window.innerHeight;
    Object.assign(t.style, { right: "auto", bottom: "auto", width: f + "px", height: M + "px", top: s + "px", left: u + "px" });
    const D = t.getBoundingClientRect();
    Math.abs(D.top - s) > 0.5 && (t.style.top = 2 * s - D.top + "px"), Math.abs(D.left - u) > 0.5 && (t.style.left = 2 * u - D.left + "px");
  }
  function ks() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((t) => o("workoutModal").style.removeProperty(t));
  }
  (Gd = window.visualViewport) == null || Gd.addEventListener("resize", bo), (Ud = window.visualViewport) == null || Ud.addEventListener("scroll", bo), window.addEventListener("resize", bo), window.addEventListener("scroll", bo, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(bo, 250));
  function Br() {
    Qe.length > 0;
    const t = o("addMovementBtn"), i = o("addRestBtn");
    t && (t.innerHTML = P + "<span>Add movement</span>"), i && (i.innerHTML = P + "<span>Add rest</span>");
    const s = o("addVideoBtn");
    s && (s.innerHTML = P + "<span>Add video</span>");
  }
  function va() {
    const t = o("useGlobalTiming").checked, i = o("addMovementDuration"), s = o("addMovementUnit");
    i.disabled = t, s.disabled = t, i.parentElement.style.opacity = t ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + Qt(C.value);
    const u = o("useGlobalRestTiming").checked, f = o("addRestDuration"), M = o("addRestUnit");
    f.disabled = u, M.disabled = u, f.parentElement.style.opacity = u ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + Qt(N.value);
  }
  let Nr = "movement";
  function Tl(t) {
    Nr = t;
    const i = o("movementFields"), s = o("restFields");
    i.hidden = t !== "movement", s.hidden = t !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), va();
  }
  function wo() {
    Ye[ht];
    const t = dt ? !0 : o("useGlobalTiming").checked, i = t ? Number(C.value) : xt(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), s = dt ? !0 : o("useGlobalRestTiming").checked, u = s ? Number(N.value) : xt(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (Nr === "rest") {
      const f = o("addRestTitle").value.trim() || "Rest", M = o("addRestGroup").value.trim() || "Rest";
      Qe.push({
        id: "rest-" + Date.now(),
        name: f,
        group: M,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, u || Number(N.value))
      }), A(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", It("Rest added"), dt && (j("movements"), ve());
    } else {
      const f = o("addMovementInput").value.trim();
      if (!f) return;
      const M = o("addMovementGroup").value.trim() || "Movement";
      Qe.push({
        id: "movement-" + Date.now(),
        name: f,
        group: M,
        kind: "work",
        hidden: !1,
        useGlobalTiming: t,
        duration: Math.max(5, i || Number(C.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", A(), o("movementCreator").hidden = !0, It("Movement added"), dt && (j("movements"), ve());
    }
    Br();
  }
  let An = null;
  function It(t, i) {
    const s = o("toast");
    s.innerHTML = "";
    const u = document.createElement("span");
    if (u.textContent = t, s.appendChild(u), i) {
      const f = document.createElement("button");
      f.type = "button", f.className = "toastAction", f.textContent = i.label, f.addEventListener("click", () => {
        i.run(), s.classList.remove("show", "withAction"), clearTimeout(An);
      }), s.appendChild(f);
    }
    s.classList.toggle("withAction", !!i), s.classList.add("show"), clearTimeout(An), An = setTimeout(() => s.classList.remove("show", "withAction"), i ? 5e3 : 2200);
  }
  const Ms = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Cs = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function yi(t) {
    return Math.max(0, Math.min(5, Math.floor(Number(t) / 100 * 6)));
  }
  function Ko(t, i) {
    return Ms[yi(i)];
  }
  function Ll(t) {
    return Cs[yi(t)];
  }
  function Ht(t) {
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  function Ra() {
    return { morning: ot().morningTime || "08:00", evening: ot().eveningTime || "19:00" };
  }
  function $o(t) {
    const [i, s] = String(t).split(":").map(Number);
    return (i || 0) * 60 + (s || 0);
  }
  function Al(t) {
    const i = Ra();
    return t.getHours() * 60 + t.getMinutes() >= $o(i.evening) ? "evening" : "morning";
  }
  function er(t, i) {
    return lt.checkins.find((s) => s.date === t && s.slot === i);
  }
  function ki(t) {
    return !!(t && t.mood != null && t.energy != null);
  }
  function tr() {
    const t = /* @__PURE__ */ new Date(), i = Ht(t), s = Al(t), u = Ra(), f = t.getHours() * 60 + t.getMinutes();
    return s === "morning" && f < $o(u.morning) || ki(er(i, s)) ? null : s;
  }
  const Ba = o("checkinModal"), $a = o("checkinTab"), Ss = o("checkinBadge"), Xa = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function Pr(t) {
    const { input: i, fill: s } = Xa[t];
    s.style.width = i.value + "%", i.setAttribute("aria-valuetext", Ko(t, i.value));
  }
  Object.keys(Xa).forEach((t) => Xa[t].input.addEventListener("input", () => Pr(t)));
  let ba = null;
  function Xo() {
    const t = Ra(), i = /* @__PURE__ */ new Date(), s = i.getHours() * 60 + i.getMinutes();
    return s < $o(t.morning) ? "Next check-in at " + t.morning : s < $o(t.evening) ? "Next check-in at " + t.evening : "Next check-in tomorrow at " + t.morning;
  }
  function Ir() {
    const t = Ra(), i = /* @__PURE__ */ new Date(), s = i.getHours() * 60 + i.getMinutes(), u = (f, M) => {
      const [D, z] = f.split(":").map(Number);
      return new Date(i.getFullYear(), i.getMonth(), i.getDate() + (M ? 1 : 0), D, z);
    };
    return s < $o(t.morning) ? { date: u(t.morning), time: t.morning } : s < $o(t.evening) ? { date: u(t.evening), time: t.evening } : { date: u(t.morning, !0), time: t.morning };
  }
  let Mi = null, nr = null;
  function ar() {
    if (tr()) {
      or(), Ja();
      return;
    }
    const t = Ir(), i = Math.max(0, Math.round((t.date - Date.now()) / 1e3)), s = Math.floor(i / 3600), u = Math.floor(i % 3600 / 60), f = i % 60;
    o("peekCountdown").textContent = s + ":" + String(u).padStart(2, "0") + ":" + String(f).padStart(2, "0"), o("peekAt").textContent = "Available at " + t.time;
  }
  function _l() {
    ar(), $a.classList.add("peek"), clearInterval(nr), nr = setInterval(ar, 1e3), clearTimeout(Mi), Mi = setTimeout(or, 6e3);
  }
  function or() {
    $a.classList.remove("peek"), clearInterval(nr), clearTimeout(Mi);
  }
  function Ts() {
    const t = tr();
    if (!t) {
      $a.classList.contains("peek") ? or() : _l();
      return;
    }
    ba = { date: Ht(/* @__PURE__ */ new Date()), slot: t };
    const s = er(ba.date, t), u = lt.checkins.find((f) => ki(f));
    Object.keys(Xa).forEach((f) => {
      Xa[f].input.value = (s == null ? void 0 : s[f]) ?? (u == null ? void 0 : u[f]) ?? 50, Pr(f);
    }), o("checkinTitle").textContent = t === "morning" ? "Morning check-in" : "Evening check-in", Ba.classList.add("open"), Ba.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Xa.mood.input.focus());
  }
  function Ci() {
    Ba.classList.remove("open"), Ba.setAttribute("aria-hidden", "true"), ba && (Na = ba.date + "-" + ba.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Na);
    } catch {
    }
    ba = null, Ja();
  }
  function El() {
    if (!ba) return;
    if (ki(er(ba.date, ba.slot))) {
      Ci();
      return;
    }
    const { date: t, slot: i } = ba;
    let s = er(t, i);
    s || (s = { date: t, slot: i }, lt.checkins.unshift(s), lt.checkins = lt.checkins.slice(0, 2e3)), s.mood = Number(Xa.mood.input.value), s.energy = Number(Xa.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), fn(), l.fire("checkin", { slot: i, mood: s.mood, energy: s.energy, mood_label: Ko("mood", s.mood), energy_label: Ko("energy", s.energy) }), It((i === "morning" ? "Morning" : "Evening") + " check-in saved"), Ci(), ir(), wa(), lo(), Wn();
  }
  let Na = "";
  try {
    Na = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Ja() {
    const t = tr();
    Ss.hidden = !t, $a.hidden = !t, t || or(), $a.classList.toggle("due", !!t), $a.setAttribute("aria-label", t ? (t === "morning" ? "Morning" : "Evening") + " check-in is due" : Xo()), $a.title = t ? "Check in now" : Xo();
  }
  function Hr() {
    Ja();
    const t = tr();
    !t || Ba.classList.contains("open") || ot().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !we.home.classList.contains("active") || nn.classList.contains("open") || Na !== Ht(/* @__PURE__ */ new Date()) + "-" + t && Ts());
  }
  $a.addEventListener("click", Ts), o("checkinLater").addEventListener("click", Ci), o("checkinSave").addEventListener("click", El), Ba.addEventListener("click", (t) => {
    t.target === Ba && Ci();
  }), Ba.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Ci());
  }), setInterval(Hr, 3e4);
  function ir() {
    const t = Ht(/* @__PURE__ */ new Date()), i = (s) => lt.checkins.find((u) => u.date === t && u[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, u]) => {
      const f = i(s);
      o(u).textContent = f ? Ko(s, f[s]) : "—";
    });
  }
  function wa() {
    const t = o("feelCard");
    if (!t) return;
    const i = /* @__PURE__ */ new Date(), s = new Date(i.getFullYear(), i.getMonth(), i.getDate() - (i.getDay() + 6) % 7), u = [...Array(7)].map((se, ee) => {
      const J = new Date(s.getFullYear(), s.getMonth(), s.getDate() + ee), Te = Ht(J), Ue = lt.checkins.filter((Ce) => Ce.date === Te), _e = (Ce) => {
        const ye = Ue.map((ct) => ct[Ce]).filter((ct) => ct != null);
        return ye.length ? ye.reduce((ct, ut) => ct + ut, 0) / ye.length : null;
      };
      return { d: J, key: Te, mood: _e("mood"), energy: _e("energy"), count: Ue.filter(ki).length, future: J > i && Te !== Ht(i) };
    }), f = (se) => {
      const ee = u.map((J) => J[se]).filter((J) => J != null);
      return ee.length ? ee.reduce((J, Te) => J + Te, 0) / ee.length : null;
    }, M = f("mood"), D = f("energy"), z = (se, ee) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + se + "</span><span>" + (ee == null ? "—" : Ie(Ko("", ee))) + '</span></div><div class="feelTrack"><span style="width:' + (ee == null ? 0 : Math.max(4, ee)) + "%;background:" + (ee == null ? "transparent" : Ll(ee)) + '"></span></div></div>', oe = u.filter((se) => se.mood != null && se.energy != null).sort((se, ee) => ee.mood + ee.energy - (se.mood + se.energy))[0];
    t.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (M == null ? "No check-ins yet" : Ie(Ko("", (M + D) / 2))) + '</div><div class="weekCopy">' + (M == null ? "Your first check-in will appear here." : "on average this week" + (oe ? " · best day " + Ie(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(oe.d)) : "")) + '</div></div></div><div class="feelDays">' + u.map(
      (se) => '<div class="weekChip feelDay' + (se.future ? " future" : "") + (se.key === Ht(i) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Ie(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(se.d)) + "</strong>" + (se.count >= 2 ? '<span class="weekTick">' + me("check") + "</span>" : '<span class="feelDots">' + "●".repeat(se.count) + "</span>") + "</div>" + z("Mood", se.mood) + z("Energy", se.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Si = o("upcomingCountSetting");
  Si.addEventListener("change", () => {
    Aa = Si.value === "all" ? "all" : Number(Si.value), ka();
  });
  const Jo = o("tempoRevealBtn"), Fr = o("tempoExperiment"), Fn = o("tempoQuad"), xo = o("tempoDot"), Or = o("tempoEstimate"), Ls = o("tempoReadout");
  let Qo = { x: 0.5, y: 0.5 }, Ti = !1, Li = { total: 20, work: 45, rest: 15 };
  function qr(t, i, s, u) {
    const f = Math.max(i, Math.min(s, t));
    return Math.round((f - i) / u) * u + i;
  }
  function rr(t, i) {
    const s = (t - 0.5) * 2, u = (i - 0.5) * 2, f = qr(
      Li.total + s * 5 + u * 8,
      Number(E.min),
      Number(E.max),
      Number(E.step)
    ), M = qr(
      Li.work + s * 10 + u * 8,
      Number(C.min),
      Number(C.max),
      Number(C.step)
    ), D = qr(
      Li.rest + s * 6 + u * 6,
      Number(N.min),
      Number(N.max),
      Number(N.step)
    );
    return E.value = f, C.value = M, N.value = D, V.textContent = M + " sec", ae.textContent = D + " sec", _a(), { total: f, work: M, rest: D };
  }
  function $t(t, i) {
    const s = t < 0.34 ? "Low" : t > 0.66 ? "Hard" : "Medium", u = i < 0.34 ? "Fast" : i > 0.66 ? "Slow" : "Balanced", f = rr(t, i);
    Ls.textContent = s + " + " + u, Or.textContent = f.total + " min", Fn.setAttribute("aria-valuetext", s + " and " + u + ", estimated " + f.total + " minutes");
  }
  function Wr(t) {
    const i = Fn.getBoundingClientRect(), s = Math.max(0, Math.min(1, (t.clientX - i.left) / i.width)), u = Math.max(0, Math.min(1, (t.clientY - i.top) / i.height));
    Qo = { x: s, y: u }, xo.style.left = s * 100 + "%", xo.style.top = u * 100 + "%", $t(s, u);
  }
  Jo.addEventListener("click", () => {
    const t = Fr.hidden;
    Fr.hidden = !t, Jo.setAttribute("aria-expanded", t ? "true" : "false"), Jo.textContent = t ? "Now close this" : "Don’t try this!", t && (Li = {
      total: Number(E.value),
      work: Number(C.value),
      rest: Number(N.value)
    }, Qo = { x: 0.5, y: 0.5 }, xo.style.left = "50%", xo.style.top = "50%", $t(Qo.x, Qo.y));
  }), a.querySelectorAll("[data-feedback-rating]").forEach((t) => t.addEventListener("click", () => {
    Number(t.dataset.feedbackRating), a.querySelectorAll("[data-feedback-rating]").forEach((i) => i.classList.toggle("selected", i === t));
  }));
  const sr = o("testingFeedbackForm"), Ai = o("testingFeedbackThanks"), yo = o("testingFeedbackAgain");
  sr.addEventListener("submit", (t) => {
    t.preventDefault(), sr.hidden = !0, Ai.hidden = !1, It("Feedback captured for prototype");
  }), yo.addEventListener("click", (t) => {
    t.preventDefault(), sr.reset(), a.querySelectorAll("[data-feedback-rating]").forEach((i) => i.classList.remove("selected")), Ai.hidden = !0, sr.hidden = !1;
  }), Fn.addEventListener("pointerdown", (t) => {
    var i;
    Ti = !0, Wr(t);
    try {
      (i = Fn.setPointerCapture) == null || i.call(Fn, t.pointerId);
    } catch {
    }
  }), Fn.addEventListener("pointermove", (t) => {
    Ti && Wr(t);
  }), Fn.addEventListener("pointerup", (t) => {
    Ti && (Ti = !1, Wr(t), A());
  }), Fn.addEventListener("pointercancel", () => Ti = !1), Fn.addEventListener("keydown", (t) => {
    let { x: i, y: s } = Qo, u = !0;
    t.key === "ArrowLeft" ? i -= 0.05 : t.key === "ArrowRight" ? i += 0.05 : t.key === "ArrowUp" ? s -= 0.05 : t.key === "ArrowDown" ? s += 0.05 : u = !1, u && (t.preventDefault(), i = Math.max(0, Math.min(1, i)), s = Math.max(0, Math.min(1, s)), Qo = { x: i, y: s }, xo.style.left = i * 100 + "%", xo.style.top = s * 100 + "%", $t(i, s), A());
  });
  const nn = o("workoutModal");
  let _i = null;
  function ei(t) {
    return t.map((i) => ({ ...i }));
  }
  function Dl() {
    const t = Ye[ht];
    return {
      key: ht,
      profile: t ? JSON.parse(JSON.stringify(t)) : null,
      warmup: ei(St),
      strength: ei(Qe),
      cooldown: ei(xn),
      total: Number(E.value),
      work: Number(C.value),
      rest: Number(N.value),
      rounds: Number(at.value) || 1
    };
  }
  function As(t = !1) {
    dt = !!t, he = null, ke = null, bn(), Rr(), _i = Dl(), o("moveEditorTitle").textContent = dt ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !dt, o("warmupRow").hidden = dt, o("deleteMoveOpen").hidden = dt;
    const i = o("createMoveOptions");
    i.hidden = !dt;
    {
      const s = Ye[ht];
      o("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), o("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (_s(), dt) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const s = Ye[ht];
      Za((s == null ? void 0 : s.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, Tl("movement"), Br(), va(), Fr.hidden = !0, Jo.setAttribute("aria-expanded", "false"), Jo.textContent = "Don’t try this!", nn.classList.toggle("createMode", dt), nn.querySelector(".modal").classList.toggle("createMode", dt), nn.classList.add("open"), nn.setAttribute("aria-hidden", "false"), bo(), dt && Le();
  }
  function Rl() {
    const t = Ye[ht];
    return t != null && t.customSequence ? !!t.includeWarmup : !(t != null && t.warmupOff);
  }
  function _s() {
    const t = Rl(), i = o("warmupSwitch");
    i.classList.toggle("on", t), i.setAttribute("aria-checked", String(t));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const t = Ye[ht];
    t && (t.customSequence ? (o("includeWarmupPreset").checked = !t.includeWarmup, go()) : (t.warmupOff = !t.warmupOff, A()), _s());
  });
  function ko() {
    bn(), Rr(), ks(), ke = null, he = null, nn.classList.contains("createMode") && w(), nn.classList.remove("createMode"), nn.querySelector(".modal").classList.remove("createMode"), nn.classList.remove("open"), nn.setAttribute("aria-hidden", "true");
  }
  function ua() {
    if (!_i) return;
    const t = _i;
    t.profile && (Ye[t.key] = JSON.parse(JSON.stringify(t.profile))), ht = t.key, St = ei(t.warmup), Qe = ei(t.strength), xn = ei(t.cooldown), E.value = t.total, C.value = t.work, N.value = t.rest, at.value = t.rounds || 1;
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
    A();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (dt) {
      const t = ht;
      delete Ye[t], dt = !1, vt = null, Nn(lt.order.find((i) => Ye[i]) || Object.keys(Ye)[0]);
    } else
      ua();
    ko();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    bn(), Et && Qi();
    const t = Ye[ht], i = m.value.trim() || "New move";
    if (t && (t.name = i), tt(), he = null, A(), dt && t)
      Uo(ht, t), a.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === ht)), dt = !1, vt = null, lt.order.includes(ht) || lt.order.push(ht), It("Move created");
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
    _i = null, ko(), fn();
  }), nn.addEventListener("click", (t) => {
    if (t.target === nn) {
      if (dt) {
        const i = ht;
        delete Ye[i], dt = !1, vt = null, Nn(lt.order.find((s) => Ye[s]) || Object.keys(Ye)[0]);
      } else
        ua();
      ko();
    }
  }), gt(o("addMovementBtn"), "movement"), gt(o("addRestBtn"), "rest"), gt(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", va), o("useGlobalRestTiming").addEventListener("change", va), a.querySelectorAll(".createPresetBtn").forEach((t) => t.addEventListener("click", () => {
    Za(t.dataset.movePreset, !0), A();
  })), o("includeWarmupPreset").addEventListener("change", go), o("includeCooldownPreset").addEventListener("change", go), o("includeWarmupPreset").addEventListener("change", ve), o("includeCooldownPreset").addEventListener("change", ve), m.addEventListener("input", ve), m.addEventListener("input", Ji), o("confirmAddMovement").addEventListener("click", wo), o("confirmAddRest").addEventListener("click", wo), o("addMovementInput").addEventListener("keydown", (t) => {
    t.key === "Enter" && wo();
  });
  const Ei = o("countdown"), Vr = o("countNum"), Xt = o("countdownPixelCanvas");
  let kt = null, aa = "appear";
  class zr {
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
  let Pa = [], Di = 1, Ia = 1;
  function oa() {
    const t = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(t) && t > 0 ? t : 1;
  }
  function Mo() {
    var se;
    if (!Xt) return;
    const t = oa(), i = Math.max(1, window.innerWidth / t), s = Math.max(1, window.innerHeight / t);
    Di = i, Ia = s;
    const u = Math.min(window.devicePixelRatio || 1, 2);
    Xt.width = Math.floor(i * u), Xt.height = Math.floor(s * u), Xt.style.width = i + "px", Xt.style.height = s + "px";
    const f = Xt.getContext("2d");
    f.setTransform(u, 0, 0, u, 0, 0);
    const M = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], D = 12, z = (se = window.matchMedia) == null ? void 0 : se.call(window, "(prefers-reduced-motion: reduce)").matches, oe = z ? 0 : 0.055;
    Pa = [];
    for (let ee = 0; ee < i; ee += D)
      for (let J = 0; J < s; J += D) {
        const Te = ee - i / 2, Ue = J - s / 2, _e = Math.sqrt(Te * Te + Ue * Ue), Ce = z ? 0 : Math.random() * 75 + _e * 0.05, ye = new zr({ width: i, height: s }, f, ee, J, M[Math.floor(Math.random() * M.length)], oe, Ce);
        ye.maxSizeInteger = 4, ye.maxSize = Math.random() * 3.2 + 0.8, ye.sizeStep = 0.35 + Math.random() * 0.45, Pa.push(ye);
      }
  }
  function Wt(t) {
    cancelAnimationFrame(kt), aa = t;
    const i = Xt == null ? void 0 : Xt.getContext("2d");
    if (!i) return;
    function s() {
      i.clearRect(0, 0, Di, Ia);
      let u = !0;
      Pa.forEach((f) => {
        f[aa](), f.isIdle || (u = !1);
      }), aa === "disappear" && u || (kt = requestAnimationFrame(s));
    }
    kt = requestAnimationFrame(s);
  }
  function Co() {
    cancelAnimationFrame(kt), Mo(), Wt("appear"), setTimeout(() => Wt("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Ei.classList.contains("active") && Co();
  });
  const Ha = o("pixelTrailCanvas"), So = Ha.getContext("2d");
  let xa = !0, To = 0.7, Lo = 600, Ri = [], Ao = null, On = { x: 0, y: 0, ready: !1 };
  function kn() {
    const t = c.getBoundingClientRect(), i = oa(), s = Math.min(window.devicePixelRatio || 1, 2), u = Math.max(1, t.width / i), f = Math.max(1, t.height / i);
    Ha.width = Math.max(1, Math.floor(u * s)), Ha.height = Math.max(1, Math.floor(f * s)), Ha.style.width = u + "px", Ha.style.height = f + "px", So.setTransform(s, 0, 0, s, 0, 0);
  }
  function lr(t, i) {
    if (!xa) return;
    const s = performance.now();
    On.ready || (On = { x: t, y: i, ready: !0 });
    const u = 7;
    for (let f = 1; f <= u; f++) {
      const M = f / u;
      Ri.push({
        x: On.x + (t - On.x) * M,
        y: On.y + (i - On.y) * M,
        born: s - (u - f) * 10
      });
    }
    On = { x: t, y: i, ready: !0 };
  }
  function Bi(t) {
    if (Ao = null, !g) return;
    if (!we.workout.classList.contains("active")) {
      Ao = requestAnimationFrame(Bi);
      return;
    }
    const i = c.getBoundingClientRect(), s = oa();
    So.clearRect(0, 0, i.width / s, i.height / s), xa && (Ri = Ri.filter((f) => t - f.born < Lo), So.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Ri.forEach((f) => {
      const M = (t - f.born) / Lo, D = (1 - M) * To, z = Math.round(f.x / 14) * 14, oe = Math.round(f.y / 14) * 14;
      So.globalAlpha = Math.max(0, D);
      const se = 2 + 5 * (1 - M) * To;
      So.fillRect(z - se / 2, oe - se / 2, se, se);
    }), So.globalAlpha = 1), Ao = requestAnimationFrame(Bi);
  }
  c.addEventListener("pointermove", (t) => {
    const i = c.getBoundingClientRect(), s = oa();
    lr((t.clientX - i.left) / s, (t.clientY - i.top) / s);
  }), c.addEventListener("pointerleave", () => On.ready = !1), new ResizeObserver(kn).observe(c), kn(), Ao = requestAnimationFrame(Bi);
  const Fa = o("movementRippleCanvas"), Qa = Fa.getContext("2d");
  let Oa = !0, ti = null, qa = performance.now();
  function eo() {
    const t = Fa.parentElement.getBoundingClientRect(), i = oa(), s = Math.max(1, t.width / i), u = Math.max(1, t.height / i), f = Math.min(window.devicePixelRatio || 1, 2);
    Fa.width = Math.max(1, Math.floor(s * f)), Fa.height = Math.max(1, Math.floor(u * f)), Fa.style.width = s + "px", Fa.style.height = u + "px", Qa.setTransform(f, 0, 0, f, 0, 0);
  }
  function Es() {
    var t;
    return Dt || ((t = Be[Ve]) == null ? void 0 : t.kind) === "rest";
  }
  function jr() {
    const t = Be[Ve];
    return Es() ? 2200 : t ? t.kind === "warmup" || t.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function ni(t) {
    if (ti = null, !g) return;
    if (!we.workout.classList.contains("active")) {
      ti = requestAnimationFrame(ni);
      return;
    }
    const i = Fa.parentElement.getBoundingClientRect(), s = oa(), u = Math.max(1, i.width / s), f = Math.max(1, i.height / s);
    if (Qa.clearRect(0, 0, u, f), Oa) {
      const M = jr(), D = (t - qa) % M / M, z = 15, oe = Math.max(8, Math.round(z * f / Math.max(1, u))), se = u / (z + 1), ee = f / (oe + 1), J = u * 0.5, Te = f * 0.52, Ue = Math.hypot(J, Te), Ce = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let ye = 1; ye <= oe; ye++)
        for (let ct = 1; ct <= z; ct++) {
          const ut = ct * se, Ee = ye * ee, pt = Math.hypot(ut - J, Ee - Te) / Ue, Mt = Es(), it = Mt ? Math.exp(-Math.pow((pt - (D * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, Xe = Math.exp(-Math.pow((pt - D * 1.25) * 7, 2)), rn = Mt ? it : Xe, wn = Mt ? 0.5 + 0.5 * Math.sin(D * Math.PI * 2 - pt * 3) ** 2 : 0.35 + 0.65 * Math.sin(D * Math.PI * 2 - pt * 5) ** 2, Ot = Mt ? 1.4 + rn * 4.2 * wn : 1.2 + rn * 5 * wn;
          Qa.beginPath(), Qa.arc(ut, Ee, Ot, 0, Math.PI * 2), Qa.fillStyle = `rgba(${Ce},${Mt ? 0.08 + rn * 0.48 : 0.05 + rn * 0.55})`, Qa.fill();
        }
    }
    ti = requestAnimationFrame(ni);
  }
  new ResizeObserver(eo).observe(Fa.parentElement), eo(), ti = requestAnimationFrame(ni);
  const ai = o("exerciseTitle"), Wa = o("exerciseMeta"), Gr = o("stepLabel"), Ni = o("digits"), ia = o("fill"), oi = o("progress"), Ur = o("pause"), _n = o("nextName"), dr = o("nextMeta"), Pi = o("nextIcon"), Va = o("skipNextSession");
  let En = null;
  function Dn(t) {
    for (let i = Math.max(0, t); i < Be.length; i++)
      if (!Be[i].sessionHidden) return i;
    return -1;
  }
  function Bl() {
    const t = Be[Ve];
    if (!t) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Dt) {
      const u = Dn(Ve + 1), f = u >= 0 ? Be[u] : null;
      return f ? { name: f.name, meta: ri(f), icon: ii(f) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (t.rest > 0) return { name: "Rest", meta: t.rest + " sec · " + (t.roundBreakAfter ? "round " + (t.round + 1) + " next" : "recovery"), icon: "pause" };
    const i = Dn(Ve + 1), s = i >= 0 ? Be[i] : null;
    return s ? { name: s.name, meta: ri(s), icon: ii(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Ds() {
    if (!Be[Ve]) return Be.length;
    const i = Dn(Ve + 1);
    return i < 0 ? Be.length : i + 1;
  }
  function ii(t) {
    return t.kind === "video" ? "play" : "clock";
  }
  function ri(t) {
    return t.kind === "video" ? "YouTube · " + Ya(t.duration) : t.group + " · " + t.duration + " sec";
  }
  function cr() {
    return Be.length && Be[Be.length - 1].round || 1;
  }
  function Rs(t) {
    const i = Be[t];
    if (!i) return "";
    const s = cr();
    if (s <= 1) return "Step " + (t + 1) + " of " + Be.length;
    if (i.roundBreak) return "Round " + i.round + " of " + s + " · Rest";
    const u = Be.filter((f) => f.round === i.round && !f.roundBreak).length;
    return "Round " + i.round + " of " + s + " · Step " + (i.roundIndex + 1) + " of " + u;
  }
  function Bs() {
    return oi.querySelector('[data-step="' + Ve + '"]');
  }
  function Rt() {
    Be[Ve] && Number(oi.dataset.round) !== (Be[Ve].round || 1) && to(), [...oi.children].forEach((t) => {
      const i = Number(t.dataset.step);
      t.classList.toggle("done", i < Ve), t.classList.toggle("active", i === Ve), t.classList.toggle("rewindable", i <= Ve), t.disabled = i > Ve, i === Ve && t.style.setProperty("--segment-progress", "0%");
    }), Be[Ve] && (Gr.textContent = Rs(Ve), Bo());
  }
  function ya(t) {
    const i = Be.indexOf(t);
    i < 0 || i <= Ve || (t.sessionHidden = !t.sessionHidden, Mn(), It((t.sessionHidden ? "Hidden " : "Included ") + t.name + " for this session"));
  }
  function ka() {
    const t = o("upcomingList");
    if (!t) return;
    t.innerHTML = "";
    const i = Ds(), s = Be.slice(i);
    (Aa === "all" ? s : s.slice(0, Math.max(1, Number(Aa) || 1))).forEach((f) => {
      const M = document.createElement("section");
      M.className = "upcomingCard" + (f.sessionHidden ? " sessionHidden" : "") + (mr(f) ? " noMeta" : ""), M.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + me(ii(f)) + '</div><div><div class="upcomingName">' + Ie(f.name) + '</div><div class="upcomingMeta">' + Ie(ri(f)) + (cr() > 1 ? " · round " + f.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (f.sessionHidden ? "Include this session" : "Skip this session") + "</button>", M.querySelector(".skipSessionBtn").addEventListener("click", () => ya(f)), t.appendChild(M);
    });
  }
  function Mn() {
    var i;
    const t = Bl();
    _n.textContent = t.name, dr.textContent = t.meta, Pi.innerHTML = me(t.icon);
    {
      const s = Dt ? Be[Dn(Ve + 1)] : ((i = Be[Ve]) == null ? void 0 : i.rest) > 0 ? { kind: "rest" } : Be[Dn(Ve + 1)];
      a.querySelector(".nextCard").classList.toggle("noMeta", !!(s && mr(s)));
    }
    if (En = null, Dt) {
      const s = Dn(Ve + 1);
      s >= 0 && (En = Be[s]);
    } else {
      const s = Be[Ve];
      if (s && s.rest > 0)
        En = null;
      else {
        const u = Dn(Ve + 1);
        u >= 0 && (En = Be[u]);
      }
    }
    Va && (Va.hidden = !En, Va.textContent = En != null && En.sessionHidden ? "Include this session" : "Skip this session"), ka();
  }
  Va.addEventListener("click", () => {
    En && (En.sessionHidden = !En.sessionHidden, It((En.sessionHidden ? "Hidden " : "Included ") + En.name + " for this session"), Mn());
  });
  let Vt = null, pa = null;
  function _o(t, i = {}) {
    const s = Ye[ht];
    l.fire(t, { move: (s == null ? void 0 : s.name) || "", move_id: ht, ...i });
  }
  function si() {
    const t = Ye[ht];
    Vt = { key: ht, name: (t == null ? void 0 : t.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(pa), pa = setInterval(() => {
      Vt && !vn && Vt.active++;
    }, 1e3), _o("started", { steps: Be.length });
  }
  function Yr(t) {
    if (clearInterval(pa), !Vt) return;
    const i = Vt;
    Vt = null, _o(t ? "completed" : "ended", { seconds: i.active }), !(i.active < 30) && (lt.history.unshift({ id: "h-" + i.startedAt, move_id: i.key, name: i.name, start: new Date(i.startedAt).toISOString(), seconds: i.active, completed: t }), lt.history = lt.history.slice(0, 1e3), fn(), lo(), Wn());
  }
  function Nl() {
    k("workout"), gn();
    const t = Dn(0);
    t >= 0 && Be[t].kind === "video" && Is(Be[t]);
  }
  function ur() {
    pr(), Yr(!1), clearInterval(Lt), clearInterval(Ua), Dt = !1, Ma(!1), o("app").classList.remove("resting"), Ei.classList.remove("active"), k("home");
  }
  function gn() {
    Ei.classList.add("active");
    let t = 5;
    Vr.textContent = t, requestAnimationFrame(Co), clearInterval(Ua), Ua = setInterval(() => {
      t--, t > 0 ? (Vr.textContent = t, Co()) : (clearInterval(Ua), Vr.textContent = "GO", Co(), setTimeout(() => {
        Ei.classList.remove("active"), cancelAnimationFrame(kt), Il();
      }, 650));
    }, 1e3);
  }
  function to() {
    var i;
    oi.innerHTML = "";
    const t = ((i = Be[Math.max(0, Ve)] || Be[0]) == null ? void 0 : i.round) || 1;
    oi.dataset.round = t, Be.forEach((s, u) => {
      if ((s.round || 1) !== t) return;
      const f = document.createElement("button");
      f.dataset.step = u, f.type = "button", f.className = "progressSegment", f.setAttribute("aria-label", "Go to " + s.name), f.addEventListener("click", () => {
        u <= Ve && Pl(u);
      }), oi.appendChild(f);
    });
  }
  function Ma(t) {
    t = !!t;
    const i = vn !== t;
    if (vn = t, Ur.textContent = t ? "Resume" : "Pause", o("app").classList.toggle("paused", t), Cn && Bt)
      try {
        t ? Bt.pauseVideo() : Bt.playVideo();
      } catch {
      }
    i && Vt && _o(t ? "paused" : "resumed");
  }
  function Pl(t) {
    t < 0 || t >= Be.length || t > Ve || (clearInterval(Lt), Dt = !1, o("app").classList.remove("resting"), Ve = t, Ma(!1), oo(), Lt = setInterval(Ut, 1e3));
  }
  function Il() {
    if (Ve = Dn(0), Ma(!1), to(), Ve < 0) {
      ai.textContent = "No activities", Wa.textContent = "Open Edit and enable or add a movement", Wa.hidden = !1;
      return;
    }
    si(), oo(), clearInterval(Lt), Lt = setInterval(Ut, 1e3);
  }
  const Zr = o("videoStage"), Eo = o("videoSound"), Ns = 0, li = 1, Hl = 2;
  let Ps = 0, an = null, no = null, Bt = null, Do = null, di = 0, Kr = !1, Cn = null, $r = null;
  function Xr() {
    var t;
    return (t = window.YT) != null && t.Player ? Promise.resolve(window.YT) : an || (an = new Promise((i, s) => {
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
        clearInterval(f), an = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const D = document.createElement("script");
        D.src = "https://www.youtube.com/iframe_api", D.async = !0, D.onerror = () => {
          clearInterval(f), clearTimeout(M), an = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(D);
      }
    }), an);
  }
  function Jr() {
    return no || (no = Xr().then((t) => new Promise((i) => {
      const s = document.createElement("div");
      o("videoFrame").appendChild(s), Bt = new t.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => i(Bt), onStateChange: (u) => Fs(u.data), onError: (u) => Os(u.data) }
      });
    })), no.catch(() => {
      no = null;
    }), no);
  }
  function Is(t) {
    !(t != null && t.videoId) || t.videoError || Jr().then((i) => {
      Cn || Do === t.videoId || (Do = t.videoId, di = Number(t.start) || 0, Kr = !1, i.mute(), i.loadVideoById({ videoId: t.videoId, startSeconds: di }));
    }).catch(() => {
    });
  }
  function Hs() {
    const t = Dn(Ve + 1);
    t >= 0 && Be[t].kind === "video" && Is(Be[t]);
  }
  function Fs(t) {
    if (!Cn) {
      t === li && !Kr && (Kr = !0, Bt.pauseVideo(), Bt.seekTo(di, !0));
      return;
    }
    Zr.classList.toggle("playing", t === li), Be[Ve] === Cn && performance.now() > Ps && (t === li && vn ? Ma(!1) : t === Hl && !vn && Ma(!0)), t === li && ui(Cn.videoId, Bt.getDuration()) && fn(), t === Ns && Ro();
  }
  function Os(t) {
    const i = Cn;
    if (!i) {
      Do = null;
      return;
    }
    t === 101 || t === 150 ? (Ws(i.videoId), It("That video can’t play outside YouTube, so it was skipped")) : It("The video couldn’t play, so it was skipped"), Ro();
  }
  function qs(t) {
    if (o("app").classList.add("videoStep"), Eo.hidden = !0, Cn = t, clearTimeout($r), !t.videoId) {
      It("This video step has no link yet, so it was skipped"), setTimeout(() => Ro(), 0);
      return;
    }
    Jr().then((i) => {
      if (Cn !== t) return;
      Ps = performance.now() + 1500;
      const s = Number(t.start) || 0;
      Do !== t.videoId ? (Do = t.videoId, di = s, i.loadVideoById({ videoId: t.videoId, startSeconds: s })) : (i.seekTo(s, !0), i.playVideo()), i.unMute(), vn && i.pauseVideo(), $r = setTimeout(() => {
        Cn !== t || vn || (i.getPlayerState() !== li ? (i.mute(), i.playVideo(), Eo.hidden = !1) : i.isMuted() && (Eo.hidden = !1));
      }, 1600);
    }).catch(() => {
      Cn === t && (It("YouTube didn’t load, so the video was skipped"), Ro());
    });
  }
  function ci() {
    if (!o("app").classList.contains("videoStep")) return;
    const t = a.querySelector(".workGrid"), i = a.querySelector(".sessionControlRow"), s = t.getBoundingClientRect().top, u = (i == null ? void 0 : i.offsetHeight) || 42, f = window.innerHeight - s - 16 - u - 84;
    t.style.setProperty("--theater-h", Math.max(240, Math.round(f)) + "px");
  }
  window.addEventListener("resize", ci);
  function pr() {
    clearTimeout($r);
    const t = Cn;
    if (Cn = null, o("app").classList.remove("videoStep"), Zr.classList.remove("playing"), Eo.hidden = !0, t && Bt) {
      try {
        Bt.pauseVideo();
      } catch {
      }
      Do = null;
    }
  }
  function Ro() {
    const t = Cn;
    !t || Be[Ve] !== t || (pr(), clearInterval(Lt), io(), Lt = setInterval(Ut, 1e3));
  }
  Eo.addEventListener("click", () => {
    Bt && (Bt.unMute(), Bt.playVideo()), Eo.hidden = !0;
  });
  function Fl(t) {
    var u;
    const i = Number(t.start) || 0;
    if (t.useVideoLength === !1) return i + (Number(t.duration) || 300);
    const s = Bt && Cn === t && Number((u = Bt.getDuration) == null ? void 0 : u.call(Bt)) || 0;
    return Number(t.end) || s || Number(t.videoDuration) || i + (Number(t.duration) || 300);
  }
  function Qr(t, i) {
    const s = Ye[ht];
    [St, Qe, xn, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((u) => (Array.isArray(u) ? u : []).forEach((f) => {
      f && f.kind === "video" && f.videoId === t && i(f);
    }));
  }
  function ui(t, i) {
    i = Math.round(Number(i) || 0);
    let s = !1;
    return t && i > 0 && Qr(t, (u) => {
      u.videoDuration !== i && (u.videoDuration = i, s = !0);
    }), s;
  }
  function Ws(t) {
    Qr(t, (i) => {
      i.videoError = "embed";
    }), fn();
  }
  function ao(t) {
    const i = t.videoId;
    if (!i) return;
    const s = () => {
      nn.classList.contains("open") ? he || A() : (A(), fn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + i)).then((u) => u.ok ? u.json() : Promise.reject(u.status)).then((u) => {
      t.videoId === i && (t.videoTitle = u.title || "", t.autoName && u.title && (t.name = u.title), s());
    }).catch((u) => {
      t.videoId === i && u === 401 && (t.videoError = "embed", s());
    }), Vs(i).then((u) => {
      ui(i, u) && s();
    }).catch((u) => {
      u === "embed" && t.videoId === i && (t.videoError = "embed", s());
    });
  }
  function Vs(t) {
    return Xr().then((i) => new Promise((s, u) => {
      const f = document.createElement("div");
      f.className = "videoProbe", f.setAttribute("aria-hidden", "true");
      const M = document.createElement("div");
      f.appendChild(M), o("app").appendChild(f);
      let D = null, z = !1;
      const oe = (J, Te) => {
        z || (z = !0, clearTimeout(se), setTimeout(() => {
          try {
            D == null || D.destroy();
          } catch {
          }
          f.remove();
        }, 0), Te ? u(Te) : s(J));
      }, se = setTimeout(() => oe(0), 2e4), ee = () => {
        var Te;
        const J = Number((Te = D == null ? void 0 : D.getDuration) == null ? void 0 : Te.call(D)) || 0;
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
    Dt = !1;
    const t = Be[Ve];
    o("app").classList.toggle("resting", t.kind === "rest"), t.kind === "video" ? qs(t) : pr(), Jt = t.duration, La = t.duration, ai.textContent = t.name, Wa.textContent = t.group, Wa.hidden = !0, Gr.textContent = Rs(Ve), Vt && _o("step", { name: t.name, group: t.group, kind: t.kind, step: Ve + 1, of: Be.length, round: t.round || 1, rounds: cr(), duration: t.duration }), Mn(), Rt(), Hs(), t.kind === "video" && setTimeout(ci, 0);
  }
  function Bo() {
    var f;
    const t = ((f = Be[Ve]) == null ? void 0 : f.kind) === "video" && !Dt, i = t && Jt >= 60;
    Ni.textContent = i ? Ya(Jt) : Jt, Ni.classList.toggle("long", i), t && (o("videoClock").textContent = Ya(Jt) + " left");
    const s = Jt / La * 100;
    ia.style.width = s + "%";
    const u = Bs();
    if (u && !Dt) {
      const M = 100 - s;
      u.style.setProperty("--segment-progress", M + "%");
    }
  }
  function Ut() {
    var i, s;
    if (vn) return;
    const t = Be[Ve];
    if ((t == null ? void 0 : t.kind) === "video" && !Dt && Cn === t) {
      const u = Number((i = Bt == null ? void 0 : Bt.getCurrentTime) == null ? void 0 : i.call(Bt)) || 0, f = Number(t.start) || 0, M = Fl(t);
      La = Math.max(1, M - f), (u > f || ((s = Bt == null ? void 0 : Bt.getPlayerState) == null ? void 0 : s.call(Bt)) === li) && (Jt = Math.max(0, Math.ceil(M - u))), Bo(), u > f && u >= M - 0.25 && Ro();
      return;
    }
    Jt--, Bo(), Jt <= 0 && (t.rest > 0 ? zs(t.rest) : io());
  }
  function zs(t) {
    var s;
    Dt = !0, o("app").classList.add("resting");
    const i = Bs();
    i && i.style.setProperty("--segment-progress", "100%"), clearInterval(Lt), Jt = t, La = t, Vt && _o("rest", { duration: t }), ai.textContent = "Rest", Wa.textContent = (s = Be[Ve]) != null && s.roundBreakAfter ? "Round " + (Be[Ve].round + 1) + " next" : "Recovery", Mn(), Bo(), Lt = setInterval(() => {
      vn || (Jt--, Bo(), Jt <= 0 && (clearInterval(Lt), io(), Lt = setInterval(Ut, 1e3)));
    }, 1e3);
  }
  function io() {
    Dt = !1;
    const t = Dn(Ve + 1);
    if (t >= 0)
      Ve = t, oo();
    else {
      clearInterval(Lt), pr(), Ma(!1), o("app").classList.remove("resting"), ai.textContent = "Complete", Wa.textContent = "Move finished", Wa.hidden = !1, Ni.textContent = "✓";
      {
        const i = cr();
        Gr.textContent = i > 1 ? i + " rounds done" : Be.filter((s) => !s.roundBreak).length + " steps done";
      }
      Yr(!0);
      {
        const i = qi(7).reduce((s, u) => s + u.minutes, 0);
        Wa.textContent = "Move finished · " + i + " min in the last 7 days";
      }
      ia.style.width = "100%", Mn();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    Ol(), Ma(!1);
  });
  function Ol() {
    clearInterval(Lt);
    const t = Be[Ve];
    if (Dt) {
      Dt = !1, o("app").classList.remove("resting");
      const s = Dn(Ve + 1);
      s >= 0 ? (Ve = s, oo(), Lt = setInterval(Ut, 1e3)) : io();
      return;
    }
    if (t && t.rest > 0) {
      zs(t.rest);
      return;
    }
    const i = Dn(Ve + 1);
    i >= 0 ? (Ve = i, oo(), Lt = setInterval(Ut, 1e3)) : io();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(Lt), Ma(!1), Dt) {
      const t = Be[Ve];
      Jt = t.rest, La = t.rest, ai.textContent = "Rest", Wa.textContent = "Recovery", o("app").classList.add("resting"), Mn(), Bo();
    } else
      oo();
    Lt = setInterval(Dt ? () => {
      vn || (Jt--, Bo(), Jt <= 0 && (clearInterval(Lt), io(), Lt = setInterval(Ut, 1e3)));
    } : Ut, 1e3);
  });
  function Ii(t, i, s, u) {
    let f = 0, M = null, D = !1;
    function z() {
      M && cancelAnimationFrame(M), M = null, f = 0, D = !1, i.style.width = "0%", t.classList.remove("holding");
    }
    function oe(J) {
      if (!D) return;
      f || (f = J);
      const Te = Math.min(1, (J - f) / s);
      if (i.style.width = Te * 100 + "%", Te >= 1) {
        D = !1, M && cancelAnimationFrame(M), M = null, i.style.width = "100%", setTimeout(() => i.style.width = "0%", 90), u();
        return;
      }
      M = requestAnimationFrame(oe);
    }
    function se(J) {
      var Te;
      if (!(J && J.button !== void 0 && J.button !== 0)) {
        J == null || J.preventDefault(), z(), D = !0, t.classList.add("holding");
        try {
          (Te = t.setPointerCapture) == null || Te.call(t, J.pointerId);
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
  const ql = o("endWorkout");
  Ii(ql, o("holdEndFill"), 1500, ur);
  const $e = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    $e.classList.add("open"), $e.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    $e.classList.remove("open"), $e.setAttribute("aria-hidden", "true");
  });
  function js() {
    const t = ht, i = a.querySelector('.workoutPanel[data-workout="' + t + '"]');
    i && i.remove(), delete Ye[t], lt.order = lt.order.filter((u) => u !== t);
    let s = a.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const u = "custom-" + Date.now();
      Ye[u] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, lt.order.push(u), s = Uo(u, Ye[u]);
    }
    $e.classList.remove("open"), $e.setAttribute("aria-hidden", "true"), _i = null, ko(), Nn(s.dataset.workout), fn(), It("Move deleted");
  }
  Ii(o("deleteMoveYes"), o("deleteMoveFill"), 1500, js);
  const No = a.querySelector(".rubberTabs"), ro = o("rubberIndicator");
  function ra(t, i = !0) {
    if (!t || !No || !ro) return;
    const s = No.getBoundingClientRect(), u = t.getBoundingClientRect();
    ro.style.transition = i ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const f = oa();
    ro.style.left = (u.left - s.left) / f + No.scrollLeft + "px", ro.style.width = u.width / f + "px", i && (ro.style.transform = "scaleX(1.08)", setTimeout(() => ro.style.transform = "scaleX(1)", 180));
  }
  a.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => {
    t.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), a.querySelectorAll(".tab").forEach((i) => i.classList.remove("active")), a.querySelectorAll(".settingsPane").forEach((i) => i.classList.remove("active")), t.classList.add("active"), o(t.dataset.pane).classList.add("active"), ra(t, !0);
  })), requestAnimationFrame(() => ra(a.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => ra(a.querySelector(".tab.active"), !1));
  const hr = o("pixelTrailToggle"), es = o("rippleToggle"), Po = o("trailStrength"), so = o("trailLife");
  function Rn(t, i) {
    ot()[t] = i, fn();
  }
  const Hi = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function fr(t) {
    return t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "g:" + String(t.group || "").trim().toLowerCase();
  }
  function mr(t) {
    var i;
    return !!((i = ot().hideMeta) != null && i[fr(t)]);
  }
  function ts() {
    const t = /* @__PURE__ */ new Map(), i = (s, u, f) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const M = fr(s);
      let D = t.get(M);
      D || (D = { key: M, label: M === "rest" ? "Rest" : M === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, t.set(M, D)), D.kinds.add(M === "rest" ? "Rest" : M === "video" ? "Video" : u), D.moves.add(f), D.count++;
    };
    return Object.values(Ye).forEach((s) => {
      const u = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Je)).forEach((f) => i(f, "Warm-up", u)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((f) => i(f, f.presetRole === "warmup" ? "Warm-up" : f.presetRole === "cooldown" ? "Cooldown" : "Movement", u)), (s.cooldown || (s.customSequence ? [] : hn)).forEach((f) => i(f, "Cooldown", u));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, u]) => {
      t.has(s) || t.set(s, { key: s, label: u, kinds: /* @__PURE__ */ new Set([u]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...t.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, u) => Hi.indexOf(s.kind) - Hi.indexOf(u.kind) || s.label.localeCompare(u.label));
  }
  let gr = "all";
  function Io() {
    const t = o("metaSearch").value.trim().toLowerCase();
    return ts().filter((i) => (gr === "all" || i.kind === gr) && (!t || i.label.toLowerCase().includes(t) || i.moves.some((s) => s.toLowerCase().includes(t))));
  }
  function Ho() {
    const t = o("metaTableBody");
    if (!t) return;
    const i = ot().hideMeta || {}, s = Io();
    t.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((f) => {
      const M = !i[f.key], D = f.count ? (f.moves.length > 2 ? f.moves.slice(0, 2).join(", ") + " + " + (f.moves.length - 2) + " more" : f.moves.join(", ")) + " · " + f.count + " step" + (f.count === 1 ? "" : "s") : "Not used yet", z = document.createElement("tr");
      z.className = M ? "" : "off", z.innerHTML = '<td><div class="metaType">' + Ie(f.label) + '</div><div class="metaSub">' + Ie(f.kind + " · " + D) + '</div></td><td class="metaKindCol">' + Ie(f.kind) + '</td><td class="metaUsedCol">' + Ie(D) + '</td><td class="metaSwitchCol"><button class="switch' + (M ? " on" : "") + '" type="button" role="switch" aria-checked="' + M + '" aria-label="Second line for ' + Ie(f.label) + ' on phones"></button></td>', z.querySelector(".switch").addEventListener("click", () => Fi([f.key], M)), t.appendChild(z);
    });
    const u = s.filter((f) => i[f.key]).length;
    o("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (u ? " · " + u + " hidden on phones" : "") : "";
  }
  function Fi(t, i) {
    const s = { ...ot().hideMeta || {} };
    t.forEach((u) => {
      i ? s[u] = !0 : delete s[u];
    }), Rn("hideMeta", s), Ho(), Ne(), Mn();
  }
  o("metaSearch").addEventListener("input", Ho), o("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.addEventListener("click", () => {
    gr = t.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((i) => i.classList.toggle("active", i === t)), Ho();
  })), o("metaHideAll").addEventListener("click", () => Fi(Io().map((t) => t.key), !0)), o("metaShowAll").addEventListener("click", () => Fi(Io().map((t) => t.key), !1));
  const Fo = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...ot().toggles || {} };
  function Oi() {
    a.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", Fo[s.dataset.toggle] !== !1)), a.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, u]) => {
      o(u).hidden = Fo[s] === !1;
    });
    const t = ["steps", "mood", "energyLevel"].some((s) => Fo[s] !== !1);
    a.querySelector(".activityCard").hidden = !t, o("weatherCard").hidden = !0;
    const i = a.querySelector("#homeView .grid");
    i.classList.toggle("noActivity", !t), i.classList.toggle("noWeather", !0);
  }
  a.querySelectorAll("[data-toggle]").forEach((t) => t.addEventListener("click", () => {
    Fo[t.dataset.toggle] = Fo[t.dataset.toggle] === !1, Oi(), Rn("toggles", { ...Fo });
  })), Oi();
  function ns() {
    hr.classList.toggle("on", xa), es.classList.toggle("on", Oa), Po.value = Math.round(To * 100), o("trailStrengthValue").textContent = Po.value + "%", so.value = Lo, o("trailLifeValue").textContent = so.value + " ms";
  }
  ot().trailEnabled !== void 0 && (xa = ot().trailEnabled), ot().rippleEnabled !== void 0 && (Oa = ot().rippleEnabled), ot().trailStrength !== void 0 && (To = ot().trailStrength), ot().trailMaxAge !== void 0 && (Lo = ot().trailMaxAge), ns(), hr.addEventListener("click", () => {
    xa = !xa, hr.classList.toggle("on", xa), xa || (Ri = []), Rn("trailEnabled", xa);
  }), es.addEventListener("click", () => {
    Oa = !Oa, es.classList.toggle("on", Oa), Rn("rippleEnabled", Oa);
  }), Po.addEventListener("input", () => {
    To = Number(Po.value) / 100, o("trailStrengthValue").textContent = Po.value + "%";
  }), Po.addEventListener("change", () => Rn("trailStrength", To)), so.addEventListener("input", () => {
    Lo = Number(so.value), o("trailLifeValue").textContent = so.value + " ms";
  }), so.addEventListener("change", () => Rn("trailMaxAge", Lo)), Si.addEventListener("change", () => Rn("upcomingCount", Aa));
  function as(t) {
    a.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === t));
    const i = t === "light";
    o("app").classList.toggle("light", i), l.setLight(i), Y(a);
  }
  as(ot().theme || "dark"), a.querySelectorAll(".themeBtn").forEach((t) => t.addEventListener("click", () => {
    as(t.dataset.theme), Rn("theme", t.dataset.theme);
  }));
  const qn = { steps: null, weather: null, ...ot().entities || {} };
  let on = null, vr = {};
  function Wl(t) {
    const i = Object.values(t).filter((z) => z.entity_id.startsWith("sensor.") || z.entity_id.startsWith("input_number.")), s = (z) => z.attributes.friendly_name || z.entity_id, u = i.filter((z) => /step/i.test(z.entity_id) || /step/i.test(s(z)) || ["steps", "step"].includes(String(z.attributes.unit_of_measurement || "").toLowerCase())), f = i.filter((z) => !u.includes(z)), M = (z, oe) => s(z).localeCompare(s(oe)), D = (z, oe) => /health_steps/.test(oe.entity_id) - /health_steps/.test(z.entity_id) || M(z, oe);
    return { suggested: u.sort(D), rest: f.sort(M), label: s };
  }
  function Gs(t) {
    const i = o("stepsEntity");
    if (!i || i.matches(":focus")) return;
    const { suggested: s, rest: u, label: f } = Wl(t), M = (oe) => '<option value="' + Ie(oe.entity_id) + '">' + Ie(f(oe)) + "</option>";
    i.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(M).join("") + "</optgroup>" : "") + (u.length ? '<optgroup label="All sensors">' + u.map(M).join("") + "</optgroup>" : ""), i.value = qn.steps || "";
    const D = o("stepsStatus"), z = qn.steps && t[qn.steps];
    D.textContent = z ? "Connected · " + f(z) : D.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    qn.steps = o("stepsEntity").value || null, Rn("entities", { ...qn }), vr = {}, Ys(), on && (Gs(on), br(on));
  });
  function Vl(t, i = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: i }).format(t);
  }
  function Us() {
    const t = qn.steps && (on == null ? void 0 : on[qn.steps]), i = Number(t == null ? void 0 : t.state);
    return Number.isFinite(i) ? i : null;
  }
  function br(t) {
    var u;
    const i = qn.steps, s = i ? Number((u = t[i]) == null ? void 0 : u.state) : NaN;
    o("stepsMeta").textContent = i ? Number.isFinite(s) ? Vl(s) : "—" : "Set up in Settings";
  }
  let os = 0;
  async function Ys() {
    const t = qn.steps;
    if (!t || !l.ws) return;
    os = Date.now();
    const i = /* @__PURE__ */ new Date(), s = new Date(i.getFullYear(), i.getMonth(), i.getDate() - 30);
    try {
      const u = await l.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: i.toISOString(), statistic_ids: [t], period: "day", types: ["max"] }), f = (u == null ? void 0 : u[t]) || [], M = {};
      if (f.forEach((D) => {
        Number.isFinite(D.max) && (M[Ht(new Date(D.start))] = D.max);
      }), !Object.keys(M).length) {
        const D = await l.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: i.toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((D == null ? void 0 : D[t]) || []).forEach((z) => {
          const oe = Number(z.s ?? z.state), se = z.lu ? z.lu * 1e3 : Date.parse(z.last_updated || z.last_changed);
          if (!Number.isFinite(oe) || !se) return;
          const ee = Ht(new Date(se));
          M[ee] = Math.max(M[ee] || 0, oe);
        });
      }
      vr = M, Wn();
    } catch {
    }
  }
  function lo() {
    Wn();
  }
  lo(), setInterval(() => {
    lo(), wa(), Ja();
  }, 10 * 60 * 1e3);
  function qi(t) {
    const i = {}, s = {};
    lt.history.forEach((D) => {
      const z = Ht(new Date(D.start));
      i[z] = (i[z] || 0) + (D.seconds || 0) / 60, s[z] = (s[z] || 0) + 1;
    });
    const u = /* @__PURE__ */ new Date(), f = Ht(u), M = [];
    for (let D = t - 1; D >= 0; D--) {
      const z = new Date(u.getFullYear(), u.getMonth(), u.getDate() - D), oe = Ht(z), se = lt.checkins.filter((J) => J.date === oe), ee = (J) => {
        const Te = se.map((Ue) => Ue[J]).filter(Boolean);
        return Te.length ? Te.reduce((Ue, _e) => Ue + _e, 0) / Te.length : null;
      };
      M.push({
        key: oe,
        date: z,
        minutes: Math.round(i[oe] || 0),
        moves: s[oe] || 0,
        steps: oe === f && Us() != null ? Us() : vr[oe] ?? null,
        mood: ee("mood"),
        energy: ee("energy")
      });
    }
    return M;
  }
  function Zs(t) {
    let i = t.length - 1;
    t[i] && !t[i].minutes && i--;
    let s = 0;
    for (; i >= 0 && t[i].minutes > 0; )
      s++, i--;
    return s;
  }
  function Wn() {
    const t = o("insightCard");
    if (!t) return;
    const i = qi(30), s = Zs(i), u = i.reduce((se, ee) => se + ee.minutes, 0), f = /* @__PURE__ */ new Date(), M = Ht(f), D = Ht(new Date(f.getFullYear(), f.getMonth(), f.getDate() - (f.getDay() + 6) % 7)), z = i.filter((se) => se.key >= D && se.key <= M).reduce((se, ee) => se + ee.minutes, 0), oe = (se, ee, J) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + se + '</div><div><div class="activityRowName">' + Ie(ee) + '</div><div class="activityRowMeta">' + Ie(J) + "</div></div></div>";
    t.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + me("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + oe(me("clock"), "This week", z + " min") + oe(me("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + oe(me("calendar"), "30 days", u + " min") + "</div>";
  }
  const is = {
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
  }, zl = (t) => t === "sunny" ? "clear" : t === "clear-night" ? "night" : t === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(t) ? "rain" : ["snowy", "snowy-rainy"].includes(t) ? "snow" : "cloudy", Oo = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Wi = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let wr = 0;
  const qo = (t, i) => '<path class="' + i + '" d="' + t + '"/>', Vi = (t, i) => ' style="animation-delay:-' + Math.round(t * 137 % i) + 'ms"', Vn = (t, i, s, u) => {
    const f = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + Vi(t, 2400) + ' d="M' + t + " " + (i - s) + "L" + (t + f) + " " + (i - f) + "L" + (t + s) + " " + i + "L" + (t + f) + " " + (i + f) + "L" + t + " " + (i + s) + "L" + (t - f) + " " + (i + f) + "L" + (t - s) + " " + i + "L" + (t - f) + " " + (i - f) + 'Z"/>';
  }, rs = ([t, i, s], u) => '<path class="wxMoonPath" d="' + t + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + i + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Ks = (t, i) => i ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', $s = (t) => (t ? ["29.35", "43.04", "56.74"].map((i, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + i + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + i + ' 60.65)"/></g>') : [19, 26, 33].map((i, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + i + ' 38)"/></g>')).join(""), e = (t) => (t ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([i, s], u) => '<circle class="wxFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + i + '" cy="' + s + '" r="' + (t ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function n(t, i, s, u) {
    return t === "clear" ? i ? rs(s ? Wi.l : Wi.s, u) + (s ? Vn(70, 20, 5.83, 1) + Vn(78.33, 41.67, 3.75, 0.8) + Vn(60, 71.67, 3.33, 0.6) : Vn(42, 12, 3.5, 1) + Vn(47, 25, 2.25, 0.8) + Vn(36, 43, 2, 0.6)) : Ks(u, s) : t === "partly" ? (i ? rs(s ? Wi.lp : Wi.sp, u) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + qo(s ? Oo.lp : Oo.sp, i ? "wxCloudLight" : "wxBright") + (i ? s ? Vn(73.33, 16.67, 4.17, 0.9) : Vn(44, 10, 2.5, 0.9) : "") : t === "cloudy" ? qo(s ? Oo.lc : Oo.s, i ? "wxCloudLight" : "wxBright") + (i ? s ? Vn(15, 15, 3.75, 0.8) + Vn(76.67, 13.33, 2.92, 0.6) : Vn(9, 9, 2.25, 0.8) + Vn(46, 8, 1.75, 0.6) : "") : qo(s ? Oo.lr : Oo.s, "wxCloudLight") + (t === "rain" ? $s(s) : e(s));
  }
  const r = () => {
    var t;
    return ((t = on == null ? void 0 : on["sun.sun"]) == null ? void 0 : t.state) === "below_horizon";
  };
  let d = ot().weatherStyle || "bitmap", p = ot().weatherLayout === "strip" ? "strip" : "tiles", y = ot().weatherMotion !== !1;
  const h = () => y && !qe(), x = /* @__PURE__ */ new Map(), S = 700, R = (t) => {
    const [i, s] = t.split("/");
    return { k: i === "fog" ? "cloudy" : i === "storm" ? "rain" : i, night: s === "night" };
  };
  function F(t, i, s, u = d, f, M) {
    let D = zl(t);
    const z = D === "night" || (M != null ? !!M : !!s && r());
    D === "night" && (D = "clear");
    const oe = i ? 90 : 54, se = Ml(t, z), ee = performance.now();
    let J = f ? x.get(f) : null;
    if (f && !J ? x.set(f, J = { key: se, t0: -1e9 }) : J && J.key !== se && (J.fromKey = J.key, J.from = J.last || null, J.key = se, J.t0 = ee), u !== "smooth") return '<span class="wxIcon pixels' + (i ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + se + '"' + (f ? ' data-wx-slot="' + f + '"' : "") + ' data-wx-style="' + u + '" data-wx-size="' + oe + '"></canvas></span>';
    let Te = "";
    if (J && ee - J.t0 < S && (h() || qe())) {
      const Ue = R(J.fromKey);
      Te = '<span class="wxLayer wxOut ' + Ue.k + (Ue.night ? " night" : "") + '" style="animation-delay:' + Math.round(J.t0 - ee) + 'ms"><svg viewBox="0 0 ' + oe + " " + oe + '">' + n(Ue.k, Ue.night, i, "wxg" + ++wr) + "</svg></span>";
    }
    return '<span class="wxIcon ' + D + (z ? " night" : "") + (i ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + oe + " " + oe + '">' + n(D, z, i, "wxg" + ++wr) + "</svg>" + Te + "</span>";
  }
  function B() {
    const t = o("app"), i = getComputedStyle(t), s = (z) => i.getPropertyValue(z).trim(), u = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([z, oe]) => {
      s(oe) && (u[z] = s(oe));
    });
    const f = s("--color-text-primary") || "#f1f1f1", M = s("--color-bg-card") || "#222222", D = t.classList.contains("light");
    return { colors: u, ink: D ? f : M, paper: D ? M : f };
  }
  function Y(t, i = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const u = B(), f = h(), M = qe();
    s.forEach((D) => {
      var J;
      const z = D.dataset.wx, oe = D.dataset.wxSlot ? x.get(D.dataset.wxSlot) : null;
      let se = yd(z, u.colors);
      if (oe && oe.key === z) {
        const Te = (i - oe.t0) / S;
        Te < 1 && (f || M) && (se = _u(oe.from || yd(oe.fromKey, u.colors), se, Math.max(0, Te), u.colors, M)), oe.last = se;
      }
      const ee = jc(se, { size: Number(D.dataset.wxSize) || 54, px: 2, oneBit: D.dataset.wxStyle === "onebit", colors: u.colors, ink: u.ink, paper: u.paper, clock: i, idle: f });
      D.width !== ee.w && (D.width = ee.w), D.height !== ee.h && (D.height = ee.h), (J = D.getContext("2d")) == null || J.putImageData(new ImageData(ee.data, ee.w, ee.h), 0, 0);
    });
  }
  let xe = null, Re = -1;
  function le(t) {
    if (xe = null, !g) return;
    const i = h(), s = Math.floor(t / 100), u = [...x.values()].some((oe) => t - oe.t0 < S), f = [...Ft.values()].some((oe) => t - oe.t0 < oe.dur), M = we.home.classList.contains("active"), D = sa.classList.contains("open"), z = i && d === "smooth" && (D || M && p === "strip");
    !document.hidden && (u || f || z || i && s !== Re) && (Re = s, M && (Y(o("weatherCard"), t), ss(o("weatherCard"), t)), D && (Y(sa, t), ss(sa, t))), (i || u || f) && (xe = requestAnimationFrame(le));
  }
  function de() {
    o("app").classList.toggle("wxMotion", h()), !xe && g && (xe = requestAnimationFrame(le));
  }
  let H = [];
  const ge = 36e5, je = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function et() {
    const t = /* @__PURE__ */ new Date(), i = (M, D) => new Date(t.getFullYear(), t.getMonth(), t.getDate() + M, D), s = [], u = [], f = [...Array(6)].map((M, D) => {
      const z = i(D, 6), oe = i(D, 18), se = i(D + 1, 6), ee = H.find((Te) => Ht(new Date(Te.datetime)) === Ht(z)), J = (Te, Ue, _e) => {
        const Ce = s.filter((ut) => ut.t >= +Te && ut.t < +Ue);
        if (Ce.length) {
          const ut = {};
          return Ce.forEach((Ee) => {
            ut[Ee.c] = (ut[Ee.c] || 0) + (je.has(Ee.c) ? 2 : 1);
          }), Object.entries(ut).sort((Ee, pt) => pt[1] - Ee[1])[0][0];
        }
        const ye = u.find((ut) => {
          const Ee = +new Date(ut.datetime);
          return Ee >= +Te - 3 * ge && Ee < +Ue && (ut.is_daytime == null || !!ut.is_daytime == !_e);
        });
        if (ye) return ye.condition;
        const ct = (ee == null ? void 0 : ee.condition) || "cloudy";
        return _e && ct === "sunny" ? "clear-night" : ct;
      };
      return { start: +z, end: +se, day: J(z, oe, !1), night: J(oe, se, !0), hi: Number(ee == null ? void 0 : ee.temperature), lo: Number(ee == null ? void 0 : ee.templow) };
    });
    return { days: f, hours: s, start: f[0].start, end: f[5].end };
  }
  const en = (t, i) => {
    const s = t.days.findIndex((f) => i < f.end);
    if (s < 0) return 1;
    const u = t.days[s];
    return Math.max(0, (s + (i - u.start) / (u.end - u.start)) / 6);
  }, zt = (t, i) => {
    const s = Math.max(0, Math.min(0.99999, i)) * 6, u = Math.floor(s), f = t.days[u];
    return f.start + (s - u) * (f.end - f.start);
  };
  function zn(t, i) {
    const s = Math.max(0, t.days.findIndex((oe) => i < oe.end)), u = t.days[s], f = (i - u.start) / (u.end - u.start) >= 0.5;
    let M = f ? u.night : u.day, D = NaN;
    const z = t.hours;
    if (z.length && i >= z[0].t - ge && i <= z[z.length - 1].t + ge) {
      let oe = z.findIndex((J) => J.t > i);
      oe < 0 && (oe = z.length);
      const se = z[Math.max(0, oe - 1)], ee = z[Math.min(z.length - 1, oe)];
      M = se.c || M, D = ee.t > se.t ? se.temp + (ee.temp - se.temp) * Math.max(0, Math.min(1, (i - se.t) / (ee.t - se.t))) : se.temp;
    }
    if (!Number.isFinite(D)) {
      const oe = [];
      if (t.days.forEach((se) => {
        Number.isFinite(se.lo) && oe.push([se.start - ge, se.lo]), Number.isFinite(se.hi) && oe.push([se.start + 9 * ge, se.hi]);
      }), oe.length) {
        D = i <= oe[0][0] ? oe[0][1] : oe[oe.length - 1][1];
        for (let se = 1; se < oe.length; se++) if (i <= oe[se][0] && i > oe[se - 1][0]) {
          const [ee, J] = oe[se - 1], [Te, Ue] = oe[se];
          D = J + (Ue - J) * (1 - Math.cos(Math.PI * (i - ee) / (Te - ee))) / 2;
          break;
        }
      }
    }
    return { cond: f && M === "sunny" ? "clear-night" : M, temp: D, night: f, day: u };
  }
  const Ge = (t) => Ht(new Date(t)) === Ht(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(t)), Ft = /* @__PURE__ */ new Map(), jl = 900, bu = 700;
  let Xs = null;
  const Ca = typeof ResizeObserver == "function" ? new ResizeObserver((t) => t.forEach((i) => {
    ss(i.target.parentElement), i.target.closest("#wxDialog") && Hd();
  })) : null;
  function ss(t, i = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const u = et(), f = u.days.flatMap((J) => [{ cond: J.day, night: !1 }, { cond: J.night, night: !0 }]), M = f.map((J) => J.cond).join(), D = B(), z = h(), oe = qe(), se = Number(Ht(new Date(u.start)).replace(/\D/g, "")) % 9973;
    let ee = !1;
    s.forEach((J) => {
      var ut;
      const Te = J.clientWidth, Ue = J.clientHeight;
      if (!Te || !Ue) return;
      const _e = J.dataset.wxStrip;
      let Ce = Ft.get(_e);
      Ce ? Ce.sig !== M && (Ce.prev = Ce.segs, Ce.sig = M, Ce.segs = f, Ce.t0 = i, Ce.dur = bu) : Ft.set(_e, Ce = { sig: M, segs: f, prev: null, t0: i, dur: jl });
      const ye = z || oe ? Math.min(1, Math.max(0, (i - Ce.t0) / Ce.dur)) : 1;
      ye < 1 && (ee = !0);
      const ct = { width: Te, height: Ue, colors: D.colors, clock: i, ambient: z, seed: se, reveal: oe ? ye : 1 - Math.pow(1 - ye, 3), prev: ye < 1 ? Ce.prev : null, reduce: oe };
      if (d === "smooth") {
        const Ee = Math.min(2, window.devicePixelRatio || 1), pt = Math.round(Te * Ee), Mt = Math.round(Ue * Ee);
        J.width !== pt && (J.width = pt), J.height !== Mt && (J.height = Mt);
        const it = J.getContext("2d");
        if (!it) return;
        it.setTransform(Ee, 0, 0, Ee, 0, 0), ju(it, f, ct);
      } else {
        const Ee = zu(f, { ...ct, px: 2, oneBit: d === "onebit", ink: D.ink, paper: D.paper });
        J.width !== Ee.w && (J.width = Ee.w), J.height !== Ee.h && (J.height = Ee.h), (ut = J.getContext("2d")) == null || ut.putImageData(new ImageData(Ee.data, Ee.w, Ee.h), 0, 0);
      }
    }), ee && de();
  }
  function Rd() {
    const t = o("weatherCard");
    if (!t || t.hidden) return;
    const i = qn.weather, s = i && (on == null ? void 0 : on[i]);
    if (!s) {
      t.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + F("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (i ? "Not available" : "Set up in Settings") + "</div></div></div></div>", Y(t);
      return;
    }
    const u = s.attributes || {}, f = u.temperature_unit || "°", M = (it) => Number.isFinite(Number(it)) ? Math.round(Number(it)) + "°" : "—", D = (u.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", z = is[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), oe = Ht(/* @__PURE__ */ new Date()), se = H.slice(0, 7), ee = se.find((it) => Ht(new Date(it.datetime)) === oe) || null, J = se.filter((it) => Ht(new Date(it.datetime)) >= oe).slice(0, 6), Te = /* @__PURE__ */ new Date(), Ue = Ht(new Date(Te.getFullYear(), Te.getMonth(), Te.getDate() + 1)), _e = ee ? "H " + M(ee.temperature) + "&ensp; L " + M(ee.templow) : "", Ce = (it) => {
      const Xe = Ht(new Date(it.datetime));
      return Xe === oe ? "Today" : Xe === Ue ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(it.datetime));
    }, ye = Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : "—", ct = (it) => {
      const Xe = new Date(it.datetime);
      return Math.round((new Date(Xe.getFullYear(), Xe.getMonth(), Xe.getDate()) - new Date(Te.getFullYear(), Te.getMonth(), Te.getDate())) / 864e5);
    }, ut = (it) => (is[it] || it || "").toLowerCase(), Ee = (it, Xe) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + ct(it) + '" aria-label="' + Ie(Ce(it) + ": " + ut(it.condition) + ", " + M(it.temperature) + " / " + M(it.templow) + ". Open the forecast") + '">' + F(it.condition, !1, !1, d, "day" + Xe) + '<div><div class="activityRowName">' + Ie(Ce(it)) + '</div><div class="activityRowMeta">' + M(it.temperature) + " / " + M(it.templow) + "</div></div></div>", pt = () => '<div class="wxStrip"><div class="wxStripDays">' + et().days.map((Xe, rn) => {
      const Ot = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(Xe.start)) + ": " + ut(Xe.day) + (ut(Xe.day) === ut(Xe.night) ? " all day and night" : ", then " + ut(Xe.night) + " overnight") + (Number.isFinite(Xe.hi) ? ". High " + M(Xe.hi) : "") + (Number.isFinite(Xe.lo) ? ", low " + M(Xe.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + rn + '" aria-label="' + Ie(Ot) + '"><span class="wxDayName">' + Ie(Ge(Xe.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + M(Xe.hi) + '</span><span class="wxLow">' + M(Xe.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    t.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Ie("Now in " + D + ": " + ye + "°, " + ut(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + F(s.state, !0, !0, d, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ie(String(ye)) + '</span><span class="wxUnit">' + Ie(f) + '</span></div><div class="wxPlace">' + Ie(D) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ie(z) + "</div>" + (_e ? '<div class="wxRange">' + _e + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (J.length ? p === "strip" ? pt() : '<div class="activityRows wxDays">' + J.map(Ee).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", Y(t);
    const Mt = t.querySelector("canvas[data-wx-strip]");
    Xs && Xs !== Mt && (Ca == null || Ca.unobserve(Xs)), Xs = Mt, Mt && (Ca == null || Ca.observe(Mt), ss(t)), de(), Id();
  }
  const Bd = o("weatherCard"), Nd = (t) => {
    const i = t.closest("[data-wx-day]");
    if (i) {
      const u = /* @__PURE__ */ new Date();
      Pd(+new Date(u.getFullYear(), u.getMonth(), u.getDate() + Number(i.dataset.wxDay), 12), i);
      return;
    }
    const s = t.closest("[data-wx-open]");
    s && Pd(Date.now(), s);
  };
  Bd.addEventListener("click", (t) => Nd(t.target)), Bd.addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && t.target.matches("[data-wx-day],[data-wx-open]") && (t.preventDefault(), Nd(t.target));
  });
  const sa = o("wxDialog"), pi = o("wxGraph"), ls = o("wxGraphWrap");
  let za = Date.now(), zi = null, Gl = !1, xr = null;
  function Pd(t, i) {
    const s = et();
    zi = i || null, za = Math.max(s.start, Math.min(s.end - ge, t)), Ft.delete("dialog"), x.delete("scrub"), sa.classList.add("open"), sa.setAttribute("aria-hidden", "false"), Id(), Ca == null || Ca.observe(sa.querySelector("canvas[data-wx-strip]")), pi.focus({ preventScroll: !0 }), de();
  }
  function Ul() {
    var t;
    sa.classList.remove("open"), sa.setAttribute("aria-hidden", "true"), Ca == null || Ca.unobserve(sa.querySelector("canvas[data-wx-strip]")), (t = zi == null ? void 0 : zi.focus) == null || t.call(zi, { preventScroll: !0 }), zi = null;
  }
  function Id() {
    if (!sa.classList.contains("open")) return;
    const t = et();
    o("wxGraphDays").innerHTML = t.days.map((i) => "<span>" + Ie(Ge(i.start)) + "</span>").join(""), Hd(t), Js(t), ss(sa);
  }
  function Js(t = et()) {
    const i = zn(t, za), s = on == null ? void 0 : on[qn.weather], u = (s == null ? void 0 : s.attributes) || {}, f = u.temperature_unit || "°", M = Math.abs(za - Date.now()) < ge / 2, D = M && s ? s.state : i.cond, z = M && Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : Number.isFinite(i.temp) ? Math.round(i.temp) : "—", oe = is[D] || (D ? D.charAt(0).toUpperCase() + D.slice(1) : "—"), se = M ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(za / ge) * ge)), ee = i.day, J = (Number.isFinite(ee.hi) ? "H " + Math.round(ee.hi) + "°" : "") + (Number.isFinite(ee.lo) ? "&ensp; L " + Math.round(ee.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + F(D, !0, M, d, "scrub", M ? void 0 : i.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ie(String(z)) + '</span><span class="wxUnit">' + Ie(f) + '</span></div><div class="wxPlace">' + Ie(se) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ie(oe) + "</div>" + (J ? '<div class="wxRange">' + J + "</div>" : "") + "</div>", Y(o("wxDialogNow")), pi.setAttribute("aria-valuenow", String(Math.round((za - t.start) / ge))), pi.setAttribute("aria-valuetext", se + ", " + oe.toLowerCase() + ", " + z + "°"), Yl(t), de();
  }
  function Hd(t = et()) {
    const i = o("wxGraphLine"), s = ls.clientWidth, u = ls.clientHeight;
    if (!s || !u) return;
    const f = [];
    for (let ye = t.start; ye <= t.end; ye += ge) {
      const ct = zn(t, ye).temp;
      Number.isFinite(ct) && f.push([en(t, ye) * s, ct]);
    }
    if (i.setAttribute("viewBox", "0 0 " + s + " " + u), f.length < 2) {
      i.innerHTML = '<g id="wxCursorMark"></g>', xr = null, Yl(t);
      return;
    }
    const M = f.map((ye) => ye[1]), D = Math.min(...M), z = Math.max(...M), oe = Math.max(4, z - D), se = d !== "smooth", ee = (ye) => se ? Math.round(ye / 2) * 2 : Math.round(ye * 10) / 10;
    xr = (ye) => u * 0.84 - (ye - D) / oe * u * 0.62;
    const J = B(), Te = d === "onebit" ? J.paper : "#ffffff", Ue = d === "onebit" ? J.ink : "rgba(0,0,0,.28)", _e = "M" + f.map((ye) => ee(ye[0]) + " " + ee(xr(ye[1]))).join(" L"), Ce = (ye, ct) => {
      const ut = f.find((Ee) => Ee[1] === ye);
      return '<text class="wxLineLabel" x="' + ee(Math.min(s - 14, Math.max(14, ut[0]))) + '" y="' + ee(xr(ye) + (ct ? 18 : -10)) + '" fill="' + Te + '" stroke="' + Ue + '">' + Math.round(ye) + "°</text>";
    };
    i.setAttribute("shape-rendering", se ? "crispEdges" : "auto"), i.innerHTML = '<path d="' + _e + '" fill="none" stroke="' + Ue + '" stroke-width="' + (se ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + _e + '" fill="none" stroke="' + Te + '" stroke-width="2" stroke-linejoin="round"/>' + Ce(z, !1) + Ce(D, !0) + '<g id="wxCursorMark"></g>', Yl(t);
  }
  function Yl(t = et()) {
    const i = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!i) return;
    const s = ls.clientWidth, u = ls.clientHeight, f = d !== "smooth", M = (Te) => f ? Math.round(Te / 2) * 2 : Te, D = M(en(t, za) * s), z = zn(t, za).temp, oe = B(), se = d === "onebit" ? oe.paper : "#ffffff", ee = d === "onebit" ? oe.ink : "rgba(0,0,0,.28)", J = xr && Number.isFinite(z) ? M(xr(z)) : null;
    i.innerHTML = '<rect x="' + (D - 2) + '" y="0" width="4" height="' + u + '" fill="' + ee + '"/><rect x="' + (D - 1) + '" y="0" width="2" height="' + u + '" fill="' + se + '"/>' + (J == null ? "" : f ? '<rect x="' + (D - 5) + '" y="' + (J - 5) + '" width="10" height="10" fill="' + se + '" stroke="' + ee + '" stroke-width="2"/>' : '<circle cx="' + D + '" cy="' + J + '" r="6" fill="' + se + '" stroke="' + ee + '" stroke-width="2"/>');
  }
  const Fd = (t) => {
    const i = ls.getBoundingClientRect();
    i.width && (za = zt(et(), (t - i.left) / i.width), Js());
  };
  pi.addEventListener("pointerdown", (t) => {
    if (t.button === 0) {
      Gl = !0;
      try {
        pi.setPointerCapture(t.pointerId);
      } catch {
      }
      Fd(t.clientX);
    }
  }), pi.addEventListener("pointermove", (t) => {
    Gl && Fd(t.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((t) => pi.addEventListener(t, () => {
    Gl = !1;
  })), pi.addEventListener("keydown", (t) => {
    const i = et(), s = { ArrowLeft: -ge, ArrowRight: ge, ArrowDown: -ge, ArrowUp: ge, PageUp: -24 * ge, PageDown: 24 * ge }[t.key];
    s ? (t.preventDefault(), za = Math.max(i.start, Math.min(i.end - ge, Math.round(za / ge) * ge + s)), Js(i)) : (t.key === "Home" || t.key === "End") && (t.preventDefault(), za = t.key === "Home" ? i.start : i.end - ge, Js(i));
  }), o("wxDialogClose").addEventListener("click", Ul), sa.addEventListener("click", (t) => {
    t.target === sa && Ul();
  }), sa.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Ul());
  }), Rd(), (Kd = (Yd = window.matchMedia) == null ? void 0 : (Zd = Yd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || Kd.call(Zd, "change", () => {
    de(), Y(a);
  }), de();
  const Od = o("tvNav");
  l.fullscreenSupported || (Od.hidden = !0), Od.addEventListener("click", () => l.toggleFullscreen()), a.addEventListener("keydown", (t) => {
    !we.workout.classList.contains("active") || Ei.classList.contains("active") || t.target.closest("input,select,textarea,.holdEnd") || (t.key === "MediaPlayPause" || t.key === " " && !t.target.closest("button") ? (t.preventDefault(), Ur.click()) : t.key === "MediaTrackNext" ? (t.preventDefault(), o("skipExercise").click()) : t.key === "MediaTrackPrevious" && (t.preventDefault(), o("restartSegment").click()));
  }), a.querySelectorAll("[data-rounds-step]").forEach((t) => t.addEventListener("click", () => {
    const i = Math.max(1, Math.min(10, (Number(at.value) || 1) + Number(t.dataset.roundsStep)));
    String(i) !== at.value && (at.value = i, at.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [E, C, N, at].forEach((t) => t.addEventListener("input", () => {
    const i = Ye[ht];
    i && (i.total = Number(E.value), i.work = Number(C.value), i.rest = Number(N.value)), A();
  })), Se.addEventListener("click", ur), Oe.addEventListener("click", () => k("settings")), o("settingsBack").addEventListener("click", ur), Ur.addEventListener("click", () => Ma(!vn)), Nn(ht), ir(), wa(), Wn(), o("healthHelpOpen").addEventListener("click", () => a.querySelector(".tab[data-pane=helpPane]").click()), Ii(o("resetStats"), o("resetStatsFill"), 1500, () => {
    lt.history = [], lt.checkins = [], Na = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    fn(), lo(), wa(), ir(), Wn(), Ja(), It("Stats reset");
  });
  const Zl = o("morningTime"), Kl = o("eveningTime"), $l = o("checkinAutoOpen");
  Zl.value = Ra().morning, Kl.value = Ra().evening, $l.classList.toggle("on", ot().checkinAutoOpen !== !1), [["morningTime", Zl], ["eveningTime", Kl]].forEach(([t, i]) => i.addEventListener("change", () => {
    i.value && (Rn(t, i.value), Ja());
  })), $l.addEventListener("click", () => {
    const t = ot().checkinAutoOpen === !1;
    $l.classList.toggle("on", t), Rn("checkinAutoOpen", t);
  }), setTimeout(Hr, 800);
  const qd = o("checkinNotify"), Qs = o("checkinNotifyTarget"), Wd = o("checkinNotifyStatus"), wu = Wd.textContent;
  function Vd() {
    const t = l.notifyServices(), i = t.filter((f) => f.startsWith("mobile_app_")), s = i.length ? i : t, u = (f) => f.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Qs.innerHTML = s.map((f) => '<option value="' + Ie(f) + '">' + Ie(u(f)) + "</option>").join(""), !ot().notifyTarget && s[0] && (ot().notifyTarget = s[0]), Qs.value = ot().notifyTarget || "";
  }
  function el() {
    const t = !!ot().notifyOn;
    qd.classList.toggle("on", t), o("checkinNotifyTargetRow").hidden = !t;
    const i = Ra();
    Wd.textContent = t ? "Sends at " + i.morning + " and " + i.evening : wu;
  }
  async function Xl() {
    const t = !!ot().notifyOn;
    try {
      return await l.setReminderAutomation(t ? { target: ot().notifyTarget, times: Ra() } : null), !0;
    } catch {
      return It("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  qd.addEventListener("click", async () => {
    const t = !ot().notifyOn;
    if (t && (Vd(), !ot().notifyTarget)) {
      It("Install the Companion app on your phone first");
      return;
    }
    ot().notifyOn = t, el(), await Xl() ? (fn(), It(t ? "Check-in notifications on" : "Check-in notifications off")) : (ot().notifyOn = !t, el());
  }), Qs.addEventListener("change", () => {
    Rn("notifyTarget", Qs.value), ot().notifyOn && Xl();
  }), [Zl, Kl].forEach((t) => t.addEventListener("change", () => {
    el(), ot().notifyOn && Xl();
  })), Vd(), el();
  let Jl = null;
  function xu() {
    Jl || (Jl = setTimeout(() => {
      Jl = null, Wn();
    }, 3e4));
  }
  return {
    updateStates(t) {
      var s, u;
      const i = !on || on[qn.weather] !== t[qn.weather] || ((s = on["sun.sun"]) == null ? void 0 : s.state) !== ((u = t["sun.sun"]) == null ? void 0 : u.state);
      on = t, Gs(t), br(t), i && Rd(), Date.now() - os > 60 * 60 * 1e3 && Ys(), xu();
    },
    applyRemoteData(t) {
      if (t && (Array.isArray(t.history) && (lt.history = t.history, lo()), Array.isArray(t.history) && Wn(), Array.isArray(t.checkins) && (lt.checkins = t.checkins.map(bi), Ja(), ir(), wa(), lo(), Wn()), t.profiles && !nn.classList.contains("open") && !Vt)) {
        const i = fo(t);
        Object.keys(Ye).forEach((s) => delete Ye[s]), Object.assign(Ye, i.profiles), lt.order = i.order, Ye[ht] || (ht = lt.order[0]), $i(), Nn(ht);
      }
    },
    suspend() {
      g = !1;
    },
    resume() {
      g || (g = !0, Ao || (Ao = requestAnimationFrame(Bi)), ti || (ti = requestAnimationFrame(ni)), de(), ra(a.querySelector(".tab.active"), !1));
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
}, cs = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, cn = "made_up_", ji = (a) => {
  var l;
  return (l = String(a).split(".")[1]) == null ? void 0 : l.startsWith(cn);
}, ol = (a) => a.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function _d(a) {
  const l = a.getHours() + a.getMinutes() / 60, o = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * o * o;
}
function Ku(a) {
  const l = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  let o = 0;
  for (let c = +l; c < +a; c += 10 * 60 * 1e3) o += _d(new Date(c)) / 6;
  return o;
}
function ec(a = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let o = 0; o <= 96; o++) {
    const c = +a - (96 - o) * 15 * 60 * 1e3;
    l.push([c, _d(new Date(c))]);
  }
  return l;
}
function $u({ onChange: a }) {
  const l = {}, o = {}, c = (U, W, X, G) => {
    l[U] = { entity_id: U, state: X, attributes: G, last_changed: new Date(Date.now() - 18e6).toISOString() }, o[U] = W;
  }, m = (U, W, X) => {
    const G = l[U], Z = W ?? G.state;
    l[U] = { ...G, state: Z, attributes: { ...G.attributes, ...X }, last_changed: Z === G.state ? G.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, g = (U, W, X, G) => c("binary_sensor." + cn + (U ? U + "_" : "") + ol(W), U, G ? "on" : "off", { friendly_name: W, device_class: X });
  Object.entries(Zu).forEach(([U, W]) => {
    if (W.temperature != null && c("sensor." + cn + U + "_temperature", U, String(W.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), W.humidity != null && c("sensor." + cn + U + "_humidity", U, String(W.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), W.vacuum && c("vacuum." + cn + "robot", U, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), W.climate && c("climate." + cn + U, U, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: W.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), W.cover) {
      const [X, G, Z, Q] = W.cover;
      c("cover." + cn + U + "_" + ol(X), U, Z ? "open" : "closed", { friendly_name: X, device_class: G, current_position: Z, ...Q != null ? { current_tilt_position: Q } : {} });
    }
    if (W.humidifier && c("humidifier." + cn + U, U, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: W.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), W.solar && (c("sensor." + cn + U + "_solar_power", U, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + cn + U + "_solar_today", U, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), W.valve && c("valve." + cn + U + "_" + ol(W.valve), U, "closed", { friendly_name: W.valve, device_class: "water" }), W.door && g(U, W.door, "door", W.doorOpen), W.window && g(U, W.window, "window", !1), W.motion && g(U, W.motion, "motion", !1), W.plant) {
      const [X, G, Z, Q, T] = W.plant, j = cn + ol(X), ve = (w, we, Se, Oe, k) => c("sensor." + j + "_" + w, U, String(Se), { friendly_name: we, device_class: k, state_class: "measurement", unit_of_measurement: Oe, plant_low: Se < cs[w][0], plant_high: Se > cs[w][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[w] });
      ve("moisture", "Moisture", G, "%", "moisture"), ve("light", "Light", Z, "lx", "illuminance"), ve("temperature", "Temperature", Q, "°C", "temperature"), ve("fertility", "Fertility", T, "µS/cm", "conductivity");
      const Le = Object.entries({ moisture: G, light: Z, temperature: Q, fertility: T }).filter(([w, we]) => we < cs[w][0] || we > cs[w][1]).map(([w, we]) => w + (we < cs[w][0] ? " low" : " high"));
      c("plant." + j, U, Le.length ? "problem" : "ok", { friendly_name: X, moisture: G, brightness: Z, temperature: Q, conductivity: T, problem: Le.join(", ") || "none" });
    }
  }), c("alarm_control_panel." + cn + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), g(null, "Front door", "door", !1), g(null, "Smoke alarm", "smoke", !1), c("sensor." + cn + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const v = {}, L = {};
  let b = null;
  function I() {
    const U = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((W) => {
      W.endsWith("_solar_power") && (l[W] = { ...l[W], state: _d(U).toFixed(2) }), W.endsWith("_solar_today") && (l[W] = { ...l[W], state: Ku(U).toFixed(1) });
    });
  }
  I();
  let re = 0;
  function ne() {
    let U = !1;
    const W = ++re % 10 === 0, X = (Q, T, j) => {
      m(Q, T, j), U = !0;
    };
    Object.entries(v).forEach(([Q, T]) => {
      const j = l[Q].attributes.current_position, ve = j < T ? Math.min(T, j + 10) : Math.max(T, j - 10);
      ve === T && delete v[Q], X(Q, ve === T ? ve === 0 ? "closed" : "open" : T > j ? "opening" : "closing", { current_position: ve });
    }), Object.entries(L).forEach(([Q, T]) => {
      const j = l[Q].attributes.current_tilt_position, ve = j < T ? Math.min(T, j + 25) : Math.max(T, j - 25);
      ve === T && delete L[Q], X(Q, null, { current_tilt_position: ve });
    }), Object.keys(l).filter((Q) => Q.startsWith("climate.")).forEach((Q) => {
      const T = l[Q], j = T.attributes, ve = j.current_temperature, Le = (T.state === "heat" || T.state === "auto") && ve < j.temperature - 0.05, w = (T.state === "cool" || T.state === "auto") && ve > j.temperature + 0.05, we = T.state === "off" ? "off" : Le ? "heating" : w ? "cooling" : "idle", Se = W ? Math.round((ve + (Le ? 0.1 : w ? -0.1 : 0)) * 10) / 10 : ve;
      (Se !== ve || we !== j.hvac_action) && X(Q, null, { current_temperature: Se, hvac_action: we });
    }), Object.keys(l).filter((Q) => Q.startsWith("humidifier.")).forEach((Q) => {
      const T = l[Q], j = T.attributes, ve = j.current_humidity, Le = T.state === "on" && ve < j.humidity, w = Le && W ? ve + 1 : ve, we = T.state !== "on" ? "off" : Le ? "humidifying" : "idle";
      if (w !== ve || we !== j.action) {
        X(Q, null, { current_humidity: w, action: we });
        const Se = "sensor." + cn + o[Q] + "_humidity";
        l[Se] && X(Se, String(w));
      }
    });
    const G = l["vacuum." + cn + "robot"], Z = G.attributes;
    G.state === "cleaning" && W && X(G.entity_id, null, { battery_level: Math.max(5, Z.battery_level - 1) }), G.state === "returning" && X(G.entity_id, "docked", {}), G.state === "docked" && Z.battery_level < 100 && X(G.entity_id, null, { battery_level: Math.min(100, Z.battery_level + 2) }), b && Date.now() - b.at > 5e3 && (X("alarm_control_panel." + cn + "house", "armed_" + b.mode, {}), b = null), U && a();
  }
  const O = setInterval(ne, 1e3), q = setInterval(() => {
    I(), a();
  }, 60 * 1e3);
  function $(U, W, X) {
    const G = X == null ? void 0 : X.entity_id;
    if (!l[G]) return !1;
    const Z = l[G], Q = Z.attributes, T = (j, ve) => m(G, j, ve);
    if (U === "climate" && (W === "set_temperature" && T(null, { temperature: Math.max(Q.min_temp, Math.min(Q.max_temp, X.temperature)) }), W === "set_hvac_mode" && T(X.hvac_mode, X.hvac_mode === "off" ? { hvac_action: "off" } : {}), W === "toggle" && T(Z.state === "off" ? "heat" : "off", Z.state === "off" ? {} : { hvac_action: "off" })), U === "cover") {
      const j = W === "open_cover" ? 100 : W === "close_cover" ? 0 : W === "set_cover_position" ? X.position : W === "toggle" ? Q.current_position > 0 ? 0 : 100 : null;
      W === "stop_cover" && (delete v[G], delete L[G], T(Q.current_position === 0 ? "closed" : "open")), j != null && j !== Q.current_position && (v[G] = j, T(j > Q.current_position ? "opening" : "closing"));
      const ve = W === "open_cover_tilt" ? 100 : W === "close_cover_tilt" ? 0 : W === "set_cover_tilt_position" ? X.tilt_position : null;
      W === "stop_cover_tilt" && delete L[G], ve != null && Q.current_tilt_position != null && ve !== Q.current_tilt_position && (L[G] = ve);
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
      W === "alarm_disarm" && (b = null, T("disarmed", { changed_by: "Matt" }));
      const j = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[W];
      j && (b = { mode: j, at: Date.now() }, T("arming", { changed_by: "Matt" }));
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
    const j = { ...W, ...l }, ve = (C) => {
      var N, ue;
      return (ue = (N = j[C]) == null ? void 0 : N.attributes) == null ? void 0 : ue.device_class;
    }, Le = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], w = Object.keys(W).filter((C) => C.startsWith("vacuum.") && Q(C)), we = Object.values((U == null ? void 0 : U.areas) || {}).filter((C) => !Yu.has(C.area_id)).map((C) => {
      const N = C.area_id, ue = T[N] || [], V = (Je) => ue.filter((St) => St.startsWith(Je + ".")), ae = (Je) => V("sensor").filter((St) => ve(St) === Je), ce = (Je) => Object.keys(l).filter((St) => o[St] === N && Je(St)), fe = (Je, St) => Je.length ? Je : ce(St), We = fe(ae("temperature"), (Je) => Je.endsWith(N + "_temperature")), at = fe(ae("humidity"), (Je) => Je.endsWith(N + "_humidity")), wt = ae("power").filter((Je) => /^(W|kW)$/.test(j[Je].attributes.unit_of_measurement || "")), pn = V("binary_sensor").filter((Je) => ve(Je) === "moisture"), Tn = fe(V("plant"), (Je) => Je.startsWith("plant.")).map((Je) => ({ id: Je, readings: ce((St) => St.startsWith("sensor." + Je.split(".")[1] + "_")) })), qt = [...V("binary_sensor").filter((Je) => Le.includes(ve(Je))), ...ce((Je) => Je.startsWith("binary_sensor."))];
      return {
        id: N,
        name: C.name,
        icon: C.icon,
        readings: [...We.slice(0, 1), ...at.slice(0, 1), ...pn],
        power: wt.length ? wt.reduce((Je, St) => Je + Number(j[St].state) * (j[St].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: V("switch"),
        lights: V("light"),
        actions: [...V("light"), ...fe(V("climate"), (Je) => Je.startsWith("climate.")), ...fe(V("cover"), (Je) => Je.startsWith("cover.")), ...fe(V("humidifier"), (Je) => Je.startsWith("humidifier.")), ...fe(V("valve"), (Je) => Je.startsWith("valve.")), ...V("media_player"), ...V("vacuum"), ...w.length ? [] : ce((Je) => Je.startsWith("vacuum."))],
        solar: ce((Je) => Je.includes("_solar_")),
        plants: Tn,
        openings: qt,
        alerts: [...pn, ...qt].filter((Je) => {
          var St;
          return ((St = j[Je]) == null ? void 0 : St.state) === "on";
        })
      };
    }).filter((C) => C.readings.length || C.plugs.length || C.actions.length || C.solar.length || C.plants.length), Se = Object.keys(W).find((C) => /^sensor\..*(p1_meter_power|grid_power)$/.test(C) && W[C].state !== "unavailable") || null, Oe = (C) => Object.keys(W).filter((N) => N.startsWith(C + ".") && Q(N)), k = Oe("alarm_control_panel"), E = w.length ? w : ["vacuum." + cn + "robot"];
    return {
      states: j,
      rooms: we,
      grid: Se,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (C) => l[C] ? o[C] : Z(C),
      vacuums: E,
      homeVacuums: E.filter((C) => !we.some((N) => N.actions.includes(C))),
      security: {
        alarms: k.length ? k : ["alarm_control_panel." + cn + "house"],
        locks: Oe("lock"),
        openings: [...Object.keys(l).filter((C) => C.startsWith("binary_sensor.")), "sensor." + cn + "doorbell"]
      }
    };
  }
  return { model: te, call: $, stop() {
    clearInterval(O), clearInterval(q);
  } };
}
const zo = (a) => a < 0 ? 0 : a > 1 ? 1 : a, kd = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, Xu = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), tc = {}, Ta = (a, l, o) => {
  const c = a + l + o;
  return tc[c] || (tc[c] = Xu(kd(a).map((m, g) => m + (kd(l)[g] - m) * o)));
}, nc = {}, vl = (a) => nc[a] || (nc[a] = kd(a));
function Ju(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [Ta(l.clear[0], l.cloudy[0], 0.12), Ta(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Ta(l.rain[0], "#000000", 0.22), Ta(l.rain[1], "#000000", 0.22)], l;
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
], Vo = (a, l) => (Qu[(l & 7) * 8 + (a & 7)] + 0.5) / 64, Zc = 1, Kc = 2, $c = 3, Xc = 4, Sr = 5, xl = 6, Md = 7, Jc = 8, ac = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), ep = (a, l, o) => {
  let c = !1;
  for (let m = 0, g = a.length - 1; m < a.length; g = m++) {
    const v = a[m], L = a[g];
    v[1] > o != L[1] > o && l < (L[0] - v[0]) * (o - v[1]) / (L[1] - v[1]) + v[0] && (c = !c);
  }
  return c;
};
function tp(a, l, o, c, { oneBit: m, ink: g, paper: v, snowInk: L }) {
  const b = new Uint8ClampedArray(o * c * 4), I = vl(g), re = vl(v);
  for (let ne = 0; ne < c; ne++) for (let O = 0; O < o; O++) {
    const q = ne * o + O, $ = l[q];
    if (a[q] == null) continue;
    let te = vl(a[q]);
    if (m) {
      let U;
      $ === Xc || $ === Jc ? U = !0 : $ === Sr ? U = L : $ === Md || $ === xl ? U = !1 : U = Math.round((0.2126 * te[0] + 0.7152 * te[1] + 0.0722 * te[2]) / 255 * 4) / 4 <= Vo(O, ne), ($ === Zc || $ === Kc || $ === $c || $ === xl) && (O > 0 && l[q - 1] !== $ || O < o - 1 && l[q + 1] !== $ || ne > 0 && l[q - o] !== $ || ne < c - 1 && l[q + o] !== $) && (U = !0), te = U ? I : re;
    }
    b[q * 4] = te[0], b[q * 4 + 1] = te[1], b[q * 4 + 2] = te[2], b[q * 4 + 3] = 255;
  }
  return { w: o, h: c, data: b };
}
const np = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, ap = (a) => Ml(a, !1).split("/")[0], td = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, op = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", ip = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", rp = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", sp = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", lp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], dp = [".##", "##.", ".#.", "#.."];
function Qc(a, { width: l, height: o, colors: c, wave: m = 0.38, soft: g = 6, glow: v = 0.6, columns: L = 6 }) {
  const b = { ...Qn, dawn: "#e5a77e", ...c }, I = Ju(b), re = l, ne = o, O = re / L, q = O / 2, $ = Math.PI * 2, te = a.length ? a : [{ cond: "cloudy", night: !1 }], U = [...Array(L * 2)].map((Z, Q) => {
    const T = te[Math.min(Q, te.length - 1)], j = ap(T.cond), ve = Q % 2 === 1;
    return { cond: T.cond, k: j, night: ve, sky: I[j][ve ? 1 : 0], cover: np[j] };
  }), W = (Z) => ne * (0.5 - m * Math.cos($ * (Z / O - 0.25)));
  return { C: b, S: U, W: re, H: ne, cw: O, sw: q, TAU: $, yb: W, side: (Z, Q, T) => {
    const j = (Z ? W(Q) - T : T - W(Q)) / Math.max(3, g * 1.4) + 0.5;
    return j <= 0 ? 0 : j >= 1 ? 1 : j;
  }, glowAt: (Z) => {
    const Q = ((Z / O - 0.25) % 1 + 1) % 1, T = Math.max(0, Math.min(L - 1, Math.round(Z / O - 0.25))), j = Math.max(0, Math.min(L - 1, Math.round(Z / O - 0.75))), ve = 1 - (U[2 * T].cover + U[2 * j + 1].cover) / 2, Le = Math.sin(Math.PI * Math.min(1, Math.max(0, W(Z) / ne)));
    return { c: Q < 0.5 ? b.dusk : b.dawn, a: v * (0.2 + 0.8 * ve) * Le * Le };
  }, soft: g, tw: O * 0.3, sy: ne / 90 };
}
function eu(a, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: g, side: v, C: L, TAU: b, sy: I } = a, re = l, ne = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((O, q) => {
    const $ = td(c * 977 + q * 131 + 7), te = (q + 0.5) * g, U = O.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[O.k] : 0;
    for (let W = 0; W < U; W++) {
      const X = te + ($() - 0.5) * g * 1.6, G = (6 + $() * 76) * I, Z = $() < 0.35, Q = 1.8 + $() * 1.6, T = v(!0, X, G) * (Z ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(b * re / 2600 + W * 1.7 + q) : 1);
      T >= 0.03 && ne.stars.push({ x: X, y: G, big: Z, size: Q, o: T });
    }
    if (!O.night && (O.k === "clear" || O.k === "partly")) {
      const W = te + ($() - 0.5) * g * 0.3, X = Math.min(15, g * 0.29);
      ne.suns.push({ x: W, y: 32 * I, rad: X, halo: X * 2.8 * (o ? 1 + 0.07 * Math.sin(b * re / 3600 + q) : 1) });
    }
    if (O.night && (O.k === "clear" || O.k === "partly")) {
      const W = Math.min(0.78, g * 0.55 / 34), X = te - 23 * W + ($() - 0.5) * g * 0.2;
      ne.moons.push({ x: X + 23 * W, y: (4 + (o ? 0.8 * Math.sin(b * re / 5200 + q) : 0)) * I + 23 * W, d: 46 * W });
    }
  }), m.forEach((O, q) => {
    const $ = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[O.k];
    if (!$) return;
    const te = td(c * 577 + q * 71 + 3), U = (q + 0.5) * g, W = O.k === "rain" || O.k === "storm" || O.night ? L.cloudNight : L.cloudDay, X = O.night ? 0.82 : O.k === "storm" ? 0.75 : 1;
    for (let G = 0; G < $; G++) {
      const Z = g / 46 * (O.k === "partly" ? 0.85 : 0.75 + te() * 0.55), Q = U + (O.k === "partly" ? g * 0.12 : (te() - 0.5) * g * 1.05), T = (O.k === "partly" ? 40 : 6 + te() * 26) * I, j = o ? 2.5 * Math.sin(b * re / 9e3 + q * 1.3 + G * 2.1) : 0, ve = o ? 0.9 * Math.sin(b * re / 6100 + q + G) : 0;
      ne.clouds.push({ x: Q - 23 * Z + j, y: T - 15.33 * Z + ve, w: 46 * Z, h: 30.66 * Z, fill: W, o: X * ($ > 1 && G === 0 ? 0.85 : 1) });
    }
  }), m.forEach((O, q) => {
    const $ = td(c * 313 + q * 29 + 11), te = (q + 0.5) * g, U = O.cond === "pouring" ? 16 : O.cond === "rainy" || O.cond === "hail" ? 9 : O.cond === "lightning-rainy" ? 12 : O.cond === "snowy-rainy" ? 5 : 0;
    for (let X = 0; X < U; X++) {
      let G = te + ($() - 0.5) * g * 1.05, Z = 44 + $() * 36, Q = 1;
      if (o) {
        const j = ((Z - 44 + re * 0.04) % 36 + 36) % 36;
        G -= 0.21 * (j - (Z - 44)), Z = 44 + j, Q = Math.min(1, j / 6, (36 - j) / 6);
      }
      Z *= I;
      const T = v(O.night, G, Z) * Q;
      T >= 0.05 && ne.drops.push({ x: G, y: Z, o: T });
    }
    const W = O.cond === "snowy" ? 11 : O.cond === "snowy-rainy" ? 6 : 0;
    for (let X = 0; X < W; X++) {
      let G = te + ($() - 0.5) * g * 1.05, Z = 40 + $() * 44, Q = 1;
      if (o) {
        const j = ((Z - 40 + re * 9e-3) % 44 + 44) % 44;
        Z = 40 + j, G += 1.6 * Math.sin(b * re / 2800 + X * 1.9 + q), Q = Math.min(1, j / 6, (44 - j) / 6);
      }
      Z *= I;
      const T = v(O.night, G, Z) * Q;
      T >= 0.05 && ne.flakes.push({ x: G, y: Z, o: T });
    }
    if (O.k === "fog") {
      const X = O.night ? "#c8ccd6" : "#ffffff", G = O.night ? 0.28 : 0.62, Z = o ? 4 * Math.sin(b * re / 8e3 + q) : 0;
      for (let Q = 0; Q < 4; Q++) ne.fogs.push({ x: te - g * 0.75 + Q % 2 * g * 0.18 + (Q % 2 ? Z : -Z), y: (30 + Q * 13) * I, w: g * 1.3, c: X, a: G });
    }
    if (O.k === "storm") {
      const X = (re / 3400 + q * 0.37) % 1;
      ne.bolts.push({ x: te + ($() - 0.5) * g * 0.3 - 5, y: 36 * I, o: o && !(X < 0.05 || X > 0.09 && X < 0.12) ? 0.8 : 1 });
    }
  }), ne;
}
function cp(a, l, o, c, m, g, v, L) {
  const { S: b, C: I, cw: re, yb: ne, glowAt: O, soft: q, tw: $, sy: te } = a, U = new Array(o * c), W = new Uint8Array(o * c), X = new Uint8Array(o * c), G = (k, E, C, N, ue) => {
    C == null || k < 0 || E < 0 || k >= o || E >= c || (N >= 1 || N > Vo(k + 5, E + 3)) && (U[E * o + k] = C, W[E * o + k] = ue);
  }, Z = (k, E, C, N) => {
    for (let ue = Math.max(0, Math.floor(E - C) - 1); ue <= Math.min(c - 1, E + C + 1); ue++) for (let V = Math.max(0, Math.floor(k - C) - 1); V <= Math.min(o - 1, k + C + 1); V++) N(V, ue, V + 0.5 - k, ue + 0.5 - E);
  }, Q = (k, E, C) => {
    for (let ue = 0; ue < k.length - 1; ue++) {
      const V = (ue + E) * re;
      if (C < V - $ / 2) return [k[ue], k[ue], 0];
      if (C <= V + $ / 2) return [k[ue], k[ue + 1], (C - V + $ / 2) / $];
    }
    const N = k[k.length - 1];
    return [N, N, 0];
  }, T = b.filter((k) => !k.night).map((k) => k.sky), j = b.filter((k) => k.night).map((k) => k.sky), ve = q / g, Le = 16 * te / g;
  for (let k = 0; k < o; k++) {
    const E = (k + 0.5) * m, C = ne(E) / g, N = Q(T, 0.75, E), ue = Q(j, 1.25, E), V = O(E);
    for (let ae = 0; ae < c; ae++) {
      const ce = Vo(k, ae), fe = ae + 0.5 - C, We = (ve > 0.01 ? zo(0.5 + fe / ve) : fe > 0 ? 1 : 0) > ce;
      let at = We ? N[2] > ce ? N[1] : N[0] : ue[2] > ce ? ue[1] : ue[0];
      (We ? zo(((ae + 0.5) / c - 0.45) / 0.55) * 0.7 : zo(1 - (ae + 0.5) / (c * 0.55)) * 0.7) > Vo(k + 2, ae + 5) && (at = We ? Ta(at, "#ffffff", 0.18) : Ta(at, "#000000", 0.25)), We && fe >= 0 && fe < Le && V.a * 1.3 * (1 - fe / Le) > Vo(k + 6, ae + 1) && (at = V.c), U[ae * o + k] = at, X[ae * o + k] = We ? 0 : 1;
    }
  }
  const w = Ta(I.sun, "#ffffff", 0.55), we = Ta(I.moon, "#ffffff", 0.6);
  l.stars.forEach((k) => {
    const E = Math.floor(k.x / m), C = Math.floor(k.y / g);
    if (E < 0 || C < 0 || E >= o || C >= c || !X[C * o + E] || k.o < 0.15) return;
    const N = k.o > 0.45 ? I.star : Ta(I.star, U[C * o + E], 0.5), ue = k.big && k.o > 0.6 ? Math.floor(k.size / m) : 0;
    G(E, C, N, 1, Md);
    for (let V = 1; V <= ue; V++) [[E - V, C], [E + V, C], [E, C - V], [E, C + V]].forEach((ae) => {
      ae[0] >= 0 && ae[1] >= 0 && ae[0] < o && ae[1] < c && X[ae[1] * o + ae[0]] && G(ae[0], ae[1], N, 1, Md);
    });
  }), l.suns.forEach((k) => {
    const E = Math.max(1.5, k.rad / m), C = k.x / m, N = k.y / g, ue = k.halo / m * 0.85;
    if (Z(C, N, ue, (V, ae, ce, fe) => {
      const We = Math.sqrt(ce * ce + fe * fe);
      We > E && We < ue && !X[ae * o + V] && G(V, ae, w, 0.3 * (1 - (We - E) / (ue - E)), 0);
    }), L) {
      const V = Math.floor(v / 500) % 2, ae = Math.max(1, E * 0.3);
      for (let ce = 0; ce < 8; ce++) if (ce % 2 === V) for (let fe = E + 1.2; fe < E + 1.2 + ae; fe += 0.7) G(Math.floor(C + Math.cos(ce * Math.PI / 4) * fe), Math.floor(N + Math.sin(ce * Math.PI / 4) * fe), I.sun, 1, Jc);
    }
    Z(C, N, E, (V, ae, ce, fe) => {
      ce * ce + fe * fe <= E * E && G(V, ae, zo(((fe / E + 1) / 2 - 0.6) / 0.4) > Vo(V, ae) ? I.sunEdge : I.sun, 1, Zc);
    });
  }), l.moons.forEach((k) => {
    const E = Math.max(1.5, k.d * 0.37 / m), C = k.x / m, N = k.y / g, ue = C + 0.547 * E, V = N - 0.503 * E, ae = 0.82 * E;
    Z(C, N, E, (ce, fe, We, at) => {
      if (We * We + at * at > E * E) return;
      const wt = ce + 0.5 - ue, pn = fe + 0.5 - V;
      wt * wt + pn * pn > ae * ae && G(ce, fe, zo((at + E) / (2 * E) * 1.1 - 0.1) > Vo(ce, fe) ? I.moon : we, 1, Kc);
    });
  }), l.clouds.forEach((k) => {
    const E = Math.max(3, k.w / m), C = E * 0.6665, N = k.x / m, ue = k.y / g, V = Ta(k.fill, "#000000", 0.16);
    for (let ae = Math.max(0, Math.floor(ue) - 1); ae <= Math.min(c - 1, ue + C + 1); ae++) for (let ce = Math.max(0, Math.floor(N) - 1); ce <= Math.min(o - 1, N + E + 1); ce++) {
      const fe = (ce + 0.5 - N) / E, We = (ae + 0.5 - ue) / E;
      ac(fe, We) && G(ce, ae, !ac(fe, We + 1 / E) || zo((We - 0.42) / 0.25) * 0.8 > Vo(ce, ae) ? V : k.fill, k.o, $c);
    }
  }), l.fogs.forEach((k) => {
    const E = Math.floor(k.y / g), C = Math.max(E, Math.floor((k.y + 6 * te) / g) - 1), N = Math.floor(k.x / m), ue = Math.floor((k.x + k.w) / m);
    for (let V = E; V <= C; V++) for (let ae = N; ae <= ue; ae++) {
      const ce = (ae - N) / Math.max(1, ue - N);
      G(ae, V, k.c, k.a * (ce < 0.25 ? ce / 0.25 : ce > 0.75 ? (1 - ce) / 0.25 : 1), 0);
    }
  });
  const Se = Math.max(2, Math.round(9 / g));
  l.drops.forEach((k) => {
    const E = k.x / m, C = Math.floor(k.y / g);
    for (let N = 0; N < Se; N++) G(Math.floor(E - 0.208 * N * g / m), C + N, I.rain, k.o, Xc);
  });
  const Oe = Math.max(0, Math.round(4.4 / m / 2.6));
  return l.flakes.forEach((k) => {
    const E = Math.floor(k.x / m), C = Math.floor(k.y / g);
    G(E, C, I.snow, k.o, Sr);
    for (let N = 1; N <= Oe; N++)
      G(E - N, C, I.snow, k.o, Sr), G(E + N, C, I.snow, k.o, Sr), G(E, C - N, I.snow, k.o, Sr), G(E, C + N, I.snow, k.o, Sr);
  }), l.bolts.forEach((k) => {
    if (m <= 3.5)
      for (let E = Math.floor(k.y / g); E <= (k.y + 24) / g; E++) for (let C = Math.floor(k.x / m); C <= (k.x + 11) / m; C++)
        ep(lp, (C + 0.5) * m - k.x, (E + 0.5) * g - k.y) && G(C, E, I.sun, 1, xl);
    else {
      const E = Math.round(k.x / m), C = Math.round(k.y / g);
      dp.forEach((N, ue) => N.split("").forEach((V, ae) => {
        V === "#" && G(E + ae, C + ue, I.sun, 1, xl);
      }));
    }
  }), { col: U, ids: W };
}
function up(a, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), m = Math.max(6, Math.round(l.height / o)), g = l.width / c, v = l.height / m, L = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, b = (q) => {
    const $ = Qc(q, l);
    return cp($, eu($, { clock: L, ambient: l.ambient, seed: l.seed }), c, m, g, v, L, l.ambient);
  }, I = b(a), re = l.reveal == null ? 1 : zo(l.reveal);
  let ne = I.col, O = I.ids;
  if (re < 1) {
    const q = l.prev ? b(l.prev) : null, $ = re * (c + 12);
    ne = new Array(c * m), O = new Uint8Array(c * m);
    for (let te = 0; te < c * m; te++) {
      const U = te % c, W = te / c | 0;
      (l.reduce ? re : zo(($ - U) / 12)) > Vo(U, W) ? (ne[te] = I.col[te], O[te] = I.ids[te]) : q ? (ne[te] = q.col[te], O[te] = q.ids[te]) : (ne[te] = null, O[te] = 255);
    }
  }
  return tp(ne, O, c, m, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function pp(a, l, o) {
  const c = o.width, m = o.height, g = o.reveal == null ? 1 : zo(o.reveal), v = (O, q) => {
    const $ = Qc(q, o);
    hp(O, $, eu($, o));
  };
  if (a.clearRect(0, 0, c, m), g >= 1) {
    v(a, l);
    return;
  }
  if (o.prev && v(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = g, v(a, l), a.restore();
    return;
  }
  const L = a.canvas, b = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (b.width !== L.width || b.height !== L.height) && (b.width = L.width, b.height = L.height);
  const I = b.getContext("2d");
  I.setTransform(a.getTransform()), I.clearRect(0, 0, c, m), v(I, l);
  const re = g * (c + 64) - 64, ne = I.createLinearGradient(re, 0, re + 64, 0);
  ne.addColorStop(0, "rgba(0,0,0,1)"), ne.addColorStop(1, "rgba(0,0,0,0)"), I.globalCompositeOperation = "destination-in", I.fillStyle = ne, I.fillRect(0, 0, c, m), I.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(b, 0, 0), a.restore();
}
function hp(a, l, o) {
  const { W: c, H: m, S: g, C: v, cw: L, yb: b, glowAt: I, soft: re, tw: ne, sy: O } = l, q = (w, we) => {
    const Se = vl(w);
    return "rgba(" + Se[0] + "," + Se[1] + "," + Se[2] + "," + Math.max(0, Math.min(1, we)).toFixed(3) + ")";
  }, $ = (w, we) => {
    const Se = a.createLinearGradient(0, 0, c, 0);
    Se.addColorStop(0, w[0]);
    for (let Oe = 0; Oe < w.length - 1; Oe++) {
      const k = (Oe + we) * L, E = (k - ne / 2) / c, C = (k + ne / 2) / c;
      E > 0 && E < 1 && Se.addColorStop(E, w[Oe]), C > 0 && C < 1 && Se.addColorStop(C, w[Oe + 1]);
    }
    return Se.addColorStop(1, w[w.length - 1]), Se;
  }, te = Math.max(24, Math.ceil(c / 4)), U = (w, we) => {
    a.beginPath();
    for (let Se = 0; Se <= te; Se++) {
      const Oe = c * Se / te, k = w == null ? 0 : b(Oe) + w;
      Se ? a.lineTo(Oe, k) : a.moveTo(Oe, k);
    }
    for (let Se = te; Se >= 0; Se--) {
      const Oe = c * Se / te;
      a.lineTo(Oe, b(Oe) + we);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = $(g.filter((w) => !w.night).map((w) => w.sky), 0.75), a.fillRect(0, 0, c, m);
  const W = a.createLinearGradient(0, 0, c, 0);
  for (let w = 0; w <= 64; w++) {
    const we = I(c * w / 64);
    W.addColorStop(w / 64, q(we.c, Math.min(1, we.a)));
  }
  a.fillStyle = W;
  for (let w = 0; w < 8; w++)
    a.globalAlpha = 1 - w / 8, U(w * 2 * O, (w + 1) * 2 * O);
  a.fillStyle = $(g.filter((w) => w.night).map((w) => w.sky), 1.25);
  const X = Math.max(0.5, re), G = 6;
  a.globalAlpha = 1, U(null, -X);
  for (let w = 0; w < G; w++)
    a.globalAlpha = 1 - (w + 0.5) / G, U(-X + 2 * X * w / G, -X + 2 * X * (w + 1) / G);
  a.globalAlpha = 1;
  const Z = new Path2D(rp), Q = new Path2D(ip), T = new Path2D(op), j = new Path2D(sp);
  a.fillStyle = v.star, o.stars.forEach((w) => {
    a.globalAlpha = w.o, w.big ? (a.save(), a.translate(w.x, w.y), a.scale(w.size, w.size), a.fill(Z), a.restore()) : (a.beginPath(), a.arc(w.x, w.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const ve = Ta(v.sun, "#ffffff", 0.55);
  o.suns.forEach((w) => {
    const we = a.createRadialGradient(w.x, w.y, 0, w.x, w.y, w.halo);
    we.addColorStop(0, q(ve, 0.42)), we.addColorStop(0.7, q(ve, 0)), a.fillStyle = we, a.beginPath(), a.arc(w.x, w.y, w.halo, 0, Math.PI * 2), a.fill();
    const Se = a.createLinearGradient(0, w.y - w.rad, 0, w.y + w.rad);
    Se.addColorStop(0.6, v.sun), Se.addColorStop(1, v.sunEdge), a.fillStyle = Se, a.beginPath(), a.arc(w.x, w.y, w.rad, 0, Math.PI * 2), a.fill();
  });
  const Le = Ta(v.moon, "#ffffff", 0.6);
  o.moons.forEach((w) => {
    a.save(), a.translate(w.x - w.d / 2, w.y - w.d / 2), a.scale(w.d / 46, w.d / 46);
    const we = a.createLinearGradient(0, 6, 0, 40);
    we.addColorStop(0, Le), we.addColorStop(1, v.moon), a.fillStyle = we, a.fill(Q), a.restore();
  }), o.clouds.forEach((w) => {
    a.save(), a.globalAlpha = w.o, a.translate(w.x, w.y), a.scale(w.w / 46, w.h / 30.66), a.translate(-4, -9.67), a.fillStyle = w.fill, a.fill(T), a.restore();
  }), o.fogs.forEach((w) => {
    const we = a.createLinearGradient(w.x, 0, w.x + w.w, 0);
    we.addColorStop(0, q(w.c, 0)), we.addColorStop(0.25, q(w.c, w.a)), we.addColorStop(0.75, q(w.c, w.a)), we.addColorStop(1, q(w.c, 0)), a.fillStyle = we, a.fillRect(w.x, w.y, w.w, 6 * O);
  }), a.fillStyle = v.rain, o.drops.forEach((w) => {
    a.save(), a.globalAlpha = w.o, a.translate(w.x, w.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = v.snow, o.flakes.forEach((w) => {
    a.globalAlpha = w.o, a.beginPath(), a.arc(w.x, w.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = v.sun, o.bolts.forEach((w) => {
    a.save(), a.globalAlpha = w.o, a.translate(w.x, w.y), a.fill(j), a.restore();
  }), a.restore();
}
const fp = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", Mr = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, il = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, nd = (a, l) => '<path class="' + l + '" d="' + a + '"/>', mp = (a, l) => ' style="animation-delay:-' + Math.round(a * 137 % l) + 'ms"', Sa = (a, l, o, c) => {
  const m = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + mp(a, 2400) + ' d="M' + a + " " + (l - o) + "L" + (a + m) + " " + (l - m) + "L" + (a + o) + " " + l + "L" + (a + m) + " " + (l + m) + "L" + a + " " + (l + o) + "L" + (a - m) + " " + (l + m) + "L" + (a - o) + " " + l + "L" + (a - m) + " " + (l - m) + 'Z"/>';
}, oc = ([a, l, o], c) => '<path class="wbMoonPath" d="' + a + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + l + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', gp = (a, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', vp = (a) => (a ? ["29.35", "43.04", "56.74"].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), bp = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, o], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + l + '" cy="' + o + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function wp(a, l, o, c) {
  return a === "clear" ? l ? oc(o ? il.l : il.s, c) + (o ? Sa(70, 20, 5.83, 1) + Sa(78.33, 41.67, 3.75, 0.8) + Sa(60, 71.67, 3.33, 0.6) : Sa(42, 12, 3.5, 1) + Sa(47, 25, 2.25, 0.8) + Sa(36, 43, 2, 0.6)) : gp(c, o) : a === "partly" ? (l ? oc(o ? il.lp : il.sp, c) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + nd(o ? Mr.lp : Mr.sp, l ? "wbCloudLight" : "wbBright") + (l ? o ? Sa(73.33, 16.67, 4.17, 0.9) : Sa(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? nd(o ? Mr.lc : Mr.s, l ? "wbCloudLight" : "wbBright") + (l ? o ? Sa(15, 15, 3.75, 0.8) + Sa(76.67, 13.33, 2.92, 0.6) : Sa(9, 9, 2.25, 0.8) + Sa(46, 8, 1.75, 0.6) : "") : nd(o ? Mr.lr : Mr.s, "wbCloudLight") + (a === "rain" ? vp(o) : bp(o));
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
], rl = (a, l) => (yp[l % 8 * 8 + a % 8] + 0.5) / 64, Ga = (a) => [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)], Bn = (a, l, o) => [Math.round(a[0] + (l[0] - a[0]) * o), Math.round(a[1] + (l[1] - a[1]) * o), Math.round(a[2] + (l[2] - a[2]) * o)], us = (a) => a < 0 ? 0 : a > 1 ? 1 : a, ic = (a, l) => {
  let o = a * 374761393 + l * 668265263 ^ 1540483477;
  return o = Math.imul(o ^ o >>> 13, 1274126177), ((o ^ o >>> 16) >>> 0) / 4294967296;
}, Gi = [255, 255, 255], Zn = Ga("#26221e"), rc = Ga("#0288d1"), kp = Ga("#01579b"), ad = Ga(Qn.cloudDay), od = Ga(Qn.cloudNight), sl = Ga(Qn.dusk), id = Ga(Qn.sunEdge), Mp = Ga(Qn.sun), Cp = 10, sc = 0.3, jo = 56, tu = 21;
function Sp(a) {
  const l = Array.from({ length: tu }, () => new Array(jo).fill(void 0)), o = (v, L, b) => {
    l[L][v] = b;
  }, c = Bn(sl, Zn, 0.35), m = Bn(Zn, Gi, 0.22);
  for (let v = 0; v <= 6; v++) {
    const L = v < 2 ? jo - 2 : jo - 1;
    for (let b = 6 - v; b <= L; b++) o(b, v, v < 2 ? c : v === 6 ? m : Zn);
  }
  const g = [sl, id, od, Ga(Qn.skyRainDay), Bn(sl, Zn, 0.2), Bn(a, Zn, 0.35)];
  [2, 3, 2, 3, 3].forEach((v, L) => {
    const b = 9 + L * 6;
    for (let I = 0; I < v; I++) {
      const re = g[(L * 2 + I * 3) % g.length];
      for (let ne = b; ne < b + 5; ne++)
        o(ne, 7 + I * 2, Bn(re, Zn, 0.12)), o(ne, 8 + I * 2, I === v - 1 ? Bn(re, Gi, 0.3) : re);
      o(b + 5, 7 + I * 2, Zn), o(b + 5, 8 + I * 2, Zn);
    }
  });
  for (let v = 7; v <= 12; v++) o(5, v, Zn);
  o(5, 13, id);
  for (let v = 7; v <= 14; v++) for (let L = 42; L <= 51; L++) o(L, v, L === 51 ? od : ad);
  for (let v = 43; v <= 50; v += 2)
    o(v, 12, Zn), o(v, 9, Bn(Zn, ad, 0.4));
  for (let v = 40; v <= 53; v++) o(v, 14, v === 40 || v === 53 ? od : ad);
  for (let v = 15; v <= 18; v++) for (let L = 46; L <= 49; L++) o(L, v, v === 18 ? Zn : v === 16 ? id : sl);
  for (let v = 15; v <= 19; v++) o(44, v, Zn);
  return o(44, 20, Mp), l;
}
function Tp(a, l, o, c) {
  const m = Math.max(1, Math.round(a)), g = Math.max(1, Math.round(l)), v = new Uint8ClampedArray(m * g * 4), L = Ga(c.skyClearDay), b = Ga(c.skyFogDay), I = Sp(L), re = Math.round(g * 0.55), ne = us(1 - Math.log(o / sc) / Math.log(Cp / sc)), O = Bn(L, b, ne), q = (W) => us((W - 0.1) / 0.9), $ = us((1 - Math.exp(-2 / o) - 0.2) / 0.8), te = Math.round(m / 2 - jo / 2), U = re + 3;
  for (let W = 0; W < g; W++) {
    const X = U - 1 - W, G = W - U;
    for (let Z = 0; Z < m; Z++) {
      const Q = Z - te;
      let T, j;
      const ve = X >= 0 && X < tu && Q >= 0 && Q < jo ? I[X][Q] : void 0;
      if (ve)
        T = ve, j = $;
      else if (X >= 0 && X <= 1 && Q >= 4 - X && Q <= 5 - X)
        T = Bn(Gi, rc, 0.15), j = $;
      else if (W < re) {
        const we = us(((W + 0.5) / re - 0.15) / 0.85) * 3, Se = Math.min(3, Math.floor(we + rl(Z + 2, W + 5)));
        T = Bn(O, Gi, Se * 0.1), j = ne * 0.95;
      } else {
        const we = (W - re + 0.5) / (g - re), Se = Math.min(1.5, 6e-3 / (we * we)), Oe = us(we * 1.4) * 3, k = Math.min(3, Math.floor(Oe + rl(Z + 1, W + 6)));
        T = Bn(rc, kp, k / 3);
        const E = 1 + Math.round(we * 7), C = Math.floor(Z / (E * 3)), N = 0.06 + 0.16 * we, ue = Z % (E * 3) < E;
        ue && ic(C, W) < N ? T = Bn(T, Gi, 0.18 + 0.1 * (1 - we)) : ue && we > 0.5 && ic(C, W - 1) < N && (T = Bn(T, Zn, 0.12)), j = q(1 - Math.exp(-Se / o)), G === 0 && Q >= 3 && Q <= 8 ? (T = Bn(T, Gi, Q < 6 ? 0.8 : 0.45), j = $) : G >= 0 && G <= 2 && Q >= jo && Q < jo + 40 ? ((1 - (Q - jo) / 40) * (G === 1 ? 0.9 : 0.5) > rl(Z, W + 3) && (T = Bn(T, Gi, 0.5)), j = $) : G === 0 && Q >= 6 && Q < jo && (T = Bn(T, Zn, Q % 2 === 0 ? 0.35 : 0.2), j = $);
      }
      const Le = j > rl(Z, W) ? b : T, w = (W * m + Z) * 4;
      v[w] = Le[0], v[w + 1] = Le[1], v[w + 2] = Le[2], v[w + 3] = 255;
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
const Ep = (a, l) => l === "mi" ? a * 1.609344 : l === "m" ? a / 1e3 : l === "ft" ? a * 3048e-7 : l === "yd" ? a * 9144e-7 : a, Dp = (a) => a < 1 ? "very_poor" : a < 4 ? "poor" : a < 10 ? "moderate" : a < 20 ? "good" : a < 40 ? "very_good" : "excellent", po = 6e4, co = 36e5, Ui = 864e5, fs = 1440, Rp = 6, Bp = 10 * po, ll = 3, rd = 20, Np = 3, Pp = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Ip = 30 * po, Hp = 7, Fp = 3, lc = 1, Op = po, qp = 15 * po, Wp = 5, Kn = {
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
}, zp = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], jp = Object.keys(Ze.phases), dl = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, Gp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, nu = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], cl = 100, dc = "µg/m³", Up = "weather_alerts.air_quality_pollen", cc = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Yp = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, Zp = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], Kp = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, $p = { daily: 1, hourly: 2 }, Fe = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Un = (a, l) => a.replace(/\{(\w+)\}/g, (o, c) => l[c] ?? ""), Lr = (a) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + a + '"/></svg>', Xp = () => {
  var a;
  return !!((a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Sn = (a) => a != null && a !== "" && Number.isFinite(Number(a)), uc = /* @__PURE__ */ new Map(), pc = /* @__PURE__ */ new Map(), sd = /* @__PURE__ */ new WeakMap(), Jp = (a) => {
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
  const m = (l == null ? void 0 : l.number_format) === "none", g = { maximumFractionDigits: 2, ...o, ...m ? { useGrouping: !1 } : {} }, v = m ? "en-US" : Jp(l), L = JSON.stringify([v, g]);
  let b = uc.get(L);
  if (!b) {
    try {
      b = new Intl.NumberFormat(v, g);
    } catch {
      b = new Intl.NumberFormat(void 0, g);
    }
    uc.set(L, b);
  }
  return b.format(c);
}
const Ed = (a) => {
  var l;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.language) || (a == null ? void 0 : a.language) || void 0;
};
function Qp(a) {
  if (!a) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (sd.has(a)) return sd.get(a);
  const l = a.time_format, o = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? a.language : void 0).includes("10") : l === "12";
  return sd.set(a, o), o;
}
const au = (a) => {
  var l, o;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.time_zone) === "server" && ((o = a == null ? void 0 : a.config) != null && o.time_zone) ? a.config.time_zone : void 0;
};
function ou(a, l) {
  const o = JSON.stringify([a, l]);
  let c = pc.get(o);
  if (!c) {
    try {
      c = new Intl.DateTimeFormat(a, l);
    } catch {
      c = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    pc.set(o, c);
  }
  return c;
}
const Cr = (a, l) => ou(Ed(l), { hour: "numeric", minute: "2-digit", hourCycle: Qp(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: au(l) }).format(a), hc = (a, l) => ou(Ed(l), { weekday: "short", timeZone: au(l) }).format(a), eh = (a, l) => a.toLocaleDateString(Ed(l), { weekday: "narrow" }), Yn = (a, l) => Sn(l) ? un(Math.round(Number(l)), a.locale) + "°" : "–", Ar = (a) => {
  const l = new Date(a);
  return l.setHours(0, 0, 0, 0), l;
}, ps = (a, l) => a.getFullYear() === l.getFullYear() && a.getMonth() === l.getMonth() && a.getDate() === l.getDate(), la = Math.PI / 180, th = 2440588, nh = 2451545, yl = la * 23.4397, ah = 149598e3, oh = -0.833 * la, ih = 0.133 * la, fc = 5 * po, iu = (a) => a.getTime() / Ui - 0.5 + th - nh, ru = (a, l) => Math.atan2(Math.sin(a) * Math.cos(yl) - Math.tan(l) * Math.sin(yl), Math.cos(a)), su = (a, l) => Math.asin(Math.sin(l) * Math.cos(yl) + Math.cos(l) * Math.sin(yl) * Math.sin(a)), rh = (a, l) => la * (280.16 + 360.9856235 * a) - l, sh = (a, l, o) => Math.asin(Math.sin(l) * Math.sin(o) + Math.cos(l) * Math.cos(o) * Math.cos(a));
function lu(a) {
  const l = la * (357.5291 + 0.98560028 * a), o = la * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), c = l + o + la * 102.9372 + Math.PI;
  return { ra: ru(c, 0), dec: su(c, 0), dist: ah };
}
function du(a) {
  const l = la * (218.316 + 13.176396 * a), o = la * (134.963 + 13.064993 * a), c = la * (93.272 + 13.22935 * a), m = l + la * 6.289 * Math.sin(o), g = la * 5.128 * Math.sin(c);
  return { ra: ru(m, g), dec: su(m, g), dist: 385001 - 20905 * Math.cos(o) };
}
const cu = (a, l, o, c) => {
  const m = iu(l), g = a(m);
  return sh(rh(m, la * -c) - g.ra, la * o, g.dec);
}, Dd = (a, l, o) => cu(lu, a, l, o), lh = (a, l, o) => cu(du, a, l, o);
function uu(a, l, o, c) {
  const m = {};
  let g = o.getTime(), v = a(o) - l;
  for (let L = g + fc; L <= c.getTime(); L += fc) {
    const b = a(new Date(L)) - l;
    if (v < 0 != b < 0) {
      const I = new Date(g + (L - g) * v / (v - b));
      b > 0 ? m.rise ?? (m.rise = I) : m.set ?? (m.set = I);
    }
    g = L, v = b;
  }
  return m;
}
const pu = (a) => {
  const l = Ar(a);
  return [l, new Date(l.getTime() + Ui)];
}, dh = (a, l, o) => uu((c) => Dd(c, l, o), oh, ...pu(a)), ch = (a, l, o) => uu((c) => lh(c, l, o), ih, ...pu(a));
function uh(a) {
  const l = iu(a), o = lu(l), c = du(l), m = Math.acos(Math.sin(o.dec) * Math.sin(c.dec) + Math.cos(o.dec) * Math.cos(c.dec) * Math.cos(o.ra - c.ra)), g = Math.atan2(o.dist * Math.sin(m), c.dist - o.dist * Math.cos(m)), v = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - c.ra), Math.sin(o.dec) * Math.cos(c.dec) - Math.cos(o.dec) * Math.sin(c.dec) * Math.cos(o.ra - c.ra));
  return { fraction: (1 + Math.cos(g)) / 2, phase: 0.5 + 0.5 * g * (v < 0 ? -1 : 1) / Math.PI };
}
const ph = (a) => {
  const l = a * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, kl = (a) => {
  const l = a == null ? void 0 : a.config;
  return l && Sn(l.latitude) && Sn(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function mc(a, l) {
  var I, re, ne;
  const o = kl(a), c = o ? dh(l, o.lat, o.lon) : {}, m = (I = a == null ? void 0 : a.states) == null ? void 0 : I["sun.sun"], g = Ar(l).getTime(), v = (O) => {
    const q = O ? new Date(O) : null;
    return q && Number.isFinite(q.getTime()) && Ar(q).getTime() === g ? q : null;
  }, L = v((re = m == null ? void 0 : m.attributes) == null ? void 0 : re.next_rising), b = v((ne = m == null ? void 0 : m.attributes) == null ? void 0 : ne.next_setting);
  return L && (c.rise = L), b && (c.set = b), c;
}
function hh(a) {
  var c;
  const l = (c = a == null ? void 0 : a.states) == null ? void 0 : c["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const o = kl(a);
  return o ? Dd(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const ms = (a) => !!a && a.state !== "unavailable" && a.state !== "unknown", Cl = (a, l) => {
  var c;
  const o = (c = a.entities) == null ? void 0 : c[l];
  return !o || !o.hidden && !o.entity_category;
}, fa = (a, l, o) => {
  var c, m;
  for (const g of l) {
    const v = (c = a.states) == null ? void 0 : c[g];
    if (!ms(v)) continue;
    const L = (m = v.attributes) == null ? void 0 : m[o];
    if (L != null && L !== "") return { stateObj: v, value: L };
  }
}, fh = (a, l) => l.map((o) => {
  var c;
  return (c = a.states) == null ? void 0 : c[o];
}).find(ms), mh = (a, l, o) => l.map((c) => {
  var m;
  return (m = a.states) == null ? void 0 : m[c];
}).find((c) => {
  var m;
  return ms(c) && (((m = c.attributes) == null ? void 0 : m.supported_features) == null || Number(c.attributes.supported_features) & $p[o]);
});
function Tr(a, l, o) {
  var g, v, L, b;
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
      return m.temperature_unit || ((b = (L = a.config) == null ? void 0 : L.unit_system) == null ? void 0 : b.temperature) || "";
  }
}
function bl(a, l, o, c) {
  try {
    if (typeof a.formatEntityAttributeValueToParts == "function") {
      const [m, ...g] = a.formatEntityAttributeValueToParts(l, o, c).map((v) => v.value);
      return { number: m, unit: g.join("").trim() };
    }
  } catch {
  }
  return { number: un(c, a.locale), unit: Tr(a, l, o) };
}
function gh(a, l, o, c) {
  try {
    if (typeof a.formatEntityAttributeValue == "function") return a.formatEntityAttributeValue(l, o, c);
  } catch {
  }
  const m = bl(a, l, o, c);
  return (m.number + " " + m.unit).trim();
}
function ul(a, l) {
  var c;
  try {
    if (typeof a.formatEntityState == "function") return a.formatEntityState(l);
  } catch {
  }
  const o = (c = l.attributes) == null ? void 0 : c.unit_of_measurement;
  return Vp[l.state] || (o && Sn(l.state) ? un(l.state, a.locale) + " " + o : l.state);
}
function gc(a, l) {
  var o;
  try {
    if (typeof a.formatEntityName == "function") return a.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((o = l.attributes) == null ? void 0 : o.friendly_name) || l.entity_id;
}
const vh = (a) => a < 3 ? "low" : a < 6 ? "moderate" : a < 8 ? "high" : a < 11 ? "very_high" : "extreme", bh = (a) => nu.find(([, l]) => a <= l)[0];
function wh(a, l) {
  if (l === "Beaufort") return Math.round(a);
  const o = l ? Yp[l] : void 0;
  if (o === void 0) return;
  const c = Zp.findIndex((m) => a * o < m);
  return c === -1 ? 12 : c;
}
const vc = (a, l) => {
  const o = l ? Kp[l] : void 0;
  return o === void 0 ? void 0 : a * o;
}, bc = (a) => Object.keys(a.states || {}).find((l) => {
  var o, c;
  return l.startsWith("sensor.") && ((c = (o = a.entities) == null ? void 0 : o[l]) == null ? void 0 : c.platform) === "moon";
}), ld = (a) => Object.values(a.states || {}).filter((l) => {
  var o, c;
  return l.entity_id.startsWith("sensor.") && ((o = l.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = l.attributes) == null ? void 0 : c.state_class) ?? "") && Cl(a, l.entity_id);
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
const hu = (a, l, o) => {
  var m, g, v;
  const c = (g = (m = a.entities) == null ? void 0 : m[o]) == null ? void 0 : g.platform;
  return !!c && !!((v = l[c]) != null && v.includes(Up));
};
function yh(a, l) {
  const o = /* @__PURE__ */ new Map();
  return Object.values(a.states || {}).filter((c) => {
    var m;
    return c.entity_id.startsWith("sensor.") && cc.includes(((m = c.attributes) == null ? void 0 : m.device_class) ?? "") && Cl(a, c.entity_id) && hu(a, l, c.entity_id);
  }).sort((c, m) => c.entity_id.localeCompare(m.entity_id)).forEach((c) => {
    o.has(c.attributes.device_class) || o.set(c.attributes.device_class, c.entity_id);
  }), cc.map((c) => o.get(c)).filter(Boolean);
}
const kh = (a, l) => Object.values(a.states || {}).filter((o) => {
  var c, m;
  return o.entity_id.startsWith("sensor.") && Cl(a, o.entity_id) && hu(a, l, o.entity_id) && (((m = (c = a.entities) == null ? void 0 : c[o.entity_id]) == null ? void 0 : m.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function wc(a, l, o) {
  const c = Math.max(l - a, 1e-6), m = o[o.length - 1], g = o.find((I) => c / I <= 4) ?? m * Math.ceil(c / (4 * m)), v = Math.floor(a / g) * g;
  let L = Math.ceil(l / g) * g;
  L === v && (L = v + g);
  const b = [];
  for (let I = v; I <= L + g / 1e3; I += g) b.push(I);
  return { min: v, max: L, ticks: b };
}
const hs = (a, l, o) => {
  const c = (v) => [1, 3, 5].map((L) => parseInt(v.slice(L, L + 2), 16)), m = c(a), g = c(l);
  return "rgb(" + m.map((v, L) => Math.round(v + (g[L] - v) * o)).join(", ") + ")";
}, Mh = (a, l, o, c) => {
  const m = o * Math.abs(1 - 2 * c), g = c < 0.5 ? 0 : 1;
  return "M " + a + " " + (l - o) + " A " + o + " " + o + " 0 0 0 " + a + " " + (l + o) + " A " + m + " " + o + " 0 0 " + g + " " + a + " " + (l - o) + " Z";
}, Wo = ({ icon: a, name: l, sub: o, visual: c, double: m, backdrop: g, cls: v }) => '<div class="wbCard wbSquare' + (m ? " wbDouble" : "") + (g ? " wbHasBackdrop" : "") + (v ? " " + v : "") + '">' + (g ? '<div class="wbBackdrop" aria-hidden="true">' + g + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Lr(a) + '</div><div class="wbText"><span class="wbName">' + Fe(l) + "</span>" + (o ? '<span class="wbSub">' + Fe(o) + "</span>" : "") + '</div></div><div class="wbVisual">' + c + "</div></div>", pl = (a, l) => '<div class="wbValue"><span class="wbNum">' + Fe(a) + "</span>" + (l ? '<span class="wbUnitV">' + Fe(l) + "</span>" : "") + "</div>";
function Ch(a) {
  const l = a.max - a.min || 1, o = (L) => 100 - (Math.min(a.max, Math.max(a.min, L)) - a.min) / l * 100, c = (L) => L / fs * 100 + "%", m = (L) => L.map((b) => b.t + "," + o(b.v)).join(" "), g = a.kind === "line" ? a.points : [];
  let v = '<div class="wbDayChart"><div class="wbDcSun">' + a.sun.map((L) => '<span class="wbDcSunMark" style="left:' + c(L.t) + '">' + Lr(L.rise ? Kn.sunsetUp : Kn.sunsetDown) + Fe(L.label) + "</span>").join("") + "</div>";
  return v += '<div class="wbDcY">' + a.ticks.map((L) => '<span style="top:' + o(L) + '%">' + Fe(a.format(L)) + "</span>").join("") + "</div>", v += '<div class="wbDcPlot"><svg viewBox="0 0 ' + fs + ' 100" preserveAspectRatio="none">' + a.night.map(([L, b]) => '<rect class="wbDcNight" x="' + L + '" y="0" width="' + (b - L) + '" height="100"></rect>').join("") + a.ticks.map((L) => '<line class="wbDcGrid" x1="0" x2="' + fs + '" y1="' + o(L) + '" y2="' + o(L) + '" vector-effect="non-scaling-stroke"></line>').join("") + a.sun.map((L) => '<line class="wbDcSunLine" x1="' + L.t + '" x2="' + L.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (a.past && a.past.length > 1 ? '<polyline class="wbDcPast" points="' + m(a.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (g.length > 1 ? '<polygon class="wbDcArea" points="' + g[0].t + ",100 " + m(g) + " " + g[g.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + m(g) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (a.now ? '<line class="wbDcNow" x1="' + a.now.t + '" x2="' + a.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (a.kind === "bars" ? a.points.filter((L) => L.v > 0).map((L) => '<i class="wbDcBar" style="left:' + c(L.t + 12) + ";width:" + c(36) + ";height:" + (100 - o(L.v)) + '%"></i>').join("") : "") + (a.now && a.kind === "line" ? '<i class="wbDcDot" style="left:' + c(a.now.t) + ";top:" + o(a.now.v) + '%"></i>' : "") + (a.peak ? '<span class="wbDcPeak" style="left:' + c(a.peak.t) + ";top:" + o(a.peak.v) + '%">' + Fe(a.peak.label) + "</span>" : "") + (a.note ? '<span class="wbDcNote">' + Fe(a.note) + "</span>" : "") + "</div>", v += '<div class="wbDcX">' + a.hours.map((L) => '<span class="' + (L.minor ? "wbMinor" : "") + '" style="left:' + c(L.t) + '">' + Fe(L.label) + "</span>").join("") + "</div></div>", v;
}
function Sh(a, l) {
  const v = a.map((U) => U.value), L = Math.min(...v), b = Math.max(...v), I = b - L || 1, re = (U) => U / (a.length - 1) * 300, ne = (U) => 18 + (1 - (U - L) / I) * 84, O = a.map((U, W) => re(W) + "," + ne(U.value)).join(" "), q = v.indexOf(b), $ = v.indexOf(L), te = (U) => U === 0 ? "start" : U === a.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + O + ' 300,102"></polygon><polyline class="wbLine" points="' + O + '" vector-effect="non-scaling-stroke"></polyline><text x="' + re(q) + '" y="' + (ne(b) - 6) + '" text-anchor="' + te(q) + '">' + Fe(l(b)) + '</text><text x="' + re($) + '" y="' + (ne(L) + 14) + '" text-anchor="' + te($) + '">' + Fe(l(L)) + '</text><text x="0" y="120" text-anchor="start">' + Fe(a[0].label) + '</text><text x="300" y="120" text-anchor="end">' + Fe(a[a.length - 1].label) + "</text></svg>";
}
function Th(a, l) {
  const g = a.map((ne) => ne.value).concat([]), v = Math.min(...g) - 2, L = Math.max(...g) + 1, b = L - v || 1, I = 300 / a.length, re = (ne) => (1 - (ne - v) / b) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + a.map((ne, O) => '<rect class="wbBar' + (ne.now ? " wbNowBar" : "") + '" x="' + (O * I + I * 0.2) + '" y="' + re(ne.value) + '" width="' + I * 0.6 + '" height="' + (104 - re(ne.value)) + '" rx="6"></rect><text x="' + (O * I + I / 2) + '" y="120" text-anchor="middle">' + Fe(ne.label) + "</text>").join("") + "</svg>";
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
], Ah = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], xc = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], _h = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Eh = 0;
function yc(a, { getHass: l, entityId: o, style: c = "bitmap", motion: m = !0, cards: g, onOpen: v } = {}) {
  var Ka, go;
  const L = "wb" + ++Eh + "-", b = document.createElement("div");
  b.className = "wb";
  const I = document.createElement("div");
  I.className = "wbBento", b.appendChild(I), a.replaceChildren(b);
  const re = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality"].filter((_) => !g || g.includes(_)), ne = { current: "wide", hourly: "wide", compared_to_average: "double" }, O = {};
  re.forEach((_) => {
    const A = document.createElement("div");
    A.className = "wbItem", A.dataset.card = _, A.dataset.size = ne[_] || "tile", A.hidden = !0, I.appendChild(A), O[_] = { el: A, html: null };
  });
  let q = !1, $ = null, te = 0, U = -1, W = !1, X = null;
  const G = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", aq: void 0 }, Z = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Q = /* @__PURE__ */ new Date(), T = /* @__PURE__ */ new Date(), j = null;
  const ve = {}, Le = {}, w = (_) => {
    var A;
    return ((A = Le[_]) == null ? void 0 : A.forecast) ?? [];
  }, we = (_, A) => {
    var P;
    return Le[A] ? (P = _.states) == null ? void 0 : P[Le[A].entityId] : void 0;
  };
  function Se(_) {
    const A = ve[_];
    A && (A.unsub.then((P) => {
      typeof P == "function" && P();
    }).catch(() => {
    }), delete ve[_]), Le[_] && delete Le[_];
  }
  function Oe(_, A, P) {
    var pe;
    if (typeof ((pe = _.connection) == null ? void 0 : pe.subscribeMessage) != "function") return;
    const K = { entityId: P };
    try {
      K.unsub = Promise.resolve(_.connection.subscribeMessage((me) => {
        q || ve[A] !== K || (me != null && me.forecast ? Le[A] = { entityId: P, forecast: me.forecast } : delete Le[A], Jt());
      }, { type: "weather/subscribe_forecast", forecast_type: A, entity_id: P }));
    } catch (me) {
      K.unsub = Promise.reject(me);
    }
    K.unsub.catch(() => {
      ve[A] === K && delete ve[A];
    }), ve[A] = K;
  }
  function k(_, A) {
    var P;
    for (const K of ["daily", "hourly"]) {
      const pe = mh(_, A, K);
      ((P = ve[K]) == null ? void 0 : P.entityId) !== (pe == null ? void 0 : pe.entity_id) && (Se(K), pe && Oe(_, K, pe.entity_id));
    }
  }
  const E = (_, A, P, K = !1) => _.callWS({
    type: "history/history_during_period",
    start_time: P.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [A],
    minimal_response: K,
    no_attributes: K,
    significant_changes_only: !1
  });
  async function C(_, A) {
    var he, ke, be;
    const P = fa(_, A, "pressure");
    if (!P) return;
    const K = P.stateObj.entity_id, pe = await E(_, K, new Date(Date.now() - 3 * co)), me = (be = (ke = (he = pe == null ? void 0 : pe[K]) == null ? void 0 : he.find((Pe) => {
      var He;
      return typeof ((He = Pe.a) == null ? void 0 : He.pressure) == "number";
    })) == null ? void 0 : ke.a) == null ? void 0 : be.pressure;
    Z.pressureHistory = typeof me == "number" ? { entityId: K, value: me } : void 0;
  }
  async function N(_, A) {
    var ke;
    const P = fa(_, A, "temperature");
    if (!P) return;
    const K = P.stateObj.entity_id, pe = Ar(/* @__PURE__ */ new Date()), me = await E(_, K, new Date(pe.getTime() - Hp * Ui)), he = /* @__PURE__ */ new Map();
    for (const be of (me == null ? void 0 : me[K]) ?? []) {
      const Pe = (ke = be.a) == null ? void 0 : ke.temperature, He = new Date((be.lc ?? be.lu) * 1e3);
      if (typeof Pe != "number" || He >= pe) continue;
      const Ke = He.toDateString();
      he.set(Ke, Math.max(he.get(Ke) ?? -1 / 0, Pe));
    }
    Z.temperatureHistory = { entityId: K, dailyHighs: [...he.values()], days: [...he.entries()].map(([be, Pe]) => ({ date: new Date(be), high: Pe })) };
  }
  async function ue(_) {
    const A = ld(_);
    if (!A) return;
    const P = await _.callWS({ type: "recorder/statistic_during_period", statistic_id: A, rolling_window: { duration: { hours: 24 } } });
    Z.rain = { entityId: A, change: (P == null ? void 0 : P.change) ?? void 0 };
  }
  function V() {
    const _ = l == null ? void 0 : l();
    if (!_ || q || typeof _.callWS != "function") return;
    const A = We(_);
    Z.lastFetch = Date.now(), [C(_, A), N(_, A), ue(_)].forEach((P) => P.then(() => Jt(), () => {
    }));
  }
  async function ae() {
    const _ = l == null ? void 0 : l();
    if (!_) return;
    const A = fa(_, We(_), "temperature");
    if (!A) return;
    const P = A.stateObj.entity_id, K = Ar(/* @__PURE__ */ new Date());
    try {
      const pe = await E(_, P, K), me = (he) => ((pe == null ? void 0 : pe[P]) ?? []).map((ke) => {
        var be;
        return { time: ke.lu * 1e3, value: (be = ke.a) == null ? void 0 : be[he] };
      }).filter((ke) => typeof ke.value == "number");
      Z.todayHistory = { day: K.toDateString(), fetched: Date.now(), temperature: me("temperature"), humidity: me("humidity") }, Jt();
    } catch {
    }
  }
  async function ce(_) {
    const A = l == null ? void 0 : l();
    if (A)
      try {
        const P = await E(A, _, new Date(Date.now() - 24 * co), !0), K = ((P == null ? void 0 : P[_]) ?? []).filter((me) => Sn(me.s)), pe = Math.max(1, Math.ceil(K.length / 48));
        Z.aqHistory = { entityId: _, points: K.filter((me, he) => he % pe === 0).map((me) => ({ label: Cr(new Date(me.lu * 1e3), A), value: Number(me.s) })) }, Jt();
      } catch {
      }
  }
  function fe(_) {
    Z.categories === void 0 && (Z.categories = null, Promise.resolve().then(() => _.callWS({ type: "integration/descriptions" })).then((A) => {
      Z.categories = xh(A);
    }, () => {
      Z.categories = {};
    }).then(() => Jt()));
  }
  function We(_) {
    var P;
    const A = Object.keys(_.states || {}).filter((K) => K.startsWith("weather.") && Cl(_, K)).sort();
    return o && ((P = _.states) != null && P[o]) ? [o, ...A.filter((K) => K !== o)] : A;
  }
  const at = (_) => Z.categories ? { air: yh(_, Z.categories), pollen: kh(_, Z.categories) } : { air: [], pollen: [] };
  function wt(_, A, P, K) {
    if (c === "smooth") {
      const pe = xp(_, A === 90, P, L + "g-" + K);
      return '<span class="wbWx wbS' + A + " wb" + pe.k[0].toUpperCase() + pe.k.slice(1) + (pe.night ? " wbNight" : "") + '" aria-hidden="true">' + pe.svg + "</span>";
    }
    return '<span class="wbWx wbS' + A + '" aria-hidden="true"><canvas data-wb-wx="' + Fe(Ml(_, P)) + '" data-size="' + A + '"></canvas></span>';
  }
  const pn = () => w("daily").filter((_) => _.templow != null).slice(0, Rp);
  function Tn(_, A) {
    const P = new Date(A.datetime), K = /* @__PURE__ */ new Date();
    return ps(P, K) ? Ze.today : ps(P, new Date(K.getTime() + Ui)) ? Ze.tomorrow : hc(P, _);
  }
  const qt = (_, A, P) => P === 0 ? Tn(_, A) : hc(new Date(A.datetime), _);
  function Je(_, A) {
    var He, Ke, qe, De;
    const P = fh(_, A);
    if (!P) return "";
    const K = pn(), pe = G.openDay !== void 0 ? K[G.openDay] : void 0, me = fa(_, A, "temperature"), he = K[0], ke = he && ps(new Date(he.datetime), /* @__PURE__ */ new Date()), be = ((Ke = (He = _.config) == null ? void 0 : He.unit_system) == null ? void 0 : Ke.temperature) || ((qe = P.attributes) == null ? void 0 : qe.temperature_unit) || "";
    let Pe = '<div class="wbCard wbWeather' + (pe ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (pe ? " inert" : "") + '><div class="wbNow">' + (v ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Fe(Ze.openPage) + '">' : '<div class="wbCurrent">') + wt(P.state, 90, hh(_), "now") + '<div class="wbTempBlock">' + (me && Sn(me.value) ? '<div class="wbTemp"><span class="wbDeg">' + Fe(un(Math.round(Number(me.value)), _.locale)) + '</span><span class="wbUnit">' + Fe(be) + "</span></div>" : "") + '<div class="wbPlace">' + Fe(((De = _.config) == null ? void 0 : De.location_name) ?? "") + "</div></div>" + (v ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Fe(ul(_, P)) + "</div>" + (ke && he.templow != null ? '<div class="wbRange">' + Fe(Un(Ze.range, { high: Yn(_, he.temperature), low: Yn(_, he.templow) })) + "</div>" : "") + "</div></div>";
    return K.length && (Pe += '<div class="wbColumns" role="list">' + K.map((ze, Ne) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Ne + '" data-wb-focus="col-' + Ne + '"><span class="wbDay">' + Fe(qt(_, ze, Ne)) + "</span>" + wt(ze.condition ?? "cloudy", 60, !1, "col" + Ne) + '<span class="wbTemps"><span class="wbHi">' + Fe(Yn(_, ze.temperature)) + '</span><span class="wbLo">' + Fe(Yn(_, ze.templow)) + "</span></span></button>").join("") + "</div>", Pe += '<div class="wbHalves" role="list">' + K.map((ze, Ne) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Ne + '" data-wb-focus="half-' + Ne + '">' + wt(ze.condition ?? "cloudy", 40, !1, "half" + Ne) + '<span class="wbText"><span class="wbName">' + Fe(Tn(_, ze)) + '</span><span class="wbSub">' + Fe(Un(Ze.highLow, { high: Yn(_, ze.temperature), low: Yn(_, ze.templow) })) + "</span></span></button>").join("") + "</div>"), Pe + "</div>" + (pe ? hn(_, A, pe) : "") + "</div>";
  }
  function St(_) {
    const A = _.getTime(), P = Date.now() - co;
    return w("hourly").filter((K) => {
      const pe = new Date(K.datetime).getTime();
      return pe >= A && pe < A + Ui && pe > P;
    });
  }
  function Qe(_) {
    if (!_.length) return ["temperature"];
    const A = ["temperature"];
    return _.some((P) => P.precipitation != null || P.precipitation_probability != null) && A.push("precipitation"), _.some((P) => P.humidity != null) && A.push("humidity"), A;
  }
  function hn(_, A, P) {
    const K = Ar(new Date(P.datetime)), pe = St(K), me = Qe(pe), he = me.includes(G.dayMode) ? G.dayMode : "temperature", ke = (be) => be === "humidity" ? Ze.humidity : Ze.modes[be];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + wt(P.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Fe(Tn(_, P)) + '</span><span class="wbSub">' + Fe(Un(Ze.highLow, { high: Yn(_, P.temperature), low: Yn(_, P.templow) })) + '</span></div><button class="wbBack" title="' + Fe(Ze.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Lr(Kn.back) + "</button></div>" + (me.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + me.map((be) => '<button aria-pressed="' + (be === he) + '" data-wb="day-mode" data-mode="' + be + '" data-wb-focus="day-mode-' + be + '">' + Fe(ke(be)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Ch(xn(_, A, K, pe, he)) + "</div></div>";
  }
  function xn(_, A, P, K, pe) {
    var Hn;
    const me = P.getTime(), he = Date.now(), ke = ps(P, /* @__PURE__ */ new Date()), be = (gt) => (gt - me) / po, Pe = (gt) => Cr(new Date(gt), _), He = (gt) => new Date(gt.datetime).getTime(), Ke = [0, 3, 6, 9, 12, 15, 18, 21].map((gt) => ({ t: gt * 60, label: Pe(me + gt * co), minor: gt % 6 !== 0 })), { rise: qe, set: De } = mc(_, P), ze = [], Ne = [];
    qe && (ze.push({ t: be(qe.getTime()), label: Pe(qe.getTime()), rise: !0 }), Ne.push([0, be(qe.getTime())])), De && (ze.push({ t: be(De.getTime()), label: Pe(De.getTime()), rise: !1 }), Ne.push([be(De.getTime()), fs]));
    const tt = kl(_);
    !qe && !De && tt && Dd(new Date(me + Ui / 2), tt.lat, tt.lon) < 0 && Ne.push([0, fs]);
    const mt = ke ? be(he) : void 0, Pt = { hours: Ke, sun: ze, night: Ne };
    if (!K.length && !ke) return { ...Pt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ze.noHourly };
    if (pe === "precipitation") {
      const gt = K.some((mn) => mn.precipitation_probability != null), yn = K.map((mn) => ({ t: be(He(mn)), v: Number((gt ? mn.precipitation_probability : mn.precipitation) ?? 0) })), na = Tr(_, we(_, "hourly"), "precipitation"), vo = Math.max(0, ...yn.map((mn) => mn.v)), Ea = gt ? 100 : wc(0, Math.max(vo, 1), [0.5, 1, 2, 5, 10]).max, Yo = (mn) => gt ? un(mn, _.locale) + "%" : un(mn, _.locale, { maximumFractionDigits: 1 }) + " " + na, Et = yn.find((mn) => mn.v === vo);
      return {
        ...Pt,
        kind: "bars",
        points: yn,
        min: 0,
        max: Ea,
        ticks: [0, Ea / 2, Ea],
        format: Yo,
        now: mt !== void 0 ? { t: mt, v: 0 } : void 0,
        peak: Et && vo > 0 ? { t: Et.t + 30, v: Et.v, label: Yo(Et.v) } : void 0,
        note: vo > 0 ? void 0 : Ze.noRain
      };
    }
    const Tt = pe === "humidity" ? "humidity" : "temperature", tn = K.filter((gt) => gt[Tt] != null && (!ke || He(gt) >= he)).map((gt) => ({ t: be(He(gt)), v: Number(gt[Tt]) }));
    let Ln, ea = [];
    if (mt !== void 0) {
      const gt = fa(_, A, Tt);
      gt && Sn(gt.value) && (Ln = { t: mt, v: Number(gt.value) }, tn.unshift(Ln)), ea = (((Hn = Z.todayHistory) == null ? void 0 : Hn.day) === P.toDateString() ? Z.todayHistory[Tt] : []).filter((na) => na.time <= he).map((na) => ({ t: Math.max(0, be(na.time)), v: na.value })), Ln && ea.length && ea.push(Ln);
    }
    const In = [...ea, ...tn];
    if (!In.length) return { ...Pt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ze.noHourly };
    const ta = In.map((gt) => gt.v), ga = wc(Math.min(...ta), Math.max(...ta), Tt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    Tt === "humidity" && (ga.min = Math.max(0, ga.min), ga.max = Math.min(100, ga.max), ga.ticks = ga.ticks.filter((gt) => gt >= 0 && gt <= 100));
    const ca = Tt === "humidity" ? (gt) => un(gt, _.locale) + "%" : (gt) => Yn(_, gt), wi = Tt === "temperature" ? In.reduce((gt, yn) => yn.v > gt.v ? yn : gt) : void 0;
    return { ...Pt, kind: "line", points: tn, past: ea, ...ga, format: ca, now: Ln, peak: wi ? { ...wi, label: ca(wi.v) } : void 0 };
  }
  function Yi(_) {
    const A = ["temperature"];
    return _.some((P) => P.precipitation_probability != null || P.precipitation != null) && A.push("precipitation"), _.some((P) => P.wind_speed != null) && A.push("wind"), A;
  }
  function lt() {
    const _ = /* @__PURE__ */ new Date();
    return _.setHours(6, 0, 0, 0), _.getTime() > Date.now() && _.setDate(_.getDate() - 1), _;
  }
  function Ye(_, A) {
    var pe, me;
    const P = w("daily"), K = [];
    for (let he = 0; he < ll; he++) for (const ke of [!1, !0]) {
      const be = _.getTime() + (he * 24 + (ke ? 12 : 0)) * co, Pe = be + 12 * co, He = {};
      A.forEach((qe) => {
        const De = new Date(qe.datetime).getTime();
        qe.condition && De >= be && De < Pe && (He[qe.condition] = (He[qe.condition] ?? 0) + (Pp.has(qe.condition) ? 2 : 1));
      });
      let Ke = (pe = Object.entries(He).sort((qe, De) => De[1] - qe[1])[0]) == null ? void 0 : pe[0];
      if (!Ke) {
        const qe = new Date(be).toDateString();
        Ke = ((me = P.find((De) => new Date(De.datetime).toDateString() === qe)) == null ? void 0 : me.condition) ?? "cloudy";
      }
      K.push({ cond: ke && Ke === "sunny" ? "clear-night" : Ke, night: ke });
    }
    return K;
  }
  function ht(_, A, P) {
    const K = we(_, "hourly"), pe = A.precipitation_probability != null ? un(A.precipitation_probability, _.locale) + "%" : "", me = A.precipitation ? un(A.precipitation, _.locale) + " " + Tr(_, K, "precipitation") : "";
    switch (P) {
      case "precipitation":
        return pe ? [pe, me] : [me || "–", ""];
      case "wind":
        return A.wind_speed != null ? [un(Math.round(A.wind_speed), _.locale), Tr(_, K, "wind_speed")] : ["–", ""];
      default:
        return [Yn(_, A.temperature), (A.precipitation_probability ?? 0) >= 20 ? pe : ""];
    }
  }
  function fo(_) {
    j = null;
    const A = w("hourly"), P = Math.floor(Date.now() / po) * po, K = A.filter((De) => new Date(De.datetime).getTime() > P - co);
    if (!K.length) return "";
    const pe = Yi(K), me = pe.includes(G.hourlyMode) ? G.hourlyMode : "temperature", he = lt(), ke = he.getTime() + ll * 24 * co, be = (P - he.getTime()) / co * rd, Pe = ll * 24 * rd, He = (De) => (De - P) / co * rd, Ke = [{ x: 0, label: Ze.now, entry: K[0] }, ...K.filter((De) => {
      const ze = new Date(De.datetime);
      return He(ze.getTime()) >= 48 && ze.getTime() < ke && ze.getHours() % Np === 0;
    }).map((De) => {
      const ze = new Date(De.datetime);
      return { x: He(ze.getTime()), label: Cr(ze, _), entry: De };
    })], qe = (De, ze, Ne) => '<span class="wbMark' + (ze === 0 ? " wbFirst" : "") + '" style="left:' + De.x + 'px">' + Ne + "</span>";
    return j = { segs: Ye(he, A), seed: he.getDate() }, '<div class="wbCard wbHc wbHourly"><div class="wbHeader"><h2 class="wbTitle">' + Fe(Ze.nextHours) + "</h2></div>" + (pe.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + pe.map((De) => '<button aria-pressed="' + (De === me) + '" data-wb="hourly-mode" data-mode="' + De + '" data-wb-focus="hourly-mode-' + De + '">' + Fe(Ze.modes[De]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll"><div class="wbStrip" style="width:' + (Pe - be) + 'px"><div class="wbRow wbTimes">' + Ke.map((De, ze) => qe(De, ze, Fe(De.label))).join("") + '</div><div class="wbSky"><div class="wbSkyArt" style="left:' + -be + "px;width:" + Pe + 'px"><canvas data-wb-strip' + (c === "smooth" ? "" : ' class="wbPixels"') + '></canvas></div></div><div class="wbRow wbValues">' + Ke.map((De, ze) => {
      if (!De.entry) return "";
      const [Ne, tt] = ht(_, De.entry, me);
      return qe(De, ze, '<span class="wbPrimaryV">' + Fe(Ne) + '</span><span class="wbSecondary">' + Fe(tt) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Zi(_) {
    const A = Q, { rise: P, set: K } = mc(_, A), pe = P && K ? Math.round((K.getTime() - P.getTime()) / po) : 0, me = Math.floor(pe / 60), he = pe % 60, ke = P && K ? (A.getTime() - P.getTime()) / (K.getTime() - P.getTime()) : -1, be = ke >= 0 && ke <= 1, Pe = Math.PI * (1 - Math.min(1, Math.max(0, ke))), He = 100 + 74 * Math.cos(Pe), Ke = 100 - 74 * Math.sin(Pe), qe = be ? Math.sin(Math.PI * ke) : 0, De = be ? hs("#2e0a0d", "#43180a", qe) : "#0e0507", ze = be ? hs("#7a1d12", "#8f400f", qe) : "#1c0709", Ne = hs("#f60c08", "#ff8f00", qe), tt = hs("#fd9b07", "#ffd84a", qe), mt = be ? hs("#fd9b07", "#ffd84a", qe) : "#6b3a2a", Pt = (tn) => tn ? Cr(tn, _) : "–", Tt = P && K ? new Date((P.getTime() + K.getTime()) / 2) : null;
    return Wo({
      icon: Kn.sunny,
      name: Ze.sun,
      sub: pe ? Un(Ze.daylightShort, { hours: me, minutes: he }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + De + ", " + ze + ");--wb-sun-line:" + mt + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + L + 'sun-glow"><stop offset="0" stop-color="' + Ne + '"></stop><stop offset="0.45" stop-color="' + Ne + '"></stop><stop offset="1" stop-color="' + tt + '"></stop></radialGradient><clipPath id="' + L + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (be ? '<circle cx="' + He + '" cy="' + Ke + '" r="14" fill="url(#' + L + 'sun-glow)" clip-path="url(#' + L + 'above-horizon)"></circle>' : "") + (Tt ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Fe(Pt(Tt)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Fe(Pt(P)) + '</text><text class="wbSunTime" x="174" y="117">' + Fe(Pt(K)) + "</text></svg></div>"
    });
  }
  function bi(_, A, P) {
    const K = (he) => L + "moon-" + he, pe = _ > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + K("terminator") + ')" d="' + Mh(61, 61, 57.9, _) + '"' + (A ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", me = (he, ke, be, Pe, He, Ke) => '<filter id="' + K(he) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + ke + '" numOctaves="' + be + '" seed="' + Pe + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((qe) => "<feFunc" + qe + ' type="linear" slope="' + He + '" intercept="' + Ke + '"></feFunc' + qe + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + K("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + K("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + K("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + K("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + K("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + me("mottle", "0.045", 4, 3, 1.8, -0.4) + me("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + K("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + K("fill") + ')"></circle><g' + (P ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + K("soften") + ')">' + Lh.map(([he, ke, be, Pe, He, Ke]) => '<ellipse cx="' + he + '" cy="' + ke + '" rx="' + be + '" ry="' + Pe + '" fill-opacity="' + Ke + '" transform="rotate(' + He + " " + he + " " + ke + ')"></ellipse>').join("") + "</g>" + Ah.map(([he, ke, be]) => '<circle class="wbCrater" cx="' + he + '" cy="' + ke + '" r="' + be + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + K("glow") + ')">' + _h.map(([he, ke]) => '<line x1="54.4" y1="95" x2="' + he + '" y2="' + ke + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + K("glow") + ')">' + xc.map(([he, ke, be]) => '<circle cx="' + he + '" cy="' + ke + '" r="' + be * 2 + '"></circle>').join("") + "</g>" + xc.map(([he, ke, be]) => '<circle class="wbBrightCenter" cx="' + he + '" cy="' + ke + '" r="' + be + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + K("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + K("grain") + ')"></rect>' + pe + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function fn(_) {
    const A = T, P = kl(_), K = (P == null ? void 0 : P.lat) ?? 0, pe = uh(A), me = bc(_), he = me ? _.states[me] : void 0, ke = ms(he) && jp.includes(he.state) ? he.state : ph(pe.phase), { rise: be, set: Pe } = P ? ch(A, P.lat, P.lon) : {}, He = pe.phase > 0.5 != K < 0, Ke = un(Math.round(pe.fraction * 100), _.locale) + "%", qe = be ?? Pe, De = qe ? Cr(qe, _) : void 0;
    return Wo({
      icon: Kn.night,
      name: Ze.moon,
      sub: Ze.phases[ke],
      visual: '<div class="wbMoonBox">' + bi(pe.fraction, He, K < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (De ? Fe(Un(be ? Ze.moonriseAt : Ze.moonsetAt, { time: De })) : "") + "</span><span>" + Fe(Un(Ze.lit, { illumination: Ke })) + "</span></div>"
    });
  }
  function ot(_, A) {
    var ze;
    const P = fa(_, A, "wind_speed");
    if (!P || !Sn(P.value)) return "";
    const K = fa(_, A, "wind_gust_speed"), pe = fa(_, A, "wind_bearing"), me = pe && Sn(pe.value) ? Number(pe.value) : void 0, he = wh(Number(P.value), (ze = P.stateObj.attributes) == null ? void 0 : ze.wind_speed_unit), ke = bl(_, P.stateObj, "wind_speed", P.value), be = me !== void 0 ? Ze.cardinal[zp[((me + 11.25) / 22.5 | 0) % 16]] : void 0, Pe = K ? gh(_, K.stateObj, "wind_gust_speed", K.value) : void 0, He = [be ? Un(Ze.windFrom, { direction: be }) : void 0, he !== void 0 ? he + " " + Ze.beaufort : void 0].filter(Boolean).join(" · ") || Pe, Ke = (Ne, tt) => {
      const mt = (Ne - 90) * Math.PI / 180;
      return [100 + tt * Math.cos(mt), 100 + tt * Math.sin(mt)];
    }, qe = Array.from({ length: 36 }, (Ne, tt) => tt * 10).map((Ne) => {
      const tt = Ne % 90 === 0, [mt, Pt] = Ke(Ne, 97), [Tt, tn] = Ke(Ne, tt ? 83 : 89);
      return '<line class="wbTick' + (tt ? " wbMajor" : "") + '" x1="' + mt + '" y1="' + Pt + '" x2="' + Tt + '" y2="' + tn + '"></line>';
    }).join(""), De = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Ne, tt]) => {
      const [mt, Pt] = Ke(tt, 64);
      return '<text class="wbLetter' + (Ne === "n" ? " wbNorth" : "") + '" x="' + mt + '" y="' + Pt + '">' + Fe(Ze.cardinal[Ne]) + "</text>";
    }).join("");
    return Wo({ icon: Kn.windy, name: Ze.wind, sub: He, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + qe + De + (me !== void 0 ? '<path class="wbMarker" transform="rotate(' + me + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Fe(ke.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Fe(ke.unit) + "</text></svg>" });
  }
  function Nn(_, A) {
    const P = fa(_, A, "uv_index");
    if (!P || !Sn(P.value)) return "";
    const K = Number(P.value), pe = Ze.uvLevel[vh(K)], me = /* @__PURE__ */ new Date();
    me.setHours(23, 59, 59, 999);
    const he = w("hourly").filter((Ne) => Ne.uv_index != null && new Date(Ne.datetime) > /* @__PURE__ */ new Date() && new Date(Ne.datetime) <= me).reduce((Ne, tt) => !Ne || tt.uv_index > Ne.uv ? { uv: tt.uv_index, time: new Date(tt.datetime) } : Ne, void 0), ke = 48, be = 100, Pe = 130, He = (Ne) => -ke + Math.min(Ne, 11) / 11 * 2 * ke, Ke = (Ne, tt) => {
      const mt = Ne * Math.PI / 180;
      return [be + tt * Math.sin(mt), Pe - tt * Math.cos(mt)];
    }, qe = (Ne, tt, mt) => {
      const [Pt, Tt] = Ke(He(Ne), mt), [tn, Ln] = Ke(He(tt), mt);
      return "M " + Pt + " " + Tt + " A " + mt + " " + mt + " 0 0 1 " + tn + " " + Ln;
    }, ze = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, dl.low], [3, 6, dl.moderate], [6, 8, dl.high], [8, 11, dl.very_high]].map(([Ne, tt, mt]) => '<path class="wbVuZone" d="' + qe(Ne, tt, 96) + '" style="stroke:' + mt + '"></path>').join("") + Array.from({ length: 21 }, (Ne, tt) => ({ angle: -ke + tt * (2 * ke / 20), major: tt % 2 === 0 })).map(({ angle: Ne, major: tt }) => {
      const [mt, Pt] = Ke(Ne, 102), [Tt, tn] = Ke(Ne, tt ? 114 : 108);
      return '<line class="wbVuTick' + (tt ? " wbMajor" : "") + '" x1="' + mt + '" y1="' + Pt + '" x2="' + Tt + '" y2="' + tn + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + He(K) + 'deg"><line x1="' + be + '" y1="' + Pe + '" x2="' + be + '" y2="' + (Pe - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + Fe(un(Math.round(K), _.locale)) + "</text></svg>";
    return Wo({
      icon: Kn.sunnyAlert,
      name: Ze.metrics.uv_index,
      sub: he && he.uv > K ? Un(Ze.uvPeak, { level: pe, uv_index: un(Math.round(he.uv), _.locale), time: Cr(he.time, _) }) : pe,
      visual: ze
    });
  }
  function Ki(_) {
    const A = w("daily")[0], P = Z.temperatureHistory;
    if (!A || new Date(A.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Sn(A.temperature) || !P || P.dailyHighs.length < Fp) return "";
    const K = Number(A.temperature), pe = P.dailyHighs.reduce((Tt, tn) => Tt + tn, 0) / P.dailyHighs.length, me = Math.round(K - pe) || 0, he = me > 0 ? "above" : me < 0 ? "below" : "same", ke = [...P.days, { date: /* @__PURE__ */ new Date(), high: K, today: !0 }], be = 220, Pe = 158, He = 22, Ke = 20, qe = ke.map((Tt) => Tt.high).concat(pe), De = Math.min(...qe) - 3, ze = Math.max(...qe) + 1, Ne = (Tt) => He + (1 - (Tt - De) / (ze - De)) * (Pe - He - Ke), tt = be / ke.length, mt = Math.min(18, tt * 0.6), Pt = '<svg class="wbCompareBars" viewBox="0 0 ' + be + " " + Pe + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + be + '" y1="' + Ne(pe) + '" y2="' + Ne(pe) + '"></line>' + ke.map((Tt, tn) => {
      const Ln = tn * tt + tt / 2, ea = Ne(Tt.high), In = Tt.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + In + '" x="' + (Ln - mt / 2) + '" y="' + ea + '" width="' + mt + '" height="' + (Pe - Ke - ea) + '" rx="5"></rect><text class="wbAvgValue' + In + '" x="' + Ln + '" y="' + (ea - 6) + '">' + Fe(Yn(_, Tt.high)) + '</text><text class="wbAvgDay' + In + '" x="' + Ln + '" y="' + (Pe - 4) + '">' + Fe(eh(Tt.date, _)) + "</text>";
    }).join("") + "</svg>";
    return Wo({
      icon: Kn.chartLine,
      name: Ze.metrics.compared_to_average,
      double: !0,
      sub: Un(Ze.highsLastDays, { days: P.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (me > 0 ? "+" : "") + Fe(Yn(_, me)) + '</div><div class="wbCompareWords">' + Fe(Ze.average[he]) + '</div><div class="wbCompareTemps">' + Fe(Un(Ze.todayVsAverage, { today: Yn(_, K), average: Yn(_, pe) })) + "</div></div>" + Pt + "</div>"
    });
  }
  function ft(_, A) {
    const P = fa(_, A, "humidity");
    if (!P || !Sn(P.value)) return "";
    const K = fa(_, A, "dew_point"), pe = Math.max(0, Math.min(100, Number(P.value)));
    return Wo({
      icon: Kn.waterPercent,
      name: Ze.metrics.humidity,
      sub: K && Sn(K.value) ? Un(Ze.dewPoint, { dew_point: Yn(_, K.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + pe + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + pl(un(Math.round(Number(P.value)), _.locale), "%") + "</div>"
    });
  }
  function Ae(_, A) {
    var Pe, He;
    const P = fa(_, A, "pressure");
    if (!P || !Sn(P.value)) return "";
    const K = Number(P.value), pe = (Pe = P.stateObj.attributes) == null ? void 0 : Pe.pressure_unit, me = vc(K, pe), he = ((He = Z.pressureHistory) == null ? void 0 : He.entityId) === P.stateObj.entity_id ? vc(Z.pressureHistory.value, pe) : void 0;
    let ke;
    if (me !== void 0 && he !== void 0) {
      const Ke = me - he;
      ke = Ke >= lc ? "rising" : Ke <= -lc ? "falling" : "steady";
    }
    const be = bl(_, P.stateObj, "pressure", Math.round(K));
    return Wo({
      icon: Kn.gauge,
      name: Ze.metrics.pressure,
      sub: ke ? Ze.pressure[ke] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + pl(be.number) + '<span class="wbTapeUnit">' + Fe(be.unit) + "</span></div>" + (me !== void 0 ? dt(_, me) : "") + "</div>"
    });
  }
  function dt(_, A) {
    const pe = Math.floor(A) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (me, he) => pe + he).map((me) => {
      const he = 100 - (me - A) * 9;
      if (he < 22 || he > 178) return "";
      const ke = me % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(he - 100) / 100) + '"><line class="wbTapeTick" x1="' + (ke ? 2 : 8) + '" x2="26" y1="' + he + '" y2="' + he + '"></line>' + (ke ? '<text class="wbTapeLabel" x="33" y="' + he + '">' + Fe(un(me, _.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Fe(Ze.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Fe(Ze.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function vt(_) {
    var be, Pe;
    const A = ld(_), P = A ? _.states[A] : void 0;
    if (!P || ((be = Z.rain) == null ? void 0 : be.entityId) !== A || !Sn(Z.rain.change)) return "";
    const K = ((Pe = P.attributes) == null ? void 0 : Pe.unit_of_measurement) ?? "", pe = we(_, "hourly"), me = Date.now() + Ui, he = w("hourly").filter((He) => He.precipitation != null && new Date(He.datetime).getTime() <= me), ke = he.reduce((He, Ke) => He + Number(Ke.precipitation), 0);
    return Wo({
      icon: Kn.rainy,
      name: Ze.metrics.precipitation,
      sub: pe && he.length ? Un(Ze.rainExpected, { amount: un(ke, _.locale, { maximumFractionDigits: 1 }) + " " + Tr(_, pe, "precipitation") }) : Ze.rainLast24h,
      visual: pl(un(Z.rain.change, _.locale, { maximumFractionDigits: 1 }), K) + (he.length > 1 ? Th(he.map((He) => ({ label: "", value: Number(He.precipitation) }))) : "")
    });
  }
  function Ie(_, A) {
    const P = fa(_, A, "visibility");
    if (!P || !Sn(P.value)) return "";
    const K = bl(_, P.stateObj, "visibility", P.value), pe = Ep(Number(P.value), Tr(_, P.stateObj, "visibility"));
    return Wo({
      icon: Kn.eyeOutline,
      name: Ze.metrics.visibility,
      sub: Ze.visibilityLevel[Dp(pe)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + pe + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Fe(mo(_, pe)) + '</div><div class="wbSeaValue">' + pl(K.number, K.unit) + "</div></div>"
    });
  }
  function mo(_, A) {
    var me;
    const P = _p((me = _.config) == null ? void 0 : me.country, A);
    if (P) return Un(Ze.visibilityLandmarks, { from: P.from, to: P.to });
    const K = A / Wp * 60;
    if (K < 60) {
      const he = K < 5 ? Math.max(1, Math.round(K)) : 5 * Math.round(K / 5);
      if (he < 60) return Un(Ze.walkMinutes, { minutes: un(he, _.locale) });
    }
    const pe = Math.max(1, Math.round(K / 30) / 2);
    return pe < 8 ? Un(Ze.walkHours, { hours: un(pe, _.locale) }) : Ze.walkDay;
  }
  function Uo(_) {
    Z.categories === void 0 && fe(_);
    const A = at(_), P = (be) => be.map((Pe) => _.states[Pe]).filter(ms), K = P(A.air), pe = P(A.pollen);
    if (!K.length && !pe.length) return "";
    const me = [...K, ...pe], he = (be) => pe.includes(be) ? Kn.flower : Kn.airFilter, ke = me.find((be) => be.entity_id === G.aq);
    return ke ? $i(_, ke, he(ke)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Fe(Ze.airQuality) + '</h2></div><div class="wbAqTiles">' + me.map((be) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Fe(be.entity_id) + '"><span class="wbChip">' + Lr(he(be)) + '</span><span class="wbText"><span class="wbName">' + Fe(gc(_, be)) + '</span><span class="wbSub">' + Fe(ul(_, be)) + "</span></span></button>").join("") + "</div></div>";
  }
  function $i(_, A, P) {
    var He, Ke, qe;
    const K = ((He = A.attributes) == null ? void 0 : He.unit_of_measurement) ?? "", pe = ((Ke = A.attributes) == null ? void 0 : Ke.device_class) === "pm25" && K === dc && Sn(A.state), me = Number(A.state), he = pe ? bh(me) : void 0, ke = ((qe = Z.aqHistory) == null ? void 0 : qe.entityId) === A.entity_id ? Z.aqHistory.points : void 0, be = (De) => Math.min(100, Math.max(0, De / cl * 100));
    let Pe;
    if (ke && ke.length > 1) Pe = Sh(ke, (De) => (un(De, _.locale, { maximumFractionDigits: 1 }) + " " + K).trim());
    else if (he) {
      let De = 0;
      const ze = nu.map(([Ne, tt]) => {
        const mt = be(Math.min(tt, cl)), Pt = Gp[Ne] + " " + De + "% " + mt + "%";
        return De = mt, Pt;
      });
      Pe = '<div class="wbScale" role="meter" aria-label="' + Fe(Ze.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + cl + '" aria-valuenow="' + me + '" style="background:linear-gradient(to right, ' + ze.join(", ") + ')"><i style="left:' + be(me) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + cl + " " + dc + "</span></div>";
    } else Pe = '<span class="wbGraphNote"><span>' + Fe(ul(_, A)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Lr(P) + '</span><span class="wbText"><span class="wbName">' + Fe(gc(_, A)) + '</span><span class="wbSub">' + Fe(ul(_, A)) + (he ? " · " + Fe(Ze.aqLevel[he]) : "") + '</span></span><button class="wbBack" title="' + Fe(Ze.back) + '" data-wb="aq-close">' + Lr(Kn.back) + '</button></div><div class="wbGraph">' + Pe + "</div></div></div>";
  }
  const Be = {
    current: Je,
    hourly: fo,
    sun: Zi,
    moon: fn,
    wind: ot,
    uv_index: Nn,
    compared_to_average: Ki,
    humidity: ft,
    pressure: Ae,
    precipitation: vt,
    visibility: Ie,
    air_quality: Uo
  };
  function Ve(_) {
    var Pe, He, Ke, qe;
    const A = l == null ? void 0 : l();
    if (!A || q) return;
    const P = We(A);
    k(A, P), Z.lastFetch || V();
    const K = at(A), pe = bc(A), me = ld(A), he = [
      ...P.map((De) => A.states[De]),
      A.states["sun.sun"],
      pe && A.states[pe],
      me && A.states[me],
      ...K.air.map((De) => A.states[De]),
      ...K.pollen.map((De) => A.states[De]),
      A.locale,
      A.config,
      A.entities,
      Math.floor(Date.now() / po)
    ];
    if (!_ && $ && he.length === $.length && he.every((De, ze) => De === $[ze])) return;
    $ = he;
    const ke = b.getRootNode(), be = ke.activeElement || document.activeElement;
    for (const De of re) {
      const ze = O[De];
      let Ne = "";
      try {
        Ne = Be[De](A, P) || "";
      } catch {
        Ne = "";
      }
      if (Ne === ze.html) continue;
      const tt = be && ze.el.contains(be) ? (Pe = be.dataset) == null ? void 0 : Pe.wbFocus : void 0, mt = ze.el.querySelector(".wbStripScroll"), Pt = mt ? mt.scrollLeft : 0;
      ze.html = Ne, ze.el.hidden = !Ne, ze.el.innerHTML = Ne, Pt && ((He = ze.el.querySelector(".wbStripScroll")) == null || He.scrollTo({ left: Pt })), tt && !X && ((Ke = ze.el.querySelector('[data-wb-focus="' + tt + '"]')) == null || Ke.focus());
    }
    X && ((qe = b.querySelector('[data-wb-focus="' + X + '"]')) == null || qe.focus(), X = null), Dt(performance.now());
  }
  function Jt() {
    W || q || (W = !0, queueMicrotask(() => {
      W = !1, Ve(!0);
    }));
  }
  function La() {
    const _ = getComputedStyle(b), A = (he) => _.getPropertyValue(he).trim(), P = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([he, ke]) => {
      A(ke) && (P[he] = A(ke));
    });
    const K = A("--color-text-primary") || "#f1f1f1", pe = A("--color-bg-card") || "#222222", me = !!b.closest(".light");
    return { colors: { ...Qn, ...P }, ink: me ? K : pe, paper: me ? pe : K };
  }
  const vn = (_, A) => {
    var P;
    _.width !== A.w && (_.width = A.w), _.height !== A.h && (_.height = A.h), (P = _.getContext("2d")) == null || P.putImageData(new ImageData(A.data, A.w, A.h), 0, 0);
  }, Lt = () => m && !Xp();
  function Ua(_, A) {
    const P = b.querySelector("canvas[data-wb-strip]");
    if (!P || !j || !P.getClientRects().length) return;
    const K = P.clientWidth, pe = P.clientHeight;
    if (!K || !pe) return;
    const me = { width: K, height: pe, columns: ll, colors: A.colors, clock: _, ambient: Lt(), seed: j.seed };
    if (c === "smooth") {
      const he = Math.min(2, window.devicePixelRatio || 1), ke = Math.round(K * he), be = Math.round(pe * he);
      P.width !== ke && (P.width = ke), P.height !== be && (P.height = be);
      const Pe = P.getContext("2d");
      if (!Pe) return;
      Pe.setTransform(he, 0, 0, he, 0, 0), pp(Pe, j.segs, me);
    } else vn(P, up(j.segs, { ...me, px: 2, oneBit: c === "onebit", ink: A.ink, paper: A.paper }));
  }
  function Dt(_) {
    if (q) return;
    const A = La();
    if (c !== "smooth") {
      const P = Lt();
      b.querySelectorAll("canvas[data-wb-wx]").forEach((K) => {
        K.getClientRects().length && vn(K, jc(yd(K.dataset.wbWx, A.colors), { size: Number(K.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: A.colors, ink: A.ink, paper: A.paper, clock: _, idle: P }));
      });
    }
    b.querySelectorAll("canvas[data-wb-sea]").forEach((P) => {
      const K = P.clientWidth, pe = P.clientHeight, me = Number(P.dataset.wbSea), he = K + "x" + pe + ":" + me + ":" + A.colors.skyClearDay;
      !K || !pe || !(me > 0) || P.dataset.painted === he || (P.dataset.painted = he, vn(P, Tp(K, pe, me, A.colors)));
    }), Ua(_, A);
  }
  function Aa(_) {
    if (te = 0, !(q || !Lt())) {
      if (!document.hidden)
        if (c === "smooth") Ua(_, La());
        else {
          const A = Math.floor(_ / 100);
          A !== U && (U = A, Dt(_));
        }
      te = requestAnimationFrame(Aa);
    }
  }
  function Pn() {
    b.classList.toggle("wbMotion", Lt()), !te && !q && Lt() && (te = requestAnimationFrame(Aa));
  }
  function ma(_) {
    var P, K;
    const A = (K = (P = _.target).closest) == null ? void 0 : K.call(P, "[data-wb]");
    if (!(!A || !b.contains(A))) {
      switch (A.dataset.wb) {
        case "day": {
          G.openDay = Number(A.dataset.index), G.opener = A.dataset.wbFocus, X = "back-day";
          const pe = pn()[G.openDay], me = !Z.todayHistory || Z.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Z.todayHistory.fetched > Bp;
          pe && ps(new Date(pe.datetime), /* @__PURE__ */ new Date()) && me && ae();
          break;
        }
        case "close-day":
          G.openDay = void 0, X = G.opener, G.opener = void 0;
          break;
        case "open-page":
          v == null || v();
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
      Ve(!0);
    }
  }
  function Qt(_) {
    var A, P;
    _.key === "Escape" && G.openDay !== void 0 && ((P = (A = _.target).closest) != null && P.call(A, '[data-wb-open="day"]')) && (G.openDay = void 0, X = G.opener, G.opener = void 0, Ve(!0));
  }
  let _t = null;
  function _a(_) {
    var P, K;
    const A = (K = (P = _.target).closest) == null ? void 0 : K.call(P, ".wbStripScroll");
    !A || _.button !== 0 || (_t = { startX: _.pageX, left: A.scrollLeft, moved: !1 }, window.addEventListener("mousemove", da), window.addEventListener("mouseup", Ya, { once: !0 }));
  }
  function da(_) {
    const A = b.querySelector(".wbStripScroll");
    if (!_t || !A) return;
    const P = _.pageX - _t.startX;
    !_t.moved && Math.abs(P) > 1 && (_t.moved = !0, A.classList.add("wbDragging")), A.scrollLeft = _t.left - P;
  }
  function Ya() {
    var _;
    _t = null, window.removeEventListener("mousemove", da), (_ = b.querySelector(".wbStripScroll")) == null || _.classList.remove("wbDragging");
  }
  b.addEventListener("click", ma), b.addEventListener("keydown", Qt), b.addEventListener("mousedown", _a);
  const Gt = typeof ResizeObserver == "function" ? new ResizeObserver(() => Dt(performance.now())) : null;
  Gt == null || Gt.observe(b);
  const Kt = (Ka = window.matchMedia) == null ? void 0 : Ka.call(window, "(prefers-reduced-motion: reduce)"), xt = () => {
    Pn(), Dt(performance.now());
  };
  (go = Kt == null ? void 0 : Kt.addEventListener) == null || go.call(Kt, "change", xt);
  const Za = [
    setInterval(() => {
      Q = /* @__PURE__ */ new Date(), Ve(!0);
    }, Op),
    setInterval(() => {
      T = /* @__PURE__ */ new Date(), Ve(!0);
    }, qp),
    setInterval(V, Ip)
  ];
  return Ve(!0), Pn(), {
    update() {
      Ve(!1);
    },
    setStyle(_) {
      !_ || _ === c || (c = _, Ve(!0), Pn());
    },
    destroy() {
      var _;
      q = !0, Za.forEach(clearInterval), te && cancelAnimationFrame(te), te = 0, Gt == null || Gt.disconnect(), (_ = Kt == null ? void 0 : Kt.removeEventListener) == null || _.call(Kt, "change", xt), Ya(), b.removeEventListener("click", ma), b.removeEventListener("keydown", Qt), b.removeEventListener("mousedown", _a), ["daily", "hourly"].forEach(Se), b.remove();
    }
  };
}
const gs = "#E1E1E1", kc = "#F7F4F0", dd = "#03a9f4", yt = 14, Ct = 172;
let Dh = 0;
const Yt = (a) => Math.round(a * 100) / 100, ho = (a, l, o) => Math.max(l, Math.min(o, a)), Go = (a, l, o, c, m, g) => '<rect x="' + Yt(a) + '" y="' + Yt(l) + '" width="' + Yt(o) + '" height="' + Yt(c) + '" fill="' + m + '"' + (g != null ? ' opacity="' + g + '"' : "") + "/>", cd = (a) => a.map((l, o) => (o ? "L" : "M") + Yt(l[0]) + " " + Yt(l[1])).join("");
function ud(a) {
  const l = (a == null ? void 0 : a.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const mi = [
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
  let o = mi[0], c = mi[mi.length - 1];
  for (let L = 0; L < mi.length - 1; L++) if (l >= mi[L][0] && l <= mi[L + 1][0]) {
    o = mi[L], c = mi[L + 1];
    break;
  }
  const m = (l - o[0]) / (c[0] - o[0]), g = m * m * (3 - 2 * m), v = (L, b) => {
    const I = parseInt(L.slice(1), 16), re = parseInt(b.slice(1), 16);
    return "#" + [16, 8, 0].map((ne) => Math.round((I >> ne & 255) + ((re >> ne & 255) - (I >> ne & 255)) * g).toString(16).padStart(2, "0")).join("");
  };
  return { top: v(o[1][0], c[1][0]), bot: v(o[1][1], c[1][1]), warm: v(o[1][2], c[1][2]), cool: v(o[1][3], c[1][3]), op: o[1][4] + (c[1][4] - o[1][4]) * g, t: l };
}
function Bh(a) {
  const l = parseInt(a.slice(1), 16), o = (l >> 16 & 255) / 255, c = (l >> 8 & 255) / 255, m = (l & 255) / 255, g = Math.max(o, c, m), v = Math.min(o, c, m);
  let L = 0, b = 0;
  const I = (g + v) / 2;
  if (g !== v) {
    const re = g - v;
    b = I > 0.5 ? re / (2 - g - v) : re / (g + v), L = (g === o ? (c - m) / re + (c < m ? 6 : 0) : g === c ? (m - o) / re + 2 : (o - c) / re + 4) / 6;
  }
  return [L * 360, b * 100, I * 100];
}
function fu(a, l, o) {
  l = ho(l, 0, 100) / 100, o = ho(o, 0, 100) / 100;
  const c = (v) => (v + a / 30) % 12, m = l * Math.min(o, 1 - o), g = (v) => o - m * Math.max(-1, Math.min(c(v) - 3, Math.min(9 - c(v), 1)));
  return "#" + [g(0), g(8), g(4)].map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("");
}
const [mu, gu, vu] = Bh(gs), Mc = fu(mu, gu, Math.max(6, vu - 14)), Nh = fu(mu, gu, Math.min(96, vu + 16));
function Ph(a, l, o, c, m) {
  const g = Ct / 2, v = Ct * 0.12, L = g - (g - v) * a, b = ($) => $ ** 1.3, I = ho(o, -1.5, 1.5), re = ($) => -(Math.abs(I) * 4.6 * $ ** 1.5) * Math.sign(I), ne = a * 1.4, O = ($, te) => {
    const U = Math.min(4.8, Math.abs(o) * 2.6) * (te ? 1 : -1) * Math.sign(o || 1), W = te ? $ + L : $, X = te ? $ : $ + L, G = (Le) => W + re(Le) + U * Math.sin(Le * Math.PI * 1.2 + c) * b(Le) * 1.4 + ne * Math.sin(Le * Math.PI * 2 + c * 0.6) * b(Le) * (te ? 1 : -1), Z = [[X, yt]];
    for (let Le = 0; Le <= 12; Le++) Z.push([G(Le / 12), yt + Ct * Le / 12]);
    Z.push([X, yt + Ct]);
    let Q = '<path d="' + cd(Z) + 'Z" fill="' + gs + '"/>';
    if (m) return Q;
    const T = 1.35 + ((te ? o > 0 : o < 0) ? 0.35 : 0), j = (Le) => {
      const w = Le / 7, we = te ? 1 - w : w, Se = (1 - we) ** 1.3, Oe = $ + L * w;
      return Array.from({ length: 13 }, (k, E) => {
        const C = E / 12;
        return [Oe + re(C) * Se + U * T * Math.sin(C * Math.PI * 1.2 + c - we * 3.2) * b(C) * 1.4 * Se + ne * 1.6 * Math.sin(C * Math.PI * 2 + c * 0.6 - we * 2.5) * b(C) * a * (0.4 + 0.6 * Se), yt + Ct * C];
      });
    }, ve = [1, 2, 3, 4, 5, 6].map(j);
    for (let Le = 0; Le < 6; Le += 2) Q += '<path d="' + cd(ve[Le]) + cd(ve[Le + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return Q;
  }, q = g - (g - v) * l;
  return { body: O(yt, !0) + O(yt + Ct - L, !1), rails: [{ x: yt + q - 4, y: yt, w: 4, h: Ct }, { x: yt + Ct - q, y: yt, w: 4, h: Ct }], head: 6.4 };
}
function Ih(a, l, o) {
  const c = Ct * (1 - a);
  let m = "";
  if (c > 1 && (m += Go(yt, yt, Ct, c, gs), !o))
    for (let g = 1; g < 7; g += 2) m += Go(yt + Ct * g / 7, yt, Ct / 7, c, "#fff");
  return { body: m, rails: [{ x: yt, y: yt + Ct * (1 - l) - 7, w: Ct, h: 11 }], head: 10.4 };
}
function Hh(a, l, o, c) {
  const m = 9 - 7 * (o / 100), g = yt + Ct * (1 - a), v = Math.ceil(Ct / 10) + 1, L = yt + m / 2, b = (yt + Ct - m / 2 - L) / (v - 1), I = 0.8, re = 0.6, ne = Array.from({ length: v }, ($, te) => Math.max(L + te * re, Math.min(L + te * b, g - m / 2 - (v - 1 - te) * re))), O = ne.slice(0, -1).map(($, te) => ho((ne[te + 1] - $ - re) / (b - re), 0, 1));
  O.push(O[v - 2]);
  let q = "";
  return ne.forEach(($, te) => {
    const U = I + (m - I) * O[te], W = Math.max(0.5, U / 2), X = Math.max(0.4, U * 0.114);
    q += Go(yt, $ - W, Ct, Math.max(1, U), gs), !c && U > 2.2 && (q += Go(yt, $ + W - X, Ct, X, Mc) + Go(yt, $ - W, Ct, X * 0.55, Nh, 0.75));
  }), c || [0.22, 0.78].forEach(($) => {
    q += Go(yt + Ct * $ - 0.7, yt, 1.4, Math.max(0, ne[v - 1] + 1 - yt), Mc, 0.85);
  }), { body: q, rails: [{ x: yt, y: yt + Ct * (1 - l) - 8, w: Ct, h: 8 }], head: 8.8 };
}
const Cc = (a, l, o, c, m, g, v) => a === "curtain" ? Ph(l, o, m, g, v) : a === "venetian" ? Hh(l, o, c, v) : Ih(l, o, v);
function Fh(a, l) {
  let o = "", c = "";
  return l.forEach((m) => {
    const g = m.w > m.h, v = ho(g ? yt + Ct / 2 : m.x + m.w / 2, 17, 183), L = ho(g ? m.y + m.h / 2 : yt + Ct / 2, 17, 183);
    o += g ? Go(yt, ho(m.y + m.h / 2, yt, yt + Ct) - 1, Ct, 2, dd) : Go(ho(m.x + m.w / 2, yt, yt + Ct) - 1, yt, 2, Ct, dd);
    const b = g ? "M" + Yt(v - 4) + " " + Yt(L - 3) + "l4 -3l4 3M" + Yt(v - 4) + " " + Yt(L + 3) + "l4 3l4 -3" : "M" + Yt(v - 3) + " " + Yt(L - 4) + "l-3 4l3 4M" + Yt(v + 3) + " " + Yt(L - 4) + "l3 4l-3 4";
    c += '<circle cx="' + Yt(v) + '" cy="' + Yt(L) + '" r="11" fill="' + dd + '" filter="url(#' + a + 's)"/><path d="' + b + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: c };
}
function Oh(a, l) {
  const o = /* @__PURE__ */ new Date(), c = Rh(o.getHours() + o.getMinutes() / 60), m = 42 + 18 * Math.sin(c.t * 0.5), g = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, v = Cc(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), L = l.ghostAlpha > 4e-3 && l.ghost != null ? Cc(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", b = l.grip > 4e-3 ? Fh(a, v.rails) : null, I = (re) => Go(yt, yt, Ct, Ct, re);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + a + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + a + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + a + 'w" cx="' + Yt(m) + '%" cy="' + Yt(g) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + Yt(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + a + 'k" cx="' + Yt(100 - m * 0.8) + '%" cy="' + Yt(100 - g * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + Yt(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + a + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + kc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + a + 'c)">' + I("url(#" + a + "l)") + I("url(#" + a + "w)") + I("url(#" + a + "k)") + (L ? '<g opacity="' + Yt(l.ghostAlpha) + '">' + L + "</g>" : "") + v.body + '<rect x="14" y="14" width="172" height="' + v.head + '" fill="' + gs + '" filter="url(#' + a + 's)"/></g>' + (b ? '<g clip-path="url(#' + a + 'c)" opacity="' + Yt(l.grip) + '">' + b.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + kc + '" stroke-width="3"/>' + (b ? '<g opacity="' + Yt(l.grip) + '">' + b.knobs + "</g>" : "") + "</svg>";
}
function qh({ onMove: a, onSet: l }) {
  var Q;
  const o = "cv" + ++Dh, c = document.createElement("div");
  c.className = "tfCoverArt";
  const m = (Q = window.matchMedia) == null ? void 0 : Q.call(window, "(pointer: coarse)").matches;
  let g = null;
  const v = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let L = 0, b = !1, I = !1, re = null, ne = 0, O = 0;
  const q = () => (g == null ? void 0 : g.kind) === "curtain" ? "x" : "y", $ = () => re || b || I || g.moving || g.target != null ? 1 : m ? performance.now() < O ? 1 : 0.4 : 0, te = () => {
    c.innerHTML = Oh(o, { kind: g.kind, pos: v.pos, bar: g.target ?? v.pos, tilt: v.tilt, vel: v.vel, ph: v.ph, ghost: v.gpos, ghostAlpha: v.ghost, grip: v.grip });
  };
  function U(T) {
    L = 0;
    const j = v.last ? Math.min(0.064, (T - v.last) / 1e3) : 1 / 60, ve = j * 60;
    v.last = T;
    const Le = g.pos - v.pos, w = v.pos;
    v.pos += Math.sign(Le) * Math.min(Math.abs(Le), Math.max(10.5, Math.abs(Le) * 1.4) * j), Math.abs(g.pos - v.pos) < 0.03 && (v.pos = g.pos), v.vel = v.vel * 0.86 + (v.pos - w) / ve * 0.14, Math.abs(v.vel) < 0.015 && v.pos === g.pos && (v.vel = 0), (v.pos !== w || v.vel) && (v.ph += (0.06 + Math.abs(v.vel) * 0.03) * ve);
    const we = g.tilt - v.tilt;
    v.tilt += Math.sign(we) * Math.min(Math.abs(we), Math.max(60, Math.abs(we) * 4) * j);
    const Se = $();
    v.grip += (Se - v.grip) * Math.min(1, j * (Se > v.grip ? 11 : 3.5)), Math.abs(Se - v.grip) < 0.01 && (v.grip = Se);
    const Oe = g.target != null && Math.abs(g.target - v.pos) > 0.5 ? 0.22 : 0;
    g.target != null && (v.gpos = g.target), v.ghost += (Oe - v.ghost) * Math.min(1, j * (Oe > v.ghost ? 16 : 3)), Math.abs(Oe - v.ghost) < 4e-3 && (v.ghost = Oe), te(), v.pos !== g.pos || v.vel || v.tilt !== g.tilt || v.grip !== Se || v.ghost !== Oe ? L = requestAnimationFrame(U) : v.last = 0;
  }
  const W = () => {
    g && !L && (L = requestAnimationFrame(U));
  }, X = setInterval(() => {
    g && !L && te();
  }, 60 * 1e3), G = (T) => {
    const j = c.getBoundingClientRect();
    return q() === "x" ? (T.clientX - j.left) / j.width : (T.clientY - j.top) / j.height;
  };
  c.addEventListener("pointerdown", (T) => {
    var Le;
    if (!(g != null && g.canSet) || T.button > 0) return;
    T.preventDefault(), (Le = c.setPointerCapture) == null || Le.call(c, T.pointerId);
    const j = g.target ?? g.pos, ve = c.getBoundingClientRect();
    re = { p0: G(T), from: j, x0: T.clientX, value: null, side: null }, g.kind === "curtain" && j > 0 && (re.side = (T.clientX - ve.left) / ve.width < 0.5 ? "L" : "R"), W();
  }), c.addEventListener("pointermove", (T) => {
    if (!re) return;
    let j;
    if (g.kind === "curtain") {
      if (!re.side) {
        const Le = T.clientX - re.x0;
        if (Math.abs(Le) < 4) return;
        re.side = Le < 0 ? "L" : "R";
      }
      const ve = (Ct / 2 - Ct * 0.12) / 200;
      j = re.from + (re.side === "L" ? -1 : 1) * ((G(T) - re.p0) / ve) * 100;
    } else j = re.from - (G(T) - re.p0) / (Ct / 200) * 100;
    re.value = ho(j, 0, 100), a(re.value);
  });
  const Z = () => {
    if (!re) return;
    const T = re.value;
    re = null, T != null && l(Math.round(T)), W();
  };
  return c.addEventListener("pointerup", Z), c.addEventListener("pointercancel", Z), c.addEventListener("lostpointercapture", Z), c.addEventListener("pointerenter", () => {
    b = !0, W();
  }), c.addEventListener("pointerleave", () => {
    b = !1, W();
  }), c.addEventListener("focus", () => {
    I = c.matches(":focus-visible"), W();
  }), c.addEventListener("blur", () => {
    I = !1, W();
  }), c.addEventListener("keydown", (T) => {
    if (!(g != null && g.canSet)) return;
    const j = Math.round(g.target ?? g.pos), ve = T.shiftKey ? 10 : 1, Le = { ArrowUp: j + ve, ArrowRight: j + ve, ArrowDown: j - ve, ArrowLeft: j - ve, PageUp: j + 25, PageDown: j - 25, Home: 0, End: 100 }[T.key];
    if (Le == null) return;
    T.preventDefault();
    const w = ho(Le, 0, 100);
    a(w), clearTimeout(ne), ne = setTimeout(() => l(w), 500);
  }), {
    el: c,
    update(T) {
      const j = !g;
      g = T, j && (v.pos = g.pos, v.tilt = g.tilt, O = performance.now() + 1500, m && setTimeout(W, 1600)), c.classList.toggle("x", q() === "x"), c.classList.toggle("y", q() === "y"), g.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(g.target ?? g.pos))), c.setAttribute("aria-orientation", q() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", g.name + (g.canSet ? " position" : "")), c.setAttribute("aria-valuetext", g.text), W();
    },
    destroy() {
      cancelAnimationFrame(L), L = 0, clearInterval(X), clearTimeout(ne), c.remove();
    }
  };
}
const Sc = "move-assistant-density", gi = {
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
}, ie = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), pd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Tc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Wh = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', hl = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Lc = 1, Vh = 4, Ac = 16, _c = 32, zh = 128, jh = 256, Ec = 16384, Gh = 1, Uh = 2, Dc = 4, Yh = 8, Zh = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Kh = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, $h = { curtain: "curtains", blind: "blind", venetian: "blinds" }, hd = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, Rc = "move_assistant_house", Bc = "move-assistant-house-used", Xh = ["switch", "fan", "input_boolean", "automation"], Nc = "move-assistant-house-look", Jh = [["popup", "Popup"], ["sheet", "Sheet"]], fd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Qh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', ef = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Pc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Ic = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', Hc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', ja = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + a.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", Fc = ja(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), tf = ja(["M20 6L9 17L4 12"]), uo = {
  temp: ja(["M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"]),
  hum: ja(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z"]),
  // the solid bulb every light shows (Matt, 30 Oct)
  lights: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path style="fill:currentColor;stroke:none" d="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z"/></svg>',
  covers: ja(["M3 3h18", "M5 3v18c3-4 4-10 4-18", "M19 3v18c-3-4-4-10-4-18"]),
  climate: ja(["M2 8h20", "M2 19h20", "M5 5v17", "M9.5 5v17", "M14.5 5v17", "M19 5v17"]),
  humidifier: ja(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z", "M9 15a3 3 0 0 0 3 3"]),
  media: ja(["M3 6h18v12H3Z", "M8 21h8"]),
  plugs: ja(["M9 2v6", "M15 2v6", "M6 8h12v4a6 6 0 0 1-12 0Z", "M12 18v4"]),
  alert: ja(["M12 9v4", "M12 17h.01", "M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"]),
  door: ja(["M13 4h5v16h-5", "M3 20h18", "M13 4L6 6v14l7 0Z", "M10.5 12h.01"])
}, nf = (a) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (a ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', af = 1, of = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Oc = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, md = ["hs", "xy", "rgb", "rgbw", "rgbww"], fl = ["door", "window", "garage_door", "opening"], qc = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, ml = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], rf = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], sf = 10, lf = 20, df = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, cf = ["living room", "bedroom", "office"];
function uf(a, { config: l, getHass: o }) {
  var rs, Ks, $s;
  const c = (e) => a.getElementById(e), m = c("app"), v = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let L = gi.get(Sc) === "1", b = {};
  const I = (e) => {
    var n;
    return (n = o()) == null ? void 0 : n.callWS(e);
  }, re = (e, n, r) => I({ type: "call_service", domain: e, service: n, service_data: r }), ne = a.querySelector("#appearancePane .toggleList");
  ne && !c("densityToggle") && (ne.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    L = !L, gi.set(Sc, L ? "1" : "0"), Q();
  }));
  const O = [
    ["weather", "Weather", "The forecast under Home.", (e) => e.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (e) => e.startsWith("sensor.") && ft(e).device_class === "power" && /^(W|kW)$/.test(ft(e).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (e) => e.startsWith("alarm_control_panel.")]
  ], q = (e, n, r, d) => '<div class="themeChoice" id="' + e + '" role="group" aria-label="' + n + '">' + d.map(([p, y]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + r + '="' + p + '">' + y + "</button>").join("") + "</div>", $ = (e, n, r, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + e + "</strong>" + (n ? '<div class="status">' + n + "</div>" : "") + "</div>" + r + "</div>";
  function te() {
    var S, R, F;
    if (!v || c("housePane")) return;
    const e = c("settingsView");
    e.querySelector(".settingsTitle").textContent = "HomeCore";
    const n = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], r = (B, Y) => '<div class="houseTab' + (B === "look" ? " active" : "") + '" data-house-pane="' + B + '"><section class="card">' + Y + "</section></div>";
    e.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + n.map(([B, Y]) => '<button class="tab segBtn' + (B === "look" ? " active" : "") + '" type="button" data-house-tab="' + B + '">' + Y + "</button>").join("") + "</div>" + r("look", '<div class="toggleList" id="houseLook"></div>') + r("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + r("sources", '<div class="toggleList">' + O.map(([B, Y, xe]) => $(Y, xe, '<select class="settingsSelect" data-source="' + B + '" aria-label="' + Y + '"></select>')).join("") + "</div>") + r("sums", '<div class="toggleList">' + Object.entries(hd).map(([B, Y]) => $(Y.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + B + '" aria-label="' + Y.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = c("houseLook");
    [(S = e.querySelector(".themeBtn")) == null ? void 0 : S.closest(".toggleRow"), (R = c("densityToggle")) == null ? void 0 : R.closest(".toggleRow"), (F = c("moreInfoChoice")) == null ? void 0 : F.closest(".toggleRow")].forEach((B) => B && d.appendChild(B)), d.insertAdjacentHTML("beforeend", $("Lights", "How lights show on the house page.", q("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + $("Pad", "What the Dual Axis Controller’s pad sets on its tile.", q("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const p = c("housePane"), y = p.querySelector(".houseTabs"), h = y.querySelector(".rubberIndicator"), x = (B) => {
      const Y = y.querySelector(".tab.active");
      h.style.transition = B ? "" : "none", h.style.left = Y.offsetLeft + "px", h.style.width = Y.offsetWidth + "px", B && (h.style.transform = "scaleX(1.08)", setTimeout(() => h.style.transform = "", 180));
    };
    new ResizeObserver(() => x(!1)).observe(y), p.addEventListener("click", (B) => {
      const Y = B.target.closest("[data-house-tab]");
      if (Y) {
        y.querySelectorAll(".tab").forEach((le) => le.classList.toggle("active", le === Y)), p.querySelectorAll(".houseTab").forEach((le) => le.classList.toggle("active", le.dataset.housePane === Y.dataset.houseTab)), Y.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x(!0);
        return;
      }
      const xe = B.target.closest("[data-light-fav]");
      if (xe) {
        Ba(xe.dataset.lightFav);
        return;
      }
      const Re = B.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Re || Re.disabled)) {
        if (Re.dataset.lights && (qt.lights = Re.dataset.lights), Re.dataset.dacPad && (qt.dacPad = Re.dataset.dacPad), (Re.dataset.lights || Re.dataset.dacPad) && (Je(), Hn.clear()), Re.dataset.sumToggle) {
          const le = Re.dataset.sumToggle, de = new Set(V.hiddenSums || []);
          de.has(le) ? de.delete(le) : de.add(le), V = { ...V, hiddenSums: [...de] }, Tn();
        }
        ao();
      }
    }), p.addEventListener("change", (B) => {
      const Y = B.target;
      Y.dataset.source && (V = { ...V, sources: { ...V.sources || {}, [Y.dataset.source]: Y.value || void 0 } }, Tn());
      const xe = Y.dataset.lightStyle || Y.dataset.lightPad;
      if (xe) {
        const Re = Y.dataset.lightStyle ? "lightStyles" : "lightPads", le = { ...qt[Re] };
        Y.value ? le[xe] = Y.value : delete le[xe], qt[Re] = le, Je(), [...Hn.keys()].filter((de) => de.endsWith(":" + xe)).forEach((de) => Hn.delete(de));
      }
      ao();
    });
  }
  function U() {
    var x, S;
    yn() && wi();
    const e = c("housePane");
    if (!e) return;
    const n = !!customElements.get(ta);
    e.querySelectorAll("[data-lights]").forEach((R) => R.setAttribute("aria-pressed", String(R.dataset.lights === qt.lights))), c("lightsRow").querySelector(".status").textContent = n || !yn() ? "How lights show on the house page." : ca === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", e.querySelectorAll("[data-dac-pad]").forEach((R) => R.setAttribute("aria-pressed", String(R.dataset.dacPad === qt.dacPad))), c("dacPadRow").hidden = !yn();
    for (const R of e.querySelectorAll("[data-source]")) {
      if (R === a.activeElement) continue;
      const [F] = O.find(([Y]) => Y === R.dataset.source), B = Object.keys(b).filter(O.find(([Y]) => Y === F)[3]).sort((Y, xe) => Ae(Y).localeCompare(Ae(xe)));
      R.dataset.sig !== B.join(",") && (R.innerHTML = '<option value="">Automatic</option>' + B.map((Y) => '<option value="' + ie(Y) + '">' + ie(Ae(Y)) + "</option>").join(""), R.dataset.sig = B.join(",")), R.value = B.includes((x = V.sources) == null ? void 0 : x[F]) ? V.sources[F] : "";
    }
    e.querySelectorAll("[data-sum-toggle]").forEach((R) => {
      const F = !(V.hiddenSums || []).includes(R.dataset.sumToggle);
      R.classList.toggle("on", F), R.setAttribute("aria-checked", String(F));
    });
    const r = c("lightRows"), d = r != null && r.contains(a.activeElement) ? a.activeElement : null;
    if (!r || d != null && d.matches("select")) return;
    const p = new Set(An()), y = (R, F, B, Y) => '<option value="' + R + '"' + (R === B ? " selected" : "") + ">" + F + "</option>", h = Object.keys(b).filter((R) => R.startsWith("light.")).sort((R, F) => !wt.get(R) - !wt.get(F) || (wt.get(R) || "").localeCompare(wt.get(F) || "") || Ae(R).localeCompare(Ae(F))).map((R) => {
      const F = qt.lightStyles[R] || "", B = qt.lightPads[R] || "", Y = p.has(R), xe = ie(Ae(R));
      return "<tr><td><strong>" + xe + "</strong></td><td>" + ie(wt.get(R) || "—") + "</td><td>" + ie(_t(R)) + '</td><td class="metaSwitchCol"><button class="switch' + (Y ? " on" : "") + '" type="button" role="switch" aria-checked="' + Y + '" data-light-fav="' + ie(R) + '" aria-label="' + xe + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + ie(R) + '" aria-label="' + xe + ' tile">' + y("", "Default", F) + y("tile", "HomeCore tile", F) + y("dac", "Dual Axis Controller", F) + '</select></td><td><select class="settingsSelect" data-light-pad="' + ie(R) + '" aria-label="' + xe + ' pad"' + (gt(R) ? "" : " disabled") + ">" + y("", "Default", B) + y("temperature", "Temperature", B) + y("colour", "Colour", B) + "</select></td></tr>";
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
  const T = a.querySelector("#homeView .grid");
  let j = null, ve = null, Le = null, w = null;
  const we = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), k = 350;
  let E = null;
  const C = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map();
  let V = { favourites: null }, ae = {}, ce = {}, fe = [], We = null;
  const at = (() => {
    try {
      return JSON.parse(gi.get(Bc)) || {};
    } catch {
      return {};
    }
  })();
  let wt = /* @__PURE__ */ new Map(), pn = 0;
  function Tn() {
    clearTimeout(pn), pn = setTimeout(() => Promise.resolve(I({ type: "frontend/set_user_data", key: Rc, value: V })).catch(() => {
    }), 400);
  }
  const qt = (() => {
    let e = {};
    try {
      e = JSON.parse(gi.get(Nc)) || {};
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
  })(), Je = () => gi.set(Nc, JSON.stringify(qt)), St = () => {
    m.dataset.more = qt.more, ro();
  };
  v && ne && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Jh.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (qt.more === e) + '" data-more-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-more-style]");
    n && (qt.more = n.dataset.moreStyle, Je(), St(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((r) => r.setAttribute("aria-pressed", String(r === n))));
  })), te();
  let Qe = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const hn = /* @__PURE__ */ new Map();
  let xn = "";
  const Yi = v ? $u({ onChange: () => Ut() }) : null;
  v && m.classList.add("house");
  const lt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ye = null, ht = null, fo = !1;
  function Zi(e) {
    const n = Ra();
    if (m.classList.toggle("houseBento", !!n), Ye && (ht !== n || e == null) && (Ye.destroy(), Ye = null), !n || e == null) {
      lt.remove();
      return;
    }
    lt.isConnected || T.append(lt), lt.style.order = e, !Ye && !fo && (Ye = yc(lt, { getHass: o, entityId: n, style: "bitmap" }), ht = n);
  }
  const bi = [["wx", ["current"]], ["avg", ["compared_to_average"]]], fn = Object.fromEntries(bi.map(([e]) => [e, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + e })]));
  let ot = null, Nn = null;
  function Ki(e) {
    const n = Ra();
    ot && Nn !== n && (ot.forEach((r) => r.destroy()), ot = null), Object.values(fn).forEach((r) => n ? !r.isConnected && T.append(r) : r.remove()), n && !ot && !fo && (ot = bi.map(([r, d]) => yc(fn[r], { getHass: o, entityId: n, style: "bitmap", cards: d, onOpen: r === "wx" ? () => qs("weather") : void 0 })), Nn = n);
  }
  const ft = (e) => {
    var n;
    return ((n = b[e]) == null ? void 0 : n.attributes) || {};
  }, Ae = (e) => ft(e).friendly_name || e, dt = (e, n) => ji(e) || (Number(ft(e).supported_features) & n) === n, vt = (e) => {
    const n = String(e ?? "").replace(/_/g, " ");
    return n.charAt(0).toUpperCase() + n.slice(1);
  }, Ie = (e, n = 1) => Number(e).toLocaleString(void 0, { minimumFractionDigits: n, maximumFractionDigits: n }), mo = (e) => (e == null ? void 0 : e.state) === "on" ? e.attributes.brightness != null ? Math.max(1, Math.round(e.attributes.brightness / 2.55)) : 100 : 0, Uo = (e) => ft(e).supported_color_modes || [], $i = (e) => {
    const n = e / 100;
    return [n <= 66 ? 255 : 329.7 * Math.pow(n - 60, -0.1332), n <= 66 ? 99.47 * Math.log(n) - 161.12 : 288.12 * Math.pow(n - 60, -0.0755), n >= 66 ? 255 : n <= 19 ? 0 : 138.52 * Math.log(n - 10) - 305.04];
  }, Be = (e, n) => [5, 3, 1].map((r) => {
    const d = (r + e / 60) % 6;
    return 255 * (1 - n / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  }), Ve = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)), Jt = (e) => {
    const n = 0.2126 * Ve(e[0]) + 0.7152 * Ve(e[1]) + 0.0722 * Ve(e[2]);
    return (n + 0.05) / 0.0664 > 1.05 / (n + 0.05);
  };
  function La(e) {
    const n = ft(e), r = (n.rgb_color || (n.hs_color && n.color_mode !== "color_temp" ? Be(...n.hs_color) : n.color_temp_kelvin ? $i(n.color_temp_kelvin) : [255, 170, 0])).map((d) => Math.round(Math.max(0, Math.min(255, d))));
    return "--light:rgb(" + r.join(",") + ");--light-ink:" + (Jt(r) ? "#26221e" : "#ffffff");
  }
  const vn = (e) => {
    var n;
    return e.startsWith("light.") && ((n = b[e]) == null ? void 0 : n.state) === "on" ? ' data-light style="' + La(e) + '"' : "";
  }, Lt = (e) => {
    const n = Uo(e);
    return n.length ? n.some((r) => r !== "onoff") : ft(e).brightness != null;
  }, Ua = (e) => [ft(e).min_color_temp_kelvin || 2e3, ft(e).max_color_temp_kelvin || 6500], Dt = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Aa(e) {
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
  const Pn = (e) => {
    var n;
    return ft(e).current_position ?? (((n = b[e]) == null ? void 0 : n.state) === "closed" ? 0 : 100);
  }, ma = (e) => {
    var n;
    return Da("pos", e, ((n = C.get(e)) == null ? void 0 : n.pos) ?? Pn(e));
  }, Qt = (e) => {
    var n;
    return Da("tilt", e, ((n = C.get(e)) == null ? void 0 : n.tilt) ?? ft(e).current_tilt_position);
  };
  function _t(e) {
    var h;
    const n = b[e];
    if (!n) return "Not found";
    if (n.state === "unavailable") return "Unavailable";
    const r = n.attributes, d = e.split(".")[0];
    if (d === "light") {
      if (n.state !== "on") return "Off";
      const x = r.color_temp_kelvin;
      return (Lt(e) ? mo(n) + "%" : "On") + (r.color_mode === "color_temp" && x ? " · " + Number(x).toLocaleString() + "k" : md.includes(r.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (n.state === "off" ? "Off" : vt(r.hvac_action || n.state)) + " · " + Ie(r.current_temperature) + " °C now";
    if (d === "cover") {
      const x = Pn(e), S = r.current_tilt_position;
      return n.state === "opening" || n.state === "closing" ? vt(n.state) + " - " + x + "%" : (x <= 0 ? "Closed" : x >= 100 ? "Open" : "Partially open") + (S > 0 && S < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return n.state !== "on" ? "Off" : vt(r.action || "on") + " · " + r.current_humidity + "% now";
    if (d === "vacuum") return vt(n.state) + (n.state === "cleaning" && ((h = r.rooms) != null && h.length) ? " · " + r.rooms.join(", ") : "") + (r.battery_level != null ? " · " + r.battery_level + "%" : "");
    if (d === "media_player") return n.state === "playing" || n.state === "paused" ? (n.state === "paused" ? "Paused · " : "") + (r.media_title || "Playing") : vt(n.state);
    if (d === "alarm_control_panel") return Oc[n.state] || vt(n.state);
    if (d === "lock" || d === "valve") return vt(n.state);
    if (d === "switch") return n.state === "on" ? "On" : "Off";
    if (d === "plant") return n.state === "ok" ? "Healthy" : vt(r.problem);
    if (d === "binary_sensor")
      return r.device_class === "battery" ? n.state === "on" ? "Low" : "Normal" : r.device_class === "problem" ? n.state === "on" ? "Problem" : "OK" : r.device_class === "moisture" ? n.state === "on" ? "Wet" : "Dry" : fl.includes(r.device_class) ? n.state === "on" ? "Open" : "Closed" : n.state === "on" ? "Detected" : "Clear";
    if (r.rang) return "Rang at " + Dt(r.rang);
    const p = o();
    if (p != null && p.formatEntityState && !ji(e))
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
  const _a = (e) => e >= 1e3 ? Ie(e / 1e3, 2) + " kW" : Math.round(e).toLocaleString() + " W";
  function da(e) {
    const n = o();
    e.querySelectorAll("[data-icon-for]").forEach((r) => {
      var y;
      const d = b[r.dataset.iconFor], p = r.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && d && !p) {
        let h = r.firstElementChild;
        (!h || h.localName !== "ha-state-icon") && (r.textContent = "", h = document.createElement("ha-state-icon"), r.appendChild(h)), h.hass = n, h.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let h = r.firstElementChild;
        (!h || h.localName !== "ha-icon") && (r.textContent = "", h = document.createElement("ha-icon"), r.appendChild(h)), h.icon = p || ((y = d == null ? void 0 : d.attributes) == null ? void 0 : y.icon) || "mdi:circle-medium";
      } else r.textContent || (r.textContent = (r.dataset.letter || Ae(r.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    });
  }
  const Ya = (e) => {
    var n, r, d;
    return e.startsWith("light.") && b[e] && !ft(e).icon && !((d = (r = (n = o()) == null ? void 0 : n.entities) == null ? void 0 : r[e]) != null && d.icon) ? "mdi:lightbulb" : "";
  }, Gt = (e, n, r) => (n = n || Ya(e), ' data-icon-for="' + ie(e) + '"' + (n ? ' data-icon-name="' + ie(n) + '"' : "") + (r ? ' data-letter="' + ie(r) + '"' : "")), Kt = (e) => e.endsWith("_solar_power") ? "mdi:solar-power-variant" : ft(e).rang ? "mdi:doorbell" : "", xt = (e, n, r, d) => ie([e, n, r, d ? JSON.stringify(d) : ""].join("|")), Za = (e) => ie(JSON.stringify(e));
  function Ka(e, n) {
    var p, y;
    const r = ie(Ae(n) + ", " + _t(n));
    return '<div class="activityRow' + (Number.isFinite(Number((p = b[n]) == null ? void 0 : p.state)) && ((y = b[n]) == null ? void 0 : y.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + ie(e + "|" + n) + '" aria-label="' + r + '. Show the last 24 hours"' : '" aria-label="' + r + '"') + '><div class="tfIcon" aria-hidden="true"' + Gt(n, Kt(n)) + '></div><div><div class="activityRowName">' + ie(Ae(n)) + '</div><div class="activityRowMeta">' + ie(_t(n)) + "</div></div></div>";
  }
  const go = (e, n, r) => '<div class="activityRow" aria-label="' + ie(e + ", " + n) + '"><div class="tfIcon" aria-hidden="true"' + Gt("", r, e) + '></div><div><div class="activityRowName">' + ie(e) + '</div><div class="activityRowMeta">' + ie(n) + "</div></div></div>";
  function _(e) {
    var r;
    const n = ((r = b[e]) == null ? void 0 : r.state) === "on";
    return '<div class="activityRow tfPlug' + (n ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + xt("switch", "toggle", e) + '" aria-label="Turn ' + ie(Ae(e)) + (n ? " off" : " on") + '"' + Gt(e) + '></button><div><div class="activityRowName">' + ie(Ae(e)) + '</div><div class="activityRowMeta">' + ie(_t(e)) + "</div></div></div>";
  }
  const A = (e) => {
    var n;
    return ((n = Se.get(e)) == null ? void 0 : n.name) ?? Ae(e);
  }, P = (e) => {
    var n;
    return ((n = Se.get(e)) == null ? void 0 : n.text) ?? _t(e);
  };
  function K(e) {
    var r;
    const n = (r = Se.get(e)) == null ? void 0 : r.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (n ? Gt("", n, A(e)) : Gt(e, Kt(e))) + '></div><div><div class="activityRowName">' + ie(A(e)) + '</div><div class="activityRowMeta">' + ie(P(e)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + ie(A(e)) + '’s last 24 hours">' + pd + '</button></div><svg class="tfGraph" data-graph="' + ie(e) + '" role="img" aria-label="' + ie(A(e)) + ', last 24 hours"></svg></div>';
  }
  function pe(e, n, r, d, p = "", y = null, h = "") {
    const x = j && j.key === e;
    return '<section class="card tfCard' + (h ? " " + h : "") + (x ? " open" : "") + '" data-tf data-k="' + ie(e) + '" style="order:' + n + (x && j.h ? ";min-height:" + j.h + "px" : "") + '" aria-label="' + ie(r) + '"><div class="activityHeader">' + (y ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + ie(y) + '" aria-label="' + ie(r + ", " + _t(y) + ". More info") + '">' + ie(r) + "</button>" : '<div class="activityTitle">' + ie(r) + "</div>") + "</div>" + (x ? K(j.id) : '<div class="activityRows">' + d.join("") + "</div>" + p) + "</section>";
  }
  function me(e, n) {
    const r = "readings:" + e.id, d = e.readings.map((p) => Ka(r, p));
    return e.power != null && d.push(go("Power now", _a(e.power), "mdi:flash")), pe(r, n, "Readings", d.concat(e.plugs.map(_)));
  }
  function he(e, n) {
    var x;
    const r = "energy:" + e.id, [d, p] = [e.solar.find((S) => S.endsWith("_power")), e.solar.find((S) => S.endsWith("_today"))], y = [d, p].filter(Boolean).map((S) => Ka(r, S)), h = Number(((x = b[d]) == null ? void 0 : x.state) || 0) * 1e3;
    return Qe.grid && (y.push(Ka(r, Qe.grid)), y.push(go("House use", _a(h + Number(b[Qe.grid].state)), "mdi:home-lightning-bolt"))), pe(r, n, "Energy", y, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const ke = (e, n) => pe("plant:" + e.id, n, Ae(e.id), e.readings.map((r) => Ka("plant:" + e.id, r)), "", e.id);
  function be(e, n, r, d, p, y, h = null) {
    const x = r == null ? null : Math.max(0, Math.min(1, r)), S = x == null ? 0 : Math.round(x * 100);
    return '<div class="tfBar ' + e + '" role="slider" tabindex="0" aria-label="' + ie(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + S + '"' + (p ? ' aria-valuetext="' + ie(p) + '"' : "") + ' data-drag="' + ie(e + "|" + n) + '">' + (h != null ? '<span class="was" aria-hidden="true" style="left:' + h + '%"></span>' : "") + (y ? x == null ? "" : '<b style="left:' + S + '%"></b>' : '<i style="width:' + S + '%"></i>') + "</div>";
  }
  const Pe = "move-assistant-house-last-bright", He = (() => {
    try {
      return JSON.parse(gi.get(Pe)) || {};
    } catch {
      return {};
    }
  })();
  let Ke = 0;
  const qe = (e, n) => {
    !n || He[e] === n || (He[e] = n, clearTimeout(Ke), Ke = setTimeout(() => gi.set(Pe, JSON.stringify(He)), 500));
  }, De = (e, n, r, d) => '<div class="tfStep" role="group" aria-label="' + ie(e) + '"><button type="button" data-act="' + r + '" aria-label="Lower ' + ie(e.toLowerCase()) + '">−</button><output>' + ie(n) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + ie(e.toLowerCase()) + '">+</button></div>', ze = (e, n, r) => '<div class="' + e + '" role="group" aria-label="' + ie(n) + '">' + r.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + ie(d.aria) + '"' : "") + ">" + (d.html || ie(d.label)) + "</button>").join("") + "</div>", Ne = (e, n) => "width:" + Math.round(Math.max(0, Math.min(1, (e - n * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * n / 3).toFixed(2), tt = (e) => "left:calc(3px + " + e / 100 + " * (100% - 6px))", mt = (e, n) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + ie(Ae(e)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-blocks="' + ie(e) + '">' + [0, 1, 2, 3].map((r) => '<span><i style="' + Ne(n, r) + '"></i><b' + (n >= (r + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (r + 1) * 25 + "%</b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + tt(n) + '">' + Math.round(n) + "%</output></div>";
  function Pt(e, n) {
    e.querySelectorAll(":scope>span").forEach((d, p) => {
      d.firstElementChild.setAttribute("style", Ne(n, p)), d.lastElementChild.classList.toggle("lit", n >= (p + 1) * 25 - 12);
    });
    const r = e.querySelector(".tfTip");
    r.setAttribute("style", tt(n)), r.textContent = Math.round(n) + "%", e.setAttribute("aria-valuenow", String(Math.round(n))), e.setAttribute("aria-valuetext", Math.round(n) + "% open");
  }
  const Tt = (e, n) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + ie(Ae(e)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-drag="tilt|' + ie(e) + '"><i style="width:calc((100% - 6px) * ' + n / 100 + ')"></i><span' + (n > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (n > 92 ? ' class="lit"' : "") + ">Open</span></div>", tn = (e, n, r) => '<div class="tfCoverBtns" role="group" aria-label="' + ie(Ae(e)) + '">' + [
    dt(e, Gh) && ["open", "Open", "open_cover", n >= 100 && !r],
    dt(e, Yh) && ["stop", "Stop", "stop_cover", !1],
    dt(e, Uh) && ["close", "Close", "close_cover", n <= 0 && !r]
  ].filter(Boolean).map(([d, p, y, h]) => '<button type="button" data-act="' + xt("cover", y, e) + '" aria-label="' + p + '"' + (h ? " disabled" : "") + ">" + Zh[d] + "</button>").join("") + "</div>", Ln = (e, n) => '<button class="tfIcon' + (n.art ? " art" : "") + '" type="button" data-act="' + n.button.act + '" aria-label="' + ie(n.button.label) + '"' + (n.art ? ' style="background-image:url(&quot;' + ie(n.art) + '&quot;)"' : Gt(e, n.icon)) + "></button>", ea = (e) => '<button class="tfName" type="button" data-more="' + ie(e) + '" aria-label="' + ie(Ae(e) + ", " + _t(e) + ". More info") + '"><span class="activityRowName">' + ie(Ae(e)) + '</span><span class="activityRowMeta">' + ie(_t(e)) + "</span></button>";
  function In(e, n = !1, r = null) {
    if (e.startsWith("light.") && na(e)) return '<div class="tfDac" data-k="' + ie(e) + '" data-dac="' + (n ? "more:" : r ? "dash:" : "tile:") + ie(e) + '"></div>';
    const d = Zo(e), p = r || (n && e.startsWith("light.") ? ["bright"] : null), y = d.sections.map((h, x) => h && (!p || p.includes((d.parts || [])[x])) ? h : "").filter(Boolean);
    return '<div class="tfAction' + (d.on ? " on" : "") + '" data-k="' + ie(e) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + vn(e) + '><div class="tfActionHead">' + Ln(e, d) + ea(e) + "</div>" + y.join("") + "</div>";
  }
  const ta = "dual-controller-v3", ga = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.4/dist/dual-axis-controller-v4.js";
  let ca = null;
  async function wi() {
    if (ca || customElements.get(ta)) return;
    ca = "loading";
    const e = await Promise.resolve().then(() => I({ type: "lovelace/resources" })).catch(() => null), n = Array.isArray(e) && e.some((d) => /dual-axis-controller/i.test(d.url || ""));
    if (await Promise.race([customElements.whenDefined(ta), new Promise((d) => setTimeout(d, n ? 8e3 : 0))]), customElements.get(ta)) return;
    const r = Object.assign(document.createElement("script"), { src: ga });
    r.onerror = () => {
      ca = "failed", U();
    }, document.head.appendChild(r);
  }
  const Hn = /* @__PURE__ */ new Map(), gt = (e) => (qt.lightStyles[e] || qt.lights) === "dac", yn = () => qt.lights === "dac" || Object.values(qt.lightStyles).includes("dac");
  function na(e) {
    return gt(e) && !!customElements.get(ta);
  }
  const vo = (e) => qt.lightPads[e] || qt.dacPad, Ea = () => {
    const e = o();
    return e && {
      ...e,
      themes: { ...e.themes || {}, darkMode: !m.classList.contains("light") },
      callService: (n, r, d, ...p) => e.callService(n, ...lo(n, r, d), ...p)
    };
  }, Yo = ".halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", Et = ".hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}", mn = (e, n) => {
    !e.shadowRoot || e.shadowRoot.querySelector("style[data-tf]") || (e.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Et + (n ? Yo : "") })).dataset.tf = "");
  }, bn = /* @__PURE__ */ new Map(), vs = new ResizeObserver((e) => e.forEach(({ target: n }) => {
    const r = n.parentElement;
    !r || !n.offsetHeight || (r.style.removeProperty("min-height"), bn.set(r.dataset.dac, r.offsetHeight));
  }));
  function Xi(e) {
    e.querySelectorAll("[data-dac]").forEach((n) => {
      const r = n.dataset.dac, d = r.startsWith("dash:");
      let p = Hn.get(r);
      if (!p) {
        const y = r.slice(r.indexOf(":") + 1);
        p = document.createElement(ta), p.setConfig({ type: "custom:" + ta, entity: y, pad: vo(y), ...d ? { tap_action: { action: "none" } } : {} }), Hn.set(r, p);
      }
      p.hass = Ea(), p.parentNode !== n && n.replaceChildren(p, ...n.querySelectorAll(":scope > .tfEditChips")), !p.offsetHeight && bn.has(r) && (n.style.minHeight = bn.get(r) + "px"), vs.observe(p), mn(p, d);
    });
  }
  function bs() {
    const e = Ea();
    Hn.forEach((n, r) => {
      n.isConnected ? n.hass = e : Hn.delete(r);
    });
  }
  customElements.whenDefined(ta).then(() => {
    v && (T != null && T.querySelector("[data-tf]")) && Ws(ao);
  });
  const Da = (e, n, r) => Oe.has(e + "|" + n) ? Oe.get(e + "|" + n) : r;
  function Zo(e) {
    var y;
    const n = b[e], r = n.attributes, d = e.split(".")[0], p = (h, x) => ({ act: xt(h, "toggle", e), label: x });
    if (d === "light") {
      const h = n.state === "on", x = Uo(e), [S, R] = Ua(e), F = Da("bright", e, mo(n));
      h && qe(e, mo(n));
      const B = Da("ct", e, h && r.color_mode === "color_temp" ? r.color_temp_kelvin : null), Y = Da("hue", e, h && md.includes(r.color_mode) && r.hs_color ? r.hs_color[0] : null);
      return { on: h, button: p("light", "Turn " + Ae(e) + (h ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Lt(e) && be("bright", e, F / 100, Ae(e) + " brightness", F + "%", !1, h ? null : He[e] ?? null),
        x.includes("color_temp") && be("ct", e, B == null ? null : (B - S) / (R - S), Ae(e) + " warm to cool", B == null ? "" : Math.round(B) + " kelvin", !0),
        x.some((xe) => md.includes(xe)) && be("hue", e, Y == null ? null : Y / 360, Ae(e) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const h = r.target_temp_step || 0.5, x = Number(r.temperature);
      return { on: n.state !== "off", tone: n.state === "cool" || r.hvac_action === "cooling" ? "cool" : "heat", button: p("climate", "Turn " + Ae(e) + (n.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(x) && De("Target temperature", Ie(x) + " °C", xt("climate", "set_temperature", e, { temperature: x - h }), xt("climate", "set_temperature", e, { temperature: x + h })),
        ze("tfSeg", "Mode", (r.hvac_modes || []).map((S) => ({ label: vt(S), act: xt("climate", "set_hvac_mode", e, { hvac_mode: S }), pressed: n.state === S })))
      ] };
    }
    if (d === "cover") {
      const h = n.state === "opening" || n.state === "closing", x = n.state === "closed", S = ma(e), R = Qt(e);
      return { on: !x, tone: "blue", icon: Kh[ud(n)][x ? 1 : 0], button: p("cover", (x ? "Open " : "Close ") + Ae(e)), parts: ["blocks", "tilt", "buttons"], sections: [
        dt(e, Dc) && mt(e, S),
        R != null && Tt(e, R),
        tn(e, S, h)
      ] };
    }
    if (d === "humidifier") {
      const h = Number(r.humidity);
      return { on: n.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: p("humidifier", "Turn " + Ae(e) + (n.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(h) && De("Target humidity", h + "%", xt("humidifier", "set_humidity", e, { humidity: h - 1 }), xt("humidifier", "set_humidity", e, { humidity: h + 1 })),
        ((y = r.available_modes) == null ? void 0 : y.length) && ze("tfSeg", "Mode", r.available_modes.map((x) => ({ label: vt(x), act: xt("humidifier", "set_mode", e, { mode: x }), pressed: r.mode === x })))
      ] };
    }
    if (d === "media_player") {
      const h = n.state === "playing", x = n.state === "off" || n.state === "standby", S = Da("vol", e, r.volume_level), R = x ? { act: xt("media_player", dt(e, zh) ? "turn_on" : "toggle", e), label: "Turn " + Ae(e) + " on" } : n.state === "playing" || n.state === "paused" ? { act: xt("media_player", "media_play_pause", e), label: (h ? "Pause " : "Play ") + Ae(e) } : { act: xt("media_player", dt(e, jh) ? "turn_off" : "toggle", e), label: "Turn " + Ae(e) + " off" };
      return { on: !x, tone: "blue", art: !x && r.entity_picture ? r.entity_picture : null, button: R, parts: ["playback", "volume"], sections: x ? [] : [
        (dt(e, Ac) || dt(e, _c) || dt(e, Lc) || dt(e, Ec)) && ze("tfSeg", "Playback", [
          { html: hl.prev, aria: "Previous", act: xt("media_player", "media_previous_track", e), disabled: !dt(e, Ac) },
          { html: h ? hl.pause : hl.play, aria: h ? "Pause" : "Play", act: xt("media_player", "media_play_pause", e), disabled: !(dt(e, Lc) || dt(e, Ec)) },
          { html: hl.next, aria: "Next", act: xt("media_player", "media_next_track", e), disabled: !dt(e, _c) }
        ]),
        dt(e, Vh) && S != null && be("vol", e, S, Ae(e) + " volume", Math.round(S * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const h = n.state === "cleaning", x = r.rooms || [], S = (F) => x.includes(F) ? x.filter((B) => B !== F) : x.concat(F), R = xt("vacuum", h ? "pause" : "start", e, ji(e) ? { rooms: x } : null);
      return { on: h || n.state === "returning", tone: "blue", button: { act: R, label: (h ? "Pause " : "Start ") + Ae(e) }, parts: ["controls", "rooms"], sections: [
        ze("tfSeg", Ae(e), [
          { label: h ? "Pause" : "Start", act: R },
          { label: "Dock", act: xt("vacuum", "return_to_base", e), disabled: n.state === "docked" },
          { label: "Locate", act: xt("vacuum", "locate", e) }
        ]),
        ji(e) && ze("tfChips", "Rooms to clean", Qe.rooms.filter((F) => F.id !== "balcony").map((F) => ({ label: F.name, act: xt("vacuum", "set_rooms", e, { rooms: S(F.name) }), pressed: x.includes(F.name) })))
      ] };
    }
    if (d === "lock") {
      const h = n.state === "locked";
      return { on: !h, tone: "heat", button: { act: xt("lock", h ? "unlock" : "lock", e), label: (h ? "Unlock " : "Lock ") + Ae(e) }, parts: ["controls"], sections: [
        ze("tfSeg", Ae(e), [
          { label: "Lock", act: xt("lock", "lock", e), pressed: h },
          { label: "Unlock", act: xt("lock", "unlock", e), pressed: n.state === "unlocked" },
          dt(e, af) && { label: "Open", act: xt("lock", "open", e), pressed: n.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const h = n.state === "disarmed";
      return { on: !h, tone: n.state === "triggered" ? "alarm" : "blue", button: { act: xt("alarm_control_panel", h ? "alarm_arm_away" : "alarm_disarm", e), label: h ? "Arm " + Ae(e) + ", away" : "Disarm " + Ae(e) }, parts: ["controls"], sections: [
        ze("tfSeg", Ae(e), of.filter(([, , , x]) => !x || dt(e, x)).map(([x, S, R]) => ({ label: S, act: xt("alarm_control_panel", R, e), pressed: n.state === x })))
      ] };
    }
    if (d === "valve") {
      const h = n.state === "open";
      return { on: h, tone: "blue", icon: "mdi:sprinkler-variant", button: p("valve", (h ? "Close " : "Open ") + Ae(e)), parts: ["controls"], sections: [
        ze("tfSeg", Ae(e), [
          { label: "Open", act: xt("valve", "open_valve", e), pressed: h },
          { label: "Close", act: xt("valve", "close_valve", e), pressed: !h }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Ae(e) }, sections: [] };
  }
  const xi = (e) => (Number.isInteger(Number(e)) ? String(Number(e)) : Ie(e)) + "°";
  function Ji(e) {
    const n = (de) => e.readings.find((H) => ft(H).device_class === de), r = n("temperature"), d = n("humidity"), p = (de) => {
      var H;
      return Number((H = b[de]) == null ? void 0 : H.state);
    }, y = (de) => e.actions.filter((H) => de.test(H)), h = e.lights.filter((de) => {
      var H;
      return ((H = b[de]) == null ? void 0 : H.state) === "on";
    }), x = y(/^cover\./), S = x.filter((de) => {
      var H;
      return ((H = b[de]) == null ? void 0 : H.state) !== "closed";
    }), R = [...new Set(x.map((de) => ud(b[de])))], F = y(/^climate\./)[0], B = y(/^humidifier\./)[0], Y = y(/^media_player\./), xe = Y.find((de) => {
      var H;
      return ((H = b[de]) == null ? void 0 : H.state) === "playing";
    }) || Y.find((de) => {
      var H;
      return ((H = b[de]) == null ? void 0 : H.state) === "paused";
    }), Re = e.plugs.filter((de) => {
      var H;
      return ((H = b[de]) == null ? void 0 : H.state) === "on";
    }), le = [];
    if (r && Number.isFinite(p(r)) && le.push({ key: "temp", id: r, kind: "reading", icon: uo.temp, label: "Temperature", value: Ie(p(r)) + "°" }), d && Number.isFinite(p(d)) && le.push({ key: "hum", id: d, kind: "reading", icon: uo.hum, label: "Humidity", value: Math.round(p(d)) + "%" }), e.lights.length && le.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: uo.lights,
      label: "Lights",
      value: h.length ? h.length + " of " + e.lights.length + " on" : "All off",
      short: h.length ? h.length + " on" : "Off",
      on: h.length > 0,
      light: h.length ? La(h[0]) : "",
      acts: e.lights.map((de) => ["light", h.length ? "turn_off" : "turn_on", de]),
      aria: (h.length ? "Turn off" : "Turn on") + " the lights in " + e.name
    }), x.length) {
      const de = R.length === 1 ? $h[R[0]] : "covers", H = Math.round(x.reduce((ge, je) => ge + Pn(je), 0) / x.length);
      le.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: uo.covers,
        label: vt(de),
        value: H <= 0 ? "Closed" : H >= 100 ? "Open" : H + "% open",
        short: H <= 0 ? "Closed" : H + "%",
        on: S.length > 0,
        acts: x.map((ge) => ["cover", S.length ? "close_cover" : "open_cover", ge]),
        aria: (S.length ? "Close the " : "Open the ") + de + " in " + e.name
      });
    }
    if (F) {
      const de = ft(F), H = b[F].state === "off";
      le.push({
        key: "climate",
        kind: "control",
        tone: de.hvac_action === "cooling" ? "cool" : "heat",
        icon: uo.climate,
        label: Ae(F),
        value: H ? "Off" : vt(de.hvac_action || b[F].state) + " · " + xi(de.temperature),
        short: H ? "Off" : xi(de.temperature),
        on: !H,
        acts: [["climate", "toggle", F]],
        aria: "Turn " + Ae(F) + (H ? " on" : " off")
      });
    }
    if (B) {
      const de = b[B].state === "on";
      le.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: uo.humidifier,
        label: Ae(B),
        value: de ? "On · " + ft(B).humidity + "%" : "Off",
        short: de ? ft(B).humidity + "%" : "Off",
        on: de,
        acts: [["humidifier", "toggle", B]],
        aria: "Turn " + Ae(B) + (de ? " off" : " on")
      });
    }
    if (Y.length) {
      const de = xe || Y[0], H = b[de], ge = H.state === "playing";
      le.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: uo.media,
        label: Ae(de),
        value: _t(de),
        short: ge ? "Playing" : H.state === "paused" ? "Paused" : vt(H.state),
        on: ge,
        acts: [["media_player", H.state === "playing" || H.state === "paused" ? "media_play_pause" : "toggle", de]],
        aria: (ge ? "Pause " : "Play ") + Ae(de)
      });
    }
    return e.plugs.length && le.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: uo.plugs,
      label: "Plugs",
      value: Re.length ? Re.length + " of " + e.plugs.length + " on" : "All off",
      short: Re.length ? Re.length + " on" : "Off",
      on: Re.length > 0,
      acts: e.plugs.map((de) => ["switch", Re.length ? "turn_off" : "turn_on", de]),
      aria: (Re.length ? "Turn off" : "Turn on") + " the plugs in " + e.name
    }), e.alerts.forEach((de) => le.push(ft(de).device_class === "moisture" ? { key: "alert:" + de, kind: "alert", icon: uo.alert, label: "Water leak" } : { key: "note:" + de, kind: "note", icon: uo.door, label: Ae(de) + " " + _t(de).toLowerCase() })), le;
  }
  const Er = (e, n) => {
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
          return ((y = b[p]) == null ? void 0 : y.state) === "playing";
        }) || d.find((p) => {
          var y;
          return ((y = b[p]) == null ? void 0 : y.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[n] || [];
  }, Dr = (e, n, r) => '<button class="' + n + (e.on ? " on" : "") + '" type="button" data-tone="' + e.tone + '" data-acts="' + Za(e.acts) + '" aria-label="' + ie(e.aria) + '" aria-pressed="' + e.on + '">' + r + "</button>", Sl = (e) => '<button class="tfAName" type="button" data-go="' + ie(e.id) + '" aria-label="Open ' + ie(e.name) + '">' + ie(e.name) + "</button>";
  function ws(e, n, r = !1) {
    const d = n.find((x) => x.key === "lights"), p = !!(d != null && d.on), y = p && d.light ? ' data-light style="' + d.light + '"' : "", h = '<span class="tfAreaGlyph"' + Gt("area:" + e.id, e.icon || "mdi:texture-box", e.name) + "></span>";
    return r || !d ? '<span class="tfIcon tfAreaIcon' + (p ? " on" : "") + '"' + y + ' aria-hidden="true">' + h + "</span>" : '<button class="tfIcon tfAreaIcon' + (p ? " on" : "") + '" type="button"' + y + ' data-acts="' + Za(d.acts) + '" aria-label="' + ie(d.aria) + '" aria-pressed="' + p + '">' + h + "</button>";
  }
  const xs = (e) => e.filter((n) => n.kind === "alert" || n.kind === "note").map((n) => '<span class="sourceTag">' + ie(n.label) + "</span>").join(" "), Qi = (e) => e.readings.find((n) => ft(n).device_class === "temperature") || [...e.readings, ...e.solar, ...e.openings, ...e.actions, ...e.plugs].find((n) => b[n]) || null, ys = (e, n) => {
    const r = Ae(n);
    return r.toLowerCase().startsWith(e.name.toLowerCase() + " ") ? vt(r.slice(e.name.length + 1)) : r;
  };
  function Rr(e) {
    const n = b[e], r = ft(e), d = e.split(".")[0], p = Number(n.state);
    if (n.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(p)) {
      if (r.device_class === "temperature") return { text: xi(p) };
      const y = r.unit_of_measurement || "";
      return y === "%" ? { text: Math.round(p) + "%" } : { text: Ie(p, Number.isInteger(p) ? 0 : 1), unit: y };
    }
    if (d === "climate" && (r.current_temperature ?? r.temperature) != null) return { text: xi(r.current_temperature ?? r.temperature) };
    if (d === "light") return { text: n.state !== "on" ? "Off" : Lt(e) ? mo(n) + "%" : "On" };
    if (d === "cover") {
      const y = Pn(e);
      return { text: y <= 0 ? "Closed" : y >= 100 ? "Open" : y + "%" };
    }
    return d === "humidifier" ? { text: n.state === "on" ? r.humidity + "%" : "Off" } : d === "media_player" ? { text: n.state === "playing" ? "Playing" : n.state === "paused" ? "Paused" : vt(n.state) } : { text: _t(e) };
  }
  const bo = (e, n, r) => {
    const d = r.find((x) => x.key === "temp"), p = r.find((x) => x.key === "hum"), y = ft(n), h = b[n].state === "off";
    return n.startsWith("climate.") ? [ys(e, n), h ? "Off" : vt(y.hvac_action || b[n].state) + (y.temperature != null ? " · " + xi(y.temperature) : ""), p && p.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === n) && ys(e, n), d && d.id !== n && d.value, p && p.id !== n && p.value + " humidity"].filter(Boolean).join(" · ");
  };
  function ks(e, n, r) {
    const d = r && Rr(r), p = r ? bo(e, r, n) : "", y = (x) => {
      const S = Er(e, x.key);
      return S.length === 1 ? S[0] : "group:" + e.id + ":" + x.key;
    }, h = n.filter((x) => x.kind === "control").slice(0, 4).map((x) => '<div class="tfATile' + (x.on ? " on" : "") + '" data-tone="' + x.tone + '"' + (x.light ? ' data-light style="' + x.light + '"' : "") + ">" + Dr(x, "tfIcon", x.icon) + '<button class="tfName" type="button" data-more="' + ie(y(x)) + '" aria-label="' + ie(e.name + " " + x.label.toLowerCase() + ", " + x.value + ". Open") + '"><span class="activityRowName">' + ie(x.label) + '</span><span class="activityRowMeta">' + ie(x.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + ws(e, n) + '<div class="tfATitle">' + Sl(e) + xs(n) + "</div></div>" + (r ? '<button class="tfABig" type="button" data-more="' + ie(r) + '" aria-label="' + ie(Ae(r) + ", " + _t(r) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + ie(d.text) + (d.unit ? '<span class="tfABigUnit">' + ie(d.unit) + "</span>" : "") + "</span>" + (p ? '<span class="tfABigSub">' + ie(p) + "</span>" : "") + "</button>" : "") + (h.length ? '<div class="tfATiles">' + h.join("") + "</div>" : "");
  }
  function Br(e) {
    const n = e.id === ve, r = Ji(e), d = Qi(e), p = d && Rr(d), y = [...r.filter((h) => h.kind === "control"), ...r.filter((h) => h.kind !== "control" && h.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (n ? " active" : "") + '" data-area="' + ie(e.id) + '" tabindex="0" aria-expanded="' + n + '" aria-label="' + ie(e.name) + '"><div class="panelExpanded"' + (n ? "" : " inert") + ">" + ks(e, r, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + ws(e, r, !0) + '<span class="tfACName">' + ie(e.name) + '</span></div><span class="tfACMain">' + (p ? ie(p.text + (p.unit ? " " + p.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + y.map((h) => '<span class="tfACTile"><span class="tfIcon' + (h.kind === "alert" ? " alert" : "") + '"' + (h.on && h.light ? ' data-light style="' + h.light + '"' : "") + ">" + h.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let va = [];
  const Nr = (e) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + e + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + va.map(Br).join("") + "</section></div>", Tl = () => [
    { key: "home", name: "Home", ids: Qe.homeVacuums },
    ...Qe.rooms.map((e) => ({ key: "room:" + e.id, name: e.name, room: e, ids: e.actions }))
  ], wo = (e, n, r) => e + " " + (e === 1 ? n : r), An = () => (V.favourites ?? ae.favorite_entities ?? []).filter((e) => b[e]);
  function It() {
    if (!We) {
      const n = Object.entries(at).sort((d, p) => p[1] - d[1]).map(([d]) => d), r = Qe.rooms.flatMap((d) => d.actions);
      We = [.../* @__PURE__ */ new Set([...fe, ...n, ...r.filter((d) => Zo(d).on), ...r])];
    }
    const e = An();
    return We.filter((n) => b[n] && b[n].state !== "unavailable" && !e.includes(n));
  }
  let Ms = !1;
  function Cs() {
    if (!Ms || V.favSeeded || !Qe.rooms.length) return;
    const e = (r) => Object.keys(b).find((d) => ji(d) && r(d)), n = [e((r) => r.startsWith("climate.")), e((r) => r.startsWith("cover.") && /curtain/.test(r)), e((r) => r.startsWith("valve.")), Qe.security.locks[0]];
    V = { ...V, favourites: [.../* @__PURE__ */ new Set([...V.favourites ?? ae.favorite_entities ?? [], ...n.filter(Boolean)])], favSeeded: !0 }, Tn();
  }
  const yi = () => V.suggest ?? !ae.hide_suggested_entities;
  function Ko() {
    const e = new Set(V.favHidden || []), n = An().filter((d) => !e.has(d)), r = yi() ? It().filter((d) => !e.has(d) && Or(d)) : [];
    return [...n, ...r].slice(0, sf);
  }
  const Ll = (e) => {
    const n = An().includes(e);
    return '<button class="tfStar" type="button" data-star="' + ie(e) + '" aria-pressed="' + n + '" aria-label="Favourite: ' + ie(Ae(e)) + '">' + nf(n) + "</button>";
  };
  function Ht(e, { area: n = !1, star: r = !1, plain: d = !1, say: p = null, alert: y = !1 } = {}) {
    var Re, le, de, H, ge, je;
    const h = d && ((ge = (Re = o()) == null ? void 0 : Re.devices) == null ? void 0 : ge[(H = (de = (le = o()) == null ? void 0 : le.entities) == null ? void 0 : de[e]) == null ? void 0 : H.device_id]), x = h && (h.name_by_user || h.name) || Ae(e), S = e.split(".")[0], R = !d && ml.includes(S) ? Zo(e) : null, F = R ? R.on : ["on", "open", "playing"].includes((je = b[e]) == null ? void 0 : je.state), B = d ? null : R ? R.button : Xh.includes(S) ? { act: xt(S, "toggle", e), label: "Turn " + Ae(e) + (F ? " off" : " on") } : S === "scene" || S === "script" ? { act: xt(S, "turn_on", e), label: "Run " + Ae(e) } : null, Y = (p ?? _t(e)) + (n && wt.get(e) ? " · " + wt.get(e) : ""), xe = (R == null ? void 0 : R.icon) || Kt(e);
    return '<div class="activityRow' + (B ? " tfPlug" : "") + (F ? " on" : "") + (r ? " tfPick" : "") + (y ? " alert" : "") + '" data-k="' + ie((n ? "fav:" : "row:") + e) + '" data-tone="' + (S === "light" ? "light" : (R == null ? void 0 : R.tone) || "blue") + '"' + vn(e) + ">" + (B && !r ? '<button class="tfIcon" type="button" data-act="' + B.act + '" aria-label="' + ie(B.label) + '"' + Gt(e, xe) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Gt(e, xe) + "></div>") + '<button class="tfName" type="button" data-more="' + ie(e) + '" aria-label="' + ie(x + ", " + Y + ". More info") + '"><span class="activityRowName">' + ie(x) + '</span><span class="activityRowMeta">' + ie(Y) + "</span></button>" + (r ? Ll(e) : "") + "</div>";
  }
  const Ra = () => {
    var e;
    return b[(e = V.sources) == null ? void 0 : e.weather] ? V.sources.weather : b["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(b).find((n) => n.startsWith("weather."));
  };
  function $o() {
    var r;
    const e = (d) => Object.keys(b).filter((p) => p.startsWith("binary_sensor.") && d.includes(ft(p).device_class));
    return ((r = ce.alert_entities) != null && r.length ? ce.alert_entities : [...e(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...e(fl).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => b[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(b[d.entity].state) }));
  }
  function Al() {
    const e = Object.keys(hd), n = /* @__PURE__ */ new Set(), r = [];
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
  function er() {
    var de;
    const e = ((de = o()) == null ? void 0 : de.entities) || {}, n = (H) => ft(H).device_class, r = Object.keys(b).filter((H) => H.startsWith("sensor.") && n(H) === "battery" || H.startsWith("binary_sensor.") && ["battery", "problem"].includes(n(H))), d = Qe.rooms.flatMap((H) => H.plants.map((ge) => ge.id));
    if (!r.length && !d.length) return null;
    const p = (H) => {
      var je;
      const ge = (je = e[H]) == null ? void 0 : je.device_id;
      return !!ge && Object.keys(b).some((et) => {
        var en;
        return et.startsWith("binary_sensor.") && ((en = e[et]) == null ? void 0 : en.device_id) === ge && n(et) === "battery_charging" && b[et].state === "on";
      });
    }, y = (H) => H.startsWith("vacuum.") ? ft(H).battery_level <= 20 && b[H].state !== "docked" : H.startsWith("binary_sensor.") ? n(H) === "battery" && b[H].state === "on" : parseFloat(b[H].state) <= 20 && !p(H), h = [...r, ...Qe.vacuums].filter((H) => b[H] && y(H)), x = [...r.filter((H) => n(H) === "problem" && b[H].state === "on"), ...d.filter((H) => {
      var ge;
      return ((ge = b[H]) == null ? void 0 : ge.state) === "problem";
    })], S = r.filter((H) => b[H].state === "unavailable"), R = [.../* @__PURE__ */ new Set([...h, ...x, ...S])], F = (H) => {
      const ge = parseFloat(b[H].state);
      return n(H) === "battery" && Number.isFinite(ge) ? ge : 101;
    }, B = [...d, ...Qe.vacuums, ...[...r].sort((H, ge) => F(H) - F(ge))].filter((H) => b[H] && !R.includes(H)), Y = /* @__PURE__ */ new Map();
    B.forEach((H) => {
      var je;
      const ge = ((je = Qe.areaOf) == null ? void 0 : je.call(Qe, H)) || "";
      Y.set(ge, [...Y.get(ge) || [], H]);
    });
    const xe = (H) => {
      const ge = Qe.rooms.findIndex((je) => je.id === H);
      return H === "" ? 1 / 0 : ge < 0 ? Qe.rooms.length : ge;
    }, Re = [...Y.keys()].sort((H, ge) => xe(H) - xe(ge)), le = (H) => {
      var ge, je, et, en;
      return ((ge = Qe.rooms.find((zt) => zt.id === H)) == null ? void 0 : ge.name) || ((en = (et = (je = o()) == null ? void 0 : je.areas) == null ? void 0 : et[H]) == null ? void 0 : en.name) || H;
    };
    return {
      value: [h.length && wo(h.length, "low battery", "low batteries"), x.length && wo(x.length, "problem", "problems"), S.length && wo(S.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: R, alert: !0 }, ...Re.map((H) => ({ name: H ? le(H) : Re.length > 1 ? "Other devices" : "Devices", ids: Y.get(H) }))].filter((H) => H.ids.length)
    };
  }
  function ki() {
    var zn;
    const e = Qe.rooms, n = Qe.security, r = (Ge, Ft) => Ge.actions.filter((jl) => Ft.test(jl)), d = (Ge) => e.map((Ft) => ({ name: Ft.name, ids: Ge(Ft) })).filter((Ft) => Ft.ids.length), p = e.flatMap((Ge) => Ge.lights), y = p.filter((Ge) => {
      var Ft;
      return ((Ft = b[Ge]) == null ? void 0 : Ft.state) === "on";
    }).length, h = e.map((Ge) => Ge.readings.find((Ft) => ft(Ft).device_class === "temperature")).filter(Boolean).map((Ge) => Number(b[Ge].state)).filter(Number.isFinite), [x, S] = [Ie(Math.min(...h)), Ie(Math.max(...h))], R = e.flatMap((Ge) => r(Ge, /^media_player\./)), F = R.filter((Ge) => {
      var Ft;
      return ((Ft = b[Ge]) == null ? void 0 : Ft.state) === "playing";
    }).length, B = $o(), Y = B.filter((Ge) => Ge.severity === "warning" && Ge.on).length, xe = n.locks.filter((Ge) => {
      var Ft;
      return ["unlocked", "jammed", "open"].includes((Ft = b[Ge]) == null ? void 0 : Ft.state);
    }).length, Re = n.alarms.filter((Ge) => {
      var Ft;
      return ((Ft = b[Ge]) == null ? void 0 : Ft.state) === "disarmed";
    }).length, le = Y ? wo(Y, "warning", "warnings") : null, de = xe ? xe + " unlocked" : Re ? Re + " disarmed" : le ? null : "All secure", H = er(), ge = e.flatMap((Ge) => Ge.solar), je = ge.find((Ge) => Ge.endsWith("_power")), et = {
      light: p.length && { value: y ? y + " on" : "All off", groups: d((Ge) => Ge.lights) },
      climate: h.length && { value: x === S ? x + "°" : x + " - " + S + "°", groups: d((Ge) => [...Ge.readings.filter((Ft) => ["temperature", "humidity"].includes(ft(Ft).device_class)), ...r(Ge, /^(climate|humidifier)\./)]) },
      security: (n.alarms.length || n.locks.length) && { value: [le, de].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...n.alarms, ...n.locks] }, { name: "Doors and windows", ids: n.openings }].filter((Ge) => Ge.ids.length) },
      media_players: R.length && { value: F ? F + " playing" : "No media playing", groups: d((Ge) => r(Ge, /^media_player\./)) },
      maintenance: H,
      energy: Qe.grid && { value: _a(Number(((zn = b[je]) == null ? void 0 : zn.state) || 0) * 1e3 + Number(b[Qe.grid].state)) + " now", groups: [{ name: "Energy", ids: [...ge, Qe.grid] }] }
    }, en = [], zt = B.filter((Ge) => Ge.severity !== "warning" && Ge.on);
    return zt.length && en.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: wo(zt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: zt.map((Ge) => Ge.entity) }] }), Al().forEach((Ge) => {
      Ge.type !== "summary" ? en.push({ key: "path:" + Ge.path, name: Ge.label || Ge.path, icon: Ge.icon || "mdi:link-variant", colour: "", value: "" }) : !Ge.hidden && et[Ge.key] && !(V.hiddenSums || []).includes(Ge.key) && en.push({ key: Ge.key, ...hd[Ge.key], ...et[Ge.key] });
    }), en;
  }
  const tr = (e) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + ie(e.key) + '" data-k="sum:' + ie(e.key) + '" aria-label="' + ie(e.name + (e.value ? ", " + e.value : "")) + '"' + (e.key === "alerts" ? ' style="--sum:' + e.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + Gt(e.id || "", e.icon, e.name) + '></div><div><div class="activityRowName">' + ie(e.name) + "</div>" + (e.value ? '<div class="activityRowMeta">' + ie(e.value) + "</div>" : "") + "</div></div>";
  function Ba(e) {
    const n = An();
    V = { ...V, favourites: n.includes(e) ? n.filter((r) => r !== e) : [...n, e], favHidden: (V.favHidden || []).filter((r) => r !== e) }, Tn(), Ut();
  }
  function $a(e) {
    document.querySelector("home-assistant") && (we.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Ss(e, n) {
    if (e.startsWith("path:")) {
      $a(e.slice(5));
      return;
    }
    Ho("summary:" + e, n);
  }
  async function Xa() {
    const e = (h) => Promise.resolve().then(() => I(h)).catch(() => null), [n, r, d, p] = await Promise.all([
      e({ type: "frontend/get_user_data", key: Rc }),
      e({ type: "frontend/get_system_data", key: "home" }),
      e({ type: "frontend/get_system_data", key: "security" }),
      e({ type: "usage_prediction/common_control" })
    ]), y = (n == null ? void 0 : n.value) || {};
    V = { favourites: y.favourites ?? null, sources: y.sources, hiddenSums: y.hiddenSums, dash: y.dash, named: y.named, favHidden: y.favHidden, suggest: y.suggest, favSeeded: y.favSeeded }, ae = (r == null ? void 0 : r.value) || {}, ce = (d == null ? void 0 : d.value) || {}, fe = Array.isArray(p == null ? void 0 : p.entities) ? p.entities : [], We = null, Object.keys(b).length && Ut(), ba(), Ms = !0, Cs();
  }
  const Pr = "HomeCore";
  async function ba() {
    var d, p, y;
    const e = location.pathname.split("/")[1], n = V.named || [];
    if (!((p = (d = o()) == null ? void 0 : d.user) != null && p.is_admin) || !e || n.includes(e)) return;
    const r = () => {
      V = { ...V, named: [...n, e] }, Tn();
    };
    try {
      const h = (y = await I({ type: "lovelace/dashboards/list" })) == null ? void 0 : y.find((R) => R.url_path === e);
      if (!h || h.mode === "yaml") return;
      if (h.title === Pr) {
        r();
        return;
      }
      const x = await I({ type: "lovelace/config", url_path: e }), S = ((x == null ? void 0 : x.views) || []).flatMap((R) => [...R.cards || [], ...(R.sections || []).flatMap((F) => F.cards || [])]);
      if (!S.length || !S.every((R) => (R == null ? void 0 : R.type) === "custom:move-assistant-card" && R.layout === "test-focus")) return;
      await I({ type: "lovelace/dashboards/update", dashboard_id: h.id, title: Pr }), r();
    } catch {
    }
  }
  let Xo = null, Ir = 0, Mi = !1;
  const nr = (e) => {
    const n = e.split(".")[0], r = ft(e).device_class;
    return rf.includes(n) && (n !== "binary_sensor" || fl.includes(r) || !!qc[r]);
  }, ar = (e) => e.startsWith("binary_sensor.") ? qc[ft(e).device_class] : null;
  async function _l() {
    var e;
    if (!(Mi || Date.now() - Ir < 30 * 1e3)) {
      Mi = !0, Ir = Date.now();
      try {
        const n = Object.keys(((e = o()) == null ? void 0 : e.states) || {}).filter(nr), r = n.length ? await I({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: n }) : null;
        Xo = Array.isArray(r) ? r.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        Xo = null;
      }
      Mi = !1, Ut();
    }
  }
  function or() {
    const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = (p) => {
      if (!b[p.entity_id] || !nr(p.entity_id) || !Or(p.entity_id) || ["unavailable", "unknown"].includes(p.state)) return;
      if (ar(p.entity_id)) {
        const h = n.get(p.entity_id);
        p.state === "on" ? (!h || p.when > h.when + 1) && n.set(p.entity_id, { ...p, alarm: !0, cleared: null }) : h && !h.cleared && p.when > h.when && (h.cleared = p.when);
        return;
      }
      const y = e.get(p.entity_id);
      (!y || p.when > y.when + 1) && e.set(p.entity_id, p);
    };
    [...Xo || []].sort((p, y) => p.when - y.when).forEach(r);
    const d = Xo ? Ir / 1e3 - 5 : 0;
    return Object.keys(b).forEach((p) => {
      var x;
      const y = b[p], h = y.last_changed ? Date.parse(y.last_changed) / 1e3 : 0;
      h > d && r({ entity_id: p, state: y.state, when: h, context_user_id: (x = y.context) == null ? void 0 : x.user_id });
    }), [...e.values(), ...n.values()].sort((p, y) => y.when - p.when).slice(0, lf);
  }
  function Ts(e) {
    var d;
    const n = e.context_user_id && Object.keys(b).find((p) => p.startsWith("person.") && ft(p).user_id === e.context_user_id);
    if (n) return Ae(n);
    const r = (d = o()) == null ? void 0 : d.user;
    return r && e.context_user_id === r.id ? r.name : ["automation", "script"].includes(e.context_domain) || e.context_event_type === "automation_triggered" ? e.context_name || "Home Assistant" : "";
  }
  function Ci(e) {
    const n = e.entity_id.split(".")[0], r = String(e.state);
    return n === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[r] || vt(r).toLowerCase() : n === "cover" || n === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[r] || vt(r).toLowerCase() : n === "binary_sensor" ? r === "on" ? "opened" : "closed" : n === "climate" ? r === "off" ? "turned off" : "set to " + vt(r).toLowerCase() : n === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[r] || vt(r).toLowerCase() : n === "alarm_control_panel" ? (Oc[r] || vt(r)).toLowerCase() : n === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[r] || vt(r).toLowerCase() : r === "on" ? "turned on" : r === "off" ? "turned off" : vt(r).toLowerCase();
  }
  function El(e) {
    const n = e.entity_id, r = e.alarm && ar(n), d = Ae(n) + " " + (r ? r[0] : Ci(e)), p = r ? Dt(e.when * 1e3) + (e.cleared ? " · " + r[1] + " since " + Dt(e.cleared * 1e3) : "") : [Ts(e), Dt(e.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (r ? " alert" : "") + '"><div class="tfIcon' + (r ? " alert" : "") + '" aria-hidden="true"' + Gt(n, Kt(n)) + '></div><button class="tfName" type="button" data-more="' + ie(n) + '" data-at="' + Math.round(e.when * 1e3) + '" aria-label="' + ie(d + ", " + p + ". More info") + '"><span class="activityRowName">' + ie(d) + '</span><span class="activityRowMeta">' + ie(p) + "</span></button></div>";
  }
  let Na = null, Ja = 0;
  const Hr = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function ir() {
    var n;
    if (Date.now() - Ja < 5 * 60 * 1e3) return;
    Ja = Date.now();
    const e = [];
    try {
      const r = ((n = await I({ type: "energy/get_prefs" })) == null ? void 0 : n.energy_sources) || [], d = (p) => r.filter((y) => y.type === p).flatMap((y) => p === "grid" ? (y.flow_from || []).map((h) => h.stat_energy_from) : [y.stat_energy_from]).filter(Boolean);
      for (const [p, y, h] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!h.length) continue;
        const x = await Promise.all(h.map((S) => Promise.resolve(I({ type: "recorder/statistic_during_period", statistic_id: S, calendar: { period: "day" }, types: ["change"] })).then((R) => Number(R == null ? void 0 : R.change) || 0, () => 0)));
        e.push({ key: p, name: y, id: h[0], value: x.reduce((S, R) => S + R, 0), unit: ft(h[0]).unit_of_measurement || (p === "gas" || p === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Na = e, Ut();
  }
  let wa = null;
  function Si() {
    var y;
    const e = Na != null && Na.length ? Na : Hr.map(([h, x, S, R]) => {
      const F = "sensor.made_up_energy_" + h;
      return b[F] = { entity_id: F, state: String(S), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: x + " today", unit_of_measurement: R, state_class: "total_increasing" } }, { key: h, name: x, id: F, value: S, unit: R };
    });
    Se.clear(), e.some((h) => h.id === wa) || (wa = e[0].id);
    const n = e.map((h) => {
      const x = Number(h.value).toLocaleString(void 0, { maximumFractionDigits: h.value < 10 ? 2 : 1 }) + " " + h.unit, S = df[h.key], R = h.id === wa;
      return Se.set(h.id, { name: h.name, text: x, icon: S }), '<div class="activityRow tap' + (R ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + ie(h.id) + '" aria-pressed="' + R + '" aria-label="' + ie(h.name + ", " + x) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Gt("", S, h.name) + '></div><div><div class="activityRowName">' + ie(h.name) + '</div><div class="activityRowMeta">' + ie(x) + "</div></div></div>";
    }), r = e.find((h) => h.id === wa), d = (((y = Wt().opts.energy) == null ? void 0 : y.graph) || "above") === "below", p = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + ie(r.id) + '" role="img" aria-label="' + ie(r.name) + ', last 24 hours"></svg></div>';
    return pe("dash:energy", 0, "Energy today", n, p, null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function Jo(e) {
    const n = T.querySelector(".tfDash-energy"), r = n == null ? void 0 : n.querySelector(".tfDashGraph svg");
    !r || e === wa || (wa = e, n.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const p = d.dataset.energyPick === e;
      d.classList.toggle("picked", p), d.setAttribute("aria-pressed", String(p));
    }), r.dataset.graph = e, r.dataset.drawn = "", hn.set("dash:energy", Si()), Xr(!0));
  }
  function Fr(e) {
    var p;
    if ((p = window.matchMedia) != null && p.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [n, r] = e.querySelectorAll("path");
    if (!(r != null && r.getTotalLength)) return;
    const d = r.getTotalLength();
    r.animate([{ strokeDasharray: d, strokeDashoffset: d }, { strokeDasharray: d, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), n == null || n.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let Fn = null, xo = 0;
  const Or = (e) => !e.startsWith("light.") || cf.includes((wt.get(e) || "").toLowerCase()), Ls = () => Math.max(2, Mo((T == null ? void 0 : T.clientWidth) || 0).n), Qo = (e) => {
    const n = Zo(e), r = n.sections.findIndex(Boolean);
    return r < 0 ? [] : [n.parts[r]];
  };
  function Ti(e) {
    const n = Wt().tiles;
    if (n) return n.filter((d) => b[d]);
    if (!Fn) {
      const d = (p) => {
        var y;
        return (((y = b[p]) == null ? void 0 : y.state) === "on" ? 1e6 : 0) + (at[p] || 0);
      };
      Fn = {
        lights: Qe.rooms.flatMap((p) => p.lights).filter((p) => {
          var y;
          return Or(p) && ((y = b[p]) == null ? void 0 : y.state) !== "unavailable";
        }).sort((p, y) => d(y) - d(p) || Ae(p).localeCompare(Ae(y))),
        climates: Qe.rooms.flatMap((p) => p.actions.filter((y) => y.startsWith("climate.")))
      };
    }
    const r = Fn.climates.filter((d) => b[d]).slice(0, e > 3 ? 2 : 1);
    return [...Fn.lights.filter((d) => b[d]).slice(0, Math.max(0, e - r.length)), ...r];
  }
  const Li = (e, n, r, d) => (p) => '<section class="card tfCard tfDashCard ' + e + '" data-tf data-k="' + n + '" aria-label="' + r + '">' + (d ? '<div class="activityHeader"><div class="activityTitle">' + r + "</div></div>" : "") + '<div class="activityRows">' + p + "</div></section>";
  function qr(e, n) {
    var y, h;
    e.dash = !0, e.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ie(((h = (y = o()) == null ? void 0 : y.config) == null ? void 0 : h.location_name) || "Home") + "</h1>" }), n.length && e.push({ key: "sums", wrap: (x) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Li("tfDash-bar", "sums-bar", "Summaries", !1)(x).replace(" data-tf", "") + "</div>", tiles: n.map((x) => ({ key: "sum:" + x.key, html: tr(x) })) }), va.length && e.push({ key: "areas", html: Nr(0) });
    const r = Ko();
    r.length && e.push({ key: "favs", wrap: Li("tfDash-favs", "favs", "Favourites", !0), tiles: r.map((x) => ({ key: "fav:" + x, html: Ht(x, { area: !0 }) })) });
    const d = or();
    e.push({ key: "dash:act", html: pe("dash:act", 0, "Activity", d.length ? d.map(El) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), e.push({ key: "dash:energy", html: Si() });
    const p = Ls();
    return xo = p, Ti(p >= 3 ? p : p * 2).forEach((x) => e.push({
      key: "dash:tile:" + x,
      wrap: (S) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + ie(x) + '">' + S + "</div>",
      tiles: [{ key: x, html: In(x, !1, Qo(x)) }]
    })), _l(), ir(), e;
  }
  const rr = 252, $t = 16, Wr = 200, sr = Math.round(rr * 1.25), Ai = 60, yo = Ai + $t, nn = 5, _i = 3, ei = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average" }, Dl = ["wx", "favs", "act", "energy", "avg"], As = { wx: nn, areas: nn, favs: nn, act: nn, energy: 4, avg: 4 }, Rl = 3, _s = 94, ko = (e) => {
    var n;
    return !!((n = Wt().opts[e]) != null && n.tall);
  }, ua = (e) => ei[e] || Ae(e), Ei = 409, Vr = 128;
  let Xt = !1, kt = null, aa = null, zr = !1, Pa = /* @__PURE__ */ new Map(), Di = 0, Ia = 0;
  const oa = ["title", "sums"], Mo = (e) => {
    const n = Math.max(1, Math.floor((e + $t) / (Wr + $t)));
    return { n, w: Math.max(1, Math.min(sr, Math.floor((e - (n - 1) * $t) / n))) };
  }, Wt = () => ({ cells: {}, spans: {}, hidden: [], opts: {}, ...V.dash || {} });
  function Co(e) {
    V = { ...V, dash: e }, Tn();
  }
  function Ha() {
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
    ].filter(([, n]) => n == null ? void 0 : n.isConnected).map(([n, r, d, p = !1]) => ({ key: n, el: r, span: d, tile: p }));
  }
  const So = (e, n, r) => e.span === "full" ? n : e.span === "areas" ? Math.min(n, Math.ceil((Ei + Math.max(0, va.length - 1) * (Vr + $t) + $t) / (r + $t))) : Math.min(n, Wt().spans[e.key] ?? e.span), xa = (e) => As[e.key] ?? (e.el.classList.contains("tfDac") ? ko(e.key) ? nn : Rl : null);
  function To(e, n, r = null) {
    const d = Wt().cells, p = e.every((x) => !d[x.key] || d[x.key].col + x.cols <= n), y = (x) => d[x.key] || { row: 1e9, col: 0 }, h = () => {
      const x = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Map(), R = (le, de, H, ge) => {
        for (let je = de; je < de + ge; je++) for (let et = le; et < le + H; et++) if (x.has(et + "," + je)) return !1;
        return !0;
      }, F = (le, de, H) => {
        for (let ge = H; ge < H + le.rows; ge++) for (let je = de; je < de + le.cols; je++) x.add(je + "," + ge);
        S.set(le.key, { col: de, row: H, cols: le.cols, rows: le.rows });
      }, B = (le, de, H) => {
        for (de = Math.max(0, Math.min(n - le.cols, de)), H = Math.max(0, H); !R(de, H, le.cols, le.rows); ) H++;
        F(le, de, H);
      }, Y = (le) => {
        for (let de = 0; ; de++) for (let H = 0; H <= n - le.cols; H++) if (R(H, de, le.cols, le.rows)) {
          F(le, H, de);
          return;
        }
      };
      r && B(r, kt.col, kt.row);
      const xe = e.filter((le) => le !== r), Re = (le, de) => y(le).row - y(de).row || y(le).col - y(de).col;
      return p ? (xe.filter((le) => d[le.key]).sort(Re).forEach((le) => B(le, d[le.key].col, d[le.key].row)), xe.filter((le) => !d[le.key]).forEach(Y), S) : ([...xe].sort(Re).forEach(Y), S);
    };
    for (let x = 0; ; x++) {
      const S = h();
      if (x === 3) return S;
      const R = e.filter((B) => B.tile && !ko(B.key)).map((B) => ({ it: B, p: S.get(B.key) })).sort((B, Y) => B.p.row - Y.p.row || B.p.col - Y.p.col);
      let F = !1;
      for (let B = 0, Y; B < R.length; B = Y) {
        for (Y = B + 1; Y < R.length && R[Y].p.row === R[B].p.row && R[Y].p.col === R[Y - 1].p.col + 1; Y++) ;
        const xe = R.slice(B, Y), Re = Math.max(...xe.map((le) => le.it.rows));
        xe.forEach((le) => {
          le.it.rows < Re && (le.it.rows = Re, F = !0);
        });
      }
      if (!F) return S;
    }
  }
  function Lo() {
    const e = Wt(), n = new Set(e.hidden), r = Ha().filter((h) => !oa.includes(h.key));
    let d = Pa;
    if (!d.size) {
      const h = e.pegs || 4, x = r.filter((S) => !n.has(S.key));
      x.forEach((S) => {
        S.cols = So(S, h, rr), S.rows = xa(S) ?? 2;
      }), d = To(x, h);
    }
    const p = (h) => !n.has(h.key) && d.get(h.key) || { row: 1e9, col: 0 };
    r.sort((h, x) => p(h).row - p(x).row || p(h).col - p(x).col);
    const y = (e.phone || []).map((h) => r.find((x) => x.key === h && !n.has(h))).filter(Boolean);
    return [...y, ...r.filter((h) => !y.includes(h))];
  }
  const Ri = () => {
    const e = Lo();
    e.forEach((n, r) => n.el.style.setProperty("--o", String(3 + r))), Ao([...Ha().filter((n) => oa.includes(n.key)), ...e].map((n) => n.el));
  };
  function Ao(e) {
    if (kt) return;
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
  const On = (e, n) => Co({ ...e, cells: n, pegs: Mo(T.clientWidth).n });
  function kn() {
    var de;
    if (!v || !T) return;
    const e = T.clientWidth, { n, w: r } = Mo(e), d = m.classList.contains("tfDash") && e >= 2 * rr + $t;
    m.classList.toggle("tfBoard", d), m.classList.toggle("tfEditing", d && Xt);
    const p = c("dashEditNav");
    p && (p.hidden = !d, p.classList.toggle("active", Xt), p.setAttribute("aria-pressed", String(Xt)), p.setAttribute("aria-label", Xt ? "Done editing" : "Edit the dashboard"), p.title = Xt ? "Done" : "Edit", p.innerHTML = Xt ? tf : Fc);
    const y = d ? Ha() : [];
    if (!d) {
      T.style.height = "", T.querySelectorAll(".tfBoardItem").forEach((H) => {
        H.classList.remove("tfBoardItem", "tfBoardHidden"), H.style.left = H.style.top = H.style.width = H.style.height = "";
      }), (de = T.querySelector(".tfDash-act > .activityRows")) == null || de.style.removeProperty("max-height"), Fa(!1), m.classList.contains("tfDash") && Ri(), gn();
      return;
    }
    T.style.setProperty("--peg-w", r + "px");
    const h = new Set(Wt().hidden), x = r + $t;
    kt != null && kt.fromTray && h.delete(kt.key), y.forEach((H) => H.el.classList.toggle("tfBoardHidden", h.has(H.key)));
    const S = y.filter((H) => !h.has(H.key) && getComputedStyle(H.el).display !== "none");
    let R = 0;
    S.filter((H) => oa.includes(H.key)).forEach((H) => {
      H.el.classList.add("tfBoardItem"), Object.assign(H.el.style, { width: e + "px", height: "", left: "0px", top: R + "px" });
      const ge = H.key === "sums" && H.el.querySelector(".tfDash-bar"), je = ge ? ge.querySelectorAll(".activityRow").length : 0;
      ge && (ge.style.maxWidth = "none");
      for (let et = 1; ge && et <= je && (ge.style.setProperty("--bar-cols", String(Math.ceil(je / et))), !(ge.offsetWidth <= e)); et++)
        ;
      ge && (ge.style.maxWidth = ""), R += H.el.offsetHeight + $t;
    }), Ia = R;
    const F = S.filter((H) => !oa.includes(H.key));
    F.forEach((H) => {
      H.cols = So(H, n, r), H.el.classList.add("tfBoardItem"), H.el.style.width = (H.cols === n ? e : H.cols * r + (H.cols - 1) * $t) + "px", H.el.style.height = "", H.rows = xa(H) ?? Math.max(1, Math.ceil((H.el.offsetHeight + $t - 6) / yo));
    });
    const B = kt && F.find((H) => H.key === kt.key), Y = To(F, n, B);
    Y.forEach((H) => Object.assign(H, { x: H.cols === n ? 0 : H.col * x, y: Ia + H.row * yo, w: H.cols === n ? e : H.cols * r + (H.cols - 1) * $t, h: H.rows * yo - $t })), F.forEach((H) => {
      const ge = Y.get(H.key);
      H.el.style.height = ge.h + "px", H.el.classList.contains("tfDac") && H.el.style.setProperty("--tf-dac-pad", ge.h - _s + "px"), !(H === B && !kt.fromTray) && (H.el.style.left = ge.x + "px", H.el.style.top = ge.y + "px");
    }), Pa = Y, Ao([...S.filter((H) => oa.includes(H.key)), ...F.slice().sort((H, ge) => Y.get(H.key).row - Y.get(ge.key).row || Y.get(H.key).col - Y.get(ge.key).col)].map((H) => H.el));
    const xe = Y.get("act"), Re = xe && T.querySelector(".tfDash-act > .activityRows");
    Re && (Re.style.maxHeight = Math.max(Ai, Math.floor((xe.h - Re.offsetTop - 10) / Ai) * Ai) + "px"), Di = Math.max(0, ...[...Y.values()].map((H) => H.row + H.rows));
    let le = Ia + Di * yo - $t;
    le = Fa(Xt, F, Y, le, n, r), T.style.height = le + "px", requestAnimationFrame(() => m.classList.add("tfBoardReady")), y.forEach((H) => Bi.observe(H.el)), Xr(), gn();
  }
  const lr = () => {
    zr || (zr = !0, requestAnimationFrame(() => {
      zr = !1, kn();
    }));
  }, Bi = new ResizeObserver(() => {
    kt || lr();
  });
  function Fa(e, n = [], r = /* @__PURE__ */ new Map(), d = 0, p = 1, y = rr) {
    T.querySelectorAll(".tfEditChips").forEach((F) => {
      (!e || !F.closest(".tfBoardItem")) && F.remove();
    }), T.querySelectorAll(".tfFavHides").forEach((F) => F.remove()), T.querySelectorAll(".tfBoardItem").forEach((F) => [...F.children].forEach((B) => {
      B.classList.contains("tfEditChips") || B.toggleAttribute("inert", e);
    }));
    let h = T.querySelector(".tfBoardCells"), x = T.querySelector(".tfBoardLand");
    if (!e)
      return h == null || h.remove(), x == null || x.remove(), qa(), d;
    const S = Di + _i;
    if (h || (h = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), h.setAttribute("aria-hidden", "true"), T.prepend(h)), h.style.top = Ia + "px", h.dataset.size !== p + "x" + S + "x" + y && (h.dataset.size = p + "x" + S + "x" + y, h.style.gridTemplateColumns = "repeat(" + p + "," + y + "px)", h.innerHTML = "<i></i>".repeat(p * S)), d = Math.max(d, Ia + S * yo - $t), n.forEach((F) => {
      const B = F.el;
      !B || B.querySelector(":scope > .tfEditChips") || B.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + fd + '</span><button class="tfEditChip" type="button" data-board-more="' + ie(F.key) + '" aria-label="' + ie(ua(F.key)) + ' options" aria-haspopup="menu">' + Qh + "</button></div>");
    }), kt && r.has(kt.key)) {
      x || (x = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), T.appendChild(x));
      const F = r.get(kt.key);
      Object.assign(x.style, { left: F.x + "px", top: F.y + "px", width: F.w + "px", height: F.h + "px" });
    } else x == null || x.remove();
    const R = T.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (R) {
      const F = R.getBoundingClientRect();
      R.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...R.querySelectorAll('[data-k^="fav:"]')].map((B) => {
        const Y = B.getBoundingClientRect(), xe = B.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + ie(xe) + '" aria-label="Hide ' + ie(Ae(xe)) + ' from the dashboard" style="left:' + Math.round(Y.right - F.left - 42) + "px;top:" + Math.round(Y.top - F.top + (Y.height - 32) / 2) + 'px">' + Pc + "</button>";
      }).join("") + "</div>");
    }
    return d;
  }
  let Qa = "";
  function Oa(e) {
    Xt = e, e || (kt = null, ka = Mn = !1, qa()), kn(), e ? Qa = JSON.stringify(V) : Qa && JSON.stringify(V) !== Qa && ia("Changes saved");
  }
  function ti(e, n) {
    var Y, xe;
    qa();
    const r = Pa.get(e), { n: d } = Mo(T.clientWidth), p = Wt(), y = p.spans[e] ?? 2;
    if (!r) return;
    const h = r.cols >= d, x = (Re, le, de) => '<button type="button" role="menuitem" data-board-act="' + Re + '"' + (de ? " disabled" : "") + ">" + le + "</button>", S = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    S.setAttribute("role", "menu"), S.setAttribute("aria-label", ua(e) + " options");
    const R = T.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]'), F = R == null ? void 0 : R.classList.contains("tfDac");
    S.innerHTML = (Dl.includes(e) ? x("size", y === 1 ? "Card size" : "Tile size") : "") + (F ? x("tall", ko(e) ? "Make shorter" : "Make taller") : "") + (e === "energy" ? x("graph", (((Y = p.opts.energy) == null ? void 0 : Y.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + x("left", "Move left", h || r.col === 0) + x("right", "Move right", h || r.col + r.cols >= d) + x("up", "Move up", r.row <= 0) + x("down", "Move down") + (R ? x("remove", "Remove") : x("hide", "Hide")), T.appendChild(S);
    const B = Math.min(r.x + r.w - S.offsetWidth, T.clientWidth - S.offsetWidth);
    Object.assign(S.style, { left: Math.max(0, B) + "px", top: r.y + 28 + "px" }), aa = { key: e, menu: S, opener: n }, (xe = S.querySelector("button:not([disabled])")) == null || xe.focus();
  }
  function qa(e) {
    if (!aa) return;
    const { menu: n, opener: r } = aa;
    aa = null, n.remove(), e && (r == null || r.focus());
  }
  const eo = () => Object.fromEntries([...Pa].map(([e, n]) => [e, { col: n.col, row: n.row }]));
  function Es(e, n) {
    var h, x;
    if (n === "remove") {
      qa(), Gr(e);
      return;
    }
    const r = V, d = Wt(), p = eo(), y = p[e] || { col: 0, row: 0 };
    n === "size" && (d.spans = { ...d.spans, [e]: (d.spans[e] ?? 2) === 1 ? 2 : 1 }), n === "tall" && (d.opts = { ...d.opts, [e]: { ...d.opts[e] || {}, tall: !ko(e) } }), n === "graph" && (d.opts = { ...d.opts, energy: { ...d.opts.energy || {}, graph: (((h = d.opts.energy) == null ? void 0 : h.graph) || "above") === "above" ? "below" : "above" } }), n === "left" && (p[e] = { ...y, col: y.col - 1 }), n === "right" && (p[e] = { ...y, col: y.col + 1 }), n === "up" && (p[e] = { ...y, row: y.row - 1 }), n === "down" && (p[e] = { ...y, row: y.row + 1 }), n === "hide" && (d.hidden = [.../* @__PURE__ */ new Set([...d.hidden, e])]), ["left", "right", "up", "down"].includes(n) && (kt = { key: e, col: p[e].col, row: p[e].row }), On(d, p), kt && (kn(), kt = null, On(Wt(), eo())), qa(), n === "graph" && (hn.delete("dash:energy"), Ut()), kn(), n !== "hide" ? (x = T.querySelector('[data-board-more="' + CSS.escape(e) + '"]')) == null || x.focus() : ia(ua(e) + " hidden", ri(r));
  }
  function jr(e) {
    const n = Wt();
    Co({ ...n, hidden: n.hidden.filter((r) => r !== e) }), kn(), ia(ua(e) + " put back");
  }
  const ni = () => Wt().tiles || [...T.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => e.dataset.k).filter((e) => !Wt().hidden.includes(e));
  function ai(e, n) {
    const r = Wt();
    On({ ...r, tiles: e, hidden: r.hidden.filter((d) => !d.includes(".")) }, n), Ut(), gn();
  }
  const Wa = (e) => {
    ai([...ni().filter((n) => n !== e), e], eo()), ia(Ae(e) + " added"), cr(e);
  }, Gr = (e) => {
    const n = V, r = eo();
    delete r[e], ai(ni().filter((d) => d !== e), r), ia(Ae(e) + " removed", ri(n));
  };
  let Ni = 0;
  function ia(e, n = null) {
    var h;
    const r = c("toast");
    if (!r) return;
    if (r.replaceChildren(Object.assign(document.createElement("span"), { textContent: e })), n) {
      const x = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      x.addEventListener("click", () => {
        clearTimeout(Ni), r.classList.remove("show", "withAction"), n();
      }), r.appendChild(x);
    }
    const d = m.getBoundingClientRect(), p = (h = a.querySelector(".bottomNav")) == null ? void 0 : h.getBoundingClientRect(), y = Rt.classList.contains("open") && !ya ? Math.min(d.right, Rt.getBoundingClientRect().left) : d.right;
    r.style.left = (d.left + y) / 2 + "px", r.style.bottom = (p != null && p.height ? window.innerHeight - p.top + 12 : 26) + "px", r.classList.add("tfToast", "show"), r.classList.toggle("withAction", !!n), clearTimeout(Ni), Ni = setTimeout(() => r.classList.remove("show", "withAction"), n ? 5e3 : 2200);
  }
  const oi = 700, Ur = 1e3, _n = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  _n.setAttribute("role", "tooltip"), _n.setAttribute("aria-hidden", "true"), m.appendChild(_n);
  let dr = null, Pi = 0, Va = 0, En = -1 / 0;
  const Dn = (e) => e.nodeType === 1 && e.scrollWidth > e.clientWidth + 1 && getComputedStyle(e).textOverflow === "ellipsis", Bl = (e) => {
    for (let n = e; n && n !== m; n = n.parentElement) if (Dn(n)) return n;
    return null;
  };
  function Ds(e, n) {
    clearTimeout(Pi), clearTimeout(Va);
    const r = () => {
      if (!e.isConnected) return;
      dr = e, _n.textContent = n, _n.hidden = !1;
      const d = e.getBoundingClientRect(), p = _n.getBoundingClientRect(), y = d.top - p.height - 8 >= 8 ? d.top - p.height - 8 : d.bottom + 8;
      _n.style.left = Math.max(8, Math.min(window.innerWidth - p.width - 8, d.left + d.width / 2 - p.width / 2)) + "px", _n.style.top = y + "px";
    };
    !_n.hidden || performance.now() - En < Ur ? r() : Pi = setTimeout(r, oi);
  }
  function ii() {
    clearTimeout(Pi), clearTimeout(Va), _n.hidden || (En = performance.now()), _n.hidden = !0, dr = null;
  }
  a.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    if (_n.contains(e.target)) {
      clearTimeout(Va);
      return;
    }
    const n = Bl(e.target);
    if (n) {
      n !== dr ? Ds(n, n.textContent.trim()) : clearTimeout(Va);
      return;
    }
    clearTimeout(Pi), clearTimeout(Va), Va = setTimeout(ii, 120);
  }), a.addEventListener("focusin", (e) => {
    var d;
    const n = e.target;
    if (!((d = n.matches) != null && d.call(n, ":focus-visible"))) return;
    const r = [n, ...n.querySelectorAll("*")].filter(Dn);
    r.length && Ds(n, r.map((p) => p.textContent.trim()).join(" · "));
  }), a.addEventListener("focusout", (e) => {
    e.target === dr && ii();
  }), a.addEventListener("keydown", (e) => {
    e.key === "Escape" && !_n.hidden && (e.stopPropagation(), ii());
  }, !0), window.addEventListener("scroll", () => {
    (!_n.hidden || Pi) && ii();
  }, { capture: !0, passive: !0 });
  const ri = (e) => () => {
    V = e, Tn(), Ut(), kn(), gn();
  };
  function cr(e) {
    const n = () => T.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]');
    setTimeout(() => {
      var h;
      const r = n();
      if (!r) return;
      const d = (h = window.matchMedia) == null ? void 0 : h.call(window, "(prefers-reduced-motion: reduce)").matches, p = r.getBoundingClientRect();
      (p.top < 0 || p.bottom > window.innerHeight) && r.scrollIntoView({ behavior: d ? "auto" : "smooth", block: "center" });
      const y = (x) => "0 0 0 4px color-mix(in srgb,var(--primary) " + x + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + x + "%,transparent)";
      r.animate([{ boxShadow: y(55) }, { boxShadow: y(0) }], { duration: 1500, easing: d ? "steps(1, end)" : "ease-out" });
    }, Rs(e) ? 260 : 0);
  }
  function Rs(e) {
    const n = Pa.get(e);
    if (!n || !Rt.classList.contains("open") || ya) return !1;
    const { n: r, w: d } = Mo(T.clientWidth), p = Rt.getBoundingClientRect().left - T.getBoundingClientRect().left, y = (S) => S * (d + $t) + n.cols * d + (n.cols - 1) * $t <= p;
    if (y(n.col)) return !1;
    const h = /* @__PURE__ */ new Set();
    Pa.forEach((S, R) => {
      if (R !== e) for (let F = S.row; F < S.row + S.rows; F++) for (let B = S.col; B < S.col + S.cols; B++) h.add(B + "," + F);
    });
    const x = (S, R) => {
      for (let F = R; F < R + n.rows; F++) for (let B = S; B < S + n.cols; B++) if (h.has(B + "," + F)) return !1;
      return !0;
    };
    for (let S = 0; S <= Di; S++) for (let R = 0; R + n.cols <= r && y(R); R++)
      if (x(R, S))
        return On(Wt(), { ...eo(), [e]: { col: R, row: S } }), kn(), !0;
    return !1;
  }
  const Bs = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Rt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Rt.setAttribute("aria-label", "Edit the dashboard"), Rt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', m.appendChild(Rt);
  let ya = !1, ka = !1, Mn = !1, Vt = null, pa = !1;
  const _o = {}, si = (e, n) => {
    if (_o[e] === n) return;
    _o[e] = n;
    const r = Rt.querySelector('[data-tray="' + e + '"]');
    r.innerHTML = n, da(r);
  }, Yr = (e, n) => '<span class="tfTrayName"><span class="activityRowName">' + ie(Ae(e)) + '</span><span class="activityRowMeta">' + ie(n) + "</span></span>", Nl = (e, n, r) => '<li class="tfTrayFav' + (n ? " off" : "") + '" data-tray-fav="' + ie(e) + '"><span class="tfTrayGrip" aria-hidden="true">' + fd + '</span><span class="tfIcon"' + Gt(e, Kt(e)) + "></span>" + Yr(e, n ? "Hidden" + (wt.get(e) ? " · " + wt.get(e) : "") : wt.get(e) || _t(e)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + ie(e) + '" aria-pressed="' + !n + '" aria-label="' + (n ? "Show " : "Hide ") + ie(Ae(e)) + ' on the dashboard">' + (n ? Pc : ef) + "</button>" + (r ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + ie(e) + '" aria-label="Remove ' + ie(Ae(e)) + ' from favourites">' + Ic + "</button>" : "<span></span>") + "</li>";
  function ur(e, n, r, d) {
    const p = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(b).filter((h) => n(h) && !r.has(h) && b[h].state !== "unavailable").filter((h) => {
      const x = (Ae(h) + " " + (wt.get(h) || "") + " " + h).toLowerCase();
      return p.every((S) => x.includes(S));
    }).sort((h, x) => (wt.get(h) || "~").localeCompare(wt.get(x) || "~") || Ae(h).localeCompare(Ae(x))).slice(0, 40).map((h) => '<li><button class="tfTrayPickItem" type="button" ' + d + '="' + ie(h) + '"><span class="tfIcon"' + Gt(h, Kt(h)) + "></span>" + Yr(h, wt.get(h) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function gn() {
    const e = Xt && m.classList.contains("tfBoard");
    if (Rt.classList.toggle("open", e), Rt.classList.toggle("tucked", e && ya), Rt.toggleAttribute("inert", !e), e || (pa = !1), Bt(), !e) return;
    const n = Rt.querySelector("[data-tray-tuck]");
    n.innerHTML = ya ? Tc : Hc, n.setAttribute("aria-expanded", String(!ya)), n.setAttribute("aria-label", ya ? "Show the edit tray" : "Tuck the edit tray away");
    const r = Wt().hidden.filter((h) => Ha().some((x) => x.key === h));
    si("cards", '<div class="sectionLabel">Hidden cards</div>' + (r.length ? '<div class="tfTrayCards">' + r.map((h) => '<button class="tfTrayCard" type="button" data-tray-card="' + ie(h) + '" aria-label="' + ie(ua(h)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + fd + "</span>" + ie(ua(h)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide wait here.</p>')), si("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (Wt().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + pa + '">' + (pa ? "Hide the phone" : "Show the phone") + "</button>");
    const d = new Set(V.favHidden || []), p = An(), y = [...p, ...[...d].filter((h) => !p.includes(h) && b[h])];
    si("favs", y.map((h) => Nl(h, d.has(h), p.includes(h))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Rt.querySelector('[data-pick="tiles"]').hidden = !Mn, Rt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(Mn)), Mn && si("tilepick", ur(Rt.querySelector("[data-tile-search]").value, (h) => ml.includes(h.split(".")[0]), new Set(ni()), "data-tile-pick")), Rt.querySelector('[data-pick="favs"]').hidden = !ka, Rt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(ka)), ka && si("pick", ur(Rt.querySelector("[data-fav-search]").value, (h) => Bs.test(h), new Set(An()), "data-fav-pick")), si("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (yi() ? " on" : "") + '" type="button" role="switch" aria-checked="' + yi() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const to = (e) => {
    V = { ...V, ...e }, Tn(), Ut(), gn();
  };
  function Ma(e, n) {
    const r = V, d = new Set(V.favHidden || []);
    n ? d.delete(e) : d.add(e), to({ favHidden: [...d] }), n ? ia(Ae(e) + " put back") : ia(Ae(e) + " hidden", ri(r));
  }
  const Pl = (e) => {
    const n = V;
    to({ favourites: An().filter((r) => r !== e), favHidden: (V.favHidden || []).filter((r) => r !== e) }), ia(Ae(e) + " removed from favourites", ri(n));
  }, Il = (e) => {
    to({ favourites: [...An().filter((n) => n !== e), e], favHidden: (V.favHidden || []).filter((n) => n !== e) }), ia(Ae(e) + " added to favourites");
  };
  Rt.addEventListener("click", (e) => {
    var r;
    const n = e.target.closest("button");
    n && (n.hasAttribute("data-tray-done") ? Oa(!1) : n.hasAttribute("data-tray-tuck") ? (ya = !ya, gn()) : n.hasAttribute("data-phone-toggle") ? (pa = !pa, gn(), pa && ((r = an.querySelector("[data-phone-key]")) == null || r.focus({ preventScroll: !0 }))) : n.dataset.trayCard ? e.detail === 0 && (jr(n.dataset.trayCard), gn()) : n.dataset.favEye ? Ma(n.dataset.favEye, n.getAttribute("aria-pressed") !== "true") : n.dataset.favRemove ? Pl(n.dataset.favRemove) : n.hasAttribute("data-fav-add") ? (ka = !ka, gn(), ka && Rt.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : n.dataset.favPick ? Il(n.dataset.favPick) : n.hasAttribute("data-tile-add") ? (Mn = !Mn, gn(), Mn && Rt.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : n.dataset.tilePick ? Wa(n.dataset.tilePick) : n.hasAttribute("data-fav-suggest") && to({ suggest: !yi() }));
  }), Rt.addEventListener("input", (e) => {
    e.target.matches("[data-fav-search],[data-tile-search]") && gn();
  }), Rt.addEventListener("keydown", (e) => {
    var r, d;
    const n = !!((d = (r = e.target).closest) != null && d.call(r, '[data-pick="tiles"],[data-tile-add]'));
    e.key !== "Escape" || !(n ? Mn : ka) || (e.stopPropagation(), n ? Mn = !1 : ka = !1, gn(), Rt.querySelector(n ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Zr(e, n, r, d) {
    e.preventDefault();
    const p = e.clientX, y = e.clientY;
    let h = null, x = 0;
    const S = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), R = (B) => {
      if (!h) {
        if (Math.hypot(B.clientX - p, B.clientY - y) < 4) return;
        h = n.cloneNode(!0), h.classList.add("tfTrayGhost"), h.style.width = n.offsetWidth + "px", m.appendChild(h);
      }
      h.style.transform = "translate(" + (B.clientX - 24) + "px," + (B.clientY - 24) + "px)";
      const Y = !ya && B.clientX >= Rt.getBoundingClientRect().left;
      if (r === "card") {
        const le = T.getBoundingClientRect(), { w: de } = Mo(T.clientWidth);
        kt = !Y && B.clientX >= le.left && B.clientX <= le.right && B.clientY >= le.top + Ia ? { key: d, col: Math.max(0, Math.floor((B.clientX - le.left) / (de + $t))), row: Math.max(0, Math.floor((B.clientY - le.top - Ia) / yo)), fromTray: !0 } : null, x || (x = requestAnimationFrame(() => {
          x = 0, kn();
        }));
        return;
      }
      const xe = T.querySelector(".tfDash-favs"), Re = xe == null ? void 0 : xe.getBoundingClientRect();
      if (Vt = null, Re && !Y && B.clientX >= Re.left && B.clientX <= Re.right && B.clientY >= Re.top && B.clientY <= Re.bottom) {
        let le = 1 / 0;
        xe.querySelectorAll('[data-k^="fav:"]').forEach((de, H) => {
          const ge = de.getBoundingClientRect(), je = Math.hypot(B.clientX - (ge.left + ge.width / 2), B.clientY - (ge.top + ge.height / 2));
          je < le && (le = je, Vt = { i: H, r: ge, after: B.clientX > ge.left + ge.width / 2 });
        }), Vt || (Vt = { i: 0, r: null, after: !1 });
      }
      Vt != null && Vt.r ? (S.isConnected || m.appendChild(S), Object.assign(S.style, { left: (Vt.after ? Vt.r.right : Vt.r.left) - 2 + "px", top: Vt.r.top + 8 + "px", height: Vt.r.height - 16 + "px" })) : S.remove();
    }, F = () => {
      if (window.removeEventListener("pointermove", R), window.removeEventListener("pointerup", F), window.removeEventListener("pointercancel", F), cancelAnimationFrame(x), h == null || h.remove(), S.remove(), r === "card") {
        if (!h) jr(d);
        else if (kt != null && kt.fromTray) {
          kn();
          const le = Wt(), de = eo();
          kt = null, On({ ...le, hidden: le.hidden.filter((H) => H !== d) }, de), ia(ua(d) + " put back");
        }
        kt = null, kn(), Ut(), gn();
        return;
      }
      if (!Vt) return;
      const B = new Set(V.favHidden || []);
      B.delete(d);
      const Y = An().filter((le) => le !== d), xe = Y.filter((le) => !B.has(le)), Re = xe[Math.min(Vt.i + (Vt.after ? 1 : 0), xe.length)];
      Y.splice(Re ? Y.indexOf(Re) : Y.length, 0, d), Vt = null, to({ favourites: Y, favHidden: [...B] }), ia(Ae(d) + " put back");
    };
    window.addEventListener("pointermove", R), window.addEventListener("pointerup", F), window.addEventListener("pointercancel", F);
  }
  const Eo = { sums: 201, wx: 286, favs: 363, areas: 323, act: 363, energy: 301, avg: 182 }, Ns = 140, li = 252, Hl = 0.8, Ps = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line" }, an = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  an.setAttribute("aria-label", "Phone order"), an.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Ic + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', m.appendChild(an);
  let no = "";
  function Bt() {
    var x;
    const e = pa && Xt && m.classList.contains("tfBoard") && !ya;
    if (an.classList.toggle("open", e), an.toggleAttribute("inert", !e), !e) return;
    const n = Lo().filter((S) => !Wt().hidden.includes(S.key)), r = n.length, d = (S) => Math.round(S * Hl * 10) / 10 + "px", p = (S, R) => {
      const F = S.el.classList.contains("tfDac"), B = S.tile ? F ? li : Ns : Eo[S.key] || Ns;
      return '<button class="tfPhoneBlock' + (S.tile ? " tile" : "") + '" type="button" data-phone-key="' + ie(S.key) + '" style="min-height:' + d(B) + '" aria-label="' + ie(ua(S.key) + ", " + (R + 1) + " of " + r + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (S.tile ? Gt(S.key, Kt(S.key)) : Gt(S.key, Ps[S.key])) + '></span><span class="tfPhoneName">' + ie(ua(S.key)) + "</span></button>";
    }, y = '<div class="tfPhoneTitle">' + ie(((x = T.querySelector(".tfDashTitle")) == null ? void 0 : x.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + d(Eo.sums) + '"><span class="tfPhoneName">' + ie(ua("sums")) + "</span></div>" + n.map(p).join("");
    if (an.querySelector('[data-phone="note"]').innerHTML = Wt().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", y === no) return;
    no = y;
    const h = an.querySelector('[data-phone="list"]');
    h.innerHTML = y, da(h);
  }
  function Do(e, n) {
    var r;
    Co({ ...Wt(), phone: e }), gn(), n && ((r = an.querySelector('[data-phone-key="' + CSS.escape(n) + '"]')) == null || r.focus({ preventScroll: !0 }));
  }
  const di = () => [...an.querySelectorAll("[data-phone-key]")].map((e) => e.dataset.phoneKey);
  function Kr(e, n) {
    e.preventDefault();
    const r = n.parentElement, d = an.querySelector(".tfPhoneScreen"), p = di().join();
    n.classList.add("moving");
    const y = (x) => {
      const S = d.getBoundingClientRect();
      x.clientY > S.bottom - 40 ? d.scrollTop += 12 : x.clientY < S.top + 40 && (d.scrollTop -= 12);
      const R = [...r.querySelectorAll("[data-phone-key]")].find((Y) => {
        const xe = Y.getBoundingClientRect();
        return Y !== n && x.clientX >= xe.left && x.clientX <= xe.right && x.clientY >= xe.top && x.clientY <= xe.bottom;
      });
      if (!R) return;
      const F = R.getBoundingClientRect(), B = R.classList.contains("tile") ? x.clientX < F.left + F.width / 2 : x.clientY < F.top + F.height / 2;
      r.insertBefore(n, B ? R : R.nextSibling);
    }, h = () => {
      window.removeEventListener("pointermove", y), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h), n.classList.remove("moving");
      const x = di();
      no = "", x.join() !== p ? Do(x) : Bt();
    };
    window.addEventListener("pointermove", y), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  }
  an.addEventListener("pointerdown", (e) => {
    const n = e.target.closest("[data-phone-key]");
    n && e.button <= 0 && Kr(e, n);
  }), an.addEventListener("click", (e) => {
    var r;
    const n = e.target.closest("button");
    if (n != null && n.hasAttribute("data-phone-close"))
      pa = !1, gn(), (r = Rt.querySelector("[data-phone-toggle]")) == null || r.focus({ preventScroll: !0 });
    else if (n != null && n.hasAttribute("data-phone-reset")) {
      const { phone: d, ...p } = Wt();
      Co(p), gn();
    }
  }), an.addEventListener("keydown", (e) => {
    var h, x, S, R;
    if (e.key === "Escape") {
      e.stopPropagation(), pa = !1, gn(), (h = Rt.querySelector("[data-phone-toggle]")) == null || h.focus({ preventScroll: !0 });
      return;
    }
    const n = (R = (S = (x = e.target).closest) == null ? void 0 : S.call(x, "[data-phone-key]")) == null ? void 0 : R.dataset.phoneKey, r = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!n || !r) return;
    e.preventDefault();
    const d = di(), p = d.indexOf(n), y = p + r;
    y < 0 || y >= d.length || ([d[p], d[y]] = [d[y], d[p]], Do(d, n));
  });
  function Cn(e, n) {
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
      const y = new Set(An());
      _o.favs = null, to({ favourites: [...r.children].map((h) => h.dataset.trayFav).filter((h) => y.has(h)) });
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  Rt.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    const n = e.target.closest("[data-tray-card]"), r = e.target.closest(".tfTrayFav");
    n ? Zr(e, n, "card", n.dataset.trayCard) : r && e.target.closest(".tfTrayGrip") ? Cn(e, r) : r != null && r.classList.contains("off") && !e.target.closest("button") && Zr(e, r, "fav", r.dataset.trayFav);
  });
  function $r(e) {
    if (!Xt || e.button !== 0 || e.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const n = e.target.closest(".tfBoardItem"), r = n && Ha().find((B) => B.el === n);
    if (!r || oa.includes(r.key)) return;
    const d = Pa.get(r.key), { w: p } = Mo(T.clientWidth);
    if (!d) return;
    e.preventDefault(), qa();
    const y = e.clientX, h = e.clientY;
    let x = !1, S = 0;
    const R = (B) => {
      const Y = B.clientX - y, xe = B.clientY - h;
      if (!x) {
        if (Math.hypot(Y, xe) < 4) return;
        x = !0, kt = { key: r.key, col: d.col, row: d.row }, n.classList.add("tfDragging");
      }
      n.style.transform = "translate(" + Y + "px," + xe + "px)", kt.col = Math.round((d.x + Y) / (p + $t)), kt.row = Math.round((d.y + xe - Ia) / yo), S || (S = requestAnimationFrame(() => {
        S = 0, kn();
      }));
    }, F = () => {
      window.removeEventListener("pointermove", R), window.removeEventListener("pointerup", F), window.removeEventListener("pointercancel", F), x && (cancelAnimationFrame(S), kn(), n.classList.remove("tfDragging"), n.style.transform = "", kt = null, On(Wt(), eo()), kn(), Ut());
    };
    window.addEventListener("pointermove", R), window.addEventListener("pointerup", F), window.addEventListener("pointercancel", F);
  }
  function Xr(e = !1) {
    const n = T == null ? void 0 : T.querySelector(".tfDashGraph svg[data-graph]");
    if (!(n != null && n.clientWidth)) return;
    const r = n.dataset.graph + "@" + n.clientWidth + "x" + n.clientHeight;
    n.dataset.drawn !== r && (n.dataset.drawn = r, br(n.dataset.graph, n).then(() => {
      e && Fr(n);
    }));
  }
  function Jr() {
    var x, S, R;
    Qe = Yi.model(o()), Cs(), b = Qe.states, b[(x = V.sources) == null ? void 0 : x.grid] && (Qe.grid = V.sources.grid), b[(S = V.sources) == null ? void 0 : S.alarm] && (Qe.security.alarms = [V.sources.alarm]), C.forEach((F, B) => {
      const Y = b[B], xe = (Y == null ? void 0 : Y.attributes) || {};
      if (!Y || Date.now() - F.at > 2 * 60 * 1e3) {
        C.delete(B);
        return;
      }
      F.pos != null && Y.state !== "opening" && Y.state !== "closing" && Math.abs(Pn(B) - F.pos) < 1 && delete F.pos, F.tilt != null && Math.abs((xe.current_tilt_position ?? -1) - F.tilt) < 1 && delete F.tilt, F.pos == null && F.tilt == null && C.delete(B);
    });
    const e = [];
    let n = 0;
    const r = Tl();
    va = r.filter((F) => F.room).map((F) => F.room), va.some((F) => F.id === ve) || (ve = ((R = va[0]) == null ? void 0 : R.id) || null);
    const d = Le === "weather" ? { key: "weather", name: "Weather" } : Le && r.find((F) => F.key === Le);
    if (d || (Le = null), m.classList.toggle("tfAreaOpen", !!d), m.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), m.classList.toggle("tfDash", !d), wt = /* @__PURE__ */ new Map(), Qe.rooms.forEach((F) => [...F.actions, ...F.plugs, ...F.readings, ...F.openings, ...F.solar, ...F.plants.flatMap((B) => [B.id, ...B.readings])].forEach((B) => wt.set(B, F.name))), !d) return qr(e, ki());
    if (e.push({ key: "areahead", html: Is(d, ++n) }), d.key === "weather")
      return e.weather = ++n, e;
    const p = d.ids, y = d.room ? d.room.id : d.key, h = d.room;
    return h != null && h.solar.length && e.push({ key: "energy:" + h.id, html: he(h, ++n) }), h && (h.readings.length || h.plugs.length || h.power != null) && e.push({ key: "readings:" + h.id, html: me(h, ++n) }), h == null || h.plants.forEach((F) => e.push({ key: "plant:" + F.id, html: ke(F, ++n) })), p.length && e.push({ key: "block:" + y, order: ++n, tiles: p.map((F) => ({ key: F, html: In(F) })) }), e;
  }
  const Is = (e, n) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + n + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Tc + '</button><div class="settingsTitle">' + ie(e.name) + "</div></div>";
  let Hs = 0, Fs = null;
  const Os = (e) => e === "weather" ? fn.wx : T.querySelector(".tfAreas");
  function qs(e) {
    var n, r;
    Le || (Hs = ui().scrollTop, Fs = ((n = Os(e)) == null ? void 0 : n.getBoundingClientRect().top) ?? null), Le = e, e.startsWith("room:") && (ve = e.slice(5)), ao(), ui().scrollTop = 0, (r = T.querySelector("[data-area-back]")) == null || r.focus({ preventScroll: !0 });
  }
  let ci = null;
  function pr(e, n) {
    if (ci == null || ci(), n == null) return;
    const r = ui(), d = performance.now() + 1500, p = ["wheel", "touchstart", "pointerdown", "keydown"];
    let y = 0;
    const h = () => {
      cancelAnimationFrame(y), p.forEach((S) => window.removeEventListener(S, h, !0)), ci = null;
    }, x = () => {
      const S = e();
      if (S != null && S.isConnected) {
        const R = S.getBoundingClientRect().top - n;
        Math.abs(R) > 0.5 && (r.scrollTop += R);
      }
      performance.now() < d ? y = requestAnimationFrame(x) : h();
    };
    p.forEach((S) => window.addEventListener(S, h, { capture: !0, passive: !0 })), ci = h, x();
  }
  function Ro() {
    var r;
    const e = Le;
    Le = null, ao(), ui().scrollTop = Hs, pr(() => Os(e), Fs);
    const n = e.startsWith("room:") ? T.querySelector('.tfAreaPanel[data-area="' + CSS.escape(e.slice(5)) + '"]') : e === "weather" ? fn.wx.querySelector(".wbOpenPage") : T.querySelector('[data-k="sum:' + CSS.escape(e) + '"]');
    (r = (n == null ? void 0 : n.querySelector("[data-go]")) || n) == null || r.focus({ preventScroll: !0 });
  }
  const Fl = (e) => e.wrap ? e.wrap(e.tiles.map((n) => n.html).join(""), e) : '<div class="tfBlock" data-tf data-k="' + ie(e.key) + '" style="order:' + e.order + '"><div class="tfActions">' + e.tiles.map((n) => n.html).join("") + "</div></div>", Qr = (e) => e.map((n) => n.key + (n.tiles ? "(" + n.tiles.map((r) => r.key).join(",") + ")" : "")).join(";");
  function ui() {
    for (let e = m.parentElement || m.getRootNode().host; e; e = e.parentElement || e.getRootNode().host) {
      const n = getComputedStyle(e).overflowY;
      if ((n === "auto" || n === "scroll") && e.scrollHeight > e.clientHeight) return e;
    }
    return document.scrollingElement;
  }
  function Ws(e) {
    const n = ui(), r = (x) => {
      const S = x.getBoundingClientRect();
      return S.height && S.bottom > 0 && S.top < window.innerHeight;
    }, d = [...T.children, ...T.querySelectorAll(".tfDashTiles > *")].find((x) => !x.matches(".tfDashTiles") && r(x)), p = d == null ? void 0 : d.dataset.k, y = d == null ? void 0 : d.getBoundingClientRect().top;
    e();
    const h = d != null && d.isConnected ? d : p && T.querySelector('[data-k="' + CSS.escape(p) + '"]');
    h != null && h.isConnected && y != null && (n.scrollTop += h.getBoundingClientRect().top - y);
  }
  function ao() {
    if (!v || !T) return;
    const e = Jr();
    T.querySelectorAll("[data-tf]").forEach((r) => r.remove()), hn.clear();
    const n = document.createElement("div");
    n.innerHTML = e.map((r) => r.tiles ? Fl(r) : r.html).join(""), e.forEach((r) => r.tiles ? r.tiles.forEach((d) => hn.set(d.key, d.html)) : hn.set(r.key, r.html)), xn = Qr(e), T.append(...n.children), Zi(e.weather), Ki(), Bi.disconnect(), kn(), da(T), fr(T), Xi(T), U(), j && br(j.id), os(), Io(), gr(), requestAnimationFrame(G);
  }
  const Vs = (e) => {
    var r;
    const n = a.activeElement && e.contains(a.activeElement) ? a.activeElement : null;
    return n && { label: n.getAttribute("aria-label"), act: (r = n.dataset) == null ? void 0 : r.act };
  }, oo = (e, n) => {
    var r;
    n && ((r = n.label && e.querySelector('[aria-label="' + CSS.escape(n.label) + '"]') || n.act && e.querySelector('[data-act="' + CSS.escape(n.act) + '"]')) == null || r.focus({ preventScroll: !0 }));
  };
  function Bo(e, n) {
    const r = document.createElement("div");
    r.innerHTML = n;
    const d = r.firstElementChild, p = Vs(e);
    e.replaceWith(d), da(d), fr(d), Xi(d), oo(d, p);
  }
  function Ut() {
    !v || !T || kt || Ws(zs);
  }
  function zs() {
    if (!T.querySelector("[data-tf]")) {
      ao();
      return;
    }
    const e = Jr();
    if (Qr(e) !== xn) {
      ao();
      return;
    }
    const n = (r) => [...Oe.keys()].some((d) => {
      const p = d.slice(d.indexOf("|") + 1);
      return r === p || r.endsWith(":" + p);
    });
    e.forEach((r) => (r.tiles || [r]).forEach((d) => {
      if (hn.get(d.key) === d.html || n(d.key)) return;
      const p = T.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (p) {
        if (hn.set(d.key, d.html), j && j.key === d.key && p.querySelector(".tfOpen")) {
          p.querySelector(".tfOpen .activityRowMeta").textContent = P(j.id);
          return;
        }
        Bo(p, d.html), j && j.key === d.key && br(j.id), d.key.startsWith("energy:") && os();
      }
    })), Io(), gr(), bs(), U(), Ye == null || Ye.update(), ot == null || ot.forEach((r) => r.update()), m.classList.contains("tfDash") && lr(), requestAnimationFrame(G);
  }
  const io = {
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
  }, Ol = (e) => {
    var r;
    const n = (((r = io[e.split(".")[0]]) == null ? void 0 : r.call(io, ft(e))) || []).filter(([, d]) => d != null && d !== "");
    return n.length ? '<div class="tfMoreRows">' + n.map(([d, p]) => '<div class="tfMoreRow"><span>' + ie(d) + "</span><span>" + ie(p) + "</span></div>").join("") + "</div>" : "";
  }, Ii = (e) => ji(e) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function ql(e, n = {}, r = !1) {
    return '<div class="tfMoreList">' + e.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + ie(d.name) + '</div><div class="tfMoreTiles' + (r ? " single" : "") + '">' + d.ids.map((p) => Ht(p, n)).join("") + "</div></div>").join("") + "</div>";
  }
  const $e = document.createElement("div");
  $e.className = "tfMoreBackdrop", $e.hidden = !0, m.appendChild($e);
  const js = (e, n) => {
    for (let r = e; r && r !== $e; r = r.parentElement) {
      const d = getComputedStyle(r).overflowY;
      if ((d === "auto" || d === "scroll") && r.scrollHeight > r.clientHeight + 1 && (n < 0 ? r.scrollTop > 0 : r.scrollTop + r.clientHeight < r.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let No = null;
  $e.addEventListener("touchstart", (e) => {
    No = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: !0 }), $e.addEventListener("touchmove", (e) => {
    var p, y;
    if (!No || e.touches.length > 1 || (y = (p = e.target).closest) != null && y.call(p, "input,textarea,select")) return;
    const n = e.touches[0], r = No.x - n.clientX, d = No.y - n.clientY;
    No = { x: n.clientX, y: n.clientY }, Math.abs(d) >= Math.abs(r) && !js(e.target, d) && e.preventDefault();
  }, { passive: !1 }), $e.addEventListener("wheel", (e) => {
    js(e.target, e.deltaY) || e.preventDefault();
  }, { passive: !1 });
  function ro() {
    const e = $e.querySelector(".tfMorePair"), n = $e.querySelector(".tfMore");
    e == null || e.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - n.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", ro, { passive: !0 }), v && St();
  let ra = [];
  const hr = (e) => e === "favourites" || e.startsWith("summary:") || e.startsWith("group:");
  function es(e) {
    const n = (S, R = "") => '<div class="tfMoreHead">' + (w != null && w.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + pd + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + ie(S) + "</div>" + R + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Wh + "</button></div>", r = (S, R) => '<div class="tfMoreNow"><div class="tfMoreState">' + ie(S) + "</div>" + (R ? '<div class="tfMoreSub">' + ie(R) + "</div>" : "") + "</div>", d = ql;
    if (e === "favourites") {
      const S = An(), R = new Set(S), F = [{ name: "Starred", ids: S }, { name: "Home", ids: Qe.homeVacuums }, { name: "Security", ids: [...Qe.security.alarms, ...Qe.security.locks] }, ...Qe.rooms.map((B) => ({ name: B.name, ids: [...B.actions, ...B.plugs] }))].map((B, Y) => Y ? { ...B, ids: B.ids.filter((xe) => !R.has(xe)) } : B).filter((B) => B.ids.length);
      return [n("Favourites"), r(S.length ? S.length + " starred" : "None starred"), d(F, { star: !0 }, !0)];
    }
    const p = (S, { name: R = "", alert: F = !1, plain: B = !1 } = {}) => {
      const Y = B ? [] : S.filter((le) => ml.includes(le.split(".")[0])), xe = S.filter((le) => !Y.includes(le)), Re = (le) => le.startsWith("vacuum.") && ft(le).battery_level != null ? ft(le).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (R ? '<div class="tfMoreGroupName">' + ie(R) + "</div>" : "") + '<div class="tfMoreActions">' + Y.map((le) => In(le, !0)).join("") + xe.map((le) => Ht(le, { plain: B, alert: F, say: B ? Re(le) : null })).join("") + "</div></div>";
    };
    if (e.startsWith("summary:")) {
      const S = ki().find((Y) => Y.key === e.slice(8));
      if (!S) return null;
      const R = S.key === "light" ? (S.groups || []).flatMap((Y) => Y.ids) : [], F = R.some((Y) => {
        var xe;
        return ((xe = b[Y]) == null ? void 0 : xe.state) === "on";
      }), B = R.length ? '<button class="primary" type="button" data-acts="' + Za(R.map((Y) => ["light", F ? "turn_off" : "turn_on", Y])) + '">' + (F ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(S.name), '<div class="tfMoreNowRow">' + r(S.value) + B + "</div>", ...(S.groups || []).map((Y) => p(Y.ids, { name: Y.name === S.name ? "" : Y.name, alert: Y.alert, plain: S.plain }))];
    }
    if (e.startsWith("group:")) {
      const [, S, R] = e.split(":"), F = Qe.rooms.find((xe) => xe.id === S), B = F && Ji(F).find((xe) => xe.key === R);
      if (!B) return null;
      const Y = B.acts ? '<button class="primary" type="button" data-acts="' + Za(B.acts) + '">' + (B.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(F.name + " " + B.label.toLowerCase()), '<div class="tfMoreNowRow">' + r(B.value) + Y + "</div>", p(Er(F, R))];
    }
    const y = e.split(".")[0], h = b[e], x = ml.includes(y) ? Zo(e) : { sections: [] };
    return [
      n(Ae(e)),
      r(_t(e), h.last_changed && Aa(Date.parse(h.last_changed))),
      (w == null ? void 0 : w.at) && '<svg class="tfGraph tfDay" data-day="' + ie(e) + '" role="img" aria-label="' + ie(Ae(e)) + ', last 24 hours"></svg>',
      y === "cover" && '<div data-cover-art="' + ie(e) + '"></div>',
      ...x.sections.filter(Boolean),
      Po(e) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(w != null && w.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Hc + "</button>"
    ].filter(Boolean);
  }
  const Po = (e) => hr(e) ? "" : Ol(e) + Ii(e);
  let so = "";
  function Rn(e) {
    var n;
    w && (w.details = e, Io(), (n = $e.querySelector(e ? "[data-details-close]" : "[data-details]")) == null || n.focus({ preventScroll: !0 }));
  }
  const Hi = (e) => {
    const n = b[e], r = Pn(e), d = ma(e);
    return { kind: ud(n), name: Ae(e), text: _t(e), pos: r, target: Math.abs(d - r) > 0.5 ? d : null, moving: n.state === "opening" || n.state === "closing", tilt: Qt(e) ?? 100, canSet: dt(e, Dc) };
  };
  function fr(e) {
    e.querySelectorAll("[data-cover-art]").forEach((n) => {
      const r = n.dataset.coverArt, d = n.dataset.artKey || "more:" + r;
      let p = N.get(d);
      p || (p = qh({ onMove: (y) => Wn(r, y), onSet: (y) => {
        Wn(r, y), Vi("pos", r);
      } }), p.coverId = r, N.set(d, p)), n.replaceWith(p.el), p.update(Hi(r));
    });
  }
  const mr = (e) => [...N.values()].filter((n) => n.coverId === e), ts = () => N.forEach((e) => {
    b[e.coverId] && e.update(Hi(e.coverId));
  }), gr = () => {
    N.forEach((e, n) => {
      e.el.isConnected || (e.destroy(), N.delete(n));
    }), ts();
  };
  function Io() {
    var y, h;
    if (!w || !(hr(w.id) || b[w.id])) {
      $e.hidden = !0;
      return;
    }
    if ([...Oe.keys()].some((x) => x.endsWith("|" + w.id))) {
      ts();
      return;
    }
    const e = es(w.id), n = $e.querySelector(".tfMore");
    if (!e) {
      Oi();
      return;
    }
    const r = Vs($e), d = Po(w.id), p = w.frame ? w.frame.wide : w.id.startsWith("summary:") || w.id.startsWith("group:");
    if ($e.hidden || !n || e.length !== ra.length || n.classList.contains("wide") !== p) {
      const x = Fi ? w.scroll || 0 : !$e.hidden && n ? n.scrollTop : 0;
      $e.innerHTML = '<div class="tfMorePair' + ($e.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (p ? " wide" : "") + '"' + (w.frame ? ' style="height:' + w.frame.h + 'px"' : "") + ">" + e.join("") + "</section>" + (d ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + pd + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + d + "</div></div></aside>" : "") + "</div>", so = d, $e.classList.toggle("wide", p), $e.hidden = !1, ro(), fr($e), Xi($e), da($e), $e.querySelectorAll("[data-day]").forEach((S) => Vl(S.dataset.day, S, w.at)), x && ($e.querySelector(".tfMore").scrollTop = x), oo($e, r), $e.contains(a.activeElement) || (y = $e.querySelector("[data-more-close]")) == null || y.focus({ preventScroll: !0 });
    } else {
      if (e.forEach((x, S) => {
        var B, Y;
        if (x === ra[S] || x.includes("data-cover-art") || n.children[S].contains((Y = (B = a.activeElement) == null ? void 0 : B.matches) != null && Y.call(B, "input,select") ? a.activeElement : null) || [...Oe.keys()].some((xe) => n.children[S].querySelector('[data-drag="' + CSS.escape(xe) + '"]'))) return;
        const R = document.createElement("div");
        R.innerHTML = x;
        const F = R.firstElementChild;
        n.children[S].replaceWith(F), da(F), Xi(F);
      }), d !== so) {
        const x = $e.querySelector(".tfMoreSideBody");
        x && (x.innerHTML = d), so = d;
      }
      $e.contains(a.activeElement) || oo($e, r);
    }
    (h = $e.querySelector(".tfMorePair")) == null || h.classList.toggle("details", !!(w.details && d)), ra = e, ts();
  }
  setInterval(() => {
    w && Io();
  }, 15 * 1e3);
  function Ho(e, n) {
    var p;
    const r = !!(w && n && $e.contains(n)), d = r && $e.querySelector(".tfMore");
    r && (w.scroll = d.scrollTop), w = { id: e, opener: r ? w.opener : n, back: r ? w : null, frame: r ? w.frame || { wide: d.classList.contains("wide"), h: d.offsetHeight } : null, at: Number((p = n == null ? void 0 : n.dataset) == null ? void 0 : p.at) || null }, Fo();
  }
  let Fi = !1;
  function Fo() {
    ra = [], Fi = !$e.hidden, N.forEach((e, n) => {
      n !== w.id && $e.contains(e.el) && (e.destroy(), N.delete(n));
    }), Io(), Fi = !1;
  }
  function Oi() {
    var r, d, p, y, h, x;
    const e = w == null ? void 0 : w.opener;
    w = null, N.forEach((S, R) => {
      $e.contains(S.el) && (S.destroy(), N.delete(R));
    }), Hn.forEach((S, R) => {
      R.startsWith("more:") && Hn.delete(R);
    }), $e.hidden = !0, $e.innerHTML = "";
    const n = { preventScroll: !0 };
    e != null && e.isConnected ? e.focus(n) : (r = e == null ? void 0 : e.dataset) != null && r.more ? (d = T.querySelector('[data-more="' + CSS.escape(e.dataset.more) + '"]')) == null || d.focus(n) : (p = e == null ? void 0 : e.dataset) != null && p.summary ? (y = T.querySelector('[data-summary="' + CSS.escape(e.dataset.summary) + '"]')) == null || y.focus(n) : (h = e == null ? void 0 : e.hasAttribute) != null && h.call(e, "data-favs-edit") && ((x = T.querySelector("[data-favs-edit]")) == null || x.focus(n));
  }
  function ns(e, n, r, d = {}) {
    const p = n.map((de) => de[1]), y = d.zero ? 0 : Math.min(...p), h = Math.max(...p), x = Math.max(120, e.clientWidth || 260), S = Math.max(60, e.clientHeight || 130), R = 8, F = S - 20, B = Date.now() - 24 * 3600 * 1e3, Y = 24 * 3600 * 1e3, xe = (de) => Math.max(0, Math.min(x, (de - B) / Y * x)), Re = (de) => h === y ? (R + F) / 2 : F - (de - y) / (h - y) * (F - R);
    let le = "M" + xe(n[0][0]).toFixed(1) + " " + Re(n[0][1]).toFixed(1);
    for (let de = 1; de < n.length; de++) le += d.smooth ? "L" + xe(n[de][0]).toFixed(1) + " " + Re(n[de][1]).toFixed(1) : "H" + xe(n[de][0]).toFixed(1) + "V" + Re(n[de][1]).toFixed(1);
    e.setAttribute("viewBox", "0 0 " + x + " " + S), e.setAttribute("aria-label", r), e.innerHTML = '<path d="' + le + "V" + F + "H" + xe(n[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + le + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (S - 4) + '">24 h ago</text><text x="' + x + '" y="' + (S - 4) + '" text-anchor="end">Now</text>';
  }
  const as = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, qn = (e, n) => {
    const r = e.split(".")[0];
    return as[r] ? as[r].includes(n) : r === "alarm_control_panel" || r === "climate" || r === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(n) : n === "on";
  }, on = (e) => {
    const n = e.split(".")[0], r = ft(e).device_class;
    return n === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[r] || (fl.includes(r) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[n] || "On";
  }, vr = /* @__PURE__ */ new Map();
  let Wl = 0;
  async function Gs(e) {
    let n = vr.get(e);
    if (!n || Date.now() - n.at > 60 * 1e3) {
      let p = [];
      try {
        const y = await I({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        p = ((y == null ? void 0 : y[e]) || []).map((h) => [h.lu != null ? h.lu * 1e3 : Date.parse(h.last_updated || h.last_changed), String(h.s ?? h.state)]).filter(([h]) => Number.isFinite(h));
      } catch {
      }
      p.length || (p = (Xo || []).filter((y) => y.entity_id === e).map((y) => [y.when * 1e3, String(y.state)])), n = { at: Date.now(), pts: p }, vr.set(e, n);
    }
    const r = b[e], d = n.pts.slice().sort((p, y) => p[0] - y[0]);
    return r && (!d.length || d[d.length - 1][1] !== r.state) && d.push([Date.parse(r.last_changed) || Date.now(), r.state]), d;
  }
  async function Vl(e, n, r) {
    const d = await Gs(e);
    if (!n.isConnected) return;
    const p = d.map(([je, et]) => [je, Number(et)]);
    if (d.length > 1 && p.every(([, je]) => Number.isFinite(je))) {
      ns(n, p, Ae(e) + ", last 24 hours");
      return;
    }
    const y = Date.now(), h = y - 864e5, x = Math.max(200, n.clientWidth || 360), S = 62, R = (je) => Math.max(0, Math.min(x, (je - h) / 864e5 * x)), F = [];
    let B = null;
    d.forEach(([je, et]) => {
      const en = qn(e, et);
      en && B == null ? B = Math.max(je, h) : !en && B != null && (F.push([B, Math.max(je, h)]), B = null);
    }), B != null && F.push([B, y]);
    const Y = ar(e) ? "var(--danger)" : e.startsWith("light.") ? "#ffaa00" : "var(--primary)", xe = on(e), Re = "tfDayClip" + ++Wl, le = F.map(([je, et]) => xe + (et >= y - 1e3 && je <= h + 1e3 ? " all day" : et >= y - 1e3 ? " since " + Dt(je) : je <= h + 1e3 ? " until " + Dt(et) : " " + Dt(je) + "–" + Dt(et)));
    let de = "", H = -1 / 0;
    F.forEach(([je], et) => {
      const en = le[et].length * 5.4, zt = Math.min(R(je), x - en);
      zt < H + 8 || (de += '<text x="' + zt.toFixed(1) + '" y="10">' + ie(le[et]) + "</text>", H = zt + en);
    });
    let ge = '<text x="' + x + '" y="' + (S - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((je) => {
      let et = new Date(y).setHours(je, 0, 0, 0);
      et > y && (et -= 864e5), R(et) > 8 && R(et) < x - 34 && (ge += '<text x="' + R(et).toFixed(1) + '" y="' + (S - 2) + '" text-anchor="middle">' + String(je).padStart(2, "0") + "</text>");
    }), n.setAttribute("viewBox", "0 0 " + x + " " + S), n.setAttribute("aria-label", Ae(e) + ", last 24 hours: " + (le.length ? le.join(", ") : "no changes")), n.innerHTML = '<clipPath id="' + Re + '"><rect x="0" y="18" width="' + x + '" height="26" rx="8"/></clipPath>' + de + '<rect x="0" y="18" width="' + x + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + Re + ')">' + F.map(([je, et]) => '<rect x="' + R(je).toFixed(1) + '" y="18" width="' + Math.max(2, R(et) - R(je)).toFixed(1) + '" height="26" fill="' + Y + '"/>').join("") + "</g>" + (r && r >= h ? '<line x1="' + R(r).toFixed(1) + '" x2="' + R(r).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + ge;
  }
  function Us(e) {
    var d;
    const n = Number((d = b[e]) == null ? void 0 : d.state), r = Date.now();
    if (ft(e).state_class === "total_increasing") {
      const p = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), y = Math.max(1, r - p);
      return [...Array(49)].map((h, x) => p + y * x / 48).map((h) => [h, Math.round(n * Math.pow((h - p) / y, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((p, y) => [r - (48 - y) * 30 * 60 * 1e3, Math.round(n * (0.96 + 0.04 * Math.sin(y / 6)) * 10) / 10]);
  }
  async function br(e, n) {
    var xe, Re;
    let r = we.get(e);
    if (e.endsWith("_solar_power")) r = { at: Date.now(), points: ec() };
    else if (ji(e)) r = { at: Date.now(), points: Us(e) };
    else if (!r || Date.now() - r.at > 5 * 60 * 1e3) {
      try {
        const le = new Date(Date.now() - 864e5).toISOString(), de = await I({ type: "history/history_during_period", start_time: le, entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), H = ((de == null ? void 0 : de[e]) || []).map((ge) => [ge.lu != null ? ge.lu * 1e3 : Date.parse(ge.last_updated || ge.last_changed), Number(ge.s ?? ge.state)]).filter(([ge, je]) => Number.isFinite(ge) && Number.isFinite(je));
        r = { at: Date.now(), points: H };
      } catch {
        r = { at: Date.now(), points: [] };
      }
      we.set(e, r);
    }
    const d = n || T.querySelector('[data-graph="' + CSS.escape(e) + '"]');
    if (!d) return;
    const p = b[e], y = ((xe = p == null ? void 0 : p.attributes) == null ? void 0 : xe.unit_of_measurement) || "", h = r.points.slice(), x = Number(p == null ? void 0 : p.state);
    if (Number.isFinite(x) && !e.endsWith("_solar_power") && h.push([Date.now(), x]), h.length < 2) {
      d.setAttribute("aria-label", Ae(e) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const S = h.map((le) => le[1]), R = Math.min(...S), F = Math.max(...S), B = (le) => le.toLocaleString(void 0, { maximumFractionDigits: Math.abs(le) >= 100 ? 0 : 1 }), Y = ((Re = p == null ? void 0 : p.attributes) == null ? void 0 : Re.state_class) === "total_increasing";
    ns(d, h, Ae(e) + ", last 24 hours: " + (Y ? "+" + B(S[S.length - 1] - S[0]) : R === F ? B(R) : B(R) + " to " + B(F)) + (y ? " " + y : ""), { smooth: e.endsWith("_solar_power"), zero: e.endsWith("_solar_power") });
  }
  function os() {
    const e = T == null ? void 0 : T.querySelector("[data-solar]");
    if (!e) return;
    const n = ec();
    ns(e, n, "Solar, last 24 hours: up to " + Ie(Math.max(...n.map((r) => r[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Ys(e, n) {
    const r = n.entity_id, d = C.get(r) || {}, p = { open_cover: 100, close_cover: 0, set_cover_position: n.position, toggle: Pn(r) > 0 ? 0 : 100 }[e], y = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: n.tilt_position }[e];
    p != null && (d.pos = p), y != null && (d.tilt = y), e === "stop_cover" && (delete d.pos, delete d.tilt), e === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), C.set(r, d);
  }
  function lo(e, n, r) {
    var p;
    const d = r == null ? void 0 : r.entity_id;
    return e !== "light" || typeof d != "string" || !He[d] || !Lt(d) || r.brightness_pct != null || r.brightness != null ? [n, r] : n !== "turn_on" && !(n === "toggle" && ((p = b[d]) == null ? void 0 : p.state) !== "on") ? [n, r] : ["turn_on", { ...r, brightness_pct: He[d] }];
  }
  function qi(e, n, r, d) {
    let p = { entity_id: r, ...d || {} };
    return [n, p] = lo(e, n, p), e === "cover" && Ys(n, p), at[r] = (at[r] || 0) + 1, gi.set(Bc, JSON.stringify(at)), Yi.call(e, n, p) ? Promise.resolve() : Promise.resolve(re(e, n, p));
  }
  function Zs(e) {
    const [n, r, d, p] = e.split("|");
    qi(n, r, d, p ? JSON.parse(p) : null).catch(() => {
    });
  }
  function Wn(e, n) {
    Oe.set("pos|" + e, n), hn.delete(e), ra = ra.map(() => ""), [T, $e].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(e) + '"]').forEach((p) => Pt(p, n)));
    const r = T.querySelector('.tfAction[data-k="' + CSS.escape(e) + '"] .tfName .activityRowMeta');
    if (r && (r.textContent = Math.round(n) + "%"), (w == null ? void 0 : w.id) === e) {
      const d = $e.querySelector(".tfMoreState"), p = $e.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(n) + "%", d.classList.add("live")), p && (p.textContent = "Currently " + Pn(e) + "%");
    }
    mr(e).forEach((d) => d.update(Hi(e)));
  }
  const is = (e, n) => {
    const r = e.shiftKey ? 10 : 1, d = { ArrowUp: n + r, ArrowRight: n + r, ArrowDown: n - r, ArrowLeft: n - r, PageUp: n + 25, PageDown: n - 25, Home: 0, End: 100 }[e.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function zl(e, n) {
    var le;
    const r = e.dataset.blocks;
    (le = e.setPointerCapture) == null || le.call(e, n.pointerId);
    const d = (de) => {
      const H = e.getBoundingClientRect();
      return Math.max(0, Math.min(100, (de.clientX - H.left) / H.width * 100));
    }, p = d(n), y = n.clientX;
    let h = !1, x = ma(r), S = p, R = 0;
    const F = () => {
      x = Math.abs(S - x) < 0.2 ? S : x + (S - x) * 0.14, Wn(r, x), R = requestAnimationFrame(F);
    }, B = () => {
      h || (h = !0, e.classList.add("fine"), R = requestAnimationFrame(F));
    }, Y = setTimeout(B, 350), xe = (de) => {
      S = d(de), Math.abs(de.clientX - y) > 6 && (clearTimeout(Y), B());
    }, Re = () => {
      clearTimeout(Y), cancelAnimationFrame(R), e.removeEventListener("pointermove", xe), e.removeEventListener("pointerup", Re), e.removeEventListener("pointercancel", Re), e.classList.remove("fine"), Wn(r, h ? Math.round(x) : (Math.min(3, Math.floor(p / 25)) + 1) * 25), Vi("pos", r);
    };
    e.addEventListener("pointermove", xe), e.addEventListener("pointerup", Re), e.addEventListener("pointercancel", Re);
  }
  function Oo(e) {
    var p;
    const [n, r] = e.dataset.open.split("|"), d = e.closest(".tfCard");
    j = { key: n, id: r, h: d ? Math.round(d.getBoundingClientRect().height) : 0 }, hn.delete(n), Ut(), (p = T.querySelector(".tfOpen [data-close]")) == null || p.focus({ preventScroll: !0 });
  }
  function Wi(e) {
    var n;
    ve = e.dataset.area, T.querySelectorAll(".tfAreaPanel").forEach((r) => {
      var p;
      const d = r === e;
      r.classList.toggle("active", d), r.setAttribute("aria-expanded", String(d)), (p = r.querySelector(".panelExpanded")) == null || p.toggleAttribute("inert", !d);
    }), hn.set("areas", Nr(((n = T.querySelector('[data-k="areas"]')) == null ? void 0 : n.style.order) || 1));
  }
  const wr = {
    bright: { value: (e, n) => Math.round(n * 100), text: (e, n) => n ? n + "%" : "Off", send: (e, n) => n > 0 ? ["light", "turn_on", { brightness_pct: n }] : ["light", "turn_off", {}] },
    ct: { value: (e, n) => {
      const [r, d] = Ua(e);
      return Math.round(r + n * (d - r));
    }, text: (e, n) => n.toLocaleString() + "k", send: (e, n) => ["light", "turn_on", { color_temp_kelvin: n }] },
    hue: { value: (e, n) => Math.round(n * 360), text: () => "Colour", send: (e, n) => {
      var r;
      return ["light", "turn_on", { hs_color: [n, Math.max(60, ((r = ft(e).hs_color) == null ? void 0 : r[1]) || 100)] }];
    } },
    pos: { value: (e, n) => Math.round(n * 100), text: (e, n) => Math.round(n) + "%", send: (e, n) => ["cover", "set_cover_position", { position: Math.round(n) }] },
    tilt: { value: (e, n) => Math.round(n * 100), text: (e, n) => "Tilt " + n + "%", send: (e, n) => ["cover", "set_cover_tilt_position", { tilt_position: n }] },
    vol: { value: (e, n) => Math.round(n * 100) / 100, text: (e, n) => Math.round(n * 100) + "%", send: (e, n) => ["media_player", "volume_set", { volume_level: n }] }
  };
  function qo(e, n, r, d) {
    var S;
    const p = wr[n].value(r, d);
    Oe.set(n + "|" + r, p);
    const y = Math.round(d * 100) + "%", h = e.querySelector("i");
    if (n === "tilt") {
      h.style.width = "calc((100% - 6px) * " + d + ")";
      const [R, F] = e.querySelectorAll("span");
      R.classList.toggle("lit", d > 0.08), F.classList.toggle("lit", d > 0.92), hn.delete(r), ra = ra.map(() => ""), mr(r).forEach((B) => B.update(Hi(r)));
    } else if (h) h.style.width = y;
    else {
      let R = e.querySelector("b");
      R || (R = document.createElement("b"), e.appendChild(R)), R.style.left = y;
    }
    e.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const x = (S = e.closest(".tfAction") || e.closest(".tfMore")) == null ? void 0 : S.querySelector(".tfName .activityRowMeta, .tfMoreState");
    x && (x.textContent = wr[n].text(r, p));
  }
  function Vi(e, n) {
    const r = Oe.get(e + "|" + n), [d, p, y] = wr[e].send(n, r), h = () => setTimeout(() => {
      Oe.delete(e + "|" + n), Ut();
    }, 1500);
    qi(d, p, n, y).then(h, h);
  }
  function Vn(e) {
    e.addEventListener("click", (n) => {
      var d, p;
      const r = n.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (aa && !n.target.closest(".tfBoardMenu,[data-board-more]") && qa(), !(!r || !e.contains(r) || r.disabled))
        if (r.dataset.boardMore)
          (aa == null ? void 0 : aa.key) === r.dataset.boardMore ? qa(!0) : ti(r.dataset.boardMore, r);
        else if (r.dataset.boardAct) Es(aa.key, r.dataset.boardAct);
        else if (r.dataset.boardShow) jr(r.dataset.boardShow);
        else if (r.dataset.favHide) Ma(r.dataset.favHide, !1);
        else if (r.dataset.energyPick) Jo(r.dataset.energyPick);
        else if (r.dataset.act) Zs(r.dataset.act);
        else if (r.hasAttribute("data-details")) Rn(!(w != null && w.details));
        else if (r.hasAttribute("data-details-close")) Rn(!1);
        else if (r.dataset.summary) Ss(r.dataset.summary, r);
        else if (r.dataset.star) Ba(r.dataset.star);
        else if (r.hasAttribute("data-more-back")) {
          const y = w.id;
          w = w.back, Fo(), (d = $e.querySelector('.tfMore [data-more="' + CSS.escape(y) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else if (r.hasAttribute("data-favs-edit")) Ho("favourites", r);
        else if (r.dataset.acts) JSON.parse(r.dataset.acts).forEach(([y, h, x, S]) => qi(y, h, x, S).catch(() => {
        }));
        else if (r.dataset.more) Ho(r.dataset.more, r);
        else if (r.hasAttribute("data-more-close")) Oi();
        else if (r.dataset.go) qs("room:" + r.dataset.go);
        else if (r.hasAttribute("data-area-back")) Ro();
        else if (r.dataset.open) Oo(r);
        else if (r.hasAttribute("data-close")) {
          const y = j;
          j = null, hn.delete(y.key), Ut(), (p = T.querySelector('[data-open="' + CSS.escape(y.key + "|" + y.id) + '"]')) == null || p.focus({ preventScroll: !0 });
        } else r.classList.contains("tfAreaPanel") && !r.classList.contains("active") && Wi(r);
    }), e.addEventListener("keydown", (n) => {
      var d, p, y, h, x, S, R;
      const r = n.target;
      if ((d = r.dataset) != null && d.open && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Oo(r)), (p = r.dataset) != null && p.energyPick && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Jo(r.dataset.energyPick)), (y = r.classList) != null && y.contains("tfAreaPanel") && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Wi(r)), (h = r.dataset) != null && h.summary && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Ss(r.dataset.summary, r)), n.key === "Escape" && aa && e === T) {
        n.preventDefault(), qa(!0);
        return;
      }
      if (n.key === "Escape" && Xt && e === T) {
        n.preventDefault(), Oa(!1), (x = c("dashEditNav")) == null || x.focus();
        return;
      }
      if (n.key === "Escape" && Le && e === T && (n.preventDefault(), Ro()), (S = r.dataset) != null && S.blocks) {
        const F = r.dataset.blocks, B = is(n, Math.round(ma(F)));
        if (B == null) return;
        n.preventDefault(), Wn(F, B), clearTimeout(ue.get(F)), ue.set(F, setTimeout(() => Vi("pos", F), 500));
        return;
      }
      if ((R = r.dataset) != null && R.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(n.key)) {
        n.preventDefault();
        const [F, B] = r.dataset.drag.split("|"), Y = Number(r.getAttribute("aria-valuenow")) / 100, xe = n.key === "Home" ? 0 : n.key === "End" ? 1 : Math.max(0, Math.min(1, Y + (n.key === "ArrowLeft" || n.key === "ArrowDown" ? -0.05 : 0.05)));
        qo(r, F, B, xe), Vi(F, B);
      }
    }), e.addEventListener("pointerdown", (n) => {
      var en;
      const r = n.target.closest("[data-blocks]");
      if (r && n.button === 0) {
        n.preventDefault(), zl(r, n);
        return;
      }
      const d = n.target.closest("[data-drag]");
      if (!d || n.button > 0) return;
      const [p, y] = d.dataset.drag.split("|");
      if (p === "bright" && !Lt(y)) {
        Zs(xt("light", "toggle", y));
        return;
      }
      const h = p === "bright" && ((en = b[y]) == null ? void 0 : en.state) !== "on", x = n.pointerType !== "mouse", S = p === "tilt" ? 3 : 0, R = () => d.getBoundingClientRect().width - S * 2, F = (zt) => {
        const zn = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (zt.clientX - zn.left - S) / R()));
      };
      let B = x ? "waiting" : h ? "pressed" : "dragging", Y = 0, xe = 0;
      const Re = n.clientX, le = n.clientY, de = (zt, zn) => Math.hypot(zt.clientX - Re, zt.clientY - le) > zn, H = () => {
        try {
          d.setPointerCapture(n.pointerId);
        } catch {
        }
      };
      x || (n.preventDefault(), H()), B === "dragging" && qo(d, p, y, F(n));
      const ge = x && setTimeout(() => {
        var zt, zn;
        B === "waiting" && (B = "held", E = d, d.classList.add("held"), H(), (zt = navigator.userActivation) != null && zt.hasBeenActive && ((zn = navigator.vibrate) == null || zn.call(navigator, 8)), Y = h ? (He[y] ?? 100) / 100 : Number(d.getAttribute("aria-valuenow")) / 100, xe = Re, qo(d, p, y, Y));
      }, k), je = (zt) => {
        B === "waiting" && de(zt, 8) ? B = "gone" : B === "pressed" && de(zt, 4) && (B = "dragging"), B === "held" ? qo(d, p, y, Math.max(0, Math.min(1, Y + (zt.clientX - xe) / R()))) : B === "dragging" && qo(d, p, y, F(zt));
      }, et = (zt) => {
        clearTimeout(ge), ["pointermove", "pointerup", "pointercancel"].forEach((zn, Ge) => d.removeEventListener(zn, Ge ? et : je)), d.classList.remove("held"), E === d && (E = null), B === "held" || B === "dragging" ? Vi(p, y) : zt.type === "pointerup" && h && (B === "waiting" || B === "pressed") && qi("light", "turn_on", y).catch(() => {
        });
      };
      d.addEventListener("pointermove", je), d.addEventListener("pointerup", et), d.addEventListener("pointercancel", et);
    }), e.addEventListener("touchmove", (n) => {
      E && n.cancelable && n.preventDefault();
    }, { passive: !1 });
  }
  return T && v && (Xa(), Vn(T), Vn($e), $e.addEventListener("click", (e) => {
    e.target === $e && Oi();
  }), (rs = a.getElementById("homeNav")) == null || rs.addEventListener("click", () => {
    Le && Ro();
  }), (Ks = a.querySelector(".bottomNav")) == null || Ks.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Fc + "</button>"), ($s = c("dashEditNav")) == null || $s.addEventListener("click", () => Oa(!Xt)), T.addEventListener("pointerdown", $r), T.addEventListener("hass-action", (e) => {
    var d, p;
    const n = (p = (d = e.target).closest) == null ? void 0 : p.call(d, ".tfDac"), r = n == null ? void 0 : n.dataset.k;
    !r || !n.dataset.dac.startsWith("dash:") || Xt || (e.stopPropagation(), Ho(r, n));
  }), new ResizeObserver(() => {
    m.classList.contains("tfDash") && Ls() !== xo ? Ut() : lr();
  }).observe(T), window.addEventListener("resize", lr, { passive: !0 }), $e.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.stopPropagation(), w != null && w.details ? Rn(!1) : Oi());
  })), Q(), {
    update(e) {
      if (!v) return;
      const n = !Object.keys(b).length;
      b = e || {};
      for (const r in b) r.startsWith("light.") && b[r].state === "on" && Lt(r) && qe(r, mo(b[r]));
      n ? ao() : Ut();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      fo = !0, Ye == null || Ye.destroy(), Ye = null, ot == null || ot.forEach((e) => e.destroy()), ot = null;
    },
    resume() {
      fo = !1, !(!v || !(T != null && T.querySelector("[data-tf]"))) && (lt.isConnected && Zi(lt.style.order), Ki());
    }
  };
}
const pf = "0.52.0", gd = "move_assistant", hf = "move_assistant", Wc = "move_assistant_checkin_reminder";
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
        key: gd
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
      { type: "frontend/subscribe_user_data", key: gd }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: gd,
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
    const o = `config/automation/config/${Wc}`;
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
      id: Wc,
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
