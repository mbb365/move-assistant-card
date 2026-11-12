const _f = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button,.tfMoreSwitch>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Rf = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityHeader{display:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfRoomTile{padding:18px;gap:0;border-radius:28px}#app.tfOverview.tfDash #homeView .tfRoomTile>.tfActionHead{margin-bottom:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfActionHead .activityRowMeta{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-top:35px;gap:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomBig{font:400 48px/64px var(--font-tile);letter-spacing:-1.92px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomSub{display:block;margin-top:-7px;font:400 16px/19px var(--font)}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:flex;justify-content:space-between;min-height:0;margin-top:auto;padding-top:16px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomHeads{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{justify-content:flex-start;gap:18.67px}#app.light.tfOverview.tfDash #homeView .tfRoomTile .tfRoomIcon{background-color:#acacac;color:#fff}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfOverview.tfDash #homeView .tfRoomTile{overflow:hidden}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaL .tfRoomBig{font-size:calc(48px * var(--hc-k,1));line-height:calc(64px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaL .tfRoomReading{margin-top:calc(35px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomReading{margin-top:calc(14px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomBig{font-size:calc(40px * var(--hc-k,1));line-height:calc(52px * var(--hc-k,1));letter-spacing:-1.6px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomSub{margin-top:-6px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS{padding:12px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomReading{margin-top:calc(8px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomBig{font-size:calc(32px * var(--hc-k,1));line-height:calc(40px * var(--hc-k,1));letter-spacing:-1.28px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomSub{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaM,.hcAreaS) .tfRoomDevices,#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaM,.hcAreaS):not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:0 8px;height:var(--chip-size);overflow:hidden;padding-top:0;margin-top:auto}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomReading{flex:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-bottom:12px}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomBig{font-size:calc(64px * var(--hc-k,1));line-height:calc(80px * var(--hc-k,1));letter-spacing:-2.56px}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomReading{margin-top:calc(35px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomSub{display:block}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomDevices{display:none!important}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin-top:auto}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{border-radius:28px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}@media (max-width:620px){#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content);gap:12px;justify-content:start}}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}`, Bf = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}`, Pf = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', Nf = `<main id="app"><div class="shell">
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
`, zn = {
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
}, Vn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Bp = (n, l, i) => n + (l - n) * i, gp = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((u) => u + u).join("") : l;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, Hf = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Pp = {}, ba = (n, l, i) => {
  const u = n + l + i;
  return Pp[u] || (Pp[u] = Hf(gp(n).map((v, x) => v + (gp(l)[x] - v) * i)));
}, Np = {}, fc = (n) => Np[n] || (Np[n] = gp(n)), $c = (n, l, i, u) => (v) => {
  if (v <= 0) return 0;
  if (v >= 1) return 1;
  let x = 0, k = 1, A = v;
  for (let I = 0; I < 18; I++)
    A = (x + k) / 2, 3 * (1 - A) * (1 - A) * A * n + 3 * (1 - A) * A * A * i + A * A * A < v ? x = A : k = A;
  return 3 * (1 - A) * (1 - A) * A * l + 3 * (1 - A) * A * A * u + A * A * A;
}, If = { std: $c(0.2, 0, 0, 1), acc: $c(0.3, 0, 1, 1), dec: $c(0, 0, 0, 1) };
function Mc(n, l) {
  const i = String(n || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || l ? "night" : "day");
}
function Fu(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [ba(l.clear[0], l.cloudy[0], 0.12), ba(l.clear[1], l.cloudy[1], 0.12)], l.storm = [ba(l.rain[0], "#000000", 0.22), ba(l.rain[1], "#000000", 0.22)], l;
}
const vp = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], bp = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], wp = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function xp(n, l = zn) {
  const i = { ...zn, ...l }, u = Fu(i), v = String(n).split("/"), x = u[v[0]] ? v[0] : "clear", k = v[1] === "night", A = u[x][k ? 1 : 0], I = {
    night: k,
    clearness: x === "clear" ? 1 : x === "partly" ? 0.7 : 0.25,
    sky: A,
    skyStops: [A],
    skyT: 0,
    sun: { x: 45, y: k ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: k ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: k ? 1 : 0 },
    stars: vp.map(() => ({ o: 0 })),
    rain: bp.map(() => ({ o: 0, dy: -16 })),
    snow: wp.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, M = (W) => vp.map(() => ({ o: W }));
  return x === "clear" ? k ? (I.moon.o = 1, I.stars = M(1)) : I.sun.o = 1 : x === "partly" ? (I.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: k ? 1 : 0 }, k ? (I.moon = { x: 34, y: 33, d: 48, o: 1 }, I.stars = M(0.7)) : I.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : x === "cloudy" || x === "fog" ? (I.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: k ? 1 : 0 }, k ? I.moon = { x: 40, y: 36, d: 40, o: 0 } : I.sun = { x: 40, y: 36, r: 20, o: 0 }) : (I.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, k ? I.moon = { x: 38, y: 28, d: 36, o: 0 } : I.sun = { x: 38, y: 28, r: 18, o: 0 }, x === "snow" ? I.snow = wp.map(() => ({ o: 1, dy: 0 })) : I.rain = bp.map((W, F) => ({ o: x === "storm" && F === 1 ? 0 : 1, dy: 0 })), x === "storm" && (I.bolt = { o: 1, dy: 0 })), I;
}
const Hp = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Ff(n, l, i, u = zn, v = !1) {
  const x = { ...zn, ...u }, k = (V, z) => V > 0.01 && z > 0.01 ? "stay" : V > 0.01 ? "leave" : z > 0.01 ? "enter" : "none", A = (V, z, pe, te) => {
    const Q = V[0] + z * te, G = V[1] - (pe - 1 - z) * te;
    return If[V[2]](Vn((i - Q) / Math.max(1e-3, G - Q)));
  }, I = (V, z, pe, te = 0, Q = 1, G = 0) => {
    const he = k(V.o, z.o);
    if (he === "none") return { ...z, o: 0 };
    const ce = A(Hp[pe][he], te, Q, G), ke = {};
    for (const ie in z) ke[ie] = v && he !== "stay" && ie !== "o" ? he === "leave" ? V[ie] : z[ie] : Bp(V[ie], z[ie], ce);
    return ke;
  }, M = A(Hp.sky, 0, 1, 0);
  let W, F;
  if (n.night !== l.night) {
    const V = Math.min(n.clearness, l.clearness), z = ba(ba(n.sky, l.sky, 0.5), x.dusk, 0.6 * V);
    W = M < 0.5 ? ba(n.sky, z, M * 2) : ba(z, l.sky, M * 2 - 1), F = V > 0.5 ? [n.sky, x.dusk, l.sky] : [n.sky, l.sky];
  } else
    W = ba(n.sky, l.sky, M), F = [n.sky, l.sky];
  return {
    night: i < 0.5 ? n.night : l.night,
    clearness: Bp(n.clearness, l.clearness, i),
    sky: W,
    skyStops: F,
    skyT: M,
    sun: I(n.sun, l.sun, "body"),
    moon: I(n.moon, l.moon, "body"),
    cloud: I(n.cloud, l.cloud, "cloud"),
    stars: l.stars.map((V, z) => I(n.stars[z], V, "fx", z, l.stars.length, 0.05)),
    rain: l.rain.map((V, z) => I(n.rain[z], V, "fx", z, l.rain.length, 0.05)),
    snow: l.snow.map((V, z) => I(n.snow[z], V, "fx", z, l.snow.length, 0.05)),
    bolt: I(n.bolt, l.bolt, "fx")
  };
}
const Of = [
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
], Wn = (n, l) => (Of[(l & 7) * 8 + (n & 7)] + 0.5) / 64, qf = 0, Mp = 1, Sp = 2, Cp = 3, Tp = 4, qn = 5, Al = 6, us = 7, Lp = 8, bc = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), Wf = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Vf = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), Ou = (n, l, i) => {
  let u = !1;
  for (let v = 0, x = n.length - 1; v < n.length; x = v++) {
    const k = n[v], A = n[x];
    k[1] > i != A[1] > i && l < (A[0] - k[0]) * (i - k[1]) / (A[1] - k[1]) + k[0] && (u = !u);
  }
  return u;
};
function qu(n, { size: l = 90, px: i = 2, oneBit: u = !1, colors: v = zn, ink: x = "#26221e", paper: k = "#fbf9f6", clock: A = 0, idle: I = !1 } = {}) {
  const M = { ...zn, ...v }, W = Math.sin, F = Math.PI * 2, V = Math.max(6, Math.round(l / i)), z = V / 90, pe = I ? Math.floor(A / 100) * 100 : 0, te = I ? W(F * pe / 3600) : 0, Q = I ? 1.8 * W(F * pe / 6400) : 0, G = I ? 0.9 * W(F * pe / 4100) : 0, he = I ? 0.8 * W(F * pe / 5200) : 0, ce = pe / 3400 % 1, ke = I && n.bolt.o > 0.5 && (ce < 0.04 || ce > 0.08 && ce < 0.11), ie = new Array(V * V), oe = new Uint8Array(V * V), ae = (T, B, q, R, de) => {
    q == null || T < 0 || B < 0 || T >= V || B >= V || (R >= 1 || R > Wn(T + 5, B + 3)) && (ie[B * V + T] = q, oe[B * V + T] = de);
  }, E = (T, B, q, R) => {
    for (let de = Math.max(0, Math.floor(B - q) - 1); de <= Math.min(V - 1, B + q + 1); de++) for (let ue = Math.max(0, Math.floor(T - q) - 1); ue <= Math.min(V - 1, T + q + 1); ue++) R(ue, de, ue + 0.5 - T, de + 0.5 - B);
  }, Ce = n.skyStops || [n.sky], le = n.skyT || 0;
  for (let T = 0; T < V; T++) {
    const B = n.night ? Vn(1 - (T + 0.5) / (V * 0.7)) * 0.85 : Vn(((T + 0.5) / V - 0.35) / 0.65) * 0.85;
    for (let q = 0; q < V; q++) {
      let R = Ce[0];
      if (Ce.length > 1) {
        const de = le * (Ce.length - 1), ue = Math.min(Ce.length - 2, Math.floor(de));
        R = de - ue > Wn(q, T) ? Ce[ue + 1] : Ce[ue];
      }
      B > Wn(q + 2, T + 5) && (R = n.night ? ba(R, "#000000", 0.28) : ba(R, "#ffffff", 0.2)), ie[T * V + q] = ke ? ba(R, "#ffffff", 0.25) : R;
    }
  }
  if (n.sun.o > 0.01) {
    const T = n.sun.x * z, B = n.sun.y * z, q = Math.max(1, n.sun.r * z);
    if (I) {
      const R = q * (1.45 + 0.06 * te), de = ba(M.sun, "#ffffff", 0.55);
      if (E(T, B, R, (ue, ve, Se, Te) => {
        const $e = Math.sqrt(Se * Se + Te * Te);
        $e > q && $e < R && ae(ue, ve, de, 0.26 * (1 - ($e - q) / (R - q)) * n.sun.o, qf);
      }), n.sun.o > 0.5) {
        const ue = Math.floor(pe / 500) % 2, ve = Math.max(1, q * 0.22);
        for (let Se = 0; Se < 8; Se++) if (Se % 2 === ue) for (let Te = q + 1.5; Te < q + 1.5 + ve; Te += 0.7) ae(Math.floor(T + Math.cos(Se * Math.PI / 4) * Te), Math.floor(B + Math.sin(Se * Math.PI / 4) * Te), M.sun, n.sun.o, Lp);
      }
    }
    E(T, B, q, (R, de, ue, ve) => {
      if (ue * ue + ve * ve > q * q) return;
      const Se = ((ue * 0.643 + ve * 0.766) / q + 1) / 2;
      ae(R, de, Vn((Se - 0.62) / 0.38) > Wn(R, de) ? M.sunEdge : M.sun, n.sun.o, Mp);
    });
  }
  if (vp.forEach((T, B) => {
    const q = n.stars[B].o;
    if (q < 0.01) return;
    const R = Math.floor(T[0] * z), de = Math.floor(T[1] * z), ue = I ? (Math.floor(pe / 300) + B * 3) % 6 : 0;
    if (ue === 5) return;
    const ve = Math.round(T[2] * z * (ue === 4 ? 0.3 : ue < 2 ? 1 : 0.6));
    ae(R, de, M.star, q, us);
    for (let Se = 1; Se <= ve; Se++) {
      const Te = Se === ve && ve > 1 ? ba(M.star, n.sky, 0.5) : M.star;
      ae(R - Se, de, Te, q, us), ae(R + Se, de, Te, q, us), ae(R, de - Se, Te, q, us), ae(R, de + Se, Te, q, us);
    }
  }), n.moon.o > 0.01) {
    const T = Math.max(1.5, n.moon.d * z * 0.37), B = n.moon.x * z, q = n.moon.y * z + (I && he > 0.4 ? -1 : 0), R = B + 0.547 * T, de = q - 0.503 * T, ue = 0.82 * T, ve = ba(M.moon, "#ffffff", 0.6);
    E(B, q, T, (Se, Te, $e, tt) => {
      if ($e * $e + tt * tt > T * T) return;
      const Ya = Se + 0.5 - R, Fe = Te + 0.5 - de;
      Ya * Ya + Fe * Fe <= ue * ue || ae(Se, Te, Vn((tt + T) / (2 * T) * 1.1 - 0.1) > Wn(Se, Te) ? M.moon : ve, n.moon.o, Sp);
    });
  }
  const qe = Math.max(2, Math.round(15.65 * z)), re = Math.max(1, Math.round(5.87 * z * 0.5));
  bp.forEach((T, B) => {
    const q = n.rain[B];
    let R = q.dy, de = q.o;
    if (de < 0.01) return;
    if (I) {
      const Se = (pe / 950 + B / 3) % 1;
      R += -5 + Se * 14, de *= Se < 0.18 ? Se / 0.18 : Se > 0.72 ? (1 - Se) / 0.28 : 1;
    }
    const ue = (T[0] + 3 + Q) * z, ve = (T[1] + R) * z;
    for (let Se = 0; Se < qe; Se++) for (let Te = 0; Te < re; Te++) ae(Math.floor(ue - 0.208 * Se) + Te, Math.floor(ve) + Se, M.rain, de, Tp);
  });
  const Ze = Math.max(0, Math.round(7.34 * z / 2.6));
  if (wp.forEach((T, B) => {
    const q = n.snow[B];
    let R = q.dy, de = 0, ue = q.o;
    if (ue < 0.01) return;
    if (I) {
      const Te = (pe / 3200 + B / 5) % 1;
      R += -6 + Te * 14, de = 1.5 * W(F * (Te * 1.5 + B / 5)), ue *= Te < 0.2 ? Te / 0.2 : Te > 0.75 ? (1 - Te) / 0.25 : 1;
    }
    const ve = Math.floor((T[0] + 3.67 + de + Q) * z), Se = Math.floor((T[1] + 3.67 + R) * z);
    ae(ve, Se, M.snow, ue, qn);
    for (let Te = 1; Te <= Ze; Te++)
      ae(ve - Te, Se, M.snow, ue, qn), ae(ve + Te, Se, M.snow, ue, qn), ae(ve, Se - Te, M.snow, ue, qn), ae(ve, Se + Te, M.snow, ue, qn), Ze > 1 && Te < Ze && (ae(ve - Te, Se - Te, M.snow, ue, qn), ae(ve + Te, Se - Te, M.snow, ue, qn), ae(ve - Te, Se + Te, M.snow, ue, qn), ae(ve + Te, Se + Te, M.snow, ue, qn));
  }), n.bolt.o > 0.01)
    if (V >= 30) {
      const T = 39 + Q, B = 50 + n.bolt.dy;
      for (let q = Math.floor(B * z); q <= (B + 28) * z; q++) for (let R = Math.floor(T * z); R <= (T + 13) * z; R++)
        Ou(Vf, (R + 0.5) / z - T, (q + 0.5) / z - B) && ae(R, q, M.sun, n.bolt.o, Al);
    } else {
      const T = V / 18, B = 7, q = 10 + Math.round(n.bolt.dy * 0.2);
      Wf.forEach((R, de) => R.split("").forEach((ue, ve) => {
        if (ue !== "#") return;
        const Se = Math.floor((B + ve) * T), Te = Math.floor((q + de) * T);
        for (let $e = Te; $e < Math.max(Te + 1, Math.floor((q + de + 1) * T)); $e++) for (let tt = Se; tt < Math.max(Se + 1, Math.floor((B + ve + 1) * T)); tt++) ae(tt, $e, M.sun, n.bolt.o, Al);
      }));
    }
  if (n.cloud.o > 0.01) {
    const T = Math.max(3, n.cloud.w * z), B = T * 0.6665, q = (n.cloud.x + Q) * z - T / 2, R = (n.cloud.y + G) * z - B / 2, de = ba(M.cloudDay, M.cloudNight, Math.round(n.cloud.f * 4) / 4), ue = ba(de, "#000000", 0.16);
    for (let ve = Math.max(0, Math.floor(R) - 1); ve <= Math.min(V - 1, R + B + 1); ve++) for (let Se = Math.max(0, Math.floor(q) - 1); Se <= Math.min(V - 1, q + T + 1); Se++) {
      const Te = (Se + 0.5 - q) / T, $e = (ve + 0.5 - R) / T;
      bc(Te, $e) && ae(Se, ve, !bc(Te, $e + 1 / T) || Vn(($e - 0.42) / 0.25) * 0.8 > Wn(Se, ve) ? ue : de, n.cloud.o, Cp);
    }
  }
  return Wu(ie, oe, V, V, { oneBit: u, ink: x, paper: k, snowInk: !n.night });
}
function Wu(n, l, i, u, { oneBit: v, ink: x, paper: k, snowInk: A }) {
  const I = new Uint8ClampedArray(i * u * 4), M = fc(x), W = fc(k);
  for (let F = 0; F < u; F++) for (let V = 0; V < i; V++) {
    const z = F * i + V, pe = l[z];
    if (n[z] == null) continue;
    let te = fc(n[z]);
    if (v) {
      let Q;
      pe === Tp || pe === Lp ? Q = !0 : pe === qn ? Q = A : pe === us || pe === Al ? Q = !1 : Q = Math.round((0.2126 * te[0] + 0.7152 * te[1] + 0.0722 * te[2]) / 255 * 4) / 4 <= Wn(V, F), (pe === Mp || pe === Sp || pe === Cp || pe === Al) && (V > 0 && l[z - 1] !== pe || V < i - 1 && l[z + 1] !== pe || F > 0 && l[z - i] !== pe || F < u - 1 && l[z + i] !== pe) && (Q = !0), te = Q ? M : W;
    }
    I[z * 4] = te[0], I[z * 4 + 1] = te[1], I[z * 4 + 2] = te[2], I[z * 4 + 3] = 255;
  }
  return { w: i, h: u, data: I };
}
const jf = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, zf = (n) => Mc(n, !1).split("/")[0], Xc = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Gf = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Uf = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Yf = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Zf = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Kf = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], $f = [".##", "##.", ".#.", "#.."];
function Vu(n, { width: l, height: i, colors: u, wave: v = 0.38, soft: x = 6, glow: k = 0.6 }) {
  const A = { ...zn, dawn: "#e5a77e", ...u }, I = Fu(A), M = l, W = i, F = M / 6, V = F / 2, z = Math.PI * 2, pe = n.length ? n : [{ cond: "cloudy", night: !1 }], te = [...Array(12)].map((ce, ke) => {
    const ie = pe[Math.min(ke, pe.length - 1)], oe = zf(ie.cond), ae = ke % 2 === 1;
    return { cond: ie.cond, k: oe, night: ae, sky: I[oe][ae ? 1 : 0], cover: jf[oe] };
  }), Q = (ce) => W * (0.5 - v * Math.cos(z * (ce / F - 0.25)));
  return { C: A, S: te, W: M, H: W, cw: F, sw: V, TAU: z, yb: Q, side: (ce, ke, ie) => {
    const oe = (ce ? Q(ke) - ie : ie - Q(ke)) / Math.max(3, x * 1.4) + 0.5;
    return oe <= 0 ? 0 : oe >= 1 ? 1 : oe;
  }, glowAt: (ce) => {
    const ke = ((ce / F - 0.25) % 1 + 1) % 1, ie = Math.max(0, Math.min(5, Math.round(ce / F - 0.25))), oe = Math.max(0, Math.min(5, Math.round(ce / F - 0.75))), ae = 1 - (te[2 * ie].cover + te[2 * oe + 1].cover) / 2, E = Math.sin(Math.PI * Math.min(1, Math.max(0, Q(ce) / W)));
    return { c: ke < 0.5 ? A.dusk : A.dawn, a: k * (0.2 + 0.8 * ae) * E * E };
  }, soft: x, tw: F * 0.3, sy: W / 90 };
}
function ju(n, { clock: l = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: v, sw: x, side: k, C: A, TAU: I, sy: M } = n, W = l, F = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return v.forEach((V, z) => {
    const pe = Xc(u * 977 + z * 131 + 7), te = (z + 0.5) * x, Q = V.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[V.k] : 0;
    for (let G = 0; G < Q; G++) {
      const he = te + (pe() - 0.5) * x * 1.6, ce = (6 + pe() * 76) * M, ke = pe() < 0.35, ie = 1.8 + pe() * 1.6, oe = k(!0, he, ce) * (ke ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(I * W / 2600 + G * 1.7 + z) : 1);
      oe >= 0.03 && F.stars.push({ x: he, y: ce, big: ke, size: ie, o: oe });
    }
    if (!V.night && (V.k === "clear" || V.k === "partly")) {
      const G = te + (pe() - 0.5) * x * 0.3, he = Math.min(15, x * 0.29);
      F.suns.push({ x: G, y: 32 * M, rad: he, halo: he * 2.8 * (i ? 1 + 0.07 * Math.sin(I * W / 3600 + z) : 1) });
    }
    if (V.night && (V.k === "clear" || V.k === "partly")) {
      const G = Math.min(0.78, x * 0.55 / 34), he = te - 23 * G + (pe() - 0.5) * x * 0.2;
      F.moons.push({ x: he + 23 * G, y: (4 + (i ? 0.8 * Math.sin(I * W / 5200 + z) : 0)) * M + 23 * G, d: 46 * G });
    }
  }), v.forEach((V, z) => {
    const pe = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[V.k];
    if (!pe) return;
    const te = Xc(u * 577 + z * 71 + 3), Q = (z + 0.5) * x, G = V.k === "rain" || V.k === "storm" || V.night ? A.cloudNight : A.cloudDay, he = V.night ? 0.82 : V.k === "storm" ? 0.75 : 1;
    for (let ce = 0; ce < pe; ce++) {
      const ke = x / 46 * (V.k === "partly" ? 0.85 : 0.75 + te() * 0.55), ie = Q + (V.k === "partly" ? x * 0.12 : (te() - 0.5) * x * 1.05), oe = (V.k === "partly" ? 40 : 6 + te() * 26) * M, ae = i ? 2.5 * Math.sin(I * W / 9e3 + z * 1.3 + ce * 2.1) : 0, E = i ? 0.9 * Math.sin(I * W / 6100 + z + ce) : 0;
      F.clouds.push({ x: ie - 23 * ke + ae, y: oe - 15.33 * ke + E, w: 46 * ke, h: 30.66 * ke, fill: G, o: he * (pe > 1 && ce === 0 ? 0.85 : 1) });
    }
  }), v.forEach((V, z) => {
    const pe = Xc(u * 313 + z * 29 + 11), te = (z + 0.5) * x, Q = V.cond === "pouring" ? 16 : V.cond === "rainy" || V.cond === "hail" ? 9 : V.cond === "lightning-rainy" ? 12 : V.cond === "snowy-rainy" ? 5 : 0;
    for (let he = 0; he < Q; he++) {
      let ce = te + (pe() - 0.5) * x * 1.05, ke = 44 + pe() * 36, ie = 1;
      if (i) {
        const ae = ((ke - 44 + W * 0.04) % 36 + 36) % 36;
        ce -= 0.21 * (ae - (ke - 44)), ke = 44 + ae, ie = Math.min(1, ae / 6, (36 - ae) / 6);
      }
      ke *= M;
      const oe = k(V.night, ce, ke) * ie;
      oe >= 0.05 && F.drops.push({ x: ce, y: ke, o: oe });
    }
    const G = V.cond === "snowy" ? 11 : V.cond === "snowy-rainy" ? 6 : 0;
    for (let he = 0; he < G; he++) {
      let ce = te + (pe() - 0.5) * x * 1.05, ke = 40 + pe() * 44, ie = 1;
      if (i) {
        const ae = ((ke - 40 + W * 9e-3) % 44 + 44) % 44;
        ke = 40 + ae, ce += 1.6 * Math.sin(I * W / 2800 + he * 1.9 + z), ie = Math.min(1, ae / 6, (44 - ae) / 6);
      }
      ke *= M;
      const oe = k(V.night, ce, ke) * ie;
      oe >= 0.05 && F.flakes.push({ x: ce, y: ke, o: oe });
    }
    if (V.k === "fog") {
      const he = V.night ? "#c8ccd6" : "#ffffff", ce = V.night ? 0.28 : 0.62, ke = i ? 4 * Math.sin(I * W / 8e3 + z) : 0;
      for (let ie = 0; ie < 4; ie++) F.fogs.push({ x: te - x * 0.75 + ie % 2 * x * 0.18 + (ie % 2 ? ke : -ke), y: (30 + ie * 13) * M, w: x * 1.3, c: he, a: ce });
    }
    if (V.k === "storm") {
      const he = (W / 3400 + z * 0.37) % 1;
      F.bolts.push({ x: te + (pe() - 0.5) * x * 0.3 - 5, y: 36 * M, o: i && !(he < 0.05 || he > 0.09 && he < 0.12) ? 0.8 : 1 });
    }
  }), F;
}
function Xf(n, l, i, u, v, x, k, A) {
  const { S: I, C: M, cw: W, yb: F, glowAt: V, soft: z, tw: pe, sy: te } = n, Q = new Array(i * u), G = new Uint8Array(i * u), he = new Uint8Array(i * u), ce = (T, B, q, R, de) => {
    q == null || T < 0 || B < 0 || T >= i || B >= u || (R >= 1 || R > Wn(T + 5, B + 3)) && (Q[B * i + T] = q, G[B * i + T] = de);
  }, ke = (T, B, q, R) => {
    for (let de = Math.max(0, Math.floor(B - q) - 1); de <= Math.min(u - 1, B + q + 1); de++) for (let ue = Math.max(0, Math.floor(T - q) - 1); ue <= Math.min(i - 1, T + q + 1); ue++) R(ue, de, ue + 0.5 - T, de + 0.5 - B);
  }, ie = (T, B, q) => {
    for (let de = 0; de < T.length - 1; de++) {
      const ue = (de + B) * W;
      if (q < ue - pe / 2) return [T[de], T[de], 0];
      if (q <= ue + pe / 2) return [T[de], T[de + 1], (q - ue + pe / 2) / pe];
    }
    const R = T[T.length - 1];
    return [R, R, 0];
  }, oe = I.filter((T) => !T.night).map((T) => T.sky), ae = I.filter((T) => T.night).map((T) => T.sky), E = z / x, Ce = 16 * te / x;
  for (let T = 0; T < i; T++) {
    const B = (T + 0.5) * v, q = F(B) / x, R = ie(oe, 0.75, B), de = ie(ae, 1.25, B), ue = V(B);
    for (let ve = 0; ve < u; ve++) {
      const Se = Wn(T, ve), Te = ve + 0.5 - q, $e = (E > 0.01 ? Vn(0.5 + Te / E) : Te > 0 ? 1 : 0) > Se;
      let tt = $e ? R[2] > Se ? R[1] : R[0] : de[2] > Se ? de[1] : de[0];
      ($e ? Vn(((ve + 0.5) / u - 0.45) / 0.55) * 0.7 : Vn(1 - (ve + 0.5) / (u * 0.55)) * 0.7) > Wn(T + 2, ve + 5) && (tt = $e ? ba(tt, "#ffffff", 0.18) : ba(tt, "#000000", 0.25)), $e && Te >= 0 && Te < Ce && ue.a * 1.3 * (1 - Te / Ce) > Wn(T + 6, ve + 1) && (tt = ue.c), Q[ve * i + T] = tt, he[ve * i + T] = $e ? 0 : 1;
    }
  }
  const le = ba(M.sun, "#ffffff", 0.55), qe = ba(M.moon, "#ffffff", 0.6);
  l.stars.forEach((T) => {
    const B = Math.floor(T.x / v), q = Math.floor(T.y / x);
    if (B < 0 || q < 0 || B >= i || q >= u || !he[q * i + B] || T.o < 0.15) return;
    const R = T.o > 0.45 ? M.star : ba(M.star, Q[q * i + B], 0.5), de = T.big && T.o > 0.6 ? Math.floor(T.size / v) : 0;
    ce(B, q, R, 1, us);
    for (let ue = 1; ue <= de; ue++) [[B - ue, q], [B + ue, q], [B, q - ue], [B, q + ue]].forEach((ve) => {
      ve[0] >= 0 && ve[1] >= 0 && ve[0] < i && ve[1] < u && he[ve[1] * i + ve[0]] && ce(ve[0], ve[1], R, 1, us);
    });
  }), l.suns.forEach((T) => {
    const B = Math.max(1.5, T.rad / v), q = T.x / v, R = T.y / x, de = T.halo / v * 0.85;
    if (ke(q, R, de, (ue, ve, Se, Te) => {
      const $e = Math.sqrt(Se * Se + Te * Te);
      $e > B && $e < de && !he[ve * i + ue] && ce(ue, ve, le, 0.3 * (1 - ($e - B) / (de - B)), 0);
    }), A) {
      const ue = Math.floor(k / 500) % 2, ve = Math.max(1, B * 0.3);
      for (let Se = 0; Se < 8; Se++) if (Se % 2 === ue) for (let Te = B + 1.2; Te < B + 1.2 + ve; Te += 0.7) ce(Math.floor(q + Math.cos(Se * Math.PI / 4) * Te), Math.floor(R + Math.sin(Se * Math.PI / 4) * Te), M.sun, 1, Lp);
    }
    ke(q, R, B, (ue, ve, Se, Te) => {
      Se * Se + Te * Te <= B * B && ce(ue, ve, Vn(((Te / B + 1) / 2 - 0.6) / 0.4) > Wn(ue, ve) ? M.sunEdge : M.sun, 1, Mp);
    });
  }), l.moons.forEach((T) => {
    const B = Math.max(1.5, T.d * 0.37 / v), q = T.x / v, R = T.y / x, de = q + 0.547 * B, ue = R - 0.503 * B, ve = 0.82 * B;
    ke(q, R, B, (Se, Te, $e, tt) => {
      if ($e * $e + tt * tt > B * B) return;
      const Ya = Se + 0.5 - de, Fe = Te + 0.5 - ue;
      Ya * Ya + Fe * Fe > ve * ve && ce(Se, Te, Vn((tt + B) / (2 * B) * 1.1 - 0.1) > Wn(Se, Te) ? M.moon : qe, 1, Sp);
    });
  }), l.clouds.forEach((T) => {
    const B = Math.max(3, T.w / v), q = B * 0.6665, R = T.x / v, de = T.y / x, ue = ba(T.fill, "#000000", 0.16);
    for (let ve = Math.max(0, Math.floor(de) - 1); ve <= Math.min(u - 1, de + q + 1); ve++) for (let Se = Math.max(0, Math.floor(R) - 1); Se <= Math.min(i - 1, R + B + 1); Se++) {
      const Te = (Se + 0.5 - R) / B, $e = (ve + 0.5 - de) / B;
      bc(Te, $e) && ce(Se, ve, !bc(Te, $e + 1 / B) || Vn(($e - 0.42) / 0.25) * 0.8 > Wn(Se, ve) ? ue : T.fill, T.o, Cp);
    }
  }), l.fogs.forEach((T) => {
    const B = Math.floor(T.y / x), q = Math.max(B, Math.floor((T.y + 6 * te) / x) - 1), R = Math.floor(T.x / v), de = Math.floor((T.x + T.w) / v);
    for (let ue = B; ue <= q; ue++) for (let ve = R; ve <= de; ve++) {
      const Se = (ve - R) / Math.max(1, de - R);
      ce(ve, ue, T.c, T.a * (Se < 0.25 ? Se / 0.25 : Se > 0.75 ? (1 - Se) / 0.25 : 1), 0);
    }
  });
  const re = Math.max(2, Math.round(9 / x));
  l.drops.forEach((T) => {
    const B = T.x / v, q = Math.floor(T.y / x);
    for (let R = 0; R < re; R++) ce(Math.floor(B - 0.208 * R * x / v), q + R, M.rain, T.o, Tp);
  });
  const Ze = Math.max(0, Math.round(4.4 / v / 2.6));
  return l.flakes.forEach((T) => {
    const B = Math.floor(T.x / v), q = Math.floor(T.y / x);
    ce(B, q, M.snow, T.o, qn);
    for (let R = 1; R <= Ze; R++)
      ce(B - R, q, M.snow, T.o, qn), ce(B + R, q, M.snow, T.o, qn), ce(B, q - R, M.snow, T.o, qn), ce(B, q + R, M.snow, T.o, qn);
  }), l.bolts.forEach((T) => {
    if (v <= 3.5)
      for (let B = Math.floor(T.y / x); B <= (T.y + 24) / x; B++) for (let q = Math.floor(T.x / v); q <= (T.x + 11) / v; q++)
        Ou(Kf, (q + 0.5) * v - T.x, (B + 0.5) * x - T.y) && ce(q, B, M.sun, 1, Al);
    else {
      const B = Math.round(T.x / v), q = Math.round(T.y / x);
      $f.forEach((R, de) => R.split("").forEach((ue, ve) => {
        ue === "#" && ce(B + ve, q + de, M.sun, 1, Al);
      }));
    }
  }), { col: Q, ids: G };
}
function Jf(n, l) {
  const i = l.px, u = Math.max(6, Math.round(l.width / i)), v = Math.max(6, Math.round(l.height / i)), x = l.width / u, k = l.height / v, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, I = (z) => {
    const pe = Vu(z, l);
    return Xf(pe, ju(pe, { clock: A, ambient: l.ambient, seed: l.seed }), u, v, x, k, A, l.ambient);
  }, M = I(n), W = l.reveal == null ? 1 : Vn(l.reveal);
  let F = M.col, V = M.ids;
  if (W < 1) {
    const z = l.prev ? I(l.prev) : null, pe = W * (u + 12);
    F = new Array(u * v), V = new Uint8Array(u * v);
    for (let te = 0; te < u * v; te++) {
      const Q = te % u, G = te / u | 0;
      (l.reduce ? W : Vn((pe - Q) / 12)) > Wn(Q, G) ? (F[te] = M.col[te], V[te] = M.ids[te]) : z ? (F[te] = z.col[te], V[te] = z.ids[te]) : (F[te] = null, V[te] = 255);
    }
  }
  return Wu(F, V, u, v, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function Qf(n, l, i) {
  const u = i.width, v = i.height, x = i.reveal == null ? 1 : Vn(i.reveal), k = (V, z) => {
    const pe = Vu(z, i);
    eh(V, pe, ju(pe, i));
  };
  if (n.clearRect(0, 0, u, v), x >= 1) {
    k(n, l);
    return;
  }
  if (i.prev && k(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = x, k(n, l), n.restore();
    return;
  }
  const A = n.canvas, I = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (I.width !== A.width || I.height !== A.height) && (I.width = A.width, I.height = A.height);
  const M = I.getContext("2d");
  M.setTransform(n.getTransform()), M.clearRect(0, 0, u, v), k(M, l);
  const W = x * (u + 64) - 64, F = M.createLinearGradient(W, 0, W + 64, 0);
  F.addColorStop(0, "rgba(0,0,0,1)"), F.addColorStop(1, "rgba(0,0,0,0)"), M.globalCompositeOperation = "destination-in", M.fillStyle = F, M.fillRect(0, 0, u, v), M.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(I, 0, 0), n.restore();
}
function eh(n, l, i) {
  const { W: u, H: v, S: x, C: k, cw: A, yb: I, glowAt: M, soft: W, tw: F, sy: V } = l, z = (le, qe) => {
    const re = fc(le);
    return "rgba(" + re[0] + "," + re[1] + "," + re[2] + "," + Math.max(0, Math.min(1, qe)).toFixed(3) + ")";
  }, pe = (le, qe) => {
    const re = n.createLinearGradient(0, 0, u, 0);
    re.addColorStop(0, le[0]);
    for (let Ze = 0; Ze < le.length - 1; Ze++) {
      const T = (Ze + qe) * A, B = (T - F / 2) / u, q = (T + F / 2) / u;
      B > 0 && B < 1 && re.addColorStop(B, le[Ze]), q > 0 && q < 1 && re.addColorStop(q, le[Ze + 1]);
    }
    return re.addColorStop(1, le[le.length - 1]), re;
  }, te = Math.max(24, Math.ceil(u / 4)), Q = (le, qe) => {
    n.beginPath();
    for (let re = 0; re <= te; re++) {
      const Ze = u * re / te, T = le == null ? 0 : I(Ze) + le;
      re ? n.lineTo(Ze, T) : n.moveTo(Ze, T);
    }
    for (let re = te; re >= 0; re--) {
      const Ze = u * re / te;
      n.lineTo(Ze, I(Ze) + qe);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = pe(x.filter((le) => !le.night).map((le) => le.sky), 0.75), n.fillRect(0, 0, u, v);
  const G = n.createLinearGradient(0, 0, u, 0);
  for (let le = 0; le <= 64; le++) {
    const qe = M(u * le / 64);
    G.addColorStop(le / 64, z(qe.c, Math.min(1, qe.a)));
  }
  n.fillStyle = G;
  for (let le = 0; le < 8; le++)
    n.globalAlpha = 1 - le / 8, Q(le * 2 * V, (le + 1) * 2 * V);
  n.fillStyle = pe(x.filter((le) => le.night).map((le) => le.sky), 1.25);
  const he = Math.max(0.5, W), ce = 6;
  n.globalAlpha = 1, Q(null, -he);
  for (let le = 0; le < ce; le++)
    n.globalAlpha = 1 - (le + 0.5) / ce, Q(-he + 2 * he * le / ce, -he + 2 * he * (le + 1) / ce);
  n.globalAlpha = 1;
  const ke = new Path2D(Yf), ie = new Path2D(Uf), oe = new Path2D(Gf), ae = new Path2D(Zf);
  n.fillStyle = k.star, i.stars.forEach((le) => {
    n.globalAlpha = le.o, le.big ? (n.save(), n.translate(le.x, le.y), n.scale(le.size, le.size), n.fill(ke), n.restore()) : (n.beginPath(), n.arc(le.x, le.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const E = ba(k.sun, "#ffffff", 0.55);
  i.suns.forEach((le) => {
    const qe = n.createRadialGradient(le.x, le.y, 0, le.x, le.y, le.halo);
    qe.addColorStop(0, z(E, 0.42)), qe.addColorStop(0.7, z(E, 0)), n.fillStyle = qe, n.beginPath(), n.arc(le.x, le.y, le.halo, 0, Math.PI * 2), n.fill();
    const re = n.createLinearGradient(0, le.y - le.rad, 0, le.y + le.rad);
    re.addColorStop(0.6, k.sun), re.addColorStop(1, k.sunEdge), n.fillStyle = re, n.beginPath(), n.arc(le.x, le.y, le.rad, 0, Math.PI * 2), n.fill();
  });
  const Ce = ba(k.moon, "#ffffff", 0.6);
  i.moons.forEach((le) => {
    n.save(), n.translate(le.x - le.d / 2, le.y - le.d / 2), n.scale(le.d / 46, le.d / 46);
    const qe = n.createLinearGradient(0, 6, 0, 40);
    qe.addColorStop(0, Ce), qe.addColorStop(1, k.moon), n.fillStyle = qe, n.fill(ie), n.restore();
  }), i.clouds.forEach((le) => {
    n.save(), n.globalAlpha = le.o, n.translate(le.x, le.y), n.scale(le.w / 46, le.h / 30.66), n.translate(-4, -9.67), n.fillStyle = le.fill, n.fill(oe), n.restore();
  }), i.fogs.forEach((le) => {
    const qe = n.createLinearGradient(le.x, 0, le.x + le.w, 0);
    qe.addColorStop(0, z(le.c, 0)), qe.addColorStop(0.25, z(le.c, le.a)), qe.addColorStop(0.75, z(le.c, le.a)), qe.addColorStop(1, z(le.c, 0)), n.fillStyle = qe, n.fillRect(le.x, le.y, le.w, 6 * V);
  }), n.fillStyle = k.rain, i.drops.forEach((le) => {
    n.save(), n.globalAlpha = le.o, n.translate(le.x, le.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, i.flakes.forEach((le) => {
    n.globalAlpha = le.o, n.beginPath(), n.arc(le.x, le.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, i.bolts.forEach((le) => {
    n.save(), n.globalAlpha = le.o, n.translate(le.x, le.y), n.fill(ae), n.restore();
  }), n.restore();
}
function th(n, l) {
  var po, zd, Gd, Ud, Yd, dd, Zd;
  const i = (a) => n.getElementById(a), u = i("workoutView"), v = i("workoutNameInput");
  let x = !0;
  const k = i("homeClock");
  function A() {
    k && (k.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  A(), setInterval(A, 15e3);
  const I = i("createFlow"), M = i("createMovementsSlot"), W = i("createTimingSlot"), F = i("createFinishSlot"), V = i("movementStepSummary"), z = i("timingStepSummary"), pe = i("finishStepSummary"), te = i("continueToTiming"), Q = i("continueToFinish"), G = i("finishMoveButton");
  let he = !1, ce = [];
  function ke(a) {
    !a || ce.some((s) => s.node === a) || ce.push({ node: a, parent: a.parentNode, next: a.nextSibling });
  }
  function ie(a, s) {
    a && (ke(a), s.appendChild(a));
  }
  function oe() {
    [...ce].reverse().forEach(({ node: a, parent: s, next: d }) => {
      s && (d && d.parentNode === s ? s.insertBefore(a, d) : s.appendChild(a));
    }), ce = [];
  }
  function ae(a) {
    n.querySelectorAll(".createStep").forEach((s) => {
      s.classList.toggle("active", s.dataset.createStep === a);
    }), a === "timing" && (he = !0), E();
  }
  function E() {
    var we, Me;
    if (!Jt) return;
    ht[Tt];
    const a = Xe.filter((ge) => !ge.hidden), s = a.filter((ge) => ge.kind !== "rest").length, d = a.filter((ge) => ge.kind === "rest").length;
    V.textContent = s ? s + " movement" + (s === 1 ? "" : "s") + (d ? " · " + d + " rest" + (d === 1 ? "" : "s") : "") : "No movements yet";
    const m = s > 0, S = n.querySelector('[data-open-step="timing"]'), _ = n.querySelector('[data-open-step="finish"]');
    S.disabled = !m, te.disabled = !m, z.textContent = m ? go(B.value) + " · " + Ba(q.value) + " movement · " + Ba(R.value) + " rest" : "Add a movement first", _.disabled = !(m && he);
    const O = ((v == null ? void 0 : v.value) || "").trim(), Y = [];
    (we = i("includeWarmupPreset")) != null && we.checked && Y.push("warm-up"), (Me = i("includeCooldownPreset")) != null && Me.checked && Y.push("cooldown"), pe.textContent = O ? O + (Y.length ? " · " + Y.join(" + ") : "") : Y.length ? Y.join(" + ") : "Name and optional extras";
  }
  function Ce() {
    var Ie, at, je;
    I.hidden = !1, he = !1;
    const a = n.querySelector(".editNameRow"), s = i("createMoveOptions"), d = n.querySelector(".timeTiles"), m = i("routineSummaryModal"), S = n.querySelector(".tempoRevealRow"), _ = i("tempoExperiment"), O = (Ie = i("warmupList")) == null ? void 0 : Ie.closest("section"), Y = i("movementCreatorLaunch"), we = i("movementCreator"), Me = (at = i("strengthList")) == null ? void 0 : at.closest("section"), ge = (je = i("cooldownList")) == null ? void 0 : je.closest("section");
    [s == null ? void 0 : s.querySelector(".createExtras"), O, Y, we, Me, ge].forEach((He) => He && ie(He, M)), [s, d, m, S, _].forEach((He) => ie(He, W)), ie(a, F), ae("movements"), E();
  }
  function le() {
    oe(), I.hidden = !0, n.querySelectorAll(".createStep").forEach((a) => a.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((a) => a.addEventListener("click", () => {
    a.disabled || ae(a.dataset.openStep);
  })), te.addEventListener("click", () => {
    te.disabled || ae("timing");
  }), Q.addEventListener("click", () => ae("finish")), G.addEventListener("click", () => i("saveWorkoutEdit").click());
  const qe = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, re = i("homeNav"), Ze = i("settingsNav");
  function T(a) {
    Object.entries(qe).forEach(([s, d]) => d.classList.toggle("active", s === a)), re.classList.toggle("active", a === "home"), Ze.classList.toggle("active", a === "settings"), a === "home" && setTimeout(Ne, 400), a === "settings" && (requestAnimationFrame(() => lr(n.querySelector(".tab.active"), !1)), Xa());
  }
  const B = i("totalTime"), q = i("workTime"), R = i("restTime"), de = i("totalOut"), ue = i("workOut"), ve = i("restOut"), Se = i("totalFill"), Te = i("workFill"), $e = i("restFill"), tt = i("roundsInput"), Ya = i("roundsFill"), Fe = i("roundsOut"), fo = i("totalLabel"), Gn = i("routineSummaryModal"), ho = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let oa = ho.map((a) => ({ ...a })), Xe = [
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
  const pt = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let on = pt.map((a) => ({ ...a }));
  const eo = {
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
  }, Ye = mt(l.data), ht = Ye.profiles;
  let Tt = ht[Ye.selected] ? Ye.selected : Ye.order.find((a) => ht[a]) || "kettlebell";
  function mt(a) {
    const s = a && typeof a == "object" ? JSON.parse(JSON.stringify(a)) : {}, d = s.profiles && Object.keys(s.profiles).length ? s.profiles : JSON.parse(JSON.stringify(eo)), m = (Array.isArray(s.order) ? s.order : Object.keys(d)).filter((S) => d[S]);
    return Object.keys(d).forEach((S) => {
      m.includes(S) || m.push(S);
    }), {
      v: 1,
      profiles: d,
      order: m,
      selected: s.selected || m[0],
      history: Array.isArray(s.history) ? s.history : [],
      checkins: (Array.isArray(s.checkins) ? s.checkins : wn(s.energy)).map(hs),
      settings: { ...s.settings || {} }
    };
  }
  function wn(a) {
    if (!Array.isArray(a)) return [];
    const s = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], d = [];
    return a.forEach((m) => {
      const S = new Date(m.at);
      if (isNaN(S)) return;
      const _ = S.getFullYear() + "-" + String(S.getMonth() + 1).padStart(2, "0") + "-" + String(S.getDate()).padStart(2, "0"), O = S.getHours() < 14 ? "morning" : "evening";
      if (d.some((we) => we.date === _ && we.slot === O)) return;
      const Y = s.indexOf(m.value) + 1;
      Y > 0 && d.push({ date: _, slot: O, mood: null, energy: Y, at: m.at });
    }), d;
  }
  function hs(a) {
    if (a.scale === 100) return a;
    const s = (d) => d == null ? null : Math.round((Number(d) - 1) / 5 * 100);
    return { ...a, mood: s(a.mood), energy: s(a.energy), scale: 100 };
  }
  function An() {
    Jt || (Ye.selected = Tt, Ye.order = Ye.order.filter((a) => ht[a] && a !== mo), l.save(Ye));
  }
  function vt() {
    return Ye.settings;
  }
  function Kt(a) {
    const s = ht[a];
    if (!s) return;
    Tt = a;
    const d = i("workoutNameInput");
    if (d && (d.value = s.name), B.value = s.total, q.value = s.work, R.value = s.rest, tt.value = s.rounds || 1, s.customSequence) {
      const m = (s.sequence || []).map((_) => ({ ..._ })), S = (_) => m.filter((O) => O.presetRole === _).map(({ presetRole: O, ...Y }) => Y);
      oa = (s.warmup || S("warmup")).map((_) => ({ ..._ })), on = (s.cooldown || S("cooldown")).map((_) => ({ ..._ })), Xe = m.filter((_) => !_.presetRole), Wi(s.preset || "movement", !1);
    } else
      B.min = 3, B.max = 40, B.step = 1, q.min = 20, q.max = 60, q.step = 5, R.min = 5, R.max = 30, R.step = 5, oa = (s.warmup || ho).map((m) => ({ ...m })), on = (s.cooldown || pt).map((m) => ({ ...m })), Xe = s.strength.map((m) => Array.isArray(m) ? (([S, _, O, Y = !1]) => ({ id: S, name: _, group: O, kind: "work", hidden: !!Y }))(m) : { ...m });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((m) => m.classList.toggle("active", m.dataset.workout === a)), Gt();
  }
  function ms(a, s, d) {
    const m = a.getBoundingClientRect(), S = m.width / 2, _ = m.height / 2, O = s - S, Y = d - _;
    let we = 1 / 0, Me = 1 / 0;
    O !== 0 && (we = S / Math.abs(O)), Y !== 0 && (Me = _ / Math.abs(Y));
    const ge = Math.min(Math.max(1 / Math.min(we, Me), 0), 1);
    let me = Math.atan2(Y, O) * (180 / Math.PI) + 90;
    return me < 0 && (me += 360), { edge: ge, angle: me };
  }
  function Ho(a, s, d = !1) {
    const m = a.getBoundingClientRect(), S = s.clientX - m.left, _ = s.clientY - m.top, { edge: O, angle: Y } = ms(a, S, _), we = d ? 100 : O * 100;
    a.style.setProperty("--edge-proximity", we.toFixed(3)), a.style.setProperty("--cursor-angle", Y.toFixed(3) + "deg"), a.classList.toggle("borderGlowActive", d || we >= 30);
  }
  function gs(a) {
    a.addEventListener("pointermove", (d) => Ho(a, d, !1)), a.addEventListener("pointerenter", (d) => Ho(a, d, !1)), a.addEventListener("pointerdown", (d) => Ho(a, d, !0));
    const s = () => {
      a.classList.remove("borderGlowActive"), a.style.setProperty("--edge-proximity", "0");
    };
    a.addEventListener("pointerleave", s), a.addEventListener("pointerup", s), a.addEventListener("pointercancel", s);
  }
  gs(i("addWorkoutPanel"));
  let Jt = !1, mo = null;
  function nt(a) {
    return String(a ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]);
  }
  function El(a) {
    return a.summary ? a.summary : a.customSequence ? go(a.total) + " · custom move" : go(a.total) + " · " + Ba(a.work) + " / " + Ba(a.rest) + " · warm-up + cooldown";
  }
  function Un(a, s) {
    var _;
    const d = document.createElement("article");
    d.className = "workoutPanel", d.dataset.workout = a, d.tabIndex = 0;
    const m = s.activityCount ?? (((_ = s.sequence) == null ? void 0 : _.length) || 0);
    d.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + nt(s.name) + '</div><div class="sub">' + nt(El(s)) + '</div><span class="sourceTag">' + nt(s.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (m ? m + " activities" + ((s.rounds || 1) > 1 ? " × " + s.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + nt(s.name) + "</div></div>";
    const S = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(d, S), gs(d), d.addEventListener("click", (O) => {
      O.target.closest("button") || Kt(a);
    }), d.addEventListener("keydown", (O) => {
      (O.key === "Enter" || O.key === " ") && !O.target.closest("button") && (O.preventDefault(), Kt(a));
    }), d.querySelector(".seeWorkoutBtn").addEventListener("click", (O) => {
      O.stopPropagation(), Kt(a), Ks(!1);
    }), d.querySelector(".startWorkoutBtn").addEventListener("click", (O) => {
      O.stopPropagation(), Kt(a), Ec();
    }), d;
  }
  function wa() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.remove()), Ye.order.forEach((a) => {
      ht[a] && Un(a, ht[a]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === Tt));
  }
  wa(), i("addWorkoutPanel").addEventListener("keydown", (a) => {
    (a.key === "Enter" || a.key === " ") && (a.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    Jt = !0, mo = "custom-" + Date.now(), ht[mo] = {
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
    }, Kt(mo), Ks(!0);
  });
  let Ke = [], dt = 0, xa = 0, wt = 1, Pe = !1, At = null, Et = null, It = !1, En = Ye.settings.upcomingCount ?? "all", vs = "movement";
  function wr(a, s, d) {
    return (Number(a) - s) / (d - s) * 100;
  }
  function Ba(a) {
    const s = Math.max(0, Number(a) || 0);
    return s >= 3600 && s % 3600 === 0 ? s / 3600 + " hr" : s >= 60 && s % 60 === 0 ? s / 60 + " min" : s >= 60 ? Math.round(s / 60) + " min" : Math.round(s) + " sec";
  }
  function go(a) {
    const s = Math.max(0, Number(a) || 0);
    return s >= 60 && s % 60 === 0 ? s / 60 + " hr" : s >= 60 ? Math.floor(s / 60) + " hr " + s % 60 + " min" : s + " min";
  }
  function xr() {
    Se.style.width = wr(B.value, Number(B.min), Number(B.max)) + "%", Te.style.width = wr(q.value, Number(q.min), Number(q.max)) + "%", $e.style.width = wr(R.value, Number(R.min), Number(R.max)) + "%", ue.textContent = Ba(q.value), ve.textContent = Ba(R.value);
    const a = Number(tt.value) || 1;
    Ya.style.width = wr(a, 1, 10) + "%", fo.textContent = a > 1 ? "Time per round" : "Total time";
  }
  function bs(a) {
    return a.filter((s) => !s.hidden);
  }
  function vo(a) {
    const s = Math.max(0, Math.round(Number(a) || 0)), d = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), S = s % 60;
    return (d ? d + ":" + String(m).padStart(2, "0") : m) + ":" + String(S).padStart(2, "0");
  }
  function js(a) {
    let s;
    try {
      s = new URL(String(a || "").trim());
    } catch {
      return null;
    }
    const d = s.hostname.replace(/^(www|m|music)\./, "");
    let m = null;
    if (d === "youtu.be") m = s.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(d))
      if (s.pathname === "/watch") m = s.searchParams.get("v");
      else {
        const Y = s.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        Y && (m = Y[2]);
      }
    if (!m || !/^[\w-]{11}$/.test(m)) return null;
    const S = (Y) => {
      if (!Y) return 0;
      if (/^\d+$/.test(Y)) return Number(Y);
      const we = Y.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return we ? (Number(we[1]) || 0) * 3600 + (Number(we[2]) || 0) * 60 + (Number(we[3]) || 0) : 0;
    }, _ = S(s.searchParams.get("t") || s.searchParams.get("start")), O = S(s.searchParams.get("end"));
    return { id: m, start: _, end: O > _ ? O : null };
  }
  function qi(a, s) {
    if (a.useVideoLength === !1) return Math.max(5, Number(a.duration) || s || 300);
    const d = Number(a.start) || 0, m = Number(a.end) || Number(a.videoDuration) || 0;
    return m > d ? Math.round(m - d) : Number(a.duration) || 300;
  }
  function bo(a, s) {
    const d = Math.max(0, Number(a) || 0);
    return Math.round(s === "hour" ? d * 3600 : s === "min" ? d * 60 : d);
  }
  function Wi(a, s = !0) {
    vs = a, n.querySelectorAll(".createPresetBtn").forEach((m) => m.classList.toggle("active", m.dataset.movePreset === a));
    const d = ht[Tt];
    d && (d.preset = a), a === "work" ? (B.min = 30, B.max = 480, B.step = 30, q.min = 300, q.max = 7200, q.step = 300, R.min = 60, R.max = 1800, R.step = 60, s && (B.value = 60, q.value = 1500, R.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (B.min = 3, B.max = 40, B.step = 1, q.min = 20, q.max = 60, q.step = 5, R.min = 5, R.max = 30, R.step = 5, s && (B.value = 20, q.value = 45, R.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), xr();
  }
  function Vi(a, s) {
    const d = vs === "work";
    return a.map((m, S) => ({ ...m, id: s + "-" + S + "-" + Date.now().toString(36), useGlobalTiming: !d, duration: d ? 60 : Number(q.value) }));
  }
  function yr() {
    const a = ht[Tt];
    a != null && a.customSequence && (a.includeWarmup = i("includeWarmupPreset").checked, a.includeCooldown = i("includeCooldownPreset").checked, a.includeWarmup && !oa.length && (oa = Vi(ho, "warm")), a.includeCooldown && !on.length && (on = Vi(pt, "cool")), Gt());
  }
  function Dl() {
    const a = i("upcomingCountSetting");
    if (!a) return;
    const s = Math.max(1, Ke.length - 1), d = En;
    a.innerHTML = "";
    for (let _ = 1; _ <= s; _++) {
      const O = document.createElement("option");
      O.value = String(_), O.textContent = String(_), a.appendChild(O);
    }
    const m = document.createElement("option");
    m.value = "all", m.textContent = "All", a.appendChild(m);
    const S = d === "all" ? "all" : String(Math.min(Number(d) || 1, s));
    a.value = S, En = S === "all" ? "all" : Number(S);
  }
  function Gt() {
    Number(B.value) * 60;
    const a = Number(q.value), s = Number(R.value), d = ht[Tt], m = !!(d != null && d.customSequence), S = (m ? !d.includeWarmup : d != null && d.warmupOff) ? [] : bs(oa), _ = bs(Xe), O = m && !d.includeCooldown ? [] : bs(on);
    if (d && (d.total = Number(B.value), d.work = a, d.rest = s, d.rounds = Number(tt.value) || 1, d.customSequence ? (d.sequence = Xe.map((Be) => ({ ...Be })), d.warmup = oa.map((Be) => ({ ...Be })), d.cooldown = on.map((Be) => ({ ...Be }))) : (d.strength = Xe.map((Be) => ({ ...Be })), d.warmup = oa.map((Be) => ({ ...Be })), d.cooldown = on.map((Be) => ({ ...Be })))), d != null && d.customSequence) {
      const Be = [...S.map((ft) => ({ ...ft, section: "warmup" })), ..._, ...O.map((ft) => ({ ...ft, section: "cooldown" }))].map((ft) => {
        if (ft.kind === "video") return { ...ft, duration: qi(ft, a), rest: 0 };
        if (ft.kind === "rest") {
          const Da = ft.useGlobalTiming === !0 ? s : Number(ft.duration) || s;
          return { ...ft, duration: Da, rest: 0 };
        }
        const Ha = ft.useGlobalTiming === !1 && Number(ft.duration) || a;
        return { ...ft, duration: Ha, rest: 0 };
      });
      d.autoRest && Number(d.autoRestDuration) > 0 ? (Ke = [], Be.forEach((ft, Ha) => {
        Ke.push(ft);
        const Da = Be[Ha + 1];
        ft.kind !== "rest" && Da && Da.kind !== "rest" && Ke.push({
          id: "auto-rest-" + Ha,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(d.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Ke = Be;
    } else
      Ke = [...S.map((Be) => ({ ...Be, section: "warmup" })), ..._, ...O.map((Be) => ({ ...Be, section: "cooldown" }))].map((Be) => Be.kind === "video" ? { ...Be, duration: qi(Be, a), rest: 0 } : Be.kind === "rest" ? { ...Be, duration: Be.useGlobalTiming === !0 ? s : Number(Be.duration) || s, rest: 0 } : { ...Be, duration: Be.useGlobalTiming === !1 && Number(Be.duration) || a, rest: s }), Ke.forEach((Be, ft) => {
        var Ha;
        ((Ha = Ke[ft + 1]) == null ? void 0 : Ha.kind) === "rest" && (Be.rest = 0);
      }), Ke.length && (Ke[Ke.length - 1].rest = 0);
    const Y = Math.max(1, Math.min(10, Number(tt.value) || 1)), we = Ke, Me = (Be) => Y <= 1 ? null : Be.section === "warmup" || Be.presetRole === "warmup" ? "first" : Be.section === "cooldown" || Be.presetRole === "cooldown" ? "last" : Be.kind === "video" && (Be.videoRounds === "first" || Be.videoRounds === "last") ? Be.videoRounds : null, ge = (Be) => !!Me(Be), me = we.filter((Be) => !ge(Be)), Ie = we.filter(ge), at = me.length, je = me.reduce((Be, ft) => Be + ft.duration + ft.rest, 0), He = Ie.reduce((Be, ft) => Be + ft.duration + ft.rest, 0), De = [
      Ie.some((Be) => Be.section === "warmup" || Be.presetRole === "warmup") && "warm-up",
      Ie.some((Be) => Be.section === "cooldown" || Be.presetRole === "cooldown") && "cooldown",
      Ie.some((Be) => Be.kind === "video" && !Be.section && !Be.presetRole) && "video"
    ].filter(Boolean), bt = De.length > 1 ? De.slice(0, -1).join(", ") + " & " + De[De.length - 1] : De[0] || "";
    Ke = [];
    const xt = (Be, ft) => {
      const Ha = Me(Be);
      return !Ha || (Ha === "first" ? ft === 1 : ft === Y);
    };
    for (let Be = 1; Be <= Y; Be++)
      if (we.filter((ft) => xt(ft, Be)).forEach((ft, Ha) => Ke.push({ ...ft, id: ft.id + (Y > 1 ? "-r" + Be : ""), round: Be, roundIndex: Ha })), Be < Y && at)
        if (d != null && d.customSequence)
          Ke.push({ id: "round-break-" + Be, name: "Rest", group: "Round " + (Be + 1) + " next", kind: "rest", hidden: !1, duration: s, rest: 0, round: Be, roundIndex: at, roundBreak: !0 });
        else {
          const ft = Ke[Ke.length - 1];
          ft.rest = s, ft.roundBreakAfter = !0;
        }
    xr();
    const Ge = Ke.reduce((Be, ft) => Be + ft.duration + ft.rest, 0), kt = Math.round(je / 60), Ft = Math.round(Ge / 60), ut = Y > 1 ? go(kt) + " × " + Y + " rounds" + (He ? " + " + Ba(He) + " " + bt : "") + " (" + go(Ft) + ")" : go(Ft), rt = [S.length ? "warm-up" : "", O.length ? "cooldown" : ""].filter(Boolean), ma = d != null && d.customSequence ? ut + " · " + at + " items" + (rt.length && !(Y > 1 && He) ? " · " + rt.join(" + ") : "") : ut + " · " + Ba(a) + " / " + Ba(s) + (rt.length && !(Y > 1 && He) ? " · " + rt.join(" + ") : "");
    de.textContent = Ba(je);
    const Wa = Ke.filter((Be) => !Be.roundBreak).length, aa = Y > 1 ? Wa + " activities · " + Y + " rounds" : at + " activities";
    Fe.textContent = Y > 1 ? Y + " rounds · " + go(Ft) + " total" : "1 round", i("roundsCount").textContent = Y, n.querySelectorAll("[data-rounds-step]").forEach((Be) => {
      Be.disabled = Number(Be.dataset.roundsStep) < 0 ? Y <= 1 : Y >= 10;
    }), d && (d.summary = ma, d.activityCount = at);
    const Bi = n.querySelector(".workoutPanel.active .sub");
    Bi && (Bi.textContent = ma), Gn.textContent = ma, wi(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((Be) => Be.textContent = aa), xr(), kr(), Uo(), xi(), Dl(), Jt && E(), qe.workout.classList.contains("active") && !At && Oa();
  }
  const Dn = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', Io = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', mi = {
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
  }, ja = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (mi[a] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((a) => {
    a.innerHTML = ja(a.dataset.icon);
  });
  let ya = null, ua = null;
  function zs(a) {
    return a = Math.max(1, Number(a) || 0), a >= 3600 && a % 3600 === 0 ? { value: a / 3600, unit: "hour" } : a >= 60 && a % 60 === 0 ? { value: a / 60, unit: "min" } : { value: a, unit: "sec" };
  }
  function Yn(a = !1) {
    const s = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    s && (s.focus({ preventScroll: !0 }), a && s.select());
  }
  function gi(a, s, d = {}) {
    const m = a.kind === "rest", S = a.kind === "video", _ = S ? a.useVideoLength !== !1 : m ? a.useGlobalTiming === !0 : a.useGlobalTiming !== !1, O = Number(m ? R.value : q.value), Y = zs(S ? a.useVideoLength === !1 ? a.duration : qi({ ...a, useVideoLength: !0 }) : _ ? O : a.duration || O), we = S && (Number(a.videoDuration) > 0 || Number(a.end) > 0), Me = S ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + nt(a.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + nt(a.autoName ? "" : a.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Ge, kt]) => '<option value="' + Ge + '"' + ((a.videoRounds || "every") === Ge ? " selected" : "") + ">" + kt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + nt(a.name) + '" placeholder="' + (m ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + nt(a.group) + '" placeholder="' + (m ? "Rest" : "e.g. Glutes + legs") + '"></label>', ge = S ? "Play the whole " + (Number(a.start) > 0 || Number(a.end) > 0 ? "clip" : "video") + (we ? " · " + vo(qi({ ...a, useVideoLength: !0 })) : "") : "Use global timing · " + Ba(O), me = document.createElement("div");
    me.className = "moveRow editing" + (d.sheet ? " inSheet" : ""), me.dataset.index = s, me.dataset.id = a.id;
    const Ie = d.isNew ?? (ua == null ? void 0 : ua.item) === a, at = d.sheet ? '<div class="moveEditActions sheetActions">' + (Ie ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (a.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + nt(a.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Ie ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    me.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (S ? " videoFields" : "") + '">' + Me + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (_ ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + nt(ge) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + Y.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Ge) => '<option value="' + Ge + '"' + (Ge === Y.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Ge] + "</option>").join("") + "</select></div></div>" + at + "</div>";
    const je = (Ge) => me.querySelector("[data-f=" + Ge + "]"), He = () => {
      const Ge = je("global").checked;
      je("dur").disabled = Ge, je("unit").disabled = Ge, me.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Ge);
    };
    je("global").addEventListener("change", He), He();
    const De = () => {
      var Ge;
      if (d.sheet) {
        (Ge = d.onCancel) == null || Ge.call(d);
        return;
      }
      Ie && ji(), ya = null, Gt();
    }, bt = () => {
      var Ft;
      if (S) {
        xt();
        return;
      }
      const Ge = je("name").value.trim();
      if (!Ge) {
        je("name").focus();
        return;
      }
      a.name = Ge, a.group = je("group").value.trim() || (m ? "Rest" : "Movement");
      const kt = je("global").checked;
      if (a.useGlobalTiming = kt, kt || (a.duration = Math.max(m ? 5 : 1, bo(je("dur").value, je("unit").value))), d.sheet) {
        (Ft = d.onSaved) == null || Ft.call(d);
        return;
      }
      Ie && (ua = null), ya = null, Gt(), Nt(Ie ? m ? "Rest added" : "Movement added" : "Movement updated");
    }, xt = () => {
      var rt;
      const Ge = je("url").value.trim(), kt = js(Ge);
      if (!kt) {
        je("urlError").hidden = !1, je("url").classList.add("invalid"), je("url").focus();
        return;
      }
      const Ft = kt.id !== a.videoId;
      a.url = Ge, a.videoId = kt.id, a.start = kt.start, a.end = kt.end, Ft && (a.videoDuration = null, a.videoError = null);
      const ut = je("name").value.trim();
      a.autoName = !ut, a.name = ut || (Ft ? "" : a.name) || a.videoTitle || "YouTube video", a.group = "Video", a.videoRounds = je("rounds").value, a.useVideoLength = je("global").checked, a.useVideoLength || (a.duration = Math.max(5, bo(je("dur").value, je("unit").value))), d.sheet ? (rt = d.onSaved) == null || rt.call(d) : (Ie && (ua = null), ya = null, Gt(), Nt(Ie ? "Video added" : "Video updated")), (Ft || !a.videoDuration || a.autoName && !a.videoTitle) && $n(a);
    };
    if (S && je("url").addEventListener("input", () => {
      je("urlError").hidden = !0, je("url").classList.remove("invalid");
    }), me.querySelector("[data-a=cancel]").addEventListener("click", De), me.querySelector("[data-a=save]").addEventListener("click", bt), d.sheet && !Ie) {
      me.querySelector("[data-a=hide]").addEventListener("click", () => {
        var kt;
        return (kt = d.onHide) == null ? void 0 : kt.call(d);
      });
      const Ge = me.querySelector("[data-a=remove]");
      rr(Ge, Ge.querySelector(".removeFill"), 1200, () => {
        var kt;
        return (kt = d.onRemove) == null ? void 0 : kt.call(d);
      });
    }
    return me.addEventListener("keydown", (Ge) => {
      Ge.key === "Escape" && (Ge.preventDefault(), Ge.stopPropagation(), De()), Ge.key === "Enter" && Ge.target.matches("input") && (Ge.preventDefault(), bt());
    }), me;
  }
  function Fo(a, s) {
    const d = i(s);
    d.innerHTML = "", a.forEach((m, S) => {
      if (m === ya && !Vo()) {
        d.appendChild(gi(m, S));
        return;
      }
      const _ = document.createElement("div");
      _.className = "moveRow" + (m.hidden ? " hidden" : "") + (m.kind === "rest" ? " restItem" : "") + (m.kind === "video" ? " videoItem" : "") + (Bs(m) ? " noMeta" : ""), _.dataset.index = S, _.dataset.id = m.id;
      const O = m.kind === "rest" ? m.useGlobalTiming === !0 ? "Global timing" : Ba(m.duration) : m.useGlobalTiming === !1 ? Ba(m.duration) : "Global timing", Y = m.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", we = m.kind === "video" ? m.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (m.useVideoLength === !1 ? "stops after " + Ba(m.duration) : Number(m.videoDuration) > 0 || Number(m.end) > 0 ? vo(qi(m)) : "plays to the end") + (m.videoRounds === "first" ? " · first round only" : m.videoRounds === "last" ? " · last round only" : "") : m.group + " · " + O, Me = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + nt(m.name) + '. Drag, or use the up and down arrow keys">' + Dn + "</button>", ge = '<div class="moveText"><div class="moveItemName">' + nt(m.name) + Y + '</div><div class="moveMeta">' + nt(we) + "</div></div>", me = (je) => je.addEventListener("keydown", (He) => {
        var xt, Ge;
        if (He.key !== "ArrowUp" && He.key !== "ArrowDown") return;
        He.preventDefault();
        const De = a.indexOf(m), bt = De + (He.key === "ArrowUp" ? -1 : 1);
        bt < 0 || bt >= a.length || (a.splice(De, 1), a.splice(bt, 0, m), Gt(), (Ge = (xt = i(s).children[bt]) == null ? void 0 : xt.querySelector(".dragHandle")) == null || Ge.focus());
      });
      if (Vo()) {
        _.classList.add("phoneRow"), _.tabIndex = 0, _.setAttribute("role", "button"), _.setAttribute("aria-label", "Edit " + (m.name || "step")), _.innerHTML = Me + ge + '<span class="rowChevron" aria-hidden="true">›</span>';
        const je = _.querySelector(".dragHandle");
        je.addEventListener("pointerdown", (He) => to(He, _, d, a)), me(je), _.addEventListener("click", (He) => {
          He.target.closest(".dragHandle") || Yi(m, a);
        }), _.addEventListener("keydown", (He) => {
          He.key === "Enter" && He.target === _ && (He.preventDefault(), Yi(m, a));
        }), d.appendChild(_);
        return;
      }
      _.innerHTML = Me + ge + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + nt(m.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (m.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + nt(m.name) + '"><span class="removeFill"></span><span class="removeLabel">' + Io + "</span></button></div>", _.querySelector(".editBtn").addEventListener("click", () => {
        ji(), ya = m, Gt(), Yn();
      }), _.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        m.hidden = !m.hidden, Gt();
      });
      const Ie = _.querySelector(".removeBtn");
      rr(Ie, Ie.querySelector(".removeFill"), 1200, () => {
        const je = a.indexOf(m);
        je < 0 || (a.splice(je, 1), Gt(), Nt("Removed " + m.name, { label: "Undo", run: () => {
          a.splice(Math.min(je, a.length), 0, m), Gt();
        } }));
      });
      const at = _.querySelector(".dragHandle");
      at.addEventListener("pointerdown", (je) => to(je, _, d, a)), me(at), d.appendChild(_);
    });
  }
  const Ut = () => {
    var a;
    return (a = window.matchMedia) == null ? void 0 : a.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, vi = (a) => {
    var s;
    try {
      (s = navigator.vibrate) == null || s.call(navigator, a);
    } catch {
    }
  };
  function to(a, s, d, m) {
    if (a.button !== void 0 && a.button !== 0) return;
    a.preventDefault();
    const S = a.currentTarget, _ = a.pointerId, O = !Ut();
    try {
      S.setPointerCapture(_);
    } catch {
    }
    const Y = s.closest(".exerciseScroller") || bi(s), we = d.style.position;
    d.style.position = "relative";
    const Me = [...d.children].filter((ct) => ct.classList.contains("moveRow")), ge = Me.indexOf(s), me = parseFloat(getComputedStyle(d).rowGap) || 8, Ie = s.offsetHeight, at = Ie + me, je = Me.map((ct) => ct.offsetTop), He = Me.map((ct) => ct.offsetHeight), De = () => d.getBoundingClientRect().top, bt = d.getBoundingClientRect().width, xt = a.clientY - (De() + je[ge]), Ge = a.clientX;
    let kt = a.clientY, Ft = a.clientX, ut = De() + je[ge], rt = 0, ma = 0, Wa = 0, aa = 1, Bi = 0, Be = ge, ft = !1, Ha = 0, Da = !1, xl = !1, fi = je[ge];
    d.classList.add("reordering"), s.classList.add("dragging"), s.style.transition = "none", vi(8);
    const Is = () => {
      const ct = kt - xt + Ie / 2 - De();
      let St = 0;
      return Me.forEach((Zt, tn) => {
        tn !== ge && ct > je[tn] + He[tn] / 2 && St++;
      }), St;
    }, yl = () => {
      Me.forEach((ct, St) => {
        if (St === ge) return;
        const Zt = ge < Be && St > ge && St <= Be ? -at : ge > Be && St >= Be && St < ge ? at : 0;
        ct.style.transform = Zt ? "translateY(" + Zt + "px)" : "";
      });
    }, rs = () => {
      const ct = d.getBoundingClientRect(), St = Math.abs(Ft - Ge) > Math.max(80, bt * 0.3) || Ft < ct.left - 24 || Ft > ct.right + 24;
      St !== ft && (ft = St, s.classList.toggle("willReturn", St), vi(St ? 10 : 4));
      const Zt = ft ? ge : Is();
      Zt !== Be && (Be = Zt, yl(), ft || vi(4));
    }, uo = () => {
      if (Be === ge) return je[ge];
      const ct = Me.filter((Zt, tn) => tn !== ge);
      let St = je[0];
      for (let Zt = 0; Zt < Be; Zt++) St += ct[Zt].offsetHeight + me;
      return St;
    }, Pi = () => {
      const ct = O ? Math.min(Math.abs(rt) / 40, 1) : 0, St = O && !Da ? Math.max(-3, Math.min(3, Wa * 0.6)) : 0;
      s.style.transform = "translate(" + ma.toFixed(2) + "px," + (ut - (De() + je[ge])).toFixed(2) + "px) rotate(" + St.toFixed(2) + "deg) scale(" + (aa * (1 - 0.04 * ct)).toFixed(4) + "," + (aa * (1 + 0.06 * ct)).toFixed(4) + ")";
    }, it = () => {
      Ha = requestAnimationFrame(it);
      const ct = Ft - Ge, St = Da ? De() + fi : kt - xt, Zt = Da ? 0 : ft ? ct * 0.9 : Math.max(-22, Math.min(22, ct * 0.22)), tn = Da ? 1 : ft ? 0.97 : 1.035;
      if (!O) {
        ut = St, ma = Da ? 0 : Zt, aa = 1, Pi(), Da && na();
        return;
      }
      const Kd = Da ? 0.24 : 0.2, $d = Da ? 0.62 : 0.68;
      rt = (rt + (St - ut) * Kd) * $d, ut += rt, Wa = (Wa + (Zt - ma) * 0.16) * 0.7, ma += Wa, Bi = (Bi + (tn - aa) * 0.22) * 0.6, aa += Bi, Pi(), Da && Math.abs(rt) < 0.15 && Math.abs(St - ut) < 0.5 && Math.abs(ma) < 0.5 && Math.abs(aa - 1) < 3e-3 && na();
    }, qt = setInterval(() => {
      if (!Y || Da) return;
      const ct = Y.getBoundingClientRect(), St = 56, Zt = kt < ct.top + St ? -10 : kt > ct.bottom - St ? 10 : 0;
      Zt && (Y.scrollTop += Zt, rs());
    }, 30);
    function na() {
      if (xl) return;
      xl = !0, cancelAnimationFrame(Ha);
      const ct = Be !== ge, St = s.dataset.id;
      if (d.classList.remove("reordering"), Me.forEach((tn) => {
        tn.style.transition = "none", tn.style.transform = "";
      }), s.classList.remove("dragging", "willReturn"), d.style.position = we, ct) {
        const [tn] = m.splice(ge, 1);
        m.splice(Be, 0, tn);
      }
      Gt();
      const Zt = St && d.querySelector('.moveRow[data-id="' + St + '"]');
      Zt && O && Zt.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), ct && Nt("Order saved");
    }
    const _a = (ct) => {
      if (ct.pointerId === _) {
        if (ct.pointerType === "mouse" && ct.buttons === 0) {
          vn();
          return;
        }
        kt = ct.clientY, Ft = ct.clientX, rs();
      }
    }, en = (ct) => {
      ct.pointerId === _ && vn();
    };
    function vn() {
      Da || (window.removeEventListener("pointermove", _a, !0), window.removeEventListener("pointerup", en, !0), window.removeEventListener("pointercancel", en, !0), S.removeEventListener("lostpointercapture", vn), clearInterval(qt), ft && Be !== ge && (Be = ge, yl()), fi = uo(), Da = !0, vi(6), setTimeout(na, 800));
    }
    window.addEventListener("pointermove", _a, !0), window.addEventListener("pointerup", en, !0), window.addEventListener("pointercancel", en, !0), S.addEventListener("lostpointercapture", vn), Ha = requestAnimationFrame(it), Pi();
  }
  function kr() {
    var S, _, O, Y;
    const a = ht[Tt], s = (S = i("warmupList")) == null ? void 0 : S.closest("section"), d = (_ = i("cooldownList")) == null ? void 0 : _.closest("section"), m = (Y = (O = i("strengthList")) == null ? void 0 : O.closest("section")) == null ? void 0 : Y.querySelector(".sectionTitle");
    a != null && a.customSequence ? (s && (s.hidden = !a.includeWarmup), d && (d.hidden = !a.includeCooldown), m && (m.textContent = "Move sequence")) : (s && (s.hidden = !!(a != null && a.warmupOff)), d && (d.hidden = !1), m && (m.textContent = "Kettlebell work")), Fo(oa, "warmupList"), Fo(Xe, "strengthList"), Fo(on, "cooldownList");
  }
  function ji() {
    if (!ua) return;
    const { item: a, arr: s } = ua;
    ua = null;
    const d = s.indexOf(a);
    d >= 0 && s.splice(d, 1), ya === a && (ya = null);
  }
  function zi(a) {
    return a.id === "warmupList" ? { arr: oa, kind: "warmup", group: "Warm-up" } : a.id === "cooldownList" ? { arr: on, kind: "cooldown", group: "Cooldown" } : { arr: Xe, kind: "work", group: "" };
  }
  function Gs(a, s) {
    const d = zi(s), m = Date.now().toString(36);
    return a === "video" ? { id: "video-" + m, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : a === "rest" ? { id: "rest-" + m, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(R.value) } : { id: "movement-" + m, name: "", group: d.group, kind: d.kind, hidden: !1, useGlobalTiming: !0, duration: Number(q.value) };
  }
  const Us = "cubic-bezier(.34,1.46,.64,1)";
  function Oo(a, s) {
    if (Ut() || !a) {
      s();
      return;
    }
    const d = (_) => {
      var O;
      return ((O = _.dataset) == null ? void 0 : O.id) || _;
    }, m = () => [...a.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], S = new Map(m().map((_) => [d(_), _.getBoundingClientRect().top]));
    s(), m().forEach((_) => {
      const O = S.get(d(_));
      if (O === void 0) return;
      const Y = O - _.getBoundingClientRect().top;
      Math.abs(Y) < 0.5 || _.animate([{ transform: "translateY(" + Y + "px)" }, { transform: "none" }], { duration: 440, easing: Us });
    });
  }
  function qo(a, s) {
    if (!a || Ut()) return;
    const d = a.offsetHeight, m = Math.max(0, d - (s || 0));
    a.animate([{ clipPath: "inset(0 0 " + m + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Us });
  }
  function Mr(a, s, d, m) {
    const { arr: S } = zi(s), _ = Gs(a, s);
    S.splice(Math.max(0, Math.min(d, S.length)), 0, _), ua = { item: _, arr: S }, ya = _, Oo(s.closest(".exerciseScroller,.createStepSlot") || s, () => Gt());
    const O = s.querySelector(".moveRow.editing");
    return qo(O, m), Yn(a === "rest"), O;
  }
  function bi(a) {
    for (let s = a; s && s.nodeType === 1; s = s.parentElement) {
      const d = getComputedStyle(s).overflowY;
      if (/(auto|scroll)/.test(d) && s.scrollHeight > s.clientHeight) return s;
    }
    return null;
  }
  const la = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function xn(a, s) {
    const d = document.createElement("div");
    return d.className = "addGhost" + (a === "movement" ? "" : " rest"), d.innerHTML = '<span class="addGhostGrip">' + Dn + '</span><span class="addGhostText"><strong>' + nt(s[0]) + "</strong><small>" + nt(s[1]) + "</small></span>", i("workoutModal").appendChild(d), d;
  }
  function Lt(a) {
    a.classList.add("leaving"), setTimeout(() => a.remove(), 180);
  }
  function Gi(a, s, d, m) {
    (ya || ua) && (ji(), ya = null, Gt());
    const S = a.getBoundingClientRect(), _ = xn(s, la[s]);
    _.setAttribute("aria-hidden", "true"), _.style.width = S.width + "px", _.style.height = S.height + "px", _.style.transform = "translate(" + S.left + "px," + S.top + "px)", a.classList.add("lifting");
    const O = bi(a);
    return Wo({
      ghost: _,
      origin: S,
      sx: d,
      sy: m,
      scroller: O,
      column: a.closest(".exerciseScroller,.createFlow") || O,
      home: () => a.getBoundingClientRect(),
      onDrop: (Y, we, Me) => {
        Lt(_), a.classList.remove("lifting"), Mr(s, Y, we, Me);
      },
      onReturn: () => {
        Lt(_), a.classList.remove("lifting");
      }
    });
  }
  function Wo({ ghost: a, origin: s, sx: d, sy: m, scroller: S, column: _, home: O, onDrop: Y, onReturn: we, rowLook: Me = !1 }) {
    var Pi;
    const ge = !Ut(), me = ((Pi = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Pi.offsetHeight) || 80, Ie = d - s.left, at = m - s.top, je = 44;
    let He = d, De = m, bt = s.left, xt = s.top, Ge = 0, kt = 0, Ft = !ge, ut = null, rt = null, ma = -1, Wa = 0, aa = null;
    const Bi = () => ["warmupList", "strengthList", "cooldownList"].map((it) => i(it)).filter((it) => it && it.getClientRects().length && !it.closest("[hidden]")), Be = (it) => {
      if (it === ut) return;
      ut = it, a.classList.toggle("overList", !!it || Me);
      const qt = it ? it.getBoundingClientRect().width : s.width;
      a.style.width = qt + "px", a.style.height = (it ? me : s.height) + "px";
    }, ft = (it) => {
      it.classList.add("leaving"), it.style.height = "0px", it.style.marginTop = "-8px", setTimeout(() => it.remove(), ge ? 320 : 0);
    }, Ha = (it, qt, na) => {
      if (rt && rt.parentNode === it && ma === na || (rt && (ft(rt), rt = null, ma = -1), !it)) return;
      const _a = document.createElement("div");
      _a.className = "dropSlot", it.insertBefore(_a, qt), rt = _a, ma = na, _a.getBoundingClientRect(), _a.style.height = me + "px", _a.style.marginTop = "0px";
    }, Da = () => {
      let it = null, qt = 1 / 0;
      for (const vn of Bi()) {
        const ct = vn.getBoundingClientRect();
        if (He < ct.left - 48 || He > ct.right + 48) continue;
        const St = ct.top - 28, Zt = ct.bottom + 28, tn = De < St ? St - De : De > Zt ? De - Zt : 0;
        tn < qt && (qt = tn, it = vn);
      }
      const na = _ == null ? void 0 : _.getBoundingClientRect(), en = na && He >= na.left && He <= na.right && De >= na.top && De <= na.bottom || qt === 0 ? it : null;
      if (en) {
        const vn = [...en.children].filter((St) => St.classList.contains("moveRow"));
        let ct = vn.findIndex((St) => {
          const Zt = St.getBoundingClientRect();
          return De < Zt.top + Zt.height / 2;
        });
        ct < 0 && (ct = vn.length), Ha(en, vn[ct] || null, ct);
      } else Ha(null);
      Be(en);
    }, xl = () => {
      if (aa) return aa.aim();
      if (ut) {
        const it = ut.getBoundingClientRect();
        let qt = De - me / 2;
        return rt && (qt = qt * 0.6 + rt.getBoundingClientRect().top * 0.4), { x: it.left, y: qt };
      }
      return { x: He - Ie, y: De - at };
    }, fi = (it, qt, na, _a) => {
      a.style.transform = "translate(" + bt + "px," + xt + "px) rotate(" + it + "deg) rotate(" + qt + "rad) scale(" + na + "," + _a + ") rotate(" + -qt + "rad)";
    }, Is = () => {
      if (Wa = requestAnimationFrame(Is), !Ft) {
        const ct = He - d, St = De - m, Zt = Math.min(Math.hypot(ct, St) / je, 1);
        bt = s.left + ct * 0.35, xt = s.top + St * 0.35, fi(0, Math.atan2(St, ct), 1 + 0.155 * Zt, 1 - 0.1 * Zt);
        return;
      }
      const it = xl();
      if (!ge) {
        bt = it.x, xt = it.y, fi(0, 0, 1, 1), aa && (cancelAnimationFrame(Wa), aa.done());
        return;
      }
      const qt = aa ? aa.k : 0.17, na = aa ? aa.d : 0.7;
      Ge = (Ge + (it.x - bt) * qt) * na, kt = (kt + (it.y - xt) * qt) * na, bt += Ge, xt += kt;
      const _a = Math.hypot(Ge, kt), en = Math.min(_a / 48, 1), vn = ut || aa ? 0 : Math.max(-5, Math.min(5, Ge * 0.32));
      fi(vn, Math.atan2(kt, Ge), 1 + 0.1 * en, 1 - 0.063 * en), aa && _a < 0.15 && Math.hypot(it.x - bt, it.y - xt) < 0.6 && (cancelAnimationFrame(Wa), aa.done());
    }, yl = setInterval(() => {
      if (!S || aa) return;
      const it = S.getBoundingClientRect(), qt = 64, na = De < it.top + qt ? -(it.top + qt - De) / 4 : De > it.bottom - qt ? (De - (it.bottom - qt)) / 4 : 0;
      na && (S.scrollTop += Math.max(-18, Math.min(18, na)), Da());
    }, 30);
    Wa = requestAnimationFrame(Is);
    let rs = !1;
    const uo = (it, qt) => {
      if (rs) return;
      rs = !0, cancelAnimationFrame(Wa);
      const na = rt ? rt.offsetHeight : me;
      !it && rt && (rt.remove(), rt = null), it ? Y(it, qt, na) : we();
    };
    return {
      move(it, qt) {
        He = it, De = qt, !Ft && Math.hypot(He - d, De - m) > je && (Ft = !0, Ge = (He - d) * 0.085, kt = (De - m) * 0.085), Ft && Da();
      },
      drop(it) {
        clearInterval(yl);
        const qt = ut, na = ma;
        if (!it && qt && rt) {
          const _a = rt;
          aa = { k: 0.24, d: 0.62, aim: () => {
            const en = _a.getBoundingClientRect();
            return { x: en.left, y: en.top };
          }, done: () => uo(qt, na) }, setTimeout(() => uo(qt, na), 650), ge || (cancelAnimationFrame(Wa), uo(qt, na));
          return;
        }
        Ha(null), Be(null), aa = { k: 0.2, d: 0.66, aim: () => {
          const _a = O();
          return { x: _a.left, y: _a.top };
        }, done: () => uo(null) }, setTimeout(() => uo(null), 650), ge || (cancelAnimationFrame(Wa), uo(null));
      }
    };
  }
  function Ui(a, s) {
    let d = !1;
    a.addEventListener("click", (m) => {
      if (d) {
        d = !1, m.preventDefault();
        return;
      }
      if (Vo()) {
        xs(s);
        return;
      }
      const S = i("strengthList"), _ = Mr(s, S, zi(S).arr.length, 0);
      _ == null || _.scrollIntoView({ block: "nearest", behavior: Ut() ? "auto" : "smooth" });
    }), a.addEventListener("pointerdown", (m) => {
      if (m.button !== void 0 && m.button !== 0) return;
      const S = m.pointerId, _ = m.clientX, O = m.clientY;
      let Y = null, we = !1;
      try {
        a.setPointerCapture(S);
      } catch {
      }
      const Me = (De) => {
        if (De.pointerId === S) {
          if (De.pointerType === "mouse" && De.buttons === 0) {
            He(!1);
            return;
          }
          if (!Y) {
            if (Math.hypot(De.clientX - _, De.clientY - O) < 6) return;
            Y = Gi(a, s, _, O);
          }
          Y.move(De.clientX, De.clientY);
        }
      }, ge = (De) => {
        De.pointerId === S && He(!1);
      }, me = (De) => {
        De.pointerId === S && He(!0);
      }, Ie = () => He(!1), at = () => He(!0), je = (De) => {
        De.key === "Escape" && Y && (De.preventDefault(), De.stopPropagation(), He(!0));
      };
      function He(De) {
        if (!we && (we = !0, window.removeEventListener("pointermove", Me, !0), window.removeEventListener("pointerup", ge, !0), window.removeEventListener("pointercancel", me, !0), window.removeEventListener("keydown", je, !0), window.removeEventListener("blur", at), a.removeEventListener("lostpointercapture", Ie), Y)) {
          const bt = Y;
          Y = null, d = !0, setTimeout(() => {
            d = !1;
          }, 0), bt.drop(De);
        }
      }
      window.addEventListener("pointermove", Me, !0), window.addEventListener("pointerup", ge, !0), window.addEventListener("pointercancel", me, !0), window.addEventListener("keydown", je, !0), window.addEventListener("blur", at), a.addEventListener("lostpointercapture", Ie);
    });
  }
  const rn = (po = window.matchMedia) == null ? void 0 : po.call(window, "(max-width: 620px)");
  function Vo() {
    var a;
    return !!((a = window.matchMedia) != null && a.call(window, "(max-width: 620px)").matches);
  }
  const ws = (a) => a.charAt(0).toUpperCase() + a.slice(1), _n = (a) => a.kind === "rest" ? "rest" : a.kind === "video" ? "video" : "movement";
  let wo = null, $t = null;
  function Zn(a, s, d, m) {
    Ca(), i("sheetTitle").textContent = a;
    const S = i("sheetBody");
    S.innerHTML = "", S.appendChild(s), wo = d || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !S.contains(s)) return;
      const _ = m ? S.querySelector("input[data-f=url],input[data-f=name]") : S.querySelector("button,input,select");
      _ == null || _.focus({ preventScroll: !0 });
    }, Ut() ? 0 : 360);
  }
  function Ca() {
    const a = i("sheet");
    if (!a.classList.contains("open")) return;
    a.classList.remove("open"), i("sheetScrim").classList.remove("open"), a.setAttribute("aria-hidden", "true"), a.contains(n.activeElement) && n.activeElement.blur();
    const s = wo;
    wo = null, s == null || s(), setTimeout(ka, 0);
  }
  i("sheetScrim").addEventListener("click", Ca), i("sheet").addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), Ca());
  });
  function Yi(a, s) {
    const d = gi(a, s.indexOf(a), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Ca(), Gt(), Nt(ws(_n(a)) + " updated");
      },
      onCancel: Ca,
      onHide() {
        a.hidden = !a.hidden, Ca(), Gt(), Nt((a.hidden ? "Hidden: " : "Showing: ") + a.name);
      },
      onRemove() {
        Ca();
        const m = s.indexOf(a);
        m < 0 || (s.splice(m, 1), Gt(), Nt("Removed " + a.name, { label: "Undo", run: () => {
          s.splice(Math.min(m, s.length), 0, a), Gt();
        } }));
      }
    });
    Zn("Edit " + _n(a), d, null, !1);
  }
  function jo() {
    const a = document.createElement("div");
    a.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([s, d, m, S]) => {
      const _ = document.createElement("button");
      _.type = "button", _.className = "sheetChoice", _.innerHTML = '<span class="timeIcon" aria-hidden="true">' + ja(d) + "</span><span><strong>" + m + "</strong><small>" + S + "</small></span>", _.addEventListener("click", () => xs(s)), a.appendChild(_);
    }), Zn("Add to the move", a, null, !1);
  }
  function xs(a) {
    $t && xo();
    const s = Gs(a, i("strengthList")), d = gi(s, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Ca(), _l(s, a);
      },
      onCancel: Ca
    });
    Zn("New " + _n(s), d, null, !0);
  }
  const Ta = i("workoutModal").querySelector(".modalStatic"), zo = { parent: Ta.parentNode, next: Ta.nextSibling };
  function ao() {
    const a = document.createElement("div");
    a.className = "sheetSetup", a.appendChild(Ta);
    const s = document.createElement("button");
    s.type = "button", s.className = "primary sheetDone", s.textContent = "Done", s.addEventListener("click", Ca), a.appendChild(s), Zn("Setup", a, () => {
      zo.parent.insertBefore(Ta, zo.next), wi();
    }, !1);
  }
  function wi() {
    var s, d;
    const a = i("setupSummaryName");
    a && (a.textContent = (((s = i("workoutNameInput")) == null ? void 0 : s.value) || "").trim() || ((d = ht[Tt]) == null ? void 0 : d.name) || "Move", i("setupSummaryMeta").textContent = Gn.textContent);
  }
  i("setupSummary").addEventListener("click", ao), i("addFab").addEventListener("click", jo);
  function Go() {
    const a = i("strengthList");
    return bi(a) || a.closest(".exerciseScroller");
  }
  function Sr() {
    const a = i("strengthList").getBoundingClientRect(), s = (Go() || i("strengthList")).getBoundingClientRect(), d = ($t == null ? void 0 : $t.ghost.offsetHeight) || 64;
    return { left: a.left, top: Math.max(s.top + 12, Math.min(s.bottom - d - 96, s.top + s.height * 0.55 - d / 2)), width: a.width, height: d };
  }
  function _l(a, s) {
    var Y;
    const d = xn(s, [a.name || la[s][0], "Drag into place"]);
    d.classList.add("overList", "hovering"), d.setAttribute("aria-label", (a.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const m = document.createElement("span");
    m.className = "addGhostActions", m.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + nt(a.name) + '">✕</button>', d.appendChild(m), $t = { item: a, type: s, ghost: d };
    const S = ((Y = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Y.offsetHeight) || 64;
    d.style.width = i("strengthList").getBoundingClientRect().width + "px", d.style.height = S + "px";
    const _ = Sr(), O = pn.querySelector(".modal").getBoundingClientRect().bottom;
    d.style.transform = "translate(" + _.left + "px," + O + "px)", d.getBoundingClientRect(), Ut() || (d.classList.add("rising"), setTimeout(() => d.classList.remove("rising"), 650)), d.style.transform = "translate(" + _.left + "px," + _.top + "px)", m.querySelector("[data-a=end]").addEventListener("click", xo), m.querySelector("[data-a=discard]").addEventListener("click", Ys), d.addEventListener("pointerdown", Cr);
  }
  function Cr(a) {
    if (!$t || a.target.closest("button") || a.button !== void 0 && a.button !== 0) return;
    a.preventDefault();
    const { item: s, ghost: d } = $t, m = a.pointerId;
    try {
      d.setPointerCapture(m);
    } catch {
    }
    d.classList.remove("hovering", "rising"), d.classList.add("held");
    const S = d.getBoundingClientRect(), _ = Go(), O = Wo({
      ghost: d,
      origin: { left: S.left, top: S.top, width: S.width, height: S.height },
      sx: a.clientX,
      sy: a.clientY,
      scroller: _,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || _,
      rowLook: !0,
      home: Sr,
      onDrop: (He, De, bt) => {
        $t = null, Lt(d), ys(s, He, De, bt);
      },
      onReturn: () => {
        d.classList.remove("held"), d.classList.add("hovering");
      }
    });
    let Y = !1;
    const we = (He) => {
      if (He.pointerId === m) {
        if (He.pointerType === "mouse" && He.buttons === 0) {
          je(!1);
          return;
        }
        O.move(He.clientX, He.clientY);
      }
    }, Me = (He) => {
      He.pointerId === m && je(!1);
    }, ge = (He) => {
      He.pointerId === m && je(!0);
    }, me = () => je(!1), Ie = () => je(!0), at = (He) => {
      He.key === "Escape" && (He.preventDefault(), je(!0));
    };
    function je(He) {
      Y || (Y = !0, window.removeEventListener("pointermove", we, !0), window.removeEventListener("pointerup", Me, !0), window.removeEventListener("pointercancel", ge, !0), window.removeEventListener("keydown", at, !0), window.removeEventListener("blur", Ie), d.removeEventListener("lostpointercapture", me), O.drop(He));
    }
    window.addEventListener("pointermove", we, !0), window.addEventListener("pointerup", Me, !0), window.addEventListener("pointercancel", ge, !0), window.addEventListener("keydown", at, !0), window.addEventListener("blur", Ie), d.addEventListener("lostpointercapture", me);
  }
  function ys(a, s, d, m) {
    const S = zi(s);
    a.kind !== "rest" && a.kind !== "video" && (a.kind = S.kind, S.group && (!a.group || a.group === "Movement") && (a.group = S.group)), S.arr.splice(Math.max(0, Math.min(d, S.arr.length)), 0, a), Oo(s.closest(".exerciseScroller,.createStepSlot") || s, () => Gt()), qo(s.querySelector('.moveRow[data-id="' + a.id + '"]'), m), Nt(ws(_n(a)) + " added");
  }
  function xo() {
    var m;
    if (!$t) return;
    const { item: a, ghost: s } = $t;
    $t = null, Lt(s);
    const d = i("strengthList");
    ys(a, d, zi(d).arr.length, 0), (m = d.querySelector('.moveRow[data-id="' + a.id + '"]')) == null || m.scrollIntoView({ block: "nearest", behavior: Ut() ? "auto" : "smooth" });
  }
  function Ys() {
    if (!$t) return;
    const a = $t.ghost;
    $t = null, Lt(a), Nt("Discarded");
  }
  function Zi() {
    $t && ($t.ghost.remove(), $t = null);
  }
  window.addEventListener("resize", () => {
    if ($t != null && $t.ghost.classList.contains("hovering")) {
      const a = Sr();
      $t.ghost.style.width = a.width + "px", $t.ghost.style.transform = "translate(" + a.left + "px," + a.top + "px)";
    }
  }), (zd = rn == null ? void 0 : rn.addEventListener) == null || zd.call(rn, "change", () => {
    Ca(), $t && !Vo() && xo(), kr();
  });
  {
    const a = i("workoutModal").querySelector(".modal");
    a.addEventListener("scroll", () => {
      (a.scrollTop || a.scrollLeft) && (a.scrollTop = 0, a.scrollLeft = 0);
    });
  }
  function ka() {
    const a = i("workoutModal"), s = window.visualViewport;
    if (!a.classList.contains("open") || !Vo()) {
      ks();
      return;
    }
    const d = s ? s.offsetTop : 0, m = s ? s.offsetLeft : 0, S = s ? s.width : window.innerWidth, _ = s ? s.height : window.innerHeight;
    Object.assign(a.style, { right: "auto", bottom: "auto", width: S + "px", height: _ + "px", top: d + "px", left: m + "px" });
    const O = a.getBoundingClientRect();
    Math.abs(O.top - d) > 0.5 && (a.style.top = 2 * d - O.top + "px"), Math.abs(O.left - m) > 0.5 && (a.style.left = 2 * m - O.left + "px");
  }
  function ks() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((a) => i("workoutModal").style.removeProperty(a));
  }
  (Gd = window.visualViewport) == null || Gd.addEventListener("resize", ka), (Ud = window.visualViewport) == null || Ud.addEventListener("scroll", ka), window.addEventListener("resize", ka), window.addEventListener("scroll", ka, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(ka, 250));
  function Uo() {
    Xe.length > 0;
    const a = i("addMovementBtn"), s = i("addRestBtn");
    a && (a.innerHTML = Dn + "<span>Add movement</span>"), s && (s.innerHTML = Dn + "<span>Add rest</span>");
    const d = i("addVideoBtn");
    d && (d.innerHTML = Dn + "<span>Add video</span>");
  }
  function xi() {
    const a = i("useGlobalTiming").checked, s = i("addMovementDuration"), d = i("addMovementUnit");
    s.disabled = a, d.disabled = a, s.parentElement.style.opacity = a ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + Ba(q.value);
    const m = i("useGlobalRestTiming").checked, S = i("addRestDuration"), _ = i("addRestUnit");
    S.disabled = m, _.disabled = m, S.parentElement.style.opacity = m ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + Ba(R.value);
  }
  let sn = "movement";
  function Ki(a) {
    sn = a;
    const s = i("movementFields"), d = i("restFields");
    s.hidden = a !== "movement", d.hidden = a !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), xi();
  }
  function $i() {
    ht[Tt];
    const a = Jt ? !0 : i("useGlobalTiming").checked, s = a ? Number(q.value) : bo(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), d = Jt ? !0 : i("useGlobalRestTiming").checked, m = d ? Number(R.value) : bo(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (sn === "rest") {
      const S = i("addRestTitle").value.trim() || "Rest", _ = i("addRestGroup").value.trim() || "Rest";
      Xe.push({
        id: "rest-" + Date.now(),
        name: S,
        group: _,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: d,
        duration: Math.max(5, m || Number(R.value))
      }), Gt(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", Nt("Rest added"), Jt && (ae("movements"), E());
    } else {
      const S = i("addMovementInput").value.trim();
      if (!S) return;
      const _ = i("addMovementGroup").value.trim() || "Movement";
      Xe.push({
        id: "movement-" + Date.now(),
        name: S,
        group: _,
        kind: "work",
        hidden: !1,
        useGlobalTiming: a,
        duration: Math.max(5, s || Number(q.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", Gt(), i("movementCreator").hidden = !0, Nt("Movement added"), Jt && (ae("movements"), E());
    }
    Uo();
  }
  let yn = null;
  function Nt(a, s) {
    const d = i("toast");
    d.innerHTML = "";
    const m = document.createElement("span");
    if (m.textContent = a, d.appendChild(m), s) {
      const S = document.createElement("button");
      S.type = "button", S.className = "toastAction", S.textContent = s.label, S.addEventListener("click", () => {
        s.run(), d.classList.remove("show", "withAction"), clearTimeout(yn);
      }), d.appendChild(S);
    }
    d.classList.toggle("withAction", !!s), d.classList.add("show"), clearTimeout(yn), yn = setTimeout(() => d.classList.remove("show", "withAction"), s ? 5e3 : 2200);
  }
  const Xi = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Zs = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Ms(a) {
    return Math.max(0, Math.min(5, Math.floor(Number(a) / 100 * 6)));
  }
  function ln(a, s) {
    return Xi[Ms(s)];
  }
  function dn(a) {
    return Zs[Ms(a)];
  }
  function Yt(a) {
    return a.getFullYear() + "-" + String(a.getMonth() + 1).padStart(2, "0") + "-" + String(a.getDate()).padStart(2, "0");
  }
  function yo() {
    return { morning: vt().morningTime || "08:00", evening: vt().eveningTime || "19:00" };
  }
  function cn(a) {
    const [s, d] = String(a).split(":").map(Number);
    return (s || 0) * 60 + (d || 0);
  }
  function Yo(a) {
    const s = yo();
    return a.getHours() * 60 + a.getMinutes() >= cn(s.evening) ? "evening" : "morning";
  }
  function f(a, s) {
    return Ye.checkins.find((d) => d.date === a && d.slot === s);
  }
  function b(a) {
    return !!(a && a.mood != null && a.energy != null);
  }
  function y() {
    const a = /* @__PURE__ */ new Date(), s = Yt(a), d = Yo(a), m = yo(), S = a.getHours() * 60 + a.getMinutes();
    return d === "morning" && S < cn(m.morning) || b(f(s, d)) ? null : d;
  }
  const C = i("checkinModal"), H = i("checkinTab"), U = i("checkinBadge"), $ = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function fe(a) {
    const { input: s, fill: d } = $[a];
    d.style.width = s.value + "%", s.setAttribute("aria-valuetext", ln(a, s.value));
  }
  Object.keys($).forEach((a) => $[a].input.addEventListener("input", () => fe(a)));
  let ee = null;
  function be() {
    const a = yo(), s = /* @__PURE__ */ new Date(), d = s.getHours() * 60 + s.getMinutes();
    return d < cn(a.morning) ? "Next check-in at " + a.morning : d < cn(a.evening) ? "Next check-in at " + a.evening : "Next check-in tomorrow at " + a.morning;
  }
  function xe() {
    const a = yo(), s = /* @__PURE__ */ new Date(), d = s.getHours() * 60 + s.getMinutes(), m = (S, _) => {
      const [O, Y] = S.split(":").map(Number);
      return new Date(s.getFullYear(), s.getMonth(), s.getDate() + (_ ? 1 : 0), O, Y);
    };
    return d < cn(a.morning) ? { date: m(a.morning), time: a.morning } : d < cn(a.evening) ? { date: m(a.evening), time: a.evening } : { date: m(a.morning, !0), time: a.morning };
  }
  let Ae = null, Je = null;
  function Ve() {
    if (y()) {
      Qe(), Rt();
      return;
    }
    const a = xe(), s = Math.max(0, Math.round((a.date - Date.now()) / 1e3)), d = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), S = s % 60;
    i("peekCountdown").textContent = d + ":" + String(m).padStart(2, "0") + ":" + String(S).padStart(2, "0"), i("peekAt").textContent = "Available at " + a.time;
  }
  function _e() {
    Ve(), H.classList.add("peek"), clearInterval(Je), Je = setInterval(Ve, 1e3), clearTimeout(Ae), Ae = setTimeout(Qe, 6e3);
  }
  function Qe() {
    H.classList.remove("peek"), clearInterval(Je), clearTimeout(Ae);
  }
  function Ue() {
    const a = y();
    if (!a) {
      H.classList.contains("peek") ? Qe() : _e();
      return;
    }
    ee = { date: Yt(/* @__PURE__ */ new Date()), slot: a };
    const d = f(ee.date, a), m = Ye.checkins.find((S) => b(S));
    Object.keys($).forEach((S) => {
      $[S].input.value = (d == null ? void 0 : d[S]) ?? (m == null ? void 0 : m[S]) ?? 50, fe(S);
    }), i("checkinTitle").textContent = a === "morning" ? "Morning check-in" : "Evening check-in", C.classList.add("open"), C.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => $.mood.input.focus());
  }
  function Ee() {
    C.classList.remove("open"), C.setAttribute("aria-hidden", "true"), ee && (ot = ee.date + "-" + ee.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", ot);
    } catch {
    }
    ee = null, Rt();
  }
  function gt() {
    if (!ee) return;
    if (b(f(ee.date, ee.slot))) {
      Ee();
      return;
    }
    const { date: a, slot: s } = ee;
    let d = f(a, s);
    d || (d = { date: a, slot: s }, Ye.checkins.unshift(d), Ye.checkins = Ye.checkins.slice(0, 2e3)), d.mood = Number($.mood.input.value), d.energy = Number($.energy.input.value), d.scale = 100, d.at = (/* @__PURE__ */ new Date()).toISOString(), An(), l.fire("checkin", { slot: s, mood: d.mood, energy: d.energy, mood_label: ln("mood", d.mood), energy_label: ln("energy", d.energy) }), Nt((s === "morning" ? "Morning" : "Evening") + " check-in saved"), Ee(), ta(), ia(), Ei(), qa();
  }
  let ot = "";
  try {
    ot = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Rt() {
    const a = y();
    U.hidden = !a, H.hidden = !a, a || Qe(), H.classList.toggle("due", !!a), H.setAttribute("aria-label", a ? (a === "morning" ? "Morning" : "Evening") + " check-in is due" : be()), H.title = a ? "Check in now" : be();
  }
  function Ne() {
    Rt();
    const a = y();
    !a || C.classList.contains("open") || vt().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !qe.home.classList.contains("active") || pn.classList.contains("open") || ot !== Yt(/* @__PURE__ */ new Date()) + "-" + a && Ue());
  }
  H.addEventListener("click", Ue), i("checkinLater").addEventListener("click", Ee), i("checkinSave").addEventListener("click", gt), C.addEventListener("click", (a) => {
    a.target === C && Ee();
  }), C.addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), Ee());
  }), setInterval(Ne, 3e4);
  function ta() {
    const a = Yt(/* @__PURE__ */ new Date()), s = (d) => Ye.checkins.find((m) => m.date === a && m[d] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([d, m]) => {
      const S = s(d);
      i(m).textContent = S ? ln(d, S[d]) : "—";
    });
  }
  function ia() {
    const a = i("feelCard");
    if (!a) return;
    const s = /* @__PURE__ */ new Date(), d = new Date(s.getFullYear(), s.getMonth(), s.getDate() - (s.getDay() + 6) % 7), m = [...Array(7)].map((Me, ge) => {
      const me = new Date(d.getFullYear(), d.getMonth(), d.getDate() + ge), Ie = Yt(me), at = Ye.checkins.filter((He) => He.date === Ie), je = (He) => {
        const De = at.map((bt) => bt[He]).filter((bt) => bt != null);
        return De.length ? De.reduce((bt, xt) => bt + xt, 0) / De.length : null;
      };
      return { d: me, key: Ie, mood: je("mood"), energy: je("energy"), count: at.filter(b).length, future: me > s && Ie !== Yt(s) };
    }), S = (Me) => {
      const ge = m.map((me) => me[Me]).filter((me) => me != null);
      return ge.length ? ge.reduce((me, Ie) => me + Ie, 0) / ge.length : null;
    }, _ = S("mood"), O = S("energy"), Y = (Me, ge) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + Me + "</span><span>" + (ge == null ? "—" : nt(ln("", ge))) + '</span></div><div class="feelTrack"><span style="width:' + (ge == null ? 0 : Math.max(4, ge)) + "%;background:" + (ge == null ? "transparent" : dn(ge)) + '"></span></div></div>', we = m.filter((Me) => Me.mood != null && Me.energy != null).sort((Me, ge) => ge.mood + ge.energy - (Me.mood + Me.energy))[0];
    a.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (_ == null ? "No check-ins yet" : nt(ln("", (_ + O) / 2))) + '</div><div class="weekCopy">' + (_ == null ? "Your first check-in will appear here." : "on average this week" + (we ? " · best day " + nt(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(we.d)) : "")) + '</div></div></div><div class="feelDays">' + m.map(
      (Me) => '<div class="weekChip feelDay' + (Me.future ? " future" : "") + (Me.key === Yt(s) ? " today" : "") + '"><div class="weekChipTop"><strong>' + nt(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(Me.d)) + "</strong>" + (Me.count >= 2 ? '<span class="weekTick">' + ja("check") + "</span>" : '<span class="feelDots">' + "●".repeat(Me.count) + "</span>") + "</div>" + Y("Mood", Me.mood) + Y("Energy", Me.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Qa = i("upcomingCountSetting");
  Qa.addEventListener("change", () => {
    En = Qa.value === "all" ? "all" : Number(Qa.value), Ti();
  });
  const za = i("tempoRevealBtn"), Tr = i("tempoExperiment"), kn = i("tempoQuad"), no = i("tempoDot"), Dt = i("tempoEstimate"), Zo = i("tempoReadout");
  let Rn = { x: 0.5, y: 0.5 }, ko = !1, Mo = { total: 20, work: 45, rest: 15 };
  function yi(a, s, d, m) {
    const S = Math.max(s, Math.min(d, a));
    return Math.round((S - s) / m) * m + s;
  }
  function Lr(a, s) {
    const d = (a - 0.5) * 2, m = (s - 0.5) * 2, S = yi(
      Mo.total + d * 5 + m * 8,
      Number(B.min),
      Number(B.max),
      Number(B.step)
    ), _ = yi(
      Mo.work + d * 10 + m * 8,
      Number(q.min),
      Number(q.max),
      Number(q.step)
    ), O = yi(
      Mo.rest + d * 6 + m * 6,
      Number(R.min),
      Number(R.max),
      Number(R.step)
    );
    return B.value = S, q.value = _, R.value = O, ue.textContent = _ + " sec", ve.textContent = O + " sec", xr(), { total: S, work: _, rest: O };
  }
  function Fa(a, s) {
    const d = a < 0.34 ? "Low" : a > 0.66 ? "Hard" : "Medium", m = s < 0.34 ? "Fast" : s > 0.66 ? "Slow" : "Balanced", S = Lr(a, s);
    Zo.textContent = d + " + " + m, Dt.textContent = S.total + " min", kn.setAttribute("aria-valuetext", d + " and " + m + ", estimated " + S.total + " minutes");
  }
  function Rl(a) {
    const s = kn.getBoundingClientRect(), d = Math.max(0, Math.min(1, (a.clientX - s.left) / s.width)), m = Math.max(0, Math.min(1, (a.clientY - s.top) / s.height));
    Rn = { x: d, y: m }, no.style.left = d * 100 + "%", no.style.top = m * 100 + "%", Fa(d, m);
  }
  za.addEventListener("click", () => {
    const a = Tr.hidden;
    Tr.hidden = !a, za.setAttribute("aria-expanded", a ? "true" : "false"), za.textContent = a ? "Now close this" : "Don’t try this!", a && (Mo = {
      total: Number(B.value),
      work: Number(q.value),
      rest: Number(R.value)
    }, Rn = { x: 0.5, y: 0.5 }, no.style.left = "50%", no.style.top = "50%", Fa(Rn.x, Rn.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.addEventListener("click", () => {
    Number(a.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((s) => s.classList.toggle("selected", s === a));
  }));
  const Ss = i("testingFeedbackForm"), Bl = i("testingFeedbackThanks"), vd = i("testingFeedbackAgain");
  Ss.addEventListener("submit", (a) => {
    a.preventDefault(), Ss.hidden = !0, Bl.hidden = !1, Nt("Feedback captured for prototype");
  }), vd.addEventListener("click", (a) => {
    a.preventDefault(), Ss.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((s) => s.classList.remove("selected")), Bl.hidden = !0, Ss.hidden = !1;
  }), kn.addEventListener("pointerdown", (a) => {
    var s;
    ko = !0, Rl(a);
    try {
      (s = kn.setPointerCapture) == null || s.call(kn, a.pointerId);
    } catch {
    }
  }), kn.addEventListener("pointermove", (a) => {
    ko && Rl(a);
  }), kn.addEventListener("pointerup", (a) => {
    ko && (ko = !1, Rl(a), Gt());
  }), kn.addEventListener("pointercancel", () => ko = !1), kn.addEventListener("keydown", (a) => {
    let { x: s, y: d } = Rn, m = !0;
    a.key === "ArrowLeft" ? s -= 0.05 : a.key === "ArrowRight" ? s += 0.05 : a.key === "ArrowUp" ? d -= 0.05 : a.key === "ArrowDown" ? d += 0.05 : m = !1, m && (a.preventDefault(), s = Math.max(0, Math.min(1, s)), d = Math.max(0, Math.min(1, d)), Rn = { x: s, y: d }, no.style.left = s * 100 + "%", no.style.top = d * 100 + "%", Fa(s, d), Gt());
  });
  const pn = i("workoutModal");
  let Ar = null;
  function Er(a) {
    return a.map((s) => ({ ...s }));
  }
  function Cs() {
    const a = ht[Tt];
    return {
      key: Tt,
      profile: a ? JSON.parse(JSON.stringify(a)) : null,
      warmup: Er(oa),
      strength: Er(Xe),
      cooldown: Er(on),
      total: Number(B.value),
      work: Number(q.value),
      rest: Number(R.value),
      rounds: Number(tt.value) || 1
    };
  }
  function Ks(a = !1) {
    Jt = !!a, ya = null, ua = null, Ca(), Zi(), Ar = Cs(), i("moveEditorTitle").textContent = Jt ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !Jt, i("warmupRow").hidden = Jt, i("deleteMoveOpen").hidden = Jt;
    const s = i("createMoveOptions");
    s.hidden = !Jt;
    {
      const d = ht[Tt];
      i("includeWarmupPreset").checked = !!(d != null && d.includeWarmup), i("includeCooldownPreset").checked = !!(d != null && d.includeCooldown);
    }
    if (Nl(), Jt) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const d = ht[Tt];
      Wi((d == null ? void 0 : d.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, Ki("movement"), Uo(), xi(), Tr.hidden = !0, za.setAttribute("aria-expanded", "false"), za.textContent = "Don’t try this!", pn.classList.toggle("createMode", Jt), pn.querySelector(".modal").classList.toggle("createMode", Jt), pn.classList.add("open"), pn.setAttribute("aria-hidden", "false"), ka(), Jt && Ce();
  }
  function Pl() {
    const a = ht[Tt];
    return a != null && a.customSequence ? !!a.includeWarmup : !(a != null && a.warmupOff);
  }
  function Nl() {
    const a = Pl(), s = i("warmupSwitch");
    s.classList.toggle("on", a), s.setAttribute("aria-checked", String(a));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const a = ht[Tt];
    a && (a.customSequence ? (i("includeWarmupPreset").checked = !a.includeWarmup, yr()) : (a.warmupOff = !a.warmupOff, Gt()), Nl());
  });
  function Dr() {
    Ca(), Zi(), ks(), ua = null, ya = null, pn.classList.contains("createMode") && le(), pn.classList.remove("createMode"), pn.querySelector(".modal").classList.remove("createMode"), pn.classList.remove("open"), pn.setAttribute("aria-hidden", "true");
  }
  function bd() {
    if (!Ar) return;
    const a = Ar;
    a.profile && (ht[a.key] = JSON.parse(JSON.stringify(a.profile))), Tt = a.key, oa = Er(a.warmup), Xe = Er(a.strength), on = Er(a.cooldown), B.value = a.total, q.value = a.work, R.value = a.rest, tt.value = a.rounds || 1;
    const s = ht[Tt];
    if (s) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((m) => m.classList.toggle("active", m.dataset.workout === Tt));
      const d = n.querySelector(".workoutPanel.active");
      if (d) {
        const m = d.querySelector(".workoutName");
        m && (m.textContent = s.name);
        const S = d.querySelector(".panelCollapsedText");
        S && (S.textContent = s.name);
        const _ = d.querySelector(".sourceTag");
        _ && (_.textContent = s.source);
      }
      v.value = s.name;
    }
    Gt();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (Jt) {
      const a = Tt;
      delete ht[a], Jt = !1, mo = null, Kt(Ye.order.find((s) => ht[s]) || Object.keys(ht)[0]);
    } else
      bd();
    Dr();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    Ca(), $t && xo();
    const a = ht[Tt], s = v.value.trim() || "New move";
    if (a && (a.name = s), ji(), ya = null, Gt(), Jt && a)
      Un(Tt, a), n.querySelectorAll(".workoutPanel[data-workout]").forEach((d) => d.classList.toggle("active", d.dataset.workout === Tt)), Jt = !1, mo = null, Ye.order.includes(Tt) || Ye.order.push(Tt), Nt("Move created");
    else {
      const d = n.querySelector(".workoutPanel.active");
      if (d) {
        const m = d.querySelector(".workoutName");
        m && (m.textContent = s);
        const S = d.querySelector(".panelCollapsedText");
        S && (S.textContent = s);
      }
      Nt("Move saved");
    }
    Ar = null, Dr(), An();
  }), pn.addEventListener("click", (a) => {
    if (a.target === pn) {
      if (Jt) {
        const s = Tt;
        delete ht[s], Jt = !1, mo = null, Kt(Ye.order.find((d) => ht[d]) || Object.keys(ht)[0]);
      } else
        bd();
      Dr();
    }
  }), Ui(i("addMovementBtn"), "movement"), Ui(i("addRestBtn"), "rest"), Ui(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", xi), i("useGlobalRestTiming").addEventListener("change", xi), n.querySelectorAll(".createPresetBtn").forEach((a) => a.addEventListener("click", () => {
    Wi(a.dataset.movePreset, !0), Gt();
  })), i("includeWarmupPreset").addEventListener("change", yr), i("includeCooldownPreset").addEventListener("change", yr), i("includeWarmupPreset").addEventListener("change", E), i("includeCooldownPreset").addEventListener("change", E), v.addEventListener("input", E), v.addEventListener("input", wi), i("confirmAddMovement").addEventListener("click", $i), i("confirmAddRest").addEventListener("click", $i), i("addMovementInput").addEventListener("keydown", (a) => {
    a.key === "Enter" && $i();
  });
  const Ts = i("countdown"), Hl = i("countNum"), Ko = i("countdownPixelCanvas");
  let Ls = null, Ji = "appear";
  class wd {
    constructor(s, d, m, S, _, O, Y) {
      this.width = s.width, this.height = s.height, this.ctx = d, this.x = m, this.y = S, this.color = _, this.speed = (Math.random() * 0.8 + 0.1) * O, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = Y, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
    }
    draw() {
      const s = this.maxSizeInteger * 0.5 - this.size * 0.5;
      this.ctx.fillStyle = this.color, this.ctx.fillRect(this.x + s, this.y + s, this.size, this.size);
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
  let Il = [], xd = 1, Qi = 1;
  function ki() {
    const a = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(a) && a > 0 ? a : 1;
  }
  function yd() {
    var Me;
    if (!Ko) return;
    const a = ki(), s = Math.max(1, window.innerWidth / a), d = Math.max(1, window.innerHeight / a);
    xd = s, Qi = d;
    const m = Math.min(window.devicePixelRatio || 1, 2);
    Ko.width = Math.floor(s * m), Ko.height = Math.floor(d * m), Ko.style.width = s + "px", Ko.style.height = d + "px";
    const S = Ko.getContext("2d");
    S.setTransform(m, 0, 0, m, 0, 0);
    const _ = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], O = 12, Y = (Me = window.matchMedia) == null ? void 0 : Me.call(window, "(prefers-reduced-motion: reduce)").matches, we = Y ? 0 : 0.055;
    Il = [];
    for (let ge = 0; ge < s; ge += O)
      for (let me = 0; me < d; me += O) {
        const Ie = ge - s / 2, at = me - d / 2, je = Math.sqrt(Ie * Ie + at * at), He = Y ? 0 : Math.random() * 75 + je * 0.05, De = new wd({ width: s, height: d }, S, ge, me, _[Math.floor(Math.random() * _.length)], we, He);
        De.maxSizeInteger = 4, De.maxSize = Math.random() * 3.2 + 0.8, De.sizeStep = 0.35 + Math.random() * 0.45, Il.push(De);
      }
  }
  function Fl(a) {
    cancelAnimationFrame(Ls), Ji = a;
    const s = Ko == null ? void 0 : Ko.getContext("2d");
    if (!s) return;
    function d() {
      s.clearRect(0, 0, xd, Qi);
      let m = !0;
      Il.forEach((S) => {
        S[Ji](), S.isIdle || (m = !1);
      }), Ji === "disappear" && m || (Ls = requestAnimationFrame(d));
    }
    Ls = requestAnimationFrame(d);
  }
  function As() {
    cancelAnimationFrame(Ls), yd(), Fl("appear"), setTimeout(() => Fl("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Ts.classList.contains("active") && As();
  });
  const _r = i("pixelTrailCanvas"), Rr = _r.getContext("2d");
  let $o = !0, Br = 0.7, er = 600, Mi = [], Si = null, So = { x: 0, y: 0, ready: !1 };
  function $s() {
    const a = u.getBoundingClientRect(), s = ki(), d = Math.min(window.devicePixelRatio || 1, 2), m = Math.max(1, a.width / s), S = Math.max(1, a.height / s);
    _r.width = Math.max(1, Math.floor(m * d)), _r.height = Math.max(1, Math.floor(S * d)), _r.style.width = m + "px", _r.style.height = S + "px", Rr.setTransform(d, 0, 0, d, 0, 0);
  }
  function kd(a, s) {
    if (!$o) return;
    const d = performance.now();
    So.ready || (So = { x: a, y: s, ready: !0 });
    const m = 7;
    for (let S = 1; S <= m; S++) {
      const _ = S / m;
      Mi.push({
        x: So.x + (a - So.x) * _,
        y: So.y + (s - So.y) * _,
        born: d - (m - S) * 10
      });
    }
    So = { x: a, y: s, ready: !0 };
  }
  function Xs(a) {
    if (Si = null, !x) return;
    if (!qe.workout.classList.contains("active")) {
      Si = requestAnimationFrame(Xs);
      return;
    }
    const s = u.getBoundingClientRect(), d = ki();
    Rr.clearRect(0, 0, s.width / d, s.height / d), $o && (Mi = Mi.filter((S) => a - S.born < er), Rr.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Mi.forEach((S) => {
      const _ = (a - S.born) / er, O = (1 - _) * Br, Y = Math.round(S.x / 14) * 14, we = Math.round(S.y / 14) * 14;
      Rr.globalAlpha = Math.max(0, O);
      const Me = 2 + 5 * (1 - _) * Br;
      Rr.fillRect(Y - Me / 2, we - Me / 2, Me, Me);
    }), Rr.globalAlpha = 1), Si = requestAnimationFrame(Xs);
  }
  u.addEventListener("pointermove", (a) => {
    const s = u.getBoundingClientRect(), d = ki();
    kd((a.clientX - s.left) / d, (a.clientY - s.top) / d);
  }), u.addEventListener("pointerleave", () => So.ready = !1), new ResizeObserver($s).observe(u), $s(), Si = requestAnimationFrame(Xs);
  const Xo = i("movementRippleCanvas"), Ci = Xo.getContext("2d");
  let tr = !0, Pr = null, Md = performance.now();
  function Sd() {
    const a = Xo.parentElement.getBoundingClientRect(), s = ki(), d = Math.max(1, a.width / s), m = Math.max(1, a.height / s), S = Math.min(window.devicePixelRatio || 1, 2);
    Xo.width = Math.max(1, Math.floor(d * S)), Xo.height = Math.max(1, Math.floor(m * S)), Xo.style.width = d + "px", Xo.style.height = m + "px", Ci.setTransform(S, 0, 0, S, 0, 0);
  }
  function Nr() {
    var a;
    return It || ((a = Ke[dt]) == null ? void 0 : a.kind) === "rest";
  }
  function Qt() {
    const a = Ke[dt];
    return Nr() ? 2200 : a ? a.kind === "warmup" || a.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Js(a) {
    if (Pr = null, !x) return;
    if (!qe.workout.classList.contains("active")) {
      Pr = requestAnimationFrame(Js);
      return;
    }
    const s = Xo.parentElement.getBoundingClientRect(), d = ki(), m = Math.max(1, s.width / d), S = Math.max(1, s.height / d);
    if (Ci.clearRect(0, 0, m, S), tr) {
      const _ = Qt(), O = (a - Md) % _ / _, Y = 15, we = Math.max(8, Math.round(Y * S / Math.max(1, m))), Me = m / (Y + 1), ge = S / (we + 1), me = m * 0.5, Ie = S * 0.52, at = Math.hypot(me, Ie), He = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let De = 1; De <= we; De++)
        for (let bt = 1; bt <= Y; bt++) {
          const xt = bt * Me, Ge = De * ge, kt = Math.hypot(xt - me, Ge - Ie) / at, Ft = Nr(), ut = Ft ? Math.exp(-Math.pow((kt - (O * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, rt = Math.exp(-Math.pow((kt - O * 1.25) * 7, 2)), ma = Ft ? ut : rt, Wa = Ft ? 0.5 + 0.5 * Math.sin(O * Math.PI * 2 - kt * 3) ** 2 : 0.35 + 0.65 * Math.sin(O * Math.PI * 2 - kt * 5) ** 2, aa = Ft ? 1.4 + ma * 4.2 * Wa : 1.2 + ma * 5 * Wa;
          Ci.beginPath(), Ci.arc(xt, Ge, aa, 0, Math.PI * 2), Ci.fillStyle = `rgba(${He},${Ft ? 0.08 + ma * 0.48 : 0.05 + ma * 0.55})`, Ci.fill();
        }
    }
    Pr = requestAnimationFrame(Js);
  }
  new ResizeObserver(Sd).observe(Xo.parentElement), Sd(), Pr = requestAnimationFrame(Js);
  const Es = i("exerciseTitle"), Jo = i("exerciseMeta"), Bn = i("stepLabel"), Ol = i("digits"), ql = i("fill"), Hr = i("progress"), Qs = i("pause"), Cd = i("nextName"), Sc = i("nextMeta"), Cc = i("nextIcon"), Ds = i("skipNextSession");
  let Za = null;
  function Mn(a) {
    for (let s = Math.max(0, a); s < Ke.length; s++)
      if (!Ke[s].sessionHidden) return s;
    return -1;
  }
  function Tc() {
    const a = Ke[dt];
    if (!a) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (It) {
      const m = Mn(dt + 1), S = m >= 0 ? Ke[m] : null;
      return S ? { name: S.name, meta: Wl(S), icon: Sn(S) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (a.rest > 0) return { name: "Rest", meta: a.rest + " sec · " + (a.roundBreakAfter ? "round " + (a.round + 1) + " next" : "recovery"), icon: "pause" };
    const s = Mn(dt + 1), d = s >= 0 ? Ke[s] : null;
    return d ? { name: d.name, meta: Wl(d), icon: Sn(d) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Lc() {
    if (!Ke[dt]) return Ke.length;
    const s = Mn(dt + 1);
    return s < 0 ? Ke.length : s + 1;
  }
  function Sn(a) {
    return a.kind === "video" ? "play" : "clock";
  }
  function Wl(a) {
    return a.kind === "video" ? "YouTube · " + vo(a.duration) : a.group + " · " + a.duration + " sec";
  }
  function el() {
    return Ke.length && Ke[Ke.length - 1].round || 1;
  }
  function un(a) {
    const s = Ke[a];
    if (!s) return "";
    const d = el();
    if (d <= 1) return "Step " + (a + 1) + " of " + Ke.length;
    if (s.roundBreak) return "Round " + s.round + " of " + d + " · Rest";
    const m = Ke.filter((S) => S.round === s.round && !S.roundBreak).length;
    return "Round " + s.round + " of " + d + " · Step " + (s.roundIndex + 1) + " of " + m;
  }
  function _t() {
    return Hr.querySelector('[data-step="' + dt + '"]');
  }
  function fn() {
    Ke[dt] && Number(Hr.dataset.round) !== (Ke[dt].round || 1) && Oa(), [...Hr.children].forEach((a) => {
      const s = Number(a.dataset.step);
      a.classList.toggle("done", s < dt), a.classList.toggle("active", s === dt), a.classList.toggle("rewindable", s <= dt), a.disabled = s > dt, s === dt && a.style.setProperty("--segment-progress", "0%");
    }), Ke[dt] && (Bn.textContent = un(dt), Pa());
  }
  function Vl(a) {
    const s = Ke.indexOf(a);
    s < 0 || s <= dt || (a.sessionHidden = !a.sessionHidden, Co(), Nt((a.sessionHidden ? "Hidden " : "Included ") + a.name + " for this session"));
  }
  function Ti() {
    const a = i("upcomingList");
    if (!a) return;
    a.innerHTML = "";
    const s = Lc(), d = Ke.slice(s);
    (En === "all" ? d : d.slice(0, Math.max(1, Number(En) || 1))).forEach((S) => {
      const _ = document.createElement("section");
      _.className = "upcomingCard" + (S.sessionHidden ? " sessionHidden" : "") + (Bs(S) ? " noMeta" : ""), _.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + ja(Sn(S)) + '</div><div><div class="upcomingName">' + nt(S.name) + '</div><div class="upcomingMeta">' + nt(Wl(S)) + (el() > 1 ? " · round " + S.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (S.sessionHidden ? "Include this session" : "Skip this session") + "</button>", _.querySelector(".skipSessionBtn").addEventListener("click", () => Vl(S)), a.appendChild(_);
    });
  }
  function Co() {
    var s;
    const a = Tc();
    Cd.textContent = a.name, Sc.textContent = a.meta, Cc.innerHTML = ja(a.icon);
    {
      const d = It ? Ke[Mn(dt + 1)] : ((s = Ke[dt]) == null ? void 0 : s.rest) > 0 ? { kind: "rest" } : Ke[Mn(dt + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(d && Bs(d)));
    }
    if (Za = null, It) {
      const d = Mn(dt + 1);
      d >= 0 && (Za = Ke[d]);
    } else {
      const d = Ke[dt];
      if (d && d.rest > 0)
        Za = null;
      else {
        const m = Mn(dt + 1);
        m >= 0 && (Za = Ke[m]);
      }
    }
    Ds && (Ds.hidden = !Za, Ds.textContent = Za != null && Za.sessionHidden ? "Include this session" : "Skip this session"), Ti();
  }
  Ds.addEventListener("click", () => {
    Za && (Za.sessionHidden = !Za.sessionHidden, Nt((Za.sessionHidden ? "Hidden " : "Included ") + Za.name + " for this session"), Co());
  });
  let Ka = null, oo = null;
  function io(a, s = {}) {
    const d = ht[Tt];
    l.fire(a, { move: (d == null ? void 0 : d.name) || "", move_id: Tt, ...s });
  }
  function Ac() {
    const a = ht[Tt];
    Ka = { key: Tt, name: (a == null ? void 0 : a.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(oo), oo = setInterval(() => {
      Ka && !Pe && Ka.active++;
    }, 1e3), io("started", { steps: Ke.length });
  }
  function Td(a) {
    if (clearInterval(oo), !Ka) return;
    const s = Ka;
    Ka = null, io(a ? "completed" : "ended", { seconds: s.active }), !(s.active < 30) && (Ye.history.unshift({ id: "h-" + s.startedAt, move_id: s.key, name: s.name, start: new Date(s.startedAt).toISOString(), seconds: s.active, completed: a }), Ye.history = Ye.history.slice(0, 1e3), An(), Ei(), qa());
  }
  let Mt = null, ar = null, Qo = !1;
  function Kn() {
    return vt().sounds !== !1;
  }
  function jl() {
    if (Kn())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), Mt = Mt || new (window.AudioContext || window.webkitAudioContext)(), Mt.state === "suspended" && Mt.resume();
      } catch {
        Mt = null;
      }
  }
  function Li(a, s, d, { to: m = a, vol: S = 0.25, type: _ = "sine" } = {}) {
    const O = Mt.currentTime + s, Y = Mt.createOscillator(), we = Mt.createGain();
    Y.type = _, Y.frequency.setValueAtTime(a, O), m !== a && Y.frequency.exponentialRampToValueAtTime(m, O + d), we.gain.setValueAtTime(1e-4, O), we.gain.exponentialRampToValueAtTime(S, O + 0.01), we.gain.exponentialRampToValueAtTime(1e-4, O + d), Y.connect(we).connect(Mt.destination), Y.start(O), Y.stop(O + d + 0.02);
  }
  const Ld = {
    tick: () => Li(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      Li(660, 0, 0.12, { type: "triangle", vol: 0.3 }), Li(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => Li(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      Li(523, 0, 0.16, { type: "triangle" }), Li(659, 0.16, 0.16, { type: "triangle" }), Li(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function ei(a) {
    if (!(!Kn() || !Mt))
      try {
        Mt.state === "suspended" && Mt.resume(), Ld[a]();
      } catch {
      }
  }
  function Ir() {
    xa >= 1 && xa <= 3 && xa !== ar && (ar = xa, ei("tick"));
  }
  function Ec() {
    jl(), T("workout"), Fr();
    const a = Mn(0);
    a >= 0 && Ke[a].kind === "video" && ol(Ke[a]);
  }
  function _s() {
    zr(), Td(!1), clearInterval(At), clearInterval(Et), It = !1, La(!1), i("app").classList.remove("resting"), Ts.classList.remove("active"), T("home");
  }
  function Fr() {
    Ts.classList.add("active");
    let a = 5;
    Hl.textContent = a, ei("tick"), requestAnimationFrame(As), clearInterval(Et), Et = setInterval(() => {
      a--, a > 0 ? (Hl.textContent = a, ei("tick"), As()) : (clearInterval(Et), Hl.textContent = "GO", ei("move"), Qo = !0, As(), setTimeout(() => {
        Ts.classList.remove("active"), cancelAnimationFrame(Ls), Ed();
      }, 650));
    }, 1e3);
  }
  function Oa() {
    var s;
    Hr.innerHTML = "";
    const a = ((s = Ke[Math.max(0, dt)] || Ke[0]) == null ? void 0 : s.round) || 1;
    Hr.dataset.round = a, Ke.forEach((d, m) => {
      if ((d.round || 1) !== a) return;
      const S = document.createElement("button");
      S.dataset.step = m, S.type = "button", S.className = "progressSegment", S.setAttribute("aria-label", "Go to " + d.name), S.addEventListener("click", () => {
        m <= dt && Ad(m);
      }), Hr.appendChild(S);
    });
  }
  function La(a) {
    a = !!a;
    const s = Pe !== a;
    if (Pe = a, Qs.textContent = a ? "Resume" : "Pause", i("app").classList.toggle("paused", a), $a && Xt)
      try {
        a ? Xt.pauseVideo() : Xt.playVideo();
      } catch {
      }
    s && Ka && io(a ? "paused" : "resumed");
  }
  function Ad(a) {
    a < 0 || a >= Ke.length || a > dt || (clearInterval(At), It = !1, i("app").classList.remove("resting"), dt = a, La(!1), Gr(), At = setInterval(ro, 1e3));
  }
  function Ed() {
    if (dt = Mn(0), La(!1), Oa(), dt < 0) {
      Es.textContent = "No activities", Jo.textContent = "Open Edit and enable or add a movement", Jo.hidden = !1;
      return;
    }
    Ac(), Gr(), clearInterval(At), At = setInterval(ro, 1e3);
  }
  const Or = i("videoStage"), qr = i("videoSound"), nr = 0, Wr = 1, Dd = 2;
  let ra = 0, or = null, To = null, Xt = null, Vr = null, tl = 0, jr = !1, $a = null, zl = null;
  function al() {
    var a;
    return (a = window.YT) != null && a.Player ? Promise.resolve(window.YT) : or || (or = new Promise((s, d) => {
      const m = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          m == null || m();
        } catch {
        }
      };
      const S = setInterval(() => {
        var O;
        (O = window.YT) != null && O.Player && (clearInterval(S), clearTimeout(_), s(window.YT));
      }, 100), _ = setTimeout(() => {
        clearInterval(S), or = null, d(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const O = document.createElement("script");
        O.src = "https://www.youtube.com/iframe_api", O.async = !0, O.onerror = () => {
          clearInterval(S), clearTimeout(_), or = null, d(new Error("YouTube did not load"));
        }, document.head.appendChild(O);
      }
    }), or);
  }
  function nl() {
    return To || (To = al().then((a) => new Promise((s) => {
      const d = document.createElement("div");
      i("videoFrame").appendChild(d), Xt = new a.Player(d, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => s(Xt), onStateChange: (m) => Lo(m.data), onError: (m) => ir(m.data) }
      });
    })), To.catch(() => {
      To = null;
    }), To);
  }
  function ol(a) {
    !(a != null && a.videoId) || a.videoError || nl().then((s) => {
      $a || Vr === a.videoId || (Vr = a.videoId, tl = Number(a.start) || 0, jr = !1, s.mute(), s.loadVideoById({ videoId: a.videoId, startSeconds: tl }));
    }).catch(() => {
    });
  }
  function Dc() {
    const a = Mn(dt + 1);
    a >= 0 && Ke[a].kind === "video" && ol(Ke[a]);
  }
  function Lo(a) {
    if (!$a) {
      a === Wr && !jr && (jr = !0, Xt.pauseVideo(), Xt.seekTo(tl, !0));
      return;
    }
    Or.classList.toggle("playing", a === Wr), Ke[dt] === $a && performance.now() > ra && (a === Wr && Pe ? La(!1) : a === Dd && !Pe && La(!0)), a === Wr && Rd($a.videoId, Xt.getDuration()) && An(), a === nr && Ai();
  }
  function ir(a) {
    const s = $a;
    if (!s) {
      Vr = null;
      return;
    }
    a === 101 || a === 150 ? (Yl(s.videoId), Nt("That video can’t play outside YouTube, so it was skipped")) : Nt("The video couldn’t play, so it was skipped"), Ai();
  }
  function _c(a) {
    if (i("app").classList.add("videoStep"), qr.hidden = !0, $a = a, clearTimeout(zl), !a.videoId) {
      Nt("This video step has no link yet, so it was skipped"), setTimeout(() => Ai(), 0);
      return;
    }
    nl().then((s) => {
      if ($a !== a) return;
      ra = performance.now() + 1500;
      const d = Number(a.start) || 0;
      Vr !== a.videoId ? (Vr = a.videoId, tl = d, s.loadVideoById({ videoId: a.videoId, startSeconds: d })) : (s.seekTo(d, !0), s.playVideo()), s.unMute(), Pe && s.pauseVideo(), zl = setTimeout(() => {
        $a !== a || Pe || (s.getPlayerState() !== Wr ? (s.mute(), s.playVideo(), qr.hidden = !1) : s.isMuted() && (qr.hidden = !1));
      }, 1600);
    }).catch(() => {
      $a === a && (Nt("YouTube didn’t load, so the video was skipped"), Ai());
    });
  }
  function Gl() {
    if (!i("app").classList.contains("videoStep")) return;
    const a = n.querySelector(".workGrid"), s = n.querySelector(".sessionControlRow"), d = a.getBoundingClientRect().top, m = (s == null ? void 0 : s.offsetHeight) || 42, S = window.innerHeight - d - 16 - m - 84;
    a.style.setProperty("--theater-h", Math.max(240, Math.round(S)) + "px");
  }
  window.addEventListener("resize", Gl);
  function zr() {
    clearTimeout(zl);
    const a = $a;
    if ($a = null, i("app").classList.remove("videoStep"), Or.classList.remove("playing"), qr.hidden = !0, a && Xt) {
      try {
        Xt.pauseVideo();
      } catch {
      }
      Vr = null;
    }
  }
  function Ai() {
    const a = $a;
    !a || Ke[dt] !== a || (zr(), clearInterval(At), so(), At = setInterval(ro, 1e3));
  }
  qr.addEventListener("click", () => {
    Xt && (Xt.unMute(), Xt.playVideo()), qr.hidden = !0;
  });
  function _d(a) {
    var m;
    const s = Number(a.start) || 0;
    if (a.useVideoLength === !1) return s + (Number(a.duration) || 300);
    const d = Xt && $a === a && Number((m = Xt.getDuration) == null ? void 0 : m.call(Xt)) || 0;
    return Number(a.end) || d || Number(a.videoDuration) || s + (Number(a.duration) || 300);
  }
  function Ul(a, s) {
    const d = ht[Tt];
    [oa, Xe, on, d == null ? void 0 : d.warmup, d == null ? void 0 : d.strength, d == null ? void 0 : d.cooldown, d == null ? void 0 : d.sequence].forEach((m) => (Array.isArray(m) ? m : []).forEach((S) => {
      S && S.kind === "video" && S.videoId === a && s(S);
    }));
  }
  function Rd(a, s) {
    s = Math.round(Number(s) || 0);
    let d = !1;
    return a && s > 0 && Ul(a, (m) => {
      m.videoDuration !== s && (m.videoDuration = s, d = !0);
    }), d;
  }
  function Yl(a) {
    Ul(a, (s) => {
      s.videoError = "embed";
    }), An();
  }
  function $n(a) {
    const s = a.videoId;
    if (!s) return;
    const d = () => {
      pn.classList.contains("open") ? ya || Gt() : (Gt(), An());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + s)).then((m) => m.ok ? m.json() : Promise.reject(m.status)).then((m) => {
      a.videoId === s && (a.videoTitle = m.title || "", a.autoName && m.title && (a.name = m.title), d());
    }).catch((m) => {
      a.videoId === s && m === 401 && (a.videoError = "embed", d());
    }), Rc(s).then((m) => {
      Rd(s, m) && d();
    }).catch((m) => {
      m === "embed" && a.videoId === s && (a.videoError = "embed", d());
    });
  }
  function Rc(a) {
    return al().then((s) => new Promise((d, m) => {
      const S = document.createElement("div");
      S.className = "videoProbe", S.setAttribute("aria-hidden", "true");
      const _ = document.createElement("div");
      S.appendChild(_), i("app").appendChild(S);
      let O = null, Y = !1;
      const we = (me, Ie) => {
        Y || (Y = !0, clearTimeout(Me), setTimeout(() => {
          try {
            O == null || O.destroy();
          } catch {
          }
          S.remove();
        }, 0), Ie ? m(Ie) : d(me));
      }, Me = setTimeout(() => we(0), 2e4), ge = () => {
        var Ie;
        const me = Number((Ie = O == null ? void 0 : O.getDuration) == null ? void 0 : Ie.call(O)) || 0;
        return me > 0 && we(me), me > 0;
      };
      O = new s.Player(_, {
        width: 320,
        height: 180,
        videoId: a,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            ge() || (O.mute(), O.playVideo());
          },
          onStateChange: () => ge(),
          onError: (me) => we(0, me.data === 101 || me.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Gr() {
    It = !1;
    const a = Ke[dt];
    i("app").classList.toggle("resting", a.kind === "rest"), a.kind === "video" ? _c(a) : zr(), xa = a.duration, wt = a.duration, ar = null, Qo ? Qo = !1 : ei(a.kind === "rest" ? "rest" : "move"), Es.textContent = a.name, Jo.textContent = a.group, Jo.hidden = !0, Bn.textContent = un(dt), Ka && io("step", { name: a.name, group: a.group, kind: a.kind, step: dt + 1, of: Ke.length, round: a.round || 1, rounds: el(), duration: a.duration }), Co(), fn(), Dc(), a.kind === "video" && setTimeout(Gl, 0);
  }
  function Pa() {
    var S;
    const a = ((S = Ke[dt]) == null ? void 0 : S.kind) === "video" && !It, s = a && xa >= 60;
    Ol.textContent = s ? vo(xa) : xa, Ol.classList.toggle("long", s), a && (i("videoClock").textContent = vo(xa) + " left");
    const d = xa / wt * 100;
    ql.style.width = d + "%";
    const m = _t();
    if (m && !It) {
      const _ = 100 - d;
      m.style.setProperty("--segment-progress", _ + "%");
    }
  }
  function ro() {
    var s, d;
    if (Pe) return;
    const a = Ke[dt];
    if ((a == null ? void 0 : a.kind) === "video" && !It && $a === a) {
      const m = Number((s = Xt == null ? void 0 : Xt.getCurrentTime) == null ? void 0 : s.call(Xt)) || 0, S = Number(a.start) || 0, _ = _d(a);
      wt = Math.max(1, _ - S), (m > S || ((d = Xt == null ? void 0 : Xt.getPlayerState) == null ? void 0 : d.call(Xt)) === Wr) && (xa = Math.max(0, Math.ceil(_ - m))), Pa(), Ir(), m > S && m >= _ - 0.25 && Ai();
      return;
    }
    xa--, Pa(), Ir(), xa <= 0 && (a.rest > 0 ? Ur(a.rest) : so());
  }
  function Ur(a) {
    var d;
    It = !0, i("app").classList.add("resting");
    const s = _t();
    s && s.style.setProperty("--segment-progress", "100%"), clearInterval(At), xa = a, wt = a, ar = null, ei("rest"), Ka && io("rest", { duration: a }), Es.textContent = "Rest", Jo.textContent = (d = Ke[dt]) != null && d.roundBreakAfter ? "Round " + (Ke[dt].round + 1) + " next" : "Recovery", Co(), Pa(), At = setInterval(() => {
      Pe || (xa--, Pa(), Ir(), xa <= 0 && (clearInterval(At), so(), At = setInterval(ro, 1e3)));
    }, 1e3);
  }
  function so() {
    It = !1;
    const a = Mn(dt + 1);
    if (a >= 0)
      dt = a, Gr();
    else {
      clearInterval(At), zr(), La(!1), i("app").classList.remove("resting"), Es.textContent = "Complete", Jo.textContent = "Move finished", Jo.hidden = !1, Ol.textContent = "✓";
      {
        const s = el();
        Bn.textContent = s > 1 ? s + " rounds done" : Ke.filter((d) => !d.roundBreak).length + " steps done";
      }
      Td(!0), ei("done");
      {
        const s = ha(7).reduce((d, m) => d + m.minutes, 0);
        Jo.textContent = "Move finished · " + s + " min in the last 7 days";
      }
      ql.style.width = "100%", Co();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    Bd(), La(!1);
  });
  function Bd() {
    clearInterval(At);
    const a = Ke[dt];
    if (It) {
      It = !1, i("app").classList.remove("resting");
      const d = Mn(dt + 1);
      d >= 0 ? (dt = d, Gr(), At = setInterval(ro, 1e3)) : so();
      return;
    }
    if (a && a.rest > 0) {
      Ur(a.rest);
      return;
    }
    const s = Mn(dt + 1);
    s >= 0 ? (dt = s, Gr(), At = setInterval(ro, 1e3)) : so();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(At), La(!1), It) {
      const a = Ke[dt];
      xa = a.rest, wt = a.rest, ar = null, ei("rest"), Es.textContent = "Rest", Jo.textContent = "Recovery", i("app").classList.add("resting"), Co(), Pa();
    } else
      Gr();
    At = setInterval(It ? () => {
      Pe || (xa--, Pa(), Ir(), xa <= 0 && (clearInterval(At), so(), At = setInterval(ro, 1e3)));
    } : ro, 1e3);
  });
  function rr(a, s, d, m) {
    let S = 0, _ = null, O = !1;
    function Y() {
      _ && cancelAnimationFrame(_), _ = null, S = 0, O = !1, s.style.width = "0%", a.classList.remove("holding");
    }
    function we(me) {
      if (!O) return;
      S || (S = me);
      const Ie = Math.min(1, (me - S) / d);
      if (s.style.width = Ie * 100 + "%", Ie >= 1) {
        O = !1, _ && cancelAnimationFrame(_), _ = null, s.style.width = "100%", setTimeout(() => s.style.width = "0%", 90), m();
        return;
      }
      _ = requestAnimationFrame(we);
    }
    function Me(me) {
      var Ie;
      if (!(me && me.button !== void 0 && me.button !== 0)) {
        me == null || me.preventDefault(), Y(), O = !0, a.classList.add("holding");
        try {
          (Ie = a.setPointerCapture) == null || Ie.call(a, me.pointerId);
        } catch {
        }
        _ = requestAnimationFrame(we);
      }
    }
    function ge() {
      O && Y();
    }
    a.addEventListener("pointerdown", Me), a.addEventListener("pointerup", ge), a.addEventListener("pointercancel", ge), a.addEventListener("lostpointercapture", ge), a.addEventListener("keydown", (me) => {
      (me.key === " " || me.key === "Enter") && !me.repeat && Me(me);
    }), a.addEventListener("keyup", (me) => {
      (me.key === " " || me.key === "Enter") && ge();
    });
  }
  const Bc = i("endWorkout");
  rr(Bc, i("holdEndFill"), 1500, _s);
  const sr = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    sr.classList.add("open"), sr.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    sr.classList.remove("open"), sr.setAttribute("aria-hidden", "true");
  });
  function il() {
    const a = Tt, s = n.querySelector('.workoutPanel[data-workout="' + a + '"]');
    s && s.remove(), delete ht[a], Ye.order = Ye.order.filter((m) => m !== a);
    let d = n.querySelector(".workoutPanel[data-workout]");
    if (!d) {
      const m = "custom-" + Date.now();
      ht[m] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, Ye.order.push(m), d = Un(m, ht[m]);
    }
    sr.classList.remove("open"), sr.setAttribute("aria-hidden", "true"), Ar = null, Dr(), Kt(d.dataset.workout), An(), Nt("Move deleted");
  }
  rr(i("deleteMoveYes"), i("deleteMoveFill"), 1500, il);
  const Yr = n.querySelector(".rubberTabs"), ti = i("rubberIndicator");
  function lr(a, s = !0) {
    if (!a || !Yr || !ti) return;
    const d = Yr.getBoundingClientRect(), m = a.getBoundingClientRect();
    ti.style.transition = s ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const S = ki();
    ti.style.left = (m.left - d.left) / S + Yr.scrollLeft + "px", ti.style.width = m.width / S + "px", s && (ti.style.transform = "scaleX(1.08)", setTimeout(() => ti.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((a) => a.addEventListener("click", () => {
    a.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((s) => s.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((s) => s.classList.remove("active")), a.classList.add("active"), i(a.dataset.pane).classList.add("active"), lr(a, !0);
  })), requestAnimationFrame(() => lr(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => lr(n.querySelector(".tab.active"), !1));
  const rl = i("pixelTrailToggle"), Rs = i("rippleToggle"), ai = i("trailStrength"), Zr = i("trailLife");
  function Pn(a, s) {
    vt()[a] = s, An();
  }
  const Zl = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Pd(a) {
    return a.kind === "rest" ? "rest" : a.kind === "video" ? "video" : "g:" + String(a.group || "").trim().toLowerCase();
  }
  function Bs(a) {
    var s;
    return !!((s = vt().hideMeta) != null && s[Pd(a)]);
  }
  function Pc() {
    const a = /* @__PURE__ */ new Map(), s = (d, m, S) => {
      if (!d) return;
      Array.isArray(d) && (d = { name: d[1], group: d[2], kind: "work" });
      const _ = Pd(d);
      let O = a.get(_);
      O || (O = { key: _, label: _ === "rest" ? "Rest" : _ === "video" ? "Video" : String(d.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, a.set(_, O)), O.kinds.add(_ === "rest" ? "Rest" : _ === "video" ? "Video" : m), O.moves.add(S), O.count++;
    };
    return Object.values(ht).forEach((d) => {
      const m = d.name || "Move";
      (d.warmup || (d.customSequence ? [] : ho)).forEach((S) => s(S, "Warm-up", m)), (d.customSequence ? d.sequence || [] : d.strength || []).forEach((S) => s(S, S.presetRole === "warmup" ? "Warm-up" : S.presetRole === "cooldown" ? "Cooldown" : "Movement", m)), (d.cooldown || (d.customSequence ? [] : pt)).forEach((S) => s(S, "Cooldown", m));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([d, m]) => {
      a.has(d) || a.set(d, { key: d, label: m, kinds: /* @__PURE__ */ new Set([m]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...a.values()].map((d) => ({ ...d, kind: d.kinds.has("Movement") ? "Movement" : [...d.kinds][0], moves: [...d.moves] })).sort((d, m) => Zl.indexOf(d.kind) - Zl.indexOf(m.kind) || d.label.localeCompare(m.label));
  }
  let sl = "all";
  function Ht() {
    const a = i("metaSearch").value.trim().toLowerCase();
    return Pc().filter((s) => (sl === "all" || s.kind === sl) && (!a || s.label.toLowerCase().includes(a) || s.moves.some((d) => d.toLowerCase().includes(a))));
  }
  function Xa() {
    const a = i("metaTableBody");
    if (!a) return;
    const s = vt().hideMeta || {}, d = Ht();
    a.innerHTML = d.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', d.forEach((S) => {
      const _ = !s[S.key], O = S.count ? (S.moves.length > 2 ? S.moves.slice(0, 2).join(", ") + " + " + (S.moves.length - 2) + " more" : S.moves.join(", ")) + " · " + S.count + " step" + (S.count === 1 ? "" : "s") : "Not used yet", Y = document.createElement("tr");
      Y.className = _ ? "" : "off", Y.innerHTML = '<td><div class="metaType">' + nt(S.label) + '</div><div class="metaSub">' + nt(S.kind + " · " + O) + '</div></td><td class="metaKindCol">' + nt(S.kind) + '</td><td class="metaUsedCol">' + nt(O) + '</td><td class="metaSwitchCol"><button class="switch' + (_ ? " on" : "") + '" type="button" role="switch" aria-checked="' + _ + '" aria-label="Second line for ' + nt(S.label) + ' on phones"></button></td>', Y.querySelector(".switch").addEventListener("click", () => Kr([S.key], _)), a.appendChild(Y);
    });
    const m = d.filter((S) => s[S.key]).length;
    i("metaCount").textContent = d.length ? d.length + " type" + (d.length === 1 ? "" : "s") + (m ? " · " + m + " hidden on phones" : "") : "";
  }
  function Kr(a, s) {
    const d = { ...vt().hideMeta || {} };
    a.forEach((m) => {
      s ? d[m] = !0 : delete d[m];
    }), Pn("hideMeta", d), Xa(), kr(), Co();
  }
  i("metaSearch").addEventListener("input", Xa), i("metaKinds").querySelectorAll(".kindChip").forEach((a) => a.addEventListener("click", () => {
    sl = a.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((s) => s.classList.toggle("active", s === a)), Xa();
  })), i("metaHideAll").addEventListener("click", () => Kr(Ht().map((a) => a.key), !0)), i("metaShowAll").addEventListener("click", () => Kr(Ht().map((a) => a.key), !1));
  const $r = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...vt().toggles || {} };
  function ll() {
    n.querySelectorAll("[data-toggle]").forEach((d) => d.classList.toggle("on", $r[d.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([d, m]) => {
      i(m).hidden = $r[d] === !1;
    });
    const a = ["steps", "mood", "energyLevel"].some((d) => $r[d] !== !1);
    n.querySelector(".activityCard").hidden = !a, i("weatherCard").hidden = !0;
    const s = n.querySelector("#homeView .grid");
    s.classList.toggle("noActivity", !a), s.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((a) => a.addEventListener("click", () => {
    $r[a.dataset.toggle] = $r[a.dataset.toggle] === !1, ll(), Pn("toggles", { ...$r });
  })), ll();
  function Nc() {
    rl.classList.toggle("on", $o), Rs.classList.toggle("on", tr), ai.value = Math.round(Br * 100), i("trailStrengthValue").textContent = ai.value + "%", Zr.value = er, i("trailLifeValue").textContent = Zr.value + " ms";
  }
  vt().trailEnabled !== void 0 && ($o = vt().trailEnabled), vt().rippleEnabled !== void 0 && (tr = vt().rippleEnabled), vt().trailStrength !== void 0 && (Br = vt().trailStrength), vt().trailMaxAge !== void 0 && (er = vt().trailMaxAge), Nc();
  const Xn = i("soundsToggle");
  Xn.classList.toggle("on", Kn()), Xn.addEventListener("click", () => {
    Pn("sounds", !Kn()), Xn.classList.toggle("on", Kn()), Kn() && (jl(), ei("move"));
  }), rl.addEventListener("click", () => {
    $o = !$o, rl.classList.toggle("on", $o), $o || (Mi = []), Pn("trailEnabled", $o);
  }), Rs.addEventListener("click", () => {
    tr = !tr, Rs.classList.toggle("on", tr), Pn("rippleEnabled", tr);
  }), ai.addEventListener("input", () => {
    Br = Number(ai.value) / 100, i("trailStrengthValue").textContent = ai.value + "%";
  }), ai.addEventListener("change", () => Pn("trailStrength", Br)), Zr.addEventListener("input", () => {
    er = Number(Zr.value), i("trailLifeValue").textContent = Zr.value + " ms";
  }), Zr.addEventListener("change", () => Pn("trailMaxAge", er)), Qa.addEventListener("change", () => Pn("upcomingCount", En));
  function Ao(a) {
    n.querySelectorAll(".themeBtn").forEach((d) => d.classList.toggle("active", d.dataset.theme === a));
    const s = a === "light";
    i("app").classList.toggle("light", s), l.setLight(s), Di(n);
  }
  Ao(vt().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((a) => a.addEventListener("click", () => {
    Ao(a.dataset.theme), Pn("theme", a.dataset.theme);
  }));
  const Aa = { steps: null, weather: null, ...vt().entities || {} };
  let fa = null, Ja = {};
  function ni(a) {
    const s = Object.values(a).filter((Y) => Y.entity_id.startsWith("sensor.") || Y.entity_id.startsWith("input_number.")), d = (Y) => Y.attributes.friendly_name || Y.entity_id, m = s.filter((Y) => /step/i.test(Y.entity_id) || /step/i.test(d(Y)) || ["steps", "step"].includes(String(Y.attributes.unit_of_measurement || "").toLowerCase())), S = s.filter((Y) => !m.includes(Y)), _ = (Y, we) => d(Y).localeCompare(d(we)), O = (Y, we) => /health_steps/.test(we.entity_id) - /health_steps/.test(Y.entity_id) || _(Y, we);
    return { suggested: m.sort(O), rest: S.sort(_), label: d };
  }
  function dl(a) {
    const s = i("stepsEntity");
    if (!s || s.matches(":focus")) return;
    const { suggested: d, rest: m, label: S } = ni(a), _ = (we) => '<option value="' + nt(we.entity_id) + '">' + nt(S(we)) + "</option>";
    s.innerHTML = '<option value="">Not connected</option>' + (d.length ? '<optgroup label="Suggested">' + d.map(_).join("") + "</optgroup>" : "") + (m.length ? '<optgroup label="All sensors">' + m.map(_).join("") + "</optgroup>" : ""), s.value = Aa.steps || "";
    const O = i("stepsStatus"), Y = Aa.steps && a[Aa.steps];
    O.textContent = Y ? "Connected · " + S(Y) : O.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    Aa.steps = i("stepsEntity").value || null, Pn("entities", { ...Aa }), Ja = {}, Hd(), fa && (dl(fa), Nd(fa));
  });
  function oi(a, s = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: s }).format(a);
  }
  function cl() {
    const a = Aa.steps && (fa == null ? void 0 : fa[Aa.steps]), s = Number(a == null ? void 0 : a.state);
    return Number.isFinite(s) ? s : null;
  }
  function Nd(a) {
    var m;
    const s = Aa.steps, d = s ? Number((m = a[s]) == null ? void 0 : m.state) : NaN;
    i("stepsMeta").textContent = s ? Number.isFinite(d) ? oi(d) : "—" : "Set up in Settings";
  }
  let pl = 0;
  async function Hd() {
    const a = Aa.steps;
    if (!a || !l.ws) return;
    pl = Date.now();
    const s = /* @__PURE__ */ new Date(), d = new Date(s.getFullYear(), s.getMonth(), s.getDate() - 30);
    try {
      const m = await l.ws({ type: "recorder/statistics_during_period", start_time: d.toISOString(), end_time: s.toISOString(), statistic_ids: [a], period: "day", types: ["max"] }), S = (m == null ? void 0 : m[a]) || [], _ = {};
      if (S.forEach((O) => {
        Number.isFinite(O.max) && (_[Yt(new Date(O.start))] = O.max);
      }), !Object.keys(_).length) {
        const O = await l.ws({ type: "history/history_during_period", start_time: d.toISOString(), end_time: s.toISOString(), entity_ids: [a], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((O == null ? void 0 : O[a]) || []).forEach((Y) => {
          const we = Number(Y.s ?? Y.state), Me = Y.lu ? Y.lu * 1e3 : Date.parse(Y.last_updated || Y.last_changed);
          if (!Number.isFinite(we) || !Me) return;
          const ge = Yt(new Date(Me));
          _[ge] = Math.max(_[ge] || 0, we);
        });
      }
      Ja = _, qa();
    } catch {
    }
  }
  function Ei() {
    qa();
  }
  Ei(), setInterval(() => {
    Ei(), ia(), Rt();
  }, 10 * 60 * 1e3);
  function ha(a) {
    const s = {}, d = {};
    Ye.history.forEach((O) => {
      const Y = Yt(new Date(O.start));
      s[Y] = (s[Y] || 0) + (O.seconds || 0) / 60, d[Y] = (d[Y] || 0) + 1;
    });
    const m = /* @__PURE__ */ new Date(), S = Yt(m), _ = [];
    for (let O = a - 1; O >= 0; O--) {
      const Y = new Date(m.getFullYear(), m.getMonth(), m.getDate() - O), we = Yt(Y), Me = Ye.checkins.filter((me) => me.date === we), ge = (me) => {
        const Ie = Me.map((at) => at[me]).filter(Boolean);
        return Ie.length ? Ie.reduce((at, je) => at + je, 0) / Ie.length : null;
      };
      _.push({
        key: we,
        date: Y,
        minutes: Math.round(s[we] || 0),
        moves: d[we] || 0,
        steps: we === S && cl() != null ? cl() : Ja[we] ?? null,
        mood: ge("mood"),
        energy: ge("energy")
      });
    }
    return _;
  }
  function ii(a) {
    let s = a.length - 1;
    a[s] && !a[s].minutes && s--;
    let d = 0;
    for (; s >= 0 && a[s].minutes > 0; )
      d++, s--;
    return d;
  }
  function qa() {
    const a = i("insightCard");
    if (!a) return;
    const s = ha(30), d = ii(s), m = s.reduce((Me, ge) => Me + ge.minutes, 0), S = /* @__PURE__ */ new Date(), _ = Yt(S), O = Yt(new Date(S.getFullYear(), S.getMonth(), S.getDate() - (S.getDay() + 6) % 7)), Y = s.filter((Me) => Me.key >= O && Me.key <= _).reduce((Me, ge) => Me + ge.minutes, 0), we = (Me, ge, me) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + Me + '</div><div><div class="activityRowName">' + nt(ge) + '</div><div class="activityRowMeta">' + nt(me) + "</div></div></div>";
    a.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + ja("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + we(ja("clock"), "This week", Y + " min") + we(ja("streak"), "Streak", d + " day" + (d === 1 ? "" : "s")) + we(ja("calendar"), "30 days", m + " min") + "</div>";
  }
  const Ps = {
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
  }, Kl = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", ri = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Xr = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Jr = 0;
  const Eo = (a, s) => '<path class="' + s + '" d="' + a + '"/>', Id = (a, s) => ' style="animation-delay:-' + Math.round(a * 137 % s) + 'ms"', Nn = (a, s, d, m) => {
    const S = d * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (m < 1 ? ' opacity="' + m + '"' : "") + Id(a, 2400) + ' d="M' + a + " " + (s - d) + "L" + (a + S) + " " + (s - S) + "L" + (a + d) + " " + s + "L" + (a + S) + " " + (s + S) + "L" + a + " " + (s + d) + "L" + (a - S) + " " + (s + S) + "L" + (a - d) + " " + s + "L" + (a - S) + " " + (s - S) + 'Z"/>';
  }, $l = ([a, s, d], m) => '<path class="wxMoonPath" d="' + a + '" fill="url(#' + m + ')"/><defs><linearGradient id="' + m + '" x1="0" y1="' + s + '" x2="0" y2="' + d + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', ul = (a, s) => s ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Fd = (a) => (a ? ["29.35", "43.04", "56.74"].map((s, d) => '<g class="wxDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wxAccent" x="' + s + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + s + ' 60.65)"/></g>') : [19, 26, 33].map((s, d) => '<g class="wxDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + s + ' 38)"/></g>')).join(""), Qr = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([s, d], m) => '<circle class="wxFlake" style="animation-delay:-' + m * 640 + 'ms" cx="' + s + '" cy="' + d + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function es(a, s, d, m) {
    return a === "clear" ? s ? $l(d ? Xr.l : Xr.s, m) + (d ? Nn(70, 20, 5.83, 1) + Nn(78.33, 41.67, 3.75, 0.8) + Nn(60, 71.67, 3.33, 0.6) : Nn(42, 12, 3.5, 1) + Nn(47, 25, 2.25, 0.8) + Nn(36, 43, 2, 0.6)) : ul(m, d) : a === "partly" ? (s ? $l(d ? Xr.lp : Xr.sp, m) : d ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Eo(d ? ri.lp : ri.sp, s ? "wxCloudLight" : "wxBright") + (s ? d ? Nn(73.33, 16.67, 4.17, 0.9) : Nn(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? Eo(d ? ri.lc : ri.s, s ? "wxCloudLight" : "wxBright") + (s ? d ? Nn(15, 15, 3.75, 0.8) + Nn(76.67, 13.33, 2.92, 0.6) : Nn(9, 9, 2.25, 0.8) + Nn(46, 8, 1.75, 0.6) : "") : Eo(d ? ri.lr : ri.s, "wxCloudLight") + (a === "rain" ? Fd(d) : Qr(d));
  }
  const Do = () => {
    var a;
    return ((a = fa == null ? void 0 : fa["sun.sun"]) == null ? void 0 : a.state) === "below_horizon";
  };
  let hn = vt().weatherStyle || "bitmap", _o = vt().weatherLayout === "strip" ? "strip" : "tiles", lo = vt().weatherMotion !== !1;
  const si = () => lo && !Ut(), ts = /* @__PURE__ */ new Map(), Xl = 700, Od = (a) => {
    const [s, d] = a.split("/");
    return { k: s === "fog" ? "cloudy" : s === "storm" ? "rain" : s, night: d === "night" };
  };
  function da(a, s, d, m = hn, S, _) {
    let O = Kl(a);
    const Y = O === "night" || (_ != null ? !!_ : !!d && Do());
    O === "night" && (O = "clear");
    const we = s ? 90 : 54, Me = Mc(a, Y), ge = performance.now();
    let me = S ? ts.get(S) : null;
    if (S && !me ? ts.set(S, me = { key: Me, t0: -1e9 }) : me && me.key !== Me && (me.fromKey = me.key, me.from = me.last || null, me.key = Me, me.t0 = ge), m !== "smooth") return '<span class="wxIcon pixels' + (s ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + Me + '"' + (S ? ' data-wx-slot="' + S + '"' : "") + ' data-wx-style="' + m + '" data-wx-size="' + we + '"></canvas></span>';
    let Ie = "";
    if (me && ge - me.t0 < Xl && (si() || Ut())) {
      const at = Od(me.fromKey);
      Ie = '<span class="wxLayer wxOut ' + at.k + (at.night ? " night" : "") + '" style="animation-delay:' + Math.round(me.t0 - ge) + 'ms"><svg viewBox="0 0 ' + we + " " + we + '">' + es(at.k, at.night, s, "wxg" + ++Jr) + "</svg></span>";
    }
    return '<span class="wxIcon ' + O + (Y ? " night" : "") + (s ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + we + " " + we + '">' + es(O, Y, s, "wxg" + ++Jr) + "</svg>" + Ie + "</span>";
  }
  function li() {
    const a = i("app"), s = getComputedStyle(a), d = (Y) => s.getPropertyValue(Y).trim(), m = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([Y, we]) => {
      d(we) && (m[Y] = d(we));
    });
    const S = d("--color-text-primary") || "#f1f1f1", _ = d("--color-bg-card") || "#222222", O = a.classList.contains("light");
    return { colors: m, ink: O ? S : _, paper: O ? _ : S };
  }
  function Di(a, s = performance.now()) {
    const d = a.querySelectorAll("canvas[data-wx]");
    if (!d.length) return;
    const m = li(), S = si(), _ = Ut();
    d.forEach((O) => {
      var me;
      const Y = O.dataset.wx, we = O.dataset.wxSlot ? ts.get(O.dataset.wxSlot) : null;
      let Me = xp(Y, m.colors);
      if (we && we.key === Y) {
        const Ie = (s - we.t0) / Xl;
        Ie < 1 && (S || _) && (Me = Ff(we.from || xp(we.fromKey, m.colors), Me, Math.max(0, Ie), m.colors, _)), we.last = Me;
      }
      const ge = qu(Me, { size: Number(O.dataset.wxSize) || 54, px: 2, oneBit: O.dataset.wxStyle === "onebit", colors: m.colors, ink: m.ink, paper: m.paper, clock: s, idle: S });
      O.width !== ge.w && (O.width = ge.w), O.height !== ge.h && (O.height = ge.h), (me = O.getContext("2d")) == null || me.putImageData(new ImageData(ge.data, ge.w, ge.h), 0, 0);
    });
  }
  let fl = null, qd = -1;
  function Jl(a) {
    if (fl = null, !x) return;
    const s = si(), d = Math.floor(a / 100), m = [...ts.values()].some((we) => a - we.t0 < Xl), S = [...as.values()].some((we) => a - we.t0 < we.dur), _ = qe.home.classList.contains("active"), O = gn.classList.contains("open"), Y = s && hn === "smooth" && (O || _ && _o === "strip");
    !document.hidden && (m || S || Y || s && d !== qd) && (qd = d, _ && (Di(i("weatherCard"), a), ns(i("weatherCard"), a)), O && (Di(gn, a), ns(gn, a))), (s || m || S) && (fl = requestAnimationFrame(Jl));
  }
  function _i() {
    i("app").classList.toggle("wxMotion", si()), !fl && x && (fl = requestAnimationFrame(Jl));
  }
  let Ql = [];
  const Ea = 36e5, Hc = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function di() {
    const a = /* @__PURE__ */ new Date(), s = (_, O) => new Date(a.getFullYear(), a.getMonth(), a.getDate() + _, O), d = [], m = [], S = [...Array(6)].map((_, O) => {
      const Y = s(O, 6), we = s(O, 18), Me = s(O + 1, 6), ge = Ql.find((Ie) => Yt(new Date(Ie.datetime)) === Yt(Y)), me = (Ie, at, je) => {
        const He = d.filter((xt) => xt.t >= +Ie && xt.t < +at);
        if (He.length) {
          const xt = {};
          return He.forEach((Ge) => {
            xt[Ge.c] = (xt[Ge.c] || 0) + (Hc.has(Ge.c) ? 2 : 1);
          }), Object.entries(xt).sort((Ge, kt) => kt[1] - Ge[1])[0][0];
        }
        const De = m.find((xt) => {
          const Ge = +new Date(xt.datetime);
          return Ge >= +Ie - 3 * Ea && Ge < +at && (xt.is_daytime == null || !!xt.is_daytime == !je);
        });
        if (De) return De.condition;
        const bt = (ge == null ? void 0 : ge.condition) || "cloudy";
        return je && bt === "sunny" ? "clear-night" : bt;
      };
      return { start: +Y, end: +Me, day: me(Y, we, !1), night: me(we, Me, !0), hi: Number(ge == null ? void 0 : ge.temperature), lo: Number(ge == null ? void 0 : ge.templow) };
    });
    return { days: S, hours: d, start: S[0].start, end: S[5].end };
  }
  const mn = (a, s) => {
    const d = a.days.findIndex((S) => s < S.end);
    if (d < 0) return 1;
    const m = a.days[d];
    return Math.max(0, (d + (s - m.start) / (m.end - m.start)) / 6);
  }, ed = (a, s) => {
    const d = Math.max(0, Math.min(0.99999, s)) * 6, m = Math.floor(d), S = a.days[m];
    return S.start + (d - m) * (S.end - S.start);
  };
  function hl(a, s) {
    const d = Math.max(0, a.days.findIndex((we) => s < we.end)), m = a.days[d], S = (s - m.start) / (m.end - m.start) >= 0.5;
    let _ = S ? m.night : m.day, O = NaN;
    const Y = a.hours;
    if (Y.length && s >= Y[0].t - Ea && s <= Y[Y.length - 1].t + Ea) {
      let we = Y.findIndex((me) => me.t > s);
      we < 0 && (we = Y.length);
      const Me = Y[Math.max(0, we - 1)], ge = Y[Math.min(Y.length - 1, we)];
      _ = Me.c || _, O = ge.t > Me.t ? Me.temp + (ge.temp - Me.temp) * Math.max(0, Math.min(1, (s - Me.t) / (ge.t - Me.t))) : Me.temp;
    }
    if (!Number.isFinite(O)) {
      const we = [];
      if (a.days.forEach((Me) => {
        Number.isFinite(Me.lo) && we.push([Me.start - Ea, Me.lo]), Number.isFinite(Me.hi) && we.push([Me.start + 9 * Ea, Me.hi]);
      }), we.length) {
        O = s <= we[0][0] ? we[0][1] : we[we.length - 1][1];
        for (let Me = 1; Me < we.length; Me++) if (s <= we[Me][0] && s > we[Me - 1][0]) {
          const [ge, me] = we[Me - 1], [Ie, at] = we[Me];
          O = me + (at - me) * (1 - Math.cos(Math.PI * (s - ge) / (Ie - ge))) / 2;
          break;
        }
      }
    }
    return { cond: S && _ === "sunny" ? "clear-night" : _, temp: O, night: S, day: m };
  }
  const td = (a) => Yt(new Date(a)) === Yt(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(a)), as = /* @__PURE__ */ new Map(), Ic = 900, Fc = 700;
  let ml = null;
  const Hn = typeof ResizeObserver == "function" ? new ResizeObserver((a) => a.forEach((s) => {
    ns(s.target.parentElement), s.target.closest("#wxDialog") && vl();
  })) : null;
  function ns(a, s = performance.now()) {
    const d = a.querySelectorAll("canvas[data-wx-strip]");
    if (!d.length) return;
    const m = di(), S = m.days.flatMap((me) => [{ cond: me.day, night: !1 }, { cond: me.night, night: !0 }]), _ = S.map((me) => me.cond).join(), O = li(), Y = si(), we = Ut(), Me = Number(Yt(new Date(m.start)).replace(/\D/g, "")) % 9973;
    let ge = !1;
    d.forEach((me) => {
      var xt;
      const Ie = me.clientWidth, at = me.clientHeight;
      if (!Ie || !at) return;
      const je = me.dataset.wxStrip;
      let He = as.get(je);
      He ? He.sig !== _ && (He.prev = He.segs, He.sig = _, He.segs = S, He.t0 = s, He.dur = Fc) : as.set(je, He = { sig: _, segs: S, prev: null, t0: s, dur: Ic });
      const De = Y || we ? Math.min(1, Math.max(0, (s - He.t0) / He.dur)) : 1;
      De < 1 && (ge = !0);
      const bt = { width: Ie, height: at, colors: O.colors, clock: s, ambient: Y, seed: Me, reveal: we ? De : 1 - Math.pow(1 - De, 3), prev: De < 1 ? He.prev : null, reduce: we };
      if (hn === "smooth") {
        const Ge = Math.min(2, window.devicePixelRatio || 1), kt = Math.round(Ie * Ge), Ft = Math.round(at * Ge);
        me.width !== kt && (me.width = kt), me.height !== Ft && (me.height = Ft);
        const ut = me.getContext("2d");
        if (!ut) return;
        ut.setTransform(Ge, 0, 0, Ge, 0, 0), Qf(ut, S, bt);
      } else {
        const Ge = Jf(S, { ...bt, px: 2, oneBit: hn === "onebit", ink: O.ink, paper: O.paper });
        me.width !== Ge.w && (me.width = Ge.w), me.height !== Ge.h && (me.height = Ge.h), (xt = me.getContext("2d")) == null || xt.putImageData(new ImageData(Ge.data, Ge.w, Ge.h), 0, 0);
      }
    }), ge && _i();
  }
  function Wd() {
    const a = i("weatherCard");
    if (!a || a.hidden) return;
    const s = Aa.weather, d = s && (fa == null ? void 0 : fa[s]);
    if (!d) {
      a.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + da("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (s ? "Not available" : "Set up in Settings") + "</div></div></div></div>", Di(a);
      return;
    }
    const m = d.attributes || {}, S = m.temperature_unit || "°", _ = (ut) => Number.isFinite(Number(ut)) ? Math.round(Number(ut)) + "°" : "—", O = (m.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", Y = Ps[d.state] || (d.state ? d.state.charAt(0).toUpperCase() + d.state.slice(1) : "—"), we = Yt(/* @__PURE__ */ new Date()), Me = Ql.slice(0, 7), ge = Me.find((ut) => Yt(new Date(ut.datetime)) === we) || null, me = Me.filter((ut) => Yt(new Date(ut.datetime)) >= we).slice(0, 6), Ie = /* @__PURE__ */ new Date(), at = Yt(new Date(Ie.getFullYear(), Ie.getMonth(), Ie.getDate() + 1)), je = ge ? "H " + _(ge.temperature) + "&ensp; L " + _(ge.templow) : "", He = (ut) => {
      const rt = Yt(new Date(ut.datetime));
      return rt === we ? "Today" : rt === at ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(ut.datetime));
    }, De = Number.isFinite(Number(m.temperature)) ? Math.round(Number(m.temperature)) : "—", bt = (ut) => {
      const rt = new Date(ut.datetime);
      return Math.round((new Date(rt.getFullYear(), rt.getMonth(), rt.getDate()) - new Date(Ie.getFullYear(), Ie.getMonth(), Ie.getDate())) / 864e5);
    }, xt = (ut) => (Ps[ut] || ut || "").toLowerCase(), Ge = (ut, rt) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + bt(ut) + '" aria-label="' + nt(He(ut) + ": " + xt(ut.condition) + ", " + _(ut.temperature) + " / " + _(ut.templow) + ". Open the forecast") + '">' + da(ut.condition, !1, !1, hn, "day" + rt) + '<div><div class="activityRowName">' + nt(He(ut)) + '</div><div class="activityRowMeta">' + _(ut.temperature) + " / " + _(ut.templow) + "</div></div></div>", kt = () => '<div class="wxStrip"><div class="wxStripDays">' + di().days.map((rt, ma) => {
      const aa = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(rt.start)) + ": " + xt(rt.day) + (xt(rt.day) === xt(rt.night) ? " all day and night" : ", then " + xt(rt.night) + " overnight") + (Number.isFinite(rt.hi) ? ". High " + _(rt.hi) : "") + (Number.isFinite(rt.lo) ? ", low " + _(rt.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + ma + '" aria-label="' + nt(aa) + '"><span class="wxDayName">' + nt(td(rt.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + _(rt.hi) + '</span><span class="wxLow">' + _(rt.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    a.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + nt("Now in " + O + ": " + De + "°, " + xt(d.state) + ". Open the forecast") + '"><div class="wxCurrent">' + da(d.state, !0, !0, hn, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + nt(String(De)) + '</span><span class="wxUnit">' + nt(S) + '</span></div><div class="wxPlace">' + nt(O) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + nt(Y) + "</div>" + (je ? '<div class="wxRange">' + je + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (me.length ? _o === "strip" ? kt() : '<div class="activityRows wxDays">' + me.map(Ge).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", Di(a);
    const Ft = a.querySelector("canvas[data-wx-strip]");
    ml && ml !== Ft && (Hn == null || Hn.unobserve(ml)), ml = Ft, Ft && (Hn == null || Hn.observe(Ft), ns(a)), _i(), Ro();
  }
  const ad = i("weatherCard"), nd = (a) => {
    const s = a.closest("[data-wx-day]");
    if (s) {
      const m = /* @__PURE__ */ new Date();
      os(+new Date(m.getFullYear(), m.getMonth(), m.getDate() + Number(s.dataset.wxDay), 12), s);
      return;
    }
    const d = a.closest("[data-wx-open]");
    d && os(Date.now(), d);
  };
  ad.addEventListener("click", (a) => nd(a.target)), ad.addEventListener("keydown", (a) => {
    (a.key === "Enter" || a.key === " ") && a.target.matches("[data-wx-day],[data-wx-open]") && (a.preventDefault(), nd(a.target));
  });
  const gn = i("wxDialog"), ci = i("wxGraph"), pi = i("wxGraphWrap");
  let co = Date.now(), ui = null, od = !1, dr = null;
  function os(a, s) {
    const d = di();
    ui = s || null, co = Math.max(d.start, Math.min(d.end - Ea, a)), as.delete("dialog"), ts.delete("scrub"), gn.classList.add("open"), gn.setAttribute("aria-hidden", "false"), Ro(), Hn == null || Hn.observe(gn.querySelector("canvas[data-wx-strip]")), ci.focus({ preventScroll: !0 }), _i();
  }
  function gl() {
    var a;
    gn.classList.remove("open"), gn.setAttribute("aria-hidden", "true"), Hn == null || Hn.unobserve(gn.querySelector("canvas[data-wx-strip]")), (a = ui == null ? void 0 : ui.focus) == null || a.call(ui, { preventScroll: !0 }), ui = null;
  }
  function Ro() {
    if (!gn.classList.contains("open")) return;
    const a = di();
    i("wxGraphDays").innerHTML = a.days.map((s) => "<span>" + nt(td(s.start)) + "</span>").join(""), vl(a), Ns(a), ns(gn);
  }
  function Ns(a = di()) {
    const s = hl(a, co), d = fa == null ? void 0 : fa[Aa.weather], m = (d == null ? void 0 : d.attributes) || {}, S = m.temperature_unit || "°", _ = Math.abs(co - Date.now()) < Ea / 2, O = _ && d ? d.state : s.cond, Y = _ && Number.isFinite(Number(m.temperature)) ? Math.round(Number(m.temperature)) : Number.isFinite(s.temp) ? Math.round(s.temp) : "—", we = Ps[O] || (O ? O.charAt(0).toUpperCase() + O.slice(1) : "—"), Me = _ ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(co / Ea) * Ea)), ge = s.day, me = (Number.isFinite(ge.hi) ? "H " + Math.round(ge.hi) + "°" : "") + (Number.isFinite(ge.lo) ? "&ensp; L " + Math.round(ge.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + da(O, !0, _, hn, "scrub", _ ? void 0 : s.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + nt(String(Y)) + '</span><span class="wxUnit">' + nt(S) + '</span></div><div class="wxPlace">' + nt(Me) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + nt(we) + "</div>" + (me ? '<div class="wxRange">' + me + "</div>" : "") + "</div>", Di(i("wxDialogNow")), ci.setAttribute("aria-valuenow", String(Math.round((co - a.start) / Ea))), ci.setAttribute("aria-valuetext", Me + ", " + we.toLowerCase() + ", " + Y + "°"), Hs(a), _i();
  }
  function vl(a = di()) {
    const s = i("wxGraphLine"), d = pi.clientWidth, m = pi.clientHeight;
    if (!d || !m) return;
    const S = [];
    for (let De = a.start; De <= a.end; De += Ea) {
      const bt = hl(a, De).temp;
      Number.isFinite(bt) && S.push([mn(a, De) * d, bt]);
    }
    if (s.setAttribute("viewBox", "0 0 " + d + " " + m), S.length < 2) {
      s.innerHTML = '<g id="wxCursorMark"></g>', dr = null, Hs(a);
      return;
    }
    const _ = S.map((De) => De[1]), O = Math.min(..._), Y = Math.max(..._), we = Math.max(4, Y - O), Me = hn !== "smooth", ge = (De) => Me ? Math.round(De / 2) * 2 : Math.round(De * 10) / 10;
    dr = (De) => m * 0.84 - (De - O) / we * m * 0.62;
    const me = li(), Ie = hn === "onebit" ? me.paper : "#ffffff", at = hn === "onebit" ? me.ink : "rgba(0,0,0,.28)", je = "M" + S.map((De) => ge(De[0]) + " " + ge(dr(De[1]))).join(" L"), He = (De, bt) => {
      const xt = S.find((Ge) => Ge[1] === De);
      return '<text class="wxLineLabel" x="' + ge(Math.min(d - 14, Math.max(14, xt[0]))) + '" y="' + ge(dr(De) + (bt ? 18 : -10)) + '" fill="' + Ie + '" stroke="' + at + '">' + Math.round(De) + "°</text>";
    };
    s.setAttribute("shape-rendering", Me ? "crispEdges" : "auto"), s.innerHTML = '<path d="' + je + '" fill="none" stroke="' + at + '" stroke-width="' + (Me ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + je + '" fill="none" stroke="' + Ie + '" stroke-width="2" stroke-linejoin="round"/>' + He(Y, !1) + He(O, !0) + '<g id="wxCursorMark"></g>', Hs(a);
  }
  function Hs(a = di()) {
    const s = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!s) return;
    const d = pi.clientWidth, m = pi.clientHeight, S = hn !== "smooth", _ = (Ie) => S ? Math.round(Ie / 2) * 2 : Ie, O = _(mn(a, co) * d), Y = hl(a, co).temp, we = li(), Me = hn === "onebit" ? we.paper : "#ffffff", ge = hn === "onebit" ? we.ink : "rgba(0,0,0,.28)", me = dr && Number.isFinite(Y) ? _(dr(Y)) : null;
    s.innerHTML = '<rect x="' + (O - 2) + '" y="0" width="4" height="' + m + '" fill="' + ge + '"/><rect x="' + (O - 1) + '" y="0" width="2" height="' + m + '" fill="' + Me + '"/>' + (me == null ? "" : S ? '<rect x="' + (O - 5) + '" y="' + (me - 5) + '" width="10" height="10" fill="' + Me + '" stroke="' + ge + '" stroke-width="2"/>' : '<circle cx="' + O + '" cy="' + me + '" r="6" fill="' + Me + '" stroke="' + ge + '" stroke-width="2"/>');
  }
  const Vd = (a) => {
    const s = pi.getBoundingClientRect();
    s.width && (co = ed(di(), (a - s.left) / s.width), Ns());
  };
  ci.addEventListener("pointerdown", (a) => {
    if (a.button === 0) {
      od = !0;
      try {
        ci.setPointerCapture(a.pointerId);
      } catch {
      }
      Vd(a.clientX);
    }
  }), ci.addEventListener("pointermove", (a) => {
    od && Vd(a.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((a) => ci.addEventListener(a, () => {
    od = !1;
  })), ci.addEventListener("keydown", (a) => {
    const s = di(), d = { ArrowLeft: -Ea, ArrowRight: Ea, ArrowDown: -Ea, ArrowUp: Ea, PageUp: -24 * Ea, PageDown: 24 * Ea }[a.key];
    d ? (a.preventDefault(), co = Math.max(s.start, Math.min(s.end - Ea, Math.round(co / Ea) * Ea + d)), Ns(s)) : (a.key === "Home" || a.key === "End") && (a.preventDefault(), co = a.key === "Home" ? s.start : s.end - Ea, Ns(s));
  }), i("wxDialogClose").addEventListener("click", gl), gn.addEventListener("click", (a) => {
    a.target === gn && gl();
  }), gn.addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), gl());
  }), Wd(), (Zd = (Yd = window.matchMedia) == null ? void 0 : (dd = Yd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || Zd.call(dd, "change", () => {
    _i(), Di(n);
  }), _i();
  const Ma = i("tvNav");
  l.fullscreenSupported || (Ma.hidden = !0), Ma.addEventListener("click", () => l.toggleFullscreen()), n.addEventListener("keydown", (a) => {
    !qe.workout.classList.contains("active") || Ts.classList.contains("active") || a.target.closest("input,select,textarea,.holdEnd") || (a.key === "MediaPlayPause" || a.key === " " && !a.target.closest("button") ? (a.preventDefault(), Qs.click()) : a.key === "MediaTrackNext" ? (a.preventDefault(), i("skipExercise").click()) : a.key === "MediaTrackPrevious" && (a.preventDefault(), i("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((a) => a.addEventListener("click", () => {
    const s = Math.max(1, Math.min(10, (Number(tt.value) || 1) + Number(a.dataset.roundsStep)));
    String(s) !== tt.value && (tt.value = s, tt.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [B, q, R, tt].forEach((a) => a.addEventListener("input", () => {
    const s = ht[Tt];
    s && (s.total = Number(B.value), s.work = Number(q.value), s.rest = Number(R.value)), Gt();
  })), re.addEventListener("click", _s), Ze.addEventListener("click", () => T("settings")), i("settingsBack").addEventListener("click", _s), Qs.addEventListener("click", () => La(!Pe)), Kt(Tt), ta(), ia(), qa(), i("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), rr(i("resetStats"), i("resetStatsFill"), 1500, () => {
    Ye.history = [], Ye.checkins = [], ot = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    An(), Ei(), ia(), ta(), qa(), Rt(), Nt("Stats reset");
  });
  const id = i("morningTime"), Ri = i("eveningTime"), rd = i("checkinAutoOpen");
  id.value = yo().morning, Ri.value = yo().evening, rd.classList.toggle("on", vt().checkinAutoOpen !== !1), [["morningTime", id], ["eveningTime", Ri]].forEach(([a, s]) => s.addEventListener("change", () => {
    s.value && (Pn(a, s.value), Rt());
  })), rd.addEventListener("click", () => {
    const a = vt().checkinAutoOpen === !1;
    rd.classList.toggle("on", a), Pn("checkinAutoOpen", a);
  }), setTimeout(Ne, 800);
  const jd = i("checkinNotify"), ze = i("checkinNotifyTarget"), Jn = i("checkinNotifyStatus"), sd = Jn.textContent;
  function is() {
    const a = l.notifyServices(), s = a.filter((S) => S.startsWith("mobile_app_")), d = s.length ? s : a, m = (S) => S.replace(/^mobile_app_/, "").replace(/_/g, " ");
    ze.innerHTML = d.map((S) => '<option value="' + nt(S) + '">' + nt(m(S)) + "</option>").join(""), !vt().notifyTarget && d[0] && (vt().notifyTarget = d[0]), ze.value = vt().notifyTarget || "";
  }
  function bl() {
    const a = !!vt().notifyOn;
    jd.classList.toggle("on", a), i("checkinNotifyTargetRow").hidden = !a;
    const s = yo();
    Jn.textContent = a ? "Sends at " + s.morning + " and " + s.evening : sd;
  }
  async function Na() {
    const a = !!vt().notifyOn;
    try {
      return await l.setReminderAutomation(a ? { target: vt().notifyTarget, times: yo() } : null), !0;
    } catch {
      return Nt("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  jd.addEventListener("click", async () => {
    const a = !vt().notifyOn;
    if (a && (is(), !vt().notifyTarget)) {
      Nt("Install the Companion app on your phone first");
      return;
    }
    vt().notifyOn = a, bl(), await Na() ? (An(), Nt(a ? "Check-in notifications on" : "Check-in notifications off")) : (vt().notifyOn = !a, bl());
  }), ze.addEventListener("change", () => {
    Pn("notifyTarget", ze.value), vt().notifyOn && Na();
  }), [id, Ri].forEach((a) => a.addEventListener("change", () => {
    bl(), vt().notifyOn && Na();
  })), is(), bl();
  let wl = null;
  function ld() {
    wl || (wl = setTimeout(() => {
      wl = null, qa();
    }, 3e4));
  }
  return {
    updateStates(a) {
      var d, m;
      const s = !fa || fa[Aa.weather] !== a[Aa.weather] || ((d = fa["sun.sun"]) == null ? void 0 : d.state) !== ((m = a["sun.sun"]) == null ? void 0 : m.state);
      fa = a, dl(a), Nd(a), s && Wd(), Date.now() - pl > 60 * 60 * 1e3 && Hd(), ld();
    },
    applyRemoteData(a) {
      if (a && (Array.isArray(a.history) && (Ye.history = a.history, Ei()), Array.isArray(a.history) && qa(), Array.isArray(a.checkins) && (Ye.checkins = a.checkins.map(hs), Rt(), ta(), ia(), Ei(), qa()), a.profiles && !pn.classList.contains("open") && !Ka)) {
        const s = mt(a);
        Object.keys(ht).forEach((d) => delete ht[d]), Object.assign(ht, s.profiles), Ye.order = s.order, ht[Tt] || (Tt = Ye.order[0]), wa(), Kt(Tt);
      }
    },
    suspend() {
      x = !1;
    },
    resume() {
      x || (x = !0, Si || (Si = requestAnimationFrame(Xs)), Pr || (Pr = requestAnimationFrame(Js)), _i(), lr(n.querySelector(".tab.active"), !1));
    }
  };
}
const ah = /* @__PURE__ */ new Set(["roaming", "test_area"]), nh = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, qs = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ua = "made_up_", Hi = (n) => {
  var l;
  return (l = String(n).split(".")[1]) == null ? void 0 : l.startsWith(Ua);
}, ec = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Ap(n) {
  const l = n.getHours() + n.getMinutes() / 60, i = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function oh(n) {
  const l = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let i = 0;
  for (let u = +l; u < +n; u += 10 * 60 * 1e3) i += Ap(new Date(u)) / 6;
  return i;
}
function Ip(n = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let i = 0; i <= 96; i++) {
    const u = +n - (96 - i) * 15 * 60 * 1e3;
    l.push([u, Ap(new Date(u))]);
  }
  return l;
}
function ih({ onChange: n }) {
  const l = {}, i = {}, u = (Q, G, he, ce) => {
    l[Q] = { entity_id: Q, state: he, attributes: ce, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[Q] = G;
  }, v = (Q, G, he) => {
    const ce = l[Q], ke = G ?? ce.state;
    l[Q] = { ...ce, state: ke, attributes: { ...ce.attributes, ...he }, last_changed: ke === ce.state ? ce.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, x = (Q, G, he, ce) => u("binary_sensor." + Ua + (Q ? Q + "_" : "") + ec(G), Q, ce ? "on" : "off", { friendly_name: G, device_class: he });
  Object.entries(nh).forEach(([Q, G]) => {
    if (G.temperature != null && u("sensor." + Ua + Q + "_temperature", Q, String(G.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), G.humidity != null && u("sensor." + Ua + Q + "_humidity", Q, String(G.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), G.vacuum && u("vacuum." + Ua + "robot", Q, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), G.climate && u("climate." + Ua + Q, Q, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: G.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), G.cover) {
      const [he, ce, ke, ie] = G.cover;
      u("cover." + Ua + Q + "_" + ec(he), Q, ke ? "open" : "closed", { friendly_name: he, device_class: ce, current_position: ke, ...ie != null ? { current_tilt_position: ie } : {} });
    }
    if (G.humidifier && u("humidifier." + Ua + Q, Q, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: G.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), G.solar && (u("sensor." + Ua + Q + "_solar_power", Q, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), u("sensor." + Ua + Q + "_solar_today", Q, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), G.valve && u("valve." + Ua + Q + "_" + ec(G.valve), Q, "closed", { friendly_name: G.valve, device_class: "water" }), G.door && x(Q, G.door, "door", G.doorOpen), G.window && x(Q, G.window, "window", !1), G.motion && x(Q, G.motion, "motion", !1), G.plant) {
      const [he, ce, ke, ie, oe] = G.plant, ae = Ua + ec(he), E = (le, qe, re, Ze, T) => u("sensor." + ae + "_" + le, Q, String(re), { friendly_name: qe, device_class: T, state_class: "measurement", unit_of_measurement: Ze, plant_low: re < qs[le][0], plant_high: re > qs[le][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[le] });
      E("moisture", "Moisture", ce, "%", "moisture"), E("light", "Light", ke, "lx", "illuminance"), E("temperature", "Temperature", ie, "°C", "temperature"), E("fertility", "Fertility", oe, "µS/cm", "conductivity");
      const Ce = Object.entries({ moisture: ce, light: ke, temperature: ie, fertility: oe }).filter(([le, qe]) => qe < qs[le][0] || qe > qs[le][1]).map(([le, qe]) => le + (qe < qs[le][0] ? " low" : " high"));
      u("plant." + ae, Q, Ce.length ? "problem" : "ok", { friendly_name: he, moisture: ce, brightness: ke, temperature: ie, conductivity: oe, problem: Ce.join(", ") || "none" });
    }
  }), u("alarm_control_panel." + Ua + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), x(null, "Front door", "door", !1), x(null, "Smoke alarm", "smoke", !1), u("sensor." + Ua + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const k = {}, A = {};
  let I = null;
  function M() {
    const Q = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((G) => {
      G.endsWith("_solar_power") && (l[G] = { ...l[G], state: Ap(Q).toFixed(2) }), G.endsWith("_solar_today") && (l[G] = { ...l[G], state: oh(Q).toFixed(1) });
    });
  }
  M();
  let W = 0;
  function F() {
    let Q = !1;
    const G = ++W % 10 === 0, he = (ie, oe, ae) => {
      v(ie, oe, ae), Q = !0;
    };
    Object.entries(k).forEach(([ie, oe]) => {
      const ae = l[ie].attributes.current_position, E = ae < oe ? Math.min(oe, ae + 10) : Math.max(oe, ae - 10);
      E === oe && delete k[ie], he(ie, E === oe ? E === 0 ? "closed" : "open" : oe > ae ? "opening" : "closing", { current_position: E });
    }), Object.entries(A).forEach(([ie, oe]) => {
      const ae = l[ie].attributes.current_tilt_position, E = ae < oe ? Math.min(oe, ae + 25) : Math.max(oe, ae - 25);
      E === oe && delete A[ie], he(ie, null, { current_tilt_position: E });
    }), Object.keys(l).filter((ie) => ie.startsWith("climate.")).forEach((ie) => {
      const oe = l[ie], ae = oe.attributes, E = ae.current_temperature, Ce = (oe.state === "heat" || oe.state === "auto") && E < ae.temperature - 0.05, le = (oe.state === "cool" || oe.state === "auto") && E > ae.temperature + 0.05, qe = oe.state === "off" ? "off" : Ce ? "heating" : le ? "cooling" : "idle", re = G ? Math.round((E + (Ce ? 0.1 : le ? -0.1 : 0)) * 10) / 10 : E;
      (re !== E || qe !== ae.hvac_action) && he(ie, null, { current_temperature: re, hvac_action: qe });
    }), Object.keys(l).filter((ie) => ie.startsWith("humidifier.")).forEach((ie) => {
      const oe = l[ie], ae = oe.attributes, E = ae.current_humidity, Ce = oe.state === "on" && E < ae.humidity, le = Ce && G ? E + 1 : E, qe = oe.state !== "on" ? "off" : Ce ? "humidifying" : "idle";
      if (le !== E || qe !== ae.action) {
        he(ie, null, { current_humidity: le, action: qe });
        const re = "sensor." + Ua + i[ie] + "_humidity";
        l[re] && he(re, String(le));
      }
    });
    const ce = l["vacuum." + Ua + "robot"], ke = ce.attributes;
    ce.state === "cleaning" && G && he(ce.entity_id, null, { battery_level: Math.max(5, ke.battery_level - 1) }), ce.state === "returning" && he(ce.entity_id, "docked", {}), ce.state === "docked" && ke.battery_level < 100 && he(ce.entity_id, null, { battery_level: Math.min(100, ke.battery_level + 2) }), I && Date.now() - I.at > 5e3 && (he("alarm_control_panel." + Ua + "house", "armed_" + I.mode, {}), I = null), Q && n();
  }
  const V = setInterval(F, 1e3), z = setInterval(() => {
    M(), n();
  }, 60 * 1e3);
  function pe(Q, G, he) {
    const ce = he == null ? void 0 : he.entity_id;
    if (!l[ce]) return !1;
    const ke = l[ce], ie = ke.attributes, oe = (ae, E) => v(ce, ae, E);
    if (Q === "climate" && (G === "set_temperature" && oe(null, { temperature: Math.max(ie.min_temp, Math.min(ie.max_temp, he.temperature)) }), G === "set_hvac_mode" && oe(he.hvac_mode, he.hvac_mode === "off" ? { hvac_action: "off" } : {}), G === "toggle" && oe(ke.state === "off" ? "heat" : "off", ke.state === "off" ? {} : { hvac_action: "off" })), Q === "cover") {
      const ae = G === "open_cover" ? 100 : G === "close_cover" ? 0 : G === "set_cover_position" ? he.position : G === "toggle" ? ie.current_position > 0 ? 0 : 100 : null;
      G === "stop_cover" && (delete k[ce], delete A[ce], oe(ie.current_position === 0 ? "closed" : "open")), ae != null && ae !== ie.current_position && (k[ce] = ae, oe(ae > ie.current_position ? "opening" : "closing"));
      const E = G === "open_cover_tilt" ? 100 : G === "close_cover_tilt" ? 0 : G === "set_cover_tilt_position" ? he.tilt_position : null;
      G === "stop_cover_tilt" && delete A[ce], E != null && ie.current_tilt_position != null && E !== ie.current_tilt_position && (A[ce] = E);
    }
    if (Q === "humidifier" && (G === "set_humidity" && oe(null, { humidity: Math.max(ie.min_humidity, Math.min(ie.max_humidity, he.humidity)) }), G === "set_mode" && oe(null, { mode: he.mode }), G === "turn_on" || G === "turn_off" || G === "toggle")) {
      const ae = G === "turn_on" || G === "toggle" && ke.state !== "on";
      oe(ae ? "on" : "off", { action: ae ? "idle" : "off" });
    }
    if (Q === "vacuum" && (G === "start" && oe("cleaning", { rooms: he.rooms || ie.rooms }), G === "pause" && oe("paused"), G === "return_to_base" && oe("returning", { rooms: [] }), G === "locate" && oe(null, { located: Date.now() }), G === "set_rooms" && oe(null, { rooms: he.rooms })), Q === "valve") {
      const ae = G === "open_valve" || G === "toggle" && ke.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(G) && oe(ae ? "open" : "closed");
    }
    if (Q === "alarm_control_panel") {
      G === "alarm_disarm" && (I = null, oe("disarmed", { changed_by: "Matt" }));
      const ae = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[G];
      ae && (I = { mode: ae, at: Date.now() }, oe("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function te(Q, { madeUp: G = !0 } = {}) {
    const he = G ? l : {}, ce = (Q == null ? void 0 : Q.states) || {}, ke = (Q == null ? void 0 : Q.entities) || {}, ie = (Q == null ? void 0 : Q.devices) || {}, oe = (de) => {
      var ve;
      const ue = ke[de];
      return ue && (ue.area_id || ue.device_id && ((ve = ie[ue.device_id]) == null ? void 0 : ve.area_id)) || null;
    }, ae = (de) => {
      const ue = ke[de];
      return ce[de] && ce[de].state !== "unavailable" && !(ue != null && ue.hidden) && !(ue != null && ue.entity_category);
    }, E = {};
    Object.keys(ce).forEach((de) => {
      const ue = oe(de);
      ue && ae(de) && (E[ue] || (E[ue] = [])).push(de);
    });
    const Ce = { ...ce, ...he }, le = (de) => {
      var ue, ve;
      return (ve = (ue = Ce[de]) == null ? void 0 : ue.attributes) == null ? void 0 : ve.device_class;
    }, qe = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], re = Object.keys(ce).filter((de) => de.startsWith("vacuum.") && ae(de)), Ze = Object.values((Q == null ? void 0 : Q.areas) || {}).filter((de) => !ah.has(de.area_id)).map((de) => {
      const ue = de.area_id, ve = E[ue] || [], Se = (Xe) => ve.filter((pt) => pt.startsWith(Xe + ".")), Te = (Xe) => Se("sensor").filter((pt) => le(pt) === Xe), $e = (Xe) => Object.keys(he).filter((pt) => i[pt] === ue && Xe(pt)), tt = (Xe, pt) => Xe.length ? Xe : $e(pt), Ya = tt(Te("temperature"), (Xe) => Xe.endsWith(ue + "_temperature")), Fe = tt(Te("humidity"), (Xe) => Xe.endsWith(ue + "_humidity")), fo = Te("power").filter((Xe) => /^(W|kW)$/.test(Ce[Xe].attributes.unit_of_measurement || "")), Gn = Se("binary_sensor").filter((Xe) => le(Xe) === "moisture"), ho = tt(Se("plant"), (Xe) => Xe.startsWith("plant.")).map((Xe) => ({ id: Xe, readings: $e((pt) => pt.startsWith("sensor." + Xe.split(".")[1] + "_")) })), oa = [...Se("binary_sensor").filter((Xe) => qe.includes(le(Xe))), ...$e((Xe) => Xe.startsWith("binary_sensor."))];
      return {
        id: ue,
        name: de.name,
        icon: de.icon,
        floor: de.floor_id || null,
        readings: [...Ya.slice(0, 1), ...Fe.slice(0, 1), ...Gn],
        power: fo.length ? fo.reduce((Xe, pt) => Xe + Number(Ce[pt].state) * (Ce[pt].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: Se("switch"),
        lights: Se("light"),
        actions: [...Se("light"), ...tt(Se("climate"), (Xe) => Xe.startsWith("climate.")), ...tt(Se("cover"), (Xe) => Xe.startsWith("cover.")), ...tt(Se("humidifier"), (Xe) => Xe.startsWith("humidifier.")), ...tt(Se("valve"), (Xe) => Xe.startsWith("valve.")), ...Se("media_player"), ...Se("vacuum"), ...re.length ? [] : $e((Xe) => Xe.startsWith("vacuum."))],
        solar: $e((Xe) => Xe.includes("_solar_")),
        plants: ho,
        openings: oa,
        alerts: [...Gn, ...oa].filter((Xe) => {
          var pt;
          return ((pt = Ce[Xe]) == null ? void 0 : pt.state) === "on";
        })
      };
    }).filter((de) => de.readings.length || de.plugs.length || de.actions.length || de.solar.length || de.plants.length), T = Object.keys(ce).find((de) => /^sensor\..*(p1_meter_power|grid_power)$/.test(de) && ce[de].state !== "unavailable") || null, B = (de) => Object.keys(ce).filter((ue) => ue.startsWith(de + ".") && ae(ue)), q = B("alarm_control_panel"), R = re.length ? re : G ? ["vacuum." + Ua + "robot"] : [];
    return {
      states: Ce,
      rooms: Ze,
      grid: T,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (de) => he[de] ? i[de] : oe(de),
      vacuums: R,
      homeVacuums: R.filter((de) => !Ze.some((ue) => ue.actions.includes(de))),
      security: {
        alarms: q.length ? q : G ? ["alarm_control_panel." + Ua + "house"] : [],
        locks: B("lock"),
        openings: [...Object.keys(he).filter((de) => de.startsWith("binary_sensor.")), ...G ? ["sensor." + Ua + "doorbell"] : []]
      }
    };
  }
  return { model: te, call: pe, stop() {
    clearInterval(V), clearInterval(z);
  } };
}
const gr = (n) => n < 0 ? 0 : n > 1 ? 1 : n, yp = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((u) => u + u).join("") : l;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, rh = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Fp = {}, No = (n, l, i) => {
  const u = n + l + i;
  return Fp[u] || (Fp[u] = rh(yp(n).map((v, x) => v + (yp(l)[x] - v) * i)));
}, Op = {}, hc = (n) => Op[n] || (Op[n] = yp(n));
function sh(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [No(l.clear[0], l.cloudy[0], 0.12), No(l.clear[1], l.cloudy[1], 0.12)], l.storm = [No(l.rain[0], "#000000", 0.22), No(l.rain[1], "#000000", 0.22)], l;
}
const lh = [
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
], hr = (n, l) => (lh[(l & 7) * 8 + (n & 7)] + 0.5) / 64, zu = 1, Gu = 2, Uu = 3, Yu = 4, Tl = 5, wc = 6, kp = 7, Zu = 8, qp = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), dh = (n, l, i) => {
  let u = !1;
  for (let v = 0, x = n.length - 1; v < n.length; x = v++) {
    const k = n[v], A = n[x];
    k[1] > i != A[1] > i && l < (A[0] - k[0]) * (i - k[1]) / (A[1] - k[1]) + k[0] && (u = !u);
  }
  return u;
};
function ch(n, l, i, u, { oneBit: v, ink: x, paper: k, snowInk: A }) {
  const I = new Uint8ClampedArray(i * u * 4), M = hc(x), W = hc(k);
  for (let F = 0; F < u; F++) for (let V = 0; V < i; V++) {
    const z = F * i + V, pe = l[z];
    if (n[z] == null) continue;
    let te = hc(n[z]);
    if (v) {
      let Q;
      pe === Yu || pe === Zu ? Q = !0 : pe === Tl ? Q = A : pe === kp || pe === wc ? Q = !1 : Q = Math.round((0.2126 * te[0] + 0.7152 * te[1] + 0.0722 * te[2]) / 255 * 4) / 4 <= hr(V, F), (pe === zu || pe === Gu || pe === Uu || pe === wc) && (V > 0 && l[z - 1] !== pe || V < i - 1 && l[z + 1] !== pe || F > 0 && l[z - i] !== pe || F < u - 1 && l[z + i] !== pe) && (Q = !0), te = Q ? M : W;
    }
    I[z * 4] = te[0], I[z * 4 + 1] = te[1], I[z * 4 + 2] = te[2], I[z * 4 + 3] = 255;
  }
  return { w: i, h: u, data: I };
}
const ph = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, uh = (n) => Mc(n, !1).split("/")[0], Jc = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, fh = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", hh = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", mh = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", gh = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", vh = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], bh = [".##", "##.", ".#.", "#.."];
function Ku(n, { width: l, height: i, colors: u, wave: v = 0.38, soft: x = 6, glow: k = 0.6, columns: A = 6 }) {
  const I = { ...zn, dawn: "#e5a77e", ...u }, M = sh(I), W = l, F = i, V = W / A, z = V / 2, pe = Math.PI * 2, te = n.length ? n : [{ cond: "cloudy", night: !1 }], Q = [...Array(A * 2)].map((ke, ie) => {
    const oe = te[Math.min(ie, te.length - 1)], ae = uh(oe.cond), E = ie % 2 === 1;
    return { cond: oe.cond, k: ae, night: E, sky: M[ae][E ? 1 : 0], cover: ph[ae] };
  }), G = (ke) => F * (0.5 - v * Math.cos(pe * (ke / V - 0.25)));
  return { C: I, S: Q, W, H: F, cw: V, sw: z, TAU: pe, yb: G, side: (ke, ie, oe) => {
    const ae = (ke ? G(ie) - oe : oe - G(ie)) / Math.max(3, x * 1.4) + 0.5;
    return ae <= 0 ? 0 : ae >= 1 ? 1 : ae;
  }, glowAt: (ke) => {
    const ie = ((ke / V - 0.25) % 1 + 1) % 1, oe = Math.max(0, Math.min(A - 1, Math.round(ke / V - 0.25))), ae = Math.max(0, Math.min(A - 1, Math.round(ke / V - 0.75))), E = 1 - (Q[2 * oe].cover + Q[2 * ae + 1].cover) / 2, Ce = Math.sin(Math.PI * Math.min(1, Math.max(0, G(ke) / F)));
    return { c: ie < 0.5 ? I.dusk : I.dawn, a: k * (0.2 + 0.8 * E) * Ce * Ce };
  }, soft: x, tw: V * 0.3, sy: F / 90 };
}
function $u(n, { clock: l = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: v, sw: x, side: k, C: A, TAU: I, sy: M, H: W } = n, F = l, V = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  v.forEach((te, Q) => {
    const G = Jc(u * 977 + Q * 131 + 7), he = (Q + 0.5) * x, ce = te.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[te.k] : 0;
    for (let ke = 0; ke < ce; ke++) {
      const ie = he + (G() - 0.5) * x * 1.6, oe = (6 + G() * 76) * M, ae = G() < 0.35, E = 1.8 + G() * 1.6, Ce = k(!0, ie, oe) * (ae ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(I * F / 2600 + ke * 1.7 + Q) : 1);
      Ce >= 0.03 && V.stars.push({ x: ie, y: oe, big: ae, size: E, o: Ce });
    }
    if (!te.night && (te.k === "clear" || te.k === "partly")) {
      const ke = he + (G() - 0.5) * x * 0.3, ie = Math.min(15, x * 0.29);
      V.suns.push({ x: ke, y: 32 * M, rad: ie, halo: ie * 2.8 * (i ? 1 + 0.07 * Math.sin(I * F / 3600 + Q) : 1) });
    }
    if (te.night && (te.k === "clear" || te.k === "partly")) {
      const ke = Math.min(0.78, x * 0.55 / 34), ie = he - 23 * ke + (G() - 0.5) * x * 0.2;
      V.moons.push({ x: ie + 23 * ke, y: (4 + (i ? 0.8 * Math.sin(I * F / 5200 + Q) : 0)) * M + 23 * ke, d: 46 * ke });
    }
  });
  const z = Math.max(56, Math.min(100, W * 0.45)), pe = Math.max(1, x / (z * 2.4));
  return v.forEach((te, Q) => {
    const G = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[te.k];
    if (!G) return;
    const he = te.k === "partly" ? 1 : Math.round(G * pe), ce = Jc(u * 577 + Q * 71 + 3), ke = (Q + 0.5) * x, ie = te.k === "rain" || te.k === "storm" || te.night ? A.cloudNight : A.cloudDay, oe = te.night ? 0.82 : te.k === "storm" ? 0.75 : 1;
    for (let ae = 0; ae < he; ae++) {
      const E = z / 46 * (te.k === "partly" ? 1 : 0.8 + ce() * 0.4), Ce = ke + (te.k === "partly" ? x * 0.12 : ((ae + 0.5) / he - 0.5) * x * 0.95 + (ce() - 0.5) * x * 0.5 / he), le = (te.k === "partly" ? 40 : 6 + ce() * 26) * M, qe = i ? 2.5 * Math.sin(I * F / 9e3 + Q * 1.3 + ae * 2.1) : 0, re = i ? 0.9 * Math.sin(I * F / 6100 + Q + ae) : 0;
      V.clouds.push({ x: Ce - 23 * E + qe, y: le - 15.33 * E + re, w: 46 * E, h: 30.66 * E, fill: ie, o: oe * (he > 1 && ae === 0 ? 0.85 : 1) });
    }
  }), v.forEach((te, Q) => {
    const G = Jc(u * 313 + Q * 29 + 11), he = (Q + 0.5) * x, ce = te.cond === "pouring" ? 16 : te.cond === "rainy" || te.cond === "hail" ? 9 : te.cond === "lightning-rainy" ? 12 : te.cond === "snowy-rainy" ? 5 : 0;
    for (let ie = 0; ie < ce; ie++) {
      let oe = he + (G() - 0.5) * x * 1.05, ae = 44 + G() * 36, E = 1;
      if (i) {
        const le = ((ae - 44 + F * 0.04) % 36 + 36) % 36;
        oe -= 0.21 * (le - (ae - 44)), ae = 44 + le, E = Math.min(1, le / 6, (36 - le) / 6);
      }
      ae *= M;
      const Ce = k(te.night, oe, ae) * E;
      Ce >= 0.05 && V.drops.push({ x: oe, y: ae, o: Ce });
    }
    const ke = te.cond === "snowy" ? 11 : te.cond === "snowy-rainy" ? 6 : 0;
    for (let ie = 0; ie < ke; ie++) {
      let oe = he + (G() - 0.5) * x * 1.05, ae = 40 + G() * 44, E = 1;
      if (i) {
        const le = ((ae - 40 + F * 9e-3) % 44 + 44) % 44;
        ae = 40 + le, oe += 1.6 * Math.sin(I * F / 2800 + ie * 1.9 + Q), E = Math.min(1, le / 6, (44 - le) / 6);
      }
      ae *= M;
      const Ce = k(te.night, oe, ae) * E;
      Ce >= 0.05 && V.flakes.push({ x: oe, y: ae, o: Ce });
    }
    if (te.k === "fog") {
      const ie = te.night ? "#c8ccd6" : "#ffffff", oe = te.night ? 0.28 : 0.62, ae = i ? 4 * Math.sin(I * F / 8e3 + Q) : 0;
      for (let E = 0; E < 4; E++) V.fogs.push({ x: he - x * 0.75 + E % 2 * x * 0.18 + (E % 2 ? ae : -ae), y: (30 + E * 13) * M, w: x * 1.3, c: ie, a: oe });
    }
    if (te.k === "storm") {
      const ie = (F / 3400 + Q * 0.37) % 1;
      V.bolts.push({ x: he + (G() - 0.5) * x * 0.3 - 5, y: 36 * M, o: i && !(ie < 0.05 || ie > 0.09 && ie < 0.12) ? 0.8 : 1 });
    }
  }), V;
}
function wh(n, l, i, u, v, x, k, A) {
  const { S: I, C: M, cw: W, yb: F, glowAt: V, soft: z, tw: pe, sy: te } = n, Q = new Array(i * u), G = new Uint8Array(i * u), he = new Uint8Array(i * u), ce = (T, B, q, R, de) => {
    q == null || T < 0 || B < 0 || T >= i || B >= u || (R >= 1 || R > hr(T + 5, B + 3)) && (Q[B * i + T] = q, G[B * i + T] = de);
  }, ke = (T, B, q, R) => {
    for (let de = Math.max(0, Math.floor(B - q) - 1); de <= Math.min(u - 1, B + q + 1); de++) for (let ue = Math.max(0, Math.floor(T - q) - 1); ue <= Math.min(i - 1, T + q + 1); ue++) R(ue, de, ue + 0.5 - T, de + 0.5 - B);
  }, ie = (T, B, q) => {
    for (let de = 0; de < T.length - 1; de++) {
      const ue = (de + B) * W;
      if (q < ue - pe / 2) return [T[de], T[de], 0];
      if (q <= ue + pe / 2) return [T[de], T[de + 1], (q - ue + pe / 2) / pe];
    }
    const R = T[T.length - 1];
    return [R, R, 0];
  }, oe = I.filter((T) => !T.night).map((T) => T.sky), ae = I.filter((T) => T.night).map((T) => T.sky), E = z / x, Ce = 16 * te / x;
  for (let T = 0; T < i; T++) {
    const B = (T + 0.5) * v, q = F(B) / x, R = ie(oe, 0.75, B), de = ie(ae, 1.25, B), ue = V(B);
    for (let ve = 0; ve < u; ve++) {
      const Se = hr(T, ve), Te = ve + 0.5 - q, $e = (E > 0.01 ? gr(0.5 + Te / E) : Te > 0 ? 1 : 0) > Se;
      let tt = $e ? R[2] > Se ? R[1] : R[0] : de[2] > Se ? de[1] : de[0];
      ($e ? gr(((ve + 0.5) / u - 0.45) / 0.55) * 0.7 : gr(1 - (ve + 0.5) / (u * 0.55)) * 0.7) > hr(T + 2, ve + 5) && (tt = $e ? No(tt, "#ffffff", 0.18) : No(tt, "#000000", 0.25)), $e && Te >= 0 && Te < Ce && ue.a * 1.3 * (1 - Te / Ce) > hr(T + 6, ve + 1) && (tt = ue.c), Q[ve * i + T] = tt, he[ve * i + T] = $e ? 0 : 1;
    }
  }
  const le = No(M.sun, "#ffffff", 0.55), qe = No(M.moon, "#ffffff", 0.6);
  l.stars.forEach((T) => {
    const B = Math.floor(T.x / v), q = Math.floor(T.y / x);
    if (B < 0 || q < 0 || B >= i || q >= u || !he[q * i + B] || T.o < 0.15) return;
    const R = T.o > 0.45 ? M.star : No(M.star, Q[q * i + B], 0.5), de = T.big && T.o > 0.6 ? Math.floor(T.size / v) : 0;
    ce(B, q, R, 1, kp);
    for (let ue = 1; ue <= de; ue++) [[B - ue, q], [B + ue, q], [B, q - ue], [B, q + ue]].forEach((ve) => {
      ve[0] >= 0 && ve[1] >= 0 && ve[0] < i && ve[1] < u && he[ve[1] * i + ve[0]] && ce(ve[0], ve[1], R, 1, kp);
    });
  }), l.suns.forEach((T) => {
    const B = Math.max(1.5, T.rad / v), q = T.x / v, R = T.y / x, de = T.halo / v * 0.85;
    if (ke(q, R, de, (ue, ve, Se, Te) => {
      const $e = Math.sqrt(Se * Se + Te * Te);
      $e > B && $e < de && !he[ve * i + ue] && ce(ue, ve, le, 0.3 * (1 - ($e - B) / (de - B)), 0);
    }), A) {
      const ue = Math.floor(k / 500) % 2, ve = Math.max(1, B * 0.3);
      for (let Se = 0; Se < 8; Se++) if (Se % 2 === ue) for (let Te = B + 1.2; Te < B + 1.2 + ve; Te += 0.7) ce(Math.floor(q + Math.cos(Se * Math.PI / 4) * Te), Math.floor(R + Math.sin(Se * Math.PI / 4) * Te), M.sun, 1, Zu);
    }
    ke(q, R, B, (ue, ve, Se, Te) => {
      Se * Se + Te * Te <= B * B && ce(ue, ve, gr(((Te / B + 1) / 2 - 0.6) / 0.4) > hr(ue, ve) ? M.sunEdge : M.sun, 1, zu);
    });
  }), l.moons.forEach((T) => {
    const B = Math.max(1.5, T.d * 0.37 / v), q = T.x / v, R = T.y / x, de = q + 0.547 * B, ue = R - 0.503 * B, ve = 0.82 * B;
    ke(q, R, B, (Se, Te, $e, tt) => {
      if ($e * $e + tt * tt > B * B) return;
      const Ya = Se + 0.5 - de, Fe = Te + 0.5 - ue;
      Ya * Ya + Fe * Fe > ve * ve && ce(Se, Te, gr((tt + B) / (2 * B) * 1.1 - 0.1) > hr(Se, Te) ? M.moon : qe, 1, Gu);
    });
  }), l.clouds.forEach((T) => {
    const B = Math.max(3, T.w / v), q = B * 0.6665, R = T.x / v, de = T.y / x, ue = No(T.fill, "#000000", 0.16);
    for (let ve = Math.max(0, Math.floor(de) - 1); ve <= Math.min(u - 1, de + q + 1); ve++) for (let Se = Math.max(0, Math.floor(R) - 1); Se <= Math.min(i - 1, R + B + 1); Se++) {
      const Te = (Se + 0.5 - R) / B, $e = (ve + 0.5 - de) / B;
      qp(Te, $e) && ce(Se, ve, !qp(Te, $e + 1 / B) || gr(($e - 0.42) / 0.25) * 0.8 > hr(Se, ve) ? ue : T.fill, T.o, Uu);
    }
  }), l.fogs.forEach((T) => {
    const B = Math.floor(T.y / x), q = Math.max(B, Math.floor((T.y + 6 * te) / x) - 1), R = Math.floor(T.x / v), de = Math.floor((T.x + T.w) / v);
    for (let ue = B; ue <= q; ue++) for (let ve = R; ve <= de; ve++) {
      const Se = (ve - R) / Math.max(1, de - R);
      ce(ve, ue, T.c, T.a * (Se < 0.25 ? Se / 0.25 : Se > 0.75 ? (1 - Se) / 0.25 : 1), 0);
    }
  });
  const re = Math.max(2, Math.round(9 / x));
  l.drops.forEach((T) => {
    const B = T.x / v, q = Math.floor(T.y / x);
    for (let R = 0; R < re; R++) ce(Math.floor(B - 0.208 * R * x / v), q + R, M.rain, T.o, Yu);
  });
  const Ze = Math.max(0, Math.round(4.4 / v / 2.6));
  return l.flakes.forEach((T) => {
    const B = Math.floor(T.x / v), q = Math.floor(T.y / x);
    ce(B, q, M.snow, T.o, Tl);
    for (let R = 1; R <= Ze; R++)
      ce(B - R, q, M.snow, T.o, Tl), ce(B + R, q, M.snow, T.o, Tl), ce(B, q - R, M.snow, T.o, Tl), ce(B, q + R, M.snow, T.o, Tl);
  }), l.bolts.forEach((T) => {
    if (v <= 3.5)
      for (let B = Math.floor(T.y / x); B <= (T.y + 24) / x; B++) for (let q = Math.floor(T.x / v); q <= (T.x + 11) / v; q++)
        dh(vh, (q + 0.5) * v - T.x, (B + 0.5) * x - T.y) && ce(q, B, M.sun, 1, wc);
    else {
      const B = Math.round(T.x / v), q = Math.round(T.y / x);
      bh.forEach((R, de) => R.split("").forEach((ue, ve) => {
        ue === "#" && ce(B + ve, q + de, M.sun, 1, wc);
      }));
    }
  }), { col: Q, ids: G };
}
function xh(n, l) {
  const i = l.px, u = Math.max(6, Math.round(l.width / i)), v = Math.max(6, Math.round(l.height / i)), x = l.width / u, k = l.height / v, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, I = (z) => {
    const pe = Ku(z, l);
    return wh(pe, $u(pe, { clock: A, ambient: l.ambient, seed: l.seed }), u, v, x, k, A, l.ambient);
  }, M = I(n), W = l.reveal == null ? 1 : gr(l.reveal);
  let F = M.col, V = M.ids;
  if (W < 1) {
    const z = l.prev ? I(l.prev) : null, pe = W * (u + 12);
    F = new Array(u * v), V = new Uint8Array(u * v);
    for (let te = 0; te < u * v; te++) {
      const Q = te % u, G = te / u | 0;
      (l.reduce ? W : gr((pe - Q) / 12)) > hr(Q, G) ? (F[te] = M.col[te], V[te] = M.ids[te]) : z ? (F[te] = z.col[te], V[te] = z.ids[te]) : (F[te] = null, V[te] = 255);
    }
  }
  return ch(F, V, u, v, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function yh(n, l, i) {
  const u = i.width, v = i.height, x = i.reveal == null ? 1 : gr(i.reveal), k = (V, z) => {
    const pe = Ku(z, i);
    kh(V, pe, $u(pe, i));
  };
  if (n.clearRect(0, 0, u, v), x >= 1) {
    k(n, l);
    return;
  }
  if (i.prev && k(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = x, k(n, l), n.restore();
    return;
  }
  const A = n.canvas, I = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (I.width !== A.width || I.height !== A.height) && (I.width = A.width, I.height = A.height);
  const M = I.getContext("2d");
  M.setTransform(n.getTransform()), M.clearRect(0, 0, u, v), k(M, l);
  const W = x * (u + 64) - 64, F = M.createLinearGradient(W, 0, W + 64, 0);
  F.addColorStop(0, "rgba(0,0,0,1)"), F.addColorStop(1, "rgba(0,0,0,0)"), M.globalCompositeOperation = "destination-in", M.fillStyle = F, M.fillRect(0, 0, u, v), M.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(I, 0, 0), n.restore();
}
function kh(n, l, i) {
  const { W: u, H: v, S: x, C: k, cw: A, yb: I, glowAt: M, soft: W, tw: F, sy: V } = l, z = n.getTransform().a || 1, pe = (re) => {
    n.shadowColor = re ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = re ? 4 * z : 0, n.shadowOffsetY = re ? 1.5 * z : 0;
  }, te = (re, Ze) => {
    const T = hc(re);
    return "rgba(" + T[0] + "," + T[1] + "," + T[2] + "," + Math.max(0, Math.min(1, Ze)).toFixed(3) + ")";
  }, Q = (re, Ze) => {
    const T = n.createLinearGradient(0, 0, u, 0);
    T.addColorStop(0, re[0]);
    for (let B = 0; B < re.length - 1; B++) {
      const q = (B + Ze) * A, R = (q - F / 2) / u, de = (q + F / 2) / u;
      R > 0 && R < 1 && T.addColorStop(R, re[B]), de > 0 && de < 1 && T.addColorStop(de, re[B + 1]);
    }
    return T.addColorStop(1, re[re.length - 1]), T;
  }, G = Math.max(24, Math.ceil(u / 4)), he = (re, Ze) => {
    n.beginPath();
    for (let T = 0; T <= G; T++) {
      const B = u * T / G, q = re == null ? 0 : I(B) + re;
      T ? n.lineTo(B, q) : n.moveTo(B, q);
    }
    for (let T = G; T >= 0; T--) {
      const B = u * T / G;
      n.lineTo(B, I(B) + Ze);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = Q(x.filter((re) => !re.night).map((re) => re.sky), 0.75), n.fillRect(0, 0, u, v);
  const ce = n.createLinearGradient(0, 0, u, 0);
  for (let re = 0; re <= 64; re++) {
    const Ze = M(u * re / 64);
    ce.addColorStop(re / 64, te(Ze.c, Math.min(1, Ze.a)));
  }
  n.fillStyle = ce;
  for (let re = 0; re < 8; re++)
    n.globalAlpha = 1 - re / 8, he(re * 2 * V, (re + 1) * 2 * V);
  n.fillStyle = Q(x.filter((re) => re.night).map((re) => re.sky), 1.25);
  const ke = Math.max(0.5, W), ie = 6;
  n.globalAlpha = 1, he(null, -ke);
  for (let re = 0; re < ie; re++)
    n.globalAlpha = 1 - (re + 0.5) / ie, he(-ke + 2 * ke * re / ie, -ke + 2 * ke * (re + 1) / ie);
  n.globalAlpha = 1;
  const oe = new Path2D(mh), ae = new Path2D(hh), E = new Path2D(fh), Ce = new Path2D(gh);
  n.fillStyle = k.star, i.stars.forEach((re) => {
    n.globalAlpha = re.o, re.big ? (n.save(), n.translate(re.x, re.y), n.scale(re.size, re.size), n.fill(oe), n.restore()) : (n.beginPath(), n.arc(re.x, re.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const le = No(k.sun, "#ffffff", 0.55);
  i.suns.forEach((re) => {
    const Ze = n.createRadialGradient(re.x, re.y, 0, re.x, re.y, re.halo);
    Ze.addColorStop(0, te(le, 0.42)), Ze.addColorStop(0.7, te(le, 0)), n.fillStyle = Ze, n.beginPath(), n.arc(re.x, re.y, re.halo, 0, Math.PI * 2), n.fill();
    const T = n.createLinearGradient(0, re.y - re.rad, 0, re.y + re.rad);
    T.addColorStop(0.6, k.sun), T.addColorStop(1, k.sunEdge), n.fillStyle = T, pe(!0), n.beginPath(), n.arc(re.x, re.y, re.rad, 0, Math.PI * 2), n.fill(), pe(!1);
  });
  const qe = No(k.moon, "#ffffff", 0.6);
  i.moons.forEach((re) => {
    n.save(), n.translate(re.x - re.d / 2, re.y - re.d / 2), n.scale(re.d / 46, re.d / 46);
    const Ze = n.createLinearGradient(0, 6, 0, 40);
    Ze.addColorStop(0, qe), Ze.addColorStop(1, k.moon), n.fillStyle = Ze, pe(!0), n.fill(ae), pe(!1), n.restore();
  }), i.clouds.forEach((re) => {
    n.save(), n.globalAlpha = re.o, n.translate(re.x, re.y), n.scale(re.w / 46, re.h / 30.66), n.translate(-4, -9.67), n.fillStyle = re.fill, pe(!0), n.fill(E), pe(!1), n.restore();
  }), i.fogs.forEach((re) => {
    const Ze = n.createLinearGradient(re.x, 0, re.x + re.w, 0);
    Ze.addColorStop(0, te(re.c, 0)), Ze.addColorStop(0.25, te(re.c, re.a)), Ze.addColorStop(0.75, te(re.c, re.a)), Ze.addColorStop(1, te(re.c, 0)), n.fillStyle = Ze, n.fillRect(re.x, re.y, re.w, 6 * V);
  }), n.fillStyle = k.rain, i.drops.forEach((re) => {
    n.save(), n.globalAlpha = re.o, n.translate(re.x, re.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, i.flakes.forEach((re) => {
    n.globalAlpha = re.o, n.beginPath(), n.arc(re.x, re.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, i.bolts.forEach((re) => {
    n.save(), n.globalAlpha = re.o, n.translate(re.x, re.y), n.fill(Ce), n.restore();
  }), n.restore();
}
const Mh = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", Ml = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, tc = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Qc = (n, l) => '<path class="' + l + '" d="' + n + '"/>', Sh = (n, l) => ' style="animation-delay:-' + Math.round(n * 137 % l) + 'ms"', Bo = (n, l, i, u) => {
  const v = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + Sh(n, 2400) + ' d="M' + n + " " + (l - i) + "L" + (n + v) + " " + (l - v) + "L" + (n + i) + " " + l + "L" + (n + v) + " " + (l + v) + "L" + n + " " + (l + i) + "L" + (n - v) + " " + (l + v) + "L" + (n - i) + " " + l + "L" + (n - v) + " " + (l - v) + 'Z"/>';
}, Wp = ([n, l, i], u) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + l + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Ch = (n, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Th = (n) => (n ? ["29.35", "43.04", "56.74"].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), Lh = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, i], u) => '<circle class="wbFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + l + '" cy="' + i + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Ah(n, l, i, u) {
  const v = (x) => '<g filter="url(#' + u + '-sh)">' + x + "</g>";
  return n === "clear" ? l ? v(Wp(i ? tc.l : tc.s, u)) + (i ? Bo(70, 20, 5.83, 1) + Bo(78.33, 41.67, 3.75, 0.8) + Bo(60, 71.67, 3.33, 0.6) : Bo(42, 12, 3.5, 1) + Bo(47, 25, 2.25, 0.8) + Bo(36, 43, 2, 0.6)) : v(Ch(u, i)) : n === "partly" ? v(l ? Wp(i ? tc.lp : tc.sp, u) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + v(Qc(i ? Ml.lp : Ml.sp, l ? "wbCloudLight" : "wbBright")) + (l ? i ? Bo(73.33, 16.67, 4.17, 0.9) : Bo(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? v(Qc(i ? Ml.lc : Ml.s, l ? "wbCloudLight" : "wbBright")) + (l ? i ? Bo(15, 15, 3.75, 0.8) + Bo(76.67, 13.33, 2.92, 0.6) : Bo(9, 9, 2.25, 0.8) + Bo(46, 8, 1.75, 0.6) : "") : v(Qc(i ? Ml.lr : Ml.s, "wbCloudLight")) + (n === "rain" ? Th(i) : Lh(i));
}
const Eh = (n, l) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (l ? 1.6 : 1) + '" stdDeviation="' + (l ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Dh(n, l, i, u) {
  let v = Mh(n);
  const x = v === "night" || !!i;
  v === "night" && (v = "clear");
  const k = l ? 90 : 54;
  return { k: v, night: x, svg: '<svg viewBox="0 0 ' + k + " " + k + '">' + Eh(u, l) + Ah(v, x, l, u) + "</svg>" };
}
const _h = [
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
], ac = (n, l) => (_h[l % 8 * 8 + n % 8] + 0.5) / 64, hi = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], Ln = (n, l, i) => [Math.round(n[0] + (l[0] - n[0]) * i), Math.round(n[1] + (l[1] - n[1]) * i), Math.round(n[2] + (l[2] - n[2]) * i)], pd = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Vp = (n, l) => {
  let i = n * 374761393 + l * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Ws = [255, 255, 255], On = hi("#26221e"), jp = hi("#0288d1"), Rh = hi("#01579b"), ep = hi(zn.cloudDay), tp = hi(zn.cloudNight), nc = hi(zn.dusk), ap = hi(zn.sunEdge), Bh = hi(zn.sun), Ph = 10, zp = 0.3, vr = 56, Xu = 21;
function Nh(n) {
  const l = Array.from({ length: Xu }, () => new Array(vr).fill(void 0)), i = (k, A, I) => {
    l[A][k] = I;
  }, u = Ln(nc, On, 0.35), v = Ln(On, Ws, 0.22);
  for (let k = 0; k <= 6; k++) {
    const A = k < 2 ? vr - 2 : vr - 1;
    for (let I = 6 - k; I <= A; I++) i(I, k, k < 2 ? u : k === 6 ? v : On);
  }
  const x = [nc, ap, tp, hi(zn.skyRainDay), Ln(nc, On, 0.2), Ln(n, On, 0.35)];
  [2, 3, 2, 3, 3].forEach((k, A) => {
    const I = 9 + A * 6;
    for (let M = 0; M < k; M++) {
      const W = x[(A * 2 + M * 3) % x.length];
      for (let F = I; F < I + 5; F++)
        i(F, 7 + M * 2, Ln(W, On, 0.12)), i(F, 8 + M * 2, M === k - 1 ? Ln(W, Ws, 0.3) : W);
      i(I + 5, 7 + M * 2, On), i(I + 5, 8 + M * 2, On);
    }
  });
  for (let k = 7; k <= 12; k++) i(5, k, On);
  i(5, 13, ap);
  for (let k = 7; k <= 14; k++) for (let A = 42; A <= 51; A++) i(A, k, A === 51 ? tp : ep);
  for (let k = 43; k <= 50; k += 2)
    i(k, 12, On), i(k, 9, Ln(On, ep, 0.4));
  for (let k = 40; k <= 53; k++) i(k, 14, k === 40 || k === 53 ? tp : ep);
  for (let k = 15; k <= 18; k++) for (let A = 46; A <= 49; A++) i(A, k, k === 18 ? On : k === 16 ? ap : nc);
  for (let k = 15; k <= 19; k++) i(44, k, On);
  return i(44, 20, Bh), l;
}
function Hh(n, l, i, u) {
  const v = Math.max(1, Math.round(n)), x = Math.max(1, Math.round(l)), k = new Uint8ClampedArray(v * x * 4), A = hi(u.skyClearDay), I = hi(u.skyFogDay), M = Nh(A), W = Math.round(x * 0.55), F = pd(1 - Math.log(i / zp) / Math.log(Ph / zp)), V = Ln(A, I, F), z = (G) => pd((G - 0.1) / 0.9), pe = pd((1 - Math.exp(-2 / i) - 0.2) / 0.8), te = Math.round(v / 2 - vr / 2), Q = W + 3;
  for (let G = 0; G < x; G++) {
    const he = Q - 1 - G, ce = G - Q;
    for (let ke = 0; ke < v; ke++) {
      const ie = ke - te;
      let oe, ae;
      const E = he >= 0 && he < Xu && ie >= 0 && ie < vr ? M[he][ie] : void 0;
      if (E)
        oe = E, ae = pe;
      else if (he >= 0 && he <= 1 && ie >= 4 - he && ie <= 5 - he)
        oe = Ln(Ws, jp, 0.15), ae = pe;
      else if (G < W) {
        const qe = pd(((G + 0.5) / W - 0.15) / 0.85) * 3, re = Math.min(3, Math.floor(qe + ac(ke + 2, G + 5)));
        oe = Ln(V, Ws, re * 0.1), ae = F * 0.95;
      } else {
        const qe = (G - W + 0.5) / (x - W), re = Math.min(1.5, 6e-3 / (qe * qe)), Ze = pd(qe * 1.4) * 3, T = Math.min(3, Math.floor(Ze + ac(ke + 1, G + 6)));
        oe = Ln(jp, Rh, T / 3);
        const B = 1 + Math.round(qe * 7), q = Math.floor(ke / (B * 3)), R = 0.06 + 0.16 * qe, de = ke % (B * 3) < B;
        de && Vp(q, G) < R ? oe = Ln(oe, Ws, 0.18 + 0.1 * (1 - qe)) : de && qe > 0.5 && Vp(q, G - 1) < R && (oe = Ln(oe, On, 0.12)), ae = z(1 - Math.exp(-re / i)), ce === 0 && ie >= 3 && ie <= 8 ? (oe = Ln(oe, Ws, ie < 6 ? 0.8 : 0.45), ae = pe) : ce >= 0 && ce <= 2 && ie >= vr && ie < vr + 40 ? ((1 - (ie - vr) / 40) * (ce === 1 ? 0.9 : 0.5) > ac(ke, G + 3) && (oe = Ln(oe, Ws, 0.5)), ae = pe) : ce === 0 && ie >= 6 && ie < vr && (oe = Ln(oe, On, ie % 2 === 0 ? 0.35 : 0.2), ae = pe);
      }
      const Ce = ae > ac(ke, G) ? I : oe, le = (G * v + ke) * 4;
      k[le] = Ce[0], k[le + 1] = Ce[1], k[le + 2] = Ce[2], k[le + 3] = 255;
    }
  }
  return { data: k, w: v, h: x };
}
const Ih = {
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
}, Fh = 1.6;
function Oh(n, l) {
  const i = n ? Ih[String(n).toUpperCase()] : void 0;
  if (!i || !(l > 0)) return;
  const u = (x) => Math.abs(Math.log(x[2] / l)), v = i.reduce((x, k) => u(k) < u(x) ? k : x);
  return u(v) <= Math.log(Fh) ? { from: v[0], to: v[1], km: v[2] } : void 0;
}
const qh = (n, l) => l === "mi" ? n * 1.609344 : l === "m" ? n / 1e3 : l === "ft" ? n * 3048e-7 : l === "yd" ? n * 9144e-7 : n, Wh = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", Sa = {
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
}, sa = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, nn = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function Vh() {
  const { pivot: n, slider: l, iconbtn: i, warp: u, outline: v } = Sa;
  return [
    ["--pv-persp", n.persp + "px"],
    ["--pv-shine", n.shine / 100],
    ["--pv-size", n.size + "%"],
    ["--pv-ret", n.ret + "ms"],
    ["--pv-ease", sa[n.ease]],
    ["--ab-blur", l.glow + "px"],
    ["--ab-spread", l.spread + "px"],
    ["--ab-str", l.strength + "%"],
    ["--ab-blur2", l.glow + l.hold + "px"],
    ["--ab-spread2", l.spread + l.hold / 4 + "px"],
    ["--ab-str2", l.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (l.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", l.ein + "ms"],
    ["--ab-out", l.eout + "ms"],
    ["--ab-ease", sa[l.ease]],
    ["--ih-s", i.scale / 100],
    ["--ih-p", i.press / 100],
    ["--ih-dur", i.dur + "ms"],
    ["--ih-ease", sa[i.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", u.cdur + "ms"],
    ["--wc-delay", u.cdelay + "ms"],
    ["--wc-ease", sa[u.ease]],
    ["--ol-esens", v.glowFrom],
    ["--ol-csens", v.colourFrom],
    ["--ol-cone", v.cone],
    ["--ol-glow", v.glow / 100],
    ["--ol-border", v.border / 100],
    ["--ol-fill", v.fill / 100],
    ["--ol-size", v.size / 100],
    ["--ol-h", v.hue + "deg"],
    ["--ol-in", v.fin + "ms"],
    ["--ol-out", v.fout + "ms"]
  ].map(([x, k]) => x + ":" + k).join(";");
}
const np = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", jh = "#homeView .tfAreaPanel", zh = 300, mc = (n) => Math.min(1, zh / Math.max(1, n)), op = (n, l) => 1 + (l / 100 - 1) * mc(n.offsetWidth);
function Gh(n, l) {
  l.style.cssText += ";" + Vh();
  let i = null;
  const u = (W) => {
    W.classList.remove("mvMoving", "mvLit"), W.style.setProperty("--rx", "0deg"), W.style.setProperty("--ry", "0deg"), W.style.setProperty("--sc", 1), W._down = !1;
  };
  n.addEventListener("pointermove", (W) => {
    var G, he;
    const F = W.pointerType === "touch" || nn() ? null : (he = (G = W.target).closest) == null ? void 0 : he.call(G, np);
    if (i && i !== F && u(i), i = F, !F || F.disabled) return;
    const V = Sa.pivot, z = F.getBoundingClientRect(), pe = (W.clientX - z.left) / z.width, te = (W.clientY - z.top) / z.height, Q = 1;
    F.classList.add("mvPv", "mvMoving", "mvLit"), F.style.setProperty("--pv-persp", V.persp / mc(Math.max(F.offsetWidth, F.offsetHeight)) + "px"), F.style.setProperty("--ry", (Q * (pe - 0.5) * 2 * V.tilt * mc(F.offsetWidth)).toFixed(3) + "deg"), F.style.setProperty("--rx", (Q * -(te - 0.5) * 2 * V.tilt * mc(F.offsetHeight)).toFixed(3) + "deg"), F.style.setProperty("--mx", (pe * 100).toFixed(1) + "%"), F.style.setProperty("--my", (te * 100).toFixed(1) + "%"), F._down || F.style.setProperty("--sc", op(F, V.lift));
  }, { passive: !0 }), n.addEventListener("pointerout", (W) => {
    i && !i.contains(W.relatedTarget) && (u(i), i = null);
  }), n.addEventListener("pointerdown", (W) => {
    var V, z;
    const F = nn() ? null : (z = (V = W.target).closest) == null ? void 0 : z.call(V, np);
    F && (F._down = !0, F.classList.add("mvPv"), F.classList.remove("mvMoving"), F.style.setProperty("--sc", op(F, Sa.pivot.press)));
  }), n.addEventListener("pointerup", (W) => {
    var V, z;
    const F = (z = (V = W.target).closest) == null ? void 0 : z.call(V, np);
    F && (F._down = !1, F.style.setProperty("--sc", W.pointerType === "touch" ? 1 : op(F, Sa.pivot.lift)));
  });
  let v = null;
  n.addEventListener("pointerover", (W) => {
    var F, V, z;
    W.pointerType !== "touch" && ((z = (V = (F = W.target).closest) == null ? void 0 : V.call(F, ".tfBar")) == null || z.classList.add("mvHover"));
  }), n.addEventListener("pointerout", (W) => {
    var V, z;
    const F = (z = (V = W.target).closest) == null ? void 0 : z.call(V, ".tfBar");
    F && !F.contains(W.relatedTarget) && F !== v && F.classList.remove("mvHover");
  }), n.addEventListener("pointerdown", (W) => {
    var V, z;
    const F = (z = (V = W.target).closest) == null ? void 0 : z.call(V, ".tfBar");
    F && (v = F, F.classList.add("mvHold"));
  });
  const x = (W) => {
    if (!v) return;
    v.classList.remove("mvHold");
    const F = v.getBoundingClientRect();
    (W.pointerType === "touch" || W.clientX < F.left || W.clientX > F.right || W.clientY < F.top || W.clientY > F.bottom) && v.classList.remove("mvHover"), v = null;
  };
  window.addEventListener("pointerup", x, !0), window.addEventListener("pointercancel", x, !0), n.addEventListener("focusin", (W) => {
    var F, V;
    (V = (F = W.target).matches) != null && V.call(F, ".tfBar:focus-visible") && W.target.classList.add("mvHover");
  }), n.addEventListener("focusout", (W) => {
    var F;
    (F = W.target.classList) == null || F.remove("mvHover", "mvHold");
  }), n.addEventListener("keydown", (W) => {
    var V, z;
    const F = (z = (V = W.target).closest) == null ? void 0 : z.call(V, ".tfBar");
    !F || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(W.key) || (F.classList.add("mvHold"), clearTimeout(F._k), F._k = setTimeout(() => F.classList.remove("mvHold"), 350));
  }), n.addEventListener("click", (W) => {
    var V, z;
    const F = (z = (V = W.target).closest) == null ? void 0 : z.call(V, "button.tfIcon[data-act]");
    F && Uh(F);
  });
  let k = null;
  const A = (W, F, V) => {
    W.querySelector(":scope>.mvEdge") || W.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const z = W.getBoundingClientRect(), pe = z.width / 2, te = z.height / 2, Q = F.clientX - z.left - pe, G = F.clientY - z.top - te, he = Q ? pe / Math.abs(Q) : 1 / 0, ce = G ? te / Math.abs(G) : 1 / 0, ke = Math.min(Math.max(1 / Math.min(he, ce), 0), 1);
    let ie = Math.atan2(G, Q) * 180 / Math.PI + 90;
    ie < 0 && (ie += 360);
    const oe = V ? 100 : ke * 100;
    W.style.setProperty("--edge-proximity", oe.toFixed(3)), W.style.setProperty("--cursor-angle", ie.toFixed(3) + "deg"), W.classList.toggle("mvLitEdge", V || oe >= Sa.outline.lightAt);
  }, I = (W) => {
    W.classList.remove("mvLitEdge"), W.style.setProperty("--edge-proximity", "0"), W._down = !1;
  }, M = (W) => {
    var V;
    const F = (V = W.closest) == null ? void 0 : V.call(W, jh);
    return F && !l.classList.contains("tfEditing") ? F : null;
  };
  n.addEventListener("pointermove", (W) => {
    if (W.pointerType === "touch") return;
    const F = M(W.target);
    k && k !== F && I(k), k = F, F && !F._down && A(F, W, !1);
  }, { passive: !0 }), n.addEventListener("pointerout", (W) => {
    k && !k.contains(W.relatedTarget) && (I(k), k = null);
  }), n.addEventListener("pointerdown", (W) => {
    const F = M(W.target);
    F && Sa.outline.press && (F._down = !0, A(F, W, !0));
  }), n.addEventListener("pointerup", (W) => {
    const F = M(W.target);
    F && (F._down = !1, W.pointerType === "touch" ? I(F) : A(F, W, !1));
  }), new MutationObserver((W) => {
    var F;
    for (const V of W) {
      const z = V.target;
      if (V.type === "attributes") {
        (F = z.classList) != null && F.contains("tfMoreBackdrop") && !z.hidden && V.oldValue !== null && Gp(z);
        continue;
      }
      V.addedNodes.forEach((pe) => {
        pe.nodeType === 1 && pe.classList.contains("tfMoreBackdrop") && !pe.hidden && Gp(pe);
      });
    }
  }).observe(l, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const Ju = (n) => n.closest("[data-k],.tfMore,.tfMorePair") || n.getRootNode();
function Qu(n, l) {
  const i = [];
  for (let u = n; u && u !== l && u.parentNode; u = u.parentNode) i.unshift([...u.parentNode.children].indexOf(u));
  return i;
}
const ef = (n, l) => l.reduce((i, u) => i == null ? void 0 : i.children[u], n);
function Uh(n) {
  var z;
  if (nn() || n._warp) return;
  const l = Sa.warp, i = l.amount / 100, u = n.firstElementChild;
  if (!u) return;
  const v = { squash: { scale: 1 + 0.35 * i + " " + (1 - 0.55 * i) }, pinch: { scale: String(1 - 0.5 * i) }, twist: { rotate: 140 * i + "deg", scale: String(1 - 0.35 * i) }, flip: { rotate: "y 90deg" } }[l.style], x = "blur(" + 2 * i + "px)", k = n.getRootNode(), A = Ju(n), I = (z = A.dataset) == null ? void 0 : z.k, M = Qu(n, A), W = n.getAttribute("aria-pressed") + "|" + n.dataset.act;
  n._warp = 1;
  const F = u.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...v, filter: x }], { duration: l.win, easing: sa.exit, fill: "forwards" }), V = performance.now();
  F.finished.then(() => {
    const pe = () => {
      var ke, ie;
      const te = I ? A.isConnected ? A : (ke = k.querySelector) == null ? void 0 : ke.call(k, '[data-k="' + CSS.escape(I) + '"]') : A, Q = te && ef(te, M);
      if (Q === n && n.getAttribute("aria-pressed") + "|" + n.dataset.act === W && performance.now() - V < 420) {
        requestAnimationFrame(pe);
        return;
      }
      (((ie = Q == null ? void 0 : Q.matches) != null && ie.call(Q, "button.tfIcon") ? Q : n).firstElementChild || u).animate([{ ...v, filter: x }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: l.wout, easing: sa[l.ease] }), F.cancel(), n._warp = 0;
    };
    pe();
  });
}
function Yh(n, l, i) {
  var W;
  if (nn() || !n || !l) return;
  const u = Sa.expand, v = n.getBoundingClientRect(), x = "inset(" + (l.top - v.top).toFixed(1) + "px " + (v.right - l.right).toFixed(1) + "px " + (v.bottom - l.bottom).toFixed(1) + "px " + (l.left - v.left).toFixed(1) + "px round 24px)", k = n.firstElementChild, A = k == null ? void 0 : k.querySelector('.tfBack, [data-close], [data-wb="graph-close"]'), I = [...n.children].slice(1);
  n.animate([{ clipPath: x }, { clipPath: "inset(0px 0px 0px 0px round 0px)" }], { duration: u.dur, easing: sa[u.ease] });
  const M = (W = k == null ? void 0 : k.querySelector(".tfIcon,.wbIcon")) == null ? void 0 : W.getBoundingClientRect();
  k && M && i && k.animate([{ transform: "translate(" + (i.left - M.left).toFixed(1) + "px," + (i.top - M.top).toFixed(1) + "px)" }, { transform: "none" }], { duration: u.dur, easing: sa[u.ease] }), A == null || A.animate([{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }], { duration: u.dur, easing: sa[u.ease] }), I.forEach((F, V) => {
    F.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: u.delay + V * u.stagger, easing: sa.standard, fill: "backwards" });
  });
}
function Zh(n, l, i) {
  if (nn() || !n || !l) {
    i();
    return;
  }
  const u = Sa.expand, v = u.dur * u.back / 100, x = n.getBoundingClientRect(), k = "inset(" + (l.top - x.top).toFixed(1) + "px " + (x.right - l.right).toFixed(1) + "px " + (x.bottom - l.bottom).toFixed(1) + "px " + (l.left - x.left).toFixed(1) + "px round 24px)";
  [...n.children].slice(1).forEach((W) => W.animate([{ opacity: 1 }, { opacity: 0 }], { duration: v * 0.3, easing: sa.standard, fill: "forwards" }));
  const A = n.animate([{ clipPath: "inset(0px 0px 0px 0px round 0px)" }, { clipPath: k, opacity: 1, offset: 0.85 }, { clipPath: k, opacity: 0 }], { duration: v, easing: sa.standard, fill: "forwards" });
  let I = !1;
  const M = () => {
    I || (I = !0, i());
  };
  A.finished.then(M, M), setTimeout(M, v + 80);
}
const tf = (n) => {
  let l = "M" + n[0][0].toFixed(1) + " " + n[0][1].toFixed(1);
  for (let i = 0; i < n.length - 1; i++) {
    const u = n[i - 1] || n[i], v = n[i], x = n[i + 1], k = n[i + 2] || x, A = [v[0] + (x[0] - u[0]) / 6, v[1] + (x[1] - u[1]) / 6], I = [x[0] - (k[0] - v[0]) / 6, x[1] - (k[1] - v[1]) / 6];
    l += "C" + A.map((M) => M.toFixed(1)).join(" ") + " " + I.map((M) => M.toFixed(1)).join(" ") + " " + x.map((M) => M.toFixed(1)).join(" ");
  }
  return l;
}, af = (n, l, i, u = "mvGrid") => [0, 1, 2].map((v) => {
  const x = (l + (i - l) * v / 2).toFixed(1);
  return '<line class="' + u + '" x1="0" x2="' + n + '" y1="' + x + '" y2="' + x + '"/>';
}).join("");
function nf(n, l = n.querySelector(".mvLine"), i = n.querySelectorAll(".mvArea,.mvDot")) {
  if (nn() || !(l != null && l.getTotalLength)) return;
  const u = Sa.graphs, v = l.getTotalLength();
  l.animate([{ strokeDasharray: v, strokeDashoffset: v }, { strokeDasharray: v, strokeDashoffset: 0 }], { duration: u.draw, easing: sa.standard }), [...i].forEach((x, k) => x.animate([{ opacity: 0 }, { opacity: 1 }], { duration: u.draw * 0.6, delay: u.draw * 0.3 + k * 12, easing: sa.standard, fill: "backwards" }));
}
function gc(n, l, i, u, v) {
  if (n.getAnimations().forEach((W) => W.cancel()), n.style.left = u + "px", n.style.width = v + "px", nn() || l === u && i === v) return;
  const x = Sa.tabs, k = x.stretch / 100, A = (W, F) => ({ left: W + "px", width: F + "px" }), M = u > l ? A(l + (u - l) * (0.15 * (1 - k)), u + v - (l + (u - l) * (0.15 * (1 - k)))) : A(u, l + i - u - (l - u) * (0.15 * (1 - k)));
  n.animate([A(l, i), { offset: 0.5, ...M }, A(u, v)], { duration: x.dur, easing: sa.standard });
}
function Kh(n) {
  const l = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", i = (v) => v.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), u = (v, x) => x ? [...v.children].indexOf(x) : -1;
  n.addEventListener("click", (v) => {
    var he, ce, ke;
    const x = (ce = (he = v.target).closest) == null ? void 0 : ce.call(he, l + ">button"), k = x == null ? void 0 : x.parentElement;
    if (!k || nn() || x.disabled) return;
    const A = i(k);
    if (!A || A === x) return;
    const I = u(k, A), M = k.getBoundingClientRect(), W = A.getBoundingClientRect(), F = getComputedStyle(A).borderRadius, V = k.getRootNode(), z = Ju(k), pe = (ke = z.dataset) == null ? void 0 : ke.k, te = Qu(k, z), Q = performance.now(), G = () => {
      var re, Ze, T;
      const ie = pe && !z.isConnected ? (re = V.querySelector) == null ? void 0 : re.call(V, '[data-k="' + CSS.escape(pe) + '"]') : z, oe = ie && ef(ie, te), ae = (Ze = oe == null ? void 0 : oe.matches) != null && Ze.call(oe, l) ? i(oe) : null;
      if (!ae || u(oe, ae) === I) {
        performance.now() - Q < 700 && requestAnimationFrame(G);
        return;
      }
      const E = oe.getBoundingClientRect(), Ce = ae.getBoundingClientRect(), le = getComputedStyle(ae);
      (T = oe.querySelector(":scope>.mvSegInd")) == null || T.remove();
      const qe = document.createElement("span");
      qe.className = "mvSegInd", qe.style.cssText = "top:" + (Ce.top - E.top - oe.clientTop) + "px;height:" + Ce.height + "px;border-radius:" + F + ";background:" + le.backgroundColor + ";box-shadow:" + le.boxShadow, getComputedStyle(oe).position === "static" && (oe.style.position = "relative"), oe.prepend(qe), oe.classList.add("mvSegMoving"), gc(qe, W.left - M.left - oe.clientLeft, W.width, Ce.left - E.left - oe.clientLeft, Ce.width), clearTimeout(oe._seg), oe._seg = setTimeout(() => {
        qe.remove(), oe.classList.remove("mvSegMoving");
      }, Sa.tabs.dur + 20);
    };
    requestAnimationFrame(G);
  }, !0);
}
const of = (n) => getComputedStyle(n).placeItems.startsWith("end");
function Gp(n) {
  const l = n.firstElementChild;
  if (nn() || !l || l.classList.contains("still")) return;
  const i = Sa.dialog;
  n.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + i.blur + "px)" }], { duration: i.open, easing: sa.standard }), l.style.animation = "none", l.animate(of(n) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + i.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: i.open, easing: sa[i.ease] }), [...(l.classList.contains("tfMorePair") && l.querySelector(".tfMore") || l).children].forEach((v, x) => v.animate([{ opacity: 0 }, { opacity: 1 }], { duration: i.open * 0.6, delay: i.open * 0.35 + x * 40, easing: sa.standard, fill: "backwards" }));
}
function $h(n, l) {
  const i = n == null ? void 0 : n.firstElementChild;
  if (nn() || !i || n.hidden || n._closing) {
    l();
    return;
  }
  const u = Sa.dialog;
  n._closing = !0, n.style.pointerEvents = "none", n.animate([{ opacity: 1, backdropFilter: "blur(" + u.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: u.close, easing: sa.exit, fill: "forwards" });
  const v = i.animate(of(n) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + u.from / 100 + ")" }], { duration: u.close, easing: sa.exit, fill: "forwards" });
  let x = !1;
  const k = () => {
    x || (x = !0, n._closing = !1, n.style.pointerEvents = "", n.getAnimations().forEach((A) => A.cancel()), i.getAnimations().forEach((A) => A.cancel()), l());
  };
  v.finished.then(k, k), setTimeout(k, u.close + 80);
}
const Xh = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function Jh(n, l) {
  n.replaceChildren(), n.insertAdjacentHTML("afterbegin", Xh), n.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: l }));
}
function Qh(n) {
  if (nn()) return;
  const l = Sa.confirm;
  n.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: l.dur, easing: sa.spring });
  const i = n.querySelector(".mvTick path");
  i && l.draw && i.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: l.dur * 0.5, easing: sa.standard, fill: "backwards" });
}
const Up = (n, l, i, u, v = 1) => (n + l * i * v) * Math.pow(u, v);
function Yp(n) {
  const l = Sa.drag.squash / 100;
  !n || nn() || !l || n.animate([{ transform: "scale(" + (1 + l * 0.4) + "," + (1 - l) + ")" }, { transform: "scale(" + (1 - l * 0.1) + "," + (1 + l * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function Zp(n) {
  if (!n || nn()) return;
  const l = Sa.expand;
  [...n.children].slice(1).forEach((i, u) => i.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: l.delay + u * l.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const bn = 6e4, jt = 36e5, Qn = 864e5, hd = 1440, em = 6, tm = 10 * bn, Kp = 3, am = 3, oc = { day: [6, 22], waking: [7, 23], all: [0, 24] }, nm = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], om = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", $p = (n, l, i, u) => '<circle cx="' + n + '" cy="' + l + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((v) => {
  const x = Math.cos(v * Math.PI / 180), k = Math.sin(v * Math.PI / 180), A = i + 2, I = i + 2 + u;
  return "M" + (n + x * A).toFixed(2) + " " + (l + k * A).toFixed(2) + "L" + (n + x * I).toFixed(2) + " " + (l + k * I).toFixed(2);
}).join("") + '"/>', pr = (n) => '<path d="' + om + '"' + (n ? ' transform="' + n + '"' : "") + "/>", ur = (n) => '<path d="' + n + '"/>', Xp = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function im(n, l) {
  const i = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return l ? Xp : $p(12, 12, 4, 2.5);
    case "clear-night":
      return Xp;
    case "partlycloudy":
      return (l ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : $p(7.5, 7.5, 2.6, 1.4)) + pr("translate(3.6,3) scale(.85)");
    case "cloudy":
      return pr();
    case "fog":
      return ur("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return pr(i) + ur("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return pr(i) + ur("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return pr(i) + ur("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return pr(i) + ur("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return pr(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return pr(i) + ur("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return pr(i) + ur("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return ur("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + ur("M12 8v5M12 16h.01");
  }
}
const ip = (n, l) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + im(n, l) + "</svg>", rm = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), sm = 30 * bn, lm = 7, dm = 3, Jp = 1, cm = bn, pm = 15 * bn, um = 5, zt = {
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
}, Re = {
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
}, fm = {
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
}, hm = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], mm = Object.keys(Re.phases), gm = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Qp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, rf = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], ic = 100, eu = "µg/m³", vm = "weather_alerts.air_quality_pollen", xc = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], bm = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, wm = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], xm = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, ym = { daily: 1, hourly: 2 }, Oe = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Cn = (n, l) => n.replace(/\{(\w+)\}/g, (i, u) => l[u] ?? ""), mr = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', tu = /* @__PURE__ */ new Map();
function sf(n) {
  let l = tu.get(n);
  if (l === void 0) {
    const i = "http://www.w3.org/2000/svg", u = document.createElementNS(i, "svg"), v = document.createElementNS(i, "path");
    u.setAttribute("viewBox", "0 0 24 24"), u.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", v.setAttribute("d", n), u.append(v), document.body.append(u);
    const x = v.getBBox();
    u.remove();
    const k = Math.max(x.width, x.height), A = k ? 26 * 24 / k : 0, I = A / 24;
    l = k ? "width:" + A.toFixed(2) + "px;height:" + A.toFixed(2) + "px;translate:" + ((12 - x.x - x.width / 2) * I).toFixed(2) + "px " + ((12 - x.y - x.height / 2) * I).toFixed(2) + "px" : "", tu.set(n, l);
  }
  return l ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + l + '"><path d="' + n + '"/></svg>' : mr(n);
}
const km = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, ea = (n) => n != null && n !== "" && Number.isFinite(Number(n)), au = /* @__PURE__ */ new Map(), nu = /* @__PURE__ */ new Map(), rp = /* @__PURE__ */ new WeakMap(), Mm = (n) => {
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
function Pt(n, l, i) {
  const u = Number(n);
  if (Number.isNaN(u)) return String(n);
  const v = (l == null ? void 0 : l.number_format) === "none", x = { maximumFractionDigits: 2, ...i, ...v ? { useGrouping: !1 } : {} }, k = v ? "en-US" : Mm(l), A = JSON.stringify([k, x]);
  let I = au.get(A);
  if (!I) {
    try {
      I = new Intl.NumberFormat(k, x);
    } catch {
      I = new Intl.NumberFormat(void 0, x);
    }
    au.set(A, I);
  }
  return I.format(u);
}
const Ep = (n) => {
  var l;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.language) || (n == null ? void 0 : n.language) || void 0;
};
function Sm(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (rp.has(n)) return rp.get(n);
  const l = n.time_format, i = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? n.language : void 0).includes("10") : l === "12";
  return rp.set(n, i), i;
}
const lf = (n) => {
  var l, i;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.time_zone) === "server" && ((i = n == null ? void 0 : n.config) != null && i.time_zone) ? n.config.time_zone : void 0;
};
function df(n, l) {
  const i = JSON.stringify([n, l]);
  let u = nu.get(i);
  if (!u) {
    try {
      u = new Intl.DateTimeFormat(n, l);
    } catch {
      u = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    nu.set(i, u);
  }
  return u;
}
const Tn = (n, l) => df(Ep(l), { hour: "numeric", minute: "2-digit", hourCycle: Sm(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: lf(l) }).format(n), ou = (n, l) => df(Ep(l), { weekday: "short", timeZone: lf(l) }).format(n), Cm = (n, l) => n.toLocaleDateString(Ep(l), { weekday: "narrow" }), pa = (n, l) => ea(l) ? Pt(Math.round(Number(l)), n.locale) + "°" : "–", fs = (n) => {
  const l = new Date(n);
  return l.setHours(0, 0, 0, 0), l;
}, Sl = (n, l) => n.getFullYear() === l.getFullYear() && n.getMonth() === l.getMonth() && n.getDate() === l.getDate(), jn = Math.PI / 180, Tm = 2440588, Lm = 2451545, yc = jn * 23.4397, Am = 149598e3, Em = -0.833 * jn, Dm = 0.133 * jn, iu = 5 * bn, cf = (n) => n.getTime() / Qn - 0.5 + Tm - Lm, pf = (n, l) => Math.atan2(Math.sin(n) * Math.cos(yc) - Math.tan(l) * Math.sin(yc), Math.cos(n)), uf = (n, l) => Math.asin(Math.sin(l) * Math.cos(yc) + Math.cos(l) * Math.sin(yc) * Math.sin(n)), _m = (n, l) => jn * (280.16 + 360.9856235 * n) - l, Rm = (n, l, i) => Math.asin(Math.sin(l) * Math.sin(i) + Math.cos(l) * Math.cos(i) * Math.cos(n));
function ff(n) {
  const l = jn * (357.5291 + 0.98560028 * n), i = jn * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), u = l + i + jn * 102.9372 + Math.PI;
  return { ra: pf(u, 0), dec: uf(u, 0), dist: Am };
}
function hf(n) {
  const l = jn * (218.316 + 13.176396 * n), i = jn * (134.963 + 13.064993 * n), u = jn * (93.272 + 13.22935 * n), v = l + jn * 6.289 * Math.sin(i), x = jn * 5.128 * Math.sin(u);
  return { ra: pf(v, x), dec: uf(v, x), dist: 385001 - 20905 * Math.cos(i) };
}
const mf = (n, l, i, u) => {
  const v = cf(l), x = n(v);
  return Rm(_m(v, jn * -u) - x.ra, jn * i, x.dec);
}, kc = (n, l, i) => mf(ff, n, l, i), Bm = (n, l, i) => mf(hf, n, l, i);
function gf(n, l, i, u) {
  const v = {};
  let x = i.getTime(), k = n(i) - l;
  for (let A = x + iu; A <= u.getTime(); A += iu) {
    const I = n(new Date(A)) - l;
    if (k < 0 != I < 0) {
      const M = new Date(x + (A - x) * k / (k - I));
      I > 0 ? v.rise ?? (v.rise = M) : v.set ?? (v.set = M);
    }
    x = A, k = I;
  }
  return v;
}
const vf = (n) => {
  const l = fs(n);
  return [l, new Date(l.getTime() + Qn)];
}, Pm = (n, l, i) => gf((u) => kc(u, l, i), Em, ...vf(n)), Nm = (n, l, i) => gf((u) => Bm(u, l, i), Dm, ...vf(n));
function sp(n) {
  const l = cf(n), i = ff(l), u = hf(l), v = Math.acos(Math.sin(i.dec) * Math.sin(u.dec) + Math.cos(i.dec) * Math.cos(u.dec) * Math.cos(i.ra - u.ra)), x = Math.atan2(i.dist * Math.sin(v), u.dist - i.dist * Math.cos(v)), k = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - u.ra), Math.sin(i.dec) * Math.cos(u.dec) - Math.cos(i.dec) * Math.sin(u.dec) * Math.cos(i.ra - u.ra));
  return { fraction: (1 + Math.cos(x)) / 2, phase: 0.5 + 0.5 * x * (k < 0 ? -1 : 1) / Math.PI };
}
const Hm = (n) => {
  const l = n * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, md = (n) => {
  const l = n == null ? void 0 : n.config;
  return l && ea(l.latitude) && ea(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function Cl(n, l) {
  var M, W, F;
  const i = md(n), u = i ? Pm(l, i.lat, i.lon) : {}, v = (M = n == null ? void 0 : n.states) == null ? void 0 : M["sun.sun"], x = fs(l).getTime(), k = (V) => {
    const z = V ? new Date(V) : null;
    return z && Number.isFinite(z.getTime()) && fs(z).getTime() === x ? z : null;
  }, A = k((W = v == null ? void 0 : v.attributes) == null ? void 0 : W.next_rising), I = k((F = v == null ? void 0 : v.attributes) == null ? void 0 : F.next_setting);
  return A && (u.rise = A), I && (u.set = I), u;
}
function Im(n) {
  var u;
  const l = (u = n == null ? void 0 : n.states) == null ? void 0 : u["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const i = md(n);
  return i ? kc(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const Vs = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", Ll = (n, l) => {
  var u;
  const i = (u = n.entities) == null ? void 0 : u[l];
  return !i || !i.hidden && !i.entity_category;
}, Ia = (n, l, i) => {
  var u, v;
  for (const x of l) {
    const k = (u = n.states) == null ? void 0 : u[x];
    if (!Vs(k)) continue;
    const A = (v = k.attributes) == null ? void 0 : v[i];
    if (A != null && A !== "") return { stateObj: k, value: A };
  }
}, Fm = (n, l) => l.map((i) => {
  var u;
  return (u = n.states) == null ? void 0 : u[i];
}).find(Vs), Om = (n, l, i) => l.map((u) => {
  var v;
  return (v = n.states) == null ? void 0 : v[u];
}).find((u) => {
  var v;
  return Vs(u) && (((v = u.attributes) == null ? void 0 : v.supported_features) == null || Number(u.attributes.supported_features) & ym[i]);
});
function ps(n, l, i) {
  var x, k, A, I;
  const u = ((k = (x = n.config) == null ? void 0 : x.unit_system) == null ? void 0 : k.length) || "", v = (l == null ? void 0 : l.attributes) || {};
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
      return v.temperature_unit || ((I = (A = n.config) == null ? void 0 : A.unit_system) == null ? void 0 : I.temperature) || "";
  }
}
function vc(n, l, i, u) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [v, ...x] = n.formatEntityAttributeValueToParts(l, i, u).map((k) => k.value);
      return { number: v, unit: x.join("").trim() };
    }
  } catch {
  }
  return { number: Pt(u, n.locale), unit: ps(n, l, i) };
}
function ru(n, l, i, u) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(l, i, u);
  } catch {
  }
  const v = vc(n, l, i, u);
  return (v.number + " " + v.unit).trim();
}
function fr(n, l) {
  var u;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(l);
  } catch {
  }
  const i = (u = l.attributes) == null ? void 0 : u.unit_of_measurement;
  return fm[l.state] || (i && ea(l.state) ? Pt(l.state, n.locale) + " " + i : l.state);
}
function ds(n, l) {
  var i;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((i = l.attributes) == null ? void 0 : i.friendly_name) || l.entity_id;
}
const su = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", rc = (n) => rf.find(([, l]) => n <= l)[0];
function qm(n, l) {
  if (l === "Beaufort") return Math.round(n);
  const i = l ? bm[l] : void 0;
  if (i === void 0) return;
  const u = wm.findIndex((v) => n * i < v);
  return u === -1 ? 12 : u;
}
const lu = (n, l) => {
  const i = l ? xm[l] : void 0;
  return i === void 0 ? void 0 : n * i;
}, du = (n) => Object.keys(n.states || {}).find((l) => {
  var i, u;
  return l.startsWith("sensor.") && ((u = (i = n.entities) == null ? void 0 : i[l]) == null ? void 0 : u.platform) === "moon";
}), lp = (n) => Object.values(n.states || {}).filter((l) => {
  var i, u;
  return l.entity_id.startsWith("sensor.") && ((i = l.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((u = l.attributes) == null ? void 0 : u.state_class) ?? "") && Ll(n, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function Wm(n) {
  var i;
  const l = {};
  for (const [u, v] of Object.entries(((i = n == null ? void 0 : n.core) == null ? void 0 : i.integration) ?? {})) {
    if (v && "integration_type" in v) {
      l[u] = v.categories;
      continue;
    }
    for (const [x, k] of Object.entries((v == null ? void 0 : v.integrations) ?? {})) l[x] = k == null ? void 0 : k.categories;
  }
  return l;
}
const bf = (n, l, i) => {
  var v, x, k;
  const u = (x = (v = n.entities) == null ? void 0 : v[i]) == null ? void 0 : x.platform;
  return !!u && !!((k = l[u]) != null && k.includes(vm));
};
function Vm(n, l) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((u) => {
    var v;
    return u.entity_id.startsWith("sensor.") && xc.includes(((v = u.attributes) == null ? void 0 : v.device_class) ?? "") && Ll(n, u.entity_id) && bf(n, l, u.entity_id);
  }).sort((u, v) => u.entity_id.localeCompare(v.entity_id)).forEach((u) => {
    i.has(u.attributes.device_class) || i.set(u.attributes.device_class, u.entity_id);
  }), xc.map((u) => i.get(u)).filter(Boolean);
}
const jm = (n, l) => Object.values(n.states || {}).filter((i) => {
  var u, v;
  return i.entity_id.startsWith("sensor.") && Ll(n, i.entity_id) && bf(n, l, i.entity_id) && (((v = (u = n.entities) == null ? void 0 : u[i.entity_id]) == null ? void 0 : v.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function cu(n, l, i) {
  const u = Math.max(l - n, 1e-6), v = i[i.length - 1], x = i.find((M) => u / M <= 4) ?? v * Math.ceil(u / (4 * v)), k = Math.floor(n / x) * x;
  let A = Math.ceil(l / x) * x;
  A === k && (A = k + x);
  const I = [];
  for (let M = k; M <= A + x / 1e3; M += x) I.push(M);
  return { min: k, max: A, ticks: I };
}
const zm = (n, l, i) => {
  const u = (k) => [1, 3, 5].map((A) => parseInt(k.slice(A, A + 2), 16)), v = u(n), x = u(l);
  return "rgb(" + v.map((k, A) => Math.round(k + (x[A] - k) * i)).join(", ") + ")";
}, Gm = (n, l, i, u) => {
  const v = i * Math.abs(1 - 2 * u), x = u < 0.5 ? 0 : 1;
  return "M " + n + " " + (l - i) + " A " + i + " " + i + " 0 0 0 " + n + " " + (l + i) + " A " + v + " " + i + " 0 0 " + x + " " + n + " " + (l - i) + " Z";
}, Fn = ({ icon: n, name: l, sub: i, visual: u, double: v, backdrop: x, cls: k, zone: A, callouts: I }) => '<div class="wbCard wbSquare' + (v ? " wbDouble" : "") + (x ? " wbHasBackdrop" : "") + (A != null ? " wbZoned" : "") + (k ? " " + k : "") + '">' + (x ? '<div class="wbBackdrop" aria-hidden="true">' + x + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + sf(n) + '</div><div class="wbText"><span class="wbName">' + Oe(l) + "</span>" + (i ? '<span class="wbSub">' + Oe(i) + "</span>" : "") + "</div></div>" + (A != null ? '<div class="wbZone">' + A + "</div>" + (I != null && I.length ? '<div class="wbCallouts">' + I.slice(0, 3).map((M) => Array.isArray(M) ? '<span class="wbCallout"><span>' + Oe(M[0]) + "</span><span>" + Oe(M[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + Oe(M) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + u + "</div>") + "</div>", sc = (n) => '<div class="wbZoneM">' + n + "</div>", Po = (n, l) => '<div class="wbValue"><span class="wbNum">' + Oe(n) + "</span>" + (l ? '<span class="wbUnitV">' + Oe(l) + "</span>" : "") + "</div>";
function Um(n) {
  const l = n.max - n.min || 1, i = (A) => 100 - (Math.min(n.max, Math.max(n.min, A)) - n.min) / l * 100, u = (A) => A / hd * 100 + "%", v = (A) => A.map((I) => I.t + "," + i(I.v)).join(" "), x = n.kind === "line" ? n.points : [];
  let k = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((A) => '<span class="wbDcSunMark" style="left:' + u(A.t) + '">' + mr(A.rise ? zt.sunsetUp : zt.sunsetDown) + Oe(A.label) + "</span>").join("") + "</div>";
  return k += '<div class="wbDcY">' + n.ticks.map((A) => '<span style="top:' + i(A) + '%">' + Oe(n.format(A)) + "</span>").join("") + "</div>", k += '<div class="wbDcPlot"><svg viewBox="0 0 ' + hd + ' 100" preserveAspectRatio="none">' + n.night.map(([A, I]) => '<rect class="wbDcNight" x="' + A + '" y="0" width="' + (I - A) + '" height="100"></rect>').join("") + n.ticks.map((A) => '<line class="wbDcGrid" x1="0" x2="' + hd + '" y1="' + i(A) + '" y2="' + i(A) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((A) => '<line class="wbDcSunLine" x1="' + A.t + '" x2="' + A.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + v(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (x.length > 1 ? '<polygon class="wbDcArea" points="' + x[0].t + ",100 " + v(x) + " " + x[x.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + v(x) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((A) => A.v > 0).map((A) => '<i class="wbDcBar" style="left:' + u(A.t + 12) + ";width:" + u(36) + ";height:" + (100 - i(A.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + u(n.now.t) + ";top:" + i(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + u(n.peak.t) + ";top:" + i(n.peak.v) + '%">' + Oe(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Oe(n.note) + "</span>" : "") + "</div>", k += '<div class="wbDcX">' + n.hours.map((A) => '<span class="' + (A.minor ? "wbMinor" : "") + '" style="left:' + u(A.t) + '">' + Oe(A.label) + "</span>").join("") + "</div></div>", k;
}
function pu(n, l, i = 120, u = 300) {
  const k = n.map((G) => G.value), A = Math.min(...k), I = Math.max(...k), M = I - A || 1, W = (G) => G / (n.length - 1) * u, F = (G) => 18 + (1 - (G - A) / M) * (i - 18 - 18), V = n.map((G, he) => [W(he), F(G.value)]), z = V.length > 2 ? tf(V) : "M" + V.map((G) => G[0].toFixed(1) + " " + G[1].toFixed(1)).join("L"), pe = k.indexOf(I), te = k.indexOf(A), Q = (G) => G === 0 ? "start" : G === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + u + " " + i + '" aria-hidden="true">' + af(u, 18, i - 18) + ('<path class="wbArea" d="' + z + "L" + u + " " + (i - 18) + "L0 " + (i - 18) + 'Z"></path>') + '<path class="wbLine" d="' + z + '" vector-effect="non-scaling-stroke"></path><text x="' + W(pe) + '" y="' + (F(I) - 6) + '" text-anchor="' + Q(pe) + '">' + Oe(l(I)) + '</text><text x="' + W(te) + '" y="' + (F(A) + 14) + '" text-anchor="' + Q(te) + '">' + Oe(l(A)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + Oe(n[0].label) + '</text><text x="' + u + '" y="' + i + '" text-anchor="end">' + Oe(n[n.length - 1].label) + "</text></svg>";
}
function Ym(n, l) {
  const x = n.map((F) => F.value).concat([]), k = Math.min(...x) - 2, A = Math.max(...x) + 1, I = A - k || 1, M = 300 / n.length, W = (F) => (1 - (F - k) / I) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((F, V) => '<rect class="wbBar' + (F.now ? " wbNowBar" : "") + '" x="' + (V * M + M * 0.2) + '" y="' + W(F.value) + '" width="' + M * 0.6 + '" height="' + (104 - W(F.value)) + '" rx="6"></rect><text x="' + (V * M + M / 2) + '" y="120" text-anchor="middle">' + Oe(F.label) + "</text>").join("") + "</svg>";
}
const Zm = [
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
], Km = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], uu = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], $m = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Xm = 0;
function fu(n, { getHass: l, entityId: i, style: u = "bitmap", motion: v = !0, cards: x, onOpen: k, hoursWindow: A } = {}) {
  var cn, Yo;
  const I = "wb" + ++Xm + "-", M = document.createElement("div");
  M.className = "wb", M.dataset.style = u;
  const W = document.createElement("div");
  W.className = "wbBento", M.appendChild(W), n.replaceChildren(M);
  const F = ["aq_tile", "pollen_tile", "radar_tile"], V = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((f) => !x || x.includes(f)), z = { current: "wide", hourly: "wide", compared_to_average: "double" }, pe = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], te = {};
  V.forEach((f) => {
    const b = document.createElement("div");
    b.className = "wbItem", b.dataset.card = f, b.dataset.size = z[f] || "tile", b.hidden = !0, pe.includes(f) && (b.dataset.xl = ""), W.appendChild(b), te[f] = { el: b, html: null };
  });
  let Q = !1, G = null, he = 0, ce = -1, ke = !1, ie = null;
  const oe = "homecore-next-view", ae = (() => {
    try {
      return localStorage.getItem(oe);
    } catch {
      return null;
    }
  })(), E = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: ae === "bars" ? "bars" : "strip", aq: void 0 }, Ce = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let le = /* @__PURE__ */ new Date(), qe = /* @__PURE__ */ new Date();
  const re = {}, Ze = {}, T = {}, B = (f) => {
    var b;
    return ((b = T[f]) == null ? void 0 : b.forecast) ?? [];
  }, q = (f, b) => {
    var y;
    return T[b] ? (y = f.states) == null ? void 0 : y[T[b].entityId] : void 0;
  };
  function R(f) {
    const b = Ze[f];
    b && (b.unsub.then((y) => {
      typeof y == "function" && y();
    }).catch(() => {
    }), delete Ze[f]), T[f] && delete T[f];
  }
  function de(f, b, y) {
    var H;
    if (typeof ((H = f.connection) == null ? void 0 : H.subscribeMessage) != "function") return;
    const C = { entityId: y };
    try {
      C.unsub = Promise.resolve(f.connection.subscribeMessage((U) => {
        Q || Ze[b] !== C || (U != null && U.forecast ? T[b] = { entityId: y, forecast: U.forecast } : delete T[b], zo());
      }, { type: "weather/subscribe_forecast", forecast_type: b, entity_id: y }));
    } catch (U) {
      C.unsub = Promise.reject(U);
    }
    C.unsub.catch(() => {
      Ze[b] === C && delete Ze[b];
    }), Ze[b] = C;
  }
  function ue(f, b) {
    var y;
    for (const C of ["daily", "hourly"]) {
      const H = Om(f, b, C);
      ((y = Ze[C]) == null ? void 0 : y.entityId) !== (H == null ? void 0 : H.entity_id) && (R(C), H && de(f, C, H.entity_id));
    }
  }
  const ve = (f, b, y, C = !1) => f.callWS({
    type: "history/history_during_period",
    start_time: y.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [b],
    minimal_response: C,
    no_attributes: C,
    significant_changes_only: !1
  });
  async function Se(f, b) {
    var $, fe, ee;
    const y = Ia(f, b, "pressure");
    if (!y) return;
    const C = y.stateObj.entity_id, H = await ve(f, C, new Date(Date.now() - 3 * jt)), U = (ee = (fe = ($ = H == null ? void 0 : H[C]) == null ? void 0 : $.find((be) => {
      var xe;
      return typeof ((xe = be.a) == null ? void 0 : xe.pressure) == "number";
    })) == null ? void 0 : fe.a) == null ? void 0 : ee.pressure;
    Ce.pressureHistory = typeof U == "number" ? { entityId: C, value: U } : void 0;
  }
  async function Te(f, b) {
    var fe;
    const y = Ia(f, b, "temperature");
    if (!y) return;
    const C = y.stateObj.entity_id, H = fs(/* @__PURE__ */ new Date()), U = await ve(f, C, new Date(H.getTime() - lm * Qn)), $ = /* @__PURE__ */ new Map();
    for (const ee of (U == null ? void 0 : U[C]) ?? []) {
      const be = (fe = ee.a) == null ? void 0 : fe.temperature, xe = new Date((ee.lc ?? ee.lu) * 1e3);
      if (typeof be != "number" || xe >= H) continue;
      const Ae = xe.toDateString();
      $.set(Ae, Math.max($.get(Ae) ?? -1 / 0, be));
    }
    Ce.temperatureHistory = { entityId: C, dailyHighs: [...$.values()], days: [...$.entries()].map(([ee, be]) => ({ date: new Date(ee), high: be })) };
  }
  async function $e(f) {
    const b = lp(f);
    if (!b) return;
    const y = await f.callWS({ type: "recorder/statistic_during_period", statistic_id: b, rolling_window: { duration: { hours: 24 } } });
    Ce.rain = { entityId: b, change: (y == null ? void 0 : y.change) ?? void 0 };
  }
  function tt() {
    const f = l == null ? void 0 : l();
    if (!f || Q || typeof f.callWS != "function") return;
    const b = Gn(f);
    Ce.lastFetch = Date.now(), [Se(f, b), Te(f, b), $e(f)].forEach((y) => y.then(() => zo(), () => {
    }));
  }
  async function Ya() {
    const f = l == null ? void 0 : l();
    if (!f) return;
    const b = Ia(f, Gn(f), "temperature");
    if (!b) return;
    const y = b.stateObj.entity_id, C = fs(/* @__PURE__ */ new Date());
    try {
      const H = await ve(f, y, C), U = ($) => ((H == null ? void 0 : H[y]) ?? []).map((fe) => {
        var ee;
        return { time: fe.lu * 1e3, value: (ee = fe.a) == null ? void 0 : ee[$] };
      }).filter((fe) => typeof fe.value == "number");
      Ce.todayHistory = { day: C.toDateString(), fetched: Date.now(), temperature: U("temperature"), humidity: U("humidity") }, zo();
    } catch {
    }
  }
  async function Fe(f) {
    const b = l == null ? void 0 : l();
    if (b)
      try {
        const y = await ve(b, f, new Date(Date.now() - 24 * jt), !0), C = ((y == null ? void 0 : y[f]) ?? []).filter((U) => ea(U.s)), H = Math.max(1, Math.ceil(C.length / 48));
        Ce.aqHistory = { entityId: f, points: C.filter((U, $) => $ % H === 0).map((U) => ({ label: Tn(new Date(U.lu * 1e3), b), value: Number(U.s) })) }, zo();
      } catch {
      }
  }
  function fo(f) {
    Ce.categories === void 0 && (Ce.categories = null, Promise.resolve().then(() => f.callWS({ type: "integration/descriptions" })).then((b) => {
      Ce.categories = Wm(b);
    }, () => {
      Ce.categories = {};
    }).then(() => zo()));
  }
  function Gn(f) {
    var y;
    const b = Object.keys(f.states || {}).filter((C) => C.startsWith("weather.") && Ll(f, C)).sort();
    return i && ((y = f.states) != null && y[i]) ? [i, ...b.filter((C) => C !== i)] : b;
  }
  const ho = (f) => Ce.categories ? { air: Vm(f, Ce.categories), pollen: jm(f, Ce.categories) } : { air: [], pollen: [] };
  function oa(f, b, y, C) {
    if (u === "line") return '<span class="wbWx wbS' + b + ' wbLineIcon" aria-hidden="true">' + ip(f, y || f === "clear-night") + "</span>";
    if (u === "smooth") {
      const H = Dh(f, b === 90, y, I + "g-" + C);
      return '<span class="wbWx wbS' + b + " wb" + H.k[0].toUpperCase() + H.k.slice(1) + (H.night ? " wbNight" : "") + '" aria-hidden="true">' + H.svg + "</span>";
    }
    return '<span class="wbWx wbS' + b + '" aria-hidden="true"><canvas data-wb-wx="' + Oe(Mc(f, y)) + '" data-size="' + b + '"></canvas></span>';
  }
  const Xe = () => B("daily").filter((f) => f.templow != null).slice(0, em);
  function pt(f, b) {
    const y = new Date(b.datetime), C = /* @__PURE__ */ new Date();
    return Sl(y, C) ? Re.today : Sl(y, new Date(C.getTime() + Qn)) ? Re.tomorrow : ou(y, f);
  }
  const on = (f, b, y) => y === 0 ? pt(f, b) : ou(new Date(b.datetime), f);
  function eo(f, b) {
    var xe, Ae, Je, Ve;
    const y = Fm(f, b);
    if (!y) return "";
    const C = Xe(), H = E.openDay !== void 0 ? C[E.openDay] : void 0, U = Ia(f, b, "temperature"), $ = C[0], fe = $ && Sl(new Date($.datetime), /* @__PURE__ */ new Date()), ee = ((Ae = (xe = f.config) == null ? void 0 : xe.unit_system) == null ? void 0 : Ae.temperature) || ((Je = y.attributes) == null ? void 0 : Je.temperature_unit) || "";
    let be = '<div class="wbCard wbWeather' + (H ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (H ? " inert" : "") + '><div class="wbNow">' + (k ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Oe(Re.openPage) + '">' : '<div class="wbCurrent">') + oa(y.state, 90, Im(f), "now") + '<div class="wbTempBlock">' + (U && ea(U.value) ? '<div class="wbTemp"><span class="wbDeg">' + Oe(Pt(Math.round(Number(U.value)), f.locale)) + '</span><span class="wbUnit">' + Oe(ee) + "</span></div>" : "") + '<div class="wbPlace">' + Oe(((Ve = f.config) == null ? void 0 : Ve.location_name) ?? "") + "</div></div>" + (k ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Oe(fr(f, y)) + "</div>" + (fe && $.templow != null ? '<div class="wbRange">' + Oe(Cn(Re.range, { high: pa(f, $.temperature), low: pa(f, $.templow) })) + "</div>" : "") + "</div></div>";
    if (be += mt(f) + wn(f), C.length) {
      const _e = fe && U && ea(U.value) ? pa(f, U.value) : "", Qe = (Ue, Ee, gt) => Ue === 0 && _e ? '<span class="wbAsDay">' + Oe(Ee) + '</span><span class="wbAsNow">' + Oe(gt) + "</span>" : Oe(Ee);
      be += '<div class="wbColumns" role="list">' + C.map((Ue, Ee) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Ee + '" data-wb-focus="col-' + Ee + '"><span class="wbDay">' + Qe(Ee, on(f, Ue, Ee), Re.now) + "</span>" + oa(Ue.condition ?? "cloudy", 60, !1, "col" + Ee) + '<span class="wbTemps"><span class="wbHi">' + Qe(Ee, pa(f, Ue.temperature), _e) + '</span><span class="wbLo">' + Oe(pa(f, Ue.templow)) + "</span></span></button>").join("") + "</div>", be += '<div class="wbHalves" role="list">' + C.map((Ue, Ee) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Ee + '" data-wb-focus="half-' + Ee + '">' + oa(Ue.condition ?? "cloudy", 40, !1, "half" + Ee) + '<span class="wbText"><span class="wbName">' + Oe(pt(f, Ue)) + '</span><span class="wbSub">' + Oe(Cn(Re.highLow, { high: pa(f, Ue.temperature), low: pa(f, Ue.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return be + "</div>" + (H ? vt(f, b, H) : "") + "</div>";
  }
  const Ye = {
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
  function Tt(f) {
    const b = Date.now(), y = B("hourly").filter((Ae) => new Date(Ae.datetime).getTime() > b - jt).slice(0, 13);
    if (y.length < 2) return "";
    const C = (Ae) => Tn(new Date(Ae.datetime), f), H = (Ae) => Ye[Ae.condition] || "", U = (Ae) => ht[Ae.condition] || Ae.condition;
    let $ = H(y[0]);
    if (!$) return "";
    let fe = y[0], ee = 0;
    for (const Ae of y.slice(1))
      ee === 2 || U(Ae) === U(fe) || !H(Ae) || ($ += (ee ? " and " : ", ") + H(Ae) + " from " + C(Ae), fe = Ae, ee++);
    const be = Number(y[0].temperature), xe = y.filter((Ae) => ea(Ae.temperature));
    if (ea(be) && xe.length) {
      const Ae = xe.reduce((Ve, _e) => Number(_e.temperature) < Number(Ve.temperature) ? _e : Ve), Je = xe.reduce((Ve, _e) => Number(_e.temperature) > Number(Ve.temperature) ? _e : Ve);
      be - Number(Ae.temperature) >= 3 ? $ += ", down to " + pa(f, Ae.temperature) + " by " + C(Ae) : Number(Je.temperature) - be >= 3 && ($ += ", up to " + pa(f, Je.temperature) + " by " + C(Je));
    }
    return $[0].toUpperCase() + $.slice(1) + ".";
  }
  const mt = (f) => {
    const b = Tt(f);
    return b ? '<div class="wbSummary"><p class="wbSummaryText">' + Oe(b) + "</p></div>" : "";
  };
  function wn(f) {
    const [b, y] = oc[A == null ? void 0 : A()] || oc.day, C = Date.now(), H = B("hourly").filter((U) => {
      const $ = new Date(U.datetime), fe = $.getHours();
      return $.getTime() > C - jt / 2 && fe >= b && fe < y && ea(U.temperature);
    }).slice(0, 4);
    return H.length ? '<div class="wbNextHours" role="list">' + H.map((U, $) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Oe(Tn(new Date(U.datetime), f)) + "</span>" + oa(U.condition ?? "cloudy", 40, U.is_daytime === !1, "hr" + $) + '<span class="wbHourTemp">' + Oe(pa(f, U.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function hs(f) {
    const b = f.getTime(), y = Date.now() - jt;
    return B("hourly").filter((C) => {
      const H = new Date(C.datetime).getTime();
      return H >= b && H < b + Qn && H > y;
    });
  }
  function An(f) {
    if (!f.length) return ["temperature"];
    const b = ["temperature"];
    return f.some((y) => y.precipitation != null || y.precipitation_probability != null) && b.push("precipitation"), f.some((y) => y.humidity != null) && b.push("humidity"), b;
  }
  function vt(f, b, y) {
    const C = fs(new Date(y.datetime)), H = hs(C), U = An(H), $ = U.includes(E.dayMode) ? E.dayMode : "temperature", fe = (ee) => ee === "humidity" ? Re.humidity : Re.modes[ee];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + oa(y.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Oe(pt(f, y)) + '</span><span class="wbSub">' + Oe(Cn(Re.highLow, { high: pa(f, y.temperature), low: pa(f, y.templow) })) + '</span></div><button class="wbBack" title="' + Oe(Re.back) + '" data-wb="close-day" data-wb-focus="back-day">' + mr(zt.back) + "</button></div>" + (U.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + U.map((ee) => '<button aria-pressed="' + (ee === $) + '" data-wb="day-mode" data-mode="' + ee + '" data-wb-focus="day-mode-' + ee + '">' + Oe(fe(ee)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Um(Kt(f, b, C, H, $)) + "</div></div>";
  }
  function Kt(f, b, y, C, H) {
    var no;
    const U = y.getTime(), $ = Date.now(), fe = Sl(y, /* @__PURE__ */ new Date()), ee = (Dt) => (Dt - U) / bn, be = (Dt) => Tn(new Date(Dt), f), xe = (Dt) => new Date(Dt.datetime).getTime(), Ae = [0, 3, 6, 9, 12, 15, 18, 21].map((Dt) => ({ t: Dt * 60, label: be(U + Dt * jt), minor: Dt % 6 !== 0 })), { rise: Je, set: Ve } = Cl(f, y), _e = [], Qe = [];
    Je && (_e.push({ t: ee(Je.getTime()), label: be(Je.getTime()), rise: !0 }), Qe.push([0, ee(Je.getTime())])), Ve && (_e.push({ t: ee(Ve.getTime()), label: be(Ve.getTime()), rise: !1 }), Qe.push([ee(Ve.getTime()), hd]));
    const Ue = md(f);
    !Je && !Ve && Ue && kc(new Date(U + Qn / 2), Ue.lat, Ue.lon) < 0 && Qe.push([0, hd]);
    const Ee = fe ? ee($) : void 0, gt = { hours: Ae, sun: _e, night: Qe };
    if (!C.length && !fe) return { ...gt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Re.noHourly };
    if (H === "precipitation") {
      const Dt = C.some((Fa) => Fa.precipitation_probability != null), Zo = C.map((Fa) => ({ t: ee(xe(Fa)), v: Number((Dt ? Fa.precipitation_probability : Fa.precipitation) ?? 0) })), Rn = ps(f, q(f, "hourly"), "precipitation"), ko = Math.max(0, ...Zo.map((Fa) => Fa.v)), Mo = Dt ? 100 : cu(0, Math.max(ko, 1), [0.5, 1, 2, 5, 10]).max, yi = (Fa) => Dt ? Pt(Fa, f.locale) + "%" : Pt(Fa, f.locale, { maximumFractionDigits: 1 }) + " " + Rn, Lr = Zo.find((Fa) => Fa.v === ko);
      return {
        ...gt,
        kind: "bars",
        points: Zo,
        min: 0,
        max: Mo,
        ticks: [0, Mo / 2, Mo],
        format: yi,
        now: Ee !== void 0 ? { t: Ee, v: 0 } : void 0,
        peak: Lr && ko > 0 ? { t: Lr.t + 30, v: Lr.v, label: yi(Lr.v) } : void 0,
        note: ko > 0 ? void 0 : Re.noRain
      };
    }
    const ot = H === "humidity" ? "humidity" : "temperature", Rt = C.filter((Dt) => Dt[ot] != null && (!fe || xe(Dt) >= $)).map((Dt) => ({ t: ee(xe(Dt)), v: Number(Dt[ot]) }));
    let Ne, ta = [];
    if (Ee !== void 0) {
      const Dt = Ia(f, b, ot);
      Dt && ea(Dt.value) && (Ne = { t: Ee, v: Number(Dt.value) }, Rt.unshift(Ne)), ta = (((no = Ce.todayHistory) == null ? void 0 : no.day) === y.toDateString() ? Ce.todayHistory[ot] : []).filter((Rn) => Rn.time <= $).map((Rn) => ({ t: Math.max(0, ee(Rn.time)), v: Rn.value })), Ne && ta.length && ta.push(Ne);
    }
    const ia = [...ta, ...Rt];
    if (!ia.length) return { ...gt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Re.noHourly };
    const Qa = ia.map((Dt) => Dt.v), za = cu(Math.min(...Qa), Math.max(...Qa), ot === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    ot === "humidity" && (za.min = Math.max(0, za.min), za.max = Math.min(100, za.max), za.ticks = za.ticks.filter((Dt) => Dt >= 0 && Dt <= 100));
    const Tr = ot === "humidity" ? (Dt) => Pt(Dt, f.locale) + "%" : (Dt) => pa(f, Dt), kn = ot === "temperature" ? ia.reduce((Dt, Zo) => Zo.v > Dt.v ? Zo : Dt) : void 0;
    return { ...gt, kind: "line", points: Rt, past: ta, ...za, format: Tr, now: Ne, peak: kn ? { ...kn, label: Tr(kn.v) } : void 0 };
  }
  function ms(f) {
    const b = ["temperature"];
    return f.some((y) => y.precipitation_probability != null || y.precipitation != null) && b.push("precipitation"), f.some((y) => y.wind_speed != null) && b.push("wind"), b;
  }
  function Ho(f, b, y = Kp) {
    var U, $;
    const C = B("daily"), H = [];
    for (let fe = 0; fe < y; fe++) for (const ee of [!1, !0]) {
      const be = f.getTime() + (fe * 24 + (ee ? 12 : 0)) * jt, xe = be + 12 * jt, Ae = {};
      b.forEach((Ve) => {
        const _e = new Date(Ve.datetime).getTime();
        Ve.condition && _e >= be && _e < xe && (Ae[Ve.condition] = (Ae[Ve.condition] ?? 0) + (rm.has(Ve.condition) ? 2 : 1));
      });
      let Je = (U = Object.entries(Ae).sort((Ve, _e) => _e[1] - Ve[1])[0]) == null ? void 0 : U[0];
      if (!Je) {
        const Ve = new Date(be).toDateString();
        Je = (($ = C.find((_e) => new Date(_e.datetime).toDateString() === Ve)) == null ? void 0 : $.condition) ?? "cloudy";
      }
      H.push({ cond: ee && Je === "sunny" ? "clear-night" : Je, night: ee });
    }
    return H;
  }
  function gs(f, b, y) {
    const C = q(f, "hourly"), H = b.precipitation_probability != null ? Pt(b.precipitation_probability, f.locale) + "%" : "", U = b.precipitation ? Pt(b.precipitation, f.locale) + " " + ps(f, C, "precipitation") : "";
    switch (y) {
      case "precipitation":
        return H ? [H, U] : [U || "–", ""];
      case "wind":
        return b.wind_speed != null ? [Pt(Math.round(b.wind_speed), f.locale), ps(f, C, "wind_speed")] : ["–", ""];
      default:
        return [pa(f, b.temperature), (b.precipitation_probability ?? 0) >= 20 ? H : ""];
    }
  }
  function Jt(f, b, y) {
    const [C, H] = oc[A == null ? void 0 : A()] || oc.day, U = [];
    for (let $ = 0; $ < 4 && U.length < 3; $++) {
      const fe = /* @__PURE__ */ new Date();
      fe.setHours(0, 0, 0, 0), fe.setDate(fe.getDate() + $);
      const ee = new Date(fe);
      ee.setHours(H, 0, 0, 0), fe.setHours(C, 0, 0, 0), !(ee.getTime() <= y || !b.some((be) => {
        const xe = new Date(be.datetime).getTime();
        return xe >= fe.getTime() && xe <= ee.getTime();
      })) && U.push({ a: fe.getTime(), b: ee.getTime(), label: pt(f, { datetime: fe.toISOString() }) });
    }
    return U;
  }
  function mo(f, b, y, C, H, U) {
    const $ = (y.b - b.a) / jt, fe = (Ee) => ((Ee - b.a) / jt).toFixed(3), ee = 80, be = 32, xe = [];
    for (const Ee = new Date(b.a - Qn); Ee.getTime() < y.b + Qn; Ee.setDate(Ee.getDate() + 1)) {
      const { rise: gt, set: ot } = Cl(f, new Date(Ee));
      gt && ot && xe.push({ rise: gt.getTime(), set: ot.getTime() });
    }
    const Ae = (Ee, gt) => ee - (ee - be) * Math.sin(Math.PI * (gt - Ee.rise) / (Ee.set - Ee.rise)), Je = (Ee) => !xe.some((gt) => Ee >= gt.rise && Ee <= gt.set);
    let Ve = "", _e = "", Qe = "";
    xe.forEach((Ee, gt) => {
      const ot = [];
      for (let Ne = Ee.rise; Ne <= Ee.set; Ne += 15 * bn) ot.push(fe(Ne) + "," + Ae(Ee, Ne).toFixed(2));
      ot.push(fe(Ee.set) + "," + ee), Ve += '<polyline class="wbLineArc" points="' + ot.join(" ") + '"/>';
      const Rt = xe[gt + 1];
      Rt && (Ve += '<rect class="wbLineNight" x="' + fe(Ee.set) + '" y="0" width="' + ((Rt.rise - Ee.set) / jt).toFixed(3) + '" height="100"/>'), [[Ee.rise, "↑"], [Ee.set, "↓"]].forEach(([Ne, ta]) => {
        Ne < b.a || Ne > y.b || (_e += '<line class="wbLineEdge" x1="' + fe(Ne) + '" x2="' + fe(Ne) + '" y1="0" y2="100"/>', Qe += '<span class="wbLineTime" style="left:' + U(Ne) + '">' + ta + " " + Oe(Tn(new Date(Ne), f)) + "</span>");
      });
    });
    const Ue = xe.find((Ee) => H >= Ee.rise && H <= Ee.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + $ + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Ve + _e + '<line class="wbLineHorizon" x1="0" x2="' + $ + '" y1="' + ee + '" y2="' + ee + '"/></svg>' + Qe + (Ue ? '<span class="wbLineNow" style="left:' + U(H) + ";top:" + Ae(Ue, H) + '%">' + ip("sunny", !1) + "</span>" : "") + C.filter((Ee) => Ee.entry && !Ee.now).map((Ee) => '<span class="wbLineGlyph' + Ee.edge + '" style="left:' + U(Ee.t) + '">' + ip(Ee.entry.condition ?? "cloudy", Je(Ee.t)) + "</span>").join("");
  }
  function nt(f, b) {
    delete re.hourly;
    const y = E.hourlyView === "bars" ? "bars" : "strip", C = '<div class="wbHeader"><h2 class="wbTitle">' + Oe(y === "bars" ? Re.nextDays : Re.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Oe(Re.showAs) + '">' + ["strip", "bars"].map((Ne) => '<button aria-pressed="' + (Ne === y) + '" data-wb="hourly-view" data-view="' + Ne + '" data-wb-focus="hourly-view-' + Ne + '">' + Oe(Re.views[Ne]) + "</button>").join("") + "</div></div>";
    if (y === "bars") return Un(f, b, C);
    const H = B("hourly"), U = Math.floor(Date.now() / bn) * bn, $ = H.filter((Ne) => new Date(Ne.datetime).getTime() > U - jt);
    if (!$.length) return "";
    const fe = ms($), ee = fe.includes(E.hourlyMode) ? E.hourlyMode : "temperature", be = Jt(f, H, U);
    if (!be.length) return "";
    const xe = be[0], Ae = be[be.length - 1], Je = (xe.b - xe.a) / jt, Ve = (Ne) => "calc(var(--wb-u) * " + ((Ne - xe.a) / jt).toFixed(3) + ")", _e = new Date(xe.a);
    _e.setHours(6, 0, 0, 0), _e.getTime() > xe.a && _e.setDate(_e.getDate() - 1);
    const Qe = Math.ceil((Ae.b - _e.getTime()) / Qn);
    u !== "line" && (re.hourly = { segs: Ho(_e, H, Qe), seed: _e.getDate(), columns: Qe });
    const Ue = (Ne) => Ne === xe.a ? " wbFirst" : Ne === Ae.b ? " wbLast" : "", Ee = [];
    for (let Ne = xe.a; Ne < Ae.b; ) {
      const ta = new Date(Ne);
      ta.setHours(24, 0, 0, 0);
      const ia = Math.min(ta.getTime(), Ae.b);
      Ee.push({ a: Ne, b: ia, label: pt(f, { datetime: new Date(Ne).toISOString() }), page: be.find((Qa) => Qa.a >= Ne && Qa.a < ia) || be.find((Qa) => Qa.a < ia && Qa.b > Ne) }), Ne = ia;
    }
    const gt = U > xe.a && U < Ae.b ? Math.floor((U - xe.a) / (2 * jt)) * 2 : 0, ot = [];
    for (let Ne = xe.a; Ne <= Ae.b; Ne += jt) {
      const ta = new Date(Ne), ia = Ue(Ne);
      !ia && ta.getHours() % am || !ia && (Math.abs(xe.a - Ne) < 2 * jt || Math.abs(Ae.b - Ne) < 2 * jt) || U >= xe.a && Math.abs(Ne - U) < 1.5 * jt && !ia || ot.push({ t: Ne, edge: ia, label: Tn(ta, f), entry: Ne >= U - jt ? H.find((Qa) => new Date(Qa.datetime).getTime() === Ne) : void 0 });
    }
    U > xe.a && U < xe.b && ot.push({ t: U, edge: U - xe.a < jt ? " wbFirst" : xe.b - U < jt ? " wbLast" : "", label: Re.now, entry: $[0], now: !0 });
    const Rt = (Ne, ta) => '<span class="wbMark' + Ne.edge + (Ne.now ? " wbNowMark" : "") + '" style="left:' + Ve(Ne.t) + '">' + ta + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + C + (fe.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + fe.map((Ne) => '<button aria-pressed="' + (Ne === ee) + '" data-wb="hourly-mode" data-mode="' + Ne + '" data-wb-focus="hourly-mode-' + Ne + '">' + Oe(Re.modes[Ne]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Oe(Re.nextHours) + '" data-span="' + Je + '" data-start="' + gt + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Je + ");width:calc(var(--wb-u) * " + (Ae.b - xe.a) / jt + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((Ae.b - xe.a) / (2 * jt)) + 1)].map((Ne, ta) => '<i class="wbSnap" style="left:' + Ve(xe.a + ta * 2 * jt) + '"></i>').join("") + '<div class="wbDays">' + Ee.map((Ne, ta) => {
      var ia;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Ne.b - Ne.a) / jt).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (ta === 0 ? gt : ((((ia = Ne.page) == null ? void 0 : ia.a) ?? Ne.a) - xe.a) / jt) + '" data-wb-focus="hours-day-' + ta + '">' + Oe(Ne.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + ot.map((Ne) => Rt(Ne, Oe(Ne.label))).join("") + "</div>" + (u === "line" ? '<div class="wbSky wbLineSky">' + mo(f, xe, Ae, ot, U, Ve) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Ve(_e.getTime()) + ";width:calc(var(--wb-u) * " + Qe * 24 + ')"><canvas data-wb-strip="hourly"' + (u === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (U > xe.a ? '<i class="wbPast" style="width:' + Ve(Math.min(U, Ae.b)) + '"></i><i class="wbNowLine" style="left:' + Ve(U) + '"></i>' : "") + Ee.slice(1).map((Ne) => '<i class="wbMidnight" style="left:' + Ve(Ne.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + ot.map((Ne) => {
      if (!Ne.entry) return "";
      const [ta, ia] = gs(f, Ne.entry, ee);
      return Rt(Ne, '<span class="wbPrimaryV">' + Oe(ta) + '</span><span class="wbSecondary">' + Oe(ia) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function El(f) {
    const b = nm, y = b.findIndex(([ee]) => ee >= f);
    if (y <= 0) return "rgb(" + b[y < 0 ? b.length - 1 : 0][1].join(",") + ")";
    const [C, H] = b[y - 1], [U, $] = b[y], fe = (f - C) / (U - C);
    return "rgb(" + H.map((ee, be) => Math.round(ee + ($[be] - ee) * fe)).join(",") + ")";
  }
  function Un(f, b, y) {
    var Ve;
    const C = B("daily").filter((_e) => ea(_e.templow) && ea(_e.temperature)).slice(0, 7);
    if (!C.length) return "";
    const H = Math.min(...C.map((_e) => Number(_e.templow))), U = Math.max(...C.map((_e) => Number(_e.temperature))), $ = Math.max(1, U - H), fe = (_e) => Math.max(0, Math.min(100, (_e - H) / $ * 100)).toFixed(2), ee = /F/.test(ps(f, q(f, "daily"), "temperature")), be = (_e) => ee ? (_e - 32) / 1.8 : _e, xe = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((_e) => El(be(H + _e * $)) + " " + _e * 100 + "%").join(",") + ")", Ae = (Ve = Ia(f, b, "temperature")) == null ? void 0 : Ve.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (ms(B("hourly").filter((_e) => new Date(_e.datetime).getTime() > Date.now() - jt)).length > 1 ? " wbTabbed" : "") + '">' + y + '<div class="wbDayBars" role="list">' + C.map((_e, Qe) => {
      const Ue = pt(f, _e), Ee = Sl(new Date(_e.datetime), /* @__PURE__ */ new Date()), gt = Number(_e.templow), ot = Number(_e.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Oe(Cn(Re.rangeRow, { day: Ue, low: pa(f, gt), high: pa(f, ot) })) + '"><span class="wbRangeDay">' + Oe(Ue) + "</span>" + oa(_e.condition, 40, !1, "r" + Qe) + '<span class="wbRangeLo">' + Oe(pa(f, gt)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + xe + ";clip-path:inset(0 " + (100 - fe(ot)) + "% 0 " + fe(gt) + '% round 4px)"></i>' + (Ee && ea(Ae) ? '<i class="wbRangeNow" style="left:' + fe(Number(Ae)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Oe(pa(f, ot)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const wa = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Ke = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], dt = (f, b) => {
    if (b <= f[0][0]) return f[0][1];
    for (let y = 1; y < f.length; y++) if (b <= f[y][0]) {
      const [C, H] = f[y - 1], [U, $] = f[y];
      return zm(H, $, (b - C) / (U - C));
    }
    return f[f.length - 1][1];
  }, xa = (f, b, y) => {
    if (!b || !y) return wa[5][1];
    const C = (f.getTime() - y.getTime()) / bn;
    return C >= -90 ? dt(Ke, C) : dt(wa, (f.getTime() - b.getTime()) / bn);
  }, wt = (f) => (f >= 60 ? Math.floor(f / 60) + "h " : "") + f % 60 + "m";
  function Pe(f) {
    const b = le, { rise: y, set: C } = Cl(f, b), H = y && C ? Math.round((C.getTime() - y.getTime()) / bn) : 0, U = Math.floor(H / 60), $ = H % 60, fe = (Rt) => Rt ? Tn(Rt, f) : "–", ee = new Date(b);
    ee.setDate(ee.getDate() + 1);
    const be = Cl(f, ee), xe = be.rise && be.set ? Math.round((be.set.getTime() - be.rise.getTime()) / bn) : 0, Ae = new Date(b);
    Ae.setDate(Ae.getDate() - 1);
    const Je = !!(y && C && b >= y && b <= C), Ve = !!(y && b < y), _e = Je ? y : Ve ? Cl(f, Ae).set : C, Qe = Je ? C : Ve ? y : be.rise, Ue = _e && Qe ? Math.min(1, Math.max(0, (b.getTime() - _e.getTime()) / (Qe.getTime() - _e.getTime()))) : 0, Ee = Qe ? Math.max(0, Math.round((Qe.getTime() - b.getTime()) / bn)) : 0, gt = Qe ? wt(Ee) : "–", ot = Je ? Re.untilSunset : Re.untilSunrise;
    return Fn({
      icon: zt.sunny,
      name: Re.sun,
      sub: H ? Cn(Re.daylightShort, { hours: U, minutes: $ }) : void 0,
      cls: "wbSunTile",
      callouts: [[Re.callout.riseTomorrow, fe(be.rise)], [Re.callout.setTomorrow, fe(be.set)], ...xe ? [[Re.callout.dayTomorrow, Math.floor(xe / 60) + "h " + xe % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + xa(b, y, C) + '"><svg class="wbSunTrack" data-up="' + (Je ? 1 : 0) + '" data-f="' + Ue.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + Oe(gt) + '</span><span class="wbSunWord">' + Oe(ot) + '</span></div><span class="wbSunAt wbSunRise">' + Oe(fe(y)) + '</span><span class="wbSunAt wbSunSet">' + Oe(fe(C)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      sc(Po(gt, ""))
    });
  }
  const At = 22;
  function Et(f) {
    const b = Math.round(f.clientWidth), y = Math.round(f.clientHeight), C = At, H = C / 2, U = b + "x" + y + ":" + f.dataset.f + ":" + f.dataset.up;
    if (b < C * 3 || y < C * 3 || f.dataset.drawn === U) return;
    f.dataset.drawn = U;
    const $ = "M" + H + " " + (y - C) + "V" + C + "A" + H + " " + H + " 0 0 1 " + C + " " + H + "H" + (b - C) + "A" + H + " " + H + " 0 0 1 " + (b - H) + " " + C + "V" + (y - C), fe = "M" + (b - H) + " " + (y - C) + "A" + H + " " + H + " 0 0 1 " + (b - C) + " " + (y - H) + "H" + C + "A" + H + " " + H + " 0 0 1 " + H + " " + (y - C), ee = 16, be = 6, xe = "M" + ee + " 0H" + (b - ee) + "A" + ee + " " + ee + " 0 0 1 " + b + " " + ee + "V" + (y - ee) + "A" + ee + " " + ee + " 0 0 1 " + (b - ee) + " " + y + "H" + ee + "A" + ee + " " + ee + " 0 0 1 0 " + (y - ee) + "V" + ee + "A" + ee + " " + ee + " 0 0 1 " + ee + " 0ZM" + (C + be) + " " + C + "A" + be + " " + be + " 0 0 0 " + C + " " + (C + be) + "V" + (y - C - be) + "A" + be + " " + be + " 0 0 0 " + (C + be) + " " + (y - C) + "H" + (b - C - be) + "A" + be + " " + be + " 0 0 0 " + (b - C) + " " + (y - C - be) + "V" + (C + be) + "A" + be + " " + be + " 0 0 0 " + (b - C - be) + " " + C + "Z", Ae = f.dataset.up === "1", Je = Number(f.dataset.f) || 0, Ve = "http://www.w3.org/2000/svg";
    f.setAttribute("viewBox", "0 0 " + b + " " + y);
    const _e = document.createElementNS(Ve, "path");
    _e.setAttribute("d", Ae ? $ : fe), f.replaceChildren(_e);
    const Qe = _e.getTotalLength(), Ue = _e.getPointAtLength(Qe * Je), Ee = Ae ? Qe : 0;
    f.innerHTML = '<defs><mask id="' + I + 'sun-day"><path d="' + $ + '" fill="none" stroke="#fff" stroke-width="' + C * 2 + '"></path></mask><mask id="' + I + 'sun-done"><path d="' + $ + '" fill="none" stroke="#fff" stroke-width="' + C * 2 + '" stroke-dasharray="' + (Ae ? (Ee * Je).toFixed(1) + " " + (Ee + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + xe + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + xe + '" mask="url(#' + I + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + xe + '" mask="url(#' + I + 'sun-done)"></path><circle class="wbSunDot' + (Ae ? "" : " wbSunNight") + '" cx="' + Ue.x.toFixed(1) + '" cy="' + Ue.y.toFixed(1) + '" r="' + H + '"></circle>';
  }
  const It = typeof ResizeObserver == "function" ? new ResizeObserver((f) => f.forEach((b) => Et(b.target))) : null;
  function En() {
    It == null || It.disconnect(), M.querySelectorAll("svg.wbSunTrack").forEach((f) => {
      Et(f), It == null || It.observe(f);
    });
  }
  function vs(f, b, y) {
    const C = ($) => I + "moon-" + $, H = f > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + C("terminator") + ')" d="' + Gm(61, 61, 57.9, f) + '"' + (b ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", U = ($, fe, ee, be, xe, Ae) => '<filter id="' + C($) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + fe + '" numOctaves="' + ee + '" seed="' + be + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Je) => "<feFunc" + Je + ' type="linear" slope="' + xe + '" intercept="' + Ae + '"></feFunc' + Je + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + C("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + C("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + C("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + C("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + C("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + U("mottle", "0.045", 4, 3, 1.8, -0.4) + U("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + C("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + C("fill") + ')"></circle><g' + (y ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + C("soften") + ')">' + Zm.map(([$, fe, ee, be, xe, Ae]) => '<ellipse cx="' + $ + '" cy="' + fe + '" rx="' + ee + '" ry="' + be + '" fill-opacity="' + Ae + '" transform="rotate(' + xe + " " + $ + " " + fe + ')"></ellipse>').join("") + "</g>" + Km.map(([$, fe, ee]) => '<circle class="wbCrater" cx="' + $ + '" cy="' + fe + '" r="' + ee + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + C("glow") + ')">' + $m.map(([$, fe]) => '<line x1="54.4" y1="95" x2="' + $ + '" y2="' + fe + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + C("glow") + ')">' + uu.map(([$, fe, ee]) => '<circle cx="' + $ + '" cy="' + fe + '" r="' + ee * 2 + '"></circle>').join("") + "</g>" + uu.map(([$, fe, ee]) => '<circle class="wbBrightCenter" cx="' + $ + '" cy="' + fe + '" r="' + ee + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + C("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + C("grain") + ')"></rect>' + H + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function wr(f) {
    const b = qe, y = md(f), C = (y == null ? void 0 : y.lat) ?? 0, H = sp(b), U = du(f), $ = U ? f.states[U] : void 0, fe = Vs($) && mm.includes($.state) ? $.state : Hm(H.phase), { rise: ee, set: be } = y ? Nm(b, y.lat, y.lon) : {}, xe = H.phase > 0.5 != C < 0, Ae = Pt(Math.round(H.fraction * 100), f.locale) + "%", Je = ee ?? be;
    return Je && Tn(Je, f), Fn({
      icon: zt.night,
      name: Re.moon,
      sub: Re.phases[fe],
      callouts: [...ee ? [[Re.callout.moonrise, Tn(ee, f)]] : [], ...be ? [[Re.callout.moonset, Tn(be, f)]] : [], [Re.callout.lit, Ae]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + vs(H.fraction, xe, C < 0) + "</div>" + sc(Po(Pt(Math.round(H.fraction * 100), f.locale), "%"))
    });
  }
  function Ba(f, b) {
    var _e;
    const y = Ia(f, b, "wind_speed");
    if (!y || !ea(y.value)) return "";
    const C = Ia(f, b, "wind_gust_speed"), H = Ia(f, b, "wind_bearing"), U = H && ea(H.value) ? Number(H.value) : void 0, $ = qm(Number(y.value), (_e = y.stateObj.attributes) == null ? void 0 : _e.wind_speed_unit), fe = vc(f, y.stateObj, "wind_speed", y.value), ee = U !== void 0 ? Re.cardinal[hm[((U + 11.25) / 22.5 | 0) % 16]] : void 0, be = C ? ru(f, C.stateObj, "wind_gust_speed", C.value) : void 0, xe = [ee ? Cn(Re.windFrom, { direction: ee }) : void 0, $ !== void 0 ? $ + " " + Re.beaufort : void 0].filter(Boolean).join(" · ") || be, Ae = (Qe, Ue) => {
      const Ee = (Qe - 90) * Math.PI / 180;
      return [100 + Ue * Math.cos(Ee), 100 + Ue * Math.sin(Ee)];
    }, Je = Array.from({ length: 36 }, (Qe, Ue) => Ue * 10).map((Qe) => {
      const Ue = Qe % 90 === 0, [Ee, gt] = Ae(Qe, 97), [ot, Rt] = Ae(Qe, Ue ? 83 : 89);
      return '<line class="wbTick' + (Ue ? " wbMajor" : "") + '" x1="' + Ee + '" y1="' + gt + '" x2="' + ot + '" y2="' + Rt + '"></line>';
    }).join(""), Ve = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Qe, Ue]) => {
      const [Ee, gt] = Ae(Ue, 64);
      return '<text class="wbLetter' + (Qe === "n" ? " wbNorth" : "") + '" x="' + Ee + '" y="' + gt + '">' + Oe(Re.cardinal[Qe]) + "</text>";
    }).join("");
    return Fn({ icon: zt.windy, name: Re.wind, sub: xe, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Je + Ve + (U !== void 0 ? '<path class="wbMarker" transform="rotate(' + U + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Oe(fe.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Oe(fe.unit) + "</text></svg>" });
  }
  const go = (f, b) => {
    if (f < 3) return Re.advice.fine;
    if (f < 8) return Re.advice.sunblock;
    const y = Date.now(), C = B("hourly").find((H) => H.uv_index != null && new Date(H.datetime).getTime() > y && H.uv_index < 6);
    return C && new Date(C.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Cn(Re.advice.avoidUntil, { time: Tn(new Date(C.datetime), b) }) : Re.advice.avoidToday;
  };
  function xr(f, b) {
    const y = Ia(f, b, "uv_index");
    if (!y || !ea(y.value)) return "";
    const C = Number(y.value), H = Re.uvLevel[su(C)], U = /* @__PURE__ */ new Date();
    U.setHours(23, 59, 59, 999);
    const $ = B("hourly").filter((xe) => xe.uv_index != null && new Date(xe.datetime) > /* @__PURE__ */ new Date() && new Date(xe.datetime) <= U).reduce((xe, Ae) => !xe || Ae.uv_index > xe.uv ? { uv: Ae.uv_index, time: new Date(Ae.datetime) } : xe, void 0), fe = gm[su(C)], ee = 216 * Math.min(1, Math.max(0.08, 0.4 + (C - 4.5) * (0.5 / 5.5))), be = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + I + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + ee.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + fe + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + fe + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + fe + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + ee.toFixed(1) + '" fill="url(#' + I + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + Oe(Pt(Math.round(C), f.locale)) + '</span><span class="wbUvWord">' + Oe(H) + "</span></div>" + sc(Po(Pt(Math.round(C), f.locale), ""));
    return Fn({
      icon: zt.sunnyAlert,
      name: Re.metrics.uv_index,
      sub: $ && $.uv > C ? Cn(Re.uvPeak, { level: H, uv_index: Pt(Math.round($.uv), f.locale), time: Tn($.time, f) }) : H,
      zone: be,
      cls: "wbUv",
      callouts: [go(C, f), [Re.callout.now, Pt(Math.round(C), f.locale) + " · " + H], [Re.callout.peak, $ && $.uv > C ? Pt(Math.round($.uv), f.locale) + " at " + Tn($.time, f) : Re.callout.now]]
    });
  }
  function bs(f) {
    const b = B("daily")[0], y = Ce.temperatureHistory;
    if (!b || new Date(b.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !ea(b.temperature) || !y || y.dailyHighs.length < dm) return "";
    const C = Number(b.temperature), H = y.dailyHighs.reduce((Ue, Ee) => Ue + Ee, 0) / y.dailyHighs.length, U = Math.round(C - H) || 0, $ = U > 0 ? "above" : U < 0 ? "below" : "same", fe = [...y.days, { date: /* @__PURE__ */ new Date(), high: C, today: !0 }], ee = fe.map((Ue) => Ue.high).concat(H), be = Math.min(...ee) - 1, xe = Math.max(...ee) + 1, Ae = (Ue) => (1 - (Ue - be) / (xe - be)) * 100, Je = (Ue) => (Ue + 0.5) / fe.length * 100, Ve = fe.map((Ue, Ee) => [Je(Ee), Ae(Ue.high)]), _e = Ve.map(([Ue, Ee], gt) => (gt ? "L" : "M") + Ue.toFixed(2) + " " + Ee.toFixed(2)).join(""), Qe = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + I + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + _e + "L" + Ve[Ve.length - 1][0].toFixed(2) + " 100L" + Ve[0][0].toFixed(2) + ' 100Z" fill="url(#' + I + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + Ae(H).toFixed(2) + '" y2="' + Ae(H).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + _e + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + Ae(H).toFixed(2) + '%">' + Oe(pa(f, H)) + "</span>" + fe.map((Ue, Ee) => {
      const gt = Ue.today ? " wbToday" : "", ot = "left:" + Je(Ee).toFixed(2) + "%;top:" + Ae(Ue.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + gt + '" style="' + ot + '"></i><span class="wbAvgValue' + gt + '" style="' + ot + '">' + Oe(pa(f, Ue.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + fe.map((Ue, Ee) => '<span class="wbAvgDay' + (Ue.today ? " wbToday" : "") + '" style="left:' + Je(Ee).toFixed(2) + '%">' + Oe(Cm(Ue.date, f)) + "</span>").join("") + "</div></div>";
    return Fn({
      icon: zt.chartLine,
      name: Re.metrics.compared_to_average,
      double: !0,
      sub: Cn(Re.highsLastDays, { days: y.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (U > 0 ? "+" : "") + Oe(pa(f, U)) + '</div><div class="wbCompareWords">' + Oe(Re.average[$]) + '</div><div class="wbCompareTemps">' + Oe(Cn(Re.todayVsAverage, { today: pa(f, C), average: pa(f, H) })) + "</div></div>" + Qe + "</div>"
    });
  }
  function vo(f, b) {
    const y = Ia(f, b, "humidity");
    if (!y || !ea(y.value)) return "";
    const C = Ia(f, b, "dew_point"), H = Math.max(0, Math.min(100, Number(y.value)));
    return Fn({
      icon: zt.waterPercent,
      name: Re.metrics.humidity,
      sub: C && ea(C.value) ? Cn(Re.dewPoint, { dew_point: pa(f, C.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + H + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Po(Pt(Math.round(Number(y.value)), f.locale), "%") + "</div>"
    });
  }
  function js(f, b) {
    var Ue, Ee, gt;
    const y = Ia(f, b, "pressure");
    if (!y || !ea(y.value)) return "";
    const C = Number(y.value), H = (Ue = y.stateObj.attributes) == null ? void 0 : Ue.pressure_unit, U = lu(C, H), $ = ((Ee = Ce.pressureHistory) == null ? void 0 : Ee.entityId) === y.stateObj.entity_id ? lu(Ce.pressureHistory.value, H) : void 0;
    let fe;
    if (U !== void 0 && $ !== void 0) {
      const ot = U - $;
      fe = ot >= Jp ? "rising" : ot <= -Jp ? "falling" : "steady";
    }
    const ee = vc(f, y.stateObj, "pressure", Math.round(C)), be = y.stateObj, xe = (ot) => H === "inHg" ? Math.round(ot * 100) / 100 : Math.round(ot), Ae = (ot) => ru(f, be, "pressure", xe(ot)), Je = $ !== void 0 ? Ce.pressureHistory.value : void 0, Ve = Je !== void 0 ? xe(C - Je) : void 0, _e = (gt = be.entity_id) != null && gt.startsWith("weather.") ? B("hourly").find((ot) => ea(ot.pressure) && new Date(ot.datetime).getTime() >= Date.now() + 3 * jt - 30 * bn) : void 0, Qe = [
      ...fe ? [Re.advice[fe]] : [],
      ...Je !== void 0 ? [[Re.callout.hoursAgo, Ae(Je)], [Re.callout.change, (Ve > 0 ? "+" : Ve < 0 ? "−" : "") + Ae(Math.abs(Ve))]] : [],
      ..._e ? [[Re.callout.inHours, Ae(Number(_e.pressure))]] : []
    ];
    return Fn({
      icon: zt.gauge,
      name: Re.metrics.pressure,
      sub: fe ? Re.pressure[fe] : void 0,
      cls: "wbPressure",
      callouts: Qe,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Po(ee.number) + '<span class="wbTapeUnit">' + Oe(ee.unit) + "</span></div>" + (U !== void 0 ? qi(f, U) : "") + "</div>"
    });
  }
  function qi(f, b) {
    const H = Math.floor(b) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (U, $) => H + $).map((U) => {
      const $ = 100 - (U - b) * 9;
      if ($ < 22 || $ > 178) return "";
      const fe = U % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs($ - 100) / 100) + '"><line class="wbTapeTick" x1="' + (fe ? 2 : 8) + '" x2="26" y1="' + $ + '" y2="' + $ + '"></line>' + (fe ? '<text class="wbTapeLabel" x="33" y="' + $ + '">' + Oe(Pt(U, f.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Oe(Re.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Oe(Re.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function bo(f) {
    var ee, be;
    const b = lp(f), y = b ? f.states[b] : void 0;
    if (!y || ((ee = Ce.rain) == null ? void 0 : ee.entityId) !== b || !ea(Ce.rain.change)) return "";
    const C = ((be = y.attributes) == null ? void 0 : be.unit_of_measurement) ?? "", H = q(f, "hourly"), U = Date.now() + Qn, $ = B("hourly").filter((xe) => xe.precipitation != null && new Date(xe.datetime).getTime() <= U), fe = $.reduce((xe, Ae) => xe + Number(Ae.precipitation), 0);
    return Fn({
      icon: zt.rainy,
      name: Re.metrics.precipitation,
      sub: H && $.length ? Cn(Re.rainExpected, { amount: Pt(fe, f.locale, { maximumFractionDigits: 1 }) + " " + ps(f, H, "precipitation") }) : Re.rainLast24h,
      visual: Po(Pt(Ce.rain.change, f.locale, { maximumFractionDigits: 1 }), C) + ($.length > 1 ? Ym($.map((xe) => ({ label: "", value: Number(xe.precipitation) }))) : "")
    });
  }
  function Wi(f, b) {
    const y = Ia(f, b, "visibility");
    if (!y || !ea(y.value)) return "";
    const C = vc(f, y.stateObj, "visibility", y.value), H = qh(Number(y.value), ps(f, y.stateObj, "visibility"));
    return Fn({
      icon: zt.eyeOutline,
      name: Re.metrics.visibility,
      sub: Re.visibilityLevel[Wh(H)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + H + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Oe(Vi(f, H)) + '</div><div class="wbSeaValue">' + Po(C.number, C.unit) + "</div></div>"
    });
  }
  function Vi(f, b) {
    var U;
    const y = Oh((U = f.config) == null ? void 0 : U.country, b);
    if (y) return Cn(Re.visibilityLandmarks, { from: y.from, to: y.to });
    const C = b / um * 60;
    if (C < 60) {
      const $ = C < 5 ? Math.max(1, Math.round(C)) : 5 * Math.round(C / 5);
      if ($ < 60) return Cn(Re.walkMinutes, { minutes: Pt($, f.locale) });
    }
    const H = Math.max(1, Math.round(C / 30) / 2);
    return H < 8 ? Cn(Re.walkHours, { hours: Pt(H, f.locale) }) : Re.walkDay;
  }
  function yr(f) {
    Ce.categories === void 0 && fo(f);
    const b = ho(f), y = (ee) => ee.map((be) => f.states[be]).filter(Vs), C = y(b.air), H = y(b.pollen);
    if (!C.length && !H.length) return "";
    const U = [...C, ...H], $ = (ee) => H.includes(ee) ? zt.flower : zt.airFilter, fe = U.find((ee) => ee.entity_id === E.aq);
    return fe ? Dl(f, fe, $(fe)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Oe(Re.airQuality) + '</h2></div><div class="wbAqTiles">' + U.map((ee) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Oe(ee.entity_id) + '"><span class="wbChip">' + mr($(ee)) + '</span><span class="wbText"><span class="wbName">' + Oe(ds(f, ee)) + '</span><span class="wbSub">' + Oe(fr(f, ee)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Dl(f, b, y) {
    var xe, Ae, Je;
    const C = ((xe = b.attributes) == null ? void 0 : xe.unit_of_measurement) ?? "", H = ((Ae = b.attributes) == null ? void 0 : Ae.device_class) === "pm25" && C === eu && ea(b.state), U = Number(b.state), $ = H ? rc(U) : void 0, fe = ((Je = Ce.aqHistory) == null ? void 0 : Je.entityId) === b.entity_id ? Ce.aqHistory.points : void 0, ee = (Ve) => Math.min(100, Math.max(0, Ve / ic * 100));
    let be;
    if (fe && fe.length > 1) be = pu(fe, (Ve) => (Pt(Ve, f.locale, { maximumFractionDigits: 1 }) + " " + C).trim());
    else if ($) {
      let Ve = 0;
      const _e = rf.map(([Qe, Ue]) => {
        const Ee = ee(Math.min(Ue, ic)), gt = Qp[Qe] + " " + Ve + "% " + Ee + "%";
        return Ve = Ee, gt;
      });
      be = '<div class="wbScale" role="meter" aria-label="' + Oe(Re.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + ic + '" aria-valuenow="' + U + '" style="background:linear-gradient(to right, ' + _e.join(", ") + ')"><i style="left:' + ee(U) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + ic + " " + eu + "</span></div>";
    } else be = '<span class="wbGraphNote"><span>' + Oe(fr(f, b)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + mr(y) + '</span><span class="wbText"><span class="wbName">' + Oe(ds(f, b)) + '</span><span class="wbSub">' + Oe(fr(f, b)) + ($ ? " · " + Oe(Re.aqLevel[$]) : "") + '</span></span><button class="wbBack" title="' + Oe(Re.back) + '" data-wb="aq-close">' + mr(zt.back) + '</button></div><div class="wbGraph">' + be + "</div></div></div>";
  }
  const Gt = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Dn = (f) => f <= 50 ? "Good" : f <= 100 ? "Moderate" : f <= 150 ? "Unhealthy for some" : f <= 200 ? "Unhealthy" : f <= 300 ? "Very unhealthy" : "Hazardous";
  function Io(f) {
    const b = /* @__PURE__ */ new Map();
    return Object.values(f.states || {}).filter((y) => {
      var C;
      return y.entity_id.startsWith("sensor.") && xc.includes(((C = y.attributes) == null ? void 0 : C.device_class) ?? "") && Vs(y) && Ll(f, y.entity_id);
    }).sort((y, C) => y.entity_id.localeCompare(C.entity_id)).forEach((y) => {
      b.has(y.attributes.device_class) || b.set(y.attributes.device_class, y);
    }), xc.map((y) => b.get(y)).filter(Boolean);
  }
  const mi = (f) => Object.values(f.states || {}).filter((b) => {
    var y, C;
    return b.entity_id.startsWith("sensor.") && Vs(b) && Ll(f, b.entity_id) && (((C = (y = f.entities) == null ? void 0 : y[b.entity_id]) == null ? void 0 : C.translation_key) ?? b.entity_id).toLowerCase().includes("pollen");
  }), ja = ["none", "very_low", "low", "moderate", "high", "very_high"], ya = (f) => ea(f.state) ? Number(f.state) : ja.indexOf(String(f.state).toLowerCase().replace(/ /g, "_")), ua = (f) => {
    const b = String(f).replace(/_/g, " ");
    return b[0].toUpperCase() + b.slice(1);
  }, zs = (f, b, y) => {
    const C = y ? f === "aqi" ? b <= 50 ? "good" : b <= 100 ? "moderate" : "poor" : f === "pm25" ? rc(b) : null : null;
    return C === "good" || C === "fair" ? Re.advice.window : C === "moderate" || C === null ? Re.advice.fine : Re.advice.closed;
  }, Yn = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], gi = (f) => Yn[f <= 50 ? 0 : f <= 100 ? 1 : f <= 150 ? 2 : f <= 200 ? 3 : f <= 300 ? 4 : 5], Fo = "M43 43q1 8 0 10M77 42q1 8 -1 10", Ut = {
    good: [Fo, "M34 69Q61 98 86 67"],
    fair: [Fo, "M40 74Q61 89 81 72"],
    moderate: [Fo, "M41 79Q60 76 80 81"],
    poor: [Fo, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, vi = (f) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Ut[f][0] + '"></path><path d="' + Ut[f][1] + '"></path></svg>';
  function to(f) {
    const b = Io(f), y = b[0];
    if (!y) return Fn({ icon: zt.airFilter, name: Re.airQuality, sub: Re.noAir, visual: Po("–", ""), cls: "wbBase" });
    const C = y.attributes.device_class, H = Number(y.state), U = ea(y.state), $ = C === "aqi" && U ? Dn(H) : C === "pm25" && U ? Gt[rc(H)] : fr(f, y), fe = U ? Pt(Math.round(H), f.locale) : String(y.state), ee = C === "aqi" ? "AQI" : y.attributes.unit_of_measurement || "", be = U && C === "aqi" ? gi(H) : U && C === "pm25" ? rc(H) : null;
    return Fn(be ? {
      icon: zt.airFilter,
      name: Re.airQuality,
      sub: $,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Qp[be] + '">' + vi(be) + '<div class="wbAqBig"><span class="wbAqNum">' + Oe(fe) + "</span>" + (ee ? '<span class="wbAqUnit">' + Oe(ee) + "</span>" : "") + "</div></div>" + sc(Po(fe, ee)),
      callouts: [zs(C, H, U), ...b.slice(1, 3).map((xe) => [ds(f, xe), fr(f, xe)])]
    } : {
      icon: zt.airFilter,
      name: Re.airQuality,
      sub: $,
      cls: "wbBase",
      zone: Po(fe, ee),
      callouts: [zs(C, H, U), ...b.slice(1, 3).map((xe) => [ds(f, xe), fr(f, xe)])]
    });
  }
  const kr = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], ji = (f) => {
    const b = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(f) ? Math.round(f) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: b }, (y, C) => {
      const [H, U] = kr[C % 3], $ = 10 + C * 7 % 9, fe = 2.6 + C * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + H + '" style="top:' + (4 + C * 37 % 52) + "%;--x:" + (C * 29 % 90 + 4) + "%;--s:" + (0.8 + C * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + $ + "s;animation-delay:-" + (C * 2.3 % $).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + fe.toFixed(1) + "s;animation-delay:-" + (C * 0.7 % fe).toFixed(1) + 's">' + U + "</span></span></span>";
    }).join("") + "</div>";
  };
  function zi(f) {
    const b = mi(f).sort((H, U) => ya(U) - ya(H));
    if (!b.length) return Fn({ icon: zt.flower, name: Re.pollen, sub: Re.noPollen, visual: Po("–", ""), cls: "wbBase" });
    const y = b[0], C = (H) => ea(H.state) ? fr(f, H) : ua(H.state);
    return Fn({
      icon: zt.flower,
      name: Re.pollen,
      sub: ds(f, y) + " · " + C(y),
      cls: "wbBase wbPollen",
      zone: ji(ya(y)) + Po(C(y), ""),
      callouts: b.slice(0, 3).map((H) => [ds(f, H), C(H)])
    });
  }
  function Gs(f) {
    const b = Date.now(), y = B("hourly").filter((U) => {
      const $ = new Date(U.datetime).getTime();
      return $ > b - jt && $ < b + 12 * jt;
    }), C = y.find((U) => (U.precipitation_probability ?? 0) >= 50 || (U.precipitation ?? 0) >= 0.2), H = C ? Cn(Re.rainFrom, { time: Tn(new Date(Math.max(b, new Date(C.datetime).getTime())), f) }) : y.length ? Re.noRain12 : void 0;
    return Fn({ icon: zt.radar, name: Re.rainRadar, sub: H, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const Us = {
    current: eo,
    hourly: nt,
    sun: Pe,
    moon: wr,
    wind: Ba,
    uv_index: xr,
    compared_to_average: bs,
    humidity: vo,
    pressure: js,
    precipitation: bo,
    visibility: Wi,
    air_quality: yr,
    aq_tile: to,
    pollen_tile: zi,
    radar_tile: Gs
  }, Oo = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], qo = (f, b) => {
    var y;
    return b.toLocaleDateString((y = f.locale) == null ? void 0 : y.language, { day: "numeric", month: "short" });
  }, Mr = (f) => {
    const b = new Date(f);
    return b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b.toISOString().slice(0, 10);
  }, bi = () => {
    const f = E.range, b = Date.now();
    if (f.preset !== "custom") {
      const H = Oo.find(([U]) => U === f.preset)[2];
      return [b - H * Qn, b];
    }
    const y = fs(/* @__PURE__ */ new Date(f.from + "T00:00")).getTime(), C = Math.min(b, fs(/* @__PURE__ */ new Date(f.to + "T00:00")).getTime() + Qn);
    return [Math.min(y, C - jt), C];
  }, la = (f) => {
    const b = E.range;
    if (b.preset !== "custom") return Oo.find(([H]) => H === b.preset)[1];
    const [y, C] = bi();
    return b.from === b.to ? qo(f, new Date(y)) : qo(f, new Date(y)) + " – " + qo(f, new Date(C - 1));
  }, xn = () => E.range.preset === "custom" ? E.range.from + "_" + E.range.to : E.range.preset, Lt = (f, b) => b - f <= 2 * Qn, Gi = (f, b, y, C) => Lt(y, C) ? Tn(b, f) : qo(f, b), Wo = (f, b = 60) => {
    const y = Math.max(1, Math.ceil(f.length / b));
    return f.filter((C, H) => H % y === 0 || H === f.length - 1);
  }, Ui = (f, b, y, C, H = !1) => f.callWS({
    type: "history/history_during_period",
    start_time: new Date(y).toISOString(),
    end_time: new Date(C).toISOString(),
    entity_ids: [b],
    minimal_response: H,
    no_attributes: H,
    significant_changes_only: !1
  }), rn = (f) => async (b, y, C, H) => {
    const U = Ia(b, y, f);
    if (!U) return [];
    const $ = U.stateObj.entity_id, fe = await Ui(b, $, C, H);
    return Wo(((fe == null ? void 0 : fe[$]) ?? []).map((ee) => {
      var Ae;
      const be = ((Ae = ee.a) == null ? void 0 : Ae[f]) ?? (ea(ee.s) ? Number(ee.s) : void 0), xe = (ee.lu ?? ee.lc) * 1e3;
      return typeof be == "number" && xe >= C && xe <= H ? { t: new Date(xe), value: be } : null;
    }).filter(Boolean)).map((ee) => ({ label: Gi(b, ee.t, C, H), value: ee.value }));
  }, Vo = (f, b) => async (y, C, H, U) => {
    const $ = f(y);
    if (!$) return [];
    const fe = $.entity_id, ee = await Ui(y, fe, H, U, !0);
    return Wo(((ee == null ? void 0 : ee[fe]) ?? []).map((be) => {
      const xe = b(be.s), Ae = be.lu * 1e3;
      return xe == null || !Number.isFinite(xe) || Ae < H || Ae > U ? null : { t: new Date(Ae), value: xe };
    }).filter(Boolean)).map((be) => ({ label: Gi(y, be.t, H, U), value: be.value }));
  }, ws = (f, b) => async (y, C, H, U) => {
    const $ = md(y);
    if (!$) return [];
    const fe = [];
    if (Lt(H, U)) for (let ee = H; ee <= U; ee += jt / 2) fe.push({ label: Tn(new Date(ee), y), value: f(new Date(ee), $) });
    else for (let ee = U; ee >= H; ee -= Qn) {
      const be = new Date(ee), xe = b(be, $, y);
      xe != null && fe.unshift({ label: qo(y, be), value: xe });
    }
    return Wo(fe);
  }, _n = (f) => mi(f).sort((b, y) => ya(y) - ya(b))[0], wo = (f, b, y) => {
    const C = Ia(f, b, y);
    return C ? ps(f, C.stateObj, y) : "";
  }, $t = {
    current: { name: () => Re.modes.temperature, icon: () => zt.sunny, load: rn("temperature"), fmt: (f, b, y) => pa(f, y), now: (f, b) => {
      var y;
      return pa(f, (y = Ia(f, b, "temperature")) == null ? void 0 : y.value);
    } },
    sun: {
      name: () => Re.sun,
      icon: () => zt.sunny,
      load: ws((f, b) => Math.round(kc(f, b.lat, b.lon) / jn), (f, b, y) => {
        const C = Cl(y, f);
        return C.rise && C.set ? Math.round((C.set - C.rise) / jt * 10) / 10 : null;
      }),
      fmt: (f, b, y, C) => C ? Pt(y, f.locale) + "°" : Pt(y, f.locale) + " h",
      sub: (f) => f ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => Re.moon,
      icon: () => zt.night,
      load: ws((f) => Math.round(sp(f).fraction * 100), (f) => Math.round(sp(f).fraction * 100)),
      fmt: (f, b, y) => Pt(y, f.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => Re.metrics.uv_index, icon: () => zt.sunnyAlert, load: rn("uv_index"), fmt: (f, b, y) => Pt(Math.round(y * 10) / 10, f.locale), now: (f, b) => {
      const y = Ia(f, b, "uv_index");
      return y ? Pt(Number(y.value), f.locale) : "";
    } },
    humidity: { name: () => Re.metrics.humidity, icon: () => zt.waterPercent, load: rn("humidity"), fmt: (f, b, y) => Pt(Math.round(y), f.locale) + "%", now: (f, b) => {
      const y = Ia(f, b, "humidity");
      return y ? Pt(Math.round(Number(y.value)), f.locale) + "%" : "";
    } },
    pressure: { name: () => Re.metrics.pressure, icon: () => zt.gauge, load: rn("pressure"), fmt: (f, b, y) => Pt(Math.round(y), f.locale) + " " + wo(f, b, "pressure"), now: (f, b) => {
      const y = Ia(f, b, "pressure");
      return y ? Pt(Math.round(Number(y.value)), f.locale) + " " + wo(f, b, "pressure") : "";
    } },
    wind: { name: () => Re.wind, icon: () => zt.windy, load: rn("wind_speed"), fmt: (f, b, y) => Pt(Math.round(y), f.locale) + " " + wo(f, b, "wind_speed"), now: (f, b) => {
      const y = Ia(f, b, "wind_speed");
      return y ? Pt(Math.round(Number(y.value)), f.locale) + " " + wo(f, b, "wind_speed") : "";
    } },
    visibility: { name: () => Re.metrics.visibility, icon: () => zt.eyeOutline, load: rn("visibility"), fmt: (f, b, y) => Pt(Math.round(y * 10) / 10, f.locale) + " " + wo(f, b, "visibility"), now: (f, b) => {
      const y = Ia(f, b, "visibility");
      return y ? Pt(Number(y.value), f.locale) + " " + wo(f, b, "visibility") : "";
    } },
    aq_tile: {
      name: (f) => Io(f)[0] ? ds(f, Io(f)[0]) : Re.airQuality,
      icon: () => zt.airFilter,
      load: Vo((f) => Io(f)[0], (f) => ea(f) ? Number(f) : null),
      fmt: (f, b, y) => {
        var U, $;
        const C = Io(f)[0], H = (U = C == null ? void 0 : C.attributes) == null ? void 0 : U.device_class;
        return Pt(Math.round(y * 10) / 10, f.locale) + (H === "aqi" ? " AQI" : ($ = C == null ? void 0 : C.attributes) != null && $.unit_of_measurement ? " " + C.attributes.unit_of_measurement : "");
      },
      now: (f) => {
        const b = Io(f)[0];
        return b ? fr(f, b) : "";
      }
    },
    pollen_tile: {
      name: (f) => _n(f) ? ds(f, _n(f)) : Re.pollen,
      icon: () => zt.flower,
      load: Vo(_n, (f) => {
        const b = ya({ state: f });
        return b < 0 ? null : b;
      }),
      fmt: (f, b, y) => ua(ja[Math.round(y)] || ""),
      now: (f) => {
        const b = _n(f);
        return b ? ua(b.state) : "";
      }
    }
  }, Zn = {};
  let Ca = null;
  async function Yi(f) {
    var $;
    const b = l == null ? void 0 : l();
    if (!b || !$t[f]) return;
    const y = f + "|" + xn(), [C, H] = bi();
    if (Zn[y] && Date.now() - Zn[y].at < 5 * bn) return;
    Zn[y] = { at: Date.now(), points: null };
    try {
      Zn[y].points = await $t[f].load(b, Gn(b), C, H);
    } catch {
      Zn[y].points = [];
    }
    Ta(!0), Ca === f && E.graph === f && (Ca = null, Zp(te[f].el.querySelector(".wbGraphCard")));
    const U = E.graph === f && (($ = te[f]) == null ? void 0 : $.el.querySelector(".wbGraph .wbChart"));
    U && nf(U, U.querySelector(".wbLine"), U.querySelectorAll(".wbArea"));
  }
  function jo(f, b) {
    const y = E.range, C = Mr(Date.now()), [H, U] = bi(), $ = y.pickFrom || Mr(H), fe = y.pickTo || Mr(U - 1);
    return '<div class="wbRangePick' + (b ? " wbPickRight" : "") + '" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Oo.map(([ee, be]) => '<button class="wbRangePreset" aria-pressed="' + (y.preset === ee) + '" data-wb="graph-preset" data-range="' + ee + '" data-wb-focus="graph-preset-' + ee + '">' + Oe(be) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + $ + '" max="' + C + '"></label><label><span>To</span><input type="date" data-range-to value="' + fe + '" max="' + C + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function xs(f, b, y) {
    var Je;
    const C = $t[y], [H, U] = bi(), $ = Lt(H, U), fe = (Je = Zn[y + "|" + xn()]) == null ? void 0 : Je.points, ee = te[y].el, be = Math.max(120, ee.clientWidth - 2 * 18 - 32), xe = Math.max(40, ee.clientHeight - 2 * 18 - 44 - 14 - 32 - 14 - 24), Ae = fe ? fe.length > 1 ? pu(fe, (Ve) => C.fmt(f, b, Ve, $), xe, be) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbCard wbSquare wbGraphCard"><div class="wbHead"><div class="wbChip wbPlain">' + sf(C.icon(f)) + '</div><div class="wbText"><span class="wbName">' + Oe(C.name(f)) + '</span><span class="wbSub">' + Oe(C.sub ? C.sub($) : C.now ? C.now(f, b) : "") + '</span></div><button class="wbBack" title="' + Oe(Re.back) + '" data-wb="graph-close" data-wb-focus="graph-close">' + mr(zt.back) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!E.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + mr(zt.calendar) + "<span>" + Oe(la(f)) + "</span>" + mr(zt.chevronDown) + '</button><div class="wbGraph">' + Ae + "</div></div>" + (E.picking ? jo(f, ee.getBoundingClientRect().left > innerWidth / 2) : "");
  }
  function Ta(f) {
    var Ae, Je, Ve;
    const b = l == null ? void 0 : l();
    if (!b || Q) return;
    const y = Gn(b);
    ue(b, y), Ce.lastFetch || tt();
    const C = ho(b), H = du(b), U = lp(b), $ = [
      ...y.map((_e) => b.states[_e]),
      b.states["sun.sun"],
      H && b.states[H],
      U && b.states[U],
      ...C.air.map((_e) => b.states[_e]),
      ...C.pollen.map((_e) => b.states[_e]),
      ...V.some((_e) => F.includes(_e)) ? [...Io(b), ...mi(b)] : [],
      b.locale,
      b.config,
      b.entities,
      Math.floor(Date.now() / bn)
    ];
    if (!f && G && $.length === G.length && $.every((_e, Qe) => _e === G[Qe])) return;
    G = $;
    const fe = M.getRootNode(), ee = fe.activeElement || document.activeElement;
    for (const _e of V) {
      const Qe = te[_e];
      let Ue = "";
      try {
        Ue = (E.graph === _e ? xs(b, y, _e) : Us[_e](b, y)) || "";
      } catch {
        Ue = "";
      }
      if (Ue === Qe.html) continue;
      const Ee = ee && Qe.el.contains(ee) ? (Ae = ee.dataset) == null ? void 0 : Ae.wbFocus : void 0, gt = Qe.el.querySelector(".wbStripScroll"), ot = gt ? gt.scrollLeft : null;
      Qe.html = Ue, Qe.el.hidden = !Ue, Qe.el.innerHTML = Ue;
      const Rt = Qe.el.querySelector(".wbStripScroll");
      Rt && ot != null ? Rt.scrollTo({ left: ot }) : Rt != null && Rt.dataset.start && Rt.scrollTo({ left: Number(Rt.dataset.start) * Rt.clientWidth / Number(Rt.dataset.span) }), Ee && !ie && ((Je = Qe.el.querySelector('[data-wb-focus="' + Ee + '"]')) == null || Je.focus());
    }
    En(), ie && ((Ve = M.querySelector('[data-wb-focus="' + ie + '"]')) == null || Ve.focus({ preventScroll: !0 }), ie = null);
    let be = !1, xe = !1;
    for (const _e of V) {
      const Qe = te[_e], Ue = !Qe.el.hidden, Ee = z[_e] === "wide" || pe.includes(_e), gt = V.indexOf(_e) >= V.indexOf("moon"), ot = Ue && (gt && Ee && !be || !Ee && !xe);
      ot && Ee && (be = !0), ot && !Ee && (xe = !0), Qe.el.toggleAttribute("data-break", ot);
    }
    Cr(performance.now());
  }
  function zo() {
    ke || Q || (ke = !0, queueMicrotask(() => {
      ke = !1, Ta(!0);
    }));
  }
  function ao() {
    const f = getComputedStyle(M), b = ($) => f.getPropertyValue($).trim(), y = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([$, fe]) => {
      b(fe) && (y[$] = b(fe));
    });
    const C = b("--color-text-primary") || "#f1f1f1", H = b("--color-bg-card") || "#222222", U = !!M.closest(".light");
    return { colors: { ...zn, ...y }, ink: U ? C : H, paper: U ? H : C };
  }
  const wi = (f, b) => {
    var y;
    f.width !== b.w && (f.width = b.w), f.height !== b.h && (f.height = b.h), (y = f.getContext("2d")) == null || y.putImageData(new ImageData(b.data, b.w, b.h), 0, 0);
  }, Go = () => v && !km();
  function Sr(f, b) {
    M.querySelectorAll("canvas[data-wb-strip]").forEach((y) => _l(y, re[y.dataset.wbStrip], f, b));
  }
  function _l(f, b, y, C) {
    if (!b || !f.getClientRects().length) return;
    const H = f.clientWidth, U = f.clientHeight;
    if (!H || !U) return;
    const $ = { width: H, height: U, columns: b.columns || Kp, colors: C.colors, clock: y, ambient: Go(), seed: b.seed, soft: 1.5 };
    if (u === "smooth") {
      const fe = Math.min(2, window.devicePixelRatio || 1), ee = Math.round(H * fe), be = Math.round(U * fe);
      f.width !== ee && (f.width = ee), f.height !== be && (f.height = be);
      const xe = f.getContext("2d");
      if (!xe) return;
      xe.setTransform(fe, 0, 0, fe, 0, 0), yh(xe, b.segs, $);
    } else wi(f, xh(b.segs, { ...$, px: 2, oneBit: u === "onebit", ink: C.ink, paper: C.paper }));
  }
  function Cr(f) {
    if (Q) return;
    const b = ao();
    if (u !== "smooth") {
      const y = Go();
      M.querySelectorAll("canvas[data-wb-wx]").forEach((C) => {
        C.getClientRects().length && wi(C, qu(xp(C.dataset.wbWx, b.colors), { size: Number(C.dataset.size) || 40, px: 2, oneBit: u === "onebit", colors: b.colors, ink: b.ink, paper: b.paper, clock: f, idle: y }));
      });
    }
    M.querySelectorAll("canvas[data-wb-sea]").forEach((y) => {
      const C = y.clientWidth, H = y.clientHeight, U = Number(y.dataset.wbSea), $ = C + "x" + H + ":" + U + ":" + b.colors.skyClearDay;
      !C || !H || !(U > 0) || y.dataset.painted === $ || (y.dataset.painted = $, wi(y, Hh(C, H, U, b.colors)));
    }), Sr(f, b);
  }
  function ys(f) {
    if (he = 0, !(Q || !Go())) {
      if (!document.hidden)
        if (u === "smooth") Sr(f, ao());
        else {
          const b = Math.floor(f / 100);
          b !== ce && (ce = b, Cr(f));
        }
      he = requestAnimationFrame(ys);
    }
  }
  function xo() {
    M.classList.toggle("wbMotion", Go()), !he && !Q && Go() && (he = requestAnimationFrame(ys));
  }
  function Ys(f) {
    var y, C, H, U, $, fe, ee;
    const b = (C = (y = f.target).closest) == null ? void 0 : C.call(y, "[data-wb]");
    if (!b || !M.contains(b)) {
      const be = (U = (H = f.target).closest) == null ? void 0 : U.call(H, ".wbItem"), xe = be == null ? void 0 : be.dataset.card;
      if (!be || !M.contains(be) || !$t[xe] || E.graph === xe || M.closest(".tfEditing") || be.offsetHeight < 200 || xe === "current" && k) return;
      E.graph = xe, ie = "graph-close", Ta(!0), ($ = Zn[xe + "|" + xn()]) != null && $.points ? Zp(te[xe].el.querySelector(".wbGraphCard")) : Ca = xe, Yi(xe);
      return;
    }
    switch (b.dataset.wb) {
      case "day": {
        E.openDay = Number(b.dataset.index), E.opener = b.dataset.wbFocus, ie = "back-day";
        const be = Xe()[E.openDay], xe = !Ce.todayHistory || Ce.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Ce.todayHistory.fetched > tm;
        be && Sl(new Date(be.datetime), /* @__PURE__ */ new Date()) && xe && Ya();
        break;
      }
      case "close-day":
        E.openDay = void 0, ie = E.opener, E.opener = void 0;
        break;
      case "open-page":
        k == null || k();
        return;
      case "day-mode":
        E.dayMode = b.dataset.mode;
        break;
      case "hourly-mode":
        E.hourlyMode = b.dataset.mode;
        break;
      case "hourly-view":
        E.hourlyView = b.dataset.view;
        try {
          localStorage.setItem(oe, E.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const be = M.querySelector(".wbStripScroll");
        be && be.scrollTo({ left: Number(b.dataset.hours) * be.clientWidth / Number(be.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        E.aq = b.dataset.entity, Fe(E.aq);
        break;
      case "aq-close":
        E.aq = void 0;
        break;
      case "graph-close":
        E.graph = void 0, E.picking = !1;
        break;
      case "graph-pick":
        E.picking = !E.picking, ie = E.picking ? "graph-preset-" + (E.range.preset === "custom" ? "day" : E.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        E.range = { preset: b.dataset.range }, E.picking = !1, ie = "graph-pick", Ta(!0), Yi(E.graph);
        return;
      case "graph-apply": {
        let be = E.range.pickFrom || ((fe = M.querySelector("[data-range-from]")) == null ? void 0 : fe.value), xe = E.range.pickTo || ((ee = M.querySelector("[data-range-to]")) == null ? void 0 : ee.value);
        if (!be || !xe) return;
        be > xe && ([be, xe] = [xe, be]), E.range = { preset: "custom", from: be, to: xe }, E.picking = !1, ie = "graph-pick", Ta(!0), Yi(E.graph);
        return;
      }
      default:
        return;
    }
    Ta(!0);
  }
  function Zi(f) {
    var b, y, C, H, U, $;
    f.key === "Escape" && E.openDay !== void 0 && ((y = (b = f.target).closest) != null && y.call(b, '[data-wb-open="day"]')) ? (E.openDay = void 0, ie = E.opener, E.opener = void 0, Ta(!0)) : f.key === "Escape" && E.picking && ((H = (C = f.target).closest) != null && H.call(C, ".wbGraphCard")) ? (E.picking = !1, ie = "graph-pick", Ta(!0)) : f.key === "Escape" && E.graph && (($ = (U = f.target).closest) != null && $.call(U, ".wbGraphCard")) && (E.graph = void 0, Ta(!0));
  }
  let ka = null;
  function ks(f) {
    var y, C;
    const b = (C = (y = f.target).closest) == null ? void 0 : C.call(y, ".wbStripScroll");
    !b || f.button !== 0 || (ka = { startX: f.pageX, left: b.scrollLeft, moved: !1 }, b.classList.add("wbHeld"), window.addEventListener("mousemove", Uo), window.addEventListener("mouseup", xi, { once: !0 }));
  }
  function Uo(f) {
    const b = M.querySelector(".wbStripScroll");
    if (!ka || !b) return;
    const y = f.pageX - ka.startX;
    !ka.moved && Math.abs(y) > 1 && (ka.moved = !0, b.classList.add("wbDragging")), b.scrollLeft = ka.left - y;
  }
  function xi() {
    ka = null, window.removeEventListener("mousemove", Uo);
    const f = M.querySelector(".wbStripScroll");
    if (!f) return;
    f.classList.remove("wbDragging", "wbHeld");
    const b = [...f.querySelectorAll(".wbSnap")];
    if (b.length) {
      const y = b.reduce((C, H) => Math.abs(H.offsetLeft - f.scrollLeft) < Math.abs(C.offsetLeft - f.scrollLeft) ? H : C);
      f.scrollTo({ left: y.offsetLeft, behavior: "smooth" });
    }
  }
  const sn = (f) => {
    var y, C;
    const b = f.target;
    (y = b.matches) != null && y.call(b, "[data-range-from]") ? E.range.pickFrom = b.value : (C = b.matches) != null && C.call(b, "[data-range-to]") && (E.range.pickTo = b.value);
  };
  M.addEventListener("change", sn), M.addEventListener("click", Ys), M.addEventListener("keydown", Zi), M.addEventListener("mousedown", ks);
  const Ki = 64, $i = 30;
  let yn = null, Nt = 0;
  const Xi = () => {
    Nt = 0, M.querySelectorAll(".wbPollen .wbPush").forEach((f) => {
      let b = 0, y = 0;
      if (yn) {
        const C = f.parentElement.getBoundingClientRect(), H = C.left + C.width / 2 - yn.x, U = C.top + C.height / 2 - yn.y, $ = Math.hypot(H, U) || 1;
        if ($ < Ki) {
          const fe = (1 - $ / Ki) * $i;
          b = H / $ * fe, y = U / $ * fe;
        }
      }
      f.style.transform = b || y ? "translate(" + b.toFixed(1) + "px," + y.toFixed(1) + "px)" : "";
    }), yn && (Nt = requestAnimationFrame(Xi));
  }, Zs = (f) => {
    var y, C;
    if (!((C = (y = f.target).closest) == null ? void 0 : C.call(y, ".wbPollen")) || dn != null && dn.matches) {
      yn && (yn = null, Nt || (Nt = requestAnimationFrame(Xi)));
      return;
    }
    yn = { x: f.clientX, y: f.clientY }, Nt || (Nt = requestAnimationFrame(Xi));
  }, Ms = () => {
    yn = null, Nt || (Nt = requestAnimationFrame(Xi));
  };
  M.addEventListener("pointermove", Zs), M.addEventListener("pointerleave", Ms);
  const ln = typeof ResizeObserver == "function" ? new ResizeObserver(() => Cr(performance.now())) : null;
  ln == null || ln.observe(M);
  const dn = (cn = window.matchMedia) == null ? void 0 : cn.call(window, "(prefers-reduced-motion: reduce)"), Yt = () => {
    xo(), Cr(performance.now());
  };
  (Yo = dn == null ? void 0 : dn.addEventListener) == null || Yo.call(dn, "change", Yt);
  const yo = [
    setInterval(() => {
      le = /* @__PURE__ */ new Date(), Ta(!0);
    }, cm),
    setInterval(() => {
      qe = /* @__PURE__ */ new Date(), Ta(!0);
    }, pm),
    setInterval(tt, sm)
  ];
  return Ta(!0), xo(), {
    update() {
      Ta(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Ta(!0);
    },
    setStyle(f) {
      !f || f === u || (u = f, M.dataset.style = u, Ta(!0), xo());
    },
    destroy() {
      var f;
      cancelAnimationFrame(Nt), M.removeEventListener("pointermove", Zs), M.removeEventListener("pointerleave", Ms), Q = !0, yo.forEach(clearInterval), he && cancelAnimationFrame(he), he = 0, ln == null || ln.disconnect(), (f = dn == null ? void 0 : dn.removeEventListener) == null || f.call(dn, "change", Yt), xi(), M.removeEventListener("click", Ys), M.removeEventListener("change", sn), M.removeEventListener("keydown", Zi), M.removeEventListener("mousedown", ks), ["daily", "hourly"].forEach(R), M.remove();
    }
  };
}
const gd = "#E1E1E1", hu = "#F7F4F0", dp = "#03a9f4", Ot = 14, Vt = 172;
let Jm = 0;
const va = (n) => Math.round(n * 100) / 100, Oi = (n, l, i) => Math.max(l, Math.min(i, n)), br = (n, l, i, u, v, x) => '<rect x="' + va(n) + '" y="' + va(l) + '" width="' + va(i) + '" height="' + va(u) + '" fill="' + v + '"' + (x != null ? ' opacity="' + x + '"' : "") + "/>", cp = (n) => n.map((l, i) => (i ? "L" : "M") + va(l[0]) + " " + va(l[1])).join("");
function pp(n) {
  const l = (n == null ? void 0 : n.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const cs = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function Qm(n) {
  const l = n < 2 ? n + 24 : n;
  let i = cs[0], u = cs[cs.length - 1];
  for (let A = 0; A < cs.length - 1; A++) if (l >= cs[A][0] && l <= cs[A + 1][0]) {
    i = cs[A], u = cs[A + 1];
    break;
  }
  const v = (l - i[0]) / (u[0] - i[0]), x = v * v * (3 - 2 * v), k = (A, I) => {
    const M = parseInt(A.slice(1), 16), W = parseInt(I.slice(1), 16);
    return "#" + [16, 8, 0].map((F) => Math.round((M >> F & 255) + ((W >> F & 255) - (M >> F & 255)) * x).toString(16).padStart(2, "0")).join("");
  };
  return { top: k(i[1][0], u[1][0]), bot: k(i[1][1], u[1][1]), warm: k(i[1][2], u[1][2]), cool: k(i[1][3], u[1][3]), op: i[1][4] + (u[1][4] - i[1][4]) * x, t: l };
}
function eg(n) {
  const l = parseInt(n.slice(1), 16), i = (l >> 16 & 255) / 255, u = (l >> 8 & 255) / 255, v = (l & 255) / 255, x = Math.max(i, u, v), k = Math.min(i, u, v);
  let A = 0, I = 0;
  const M = (x + k) / 2;
  if (x !== k) {
    const W = x - k;
    I = M > 0.5 ? W / (2 - x - k) : W / (x + k), A = (x === i ? (u - v) / W + (u < v ? 6 : 0) : x === u ? (v - i) / W + 2 : (i - u) / W + 4) / 6;
  }
  return [A * 360, I * 100, M * 100];
}
function wf(n, l, i) {
  l = Oi(l, 0, 100) / 100, i = Oi(i, 0, 100) / 100;
  const u = (k) => (k + n / 30) % 12, v = l * Math.min(i, 1 - i), x = (k) => i - v * Math.max(-1, Math.min(u(k) - 3, Math.min(9 - u(k), 1)));
  return "#" + [x(0), x(8), x(4)].map((k) => Math.round(k * 255).toString(16).padStart(2, "0")).join("");
}
const [xf, yf, kf] = eg(gd), mu = wf(xf, yf, Math.max(6, kf - 14)), tg = wf(xf, yf, Math.min(96, kf + 16));
function ag(n, l, i, u, v) {
  const x = Vt / 2, k = Vt * 0.12, A = x - (x - k) * n, I = (pe) => pe ** 1.3, M = Oi(i, -1.5, 1.5), W = (pe) => -(Math.abs(M) * 4.6 * pe ** 1.5) * Math.sign(M), F = n * 1.4, V = (pe, te) => {
    const Q = Math.min(4.8, Math.abs(i) * 2.6) * (te ? 1 : -1) * Math.sign(i || 1), G = te ? pe + A : pe, he = te ? pe : pe + A, ce = (Ce) => G + W(Ce) + Q * Math.sin(Ce * Math.PI * 1.2 + u) * I(Ce) * 1.4 + F * Math.sin(Ce * Math.PI * 2 + u * 0.6) * I(Ce) * (te ? 1 : -1), ke = [[he, Ot]];
    for (let Ce = 0; Ce <= 12; Ce++) ke.push([ce(Ce / 12), Ot + Vt * Ce / 12]);
    ke.push([he, Ot + Vt]);
    let ie = '<path d="' + cp(ke) + 'Z" fill="' + gd + '"/>';
    if (v) return ie;
    const oe = 1.35 + ((te ? i > 0 : i < 0) ? 0.35 : 0), ae = (Ce) => {
      const le = Ce / 7, qe = te ? 1 - le : le, re = (1 - qe) ** 1.3, Ze = pe + A * le;
      return Array.from({ length: 13 }, (T, B) => {
        const q = B / 12;
        return [Ze + W(q) * re + Q * oe * Math.sin(q * Math.PI * 1.2 + u - qe * 3.2) * I(q) * 1.4 * re + F * 1.6 * Math.sin(q * Math.PI * 2 + u * 0.6 - qe * 2.5) * I(q) * n * (0.4 + 0.6 * re), Ot + Vt * q];
      });
    }, E = [1, 2, 3, 4, 5, 6].map(ae);
    for (let Ce = 0; Ce < 6; Ce += 2) ie += '<path d="' + cp(E[Ce]) + cp(E[Ce + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return ie;
  }, z = x - (x - k) * l;
  return { body: V(Ot, !0) + V(Ot + Vt - A, !1), rails: [{ x: Ot + z - 4, y: Ot, w: 4, h: Vt }, { x: Ot + Vt - z, y: Ot, w: 4, h: Vt }], head: 6.4 };
}
function ng(n, l, i) {
  const u = Vt * (1 - n);
  let v = "";
  if (u > 1 && (v += br(Ot, Ot, Vt, u, gd), !i))
    for (let x = 1; x < 7; x += 2) v += br(Ot + Vt * x / 7, Ot, Vt / 7, u, "#fff");
  return { body: v, rails: [{ x: Ot, y: Ot + Vt * (1 - l) - 7, w: Vt, h: 11 }], head: 10.4 };
}
function og(n, l, i, u) {
  const v = 9 - 7 * (i / 100), x = Ot + Vt * (1 - n), k = Math.ceil(Vt / 10) + 1, A = Ot + v / 2, I = (Ot + Vt - v / 2 - A) / (k - 1), M = 0.8, W = 0.6, F = Array.from({ length: k }, (pe, te) => Math.max(A + te * W, Math.min(A + te * I, x - v / 2 - (k - 1 - te) * W))), V = F.slice(0, -1).map((pe, te) => Oi((F[te + 1] - pe - W) / (I - W), 0, 1));
  V.push(V[k - 2]);
  let z = "";
  return F.forEach((pe, te) => {
    const Q = M + (v - M) * V[te], G = Math.max(0.5, Q / 2), he = Math.max(0.4, Q * 0.114);
    z += br(Ot, pe - G, Vt, Math.max(1, Q), gd), !u && Q > 2.2 && (z += br(Ot, pe + G - he, Vt, he, mu) + br(Ot, pe - G, Vt, he * 0.55, tg, 0.75));
  }), u || [0.22, 0.78].forEach((pe) => {
    z += br(Ot + Vt * pe - 0.7, Ot, 1.4, Math.max(0, F[k - 1] + 1 - Ot), mu, 0.85);
  }), { body: z, rails: [{ x: Ot, y: Ot + Vt * (1 - l) - 8, w: Vt, h: 8 }], head: 8.8 };
}
const gu = (n, l, i, u, v, x, k) => n === "curtain" ? ag(l, i, v, x, k) : n === "venetian" ? og(l, i, u, k) : ng(l, i, k);
function ig(n, l) {
  let i = "", u = "";
  return l.forEach((v) => {
    const x = v.w > v.h, k = Oi(x ? Ot + Vt / 2 : v.x + v.w / 2, 17, 183), A = Oi(x ? v.y + v.h / 2 : Ot + Vt / 2, 17, 183);
    i += x ? br(Ot, Oi(v.y + v.h / 2, Ot, Ot + Vt) - 1, Vt, 2, dp) : br(Oi(v.x + v.w / 2, Ot, Ot + Vt) - 1, Ot, 2, Vt, dp);
    const I = x ? "M" + va(k - 4) + " " + va(A - 3) + "l4 -3l4 3M" + va(k - 4) + " " + va(A + 3) + "l4 3l4 -3" : "M" + va(k - 3) + " " + va(A - 4) + "l-3 4l3 4M" + va(k + 3) + " " + va(A - 4) + "l3 4l-3 4";
    u += '<circle cx="' + va(k) + '" cy="' + va(A) + '" r="11" fill="' + dp + '" filter="url(#' + n + 's)"/><path d="' + I + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: u };
}
function rg(n, l) {
  const i = /* @__PURE__ */ new Date(), u = Qm(i.getHours() + i.getMinutes() / 60), v = 42 + 18 * Math.sin(u.t * 0.5), x = u.t >= 5 && u.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (u.t - 5) / 15) : 80, k = gu(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), A = l.ghostAlpha > 4e-3 && l.ghost != null ? gu(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", I = l.grip > 4e-3 ? ig(n, k.rails) : null, M = (W) => br(Ot, Ot, Vt, Vt, W);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + u.top + '"/><stop offset="1" stop-color="' + u.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + va(v) + '%" cy="' + va(x) + '%" r="58%"><stop offset="0" stop-color="' + u.warm + '" stop-opacity="' + va(u.op * 0.8) + '"/><stop offset="1" stop-color="' + u.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + va(100 - v * 0.8) + '%" cy="' + va(100 - x * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + u.cool + '" stop-opacity="' + va(u.op * 0.64) + '"/><stop offset="1" stop-color="' + u.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + hu + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + M("url(#" + n + "l)") + M("url(#" + n + "w)") + M("url(#" + n + "k)") + (A ? '<g opacity="' + va(l.ghostAlpha) + '">' + A + "</g>" : "") + k.body + '<rect x="14" y="14" width="172" height="' + k.head + '" fill="' + gd + '" filter="url(#' + n + 's)"/></g>' + (I ? '<g clip-path="url(#' + n + 'c)" opacity="' + va(l.grip) + '">' + I.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + hu + '" stroke-width="3"/>' + (I ? '<g opacity="' + va(l.grip) + '">' + I.knobs + "</g>" : "") + "</svg>";
}
function sg({ onMove: n, onSet: l }) {
  var ie;
  const i = "cv" + ++Jm, u = document.createElement("div");
  u.className = "tfCoverArt";
  const v = (ie = window.matchMedia) == null ? void 0 : ie.call(window, "(pointer: coarse)").matches;
  let x = null;
  const k = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let A = 0, I = !1, M = !1, W = null, F = 0, V = 0;
  const z = () => (x == null ? void 0 : x.kind) === "curtain" ? "x" : "y", pe = () => W || I || M || x.moving || x.target != null ? 1 : v ? performance.now() < V ? 1 : 0.4 : 0, te = () => {
    u.innerHTML = rg(i, { kind: x.kind, pos: k.pos, bar: x.target ?? k.pos, tilt: k.tilt, vel: k.vel, ph: k.ph, ghost: k.gpos, ghostAlpha: k.ghost, grip: k.grip });
  };
  function Q(oe) {
    A = 0;
    const ae = k.last ? Math.min(0.064, (oe - k.last) / 1e3) : 1 / 60, E = ae * 60;
    k.last = oe;
    const Ce = x.pos - k.pos, le = k.pos;
    k.pos += Math.sign(Ce) * Math.min(Math.abs(Ce), Math.max(10.5, Math.abs(Ce) * 1.4) * ae), Math.abs(x.pos - k.pos) < 0.03 && (k.pos = x.pos), k.vel = k.vel * 0.86 + (k.pos - le) / E * 0.14, Math.abs(k.vel) < 0.015 && k.pos === x.pos && (k.vel = 0), (k.pos !== le || k.vel) && (k.ph += (0.06 + Math.abs(k.vel) * 0.03) * E);
    const qe = x.tilt - k.tilt;
    k.tilt += Math.sign(qe) * Math.min(Math.abs(qe), Math.max(60, Math.abs(qe) * 4) * ae);
    const re = pe();
    k.grip += (re - k.grip) * Math.min(1, ae * (re > k.grip ? 11 : 3.5)), Math.abs(re - k.grip) < 0.01 && (k.grip = re);
    const Ze = x.target != null && Math.abs(x.target - k.pos) > 0.5 ? 0.22 : 0;
    x.target != null && (k.gpos = x.target), k.ghost += (Ze - k.ghost) * Math.min(1, ae * (Ze > k.ghost ? 16 : 3)), Math.abs(Ze - k.ghost) < 4e-3 && (k.ghost = Ze), te(), k.pos !== x.pos || k.vel || k.tilt !== x.tilt || k.grip !== re || k.ghost !== Ze ? A = requestAnimationFrame(Q) : k.last = 0;
  }
  const G = () => {
    x && !A && (A = requestAnimationFrame(Q));
  }, he = setInterval(() => {
    x && !A && te();
  }, 60 * 1e3), ce = (oe) => {
    const ae = u.getBoundingClientRect();
    return z() === "x" ? (oe.clientX - ae.left) / ae.width : (oe.clientY - ae.top) / ae.height;
  };
  u.addEventListener("pointerdown", (oe) => {
    var Ce;
    if (!(x != null && x.canSet) || oe.button > 0) return;
    oe.preventDefault(), (Ce = u.setPointerCapture) == null || Ce.call(u, oe.pointerId);
    const ae = x.target ?? x.pos, E = u.getBoundingClientRect();
    W = { p0: ce(oe), from: ae, x0: oe.clientX, value: null, side: null }, x.kind === "curtain" && ae > 0 && (W.side = (oe.clientX - E.left) / E.width < 0.5 ? "L" : "R"), G();
  }), u.addEventListener("pointermove", (oe) => {
    if (!W) return;
    let ae;
    if (x.kind === "curtain") {
      if (!W.side) {
        const Ce = oe.clientX - W.x0;
        if (Math.abs(Ce) < 4) return;
        W.side = Ce < 0 ? "L" : "R";
      }
      const E = (Vt / 2 - Vt * 0.12) / 200;
      ae = W.from + (W.side === "L" ? -1 : 1) * ((ce(oe) - W.p0) / E) * 100;
    } else ae = W.from - (ce(oe) - W.p0) / (Vt / 200) * 100;
    W.value = Oi(ae, 0, 100), n(W.value);
  });
  const ke = () => {
    if (!W) return;
    const oe = W.value;
    W = null, oe != null && l(Math.round(oe)), G();
  };
  return u.addEventListener("pointerup", ke), u.addEventListener("pointercancel", ke), u.addEventListener("lostpointercapture", ke), u.addEventListener("pointerenter", () => {
    I = !0, G();
  }), u.addEventListener("pointerleave", () => {
    I = !1, G();
  }), u.addEventListener("focus", () => {
    M = u.matches(":focus-visible"), G();
  }), u.addEventListener("blur", () => {
    M = !1, G();
  }), u.addEventListener("keydown", (oe) => {
    if (!(x != null && x.canSet)) return;
    const ae = Math.round(x.target ?? x.pos), E = oe.shiftKey ? 10 : 1, Ce = { ArrowUp: ae + E, ArrowRight: ae + E, ArrowDown: ae - E, ArrowLeft: ae - E, PageUp: ae + 25, PageDown: ae - 25, Home: 0, End: 100 }[oe.key];
    if (Ce == null) return;
    oe.preventDefault();
    const le = Oi(Ce, 0, 100);
    n(le), clearTimeout(F), F = setTimeout(() => l(le), 500);
  }), {
    el: u,
    update(oe) {
      const ae = !x;
      x = oe, ae && (k.pos = x.pos, k.tilt = x.tilt, V = performance.now() + 1500, v && setTimeout(G, 1600)), u.classList.toggle("x", z() === "x"), u.classList.toggle("y", z() === "y"), x.canSet ? (u.tabIndex = 0, u.setAttribute("role", "slider"), u.setAttribute("aria-valuemin", "0"), u.setAttribute("aria-valuemax", "100"), u.setAttribute("aria-valuenow", String(Math.round(x.target ?? x.pos))), u.setAttribute("aria-orientation", z() === "x" ? "horizontal" : "vertical")) : u.setAttribute("role", "img"), u.setAttribute("aria-label", x.name + (x.canSet ? " position" : "")), u.setAttribute("aria-valuetext", x.text), G();
    },
    destroy() {
      cancelAnimationFrame(A), A = 0, clearInterval(he), clearTimeout(F), u.remove();
    }
  };
}
const vu = "move-assistant-density", Ii = {
  get(n) {
    try {
      return localStorage.getItem(n);
    } catch {
      return null;
    }
  },
  set(n, l) {
    try {
      localStorage.setItem(n, l);
    } catch {
    }
  }
}, J = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), up = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', bu = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', wu = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', lc = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, xu = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, yu = 1, lg = 4, ku = 16, Mu = 32, dg = 128, cg = 256, Su = 16384, pg = 1, ug = 2, Cu = 4, fg = 8, hg = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Tu = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, mg = { curtain: "curtains", blind: "blind", venetian: "blinds" }, ud = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" },
  // more to choose from (the leadership demo, Matt, 9 Nov), all off until switched on in Edit Home page
  covers: { name: "Covers", icon: "mdi:blinds-horizontal", colour: "#9c27b0" },
  people: { name: "People", icon: "mdi:account-multiple", colour: "#03a9f4" },
  openings: { name: "Doors and windows", icon: "mdi:door-open", colour: "#ff9800" },
  leaks: { name: "Leaks", icon: "mdi:water", colour: "#2196f3" },
  vacuum: { name: "Vacuum", icon: "mdi:robot-vacuum", colour: "#4caf50" }
}, Lu = ["covers", "people", "openings", "leaks", "vacuum"], Au = "move_assistant_house", Eu = "move-assistant-house-used", fp = ["switch", "fan", "input_boolean", "automation"], Du = "move-assistant-house-look", gg = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], vg = [["popup", "Popup"], ["sheet", "Sheet"]], bg = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], wg = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], xg = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], dc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', yg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', kg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', _u = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', hp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', Mg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', Ru = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', cc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', Bu = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Mf = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", pc = Mf(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Pu = Mf(["M20 6L9 17L4 12"]), Fi = (n, l = "") => '<span class="tfAreaGlyph" data-icon-for="' + J(n || "") + '"' + (l ? ' data-icon-name="' + J(l) + '"' : "") + "></span>", Sg = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Cg = 1, Tg = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Nu = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, uc = ["door", "window", "garage_door", "opening"], Hu = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, fd = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Lg = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Ag = 10, Eg = 20, Dg = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, _g = ["living room", "bedroom", "office"];
function Rg(n, { config: l, getHass: i }) {
  var tn, Kd, $d;
  const u = (e) => n.getElementById(e), v = u("app"), x = l || {}, k = String(x.layout || "").toLowerCase().replace("_", "-") === "test-focus", A = String(x.page || "").toLowerCase() === "overview";
  let I = Ii.get(vu) === "1", M = {};
  const W = (e) => {
    var t;
    return (t = i()) == null ? void 0 : t.callWS(e);
  }, F = (e, t, o) => W({ type: "call_service", domain: e, service: t, service_data: o }), V = n.querySelector("#appearancePane .toggleList");
  V && !u("densityToggle") && (V.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), u("densityToggle").addEventListener("click", () => {
    I = !I, Ii.set(vu, I ? "1" : "0"), ae();
  }));
  const z = [
    ["weather", "Weather", "The forecast under Home.", (e) => e.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (e) => e.startsWith("sensor.") && wt(e).device_class === "power" && /^(W|kW)$/.test(wt(e).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (e) => e.startsWith("alarm_control_panel.")]
  ], pe = (e, t, o, r) => '<div class="themeChoice" id="' + e + '" role="group" aria-label="' + t + '">' + r.map(([c, h]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + o + '="' + c + '">' + h + "</button>").join("") + "</div>", te = (e, t, o, r) => '<div class="toggleRow"' + (r ? ' id="' + r + '"' : "") + "><div><strong>" + e + "</strong>" + (t ? '<div class="status">' + t + "</div>" : "") + "</div>" + o + "</div>";
  function Q() {
    var N, ne;
    if (!k || u("housePane")) return;
    const e = u("settingsView");
    e.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const t = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], o = (X, Z) => '<div class="houseTab' + (X === "look" ? " active" : "") + '" data-house-pane="' + X + '"><section class="card">' + Z + "</section></div>";
    e.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + t.map(([X, Z]) => '<button class="tab segBtn' + (X === "look" ? " active" : "") + '" type="button" data-house-tab="' + X + '">' + Z + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    o("look", gg.map(([X, Z]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + X + '"><div class="tfCardTitle">' + Z + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    o("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + o("sources", '<div class="toggleList">' + z.map(([X, Z, se]) => te(Z, se, '<select class="settingsSelect" data-source="' + X + '" aria-label="' + Z + '"></select>')).join("") + "</div>") + o("sums", '<div class="toggleList">' + Object.entries(ud).map(([X, Z]) => te(Z.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + X + '" aria-label="' + Z.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const r = (X) => e.querySelector('[data-look-group="' + X + '"]'), c = (X) => X == null ? void 0 : X.closest(".toggleRow");
    [c(e.querySelector(".themeBtn"))].forEach((X) => X && r("look").appendChild(X));
    const h = c(u("densityToggle"));
    h && (h.hidden = !0), [c(u("moreInfoChoice")), c(u("namesChoice"))].forEach((X) => X && r("house").appendChild(X)), r("house").insertAdjacentHTML("beforeend", te("Lights", "How lights show on the house page.", pe("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + te("Pad", "What the Dual Axis Controller’s pad sets on its tile.", pe("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [c(u("hoursChoice")), c(u("wxStyleChoice"))].forEach((X) => X && r("weather").appendChild(X));
    const p = u("housePane"), g = p.querySelector(".houseTabs"), w = g.querySelector(".rubberIndicator"), D = "homecore-light-view", P = (X) => {
      p.classList.toggle("tfLightCardsOn", X === "cards"), p.querySelectorAll("[data-light-view]").forEach((Z) => Z.setAttribute("aria-pressed", String(Z.dataset.lightView === X))), Ii.set(D, X);
    };
    P(Ii.get(D) === "table" ? "table" : "cards"), p.querySelector(".tfLightView").addEventListener("click", (X) => {
      const Z = X.target.closest("[data-light-view]");
      Z && P(Z.dataset.lightView);
    }), new ResizeObserver(() => he()).observe(p), (ne = (N = document.fonts) == null ? void 0 : N.ready) == null || ne.then(() => he());
    const L = (X) => {
      const Z = g.querySelector(".tab.active");
      w.style.transition = "none", X ? gc(w, w.offsetLeft, w.offsetWidth, Z.offsetLeft, Z.offsetWidth) : (w.style.left = Z.offsetLeft + "px", w.style.width = Z.offsetWidth + "px");
    };
    new ResizeObserver(() => L(!1)).observe(g), p.addEventListener("click", (X) => {
      const Z = X.target.closest("[data-house-tab]");
      if (Z) {
        g.querySelectorAll(".tab").forEach((K) => K.classList.toggle("active", K === Z)), p.querySelectorAll(".houseTab").forEach((K) => K.classList.toggle("active", K.dataset.housePane === Z.dataset.houseTab)), Z.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), L(!0), he();
        return;
      }
      const se = X.target.closest("[data-light-fav]");
      if (se) {
        Ss(se.dataset.lightFav);
        return;
      }
      const j = X.target.closest("[data-light-pick]");
      if (j) {
        const [K, We] = j.dataset.lightPick.split("|"), Bt = { ...Ye[K] };
        j.dataset.v ? Bt[We] = j.dataset.v : delete Bt[We], Ye[K] = Bt, ht(), [...sn.keys()].filter((st) => st.endsWith(":" + We)).forEach((st) => sn.delete(st)), Ro();
        return;
      }
      const ye = X.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!ye || ye.disabled)) {
        if (ye.dataset.lights && (Ye.lights = ye.dataset.lights), ye.dataset.dacPad && (Ye.dacPad = ye.dataset.dacPad), (ye.dataset.lights || ye.dataset.dacPad) && (ht(), sn.clear()), ye.dataset.sumToggle) {
          const K = ye.dataset.sumToggle, We = new Set(Fe.hiddenSums || []);
          We.has(K) ? We.delete(K) : We.add(K), Fe = { ...Fe, hiddenSums: [...We] }, eo();
        }
        Ro();
      }
    }), p.addEventListener("change", (X) => {
      const Z = X.target;
      Z.dataset.source && (Fe = { ...Fe, sources: { ...Fe.sources || {}, [Z.dataset.source]: Z.value || void 0 } }, eo());
      const se = Z.dataset.lightStyle || Z.dataset.lightPad;
      if (se) {
        const j = Z.dataset.lightStyle ? "lightStyles" : "lightPads", ye = { ...Ye[j] };
        Z.value ? ye[se] = Z.value : delete ye[se], Ye[j] = ye, ht(), [...sn.keys()].filter((K) => K.endsWith(":" + se)).forEach((K) => sn.delete(K));
      }
      Ro();
    });
  }
  function G() {
    var L, N;
    $i() && xi();
    const e = u("housePane");
    if (!e) return;
    const t = !!customElements.get(ka);
    e.querySelectorAll("[data-lights]").forEach((ne) => ne.setAttribute("aria-pressed", String(ne.dataset.lights === Ye.lights))), u("lightsRow").querySelector(".status").textContent = t || !$i() ? "How lights show on the house page." : Uo === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", e.querySelectorAll("[data-dac-pad]").forEach((ne) => ne.setAttribute("aria-pressed", String(ne.dataset.dacPad === Ye.dacPad))), u("dacPadRow").hidden = !$i();
    for (const ne of e.querySelectorAll("[data-source]")) {
      if (ne === n.activeElement) continue;
      const [X] = z.find(([se]) => se === ne.dataset.source), Z = Object.keys(M).filter(z.find(([se]) => se === X)[3]).sort((se, j) => Pe(se).localeCompare(Pe(j)));
      ne.dataset.sig !== Z.join(",") && (ne.innerHTML = '<option value="">Automatic</option>' + Z.map((se) => '<option value="' + J(se) + '">' + J(Pe(se)) + "</option>").join(""), ne.dataset.sig = Z.join(",")), ne.value = Z.includes((L = Fe.sources) == null ? void 0 : L[X]) ? Fe.sources[X] : "";
    }
    e.querySelectorAll("[data-sum-toggle]").forEach((ne) => {
      const X = !(Fe.hiddenSums || []).includes(ne.dataset.sumToggle);
      ne.classList.toggle("on", X), ne.setAttribute("aria-checked", String(X));
    });
    const o = u("lightRows"), r = u("lightCards"), c = n.activeElement, h = o != null && o.contains(c) || r != null && r.contains(c) ? c : null;
    if (!o || h != null && h.matches("select")) {
      he();
      return;
    }
    const p = new Set(Ne()), g = (ne, X, Z, se) => '<option value="' + ne + '"' + (ne === Z ? " selected" : "") + ">" + X + "</option>", w = Object.keys(M).filter((ne) => ne.startsWith("light.")).sort((ne, X) => !pt.get(ne) - !pt.get(X) || (pt.get(ne) || "").localeCompare(pt.get(X) || "") || Pe(ne).localeCompare(Pe(X))).map((ne) => {
      const X = Ye.lightStyles[ne] || "", Z = Ye.lightPads[ne] || "", se = p.has(ne), j = J(Pe(ne));
      return "<tr><td><strong>" + j + "</strong></td><td>" + J(pt.get(ne) || "—") + "</td><td>" + J(Ut(ne)) + '</td><td class="metaSwitchCol"><button class="switch' + (se ? " on" : "") + '" type="button" role="switch" aria-checked="' + se + '" data-light-fav="' + J(ne) + '" aria-label="' + j + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + J(ne) + '" aria-label="' + j + ' tile">' + g("", "Default", X) + g("tile", "HomeCore tile", X) + g("dac", "Dual Axis Controller", X) + '</select></td><td><select class="settingsSelect" data-light-pad="' + J(ne) + '" aria-label="' + j + ' pad"' + (Ki(ne) ? "" : " disabled") + ">" + g("", "Default", Z) + g("temperature", "Temperature", Z) + g("colour", "Colour", Z) + "</select></td></tr>";
    }).join(""), D = (ne, X, Z, se, j) => '<div class="themeChoice" role="group" aria-label="' + Z + '">' + se.map(([ye, K]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (ye === j) + '" data-light-pick="' + ne + "|" + J(X) + '" data-v="' + ye + '">' + K + "</button>").join("") + "</div>", P = Object.keys(M).filter((ne) => ne.startsWith("light.")).sort((ne, X) => !pt.get(ne) - !pt.get(X) || (pt.get(ne) || "").localeCompare(pt.get(X) || "") || Pe(ne).localeCompare(Pe(X))).map((ne) => {
      const X = p.has(ne), Z = J(Pe(ne)), se = [pt.get(ne), Ut(ne)].filter(Boolean).map(J).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + Z + '</strong><div class="status">' + se + "</div></div></div>" + te("Favourite", "", '<button class="switch' + (X ? " on" : "") + '" type="button" role="switch" aria-checked="' + X + '" data-light-fav="' + J(ne) + '" aria-label="' + Z + ' is a favourite"></button>') + te("Tile", "", D("lightStyles", ne, Z + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Ye.lightStyles[ne] || "")) + (Ki(ne) ? te("Pad", "", D("lightPads", ne, Z + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Ye.lightPads[ne] || "")) : "") + "</div>";
    }).join("");
    o.dataset.html !== w && (o.innerHTML = w, o.dataset.html = w), r.dataset.html !== P && (r.innerHTML = P, r.dataset.html = P), h != null && h.dataset.lightFav && ((N = (r.contains(h) ? r : o).querySelector('[data-light-fav="' + CSS.escape(h.dataset.lightFav) + '"]')) == null || N.focus({ preventScroll: !0 })), he();
  }
  function he() {
    var t, o, r;
    const e = u("housePane");
    if (e)
      for (const c of e.querySelectorAll(".themeChoice")) {
        const h = [...c.querySelectorAll("button")];
        let p = (t = c.nextElementSibling) != null && t.classList.contains("tfChoiceList") ? c.nextElementSibling : null;
        if (!p) {
          p = document.createElement("select"), p.className = "settingsSelect tfChoiceList", p.setAttribute("aria-label", c.getAttribute("aria-label") || ((r = (o = c.closest(".toggleRow")) == null ? void 0 : o.querySelector("strong")) == null ? void 0 : r.textContent) || ""), p.addEventListener("change", () => {
            var L;
            return (L = h[Number(p.value)]) == null ? void 0 : L.click();
          }), c.after(p);
          const P = () => {
            p.innerHTML = h.map((N, ne) => '<option value="' + ne + '"' + (N.disabled ? " disabled" : "") + ">" + J(N.textContent) + "</option>").join("");
            const L = h.findIndex((N) => N.getAttribute("aria-pressed") === "true" || N.classList.contains("active"));
            L >= 0 && (p.value = String(L));
          };
          new MutationObserver(P).observe(c, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), P();
        }
        const g = (P) => {
          c.hidden !== !P && (c.hidden = !P), p.hidden !== P && (p.hidden = P);
        };
        if (h.length > 3) {
          g(!1);
          continue;
        }
        if (!c.getClientRects().length && !p.getClientRects().length) {
          p.dataset.fit || g(!0);
          continue;
        }
        const w = c.hidden;
        c.hidden = !1;
        const D = h.every((P) => P.scrollWidth <= P.clientWidth + 1);
        c.hidden = w, g(D), p.dataset.fit = "1";
      }
  }
  const ce = document.createElement("div");
  ce.className = "densityBadge", ce.setAttribute("aria-live", "polite"), ce.hidden = !0, v.appendChild(ce);
  let ke = 0;
  function ie() {
    if (!I) return;
    const e = u("homeView"), t = (h) => h.offsetParent !== null && !h.closest("[hidden]");
    e.querySelectorAll(":scope .card, :scope .tfAction").forEach((h) => {
      t(h) && (h.dataset.h = Math.round(h.getBoundingClientRect().height) + " px");
    });
    const o = [...e.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(t), r = window.innerHeight, c = o.filter((h) => {
      const p = h.getBoundingClientRect();
      return p.height > 0 && p.top >= 0 && p.bottom <= r + 0.5;
    }).length;
    ce.hidden = !e.classList.contains("active"), ce.innerHTML = "<b>" + c + "</b><small>of " + o.length + " readings on screen</small>";
  }
  const oe = () => {
    I && requestAnimationFrame(ie);
  };
  function ae() {
    var e;
    v.classList.toggle("showDensity", I), (e = u("densityToggle")) == null || e.classList.toggle("on", I), ce.hidden = !I, clearInterval(ke), I && (ke = setInterval(ie, 1e3), ie());
  }
  window.addEventListener("scroll", oe, { capture: !0, passive: !0 }), window.addEventListener("resize", oe, { passive: !0 });
  const E = n.querySelector("#homeView .grid"), Ce = document.createElement("style");
  n.appendChild(Ce);
  const le = new ResizeObserver(() => Ze()), qe = /* @__PURE__ */ new Set(), re = (e) => {
    const t = e.getBoundingClientRect().height;
    return Math.abs(t - e.offsetHeight) < 1 ? t : e.offsetHeight;
  };
  function Ze() {
    const e = v.classList.contains("tfAreaOpen") && !v.classList.contains("tfWeatherOpen");
    if (E.classList.toggle("tfStack", e), qe.forEach((w) => {
      (!e || !w.isConnected) && (le.unobserve(w), qe.delete(w));
    }), !e) {
      Ce.textContent = "";
      return;
    }
    const t = getComputedStyle(E), o = parseFloat(t.columnGap) || 0, r = t.gridTemplateColumns.split(" ").length, c = [...E.children].filter((w) => w.dataset.k && w.offsetParent);
    Ce.disabled = !0;
    const h = c.map((w) => {
      const D = getComputedStyle(w), P = /span (\d+)/.exec(D.gridColumnStart + " " + D.gridColumnEnd);
      return Math.min(r, P ? +P[1] : D.gridColumnEnd === "-1" ? r : 1);
    });
    Ce.disabled = !1;
    let p = 0;
    const g = c.map((w, D) => {
      qe.has(w) || (qe.add(w), le.observe(w));
      const P = h[D];
      p + P > r && (p = 0);
      const L = p + 1;
      return p = (p + P) % r, '#homeView .grid.tfStack>[data-k="' + CSS.escape(w.dataset.k) + '"]{grid-column:' + L + " / span " + P + ";grid-row-end:span " + Math.max(1, Math.ceil(re(w) + o)) + "}";
    }).join(`
`);
    Ce.textContent !== g && (Ce.textContent = g);
  }
  new MutationObserver(Ze).observe(E, { childList: !0 }), new MutationObserver(Ze).observe(v, { attributes: !0, attributeFilter: ["class"] });
  let T = null, B = null, q = null, R = null;
  const de = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), Se = 6;
  let Te = null;
  const $e = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), Ya = /* @__PURE__ */ new Map();
  let Fe = { favourites: null }, fo = {}, Gn = {}, ho = [], oa = null;
  const Xe = (() => {
    try {
      return JSON.parse(Ii.get(Eu)) || {};
    } catch {
      return {};
    }
  })();
  let pt = /* @__PURE__ */ new Map(), on = 0;
  function eo() {
    clearTimeout(on), on = setTimeout(() => Promise.resolve(W({ type: "frontend/set_user_data", key: Au, value: Fe })).catch(() => {
    }), 400);
  }
  const Ye = (() => {
    let e = {};
    try {
      e = JSON.parse(Ii.get(Du)) || {};
    } catch {
    }
    const t = (o, r) => Object.fromEntries(Object.entries(o || {}).filter(([, c]) => r.includes(c)));
    return {
      more: e.more === "sheet" ? "sheet" : "popup",
      names: e.namesPicked && ["auto", "cut", "wrap", "scroll"].includes(e.names) ? e.names : "scroll",
      namesPicked: !!e.namesPicked,
      hoursWindow: ["day", "waking", "all"].includes(e.hoursWindow) ? e.hoursWindow : "day",
      wxStyle: ["bitmap", "onebit", "smooth", "line"].includes(e.wxStyle) ? e.wxStyle : "bitmap",
      lights: e.lights === "dac" ? "dac" : "tile",
      dacPad: e.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: t(e.lightStyles, ["tile", "dac"]),
      lightPads: t(e.lightPads, ["temperature", "colour"])
    };
  })(), ht = () => Ii.set(Du, JSON.stringify(Ye)), Tt = () => {
    v.dataset.more = Ye.more, v.dataset.names = Ye.names, ld();
  };
  k && V && !u("moreInfoChoice") && (u("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + vg.map(([e, t]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ye.more === e) + '" data-more-style="' + e + '">' + t + "</button>").join("") + "</div></div>"
  ), u("moreInfoChoice").addEventListener("click", (e) => {
    const t = e.target.closest("[data-more-style]");
    t && (Ye.more = t.dataset.moreStyle, ht(), Tt(), u("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === t))));
  }), u("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + bg.map(([e, t]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ye.names === e) + '" data-names-style="' + e + '">' + t + "</button>").join("") + "</div></div>"
  ), u("namesChoice").addEventListener("click", (e) => {
    const t = e.target.closest("[data-names-style]");
    t && (Ye.names = t.dataset.namesStyle, Ye.namesPicked = !0, ht(), Tt(), u("namesChoice").querySelectorAll("[data-names-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === t))));
  }), u("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + wg.map(([e, t]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ye.hoursWindow === e) + '" data-hours-window="' + e + '">' + t + "</button>").join("") + "</div></div>"
  ), u("hoursChoice").addEventListener("click", (e) => {
    const t = e.target.closest("[data-hours-window]");
    t && (Ye.hoursWindow = t.dataset.hoursWindow, ht(), Kt == null || Kt.refresh(), u("hoursChoice").querySelectorAll("[data-hours-window]").forEach((o) => o.setAttribute("aria-pressed", String(o === t))));
  }), u("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + xg.map(([e, t]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ye.wxStyle === e) + '" data-wx-style="' + e + '">' + t + "</button>").join("") + "</div></div>"
  ), u("wxStyleChoice").addEventListener("click", (e) => {
    const t = e.target.closest("[data-wx-style]");
    t && (Ye.wxStyle = t.dataset.wxStyle, ht(), Kt == null || Kt.setStyle(Ye.wxStyle), wa == null || wa.forEach((o) => o.setStyle(Ye.wxStyle)), u("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === t))));
  })), Q();
  let mt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const wn = /* @__PURE__ */ new Map();
  let hs = "";
  const An = k ? ih({ onChange: () => Ma() }) : null;
  k && v.classList.add("house");
  const vt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Kt = null, ms = null, Ho = !1;
  function gs(e) {
    const t = Dt();
    if (v.classList.toggle("houseBento", !!t), Kt && (ms !== t || e == null) && (Kt.destroy(), Kt = null), !t || e == null) {
      vt.remove();
      return;
    }
    vt.isConnected || E.append(vt), vt.style.order = e, !Kt && !Ho && (Kt = fu(vt, { getHass: i, entityId: t, style: Ye.wxStyle, hoursWindow: () => Ye.hoursWindow }), ms = t);
  }
  const Jt = [
    ["wx", ["current"]],
    ["avg", ["compared_to_average"]],
    ["aq", ["aq_tile"]],
    ["pollen", ["pollen_tile"]],
    ["radar", ["radar_tile"]],
    ["hourly", ["hourly"]],
    ["sun", ["sun"]],
    ["moon", ["moon"]],
    ["uv", ["uv_index"]],
    ["humidity", ["humidity"]],
    ["pressure", ["pressure"]],
    ["wind", ["wind"]],
    ["visibility", ["visibility"]]
  ], mo = Jt.map(([e]) => e), nt = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], El = { hourly: 2 }, Un = Object.fromEntries(Jt.map(([e]) => [e, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + e })]));
  let wa = null, Ke = null;
  function dt(e) {
    const t = Dt();
    wa && Ke !== t && (wa.forEach((o) => o.destroy()), wa = null), Object.values(Un).forEach((o) => t ? !o.isConnected && E.append(o) : o.remove()), t && !wa && !Ho && (wa = /* @__PURE__ */ new Map(), Ke = t), xa();
  }
  function xa() {
    if (!wa || Ho) return;
    const e = new Set(Mt().hidden);
    Jt.forEach(([t, o]) => {
      wa.has(t) || e.has(t) && !(_t != null && _t.fromTray && _t.key === t) || wa.set(t, fu(Un[t], { getHass: i, entityId: Ke, style: Ye.wxStyle, cards: o, onOpen: t === "wx" ? () => ci("weather") : void 0 }));
    });
  }
  const wt = (e) => {
    var t;
    return ((t = M[e]) == null ? void 0 : t.attributes) || {};
  }, Pe = (e) => wt(e).friendly_name || e, At = (e, t) => Hi(e) || (Number(wt(e).supported_features) & t) === t, Et = (e) => {
    const t = String(e ?? "").replace(/_/g, " ");
    return t.charAt(0).toUpperCase() + t.slice(1);
  }, It = (e, t = 1) => Number(e).toLocaleString(void 0, { minimumFractionDigits: t, maximumFractionDigits: t }), En = (e) => (e == null ? void 0 : e.state) === "on" ? e.attributes.brightness != null ? Math.max(1, Math.round(e.attributes.brightness / 2.55)) : 100 : 0, vs = (e) => wt(e).supported_color_modes || [], wr = (e, t) => [5, 3, 1].map((o) => {
    const r = (o + e / 60) % 6;
    return 255 * (1 - t / 100 * Math.max(0, Math.min(r, 4 - r, 1)));
  }), Ba = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)), go = (e) => 0.2126 * Ba(e[0]) + 0.7152 * Ba(e[1]) + 0.0722 * Ba(e[2]), xr = (e, t) => {
    const o = go(e), r = go(t);
    return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
  }, bs = 0.55, vo = ["hs", "xy", "rgb", "rgbw", "rgbww"], js = (e) => {
    const t = wt(e), o = vo.includes(t.color_mode);
    return (o && t.rgb_color ? t.rgb_color : o && t.hs_color ? wr(...t.hs_color) : [255, 170, 0]).map((r) => Math.round(Math.max(0, Math.min(255, r))));
  }, qi = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function bo(e) {
    var r;
    const t = e.split(".")[0], o = (r = M[e]) == null ? void 0 : r.state;
    return !o || o === "unavailable" || o === "unknown" ? null : t === "light" ? o === "on" ? js(e) : null : t === "climate" ? qi[o] || null : t === "cover" ? o !== "closed" ? [146, 107, 199] : null : t === "lock" ? o !== "locked" ? [244, 67, 54] : null : t === "media_player" ? ["playing", "paused", "on", "buffering"].includes(o) ? [3, 169, 244] : null : t === "humidifier" || t === "valve" ? ["on", "open", "opening", "closing"].includes(o) ? [33, 150, 243] : null : t === "vacuum" ? ["cleaning", "returning"].includes(o) ? [0, 150, 136] : null : t === "alarm_control_panel" ? o !== "disarmed" && o !== "triggered" ? [76, 175, 80] : null : t === "fan" ? o === "on" ? [0, 188, 212] : null : (t === "switch" || t === "input_boolean") && o === "on" ? [255, 193, 7] : null;
  }
  function Wi(e, t, o = !1) {
    const [r, c, h] = e.map((X) => X / 255), p = Math.max(r, c, h), g = Math.min(r, c, h), w = p - g, D = w ? (p === r ? (c - h) / w + (c < h ? 6 : 0) : p === c ? (h - r) / w + 2 : (r - c) / w + 4) * 60 : 0, P = (p + g) / 2, L = w ? w / (1 - Math.abs(2 * P - 1)) : 0, N = w < 0.1 ? Math.min(L, 0.25) : 1, ne = (X) => {
      const Z = (j) => (j + D / 30) % 12, se = N * Math.min(X, 1 - X);
      return [0, 8, 4].map((j) => Math.round(255 * (X - se * Math.max(-1, Math.min(Z(j) - 3, 9 - Z(j), 1)))));
    };
    for (let X = 0.5; o ? X < 0.96 : X > 0.04; X += o ? 0.01 : -0.01) {
      const Z = ne(X);
      if (xr(Z, t) >= 3) return "rgb(" + Z.join(",") + ")";
    }
    return o ? "#ffffff" : "#26221e";
  }
  const Vi = (e) => {
    const t = [1, 3, 5].map((o) => parseInt(e.slice(o, o + 2), 16));
    return Math.max(...t) - Math.min(...t) < 26 ? "" : ";--sum-d:" + Wi(t, [58, 58, 58], !0) + ";--sum-l:" + Wi(t, [230, 230, 230]);
  }, yr = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, Dl = () => [0, 1, 2].map((e) => "--g" + e + "-d:" + yr.d[e] + ";--g" + e + "-l:" + yr.l[e]).join(";"), Gt = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((e, t) => '<stop offset="' + e + '" style="stop-color:var(--g' + t + ')"/>').join("") + "</linearGradient></defs></svg>", Dn = (e) => {
    const t = e.map((o) => Math.round(o + (255 - o) * bs));
    return "--light-soft:rgb(" + t.join(",") + ");--light-ink:" + Wi(e, t);
  }, Io = (e) => Dn(js(e)), mi = (e) => {
    const t = bo(e);
    return t ? ' data-light style="' + Dn(t) + '"' : "";
  }, ja = (e) => {
    const t = vs(e);
    return t.length ? t.some((o) => o !== "onoff") : wt(e).brightness != null;
  }, ya = (e) => [wt(e).min_color_temp_kelvin || 2e3, wt(e).max_color_temp_kelvin || 6500], ua = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function zs(e) {
    const t = Math.max(1, Math.round((Date.now() - e) / 1e3));
    if (t < 10) return "Just now";
    if (t < 60) return t + " seconds ago";
    const o = Math.round(t / 60);
    if (o < 60) return o + (o === 1 ? " minute ago" : " minutes ago");
    const r = Math.round(o / 60);
    if (r < 24) return r + (r === 1 ? " hour ago" : " hours ago");
    const c = Math.round(r / 24);
    return c + (c === 1 ? " day ago" : " days ago");
  }
  const Yn = (e) => {
    var t;
    return wt(e).current_position ?? (((t = M[e]) == null ? void 0 : t.state) === "closed" ? 0 : 100);
  }, gi = (e) => {
    var t;
    return cn("pos", e, ((t = $e.get(e)) == null ? void 0 : t.pos) ?? Yn(e));
  }, Fo = (e) => {
    var t;
    return cn("tilt", e, ((t = $e.get(e)) == null ? void 0 : t.tilt) ?? wt(e).current_tilt_position);
  };
  function Ut(e) {
    var p;
    const t = M[e];
    if (!t) return "Not found";
    if (t.state === "unavailable") return "Unavailable";
    const o = t.attributes, r = e.split(".")[0];
    if (r === "light") {
      if (t.state !== "on") return "Off";
      const g = o.color_temp_kelvin;
      return (ja(e) ? En(t) + "%" : "On") + (o.color_mode === "color_temp" && g ? " · " + Number(g).toLocaleString() + "k" : vo.includes(o.color_mode) ? " · Colour" : "");
    }
    if (r === "climate") return (t.state === "off" ? "Off" : Et(o.hvac_action || t.state)) + " · " + It(o.current_temperature) + " °C now";
    if (r === "cover") {
      const g = Yn(e), w = o.current_tilt_position;
      return t.state === "opening" || t.state === "closing" ? Et(t.state) + " - " + g + "%" : (g <= 0 ? "Closed" : g >= 100 ? "Open" : "Partially open") + (w > 0 && w < 100 ? " · tilted" : "");
    }
    if (r === "humidifier") return t.state !== "on" ? "Off" : Et(o.action || "on") + " · " + o.current_humidity + "% now";
    if (r === "vacuum") return Et(t.state) + (t.state === "cleaning" && ((p = o.rooms) != null && p.length) ? " · " + o.rooms.join(", ") : "") + (o.battery_level != null ? " · " + o.battery_level + "%" : "");
    if (r === "media_player") return t.state === "playing" || t.state === "paused" ? (t.state === "paused" ? "Paused · " : "") + (o.media_title || "Playing") : Et(t.state);
    if (r === "alarm_control_panel") return Nu[t.state] || Et(t.state);
    if (r === "lock" || r === "valve") return Et(t.state);
    if (r === "switch") return t.state === "on" ? "On" : "Off";
    if (r === "plant") return t.state === "ok" ? "Healthy" : Et(o.problem);
    if (r === "binary_sensor")
      return o.device_class === "battery" ? t.state === "on" ? "Low" : "Normal" : o.device_class === "problem" ? t.state === "on" ? "Problem" : "OK" : o.device_class === "moisture" ? t.state === "on" ? "Wet" : "Dry" : uc.includes(o.device_class) ? t.state === "on" ? "Open" : "Closed" : t.state === "on" ? "Detected" : "Clear";
    if (o.rang) return "Rang at " + ua(o.rang);
    const c = i();
    if (c != null && c.formatEntityState && !Hi(e))
      try {
        return c.formatEntityState(t);
      } catch {
      }
    const h = Number(t.state);
    if (t.state !== "" && Number.isFinite(h)) {
      const g = Math.abs(h) >= 100 ? 0 : Math.abs(h) >= 10 ? 1 : 2, w = o.unit_of_measurement ? o.unit_of_measurement === "%" ? "%" : " " + o.unit_of_measurement : "";
      return h.toLocaleString(void 0, { maximumFractionDigits: g }) + w + (o.plant_low ? " · Low" : o.plant_high ? " · High" : "");
    }
    return Et(t.state);
  }
  const vi = (e) => e >= 1e3 ? It(e / 1e3, 2) + " kW" : Math.round(e).toLocaleString() + " W";
  function to(e) {
    var o, r;
    const t = i();
    e.querySelectorAll("[data-icon-for]").forEach((c) => {
      var g;
      const h = M[c.dataset.iconFor], p = c.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && h && !p) {
        let w = c.firstElementChild;
        (!w || w.localName !== "ha-state-icon") && (c.textContent = "", w = document.createElement("ha-state-icon"), c.appendChild(w)), w.hass = t, w.stateObj = h;
      } else if (customElements.get("ha-icon")) {
        let w = c.firstElementChild;
        (!w || w.localName !== "ha-icon") && (c.textContent = "", w = document.createElement("ha-icon"), c.appendChild(w)), w.icon = p || ((g = h == null ? void 0 : h.attributes) == null ? void 0 : g.icon) || "mdi:circle-medium";
      } else c.textContent || (c.textContent = (c.dataset.letter || Pe(c.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (o = e.querySelectorAll) == null || o.call(e, ".tfIcon").forEach(ji), (r = e.classList) != null && r.contains("tfIcon") && ji(e), Mr();
  }
  const kr = /* @__PURE__ */ new Map();
  function ji(e) {
    var h, p, g;
    const t = (((h = e.closest("[data-k]")) == null ? void 0 : h.dataset.k) || "") + "|" + (e.dataset.iconFor || ((p = e.querySelector("[data-icon-for]")) == null ? void 0 : p.dataset.iconFor) || e.getAttribute("aria-label") || ""), o = getComputedStyle(e), r = { backgroundColor: o.backgroundColor, color: o.color }, c = kr.get(t);
    kr.set(t, r), !(!c || c.backgroundColor === r.backgroundColor && c.color === r.color || (g = window.matchMedia) != null && g.call(window, "(prefers-reduced-motion: reduce)").matches) && e.animate([c, r], { duration: Sa.warp.cdur, delay: Sa.warp.cdelay, easing: sa[Sa.warp.ease], fill: "backwards" });
  }
  const zi = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Gs = (e) => {
    const t = [e];
    for (; t.length; ) {
      const o = t.shift();
      if (o.localName === "svg") return o;
      o.shadowRoot && t.push(...o.shadowRoot.children), t.push(...o.children);
    }
    return null;
  };
  function Us(e) {
    var ne, X, Z;
    const t = e.localName === "svg" ? e : Gs(e), o = t ? [...t.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!o.length) return !t;
    const r = (ne = e.closest(".tfIcon")) == null ? void 0 : ne.offsetWidth;
    if (r === void 0) return !0;
    if (!r) return !1;
    const c = r + "|" + o.map((se) => se.getAttribute("d") || se.localName).join("|");
    if (e.dataset.fitted === c) return !0;
    let h = 1 / 0, p = 1 / 0, g = -1 / 0, w = -1 / 0;
    for (const se of o) {
      const j = se.getBBox(), ye = getComputedStyle(se), K = ye.stroke !== "none" ? (parseFloat(ye.strokeWidth) || 0) / 2 : 0;
      !j.width && !j.height || (h = Math.min(h, j.x - K), p = Math.min(p, j.y - K), g = Math.max(g, j.x + j.width + K), w = Math.max(w, j.y + j.height + K));
    }
    if (!(g > h)) return !1;
    const D = (Z = (X = t.viewBox) == null ? void 0 : X.baseVal) != null && Z.width ? t.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, P = r > 40 ? r * (26 / 40) : r - 14, L = P * D.width / Math.max(g - h, w - p), N = L / D.width;
    return e.localName === "svg" ? (e.style.width = L + "px", e.style.height = L + "px") : e.style.setProperty("--mdc-icon-size", L + "px"), t.style.translate = ((D.x + D.width / 2 - (h + g) / 2) * N).toFixed(2) + "px " + ((D.y + D.height / 2 - (p + w) / 2) * N).toFixed(2) + "px", e.dataset.fitted = c, !0;
  }
  let Oo = 0;
  function qo(e = 0) {
    clearTimeout(Oo), [...n.querySelectorAll(zi)].filter((o) => !Us(o)).length && e < 5 && (Oo = setTimeout(() => qo(e + 1), 300));
  }
  function Mr() {
    clearTimeout(Oo), Oo = setTimeout(() => qo(), 60);
  }
  const bi = (e) => {
    var t, o, r;
    return e.startsWith("light.") && M[e] && !wt(e).icon && !((r = (o = (t = i()) == null ? void 0 : t.entities) == null ? void 0 : o[e]) != null && r.icon) ? "mdi:lightbulb" : "";
  }, la = (e, t, o) => (t = t || bi(e), ' data-icon-for="' + J(e) + '"' + (t ? ' data-icon-name="' + J(t) + '"' : "") + (o ? ' data-letter="' + J(o) + '"' : "")), xn = (e) => e.endsWith("_solar_power") ? "mdi:solar-power-variant" : wt(e).rang ? "mdi:doorbell" : "", Lt = (e, t, o, r) => J([e, t, o, r ? JSON.stringify(r) : ""].join("|")), Gi = (e) => J(JSON.stringify(e));
  function Wo(e, t) {
    var c, h;
    const o = J(Pe(t) + ", " + Ut(t));
    return '<div class="activityRow' + (Number.isFinite(Number((c = M[t]) == null ? void 0 : c.state)) && ((h = M[t]) == null ? void 0 : h.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + J(e + "|" + t) + '" aria-label="' + o + '. Show the last 24 hours"' : '" aria-label="' + o + '"') + '><div class="tfIcon" aria-hidden="true"' + la(t, xn(t)) + '></div><div><div class="activityRowName">' + J(Pe(t)) + '</div><div class="activityRowMeta">' + J(Ut(t)) + "</div></div></div>";
  }
  const Ui = (e, t, o) => '<div class="activityRow" aria-label="' + J(e + ", " + t) + '"><div class="tfIcon" aria-hidden="true"' + la("", o, e) + '></div><div><div class="activityRowName">' + J(e) + '</div><div class="activityRowMeta">' + J(t) + "</div></div></div>", rn = (e) => {
    var t;
    return ((t = ue.get(e)) == null ? void 0 : t.name) ?? Pe(e);
  }, Vo = (e) => {
    var t;
    return ((t = ue.get(e)) == null ? void 0 : t.text) ?? Ut(e);
  };
  function ws(e) {
    var o;
    const t = (o = ue.get(e)) == null ? void 0 : o.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (t ? la("", t, rn(e)) : la(e, xn(e))) + '></div><div><div class="activityRowName">' + J(rn(e)) + '</div><div class="activityRowMeta">' + J(Vo(e)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + J(rn(e)) + '’s last 24 hours">' + up + '</button></div><svg class="tfGraph" data-graph="' + J(e) + '" role="img" aria-label="' + J(rn(e)) + ', last 24 hours"></svg></div>';
  }
  function _n(e, t, o, r, c = "", h = null, p = "") {
    const g = T && T.key === e;
    return '<section class="card tfCard' + (p ? " " + p : "") + (g ? " open" : "") + '" data-tf data-k="' + J(e) + '" style="order:' + t + (g && T.h ? ";min-height:" + T.h + "px" : "") + '" aria-label="' + J(o) + '"><div class="activityHeader">' + (h ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + J(h) + '" aria-label="' + J(o + (M[h] ? ", " + Ut(h) : "") + ". More info") + '">' + J(o) + "</button>" : '<div class="activityTitle">' + J(o) + "</div>") + "</div>" + (g ? ws(T.id) : '<div class="activityRows">' + r.join("") + "</div>" + c) + "</section>";
  }
  function wo(e, t) {
    const o = "readings:" + e.id, r = e.readings.map((c) => Wo(o, c));
    return e.power != null && r.push(Ui("Power now", vi(e.power), "mdi:flash")), _n(o, t, "Readings", r);
  }
  function $t(e, t) {
    var g;
    const o = "energy:" + e.id, [r, c] = [e.solar.find((w) => w.endsWith("_power")), e.solar.find((w) => w.endsWith("_today"))], h = [r, c].filter(Boolean).map((w) => Wo(o, w)), p = Number(((g = M[r]) == null ? void 0 : g.state) || 0) * 1e3;
    return mt.grid && (h.push(Wo(o, mt.grid)), h.push(Ui("House use", vi(p + Number(M[mt.grid].state)), "mdi:home-lightning-bolt"))), _n(o, t, "Energy", h, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Zn = (e, t) => _n("plant:" + e.id, t, Pe(e.id), e.readings.map((o) => Wo("plant:" + e.id, o)), "", e.id);
  function Ca(e, t, o, r, c, h, p = null) {
    const g = o == null ? null : Math.max(0, Math.min(1, o)), w = g == null ? 0 : Math.round(g * 100);
    return '<div class="tfBar ' + e + '" role="slider" tabindex="0" aria-label="' + J(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + w + '"' + (c ? ' aria-valuetext="' + J(c) + '"' : "") + ' data-drag="' + J(e + "|" + t) + '">' + (p != null ? '<span class="was" aria-hidden="true" style="left:' + p + '%"></span>' : "") + (h ? g == null ? "" : '<b style="left:' + w + '%"></b>' : '<i style="width:' + w + '%"></i>') + "</div>";
  }
  const Yi = "move-assistant-house-last-bright", jo = (() => {
    try {
      return JSON.parse(Ii.get(Yi)) || {};
    } catch {
      return {};
    }
  })();
  let xs = 0;
  const Ta = (e, t) => {
    !t || jo[e] === t || (jo[e] = t, clearTimeout(xs), xs = setTimeout(() => Ii.set(Yi, JSON.stringify(jo)), 500));
  }, zo = (e, t, o, r) => '<div class="tfStep" role="group" aria-label="' + J(e) + '"><button type="button" data-act="' + o + '" aria-label="Lower ' + J(e.toLowerCase()) + '">' + xu.down + "</button><output>" + J(t) + '</output><button type="button" data-act="' + r + '" aria-label="Raise ' + J(e.toLowerCase()) + '">' + xu.up + "</button></div>", ao = (e, t, o) => '<div class="' + e + '" role="group" aria-label="' + J(t) + '">' + o.filter(Boolean).map((r) => '<button type="button" data-act="' + r.act + '"' + (r.pressed != null ? ' aria-pressed="' + r.pressed + '"' : "") + (r.disabled ? " disabled" : "") + (r.aria ? ' aria-label="' + J(r.aria) + '"' : "") + ">" + (r.html || J(r.label)) + "</button>").join("") + "</div>", wi = (e, t) => "width:" + Math.round(Math.max(0, Math.min(1, (e - t * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * t / 3).toFixed(2), Go = (e) => "left:calc(4px + " + e / 100 + " * (100% - 8px))", Sr = (e, t) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + J(Pe(e)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(t) + '" aria-valuetext="' + Math.round(t) + '% open" data-blocks="' + J(e) + '">' + [0, 1, 2, 3].map((o) => '<span><i style="' + wi(t, o) + '"></i><b' + (t >= (o + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (o + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Go(t) + '">' + Math.round(t) + "%</output></div>";
  function _l(e, t) {
    e.querySelectorAll(":scope>span").forEach((r, c) => {
      r.firstElementChild.setAttribute("style", wi(t, c)), r.lastElementChild.classList.toggle("lit", t >= (c + 1) * 25 - 12);
    });
    const o = e.querySelector(".tfTip");
    o.setAttribute("style", Go(t)), o.textContent = Math.round(t) + "%", e.setAttribute("aria-valuenow", String(Math.round(t))), e.setAttribute("aria-valuetext", Math.round(t) + "% open");
  }
  const Cr = (e, t) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + J(Pe(e)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(t) + '" aria-valuetext="' + Math.round(t) + '% open" data-drag="tilt|' + J(e) + '"><i style="width:calc((100% - 8px) * ' + t / 100 + ')"></i><span' + (t > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (t > 92 ? ' class="lit"' : "") + ">Open</span></div>", ys = (e, t, o) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + J(Pe(e)) + '">' + [
    At(e, pg) && ["open", "Open", "open_cover", t >= 100 && !o],
    At(e, fg) && ["stop", "Stop", "stop_cover", !1],
    At(e, ug) && ["close", "Close", "close_cover", t <= 0 && !o]
  ].filter(Boolean).map(([r, c, h, p]) => '<button type="button" data-act="' + Lt("cover", h, e) + '" aria-label="' + c + '"' + (p ? " disabled" : "") + ">" + hg[r] + "</button>").join("") + "</div>", xo = (e, t) => '<button class="tfIcon' + (t.art ? " art" : "") + '" type="button" data-act="' + t.button.act + '" aria-label="' + J(t.button.label) + '"' + (t.art ? ' style="background-image:url(&quot;' + J(t.art) + '&quot;)"' : la(e, t.icon)) + "></button>", Ys = (e) => '<button class="tfName" type="button" data-more="' + J(e) + '" aria-label="' + J(Pe(e) + ", " + Ut(e) + ". More info") + '"><span class="activityRowName">' + J(Pe(e)) + '</span><span class="activityRowMeta">' + J(Ut(e)) + "</span></button>";
  function Zi(e, t = !1, o = null) {
    const r = Yo(e), c = e.startsWith("light.") && yn(e) && !(o && Za(e) < 3), h = o || (t && e.startsWith("light.") ? ["bright"] : null), p = c ? ['<div class="tfDacPad" data-dac="' + (t ? "more:" : o ? "dash:" : "tile:") + J(e) + '"></div>'] : r.sections.map((g, w) => g && (!h || h.includes((r.parts || [])[w])) ? g : "").filter(Boolean);
    return '<div class="tfAction' + (c ? " tfDac" : "") + (r.on ? " on" : "") + (!c && !p.length ? " tfHeadOnly" : "") + '" data-k="' + J(e) + '"' + (r.tone ? ' data-tone="' + r.tone + '"' : "") + mi(e) + '><div class="tfActionHead">' + xo(e, r) + Ys(e) + "</div>" + p.join("") + "</div>";
  }
  const ka = "dual-controller-v3", ks = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Uo = null;
  async function xi() {
    if (Uo || customElements.get(ka)) return;
    Uo = "loading";
    const e = await Promise.resolve().then(() => W({ type: "lovelace/resources" })).catch(() => null), t = Array.isArray(e) && e.some((r) => /dual-axis-controller/i.test(r.url || ""));
    if (await Promise.race([customElements.whenDefined(ka), new Promise((r) => setTimeout(r, t ? 8e3 : 0))]), customElements.get(ka)) return;
    const o = Object.assign(document.createElement("script"), { src: ks });
    o.onerror = () => {
      Uo = "failed", G();
    }, document.head.appendChild(o);
  }
  const sn = /* @__PURE__ */ new Map(), Ki = (e) => (Ye.lightStyles[e] || Ye.lights) === "dac", $i = () => Ye.lights === "dac" || Object.values(Ye.lightStyles).includes("dac");
  function yn(e) {
    return Ki(e) && !!customElements.get(ka);
  }
  const Nt = (e) => Ye.lightPads[e] || Ye.dacPad, Xi = () => {
    const e = i();
    return e && {
      ...e,
      themes: { ...e.themes || {}, darkMode: !v.classList.contains("light") },
      callService: (t, o, r, ...c) => e.callService(t, ...rs(t, o, r), ...c)
    };
  }, Zs = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", Ms = (e) => {
    !e.shadowRoot || e.shadowRoot.querySelector("style[data-tf]") || (e.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Zs })).dataset.tf = "");
  }, ln = /* @__PURE__ */ new Map(), dn = new ResizeObserver((e) => e.forEach(({ target: t }) => {
    const o = t.parentElement;
    !o || !t.offsetHeight || (o.style.removeProperty("min-height"), ln.set(o.dataset.dac, o.offsetHeight));
  }));
  function Yt(e) {
    e.querySelectorAll("[data-dac]").forEach((t) => {
      const o = t.dataset.dac;
      let r = sn.get(o);
      if (!r) {
        const c = o.slice(o.indexOf(":") + 1);
        r = document.createElement(ka), r.setConfig({ type: "custom:" + ka, entity: c, pad: Nt(c), tap_action: { action: "none" } }), sn.set(o, r);
      }
      r.hass = Xi(), r.parentNode !== t && t.replaceChildren(r), !r.offsetHeight && ln.has(o) && (t.style.minHeight = ln.get(o) + "px"), dn.observe(r), Ms(r);
    });
  }
  function yo() {
    const e = Xi();
    sn.forEach((t, o) => {
      t.isConnected ? t.hass = e : sn.delete(o);
    });
  }
  customElements.whenDefined(ka).then(() => {
    k && (E != null && E.querySelector("[data-tf]")) && gl(Ro);
  });
  const cn = (e, t, o) => ve.has(e + "|" + t) ? ve.get(e + "|" + t) : o;
  function Yo(e) {
    var h;
    const t = M[e], o = t.attributes, r = e.split(".")[0], c = (p, g) => ({ act: Lt(p, "toggle", e), label: g });
    if (r === "light") {
      const p = t.state === "on", g = vs(e), [w, D] = ya(e), P = cn("bright", e, En(t));
      p && Ta(e, En(t));
      const L = cn("ct", e, p && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), N = cn("hue", e, p && vo.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null);
      return { on: p, button: c("light", "Turn " + Pe(e) + (p ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        ja(e) && Ca("bright", e, P / 100, Pe(e) + " brightness", P + "%", !1, p ? null : jo[e] ?? null),
        g.includes("color_temp") && Ca("ct", e, L == null ? null : (L - w) / (D - w), Pe(e) + " warm to cool", L == null ? "" : Math.round(L) + " kelvin", !0),
        g.some((ne) => vo.includes(ne)) && Ca("hue", e, N == null ? null : N / 360, Pe(e) + " colour", "", !0)
      ] };
    }
    if (r === "climate") {
      const p = o.target_temp_step || 0.5, g = Number(o.temperature);
      return { on: t.state !== "off", tone: t.state === "cool" || o.hvac_action === "cooling" ? "cool" : "heat", button: c("climate", "Turn " + Pe(e) + (t.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(g) && zo("Target temperature", It(g) + " °C", Lt("climate", "set_temperature", e, { temperature: g - p }), Lt("climate", "set_temperature", e, { temperature: g + p })),
        ao("tfSeg", "Mode", (o.hvac_modes || []).map((w) => ({ label: Et(w), act: Lt("climate", "set_hvac_mode", e, { hvac_mode: w }), pressed: t.state === w })))
      ] };
    }
    if (r === "cover") {
      const p = t.state === "opening" || t.state === "closing", g = t.state === "closed", w = gi(e), D = Fo(e);
      return { on: !g, tone: "blue", icon: Tu[pp(t)][g ? 1 : 0], button: c("cover", (g ? "Open " : "Close ") + Pe(e)), parts: ["blocks", "tilt", "buttons"], sections: [
        At(e, Cu) && Sr(e, w),
        D != null && Cr(e, D),
        ys(e, w, p)
      ] };
    }
    if (r === "humidifier") {
      const p = Number(o.humidity);
      return { on: t.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: c("humidifier", "Turn " + Pe(e) + (t.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(p) && zo("Target humidity", p + "%", Lt("humidifier", "set_humidity", e, { humidity: p - 1 }), Lt("humidifier", "set_humidity", e, { humidity: p + 1 })),
        ((h = o.available_modes) == null ? void 0 : h.length) && ao("tfSeg", "Mode", o.available_modes.map((g) => ({ label: Et(g), act: Lt("humidifier", "set_mode", e, { mode: g }), pressed: o.mode === g })))
      ] };
    }
    if (r === "media_player") {
      const p = t.state === "playing", g = t.state === "off" || t.state === "standby", w = cn("vol", e, o.volume_level), D = g ? { act: Lt("media_player", At(e, dg) ? "turn_on" : "toggle", e), label: "Turn " + Pe(e) + " on" } : t.state === "playing" || t.state === "paused" ? { act: Lt("media_player", "media_play_pause", e), label: (p ? "Pause " : "Play ") + Pe(e) } : { act: Lt("media_player", At(e, cg) ? "turn_off" : "toggle", e), label: "Turn " + Pe(e) + " off" };
      return { on: !g, tone: "blue", art: !g && o.entity_picture ? o.entity_picture : null, button: D, parts: ["playback", "volume"], sections: g ? [] : [
        (At(e, ku) || At(e, Mu) || At(e, yu) || At(e, Su)) && ao("tfSeg", "Playback", [
          { html: lc.prev, aria: "Previous", act: Lt("media_player", "media_previous_track", e), disabled: !At(e, ku) },
          { html: p ? lc.pause : lc.play, aria: p ? "Pause" : "Play", act: Lt("media_player", "media_play_pause", e), disabled: !(At(e, yu) || At(e, Su)) },
          { html: lc.next, aria: "Next", act: Lt("media_player", "media_next_track", e), disabled: !At(e, Mu) }
        ]),
        At(e, lg) && w != null && Ca("vol", e, w, Pe(e) + " volume", Math.round(w * 100) + "%")
      ] };
    }
    if (r === "vacuum") {
      const p = t.state === "cleaning", g = o.rooms || [], w = (P) => g.includes(P) ? g.filter((L) => L !== P) : g.concat(P), D = Lt("vacuum", p ? "pause" : "start", e, Hi(e) ? { rooms: g } : null);
      return { on: p || t.state === "returning", tone: "blue", button: { act: D, label: (p ? "Pause " : "Start ") + Pe(e) }, parts: ["controls", "rooms"], sections: [
        ao("tfSeg", Pe(e), [
          { label: p ? "Pause" : "Start", act: D },
          { label: "Dock", act: Lt("vacuum", "return_to_base", e), disabled: t.state === "docked" },
          { label: "Locate", act: Lt("vacuum", "locate", e) }
        ]),
        Hi(e) && ao("tfChips", "Rooms to clean", mt.rooms.filter((P) => P.id !== "balcony").map((P) => ({ label: P.name, act: Lt("vacuum", "set_rooms", e, { rooms: w(P.name) }), pressed: g.includes(P.name) })))
      ] };
    }
    if (r === "lock") {
      const p = t.state === "locked";
      return { on: !p, tone: "heat", button: { act: Lt("lock", p ? "unlock" : "lock", e), label: (p ? "Unlock " : "Lock ") + Pe(e) }, parts: ["controls"], sections: [
        ao("tfSeg", Pe(e), [
          { label: "Lock", act: Lt("lock", "lock", e), pressed: p },
          { label: "Unlock", act: Lt("lock", "unlock", e), pressed: t.state === "unlocked" },
          At(e, Cg) && { label: "Open", act: Lt("lock", "open", e), pressed: t.state === "open" }
        ])
      ] };
    }
    if (r === "alarm_control_panel") {
      const p = t.state === "disarmed";
      return { on: !p, tone: t.state === "triggered" ? "alarm" : "blue", button: { act: Lt("alarm_control_panel", p ? "alarm_arm_away" : "alarm_disarm", e), label: p ? "Arm " + Pe(e) + ", away" : "Disarm " + Pe(e) }, parts: ["controls"], sections: [
        ao("tfSeg", Pe(e), Tg.filter(([, , , g]) => !g || At(e, g)).map(([g, w, D]) => ({ label: w, act: Lt("alarm_control_panel", D, e), pressed: t.state === g })))
      ] };
    }
    if (r === "valve") {
      const p = t.state === "open";
      return { on: p, tone: "blue", icon: "mdi:sprinkler-variant", button: c("valve", (p ? "Close " : "Open ") + Pe(e)), parts: ["controls"], sections: [
        ao("tfSeg", Pe(e), [
          { label: "Open", act: Lt("valve", "open_valve", e), pressed: p },
          { label: "Close", act: Lt("valve", "close_valve", e), pressed: !p }
        ])
      ] };
    }
    if (fp.includes(r)) {
      const p = t.state === "on";
      return { on: p, button: c(r, "Turn " + Pe(e) + (p ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: Pe(e) }, sections: [] };
  }
  const f = (e) => (Number.isInteger(Number(e)) ? String(Number(e)) : It(e)) + "°";
  function b(e) {
    var se;
    const t = (j) => e.readings.find((ye) => wt(ye).device_class === j), o = t("temperature"), r = t("humidity"), c = (j) => {
      var ye;
      return Number((ye = M[j]) == null ? void 0 : ye.state);
    }, h = (j) => e.actions.filter((ye) => j.test(ye)), p = e.lights.filter((j) => {
      var ye;
      return ((ye = M[j]) == null ? void 0 : ye.state) === "on";
    }), g = h(/^cover\./), w = g.filter((j) => {
      var ye;
      return ((ye = M[j]) == null ? void 0 : ye.state) !== "closed";
    }), D = [...new Set(g.map((j) => pp(M[j])))], P = h(/^climate\./)[0], L = h(/^humidifier\./)[0], N = h(/^media_player\./), ne = N.find((j) => {
      var ye;
      return ((ye = M[j]) == null ? void 0 : ye.state) === "playing";
    }) || N.find((j) => {
      var ye;
      return ((ye = M[j]) == null ? void 0 : ye.state) === "paused";
    }), X = e.plugs.filter((j) => {
      var ye;
      return ((ye = M[j]) == null ? void 0 : ye.state) === "on";
    }), Z = [];
    if (o && Number.isFinite(c(o)) && Z.push({ key: "temp", id: o, kind: "reading", icon: Fi(o), label: "Temperature", value: It(c(o)) + "°" }), r && Number.isFinite(c(r)) && Z.push({ key: "hum", id: r, kind: "reading", icon: Fi(r), label: "Humidity", value: Math.round(c(r)) + "%" }), e.lights.length && Z.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Fi("", "mdi:lightbulb"),
      label: "Lights",
      value: p.length ? p.length + " of " + e.lights.length + " on" : "All off",
      short: p.length ? p.length + " on" : "Off",
      on: p.length > 0,
      light: p.length ? Io(p[0]) : "",
      acts: e.lights.map((j) => ["light", p.length ? "turn_off" : "turn_on", j]),
      aria: (p.length ? "Turn off" : "Turn on") + " the lights in " + e.name
    }), g.length) {
      const j = D.length === 1 ? mg[D[0]] : "covers", ye = Math.round(g.reduce((K, We) => K + Yn(We), 0) / g.length);
      Z.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: w.length ? Dn([146, 107, 199]) : "",
        icon: Fi("", ((se = Tu[D[0]]) == null ? void 0 : se[w.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Et(j),
        value: ye <= 0 ? "Closed" : ye >= 100 ? "Open" : ye + "% open",
        short: ye <= 0 ? "Closed" : ye + "%",
        on: w.length > 0,
        acts: g.map((K) => ["cover", w.length ? "close_cover" : "open_cover", K]),
        aria: (w.length ? "Close the " : "Open the ") + j + " in " + e.name
      });
    }
    if (P) {
      const j = wt(P), ye = M[P].state === "off";
      Z.push({
        key: "climate",
        kind: "control",
        tone: j.hvac_action === "cooling" ? "cool" : "heat",
        light: bo(P) ? Dn(bo(P)) : "",
        icon: Fi(P),
        label: Pe(P),
        value: ye ? "Off" : Et(j.hvac_action || M[P].state) + " · " + f(j.temperature),
        short: ye ? "Off" : f(j.temperature),
        on: !ye,
        acts: [["climate", "toggle", P]],
        aria: "Turn " + Pe(P) + (ye ? " on" : " off")
      });
    }
    if (L) {
      const j = M[L].state === "on";
      Z.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: j ? Dn([33, 150, 243]) : "",
        icon: Fi("", "mdi:air-humidifier"),
        label: Pe(L),
        value: j ? "On · " + wt(L).humidity + "%" : "Off",
        short: j ? wt(L).humidity + "%" : "Off",
        on: j,
        acts: [["humidifier", "toggle", L]],
        aria: "Turn " + Pe(L) + (j ? " off" : " on")
      });
    }
    if (N.length) {
      const j = ne || N[0], ye = M[j], K = ye.state === "playing";
      Z.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: bo(j) ? Dn(bo(j)) : "",
        icon: Fi(j),
        label: Pe(j),
        value: Ut(j),
        short: K ? "Playing" : ye.state === "paused" ? "Paused" : Et(ye.state),
        on: K,
        acts: [["media_player", ye.state === "playing" || ye.state === "paused" ? "media_play_pause" : "toggle", j]],
        aria: (K ? "Pause " : "Play ") + Pe(j)
      });
    }
    return e.plugs.length && Z.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: X.length ? Dn([255, 193, 7]) : "",
      icon: Fi("", "mdi:power-plug"),
      label: "Plugs",
      value: X.length ? X.length + " of " + e.plugs.length + " on" : "All off",
      short: X.length ? X.length + " on" : "Off",
      on: X.length > 0,
      acts: e.plugs.map((j) => ["switch", X.length ? "turn_off" : "turn_on", j]),
      aria: (X.length ? "Turn off" : "Turn on") + " the plugs in " + e.name
    }), e.alerts.forEach((j) => Z.push(wt(j).device_class === "moisture" ? { key: "alert:" + j, kind: "alert", icon: Fi(j), label: "Water leak" } : { key: "note:" + j, kind: "note", icon: Fi(j), label: Pe(j) + " " + Ut(j).toLowerCase() })), Z;
  }
  const y = (e, t) => {
    const o = (r) => e.actions.filter((c) => r.test(c));
    return {
      lights: e.lights,
      covers: o(/^cover\./),
      climate: o(/^climate\./).slice(0, 1),
      humidifier: o(/^humidifier\./).slice(0, 1),
      plugs: e.plugs,
      media: (() => {
        const r = o(/^media_player\./);
        return [r.find((c) => {
          var h;
          return ((h = M[c]) == null ? void 0 : h.state) === "playing";
        }) || r.find((c) => {
          var h;
          return ((h = M[c]) == null ? void 0 : h.state) === "paused";
        }) || r[0]].filter(Boolean);
      })()
    }[t] || [];
  }, C = (e, t, o) => '<button class="' + t + (e.on ? " on" : "") + '" type="button" data-tone="' + e.tone + '" data-acts="' + Gi(e.acts) + '" aria-label="' + J(e.aria) + '" aria-pressed="' + e.on + '">' + o + "</button>", H = (e) => '<button class="tfAName" type="button" data-go="' + J(e.id) + '" aria-label="Open ' + J(e.name) + '">' + J(e.name) + "</button>";
  function U(e, t, o = !1) {
    const r = t.find((g) => g.key === "lights"), c = !!(r != null && r.on), h = "", p = '<span class="tfAreaGlyph"' + la("area:" + e.id, e.icon || "mdi:texture-box", e.name) + "></span>";
    return o || !r ? '<span class="tfIcon tfAreaIcon' + (c ? " on" : "") + '"' + h + ' aria-hidden="true">' + p + "</span>" : '<button class="tfIcon tfAreaIcon' + (c ? " on" : "") + '" type="button"' + h + ' data-acts="' + Gi(r.acts) + '" aria-label="' + J(r.aria) + '" aria-pressed="' + c + '">' + p + "</button>";
  }
  const $ = (e) => e.filter((t) => t.kind === "alert" || t.kind === "note").map((t) => '<span class="sourceTag">' + J(t.label) + "</span>").join(" "), fe = (e) => e.readings.find((t) => wt(t).device_class === "temperature") || [...e.readings, ...e.solar, ...e.openings, ...e.actions, ...e.plugs].find((t) => M[t]) || null, ee = (e, t) => {
    const o = Pe(t);
    return o.toLowerCase().startsWith(e.name.toLowerCase() + " ") ? Et(o.slice(e.name.length + 1)) : o;
  };
  function be(e) {
    const t = M[e], o = wt(e), r = e.split(".")[0], c = Number(t.state);
    if (t.state === "unavailable") return { text: "Unavailable" };
    if (r === "sensor" && Number.isFinite(c)) {
      if (o.device_class === "temperature") return { text: f(c) };
      const h = o.unit_of_measurement || "";
      return h === "%" ? { text: Math.round(c) + "%" } : { text: It(c, Number.isInteger(c) ? 0 : 1), unit: h };
    }
    if (r === "climate" && (o.current_temperature ?? o.temperature) != null) return { text: f(o.current_temperature ?? o.temperature) };
    if (r === "light") return { text: t.state !== "on" ? "Off" : ja(e) ? En(t) + "%" : "On" };
    if (r === "cover") {
      const h = Yn(e);
      return { text: h <= 0 ? "Closed" : h >= 100 ? "Open" : h + "%" };
    }
    return r === "humidifier" ? { text: t.state === "on" ? o.humidity + "%" : "Off" } : r === "media_player" ? { text: t.state === "playing" ? "Playing" : t.state === "paused" ? "Paused" : Et(t.state) } : { text: Ut(e) };
  }
  const xe = (e, t, o) => {
    const r = o.find((g) => g.key === "temp"), c = o.find((g) => g.key === "hum"), h = wt(t), p = M[t].state === "off";
    return t.startsWith("climate.") ? [ee(e, t), p ? "Off" : Et(h.hvac_action || M[t].state) + (h.temperature != null ? " · " + f(h.temperature) : ""), c && c.value + " humidity"].filter(Boolean).join(" · ") : [!(r && r.id === t) && ee(e, t), r && r.id !== t && r.value, c && c.id !== t && c.value + " humidity"].filter(Boolean).join(" · ");
  };
  function Ae(e, t, o) {
    const r = o && be(o), c = o ? xe(e, o, t) : "", h = (w) => {
      const D = y(e, w.key);
      return D.length === 1 ? D[0] : "group:" + e.id + ":" + w.key;
    }, p = t.filter((w) => w.kind === "control").slice(0, 4).map((w) => '<div class="tfATile' + (w.on ? " on" : "") + '" data-tone="' + w.tone + '"' + (w.light ? ' data-light style="' + w.light + '"' : "") + ">" + C(w, "tfIcon", w.icon) + '<button class="tfName" type="button" data-more="' + J(h(w)) + '" aria-label="' + J(e.name + " " + w.label.toLowerCase() + ", " + w.value + ". Open") + '"><span class="activityRowName">' + J(w.label) + '</span><span class="activityRowMeta">' + J(w.value) + "</span></button></div>"), g = $(t);
    return '<div class="workoutPanelTop">' + U(e, t) + '<div class="tfATitle">' + H(e) + "</div>" + (g ? '<div class="tfATags">' + g + "</div>" : "") + "</div>" + (o ? '<button class="tfABig" type="button" data-more="' + J(o) + '" aria-label="' + J(Pe(o) + ", " + Ut(o) + ". More info") + '"><span class="tfABigMain' + (r.text.length > 7 ? " long" : "") + '">' + J(r.text) + (r.unit ? '<span class="tfABigUnit">' + J(r.unit) + "</span>" : "") + "</span>" + (c ? '<span class="tfABigSub">' + J(c) + "</span>" : "") + "</button>" : "") + (p.length ? '<div class="tfATiles">' + p.join("") + "</div>" : "");
  }
  function Je(e) {
    const t = e.id === B, o = b(e), r = fe(e), c = r && be(r), h = [...o.filter((p) => p.kind === "control"), ...o.filter((p) => p.kind !== "control" && p.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (t ? " active" : "") + '" data-area="' + J(e.id) + '" tabindex="0" aria-expanded="' + t + '" aria-label="' + J(e.name) + '"><div class="panelExpanded"' + (t ? "" : " inert") + ">" + Ae(e, o, r) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + U(e, o, !0) + '<span class="tfACName">' + J(e.name) + '</span></div><span class="tfACMain">' + (c ? J(c.text + (c.unit ? " " + c.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + h.map((p) => '<span class="tfACTile"><span class="tfIcon' + (p.kind === "alert" ? " alert" : "") + '"' + (p.on && p.light ? ' data-light style="' + p.light + '"' : "") + ">" + p.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Ve = [];
  const _e = () => {
    var t;
    const e = new Set(((t = Fe.dash) == null ? void 0 : t.areasOff) || []);
    return Ve.filter((o) => !e.has(o.id));
  }, Qe = (e) => {
    var o;
    const t = _e();
    return t.some((r) => r.id === B) || (B = ((o = t[0]) == null ? void 0 : o.id) || null), '<div class="tfAreas" data-tf data-k="areas" style="order:' + e + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + t.map(Je).join("") + "</section></div>";
  }, Ue = (e) => e.startsWith("room:"), Ee = (e) => Ve.find((t) => "room:" + t.id === e);
  function gt(e, t) {
    const o = b(e), r = fe(e), c = r && be(r), h = r ? xe(e, r, o) : "", p = c ? c.text + (c.unit ? " " + c.unit : "") : "", g = (N) => {
      const ne = y(e, N.key);
      return ne.length === 1 ? ne[0] : "group:" + e.id + ":" + N.key;
    }, w = o.filter((N) => N.kind === "control").slice(0, 4), D = (N) => N.on && N.light ? ' data-light style="' + N.light + '"' : "", P = w.map((N) => '<button class="tfIcon' + (N.on ? " on" : "") + '" type="button" data-tone="' + N.tone + '"' + D(N) + ' data-more="' + J(g(N)) + '" aria-label="' + J(N.label + ", " + N.value + ". Open its controls") + '">' + N.icon + "</button>"), L = w.map((N) => '<button class="tfRoomDev" type="button" data-more="' + J(g(N)) + '" aria-label="' + J(N.label + ", " + N.value + ". Open its controls") + '"><span class="tfIcon' + (N.on ? " on" : "") + '" data-tone="' + N.tone + '"' + D(N) + ">" + N.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + J(N.label) + '</span><span class="activityRowMeta">' + J(N.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + J(t) + '" data-go="' + J(e.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + la("area:" + e.id, e.icon || "mdi:texture-box", e.name) + '></span></span><button class="tfName" type="button" data-go="' + J(e.id) + '" aria-label="Open ' + J(e.name) + '"><span class="activityRowName">' + J(e.name) + "</span>" + (p || h ? '<span class="activityRowMeta">' + (p ? '<span class="tfRoomInline">' + J(p) + (h ? " · " : "") + "</span>" : "") + J(h) + "</span>" : "") + "</button></div>" + (p ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + J(p) + "</span>" + (h ? '<span class="tfRoomSub">' + J(h) + "</span>" : "") + "</div>" : "") + (P.length ? '<div class="tfRoomDevices">' + P.join("") + '</div><div class="tfRoomHeads">' + L.join("") + "</div>" : "") + "</div>";
  }
  const ot = () => [
    { key: "home", name: "Home", ids: mt.homeVacuums },
    ...mt.rooms.map((e) => ({ key: "room:" + e.id, name: e.name, room: e, ids: e.actions }))
  ], Rt = (e, t, o) => e + " " + (e === 1 ? t : o), Ne = () => (Fe.favourites ?? fo.favorite_entities ?? []).filter((e) => M[e]);
  function ta() {
    if (!oa) {
      const t = Object.entries(Xe).sort((r, c) => c[1] - r[1]).map(([r]) => r), o = mt.rooms.flatMap((r) => r.actions);
      oa = [.../* @__PURE__ */ new Set([...ho, ...t, ...o.filter((r) => Yo(r).on), ...o])];
    }
    const e = Ne();
    return oa.filter((t) => M[t] && M[t].state !== "unavailable" && !e.includes(t));
  }
  let ia = !1;
  function Qa() {
    if (!ia || Fe.favSeeded || !mt.rooms.length || A) return;
    const e = (o) => Object.keys(M).find((r) => Hi(r) && o(r)), t = [e((o) => o.startsWith("climate.")), e((o) => o.startsWith("cover.") && /curtain/.test(o)), e((o) => o.startsWith("valve.")), mt.security.locks[0]];
    Fe = { ...Fe, favourites: [.../* @__PURE__ */ new Set([...Fe.favourites ?? fo.favorite_entities ?? [], ...t.filter(Boolean)])], favSeeded: !0 }, eo();
  }
  const za = () => Fe.suggest ?? !fo.hide_suggested_entities;
  function Tr() {
    const e = new Set(A ? [] : Fe.favHidden || []), t = Ne().filter((r) => !e.has(r)), o = za() ? ta().filter((r) => !e.has(r) && So(r)) : [];
    return A ? [...t, ...o] : [...t, ...o].slice(0, Ag);
  }
  const kn = (e) => {
    const t = Ne().includes(e);
    return '<button class="tfStar" type="button" data-star="' + J(e) + '" aria-pressed="' + t + '" aria-label="Favourite: ' + J(Pe(e)) + '">' + Sg(t) + "</button>";
  };
  function no(e, { area: t = !1, star: o = !1, plain: r = !1, say: c = null, alert: h = !1 } = {}) {
    var X, Z, se, j, ye, K;
    const p = r && ((ye = (X = i()) == null ? void 0 : X.devices) == null ? void 0 : ye[(j = (se = (Z = i()) == null ? void 0 : Z.entities) == null ? void 0 : se[e]) == null ? void 0 : j.device_id]), g = p && (p.name_by_user || p.name) || Pe(e), w = e.split(".")[0], D = !r && fd.includes(w) ? Yo(e) : null, P = D ? D.on : ["on", "open", "playing"].includes((K = M[e]) == null ? void 0 : K.state), L = r ? null : D ? D.button : fp.includes(w) ? { act: Lt(w, "toggle", e), label: "Turn " + Pe(e) + (P ? " off" : " on") } : w === "scene" || w === "script" ? { act: Lt(w, "turn_on", e), label: "Run " + Pe(e) } : null, N = (c ?? Ut(e)) + (t && pt.get(e) ? " · " + pt.get(e) : ""), ne = (D == null ? void 0 : D.icon) || xn(e);
    return '<div class="activityRow' + (L ? " tfPlug" : "") + (P ? " on" : "") + (o ? " tfPick" : "") + (h ? " alert" : "") + '" data-k="' + J((t ? "fav:" : "row:") + e) + '" data-tone="' + (w === "light" ? "light" : (D == null ? void 0 : D.tone) || "blue") + '"' + mi(e) + ">" + (L && !o ? '<button class="tfIcon" type="button" data-act="' + L.act + '" aria-label="' + J(L.label) + '"' + la(e, ne) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + la(e, ne) + "></div>") + '<button class="tfName" type="button" data-more="' + J(e) + '" aria-label="' + J(g + ", " + N + ". More info") + '"><span class="activityRowName">' + J(g) + '</span><span class="activityRowMeta">' + J(N) + "</span></button>" + (o ? kn(e) : "") + "</div>";
  }
  const Dt = () => {
    var e;
    return M[(e = Fe.sources) == null ? void 0 : e.weather] ? Fe.sources.weather : M["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(M).find((t) => t.startsWith("weather."));
  };
  function Zo() {
    var o;
    const e = (r) => Object.keys(M).filter((c) => c.startsWith("binary_sensor.") && r.includes(wt(c).device_class));
    return ((o = Gn.alert_entities) != null && o.length ? Gn.alert_entities : [...e(["moisture", "smoke", "gas"]).map((r) => ({ entity: r, severity: "alert" })), ...e(uc).map((r) => ({ entity: r, severity: "warning" }))]).filter((r) => M[r.entity]).map((r) => ({ ...r, on: ["on", "open", "unlocked", "triggered", "problem"].includes(M[r.entity].state) }));
  }
  function Rn() {
    const e = Object.keys(ud), t = /* @__PURE__ */ new Set(), o = [];
    (fo.shortcuts || []).forEach((h) => {
      if (h.type === "summary") {
        if (!e.includes(h.key) || t.has(h.key)) return;
        t.add(h.key);
      }
      o.push(h);
    }), e.forEach((h) => {
      t.has(h) || o.push({ type: "summary", key: h });
    });
    const r = Mo().sumOrder || [], c = (h) => h.type === "summary" && r.includes(h.key) ? r.indexOf(h.key) : r.length;
    return r.length ? o.map((h, p) => [h, p]).sort((h, p) => c(h[0]) - c(p[0]) || h[1] - p[1]).map(([h]) => h) : o;
  }
  function ko() {
    var se;
    const e = ((se = i()) == null ? void 0 : se.entities) || {}, t = (j) => wt(j).device_class, o = Object.keys(M).filter((j) => j.startsWith("sensor.") && t(j) === "battery" || j.startsWith("binary_sensor.") && ["battery", "problem"].includes(t(j))), r = mt.rooms.flatMap((j) => j.plants.map((ye) => ye.id));
    if (!o.length && !r.length) return null;
    const c = (j) => {
      var K;
      const ye = (K = e[j]) == null ? void 0 : K.device_id;
      return !!ye && Object.keys(M).some((We) => {
        var Bt;
        return We.startsWith("binary_sensor.") && ((Bt = e[We]) == null ? void 0 : Bt.device_id) === ye && t(We) === "battery_charging" && M[We].state === "on";
      });
    }, h = (j) => j.startsWith("vacuum.") ? wt(j).battery_level <= 20 && M[j].state !== "docked" : j.startsWith("binary_sensor.") ? t(j) === "battery" && M[j].state === "on" : parseFloat(M[j].state) <= 20 && !c(j), p = [...o, ...mt.vacuums].filter((j) => M[j] && h(j)), g = [...o.filter((j) => t(j) === "problem" && M[j].state === "on"), ...r.filter((j) => {
      var ye;
      return ((ye = M[j]) == null ? void 0 : ye.state) === "problem";
    })], w = o.filter((j) => M[j].state === "unavailable"), D = [.../* @__PURE__ */ new Set([...p, ...g, ...w])], P = (j) => {
      const ye = parseFloat(M[j].state);
      return t(j) === "battery" && Number.isFinite(ye) ? ye : 101;
    }, L = [...r, ...mt.vacuums, ...[...o].sort((j, ye) => P(j) - P(ye))].filter((j) => M[j] && !D.includes(j)), N = /* @__PURE__ */ new Map();
    L.forEach((j) => {
      var K;
      const ye = ((K = mt.areaOf) == null ? void 0 : K.call(mt, j)) || "";
      N.set(ye, [...N.get(ye) || [], j]);
    });
    const ne = (j) => {
      const ye = mt.rooms.findIndex((K) => K.id === j);
      return j === "" ? 1 / 0 : ye < 0 ? mt.rooms.length : ye;
    }, X = [...N.keys()].sort((j, ye) => ne(j) - ne(ye)), Z = (j) => {
      var ye, K, We, Bt;
      return ((ye = mt.rooms.find((st) => st.id === j)) == null ? void 0 : ye.name) || ((Bt = (We = (K = i()) == null ? void 0 : K.areas) == null ? void 0 : We[j]) == null ? void 0 : Bt.name) || j;
    };
    return {
      value: [p.length && Rt(p.length, "low battery", "low batteries"), g.length && Rt(g.length, "problem", "problems"), w.length && Rt(w.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: D, alert: !0 }, ...X.map((j) => ({ name: j ? Z(j) : X.length > 1 ? "Other devices" : "Devices", ids: N.get(j) }))].filter((j) => j.ids.length)
    };
  }
  const Mo = () => A ? Fe.home || {} : Fe, yi = (e) => Lu.includes(e) ? (Mo().shownSums || []).includes(e) : !(Mo().hiddenSums || []).includes(e);
  function Lr(e, t, o) {
    const r = e.flatMap((N) => o(N, /^cover\./)), c = r.filter((N) => {
      var ne;
      return ["open", "opening"].includes((ne = M[N]) == null ? void 0 : ne.state);
    }).length, h = Object.keys(M).filter((N) => N.startsWith("person.")), p = h.filter((N) => {
      var ne;
      return ((ne = M[N]) == null ? void 0 : ne.state) === "home";
    }).length, g = mt.security.openings.filter((N) => M[N]), w = g.filter((N) => M[N].state === "on").length, D = Object.keys(M).filter((N) => N.startsWith("binary_sensor.") && wt(N).device_class === "moisture"), P = D.filter((N) => M[N].state === "on").length, L = mt.vacuums.filter((N) => M[N]);
    return {
      covers: r.length && { value: c ? c + " open" : "All closed", groups: t((N) => o(N, /^cover\./)) },
      people: h.length && { value: p ? p + " home" : "Nobody home", groups: [{ name: "People", ids: h }] },
      openings: g.length && { value: w ? w + " open" : "All closed", groups: [{ name: "Doors and windows", ids: g }] },
      leaks: D.length && { value: P ? Rt(P, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: D }] },
      vacuum: L.length && { value: Et(M[L[0]].state), groups: [{ name: "Vacuum", ids: L }] }
    };
  }
  function Fa(e = !1) {
    var Va;
    const t = mt.rooms, o = mt.security, r = (et, Ct) => et.actions.filter((Ga) => Ct.test(Ga)), c = (et) => t.map((Ct) => ({ name: Ct.name, ids: et(Ct) })).filter((Ct) => Ct.ids.length), h = t.flatMap((et) => et.lights), p = h.filter((et) => {
      var Ct;
      return ((Ct = M[et]) == null ? void 0 : Ct.state) === "on";
    }).length, g = t.map((et) => et.readings.find((Ct) => wt(Ct).device_class === "temperature")).filter(Boolean).map((et) => Number(M[et].state)).filter(Number.isFinite), [w, D] = [It(Math.min(...g)), It(Math.max(...g))], P = t.flatMap((et) => r(et, /^media_player\./)), L = P.filter((et) => {
      var Ct;
      return ((Ct = M[et]) == null ? void 0 : Ct.state) === "playing";
    }).length, N = Zo(), ne = N.filter((et) => et.severity === "warning" && et.on).length, X = o.locks.filter((et) => {
      var Ct;
      return ["unlocked", "jammed", "open"].includes((Ct = M[et]) == null ? void 0 : Ct.state);
    }).length, Z = o.alarms.filter((et) => {
      var Ct;
      return ((Ct = M[et]) == null ? void 0 : Ct.state) === "disarmed";
    }).length, se = ne ? Rt(ne, "warning", "warnings") : null, j = X ? X + " unlocked" : Z ? Z + " disarmed" : se ? null : "All secure", ye = ko(), K = t.flatMap((et) => et.solar), We = K.find((et) => et.endsWith("_power")), Bt = {
      light: h.length && { value: p ? p + " on" : "All off", groups: c((et) => et.lights) },
      climate: g.length && { value: w === D ? w + "°" : w + " - " + D + "°", groups: c((et) => [...et.readings.filter((Ct) => ["temperature", "humidity"].includes(wt(Ct).device_class)), ...r(et, /^(climate|humidifier)\./)]) },
      security: (o.alarms.length || o.locks.length) && { value: [se, j].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...o.alarms, ...o.locks] }, { name: "Doors and windows", ids: o.openings }].filter((et) => et.ids.length) },
      media_players: P.length && { value: L ? L + " playing" : "No media playing", groups: c((et) => r(et, /^media_player\./)) },
      maintenance: ye,
      energy: mt.grid && { value: vi(Number(((Va = M[We]) == null ? void 0 : Va.state) || 0) * 1e3 + Number(M[mt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...K, mt.grid] }] },
      ...Lr(t, c, r)
    }, st = [], Wt = N.filter((et) => et.severity !== "warning" && et.on);
    return Wt.length && st.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Rt(Wt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Wt.map((et) => et.entity) }] }), Rn().forEach((et) => {
      et.type !== "summary" ? st.push({ key: "path:" + et.path, name: et.label || et.path, icon: et.icon || "mdi:link-variant", colour: "", value: "" }) : !et.hidden && Bt[et.key] && (e || yi(et.key)) && st.push({ key: et.key, ...ud[et.key], ...Bt[et.key] });
    }), st;
  }
  const Rl = (e) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + J(e.key) + '" data-k="sum:' + J(e.key) + '" aria-label="' + J(e.name + (e.value ? ", " + e.value : "")) + '"' + (e.key === "alerts" ? ' style="--sum:' + e.colour + ';--sum-ink:#ffffff"' : e.key === "climate" ? ' style="' + Dl() + '"' : e.colour && Vi(e.colour) ? ' style="' + Vi(e.colour).slice(1) + '"' : "") + ">" + (e.key === "climate" ? Gt : "") + '<div class="tfIcon" aria-hidden="true"' + la(e.id || "", e.icon, e.name) + '></div><div><div class="activityRowName">' + J(e.name) + "</div>" + (e.value ? '<div class="activityRowMeta">' + J(e.value) + "</div>" : "") + "</div></div>";
  function Ss(e) {
    const t = Ne();
    Fe = { ...Fe, favourites: t.includes(e) ? t.filter((o) => o !== e) : [...t, e], favHidden: (Fe.favHidden || []).filter((o) => o !== e) }, eo(), Ma();
  }
  function Bl(e) {
    document.querySelector("home-assistant") && (de.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function vd(e, t) {
    if (e.startsWith("path:")) {
      Bl(e.slice(5));
      return;
    }
    De("summary:" + e, t);
  }
  async function pn() {
    const e = (p) => Promise.resolve().then(() => W(p)).catch(() => null), [t, o, r, c] = await Promise.all([
      e({ type: "frontend/get_user_data", key: Au }),
      e({ type: "frontend/get_system_data", key: "home" }),
      e({ type: "frontend/get_system_data", key: "security" }),
      e({ type: "usage_prediction/common_control" })
    ]), h = (t == null ? void 0 : t.value) || {};
    Fe = { favourites: h.favourites ?? null, sources: h.sources, hiddenSums: h.hiddenSums, shownSums: h.shownSums, home: h.home, dash: h.dash, named: h.named, favHidden: h.favHidden, suggest: h.suggest, favSeeded: h.favSeeded }, fo = (o == null ? void 0 : o.value) || {}, Gn = (r == null ? void 0 : r.value) || {}, ho = Array.isArray(c == null ? void 0 : c.entities) ? c.entities : [], oa = null, Object.keys(M).length && Ma(), Er(), ia = !0, Qa();
  }
  const Ar = "HomeCore";
  async function Er() {
    var r, c, h;
    const e = location.pathname.split("/")[1], t = Fe.named || [];
    if (!((c = (r = i()) == null ? void 0 : r.user) != null && c.is_admin) || !e || t.includes(e)) return;
    const o = () => {
      Fe = { ...Fe, named: [...t, e] }, eo();
    };
    try {
      const p = (h = await W({ type: "lovelace/dashboards/list" })) == null ? void 0 : h.find((D) => D.url_path === e);
      if (!p || p.mode === "yaml") return;
      if (p.title === Ar) {
        o();
        return;
      }
      const g = await W({ type: "lovelace/config", url_path: e }), w = ((g == null ? void 0 : g.views) || []).flatMap((D) => [...D.cards || [], ...(D.sections || []).flatMap((P) => P.cards || [])]);
      if (!w.length || !w.every((D) => (D == null ? void 0 : D.type) === "custom:move-assistant-card" && D.layout === "test-focus")) return;
      await W({ type: "lovelace/dashboards/update", dashboard_id: p.id, title: Ar }), o();
    } catch {
    }
  }
  let Cs = null, Ks = 0, Pl = !1;
  const Nl = (e) => {
    const t = e.split(".")[0], o = wt(e).device_class;
    return Lg.includes(t) && (t !== "binary_sensor" || uc.includes(o) || !!Hu[o]);
  }, Dr = (e) => e.startsWith("binary_sensor.") ? Hu[wt(e).device_class] : null;
  async function bd() {
    var e;
    if (!(Pl || Date.now() - Ks < 30 * 1e3)) {
      Pl = !0, Ks = Date.now();
      try {
        const t = Object.keys(((e = i()) == null ? void 0 : e.states) || {}).filter(Nl), o = t.length ? await W({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: t }) : null;
        Cs = Array.isArray(o) ? o.filter((r) => r.entity_id && r.state != null && r.when) : null;
      } catch {
        Cs = null;
      }
      Pl = !1, Ma();
    }
  }
  function Ts() {
    const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), o = (c) => {
      if (!M[c.entity_id] || !Nl(c.entity_id) || !So(c.entity_id) || ["unavailable", "unknown"].includes(c.state)) return;
      if (Dr(c.entity_id)) {
        const p = t.get(c.entity_id);
        c.state === "on" ? (!p || c.when > p.when + 1) && t.set(c.entity_id, { ...c, alarm: !0, cleared: null }) : p && !p.cleared && c.when > p.when && (p.cleared = c.when);
        return;
      }
      const h = e.get(c.entity_id);
      (!h || c.when > h.when + 1) && e.set(c.entity_id, c);
    };
    [...Cs || []].sort((c, h) => c.when - h.when).forEach(o);
    const r = Cs ? Ks / 1e3 - 5 : 0;
    return Object.keys(M).forEach((c) => {
      var g;
      const h = M[c], p = h.last_changed ? Date.parse(h.last_changed) / 1e3 : 0;
      p > r && o({ entity_id: c, state: h.state, when: p, context_user_id: (g = h.context) == null ? void 0 : g.user_id });
    }), [...e.values(), ...t.values()].sort((c, h) => h.when - c.when).slice(0, Eg);
  }
  function Hl(e) {
    var r;
    const t = e.context_user_id && Object.keys(M).find((c) => c.startsWith("person.") && wt(c).user_id === e.context_user_id);
    if (t) return Pe(t);
    const o = (r = i()) == null ? void 0 : r.user;
    return o && e.context_user_id === o.id ? o.name : ["automation", "script"].includes(e.context_domain) || e.context_event_type === "automation_triggered" ? e.context_name || "Home Assistant" : "";
  }
  function Ko(e) {
    const t = e.entity_id.split(".")[0], o = String(e.state);
    return t === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[o] || Et(o).toLowerCase() : t === "cover" || t === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[o] || Et(o).toLowerCase() : t === "binary_sensor" ? o === "on" ? "opened" : "closed" : t === "climate" ? o === "off" ? "turned off" : "set to " + Et(o).toLowerCase() : t === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[o] || Et(o).toLowerCase() : t === "alarm_control_panel" ? (Nu[o] || Et(o)).toLowerCase() : t === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[o] || Et(o).toLowerCase() : o === "on" ? "turned on" : o === "off" ? "turned off" : Et(o).toLowerCase();
  }
  function Ls(e) {
    const t = e.entity_id, o = e.alarm && Dr(t), r = Pe(t) + " " + (o ? o[0] : Ko(e)), c = o ? ua(e.when * 1e3) + (e.cleared ? " · " + o[1] + " since " + ua(e.cleared * 1e3) : "") : [Hl(e), ua(e.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (o ? " alert" : "") + '"><div class="tfIcon' + (o ? " alert" : "") + '" aria-hidden="true"' + la(t, xn(t)) + '></div><button class="tfName" type="button" data-more="' + J(t) + '" data-at="' + Math.round(e.when * 1e3) + '" aria-label="' + J(r + ", " + c + ". More info") + '"><span class="activityRowName">' + J(r) + '</span><span class="activityRowMeta">' + J(c) + "</span></button></div>";
  }
  let Ji = null, wd = 0;
  const Il = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function xd() {
    var t;
    if (Date.now() - wd < 5 * 60 * 1e3) return;
    wd = Date.now();
    const e = [];
    try {
      const o = ((t = await W({ type: "energy/get_prefs" })) == null ? void 0 : t.energy_sources) || [], r = (c) => o.filter((h) => h.type === c).flatMap((h) => c === "grid" ? (h.flow_from || []).map((p) => p.stat_energy_from) : [h.stat_energy_from]).filter(Boolean);
      for (const [c, h, p] of [["electricity", "Electricity", r("grid")], ["solar", "Solar", r("solar")], ["gas", "Gas", r("gas")], ["water", "Water", r("water")]]) {
        if (!p.length) continue;
        const g = await Promise.all(p.map((w) => Promise.resolve(W({ type: "recorder/statistic_during_period", statistic_id: w, calendar: { period: "day" }, types: ["change"] })).then((D) => Number(D == null ? void 0 : D.change) || 0, () => 0)));
        e.push({ key: c, name: h, id: p[0], ids: p, value: g.reduce((w, D) => w + D, 0), unit: wt(p[0]).unit_of_measurement || (c === "gas" || c === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Ji = e, Ma();
  }
  let Qi = null, ki = [];
  function yd() {
    var h;
    const e = ki = Ji != null && Ji.length ? Ji : Il.map(([p, g, w, D]) => {
      if (p === "solar") {
        const L = Object.keys(M).find((N) => N.endsWith("_solar_today") && !N.includes("made_up_energy"));
        L && Number.isFinite(Number(M[L].state)) && (w = Number(M[L].state));
      }
      const P = "sensor.made_up_energy_" + p;
      return M[P] = { entity_id: P, state: String(w), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: g + " today", unit_of_measurement: D, state_class: "total_increasing" } }, { key: p, name: g, id: P, value: w, unit: D };
    });
    ue.clear(), e.some((p) => p.id === Qi) || (Qi = e[0].id);
    const t = e.map((p) => {
      const g = Number(p.value).toLocaleString(void 0, { maximumFractionDigits: p.value < 10 ? 2 : 1 }) + " " + p.unit, w = Dg[p.key], D = p.id === Qi;
      return ue.set(p.id, { name: p.name, text: g, icon: w }), '<div class="activityRow tap' + (D ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + J(p.id) + '" aria-pressed="' + D + '" aria-label="' + J(p.name + ", " + g) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + la("", w, p.name) + '></div><div><div class="activityRowName">' + J(p.name) + '</div><div class="activityRowMeta">' + J(g) + "</div></div></div>";
    }), o = e.find((p) => p.id === Qi), r = (((h = Mt().opts.energy) == null ? void 0 : h.graph) || "above") === "below", c = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + J(o.id) + '" role="img" aria-label="' + J(o.name) + ', last 24 hours"></svg></div>';
    return _n("dash:energy", 0, "Energy today", t, c, Fa().some((p) => p.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (r ? "" : " graphAbove"));
  }
  function Fl(e) {
    const t = E.querySelector(".tfDash-energy"), o = t == null ? void 0 : t.querySelector(".tfDashGraph svg");
    !o || e === Qi || (Qi = e, t.querySelectorAll("[data-energy-pick]").forEach((r) => {
      const c = r.dataset.energyPick === e;
      r.classList.toggle("picked", c), r.setAttribute("aria-pressed", String(c));
    }), o.dataset.graph = e, o.dataset.drawn = "", wn.set("dash:energy", yd()), Hn(!0));
  }
  const As = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, _r = /* @__PURE__ */ new Map();
  async function Rr(e) {
    const t = /* @__PURE__ */ new Date(), o = new Date(t).setHours(0, 0, 0, 0), r = t.getHours(), c = t.getMinutes() / 60, h = Array.from({ length: 24 }, (g, w) => w <= r ? 0 : null);
    if (!e.ids) {
      const g = As[e.key] || As.electricity, w = g.map((P, L) => L < r ? P : L === r ? P * c : 0), D = w.reduce((P, L) => P + L, 0) || 1;
      return h.map((P, L) => P == null ? null : e.value * w[L] / D);
    }
    const p = _r.get(e.id);
    if (p && p.day === o && Date.now() - p.at < 5 * 60 * 1e3) return p.hours;
    try {
      const g = await W({ type: "recorder/statistics_during_period", start_time: new Date(o).toISOString(), end_time: t.toISOString(), statistic_ids: e.ids, period: "hour", types: ["change"] });
      e.ids.forEach((P) => ((g == null ? void 0 : g[P]) || []).forEach((L) => {
        const N = typeof L.start == "number" ? L.start : Date.parse(L.start), ne = new Date(N).getHours();
        N >= o && ne < r && (h[ne] += Number(L.change) || 0);
      }));
      const w = new Date(t).setMinutes(0, 0, 0), D = await Promise.all(e.ids.map((P) => Promise.resolve(W({ type: "recorder/statistic_during_period", statistic_id: P, fixed_period: { start_time: new Date(w).toISOString(), end_time: t.toISOString() }, types: ["change"] })).then((L) => Number(L == null ? void 0 : L.change) || 0, () => 0)));
      h[r] = D.reduce((P, L) => P + L, 0);
    } catch {
    }
    return _r.set(e.id, { at: Date.now(), day: o, hours: h }), h;
  }
  async function $o(e, t) {
    const o = await Rr(t);
    if (!e.isConnected) return;
    const r = Math.max(120, e.clientWidth || 260), c = Math.max(60, e.clientHeight || 130), h = 18, p = c - 18, g = r / 24, w = g * 0.72, D = (/* @__PURE__ */ new Date()).getHours(), P = o.map((se) => se ?? 0), L = Math.max(0, ...P), N = (se) => p - (L > 0 ? se / L * (p - h) : 0), ne = (se) => se.toLocaleString(void 0, { maximumFractionDigits: se < 10 ? 2 : 1 }) + " " + t.unit, X = (se) => String(se).padStart(2, "0") + ":00", Z = L > 0 ? P.indexOf(L) : -1;
    e.setAttribute("viewBox", "0 0 " + r + " " + c), e.setAttribute("aria-label", t.name + " today by the hour: " + ne(t.value) + (Z >= 0 ? ", most " + ne(L) + " at " + X(Z) : "")), e.innerHTML = [h, (h + p) / 2, p].map((se) => '<line x1="0" x2="' + r + '" y1="' + se + '" y2="' + se + '" stroke="var(--line)" stroke-width="1"/>').join("") + o.map((se, j) => se > 0 ? '<rect x="' + (j * g + (g - w) / 2).toFixed(1) + '" y="' + N(se).toFixed(1) + '" width="' + w.toFixed(1) + '" height="' + (p - N(se)).toFixed(1) + '" rx="2" fill="' + (j === D ? "var(--primary)" : "var(--text)") + '"' + (j === D ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((se) => '<text x="' + (se * g).toFixed(1) + '" y="' + (c - 3) + '">' + String(se).padStart(2, "0") + "</text>").join("") + (Z >= 0 ? '<text x="0" y="11">Most: ' + J(ne(L)) + " at " + X(Z) + "</text>" : "");
  }
  function Br(e) {
    var t;
    (t = window.matchMedia) != null && t.call(window, "(prefers-reduced-motion: reduce)").matches || e.querySelectorAll("rect").forEach((o, r) => o.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: r * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function er(e) {
    var r;
    if ((r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [t, o] = e.querySelectorAll("path");
    nf(e, o, [t].filter(Boolean));
  }
  let Mi = null, Si = 0;
  const So = (e) => !e.startsWith("light.") || _g.includes((pt.get(e) || "").toLowerCase()), $s = () => Math.max(2, io((E == null ? void 0 : E.clientWidth) || 0).n), kd = (e) => {
    const t = Yo(e);
    return t.sections.map((o, r) => o && (t.parts || [])[r]).filter(Boolean);
  }, Xs = (e) => kd(e).slice(0, Za(e) - 1);
  function Xo(e) {
    const t = Mt().tiles;
    if (t) return t.filter((r) => M[r] || Ee(r));
    if (!Mi) {
      const r = (c) => {
        var h;
        return (((h = M[c]) == null ? void 0 : h.state) === "on" ? 1e6 : 0) + (Xe[c] || 0);
      };
      Mi = {
        lights: mt.rooms.flatMap((c) => c.lights).filter((c) => {
          var h;
          return So(c) && ((h = M[c]) == null ? void 0 : h.state) !== "unavailable";
        }).sort((c, h) => r(h) - r(c) || Pe(c).localeCompare(Pe(h))),
        climates: mt.rooms.flatMap((c) => c.actions.filter((h) => h.startsWith("climate.")))
      };
    }
    const o = Mi.climates.filter((r) => M[r]).slice(0, e > 3 ? 2 : 1);
    return [...Mi.lights.filter((r) => M[r]).slice(0, Math.max(0, e - o.length)), ...o];
  }
  const Ci = () => {
    var e;
    return ((e = Fe.home) == null ? void 0 : e.welcome) ?? !0;
  }, tr = () => {
    var t, o;
    const e = (t = i()) == null ? void 0 : t.user;
    return (e == null ? void 0 : e.name) || ((o = Object.values(M).find((r) => {
      var c;
      return r.entity_id.startsWith("person.") && (e == null ? void 0 : e.id) && ((c = r.attributes) == null ? void 0 : c.user_id) === e.id;
    })) == null ? void 0 : o.attributes.friendly_name) || "";
  }, Pr = () => {
    const e = (/* @__PURE__ */ new Date()).getHours(), t = tr();
    return (e >= 5 && e < 12 ? "Good morning" : e >= 12 && e < 18 ? "Good afternoon" : "Good evening") + (t ? ", " + t : "");
  }, Md = (e, t, o, r) => (c) => '<section class="card tfCard tfDashCard ' + e + '" data-tf data-k="' + t + '" aria-label="' + o + '">' + (r ? '<div class="activityHeader">' + (t === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + o + "</button>" : '<div class="activityTitle">' + o + "</div>") + "</div>" : "") + '<div class="activityRows">' + c + "</div></section>";
  function Sd(e, t) {
    var h, p;
    e.dash = !0, e.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((A ? Ci() : Mt().welcome) ? '<span class="tfGreeting">' + J(Pr()) + "</span>" : "") + J(((p = (h = i()) == null ? void 0 : h.config) == null ? void 0 : p.location_name) || "Home") + "</h1>" }), t.length && e.push({ key: "sums", wrap: (g) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Md("tfDash-bar", "sums-bar", "Summaries", !1)(g).replace(" data-tf", "") + "</div>", tiles: t.map((g) => ({ key: "sum:" + g.key, html: Rl(g) })) }), !A && _e().length && e.push({ key: "areas", html: Qe(0) });
    const o = Tr();
    if (o.length && e.push({ key: "favs", wrap: Md("tfDash-favs", "favs", "Favourites", !0), tiles: o.map((g) => ({ key: "fav:" + g, html: no(g, { area: !0 }) })) }), A)
      return Si = $s(), Xo(0).forEach((g) => e.push({
        key: "dash:tile:" + g,
        wrap: (w) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + J(g) + '">' + w + "</div>",
        tiles: [{ key: g, html: gt(Ee(g), g) }]
      })), e;
    const r = Ts();
    e.push({ key: "dash:act", html: _n("dash:act", 0, "Activity", r.length ? r.map(Ls) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), e.push({ key: "dash:energy", html: yd() });
    const c = $s();
    return Si = c, Xo(c >= 3 ? c : c * 2).forEach((g) => e.push({
      key: "dash:tile:" + g,
      wrap: (w) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + J(g) + '">' + w + "</div>",
      tiles: [{ key: g, html: Ue(g) ? gt(Ee(g), g) : Zi(g, !1, Xs(g)) }]
    })), bd(), xd(), e;
  }
  const Nr = 252, Qt = 16, Js = 200, Es = Math.round(Nr * 1.25), Jo = 60, Bn = Jo + Qt, Ol = 3, ql = {
    title: "The name",
    sums: "Summaries",
    wx: "Weather",
    areas: "Areas",
    favs: "Favourites",
    act: "Activity",
    energy: "Energy today",
    avg: "Compared to average",
    aq: "Air quality",
    pollen: "Pollen",
    radar: "Rain radar",
    hourly: "Next hours",
    sun: "Sun",
    moon: "Moon",
    uv: "UV index",
    humidity: "Humidity",
    pressure: "Pressure",
    wind: "Wind",
    visibility: "Visibility"
  }, Hr = ["wx", "favs", "act", "energy", "avg"], Qs = ["XS", "S", "M", "L", "XL"], Cd = Qs.length, Sc = ["Narrow", "Wide", "Really wide"], Cc = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, Ds = (e) => !e.includes(".") || !M[e] || e.startsWith("light.") && Ki(e) ? Cd : Math.min(Cd, kd(e).length + 1), Za = (e) => {
    const t = Mt().opts[e] || {}, o = Ds(e), r = Number(t.h) || (t.tall ? 5 : Cc[e] || Mn);
    return Math.max(1, Math.min(o, r));
  }, Mn = 2, Tc = 90, Lc = 56, Sn = (e) => {
    var t;
    return ql[e] || (e.startsWith("room:") ? ((t = Ve.find((o) => "room:" + o.id === e)) == null ? void 0 : t.name) || "Area" : Pe(e));
  }, Wl = 409, el = 128;
  let un = !1, _t = null, fn = null, Vl = !1, Ti = /* @__PURE__ */ new Map(), Co = 0, Ka = 0;
  const oo = ["title", "sums"], io = (e) => {
    const t = Math.max(1, Math.floor((e + Qt) / (Js + Qt)));
    return { n: t, w: Math.max(1, Math.min(Es, Math.floor((e - (t - 1) * Qt) / t))) };
  }, Ac = () => Ve.map((e) => "room:" + e.id);
  function Td() {
    const e = Ac();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(ql).filter((t) => {
        var o, r;
        return !["title", ...((o = Fe.home) == null ? void 0 : o.sums) === !1 ? [] : ["sums"], ...((r = Fe.home) == null ? void 0 : r.favs) === !1 ? [] : ["favs"]].includes(t);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(e.map((t) => [t, { h: 5 }])) },
      tiles: e,
      known: nt,
      areasOff: []
    };
  }
  const Mt = () => A ? Td() : ar(), ar = () => {
    let e = { cells: {}, spans: {}, hidden: [], opts: {}, ...Fe.dash || {} };
    e.sumsOff && (e = { ...e, hidden: [...e.hidden, "sums"] });
    const t = nt.filter((o) => !(e.known || []).includes(o) && !e.hidden.includes(o));
    return t.length ? { ...e, hidden: [...e.hidden, ...t] } : e;
  };
  function Qo(e) {
    A || (Fe = { ...Fe, dash: { ...e, known: nt } }, eo());
  }
  function Kn() {
    const e = (t) => E.querySelector(t);
    return [
      ["title", e(".tfDashTitle"), "full"],
      ["sums", e(".tfDashBarRow"), "full"],
      ["wx", Un.wx, 2],
      ["areas", e(".tfAreas"), "areas"],
      ["favs", e(".tfDash-favs"), 2],
      ["act", e(".tfDash-act"), 2],
      ["energy", e(".tfDash-energy"), 2],
      ["avg", Un.avg, 2],
      ...nt.map((t) => [t, Un[t], El[t] || 1]),
      ...[...E.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => [t.dataset.k, t, 1, !0])
    ].filter(([, t]) => t == null ? void 0 : t.isConnected).map(([t, o, r, c = !1]) => ({ key: t, el: o, span: r, tile: c }));
  }
  const jl = (e, t, o) => {
    var r;
    if (e.span === "full") return t;
    if (e.span === "areas") {
      const c = Math.ceil((Wl + Math.max(0, _e().length - 1) * (el + Qt) + Qt) / (o + Qt));
      return Math.max(Math.min(t, 2), Math.min(c, t - (((r = Mt().cells.areas) == null ? void 0 : r.col) || 0)));
    }
    return Math.min(t, Mt().spans[e.key] ?? e.span);
  }, Li = (e) => Za(e.key);
  function Ld(e, t, o = null) {
    const r = Mt().cells, c = e.every((g) => !r[g.key] || r[g.key].col + g.cols <= t), h = (g) => r[g.key] || { row: 1e9, col: 0 };
    return (() => {
      const g = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Map(), D = (Z, se, j, ye) => {
        for (let K = se; K < se + ye; K++) for (let We = Z; We < Z + j; We++) if (g.has(We + "," + K)) return !1;
        return !0;
      }, P = (Z, se, j) => {
        for (let ye = j; ye < j + Z.rows; ye++) for (let K = se; K < se + Z.cols; K++) g.add(K + "," + ye);
        w.set(Z.key, { col: se, row: j, cols: Z.cols, rows: Z.rows });
      }, L = (Z, se, j) => {
        for (se = Math.max(0, Math.min(t - Z.cols, se)), j = Math.max(0, j); !D(se, j, Z.cols, Z.rows); ) j++;
        P(Z, se, j);
      }, N = (Z) => {
        for (let se = 0; ; se++) for (let j = 0; j <= t - Z.cols; j++) if (D(j, se, Z.cols, Z.rows)) {
          P(Z, j, se);
          return;
        }
      };
      o && L(o, _t.col, _t.row);
      const ne = e.filter((Z) => Z !== o), X = (Z, se) => h(Z).row - h(se).row || h(Z).col - h(se).col;
      return c ? (ne.filter((Z) => r[Z.key]).sort(X).forEach((Z) => L(Z, r[Z.key].col, r[Z.key].row)), ne.filter((Z) => !r[Z.key]).forEach(N), w) : ([...ne].sort(X).forEach(N), w);
    })();
  }
  function ei(e, t) {
    const o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), c = (h, p, g) => {
      for (let w = p; w < p + g.rows; w++) for (let D = h; D < h + g.cols; D++) if (o.has(D + "," + w)) return !1;
      return !0;
    };
    return e.forEach((h) => {
      for (let p = 0; ; p++) {
        let g = 0;
        for (; g <= t - h.cols && !c(g, p, h); ) g++;
        if (!(g > t - h.cols)) {
          for (let w = p; w < p + h.rows; w++) for (let D = g; D < g + h.cols; D++) o.add(D + "," + w);
          r.set(h.key, { col: g, row: p, cols: h.cols, rows: h.rows });
          return;
        }
      }
    }), r;
  }
  function Ir() {
    const e = Mt(), t = new Set(e.hidden), o = Kn().filter((p) => !oo.includes(p.key));
    let r = Ti;
    if (!r.size) {
      const p = e.pegs || 4, g = o.filter((w) => !t.has(w.key));
      g.forEach((w) => {
        w.cols = jl(w, p, Nr), w.rows = Li(w) ?? Mn;
      }), r = Ld(g, p);
    }
    const c = (p) => !t.has(p.key) && r.get(p.key) || { row: 1e9, col: 0 };
    o.sort((p, g) => c(p).row - c(g).row || c(p).col - c(g).col);
    const h = (e.phone || []).map((p) => o.find((g) => g.key === p && !t.has(p))).filter(Boolean);
    return [...h, ...o.filter((p) => !h.includes(p))];
  }
  const Ec = () => {
    const e = Ir();
    e.forEach((t, o) => t.el.style.setProperty("--o", String(3 + o))), _s([...Kn().filter((t) => oo.includes(t.key)), ...e].map((t) => t.el));
  };
  function _s(e) {
    if (_t) return;
    const t = n.activeElement;
    let o = null;
    for (const r of new Set(e.map((c) => {
      for (; c && c.parentElement !== E; ) c = c.parentElement;
      return c;
    }).filter(Boolean))) {
      const c = o ? o.nextSibling : E.querySelector(":scope > [data-tf]");
      if (r !== c)
        try {
          E.moveBefore ? E.moveBefore(r, c) : E.insertBefore(r, c);
        } catch {
          E.insertBefore(r, c);
        }
      o = r;
    }
    t && t !== n.activeElement && t.isConnected && t.focus({ preventScroll: !0 });
  }
  const Fr = (e, t) => Qo({ ...e, cells: t, pegs: io(E.clientWidth).n });
  function Oa() {
    var ye;
    if (!k || !E) return;
    const e = E.clientWidth, t = e < 2 * Nr + Qt, o = v.classList.contains("tfDash");
    A && (un = !1), v.classList.toggle("tfOverview", A);
    const { n: r, w: c } = t ? { n: 2, w: Math.floor((e - Qt) / 2) } : io(e);
    vt.classList.add("tfPegs"), vt.style.setProperty("--peg-n", r), vt.style.setProperty("--peg-w", c + "px");
    const h = new Set(Mt().hidden);
    nt.forEach((K) => {
      var We;
      return (We = Un[K]) == null ? void 0 : We.classList.toggle("tfNotAdded", h.has(K) && !(_t != null && _t.fromTray && _t.key === K));
    }), xa(), v.classList.toggle("tfBoard", o), v.classList.toggle("tfEditing", o && un && !t);
    const p = u("dashEditNav");
    !o && ii && hn(!1), p && A ? (p.hidden = !o, ii || (p.classList.remove("active"), p.setAttribute("aria-pressed", "false"), p.setAttribute("aria-label", "Edit Home page"), p.title = "Edit", p.innerHTML = pc)) : p && (p.hidden = !o || t, p.classList.toggle("active", un), p.setAttribute("aria-pressed", String(un)), p.setAttribute("aria-label", un ? "Done editing" : "Edit custom dashboard"), p.title = un ? "Done" : "Edit", p.innerHTML = un ? Pu : pc);
    const g = o ? Kn() : [];
    if ((!o || !A) && E.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((K) => K.remove()), !o) {
      E.style.height = "", E.querySelectorAll(".tfBoardItem").forEach((K) => {
        K.classList.remove("tfBoardItem", "tfBoardHidden"), K.style.left = K.style.top = K.style.width = K.style.height = "";
      }), (ye = E.querySelector(".tfDash-act > .activityRows")) == null || ye.style.removeProperty("max-height"), al(!1), v.classList.contains("tfDash") && Ec(), da();
      return;
    }
    if (A) {
      tl(g, e, t);
      return;
    }
    E.style.setProperty("--peg-w", c + "px");
    const w = new Set(Mt().hidden), D = c + Qt;
    _t != null && _t.fromTray && w.delete(_t.key), g.forEach((K) => K.el.classList.toggle("tfBoardHidden", w.has(K.key)));
    const P = g.filter((K) => !w.has(K.key) && getComputedStyle(K.el).display !== "none");
    let L = 0;
    P.filter((K) => oo.includes(K.key)).forEach((K) => {
      K.el.classList.add("tfBoardItem"), Object.assign(K.el.style, { width: e + "px", height: "", left: "0px", top: L + "px" });
      const We = K.key === "sums" && K.el.querySelector(".tfDash-bar"), Bt = We ? We.querySelectorAll(".activityRow").length : 0;
      We && (We.style.maxWidth = "none");
      for (let st = 1; We && st <= Bt && (We.style.setProperty("--bar-cols", String(Math.ceil(Bt / st))), !(We.offsetWidth <= e)); st++)
        ;
      We && (We.style.maxWidth = ""), L += K.el.offsetHeight + Qt;
    }), Ka = L;
    const N = P.filter((K) => !oo.includes(K.key));
    N.forEach((K) => {
      K.cols = jl(K, r, c), K.el.classList.add("tfBoardItem"), K.el.style.width = (K.cols === r ? e : K.cols * c + (K.cols - 1) * Qt) + "px", K.el.style.height = "", K.rows = Li(K) ?? Math.max(1, Math.ceil((K.el.offsetHeight + Qt - 6) / Bn));
    });
    const ne = _t && N.find((K) => K.key === _t.key), X = t && Ir().map((K) => K.key), Z = (K) => X.includes(K.key) ? X.indexOf(K.key) : -1, se = t ? ei([...N].sort((K, We) => Z(K) - Z(We)), r) : Ld(N, r, ne);
    se.forEach((K) => Object.assign(K, { x: K.cols === r ? 0 : K.col * D, y: Ka + K.row * Bn, w: K.cols === r ? e : K.cols * c + (K.cols - 1) * Qt, h: K.rows * Bn - Qt })), N.forEach((K) => {
      const We = se.get(K.key);
      K.el.style.height = We.h + "px", K.el.dataset.rows = t && K.key === "wx" ? 5 : Za(K.key), K.el.toggleAttribute("data-narrow", !t && We.cols === 1 && r > 1), K.el.dataset.cols = We.cols, K.el.classList.contains("tfDac") && K.el.style.setProperty("--tf-dac-pad", We.h - Tc + "px"), !(K === ne && !_t.fromTray) && (K.el.style.left = We.x + "px", K.el.style.top = We.y + "px");
    }), t || (Ti = se), _s([...P.filter((K) => oo.includes(K.key)), ...N.slice().sort((K, We) => se.get(K.key).row - se.get(We.key).row || se.get(K.key).col - se.get(We.key).col)].map((K) => K.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([K, We]) => {
      const Bt = se.get(K), st = Bt && E.querySelector(We), Wt = st == null ? void 0 : st.querySelector(":scope > .activityRows"), Va = st == null ? void 0 : st.querySelector(":scope > .activityHeader");
      if (!Wt || !Va) return;
      const et = Wt.getBoundingClientRect().top - st.getBoundingClientRect().top, Ct = Bt.rows === 1 ? Bt.h : Math.floor(Bt.h - et - parseFloat(getComputedStyle(st).paddingBottom)), Ga = Math.max(1, Math.floor(Ct / Lc));
      Wt.style.setProperty("--fill-row", (Ct / Ga).toFixed(2) + "px"), Wt.style.maxHeight = Ct + "px";
    }), Co = Math.max(0, ...[...se.values()].map((K) => K.row + K.rows));
    let j = Ka + Co * Bn - Qt;
    j = al(un && !t, N, se, j, r, c), E.style.height = j + "px", requestAnimationFrame(() => v.classList.add("tfBoardReady")), g.forEach((K) => $a.observe(K.el)), Hn(), da();
  }
  const La = { gap: 20, phoneGap: 16, inner: 16, col: 252, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, Ad = { s: { w: 160, h: 192 }, m: { w: 200, h: 240 }, l: { w: 252, h: 337 } }, Ed = () => {
    var e;
    return Ad[(e = Fe.home) == null ? void 0 : e.areaSize] ? Fe.home.areaSize : "s";
  }, Or = () => {
    var e;
    return ["rows", "columns", "bento", "side"].includes((e = Fe.home) == null ? void 0 : e.areaLayout) ? Fe.home.areaLayout : "bento";
  }, qr = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1 }, nr = (e) => {
    var t;
    return ((t = Fe.home) == null ? void 0 : t[e]) ?? qr[e];
  };
  function Wr() {
    var c;
    const e = Object.values(((c = i()) == null ? void 0 : c.floors) || {}), t = new Set(e.map((h) => h.floor_id)), o = e.map((h) => ({ id: h.floor_id, name: h.name, rooms: Ve.filter((p) => p.floor === h.floor_id) })), r = Ve.filter((h) => !t.has(h.floor));
    return r.length && o.push({ id: "", name: e.length ? "Other areas" : "", rooms: r }), o;
  }
  const Dd = (e) => e.classList.toggle("hcMore", e.scrollHeight - e.scrollTop - e.clientHeight > 1);
  let ra = null, or = [], To = /* @__PURE__ */ new Map();
  function Xt(e) {
    let t = E.querySelector(".hcHomeLand");
    if (!e) {
      t == null || t.remove();
      return;
    }
    t || (t = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), E.appendChild(t)), Object.assign(t.style, { left: e.x + "px", top: e.y + "px", width: e.w + "px", height: e.h + "px" });
  }
  function Vr(e) {
    if (!A || !ii || e.button !== 0 || E.clientWidth < 2 * Nr + Qt) return;
    const t = e.target.closest(".tfBoardItem"), o = t && Kn().find((g) => g.el === t);
    if (!o || oo.includes(o.key) || Ue(o.key)) return;
    e.preventDefault();
    const r = E.getBoundingClientRect(), c = To.get(o.key);
    ra = { key: o.key, el: t, on: !1, x0: e.clientX, y0: e.clientY, left: c.x, top: c.y, order: [...or] };
    const h = (g) => {
      const w = g.clientX - ra.x0, D = g.clientY - ra.y0;
      if (!ra.on && Math.hypot(w, D) < 5) return;
      ra.on || (ra.on = !0, t.classList.add("tfDragging"), nn() || t.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(t.style, { left: ra.left + w + "px", top: ra.top + D + "px" });
      const P = g.clientX - r.left, L = g.clientY - r.top + E.scrollTop;
      let N = null, ne = 1 / 0;
      if (To.forEach((j, ye) => {
        if (ye === o.key || !ra.order.includes(ye)) return;
        const K = Math.hypot(P - (j.x + j.w / 2), L - (j.y + j.h / 2));
        K < ne && (ne = K, N = { key: ye, b: j });
      }), !N) return;
      const X = ra.order.filter((j) => j !== o.key), Z = X.indexOf(N.key) + (P > N.b.x + N.b.w / 2 ? 1 : 0), se = [...X.slice(0, Z), o.key, ...X.slice(Z)];
      se.join() !== ra.order.join() ? (ra.order = se, Oa()) : Xt(To.get(o.key));
    }, p = () => {
      removeEventListener("pointermove", h), removeEventListener("pointerup", p), removeEventListener("pointercancel", p);
      const g = ra;
      ra = null, t.classList.remove("tfDragging"), g.on && Do({ order: g.order }), Oa(), g.on && !nn() && setTimeout(() => Yp(t), 340);
    };
    addEventListener("pointermove", h), addEventListener("pointerup", p), addEventListener("pointercancel", p);
  }
  function tl(e, t, o) {
    var Rp;
    const r = new Set(Mt().hidden);
    e.forEach((Le) => Le.el.classList.toggle("tfBoardHidden", r.has(Le.key)));
    const c = e.filter((Le) => !r.has(Le.key) && getComputedStyle(Le.el).display !== "none"), h = o ? La.phoneGap : La.gap, p = Math.min(t, La.full);
    let g = 0;
    const w = $l();
    v.classList.toggle("hcSumsFit", Nn()), v.classList.toggle("hcFavStrip", w);
    const D = c.filter((Le) => oo.includes(Le.key) || w && Le.key === "favs");
    D.sort((Le, lt) => ["title", "sums", "favs"].indexOf(Le.key) - ["title", "sums", "favs"].indexOf(lt.key)), D.forEach((Le) => {
      Le.el.classList.add("tfBoardItem"), Le.el.toggleAttribute("data-narrow", !1), Object.assign(Le.el.style, { width: (Le.key === "title" ? t : p) + "px", height: "", left: "0px", top: g + "px" });
      const lt = Le.key !== "title" && (Le.el.querySelector(".tfDash-bar>.activityRows") || Le.key === "favs" && Le.el.querySelector(":scope>.activityRows")), Ra = lt ? lt.children.length : 0;
      if (lt && (lt.classList.remove("hcBarRows"), !o && lt.scrollWidth > lt.clientWidth + 1))
        for (let ca = 2; ca <= Ra && (lt.classList.add("hcBarRows"), lt.style.setProperty("--bar-cols", String(Math.ceil(Ra / ca))), !(lt.scrollWidth <= lt.clientWidth + 1)); ca++)
          ;
      g += Le.el.offsetHeight + (Le.key === "title" ? La.nameGap : La.sumsGap);
    });
    const P = o ? 1 : Math.max(0.85, Math.min(1, t / La.full)), L = ["favs"], N = (ra == null ? void 0 : ra.order) || ((Rp = Fe.home) == null ? void 0 : Rp.order);
    or = N ? [...N.filter((Le) => L.includes(Le)), ...L.filter((Le) => !N.includes(Le))] : L;
    const X = c.filter((Le) => L.includes(Le.key) && !(w && Le.key === "favs"));
    To = /* @__PURE__ */ new Map();
    const Z = (Le, lt) => {
      if (To.set(Le.key, lt), Object.assign(Le.el.style, { width: lt.w + "px", height: lt.h + "px" }), ra != null && ra.on && ra.key === Le.key) {
        Xt(lt);
        return;
      }
      Object.assign(Le.el.style, { left: lt.x + "px", top: lt.y + "px" });
    }, se = o ? t : Math.round((2 * La.col + La.inner) * P), j = Ed(), ye = Ad[j], K = Or(), We = nr("byFloor"), Bt = K === "side" && !o && X.length > 0;
    let st = 0, Wt = 0, Va = g;
    X.forEach((Le) => {
      Le.el.classList.add("tfBoardItem"), Le.el.dataset.rows = 5, Le.el.dataset.cols = 2, Le.el.toggleAttribute("data-narrow", !1), Object.assign(Le.el.style, { width: se + "px", height: "" });
      const lt = Le.el.offsetHeight;
      if (Bt) {
        Z(Le, { x: 0, y: Va, w: se, h: lt }), Va += lt + h;
        return;
      }
      st && st + se > t && (g += Wt + h, st = 0, Wt = 0), Z(Le, { x: st, y: g, w: se, h: lt }), st += se + h, Wt = Math.max(Wt, lt);
    }), X.length && !Bt && (g += Wt + h);
    const et = Bt ? se + h : 0, Ct = Bt ? t - se - h : t, Ga = o ? Math.floor((t - h) / 2) : Math.round(ye.w * P), Xd = Math.round(ye.h * P), kl = o ? 2 : Math.max(1, Math.floor((Ct + h) / (Ga + h))), Dp = new Map(c.filter((Le) => Ue(Le.key)).map((Le) => [Le.key, Le])), Ni = (We ? Wr() : [{ id: "", name: "", rooms: Ve }]).map((Le) => ({ ...Le, cards: Le.rooms.map((lt) => Dp.get("room:" + lt.id)).filter(Boolean) })).filter((Le) => Le.cards.length), qc = K === "bento", Wc = qc && nr("bentoMixed"), Sf = qc && We && nr("bentoBoxes"), Cf = K === "columns" && We && !o, cd = 12, Tf = (Le) => Le.name ? La.floorHead + La.floorGap : 0, Vc = (Le, lt, Ra) => {
      const ca = /* @__PURE__ */ new Set(), ga = [];
      Le.cards.forEach((yt, ss) => {
        const In = Wc && ss === 0 && lt >= 2 && Le.cards.length > 1, ls = In ? 2 : 1, Jd = In && !o ? 2 : 1;
        yt.el.classList.remove("hcAreaS", "hcAreaM", "hcAreaL", "hcAreaBig"), yt.el.classList.add("hcArea" + j.toUpperCase()), yt.el.classList.toggle("hcAreaBig", In), yt.el.style.setProperty("--hc-k", String(P)), yt.el.classList.add("tfBoardItem"), yt.el.dataset.rows = Jd > 1 ? 10 : 5, yt.el.dataset.cols = ls, yt.el.toggleAttribute("data-narrow", !1);
        for (let Qd = 0; ; Qd++) {
          const Yc = [...Array(Math.max(0, lt - ls + 1)).keys()].find((Zc) => [...Array(ls).keys()].every((Kc) => [...Array(Jd).keys()].every((Df) => !ca.has(Qd + Df + "," + (Zc + Kc)))));
          if (Yc != null) {
            [...Array(ls).keys()].forEach((Zc) => [...Array(Jd).keys()].forEach((Kc) => ca.add(Qd + Kc + "," + (Yc + Zc)))), ga.push({ it: yt, r: Qd, c: Yc, sc: ls, sr: Jd });
            break;
          }
        }
      });
      const an = Math.max(0, ...ga.map((yt) => yt.r + yt.sr));
      qc && !o && ga.forEach((yt) => {
        for (; yt.r + yt.sr < an && !ca.has(yt.r + yt.sr + "," + yt.c) && yt.sc === 1; )
          ca.add(yt.r + yt.sr + "," + yt.c), yt.sr++;
      }), ga.forEach((yt) => Object.assign(yt.it.el.style, { width: yt.sc * Ra + (yt.sc - 1) * h + "px", height: o ? "" : yt.sr * Xd + (yt.sr - 1) * h + "px" }));
      const Fs = [...Array(an)].map(() => o ? 0 : Xd);
      o && ga.forEach((yt) => {
        Fs[yt.r] = Math.max(Fs[yt.r], yt.it.el.offsetHeight);
      });
      const Os = [];
      let cr = Tf(Le);
      return Fs.forEach((yt, ss) => {
        Os[ss] = cr, cr += yt + h;
      }), { h: cr - (an ? h : 0), places: ga.map((yt) => ({ it: yt.it, x: yt.c * (Ra + h), y: Os[yt.r], w: yt.sc * Ra + (yt.sc - 1) * h, h: Fs.slice(yt.r, yt.r + yt.sr).reduce((ss, In) => ss + In, 0) + (yt.sr - 1) * h })) };
    }, jc = new Map([...E.querySelectorAll(":scope > .hcFloor")].map((Le) => [Le.dataset.floor, Le])), zc = new Map([...E.querySelectorAll(":scope > .hcFloorBox")].map((Le) => [Le.dataset.floor, Le])), _p = [], Lf = (Le, lt, Ra, ca) => {
      if (!Le.name) return;
      let ga = jc.get(Le.id);
      jc.delete(Le.id), ga || (ga = Object.assign(document.createElement("div"), { className: "hcFloor" }), ga.dataset.floor = Le.id, E.appendChild(ga)), ga.dataset.sig !== Le.name && (ga.dataset.sig = Le.name, ga.innerHTML = '<h2 class="hcFloorName">' + J(Le.name) + "</h2>"), Object.assign(ga.style, { left: lt + "px", top: Ra + "px", width: ca + "px" }), _p.push(ga);
    }, Af = (Le, lt, Ra, ca, ga) => {
      let an = zc.get(Le.id);
      zc.delete(Le.id), an || (an = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), an.dataset.floor = Le.id, an.setAttribute("aria-hidden", "true"), E.prepend(an)), Object.assign(an.style, { left: lt + "px", top: Ra + "px", width: ca + "px", height: ga + "px" });
    }, Ef = (Le) => parseFloat(getComputedStyle(Le.cards[0].el).paddingLeft) || 0, Gc = (Le, lt, Ra, ca, ga = 0) => {
      Lf(Le, Ra + ga, ca, (lt.w ?? t) - ga), lt.places.forEach((an) => Z(an.it, { x: Ra + an.x, y: ca + an.y, w: an.w, h: an.h }));
    };
    if (Ni.length && X.length && !Bt && (g += La.floorTop), Cf) {
      let Le = 0, lt = g;
      Ni.forEach((Ra) => {
        const ca = { ...Vc(Ra, 1, Ga), w: Ga };
        Le && Le + Ga > t && (g = lt + h + La.floorTop, Le = 0), Gc(Ra, ca, Le, g), lt = Math.max(lt, g + ca.h), Le += Ga + h;
      }), g = lt + h;
    } else if (Sf) {
      const Le = Array(kl).fill(g);
      Ni.forEach((lt) => {
        const Ra = lt.cards.length + (Wc && lt.cards.length > 1 ? 3 : 0), ca = o ? 2 : Math.min(kl, Math.max(Wc && lt.cards.length > 1 ? 2 : 1, Ra <= 3 ? Ra : Math.ceil(Ra / 2))), ga = ca * (Ga + h) - h, an = Math.floor((ga - 2 * cd - (ca - 1) * h) / ca), Fs = { ...Vc(lt, ca, an), w: ga - 2 * cd };
        let Os = 0, cr = 1 / 0;
        for (let In = 0; In + ca <= kl; In++) {
          const ls = Math.max(...Le.slice(In, In + ca));
          ls < cr && (cr = ls, Os = In);
        }
        const yt = Os * (Ga + h), ss = Fs.h + 2 * cd;
        Af(lt, yt, cr, ga, ss), Gc(lt, Fs, yt + cd, cr + cd, Ef(lt));
        for (let In = Os; In < Os + ca; In++) Le[In] = cr + ss + h;
      }), g = Math.max(g, ...Le);
    } else
      Ni.forEach((Le, lt) => {
        lt && (g += La.floorTop);
        const Ra = Vc(Le, kl, Ga);
        Gc(Le, { ...Ra, w: Ct }, et, g), g += Ra.h + h;
      });
    Bt && (g = Math.max(g, Va)), jc.forEach((Le) => Le.remove()), zc.forEach((Le) => Le.remove()), ra != null && ra.on || Xt(null), E.style.height = Math.max(0, g - h) + "px", _s([...D.map((Le) => Le.el), ...X.map((Le) => Le.el), ..._p, ...Ni.flatMap((Le) => Le.cards.map((lt) => lt.el))]), al(!1), e.forEach((Le) => [...Le.el.children].forEach((lt) => lt.toggleAttribute("inert", ii)));
    const Uc = E.querySelector(".tfDash-favs>.activityRows");
    Uc && (Uc.classList.toggle("hcFadeList", !w), Dd(Uc)), requestAnimationFrame(() => v.classList.add("tfBoardReady")), e.forEach((Le) => $a.observe(Le.el)), da();
  }
  const jr = () => {
    Vl || (Vl = !0, requestAnimationFrame(() => {
      Vl = !1, Oa();
    }));
  }, $a = new ResizeObserver(() => {
    _t || jr();
  });
  function zl(e, t, o) {
    const r = o + Qt, c = e * o + (e - 1) * Qt, h = t * Bn - Qt, p = Qt / 2, g = r / Math.max(1, Math.round(r / (Bn / 4))), w = Bn / 4, D = 6;
    let P = "";
    for (let L = 0; L <= e; L++) for (let N = 0; N <= t; N++) {
      const ne = L * r - p, X = N * Bn - p;
      P += "M" + (ne - D) + " " + X + "H" + (ne + D) + "M" + ne + " " + (X - D) + "V" + (X + D);
    }
    return '<svg width="' + c + '" height="' + h + '" viewBox="0 0 ' + c + " " + h + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -p + '" y="' + -p + '" width="' + g.toFixed(3) + '" height="' + w + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + g.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + w + '" r="1.4"></circle><circle cx="' + g.toFixed(3) + '" cy="' + w + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -p + '" y="' + -p + '" width="' + (c + Qt) + '" height="' + (h + Qt) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + P + '"></path></svg>';
  }
  function al(e, t = [], o = /* @__PURE__ */ new Map(), r = 0, c = 1, h = Nr) {
    E.querySelectorAll(".tfEditChips").forEach((P) => {
      (!e || !P.closest(".tfBoardItem")) && P.remove();
    }), E.querySelectorAll(".tfFavHides").forEach((P) => P.remove()), E.querySelectorAll(".tfBoardItem").forEach((P) => [...P.children].forEach((L) => {
      L.classList.contains("tfEditChips") || L.toggleAttribute("inert", e);
    }));
    let p = E.querySelector(".tfBoardCells"), g = E.querySelector(".tfBoardLand");
    if (!e)
      return p == null || p.remove(), g == null || g.remove(), Lo(), r;
    const w = Co + Ol;
    if (p || (p = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), p.setAttribute("aria-hidden", "true"), E.prepend(p)), p.style.top = Ka + "px", p.dataset.size !== c + "x" + w + "x" + h && (p.dataset.size = c + "x" + w + "x" + h, p.innerHTML = zl(c, w, h)), r = Math.max(r, Ka + w * Bn - Qt), t.forEach((P) => {
      const L = P.el;
      !L || L.querySelector(":scope > .tfEditChips") || L.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + dc + '</span><button class="tfEditChip" type="button" data-board-more="' + J(P.key) + '" aria-label="' + J(Sn(P.key)) + ' options" aria-haspopup="menu">' + yg + "</button></div>");
    }), _t && o.has(_t.key)) {
      g || (g = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), E.appendChild(g));
      const P = o.get(_t.key);
      Object.assign(g.style, { left: P.x + "px", top: P.y + "px", width: P.w + "px", height: P.h + "px" });
    } else g == null || g.remove();
    const D = E.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (D) {
      const P = D.getBoundingClientRect();
      D.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...D.querySelectorAll('[data-k^="fav:"]')].map((L) => {
        const N = L.getBoundingClientRect(), ne = L.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + J(ne) + '" aria-label="Hide ' + J(Pe(ne)) + ' from the dashboard" style="left:' + Math.round(N.right - P.left - 42) + "px;top:" + Math.round(N.top - P.top + (N.height - 32) / 2) + 'px">' + _u + "</button>";
      }).join("") + "</div>");
    }
    return r;
  }
  let nl = "";
  function ol(e) {
    un = e, e || (_t = null, Ao = Aa = !1, Lo()), Oa(), e ? nl = JSON.stringify(Fe) : nl && JSON.stringify(Fe) !== nl && $n("Changes saved");
  }
  function Dc(e, t) {
    var Z, se;
    Lo();
    const o = Ti.get(e), { n: r } = io(E.clientWidth), c = Mt(), h = c.spans[e] ?? (Ue(e) ? 1 : 2);
    if (!o) return;
    const p = o.cols >= r, g = (j, ye, K) => '<button type="button" role="menuitem" data-board-act="' + j + '"' + (K ? " disabled" : "") + ">" + ye + "</button>", w = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    w.setAttribute("role", "menu"), w.setAttribute("aria-label", Sn(e) + " options");
    const D = E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]'), P = Ds(e), L = Za(e), N = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + Qs.map((j, ye) => '<button type="button" role="menuitemradio" aria-checked="' + (ye + 1 === L) + '" aria-label="' + j + ", " + (ye + 1) + (ye ? " rows" : " row") + '" data-board-act="h:' + (ye + 1) + '"' + (ye < P ? "" : " disabled") + ">" + j + "</button>").join("") + "</div></div>", ne = Hr.includes(e) || Ue(e) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Sc.map((j, ye) => '<button type="button" role="menuitemradio" aria-checked="' + (ye + 1 === Math.min(h, r)) + '" aria-label="' + j + ", " + (ye + 1) + (ye ? " columns" : " column") + '" data-board-act="w:' + (ye + 1) + '"' + (ye < r ? "" : " disabled") + ">" + j + "</button>").join("") + "</div></div>" : "";
    w.innerHTML = N + ne + (e === "energy" ? g("graph", (((Z = c.opts.energy) == null ? void 0 : Z.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + g("left", "Move left", p || o.col === 0) + g("right", "Move right", p || o.col + o.cols >= r) + g("up", "Move up", o.row <= 0) + g("down", "Move down") + (D ? g("remove", "Remove") : g("hide", "Hide")), E.appendChild(w);
    const X = Math.min(o.x + o.w - w.offsetWidth, E.clientWidth - w.offsetWidth);
    Object.assign(w.style, { left: Math.max(0, X) + "px", top: o.y + 28 + "px" }), fn = { key: e, menu: w, opener: t }, (se = w.querySelector("button:not([disabled])")) == null || se.focus();
  }
  function Lo(e) {
    if (!fn) return;
    const { menu: t, opener: o } = fn;
    fn = null, t.remove(), e && (o == null || o.focus());
  }
  const ir = () => Object.fromEntries([...Ti].map(([e, t]) => [e, { col: t.col, row: t.row }]));
  function _c(e, t) {
    var g, w;
    if (t === "remove") {
      Lo(), Rd(e);
      return;
    }
    const o = Fe, r = Mt(), c = ir(), h = c[e] || { col: 0, row: 0 };
    t.startsWith("w:") && (r.spans = { ...r.spans, [e]: t === "w:full" ? "full" : Number(t.slice(2)) }), t.startsWith("h:") && (r.opts = { ...r.opts, [e]: { ...r.opts[e] || {}, h: Number(t.slice(2)), tall: void 0 } }), t === "graph" && (r.opts = { ...r.opts, energy: { ...r.opts.energy || {}, graph: (((g = r.opts.energy) == null ? void 0 : g.graph) || "above") === "above" ? "below" : "above" } }), t === "left" && (c[e] = { ...h, col: h.col - 1 }), t === "right" && (c[e] = { ...h, col: h.col + 1 }), t === "up" && (c[e] = { ...h, row: h.row - 1 }), t === "down" && (c[e] = { ...h, row: h.row + 1 }), t === "hide" && (r.hidden = [.../* @__PURE__ */ new Set([...r.hidden, e])]), ["left", "right", "up", "down"].includes(t) && (_t = { key: e, col: c[e].col, row: c[e].row }), Fr(r, c), _t && (Oa(), _t = null, Fr(Mt(), ir()));
    const p = /^[hw]:/.test(t) && !nn() && (fn == null ? void 0 : fn.menu.querySelector('[data-board-act="' + CSS.escape(t) + '"]'));
    if (p) {
      const D = fn;
      p.parentElement.querySelectorAll("[aria-checked]").forEach((P) => P.setAttribute("aria-checked", String(P === p))), setTimeout(() => {
        fn === D && Lo();
      }, Sa.tabs.dur);
    } else Lo();
    t === "graph" && (wn.delete("dash:energy"), Ma()), t.startsWith("h:") && e.includes(".") && Ma(), Oa(), t !== "hide" ? (w = E.querySelector('[data-board-more="' + CSS.escape(e) + '"]')) == null || w.focus() : $n(Sn(e) + " hidden", ai(o));
  }
  const Gl = (e) => {
    var t;
    return nt.includes(e) && !(((t = Fe.dash) == null ? void 0 : t.cells) || {})[e] ? " added" : " put back";
  };
  function zr(e) {
    const t = Mt(), o = Sn(e) + Gl(e);
    Qo({ ...t, hidden: t.hidden.filter((r) => r !== e) }), Oa(), $n(o);
  }
  const Ai = () => Mt().tiles || [...E.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => e.dataset.k).filter((e) => !Mt().hidden.includes(e));
  function _d(e, t) {
    const o = Mt();
    Fr({ ...o, tiles: e, hidden: o.hidden.filter((r) => !r.includes(".")) }, t), Ma(), da();
  }
  const Ul = (e) => {
    _d([...Ai().filter((t) => t !== e), e], ir()), $n(Sn(e) + " added"), Zr(e);
  }, Rd = (e) => {
    const t = Fe, o = ir();
    delete o[e], _d(Ai().filter((r) => r !== e), o), $n(Sn(e) + " removed", ai(t));
  };
  let Yl = 0;
  function $n(e, t = null) {
    var p;
    const o = u("toast");
    if (!o) return;
    if (Jh(o, e), t) {
      const g = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      g.addEventListener("click", () => {
        clearTimeout(Yl), o.classList.remove("show", "withAction"), t();
      }), o.appendChild(g);
    }
    const r = v.getBoundingClientRect(), c = (p = n.querySelector(".bottomNav")) == null ? void 0 : p.getBoundingClientRect(), h = Ht.classList.contains("open") && !Xn ? Math.min(r.right, Ht.getBoundingClientRect().left) : r.right;
    o.style.left = (r.left + h) / 2 + "px", o.style.bottom = (c != null && c.height ? window.innerHeight - c.top + 12 : 26) + "px", o.classList.add("tfToast", "show"), o.classList.toggle("withAction", !!t), Qh(o), clearTimeout(Yl), Yl = setTimeout(() => o.classList.remove("show", "withAction"), t ? 5e3 : Sa.confirm.stay);
  }
  const Rc = 700, Gr = 1e3, Pa = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  Pa.setAttribute("role", "tooltip"), Pa.setAttribute("aria-hidden", "true"), v.appendChild(Pa);
  let ro = null, Ur = 0, so = 0, Bd = -1 / 0;
  const rr = (e) => {
    if (e.nodeType !== 1) return !1;
    const t = getComputedStyle(e);
    return t.textOverflow === "ellipsis" && e.scrollWidth > e.clientWidth + 1 || t.webkitLineClamp !== "none" && e.scrollHeight > e.clientHeight + 1;
  }, Bc = (e) => {
    for (let t = e; t && t !== v; t = t.parentElement) if (rr(t)) return t;
    return null;
  };
  function sr(e, t) {
    clearTimeout(Ur), clearTimeout(so);
    const o = () => {
      if (!e.isConnected) return;
      ro = e, Pa.textContent = t, Pa.hidden = !1;
      const r = e.getBoundingClientRect(), c = Pa.getBoundingClientRect(), h = r.top - c.height - 8 >= 8 ? r.top - c.height - 8 : r.bottom + 8;
      Pa.style.left = Math.max(8, Math.min(window.innerWidth - c.width - 8, r.left + r.width / 2 - c.width / 2)) + "px", Pa.style.top = h + "px";
    };
    !Pa.hidden || performance.now() - Bd < Gr ? o() : Ur = setTimeout(o, Rc);
  }
  function il() {
    clearTimeout(Ur), clearTimeout(so), Pa.hidden || (Bd = performance.now()), Pa.hidden = !0, ro = null;
  }
  n.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    if (Pa.contains(e.target)) {
      clearTimeout(so);
      return;
    }
    const t = Bc(e.target);
    if (t && Ye.names === "scroll" && t.matches(Yr)) {
      lr(t);
      return;
    }
    if (t) {
      t !== ro ? sr(t, t.textContent.trim()) : clearTimeout(so);
      return;
    }
    clearTimeout(Ur), clearTimeout(so), so = setTimeout(il, 120);
  }), n.addEventListener("focusin", (e) => {
    var r;
    const t = e.target;
    if (!((r = t.matches) != null && r.call(t, ":focus-visible"))) return;
    let o = [t, ...t.querySelectorAll("*")].filter(rr);
    Ye.names === "scroll" && (o.filter((c) => c.matches(Yr)).forEach(lr), o = o.filter((c) => !c.matches(Yr))), o.length && sr(t, o.map((c) => c.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (e) => {
    e.target === ro && il();
  }), n.addEventListener("keydown", (e) => {
    e.key === "Escape" && !Pa.hidden && (e.stopPropagation(), il());
  }, !0), window.addEventListener("scroll", () => {
    (!Pa.hidden || Ur) && il();
  }, { capture: !0, passive: !0 });
  const Yr = ".activityRowName,.activityRowMeta", ti = /* @__PURE__ */ new WeakSet();
  function lr(e) {
    var o;
    if (Ye.names !== "scroll" || ti.has(e) || e.closest("[inert]") || (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    ti.add(e);
    const t = () => Promise.all([e.closest(".workoutPanel"), e.closest(".panelExpanded")].filter(Boolean).flatMap((r) => r.getAnimations()).map((r) => r.finished.catch(() => {
    })));
    setTimeout(async () => {
      await t();
      const r = e.isConnected && !e.closest("[inert]") ? e.scrollWidth - e.clientWidth : 0;
      if (r < 2) {
        ti.delete(e);
        return;
      }
      const c = r / 30 * 1e3, h = c + 1e3 + c;
      e.style.textOverflow = "clip";
      const p = e.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -r + "px", offset: c / h },
        { textIndent: -r + "px", offset: (1e3 + c) / h, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: h });
      p.onfinish = p.oncancel = () => {
        e.style.textOverflow = "", ti.delete(e);
      };
    }, 600);
  }
  const rl = new IntersectionObserver((e) => e.forEach((t) => {
    t.isIntersecting && !t.target.closest("[inert]") && (rl.unobserve(t.target), lr(t.target));
  }), { threshold: 1 });
  let Rs = !1;
  new MutationObserver(() => {
    Rs || Ye.names !== "scroll" || (Rs = !0, setTimeout(() => {
      Rs = !1, n.querySelectorAll(Yr).forEach((e) => {
        !e.dataset.glided && rr(e) && (e.dataset.glided = "1", rl.observe(e));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const ai = (e) => () => {
    Fe = e, eo(), Ma(), Oa(), da();
  };
  function Zr(e) {
    const t = () => E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]');
    setTimeout(() => {
      var p;
      const o = t();
      if (!o) return;
      const r = (p = window.matchMedia) == null ? void 0 : p.call(window, "(prefers-reduced-motion: reduce)").matches, c = o.getBoundingClientRect();
      (c.top < 0 || c.bottom > window.innerHeight) && o.scrollIntoView({ behavior: r ? "auto" : "smooth", block: "center" });
      const h = (g) => "0 0 0 4px color-mix(in srgb,var(--primary) " + g + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + g + "%,transparent)";
      o.animate([{ boxShadow: h(55) }, { boxShadow: h(0) }], { duration: 1500, easing: r ? "steps(1, end)" : "ease-out" });
    }, Pn(e) ? 260 : 0);
  }
  function Pn(e) {
    const t = Ti.get(e);
    if (!t || !Ht.classList.contains("open") || Xn) return !1;
    const { n: o, w: r } = io(E.clientWidth), c = Ht.getBoundingClientRect().left - E.getBoundingClientRect().left, h = (w) => w * (r + Qt) + t.cols * r + (t.cols - 1) * Qt <= c;
    if (h(t.col)) return !1;
    const p = /* @__PURE__ */ new Set();
    Ti.forEach((w, D) => {
      if (D !== e) for (let P = w.row; P < w.row + w.rows; P++) for (let L = w.col; L < w.col + w.cols; L++) p.add(L + "," + P);
    });
    const g = (w, D) => {
      for (let P = D; P < D + t.rows; P++) for (let L = w; L < w + t.cols; L++) if (p.has(L + "," + P)) return !1;
      return !0;
    };
    for (let w = 0; w <= Co; w++) for (let D = 0; D + t.cols <= o && h(D); D++)
      if (g(D, w))
        return Fr(Mt(), { ...ir(), [e]: { col: D, row: w } }), Oa(), !0;
    return !1;
  }
  const Zl = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Pd = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let Bs = "page";
  const Pc = (e) => e.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : e.querySelector("[data-room-add]") ? "areas" : e.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function sl(e = !1) {
    const t = Ht.querySelector(".tfTrayInner"), o = Ht.querySelector(".hcTrayTabs"), r = o.querySelector(".rubberIndicator");
    let c = !0;
    t.querySelectorAll(":scope>.tfTraySection").forEach((p) => {
      p.hidden = Pc(p) !== Bs, p.classList.toggle("hcFirst", !p.hidden && c), p.hidden || (c = !1);
    }), o.querySelectorAll("[data-tray-tab]").forEach((p) => {
      const g = p.dataset.trayTab === Bs;
      p.classList.toggle("active", g), p.setAttribute("aria-selected", String(g));
    });
    const h = o.querySelector(".tab.active");
    h != null && h.offsetWidth && (r.style.transition = "none", e ? gc(r, r.offsetLeft, r.offsetWidth, h.offsetLeft, h.offsetWidth) : (r.style.left = h.offsetLeft + "px", r.style.width = h.offsetWidth + "px"));
  }
  const Ht = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Ht.setAttribute("aria-label", "Edit custom dashboard"), Ht.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + Pd.map(([e, t], o) => '<button class="tab segBtn' + (o ? "" : " active") + '" type="button" role="tab" aria-selected="' + !o + '" data-tray-tab="' + e + '">' + t + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + cc + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows, and one area on its own instead.</p><button class="pill tfTrayAdd" type="button" data-area-choose aria-expanded="false">Choose areas</button><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + cc + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + cc + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', v.appendChild(Ht);
  const Xa = Object.assign(document.createElement("div"), { className: "card tfTrayPop" });
  Xa.setAttribute("role", "dialog"), Xa.setAttribute("aria-label", "Areas"), Xa.hidden = !0, v.appendChild(Xa);
  const Kr = () => Ht.querySelector("[data-area-choose]");
  function $r() {
    const e = new Set(_e().map((t) => t.id));
    Xa.innerHTML = '<div class="tfTrayPopTitle">Areas</div>' + Ve.map((t) => '<div class="tfTrayPopRow"><button class="switch' + (e.has(t.id) ? " on" : "") + '" type="button" role="switch" aria-checked="' + e.has(t.id) + '" aria-label="' + J(t.name) + '" data-area-on="' + J(t.id) + '"></button><span class="tfIcon"><span class="tfAreaGlyph"' + la("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><span class="tfTrayPopName">' + J(t.name) + "</span></div>").join(""), to(Xa);
  }
  function ll() {
    var e;
    Xa.hidden || (Xa.hidden = !0, (e = Kr()) == null || e.setAttribute("aria-expanded", "false"));
  }
  function Nc() {
    if (!Xa.hidden) {
      ll();
      return;
    }
    $r(), Xa.hidden = !1, Kr().setAttribute("aria-expanded", "true");
    const e = Kr().getBoundingClientRect();
    Xa.style.top = Math.max(16, Math.min(e.top - 12, innerHeight - Xa.offsetHeight - 16)) + "px";
  }
  Xa.addEventListener("click", (e) => {
    var c;
    const t = e.target.closest("[data-area-on]");
    if (!t) return;
    const o = !t.classList.contains("on"), r = new Set(((c = Fe.dash) == null ? void 0 : c.areasOff) || []);
    o ? r.delete(t.dataset.areaOn) : r.add(t.dataset.areaOn), Qo({ ...Mt(), areasOff: [...r] }), t.classList.toggle("on", o), t.setAttribute("aria-checked", String(o)), Ma();
  }), Xa.addEventListener("keydown", (e) => {
    var t;
    e.key === "Escape" && (e.stopPropagation(), ll(), (t = Kr()) == null || t.focus());
  });
  let Xn = !1, Ao = !1, Aa = !1, fa = !1, Ja = null, ni = !1;
  const dl = {}, oi = (e, t) => {
    if (dl[e] === t) return;
    dl[e] = t;
    const o = Ht.querySelector('[data-tray="' + e + '"]');
    o.innerHTML = t, to(o);
  }, cl = (e, t) => '<span class="tfTrayName"><span class="activityRowName">' + J(Pe(e)) + '</span><span class="activityRowMeta">' + J(t) + "</span></span>", Nd = (e, t, o) => '<li class="tfTrayFav' + (t ? " off" : "") + '" data-tray-fav="' + J(e) + '"><span class="tfTrayGrip" aria-hidden="true">' + dc + '</span><span class="tfIcon"' + la(e, xn(e)) + "></span>" + cl(e, t ? "Hidden" + (pt.get(e) ? " · " + pt.get(e) : "") : pt.get(e) || Ut(e)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + J(e) + '" aria-pressed="' + !t + '" aria-label="' + (t ? "Show " : "Hide ") + J(Pe(e)) + ' on the dashboard">' + (t ? _u : kg) + "</button>" + (o ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + J(e) + '" aria-label="Remove ' + J(Pe(e)) + ' from favourites">' + hp + "</button>" : "<span></span>") + "</li>";
  function pl(e, t, o, r) {
    const c = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(M).filter((p) => t(p) && !o.has(p) && M[p].state !== "unavailable").filter((p) => {
      const g = (Pe(p) + " " + (pt.get(p) || "") + " " + p).toLowerCase();
      return c.every((w) => g.includes(w));
    }).sort((p, g) => (pt.get(p) || "~").localeCompare(pt.get(g) || "~") || Pe(p).localeCompare(Pe(g))).slice(0, 40).map((p) => '<li><button class="tfTrayPickItem" type="button" ' + r + '="' + J(p) + '"><span class="tfIcon"' + la(p, xn(p)) + "></span>" + cl(p, pt.get(p) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const Hd = "https://www.home-assistant.io/dashboards/", Ei = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, ha = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  ha.setAttribute("aria-label", "Edit Home page"), ha.toggleAttribute("inert", !0);
  let ii = !1, qa = !1, Ps = "", Kl = null, ri = "page";
  function Xr(e, t) {
    const o = ha.querySelector(".hcTrayTabs"), r = o == null ? void 0 : o.querySelector(".rubberIndicator"), c = o == null ? void 0 : o.querySelector(".tab.active");
    if (!(c != null && c.offsetWidth)) {
      requestAnimationFrame(() => {
        var h;
        return ((h = ha.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : h.offsetWidth) && Xr(e, t);
      });
      return;
    }
    r.style.transition = "none", e && t ? gc(r, t.left, t.width, c.offsetLeft, c.offsetWidth) : (r.style.left = c.offsetLeft + "px", r.style.width = c.offsetWidth + "px");
  }
  const Jr = (e) => '<button class="hcInfoBtn" type="button" data-info="' + e + '" aria-expanded="false" aria-label="About ' + J(Ei[e][0]) + '">' + Ru + "</button>", Eo = (e, t, o) => '<button class="switch' + (e ? " on" : "") + '" type="button" role="switch" aria-checked="' + e + '" aria-label="' + J(t) + '" ' + o + "></button>", Id = (e) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + J(e) + '. Use the up and down arrows">' + dc + "</button>", Nn = () => {
    var e;
    return ((e = Fe.home) == null ? void 0 : e.sumsWidth) === "fit";
  }, $l = () => {
    var e;
    return ((e = Fe.home) == null ? void 0 : e.favsAs) === "strip" && Or() !== "side";
  }, ul = (e, t, o, r) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + e + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + J(e) + '">' + r.map(([c, h]) => '<button class="wxLayoutBtn" type="button" ' + t + '="' + c + '" aria-pressed="' + (o === c) + '">' + h + "</button>").join("") + "</div></div>", Fd = () => Fa(!0).filter((e) => ud[e.key]).map((e) => e.key);
  function Qr() {
    var p, g, w;
    if (!ii) return;
    const e = Ne(), t = (D) => '<li class="hcHeRow" data-he-id="' + J(D) + '">' + Id(Pe(D)) + '<span class="tfIcon"' + la(D, xn(D)) + "></span>" + cl(D, pt.get(D) || Ut(D)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + J(D) + '" aria-label="Take ' + J(Pe(D)) + ' off Favourites">' + hp + "</button></li>", o = (D) => {
      const P = ud[D];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + J(D) + '"' + (P.colour && Vi(P.colour) ? ' style="' + Vi(P.colour).slice(1) + '"' : "") + ">" + Id(P.name) + '<span class="tfIcon"' + la("", P.icon, P.name) + '></span><span class="activityRowName">' + J(P.name) + "</span>" + Eo(yi(D), P.name, 'data-he-sum="' + J(D) + '"') + "</li>";
    }, r = ((p = ha.querySelector("[data-he-search]")) == null ? void 0 : p.value) || "", c = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"]], h = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Jr("welcome") + Eo(Ci(), "Welcome message", "data-he-welcome") + '</div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + Eo(nr("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + ul("Layout", "data-he-area-layout", Or(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"], ["side", "Side"]]) + (Or() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + Eo(nr("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + Eo(nr("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + ul("Area cards", "data-he-area-size", Ed(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]),
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + Eo(((g = Fe.home) == null ? void 0 : g.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + Jr("favs") + "</div>" + ul("Show as", "data-he-favs-as", $l() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + (Or() === "side" ? '<p class="tfTrayNote">In the Side layout Favourites is a card.</p>' : "") + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (e.map(t).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + qa + '">' + cc + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (qa ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + J(r) + '"><ul class="tfTrayList">' + (qa ? pl(r, (D) => Zl.test(D), new Set(e), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + Jr("suggest") + Eo(za(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + Jr("sums") + Eo(((w = Fe.home) == null ? void 0 : w.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + ul("Width", "data-he-sums-width", Nn() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + Fd().map(o).join("") + "</ul>"
    };
    ha.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + c.map(([D, P]) => '<button class="tab segBtn' + (D === ri ? " active" : "") + '" type="button" role="tab" aria-selected="' + (D === ri) + '" data-he-tab="' + D + '">' + P + "</button>").join("") + '</div><div class="hcHeTabBody" role="tabpanel">' + h[ri] + "</div>", Xr(!1), to(ha);
  }
  const es = (e) => {
    Fe = { ...Fe, ...e }, eo(), Ma(), Qr();
  }, Do = (e) => es({ home: { ...Fe.home || {}, ...e } });
  function hn(e) {
    si(), ii = e, qa = !1, ha.classList.toggle("open", e), ha.toggleAttribute("inert", !e), v.classList.toggle("hcHomeEditing", e), k && E && Oa();
    const t = u("dashEditNav"), o = ha.querySelector(".tfTrayHead");
    t && e && (Kl = t.parentElement, o.appendChild(t)), t && !e && Kl && Kl.appendChild(t), t && (t.classList.toggle("active", e), t.setAttribute("aria-pressed", String(e)), t.setAttribute("aria-label", e ? "Done editing Home" : "Edit Home page"), t.title = e ? "Done" : "Edit", t.innerHTML = e ? Pu : pc), e ? (Ps = JSON.stringify(Fe), Qr()) : Ps && JSON.stringify(Fe) !== Ps && $n("Changes saved");
  }
  ha.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', v.appendChild(ha);
  let _o = null;
  const lo = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  lo.setAttribute("role", "dialog"), v.appendChild(lo);
  function si() {
    _o && (_o.setAttribute("aria-expanded", "false"), _o = null, lo.hidden = !0);
  }
  function ts(e) {
    const t = _o;
    if (si(), t === e) return;
    const [o, r] = Ei[e.dataset.info];
    lo.setAttribute("aria-label", o), lo.innerHTML = '<div class="hcInfoTitle">' + J(o) + '</div><div class="hcInfoText">' + r + '</div><a class="hcInfoMore" href="' + Hd + '" target="_blank" rel="noopener">Learn more</a>', lo.hidden = !1, _o = e, e.setAttribute("aria-expanded", "true");
    const c = e.getBoundingClientRect(), h = lo.offsetWidth, p = lo.offsetHeight;
    lo.style.left = Math.max(8, Math.min(innerWidth - h - 8, c.left + c.width / 2 - h / 2)) + "px", lo.style.top = (c.bottom + 8 + p > innerHeight - 8 ? Math.max(8, c.top - 8 - p) : c.bottom + 8) + "px";
  }
  n.addEventListener("pointerdown", (e) => {
    _o && !e.composedPath().some((t) => t === lo || t === _o) && si();
  }, !0), n.addEventListener("keydown", (e) => {
    var t;
    if (e.key === "Escape") {
      if (_o) {
        e.stopPropagation();
        const o = _o;
        si(), o.focus();
        return;
      }
      if (qa) {
        e.stopPropagation(), qa = !1, Qr();
        return;
      }
      ii && (e.stopPropagation(), hn(!1), (t = u("dashEditNav")) == null || t.focus());
    }
  }, !0);
  const Xl = (e) => e.dataset.heList === "favs" ? Ne() : Fd(), Od = (e, t) => e.dataset.heList === "favs" ? es({ favourites: t }) : Do({ sumOrder: t });
  ha.addEventListener("keydown", (e) => {
    var g;
    const t = e.target.closest("[data-he-grip]");
    if (!t || !["ArrowUp", "ArrowDown"].includes(e.key)) return;
    e.preventDefault();
    const o = t.closest("[data-he-id]"), r = o.parentElement, c = Xl(r), h = c.indexOf(o.dataset.heId), p = h + (e.key === "ArrowUp" ? -1 : 1);
    p < 0 || p >= c.length || (c.splice(p, 0, c.splice(h, 1)[0]), Od(r, c), (g = ha.querySelector('[data-he-list="' + r.dataset.heList + '"] [data-he-id="' + CSS.escape(o.dataset.heId) + '"] [data-he-grip]')) == null || g.focus());
  }), ha.addEventListener("pointerdown", (e) => {
    const t = e.target.closest("[data-he-grip]");
    if (!t || e.button !== 0) return;
    e.preventDefault();
    const o = t.closest("[data-he-id]"), r = o.parentElement;
    o.classList.add("moving");
    const c = (p) => {
      const g = [...r.children].filter((D) => D !== o), w = g.find((D) => {
        const P = D.getBoundingClientRect();
        return p.clientY < P.top + P.height / 2;
      });
      w !== o.nextElementSibling && r.insertBefore(o, w || null);
    }, h = () => {
      removeEventListener("pointermove", c), removeEventListener("pointerup", h), o.classList.remove("moving"), Od(r, [...r.children].map((p) => p.dataset.heId).filter(Boolean));
    };
    addEventListener("pointermove", c), addEventListener("pointerup", h);
  }), ha.addEventListener("input", (e) => {
    if (e.target.matches("[data-he-search]")) {
      const t = e.target.selectionStart;
      Qr();
      const o = ha.querySelector("[data-he-search]");
      o.focus(), o.setSelectionRange(t, t);
    }
  }), ha.addEventListener("click", (e) => {
    var ne;
    const t = e.target, o = t.closest("[data-info]");
    if (o) {
      ts(o);
      return;
    }
    const r = t.closest("[data-he-tab]");
    if (r) {
      const X = ha.querySelector(".hcTrayTabs .rubberIndicator"), Z = { left: X.offsetLeft, width: X.offsetWidth };
      ri = r.dataset.heTab, qa = !1, si(), Qr(), Xr(!0, Z), ha.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (t.closest("[data-he-welcome]")) {
      Do({ welcome: !Ci() });
      return;
    }
    const c = t.closest("[data-he-card]");
    if (c) {
      const X = c.dataset.heCard;
      Do({ [X]: ((ne = Fe.home) == null ? void 0 : ne[X]) === !1 });
      return;
    }
    const h = t.closest("[data-he-favs-as]");
    if (h) {
      Do({ favsAs: h.dataset.heFavsAs });
      return;
    }
    const p = t.closest("[data-he-sums-width]");
    if (p) {
      Do({ sumsWidth: p.dataset.heSumsWidth });
      return;
    }
    const g = t.closest("[data-he-area-size]");
    if (g) {
      Do({ areaSize: g.dataset.heAreaSize });
      return;
    }
    const w = t.closest("[data-he-area-layout]");
    if (w) {
      Do({ areaLayout: w.dataset.heAreaLayout });
      return;
    }
    const D = t.closest("[data-he-flag]");
    if (D) {
      const X = D.dataset.heFlag;
      Do({ [X]: !nr(X) });
      return;
    }
    if (t.closest("[data-he-suggest]")) {
      es({ suggest: !za() });
      return;
    }
    const P = t.closest("[data-he-sum]");
    if (P) {
      const X = P.dataset.heSum, Z = !yi(X), se = Fe.home || {};
      Do(Lu.includes(X) ? { shownSums: Z ? [...se.shownSums || [], X] : (se.shownSums || []).filter((j) => j !== X) } : { hiddenSums: Z ? (se.hiddenSums || []).filter((j) => j !== X) : [...se.hiddenSums || [], X] });
      return;
    }
    const L = t.closest("[data-he-remove]");
    if (L) {
      es({ favourites: Ne().filter((X) => X !== L.dataset.heRemove) });
      return;
    }
    if (t.closest("[data-he-add]")) {
      qa = !qa, Qr(), qa && ha.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const N = t.closest("[data-he-pick-id]");
    N && (qa = !1, ha.querySelector("[data-he-search]").value = "", es({ favourites: [...Ne(), N.dataset.hePickId] }));
  });
  function da() {
    var D, P;
    const e = un && v.classList.contains("tfBoard");
    if (Ht.classList.toggle("open", e), Ht.classList.toggle("tucked", e && Xn), Ht.toggleAttribute("inert", !e), e || (ni = !1), (!e || !v.classList.contains("tfEditing")) && ll(), hl(), !e) return;
    const t = Ht.querySelector("[data-tray-tuck]");
    t.innerHTML = Xn ? bu : Bu, t.setAttribute("aria-expanded", String(!Xn)), t.setAttribute("aria-label", Xn ? "Show the edit tray" : "Tuck the edit tray away");
    const o = Mt().hidden.filter((L) => !oo.includes(L) && Kn().some((N) => N.key === L)), r = (L, N) => '<button class="tfTrayCard" type="button" data-tray-card="' + J(L) + '" aria-label="' + J(Sn(L)) + ": drag it onto the board, or press to " + N + '"><span class="tfTrayGrip" aria-hidden="true">' + dc + "</span>" + J(Sn(L)) + "</button>", c = o.filter((L) => !mo.includes(L)), h = mo.filter((L) => o.includes(L));
    oi("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Jr("welcome") + '<button class="switch' + (Mt().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!Mt().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((D = Fe.dash) != null && D.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((P = Fe.dash) != null && P.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => sl(!1)), oi("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (c.length ? '<div class="tfTrayCards">' + c.map((L) => r(L, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), oi("weather", '<div class="sectionLabel">Weather</div>' + (h.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + h.map((L) => r(L, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), oi("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (Mt().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + ni + '">' + (ni ? "Hide the phone" : "Show the phone") + "</button>");
    const p = new Set(Fe.favHidden || []), g = Ne(), w = [...g, ...[...p].filter((L) => !g.includes(L) && M[L])];
    if (oi("favs", w.map((L) => Nd(L, p.has(L), g.includes(L))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Ht.querySelector('[data-pick="tiles"]').hidden = !Aa, Ht.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(Aa)), Aa && oi("tilepick", pl(Ht.querySelector("[data-tile-search]").value, (L) => fd.includes(L.split(".")[0]), new Set(Ai()), "data-tile-pick")), Ht.querySelector('[data-tray="roompick"]').hidden = !fa, Ht.querySelector("[data-room-add]").setAttribute("aria-expanded", String(fa)), fa) {
      const L = new Set(Ai());
      oi("roompick", Ve.filter((N) => !L.has("room:" + N.id)).map((N) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + J(N.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + la("area:" + N.id, N.icon || "mdi:texture-box", N.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + J(N.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Ht.querySelector('[data-pick="favs"]').hidden = !Ao, Ht.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Ao)), Ao && oi("pick", pl(Ht.querySelector("[data-fav-search]").value, (L) => Zl.test(L), new Set(Ne()), "data-fav-pick")), oi("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (za() ? " on" : "") + '" type="button" role="switch" aria-checked="' + za() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const li = (e) => {
    Fe = { ...Fe, ...e }, eo(), Ma(), da();
  };
  function Di(e, t) {
    const o = Fe, r = new Set(Fe.favHidden || []);
    t ? r.delete(e) : r.add(e), li({ favHidden: [...r] }), t ? $n(Pe(e) + " put back") : $n(Pe(e) + " hidden", ai(o));
  }
  const fl = (e) => {
    const t = Fe;
    li({ favourites: Ne().filter((o) => o !== e), favHidden: (Fe.favHidden || []).filter((o) => o !== e) }), $n(Pe(e) + " removed from favourites", ai(t));
  }, qd = (e) => {
    li({ favourites: [...Ne().filter((t) => t !== e), e], favHidden: (Fe.favHidden || []).filter((t) => t !== e) }), $n(Pe(e) + " added to favourites");
  };
  Ht.addEventListener("click", (e) => {
    var o, r;
    const t = e.target.closest("button");
    if (t) {
      if (t.hasAttribute("data-tray-tab")) {
        Bs = t.dataset.trayTab, sl(!0), Ht.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (t.hasAttribute("data-tray-done")) ol(!1);
      else if (t.hasAttribute("data-info")) ts(t);
      else if (t.hasAttribute("data-dash-sums"))
        Qo({ ...ar(), hidden: ar().hidden.filter((c) => c !== "sums"), sumsOff: !((o = Fe.dash) != null && o.sumsOff) }), Ma(), da();
      else if (t.hasAttribute("data-dash-welcome")) {
        const c = Mt();
        Qo({ ...c, welcome: !c.welcome }), Ma(), da();
      } else t.hasAttribute("data-tray-tuck") ? (Xn = !Xn, da()) : t.hasAttribute("data-phone-toggle") ? (ni = !ni, da(), ni && ((r = mn.querySelector("[data-phone-key]")) == null || r.focus({ preventScroll: !0 }))) : t.dataset.trayCard ? e.detail === 0 && (zr(t.dataset.trayCard), da()) : t.dataset.favEye ? Di(t.dataset.favEye, t.getAttribute("aria-pressed") !== "true") : t.dataset.favRemove ? fl(t.dataset.favRemove) : t.hasAttribute("data-fav-add") ? (Ao = !Ao, da(), Ao && Ht.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : t.dataset.favPick ? qd(t.dataset.favPick) : t.hasAttribute("data-tile-add") ? (Aa = !Aa, da(), Aa && Ht.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : t.dataset.tilePick ? Ul(t.dataset.tilePick) : t.hasAttribute("data-area-choose") ? Nc() : t.hasAttribute("data-room-add") ? (fa = !fa, da()) : t.dataset.roomPick ? Ul("room:" + t.dataset.roomPick) : t.hasAttribute("data-fav-suggest") && li({ suggest: !za() });
    }
  }), Ht.addEventListener("input", (e) => {
    e.target.matches("[data-fav-search],[data-tile-search]") && da();
  }), Ht.addEventListener("keydown", (e) => {
    var o, r;
    const t = !!((r = (o = e.target).closest) != null && r.call(o, '[data-pick="tiles"],[data-tile-add]'));
    e.key !== "Escape" || !(t ? Aa : Ao) || (e.stopPropagation(), t ? Aa = !1 : Ao = !1, da(), Ht.querySelector(t ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Jl(e, t, o, r) {
    e.preventDefault();
    const c = e.clientX, h = e.clientY;
    let p = null, g = 0;
    const w = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), D = (L) => {
      if (!p) {
        if (Math.hypot(L.clientX - c, L.clientY - h) < 4) return;
        p = t.cloneNode(!0), p.classList.add("tfTrayGhost"), p.style.width = t.offsetWidth + "px", v.appendChild(p);
      }
      p.style.transform = "translate(" + (L.clientX - 24) + "px," + (L.clientY - 24) + "px)";
      const N = !Xn && L.clientX >= Ht.getBoundingClientRect().left;
      if (o === "card") {
        const Z = E.getBoundingClientRect(), { w: se } = io(E.clientWidth);
        _t = !N && L.clientX >= Z.left && L.clientX <= Z.right && L.clientY >= Z.top + Ka ? { key: r, col: Math.max(0, Math.floor((L.clientX - Z.left) / (se + Qt))), row: Math.max(0, Math.floor((L.clientY - Z.top - Ka) / Bn)), fromTray: !0 } : null, g || (g = requestAnimationFrame(() => {
          g = 0, Oa();
        }));
        return;
      }
      const ne = E.querySelector(".tfDash-favs"), X = ne == null ? void 0 : ne.getBoundingClientRect();
      if (Ja = null, X && !N && L.clientX >= X.left && L.clientX <= X.right && L.clientY >= X.top && L.clientY <= X.bottom) {
        let Z = 1 / 0;
        ne.querySelectorAll('[data-k^="fav:"]').forEach((se, j) => {
          const ye = se.getBoundingClientRect(), K = Math.hypot(L.clientX - (ye.left + ye.width / 2), L.clientY - (ye.top + ye.height / 2));
          K < Z && (Z = K, Ja = { i: j, r: ye, after: L.clientX > ye.left + ye.width / 2 });
        }), Ja || (Ja = { i: 0, r: null, after: !1 });
      }
      Ja != null && Ja.r ? (w.isConnected || v.appendChild(w), Object.assign(w.style, { left: (Ja.after ? Ja.r.right : Ja.r.left) - 2 + "px", top: Ja.r.top + 8 + "px", height: Ja.r.height - 16 + "px" })) : w.remove();
    }, P = () => {
      if (window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", P), window.removeEventListener("pointercancel", P), cancelAnimationFrame(g), p == null || p.remove(), w.remove(), o === "card") {
        if (!p) zr(r);
        else if (_t != null && _t.fromTray) {
          Oa();
          const Z = Sn(r) + Gl(r), se = Mt(), j = ir();
          _t = null, Fr({ ...se, hidden: se.hidden.filter((ye) => ye !== r) }, j), $n(Z);
        }
        _t = null, Oa(), Ma(), da();
        return;
      }
      if (!Ja) return;
      const L = new Set(Fe.favHidden || []);
      L.delete(r);
      const N = Ne().filter((Z) => Z !== r), ne = N.filter((Z) => !L.has(Z)), X = ne[Math.min(Ja.i + (Ja.after ? 1 : 0), ne.length)];
      N.splice(X ? N.indexOf(X) : N.length, 0, r), Ja = null, li({ favourites: N, favHidden: [...L] }), $n(Pe(r) + " put back");
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", P), window.addEventListener("pointercancel", P);
  }
  const _i = {
    sums: 201,
    wx: 364,
    favs: 364,
    areas: 364,
    act: 364,
    energy: 288,
    avg: 288,
    aq: 288,
    pollen: 288,
    radar: 288,
    hourly: 288,
    sun: 288,
    moon: 288,
    uv: 288,
    humidity: 288,
    pressure: 288,
    wind: 288,
    visibility: 288
  }, Ql = 136, Ea = 288, Hc = 0.8, di = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, mn = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  mn.setAttribute("aria-label", "Phone order"), mn.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + hp + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', v.appendChild(mn);
  let ed = "";
  function hl() {
    var g;
    const e = ni && un && v.classList.contains("tfBoard") && !Xn;
    if (mn.classList.toggle("open", e), mn.toggleAttribute("inert", !e), !e) return;
    const t = Ir().filter((w) => !Mt().hidden.includes(w.key)), o = t.length, r = (w) => Math.round(w * Hc * 10) / 10 + "px", c = (w, D) => {
      const P = w.el.classList.contains("tfDac"), L = w.tile ? P ? Ea : Ql : _i[w.key] || Ql;
      return '<button class="tfPhoneBlock' + (w.tile ? " tile" : "") + '" type="button" data-phone-key="' + J(w.key) + '" style="min-height:' + r(L) + '" aria-label="' + J(Sn(w.key) + ", " + (D + 1) + " of " + o + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (w.tile ? la(w.key, xn(w.key)) : la(w.key, di[w.key])) + '></span><span class="tfPhoneName">' + J(Sn(w.key)) + "</span></button>";
    }, h = '<div class="tfPhoneTitle">' + J(((g = E.querySelector(".tfDashTitle")) == null ? void 0 : g.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + r(_i.sums) + '"><span class="tfPhoneName">' + J(Sn("sums")) + "</span></div>" + t.map(c).join("");
    if (mn.querySelector('[data-phone="note"]').innerHTML = Mt().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", h === ed) return;
    ed = h;
    const p = mn.querySelector('[data-phone="list"]');
    p.innerHTML = h, to(p);
  }
  function td(e, t) {
    var o;
    Qo({ ...Mt(), phone: e }), da(), t && ((o = mn.querySelector('[data-phone-key="' + CSS.escape(t) + '"]')) == null || o.focus({ preventScroll: !0 }));
  }
  const as = () => [...mn.querySelectorAll("[data-phone-key]")].map((e) => e.dataset.phoneKey);
  function Ic(e, t) {
    e.preventDefault();
    const o = t.parentElement, r = mn.querySelector(".tfPhoneScreen"), c = as().join();
    t.classList.add("moving");
    const h = (g) => {
      const w = r.getBoundingClientRect();
      g.clientY > w.bottom - 40 ? r.scrollTop += 12 : g.clientY < w.top + 40 && (r.scrollTop -= 12);
      const D = [...o.querySelectorAll("[data-phone-key]")].find((N) => {
        const ne = N.getBoundingClientRect();
        return N !== t && g.clientX >= ne.left && g.clientX <= ne.right && g.clientY >= ne.top && g.clientY <= ne.bottom;
      });
      if (!D) return;
      const P = D.getBoundingClientRect(), L = D.classList.contains("tile") ? g.clientX < P.left + P.width / 2 : g.clientY < P.top + P.height / 2;
      o.insertBefore(t, L ? D : D.nextSibling);
    }, p = () => {
      window.removeEventListener("pointermove", h), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), t.classList.remove("moving");
      const g = as();
      ed = "", g.join() !== c ? td(g) : hl();
    };
    window.addEventListener("pointermove", h), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  mn.addEventListener("pointerdown", (e) => {
    const t = e.target.closest("[data-phone-key]");
    t && e.button <= 0 && Ic(e, t);
  }), mn.addEventListener("click", (e) => {
    var o;
    const t = e.target.closest("button");
    if (t != null && t.hasAttribute("data-phone-close"))
      ni = !1, da(), (o = Ht.querySelector("[data-phone-toggle]")) == null || o.focus({ preventScroll: !0 });
    else if (t != null && t.hasAttribute("data-phone-reset")) {
      const { phone: r, ...c } = Mt();
      Qo(c), da();
    }
  }), mn.addEventListener("keydown", (e) => {
    var p, g, w, D;
    if (e.key === "Escape") {
      e.stopPropagation(), ni = !1, da(), (p = Ht.querySelector("[data-phone-toggle]")) == null || p.focus({ preventScroll: !0 });
      return;
    }
    const t = (D = (w = (g = e.target).closest) == null ? void 0 : w.call(g, "[data-phone-key]")) == null ? void 0 : D.dataset.phoneKey, o = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!t || !o) return;
    e.preventDefault();
    const r = as(), c = r.indexOf(t), h = c + o;
    h < 0 || h >= r.length || ([r[c], r[h]] = [r[h], r[c]], td(r, t));
  });
  function Fc(e, t) {
    e.preventDefault();
    const o = t.parentElement;
    t.classList.add("moving");
    const r = (h) => {
      const p = [...o.children].find((g) => {
        const w = g.getBoundingClientRect();
        return g !== t && h.clientY >= w.top && h.clientY <= w.bottom;
      });
      if (p) {
        const g = p.getBoundingClientRect();
        o.insertBefore(t, h.clientY < g.top + g.height / 2 ? p : p.nextSibling);
      }
    }, c = () => {
      window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), t.classList.remove("moving");
      const h = new Set(Ne());
      dl.favs = null, li({ favourites: [...o.children].map((p) => p.dataset.trayFav).filter((p) => h.has(p)) });
    };
    window.addEventListener("pointermove", r), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", c);
  }
  Ht.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    const t = e.target.closest("[data-tray-card]"), o = e.target.closest(".tfTrayFav");
    t ? Jl(e, t, "card", t.dataset.trayCard) : o && e.target.closest(".tfTrayGrip") ? Fc(e, o) : o != null && o.classList.contains("off") && !e.target.closest("button") && Jl(e, o, "fav", o.dataset.trayFav);
  });
  function ml(e) {
    if (!un || e.button !== 0 || e.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const t = e.target.closest(".tfBoardItem"), o = t && Kn().find((Wt) => Wt.el === t);
    if (!o || oo.includes(o.key)) return;
    const r = Ti.get(o.key), { w: c } = io(E.clientWidth);
    if (!r) return;
    e.preventDefault(), Lo();
    const h = e.clientX, p = e.clientY;
    let g = !1, w = 0;
    const D = Sa.drag, P = nn();
    let L = 0, N = 0, ne = 0, X = 0, Z = 0, se = 0, j = P || D.stick === 0, ye = 0;
    const K = (Wt, Va, et, Ct) => {
      t.style.transform = "translate(" + ne.toFixed(2) + "px," + X.toFixed(2) + "px) rotate(" + Wt.toFixed(2) + "deg) rotate(" + Va + "rad) scale(" + et.toFixed(4) + "," + Ct.toFixed(4) + ") rotate(" + -Va + "rad)";
    }, We = () => {
      if (ye = requestAnimationFrame(We), P) {
        ne = L, X = N, K(0, 0, 1, 1);
        return;
      }
      if (!j) {
        const Ga = Math.min(Math.hypot(L, N) / Math.max(1, D.stick), 1);
        ne = L * 0.35, X = N * 0.35, K(0, Math.atan2(N, L), 1 + 0.155 * Ga, 1 - 0.1 * Ga);
        return;
      }
      Z = Up(Z, L - ne, D.pull / 100, D.keep / 100), se = Up(se, N - X, D.pull / 100, D.keep / 100), ne += Z, X += se;
      const Wt = Math.hypot(Z, se), Va = Math.min(Wt / 48, 1), et = Math.max(-5, Math.min(D.tilt, Z * 0.32)), Ct = 1 + D.lift / 100;
      K(et, Math.atan2(se, Z), Ct * (1 + 0.1 * Va), Ct * (1 - 0.063 * Va));
    }, Bt = (Wt) => {
      if (L = Wt.clientX - h, N = Wt.clientY - p, !g) {
        if (Math.hypot(L, N) < 4) return;
        g = !0, _t = { key: o.key, col: r.col, row: r.row }, t.classList.add("tfDragging", "mvDrag"), ye = requestAnimationFrame(We);
      }
      !j && Math.hypot(L, N) > D.stick && (j = !0, Z = L * 0.085, se = N * 0.085), _t.col = Math.round((r.x + L) / (c + Qt)), _t.row = Math.round((r.y + N - Ka) / Bn), w || (w = requestAnimationFrame(() => {
        w = 0, Oa();
      }));
    }, st = () => {
      var Oc;
      if (window.removeEventListener("pointermove", Bt), window.removeEventListener("pointerup", st), window.removeEventListener("pointercancel", st), !g) return;
      const Wt = (Ni) => {
        Ni.preventDefault(), Ni.stopImmediatePropagation();
      };
      window.addEventListener("click", Wt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Wt, { capture: !0 }), 300), cancelAnimationFrame(w), cancelAnimationFrame(ye);
      const Va = t.getBoundingClientRect(), et = o.key;
      t.style.transition = "none", Oa(), t.classList.remove("tfDragging", "mvDrag"), t.style.transform = "", _t = null, Fr(Mt(), ir()), Oa(), Ma();
      const Ct = (Oc = Kn().find((Ni) => Ni.key === et)) == null ? void 0 : Oc.el;
      if (requestAnimationFrame(() => {
        t.style.transition = "", Ct && (Ct.style.transition = "");
      }), !Ct || P) return;
      Ct.style.transition = "none";
      const Ga = Ct.getBoundingClientRect(), Xd = Va.left + Va.width / 2 - (Ga.left + Ga.width / 2), kl = Va.top + Va.height / 2 - (Ga.top + Ga.height / 2);
      Ct.style.zIndex = "20", Ct.animate([{ transform: "translate(" + Xd + "px," + kl + "px) scale(" + (1 + D.lift / 100) + ")" }, { transform: "none" }], { duration: D.slide, easing: sa.land }).finished.then(() => {
        Ct.style.zIndex = "", Yp(Ct);
      }, () => {
        Ct.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", Bt), window.addEventListener("pointerup", st), window.addEventListener("pointercancel", st);
  }
  function Hn(e = !1) {
    const t = E == null ? void 0 : E.querySelector(".tfDashGraph svg[data-graph]");
    if (!(t != null && t.clientWidth)) return;
    const o = t.dataset.graph + "@" + t.clientWidth + "x" + t.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (t.dataset.drawn === o) return;
    const r = !t.dataset.drawn;
    t.dataset.drawn = o;
    const c = ki.find((h) => h.id === t.dataset.graph);
    c ? $o(t, c).then(() => {
      (e || r) && Br(t);
    }) : fi(t.dataset.graph, t).then(() => {
      e && er(t);
    });
  }
  function ns() {
    var w, D, P;
    mt = An.model(i(), { madeUp: !A }), Qa(), M = mt.states, M[(w = Fe.sources) == null ? void 0 : w.grid] && (mt.grid = Fe.sources.grid), M[(D = Fe.sources) == null ? void 0 : D.alarm] && (mt.security.alarms = [Fe.sources.alarm]), $e.forEach((L, N) => {
      const ne = M[N], X = (ne == null ? void 0 : ne.attributes) || {};
      if (!ne || Date.now() - L.at > 2 * 60 * 1e3) {
        $e.delete(N);
        return;
      }
      L.pos != null && ne.state !== "opening" && ne.state !== "closing" && Math.abs(Yn(N) - L.pos) < 1 && delete L.pos, L.tilt != null && Math.abs((X.current_tilt_position ?? -1) - L.tilt) < 1 && delete L.tilt, L.pos == null && L.tilt == null && $e.delete(N);
    });
    const e = [];
    let t = 0;
    const o = ot();
    Ve = o.filter((L) => L.room).map((L) => L.room), Ve.some((L) => L.id === B) || (B = ((P = Ve[0]) == null ? void 0 : P.id) || null);
    const r = q === "weather" ? { key: "weather", name: "Weather" } : q && o.find((L) => L.key === q);
    if (r || (q = null), v.classList.toggle("tfAreaOpen", !!r), v.classList.toggle("tfWeatherOpen", (r == null ? void 0 : r.key) === "weather"), v.classList.toggle("tfDash", !r), pt = /* @__PURE__ */ new Map(), mt.rooms.forEach((L) => [...L.actions, ...L.plugs, ...L.readings, ...L.openings, ...L.solar, ...L.plants.flatMap((N) => [N.id, ...N.readings])].forEach((N) => pt.set(N, L.name))), !r) return Sd(e, Fa());
    if (e.push({ key: "areahead", html: Wd(r, ++t) }), r.key === "weather")
      return e.weather = ++t, e;
    const c = r.ids, h = r.room ? r.room.id : r.key, p = r.room;
    p != null && p.solar.length && e.push({ key: "energy:" + p.id, html: $t(p, ++t) }), p && (p.readings.length || p.power != null) && e.push({ key: "readings:" + p.id, html: wo(p, ++t) }), p == null || p.plants.forEach((L) => e.push({ key: "plant:" + L.id, html: Zn(L, ++t) }));
    const g = [...c, ...((p == null ? void 0 : p.plugs) || []).filter((L) => !c.includes(L))];
    return g.length && e.push({ key: "block:" + h, order: ++t, tiles: g.map((L) => ({ key: L, html: Zi(L) })) }), e;
  }
  const Wd = (e, t) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + t + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + bu + '</button><div class="settingsTitle">' + J(e.name) + "</div></div>";
  let ad = 0, nd = null;
  const gn = (e) => e === "weather" ? Un.wx : e.startsWith("room:") && E.querySelector('.tfRoomTile[data-k="' + CSS.escape(e) + '"]') || E.querySelector(".tfAreas");
  function ci(e) {
    var t, o;
    q || (ad = os().scrollTop, nd = ((t = gn(e)) == null ? void 0 : t.getBoundingClientRect().top) ?? null), q = e, e.startsWith("room:") && (B = e.slice(5)), Ro(), os().scrollTop = 0, (o = E.querySelector("[data-area-back]")) == null || o.focus({ preventScroll: !0 });
  }
  let pi = null;
  function co(e, t) {
    if (pi == null || pi(), t == null) return;
    const o = os(), r = performance.now() + 1500, c = ["wheel", "touchstart", "pointerdown", "keydown"];
    let h = 0;
    const p = () => {
      cancelAnimationFrame(h), c.forEach((w) => window.removeEventListener(w, p, !0)), pi = null;
    }, g = () => {
      const w = e();
      if (w != null && w.isConnected) {
        const D = w.getBoundingClientRect().top - t;
        Math.abs(D) > 0.5 && (o.scrollTop += D);
      }
      performance.now() < r ? h = requestAnimationFrame(g) : p();
    };
    c.forEach((w) => window.addEventListener(w, p, { capture: !0, passive: !0 })), pi = p, g();
  }
  function ui() {
    var o;
    const e = q;
    q = null, Ro(), os().scrollTop = ad, co(() => gn(e), nd);
    const t = e.startsWith("room:") ? E.querySelector('.tfRoomTile[data-k="' + CSS.escape(e) + '"]') || E.querySelector('.tfAreaPanel[data-area="' + CSS.escape(e.slice(5)) + '"]') : e === "weather" ? Un.wx.querySelector(".wbOpenPage") : E.querySelector('[data-k="sum:' + CSS.escape(e) + '"]');
    (o = (t == null ? void 0 : t.querySelector("[data-go]")) || t) == null || o.focus({ preventScroll: !0 });
  }
  const od = (e) => e.wrap ? e.wrap(e.tiles.map((t) => t.html).join(""), e) : '<div class="tfBlock" data-tf data-k="' + J(e.key) + '" style="order:' + e.order + '"><div class="tfActions">' + e.tiles.map((t) => t.html).join("") + "</div></div>", dr = (e) => e.map((t) => t.key + (t.tiles ? "(" + t.tiles.map((o) => o.key).join(",") + ")" : "")).join(";");
  function os() {
    for (let e = v.parentElement || v.getRootNode().host; e; e = e.parentElement || e.getRootNode().host) {
      const t = getComputedStyle(e).overflowY;
      if ((t === "auto" || t === "scroll") && e.scrollHeight > e.clientHeight) return e;
    }
    return document.scrollingElement;
  }
  function gl(e) {
    const t = os(), o = (g) => {
      const w = g.getBoundingClientRect();
      return w.height && w.bottom > 0 && w.top < window.innerHeight;
    }, r = [...E.children, ...E.querySelectorAll(".tfDashTiles > *")].find((g) => !g.matches(".tfDashTiles") && o(g)), c = r == null ? void 0 : r.dataset.k, h = r == null ? void 0 : r.getBoundingClientRect().top;
    e();
    const p = r != null && r.isConnected ? r : c && E.querySelector('[data-k="' + CSS.escape(c) + '"]');
    p != null && p.isConnected && h != null && (t.scrollTop += p.getBoundingClientRect().top - h);
  }
  function Ro() {
    if (!k || !E) return;
    const e = ns(), t = (c) => {
      var h;
      return (((h = c.closest("[data-k]")) == null ? void 0 : h.dataset.k) || "") + "|" + c.dataset.iconFor + "|" + (c.dataset.iconName || "");
    }, o = /* @__PURE__ */ new Map();
    E.querySelectorAll("[data-tf] [data-icon-for]").forEach((c) => {
      c.firstElementChild && (o.get(t(c)) || o.set(t(c), []).get(t(c))).push(c.firstElementChild);
    }), E.querySelectorAll("[data-tf]").forEach((c) => c.remove()), wn.clear();
    const r = document.createElement("div");
    r.innerHTML = e.map((c) => c.tiles ? od(c) : c.html).join(""), e.forEach((c) => c.tiles ? c.tiles.forEach((h) => wn.set(h.key, h.html)) : wn.set(c.key, c.html)), hs = dr(e), r.querySelectorAll("[data-icon-for]").forEach((c) => {
      var p;
      const h = !c.firstElementChild && ((p = o.get(t(c))) == null ? void 0 : p.shift());
      h && c.appendChild(h);
    }), E.append(...r.children), gs(e.weather), dt(), $a.disconnect(), Oa(), to(E), O(E), Yt(E), G(), T && fi(T.id), Is(), ge(), Me(), requestAnimationFrame(ie);
  }
  const Ns = (e) => {
    var o;
    const t = n.activeElement && e.contains(n.activeElement) ? n.activeElement : null;
    return t && { label: t.getAttribute("aria-label"), act: (o = t.dataset) == null ? void 0 : o.act };
  }, vl = (e, t) => {
    var o;
    t && ((o = t.label && e.querySelector('[aria-label="' + CSS.escape(t.label) + '"]') || t.act && e.querySelector('[data-act="' + CSS.escape(t.act) + '"]')) == null || o.focus({ preventScroll: !0 }));
  };
  function Hs(e, t) {
    if (!e.querySelector(".tfDacPad"))
      return e.replaceWith(t), t;
    const o = e.matches(".tfDac") && e.querySelector(":scope > .tfDacPad"), r = t.querySelector(":scope > .tfDacPad");
    if (o)
      return (r == null ? void 0 : r.dataset.dac) !== o.dataset.dac ? (e.replaceWith(t), t) : (e.querySelector(":scope > .tfActionHead").replaceWith(t.querySelector(":scope > .tfActionHead")), e.classList.toggle("on", t.classList.contains("on")), ["data-light", "data-tone"].forEach((p) => t.hasAttribute(p) ? e.setAttribute(p, t.getAttribute(p)) : e.removeAttribute(p)), [...e.style].filter((p) => p.startsWith("--") && !p.startsWith("--tf-")).forEach((p) => e.style.removeProperty(p)), [...t.style].forEach((p) => e.style.setProperty(p, t.style.getPropertyValue(p))), e);
    const c = (p) => {
      var g;
      return ((g = p.dataset) == null ? void 0 : g.iconFor) !== void 0;
    };
    if (c(e) && c(t) && !t.children.length && e.dataset.iconFor === t.dataset.iconFor && e.dataset.iconName === t.dataset.iconName && e.firstElementChild)
      return [...e.attributes].forEach((p) => {
        t.hasAttribute(p.name) || e.removeAttribute(p.name);
      }), [...t.attributes].forEach((p) => {
        e.getAttribute(p.name) !== p.value && e.setAttribute(p.name, p.value);
      }), e;
    if (e.tagName !== t.tagName || e.children.length !== t.children.length)
      return e.replaceWith(t), t;
    [...e.attributes].forEach((p) => {
      t.hasAttribute(p.name) || e.removeAttribute(p.name);
    }), [...t.attributes].forEach((p) => e.setAttribute(p.name, p.value));
    const h = [...t.children];
    return [...e.children].forEach((p, g) => Hs(p, h[g])), e;
  }
  function Vd(e, t) {
    const o = document.createElement("div");
    o.innerHTML = t;
    const r = Ns(e), c = Hs(e, o.firstElementChild);
    to(c), O(c), Yt(c), vl(c, r);
  }
  function Ma() {
    !k || !E || _t || gl(id);
  }
  function id() {
    if (!E.querySelector("[data-tf]")) {
      Ro();
      return;
    }
    const e = ns();
    if (dr(e) !== hs) {
      Ro();
      return;
    }
    const t = (o) => [...ve.keys()].some((r) => {
      const c = r.slice(r.indexOf("|") + 1);
      return o === c || o.endsWith(":" + c);
    });
    e.forEach((o) => (o.tiles || [o]).forEach((r) => {
      if (wn.get(r.key) === r.html || t(r.key)) return;
      const c = E.querySelector('[data-k="' + CSS.escape(r.key) + '"]');
      if (c) {
        if (wn.set(r.key, r.html), T && T.key === r.key && c.querySelector(".tfOpen")) {
          c.querySelector(".tfOpen .activityRowMeta").textContent = Vo(T.id);
          return;
        }
        Vd(c, r.html), T && T.key === r.key && fi(T.id), r.key.startsWith("energy:") && Is();
      }
    })), ge(), Me(), yo(), G(), Kt == null || Kt.update(), wa == null || wa.forEach((o) => o.update()), v.classList.contains("tfDash") && jr(), requestAnimationFrame(ie);
  }
  const Ri = {
    light: (e) => [["Brightness", e.brightness != null ? Math.round(e.brightness / 2.55) + "%" : null], ["Colour temperature", e.color_temp_kelvin ? Number(e.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", e.color_mode && Et(e.color_mode)]],
    climate: (e) => [["Current temperature", It(e.current_temperature) + " °C"], ["Target", It(e.temperature) + " °C"], ["Action", Et(e.hvac_action)]],
    cover: (e) => [["Position", e.current_position != null ? e.current_position + "% open" : null], ["Tilt", e.current_tilt_position != null ? e.current_tilt_position + "% open" : null]],
    humidifier: (e) => [["Current humidity", e.current_humidity + "%"], ["Target", e.humidity + "%"], ["Mode", Et(e.mode)]],
    media_player: (e) => [["Title", e.media_title], ["Artist", e.media_artist], ["Volume", e.volume_level != null ? Math.round(e.volume_level * 100) + "%" : null], ["Source", e.source]],
    vacuum: (e) => [["Battery", e.battery_level + "%"], ["Fan speed", Et(e.fan_speed)], ["Rooms", (e.rooms || []).join(", ") || null]],
    lock: (e) => [["Changed by", e.changed_by]],
    alarm_control_panel: (e) => [["Changed by", e.changed_by]],
    valve: () => [],
    plant: (e) => [["Moisture", e.moisture + "%"], ["Light", Number(e.brightness).toLocaleString() + " lx"], ["Temperature", It(e.temperature) + " °C"], ["Fertility", e.conductivity + " µS/cm"], ["Problems", e.problem === "none" ? "None" : Et(e.problem)]],
    weather: (e) => [["Temperature", e.temperature != null ? e.temperature + " " + (e.temperature_unit || "°C") : null], ["Humidity", e.humidity != null ? e.humidity + "%" : null], ["Wind", e.wind_speed != null ? e.wind_speed + " " + (e.wind_speed_unit || "km/h") : null], ["Pressure", e.pressure != null ? e.pressure + " " + (e.pressure_unit || "hPa") : null]]
  }, rd = (e) => Hi(e) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function jd(e, t = {}, o = !1) {
    return '<div class="tfMoreList">' + e.map((r) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + J(r.name) + '</div><div class="tfMoreTiles' + (o ? " single" : "") + '">' + r.ids.map((c) => no(c, t)).join("") + "</div></div>").join("") + "</div>";
  }
  const ze = document.createElement("div");
  ze.className = "tfMoreBackdrop", ze.hidden = !0, v.appendChild(ze);
  const Jn = document.createElement("div");
  Jn.className = "tfMoreBackdrop tfMoreUnder", Jn.hidden = !0, v.insertBefore(Jn, ze);
  const sd = (e, t) => {
    for (let o = e; o && o !== ze; o = o.parentElement) {
      const r = getComputedStyle(o).overflowY;
      if ((r === "auto" || r === "scroll") && o.scrollHeight > o.clientHeight + 1 && (t < 0 ? o.scrollTop > 0 : o.scrollTop + o.clientHeight < o.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let is = null;
  ze.addEventListener("touchstart", (e) => {
    is = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: !0 }), ze.addEventListener("touchmove", (e) => {
    var c, h;
    if (!is || e.touches.length > 1 || (h = (c = e.target).closest) != null && h.call(c, "input,textarea,select")) return;
    const t = e.touches[0], o = is.x - t.clientX, r = is.y - t.clientY;
    is = { x: t.clientX, y: t.clientY }, Math.abs(r) >= Math.abs(o) && !sd(e.target, r) && e.preventDefault();
  }, { passive: !1 }), ze.addEventListener("wheel", (e) => {
    var t, o;
    Math.abs(e.deltaX) > Math.abs(e.deltaY) && ((o = (t = e.target).closest) != null && o.call(t, "[data-more-pages]")) || sd(e.target, e.deltaY) || e.preventDefault();
  }, { passive: !1 });
  const bl = () => window.innerWidth <= 620;
  let Na = null;
  ze.addEventListener("pointerdown", (e) => {
    const t = ze.querySelector(".tfMorePair");
    !bl() || !t || !t.contains(e.target) || !e.isPrimary || ze._closing || e.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide") || (Na = { x: e.clientX, y: e.clientY, t: performance.now(), dy: 0, v: 0, pair: t, from: e.target, grab: e.target.matches(".tfMore") || !!e.target.closest(".tfMoreHead") });
  }, !0), ze.addEventListener("pointermove", (e) => {
    if (!Na || !e.isPrimary) return;
    const t = e.clientY - Na.y, o = performance.now();
    if (!Na.on) {
      if (Math.abs(e.clientX - Na.x) > 8 || t < -8 || !Na.grab && sd(Na.from, -1)) {
        Na = null;
        return;
      }
      if (t < 8) return;
      Na.on = !0;
      try {
        ze.setPointerCapture(e.pointerId);
      } catch {
      }
    }
    Na.v = (t - Na.dy) / Math.max(1, o - Na.t), Na.dy = t, Na.t = o, Na.pair.style.transform = "translateY(" + Math.max(0, t) + "px)";
  });
  const wl = (e) => {
    if (!Na || !e.isPrimary) return;
    const t = Na;
    if (Na = null, !t.on) return;
    const o = (D) => {
      D.preventDefault(), D.stopImmediatePropagation();
    };
    window.addEventListener("click", o, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", o, { capture: !0 }), 300);
    const r = e.type === "pointerup" && (t.dy > 120 || t.v > 0.5), c = "translateY(" + Math.max(0, t.dy) + "px)";
    if (t.pair.style.transform = "", !r || nn()) {
      r ? kt() : t.pair.animate([{ transform: c }, { transform: "none" }], { duration: 320, easing: sa.spring });
      return;
    }
    const h = R;
    ze._closing = !0, ze.style.pointerEvents = "none", ze.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: sa.exit, fill: "forwards" });
    const p = t.pair.animate([{ transform: c }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: sa.exit, fill: "forwards" });
    let g = !1;
    const w = () => {
      g || (g = !0, ze._closing = !1, ze.style.pointerEvents = "", ze.getAnimations().forEach((D) => D.cancel()), t.pair.getAnimations().forEach((D) => D.cancel()), R === h && kt());
    };
    p.finished.then(w, w), setTimeout(w, 300);
  };
  ze.addEventListener("pointerup", wl), ze.addEventListener("pointercancel", wl);
  function ld() {
    const e = ze.querySelector(".tfMorePair"), t = ze.querySelector(".tfMore");
    e == null || e.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - t.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", ld, { passive: !0 }), k && Tt();
  let po = [];
  const zd = (e) => e === "favourites" || e.startsWith("summary:") || e.startsWith("group:");
  function Gd(e) {
    const t = (w, D = "") => '<div class="tfMoreHead">' + (R != null && R.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + up + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + J(w) + "</div>" + D + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + wu + "</button></div>", o = (w, D) => '<div class="tfMoreNow"><div class="tfMoreState">' + J(w) + "</div></div>", r = jd;
    if (e === "favourites") {
      const w = Ne(), D = new Set(w), P = [{ name: "Starred", ids: w }, { name: "Home", ids: mt.homeVacuums }, { name: "Security", ids: [...mt.security.alarms, ...mt.security.locks] }, ...mt.rooms.map((L) => ({ name: L.name, ids: [...L.actions, ...L.plugs] }))].map((L, N) => N ? { ...L, ids: L.ids.filter((ne) => !D.has(ne)) } : L).filter((L) => L.ids.length);
      return [t("Favourites"), o(w.length ? w.length + " starred" : "None starred"), r(P, { star: !0 }, !0)];
    }
    const c = (w, { name: D = "", alert: P = !1, plain: L = !1 } = {}) => {
      const N = L ? [] : w.filter((Z) => fd.includes(Z.split(".")[0])), ne = w.filter((Z) => !N.includes(Z)), X = (Z) => Z.startsWith("vacuum.") && wt(Z).battery_level != null ? wt(Z).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (D ? '<div class="tfMoreGroupName">' + J(D) + "</div>" : "") + '<div class="tfMoreActions">' + N.map((Z) => Zi(Z, !0)).join("") + ne.map((Z) => no(Z, { plain: L, alert: P, say: L ? X(Z) : null })).join("") + "</div></div>";
    };
    if (e.startsWith("summary:")) {
      const w = Fa().find((N) => N.key === e.slice(8));
      if (!w) return null;
      const D = w.key === "light" ? (w.groups || []).flatMap((N) => N.ids) : [], P = D.some((N) => {
        var ne;
        return ((ne = M[N]) == null ? void 0 : ne.state) === "on";
      }), L = D.length ? '<button class="primary" type="button" data-acts="' + Gi(D.map((N) => ["light", P ? "turn_off" : "turn_on", N])) + '">' + (P ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [t(w.name), '<div class="tfMoreNowRow">' + o(w.value) + L + "</div>", ...(w.groups || []).map((N) => c(N.ids, { name: N.name === w.name ? "" : N.name, alert: N.alert, plain: w.plain }))];
    }
    if (e.startsWith("group:")) {
      const [, w, D] = e.split(":"), P = mt.rooms.find((ne) => ne.id === w), L = P && b(P).find((ne) => ne.key === D);
      if (!L) return null;
      const N = L.acts ? '<button class="primary" type="button" data-acts="' + Gi(L.acts) + '">' + (L.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [t(P.name + " " + L.label.toLowerCase()), '<div class="tfMoreNowRow">' + o(L.value) + N + "</div>", c(y(P, D))];
    }
    const h = e.split(".")[0];
    M[e];
    const p = fd.includes(h) ? Yo(e) : dd(e), g = (R == null ? void 0 : R.page) || 0;
    return [
      Ud(e, p),
      '<div class="tfMorePages" data-more-pages><section class="tfMorePage" aria-label="Control">' + Zd(e) + (h === "plant" ? ut(e).join("") : "") + p.sections.filter(Boolean).join("") + '</section><section class="tfMorePage" aria-label="Info">' + s(e) + "</section></div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i), a small segmented pair
      '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="Pages">' + [["Control", Mg], ["Info", Ru]].map(([w, D], P) => '<button type="button" role="tab" aria-selected="' + (P === g) + '" aria-label="' + w + '" title="' + w + '" data-more-page="' + P + '"' + (P === g ? "" : ' tabindex="-1"') + ">" + D + "</button>").join("") + "</div>"
    ];
  }
  function Ud(e, t, o) {
    var p, g, w, D, P;
    const r = (p = mt.areaOf) == null ? void 0 : p.call(mt, e), c = r && (((g = mt.rooms.find((L) => L.id === r)) == null ? void 0 : g.name) || ((P = (D = (w = i()) == null ? void 0 : w.areas) == null ? void 0 : D[r]) == null ? void 0 : P.name)) || "", h = t.button ? xo(e, t) : '<div class="tfIcon"' + la(e, t.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (t.on ? " on" : "") + '"' + (t.tone ? ' data-tone="' + t.tone + '"' : "") + mi(e) + ">" + (R != null && R.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + up + "</button>" : "") + h + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + J(Pe(e)) + "</span>" + (c ? '<span class="activityRowMeta">' + J(c) + "</span>" : "") + '</div><button class="tfBack" type="button" data-more-close aria-label="Close">' + wu + "</button></div>";
  }
  const Yd = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function dd(e) {
    var c;
    const t = e.split(".")[0], o = ((c = M[e]) == null ? void 0 : c.state) === "on", r = fp.includes(t) ? { act: Lt(t, "toggle", e), label: "Turn " + Pe(e) + (o ? " off" : " on") } : t === "scene" || t === "script" ? { act: Lt(t, "turn_on", e), label: "Run " + Pe(e) } : null;
    return { sections: [], on: o, button: r, icon: xn(e) };
  }
  function Zd(e) {
    const t = e.split(".")[0];
    if (Yd.includes(t) || t === "light" && !yn(e)) {
      const c = fd.includes(t) ? Yo(e) : dd(e);
      return c != null && c.button ? '<div class="tfMoreSpace tfMoreSwitch' + (c.on ? " on" : "") + '"' + (c.tone ? ' data-tone="' + c.tone + '"' : "") + mi(e) + ">" + xo(e, c) + "</div>" : "";
    }
    if (t === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + J(e) + '"></div></div>';
    if (t === "light" && yn(e)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + J(e) + '"></div></div>';
    const { big: o, lines: r } = a(e);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (cn("pos", e) != null ? " live" : "") + '"><span class="tfMoreNum">' + J(o[0]) + "</span>" + (o[1] ? '<span class="tfMoreUnit">' + J(o[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + r.map(([c, h]) => '<div class="tfMoreFact"><span>' + J(c) + "</span><span>" + J(h) + "</span></div>").join("") + "</div></div>";
  }
  function a(e) {
    var P;
    const t = M[e], o = wt(e), r = e.split(".")[0], c = (((P = Ri[r]) == null ? void 0 : P.call(Ri, o)) || []).filter(([, L]) => L != null && L !== ""), h = (L) => {
      const N = c.findIndex(([ne]) => ne === L);
      return N < 0 ? null : c.splice(N, 1)[0][1];
    }, p = (L) => {
      const N = String(L).match(/^(-?[\d.,]+)\s*(.*)$/);
      return N ? [N[1], N[2]] : [String(L), ""];
    }, g = () => [Et(String(t.state).replace(/_/g, " ")), ""];
    let w;
    r === "light" ? (h("Brightness"), w = t.state === "on" && ja(e) ? [String(En(t)), "%"] : g()) : r === "climate" ? w = p(h("Current temperature") || It(o.current_temperature) + " °C") : r === "cover" ? (h("Position"), w = o.current_position != null ? [String(Yn(e)), "%"] : g()) : r === "humidifier" ? w = p(h("Current humidity") || t.state) : r === "vacuum" ? w = p(h("Battery") || t.state) : r === "plant" ? w = p(h("Moisture") || t.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(r) ? w = g() : w = p(t.state + (o.unit_of_measurement ? " " + o.unit_of_measurement : ""));
    const D = c.length ? c.slice(0, 4) : [["State", Ut(e)]];
    return { big: w, lines: D };
  }
  function s(e) {
    var D, P, L, N, ne, X, Z;
    const t = M[e], o = i(), r = (D = o == null ? void 0 : o.entities) == null ? void 0 : D[e], c = r != null && r.device_id ? (P = o == null ? void 0 : o.devices) == null ? void 0 : P[r.device_id] : null, h = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + J(e) + '" role="img" aria-label="' + J(Pe(e)) + ', last 24 hours"></svg></div>', p = (L = mt.areaOf) == null ? void 0 : L.call(mt, e), g = p && (((N = mt.rooms.find((se) => se.id === p)) == null ? void 0 : N.name) || ((X = (ne = o == null ? void 0 : o.areas) == null ? void 0 : ne[p]) == null ? void 0 : X.name)) || "", w = [
      ...((Z = Ri[e.split(".")[0]]) == null ? void 0 : Z.call(Ri, wt(e))) || [],
      ["Changed", t.last_changed && zs(Date.parse(t.last_changed))],
      ["Area", g],
      ["Device", c && (c.name_by_user || c.name)],
      ["Integration", (r == null ? void 0 : r.platform) && Et(r.platform.replace(/_/g, " "))],
      ["Entity", e]
    ].filter(([, se]) => se != null && se !== "");
    return h + '<div class="tfMoreRows">' + w.map(([se, j]) => '<div class="tfMoreRow"><span>' + J(se) + "</span><span>" + J(j) + "</span></div>").join("") + "</div>" + rd(e) + (c ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + J(r.device_id) + '"><span>Device page</span>' + Bu + "</button>" : "");
  }
  const d = () => "";
  let m = "";
  function S(e) {
    var t;
    R && (R.details = e, ge(), (t = ze.querySelector(e ? "[data-details-close]" : "[data-details]")) == null || t.focus({ preventScroll: !0 }));
  }
  const _ = (e) => {
    const t = M[e], o = Yn(e), r = gi(e);
    return { kind: pp(t), name: Pe(e), text: Ut(e), pos: o, target: Math.abs(r - o) > 0.5 ? r : null, moving: t.state === "opening" || t.state === "closing", tilt: Fo(e) ?? 100, canSet: At(e, Cu) };
  };
  function O(e) {
    e.querySelectorAll("[data-cover-art]").forEach((t) => {
      const o = t.dataset.coverArt, r = t.dataset.artKey || "more:" + o;
      let c = tt.get(r);
      c || (c = sg({ onMove: (h) => it(o, h), onSet: (h) => {
        it(o, h), St("pos", o);
      } }), c.coverId = o, tt.set(r, c)), t.replaceWith(c.el), c.update(_(o));
    });
  }
  const Y = (e) => [...tt.values()].filter((t) => t.coverId === e), we = () => tt.forEach((e) => {
    M[e.coverId] && e.update(_(e.coverId));
  }), Me = () => {
    tt.forEach((e, t) => {
      e.el.isConnected || (e.destroy(), tt.delete(t));
    }), we();
  };
  function ge() {
    var h, p;
    if (!R || !(zd(R.id) || M[R.id])) {
      ze.hidden = !0;
      return;
    }
    if ([...ve.keys()].some((g) => g.endsWith("|" + R.id))) {
      we();
      return;
    }
    const e = Gd(R.id), t = ze.querySelector(".tfMore");
    if (!e) {
      Ge();
      return;
    }
    const o = Ns(ze), r = d(R.id), c = R.frame ? R.frame.wide : R.id.startsWith("summary:") || R.id.startsWith("group:");
    if (ze.hidden || !t || e.length !== po.length || t.classList.contains("wide") !== c) {
      const g = bt ? R.scroll || 0 : !ze.hidden && t ? t.scrollTop : 0;
      if (ze.innerHTML = '<div class="tfMorePair' + (ze.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (c ? " wide" : "") + '"' + (R.frame ? ' style="height:' + R.frame.h + 'px"' : "") + ' tabindex="-1">' + e.join("") + "</section></div>", m = r, ze.classList.toggle("wide", c), ze.hidden = !1, ld(), O(ze), Yt(ze), to(ze), ze.querySelectorAll("[data-day]").forEach((w) => Da(w.dataset.day, w, R.at)), rt(ze), g && (ze.querySelector(".tfMore").scrollTop = g), me(), vl(ze, o), !ze.contains(n.activeElement)) {
        const w = ze.querySelector("[data-more-close]");
        (h = w != null && w.offsetParent ? w : ze.querySelector(".tfMore")) == null || h.focus({ preventScroll: !0 });
      }
    } else {
      if (e.forEach((g, w) => {
        var L, N;
        if (g === po[w] || g.includes("data-cover-art") || t.children[w].contains((N = (L = n.activeElement) == null ? void 0 : L.matches) != null && N.call(L, "input,select") ? n.activeElement : null) || [...ve.keys()].some((ne) => t.children[w].querySelector('[data-drag="' + CSS.escape(ne) + '"]'))) return;
        const D = document.createElement("div");
        D.innerHTML = g;
        const P = Hs(t.children[w], D.firstElementChild);
        to(P), rt(P), Yt(P);
      }), r !== m) {
        const g = ze.querySelector(".tfMoreSideBody");
        g && (g.innerHTML = r), m = r;
      }
      t.querySelectorAll("[data-day]").forEach((g) => {
        g.innerHTML || Da(g.dataset.day, g, R.at);
      }), me(), ze.contains(n.activeElement) || vl(ze, o);
    }
    (p = ze.querySelector(".tfMorePair")) == null || p.classList.toggle("details", !!(R.details && r)), po = e, we();
  }
  function me() {
    const e = ze.querySelector("[data-more-pages]");
    !e || !R || (e.scrollTo({ left: (R.page || 0) * e.clientWidth, behavior: "instant" }), at(), Ie(e));
  }
  function Ie(e) {
    const t = e.children[(R == null ? void 0 : R.page) || 0];
    t && (e.style.height = t.scrollHeight + "px");
  }
  function at() {
    const e = (R == null ? void 0 : R.page) || 0;
    ze.querySelectorAll("[data-more-page]").forEach((t) => {
      const o = Number(t.dataset.morePage) === e;
      t.setAttribute("aria-selected", String(o)), t.tabIndex = o ? 0 : -1;
    });
  }
  function je(e, t) {
    var r, c;
    const o = ze.querySelector("[data-more-pages]");
    !o || !R || (R.page = Math.max(0, Math.min(1, e)), o.scrollTo({ left: R.page * o.clientWidth, behavior: (r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), at(), Ie(o), (c = ze.querySelector('[data-more-page="' + R.page + '"]')) == null || c.focus({ preventScroll: !0 }));
  }
  let He = 0;
  ze.addEventListener("scroll", (e) => {
    var o;
    const t = e.target;
    !((o = t.matches) != null && o.call(t, "[data-more-pages]")) || !R || (clearTimeout(He), He = setTimeout(() => {
      if (!R) return;
      const r = Math.round(t.scrollLeft / Math.max(1, t.clientWidth));
      r !== (R.page || 0) && (R.page = r, at(), Ie(t));
    }, 80));
  }, !0), setInterval(() => {
    R && ge();
  }, 15 * 1e3);
  function De(e, t) {
    var c, h;
    const o = !!(R && t && ze.contains(t)), r = o && ze.querySelector(".tfMore");
    if (o && (R.scroll = r.scrollTop), o && !R.under) {
      const p = ze.querySelector(".tfMorePair"), g = { more: R, parts: po, opener: t };
      p.classList.add("still"), p.style.transform = "", p.inert = !0, Jn.innerHTML = "", Jn.appendChild(p), Jn.classList.toggle("wide", ze.classList.contains("wide")), Jn.hidden = !1, ze.hidden = !0, ze.innerHTML = "", R = { id: e, opener: t, back: null, frame: null, under: g, at: Number((c = t == null ? void 0 : t.dataset) == null ? void 0 : c.at) || null }, xt();
      return;
    }
    R = { id: e, opener: o ? R.opener : t, back: o ? R : null, frame: o ? R.frame || { wide: r.classList.contains("wide"), h: r.offsetHeight } : null, under: o ? R.under : null, at: Number((h = t == null ? void 0 : t.dataset) == null ? void 0 : h.at) || null }, xt();
  }
  let bt = !1;
  function xt() {
    po = [], bt = !ze.hidden, tt.forEach((e, t) => {
      t !== R.id && ze.contains(e.el) && (e.destroy(), tt.delete(t));
    }), ge(), bt = !1;
  }
  function Ge() {
    if (!R) return;
    const e = R;
    $h(ze, () => {
      R === e && kt();
    });
  }
  function kt() {
    var r, c, h, p, g, w, D, P;
    const e = R == null ? void 0 : R.opener, t = R == null ? void 0 : R.under;
    R = null, tt.forEach((L, N) => {
      ze.contains(L.el) && (L.destroy(), tt.delete(N));
    }), sn.forEach((L, N) => {
      N.startsWith("more:") && sn.delete(N);
    }), ze.hidden = !0, ze.innerHTML = "";
    const o = { preventScroll: !0 };
    if (t) {
      const L = Jn.firstElementChild;
      R = t.more, po = t.parts, L && (L.inert = !1, ze.appendChild(L)), ze.classList.toggle("wide", Jn.classList.contains("wide")), Jn.hidden = !0, Jn.innerHTML = "", ze.hidden = !1;
      const N = ze.querySelector(".tfMore");
      N && (N.scrollTop = R.scroll || 0), ge(), (c = (r = t.opener) != null && r.isConnected ? t.opener : ze.querySelector("[data-more-close]")) == null || c.focus(o);
      return;
    }
    e != null && e.isConnected ? e.focus(o) : (h = e == null ? void 0 : e.dataset) != null && h.more ? (p = E.querySelector('[data-more="' + CSS.escape(e.dataset.more) + '"]')) == null || p.focus(o) : (g = e == null ? void 0 : e.dataset) != null && g.summary ? (w = E.querySelector('[data-summary="' + CSS.escape(e.dataset.summary) + '"]')) == null || w.focus(o) : (D = e == null ? void 0 : e.hasAttribute) != null && D.call(e, "data-favs-edit") && ((P = E.querySelector("[data-favs-edit]")) == null || P.focus(o));
  }
  const Ft = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function ut(e) {
    const t = String(wt(e).problem || ""), o = "sensor." + e.split(".")[1] + "_";
    return t === "none" ? [] : t.split(",").map((r) => r.trim().split(" ")).map(([r, c]) => {
      const h = Ft[r], p = o + h;
      if (!h || !M[p] || !qs[h]) return "";
      const g = wt(p).unit_of_measurement || "", [w, D] = qs[h], P = c === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + J(Pe(p)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + J(p) + '" data-guide="' + (P ? w : D) + '" data-guide-word="' + J("Wants " + (P ? "" : "up to ") + (P ? w : D).toLocaleString() + (g === "%" ? "%" : g ? " " + g : "") + (P ? " or more" : "")) + '" role="img" aria-label="' + J(Pe(p)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const rt = (e) => e.querySelectorAll("[data-plant-graph]").forEach((t) => fi(t.dataset.plantGraph, t, { guide: Number(t.dataset.guide), guideWord: t.dataset.guideWord }).then(() => er(t)));
  function ma(e, t, o, r = {}) {
    const c = t.map((se) => se[1]).concat(r.guide != null ? [r.guide] : []), h = r.zero ? 0 : Math.min(...c), p = Math.max(...c), g = Math.max(120, e.clientWidth || 260), w = Math.max(60, e.clientHeight || 130), D = 8, P = w - 20, L = Date.now() - 24 * 3600 * 1e3, N = 24 * 3600 * 1e3, ne = (se) => Math.max(0, Math.min(g, (se - L) / N * g)), X = (se) => p === h ? (D + P) / 2 : P - (se - h) / (p - h) * (P - D);
    let Z = "M" + ne(t[0][0]).toFixed(1) + " " + X(t[0][1]).toFixed(1);
    if (t.length > 2) Z = tf(t.map((se) => [ne(se[0]), X(se[1])]));
    else for (let se = 1; se < t.length; se++) Z += r.smooth ? "L" + ne(t[se][0]).toFixed(1) + " " + X(t[se][1]).toFixed(1) : "H" + ne(t[se][0]).toFixed(1) + "V" + X(t[se][1]).toFixed(1);
    e.setAttribute("viewBox", "0 0 " + g + " " + w), e.setAttribute("aria-label", o), e.innerHTML = af(g, D, P) + '<path d="' + Z + "V" + P + "H" + ne(t[0][0]).toFixed(1) + 'Z" fill="' + (r.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + Z + '" fill="none" stroke="' + (r.colour || "var(--primary)") + '" stroke-width="' + Sa.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (w - 4) + '">24 h ago</text><text x="' + g + '" y="' + (w - 4) + '" text-anchor="end">Now</text>' + (r.guide != null ? '<line class="tfGuide" x1="0" x2="' + g + '" y1="' + X(r.guide).toFixed(1) + '" y2="' + X(r.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + g + '" y="' + (X(r.guide) < 20 ? X(r.guide) + 14 : X(r.guide) - 5).toFixed(1) + '" text-anchor="end">' + J(r.guideWord || "") + "</text>" : "");
  }
  const Wa = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, aa = (e, t) => {
    const o = e.split(".")[0];
    return Wa[o] ? Wa[o].includes(t) : o === "alarm_control_panel" || o === "climate" || o === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(t) : t === "on";
  }, Bi = (e) => {
    const t = e.split(".")[0], o = wt(e).device_class;
    return t === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[o] || (uc.includes(o) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[t] || "On";
  }, Be = /* @__PURE__ */ new Map();
  let ft = 0;
  async function Ha(e) {
    let t = Be.get(e);
    if (!t || Date.now() - t.at > 60 * 1e3) {
      let c = [];
      try {
        const h = await W({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        c = ((h == null ? void 0 : h[e]) || []).map((p) => [p.lu != null ? p.lu * 1e3 : Date.parse(p.last_updated || p.last_changed), String(p.s ?? p.state)]).filter(([p]) => Number.isFinite(p));
      } catch {
      }
      c.length || (c = (Cs || []).filter((h) => h.entity_id === e).map((h) => [h.when * 1e3, String(h.state)])), t = { at: Date.now(), pts: c }, Be.set(e, t);
    }
    const o = M[e], r = t.pts.slice().sort((c, h) => c[0] - h[0]);
    return o && (!r.length || r[r.length - 1][1] !== o.state) && r.push([Date.parse(o.last_changed) || Date.now(), o.state]), r;
  }
  async function Da(e, t, o) {
    const r = await Ha(e);
    if (!t.isConnected) return;
    const c = r.map(([K, We]) => [K, Number(We)]);
    if (r.length > 1 && c.every(([, K]) => Number.isFinite(K))) {
      ma(t, c, Pe(e) + ", last 24 hours");
      return;
    }
    const h = Date.now(), p = h - 864e5, g = Math.max(200, t.clientWidth || 360), w = 62, D = (K) => Math.max(0, Math.min(g, (K - p) / 864e5 * g)), P = [];
    let L = null;
    r.forEach(([K, We]) => {
      const Bt = aa(e, We);
      Bt && L == null ? L = Math.max(K, p) : !Bt && L != null && (P.push([L, Math.max(K, p)]), L = null);
    }), L != null && P.push([L, h]);
    const N = Dr(e) ? "var(--danger)" : e.startsWith("light.") ? "#ffaa00" : "var(--primary)", ne = Bi(e), X = "tfDayClip" + ++ft, Z = P.map(([K, We]) => ne + (We >= h - 1e3 && K <= p + 1e3 ? " all day" : We >= h - 1e3 ? " since " + ua(K) : K <= p + 1e3 ? " until " + ua(We) : " " + ua(K) + "–" + ua(We)));
    let se = "", j = -1 / 0;
    P.forEach(([K], We) => {
      const Bt = Z[We].length * 5.4, st = Math.min(D(K), g - Bt);
      st < j + 8 || (se += '<text x="' + st.toFixed(1) + '" y="10">' + J(Z[We]) + "</text>", j = st + Bt);
    });
    let ye = '<text x="' + g + '" y="' + (w - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((K) => {
      let We = new Date(h).setHours(K, 0, 0, 0);
      We > h && (We -= 864e5), D(We) > 8 && D(We) < g - 34 && (ye += '<text x="' + D(We).toFixed(1) + '" y="' + (w - 2) + '" text-anchor="middle">' + String(K).padStart(2, "0") + "</text>");
    }), t.setAttribute("viewBox", "0 0 " + g + " " + w), t.setAttribute("aria-label", Pe(e) + ", last 24 hours: " + (Z.length ? Z.join(", ") : "no changes")), t.innerHTML = '<clipPath id="' + X + '"><rect x="0" y="18" width="' + g + '" height="26" rx="8"/></clipPath>' + se + '<rect x="0" y="18" width="' + g + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + X + ')">' + P.map(([K, We]) => '<rect x="' + D(K).toFixed(1) + '" y="18" width="' + Math.max(2, D(We) - D(K)).toFixed(1) + '" height="26" fill="' + N + '"/>').join("") + "</g>" + (o && o >= p ? '<line x1="' + D(o).toFixed(1) + '" x2="' + D(o).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + ye;
  }
  function xl(e) {
    var r;
    const t = Number((r = M[e]) == null ? void 0 : r.state), o = Date.now();
    if (wt(e).state_class === "total_increasing") {
      const c = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), h = Math.max(1, o - c);
      return [...Array(49)].map((p, g) => c + h * g / 48).map((p) => [p, Math.round(t * Math.pow((p - c) / h, 1.3) * 100) / 100]);
    }
    if (Hi(e) && e.endsWith("_moisture")) return [...Array(48)].map((c, h) => [o - (48 - h) * 30 * 60 * 1e3, Math.round((t + 22 * Math.pow(1 - h / 48, 1.2)) * 10) / 10]);
    if (Hi(e) && e.endsWith("_light")) {
      const c = (p) => {
        const g = new Date(p).getHours() + new Date(p).getMinutes() / 60;
        return Math.max(0, Math.sin((g - 6) / 14 * Math.PI));
      }, h = (p) => 0.8 + 0.2 * c(p);
      return [...Array(48)].map((p, g) => o - (48 - g) * 30 * 60 * 1e3).map((p) => [p, Math.round(t * h(p) / h(o))]);
    }
    return [...Array(48)].map((c, h) => [o - (48 - h) * 30 * 60 * 1e3, Math.round(t * (0.96 + 0.04 * Math.sin(h / 6)) * 10) / 10]);
  }
  async function fi(e, t, o = {}) {
    var X, Z;
    let r = de.get(e);
    if (e.endsWith("_solar_power")) r = { at: Date.now(), points: Ip() };
    else if (Hi(e)) r = { at: Date.now(), points: xl(e) };
    else if (!r || Date.now() - r.at > 5 * 60 * 1e3) {
      try {
        const se = new Date(Date.now() - 864e5).toISOString(), j = await W({ type: "history/history_during_period", start_time: se, entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), ye = ((j == null ? void 0 : j[e]) || []).map((K) => [K.lu != null ? K.lu * 1e3 : Date.parse(K.last_updated || K.last_changed), Number(K.s ?? K.state)]).filter(([K, We]) => Number.isFinite(K) && Number.isFinite(We));
        r = { at: Date.now(), points: ye };
      } catch {
        r = { at: Date.now(), points: [] };
      }
      de.set(e, r);
    }
    const c = t || E.querySelector('[data-graph="' + CSS.escape(e) + '"]');
    if (!c) return;
    const h = M[e], p = ((X = h == null ? void 0 : h.attributes) == null ? void 0 : X.unit_of_measurement) || "", g = r.points.slice(), w = Number(h == null ? void 0 : h.state);
    if (Number.isFinite(w) && !e.endsWith("_solar_power") && g.push([Date.now(), w]), g.length < 2) {
      c.setAttribute("aria-label", Pe(e) + ": no history for the last 24 hours"), c.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const D = g.map((se) => se[1]), P = Math.min(...D), L = Math.max(...D), N = (se) => se.toLocaleString(void 0, { maximumFractionDigits: Math.abs(se) >= 100 ? 0 : 1 }), ne = ((Z = h == null ? void 0 : h.attributes) == null ? void 0 : Z.state_class) === "total_increasing";
    ma(c, g, Pe(e) + ", last 24 hours: " + (ne ? "+" + N(D[D.length - 1] - D[0]) : P === L ? N(P) : N(P) + " to " + N(L)) + (p ? " " + p : ""), { smooth: e.endsWith("_solar_power"), zero: e.endsWith("_solar_power"), ...o });
  }
  function Is() {
    const e = E == null ? void 0 : E.querySelector("[data-solar]");
    if (!e) return;
    const t = Ip();
    ma(e, t, "Solar, last 24 hours: up to " + It(Math.max(...t.map((o) => o[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function yl(e, t) {
    const o = t.entity_id, r = $e.get(o) || {}, c = { open_cover: 100, close_cover: 0, set_cover_position: t.position, toggle: Yn(o) > 0 ? 0 : 100 }[e], h = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: t.tilt_position }[e];
    c != null && (r.pos = c), h != null && (r.tilt = h), e === "stop_cover" && (delete r.pos, delete r.tilt), e === "stop_cover_tilt" && delete r.tilt, r.at = Date.now(), $e.set(o, r);
  }
  function rs(e, t, o) {
    var c;
    const r = o == null ? void 0 : o.entity_id;
    return e !== "light" || typeof r != "string" || !jo[r] || !ja(r) || o.brightness_pct != null || o.brightness != null ? [t, o] : t !== "turn_on" && !(t === "toggle" && ((c = M[r]) == null ? void 0 : c.state) !== "on") ? [t, o] : ["turn_on", { ...o, brightness_pct: jo[r] }];
  }
  function uo(e, t, o, r) {
    let c = { entity_id: o, ...r || {} };
    return [t, c] = rs(e, t, c), e === "cover" && yl(t, c), Xe[o] = (Xe[o] || 0) + 1, Ii.set(Eu, JSON.stringify(Xe)), An.call(e, t, c) ? Promise.resolve() : Promise.resolve(F(e, t, c));
  }
  function Pi(e) {
    const [t, o, r, c] = e.split("|");
    uo(t, o, r, c ? JSON.parse(c) : null).catch(() => {
    });
  }
  function it(e, t) {
    ve.set("pos|" + e, t), wn.delete(e), po = po.map(() => ""), [E, ze].forEach((r) => r.querySelectorAll('[data-blocks="' + CSS.escape(e) + '"]').forEach((c) => _l(c, t)));
    const o = E.querySelector('.tfAction[data-k="' + CSS.escape(e) + '"] .tfName .activityRowMeta');
    if (o && (o.textContent = Math.round(t) + "%"), (R == null ? void 0 : R.id) === e) {
      const r = ze.querySelector(".tfMoreState"), c = ze.querySelector(".tfMoreSub");
      r && (r.textContent = Math.round(t) + "%", r.classList.add("live")), c && (c.textContent = "Currently " + Yn(e) + "%");
    }
    Y(e).forEach((r) => r.update(_(e)));
  }
  const qt = (e, t) => {
    const o = e.shiftKey ? 10 : 1, r = { ArrowUp: t + o, ArrowRight: t + o, ArrowDown: t - o, ArrowLeft: t - o, PageUp: t + 25, PageDown: t - 25, Home: 0, End: 100 }[e.key];
    return r == null ? null : Math.max(0, Math.min(100, Math.round(r)));
  };
  function na(e, t) {
    var Z;
    const o = e.dataset.blocks;
    (Z = e.setPointerCapture) == null || Z.call(e, t.pointerId);
    const r = (se) => {
      const j = e.getBoundingClientRect();
      return Math.max(0, Math.min(100, (se.clientX - j.left) / j.width * 100));
    }, c = r(t), h = t.clientX;
    let p = !1, g = gi(o), w = c, D = 0;
    const P = () => {
      g = Math.abs(w - g) < 0.2 ? w : g + (w - g) * 0.14, it(o, g), D = requestAnimationFrame(P);
    }, L = () => {
      p || (p = !0, e.classList.add("fine"), D = requestAnimationFrame(P));
    }, N = setTimeout(L, 350), ne = (se) => {
      w = r(se), Math.abs(se.clientX - h) > 6 && (clearTimeout(N), L());
    }, X = () => {
      clearTimeout(N), cancelAnimationFrame(D), e.removeEventListener("pointermove", ne), e.removeEventListener("pointerup", X), e.removeEventListener("pointercancel", X), e.classList.remove("fine"), it(o, p ? Math.round(g) : (Math.min(3, Math.floor(c / 25)) + 1) * 25), St("pos", o);
    };
    e.addEventListener("pointermove", ne), e.addEventListener("pointerup", X), e.addEventListener("pointercancel", X);
  }
  function _a(e) {
    var g, w;
    const [t, o] = e.dataset.open.split("|"), r = e.closest(".tfCard"), c = e.getBoundingClientRect(), h = (g = e.querySelector(".tfIcon")) == null ? void 0 : g.getBoundingClientRect();
    T = { key: t, id: o, h: r ? Math.round(r.getBoundingClientRect().height) : 0, from: c, chip: h }, wn.delete(t), Ma();
    const p = E.querySelector(".tfOpen");
    p && (T.rel = c.top - p.getBoundingClientRect().top), Yh(p, c, h), (w = E.querySelector(".tfOpen [data-close]")) == null || w.focus({ preventScroll: !0 });
  }
  function en(e) {
    var t;
    B = e.dataset.area, E.querySelectorAll(".tfAreaPanel").forEach((o) => {
      var c;
      const r = o === e;
      o.classList.toggle("active", r), o.setAttribute("aria-expanded", String(r)), (c = o.querySelector(".panelExpanded")) == null || c.toggleAttribute("inert", !r);
    }), wn.set("areas", Qe(((t = E.querySelector('[data-k="areas"]')) == null ? void 0 : t.style.order) || 1));
  }
  const vn = {
    bright: { value: (e, t) => Math.round(t * 100), text: (e, t) => t ? t + "%" : "Off", send: (e, t) => t > 0 ? ["light", "turn_on", { brightness_pct: t }] : ["light", "turn_off", {}] },
    ct: { value: (e, t) => {
      const [o, r] = ya(e);
      return Math.round(o + t * (r - o));
    }, text: (e, t) => t.toLocaleString() + "k", send: (e, t) => ["light", "turn_on", { color_temp_kelvin: t }] },
    hue: { value: (e, t) => Math.round(t * 360), text: () => "Colour", send: (e, t) => {
      var o;
      return ["light", "turn_on", { hs_color: [t, Math.max(60, ((o = wt(e).hs_color) == null ? void 0 : o[1]) || 100)] }];
    } },
    pos: { value: (e, t) => Math.round(t * 100), text: (e, t) => Math.round(t) + "%", send: (e, t) => ["cover", "set_cover_position", { position: Math.round(t) }] },
    tilt: { value: (e, t) => Math.round(t * 100), text: (e, t) => "Tilt " + t + "%", send: (e, t) => ["cover", "set_cover_tilt_position", { tilt_position: t }] },
    vol: { value: (e, t) => Math.round(t * 100) / 100, text: (e, t) => Math.round(t * 100) + "%", send: (e, t) => ["media_player", "volume_set", { volume_level: t }] }
  };
  function ct(e, t, o, r) {
    var w;
    const c = vn[t].value(o, r);
    ve.set(t + "|" + o, c);
    const h = Math.round(r * 100) + "%", p = e.querySelector("i");
    if (t === "tilt") {
      p.style.width = "calc((100% - 8px) * " + r + ")";
      const [D, P] = e.querySelectorAll("span");
      D.classList.toggle("lit", r > 0.08), P.classList.toggle("lit", r > 0.92), wn.delete(o), po = po.map(() => ""), Y(o).forEach((L) => L.update(_(o)));
    } else if (p) p.style.width = h;
    else {
      let D = e.querySelector("b");
      D || (D = document.createElement("b"), e.appendChild(D)), D.style.left = h;
    }
    e.setAttribute("aria-valuenow", String(Math.round(r * 100)));
    const g = (w = e.closest(".tfAction") || e.closest(".tfMore")) == null ? void 0 : w.querySelector(".tfName .activityRowMeta, .tfMoreState");
    g && (g.textContent = vn[t].text(o, c));
  }
  function St(e, t) {
    const o = ve.get(e + "|" + t), [r, c, h] = vn[e].send(t, o), p = () => setTimeout(() => {
      ve.delete(e + "|" + t), Ma();
    }, 1500);
    uo(r, c, t, h).then(p, p);
  }
  function Zt(e) {
    e.addEventListener("click", (t) => {
      var r;
      const o = t.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (fn && !t.target.closest(".tfBoardMenu,[data-board-more]") && Lo(), !(!o || !e.contains(o) || o.disabled))
        if (o.dataset.boardMore)
          (fn == null ? void 0 : fn.key) === o.dataset.boardMore ? Lo(!0) : Dc(o.dataset.boardMore, o);
        else if (o.dataset.boardAct) _c(fn.key, o.dataset.boardAct);
        else if (o.dataset.boardShow) zr(o.dataset.boardShow);
        else if (o.dataset.favHide) Di(o.dataset.favHide, !1);
        else if (o.dataset.energyPick) Fl(o.dataset.energyPick);
        else if (o.dataset.act) Pi(o.dataset.act);
        else if (o.hasAttribute("data-details")) S(!(R != null && R.details));
        else if (o.hasAttribute("data-details-close")) S(!1);
        else if (o.dataset.summary) vd(o.dataset.summary, o);
        else if (o.dataset.star) Ss(o.dataset.star);
        else if (o.hasAttribute("data-more-back")) {
          const c = R.id;
          R = R.back, xt(), (r = ze.querySelector('.tfMore [data-more="' + CSS.escape(c) + '"]')) == null || r.focus({ preventScroll: !0 });
        } else if (o.hasAttribute("data-favs-edit")) De("favourites", o);
        else if (o.dataset.acts) JSON.parse(o.dataset.acts).forEach(([c, h, p, g]) => uo(c, h, p, g).catch(() => {
        }));
        else if (o.dataset.more) De(o.dataset.more, o);
        else if (o.hasAttribute("data-more-close")) Ge();
        else if (o.dataset.morePage) je(Number(o.dataset.morePage));
        else if (o.dataset.path) Bl(o.dataset.path);
        else if (o.dataset.go) ci("room:" + o.dataset.go);
        else if (o.hasAttribute("data-area-back")) ui();
        else if (o.dataset.open) _a(o);
        else if (o.hasAttribute("data-close")) {
          const c = T, h = o.closest(".tfOpen"), p = h == null ? void 0 : h.getBoundingClientRect().top, g = c.from && p != null ? new DOMRect(c.from.left, p + (c.rel || 0), c.from.width, c.from.height) : c.from;
          Zh(h, g, () => {
            var w;
            T === c && (T = null, wn.delete(c.key), Ma(), (w = E.querySelector('[data-open="' + CSS.escape(c.key + "|" + c.id) + '"]')) == null || w.focus({ preventScroll: !0 }));
          });
        } else o.classList.contains("tfAreaPanel") && !o.classList.contains("active") && en(o);
    }), e.addEventListener("keydown", (t) => {
      var r, c, h, p, g, w, D;
      const o = t.target;
      if ((r = o.dataset) != null && r.open && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), _a(o)), (c = o.dataset) != null && c.energyPick && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), Fl(o.dataset.energyPick)), (h = o.classList) != null && h.contains("tfAreaPanel") && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), en(o)), (p = o.dataset) != null && p.summary && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), vd(o.dataset.summary, o)), t.key === "Escape" && fn && e === E) {
        t.preventDefault(), Lo(!0);
        return;
      }
      if (t.key === "Escape" && un && e === E) {
        t.preventDefault(), ol(!1), (g = u("dashEditNav")) == null || g.focus();
        return;
      }
      if (t.key === "Escape" && q && e === E && (t.preventDefault(), ui()), (w = o.dataset) != null && w.blocks) {
        const P = o.dataset.blocks, L = qt(t, Math.round(gi(P)));
        if (L == null) return;
        t.preventDefault(), it(P, L), clearTimeout(Ya.get(P)), Ya.set(P, setTimeout(() => St("pos", P), 500));
        return;
      }
      if ((D = o.dataset) != null && D.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(t.key)) {
        t.preventDefault();
        const [P, L] = o.dataset.drag.split("|"), N = Number(o.getAttribute("aria-valuenow")) / 100, ne = t.key === "Home" ? 0 : t.key === "End" ? 1 : Math.max(0, Math.min(1, N + (t.key === "ArrowLeft" || t.key === "ArrowDown" ? -0.05 : 0.05)));
        ct(o, P, L, ne), St(P, L);
      }
    }), e.addEventListener("pointerdown", (t) => {
      var Bt;
      const o = t.target.closest("[data-blocks]");
      if (o && t.button === 0) {
        t.preventDefault(), na(o, t);
        return;
      }
      const r = t.target.closest("[data-drag]");
      if (!r || t.button > 0) return;
      const [c, h] = r.dataset.drag.split("|"), p = c === "bright" && !ja(h), g = t.pointerType !== "mouse";
      if (p && !g) {
        Pi(Lt("light", "toggle", h));
        return;
      }
      const w = c === "bright" && ((Bt = M[h]) == null ? void 0 : Bt.state) !== "on", D = c === "tilt" ? 4 : 0, P = () => r.getBoundingClientRect().width - D * 2, L = (st) => {
        const Wt = r.getBoundingClientRect();
        return Math.max(0, Math.min(1, (st.clientX - Wt.left - D) / P()));
      };
      let N = g ? "waiting" : w ? "pressed" : "dragging", ne = 0;
      const X = t.clientX, Z = t.clientY, se = (st, Wt) => Math.hypot(st.clientX - X, st.clientY - Z) > Wt, j = () => {
        try {
          r.setPointerCapture(t.pointerId);
        } catch {
        }
      };
      g || (t.preventDefault(), j()), N === "dragging" && ct(r, c, h, L(t));
      const ye = () => {
        var st, Wt;
        N = "sliding", Te = r, r.classList.add("held"), j(), (st = navigator.userActivation) != null && st.hasBeenActive && ((Wt = navigator.vibrate) == null || Wt.call(navigator, 8)), ne = w ? (jo[h] ?? 100) / 100 : Number(r.getAttribute("aria-valuenow")) / 100;
      }, K = (st) => {
        N === "waiting" && se(st, Se) ? !p && Math.abs(st.clientX - X) > Math.abs(st.clientY - Z) ? ye() : N = "gone" : N === "pressed" && se(st, 4) && (N = "dragging"), N === "sliding" ? ct(r, c, h, Math.max(0, Math.min(1, ne + (st.clientX - X) / P()))) : N === "dragging" && ct(r, c, h, L(st));
      }, We = (st) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Wt, Va) => r.removeEventListener(Wt, Va ? We : K)), r.classList.remove("held"), Te === r && (Te = null), N === "sliding" || N === "dragging" ? St(c, h) : st.type === "pointerup" && p ? Pi(Lt("light", "toggle", h)) : st.type === "pointerup" && w && (N === "waiting" || N === "pressed") && uo("light", "turn_on", h).catch(() => {
        });
      };
      r.addEventListener("pointermove", K), r.addEventListener("pointerup", We), r.addEventListener("pointercancel", We);
    }), e.addEventListener("touchmove", (t) => {
      Te && t.cancelable && t.preventDefault();
    }, { passive: !1 });
  }
  return E && k && (pn(), Zt(E), Zt(ze), ze.addEventListener("click", (e) => {
    e.target === ze && Ge();
  }), (tn = n.getElementById("homeNav")) == null || tn.addEventListener("click", () => {
    q && ui();
  }), (Kd = n.querySelector(".bottomNav")) == null || Kd.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + pc + "</button>"), ($d = u("dashEditNav")) == null || $d.addEventListener("click", () => A ? hn(!ii) : ol(!un)), E.addEventListener("pointerdown", ml), E.addEventListener("pointerdown", Vr), E.addEventListener("click", (e) => {
    A && ii && e.target.closest(".tfBoardItem") && (e.preventDefault(), e.stopPropagation());
  }, !0), E.addEventListener("scroll", (e) => {
    var t;
    (t = e.target.classList) != null && t.contains("hcFadeList") && Dd(e.target);
  }, !0), new ResizeObserver(() => {
    v.classList.contains("tfDash") && $s() !== Si ? Ma() : jr();
  }).observe(E), window.addEventListener("resize", jr, { passive: !0 }), ze.addEventListener("keydown", (e) => {
    var t, o;
    e.key === "Escape" ? (e.stopPropagation(), R != null && R.details ? S(!1) : Ge()) : (e.key === "ArrowLeft" || e.key === "ArrowRight") && ((o = (t = e.target).closest) != null && o.call(t, ".tfMoreDots")) && (e.preventDefault(), je(((R == null ? void 0 : R.page) || 0) + (e.key === "ArrowRight" ? 1 : -1)));
  })), ae(), {
    update(e) {
      if (!k) return;
      const t = !Object.keys(M).length;
      M = { ...Object.fromEntries(Object.entries(M).filter(([r]) => Hi(r))), ...e || {} };
      for (const r in M) r.startsWith("light.") && M[r].state === "on" && ja(r) && Ta(r, En(M[r]));
      t ? Ro() : Ma();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      Ho = !0, Kt == null || Kt.destroy(), Kt = null, wa == null || wa.forEach((e) => e.destroy()), wa = null;
    },
    resume() {
      Ho = !1, !(!k || !(E != null && E.querySelector("[data-tf]"))) && (vt.isConnected && gs(vt.style.order), dt());
    }
  };
}
const Bg = "0.87.0", mp = "move_assistant", Pg = "move_assistant", Iu = "move_assistant_checkin_reminder";
function Ng() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class Hg extends HTMLElement {
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
    var u;
    const i = !this._hass;
    if (this._hass = l, i) {
      this._init();
      return;
    }
    this._app && l.states !== this._lastStates && (this._lastStates = l.states, this._app.updateStates(l.states), (u = this._test) == null || u.update(l.states));
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
    Ng();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${_f}${Rf}${Bf}${Pf}</style>${Nf}`;
    const i = l.getElementById("app");
    i.style.opacity = "0";
    let u = null;
    try {
      const v = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: mp
      });
      u = (v == null ? void 0 : v.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(u), this._app = th(l, {
      data: u,
      save: (v) => this._save(v),
      fire: (v, x) => this._fire(v, x),
      ws: (v) => this._hass.callWS(v),
      subscribe: (v, x) => {
        var k, A;
        return (A = (k = this._hass) == null ? void 0 : k.connection) != null && A.subscribeMessage ? this._hass.connection.subscribeMessage(x, v) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var v, x;
        return Object.keys(((x = (v = this._hass) == null ? void 0 : v.services) == null ? void 0 : x.notify) || {}).sort();
      },
      setReminderAutomation: (v) => this._setReminderAutomation(v),
      setLight: (v) => this.classList.toggle("lightBody", v),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Rg(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), Gh(l, i), Kh(l), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const l = (i = this._hass) == null ? void 0 : i.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (u) => {
        var x;
        const v = JSON.stringify((u == null ? void 0 : u.value) ?? null);
        v === this._lastSaved || v === this._pendingJson || (this._lastSaved = v, (x = this._app) == null || x.applyRemoteData(u.value));
      },
      { type: "frontend/subscribe_user_data", key: mp }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: mp,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(l, i = {}) {
    var u, v;
    ((u = this._config) == null ? void 0 : u.events) !== !1 && ((v = this._hass) == null || v.callWS({
      type: "fire_event",
      event_type: Pg,
      event_data: { action: l, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const i = `config/automation/config/${Iu}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (x) {
        if ((x == null ? void 0 : x.status_code) !== 404 && (x == null ? void 0 : x.status) !== 404) throw x;
      }
      return;
    }
    const u = (x) => `${x}:00`, v = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: Iu,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: u(l.times.morning), id: "morning" },
        { trigger: "time", at: u(l.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${l.target}`,
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
    var u;
    const i = (u = this.shadowRoot) == null ? void 0 : u.getElementById("toast");
    i && (i.textContent = l, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Hg), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Bg} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
