const Eu = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Du = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--muted)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDac{grid-column:span 2;min-width:0}.tfDac>dual-controller-v3{display:block}.tfMoreActions .tfDac{grid-column:auto}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}', Ru = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:clamp(8px,calc(5.6cqw * var(--wb-k,1)),14px);aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:clamp(12px,calc(7.9cqw * var(--wb-k,1)),20px);border-radius:clamp(22px,calc(11.1cqw * var(--wb-k,1)),28px);overflow:hidden}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbHead{gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px)}.wbSquare .wbChip{width:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);height:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);border-radius:clamp(12px,calc(6.3cqw * var(--wb-k,1)),16px);--wb-icon:clamp(18px,calc(9.5cqw * var(--wb-k,1)),24px)}.wbSquare .wbName{font-size:clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px);line-height:1.4}.wbSquare .wbSub{font-size:clamp(13px,calc(6.3cqw * var(--wb-k,1)),16px)}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:clamp(6px,calc(4cqw * var(--wb-k,1)),10px)}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbSummary{display:none}.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}@container wb-card (width < 220px){.wbMoonCaption{display:none}}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}`, Nu = `<main id="app"><div class="shell">
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
}, na = (a) => a < 0 ? 0 : a > 1 ? 1 : a, Jc = (a, l, o) => a + (l - a) * o, Lc = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((d) => d + d).join("") : l;
  return [0, 2, 4].map((d) => parseInt(o.slice(d, d + 2), 16) || 0);
}, Bu = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Qc = {}, en = (a, l, o) => {
  const d = a + l + o;
  return Qc[d] || (Qc[d] = Bu(Lc(a).map((f, g) => f + (Lc(l)[g] - f) * o)));
}, ed = {}, El = (a) => ed[a] || (ed[a] = Lc(a)), lc = (a, l, o, d) => (f) => {
  if (f <= 0) return 0;
  if (f >= 1) return 1;
  let g = 0, w = 1, _ = f;
  for (let y = 0; y < 18; y++)
    _ = (g + w) / 2, 3 * (1 - _) * (1 - _) * _ * a + 3 * (1 - _) * _ * _ * o + _ * _ * _ < f ? g = _ : w = _;
  return 3 * (1 - _) * (1 - _) * _ * l + 3 * (1 - _) * _ * _ * d + _ * _ * _;
}, Pu = { std: lc(0.2, 0, 0, 1), acc: lc(0.3, 0, 1, 1), dec: lc(0, 0, 0, 1) };
function Hl(a, l) {
  const o = String(a || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || l ? "night" : "day");
}
function Kd(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [en(l.clear[0], l.cloudy[0], 0.12), en(l.clear[1], l.cloudy[1], 0.12)], l.storm = [en(l.rain[0], "#000000", 0.22), en(l.rain[1], "#000000", 0.22)], l;
}
const Ac = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], _c = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Ec = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Dc(a, l = aa) {
  const o = { ...aa, ...l }, d = Kd(o), f = String(a).split("/"), g = d[f[0]] ? f[0] : "clear", w = f[1] === "night", _ = d[g][w ? 1 : 0], y = {
    night: w,
    clearness: g === "clear" ? 1 : g === "partly" ? 0.7 : 0.25,
    sky: _,
    skyStops: [_],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Ac.map(() => ({ o: 0 })),
    rain: _c.map(() => ({ o: 0, dy: -16 })),
    snow: Ec.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, R = (me) => Ac.map(() => ({ o: me }));
  return g === "clear" ? w ? (y.moon.o = 1, y.stars = R(1)) : y.sun.o = 1 : g === "partly" ? (y.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (y.moon = { x: 34, y: 33, d: 48, o: 1 }, y.stars = R(0.7)) : y.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : g === "cloudy" || g === "fog" ? (y.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? y.moon = { x: 40, y: 36, d: 40, o: 0 } : y.sun = { x: 40, y: 36, r: 20, o: 0 }) : (y.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? y.moon = { x: 38, y: 28, d: 36, o: 0 } : y.sun = { x: 38, y: 28, r: 18, o: 0 }, g === "snow" ? y.snow = Ec.map(() => ({ o: 1, dy: 0 })) : y.rain = _c.map((me, ae) => ({ o: g === "storm" && ae === 1 ? 0 : 1, dy: 0 })), g === "storm" && (y.bolt = { o: 1, dy: 0 })), y;
}
const td = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Iu(a, l, o, d = aa, f = !1) {
  const g = { ...aa, ...d }, w = (U, Y) => U > 0.01 && Y > 0.01 ? "stay" : U > 0.01 ? "leave" : Y > 0.01 ? "enter" : "none", _ = (U, Y, ee, Z) => {
    const V = U[0] + Y * Z, q = U[1] - (ee - 1 - Y) * Z;
    return Pu[U[2]](na((o - V) / Math.max(1e-3, q - V)));
  }, y = (U, Y, ee, Z = 0, V = 1, q = 0) => {
    const ce = w(U.o, Y.o);
    if (ce === "none") return { ...Y, o: 0 };
    const Q = _(td[ee][ce], Z, V, q), fe = {};
    for (const X in Y) fe[X] = f && ce !== "stay" && X !== "o" ? ce === "leave" ? U[X] : Y[X] : Jc(U[X], Y[X], Q);
    return fe;
  }, R = _(td.sky, 0, 1, 0);
  let me, ae;
  if (a.night !== l.night) {
    const U = Math.min(a.clearness, l.clearness), Y = en(en(a.sky, l.sky, 0.5), g.dusk, 0.6 * U);
    me = R < 0.5 ? en(a.sky, Y, R * 2) : en(Y, l.sky, R * 2 - 1), ae = U > 0.5 ? [a.sky, g.dusk, l.sky] : [a.sky, l.sky];
  } else
    me = en(a.sky, l.sky, R), ae = [a.sky, l.sky];
  return {
    night: o < 0.5 ? a.night : l.night,
    clearness: Jc(a.clearness, l.clearness, o),
    sky: me,
    skyStops: ae,
    skyT: R,
    sun: y(a.sun, l.sun, "body"),
    moon: y(a.moon, l.moon, "body"),
    cloud: y(a.cloud, l.cloud, "cloud"),
    stars: l.stars.map((U, Y) => y(a.stars[Y], U, "fx", Y, l.stars.length, 0.05)),
    rain: l.rain.map((U, Y) => y(a.rain[Y], U, "fx", Y, l.rain.length, 0.05)),
    snow: l.snow.map((U, Y) => y(a.snow[Y], U, "fx", Y, l.snow.length, 0.05)),
    bolt: y(a.bolt, l.bolt, "fx")
  };
}
const Hu = [
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
], ta = (a, l) => (Hu[(l & 7) * 8 + (a & 7)] + 0.5) / 64, Fu = 0, Bc = 1, Pc = 2, Ic = 3, Hc = 4, ea = 5, Fr = 6, Li = 7, Fc = 8, Nl = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), Ou = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], qu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((a) => [a[0] * 13 / 11, a[1] * 28 / 24]), $d = (a, l, o) => {
  let d = !1;
  for (let f = 0, g = a.length - 1; f < a.length; g = f++) {
    const w = a[f], _ = a[g];
    w[1] > o != _[1] > o && l < (_[0] - w[0]) * (o - w[1]) / (_[1] - w[1]) + w[0] && (d = !d);
  }
  return d;
};
function Xd(a, { size: l = 90, px: o = 2, oneBit: d = !1, colors: f = aa, ink: g = "#26221e", paper: w = "#fbf9f6", clock: _ = 0, idle: y = !1 } = {}) {
  const R = { ...aa, ...f }, me = Math.sin, ae = Math.PI * 2, U = Math.max(6, Math.round(l / o)), Y = U / 90, ee = y ? Math.floor(_ / 100) * 100 : 0, Z = y ? me(ae * ee / 3600) : 0, V = y ? 1.8 * me(ae * ee / 6400) : 0, q = y ? 0.9 * me(ae * ee / 4100) : 0, ce = y ? 0.8 * me(ae * ee / 5200) : 0, Q = ee / 3400 % 1, fe = y && a.bolt.o > 0.5 && (Q < 0.04 || Q > 0.08 && Q < 0.11), X = new Array(U * U), S = new Uint8Array(U * U), B = (k, A, C, H, de) => {
    C == null || k < 0 || A < 0 || k >= U || A >= U || (H >= 1 || H > ta(k + 5, A + 3)) && (X[A * U + k] = C, S[A * U + k] = de);
  }, be = (k, A, C, H) => {
    for (let de = Math.max(0, Math.floor(A - C) - 1); de <= Math.min(U - 1, A + C + 1); de++) for (let j = Math.max(0, Math.floor(k - C) - 1); j <= Math.min(U - 1, k + C + 1); j++) H(j, de, j + 0.5 - k, de + 0.5 - A);
  }, Ce = a.skyStops || [a.sky], O = a.skyT || 0;
  for (let k = 0; k < U; k++) {
    const A = a.night ? na(1 - (k + 0.5) / (U * 0.7)) * 0.85 : na(((k + 0.5) / U - 0.35) / 0.65) * 0.85;
    for (let C = 0; C < U; C++) {
      let H = Ce[0];
      if (Ce.length > 1) {
        const de = O * (Ce.length - 1), j = Math.min(Ce.length - 2, Math.floor(de));
        H = de - j > ta(C, k) ? Ce[j + 1] : Ce[j];
      }
      A > ta(C + 2, k + 5) && (H = a.night ? en(H, "#000000", 0.28) : en(H, "#ffffff", 0.2)), X[k * U + C] = fe ? en(H, "#ffffff", 0.25) : H;
    }
  }
  if (a.sun.o > 0.01) {
    const k = a.sun.x * Y, A = a.sun.y * Y, C = Math.max(1, a.sun.r * Y);
    if (y) {
      const H = C * (1.45 + 0.06 * Z), de = en(R.sun, "#ffffff", 0.55);
      if (be(k, A, H, (j, se, he, ve) => {
        const Ze = Math.sqrt(he * he + ve * ve);
        Ze > C && Ze < H && B(j, se, de, 0.26 * (1 - (Ze - C) / (H - C)) * a.sun.o, Fu);
      }), a.sun.o > 0.5) {
        const j = Math.floor(ee / 500) % 2, se = Math.max(1, C * 0.22);
        for (let he = 0; he < 8; he++) if (he % 2 === j) for (let ve = C + 1.5; ve < C + 1.5 + se; ve += 0.7) B(Math.floor(k + Math.cos(he * Math.PI / 4) * ve), Math.floor(A + Math.sin(he * Math.PI / 4) * ve), R.sun, a.sun.o, Fc);
      }
    }
    be(k, A, C, (H, de, j, se) => {
      if (j * j + se * se > C * C) return;
      const he = ((j * 0.643 + se * 0.766) / C + 1) / 2;
      B(H, de, na((he - 0.62) / 0.38) > ta(H, de) ? R.sunEdge : R.sun, a.sun.o, Bc);
    });
  }
  if (Ac.forEach((k, A) => {
    const C = a.stars[A].o;
    if (C < 0.01) return;
    const H = Math.floor(k[0] * Y), de = Math.floor(k[1] * Y), j = y ? (Math.floor(ee / 300) + A * 3) % 6 : 0;
    if (j === 5) return;
    const se = Math.round(k[2] * Y * (j === 4 ? 0.3 : j < 2 ? 1 : 0.6));
    B(H, de, R.star, C, Li);
    for (let he = 1; he <= se; he++) {
      const ve = he === se && se > 1 ? en(R.star, a.sky, 0.5) : R.star;
      B(H - he, de, ve, C, Li), B(H + he, de, ve, C, Li), B(H, de - he, ve, C, Li), B(H, de + he, ve, C, Li);
    }
  }), a.moon.o > 0.01) {
    const k = Math.max(1.5, a.moon.d * Y * 0.37), A = a.moon.x * Y, C = a.moon.y * Y + (y && ce > 0.4 ? -1 : 0), H = A + 0.547 * k, de = C - 0.503 * k, j = 0.82 * k, se = en(R.moon, "#ffffff", 0.6);
    be(A, C, k, (he, ve, Ze, lt) => {
      if (Ze * Ze + lt * lt > k * k) return;
      const Et = he + 0.5 - H, gn = ve + 0.5 - de;
      Et * Et + gn * gn <= j * j || B(he, ve, na((lt + k) / (2 * k) * 1.1 - 0.1) > ta(he, ve) ? R.moon : se, a.moon.o, Pc);
    });
  }
  const De = Math.max(2, Math.round(15.65 * Y)), z = Math.max(1, Math.round(5.87 * Y * 0.5));
  _c.forEach((k, A) => {
    const C = a.rain[A];
    let H = C.dy, de = C.o;
    if (de < 0.01) return;
    if (y) {
      const he = (ee / 950 + A / 3) % 1;
      H += -5 + he * 14, de *= he < 0.18 ? he / 0.18 : he > 0.72 ? (1 - he) / 0.28 : 1;
    }
    const j = (k[0] + 3 + V) * Y, se = (k[1] + H) * Y;
    for (let he = 0; he < De; he++) for (let ve = 0; ve < z; ve++) B(Math.floor(j - 0.208 * he) + ve, Math.floor(se) + he, R.rain, de, Hc);
  });
  const Pe = Math.max(0, Math.round(7.34 * Y / 2.6));
  if (Ec.forEach((k, A) => {
    const C = a.snow[A];
    let H = C.dy, de = 0, j = C.o;
    if (j < 0.01) return;
    if (y) {
      const ve = (ee / 3200 + A / 5) % 1;
      H += -6 + ve * 14, de = 1.5 * me(ae * (ve * 1.5 + A / 5)), j *= ve < 0.2 ? ve / 0.2 : ve > 0.75 ? (1 - ve) / 0.25 : 1;
    }
    const se = Math.floor((k[0] + 3.67 + de + V) * Y), he = Math.floor((k[1] + 3.67 + H) * Y);
    B(se, he, R.snow, j, ea);
    for (let ve = 1; ve <= Pe; ve++)
      B(se - ve, he, R.snow, j, ea), B(se + ve, he, R.snow, j, ea), B(se, he - ve, R.snow, j, ea), B(se, he + ve, R.snow, j, ea), Pe > 1 && ve < Pe && (B(se - ve, he - ve, R.snow, j, ea), B(se + ve, he - ve, R.snow, j, ea), B(se - ve, he + ve, R.snow, j, ea), B(se + ve, he + ve, R.snow, j, ea));
  }), a.bolt.o > 0.01)
    if (U >= 30) {
      const k = 39 + V, A = 50 + a.bolt.dy;
      for (let C = Math.floor(A * Y); C <= (A + 28) * Y; C++) for (let H = Math.floor(k * Y); H <= (k + 13) * Y; H++)
        $d(qu, (H + 0.5) / Y - k, (C + 0.5) / Y - A) && B(H, C, R.sun, a.bolt.o, Fr);
    } else {
      const k = U / 18, A = 7, C = 10 + Math.round(a.bolt.dy * 0.2);
      Ou.forEach((H, de) => H.split("").forEach((j, se) => {
        if (j !== "#") return;
        const he = Math.floor((A + se) * k), ve = Math.floor((C + de) * k);
        for (let Ze = ve; Ze < Math.max(ve + 1, Math.floor((C + de + 1) * k)); Ze++) for (let lt = he; lt < Math.max(he + 1, Math.floor((A + se + 1) * k)); lt++) B(lt, Ze, R.sun, a.bolt.o, Fr);
      }));
    }
  if (a.cloud.o > 0.01) {
    const k = Math.max(3, a.cloud.w * Y), A = k * 0.6665, C = (a.cloud.x + V) * Y - k / 2, H = (a.cloud.y + q) * Y - A / 2, de = en(R.cloudDay, R.cloudNight, Math.round(a.cloud.f * 4) / 4), j = en(de, "#000000", 0.16);
    for (let se = Math.max(0, Math.floor(H) - 1); se <= Math.min(U - 1, H + A + 1); se++) for (let he = Math.max(0, Math.floor(C) - 1); he <= Math.min(U - 1, C + k + 1); he++) {
      const ve = (he + 0.5 - C) / k, Ze = (se + 0.5 - H) / k;
      Nl(ve, Ze) && B(he, se, !Nl(ve, Ze + 1 / k) || na((Ze - 0.42) / 0.25) * 0.8 > ta(he, se) ? j : de, a.cloud.o, Ic);
    }
  }
  return Jd(X, S, U, U, { oneBit: d, ink: g, paper: w, snowInk: !a.night });
}
function Jd(a, l, o, d, { oneBit: f, ink: g, paper: w, snowInk: _ }) {
  const y = new Uint8ClampedArray(o * d * 4), R = El(g), me = El(w);
  for (let ae = 0; ae < d; ae++) for (let U = 0; U < o; U++) {
    const Y = ae * o + U, ee = l[Y];
    if (a[Y] == null) continue;
    let Z = El(a[Y]);
    if (f) {
      let V;
      ee === Hc || ee === Fc ? V = !0 : ee === ea ? V = _ : ee === Li || ee === Fr ? V = !1 : V = Math.round((0.2126 * Z[0] + 0.7152 * Z[1] + 0.0722 * Z[2]) / 255 * 4) / 4 <= ta(U, ae), (ee === Bc || ee === Pc || ee === Ic || ee === Fr) && (U > 0 && l[Y - 1] !== ee || U < o - 1 && l[Y + 1] !== ee || ae > 0 && l[Y - o] !== ee || ae < d - 1 && l[Y + o] !== ee) && (V = !0), Z = V ? R : me;
    }
    y[Y * 4] = Z[0], y[Y * 4 + 1] = Z[1], y[Y * 4 + 2] = Z[2], y[Y * 4 + 3] = 255;
  }
  return { w: o, h: d, data: y };
}
const Wu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, ju = (a) => Hl(a, !1).split("/")[0], cc = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, zu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Vu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Gu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Uu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Yu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Zu = [".##", "##.", ".#.", "#.."];
function Qd(a, { width: l, height: o, colors: d, wave: f = 0.38, soft: g = 6, glow: w = 0.6 }) {
  const _ = { ...aa, dawn: "#e5a77e", ...d }, y = Kd(_), R = l, me = o, ae = R / 6, U = ae / 2, Y = Math.PI * 2, ee = a.length ? a : [{ cond: "cloudy", night: !1 }], Z = [...Array(12)].map((Q, fe) => {
    const X = ee[Math.min(fe, ee.length - 1)], S = ju(X.cond), B = fe % 2 === 1;
    return { cond: X.cond, k: S, night: B, sky: y[S][B ? 1 : 0], cover: Wu[S] };
  }), V = (Q) => me * (0.5 - f * Math.cos(Y * (Q / ae - 0.25)));
  return { C: _, S: Z, W: R, H: me, cw: ae, sw: U, TAU: Y, yb: V, side: (Q, fe, X) => {
    const S = (Q ? V(fe) - X : X - V(fe)) / Math.max(3, g * 1.4) + 0.5;
    return S <= 0 ? 0 : S >= 1 ? 1 : S;
  }, glowAt: (Q) => {
    const fe = ((Q / ae - 0.25) % 1 + 1) % 1, X = Math.max(0, Math.min(5, Math.round(Q / ae - 0.25))), S = Math.max(0, Math.min(5, Math.round(Q / ae - 0.75))), B = 1 - (Z[2 * X].cover + Z[2 * S + 1].cover) / 2, be = Math.sin(Math.PI * Math.min(1, Math.max(0, V(Q) / me)));
    return { c: fe < 0.5 ? _.dusk : _.dawn, a: w * (0.2 + 0.8 * B) * be * be };
  }, soft: g, tw: ae * 0.3, sy: me / 90 };
}
function eu(a, { clock: l = 0, ambient: o = !1, seed: d = 1 }) {
  const { S: f, sw: g, side: w, C: _, TAU: y, sy: R } = a, me = l, ae = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return f.forEach((U, Y) => {
    const ee = cc(d * 977 + Y * 131 + 7), Z = (Y + 0.5) * g, V = U.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[U.k] : 0;
    for (let q = 0; q < V; q++) {
      const ce = Z + (ee() - 0.5) * g * 1.6, Q = (6 + ee() * 76) * R, fe = ee() < 0.35, X = 1.8 + ee() * 1.6, S = w(!0, ce, Q) * (fe ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(y * me / 2600 + q * 1.7 + Y) : 1);
      S >= 0.03 && ae.stars.push({ x: ce, y: Q, big: fe, size: X, o: S });
    }
    if (!U.night && (U.k === "clear" || U.k === "partly")) {
      const q = Z + (ee() - 0.5) * g * 0.3, ce = Math.min(15, g * 0.29);
      ae.suns.push({ x: q, y: 32 * R, rad: ce, halo: ce * 2.8 * (o ? 1 + 0.07 * Math.sin(y * me / 3600 + Y) : 1) });
    }
    if (U.night && (U.k === "clear" || U.k === "partly")) {
      const q = Math.min(0.78, g * 0.55 / 34), ce = Z - 23 * q + (ee() - 0.5) * g * 0.2;
      ae.moons.push({ x: ce + 23 * q, y: (4 + (o ? 0.8 * Math.sin(y * me / 5200 + Y) : 0)) * R + 23 * q, d: 46 * q });
    }
  }), f.forEach((U, Y) => {
    const ee = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[U.k];
    if (!ee) return;
    const Z = cc(d * 577 + Y * 71 + 3), V = (Y + 0.5) * g, q = U.k === "rain" || U.k === "storm" || U.night ? _.cloudNight : _.cloudDay, ce = U.night ? 0.82 : U.k === "storm" ? 0.75 : 1;
    for (let Q = 0; Q < ee; Q++) {
      const fe = g / 46 * (U.k === "partly" ? 0.85 : 0.75 + Z() * 0.55), X = V + (U.k === "partly" ? g * 0.12 : (Z() - 0.5) * g * 1.05), S = (U.k === "partly" ? 40 : 6 + Z() * 26) * R, B = o ? 2.5 * Math.sin(y * me / 9e3 + Y * 1.3 + Q * 2.1) : 0, be = o ? 0.9 * Math.sin(y * me / 6100 + Y + Q) : 0;
      ae.clouds.push({ x: X - 23 * fe + B, y: S - 15.33 * fe + be, w: 46 * fe, h: 30.66 * fe, fill: q, o: ce * (ee > 1 && Q === 0 ? 0.85 : 1) });
    }
  }), f.forEach((U, Y) => {
    const ee = cc(d * 313 + Y * 29 + 11), Z = (Y + 0.5) * g, V = U.cond === "pouring" ? 16 : U.cond === "rainy" || U.cond === "hail" ? 9 : U.cond === "lightning-rainy" ? 12 : U.cond === "snowy-rainy" ? 5 : 0;
    for (let ce = 0; ce < V; ce++) {
      let Q = Z + (ee() - 0.5) * g * 1.05, fe = 44 + ee() * 36, X = 1;
      if (o) {
        const B = ((fe - 44 + me * 0.04) % 36 + 36) % 36;
        Q -= 0.21 * (B - (fe - 44)), fe = 44 + B, X = Math.min(1, B / 6, (36 - B) / 6);
      }
      fe *= R;
      const S = w(U.night, Q, fe) * X;
      S >= 0.05 && ae.drops.push({ x: Q, y: fe, o: S });
    }
    const q = U.cond === "snowy" ? 11 : U.cond === "snowy-rainy" ? 6 : 0;
    for (let ce = 0; ce < q; ce++) {
      let Q = Z + (ee() - 0.5) * g * 1.05, fe = 40 + ee() * 44, X = 1;
      if (o) {
        const B = ((fe - 40 + me * 9e-3) % 44 + 44) % 44;
        fe = 40 + B, Q += 1.6 * Math.sin(y * me / 2800 + ce * 1.9 + Y), X = Math.min(1, B / 6, (44 - B) / 6);
      }
      fe *= R;
      const S = w(U.night, Q, fe) * X;
      S >= 0.05 && ae.flakes.push({ x: Q, y: fe, o: S });
    }
    if (U.k === "fog") {
      const ce = U.night ? "#c8ccd6" : "#ffffff", Q = U.night ? 0.28 : 0.62, fe = o ? 4 * Math.sin(y * me / 8e3 + Y) : 0;
      for (let X = 0; X < 4; X++) ae.fogs.push({ x: Z - g * 0.75 + X % 2 * g * 0.18 + (X % 2 ? fe : -fe), y: (30 + X * 13) * R, w: g * 1.3, c: ce, a: Q });
    }
    if (U.k === "storm") {
      const ce = (me / 3400 + Y * 0.37) % 1;
      ae.bolts.push({ x: Z + (ee() - 0.5) * g * 0.3 - 5, y: 36 * R, o: o && !(ce < 0.05 || ce > 0.09 && ce < 0.12) ? 0.8 : 1 });
    }
  }), ae;
}
function Ku(a, l, o, d, f, g, w, _) {
  const { S: y, C: R, cw: me, yb: ae, glowAt: U, soft: Y, tw: ee, sy: Z } = a, V = new Array(o * d), q = new Uint8Array(o * d), ce = new Uint8Array(o * d), Q = (k, A, C, H, de) => {
    C == null || k < 0 || A < 0 || k >= o || A >= d || (H >= 1 || H > ta(k + 5, A + 3)) && (V[A * o + k] = C, q[A * o + k] = de);
  }, fe = (k, A, C, H) => {
    for (let de = Math.max(0, Math.floor(A - C) - 1); de <= Math.min(d - 1, A + C + 1); de++) for (let j = Math.max(0, Math.floor(k - C) - 1); j <= Math.min(o - 1, k + C + 1); j++) H(j, de, j + 0.5 - k, de + 0.5 - A);
  }, X = (k, A, C) => {
    for (let de = 0; de < k.length - 1; de++) {
      const j = (de + A) * me;
      if (C < j - ee / 2) return [k[de], k[de], 0];
      if (C <= j + ee / 2) return [k[de], k[de + 1], (C - j + ee / 2) / ee];
    }
    const H = k[k.length - 1];
    return [H, H, 0];
  }, S = y.filter((k) => !k.night).map((k) => k.sky), B = y.filter((k) => k.night).map((k) => k.sky), be = Y / g, Ce = 16 * Z / g;
  for (let k = 0; k < o; k++) {
    const A = (k + 0.5) * f, C = ae(A) / g, H = X(S, 0.75, A), de = X(B, 1.25, A), j = U(A);
    for (let se = 0; se < d; se++) {
      const he = ta(k, se), ve = se + 0.5 - C, Ze = (be > 0.01 ? na(0.5 + ve / be) : ve > 0 ? 1 : 0) > he;
      let lt = Ze ? H[2] > he ? H[1] : H[0] : de[2] > he ? de[1] : de[0];
      (Ze ? na(((se + 0.5) / d - 0.45) / 0.55) * 0.7 : na(1 - (se + 0.5) / (d * 0.55)) * 0.7) > ta(k + 2, se + 5) && (lt = Ze ? en(lt, "#ffffff", 0.18) : en(lt, "#000000", 0.25)), Ze && ve >= 0 && ve < Ce && j.a * 1.3 * (1 - ve / Ce) > ta(k + 6, se + 1) && (lt = j.c), V[se * o + k] = lt, ce[se * o + k] = Ze ? 0 : 1;
    }
  }
  const O = en(R.sun, "#ffffff", 0.55), De = en(R.moon, "#ffffff", 0.6);
  l.stars.forEach((k) => {
    const A = Math.floor(k.x / f), C = Math.floor(k.y / g);
    if (A < 0 || C < 0 || A >= o || C >= d || !ce[C * o + A] || k.o < 0.15) return;
    const H = k.o > 0.45 ? R.star : en(R.star, V[C * o + A], 0.5), de = k.big && k.o > 0.6 ? Math.floor(k.size / f) : 0;
    Q(A, C, H, 1, Li);
    for (let j = 1; j <= de; j++) [[A - j, C], [A + j, C], [A, C - j], [A, C + j]].forEach((se) => {
      se[0] >= 0 && se[1] >= 0 && se[0] < o && se[1] < d && ce[se[1] * o + se[0]] && Q(se[0], se[1], H, 1, Li);
    });
  }), l.suns.forEach((k) => {
    const A = Math.max(1.5, k.rad / f), C = k.x / f, H = k.y / g, de = k.halo / f * 0.85;
    if (fe(C, H, de, (j, se, he, ve) => {
      const Ze = Math.sqrt(he * he + ve * ve);
      Ze > A && Ze < de && !ce[se * o + j] && Q(j, se, O, 0.3 * (1 - (Ze - A) / (de - A)), 0);
    }), _) {
      const j = Math.floor(w / 500) % 2, se = Math.max(1, A * 0.3);
      for (let he = 0; he < 8; he++) if (he % 2 === j) for (let ve = A + 1.2; ve < A + 1.2 + se; ve += 0.7) Q(Math.floor(C + Math.cos(he * Math.PI / 4) * ve), Math.floor(H + Math.sin(he * Math.PI / 4) * ve), R.sun, 1, Fc);
    }
    fe(C, H, A, (j, se, he, ve) => {
      he * he + ve * ve <= A * A && Q(j, se, na(((ve / A + 1) / 2 - 0.6) / 0.4) > ta(j, se) ? R.sunEdge : R.sun, 1, Bc);
    });
  }), l.moons.forEach((k) => {
    const A = Math.max(1.5, k.d * 0.37 / f), C = k.x / f, H = k.y / g, de = C + 0.547 * A, j = H - 0.503 * A, se = 0.82 * A;
    fe(C, H, A, (he, ve, Ze, lt) => {
      if (Ze * Ze + lt * lt > A * A) return;
      const Et = he + 0.5 - de, gn = ve + 0.5 - j;
      Et * Et + gn * gn > se * se && Q(he, ve, na((lt + A) / (2 * A) * 1.1 - 0.1) > ta(he, ve) ? R.moon : De, 1, Pc);
    });
  }), l.clouds.forEach((k) => {
    const A = Math.max(3, k.w / f), C = A * 0.6665, H = k.x / f, de = k.y / g, j = en(k.fill, "#000000", 0.16);
    for (let se = Math.max(0, Math.floor(de) - 1); se <= Math.min(d - 1, de + C + 1); se++) for (let he = Math.max(0, Math.floor(H) - 1); he <= Math.min(o - 1, H + A + 1); he++) {
      const ve = (he + 0.5 - H) / A, Ze = (se + 0.5 - de) / A;
      Nl(ve, Ze) && Q(he, se, !Nl(ve, Ze + 1 / A) || na((Ze - 0.42) / 0.25) * 0.8 > ta(he, se) ? j : k.fill, k.o, Ic);
    }
  }), l.fogs.forEach((k) => {
    const A = Math.floor(k.y / g), C = Math.max(A, Math.floor((k.y + 6 * Z) / g) - 1), H = Math.floor(k.x / f), de = Math.floor((k.x + k.w) / f);
    for (let j = A; j <= C; j++) for (let se = H; se <= de; se++) {
      const he = (se - H) / Math.max(1, de - H);
      Q(se, j, k.c, k.a * (he < 0.25 ? he / 0.25 : he > 0.75 ? (1 - he) / 0.25 : 1), 0);
    }
  });
  const z = Math.max(2, Math.round(9 / g));
  l.drops.forEach((k) => {
    const A = k.x / f, C = Math.floor(k.y / g);
    for (let H = 0; H < z; H++) Q(Math.floor(A - 0.208 * H * g / f), C + H, R.rain, k.o, Hc);
  });
  const Pe = Math.max(0, Math.round(4.4 / f / 2.6));
  return l.flakes.forEach((k) => {
    const A = Math.floor(k.x / f), C = Math.floor(k.y / g);
    Q(A, C, R.snow, k.o, ea);
    for (let H = 1; H <= Pe; H++)
      Q(A - H, C, R.snow, k.o, ea), Q(A + H, C, R.snow, k.o, ea), Q(A, C - H, R.snow, k.o, ea), Q(A, C + H, R.snow, k.o, ea);
  }), l.bolts.forEach((k) => {
    if (f <= 3.5)
      for (let A = Math.floor(k.y / g); A <= (k.y + 24) / g; A++) for (let C = Math.floor(k.x / f); C <= (k.x + 11) / f; C++)
        $d(Yu, (C + 0.5) * f - k.x, (A + 0.5) * g - k.y) && Q(C, A, R.sun, 1, Fr);
    else {
      const A = Math.round(k.x / f), C = Math.round(k.y / g);
      Zu.forEach((H, de) => H.split("").forEach((j, se) => {
        j === "#" && Q(A + se, C + de, R.sun, 1, Fr);
      }));
    }
  }), { col: V, ids: q };
}
function $u(a, l) {
  const o = l.px, d = Math.max(6, Math.round(l.width / o)), f = Math.max(6, Math.round(l.height / o)), g = l.width / d, w = l.height / f, _ = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, y = (Y) => {
    const ee = Qd(Y, l);
    return Ku(ee, eu(ee, { clock: _, ambient: l.ambient, seed: l.seed }), d, f, g, w, _, l.ambient);
  }, R = y(a), me = l.reveal == null ? 1 : na(l.reveal);
  let ae = R.col, U = R.ids;
  if (me < 1) {
    const Y = l.prev ? y(l.prev) : null, ee = me * (d + 12);
    ae = new Array(d * f), U = new Uint8Array(d * f);
    for (let Z = 0; Z < d * f; Z++) {
      const V = Z % d, q = Z / d | 0;
      (l.reduce ? me : na((ee - V) / 12)) > ta(V, q) ? (ae[Z] = R.col[Z], U[Z] = R.ids[Z]) : Y ? (ae[Z] = Y.col[Z], U[Z] = Y.ids[Z]) : (ae[Z] = null, U[Z] = 255);
    }
  }
  return Jd(ae, U, d, f, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function Xu(a, l, o) {
  const d = o.width, f = o.height, g = o.reveal == null ? 1 : na(o.reveal), w = (U, Y) => {
    const ee = Qd(Y, o);
    Ju(U, ee, eu(ee, o));
  };
  if (a.clearRect(0, 0, d, f), g >= 1) {
    w(a, l);
    return;
  }
  if (o.prev && w(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = g, w(a, l), a.restore();
    return;
  }
  const _ = a.canvas, y = _.__wxOff || (_.__wxOff = document.createElement("canvas"));
  (y.width !== _.width || y.height !== _.height) && (y.width = _.width, y.height = _.height);
  const R = y.getContext("2d");
  R.setTransform(a.getTransform()), R.clearRect(0, 0, d, f), w(R, l);
  const me = g * (d + 64) - 64, ae = R.createLinearGradient(me, 0, me + 64, 0);
  ae.addColorStop(0, "rgba(0,0,0,1)"), ae.addColorStop(1, "rgba(0,0,0,0)"), R.globalCompositeOperation = "destination-in", R.fillStyle = ae, R.fillRect(0, 0, d, f), R.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(y, 0, 0), a.restore();
}
function Ju(a, l, o) {
  const { W: d, H: f, S: g, C: w, cw: _, yb: y, glowAt: R, soft: me, tw: ae, sy: U } = l, Y = (O, De) => {
    const z = El(O);
    return "rgba(" + z[0] + "," + z[1] + "," + z[2] + "," + Math.max(0, Math.min(1, De)).toFixed(3) + ")";
  }, ee = (O, De) => {
    const z = a.createLinearGradient(0, 0, d, 0);
    z.addColorStop(0, O[0]);
    for (let Pe = 0; Pe < O.length - 1; Pe++) {
      const k = (Pe + De) * _, A = (k - ae / 2) / d, C = (k + ae / 2) / d;
      A > 0 && A < 1 && z.addColorStop(A, O[Pe]), C > 0 && C < 1 && z.addColorStop(C, O[Pe + 1]);
    }
    return z.addColorStop(1, O[O.length - 1]), z;
  }, Z = Math.max(24, Math.ceil(d / 4)), V = (O, De) => {
    a.beginPath();
    for (let z = 0; z <= Z; z++) {
      const Pe = d * z / Z, k = O == null ? 0 : y(Pe) + O;
      z ? a.lineTo(Pe, k) : a.moveTo(Pe, k);
    }
    for (let z = Z; z >= 0; z--) {
      const Pe = d * z / Z;
      a.lineTo(Pe, y(Pe) + De);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = ee(g.filter((O) => !O.night).map((O) => O.sky), 0.75), a.fillRect(0, 0, d, f);
  const q = a.createLinearGradient(0, 0, d, 0);
  for (let O = 0; O <= 64; O++) {
    const De = R(d * O / 64);
    q.addColorStop(O / 64, Y(De.c, Math.min(1, De.a)));
  }
  a.fillStyle = q;
  for (let O = 0; O < 8; O++)
    a.globalAlpha = 1 - O / 8, V(O * 2 * U, (O + 1) * 2 * U);
  a.fillStyle = ee(g.filter((O) => O.night).map((O) => O.sky), 1.25);
  const ce = Math.max(0.5, me), Q = 6;
  a.globalAlpha = 1, V(null, -ce);
  for (let O = 0; O < Q; O++)
    a.globalAlpha = 1 - (O + 0.5) / Q, V(-ce + 2 * ce * O / Q, -ce + 2 * ce * (O + 1) / Q);
  a.globalAlpha = 1;
  const fe = new Path2D(Gu), X = new Path2D(Vu), S = new Path2D(zu), B = new Path2D(Uu);
  a.fillStyle = w.star, o.stars.forEach((O) => {
    a.globalAlpha = O.o, O.big ? (a.save(), a.translate(O.x, O.y), a.scale(O.size, O.size), a.fill(fe), a.restore()) : (a.beginPath(), a.arc(O.x, O.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const be = en(w.sun, "#ffffff", 0.55);
  o.suns.forEach((O) => {
    const De = a.createRadialGradient(O.x, O.y, 0, O.x, O.y, O.halo);
    De.addColorStop(0, Y(be, 0.42)), De.addColorStop(0.7, Y(be, 0)), a.fillStyle = De, a.beginPath(), a.arc(O.x, O.y, O.halo, 0, Math.PI * 2), a.fill();
    const z = a.createLinearGradient(0, O.y - O.rad, 0, O.y + O.rad);
    z.addColorStop(0.6, w.sun), z.addColorStop(1, w.sunEdge), a.fillStyle = z, a.beginPath(), a.arc(O.x, O.y, O.rad, 0, Math.PI * 2), a.fill();
  });
  const Ce = en(w.moon, "#ffffff", 0.6);
  o.moons.forEach((O) => {
    a.save(), a.translate(O.x - O.d / 2, O.y - O.d / 2), a.scale(O.d / 46, O.d / 46);
    const De = a.createLinearGradient(0, 6, 0, 40);
    De.addColorStop(0, Ce), De.addColorStop(1, w.moon), a.fillStyle = De, a.fill(X), a.restore();
  }), o.clouds.forEach((O) => {
    a.save(), a.globalAlpha = O.o, a.translate(O.x, O.y), a.scale(O.w / 46, O.h / 30.66), a.translate(-4, -9.67), a.fillStyle = O.fill, a.fill(S), a.restore();
  }), o.fogs.forEach((O) => {
    const De = a.createLinearGradient(O.x, 0, O.x + O.w, 0);
    De.addColorStop(0, Y(O.c, 0)), De.addColorStop(0.25, Y(O.c, O.a)), De.addColorStop(0.75, Y(O.c, O.a)), De.addColorStop(1, Y(O.c, 0)), a.fillStyle = De, a.fillRect(O.x, O.y, O.w, 6 * U);
  }), a.fillStyle = w.rain, o.drops.forEach((O) => {
    a.save(), a.globalAlpha = O.o, a.translate(O.x, O.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = w.snow, o.flakes.forEach((O) => {
    a.globalAlpha = O.o, a.beginPath(), a.arc(O.x, O.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = w.sun, o.bolts.forEach((O) => {
    a.save(), a.globalAlpha = O.o, a.translate(O.x, O.y), a.fill(B), a.restore();
  }), a.restore();
}
function Qu(a, l) {
  var Gc, Uc, Yc, Zc, Kc, $c, Xc;
  const o = (t) => a.getElementById(t), d = o("workoutView"), f = o("workoutNameInput");
  let g = !0;
  const w = o("homeClock");
  function _() {
    w && (w.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  _(), setInterval(_, 15e3);
  const y = o("createFlow"), R = o("createMovementsSlot"), me = o("createTimingSlot"), ae = o("createFinishSlot"), U = o("movementStepSummary"), Y = o("timingStepSummary"), ee = o("finishStepSummary"), Z = o("continueToTiming"), V = o("continueToFinish"), q = o("finishMoveButton");
  let ce = !1, Q = [];
  function fe(t) {
    !t || Q.some((r) => r.node === t) || Q.push({ node: t, parent: t.parentNode, next: t.nextSibling });
  }
  function X(t, r) {
    t && (fe(t), r.appendChild(t));
  }
  function S() {
    [...Q].reverse().forEach(({ node: t, parent: r, next: s }) => {
      r && (s && s.parentNode === r ? r.insertBefore(t, s) : r.appendChild(t));
    }), Q = [];
  }
  function B(t) {
    a.querySelectorAll(".createStep").forEach((r) => {
      r.classList.toggle("active", r.dataset.createStep === t);
    }), t === "timing" && (ce = !0), be();
  }
  function be() {
    var le, ue;
    if (!mt) return;
    Ue[yt];
    const t = it.filter((ne) => !ne.hidden), r = t.filter((ne) => ne.kind !== "rest").length, s = t.filter((ne) => ne.kind === "rest").length;
    U.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const u = r > 0, m = a.querySelector('[data-open-step="timing"]'), T = a.querySelector('[data-open-step="finish"]');
    m.disabled = !u, Z.disabled = !u, Y.textContent = u ? rn(A.value) + " · " + Vt(C.value) + " movement · " + Vt(H.value) + " rest" : "Add a movement first", T.disabled = !(u && ce);
    const I = ((f == null ? void 0 : f.value) || "").trim(), W = [];
    (le = o("includeWarmupPreset")) != null && le.checked && W.push("warm-up"), (ue = o("includeCooldownPreset")) != null && ue.checked && W.push("cooldown"), ee.textContent = I ? I + (W.length ? " · " + W.join(" + ") : "") : W.length ? W.join(" + ") : "Name and optional extras";
  }
  function Ce() {
    var _e, Je, He;
    y.hidden = !1, ce = !1;
    const t = a.querySelector(".editNameRow"), r = o("createMoveOptions"), s = a.querySelector(".timeTiles"), u = o("routineSummaryModal"), m = a.querySelector(".tempoRevealRow"), T = o("tempoExperiment"), I = (_e = o("warmupList")) == null ? void 0 : _e.closest("section"), W = o("movementCreatorLaunch"), le = o("movementCreator"), ue = (Je = o("strengthList")) == null ? void 0 : Je.closest("section"), ne = (He = o("cooldownList")) == null ? void 0 : He.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), I, W, le, ue, ne].forEach((Te) => Te && X(Te, R)), [r, s, u, m, T].forEach((Te) => X(Te, me)), X(t, ae), B("movements"), be();
  }
  function O() {
    S(), y.hidden = !0, a.querySelectorAll(".createStep").forEach((t) => t.classList.remove("active"));
  }
  a.querySelectorAll("[data-open-step]").forEach((t) => t.addEventListener("click", () => {
    t.disabled || B(t.dataset.openStep);
  })), Z.addEventListener("click", () => {
    Z.disabled || B("timing");
  }), V.addEventListener("click", () => B("finish")), q.addEventListener("click", () => o("saveWorkoutEdit").click());
  const De = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, z = o("homeNav"), Pe = o("settingsNav");
  function k(t) {
    Object.entries(De).forEach(([r, s]) => s.classList.toggle("active", r === t)), z.classList.toggle("active", t === "home"), Pe.classList.toggle("active", t === "settings"), t === "home" && setTimeout(Ii, 400), t === "settings" && (requestAnimationFrame(() => fi(a.querySelector(".tab.active"), !1)), hn());
  }
  const A = o("totalTime"), C = o("workTime"), H = o("restTime"), de = o("totalOut"), j = o("workOut"), se = o("restOut"), he = o("totalFill"), ve = o("workFill"), Ze = o("restFill"), lt = o("roundsInput"), Et = o("roundsFill"), gn = o("roundsOut"), qn = o("totalLabel"), pt = o("routineSummaryModal"), Qe = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let St = Qe.map((t) => ({ ...t })), it = [
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
  const Sn = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let _n = Sn.map((t) => ({ ...t }));
  const ar = {
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
  }, ht = co(l.data), Ue = ht.profiles;
  let yt = Ue[ht.selected] ? ht.selected : ht.order.find((t) => Ue[t]) || "kettlebell";
  function co(t) {
    const r = t && typeof t == "object" ? JSON.parse(JSON.stringify(t)) : {}, s = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(ar)), u = (Array.isArray(r.order) ? r.order : Object.keys(s)).filter((m) => s[m]);
    return Object.keys(s).forEach((m) => {
      u.includes(m) || u.push(m);
    }), {
      v: 1,
      profiles: s,
      order: u,
      selected: r.selected || u[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : or(r.energy)).map(Ai),
      settings: { ...r.settings || {} }
    };
  }
  function or(t) {
    if (!Array.isArray(t)) return [];
    const r = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return t.forEach((u) => {
      const m = new Date(u.at);
      if (isNaN(m)) return;
      const T = m.getFullYear() + "-" + String(m.getMonth() + 1).padStart(2, "0") + "-" + String(m.getDate()).padStart(2, "0"), I = m.getHours() < 14 ? "morning" : "evening";
      if (s.some((le) => le.date === T && le.slot === I)) return;
      const W = r.indexOf(u.value) + 1;
      W > 0 && s.push({ date: T, slot: I, mood: null, energy: W, at: u.at });
    }), s;
  }
  function Ai(t) {
    if (t.scale === 100) return t;
    const r = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...t, mood: r(t.mood), energy: r(t.energy), scale: 100 };
  }
  function vn() {
    mt || (ht.selected = yt, ht.order = ht.order.filter((t) => Ue[t] && t !== Ct), l.save(ht));
  }
  function nt() {
    return ht.settings;
  }
  function Wn(t) {
    const r = Ue[t];
    if (!r) return;
    yt = t;
    const s = o("workoutNameInput");
    if (s && (s.value = r.name), A.value = r.total, C.value = r.work, H.value = r.rest, lt.value = r.rounds || 1, r.customSequence) {
      const u = (r.sequence || []).map((T) => ({ ...T })), m = (T) => u.filter((I) => I.presetRole === T).map(({ presetRole: I, ...W }) => W);
      St = (r.warmup || m("warmup")).map((T) => ({ ...T })), _n = (r.cooldown || m("cooldown")).map((T) => ({ ...T })), it = u.filter((T) => !T.presetRole), ho(r.preset || "movement", !1);
    } else
      A.min = 3, A.max = 40, A.step = 1, C.min = 20, C.max = 60, C.step = 5, H.min = 5, H.max = 30, H.step = 5, St = (r.warmup || Qe).map((u) => ({ ...u })), _n = (r.cooldown || Sn).map((u) => ({ ...u })), it = r.strength.map((u) => Array.isArray(u) ? (([m, T, I, W = !1]) => ({ id: m, name: T, group: I, kind: "work", hidden: !!W }))(u) : { ...u });
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === t)), kt();
  }
  function ir(t, r, s) {
    const u = t.getBoundingClientRect(), m = u.width / 2, T = u.height / 2, I = r - m, W = s - T;
    let le = 1 / 0, ue = 1 / 0;
    I !== 0 && (le = m / Math.abs(I)), W !== 0 && (ue = T / Math.abs(W));
    const ne = Math.min(Math.max(1 / Math.min(le, ue), 0), 1);
    let te = Math.atan2(W, I) * (180 / Math.PI) + 90;
    return te < 0 && (te += 360), { edge: ne, angle: te };
  }
  function xt(t, r, s = !1) {
    const u = t.getBoundingClientRect(), m = r.clientX - u.left, T = r.clientY - u.top, { edge: I, angle: W } = ir(t, m, T), le = s ? 100 : I * 100;
    t.style.setProperty("--edge-proximity", le.toFixed(3)), t.style.setProperty("--cursor-angle", W.toFixed(3) + "deg"), t.classList.toggle("borderGlowActive", s || le >= 30);
  }
  function Re(t) {
    t.addEventListener("pointermove", (s) => xt(t, s, !1)), t.addEventListener("pointerenter", (s) => xt(t, s, !1)), t.addEventListener("pointerdown", (s) => xt(t, s, !0));
    const r = () => {
      t.classList.remove("borderGlowActive"), t.style.setProperty("--edge-proximity", "0");
    };
    t.addEventListener("pointerleave", r), t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r);
  }
  Re(o("addWorkoutPanel"));
  let mt = !1, Ct = null;
  function Ve(t) {
    return String(t ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function uo(t) {
    return t.summary ? t.summary : t.customSequence ? rn(t.total) + " · custom move" : rn(t.total) + " · " + Vt(t.work) + " / " + Vt(t.rest) + " · warm-up + cooldown";
  }
  function Bo(t, r) {
    var T;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = t, s.tabIndex = 0;
    const u = r.activityCount ?? (((T = r.sequence) == null ? void 0 : T.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Ve(r.name) + '</div><div class="sub">' + Ve(uo(r)) + '</div><span class="sourceTag">' + Ve(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (u ? u + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Ve(r.name) + "</div></div>";
    const m = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(s, m), Re(s), s.addEventListener("click", (I) => {
      I.target.closest("button") || Wn(t);
    }), s.addEventListener("keydown", (I) => {
      (I.key === "Enter" || I.key === " ") && !I.target.closest("button") && (I.preventDefault(), Wn(t));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (I) => {
      I.stopPropagation(), Wn(t), Gr(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (I) => {
      I.stopPropagation(), Wn(t), ts();
    }), s;
  }
  function rr() {
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.remove()), ht.order.forEach((t) => {
      Ue[t] && Bo(t, Ue[t]);
    }), a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.classList.toggle("active", t.dataset.workout === yt));
  }
  rr(), o("addWorkoutPanel").addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && (t.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    mt = !0, Ct = "custom-" + Date.now(), Ue[Ct] = {
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
    }, Wn(Ct), Gr(!0);
  });
  let ze = [], Xe = 0, Cn = 0, Ua = 1, jn = !1, tn = null, po = null, on = !1, zn = ht.settings.upcomingCount ?? "all", _i = "movement";
  function Vn(t, r, s) {
    return (Number(t) - r) / (s - r) * 100;
  }
  function Vt(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function rn(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function Ta() {
    he.style.width = Vn(A.value, Number(A.min), Number(A.max)) + "%", ve.style.width = Vn(C.value, Number(C.min), Number(C.max)) + "%", Ze.style.width = Vn(H.value, Number(H.min), Number(H.max)) + "%", j.textContent = Vt(C.value), se.textContent = Vt(H.value);
    const t = Number(lt.value) || 1;
    Et.style.width = Vn(t, 1, 10) + "%", qn.textContent = t > 1 ? "Time per round" : "Total time";
  }
  function Ya(t) {
    return t.filter((r) => !r.hidden);
  }
  function Wt(t) {
    const r = Math.max(0, Math.round(Number(t) || 0)), s = Math.floor(r / 3600), u = Math.floor(r % 3600 / 60), m = r % 60;
    return (s ? s + ":" + String(u).padStart(2, "0") : u) + ":" + String(m).padStart(2, "0");
  }
  function Po(t) {
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
        const W = r.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        W && (u = W[2]);
      }
    if (!u || !/^[\w-]{11}$/.test(u)) return null;
    const m = (W) => {
      if (!W) return 0;
      if (/^\d+$/.test(W)) return Number(W);
      const le = W.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return le ? (Number(le[1]) || 0) * 3600 + (Number(le[2]) || 0) * 60 + (Number(le[3]) || 0) : 0;
    }, T = m(r.searchParams.get("t") || r.searchParams.get("start")), I = m(r.searchParams.get("end"));
    return { id: u, start: T, end: I > T ? I : null };
  }
  function oa(t, r) {
    if (t.useVideoLength === !1) return Math.max(5, Number(t.duration) || r || 300);
    const s = Number(t.start) || 0, u = Number(t.end) || Number(t.videoDuration) || 0;
    return u > s ? Math.round(u - s) : Number(t.duration) || 300;
  }
  function La(t, r) {
    const s = Math.max(0, Number(t) || 0);
    return Math.round(r === "hour" ? s * 3600 : r === "min" ? s * 60 : s);
  }
  function ho(t, r = !0) {
    _i = t, a.querySelectorAll(".createPresetBtn").forEach((u) => u.classList.toggle("active", u.dataset.movePreset === t));
    const s = Ue[yt];
    s && (s.preset = t), t === "work" ? (A.min = 30, A.max = 480, A.step = 30, C.min = 300, C.max = 7200, C.step = 300, H.min = 60, H.max = 1800, H.step = 60, r && (A.value = 60, C.value = 1500, H.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (A.min = 3, A.max = 40, A.step = 1, C.min = 20, C.max = 60, C.step = 5, H.min = 5, H.max = 30, H.step = 5, r && (A.value = 20, C.value = 45, H.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), Ta();
  }
  function Io(t, r) {
    const s = _i === "work";
    return t.map((u, m) => ({ ...u, id: r + "-" + m + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(C.value) }));
  }
  function Ho() {
    const t = Ue[yt];
    t != null && t.customSequence && (t.includeWarmup = o("includeWarmupPreset").checked, t.includeCooldown = o("includeCooldownPreset").checked, t.includeWarmup && !St.length && (St = Io(Qe, "warm")), t.includeCooldown && !_n.length && (_n = Io(Sn, "cool")), kt());
  }
  function sr() {
    const t = o("upcomingCountSetting");
    if (!t) return;
    const r = Math.max(1, ze.length - 1), s = zn;
    t.innerHTML = "";
    for (let T = 1; T <= r; T++) {
      const I = document.createElement("option");
      I.value = String(T), I.textContent = String(T), t.appendChild(I);
    }
    const u = document.createElement("option");
    u.value = "all", u.textContent = "All", t.appendChild(u);
    const m = s === "all" ? "all" : String(Math.min(Number(s) || 1, r));
    t.value = m, zn = m === "all" ? "all" : Number(m);
  }
  function kt() {
    Number(A.value) * 60;
    const t = Number(C.value), r = Number(H.value), s = Ue[yt], u = !!(s != null && s.customSequence), m = (u ? !s.includeWarmup : s != null && s.warmupOff) ? [] : Ya(St), T = Ya(it), I = u && !s.includeCooldown ? [] : Ya(_n);
    if (s && (s.total = Number(A.value), s.work = t, s.rest = r, s.rounds = Number(lt.value) || 1, s.customSequence ? (s.sequence = it.map((Se) => ({ ...Se })), s.warmup = St.map((Se) => ({ ...Se })), s.cooldown = _n.map((Se) => ({ ...Se }))) : (s.strength = it.map((Se) => ({ ...Se })), s.warmup = St.map((Se) => ({ ...Se })), s.cooldown = _n.map((Se) => ({ ...Se })))), s != null && s.customSequence) {
      const Se = [...m.map((ct) => ({ ...ct, section: "warmup" })), ...T, ...I.map((ct) => ({ ...ct, section: "cooldown" }))].map((ct) => {
        if (ct.kind === "video") return { ...ct, duration: oa(ct, t), rest: 0 };
        if (ct.kind === "rest") {
          const yn = ct.useGlobalTiming === !0 ? r : Number(ct.duration) || r;
          return { ...ct, duration: yn, rest: 0 };
        }
        const wn = ct.useGlobalTiming === !1 && Number(ct.duration) || t;
        return { ...ct, duration: wn, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (ze = [], Se.forEach((ct, wn) => {
        ze.push(ct);
        const yn = Se[wn + 1];
        ct.kind !== "rest" && yn && yn.kind !== "rest" && ze.push({
          id: "auto-rest-" + wn,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : ze = Se;
    } else
      ze = [...m.map((Se) => ({ ...Se, section: "warmup" })), ...T, ...I.map((Se) => ({ ...Se, section: "cooldown" }))].map((Se) => Se.kind === "video" ? { ...Se, duration: oa(Se, t), rest: 0 } : Se.kind === "rest" ? { ...Se, duration: Se.useGlobalTiming === !0 ? r : Number(Se.duration) || r, rest: 0 } : { ...Se, duration: Se.useGlobalTiming === !1 && Number(Se.duration) || t, rest: r }), ze.forEach((Se, ct) => {
        var wn;
        ((wn = ze[ct + 1]) == null ? void 0 : wn.kind) === "rest" && (Se.rest = 0);
      }), ze.length && (ze[ze.length - 1].rest = 0);
    const W = Math.max(1, Math.min(10, Number(lt.value) || 1)), le = ze, ue = (Se) => W <= 1 ? null : Se.section === "warmup" || Se.presetRole === "warmup" ? "first" : Se.section === "cooldown" || Se.presetRole === "cooldown" ? "last" : Se.kind === "video" && (Se.videoRounds === "first" || Se.videoRounds === "last") ? Se.videoRounds : null, ne = (Se) => !!ue(Se), te = le.filter((Se) => !ne(Se)), _e = le.filter(ne), Je = te.length, He = te.reduce((Se, ct) => Se + ct.duration + ct.rest, 0), Te = _e.reduce((Se, ct) => Se + ct.duration + ct.rest, 0), Me = [
      _e.some((Se) => Se.section === "warmup" || Se.presetRole === "warmup") && "warm-up",
      _e.some((Se) => Se.section === "cooldown" || Se.presetRole === "cooldown") && "cooldown",
      _e.some((Se) => Se.kind === "video" && !Se.section && !Se.presetRole) && "video"
    ].filter(Boolean), gt = Me.length > 1 ? Me.slice(0, -1).join(", ") + " & " + Me[Me.length - 1] : Me[0] || "";
    ze = [];
    const bt = (Se, ct) => {
      const wn = ue(Se);
      return !wn || (wn === "first" ? ct === 1 : ct === W);
    };
    for (let Se = 1; Se <= W; Se++)
      if (le.filter((ct) => bt(ct, Se)).forEach((ct, wn) => ze.push({ ...ct, id: ct.id + (W > 1 ? "-r" + Se : ""), round: Se, roundIndex: wn })), Se < W && Je)
        if (s != null && s.customSequence)
          ze.push({ id: "round-break-" + Se, name: "Rest", group: "Round " + (Se + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: Se, roundIndex: Je, roundBreak: !0 });
        else {
          const ct = ze[ze.length - 1];
          ct.rest = r, ct.roundBreakAfter = !0;
        }
    Ta();
    const Oe = ze.reduce((Se, ct) => Se + ct.duration + ct.rest, 0), wt = Math.round(He / 60), Rt = Math.round(Oe / 60), st = W > 1 ? rn(wt) + " × " + W + " rounds" + (Te ? " + " + Vt(Te) + " " + gt : "") + " (" + rn(Rt) + ")" : rn(Rt), ot = [m.length ? "warm-up" : "", I.length ? "cooldown" : ""].filter(Boolean), fn = s != null && s.customSequence ? st + " · " + Je + " items" + (ot.length && !(W > 1 && Te) ? " · " + ot.join(" + ") : "") : st + " · " + Vt(t) + " / " + Vt(r) + (ot.length && !(W > 1 && Te) ? " · " + ot.join(" + ") : "");
    de.textContent = Vt(He);
    const An = ze.filter((Se) => !Se.roundBreak).length, Ut = W > 1 ? An + " activities · " + W + " rounds" : Je + " activities";
    gn.textContent = W > 1 ? W + " rounds · " + rn(Rt) + " total" : "1 round", o("roundsCount").textContent = W, a.querySelectorAll("[data-rounds-step]").forEach((Se) => {
      Se.disabled = Number(Se.dataset.roundsStep) < 0 ? W <= 1 : W >= 10;
    }), s && (s.summary = fn, s.activityCount = Je);
    const ki = a.querySelector(".workoutPanel.active .sub");
    ki && (ki.textContent = fn), pt.textContent = fn, Ka(), a.querySelectorAll(".workoutPanel.active .activityCount").forEach((Se) => Se.textContent = Ut), Ta(), $(), dr(), jo(), sr(), mt && be(), De.workout.classList.contains("active") && !tn && si();
  }
  const Ha = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', lr = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', cr = {
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
  }, Bt = (t) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (cr[t] || "") + "</svg>";
  a.querySelectorAll("[data-icon]").forEach((t) => {
    t.innerHTML = Bt(t.dataset.icon);
  });
  let Pt = null, ft = null;
  function Fo(t) {
    return t = Math.max(1, Number(t) || 0), t >= 3600 && t % 3600 === 0 ? { value: t / 3600, unit: "hour" } : t >= 60 && t % 60 === 0 ? { value: t / 60, unit: "min" } : { value: t, unit: "sec" };
  }
  function Za(t = !1) {
    const r = a.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), t && r.select());
  }
  function fo(t, r, s = {}) {
    const u = t.kind === "rest", m = t.kind === "video", T = m ? t.useVideoLength !== !1 : u ? t.useGlobalTiming === !0 : t.useGlobalTiming !== !1, I = Number(u ? H.value : C.value), W = Fo(m ? t.useVideoLength === !1 ? t.duration : oa({ ...t, useVideoLength: !0 }) : T ? I : t.duration || I), le = m && (Number(t.videoDuration) > 0 || Number(t.end) > 0), ue = m ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Ve(t.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ve(t.autoName ? "" : t.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Oe, wt]) => '<option value="' + Oe + '"' + ((t.videoRounds || "every") === Oe ? " selected" : "") + ">" + wt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ve(t.name) + '" placeholder="' + (u ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Ve(t.group) + '" placeholder="' + (u ? "Rest" : "e.g. Glutes + legs") + '"></label>', ne = m ? "Play the whole " + (Number(t.start) > 0 || Number(t.end) > 0 ? "clip" : "video") + (le ? " · " + Wt(oa({ ...t, useVideoLength: !0 })) : "") : "Use global timing · " + Vt(I), te = document.createElement("div");
    te.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), te.dataset.index = r, te.dataset.id = t.id;
    const _e = s.isNew ?? (ft == null ? void 0 : ft.item) === t, Je = s.sheet ? '<div class="moveEditActions sheetActions">' + (_e ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (t.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Ve(t.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (_e ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    te.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (m ? " videoFields" : "") + '">' + ue + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (T ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Ve(ne) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + W.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Oe) => '<option value="' + Oe + '"' + (Oe === W.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Oe] + "</option>").join("") + "</select></div></div>" + Je + "</div>";
    const He = (Oe) => te.querySelector("[data-f=" + Oe + "]"), Te = () => {
      const Oe = He("global").checked;
      He("dur").disabled = Oe, He("unit").disabled = Oe, te.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Oe);
    };
    He("global").addEventListener("change", Te), Te();
    const Me = () => {
      var Oe;
      if (s.sheet) {
        (Oe = s.onCancel) == null || Oe.call(s);
        return;
      }
      _e && ie(), Pt = null, kt();
    }, gt = () => {
      var Rt;
      if (m) {
        bt();
        return;
      }
      const Oe = He("name").value.trim();
      if (!Oe) {
        He("name").focus();
        return;
      }
      t.name = Oe, t.group = He("group").value.trim() || (u ? "Rest" : "Movement");
      const wt = He("global").checked;
      if (t.useGlobalTiming = wt, wt || (t.duration = Math.max(u ? 5 : 1, La(He("dur").value, He("unit").value))), s.sheet) {
        (Rt = s.onSaved) == null || Rt.call(s);
        return;
      }
      _e && (ft = null), Pt = null, kt(), Gt(_e ? u ? "Rest added" : "Movement added" : "Movement updated");
    }, bt = () => {
      var ot;
      const Oe = He("url").value.trim(), wt = Po(Oe);
      if (!wt) {
        He("urlError").hidden = !1, He("url").classList.add("invalid"), He("url").focus();
        return;
      }
      const Rt = wt.id !== t.videoId;
      t.url = Oe, t.videoId = wt.id, t.start = wt.start, t.end = wt.end, Rt && (t.videoDuration = null, t.videoError = null);
      const st = He("name").value.trim();
      t.autoName = !st, t.name = st || (Rt ? "" : t.name) || t.videoTitle || "YouTube video", t.group = "Video", t.videoRounds = He("rounds").value, t.useVideoLength = He("global").checked, t.useVideoLength || (t.duration = Math.max(5, La(He("dur").value, He("unit").value))), s.sheet ? (ot = s.onSaved) == null || ot.call(s) : (_e && (ft = null), Pt = null, kt(), Gt(_e ? "Video added" : "Video updated")), (Rt || !t.videoDuration || t.autoName && !t.videoTitle) && Hn(t);
    };
    if (m && He("url").addEventListener("input", () => {
      He("urlError").hidden = !0, He("url").classList.remove("invalid");
    }), te.querySelector("[data-a=cancel]").addEventListener("click", Me), te.querySelector("[data-a=save]").addEventListener("click", gt), s.sheet && !_e) {
      te.querySelector("[data-a=hide]").addEventListener("click", () => {
        var wt;
        return (wt = s.onHide) == null ? void 0 : wt.call(s);
      });
      const Oe = te.querySelector("[data-a=remove]");
      pi(Oe, Oe.querySelector(".removeFill"), 1200, () => {
        var wt;
        return (wt = s.onRemove) == null ? void 0 : wt.call(s);
      });
    }
    return te.addEventListener("keydown", (Oe) => {
      Oe.key === "Escape" && (Oe.preventDefault(), Oe.stopPropagation(), Me()), Oe.key === "Enter" && Oe.target.matches("input") && (Oe.preventDefault(), gt());
    }), te;
  }
  function M(t, r) {
    const s = o(r);
    s.innerHTML = "", t.forEach((u, m) => {
      if (u === Pt && !Ot()) {
        s.appendChild(fo(u, m));
        return;
      }
      const T = document.createElement("div");
      T.className = "moveRow" + (u.hidden ? " hidden" : "") + (u.kind === "rest" ? " restItem" : "") + (u.kind === "video" ? " videoItem" : "") + (Ra(u) ? " noMeta" : ""), T.dataset.index = m, T.dataset.id = u.id;
      const I = u.kind === "rest" ? u.useGlobalTiming === !0 ? "Global timing" : Vt(u.duration) : u.useGlobalTiming === !1 ? Vt(u.duration) : "Global timing", W = u.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", le = u.kind === "video" ? u.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (u.useVideoLength === !1 ? "stops after " + Vt(u.duration) : Number(u.videoDuration) > 0 || Number(u.end) > 0 ? Wt(oa(u)) : "plays to the end") + (u.videoRounds === "first" ? " · first round only" : u.videoRounds === "last" ? " · last round only" : "") : u.group + " · " + I, ue = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Ve(u.name) + '. Drag, or use the up and down arrow keys">' + Ha + "</button>", ne = '<div class="moveText"><div class="moveItemName">' + Ve(u.name) + W + '</div><div class="moveMeta">' + Ve(le) + "</div></div>", te = (He) => He.addEventListener("keydown", (Te) => {
        var bt, Oe;
        if (Te.key !== "ArrowUp" && Te.key !== "ArrowDown") return;
        Te.preventDefault();
        const Me = t.indexOf(u), gt = Me + (Te.key === "ArrowUp" ? -1 : 1);
        gt < 0 || gt >= t.length || (t.splice(Me, 1), t.splice(gt, 0, u), kt(), (Oe = (bt = o(r).children[gt]) == null ? void 0 : bt.querySelector(".dragHandle")) == null || Oe.focus());
      });
      if (Ot()) {
        T.classList.add("phoneRow"), T.tabIndex = 0, T.setAttribute("role", "button"), T.setAttribute("aria-label", "Edit " + (u.name || "step")), T.innerHTML = ue + ne + '<span class="rowChevron" aria-hidden="true">›</span>';
        const He = T.querySelector(".dragHandle");
        He.addEventListener("pointerdown", (Te) => G(Te, T, s, t)), te(He), T.addEventListener("click", (Te) => {
          Te.target.closest(".dragHandle") || Oo(u, t);
        }), T.addEventListener("keydown", (Te) => {
          Te.key === "Enter" && Te.target === T && (Te.preventDefault(), Oo(u, t));
        }), s.appendChild(T);
        return;
      }
      T.innerHTML = ue + ne + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Ve(u.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (u.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Ve(u.name) + '"><span class="removeFill"></span><span class="removeLabel">' + lr + "</span></button></div>", T.querySelector(".editBtn").addEventListener("click", () => {
        ie(), Pt = u, kt(), Za();
      }), T.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        u.hidden = !u.hidden, kt();
      });
      const _e = T.querySelector(".removeBtn");
      pi(_e, _e.querySelector(".removeFill"), 1200, () => {
        const He = t.indexOf(u);
        He < 0 || (t.splice(He, 1), kt(), Gt("Removed " + u.name, { label: "Undo", run: () => {
          t.splice(Math.min(He, t.length), 0, u), kt();
        } }));
      });
      const Je = T.querySelector(".dragHandle");
      Je.addEventListener("pointerdown", (He) => G(He, T, s, t)), te(Je), s.appendChild(T);
    });
  }
  const L = () => {
    var t;
    return (t = window.matchMedia) == null ? void 0 : t.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, P = (t) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, t);
    } catch {
    }
  };
  function G(t, r, s, u) {
    if (t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const m = t.currentTarget, T = t.pointerId, I = !L();
    try {
      m.setPointerCapture(T);
    } catch {
    }
    const W = r.closest(".exerciseScroller") || Ge(r), le = s.style.position;
    s.style.position = "relative";
    const ue = [...s.children].filter((dt) => dt.classList.contains("moveRow")), ne = ue.indexOf(r), te = parseFloat(getComputedStyle(s).rowGap) || 8, _e = r.offsetHeight, Je = _e + te, He = ue.map((dt) => dt.offsetTop), Te = ue.map((dt) => dt.offsetHeight), Me = () => s.getBoundingClientRect().top, gt = s.getBoundingClientRect().width, bt = t.clientY - (Me() + He[ne]), Oe = t.clientX;
    let wt = t.clientY, Rt = t.clientX, st = Me() + He[ne], ot = 0, fn = 0, An = 0, Ut = 1, ki = 0, Se = ne, ct = !1, wn = 0, yn = !1, gl = !1, Dr = He[ne];
    s.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", P(8);
    const vl = () => {
      const dt = wt - bt + _e / 2 - Me();
      let Tt = 0;
      return ue.forEach((zt, Xn) => {
        Xn !== ne && dt > He[Xn] + Te[Xn] / 2 && Tt++;
      }), Tt;
    }, bl = () => {
      ue.forEach((dt, Tt) => {
        if (Tt === ne) return;
        const zt = ne < Se && Tt > ne && Tt <= Se ? -Je : ne > Se && Tt >= Se && Tt < ne ? Je : 0;
        dt.style.transform = zt ? "translateY(" + zt + "px)" : "";
      });
    }, ws = () => {
      const dt = s.getBoundingClientRect(), Tt = Math.abs(Rt - Oe) > Math.max(80, gt * 0.3) || Rt < dt.left - 24 || Rt > dt.right + 24;
      Tt !== ct && (ct = Tt, r.classList.toggle("willReturn", Tt), P(Tt ? 10 : 4));
      const zt = ct ? ne : vl();
      zt !== Se && (Se = zt, bl(), ct || P(4));
    }, Mi = () => {
      if (Se === ne) return He[ne];
      const dt = ue.filter((zt, Xn) => Xn !== ne);
      let Tt = He[0];
      for (let zt = 0; zt < Se; zt++) Tt += dt[zt].offsetHeight + te;
      return Tt;
    }, Rr = () => {
      const dt = I ? Math.min(Math.abs(ot) / 40, 1) : 0, Tt = I && !yn ? Math.max(-3, Math.min(3, An * 0.6)) : 0;
      r.style.transform = "translate(" + fn.toFixed(2) + "px," + (st - (Me() + He[ne])).toFixed(2) + "px) rotate(" + Tt.toFixed(2) + "deg) scale(" + (Ut * (1 - 0.04 * dt)).toFixed(4) + "," + (Ut * (1 + 0.06 * dt)).toFixed(4) + ")";
    }, rt = () => {
      wn = requestAnimationFrame(rt);
      const dt = Rt - Oe, Tt = yn ? Me() + Dr : wt - bt, zt = yn ? 0 : ct ? dt * 0.9 : Math.max(-22, Math.min(22, dt * 0.22)), Xn = yn ? 1 : ct ? 0.97 : 1.035;
      if (!I) {
        st = Tt, fn = yn ? 0 : zt, Ut = 1, Rr(), yn && Kt();
        return;
      }
      const Au = yn ? 0.24 : 0.2, _u = yn ? 0.62 : 0.68;
      ot = (ot + (Tt - st) * Au) * _u, st += ot, An = (An + (zt - fn) * 0.16) * 0.7, fn += An, ki = (ki + (Xn - Ut) * 0.22) * 0.6, Ut += ki, Rr(), yn && Math.abs(ot) < 0.15 && Math.abs(Tt - st) < 0.5 && Math.abs(fn) < 0.5 && Math.abs(Ut - 1) < 3e-3 && Kt();
    }, Ht = setInterval(() => {
      if (!W || yn) return;
      const dt = W.getBoundingClientRect(), Tt = 56, zt = wt < dt.top + Tt ? -10 : wt > dt.bottom - Tt ? 10 : 0;
      zt && (W.scrollTop += zt, ws());
    }, 30);
    function Kt() {
      if (gl) return;
      gl = !0, cancelAnimationFrame(wn);
      const dt = Se !== ne, Tt = r.dataset.id;
      if (s.classList.remove("reordering"), ue.forEach((Xn) => {
        Xn.style.transition = "none", Xn.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), s.style.position = le, dt) {
        const [Xn] = u.splice(ne, 1);
        u.splice(Se, 0, Xn);
      }
      kt();
      const zt = Tt && s.querySelector('.moveRow[data-id="' + Tt + '"]');
      zt && I && zt.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), dt && Gt("Order saved");
    }
    const xn = (dt) => {
      if (dt.pointerId === T) {
        if (dt.pointerType === "mouse" && dt.buttons === 0) {
          Ca();
          return;
        }
        wt = dt.clientY, Rt = dt.clientX, ws();
      }
    }, $n = (dt) => {
      dt.pointerId === T && Ca();
    };
    function Ca() {
      yn || (window.removeEventListener("pointermove", xn, !0), window.removeEventListener("pointerup", $n, !0), window.removeEventListener("pointercancel", $n, !0), m.removeEventListener("lostpointercapture", Ca), clearInterval(Ht), ct && Se !== ne && (Se = ne, bl()), Dr = Mi(), yn = !0, P(6), setTimeout(Kt, 800));
    }
    window.addEventListener("pointermove", xn, !0), window.addEventListener("pointerup", $n, !0), window.addEventListener("pointercancel", $n, !0), m.addEventListener("lostpointercapture", Ca), wn = requestAnimationFrame(rt), Rr();
  }
  function $() {
    var m, T, I, W;
    const t = Ue[yt], r = (m = o("warmupList")) == null ? void 0 : m.closest("section"), s = (T = o("cooldownList")) == null ? void 0 : T.closest("section"), u = (W = (I = o("strengthList")) == null ? void 0 : I.closest("section")) == null ? void 0 : W.querySelector(".sectionTitle");
    t != null && t.customSequence ? (r && (r.hidden = !t.includeWarmup), s && (s.hidden = !t.includeCooldown), u && (u.textContent = "Move sequence")) : (r && (r.hidden = !!(t != null && t.warmupOff)), s && (s.hidden = !1), u && (u.textContent = "Kettlebell work")), M(St, "warmupList"), M(it, "strengthList"), M(_n, "cooldownList");
  }
  function ie() {
    if (!ft) return;
    const { item: t, arr: r } = ft;
    ft = null;
    const s = r.indexOf(t);
    s >= 0 && r.splice(s, 1), Pt === t && (Pt = null);
  }
  function pe(t) {
    return t.id === "warmupList" ? { arr: St, kind: "warmup", group: "Warm-up" } : t.id === "cooldownList" ? { arr: _n, kind: "cooldown", group: "Cooldown" } : { arr: it, kind: "work", group: "" };
  }
  function we(t, r) {
    const s = pe(r), u = Date.now().toString(36);
    return t === "video" ? { id: "video-" + u, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : t === "rest" ? { id: "rest-" + u, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(H.value) } : { id: "movement-" + u, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(C.value) };
  }
  const ge = "cubic-bezier(.34,1.46,.64,1)";
  function Be(t, r) {
    if (L() || !t) {
      r();
      return;
    }
    const s = (T) => {
      var I;
      return ((I = T.dataset) == null ? void 0 : I.id) || T;
    }, u = () => [...t.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], m = new Map(u().map((T) => [s(T), T.getBoundingClientRect().top]));
    r(), u().forEach((T) => {
      const I = m.get(s(T));
      if (I === void 0) return;
      const W = I - T.getBoundingClientRect().top;
      Math.abs(W) < 0.5 || T.animate([{ transform: "translateY(" + W + "px)" }, { transform: "none" }], { duration: 440, easing: ge });
    });
  }
  function ke(t, r) {
    if (!t || L()) return;
    const s = t.offsetHeight, u = Math.max(0, s - (r || 0));
    t.animate([{ clipPath: "inset(0 0 " + u + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: ge });
  }
  function Ee(t, r, s, u) {
    const { arr: m } = pe(r), T = we(t, r);
    m.splice(Math.max(0, Math.min(s, m.length)), 0, T), ft = { item: T, arr: m }, Pt = T, Be(r.closest(".exerciseScroller,.createStepSlot") || r, () => kt());
    const I = r.querySelector(".moveRow.editing");
    return ke(I, u), Za(t === "rest"), I;
  }
  function Ge(t) {
    for (let r = t; r && r.nodeType === 1; r = r.parentElement) {
      const s = getComputedStyle(r).overflowY;
      if (/(auto|scroll)/.test(s) && r.scrollHeight > r.clientHeight) return r;
    }
    return null;
  }
  const qe = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function Le(t, r) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (t === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + Ha + '</span><span class="addGhostText"><strong>' + Ve(r[0]) + "</strong><small>" + Ve(r[1]) + "</small></span>", o("workoutModal").appendChild(s), s;
  }
  function je(t) {
    t.classList.add("leaving"), setTimeout(() => t.remove(), 180);
  }
  function et(t, r, s, u) {
    (Pt || ft) && (ie(), Pt = null, kt());
    const m = t.getBoundingClientRect(), T = Le(r, qe[r]);
    T.setAttribute("aria-hidden", "true"), T.style.width = m.width + "px", T.style.height = m.height + "px", T.style.transform = "translate(" + m.left + "px," + m.top + "px)", t.classList.add("lifting");
    const I = Ge(t);
    return Fe({
      ghost: T,
      origin: m,
      sx: s,
      sy: u,
      scroller: I,
      column: t.closest(".exerciseScroller,.createFlow") || I,
      home: () => t.getBoundingClientRect(),
      onDrop: (W, le, ue) => {
        je(T), t.classList.remove("lifting"), Ee(r, W, le, ue);
      },
      onReturn: () => {
        je(T), t.classList.remove("lifting");
      }
    });
  }
  function Fe({ ghost: t, origin: r, sx: s, sy: u, scroller: m, column: T, home: I, onDrop: W, onReturn: le, rowLook: ue = !1 }) {
    var Rr;
    const ne = !L(), te = ((Rr = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Rr.offsetHeight) || 80, _e = s - r.left, Je = u - r.top, He = 44;
    let Te = s, Me = u, gt = r.left, bt = r.top, Oe = 0, wt = 0, Rt = !ne, st = null, ot = null, fn = -1, An = 0, Ut = null;
    const ki = () => ["warmupList", "strengthList", "cooldownList"].map((rt) => o(rt)).filter((rt) => rt && rt.getClientRects().length && !rt.closest("[hidden]")), Se = (rt) => {
      if (rt === st) return;
      st = rt, t.classList.toggle("overList", !!rt || ue);
      const Ht = rt ? rt.getBoundingClientRect().width : r.width;
      t.style.width = Ht + "px", t.style.height = (rt ? te : r.height) + "px";
    }, ct = (rt) => {
      rt.classList.add("leaving"), rt.style.height = "0px", rt.style.marginTop = "-8px", setTimeout(() => rt.remove(), ne ? 320 : 0);
    }, wn = (rt, Ht, Kt) => {
      if (ot && ot.parentNode === rt && fn === Kt || (ot && (ct(ot), ot = null, fn = -1), !rt)) return;
      const xn = document.createElement("div");
      xn.className = "dropSlot", rt.insertBefore(xn, Ht), ot = xn, fn = Kt, xn.getBoundingClientRect(), xn.style.height = te + "px", xn.style.marginTop = "0px";
    }, yn = () => {
      let rt = null, Ht = 1 / 0;
      for (const Ca of ki()) {
        const dt = Ca.getBoundingClientRect();
        if (Te < dt.left - 48 || Te > dt.right + 48) continue;
        const Tt = dt.top - 28, zt = dt.bottom + 28, Xn = Me < Tt ? Tt - Me : Me > zt ? Me - zt : 0;
        Xn < Ht && (Ht = Xn, rt = Ca);
      }
      const Kt = T == null ? void 0 : T.getBoundingClientRect(), $n = Kt && Te >= Kt.left && Te <= Kt.right && Me >= Kt.top && Me <= Kt.bottom || Ht === 0 ? rt : null;
      if ($n) {
        const Ca = [...$n.children].filter((Tt) => Tt.classList.contains("moveRow"));
        let dt = Ca.findIndex((Tt) => {
          const zt = Tt.getBoundingClientRect();
          return Me < zt.top + zt.height / 2;
        });
        dt < 0 && (dt = Ca.length), wn($n, Ca[dt] || null, dt);
      } else wn(null);
      Se($n);
    }, gl = () => {
      if (Ut) return Ut.aim();
      if (st) {
        const rt = st.getBoundingClientRect();
        let Ht = Me - te / 2;
        return ot && (Ht = Ht * 0.6 + ot.getBoundingClientRect().top * 0.4), { x: rt.left, y: Ht };
      }
      return { x: Te - _e, y: Me - Je };
    }, Dr = (rt, Ht, Kt, xn) => {
      t.style.transform = "translate(" + gt + "px," + bt + "px) rotate(" + rt + "deg) rotate(" + Ht + "rad) scale(" + Kt + "," + xn + ") rotate(" + -Ht + "rad)";
    }, vl = () => {
      if (An = requestAnimationFrame(vl), !Rt) {
        const dt = Te - s, Tt = Me - u, zt = Math.min(Math.hypot(dt, Tt) / He, 1);
        gt = r.left + dt * 0.35, bt = r.top + Tt * 0.35, Dr(0, Math.atan2(Tt, dt), 1 + 0.155 * zt, 1 - 0.1 * zt);
        return;
      }
      const rt = gl();
      if (!ne) {
        gt = rt.x, bt = rt.y, Dr(0, 0, 1, 1), Ut && (cancelAnimationFrame(An), Ut.done());
        return;
      }
      const Ht = Ut ? Ut.k : 0.17, Kt = Ut ? Ut.d : 0.7;
      Oe = (Oe + (rt.x - gt) * Ht) * Kt, wt = (wt + (rt.y - bt) * Ht) * Kt, gt += Oe, bt += wt;
      const xn = Math.hypot(Oe, wt), $n = Math.min(xn / 48, 1), Ca = st || Ut ? 0 : Math.max(-5, Math.min(5, Oe * 0.32));
      Dr(Ca, Math.atan2(wt, Oe), 1 + 0.1 * $n, 1 - 0.063 * $n), Ut && xn < 0.15 && Math.hypot(rt.x - gt, rt.y - bt) < 0.6 && (cancelAnimationFrame(An), Ut.done());
    }, bl = setInterval(() => {
      if (!m || Ut) return;
      const rt = m.getBoundingClientRect(), Ht = 64, Kt = Me < rt.top + Ht ? -(rt.top + Ht - Me) / 4 : Me > rt.bottom - Ht ? (Me - (rt.bottom - Ht)) / 4 : 0;
      Kt && (m.scrollTop += Math.max(-18, Math.min(18, Kt)), yn());
    }, 30);
    An = requestAnimationFrame(vl);
    let ws = !1;
    const Mi = (rt, Ht) => {
      if (ws) return;
      ws = !0, cancelAnimationFrame(An);
      const Kt = ot ? ot.offsetHeight : te;
      !rt && ot && (ot.remove(), ot = null), rt ? W(rt, Ht, Kt) : le();
    };
    return {
      move(rt, Ht) {
        Te = rt, Me = Ht, !Rt && Math.hypot(Te - s, Me - u) > He && (Rt = !0, Oe = (Te - s) * 0.085, wt = (Me - u) * 0.085), Rt && yn();
      },
      drop(rt) {
        clearInterval(bl);
        const Ht = st, Kt = fn;
        if (!rt && Ht && ot) {
          const xn = ot;
          Ut = { k: 0.24, d: 0.62, aim: () => {
            const $n = xn.getBoundingClientRect();
            return { x: $n.left, y: $n.top };
          }, done: () => Mi(Ht, Kt) }, setTimeout(() => Mi(Ht, Kt), 650), ne || (cancelAnimationFrame(An), Mi(Ht, Kt));
          return;
        }
        wn(null), Se(null), Ut = { k: 0.2, d: 0.66, aim: () => {
          const xn = I();
          return { x: xn.left, y: xn.top };
        }, done: () => Mi(null) }, setTimeout(() => Mi(null), 650), ne || (cancelAnimationFrame(An), Mi(null));
      }
    };
  }
  function at(t, r) {
    let s = !1;
    t.addEventListener("click", (u) => {
      if (s) {
        s = !1, u.preventDefault();
        return;
      }
      if (Ot()) {
        Mt(r);
        return;
      }
      const m = o("strengthList"), T = Ee(r, m, pe(m).arr.length, 0);
      T == null || T.scrollIntoView({ block: "nearest", behavior: L() ? "auto" : "smooth" });
    }), t.addEventListener("pointerdown", (u) => {
      if (u.button !== void 0 && u.button !== 0) return;
      const m = u.pointerId, T = u.clientX, I = u.clientY;
      let W = null, le = !1;
      try {
        t.setPointerCapture(m);
      } catch {
      }
      const ue = (Me) => {
        if (Me.pointerId === m) {
          if (Me.pointerType === "mouse" && Me.buttons === 0) {
            Te(!1);
            return;
          }
          if (!W) {
            if (Math.hypot(Me.clientX - T, Me.clientY - I) < 6) return;
            W = et(t, r, T, I);
          }
          W.move(Me.clientX, Me.clientY);
        }
      }, ne = (Me) => {
        Me.pointerId === m && Te(!1);
      }, te = (Me) => {
        Me.pointerId === m && Te(!0);
      }, _e = () => Te(!1), Je = () => Te(!0), He = (Me) => {
        Me.key === "Escape" && W && (Me.preventDefault(), Me.stopPropagation(), Te(!0));
      };
      function Te(Me) {
        if (!le && (le = !0, window.removeEventListener("pointermove", ue, !0), window.removeEventListener("pointerup", ne, !0), window.removeEventListener("pointercancel", te, !0), window.removeEventListener("keydown", He, !0), window.removeEventListener("blur", Je), t.removeEventListener("lostpointercapture", _e), W)) {
          const gt = W;
          W = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), gt.drop(Me);
        }
      }
      window.addEventListener("pointermove", ue, !0), window.addEventListener("pointerup", ne, !0), window.addEventListener("pointercancel", te, !0), window.addEventListener("keydown", He, !0), window.addEventListener("blur", Je), t.addEventListener("lostpointercapture", _e);
    });
  }
  const tt = (Gc = window.matchMedia) == null ? void 0 : Gc.call(window, "(max-width: 620px)");
  function Ot() {
    var t;
    return !!((t = window.matchMedia) != null && t.call(window, "(max-width: 620px)").matches);
  }
  const Ne = (t) => t.charAt(0).toUpperCase() + t.slice(1), It = (t) => t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "movement";
  let qt = null, vt = null;
  function ia(t, r, s, u) {
    sn(), o("sheetTitle").textContent = t;
    const m = o("sheetBody");
    m.innerHTML = "", m.appendChild(r), qt = s || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !m.contains(r)) return;
      const T = u ? m.querySelector("input[data-f=url],input[data-f=name]") : m.querySelector("button,input,select");
      T == null || T.focus({ preventScroll: !0 });
    }, L() ? 0 : 360);
  }
  function sn() {
    const t = o("sheet");
    if (!t.classList.contains("open")) return;
    t.classList.remove("open"), o("sheetScrim").classList.remove("open"), t.setAttribute("aria-hidden", "true"), t.contains(a.activeElement) && a.activeElement.blur();
    const r = qt;
    qt = null, r == null || r(), setTimeout(ma, 0);
  }
  o("sheetScrim").addEventListener("click", sn), o("sheet").addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), sn());
  });
  function Oo(t, r) {
    const s = fo(t, r.indexOf(t), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        sn(), kt(), Gt(Ne(It(t)) + " updated");
      },
      onCancel: sn,
      onHide() {
        t.hidden = !t.hidden, sn(), kt(), Gt((t.hidden ? "Hidden: " : "Showing: ") + t.name);
      },
      onRemove() {
        sn();
        const u = r.indexOf(t);
        u < 0 || (r.splice(u, 1), kt(), Gt("Removed " + t.name, { label: "Undo", run: () => {
          r.splice(Math.min(u, r.length), 0, t), kt();
        } }));
      }
    });
    ia("Edit " + It(t), s, null, !1);
  }
  function ra() {
    const t = document.createElement("div");
    t.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, s, u, m]) => {
      const T = document.createElement("button");
      T.type = "button", T.className = "sheetChoice", T.innerHTML = '<span class="timeIcon" aria-hidden="true">' + Bt(s) + "</span><span><strong>" + u + "</strong><small>" + m + "</small></span>", T.addEventListener("click", () => Mt(r)), t.appendChild(T);
    }), ia("Add to the move", t, null, !1);
  }
  function Mt(t) {
    vt && mo();
    const r = we(t, o("strengthList")), s = fo(r, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        sn(), Pn(r, t);
      },
      onCancel: sn
    });
    ia("New " + It(r), s, null, !0);
  }
  const Bn = o("workoutModal").querySelector(".modalStatic"), Fa = { parent: Bn.parentNode, next: Bn.nextSibling };
  function qo() {
    const t = document.createElement("div");
    t.className = "sheetSetup", t.appendChild(Bn);
    const r = document.createElement("button");
    r.type = "button", r.className = "primary sheetDone", r.textContent = "Done", r.addEventListener("click", sn), t.appendChild(r), ia("Setup", t, () => {
      Fa.parent.insertBefore(Bn, Fa.next), Ka();
    }, !1);
  }
  function Ka() {
    var r, s;
    const t = o("setupSummaryName");
    t && (t.textContent = (((r = o("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((s = Ue[yt]) == null ? void 0 : s.name) || "Move", o("setupSummaryMeta").textContent = pt.textContent);
  }
  o("setupSummary").addEventListener("click", qo), o("addFab").addEventListener("click", ra);
  function Ei() {
    const t = o("strengthList");
    return Ge(t) || t.closest(".exerciseScroller");
  }
  function $a() {
    const t = o("strengthList").getBoundingClientRect(), r = (Ei() || o("strengthList")).getBoundingClientRect(), s = (vt == null ? void 0 : vt.ghost.offsetHeight) || 64;
    return { left: t.left, top: Math.max(r.top + 12, Math.min(r.bottom - s - 96, r.top + r.height * 0.55 - s / 2)), width: t.width, height: s };
  }
  function Pn(t, r) {
    var W;
    const s = Le(r, [t.name || qe[r][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (t.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const u = document.createElement("span");
    u.className = "addGhostActions", u.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Ve(t.name) + '">✕</button>', s.appendChild(u), vt = { item: t, type: r, ghost: s };
    const m = ((W = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : W.offsetHeight) || 64;
    s.style.width = o("strengthList").getBoundingClientRect().width + "px", s.style.height = m + "px";
    const T = $a(), I = Dn.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + T.left + "px," + I + "px)", s.getBoundingClientRect(), L() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + T.left + "px," + T.top + "px)", u.querySelector("[data-a=end]").addEventListener("click", mo), u.querySelector("[data-a=discard]").addEventListener("click", Ol), s.addEventListener("pointerdown", Or);
  }
  function Or(t) {
    if (!vt || t.target.closest("button") || t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const { item: r, ghost: s } = vt, u = t.pointerId;
    try {
      s.setPointerCapture(u);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const m = s.getBoundingClientRect(), T = Ei(), I = Fe({
      ghost: s,
      origin: { left: m.left, top: m.top, width: m.width, height: m.height },
      sx: t.clientX,
      sy: t.clientY,
      scroller: T,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || T,
      rowLook: !0,
      home: $a,
      onDrop: (Te, Me, gt) => {
        vt = null, je(s), Ts(r, Te, Me, gt);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let W = !1;
    const le = (Te) => {
      if (Te.pointerId === u) {
        if (Te.pointerType === "mouse" && Te.buttons === 0) {
          He(!1);
          return;
        }
        I.move(Te.clientX, Te.clientY);
      }
    }, ue = (Te) => {
      Te.pointerId === u && He(!1);
    }, ne = (Te) => {
      Te.pointerId === u && He(!0);
    }, te = () => He(!1), _e = () => He(!0), Je = (Te) => {
      Te.key === "Escape" && (Te.preventDefault(), He(!0));
    };
    function He(Te) {
      W || (W = !0, window.removeEventListener("pointermove", le, !0), window.removeEventListener("pointerup", ue, !0), window.removeEventListener("pointercancel", ne, !0), window.removeEventListener("keydown", Je, !0), window.removeEventListener("blur", _e), s.removeEventListener("lostpointercapture", te), I.drop(Te));
    }
    window.addEventListener("pointermove", le, !0), window.addEventListener("pointerup", ue, !0), window.addEventListener("pointercancel", ne, !0), window.addEventListener("keydown", Je, !0), window.addEventListener("blur", _e), s.addEventListener("lostpointercapture", te);
  }
  function Ts(t, r, s, u) {
    const m = pe(r);
    t.kind !== "rest" && t.kind !== "video" && (t.kind = m.kind, m.group && (!t.group || t.group === "Movement") && (t.group = m.group)), m.arr.splice(Math.max(0, Math.min(s, m.arr.length)), 0, t), Be(r.closest(".exerciseScroller,.createStepSlot") || r, () => kt()), ke(r.querySelector('.moveRow[data-id="' + t.id + '"]'), u), Gt(Ne(It(t)) + " added");
  }
  function mo() {
    var u;
    if (!vt) return;
    const { item: t, ghost: r } = vt;
    vt = null, je(r);
    const s = o("strengthList");
    Ts(t, s, pe(s).arr.length, 0), (u = s.querySelector('.moveRow[data-id="' + t.id + '"]')) == null || u.scrollIntoView({ block: "nearest", behavior: L() ? "auto" : "smooth" });
  }
  function Ol() {
    if (!vt) return;
    const t = vt.ghost;
    vt = null, je(t), Gt("Discarded");
  }
  function go() {
    vt && (vt.ghost.remove(), vt = null);
  }
  window.addEventListener("resize", () => {
    if (vt != null && vt.ghost.classList.contains("hovering")) {
      const t = $a();
      vt.ghost.style.width = t.width + "px", vt.ghost.style.transform = "translate(" + t.left + "px," + t.top + "px)";
    }
  }), (Uc = tt == null ? void 0 : tt.addEventListener) == null || Uc.call(tt, "change", () => {
    sn(), vt && !Ot() && mo(), $();
  });
  {
    const t = o("workoutModal").querySelector(".modal");
    t.addEventListener("scroll", () => {
      (t.scrollTop || t.scrollLeft) && (t.scrollTop = 0, t.scrollLeft = 0);
    });
  }
  function ma() {
    const t = o("workoutModal"), r = window.visualViewport;
    if (!t.classList.contains("open") || !Ot()) {
      Wo();
      return;
    }
    const s = r ? r.offsetTop : 0, u = r ? r.offsetLeft : 0, m = r ? r.width : window.innerWidth, T = r ? r.height : window.innerHeight;
    Object.assign(t.style, { right: "auto", bottom: "auto", width: m + "px", height: T + "px", top: s + "px", left: u + "px" });
    const I = t.getBoundingClientRect();
    Math.abs(I.top - s) > 0.5 && (t.style.top = 2 * s - I.top + "px"), Math.abs(I.left - u) > 0.5 && (t.style.left = 2 * u - I.left + "px");
  }
  function Wo() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((t) => o("workoutModal").style.removeProperty(t));
  }
  (Yc = window.visualViewport) == null || Yc.addEventListener("resize", ma), (Zc = window.visualViewport) == null || Zc.addEventListener("scroll", ma), window.addEventListener("resize", ma), window.addEventListener("scroll", ma, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(ma, 250));
  function dr() {
    it.length > 0;
    const t = o("addMovementBtn"), r = o("addRestBtn");
    t && (t.innerHTML = Ha + "<span>Add movement</span>"), r && (r.innerHTML = Ha + "<span>Add rest</span>");
    const s = o("addVideoBtn");
    s && (s.innerHTML = Ha + "<span>Add video</span>");
  }
  function jo() {
    const t = o("useGlobalTiming").checked, r = o("addMovementDuration"), s = o("addMovementUnit");
    r.disabled = t, s.disabled = t, r.parentElement.style.opacity = t ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + Vt(C.value);
    const u = o("useGlobalRestTiming").checked, m = o("addRestDuration"), T = o("addRestUnit");
    m.disabled = u, T.disabled = u, m.parentElement.style.opacity = u ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + Vt(H.value);
  }
  let Ls = "movement";
  function ql(t) {
    Ls = t;
    const r = o("movementFields"), s = o("restFields");
    r.hidden = t !== "movement", s.hidden = t !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), jo();
  }
  function ur() {
    Ue[yt];
    const t = mt ? !0 : o("useGlobalTiming").checked, r = t ? Number(C.value) : La(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), s = mt ? !0 : o("useGlobalRestTiming").checked, u = s ? Number(H.value) : La(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (Ls === "rest") {
      const m = o("addRestTitle").value.trim() || "Rest", T = o("addRestGroup").value.trim() || "Rest";
      it.push({
        id: "rest-" + Date.now(),
        name: m,
        group: T,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, u || Number(H.value))
      }), kt(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", Gt("Rest added"), mt && (B("movements"), be());
    } else {
      const m = o("addMovementInput").value.trim();
      if (!m) return;
      const T = o("addMovementGroup").value.trim() || "Movement";
      it.push({
        id: "movement-" + Date.now(),
        name: m,
        group: T,
        kind: "work",
        hidden: !1,
        useGlobalTiming: t,
        duration: Math.max(5, r || Number(C.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", kt(), o("movementCreator").hidden = !0, Gt("Movement added"), mt && (B("movements"), be());
    }
    dr();
  }
  let qr = null;
  function Gt(t, r) {
    const s = o("toast");
    s.innerHTML = "";
    const u = document.createElement("span");
    if (u.textContent = t, s.appendChild(u), r) {
      const m = document.createElement("button");
      m.type = "button", m.className = "toastAction", m.textContent = r.label, m.addEventListener("click", () => {
        r.run(), s.classList.remove("show", "withAction"), clearTimeout(qr);
      }), s.appendChild(m);
    }
    s.classList.toggle("withAction", !!r), s.classList.add("show"), clearTimeout(qr), qr = setTimeout(() => s.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const As = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], _s = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Es(t) {
    return Math.max(0, Math.min(5, Math.floor(Number(t) / 100 * 6)));
  }
  function zo(t, r) {
    return As[Es(r)];
  }
  function Wl(t) {
    return _s[Es(t)];
  }
  function Ft(t) {
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  function Oa() {
    return { morning: nt().morningTime || "08:00", evening: nt().eveningTime || "19:00" };
  }
  function Vo(t) {
    const [r, s] = String(t).split(":").map(Number);
    return (r || 0) * 60 + (s || 0);
  }
  function Di(t) {
    const r = Oa();
    return t.getHours() * 60 + t.getMinutes() >= Vo(r.evening) ? "evening" : "morning";
  }
  function En(t, r) {
    return ht.checkins.find((s) => s.date === t && s.slot === r);
  }
  function pr(t) {
    return !!(t && t.mood != null && t.energy != null);
  }
  function Ri() {
    const t = /* @__PURE__ */ new Date(), r = Ft(t), s = Di(t), u = Oa(), m = t.getHours() * 60 + t.getMinutes();
    return s === "morning" && m < Vo(u.morning) || pr(En(r, s)) ? null : s;
  }
  const qa = o("checkinModal"), ga = o("checkinTab"), jl = o("checkinBadge"), Xa = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function hr(t) {
    const { input: r, fill: s } = Xa[t];
    s.style.width = r.value + "%", r.setAttribute("aria-valuetext", zo(t, r.value));
  }
  Object.keys(Xa).forEach((t) => Xa[t].input.addEventListener("input", () => hr(t)));
  let va = null;
  function Ds() {
    const t = Oa(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes();
    return s < Vo(t.morning) ? "Next check-in at " + t.morning : s < Vo(t.evening) ? "Next check-in at " + t.evening : "Next check-in tomorrow at " + t.morning;
  }
  function zl() {
    const t = Oa(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes(), u = (m, T) => {
      const [I, W] = m.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (T ? 1 : 0), I, W);
    };
    return s < Vo(t.morning) ? { date: u(t.morning), time: t.morning } : s < Vo(t.evening) ? { date: u(t.evening), time: t.evening } : { date: u(t.morning, !0), time: t.morning };
  }
  let Wr = null, Ni = null;
  function Rs() {
    if (Ri()) {
      fr(), ba();
      return;
    }
    const t = zl(), r = Math.max(0, Math.round((t.date - Date.now()) / 1e3)), s = Math.floor(r / 3600), u = Math.floor(r % 3600 / 60), m = r % 60;
    o("peekCountdown").textContent = s + ":" + String(u).padStart(2, "0") + ":" + String(m).padStart(2, "0"), o("peekAt").textContent = "Available at " + t.time;
  }
  function Ns() {
    Rs(), ga.classList.add("peek"), clearInterval(Ni), Ni = setInterval(Rs, 1e3), clearTimeout(Wr), Wr = setTimeout(fr, 6e3);
  }
  function fr() {
    ga.classList.remove("peek"), clearInterval(Ni), clearTimeout(Wr);
  }
  function jr() {
    const t = Ri();
    if (!t) {
      ga.classList.contains("peek") ? fr() : Ns();
      return;
    }
    va = { date: Ft(/* @__PURE__ */ new Date()), slot: t };
    const s = En(va.date, t), u = ht.checkins.find((m) => pr(m));
    Object.keys(Xa).forEach((m) => {
      Xa[m].input.value = (s == null ? void 0 : s[m]) ?? (u == null ? void 0 : u[m]) ?? 50, hr(m);
    }), o("checkinTitle").textContent = t === "morning" ? "Morning check-in" : "Evening check-in", qa.classList.add("open"), qa.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Xa.mood.input.focus());
  }
  function Bi() {
    qa.classList.remove("open"), qa.setAttribute("aria-hidden", "true"), va && (Pi = va.date + "-" + va.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Pi);
    } catch {
    }
    va = null, ba();
  }
  function Bs() {
    if (!va) return;
    if (pr(En(va.date, va.slot))) {
      Bi();
      return;
    }
    const { date: t, slot: r } = va;
    let s = En(t, r);
    s || (s = { date: t, slot: r }, ht.checkins.unshift(s), ht.checkins = ht.checkins.slice(0, 2e3)), s.mood = Number(Xa.mood.input.value), s.energy = Number(Xa.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), vn(), l.fire("checkin", { slot: r, mood: s.mood, energy: s.energy, mood_label: zo("mood", s.mood), energy_label: zo("energy", s.energy) }), Gt((r === "morning" ? "Morning" : "Evening") + " check-in saved"), Bi(), Go(), Uo(), Na(), Ma();
  }
  let Pi = "";
  try {
    Pi = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function ba() {
    const t = Ri();
    jl.hidden = !t, ga.hidden = !t, t || fr(), ga.classList.toggle("due", !!t), ga.setAttribute("aria-label", t ? (t === "morning" ? "Morning" : "Evening") + " check-in is due" : Ds()), ga.title = t ? "Check in now" : Ds();
  }
  function Ii() {
    ba();
    const t = Ri();
    !t || qa.classList.contains("open") || nt().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !De.home.classList.contains("active") || Dn.classList.contains("open") || Pi !== Ft(/* @__PURE__ */ new Date()) + "-" + t && jr());
  }
  ga.addEventListener("click", jr), o("checkinLater").addEventListener("click", Bi), o("checkinSave").addEventListener("click", Bs), qa.addEventListener("click", (t) => {
    t.target === qa && Bi();
  }), qa.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Bi());
  }), setInterval(Ii, 3e4);
  function Go() {
    const t = Ft(/* @__PURE__ */ new Date()), r = (s) => ht.checkins.find((u) => u.date === t && u[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, u]) => {
      const m = r(s);
      o(u).textContent = m ? zo(s, m[s]) : "—";
    });
  }
  function Uo() {
    const t = o("feelCard");
    if (!t) return;
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), u = [...Array(7)].map((ue, ne) => {
      const te = new Date(s.getFullYear(), s.getMonth(), s.getDate() + ne), _e = Ft(te), Je = ht.checkins.filter((Te) => Te.date === _e), He = (Te) => {
        const Me = Je.map((gt) => gt[Te]).filter((gt) => gt != null);
        return Me.length ? Me.reduce((gt, bt) => gt + bt, 0) / Me.length : null;
      };
      return { d: te, key: _e, mood: He("mood"), energy: He("energy"), count: Je.filter(pr).length, future: te > r && _e !== Ft(r) };
    }), m = (ue) => {
      const ne = u.map((te) => te[ue]).filter((te) => te != null);
      return ne.length ? ne.reduce((te, _e) => te + _e, 0) / ne.length : null;
    }, T = m("mood"), I = m("energy"), W = (ue, ne) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + ue + "</span><span>" + (ne == null ? "—" : Ve(zo("", ne))) + '</span></div><div class="feelTrack"><span style="width:' + (ne == null ? 0 : Math.max(4, ne)) + "%;background:" + (ne == null ? "transparent" : Wl(ne)) + '"></span></div></div>', le = u.filter((ue) => ue.mood != null && ue.energy != null).sort((ue, ne) => ne.mood + ne.energy - (ue.mood + ue.energy))[0];
    t.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (T == null ? "No check-ins yet" : Ve(zo("", (T + I) / 2))) + '</div><div class="weekCopy">' + (T == null ? "Your first check-in will appear here." : "on average this week" + (le ? " · best day " + Ve(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(le.d)) : "")) + '</div></div></div><div class="feelDays">' + u.map(
      (ue) => '<div class="weekChip feelDay' + (ue.future ? " future" : "") + (ue.key === Ft(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Ve(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(ue.d)) + "</strong>" + (ue.count >= 2 ? '<span class="weekTick">' + Bt("check") + "</span>" : '<span class="feelDots">' + "●".repeat(ue.count) + "</span>") + "</div>" + W("Mood", ue.mood) + W("Energy", ue.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Yo = o("upcomingCountSetting");
  Yo.addEventListener("change", () => {
    zn = Yo.value === "all" ? "all" : Number(Yo.value), zs();
  });
  const Hi = o("tempoRevealBtn"), zr = o("tempoExperiment"), Aa = o("tempoQuad"), Zo = o("tempoDot"), Vl = o("tempoEstimate"), Fi = o("tempoReadout");
  let vo = { x: 0.5, y: 0.5 }, Oi = !1, mr = { total: 20, work: 45, rest: 15 };
  function Ja(t, r, s, u) {
    const m = Math.max(r, Math.min(s, t));
    return Math.round((m - r) / u) * u + r;
  }
  function Ps(t, r) {
    const s = (t - 0.5) * 2, u = (r - 0.5) * 2, m = Ja(
      mr.total + s * 5 + u * 8,
      Number(A.min),
      Number(A.max),
      Number(A.step)
    ), T = Ja(
      mr.work + s * 10 + u * 8,
      Number(C.min),
      Number(C.max),
      Number(C.step)
    ), I = Ja(
      mr.rest + s * 6 + u * 6,
      Number(H.min),
      Number(H.max),
      Number(H.step)
    );
    return A.value = m, C.value = T, H.value = I, j.textContent = T + " sec", se.textContent = I + " sec", Ta(), { total: m, work: T, rest: I };
  }
  function gr(t, r) {
    const s = t < 0.34 ? "Low" : t > 0.66 ? "Hard" : "Medium", u = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", m = Ps(t, r);
    Fi.textContent = s + " + " + u, Vl.textContent = m.total + " min", Aa.setAttribute("aria-valuetext", s + " and " + u + ", estimated " + m.total + " minutes");
  }
  function vr(t) {
    const r = Aa.getBoundingClientRect(), s = Math.max(0, Math.min(1, (t.clientX - r.left) / r.width)), u = Math.max(0, Math.min(1, (t.clientY - r.top) / r.height));
    vo = { x: s, y: u }, Zo.style.left = s * 100 + "%", Zo.style.top = u * 100 + "%", gr(s, u);
  }
  Hi.addEventListener("click", () => {
    const t = zr.hidden;
    zr.hidden = !t, Hi.setAttribute("aria-expanded", t ? "true" : "false"), Hi.textContent = t ? "Now close this" : "Don’t try this!", t && (mr = {
      total: Number(A.value),
      work: Number(C.value),
      rest: Number(H.value)
    }, vo = { x: 0.5, y: 0.5 }, Zo.style.left = "50%", Zo.style.top = "50%", gr(vo.x, vo.y));
  }), a.querySelectorAll("[data-feedback-rating]").forEach((t) => t.addEventListener("click", () => {
    Number(t.dataset.feedbackRating), a.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === t));
  }));
  const qi = o("testingFeedbackForm"), Vr = o("testingFeedbackThanks"), Gl = o("testingFeedbackAgain");
  qi.addEventListener("submit", (t) => {
    t.preventDefault(), qi.hidden = !0, Vr.hidden = !1, Gt("Feedback captured for prototype");
  }), Gl.addEventListener("click", (t) => {
    t.preventDefault(), qi.reset(), a.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), Vr.hidden = !0, qi.hidden = !1;
  }), Aa.addEventListener("pointerdown", (t) => {
    var r;
    Oi = !0, vr(t);
    try {
      (r = Aa.setPointerCapture) == null || r.call(Aa, t.pointerId);
    } catch {
    }
  }), Aa.addEventListener("pointermove", (t) => {
    Oi && vr(t);
  }), Aa.addEventListener("pointerup", (t) => {
    Oi && (Oi = !1, vr(t), kt());
  }), Aa.addEventListener("pointercancel", () => Oi = !1), Aa.addEventListener("keydown", (t) => {
    let { x: r, y: s } = vo, u = !0;
    t.key === "ArrowLeft" ? r -= 0.05 : t.key === "ArrowRight" ? r += 0.05 : t.key === "ArrowUp" ? s -= 0.05 : t.key === "ArrowDown" ? s += 0.05 : u = !1, u && (t.preventDefault(), r = Math.max(0, Math.min(1, r)), s = Math.max(0, Math.min(1, s)), vo = { x: r, y: s }, Zo.style.left = r * 100 + "%", Zo.style.top = s * 100 + "%", gr(r, s), kt());
  });
  const Dn = o("workoutModal");
  let Wi = null;
  function Ko(t) {
    return t.map((r) => ({ ...r }));
  }
  function br() {
    const t = Ue[yt];
    return {
      key: yt,
      profile: t ? JSON.parse(JSON.stringify(t)) : null,
      warmup: Ko(St),
      strength: Ko(it),
      cooldown: Ko(_n),
      total: Number(A.value),
      work: Number(C.value),
      rest: Number(H.value),
      rounds: Number(lt.value) || 1
    };
  }
  function Gr(t = !1) {
    mt = !!t, Pt = null, ft = null, sn(), go(), Wi = br(), o("moveEditorTitle").textContent = mt ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !mt, o("warmupRow").hidden = mt, o("deleteMoveOpen").hidden = mt;
    const r = o("createMoveOptions");
    r.hidden = !mt;
    {
      const s = Ue[yt];
      o("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), o("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (Yr(), mt) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const s = Ue[yt];
      ho((s == null ? void 0 : s.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, ql("movement"), dr(), jo(), zr.hidden = !0, Hi.setAttribute("aria-expanded", "false"), Hi.textContent = "Don’t try this!", Dn.classList.toggle("createMode", mt), Dn.querySelector(".modal").classList.toggle("createMode", mt), Dn.classList.add("open"), Dn.setAttribute("aria-hidden", "false"), ma(), mt && Ce();
  }
  function Ur() {
    const t = Ue[yt];
    return t != null && t.customSequence ? !!t.includeWarmup : !(t != null && t.warmupOff);
  }
  function Yr() {
    const t = Ur(), r = o("warmupSwitch");
    r.classList.toggle("on", t), r.setAttribute("aria-checked", String(t));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const t = Ue[yt];
    t && (t.customSequence ? (o("includeWarmupPreset").checked = !t.includeWarmup, Ho()) : (t.warmupOff = !t.warmupOff, kt()), Yr());
  });
  function wr() {
    sn(), go(), Wo(), ft = null, Pt = null, Dn.classList.contains("createMode") && O(), Dn.classList.remove("createMode"), Dn.querySelector(".modal").classList.remove("createMode"), Dn.classList.remove("open"), Dn.setAttribute("aria-hidden", "true");
  }
  function Is() {
    if (!Wi) return;
    const t = Wi;
    t.profile && (Ue[t.key] = JSON.parse(JSON.stringify(t.profile))), yt = t.key, St = Ko(t.warmup), it = Ko(t.strength), _n = Ko(t.cooldown), A.value = t.total, C.value = t.work, H.value = t.rest, lt.value = t.rounds || 1;
    const r = Ue[yt];
    if (r) {
      a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === yt));
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
    kt();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (mt) {
      const t = yt;
      delete Ue[t], mt = !1, Ct = null, Wn(ht.order.find((r) => Ue[r]) || Object.keys(Ue)[0]);
    } else
      Is();
    wr();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    sn(), vt && mo();
    const t = Ue[yt], r = f.value.trim() || "New move";
    if (t && (t.name = r), ie(), Pt = null, kt(), mt && t)
      Bo(yt, t), a.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === yt)), mt = !1, Ct = null, ht.order.includes(yt) || ht.order.push(yt), Gt("Move created");
    else {
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const u = s.querySelector(".workoutName");
        u && (u.textContent = r);
        const m = s.querySelector(".panelCollapsedText");
        m && (m.textContent = r);
      }
      Gt("Move saved");
    }
    Wi = null, wr(), vn();
  }), Dn.addEventListener("click", (t) => {
    if (t.target === Dn) {
      if (mt) {
        const r = yt;
        delete Ue[r], mt = !1, Ct = null, Wn(ht.order.find((s) => Ue[s]) || Object.keys(Ue)[0]);
      } else
        Is();
      wr();
    }
  }), at(o("addMovementBtn"), "movement"), at(o("addRestBtn"), "rest"), at(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", jo), o("useGlobalRestTiming").addEventListener("change", jo), a.querySelectorAll(".createPresetBtn").forEach((t) => t.addEventListener("click", () => {
    ho(t.dataset.movePreset, !0), kt();
  })), o("includeWarmupPreset").addEventListener("change", Ho), o("includeCooldownPreset").addEventListener("change", Ho), o("includeWarmupPreset").addEventListener("change", be), o("includeCooldownPreset").addEventListener("change", be), f.addEventListener("input", be), f.addEventListener("input", Ka), o("confirmAddMovement").addEventListener("click", ur), o("confirmAddRest").addEventListener("click", ur), o("addMovementInput").addEventListener("keydown", (t) => {
    t.key === "Enter" && ur();
  });
  const $o = o("countdown"), Zr = o("countNum"), sa = o("countdownPixelCanvas");
  let Zt = null, Kr = "appear";
  class Ul {
    constructor(r, s, u, m, T, I, W) {
      this.width = r.width, this.height = r.height, this.ctx = s, this.x = u, this.y = m, this.color = T, this.speed = (Math.random() * 0.8 + 0.1) * I, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = W, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Xo = [], Qa = 1, Jo = 1;
  function bo() {
    const t = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(t) && t > 0 ? t : 1;
  }
  function Yl() {
    var ue;
    if (!sa) return;
    const t = bo(), r = Math.max(1, window.innerWidth / t), s = Math.max(1, window.innerHeight / t);
    Qa = r, Jo = s;
    const u = Math.min(window.devicePixelRatio || 1, 2);
    sa.width = Math.floor(r * u), sa.height = Math.floor(s * u), sa.style.width = r + "px", sa.style.height = s + "px";
    const m = sa.getContext("2d");
    m.setTransform(u, 0, 0, u, 0, 0);
    const T = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], I = 12, W = (ue = window.matchMedia) == null ? void 0 : ue.call(window, "(prefers-reduced-motion: reduce)").matches, le = W ? 0 : 0.055;
    Xo = [];
    for (let ne = 0; ne < r; ne += I)
      for (let te = 0; te < s; te += I) {
        const _e = ne - r / 2, Je = te - s / 2, He = Math.sqrt(_e * _e + Je * Je), Te = W ? 0 : Math.random() * 75 + He * 0.05, Me = new Ul({ width: r, height: s }, m, ne, te, T[Math.floor(Math.random() * T.length)], le, Te);
        Me.maxSizeInteger = 4, Me.maxSize = Math.random() * 3.2 + 0.8, Me.sizeStep = 0.35 + Math.random() * 0.45, Xo.push(Me);
      }
  }
  function Hs(t) {
    cancelAnimationFrame(Zt), Kr = t;
    const r = sa == null ? void 0 : sa.getContext("2d");
    if (!r) return;
    function s() {
      r.clearRect(0, 0, Qa, Jo);
      let u = !0;
      Xo.forEach((m) => {
        m[Kr](), m.isIdle || (u = !1);
      }), Kr === "disappear" && u || (Zt = requestAnimationFrame(s));
    }
    Zt = requestAnimationFrame(s);
  }
  function yr() {
    cancelAnimationFrame(Zt), Yl(), Hs("appear"), setTimeout(() => Hs("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    $o.classList.contains("active") && yr();
  });
  const ji = o("pixelTrailCanvas"), Qo = ji.getContext("2d");
  let la = !0, Rn = 0.7, ei = 600, zi = [], un = null, Lt = { x: 0, y: 0, ready: !1 };
  function wa() {
    const t = d.getBoundingClientRect(), r = bo(), s = Math.min(window.devicePixelRatio || 1, 2), u = Math.max(1, t.width / r), m = Math.max(1, t.height / r);
    ji.width = Math.max(1, Math.floor(u * s)), ji.height = Math.max(1, Math.floor(m * s)), ji.style.width = u + "px", ji.style.height = m + "px", Qo.setTransform(s, 0, 0, s, 0, 0);
  }
  function $r(t, r) {
    if (!la) return;
    const s = performance.now();
    Lt.ready || (Lt = { x: t, y: r, ready: !0 });
    const u = 7;
    for (let m = 1; m <= u; m++) {
      const T = m / u;
      zi.push({
        x: Lt.x + (t - Lt.x) * T,
        y: Lt.y + (r - Lt.y) * T,
        born: s - (u - m) * 10
      });
    }
    Lt = { x: t, y: r, ready: !0 };
  }
  function _a(t) {
    if (un = null, !g) return;
    if (!De.workout.classList.contains("active")) {
      un = requestAnimationFrame(_a);
      return;
    }
    const r = d.getBoundingClientRect(), s = bo();
    Qo.clearRect(0, 0, r.width / s, r.height / s), la && (zi = zi.filter((m) => t - m.born < ei), Qo.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", zi.forEach((m) => {
      const T = (t - m.born) / ei, I = (1 - T) * Rn, W = Math.round(m.x / 14) * 14, le = Math.round(m.y / 14) * 14;
      Qo.globalAlpha = Math.max(0, I);
      const ue = 2 + 5 * (1 - T) * Rn;
      Qo.fillRect(W - ue / 2, le - ue / 2, ue, ue);
    }), Qo.globalAlpha = 1), un = requestAnimationFrame(_a);
  }
  d.addEventListener("pointermove", (t) => {
    const r = d.getBoundingClientRect(), s = bo();
    $r((t.clientX - r.left) / s, (t.clientY - r.top) / s);
  }), d.addEventListener("pointerleave", () => Lt.ready = !1), new ResizeObserver(wa).observe(d), wa(), un = requestAnimationFrame(_a);
  const ya = o("movementRippleCanvas"), Gn = ya.getContext("2d");
  let ca = !0, da = null, $t = performance.now();
  function Vi() {
    const t = ya.parentElement.getBoundingClientRect(), r = bo(), s = Math.max(1, t.width / r), u = Math.max(1, t.height / r), m = Math.min(window.devicePixelRatio || 1, 2);
    ya.width = Math.max(1, Math.floor(s * m)), ya.height = Math.max(1, Math.floor(u * m)), ya.style.width = s + "px", ya.style.height = u + "px", Gn.setTransform(m, 0, 0, m, 0, 0);
  }
  function ti() {
    var t;
    return on || ((t = ze[Xe]) == null ? void 0 : t.kind) === "rest";
  }
  function Fs() {
    const t = ze[Xe];
    return ti() ? 2200 : t ? t.kind === "warmup" || t.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Gi(t) {
    if (da = null, !g) return;
    if (!De.workout.classList.contains("active")) {
      da = requestAnimationFrame(Gi);
      return;
    }
    const r = ya.parentElement.getBoundingClientRect(), s = bo(), u = Math.max(1, r.width / s), m = Math.max(1, r.height / s);
    if (Gn.clearRect(0, 0, u, m), ca) {
      const T = Fs(), I = (t - $t) % T / T, W = 15, le = Math.max(8, Math.round(W * m / Math.max(1, u))), ue = u / (W + 1), ne = m / (le + 1), te = u * 0.5, _e = m * 0.52, Je = Math.hypot(te, _e), Te = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let Me = 1; Me <= le; Me++)
        for (let gt = 1; gt <= W; gt++) {
          const bt = gt * ue, Oe = Me * ne, wt = Math.hypot(bt - te, Oe - _e) / Je, Rt = ti(), st = Rt ? Math.exp(-Math.pow((wt - (I * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, ot = Math.exp(-Math.pow((wt - I * 1.25) * 7, 2)), fn = Rt ? st : ot, An = Rt ? 0.5 + 0.5 * Math.sin(I * Math.PI * 2 - wt * 3) ** 2 : 0.35 + 0.65 * Math.sin(I * Math.PI * 2 - wt * 5) ** 2, Ut = Rt ? 1.4 + fn * 4.2 * An : 1.2 + fn * 5 * An;
          Gn.beginPath(), Gn.arc(bt, Oe, Ut, 0, Math.PI * 2), Gn.fillStyle = `rgba(${Te},${Rt ? 0.08 + fn * 0.48 : 0.05 + fn * 0.55})`, Gn.fill();
        }
    }
    da = requestAnimationFrame(Gi);
  }
  new ResizeObserver(Vi).observe(ya.parentElement), Vi(), da = requestAnimationFrame(Gi);
  const ni = o("exerciseTitle"), Ea = o("exerciseMeta"), Xr = o("stepLabel"), xr = o("digits"), wo = o("fill"), pn = o("progress"), ai = o("pause"), Os = o("nextName"), qs = o("nextMeta"), Jr = o("nextIcon"), oi = o("skipNextSession");
  let Un = null;
  function an(t) {
    for (let r = Math.max(0, t); r < ze.length; r++)
      if (!ze[r].sessionHidden) return r;
    return -1;
  }
  function yo() {
    const t = ze[Xe];
    if (!t) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (on) {
      const u = an(Xe + 1), m = u >= 0 ? ze[u] : null;
      return m ? { name: m.name, meta: Yi(m), icon: Ui(m) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (t.rest > 0) return { name: "Rest", meta: t.rest + " sec · " + (t.roundBreakAfter ? "round " + (t.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = an(Xe + 1), s = r >= 0 ? ze[r] : null;
    return s ? { name: s.name, meta: Yi(s), icon: Ui(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Zl() {
    if (!ze[Xe]) return ze.length;
    const r = an(Xe + 1);
    return r < 0 ? ze.length : r + 1;
  }
  function Ui(t) {
    return t.kind === "video" ? "play" : "clock";
  }
  function Yi(t) {
    return t.kind === "video" ? "YouTube · " + Wt(t.duration) : t.group + " · " + t.duration + " sec";
  }
  function Zi() {
    return ze.length && ze[ze.length - 1].round || 1;
  }
  function Ws(t) {
    const r = ze[t];
    if (!r) return "";
    const s = Zi();
    if (s <= 1) return "Step " + (t + 1) + " of " + ze.length;
    if (r.roundBreak) return "Round " + r.round + " of " + s + " · Rest";
    const u = ze.filter((m) => m.round === r.round && !m.roundBreak).length;
    return "Round " + r.round + " of " + s + " · Step " + (r.roundIndex + 1) + " of " + u;
  }
  function js() {
    return pn.querySelector('[data-step="' + Xe + '"]');
  }
  function Qr() {
    ze[Xe] && Number(pn.dataset.round) !== (ze[Xe].round || 1) && si(), [...pn.children].forEach((t) => {
      const r = Number(t.dataset.step);
      t.classList.toggle("done", r < Xe), t.classList.toggle("active", r === Xe), t.classList.toggle("rewindable", r <= Xe), t.disabled = r > Xe, r === Xe && t.style.setProperty("--segment-progress", "0%");
    }), ze[Xe] && (Xr.textContent = Ws(Xe), no());
  }
  function xa(t) {
    const r = ze.indexOf(t);
    r < 0 || r <= Xe || (t.sessionHidden = !t.sessionHidden, xo(), Gt((t.sessionHidden ? "Hidden " : "Included ") + t.name + " for this session"));
  }
  function zs() {
    const t = o("upcomingList");
    if (!t) return;
    t.innerHTML = "";
    const r = Zl(), s = ze.slice(r);
    (zn === "all" ? s : s.slice(0, Math.max(1, Number(zn) || 1))).forEach((m) => {
      const T = document.createElement("section");
      T.className = "upcomingCard" + (m.sessionHidden ? " sessionHidden" : "") + (Ra(m) ? " noMeta" : ""), T.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Bt(Ui(m)) + '</div><div><div class="upcomingName">' + Ve(m.name) + '</div><div class="upcomingMeta">' + Ve(Yi(m)) + (Zi() > 1 ? " · round " + m.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (m.sessionHidden ? "Include this session" : "Skip this session") + "</button>", T.querySelector(".skipSessionBtn").addEventListener("click", () => xa(m)), t.appendChild(T);
    });
  }
  function xo() {
    var r;
    const t = yo();
    Os.textContent = t.name, qs.textContent = t.meta, Jr.innerHTML = Bt(t.icon);
    {
      const s = on ? ze[an(Xe + 1)] : ((r = ze[Xe]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : ze[an(Xe + 1)];
      a.querySelector(".nextCard").classList.toggle("noMeta", !!(s && Ra(s)));
    }
    if (Un = null, on) {
      const s = an(Xe + 1);
      s >= 0 && (Un = ze[s]);
    } else {
      const s = ze[Xe];
      if (s && s.rest > 0)
        Un = null;
      else {
        const u = an(Xe + 1);
        u >= 0 && (Un = ze[u]);
      }
    }
    oi && (oi.hidden = !Un, oi.textContent = Un != null && Un.sessionHidden ? "Include this session" : "Skip this session"), zs();
  }
  oi.addEventListener("click", () => {
    Un && (Un.sessionHidden = !Un.sessionHidden, Gt((Un.sessionHidden ? "Hidden " : "Included ") + Un.name + " for this session"), xo());
  });
  let Xt = null, ii = null;
  function Wa(t, r = {}) {
    const s = Ue[yt];
    l.fire(t, { move: (s == null ? void 0 : s.name) || "", move_id: yt, ...r });
  }
  function ri() {
    const t = Ue[yt];
    Xt = { key: yt, name: (t == null ? void 0 : t.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(ii), ii = setInterval(() => {
      Xt && !jn && Xt.active++;
    }, 1e3), Wa("started", { steps: ze.length });
  }
  function es(t) {
    if (clearInterval(ii), !Xt) return;
    const r = Xt;
    Xt = null, Wa(t ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (ht.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: t }), ht.history = ht.history.slice(0, 1e3), vn(), Na(), Ma());
  }
  function ts() {
    k("workout"), Vs();
    const t = an(0);
    t >= 0 && ze[t].kind === "video" && ss(ze[t]);
  }
  function ns() {
    Ki(), es(!1), clearInterval(tn), clearInterval(po), on = !1, ua(!1), o("app").classList.remove("resting"), $o.classList.remove("active"), k("home");
  }
  function Vs() {
    $o.classList.add("active");
    let t = 5;
    Zr.textContent = t, requestAnimationFrame(yr), clearInterval(po), po = setInterval(() => {
      t--, t > 0 ? (Zr.textContent = t, yr()) : (clearInterval(po), Zr.textContent = "GO", yr(), setTimeout(() => {
        $o.classList.remove("active"), cancelAnimationFrame(Zt), os();
      }, 650));
    }, 1e3);
  }
  function si() {
    var r;
    pn.innerHTML = "";
    const t = ((r = ze[Math.max(0, Xe)] || ze[0]) == null ? void 0 : r.round) || 1;
    pn.dataset.round = t, ze.forEach((s, u) => {
      if ((s.round || 1) !== t) return;
      const m = document.createElement("button");
      m.dataset.step = u, m.type = "button", m.className = "progressSegment", m.setAttribute("aria-label", "Go to " + s.name), m.addEventListener("click", () => {
        u <= Xe && as(u);
      }), pn.appendChild(m);
    });
  }
  function ua(t) {
    t = !!t;
    const r = jn !== t;
    if (jn = t, ai.textContent = t ? "Resume" : "Pause", o("app").classList.toggle("paused", t), Tn && At)
      try {
        t ? At.pauseVideo() : At.playVideo();
      } catch {
      }
    r && Xt && Wa(t ? "paused" : "resumed");
  }
  function as(t) {
    t < 0 || t >= ze.length || t > Xe || (clearInterval(tn), on = !1, o("app").classList.remove("resting"), Xe = t, ua(!1), ko(), tn = setInterval(Da, 1e3));
  }
  function os() {
    if (Xe = an(0), ua(!1), si(), Xe < 0) {
      ni.textContent = "No activities", Ea.textContent = "Open Edit and enable or add a movement", Ea.hidden = !1;
      return;
    }
    ri(), ko(), clearInterval(tn), tn = setInterval(Da, 1e3);
  }
  const is = o("videoStage"), eo = o("videoSound"), kr = 0, li = 1, Kl = 2;
  let Gs = 0, Dt = null, Nn = null, At = null, In = null, bn = 0, ka = !1, Tn = null, to = null;
  function rs() {
    var t;
    return (t = window.YT) != null && t.Player ? Promise.resolve(window.YT) : Dt || (Dt = new Promise((r, s) => {
      const u = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          u == null || u();
        } catch {
        }
      };
      const m = setInterval(() => {
        var I;
        (I = window.YT) != null && I.Player && (clearInterval(m), clearTimeout(T), r(window.YT));
      }, 100), T = setTimeout(() => {
        clearInterval(m), Dt = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const I = document.createElement("script");
        I.src = "https://www.youtube.com/iframe_api", I.async = !0, I.onerror = () => {
          clearInterval(m), clearTimeout(T), Dt = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(I);
      }
    }), Dt);
  }
  function Us() {
    return Nn || (Nn = rs().then((t) => new Promise((r) => {
      const s = document.createElement("div");
      o("videoFrame").appendChild(s), At = new t.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(At), onStateChange: (u) => ci(u.data), onError: (u) => Ys(u.data) }
      });
    })), Nn.catch(() => {
      Nn = null;
    }), Nn);
  }
  function ss(t) {
    !(t != null && t.videoId) || t.videoError || Us().then((r) => {
      Tn || In === t.videoId || (In = t.videoId, bn = Number(t.start) || 0, ka = !1, r.mute(), r.loadVideoById({ videoId: t.videoId, startSeconds: bn }));
    }).catch(() => {
    });
  }
  function Ln() {
    const t = an(Xe + 1);
    t >= 0 && ze[t].kind === "video" && ss(ze[t]);
  }
  function ci(t) {
    if (!Tn) {
      t === li && !ka && (ka = !0, At.pauseVideo(), At.seekTo(bn, !0));
      return;
    }
    is.classList.toggle("playing", t === li), ze[Xe] === Tn && performance.now() > Gs && (t === li && jn ? ua(!1) : t === Kl && !jn && ua(!0)), t === li && Xs(Tn.videoId, At.getDuration()) && vn(), t === kr && di();
  }
  function Ys(t) {
    const r = Tn;
    if (!r) {
      In = null;
      return;
    }
    t === 101 || t === 150 ? (Xl(r.videoId), Gt("That video can’t play outside YouTube, so it was skipped")) : Gt("The video couldn’t play, so it was skipped"), di();
  }
  function $l(t) {
    if (o("app").classList.add("videoStep"), eo.hidden = !0, Tn = t, clearTimeout(to), !t.videoId) {
      Gt("This video step has no link yet, so it was skipped"), setTimeout(() => di(), 0);
      return;
    }
    Us().then((r) => {
      if (Tn !== t) return;
      Gs = performance.now() + 1500;
      const s = Number(t.start) || 0;
      In !== t.videoId ? (In = t.videoId, bn = s, r.loadVideoById({ videoId: t.videoId, startSeconds: s })) : (r.seekTo(s, !0), r.playVideo()), r.unMute(), jn && r.pauseVideo(), to = setTimeout(() => {
        Tn !== t || jn || (r.getPlayerState() !== li ? (r.mute(), r.playVideo(), eo.hidden = !1) : r.isMuted() && (eo.hidden = !1));
      }, 1600);
    }).catch(() => {
      Tn === t && (Gt("YouTube didn’t load, so the video was skipped"), di());
    });
  }
  function Zs() {
    if (!o("app").classList.contains("videoStep")) return;
    const t = a.querySelector(".workGrid"), r = a.querySelector(".sessionControlRow"), s = t.getBoundingClientRect().top, u = (r == null ? void 0 : r.offsetHeight) || 42, m = window.innerHeight - s - 16 - u - 84;
    t.style.setProperty("--theater-h", Math.max(240, Math.round(m)) + "px");
  }
  window.addEventListener("resize", Zs);
  function Ki() {
    clearTimeout(to);
    const t = Tn;
    if (Tn = null, o("app").classList.remove("videoStep"), is.classList.remove("playing"), eo.hidden = !0, t && At) {
      try {
        At.pauseVideo();
      } catch {
      }
      In = null;
    }
  }
  function di() {
    const t = Tn;
    !t || ze[Xe] !== t || (Ki(), clearInterval(tn), ui(), tn = setInterval(Da, 1e3));
  }
  eo.addEventListener("click", () => {
    At && (At.unMute(), At.playVideo()), eo.hidden = !0;
  });
  function Ks(t) {
    var u;
    const r = Number(t.start) || 0;
    if (t.useVideoLength === !1) return r + (Number(t.duration) || 300);
    const s = At && Tn === t && Number((u = At.getDuration) == null ? void 0 : u.call(At)) || 0;
    return Number(t.end) || s || Number(t.videoDuration) || r + (Number(t.duration) || 300);
  }
  function $s(t, r) {
    const s = Ue[yt];
    [St, it, _n, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((u) => (Array.isArray(u) ? u : []).forEach((m) => {
      m && m.kind === "video" && m.videoId === t && r(m);
    }));
  }
  function Xs(t, r) {
    r = Math.round(Number(r) || 0);
    let s = !1;
    return t && r > 0 && $s(t, (u) => {
      u.videoDuration !== r && (u.videoDuration = r, s = !0);
    }), s;
  }
  function Xl(t) {
    $s(t, (r) => {
      r.videoError = "embed";
    }), vn();
  }
  function Hn(t) {
    const r = t.videoId;
    if (!r) return;
    const s = () => {
      Dn.classList.contains("open") ? Pt || kt() : (kt(), vn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((u) => u.ok ? u.json() : Promise.reject(u.status)).then((u) => {
      t.videoId === r && (t.videoTitle = u.title || "", t.autoName && u.title && (t.name = u.title), s());
    }).catch((u) => {
      t.videoId === r && u === 401 && (t.videoError = "embed", s());
    }), ls(r).then((u) => {
      Xs(r, u) && s();
    }).catch((u) => {
      u === "embed" && t.videoId === r && (t.videoError = "embed", s());
    });
  }
  function ls(t) {
    return rs().then((r) => new Promise((s, u) => {
      const m = document.createElement("div");
      m.className = "videoProbe", m.setAttribute("aria-hidden", "true");
      const T = document.createElement("div");
      m.appendChild(T), o("app").appendChild(m);
      let I = null, W = !1;
      const le = (te, _e) => {
        W || (W = !0, clearTimeout(ue), setTimeout(() => {
          try {
            I == null || I.destroy();
          } catch {
          }
          m.remove();
        }, 0), _e ? u(_e) : s(te));
      }, ue = setTimeout(() => le(0), 2e4), ne = () => {
        var _e;
        const te = Number((_e = I == null ? void 0 : I.getDuration) == null ? void 0 : _e.call(I)) || 0;
        return te > 0 && le(te), te > 0;
      };
      I = new r.Player(T, {
        width: 320,
        height: 180,
        videoId: t,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            ne() || (I.mute(), I.playVideo());
          },
          onStateChange: () => ne(),
          onError: (te) => le(0, te.data === 101 || te.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function ko() {
    on = !1;
    const t = ze[Xe];
    o("app").classList.toggle("resting", t.kind === "rest"), t.kind === "video" ? $l(t) : Ki(), Cn = t.duration, Ua = t.duration, ni.textContent = t.name, Ea.textContent = t.group, Ea.hidden = !0, Xr.textContent = Ws(Xe), Xt && Wa("step", { name: t.name, group: t.group, kind: t.kind, step: Xe + 1, of: ze.length, round: t.round || 1, rounds: Zi(), duration: t.duration }), xo(), Qr(), Ln(), t.kind === "video" && setTimeout(Zs, 0);
  }
  function no() {
    var m;
    const t = ((m = ze[Xe]) == null ? void 0 : m.kind) === "video" && !on, r = t && Cn >= 60;
    xr.textContent = r ? Wt(Cn) : Cn, xr.classList.toggle("long", r), t && (o("videoClock").textContent = Wt(Cn) + " left");
    const s = Cn / Ua * 100;
    wo.style.width = s + "%";
    const u = js();
    if (u && !on) {
      const T = 100 - s;
      u.style.setProperty("--segment-progress", T + "%");
    }
  }
  function Da() {
    var r, s;
    if (jn) return;
    const t = ze[Xe];
    if ((t == null ? void 0 : t.kind) === "video" && !on && Tn === t) {
      const u = Number((r = At == null ? void 0 : At.getCurrentTime) == null ? void 0 : r.call(At)) || 0, m = Number(t.start) || 0, T = Ks(t);
      Ua = Math.max(1, T - m), (u > m || ((s = At == null ? void 0 : At.getPlayerState) == null ? void 0 : s.call(At)) === li) && (Cn = Math.max(0, Math.ceil(T - u))), no(), u > m && u >= T - 0.25 && di();
      return;
    }
    Cn--, no(), Cn <= 0 && (t.rest > 0 ? Js(t.rest) : ui());
  }
  function Js(t) {
    var s;
    on = !0, o("app").classList.add("resting");
    const r = js();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(tn), Cn = t, Ua = t, Xt && Wa("rest", { duration: t }), ni.textContent = "Rest", Ea.textContent = (s = ze[Xe]) != null && s.roundBreakAfter ? "Round " + (ze[Xe].round + 1) + " next" : "Recovery", xo(), no(), tn = setInterval(() => {
      jn || (Cn--, no(), Cn <= 0 && (clearInterval(tn), ui(), tn = setInterval(Da, 1e3)));
    }, 1e3);
  }
  function ui() {
    on = !1;
    const t = an(Xe + 1);
    if (t >= 0)
      Xe = t, ko();
    else {
      clearInterval(tn), Ki(), ua(!1), o("app").classList.remove("resting"), ni.textContent = "Complete", Ea.textContent = "Move finished", Ea.hidden = !1, xr.textContent = "✓";
      {
        const r = Zi();
        Xr.textContent = r > 1 ? r + " rounds done" : ze.filter((s) => !s.roundBreak).length + " steps done";
      }
      es(!0);
      {
        const r = Tr(7).reduce((s, u) => s + u.minutes, 0);
        Ea.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      wo.style.width = "100%", xo();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    Jl(), ua(!1);
  });
  function Jl() {
    clearInterval(tn);
    const t = ze[Xe];
    if (on) {
      on = !1, o("app").classList.remove("resting");
      const s = an(Xe + 1);
      s >= 0 ? (Xe = s, ko(), tn = setInterval(Da, 1e3)) : ui();
      return;
    }
    if (t && t.rest > 0) {
      Js(t.rest);
      return;
    }
    const r = an(Xe + 1);
    r >= 0 ? (Xe = r, ko(), tn = setInterval(Da, 1e3)) : ui();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(tn), ua(!1), on) {
      const t = ze[Xe];
      Cn = t.rest, Ua = t.rest, ni.textContent = "Rest", Ea.textContent = "Recovery", o("app").classList.add("resting"), xo(), no();
    } else
      ko();
    tn = setInterval(on ? () => {
      jn || (Cn--, no(), Cn <= 0 && (clearInterval(tn), ui(), tn = setInterval(Da, 1e3)));
    } : Da, 1e3);
  });
  function pi(t, r, s, u) {
    let m = 0, T = null, I = !1;
    function W() {
      T && cancelAnimationFrame(T), T = null, m = 0, I = !1, r.style.width = "0%", t.classList.remove("holding");
    }
    function le(te) {
      if (!I) return;
      m || (m = te);
      const _e = Math.min(1, (te - m) / s);
      if (r.style.width = _e * 100 + "%", _e >= 1) {
        I = !1, T && cancelAnimationFrame(T), T = null, r.style.width = "100%", setTimeout(() => r.style.width = "0%", 90), u();
        return;
      }
      T = requestAnimationFrame(le);
    }
    function ue(te) {
      var _e;
      if (!(te && te.button !== void 0 && te.button !== 0)) {
        te == null || te.preventDefault(), W(), I = !0, t.classList.add("holding");
        try {
          (_e = t.setPointerCapture) == null || _e.call(t, te.pointerId);
        } catch {
        }
        T = requestAnimationFrame(le);
      }
    }
    function ne() {
      I && W();
    }
    t.addEventListener("pointerdown", ue), t.addEventListener("pointerup", ne), t.addEventListener("pointercancel", ne), t.addEventListener("lostpointercapture", ne), t.addEventListener("keydown", (te) => {
      (te.key === " " || te.key === "Enter") && !te.repeat && ue(te);
    }), t.addEventListener("keyup", (te) => {
      (te.key === " " || te.key === "Enter") && ne();
    });
  }
  const Qs = o("endWorkout");
  pi(Qs, o("holdEndFill"), 1500, ns);
  const hi = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    hi.classList.add("open"), hi.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    hi.classList.remove("open"), hi.setAttribute("aria-hidden", "true");
  });
  function el() {
    const t = yt, r = a.querySelector('.workoutPanel[data-workout="' + t + '"]');
    r && r.remove(), delete Ue[t], ht.order = ht.order.filter((u) => u !== t);
    let s = a.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const u = "custom-" + Date.now();
      Ue[u] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, ht.order.push(u), s = Bo(u, Ue[u]);
    }
    hi.classList.remove("open"), hi.setAttribute("aria-hidden", "true"), Wi = null, wr(), Wn(s.dataset.workout), vn(), Gt("Move deleted");
  }
  pi(o("deleteMoveYes"), o("deleteMoveFill"), 1500, el);
  const Mr = a.querySelector(".rubberTabs"), Mo = o("rubberIndicator");
  function fi(t, r = !0) {
    if (!t || !Mr || !Mo) return;
    const s = Mr.getBoundingClientRect(), u = t.getBoundingClientRect();
    Mo.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const m = bo();
    Mo.style.left = (u.left - s.left) / m + Mr.scrollLeft + "px", Mo.style.width = u.width / m + "px", r && (Mo.style.transform = "scaleX(1.08)", setTimeout(() => Mo.style.transform = "scaleX(1)", 180));
  }
  a.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => {
    t.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), a.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), a.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), t.classList.add("active"), o(t.dataset.pane).classList.add("active"), fi(t, !0);
  })), requestAnimationFrame(() => fi(a.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => fi(a.querySelector(".tab.active"), !1));
  const So = o("pixelTrailToggle"), cs = o("rippleToggle"), ao = o("trailStrength"), mi = o("trailLife");
  function Yn(t, r) {
    nt()[t] = r, vn();
  }
  const gi = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function ds(t) {
    return t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "g:" + String(t.group || "").trim().toLowerCase();
  }
  function Ra(t) {
    var r;
    return !!((r = nt().hideMeta) != null && r[ds(t)]);
  }
  function tl() {
    const t = /* @__PURE__ */ new Map(), r = (s, u, m) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const T = ds(s);
      let I = t.get(T);
      I || (I = { key: T, label: T === "rest" ? "Rest" : T === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, t.set(T, I)), I.kinds.add(T === "rest" ? "Rest" : T === "video" ? "Video" : u), I.moves.add(m), I.count++;
    };
    return Object.values(Ue).forEach((s) => {
      const u = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Qe)).forEach((m) => r(m, "Warm-up", u)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((m) => r(m, m.presetRole === "warmup" ? "Warm-up" : m.presetRole === "cooldown" ? "Cooldown" : "Movement", u)), (s.cooldown || (s.customSequence ? [] : Sn)).forEach((m) => r(m, "Cooldown", u));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, u]) => {
      t.has(s) || t.set(s, { key: s, label: u, kinds: /* @__PURE__ */ new Set([u]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...t.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, u) => gi.indexOf(s.kind) - gi.indexOf(u.kind) || s.label.localeCompare(u.label));
  }
  let $i = "all";
  function us() {
    const t = o("metaSearch").value.trim().toLowerCase();
    return tl().filter((r) => ($i === "all" || r.kind === $i) && (!t || r.label.toLowerCase().includes(t) || r.moves.some((s) => s.toLowerCase().includes(t))));
  }
  function hn() {
    const t = o("metaTableBody");
    if (!t) return;
    const r = nt().hideMeta || {}, s = us();
    t.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((m) => {
      const T = !r[m.key], I = m.count ? (m.moves.length > 2 ? m.moves.slice(0, 2).join(", ") + " + " + (m.moves.length - 2) + " more" : m.moves.join(", ")) + " · " + m.count + " step" + (m.count === 1 ? "" : "s") : "Not used yet", W = document.createElement("tr");
      W.className = T ? "" : "off", W.innerHTML = '<td><div class="metaType">' + Ve(m.label) + '</div><div class="metaSub">' + Ve(m.kind + " · " + I) + '</div></td><td class="metaKindCol">' + Ve(m.kind) + '</td><td class="metaUsedCol">' + Ve(I) + '</td><td class="metaSwitchCol"><button class="switch' + (T ? " on" : "") + '" type="button" role="switch" aria-checked="' + T + '" aria-label="Second line for ' + Ve(m.label) + ' on phones"></button></td>', W.querySelector(".switch").addEventListener("click", () => ps([m.key], T)), t.appendChild(W);
    });
    const u = s.filter((m) => r[m.key]).length;
    o("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (u ? " · " + u + " hidden on phones" : "") : "";
  }
  function ps(t, r) {
    const s = { ...nt().hideMeta || {} };
    t.forEach((u) => {
      r ? s[u] = !0 : delete s[u];
    }), Yn("hideMeta", s), hn(), $(), xo();
  }
  o("metaSearch").addEventListener("input", hn), o("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.addEventListener("click", () => {
    $i = t.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === t)), hn();
  })), o("metaHideAll").addEventListener("click", () => ps(us().map((t) => t.key), !0)), o("metaShowAll").addEventListener("click", () => ps(us().map((t) => t.key), !1));
  const oo = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...nt().toggles || {} };
  function nl() {
    a.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", oo[s.dataset.toggle] !== !1)), a.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, u]) => {
      o(u).hidden = oo[s] === !1;
    });
    const t = ["steps", "mood", "energyLevel"].some((s) => oo[s] !== !1);
    a.querySelector(".activityCard").hidden = !t, o("weatherCard").hidden = !0;
    const r = a.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !t), r.classList.toggle("noWeather", !0);
  }
  a.querySelectorAll("[data-toggle]").forEach((t) => t.addEventListener("click", () => {
    oo[t.dataset.toggle] = oo[t.dataset.toggle] === !1, nl(), Yn("toggles", { ...oo });
  })), nl();
  function Ql() {
    So.classList.toggle("on", la), cs.classList.toggle("on", ca), ao.value = Math.round(Rn * 100), o("trailStrengthValue").textContent = ao.value + "%", mi.value = ei, o("trailLifeValue").textContent = mi.value + " ms";
  }
  nt().trailEnabled !== void 0 && (la = nt().trailEnabled), nt().rippleEnabled !== void 0 && (ca = nt().rippleEnabled), nt().trailStrength !== void 0 && (Rn = nt().trailStrength), nt().trailMaxAge !== void 0 && (ei = nt().trailMaxAge), Ql(), So.addEventListener("click", () => {
    la = !la, So.classList.toggle("on", la), la || (zi = []), Yn("trailEnabled", la);
  }), cs.addEventListener("click", () => {
    ca = !ca, cs.classList.toggle("on", ca), Yn("rippleEnabled", ca);
  }), ao.addEventListener("input", () => {
    Rn = Number(ao.value) / 100, o("trailStrengthValue").textContent = ao.value + "%";
  }), ao.addEventListener("change", () => Yn("trailStrength", Rn)), mi.addEventListener("input", () => {
    ei = Number(mi.value), o("trailLifeValue").textContent = mi.value + " ms";
  }), mi.addEventListener("change", () => Yn("trailMaxAge", ei)), Yo.addEventListener("change", () => Yn("upcomingCount", zn));
  function al(t) {
    a.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === t));
    const r = t === "light";
    o("app").classList.toggle("light", r), l.setLight(r), To(a);
  }
  al(nt().theme || "dark"), a.querySelectorAll(".themeBtn").forEach((t) => t.addEventListener("click", () => {
    al(t.dataset.theme), Yn("theme", t.dataset.theme);
  }));
  const Ye = { steps: null, weather: null, ...nt().entities || {} };
  let ln = null, Co = {};
  function hs(t) {
    const r = Object.values(t).filter((W) => W.entity_id.startsWith("sensor.") || W.entity_id.startsWith("input_number.")), s = (W) => W.attributes.friendly_name || W.entity_id, u = r.filter((W) => /step/i.test(W.entity_id) || /step/i.test(s(W)) || ["steps", "step"].includes(String(W.attributes.unit_of_measurement || "").toLowerCase())), m = r.filter((W) => !u.includes(W)), T = (W, le) => s(W).localeCompare(s(le)), I = (W, le) => /health_steps/.test(le.entity_id) - /health_steps/.test(W.entity_id) || T(W, le);
    return { suggested: u.sort(I), rest: m.sort(T), label: s };
  }
  function ja(t) {
    const r = o("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: s, rest: u, label: m } = hs(t), T = (le) => '<option value="' + Ve(le.entity_id) + '">' + Ve(m(le)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(T).join("") + "</optgroup>" : "") + (u.length ? '<optgroup label="All sensors">' + u.map(T).join("") + "</optgroup>" : ""), r.value = Ye.steps || "";
    const I = o("stepsStatus"), W = Ye.steps && t[Ye.steps];
    I.textContent = W ? "Connected · " + m(W) : I.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    Ye.steps = o("stepsEntity").value || null, Yn("entities", { ...Ye }), Co = {}, Cr(), ln && (ja(ln), fs(ln));
  });
  function ol(t, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(t);
  }
  function il() {
    const t = Ye.steps && (ln == null ? void 0 : ln[Ye.steps]), r = Number(t == null ? void 0 : t.state);
    return Number.isFinite(r) ? r : null;
  }
  function fs(t) {
    var u;
    const r = Ye.steps, s = r ? Number((u = t[r]) == null ? void 0 : u.state) : NaN;
    o("stepsMeta").textContent = r ? Number.isFinite(s) ? ol(s) : "—" : "Set up in Settings";
  }
  let Sr = 0;
  async function Cr() {
    const t = Ye.steps;
    if (!t || !l.ws) return;
    Sr = Date.now();
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const u = await l.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: r.toISOString(), statistic_ids: [t], period: "day", types: ["max"] }), m = (u == null ? void 0 : u[t]) || [], T = {};
      if (m.forEach((I) => {
        Number.isFinite(I.max) && (T[Ft(new Date(I.start))] = I.max);
      }), !Object.keys(T).length) {
        const I = await l.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: r.toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((I == null ? void 0 : I[t]) || []).forEach((W) => {
          const le = Number(W.s ?? W.state), ue = W.lu ? W.lu * 1e3 : Date.parse(W.last_updated || W.last_changed);
          if (!Number.isFinite(le) || !ue) return;
          const ne = Ft(new Date(ue));
          T[ne] = Math.max(T[ne] || 0, le);
        });
      }
      Co = T, Ma();
    } catch {
    }
  }
  function Na() {
    Ma();
  }
  Na(), setInterval(() => {
    Na(), Uo(), ba();
  }, 10 * 60 * 1e3);
  function Tr(t) {
    const r = {}, s = {};
    ht.history.forEach((I) => {
      const W = Ft(new Date(I.start));
      r[W] = (r[W] || 0) + (I.seconds || 0) / 60, s[W] = (s[W] || 0) + 1;
    });
    const u = /* @__PURE__ */ new Date(), m = Ft(u), T = [];
    for (let I = t - 1; I >= 0; I--) {
      const W = new Date(u.getFullYear(), u.getMonth(), u.getDate() - I), le = Ft(W), ue = ht.checkins.filter((te) => te.date === le), ne = (te) => {
        const _e = ue.map((Je) => Je[te]).filter(Boolean);
        return _e.length ? _e.reduce((Je, He) => Je + He, 0) / _e.length : null;
      };
      T.push({
        key: le,
        date: W,
        minutes: Math.round(r[le] || 0),
        moves: s[le] || 0,
        steps: le === m && il() != null ? il() : Co[le] ?? null,
        mood: ne("mood"),
        energy: ne("energy")
      });
    }
    return T;
  }
  function rl(t) {
    let r = t.length - 1;
    t[r] && !t[r].minutes && r--;
    let s = 0;
    for (; r >= 0 && t[r].minutes > 0; )
      s++, r--;
    return s;
  }
  function Ma() {
    const t = o("insightCard");
    if (!t) return;
    const r = Tr(30), s = rl(r), u = r.reduce((ue, ne) => ue + ne.minutes, 0), m = /* @__PURE__ */ new Date(), T = Ft(m), I = Ft(new Date(m.getFullYear(), m.getMonth(), m.getDate() - (m.getDay() + 6) % 7)), W = r.filter((ue) => ue.key >= I && ue.key <= T).reduce((ue, ne) => ue + ne.minutes, 0), le = (ue, ne, te) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + ue + '</div><div><div class="activityRowName">' + Ve(ne) + '</div><div class="activityRowMeta">' + Ve(te) + "</div></div></div>";
    t.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + Bt("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + le(Bt("clock"), "This week", W + " min") + le(Bt("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + le(Bt("calendar"), "30 days", u + " min") + "</div>";
  }
  const Lr = {
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
  }, Xi = (t) => t === "sunny" ? "clear" : t === "clear-night" ? "night" : t === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(t) ? "rain" : ["snowy", "snowy-rainy"].includes(t) ? "snow" : "cloudy", za = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, vi = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let ms = 0;
  const bi = (t, r) => '<path class="' + r + '" d="' + t + '"/>', gs = (t, r) => ' style="animation-delay:-' + Math.round(t * 137 % r) + 'ms"', Zn = (t, r, s, u) => {
    const m = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + gs(t, 2400) + ' d="M' + t + " " + (r - s) + "L" + (t + m) + " " + (r - m) + "L" + (t + s) + " " + r + "L" + (t + m) + " " + (r + m) + "L" + t + " " + (r + s) + "L" + (t - m) + " " + (r + m) + "L" + (t - s) + " " + r + "L" + (t - m) + " " + (r - m) + 'Z"/>';
  }, sl = ([t, r, s], u) => '<path class="wxMoonPath" d="' + t + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + r + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', ec = (t, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', ll = (t) => (t ? ["29.35", "43.04", "56.74"].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), tc = (t) => (t ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, s], u) => '<circle class="wxFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + r + '" cy="' + s + '" r="' + (t ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function cl(t, r, s, u) {
    return t === "clear" ? r ? sl(s ? vi.l : vi.s, u) + (s ? Zn(70, 20, 5.83, 1) + Zn(78.33, 41.67, 3.75, 0.8) + Zn(60, 71.67, 3.33, 0.6) : Zn(42, 12, 3.5, 1) + Zn(47, 25, 2.25, 0.8) + Zn(36, 43, 2, 0.6)) : ec(u, s) : t === "partly" ? (r ? sl(s ? vi.lp : vi.sp, u) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + bi(s ? za.lp : za.sp, r ? "wxCloudLight" : "wxBright") + (r ? s ? Zn(73.33, 16.67, 4.17, 0.9) : Zn(44, 10, 2.5, 0.9) : "") : t === "cloudy" ? bi(s ? za.lc : za.s, r ? "wxCloudLight" : "wxBright") + (r ? s ? Zn(15, 15, 3.75, 0.8) + Zn(76.67, 13.33, 2.92, 0.6) : Zn(9, 9, 2.25, 0.8) + Zn(46, 8, 1.75, 0.6) : "") : bi(s ? za.lr : za.s, "wxCloudLight") + (t === "rain" ? ll(s) : tc(s));
  }
  const nc = () => {
    var t;
    return ((t = ln == null ? void 0 : ln["sun.sun"]) == null ? void 0 : t.state) === "below_horizon";
  };
  let Kn = nt().weatherStyle || "bitmap", Ar = nt().weatherLayout === "strip" ? "strip" : "tiles", dl = nt().weatherMotion !== !1;
  const Ji = () => dl && !L(), wi = /* @__PURE__ */ new Map(), yi = 700, ul = (t) => {
    const [r, s] = t.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: s === "night" };
  };
  function io(t, r, s, u = Kn, m, T) {
    let I = Xi(t);
    const W = I === "night" || (T != null ? !!T : !!s && nc());
    I === "night" && (I = "clear");
    const le = r ? 90 : 54, ue = Hl(t, W), ne = performance.now();
    let te = m ? wi.get(m) : null;
    if (m && !te ? wi.set(m, te = { key: ue, t0: -1e9 }) : te && te.key !== ue && (te.fromKey = te.key, te.from = te.last || null, te.key = ue, te.t0 = ne), u !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + ue + '"' + (m ? ' data-wx-slot="' + m + '"' : "") + ' data-wx-style="' + u + '" data-wx-size="' + le + '"></canvas></span>';
    let _e = "";
    if (te && ne - te.t0 < yi && (Ji() || L())) {
      const Je = ul(te.fromKey);
      _e = '<span class="wxLayer wxOut ' + Je.k + (Je.night ? " night" : "") + '" style="animation-delay:' + Math.round(te.t0 - ne) + 'ms"><svg viewBox="0 0 ' + le + " " + le + '">' + cl(Je.k, Je.night, r, "wxg" + ++ms) + "</svg></span>";
    }
    return '<span class="wxIcon ' + I + (W ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + le + " " + le + '">' + cl(I, W, r, "wxg" + ++ms) + "</svg>" + _e + "</span>";
  }
  function _r() {
    const t = o("app"), r = getComputedStyle(t), s = (W) => r.getPropertyValue(W).trim(), u = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([W, le]) => {
      s(le) && (u[W] = s(le));
    });
    const m = s("--color-text-primary") || "#f1f1f1", T = s("--color-bg-card") || "#222222", I = t.classList.contains("light");
    return { colors: u, ink: I ? m : T, paper: I ? T : m };
  }
  function To(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const u = _r(), m = Ji(), T = L();
    s.forEach((I) => {
      var te;
      const W = I.dataset.wx, le = I.dataset.wxSlot ? wi.get(I.dataset.wxSlot) : null;
      let ue = Dc(W, u.colors);
      if (le && le.key === W) {
        const _e = (r - le.t0) / yi;
        _e < 1 && (m || T) && (ue = Iu(le.from || Dc(le.fromKey, u.colors), ue, Math.max(0, _e), u.colors, T)), le.last = ue;
      }
      const ne = Xd(ue, { size: Number(I.dataset.wxSize) || 54, px: 2, oneBit: I.dataset.wxStyle === "onebit", colors: u.colors, ink: u.ink, paper: u.paper, clock: r, idle: m });
      I.width !== ne.w && (I.width = ne.w), I.height !== ne.h && (I.height = ne.h), (te = I.getContext("2d")) == null || te.putImageData(new ImageData(ne.data, ne.w, ne.h), 0, 0);
    });
  }
  let Qi = null, vs = -1;
  function Er(t) {
    if (Qi = null, !g) return;
    const r = Ji(), s = Math.floor(t / 100), u = [...wi.values()].some((le) => t - le.t0 < yi), m = [...c.values()].some((le) => t - le.t0 < le.dur), T = De.home.classList.contains("active"), I = J.classList.contains("open"), W = r && Kn === "smooth" && (I || T && Ar === "strip");
    !document.hidden && (u || m || W || r && s !== vs) && (vs = s, T && (To(o("weatherCard"), t), x(o("weatherCard"), t)), I && (To(J, t), x(J, t))), (r || u || m) && (Qi = requestAnimationFrame(Er));
  }
  function Sa() {
    o("app").classList.toggle("wxMotion", Ji()), !Qi && g && (Qi = requestAnimationFrame(Er));
  }
  let xi = [];
  const nn = 36e5, pl = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function Ba() {
    const t = /* @__PURE__ */ new Date(), r = (T, I) => new Date(t.getFullYear(), t.getMonth(), t.getDate() + T, I), s = [], u = [], m = [...Array(6)].map((T, I) => {
      const W = r(I, 6), le = r(I, 18), ue = r(I + 1, 6), ne = xi.find((_e) => Ft(new Date(_e.datetime)) === Ft(W)), te = (_e, Je, He) => {
        const Te = s.filter((bt) => bt.t >= +_e && bt.t < +Je);
        if (Te.length) {
          const bt = {};
          return Te.forEach((Oe) => {
            bt[Oe.c] = (bt[Oe.c] || 0) + (pl.has(Oe.c) ? 2 : 1);
          }), Object.entries(bt).sort((Oe, wt) => wt[1] - Oe[1])[0][0];
        }
        const Me = u.find((bt) => {
          const Oe = +new Date(bt.datetime);
          return Oe >= +_e - 3 * nn && Oe < +Je && (bt.is_daytime == null || !!bt.is_daytime == !He);
        });
        if (Me) return Me.condition;
        const gt = (ne == null ? void 0 : ne.condition) || "cloudy";
        return He && gt === "sunny" ? "clear-night" : gt;
      };
      return { start: +W, end: +ue, day: te(W, le, !1), night: te(le, ue, !0), hi: Number(ne == null ? void 0 : ne.temperature), lo: Number(ne == null ? void 0 : ne.templow) };
    });
    return { days: m, hours: s, start: m[0].start, end: m[5].end };
  }
  const bs = (t, r) => {
    const s = t.days.findIndex((m) => r < m.end);
    if (s < 0) return 1;
    const u = t.days[s];
    return Math.max(0, (s + (r - u.start) / (u.end - u.start)) / 6);
  }, e = (t, r) => {
    const s = Math.max(0, Math.min(0.99999, r)) * 6, u = Math.floor(s), m = t.days[u];
    return m.start + (s - u) * (m.end - m.start);
  };
  function n(t, r) {
    const s = Math.max(0, t.days.findIndex((le) => r < le.end)), u = t.days[s], m = (r - u.start) / (u.end - u.start) >= 0.5;
    let T = m ? u.night : u.day, I = NaN;
    const W = t.hours;
    if (W.length && r >= W[0].t - nn && r <= W[W.length - 1].t + nn) {
      let le = W.findIndex((te) => te.t > r);
      le < 0 && (le = W.length);
      const ue = W[Math.max(0, le - 1)], ne = W[Math.min(W.length - 1, le)];
      T = ue.c || T, I = ne.t > ue.t ? ue.temp + (ne.temp - ue.temp) * Math.max(0, Math.min(1, (r - ue.t) / (ne.t - ue.t))) : ue.temp;
    }
    if (!Number.isFinite(I)) {
      const le = [];
      if (t.days.forEach((ue) => {
        Number.isFinite(ue.lo) && le.push([ue.start - nn, ue.lo]), Number.isFinite(ue.hi) && le.push([ue.start + 9 * nn, ue.hi]);
      }), le.length) {
        I = r <= le[0][0] ? le[0][1] : le[le.length - 1][1];
        for (let ue = 1; ue < le.length; ue++) if (r <= le[ue][0] && r > le[ue - 1][0]) {
          const [ne, te] = le[ue - 1], [_e, Je] = le[ue];
          I = te + (Je - te) * (1 - Math.cos(Math.PI * (r - ne) / (_e - ne))) / 2;
          break;
        }
      }
    }
    return { cond: m && T === "sunny" ? "clear-night" : T, temp: I, night: m, day: u };
  }
  const i = (t) => Ft(new Date(t)) === Ft(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(t)), c = /* @__PURE__ */ new Map(), p = 900, b = 700;
  let h = null;
  const v = typeof ResizeObserver == "function" ? new ResizeObserver((t) => t.forEach((r) => {
    x(r.target.parentElement), r.target.closest("#wxDialog") && pa();
  })) : null;
  function x(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const u = Ba(), m = u.days.flatMap((te) => [{ cond: te.day, night: !1 }, { cond: te.night, night: !0 }]), T = m.map((te) => te.cond).join(), I = _r(), W = Ji(), le = L(), ue = Number(Ft(new Date(u.start)).replace(/\D/g, "")) % 9973;
    let ne = !1;
    s.forEach((te) => {
      var bt;
      const _e = te.clientWidth, Je = te.clientHeight;
      if (!_e || !Je) return;
      const He = te.dataset.wxStrip;
      let Te = c.get(He);
      Te ? Te.sig !== T && (Te.prev = Te.segs, Te.sig = T, Te.segs = m, Te.t0 = r, Te.dur = b) : c.set(He, Te = { sig: T, segs: m, prev: null, t0: r, dur: p });
      const Me = W || le ? Math.min(1, Math.max(0, (r - Te.t0) / Te.dur)) : 1;
      Me < 1 && (ne = !0);
      const gt = { width: _e, height: Je, colors: I.colors, clock: r, ambient: W, seed: ue, reveal: le ? Me : 1 - Math.pow(1 - Me, 3), prev: Me < 1 ? Te.prev : null, reduce: le };
      if (Kn === "smooth") {
        const Oe = Math.min(2, window.devicePixelRatio || 1), wt = Math.round(_e * Oe), Rt = Math.round(Je * Oe);
        te.width !== wt && (te.width = wt), te.height !== Rt && (te.height = Rt);
        const st = te.getContext("2d");
        if (!st) return;
        st.setTransform(Oe, 0, 0, Oe, 0, 0), Xu(st, m, gt);
      } else {
        const Oe = $u(m, { ...gt, px: 2, oneBit: Kn === "onebit", ink: I.ink, paper: I.paper });
        te.width !== Oe.w && (te.width = Oe.w), te.height !== Oe.h && (te.height = Oe.h), (bt = te.getContext("2d")) == null || bt.putImageData(new ImageData(Oe.data, Oe.w, Oe.h), 0, 0);
      }
    }), ne && Sa();
  }
  function D() {
    const t = o("weatherCard");
    if (!t || t.hidden) return;
    const r = Ye.weather, s = r && (ln == null ? void 0 : ln[r]);
    if (!s) {
      t.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + io("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", To(t);
      return;
    }
    const u = s.attributes || {}, m = u.temperature_unit || "°", T = (st) => Number.isFinite(Number(st)) ? Math.round(Number(st)) + "°" : "—", I = (u.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", W = Lr[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), le = Ft(/* @__PURE__ */ new Date()), ue = xi.slice(0, 7), ne = ue.find((st) => Ft(new Date(st.datetime)) === le) || null, te = ue.filter((st) => Ft(new Date(st.datetime)) >= le).slice(0, 6), _e = /* @__PURE__ */ new Date(), Je = Ft(new Date(_e.getFullYear(), _e.getMonth(), _e.getDate() + 1)), He = ne ? "H " + T(ne.temperature) + "&ensp; L " + T(ne.templow) : "", Te = (st) => {
      const ot = Ft(new Date(st.datetime));
      return ot === le ? "Today" : ot === Je ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(st.datetime));
    }, Me = Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : "—", gt = (st) => {
      const ot = new Date(st.datetime);
      return Math.round((new Date(ot.getFullYear(), ot.getMonth(), ot.getDate()) - new Date(_e.getFullYear(), _e.getMonth(), _e.getDate())) / 864e5);
    }, bt = (st) => (Lr[st] || st || "").toLowerCase(), Oe = (st, ot) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + gt(st) + '" aria-label="' + Ve(Te(st) + ": " + bt(st.condition) + ", " + T(st.temperature) + " / " + T(st.templow) + ". Open the forecast") + '">' + io(st.condition, !1, !1, Kn, "day" + ot) + '<div><div class="activityRowName">' + Ve(Te(st)) + '</div><div class="activityRowMeta">' + T(st.temperature) + " / " + T(st.templow) + "</div></div></div>", wt = () => '<div class="wxStrip"><div class="wxStripDays">' + Ba().days.map((ot, fn) => {
      const Ut = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(ot.start)) + ": " + bt(ot.day) + (bt(ot.day) === bt(ot.night) ? " all day and night" : ", then " + bt(ot.night) + " overnight") + (Number.isFinite(ot.hi) ? ". High " + T(ot.hi) : "") + (Number.isFinite(ot.lo) ? ", low " + T(ot.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + fn + '" aria-label="' + Ve(Ut) + '"><span class="wxDayName">' + Ve(i(ot.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + T(ot.hi) + '</span><span class="wxLow">' + T(ot.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    t.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Ve("Now in " + I + ": " + Me + "°, " + bt(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + io(s.state, !0, !0, Kn, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ve(String(Me)) + '</span><span class="wxUnit">' + Ve(m) + '</span></div><div class="wxPlace">' + Ve(I) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ve(W) + "</div>" + (He ? '<div class="wxRange">' + He + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (te.length ? Ar === "strip" ? wt() : '<div class="activityRows wxDays">' + te.map(Oe).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", To(t);
    const Rt = t.querySelector("canvas[data-wx-strip]");
    h && h !== Rt && (v == null || v.unobserve(h)), h = Rt, Rt && (v == null || v.observe(Rt), x(t)), Sa(), cn();
  }
  const F = o("weatherCard"), N = (t) => {
    const r = t.closest("[data-wx-day]");
    if (r) {
      const u = /* @__PURE__ */ new Date();
      Ie(+new Date(u.getFullYear(), u.getMonth(), u.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const s = t.closest("[data-wx-open]");
    s && Ie(Date.now(), s);
  };
  F.addEventListener("click", (t) => N(t.target)), F.addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && t.target.matches("[data-wx-day],[data-wx-open]") && (t.preventDefault(), N(t.target));
  });
  const J = o("wxDialog"), xe = o("wxGraph"), Ae = o("wxGraphWrap");
  let K = Date.now(), ye = null, E = !1, re = null;
  function Ie(t, r) {
    const s = Ba();
    ye = r || null, K = Math.max(s.start, Math.min(s.end - nn, t)), c.delete("dialog"), wi.delete("scrub"), J.classList.add("open"), J.setAttribute("aria-hidden", "false"), cn(), v == null || v.observe(J.querySelector("canvas[data-wx-strip]")), xe.focus({ preventScroll: !0 }), Sa();
  }
  function ut() {
    var t;
    J.classList.remove("open"), J.setAttribute("aria-hidden", "true"), v == null || v.unobserve(J.querySelector("canvas[data-wx-strip]")), (t = ye == null ? void 0 : ye.focus) == null || t.call(ye, { preventScroll: !0 }), ye = null;
  }
  function cn() {
    if (!J.classList.contains("open")) return;
    const t = Ba();
    o("wxGraphDays").innerHTML = t.days.map((r) => "<span>" + Ve(i(r.start)) + "</span>").join(""), pa(t), jt(t), x(J);
  }
  function jt(t = Ba()) {
    const r = n(t, K), s = ln == null ? void 0 : ln[Ye.weather], u = (s == null ? void 0 : s.attributes) || {}, m = u.temperature_unit || "°", T = Math.abs(K - Date.now()) < nn / 2, I = T && s ? s.state : r.cond, W = T && Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", le = Lr[I] || (I ? I.charAt(0).toUpperCase() + I.slice(1) : "—"), ue = T ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(K / nn) * nn)), ne = r.day, te = (Number.isFinite(ne.hi) ? "H " + Math.round(ne.hi) + "°" : "") + (Number.isFinite(ne.lo) ? "&ensp; L " + Math.round(ne.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + io(I, !0, T, Kn, "scrub", T ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ve(String(W)) + '</span><span class="wxUnit">' + Ve(m) + '</span></div><div class="wxPlace">' + Ve(ue) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ve(le) + "</div>" + (te ? '<div class="wxRange">' + te + "</div>" : "") + "</div>", To(o("wxDialogNow")), xe.setAttribute("aria-valuenow", String(Math.round((K - t.start) / nn))), xe.setAttribute("aria-valuetext", ue + ", " + le.toLowerCase() + ", " + W + "°"), $e(t), Sa();
  }
  function pa(t = Ba()) {
    const r = o("wxGraphLine"), s = Ae.clientWidth, u = Ae.clientHeight;
    if (!s || !u) return;
    const m = [];
    for (let Me = t.start; Me <= t.end; Me += nn) {
      const gt = n(t, Me).temp;
      Number.isFinite(gt) && m.push([bs(t, Me) * s, gt]);
    }
    if (r.setAttribute("viewBox", "0 0 " + s + " " + u), m.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', re = null, $e(t);
      return;
    }
    const T = m.map((Me) => Me[1]), I = Math.min(...T), W = Math.max(...T), le = Math.max(4, W - I), ue = Kn !== "smooth", ne = (Me) => ue ? Math.round(Me / 2) * 2 : Math.round(Me * 10) / 10;
    re = (Me) => u * 0.84 - (Me - I) / le * u * 0.62;
    const te = _r(), _e = Kn === "onebit" ? te.paper : "#ffffff", Je = Kn === "onebit" ? te.ink : "rgba(0,0,0,.28)", He = "M" + m.map((Me) => ne(Me[0]) + " " + ne(re(Me[1]))).join(" L"), Te = (Me, gt) => {
      const bt = m.find((Oe) => Oe[1] === Me);
      return '<text class="wxLineLabel" x="' + ne(Math.min(s - 14, Math.max(14, bt[0]))) + '" y="' + ne(re(Me) + (gt ? 18 : -10)) + '" fill="' + _e + '" stroke="' + Je + '">' + Math.round(Me) + "°</text>";
    };
    r.setAttribute("shape-rendering", ue ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + He + '" fill="none" stroke="' + Je + '" stroke-width="' + (ue ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + He + '" fill="none" stroke="' + _e + '" stroke-width="2" stroke-linejoin="round"/>' + Te(W, !1) + Te(I, !0) + '<g id="wxCursorMark"></g>', $e(t);
  }
  function $e(t = Ba()) {
    const r = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const s = Ae.clientWidth, u = Ae.clientHeight, m = Kn !== "smooth", T = (_e) => m ? Math.round(_e / 2) * 2 : _e, I = T(bs(t, K) * s), W = n(t, K).temp, le = _r(), ue = Kn === "onebit" ? le.paper : "#ffffff", ne = Kn === "onebit" ? le.ink : "rgba(0,0,0,.28)", te = re && Number.isFinite(W) ? T(re(W)) : null;
    r.innerHTML = '<rect x="' + (I - 2) + '" y="0" width="4" height="' + u + '" fill="' + ne + '"/><rect x="' + (I - 1) + '" y="0" width="2" height="' + u + '" fill="' + ue + '"/>' + (te == null ? "" : m ? '<rect x="' + (I - 5) + '" y="' + (te - 5) + '" width="10" height="10" fill="' + ue + '" stroke="' + ne + '" stroke-width="2"/>' : '<circle cx="' + I + '" cy="' + te + '" r="6" fill="' + ue + '" stroke="' + ne + '" stroke-width="2"/>');
  }
  const Jt = (t) => {
    const r = Ae.getBoundingClientRect();
    r.width && (K = e(Ba(), (t - r.left) / r.width), jt());
  };
  xe.addEventListener("pointerdown", (t) => {
    if (t.button === 0) {
      E = !0;
      try {
        xe.setPointerCapture(t.pointerId);
      } catch {
      }
      Jt(t.clientX);
    }
  }), xe.addEventListener("pointermove", (t) => {
    E && Jt(t.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((t) => xe.addEventListener(t, () => {
    E = !1;
  })), xe.addEventListener("keydown", (t) => {
    const r = Ba(), s = { ArrowLeft: -nn, ArrowRight: nn, ArrowDown: -nn, ArrowUp: nn, PageUp: -24 * nn, PageDown: 24 * nn }[t.key];
    s ? (t.preventDefault(), K = Math.max(r.start, Math.min(r.end - nn, Math.round(K / nn) * nn + s)), jt(r)) : (t.key === "Home" || t.key === "End") && (t.preventDefault(), K = t.key === "Home" ? r.start : r.end - nn, jt(r));
  }), o("wxDialogClose").addEventListener("click", ut), J.addEventListener("click", (t) => {
    t.target === J && ut();
  }), J.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), ut());
  }), D(), (Xc = (Kc = window.matchMedia) == null ? void 0 : ($c = Kc.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || Xc.call($c, "change", () => {
    Sa(), To(a);
  }), Sa();
  const hl = o("tvNav");
  l.fullscreenSupported || (hl.hidden = !0), hl.addEventListener("click", () => l.toggleFullscreen()), a.addEventListener("keydown", (t) => {
    !De.workout.classList.contains("active") || $o.classList.contains("active") || t.target.closest("input,select,textarea,.holdEnd") || (t.key === "MediaPlayPause" || t.key === " " && !t.target.closest("button") ? (t.preventDefault(), ai.click()) : t.key === "MediaTrackNext" ? (t.preventDefault(), o("skipExercise").click()) : t.key === "MediaTrackPrevious" && (t.preventDefault(), o("restartSegment").click()));
  }), a.querySelectorAll("[data-rounds-step]").forEach((t) => t.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(lt.value) || 1) + Number(t.dataset.roundsStep)));
    String(r) !== lt.value && (lt.value = r, lt.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [A, C, H, lt].forEach((t) => t.addEventListener("input", () => {
    const r = Ue[yt];
    r && (r.total = Number(A.value), r.work = Number(C.value), r.rest = Number(H.value)), kt();
  })), z.addEventListener("click", ns), Pe.addEventListener("click", () => k("settings")), o("settingsBack").addEventListener("click", ns), ai.addEventListener("click", () => ua(!jn)), Wn(yt), Go(), Uo(), Ma(), o("healthHelpOpen").addEventListener("click", () => a.querySelector(".tab[data-pane=helpPane]").click()), pi(o("resetStats"), o("resetStatsFill"), 1500, () => {
    ht.history = [], ht.checkins = [], Pi = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    vn(), Na(), Uo(), Go(), Ma(), ba(), Gt("Stats reset");
  });
  const ac = o("morningTime"), oc = o("eveningTime"), ic = o("checkinAutoOpen");
  ac.value = Oa().morning, oc.value = Oa().evening, ic.classList.toggle("on", nt().checkinAutoOpen !== !1), [["morningTime", ac], ["eveningTime", oc]].forEach(([t, r]) => r.addEventListener("change", () => {
    r.value && (Yn(t, r.value), ba());
  })), ic.addEventListener("click", () => {
    const t = nt().checkinAutoOpen === !1;
    ic.classList.toggle("on", t), Yn("checkinAutoOpen", t);
  }), setTimeout(Ii, 800);
  const jc = o("checkinNotify"), fl = o("checkinNotifyTarget"), zc = o("checkinNotifyStatus"), Tu = zc.textContent;
  function Vc() {
    const t = l.notifyServices(), r = t.filter((m) => m.startsWith("mobile_app_")), s = r.length ? r : t, u = (m) => m.replace(/^mobile_app_/, "").replace(/_/g, " ");
    fl.innerHTML = s.map((m) => '<option value="' + Ve(m) + '">' + Ve(u(m)) + "</option>").join(""), !nt().notifyTarget && s[0] && (nt().notifyTarget = s[0]), fl.value = nt().notifyTarget || "";
  }
  function ml() {
    const t = !!nt().notifyOn;
    jc.classList.toggle("on", t), o("checkinNotifyTargetRow").hidden = !t;
    const r = Oa();
    zc.textContent = t ? "Sends at " + r.morning + " and " + r.evening : Tu;
  }
  async function rc() {
    const t = !!nt().notifyOn;
    try {
      return await l.setReminderAutomation(t ? { target: nt().notifyTarget, times: Oa() } : null), !0;
    } catch {
      return Gt("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  jc.addEventListener("click", async () => {
    const t = !nt().notifyOn;
    if (t && (Vc(), !nt().notifyTarget)) {
      Gt("Install the Companion app on your phone first");
      return;
    }
    nt().notifyOn = t, ml(), await rc() ? (vn(), Gt(t ? "Check-in notifications on" : "Check-in notifications off")) : (nt().notifyOn = !t, ml());
  }), fl.addEventListener("change", () => {
    Yn("notifyTarget", fl.value), nt().notifyOn && rc();
  }), [ac, oc].forEach((t) => t.addEventListener("change", () => {
    ml(), nt().notifyOn && rc();
  })), Vc(), ml();
  let sc = null;
  function Lu() {
    sc || (sc = setTimeout(() => {
      sc = null, Ma();
    }, 3e4));
  }
  return {
    updateStates(t) {
      var s, u;
      const r = !ln || ln[Ye.weather] !== t[Ye.weather] || ((s = ln["sun.sun"]) == null ? void 0 : s.state) !== ((u = t["sun.sun"]) == null ? void 0 : u.state);
      ln = t, ja(t), fs(t), r && D(), Date.now() - Sr > 60 * 60 * 1e3 && Cr(), Lu();
    },
    applyRemoteData(t) {
      if (t && (Array.isArray(t.history) && (ht.history = t.history, Na()), Array.isArray(t.history) && Ma(), Array.isArray(t.checkins) && (ht.checkins = t.checkins.map(Ai), ba(), Go(), Uo(), Na(), Ma()), t.profiles && !Dn.classList.contains("open") && !Xt)) {
        const r = co(t);
        Object.keys(Ue).forEach((s) => delete Ue[s]), Object.assign(Ue, r.profiles), ht.order = r.order, Ue[yt] || (yt = ht.order[0]), rr(), Wn(yt);
      }
    },
    suspend() {
      g = !1;
    },
    resume() {
      g || (g = !0, un || (un = requestAnimationFrame(_a)), da || (da = requestAnimationFrame(Gi)), Sa(), fi(a.querySelector(".tab.active"), !1));
    }
  };
}
const ep = /* @__PURE__ */ new Set(["roaming", "test_area"]), tp = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, ys = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, kn = "made_up_", er = (a) => {
  var l;
  return (l = String(a).split(".")[1]) == null ? void 0 : l.startsWith(kn);
}, wl = (a) => a.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Oc(a) {
  const l = a.getHours() + a.getMinutes() / 60, o = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * o * o;
}
function np(a) {
  const l = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  let o = 0;
  for (let d = +l; d < +a; d += 10 * 60 * 1e3) o += Oc(new Date(d)) / 6;
  return o;
}
function nd(a = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let o = 0; o <= 96; o++) {
    const d = +a - (96 - o) * 15 * 60 * 1e3;
    l.push([d, Oc(new Date(d))]);
  }
  return l;
}
function ap({ onChange: a }) {
  const l = {}, o = {}, d = (V, q, ce, Q) => {
    l[V] = { entity_id: V, state: ce, attributes: Q, last_changed: new Date(Date.now() - 18e6).toISOString() }, o[V] = q;
  }, f = (V, q, ce) => {
    const Q = l[V], fe = q ?? Q.state;
    l[V] = { ...Q, state: fe, attributes: { ...Q.attributes, ...ce }, last_changed: fe === Q.state ? Q.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, g = (V, q, ce, Q) => d("binary_sensor." + kn + (V ? V + "_" : "") + wl(q), V, Q ? "on" : "off", { friendly_name: q, device_class: ce });
  Object.entries(tp).forEach(([V, q]) => {
    if (q.temperature != null && d("sensor." + kn + V + "_temperature", V, String(q.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), q.humidity != null && d("sensor." + kn + V + "_humidity", V, String(q.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), q.vacuum && d("vacuum." + kn + "robot", V, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), q.climate && d("climate." + kn + V, V, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: q.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), q.cover) {
      const [ce, Q, fe, X] = q.cover;
      d("cover." + kn + V + "_" + wl(ce), V, fe ? "open" : "closed", { friendly_name: ce, device_class: Q, current_position: fe, ...X != null ? { current_tilt_position: X } : {} });
    }
    if (q.humidifier && d("humidifier." + kn + V, V, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: q.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), q.solar && (d("sensor." + kn + V + "_solar_power", V, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), d("sensor." + kn + V + "_solar_today", V, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), q.valve && d("valve." + kn + V + "_" + wl(q.valve), V, "closed", { friendly_name: q.valve, device_class: "water" }), q.door && g(V, q.door, "door", q.doorOpen), q.window && g(V, q.window, "window", !1), q.motion && g(V, q.motion, "motion", !1), q.plant) {
      const [ce, Q, fe, X, S] = q.plant, B = kn + wl(ce), be = (O, De, z, Pe, k) => d("sensor." + B + "_" + O, V, String(z), { friendly_name: De, device_class: k, state_class: "measurement", unit_of_measurement: Pe, plant_low: z < ys[O][0], plant_high: z > ys[O][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[O] });
      be("moisture", "Moisture", Q, "%", "moisture"), be("light", "Light", fe, "lx", "illuminance"), be("temperature", "Temperature", X, "°C", "temperature"), be("fertility", "Fertility", S, "µS/cm", "conductivity");
      const Ce = Object.entries({ moisture: Q, light: fe, temperature: X, fertility: S }).filter(([O, De]) => De < ys[O][0] || De > ys[O][1]).map(([O, De]) => O + (De < ys[O][0] ? " low" : " high"));
      d("plant." + B, V, Ce.length ? "problem" : "ok", { friendly_name: ce, moisture: Q, brightness: fe, temperature: X, conductivity: S, problem: Ce.join(", ") || "none" });
    }
  }), d("alarm_control_panel." + kn + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), g(null, "Front door", "door", !1), g(null, "Smoke alarm", "smoke", !1), d("sensor." + kn + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, _ = {};
  let y = null;
  function R() {
    const V = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((q) => {
      q.endsWith("_solar_power") && (l[q] = { ...l[q], state: Oc(V).toFixed(2) }), q.endsWith("_solar_today") && (l[q] = { ...l[q], state: np(V).toFixed(1) });
    });
  }
  R();
  let me = 0;
  function ae() {
    let V = !1;
    const q = ++me % 10 === 0, ce = (X, S, B) => {
      f(X, S, B), V = !0;
    };
    Object.entries(w).forEach(([X, S]) => {
      const B = l[X].attributes.current_position, be = B < S ? Math.min(S, B + 10) : Math.max(S, B - 10);
      be === S && delete w[X], ce(X, be === S ? be === 0 ? "closed" : "open" : S > B ? "opening" : "closing", { current_position: be });
    }), Object.entries(_).forEach(([X, S]) => {
      const B = l[X].attributes.current_tilt_position, be = B < S ? Math.min(S, B + 25) : Math.max(S, B - 25);
      be === S && delete _[X], ce(X, null, { current_tilt_position: be });
    }), Object.keys(l).filter((X) => X.startsWith("climate.")).forEach((X) => {
      const S = l[X], B = S.attributes, be = B.current_temperature, Ce = (S.state === "heat" || S.state === "auto") && be < B.temperature - 0.05, O = (S.state === "cool" || S.state === "auto") && be > B.temperature + 0.05, De = S.state === "off" ? "off" : Ce ? "heating" : O ? "cooling" : "idle", z = q ? Math.round((be + (Ce ? 0.1 : O ? -0.1 : 0)) * 10) / 10 : be;
      (z !== be || De !== B.hvac_action) && ce(X, null, { current_temperature: z, hvac_action: De });
    }), Object.keys(l).filter((X) => X.startsWith("humidifier.")).forEach((X) => {
      const S = l[X], B = S.attributes, be = B.current_humidity, Ce = S.state === "on" && be < B.humidity, O = Ce && q ? be + 1 : be, De = S.state !== "on" ? "off" : Ce ? "humidifying" : "idle";
      if (O !== be || De !== B.action) {
        ce(X, null, { current_humidity: O, action: De });
        const z = "sensor." + kn + o[X] + "_humidity";
        l[z] && ce(z, String(O));
      }
    });
    const Q = l["vacuum." + kn + "robot"], fe = Q.attributes;
    Q.state === "cleaning" && q && ce(Q.entity_id, null, { battery_level: Math.max(5, fe.battery_level - 1) }), Q.state === "returning" && ce(Q.entity_id, "docked", {}), Q.state === "docked" && fe.battery_level < 100 && ce(Q.entity_id, null, { battery_level: Math.min(100, fe.battery_level + 2) }), y && Date.now() - y.at > 5e3 && (ce("alarm_control_panel." + kn + "house", "armed_" + y.mode, {}), y = null), V && a();
  }
  const U = setInterval(ae, 1e3), Y = setInterval(() => {
    R(), a();
  }, 60 * 1e3);
  function ee(V, q, ce) {
    const Q = ce == null ? void 0 : ce.entity_id;
    if (!l[Q]) return !1;
    const fe = l[Q], X = fe.attributes, S = (B, be) => f(Q, B, be);
    if (V === "climate" && (q === "set_temperature" && S(null, { temperature: Math.max(X.min_temp, Math.min(X.max_temp, ce.temperature)) }), q === "set_hvac_mode" && S(ce.hvac_mode, ce.hvac_mode === "off" ? { hvac_action: "off" } : {}), q === "toggle" && S(fe.state === "off" ? "heat" : "off", fe.state === "off" ? {} : { hvac_action: "off" })), V === "cover") {
      const B = q === "open_cover" ? 100 : q === "close_cover" ? 0 : q === "set_cover_position" ? ce.position : q === "toggle" ? X.current_position > 0 ? 0 : 100 : null;
      q === "stop_cover" && (delete w[Q], delete _[Q], S(X.current_position === 0 ? "closed" : "open")), B != null && B !== X.current_position && (w[Q] = B, S(B > X.current_position ? "opening" : "closing"));
      const be = q === "open_cover_tilt" ? 100 : q === "close_cover_tilt" ? 0 : q === "set_cover_tilt_position" ? ce.tilt_position : null;
      q === "stop_cover_tilt" && delete _[Q], be != null && X.current_tilt_position != null && be !== X.current_tilt_position && (_[Q] = be);
    }
    if (V === "humidifier" && (q === "set_humidity" && S(null, { humidity: Math.max(X.min_humidity, Math.min(X.max_humidity, ce.humidity)) }), q === "set_mode" && S(null, { mode: ce.mode }), q === "turn_on" || q === "turn_off" || q === "toggle")) {
      const B = q === "turn_on" || q === "toggle" && fe.state !== "on";
      S(B ? "on" : "off", { action: B ? "idle" : "off" });
    }
    if (V === "vacuum" && (q === "start" && S("cleaning", { rooms: ce.rooms || X.rooms }), q === "pause" && S("paused"), q === "return_to_base" && S("returning", { rooms: [] }), q === "locate" && S(null, { located: Date.now() }), q === "set_rooms" && S(null, { rooms: ce.rooms })), V === "valve") {
      const B = q === "open_valve" || q === "toggle" && fe.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(q) && S(B ? "open" : "closed");
    }
    if (V === "alarm_control_panel") {
      q === "alarm_disarm" && (y = null, S("disarmed", { changed_by: "Matt" }));
      const B = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[q];
      B && (y = { mode: B, at: Date.now() }, S("arming", { changed_by: "Matt" }));
    }
    return a(), !0;
  }
  function Z(V) {
    const q = (V == null ? void 0 : V.states) || {}, ce = (V == null ? void 0 : V.entities) || {}, Q = (V == null ? void 0 : V.devices) || {}, fe = (C) => {
      var de;
      const H = ce[C];
      return H && (H.area_id || H.device_id && ((de = Q[H.device_id]) == null ? void 0 : de.area_id)) || null;
    }, X = (C) => {
      const H = ce[C];
      return q[C] && q[C].state !== "unavailable" && !(H != null && H.hidden) && !(H != null && H.entity_category);
    }, S = {};
    Object.keys(q).forEach((C) => {
      const H = fe(C);
      H && X(C) && (S[H] || (S[H] = [])).push(C);
    });
    const B = { ...q, ...l }, be = (C) => {
      var H, de;
      return (de = (H = B[C]) == null ? void 0 : H.attributes) == null ? void 0 : de.device_class;
    }, Ce = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], O = Object.keys(q).filter((C) => C.startsWith("vacuum.") && X(C)), De = Object.values((V == null ? void 0 : V.areas) || {}).filter((C) => !ep.has(C.area_id)).map((C) => {
      const H = C.area_id, de = S[H] || [], j = (Qe) => de.filter((St) => St.startsWith(Qe + ".")), se = (Qe) => j("sensor").filter((St) => be(St) === Qe), he = (Qe) => Object.keys(l).filter((St) => o[St] === H && Qe(St)), ve = (Qe, St) => Qe.length ? Qe : he(St), Ze = ve(se("temperature"), (Qe) => Qe.endsWith(H + "_temperature")), lt = ve(se("humidity"), (Qe) => Qe.endsWith(H + "_humidity")), Et = se("power").filter((Qe) => /^(W|kW)$/.test(B[Qe].attributes.unit_of_measurement || "")), gn = j("binary_sensor").filter((Qe) => be(Qe) === "moisture"), qn = ve(j("plant"), (Qe) => Qe.startsWith("plant.")).map((Qe) => ({ id: Qe, readings: he((St) => St.startsWith("sensor." + Qe.split(".")[1] + "_")) })), pt = [...j("binary_sensor").filter((Qe) => Ce.includes(be(Qe))), ...he((Qe) => Qe.startsWith("binary_sensor."))];
      return {
        id: H,
        name: C.name,
        icon: C.icon,
        readings: [...Ze.slice(0, 1), ...lt.slice(0, 1), ...gn],
        power: Et.length ? Et.reduce((Qe, St) => Qe + Number(B[St].state) * (B[St].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: j("switch"),
        lights: j("light"),
        actions: [...j("light"), ...ve(j("climate"), (Qe) => Qe.startsWith("climate.")), ...ve(j("cover"), (Qe) => Qe.startsWith("cover.")), ...ve(j("humidifier"), (Qe) => Qe.startsWith("humidifier.")), ...ve(j("valve"), (Qe) => Qe.startsWith("valve.")), ...j("media_player"), ...j("vacuum"), ...O.length ? [] : he((Qe) => Qe.startsWith("vacuum."))],
        solar: he((Qe) => Qe.includes("_solar_")),
        plants: qn,
        openings: pt,
        alerts: [...gn, ...pt].filter((Qe) => {
          var St;
          return ((St = B[Qe]) == null ? void 0 : St.state) === "on";
        })
      };
    }).filter((C) => C.readings.length || C.plugs.length || C.actions.length || C.solar.length || C.plants.length), z = Object.keys(q).find((C) => /^sensor\..*(p1_meter_power|grid_power)$/.test(C) && q[C].state !== "unavailable") || null, Pe = (C) => Object.keys(q).filter((H) => H.startsWith(C + ".") && X(H)), k = Pe("alarm_control_panel"), A = O.length ? O : ["vacuum." + kn + "robot"];
    return {
      states: B,
      rooms: De,
      grid: z,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (C) => l[C] ? o[C] : fe(C),
      vacuums: A,
      homeVacuums: A.filter((C) => !De.some((H) => H.actions.includes(C))),
      security: {
        alarms: k.length ? k : ["alarm_control_panel." + kn + "house"],
        locks: Pe("lock"),
        openings: [...Object.keys(l).filter((C) => C.startsWith("binary_sensor.")), "sensor." + kn + "doorbell"]
      }
    };
  }
  return { model: Z, call: ee, stop() {
    clearInterval(U), clearInterval(Y);
  } };
}
const Do = (a) => a < 0 ? 0 : a > 1 ? 1 : a, Rc = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((d) => d + d).join("") : l;
  return [0, 2, 4].map((d) => parseInt(o.slice(d, d + 2), 16) || 0);
}, op = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), ad = {}, Ia = (a, l, o) => {
  const d = a + l + o;
  return ad[d] || (ad[d] = op(Rc(a).map((f, g) => f + (Rc(l)[g] - f) * o)));
}, od = {}, Dl = (a) => od[a] || (od[a] = Rc(a));
function ip(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [Ia(l.clear[0], l.cloudy[0], 0.12), Ia(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Ia(l.rain[0], "#000000", 0.22), Ia(l.rain[1], "#000000", 0.22)], l;
}
const rp = [
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
], Eo = (a, l) => (rp[(l & 7) * 8 + (a & 7)] + 0.5) / 64, tu = 1, nu = 2, au = 3, ou = 4, Pr = 5, Bl = 6, Nc = 7, iu = 8, id = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), sp = (a, l, o) => {
  let d = !1;
  for (let f = 0, g = a.length - 1; f < a.length; g = f++) {
    const w = a[f], _ = a[g];
    w[1] > o != _[1] > o && l < (_[0] - w[0]) * (o - w[1]) / (_[1] - w[1]) + w[0] && (d = !d);
  }
  return d;
};
function lp(a, l, o, d, { oneBit: f, ink: g, paper: w, snowInk: _ }) {
  const y = new Uint8ClampedArray(o * d * 4), R = Dl(g), me = Dl(w);
  for (let ae = 0; ae < d; ae++) for (let U = 0; U < o; U++) {
    const Y = ae * o + U, ee = l[Y];
    if (a[Y] == null) continue;
    let Z = Dl(a[Y]);
    if (f) {
      let V;
      ee === ou || ee === iu ? V = !0 : ee === Pr ? V = _ : ee === Nc || ee === Bl ? V = !1 : V = Math.round((0.2126 * Z[0] + 0.7152 * Z[1] + 0.0722 * Z[2]) / 255 * 4) / 4 <= Eo(U, ae), (ee === tu || ee === nu || ee === au || ee === Bl) && (U > 0 && l[Y - 1] !== ee || U < o - 1 && l[Y + 1] !== ee || ae > 0 && l[Y - o] !== ee || ae < d - 1 && l[Y + o] !== ee) && (V = !0), Z = V ? R : me;
    }
    y[Y * 4] = Z[0], y[Y * 4 + 1] = Z[1], y[Y * 4 + 2] = Z[2], y[Y * 4 + 3] = 255;
  }
  return { w: o, h: d, data: y };
}
const cp = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, dp = (a) => Hl(a, !1).split("/")[0], dc = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, up = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", pp = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", hp = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", fp = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", mp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], gp = [".##", "##.", ".#.", "#.."];
function ru(a, { width: l, height: o, colors: d, wave: f = 0.38, soft: g = 6, glow: w = 0.6, columns: _ = 6 }) {
  const y = { ...aa, dawn: "#e5a77e", ...d }, R = ip(y), me = l, ae = o, U = me / _, Y = U / 2, ee = Math.PI * 2, Z = a.length ? a : [{ cond: "cloudy", night: !1 }], V = [...Array(_ * 2)].map((fe, X) => {
    const S = Z[Math.min(X, Z.length - 1)], B = dp(S.cond), be = X % 2 === 1;
    return { cond: S.cond, k: B, night: be, sky: R[B][be ? 1 : 0], cover: cp[B] };
  }), q = (fe) => ae * (0.5 - f * Math.cos(ee * (fe / U - 0.25)));
  return { C: y, S: V, W: me, H: ae, cw: U, sw: Y, TAU: ee, yb: q, side: (fe, X, S) => {
    const B = (fe ? q(X) - S : S - q(X)) / Math.max(3, g * 1.4) + 0.5;
    return B <= 0 ? 0 : B >= 1 ? 1 : B;
  }, glowAt: (fe) => {
    const X = ((fe / U - 0.25) % 1 + 1) % 1, S = Math.max(0, Math.min(_ - 1, Math.round(fe / U - 0.25))), B = Math.max(0, Math.min(_ - 1, Math.round(fe / U - 0.75))), be = 1 - (V[2 * S].cover + V[2 * B + 1].cover) / 2, Ce = Math.sin(Math.PI * Math.min(1, Math.max(0, q(fe) / ae)));
    return { c: X < 0.5 ? y.dusk : y.dawn, a: w * (0.2 + 0.8 * be) * Ce * Ce };
  }, soft: g, tw: U * 0.3, sy: ae / 90 };
}
function su(a, { clock: l = 0, ambient: o = !1, seed: d = 1 }) {
  const { S: f, sw: g, side: w, C: _, TAU: y, sy: R, H: me } = a, ae = l, U = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  f.forEach((Z, V) => {
    const q = dc(d * 977 + V * 131 + 7), ce = (V + 0.5) * g, Q = Z.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[Z.k] : 0;
    for (let fe = 0; fe < Q; fe++) {
      const X = ce + (q() - 0.5) * g * 1.6, S = (6 + q() * 76) * R, B = q() < 0.35, be = 1.8 + q() * 1.6, Ce = w(!0, X, S) * (B ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(y * ae / 2600 + fe * 1.7 + V) : 1);
      Ce >= 0.03 && U.stars.push({ x: X, y: S, big: B, size: be, o: Ce });
    }
    if (!Z.night && (Z.k === "clear" || Z.k === "partly")) {
      const fe = ce + (q() - 0.5) * g * 0.3, X = Math.min(15, g * 0.29);
      U.suns.push({ x: fe, y: 32 * R, rad: X, halo: X * 2.8 * (o ? 1 + 0.07 * Math.sin(y * ae / 3600 + V) : 1) });
    }
    if (Z.night && (Z.k === "clear" || Z.k === "partly")) {
      const fe = Math.min(0.78, g * 0.55 / 34), X = ce - 23 * fe + (q() - 0.5) * g * 0.2;
      U.moons.push({ x: X + 23 * fe, y: (4 + (o ? 0.8 * Math.sin(y * ae / 5200 + V) : 0)) * R + 23 * fe, d: 46 * fe });
    }
  });
  const Y = Math.max(56, Math.min(100, me * 0.45)), ee = Math.max(1, g / (Y * 2.4));
  return f.forEach((Z, V) => {
    const q = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[Z.k];
    if (!q) return;
    const ce = Z.k === "partly" ? 1 : Math.round(q * ee), Q = dc(d * 577 + V * 71 + 3), fe = (V + 0.5) * g, X = Z.k === "rain" || Z.k === "storm" || Z.night ? _.cloudNight : _.cloudDay, S = Z.night ? 0.82 : Z.k === "storm" ? 0.75 : 1;
    for (let B = 0; B < ce; B++) {
      const be = Y / 46 * (Z.k === "partly" ? 1 : 0.8 + Q() * 0.4), Ce = fe + (Z.k === "partly" ? g * 0.12 : ((B + 0.5) / ce - 0.5) * g * 0.95 + (Q() - 0.5) * g * 0.5 / ce), O = (Z.k === "partly" ? 40 : 6 + Q() * 26) * R, De = o ? 2.5 * Math.sin(y * ae / 9e3 + V * 1.3 + B * 2.1) : 0, z = o ? 0.9 * Math.sin(y * ae / 6100 + V + B) : 0;
      U.clouds.push({ x: Ce - 23 * be + De, y: O - 15.33 * be + z, w: 46 * be, h: 30.66 * be, fill: X, o: S * (ce > 1 && B === 0 ? 0.85 : 1) });
    }
  }), f.forEach((Z, V) => {
    const q = dc(d * 313 + V * 29 + 11), ce = (V + 0.5) * g, Q = Z.cond === "pouring" ? 16 : Z.cond === "rainy" || Z.cond === "hail" ? 9 : Z.cond === "lightning-rainy" ? 12 : Z.cond === "snowy-rainy" ? 5 : 0;
    for (let X = 0; X < Q; X++) {
      let S = ce + (q() - 0.5) * g * 1.05, B = 44 + q() * 36, be = 1;
      if (o) {
        const O = ((B - 44 + ae * 0.04) % 36 + 36) % 36;
        S -= 0.21 * (O - (B - 44)), B = 44 + O, be = Math.min(1, O / 6, (36 - O) / 6);
      }
      B *= R;
      const Ce = w(Z.night, S, B) * be;
      Ce >= 0.05 && U.drops.push({ x: S, y: B, o: Ce });
    }
    const fe = Z.cond === "snowy" ? 11 : Z.cond === "snowy-rainy" ? 6 : 0;
    for (let X = 0; X < fe; X++) {
      let S = ce + (q() - 0.5) * g * 1.05, B = 40 + q() * 44, be = 1;
      if (o) {
        const O = ((B - 40 + ae * 9e-3) % 44 + 44) % 44;
        B = 40 + O, S += 1.6 * Math.sin(y * ae / 2800 + X * 1.9 + V), be = Math.min(1, O / 6, (44 - O) / 6);
      }
      B *= R;
      const Ce = w(Z.night, S, B) * be;
      Ce >= 0.05 && U.flakes.push({ x: S, y: B, o: Ce });
    }
    if (Z.k === "fog") {
      const X = Z.night ? "#c8ccd6" : "#ffffff", S = Z.night ? 0.28 : 0.62, B = o ? 4 * Math.sin(y * ae / 8e3 + V) : 0;
      for (let be = 0; be < 4; be++) U.fogs.push({ x: ce - g * 0.75 + be % 2 * g * 0.18 + (be % 2 ? B : -B), y: (30 + be * 13) * R, w: g * 1.3, c: X, a: S });
    }
    if (Z.k === "storm") {
      const X = (ae / 3400 + V * 0.37) % 1;
      U.bolts.push({ x: ce + (q() - 0.5) * g * 0.3 - 5, y: 36 * R, o: o && !(X < 0.05 || X > 0.09 && X < 0.12) ? 0.8 : 1 });
    }
  }), U;
}
function vp(a, l, o, d, f, g, w, _) {
  const { S: y, C: R, cw: me, yb: ae, glowAt: U, soft: Y, tw: ee, sy: Z } = a, V = new Array(o * d), q = new Uint8Array(o * d), ce = new Uint8Array(o * d), Q = (k, A, C, H, de) => {
    C == null || k < 0 || A < 0 || k >= o || A >= d || (H >= 1 || H > Eo(k + 5, A + 3)) && (V[A * o + k] = C, q[A * o + k] = de);
  }, fe = (k, A, C, H) => {
    for (let de = Math.max(0, Math.floor(A - C) - 1); de <= Math.min(d - 1, A + C + 1); de++) for (let j = Math.max(0, Math.floor(k - C) - 1); j <= Math.min(o - 1, k + C + 1); j++) H(j, de, j + 0.5 - k, de + 0.5 - A);
  }, X = (k, A, C) => {
    for (let de = 0; de < k.length - 1; de++) {
      const j = (de + A) * me;
      if (C < j - ee / 2) return [k[de], k[de], 0];
      if (C <= j + ee / 2) return [k[de], k[de + 1], (C - j + ee / 2) / ee];
    }
    const H = k[k.length - 1];
    return [H, H, 0];
  }, S = y.filter((k) => !k.night).map((k) => k.sky), B = y.filter((k) => k.night).map((k) => k.sky), be = Y / g, Ce = 16 * Z / g;
  for (let k = 0; k < o; k++) {
    const A = (k + 0.5) * f, C = ae(A) / g, H = X(S, 0.75, A), de = X(B, 1.25, A), j = U(A);
    for (let se = 0; se < d; se++) {
      const he = Eo(k, se), ve = se + 0.5 - C, Ze = (be > 0.01 ? Do(0.5 + ve / be) : ve > 0 ? 1 : 0) > he;
      let lt = Ze ? H[2] > he ? H[1] : H[0] : de[2] > he ? de[1] : de[0];
      (Ze ? Do(((se + 0.5) / d - 0.45) / 0.55) * 0.7 : Do(1 - (se + 0.5) / (d * 0.55)) * 0.7) > Eo(k + 2, se + 5) && (lt = Ze ? Ia(lt, "#ffffff", 0.18) : Ia(lt, "#000000", 0.25)), Ze && ve >= 0 && ve < Ce && j.a * 1.3 * (1 - ve / Ce) > Eo(k + 6, se + 1) && (lt = j.c), V[se * o + k] = lt, ce[se * o + k] = Ze ? 0 : 1;
    }
  }
  const O = Ia(R.sun, "#ffffff", 0.55), De = Ia(R.moon, "#ffffff", 0.6);
  l.stars.forEach((k) => {
    const A = Math.floor(k.x / f), C = Math.floor(k.y / g);
    if (A < 0 || C < 0 || A >= o || C >= d || !ce[C * o + A] || k.o < 0.15) return;
    const H = k.o > 0.45 ? R.star : Ia(R.star, V[C * o + A], 0.5), de = k.big && k.o > 0.6 ? Math.floor(k.size / f) : 0;
    Q(A, C, H, 1, Nc);
    for (let j = 1; j <= de; j++) [[A - j, C], [A + j, C], [A, C - j], [A, C + j]].forEach((se) => {
      se[0] >= 0 && se[1] >= 0 && se[0] < o && se[1] < d && ce[se[1] * o + se[0]] && Q(se[0], se[1], H, 1, Nc);
    });
  }), l.suns.forEach((k) => {
    const A = Math.max(1.5, k.rad / f), C = k.x / f, H = k.y / g, de = k.halo / f * 0.85;
    if (fe(C, H, de, (j, se, he, ve) => {
      const Ze = Math.sqrt(he * he + ve * ve);
      Ze > A && Ze < de && !ce[se * o + j] && Q(j, se, O, 0.3 * (1 - (Ze - A) / (de - A)), 0);
    }), _) {
      const j = Math.floor(w / 500) % 2, se = Math.max(1, A * 0.3);
      for (let he = 0; he < 8; he++) if (he % 2 === j) for (let ve = A + 1.2; ve < A + 1.2 + se; ve += 0.7) Q(Math.floor(C + Math.cos(he * Math.PI / 4) * ve), Math.floor(H + Math.sin(he * Math.PI / 4) * ve), R.sun, 1, iu);
    }
    fe(C, H, A, (j, se, he, ve) => {
      he * he + ve * ve <= A * A && Q(j, se, Do(((ve / A + 1) / 2 - 0.6) / 0.4) > Eo(j, se) ? R.sunEdge : R.sun, 1, tu);
    });
  }), l.moons.forEach((k) => {
    const A = Math.max(1.5, k.d * 0.37 / f), C = k.x / f, H = k.y / g, de = C + 0.547 * A, j = H - 0.503 * A, se = 0.82 * A;
    fe(C, H, A, (he, ve, Ze, lt) => {
      if (Ze * Ze + lt * lt > A * A) return;
      const Et = he + 0.5 - de, gn = ve + 0.5 - j;
      Et * Et + gn * gn > se * se && Q(he, ve, Do((lt + A) / (2 * A) * 1.1 - 0.1) > Eo(he, ve) ? R.moon : De, 1, nu);
    });
  }), l.clouds.forEach((k) => {
    const A = Math.max(3, k.w / f), C = A * 0.6665, H = k.x / f, de = k.y / g, j = Ia(k.fill, "#000000", 0.16);
    for (let se = Math.max(0, Math.floor(de) - 1); se <= Math.min(d - 1, de + C + 1); se++) for (let he = Math.max(0, Math.floor(H) - 1); he <= Math.min(o - 1, H + A + 1); he++) {
      const ve = (he + 0.5 - H) / A, Ze = (se + 0.5 - de) / A;
      id(ve, Ze) && Q(he, se, !id(ve, Ze + 1 / A) || Do((Ze - 0.42) / 0.25) * 0.8 > Eo(he, se) ? j : k.fill, k.o, au);
    }
  }), l.fogs.forEach((k) => {
    const A = Math.floor(k.y / g), C = Math.max(A, Math.floor((k.y + 6 * Z) / g) - 1), H = Math.floor(k.x / f), de = Math.floor((k.x + k.w) / f);
    for (let j = A; j <= C; j++) for (let se = H; se <= de; se++) {
      const he = (se - H) / Math.max(1, de - H);
      Q(se, j, k.c, k.a * (he < 0.25 ? he / 0.25 : he > 0.75 ? (1 - he) / 0.25 : 1), 0);
    }
  });
  const z = Math.max(2, Math.round(9 / g));
  l.drops.forEach((k) => {
    const A = k.x / f, C = Math.floor(k.y / g);
    for (let H = 0; H < z; H++) Q(Math.floor(A - 0.208 * H * g / f), C + H, R.rain, k.o, ou);
  });
  const Pe = Math.max(0, Math.round(4.4 / f / 2.6));
  return l.flakes.forEach((k) => {
    const A = Math.floor(k.x / f), C = Math.floor(k.y / g);
    Q(A, C, R.snow, k.o, Pr);
    for (let H = 1; H <= Pe; H++)
      Q(A - H, C, R.snow, k.o, Pr), Q(A + H, C, R.snow, k.o, Pr), Q(A, C - H, R.snow, k.o, Pr), Q(A, C + H, R.snow, k.o, Pr);
  }), l.bolts.forEach((k) => {
    if (f <= 3.5)
      for (let A = Math.floor(k.y / g); A <= (k.y + 24) / g; A++) for (let C = Math.floor(k.x / f); C <= (k.x + 11) / f; C++)
        sp(mp, (C + 0.5) * f - k.x, (A + 0.5) * g - k.y) && Q(C, A, R.sun, 1, Bl);
    else {
      const A = Math.round(k.x / f), C = Math.round(k.y / g);
      gp.forEach((H, de) => H.split("").forEach((j, se) => {
        j === "#" && Q(A + se, C + de, R.sun, 1, Bl);
      }));
    }
  }), { col: V, ids: q };
}
function bp(a, l) {
  const o = l.px, d = Math.max(6, Math.round(l.width / o)), f = Math.max(6, Math.round(l.height / o)), g = l.width / d, w = l.height / f, _ = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, y = (Y) => {
    const ee = ru(Y, l);
    return vp(ee, su(ee, { clock: _, ambient: l.ambient, seed: l.seed }), d, f, g, w, _, l.ambient);
  }, R = y(a), me = l.reveal == null ? 1 : Do(l.reveal);
  let ae = R.col, U = R.ids;
  if (me < 1) {
    const Y = l.prev ? y(l.prev) : null, ee = me * (d + 12);
    ae = new Array(d * f), U = new Uint8Array(d * f);
    for (let Z = 0; Z < d * f; Z++) {
      const V = Z % d, q = Z / d | 0;
      (l.reduce ? me : Do((ee - V) / 12)) > Eo(V, q) ? (ae[Z] = R.col[Z], U[Z] = R.ids[Z]) : Y ? (ae[Z] = Y.col[Z], U[Z] = Y.ids[Z]) : (ae[Z] = null, U[Z] = 255);
    }
  }
  return lp(ae, U, d, f, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function wp(a, l, o) {
  const d = o.width, f = o.height, g = o.reveal == null ? 1 : Do(o.reveal), w = (U, Y) => {
    const ee = ru(Y, o);
    yp(U, ee, su(ee, o));
  };
  if (a.clearRect(0, 0, d, f), g >= 1) {
    w(a, l);
    return;
  }
  if (o.prev && w(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = g, w(a, l), a.restore();
    return;
  }
  const _ = a.canvas, y = _.__wxOff || (_.__wxOff = document.createElement("canvas"));
  (y.width !== _.width || y.height !== _.height) && (y.width = _.width, y.height = _.height);
  const R = y.getContext("2d");
  R.setTransform(a.getTransform()), R.clearRect(0, 0, d, f), w(R, l);
  const me = g * (d + 64) - 64, ae = R.createLinearGradient(me, 0, me + 64, 0);
  ae.addColorStop(0, "rgba(0,0,0,1)"), ae.addColorStop(1, "rgba(0,0,0,0)"), R.globalCompositeOperation = "destination-in", R.fillStyle = ae, R.fillRect(0, 0, d, f), R.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(y, 0, 0), a.restore();
}
function yp(a, l, o) {
  const { W: d, H: f, S: g, C: w, cw: _, yb: y, glowAt: R, soft: me, tw: ae, sy: U } = l, Y = a.getTransform().a || 1, ee = (z) => {
    a.shadowColor = z ? "rgba(28,18,8,.22)" : "transparent", a.shadowBlur = z ? 4 * Y : 0, a.shadowOffsetY = z ? 1.5 * Y : 0;
  }, Z = (z, Pe) => {
    const k = Dl(z);
    return "rgba(" + k[0] + "," + k[1] + "," + k[2] + "," + Math.max(0, Math.min(1, Pe)).toFixed(3) + ")";
  }, V = (z, Pe) => {
    const k = a.createLinearGradient(0, 0, d, 0);
    k.addColorStop(0, z[0]);
    for (let A = 0; A < z.length - 1; A++) {
      const C = (A + Pe) * _, H = (C - ae / 2) / d, de = (C + ae / 2) / d;
      H > 0 && H < 1 && k.addColorStop(H, z[A]), de > 0 && de < 1 && k.addColorStop(de, z[A + 1]);
    }
    return k.addColorStop(1, z[z.length - 1]), k;
  }, q = Math.max(24, Math.ceil(d / 4)), ce = (z, Pe) => {
    a.beginPath();
    for (let k = 0; k <= q; k++) {
      const A = d * k / q, C = z == null ? 0 : y(A) + z;
      k ? a.lineTo(A, C) : a.moveTo(A, C);
    }
    for (let k = q; k >= 0; k--) {
      const A = d * k / q;
      a.lineTo(A, y(A) + Pe);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = V(g.filter((z) => !z.night).map((z) => z.sky), 0.75), a.fillRect(0, 0, d, f);
  const Q = a.createLinearGradient(0, 0, d, 0);
  for (let z = 0; z <= 64; z++) {
    const Pe = R(d * z / 64);
    Q.addColorStop(z / 64, Z(Pe.c, Math.min(1, Pe.a)));
  }
  a.fillStyle = Q;
  for (let z = 0; z < 8; z++)
    a.globalAlpha = 1 - z / 8, ce(z * 2 * U, (z + 1) * 2 * U);
  a.fillStyle = V(g.filter((z) => z.night).map((z) => z.sky), 1.25);
  const fe = Math.max(0.5, me), X = 6;
  a.globalAlpha = 1, ce(null, -fe);
  for (let z = 0; z < X; z++)
    a.globalAlpha = 1 - (z + 0.5) / X, ce(-fe + 2 * fe * z / X, -fe + 2 * fe * (z + 1) / X);
  a.globalAlpha = 1;
  const S = new Path2D(hp), B = new Path2D(pp), be = new Path2D(up), Ce = new Path2D(fp);
  a.fillStyle = w.star, o.stars.forEach((z) => {
    a.globalAlpha = z.o, z.big ? (a.save(), a.translate(z.x, z.y), a.scale(z.size, z.size), a.fill(S), a.restore()) : (a.beginPath(), a.arc(z.x, z.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const O = Ia(w.sun, "#ffffff", 0.55);
  o.suns.forEach((z) => {
    const Pe = a.createRadialGradient(z.x, z.y, 0, z.x, z.y, z.halo);
    Pe.addColorStop(0, Z(O, 0.42)), Pe.addColorStop(0.7, Z(O, 0)), a.fillStyle = Pe, a.beginPath(), a.arc(z.x, z.y, z.halo, 0, Math.PI * 2), a.fill();
    const k = a.createLinearGradient(0, z.y - z.rad, 0, z.y + z.rad);
    k.addColorStop(0.6, w.sun), k.addColorStop(1, w.sunEdge), a.fillStyle = k, ee(!0), a.beginPath(), a.arc(z.x, z.y, z.rad, 0, Math.PI * 2), a.fill(), ee(!1);
  });
  const De = Ia(w.moon, "#ffffff", 0.6);
  o.moons.forEach((z) => {
    a.save(), a.translate(z.x - z.d / 2, z.y - z.d / 2), a.scale(z.d / 46, z.d / 46);
    const Pe = a.createLinearGradient(0, 6, 0, 40);
    Pe.addColorStop(0, De), Pe.addColorStop(1, w.moon), a.fillStyle = Pe, ee(!0), a.fill(B), ee(!1), a.restore();
  }), o.clouds.forEach((z) => {
    a.save(), a.globalAlpha = z.o, a.translate(z.x, z.y), a.scale(z.w / 46, z.h / 30.66), a.translate(-4, -9.67), a.fillStyle = z.fill, ee(!0), a.fill(be), ee(!1), a.restore();
  }), o.fogs.forEach((z) => {
    const Pe = a.createLinearGradient(z.x, 0, z.x + z.w, 0);
    Pe.addColorStop(0, Z(z.c, 0)), Pe.addColorStop(0.25, Z(z.c, z.a)), Pe.addColorStop(0.75, Z(z.c, z.a)), Pe.addColorStop(1, Z(z.c, 0)), a.fillStyle = Pe, a.fillRect(z.x, z.y, z.w, 6 * U);
  }), a.fillStyle = w.rain, o.drops.forEach((z) => {
    a.save(), a.globalAlpha = z.o, a.translate(z.x, z.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = w.snow, o.flakes.forEach((z) => {
    a.globalAlpha = z.o, a.beginPath(), a.arc(z.x, z.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = w.sun, o.bolts.forEach((z) => {
    a.save(), a.globalAlpha = z.o, a.translate(z.x, z.y), a.fill(Ce), a.restore();
  }), a.restore();
}
const xp = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", Nr = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, yl = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, uc = (a, l) => '<path class="' + l + '" d="' + a + '"/>', kp = (a, l) => ' style="animation-delay:-' + Math.round(a * 137 % l) + 'ms"', Pa = (a, l, o, d) => {
  const f = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (d < 1 ? ' opacity="' + d + '"' : "") + kp(a, 2400) + ' d="M' + a + " " + (l - o) + "L" + (a + f) + " " + (l - f) + "L" + (a + o) + " " + l + "L" + (a + f) + " " + (l + f) + "L" + a + " " + (l + o) + "L" + (a - f) + " " + (l + f) + "L" + (a - o) + " " + l + "L" + (a - f) + " " + (l - f) + 'Z"/>';
}, rd = ([a, l, o], d) => '<path class="wbMoonPath" d="' + a + '" fill="url(#' + d + ')"/><defs><linearGradient id="' + d + '" x1="0" y1="' + l + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Mp = (a, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Sp = (a) => (a ? ["29.35", "43.04", "56.74"].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), Cp = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, o], d) => '<circle class="wbFlake" style="animation-delay:-' + d * 640 + 'ms" cx="' + l + '" cy="' + o + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Tp(a, l, o, d) {
  const f = (g) => '<g filter="url(#' + d + '-sh)">' + g + "</g>";
  return a === "clear" ? l ? f(rd(o ? yl.l : yl.s, d)) + (o ? Pa(70, 20, 5.83, 1) + Pa(78.33, 41.67, 3.75, 0.8) + Pa(60, 71.67, 3.33, 0.6) : Pa(42, 12, 3.5, 1) + Pa(47, 25, 2.25, 0.8) + Pa(36, 43, 2, 0.6)) : f(Mp(d, o)) : a === "partly" ? f(l ? rd(o ? yl.lp : yl.sp, d) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + f(uc(o ? Nr.lp : Nr.sp, l ? "wbCloudLight" : "wbBright")) + (l ? o ? Pa(73.33, 16.67, 4.17, 0.9) : Pa(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? f(uc(o ? Nr.lc : Nr.s, l ? "wbCloudLight" : "wbBright")) + (l ? o ? Pa(15, 15, 3.75, 0.8) + Pa(76.67, 13.33, 2.92, 0.6) : Pa(9, 9, 2.25, 0.8) + Pa(46, 8, 1.75, 0.6) : "") : f(uc(o ? Nr.lr : Nr.s, "wbCloudLight")) + (a === "rain" ? Sp(o) : Cp(o));
}
const Lp = (a, l) => '<defs><filter id="' + a + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (l ? 1.6 : 1) + '" stdDeviation="' + (l ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Ap(a, l, o, d) {
  let f = xp(a);
  const g = f === "night" || !!o;
  f === "night" && (f = "clear");
  const w = l ? 90 : 54;
  return { k: f, night: g, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + Lp(d, l) + Tp(f, g, l, d) + "</svg>" };
}
const _p = [
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
], xl = (a, l) => (_p[l % 8 * 8 + a % 8] + 0.5) / 64, Ga = (a) => [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)], On = (a, l, o) => [Math.round(a[0] + (l[0] - a[0]) * o), Math.round(a[1] + (l[1] - a[1]) * o), Math.round(a[2] + (l[2] - a[2]) * o)], xs = (a) => a < 0 ? 0 : a > 1 ? 1 : a, sd = (a, l) => {
  let o = a * 374761393 + l * 668265263 ^ 1540483477;
  return o = Math.imul(o ^ o >>> 13, 1274126177), ((o ^ o >>> 16) >>> 0) / 4294967296;
}, nr = [255, 255, 255], Jn = Ga("#26221e"), ld = Ga("#0288d1"), Ep = Ga("#01579b"), pc = Ga(aa.cloudDay), hc = Ga(aa.cloudNight), kl = Ga(aa.dusk), fc = Ga(aa.sunEdge), Dp = Ga(aa.sun), Rp = 10, cd = 0.3, Ro = 56, lu = 21;
function Np(a) {
  const l = Array.from({ length: lu }, () => new Array(Ro).fill(void 0)), o = (w, _, y) => {
    l[_][w] = y;
  }, d = On(kl, Jn, 0.35), f = On(Jn, nr, 0.22);
  for (let w = 0; w <= 6; w++) {
    const _ = w < 2 ? Ro - 2 : Ro - 1;
    for (let y = 6 - w; y <= _; y++) o(y, w, w < 2 ? d : w === 6 ? f : Jn);
  }
  const g = [kl, fc, hc, Ga(aa.skyRainDay), On(kl, Jn, 0.2), On(a, Jn, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, _) => {
    const y = 9 + _ * 6;
    for (let R = 0; R < w; R++) {
      const me = g[(_ * 2 + R * 3) % g.length];
      for (let ae = y; ae < y + 5; ae++)
        o(ae, 7 + R * 2, On(me, Jn, 0.12)), o(ae, 8 + R * 2, R === w - 1 ? On(me, nr, 0.3) : me);
      o(y + 5, 7 + R * 2, Jn), o(y + 5, 8 + R * 2, Jn);
    }
  });
  for (let w = 7; w <= 12; w++) o(5, w, Jn);
  o(5, 13, fc);
  for (let w = 7; w <= 14; w++) for (let _ = 42; _ <= 51; _++) o(_, w, _ === 51 ? hc : pc);
  for (let w = 43; w <= 50; w += 2)
    o(w, 12, Jn), o(w, 9, On(Jn, pc, 0.4));
  for (let w = 40; w <= 53; w++) o(w, 14, w === 40 || w === 53 ? hc : pc);
  for (let w = 15; w <= 18; w++) for (let _ = 46; _ <= 49; _++) o(_, w, w === 18 ? Jn : w === 16 ? fc : kl);
  for (let w = 15; w <= 19; w++) o(44, w, Jn);
  return o(44, 20, Dp), l;
}
function Bp(a, l, o, d) {
  const f = Math.max(1, Math.round(a)), g = Math.max(1, Math.round(l)), w = new Uint8ClampedArray(f * g * 4), _ = Ga(d.skyClearDay), y = Ga(d.skyFogDay), R = Np(_), me = Math.round(g * 0.55), ae = xs(1 - Math.log(o / cd) / Math.log(Rp / cd)), U = On(_, y, ae), Y = (q) => xs((q - 0.1) / 0.9), ee = xs((1 - Math.exp(-2 / o) - 0.2) / 0.8), Z = Math.round(f / 2 - Ro / 2), V = me + 3;
  for (let q = 0; q < g; q++) {
    const ce = V - 1 - q, Q = q - V;
    for (let fe = 0; fe < f; fe++) {
      const X = fe - Z;
      let S, B;
      const be = ce >= 0 && ce < lu && X >= 0 && X < Ro ? R[ce][X] : void 0;
      if (be)
        S = be, B = ee;
      else if (ce >= 0 && ce <= 1 && X >= 4 - ce && X <= 5 - ce)
        S = On(nr, ld, 0.15), B = ee;
      else if (q < me) {
        const De = xs(((q + 0.5) / me - 0.15) / 0.85) * 3, z = Math.min(3, Math.floor(De + xl(fe + 2, q + 5)));
        S = On(U, nr, z * 0.1), B = ae * 0.95;
      } else {
        const De = (q - me + 0.5) / (g - me), z = Math.min(1.5, 6e-3 / (De * De)), Pe = xs(De * 1.4) * 3, k = Math.min(3, Math.floor(Pe + xl(fe + 1, q + 6)));
        S = On(ld, Ep, k / 3);
        const A = 1 + Math.round(De * 7), C = Math.floor(fe / (A * 3)), H = 0.06 + 0.16 * De, de = fe % (A * 3) < A;
        de && sd(C, q) < H ? S = On(S, nr, 0.18 + 0.1 * (1 - De)) : de && De > 0.5 && sd(C, q - 1) < H && (S = On(S, Jn, 0.12)), B = Y(1 - Math.exp(-z / o)), Q === 0 && X >= 3 && X <= 8 ? (S = On(S, nr, X < 6 ? 0.8 : 0.45), B = ee) : Q >= 0 && Q <= 2 && X >= Ro && X < Ro + 40 ? ((1 - (X - Ro) / 40) * (Q === 1 ? 0.9 : 0.5) > xl(fe, q + 3) && (S = On(S, nr, 0.5)), B = ee) : Q === 0 && X >= 6 && X < Ro && (S = On(S, Jn, X % 2 === 0 ? 0.35 : 0.2), B = ee);
      }
      const Ce = B > xl(fe, q) ? y : S, O = (q * f + fe) * 4;
      w[O] = Ce[0], w[O + 1] = Ce[1], w[O + 2] = Ce[2], w[O + 3] = 255;
    }
  }
  return { data: w, w: f, h: g };
}
const Pp = {
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
}, Ip = 1.6;
function Hp(a, l) {
  const o = a ? Pp[String(a).toUpperCase()] : void 0;
  if (!o || !(l > 0)) return;
  const d = (g) => Math.abs(Math.log(g[2] / l)), f = o.reduce((g, w) => d(w) < d(g) ? w : g);
  return d(f) <= Math.log(Ip) ? { from: f[0], to: f[1], km: f[2] } : void 0;
}
const Fp = (a, l) => l === "mi" ? a * 1.609344 : l === "m" ? a / 1e3 : l === "ft" ? a * 3048e-7 : l === "yd" ? a * 9144e-7 : a, Op = (a) => a < 1 ? "very_poor" : a < 4 ? "poor" : a < 10 ? "moderate" : a < 20 ? "good" : a < 40 ? "very_good" : "excellent", Va = 6e4, Yt = 36e5, so = 864e5, Ms = 1440, qp = 6, Wp = 10 * Va, dd = 3, jp = 3, ud = { day: [6, 22], waking: [7, 23], all: [0, 24] }, zp = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], Vp = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", pd = (a, l, o, d) => '<circle cx="' + a + '" cy="' + l + '" r="' + o + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((f) => {
  const g = Math.cos(f * Math.PI / 180), w = Math.sin(f * Math.PI / 180), _ = o + 2, y = o + 2 + d;
  return "M" + (a + g * _).toFixed(2) + " " + (l + w * _).toFixed(2) + "L" + (a + g * y).toFixed(2) + " " + (l + w * y).toFixed(2);
}).join("") + '"/>', Lo = (a) => '<path d="' + Vp + '"' + (a ? ' transform="' + a + '"' : "") + "/>", Ao = (a) => '<path d="' + a + '"/>', hd = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function Gp(a, l) {
  const o = "translate(0,-3)";
  switch (a) {
    case "sunny":
      return l ? hd : pd(12, 12, 4, 2.5);
    case "clear-night":
      return hd;
    case "partlycloudy":
      return (l ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : pd(7.5, 7.5, 2.6, 1.4)) + Lo("translate(3.6,3) scale(.85)");
    case "cloudy":
      return Lo();
    case "fog":
      return Ao("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return Lo(o) + Ao("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return Lo(o) + Ao("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return Lo(o) + Ao("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return Lo(o) + Ao("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return Lo(o) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return Lo(o) + Ao("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return Lo(o) + Ao("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return Ao("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + Ao("M12 8v5M12 16h.01");
  }
}
const mc = (a, l) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + Gp(a, l) + "</svg>", Up = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Yp = 30 * Va, Zp = 7, Kp = 3, fd = 1, $p = Va, Xp = 15 * Va, Jp = 5, Qn = {
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
}, Ke = {
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
  fineParticles: "fine particles",
  aqLevel: { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }
}, Qp = {
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
}, eh = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], th = Object.keys(Ke.phases), Ml = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, nh = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, cu = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Sl = 100, md = "µg/m³", ah = "weather_alerts.air_quality_pollen", gd = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], oh = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, ih = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], rh = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, sh = { daily: 1, hourly: 2 }, We = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Fn = (a, l) => a.replace(/\{(\w+)\}/g, (o, d) => l[d] ?? ""), Ir = (a) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + a + '"/></svg>', lh = () => {
  var a;
  return !!((a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches);
}, dn = (a) => a != null && a !== "" && Number.isFinite(Number(a)), vd = /* @__PURE__ */ new Map(), bd = /* @__PURE__ */ new Map(), gc = /* @__PURE__ */ new WeakMap(), ch = (a) => {
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
function Mn(a, l, o) {
  const d = Number(a);
  if (Number.isNaN(d)) return String(a);
  const f = (l == null ? void 0 : l.number_format) === "none", g = { maximumFractionDigits: 2, ...o, ...f ? { useGrouping: !1 } : {} }, w = f ? "en-US" : ch(l), _ = JSON.stringify([w, g]);
  let y = vd.get(_);
  if (!y) {
    try {
      y = new Intl.NumberFormat(w, g);
    } catch {
      y = new Intl.NumberFormat(void 0, g);
    }
    vd.set(_, y);
  }
  return y.format(d);
}
const qc = (a) => {
  var l;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.language) || (a == null ? void 0 : a.language) || void 0;
};
function dh(a) {
  if (!a) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (gc.has(a)) return gc.get(a);
  const l = a.time_format, o = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? a.language : void 0).includes("10") : l === "12";
  return gc.set(a, o), o;
}
const du = (a) => {
  var l, o;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.time_zone) === "server" && ((o = a == null ? void 0 : a.config) != null && o.time_zone) ? a.config.time_zone : void 0;
};
function uu(a, l) {
  const o = JSON.stringify([a, l]);
  let d = bd.get(o);
  if (!d) {
    try {
      d = new Intl.DateTimeFormat(a, l);
    } catch {
      d = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    bd.set(o, d);
  }
  return d;
}
const Si = (a, l) => uu(qc(l), { hour: "numeric", minute: "2-digit", hourCycle: dh(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: du(l) }).format(a), wd = (a, l) => uu(qc(l), { weekday: "short", timeZone: du(l) }).format(a), uh = (a, l) => a.toLocaleDateString(qc(l), { weekday: "narrow" }), mn = (a, l) => dn(l) ? Mn(Math.round(Number(l)), a.locale) + "°" : "–", Hr = (a) => {
  const l = new Date(a);
  return l.setHours(0, 0, 0, 0), l;
}, Br = (a, l) => a.getFullYear() === l.getFullYear() && a.getMonth() === l.getMonth() && a.getDate() === l.getDate(), fa = Math.PI / 180, ph = 2440588, hh = 2451545, Pl = fa * 23.4397, fh = 149598e3, mh = -0.833 * fa, gh = 0.133 * fa, yd = 5 * Va, pu = (a) => a.getTime() / so - 0.5 + ph - hh, hu = (a, l) => Math.atan2(Math.sin(a) * Math.cos(Pl) - Math.tan(l) * Math.sin(Pl), Math.cos(a)), fu = (a, l) => Math.asin(Math.sin(l) * Math.cos(Pl) + Math.cos(l) * Math.sin(Pl) * Math.sin(a)), vh = (a, l) => fa * (280.16 + 360.9856235 * a) - l, bh = (a, l, o) => Math.asin(Math.sin(l) * Math.sin(o) + Math.cos(l) * Math.cos(o) * Math.cos(a));
function mu(a) {
  const l = fa * (357.5291 + 0.98560028 * a), o = fa * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), d = l + o + fa * 102.9372 + Math.PI;
  return { ra: hu(d, 0), dec: fu(d, 0), dist: fh };
}
function gu(a) {
  const l = fa * (218.316 + 13.176396 * a), o = fa * (134.963 + 13.064993 * a), d = fa * (93.272 + 13.22935 * a), f = l + fa * 6.289 * Math.sin(o), g = fa * 5.128 * Math.sin(d);
  return { ra: hu(f, g), dec: fu(f, g), dist: 385001 - 20905 * Math.cos(o) };
}
const vu = (a, l, o, d) => {
  const f = pu(l), g = a(f);
  return bh(vh(f, fa * -d) - g.ra, fa * o, g.dec);
}, Wc = (a, l, o) => vu(mu, a, l, o), wh = (a, l, o) => vu(gu, a, l, o);
function bu(a, l, o, d) {
  const f = {};
  let g = o.getTime(), w = a(o) - l;
  for (let _ = g + yd; _ <= d.getTime(); _ += yd) {
    const y = a(new Date(_)) - l;
    if (w < 0 != y < 0) {
      const R = new Date(g + (_ - g) * w / (w - y));
      y > 0 ? f.rise ?? (f.rise = R) : f.set ?? (f.set = R);
    }
    g = _, w = y;
  }
  return f;
}
const wu = (a) => {
  const l = Hr(a);
  return [l, new Date(l.getTime() + so)];
}, yh = (a, l, o) => bu((d) => Wc(d, l, o), mh, ...wu(a)), xh = (a, l, o) => bu((d) => wh(d, l, o), gh, ...wu(a));
function kh(a) {
  const l = pu(a), o = mu(l), d = gu(l), f = Math.acos(Math.sin(o.dec) * Math.sin(d.dec) + Math.cos(o.dec) * Math.cos(d.dec) * Math.cos(o.ra - d.ra)), g = Math.atan2(o.dist * Math.sin(f), d.dist - o.dist * Math.cos(f)), w = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - d.ra), Math.sin(o.dec) * Math.cos(d.dec) - Math.cos(o.dec) * Math.sin(d.dec) * Math.cos(o.ra - d.ra));
  return { fraction: (1 + Math.cos(g)) / 2, phase: 0.5 + 0.5 * g * (w < 0 ? -1 : 1) / Math.PI };
}
const Mh = (a) => {
  const l = a * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, Il = (a) => {
  const l = a == null ? void 0 : a.config;
  return l && dn(l.latitude) && dn(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function vc(a, l) {
  var R, me, ae;
  const o = Il(a), d = o ? yh(l, o.lat, o.lon) : {}, f = (R = a == null ? void 0 : a.states) == null ? void 0 : R["sun.sun"], g = Hr(l).getTime(), w = (U) => {
    const Y = U ? new Date(U) : null;
    return Y && Number.isFinite(Y.getTime()) && Hr(Y).getTime() === g ? Y : null;
  }, _ = w((me = f == null ? void 0 : f.attributes) == null ? void 0 : me.next_rising), y = w((ae = f == null ? void 0 : f.attributes) == null ? void 0 : ae.next_setting);
  return _ && (d.rise = _), y && (d.set = y), d;
}
function Sh(a) {
  var d;
  const l = (d = a == null ? void 0 : a.states) == null ? void 0 : d["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const o = Il(a);
  return o ? Wc(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const Ss = (a) => !!a && a.state !== "unavailable" && a.state !== "unknown", Fl = (a, l) => {
  var d;
  const o = (d = a.entities) == null ? void 0 : d[l];
  return !o || !o.hidden && !o.entity_category;
}, ha = (a, l, o) => {
  var d, f;
  for (const g of l) {
    const w = (d = a.states) == null ? void 0 : d[g];
    if (!Ss(w)) continue;
    const _ = (f = w.attributes) == null ? void 0 : f[o];
    if (_ != null && _ !== "") return { stateObj: w, value: _ };
  }
}, Ch = (a, l) => l.map((o) => {
  var d;
  return (d = a.states) == null ? void 0 : d[o];
}).find(Ss), Th = (a, l, o) => l.map((d) => {
  var f;
  return (f = a.states) == null ? void 0 : f[d];
}).find((d) => {
  var f;
  return Ss(d) && (((f = d.attributes) == null ? void 0 : f.supported_features) == null || Number(d.attributes.supported_features) & sh[o]);
});
function tr(a, l, o) {
  var g, w, _, y;
  const d = ((w = (g = a.config) == null ? void 0 : g.unit_system) == null ? void 0 : w.length) || "", f = (l == null ? void 0 : l.attributes) || {};
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
      return f.temperature_unit || ((y = (_ = a.config) == null ? void 0 : _.unit_system) == null ? void 0 : y.temperature) || "";
  }
}
function Rl(a, l, o, d) {
  try {
    if (typeof a.formatEntityAttributeValueToParts == "function") {
      const [f, ...g] = a.formatEntityAttributeValueToParts(l, o, d).map((w) => w.value);
      return { number: f, unit: g.join("").trim() };
    }
  } catch {
  }
  return { number: Mn(d, a.locale), unit: tr(a, l, o) };
}
function Lh(a, l, o, d) {
  try {
    if (typeof a.formatEntityAttributeValue == "function") return a.formatEntityAttributeValue(l, o, d);
  } catch {
  }
  const f = Rl(a, l, o, d);
  return (f.number + " " + f.unit).trim();
}
function Cl(a, l) {
  var d;
  try {
    if (typeof a.formatEntityState == "function") return a.formatEntityState(l);
  } catch {
  }
  const o = (d = l.attributes) == null ? void 0 : d.unit_of_measurement;
  return Qp[l.state] || (o && dn(l.state) ? Mn(l.state, a.locale) + " " + o : l.state);
}
function xd(a, l) {
  var o;
  try {
    if (typeof a.formatEntityName == "function") return a.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((o = l.attributes) == null ? void 0 : o.friendly_name) || l.entity_id;
}
const Ah = (a) => a < 3 ? "low" : a < 6 ? "moderate" : a < 8 ? "high" : a < 11 ? "very_high" : "extreme", _h = (a) => cu.find(([, l]) => a <= l)[0];
function Eh(a, l) {
  if (l === "Beaufort") return Math.round(a);
  const o = l ? oh[l] : void 0;
  if (o === void 0) return;
  const d = ih.findIndex((f) => a * o < f);
  return d === -1 ? 12 : d;
}
const kd = (a, l) => {
  const o = l ? rh[l] : void 0;
  return o === void 0 ? void 0 : a * o;
}, Md = (a) => Object.keys(a.states || {}).find((l) => {
  var o, d;
  return l.startsWith("sensor.") && ((d = (o = a.entities) == null ? void 0 : o[l]) == null ? void 0 : d.platform) === "moon";
}), bc = (a) => Object.values(a.states || {}).filter((l) => {
  var o, d;
  return l.entity_id.startsWith("sensor.") && ((o = l.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((d = l.attributes) == null ? void 0 : d.state_class) ?? "") && Fl(a, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function Dh(a) {
  var o;
  const l = {};
  for (const [d, f] of Object.entries(((o = a == null ? void 0 : a.core) == null ? void 0 : o.integration) ?? {})) {
    if (f && "integration_type" in f) {
      l[d] = f.categories;
      continue;
    }
    for (const [g, w] of Object.entries((f == null ? void 0 : f.integrations) ?? {})) l[g] = w == null ? void 0 : w.categories;
  }
  return l;
}
const yu = (a, l, o) => {
  var f, g, w;
  const d = (g = (f = a.entities) == null ? void 0 : f[o]) == null ? void 0 : g.platform;
  return !!d && !!((w = l[d]) != null && w.includes(ah));
};
function Rh(a, l) {
  const o = /* @__PURE__ */ new Map();
  return Object.values(a.states || {}).filter((d) => {
    var f;
    return d.entity_id.startsWith("sensor.") && gd.includes(((f = d.attributes) == null ? void 0 : f.device_class) ?? "") && Fl(a, d.entity_id) && yu(a, l, d.entity_id);
  }).sort((d, f) => d.entity_id.localeCompare(f.entity_id)).forEach((d) => {
    o.has(d.attributes.device_class) || o.set(d.attributes.device_class, d.entity_id);
  }), gd.map((d) => o.get(d)).filter(Boolean);
}
const Nh = (a, l) => Object.values(a.states || {}).filter((o) => {
  var d, f;
  return o.entity_id.startsWith("sensor.") && Fl(a, o.entity_id) && yu(a, l, o.entity_id) && (((f = (d = a.entities) == null ? void 0 : d[o.entity_id]) == null ? void 0 : f.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function Sd(a, l, o) {
  const d = Math.max(l - a, 1e-6), f = o[o.length - 1], g = o.find((R) => d / R <= 4) ?? f * Math.ceil(d / (4 * f)), w = Math.floor(a / g) * g;
  let _ = Math.ceil(l / g) * g;
  _ === w && (_ = w + g);
  const y = [];
  for (let R = w; R <= _ + g / 1e3; R += g) y.push(R);
  return { min: w, max: _, ticks: y };
}
const ks = (a, l, o) => {
  const d = (w) => [1, 3, 5].map((_) => parseInt(w.slice(_, _ + 2), 16)), f = d(a), g = d(l);
  return "rgb(" + f.map((w, _) => Math.round(w + (g[_] - w) * o)).join(", ") + ")";
}, Bh = (a, l, o, d) => {
  const f = o * Math.abs(1 - 2 * d), g = d < 0.5 ? 0 : 1;
  return "M " + a + " " + (l - o) + " A " + o + " " + o + " 0 0 0 " + a + " " + (l + o) + " A " + f + " " + o + " 0 0 " + g + " " + a + " " + (l - o) + " Z";
}, _o = ({ icon: a, name: l, sub: o, visual: d, double: f, backdrop: g, cls: w }) => '<div class="wbCard wbSquare' + (f ? " wbDouble" : "") + (g ? " wbHasBackdrop" : "") + (w ? " " + w : "") + '">' + (g ? '<div class="wbBackdrop" aria-hidden="true">' + g + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Ir(a) + '</div><div class="wbText"><span class="wbName">' + We(l) + "</span>" + (o ? '<span class="wbSub">' + We(o) + "</span>" : "") + '</div></div><div class="wbVisual">' + d + "</div></div>", Tl = (a, l) => '<div class="wbValue"><span class="wbNum">' + We(a) + "</span>" + (l ? '<span class="wbUnitV">' + We(l) + "</span>" : "") + "</div>";
function Ph(a) {
  const l = a.max - a.min || 1, o = (_) => 100 - (Math.min(a.max, Math.max(a.min, _)) - a.min) / l * 100, d = (_) => _ / Ms * 100 + "%", f = (_) => _.map((y) => y.t + "," + o(y.v)).join(" "), g = a.kind === "line" ? a.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + a.sun.map((_) => '<span class="wbDcSunMark" style="left:' + d(_.t) + '">' + Ir(_.rise ? Qn.sunsetUp : Qn.sunsetDown) + We(_.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + a.ticks.map((_) => '<span style="top:' + o(_) + '%">' + We(a.format(_)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Ms + ' 100" preserveAspectRatio="none">' + a.night.map(([_, y]) => '<rect class="wbDcNight" x="' + _ + '" y="0" width="' + (y - _) + '" height="100"></rect>').join("") + a.ticks.map((_) => '<line class="wbDcGrid" x1="0" x2="' + Ms + '" y1="' + o(_) + '" y2="' + o(_) + '" vector-effect="non-scaling-stroke"></line>').join("") + a.sun.map((_) => '<line class="wbDcSunLine" x1="' + _.t + '" x2="' + _.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (a.past && a.past.length > 1 ? '<polyline class="wbDcPast" points="' + f(a.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (g.length > 1 ? '<polygon class="wbDcArea" points="' + g[0].t + ",100 " + f(g) + " " + g[g.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + f(g) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (a.now ? '<line class="wbDcNow" x1="' + a.now.t + '" x2="' + a.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (a.kind === "bars" ? a.points.filter((_) => _.v > 0).map((_) => '<i class="wbDcBar" style="left:' + d(_.t + 12) + ";width:" + d(36) + ";height:" + (100 - o(_.v)) + '%"></i>').join("") : "") + (a.now && a.kind === "line" ? '<i class="wbDcDot" style="left:' + d(a.now.t) + ";top:" + o(a.now.v) + '%"></i>' : "") + (a.peak ? '<span class="wbDcPeak" style="left:' + d(a.peak.t) + ";top:" + o(a.peak.v) + '%">' + We(a.peak.label) + "</span>" : "") + (a.note ? '<span class="wbDcNote">' + We(a.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + a.hours.map((_) => '<span class="' + (_.minor ? "wbMinor" : "") + '" style="left:' + d(_.t) + '">' + We(_.label) + "</span>").join("") + "</div></div>", w;
}
function Ih(a, l) {
  const w = a.map((V) => V.value), _ = Math.min(...w), y = Math.max(...w), R = y - _ || 1, me = (V) => V / (a.length - 1) * 300, ae = (V) => 18 + (1 - (V - _) / R) * 84, U = a.map((V, q) => me(q) + "," + ae(V.value)).join(" "), Y = w.indexOf(y), ee = w.indexOf(_), Z = (V) => V === 0 ? "start" : V === a.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + U + ' 300,102"></polygon><polyline class="wbLine" points="' + U + '" vector-effect="non-scaling-stroke"></polyline><text x="' + me(Y) + '" y="' + (ae(y) - 6) + '" text-anchor="' + Z(Y) + '">' + We(l(y)) + '</text><text x="' + me(ee) + '" y="' + (ae(_) + 14) + '" text-anchor="' + Z(ee) + '">' + We(l(_)) + '</text><text x="0" y="120" text-anchor="start">' + We(a[0].label) + '</text><text x="300" y="120" text-anchor="end">' + We(a[a.length - 1].label) + "</text></svg>";
}
function Hh(a, l) {
  const g = a.map((ae) => ae.value).concat([]), w = Math.min(...g) - 2, _ = Math.max(...g) + 1, y = _ - w || 1, R = 300 / a.length, me = (ae) => (1 - (ae - w) / y) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + a.map((ae, U) => '<rect class="wbBar' + (ae.now ? " wbNowBar" : "") + '" x="' + (U * R + R * 0.2) + '" y="' + me(ae.value) + '" width="' + R * 0.6 + '" height="' + (104 - me(ae.value)) + '" rx="6"></rect><text x="' + (U * R + R / 2) + '" y="120" text-anchor="middle">' + We(ae.label) + "</text>").join("") + "</svg>";
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
], Oh = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Cd = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], qh = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Wh = 0;
function Td(a, { getHass: l, entityId: o, style: d = "bitmap", motion: f = !0, cards: g, onOpen: w, hoursWindow: _ } = {}) {
  var Za, fo;
  const y = "wb" + ++Wh + "-", R = document.createElement("div");
  R.className = "wb", R.dataset.style = d;
  const me = document.createElement("div");
  me.className = "wbBento", R.appendChild(me), a.replaceChildren(R);
  const ae = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality"].filter((M) => !g || g.includes(M)), U = { current: "wide", hourly: "wide", compared_to_average: "double" }, Y = {};
  ae.forEach((M) => {
    const L = document.createElement("div");
    L.className = "wbItem", L.dataset.card = M, L.dataset.size = U[M] || "tile", L.hidden = !0, me.appendChild(L), Y[M] = { el: L, html: null };
  });
  let ee = !1, Z = null, V = 0, q = -1, ce = !1, Q = null;
  const fe = "homecore-next-view", S = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: (() => {
    try {
      return localStorage.getItem(fe);
    } catch {
      return null;
    }
  })() === "bars" ? "bars" : "strip", aq: void 0 }, B = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let be = /* @__PURE__ */ new Date(), Ce = /* @__PURE__ */ new Date();
  const O = {}, De = {}, z = {}, Pe = (M) => {
    var L;
    return ((L = z[M]) == null ? void 0 : L.forecast) ?? [];
  }, k = (M, L) => {
    var P;
    return z[L] ? (P = M.states) == null ? void 0 : P[z[L].entityId] : void 0;
  };
  function A(M) {
    const L = De[M];
    L && (L.unsub.then((P) => {
      typeof P == "function" && P();
    }).catch(() => {
    }), delete De[M]), z[M] && delete z[M];
  }
  function C(M, L, P) {
    var $;
    if (typeof (($ = M.connection) == null ? void 0 : $.subscribeMessage) != "function") return;
    const G = { entityId: P };
    try {
      G.unsub = Promise.resolve(M.connection.subscribeMessage((ie) => {
        ee || De[L] !== G || (ie != null && ie.forecast ? z[L] = { entityId: P, forecast: ie.forecast } : delete z[L], rn());
      }, { type: "weather/subscribe_forecast", forecast_type: L, entity_id: P }));
    } catch (ie) {
      G.unsub = Promise.reject(ie);
    }
    G.unsub.catch(() => {
      De[L] === G && delete De[L];
    }), De[L] = G;
  }
  function H(M, L) {
    var P;
    for (const G of ["daily", "hourly"]) {
      const $ = Th(M, L, G);
      ((P = De[G]) == null ? void 0 : P.entityId) !== ($ == null ? void 0 : $.entity_id) && (A(G), $ && C(M, G, $.entity_id));
    }
  }
  const de = (M, L, P, G = !1) => M.callWS({
    type: "history/history_during_period",
    start_time: P.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [L],
    minimal_response: G,
    no_attributes: G,
    significant_changes_only: !1
  });
  async function j(M, L) {
    var pe, we, ge;
    const P = ha(M, L, "pressure");
    if (!P) return;
    const G = P.stateObj.entity_id, $ = await de(M, G, new Date(Date.now() - 3 * Yt)), ie = (ge = (we = (pe = $ == null ? void 0 : $[G]) == null ? void 0 : pe.find((Be) => {
      var ke;
      return typeof ((ke = Be.a) == null ? void 0 : ke.pressure) == "number";
    })) == null ? void 0 : we.a) == null ? void 0 : ge.pressure;
    B.pressureHistory = typeof ie == "number" ? { entityId: G, value: ie } : void 0;
  }
  async function se(M, L) {
    var we;
    const P = ha(M, L, "temperature");
    if (!P) return;
    const G = P.stateObj.entity_id, $ = Hr(/* @__PURE__ */ new Date()), ie = await de(M, G, new Date($.getTime() - Zp * so)), pe = /* @__PURE__ */ new Map();
    for (const ge of (ie == null ? void 0 : ie[G]) ?? []) {
      const Be = (we = ge.a) == null ? void 0 : we.temperature, ke = new Date((ge.lc ?? ge.lu) * 1e3);
      if (typeof Be != "number" || ke >= $) continue;
      const Ee = ke.toDateString();
      pe.set(Ee, Math.max(pe.get(Ee) ?? -1 / 0, Be));
    }
    B.temperatureHistory = { entityId: G, dailyHighs: [...pe.values()], days: [...pe.entries()].map(([ge, Be]) => ({ date: new Date(ge), high: Be })) };
  }
  async function he(M) {
    const L = bc(M);
    if (!L) return;
    const P = await M.callWS({ type: "recorder/statistic_during_period", statistic_id: L, rolling_window: { duration: { hours: 24 } } });
    B.rain = { entityId: L, change: (P == null ? void 0 : P.change) ?? void 0 };
  }
  function ve() {
    const M = l == null ? void 0 : l();
    if (!M || ee || typeof M.callWS != "function") return;
    const L = gn(M);
    B.lastFetch = Date.now(), [j(M, L), se(M, L), he(M)].forEach((P) => P.then(() => rn(), () => {
    }));
  }
  async function Ze() {
    const M = l == null ? void 0 : l();
    if (!M) return;
    const L = ha(M, gn(M), "temperature");
    if (!L) return;
    const P = L.stateObj.entity_id, G = Hr(/* @__PURE__ */ new Date());
    try {
      const $ = await de(M, P, G), ie = (pe) => (($ == null ? void 0 : $[P]) ?? []).map((we) => {
        var ge;
        return { time: we.lu * 1e3, value: (ge = we.a) == null ? void 0 : ge[pe] };
      }).filter((we) => typeof we.value == "number");
      B.todayHistory = { day: G.toDateString(), fetched: Date.now(), temperature: ie("temperature"), humidity: ie("humidity") }, rn();
    } catch {
    }
  }
  async function lt(M) {
    const L = l == null ? void 0 : l();
    if (L)
      try {
        const P = await de(L, M, new Date(Date.now() - 24 * Yt), !0), G = ((P == null ? void 0 : P[M]) ?? []).filter((ie) => dn(ie.s)), $ = Math.max(1, Math.ceil(G.length / 48));
        B.aqHistory = { entityId: M, points: G.filter((ie, pe) => pe % $ === 0).map((ie) => ({ label: Si(new Date(ie.lu * 1e3), L), value: Number(ie.s) })) }, rn();
      } catch {
      }
  }
  function Et(M) {
    B.categories === void 0 && (B.categories = null, Promise.resolve().then(() => M.callWS({ type: "integration/descriptions" })).then((L) => {
      B.categories = Dh(L);
    }, () => {
      B.categories = {};
    }).then(() => rn()));
  }
  function gn(M) {
    var P;
    const L = Object.keys(M.states || {}).filter((G) => G.startsWith("weather.") && Fl(M, G)).sort();
    return o && ((P = M.states) != null && P[o]) ? [o, ...L.filter((G) => G !== o)] : L;
  }
  const qn = (M) => B.categories ? { air: Rh(M, B.categories), pollen: Nh(M, B.categories) } : { air: [], pollen: [] };
  function pt(M, L, P, G) {
    if (d === "line") return '<span class="wbWx wbS' + L + ' wbLineIcon" aria-hidden="true">' + mc(M, P || M === "clear-night") + "</span>";
    if (d === "smooth") {
      const $ = Ap(M, L === 90, P, y + "g-" + G);
      return '<span class="wbWx wbS' + L + " wb" + $.k[0].toUpperCase() + $.k.slice(1) + ($.night ? " wbNight" : "") + '" aria-hidden="true">' + $.svg + "</span>";
    }
    return '<span class="wbWx wbS' + L + '" aria-hidden="true"><canvas data-wb-wx="' + We(Hl(M, P)) + '" data-size="' + L + '"></canvas></span>';
  }
  const Qe = () => Pe("daily").filter((M) => M.templow != null).slice(0, qp);
  function St(M, L) {
    const P = new Date(L.datetime), G = /* @__PURE__ */ new Date();
    return Br(P, G) ? Ke.today : Br(P, new Date(G.getTime() + so)) ? Ke.tomorrow : wd(P, M);
  }
  const it = (M, L, P) => P === 0 ? St(M, L) : wd(new Date(L.datetime), M);
  function Sn(M, L) {
    var ke, Ee, Ge, qe;
    const P = Ch(M, L);
    if (!P) return "";
    const G = Qe(), $ = S.openDay !== void 0 ? G[S.openDay] : void 0, ie = ha(M, L, "temperature"), pe = G[0], we = pe && Br(new Date(pe.datetime), /* @__PURE__ */ new Date()), ge = ((Ee = (ke = M.config) == null ? void 0 : ke.unit_system) == null ? void 0 : Ee.temperature) || ((Ge = P.attributes) == null ? void 0 : Ge.temperature_unit) || "";
    let Be = '<div class="wbCard wbWeather' + ($ ? " wbIsOpen" : "") + '"><div class="wbClosed"' + ($ ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + We(Ke.openPage) + '">' : '<div class="wbCurrent">') + pt(P.state, 90, Sh(M), "now") + '<div class="wbTempBlock">' + (ie && dn(ie.value) ? '<div class="wbTemp"><span class="wbDeg">' + We(Mn(Math.round(Number(ie.value)), M.locale)) + '</span><span class="wbUnit">' + We(ge) + "</span></div>" : "") + '<div class="wbPlace">' + We(((qe = M.config) == null ? void 0 : qe.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + We(Cl(M, P)) + "</div>" + (we && pe.templow != null ? '<div class="wbRange">' + We(Fn(Ke.range, { high: mn(M, pe.temperature), low: mn(M, pe.templow) })) + "</div>" : "") + "</div></div>";
    return Be += Ue(M), G.length && (Be += '<div class="wbColumns" role="list">' + G.map((Le, je) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + je + '" data-wb-focus="col-' + je + '"><span class="wbDay">' + We(it(M, Le, je)) + "</span>" + pt(Le.condition ?? "cloudy", 60, !1, "col" + je) + '<span class="wbTemps"><span class="wbHi">' + We(mn(M, Le.temperature)) + '</span><span class="wbLo">' + We(mn(M, Le.templow)) + "</span></span></button>").join("") + "</div>", Be += '<div class="wbHalves" role="list">' + G.map((Le, je) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + je + '" data-wb-focus="half-' + je + '">' + pt(Le.condition ?? "cloudy", 40, !1, "half" + je) + '<span class="wbText"><span class="wbName">' + We(St(M, Le)) + '</span><span class="wbSub">' + We(Fn(Ke.highLow, { high: mn(M, Le.temperature), low: mn(M, Le.templow) })) + "</span></span></button>").join("") + "</div>"), Be + "</div>" + ($ ? or(M, L, $) : "") + "</div>";
  }
  const _n = {
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
  }, ar = {
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
  function ht(M) {
    const L = Date.now(), P = Pe("hourly").filter((Ee) => new Date(Ee.datetime).getTime() > L - Yt).slice(0, 13);
    if (P.length < 2) return "";
    const G = (Ee) => Si(new Date(Ee.datetime), M), $ = (Ee) => _n[Ee.condition] || "", ie = (Ee) => ar[Ee.condition] || Ee.condition;
    let pe = $(P[0]);
    if (!pe) return "";
    let we = P[0], ge = 0;
    for (const Ee of P.slice(1))
      ge === 2 || ie(Ee) === ie(we) || !$(Ee) || (pe += (ge ? " and " : ", ") + $(Ee) + " from " + G(Ee), we = Ee, ge++);
    const Be = Number(P[0].temperature), ke = P.filter((Ee) => dn(Ee.temperature));
    if (dn(Be) && ke.length) {
      const Ee = ke.reduce((qe, Le) => Number(Le.temperature) < Number(qe.temperature) ? Le : qe), Ge = ke.reduce((qe, Le) => Number(Le.temperature) > Number(qe.temperature) ? Le : qe);
      Be - Number(Ee.temperature) >= 3 ? pe += ", down to " + mn(M, Ee.temperature) + " by " + G(Ee) : Number(Ge.temperature) - Be >= 3 && (pe += ", up to " + mn(M, Ge.temperature) + " by " + G(Ge));
    }
    return pe[0].toUpperCase() + pe.slice(1) + ".";
  }
  const Ue = (M) => {
    const L = ht(M);
    return L ? '<div class="wbSummary"><p class="wbSummaryText">' + We(L) + "</p></div>" : "";
  };
  function yt(M) {
    const L = M.getTime(), P = Date.now() - Yt;
    return Pe("hourly").filter((G) => {
      const $ = new Date(G.datetime).getTime();
      return $ >= L && $ < L + so && $ > P;
    });
  }
  function co(M) {
    if (!M.length) return ["temperature"];
    const L = ["temperature"];
    return M.some((P) => P.precipitation != null || P.precipitation_probability != null) && L.push("precipitation"), M.some((P) => P.humidity != null) && L.push("humidity"), L;
  }
  function or(M, L, P) {
    const G = Hr(new Date(P.datetime)), $ = yt(G), ie = co($), pe = ie.includes(S.dayMode) ? S.dayMode : "temperature", we = (ge) => ge === "humidity" ? Ke.humidity : Ke.modes[ge];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + pt(P.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + We(St(M, P)) + '</span><span class="wbSub">' + We(Fn(Ke.highLow, { high: mn(M, P.temperature), low: mn(M, P.templow) })) + '</span></div><button class="wbBack" title="' + We(Ke.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Ir(Qn.back) + "</button></div>" + (ie.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + ie.map((ge) => '<button aria-pressed="' + (ge === pe) + '" data-wb="day-mode" data-mode="' + ge + '" data-wb-focus="day-mode-' + ge + '">' + We(we(ge)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Ph(Ai(M, L, G, $, pe)) + "</div></div>";
  }
  function Ai(M, L, P, G, $) {
    var ra;
    const ie = P.getTime(), pe = Date.now(), we = Br(P, /* @__PURE__ */ new Date()), ge = (Mt) => (Mt - ie) / Va, Be = (Mt) => Si(new Date(Mt), M), ke = (Mt) => new Date(Mt.datetime).getTime(), Ee = [0, 3, 6, 9, 12, 15, 18, 21].map((Mt) => ({ t: Mt * 60, label: Be(ie + Mt * Yt), minor: Mt % 6 !== 0 })), { rise: Ge, set: qe } = vc(M, P), Le = [], je = [];
    Ge && (Le.push({ t: ge(Ge.getTime()), label: Be(Ge.getTime()), rise: !0 }), je.push([0, ge(Ge.getTime())])), qe && (Le.push({ t: ge(qe.getTime()), label: Be(qe.getTime()), rise: !1 }), je.push([ge(qe.getTime()), Ms]));
    const et = Il(M);
    !Ge && !qe && et && Wc(new Date(ie + so / 2), et.lat, et.lon) < 0 && je.push([0, Ms]);
    const Fe = we ? ge(pe) : void 0, at = { hours: Ee, sun: Le, night: je };
    if (!G.length && !we) return { ...at, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ke.noHourly };
    if ($ === "precipitation") {
      const Mt = G.some((Pn) => Pn.precipitation_probability != null), Bn = G.map((Pn) => ({ t: ge(ke(Pn)), v: Number((Mt ? Pn.precipitation_probability : Pn.precipitation) ?? 0) })), Fa = tr(M, k(M, "hourly"), "precipitation"), qo = Math.max(0, ...Bn.map((Pn) => Pn.v)), Ka = Mt ? 100 : Sd(0, Math.max(qo, 1), [0.5, 1, 2, 5, 10]).max, Ei = (Pn) => Mt ? Mn(Pn, M.locale) + "%" : Mn(Pn, M.locale, { maximumFractionDigits: 1 }) + " " + Fa, $a = Bn.find((Pn) => Pn.v === qo);
      return {
        ...at,
        kind: "bars",
        points: Bn,
        min: 0,
        max: Ka,
        ticks: [0, Ka / 2, Ka],
        format: Ei,
        now: Fe !== void 0 ? { t: Fe, v: 0 } : void 0,
        peak: $a && qo > 0 ? { t: $a.t + 30, v: $a.v, label: Ei($a.v) } : void 0,
        note: qo > 0 ? void 0 : Ke.noRain
      };
    }
    const tt = $ === "humidity" ? "humidity" : "temperature", Ot = G.filter((Mt) => Mt[tt] != null && (!we || ke(Mt) >= pe)).map((Mt) => ({ t: ge(ke(Mt)), v: Number(Mt[tt]) }));
    let Ne, It = [];
    if (Fe !== void 0) {
      const Mt = ha(M, L, tt);
      Mt && dn(Mt.value) && (Ne = { t: Fe, v: Number(Mt.value) }, Ot.unshift(Ne)), It = (((ra = B.todayHistory) == null ? void 0 : ra.day) === P.toDateString() ? B.todayHistory[tt] : []).filter((Fa) => Fa.time <= pe).map((Fa) => ({ t: Math.max(0, ge(Fa.time)), v: Fa.value })), Ne && It.length && It.push(Ne);
    }
    const qt = [...It, ...Ot];
    if (!qt.length) return { ...at, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ke.noHourly };
    const vt = qt.map((Mt) => Mt.v), ia = Sd(Math.min(...vt), Math.max(...vt), tt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    tt === "humidity" && (ia.min = Math.max(0, ia.min), ia.max = Math.min(100, ia.max), ia.ticks = ia.ticks.filter((Mt) => Mt >= 0 && Mt <= 100));
    const sn = tt === "humidity" ? (Mt) => Mn(Mt, M.locale) + "%" : (Mt) => mn(M, Mt), Oo = tt === "temperature" ? qt.reduce((Mt, Bn) => Bn.v > Mt.v ? Bn : Mt) : void 0;
    return { ...at, kind: "line", points: Ot, past: It, ...ia, format: sn, now: Ne, peak: Oo ? { ...Oo, label: sn(Oo.v) } : void 0 };
  }
  function vn(M) {
    const L = ["temperature"];
    return M.some((P) => P.precipitation_probability != null || P.precipitation != null) && L.push("precipitation"), M.some((P) => P.wind_speed != null) && L.push("wind"), L;
  }
  function nt(M, L, P = dd) {
    var ie, pe;
    const G = Pe("daily"), $ = [];
    for (let we = 0; we < P; we++) for (const ge of [!1, !0]) {
      const Be = M.getTime() + (we * 24 + (ge ? 12 : 0)) * Yt, ke = Be + 12 * Yt, Ee = {};
      L.forEach((qe) => {
        const Le = new Date(qe.datetime).getTime();
        qe.condition && Le >= Be && Le < ke && (Ee[qe.condition] = (Ee[qe.condition] ?? 0) + (Up.has(qe.condition) ? 2 : 1));
      });
      let Ge = (ie = Object.entries(Ee).sort((qe, Le) => Le[1] - qe[1])[0]) == null ? void 0 : ie[0];
      if (!Ge) {
        const qe = new Date(Be).toDateString();
        Ge = ((pe = G.find((Le) => new Date(Le.datetime).toDateString() === qe)) == null ? void 0 : pe.condition) ?? "cloudy";
      }
      $.push({ cond: ge && Ge === "sunny" ? "clear-night" : Ge, night: ge });
    }
    return $;
  }
  function Wn(M, L, P) {
    const G = k(M, "hourly"), $ = L.precipitation_probability != null ? Mn(L.precipitation_probability, M.locale) + "%" : "", ie = L.precipitation ? Mn(L.precipitation, M.locale) + " " + tr(M, G, "precipitation") : "";
    switch (P) {
      case "precipitation":
        return $ ? [$, ie] : [ie || "–", ""];
      case "wind":
        return L.wind_speed != null ? [Mn(Math.round(L.wind_speed), M.locale), tr(M, G, "wind_speed")] : ["–", ""];
      default:
        return [mn(M, L.temperature), (L.precipitation_probability ?? 0) >= 20 ? $ : ""];
    }
  }
  function ir(M, L, P) {
    const [G, $] = ud[_ == null ? void 0 : _()] || ud.day, ie = [];
    for (let pe = 0; pe < 4 && ie.length < 3; pe++) {
      const we = /* @__PURE__ */ new Date();
      we.setHours(0, 0, 0, 0), we.setDate(we.getDate() + pe);
      const ge = new Date(we);
      ge.setHours($, 0, 0, 0), we.setHours(G, 0, 0, 0), !(ge.getTime() <= P || !L.some((Be) => {
        const ke = new Date(Be.datetime).getTime();
        return ke >= we.getTime() && ke <= ge.getTime();
      })) && ie.push({ a: we.getTime(), b: ge.getTime(), label: St(M, { datetime: we.toISOString() }) });
    }
    return ie;
  }
  function xt(M, L, P, G, $, ie) {
    const pe = (P.b - L.a) / Yt, we = (Fe) => ((Fe - L.a) / Yt).toFixed(3), ge = 80, Be = 32, ke = [];
    for (const Fe = new Date(L.a - so); Fe.getTime() < P.b + so; Fe.setDate(Fe.getDate() + 1)) {
      const { rise: at, set: tt } = vc(M, new Date(Fe));
      at && tt && ke.push({ rise: at.getTime(), set: tt.getTime() });
    }
    const Ee = (Fe, at) => ge - (ge - Be) * Math.sin(Math.PI * (at - Fe.rise) / (Fe.set - Fe.rise)), Ge = (Fe) => !ke.some((at) => Fe >= at.rise && Fe <= at.set);
    let qe = "", Le = "", je = "";
    ke.forEach((Fe, at) => {
      const tt = [];
      for (let Ne = Fe.rise; Ne <= Fe.set; Ne += 15 * Va) tt.push(we(Ne) + "," + Ee(Fe, Ne).toFixed(2));
      tt.push(we(Fe.set) + "," + ge), qe += '<polyline class="wbLineArc" points="' + tt.join(" ") + '"/>';
      const Ot = ke[at + 1];
      Ot && (qe += '<rect class="wbLineNight" x="' + we(Fe.set) + '" y="0" width="' + ((Ot.rise - Fe.set) / Yt).toFixed(3) + '" height="100"/>'), [[Fe.rise, "↑"], [Fe.set, "↓"]].forEach(([Ne, It]) => {
        Ne < L.a || Ne > P.b || (Le += '<line class="wbLineEdge" x1="' + we(Ne) + '" x2="' + we(Ne) + '" y1="0" y2="100"/>', je += '<span class="wbLineTime" style="left:' + ie(Ne) + '">' + It + " " + We(Si(new Date(Ne), M)) + "</span>");
      });
    });
    const et = ke.find((Fe) => $ >= Fe.rise && $ <= Fe.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + pe + ' 100" preserveAspectRatio="none" aria-hidden="true">' + qe + Le + '<line class="wbLineHorizon" x1="0" x2="' + pe + '" y1="' + ge + '" y2="' + ge + '"/></svg>' + je + (et ? '<span class="wbLineNow" style="left:' + ie($) + ";top:" + Ee(et, $) + '%">' + mc("sunny", !1) + "</span>" : "") + G.filter((Fe) => Fe.entry && !Fe.now).map((Fe) => '<span class="wbLineGlyph' + Fe.edge + '" style="left:' + ie(Fe.t) + '">' + mc(Fe.entry.condition ?? "cloudy", Ge(Fe.t)) + "</span>").join("");
  }
  function Re(M, L) {
    delete O.hourly;
    const P = S.hourlyView === "bars" ? "bars" : "strip", G = '<div class="wbHeader"><h2 class="wbTitle">' + We(P === "bars" ? Ke.nextDays : Ke.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + We(Ke.showAs) + '">' + ["strip", "bars"].map((Ne) => '<button aria-pressed="' + (Ne === P) + '" data-wb="hourly-view" data-view="' + Ne + '" data-wb-focus="hourly-view-' + Ne + '">' + We(Ke.views[Ne]) + "</button>").join("") + "</div></div>";
    if (P === "bars") return Ct(M, L, G);
    const $ = Pe("hourly"), ie = Math.floor(Date.now() / Va) * Va, pe = $.filter((Ne) => new Date(Ne.datetime).getTime() > ie - Yt);
    if (!pe.length) return "";
    const we = vn(pe), ge = we.includes(S.hourlyMode) ? S.hourlyMode : "temperature", Be = ir(M, $, ie);
    if (!Be.length) return "";
    const ke = Be[0], Ee = Be[Be.length - 1], Ge = (ke.b - ke.a) / Yt, qe = (Ne) => "calc(var(--wb-u) * " + ((Ne - ke.a) / Yt).toFixed(3) + ")", Le = new Date(ke.a);
    Le.setHours(6, 0, 0, 0), Le.getTime() > ke.a && Le.setDate(Le.getDate() - 1);
    const je = Math.ceil((Ee.b - Le.getTime()) / so);
    d !== "line" && (O.hourly = { segs: nt(Le, $, je), seed: Le.getDate(), columns: je });
    const et = (Ne) => Ne === ke.a ? " wbFirst" : Ne === Ee.b ? " wbLast" : "", Fe = [];
    for (let Ne = ke.a; Ne < Ee.b; ) {
      const It = new Date(Ne);
      It.setHours(24, 0, 0, 0);
      const qt = Math.min(It.getTime(), Ee.b);
      Fe.push({ a: Ne, b: qt, label: St(M, { datetime: new Date(Ne).toISOString() }), page: Be.find((vt) => vt.a >= Ne && vt.a < qt) || Be.find((vt) => vt.a < qt && vt.b > Ne) }), Ne = qt;
    }
    const at = ie > ke.a && ie < Ee.b ? Math.floor((ie - ke.a) / (2 * Yt)) * 2 : 0, tt = [];
    for (let Ne = ke.a; Ne <= Ee.b; Ne += Yt) {
      const It = new Date(Ne), qt = et(Ne);
      !qt && It.getHours() % jp || !qt && (Math.abs(ke.a - Ne) < 2 * Yt || Math.abs(Ee.b - Ne) < 2 * Yt) || ie >= ke.a && Math.abs(Ne - ie) < 1.5 * Yt && !qt || tt.push({ t: Ne, edge: qt, label: Si(It, M), entry: Ne >= ie - Yt ? $.find((vt) => new Date(vt.datetime).getTime() === Ne) : void 0 });
    }
    ie > ke.a && ie < ke.b && tt.push({ t: ie, edge: ie - ke.a < Yt ? " wbFirst" : ke.b - ie < Yt ? " wbLast" : "", label: Ke.now, entry: pe[0], now: !0 });
    const Ot = (Ne, It) => '<span class="wbMark' + Ne.edge + (Ne.now ? " wbNowMark" : "") + '" style="left:' + qe(Ne.t) + '">' + It + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + G + (we.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + we.map((Ne) => '<button aria-pressed="' + (Ne === ge) + '" data-wb="hourly-mode" data-mode="' + Ne + '" data-wb-focus="hourly-mode-' + Ne + '">' + We(Ke.modes[Ne]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + We(Ke.nextHours) + '" data-span="' + Ge + '" data-start="' + at + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Ge + ");width:calc(var(--wb-u) * " + (Ee.b - ke.a) / Yt + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((Ee.b - ke.a) / (2 * Yt)) + 1)].map((Ne, It) => '<i class="wbSnap" style="left:' + qe(ke.a + It * 2 * Yt) + '"></i>').join("") + '<div class="wbDays">' + Fe.map((Ne, It) => {
      var qt;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Ne.b - Ne.a) / Yt).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (It === 0 ? at : ((((qt = Ne.page) == null ? void 0 : qt.a) ?? Ne.a) - ke.a) / Yt) + '" data-wb-focus="hours-day-' + It + '">' + We(Ne.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + tt.map((Ne) => Ot(Ne, We(Ne.label))).join("") + "</div>" + (d === "line" ? '<div class="wbSky wbLineSky">' + xt(M, ke, Ee, tt, ie, qe) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + qe(Le.getTime()) + ";width:calc(var(--wb-u) * " + je * 24 + ')"><canvas data-wb-strip="hourly"' + (d === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (ie > ke.a ? '<i class="wbPast" style="width:' + qe(Math.min(ie, Ee.b)) + '"></i><i class="wbNowLine" style="left:' + qe(ie) + '"></i>' : "") + Fe.slice(1).map((Ne) => '<i class="wbMidnight" style="left:' + qe(Ne.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + tt.map((Ne) => {
      if (!Ne.entry) return "";
      const [It, qt] = Wn(M, Ne.entry, ge);
      return Ot(Ne, '<span class="wbPrimaryV">' + We(It) + '</span><span class="wbSecondary">' + We(qt) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function mt(M) {
    const L = zp, P = L.findIndex(([ge]) => ge >= M);
    if (P <= 0) return "rgb(" + L[P < 0 ? L.length - 1 : 0][1].join(",") + ")";
    const [G, $] = L[P - 1], [ie, pe] = L[P], we = (M - G) / (ie - G);
    return "rgb(" + $.map((ge, Be) => Math.round(ge + (pe[Be] - ge) * we)).join(",") + ")";
  }
  function Ct(M, L, P) {
    var qe;
    const G = Pe("daily").filter((Le) => dn(Le.templow) && dn(Le.temperature)).slice(0, 7);
    if (!G.length) return "";
    const $ = Math.min(...G.map((Le) => Number(Le.templow))), ie = Math.max(...G.map((Le) => Number(Le.temperature))), pe = Math.max(1, ie - $), we = (Le) => Math.max(0, Math.min(100, (Le - $) / pe * 100)).toFixed(2), ge = /F/.test(tr(M, k(M, "daily"), "temperature")), Be = (Le) => ge ? (Le - 32) / 1.8 : Le, ke = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Le) => mt(Be($ + Le * pe)) + " " + Le * 100 + "%").join(",") + ")", Ee = (qe = ha(M, L, "temperature")) == null ? void 0 : qe.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (vn(Pe("hourly").filter((Le) => new Date(Le.datetime).getTime() > Date.now() - Yt)).length > 1 ? " wbTabbed" : "") + '">' + P + '<div class="wbDayBars" role="list">' + G.map((Le, je) => {
      const et = St(M, Le), Fe = Br(new Date(Le.datetime), /* @__PURE__ */ new Date()), at = Number(Le.templow), tt = Number(Le.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + We(Fn(Ke.rangeRow, { day: et, low: mn(M, at), high: mn(M, tt) })) + '"><span class="wbRangeDay">' + We(et) + "</span>" + pt(Le.condition, 40, !1, "r" + je) + '<span class="wbRangeLo">' + We(mn(M, at)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + ke + ";clip-path:inset(0 " + (100 - we(tt)) + "% 0 " + we(at) + '% round 4px)"></i>' + (Fe && dn(Ee) ? '<i class="wbRangeNow" style="left:' + we(Number(Ee)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + We(mn(M, tt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  function Ve(M) {
    const L = be, { rise: P, set: G } = vc(M, L), $ = P && G ? Math.round((G.getTime() - P.getTime()) / Va) : 0, ie = Math.floor($ / 60), pe = $ % 60, we = P && G ? (L.getTime() - P.getTime()) / (G.getTime() - P.getTime()) : -1, ge = we >= 0 && we <= 1, Be = Math.PI * (1 - Math.min(1, Math.max(0, we))), ke = 100 + 74 * Math.cos(Be), Ee = 100 - 74 * Math.sin(Be), Ge = ge ? Math.sin(Math.PI * we) : 0, qe = ge ? ks("#2e0a0d", "#43180a", Ge) : "#0e0507", Le = ge ? ks("#7a1d12", "#8f400f", Ge) : "#1c0709", je = ks("#f60c08", "#ff8f00", Ge), et = ks("#fd9b07", "#ffd84a", Ge), Fe = ge ? ks("#fd9b07", "#ffd84a", Ge) : "#6b3a2a", at = (Ot) => Ot ? Si(Ot, M) : "–", tt = P && G ? new Date((P.getTime() + G.getTime()) / 2) : null;
    return _o({
      icon: Qn.sunny,
      name: Ke.sun,
      sub: $ ? Fn(Ke.daylightShort, { hours: ie, minutes: pe }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + qe + ", " + Le + ");--wb-sun-line:" + Fe + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + y + 'sun-glow"><stop offset="0" stop-color="' + je + '"></stop><stop offset="0.45" stop-color="' + je + '"></stop><stop offset="1" stop-color="' + et + '"></stop></radialGradient><clipPath id="' + y + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (ge ? '<circle cx="' + ke + '" cy="' + Ee + '" r="14" fill="url(#' + y + 'sun-glow)" clip-path="url(#' + y + 'above-horizon)"></circle>' : "") + (tt ? '<text class="wbSunTime wbNoon" x="100" y="1">' + We(at(tt)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + We(at(P)) + '</text><text class="wbSunTime" x="174" y="117">' + We(at(G)) + "</text></svg></div>"
    });
  }
  function uo(M, L, P) {
    const G = (pe) => y + "moon-" + pe, $ = M > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + G("terminator") + ')" d="' + Bh(61, 61, 57.9, M) + '"' + (L ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", ie = (pe, we, ge, Be, ke, Ee) => '<filter id="' + G(pe) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + we + '" numOctaves="' + ge + '" seed="' + Be + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Ge) => "<feFunc" + Ge + ' type="linear" slope="' + ke + '" intercept="' + Ee + '"></feFunc' + Ge + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + G("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + G("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + G("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + G("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + G("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + ie("mottle", "0.045", 4, 3, 1.8, -0.4) + ie("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + G("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + G("fill") + ')"></circle><g' + (P ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + G("soften") + ')">' + Fh.map(([pe, we, ge, Be, ke, Ee]) => '<ellipse cx="' + pe + '" cy="' + we + '" rx="' + ge + '" ry="' + Be + '" fill-opacity="' + Ee + '" transform="rotate(' + ke + " " + pe + " " + we + ')"></ellipse>').join("") + "</g>" + Oh.map(([pe, we, ge]) => '<circle class="wbCrater" cx="' + pe + '" cy="' + we + '" r="' + ge + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + G("glow") + ')">' + qh.map(([pe, we]) => '<line x1="54.4" y1="95" x2="' + pe + '" y2="' + we + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + G("glow") + ')">' + Cd.map(([pe, we, ge]) => '<circle cx="' + pe + '" cy="' + we + '" r="' + ge * 2 + '"></circle>').join("") + "</g>" + Cd.map(([pe, we, ge]) => '<circle class="wbBrightCenter" cx="' + pe + '" cy="' + we + '" r="' + ge + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + G("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + G("grain") + ')"></rect>' + $ + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Bo(M) {
    const L = Ce, P = Il(M), G = (P == null ? void 0 : P.lat) ?? 0, $ = kh(L), ie = Md(M), pe = ie ? M.states[ie] : void 0, we = Ss(pe) && th.includes(pe.state) ? pe.state : Mh($.phase), { rise: ge, set: Be } = P ? xh(L, P.lat, P.lon) : {}, ke = $.phase > 0.5 != G < 0, Ee = Mn(Math.round($.fraction * 100), M.locale) + "%", Ge = ge ?? Be, qe = Ge ? Si(Ge, M) : void 0;
    return _o({
      icon: Qn.night,
      name: Ke.moon,
      sub: Ke.phases[we],
      visual: '<div class="wbMoonBox">' + uo($.fraction, ke, G < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (qe ? We(Fn(ge ? Ke.moonriseAt : Ke.moonsetAt, { time: qe })) : "") + "</span><span>" + We(Fn(Ke.lit, { illumination: Ee })) + "</span></div>"
    });
  }
  function rr(M, L) {
    var Le;
    const P = ha(M, L, "wind_speed");
    if (!P || !dn(P.value)) return "";
    const G = ha(M, L, "wind_gust_speed"), $ = ha(M, L, "wind_bearing"), ie = $ && dn($.value) ? Number($.value) : void 0, pe = Eh(Number(P.value), (Le = P.stateObj.attributes) == null ? void 0 : Le.wind_speed_unit), we = Rl(M, P.stateObj, "wind_speed", P.value), ge = ie !== void 0 ? Ke.cardinal[eh[((ie + 11.25) / 22.5 | 0) % 16]] : void 0, Be = G ? Lh(M, G.stateObj, "wind_gust_speed", G.value) : void 0, ke = [ge ? Fn(Ke.windFrom, { direction: ge }) : void 0, pe !== void 0 ? pe + " " + Ke.beaufort : void 0].filter(Boolean).join(" · ") || Be, Ee = (je, et) => {
      const Fe = (je - 90) * Math.PI / 180;
      return [100 + et * Math.cos(Fe), 100 + et * Math.sin(Fe)];
    }, Ge = Array.from({ length: 36 }, (je, et) => et * 10).map((je) => {
      const et = je % 90 === 0, [Fe, at] = Ee(je, 97), [tt, Ot] = Ee(je, et ? 83 : 89);
      return '<line class="wbTick' + (et ? " wbMajor" : "") + '" x1="' + Fe + '" y1="' + at + '" x2="' + tt + '" y2="' + Ot + '"></line>';
    }).join(""), qe = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([je, et]) => {
      const [Fe, at] = Ee(et, 64);
      return '<text class="wbLetter' + (je === "n" ? " wbNorth" : "") + '" x="' + Fe + '" y="' + at + '">' + We(Ke.cardinal[je]) + "</text>";
    }).join("");
    return _o({ icon: Qn.windy, name: Ke.wind, sub: ke, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Ge + qe + (ie !== void 0 ? '<path class="wbMarker" transform="rotate(' + ie + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + We(we.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + We(we.unit) + "</text></svg>" });
  }
  function ze(M, L) {
    const P = ha(M, L, "uv_index");
    if (!P || !dn(P.value)) return "";
    const G = Number(P.value), $ = Ke.uvLevel[Ah(G)], ie = /* @__PURE__ */ new Date();
    ie.setHours(23, 59, 59, 999);
    const pe = Pe("hourly").filter((je) => je.uv_index != null && new Date(je.datetime) > /* @__PURE__ */ new Date() && new Date(je.datetime) <= ie).reduce((je, et) => !je || et.uv_index > je.uv ? { uv: et.uv_index, time: new Date(et.datetime) } : je, void 0), we = 48, ge = 100, Be = 130, ke = (je) => -we + Math.min(je, 11) / 11 * 2 * we, Ee = (je, et) => {
      const Fe = je * Math.PI / 180;
      return [ge + et * Math.sin(Fe), Be - et * Math.cos(Fe)];
    }, Ge = (je, et, Fe) => {
      const [at, tt] = Ee(ke(je), Fe), [Ot, Ne] = Ee(ke(et), Fe);
      return "M " + at + " " + tt + " A " + Fe + " " + Fe + " 0 0 1 " + Ot + " " + Ne;
    }, Le = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, Ml.low], [3, 6, Ml.moderate], [6, 8, Ml.high], [8, 11, Ml.very_high]].map(([je, et, Fe]) => '<path class="wbVuZone" d="' + Ge(je, et, 96) + '" style="stroke:' + Fe + '"></path>').join("") + Array.from({ length: 21 }, (je, et) => ({ angle: -we + et * (2 * we / 20), major: et % 2 === 0 })).map(({ angle: je, major: et }) => {
      const [Fe, at] = Ee(je, 102), [tt, Ot] = Ee(je, et ? 114 : 108);
      return '<line class="wbVuTick' + (et ? " wbMajor" : "") + '" x1="' + Fe + '" y1="' + at + '" x2="' + tt + '" y2="' + Ot + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + ke(G) + 'deg"><line x1="' + ge + '" y1="' + Be + '" x2="' + ge + '" y2="' + (Be - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + We(Mn(Math.round(G), M.locale)) + "</text></svg>";
    return _o({
      icon: Qn.sunnyAlert,
      name: Ke.metrics.uv_index,
      sub: pe && pe.uv > G ? Fn(Ke.uvPeak, { level: $, uv_index: Mn(Math.round(pe.uv), M.locale), time: Si(pe.time, M) }) : $,
      visual: Le
    });
  }
  function Xe(M) {
    const L = Pe("daily")[0], P = B.temperatureHistory;
    if (!L || new Date(L.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !dn(L.temperature) || !P || P.dailyHighs.length < Kp) return "";
    const G = Number(L.temperature), $ = P.dailyHighs.reduce((tt, Ot) => tt + Ot, 0) / P.dailyHighs.length, ie = Math.round(G - $) || 0, pe = ie > 0 ? "above" : ie < 0 ? "below" : "same", we = [...P.days, { date: /* @__PURE__ */ new Date(), high: G, today: !0 }], ge = 220, Be = 158, ke = 22, Ee = 20, Ge = we.map((tt) => tt.high).concat($), qe = Math.min(...Ge) - 3, Le = Math.max(...Ge) + 1, je = (tt) => ke + (1 - (tt - qe) / (Le - qe)) * (Be - ke - Ee), et = ge / we.length, Fe = Math.min(18, et * 0.6), at = '<svg class="wbCompareBars" viewBox="0 0 ' + ge + " " + Be + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + ge + '" y1="' + je($) + '" y2="' + je($) + '"></line>' + we.map((tt, Ot) => {
      const Ne = Ot * et + et / 2, It = je(tt.high), qt = tt.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + qt + '" x="' + (Ne - Fe / 2) + '" y="' + It + '" width="' + Fe + '" height="' + (Be - Ee - It) + '" rx="5"></rect><text class="wbAvgValue' + qt + '" x="' + Ne + '" y="' + (It - 6) + '">' + We(mn(M, tt.high)) + '</text><text class="wbAvgDay' + qt + '" x="' + Ne + '" y="' + (Be - 4) + '">' + We(uh(tt.date, M)) + "</text>";
    }).join("") + "</svg>";
    return _o({
      icon: Qn.chartLine,
      name: Ke.metrics.compared_to_average,
      double: !0,
      sub: Fn(Ke.highsLastDays, { days: P.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (ie > 0 ? "+" : "") + We(mn(M, ie)) + '</div><div class="wbCompareWords">' + We(Ke.average[pe]) + '</div><div class="wbCompareTemps">' + We(Fn(Ke.todayVsAverage, { today: mn(M, G), average: mn(M, $) })) + "</div></div>" + at + "</div>"
    });
  }
  function Cn(M, L) {
    const P = ha(M, L, "humidity");
    if (!P || !dn(P.value)) return "";
    const G = ha(M, L, "dew_point"), $ = Math.max(0, Math.min(100, Number(P.value)));
    return _o({
      icon: Qn.waterPercent,
      name: Ke.metrics.humidity,
      sub: G && dn(G.value) ? Fn(Ke.dewPoint, { dew_point: mn(M, G.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + $ + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Tl(Mn(Math.round(Number(P.value)), M.locale), "%") + "</div>"
    });
  }
  function Ua(M, L) {
    var Be, ke;
    const P = ha(M, L, "pressure");
    if (!P || !dn(P.value)) return "";
    const G = Number(P.value), $ = (Be = P.stateObj.attributes) == null ? void 0 : Be.pressure_unit, ie = kd(G, $), pe = ((ke = B.pressureHistory) == null ? void 0 : ke.entityId) === P.stateObj.entity_id ? kd(B.pressureHistory.value, $) : void 0;
    let we;
    if (ie !== void 0 && pe !== void 0) {
      const Ee = ie - pe;
      we = Ee >= fd ? "rising" : Ee <= -fd ? "falling" : "steady";
    }
    const ge = Rl(M, P.stateObj, "pressure", Math.round(G));
    return _o({
      icon: Qn.gauge,
      name: Ke.metrics.pressure,
      sub: we ? Ke.pressure[we] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + Tl(ge.number) + '<span class="wbTapeUnit">' + We(ge.unit) + "</span></div>" + (ie !== void 0 ? jn(M, ie) : "") + "</div>"
    });
  }
  function jn(M, L) {
    const $ = Math.floor(L) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (ie, pe) => $ + pe).map((ie) => {
      const pe = 100 - (ie - L) * 9;
      if (pe < 22 || pe > 178) return "";
      const we = ie % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(pe - 100) / 100) + '"><line class="wbTapeTick" x1="' + (we ? 2 : 8) + '" x2="26" y1="' + pe + '" y2="' + pe + '"></line>' + (we ? '<text class="wbTapeLabel" x="33" y="' + pe + '">' + We(Mn(ie, M.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + We(Ke.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + We(Ke.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function tn(M) {
    var ge, Be;
    const L = bc(M), P = L ? M.states[L] : void 0;
    if (!P || ((ge = B.rain) == null ? void 0 : ge.entityId) !== L || !dn(B.rain.change)) return "";
    const G = ((Be = P.attributes) == null ? void 0 : Be.unit_of_measurement) ?? "", $ = k(M, "hourly"), ie = Date.now() + so, pe = Pe("hourly").filter((ke) => ke.precipitation != null && new Date(ke.datetime).getTime() <= ie), we = pe.reduce((ke, Ee) => ke + Number(Ee.precipitation), 0);
    return _o({
      icon: Qn.rainy,
      name: Ke.metrics.precipitation,
      sub: $ && pe.length ? Fn(Ke.rainExpected, { amount: Mn(we, M.locale, { maximumFractionDigits: 1 }) + " " + tr(M, $, "precipitation") }) : Ke.rainLast24h,
      visual: Tl(Mn(B.rain.change, M.locale, { maximumFractionDigits: 1 }), G) + (pe.length > 1 ? Hh(pe.map((ke) => ({ label: "", value: Number(ke.precipitation) }))) : "")
    });
  }
  function po(M, L) {
    const P = ha(M, L, "visibility");
    if (!P || !dn(P.value)) return "";
    const G = Rl(M, P.stateObj, "visibility", P.value), $ = Fp(Number(P.value), tr(M, P.stateObj, "visibility"));
    return _o({
      icon: Qn.eyeOutline,
      name: Ke.metrics.visibility,
      sub: Ke.visibilityLevel[Op($)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + $ + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + We(on(M, $)) + '</div><div class="wbSeaValue">' + Tl(G.number, G.unit) + "</div></div>"
    });
  }
  function on(M, L) {
    var ie;
    const P = Hp((ie = M.config) == null ? void 0 : ie.country, L);
    if (P) return Fn(Ke.visibilityLandmarks, { from: P.from, to: P.to });
    const G = L / Jp * 60;
    if (G < 60) {
      const pe = G < 5 ? Math.max(1, Math.round(G)) : 5 * Math.round(G / 5);
      if (pe < 60) return Fn(Ke.walkMinutes, { minutes: Mn(pe, M.locale) });
    }
    const $ = Math.max(1, Math.round(G / 30) / 2);
    return $ < 8 ? Fn(Ke.walkHours, { hours: Mn($, M.locale) }) : Ke.walkDay;
  }
  function zn(M) {
    B.categories === void 0 && Et(M);
    const L = qn(M), P = (ge) => ge.map((Be) => M.states[Be]).filter(Ss), G = P(L.air), $ = P(L.pollen);
    if (!G.length && !$.length) return "";
    const ie = [...G, ...$], pe = (ge) => $.includes(ge) ? Qn.flower : Qn.airFilter, we = ie.find((ge) => ge.entity_id === S.aq);
    return we ? _i(M, we, pe(we)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + We(Ke.airQuality) + '</h2></div><div class="wbAqTiles">' + ie.map((ge) => '<button class="wbTile" data-wb="aq-open" data-entity="' + We(ge.entity_id) + '"><span class="wbChip">' + Ir(pe(ge)) + '</span><span class="wbText"><span class="wbName">' + We(xd(M, ge)) + '</span><span class="wbSub">' + We(Cl(M, ge)) + "</span></span></button>").join("") + "</div></div>";
  }
  function _i(M, L, P) {
    var ke, Ee, Ge;
    const G = ((ke = L.attributes) == null ? void 0 : ke.unit_of_measurement) ?? "", $ = ((Ee = L.attributes) == null ? void 0 : Ee.device_class) === "pm25" && G === md && dn(L.state), ie = Number(L.state), pe = $ ? _h(ie) : void 0, we = ((Ge = B.aqHistory) == null ? void 0 : Ge.entityId) === L.entity_id ? B.aqHistory.points : void 0, ge = (qe) => Math.min(100, Math.max(0, qe / Sl * 100));
    let Be;
    if (we && we.length > 1) Be = Ih(we, (qe) => (Mn(qe, M.locale, { maximumFractionDigits: 1 }) + " " + G).trim());
    else if (pe) {
      let qe = 0;
      const Le = cu.map(([je, et]) => {
        const Fe = ge(Math.min(et, Sl)), at = nh[je] + " " + qe + "% " + Fe + "%";
        return qe = Fe, at;
      });
      Be = '<div class="wbScale" role="meter" aria-label="' + We(Ke.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Sl + '" aria-valuenow="' + ie + '" style="background:linear-gradient(to right, ' + Le.join(", ") + ')"><i style="left:' + ge(ie) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Sl + " " + md + "</span></div>";
    } else Be = '<span class="wbGraphNote"><span>' + We(Cl(M, L)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Ir(P) + '</span><span class="wbText"><span class="wbName">' + We(xd(M, L)) + '</span><span class="wbSub">' + We(Cl(M, L)) + (pe ? " · " + We(Ke.aqLevel[pe]) : "") + '</span></span><button class="wbBack" title="' + We(Ke.back) + '" data-wb="aq-close">' + Ir(Qn.back) + '</button></div><div class="wbGraph">' + Be + "</div></div></div>";
  }
  const Vn = {
    current: Sn,
    hourly: Re,
    sun: Ve,
    moon: Bo,
    wind: rr,
    uv_index: ze,
    compared_to_average: Xe,
    humidity: Cn,
    pressure: Ua,
    precipitation: tn,
    visibility: po,
    air_quality: zn
  };
  function Vt(M) {
    var Be, ke, Ee;
    const L = l == null ? void 0 : l();
    if (!L || ee) return;
    const P = gn(L);
    H(L, P), B.lastFetch || ve();
    const G = qn(L), $ = Md(L), ie = bc(L), pe = [
      ...P.map((Ge) => L.states[Ge]),
      L.states["sun.sun"],
      $ && L.states[$],
      ie && L.states[ie],
      ...G.air.map((Ge) => L.states[Ge]),
      ...G.pollen.map((Ge) => L.states[Ge]),
      L.locale,
      L.config,
      L.entities,
      Math.floor(Date.now() / Va)
    ];
    if (!M && Z && pe.length === Z.length && pe.every((Ge, qe) => Ge === Z[qe])) return;
    Z = pe;
    const we = R.getRootNode(), ge = we.activeElement || document.activeElement;
    for (const Ge of ae) {
      const qe = Y[Ge];
      let Le = "";
      try {
        Le = Vn[Ge](L, P) || "";
      } catch {
        Le = "";
      }
      if (Le === qe.html) continue;
      const je = ge && qe.el.contains(ge) ? (Be = ge.dataset) == null ? void 0 : Be.wbFocus : void 0, et = qe.el.querySelector(".wbStripScroll"), Fe = et ? et.scrollLeft : null;
      qe.html = Le, qe.el.hidden = !Le, qe.el.innerHTML = Le;
      const at = qe.el.querySelector(".wbStripScroll");
      at && Fe != null ? at.scrollTo({ left: Fe }) : at != null && at.dataset.start && at.scrollTo({ left: Number(at.dataset.start) * at.clientWidth / Number(at.dataset.span) }), je && !Q && ((ke = qe.el.querySelector('[data-wb-focus="' + je + '"]')) == null || ke.focus());
    }
    Q && ((Ee = R.querySelector('[data-wb-focus="' + Q + '"]')) == null || Ee.focus(), Q = null), La(performance.now());
  }
  function rn() {
    ce || ee || (ce = !0, queueMicrotask(() => {
      ce = !1, Vt(!0);
    }));
  }
  function Ta() {
    const M = getComputedStyle(R), L = (pe) => M.getPropertyValue(pe).trim(), P = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([pe, we]) => {
      L(we) && (P[pe] = L(we));
    });
    const G = L("--color-text-primary") || "#f1f1f1", $ = L("--color-bg-card") || "#222222", ie = !!R.closest(".light");
    return { colors: { ...aa, ...P }, ink: ie ? G : $, paper: ie ? $ : G };
  }
  const Ya = (M, L) => {
    var P;
    M.width !== L.w && (M.width = L.w), M.height !== L.h && (M.height = L.h), (P = M.getContext("2d")) == null || P.putImageData(new ImageData(L.data, L.w, L.h), 0, 0);
  }, Wt = () => f && !lh();
  function Po(M, L) {
    R.querySelectorAll("canvas[data-wb-strip]").forEach((P) => oa(P, O[P.dataset.wbStrip], M, L));
  }
  function oa(M, L, P, G) {
    if (!L || !M.getClientRects().length) return;
    const $ = M.clientWidth, ie = M.clientHeight;
    if (!$ || !ie) return;
    const pe = { width: $, height: ie, columns: L.columns || dd, colors: G.colors, clock: P, ambient: Wt(), seed: L.seed, soft: 1.5 };
    if (d === "smooth") {
      const we = Math.min(2, window.devicePixelRatio || 1), ge = Math.round($ * we), Be = Math.round(ie * we);
      M.width !== ge && (M.width = ge), M.height !== Be && (M.height = Be);
      const ke = M.getContext("2d");
      if (!ke) return;
      ke.setTransform(we, 0, 0, we, 0, 0), wp(ke, L.segs, pe);
    } else Ya(M, bp(L.segs, { ...pe, px: 2, oneBit: d === "onebit", ink: G.ink, paper: G.paper }));
  }
  function La(M) {
    if (ee) return;
    const L = Ta();
    if (d !== "smooth") {
      const P = Wt();
      R.querySelectorAll("canvas[data-wb-wx]").forEach((G) => {
        G.getClientRects().length && Ya(G, Xd(Dc(G.dataset.wbWx, L.colors), { size: Number(G.dataset.size) || 40, px: 2, oneBit: d === "onebit", colors: L.colors, ink: L.ink, paper: L.paper, clock: M, idle: P }));
      });
    }
    R.querySelectorAll("canvas[data-wb-sea]").forEach((P) => {
      const G = P.clientWidth, $ = P.clientHeight, ie = Number(P.dataset.wbSea), pe = G + "x" + $ + ":" + ie + ":" + L.colors.skyClearDay;
      !G || !$ || !(ie > 0) || P.dataset.painted === pe || (P.dataset.painted = pe, Ya(P, Bp(G, $, ie, L.colors)));
    }), Po(M, L);
  }
  function ho(M) {
    if (V = 0, !(ee || !Wt())) {
      if (!document.hidden)
        if (d === "smooth") Po(M, Ta());
        else {
          const L = Math.floor(M / 100);
          L !== q && (q = L, La(M));
        }
      V = requestAnimationFrame(ho);
    }
  }
  function Io() {
    R.classList.toggle("wbMotion", Wt()), !V && !ee && Wt() && (V = requestAnimationFrame(ho));
  }
  function Ho(M) {
    var P, G;
    const L = (G = (P = M.target).closest) == null ? void 0 : G.call(P, "[data-wb]");
    if (!(!L || !R.contains(L))) {
      switch (L.dataset.wb) {
        case "day": {
          S.openDay = Number(L.dataset.index), S.opener = L.dataset.wbFocus, Q = "back-day";
          const $ = Qe()[S.openDay], ie = !B.todayHistory || B.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - B.todayHistory.fetched > Wp;
          $ && Br(new Date($.datetime), /* @__PURE__ */ new Date()) && ie && Ze();
          break;
        }
        case "close-day":
          S.openDay = void 0, Q = S.opener, S.opener = void 0;
          break;
        case "open-page":
          w == null || w();
          return;
        case "day-mode":
          S.dayMode = L.dataset.mode;
          break;
        case "hourly-mode":
          S.hourlyMode = L.dataset.mode;
          break;
        case "hourly-view":
          S.hourlyView = L.dataset.view;
          try {
            localStorage.setItem(fe, S.hourlyView);
          } catch {
          }
          break;
        case "hours-day": {
          const $ = R.querySelector(".wbStripScroll");
          $ && $.scrollTo({ left: Number(L.dataset.hours) * $.clientWidth / Number($.dataset.span), behavior: "smooth" });
          return;
        }
        case "aq-open":
          S.aq = L.dataset.entity, lt(S.aq);
          break;
        case "aq-close":
          S.aq = void 0;
          break;
        default:
          return;
      }
      Vt(!0);
    }
  }
  function sr(M) {
    var L, P;
    M.key === "Escape" && S.openDay !== void 0 && ((P = (L = M.target).closest) != null && P.call(L, '[data-wb-open="day"]')) && (S.openDay = void 0, Q = S.opener, S.opener = void 0, Vt(!0));
  }
  let kt = null;
  function Ha(M) {
    var P, G;
    const L = (G = (P = M.target).closest) == null ? void 0 : G.call(P, ".wbStripScroll");
    !L || M.button !== 0 || (kt = { startX: M.pageX, left: L.scrollLeft, moved: !1 }, L.classList.add("wbHeld"), window.addEventListener("mousemove", lr), window.addEventListener("mouseup", cr, { once: !0 }));
  }
  function lr(M) {
    const L = R.querySelector(".wbStripScroll");
    if (!kt || !L) return;
    const P = M.pageX - kt.startX;
    !kt.moved && Math.abs(P) > 1 && (kt.moved = !0, L.classList.add("wbDragging")), L.scrollLeft = kt.left - P;
  }
  function cr() {
    kt = null, window.removeEventListener("mousemove", lr);
    const M = R.querySelector(".wbStripScroll");
    if (!M) return;
    M.classList.remove("wbDragging", "wbHeld");
    const L = [...M.querySelectorAll(".wbSnap")];
    if (L.length) {
      const P = L.reduce((G, $) => Math.abs($.offsetLeft - M.scrollLeft) < Math.abs(G.offsetLeft - M.scrollLeft) ? $ : G);
      M.scrollTo({ left: P.offsetLeft, behavior: "smooth" });
    }
  }
  R.addEventListener("click", Ho), R.addEventListener("keydown", sr), R.addEventListener("mousedown", Ha);
  const Bt = typeof ResizeObserver == "function" ? new ResizeObserver(() => La(performance.now())) : null;
  Bt == null || Bt.observe(R);
  const Pt = (Za = window.matchMedia) == null ? void 0 : Za.call(window, "(prefers-reduced-motion: reduce)"), ft = () => {
    Io(), La(performance.now());
  };
  (fo = Pt == null ? void 0 : Pt.addEventListener) == null || fo.call(Pt, "change", ft);
  const Fo = [
    setInterval(() => {
      be = /* @__PURE__ */ new Date(), Vt(!0);
    }, $p),
    setInterval(() => {
      Ce = /* @__PURE__ */ new Date(), Vt(!0);
    }, Xp),
    setInterval(ve, Yp)
  ];
  return Vt(!0), Io(), {
    update() {
      Vt(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Vt(!0);
    },
    setStyle(M) {
      !M || M === d || (d = M, R.dataset.style = d, Vt(!0), Io());
    },
    destroy() {
      var M;
      ee = !0, Fo.forEach(clearInterval), V && cancelAnimationFrame(V), V = 0, Bt == null || Bt.disconnect(), (M = Pt == null ? void 0 : Pt.removeEventListener) == null || M.call(Pt, "change", ft), cr(), R.removeEventListener("click", Ho), R.removeEventListener("keydown", sr), R.removeEventListener("mousedown", Ha), ["daily", "hourly"].forEach(A), R.remove();
    }
  };
}
const Cs = "#E1E1E1", Ld = "#F7F4F0", wc = "#03a9f4", _t = 14, Nt = 172;
let jh = 0;
const Qt = (a) => Math.round(a * 100) / 100, lo = (a, l, o) => Math.max(l, Math.min(o, a)), No = (a, l, o, d, f, g) => '<rect x="' + Qt(a) + '" y="' + Qt(l) + '" width="' + Qt(o) + '" height="' + Qt(d) + '" fill="' + f + '"' + (g != null ? ' opacity="' + g + '"' : "") + "/>", yc = (a) => a.map((l, o) => (o ? "L" : "M") + Qt(l[0]) + " " + Qt(l[1])).join("");
function xc(a) {
  const l = (a == null ? void 0 : a.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const Ci = [
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
  let o = Ci[0], d = Ci[Ci.length - 1];
  for (let _ = 0; _ < Ci.length - 1; _++) if (l >= Ci[_][0] && l <= Ci[_ + 1][0]) {
    o = Ci[_], d = Ci[_ + 1];
    break;
  }
  const f = (l - o[0]) / (d[0] - o[0]), g = f * f * (3 - 2 * f), w = (_, y) => {
    const R = parseInt(_.slice(1), 16), me = parseInt(y.slice(1), 16);
    return "#" + [16, 8, 0].map((ae) => Math.round((R >> ae & 255) + ((me >> ae & 255) - (R >> ae & 255)) * g).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(o[1][0], d[1][0]), bot: w(o[1][1], d[1][1]), warm: w(o[1][2], d[1][2]), cool: w(o[1][3], d[1][3]), op: o[1][4] + (d[1][4] - o[1][4]) * g, t: l };
}
function Vh(a) {
  const l = parseInt(a.slice(1), 16), o = (l >> 16 & 255) / 255, d = (l >> 8 & 255) / 255, f = (l & 255) / 255, g = Math.max(o, d, f), w = Math.min(o, d, f);
  let _ = 0, y = 0;
  const R = (g + w) / 2;
  if (g !== w) {
    const me = g - w;
    y = R > 0.5 ? me / (2 - g - w) : me / (g + w), _ = (g === o ? (d - f) / me + (d < f ? 6 : 0) : g === d ? (f - o) / me + 2 : (o - d) / me + 4) / 6;
  }
  return [_ * 360, y * 100, R * 100];
}
function xu(a, l, o) {
  l = lo(l, 0, 100) / 100, o = lo(o, 0, 100) / 100;
  const d = (w) => (w + a / 30) % 12, f = l * Math.min(o, 1 - o), g = (w) => o - f * Math.max(-1, Math.min(d(w) - 3, Math.min(9 - d(w), 1)));
  return "#" + [g(0), g(8), g(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [ku, Mu, Su] = Vh(Cs), Ad = xu(ku, Mu, Math.max(6, Su - 14)), Gh = xu(ku, Mu, Math.min(96, Su + 16));
function Uh(a, l, o, d, f) {
  const g = Nt / 2, w = Nt * 0.12, _ = g - (g - w) * a, y = (ee) => ee ** 1.3, R = lo(o, -1.5, 1.5), me = (ee) => -(Math.abs(R) * 4.6 * ee ** 1.5) * Math.sign(R), ae = a * 1.4, U = (ee, Z) => {
    const V = Math.min(4.8, Math.abs(o) * 2.6) * (Z ? 1 : -1) * Math.sign(o || 1), q = Z ? ee + _ : ee, ce = Z ? ee : ee + _, Q = (Ce) => q + me(Ce) + V * Math.sin(Ce * Math.PI * 1.2 + d) * y(Ce) * 1.4 + ae * Math.sin(Ce * Math.PI * 2 + d * 0.6) * y(Ce) * (Z ? 1 : -1), fe = [[ce, _t]];
    for (let Ce = 0; Ce <= 12; Ce++) fe.push([Q(Ce / 12), _t + Nt * Ce / 12]);
    fe.push([ce, _t + Nt]);
    let X = '<path d="' + yc(fe) + 'Z" fill="' + Cs + '"/>';
    if (f) return X;
    const S = 1.35 + ((Z ? o > 0 : o < 0) ? 0.35 : 0), B = (Ce) => {
      const O = Ce / 7, De = Z ? 1 - O : O, z = (1 - De) ** 1.3, Pe = ee + _ * O;
      return Array.from({ length: 13 }, (k, A) => {
        const C = A / 12;
        return [Pe + me(C) * z + V * S * Math.sin(C * Math.PI * 1.2 + d - De * 3.2) * y(C) * 1.4 * z + ae * 1.6 * Math.sin(C * Math.PI * 2 + d * 0.6 - De * 2.5) * y(C) * a * (0.4 + 0.6 * z), _t + Nt * C];
      });
    }, be = [1, 2, 3, 4, 5, 6].map(B);
    for (let Ce = 0; Ce < 6; Ce += 2) X += '<path d="' + yc(be[Ce]) + yc(be[Ce + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return X;
  }, Y = g - (g - w) * l;
  return { body: U(_t, !0) + U(_t + Nt - _, !1), rails: [{ x: _t + Y - 4, y: _t, w: 4, h: Nt }, { x: _t + Nt - Y, y: _t, w: 4, h: Nt }], head: 6.4 };
}
function Yh(a, l, o) {
  const d = Nt * (1 - a);
  let f = "";
  if (d > 1 && (f += No(_t, _t, Nt, d, Cs), !o))
    for (let g = 1; g < 7; g += 2) f += No(_t + Nt * g / 7, _t, Nt / 7, d, "#fff");
  return { body: f, rails: [{ x: _t, y: _t + Nt * (1 - l) - 7, w: Nt, h: 11 }], head: 10.4 };
}
function Zh(a, l, o, d) {
  const f = 9 - 7 * (o / 100), g = _t + Nt * (1 - a), w = Math.ceil(Nt / 10) + 1, _ = _t + f / 2, y = (_t + Nt - f / 2 - _) / (w - 1), R = 0.8, me = 0.6, ae = Array.from({ length: w }, (ee, Z) => Math.max(_ + Z * me, Math.min(_ + Z * y, g - f / 2 - (w - 1 - Z) * me))), U = ae.slice(0, -1).map((ee, Z) => lo((ae[Z + 1] - ee - me) / (y - me), 0, 1));
  U.push(U[w - 2]);
  let Y = "";
  return ae.forEach((ee, Z) => {
    const V = R + (f - R) * U[Z], q = Math.max(0.5, V / 2), ce = Math.max(0.4, V * 0.114);
    Y += No(_t, ee - q, Nt, Math.max(1, V), Cs), !d && V > 2.2 && (Y += No(_t, ee + q - ce, Nt, ce, Ad) + No(_t, ee - q, Nt, ce * 0.55, Gh, 0.75));
  }), d || [0.22, 0.78].forEach((ee) => {
    Y += No(_t + Nt * ee - 0.7, _t, 1.4, Math.max(0, ae[w - 1] + 1 - _t), Ad, 0.85);
  }), { body: Y, rails: [{ x: _t, y: _t + Nt * (1 - l) - 8, w: Nt, h: 8 }], head: 8.8 };
}
const _d = (a, l, o, d, f, g, w) => a === "curtain" ? Uh(l, o, f, g, w) : a === "venetian" ? Zh(l, o, d, w) : Yh(l, o, w);
function Kh(a, l) {
  let o = "", d = "";
  return l.forEach((f) => {
    const g = f.w > f.h, w = lo(g ? _t + Nt / 2 : f.x + f.w / 2, 17, 183), _ = lo(g ? f.y + f.h / 2 : _t + Nt / 2, 17, 183);
    o += g ? No(_t, lo(f.y + f.h / 2, _t, _t + Nt) - 1, Nt, 2, wc) : No(lo(f.x + f.w / 2, _t, _t + Nt) - 1, _t, 2, Nt, wc);
    const y = g ? "M" + Qt(w - 4) + " " + Qt(_ - 3) + "l4 -3l4 3M" + Qt(w - 4) + " " + Qt(_ + 3) + "l4 3l4 -3" : "M" + Qt(w - 3) + " " + Qt(_ - 4) + "l-3 4l3 4M" + Qt(w + 3) + " " + Qt(_ - 4) + "l3 4l-3 4";
    d += '<circle cx="' + Qt(w) + '" cy="' + Qt(_) + '" r="11" fill="' + wc + '" filter="url(#' + a + 's)"/><path d="' + y + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: d };
}
function $h(a, l) {
  const o = /* @__PURE__ */ new Date(), d = zh(o.getHours() + o.getMinutes() / 60), f = 42 + 18 * Math.sin(d.t * 0.5), g = d.t >= 5 && d.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (d.t - 5) / 15) : 80, w = _d(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), _ = l.ghostAlpha > 4e-3 && l.ghost != null ? _d(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", y = l.grip > 4e-3 ? Kh(a, w.rails) : null, R = (me) => No(_t, _t, Nt, Nt, me);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + a + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + a + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + d.top + '"/><stop offset="1" stop-color="' + d.bot + '"/></linearGradient><radialGradient id="' + a + 'w" cx="' + Qt(f) + '%" cy="' + Qt(g) + '%" r="58%"><stop offset="0" stop-color="' + d.warm + '" stop-opacity="' + Qt(d.op * 0.8) + '"/><stop offset="1" stop-color="' + d.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + a + 'k" cx="' + Qt(100 - f * 0.8) + '%" cy="' + Qt(100 - g * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + d.cool + '" stop-opacity="' + Qt(d.op * 0.64) + '"/><stop offset="1" stop-color="' + d.cool + '" stop-opacity="0"/></radialGradient><filter id="' + a + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Ld + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + a + 'c)">' + R("url(#" + a + "l)") + R("url(#" + a + "w)") + R("url(#" + a + "k)") + (_ ? '<g opacity="' + Qt(l.ghostAlpha) + '">' + _ + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + Cs + '" filter="url(#' + a + 's)"/></g>' + (y ? '<g clip-path="url(#' + a + 'c)" opacity="' + Qt(l.grip) + '">' + y.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Ld + '" stroke-width="3"/>' + (y ? '<g opacity="' + Qt(l.grip) + '">' + y.knobs + "</g>" : "") + "</svg>";
}
function Xh({ onMove: a, onSet: l }) {
  var X;
  const o = "cv" + ++jh, d = document.createElement("div");
  d.className = "tfCoverArt";
  const f = (X = window.matchMedia) == null ? void 0 : X.call(window, "(pointer: coarse)").matches;
  let g = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let _ = 0, y = !1, R = !1, me = null, ae = 0, U = 0;
  const Y = () => (g == null ? void 0 : g.kind) === "curtain" ? "x" : "y", ee = () => me || y || R || g.moving || g.target != null ? 1 : f ? performance.now() < U ? 1 : 0.4 : 0, Z = () => {
    d.innerHTML = $h(o, { kind: g.kind, pos: w.pos, bar: g.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function V(S) {
    _ = 0;
    const B = w.last ? Math.min(0.064, (S - w.last) / 1e3) : 1 / 60, be = B * 60;
    w.last = S;
    const Ce = g.pos - w.pos, O = w.pos;
    w.pos += Math.sign(Ce) * Math.min(Math.abs(Ce), Math.max(10.5, Math.abs(Ce) * 1.4) * B), Math.abs(g.pos - w.pos) < 0.03 && (w.pos = g.pos), w.vel = w.vel * 0.86 + (w.pos - O) / be * 0.14, Math.abs(w.vel) < 0.015 && w.pos === g.pos && (w.vel = 0), (w.pos !== O || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * be);
    const De = g.tilt - w.tilt;
    w.tilt += Math.sign(De) * Math.min(Math.abs(De), Math.max(60, Math.abs(De) * 4) * B);
    const z = ee();
    w.grip += (z - w.grip) * Math.min(1, B * (z > w.grip ? 11 : 3.5)), Math.abs(z - w.grip) < 0.01 && (w.grip = z);
    const Pe = g.target != null && Math.abs(g.target - w.pos) > 0.5 ? 0.22 : 0;
    g.target != null && (w.gpos = g.target), w.ghost += (Pe - w.ghost) * Math.min(1, B * (Pe > w.ghost ? 16 : 3)), Math.abs(Pe - w.ghost) < 4e-3 && (w.ghost = Pe), Z(), w.pos !== g.pos || w.vel || w.tilt !== g.tilt || w.grip !== z || w.ghost !== Pe ? _ = requestAnimationFrame(V) : w.last = 0;
  }
  const q = () => {
    g && !_ && (_ = requestAnimationFrame(V));
  }, ce = setInterval(() => {
    g && !_ && Z();
  }, 60 * 1e3), Q = (S) => {
    const B = d.getBoundingClientRect();
    return Y() === "x" ? (S.clientX - B.left) / B.width : (S.clientY - B.top) / B.height;
  };
  d.addEventListener("pointerdown", (S) => {
    var Ce;
    if (!(g != null && g.canSet) || S.button > 0) return;
    S.preventDefault(), (Ce = d.setPointerCapture) == null || Ce.call(d, S.pointerId);
    const B = g.target ?? g.pos, be = d.getBoundingClientRect();
    me = { p0: Q(S), from: B, x0: S.clientX, value: null, side: null }, g.kind === "curtain" && B > 0 && (me.side = (S.clientX - be.left) / be.width < 0.5 ? "L" : "R"), q();
  }), d.addEventListener("pointermove", (S) => {
    if (!me) return;
    let B;
    if (g.kind === "curtain") {
      if (!me.side) {
        const Ce = S.clientX - me.x0;
        if (Math.abs(Ce) < 4) return;
        me.side = Ce < 0 ? "L" : "R";
      }
      const be = (Nt / 2 - Nt * 0.12) / 200;
      B = me.from + (me.side === "L" ? -1 : 1) * ((Q(S) - me.p0) / be) * 100;
    } else B = me.from - (Q(S) - me.p0) / (Nt / 200) * 100;
    me.value = lo(B, 0, 100), a(me.value);
  });
  const fe = () => {
    if (!me) return;
    const S = me.value;
    me = null, S != null && l(Math.round(S)), q();
  };
  return d.addEventListener("pointerup", fe), d.addEventListener("pointercancel", fe), d.addEventListener("lostpointercapture", fe), d.addEventListener("pointerenter", () => {
    y = !0, q();
  }), d.addEventListener("pointerleave", () => {
    y = !1, q();
  }), d.addEventListener("focus", () => {
    R = d.matches(":focus-visible"), q();
  }), d.addEventListener("blur", () => {
    R = !1, q();
  }), d.addEventListener("keydown", (S) => {
    if (!(g != null && g.canSet)) return;
    const B = Math.round(g.target ?? g.pos), be = S.shiftKey ? 10 : 1, Ce = { ArrowUp: B + be, ArrowRight: B + be, ArrowDown: B - be, ArrowLeft: B - be, PageUp: B + 25, PageDown: B - 25, Home: 0, End: 100 }[S.key];
    if (Ce == null) return;
    S.preventDefault();
    const O = lo(Ce, 0, 100);
    a(O), clearTimeout(ae), ae = setTimeout(() => l(O), 500);
  }), {
    el: d,
    update(S) {
      const B = !g;
      g = S, B && (w.pos = g.pos, w.tilt = g.tilt, U = performance.now() + 1500, f && setTimeout(q, 1600)), d.classList.toggle("x", Y() === "x"), d.classList.toggle("y", Y() === "y"), g.canSet ? (d.tabIndex = 0, d.setAttribute("role", "slider"), d.setAttribute("aria-valuemin", "0"), d.setAttribute("aria-valuemax", "100"), d.setAttribute("aria-valuenow", String(Math.round(g.target ?? g.pos))), d.setAttribute("aria-orientation", Y() === "x" ? "horizontal" : "vertical")) : d.setAttribute("role", "img"), d.setAttribute("aria-label", g.name + (g.canSet ? " position" : "")), d.setAttribute("aria-valuetext", g.text), q();
    },
    destroy() {
      cancelAnimationFrame(_), _ = 0, clearInterval(ce), clearTimeout(ae), d.remove();
    }
  };
}
const Ed = "move-assistant-density", Ti = {
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
}, oe = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), kc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Dd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Jh = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Ll = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Rd = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Nd = 1, Qh = 4, Bd = 16, Pd = 32, ef = 128, tf = 256, Id = 16384, nf = 1, af = 2, Hd = 4, of = 8, rf = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Fd = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, sf = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Mc = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, Od = "move_assistant_house", qd = "move-assistant-house-used", lf = ["switch", "fan", "input_boolean", "automation"], Wd = "move-assistant-house-look", cf = [["popup", "Popup"], ["sheet", "Sheet"]], df = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], uf = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], pf = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Sc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', hf = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', ff = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', jd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', zd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', Vd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Cu = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + a.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", Gd = Cu(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), mf = Cu(["M20 6L9 17L4 12"]), ro = (a, l = "") => '<span class="tfAreaGlyph" data-icon-for="' + oe(a || "") + '"' + (l ? ' data-icon-name="' + oe(l) + '"' : "") + "></span>", gf = (a) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (a ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', vf = 1, bf = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Ud = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Cc = ["hs", "xy", "rgb", "rgbw", "rgbww"], Al = ["door", "window", "garage_door", "opening"], Yd = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, _l = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], wf = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], yf = 10, xf = 20, kf = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Mf = ["living room", "bedroom", "office"];
function Sf(a, { config: l, getHass: o }) {
  var pl, Ba, bs;
  const d = (e) => a.getElementById(e), f = d("app"), w = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let _ = Ti.get(Ed) === "1", y = {};
  const R = (e) => {
    var n;
    return (n = o()) == null ? void 0 : n.callWS(e);
  }, me = (e, n, i) => R({ type: "call_service", domain: e, service: n, service_data: i }), ae = a.querySelector("#appearancePane .toggleList");
  ae && !d("densityToggle") && (ae.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), d("densityToggle").addEventListener("click", () => {
    _ = !_, Ti.set(Ed, _ ? "1" : "0"), X();
  }));
  const U = [
    ["weather", "Weather", "The forecast under Home.", (e) => e.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (e) => e.startsWith("sensor.") && xt(e).device_class === "power" && /^(W|kW)$/.test(xt(e).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (e) => e.startsWith("alarm_control_panel.")]
  ], Y = (e, n, i, c) => '<div class="themeChoice" id="' + e + '" role="group" aria-label="' + n + '">' + c.map(([p, b]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + i + '="' + p + '">' + b + "</button>").join("") + "</div>", ee = (e, n, i, c) => '<div class="toggleRow"' + (c ? ' id="' + c + '"' : "") + "><div><strong>" + e + "</strong>" + (n ? '<div class="status">' + n + "</div>" : "") + "</div>" + i + "</div>";
  function Z() {
    var x, D, F, N, J, xe;
    if (!w || d("housePane")) return;
    const e = d("settingsView");
    e.querySelector(".settingsTitle").textContent = "HomeCore";
    const n = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], i = (Ae, K) => '<div class="houseTab' + (Ae === "look" ? " active" : "") + '" data-house-pane="' + Ae + '"><section class="card">' + K + "</section></div>";
    e.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + n.map(([Ae, K]) => '<button class="tab segBtn' + (Ae === "look" ? " active" : "") + '" type="button" data-house-tab="' + Ae + '">' + K + "</button>").join("") + "</div>" + i("look", '<div class="toggleList" id="houseLook"></div>') + i("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + i("sources", '<div class="toggleList">' + U.map(([Ae, K, ye]) => ee(K, ye, '<select class="settingsSelect" data-source="' + Ae + '" aria-label="' + K + '"></select>')).join("") + "</div>") + i("sums", '<div class="toggleList">' + Object.entries(Mc).map(([Ae, K]) => ee(K.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + Ae + '" aria-label="' + K.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const c = d("houseLook");
    [(x = e.querySelector(".themeBtn")) == null ? void 0 : x.closest(".toggleRow"), (D = d("densityToggle")) == null ? void 0 : D.closest(".toggleRow"), (F = d("moreInfoChoice")) == null ? void 0 : F.closest(".toggleRow"), (N = d("namesChoice")) == null ? void 0 : N.closest(".toggleRow"), (J = d("hoursChoice")) == null ? void 0 : J.closest(".toggleRow"), (xe = d("wxStyleChoice")) == null ? void 0 : xe.closest(".toggleRow")].forEach((Ae) => Ae && c.appendChild(Ae)), c.insertAdjacentHTML("beforeend", ee("Lights", "How lights show on the house page.", Y("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + ee("Pad", "What the Dual Axis Controller’s pad sets on its tile.", Y("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const p = d("housePane"), b = p.querySelector(".houseTabs"), h = b.querySelector(".rubberIndicator"), v = (Ae) => {
      const K = b.querySelector(".tab.active");
      h.style.transition = Ae ? "" : "none", h.style.left = K.offsetLeft + "px", h.style.width = K.offsetWidth + "px", Ae && (h.style.transform = "scaleX(1.08)", setTimeout(() => h.style.transform = "", 180));
    };
    new ResizeObserver(() => v(!1)).observe(b), p.addEventListener("click", (Ae) => {
      const K = Ae.target.closest("[data-house-tab]");
      if (K) {
        b.querySelectorAll(".tab").forEach((re) => re.classList.toggle("active", re === K)), p.querySelectorAll(".houseTab").forEach((re) => re.classList.toggle("active", re.dataset.housePane === K.dataset.houseTab)), K.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), v(!0);
        return;
      }
      const ye = Ae.target.closest("[data-light-fav]");
      if (ye) {
        Ns(ye.dataset.lightFav);
        return;
      }
      const E = Ae.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!E || E.disabled)) {
        if (E.dataset.lights && (pt.lights = E.dataset.lights), E.dataset.dacPad && (pt.dacPad = E.dataset.dacPad), (E.dataset.lights || E.dataset.dacPad) && (Qe(), ra.clear()), E.dataset.sumToggle) {
          const re = E.dataset.sumToggle, Ie = new Set(j.hiddenSums || []);
          Ie.has(re) ? Ie.delete(re) : Ie.add(re), j = { ...j, hiddenSums: [...Ie] }, qn();
        }
        Ra();
      }
    }), p.addEventListener("change", (Ae) => {
      const K = Ae.target;
      K.dataset.source && (j = { ...j, sources: { ...j.sources || {}, [K.dataset.source]: K.value || void 0 } }, qn());
      const ye = K.dataset.lightStyle || K.dataset.lightPad;
      if (ye) {
        const E = K.dataset.lightStyle ? "lightStyles" : "lightPads", re = { ...pt[E] };
        K.value ? re[ye] = K.value : delete re[ye], pt[E] = re, Qe(), [...ra.keys()].filter((Ie) => Ie.endsWith(":" + ye)).forEach((Ie) => ra.delete(Ie));
      }
      Ra();
    });
  }
  function V() {
    var v, x;
    Bn() && Oo();
    const e = d("housePane");
    if (!e) return;
    const n = !!customElements.get(vt);
    e.querySelectorAll("[data-lights]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.lights === pt.lights))), d("lightsRow").querySelector(".status").textContent = n || !Bn() ? "How lights show on the house page." : sn === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", e.querySelectorAll("[data-dac-pad]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.dacPad === pt.dacPad))), d("dacPadRow").hidden = !Bn();
    for (const D of e.querySelectorAll("[data-source]")) {
      if (D === a.activeElement) continue;
      const [F] = U.find(([J]) => J === D.dataset.source), N = Object.keys(y).filter(U.find(([J]) => J === F)[3]).sort((J, xe) => Re(J).localeCompare(Re(xe)));
      D.dataset.sig !== N.join(",") && (D.innerHTML = '<option value="">Automatic</option>' + N.map((J) => '<option value="' + oe(J) + '">' + oe(Re(J)) + "</option>").join(""), D.dataset.sig = N.join(",")), D.value = N.includes((v = j.sources) == null ? void 0 : v[F]) ? j.sources[F] : "";
    }
    e.querySelectorAll("[data-sum-toggle]").forEach((D) => {
      const F = !(j.hiddenSums || []).includes(D.dataset.sumToggle);
      D.classList.toggle("on", F), D.setAttribute("aria-checked", String(F));
    });
    const i = d("lightRows"), c = i != null && i.contains(a.activeElement) ? a.activeElement : null;
    if (!i || c != null && c.matches("select")) return;
    const p = new Set(En()), b = (D, F, N, J) => '<option value="' + D + '"' + (D === N ? " selected" : "") + ">" + F + "</option>", h = Object.keys(y).filter((D) => D.startsWith("light.")).sort((D, F) => !Et.get(D) - !Et.get(F) || (Et.get(D) || "").localeCompare(Et.get(F) || "") || Re(D).localeCompare(Re(F))).map((D) => {
      const F = pt.lightStyles[D] || "", N = pt.lightPads[D] || "", J = p.has(D), xe = oe(Re(D));
      return "<tr><td><strong>" + xe + "</strong></td><td>" + oe(Et.get(D) || "—") + "</td><td>" + oe(Wt(D)) + '</td><td class="metaSwitchCol"><button class="switch' + (J ? " on" : "") + '" type="button" role="switch" aria-checked="' + J + '" data-light-fav="' + oe(D) + '" aria-label="' + xe + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + oe(D) + '" aria-label="' + xe + ' tile">' + b("", "Default", F) + b("tile", "HomeCore tile", F) + b("dac", "Dual Axis Controller", F) + '</select></td><td><select class="settingsSelect" data-light-pad="' + oe(D) + '" aria-label="' + xe + ' pad"' + (Mt(D) ? "" : " disabled") + ">" + b("", "Default", N) + b("temperature", "Temperature", N) + b("colour", "Colour", N) + "</select></td></tr>";
    }).join("");
    i.dataset.html !== h && (i.innerHTML = h, i.dataset.html = h, c != null && c.dataset.lightFav && ((x = i.querySelector('[data-light-fav="' + CSS.escape(c.dataset.lightFav) + '"]')) == null || x.focus({ preventScroll: !0 })));
  }
  const q = document.createElement("div");
  q.className = "densityBadge", q.setAttribute("aria-live", "polite"), q.hidden = !0, f.appendChild(q);
  let ce = 0;
  function Q() {
    if (!_) return;
    const e = d("homeView"), n = (b) => b.offsetParent !== null && !b.closest("[hidden]");
    e.querySelectorAll(":scope .card, :scope .tfAction").forEach((b) => {
      n(b) && (b.dataset.h = Math.round(b.getBoundingClientRect().height) + " px");
    });
    const i = [...e.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(n), c = window.innerHeight, p = i.filter((b) => {
      const h = b.getBoundingClientRect();
      return h.height > 0 && h.top >= 0 && h.bottom <= c + 0.5;
    }).length;
    q.hidden = !e.classList.contains("active"), q.innerHTML = "<b>" + p + "</b><small>of " + i.length + " readings on screen</small>";
  }
  const fe = () => {
    _ && requestAnimationFrame(Q);
  };
  function X() {
    var e;
    f.classList.toggle("showDensity", _), (e = d("densityToggle")) == null || e.classList.toggle("on", _), q.hidden = !_, clearInterval(ce), _ && (ce = setInterval(Q, 1e3), Q());
  }
  window.addEventListener("scroll", fe, { capture: !0, passive: !0 }), window.addEventListener("resize", fe, { passive: !0 });
  const S = a.querySelector("#homeView .grid");
  let B = null, be = null, Ce = null, O = null;
  const De = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), k = 350;
  let A = null;
  const C = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map();
  let j = { favourites: null }, se = {}, he = {}, ve = [], Ze = null;
  const lt = (() => {
    try {
      return JSON.parse(Ti.get(qd)) || {};
    } catch {
      return {};
    }
  })();
  let Et = /* @__PURE__ */ new Map(), gn = 0;
  function qn() {
    clearTimeout(gn), gn = setTimeout(() => Promise.resolve(R({ type: "frontend/set_user_data", key: Od, value: j })).catch(() => {
    }), 400);
  }
  const pt = (() => {
    let e = {};
    try {
      e = JSON.parse(Ti.get(Wd)) || {};
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
  })(), Qe = () => Ti.set(Wd, JSON.stringify(pt)), St = () => {
    f.dataset.more = pt.more, f.dataset.names = pt.names, hs();
  };
  w && ae && !d("moreInfoChoice") && (d("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + cf.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (pt.more === e) + '" data-more-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), d("moreInfoChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-more-style]");
    n && (pt.more = n.dataset.moreStyle, Qe(), St(), d("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  }), d("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + df.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (pt.names === e) + '" data-names-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), d("namesChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-names-style]");
    n && (pt.names = n.dataset.namesStyle, pt.namesPicked = !0, Qe(), St(), d("namesChoice").querySelectorAll("[data-names-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  }), d("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + uf.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (pt.hoursWindow === e) + '" data-hours-window="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), d("hoursChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-hours-window]");
    n && (pt.hoursWindow = n.dataset.hoursWindow, Qe(), Ue == null || Ue.refresh(), d("hoursChoice").querySelectorAll("[data-hours-window]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  }), d("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + pf.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (pt.wxStyle === e) + '" data-wx-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), d("wxStyleChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-wx-style]");
    n && (pt.wxStyle = n.dataset.wxStyle, Qe(), Ue == null || Ue.setStyle(pt.wxStyle), nt == null || nt.forEach((i) => i.setStyle(pt.wxStyle)), d("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  })), Z();
  let it = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const Sn = /* @__PURE__ */ new Map();
  let _n = "";
  const ar = w ? ap({ onChange: () => hn() }) : null;
  w && f.classList.add("house");
  const ht = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ue = null, yt = null, co = !1;
  function or(e) {
    const n = va();
    if (f.classList.toggle("houseBento", !!n), Ue && (yt !== n || e == null) && (Ue.destroy(), Ue = null), !n || e == null) {
      ht.remove();
      return;
    }
    ht.isConnected || S.append(ht), ht.style.order = e, !Ue && !co && (Ue = Td(ht, { getHass: o, entityId: n, style: pt.wxStyle, hoursWindow: () => pt.hoursWindow }), yt = n);
  }
  const Ai = [["wx", ["current"]], ["avg", ["compared_to_average"]]], vn = Object.fromEntries(Ai.map(([e]) => [e, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + e })]));
  let nt = null, Wn = null;
  function ir(e) {
    const n = va();
    nt && Wn !== n && (nt.forEach((i) => i.destroy()), nt = null), Object.values(vn).forEach((i) => n ? !i.isConnected && S.append(i) : i.remove()), n && !nt && !co && (nt = Ai.map(([i, c]) => Td(vn[i], { getHass: o, entityId: n, style: pt.wxStyle, cards: c, onOpen: i === "wx" ? () => fi("weather") : void 0 })), Wn = n);
  }
  const xt = (e) => {
    var n;
    return ((n = y[e]) == null ? void 0 : n.attributes) || {};
  }, Re = (e) => xt(e).friendly_name || e, mt = (e, n) => er(e) || (Number(xt(e).supported_features) & n) === n, Ct = (e) => {
    const n = String(e ?? "").replace(/_/g, " ");
    return n.charAt(0).toUpperCase() + n.slice(1);
  }, Ve = (e, n = 1) => Number(e).toLocaleString(void 0, { minimumFractionDigits: n, maximumFractionDigits: n }), uo = (e) => (e == null ? void 0 : e.state) === "on" ? e.attributes.brightness != null ? Math.max(1, Math.round(e.attributes.brightness / 2.55)) : 100 : 0, Bo = (e) => xt(e).supported_color_modes || [], rr = (e) => {
    const n = e / 100;
    return [n <= 66 ? 255 : 329.7 * Math.pow(n - 60, -0.1332), n <= 66 ? 99.47 * Math.log(n) - 161.12 : 288.12 * Math.pow(n - 60, -0.0755), n >= 66 ? 255 : n <= 19 ? 0 : 138.52 * Math.log(n - 10) - 305.04];
  }, ze = (e, n) => [5, 3, 1].map((i) => {
    const c = (i + e / 60) % 6;
    return 255 * (1 - n / 100 * Math.max(0, Math.min(c, 4 - c, 1)));
  }), Xe = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)), Cn = (e) => {
    const n = 0.2126 * Xe(e[0]) + 0.7152 * Xe(e[1]) + 0.0722 * Xe(e[2]);
    return (n + 0.05) / 0.0664 > 1.05 / (n + 0.05);
  }, Ua = (e) => 0.2126 * Xe(e[0]) + 0.7152 * Xe(e[1]) + 0.0722 * Xe(e[2]), jn = (e, n) => {
    const i = Ua(e), c = Ua(n);
    return (Math.max(i, c) + 0.05) / (Math.min(i, c) + 0.05);
  }, tn = (e, n) => {
    const i = Cn(e);
    for (let c = 0.1; c < 1; c += 0.02) {
      const p = e.map((b) => Math.round(i ? b * (1 - c) : b + (255 - b) * c));
      if (jn(p, e) >= n) return "rgb(" + p.join(",") + ")";
    }
    return i ? "#26221e" : "#ffffff";
  };
  function po(e) {
    const n = xt(e), i = (n.rgb_color || (n.hs_color && n.color_mode !== "color_temp" ? ze(...n.hs_color) : n.color_temp_kelvin ? rr(n.color_temp_kelvin) : [255, 170, 0])).map((c) => Math.round(Math.max(0, Math.min(255, c))));
    return "--light:rgb(" + i.join(",") + ");--light-ink:" + tn(i, 3.5);
  }
  const on = (e) => {
    var n;
    return e.startsWith("light.") && ((n = y[e]) == null ? void 0 : n.state) === "on" ? ' data-light style="' + po(e) + '"' : "";
  }, zn = (e) => {
    const n = Bo(e);
    return n.length ? n.some((i) => i !== "onoff") : xt(e).brightness != null;
  }, _i = (e) => [xt(e).min_color_temp_kelvin || 2e3, xt(e).max_color_temp_kelvin || 6500], Vn = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Vt(e) {
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
  const rn = (e) => {
    var n;
    return xt(e).current_position ?? (((n = y[e]) == null ? void 0 : n.state) === "closed" ? 0 : 100);
  }, Ta = (e) => {
    var n;
    return go("pos", e, ((n = C.get(e)) == null ? void 0 : n.pos) ?? rn(e));
  }, Ya = (e) => {
    var n;
    return go("tilt", e, ((n = C.get(e)) == null ? void 0 : n.tilt) ?? xt(e).current_tilt_position);
  };
  function Wt(e) {
    var h;
    const n = y[e];
    if (!n) return "Not found";
    if (n.state === "unavailable") return "Unavailable";
    const i = n.attributes, c = e.split(".")[0];
    if (c === "light") {
      if (n.state !== "on") return "Off";
      const v = i.color_temp_kelvin;
      return (zn(e) ? uo(n) + "%" : "On") + (i.color_mode === "color_temp" && v ? " · " + Number(v).toLocaleString() + "k" : Cc.includes(i.color_mode) ? " · Colour" : "");
    }
    if (c === "climate") return (n.state === "off" ? "Off" : Ct(i.hvac_action || n.state)) + " · " + Ve(i.current_temperature) + " °C now";
    if (c === "cover") {
      const v = rn(e), x = i.current_tilt_position;
      return n.state === "opening" || n.state === "closing" ? Ct(n.state) + " - " + v + "%" : (v <= 0 ? "Closed" : v >= 100 ? "Open" : "Partially open") + (x > 0 && x < 100 ? " · tilted" : "");
    }
    if (c === "humidifier") return n.state !== "on" ? "Off" : Ct(i.action || "on") + " · " + i.current_humidity + "% now";
    if (c === "vacuum") return Ct(n.state) + (n.state === "cleaning" && ((h = i.rooms) != null && h.length) ? " · " + i.rooms.join(", ") : "") + (i.battery_level != null ? " · " + i.battery_level + "%" : "");
    if (c === "media_player") return n.state === "playing" || n.state === "paused" ? (n.state === "paused" ? "Paused · " : "") + (i.media_title || "Playing") : Ct(n.state);
    if (c === "alarm_control_panel") return Ud[n.state] || Ct(n.state);
    if (c === "lock" || c === "valve") return Ct(n.state);
    if (c === "switch") return n.state === "on" ? "On" : "Off";
    if (c === "plant") return n.state === "ok" ? "Healthy" : Ct(i.problem);
    if (c === "binary_sensor")
      return i.device_class === "battery" ? n.state === "on" ? "Low" : "Normal" : i.device_class === "problem" ? n.state === "on" ? "Problem" : "OK" : i.device_class === "moisture" ? n.state === "on" ? "Wet" : "Dry" : Al.includes(i.device_class) ? n.state === "on" ? "Open" : "Closed" : n.state === "on" ? "Detected" : "Clear";
    if (i.rang) return "Rang at " + Vn(i.rang);
    const p = o();
    if (p != null && p.formatEntityState && !er(e))
      try {
        return p.formatEntityState(n);
      } catch {
      }
    const b = Number(n.state);
    if (n.state !== "" && Number.isFinite(b)) {
      const v = Math.abs(b) >= 100 ? 0 : Math.abs(b) >= 10 ? 1 : 2, x = i.unit_of_measurement ? i.unit_of_measurement === "%" ? "%" : " " + i.unit_of_measurement : "";
      return b.toLocaleString(void 0, { maximumFractionDigits: v }) + x + (i.plant_low ? " · Low" : i.plant_high ? " · High" : "");
    }
    return Ct(n.state);
  }
  const Po = (e) => e >= 1e3 ? Ve(e / 1e3, 2) + " kW" : Math.round(e).toLocaleString() + " W";
  function oa(e) {
    var i, c;
    const n = o();
    e.querySelectorAll("[data-icon-for]").forEach((p) => {
      var v;
      const b = y[p.dataset.iconFor], h = p.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && b && !h) {
        let x = p.firstElementChild;
        (!x || x.localName !== "ha-state-icon") && (p.textContent = "", x = document.createElement("ha-state-icon"), p.appendChild(x)), x.hass = n, x.stateObj = b;
      } else if (customElements.get("ha-icon")) {
        let x = p.firstElementChild;
        (!x || x.localName !== "ha-icon") && (p.textContent = "", x = document.createElement("ha-icon"), p.appendChild(x)), x.icon = h || ((v = b == null ? void 0 : b.attributes) == null ? void 0 : v.icon) || "mdi:circle-medium";
      } else p.textContent || (p.textContent = (p.dataset.letter || Re(p.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (i = e.querySelectorAll) == null || i.call(e, ".tfIcon").forEach(ho), (c = e.classList) != null && c.contains("tfIcon") && ho(e), lr();
  }
  const La = /* @__PURE__ */ new Map();
  function ho(e) {
    var b, h, v;
    const n = (((b = e.closest("[data-k]")) == null ? void 0 : b.dataset.k) || "") + "|" + (e.dataset.iconFor || ((h = e.querySelector("[data-icon-for]")) == null ? void 0 : h.dataset.iconFor) || e.getAttribute("aria-label") || ""), i = getComputedStyle(e), c = { backgroundColor: i.backgroundColor, color: i.color }, p = La.get(n);
    La.set(n, c), !(!p || p.backgroundColor === c.backgroundColor && p.color === c.color || (v = window.matchMedia) != null && v.call(window, "(prefers-reduced-motion: reduce)").matches) && e.animate([p, c], { duration: 180, easing: "ease" });
  }
  const Io = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Ho = (e) => {
    const n = [e];
    for (; n.length; ) {
      const i = n.shift();
      if (i.localName === "svg") return i;
      i.shadowRoot && n.push(...i.shadowRoot.children), n.push(...i.children);
    }
    return null;
  };
  function sr(e) {
    var xe, Ae, K;
    const n = e.localName === "svg" ? e : Ho(e), i = n ? [...n.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!i.length) return !n;
    const c = (xe = e.closest(".tfIcon")) == null ? void 0 : xe.offsetWidth;
    if (c === void 0) return !0;
    if (!c) return !1;
    const p = c + "|" + i.map((ye) => ye.getAttribute("d") || ye.localName).join("|");
    if (e.dataset.fitted === p) return !0;
    let b = 1 / 0, h = 1 / 0, v = -1 / 0, x = -1 / 0;
    for (const ye of i) {
      const E = ye.getBBox(), re = getComputedStyle(ye), Ie = re.stroke !== "none" ? (parseFloat(re.strokeWidth) || 0) / 2 : 0;
      !E.width && !E.height || (b = Math.min(b, E.x - Ie), h = Math.min(h, E.y - Ie), v = Math.max(v, E.x + E.width + Ie), x = Math.max(x, E.y + E.height + Ie));
    }
    if (!(v > b)) return !1;
    const D = (K = (Ae = n.viewBox) == null ? void 0 : Ae.baseVal) != null && K.width ? n.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, F = c - 14, N = F * D.width / Math.max(v - b, x - h), J = N / D.width;
    return e.localName === "svg" ? (e.style.width = N + "px", e.style.height = N + "px") : e.style.setProperty("--mdc-icon-size", N + "px"), n.style.translate = ((D.x + D.width / 2 - (b + v) / 2) * J).toFixed(2) + "px " + ((D.y + D.height / 2 - (h + x) / 2) * J).toFixed(2) + "px", e.dataset.fitted = p, !0;
  }
  let kt = 0;
  function Ha(e = 0) {
    clearTimeout(kt), [...a.querySelectorAll(Io)].filter((i) => !sr(i)).length && e < 5 && (kt = setTimeout(() => Ha(e + 1), 300));
  }
  function lr() {
    clearTimeout(kt), kt = setTimeout(() => Ha(), 60);
  }
  const cr = (e) => {
    var n, i, c;
    return e.startsWith("light.") && y[e] && !xt(e).icon && !((c = (i = (n = o()) == null ? void 0 : n.entities) == null ? void 0 : i[e]) != null && c.icon) ? "mdi:lightbulb" : "";
  }, Bt = (e, n, i) => (n = n || cr(e), ' data-icon-for="' + oe(e) + '"' + (n ? ' data-icon-name="' + oe(n) + '"' : "") + (i ? ' data-letter="' + oe(i) + '"' : "")), Pt = (e) => e.endsWith("_solar_power") ? "mdi:solar-power-variant" : xt(e).rang ? "mdi:doorbell" : "", ft = (e, n, i, c) => oe([e, n, i, c ? JSON.stringify(c) : ""].join("|")), Fo = (e) => oe(JSON.stringify(e));
  function Za(e, n) {
    var p, b;
    const i = oe(Re(n) + ", " + Wt(n));
    return '<div class="activityRow' + (Number.isFinite(Number((p = y[n]) == null ? void 0 : p.state)) && ((b = y[n]) == null ? void 0 : b.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + oe(e + "|" + n) + '" aria-label="' + i + '. Show the last 24 hours"' : '" aria-label="' + i + '"') + '><div class="tfIcon" aria-hidden="true"' + Bt(n, Pt(n)) + '></div><div><div class="activityRowName">' + oe(Re(n)) + '</div><div class="activityRowMeta">' + oe(Wt(n)) + "</div></div></div>";
  }
  const fo = (e, n, i) => '<div class="activityRow" aria-label="' + oe(e + ", " + n) + '"><div class="tfIcon" aria-hidden="true"' + Bt("", i, e) + '></div><div><div class="activityRowName">' + oe(e) + '</div><div class="activityRowMeta">' + oe(n) + "</div></div></div>";
  function M(e) {
    var i;
    const n = ((i = y[e]) == null ? void 0 : i.state) === "on";
    return '<div class="activityRow tfPlug' + (n ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + ft("switch", "toggle", e) + '" aria-label="Turn ' + oe(Re(e)) + (n ? " off" : " on") + '"' + Bt(e) + '></button><button class="tfName" type="button" data-more="' + oe(e) + '" aria-label="' + oe(Re(e) + ", " + Wt(e) + ". More info") + '"><span class="activityRowName">' + oe(Re(e)) + '</span><span class="activityRowMeta">' + oe(Wt(e)) + "</span></button></div>";
  }
  const L = (e) => {
    var n;
    return ((n = z.get(e)) == null ? void 0 : n.name) ?? Re(e);
  }, P = (e) => {
    var n;
    return ((n = z.get(e)) == null ? void 0 : n.text) ?? Wt(e);
  };
  function G(e) {
    var i;
    const n = (i = z.get(e)) == null ? void 0 : i.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (n ? Bt("", n, L(e)) : Bt(e, Pt(e))) + '></div><div><div class="activityRowName">' + oe(L(e)) + '</div><div class="activityRowMeta">' + oe(P(e)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + oe(L(e)) + '’s last 24 hours">' + kc + '</button></div><svg class="tfGraph" data-graph="' + oe(e) + '" role="img" aria-label="' + oe(L(e)) + ', last 24 hours"></svg></div>';
  }
  function $(e, n, i, c, p = "", b = null, h = "") {
    const v = B && B.key === e;
    return '<section class="card tfCard' + (h ? " " + h : "") + (v ? " open" : "") + '" data-tf data-k="' + oe(e) + '" style="order:' + n + (v && B.h ? ";min-height:" + B.h + "px" : "") + '" aria-label="' + oe(i) + '"><div class="activityHeader">' + (b ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + oe(b) + '" aria-label="' + oe(i + (y[b] ? ", " + Wt(b) : "") + ". More info") + '">' + oe(i) + "</button>" : '<div class="activityTitle">' + oe(i) + "</div>") + "</div>" + (v ? G(B.id) : '<div class="activityRows">' + c.join("") + "</div>" + p) + "</section>";
  }
  function ie(e, n) {
    const i = "readings:" + e.id, c = e.readings.map((p) => Za(i, p));
    return e.power != null && c.push(fo("Power now", Po(e.power), "mdi:flash")), $(i, n, "Readings", c.concat(e.plugs.map(M)));
  }
  function pe(e, n) {
    var v;
    const i = "energy:" + e.id, [c, p] = [e.solar.find((x) => x.endsWith("_power")), e.solar.find((x) => x.endsWith("_today"))], b = [c, p].filter(Boolean).map((x) => Za(i, x)), h = Number(((v = y[c]) == null ? void 0 : v.state) || 0) * 1e3;
    return it.grid && (b.push(Za(i, it.grid)), b.push(fo("House use", Po(h + Number(y[it.grid].state)), "mdi:home-lightning-bolt"))), $(i, n, "Energy", b, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const we = (e, n) => $("plant:" + e.id, n, Re(e.id), e.readings.map((i) => Za("plant:" + e.id, i)), "", e.id);
  function ge(e, n, i, c, p, b, h = null) {
    const v = i == null ? null : Math.max(0, Math.min(1, i)), x = v == null ? 0 : Math.round(v * 100);
    return '<div class="tfBar ' + e + '" role="slider" tabindex="0" aria-label="' + oe(c) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + x + '"' + (p ? ' aria-valuetext="' + oe(p) + '"' : "") + ' data-drag="' + oe(e + "|" + n) + '">' + (h != null ? '<span class="was" aria-hidden="true" style="left:' + h + '%"></span>' : "") + (b ? v == null ? "" : '<b style="left:' + x + '%"></b>' : '<i style="width:' + x + '%"></i>') + "</div>";
  }
  const Be = "move-assistant-house-last-bright", ke = (() => {
    try {
      return JSON.parse(Ti.get(Be)) || {};
    } catch {
      return {};
    }
  })();
  let Ee = 0;
  const Ge = (e, n) => {
    !n || ke[e] === n || (ke[e] = n, clearTimeout(Ee), Ee = setTimeout(() => Ti.set(Be, JSON.stringify(ke)), 500));
  }, qe = (e, n, i, c) => '<div class="tfStep" role="group" aria-label="' + oe(e) + '"><button type="button" data-act="' + i + '" aria-label="Lower ' + oe(e.toLowerCase()) + '">' + Rd.down + "</button><output>" + oe(n) + '</output><button type="button" data-act="' + c + '" aria-label="Raise ' + oe(e.toLowerCase()) + '">' + Rd.up + "</button></div>", Le = (e, n, i) => '<div class="' + e + '" role="group" aria-label="' + oe(n) + '">' + i.filter(Boolean).map((c) => '<button type="button" data-act="' + c.act + '"' + (c.pressed != null ? ' aria-pressed="' + c.pressed + '"' : "") + (c.disabled ? " disabled" : "") + (c.aria ? ' aria-label="' + oe(c.aria) + '"' : "") + ">" + (c.html || oe(c.label)) + "</button>").join("") + "</div>", je = (e, n) => "width:" + Math.round(Math.max(0, Math.min(1, (e - n * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * n / 3).toFixed(2), et = (e) => "left:calc(4px + " + e / 100 + " * (100% - 8px))", Fe = (e, n) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + oe(Re(e)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-blocks="' + oe(e) + '">' + [0, 1, 2, 3].map((i) => '<span><i style="' + je(n, i) + '"></i><b' + (n >= (i + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (i + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + et(n) + '">' + Math.round(n) + "%</output></div>";
  function at(e, n) {
    e.querySelectorAll(":scope>span").forEach((c, p) => {
      c.firstElementChild.setAttribute("style", je(n, p)), c.lastElementChild.classList.toggle("lit", n >= (p + 1) * 25 - 12);
    });
    const i = e.querySelector(".tfTip");
    i.setAttribute("style", et(n)), i.textContent = Math.round(n) + "%", e.setAttribute("aria-valuenow", String(Math.round(n))), e.setAttribute("aria-valuetext", Math.round(n) + "% open");
  }
  const tt = (e, n) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + oe(Re(e)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-drag="tilt|' + oe(e) + '"><i style="width:calc((100% - 8px) * ' + n / 100 + ')"></i><span' + (n > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (n > 92 ? ' class="lit"' : "") + ">Open</span></div>", Ot = (e, n, i) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + oe(Re(e)) + '">' + [
    mt(e, nf) && ["open", "Open", "open_cover", n >= 100 && !i],
    mt(e, of) && ["stop", "Stop", "stop_cover", !1],
    mt(e, af) && ["close", "Close", "close_cover", n <= 0 && !i]
  ].filter(Boolean).map(([c, p, b, h]) => '<button type="button" data-act="' + ft("cover", b, e) + '" aria-label="' + p + '"' + (h ? " disabled" : "") + ">" + rf[c] + "</button>").join("") + "</div>", Ne = (e, n) => '<button class="tfIcon' + (n.art ? " art" : "") + '" type="button" data-act="' + n.button.act + '" aria-label="' + oe(n.button.label) + '"' + (n.art ? ' style="background-image:url(&quot;' + oe(n.art) + '&quot;)"' : Bt(e, n.icon)) + "></button>", It = (e) => '<button class="tfName" type="button" data-more="' + oe(e) + '" aria-label="' + oe(Re(e) + ", " + Wt(e) + ". More info") + '"><span class="activityRowName">' + oe(Re(e)) + '</span><span class="activityRowMeta">' + oe(Wt(e)) + "</span></button>";
  function qt(e, n = !1, i = null) {
    if (e.startsWith("light.") && Fa(e)) return '<div class="tfDac" data-k="' + oe(e) + '" data-dac="' + (n ? "more:" : i ? "dash:" : "tile:") + oe(e) + '"' + on(e) + "></div>";
    const c = ma(e), p = i || (n && e.startsWith("light.") ? ["bright"] : null), b = c.sections.map((h, v) => h && (!p || p.includes((c.parts || [])[v])) ? h : "").filter(Boolean);
    return '<div class="tfAction' + (c.on ? " on" : "") + '" data-k="' + oe(e) + '"' + (c.tone ? ' data-tone="' + c.tone + '"' : "") + on(e) + '><div class="tfActionHead">' + Ne(e, c) + It(e) + "</div>" + b.join("") + "</div>";
  }
  const vt = "dual-controller-v3", ia = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.4/dist/dual-axis-controller-v4.js";
  let sn = null;
  async function Oo() {
    if (sn || customElements.get(vt)) return;
    sn = "loading";
    const e = await Promise.resolve().then(() => R({ type: "lovelace/resources" })).catch(() => null), n = Array.isArray(e) && e.some((c) => /dual-axis-controller/i.test(c.url || ""));
    if (await Promise.race([customElements.whenDefined(vt), new Promise((c) => setTimeout(c, n ? 8e3 : 0))]), customElements.get(vt)) return;
    const i = Object.assign(document.createElement("script"), { src: ia });
    i.onerror = () => {
      sn = "failed", V();
    }, document.head.appendChild(i);
  }
  const ra = /* @__PURE__ */ new Map(), Mt = (e) => (pt.lightStyles[e] || pt.lights) === "dac", Bn = () => pt.lights === "dac" || Object.values(pt.lightStyles).includes("dac");
  function Fa(e) {
    return Mt(e) && !!customElements.get(vt);
  }
  const qo = (e) => pt.lightPads[e] || pt.dacPad, Ka = () => {
    const e = o();
    return e && {
      ...e,
      themes: { ...e.themes || {}, darkMode: !f.classList.contains("light") },
      callService: (n, i, c, ...p) => e.callService(n, ...wi(n, i, c), ...p)
    };
  }, Ei = ".halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", $a = ".hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.hcChip:not(.is-on){background:var(--hc-icon,var(--hc-tile))!important;color:var(--hc-icon-ink,var(--hc-text))!important}.hcChip.is-on{background:var(--light,var(--hc-light-on))!important;color:var(--light-ink,#ffffff)!important}", Pn = (e, n) => {
    !e.shadowRoot || e.shadowRoot.querySelector("style[data-tf]") || (e.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: $a + (n ? Ei : "") })).dataset.tf = "");
  }, Or = /* @__PURE__ */ new Map(), Ts = new ResizeObserver((e) => e.forEach(({ target: n }) => {
    const i = n.parentElement;
    !i || !n.offsetHeight || (i.style.removeProperty("min-height"), Or.set(i.dataset.dac, i.offsetHeight));
  }));
  function mo(e) {
    var n;
    [...(n = e.matches) != null && n.call(e, "[data-dac]") ? [e] : [], ...e.querySelectorAll("[data-dac]")].forEach((i) => {
      const c = i.dataset.dac, p = c.startsWith("dash:");
      let b = ra.get(c);
      if (!b) {
        const h = c.slice(c.indexOf(":") + 1);
        b = document.createElement(vt), b.setConfig({ type: "custom:" + vt, entity: h, pad: qo(h), ...p ? { tap_action: { action: "none" } } : {} }), ra.set(c, b);
      }
      b.hass = Ka(), b.parentNode !== i && i.replaceChildren(b, ...i.querySelectorAll(":scope > .tfEditChips")), !b.offsetHeight && Or.has(c) && (i.style.minHeight = Or.get(c) + "px"), Ts.observe(b), Pn(b, p);
    });
  }
  function Ol() {
    const e = Ka();
    ra.forEach((n, i) => {
      n.isConnected ? n.hass = e : ra.delete(i);
    });
  }
  customElements.whenDefined(vt).then(() => {
    w && (S != null && S.querySelector("[data-tf]")) && ds(Ra);
  });
  const go = (e, n, i) => Pe.has(e + "|" + n) ? Pe.get(e + "|" + n) : i;
  function ma(e) {
    var b;
    const n = y[e], i = n.attributes, c = e.split(".")[0], p = (h, v) => ({ act: ft(h, "toggle", e), label: v });
    if (c === "light") {
      const h = n.state === "on", v = Bo(e), [x, D] = _i(e), F = go("bright", e, uo(n));
      h && Ge(e, uo(n));
      const N = go("ct", e, h && i.color_mode === "color_temp" ? i.color_temp_kelvin : null), J = go("hue", e, h && Cc.includes(i.color_mode) && i.hs_color ? i.hs_color[0] : null);
      return { on: h, button: p("light", "Turn " + Re(e) + (h ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        zn(e) && ge("bright", e, F / 100, Re(e) + " brightness", F + "%", !1, h ? null : ke[e] ?? null),
        v.includes("color_temp") && ge("ct", e, N == null ? null : (N - x) / (D - x), Re(e) + " warm to cool", N == null ? "" : Math.round(N) + " kelvin", !0),
        v.some((xe) => Cc.includes(xe)) && ge("hue", e, J == null ? null : J / 360, Re(e) + " colour", "", !0)
      ] };
    }
    if (c === "climate") {
      const h = i.target_temp_step || 0.5, v = Number(i.temperature);
      return { on: n.state !== "off", tone: n.state === "cool" || i.hvac_action === "cooling" ? "cool" : "heat", button: p("climate", "Turn " + Re(e) + (n.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(v) && qe("Target temperature", Ve(v) + " °C", ft("climate", "set_temperature", e, { temperature: v - h }), ft("climate", "set_temperature", e, { temperature: v + h })),
        Le("tfSeg", "Mode", (i.hvac_modes || []).map((x) => ({ label: Ct(x), act: ft("climate", "set_hvac_mode", e, { hvac_mode: x }), pressed: n.state === x })))
      ] };
    }
    if (c === "cover") {
      const h = n.state === "opening" || n.state === "closing", v = n.state === "closed", x = Ta(e), D = Ya(e);
      return { on: !v, tone: "blue", icon: Fd[xc(n)][v ? 1 : 0], button: p("cover", (v ? "Open " : "Close ") + Re(e)), parts: ["blocks", "tilt", "buttons"], sections: [
        mt(e, Hd) && Fe(e, x),
        D != null && tt(e, D),
        Ot(e, x, h)
      ] };
    }
    if (c === "humidifier") {
      const h = Number(i.humidity);
      return { on: n.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: p("humidifier", "Turn " + Re(e) + (n.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(h) && qe("Target humidity", h + "%", ft("humidifier", "set_humidity", e, { humidity: h - 1 }), ft("humidifier", "set_humidity", e, { humidity: h + 1 })),
        ((b = i.available_modes) == null ? void 0 : b.length) && Le("tfSeg", "Mode", i.available_modes.map((v) => ({ label: Ct(v), act: ft("humidifier", "set_mode", e, { mode: v }), pressed: i.mode === v })))
      ] };
    }
    if (c === "media_player") {
      const h = n.state === "playing", v = n.state === "off" || n.state === "standby", x = go("vol", e, i.volume_level), D = v ? { act: ft("media_player", mt(e, ef) ? "turn_on" : "toggle", e), label: "Turn " + Re(e) + " on" } : n.state === "playing" || n.state === "paused" ? { act: ft("media_player", "media_play_pause", e), label: (h ? "Pause " : "Play ") + Re(e) } : { act: ft("media_player", mt(e, tf) ? "turn_off" : "toggle", e), label: "Turn " + Re(e) + " off" };
      return { on: !v, tone: "blue", art: !v && i.entity_picture ? i.entity_picture : null, button: D, parts: ["playback", "volume"], sections: v ? [] : [
        (mt(e, Bd) || mt(e, Pd) || mt(e, Nd) || mt(e, Id)) && Le("tfSeg", "Playback", [
          { html: Ll.prev, aria: "Previous", act: ft("media_player", "media_previous_track", e), disabled: !mt(e, Bd) },
          { html: h ? Ll.pause : Ll.play, aria: h ? "Pause" : "Play", act: ft("media_player", "media_play_pause", e), disabled: !(mt(e, Nd) || mt(e, Id)) },
          { html: Ll.next, aria: "Next", act: ft("media_player", "media_next_track", e), disabled: !mt(e, Pd) }
        ]),
        mt(e, Qh) && x != null && ge("vol", e, x, Re(e) + " volume", Math.round(x * 100) + "%")
      ] };
    }
    if (c === "vacuum") {
      const h = n.state === "cleaning", v = i.rooms || [], x = (F) => v.includes(F) ? v.filter((N) => N !== F) : v.concat(F), D = ft("vacuum", h ? "pause" : "start", e, er(e) ? { rooms: v } : null);
      return { on: h || n.state === "returning", tone: "blue", button: { act: D, label: (h ? "Pause " : "Start ") + Re(e) }, parts: ["controls", "rooms"], sections: [
        Le("tfSeg", Re(e), [
          { label: h ? "Pause" : "Start", act: D },
          { label: "Dock", act: ft("vacuum", "return_to_base", e), disabled: n.state === "docked" },
          { label: "Locate", act: ft("vacuum", "locate", e) }
        ]),
        er(e) && Le("tfChips", "Rooms to clean", it.rooms.filter((F) => F.id !== "balcony").map((F) => ({ label: F.name, act: ft("vacuum", "set_rooms", e, { rooms: x(F.name) }), pressed: v.includes(F.name) })))
      ] };
    }
    if (c === "lock") {
      const h = n.state === "locked";
      return { on: !h, tone: "heat", button: { act: ft("lock", h ? "unlock" : "lock", e), label: (h ? "Unlock " : "Lock ") + Re(e) }, parts: ["controls"], sections: [
        Le("tfSeg", Re(e), [
          { label: "Lock", act: ft("lock", "lock", e), pressed: h },
          { label: "Unlock", act: ft("lock", "unlock", e), pressed: n.state === "unlocked" },
          mt(e, vf) && { label: "Open", act: ft("lock", "open", e), pressed: n.state === "open" }
        ])
      ] };
    }
    if (c === "alarm_control_panel") {
      const h = n.state === "disarmed";
      return { on: !h, tone: n.state === "triggered" ? "alarm" : "blue", button: { act: ft("alarm_control_panel", h ? "alarm_arm_away" : "alarm_disarm", e), label: h ? "Arm " + Re(e) + ", away" : "Disarm " + Re(e) }, parts: ["controls"], sections: [
        Le("tfSeg", Re(e), bf.filter(([, , , v]) => !v || mt(e, v)).map(([v, x, D]) => ({ label: x, act: ft("alarm_control_panel", D, e), pressed: n.state === v })))
      ] };
    }
    if (c === "valve") {
      const h = n.state === "open";
      return { on: h, tone: "blue", icon: "mdi:sprinkler-variant", button: p("valve", (h ? "Close " : "Open ") + Re(e)), parts: ["controls"], sections: [
        Le("tfSeg", Re(e), [
          { label: "Open", act: ft("valve", "open_valve", e), pressed: h },
          { label: "Close", act: ft("valve", "close_valve", e), pressed: !h }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Re(e) }, sections: [] };
  }
  const Wo = (e) => (Number.isInteger(Number(e)) ? String(Number(e)) : Ve(e)) + "°";
  function dr(e) {
    var ye;
    const n = (E) => e.readings.find((re) => xt(re).device_class === E), i = n("temperature"), c = n("humidity"), p = (E) => {
      var re;
      return Number((re = y[E]) == null ? void 0 : re.state);
    }, b = (E) => e.actions.filter((re) => E.test(re)), h = e.lights.filter((E) => {
      var re;
      return ((re = y[E]) == null ? void 0 : re.state) === "on";
    }), v = b(/^cover\./), x = v.filter((E) => {
      var re;
      return ((re = y[E]) == null ? void 0 : re.state) !== "closed";
    }), D = [...new Set(v.map((E) => xc(y[E])))], F = b(/^climate\./)[0], N = b(/^humidifier\./)[0], J = b(/^media_player\./), xe = J.find((E) => {
      var re;
      return ((re = y[E]) == null ? void 0 : re.state) === "playing";
    }) || J.find((E) => {
      var re;
      return ((re = y[E]) == null ? void 0 : re.state) === "paused";
    }), Ae = e.plugs.filter((E) => {
      var re;
      return ((re = y[E]) == null ? void 0 : re.state) === "on";
    }), K = [];
    if (i && Number.isFinite(p(i)) && K.push({ key: "temp", id: i, kind: "reading", icon: ro(i), label: "Temperature", value: Ve(p(i)) + "°" }), c && Number.isFinite(p(c)) && K.push({ key: "hum", id: c, kind: "reading", icon: ro(c), label: "Humidity", value: Math.round(p(c)) + "%" }), e.lights.length && K.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: ro("", "mdi:lightbulb"),
      label: "Lights",
      value: h.length ? h.length + " of " + e.lights.length + " on" : "All off",
      short: h.length ? h.length + " on" : "Off",
      on: h.length > 0,
      light: h.length ? po(h[0]) : "",
      acts: e.lights.map((E) => ["light", h.length ? "turn_off" : "turn_on", E]),
      aria: (h.length ? "Turn off" : "Turn on") + " the lights in " + e.name
    }), v.length) {
      const E = D.length === 1 ? sf[D[0]] : "covers", re = Math.round(v.reduce((Ie, ut) => Ie + rn(ut), 0) / v.length);
      K.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: ro("", ((ye = Fd[D[0]]) == null ? void 0 : ye[x.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Ct(E),
        value: re <= 0 ? "Closed" : re >= 100 ? "Open" : re + "% open",
        short: re <= 0 ? "Closed" : re + "%",
        on: x.length > 0,
        acts: v.map((Ie) => ["cover", x.length ? "close_cover" : "open_cover", Ie]),
        aria: (x.length ? "Close the " : "Open the ") + E + " in " + e.name
      });
    }
    if (F) {
      const E = xt(F), re = y[F].state === "off";
      K.push({
        key: "climate",
        kind: "control",
        tone: E.hvac_action === "cooling" ? "cool" : "heat",
        icon: ro(F),
        label: Re(F),
        value: re ? "Off" : Ct(E.hvac_action || y[F].state) + " · " + Wo(E.temperature),
        short: re ? "Off" : Wo(E.temperature),
        on: !re,
        acts: [["climate", "toggle", F]],
        aria: "Turn " + Re(F) + (re ? " on" : " off")
      });
    }
    if (N) {
      const E = y[N].state === "on";
      K.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: ro("", "mdi:air-humidifier"),
        label: Re(N),
        value: E ? "On · " + xt(N).humidity + "%" : "Off",
        short: E ? xt(N).humidity + "%" : "Off",
        on: E,
        acts: [["humidifier", "toggle", N]],
        aria: "Turn " + Re(N) + (E ? " off" : " on")
      });
    }
    if (J.length) {
      const E = xe || J[0], re = y[E], Ie = re.state === "playing";
      K.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: ro(E),
        label: Re(E),
        value: Wt(E),
        short: Ie ? "Playing" : re.state === "paused" ? "Paused" : Ct(re.state),
        on: Ie,
        acts: [["media_player", re.state === "playing" || re.state === "paused" ? "media_play_pause" : "toggle", E]],
        aria: (Ie ? "Pause " : "Play ") + Re(E)
      });
    }
    return e.plugs.length && K.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: ro("", "mdi:power-plug"),
      label: "Plugs",
      value: Ae.length ? Ae.length + " of " + e.plugs.length + " on" : "All off",
      short: Ae.length ? Ae.length + " on" : "Off",
      on: Ae.length > 0,
      acts: e.plugs.map((E) => ["switch", Ae.length ? "turn_off" : "turn_on", E]),
      aria: (Ae.length ? "Turn off" : "Turn on") + " the plugs in " + e.name
    }), e.alerts.forEach((E) => K.push(xt(E).device_class === "moisture" ? { key: "alert:" + E, kind: "alert", icon: ro(E), label: "Water leak" } : { key: "note:" + E, kind: "note", icon: ro(E), label: Re(E) + " " + Wt(E).toLowerCase() })), K;
  }
  const jo = (e, n) => {
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
          var b;
          return ((b = y[p]) == null ? void 0 : b.state) === "playing";
        }) || c.find((p) => {
          var b;
          return ((b = y[p]) == null ? void 0 : b.state) === "paused";
        }) || c[0]].filter(Boolean);
      })()
    }[n] || [];
  }, Ls = (e, n, i) => '<button class="' + n + (e.on ? " on" : "") + '" type="button" data-tone="' + e.tone + '" data-acts="' + Fo(e.acts) + '" aria-label="' + oe(e.aria) + '" aria-pressed="' + e.on + '">' + i + "</button>", ql = (e) => '<button class="tfAName" type="button" data-go="' + oe(e.id) + '" aria-label="Open ' + oe(e.name) + '">' + oe(e.name) + "</button>";
  function ur(e, n, i = !1) {
    const c = n.find((v) => v.key === "lights"), p = !!(c != null && c.on), b = "", h = '<span class="tfAreaGlyph"' + Bt("area:" + e.id, e.icon || "mdi:texture-box", e.name) + "></span>";
    return i || !c ? '<span class="tfIcon tfAreaIcon' + (p ? " on" : "") + '"' + b + ' aria-hidden="true">' + h + "</span>" : '<button class="tfIcon tfAreaIcon' + (p ? " on" : "") + '" type="button"' + b + ' data-acts="' + Fo(c.acts) + '" aria-label="' + oe(c.aria) + '" aria-pressed="' + p + '">' + h + "</button>";
  }
  const qr = (e) => e.filter((n) => n.kind === "alert" || n.kind === "note").map((n) => '<span class="sourceTag">' + oe(n.label) + "</span>").join(" "), Gt = (e) => e.readings.find((n) => xt(n).device_class === "temperature") || [...e.readings, ...e.solar, ...e.openings, ...e.actions, ...e.plugs].find((n) => y[n]) || null, As = (e, n) => {
    const i = Re(n);
    return i.toLowerCase().startsWith(e.name.toLowerCase() + " ") ? Ct(i.slice(e.name.length + 1)) : i;
  };
  function _s(e) {
    const n = y[e], i = xt(e), c = e.split(".")[0], p = Number(n.state);
    if (n.state === "unavailable") return { text: "Unavailable" };
    if (c === "sensor" && Number.isFinite(p)) {
      if (i.device_class === "temperature") return { text: Wo(p) };
      const b = i.unit_of_measurement || "";
      return b === "%" ? { text: Math.round(p) + "%" } : { text: Ve(p, Number.isInteger(p) ? 0 : 1), unit: b };
    }
    if (c === "climate" && (i.current_temperature ?? i.temperature) != null) return { text: Wo(i.current_temperature ?? i.temperature) };
    if (c === "light") return { text: n.state !== "on" ? "Off" : zn(e) ? uo(n) + "%" : "On" };
    if (c === "cover") {
      const b = rn(e);
      return { text: b <= 0 ? "Closed" : b >= 100 ? "Open" : b + "%" };
    }
    return c === "humidifier" ? { text: n.state === "on" ? i.humidity + "%" : "Off" } : c === "media_player" ? { text: n.state === "playing" ? "Playing" : n.state === "paused" ? "Paused" : Ct(n.state) } : { text: Wt(e) };
  }
  const Es = (e, n, i) => {
    const c = i.find((v) => v.key === "temp"), p = i.find((v) => v.key === "hum"), b = xt(n), h = y[n].state === "off";
    return n.startsWith("climate.") ? [As(e, n), h ? "Off" : Ct(b.hvac_action || y[n].state) + (b.temperature != null ? " · " + Wo(b.temperature) : ""), p && p.value + " humidity"].filter(Boolean).join(" · ") : [!(c && c.id === n) && As(e, n), c && c.id !== n && c.value, p && p.id !== n && p.value + " humidity"].filter(Boolean).join(" · ");
  };
  function zo(e, n, i) {
    const c = i && _s(i), p = i ? Es(e, i, n) : "", b = (v) => {
      const x = jo(e, v.key);
      return x.length === 1 ? x[0] : "group:" + e.id + ":" + v.key;
    }, h = n.filter((v) => v.kind === "control").slice(0, 4).map((v) => '<div class="tfATile' + (v.on ? " on" : "") + '" data-tone="' + v.tone + '"' + (v.light ? ' data-light style="' + v.light + '"' : "") + ">" + Ls(v, "tfIcon", v.icon) + '<button class="tfName" type="button" data-more="' + oe(b(v)) + '" aria-label="' + oe(e.name + " " + v.label.toLowerCase() + ", " + v.value + ". Open") + '"><span class="activityRowName">' + oe(v.label) + '</span><span class="activityRowMeta">' + oe(v.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + ur(e, n) + '<div class="tfATitle">' + ql(e) + qr(n) + "</div></div>" + (i ? '<button class="tfABig" type="button" data-more="' + oe(i) + '" aria-label="' + oe(Re(i) + ", " + Wt(i) + ". More info") + '"><span class="tfABigMain' + (c.text.length > 7 ? " long" : "") + '">' + oe(c.text) + (c.unit ? '<span class="tfABigUnit">' + oe(c.unit) + "</span>" : "") + "</span>" + (p ? '<span class="tfABigSub">' + oe(p) + "</span>" : "") + "</button>" : "") + (h.length ? '<div class="tfATiles">' + h.join("") + "</div>" : "");
  }
  function Wl(e) {
    const n = e.id === be, i = dr(e), c = Gt(e), p = c && _s(c), b = [...i.filter((h) => h.kind === "control"), ...i.filter((h) => h.kind !== "control" && h.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (n ? " active" : "") + '" data-area="' + oe(e.id) + '" tabindex="0" aria-expanded="' + n + '" aria-label="' + oe(e.name) + '"><div class="panelExpanded"' + (n ? "" : " inert") + ">" + zo(e, i, c) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + ur(e, i, !0) + '<span class="tfACName">' + oe(e.name) + '</span></div><span class="tfACMain">' + (p ? oe(p.text + (p.unit ? " " + p.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + b.map((h) => '<span class="tfACTile"><span class="tfIcon' + (h.kind === "alert" ? " alert" : "") + '"' + (h.on && h.light ? ' data-light style="' + h.light + '"' : "") + ">" + h.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Ft = [];
  const Oa = (e) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + e + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + Ft.map(Wl).join("") + "</section></div>", Vo = () => [
    { key: "home", name: "Home", ids: it.homeVacuums },
    ...it.rooms.map((e) => ({ key: "room:" + e.id, name: e.name, room: e, ids: e.actions }))
  ], Di = (e, n, i) => e + " " + (e === 1 ? n : i), En = () => (j.favourites ?? se.favorite_entities ?? []).filter((e) => y[e]);
  function pr() {
    if (!Ze) {
      const n = Object.entries(lt).sort((c, p) => p[1] - c[1]).map(([c]) => c), i = it.rooms.flatMap((c) => c.actions);
      Ze = [.../* @__PURE__ */ new Set([...ve, ...n, ...i.filter((c) => ma(c).on), ...i])];
    }
    const e = En();
    return Ze.filter((n) => y[n] && y[n].state !== "unavailable" && !e.includes(n));
  }
  let Ri = !1;
  function qa() {
    if (!Ri || j.favSeeded || !it.rooms.length) return;
    const e = (i) => Object.keys(y).find((c) => er(c) && i(c)), n = [e((i) => i.startsWith("climate.")), e((i) => i.startsWith("cover.") && /curtain/.test(i)), e((i) => i.startsWith("valve.")), it.security.locks[0]];
    j = { ...j, favourites: [.../* @__PURE__ */ new Set([...j.favourites ?? se.favorite_entities ?? [], ...n.filter(Boolean)])], favSeeded: !0 }, qn();
  }
  const ga = () => j.suggest ?? !se.hide_suggested_entities;
  function jl() {
    const e = new Set(j.favHidden || []), n = En().filter((c) => !e.has(c)), i = ga() ? pr().filter((c) => !e.has(c) && Ur(c)) : [];
    return [...n, ...i].slice(0, yf);
  }
  const Xa = (e) => {
    const n = En().includes(e);
    return '<button class="tfStar" type="button" data-star="' + oe(e) + '" aria-pressed="' + n + '" aria-label="Favourite: ' + oe(Re(e)) + '">' + gf(n) + "</button>";
  };
  function hr(e, { area: n = !1, star: i = !1, plain: c = !1, say: p = null, alert: b = !1 } = {}) {
    var Ae, K, ye, E, re, Ie;
    const h = c && ((re = (Ae = o()) == null ? void 0 : Ae.devices) == null ? void 0 : re[(E = (ye = (K = o()) == null ? void 0 : K.entities) == null ? void 0 : ye[e]) == null ? void 0 : E.device_id]), v = h && (h.name_by_user || h.name) || Re(e), x = e.split(".")[0], D = !c && _l.includes(x) ? ma(e) : null, F = D ? D.on : ["on", "open", "playing"].includes((Ie = y[e]) == null ? void 0 : Ie.state), N = c ? null : D ? D.button : lf.includes(x) ? { act: ft(x, "toggle", e), label: "Turn " + Re(e) + (F ? " off" : " on") } : x === "scene" || x === "script" ? { act: ft(x, "turn_on", e), label: "Run " + Re(e) } : null, J = (p ?? Wt(e)) + (n && Et.get(e) ? " · " + Et.get(e) : ""), xe = (D == null ? void 0 : D.icon) || Pt(e);
    return '<div class="activityRow' + (N ? " tfPlug" : "") + (F ? " on" : "") + (i ? " tfPick" : "") + (b ? " alert" : "") + '" data-k="' + oe((n ? "fav:" : "row:") + e) + '" data-tone="' + (x === "light" ? "light" : (D == null ? void 0 : D.tone) || "blue") + '"' + on(e) + ">" + (N && !i ? '<button class="tfIcon" type="button" data-act="' + N.act + '" aria-label="' + oe(N.label) + '"' + Bt(e, xe) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Bt(e, xe) + "></div>") + '<button class="tfName" type="button" data-more="' + oe(e) + '" aria-label="' + oe(v + ", " + J + ". More info") + '"><span class="activityRowName">' + oe(v) + '</span><span class="activityRowMeta">' + oe(J) + "</span></button>" + (i ? Xa(e) : "") + "</div>";
  }
  const va = () => {
    var e;
    return y[(e = j.sources) == null ? void 0 : e.weather] ? j.sources.weather : y["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(y).find((n) => n.startsWith("weather."));
  };
  function Ds() {
    var i;
    const e = (c) => Object.keys(y).filter((p) => p.startsWith("binary_sensor.") && c.includes(xt(p).device_class));
    return ((i = he.alert_entities) != null && i.length ? he.alert_entities : [...e(["moisture", "smoke", "gas"]).map((c) => ({ entity: c, severity: "alert" })), ...e(Al).map((c) => ({ entity: c, severity: "warning" }))]).filter((c) => y[c.entity]).map((c) => ({ ...c, on: ["on", "open", "unlocked", "triggered", "problem"].includes(y[c.entity].state) }));
  }
  function zl() {
    const e = Object.keys(Mc), n = /* @__PURE__ */ new Set(), i = [];
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
  function Wr() {
    var ye;
    const e = ((ye = o()) == null ? void 0 : ye.entities) || {}, n = (E) => xt(E).device_class, i = Object.keys(y).filter((E) => E.startsWith("sensor.") && n(E) === "battery" || E.startsWith("binary_sensor.") && ["battery", "problem"].includes(n(E))), c = it.rooms.flatMap((E) => E.plants.map((re) => re.id));
    if (!i.length && !c.length) return null;
    const p = (E) => {
      var Ie;
      const re = (Ie = e[E]) == null ? void 0 : Ie.device_id;
      return !!re && Object.keys(y).some((ut) => {
        var cn;
        return ut.startsWith("binary_sensor.") && ((cn = e[ut]) == null ? void 0 : cn.device_id) === re && n(ut) === "battery_charging" && y[ut].state === "on";
      });
    }, b = (E) => E.startsWith("vacuum.") ? xt(E).battery_level <= 20 && y[E].state !== "docked" : E.startsWith("binary_sensor.") ? n(E) === "battery" && y[E].state === "on" : parseFloat(y[E].state) <= 20 && !p(E), h = [...i, ...it.vacuums].filter((E) => y[E] && b(E)), v = [...i.filter((E) => n(E) === "problem" && y[E].state === "on"), ...c.filter((E) => {
      var re;
      return ((re = y[E]) == null ? void 0 : re.state) === "problem";
    })], x = i.filter((E) => y[E].state === "unavailable"), D = [.../* @__PURE__ */ new Set([...h, ...v, ...x])], F = (E) => {
      const re = parseFloat(y[E].state);
      return n(E) === "battery" && Number.isFinite(re) ? re : 101;
    }, N = [...c, ...it.vacuums, ...[...i].sort((E, re) => F(E) - F(re))].filter((E) => y[E] && !D.includes(E)), J = /* @__PURE__ */ new Map();
    N.forEach((E) => {
      var Ie;
      const re = ((Ie = it.areaOf) == null ? void 0 : Ie.call(it, E)) || "";
      J.set(re, [...J.get(re) || [], E]);
    });
    const xe = (E) => {
      const re = it.rooms.findIndex((Ie) => Ie.id === E);
      return E === "" ? 1 / 0 : re < 0 ? it.rooms.length : re;
    }, Ae = [...J.keys()].sort((E, re) => xe(E) - xe(re)), K = (E) => {
      var re, Ie, ut, cn;
      return ((re = it.rooms.find((jt) => jt.id === E)) == null ? void 0 : re.name) || ((cn = (ut = (Ie = o()) == null ? void 0 : Ie.areas) == null ? void 0 : ut[E]) == null ? void 0 : cn.name) || E;
    };
    return {
      value: [h.length && Di(h.length, "low battery", "low batteries"), v.length && Di(v.length, "problem", "problems"), x.length && Di(x.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: D, alert: !0 }, ...Ae.map((E) => ({ name: E ? K(E) : Ae.length > 1 ? "Other devices" : "Devices", ids: J.get(E) }))].filter((E) => E.ids.length)
    };
  }
  function Ni() {
    var pa;
    const e = it.rooms, n = it.security, i = ($e, Jt) => $e.actions.filter((hl) => Jt.test(hl)), c = ($e) => e.map((Jt) => ({ name: Jt.name, ids: $e(Jt) })).filter((Jt) => Jt.ids.length), p = e.flatMap(($e) => $e.lights), b = p.filter(($e) => {
      var Jt;
      return ((Jt = y[$e]) == null ? void 0 : Jt.state) === "on";
    }).length, h = e.map(($e) => $e.readings.find((Jt) => xt(Jt).device_class === "temperature")).filter(Boolean).map(($e) => Number(y[$e].state)).filter(Number.isFinite), [v, x] = [Ve(Math.min(...h)), Ve(Math.max(...h))], D = e.flatMap(($e) => i($e, /^media_player\./)), F = D.filter(($e) => {
      var Jt;
      return ((Jt = y[$e]) == null ? void 0 : Jt.state) === "playing";
    }).length, N = Ds(), J = N.filter(($e) => $e.severity === "warning" && $e.on).length, xe = n.locks.filter(($e) => {
      var Jt;
      return ["unlocked", "jammed", "open"].includes((Jt = y[$e]) == null ? void 0 : Jt.state);
    }).length, Ae = n.alarms.filter(($e) => {
      var Jt;
      return ((Jt = y[$e]) == null ? void 0 : Jt.state) === "disarmed";
    }).length, K = J ? Di(J, "warning", "warnings") : null, ye = xe ? xe + " unlocked" : Ae ? Ae + " disarmed" : K ? null : "All secure", E = Wr(), re = e.flatMap(($e) => $e.solar), Ie = re.find(($e) => $e.endsWith("_power")), ut = {
      light: p.length && { value: b ? b + " on" : "All off", groups: c(($e) => $e.lights) },
      climate: h.length && { value: v === x ? v + "°" : v + " - " + x + "°", groups: c(($e) => [...$e.readings.filter((Jt) => ["temperature", "humidity"].includes(xt(Jt).device_class)), ...i($e, /^(climate|humidifier)\./)]) },
      security: (n.alarms.length || n.locks.length) && { value: [K, ye].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...n.alarms, ...n.locks] }, { name: "Doors and windows", ids: n.openings }].filter(($e) => $e.ids.length) },
      media_players: D.length && { value: F ? F + " playing" : "No media playing", groups: c(($e) => i($e, /^media_player\./)) },
      maintenance: E,
      energy: it.grid && { value: Po(Number(((pa = y[Ie]) == null ? void 0 : pa.state) || 0) * 1e3 + Number(y[it.grid].state)) + " now", groups: [{ name: "Energy", ids: [...re, it.grid] }] }
    }, cn = [], jt = N.filter(($e) => $e.severity !== "warning" && $e.on);
    return jt.length && cn.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Di(jt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: jt.map(($e) => $e.entity) }] }), zl().forEach(($e) => {
      $e.type !== "summary" ? cn.push({ key: "path:" + $e.path, name: $e.label || $e.path, icon: $e.icon || "mdi:link-variant", colour: "", value: "" }) : !$e.hidden && ut[$e.key] && !(j.hiddenSums || []).includes($e.key) && cn.push({ key: $e.key, ...Mc[$e.key], ...ut[$e.key] });
    }), cn;
  }
  const Rs = (e) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + oe(e.key) + '" data-k="sum:' + oe(e.key) + '" aria-label="' + oe(e.name + (e.value ? ", " + e.value : "")) + '"' + (e.key === "alerts" ? ' style="--sum:' + e.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + Bt(e.id || "", e.icon, e.name) + '></div><div><div class="activityRowName">' + oe(e.name) + "</div>" + (e.value ? '<div class="activityRowMeta">' + oe(e.value) + "</div>" : "") + "</div></div>";
  function Ns(e) {
    const n = En();
    j = { ...j, favourites: n.includes(e) ? n.filter((i) => i !== e) : [...n, e], favHidden: (j.favHidden || []).filter((i) => i !== e) }, qn(), hn();
  }
  function fr(e) {
    document.querySelector("home-assistant") && (De.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function jr(e, n) {
    if (e.startsWith("path:")) {
      fr(e.slice(5));
      return;
    }
    za("summary:" + e, n);
  }
  async function Bi() {
    const e = (h) => Promise.resolve().then(() => R(h)).catch(() => null), [n, i, c, p] = await Promise.all([
      e({ type: "frontend/get_user_data", key: Od }),
      e({ type: "frontend/get_system_data", key: "home" }),
      e({ type: "frontend/get_system_data", key: "security" }),
      e({ type: "usage_prediction/common_control" })
    ]), b = (n == null ? void 0 : n.value) || {};
    j = { favourites: b.favourites ?? null, sources: b.sources, hiddenSums: b.hiddenSums, dash: b.dash, named: b.named, favHidden: b.favHidden, suggest: b.suggest, favSeeded: b.favSeeded }, se = (i == null ? void 0 : i.value) || {}, he = (c == null ? void 0 : c.value) || {}, ve = Array.isArray(p == null ? void 0 : p.entities) ? p.entities : [], Ze = null, Object.keys(y).length && hn(), Pi(), Ri = !0, qa();
  }
  const Bs = "HomeCore";
  async function Pi() {
    var c, p, b;
    const e = location.pathname.split("/")[1], n = j.named || [];
    if (!((p = (c = o()) == null ? void 0 : c.user) != null && p.is_admin) || !e || n.includes(e)) return;
    const i = () => {
      j = { ...j, named: [...n, e] }, qn();
    };
    try {
      const h = (b = await R({ type: "lovelace/dashboards/list" })) == null ? void 0 : b.find((D) => D.url_path === e);
      if (!h || h.mode === "yaml") return;
      if (h.title === Bs) {
        i();
        return;
      }
      const v = await R({ type: "lovelace/config", url_path: e }), x = ((v == null ? void 0 : v.views) || []).flatMap((D) => [...D.cards || [], ...(D.sections || []).flatMap((F) => F.cards || [])]);
      if (!x.length || !x.every((D) => (D == null ? void 0 : D.type) === "custom:move-assistant-card" && D.layout === "test-focus")) return;
      await R({ type: "lovelace/dashboards/update", dashboard_id: h.id, title: Bs }), i();
    } catch {
    }
  }
  let ba = null, Ii = 0, Go = !1;
  const Uo = (e) => {
    const n = e.split(".")[0], i = xt(e).device_class;
    return wf.includes(n) && (n !== "binary_sensor" || Al.includes(i) || !!Yd[i]);
  }, Yo = (e) => e.startsWith("binary_sensor.") ? Yd[xt(e).device_class] : null;
  async function Hi() {
    var e;
    if (!(Go || Date.now() - Ii < 30 * 1e3)) {
      Go = !0, Ii = Date.now();
      try {
        const n = Object.keys(((e = o()) == null ? void 0 : e.states) || {}).filter(Uo), i = n.length ? await R({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: n }) : null;
        ba = Array.isArray(i) ? i.filter((c) => c.entity_id && c.state != null && c.when) : null;
      } catch {
        ba = null;
      }
      Go = !1, hn();
    }
  }
  function zr() {
    const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = (p) => {
      if (!y[p.entity_id] || !Uo(p.entity_id) || !Ur(p.entity_id) || ["unavailable", "unknown"].includes(p.state)) return;
      if (Yo(p.entity_id)) {
        const h = n.get(p.entity_id);
        p.state === "on" ? (!h || p.when > h.when + 1) && n.set(p.entity_id, { ...p, alarm: !0, cleared: null }) : h && !h.cleared && p.when > h.when && (h.cleared = p.when);
        return;
      }
      const b = e.get(p.entity_id);
      (!b || p.when > b.when + 1) && e.set(p.entity_id, p);
    };
    [...ba || []].sort((p, b) => p.when - b.when).forEach(i);
    const c = ba ? Ii / 1e3 - 5 : 0;
    return Object.keys(y).forEach((p) => {
      var v;
      const b = y[p], h = b.last_changed ? Date.parse(b.last_changed) / 1e3 : 0;
      h > c && i({ entity_id: p, state: b.state, when: h, context_user_id: (v = b.context) == null ? void 0 : v.user_id });
    }), [...e.values(), ...n.values()].sort((p, b) => b.when - p.when).slice(0, xf);
  }
  function Aa(e) {
    var c;
    const n = e.context_user_id && Object.keys(y).find((p) => p.startsWith("person.") && xt(p).user_id === e.context_user_id);
    if (n) return Re(n);
    const i = (c = o()) == null ? void 0 : c.user;
    return i && e.context_user_id === i.id ? i.name : ["automation", "script"].includes(e.context_domain) || e.context_event_type === "automation_triggered" ? e.context_name || "Home Assistant" : "";
  }
  function Zo(e) {
    const n = e.entity_id.split(".")[0], i = String(e.state);
    return n === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[i] || Ct(i).toLowerCase() : n === "cover" || n === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[i] || Ct(i).toLowerCase() : n === "binary_sensor" ? i === "on" ? "opened" : "closed" : n === "climate" ? i === "off" ? "turned off" : "set to " + Ct(i).toLowerCase() : n === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[i] || Ct(i).toLowerCase() : n === "alarm_control_panel" ? (Ud[i] || Ct(i)).toLowerCase() : n === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[i] || Ct(i).toLowerCase() : i === "on" ? "turned on" : i === "off" ? "turned off" : Ct(i).toLowerCase();
  }
  function Vl(e) {
    const n = e.entity_id, i = e.alarm && Yo(n), c = Re(n) + " " + (i ? i[0] : Zo(e)), p = i ? Vn(e.when * 1e3) + (e.cleared ? " · " + i[1] + " since " + Vn(e.cleared * 1e3) : "") : [Aa(e), Vn(e.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (i ? " alert" : "") + '"><div class="tfIcon' + (i ? " alert" : "") + '" aria-hidden="true"' + Bt(n, Pt(n)) + '></div><button class="tfName" type="button" data-more="' + oe(n) + '" data-at="' + Math.round(e.when * 1e3) + '" aria-label="' + oe(c + ", " + p + ". More info") + '"><span class="activityRowName">' + oe(c) + '</span><span class="activityRowMeta">' + oe(p) + "</span></button></div>";
  }
  let Fi = null, vo = 0;
  const Oi = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function mr() {
    var n;
    if (Date.now() - vo < 5 * 60 * 1e3) return;
    vo = Date.now();
    const e = [];
    try {
      const i = ((n = await R({ type: "energy/get_prefs" })) == null ? void 0 : n.energy_sources) || [], c = (p) => i.filter((b) => b.type === p).flatMap((b) => p === "grid" ? (b.flow_from || []).map((h) => h.stat_energy_from) : [b.stat_energy_from]).filter(Boolean);
      for (const [p, b, h] of [["electricity", "Electricity", c("grid")], ["solar", "Solar", c("solar")], ["gas", "Gas", c("gas")], ["water", "Water", c("water")]]) {
        if (!h.length) continue;
        const v = await Promise.all(h.map((x) => Promise.resolve(R({ type: "recorder/statistic_during_period", statistic_id: x, calendar: { period: "day" }, types: ["change"] })).then((D) => Number(D == null ? void 0 : D.change) || 0, () => 0)));
        e.push({ key: p, name: b, id: h[0], ids: h, value: v.reduce((x, D) => x + D, 0), unit: xt(h[0]).unit_of_measurement || (p === "gas" || p === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Fi = e, hn();
  }
  let Ja = null, Ps = [];
  function gr() {
    var b;
    const e = Ps = Fi != null && Fi.length ? Fi : Oi.map(([h, v, x, D]) => {
      const F = "sensor.made_up_energy_" + h;
      return y[F] = { entity_id: F, state: String(x), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: v + " today", unit_of_measurement: D, state_class: "total_increasing" } }, { key: h, name: v, id: F, value: x, unit: D };
    });
    z.clear(), e.some((h) => h.id === Ja) || (Ja = e[0].id);
    const n = e.map((h) => {
      const v = Number(h.value).toLocaleString(void 0, { maximumFractionDigits: h.value < 10 ? 2 : 1 }) + " " + h.unit, x = kf[h.key], D = h.id === Ja;
      return z.set(h.id, { name: h.name, text: v, icon: x }), '<div class="activityRow tap' + (D ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + oe(h.id) + '" aria-pressed="' + D + '" aria-label="' + oe(h.name + ", " + v) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Bt("", x, h.name) + '></div><div><div class="activityRowName">' + oe(h.name) + '</div><div class="activityRowMeta">' + oe(v) + "</div></div></div>";
    }), i = e.find((h) => h.id === Ja), c = (((b = $t().opts.energy) == null ? void 0 : b.graph) || "above") === "below", p = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + oe(i.id) + '" role="img" aria-label="' + oe(i.name) + ', last 24 hours"></svg></div>';
    return $("dash:energy", 0, "Energy today", n, p, Ni().some((h) => h.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (c ? "" : " graphAbove"));
  }
  function vr(e) {
    const n = S.querySelector(".tfDash-energy"), i = n == null ? void 0 : n.querySelector(".tfDashGraph svg");
    !i || e === Ja || (Ja = e, n.querySelectorAll("[data-energy-pick]").forEach((c) => {
      const p = c.dataset.energyPick === e;
      c.classList.toggle("picked", p), c.setAttribute("aria-pressed", String(p));
    }), i.dataset.graph = e, i.dataset.drawn = "", Sn.set("dash:energy", gr()), pi(!0));
  }
  const qi = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, Vr = /* @__PURE__ */ new Map();
  async function Gl(e) {
    const n = /* @__PURE__ */ new Date(), i = new Date(n).setHours(0, 0, 0, 0), c = n.getHours(), p = n.getMinutes() / 60, b = Array.from({ length: 24 }, (v, x) => x <= c ? 0 : null);
    if (!e.ids) {
      const v = qi[e.key] || qi.electricity, x = v.map((F, N) => N < c ? F : N === c ? F * p : 0), D = x.reduce((F, N) => F + N, 0) || 1;
      return b.map((F, N) => F == null ? null : e.value * x[N] / D);
    }
    const h = Vr.get(e.id);
    if (h && h.day === i && Date.now() - h.at < 5 * 60 * 1e3) return h.hours;
    try {
      const v = await R({ type: "recorder/statistics_during_period", start_time: new Date(i).toISOString(), end_time: n.toISOString(), statistic_ids: e.ids, period: "hour", types: ["change"] });
      e.ids.forEach((F) => ((v == null ? void 0 : v[F]) || []).forEach((N) => {
        const J = typeof N.start == "number" ? N.start : Date.parse(N.start), xe = new Date(J).getHours();
        J >= i && xe < c && (b[xe] += Number(N.change) || 0);
      }));
      const x = new Date(n).setMinutes(0, 0, 0), D = await Promise.all(e.ids.map((F) => Promise.resolve(R({ type: "recorder/statistic_during_period", statistic_id: F, fixed_period: { start_time: new Date(x).toISOString(), end_time: n.toISOString() }, types: ["change"] })).then((N) => Number(N == null ? void 0 : N.change) || 0, () => 0)));
      b[c] = D.reduce((F, N) => F + N, 0);
    } catch {
    }
    return Vr.set(e.id, { at: Date.now(), day: i, hours: b }), b;
  }
  async function Dn(e, n) {
    const i = await Gl(n);
    if (!e.isConnected) return;
    const c = Math.max(120, e.clientWidth || 260), p = Math.max(60, e.clientHeight || 130), b = 18, h = p - 18, v = c / 24, x = v * 0.72, D = (/* @__PURE__ */ new Date()).getHours(), F = i.map((ye) => ye ?? 0), N = Math.max(0, ...F), J = (ye) => h - (N > 0 ? ye / N * (h - b) : 0), xe = (ye) => ye.toLocaleString(void 0, { maximumFractionDigits: ye < 10 ? 2 : 1 }) + " " + n.unit, Ae = (ye) => String(ye).padStart(2, "0") + ":00", K = N > 0 ? F.indexOf(N) : -1;
    e.setAttribute("viewBox", "0 0 " + c + " " + p), e.setAttribute("aria-label", n.name + " today by the hour: " + xe(n.value) + (K >= 0 ? ", most " + xe(N) + " at " + Ae(K) : "")), e.innerHTML = [b, (b + h) / 2, h].map((ye) => '<line x1="0" x2="' + c + '" y1="' + ye + '" y2="' + ye + '" stroke="var(--line)" stroke-width="1"/>').join("") + i.map((ye, E) => ye > 0 ? '<rect x="' + (E * v + (v - x) / 2).toFixed(1) + '" y="' + J(ye).toFixed(1) + '" width="' + x.toFixed(1) + '" height="' + (h - J(ye)).toFixed(1) + '" rx="2" fill="' + (E === D ? "var(--primary)" : "var(--text)") + '"' + (E === D ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((ye) => '<text x="' + (ye * v).toFixed(1) + '" y="' + (p - 3) + '">' + String(ye).padStart(2, "0") + "</text>").join("") + (K >= 0 ? '<text x="0" y="11">Most: ' + oe(xe(N)) + " at " + Ae(K) + "</text>" : "");
  }
  function Wi(e) {
    var n;
    (n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches || e.querySelectorAll("rect").forEach((i, c) => i.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: c * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Ko(e) {
    var p;
    if ((p = window.matchMedia) != null && p.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [n, i] = e.querySelectorAll("path");
    if (!(i != null && i.getTotalLength)) return;
    const c = i.getTotalLength();
    i.animate([{ strokeDasharray: c, strokeDashoffset: c }, { strokeDasharray: c, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), n == null || n.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let br = null, Gr = 0;
  const Ur = (e) => !e.startsWith("light.") || Mf.includes((Et.get(e) || "").toLowerCase()), Yr = () => Math.max(2, da((S == null ? void 0 : S.clientWidth) || 0).n), wr = (e) => {
    const n = ma(e), i = n.sections.findIndex(Boolean);
    return i < 0 ? [] : [n.parts[i]];
  };
  function Is(e) {
    const n = $t().tiles;
    if (n) return n.filter((c) => y[c]);
    if (!br) {
      const c = (p) => {
        var b;
        return (((b = y[p]) == null ? void 0 : b.state) === "on" ? 1e6 : 0) + (lt[p] || 0);
      };
      br = {
        lights: it.rooms.flatMap((p) => p.lights).filter((p) => {
          var b;
          return Ur(p) && ((b = y[p]) == null ? void 0 : b.state) !== "unavailable";
        }).sort((p, b) => c(b) - c(p) || Re(p).localeCompare(Re(b))),
        climates: it.rooms.flatMap((p) => p.actions.filter((b) => b.startsWith("climate.")))
      };
    }
    const i = br.climates.filter((c) => y[c]).slice(0, e > 3 ? 2 : 1);
    return [...br.lights.filter((c) => y[c]).slice(0, Math.max(0, e - i.length)), ...i];
  }
  const $o = (e, n, i, c) => (p) => '<section class="card tfCard tfDashCard ' + e + '" data-tf data-k="' + n + '" aria-label="' + i + '">' + (c ? '<div class="activityHeader">' + (n === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + i + "</button>" : '<div class="activityTitle">' + i + "</div>") + "</div>" : "") + '<div class="activityRows">' + p + "</div></section>";
  function Zr(e, n) {
    var b, h;
    e.dash = !0, e.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + oe(((h = (b = o()) == null ? void 0 : b.config) == null ? void 0 : h.location_name) || "Home") + "</h1>" }), n.length && e.push({ key: "sums", wrap: (v) => '<div class="tfDashBarRow" data-tf data-k="sums">' + $o("tfDash-bar", "sums-bar", "Summaries", !1)(v).replace(" data-tf", "") + "</div>", tiles: n.map((v) => ({ key: "sum:" + v.key, html: Rs(v) })) }), Ft.length && e.push({ key: "areas", html: Oa(0) });
    const i = jl();
    i.length && e.push({ key: "favs", wrap: $o("tfDash-favs", "favs", "Favourites", !0), tiles: i.map((v) => ({ key: "fav:" + v, html: hr(v, { area: !0 }) })) });
    const c = zr();
    e.push({ key: "dash:act", html: $("dash:act", 0, "Activity", c.length ? c.map(Vl) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), e.push({ key: "dash:energy", html: gr() });
    const p = Yr();
    return Gr = p, Is(p >= 3 ? p : p * 2).forEach((v) => e.push({
      key: "dash:tile:" + v,
      wrap: (x) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + oe(v) + '">' + x + "</div>",
      tiles: [{ key: v, html: qt(v, !1, wr(v)) }]
    })), Hi(), mr(), e;
  }
  const sa = 252, Zt = 16, Kr = 200, Ul = Math.round(sa * 1.25), Xo = 60, Qa = Xo + Zt, Jo = 5, bo = 3, Yl = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average" }, Hs = ["wx", "favs", "act", "energy", "avg"], yr = { wx: Jo, areas: Jo, favs: Jo, act: Jo, energy: 4, avg: 4 }, ji = 3, Qo = 94, la = (e) => {
    var n;
    return !!((n = $t().opts[e]) != null && n.tall);
  }, Rn = (e) => Yl[e] || Re(e), ei = 409, zi = 128;
  let un = !1, Lt = null, wa = null, $r = !1, _a = /* @__PURE__ */ new Map(), ya = 0, Gn = 0;
  const ca = ["title", "sums"], da = (e) => {
    const n = Math.max(1, Math.floor((e + Zt) / (Kr + Zt)));
    return { n, w: Math.max(1, Math.min(Ul, Math.floor((e - (n - 1) * Zt) / n))) };
  }, $t = () => ({ cells: {}, spans: {}, hidden: [], opts: {}, ...j.dash || {} });
  function Vi(e) {
    j = { ...j, dash: e }, qn();
  }
  function ti() {
    const e = (n) => S.querySelector(n);
    return [
      ["title", e(".tfDashTitle"), "full"],
      ["sums", e(".tfDashBarRow"), "full"],
      ["wx", vn.wx, 2],
      ["areas", e(".tfAreas"), "areas"],
      ["favs", e(".tfDash-favs"), 2],
      ["act", e(".tfDash-act"), 2],
      ["energy", e(".tfDash-energy"), 2],
      ["avg", vn.avg, 2],
      ...[...S.querySelectorAll(".tfDashTiles > [data-k]")].map((n) => [n.dataset.k, n, 1, !0])
    ].filter(([, n]) => n == null ? void 0 : n.isConnected).map(([n, i, c, p = !1]) => ({ key: n, el: i, span: c, tile: p }));
  }
  const Fs = (e, n, i) => e.span === "full" ? n : e.span === "areas" ? Math.min(n, Math.ceil((ei + Math.max(0, Ft.length - 1) * (zi + Zt) + Zt) / (i + Zt))) : Math.min(n, $t().spans[e.key] ?? e.span), Gi = (e) => yr[e.key] ?? (e.el.classList.contains("tfDac") ? la(e.key) ? Jo : ji : null);
  function ni(e, n, i = null) {
    const c = $t().cells, p = e.every((v) => !c[v.key] || c[v.key].col + v.cols <= n), b = (v) => c[v.key] || { row: 1e9, col: 0 }, h = () => {
      const v = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Map(), D = (K, ye, E, re) => {
        for (let Ie = ye; Ie < ye + re; Ie++) for (let ut = K; ut < K + E; ut++) if (v.has(ut + "," + Ie)) return !1;
        return !0;
      }, F = (K, ye, E) => {
        for (let re = E; re < E + K.rows; re++) for (let Ie = ye; Ie < ye + K.cols; Ie++) v.add(Ie + "," + re);
        x.set(K.key, { col: ye, row: E, cols: K.cols, rows: K.rows });
      }, N = (K, ye, E) => {
        for (ye = Math.max(0, Math.min(n - K.cols, ye)), E = Math.max(0, E); !D(ye, E, K.cols, K.rows); ) E++;
        F(K, ye, E);
      }, J = (K) => {
        for (let ye = 0; ; ye++) for (let E = 0; E <= n - K.cols; E++) if (D(E, ye, K.cols, K.rows)) {
          F(K, E, ye);
          return;
        }
      };
      i && N(i, Lt.col, Lt.row);
      const xe = e.filter((K) => K !== i), Ae = (K, ye) => b(K).row - b(ye).row || b(K).col - b(ye).col;
      return p ? (xe.filter((K) => c[K.key]).sort(Ae).forEach((K) => N(K, c[K.key].col, c[K.key].row)), xe.filter((K) => !c[K.key]).forEach(J), x) : ([...xe].sort(Ae).forEach(J), x);
    };
    for (let v = 0; ; v++) {
      const x = h();
      if (v === 3) return x;
      const D = e.filter((N) => N.tile && !la(N.key)).map((N) => ({ it: N, p: x.get(N.key) })).sort((N, J) => N.p.row - J.p.row || N.p.col - J.p.col);
      let F = !1;
      for (let N = 0, J; N < D.length; N = J) {
        for (J = N + 1; J < D.length && D[J].p.row === D[N].p.row && D[J].p.col === D[J - 1].p.col + 1; J++) ;
        const xe = D.slice(N, J), Ae = Math.max(...xe.map((K) => K.it.rows));
        xe.forEach((K) => {
          K.it.rows < Ae && (K.it.rows = Ae, F = !0);
        });
      }
      if (!F) return x;
    }
  }
  function Ea() {
    const e = $t(), n = new Set(e.hidden), i = ti().filter((h) => !ca.includes(h.key));
    let c = _a;
    if (!c.size) {
      const h = e.pegs || 4, v = i.filter((x) => !n.has(x.key));
      v.forEach((x) => {
        x.cols = Fs(x, h, sa), x.rows = Gi(x) ?? 2;
      }), c = ni(v, h);
    }
    const p = (h) => !n.has(h.key) && c.get(h.key) || { row: 1e9, col: 0 };
    i.sort((h, v) => p(h).row - p(v).row || p(h).col - p(v).col);
    const b = (e.phone || []).map((h) => i.find((v) => v.key === h && !n.has(h))).filter(Boolean);
    return [...b, ...i.filter((h) => !b.includes(h))];
  }
  const Xr = () => {
    const e = Ea();
    e.forEach((n, i) => n.el.style.setProperty("--o", String(3 + i))), xr([...ti().filter((n) => ca.includes(n.key)), ...e].map((n) => n.el));
  };
  function xr(e) {
    if (Lt) return;
    const n = a.activeElement;
    let i = null;
    for (const c of new Set(e.map((p) => {
      for (; p && p.parentElement !== S; ) p = p.parentElement;
      return p;
    }).filter(Boolean))) {
      const p = i ? i.nextSibling : S.querySelector(":scope > [data-tf]");
      if (c !== p)
        try {
          S.moveBefore ? S.moveBefore(c, p) : S.insertBefore(c, p);
        } catch {
          S.insertBefore(c, p);
        }
      i = c;
    }
    n && n !== a.activeElement && n.isConnected && n.focus({ preventScroll: !0 });
  }
  const wo = (e, n) => Vi({ ...e, cells: n, pegs: da(S.clientWidth).n });
  function pn() {
    var ye;
    if (!w || !S) return;
    const e = S.clientWidth, { n, w: i } = da(e), c = f.classList.contains("tfDash") && e >= 2 * sa + Zt;
    f.classList.toggle("tfBoard", c), f.classList.toggle("tfEditing", c && un);
    const p = d("dashEditNav");
    p && (p.hidden = !c, p.classList.toggle("active", un), p.setAttribute("aria-pressed", String(un)), p.setAttribute("aria-label", un ? "Done editing" : "Edit the dashboard"), p.title = un ? "Done" : "Edit", p.innerHTML = un ? mf : Gd);
    const b = c ? ti() : [];
    if (!c) {
      S.style.height = "", S.querySelectorAll(".tfBoardItem").forEach((E) => {
        E.classList.remove("tfBoardItem", "tfBoardHidden"), E.style.left = E.style.top = E.style.width = E.style.height = "";
      }), (ye = S.querySelector(".tfDash-act > .activityRows")) == null || ye.style.removeProperty("max-height"), qs(!1), f.classList.contains("tfDash") && Xr(), Ln();
      return;
    }
    S.style.setProperty("--peg-w", i + "px");
    const h = new Set($t().hidden), v = i + Zt;
    Lt != null && Lt.fromTray && h.delete(Lt.key), b.forEach((E) => E.el.classList.toggle("tfBoardHidden", h.has(E.key)));
    const x = b.filter((E) => !h.has(E.key) && getComputedStyle(E.el).display !== "none");
    let D = 0;
    x.filter((E) => ca.includes(E.key)).forEach((E) => {
      E.el.classList.add("tfBoardItem"), Object.assign(E.el.style, { width: e + "px", height: "", left: "0px", top: D + "px" });
      const re = E.key === "sums" && E.el.querySelector(".tfDash-bar"), Ie = re ? re.querySelectorAll(".activityRow").length : 0;
      re && (re.style.maxWidth = "none");
      for (let ut = 1; re && ut <= Ie && (re.style.setProperty("--bar-cols", String(Math.ceil(Ie / ut))), !(re.offsetWidth <= e)); ut++)
        ;
      re && (re.style.maxWidth = ""), D += E.el.offsetHeight + Zt;
    }), Gn = D;
    const F = x.filter((E) => !ca.includes(E.key));
    F.forEach((E) => {
      E.cols = Fs(E, n, i), E.el.classList.add("tfBoardItem"), E.el.style.width = (E.cols === n ? e : E.cols * i + (E.cols - 1) * Zt) + "px", E.el.style.height = "", E.rows = Gi(E) ?? Math.max(1, Math.ceil((E.el.offsetHeight + Zt - 6) / Qa));
    });
    const N = Lt && F.find((E) => E.key === Lt.key), J = ni(F, n, N);
    J.forEach((E) => Object.assign(E, { x: E.cols === n ? 0 : E.col * v, y: Gn + E.row * Qa, w: E.cols === n ? e : E.cols * i + (E.cols - 1) * Zt, h: E.rows * Qa - Zt })), F.forEach((E) => {
      const re = J.get(E.key);
      E.el.style.height = re.h + "px", E.el.classList.contains("tfDac") && E.el.style.setProperty("--tf-dac-pad", re.h - Qo + "px"), !(E === N && !Lt.fromTray) && (E.el.style.left = re.x + "px", E.el.style.top = re.y + "px");
    }), _a = J, xr([...x.filter((E) => ca.includes(E.key)), ...F.slice().sort((E, re) => J.get(E.key).row - J.get(re.key).row || J.get(E.key).col - J.get(re.key).col)].map((E) => E.el));
    const xe = J.get("act"), Ae = xe && S.querySelector(".tfDash-act > .activityRows");
    Ae && (Ae.style.maxHeight = Math.max(Xo, Math.floor((xe.h - Ae.offsetTop - 10) / Xo) * Xo) + "px"), ya = Math.max(0, ...[...J.values()].map((E) => E.row + E.rows));
    let K = Gn + ya * Qa - Zt;
    K = qs(un, F, J, K, n, i), S.style.height = K + "px", requestAnimationFrame(() => f.classList.add("tfBoardReady")), b.forEach((E) => Os.observe(E.el)), pi(), Ln();
  }
  const ai = () => {
    $r || ($r = !0, requestAnimationFrame(() => {
      $r = !1, pn();
    }));
  }, Os = new ResizeObserver(() => {
    Lt || ai();
  });
  function qs(e, n = [], i = /* @__PURE__ */ new Map(), c = 0, p = 1, b = sa) {
    S.querySelectorAll(".tfEditChips").forEach((F) => {
      (!e || !F.closest(".tfBoardItem")) && F.remove();
    }), S.querySelectorAll(".tfFavHides").forEach((F) => F.remove()), S.querySelectorAll(".tfBoardItem").forEach((F) => [...F.children].forEach((N) => {
      N.classList.contains("tfEditChips") || N.toggleAttribute("inert", e);
    }));
    let h = S.querySelector(".tfBoardCells"), v = S.querySelector(".tfBoardLand");
    if (!e)
      return h == null || h.remove(), v == null || v.remove(), an(), c;
    const x = ya + bo;
    if (h || (h = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), h.setAttribute("aria-hidden", "true"), S.prepend(h)), h.style.top = Gn + "px", h.dataset.size !== p + "x" + x + "x" + b && (h.dataset.size = p + "x" + x + "x" + b, h.style.gridTemplateColumns = "repeat(" + p + "," + b + "px)", h.innerHTML = "<i></i>".repeat(p * x)), c = Math.max(c, Gn + x * Qa - Zt), n.forEach((F) => {
      const N = F.el;
      !N || N.querySelector(":scope > .tfEditChips") || N.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Sc + '</span><button class="tfEditChip" type="button" data-board-more="' + oe(F.key) + '" aria-label="' + oe(Rn(F.key)) + ' options" aria-haspopup="menu">' + hf + "</button></div>");
    }), Lt && i.has(Lt.key)) {
      v || (v = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), S.appendChild(v));
      const F = i.get(Lt.key);
      Object.assign(v.style, { left: F.x + "px", top: F.y + "px", width: F.w + "px", height: F.h + "px" });
    } else v == null || v.remove();
    const D = S.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (D) {
      const F = D.getBoundingClientRect();
      D.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...D.querySelectorAll('[data-k^="fav:"]')].map((N) => {
        const J = N.getBoundingClientRect(), xe = N.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + oe(xe) + '" aria-label="Hide ' + oe(Re(xe)) + ' from the dashboard" style="left:' + Math.round(J.right - F.left - 42) + "px;top:" + Math.round(J.top - F.top + (J.height - 32) / 2) + 'px">' + jd + "</button>";
      }).join("") + "</div>");
    }
    return c;
  }
  let Jr = "";
  function oi(e) {
    un = e, e || (Lt = null, At = In = !1, an()), pn(), e ? Jr = JSON.stringify(j) : Jr && JSON.stringify(j) !== Jr && xa("Changes saved");
  }
  function Un(e, n) {
    var J, xe;
    an();
    const i = _a.get(e), { n: c } = da(S.clientWidth), p = $t(), b = p.spans[e] ?? 2;
    if (!i) return;
    const h = i.cols >= c, v = (Ae, K, ye) => '<button type="button" role="menuitem" data-board-act="' + Ae + '"' + (ye ? " disabled" : "") + ">" + K + "</button>", x = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    x.setAttribute("role", "menu"), x.setAttribute("aria-label", Rn(e) + " options");
    const D = S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]'), F = D == null ? void 0 : D.classList.contains("tfDac");
    x.innerHTML = (Hs.includes(e) ? v("size", b === 1 ? "Card size" : "Tile size") : "") + (F ? v("tall", la(e) ? "Make shorter" : "Make taller") : "") + (e === "energy" ? v("graph", (((J = p.opts.energy) == null ? void 0 : J.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + v("left", "Move left", h || i.col === 0) + v("right", "Move right", h || i.col + i.cols >= c) + v("up", "Move up", i.row <= 0) + v("down", "Move down") + (D ? v("remove", "Remove") : v("hide", "Hide")), S.appendChild(x);
    const N = Math.min(i.x + i.w - x.offsetWidth, S.clientWidth - x.offsetWidth);
    Object.assign(x.style, { left: Math.max(0, N) + "px", top: i.y + 28 + "px" }), wa = { key: e, menu: x, opener: n }, (xe = x.querySelector("button:not([disabled])")) == null || xe.focus();
  }
  function an(e) {
    if (!wa) return;
    const { menu: n, opener: i } = wa;
    wa = null, n.remove(), e && (i == null || i.focus());
  }
  const yo = () => Object.fromEntries([..._a].map(([e, n]) => [e, { col: n.col, row: n.row }]));
  function Zl(e, n) {
    var h, v;
    if (n === "remove") {
      an(), js(e);
      return;
    }
    const i = j, c = $t(), p = yo(), b = p[e] || { col: 0, row: 0 };
    n === "size" && (c.spans = { ...c.spans, [e]: (c.spans[e] ?? 2) === 1 ? 2 : 1 }), n === "tall" && (c.opts = { ...c.opts, [e]: { ...c.opts[e] || {}, tall: !la(e) } }), n === "graph" && (c.opts = { ...c.opts, energy: { ...c.opts.energy || {}, graph: (((h = c.opts.energy) == null ? void 0 : h.graph) || "above") === "above" ? "below" : "above" } }), n === "left" && (p[e] = { ...b, col: b.col - 1 }), n === "right" && (p[e] = { ...b, col: b.col + 1 }), n === "up" && (p[e] = { ...b, row: b.row - 1 }), n === "down" && (p[e] = { ...b, row: b.row + 1 }), n === "hide" && (c.hidden = [.../* @__PURE__ */ new Set([...c.hidden, e])]), ["left", "right", "up", "down"].includes(n) && (Lt = { key: e, col: p[e].col, row: p[e].row }), wo(c, p), Lt && (pn(), Lt = null, wo($t(), yo())), an(), n === "graph" && (Sn.delete("dash:energy"), hn()), pn(), n !== "hide" ? (v = S.querySelector('[data-board-more="' + CSS.escape(e) + '"]')) == null || v.focus() : xa(Rn(e) + " hidden", kr(i));
  }
  function Ui(e) {
    const n = $t();
    Vi({ ...n, hidden: n.hidden.filter((i) => i !== e) }), pn(), xa(Rn(e) + " put back");
  }
  const Yi = () => $t().tiles || [...S.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => e.dataset.k).filter((e) => !$t().hidden.includes(e));
  function Zi(e, n) {
    const i = $t();
    wo({ ...i, tiles: e, hidden: i.hidden.filter((c) => !c.includes(".")) }, n), hn(), Ln();
  }
  const Ws = (e) => {
    Zi([...Yi().filter((n) => n !== e), e], yo()), xa(Re(e) + " added"), li(e);
  }, js = (e) => {
    const n = j, i = yo();
    delete i[e], Zi(Yi().filter((c) => c !== e), i), xa(Re(e) + " removed", kr(n));
  };
  let Qr = 0;
  function xa(e, n = null) {
    var h;
    const i = d("toast");
    if (!i) return;
    if (i.replaceChildren(Object.assign(document.createElement("span"), { textContent: e })), n) {
      const v = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      v.addEventListener("click", () => {
        clearTimeout(Qr), i.classList.remove("show", "withAction"), n();
      }), i.appendChild(v);
    }
    const c = f.getBoundingClientRect(), p = (h = a.querySelector(".bottomNav")) == null ? void 0 : h.getBoundingClientRect(), b = Dt.classList.contains("open") && !Nn ? Math.min(c.right, Dt.getBoundingClientRect().left) : c.right;
    i.style.left = (c.left + b) / 2 + "px", i.style.bottom = (p != null && p.height ? window.innerHeight - p.top + 12 : 26) + "px", i.classList.add("tfToast", "show"), i.classList.toggle("withAction", !!n), clearTimeout(Qr), Qr = setTimeout(() => i.classList.remove("show", "withAction"), n ? 5e3 : 2200);
  }
  const zs = 700, xo = 1e3, Xt = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  Xt.setAttribute("role", "tooltip"), Xt.setAttribute("aria-hidden", "true"), f.appendChild(Xt);
  let ii = null, Wa = 0, ri = 0, es = -1 / 0;
  const ts = (e) => {
    if (e.nodeType !== 1) return !1;
    const n = getComputedStyle(e);
    return n.textOverflow === "ellipsis" && e.scrollWidth > e.clientWidth + 1 || n.webkitLineClamp !== "none" && e.scrollHeight > e.clientHeight + 1;
  }, ns = (e) => {
    for (let n = e; n && n !== f; n = n.parentElement) if (ts(n)) return n;
    return null;
  };
  function Vs(e, n) {
    clearTimeout(Wa), clearTimeout(ri);
    const i = () => {
      if (!e.isConnected) return;
      ii = e, Xt.textContent = n, Xt.hidden = !1;
      const c = e.getBoundingClientRect(), p = Xt.getBoundingClientRect(), b = c.top - p.height - 8 >= 8 ? c.top - p.height - 8 : c.bottom + 8;
      Xt.style.left = Math.max(8, Math.min(window.innerWidth - p.width - 8, c.left + c.width / 2 - p.width / 2)) + "px", Xt.style.top = b + "px";
    };
    !Xt.hidden || performance.now() - es < xo ? i() : Wa = setTimeout(i, zs);
  }
  function si() {
    clearTimeout(Wa), clearTimeout(ri), Xt.hidden || (es = performance.now()), Xt.hidden = !0, ii = null;
  }
  a.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    if (Xt.contains(e.target)) {
      clearTimeout(ri);
      return;
    }
    const n = ns(e.target);
    if (n && pt.names === "scroll" && n.matches(ua)) {
      os(n);
      return;
    }
    if (n) {
      n !== ii ? Vs(n, n.textContent.trim()) : clearTimeout(ri);
      return;
    }
    clearTimeout(Wa), clearTimeout(ri), ri = setTimeout(si, 120);
  }), a.addEventListener("focusin", (e) => {
    var c;
    const n = e.target;
    if (!((c = n.matches) != null && c.call(n, ":focus-visible"))) return;
    let i = [n, ...n.querySelectorAll("*")].filter(ts);
    pt.names === "scroll" && (i.filter((p) => p.matches(ua)).forEach(os), i = i.filter((p) => !p.matches(ua))), i.length && Vs(n, i.map((p) => p.textContent.trim()).join(" · "));
  }), a.addEventListener("focusout", (e) => {
    e.target === ii && si();
  }), a.addEventListener("keydown", (e) => {
    e.key === "Escape" && !Xt.hidden && (e.stopPropagation(), si());
  }, !0), window.addEventListener("scroll", () => {
    (!Xt.hidden || Wa) && si();
  }, { capture: !0, passive: !0 });
  const ua = ".activityRowName,.activityRowMeta", as = /* @__PURE__ */ new WeakSet();
  function os(e) {
    var b;
    if (pt.names !== "scroll" || as.has(e) || (b = window.matchMedia) != null && b.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const n = e.scrollWidth - e.clientWidth;
    if (n < 2) return;
    const i = n / 30 * 1e3, c = 600 + i + 1e3 + i;
    as.add(e), e.style.textOverflow = "clip";
    const p = e.animate([
      { textIndent: "0px", offset: 0 },
      { textIndent: "0px", offset: 600 / c, easing: "ease-in-out" },
      { textIndent: -n + "px", offset: (600 + i) / c },
      { textIndent: -n + "px", offset: (1600 + i) / c, easing: "ease-in-out" },
      { textIndent: "0px", offset: 1 }
    ], { duration: c });
    p.onfinish = p.oncancel = () => {
      e.style.textOverflow = "", as.delete(e);
    };
  }
  const is = new IntersectionObserver((e) => e.forEach((n) => {
    n.isIntersecting && (is.unobserve(n.target), os(n.target));
  }), { threshold: 1 });
  let eo = !1;
  new MutationObserver(() => {
    eo || pt.names !== "scroll" || (eo = !0, setTimeout(() => {
      eo = !1, a.querySelectorAll(ua).forEach((e) => {
        !e.dataset.glided && ts(e) && (e.dataset.glided = "1", is.observe(e));
      });
    }, 300));
  }).observe(a, { childList: !0, subtree: !0 });
  const kr = (e) => () => {
    j = e, qn(), hn(), pn(), Ln();
  };
  function li(e) {
    const n = () => S.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]');
    setTimeout(() => {
      var h;
      const i = n();
      if (!i) return;
      const c = (h = window.matchMedia) == null ? void 0 : h.call(window, "(prefers-reduced-motion: reduce)").matches, p = i.getBoundingClientRect();
      (p.top < 0 || p.bottom > window.innerHeight) && i.scrollIntoView({ behavior: c ? "auto" : "smooth", block: "center" });
      const b = (v) => "0 0 0 4px color-mix(in srgb,var(--primary) " + v + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + v + "%,transparent)";
      i.animate([{ boxShadow: b(55) }, { boxShadow: b(0) }], { duration: 1500, easing: c ? "steps(1, end)" : "ease-out" });
    }, Kl(e) ? 260 : 0);
  }
  function Kl(e) {
    const n = _a.get(e);
    if (!n || !Dt.classList.contains("open") || Nn) return !1;
    const { n: i, w: c } = da(S.clientWidth), p = Dt.getBoundingClientRect().left - S.getBoundingClientRect().left, b = (x) => x * (c + Zt) + n.cols * c + (n.cols - 1) * Zt <= p;
    if (b(n.col)) return !1;
    const h = /* @__PURE__ */ new Set();
    _a.forEach((x, D) => {
      if (D !== e) for (let F = x.row; F < x.row + x.rows; F++) for (let N = x.col; N < x.col + x.cols; N++) h.add(N + "," + F);
    });
    const v = (x, D) => {
      for (let F = D; F < D + n.rows; F++) for (let N = x; N < x + n.cols; N++) if (h.has(N + "," + F)) return !1;
      return !0;
    };
    for (let x = 0; x <= ya; x++) for (let D = 0; D + n.cols <= i && b(D); D++)
      if (v(D, x))
        return wo($t(), { ...yo(), [e]: { col: D, row: x } }), pn(), !0;
    return !1;
  }
  const Gs = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Dt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Dt.setAttribute("aria-label", "Edit the dashboard"), Dt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', f.appendChild(Dt);
  let Nn = !1, At = !1, In = !1, bn = null, ka = !1;
  const Tn = {}, to = (e, n) => {
    if (Tn[e] === n) return;
    Tn[e] = n;
    const i = Dt.querySelector('[data-tray="' + e + '"]');
    i.innerHTML = n, oa(i);
  }, rs = (e, n) => '<span class="tfTrayName"><span class="activityRowName">' + oe(Re(e)) + '</span><span class="activityRowMeta">' + oe(n) + "</span></span>", Us = (e, n, i) => '<li class="tfTrayFav' + (n ? " off" : "") + '" data-tray-fav="' + oe(e) + '"><span class="tfTrayGrip" aria-hidden="true">' + Sc + '</span><span class="tfIcon"' + Bt(e, Pt(e)) + "></span>" + rs(e, n ? "Hidden" + (Et.get(e) ? " · " + Et.get(e) : "") : Et.get(e) || Wt(e)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + oe(e) + '" aria-pressed="' + !n + '" aria-label="' + (n ? "Show " : "Hide ") + oe(Re(e)) + ' on the dashboard">' + (n ? jd : ff) + "</button>" + (i ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + oe(e) + '" aria-label="Remove ' + oe(Re(e)) + ' from favourites">' + zd + "</button>" : "<span></span>") + "</li>";
  function ss(e, n, i, c) {
    const p = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(y).filter((h) => n(h) && !i.has(h) && y[h].state !== "unavailable").filter((h) => {
      const v = (Re(h) + " " + (Et.get(h) || "") + " " + h).toLowerCase();
      return p.every((x) => v.includes(x));
    }).sort((h, v) => (Et.get(h) || "~").localeCompare(Et.get(v) || "~") || Re(h).localeCompare(Re(v))).slice(0, 40).map((h) => '<li><button class="tfTrayPickItem" type="button" ' + c + '="' + oe(h) + '"><span class="tfIcon"' + Bt(h, Pt(h)) + "></span>" + rs(h, Et.get(h) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function Ln() {
    const e = un && f.classList.contains("tfBoard");
    if (Dt.classList.toggle("open", e), Dt.classList.toggle("tucked", e && Nn), Dt.toggleAttribute("inert", !e), e || (ka = !1), ko(), !e) return;
    const n = Dt.querySelector("[data-tray-tuck]");
    n.innerHTML = Nn ? Dd : Vd, n.setAttribute("aria-expanded", String(!Nn)), n.setAttribute("aria-label", Nn ? "Show the edit tray" : "Tuck the edit tray away");
    const i = $t().hidden.filter((h) => ti().some((v) => v.key === h));
    to("cards", '<div class="sectionLabel">Hidden cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((h) => '<button class="tfTrayCard" type="button" data-tray-card="' + oe(h) + '" aria-label="' + oe(Rn(h)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + Sc + "</span>" + oe(Rn(h)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide wait here.</p>')), to("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + ($t().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + ka + '">' + (ka ? "Hide the phone" : "Show the phone") + "</button>");
    const c = new Set(j.favHidden || []), p = En(), b = [...p, ...[...c].filter((h) => !p.includes(h) && y[h])];
    to("favs", b.map((h) => Us(h, c.has(h), p.includes(h))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Dt.querySelector('[data-pick="tiles"]').hidden = !In, Dt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(In)), In && to("tilepick", ss(Dt.querySelector("[data-tile-search]").value, (h) => _l.includes(h.split(".")[0]), new Set(Yi()), "data-tile-pick")), Dt.querySelector('[data-pick="favs"]').hidden = !At, Dt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(At)), At && to("pick", ss(Dt.querySelector("[data-fav-search]").value, (h) => Gs.test(h), new Set(En()), "data-fav-pick")), to("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (ga() ? " on" : "") + '" type="button" role="switch" aria-checked="' + ga() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const ci = (e) => {
    j = { ...j, ...e }, qn(), hn(), Ln();
  };
  function Ys(e, n) {
    const i = j, c = new Set(j.favHidden || []);
    n ? c.delete(e) : c.add(e), ci({ favHidden: [...c] }), n ? xa(Re(e) + " put back") : xa(Re(e) + " hidden", kr(i));
  }
  const $l = (e) => {
    const n = j;
    ci({ favourites: En().filter((i) => i !== e), favHidden: (j.favHidden || []).filter((i) => i !== e) }), xa(Re(e) + " removed from favourites", kr(n));
  }, Zs = (e) => {
    ci({ favourites: [...En().filter((n) => n !== e), e], favHidden: (j.favHidden || []).filter((n) => n !== e) }), xa(Re(e) + " added to favourites");
  };
  Dt.addEventListener("click", (e) => {
    var i;
    const n = e.target.closest("button");
    n && (n.hasAttribute("data-tray-done") ? oi(!1) : n.hasAttribute("data-tray-tuck") ? (Nn = !Nn, Ln()) : n.hasAttribute("data-phone-toggle") ? (ka = !ka, Ln(), ka && ((i = Hn.querySelector("[data-phone-key]")) == null || i.focus({ preventScroll: !0 }))) : n.dataset.trayCard ? e.detail === 0 && (Ui(n.dataset.trayCard), Ln()) : n.dataset.favEye ? Ys(n.dataset.favEye, n.getAttribute("aria-pressed") !== "true") : n.dataset.favRemove ? $l(n.dataset.favRemove) : n.hasAttribute("data-fav-add") ? (At = !At, Ln(), At && Dt.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : n.dataset.favPick ? Zs(n.dataset.favPick) : n.hasAttribute("data-tile-add") ? (In = !In, Ln(), In && Dt.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : n.dataset.tilePick ? Ws(n.dataset.tilePick) : n.hasAttribute("data-fav-suggest") && ci({ suggest: !ga() }));
  }), Dt.addEventListener("input", (e) => {
    e.target.matches("[data-fav-search],[data-tile-search]") && Ln();
  }), Dt.addEventListener("keydown", (e) => {
    var i, c;
    const n = !!((c = (i = e.target).closest) != null && c.call(i, '[data-pick="tiles"],[data-tile-add]'));
    e.key !== "Escape" || !(n ? In : At) || (e.stopPropagation(), n ? In = !1 : At = !1, Ln(), Dt.querySelector(n ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Ki(e, n, i, c) {
    e.preventDefault();
    const p = e.clientX, b = e.clientY;
    let h = null, v = 0;
    const x = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), D = (N) => {
      if (!h) {
        if (Math.hypot(N.clientX - p, N.clientY - b) < 4) return;
        h = n.cloneNode(!0), h.classList.add("tfTrayGhost"), h.style.width = n.offsetWidth + "px", f.appendChild(h);
      }
      h.style.transform = "translate(" + (N.clientX - 24) + "px," + (N.clientY - 24) + "px)";
      const J = !Nn && N.clientX >= Dt.getBoundingClientRect().left;
      if (i === "card") {
        const K = S.getBoundingClientRect(), { w: ye } = da(S.clientWidth);
        Lt = !J && N.clientX >= K.left && N.clientX <= K.right && N.clientY >= K.top + Gn ? { key: c, col: Math.max(0, Math.floor((N.clientX - K.left) / (ye + Zt))), row: Math.max(0, Math.floor((N.clientY - K.top - Gn) / Qa)), fromTray: !0 } : null, v || (v = requestAnimationFrame(() => {
          v = 0, pn();
        }));
        return;
      }
      const xe = S.querySelector(".tfDash-favs"), Ae = xe == null ? void 0 : xe.getBoundingClientRect();
      if (bn = null, Ae && !J && N.clientX >= Ae.left && N.clientX <= Ae.right && N.clientY >= Ae.top && N.clientY <= Ae.bottom) {
        let K = 1 / 0;
        xe.querySelectorAll('[data-k^="fav:"]').forEach((ye, E) => {
          const re = ye.getBoundingClientRect(), Ie = Math.hypot(N.clientX - (re.left + re.width / 2), N.clientY - (re.top + re.height / 2));
          Ie < K && (K = Ie, bn = { i: E, r: re, after: N.clientX > re.left + re.width / 2 });
        }), bn || (bn = { i: 0, r: null, after: !1 });
      }
      bn != null && bn.r ? (x.isConnected || f.appendChild(x), Object.assign(x.style, { left: (bn.after ? bn.r.right : bn.r.left) - 2 + "px", top: bn.r.top + 8 + "px", height: bn.r.height - 16 + "px" })) : x.remove();
    }, F = () => {
      if (window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", F), window.removeEventListener("pointercancel", F), cancelAnimationFrame(v), h == null || h.remove(), x.remove(), i === "card") {
        if (!h) Ui(c);
        else if (Lt != null && Lt.fromTray) {
          pn();
          const K = $t(), ye = yo();
          Lt = null, wo({ ...K, hidden: K.hidden.filter((E) => E !== c) }, ye), xa(Rn(c) + " put back");
        }
        Lt = null, pn(), hn(), Ln();
        return;
      }
      if (!bn) return;
      const N = new Set(j.favHidden || []);
      N.delete(c);
      const J = En().filter((K) => K !== c), xe = J.filter((K) => !N.has(K)), Ae = xe[Math.min(bn.i + (bn.after ? 1 : 0), xe.length)];
      J.splice(Ae ? J.indexOf(Ae) : J.length, 0, c), bn = null, ci({ favourites: J, favHidden: [...N] }), xa(Re(c) + " put back");
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", F), window.addEventListener("pointercancel", F);
  }
  const di = { sums: 201, wx: 286, favs: 363, areas: 323, act: 363, energy: 301, avg: 182 }, Ks = 140, $s = 252, Xs = 0.8, Xl = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line" }, Hn = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  Hn.setAttribute("aria-label", "Phone order"), Hn.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + zd + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', f.appendChild(Hn);
  let ls = "";
  function ko() {
    var v;
    const e = ka && un && f.classList.contains("tfBoard") && !Nn;
    if (Hn.classList.toggle("open", e), Hn.toggleAttribute("inert", !e), !e) return;
    const n = Ea().filter((x) => !$t().hidden.includes(x.key)), i = n.length, c = (x) => Math.round(x * Xs * 10) / 10 + "px", p = (x, D) => {
      const F = x.el.classList.contains("tfDac"), N = x.tile ? F ? $s : Ks : di[x.key] || Ks;
      return '<button class="tfPhoneBlock' + (x.tile ? " tile" : "") + '" type="button" data-phone-key="' + oe(x.key) + '" style="min-height:' + c(N) + '" aria-label="' + oe(Rn(x.key) + ", " + (D + 1) + " of " + i + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (x.tile ? Bt(x.key, Pt(x.key)) : Bt(x.key, Xl[x.key])) + '></span><span class="tfPhoneName">' + oe(Rn(x.key)) + "</span></button>";
    }, b = '<div class="tfPhoneTitle">' + oe(((v = S.querySelector(".tfDashTitle")) == null ? void 0 : v.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + c(di.sums) + '"><span class="tfPhoneName">' + oe(Rn("sums")) + "</span></div>" + n.map(p).join("");
    if (Hn.querySelector('[data-phone="note"]').innerHTML = $t().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", b === ls) return;
    ls = b;
    const h = Hn.querySelector('[data-phone="list"]');
    h.innerHTML = b, oa(h);
  }
  function no(e, n) {
    var i;
    Vi({ ...$t(), phone: e }), Ln(), n && ((i = Hn.querySelector('[data-phone-key="' + CSS.escape(n) + '"]')) == null || i.focus({ preventScroll: !0 }));
  }
  const Da = () => [...Hn.querySelectorAll("[data-phone-key]")].map((e) => e.dataset.phoneKey);
  function Js(e, n) {
    e.preventDefault();
    const i = n.parentElement, c = Hn.querySelector(".tfPhoneScreen"), p = Da().join();
    n.classList.add("moving");
    const b = (v) => {
      const x = c.getBoundingClientRect();
      v.clientY > x.bottom - 40 ? c.scrollTop += 12 : v.clientY < x.top + 40 && (c.scrollTop -= 12);
      const D = [...i.querySelectorAll("[data-phone-key]")].find((J) => {
        const xe = J.getBoundingClientRect();
        return J !== n && v.clientX >= xe.left && v.clientX <= xe.right && v.clientY >= xe.top && v.clientY <= xe.bottom;
      });
      if (!D) return;
      const F = D.getBoundingClientRect(), N = D.classList.contains("tile") ? v.clientX < F.left + F.width / 2 : v.clientY < F.top + F.height / 2;
      i.insertBefore(n, N ? D : D.nextSibling);
    }, h = () => {
      window.removeEventListener("pointermove", b), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h), n.classList.remove("moving");
      const v = Da();
      ls = "", v.join() !== p ? no(v) : ko();
    };
    window.addEventListener("pointermove", b), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  }
  Hn.addEventListener("pointerdown", (e) => {
    const n = e.target.closest("[data-phone-key]");
    n && e.button <= 0 && Js(e, n);
  }), Hn.addEventListener("click", (e) => {
    var i;
    const n = e.target.closest("button");
    if (n != null && n.hasAttribute("data-phone-close"))
      ka = !1, Ln(), (i = Dt.querySelector("[data-phone-toggle]")) == null || i.focus({ preventScroll: !0 });
    else if (n != null && n.hasAttribute("data-phone-reset")) {
      const { phone: c, ...p } = $t();
      Vi(p), Ln();
    }
  }), Hn.addEventListener("keydown", (e) => {
    var h, v, x, D;
    if (e.key === "Escape") {
      e.stopPropagation(), ka = !1, Ln(), (h = Dt.querySelector("[data-phone-toggle]")) == null || h.focus({ preventScroll: !0 });
      return;
    }
    const n = (D = (x = (v = e.target).closest) == null ? void 0 : x.call(v, "[data-phone-key]")) == null ? void 0 : D.dataset.phoneKey, i = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!n || !i) return;
    e.preventDefault();
    const c = Da(), p = c.indexOf(n), b = p + i;
    b < 0 || b >= c.length || ([c[p], c[b]] = [c[b], c[p]], no(c, n));
  });
  function ui(e, n) {
    e.preventDefault();
    const i = n.parentElement;
    n.classList.add("moving");
    const c = (b) => {
      const h = [...i.children].find((v) => {
        const x = v.getBoundingClientRect();
        return v !== n && b.clientY >= x.top && b.clientY <= x.bottom;
      });
      if (h) {
        const v = h.getBoundingClientRect();
        i.insertBefore(n, b.clientY < v.top + v.height / 2 ? h : h.nextSibling);
      }
    }, p = () => {
      window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), n.classList.remove("moving");
      const b = new Set(En());
      Tn.favs = null, ci({ favourites: [...i.children].map((h) => h.dataset.trayFav).filter((h) => b.has(h)) });
    };
    window.addEventListener("pointermove", c), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  Dt.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    const n = e.target.closest("[data-tray-card]"), i = e.target.closest(".tfTrayFav");
    n ? Ki(e, n, "card", n.dataset.trayCard) : i && e.target.closest(".tfTrayGrip") ? ui(e, i) : i != null && i.classList.contains("off") && !e.target.closest("button") && Ki(e, i, "fav", i.dataset.trayFav);
  });
  function Jl(e) {
    if (!un || e.button !== 0 || e.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const n = e.target.closest(".tfBoardItem"), i = n && ti().find((N) => N.el === n);
    if (!i || ca.includes(i.key)) return;
    const c = _a.get(i.key), { w: p } = da(S.clientWidth);
    if (!c) return;
    e.preventDefault(), an();
    const b = e.clientX, h = e.clientY;
    let v = !1, x = 0;
    const D = (N) => {
      const J = N.clientX - b, xe = N.clientY - h;
      if (!v) {
        if (Math.hypot(J, xe) < 4) return;
        v = !0, Lt = { key: i.key, col: c.col, row: c.row }, n.classList.add("tfDragging");
      }
      n.style.transform = "translate(" + J + "px," + xe + "px)", Lt.col = Math.round((c.x + J) / (p + Zt)), Lt.row = Math.round((c.y + xe - Gn) / Qa), x || (x = requestAnimationFrame(() => {
        x = 0, pn();
      }));
    }, F = () => {
      window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", F), window.removeEventListener("pointercancel", F), v && (cancelAnimationFrame(x), pn(), n.classList.remove("tfDragging"), n.style.transform = "", Lt = null, wo($t(), yo()), pn(), hn());
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", F), window.addEventListener("pointercancel", F);
  }
  function pi(e = !1) {
    const n = S == null ? void 0 : S.querySelector(".tfDashGraph svg[data-graph]");
    if (!(n != null && n.clientWidth)) return;
    const i = n.dataset.graph + "@" + n.clientWidth + "x" + n.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (n.dataset.drawn === i) return;
    const c = !n.dataset.drawn;
    n.dataset.drawn = i;
    const p = Ps.find((b) => b.id === n.dataset.graph);
    p ? Dn(n, p).then(() => {
      (e || c) && Wi(n);
    }) : Ar(n.dataset.graph, n).then(() => {
      e && Ko(n);
    });
  }
  function Qs() {
    var v, x, D;
    it = ar.model(o()), qa(), y = it.states, y[(v = j.sources) == null ? void 0 : v.grid] && (it.grid = j.sources.grid), y[(x = j.sources) == null ? void 0 : x.alarm] && (it.security.alarms = [j.sources.alarm]), C.forEach((F, N) => {
      const J = y[N], xe = (J == null ? void 0 : J.attributes) || {};
      if (!J || Date.now() - F.at > 2 * 60 * 1e3) {
        C.delete(N);
        return;
      }
      F.pos != null && J.state !== "opening" && J.state !== "closing" && Math.abs(rn(N) - F.pos) < 1 && delete F.pos, F.tilt != null && Math.abs((xe.current_tilt_position ?? -1) - F.tilt) < 1 && delete F.tilt, F.pos == null && F.tilt == null && C.delete(N);
    });
    const e = [];
    let n = 0;
    const i = Vo();
    Ft = i.filter((F) => F.room).map((F) => F.room), Ft.some((F) => F.id === be) || (be = ((D = Ft[0]) == null ? void 0 : D.id) || null);
    const c = Ce === "weather" ? { key: "weather", name: "Weather" } : Ce && i.find((F) => F.key === Ce);
    if (c || (Ce = null), f.classList.toggle("tfAreaOpen", !!c), f.classList.toggle("tfWeatherOpen", (c == null ? void 0 : c.key) === "weather"), f.classList.toggle("tfDash", !c), Et = /* @__PURE__ */ new Map(), it.rooms.forEach((F) => [...F.actions, ...F.plugs, ...F.readings, ...F.openings, ...F.solar, ...F.plants.flatMap((N) => [N.id, ...N.readings])].forEach((N) => Et.set(N, F.name))), !c) return Zr(e, Ni());
    if (e.push({ key: "areahead", html: hi(c, ++n) }), c.key === "weather")
      return e.weather = ++n, e;
    const p = c.ids, b = c.room ? c.room.id : c.key, h = c.room;
    return h != null && h.solar.length && e.push({ key: "energy:" + h.id, html: pe(h, ++n) }), h && (h.readings.length || h.plugs.length || h.power != null) && e.push({ key: "readings:" + h.id, html: ie(h, ++n) }), h == null || h.plants.forEach((F) => e.push({ key: "plant:" + F.id, html: we(F, ++n) })), p.length && e.push({ key: "block:" + b, order: ++n, tiles: p.map((F) => ({ key: F, html: qt(F) })) }), e;
  }
  const hi = (e, n) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + n + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Dd + '</button><div class="settingsTitle">' + oe(e.name) + "</div></div>";
  let el = 0, Mr = null;
  const Mo = (e) => e === "weather" ? vn.wx : S.querySelector(".tfAreas");
  function fi(e) {
    var n, i;
    Ce || (el = gi().scrollTop, Mr = ((n = Mo(e)) == null ? void 0 : n.getBoundingClientRect().top) ?? null), Ce = e, e.startsWith("room:") && (be = e.slice(5)), Ra(), gi().scrollTop = 0, (i = S.querySelector("[data-area-back]")) == null || i.focus({ preventScroll: !0 });
  }
  let So = null;
  function cs(e, n) {
    if (So == null || So(), n == null) return;
    const i = gi(), c = performance.now() + 1500, p = ["wheel", "touchstart", "pointerdown", "keydown"];
    let b = 0;
    const h = () => {
      cancelAnimationFrame(b), p.forEach((x) => window.removeEventListener(x, h, !0)), So = null;
    }, v = () => {
      const x = e();
      if (x != null && x.isConnected) {
        const D = x.getBoundingClientRect().top - n;
        Math.abs(D) > 0.5 && (i.scrollTop += D);
      }
      performance.now() < c ? b = requestAnimationFrame(v) : h();
    };
    p.forEach((x) => window.addEventListener(x, h, { capture: !0, passive: !0 })), So = h, v();
  }
  function ao() {
    var i;
    const e = Ce;
    Ce = null, Ra(), gi().scrollTop = el, cs(() => Mo(e), Mr);
    const n = e.startsWith("room:") ? S.querySelector('.tfAreaPanel[data-area="' + CSS.escape(e.slice(5)) + '"]') : e === "weather" ? vn.wx.querySelector(".wbOpenPage") : S.querySelector('[data-k="sum:' + CSS.escape(e) + '"]');
    (i = (n == null ? void 0 : n.querySelector("[data-go]")) || n) == null || i.focus({ preventScroll: !0 });
  }
  const mi = (e) => e.wrap ? e.wrap(e.tiles.map((n) => n.html).join(""), e) : '<div class="tfBlock" data-tf data-k="' + oe(e.key) + '" style="order:' + e.order + '"><div class="tfActions">' + e.tiles.map((n) => n.html).join("") + "</div></div>", Yn = (e) => e.map((n) => n.key + (n.tiles ? "(" + n.tiles.map((i) => i.key).join(",") + ")" : "")).join(";");
  function gi() {
    for (let e = f.parentElement || f.getRootNode().host; e; e = e.parentElement || e.getRootNode().host) {
      const n = getComputedStyle(e).overflowY;
      if ((n === "auto" || n === "scroll") && e.scrollHeight > e.clientHeight) return e;
    }
    return document.scrollingElement;
  }
  function ds(e) {
    const n = gi(), i = (v) => {
      const x = v.getBoundingClientRect();
      return x.height && x.bottom > 0 && x.top < window.innerHeight;
    }, c = [...S.children, ...S.querySelectorAll(".tfDashTiles > *")].find((v) => !v.matches(".tfDashTiles") && i(v)), p = c == null ? void 0 : c.dataset.k, b = c == null ? void 0 : c.getBoundingClientRect().top;
    e();
    const h = c != null && c.isConnected ? c : p && S.querySelector('[data-k="' + CSS.escape(p) + '"]');
    h != null && h.isConnected && b != null && (n.scrollTop += h.getBoundingClientRect().top - b);
  }
  function Ra() {
    if (!w || !S) return;
    const e = Qs();
    S.querySelectorAll("[data-tf]").forEach((i) => i.remove()), Sn.clear();
    const n = document.createElement("div");
    n.innerHTML = e.map((i) => i.tiles ? mi(i) : i.html).join(""), e.forEach((i) => i.tiles ? i.tiles.forEach((c) => Sn.set(c.key, c.html)) : Sn.set(i.key, i.html)), _n = Yn(e), S.append(...n.children), or(e.weather), ir(), Os.disconnect(), pn(), oa(S), Tr(S), mo(S), V(), B && Ar(B.id), dl(), Xi(), Lr(), requestAnimationFrame(Q);
  }
  const tl = (e) => {
    var i;
    const n = a.activeElement && e.contains(a.activeElement) ? a.activeElement : null;
    return n && { label: n.getAttribute("aria-label"), act: (i = n.dataset) == null ? void 0 : i.act };
  }, $i = (e, n) => {
    var i;
    n && ((i = n.label && e.querySelector('[aria-label="' + CSS.escape(n.label) + '"]') || n.act && e.querySelector('[data-act="' + CSS.escape(n.act) + '"]')) == null || i.focus({ preventScroll: !0 }));
  };
  function us(e, n) {
    const i = document.createElement("div");
    i.innerHTML = n;
    const c = i.firstElementChild, p = tl(e);
    e.replaceWith(c), oa(c), Tr(c), mo(c), $i(c, p);
  }
  function hn() {
    !w || !S || Lt || ds(ps);
  }
  function ps() {
    if (!S.querySelector("[data-tf]")) {
      Ra();
      return;
    }
    const e = Qs();
    if (Yn(e) !== _n) {
      Ra();
      return;
    }
    const n = (i) => [...Pe.keys()].some((c) => {
      const p = c.slice(c.indexOf("|") + 1);
      return i === p || i.endsWith(":" + p);
    });
    e.forEach((i) => (i.tiles || [i]).forEach((c) => {
      if (Sn.get(c.key) === c.html || n(c.key)) return;
      const p = S.querySelector('[data-k="' + CSS.escape(c.key) + '"]');
      if (p) {
        if (Sn.set(c.key, c.html), B && B.key === c.key && p.querySelector(".tfOpen")) {
          p.querySelector(".tfOpen .activityRowMeta").textContent = P(B.id);
          return;
        }
        us(p, c.html), B && B.key === c.key && Ar(B.id), c.key.startsWith("energy:") && dl();
      }
    })), Xi(), Lr(), Ol(), V(), Ue == null || Ue.update(), nt == null || nt.forEach((i) => i.update()), f.classList.contains("tfDash") && ai(), requestAnimationFrame(Q);
  }
  const oo = {
    light: (e) => [["Brightness", e.brightness != null ? Math.round(e.brightness / 2.55) + "%" : null], ["Colour temperature", e.color_temp_kelvin ? Number(e.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", e.color_mode && Ct(e.color_mode)]],
    climate: (e) => [["Current temperature", Ve(e.current_temperature) + " °C"], ["Target", Ve(e.temperature) + " °C"], ["Action", Ct(e.hvac_action)]],
    cover: (e) => [["Position", e.current_position != null ? e.current_position + "% open" : null], ["Tilt", e.current_tilt_position != null ? e.current_tilt_position + "% open" : null]],
    humidifier: (e) => [["Current humidity", e.current_humidity + "%"], ["Target", e.humidity + "%"], ["Mode", Ct(e.mode)]],
    media_player: (e) => [["Title", e.media_title], ["Artist", e.media_artist], ["Volume", e.volume_level != null ? Math.round(e.volume_level * 100) + "%" : null], ["Source", e.source]],
    vacuum: (e) => [["Battery", e.battery_level + "%"], ["Fan speed", Ct(e.fan_speed)], ["Rooms", (e.rooms || []).join(", ") || null]],
    lock: (e) => [["Changed by", e.changed_by]],
    alarm_control_panel: (e) => [["Changed by", e.changed_by]],
    valve: () => [],
    plant: (e) => [["Moisture", e.moisture + "%"], ["Light", Number(e.brightness).toLocaleString() + " lx"], ["Temperature", Ve(e.temperature) + " °C"], ["Fertility", e.conductivity + " µS/cm"], ["Problems", e.problem === "none" ? "None" : Ct(e.problem)]],
    weather: (e) => [["Temperature", e.temperature != null ? e.temperature + " " + (e.temperature_unit || "°C") : null], ["Humidity", e.humidity != null ? e.humidity + "%" : null], ["Wind", e.wind_speed != null ? e.wind_speed + " " + (e.wind_speed_unit || "km/h") : null], ["Pressure", e.pressure != null ? e.pressure + " " + (e.pressure_unit || "hPa") : null]]
  }, nl = (e) => {
    var i;
    const n = (((i = oo[e.split(".")[0]]) == null ? void 0 : i.call(oo, xt(e))) || []).filter(([, c]) => c != null && c !== "");
    return n.length ? '<div class="tfMoreRows">' + n.map(([c, p]) => '<div class="tfMoreRow"><span>' + oe(c) + "</span><span>" + oe(p) + "</span></div>").join("") + "</div>" : "";
  }, Ql = (e) => er(e) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function al(e, n = {}, i = !1) {
    return '<div class="tfMoreList">' + e.map((c) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + oe(c.name) + '</div><div class="tfMoreTiles' + (i ? " single" : "") + '">' + c.ids.map((p) => hr(p, n)).join("") + "</div></div>").join("") + "</div>";
  }
  const Ye = document.createElement("div");
  Ye.className = "tfMoreBackdrop", Ye.hidden = !0, f.appendChild(Ye);
  const ln = (e, n) => {
    for (let i = e; i && i !== Ye; i = i.parentElement) {
      const c = getComputedStyle(i).overflowY;
      if ((c === "auto" || c === "scroll") && i.scrollHeight > i.clientHeight + 1 && (n < 0 ? i.scrollTop > 0 : i.scrollTop + i.clientHeight < i.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Co = null;
  Ye.addEventListener("touchstart", (e) => {
    Co = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: !0 }), Ye.addEventListener("touchmove", (e) => {
    var p, b;
    if (!Co || e.touches.length > 1 || (b = (p = e.target).closest) != null && b.call(p, "input,textarea,select")) return;
    const n = e.touches[0], i = Co.x - n.clientX, c = Co.y - n.clientY;
    Co = { x: n.clientX, y: n.clientY }, Math.abs(c) >= Math.abs(i) && !ln(e.target, c) && e.preventDefault();
  }, { passive: !1 }), Ye.addEventListener("wheel", (e) => {
    ln(e.target, e.deltaY) || e.preventDefault();
  }, { passive: !1 });
  function hs() {
    const e = Ye.querySelector(".tfMorePair"), n = Ye.querySelector(".tfMore");
    e == null || e.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - n.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", hs, { passive: !0 }), w && St();
  let ja = [];
  const ol = (e) => e === "favourites" || e.startsWith("summary:") || e.startsWith("group:");
  function il(e) {
    const n = (x, D = "") => '<div class="tfMoreHead">' + (O != null && O.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + kc + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + oe(x) + "</div>" + D + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Jh + "</button></div>", i = (x, D) => '<div class="tfMoreNow"><div class="tfMoreState">' + oe(x) + "</div>" + (D ? '<div class="tfMoreSub">' + oe(D) + "</div>" : "") + "</div>", c = al;
    if (e === "favourites") {
      const x = En(), D = new Set(x), F = [{ name: "Starred", ids: x }, { name: "Home", ids: it.homeVacuums }, { name: "Security", ids: [...it.security.alarms, ...it.security.locks] }, ...it.rooms.map((N) => ({ name: N.name, ids: [...N.actions, ...N.plugs] }))].map((N, J) => J ? { ...N, ids: N.ids.filter((xe) => !D.has(xe)) } : N).filter((N) => N.ids.length);
      return [n("Favourites"), i(x.length ? x.length + " starred" : "None starred"), c(F, { star: !0 }, !0)];
    }
    const p = (x, { name: D = "", alert: F = !1, plain: N = !1 } = {}) => {
      const J = N ? [] : x.filter((K) => _l.includes(K.split(".")[0])), xe = x.filter((K) => !J.includes(K)), Ae = (K) => K.startsWith("vacuum.") && xt(K).battery_level != null ? xt(K).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (D ? '<div class="tfMoreGroupName">' + oe(D) + "</div>" : "") + '<div class="tfMoreActions">' + J.map((K) => qt(K, !0)).join("") + xe.map((K) => hr(K, { plain: N, alert: F, say: N ? Ae(K) : null })).join("") + "</div></div>";
    };
    if (e.startsWith("summary:")) {
      const x = Ni().find((J) => J.key === e.slice(8));
      if (!x) return null;
      const D = x.key === "light" ? (x.groups || []).flatMap((J) => J.ids) : [], F = D.some((J) => {
        var xe;
        return ((xe = y[J]) == null ? void 0 : xe.state) === "on";
      }), N = D.length ? '<button class="primary" type="button" data-acts="' + Fo(D.map((J) => ["light", F ? "turn_off" : "turn_on", J])) + '">' + (F ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(x.name), '<div class="tfMoreNowRow">' + i(x.value) + N + "</div>", ...(x.groups || []).map((J) => p(J.ids, { name: J.name === x.name ? "" : J.name, alert: J.alert, plain: x.plain }))];
    }
    if (e.startsWith("group:")) {
      const [, x, D] = e.split(":"), F = it.rooms.find((xe) => xe.id === x), N = F && dr(F).find((xe) => xe.key === D);
      if (!N) return null;
      const J = N.acts ? '<button class="primary" type="button" data-acts="' + Fo(N.acts) + '">' + (N.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(F.name + " " + N.label.toLowerCase()), '<div class="tfMoreNowRow">' + i(N.value) + J + "</div>", p(jo(F, D))];
    }
    const b = e.split(".")[0], h = y[e], v = _l.includes(b) ? ma(e) : { sections: [] };
    return [
      n(Re(e)),
      i(Wt(e), h.last_changed && Vt(Date.parse(h.last_changed))),
      (O == null ? void 0 : O.at) && '<svg class="tfGraph tfDay" data-day="' + oe(e) + '" role="img" aria-label="' + oe(Re(e)) + ', last 24 hours"></svg>',
      b === "cover" && '<div data-cover-art="' + oe(e) + '"></div>',
      ...v.sections.filter(Boolean),
      fs(e) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(O != null && O.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Vd + "</button>"
    ].filter(Boolean);
  }
  const fs = (e) => ol(e) ? "" : nl(e) + Ql(e);
  let Sr = "";
  function Cr(e) {
    var n;
    O && (O.details = e, Xi(), (n = Ye.querySelector(e ? "[data-details-close]" : "[data-details]")) == null || n.focus({ preventScroll: !0 }));
  }
  const Na = (e) => {
    const n = y[e], i = rn(e), c = Ta(e);
    return { kind: xc(n), name: Re(e), text: Wt(e), pos: i, target: Math.abs(c - i) > 0.5 ? c : null, moving: n.state === "opening" || n.state === "closing", tilt: Ya(e) ?? 100, canSet: mt(e, Hd) };
  };
  function Tr(e) {
    e.querySelectorAll("[data-cover-art]").forEach((n) => {
      const i = n.dataset.coverArt, c = n.dataset.artKey || "more:" + i;
      let p = H.get(c);
      p || (p = Xh({ onMove: (b) => io(i, b), onSet: (b) => {
        io(i, b), xi("pos", i);
      } }), p.coverId = i, H.set(c, p)), n.replaceWith(p.el), p.update(Na(i));
    });
  }
  const rl = (e) => [...H.values()].filter((n) => n.coverId === e), Ma = () => H.forEach((e) => {
    y[e.coverId] && e.update(Na(e.coverId));
  }), Lr = () => {
    H.forEach((e, n) => {
      e.el.isConnected || (e.destroy(), H.delete(n));
    }), Ma();
  };
  function Xi() {
    var b, h;
    if (!O || !(ol(O.id) || y[O.id])) {
      Ye.hidden = !0;
      return;
    }
    if ([...Pe.keys()].some((v) => v.endsWith("|" + O.id))) {
      Ma();
      return;
    }
    const e = il(O.id), n = Ye.querySelector(".tfMore");
    if (!e) {
      bi();
      return;
    }
    const i = tl(Ye), c = fs(O.id), p = O.frame ? O.frame.wide : O.id.startsWith("summary:") || O.id.startsWith("group:");
    if (Ye.hidden || !n || e.length !== ja.length || n.classList.contains("wide") !== p) {
      const v = vi ? O.scroll || 0 : !Ye.hidden && n ? n.scrollTop : 0;
      Ye.innerHTML = '<div class="tfMorePair' + (Ye.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (p ? " wide" : "") + '"' + (O.frame ? ' style="height:' + O.frame.h + 'px"' : "") + ">" + e.join("") + "</section>" + (c ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + kc + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + c + "</div></div></aside>" : "") + "</div>", Sr = c, Ye.classList.toggle("wide", p), Ye.hidden = !1, hs(), Tr(Ye), mo(Ye), oa(Ye), Ye.querySelectorAll("[data-day]").forEach((x) => nc(x.dataset.day, x, O.at)), v && (Ye.querySelector(".tfMore").scrollTop = v), $i(Ye, i), Ye.contains(a.activeElement) || (b = Ye.querySelector("[data-more-close]")) == null || b.focus({ preventScroll: !0 });
    } else {
      if (e.forEach((v, x) => {
        var N, J;
        if (v === ja[x] || v.includes("data-cover-art") || n.children[x].contains((J = (N = a.activeElement) == null ? void 0 : N.matches) != null && J.call(N, "input,select") ? a.activeElement : null) || [...Pe.keys()].some((xe) => n.children[x].querySelector('[data-drag="' + CSS.escape(xe) + '"]'))) return;
        const D = document.createElement("div");
        D.innerHTML = v;
        const F = D.firstElementChild;
        n.children[x].replaceWith(F), oa(F), mo(F);
      }), c !== Sr) {
        const v = Ye.querySelector(".tfMoreSideBody");
        v && (v.innerHTML = c), Sr = c;
      }
      Ye.contains(a.activeElement) || $i(Ye, i);
    }
    (h = Ye.querySelector(".tfMorePair")) == null || h.classList.toggle("details", !!(O.details && c)), ja = e, Ma();
  }
  setInterval(() => {
    O && Xi();
  }, 15 * 1e3);
  function za(e, n) {
    var p;
    const i = !!(O && n && Ye.contains(n)), c = i && Ye.querySelector(".tfMore");
    i && (O.scroll = c.scrollTop), O = { id: e, opener: i ? O.opener : n, back: i ? O : null, frame: i ? O.frame || { wide: c.classList.contains("wide"), h: c.offsetHeight } : null, at: Number((p = n == null ? void 0 : n.dataset) == null ? void 0 : p.at) || null }, ms();
  }
  let vi = !1;
  function ms() {
    ja = [], vi = !Ye.hidden, H.forEach((e, n) => {
      n !== O.id && Ye.contains(e.el) && (e.destroy(), H.delete(n));
    }), Xi(), vi = !1;
  }
  function bi() {
    var i, c, p, b, h, v;
    const e = O == null ? void 0 : O.opener;
    O = null, H.forEach((x, D) => {
      Ye.contains(x.el) && (x.destroy(), H.delete(D));
    }), ra.forEach((x, D) => {
      D.startsWith("more:") && ra.delete(D);
    }), Ye.hidden = !0, Ye.innerHTML = "";
    const n = { preventScroll: !0 };
    e != null && e.isConnected ? e.focus(n) : (i = e == null ? void 0 : e.dataset) != null && i.more ? (c = S.querySelector('[data-more="' + CSS.escape(e.dataset.more) + '"]')) == null || c.focus(n) : (p = e == null ? void 0 : e.dataset) != null && p.summary ? (b = S.querySelector('[data-summary="' + CSS.escape(e.dataset.summary) + '"]')) == null || b.focus(n) : (h = e == null ? void 0 : e.hasAttribute) != null && h.call(e, "data-favs-edit") && ((v = S.querySelector("[data-favs-edit]")) == null || v.focus(n));
  }
  function gs(e, n, i, c = {}) {
    const p = n.map((ye) => ye[1]), b = c.zero ? 0 : Math.min(...p), h = Math.max(...p), v = Math.max(120, e.clientWidth || 260), x = Math.max(60, e.clientHeight || 130), D = 8, F = x - 20, N = Date.now() - 24 * 3600 * 1e3, J = 24 * 3600 * 1e3, xe = (ye) => Math.max(0, Math.min(v, (ye - N) / J * v)), Ae = (ye) => h === b ? (D + F) / 2 : F - (ye - b) / (h - b) * (F - D);
    let K = "M" + xe(n[0][0]).toFixed(1) + " " + Ae(n[0][1]).toFixed(1);
    for (let ye = 1; ye < n.length; ye++) K += c.smooth ? "L" + xe(n[ye][0]).toFixed(1) + " " + Ae(n[ye][1]).toFixed(1) : "H" + xe(n[ye][0]).toFixed(1) + "V" + Ae(n[ye][1]).toFixed(1);
    e.setAttribute("viewBox", "0 0 " + v + " " + x), e.setAttribute("aria-label", i), e.innerHTML = '<path d="' + K + "V" + F + "H" + xe(n[0][0]).toFixed(1) + 'Z" fill="' + (c.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + K + '" fill="none" stroke="' + (c.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (x - 4) + '">24 h ago</text><text x="' + v + '" y="' + (x - 4) + '" text-anchor="end">Now</text>';
  }
  const Zn = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, sl = (e, n) => {
    const i = e.split(".")[0];
    return Zn[i] ? Zn[i].includes(n) : i === "alarm_control_panel" || i === "climate" || i === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(n) : n === "on";
  }, ec = (e) => {
    const n = e.split(".")[0], i = xt(e).device_class;
    return n === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[i] || (Al.includes(i) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[n] || "On";
  }, ll = /* @__PURE__ */ new Map();
  let tc = 0;
  async function cl(e) {
    let n = ll.get(e);
    if (!n || Date.now() - n.at > 60 * 1e3) {
      let p = [];
      try {
        const b = await R({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        p = ((b == null ? void 0 : b[e]) || []).map((h) => [h.lu != null ? h.lu * 1e3 : Date.parse(h.last_updated || h.last_changed), String(h.s ?? h.state)]).filter(([h]) => Number.isFinite(h));
      } catch {
      }
      p.length || (p = (ba || []).filter((b) => b.entity_id === e).map((b) => [b.when * 1e3, String(b.state)])), n = { at: Date.now(), pts: p }, ll.set(e, n);
    }
    const i = y[e], c = n.pts.slice().sort((p, b) => p[0] - b[0]);
    return i && (!c.length || c[c.length - 1][1] !== i.state) && c.push([Date.parse(i.last_changed) || Date.now(), i.state]), c;
  }
  async function nc(e, n, i) {
    const c = await cl(e);
    if (!n.isConnected) return;
    const p = c.map(([Ie, ut]) => [Ie, Number(ut)]);
    if (c.length > 1 && p.every(([, Ie]) => Number.isFinite(Ie))) {
      gs(n, p, Re(e) + ", last 24 hours");
      return;
    }
    const b = Date.now(), h = b - 864e5, v = Math.max(200, n.clientWidth || 360), x = 62, D = (Ie) => Math.max(0, Math.min(v, (Ie - h) / 864e5 * v)), F = [];
    let N = null;
    c.forEach(([Ie, ut]) => {
      const cn = sl(e, ut);
      cn && N == null ? N = Math.max(Ie, h) : !cn && N != null && (F.push([N, Math.max(Ie, h)]), N = null);
    }), N != null && F.push([N, b]);
    const J = Yo(e) ? "var(--danger)" : e.startsWith("light.") ? "#ffaa00" : "var(--primary)", xe = ec(e), Ae = "tfDayClip" + ++tc, K = F.map(([Ie, ut]) => xe + (ut >= b - 1e3 && Ie <= h + 1e3 ? " all day" : ut >= b - 1e3 ? " since " + Vn(Ie) : Ie <= h + 1e3 ? " until " + Vn(ut) : " " + Vn(Ie) + "–" + Vn(ut)));
    let ye = "", E = -1 / 0;
    F.forEach(([Ie], ut) => {
      const cn = K[ut].length * 5.4, jt = Math.min(D(Ie), v - cn);
      jt < E + 8 || (ye += '<text x="' + jt.toFixed(1) + '" y="10">' + oe(K[ut]) + "</text>", E = jt + cn);
    });
    let re = '<text x="' + v + '" y="' + (x - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((Ie) => {
      let ut = new Date(b).setHours(Ie, 0, 0, 0);
      ut > b && (ut -= 864e5), D(ut) > 8 && D(ut) < v - 34 && (re += '<text x="' + D(ut).toFixed(1) + '" y="' + (x - 2) + '" text-anchor="middle">' + String(Ie).padStart(2, "0") + "</text>");
    }), n.setAttribute("viewBox", "0 0 " + v + " " + x), n.setAttribute("aria-label", Re(e) + ", last 24 hours: " + (K.length ? K.join(", ") : "no changes")), n.innerHTML = '<clipPath id="' + Ae + '"><rect x="0" y="18" width="' + v + '" height="26" rx="8"/></clipPath>' + ye + '<rect x="0" y="18" width="' + v + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + Ae + ')">' + F.map(([Ie, ut]) => '<rect x="' + D(Ie).toFixed(1) + '" y="18" width="' + Math.max(2, D(ut) - D(Ie)).toFixed(1) + '" height="26" fill="' + J + '"/>').join("") + "</g>" + (i && i >= h ? '<line x1="' + D(i).toFixed(1) + '" x2="' + D(i).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + re;
  }
  function Kn(e) {
    var c;
    const n = Number((c = y[e]) == null ? void 0 : c.state), i = Date.now();
    if (xt(e).state_class === "total_increasing") {
      const p = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), b = Math.max(1, i - p);
      return [...Array(49)].map((h, v) => p + b * v / 48).map((h) => [h, Math.round(n * Math.pow((h - p) / b, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((p, b) => [i - (48 - b) * 30 * 60 * 1e3, Math.round(n * (0.96 + 0.04 * Math.sin(b / 6)) * 10) / 10]);
  }
  async function Ar(e, n) {
    var xe, Ae;
    let i = De.get(e);
    if (e.endsWith("_solar_power")) i = { at: Date.now(), points: nd() };
    else if (er(e)) i = { at: Date.now(), points: Kn(e) };
    else if (!i || Date.now() - i.at > 5 * 60 * 1e3) {
      try {
        const K = new Date(Date.now() - 864e5).toISOString(), ye = await R({ type: "history/history_during_period", start_time: K, entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), E = ((ye == null ? void 0 : ye[e]) || []).map((re) => [re.lu != null ? re.lu * 1e3 : Date.parse(re.last_updated || re.last_changed), Number(re.s ?? re.state)]).filter(([re, Ie]) => Number.isFinite(re) && Number.isFinite(Ie));
        i = { at: Date.now(), points: E };
      } catch {
        i = { at: Date.now(), points: [] };
      }
      De.set(e, i);
    }
    const c = n || S.querySelector('[data-graph="' + CSS.escape(e) + '"]');
    if (!c) return;
    const p = y[e], b = ((xe = p == null ? void 0 : p.attributes) == null ? void 0 : xe.unit_of_measurement) || "", h = i.points.slice(), v = Number(p == null ? void 0 : p.state);
    if (Number.isFinite(v) && !e.endsWith("_solar_power") && h.push([Date.now(), v]), h.length < 2) {
      c.setAttribute("aria-label", Re(e) + ": no history for the last 24 hours"), c.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const x = h.map((K) => K[1]), D = Math.min(...x), F = Math.max(...x), N = (K) => K.toLocaleString(void 0, { maximumFractionDigits: Math.abs(K) >= 100 ? 0 : 1 }), J = ((Ae = p == null ? void 0 : p.attributes) == null ? void 0 : Ae.state_class) === "total_increasing";
    gs(c, h, Re(e) + ", last 24 hours: " + (J ? "+" + N(x[x.length - 1] - x[0]) : D === F ? N(D) : N(D) + " to " + N(F)) + (b ? " " + b : ""), { smooth: e.endsWith("_solar_power"), zero: e.endsWith("_solar_power") });
  }
  function dl() {
    const e = S == null ? void 0 : S.querySelector("[data-solar]");
    if (!e) return;
    const n = nd();
    gs(e, n, "Solar, last 24 hours: up to " + Ve(Math.max(...n.map((i) => i[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Ji(e, n) {
    const i = n.entity_id, c = C.get(i) || {}, p = { open_cover: 100, close_cover: 0, set_cover_position: n.position, toggle: rn(i) > 0 ? 0 : 100 }[e], b = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: n.tilt_position }[e];
    p != null && (c.pos = p), b != null && (c.tilt = b), e === "stop_cover" && (delete c.pos, delete c.tilt), e === "stop_cover_tilt" && delete c.tilt, c.at = Date.now(), C.set(i, c);
  }
  function wi(e, n, i) {
    var p;
    const c = i == null ? void 0 : i.entity_id;
    return e !== "light" || typeof c != "string" || !ke[c] || !zn(c) || i.brightness_pct != null || i.brightness != null ? [n, i] : n !== "turn_on" && !(n === "toggle" && ((p = y[c]) == null ? void 0 : p.state) !== "on") ? [n, i] : ["turn_on", { ...i, brightness_pct: ke[c] }];
  }
  function yi(e, n, i, c) {
    let p = { entity_id: i, ...c || {} };
    return [n, p] = wi(e, n, p), e === "cover" && Ji(n, p), lt[i] = (lt[i] || 0) + 1, Ti.set(qd, JSON.stringify(lt)), ar.call(e, n, p) ? Promise.resolve() : Promise.resolve(me(e, n, p));
  }
  function ul(e) {
    const [n, i, c, p] = e.split("|");
    yi(n, i, c, p ? JSON.parse(p) : null).catch(() => {
    });
  }
  function io(e, n) {
    Pe.set("pos|" + e, n), Sn.delete(e), ja = ja.map(() => ""), [S, Ye].forEach((c) => c.querySelectorAll('[data-blocks="' + CSS.escape(e) + '"]').forEach((p) => at(p, n)));
    const i = S.querySelector('.tfAction[data-k="' + CSS.escape(e) + '"] .tfName .activityRowMeta');
    if (i && (i.textContent = Math.round(n) + "%"), (O == null ? void 0 : O.id) === e) {
      const c = Ye.querySelector(".tfMoreState"), p = Ye.querySelector(".tfMoreSub");
      c && (c.textContent = Math.round(n) + "%", c.classList.add("live")), p && (p.textContent = "Currently " + rn(e) + "%");
    }
    rl(e).forEach((c) => c.update(Na(e)));
  }
  const _r = (e, n) => {
    const i = e.shiftKey ? 10 : 1, c = { ArrowUp: n + i, ArrowRight: n + i, ArrowDown: n - i, ArrowLeft: n - i, PageUp: n + 25, PageDown: n - 25, Home: 0, End: 100 }[e.key];
    return c == null ? null : Math.max(0, Math.min(100, Math.round(c)));
  };
  function To(e, n) {
    var K;
    const i = e.dataset.blocks;
    (K = e.setPointerCapture) == null || K.call(e, n.pointerId);
    const c = (ye) => {
      const E = e.getBoundingClientRect();
      return Math.max(0, Math.min(100, (ye.clientX - E.left) / E.width * 100));
    }, p = c(n), b = n.clientX;
    let h = !1, v = Ta(i), x = p, D = 0;
    const F = () => {
      v = Math.abs(x - v) < 0.2 ? x : v + (x - v) * 0.14, io(i, v), D = requestAnimationFrame(F);
    }, N = () => {
      h || (h = !0, e.classList.add("fine"), D = requestAnimationFrame(F));
    }, J = setTimeout(N, 350), xe = (ye) => {
      x = c(ye), Math.abs(ye.clientX - b) > 6 && (clearTimeout(J), N());
    }, Ae = () => {
      clearTimeout(J), cancelAnimationFrame(D), e.removeEventListener("pointermove", xe), e.removeEventListener("pointerup", Ae), e.removeEventListener("pointercancel", Ae), e.classList.remove("fine"), io(i, h ? Math.round(v) : (Math.min(3, Math.floor(p / 25)) + 1) * 25), xi("pos", i);
    };
    e.addEventListener("pointermove", xe), e.addEventListener("pointerup", Ae), e.addEventListener("pointercancel", Ae);
  }
  function Qi(e) {
    var p;
    const [n, i] = e.dataset.open.split("|"), c = e.closest(".tfCard");
    B = { key: n, id: i, h: c ? Math.round(c.getBoundingClientRect().height) : 0 }, Sn.delete(n), hn(), (p = S.querySelector(".tfOpen [data-close]")) == null || p.focus({ preventScroll: !0 });
  }
  function vs(e) {
    var n;
    be = e.dataset.area, S.querySelectorAll(".tfAreaPanel").forEach((i) => {
      var p;
      const c = i === e;
      i.classList.toggle("active", c), i.setAttribute("aria-expanded", String(c)), (p = i.querySelector(".panelExpanded")) == null || p.toggleAttribute("inert", !c);
    }), Sn.set("areas", Oa(((n = S.querySelector('[data-k="areas"]')) == null ? void 0 : n.style.order) || 1));
  }
  const Er = {
    bright: { value: (e, n) => Math.round(n * 100), text: (e, n) => n ? n + "%" : "Off", send: (e, n) => n > 0 ? ["light", "turn_on", { brightness_pct: n }] : ["light", "turn_off", {}] },
    ct: { value: (e, n) => {
      const [i, c] = _i(e);
      return Math.round(i + n * (c - i));
    }, text: (e, n) => n.toLocaleString() + "k", send: (e, n) => ["light", "turn_on", { color_temp_kelvin: n }] },
    hue: { value: (e, n) => Math.round(n * 360), text: () => "Colour", send: (e, n) => {
      var i;
      return ["light", "turn_on", { hs_color: [n, Math.max(60, ((i = xt(e).hs_color) == null ? void 0 : i[1]) || 100)] }];
    } },
    pos: { value: (e, n) => Math.round(n * 100), text: (e, n) => Math.round(n) + "%", send: (e, n) => ["cover", "set_cover_position", { position: Math.round(n) }] },
    tilt: { value: (e, n) => Math.round(n * 100), text: (e, n) => "Tilt " + n + "%", send: (e, n) => ["cover", "set_cover_tilt_position", { tilt_position: n }] },
    vol: { value: (e, n) => Math.round(n * 100) / 100, text: (e, n) => Math.round(n * 100) + "%", send: (e, n) => ["media_player", "volume_set", { volume_level: n }] }
  };
  function Sa(e, n, i, c) {
    var x;
    const p = Er[n].value(i, c);
    Pe.set(n + "|" + i, p);
    const b = Math.round(c * 100) + "%", h = e.querySelector("i");
    if (n === "tilt") {
      h.style.width = "calc((100% - 8px) * " + c + ")";
      const [D, F] = e.querySelectorAll("span");
      D.classList.toggle("lit", c > 0.08), F.classList.toggle("lit", c > 0.92), Sn.delete(i), ja = ja.map(() => ""), rl(i).forEach((N) => N.update(Na(i)));
    } else if (h) h.style.width = b;
    else {
      let D = e.querySelector("b");
      D || (D = document.createElement("b"), e.appendChild(D)), D.style.left = b;
    }
    e.setAttribute("aria-valuenow", String(Math.round(c * 100)));
    const v = (x = e.closest(".tfAction") || e.closest(".tfMore")) == null ? void 0 : x.querySelector(".tfName .activityRowMeta, .tfMoreState");
    v && (v.textContent = Er[n].text(i, p));
  }
  function xi(e, n) {
    const i = Pe.get(e + "|" + n), [c, p, b] = Er[e].send(n, i), h = () => setTimeout(() => {
      Pe.delete(e + "|" + n), hn();
    }, 1500);
    yi(c, p, n, b).then(h, h);
  }
  function nn(e) {
    e.addEventListener("click", (n) => {
      var c, p;
      const i = n.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (wa && !n.target.closest(".tfBoardMenu,[data-board-more]") && an(), !(!i || !e.contains(i) || i.disabled))
        if (i.dataset.boardMore)
          (wa == null ? void 0 : wa.key) === i.dataset.boardMore ? an(!0) : Un(i.dataset.boardMore, i);
        else if (i.dataset.boardAct) Zl(wa.key, i.dataset.boardAct);
        else if (i.dataset.boardShow) Ui(i.dataset.boardShow);
        else if (i.dataset.favHide) Ys(i.dataset.favHide, !1);
        else if (i.dataset.energyPick) vr(i.dataset.energyPick);
        else if (i.dataset.act) ul(i.dataset.act);
        else if (i.hasAttribute("data-details")) Cr(!(O != null && O.details));
        else if (i.hasAttribute("data-details-close")) Cr(!1);
        else if (i.dataset.summary) jr(i.dataset.summary, i);
        else if (i.dataset.star) Ns(i.dataset.star);
        else if (i.hasAttribute("data-more-back")) {
          const b = O.id;
          O = O.back, ms(), (c = Ye.querySelector('.tfMore [data-more="' + CSS.escape(b) + '"]')) == null || c.focus({ preventScroll: !0 });
        } else if (i.hasAttribute("data-favs-edit")) za("favourites", i);
        else if (i.dataset.acts) JSON.parse(i.dataset.acts).forEach(([b, h, v, x]) => yi(b, h, v, x).catch(() => {
        }));
        else if (i.dataset.more) za(i.dataset.more, i);
        else if (i.hasAttribute("data-more-close")) bi();
        else if (i.dataset.go) fi("room:" + i.dataset.go);
        else if (i.hasAttribute("data-area-back")) ao();
        else if (i.dataset.open) Qi(i);
        else if (i.hasAttribute("data-close")) {
          const b = B;
          B = null, Sn.delete(b.key), hn(), (p = S.querySelector('[data-open="' + CSS.escape(b.key + "|" + b.id) + '"]')) == null || p.focus({ preventScroll: !0 });
        } else i.classList.contains("tfAreaPanel") && !i.classList.contains("active") && vs(i);
    }), e.addEventListener("keydown", (n) => {
      var c, p, b, h, v, x, D;
      const i = n.target;
      if ((c = i.dataset) != null && c.open && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Qi(i)), (p = i.dataset) != null && p.energyPick && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), vr(i.dataset.energyPick)), (b = i.classList) != null && b.contains("tfAreaPanel") && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), vs(i)), (h = i.dataset) != null && h.summary && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), jr(i.dataset.summary, i)), n.key === "Escape" && wa && e === S) {
        n.preventDefault(), an(!0);
        return;
      }
      if (n.key === "Escape" && un && e === S) {
        n.preventDefault(), oi(!1), (v = d("dashEditNav")) == null || v.focus();
        return;
      }
      if (n.key === "Escape" && Ce && e === S && (n.preventDefault(), ao()), (x = i.dataset) != null && x.blocks) {
        const F = i.dataset.blocks, N = _r(n, Math.round(Ta(F)));
        if (N == null) return;
        n.preventDefault(), io(F, N), clearTimeout(de.get(F)), de.set(F, setTimeout(() => xi("pos", F), 500));
        return;
      }
      if ((D = i.dataset) != null && D.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(n.key)) {
        n.preventDefault();
        const [F, N] = i.dataset.drag.split("|"), J = Number(i.getAttribute("aria-valuenow")) / 100, xe = n.key === "Home" ? 0 : n.key === "End" ? 1 : Math.max(0, Math.min(1, J + (n.key === "ArrowLeft" || n.key === "ArrowDown" ? -0.05 : 0.05)));
        Sa(i, F, N, xe), xi(F, N);
      }
    }), e.addEventListener("pointerdown", (n) => {
      var cn;
      const i = n.target.closest("[data-blocks]");
      if (i && n.button === 0) {
        n.preventDefault(), To(i, n);
        return;
      }
      const c = n.target.closest("[data-drag]");
      if (!c || n.button > 0) return;
      const [p, b] = c.dataset.drag.split("|");
      if (p === "bright" && !zn(b)) {
        ul(ft("light", "toggle", b));
        return;
      }
      const h = p === "bright" && ((cn = y[b]) == null ? void 0 : cn.state) !== "on", v = n.pointerType !== "mouse", x = p === "tilt" ? 4 : 0, D = () => c.getBoundingClientRect().width - x * 2, F = (jt) => {
        const pa = c.getBoundingClientRect();
        return Math.max(0, Math.min(1, (jt.clientX - pa.left - x) / D()));
      };
      let N = v ? "waiting" : h ? "pressed" : "dragging", J = 0, xe = 0;
      const Ae = n.clientX, K = n.clientY, ye = (jt, pa) => Math.hypot(jt.clientX - Ae, jt.clientY - K) > pa, E = () => {
        try {
          c.setPointerCapture(n.pointerId);
        } catch {
        }
      };
      v || (n.preventDefault(), E()), N === "dragging" && Sa(c, p, b, F(n));
      const re = v && setTimeout(() => {
        var jt, pa;
        N === "waiting" && (N = "held", A = c, c.classList.add("held"), E(), (jt = navigator.userActivation) != null && jt.hasBeenActive && ((pa = navigator.vibrate) == null || pa.call(navigator, 8)), J = h ? (ke[b] ?? 100) / 100 : Number(c.getAttribute("aria-valuenow")) / 100, xe = Ae, Sa(c, p, b, J));
      }, k), Ie = (jt) => {
        N === "waiting" && ye(jt, 8) ? N = "gone" : N === "pressed" && ye(jt, 4) && (N = "dragging"), N === "held" ? Sa(c, p, b, Math.max(0, Math.min(1, J + (jt.clientX - xe) / D()))) : N === "dragging" && Sa(c, p, b, F(jt));
      }, ut = (jt) => {
        clearTimeout(re), ["pointermove", "pointerup", "pointercancel"].forEach((pa, $e) => c.removeEventListener(pa, $e ? ut : Ie)), c.classList.remove("held"), A === c && (A = null), N === "held" || N === "dragging" ? xi(p, b) : jt.type === "pointerup" && h && (N === "waiting" || N === "pressed") && yi("light", "turn_on", b).catch(() => {
        });
      };
      c.addEventListener("pointermove", Ie), c.addEventListener("pointerup", ut), c.addEventListener("pointercancel", ut);
    }), e.addEventListener("touchmove", (n) => {
      A && n.cancelable && n.preventDefault();
    }, { passive: !1 });
  }
  return S && w && (Bi(), nn(S), nn(Ye), Ye.addEventListener("click", (e) => {
    e.target === Ye && bi();
  }), (pl = a.getElementById("homeNav")) == null || pl.addEventListener("click", () => {
    Ce && ao();
  }), (Ba = a.querySelector(".bottomNav")) == null || Ba.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Gd + "</button>"), (bs = d("dashEditNav")) == null || bs.addEventListener("click", () => oi(!un)), S.addEventListener("pointerdown", Jl), S.addEventListener("hass-action", (e) => {
    var c, p;
    const n = (p = (c = e.target).closest) == null ? void 0 : p.call(c, ".tfDac"), i = n == null ? void 0 : n.dataset.k;
    !i || !n.dataset.dac.startsWith("dash:") || un || (e.stopPropagation(), za(i, n));
  }), new ResizeObserver(() => {
    f.classList.contains("tfDash") && Yr() !== Gr ? hn() : ai();
  }).observe(S), window.addEventListener("resize", ai, { passive: !0 }), Ye.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.stopPropagation(), O != null && O.details ? Cr(!1) : bi());
  })), X(), {
    update(e) {
      if (!w) return;
      const n = !Object.keys(y).length;
      y = e || {};
      for (const i in y) i.startsWith("light.") && y[i].state === "on" && zn(i) && Ge(i, uo(y[i]));
      n ? Ra() : hn();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      co = !0, Ue == null || Ue.destroy(), Ue = null, nt == null || nt.forEach((e) => e.destroy()), nt = null;
    },
    resume() {
      co = !1, !(!w || !(S != null && S.querySelector("[data-tf]"))) && (ht.isConnected && or(ht.style.order), ir());
    }
  };
}
const Cf = "0.58.0", Tc = "move_assistant", Tf = "move_assistant", Zd = "move_assistant_checkin_reminder";
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
    l.innerHTML = `<style>${Eu}${Du}${Ru}</style>${Nu}`;
    const o = l.getElementById("app");
    o.style.opacity = "0";
    let d = null;
    try {
      const f = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Tc
      });
      d = (f == null ? void 0 : f.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(d), this._app = Qu(l, {
      data: d,
      save: (f) => this._save(f),
      fire: (f, g) => this._fire(f, g),
      ws: (f) => this._hass.callWS(f),
      subscribe: (f, g) => {
        var w, _;
        return (_ = (w = this._hass) == null ? void 0 : w.connection) != null && _.subscribeMessage ? this._hass.connection.subscribeMessage(g, f) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var f, g;
        return Object.keys(((g = (f = this._hass) == null ? void 0 : f.services) == null ? void 0 : g.notify) || {}).sort();
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
        var g;
        const f = JSON.stringify((d == null ? void 0 : d.value) ?? null);
        f === this._lastSaved || f === this._pendingJson || (this._lastSaved = f, (g = this._app) == null || g.applyRemoteData(d.value));
      },
      { type: "frontend/subscribe_user_data", key: Tc }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Tc,
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
    const o = `config/automation/config/${Zd}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (g) {
        if ((g == null ? void 0 : g.status_code) !== 404 && (g == null ? void 0 : g.status) !== 404) throw g;
      }
      return;
    }
    const d = (g) => `${g}:00`, f = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: Zd,
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
