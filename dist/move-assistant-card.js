const Eu = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Du = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--muted)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDac{grid-column:span 2;min-width:0}.tfDac>dual-controller-v3{display:block}.tfMoreActions .tfDac{grid-column:auto}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}', Ru = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:clamp(8px,calc(5.6cqw * var(--wb-k,1)),14px);aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:clamp(12px,calc(7.9cqw * var(--wb-k,1)),20px);border-radius:clamp(22px,calc(11.1cqw * var(--wb-k,1)),28px);overflow:hidden}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbHead{gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px)}.wbSquare .wbChip{width:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);height:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);border-radius:clamp(12px,calc(6.3cqw * var(--wb-k,1)),16px);--wb-icon:clamp(18px,calc(9.5cqw * var(--wb-k,1)),24px)}.wbSquare .wbName{font-size:clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px);line-height:1.4}.wbSquare .wbSub{font-size:clamp(13px,calc(6.3cqw * var(--wb-k,1)),16px)}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:clamp(6px,calc(4cqw * var(--wb-k,1)),10px)}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 480px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}@container wb-card (width < 220px){.wbMoonCaption{display:none}}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}`, Nu = `<main id="app"><div class="shell">
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
`, sa = {
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
}, ra = (a) => a < 0 ? 0 : a > 1 ? 1 : a, Jc = (a, l, i) => a + (l - a) * i, Cc = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((d) => d + d).join("") : l;
  return [0, 2, 4].map((d) => parseInt(i.slice(d, d + 2), 16) || 0);
}, Bu = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Qc = {}, $t = (a, l, i) => {
  const d = a + l + i;
  return Qc[d] || (Qc[d] = Bu(Cc(a).map((f, g) => f + (Cc(l)[g] - f) * i)));
}, ed = {}, Ml = (a) => ed[a] || (ed[a] = Cc(a)), rc = (a, l, i, d) => (f) => {
  if (f <= 0) return 0;
  if (f >= 1) return 1;
  let g = 0, b = 1, E = f;
  for (let x = 0; x < 18; x++)
    E = (g + b) / 2, 3 * (1 - E) * (1 - E) * E * a + 3 * (1 - E) * E * E * i + E * E * E < f ? g = E : b = E;
  return 3 * (1 - E) * (1 - E) * E * l + 3 * (1 - E) * E * E * d + E * E * E;
}, Pu = { std: rc(0.2, 0, 0, 1), acc: rc(0.3, 0, 1, 1), dec: rc(0, 0, 0, 1) };
function El(a, l) {
  const i = String(a || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || l ? "night" : "day");
}
function Kd(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [$t(l.clear[0], l.cloudy[0], 0.12), $t(l.clear[1], l.cloudy[1], 0.12)], l.storm = [$t(l.rain[0], "#000000", 0.22), $t(l.rain[1], "#000000", 0.22)], l;
}
const Tc = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Lc = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Ac = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function _c(a, l = sa) {
  const i = { ...sa, ...l }, d = Kd(i), f = String(a).split("/"), g = d[f[0]] ? f[0] : "clear", b = f[1] === "night", E = d[g][b ? 1 : 0], x = {
    night: b,
    clearness: g === "clear" ? 1 : g === "partly" ? 0.7 : 0.25,
    sky: E,
    skyStops: [E],
    skyT: 0,
    sun: { x: 45, y: b ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: b ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: b ? 1 : 0 },
    stars: Tc.map(() => ({ o: 0 })),
    rain: Lc.map(() => ({ o: 0, dy: -16 })),
    snow: Ac.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, R = (me) => Tc.map(() => ({ o: me }));
  return g === "clear" ? b ? (x.moon.o = 1, x.stars = R(1)) : x.sun.o = 1 : g === "partly" ? (x.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: b ? 1 : 0 }, b ? (x.moon = { x: 34, y: 33, d: 48, o: 1 }, x.stars = R(0.7)) : x.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : g === "cloudy" || g === "fog" ? (x.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: b ? 1 : 0 }, b ? x.moon = { x: 40, y: 36, d: 40, o: 0 } : x.sun = { x: 40, y: 36, r: 20, o: 0 }) : (x.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, b ? x.moon = { x: 38, y: 28, d: 36, o: 0 } : x.sun = { x: 38, y: 28, r: 18, o: 0 }, g === "snow" ? x.snow = Ac.map(() => ({ o: 1, dy: 0 })) : x.rain = Lc.map((me, ne) => ({ o: g === "storm" && ne === 1 ? 0 : 1, dy: 0 })), g === "storm" && (x.bolt = { o: 1, dy: 0 })), x;
}
const td = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Iu(a, l, i, d = sa, f = !1) {
  const g = { ...sa, ...d }, b = (U, Y) => U > 0.01 && Y > 0.01 ? "stay" : U > 0.01 ? "leave" : Y > 0.01 ? "enter" : "none", E = (U, Y, J, Z) => {
    const V = U[0] + Y * Z, q = U[1] - (J - 1 - Y) * Z;
    return Pu[U[2]](ra((i - V) / Math.max(1e-3, q - V)));
  }, x = (U, Y, J, Z = 0, V = 1, q = 0) => {
    const ce = b(U.o, Y.o);
    if (ce === "none") return { ...Y, o: 0 };
    const X = E(td[J][ce], Z, V, q), fe = {};
    for (const $ in Y) fe[$] = f && ce !== "stay" && $ !== "o" ? ce === "leave" ? U[$] : Y[$] : Jc(U[$], Y[$], X);
    return fe;
  }, R = E(td.sky, 0, 1, 0);
  let me, ne;
  if (a.night !== l.night) {
    const U = Math.min(a.clearness, l.clearness), Y = $t($t(a.sky, l.sky, 0.5), g.dusk, 0.6 * U);
    me = R < 0.5 ? $t(a.sky, Y, R * 2) : $t(Y, l.sky, R * 2 - 1), ne = U > 0.5 ? [a.sky, g.dusk, l.sky] : [a.sky, l.sky];
  } else
    me = $t(a.sky, l.sky, R), ne = [a.sky, l.sky];
  return {
    night: i < 0.5 ? a.night : l.night,
    clearness: Jc(a.clearness, l.clearness, i),
    sky: me,
    skyStops: ne,
    skyT: R,
    sun: x(a.sun, l.sun, "body"),
    moon: x(a.moon, l.moon, "body"),
    cloud: x(a.cloud, l.cloud, "cloud"),
    stars: l.stars.map((U, Y) => x(a.stars[Y], U, "fx", Y, l.stars.length, 0.05)),
    rain: l.rain.map((U, Y) => x(a.rain[Y], U, "fx", Y, l.rain.length, 0.05)),
    snow: l.snow.map((U, Y) => x(a.snow[Y], U, "fx", Y, l.snow.length, 0.05)),
    bolt: x(a.bolt, l.bolt, "fx")
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
], ia = (a, l) => (Hu[(l & 7) * 8 + (a & 7)] + 0.5) / 64, Fu = 0, Rc = 1, Nc = 2, Bc = 3, Pc = 4, oa = 5, Br = 6, bi = 7, Ic = 8, Tl = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), Ou = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], qu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((a) => [a[0] * 13 / 11, a[1] * 28 / 24]), $d = (a, l, i) => {
  let d = !1;
  for (let f = 0, g = a.length - 1; f < a.length; g = f++) {
    const b = a[f], E = a[g];
    b[1] > i != E[1] > i && l < (E[0] - b[0]) * (i - b[1]) / (E[1] - b[1]) + b[0] && (d = !d);
  }
  return d;
};
function Xd(a, { size: l = 90, px: i = 2, oneBit: d = !1, colors: f = sa, ink: g = "#26221e", paper: b = "#fbf9f6", clock: E = 0, idle: x = !1 } = {}) {
  const R = { ...sa, ...f }, me = Math.sin, ne = Math.PI * 2, U = Math.max(6, Math.round(l / i)), Y = U / 90, J = x ? Math.floor(E / 100) * 100 : 0, Z = x ? me(ne * J / 3600) : 0, V = x ? 1.8 * me(ne * J / 6400) : 0, q = x ? 0.9 * me(ne * J / 4100) : 0, ce = x ? 0.8 * me(ne * J / 5200) : 0, X = J / 3400 % 1, fe = x && a.bolt.o > 0.5 && (X < 0.04 || X > 0.08 && X < 0.11), $ = new Array(U * U), M = new Uint8Array(U * U), B = (y, _, C, F, de) => {
    C == null || y < 0 || _ < 0 || y >= U || _ >= U || (F >= 1 || F > ia(y + 5, _ + 3)) && ($[_ * U + y] = C, M[_ * U + y] = de);
  }, we = (y, _, C, F) => {
    for (let de = Math.max(0, Math.floor(_ - C) - 1); de <= Math.min(U - 1, _ + C + 1); de++) for (let j = Math.max(0, Math.floor(y - C) - 1); j <= Math.min(U - 1, y + C + 1); j++) F(j, de, j + 0.5 - y, de + 0.5 - _);
  }, Ce = a.skyStops || [a.sky], P = a.skyT || 0;
  for (let y = 0; y < U; y++) {
    const _ = a.night ? ra(1 - (y + 0.5) / (U * 0.7)) * 0.85 : ra(((y + 0.5) / U - 0.35) / 0.65) * 0.85;
    for (let C = 0; C < U; C++) {
      let F = Ce[0];
      if (Ce.length > 1) {
        const de = P * (Ce.length - 1), j = Math.min(Ce.length - 2, Math.floor(de));
        F = de - j > ia(C, y) ? Ce[j + 1] : Ce[j];
      }
      _ > ia(C + 2, y + 5) && (F = a.night ? $t(F, "#000000", 0.28) : $t(F, "#ffffff", 0.2)), $[y * U + C] = fe ? $t(F, "#ffffff", 0.25) : F;
    }
  }
  if (a.sun.o > 0.01) {
    const y = a.sun.x * Y, _ = a.sun.y * Y, C = Math.max(1, a.sun.r * Y);
    if (x) {
      const F = C * (1.45 + 0.06 * Z), de = $t(R.sun, "#ffffff", 0.55);
      if (we(y, _, F, (j, re, he, ve) => {
        const Ye = Math.sqrt(he * he + ve * ve);
        Ye > C && Ye < F && B(j, re, de, 0.26 * (1 - (Ye - C) / (F - C)) * a.sun.o, Fu);
      }), a.sun.o > 0.5) {
        const j = Math.floor(J / 500) % 2, re = Math.max(1, C * 0.22);
        for (let he = 0; he < 8; he++) if (he % 2 === j) for (let ve = C + 1.5; ve < C + 1.5 + re; ve += 0.7) B(Math.floor(y + Math.cos(he * Math.PI / 4) * ve), Math.floor(_ + Math.sin(he * Math.PI / 4) * ve), R.sun, a.sun.o, Ic);
      }
    }
    we(y, _, C, (F, de, j, re) => {
      if (j * j + re * re > C * C) return;
      const he = ((j * 0.643 + re * 0.766) / C + 1) / 2;
      B(F, de, ra((he - 0.62) / 0.38) > ia(F, de) ? R.sunEdge : R.sun, a.sun.o, Rc);
    });
  }
  if (Tc.forEach((y, _) => {
    const C = a.stars[_].o;
    if (C < 0.01) return;
    const F = Math.floor(y[0] * Y), de = Math.floor(y[1] * Y), j = x ? (Math.floor(J / 300) + _ * 3) % 6 : 0;
    if (j === 5) return;
    const re = Math.round(y[2] * Y * (j === 4 ? 0.3 : j < 2 ? 1 : 0.6));
    B(F, de, R.star, C, bi);
    for (let he = 1; he <= re; he++) {
      const ve = he === re && re > 1 ? $t(R.star, a.sky, 0.5) : R.star;
      B(F - he, de, ve, C, bi), B(F + he, de, ve, C, bi), B(F, de - he, ve, C, bi), B(F, de + he, ve, C, bi);
    }
  }), a.moon.o > 0.01) {
    const y = Math.max(1.5, a.moon.d * Y * 0.37), _ = a.moon.x * Y, C = a.moon.y * Y + (x && ce > 0.4 ? -1 : 0), F = _ + 0.547 * y, de = C - 0.503 * y, j = 0.82 * y, re = $t(R.moon, "#ffffff", 0.6);
    we(_, C, y, (he, ve, Ye, ct) => {
      if (Ye * Ye + ct * ct > y * y) return;
      const At = he + 0.5 - F, sn = ve + 0.5 - de;
      At * At + sn * sn <= j * j || B(he, ve, ra((ct + y) / (2 * y) * 1.1 - 0.1) > ia(he, ve) ? R.moon : re, a.moon.o, Nc);
    });
  }
  const Ee = Math.max(2, Math.round(15.65 * Y)), z = Math.max(1, Math.round(5.87 * Y * 0.5));
  Lc.forEach((y, _) => {
    const C = a.rain[_];
    let F = C.dy, de = C.o;
    if (de < 0.01) return;
    if (x) {
      const he = (J / 950 + _ / 3) % 1;
      F += -5 + he * 14, de *= he < 0.18 ? he / 0.18 : he > 0.72 ? (1 - he) / 0.28 : 1;
    }
    const j = (y[0] + 3 + V) * Y, re = (y[1] + F) * Y;
    for (let he = 0; he < Ee; he++) for (let ve = 0; ve < z; ve++) B(Math.floor(j - 0.208 * he) + ve, Math.floor(re) + he, R.rain, de, Pc);
  });
  const Be = Math.max(0, Math.round(7.34 * Y / 2.6));
  if (Ac.forEach((y, _) => {
    const C = a.snow[_];
    let F = C.dy, de = 0, j = C.o;
    if (j < 0.01) return;
    if (x) {
      const ve = (J / 3200 + _ / 5) % 1;
      F += -6 + ve * 14, de = 1.5 * me(ne * (ve * 1.5 + _ / 5)), j *= ve < 0.2 ? ve / 0.2 : ve > 0.75 ? (1 - ve) / 0.25 : 1;
    }
    const re = Math.floor((y[0] + 3.67 + de + V) * Y), he = Math.floor((y[1] + 3.67 + F) * Y);
    B(re, he, R.snow, j, oa);
    for (let ve = 1; ve <= Be; ve++)
      B(re - ve, he, R.snow, j, oa), B(re + ve, he, R.snow, j, oa), B(re, he - ve, R.snow, j, oa), B(re, he + ve, R.snow, j, oa), Be > 1 && ve < Be && (B(re - ve, he - ve, R.snow, j, oa), B(re + ve, he - ve, R.snow, j, oa), B(re - ve, he + ve, R.snow, j, oa), B(re + ve, he + ve, R.snow, j, oa));
  }), a.bolt.o > 0.01)
    if (U >= 30) {
      const y = 39 + V, _ = 50 + a.bolt.dy;
      for (let C = Math.floor(_ * Y); C <= (_ + 28) * Y; C++) for (let F = Math.floor(y * Y); F <= (y + 13) * Y; F++)
        $d(qu, (F + 0.5) / Y - y, (C + 0.5) / Y - _) && B(F, C, R.sun, a.bolt.o, Br);
    } else {
      const y = U / 18, _ = 7, C = 10 + Math.round(a.bolt.dy * 0.2);
      Ou.forEach((F, de) => F.split("").forEach((j, re) => {
        if (j !== "#") return;
        const he = Math.floor((_ + re) * y), ve = Math.floor((C + de) * y);
        for (let Ye = ve; Ye < Math.max(ve + 1, Math.floor((C + de + 1) * y)); Ye++) for (let ct = he; ct < Math.max(he + 1, Math.floor((_ + re + 1) * y)); ct++) B(ct, Ye, R.sun, a.bolt.o, Br);
      }));
    }
  if (a.cloud.o > 0.01) {
    const y = Math.max(3, a.cloud.w * Y), _ = y * 0.6665, C = (a.cloud.x + V) * Y - y / 2, F = (a.cloud.y + q) * Y - _ / 2, de = $t(R.cloudDay, R.cloudNight, Math.round(a.cloud.f * 4) / 4), j = $t(de, "#000000", 0.16);
    for (let re = Math.max(0, Math.floor(F) - 1); re <= Math.min(U - 1, F + _ + 1); re++) for (let he = Math.max(0, Math.floor(C) - 1); he <= Math.min(U - 1, C + y + 1); he++) {
      const ve = (he + 0.5 - C) / y, Ye = (re + 0.5 - F) / y;
      Tl(ve, Ye) && B(he, re, !Tl(ve, Ye + 1 / y) || ra((Ye - 0.42) / 0.25) * 0.8 > ia(he, re) ? j : de, a.cloud.o, Bc);
    }
  }
  return Jd($, M, U, U, { oneBit: d, ink: g, paper: b, snowInk: !a.night });
}
function Jd(a, l, i, d, { oneBit: f, ink: g, paper: b, snowInk: E }) {
  const x = new Uint8ClampedArray(i * d * 4), R = Ml(g), me = Ml(b);
  for (let ne = 0; ne < d; ne++) for (let U = 0; U < i; U++) {
    const Y = ne * i + U, J = l[Y];
    if (a[Y] == null) continue;
    let Z = Ml(a[Y]);
    if (f) {
      let V;
      J === Pc || J === Ic ? V = !0 : J === oa ? V = E : J === bi || J === Br ? V = !1 : V = Math.round((0.2126 * Z[0] + 0.7152 * Z[1] + 0.0722 * Z[2]) / 255 * 4) / 4 <= ia(U, ne), (J === Rc || J === Nc || J === Bc || J === Br) && (U > 0 && l[Y - 1] !== J || U < i - 1 && l[Y + 1] !== J || ne > 0 && l[Y - i] !== J || ne < d - 1 && l[Y + i] !== J) && (V = !0), Z = V ? R : me;
    }
    x[Y * 4] = Z[0], x[Y * 4 + 1] = Z[1], x[Y * 4 + 2] = Z[2], x[Y * 4 + 3] = 255;
  }
  return { w: i, h: d, data: x };
}
const Wu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, ju = (a) => El(a, !1).split("/")[0], sc = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, zu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Vu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Gu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Uu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Yu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Zu = [".##", "##.", ".#.", "#.."];
function Qd(a, { width: l, height: i, colors: d, wave: f = 0.38, soft: g = 6, glow: b = 0.6 }) {
  const E = { ...sa, dawn: "#e5a77e", ...d }, x = Kd(E), R = l, me = i, ne = R / 6, U = ne / 2, Y = Math.PI * 2, J = a.length ? a : [{ cond: "cloudy", night: !1 }], Z = [...Array(12)].map((X, fe) => {
    const $ = J[Math.min(fe, J.length - 1)], M = ju($.cond), B = fe % 2 === 1;
    return { cond: $.cond, k: M, night: B, sky: x[M][B ? 1 : 0], cover: Wu[M] };
  }), V = (X) => me * (0.5 - f * Math.cos(Y * (X / ne - 0.25)));
  return { C: E, S: Z, W: R, H: me, cw: ne, sw: U, TAU: Y, yb: V, side: (X, fe, $) => {
    const M = (X ? V(fe) - $ : $ - V(fe)) / Math.max(3, g * 1.4) + 0.5;
    return M <= 0 ? 0 : M >= 1 ? 1 : M;
  }, glowAt: (X) => {
    const fe = ((X / ne - 0.25) % 1 + 1) % 1, $ = Math.max(0, Math.min(5, Math.round(X / ne - 0.25))), M = Math.max(0, Math.min(5, Math.round(X / ne - 0.75))), B = 1 - (Z[2 * $].cover + Z[2 * M + 1].cover) / 2, we = Math.sin(Math.PI * Math.min(1, Math.max(0, V(X) / me)));
    return { c: fe < 0.5 ? E.dusk : E.dawn, a: b * (0.2 + 0.8 * B) * we * we };
  }, soft: g, tw: ne * 0.3, sy: me / 90 };
}
function eu(a, { clock: l = 0, ambient: i = !1, seed: d = 1 }) {
  const { S: f, sw: g, side: b, C: E, TAU: x, sy: R } = a, me = l, ne = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return f.forEach((U, Y) => {
    const J = sc(d * 977 + Y * 131 + 7), Z = (Y + 0.5) * g, V = U.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[U.k] : 0;
    for (let q = 0; q < V; q++) {
      const ce = Z + (J() - 0.5) * g * 1.6, X = (6 + J() * 76) * R, fe = J() < 0.35, $ = 1.8 + J() * 1.6, M = b(!0, ce, X) * (fe ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(x * me / 2600 + q * 1.7 + Y) : 1);
      M >= 0.03 && ne.stars.push({ x: ce, y: X, big: fe, size: $, o: M });
    }
    if (!U.night && (U.k === "clear" || U.k === "partly")) {
      const q = Z + (J() - 0.5) * g * 0.3, ce = Math.min(15, g * 0.29);
      ne.suns.push({ x: q, y: 32 * R, rad: ce, halo: ce * 2.8 * (i ? 1 + 0.07 * Math.sin(x * me / 3600 + Y) : 1) });
    }
    if (U.night && (U.k === "clear" || U.k === "partly")) {
      const q = Math.min(0.78, g * 0.55 / 34), ce = Z - 23 * q + (J() - 0.5) * g * 0.2;
      ne.moons.push({ x: ce + 23 * q, y: (4 + (i ? 0.8 * Math.sin(x * me / 5200 + Y) : 0)) * R + 23 * q, d: 46 * q });
    }
  }), f.forEach((U, Y) => {
    const J = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[U.k];
    if (!J) return;
    const Z = sc(d * 577 + Y * 71 + 3), V = (Y + 0.5) * g, q = U.k === "rain" || U.k === "storm" || U.night ? E.cloudNight : E.cloudDay, ce = U.night ? 0.82 : U.k === "storm" ? 0.75 : 1;
    for (let X = 0; X < J; X++) {
      const fe = g / 46 * (U.k === "partly" ? 0.85 : 0.75 + Z() * 0.55), $ = V + (U.k === "partly" ? g * 0.12 : (Z() - 0.5) * g * 1.05), M = (U.k === "partly" ? 40 : 6 + Z() * 26) * R, B = i ? 2.5 * Math.sin(x * me / 9e3 + Y * 1.3 + X * 2.1) : 0, we = i ? 0.9 * Math.sin(x * me / 6100 + Y + X) : 0;
      ne.clouds.push({ x: $ - 23 * fe + B, y: M - 15.33 * fe + we, w: 46 * fe, h: 30.66 * fe, fill: q, o: ce * (J > 1 && X === 0 ? 0.85 : 1) });
    }
  }), f.forEach((U, Y) => {
    const J = sc(d * 313 + Y * 29 + 11), Z = (Y + 0.5) * g, V = U.cond === "pouring" ? 16 : U.cond === "rainy" || U.cond === "hail" ? 9 : U.cond === "lightning-rainy" ? 12 : U.cond === "snowy-rainy" ? 5 : 0;
    for (let ce = 0; ce < V; ce++) {
      let X = Z + (J() - 0.5) * g * 1.05, fe = 44 + J() * 36, $ = 1;
      if (i) {
        const B = ((fe - 44 + me * 0.04) % 36 + 36) % 36;
        X -= 0.21 * (B - (fe - 44)), fe = 44 + B, $ = Math.min(1, B / 6, (36 - B) / 6);
      }
      fe *= R;
      const M = b(U.night, X, fe) * $;
      M >= 0.05 && ne.drops.push({ x: X, y: fe, o: M });
    }
    const q = U.cond === "snowy" ? 11 : U.cond === "snowy-rainy" ? 6 : 0;
    for (let ce = 0; ce < q; ce++) {
      let X = Z + (J() - 0.5) * g * 1.05, fe = 40 + J() * 44, $ = 1;
      if (i) {
        const B = ((fe - 40 + me * 9e-3) % 44 + 44) % 44;
        fe = 40 + B, X += 1.6 * Math.sin(x * me / 2800 + ce * 1.9 + Y), $ = Math.min(1, B / 6, (44 - B) / 6);
      }
      fe *= R;
      const M = b(U.night, X, fe) * $;
      M >= 0.05 && ne.flakes.push({ x: X, y: fe, o: M });
    }
    if (U.k === "fog") {
      const ce = U.night ? "#c8ccd6" : "#ffffff", X = U.night ? 0.28 : 0.62, fe = i ? 4 * Math.sin(x * me / 8e3 + Y) : 0;
      for (let $ = 0; $ < 4; $++) ne.fogs.push({ x: Z - g * 0.75 + $ % 2 * g * 0.18 + ($ % 2 ? fe : -fe), y: (30 + $ * 13) * R, w: g * 1.3, c: ce, a: X });
    }
    if (U.k === "storm") {
      const ce = (me / 3400 + Y * 0.37) % 1;
      ne.bolts.push({ x: Z + (J() - 0.5) * g * 0.3 - 5, y: 36 * R, o: i && !(ce < 0.05 || ce > 0.09 && ce < 0.12) ? 0.8 : 1 });
    }
  }), ne;
}
function Ku(a, l, i, d, f, g, b, E) {
  const { S: x, C: R, cw: me, yb: ne, glowAt: U, soft: Y, tw: J, sy: Z } = a, V = new Array(i * d), q = new Uint8Array(i * d), ce = new Uint8Array(i * d), X = (y, _, C, F, de) => {
    C == null || y < 0 || _ < 0 || y >= i || _ >= d || (F >= 1 || F > ia(y + 5, _ + 3)) && (V[_ * i + y] = C, q[_ * i + y] = de);
  }, fe = (y, _, C, F) => {
    for (let de = Math.max(0, Math.floor(_ - C) - 1); de <= Math.min(d - 1, _ + C + 1); de++) for (let j = Math.max(0, Math.floor(y - C) - 1); j <= Math.min(i - 1, y + C + 1); j++) F(j, de, j + 0.5 - y, de + 0.5 - _);
  }, $ = (y, _, C) => {
    for (let de = 0; de < y.length - 1; de++) {
      const j = (de + _) * me;
      if (C < j - J / 2) return [y[de], y[de], 0];
      if (C <= j + J / 2) return [y[de], y[de + 1], (C - j + J / 2) / J];
    }
    const F = y[y.length - 1];
    return [F, F, 0];
  }, M = x.filter((y) => !y.night).map((y) => y.sky), B = x.filter((y) => y.night).map((y) => y.sky), we = Y / g, Ce = 16 * Z / g;
  for (let y = 0; y < i; y++) {
    const _ = (y + 0.5) * f, C = ne(_) / g, F = $(M, 0.75, _), de = $(B, 1.25, _), j = U(_);
    for (let re = 0; re < d; re++) {
      const he = ia(y, re), ve = re + 0.5 - C, Ye = (we > 0.01 ? ra(0.5 + ve / we) : ve > 0 ? 1 : 0) > he;
      let ct = Ye ? F[2] > he ? F[1] : F[0] : de[2] > he ? de[1] : de[0];
      (Ye ? ra(((re + 0.5) / d - 0.45) / 0.55) * 0.7 : ra(1 - (re + 0.5) / (d * 0.55)) * 0.7) > ia(y + 2, re + 5) && (ct = Ye ? $t(ct, "#ffffff", 0.18) : $t(ct, "#000000", 0.25)), Ye && ve >= 0 && ve < Ce && j.a * 1.3 * (1 - ve / Ce) > ia(y + 6, re + 1) && (ct = j.c), V[re * i + y] = ct, ce[re * i + y] = Ye ? 0 : 1;
    }
  }
  const P = $t(R.sun, "#ffffff", 0.55), Ee = $t(R.moon, "#ffffff", 0.6);
  l.stars.forEach((y) => {
    const _ = Math.floor(y.x / f), C = Math.floor(y.y / g);
    if (_ < 0 || C < 0 || _ >= i || C >= d || !ce[C * i + _] || y.o < 0.15) return;
    const F = y.o > 0.45 ? R.star : $t(R.star, V[C * i + _], 0.5), de = y.big && y.o > 0.6 ? Math.floor(y.size / f) : 0;
    X(_, C, F, 1, bi);
    for (let j = 1; j <= de; j++) [[_ - j, C], [_ + j, C], [_, C - j], [_, C + j]].forEach((re) => {
      re[0] >= 0 && re[1] >= 0 && re[0] < i && re[1] < d && ce[re[1] * i + re[0]] && X(re[0], re[1], F, 1, bi);
    });
  }), l.suns.forEach((y) => {
    const _ = Math.max(1.5, y.rad / f), C = y.x / f, F = y.y / g, de = y.halo / f * 0.85;
    if (fe(C, F, de, (j, re, he, ve) => {
      const Ye = Math.sqrt(he * he + ve * ve);
      Ye > _ && Ye < de && !ce[re * i + j] && X(j, re, P, 0.3 * (1 - (Ye - _) / (de - _)), 0);
    }), E) {
      const j = Math.floor(b / 500) % 2, re = Math.max(1, _ * 0.3);
      for (let he = 0; he < 8; he++) if (he % 2 === j) for (let ve = _ + 1.2; ve < _ + 1.2 + re; ve += 0.7) X(Math.floor(C + Math.cos(he * Math.PI / 4) * ve), Math.floor(F + Math.sin(he * Math.PI / 4) * ve), R.sun, 1, Ic);
    }
    fe(C, F, _, (j, re, he, ve) => {
      he * he + ve * ve <= _ * _ && X(j, re, ra(((ve / _ + 1) / 2 - 0.6) / 0.4) > ia(j, re) ? R.sunEdge : R.sun, 1, Rc);
    });
  }), l.moons.forEach((y) => {
    const _ = Math.max(1.5, y.d * 0.37 / f), C = y.x / f, F = y.y / g, de = C + 0.547 * _, j = F - 0.503 * _, re = 0.82 * _;
    fe(C, F, _, (he, ve, Ye, ct) => {
      if (Ye * Ye + ct * ct > _ * _) return;
      const At = he + 0.5 - de, sn = ve + 0.5 - j;
      At * At + sn * sn > re * re && X(he, ve, ra((ct + _) / (2 * _) * 1.1 - 0.1) > ia(he, ve) ? R.moon : Ee, 1, Nc);
    });
  }), l.clouds.forEach((y) => {
    const _ = Math.max(3, y.w / f), C = _ * 0.6665, F = y.x / f, de = y.y / g, j = $t(y.fill, "#000000", 0.16);
    for (let re = Math.max(0, Math.floor(de) - 1); re <= Math.min(d - 1, de + C + 1); re++) for (let he = Math.max(0, Math.floor(F) - 1); he <= Math.min(i - 1, F + _ + 1); he++) {
      const ve = (he + 0.5 - F) / _, Ye = (re + 0.5 - de) / _;
      Tl(ve, Ye) && X(he, re, !Tl(ve, Ye + 1 / _) || ra((Ye - 0.42) / 0.25) * 0.8 > ia(he, re) ? j : y.fill, y.o, Bc);
    }
  }), l.fogs.forEach((y) => {
    const _ = Math.floor(y.y / g), C = Math.max(_, Math.floor((y.y + 6 * Z) / g) - 1), F = Math.floor(y.x / f), de = Math.floor((y.x + y.w) / f);
    for (let j = _; j <= C; j++) for (let re = F; re <= de; re++) {
      const he = (re - F) / Math.max(1, de - F);
      X(re, j, y.c, y.a * (he < 0.25 ? he / 0.25 : he > 0.75 ? (1 - he) / 0.25 : 1), 0);
    }
  });
  const z = Math.max(2, Math.round(9 / g));
  l.drops.forEach((y) => {
    const _ = y.x / f, C = Math.floor(y.y / g);
    for (let F = 0; F < z; F++) X(Math.floor(_ - 0.208 * F * g / f), C + F, R.rain, y.o, Pc);
  });
  const Be = Math.max(0, Math.round(4.4 / f / 2.6));
  return l.flakes.forEach((y) => {
    const _ = Math.floor(y.x / f), C = Math.floor(y.y / g);
    X(_, C, R.snow, y.o, oa);
    for (let F = 1; F <= Be; F++)
      X(_ - F, C, R.snow, y.o, oa), X(_ + F, C, R.snow, y.o, oa), X(_, C - F, R.snow, y.o, oa), X(_, C + F, R.snow, y.o, oa);
  }), l.bolts.forEach((y) => {
    if (f <= 3.5)
      for (let _ = Math.floor(y.y / g); _ <= (y.y + 24) / g; _++) for (let C = Math.floor(y.x / f); C <= (y.x + 11) / f; C++)
        $d(Yu, (C + 0.5) * f - y.x, (_ + 0.5) * g - y.y) && X(C, _, R.sun, 1, Br);
    else {
      const _ = Math.round(y.x / f), C = Math.round(y.y / g);
      Zu.forEach((F, de) => F.split("").forEach((j, re) => {
        j === "#" && X(_ + re, C + de, R.sun, 1, Br);
      }));
    }
  }), { col: V, ids: q };
}
function $u(a, l) {
  const i = l.px, d = Math.max(6, Math.round(l.width / i)), f = Math.max(6, Math.round(l.height / i)), g = l.width / d, b = l.height / f, E = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, x = (Y) => {
    const J = Qd(Y, l);
    return Ku(J, eu(J, { clock: E, ambient: l.ambient, seed: l.seed }), d, f, g, b, E, l.ambient);
  }, R = x(a), me = l.reveal == null ? 1 : ra(l.reveal);
  let ne = R.col, U = R.ids;
  if (me < 1) {
    const Y = l.prev ? x(l.prev) : null, J = me * (d + 12);
    ne = new Array(d * f), U = new Uint8Array(d * f);
    for (let Z = 0; Z < d * f; Z++) {
      const V = Z % d, q = Z / d | 0;
      (l.reduce ? me : ra((J - V) / 12)) > ia(V, q) ? (ne[Z] = R.col[Z], U[Z] = R.ids[Z]) : Y ? (ne[Z] = Y.col[Z], U[Z] = Y.ids[Z]) : (ne[Z] = null, U[Z] = 255);
    }
  }
  return Jd(ne, U, d, f, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function Xu(a, l, i) {
  const d = i.width, f = i.height, g = i.reveal == null ? 1 : ra(i.reveal), b = (U, Y) => {
    const J = Qd(Y, i);
    Ju(U, J, eu(J, i));
  };
  if (a.clearRect(0, 0, d, f), g >= 1) {
    b(a, l);
    return;
  }
  if (i.prev && b(a, i.prev), i.reduce) {
    a.save(), a.globalAlpha = g, b(a, l), a.restore();
    return;
  }
  const E = a.canvas, x = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (x.width !== E.width || x.height !== E.height) && (x.width = E.width, x.height = E.height);
  const R = x.getContext("2d");
  R.setTransform(a.getTransform()), R.clearRect(0, 0, d, f), b(R, l);
  const me = g * (d + 64) - 64, ne = R.createLinearGradient(me, 0, me + 64, 0);
  ne.addColorStop(0, "rgba(0,0,0,1)"), ne.addColorStop(1, "rgba(0,0,0,0)"), R.globalCompositeOperation = "destination-in", R.fillStyle = ne, R.fillRect(0, 0, d, f), R.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(x, 0, 0), a.restore();
}
function Ju(a, l, i) {
  const { W: d, H: f, S: g, C: b, cw: E, yb: x, glowAt: R, soft: me, tw: ne, sy: U } = l, Y = (P, Ee) => {
    const z = Ml(P);
    return "rgba(" + z[0] + "," + z[1] + "," + z[2] + "," + Math.max(0, Math.min(1, Ee)).toFixed(3) + ")";
  }, J = (P, Ee) => {
    const z = a.createLinearGradient(0, 0, d, 0);
    z.addColorStop(0, P[0]);
    for (let Be = 0; Be < P.length - 1; Be++) {
      const y = (Be + Ee) * E, _ = (y - ne / 2) / d, C = (y + ne / 2) / d;
      _ > 0 && _ < 1 && z.addColorStop(_, P[Be]), C > 0 && C < 1 && z.addColorStop(C, P[Be + 1]);
    }
    return z.addColorStop(1, P[P.length - 1]), z;
  }, Z = Math.max(24, Math.ceil(d / 4)), V = (P, Ee) => {
    a.beginPath();
    for (let z = 0; z <= Z; z++) {
      const Be = d * z / Z, y = P == null ? 0 : x(Be) + P;
      z ? a.lineTo(Be, y) : a.moveTo(Be, y);
    }
    for (let z = Z; z >= 0; z--) {
      const Be = d * z / Z;
      a.lineTo(Be, x(Be) + Ee);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = J(g.filter((P) => !P.night).map((P) => P.sky), 0.75), a.fillRect(0, 0, d, f);
  const q = a.createLinearGradient(0, 0, d, 0);
  for (let P = 0; P <= 64; P++) {
    const Ee = R(d * P / 64);
    q.addColorStop(P / 64, Y(Ee.c, Math.min(1, Ee.a)));
  }
  a.fillStyle = q;
  for (let P = 0; P < 8; P++)
    a.globalAlpha = 1 - P / 8, V(P * 2 * U, (P + 1) * 2 * U);
  a.fillStyle = J(g.filter((P) => P.night).map((P) => P.sky), 1.25);
  const ce = Math.max(0.5, me), X = 6;
  a.globalAlpha = 1, V(null, -ce);
  for (let P = 0; P < X; P++)
    a.globalAlpha = 1 - (P + 0.5) / X, V(-ce + 2 * ce * P / X, -ce + 2 * ce * (P + 1) / X);
  a.globalAlpha = 1;
  const fe = new Path2D(Gu), $ = new Path2D(Vu), M = new Path2D(zu), B = new Path2D(Uu);
  a.fillStyle = b.star, i.stars.forEach((P) => {
    a.globalAlpha = P.o, P.big ? (a.save(), a.translate(P.x, P.y), a.scale(P.size, P.size), a.fill(fe), a.restore()) : (a.beginPath(), a.arc(P.x, P.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const we = $t(b.sun, "#ffffff", 0.55);
  i.suns.forEach((P) => {
    const Ee = a.createRadialGradient(P.x, P.y, 0, P.x, P.y, P.halo);
    Ee.addColorStop(0, Y(we, 0.42)), Ee.addColorStop(0.7, Y(we, 0)), a.fillStyle = Ee, a.beginPath(), a.arc(P.x, P.y, P.halo, 0, Math.PI * 2), a.fill();
    const z = a.createLinearGradient(0, P.y - P.rad, 0, P.y + P.rad);
    z.addColorStop(0.6, b.sun), z.addColorStop(1, b.sunEdge), a.fillStyle = z, a.beginPath(), a.arc(P.x, P.y, P.rad, 0, Math.PI * 2), a.fill();
  });
  const Ce = $t(b.moon, "#ffffff", 0.6);
  i.moons.forEach((P) => {
    a.save(), a.translate(P.x - P.d / 2, P.y - P.d / 2), a.scale(P.d / 46, P.d / 46);
    const Ee = a.createLinearGradient(0, 6, 0, 40);
    Ee.addColorStop(0, Ce), Ee.addColorStop(1, b.moon), a.fillStyle = Ee, a.fill($), a.restore();
  }), i.clouds.forEach((P) => {
    a.save(), a.globalAlpha = P.o, a.translate(P.x, P.y), a.scale(P.w / 46, P.h / 30.66), a.translate(-4, -9.67), a.fillStyle = P.fill, a.fill(M), a.restore();
  }), i.fogs.forEach((P) => {
    const Ee = a.createLinearGradient(P.x, 0, P.x + P.w, 0);
    Ee.addColorStop(0, Y(P.c, 0)), Ee.addColorStop(0.25, Y(P.c, P.a)), Ee.addColorStop(0.75, Y(P.c, P.a)), Ee.addColorStop(1, Y(P.c, 0)), a.fillStyle = Ee, a.fillRect(P.x, P.y, P.w, 6 * U);
  }), a.fillStyle = b.rain, i.drops.forEach((P) => {
    a.save(), a.globalAlpha = P.o, a.translate(P.x, P.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = b.snow, i.flakes.forEach((P) => {
    a.globalAlpha = P.o, a.beginPath(), a.arc(P.x, P.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = b.sun, i.bolts.forEach((P) => {
    a.save(), a.globalAlpha = P.o, a.translate(P.x, P.y), a.fill(B), a.restore();
  }), a.restore();
}
function Qu(a, l) {
  var Gc, Uc, Yc, Zc, Kc, $c, Xc;
  const i = (t) => a.getElementById(t), d = i("workoutView"), f = i("workoutNameInput");
  let g = !0;
  const b = i("homeClock");
  function E() {
    b && (b.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  E(), setInterval(E, 15e3);
  const x = i("createFlow"), R = i("createMovementsSlot"), me = i("createTimingSlot"), ne = i("createFinishSlot"), U = i("movementStepSummary"), Y = i("timingStepSummary"), J = i("finishStepSummary"), Z = i("continueToTiming"), V = i("continueToFinish"), q = i("finishMoveButton");
  let ce = !1, X = [];
  function fe(t) {
    !t || X.some((r) => r.node === t) || X.push({ node: t, parent: t.parentNode, next: t.nextSibling });
  }
  function $(t, r) {
    t && (fe(t), r.appendChild(t));
  }
  function M() {
    [...X].reverse().forEach(({ node: t, parent: r, next: s }) => {
      r && (s && s.parentNode === r ? r.insertBefore(t, s) : r.appendChild(t));
    }), X = [];
  }
  function B(t) {
    a.querySelectorAll(".createStep").forEach((r) => {
      r.classList.toggle("active", r.dataset.createStep === t);
    }), t === "timing" && (ce = !0), we();
  }
  function we() {
    var se, pe;
    if (!mt) return;
    Ue[bt];
    const t = ot.filter((te) => !te.hidden), r = t.filter((te) => te.kind !== "rest").length, s = t.filter((te) => te.kind === "rest").length;
    U.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const u = r > 0, m = a.querySelector('[data-open-step="timing"]'), T = a.querySelector('[data-open-step="finish"]');
    m.disabled = !u, Z.disabled = !u, Y.textContent = u ? yn(_.value) + " · " + Jt(C.value) + " movement · " + Jt(F.value) + " rest" : "Add a movement first", T.disabled = !(u && ce);
    const H = ((f == null ? void 0 : f.value) || "").trim(), W = [];
    (se = i("includeWarmupPreset")) != null && se.checked && W.push("warm-up"), (pe = i("includeCooldownPreset")) != null && pe.checked && W.push("cooldown"), J.textContent = H ? H + (W.length ? " · " + W.join(" + ") : "") : W.length ? W.join(" + ") : "Name and optional extras";
  }
  function Ce() {
    var Ae, Je, Pe;
    x.hidden = !1, ce = !1;
    const t = a.querySelector(".editNameRow"), r = i("createMoveOptions"), s = a.querySelector(".timeTiles"), u = i("routineSummaryModal"), m = a.querySelector(".tempoRevealRow"), T = i("tempoExperiment"), H = (Ae = i("warmupList")) == null ? void 0 : Ae.closest("section"), W = i("movementCreatorLaunch"), se = i("movementCreator"), pe = (Je = i("strengthList")) == null ? void 0 : Je.closest("section"), te = (Pe = i("cooldownList")) == null ? void 0 : Pe.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), H, W, se, pe, te].forEach((Te) => Te && $(Te, R)), [r, s, u, m, T].forEach((Te) => $(Te, me)), $(t, ne), B("movements"), we();
  }
  function P() {
    M(), x.hidden = !0, a.querySelectorAll(".createStep").forEach((t) => t.classList.remove("active"));
  }
  a.querySelectorAll("[data-open-step]").forEach((t) => t.addEventListener("click", () => {
    t.disabled || B(t.dataset.openStep);
  })), Z.addEventListener("click", () => {
    Z.disabled || B("timing");
  }), V.addEventListener("click", () => B("finish")), q.addEventListener("click", () => i("saveWorkoutEdit").click());
  const Ee = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, z = i("homeNav"), Be = i("settingsNav");
  function y(t) {
    Object.entries(Ee).forEach(([r, s]) => s.classList.toggle("active", r === t)), z.classList.toggle("active", t === "home"), Be.classList.toggle("active", t === "settings"), t === "home" && setTimeout(rr, 400), t === "settings" && (requestAnimationFrame(() => zi(a.querySelector(".tab.active"), !1)), si());
  }
  const _ = i("totalTime"), C = i("workTime"), F = i("restTime"), de = i("totalOut"), j = i("workOut"), re = i("restOut"), he = i("totalFill"), ve = i("workFill"), Ye = i("restFill"), ct = i("roundsInput"), At = i("roundsFill"), sn = i("roundsOut"), Gn = i("totalLabel"), ht = i("routineSummaryModal"), Qe = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let St = Qe.map((t) => ({ ...t })), ot = [
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
  const vn = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let En = vn.map((t) => ({ ...t }));
  const Ji = {
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
  }, ft = bo(l.data), Ue = ft.profiles;
  let bt = Ue[ft.selected] ? ft.selected : ft.order.find((t) => Ue[t]) || "kettlebell";
  function bo(t) {
    const r = t && typeof t == "object" ? JSON.parse(JSON.stringify(t)) : {}, s = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(Ji)), u = (Array.isArray(r.order) ? r.order : Object.keys(s)).filter((m) => s[m]);
    return Object.keys(s).forEach((m) => {
      u.includes(m) || u.push(m);
    }), {
      v: 1,
      profiles: s,
      order: u,
      selected: r.selected || u[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : Qi(r.energy)).map(wi),
      settings: { ...r.settings || {} }
    };
  }
  function Qi(t) {
    if (!Array.isArray(t)) return [];
    const r = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return t.forEach((u) => {
      const m = new Date(u.at);
      if (isNaN(m)) return;
      const T = m.getFullYear() + "-" + String(m.getMonth() + 1).padStart(2, "0") + "-" + String(m.getDate()).padStart(2, "0"), H = m.getHours() < 14 ? "morning" : "evening";
      if (s.some((se) => se.date === T && se.slot === H)) return;
      const W = r.indexOf(u.value) + 1;
      W > 0 && s.push({ date: T, slot: H, mood: null, energy: W, at: u.at });
    }), s;
  }
  function wi(t) {
    if (t.scale === 100) return t;
    const r = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...t, mood: r(t.mood), energy: r(t.energy), scale: 100 };
  }
  function bn() {
    mt || (ft.selected = bt, ft.order = ft.order.filter((t) => Ue[t] && t !== Ct), l.save(ft));
  }
  function tt() {
    return ft.settings;
  }
  function Un(t) {
    const r = Ue[t];
    if (!r) return;
    bt = t;
    const s = i("workoutNameInput");
    if (s && (s.value = r.name), _.value = r.total, C.value = r.work, F.value = r.rest, ct.value = r.rounds || 1, r.customSequence) {
      const u = (r.sequence || []).map((T) => ({ ...T })), m = (T) => u.filter((H) => H.presetRole === T).map(({ presetRole: H, ...W }) => W);
      St = (r.warmup || m("warmup")).map((T) => ({ ...T })), En = (r.cooldown || m("cooldown")).map((T) => ({ ...T })), ot = u.filter((T) => !T.presetRole), Ko(r.preset || "movement", !1);
    } else
      _.min = 3, _.max = 40, _.step = 1, C.min = 20, C.max = 60, C.step = 5, F.min = 5, F.max = 30, F.step = 5, St = (r.warmup || Qe).map((u) => ({ ...u })), En = (r.cooldown || vn).map((u) => ({ ...u })), ot = r.strength.map((u) => Array.isArray(u) ? (([m, T, H, W = !1]) => ({ id: m, name: T, group: H, kind: "work", hidden: !!W }))(u) : { ...u });
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === t)), Mt();
  }
  function er(t, r, s) {
    const u = t.getBoundingClientRect(), m = u.width / 2, T = u.height / 2, H = r - m, W = s - T;
    let se = 1 / 0, pe = 1 / 0;
    H !== 0 && (se = m / Math.abs(H)), W !== 0 && (pe = T / Math.abs(W));
    const te = Math.min(Math.max(1 / Math.min(se, pe), 0), 1);
    let ee = Math.atan2(W, H) * (180 / Math.PI) + 90;
    return ee < 0 && (ee += 360), { edge: te, angle: ee };
  }
  function kt(t, r, s = !1) {
    const u = t.getBoundingClientRect(), m = r.clientX - u.left, T = r.clientY - u.top, { edge: H, angle: W } = er(t, m, T), se = s ? 100 : H * 100;
    t.style.setProperty("--edge-proximity", se.toFixed(3)), t.style.setProperty("--cursor-angle", W.toFixed(3) + "deg"), t.classList.toggle("borderGlowActive", s || se >= 30);
  }
  function De(t) {
    t.addEventListener("pointermove", (s) => kt(t, s, !1)), t.addEventListener("pointerenter", (s) => kt(t, s, !1)), t.addEventListener("pointerdown", (s) => kt(t, s, !0));
    const r = () => {
      t.classList.remove("borderGlowActive"), t.style.setProperty("--edge-proximity", "0");
    };
    t.addEventListener("pointerleave", r), t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r);
  }
  De(i("addWorkoutPanel"));
  let mt = !1, Ct = null;
  function Ge(t) {
    return String(t ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function wo(t) {
    return t.summary ? t.summary : t.customSequence ? yn(t.total) + " · custom move" : yn(t.total) + " · " + Jt(t.work) + " / " + Jt(t.rest) + " · warm-up + cooldown";
  }
  function Uo(t, r) {
    var T;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = t, s.tabIndex = 0;
    const u = r.activityCount ?? (((T = r.sequence) == null ? void 0 : T.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Ge(r.name) + '</div><div class="sub">' + Ge(wo(r)) + '</div><span class="sourceTag">' + Ge(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (u ? u + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Ge(r.name) + "</div></div>";
    const m = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(s, m), De(s), s.addEventListener("click", (H) => {
      H.target.closest("button") || Un(t);
    }), s.addEventListener("keydown", (H) => {
      (H.key === "Enter" || H.key === " ") && !H.target.closest("button") && (H.preventDefault(), Un(t));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (H) => {
      H.stopPropagation(), Un(t), Ur(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (H) => {
      H.stopPropagation(), Un(t), Ws();
    }), s;
  }
  function tr() {
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.remove()), ft.order.forEach((t) => {
      Ue[t] && Uo(t, Ue[t]);
    }), a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.classList.toggle("active", t.dataset.workout === bt));
  }
  tr(), i("addWorkoutPanel").addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && (t.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
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
    }, Un(Ct), Ur(!0);
  });
  let je = [], Xe = 0, wn = 0, Ka = 1, Yn = !1, Xt = null, xo = null, Ft = !1, xn = ft.settings.upcomingCount ?? "all", Yo = "movement";
  function Dn(t, r, s) {
    return (Number(t) - r) / (s - r) * 100;
  }
  function Jt(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function yn(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function la() {
    he.style.width = Dn(_.value, Number(_.min), Number(_.max)) + "%", ve.style.width = Dn(C.value, Number(C.min), Number(C.max)) + "%", Ye.style.width = Dn(F.value, Number(F.min), Number(F.max)) + "%", j.textContent = Jt(C.value), re.textContent = Jt(F.value);
    const t = Number(ct.value) || 1;
    At.style.width = Dn(t, 1, 10) + "%", Gn.textContent = t > 1 ? "Time per round" : "Total time";
  }
  function yo(t) {
    return t.filter((r) => !r.hidden);
  }
  function zt(t) {
    const r = Math.max(0, Math.round(Number(t) || 0)), s = Math.floor(r / 3600), u = Math.floor(r % 3600 / 60), m = r % 60;
    return (s ? s + ":" + String(u).padStart(2, "0") : u) + ":" + String(m).padStart(2, "0");
  }
  function Zo(t) {
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
      const se = W.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return se ? (Number(se[1]) || 0) * 3600 + (Number(se[2]) || 0) * 60 + (Number(se[3]) || 0) : 0;
    }, T = m(r.searchParams.get("t") || r.searchParams.get("start")), H = m(r.searchParams.get("end"));
    return { id: u, start: T, end: H > T ? H : null };
  }
  function Zn(t, r) {
    if (t.useVideoLength === !1) return Math.max(5, Number(t.duration) || r || 300);
    const s = Number(t.start) || 0, u = Number(t.end) || Number(t.videoDuration) || 0;
    return u > s ? Math.round(u - s) : Number(t.duration) || 300;
  }
  function ca(t, r) {
    const s = Math.max(0, Number(t) || 0);
    return Math.round(r === "hour" ? s * 3600 : r === "min" ? s * 60 : s);
  }
  function Ko(t, r = !0) {
    Yo = t, a.querySelectorAll(".createPresetBtn").forEach((u) => u.classList.toggle("active", u.dataset.movePreset === t));
    const s = Ue[bt];
    s && (s.preset = t), t === "work" ? (_.min = 30, _.max = 480, _.step = 30, C.min = 300, C.max = 7200, C.step = 300, F.min = 60, F.max = 1800, F.step = 60, r && (_.value = 60, C.value = 1500, F.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (_.min = 3, _.max = 40, _.step = 1, C.min = 20, C.max = 60, C.step = 5, F.min = 5, F.max = 30, F.step = 5, r && (_.value = 20, C.value = 45, F.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), la();
  }
  function xi(t, r) {
    const s = Yo === "work";
    return t.map((u, m) => ({ ...u, id: r + "-" + m + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(C.value) }));
  }
  function Ha() {
    const t = Ue[bt];
    t != null && t.customSequence && (t.includeWarmup = i("includeWarmupPreset").checked, t.includeCooldown = i("includeCooldownPreset").checked, t.includeWarmup && !St.length && (St = xi(Qe, "warm")), t.includeCooldown && !En.length && (En = xi(vn, "cool")), Mt());
  }
  function Fa() {
    const t = i("upcomingCountSetting");
    if (!t) return;
    const r = Math.max(1, je.length - 1), s = xn;
    t.innerHTML = "";
    for (let T = 1; T <= r; T++) {
      const H = document.createElement("option");
      H.value = String(T), H.textContent = String(T), t.appendChild(H);
    }
    const u = document.createElement("option");
    u.value = "all", u.textContent = "All", t.appendChild(u);
    const m = s === "all" ? "all" : String(Math.min(Number(s) || 1, r));
    t.value = m, xn = m === "all" ? "all" : Number(m);
  }
  function Mt() {
    Number(_.value) * 60;
    const t = Number(C.value), r = Number(F.value), s = Ue[bt], u = !!(s != null && s.customSequence), m = (u ? !s.includeWarmup : s != null && s.warmupOff) ? [] : yo(St), T = yo(ot), H = u && !s.includeCooldown ? [] : yo(En);
    if (s && (s.total = Number(_.value), s.work = t, s.rest = r, s.rounds = Number(ct.value) || 1, s.customSequence ? (s.sequence = ot.map((Se) => ({ ...Se })), s.warmup = St.map((Se) => ({ ...Se })), s.cooldown = En.map((Se) => ({ ...Se }))) : (s.strength = ot.map((Se) => ({ ...Se })), s.warmup = St.map((Se) => ({ ...Se })), s.cooldown = En.map((Se) => ({ ...Se })))), s != null && s.customSequence) {
      const Se = [...m.map((dt) => ({ ...dt, section: "warmup" })), ...T, ...H.map((dt) => ({ ...dt, section: "cooldown" }))].map((dt) => {
        if (dt.kind === "video") return { ...dt, duration: Zn(dt, t), rest: 0 };
        if (dt.kind === "rest") {
          const pn = dt.useGlobalTiming === !0 ? r : Number(dt.duration) || r;
          return { ...dt, duration: pn, rest: 0 };
        }
        const un = dt.useGlobalTiming === !1 && Number(dt.duration) || t;
        return { ...dt, duration: un, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (je = [], Se.forEach((dt, un) => {
        je.push(dt);
        const pn = Se[un + 1];
        dt.kind !== "rest" && pn && pn.kind !== "rest" && je.push({
          id: "auto-rest-" + un,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : je = Se;
    } else
      je = [...m.map((Se) => ({ ...Se, section: "warmup" })), ...T, ...H.map((Se) => ({ ...Se, section: "cooldown" }))].map((Se) => Se.kind === "video" ? { ...Se, duration: Zn(Se, t), rest: 0 } : Se.kind === "rest" ? { ...Se, duration: Se.useGlobalTiming === !0 ? r : Number(Se.duration) || r, rest: 0 } : { ...Se, duration: Se.useGlobalTiming === !1 && Number(Se.duration) || t, rest: r }), je.forEach((Se, dt) => {
        var un;
        ((un = je[dt + 1]) == null ? void 0 : un.kind) === "rest" && (Se.rest = 0);
      }), je.length && (je[je.length - 1].rest = 0);
    const W = Math.max(1, Math.min(10, Number(ct.value) || 1)), se = je, pe = (Se) => W <= 1 ? null : Se.section === "warmup" || Se.presetRole === "warmup" ? "first" : Se.section === "cooldown" || Se.presetRole === "cooldown" ? "last" : Se.kind === "video" && (Se.videoRounds === "first" || Se.videoRounds === "last") ? Se.videoRounds : null, te = (Se) => !!pe(Se), ee = se.filter((Se) => !te(Se)), Ae = se.filter(te), Je = ee.length, Pe = ee.reduce((Se, dt) => Se + dt.duration + dt.rest, 0), Te = Ae.reduce((Se, dt) => Se + dt.duration + dt.rest, 0), Me = [
      Ae.some((Se) => Se.section === "warmup" || Se.presetRole === "warmup") && "warm-up",
      Ae.some((Se) => Se.section === "cooldown" || Se.presetRole === "cooldown") && "cooldown",
      Ae.some((Se) => Se.kind === "video" && !Se.section && !Se.presetRole) && "video"
    ].filter(Boolean), gt = Me.length > 1 ? Me.slice(0, -1).join(", ") + " & " + Me[Me.length - 1] : Me[0] || "";
    je = [];
    const vt = (Se, dt) => {
      const un = pe(Se);
      return !un || (un === "first" ? dt === 1 : dt === W);
    };
    for (let Se = 1; Se <= W; Se++)
      if (se.filter((dt) => vt(dt, Se)).forEach((dt, un) => je.push({ ...dt, id: dt.id + (W > 1 ? "-r" + Se : ""), round: Se, roundIndex: un })), Se < W && Je)
        if (s != null && s.customSequence)
          je.push({ id: "round-break-" + Se, name: "Rest", group: "Round " + (Se + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: Se, roundIndex: Je, roundBreak: !0 });
        else {
          const dt = je[je.length - 1];
          dt.rest = r, dt.roundBreakAfter = !0;
        }
    la();
    const Fe = je.reduce((Se, dt) => Se + dt.duration + dt.rest, 0), yt = Math.round(Pe / 60), Et = Math.round(Fe / 60), lt = W > 1 ? yn(yt) + " × " + W + " rounds" + (Te ? " + " + Jt(Te) + " " + gt : "") + " (" + yn(Et) + ")" : yn(Et), at = [m.length ? "warm-up" : "", H.length ? "cooldown" : ""].filter(Boolean), rn = s != null && s.customSequence ? lt + " · " + Je + " items" + (at.length && !(W > 1 && Te) ? " · " + at.join(" + ") : "") : lt + " · " + Jt(t) + " / " + Jt(r) + (at.length && !(W > 1 && Te) ? " · " + at.join(" + ") : "");
    de.textContent = Jt(Pe);
    const _n = je.filter((Se) => !Se.roundBreak).length, Vt = W > 1 ? _n + " activities · " + W + " rounds" : Je + " activities";
    sn.textContent = W > 1 ? W + " rounds · " + yn(Et) + " total" : "1 round", i("roundsCount").textContent = W, a.querySelectorAll("[data-rounds-step]").forEach((Se) => {
      Se.disabled = Number(Se.dataset.roundsStep) < 0 ? W <= 1 : W >= 10;
    }), s && (s.summary = rn, s.activityCount = Je);
    const fi = a.querySelector(".workoutPanel.active .sub");
    fi && (fi.textContent = rn), ht.textContent = rn, Pr(), a.querySelectorAll(".workoutPanel.active .activityCount").forEach((Se) => Se.textContent = Vt), la(), Ie(), Hr(), Si(), Fa(), mt && we(), Ee.workout.classList.contains("active") && !Xt && Fi();
  }
  const $a = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', ln = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', Sa = {
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
  }, wt = (t) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Sa[t] || "") + "</svg>";
  a.querySelectorAll("[data-icon]").forEach((t) => {
    t.innerHTML = wt(t.dataset.icon);
  });
  let k = null, A = null;
  function O(t) {
    return t = Math.max(1, Number(t) || 0), t >= 3600 && t % 3600 === 0 ? { value: t / 3600, unit: "hour" } : t >= 60 && t % 60 === 0 ? { value: t / 60, unit: "min" } : { value: t, unit: "sec" };
  }
  function G(t = !1) {
    const r = a.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), t && r.select());
  }
  function Q(t, r, s = {}) {
    const u = t.kind === "rest", m = t.kind === "video", T = m ? t.useVideoLength !== !1 : u ? t.useGlobalTiming === !0 : t.useGlobalTiming !== !1, H = Number(u ? F.value : C.value), W = O(m ? t.useVideoLength === !1 ? t.duration : Zn({ ...t, useVideoLength: !0 }) : T ? H : t.duration || H), se = m && (Number(t.videoDuration) > 0 || Number(t.end) > 0), pe = m ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Ge(t.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ge(t.autoName ? "" : t.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Fe, yt]) => '<option value="' + Fe + '"' + ((t.videoRounds || "every") === Fe ? " selected" : "") + ">" + yt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ge(t.name) + '" placeholder="' + (u ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Ge(t.group) + '" placeholder="' + (u ? "Rest" : "e.g. Glutes + legs") + '"></label>', te = m ? "Play the whole " + (Number(t.start) > 0 || Number(t.end) > 0 ? "clip" : "video") + (se ? " · " + zt(Zn({ ...t, useVideoLength: !0 })) : "") : "Use global timing · " + Jt(H), ee = document.createElement("div");
    ee.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), ee.dataset.index = r, ee.dataset.id = t.id;
    const Ae = s.isNew ?? (A == null ? void 0 : A.item) === t, Je = s.sheet ? '<div class="moveEditActions sheetActions">' + (Ae ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (t.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Ge(t.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Ae ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    ee.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (m ? " videoFields" : "") + '">' + pe + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (T ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Ge(te) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + W.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Fe) => '<option value="' + Fe + '"' + (Fe === W.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Fe] + "</option>").join("") + "</select></div></div>" + Je + "</div>";
    const Pe = (Fe) => ee.querySelector("[data-f=" + Fe + "]"), Te = () => {
      const Fe = Pe("global").checked;
      Pe("dur").disabled = Fe, Pe("unit").disabled = Fe, ee.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Fe);
    };
    Pe("global").addEventListener("change", Te), Te();
    const Me = () => {
      var Fe;
      if (s.sheet) {
        (Fe = s.onCancel) == null || Fe.call(s);
        return;
      }
      Ae && Le(), k = null, Mt();
    }, gt = () => {
      var Et;
      if (m) {
        vt();
        return;
      }
      const Fe = Pe("name").value.trim();
      if (!Fe) {
        Pe("name").focus();
        return;
      }
      t.name = Fe, t.group = Pe("group").value.trim() || (u ? "Rest" : "Movement");
      const yt = Pe("global").checked;
      if (t.useGlobalTiming = yt, yt || (t.duration = Math.max(u ? 5 : 1, ca(Pe("dur").value, Pe("unit").value))), s.sheet) {
        (Et = s.onSaved) == null || Et.call(s);
        return;
      }
      Ae && (A = null), k = null, Mt(), Ot(Ae ? u ? "Rest added" : "Movement added" : "Movement updated");
    }, vt = () => {
      var at;
      const Fe = Pe("url").value.trim(), yt = Zo(Fe);
      if (!yt) {
        Pe("urlError").hidden = !1, Pe("url").classList.add("invalid"), Pe("url").focus();
        return;
      }
      const Et = yt.id !== t.videoId;
      t.url = Fe, t.videoId = yt.id, t.start = yt.start, t.end = yt.end, Et && (t.videoDuration = null, t.videoError = null);
      const lt = Pe("name").value.trim();
      t.autoName = !lt, t.name = lt || (Et ? "" : t.name) || t.videoTitle || "YouTube video", t.group = "Video", t.videoRounds = Pe("rounds").value, t.useVideoLength = Pe("global").checked, t.useVideoLength || (t.duration = Math.max(5, ca(Pe("dur").value, Pe("unit").value))), s.sheet ? (at = s.onSaved) == null || at.call(s) : (Ae && (A = null), k = null, Mt(), Ot(Ae ? "Video added" : "Video updated")), (Et || !t.videoDuration || t.autoName && !t.videoTitle) && Us(t);
    };
    if (m && Pe("url").addEventListener("input", () => {
      Pe("urlError").hidden = !0, Pe("url").classList.remove("invalid");
    }), ee.querySelector("[data-a=cancel]").addEventListener("click", Me), ee.querySelector("[data-a=save]").addEventListener("click", gt), s.sheet && !Ae) {
      ee.querySelector("[data-a=hide]").addEventListener("click", () => {
        var yt;
        return (yt = s.onHide) == null ? void 0 : yt.call(s);
      });
      const Fe = ee.querySelector("[data-a=remove]");
      ji(Fe, Fe.querySelector(".removeFill"), 1200, () => {
        var yt;
        return (yt = s.onRemove) == null ? void 0 : yt.call(s);
      });
    }
    return ee.addEventListener("keydown", (Fe) => {
      Fe.key === "Escape" && (Fe.preventDefault(), Fe.stopPropagation(), Me()), Fe.key === "Enter" && Fe.target.matches("input") && (Fe.preventDefault(), gt());
    }), ee;
  }
  function le(t, r) {
    const s = i(r);
    s.innerHTML = "", t.forEach((u, m) => {
      if (u === k && !Kn()) {
        s.appendChild(Q(u, m));
        return;
      }
      const T = document.createElement("div");
      T.className = "moveRow" + (u.hidden ? " hidden" : "") + (u.kind === "rest" ? " restItem" : "") + (u.kind === "video" ? " videoItem" : "") + (Gi(u) ? " noMeta" : ""), T.dataset.index = m, T.dataset.id = u.id;
      const H = u.kind === "rest" ? u.useGlobalTiming === !0 ? "Global timing" : Jt(u.duration) : u.useGlobalTiming === !1 ? Jt(u.duration) : "Global timing", W = u.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", se = u.kind === "video" ? u.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (u.useVideoLength === !1 ? "stops after " + Jt(u.duration) : Number(u.videoDuration) > 0 || Number(u.end) > 0 ? zt(Zn(u)) : "plays to the end") + (u.videoRounds === "first" ? " · first round only" : u.videoRounds === "last" ? " · last round only" : "") : u.group + " · " + H, pe = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Ge(u.name) + '. Drag, or use the up and down arrow keys">' + $a + "</button>", te = '<div class="moveText"><div class="moveItemName">' + Ge(u.name) + W + '</div><div class="moveMeta">' + Ge(se) + "</div></div>", ee = (Pe) => Pe.addEventListener("keydown", (Te) => {
        var vt, Fe;
        if (Te.key !== "ArrowUp" && Te.key !== "ArrowDown") return;
        Te.preventDefault();
        const Me = t.indexOf(u), gt = Me + (Te.key === "ArrowUp" ? -1 : 1);
        gt < 0 || gt >= t.length || (t.splice(Me, 1), t.splice(gt, 0, u), Mt(), (Fe = (vt = i(r).children[gt]) == null ? void 0 : vt.querySelector(".dragHandle")) == null || Fe.focus());
      });
      if (Kn()) {
        T.classList.add("phoneRow"), T.tabIndex = 0, T.setAttribute("role", "button"), T.setAttribute("aria-label", "Edit " + (u.name || "step")), T.innerHTML = pe + te + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Pe = T.querySelector(".dragHandle");
        Pe.addEventListener("pointerdown", (Te) => ge(Te, T, s, t)), ee(Pe), T.addEventListener("click", (Te) => {
          Te.target.closest(".dragHandle") || Xa(u, t);
        }), T.addEventListener("keydown", (Te) => {
          Te.key === "Enter" && Te.target === T && (Te.preventDefault(), Xa(u, t));
        }), s.appendChild(T);
        return;
      }
      T.innerHTML = pe + te + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Ge(u.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (u.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Ge(u.name) + '"><span class="removeFill"></span><span class="removeLabel">' + ln + "</span></button></div>", T.querySelector(".editBtn").addEventListener("click", () => {
        Le(), k = u, Mt(), G();
      }), T.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        u.hidden = !u.hidden, Mt();
      });
      const Ae = T.querySelector(".removeBtn");
      ji(Ae, Ae.querySelector(".removeFill"), 1200, () => {
        const Pe = t.indexOf(u);
        Pe < 0 || (t.splice(Pe, 1), Mt(), Ot("Removed " + u.name, { label: "Undo", run: () => {
          t.splice(Math.min(Pe, t.length), 0, u), Mt();
        } }));
      });
      const Je = T.querySelector(".dragHandle");
      Je.addEventListener("pointerdown", (Pe) => ge(Pe, T, s, t)), ee(Je), s.appendChild(T);
    });
  }
  const ue = () => {
    var t;
    return (t = window.matchMedia) == null ? void 0 : t.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, be = (t) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, t);
    } catch {
    }
  };
  function ge(t, r, s, u) {
    if (t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const m = t.currentTarget, T = t.pointerId, H = !ue();
    try {
      m.setPointerCapture(T);
    } catch {
    }
    const W = r.closest(".exerciseScroller") || _e(r), se = s.style.position;
    s.style.position = "relative";
    const pe = [...s.children].filter((ut) => ut.classList.contains("moveRow")), te = pe.indexOf(r), ee = parseFloat(getComputedStyle(s).rowGap) || 8, Ae = r.offsetHeight, Je = Ae + ee, Pe = pe.map((ut) => ut.offsetTop), Te = pe.map((ut) => ut.offsetHeight), Me = () => s.getBoundingClientRect().top, gt = s.getBoundingClientRect().width, vt = t.clientY - (Me() + Pe[te]), Fe = t.clientX;
    let yt = t.clientY, Et = t.clientX, lt = Me() + Pe[te], at = 0, rn = 0, _n = 0, Vt = 1, fi = 0, Se = te, dt = !1, un = 0, pn = !1, cl = !1, Lr = Pe[te];
    s.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", be(8);
    const dl = () => {
      const ut = yt - vt + Ae / 2 - Me();
      let Tt = 0;
      return pe.forEach((qt, ta) => {
        ta !== te && ut > Pe[ta] + Te[ta] / 2 && Tt++;
      }), Tt;
    }, ul = () => {
      pe.forEach((ut, Tt) => {
        if (Tt === te) return;
        const qt = te < Se && Tt > te && Tt <= Se ? -Je : te > Se && Tt >= Se && Tt < te ? Je : 0;
        ut.style.transform = qt ? "translateY(" + qt + "px)" : "";
      });
    }, gs = () => {
      const ut = s.getBoundingClientRect(), Tt = Math.abs(Et - Fe) > Math.max(80, gt * 0.3) || Et < ut.left - 24 || Et > ut.right + 24;
      Tt !== dt && (dt = Tt, r.classList.toggle("willReturn", Tt), be(Tt ? 10 : 4));
      const qt = dt ? te : dl();
      qt !== Se && (Se = qt, ul(), dt || be(4));
    }, mi = () => {
      if (Se === te) return Pe[te];
      const ut = pe.filter((qt, ta) => ta !== te);
      let Tt = Pe[0];
      for (let qt = 0; qt < Se; qt++) Tt += ut[qt].offsetHeight + ee;
      return Tt;
    }, Ar = () => {
      const ut = H ? Math.min(Math.abs(at) / 40, 1) : 0, Tt = H && !pn ? Math.max(-3, Math.min(3, _n * 0.6)) : 0;
      r.style.transform = "translate(" + rn.toFixed(2) + "px," + (lt - (Me() + Pe[te])).toFixed(2) + "px) rotate(" + Tt.toFixed(2) + "deg) scale(" + (Vt * (1 - 0.04 * ut)).toFixed(4) + "," + (Vt * (1 + 0.06 * ut)).toFixed(4) + ")";
    }, st = () => {
      un = requestAnimationFrame(st);
      const ut = Et - Fe, Tt = pn ? Me() + Lr : yt - vt, qt = pn ? 0 : dt ? ut * 0.9 : Math.max(-22, Math.min(22, ut * 0.22)), ta = pn ? 1 : dt ? 0.97 : 1.035;
      if (!H) {
        lt = Tt, rn = pn ? 0 : qt, Vt = 1, Ar(), pn && Ut();
        return;
      }
      const Au = pn ? 0.24 : 0.2, _u = pn ? 0.62 : 0.68;
      at = (at + (Tt - lt) * Au) * _u, lt += at, _n = (_n + (qt - rn) * 0.16) * 0.7, rn += _n, fi = (fi + (ta - Vt) * 0.22) * 0.6, Vt += fi, Ar(), pn && Math.abs(at) < 0.15 && Math.abs(Tt - lt) < 0.5 && Math.abs(rn) < 0.5 && Math.abs(Vt - 1) < 3e-3 && Ut();
    }, Rt = setInterval(() => {
      if (!W || pn) return;
      const ut = W.getBoundingClientRect(), Tt = 56, qt = yt < ut.top + Tt ? -10 : yt > ut.bottom - Tt ? 10 : 0;
      qt && (W.scrollTop += qt, gs());
    }, 30);
    function Ut() {
      if (cl) return;
      cl = !0, cancelAnimationFrame(un);
      const ut = Se !== te, Tt = r.dataset.id;
      if (s.classList.remove("reordering"), pe.forEach((ta) => {
        ta.style.transition = "none", ta.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), s.style.position = se, ut) {
        const [ta] = u.splice(te, 1);
        u.splice(Se, 0, ta);
      }
      Mt();
      const qt = Tt && s.querySelector('.moveRow[data-id="' + Tt + '"]');
      qt && H && qt.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), ut && Ot("Order saved");
    }
    const hn = (ut) => {
      if (ut.pointerId === T) {
        if (ut.pointerType === "mouse" && ut.buttons === 0) {
          Ma();
          return;
        }
        yt = ut.clientY, Et = ut.clientX, gs();
      }
    }, ea = (ut) => {
      ut.pointerId === T && Ma();
    };
    function Ma() {
      pn || (window.removeEventListener("pointermove", hn, !0), window.removeEventListener("pointerup", ea, !0), window.removeEventListener("pointercancel", ea, !0), m.removeEventListener("lostpointercapture", Ma), clearInterval(Rt), dt && Se !== te && (Se = te, ul()), Lr = mi(), pn = !0, be(6), setTimeout(Ut, 800));
    }
    window.addEventListener("pointermove", hn, !0), window.addEventListener("pointerup", ea, !0), window.addEventListener("pointercancel", ea, !0), m.addEventListener("lostpointercapture", Ma), un = requestAnimationFrame(st), Ar();
  }
  function Ie() {
    var m, T, H, W;
    const t = Ue[bt], r = (m = i("warmupList")) == null ? void 0 : m.closest("section"), s = (T = i("cooldownList")) == null ? void 0 : T.closest("section"), u = (W = (H = i("strengthList")) == null ? void 0 : H.closest("section")) == null ? void 0 : W.querySelector(".sectionTitle");
    t != null && t.customSequence ? (r && (r.hidden = !t.includeWarmup), s && (s.hidden = !t.includeCooldown), u && (u.textContent = "Move sequence")) : (r && (r.hidden = !!(t != null && t.warmupOff)), s && (s.hidden = !1), u && (u.textContent = "Kettlebell work")), le(St, "warmupList"), le(ot, "strengthList"), le(En, "cooldownList");
  }
  function Le() {
    if (!A) return;
    const { item: t, arr: r } = A;
    A = null;
    const s = r.indexOf(t);
    s >= 0 && r.splice(s, 1), k === t && (k = null);
  }
  function We(t) {
    return t.id === "warmupList" ? { arr: St, kind: "warmup", group: "Warm-up" } : t.id === "cooldownList" ? { arr: En, kind: "cooldown", group: "Cooldown" } : { arr: ot, kind: "work", group: "" };
  }
  function $e(t, r) {
    const s = We(r), u = Date.now().toString(36);
    return t === "video" ? { id: "video-" + u, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : t === "rest" ? { id: "rest-" + u, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(F.value) } : { id: "movement-" + u, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(C.value) };
  }
  const Oe = "cubic-bezier(.34,1.46,.64,1)";
  function He(t, r) {
    if (ue() || !t) {
      r();
      return;
    }
    const s = (T) => {
      var H;
      return ((H = T.dataset) == null ? void 0 : H.id) || T;
    }, u = () => [...t.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], m = new Map(u().map((T) => [s(T), T.getBoundingClientRect().top]));
    r(), u().forEach((T) => {
      const H = m.get(s(T));
      if (H === void 0) return;
      const W = H - T.getBoundingClientRect().top;
      Math.abs(W) < 0.5 || T.animate([{ transform: "translateY(" + W + "px)" }, { transform: "none" }], { duration: 440, easing: Oe });
    });
  }
  function ze(t, r) {
    if (!t || ue()) return;
    const s = t.offsetHeight, u = Math.max(0, s - (r || 0));
    t.animate([{ clipPath: "inset(0 0 " + u + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Oe });
  }
  function et(t, r, s, u) {
    const { arr: m } = We(r), T = $e(t, r);
    m.splice(Math.max(0, Math.min(s, m.length)), 0, T), A = { item: T, arr: m }, k = T, He(r.closest(".exerciseScroller,.createStepSlot") || r, () => Mt());
    const H = r.querySelector(".moveRow.editing");
    return ze(H, u), G(t === "rest"), H;
  }
  function _e(t) {
    for (let r = t; r && r.nodeType === 1; r = r.parentElement) {
      const s = getComputedStyle(r).overflowY;
      if (/(auto|scroll)/.test(s) && r.scrollHeight > r.clientHeight) return r;
    }
    return null;
  }
  const nt = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function it(t, r) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (t === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + $a + '</span><span class="addGhostText"><strong>' + Ge(r[0]) + "</strong><small>" + Ge(r[1]) + "</small></span>", i("workoutModal").appendChild(s), s;
  }
  function It(t) {
    t.classList.add("leaving"), setTimeout(() => t.remove(), 180);
  }
  function Re(t, r, s, u) {
    (k || A) && (Le(), k = null, Mt());
    const m = t.getBoundingClientRect(), T = it(r, nt[r]);
    T.setAttribute("aria-hidden", "true"), T.style.width = m.width + "px", T.style.height = m.height + "px", T.style.transform = "translate(" + m.left + "px," + m.top + "px)", t.classList.add("lifting");
    const H = _e(t);
    return Nt({
      ghost: T,
      origin: m,
      sx: s,
      sy: u,
      scroller: H,
      column: t.closest(".exerciseScroller,.createFlow") || H,
      home: () => t.getBoundingClientRect(),
      onDrop: (W, se, pe) => {
        It(T), t.classList.remove("lifting"), et(r, W, se, pe);
      },
      onReturn: () => {
        It(T), t.classList.remove("lifting");
      }
    });
  }
  function Nt({ ghost: t, origin: r, sx: s, sy: u, scroller: m, column: T, home: H, onDrop: W, onReturn: se, rowLook: pe = !1 }) {
    var Ar;
    const te = !ue(), ee = ((Ar = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Ar.offsetHeight) || 80, Ae = s - r.left, Je = u - r.top, Pe = 44;
    let Te = s, Me = u, gt = r.left, vt = r.top, Fe = 0, yt = 0, Et = !te, lt = null, at = null, rn = -1, _n = 0, Vt = null;
    const fi = () => ["warmupList", "strengthList", "cooldownList"].map((st) => i(st)).filter((st) => st && st.getClientRects().length && !st.closest("[hidden]")), Se = (st) => {
      if (st === lt) return;
      lt = st, t.classList.toggle("overList", !!st || pe);
      const Rt = st ? st.getBoundingClientRect().width : r.width;
      t.style.width = Rt + "px", t.style.height = (st ? ee : r.height) + "px";
    }, dt = (st) => {
      st.classList.add("leaving"), st.style.height = "0px", st.style.marginTop = "-8px", setTimeout(() => st.remove(), te ? 320 : 0);
    }, un = (st, Rt, Ut) => {
      if (at && at.parentNode === st && rn === Ut || (at && (dt(at), at = null, rn = -1), !st)) return;
      const hn = document.createElement("div");
      hn.className = "dropSlot", st.insertBefore(hn, Rt), at = hn, rn = Ut, hn.getBoundingClientRect(), hn.style.height = ee + "px", hn.style.marginTop = "0px";
    }, pn = () => {
      let st = null, Rt = 1 / 0;
      for (const Ma of fi()) {
        const ut = Ma.getBoundingClientRect();
        if (Te < ut.left - 48 || Te > ut.right + 48) continue;
        const Tt = ut.top - 28, qt = ut.bottom + 28, ta = Me < Tt ? Tt - Me : Me > qt ? Me - qt : 0;
        ta < Rt && (Rt = ta, st = Ma);
      }
      const Ut = T == null ? void 0 : T.getBoundingClientRect(), ea = Ut && Te >= Ut.left && Te <= Ut.right && Me >= Ut.top && Me <= Ut.bottom || Rt === 0 ? st : null;
      if (ea) {
        const Ma = [...ea.children].filter((Tt) => Tt.classList.contains("moveRow"));
        let ut = Ma.findIndex((Tt) => {
          const qt = Tt.getBoundingClientRect();
          return Me < qt.top + qt.height / 2;
        });
        ut < 0 && (ut = Ma.length), un(ea, Ma[ut] || null, ut);
      } else un(null);
      Se(ea);
    }, cl = () => {
      if (Vt) return Vt.aim();
      if (lt) {
        const st = lt.getBoundingClientRect();
        let Rt = Me - ee / 2;
        return at && (Rt = Rt * 0.6 + at.getBoundingClientRect().top * 0.4), { x: st.left, y: Rt };
      }
      return { x: Te - Ae, y: Me - Je };
    }, Lr = (st, Rt, Ut, hn) => {
      t.style.transform = "translate(" + gt + "px," + vt + "px) rotate(" + st + "deg) rotate(" + Rt + "rad) scale(" + Ut + "," + hn + ") rotate(" + -Rt + "rad)";
    }, dl = () => {
      if (_n = requestAnimationFrame(dl), !Et) {
        const ut = Te - s, Tt = Me - u, qt = Math.min(Math.hypot(ut, Tt) / Pe, 1);
        gt = r.left + ut * 0.35, vt = r.top + Tt * 0.35, Lr(0, Math.atan2(Tt, ut), 1 + 0.155 * qt, 1 - 0.1 * qt);
        return;
      }
      const st = cl();
      if (!te) {
        gt = st.x, vt = st.y, Lr(0, 0, 1, 1), Vt && (cancelAnimationFrame(_n), Vt.done());
        return;
      }
      const Rt = Vt ? Vt.k : 0.17, Ut = Vt ? Vt.d : 0.7;
      Fe = (Fe + (st.x - gt) * Rt) * Ut, yt = (yt + (st.y - vt) * Rt) * Ut, gt += Fe, vt += yt;
      const hn = Math.hypot(Fe, yt), ea = Math.min(hn / 48, 1), Ma = lt || Vt ? 0 : Math.max(-5, Math.min(5, Fe * 0.32));
      Lr(Ma, Math.atan2(yt, Fe), 1 + 0.1 * ea, 1 - 0.063 * ea), Vt && hn < 0.15 && Math.hypot(st.x - gt, st.y - vt) < 0.6 && (cancelAnimationFrame(_n), Vt.done());
    }, ul = setInterval(() => {
      if (!m || Vt) return;
      const st = m.getBoundingClientRect(), Rt = 64, Ut = Me < st.top + Rt ? -(st.top + Rt - Me) / 4 : Me > st.bottom - Rt ? (Me - (st.bottom - Rt)) / 4 : 0;
      Ut && (m.scrollTop += Math.max(-18, Math.min(18, Ut)), pn());
    }, 30);
    _n = requestAnimationFrame(dl);
    let gs = !1;
    const mi = (st, Rt) => {
      if (gs) return;
      gs = !0, cancelAnimationFrame(_n);
      const Ut = at ? at.offsetHeight : ee;
      !st && at && (at.remove(), at = null), st ? W(st, Rt, Ut) : se();
    };
    return {
      move(st, Rt) {
        Te = st, Me = Rt, !Et && Math.hypot(Te - s, Me - u) > Pe && (Et = !0, Fe = (Te - s) * 0.085, yt = (Me - u) * 0.085), Et && pn();
      },
      drop(st) {
        clearInterval(ul);
        const Rt = lt, Ut = rn;
        if (!st && Rt && at) {
          const hn = at;
          Vt = { k: 0.24, d: 0.62, aim: () => {
            const ea = hn.getBoundingClientRect();
            return { x: ea.left, y: ea.top };
          }, done: () => mi(Rt, Ut) }, setTimeout(() => mi(Rt, Ut), 650), te || (cancelAnimationFrame(_n), mi(Rt, Ut));
          return;
        }
        un(null), Se(null), Vt = { k: 0.2, d: 0.66, aim: () => {
          const hn = H();
          return { x: hn.left, y: hn.top };
        }, done: () => mi(null) }, setTimeout(() => mi(null), 650), te || (cancelAnimationFrame(_n), mi(null));
      }
    };
  }
  function Wt(t, r) {
    let s = !1;
    t.addEventListener("click", (u) => {
      if (s) {
        s = !1, u.preventDefault();
        return;
      }
      if (Kn()) {
        yi(r);
        return;
      }
      const m = i("strengthList"), T = et(r, m, We(m).arr.length, 0);
      T == null || T.scrollIntoView({ block: "nearest", behavior: ue() ? "auto" : "smooth" });
    }), t.addEventListener("pointerdown", (u) => {
      if (u.button !== void 0 && u.button !== 0) return;
      const m = u.pointerId, T = u.clientX, H = u.clientY;
      let W = null, se = !1;
      try {
        t.setPointerCapture(m);
      } catch {
      }
      const pe = (Me) => {
        if (Me.pointerId === m) {
          if (Me.pointerType === "mouse" && Me.buttons === 0) {
            Te(!1);
            return;
          }
          if (!W) {
            if (Math.hypot(Me.clientX - T, Me.clientY - H) < 6) return;
            W = Re(t, r, T, H);
          }
          W.move(Me.clientX, Me.clientY);
        }
      }, te = (Me) => {
        Me.pointerId === m && Te(!1);
      }, ee = (Me) => {
        Me.pointerId === m && Te(!0);
      }, Ae = () => Te(!1), Je = () => Te(!0), Pe = (Me) => {
        Me.key === "Escape" && W && (Me.preventDefault(), Me.stopPropagation(), Te(!0));
      };
      function Te(Me) {
        if (!se && (se = !0, window.removeEventListener("pointermove", pe, !0), window.removeEventListener("pointerup", te, !0), window.removeEventListener("pointercancel", ee, !0), window.removeEventListener("keydown", Pe, !0), window.removeEventListener("blur", Je), t.removeEventListener("lostpointercapture", Ae), W)) {
          const gt = W;
          W = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), gt.drop(Me);
        }
      }
      window.addEventListener("pointermove", pe, !0), window.addEventListener("pointerup", te, !0), window.addEventListener("pointercancel", ee, !0), window.addEventListener("keydown", Pe, !0), window.addEventListener("blur", Je), t.addEventListener("lostpointercapture", Ae);
    });
  }
  const Cn = (Gc = window.matchMedia) == null ? void 0 : Gc.call(window, "(max-width: 620px)");
  function Kn() {
    var t;
    return !!((t = window.matchMedia) != null && t.call(window, "(max-width: 620px)").matches);
  }
  const ko = (t) => t.charAt(0).toUpperCase() + t.slice(1), Rn = (t) => t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "movement";
  let $o = null, Ve = null;
  function da(t, r, s, u) {
    Bt(), i("sheetTitle").textContent = t;
    const m = i("sheetBody");
    m.innerHTML = "", m.appendChild(r), $o = s || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !m.contains(r)) return;
      const T = u ? m.querySelector("input[data-f=url],input[data-f=name]") : m.querySelector("button,input,select");
      T == null || T.focus({ preventScroll: !0 });
    }, ue() ? 0 : 360);
  }
  function Bt() {
    const t = i("sheet");
    if (!t.classList.contains("open")) return;
    t.classList.remove("open"), i("sheetScrim").classList.remove("open"), t.setAttribute("aria-hidden", "true"), t.contains(a.activeElement) && a.activeElement.blur();
    const r = $o;
    $o = null, r == null || r(), setTimeout(Ja, 0);
  }
  i("sheetScrim").addEventListener("click", Bt), i("sheet").addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Bt());
  });
  function Xa(t, r) {
    const s = Q(t, r.indexOf(t), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Bt(), Mt(), Ot(ko(Rn(t)) + " updated");
      },
      onCancel: Bt,
      onHide() {
        t.hidden = !t.hidden, Bt(), Mt(), Ot((t.hidden ? "Hidden: " : "Showing: ") + t.name);
      },
      onRemove() {
        Bt();
        const u = r.indexOf(t);
        u < 0 || (r.splice(u, 1), Mt(), Ot("Removed " + t.name, { label: "Undo", run: () => {
          r.splice(Math.min(u, r.length), 0, t), Mt();
        } }));
      }
    });
    da("Edit " + Rn(t), s, null, !1);
  }
  function Mo() {
    const t = document.createElement("div");
    t.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, s, u, m]) => {
      const T = document.createElement("button");
      T.type = "button", T.className = "sheetChoice", T.innerHTML = '<span class="timeIcon" aria-hidden="true">' + wt(s) + "</span><span><strong>" + u + "</strong><small>" + m + "</small></span>", T.addEventListener("click", () => yi(r)), t.appendChild(T);
    }), da("Add to the move", t, null, !1);
  }
  function yi(t) {
    Ve && qa();
    const r = $e(t, i("strengthList")), s = Q(r, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Bt(), Nl(r, t);
      },
      onCancel: Bt
    });
    da("New " + Rn(r), s, null, !0);
  }
  const Oa = i("workoutModal").querySelector(".modalStatic"), Tn = { parent: Oa.parentNode, next: Oa.nextSibling };
  function Rl() {
    const t = document.createElement("div");
    t.className = "sheetSetup", t.appendChild(Oa);
    const r = document.createElement("button");
    r.type = "button", r.className = "primary sheetDone", r.textContent = "Done", r.addEventListener("click", Bt), t.appendChild(r), da("Setup", t, () => {
      Tn.parent.insertBefore(Oa, Tn.next), Pr();
    }, !1);
  }
  function Pr() {
    var r, s;
    const t = i("setupSummaryName");
    t && (t.textContent = (((r = i("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((s = Ue[bt]) == null ? void 0 : s.name) || "Move", i("setupSummaryMeta").textContent = ht.textContent);
  }
  i("setupSummary").addEventListener("click", Rl), i("addFab").addEventListener("click", Mo);
  function Ms() {
    const t = i("strengthList");
    return _e(t) || t.closest(".exerciseScroller");
  }
  function ki() {
    const t = i("strengthList").getBoundingClientRect(), r = (Ms() || i("strengthList")).getBoundingClientRect(), s = (Ve == null ? void 0 : Ve.ghost.offsetHeight) || 64;
    return { left: t.left, top: Math.max(r.top + 12, Math.min(r.bottom - s - 96, r.top + r.height * 0.55 - s / 2)), width: t.width, height: s };
  }
  function Nl(t, r) {
    var W;
    const s = it(r, [t.name || nt[r][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (t.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const u = document.createElement("span");
    u.className = "addGhostActions", u.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Ge(t.name) + '">✕</button>', s.appendChild(u), Ve = { item: t, type: r, ghost: s };
    const m = ((W = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : W.offsetHeight) || 64;
    s.style.width = i("strengthList").getBoundingClientRect().width + "px", s.style.height = m + "px";
    const T = ki(), H = Nn.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + T.left + "px," + H + "px)", s.getBoundingClientRect(), ue() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + T.left + "px," + T.top + "px)", u.querySelector("[data-a=end]").addEventListener("click", qa), u.querySelector("[data-a=discard]").addEventListener("click", Mi), s.addEventListener("pointerdown", nr);
  }
  function nr(t) {
    if (!Ve || t.target.closest("button") || t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const { item: r, ghost: s } = Ve, u = t.pointerId;
    try {
      s.setPointerCapture(u);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const m = s.getBoundingClientRect(), T = Ms(), H = Nt({
      ghost: s,
      origin: { left: m.left, top: m.top, width: m.width, height: m.height },
      sx: t.clientX,
      sy: t.clientY,
      scroller: T,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || T,
      rowLook: !0,
      home: ki,
      onDrop: (Te, Me, gt) => {
        Ve = null, It(s), Ss(r, Te, Me, gt);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let W = !1;
    const se = (Te) => {
      if (Te.pointerId === u) {
        if (Te.pointerType === "mouse" && Te.buttons === 0) {
          Pe(!1);
          return;
        }
        H.move(Te.clientX, Te.clientY);
      }
    }, pe = (Te) => {
      Te.pointerId === u && Pe(!1);
    }, te = (Te) => {
      Te.pointerId === u && Pe(!0);
    }, ee = () => Pe(!1), Ae = () => Pe(!0), Je = (Te) => {
      Te.key === "Escape" && (Te.preventDefault(), Pe(!0));
    };
    function Pe(Te) {
      W || (W = !0, window.removeEventListener("pointermove", se, !0), window.removeEventListener("pointerup", pe, !0), window.removeEventListener("pointercancel", te, !0), window.removeEventListener("keydown", Je, !0), window.removeEventListener("blur", Ae), s.removeEventListener("lostpointercapture", ee), H.drop(Te));
    }
    window.addEventListener("pointermove", se, !0), window.addEventListener("pointerup", pe, !0), window.addEventListener("pointercancel", te, !0), window.addEventListener("keydown", Je, !0), window.addEventListener("blur", Ae), s.addEventListener("lostpointercapture", ee);
  }
  function Ss(t, r, s, u) {
    const m = We(r);
    t.kind !== "rest" && t.kind !== "video" && (t.kind = m.kind, m.group && (!t.group || t.group === "Movement") && (t.group = m.group)), m.arr.splice(Math.max(0, Math.min(s, m.arr.length)), 0, t), He(r.closest(".exerciseScroller,.createStepSlot") || r, () => Mt()), ze(r.querySelector('.moveRow[data-id="' + t.id + '"]'), u), Ot(ko(Rn(t)) + " added");
  }
  function qa() {
    var u;
    if (!Ve) return;
    const { item: t, ghost: r } = Ve;
    Ve = null, It(r);
    const s = i("strengthList");
    Ss(t, s, We(s).arr.length, 0), (u = s.querySelector('.moveRow[data-id="' + t.id + '"]')) == null || u.scrollIntoView({ block: "nearest", behavior: ue() ? "auto" : "smooth" });
  }
  function Mi() {
    if (!Ve) return;
    const t = Ve.ghost;
    Ve = null, It(t), Ot("Discarded");
  }
  function Xo() {
    Ve && (Ve.ghost.remove(), Ve = null);
  }
  window.addEventListener("resize", () => {
    if (Ve != null && Ve.ghost.classList.contains("hovering")) {
      const t = ki();
      Ve.ghost.style.width = t.width + "px", Ve.ghost.style.transform = "translate(" + t.left + "px," + t.top + "px)";
    }
  }), (Uc = Cn == null ? void 0 : Cn.addEventListener) == null || Uc.call(Cn, "change", () => {
    Bt(), Ve && !Kn() && qa(), Ie();
  });
  {
    const t = i("workoutModal").querySelector(".modal");
    t.addEventListener("scroll", () => {
      (t.scrollTop || t.scrollLeft) && (t.scrollTop = 0, t.scrollLeft = 0);
    });
  }
  function Ja() {
    const t = i("workoutModal"), r = window.visualViewport;
    if (!t.classList.contains("open") || !Kn()) {
      Ir();
      return;
    }
    const s = r ? r.offsetTop : 0, u = r ? r.offsetLeft : 0, m = r ? r.width : window.innerWidth, T = r ? r.height : window.innerHeight;
    Object.assign(t.style, { right: "auto", bottom: "auto", width: m + "px", height: T + "px", top: s + "px", left: u + "px" });
    const H = t.getBoundingClientRect();
    Math.abs(H.top - s) > 0.5 && (t.style.top = 2 * s - H.top + "px"), Math.abs(H.left - u) > 0.5 && (t.style.left = 2 * u - H.left + "px");
  }
  function Ir() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((t) => i("workoutModal").style.removeProperty(t));
  }
  (Yc = window.visualViewport) == null || Yc.addEventListener("resize", Ja), (Zc = window.visualViewport) == null || Zc.addEventListener("scroll", Ja), window.addEventListener("resize", Ja), window.addEventListener("scroll", Ja, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(Ja, 250));
  function Hr() {
    ot.length > 0;
    const t = i("addMovementBtn"), r = i("addRestBtn");
    t && (t.innerHTML = $a + "<span>Add movement</span>"), r && (r.innerHTML = $a + "<span>Add rest</span>");
    const s = i("addVideoBtn");
    s && (s.innerHTML = $a + "<span>Add video</span>");
  }
  function Si() {
    const t = i("useGlobalTiming").checked, r = i("addMovementDuration"), s = i("addMovementUnit");
    r.disabled = t, s.disabled = t, r.parentElement.style.opacity = t ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + Jt(C.value);
    const u = i("useGlobalRestTiming").checked, m = i("addRestDuration"), T = i("addRestUnit");
    m.disabled = u, T.disabled = u, m.parentElement.style.opacity = u ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + Jt(F.value);
  }
  let Fr = "movement";
  function Bl(t) {
    Fr = t;
    const r = i("movementFields"), s = i("restFields");
    r.hidden = t !== "movement", s.hidden = t !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), Si();
  }
  function Or() {
    Ue[bt];
    const t = mt ? !0 : i("useGlobalTiming").checked, r = t ? Number(C.value) : ca(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), s = mt ? !0 : i("useGlobalRestTiming").checked, u = s ? Number(F.value) : ca(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (Fr === "rest") {
      const m = i("addRestTitle").value.trim() || "Rest", T = i("addRestGroup").value.trim() || "Rest";
      ot.push({
        id: "rest-" + Date.now(),
        name: m,
        group: T,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, u || Number(F.value))
      }), Mt(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", Ot("Rest added"), mt && (B("movements"), we());
    } else {
      const m = i("addMovementInput").value.trim();
      if (!m) return;
      const T = i("addMovementGroup").value.trim() || "Movement";
      ot.push({
        id: "movement-" + Date.now(),
        name: m,
        group: T,
        kind: "work",
        hidden: !1,
        useGlobalTiming: t,
        duration: Math.max(5, r || Number(C.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", Mt(), i("movementCreator").hidden = !0, Ot("Movement added"), mt && (B("movements"), we());
    }
    Hr();
  }
  let ar = null;
  function Ot(t, r) {
    const s = i("toast");
    s.innerHTML = "";
    const u = document.createElement("span");
    if (u.textContent = t, s.appendChild(u), r) {
      const m = document.createElement("button");
      m.type = "button", m.className = "toastAction", m.textContent = r.label, m.addEventListener("click", () => {
        r.run(), s.classList.remove("show", "withAction"), clearTimeout(ar);
      }), s.appendChild(m);
    }
    s.classList.toggle("withAction", !!r), s.classList.add("show"), clearTimeout(ar), ar = setTimeout(() => s.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const Pl = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Il = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Cs(t) {
    return Math.max(0, Math.min(5, Math.floor(Number(t) / 100 * 6)));
  }
  function wa(t, r) {
    return Pl[Cs(r)];
  }
  function Ts(t) {
    return Il[Cs(t)];
  }
  function Gt(t) {
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  function ua() {
    return { morning: tt().morningTime || "08:00", evening: tt().eveningTime || "19:00" };
  }
  function kn(t) {
    const [r, s] = String(t).split(":").map(Number);
    return (r || 0) * 60 + (s || 0);
  }
  function Hl(t) {
    const r = ua();
    return t.getHours() * 60 + t.getMinutes() >= kn(r.evening) ? "evening" : "morning";
  }
  function Ci(t, r) {
    return ft.checkins.find((s) => s.date === t && s.slot === r);
  }
  function Ti(t) {
    return !!(t && t.mood != null && t.energy != null);
  }
  function So() {
    const t = /* @__PURE__ */ new Date(), r = Gt(t), s = Hl(t), u = ua(), m = t.getHours() * 60 + t.getMinutes();
    return s === "morning" && m < kn(u.morning) || Ti(Ci(r, s)) ? null : s;
  }
  const Qa = i("checkinModal"), eo = i("checkinTab"), qr = i("checkinBadge"), Wa = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function Ls(t) {
    const { input: r, fill: s } = Wa[t];
    s.style.width = r.value + "%", r.setAttribute("aria-valuetext", wa(t, r.value));
  }
  Object.keys(Wa).forEach((t) => Wa[t].input.addEventListener("input", () => Ls(t)));
  let Ca = null;
  function As() {
    const t = ua(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes();
    return s < kn(t.morning) ? "Next check-in at " + t.morning : s < kn(t.evening) ? "Next check-in at " + t.evening : "Next check-in tomorrow at " + t.morning;
  }
  function Wr() {
    const t = ua(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes(), u = (m, T) => {
      const [H, W] = m.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (T ? 1 : 0), H, W);
    };
    return s < kn(t.morning) ? { date: u(t.morning), time: t.morning } : s < kn(t.evening) ? { date: u(t.evening), time: t.evening } : { date: u(t.morning, !0), time: t.morning };
  }
  let jr = null, or = null;
  function _s() {
    if (So()) {
      ir(), ja();
      return;
    }
    const t = Wr(), r = Math.max(0, Math.round((t.date - Date.now()) / 1e3)), s = Math.floor(r / 3600), u = Math.floor(r % 3600 / 60), m = r % 60;
    i("peekCountdown").textContent = s + ":" + String(u).padStart(2, "0") + ":" + String(m).padStart(2, "0"), i("peekAt").textContent = "Available at " + t.time;
  }
  function Es() {
    _s(), eo.classList.add("peek"), clearInterval(or), or = setInterval(_s, 1e3), clearTimeout(jr), jr = setTimeout(ir, 6e3);
  }
  function ir() {
    eo.classList.remove("peek"), clearInterval(or), clearTimeout(jr);
  }
  function zr() {
    const t = So();
    if (!t) {
      eo.classList.contains("peek") ? ir() : Es();
      return;
    }
    Ca = { date: Gt(/* @__PURE__ */ new Date()), slot: t };
    const s = Ci(Ca.date, t), u = ft.checkins.find((m) => Ti(m));
    Object.keys(Wa).forEach((m) => {
      Wa[m].input.value = (s == null ? void 0 : s[m]) ?? (u == null ? void 0 : u[m]) ?? 50, Ls(m);
    }), i("checkinTitle").textContent = t === "morning" ? "Morning check-in" : "Evening check-in", Qa.classList.add("open"), Qa.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Wa.mood.input.focus());
  }
  function Li() {
    Qa.classList.remove("open"), Qa.setAttribute("aria-hidden", "true"), Ca && (Co = Ca.date + "-" + Ca.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Co);
    } catch {
    }
    Ca = null, ja();
  }
  function Ai() {
    if (!Ca) return;
    if (Ti(Ci(Ca.date, Ca.slot))) {
      Li();
      return;
    }
    const { date: t, slot: r } = Ca;
    let s = Ci(t, r);
    s || (s = { date: t, slot: r }, ft.checkins.unshift(s), ft.checkins = ft.checkins.slice(0, 2e3)), s.mood = Number(Wa.mood.input.value), s.energy = Number(Wa.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), bn(), l.fire("checkin", { slot: r, mood: s.mood, energy: s.energy, mood_label: wa("mood", s.mood), energy_label: wa("energy", s.energy) }), Ot((r === "morning" ? "Morning" : "Evening") + " check-in saved"), Li(), Jo(), _i(), uo(), Qn();
  }
  let Co = "";
  try {
    Co = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function ja() {
    const t = So();
    qr.hidden = !t, eo.hidden = !t, t || ir(), eo.classList.toggle("due", !!t), eo.setAttribute("aria-label", t ? (t === "morning" ? "Morning" : "Evening") + " check-in is due" : As()), eo.title = t ? "Check in now" : As();
  }
  function rr() {
    ja();
    const t = So();
    !t || Qa.classList.contains("open") || tt().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !Ee.home.classList.contains("active") || Nn.classList.contains("open") || Co !== Gt(/* @__PURE__ */ new Date()) + "-" + t && zr());
  }
  eo.addEventListener("click", zr), i("checkinLater").addEventListener("click", Li), i("checkinSave").addEventListener("click", Ai), Qa.addEventListener("click", (t) => {
    t.target === Qa && Li();
  }), Qa.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Li());
  }), setInterval(rr, 3e4);
  function Jo() {
    const t = Gt(/* @__PURE__ */ new Date()), r = (s) => ft.checkins.find((u) => u.date === t && u[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, u]) => {
      const m = r(s);
      i(u).textContent = m ? wa(s, m[s]) : "—";
    });
  }
  function _i() {
    const t = i("feelCard");
    if (!t) return;
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), u = [...Array(7)].map((pe, te) => {
      const ee = new Date(s.getFullYear(), s.getMonth(), s.getDate() + te), Ae = Gt(ee), Je = ft.checkins.filter((Te) => Te.date === Ae), Pe = (Te) => {
        const Me = Je.map((gt) => gt[Te]).filter((gt) => gt != null);
        return Me.length ? Me.reduce((gt, vt) => gt + vt, 0) / Me.length : null;
      };
      return { d: ee, key: Ae, mood: Pe("mood"), energy: Pe("energy"), count: Je.filter(Ti).length, future: ee > r && Ae !== Gt(r) };
    }), m = (pe) => {
      const te = u.map((ee) => ee[pe]).filter((ee) => ee != null);
      return te.length ? te.reduce((ee, Ae) => ee + Ae, 0) / te.length : null;
    }, T = m("mood"), H = m("energy"), W = (pe, te) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + pe + "</span><span>" + (te == null ? "—" : Ge(wa("", te))) + '</span></div><div class="feelTrack"><span style="width:' + (te == null ? 0 : Math.max(4, te)) + "%;background:" + (te == null ? "transparent" : Ts(te)) + '"></span></div></div>', se = u.filter((pe) => pe.mood != null && pe.energy != null).sort((pe, te) => te.mood + te.energy - (pe.mood + pe.energy))[0];
    t.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (T == null ? "No check-ins yet" : Ge(wa("", (T + H) / 2))) + '</div><div class="weekCopy">' + (T == null ? "Your first check-in will appear here." : "on average this week" + (se ? " · best day " + Ge(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(se.d)) : "")) + '</div></div></div><div class="feelDays">' + u.map(
      (pe) => '<div class="weekChip feelDay' + (pe.future ? " future" : "") + (pe.key === Gt(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Ge(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(pe.d)) + "</strong>" + (pe.count >= 2 ? '<span class="weekTick">' + wt("check") + "</span>" : '<span class="feelDots">' + "●".repeat(pe.count) + "</span>") + "</div>" + W("Mood", pe.mood) + W("Energy", pe.energy) + "</div>"
    ).join("") + "</div>";
  }
  const sr = i("upcomingCountSetting");
  sr.addEventListener("change", () => {
    xn = sr.value === "all" ? "all" : Number(sr.value), In();
  });
  const Ei = i("tempoRevealBtn"), Vr = i("tempoExperiment"), Ta = i("tempoQuad"), La = i("tempoDot"), Ds = i("tempoEstimate"), Fl = i("tempoReadout");
  let Qo = { x: 0.5, y: 0.5 }, Aa = !1, Di = { total: 20, work: 45, rest: 15 };
  function lr(t, r, s, u) {
    const m = Math.max(r, Math.min(s, t));
    return Math.round((m - r) / u) * u + r;
  }
  function Rs(t, r) {
    const s = (t - 0.5) * 2, u = (r - 0.5) * 2, m = lr(
      Di.total + s * 5 + u * 8,
      Number(_.min),
      Number(_.max),
      Number(_.step)
    ), T = lr(
      Di.work + s * 10 + u * 8,
      Number(C.min),
      Number(C.max),
      Number(C.step)
    ), H = lr(
      Di.rest + s * 6 + u * 6,
      Number(F.min),
      Number(F.max),
      Number(F.step)
    );
    return _.value = m, C.value = T, F.value = H, j.textContent = T + " sec", re.textContent = H + " sec", la(), { total: m, work: T, rest: H };
  }
  function cr(t, r) {
    const s = t < 0.34 ? "Low" : t > 0.66 ? "Hard" : "Medium", u = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", m = Rs(t, r);
    Fl.textContent = s + " + " + u, Ds.textContent = m.total + " min", Ta.setAttribute("aria-valuetext", s + " and " + u + ", estimated " + m.total + " minutes");
  }
  function dr(t) {
    const r = Ta.getBoundingClientRect(), s = Math.max(0, Math.min(1, (t.clientX - r.left) / r.width)), u = Math.max(0, Math.min(1, (t.clientY - r.top) / r.height));
    Qo = { x: s, y: u }, La.style.left = s * 100 + "%", La.style.top = u * 100 + "%", cr(s, u);
  }
  Ei.addEventListener("click", () => {
    const t = Vr.hidden;
    Vr.hidden = !t, Ei.setAttribute("aria-expanded", t ? "true" : "false"), Ei.textContent = t ? "Now close this" : "Don’t try this!", t && (Di = {
      total: Number(_.value),
      work: Number(C.value),
      rest: Number(F.value)
    }, Qo = { x: 0.5, y: 0.5 }, La.style.left = "50%", La.style.top = "50%", cr(Qo.x, Qo.y));
  }), a.querySelectorAll("[data-feedback-rating]").forEach((t) => t.addEventListener("click", () => {
    Number(t.dataset.feedbackRating), a.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === t));
  }));
  const ur = i("testingFeedbackForm"), Ns = i("testingFeedbackThanks"), Ol = i("testingFeedbackAgain");
  ur.addEventListener("submit", (t) => {
    t.preventDefault(), ur.hidden = !0, Ns.hidden = !1, Ot("Feedback captured for prototype");
  }), Ol.addEventListener("click", (t) => {
    t.preventDefault(), ur.reset(), a.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), Ns.hidden = !0, ur.hidden = !1;
  }), Ta.addEventListener("pointerdown", (t) => {
    var r;
    Aa = !0, dr(t);
    try {
      (r = Ta.setPointerCapture) == null || r.call(Ta, t.pointerId);
    } catch {
    }
  }), Ta.addEventListener("pointermove", (t) => {
    Aa && dr(t);
  }), Ta.addEventListener("pointerup", (t) => {
    Aa && (Aa = !1, dr(t), Mt());
  }), Ta.addEventListener("pointercancel", () => Aa = !1), Ta.addEventListener("keydown", (t) => {
    let { x: r, y: s } = Qo, u = !0;
    t.key === "ArrowLeft" ? r -= 0.05 : t.key === "ArrowRight" ? r += 0.05 : t.key === "ArrowUp" ? s -= 0.05 : t.key === "ArrowDown" ? s += 0.05 : u = !1, u && (t.preventDefault(), r = Math.max(0, Math.min(1, r)), s = Math.max(0, Math.min(1, s)), Qo = { x: r, y: s }, La.style.left = r * 100 + "%", La.style.top = s * 100 + "%", cr(r, s), Mt());
  });
  const Nn = i("workoutModal");
  let to = null;
  function To(t) {
    return t.map((r) => ({ ...r }));
  }
  function Gr() {
    const t = Ue[bt];
    return {
      key: bt,
      profile: t ? JSON.parse(JSON.stringify(t)) : null,
      warmup: To(St),
      strength: To(ot),
      cooldown: To(En),
      total: Number(_.value),
      work: Number(C.value),
      rest: Number(F.value),
      rounds: Number(ct.value) || 1
    };
  }
  function Ur(t = !1) {
    mt = !!t, k = null, A = null, Bt(), Xo(), to = Gr(), i("moveEditorTitle").textContent = mt ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !mt, i("warmupRow").hidden = mt, i("deleteMoveOpen").hidden = mt;
    const r = i("createMoveOptions");
    r.hidden = !mt;
    {
      const s = Ue[bt];
      i("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), i("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (Bs(), mt) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const s = Ue[bt];
      Ko((s == null ? void 0 : s.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, Bl("movement"), Hr(), Si(), Vr.hidden = !0, Ei.setAttribute("aria-expanded", "false"), Ei.textContent = "Don’t try this!", Nn.classList.toggle("createMode", mt), Nn.querySelector(".modal").classList.toggle("createMode", mt), Nn.classList.add("open"), Nn.setAttribute("aria-hidden", "false"), Ja(), mt && Ce();
  }
  function ql() {
    const t = Ue[bt];
    return t != null && t.customSequence ? !!t.includeWarmup : !(t != null && t.warmupOff);
  }
  function Bs() {
    const t = ql(), r = i("warmupSwitch");
    r.classList.toggle("on", t), r.setAttribute("aria-checked", String(t));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const t = Ue[bt];
    t && (t.customSequence ? (i("includeWarmupPreset").checked = !t.includeWarmup, Ha()) : (t.warmupOff = !t.warmupOff, Mt()), Bs());
  });
  function Ri() {
    Bt(), Xo(), Ir(), A = null, k = null, Nn.classList.contains("createMode") && P(), Nn.classList.remove("createMode"), Nn.querySelector(".modal").classList.remove("createMode"), Nn.classList.remove("open"), Nn.setAttribute("aria-hidden", "true");
  }
  function Ps() {
    if (!to) return;
    const t = to;
    t.profile && (Ue[t.key] = JSON.parse(JSON.stringify(t.profile))), bt = t.key, St = To(t.warmup), ot = To(t.strength), En = To(t.cooldown), _.value = t.total, C.value = t.work, F.value = t.rest, ct.value = t.rounds || 1;
    const r = Ue[bt];
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
    Mt();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (mt) {
      const t = bt;
      delete Ue[t], mt = !1, Ct = null, Un(ft.order.find((r) => Ue[r]) || Object.keys(Ue)[0]);
    } else
      Ps();
    Ri();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    Bt(), Ve && qa();
    const t = Ue[bt], r = f.value.trim() || "New move";
    if (t && (t.name = r), Le(), k = null, Mt(), mt && t)
      Uo(bt, t), a.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === bt)), mt = !1, Ct = null, ft.order.includes(bt) || ft.order.push(bt), Ot("Move created");
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
    to = null, Ri(), bn();
  }), Nn.addEventListener("click", (t) => {
    if (t.target === Nn) {
      if (mt) {
        const r = bt;
        delete Ue[r], mt = !1, Ct = null, Un(ft.order.find((s) => Ue[s]) || Object.keys(Ue)[0]);
      } else
        Ps();
      Ri();
    }
  }), Wt(i("addMovementBtn"), "movement"), Wt(i("addRestBtn"), "rest"), Wt(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", Si), i("useGlobalRestTiming").addEventListener("change", Si), a.querySelectorAll(".createPresetBtn").forEach((t) => t.addEventListener("click", () => {
    Ko(t.dataset.movePreset, !0), Mt();
  })), i("includeWarmupPreset").addEventListener("change", Ha), i("includeCooldownPreset").addEventListener("change", Ha), i("includeWarmupPreset").addEventListener("change", we), i("includeCooldownPreset").addEventListener("change", we), f.addEventListener("input", we), f.addEventListener("input", Pr), i("confirmAddMovement").addEventListener("click", Or), i("confirmAddRest").addEventListener("click", Or), i("addMovementInput").addEventListener("keydown", (t) => {
    t.key === "Enter" && Or();
  });
  const no = i("countdown"), Qt = i("countNum"), za = i("countdownPixelCanvas");
  let Ni = null, ei = "appear";
  class Lo {
    constructor(r, s, u, m, T, H, W) {
      this.width = r.width, this.height = r.height, this.ctx = s, this.x = u, this.y = m, this.color = T, this.speed = (Math.random() * 0.8 + 0.1) * H, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = W, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Ao = [], Is = 1, Hs = 1;
  function _o() {
    const t = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(t) && t > 0 ? t : 1;
  }
  function Wl() {
    var pe;
    if (!za) return;
    const t = _o(), r = Math.max(1, window.innerWidth / t), s = Math.max(1, window.innerHeight / t);
    Is = r, Hs = s;
    const u = Math.min(window.devicePixelRatio || 1, 2);
    za.width = Math.floor(r * u), za.height = Math.floor(s * u), za.style.width = r + "px", za.style.height = s + "px";
    const m = za.getContext("2d");
    m.setTransform(u, 0, 0, u, 0, 0);
    const T = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], H = 12, W = (pe = window.matchMedia) == null ? void 0 : pe.call(window, "(prefers-reduced-motion: reduce)").matches, se = W ? 0 : 0.055;
    Ao = [];
    for (let te = 0; te < r; te += H)
      for (let ee = 0; ee < s; ee += H) {
        const Ae = te - r / 2, Je = ee - s / 2, Pe = Math.sqrt(Ae * Ae + Je * Je), Te = W ? 0 : Math.random() * 75 + Pe * 0.05, Me = new Lo({ width: r, height: s }, m, te, ee, T[Math.floor(Math.random() * T.length)], se, Te);
        Me.maxSizeInteger = 4, Me.maxSize = Math.random() * 3.2 + 0.8, Me.sizeStep = 0.35 + Math.random() * 0.45, Ao.push(Me);
      }
  }
  function Fs(t) {
    cancelAnimationFrame(Ni), ei = t;
    const r = za == null ? void 0 : za.getContext("2d");
    if (!r) return;
    function s() {
      r.clearRect(0, 0, Is, Hs);
      let u = !0;
      Ao.forEach((m) => {
        m[ei](), m.isIdle || (u = !1);
      }), ei === "disappear" && u || (Ni = requestAnimationFrame(s));
    }
    Ni = requestAnimationFrame(s);
  }
  function pr() {
    cancelAnimationFrame(Ni), Wl(), Fs("appear"), setTimeout(() => Fs("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    no.classList.contains("active") && pr();
  });
  const ao = i("pixelTrailCanvas"), Bn = ao.getContext("2d");
  let Va = !0, ti = 0.7, an = 600, _t = [], Pn = null, _a = { x: 0, y: 0, ready: !1 };
  function oo() {
    const t = d.getBoundingClientRect(), r = _o(), s = Math.min(window.devicePixelRatio || 1, 2), u = Math.max(1, t.width / r), m = Math.max(1, t.height / r);
    ao.width = Math.max(1, Math.floor(u * s)), ao.height = Math.max(1, Math.floor(m * s)), ao.style.width = u + "px", ao.style.height = m + "px", Bn.setTransform(s, 0, 0, s, 0, 0);
  }
  function hr(t, r) {
    if (!Va) return;
    const s = performance.now();
    _a.ready || (_a = { x: t, y: r, ready: !0 });
    const u = 7;
    for (let m = 1; m <= u; m++) {
      const T = m / u;
      _t.push({
        x: _a.x + (t - _a.x) * T,
        y: _a.y + (r - _a.y) * T,
        born: s - (u - m) * 10
      });
    }
    _a = { x: t, y: r, ready: !0 };
  }
  function xa(t) {
    if (Pn = null, !g) return;
    if (!Ee.workout.classList.contains("active")) {
      Pn = requestAnimationFrame(xa);
      return;
    }
    const r = d.getBoundingClientRect(), s = _o();
    Bn.clearRect(0, 0, r.width / s, r.height / s), Va && (_t = _t.filter((m) => t - m.born < an), Bn.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", _t.forEach((m) => {
      const T = (t - m.born) / an, H = (1 - T) * ti, W = Math.round(m.x / 14) * 14, se = Math.round(m.y / 14) * 14;
      Bn.globalAlpha = Math.max(0, H);
      const pe = 2 + 5 * (1 - T) * ti;
      Bn.fillRect(W - pe / 2, se - pe / 2, pe, pe);
    }), Bn.globalAlpha = 1), Pn = requestAnimationFrame(xa);
  }
  d.addEventListener("pointermove", (t) => {
    const r = d.getBoundingClientRect(), s = _o();
    hr((t.clientX - r.left) / s, (t.clientY - r.top) / s);
  }), d.addEventListener("pointerleave", () => _a.ready = !1), new ResizeObserver(oo).observe(d), oo(), Pn = requestAnimationFrame(xa);
  const $n = i("movementRippleCanvas"), pa = $n.getContext("2d");
  let Pt = !0, Ga = null, Bi = performance.now();
  function Yr() {
    const t = $n.parentElement.getBoundingClientRect(), r = _o(), s = Math.max(1, t.width / r), u = Math.max(1, t.height / r), m = Math.min(window.devicePixelRatio || 1, 2);
    $n.width = Math.max(1, Math.floor(s * m)), $n.height = Math.max(1, Math.floor(u * m)), $n.style.width = s + "px", $n.style.height = u + "px", pa.setTransform(m, 0, 0, m, 0, 0);
  }
  function Zr() {
    var t;
    return Ft || ((t = je[Xe]) == null ? void 0 : t.kind) === "rest";
  }
  function Os() {
    const t = je[Xe];
    return Zr() ? 2200 : t ? t.kind === "warmup" || t.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Pi(t) {
    if (Ga = null, !g) return;
    if (!Ee.workout.classList.contains("active")) {
      Ga = requestAnimationFrame(Pi);
      return;
    }
    const r = $n.parentElement.getBoundingClientRect(), s = _o(), u = Math.max(1, r.width / s), m = Math.max(1, r.height / s);
    if (pa.clearRect(0, 0, u, m), Pt) {
      const T = Os(), H = (t - Bi) % T / T, W = 15, se = Math.max(8, Math.round(W * m / Math.max(1, u))), pe = u / (W + 1), te = m / (se + 1), ee = u * 0.5, Ae = m * 0.52, Je = Math.hypot(ee, Ae), Te = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let Me = 1; Me <= se; Me++)
        for (let gt = 1; gt <= W; gt++) {
          const vt = gt * pe, Fe = Me * te, yt = Math.hypot(vt - ee, Fe - Ae) / Je, Et = Zr(), lt = Et ? Math.exp(-Math.pow((yt - (H * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, at = Math.exp(-Math.pow((yt - H * 1.25) * 7, 2)), rn = Et ? lt : at, _n = Et ? 0.5 + 0.5 * Math.sin(H * Math.PI * 2 - yt * 3) ** 2 : 0.35 + 0.65 * Math.sin(H * Math.PI * 2 - yt * 5) ** 2, Vt = Et ? 1.4 + rn * 4.2 * _n : 1.2 + rn * 5 * _n;
          pa.beginPath(), pa.arc(vt, Fe, Vt, 0, Math.PI * 2), pa.fillStyle = `rgba(${Te},${Et ? 0.08 + rn * 0.48 : 0.05 + rn * 0.55})`, pa.fill();
        }
    }
    Ga = requestAnimationFrame(Pi);
  }
  new ResizeObserver(Yr).observe($n.parentElement), Yr(), Ga = requestAnimationFrame(Pi);
  const Ii = i("exerciseTitle"), Ea = i("exerciseMeta"), io = i("stepLabel"), Ln = i("digits"), Hi = i("fill"), Eo = i("progress"), fr = i("pause"), Kr = i("nextName"), $r = i("nextMeta"), jl = i("nextIcon"), ha = i("skipNextSession");
  let on = null;
  function Xn(t) {
    for (let r = Math.max(0, t); r < je.length; r++)
      if (!je[r].sessionHidden) return r;
    return -1;
  }
  function Xr() {
    const t = je[Xe];
    if (!t) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Ft) {
      const u = Xn(Xe + 1), m = u >= 0 ? je[u] : null;
      return m ? { name: m.name, meta: Qr(m), icon: mr(m) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (t.rest > 0) return { name: "Rest", meta: t.rest + " sec · " + (t.roundBreakAfter ? "round " + (t.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = Xn(Xe + 1), s = r >= 0 ? je[r] : null;
    return s ? { name: s.name, meta: Qr(s), icon: mr(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Jr() {
    if (!je[Xe]) return je.length;
    const r = Xn(Xe + 1);
    return r < 0 ? je.length : r + 1;
  }
  function mr(t) {
    return t.kind === "video" ? "play" : "clock";
  }
  function Qr(t) {
    return t.kind === "video" ? "YouTube · " + zt(t.duration) : t.group + " · " + t.duration + " sec";
  }
  function gr() {
    return je.length && je[je.length - 1].round || 1;
  }
  function vr(t) {
    const r = je[t];
    if (!r) return "";
    const s = gr();
    if (s <= 1) return "Step " + (t + 1) + " of " + je.length;
    if (r.roundBreak) return "Round " + r.round + " of " + s + " · Rest";
    const u = je.filter((m) => m.round === r.round && !m.roundBreak).length;
    return "Round " + r.round + " of " + s + " · Step " + (r.roundIndex + 1) + " of " + u;
  }
  function fa() {
    return Eo.querySelector('[data-step="' + Xe + '"]');
  }
  function zl() {
    je[Xe] && Number(Eo.dataset.round) !== (je[Xe].round || 1) && Fi(), [...Eo.children].forEach((t) => {
      const r = Number(t.dataset.step);
      t.classList.toggle("done", r < Xe), t.classList.toggle("active", r === Xe), t.classList.toggle("rewindable", r <= Xe), t.disabled = r > Xe, r === Xe && t.style.setProperty("--segment-progress", "0%");
    }), je[Xe] && (io.textContent = vr(Xe), Ro());
  }
  function Vl(t) {
    const r = je.indexOf(t);
    r < 0 || r <= Xe || (t.sessionHidden = !t.sessionHidden, Da(), Ot((t.sessionHidden ? "Hidden " : "Included ") + t.name + " for this session"));
  }
  function In() {
    const t = i("upcomingList");
    if (!t) return;
    t.innerHTML = "";
    const r = Jr(), s = je.slice(r);
    (xn === "all" ? s : s.slice(0, Math.max(1, Number(xn) || 1))).forEach((m) => {
      const T = document.createElement("section");
      T.className = "upcomingCard" + (m.sessionHidden ? " sessionHidden" : "") + (Gi(m) ? " noMeta" : ""), T.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + wt(mr(m)) + '</div><div><div class="upcomingName">' + Ge(m.name) + '</div><div class="upcomingMeta">' + Ge(Qr(m)) + (gr() > 1 ? " · round " + m.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (m.sessionHidden ? "Include this session" : "Skip this session") + "</button>", T.querySelector(".skipSessionBtn").addEventListener("click", () => Vl(m)), t.appendChild(T);
    });
  }
  function Da() {
    var r;
    const t = Xr();
    Kr.textContent = t.name, $r.textContent = t.meta, jl.innerHTML = wt(t.icon);
    {
      const s = Ft ? je[Xn(Xe + 1)] : ((r = je[Xe]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : je[Xn(Xe + 1)];
      a.querySelector(".nextCard").classList.toggle("noMeta", !!(s && Gi(s)));
    }
    if (on = null, Ft) {
      const s = Xn(Xe + 1);
      s >= 0 && (on = je[s]);
    } else {
      const s = je[Xe];
      if (s && s.rest > 0)
        on = null;
      else {
        const u = Xn(Xe + 1);
        u >= 0 && (on = je[u]);
      }
    }
    ha && (ha.hidden = !on, ha.textContent = on != null && on.sessionHidden ? "Include this session" : "Skip this session"), In();
  }
  ha.addEventListener("click", () => {
    on && (on.sessionHidden = !on.sessionHidden, Ot((on.sessionHidden ? "Hidden " : "Included ") + on.name + " for this session"), Da());
  });
  let Fn = null, ro = null;
  function ni(t, r = {}) {
    const s = Ue[bt];
    l.fire(t, { move: (s == null ? void 0 : s.name) || "", move_id: bt, ...r });
  }
  function es() {
    const t = Ue[bt];
    Fn = { key: bt, name: (t == null ? void 0 : t.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(ro), ro = setInterval(() => {
      Fn && !Yn && Fn.active++;
    }, 1e3), ni("started", { steps: je.length });
  }
  function qs(t) {
    if (clearInterval(ro), !Fn) return;
    const r = Fn;
    Fn = null, ni(t ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (ft.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: t }), ft.history = ft.history.slice(0, 1e3), bn(), uo(), Qn());
  }
  function Ws() {
    y("workout"), br();
    const t = Xn(0);
    t >= 0 && je[t].kind === "video" && Do(je[t]);
  }
  function ai() {
    qi(), qs(!1), clearInterval(Xt), clearInterval(xo), Ft = !1, ya(!1), i("app").classList.remove("resting"), no.classList.remove("active"), y("home");
  }
  function br() {
    no.classList.add("active");
    let t = 5;
    Qt.textContent = t, requestAnimationFrame(pr), clearInterval(xo), xo = setInterval(() => {
      t--, t > 0 ? (Qt.textContent = t, pr()) : (clearInterval(xo), Qt.textContent = "GO", pr(), setTimeout(() => {
        no.classList.remove("active"), cancelAnimationFrame(Ni), ts();
      }, 650));
    }, 1e3);
  }
  function Fi() {
    var r;
    Eo.innerHTML = "";
    const t = ((r = je[Math.max(0, Xe)] || je[0]) == null ? void 0 : r.round) || 1;
    Eo.dataset.round = t, je.forEach((s, u) => {
      if ((s.round || 1) !== t) return;
      const m = document.createElement("button");
      m.dataset.step = u, m.type = "button", m.className = "progressSegment", m.setAttribute("aria-label", "Go to " + s.name), m.addEventListener("click", () => {
        u <= Xe && js(u);
      }), Eo.appendChild(m);
    });
  }
  function ya(t) {
    t = !!t;
    const r = Yn !== t;
    if (Yn = t, fr.textContent = t ? "Resume" : "Pause", i("app").classList.toggle("paused", t), An && xt)
      try {
        t ? xt.pauseVideo() : xt.playVideo();
      } catch {
      }
    r && Fn && ni(t ? "paused" : "resumed");
  }
  function js(t) {
    t < 0 || t >= je.length || t > Xe || (clearInterval(Xt), Ft = !1, i("app").classList.remove("resting"), Xe = t, ya(!1), lo(), Xt = setInterval(co, 1e3));
  }
  function ts() {
    if (Xe = Xn(0), ya(!1), Fi(), Xe < 0) {
      Ii.textContent = "No activities", Ea.textContent = "Open Edit and enable or add a movement", Ea.hidden = !1;
      return;
    }
    es(), lo(), clearInterval(Xt), Xt = setInterval(co, 1e3);
  }
  const Oi = i("videoStage"), oi = i("videoSound"), Gl = 0, ii = 1, Ht = 2;
  let ka = 0, On = null, qn = null, xt = null, Wn = null, ri = 0, so = !1, An = null, ns = null;
  function as() {
    var t;
    return (t = window.YT) != null && t.Player ? Promise.resolve(window.YT) : On || (On = new Promise((r, s) => {
      const u = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          u == null || u();
        } catch {
        }
      };
      const m = setInterval(() => {
        var H;
        (H = window.YT) != null && H.Player && (clearInterval(m), clearTimeout(T), r(window.YT));
      }, 100), T = setTimeout(() => {
        clearInterval(m), On = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const H = document.createElement("script");
        H.src = "https://www.youtube.com/iframe_api", H.async = !0, H.onerror = () => {
          clearInterval(m), clearTimeout(T), On = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(H);
      }
    }), On);
  }
  function cn() {
    return qn || (qn = as().then((t) => new Promise((r) => {
      const s = document.createElement("div");
      i("videoFrame").appendChild(s), xt = new t.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(xt), onStateChange: (u) => Ul(u.data), onError: (u) => Yl(u.data) }
      });
    })), qn.catch(() => {
      qn = null;
    }), qn);
  }
  function Do(t) {
    !(t != null && t.videoId) || t.videoError || cn().then((r) => {
      An || Wn === t.videoId || (Wn = t.videoId, ri = Number(t.start) || 0, so = !1, r.mute(), r.loadVideoById({ videoId: t.videoId, startSeconds: ri }));
    }).catch(() => {
    });
  }
  function zs() {
    const t = Xn(Xe + 1);
    t >= 0 && je[t].kind === "video" && Do(je[t]);
  }
  function Ul(t) {
    if (!An) {
      t === ii && !so && (so = !0, xt.pauseVideo(), xt.seekTo(ri, !0));
      return;
    }
    Oi.classList.toggle("playing", t === ii), je[Xe] === An && performance.now() > ka && (t === ii && Yn ? ya(!1) : t === Ht && !Yn && ya(!0)), t === ii && Hn(An.videoId, xt.getDuration()) && bn(), t === Gl && Wi();
  }
  function Yl(t) {
    const r = An;
    if (!r) {
      Wn = null;
      return;
    }
    t === 101 || t === 150 ? (is(r.videoId), Ot("That video can’t play outside YouTube, so it was skipped")) : Ot("The video couldn’t play, so it was skipped"), Wi();
  }
  function Vs(t) {
    if (i("app").classList.add("videoStep"), oi.hidden = !0, An = t, clearTimeout(ns), !t.videoId) {
      Ot("This video step has no link yet, so it was skipped"), setTimeout(() => Wi(), 0);
      return;
    }
    cn().then((r) => {
      if (An !== t) return;
      ka = performance.now() + 1500;
      const s = Number(t.start) || 0;
      Wn !== t.videoId ? (Wn = t.videoId, ri = s, r.loadVideoById({ videoId: t.videoId, startSeconds: s })) : (r.seekTo(s, !0), r.playVideo()), r.unMute(), Yn && r.pauseVideo(), ns = setTimeout(() => {
        An !== t || Yn || (r.getPlayerState() !== ii ? (r.mute(), r.playVideo(), oi.hidden = !1) : r.isMuted() && (oi.hidden = !1));
      }, 1600);
    }).catch(() => {
      An === t && (Ot("YouTube didn’t load, so the video was skipped"), Wi());
    });
  }
  function os() {
    if (!i("app").classList.contains("videoStep")) return;
    const t = a.querySelector(".workGrid"), r = a.querySelector(".sessionControlRow"), s = t.getBoundingClientRect().top, u = (r == null ? void 0 : r.offsetHeight) || 42, m = window.innerHeight - s - 16 - u - 84;
    t.style.setProperty("--theater-h", Math.max(240, Math.round(m)) + "px");
  }
  window.addEventListener("resize", os);
  function qi() {
    clearTimeout(ns);
    const t = An;
    if (An = null, i("app").classList.remove("videoStep"), Oi.classList.remove("playing"), oi.hidden = !0, t && xt) {
      try {
        xt.pauseVideo();
      } catch {
      }
      Wn = null;
    }
  }
  function Wi() {
    const t = An;
    !t || je[Xe] !== t || (qi(), clearInterval(Xt), No(), Xt = setInterval(co, 1e3));
  }
  oi.addEventListener("click", () => {
    xt && (xt.unMute(), xt.playVideo()), oi.hidden = !0;
  });
  function Zl(t) {
    var u;
    const r = Number(t.start) || 0;
    if (t.useVideoLength === !1) return r + (Number(t.duration) || 300);
    const s = xt && An === t && Number((u = xt.getDuration) == null ? void 0 : u.call(xt)) || 0;
    return Number(t.end) || s || Number(t.videoDuration) || r + (Number(t.duration) || 300);
  }
  function Gs(t, r) {
    const s = Ue[bt];
    [St, ot, En, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((u) => (Array.isArray(u) ? u : []).forEach((m) => {
      m && m.kind === "video" && m.videoId === t && r(m);
    }));
  }
  function Hn(t, r) {
    r = Math.round(Number(r) || 0);
    let s = !1;
    return t && r > 0 && Gs(t, (u) => {
      u.videoDuration !== r && (u.videoDuration = r, s = !0);
    }), s;
  }
  function is(t) {
    Gs(t, (r) => {
      r.videoError = "embed";
    }), bn();
  }
  function Us(t) {
    const r = t.videoId;
    if (!r) return;
    const s = () => {
      Nn.classList.contains("open") ? k || Mt() : (Mt(), bn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((u) => u.ok ? u.json() : Promise.reject(u.status)).then((u) => {
      t.videoId === r && (t.videoTitle = u.title || "", t.autoName && u.title && (t.name = u.title), s());
    }).catch((u) => {
      t.videoId === r && u === 401 && (t.videoError = "embed", s());
    }), Ys(r).then((u) => {
      Hn(r, u) && s();
    }).catch((u) => {
      u === "embed" && t.videoId === r && (t.videoError = "embed", s());
    });
  }
  function Ys(t) {
    return as().then((r) => new Promise((s, u) => {
      const m = document.createElement("div");
      m.className = "videoProbe", m.setAttribute("aria-hidden", "true");
      const T = document.createElement("div");
      m.appendChild(T), i("app").appendChild(m);
      let H = null, W = !1;
      const se = (ee, Ae) => {
        W || (W = !0, clearTimeout(pe), setTimeout(() => {
          try {
            H == null || H.destroy();
          } catch {
          }
          m.remove();
        }, 0), Ae ? u(Ae) : s(ee));
      }, pe = setTimeout(() => se(0), 2e4), te = () => {
        var Ae;
        const ee = Number((Ae = H == null ? void 0 : H.getDuration) == null ? void 0 : Ae.call(H)) || 0;
        return ee > 0 && se(ee), ee > 0;
      };
      H = new r.Player(T, {
        width: 320,
        height: 180,
        videoId: t,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            te() || (H.mute(), H.playVideo());
          },
          onStateChange: () => te(),
          onError: (ee) => se(0, ee.data === 101 || ee.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function lo() {
    Ft = !1;
    const t = je[Xe];
    i("app").classList.toggle("resting", t.kind === "rest"), t.kind === "video" ? Vs(t) : qi(), wn = t.duration, Ka = t.duration, Ii.textContent = t.name, Ea.textContent = t.group, Ea.hidden = !0, io.textContent = vr(Xe), Fn && ni("step", { name: t.name, group: t.group, kind: t.kind, step: Xe + 1, of: je.length, round: t.round || 1, rounds: gr(), duration: t.duration }), Da(), zl(), zs(), t.kind === "video" && setTimeout(os, 0);
  }
  function Ro() {
    var m;
    const t = ((m = je[Xe]) == null ? void 0 : m.kind) === "video" && !Ft, r = t && wn >= 60;
    Ln.textContent = r ? zt(wn) : wn, Ln.classList.toggle("long", r), t && (i("videoClock").textContent = zt(wn) + " left");
    const s = wn / Ka * 100;
    Hi.style.width = s + "%";
    const u = fa();
    if (u && !Ft) {
      const T = 100 - s;
      u.style.setProperty("--segment-progress", T + "%");
    }
  }
  function co() {
    var r, s;
    if (Yn) return;
    const t = je[Xe];
    if ((t == null ? void 0 : t.kind) === "video" && !Ft && An === t) {
      const u = Number((r = xt == null ? void 0 : xt.getCurrentTime) == null ? void 0 : r.call(xt)) || 0, m = Number(t.start) || 0, T = Zl(t);
      Ka = Math.max(1, T - m), (u > m || ((s = xt == null ? void 0 : xt.getPlayerState) == null ? void 0 : s.call(xt)) === ii) && (wn = Math.max(0, Math.ceil(T - u))), Ro(), u > m && u >= T - 0.25 && Wi();
      return;
    }
    wn--, Ro(), wn <= 0 && (t.rest > 0 ? Zs(t.rest) : No());
  }
  function Zs(t) {
    var s;
    Ft = !0, i("app").classList.add("resting");
    const r = fa();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(Xt), wn = t, Ka = t, Fn && ni("rest", { duration: t }), Ii.textContent = "Rest", Ea.textContent = (s = je[Xe]) != null && s.roundBreakAfter ? "Round " + (je[Xe].round + 1) + " next" : "Recovery", Da(), Ro(), Xt = setInterval(() => {
      Yn || (wn--, Ro(), wn <= 0 && (clearInterval(Xt), No(), Xt = setInterval(co, 1e3)));
    }, 1e3);
  }
  function No() {
    Ft = !1;
    const t = Xn(Xe + 1);
    if (t >= 0)
      Xe = t, lo();
    else {
      clearInterval(Xt), qi(), ya(!1), i("app").classList.remove("resting"), Ii.textContent = "Complete", Ea.textContent = "Move finished", Ea.hidden = !1, Ln.textContent = "✓";
      {
        const r = gr();
        io.textContent = r > 1 ? r + " rounds done" : je.filter((s) => !s.roundBreak).length + " steps done";
      }
      qs(!0);
      {
        const r = Mr(7).reduce((s, u) => s + u.minutes, 0);
        Ea.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      Hi.style.width = "100%", Da();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    Ks(), ya(!1);
  });
  function Ks() {
    clearInterval(Xt);
    const t = je[Xe];
    if (Ft) {
      Ft = !1, i("app").classList.remove("resting");
      const s = Xn(Xe + 1);
      s >= 0 ? (Xe = s, lo(), Xt = setInterval(co, 1e3)) : No();
      return;
    }
    if (t && t.rest > 0) {
      Zs(t.rest);
      return;
    }
    const r = Xn(Xe + 1);
    r >= 0 ? (Xe = r, lo(), Xt = setInterval(co, 1e3)) : No();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(Xt), ya(!1), Ft) {
      const t = je[Xe];
      wn = t.rest, Ka = t.rest, Ii.textContent = "Rest", Ea.textContent = "Recovery", i("app").classList.add("resting"), Da(), Ro();
    } else
      lo();
    Xt = setInterval(Ft ? () => {
      Yn || (wn--, Ro(), wn <= 0 && (clearInterval(Xt), No(), Xt = setInterval(co, 1e3)));
    } : co, 1e3);
  });
  function ji(t, r, s, u) {
    let m = 0, T = null, H = !1;
    function W() {
      T && cancelAnimationFrame(T), T = null, m = 0, H = !1, r.style.width = "0%", t.classList.remove("holding");
    }
    function se(ee) {
      if (!H) return;
      m || (m = ee);
      const Ae = Math.min(1, (ee - m) / s);
      if (r.style.width = Ae * 100 + "%", Ae >= 1) {
        H = !1, T && cancelAnimationFrame(T), T = null, r.style.width = "100%", setTimeout(() => r.style.width = "0%", 90), u();
        return;
      }
      T = requestAnimationFrame(se);
    }
    function pe(ee) {
      var Ae;
      if (!(ee && ee.button !== void 0 && ee.button !== 0)) {
        ee == null || ee.preventDefault(), W(), H = !0, t.classList.add("holding");
        try {
          (Ae = t.setPointerCapture) == null || Ae.call(t, ee.pointerId);
        } catch {
        }
        T = requestAnimationFrame(se);
      }
    }
    function te() {
      H && W();
    }
    t.addEventListener("pointerdown", pe), t.addEventListener("pointerup", te), t.addEventListener("pointercancel", te), t.addEventListener("lostpointercapture", te), t.addEventListener("keydown", (ee) => {
      (ee.key === " " || ee.key === "Enter") && !ee.repeat && pe(ee);
    }), t.addEventListener("keyup", (ee) => {
      (ee.key === " " || ee.key === "Enter") && te();
    });
  }
  const $s = i("endWorkout");
  ji($s, i("holdEndFill"), 1500, ai);
  const Bo = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    Bo.classList.add("open"), Bo.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    Bo.classList.remove("open"), Bo.setAttribute("aria-hidden", "true");
  });
  function Xs() {
    const t = bt, r = a.querySelector('.workoutPanel[data-workout="' + t + '"]');
    r && r.remove(), delete Ue[t], ft.order = ft.order.filter((u) => u !== t);
    let s = a.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const u = "custom-" + Date.now();
      Ue[u] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, ft.order.push(u), s = Uo(u, Ue[u]);
    }
    Bo.classList.remove("open"), Bo.setAttribute("aria-hidden", "true"), to = null, Ri(), Un(s.dataset.workout), bn(), Ot("Move deleted");
  }
  ji(i("deleteMoveYes"), i("deleteMoveFill"), 1500, Xs);
  const wr = a.querySelector(".rubberTabs"), Ra = i("rubberIndicator");
  function zi(t, r = !0) {
    if (!t || !wr || !Ra) return;
    const s = wr.getBoundingClientRect(), u = t.getBoundingClientRect();
    Ra.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const m = _o();
    Ra.style.left = (u.left - s.left) / m + wr.scrollLeft + "px", Ra.style.width = u.width / m + "px", r && (Ra.style.transform = "scaleX(1.08)", setTimeout(() => Ra.style.transform = "scaleX(1)", 180));
  }
  a.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => {
    t.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), a.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), a.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), t.classList.add("active"), i(t.dataset.pane).classList.add("active"), zi(t, !0);
  })), requestAnimationFrame(() => zi(a.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => zi(a.querySelector(".tab.active"), !1));
  const Vi = i("pixelTrailToggle"), rs = i("rippleToggle"), Po = i("trailStrength"), Na = i("trailLife");
  function Jn(t, r) {
    tt()[t] = r, bn();
  }
  const Ua = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function ss(t) {
    return t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "g:" + String(t.group || "").trim().toLowerCase();
  }
  function Gi(t) {
    var r;
    return !!((r = tt().hideMeta) != null && r[ss(t)]);
  }
  function Kl() {
    const t = /* @__PURE__ */ new Map(), r = (s, u, m) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const T = ss(s);
      let H = t.get(T);
      H || (H = { key: T, label: T === "rest" ? "Rest" : T === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, t.set(T, H)), H.kinds.add(T === "rest" ? "Rest" : T === "video" ? "Video" : u), H.moves.add(m), H.count++;
    };
    return Object.values(Ue).forEach((s) => {
      const u = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Qe)).forEach((m) => r(m, "Warm-up", u)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((m) => r(m, m.presetRole === "warmup" ? "Warm-up" : m.presetRole === "cooldown" ? "Cooldown" : "Movement", u)), (s.cooldown || (s.customSequence ? [] : vn)).forEach((m) => r(m, "Cooldown", u));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, u]) => {
      t.has(s) || t.set(s, { key: s, label: u, kinds: /* @__PURE__ */ new Set([u]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...t.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, u) => Ua.indexOf(s.kind) - Ua.indexOf(u.kind) || s.label.localeCompare(u.label));
  }
  let dn = "all";
  function ls() {
    const t = i("metaSearch").value.trim().toLowerCase();
    return Kl().filter((r) => (dn === "all" || r.kind === dn) && (!t || r.label.toLowerCase().includes(t) || r.moves.some((s) => s.toLowerCase().includes(t))));
  }
  function si() {
    const t = i("metaTableBody");
    if (!t) return;
    const r = tt().hideMeta || {}, s = ls();
    t.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((m) => {
      const T = !r[m.key], H = m.count ? (m.moves.length > 2 ? m.moves.slice(0, 2).join(", ") + " + " + (m.moves.length - 2) + " more" : m.moves.join(", ")) + " · " + m.count + " step" + (m.count === 1 ? "" : "s") : "Not used yet", W = document.createElement("tr");
      W.className = T ? "" : "off", W.innerHTML = '<td><div class="metaType">' + Ge(m.label) + '</div><div class="metaSub">' + Ge(m.kind + " · " + H) + '</div></td><td class="metaKindCol">' + Ge(m.kind) + '</td><td class="metaUsedCol">' + Ge(H) + '</td><td class="metaSwitchCol"><button class="switch' + (T ? " on" : "") + '" type="button" role="switch" aria-checked="' + T + '" aria-label="Second line for ' + Ge(m.label) + ' on phones"></button></td>', W.querySelector(".switch").addEventListener("click", () => cs([m.key], T)), t.appendChild(W);
    });
    const u = s.filter((m) => r[m.key]).length;
    i("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (u ? " · " + u + " hidden on phones" : "") : "";
  }
  function cs(t, r) {
    const s = { ...tt().hideMeta || {} };
    t.forEach((u) => {
      r ? s[u] = !0 : delete s[u];
    }), Jn("hideMeta", s), si(), Ie(), Da();
  }
  i("metaSearch").addEventListener("input", si), i("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.addEventListener("click", () => {
    dn = t.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === t)), si();
  })), i("metaHideAll").addEventListener("click", () => cs(ls().map((t) => t.key), !0)), i("metaShowAll").addEventListener("click", () => cs(ls().map((t) => t.key), !1));
  const li = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...tt().toggles || {} };
  function Js() {
    a.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", li[s.dataset.toggle] !== !1)), a.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, u]) => {
      i(u).hidden = li[s] === !1;
    });
    const t = ["steps", "mood", "energyLevel"].some((s) => li[s] !== !1);
    a.querySelector(".activityCard").hidden = !t, i("weatherCard").hidden = !0;
    const r = a.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !t), r.classList.toggle("noWeather", !0);
  }
  a.querySelectorAll("[data-toggle]").forEach((t) => t.addEventListener("click", () => {
    li[t.dataset.toggle] = li[t.dataset.toggle] === !1, Js(), Jn("toggles", { ...li });
  })), Js();
  function pt() {
    Vi.classList.toggle("on", Va), rs.classList.toggle("on", Pt), Po.value = Math.round(ti * 100), i("trailStrengthValue").textContent = Po.value + "%", Na.value = an, i("trailLifeValue").textContent = Na.value + " ms";
  }
  tt().trailEnabled !== void 0 && (Va = tt().trailEnabled), tt().rippleEnabled !== void 0 && (Pt = tt().rippleEnabled), tt().trailStrength !== void 0 && (ti = tt().trailStrength), tt().trailMaxAge !== void 0 && (an = tt().trailMaxAge), pt(), Vi.addEventListener("click", () => {
    Va = !Va, Vi.classList.toggle("on", Va), Va || (_t = []), Jn("trailEnabled", Va);
  }), rs.addEventListener("click", () => {
    Pt = !Pt, rs.classList.toggle("on", Pt), Jn("rippleEnabled", Pt);
  }), Po.addEventListener("input", () => {
    ti = Number(Po.value) / 100, i("trailStrengthValue").textContent = Po.value + "%";
  }), Po.addEventListener("change", () => Jn("trailStrength", ti)), Na.addEventListener("input", () => {
    an = Number(Na.value), i("trailLifeValue").textContent = Na.value + " ms";
  }), Na.addEventListener("change", () => Jn("trailMaxAge", an)), sr.addEventListener("change", () => Jn("upcomingCount", xn));
  function ds(t) {
    a.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === t));
    const r = t === "light";
    i("app").classList.toggle("light", r), l.setLight(r), ho(a);
  }
  ds(tt().theme || "dark"), a.querySelectorAll(".themeBtn").forEach((t) => t.addEventListener("click", () => {
    ds(t.dataset.theme), Jn("theme", t.dataset.theme);
  }));
  const Mn = { steps: null, weather: null, ...tt().entities || {} };
  let tn = null, Ba = {};
  function Qs(t) {
    const r = Object.values(t).filter((W) => W.entity_id.startsWith("sensor.") || W.entity_id.startsWith("input_number.")), s = (W) => W.attributes.friendly_name || W.entity_id, u = r.filter((W) => /step/i.test(W.entity_id) || /step/i.test(s(W)) || ["steps", "step"].includes(String(W.attributes.unit_of_measurement || "").toLowerCase())), m = r.filter((W) => !u.includes(W)), T = (W, se) => s(W).localeCompare(s(se)), H = (W, se) => /health_steps/.test(se.entity_id) - /health_steps/.test(W.entity_id) || T(W, se);
    return { suggested: u.sort(H), rest: m.sort(T), label: s };
  }
  function el(t) {
    const r = i("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: s, rest: u, label: m } = Qs(t), T = (se) => '<option value="' + Ge(se.entity_id) + '">' + Ge(m(se)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(T).join("") + "</optgroup>" : "") + (u.length ? '<optgroup label="All sensors">' + u.map(T).join("") + "</optgroup>" : ""), r.value = Mn.steps || "";
    const H = i("stepsStatus"), W = Mn.steps && t[Mn.steps];
    H.textContent = W ? "Connected · " + m(W) : H.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    Mn.steps = i("stepsEntity").value || null, Jn("entities", { ...Mn }), Ba = {}, kr(), tn && (el(tn), yr(tn));
  });
  function tl(t, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(t);
  }
  function xr() {
    const t = Mn.steps && (tn == null ? void 0 : tn[Mn.steps]), r = Number(t == null ? void 0 : t.state);
    return Number.isFinite(r) ? r : null;
  }
  function yr(t) {
    var u;
    const r = Mn.steps, s = r ? Number((u = t[r]) == null ? void 0 : u.state) : NaN;
    i("stepsMeta").textContent = r ? Number.isFinite(s) ? tl(s) : "—" : "Set up in Settings";
  }
  let Ui = 0;
  async function kr() {
    const t = Mn.steps;
    if (!t || !l.ws) return;
    Ui = Date.now();
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const u = await l.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: r.toISOString(), statistic_ids: [t], period: "day", types: ["max"] }), m = (u == null ? void 0 : u[t]) || [], T = {};
      if (m.forEach((H) => {
        Number.isFinite(H.max) && (T[Gt(new Date(H.start))] = H.max);
      }), !Object.keys(T).length) {
        const H = await l.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: r.toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((H == null ? void 0 : H[t]) || []).forEach((W) => {
          const se = Number(W.s ?? W.state), pe = W.lu ? W.lu * 1e3 : Date.parse(W.last_updated || W.last_changed);
          if (!Number.isFinite(se) || !pe) return;
          const te = Gt(new Date(pe));
          T[te] = Math.max(T[te] || 0, se);
        });
      }
      Ba = T, Qn();
    } catch {
    }
  }
  function uo() {
    Qn();
  }
  uo(), setInterval(() => {
    uo(), _i(), ja();
  }, 10 * 60 * 1e3);
  function Mr(t) {
    const r = {}, s = {};
    ft.history.forEach((H) => {
      const W = Gt(new Date(H.start));
      r[W] = (r[W] || 0) + (H.seconds || 0) / 60, s[W] = (s[W] || 0) + 1;
    });
    const u = /* @__PURE__ */ new Date(), m = Gt(u), T = [];
    for (let H = t - 1; H >= 0; H--) {
      const W = new Date(u.getFullYear(), u.getMonth(), u.getDate() - H), se = Gt(W), pe = ft.checkins.filter((ee) => ee.date === se), te = (ee) => {
        const Ae = pe.map((Je) => Je[ee]).filter(Boolean);
        return Ae.length ? Ae.reduce((Je, Pe) => Je + Pe, 0) / Ae.length : null;
      };
      T.push({
        key: se,
        date: W,
        minutes: Math.round(r[se] || 0),
        moves: s[se] || 0,
        steps: se === m && xr() != null ? xr() : Ba[se] ?? null,
        mood: te("mood"),
        energy: te("energy")
      });
    }
    return T;
  }
  function nl(t) {
    let r = t.length - 1;
    t[r] && !t[r].minutes && r--;
    let s = 0;
    for (; r >= 0 && t[r].minutes > 0; )
      s++, r--;
    return s;
  }
  function Qn() {
    const t = i("insightCard");
    if (!t) return;
    const r = Mr(30), s = nl(r), u = r.reduce((pe, te) => pe + te.minutes, 0), m = /* @__PURE__ */ new Date(), T = Gt(m), H = Gt(new Date(m.getFullYear(), m.getMonth(), m.getDate() - (m.getDay() + 6) % 7)), W = r.filter((pe) => pe.key >= H && pe.key <= T).reduce((pe, te) => pe + te.minutes, 0), se = (pe, te, ee) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + pe + '</div><div><div class="activityRowName">' + Ge(te) + '</div><div class="activityRowMeta">' + Ge(ee) + "</div></div></div>";
    t.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + wt("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + se(wt("clock"), "This week", W + " min") + se(wt("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + se(wt("calendar"), "30 days", u + " min") + "</div>";
  }
  const ci = {
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
  }, us = (t) => t === "sunny" ? "clear" : t === "clear-night" ? "night" : t === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(t) ? "rain" : ["snowy", "snowy-rainy"].includes(t) ? "snow" : "cloudy", Io = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Ho = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Sr = 0;
  const Cr = (t, r) => '<path class="' + r + '" d="' + t + '"/>', $l = (t, r) => ' style="animation-delay:-' + Math.round(t * 137 % r) + 'ms"', ma = (t, r, s, u) => {
    const m = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + $l(t, 2400) + ' d="M' + t + " " + (r - s) + "L" + (t + m) + " " + (r - m) + "L" + (t + s) + " " + r + "L" + (t + m) + " " + (r + m) + "L" + t + " " + (r + s) + "L" + (t - m) + " " + (r + m) + "L" + (t - s) + " " + r + "L" + (t - m) + " " + (r - m) + 'Z"/>';
  }, ps = ([t, r, s], u) => '<path class="wxMoonPath" d="' + t + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + r + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Xl = (t, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Jl = (t) => (t ? ["29.35", "43.04", "56.74"].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), Ql = (t) => (t ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, s], u) => '<circle class="wxFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + r + '" cy="' + s + '" r="' + (t ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function al(t, r, s, u) {
    return t === "clear" ? r ? ps(s ? Ho.l : Ho.s, u) + (s ? ma(70, 20, 5.83, 1) + ma(78.33, 41.67, 3.75, 0.8) + ma(60, 71.67, 3.33, 0.6) : ma(42, 12, 3.5, 1) + ma(47, 25, 2.25, 0.8) + ma(36, 43, 2, 0.6)) : Xl(u, s) : t === "partly" ? (r ? ps(s ? Ho.lp : Ho.sp, u) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Cr(s ? Io.lp : Io.sp, r ? "wxCloudLight" : "wxBright") + (r ? s ? ma(73.33, 16.67, 4.17, 0.9) : ma(44, 10, 2.5, 0.9) : "") : t === "cloudy" ? Cr(s ? Io.lc : Io.s, r ? "wxCloudLight" : "wxBright") + (r ? s ? ma(15, 15, 3.75, 0.8) + ma(76.67, 13.33, 2.92, 0.6) : ma(9, 9, 2.25, 0.8) + ma(46, 8, 1.75, 0.6) : "") : Cr(s ? Io.lr : Io.s, "wxCloudLight") + (t === "rain" ? Jl(s) : Ql(s));
  }
  const hs = () => {
    var t;
    return ((t = tn == null ? void 0 : tn["sun.sun"]) == null ? void 0 : t.state) === "below_horizon";
  };
  let jn = tt().weatherStyle || "bitmap", ol = tt().weatherLayout === "strip" ? "strip" : "tiles", il = tt().weatherMotion !== !1;
  const po = () => il && !ue(), di = /* @__PURE__ */ new Map(), Fo = 700, ec = (t) => {
    const [r, s] = t.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: s === "night" };
  };
  function Tr(t, r, s, u = jn, m, T) {
    let H = us(t);
    const W = H === "night" || (T != null ? !!T : !!s && hs());
    H === "night" && (H = "clear");
    const se = r ? 90 : 54, pe = El(t, W), te = performance.now();
    let ee = m ? di.get(m) : null;
    if (m && !ee ? di.set(m, ee = { key: pe, t0: -1e9 }) : ee && ee.key !== pe && (ee.fromKey = ee.key, ee.from = ee.last || null, ee.key = pe, ee.t0 = te), u !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + pe + '"' + (m ? ' data-wx-slot="' + m + '"' : "") + ' data-wx-style="' + u + '" data-wx-size="' + se + '"></canvas></span>';
    let Ae = "";
    if (ee && te - ee.t0 < Fo && (po() || ue())) {
      const Je = ec(ee.fromKey);
      Ae = '<span class="wxLayer wxOut ' + Je.k + (Je.night ? " night" : "") + '" style="animation-delay:' + Math.round(ee.t0 - te) + 'ms"><svg viewBox="0 0 ' + se + " " + se + '">' + al(Je.k, Je.night, r, "wxg" + ++Sr) + "</svg></span>";
    }
    return '<span class="wxIcon ' + H + (W ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + se + " " + se + '">' + al(H, W, r, "wxg" + ++Sr) + "</svg>" + Ae + "</span>";
  }
  function Yi() {
    const t = i("app"), r = getComputedStyle(t), s = (W) => r.getPropertyValue(W).trim(), u = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([W, se]) => {
      s(se) && (u[W] = s(se));
    });
    const m = s("--color-text-primary") || "#f1f1f1", T = s("--color-bg-card") || "#222222", H = t.classList.contains("light");
    return { colors: u, ink: H ? m : T, paper: H ? T : m };
  }
  function ho(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const u = Yi(), m = po(), T = ue();
    s.forEach((H) => {
      var ee;
      const W = H.dataset.wx, se = H.dataset.wxSlot ? di.get(H.dataset.wxSlot) : null;
      let pe = _c(W, u.colors);
      if (se && se.key === W) {
        const Ae = (r - se.t0) / Fo;
        Ae < 1 && (m || T) && (pe = Iu(se.from || _c(se.fromKey, u.colors), pe, Math.max(0, Ae), u.colors, T)), se.last = pe;
      }
      const te = Xd(pe, { size: Number(H.dataset.wxSize) || 54, px: 2, oneBit: H.dataset.wxStyle === "onebit", colors: u.colors, ink: u.ink, paper: u.paper, clock: r, idle: m });
      H.width !== te.w && (H.width = te.w), H.height !== te.h && (H.height = te.h), (ee = H.getContext("2d")) == null || ee.putImageData(new ImageData(te.data, te.w, te.h), 0, 0);
    });
  }
  let ui = null, pi = -1;
  function hi(t) {
    if (ui = null, !g) return;
    const r = po(), s = Math.floor(t / 100), u = [...di.values()].some((se) => t - se.t0 < Fo), m = [...v.values()].some((se) => t - se.t0 < se.dur), T = Ee.home.classList.contains("active"), H = ke.classList.contains("open"), W = r && jn === "smooth" && (H || T && ol === "strip");
    !document.hidden && (u || m || W || r && s !== pi) && (pi = s, T && (ho(i("weatherCard"), t), I(i("weatherCard"), t)), H && (ho(ke, t), I(ke, t))), (r || u || m) && (ui = requestAnimationFrame(hi));
  }
  function fo() {
    i("app").classList.toggle("wxMotion", po()), !ui && g && (ui = requestAnimationFrame(hi));
  }
  let fs = [];
  const en = 36e5, rl = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function e() {
    const t = /* @__PURE__ */ new Date(), r = (T, H) => new Date(t.getFullYear(), t.getMonth(), t.getDate() + T, H), s = [], u = [], m = [...Array(6)].map((T, H) => {
      const W = r(H, 6), se = r(H, 18), pe = r(H + 1, 6), te = fs.find((Ae) => Gt(new Date(Ae.datetime)) === Gt(W)), ee = (Ae, Je, Pe) => {
        const Te = s.filter((vt) => vt.t >= +Ae && vt.t < +Je);
        if (Te.length) {
          const vt = {};
          return Te.forEach((Fe) => {
            vt[Fe.c] = (vt[Fe.c] || 0) + (rl.has(Fe.c) ? 2 : 1);
          }), Object.entries(vt).sort((Fe, yt) => yt[1] - Fe[1])[0][0];
        }
        const Me = u.find((vt) => {
          const Fe = +new Date(vt.datetime);
          return Fe >= +Ae - 3 * en && Fe < +Je && (vt.is_daytime == null || !!vt.is_daytime == !Pe);
        });
        if (Me) return Me.condition;
        const gt = (te == null ? void 0 : te.condition) || "cloudy";
        return Pe && gt === "sunny" ? "clear-night" : gt;
      };
      return { start: +W, end: +pe, day: ee(W, se, !1), night: ee(se, pe, !0), hi: Number(te == null ? void 0 : te.temperature), lo: Number(te == null ? void 0 : te.templow) };
    });
    return { days: m, hours: s, start: m[0].start, end: m[5].end };
  }
  const n = (t, r) => {
    const s = t.days.findIndex((m) => r < m.end);
    if (s < 0) return 1;
    const u = t.days[s];
    return Math.max(0, (s + (r - u.start) / (u.end - u.start)) / 6);
  }, o = (t, r) => {
    const s = Math.max(0, Math.min(0.99999, r)) * 6, u = Math.floor(s), m = t.days[u];
    return m.start + (s - u) * (m.end - m.start);
  };
  function c(t, r) {
    const s = Math.max(0, t.days.findIndex((se) => r < se.end)), u = t.days[s], m = (r - u.start) / (u.end - u.start) >= 0.5;
    let T = m ? u.night : u.day, H = NaN;
    const W = t.hours;
    if (W.length && r >= W[0].t - en && r <= W[W.length - 1].t + en) {
      let se = W.findIndex((ee) => ee.t > r);
      se < 0 && (se = W.length);
      const pe = W[Math.max(0, se - 1)], te = W[Math.min(W.length - 1, se)];
      T = pe.c || T, H = te.t > pe.t ? pe.temp + (te.temp - pe.temp) * Math.max(0, Math.min(1, (r - pe.t) / (te.t - pe.t))) : pe.temp;
    }
    if (!Number.isFinite(H)) {
      const se = [];
      if (t.days.forEach((pe) => {
        Number.isFinite(pe.lo) && se.push([pe.start - en, pe.lo]), Number.isFinite(pe.hi) && se.push([pe.start + 9 * en, pe.hi]);
      }), se.length) {
        H = r <= se[0][0] ? se[0][1] : se[se.length - 1][1];
        for (let pe = 1; pe < se.length; pe++) if (r <= se[pe][0] && r > se[pe - 1][0]) {
          const [te, ee] = se[pe - 1], [Ae, Je] = se[pe];
          H = ee + (Je - ee) * (1 - Math.cos(Math.PI * (r - te) / (Ae - te))) / 2;
          break;
        }
      }
    }
    return { cond: m && T === "sunny" ? "clear-night" : T, temp: H, night: m, day: u };
  }
  const p = (t) => Gt(new Date(t)) === Gt(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(t)), v = /* @__PURE__ */ new Map(), h = 900, w = 700;
  let S = null;
  const D = typeof ResizeObserver == "function" ? new ResizeObserver((t) => t.forEach((r) => {
    I(r.target.parentElement), r.target.closest("#wxDialog") && Zt();
  })) : null;
  function I(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const u = e(), m = u.days.flatMap((ee) => [{ cond: ee.day, night: !1 }, { cond: ee.night, night: !0 }]), T = m.map((ee) => ee.cond).join(), H = Yi(), W = po(), se = ue(), pe = Number(Gt(new Date(u.start)).replace(/\D/g, "")) % 9973;
    let te = !1;
    s.forEach((ee) => {
      var vt;
      const Ae = ee.clientWidth, Je = ee.clientHeight;
      if (!Ae || !Je) return;
      const Pe = ee.dataset.wxStrip;
      let Te = v.get(Pe);
      Te ? Te.sig !== T && (Te.prev = Te.segs, Te.sig = T, Te.segs = m, Te.t0 = r, Te.dur = w) : v.set(Pe, Te = { sig: T, segs: m, prev: null, t0: r, dur: h });
      const Me = W || se ? Math.min(1, Math.max(0, (r - Te.t0) / Te.dur)) : 1;
      Me < 1 && (te = !0);
      const gt = { width: Ae, height: Je, colors: H.colors, clock: r, ambient: W, seed: pe, reveal: se ? Me : 1 - Math.pow(1 - Me, 3), prev: Me < 1 ? Te.prev : null, reduce: se };
      if (jn === "smooth") {
        const Fe = Math.min(2, window.devicePixelRatio || 1), yt = Math.round(Ae * Fe), Et = Math.round(Je * Fe);
        ee.width !== yt && (ee.width = yt), ee.height !== Et && (ee.height = Et);
        const lt = ee.getContext("2d");
        if (!lt) return;
        lt.setTransform(Fe, 0, 0, Fe, 0, 0), Xu(lt, m, gt);
      } else {
        const Fe = $u(m, { ...gt, px: 2, oneBit: jn === "onebit", ink: H.ink, paper: H.paper });
        ee.width !== Fe.w && (ee.width = Fe.w), ee.height !== Fe.h && (ee.height = Fe.h), (vt = ee.getContext("2d")) == null || vt.putImageData(new ImageData(Fe.data, Fe.w, Fe.h), 0, 0);
      }
    }), te && fo();
  }
  function N() {
    const t = i("weatherCard");
    if (!t || t.hidden) return;
    const r = Mn.weather, s = r && (tn == null ? void 0 : tn[r]);
    if (!s) {
      t.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Tr("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", ho(t);
      return;
    }
    const u = s.attributes || {}, m = u.temperature_unit || "°", T = (lt) => Number.isFinite(Number(lt)) ? Math.round(Number(lt)) + "°" : "—", H = (u.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", W = ci[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), se = Gt(/* @__PURE__ */ new Date()), pe = fs.slice(0, 7), te = pe.find((lt) => Gt(new Date(lt.datetime)) === se) || null, ee = pe.filter((lt) => Gt(new Date(lt.datetime)) >= se).slice(0, 6), Ae = /* @__PURE__ */ new Date(), Je = Gt(new Date(Ae.getFullYear(), Ae.getMonth(), Ae.getDate() + 1)), Pe = te ? "H " + T(te.temperature) + "&ensp; L " + T(te.templow) : "", Te = (lt) => {
      const at = Gt(new Date(lt.datetime));
      return at === se ? "Today" : at === Je ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(lt.datetime));
    }, Me = Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : "—", gt = (lt) => {
      const at = new Date(lt.datetime);
      return Math.round((new Date(at.getFullYear(), at.getMonth(), at.getDate()) - new Date(Ae.getFullYear(), Ae.getMonth(), Ae.getDate())) / 864e5);
    }, vt = (lt) => (ci[lt] || lt || "").toLowerCase(), Fe = (lt, at) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + gt(lt) + '" aria-label="' + Ge(Te(lt) + ": " + vt(lt.condition) + ", " + T(lt.temperature) + " / " + T(lt.templow) + ". Open the forecast") + '">' + Tr(lt.condition, !1, !1, jn, "day" + at) + '<div><div class="activityRowName">' + Ge(Te(lt)) + '</div><div class="activityRowMeta">' + T(lt.temperature) + " / " + T(lt.templow) + "</div></div></div>", yt = () => '<div class="wxStrip"><div class="wxStripDays">' + e().days.map((at, rn) => {
      const Vt = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(at.start)) + ": " + vt(at.day) + (vt(at.day) === vt(at.night) ? " all day and night" : ", then " + vt(at.night) + " overnight") + (Number.isFinite(at.hi) ? ". High " + T(at.hi) : "") + (Number.isFinite(at.lo) ? ", low " + T(at.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + rn + '" aria-label="' + Ge(Vt) + '"><span class="wxDayName">' + Ge(p(at.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + T(at.hi) + '</span><span class="wxLow">' + T(at.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    t.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Ge("Now in " + H + ": " + Me + "°, " + vt(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Tr(s.state, !0, !0, jn, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ge(String(Me)) + '</span><span class="wxUnit">' + Ge(m) + '</span></div><div class="wxPlace">' + Ge(H) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ge(W) + "</div>" + (Pe ? '<div class="wxRange">' + Pe + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (ee.length ? ol === "strip" ? yt() : '<div class="activityRows wxDays">' + ee.map(Fe).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", ho(t);
    const Et = t.querySelector("canvas[data-wx-strip]");
    S && S !== Et && (D == null || D.unobserve(S)), S = Et, Et && (D == null || D.observe(Et), I(t)), fo(), ga();
  }
  const ae = i("weatherCard"), ye = (t) => {
    const r = t.closest("[data-wx-day]");
    if (r) {
      const u = /* @__PURE__ */ new Date();
      nn(+new Date(u.getFullYear(), u.getMonth(), u.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const s = t.closest("[data-wx-open]");
    s && nn(Date.now(), s);
  };
  ae.addEventListener("click", (t) => ye(t.target)), ae.addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && t.target.matches("[data-wx-day],[data-wx-open]") && (t.preventDefault(), ye(t.target));
  });
  const ke = i("wxDialog"), K = i("wxGraph"), xe = i("wxGraphWrap");
  let L = Date.now(), ie = null, Ne = !1, rt = null;
  function nn(t, r) {
    const s = e();
    ie = r || null, L = Math.max(s.start, Math.min(s.end - en, t)), v.delete("dialog"), di.delete("scrub"), ke.classList.add("open"), ke.setAttribute("aria-hidden", "false"), ga(), D == null || D.observe(ke.querySelector("canvas[data-wx-strip]")), K.focus({ preventScroll: !0 }), fo();
  }
  function jt() {
    var t;
    ke.classList.remove("open"), ke.setAttribute("aria-hidden", "true"), D == null || D.unobserve(ke.querySelector("canvas[data-wx-strip]")), (t = ie == null ? void 0 : ie.focus) == null || t.call(ie, { preventScroll: !0 }), ie = null;
  }
  function ga() {
    if (!ke.classList.contains("open")) return;
    const t = e();
    i("wxGraphDays").innerHTML = t.days.map((r) => "<span>" + Ge(p(r.start)) + "</span>").join(""), Zt(t), Ze(t), I(ke);
  }
  function Ze(t = e()) {
    const r = c(t, L), s = tn == null ? void 0 : tn[Mn.weather], u = (s == null ? void 0 : s.attributes) || {}, m = u.temperature_unit || "°", T = Math.abs(L - Date.now()) < en / 2, H = T && s ? s.state : r.cond, W = T && Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", se = ci[H] || (H ? H.charAt(0).toUpperCase() + H.slice(1) : "—"), pe = T ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(L / en) * en)), te = r.day, ee = (Number.isFinite(te.hi) ? "H " + Math.round(te.hi) + "°" : "") + (Number.isFinite(te.lo) ? "&ensp; L " + Math.round(te.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Tr(H, !0, T, jn, "scrub", T ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ge(String(W)) + '</span><span class="wxUnit">' + Ge(m) + '</span></div><div class="wxPlace">' + Ge(pe) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ge(se) + "</div>" + (ee ? '<div class="wxRange">' + ee + "</div>" : "") + "</div>", ho(i("wxDialogNow")), K.setAttribute("aria-valuenow", String(Math.round((L - t.start) / en))), K.setAttribute("aria-valuetext", pe + ", " + se.toLowerCase() + ", " + W + "°"), ms(t), fo();
  }
  function Zt(t = e()) {
    const r = i("wxGraphLine"), s = xe.clientWidth, u = xe.clientHeight;
    if (!s || !u) return;
    const m = [];
    for (let Me = t.start; Me <= t.end; Me += en) {
      const gt = c(t, Me).temp;
      Number.isFinite(gt) && m.push([n(t, Me) * s, gt]);
    }
    if (r.setAttribute("viewBox", "0 0 " + s + " " + u), m.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', rt = null, ms(t);
      return;
    }
    const T = m.map((Me) => Me[1]), H = Math.min(...T), W = Math.max(...T), se = Math.max(4, W - H), pe = jn !== "smooth", te = (Me) => pe ? Math.round(Me / 2) * 2 : Math.round(Me * 10) / 10;
    rt = (Me) => u * 0.84 - (Me - H) / se * u * 0.62;
    const ee = Yi(), Ae = jn === "onebit" ? ee.paper : "#ffffff", Je = jn === "onebit" ? ee.ink : "rgba(0,0,0,.28)", Pe = "M" + m.map((Me) => te(Me[0]) + " " + te(rt(Me[1]))).join(" L"), Te = (Me, gt) => {
      const vt = m.find((Fe) => Fe[1] === Me);
      return '<text class="wxLineLabel" x="' + te(Math.min(s - 14, Math.max(14, vt[0]))) + '" y="' + te(rt(Me) + (gt ? 18 : -10)) + '" fill="' + Ae + '" stroke="' + Je + '">' + Math.round(Me) + "°</text>";
    };
    r.setAttribute("shape-rendering", pe ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + Pe + '" fill="none" stroke="' + Je + '" stroke-width="' + (pe ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Pe + '" fill="none" stroke="' + Ae + '" stroke-width="2" stroke-linejoin="round"/>' + Te(W, !1) + Te(H, !0) + '<g id="wxCursorMark"></g>', ms(t);
  }
  function ms(t = e()) {
    const r = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const s = xe.clientWidth, u = xe.clientHeight, m = jn !== "smooth", T = (Ae) => m ? Math.round(Ae / 2) * 2 : Ae, H = T(n(t, L) * s), W = c(t, L).temp, se = Yi(), pe = jn === "onebit" ? se.paper : "#ffffff", te = jn === "onebit" ? se.ink : "rgba(0,0,0,.28)", ee = rt && Number.isFinite(W) ? T(rt(W)) : null;
    r.innerHTML = '<rect x="' + (H - 2) + '" y="0" width="4" height="' + u + '" fill="' + te + '"/><rect x="' + (H - 1) + '" y="0" width="2" height="' + u + '" fill="' + pe + '"/>' + (ee == null ? "" : m ? '<rect x="' + (H - 5) + '" y="' + (ee - 5) + '" width="10" height="10" fill="' + pe + '" stroke="' + te + '" stroke-width="2"/>' : '<circle cx="' + H + '" cy="' + ee + '" r="6" fill="' + pe + '" stroke="' + te + '" stroke-width="2"/>');
  }
  const qc = (t) => {
    const r = xe.getBoundingClientRect();
    r.width && (L = o(e(), (t - r.left) / r.width), Ze());
  };
  K.addEventListener("pointerdown", (t) => {
    if (t.button === 0) {
      Ne = !0;
      try {
        K.setPointerCapture(t.pointerId);
      } catch {
      }
      qc(t.clientX);
    }
  }), K.addEventListener("pointermove", (t) => {
    Ne && qc(t.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((t) => K.addEventListener(t, () => {
    Ne = !1;
  })), K.addEventListener("keydown", (t) => {
    const r = e(), s = { ArrowLeft: -en, ArrowRight: en, ArrowDown: -en, ArrowUp: en, PageUp: -24 * en, PageDown: 24 * en }[t.key];
    s ? (t.preventDefault(), L = Math.max(r.start, Math.min(r.end - en, Math.round(L / en) * en + s)), Ze(r)) : (t.key === "Home" || t.key === "End") && (t.preventDefault(), L = t.key === "Home" ? r.start : r.end - en, Ze(r));
  }), i("wxDialogClose").addEventListener("click", jt), ke.addEventListener("click", (t) => {
    t.target === ke && jt();
  }), ke.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), jt());
  }), N(), (Xc = (Kc = window.matchMedia) == null ? void 0 : ($c = Kc.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || Xc.call($c, "change", () => {
    fo(), ho(a);
  }), fo();
  const Wc = i("tvNav");
  l.fullscreenSupported || (Wc.hidden = !0), Wc.addEventListener("click", () => l.toggleFullscreen()), a.addEventListener("keydown", (t) => {
    !Ee.workout.classList.contains("active") || no.classList.contains("active") || t.target.closest("input,select,textarea,.holdEnd") || (t.key === "MediaPlayPause" || t.key === " " && !t.target.closest("button") ? (t.preventDefault(), fr.click()) : t.key === "MediaTrackNext" ? (t.preventDefault(), i("skipExercise").click()) : t.key === "MediaTrackPrevious" && (t.preventDefault(), i("restartSegment").click()));
  }), a.querySelectorAll("[data-rounds-step]").forEach((t) => t.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(ct.value) || 1) + Number(t.dataset.roundsStep)));
    String(r) !== ct.value && (ct.value = r, ct.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [_, C, F, ct].forEach((t) => t.addEventListener("input", () => {
    const r = Ue[bt];
    r && (r.total = Number(_.value), r.work = Number(C.value), r.rest = Number(F.value)), Mt();
  })), z.addEventListener("click", ai), Be.addEventListener("click", () => y("settings")), i("settingsBack").addEventListener("click", ai), fr.addEventListener("click", () => ya(!Yn)), Un(bt), Jo(), _i(), Qn(), i("healthHelpOpen").addEventListener("click", () => a.querySelector(".tab[data-pane=helpPane]").click()), ji(i("resetStats"), i("resetStatsFill"), 1500, () => {
    ft.history = [], ft.checkins = [], Co = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    bn(), uo(), _i(), Jo(), Qn(), ja(), Ot("Stats reset");
  });
  const tc = i("morningTime"), nc = i("eveningTime"), ac = i("checkinAutoOpen");
  tc.value = ua().morning, nc.value = ua().evening, ac.classList.toggle("on", tt().checkinAutoOpen !== !1), [["morningTime", tc], ["eveningTime", nc]].forEach(([t, r]) => r.addEventListener("change", () => {
    r.value && (Jn(t, r.value), ja());
  })), ac.addEventListener("click", () => {
    const t = tt().checkinAutoOpen === !1;
    ac.classList.toggle("on", t), Jn("checkinAutoOpen", t);
  }), setTimeout(rr, 800);
  const jc = i("checkinNotify"), sl = i("checkinNotifyTarget"), zc = i("checkinNotifyStatus"), Tu = zc.textContent;
  function Vc() {
    const t = l.notifyServices(), r = t.filter((m) => m.startsWith("mobile_app_")), s = r.length ? r : t, u = (m) => m.replace(/^mobile_app_/, "").replace(/_/g, " ");
    sl.innerHTML = s.map((m) => '<option value="' + Ge(m) + '">' + Ge(u(m)) + "</option>").join(""), !tt().notifyTarget && s[0] && (tt().notifyTarget = s[0]), sl.value = tt().notifyTarget || "";
  }
  function ll() {
    const t = !!tt().notifyOn;
    jc.classList.toggle("on", t), i("checkinNotifyTargetRow").hidden = !t;
    const r = ua();
    zc.textContent = t ? "Sends at " + r.morning + " and " + r.evening : Tu;
  }
  async function oc() {
    const t = !!tt().notifyOn;
    try {
      return await l.setReminderAutomation(t ? { target: tt().notifyTarget, times: ua() } : null), !0;
    } catch {
      return Ot("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  jc.addEventListener("click", async () => {
    const t = !tt().notifyOn;
    if (t && (Vc(), !tt().notifyTarget)) {
      Ot("Install the Companion app on your phone first");
      return;
    }
    tt().notifyOn = t, ll(), await oc() ? (bn(), Ot(t ? "Check-in notifications on" : "Check-in notifications off")) : (tt().notifyOn = !t, ll());
  }), sl.addEventListener("change", () => {
    Jn("notifyTarget", sl.value), tt().notifyOn && oc();
  }), [tc, nc].forEach((t) => t.addEventListener("change", () => {
    ll(), tt().notifyOn && oc();
  })), Vc(), ll();
  let ic = null;
  function Lu() {
    ic || (ic = setTimeout(() => {
      ic = null, Qn();
    }, 3e4));
  }
  return {
    updateStates(t) {
      var s, u;
      const r = !tn || tn[Mn.weather] !== t[Mn.weather] || ((s = tn["sun.sun"]) == null ? void 0 : s.state) !== ((u = t["sun.sun"]) == null ? void 0 : u.state);
      tn = t, el(t), yr(t), r && N(), Date.now() - Ui > 60 * 60 * 1e3 && kr(), Lu();
    },
    applyRemoteData(t) {
      if (t && (Array.isArray(t.history) && (ft.history = t.history, uo()), Array.isArray(t.history) && Qn(), Array.isArray(t.checkins) && (ft.checkins = t.checkins.map(wi), ja(), Jo(), _i(), uo(), Qn()), t.profiles && !Nn.classList.contains("open") && !Fn)) {
        const r = bo(t);
        Object.keys(Ue).forEach((s) => delete Ue[s]), Object.assign(Ue, r.profiles), ft.order = r.order, Ue[bt] || (bt = ft.order[0]), tr(), Un(bt);
      }
    },
    suspend() {
      g = !1;
    },
    resume() {
      g || (g = !0, Pn || (Pn = requestAnimationFrame(xa)), Ga || (Ga = requestAnimationFrame(Pi)), fo(), zi(a.querySelector(".tab.active"), !1));
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
}, vs = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, fn = "made_up_", Zi = (a) => {
  var l;
  return (l = String(a).split(".")[1]) == null ? void 0 : l.startsWith(fn);
}, pl = (a) => a.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Hc(a) {
  const l = a.getHours() + a.getMinutes() / 60, i = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function np(a) {
  const l = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  let i = 0;
  for (let d = +l; d < +a; d += 10 * 60 * 1e3) i += Hc(new Date(d)) / 6;
  return i;
}
function nd(a = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let i = 0; i <= 96; i++) {
    const d = +a - (96 - i) * 15 * 60 * 1e3;
    l.push([d, Hc(new Date(d))]);
  }
  return l;
}
function ap({ onChange: a }) {
  const l = {}, i = {}, d = (V, q, ce, X) => {
    l[V] = { entity_id: V, state: ce, attributes: X, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[V] = q;
  }, f = (V, q, ce) => {
    const X = l[V], fe = q ?? X.state;
    l[V] = { ...X, state: fe, attributes: { ...X.attributes, ...ce }, last_changed: fe === X.state ? X.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, g = (V, q, ce, X) => d("binary_sensor." + fn + (V ? V + "_" : "") + pl(q), V, X ? "on" : "off", { friendly_name: q, device_class: ce });
  Object.entries(tp).forEach(([V, q]) => {
    if (q.temperature != null && d("sensor." + fn + V + "_temperature", V, String(q.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), q.humidity != null && d("sensor." + fn + V + "_humidity", V, String(q.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), q.vacuum && d("vacuum." + fn + "robot", V, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), q.climate && d("climate." + fn + V, V, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: q.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), q.cover) {
      const [ce, X, fe, $] = q.cover;
      d("cover." + fn + V + "_" + pl(ce), V, fe ? "open" : "closed", { friendly_name: ce, device_class: X, current_position: fe, ...$ != null ? { current_tilt_position: $ } : {} });
    }
    if (q.humidifier && d("humidifier." + fn + V, V, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: q.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), q.solar && (d("sensor." + fn + V + "_solar_power", V, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), d("sensor." + fn + V + "_solar_today", V, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), q.valve && d("valve." + fn + V + "_" + pl(q.valve), V, "closed", { friendly_name: q.valve, device_class: "water" }), q.door && g(V, q.door, "door", q.doorOpen), q.window && g(V, q.window, "window", !1), q.motion && g(V, q.motion, "motion", !1), q.plant) {
      const [ce, X, fe, $, M] = q.plant, B = fn + pl(ce), we = (P, Ee, z, Be, y) => d("sensor." + B + "_" + P, V, String(z), { friendly_name: Ee, device_class: y, state_class: "measurement", unit_of_measurement: Be, plant_low: z < vs[P][0], plant_high: z > vs[P][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[P] });
      we("moisture", "Moisture", X, "%", "moisture"), we("light", "Light", fe, "lx", "illuminance"), we("temperature", "Temperature", $, "°C", "temperature"), we("fertility", "Fertility", M, "µS/cm", "conductivity");
      const Ce = Object.entries({ moisture: X, light: fe, temperature: $, fertility: M }).filter(([P, Ee]) => Ee < vs[P][0] || Ee > vs[P][1]).map(([P, Ee]) => P + (Ee < vs[P][0] ? " low" : " high"));
      d("plant." + B, V, Ce.length ? "problem" : "ok", { friendly_name: ce, moisture: X, brightness: fe, temperature: $, conductivity: M, problem: Ce.join(", ") || "none" });
    }
  }), d("alarm_control_panel." + fn + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), g(null, "Front door", "door", !1), g(null, "Smoke alarm", "smoke", !1), d("sensor." + fn + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const b = {}, E = {};
  let x = null;
  function R() {
    const V = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((q) => {
      q.endsWith("_solar_power") && (l[q] = { ...l[q], state: Hc(V).toFixed(2) }), q.endsWith("_solar_today") && (l[q] = { ...l[q], state: np(V).toFixed(1) });
    });
  }
  R();
  let me = 0;
  function ne() {
    let V = !1;
    const q = ++me % 10 === 0, ce = ($, M, B) => {
      f($, M, B), V = !0;
    };
    Object.entries(b).forEach(([$, M]) => {
      const B = l[$].attributes.current_position, we = B < M ? Math.min(M, B + 10) : Math.max(M, B - 10);
      we === M && delete b[$], ce($, we === M ? we === 0 ? "closed" : "open" : M > B ? "opening" : "closing", { current_position: we });
    }), Object.entries(E).forEach(([$, M]) => {
      const B = l[$].attributes.current_tilt_position, we = B < M ? Math.min(M, B + 25) : Math.max(M, B - 25);
      we === M && delete E[$], ce($, null, { current_tilt_position: we });
    }), Object.keys(l).filter(($) => $.startsWith("climate.")).forEach(($) => {
      const M = l[$], B = M.attributes, we = B.current_temperature, Ce = (M.state === "heat" || M.state === "auto") && we < B.temperature - 0.05, P = (M.state === "cool" || M.state === "auto") && we > B.temperature + 0.05, Ee = M.state === "off" ? "off" : Ce ? "heating" : P ? "cooling" : "idle", z = q ? Math.round((we + (Ce ? 0.1 : P ? -0.1 : 0)) * 10) / 10 : we;
      (z !== we || Ee !== B.hvac_action) && ce($, null, { current_temperature: z, hvac_action: Ee });
    }), Object.keys(l).filter(($) => $.startsWith("humidifier.")).forEach(($) => {
      const M = l[$], B = M.attributes, we = B.current_humidity, Ce = M.state === "on" && we < B.humidity, P = Ce && q ? we + 1 : we, Ee = M.state !== "on" ? "off" : Ce ? "humidifying" : "idle";
      if (P !== we || Ee !== B.action) {
        ce($, null, { current_humidity: P, action: Ee });
        const z = "sensor." + fn + i[$] + "_humidity";
        l[z] && ce(z, String(P));
      }
    });
    const X = l["vacuum." + fn + "robot"], fe = X.attributes;
    X.state === "cleaning" && q && ce(X.entity_id, null, { battery_level: Math.max(5, fe.battery_level - 1) }), X.state === "returning" && ce(X.entity_id, "docked", {}), X.state === "docked" && fe.battery_level < 100 && ce(X.entity_id, null, { battery_level: Math.min(100, fe.battery_level + 2) }), x && Date.now() - x.at > 5e3 && (ce("alarm_control_panel." + fn + "house", "armed_" + x.mode, {}), x = null), V && a();
  }
  const U = setInterval(ne, 1e3), Y = setInterval(() => {
    R(), a();
  }, 60 * 1e3);
  function J(V, q, ce) {
    const X = ce == null ? void 0 : ce.entity_id;
    if (!l[X]) return !1;
    const fe = l[X], $ = fe.attributes, M = (B, we) => f(X, B, we);
    if (V === "climate" && (q === "set_temperature" && M(null, { temperature: Math.max($.min_temp, Math.min($.max_temp, ce.temperature)) }), q === "set_hvac_mode" && M(ce.hvac_mode, ce.hvac_mode === "off" ? { hvac_action: "off" } : {}), q === "toggle" && M(fe.state === "off" ? "heat" : "off", fe.state === "off" ? {} : { hvac_action: "off" })), V === "cover") {
      const B = q === "open_cover" ? 100 : q === "close_cover" ? 0 : q === "set_cover_position" ? ce.position : q === "toggle" ? $.current_position > 0 ? 0 : 100 : null;
      q === "stop_cover" && (delete b[X], delete E[X], M($.current_position === 0 ? "closed" : "open")), B != null && B !== $.current_position && (b[X] = B, M(B > $.current_position ? "opening" : "closing"));
      const we = q === "open_cover_tilt" ? 100 : q === "close_cover_tilt" ? 0 : q === "set_cover_tilt_position" ? ce.tilt_position : null;
      q === "stop_cover_tilt" && delete E[X], we != null && $.current_tilt_position != null && we !== $.current_tilt_position && (E[X] = we);
    }
    if (V === "humidifier" && (q === "set_humidity" && M(null, { humidity: Math.max($.min_humidity, Math.min($.max_humidity, ce.humidity)) }), q === "set_mode" && M(null, { mode: ce.mode }), q === "turn_on" || q === "turn_off" || q === "toggle")) {
      const B = q === "turn_on" || q === "toggle" && fe.state !== "on";
      M(B ? "on" : "off", { action: B ? "idle" : "off" });
    }
    if (V === "vacuum" && (q === "start" && M("cleaning", { rooms: ce.rooms || $.rooms }), q === "pause" && M("paused"), q === "return_to_base" && M("returning", { rooms: [] }), q === "locate" && M(null, { located: Date.now() }), q === "set_rooms" && M(null, { rooms: ce.rooms })), V === "valve") {
      const B = q === "open_valve" || q === "toggle" && fe.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(q) && M(B ? "open" : "closed");
    }
    if (V === "alarm_control_panel") {
      q === "alarm_disarm" && (x = null, M("disarmed", { changed_by: "Matt" }));
      const B = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[q];
      B && (x = { mode: B, at: Date.now() }, M("arming", { changed_by: "Matt" }));
    }
    return a(), !0;
  }
  function Z(V) {
    const q = (V == null ? void 0 : V.states) || {}, ce = (V == null ? void 0 : V.entities) || {}, X = (V == null ? void 0 : V.devices) || {}, fe = (C) => {
      var de;
      const F = ce[C];
      return F && (F.area_id || F.device_id && ((de = X[F.device_id]) == null ? void 0 : de.area_id)) || null;
    }, $ = (C) => {
      const F = ce[C];
      return q[C] && q[C].state !== "unavailable" && !(F != null && F.hidden) && !(F != null && F.entity_category);
    }, M = {};
    Object.keys(q).forEach((C) => {
      const F = fe(C);
      F && $(C) && (M[F] || (M[F] = [])).push(C);
    });
    const B = { ...q, ...l }, we = (C) => {
      var F, de;
      return (de = (F = B[C]) == null ? void 0 : F.attributes) == null ? void 0 : de.device_class;
    }, Ce = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], P = Object.keys(q).filter((C) => C.startsWith("vacuum.") && $(C)), Ee = Object.values((V == null ? void 0 : V.areas) || {}).filter((C) => !ep.has(C.area_id)).map((C) => {
      const F = C.area_id, de = M[F] || [], j = (Qe) => de.filter((St) => St.startsWith(Qe + ".")), re = (Qe) => j("sensor").filter((St) => we(St) === Qe), he = (Qe) => Object.keys(l).filter((St) => i[St] === F && Qe(St)), ve = (Qe, St) => Qe.length ? Qe : he(St), Ye = ve(re("temperature"), (Qe) => Qe.endsWith(F + "_temperature")), ct = ve(re("humidity"), (Qe) => Qe.endsWith(F + "_humidity")), At = re("power").filter((Qe) => /^(W|kW)$/.test(B[Qe].attributes.unit_of_measurement || "")), sn = j("binary_sensor").filter((Qe) => we(Qe) === "moisture"), Gn = ve(j("plant"), (Qe) => Qe.startsWith("plant.")).map((Qe) => ({ id: Qe, readings: he((St) => St.startsWith("sensor." + Qe.split(".")[1] + "_")) })), ht = [...j("binary_sensor").filter((Qe) => Ce.includes(we(Qe))), ...he((Qe) => Qe.startsWith("binary_sensor."))];
      return {
        id: F,
        name: C.name,
        icon: C.icon,
        readings: [...Ye.slice(0, 1), ...ct.slice(0, 1), ...sn],
        power: At.length ? At.reduce((Qe, St) => Qe + Number(B[St].state) * (B[St].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: j("switch"),
        lights: j("light"),
        actions: [...j("light"), ...ve(j("climate"), (Qe) => Qe.startsWith("climate.")), ...ve(j("cover"), (Qe) => Qe.startsWith("cover.")), ...ve(j("humidifier"), (Qe) => Qe.startsWith("humidifier.")), ...ve(j("valve"), (Qe) => Qe.startsWith("valve.")), ...j("media_player"), ...j("vacuum"), ...P.length ? [] : he((Qe) => Qe.startsWith("vacuum."))],
        solar: he((Qe) => Qe.includes("_solar_")),
        plants: Gn,
        openings: ht,
        alerts: [...sn, ...ht].filter((Qe) => {
          var St;
          return ((St = B[Qe]) == null ? void 0 : St.state) === "on";
        })
      };
    }).filter((C) => C.readings.length || C.plugs.length || C.actions.length || C.solar.length || C.plants.length), z = Object.keys(q).find((C) => /^sensor\..*(p1_meter_power|grid_power)$/.test(C) && q[C].state !== "unavailable") || null, Be = (C) => Object.keys(q).filter((F) => F.startsWith(C + ".") && $(F)), y = Be("alarm_control_panel"), _ = P.length ? P : ["vacuum." + fn + "robot"];
    return {
      states: B,
      rooms: Ee,
      grid: z,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (C) => l[C] ? i[C] : fe(C),
      vacuums: _,
      homeVacuums: _.filter((C) => !Ee.some((F) => F.actions.includes(C))),
      security: {
        alarms: y.length ? y : ["alarm_control_panel." + fn + "house"],
        locks: Be("lock"),
        openings: [...Object.keys(l).filter((C) => C.startsWith("binary_sensor.")), "sensor." + fn + "doorbell"]
      }
    };
  }
  return { model: Z, call: J, stop() {
    clearInterval(U), clearInterval(Y);
  } };
}
const zo = (a) => a < 0 ? 0 : a > 1 ? 1 : a, Ec = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((d) => d + d).join("") : l;
  return [0, 2, 4].map((d) => parseInt(i.slice(d, d + 2), 16) || 0);
}, op = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), ad = {}, Ia = (a, l, i) => {
  const d = a + l + i;
  return ad[d] || (ad[d] = op(Ec(a).map((f, g) => f + (Ec(l)[g] - f) * i)));
}, od = {}, Sl = (a) => od[a] || (od[a] = Ec(a));
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
], jo = (a, l) => (rp[(l & 7) * 8 + (a & 7)] + 0.5) / 64, tu = 1, nu = 2, au = 3, ou = 4, Dr = 5, Ll = 6, Dc = 7, iu = 8, id = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), sp = (a, l, i) => {
  let d = !1;
  for (let f = 0, g = a.length - 1; f < a.length; g = f++) {
    const b = a[f], E = a[g];
    b[1] > i != E[1] > i && l < (E[0] - b[0]) * (i - b[1]) / (E[1] - b[1]) + b[0] && (d = !d);
  }
  return d;
};
function lp(a, l, i, d, { oneBit: f, ink: g, paper: b, snowInk: E }) {
  const x = new Uint8ClampedArray(i * d * 4), R = Sl(g), me = Sl(b);
  for (let ne = 0; ne < d; ne++) for (let U = 0; U < i; U++) {
    const Y = ne * i + U, J = l[Y];
    if (a[Y] == null) continue;
    let Z = Sl(a[Y]);
    if (f) {
      let V;
      J === ou || J === iu ? V = !0 : J === Dr ? V = E : J === Dc || J === Ll ? V = !1 : V = Math.round((0.2126 * Z[0] + 0.7152 * Z[1] + 0.0722 * Z[2]) / 255 * 4) / 4 <= jo(U, ne), (J === tu || J === nu || J === au || J === Ll) && (U > 0 && l[Y - 1] !== J || U < i - 1 && l[Y + 1] !== J || ne > 0 && l[Y - i] !== J || ne < d - 1 && l[Y + i] !== J) && (V = !0), Z = V ? R : me;
    }
    x[Y * 4] = Z[0], x[Y * 4 + 1] = Z[1], x[Y * 4 + 2] = Z[2], x[Y * 4 + 3] = 255;
  }
  return { w: i, h: d, data: x };
}
const cp = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, dp = (a) => El(a, !1).split("/")[0], lc = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, up = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", pp = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", hp = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", fp = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", mp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], gp = [".##", "##.", ".#.", "#.."];
function ru(a, { width: l, height: i, colors: d, wave: f = 0.38, soft: g = 6, glow: b = 0.6, columns: E = 6 }) {
  const x = { ...sa, dawn: "#e5a77e", ...d }, R = ip(x), me = l, ne = i, U = me / E, Y = U / 2, J = Math.PI * 2, Z = a.length ? a : [{ cond: "cloudy", night: !1 }], V = [...Array(E * 2)].map((fe, $) => {
    const M = Z[Math.min($, Z.length - 1)], B = dp(M.cond), we = $ % 2 === 1;
    return { cond: M.cond, k: B, night: we, sky: R[B][we ? 1 : 0], cover: cp[B] };
  }), q = (fe) => ne * (0.5 - f * Math.cos(J * (fe / U - 0.25)));
  return { C: x, S: V, W: me, H: ne, cw: U, sw: Y, TAU: J, yb: q, side: (fe, $, M) => {
    const B = (fe ? q($) - M : M - q($)) / Math.max(3, g * 1.4) + 0.5;
    return B <= 0 ? 0 : B >= 1 ? 1 : B;
  }, glowAt: (fe) => {
    const $ = ((fe / U - 0.25) % 1 + 1) % 1, M = Math.max(0, Math.min(E - 1, Math.round(fe / U - 0.25))), B = Math.max(0, Math.min(E - 1, Math.round(fe / U - 0.75))), we = 1 - (V[2 * M].cover + V[2 * B + 1].cover) / 2, Ce = Math.sin(Math.PI * Math.min(1, Math.max(0, q(fe) / ne)));
    return { c: $ < 0.5 ? x.dusk : x.dawn, a: b * (0.2 + 0.8 * we) * Ce * Ce };
  }, soft: g, tw: U * 0.3, sy: ne / 90 };
}
function su(a, { clock: l = 0, ambient: i = !1, seed: d = 1 }) {
  const { S: f, sw: g, side: b, C: E, TAU: x, sy: R, H: me } = a, ne = l, U = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  f.forEach((Z, V) => {
    const q = lc(d * 977 + V * 131 + 7), ce = (V + 0.5) * g, X = Z.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[Z.k] : 0;
    for (let fe = 0; fe < X; fe++) {
      const $ = ce + (q() - 0.5) * g * 1.6, M = (6 + q() * 76) * R, B = q() < 0.35, we = 1.8 + q() * 1.6, Ce = b(!0, $, M) * (B ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(x * ne / 2600 + fe * 1.7 + V) : 1);
      Ce >= 0.03 && U.stars.push({ x: $, y: M, big: B, size: we, o: Ce });
    }
    if (!Z.night && (Z.k === "clear" || Z.k === "partly")) {
      const fe = ce + (q() - 0.5) * g * 0.3, $ = Math.min(15, g * 0.29);
      U.suns.push({ x: fe, y: 32 * R, rad: $, halo: $ * 2.8 * (i ? 1 + 0.07 * Math.sin(x * ne / 3600 + V) : 1) });
    }
    if (Z.night && (Z.k === "clear" || Z.k === "partly")) {
      const fe = Math.min(0.78, g * 0.55 / 34), $ = ce - 23 * fe + (q() - 0.5) * g * 0.2;
      U.moons.push({ x: $ + 23 * fe, y: (4 + (i ? 0.8 * Math.sin(x * ne / 5200 + V) : 0)) * R + 23 * fe, d: 46 * fe });
    }
  });
  const Y = Math.max(56, Math.min(100, me * 0.45)), J = Math.max(1, g / (Y * 2.4));
  return f.forEach((Z, V) => {
    const q = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[Z.k];
    if (!q) return;
    const ce = Z.k === "partly" ? 1 : Math.round(q * J), X = lc(d * 577 + V * 71 + 3), fe = (V + 0.5) * g, $ = Z.k === "rain" || Z.k === "storm" || Z.night ? E.cloudNight : E.cloudDay, M = Z.night ? 0.82 : Z.k === "storm" ? 0.75 : 1;
    for (let B = 0; B < ce; B++) {
      const we = Y / 46 * (Z.k === "partly" ? 1 : 0.8 + X() * 0.4), Ce = fe + (Z.k === "partly" ? g * 0.12 : ((B + 0.5) / ce - 0.5) * g * 0.95 + (X() - 0.5) * g * 0.5 / ce), P = (Z.k === "partly" ? 40 : 6 + X() * 26) * R, Ee = i ? 2.5 * Math.sin(x * ne / 9e3 + V * 1.3 + B * 2.1) : 0, z = i ? 0.9 * Math.sin(x * ne / 6100 + V + B) : 0;
      U.clouds.push({ x: Ce - 23 * we + Ee, y: P - 15.33 * we + z, w: 46 * we, h: 30.66 * we, fill: $, o: M * (ce > 1 && B === 0 ? 0.85 : 1) });
    }
  }), f.forEach((Z, V) => {
    const q = lc(d * 313 + V * 29 + 11), ce = (V + 0.5) * g, X = Z.cond === "pouring" ? 16 : Z.cond === "rainy" || Z.cond === "hail" ? 9 : Z.cond === "lightning-rainy" ? 12 : Z.cond === "snowy-rainy" ? 5 : 0;
    for (let $ = 0; $ < X; $++) {
      let M = ce + (q() - 0.5) * g * 1.05, B = 44 + q() * 36, we = 1;
      if (i) {
        const P = ((B - 44 + ne * 0.04) % 36 + 36) % 36;
        M -= 0.21 * (P - (B - 44)), B = 44 + P, we = Math.min(1, P / 6, (36 - P) / 6);
      }
      B *= R;
      const Ce = b(Z.night, M, B) * we;
      Ce >= 0.05 && U.drops.push({ x: M, y: B, o: Ce });
    }
    const fe = Z.cond === "snowy" ? 11 : Z.cond === "snowy-rainy" ? 6 : 0;
    for (let $ = 0; $ < fe; $++) {
      let M = ce + (q() - 0.5) * g * 1.05, B = 40 + q() * 44, we = 1;
      if (i) {
        const P = ((B - 40 + ne * 9e-3) % 44 + 44) % 44;
        B = 40 + P, M += 1.6 * Math.sin(x * ne / 2800 + $ * 1.9 + V), we = Math.min(1, P / 6, (44 - P) / 6);
      }
      B *= R;
      const Ce = b(Z.night, M, B) * we;
      Ce >= 0.05 && U.flakes.push({ x: M, y: B, o: Ce });
    }
    if (Z.k === "fog") {
      const $ = Z.night ? "#c8ccd6" : "#ffffff", M = Z.night ? 0.28 : 0.62, B = i ? 4 * Math.sin(x * ne / 8e3 + V) : 0;
      for (let we = 0; we < 4; we++) U.fogs.push({ x: ce - g * 0.75 + we % 2 * g * 0.18 + (we % 2 ? B : -B), y: (30 + we * 13) * R, w: g * 1.3, c: $, a: M });
    }
    if (Z.k === "storm") {
      const $ = (ne / 3400 + V * 0.37) % 1;
      U.bolts.push({ x: ce + (q() - 0.5) * g * 0.3 - 5, y: 36 * R, o: i && !($ < 0.05 || $ > 0.09 && $ < 0.12) ? 0.8 : 1 });
    }
  }), U;
}
function vp(a, l, i, d, f, g, b, E) {
  const { S: x, C: R, cw: me, yb: ne, glowAt: U, soft: Y, tw: J, sy: Z } = a, V = new Array(i * d), q = new Uint8Array(i * d), ce = new Uint8Array(i * d), X = (y, _, C, F, de) => {
    C == null || y < 0 || _ < 0 || y >= i || _ >= d || (F >= 1 || F > jo(y + 5, _ + 3)) && (V[_ * i + y] = C, q[_ * i + y] = de);
  }, fe = (y, _, C, F) => {
    for (let de = Math.max(0, Math.floor(_ - C) - 1); de <= Math.min(d - 1, _ + C + 1); de++) for (let j = Math.max(0, Math.floor(y - C) - 1); j <= Math.min(i - 1, y + C + 1); j++) F(j, de, j + 0.5 - y, de + 0.5 - _);
  }, $ = (y, _, C) => {
    for (let de = 0; de < y.length - 1; de++) {
      const j = (de + _) * me;
      if (C < j - J / 2) return [y[de], y[de], 0];
      if (C <= j + J / 2) return [y[de], y[de + 1], (C - j + J / 2) / J];
    }
    const F = y[y.length - 1];
    return [F, F, 0];
  }, M = x.filter((y) => !y.night).map((y) => y.sky), B = x.filter((y) => y.night).map((y) => y.sky), we = Y / g, Ce = 16 * Z / g;
  for (let y = 0; y < i; y++) {
    const _ = (y + 0.5) * f, C = ne(_) / g, F = $(M, 0.75, _), de = $(B, 1.25, _), j = U(_);
    for (let re = 0; re < d; re++) {
      const he = jo(y, re), ve = re + 0.5 - C, Ye = (we > 0.01 ? zo(0.5 + ve / we) : ve > 0 ? 1 : 0) > he;
      let ct = Ye ? F[2] > he ? F[1] : F[0] : de[2] > he ? de[1] : de[0];
      (Ye ? zo(((re + 0.5) / d - 0.45) / 0.55) * 0.7 : zo(1 - (re + 0.5) / (d * 0.55)) * 0.7) > jo(y + 2, re + 5) && (ct = Ye ? Ia(ct, "#ffffff", 0.18) : Ia(ct, "#000000", 0.25)), Ye && ve >= 0 && ve < Ce && j.a * 1.3 * (1 - ve / Ce) > jo(y + 6, re + 1) && (ct = j.c), V[re * i + y] = ct, ce[re * i + y] = Ye ? 0 : 1;
    }
  }
  const P = Ia(R.sun, "#ffffff", 0.55), Ee = Ia(R.moon, "#ffffff", 0.6);
  l.stars.forEach((y) => {
    const _ = Math.floor(y.x / f), C = Math.floor(y.y / g);
    if (_ < 0 || C < 0 || _ >= i || C >= d || !ce[C * i + _] || y.o < 0.15) return;
    const F = y.o > 0.45 ? R.star : Ia(R.star, V[C * i + _], 0.5), de = y.big && y.o > 0.6 ? Math.floor(y.size / f) : 0;
    X(_, C, F, 1, Dc);
    for (let j = 1; j <= de; j++) [[_ - j, C], [_ + j, C], [_, C - j], [_, C + j]].forEach((re) => {
      re[0] >= 0 && re[1] >= 0 && re[0] < i && re[1] < d && ce[re[1] * i + re[0]] && X(re[0], re[1], F, 1, Dc);
    });
  }), l.suns.forEach((y) => {
    const _ = Math.max(1.5, y.rad / f), C = y.x / f, F = y.y / g, de = y.halo / f * 0.85;
    if (fe(C, F, de, (j, re, he, ve) => {
      const Ye = Math.sqrt(he * he + ve * ve);
      Ye > _ && Ye < de && !ce[re * i + j] && X(j, re, P, 0.3 * (1 - (Ye - _) / (de - _)), 0);
    }), E) {
      const j = Math.floor(b / 500) % 2, re = Math.max(1, _ * 0.3);
      for (let he = 0; he < 8; he++) if (he % 2 === j) for (let ve = _ + 1.2; ve < _ + 1.2 + re; ve += 0.7) X(Math.floor(C + Math.cos(he * Math.PI / 4) * ve), Math.floor(F + Math.sin(he * Math.PI / 4) * ve), R.sun, 1, iu);
    }
    fe(C, F, _, (j, re, he, ve) => {
      he * he + ve * ve <= _ * _ && X(j, re, zo(((ve / _ + 1) / 2 - 0.6) / 0.4) > jo(j, re) ? R.sunEdge : R.sun, 1, tu);
    });
  }), l.moons.forEach((y) => {
    const _ = Math.max(1.5, y.d * 0.37 / f), C = y.x / f, F = y.y / g, de = C + 0.547 * _, j = F - 0.503 * _, re = 0.82 * _;
    fe(C, F, _, (he, ve, Ye, ct) => {
      if (Ye * Ye + ct * ct > _ * _) return;
      const At = he + 0.5 - de, sn = ve + 0.5 - j;
      At * At + sn * sn > re * re && X(he, ve, zo((ct + _) / (2 * _) * 1.1 - 0.1) > jo(he, ve) ? R.moon : Ee, 1, nu);
    });
  }), l.clouds.forEach((y) => {
    const _ = Math.max(3, y.w / f), C = _ * 0.6665, F = y.x / f, de = y.y / g, j = Ia(y.fill, "#000000", 0.16);
    for (let re = Math.max(0, Math.floor(de) - 1); re <= Math.min(d - 1, de + C + 1); re++) for (let he = Math.max(0, Math.floor(F) - 1); he <= Math.min(i - 1, F + _ + 1); he++) {
      const ve = (he + 0.5 - F) / _, Ye = (re + 0.5 - de) / _;
      id(ve, Ye) && X(he, re, !id(ve, Ye + 1 / _) || zo((Ye - 0.42) / 0.25) * 0.8 > jo(he, re) ? j : y.fill, y.o, au);
    }
  }), l.fogs.forEach((y) => {
    const _ = Math.floor(y.y / g), C = Math.max(_, Math.floor((y.y + 6 * Z) / g) - 1), F = Math.floor(y.x / f), de = Math.floor((y.x + y.w) / f);
    for (let j = _; j <= C; j++) for (let re = F; re <= de; re++) {
      const he = (re - F) / Math.max(1, de - F);
      X(re, j, y.c, y.a * (he < 0.25 ? he / 0.25 : he > 0.75 ? (1 - he) / 0.25 : 1), 0);
    }
  });
  const z = Math.max(2, Math.round(9 / g));
  l.drops.forEach((y) => {
    const _ = y.x / f, C = Math.floor(y.y / g);
    for (let F = 0; F < z; F++) X(Math.floor(_ - 0.208 * F * g / f), C + F, R.rain, y.o, ou);
  });
  const Be = Math.max(0, Math.round(4.4 / f / 2.6));
  return l.flakes.forEach((y) => {
    const _ = Math.floor(y.x / f), C = Math.floor(y.y / g);
    X(_, C, R.snow, y.o, Dr);
    for (let F = 1; F <= Be; F++)
      X(_ - F, C, R.snow, y.o, Dr), X(_ + F, C, R.snow, y.o, Dr), X(_, C - F, R.snow, y.o, Dr), X(_, C + F, R.snow, y.o, Dr);
  }), l.bolts.forEach((y) => {
    if (f <= 3.5)
      for (let _ = Math.floor(y.y / g); _ <= (y.y + 24) / g; _++) for (let C = Math.floor(y.x / f); C <= (y.x + 11) / f; C++)
        sp(mp, (C + 0.5) * f - y.x, (_ + 0.5) * g - y.y) && X(C, _, R.sun, 1, Ll);
    else {
      const _ = Math.round(y.x / f), C = Math.round(y.y / g);
      gp.forEach((F, de) => F.split("").forEach((j, re) => {
        j === "#" && X(_ + re, C + de, R.sun, 1, Ll);
      }));
    }
  }), { col: V, ids: q };
}
function bp(a, l) {
  const i = l.px, d = Math.max(6, Math.round(l.width / i)), f = Math.max(6, Math.round(l.height / i)), g = l.width / d, b = l.height / f, E = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, x = (Y) => {
    const J = ru(Y, l);
    return vp(J, su(J, { clock: E, ambient: l.ambient, seed: l.seed }), d, f, g, b, E, l.ambient);
  }, R = x(a), me = l.reveal == null ? 1 : zo(l.reveal);
  let ne = R.col, U = R.ids;
  if (me < 1) {
    const Y = l.prev ? x(l.prev) : null, J = me * (d + 12);
    ne = new Array(d * f), U = new Uint8Array(d * f);
    for (let Z = 0; Z < d * f; Z++) {
      const V = Z % d, q = Z / d | 0;
      (l.reduce ? me : zo((J - V) / 12)) > jo(V, q) ? (ne[Z] = R.col[Z], U[Z] = R.ids[Z]) : Y ? (ne[Z] = Y.col[Z], U[Z] = Y.ids[Z]) : (ne[Z] = null, U[Z] = 255);
    }
  }
  return lp(ne, U, d, f, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function wp(a, l, i) {
  const d = i.width, f = i.height, g = i.reveal == null ? 1 : zo(i.reveal), b = (U, Y) => {
    const J = ru(Y, i);
    xp(U, J, su(J, i));
  };
  if (a.clearRect(0, 0, d, f), g >= 1) {
    b(a, l);
    return;
  }
  if (i.prev && b(a, i.prev), i.reduce) {
    a.save(), a.globalAlpha = g, b(a, l), a.restore();
    return;
  }
  const E = a.canvas, x = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (x.width !== E.width || x.height !== E.height) && (x.width = E.width, x.height = E.height);
  const R = x.getContext("2d");
  R.setTransform(a.getTransform()), R.clearRect(0, 0, d, f), b(R, l);
  const me = g * (d + 64) - 64, ne = R.createLinearGradient(me, 0, me + 64, 0);
  ne.addColorStop(0, "rgba(0,0,0,1)"), ne.addColorStop(1, "rgba(0,0,0,0)"), R.globalCompositeOperation = "destination-in", R.fillStyle = ne, R.fillRect(0, 0, d, f), R.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(x, 0, 0), a.restore();
}
function xp(a, l, i) {
  const { W: d, H: f, S: g, C: b, cw: E, yb: x, glowAt: R, soft: me, tw: ne, sy: U } = l, Y = a.getTransform().a || 1, J = (z) => {
    a.shadowColor = z ? "rgba(28,18,8,.22)" : "transparent", a.shadowBlur = z ? 4 * Y : 0, a.shadowOffsetY = z ? 1.5 * Y : 0;
  }, Z = (z, Be) => {
    const y = Sl(z);
    return "rgba(" + y[0] + "," + y[1] + "," + y[2] + "," + Math.max(0, Math.min(1, Be)).toFixed(3) + ")";
  }, V = (z, Be) => {
    const y = a.createLinearGradient(0, 0, d, 0);
    y.addColorStop(0, z[0]);
    for (let _ = 0; _ < z.length - 1; _++) {
      const C = (_ + Be) * E, F = (C - ne / 2) / d, de = (C + ne / 2) / d;
      F > 0 && F < 1 && y.addColorStop(F, z[_]), de > 0 && de < 1 && y.addColorStop(de, z[_ + 1]);
    }
    return y.addColorStop(1, z[z.length - 1]), y;
  }, q = Math.max(24, Math.ceil(d / 4)), ce = (z, Be) => {
    a.beginPath();
    for (let y = 0; y <= q; y++) {
      const _ = d * y / q, C = z == null ? 0 : x(_) + z;
      y ? a.lineTo(_, C) : a.moveTo(_, C);
    }
    for (let y = q; y >= 0; y--) {
      const _ = d * y / q;
      a.lineTo(_, x(_) + Be);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = V(g.filter((z) => !z.night).map((z) => z.sky), 0.75), a.fillRect(0, 0, d, f);
  const X = a.createLinearGradient(0, 0, d, 0);
  for (let z = 0; z <= 64; z++) {
    const Be = R(d * z / 64);
    X.addColorStop(z / 64, Z(Be.c, Math.min(1, Be.a)));
  }
  a.fillStyle = X;
  for (let z = 0; z < 8; z++)
    a.globalAlpha = 1 - z / 8, ce(z * 2 * U, (z + 1) * 2 * U);
  a.fillStyle = V(g.filter((z) => z.night).map((z) => z.sky), 1.25);
  const fe = Math.max(0.5, me), $ = 6;
  a.globalAlpha = 1, ce(null, -fe);
  for (let z = 0; z < $; z++)
    a.globalAlpha = 1 - (z + 0.5) / $, ce(-fe + 2 * fe * z / $, -fe + 2 * fe * (z + 1) / $);
  a.globalAlpha = 1;
  const M = new Path2D(hp), B = new Path2D(pp), we = new Path2D(up), Ce = new Path2D(fp);
  a.fillStyle = b.star, i.stars.forEach((z) => {
    a.globalAlpha = z.o, z.big ? (a.save(), a.translate(z.x, z.y), a.scale(z.size, z.size), a.fill(M), a.restore()) : (a.beginPath(), a.arc(z.x, z.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const P = Ia(b.sun, "#ffffff", 0.55);
  i.suns.forEach((z) => {
    const Be = a.createRadialGradient(z.x, z.y, 0, z.x, z.y, z.halo);
    Be.addColorStop(0, Z(P, 0.42)), Be.addColorStop(0.7, Z(P, 0)), a.fillStyle = Be, a.beginPath(), a.arc(z.x, z.y, z.halo, 0, Math.PI * 2), a.fill();
    const y = a.createLinearGradient(0, z.y - z.rad, 0, z.y + z.rad);
    y.addColorStop(0.6, b.sun), y.addColorStop(1, b.sunEdge), a.fillStyle = y, J(!0), a.beginPath(), a.arc(z.x, z.y, z.rad, 0, Math.PI * 2), a.fill(), J(!1);
  });
  const Ee = Ia(b.moon, "#ffffff", 0.6);
  i.moons.forEach((z) => {
    a.save(), a.translate(z.x - z.d / 2, z.y - z.d / 2), a.scale(z.d / 46, z.d / 46);
    const Be = a.createLinearGradient(0, 6, 0, 40);
    Be.addColorStop(0, Ee), Be.addColorStop(1, b.moon), a.fillStyle = Be, J(!0), a.fill(B), J(!1), a.restore();
  }), i.clouds.forEach((z) => {
    a.save(), a.globalAlpha = z.o, a.translate(z.x, z.y), a.scale(z.w / 46, z.h / 30.66), a.translate(-4, -9.67), a.fillStyle = z.fill, J(!0), a.fill(we), J(!1), a.restore();
  }), i.fogs.forEach((z) => {
    const Be = a.createLinearGradient(z.x, 0, z.x + z.w, 0);
    Be.addColorStop(0, Z(z.c, 0)), Be.addColorStop(0.25, Z(z.c, z.a)), Be.addColorStop(0.75, Z(z.c, z.a)), Be.addColorStop(1, Z(z.c, 0)), a.fillStyle = Be, a.fillRect(z.x, z.y, z.w, 6 * U);
  }), a.fillStyle = b.rain, i.drops.forEach((z) => {
    a.save(), a.globalAlpha = z.o, a.translate(z.x, z.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = b.snow, i.flakes.forEach((z) => {
    a.globalAlpha = z.o, a.beginPath(), a.arc(z.x, z.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = b.sun, i.bolts.forEach((z) => {
    a.save(), a.globalAlpha = z.o, a.translate(z.x, z.y), a.fill(Ce), a.restore();
  }), a.restore();
}
const yp = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", _r = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, hl = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, cc = (a, l) => '<path class="' + l + '" d="' + a + '"/>', kp = (a, l) => ' style="animation-delay:-' + Math.round(a * 137 % l) + 'ms"', Pa = (a, l, i, d) => {
  const f = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (d < 1 ? ' opacity="' + d + '"' : "") + kp(a, 2400) + ' d="M' + a + " " + (l - i) + "L" + (a + f) + " " + (l - f) + "L" + (a + i) + " " + l + "L" + (a + f) + " " + (l + f) + "L" + a + " " + (l + i) + "L" + (a - f) + " " + (l + f) + "L" + (a - i) + " " + l + "L" + (a - f) + " " + (l - f) + 'Z"/>';
}, rd = ([a, l, i], d) => '<path class="wbMoonPath" d="' + a + '" fill="url(#' + d + ')"/><defs><linearGradient id="' + d + '" x1="0" y1="' + l + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Mp = (a, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Sp = (a) => (a ? ["29.35", "43.04", "56.74"].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), Cp = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, i], d) => '<circle class="wbFlake" style="animation-delay:-' + d * 640 + 'ms" cx="' + l + '" cy="' + i + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Tp(a, l, i, d) {
  const f = (g) => '<g filter="url(#' + d + '-sh)">' + g + "</g>";
  return a === "clear" ? l ? f(rd(i ? hl.l : hl.s, d)) + (i ? Pa(70, 20, 5.83, 1) + Pa(78.33, 41.67, 3.75, 0.8) + Pa(60, 71.67, 3.33, 0.6) : Pa(42, 12, 3.5, 1) + Pa(47, 25, 2.25, 0.8) + Pa(36, 43, 2, 0.6)) : f(Mp(d, i)) : a === "partly" ? f(l ? rd(i ? hl.lp : hl.sp, d) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + f(cc(i ? _r.lp : _r.sp, l ? "wbCloudLight" : "wbBright")) + (l ? i ? Pa(73.33, 16.67, 4.17, 0.9) : Pa(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? f(cc(i ? _r.lc : _r.s, l ? "wbCloudLight" : "wbBright")) + (l ? i ? Pa(15, 15, 3.75, 0.8) + Pa(76.67, 13.33, 2.92, 0.6) : Pa(9, 9, 2.25, 0.8) + Pa(46, 8, 1.75, 0.6) : "") : f(cc(i ? _r.lr : _r.s, "wbCloudLight")) + (a === "rain" ? Sp(i) : Cp(i));
}
const Lp = (a, l) => '<defs><filter id="' + a + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (l ? 1.6 : 1) + '" stdDeviation="' + (l ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Ap(a, l, i, d) {
  let f = yp(a);
  const g = f === "night" || !!i;
  f === "night" && (f = "clear");
  const b = l ? 90 : 54;
  return { k: f, night: g, svg: '<svg viewBox="0 0 ' + b + " " + b + '">' + Lp(d, l) + Tp(f, g, l, d) + "</svg>" };
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
], fl = (a, l) => (_p[l % 8 * 8 + a % 8] + 0.5) / 64, Za = (a) => [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)], Vn = (a, l, i) => [Math.round(a[0] + (l[0] - a[0]) * i), Math.round(a[1] + (l[1] - a[1]) * i), Math.round(a[2] + (l[2] - a[2]) * i)], bs = (a) => a < 0 ? 0 : a > 1 ? 1 : a, sd = (a, l) => {
  let i = a * 374761393 + l * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Xi = [255, 255, 255], na = Za("#26221e"), ld = Za("#0288d1"), Ep = Za("#01579b"), dc = Za(sa.cloudDay), uc = Za(sa.cloudNight), ml = Za(sa.dusk), pc = Za(sa.sunEdge), Dp = Za(sa.sun), Rp = 10, cd = 0.3, Vo = 56, lu = 21;
function Np(a) {
  const l = Array.from({ length: lu }, () => new Array(Vo).fill(void 0)), i = (b, E, x) => {
    l[E][b] = x;
  }, d = Vn(ml, na, 0.35), f = Vn(na, Xi, 0.22);
  for (let b = 0; b <= 6; b++) {
    const E = b < 2 ? Vo - 2 : Vo - 1;
    for (let x = 6 - b; x <= E; x++) i(x, b, b < 2 ? d : b === 6 ? f : na);
  }
  const g = [ml, pc, uc, Za(sa.skyRainDay), Vn(ml, na, 0.2), Vn(a, na, 0.35)];
  [2, 3, 2, 3, 3].forEach((b, E) => {
    const x = 9 + E * 6;
    for (let R = 0; R < b; R++) {
      const me = g[(E * 2 + R * 3) % g.length];
      for (let ne = x; ne < x + 5; ne++)
        i(ne, 7 + R * 2, Vn(me, na, 0.12)), i(ne, 8 + R * 2, R === b - 1 ? Vn(me, Xi, 0.3) : me);
      i(x + 5, 7 + R * 2, na), i(x + 5, 8 + R * 2, na);
    }
  });
  for (let b = 7; b <= 12; b++) i(5, b, na);
  i(5, 13, pc);
  for (let b = 7; b <= 14; b++) for (let E = 42; E <= 51; E++) i(E, b, E === 51 ? uc : dc);
  for (let b = 43; b <= 50; b += 2)
    i(b, 12, na), i(b, 9, Vn(na, dc, 0.4));
  for (let b = 40; b <= 53; b++) i(b, 14, b === 40 || b === 53 ? uc : dc);
  for (let b = 15; b <= 18; b++) for (let E = 46; E <= 49; E++) i(E, b, b === 18 ? na : b === 16 ? pc : ml);
  for (let b = 15; b <= 19; b++) i(44, b, na);
  return i(44, 20, Dp), l;
}
function Bp(a, l, i, d) {
  const f = Math.max(1, Math.round(a)), g = Math.max(1, Math.round(l)), b = new Uint8ClampedArray(f * g * 4), E = Za(d.skyClearDay), x = Za(d.skyFogDay), R = Np(E), me = Math.round(g * 0.55), ne = bs(1 - Math.log(i / cd) / Math.log(Rp / cd)), U = Vn(E, x, ne), Y = (q) => bs((q - 0.1) / 0.9), J = bs((1 - Math.exp(-2 / i) - 0.2) / 0.8), Z = Math.round(f / 2 - Vo / 2), V = me + 3;
  for (let q = 0; q < g; q++) {
    const ce = V - 1 - q, X = q - V;
    for (let fe = 0; fe < f; fe++) {
      const $ = fe - Z;
      let M, B;
      const we = ce >= 0 && ce < lu && $ >= 0 && $ < Vo ? R[ce][$] : void 0;
      if (we)
        M = we, B = J;
      else if (ce >= 0 && ce <= 1 && $ >= 4 - ce && $ <= 5 - ce)
        M = Vn(Xi, ld, 0.15), B = J;
      else if (q < me) {
        const Ee = bs(((q + 0.5) / me - 0.15) / 0.85) * 3, z = Math.min(3, Math.floor(Ee + fl(fe + 2, q + 5)));
        M = Vn(U, Xi, z * 0.1), B = ne * 0.95;
      } else {
        const Ee = (q - me + 0.5) / (g - me), z = Math.min(1.5, 6e-3 / (Ee * Ee)), Be = bs(Ee * 1.4) * 3, y = Math.min(3, Math.floor(Be + fl(fe + 1, q + 6)));
        M = Vn(ld, Ep, y / 3);
        const _ = 1 + Math.round(Ee * 7), C = Math.floor(fe / (_ * 3)), F = 0.06 + 0.16 * Ee, de = fe % (_ * 3) < _;
        de && sd(C, q) < F ? M = Vn(M, Xi, 0.18 + 0.1 * (1 - Ee)) : de && Ee > 0.5 && sd(C, q - 1) < F && (M = Vn(M, na, 0.12)), B = Y(1 - Math.exp(-z / i)), X === 0 && $ >= 3 && $ <= 8 ? (M = Vn(M, Xi, $ < 6 ? 0.8 : 0.45), B = J) : X >= 0 && X <= 2 && $ >= Vo && $ < Vo + 40 ? ((1 - ($ - Vo) / 40) * (X === 1 ? 0.9 : 0.5) > fl(fe, q + 3) && (M = Vn(M, Xi, 0.5)), B = J) : X === 0 && $ >= 6 && $ < Vo && (M = Vn(M, na, $ % 2 === 0 ? 0.35 : 0.2), B = J);
      }
      const Ce = B > fl(fe, q) ? x : M, P = (q * f + fe) * 4;
      b[P] = Ce[0], b[P + 1] = Ce[1], b[P + 2] = Ce[2], b[P + 3] = 255;
    }
  }
  return { data: b, w: f, h: g };
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
  const i = a ? Pp[String(a).toUpperCase()] : void 0;
  if (!i || !(l > 0)) return;
  const d = (g) => Math.abs(Math.log(g[2] / l)), f = i.reduce((g, b) => d(b) < d(g) ? b : g);
  return d(f) <= Math.log(Ip) ? { from: f[0], to: f[1], km: f[2] } : void 0;
}
const Fp = (a, l) => l === "mi" ? a * 1.609344 : l === "m" ? a / 1e3 : l === "ft" ? a * 3048e-7 : l === "yd" ? a * 9144e-7 : a, Op = (a) => a < 1 ? "very_poor" : a < 4 ? "poor" : a < 10 ? "moderate" : a < 20 ? "good" : a < 40 ? "very_good" : "excellent", Ya = 6e4, Yt = 36e5, go = 864e5, xs = 1440, qp = 6, Wp = 10 * Ya, dd = 3, jp = 3, ud = { day: [6, 22], waking: [7, 23], all: [0, 24] }, zp = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], Vp = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", pd = (a, l, i, d) => '<circle cx="' + a + '" cy="' + l + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((f) => {
  const g = Math.cos(f * Math.PI / 180), b = Math.sin(f * Math.PI / 180), E = i + 2, x = i + 2 + d;
  return "M" + (a + g * E).toFixed(2) + " " + (l + b * E).toFixed(2) + "L" + (a + g * x).toFixed(2) + " " + (l + b * x).toFixed(2);
}).join("") + '"/>', Oo = (a) => '<path d="' + Vp + '"' + (a ? ' transform="' + a + '"' : "") + "/>", qo = (a) => '<path d="' + a + '"/>', hd = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function Gp(a, l) {
  const i = "translate(0,-3)";
  switch (a) {
    case "sunny":
      return l ? hd : pd(12, 12, 4, 2.5);
    case "clear-night":
      return hd;
    case "partlycloudy":
      return (l ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : pd(7.5, 7.5, 2.6, 1.4)) + Oo("translate(3.6,3) scale(.85)");
    case "cloudy":
      return Oo();
    case "fog":
      return qo("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return Oo(i) + qo("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return Oo(i) + qo("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return Oo(i) + qo("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return Oo(i) + qo("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return Oo(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return Oo(i) + qo("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return Oo(i) + qo("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return qo("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + qo("M12 8v5M12 16h.01");
  }
}
const hc = (a, l) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + Gp(a, l) + "</svg>", Up = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Yp = 30 * Ya, Zp = 7, Kp = 3, fd = 1, $p = Ya, Xp = 15 * Ya, Jp = 5, aa = {
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
}, eh = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], th = Object.keys(Ke.phases), gl = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, nh = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, cu = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], vl = 100, md = "µg/m³", ah = "weather_alerts.air_quality_pollen", gd = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], oh = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, ih = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], rh = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, sh = { daily: 1, hourly: 2 }, qe = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), zn = (a, l) => a.replace(/\{(\w+)\}/g, (i, d) => l[d] ?? ""), Rr = (a) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + a + '"/></svg>', lh = () => {
  var a;
  return !!((a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches);
}, gn = (a) => a != null && a !== "" && Number.isFinite(Number(a)), vd = /* @__PURE__ */ new Map(), bd = /* @__PURE__ */ new Map(), fc = /* @__PURE__ */ new WeakMap(), ch = (a) => {
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
function mn(a, l, i) {
  const d = Number(a);
  if (Number.isNaN(d)) return String(a);
  const f = (l == null ? void 0 : l.number_format) === "none", g = { maximumFractionDigits: 2, ...i, ...f ? { useGrouping: !1 } : {} }, b = f ? "en-US" : ch(l), E = JSON.stringify([b, g]);
  let x = vd.get(E);
  if (!x) {
    try {
      x = new Intl.NumberFormat(b, g);
    } catch {
      x = new Intl.NumberFormat(void 0, g);
    }
    vd.set(E, x);
  }
  return x.format(d);
}
const Fc = (a) => {
  var l;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.language) || (a == null ? void 0 : a.language) || void 0;
};
function dh(a) {
  if (!a) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (fc.has(a)) return fc.get(a);
  const l = a.time_format, i = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? a.language : void 0).includes("10") : l === "12";
  return fc.set(a, i), i;
}
const du = (a) => {
  var l, i;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.time_zone) === "server" && ((i = a == null ? void 0 : a.config) != null && i.time_zone) ? a.config.time_zone : void 0;
};
function uu(a, l) {
  const i = JSON.stringify([a, l]);
  let d = bd.get(i);
  if (!d) {
    try {
      d = new Intl.DateTimeFormat(a, l);
    } catch {
      d = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    bd.set(i, d);
  }
  return d;
}
const Ki = (a, l) => uu(Fc(l), { hour: "numeric", minute: "2-digit", hourCycle: dh(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: du(l) }).format(a), wd = (a, l) => uu(Fc(l), { weekday: "short", timeZone: du(l) }).format(a), uh = (a, l) => a.toLocaleDateString(Fc(l), { weekday: "narrow" }), Sn = (a, l) => gn(l) ? mn(Math.round(Number(l)), a.locale) + "°" : "–", Nr = (a) => {
  const l = new Date(a);
  return l.setHours(0, 0, 0, 0), l;
}, Er = (a, l) => a.getFullYear() === l.getFullYear() && a.getMonth() === l.getMonth() && a.getDate() === l.getDate(), ba = Math.PI / 180, ph = 2440588, hh = 2451545, Al = ba * 23.4397, fh = 149598e3, mh = -0.833 * ba, gh = 0.133 * ba, xd = 5 * Ya, pu = (a) => a.getTime() / go - 0.5 + ph - hh, hu = (a, l) => Math.atan2(Math.sin(a) * Math.cos(Al) - Math.tan(l) * Math.sin(Al), Math.cos(a)), fu = (a, l) => Math.asin(Math.sin(l) * Math.cos(Al) + Math.cos(l) * Math.sin(Al) * Math.sin(a)), vh = (a, l) => ba * (280.16 + 360.9856235 * a) - l, bh = (a, l, i) => Math.asin(Math.sin(l) * Math.sin(i) + Math.cos(l) * Math.cos(i) * Math.cos(a));
function mu(a) {
  const l = ba * (357.5291 + 0.98560028 * a), i = ba * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), d = l + i + ba * 102.9372 + Math.PI;
  return { ra: hu(d, 0), dec: fu(d, 0), dist: fh };
}
function gu(a) {
  const l = ba * (218.316 + 13.176396 * a), i = ba * (134.963 + 13.064993 * a), d = ba * (93.272 + 13.22935 * a), f = l + ba * 6.289 * Math.sin(i), g = ba * 5.128 * Math.sin(d);
  return { ra: hu(f, g), dec: fu(f, g), dist: 385001 - 20905 * Math.cos(i) };
}
const vu = (a, l, i, d) => {
  const f = pu(l), g = a(f);
  return bh(vh(f, ba * -d) - g.ra, ba * i, g.dec);
}, Oc = (a, l, i) => vu(mu, a, l, i), wh = (a, l, i) => vu(gu, a, l, i);
function bu(a, l, i, d) {
  const f = {};
  let g = i.getTime(), b = a(i) - l;
  for (let E = g + xd; E <= d.getTime(); E += xd) {
    const x = a(new Date(E)) - l;
    if (b < 0 != x < 0) {
      const R = new Date(g + (E - g) * b / (b - x));
      x > 0 ? f.rise ?? (f.rise = R) : f.set ?? (f.set = R);
    }
    g = E, b = x;
  }
  return f;
}
const wu = (a) => {
  const l = Nr(a);
  return [l, new Date(l.getTime() + go)];
}, xh = (a, l, i) => bu((d) => Oc(d, l, i), mh, ...wu(a)), yh = (a, l, i) => bu((d) => wh(d, l, i), gh, ...wu(a));
function kh(a) {
  const l = pu(a), i = mu(l), d = gu(l), f = Math.acos(Math.sin(i.dec) * Math.sin(d.dec) + Math.cos(i.dec) * Math.cos(d.dec) * Math.cos(i.ra - d.ra)), g = Math.atan2(i.dist * Math.sin(f), d.dist - i.dist * Math.cos(f)), b = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - d.ra), Math.sin(i.dec) * Math.cos(d.dec) - Math.cos(i.dec) * Math.sin(d.dec) * Math.cos(i.ra - d.ra));
  return { fraction: (1 + Math.cos(g)) / 2, phase: 0.5 + 0.5 * g * (b < 0 ? -1 : 1) / Math.PI };
}
const Mh = (a) => {
  const l = a * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, _l = (a) => {
  const l = a == null ? void 0 : a.config;
  return l && gn(l.latitude) && gn(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function mc(a, l) {
  var R, me, ne;
  const i = _l(a), d = i ? xh(l, i.lat, i.lon) : {}, f = (R = a == null ? void 0 : a.states) == null ? void 0 : R["sun.sun"], g = Nr(l).getTime(), b = (U) => {
    const Y = U ? new Date(U) : null;
    return Y && Number.isFinite(Y.getTime()) && Nr(Y).getTime() === g ? Y : null;
  }, E = b((me = f == null ? void 0 : f.attributes) == null ? void 0 : me.next_rising), x = b((ne = f == null ? void 0 : f.attributes) == null ? void 0 : ne.next_setting);
  return E && (d.rise = E), x && (d.set = x), d;
}
function Sh(a) {
  var d;
  const l = (d = a == null ? void 0 : a.states) == null ? void 0 : d["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const i = _l(a);
  return i ? Oc(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const ys = (a) => !!a && a.state !== "unavailable" && a.state !== "unknown", Dl = (a, l) => {
  var d;
  const i = (d = a.entities) == null ? void 0 : d[l];
  return !i || !i.hidden && !i.entity_category;
}, va = (a, l, i) => {
  var d, f;
  for (const g of l) {
    const b = (d = a.states) == null ? void 0 : d[g];
    if (!ys(b)) continue;
    const E = (f = b.attributes) == null ? void 0 : f[i];
    if (E != null && E !== "") return { stateObj: b, value: E };
  }
}, Ch = (a, l) => l.map((i) => {
  var d;
  return (d = a.states) == null ? void 0 : d[i];
}).find(ys), Th = (a, l, i) => l.map((d) => {
  var f;
  return (f = a.states) == null ? void 0 : f[d];
}).find((d) => {
  var f;
  return ys(d) && (((f = d.attributes) == null ? void 0 : f.supported_features) == null || Number(d.attributes.supported_features) & sh[i]);
});
function $i(a, l, i) {
  var g, b, E, x;
  const d = ((b = (g = a.config) == null ? void 0 : g.unit_system) == null ? void 0 : b.length) || "", f = (l == null ? void 0 : l.attributes) || {};
  switch (i) {
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
function Cl(a, l, i, d) {
  try {
    if (typeof a.formatEntityAttributeValueToParts == "function") {
      const [f, ...g] = a.formatEntityAttributeValueToParts(l, i, d).map((b) => b.value);
      return { number: f, unit: g.join("").trim() };
    }
  } catch {
  }
  return { number: mn(d, a.locale), unit: $i(a, l, i) };
}
function Lh(a, l, i, d) {
  try {
    if (typeof a.formatEntityAttributeValue == "function") return a.formatEntityAttributeValue(l, i, d);
  } catch {
  }
  const f = Cl(a, l, i, d);
  return (f.number + " " + f.unit).trim();
}
function bl(a, l) {
  var d;
  try {
    if (typeof a.formatEntityState == "function") return a.formatEntityState(l);
  } catch {
  }
  const i = (d = l.attributes) == null ? void 0 : d.unit_of_measurement;
  return Qp[l.state] || (i && gn(l.state) ? mn(l.state, a.locale) + " " + i : l.state);
}
function yd(a, l) {
  var i;
  try {
    if (typeof a.formatEntityName == "function") return a.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((i = l.attributes) == null ? void 0 : i.friendly_name) || l.entity_id;
}
const Ah = (a) => a < 3 ? "low" : a < 6 ? "moderate" : a < 8 ? "high" : a < 11 ? "very_high" : "extreme", _h = (a) => cu.find(([, l]) => a <= l)[0];
function Eh(a, l) {
  if (l === "Beaufort") return Math.round(a);
  const i = l ? oh[l] : void 0;
  if (i === void 0) return;
  const d = ih.findIndex((f) => a * i < f);
  return d === -1 ? 12 : d;
}
const kd = (a, l) => {
  const i = l ? rh[l] : void 0;
  return i === void 0 ? void 0 : a * i;
}, Md = (a) => Object.keys(a.states || {}).find((l) => {
  var i, d;
  return l.startsWith("sensor.") && ((d = (i = a.entities) == null ? void 0 : i[l]) == null ? void 0 : d.platform) === "moon";
}), gc = (a) => Object.values(a.states || {}).filter((l) => {
  var i, d;
  return l.entity_id.startsWith("sensor.") && ((i = l.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((d = l.attributes) == null ? void 0 : d.state_class) ?? "") && Dl(a, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function Dh(a) {
  var i;
  const l = {};
  for (const [d, f] of Object.entries(((i = a == null ? void 0 : a.core) == null ? void 0 : i.integration) ?? {})) {
    if (f && "integration_type" in f) {
      l[d] = f.categories;
      continue;
    }
    for (const [g, b] of Object.entries((f == null ? void 0 : f.integrations) ?? {})) l[g] = b == null ? void 0 : b.categories;
  }
  return l;
}
const xu = (a, l, i) => {
  var f, g, b;
  const d = (g = (f = a.entities) == null ? void 0 : f[i]) == null ? void 0 : g.platform;
  return !!d && !!((b = l[d]) != null && b.includes(ah));
};
function Rh(a, l) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(a.states || {}).filter((d) => {
    var f;
    return d.entity_id.startsWith("sensor.") && gd.includes(((f = d.attributes) == null ? void 0 : f.device_class) ?? "") && Dl(a, d.entity_id) && xu(a, l, d.entity_id);
  }).sort((d, f) => d.entity_id.localeCompare(f.entity_id)).forEach((d) => {
    i.has(d.attributes.device_class) || i.set(d.attributes.device_class, d.entity_id);
  }), gd.map((d) => i.get(d)).filter(Boolean);
}
const Nh = (a, l) => Object.values(a.states || {}).filter((i) => {
  var d, f;
  return i.entity_id.startsWith("sensor.") && Dl(a, i.entity_id) && xu(a, l, i.entity_id) && (((f = (d = a.entities) == null ? void 0 : d[i.entity_id]) == null ? void 0 : f.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function Sd(a, l, i) {
  const d = Math.max(l - a, 1e-6), f = i[i.length - 1], g = i.find((R) => d / R <= 4) ?? f * Math.ceil(d / (4 * f)), b = Math.floor(a / g) * g;
  let E = Math.ceil(l / g) * g;
  E === b && (E = b + g);
  const x = [];
  for (let R = b; R <= E + g / 1e3; R += g) x.push(R);
  return { min: b, max: E, ticks: x };
}
const ws = (a, l, i) => {
  const d = (b) => [1, 3, 5].map((E) => parseInt(b.slice(E, E + 2), 16)), f = d(a), g = d(l);
  return "rgb(" + f.map((b, E) => Math.round(b + (g[E] - b) * i)).join(", ") + ")";
}, Bh = (a, l, i, d) => {
  const f = i * Math.abs(1 - 2 * d), g = d < 0.5 ? 0 : 1;
  return "M " + a + " " + (l - i) + " A " + i + " " + i + " 0 0 0 " + a + " " + (l + i) + " A " + f + " " + i + " 0 0 " + g + " " + a + " " + (l - i) + " Z";
}, Wo = ({ icon: a, name: l, sub: i, visual: d, double: f, backdrop: g, cls: b }) => '<div class="wbCard wbSquare' + (f ? " wbDouble" : "") + (g ? " wbHasBackdrop" : "") + (b ? " " + b : "") + '">' + (g ? '<div class="wbBackdrop" aria-hidden="true">' + g + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Rr(a) + '</div><div class="wbText"><span class="wbName">' + qe(l) + "</span>" + (i ? '<span class="wbSub">' + qe(i) + "</span>" : "") + '</div></div><div class="wbVisual">' + d + "</div></div>", wl = (a, l) => '<div class="wbValue"><span class="wbNum">' + qe(a) + "</span>" + (l ? '<span class="wbUnitV">' + qe(l) + "</span>" : "") + "</div>";
function Ph(a) {
  const l = a.max - a.min || 1, i = (E) => 100 - (Math.min(a.max, Math.max(a.min, E)) - a.min) / l * 100, d = (E) => E / xs * 100 + "%", f = (E) => E.map((x) => x.t + "," + i(x.v)).join(" "), g = a.kind === "line" ? a.points : [];
  let b = '<div class="wbDayChart"><div class="wbDcSun">' + a.sun.map((E) => '<span class="wbDcSunMark" style="left:' + d(E.t) + '">' + Rr(E.rise ? aa.sunsetUp : aa.sunsetDown) + qe(E.label) + "</span>").join("") + "</div>";
  return b += '<div class="wbDcY">' + a.ticks.map((E) => '<span style="top:' + i(E) + '%">' + qe(a.format(E)) + "</span>").join("") + "</div>", b += '<div class="wbDcPlot"><svg viewBox="0 0 ' + xs + ' 100" preserveAspectRatio="none">' + a.night.map(([E, x]) => '<rect class="wbDcNight" x="' + E + '" y="0" width="' + (x - E) + '" height="100"></rect>').join("") + a.ticks.map((E) => '<line class="wbDcGrid" x1="0" x2="' + xs + '" y1="' + i(E) + '" y2="' + i(E) + '" vector-effect="non-scaling-stroke"></line>').join("") + a.sun.map((E) => '<line class="wbDcSunLine" x1="' + E.t + '" x2="' + E.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (a.past && a.past.length > 1 ? '<polyline class="wbDcPast" points="' + f(a.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (g.length > 1 ? '<polygon class="wbDcArea" points="' + g[0].t + ",100 " + f(g) + " " + g[g.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + f(g) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (a.now ? '<line class="wbDcNow" x1="' + a.now.t + '" x2="' + a.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (a.kind === "bars" ? a.points.filter((E) => E.v > 0).map((E) => '<i class="wbDcBar" style="left:' + d(E.t + 12) + ";width:" + d(36) + ";height:" + (100 - i(E.v)) + '%"></i>').join("") : "") + (a.now && a.kind === "line" ? '<i class="wbDcDot" style="left:' + d(a.now.t) + ";top:" + i(a.now.v) + '%"></i>' : "") + (a.peak ? '<span class="wbDcPeak" style="left:' + d(a.peak.t) + ";top:" + i(a.peak.v) + '%">' + qe(a.peak.label) + "</span>" : "") + (a.note ? '<span class="wbDcNote">' + qe(a.note) + "</span>" : "") + "</div>", b += '<div class="wbDcX">' + a.hours.map((E) => '<span class="' + (E.minor ? "wbMinor" : "") + '" style="left:' + d(E.t) + '">' + qe(E.label) + "</span>").join("") + "</div></div>", b;
}
function Ih(a, l) {
  const b = a.map((V) => V.value), E = Math.min(...b), x = Math.max(...b), R = x - E || 1, me = (V) => V / (a.length - 1) * 300, ne = (V) => 18 + (1 - (V - E) / R) * 84, U = a.map((V, q) => me(q) + "," + ne(V.value)).join(" "), Y = b.indexOf(x), J = b.indexOf(E), Z = (V) => V === 0 ? "start" : V === a.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + U + ' 300,102"></polygon><polyline class="wbLine" points="' + U + '" vector-effect="non-scaling-stroke"></polyline><text x="' + me(Y) + '" y="' + (ne(x) - 6) + '" text-anchor="' + Z(Y) + '">' + qe(l(x)) + '</text><text x="' + me(J) + '" y="' + (ne(E) + 14) + '" text-anchor="' + Z(J) + '">' + qe(l(E)) + '</text><text x="0" y="120" text-anchor="start">' + qe(a[0].label) + '</text><text x="300" y="120" text-anchor="end">' + qe(a[a.length - 1].label) + "</text></svg>";
}
function Hh(a, l) {
  const g = a.map((ne) => ne.value).concat([]), b = Math.min(...g) - 2, E = Math.max(...g) + 1, x = E - b || 1, R = 300 / a.length, me = (ne) => (1 - (ne - b) / x) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + a.map((ne, U) => '<rect class="wbBar' + (ne.now ? " wbNowBar" : "") + '" x="' + (U * R + R * 0.2) + '" y="' + me(ne.value) + '" width="' + R * 0.6 + '" height="' + (104 - me(ne.value)) + '" rx="6"></rect><text x="' + (U * R + R / 2) + '" y="120" text-anchor="middle">' + qe(ne.label) + "</text>").join("") + "</svg>";
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
function Td(a, { getHass: l, entityId: i, style: d = "bitmap", motion: f = !0, cards: g, onOpen: b, hoursWindow: E } = {}) {
  var Sa, wt;
  const x = "wb" + ++Wh + "-", R = document.createElement("div");
  R.className = "wb", R.dataset.style = d;
  const me = document.createElement("div");
  me.className = "wbBento", R.appendChild(me), a.replaceChildren(R);
  const ne = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality"].filter((k) => !g || g.includes(k)), U = { current: "wide", hourly: "wide", compared_to_average: "double" }, Y = {};
  ne.forEach((k) => {
    const A = document.createElement("div");
    A.className = "wbItem", A.dataset.card = k, A.dataset.size = U[k] || "tile", A.hidden = !0, me.appendChild(A), Y[k] = { el: A, html: null };
  });
  let J = !1, Z = null, V = 0, q = -1, ce = !1, X = null;
  const fe = "homecore-next-view", M = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: (() => {
    try {
      return localStorage.getItem(fe);
    } catch {
      return null;
    }
  })() === "bars" ? "bars" : "strip", aq: void 0 }, B = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let we = /* @__PURE__ */ new Date(), Ce = /* @__PURE__ */ new Date(), P = null;
  const Ee = {}, z = {}, Be = (k) => {
    var A;
    return ((A = z[k]) == null ? void 0 : A.forecast) ?? [];
  }, y = (k, A) => {
    var O;
    return z[A] ? (O = k.states) == null ? void 0 : O[z[A].entityId] : void 0;
  };
  function _(k) {
    const A = Ee[k];
    A && (A.unsub.then((O) => {
      typeof O == "function" && O();
    }).catch(() => {
    }), delete Ee[k]), z[k] && delete z[k];
  }
  function C(k, A, O) {
    var Q;
    if (typeof ((Q = k.connection) == null ? void 0 : Q.subscribeMessage) != "function") return;
    const G = { entityId: O };
    try {
      G.unsub = Promise.resolve(k.connection.subscribeMessage((le) => {
        J || Ee[A] !== G || (le != null && le.forecast ? z[A] = { entityId: O, forecast: le.forecast } : delete z[A], xn());
      }, { type: "weather/subscribe_forecast", forecast_type: A, entity_id: O }));
    } catch (le) {
      G.unsub = Promise.reject(le);
    }
    G.unsub.catch(() => {
      Ee[A] === G && delete Ee[A];
    }), Ee[A] = G;
  }
  function F(k, A) {
    var O;
    for (const G of ["daily", "hourly"]) {
      const Q = Th(k, A, G);
      ((O = Ee[G]) == null ? void 0 : O.entityId) !== (Q == null ? void 0 : Q.entity_id) && (_(G), Q && C(k, G, Q.entity_id));
    }
  }
  const de = (k, A, O, G = !1) => k.callWS({
    type: "history/history_during_period",
    start_time: O.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [A],
    minimal_response: G,
    no_attributes: G,
    significant_changes_only: !1
  });
  async function j(k, A) {
    var ue, be, ge;
    const O = va(k, A, "pressure");
    if (!O) return;
    const G = O.stateObj.entity_id, Q = await de(k, G, new Date(Date.now() - 3 * Yt)), le = (ge = (be = (ue = Q == null ? void 0 : Q[G]) == null ? void 0 : ue.find((Ie) => {
      var Le;
      return typeof ((Le = Ie.a) == null ? void 0 : Le.pressure) == "number";
    })) == null ? void 0 : be.a) == null ? void 0 : ge.pressure;
    B.pressureHistory = typeof le == "number" ? { entityId: G, value: le } : void 0;
  }
  async function re(k, A) {
    var be;
    const O = va(k, A, "temperature");
    if (!O) return;
    const G = O.stateObj.entity_id, Q = Nr(/* @__PURE__ */ new Date()), le = await de(k, G, new Date(Q.getTime() - Zp * go)), ue = /* @__PURE__ */ new Map();
    for (const ge of (le == null ? void 0 : le[G]) ?? []) {
      const Ie = (be = ge.a) == null ? void 0 : be.temperature, Le = new Date((ge.lc ?? ge.lu) * 1e3);
      if (typeof Ie != "number" || Le >= Q) continue;
      const We = Le.toDateString();
      ue.set(We, Math.max(ue.get(We) ?? -1 / 0, Ie));
    }
    B.temperatureHistory = { entityId: G, dailyHighs: [...ue.values()], days: [...ue.entries()].map(([ge, Ie]) => ({ date: new Date(ge), high: Ie })) };
  }
  async function he(k) {
    const A = gc(k);
    if (!A) return;
    const O = await k.callWS({ type: "recorder/statistic_during_period", statistic_id: A, rolling_window: { duration: { hours: 24 } } });
    B.rain = { entityId: A, change: (O == null ? void 0 : O.change) ?? void 0 };
  }
  function ve() {
    const k = l == null ? void 0 : l();
    if (!k || J || typeof k.callWS != "function") return;
    const A = sn(k);
    B.lastFetch = Date.now(), [j(k, A), re(k, A), he(k)].forEach((O) => O.then(() => xn(), () => {
    }));
  }
  async function Ye() {
    const k = l == null ? void 0 : l();
    if (!k) return;
    const A = va(k, sn(k), "temperature");
    if (!A) return;
    const O = A.stateObj.entity_id, G = Nr(/* @__PURE__ */ new Date());
    try {
      const Q = await de(k, O, G), le = (ue) => ((Q == null ? void 0 : Q[O]) ?? []).map((be) => {
        var ge;
        return { time: be.lu * 1e3, value: (ge = be.a) == null ? void 0 : ge[ue] };
      }).filter((be) => typeof be.value == "number");
      B.todayHistory = { day: G.toDateString(), fetched: Date.now(), temperature: le("temperature"), humidity: le("humidity") }, xn();
    } catch {
    }
  }
  async function ct(k) {
    const A = l == null ? void 0 : l();
    if (A)
      try {
        const O = await de(A, k, new Date(Date.now() - 24 * Yt), !0), G = ((O == null ? void 0 : O[k]) ?? []).filter((le) => gn(le.s)), Q = Math.max(1, Math.ceil(G.length / 48));
        B.aqHistory = { entityId: k, points: G.filter((le, ue) => ue % Q === 0).map((le) => ({ label: Ki(new Date(le.lu * 1e3), A), value: Number(le.s) })) }, xn();
      } catch {
      }
  }
  function At(k) {
    B.categories === void 0 && (B.categories = null, Promise.resolve().then(() => k.callWS({ type: "integration/descriptions" })).then((A) => {
      B.categories = Dh(A);
    }, () => {
      B.categories = {};
    }).then(() => xn()));
  }
  function sn(k) {
    var O;
    const A = Object.keys(k.states || {}).filter((G) => G.startsWith("weather.") && Dl(k, G)).sort();
    return i && ((O = k.states) != null && O[i]) ? [i, ...A.filter((G) => G !== i)] : A;
  }
  const Gn = (k) => B.categories ? { air: Rh(k, B.categories), pollen: Nh(k, B.categories) } : { air: [], pollen: [] };
  function ht(k, A, O, G) {
    if (d === "line") return '<span class="wbWx wbS' + A + ' wbLineIcon" aria-hidden="true">' + hc(k, O || k === "clear-night") + "</span>";
    if (d === "smooth") {
      const Q = Ap(k, A === 90, O, x + "g-" + G);
      return '<span class="wbWx wbS' + A + " wb" + Q.k[0].toUpperCase() + Q.k.slice(1) + (Q.night ? " wbNight" : "") + '" aria-hidden="true">' + Q.svg + "</span>";
    }
    return '<span class="wbWx wbS' + A + '" aria-hidden="true"><canvas data-wb-wx="' + qe(El(k, O)) + '" data-size="' + A + '"></canvas></span>';
  }
  const Qe = () => Be("daily").filter((k) => k.templow != null).slice(0, qp);
  function St(k, A) {
    const O = new Date(A.datetime), G = /* @__PURE__ */ new Date();
    return Er(O, G) ? Ke.today : Er(O, new Date(G.getTime() + go)) ? Ke.tomorrow : wd(O, k);
  }
  const ot = (k, A, O) => O === 0 ? St(k, A) : wd(new Date(A.datetime), k);
  function vn(k, A) {
    var Le, We, $e, Oe;
    const O = Ch(k, A);
    if (!O) return "";
    const G = Qe(), Q = M.openDay !== void 0 ? G[M.openDay] : void 0, le = va(k, A, "temperature"), ue = G[0], be = ue && Er(new Date(ue.datetime), /* @__PURE__ */ new Date()), ge = ((We = (Le = k.config) == null ? void 0 : Le.unit_system) == null ? void 0 : We.temperature) || (($e = O.attributes) == null ? void 0 : $e.temperature_unit) || "";
    let Ie = '<div class="wbCard wbWeather' + (Q ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (Q ? " inert" : "") + '><div class="wbNow">' + (b ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + qe(Ke.openPage) + '">' : '<div class="wbCurrent">') + ht(O.state, 90, Sh(k), "now") + '<div class="wbTempBlock">' + (le && gn(le.value) ? '<div class="wbTemp"><span class="wbDeg">' + qe(mn(Math.round(Number(le.value)), k.locale)) + '</span><span class="wbUnit">' + qe(ge) + "</span></div>" : "") + '<div class="wbPlace">' + qe(((Oe = k.config) == null ? void 0 : Oe.location_name) ?? "") + "</div></div>" + (b ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + qe(bl(k, O)) + "</div>" + (be && ue.templow != null ? '<div class="wbRange">' + qe(zn(Ke.range, { high: Sn(k, ue.temperature), low: Sn(k, ue.templow) })) + "</div>" : "") + "</div></div>";
    return G.length && (Ie += '<div class="wbColumns" role="list">' + G.map((He, ze) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + ze + '" data-wb-focus="col-' + ze + '"><span class="wbDay">' + qe(ot(k, He, ze)) + "</span>" + ht(He.condition ?? "cloudy", 60, !1, "col" + ze) + '<span class="wbTemps"><span class="wbHi">' + qe(Sn(k, He.temperature)) + '</span><span class="wbLo">' + qe(Sn(k, He.templow)) + "</span></span></button>").join("") + "</div>", Ie += '<div class="wbHalves" role="list">' + G.map((He, ze) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + ze + '" data-wb-focus="half-' + ze + '">' + ht(He.condition ?? "cloudy", 40, !1, "half" + ze) + '<span class="wbText"><span class="wbName">' + qe(St(k, He)) + '</span><span class="wbSub">' + qe(zn(Ke.highLow, { high: Sn(k, He.temperature), low: Sn(k, He.templow) })) + "</span></span></button>").join("") + "</div>"), Ie + "</div>" + (Q ? ft(k, A, Q) : "") + "</div>";
  }
  function En(k) {
    const A = k.getTime(), O = Date.now() - Yt;
    return Be("hourly").filter((G) => {
      const Q = new Date(G.datetime).getTime();
      return Q >= A && Q < A + go && Q > O;
    });
  }
  function Ji(k) {
    if (!k.length) return ["temperature"];
    const A = ["temperature"];
    return k.some((O) => O.precipitation != null || O.precipitation_probability != null) && A.push("precipitation"), k.some((O) => O.humidity != null) && A.push("humidity"), A;
  }
  function ft(k, A, O) {
    const G = Nr(new Date(O.datetime)), Q = En(G), le = Ji(Q), ue = le.includes(M.dayMode) ? M.dayMode : "temperature", be = (ge) => ge === "humidity" ? Ke.humidity : Ke.modes[ge];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + ht(O.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + qe(St(k, O)) + '</span><span class="wbSub">' + qe(zn(Ke.highLow, { high: Sn(k, O.temperature), low: Sn(k, O.templow) })) + '</span></div><button class="wbBack" title="' + qe(Ke.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Rr(aa.back) + "</button></div>" + (le.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + le.map((ge) => '<button aria-pressed="' + (ge === ue) + '" data-wb="day-mode" data-mode="' + ge + '" data-wb-focus="day-mode-' + ge + '">' + qe(be(ge)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Ph(Ue(k, A, G, Q, ue)) + "</div></div>";
  }
  function Ue(k, A, O, G, Q) {
    var $o;
    const le = O.getTime(), ue = Date.now(), be = Er(O, /* @__PURE__ */ new Date()), ge = (Ve) => (Ve - le) / Ya, Ie = (Ve) => Ki(new Date(Ve), k), Le = (Ve) => new Date(Ve.datetime).getTime(), We = [0, 3, 6, 9, 12, 15, 18, 21].map((Ve) => ({ t: Ve * 60, label: Ie(le + Ve * Yt), minor: Ve % 6 !== 0 })), { rise: $e, set: Oe } = mc(k, O), He = [], ze = [];
    $e && (He.push({ t: ge($e.getTime()), label: Ie($e.getTime()), rise: !0 }), ze.push([0, ge($e.getTime())])), Oe && (He.push({ t: ge(Oe.getTime()), label: Ie(Oe.getTime()), rise: !1 }), ze.push([ge(Oe.getTime()), xs]));
    const et = _l(k);
    !$e && !Oe && et && Oc(new Date(le + go / 2), et.lat, et.lon) < 0 && ze.push([0, xs]);
    const _e = be ? ge(ue) : void 0, nt = { hours: We, sun: He, night: ze };
    if (!G.length && !be) return { ...nt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ke.noHourly };
    if (Q === "precipitation") {
      const Ve = G.some((Tn) => Tn.precipitation_probability != null), da = G.map((Tn) => ({ t: ge(Le(Tn)), v: Number((Ve ? Tn.precipitation_probability : Tn.precipitation) ?? 0) })), Bt = $i(k, y(k, "hourly"), "precipitation"), Xa = Math.max(0, ...da.map((Tn) => Tn.v)), Mo = Ve ? 100 : Sd(0, Math.max(Xa, 1), [0.5, 1, 2, 5, 10]).max, yi = (Tn) => Ve ? mn(Tn, k.locale) + "%" : mn(Tn, k.locale, { maximumFractionDigits: 1 }) + " " + Bt, Oa = da.find((Tn) => Tn.v === Xa);
      return {
        ...nt,
        kind: "bars",
        points: da,
        min: 0,
        max: Mo,
        ticks: [0, Mo / 2, Mo],
        format: yi,
        now: _e !== void 0 ? { t: _e, v: 0 } : void 0,
        peak: Oa && Xa > 0 ? { t: Oa.t + 30, v: Oa.v, label: yi(Oa.v) } : void 0,
        note: Xa > 0 ? void 0 : Ke.noRain
      };
    }
    const it = Q === "humidity" ? "humidity" : "temperature", It = G.filter((Ve) => Ve[it] != null && (!be || Le(Ve) >= ue)).map((Ve) => ({ t: ge(Le(Ve)), v: Number(Ve[it]) }));
    let Re, Nt = [];
    if (_e !== void 0) {
      const Ve = va(k, A, it);
      Ve && gn(Ve.value) && (Re = { t: _e, v: Number(Ve.value) }, It.unshift(Re)), Nt = ((($o = B.todayHistory) == null ? void 0 : $o.day) === O.toDateString() ? B.todayHistory[it] : []).filter((Bt) => Bt.time <= ue).map((Bt) => ({ t: Math.max(0, ge(Bt.time)), v: Bt.value })), Re && Nt.length && Nt.push(Re);
    }
    const Wt = [...Nt, ...It];
    if (!Wt.length) return { ...nt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ke.noHourly };
    const Cn = Wt.map((Ve) => Ve.v), Kn = Sd(Math.min(...Cn), Math.max(...Cn), it === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    it === "humidity" && (Kn.min = Math.max(0, Kn.min), Kn.max = Math.min(100, Kn.max), Kn.ticks = Kn.ticks.filter((Ve) => Ve >= 0 && Ve <= 100));
    const ko = it === "humidity" ? (Ve) => mn(Ve, k.locale) + "%" : (Ve) => Sn(k, Ve), Rn = it === "temperature" ? Wt.reduce((Ve, da) => da.v > Ve.v ? da : Ve) : void 0;
    return { ...nt, kind: "line", points: It, past: Nt, ...Kn, format: ko, now: Re, peak: Rn ? { ...Rn, label: ko(Rn.v) } : void 0 };
  }
  function bt(k) {
    const A = ["temperature"];
    return k.some((O) => O.precipitation_probability != null || O.precipitation != null) && A.push("precipitation"), k.some((O) => O.wind_speed != null) && A.push("wind"), A;
  }
  function bo(k, A, O = dd) {
    var le, ue;
    const G = Be("daily"), Q = [];
    for (let be = 0; be < O; be++) for (const ge of [!1, !0]) {
      const Ie = k.getTime() + (be * 24 + (ge ? 12 : 0)) * Yt, Le = Ie + 12 * Yt, We = {};
      A.forEach((Oe) => {
        const He = new Date(Oe.datetime).getTime();
        Oe.condition && He >= Ie && He < Le && (We[Oe.condition] = (We[Oe.condition] ?? 0) + (Up.has(Oe.condition) ? 2 : 1));
      });
      let $e = (le = Object.entries(We).sort((Oe, He) => He[1] - Oe[1])[0]) == null ? void 0 : le[0];
      if (!$e) {
        const Oe = new Date(Ie).toDateString();
        $e = ((ue = G.find((He) => new Date(He.datetime).toDateString() === Oe)) == null ? void 0 : ue.condition) ?? "cloudy";
      }
      Q.push({ cond: ge && $e === "sunny" ? "clear-night" : $e, night: ge });
    }
    return Q;
  }
  function Qi(k, A, O) {
    const G = y(k, "hourly"), Q = A.precipitation_probability != null ? mn(A.precipitation_probability, k.locale) + "%" : "", le = A.precipitation ? mn(A.precipitation, k.locale) + " " + $i(k, G, "precipitation") : "";
    switch (O) {
      case "precipitation":
        return Q ? [Q, le] : [le || "–", ""];
      case "wind":
        return A.wind_speed != null ? [mn(Math.round(A.wind_speed), k.locale), $i(k, G, "wind_speed")] : ["–", ""];
      default:
        return [Sn(k, A.temperature), (A.precipitation_probability ?? 0) >= 20 ? Q : ""];
    }
  }
  function wi(k, A, O) {
    const [G, Q] = ud[E == null ? void 0 : E()] || ud.day, le = [];
    for (let ue = 0; ue < 4 && le.length < 3; ue++) {
      const be = /* @__PURE__ */ new Date();
      be.setHours(0, 0, 0, 0), be.setDate(be.getDate() + ue);
      const ge = new Date(be);
      ge.setHours(Q, 0, 0, 0), be.setHours(G, 0, 0, 0), !(ge.getTime() <= O || !A.some((Ie) => {
        const Le = new Date(Ie.datetime).getTime();
        return Le >= be.getTime() && Le <= ge.getTime();
      })) && le.push({ a: be.getTime(), b: ge.getTime(), label: St(k, { datetime: be.toISOString() }) });
    }
    return le;
  }
  function bn(k, A, O, G, Q, le) {
    const ue = (O.b - A.a) / Yt, be = (_e) => ((_e - A.a) / Yt).toFixed(3), ge = 80, Ie = 32, Le = [];
    for (const _e = new Date(A.a - go); _e.getTime() < O.b + go; _e.setDate(_e.getDate() + 1)) {
      const { rise: nt, set: it } = mc(k, new Date(_e));
      nt && it && Le.push({ rise: nt.getTime(), set: it.getTime() });
    }
    const We = (_e, nt) => ge - (ge - Ie) * Math.sin(Math.PI * (nt - _e.rise) / (_e.set - _e.rise)), $e = (_e) => !Le.some((nt) => _e >= nt.rise && _e <= nt.set);
    let Oe = "", He = "", ze = "";
    Le.forEach((_e, nt) => {
      const it = [];
      for (let Re = _e.rise; Re <= _e.set; Re += 15 * Ya) it.push(be(Re) + "," + We(_e, Re).toFixed(2));
      it.push(be(_e.set) + "," + ge), Oe += '<polyline class="wbLineArc" points="' + it.join(" ") + '"/>';
      const It = Le[nt + 1];
      It && (Oe += '<rect class="wbLineNight" x="' + be(_e.set) + '" y="0" width="' + ((It.rise - _e.set) / Yt).toFixed(3) + '" height="100"/>'), [[_e.rise, "↑"], [_e.set, "↓"]].forEach(([Re, Nt]) => {
        Re < A.a || Re > O.b || (He += '<line class="wbLineEdge" x1="' + be(Re) + '" x2="' + be(Re) + '" y1="0" y2="100"/>', ze += '<span class="wbLineTime" style="left:' + le(Re) + '">' + Nt + " " + qe(Ki(new Date(Re), k)) + "</span>");
      });
    });
    const et = Le.find((_e) => Q >= _e.rise && Q <= _e.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + ue + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Oe + He + '<line class="wbLineHorizon" x1="0" x2="' + ue + '" y1="' + ge + '" y2="' + ge + '"/></svg>' + ze + (et ? '<span class="wbLineNow" style="left:' + le(Q) + ";top:" + We(et, Q) + '%">' + hc("sunny", !1) + "</span>" : "") + G.filter((_e) => _e.entry && !_e.now).map((_e) => '<span class="wbLineGlyph' + _e.edge + '" style="left:' + le(_e.t) + '">' + hc(_e.entry.condition ?? "cloudy", $e(_e.t)) + "</span>").join("");
  }
  function tt(k, A) {
    P = null;
    const O = M.hourlyView === "bars" ? "bars" : "strip", G = '<div class="wbHeader"><h2 class="wbTitle">' + qe(O === "bars" ? Ke.nextDays : Ke.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + qe(Ke.showAs) + '">' + ["strip", "bars"].map((Re) => '<button aria-pressed="' + (Re === O) + '" data-wb="hourly-view" data-view="' + Re + '" data-wb-focus="hourly-view-' + Re + '">' + qe(Ke.views[Re]) + "</button>").join("") + "</div></div>";
    if (O === "bars") return er(k, A, G);
    const Q = Be("hourly"), le = Math.floor(Date.now() / Ya) * Ya, ue = Q.filter((Re) => new Date(Re.datetime).getTime() > le - Yt);
    if (!ue.length) return "";
    const be = bt(ue), ge = be.includes(M.hourlyMode) ? M.hourlyMode : "temperature", Ie = wi(k, Q, le);
    if (!Ie.length) return "";
    const Le = Ie[0], We = Ie[Ie.length - 1], $e = (Le.b - Le.a) / Yt, Oe = (Re) => "calc(var(--wb-u) * " + ((Re - Le.a) / Yt).toFixed(3) + ")", He = new Date(Le.a);
    He.setHours(6, 0, 0, 0), He.getTime() > Le.a && He.setDate(He.getDate() - 1);
    const ze = Math.ceil((We.b - He.getTime()) / go);
    P = d === "line" ? null : { segs: bo(He, Q, ze), seed: He.getDate(), columns: ze };
    const et = (Re) => Re === Le.a ? " wbFirst" : Re === We.b ? " wbLast" : "", _e = [];
    for (let Re = Le.a; Re < We.b; ) {
      const Nt = new Date(Re);
      Nt.setHours(24, 0, 0, 0);
      const Wt = Math.min(Nt.getTime(), We.b);
      _e.push({ a: Re, b: Wt, label: St(k, { datetime: new Date(Re).toISOString() }), page: Ie.find((Cn) => Cn.a >= Re && Cn.a < Wt) || Ie.find((Cn) => Cn.a < Wt && Cn.b > Re) }), Re = Wt;
    }
    const nt = le > Le.a && le < We.b ? Math.floor((le - Le.a) / (2 * Yt)) * 2 : 0, it = [];
    for (let Re = Le.a; Re <= We.b; Re += Yt) {
      const Nt = new Date(Re), Wt = et(Re);
      !Wt && Nt.getHours() % jp || !Wt && (Math.abs(Le.a - Re) < 2 * Yt || Math.abs(We.b - Re) < 2 * Yt) || le >= Le.a && Math.abs(Re - le) < 1.5 * Yt && !Wt || it.push({ t: Re, edge: Wt, label: Ki(Nt, k), entry: Re >= le - Yt ? Q.find((Cn) => new Date(Cn.datetime).getTime() === Re) : void 0 });
    }
    le > Le.a && le < Le.b && it.push({ t: le, edge: le - Le.a < Yt ? " wbFirst" : Le.b - le < Yt ? " wbLast" : "", label: Ke.now, entry: ue[0], now: !0 });
    const It = (Re, Nt) => '<span class="wbMark' + Re.edge + (Re.now ? " wbNowMark" : "") + '" style="left:' + Oe(Re.t) + '">' + Nt + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + G + (be.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + be.map((Re) => '<button aria-pressed="' + (Re === ge) + '" data-wb="hourly-mode" data-mode="' + Re + '" data-wb-focus="hourly-mode-' + Re + '">' + qe(Ke.modes[Re]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + qe(Ke.nextHours) + '" data-span="' + $e + '" data-start="' + nt + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + $e + ");width:calc(var(--wb-u) * " + (We.b - Le.a) / Yt + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((We.b - Le.a) / (2 * Yt)) + 1)].map((Re, Nt) => '<i class="wbSnap" style="left:' + Oe(Le.a + Nt * 2 * Yt) + '"></i>').join("") + '<div class="wbDays">' + _e.map((Re, Nt) => {
      var Wt;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Re.b - Re.a) / Yt).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (Nt === 0 ? nt : ((((Wt = Re.page) == null ? void 0 : Wt.a) ?? Re.a) - Le.a) / Yt) + '" data-wb-focus="hours-day-' + Nt + '">' + qe(Re.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + it.map((Re) => It(Re, qe(Re.label))).join("") + "</div>" + (d === "line" ? '<div class="wbSky wbLineSky">' + bn(k, Le, We, it, le, Oe) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Oe(He.getTime()) + ";width:calc(var(--wb-u) * " + ze * 24 + ')"><canvas data-wb-strip' + (d === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (le > Le.a ? '<i class="wbPast" style="width:' + Oe(Math.min(le, We.b)) + '"></i><i class="wbNowLine" style="left:' + Oe(le) + '"></i>' : "") + _e.slice(1).map((Re) => '<i class="wbMidnight" style="left:' + Oe(Re.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + it.map((Re) => {
      if (!Re.entry) return "";
      const [Nt, Wt] = Qi(k, Re.entry, ge);
      return It(Re, '<span class="wbPrimaryV">' + qe(Nt) + '</span><span class="wbSecondary">' + qe(Wt) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Un(k) {
    const A = zp, O = A.findIndex(([ge]) => ge >= k);
    if (O <= 0) return "rgb(" + A[O < 0 ? A.length - 1 : 0][1].join(",") + ")";
    const [G, Q] = A[O - 1], [le, ue] = A[O], be = (k - G) / (le - G);
    return "rgb(" + Q.map((ge, Ie) => Math.round(ge + (ue[Ie] - ge) * be)).join(",") + ")";
  }
  function er(k, A, O) {
    var Oe;
    const G = Be("daily").filter((He) => gn(He.templow) && gn(He.temperature)).slice(0, 7);
    if (!G.length) return "";
    const Q = Math.min(...G.map((He) => Number(He.templow))), le = Math.max(...G.map((He) => Number(He.temperature))), ue = Math.max(1, le - Q), be = (He) => Math.max(0, Math.min(100, (He - Q) / ue * 100)).toFixed(2), ge = /F/.test($i(k, y(k, "daily"), "temperature")), Ie = (He) => ge ? (He - 32) / 1.8 : He, Le = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((He) => Un(Ie(Q + He * ue)) + " " + He * 100 + "%").join(",") + ")", We = (Oe = va(k, A, "temperature")) == null ? void 0 : Oe.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (bt(Be("hourly").filter((He) => new Date(He.datetime).getTime() > Date.now() - Yt)).length > 1 ? " wbTabbed" : "") + '">' + O + '<div class="wbDayBars" role="list">' + G.map((He, ze) => {
      const et = St(k, He), _e = Er(new Date(He.datetime), /* @__PURE__ */ new Date()), nt = Number(He.templow), it = Number(He.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + qe(zn(Ke.rangeRow, { day: et, low: Sn(k, nt), high: Sn(k, it) })) + '"><span class="wbRangeDay">' + qe(et) + "</span>" + ht(He.condition, 40, !1, "r" + ze) + '<span class="wbRangeLo">' + qe(Sn(k, nt)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + Le + ";clip-path:inset(0 " + (100 - be(it)) + "% 0 " + be(nt) + '% round 4px)"></i>' + (_e && gn(We) ? '<i class="wbRangeNow" style="left:' + be(Number(We)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + qe(Sn(k, it)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  function kt(k) {
    const A = we, { rise: O, set: G } = mc(k, A), Q = O && G ? Math.round((G.getTime() - O.getTime()) / Ya) : 0, le = Math.floor(Q / 60), ue = Q % 60, be = O && G ? (A.getTime() - O.getTime()) / (G.getTime() - O.getTime()) : -1, ge = be >= 0 && be <= 1, Ie = Math.PI * (1 - Math.min(1, Math.max(0, be))), Le = 100 + 74 * Math.cos(Ie), We = 100 - 74 * Math.sin(Ie), $e = ge ? Math.sin(Math.PI * be) : 0, Oe = ge ? ws("#2e0a0d", "#43180a", $e) : "#0e0507", He = ge ? ws("#7a1d12", "#8f400f", $e) : "#1c0709", ze = ws("#f60c08", "#ff8f00", $e), et = ws("#fd9b07", "#ffd84a", $e), _e = ge ? ws("#fd9b07", "#ffd84a", $e) : "#6b3a2a", nt = (It) => It ? Ki(It, k) : "–", it = O && G ? new Date((O.getTime() + G.getTime()) / 2) : null;
    return Wo({
      icon: aa.sunny,
      name: Ke.sun,
      sub: Q ? zn(Ke.daylightShort, { hours: le, minutes: ue }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Oe + ", " + He + ");--wb-sun-line:" + _e + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + x + 'sun-glow"><stop offset="0" stop-color="' + ze + '"></stop><stop offset="0.45" stop-color="' + ze + '"></stop><stop offset="1" stop-color="' + et + '"></stop></radialGradient><clipPath id="' + x + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (ge ? '<circle cx="' + Le + '" cy="' + We + '" r="14" fill="url(#' + x + 'sun-glow)" clip-path="url(#' + x + 'above-horizon)"></circle>' : "") + (it ? '<text class="wbSunTime wbNoon" x="100" y="1">' + qe(nt(it)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + qe(nt(O)) + '</text><text class="wbSunTime" x="174" y="117">' + qe(nt(G)) + "</text></svg></div>"
    });
  }
  function De(k, A, O) {
    const G = (ue) => x + "moon-" + ue, Q = k > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + G("terminator") + ')" d="' + Bh(61, 61, 57.9, k) + '"' + (A ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", le = (ue, be, ge, Ie, Le, We) => '<filter id="' + G(ue) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + be + '" numOctaves="' + ge + '" seed="' + Ie + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map(($e) => "<feFunc" + $e + ' type="linear" slope="' + Le + '" intercept="' + We + '"></feFunc' + $e + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + G("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + G("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + G("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + G("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + G("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + le("mottle", "0.045", 4, 3, 1.8, -0.4) + le("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + G("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + G("fill") + ')"></circle><g' + (O ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + G("soften") + ')">' + Fh.map(([ue, be, ge, Ie, Le, We]) => '<ellipse cx="' + ue + '" cy="' + be + '" rx="' + ge + '" ry="' + Ie + '" fill-opacity="' + We + '" transform="rotate(' + Le + " " + ue + " " + be + ')"></ellipse>').join("") + "</g>" + Oh.map(([ue, be, ge]) => '<circle class="wbCrater" cx="' + ue + '" cy="' + be + '" r="' + ge + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + G("glow") + ')">' + qh.map(([ue, be]) => '<line x1="54.4" y1="95" x2="' + ue + '" y2="' + be + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + G("glow") + ')">' + Cd.map(([ue, be, ge]) => '<circle cx="' + ue + '" cy="' + be + '" r="' + ge * 2 + '"></circle>').join("") + "</g>" + Cd.map(([ue, be, ge]) => '<circle class="wbBrightCenter" cx="' + ue + '" cy="' + be + '" r="' + ge + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + G("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + G("grain") + ')"></rect>' + Q + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function mt(k) {
    const A = Ce, O = _l(k), G = (O == null ? void 0 : O.lat) ?? 0, Q = kh(A), le = Md(k), ue = le ? k.states[le] : void 0, be = ys(ue) && th.includes(ue.state) ? ue.state : Mh(Q.phase), { rise: ge, set: Ie } = O ? yh(A, O.lat, O.lon) : {}, Le = Q.phase > 0.5 != G < 0, We = mn(Math.round(Q.fraction * 100), k.locale) + "%", $e = ge ?? Ie, Oe = $e ? Ki($e, k) : void 0;
    return Wo({
      icon: aa.night,
      name: Ke.moon,
      sub: Ke.phases[be],
      visual: '<div class="wbMoonBox">' + De(Q.fraction, Le, G < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (Oe ? qe(zn(ge ? Ke.moonriseAt : Ke.moonsetAt, { time: Oe })) : "") + "</span><span>" + qe(zn(Ke.lit, { illumination: We })) + "</span></div>"
    });
  }
  function Ct(k, A) {
    var He;
    const O = va(k, A, "wind_speed");
    if (!O || !gn(O.value)) return "";
    const G = va(k, A, "wind_gust_speed"), Q = va(k, A, "wind_bearing"), le = Q && gn(Q.value) ? Number(Q.value) : void 0, ue = Eh(Number(O.value), (He = O.stateObj.attributes) == null ? void 0 : He.wind_speed_unit), be = Cl(k, O.stateObj, "wind_speed", O.value), ge = le !== void 0 ? Ke.cardinal[eh[((le + 11.25) / 22.5 | 0) % 16]] : void 0, Ie = G ? Lh(k, G.stateObj, "wind_gust_speed", G.value) : void 0, Le = [ge ? zn(Ke.windFrom, { direction: ge }) : void 0, ue !== void 0 ? ue + " " + Ke.beaufort : void 0].filter(Boolean).join(" · ") || Ie, We = (ze, et) => {
      const _e = (ze - 90) * Math.PI / 180;
      return [100 + et * Math.cos(_e), 100 + et * Math.sin(_e)];
    }, $e = Array.from({ length: 36 }, (ze, et) => et * 10).map((ze) => {
      const et = ze % 90 === 0, [_e, nt] = We(ze, 97), [it, It] = We(ze, et ? 83 : 89);
      return '<line class="wbTick' + (et ? " wbMajor" : "") + '" x1="' + _e + '" y1="' + nt + '" x2="' + it + '" y2="' + It + '"></line>';
    }).join(""), Oe = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([ze, et]) => {
      const [_e, nt] = We(et, 64);
      return '<text class="wbLetter' + (ze === "n" ? " wbNorth" : "") + '" x="' + _e + '" y="' + nt + '">' + qe(Ke.cardinal[ze]) + "</text>";
    }).join("");
    return Wo({ icon: aa.windy, name: Ke.wind, sub: Le, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + $e + Oe + (le !== void 0 ? '<path class="wbMarker" transform="rotate(' + le + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + qe(be.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + qe(be.unit) + "</text></svg>" });
  }
  function Ge(k, A) {
    const O = va(k, A, "uv_index");
    if (!O || !gn(O.value)) return "";
    const G = Number(O.value), Q = Ke.uvLevel[Ah(G)], le = /* @__PURE__ */ new Date();
    le.setHours(23, 59, 59, 999);
    const ue = Be("hourly").filter((ze) => ze.uv_index != null && new Date(ze.datetime) > /* @__PURE__ */ new Date() && new Date(ze.datetime) <= le).reduce((ze, et) => !ze || et.uv_index > ze.uv ? { uv: et.uv_index, time: new Date(et.datetime) } : ze, void 0), be = 48, ge = 100, Ie = 130, Le = (ze) => -be + Math.min(ze, 11) / 11 * 2 * be, We = (ze, et) => {
      const _e = ze * Math.PI / 180;
      return [ge + et * Math.sin(_e), Ie - et * Math.cos(_e)];
    }, $e = (ze, et, _e) => {
      const [nt, it] = We(Le(ze), _e), [It, Re] = We(Le(et), _e);
      return "M " + nt + " " + it + " A " + _e + " " + _e + " 0 0 1 " + It + " " + Re;
    }, He = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, gl.low], [3, 6, gl.moderate], [6, 8, gl.high], [8, 11, gl.very_high]].map(([ze, et, _e]) => '<path class="wbVuZone" d="' + $e(ze, et, 96) + '" style="stroke:' + _e + '"></path>').join("") + Array.from({ length: 21 }, (ze, et) => ({ angle: -be + et * (2 * be / 20), major: et % 2 === 0 })).map(({ angle: ze, major: et }) => {
      const [_e, nt] = We(ze, 102), [it, It] = We(ze, et ? 114 : 108);
      return '<line class="wbVuTick' + (et ? " wbMajor" : "") + '" x1="' + _e + '" y1="' + nt + '" x2="' + it + '" y2="' + It + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + Le(G) + 'deg"><line x1="' + ge + '" y1="' + Ie + '" x2="' + ge + '" y2="' + (Ie - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + qe(mn(Math.round(G), k.locale)) + "</text></svg>";
    return Wo({
      icon: aa.sunnyAlert,
      name: Ke.metrics.uv_index,
      sub: ue && ue.uv > G ? zn(Ke.uvPeak, { level: Q, uv_index: mn(Math.round(ue.uv), k.locale), time: Ki(ue.time, k) }) : Q,
      visual: He
    });
  }
  function wo(k) {
    const A = Be("daily")[0], O = B.temperatureHistory;
    if (!A || new Date(A.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !gn(A.temperature) || !O || O.dailyHighs.length < Kp) return "";
    const G = Number(A.temperature), Q = O.dailyHighs.reduce((it, It) => it + It, 0) / O.dailyHighs.length, le = Math.round(G - Q) || 0, ue = le > 0 ? "above" : le < 0 ? "below" : "same", be = [...O.days, { date: /* @__PURE__ */ new Date(), high: G, today: !0 }], ge = 220, Ie = 158, Le = 22, We = 20, $e = be.map((it) => it.high).concat(Q), Oe = Math.min(...$e) - 3, He = Math.max(...$e) + 1, ze = (it) => Le + (1 - (it - Oe) / (He - Oe)) * (Ie - Le - We), et = ge / be.length, _e = Math.min(18, et * 0.6), nt = '<svg class="wbCompareBars" viewBox="0 0 ' + ge + " " + Ie + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + ge + '" y1="' + ze(Q) + '" y2="' + ze(Q) + '"></line>' + be.map((it, It) => {
      const Re = It * et + et / 2, Nt = ze(it.high), Wt = it.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + Wt + '" x="' + (Re - _e / 2) + '" y="' + Nt + '" width="' + _e + '" height="' + (Ie - We - Nt) + '" rx="5"></rect><text class="wbAvgValue' + Wt + '" x="' + Re + '" y="' + (Nt - 6) + '">' + qe(Sn(k, it.high)) + '</text><text class="wbAvgDay' + Wt + '" x="' + Re + '" y="' + (Ie - 4) + '">' + qe(uh(it.date, k)) + "</text>";
    }).join("") + "</svg>";
    return Wo({
      icon: aa.chartLine,
      name: Ke.metrics.compared_to_average,
      double: !0,
      sub: zn(Ke.highsLastDays, { days: O.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (le > 0 ? "+" : "") + qe(Sn(k, le)) + '</div><div class="wbCompareWords">' + qe(Ke.average[ue]) + '</div><div class="wbCompareTemps">' + qe(zn(Ke.todayVsAverage, { today: Sn(k, G), average: Sn(k, Q) })) + "</div></div>" + nt + "</div>"
    });
  }
  function Uo(k, A) {
    const O = va(k, A, "humidity");
    if (!O || !gn(O.value)) return "";
    const G = va(k, A, "dew_point"), Q = Math.max(0, Math.min(100, Number(O.value)));
    return Wo({
      icon: aa.waterPercent,
      name: Ke.metrics.humidity,
      sub: G && gn(G.value) ? zn(Ke.dewPoint, { dew_point: Sn(k, G.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + Q + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + wl(mn(Math.round(Number(O.value)), k.locale), "%") + "</div>"
    });
  }
  function tr(k, A) {
    var Ie, Le;
    const O = va(k, A, "pressure");
    if (!O || !gn(O.value)) return "";
    const G = Number(O.value), Q = (Ie = O.stateObj.attributes) == null ? void 0 : Ie.pressure_unit, le = kd(G, Q), ue = ((Le = B.pressureHistory) == null ? void 0 : Le.entityId) === O.stateObj.entity_id ? kd(B.pressureHistory.value, Q) : void 0;
    let be;
    if (le !== void 0 && ue !== void 0) {
      const We = le - ue;
      be = We >= fd ? "rising" : We <= -fd ? "falling" : "steady";
    }
    const ge = Cl(k, O.stateObj, "pressure", Math.round(G));
    return Wo({
      icon: aa.gauge,
      name: Ke.metrics.pressure,
      sub: be ? Ke.pressure[be] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + wl(ge.number) + '<span class="wbTapeUnit">' + qe(ge.unit) + "</span></div>" + (le !== void 0 ? je(k, le) : "") + "</div>"
    });
  }
  function je(k, A) {
    const Q = Math.floor(A) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (le, ue) => Q + ue).map((le) => {
      const ue = 100 - (le - A) * 9;
      if (ue < 22 || ue > 178) return "";
      const be = le % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(ue - 100) / 100) + '"><line class="wbTapeTick" x1="' + (be ? 2 : 8) + '" x2="26" y1="' + ue + '" y2="' + ue + '"></line>' + (be ? '<text class="wbTapeLabel" x="33" y="' + ue + '">' + qe(mn(le, k.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + qe(Ke.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + qe(Ke.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Xe(k) {
    var ge, Ie;
    const A = gc(k), O = A ? k.states[A] : void 0;
    if (!O || ((ge = B.rain) == null ? void 0 : ge.entityId) !== A || !gn(B.rain.change)) return "";
    const G = ((Ie = O.attributes) == null ? void 0 : Ie.unit_of_measurement) ?? "", Q = y(k, "hourly"), le = Date.now() + go, ue = Be("hourly").filter((Le) => Le.precipitation != null && new Date(Le.datetime).getTime() <= le), be = ue.reduce((Le, We) => Le + Number(We.precipitation), 0);
    return Wo({
      icon: aa.rainy,
      name: Ke.metrics.precipitation,
      sub: Q && ue.length ? zn(Ke.rainExpected, { amount: mn(be, k.locale, { maximumFractionDigits: 1 }) + " " + $i(k, Q, "precipitation") }) : Ke.rainLast24h,
      visual: wl(mn(B.rain.change, k.locale, { maximumFractionDigits: 1 }), G) + (ue.length > 1 ? Hh(ue.map((Le) => ({ label: "", value: Number(Le.precipitation) }))) : "")
    });
  }
  function wn(k, A) {
    const O = va(k, A, "visibility");
    if (!O || !gn(O.value)) return "";
    const G = Cl(k, O.stateObj, "visibility", O.value), Q = Fp(Number(O.value), $i(k, O.stateObj, "visibility"));
    return Wo({
      icon: aa.eyeOutline,
      name: Ke.metrics.visibility,
      sub: Ke.visibilityLevel[Op(Q)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + Q + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + qe(Ka(k, Q)) + '</div><div class="wbSeaValue">' + wl(G.number, G.unit) + "</div></div>"
    });
  }
  function Ka(k, A) {
    var le;
    const O = Hp((le = k.config) == null ? void 0 : le.country, A);
    if (O) return zn(Ke.visibilityLandmarks, { from: O.from, to: O.to });
    const G = A / Jp * 60;
    if (G < 60) {
      const ue = G < 5 ? Math.max(1, Math.round(G)) : 5 * Math.round(G / 5);
      if (ue < 60) return zn(Ke.walkMinutes, { minutes: mn(ue, k.locale) });
    }
    const Q = Math.max(1, Math.round(G / 30) / 2);
    return Q < 8 ? zn(Ke.walkHours, { hours: mn(Q, k.locale) }) : Ke.walkDay;
  }
  function Yn(k) {
    B.categories === void 0 && At(k);
    const A = Gn(k), O = (ge) => ge.map((Ie) => k.states[Ie]).filter(ys), G = O(A.air), Q = O(A.pollen);
    if (!G.length && !Q.length) return "";
    const le = [...G, ...Q], ue = (ge) => Q.includes(ge) ? aa.flower : aa.airFilter, be = le.find((ge) => ge.entity_id === M.aq);
    return be ? Xt(k, be, ue(be)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + qe(Ke.airQuality) + '</h2></div><div class="wbAqTiles">' + le.map((ge) => '<button class="wbTile" data-wb="aq-open" data-entity="' + qe(ge.entity_id) + '"><span class="wbChip">' + Rr(ue(ge)) + '</span><span class="wbText"><span class="wbName">' + qe(yd(k, ge)) + '</span><span class="wbSub">' + qe(bl(k, ge)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Xt(k, A, O) {
    var Le, We, $e;
    const G = ((Le = A.attributes) == null ? void 0 : Le.unit_of_measurement) ?? "", Q = ((We = A.attributes) == null ? void 0 : We.device_class) === "pm25" && G === md && gn(A.state), le = Number(A.state), ue = Q ? _h(le) : void 0, be = (($e = B.aqHistory) == null ? void 0 : $e.entityId) === A.entity_id ? B.aqHistory.points : void 0, ge = (Oe) => Math.min(100, Math.max(0, Oe / vl * 100));
    let Ie;
    if (be && be.length > 1) Ie = Ih(be, (Oe) => (mn(Oe, k.locale, { maximumFractionDigits: 1 }) + " " + G).trim());
    else if (ue) {
      let Oe = 0;
      const He = cu.map(([ze, et]) => {
        const _e = ge(Math.min(et, vl)), nt = nh[ze] + " " + Oe + "% " + _e + "%";
        return Oe = _e, nt;
      });
      Ie = '<div class="wbScale" role="meter" aria-label="' + qe(Ke.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + vl + '" aria-valuenow="' + le + '" style="background:linear-gradient(to right, ' + He.join(", ") + ')"><i style="left:' + ge(le) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + vl + " " + md + "</span></div>";
    } else Ie = '<span class="wbGraphNote"><span>' + qe(bl(k, A)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Rr(O) + '</span><span class="wbText"><span class="wbName">' + qe(yd(k, A)) + '</span><span class="wbSub">' + qe(bl(k, A)) + (ue ? " · " + qe(Ke.aqLevel[ue]) : "") + '</span></span><button class="wbBack" title="' + qe(Ke.back) + '" data-wb="aq-close">' + Rr(aa.back) + '</button></div><div class="wbGraph">' + Ie + "</div></div></div>";
  }
  const xo = {
    current: vn,
    hourly: tt,
    sun: kt,
    moon: mt,
    wind: Ct,
    uv_index: Ge,
    compared_to_average: wo,
    humidity: Uo,
    pressure: tr,
    precipitation: Xe,
    visibility: wn,
    air_quality: Yn
  };
  function Ft(k) {
    var Ie, Le, We;
    const A = l == null ? void 0 : l();
    if (!A || J) return;
    const O = sn(A);
    F(A, O), B.lastFetch || ve();
    const G = Gn(A), Q = Md(A), le = gc(A), ue = [
      ...O.map(($e) => A.states[$e]),
      A.states["sun.sun"],
      Q && A.states[Q],
      le && A.states[le],
      ...G.air.map(($e) => A.states[$e]),
      ...G.pollen.map(($e) => A.states[$e]),
      A.locale,
      A.config,
      A.entities,
      Math.floor(Date.now() / Ya)
    ];
    if (!k && Z && ue.length === Z.length && ue.every(($e, Oe) => $e === Z[Oe])) return;
    Z = ue;
    const be = R.getRootNode(), ge = be.activeElement || document.activeElement;
    for (const $e of ne) {
      const Oe = Y[$e];
      let He = "";
      try {
        He = xo[$e](A, O) || "";
      } catch {
        He = "";
      }
      if (He === Oe.html) continue;
      const ze = ge && Oe.el.contains(ge) ? (Ie = ge.dataset) == null ? void 0 : Ie.wbFocus : void 0, et = Oe.el.querySelector(".wbStripScroll"), _e = et ? et.scrollLeft : null;
      Oe.html = He, Oe.el.hidden = !He, Oe.el.innerHTML = He;
      const nt = Oe.el.querySelector(".wbStripScroll");
      nt && _e != null ? nt.scrollTo({ left: _e }) : nt != null && nt.dataset.start && nt.scrollTo({ left: Number(nt.dataset.start) * nt.clientWidth / Number(nt.dataset.span) }), ze && !X && ((Le = Oe.el.querySelector('[data-wb-focus="' + ze + '"]')) == null || Le.focus());
    }
    X && ((We = R.querySelector('[data-wb-focus="' + X + '"]')) == null || We.focus(), X = null), la(performance.now());
  }
  function xn() {
    ce || J || (ce = !0, queueMicrotask(() => {
      ce = !1, Ft(!0);
    }));
  }
  function Yo() {
    const k = getComputedStyle(R), A = (ue) => k.getPropertyValue(ue).trim(), O = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([ue, be]) => {
      A(be) && (O[ue] = A(be));
    });
    const G = A("--color-text-primary") || "#f1f1f1", Q = A("--color-bg-card") || "#222222", le = !!R.closest(".light");
    return { colors: { ...sa, ...O }, ink: le ? G : Q, paper: le ? Q : G };
  }
  const Dn = (k, A) => {
    var O;
    k.width !== A.w && (k.width = A.w), k.height !== A.h && (k.height = A.h), (O = k.getContext("2d")) == null || O.putImageData(new ImageData(A.data, A.w, A.h), 0, 0);
  }, Jt = () => f && !lh();
  function yn(k, A) {
    const O = R.querySelector("canvas[data-wb-strip]");
    if (!O || !P || !O.getClientRects().length) return;
    const G = O.clientWidth, Q = O.clientHeight;
    if (!G || !Q) return;
    const le = { width: G, height: Q, columns: P.columns || dd, colors: A.colors, clock: k, ambient: Jt(), seed: P.seed, soft: 1.5 };
    if (d === "smooth") {
      const ue = Math.min(2, window.devicePixelRatio || 1), be = Math.round(G * ue), ge = Math.round(Q * ue);
      O.width !== be && (O.width = be), O.height !== ge && (O.height = ge);
      const Ie = O.getContext("2d");
      if (!Ie) return;
      Ie.setTransform(ue, 0, 0, ue, 0, 0), wp(Ie, P.segs, le);
    } else Dn(O, bp(P.segs, { ...le, px: 2, oneBit: d === "onebit", ink: A.ink, paper: A.paper }));
  }
  function la(k) {
    if (J) return;
    const A = Yo();
    if (d !== "smooth") {
      const O = Jt();
      R.querySelectorAll("canvas[data-wb-wx]").forEach((G) => {
        G.getClientRects().length && Dn(G, Xd(_c(G.dataset.wbWx, A.colors), { size: Number(G.dataset.size) || 40, px: 2, oneBit: d === "onebit", colors: A.colors, ink: A.ink, paper: A.paper, clock: k, idle: O }));
      });
    }
    R.querySelectorAll("canvas[data-wb-sea]").forEach((O) => {
      const G = O.clientWidth, Q = O.clientHeight, le = Number(O.dataset.wbSea), ue = G + "x" + Q + ":" + le + ":" + A.colors.skyClearDay;
      !G || !Q || !(le > 0) || O.dataset.painted === ue || (O.dataset.painted = ue, Dn(O, Bp(G, Q, le, A.colors)));
    }), yn(k, A);
  }
  function yo(k) {
    if (V = 0, !(J || !Jt())) {
      if (!document.hidden)
        if (d === "smooth") yn(k, Yo());
        else {
          const A = Math.floor(k / 100);
          A !== q && (q = A, la(k));
        }
      V = requestAnimationFrame(yo);
    }
  }
  function zt() {
    R.classList.toggle("wbMotion", Jt()), !V && !J && Jt() && (V = requestAnimationFrame(yo));
  }
  function Zo(k) {
    var O, G;
    const A = (G = (O = k.target).closest) == null ? void 0 : G.call(O, "[data-wb]");
    if (!(!A || !R.contains(A))) {
      switch (A.dataset.wb) {
        case "day": {
          M.openDay = Number(A.dataset.index), M.opener = A.dataset.wbFocus, X = "back-day";
          const Q = Qe()[M.openDay], le = !B.todayHistory || B.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - B.todayHistory.fetched > Wp;
          Q && Er(new Date(Q.datetime), /* @__PURE__ */ new Date()) && le && Ye();
          break;
        }
        case "close-day":
          M.openDay = void 0, X = M.opener, M.opener = void 0;
          break;
        case "open-page":
          b == null || b();
          return;
        case "day-mode":
          M.dayMode = A.dataset.mode;
          break;
        case "hourly-mode":
          M.hourlyMode = A.dataset.mode;
          break;
        case "hourly-view":
          M.hourlyView = A.dataset.view;
          try {
            localStorage.setItem(fe, M.hourlyView);
          } catch {
          }
          break;
        case "hours-day": {
          const Q = R.querySelector(".wbStripScroll");
          Q && Q.scrollTo({ left: Number(A.dataset.hours) * Q.clientWidth / Number(Q.dataset.span), behavior: "smooth" });
          return;
        }
        case "aq-open":
          M.aq = A.dataset.entity, ct(M.aq);
          break;
        case "aq-close":
          M.aq = void 0;
          break;
        default:
          return;
      }
      Ft(!0);
    }
  }
  function Zn(k) {
    var A, O;
    k.key === "Escape" && M.openDay !== void 0 && ((O = (A = k.target).closest) != null && O.call(A, '[data-wb-open="day"]')) && (M.openDay = void 0, X = M.opener, M.opener = void 0, Ft(!0));
  }
  let ca = null;
  function Ko(k) {
    var O, G;
    const A = (G = (O = k.target).closest) == null ? void 0 : G.call(O, ".wbStripScroll");
    !A || k.button !== 0 || (ca = { startX: k.pageX, left: A.scrollLeft, moved: !1 }, A.classList.add("wbHeld"), window.addEventListener("mousemove", xi), window.addEventListener("mouseup", Ha, { once: !0 }));
  }
  function xi(k) {
    const A = R.querySelector(".wbStripScroll");
    if (!ca || !A) return;
    const O = k.pageX - ca.startX;
    !ca.moved && Math.abs(O) > 1 && (ca.moved = !0, A.classList.add("wbDragging")), A.scrollLeft = ca.left - O;
  }
  function Ha() {
    ca = null, window.removeEventListener("mousemove", xi);
    const k = R.querySelector(".wbStripScroll");
    if (!k) return;
    k.classList.remove("wbDragging", "wbHeld");
    const A = [...k.querySelectorAll(".wbSnap")];
    if (A.length) {
      const O = A.reduce((G, Q) => Math.abs(Q.offsetLeft - k.scrollLeft) < Math.abs(G.offsetLeft - k.scrollLeft) ? Q : G);
      k.scrollTo({ left: O.offsetLeft, behavior: "smooth" });
    }
  }
  R.addEventListener("click", Zo), R.addEventListener("keydown", Zn), R.addEventListener("mousedown", Ko);
  const Fa = typeof ResizeObserver == "function" ? new ResizeObserver(() => la(performance.now())) : null;
  Fa == null || Fa.observe(R);
  const Mt = (Sa = window.matchMedia) == null ? void 0 : Sa.call(window, "(prefers-reduced-motion: reduce)"), $a = () => {
    zt(), la(performance.now());
  };
  (wt = Mt == null ? void 0 : Mt.addEventListener) == null || wt.call(Mt, "change", $a);
  const ln = [
    setInterval(() => {
      we = /* @__PURE__ */ new Date(), Ft(!0);
    }, $p),
    setInterval(() => {
      Ce = /* @__PURE__ */ new Date(), Ft(!0);
    }, Xp),
    setInterval(ve, Yp)
  ];
  return Ft(!0), zt(), {
    update() {
      Ft(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Ft(!0);
    },
    setStyle(k) {
      !k || k === d || (d = k, R.dataset.style = d, Ft(!0), zt());
    },
    destroy() {
      var k;
      J = !0, ln.forEach(clearInterval), V && cancelAnimationFrame(V), V = 0, Fa == null || Fa.disconnect(), (k = Mt == null ? void 0 : Mt.removeEventListener) == null || k.call(Mt, "change", $a), Ha(), R.removeEventListener("click", Zo), R.removeEventListener("keydown", Zn), R.removeEventListener("mousedown", Ko), ["daily", "hourly"].forEach(_), R.remove();
    }
  };
}
const ks = "#E1E1E1", Ld = "#F7F4F0", vc = "#03a9f4", Lt = 14, Dt = 172;
let jh = 0;
const Kt = (a) => Math.round(a * 100) / 100, vo = (a, l, i) => Math.max(l, Math.min(i, a)), Go = (a, l, i, d, f, g) => '<rect x="' + Kt(a) + '" y="' + Kt(l) + '" width="' + Kt(i) + '" height="' + Kt(d) + '" fill="' + f + '"' + (g != null ? ' opacity="' + g + '"' : "") + "/>", bc = (a) => a.map((l, i) => (i ? "L" : "M") + Kt(l[0]) + " " + Kt(l[1])).join("");
function wc(a) {
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
function zh(a) {
  const l = a < 2 ? a + 24 : a;
  let i = gi[0], d = gi[gi.length - 1];
  for (let E = 0; E < gi.length - 1; E++) if (l >= gi[E][0] && l <= gi[E + 1][0]) {
    i = gi[E], d = gi[E + 1];
    break;
  }
  const f = (l - i[0]) / (d[0] - i[0]), g = f * f * (3 - 2 * f), b = (E, x) => {
    const R = parseInt(E.slice(1), 16), me = parseInt(x.slice(1), 16);
    return "#" + [16, 8, 0].map((ne) => Math.round((R >> ne & 255) + ((me >> ne & 255) - (R >> ne & 255)) * g).toString(16).padStart(2, "0")).join("");
  };
  return { top: b(i[1][0], d[1][0]), bot: b(i[1][1], d[1][1]), warm: b(i[1][2], d[1][2]), cool: b(i[1][3], d[1][3]), op: i[1][4] + (d[1][4] - i[1][4]) * g, t: l };
}
function Vh(a) {
  const l = parseInt(a.slice(1), 16), i = (l >> 16 & 255) / 255, d = (l >> 8 & 255) / 255, f = (l & 255) / 255, g = Math.max(i, d, f), b = Math.min(i, d, f);
  let E = 0, x = 0;
  const R = (g + b) / 2;
  if (g !== b) {
    const me = g - b;
    x = R > 0.5 ? me / (2 - g - b) : me / (g + b), E = (g === i ? (d - f) / me + (d < f ? 6 : 0) : g === d ? (f - i) / me + 2 : (i - d) / me + 4) / 6;
  }
  return [E * 360, x * 100, R * 100];
}
function yu(a, l, i) {
  l = vo(l, 0, 100) / 100, i = vo(i, 0, 100) / 100;
  const d = (b) => (b + a / 30) % 12, f = l * Math.min(i, 1 - i), g = (b) => i - f * Math.max(-1, Math.min(d(b) - 3, Math.min(9 - d(b), 1)));
  return "#" + [g(0), g(8), g(4)].map((b) => Math.round(b * 255).toString(16).padStart(2, "0")).join("");
}
const [ku, Mu, Su] = Vh(ks), Ad = yu(ku, Mu, Math.max(6, Su - 14)), Gh = yu(ku, Mu, Math.min(96, Su + 16));
function Uh(a, l, i, d, f) {
  const g = Dt / 2, b = Dt * 0.12, E = g - (g - b) * a, x = (J) => J ** 1.3, R = vo(i, -1.5, 1.5), me = (J) => -(Math.abs(R) * 4.6 * J ** 1.5) * Math.sign(R), ne = a * 1.4, U = (J, Z) => {
    const V = Math.min(4.8, Math.abs(i) * 2.6) * (Z ? 1 : -1) * Math.sign(i || 1), q = Z ? J + E : J, ce = Z ? J : J + E, X = (Ce) => q + me(Ce) + V * Math.sin(Ce * Math.PI * 1.2 + d) * x(Ce) * 1.4 + ne * Math.sin(Ce * Math.PI * 2 + d * 0.6) * x(Ce) * (Z ? 1 : -1), fe = [[ce, Lt]];
    for (let Ce = 0; Ce <= 12; Ce++) fe.push([X(Ce / 12), Lt + Dt * Ce / 12]);
    fe.push([ce, Lt + Dt]);
    let $ = '<path d="' + bc(fe) + 'Z" fill="' + ks + '"/>';
    if (f) return $;
    const M = 1.35 + ((Z ? i > 0 : i < 0) ? 0.35 : 0), B = (Ce) => {
      const P = Ce / 7, Ee = Z ? 1 - P : P, z = (1 - Ee) ** 1.3, Be = J + E * P;
      return Array.from({ length: 13 }, (y, _) => {
        const C = _ / 12;
        return [Be + me(C) * z + V * M * Math.sin(C * Math.PI * 1.2 + d - Ee * 3.2) * x(C) * 1.4 * z + ne * 1.6 * Math.sin(C * Math.PI * 2 + d * 0.6 - Ee * 2.5) * x(C) * a * (0.4 + 0.6 * z), Lt + Dt * C];
      });
    }, we = [1, 2, 3, 4, 5, 6].map(B);
    for (let Ce = 0; Ce < 6; Ce += 2) $ += '<path d="' + bc(we[Ce]) + bc(we[Ce + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return $;
  }, Y = g - (g - b) * l;
  return { body: U(Lt, !0) + U(Lt + Dt - E, !1), rails: [{ x: Lt + Y - 4, y: Lt, w: 4, h: Dt }, { x: Lt + Dt - Y, y: Lt, w: 4, h: Dt }], head: 6.4 };
}
function Yh(a, l, i) {
  const d = Dt * (1 - a);
  let f = "";
  if (d > 1 && (f += Go(Lt, Lt, Dt, d, ks), !i))
    for (let g = 1; g < 7; g += 2) f += Go(Lt + Dt * g / 7, Lt, Dt / 7, d, "#fff");
  return { body: f, rails: [{ x: Lt, y: Lt + Dt * (1 - l) - 7, w: Dt, h: 11 }], head: 10.4 };
}
function Zh(a, l, i, d) {
  const f = 9 - 7 * (i / 100), g = Lt + Dt * (1 - a), b = Math.ceil(Dt / 10) + 1, E = Lt + f / 2, x = (Lt + Dt - f / 2 - E) / (b - 1), R = 0.8, me = 0.6, ne = Array.from({ length: b }, (J, Z) => Math.max(E + Z * me, Math.min(E + Z * x, g - f / 2 - (b - 1 - Z) * me))), U = ne.slice(0, -1).map((J, Z) => vo((ne[Z + 1] - J - me) / (x - me), 0, 1));
  U.push(U[b - 2]);
  let Y = "";
  return ne.forEach((J, Z) => {
    const V = R + (f - R) * U[Z], q = Math.max(0.5, V / 2), ce = Math.max(0.4, V * 0.114);
    Y += Go(Lt, J - q, Dt, Math.max(1, V), ks), !d && V > 2.2 && (Y += Go(Lt, J + q - ce, Dt, ce, Ad) + Go(Lt, J - q, Dt, ce * 0.55, Gh, 0.75));
  }), d || [0.22, 0.78].forEach((J) => {
    Y += Go(Lt + Dt * J - 0.7, Lt, 1.4, Math.max(0, ne[b - 1] + 1 - Lt), Ad, 0.85);
  }), { body: Y, rails: [{ x: Lt, y: Lt + Dt * (1 - l) - 8, w: Dt, h: 8 }], head: 8.8 };
}
const _d = (a, l, i, d, f, g, b) => a === "curtain" ? Uh(l, i, f, g, b) : a === "venetian" ? Zh(l, i, d, b) : Yh(l, i, b);
function Kh(a, l) {
  let i = "", d = "";
  return l.forEach((f) => {
    const g = f.w > f.h, b = vo(g ? Lt + Dt / 2 : f.x + f.w / 2, 17, 183), E = vo(g ? f.y + f.h / 2 : Lt + Dt / 2, 17, 183);
    i += g ? Go(Lt, vo(f.y + f.h / 2, Lt, Lt + Dt) - 1, Dt, 2, vc) : Go(vo(f.x + f.w / 2, Lt, Lt + Dt) - 1, Lt, 2, Dt, vc);
    const x = g ? "M" + Kt(b - 4) + " " + Kt(E - 3) + "l4 -3l4 3M" + Kt(b - 4) + " " + Kt(E + 3) + "l4 3l4 -3" : "M" + Kt(b - 3) + " " + Kt(E - 4) + "l-3 4l3 4M" + Kt(b + 3) + " " + Kt(E - 4) + "l3 4l-3 4";
    d += '<circle cx="' + Kt(b) + '" cy="' + Kt(E) + '" r="11" fill="' + vc + '" filter="url(#' + a + 's)"/><path d="' + x + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: d };
}
function $h(a, l) {
  const i = /* @__PURE__ */ new Date(), d = zh(i.getHours() + i.getMinutes() / 60), f = 42 + 18 * Math.sin(d.t * 0.5), g = d.t >= 5 && d.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (d.t - 5) / 15) : 80, b = _d(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), E = l.ghostAlpha > 4e-3 && l.ghost != null ? _d(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", x = l.grip > 4e-3 ? Kh(a, b.rails) : null, R = (me) => Go(Lt, Lt, Dt, Dt, me);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + a + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + a + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + d.top + '"/><stop offset="1" stop-color="' + d.bot + '"/></linearGradient><radialGradient id="' + a + 'w" cx="' + Kt(f) + '%" cy="' + Kt(g) + '%" r="58%"><stop offset="0" stop-color="' + d.warm + '" stop-opacity="' + Kt(d.op * 0.8) + '"/><stop offset="1" stop-color="' + d.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + a + 'k" cx="' + Kt(100 - f * 0.8) + '%" cy="' + Kt(100 - g * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + d.cool + '" stop-opacity="' + Kt(d.op * 0.64) + '"/><stop offset="1" stop-color="' + d.cool + '" stop-opacity="0"/></radialGradient><filter id="' + a + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Ld + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + a + 'c)">' + R("url(#" + a + "l)") + R("url(#" + a + "w)") + R("url(#" + a + "k)") + (E ? '<g opacity="' + Kt(l.ghostAlpha) + '">' + E + "</g>" : "") + b.body + '<rect x="14" y="14" width="172" height="' + b.head + '" fill="' + ks + '" filter="url(#' + a + 's)"/></g>' + (x ? '<g clip-path="url(#' + a + 'c)" opacity="' + Kt(l.grip) + '">' + x.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Ld + '" stroke-width="3"/>' + (x ? '<g opacity="' + Kt(l.grip) + '">' + x.knobs + "</g>" : "") + "</svg>";
}
function Xh({ onMove: a, onSet: l }) {
  var $;
  const i = "cv" + ++jh, d = document.createElement("div");
  d.className = "tfCoverArt";
  const f = ($ = window.matchMedia) == null ? void 0 : $.call(window, "(pointer: coarse)").matches;
  let g = null;
  const b = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let E = 0, x = !1, R = !1, me = null, ne = 0, U = 0;
  const Y = () => (g == null ? void 0 : g.kind) === "curtain" ? "x" : "y", J = () => me || x || R || g.moving || g.target != null ? 1 : f ? performance.now() < U ? 1 : 0.4 : 0, Z = () => {
    d.innerHTML = $h(i, { kind: g.kind, pos: b.pos, bar: g.target ?? b.pos, tilt: b.tilt, vel: b.vel, ph: b.ph, ghost: b.gpos, ghostAlpha: b.ghost, grip: b.grip });
  };
  function V(M) {
    E = 0;
    const B = b.last ? Math.min(0.064, (M - b.last) / 1e3) : 1 / 60, we = B * 60;
    b.last = M;
    const Ce = g.pos - b.pos, P = b.pos;
    b.pos += Math.sign(Ce) * Math.min(Math.abs(Ce), Math.max(10.5, Math.abs(Ce) * 1.4) * B), Math.abs(g.pos - b.pos) < 0.03 && (b.pos = g.pos), b.vel = b.vel * 0.86 + (b.pos - P) / we * 0.14, Math.abs(b.vel) < 0.015 && b.pos === g.pos && (b.vel = 0), (b.pos !== P || b.vel) && (b.ph += (0.06 + Math.abs(b.vel) * 0.03) * we);
    const Ee = g.tilt - b.tilt;
    b.tilt += Math.sign(Ee) * Math.min(Math.abs(Ee), Math.max(60, Math.abs(Ee) * 4) * B);
    const z = J();
    b.grip += (z - b.grip) * Math.min(1, B * (z > b.grip ? 11 : 3.5)), Math.abs(z - b.grip) < 0.01 && (b.grip = z);
    const Be = g.target != null && Math.abs(g.target - b.pos) > 0.5 ? 0.22 : 0;
    g.target != null && (b.gpos = g.target), b.ghost += (Be - b.ghost) * Math.min(1, B * (Be > b.ghost ? 16 : 3)), Math.abs(Be - b.ghost) < 4e-3 && (b.ghost = Be), Z(), b.pos !== g.pos || b.vel || b.tilt !== g.tilt || b.grip !== z || b.ghost !== Be ? E = requestAnimationFrame(V) : b.last = 0;
  }
  const q = () => {
    g && !E && (E = requestAnimationFrame(V));
  }, ce = setInterval(() => {
    g && !E && Z();
  }, 60 * 1e3), X = (M) => {
    const B = d.getBoundingClientRect();
    return Y() === "x" ? (M.clientX - B.left) / B.width : (M.clientY - B.top) / B.height;
  };
  d.addEventListener("pointerdown", (M) => {
    var Ce;
    if (!(g != null && g.canSet) || M.button > 0) return;
    M.preventDefault(), (Ce = d.setPointerCapture) == null || Ce.call(d, M.pointerId);
    const B = g.target ?? g.pos, we = d.getBoundingClientRect();
    me = { p0: X(M), from: B, x0: M.clientX, value: null, side: null }, g.kind === "curtain" && B > 0 && (me.side = (M.clientX - we.left) / we.width < 0.5 ? "L" : "R"), q();
  }), d.addEventListener("pointermove", (M) => {
    if (!me) return;
    let B;
    if (g.kind === "curtain") {
      if (!me.side) {
        const Ce = M.clientX - me.x0;
        if (Math.abs(Ce) < 4) return;
        me.side = Ce < 0 ? "L" : "R";
      }
      const we = (Dt / 2 - Dt * 0.12) / 200;
      B = me.from + (me.side === "L" ? -1 : 1) * ((X(M) - me.p0) / we) * 100;
    } else B = me.from - (X(M) - me.p0) / (Dt / 200) * 100;
    me.value = vo(B, 0, 100), a(me.value);
  });
  const fe = () => {
    if (!me) return;
    const M = me.value;
    me = null, M != null && l(Math.round(M)), q();
  };
  return d.addEventListener("pointerup", fe), d.addEventListener("pointercancel", fe), d.addEventListener("lostpointercapture", fe), d.addEventListener("pointerenter", () => {
    x = !0, q();
  }), d.addEventListener("pointerleave", () => {
    x = !1, q();
  }), d.addEventListener("focus", () => {
    R = d.matches(":focus-visible"), q();
  }), d.addEventListener("blur", () => {
    R = !1, q();
  }), d.addEventListener("keydown", (M) => {
    if (!(g != null && g.canSet)) return;
    const B = Math.round(g.target ?? g.pos), we = M.shiftKey ? 10 : 1, Ce = { ArrowUp: B + we, ArrowRight: B + we, ArrowDown: B - we, ArrowLeft: B - we, PageUp: B + 25, PageDown: B - 25, Home: 0, End: 100 }[M.key];
    if (Ce == null) return;
    M.preventDefault();
    const P = vo(Ce, 0, 100);
    a(P), clearTimeout(ne), ne = setTimeout(() => l(P), 500);
  }), {
    el: d,
    update(M) {
      const B = !g;
      g = M, B && (b.pos = g.pos, b.tilt = g.tilt, U = performance.now() + 1500, f && setTimeout(q, 1600)), d.classList.toggle("x", Y() === "x"), d.classList.toggle("y", Y() === "y"), g.canSet ? (d.tabIndex = 0, d.setAttribute("role", "slider"), d.setAttribute("aria-valuemin", "0"), d.setAttribute("aria-valuemax", "100"), d.setAttribute("aria-valuenow", String(Math.round(g.target ?? g.pos))), d.setAttribute("aria-orientation", Y() === "x" ? "horizontal" : "vertical")) : d.setAttribute("role", "img"), d.setAttribute("aria-label", g.name + (g.canSet ? " position" : "")), d.setAttribute("aria-valuetext", g.text), q();
    },
    destroy() {
      cancelAnimationFrame(E), E = 0, clearInterval(ce), clearTimeout(ne), d.remove();
    }
  };
}
const Ed = "move-assistant-density", vi = {
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
}, oe = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), xc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Dd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Jh = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', xl = {
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
}, Fd = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, sf = { curtain: "curtains", blind: "blind", venetian: "blinds" }, yc = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, Od = "move_assistant_house", qd = "move-assistant-house-used", lf = ["switch", "fan", "input_boolean", "automation"], Wd = "move-assistant-house-look", cf = [["popup", "Popup"], ["sheet", "Sheet"]], df = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], uf = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], pf = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], kc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', hf = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', ff = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', jd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', zd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', Vd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Cu = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + a.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", Gd = Cu(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), mf = Cu(["M20 6L9 17L4 12"]), mo = (a, l = "") => '<span class="tfAreaGlyph" data-icon-for="' + oe(a || "") + '"' + (l ? ' data-icon-name="' + oe(l) + '"' : "") + "></span>", gf = (a) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (a ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', vf = 1, bf = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Ud = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Mc = ["hs", "xy", "rgb", "rgbw", "rgbww"], yl = ["door", "window", "garage_door", "opening"], Yd = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, kl = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], wf = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], xf = 10, yf = 20, kf = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Mf = ["living room", "bedroom", "office"];
function Sf(a, { config: l, getHass: i }) {
  var fs, en, rl;
  const d = (e) => a.getElementById(e), f = d("app"), b = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let E = vi.get(Ed) === "1", x = {};
  const R = (e) => {
    var n;
    return (n = i()) == null ? void 0 : n.callWS(e);
  }, me = (e, n, o) => R({ type: "call_service", domain: e, service: n, service_data: o }), ne = a.querySelector("#appearancePane .toggleList");
  ne && !d("densityToggle") && (ne.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), d("densityToggle").addEventListener("click", () => {
    E = !E, vi.set(Ed, E ? "1" : "0"), $();
  }));
  const U = [
    ["weather", "Weather", "The forecast under Home.", (e) => e.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (e) => e.startsWith("sensor.") && kt(e).device_class === "power" && /^(W|kW)$/.test(kt(e).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (e) => e.startsWith("alarm_control_panel.")]
  ], Y = (e, n, o, c) => '<div class="themeChoice" id="' + e + '" role="group" aria-label="' + n + '">' + c.map(([p, v]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + o + '="' + p + '">' + v + "</button>").join("") + "</div>", J = (e, n, o, c) => '<div class="toggleRow"' + (c ? ' id="' + c + '"' : "") + "><div><strong>" + e + "</strong>" + (n ? '<div class="status">' + n + "</div>" : "") + "</div>" + o + "</div>";
  function Z() {
    var S, D, I, N, ae, ye;
    if (!b || d("housePane")) return;
    const e = d("settingsView");
    e.querySelector(".settingsTitle").textContent = "HomeCore";
    const n = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], o = (ke, K) => '<div class="houseTab' + (ke === "look" ? " active" : "") + '" data-house-pane="' + ke + '"><section class="card">' + K + "</section></div>";
    e.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + n.map(([ke, K]) => '<button class="tab segBtn' + (ke === "look" ? " active" : "") + '" type="button" data-house-tab="' + ke + '">' + K + "</button>").join("") + "</div>" + o("look", '<div class="toggleList" id="houseLook"></div>') + o("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + o("sources", '<div class="toggleList">' + U.map(([ke, K, xe]) => J(K, xe, '<select class="settingsSelect" data-source="' + ke + '" aria-label="' + K + '"></select>')).join("") + "</div>") + o("sums", '<div class="toggleList">' + Object.entries(yc).map(([ke, K]) => J(K.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + ke + '" aria-label="' + K.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const c = d("houseLook");
    [(S = e.querySelector(".themeBtn")) == null ? void 0 : S.closest(".toggleRow"), (D = d("densityToggle")) == null ? void 0 : D.closest(".toggleRow"), (I = d("moreInfoChoice")) == null ? void 0 : I.closest(".toggleRow"), (N = d("namesChoice")) == null ? void 0 : N.closest(".toggleRow"), (ae = d("hoursChoice")) == null ? void 0 : ae.closest(".toggleRow"), (ye = d("wxStyleChoice")) == null ? void 0 : ye.closest(".toggleRow")].forEach((ke) => ke && c.appendChild(ke)), c.insertAdjacentHTML("beforeend", J("Lights", "How lights show on the house page.", Y("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + J("Pad", "What the Dual Axis Controller’s pad sets on its tile.", Y("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const p = d("housePane"), v = p.querySelector(".houseTabs"), h = v.querySelector(".rubberIndicator"), w = (ke) => {
      const K = v.querySelector(".tab.active");
      h.style.transition = ke ? "" : "none", h.style.left = K.offsetLeft + "px", h.style.width = K.offsetWidth + "px", ke && (h.style.transform = "scaleX(1.08)", setTimeout(() => h.style.transform = "", 180));
    };
    new ResizeObserver(() => w(!1)).observe(v), p.addEventListener("click", (ke) => {
      const K = ke.target.closest("[data-house-tab]");
      if (K) {
        v.querySelectorAll(".tab").forEach((ie) => ie.classList.toggle("active", ie === K)), p.querySelectorAll(".houseTab").forEach((ie) => ie.classList.toggle("active", ie.dataset.housePane === K.dataset.houseTab)), K.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), w(!0);
        return;
      }
      const xe = ke.target.closest("[data-light-fav]");
      if (xe) {
        or(xe.dataset.lightFav);
        return;
      }
      const L = ke.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!L || L.disabled)) {
        if (L.dataset.lights && (ht.lights = L.dataset.lights), L.dataset.dacPad && (ht.dacPad = L.dataset.dacPad), (L.dataset.lights || L.dataset.dacPad) && (Qe(), Bt.clear()), L.dataset.sumToggle) {
          const ie = L.dataset.sumToggle, Ne = new Set(j.hiddenSums || []);
          Ne.has(ie) ? Ne.delete(ie) : Ne.add(ie), j = { ...j, hiddenSums: [...Ne] }, Gn();
        }
        Ua();
      }
    }), p.addEventListener("change", (ke) => {
      const K = ke.target;
      K.dataset.source && (j = { ...j, sources: { ...j.sources || {}, [K.dataset.source]: K.value || void 0 } }, Gn());
      const xe = K.dataset.lightStyle || K.dataset.lightPad;
      if (xe) {
        const L = K.dataset.lightStyle ? "lightStyles" : "lightPads", ie = { ...ht[L] };
        K.value ? ie[xe] = K.value : delete ie[xe], ht[L] = ie, Qe(), [...Bt.keys()].filter((Ne) => Ne.endsWith(":" + xe)).forEach((Ne) => Bt.delete(Ne));
      }
      Ua();
    });
  }
  function V() {
    var w, S;
    Mo() && da();
    const e = d("housePane");
    if (!e) return;
    const n = !!customElements.get(Rn);
    e.querySelectorAll("[data-lights]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.lights === ht.lights))), d("lightsRow").querySelector(".status").textContent = n || !Mo() ? "How lights show on the house page." : Ve === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", e.querySelectorAll("[data-dac-pad]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.dacPad === ht.dacPad))), d("dacPadRow").hidden = !Mo();
    for (const D of e.querySelectorAll("[data-source]")) {
      if (D === a.activeElement) continue;
      const [I] = U.find(([ae]) => ae === D.dataset.source), N = Object.keys(x).filter(U.find(([ae]) => ae === I)[3]).sort((ae, ye) => De(ae).localeCompare(De(ye)));
      D.dataset.sig !== N.join(",") && (D.innerHTML = '<option value="">Automatic</option>' + N.map((ae) => '<option value="' + oe(ae) + '">' + oe(De(ae)) + "</option>").join(""), D.dataset.sig = N.join(",")), D.value = N.includes((w = j.sources) == null ? void 0 : w[I]) ? j.sources[I] : "";
    }
    e.querySelectorAll("[data-sum-toggle]").forEach((D) => {
      const I = !(j.hiddenSums || []).includes(D.dataset.sumToggle);
      D.classList.toggle("on", I), D.setAttribute("aria-checked", String(I));
    });
    const o = d("lightRows"), c = o != null && o.contains(a.activeElement) ? a.activeElement : null;
    if (!o || c != null && c.matches("select")) return;
    const p = new Set(kn()), v = (D, I, N, ae) => '<option value="' + D + '"' + (D === N ? " selected" : "") + ">" + I + "</option>", h = Object.keys(x).filter((D) => D.startsWith("light.")).sort((D, I) => !At.get(D) - !At.get(I) || (At.get(D) || "").localeCompare(At.get(I) || "") || De(D).localeCompare(De(I))).map((D) => {
      const I = ht.lightStyles[D] || "", N = ht.lightPads[D] || "", ae = p.has(D), ye = oe(De(D));
      return "<tr><td><strong>" + ye + "</strong></td><td>" + oe(At.get(D) || "—") + "</td><td>" + oe(zt(D)) + '</td><td class="metaSwitchCol"><button class="switch' + (ae ? " on" : "") + '" type="button" role="switch" aria-checked="' + ae + '" data-light-fav="' + oe(D) + '" aria-label="' + ye + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + oe(D) + '" aria-label="' + ye + ' tile">' + v("", "Default", I) + v("tile", "HomeCore tile", I) + v("dac", "Dual Axis Controller", I) + '</select></td><td><select class="settingsSelect" data-light-pad="' + oe(D) + '" aria-label="' + ye + ' pad"' + (Xa(D) ? "" : " disabled") + ">" + v("", "Default", N) + v("temperature", "Temperature", N) + v("colour", "Colour", N) + "</select></td></tr>";
    }).join("");
    o.dataset.html !== h && (o.innerHTML = h, o.dataset.html = h, c != null && c.dataset.lightFav && ((S = o.querySelector('[data-light-fav="' + CSS.escape(c.dataset.lightFav) + '"]')) == null || S.focus({ preventScroll: !0 })));
  }
  const q = document.createElement("div");
  q.className = "densityBadge", q.setAttribute("aria-live", "polite"), q.hidden = !0, f.appendChild(q);
  let ce = 0;
  function X() {
    if (!E) return;
    const e = d("homeView"), n = (v) => v.offsetParent !== null && !v.closest("[hidden]");
    e.querySelectorAll(":scope .card, :scope .tfAction").forEach((v) => {
      n(v) && (v.dataset.h = Math.round(v.getBoundingClientRect().height) + " px");
    });
    const o = [...e.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(n), c = window.innerHeight, p = o.filter((v) => {
      const h = v.getBoundingClientRect();
      return h.height > 0 && h.top >= 0 && h.bottom <= c + 0.5;
    }).length;
    q.hidden = !e.classList.contains("active"), q.innerHTML = "<b>" + p + "</b><small>of " + o.length + " readings on screen</small>";
  }
  const fe = () => {
    E && requestAnimationFrame(X);
  };
  function $() {
    var e;
    f.classList.toggle("showDensity", E), (e = d("densityToggle")) == null || e.classList.toggle("on", E), q.hidden = !E, clearInterval(ce), E && (ce = setInterval(X, 1e3), X());
  }
  window.addEventListener("scroll", fe, { capture: !0, passive: !0 }), window.addEventListener("resize", fe, { passive: !0 });
  const M = a.querySelector("#homeView .grid");
  let B = null, we = null, Ce = null, P = null;
  const Ee = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), Be = /* @__PURE__ */ new Map(), y = 350;
  let _ = null;
  const C = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map();
  let j = { favourites: null }, re = {}, he = {}, ve = [], Ye = null;
  const ct = (() => {
    try {
      return JSON.parse(vi.get(qd)) || {};
    } catch {
      return {};
    }
  })();
  let At = /* @__PURE__ */ new Map(), sn = 0;
  function Gn() {
    clearTimeout(sn), sn = setTimeout(() => Promise.resolve(R({ type: "frontend/set_user_data", key: Od, value: j })).catch(() => {
    }), 400);
  }
  const ht = (() => {
    let e = {};
    try {
      e = JSON.parse(vi.get(Wd)) || {};
    } catch {
    }
    const n = (o, c) => Object.fromEntries(Object.entries(o || {}).filter(([, p]) => c.includes(p)));
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
  })(), Qe = () => vi.set(Wd, JSON.stringify(ht)), St = () => {
    f.dataset.more = ht.more, f.dataset.names = ht.names, tn();
  };
  b && ne && !d("moreInfoChoice") && (d("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + cf.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (ht.more === e) + '" data-more-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), d("moreInfoChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-more-style]");
    n && (ht.more = n.dataset.moreStyle, Qe(), St(), d("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === n))));
  }), d("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + df.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (ht.names === e) + '" data-names-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), d("namesChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-names-style]");
    n && (ht.names = n.dataset.namesStyle, ht.namesPicked = !0, Qe(), St(), d("namesChoice").querySelectorAll("[data-names-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === n))));
  }), d("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + uf.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (ht.hoursWindow === e) + '" data-hours-window="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), d("hoursChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-hours-window]");
    n && (ht.hoursWindow = n.dataset.hoursWindow, Qe(), Ue == null || Ue.refresh(), d("hoursChoice").querySelectorAll("[data-hours-window]").forEach((o) => o.setAttribute("aria-pressed", String(o === n))));
  }), d("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + pf.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (ht.wxStyle === e) + '" data-wx-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), d("wxStyleChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-wx-style]");
    n && (ht.wxStyle = n.dataset.wxStyle, Qe(), Ue == null || Ue.setStyle(ht.wxStyle), tt == null || tt.forEach((o) => o.setStyle(ht.wxStyle)), d("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === n))));
  })), Z();
  let ot = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const vn = /* @__PURE__ */ new Map();
  let En = "";
  const Ji = b ? ap({ onChange: () => dn() }) : null;
  b && f.classList.add("house");
  const ft = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ue = null, bt = null, bo = !1;
  function Qi(e) {
    const n = Wa();
    if (f.classList.toggle("houseBento", !!n), Ue && (bt !== n || e == null) && (Ue.destroy(), Ue = null), !n || e == null) {
      ft.remove();
      return;
    }
    ft.isConnected || M.append(ft), ft.style.order = e, !Ue && !bo && (Ue = Td(ft, { getHass: i, entityId: n, style: ht.wxStyle, hoursWindow: () => ht.hoursWindow }), bt = n);
  }
  const wi = [["wx", ["current"]], ["avg", ["compared_to_average"]]], bn = Object.fromEntries(wi.map(([e]) => [e, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + e })]));
  let tt = null, Un = null;
  function er(e) {
    const n = Wa();
    tt && Un !== n && (tt.forEach((o) => o.destroy()), tt = null), Object.values(bn).forEach((o) => n ? !o.isConnected && M.append(o) : o.remove()), n && !tt && !bo && (tt = wi.map(([o, c]) => Td(bn[o], { getHass: i, entityId: n, style: ht.wxStyle, cards: c, onOpen: o === "wx" ? () => wr("weather") : void 0 })), Un = n);
  }
  const kt = (e) => {
    var n;
    return ((n = x[e]) == null ? void 0 : n.attributes) || {};
  }, De = (e) => kt(e).friendly_name || e, mt = (e, n) => Zi(e) || (Number(kt(e).supported_features) & n) === n, Ct = (e) => {
    const n = String(e ?? "").replace(/_/g, " ");
    return n.charAt(0).toUpperCase() + n.slice(1);
  }, Ge = (e, n = 1) => Number(e).toLocaleString(void 0, { minimumFractionDigits: n, maximumFractionDigits: n }), wo = (e) => (e == null ? void 0 : e.state) === "on" ? e.attributes.brightness != null ? Math.max(1, Math.round(e.attributes.brightness / 2.55)) : 100 : 0, Uo = (e) => kt(e).supported_color_modes || [], tr = (e) => {
    const n = e / 100;
    return [n <= 66 ? 255 : 329.7 * Math.pow(n - 60, -0.1332), n <= 66 ? 99.47 * Math.log(n) - 161.12 : 288.12 * Math.pow(n - 60, -0.0755), n >= 66 ? 255 : n <= 19 ? 0 : 138.52 * Math.log(n - 10) - 305.04];
  }, je = (e, n) => [5, 3, 1].map((o) => {
    const c = (o + e / 60) % 6;
    return 255 * (1 - n / 100 * Math.max(0, Math.min(c, 4 - c, 1)));
  }), Xe = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)), wn = (e) => {
    const n = 0.2126 * Xe(e[0]) + 0.7152 * Xe(e[1]) + 0.0722 * Xe(e[2]);
    return (n + 0.05) / 0.0664 > 1.05 / (n + 0.05);
  }, Ka = (e) => 0.2126 * Xe(e[0]) + 0.7152 * Xe(e[1]) + 0.0722 * Xe(e[2]), Yn = (e, n) => {
    const o = Ka(e), c = Ka(n);
    return (Math.max(o, c) + 0.05) / (Math.min(o, c) + 0.05);
  }, Xt = (e, n) => {
    const o = wn(e);
    for (let c = 0.1; c < 1; c += 0.02) {
      const p = e.map((v) => Math.round(o ? v * (1 - c) : v + (255 - v) * c));
      if (Yn(p, e) >= n) return "rgb(" + p.join(",") + ")";
    }
    return o ? "#26221e" : "#ffffff";
  };
  function xo(e) {
    const n = kt(e), o = (n.rgb_color || (n.hs_color && n.color_mode !== "color_temp" ? je(...n.hs_color) : n.color_temp_kelvin ? tr(n.color_temp_kelvin) : [255, 170, 0])).map((c) => Math.round(Math.max(0, Math.min(255, c))));
    return "--light:rgb(" + o.join(",") + ");--light-ink:" + Xt(o, 3.5);
  }
  const Ft = (e) => {
    var n;
    return e.startsWith("light.") && ((n = x[e]) == null ? void 0 : n.state) === "on" ? ' data-light style="' + xo(e) + '"' : "";
  }, xn = (e) => {
    const n = Uo(e);
    return n.length ? n.some((o) => o !== "onoff") : kt(e).brightness != null;
  }, Yo = (e) => [kt(e).min_color_temp_kelvin || 2e3, kt(e).max_color_temp_kelvin || 6500], Dn = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Jt(e) {
    const n = Math.max(1, Math.round((Date.now() - e) / 1e3));
    if (n < 10) return "Just now";
    if (n < 60) return n + " seconds ago";
    const o = Math.round(n / 60);
    if (o < 60) return o + (o === 1 ? " minute ago" : " minutes ago");
    const c = Math.round(o / 60);
    if (c < 24) return c + (c === 1 ? " hour ago" : " hours ago");
    const p = Math.round(c / 24);
    return p + (p === 1 ? " day ago" : " days ago");
  }
  const yn = (e) => {
    var n;
    return kt(e).current_position ?? (((n = x[e]) == null ? void 0 : n.state) === "closed" ? 0 : 100);
  }, la = (e) => {
    var n;
    return qa("pos", e, ((n = C.get(e)) == null ? void 0 : n.pos) ?? yn(e));
  }, yo = (e) => {
    var n;
    return qa("tilt", e, ((n = C.get(e)) == null ? void 0 : n.tilt) ?? kt(e).current_tilt_position);
  };
  function zt(e) {
    var h;
    const n = x[e];
    if (!n) return "Not found";
    if (n.state === "unavailable") return "Unavailable";
    const o = n.attributes, c = e.split(".")[0];
    if (c === "light") {
      if (n.state !== "on") return "Off";
      const w = o.color_temp_kelvin;
      return (xn(e) ? wo(n) + "%" : "On") + (o.color_mode === "color_temp" && w ? " · " + Number(w).toLocaleString() + "k" : Mc.includes(o.color_mode) ? " · Colour" : "");
    }
    if (c === "climate") return (n.state === "off" ? "Off" : Ct(o.hvac_action || n.state)) + " · " + Ge(o.current_temperature) + " °C now";
    if (c === "cover") {
      const w = yn(e), S = o.current_tilt_position;
      return n.state === "opening" || n.state === "closing" ? Ct(n.state) + " - " + w + "%" : (w <= 0 ? "Closed" : w >= 100 ? "Open" : "Partially open") + (S > 0 && S < 100 ? " · tilted" : "");
    }
    if (c === "humidifier") return n.state !== "on" ? "Off" : Ct(o.action || "on") + " · " + o.current_humidity + "% now";
    if (c === "vacuum") return Ct(n.state) + (n.state === "cleaning" && ((h = o.rooms) != null && h.length) ? " · " + o.rooms.join(", ") : "") + (o.battery_level != null ? " · " + o.battery_level + "%" : "");
    if (c === "media_player") return n.state === "playing" || n.state === "paused" ? (n.state === "paused" ? "Paused · " : "") + (o.media_title || "Playing") : Ct(n.state);
    if (c === "alarm_control_panel") return Ud[n.state] || Ct(n.state);
    if (c === "lock" || c === "valve") return Ct(n.state);
    if (c === "switch") return n.state === "on" ? "On" : "Off";
    if (c === "plant") return n.state === "ok" ? "Healthy" : Ct(o.problem);
    if (c === "binary_sensor")
      return o.device_class === "battery" ? n.state === "on" ? "Low" : "Normal" : o.device_class === "problem" ? n.state === "on" ? "Problem" : "OK" : o.device_class === "moisture" ? n.state === "on" ? "Wet" : "Dry" : yl.includes(o.device_class) ? n.state === "on" ? "Open" : "Closed" : n.state === "on" ? "Detected" : "Clear";
    if (o.rang) return "Rang at " + Dn(o.rang);
    const p = i();
    if (p != null && p.formatEntityState && !Zi(e))
      try {
        return p.formatEntityState(n);
      } catch {
      }
    const v = Number(n.state);
    if (n.state !== "" && Number.isFinite(v)) {
      const w = Math.abs(v) >= 100 ? 0 : Math.abs(v) >= 10 ? 1 : 2, S = o.unit_of_measurement ? o.unit_of_measurement === "%" ? "%" : " " + o.unit_of_measurement : "";
      return v.toLocaleString(void 0, { maximumFractionDigits: w }) + S + (o.plant_low ? " · Low" : o.plant_high ? " · High" : "");
    }
    return Ct(n.state);
  }
  const Zo = (e) => e >= 1e3 ? Ge(e / 1e3, 2) + " kW" : Math.round(e).toLocaleString() + " W";
  function Zn(e) {
    const n = i();
    e.querySelectorAll("[data-icon-for]").forEach((o) => {
      var v;
      const c = x[o.dataset.iconFor], p = o.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && c && !p) {
        let h = o.firstElementChild;
        (!h || h.localName !== "ha-state-icon") && (o.textContent = "", h = document.createElement("ha-state-icon"), o.appendChild(h)), h.hass = n, h.stateObj = c;
      } else if (customElements.get("ha-icon")) {
        let h = o.firstElementChild;
        (!h || h.localName !== "ha-icon") && (o.textContent = "", h = document.createElement("ha-icon"), o.appendChild(h)), h.icon = p || ((v = c == null ? void 0 : c.attributes) == null ? void 0 : v.icon) || "mdi:circle-medium";
      } else o.textContent || (o.textContent = (o.dataset.letter || De(o.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), Mt();
  }
  const ca = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Ko = (e) => {
    const n = [e];
    for (; n.length; ) {
      const o = n.shift();
      if (o.localName === "svg") return o;
      o.shadowRoot && n.push(...o.shadowRoot.children), n.push(...o.children);
    }
    return null;
  };
  function xi(e) {
    var ye, ke, K;
    const n = e.localName === "svg" ? e : Ko(e), o = n ? [...n.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!o.length) return !n;
    const c = (ye = e.closest(".tfIcon")) == null ? void 0 : ye.offsetWidth;
    if (c === void 0) return !0;
    if (!c) return !1;
    const p = c + "|" + o.map((xe) => xe.getAttribute("d") || xe.localName).join("|");
    if (e.dataset.fitted === p) return !0;
    let v = 1 / 0, h = 1 / 0, w = -1 / 0, S = -1 / 0;
    for (const xe of o) {
      const L = xe.getBBox(), ie = getComputedStyle(xe), Ne = ie.stroke !== "none" ? (parseFloat(ie.strokeWidth) || 0) / 2 : 0;
      !L.width && !L.height || (v = Math.min(v, L.x - Ne), h = Math.min(h, L.y - Ne), w = Math.max(w, L.x + L.width + Ne), S = Math.max(S, L.y + L.height + Ne));
    }
    if (!(w > v)) return !1;
    const D = (K = (ke = n.viewBox) == null ? void 0 : ke.baseVal) != null && K.width ? n.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, I = c - 14, N = I * D.width / Math.max(w - v, S - h), ae = N / D.width;
    return e.localName === "svg" ? (e.style.width = N + "px", e.style.height = N + "px") : e.style.setProperty("--mdc-icon-size", N + "px"), n.style.translate = ((D.x + D.width / 2 - (v + w) / 2) * ae).toFixed(2) + "px " + ((D.y + D.height / 2 - (h + S) / 2) * ae).toFixed(2) + "px", e.dataset.fitted = p, !0;
  }
  let Ha = 0;
  function Fa(e = 0) {
    clearTimeout(Ha), [...a.querySelectorAll(ca)].filter((o) => !xi(o)).length && e < 5 && (Ha = setTimeout(() => Fa(e + 1), 300));
  }
  function Mt() {
    clearTimeout(Ha), Ha = setTimeout(() => Fa(), 60);
  }
  const $a = (e) => {
    var n, o, c;
    return e.startsWith("light.") && x[e] && !kt(e).icon && !((c = (o = (n = i()) == null ? void 0 : n.entities) == null ? void 0 : o[e]) != null && c.icon) ? "mdi:lightbulb" : "";
  }, ln = (e, n, o) => (n = n || $a(e), ' data-icon-for="' + oe(e) + '"' + (n ? ' data-icon-name="' + oe(n) + '"' : "") + (o ? ' data-letter="' + oe(o) + '"' : "")), Sa = (e) => e.endsWith("_solar_power") ? "mdi:solar-power-variant" : kt(e).rang ? "mdi:doorbell" : "", wt = (e, n, o, c) => oe([e, n, o, c ? JSON.stringify(c) : ""].join("|")), k = (e) => oe(JSON.stringify(e));
  function A(e, n) {
    var p, v;
    const o = oe(De(n) + ", " + zt(n));
    return '<div class="activityRow' + (Number.isFinite(Number((p = x[n]) == null ? void 0 : p.state)) && ((v = x[n]) == null ? void 0 : v.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + oe(e + "|" + n) + '" aria-label="' + o + '. Show the last 24 hours"' : '" aria-label="' + o + '"') + '><div class="tfIcon" aria-hidden="true"' + ln(n, Sa(n)) + '></div><div><div class="activityRowName">' + oe(De(n)) + '</div><div class="activityRowMeta">' + oe(zt(n)) + "</div></div></div>";
  }
  const O = (e, n, o) => '<div class="activityRow" aria-label="' + oe(e + ", " + n) + '"><div class="tfIcon" aria-hidden="true"' + ln("", o, e) + '></div><div><div class="activityRowName">' + oe(e) + '</div><div class="activityRowMeta">' + oe(n) + "</div></div></div>";
  function G(e) {
    var o;
    const n = ((o = x[e]) == null ? void 0 : o.state) === "on";
    return '<div class="activityRow tfPlug' + (n ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + wt("switch", "toggle", e) + '" aria-label="Turn ' + oe(De(e)) + (n ? " off" : " on") + '"' + ln(e) + '></button><button class="tfName" type="button" data-more="' + oe(e) + '" aria-label="' + oe(De(e) + ", " + zt(e) + ". More info") + '"><span class="activityRowName">' + oe(De(e)) + '</span><span class="activityRowMeta">' + oe(zt(e)) + "</span></button></div>";
  }
  const Q = (e) => {
    var n;
    return ((n = z.get(e)) == null ? void 0 : n.name) ?? De(e);
  }, le = (e) => {
    var n;
    return ((n = z.get(e)) == null ? void 0 : n.text) ?? zt(e);
  };
  function ue(e) {
    var o;
    const n = (o = z.get(e)) == null ? void 0 : o.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (n ? ln("", n, Q(e)) : ln(e, Sa(e))) + '></div><div><div class="activityRowName">' + oe(Q(e)) + '</div><div class="activityRowMeta">' + oe(le(e)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + oe(Q(e)) + '’s last 24 hours">' + xc + '</button></div><svg class="tfGraph" data-graph="' + oe(e) + '" role="img" aria-label="' + oe(Q(e)) + ', last 24 hours"></svg></div>';
  }
  function be(e, n, o, c, p = "", v = null, h = "") {
    const w = B && B.key === e;
    return '<section class="card tfCard' + (h ? " " + h : "") + (w ? " open" : "") + '" data-tf data-k="' + oe(e) + '" style="order:' + n + (w && B.h ? ";min-height:" + B.h + "px" : "") + '" aria-label="' + oe(o) + '"><div class="activityHeader">' + (v ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + oe(v) + '" aria-label="' + oe(o + (x[v] ? ", " + zt(v) : "") + ". More info") + '">' + oe(o) + "</button>" : '<div class="activityTitle">' + oe(o) + "</div>") + "</div>" + (w ? ue(B.id) : '<div class="activityRows">' + c.join("") + "</div>" + p) + "</section>";
  }
  function ge(e, n) {
    const o = "readings:" + e.id, c = e.readings.map((p) => A(o, p));
    return e.power != null && c.push(O("Power now", Zo(e.power), "mdi:flash")), be(o, n, "Readings", c.concat(e.plugs.map(G)));
  }
  function Ie(e, n) {
    var w;
    const o = "energy:" + e.id, [c, p] = [e.solar.find((S) => S.endsWith("_power")), e.solar.find((S) => S.endsWith("_today"))], v = [c, p].filter(Boolean).map((S) => A(o, S)), h = Number(((w = x[c]) == null ? void 0 : w.state) || 0) * 1e3;
    return ot.grid && (v.push(A(o, ot.grid)), v.push(O("House use", Zo(h + Number(x[ot.grid].state)), "mdi:home-lightning-bolt"))), be(o, n, "Energy", v, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Le = (e, n) => be("plant:" + e.id, n, De(e.id), e.readings.map((o) => A("plant:" + e.id, o)), "", e.id);
  function We(e, n, o, c, p, v, h = null) {
    const w = o == null ? null : Math.max(0, Math.min(1, o)), S = w == null ? 0 : Math.round(w * 100);
    return '<div class="tfBar ' + e + '" role="slider" tabindex="0" aria-label="' + oe(c) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + S + '"' + (p ? ' aria-valuetext="' + oe(p) + '"' : "") + ' data-drag="' + oe(e + "|" + n) + '">' + (h != null ? '<span class="was" aria-hidden="true" style="left:' + h + '%"></span>' : "") + (v ? w == null ? "" : '<b style="left:' + S + '%"></b>' : '<i style="width:' + S + '%"></i>') + "</div>";
  }
  const $e = "move-assistant-house-last-bright", Oe = (() => {
    try {
      return JSON.parse(vi.get($e)) || {};
    } catch {
      return {};
    }
  })();
  let He = 0;
  const ze = (e, n) => {
    !n || Oe[e] === n || (Oe[e] = n, clearTimeout(He), He = setTimeout(() => vi.set($e, JSON.stringify(Oe)), 500));
  }, et = (e, n, o, c) => '<div class="tfStep" role="group" aria-label="' + oe(e) + '"><button type="button" data-act="' + o + '" aria-label="Lower ' + oe(e.toLowerCase()) + '">' + Rd.down + "</button><output>" + oe(n) + '</output><button type="button" data-act="' + c + '" aria-label="Raise ' + oe(e.toLowerCase()) + '">' + Rd.up + "</button></div>", _e = (e, n, o) => '<div class="' + e + '" role="group" aria-label="' + oe(n) + '">' + o.filter(Boolean).map((c) => '<button type="button" data-act="' + c.act + '"' + (c.pressed != null ? ' aria-pressed="' + c.pressed + '"' : "") + (c.disabled ? " disabled" : "") + (c.aria ? ' aria-label="' + oe(c.aria) + '"' : "") + ">" + (c.html || oe(c.label)) + "</button>").join("") + "</div>", nt = (e, n) => "width:" + Math.round(Math.max(0, Math.min(1, (e - n * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * n / 3).toFixed(2), it = (e) => "left:calc(4px + " + e / 100 + " * (100% - 8px))", It = (e, n) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + oe(De(e)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-blocks="' + oe(e) + '">' + [0, 1, 2, 3].map((o) => '<span><i style="' + nt(n, o) + '"></i><b' + (n >= (o + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (o + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + it(n) + '">' + Math.round(n) + "%</output></div>";
  function Re(e, n) {
    e.querySelectorAll(":scope>span").forEach((c, p) => {
      c.firstElementChild.setAttribute("style", nt(n, p)), c.lastElementChild.classList.toggle("lit", n >= (p + 1) * 25 - 12);
    });
    const o = e.querySelector(".tfTip");
    o.setAttribute("style", it(n)), o.textContent = Math.round(n) + "%", e.setAttribute("aria-valuenow", String(Math.round(n))), e.setAttribute("aria-valuetext", Math.round(n) + "% open");
  }
  const Nt = (e, n) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + oe(De(e)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-drag="tilt|' + oe(e) + '"><i style="width:calc((100% - 8px) * ' + n / 100 + ')"></i><span' + (n > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (n > 92 ? ' class="lit"' : "") + ">Open</span></div>", Wt = (e, n, o) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + oe(De(e)) + '">' + [
    mt(e, nf) && ["open", "Open", "open_cover", n >= 100 && !o],
    mt(e, of) && ["stop", "Stop", "stop_cover", !1],
    mt(e, af) && ["close", "Close", "close_cover", n <= 0 && !o]
  ].filter(Boolean).map(([c, p, v, h]) => '<button type="button" data-act="' + wt("cover", v, e) + '" aria-label="' + p + '"' + (h ? " disabled" : "") + ">" + rf[c] + "</button>").join("") + "</div>", Cn = (e, n) => '<button class="tfIcon' + (n.art ? " art" : "") + '" type="button" data-act="' + n.button.act + '" aria-label="' + oe(n.button.label) + '"' + (n.art ? ' style="background-image:url(&quot;' + oe(n.art) + '&quot;)"' : ln(e, n.icon)) + "></button>", Kn = (e) => '<button class="tfName" type="button" data-more="' + oe(e) + '" aria-label="' + oe(De(e) + ", " + zt(e) + ". More info") + '"><span class="activityRowName">' + oe(De(e)) + '</span><span class="activityRowMeta">' + oe(zt(e)) + "</span></button>";
  function ko(e, n = !1, o = null) {
    if (e.startsWith("light.") && yi(e)) return '<div class="tfDac" data-k="' + oe(e) + '" data-dac="' + (n ? "more:" : o ? "dash:" : "tile:") + oe(e) + '"></div>';
    const c = Mi(e), p = o || (n && e.startsWith("light.") ? ["bright"] : null), v = c.sections.map((h, w) => h && (!p || p.includes((c.parts || [])[w])) ? h : "").filter(Boolean);
    return '<div class="tfAction' + (c.on ? " on" : "") + '" data-k="' + oe(e) + '"' + (c.tone ? ' data-tone="' + c.tone + '"' : "") + Ft(e) + '><div class="tfActionHead">' + Cn(e, c) + Kn(e) + "</div>" + v.join("") + "</div>";
  }
  const Rn = "dual-controller-v3", $o = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.4/dist/dual-axis-controller-v4.js";
  let Ve = null;
  async function da() {
    if (Ve || customElements.get(Rn)) return;
    Ve = "loading";
    const e = await Promise.resolve().then(() => R({ type: "lovelace/resources" })).catch(() => null), n = Array.isArray(e) && e.some((c) => /dual-axis-controller/i.test(c.url || ""));
    if (await Promise.race([customElements.whenDefined(Rn), new Promise((c) => setTimeout(c, n ? 8e3 : 0))]), customElements.get(Rn)) return;
    const o = Object.assign(document.createElement("script"), { src: $o });
    o.onerror = () => {
      Ve = "failed", V();
    }, document.head.appendChild(o);
  }
  const Bt = /* @__PURE__ */ new Map(), Xa = (e) => (ht.lightStyles[e] || ht.lights) === "dac", Mo = () => ht.lights === "dac" || Object.values(ht.lightStyles).includes("dac");
  function yi(e) {
    return Xa(e) && !!customElements.get(Rn);
  }
  const Oa = (e) => ht.lightPads[e] || ht.dacPad, Tn = () => {
    const e = i();
    return e && {
      ...e,
      themes: { ...e.themes || {}, darkMode: !f.classList.contains("light") },
      callService: (n, o, c, ...p) => e.callService(n, ...il(n, o, c), ...p)
    };
  }, Rl = ".halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", Pr = ".hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}", Ms = (e, n) => {
    !e.shadowRoot || e.shadowRoot.querySelector("style[data-tf]") || (e.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Pr + (n ? Rl : "") })).dataset.tf = "");
  }, ki = /* @__PURE__ */ new Map(), Nl = new ResizeObserver((e) => e.forEach(({ target: n }) => {
    const o = n.parentElement;
    !o || !n.offsetHeight || (o.style.removeProperty("min-height"), ki.set(o.dataset.dac, o.offsetHeight));
  }));
  function nr(e) {
    e.querySelectorAll("[data-dac]").forEach((n) => {
      const o = n.dataset.dac, c = o.startsWith("dash:");
      let p = Bt.get(o);
      if (!p) {
        const v = o.slice(o.indexOf(":") + 1);
        p = document.createElement(Rn), p.setConfig({ type: "custom:" + Rn, entity: v, pad: Oa(v), ...c ? { tap_action: { action: "none" } } : {} }), Bt.set(o, p);
      }
      p.hass = Tn(), p.parentNode !== n && n.replaceChildren(p, ...n.querySelectorAll(":scope > .tfEditChips")), !p.offsetHeight && ki.has(o) && (n.style.minHeight = ki.get(o) + "px"), Nl.observe(p), Ms(p, c);
    });
  }
  function Ss() {
    const e = Tn();
    Bt.forEach((n, o) => {
      n.isConnected ? n.hass = e : Bt.delete(o);
    });
  }
  customElements.whenDefined(Rn).then(() => {
    b && (M != null && M.querySelector("[data-tf]")) && Jn(Ua);
  });
  const qa = (e, n, o) => Be.has(e + "|" + n) ? Be.get(e + "|" + n) : o;
  function Mi(e) {
    var v;
    const n = x[e], o = n.attributes, c = e.split(".")[0], p = (h, w) => ({ act: wt(h, "toggle", e), label: w });
    if (c === "light") {
      const h = n.state === "on", w = Uo(e), [S, D] = Yo(e), I = qa("bright", e, wo(n));
      h && ze(e, wo(n));
      const N = qa("ct", e, h && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), ae = qa("hue", e, h && Mc.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null);
      return { on: h, button: p("light", "Turn " + De(e) + (h ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        xn(e) && We("bright", e, I / 100, De(e) + " brightness", I + "%", !1, h ? null : Oe[e] ?? null),
        w.includes("color_temp") && We("ct", e, N == null ? null : (N - S) / (D - S), De(e) + " warm to cool", N == null ? "" : Math.round(N) + " kelvin", !0),
        w.some((ye) => Mc.includes(ye)) && We("hue", e, ae == null ? null : ae / 360, De(e) + " colour", "", !0)
      ] };
    }
    if (c === "climate") {
      const h = o.target_temp_step || 0.5, w = Number(o.temperature);
      return { on: n.state !== "off", tone: n.state === "cool" || o.hvac_action === "cooling" ? "cool" : "heat", button: p("climate", "Turn " + De(e) + (n.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(w) && et("Target temperature", Ge(w) + " °C", wt("climate", "set_temperature", e, { temperature: w - h }), wt("climate", "set_temperature", e, { temperature: w + h })),
        _e("tfSeg", "Mode", (o.hvac_modes || []).map((S) => ({ label: Ct(S), act: wt("climate", "set_hvac_mode", e, { hvac_mode: S }), pressed: n.state === S })))
      ] };
    }
    if (c === "cover") {
      const h = n.state === "opening" || n.state === "closing", w = n.state === "closed", S = la(e), D = yo(e);
      return { on: !w, tone: "blue", icon: Fd[wc(n)][w ? 1 : 0], button: p("cover", (w ? "Open " : "Close ") + De(e)), parts: ["blocks", "tilt", "buttons"], sections: [
        mt(e, Hd) && It(e, S),
        D != null && Nt(e, D),
        Wt(e, S, h)
      ] };
    }
    if (c === "humidifier") {
      const h = Number(o.humidity);
      return { on: n.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: p("humidifier", "Turn " + De(e) + (n.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(h) && et("Target humidity", h + "%", wt("humidifier", "set_humidity", e, { humidity: h - 1 }), wt("humidifier", "set_humidity", e, { humidity: h + 1 })),
        ((v = o.available_modes) == null ? void 0 : v.length) && _e("tfSeg", "Mode", o.available_modes.map((w) => ({ label: Ct(w), act: wt("humidifier", "set_mode", e, { mode: w }), pressed: o.mode === w })))
      ] };
    }
    if (c === "media_player") {
      const h = n.state === "playing", w = n.state === "off" || n.state === "standby", S = qa("vol", e, o.volume_level), D = w ? { act: wt("media_player", mt(e, ef) ? "turn_on" : "toggle", e), label: "Turn " + De(e) + " on" } : n.state === "playing" || n.state === "paused" ? { act: wt("media_player", "media_play_pause", e), label: (h ? "Pause " : "Play ") + De(e) } : { act: wt("media_player", mt(e, tf) ? "turn_off" : "toggle", e), label: "Turn " + De(e) + " off" };
      return { on: !w, tone: "blue", art: !w && o.entity_picture ? o.entity_picture : null, button: D, parts: ["playback", "volume"], sections: w ? [] : [
        (mt(e, Bd) || mt(e, Pd) || mt(e, Nd) || mt(e, Id)) && _e("tfSeg", "Playback", [
          { html: xl.prev, aria: "Previous", act: wt("media_player", "media_previous_track", e), disabled: !mt(e, Bd) },
          { html: h ? xl.pause : xl.play, aria: h ? "Pause" : "Play", act: wt("media_player", "media_play_pause", e), disabled: !(mt(e, Nd) || mt(e, Id)) },
          { html: xl.next, aria: "Next", act: wt("media_player", "media_next_track", e), disabled: !mt(e, Pd) }
        ]),
        mt(e, Qh) && S != null && We("vol", e, S, De(e) + " volume", Math.round(S * 100) + "%")
      ] };
    }
    if (c === "vacuum") {
      const h = n.state === "cleaning", w = o.rooms || [], S = (I) => w.includes(I) ? w.filter((N) => N !== I) : w.concat(I), D = wt("vacuum", h ? "pause" : "start", e, Zi(e) ? { rooms: w } : null);
      return { on: h || n.state === "returning", tone: "blue", button: { act: D, label: (h ? "Pause " : "Start ") + De(e) }, parts: ["controls", "rooms"], sections: [
        _e("tfSeg", De(e), [
          { label: h ? "Pause" : "Start", act: D },
          { label: "Dock", act: wt("vacuum", "return_to_base", e), disabled: n.state === "docked" },
          { label: "Locate", act: wt("vacuum", "locate", e) }
        ]),
        Zi(e) && _e("tfChips", "Rooms to clean", ot.rooms.filter((I) => I.id !== "balcony").map((I) => ({ label: I.name, act: wt("vacuum", "set_rooms", e, { rooms: S(I.name) }), pressed: w.includes(I.name) })))
      ] };
    }
    if (c === "lock") {
      const h = n.state === "locked";
      return { on: !h, tone: "heat", button: { act: wt("lock", h ? "unlock" : "lock", e), label: (h ? "Unlock " : "Lock ") + De(e) }, parts: ["controls"], sections: [
        _e("tfSeg", De(e), [
          { label: "Lock", act: wt("lock", "lock", e), pressed: h },
          { label: "Unlock", act: wt("lock", "unlock", e), pressed: n.state === "unlocked" },
          mt(e, vf) && { label: "Open", act: wt("lock", "open", e), pressed: n.state === "open" }
        ])
      ] };
    }
    if (c === "alarm_control_panel") {
      const h = n.state === "disarmed";
      return { on: !h, tone: n.state === "triggered" ? "alarm" : "blue", button: { act: wt("alarm_control_panel", h ? "alarm_arm_away" : "alarm_disarm", e), label: h ? "Arm " + De(e) + ", away" : "Disarm " + De(e) }, parts: ["controls"], sections: [
        _e("tfSeg", De(e), bf.filter(([, , , w]) => !w || mt(e, w)).map(([w, S, D]) => ({ label: S, act: wt("alarm_control_panel", D, e), pressed: n.state === w })))
      ] };
    }
    if (c === "valve") {
      const h = n.state === "open";
      return { on: h, tone: "blue", icon: "mdi:sprinkler-variant", button: p("valve", (h ? "Close " : "Open ") + De(e)), parts: ["controls"], sections: [
        _e("tfSeg", De(e), [
          { label: "Open", act: wt("valve", "open_valve", e), pressed: h },
          { label: "Close", act: wt("valve", "close_valve", e), pressed: !h }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: De(e) }, sections: [] };
  }
  const Xo = (e) => (Number.isInteger(Number(e)) ? String(Number(e)) : Ge(e)) + "°";
  function Ja(e) {
    var xe;
    const n = (L) => e.readings.find((ie) => kt(ie).device_class === L), o = n("temperature"), c = n("humidity"), p = (L) => {
      var ie;
      return Number((ie = x[L]) == null ? void 0 : ie.state);
    }, v = (L) => e.actions.filter((ie) => L.test(ie)), h = e.lights.filter((L) => {
      var ie;
      return ((ie = x[L]) == null ? void 0 : ie.state) === "on";
    }), w = v(/^cover\./), S = w.filter((L) => {
      var ie;
      return ((ie = x[L]) == null ? void 0 : ie.state) !== "closed";
    }), D = [...new Set(w.map((L) => wc(x[L])))], I = v(/^climate\./)[0], N = v(/^humidifier\./)[0], ae = v(/^media_player\./), ye = ae.find((L) => {
      var ie;
      return ((ie = x[L]) == null ? void 0 : ie.state) === "playing";
    }) || ae.find((L) => {
      var ie;
      return ((ie = x[L]) == null ? void 0 : ie.state) === "paused";
    }), ke = e.plugs.filter((L) => {
      var ie;
      return ((ie = x[L]) == null ? void 0 : ie.state) === "on";
    }), K = [];
    if (o && Number.isFinite(p(o)) && K.push({ key: "temp", id: o, kind: "reading", icon: mo(o), label: "Temperature", value: Ge(p(o)) + "°" }), c && Number.isFinite(p(c)) && K.push({ key: "hum", id: c, kind: "reading", icon: mo(c), label: "Humidity", value: Math.round(p(c)) + "%" }), e.lights.length && K.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: mo("", "mdi:lightbulb"),
      label: "Lights",
      value: h.length ? h.length + " of " + e.lights.length + " on" : "All off",
      short: h.length ? h.length + " on" : "Off",
      on: h.length > 0,
      light: h.length ? xo(h[0]) : "",
      acts: e.lights.map((L) => ["light", h.length ? "turn_off" : "turn_on", L]),
      aria: (h.length ? "Turn off" : "Turn on") + " the lights in " + e.name
    }), w.length) {
      const L = D.length === 1 ? sf[D[0]] : "covers", ie = Math.round(w.reduce((Ne, rt) => Ne + yn(rt), 0) / w.length);
      K.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: mo("", ((xe = Fd[D[0]]) == null ? void 0 : xe[S.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Ct(L),
        value: ie <= 0 ? "Closed" : ie >= 100 ? "Open" : ie + "% open",
        short: ie <= 0 ? "Closed" : ie + "%",
        on: S.length > 0,
        acts: w.map((Ne) => ["cover", S.length ? "close_cover" : "open_cover", Ne]),
        aria: (S.length ? "Close the " : "Open the ") + L + " in " + e.name
      });
    }
    if (I) {
      const L = kt(I), ie = x[I].state === "off";
      K.push({
        key: "climate",
        kind: "control",
        tone: L.hvac_action === "cooling" ? "cool" : "heat",
        icon: mo(I),
        label: De(I),
        value: ie ? "Off" : Ct(L.hvac_action || x[I].state) + " · " + Xo(L.temperature),
        short: ie ? "Off" : Xo(L.temperature),
        on: !ie,
        acts: [["climate", "toggle", I]],
        aria: "Turn " + De(I) + (ie ? " on" : " off")
      });
    }
    if (N) {
      const L = x[N].state === "on";
      K.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: mo("", "mdi:air-humidifier"),
        label: De(N),
        value: L ? "On · " + kt(N).humidity + "%" : "Off",
        short: L ? kt(N).humidity + "%" : "Off",
        on: L,
        acts: [["humidifier", "toggle", N]],
        aria: "Turn " + De(N) + (L ? " off" : " on")
      });
    }
    if (ae.length) {
      const L = ye || ae[0], ie = x[L], Ne = ie.state === "playing";
      K.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: mo(L),
        label: De(L),
        value: zt(L),
        short: Ne ? "Playing" : ie.state === "paused" ? "Paused" : Ct(ie.state),
        on: Ne,
        acts: [["media_player", ie.state === "playing" || ie.state === "paused" ? "media_play_pause" : "toggle", L]],
        aria: (Ne ? "Pause " : "Play ") + De(L)
      });
    }
    return e.plugs.length && K.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: mo("", "mdi:power-plug"),
      label: "Plugs",
      value: ke.length ? ke.length + " of " + e.plugs.length + " on" : "All off",
      short: ke.length ? ke.length + " on" : "Off",
      on: ke.length > 0,
      acts: e.plugs.map((L) => ["switch", ke.length ? "turn_off" : "turn_on", L]),
      aria: (ke.length ? "Turn off" : "Turn on") + " the plugs in " + e.name
    }), e.alerts.forEach((L) => K.push(kt(L).device_class === "moisture" ? { key: "alert:" + L, kind: "alert", icon: mo(L), label: "Water leak" } : { key: "note:" + L, kind: "note", icon: mo(L), label: De(L) + " " + zt(L).toLowerCase() })), K;
  }
  const Ir = (e, n) => {
    const o = (c) => e.actions.filter((p) => c.test(p));
    return {
      lights: e.lights,
      covers: o(/^cover\./),
      climate: o(/^climate\./).slice(0, 1),
      humidifier: o(/^humidifier\./).slice(0, 1),
      plugs: e.plugs,
      media: (() => {
        const c = o(/^media_player\./);
        return [c.find((p) => {
          var v;
          return ((v = x[p]) == null ? void 0 : v.state) === "playing";
        }) || c.find((p) => {
          var v;
          return ((v = x[p]) == null ? void 0 : v.state) === "paused";
        }) || c[0]].filter(Boolean);
      })()
    }[n] || [];
  }, Hr = (e, n, o) => '<button class="' + n + (e.on ? " on" : "") + '" type="button" data-tone="' + e.tone + '" data-acts="' + k(e.acts) + '" aria-label="' + oe(e.aria) + '" aria-pressed="' + e.on + '">' + o + "</button>", Si = (e) => '<button class="tfAName" type="button" data-go="' + oe(e.id) + '" aria-label="Open ' + oe(e.name) + '">' + oe(e.name) + "</button>";
  function Fr(e, n, o = !1) {
    const c = n.find((w) => w.key === "lights"), p = !!(c != null && c.on), v = p && c.light ? ' data-light style="' + c.light + '"' : "", h = '<span class="tfAreaGlyph"' + ln("area:" + e.id, e.icon || "mdi:texture-box", e.name) + "></span>";
    return o || !c ? '<span class="tfIcon tfAreaIcon' + (p ? " on" : "") + '"' + v + ' aria-hidden="true">' + h + "</span>" : '<button class="tfIcon tfAreaIcon' + (p ? " on" : "") + '" type="button"' + v + ' data-acts="' + k(c.acts) + '" aria-label="' + oe(c.aria) + '" aria-pressed="' + p + '">' + h + "</button>";
  }
  const Bl = (e) => e.filter((n) => n.kind === "alert" || n.kind === "note").map((n) => '<span class="sourceTag">' + oe(n.label) + "</span>").join(" "), Or = (e) => e.readings.find((n) => kt(n).device_class === "temperature") || [...e.readings, ...e.solar, ...e.openings, ...e.actions, ...e.plugs].find((n) => x[n]) || null, ar = (e, n) => {
    const o = De(n);
    return o.toLowerCase().startsWith(e.name.toLowerCase() + " ") ? Ct(o.slice(e.name.length + 1)) : o;
  };
  function Ot(e) {
    const n = x[e], o = kt(e), c = e.split(".")[0], p = Number(n.state);
    if (n.state === "unavailable") return { text: "Unavailable" };
    if (c === "sensor" && Number.isFinite(p)) {
      if (o.device_class === "temperature") return { text: Xo(p) };
      const v = o.unit_of_measurement || "";
      return v === "%" ? { text: Math.round(p) + "%" } : { text: Ge(p, Number.isInteger(p) ? 0 : 1), unit: v };
    }
    if (c === "climate" && (o.current_temperature ?? o.temperature) != null) return { text: Xo(o.current_temperature ?? o.temperature) };
    if (c === "light") return { text: n.state !== "on" ? "Off" : xn(e) ? wo(n) + "%" : "On" };
    if (c === "cover") {
      const v = yn(e);
      return { text: v <= 0 ? "Closed" : v >= 100 ? "Open" : v + "%" };
    }
    return c === "humidifier" ? { text: n.state === "on" ? o.humidity + "%" : "Off" } : c === "media_player" ? { text: n.state === "playing" ? "Playing" : n.state === "paused" ? "Paused" : Ct(n.state) } : { text: zt(e) };
  }
  const Pl = (e, n, o) => {
    const c = o.find((w) => w.key === "temp"), p = o.find((w) => w.key === "hum"), v = kt(n), h = x[n].state === "off";
    return n.startsWith("climate.") ? [ar(e, n), h ? "Off" : Ct(v.hvac_action || x[n].state) + (v.temperature != null ? " · " + Xo(v.temperature) : ""), p && p.value + " humidity"].filter(Boolean).join(" · ") : [!(c && c.id === n) && ar(e, n), c && c.id !== n && c.value, p && p.id !== n && p.value + " humidity"].filter(Boolean).join(" · ");
  };
  function Il(e, n, o) {
    const c = o && Ot(o), p = o ? Pl(e, o, n) : "", v = (w) => {
      const S = Ir(e, w.key);
      return S.length === 1 ? S[0] : "group:" + e.id + ":" + w.key;
    }, h = n.filter((w) => w.kind === "control").slice(0, 4).map((w) => '<div class="tfATile' + (w.on ? " on" : "") + '" data-tone="' + w.tone + '"' + (w.light ? ' data-light style="' + w.light + '"' : "") + ">" + Hr(w, "tfIcon", w.icon) + '<button class="tfName" type="button" data-more="' + oe(v(w)) + '" aria-label="' + oe(e.name + " " + w.label.toLowerCase() + ", " + w.value + ". Open") + '"><span class="activityRowName">' + oe(w.label) + '</span><span class="activityRowMeta">' + oe(w.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + Fr(e, n) + '<div class="tfATitle">' + Si(e) + Bl(n) + "</div></div>" + (o ? '<button class="tfABig" type="button" data-more="' + oe(o) + '" aria-label="' + oe(De(o) + ", " + zt(o) + ". More info") + '"><span class="tfABigMain' + (c.text.length > 7 ? " long" : "") + '">' + oe(c.text) + (c.unit ? '<span class="tfABigUnit">' + oe(c.unit) + "</span>" : "") + "</span>" + (p ? '<span class="tfABigSub">' + oe(p) + "</span>" : "") + "</button>" : "") + (h.length ? '<div class="tfATiles">' + h.join("") + "</div>" : "");
  }
  function Cs(e) {
    const n = e.id === we, o = Ja(e), c = Or(e), p = c && Ot(c), v = [...o.filter((h) => h.kind === "control"), ...o.filter((h) => h.kind !== "control" && h.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (n ? " active" : "") + '" data-area="' + oe(e.id) + '" tabindex="0" aria-expanded="' + n + '" aria-label="' + oe(e.name) + '"><div class="panelExpanded"' + (n ? "" : " inert") + ">" + Il(e, o, c) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + Fr(e, o, !0) + '<span class="tfACName">' + oe(e.name) + '</span></div><span class="tfACMain">' + (p ? oe(p.text + (p.unit ? " " + p.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + v.map((h) => '<span class="tfACTile"><span class="tfIcon' + (h.kind === "alert" ? " alert" : "") + '"' + (h.on && h.light ? ' data-light style="' + h.light + '"' : "") + ">" + h.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let wa = [];
  const Ts = (e) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + e + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + wa.map(Cs).join("") + "</section></div>", Gt = () => [
    { key: "home", name: "Home", ids: ot.homeVacuums },
    ...ot.rooms.map((e) => ({ key: "room:" + e.id, name: e.name, room: e, ids: e.actions }))
  ], ua = (e, n, o) => e + " " + (e === 1 ? n : o), kn = () => (j.favourites ?? re.favorite_entities ?? []).filter((e) => x[e]);
  function Hl() {
    if (!Ye) {
      const n = Object.entries(ct).sort((c, p) => p[1] - c[1]).map(([c]) => c), o = ot.rooms.flatMap((c) => c.actions);
      Ye = [.../* @__PURE__ */ new Set([...ve, ...n, ...o.filter((c) => Mi(c).on), ...o])];
    }
    const e = kn();
    return Ye.filter((n) => x[n] && x[n].state !== "unavailable" && !e.includes(n));
  }
  let Ci = !1;
  function Ti() {
    if (!Ci || j.favSeeded || !ot.rooms.length) return;
    const e = (o) => Object.keys(x).find((c) => Zi(c) && o(c)), n = [e((o) => o.startsWith("climate.")), e((o) => o.startsWith("cover.") && /curtain/.test(o)), e((o) => o.startsWith("valve.")), ot.security.locks[0]];
    j = { ...j, favourites: [.../* @__PURE__ */ new Set([...j.favourites ?? re.favorite_entities ?? [], ...n.filter(Boolean)])], favSeeded: !0 }, Gn();
  }
  const So = () => j.suggest ?? !re.hide_suggested_entities;
  function Qa() {
    const e = new Set(j.favHidden || []), n = kn().filter((c) => !e.has(c)), o = So() ? Hl().filter((c) => !e.has(c) && Gr(c)) : [];
    return [...n, ...o].slice(0, xf);
  }
  const eo = (e) => {
    const n = kn().includes(e);
    return '<button class="tfStar" type="button" data-star="' + oe(e) + '" aria-pressed="' + n + '" aria-label="Favourite: ' + oe(De(e)) + '">' + gf(n) + "</button>";
  };
  function qr(e, { area: n = !1, star: o = !1, plain: c = !1, say: p = null, alert: v = !1 } = {}) {
    var ke, K, xe, L, ie, Ne;
    const h = c && ((ie = (ke = i()) == null ? void 0 : ke.devices) == null ? void 0 : ie[(L = (xe = (K = i()) == null ? void 0 : K.entities) == null ? void 0 : xe[e]) == null ? void 0 : L.device_id]), w = h && (h.name_by_user || h.name) || De(e), S = e.split(".")[0], D = !c && kl.includes(S) ? Mi(e) : null, I = D ? D.on : ["on", "open", "playing"].includes((Ne = x[e]) == null ? void 0 : Ne.state), N = c ? null : D ? D.button : lf.includes(S) ? { act: wt(S, "toggle", e), label: "Turn " + De(e) + (I ? " off" : " on") } : S === "scene" || S === "script" ? { act: wt(S, "turn_on", e), label: "Run " + De(e) } : null, ae = (p ?? zt(e)) + (n && At.get(e) ? " · " + At.get(e) : ""), ye = (D == null ? void 0 : D.icon) || Sa(e);
    return '<div class="activityRow' + (N ? " tfPlug" : "") + (I ? " on" : "") + (o ? " tfPick" : "") + (v ? " alert" : "") + '" data-k="' + oe((n ? "fav:" : "row:") + e) + '" data-tone="' + (S === "light" ? "light" : (D == null ? void 0 : D.tone) || "blue") + '"' + Ft(e) + ">" + (N && !o ? '<button class="tfIcon" type="button" data-act="' + N.act + '" aria-label="' + oe(N.label) + '"' + ln(e, ye) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + ln(e, ye) + "></div>") + '<button class="tfName" type="button" data-more="' + oe(e) + '" aria-label="' + oe(w + ", " + ae + ". More info") + '"><span class="activityRowName">' + oe(w) + '</span><span class="activityRowMeta">' + oe(ae) + "</span></button>" + (o ? eo(e) : "") + "</div>";
  }
  const Wa = () => {
    var e;
    return x[(e = j.sources) == null ? void 0 : e.weather] ? j.sources.weather : x["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(x).find((n) => n.startsWith("weather."));
  };
  function Ls() {
    var o;
    const e = (c) => Object.keys(x).filter((p) => p.startsWith("binary_sensor.") && c.includes(kt(p).device_class));
    return ((o = he.alert_entities) != null && o.length ? he.alert_entities : [...e(["moisture", "smoke", "gas"]).map((c) => ({ entity: c, severity: "alert" })), ...e(yl).map((c) => ({ entity: c, severity: "warning" }))]).filter((c) => x[c.entity]).map((c) => ({ ...c, on: ["on", "open", "unlocked", "triggered", "problem"].includes(x[c.entity].state) }));
  }
  function Ca() {
    const e = Object.keys(yc), n = /* @__PURE__ */ new Set(), o = [];
    return (re.shortcuts || []).forEach((c) => {
      if (c.type === "summary") {
        if (!e.includes(c.key) || n.has(c.key)) return;
        n.add(c.key);
      }
      o.push(c);
    }), e.forEach((c) => {
      n.has(c) || o.push({ type: "summary", key: c });
    }), o;
  }
  function As() {
    var xe;
    const e = ((xe = i()) == null ? void 0 : xe.entities) || {}, n = (L) => kt(L).device_class, o = Object.keys(x).filter((L) => L.startsWith("sensor.") && n(L) === "battery" || L.startsWith("binary_sensor.") && ["battery", "problem"].includes(n(L))), c = ot.rooms.flatMap((L) => L.plants.map((ie) => ie.id));
    if (!o.length && !c.length) return null;
    const p = (L) => {
      var Ne;
      const ie = (Ne = e[L]) == null ? void 0 : Ne.device_id;
      return !!ie && Object.keys(x).some((rt) => {
        var nn;
        return rt.startsWith("binary_sensor.") && ((nn = e[rt]) == null ? void 0 : nn.device_id) === ie && n(rt) === "battery_charging" && x[rt].state === "on";
      });
    }, v = (L) => L.startsWith("vacuum.") ? kt(L).battery_level <= 20 && x[L].state !== "docked" : L.startsWith("binary_sensor.") ? n(L) === "battery" && x[L].state === "on" : parseFloat(x[L].state) <= 20 && !p(L), h = [...o, ...ot.vacuums].filter((L) => x[L] && v(L)), w = [...o.filter((L) => n(L) === "problem" && x[L].state === "on"), ...c.filter((L) => {
      var ie;
      return ((ie = x[L]) == null ? void 0 : ie.state) === "problem";
    })], S = o.filter((L) => x[L].state === "unavailable"), D = [.../* @__PURE__ */ new Set([...h, ...w, ...S])], I = (L) => {
      const ie = parseFloat(x[L].state);
      return n(L) === "battery" && Number.isFinite(ie) ? ie : 101;
    }, N = [...c, ...ot.vacuums, ...[...o].sort((L, ie) => I(L) - I(ie))].filter((L) => x[L] && !D.includes(L)), ae = /* @__PURE__ */ new Map();
    N.forEach((L) => {
      var Ne;
      const ie = ((Ne = ot.areaOf) == null ? void 0 : Ne.call(ot, L)) || "";
      ae.set(ie, [...ae.get(ie) || [], L]);
    });
    const ye = (L) => {
      const ie = ot.rooms.findIndex((Ne) => Ne.id === L);
      return L === "" ? 1 / 0 : ie < 0 ? ot.rooms.length : ie;
    }, ke = [...ae.keys()].sort((L, ie) => ye(L) - ye(ie)), K = (L) => {
      var ie, Ne, rt, nn;
      return ((ie = ot.rooms.find((jt) => jt.id === L)) == null ? void 0 : ie.name) || ((nn = (rt = (Ne = i()) == null ? void 0 : Ne.areas) == null ? void 0 : rt[L]) == null ? void 0 : nn.name) || L;
    };
    return {
      value: [h.length && ua(h.length, "low battery", "low batteries"), w.length && ua(w.length, "problem", "problems"), S.length && ua(S.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: D, alert: !0 }, ...ke.map((L) => ({ name: L ? K(L) : ke.length > 1 ? "Other devices" : "Devices", ids: ae.get(L) }))].filter((L) => L.ids.length)
    };
  }
  function Wr() {
    var ga;
    const e = ot.rooms, n = ot.security, o = (Ze, Zt) => Ze.actions.filter((ms) => Zt.test(ms)), c = (Ze) => e.map((Zt) => ({ name: Zt.name, ids: Ze(Zt) })).filter((Zt) => Zt.ids.length), p = e.flatMap((Ze) => Ze.lights), v = p.filter((Ze) => {
      var Zt;
      return ((Zt = x[Ze]) == null ? void 0 : Zt.state) === "on";
    }).length, h = e.map((Ze) => Ze.readings.find((Zt) => kt(Zt).device_class === "temperature")).filter(Boolean).map((Ze) => Number(x[Ze].state)).filter(Number.isFinite), [w, S] = [Ge(Math.min(...h)), Ge(Math.max(...h))], D = e.flatMap((Ze) => o(Ze, /^media_player\./)), I = D.filter((Ze) => {
      var Zt;
      return ((Zt = x[Ze]) == null ? void 0 : Zt.state) === "playing";
    }).length, N = Ls(), ae = N.filter((Ze) => Ze.severity === "warning" && Ze.on).length, ye = n.locks.filter((Ze) => {
      var Zt;
      return ["unlocked", "jammed", "open"].includes((Zt = x[Ze]) == null ? void 0 : Zt.state);
    }).length, ke = n.alarms.filter((Ze) => {
      var Zt;
      return ((Zt = x[Ze]) == null ? void 0 : Zt.state) === "disarmed";
    }).length, K = ae ? ua(ae, "warning", "warnings") : null, xe = ye ? ye + " unlocked" : ke ? ke + " disarmed" : K ? null : "All secure", L = As(), ie = e.flatMap((Ze) => Ze.solar), Ne = ie.find((Ze) => Ze.endsWith("_power")), rt = {
      light: p.length && { value: v ? v + " on" : "All off", groups: c((Ze) => Ze.lights) },
      climate: h.length && { value: w === S ? w + "°" : w + " - " + S + "°", groups: c((Ze) => [...Ze.readings.filter((Zt) => ["temperature", "humidity"].includes(kt(Zt).device_class)), ...o(Ze, /^(climate|humidifier)\./)]) },
      security: (n.alarms.length || n.locks.length) && { value: [K, xe].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...n.alarms, ...n.locks] }, { name: "Doors and windows", ids: n.openings }].filter((Ze) => Ze.ids.length) },
      media_players: D.length && { value: I ? I + " playing" : "No media playing", groups: c((Ze) => o(Ze, /^media_player\./)) },
      maintenance: L,
      energy: ot.grid && { value: Zo(Number(((ga = x[Ne]) == null ? void 0 : ga.state) || 0) * 1e3 + Number(x[ot.grid].state)) + " now", groups: [{ name: "Energy", ids: [...ie, ot.grid] }] }
    }, nn = [], jt = N.filter((Ze) => Ze.severity !== "warning" && Ze.on);
    return jt.length && nn.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: ua(jt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: jt.map((Ze) => Ze.entity) }] }), Ca().forEach((Ze) => {
      Ze.type !== "summary" ? nn.push({ key: "path:" + Ze.path, name: Ze.label || Ze.path, icon: Ze.icon || "mdi:link-variant", colour: "", value: "" }) : !Ze.hidden && rt[Ze.key] && !(j.hiddenSums || []).includes(Ze.key) && nn.push({ key: Ze.key, ...yc[Ze.key], ...rt[Ze.key] });
    }), nn;
  }
  const jr = (e) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + oe(e.key) + '" data-k="sum:' + oe(e.key) + '" aria-label="' + oe(e.name + (e.value ? ", " + e.value : "")) + '"' + (e.key === "alerts" ? ' style="--sum:' + e.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + ln(e.id || "", e.icon, e.name) + '></div><div><div class="activityRowName">' + oe(e.name) + "</div>" + (e.value ? '<div class="activityRowMeta">' + oe(e.value) + "</div>" : "") + "</div></div>";
  function or(e) {
    const n = kn();
    j = { ...j, favourites: n.includes(e) ? n.filter((o) => o !== e) : [...n, e], favHidden: (j.favHidden || []).filter((o) => o !== e) }, Gn(), dn();
  }
  function _s(e) {
    document.querySelector("home-assistant") && (Ee.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Es(e, n) {
    if (e.startsWith("path:")) {
      _s(e.slice(5));
      return;
    }
    ci("summary:" + e, n);
  }
  async function ir() {
    const e = (h) => Promise.resolve().then(() => R(h)).catch(() => null), [n, o, c, p] = await Promise.all([
      e({ type: "frontend/get_user_data", key: Od }),
      e({ type: "frontend/get_system_data", key: "home" }),
      e({ type: "frontend/get_system_data", key: "security" }),
      e({ type: "usage_prediction/common_control" })
    ]), v = (n == null ? void 0 : n.value) || {};
    j = { favourites: v.favourites ?? null, sources: v.sources, hiddenSums: v.hiddenSums, dash: v.dash, named: v.named, favHidden: v.favHidden, suggest: v.suggest, favSeeded: v.favSeeded }, re = (o == null ? void 0 : o.value) || {}, he = (c == null ? void 0 : c.value) || {}, ve = Array.isArray(p == null ? void 0 : p.entities) ? p.entities : [], Ye = null, Object.keys(x).length && dn(), Li(), Ci = !0, Ti();
  }
  const zr = "HomeCore";
  async function Li() {
    var c, p, v;
    const e = location.pathname.split("/")[1], n = j.named || [];
    if (!((p = (c = i()) == null ? void 0 : c.user) != null && p.is_admin) || !e || n.includes(e)) return;
    const o = () => {
      j = { ...j, named: [...n, e] }, Gn();
    };
    try {
      const h = (v = await R({ type: "lovelace/dashboards/list" })) == null ? void 0 : v.find((D) => D.url_path === e);
      if (!h || h.mode === "yaml") return;
      if (h.title === zr) {
        o();
        return;
      }
      const w = await R({ type: "lovelace/config", url_path: e }), S = ((w == null ? void 0 : w.views) || []).flatMap((D) => [...D.cards || [], ...(D.sections || []).flatMap((I) => I.cards || [])]);
      if (!S.length || !S.every((D) => (D == null ? void 0 : D.type) === "custom:move-assistant-card" && D.layout === "test-focus")) return;
      await R({ type: "lovelace/dashboards/update", dashboard_id: h.id, title: zr }), o();
    } catch {
    }
  }
  let Ai = null, Co = 0, ja = !1;
  const rr = (e) => {
    const n = e.split(".")[0], o = kt(e).device_class;
    return wf.includes(n) && (n !== "binary_sensor" || yl.includes(o) || !!Yd[o]);
  }, Jo = (e) => e.startsWith("binary_sensor.") ? Yd[kt(e).device_class] : null;
  async function _i() {
    var e;
    if (!(ja || Date.now() - Co < 30 * 1e3)) {
      ja = !0, Co = Date.now();
      try {
        const n = Object.keys(((e = i()) == null ? void 0 : e.states) || {}).filter(rr), o = n.length ? await R({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: n }) : null;
        Ai = Array.isArray(o) ? o.filter((c) => c.entity_id && c.state != null && c.when) : null;
      } catch {
        Ai = null;
      }
      ja = !1, dn();
    }
  }
  function sr() {
    const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), o = (p) => {
      if (!x[p.entity_id] || !rr(p.entity_id) || !Gr(p.entity_id) || ["unavailable", "unknown"].includes(p.state)) return;
      if (Jo(p.entity_id)) {
        const h = n.get(p.entity_id);
        p.state === "on" ? (!h || p.when > h.when + 1) && n.set(p.entity_id, { ...p, alarm: !0, cleared: null }) : h && !h.cleared && p.when > h.when && (h.cleared = p.when);
        return;
      }
      const v = e.get(p.entity_id);
      (!v || p.when > v.when + 1) && e.set(p.entity_id, p);
    };
    [...Ai || []].sort((p, v) => p.when - v.when).forEach(o);
    const c = Ai ? Co / 1e3 - 5 : 0;
    return Object.keys(x).forEach((p) => {
      var w;
      const v = x[p], h = v.last_changed ? Date.parse(v.last_changed) / 1e3 : 0;
      h > c && o({ entity_id: p, state: v.state, when: h, context_user_id: (w = v.context) == null ? void 0 : w.user_id });
    }), [...e.values(), ...n.values()].sort((p, v) => v.when - p.when).slice(0, yf);
  }
  function Ei(e) {
    var c;
    const n = e.context_user_id && Object.keys(x).find((p) => p.startsWith("person.") && kt(p).user_id === e.context_user_id);
    if (n) return De(n);
    const o = (c = i()) == null ? void 0 : c.user;
    return o && e.context_user_id === o.id ? o.name : ["automation", "script"].includes(e.context_domain) || e.context_event_type === "automation_triggered" ? e.context_name || "Home Assistant" : "";
  }
  function Vr(e) {
    const n = e.entity_id.split(".")[0], o = String(e.state);
    return n === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[o] || Ct(o).toLowerCase() : n === "cover" || n === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[o] || Ct(o).toLowerCase() : n === "binary_sensor" ? o === "on" ? "opened" : "closed" : n === "climate" ? o === "off" ? "turned off" : "set to " + Ct(o).toLowerCase() : n === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[o] || Ct(o).toLowerCase() : n === "alarm_control_panel" ? (Ud[o] || Ct(o)).toLowerCase() : n === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[o] || Ct(o).toLowerCase() : o === "on" ? "turned on" : o === "off" ? "turned off" : Ct(o).toLowerCase();
  }
  function Ta(e) {
    const n = e.entity_id, o = e.alarm && Jo(n), c = De(n) + " " + (o ? o[0] : Vr(e)), p = o ? Dn(e.when * 1e3) + (e.cleared ? " · " + o[1] + " since " + Dn(e.cleared * 1e3) : "") : [Ei(e), Dn(e.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (o ? " alert" : "") + '"><div class="tfIcon' + (o ? " alert" : "") + '" aria-hidden="true"' + ln(n, Sa(n)) + '></div><button class="tfName" type="button" data-more="' + oe(n) + '" data-at="' + Math.round(e.when * 1e3) + '" aria-label="' + oe(c + ", " + p + ". More info") + '"><span class="activityRowName">' + oe(c) + '</span><span class="activityRowMeta">' + oe(p) + "</span></button></div>";
  }
  let La = null, Ds = 0;
  const Fl = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Qo() {
    var n;
    if (Date.now() - Ds < 5 * 60 * 1e3) return;
    Ds = Date.now();
    const e = [];
    try {
      const o = ((n = await R({ type: "energy/get_prefs" })) == null ? void 0 : n.energy_sources) || [], c = (p) => o.filter((v) => v.type === p).flatMap((v) => p === "grid" ? (v.flow_from || []).map((h) => h.stat_energy_from) : [v.stat_energy_from]).filter(Boolean);
      for (const [p, v, h] of [["electricity", "Electricity", c("grid")], ["solar", "Solar", c("solar")], ["gas", "Gas", c("gas")], ["water", "Water", c("water")]]) {
        if (!h.length) continue;
        const w = await Promise.all(h.map((S) => Promise.resolve(R({ type: "recorder/statistic_during_period", statistic_id: S, calendar: { period: "day" }, types: ["change"] })).then((D) => Number(D == null ? void 0 : D.change) || 0, () => 0)));
        e.push({ key: p, name: v, id: h[0], ids: h, value: w.reduce((S, D) => S + D, 0), unit: kt(h[0]).unit_of_measurement || (p === "gas" || p === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    La = e, dn();
  }
  let Aa = null, Di = [];
  function lr() {
    var v;
    const e = Di = La != null && La.length ? La : Fl.map(([h, w, S, D]) => {
      const I = "sensor.made_up_energy_" + h;
      return x[I] = { entity_id: I, state: String(S), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: w + " today", unit_of_measurement: D, state_class: "total_increasing" } }, { key: h, name: w, id: I, value: S, unit: D };
    });
    z.clear(), e.some((h) => h.id === Aa) || (Aa = e[0].id);
    const n = e.map((h) => {
      const w = Number(h.value).toLocaleString(void 0, { maximumFractionDigits: h.value < 10 ? 2 : 1 }) + " " + h.unit, S = kf[h.key], D = h.id === Aa;
      return z.set(h.id, { name: h.name, text: w, icon: S }), '<div class="activityRow tap' + (D ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + oe(h.id) + '" aria-pressed="' + D + '" aria-label="' + oe(h.name + ", " + w) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + ln("", S, h.name) + '></div><div><div class="activityRowName">' + oe(h.name) + '</div><div class="activityRowMeta">' + oe(w) + "</div></div></div>";
    }), o = e.find((h) => h.id === Aa), c = (((v = Pt().opts.energy) == null ? void 0 : v.graph) || "above") === "below", p = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + oe(o.id) + '" role="img" aria-label="' + oe(o.name) + ', last 24 hours"></svg></div>';
    return be("dash:energy", 0, "Energy today", n, p, Wr().some((h) => h.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (c ? "" : " graphAbove"));
  }
  function Rs(e) {
    const n = M.querySelector(".tfDash-energy"), o = n == null ? void 0 : n.querySelector(".tfDashGraph svg");
    !o || e === Aa || (Aa = e, n.querySelectorAll("[data-energy-pick]").forEach((c) => {
      const p = c.dataset.energyPick === e;
      c.classList.toggle("picked", p), c.setAttribute("aria-pressed", String(p));
    }), o.dataset.graph = e, o.dataset.drawn = "", vn.set("dash:energy", lr()), No(!0));
  }
  const cr = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, dr = /* @__PURE__ */ new Map();
  async function ur(e) {
    const n = /* @__PURE__ */ new Date(), o = new Date(n).setHours(0, 0, 0, 0), c = n.getHours(), p = n.getMinutes() / 60, v = Array.from({ length: 24 }, (w, S) => S <= c ? 0 : null);
    if (!e.ids) {
      const w = cr[e.key] || cr.electricity, S = w.map((I, N) => N < c ? I : N === c ? I * p : 0), D = S.reduce((I, N) => I + N, 0) || 1;
      return v.map((I, N) => I == null ? null : e.value * S[N] / D);
    }
    const h = dr.get(e.id);
    if (h && h.day === o && Date.now() - h.at < 5 * 60 * 1e3) return h.hours;
    try {
      const w = await R({ type: "recorder/statistics_during_period", start_time: new Date(o).toISOString(), end_time: n.toISOString(), statistic_ids: e.ids, period: "hour", types: ["change"] });
      e.ids.forEach((I) => ((w == null ? void 0 : w[I]) || []).forEach((N) => {
        const ae = typeof N.start == "number" ? N.start : Date.parse(N.start), ye = new Date(ae).getHours();
        ae >= o && ye < c && (v[ye] += Number(N.change) || 0);
      }));
      const S = new Date(n).setMinutes(0, 0, 0), D = await Promise.all(e.ids.map((I) => Promise.resolve(R({ type: "recorder/statistic_during_period", statistic_id: I, fixed_period: { start_time: new Date(S).toISOString(), end_time: n.toISOString() }, types: ["change"] })).then((N) => Number(N == null ? void 0 : N.change) || 0, () => 0)));
      v[c] = D.reduce((I, N) => I + N, 0);
    } catch {
    }
    return dr.set(e.id, { at: Date.now(), day: o, hours: v }), v;
  }
  async function Ns(e, n) {
    const o = await ur(n);
    if (!e.isConnected) return;
    const c = Math.max(120, e.clientWidth || 260), p = Math.max(60, e.clientHeight || 130), v = 18, h = p - 18, w = c / 24, S = w * 0.72, D = (/* @__PURE__ */ new Date()).getHours(), I = o.map((xe) => xe ?? 0), N = Math.max(0, ...I), ae = (xe) => h - (N > 0 ? xe / N * (h - v) : 0), ye = (xe) => xe.toLocaleString(void 0, { maximumFractionDigits: xe < 10 ? 2 : 1 }) + " " + n.unit, ke = (xe) => String(xe).padStart(2, "0") + ":00", K = N > 0 ? I.indexOf(N) : -1;
    e.setAttribute("viewBox", "0 0 " + c + " " + p), e.setAttribute("aria-label", n.name + " today by the hour: " + ye(n.value) + (K >= 0 ? ", most " + ye(N) + " at " + ke(K) : "")), e.innerHTML = [v, (v + h) / 2, h].map((xe) => '<line x1="0" x2="' + c + '" y1="' + xe + '" y2="' + xe + '" stroke="var(--line)" stroke-width="1"/>').join("") + o.map((xe, L) => xe > 0 ? '<rect x="' + (L * w + (w - S) / 2).toFixed(1) + '" y="' + ae(xe).toFixed(1) + '" width="' + S.toFixed(1) + '" height="' + (h - ae(xe)).toFixed(1) + '" rx="2" fill="' + (L === D ? "var(--primary)" : "var(--text)") + '"' + (L === D ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((xe) => '<text x="' + (xe * w).toFixed(1) + '" y="' + (p - 3) + '">' + String(xe).padStart(2, "0") + "</text>").join("") + (K >= 0 ? '<text x="0" y="11">Most: ' + oe(ye(N)) + " at " + ke(K) + "</text>" : "");
  }
  function Ol(e) {
    var n;
    (n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches || e.querySelectorAll("rect").forEach((o, c) => o.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: c * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Nn(e) {
    var p;
    if ((p = window.matchMedia) != null && p.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [n, o] = e.querySelectorAll("path");
    if (!(o != null && o.getTotalLength)) return;
    const c = o.getTotalLength();
    o.animate([{ strokeDasharray: c, strokeDashoffset: c }, { strokeDasharray: c, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), n == null || n.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let to = null, To = 0;
  const Gr = (e) => !e.startsWith("light.") || Mf.includes((At.get(e) || "").toLowerCase()), Ur = () => Math.max(2, pa((M == null ? void 0 : M.clientWidth) || 0).n), ql = (e) => {
    const n = Mi(e), o = n.sections.findIndex(Boolean);
    return o < 0 ? [] : [n.parts[o]];
  };
  function Bs(e) {
    const n = Pt().tiles;
    if (n) return n.filter((c) => x[c]);
    if (!to) {
      const c = (p) => {
        var v;
        return (((v = x[p]) == null ? void 0 : v.state) === "on" ? 1e6 : 0) + (ct[p] || 0);
      };
      to = {
        lights: ot.rooms.flatMap((p) => p.lights).filter((p) => {
          var v;
          return Gr(p) && ((v = x[p]) == null ? void 0 : v.state) !== "unavailable";
        }).sort((p, v) => c(v) - c(p) || De(p).localeCompare(De(v))),
        climates: ot.rooms.flatMap((p) => p.actions.filter((v) => v.startsWith("climate.")))
      };
    }
    const o = to.climates.filter((c) => x[c]).slice(0, e > 3 ? 2 : 1);
    return [...to.lights.filter((c) => x[c]).slice(0, Math.max(0, e - o.length)), ...o];
  }
  const Ri = (e, n, o, c) => (p) => '<section class="card tfCard tfDashCard ' + e + '" data-tf data-k="' + n + '" aria-label="' + o + '">' + (c ? '<div class="activityHeader">' + (n === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + o + "</button>" : '<div class="activityTitle">' + o + "</div>") + "</div>" : "") + '<div class="activityRows">' + p + "</div></section>";
  function Ps(e, n) {
    var v, h;
    e.dash = !0, e.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + oe(((h = (v = i()) == null ? void 0 : v.config) == null ? void 0 : h.location_name) || "Home") + "</h1>" }), n.length && e.push({ key: "sums", wrap: (w) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Ri("tfDash-bar", "sums-bar", "Summaries", !1)(w).replace(" data-tf", "") + "</div>", tiles: n.map((w) => ({ key: "sum:" + w.key, html: jr(w) })) }), wa.length && e.push({ key: "areas", html: Ts(0) });
    const o = Qa();
    o.length && e.push({ key: "favs", wrap: Ri("tfDash-favs", "favs", "Favourites", !0), tiles: o.map((w) => ({ key: "fav:" + w, html: qr(w, { area: !0 }) })) });
    const c = sr();
    e.push({ key: "dash:act", html: be("dash:act", 0, "Activity", c.length ? c.map(Ta) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), e.push({ key: "dash:energy", html: lr() });
    const p = Ur();
    return To = p, Bs(p >= 3 ? p : p * 2).forEach((w) => e.push({
      key: "dash:tile:" + w,
      wrap: (S) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + oe(w) + '">' + S + "</div>",
      tiles: [{ key: w, html: ko(w, !1, ql(w)) }]
    })), _i(), Qo(), e;
  }
  const no = 252, Qt = 16, za = 200, Ni = Math.round(no * 1.25), ei = 60, Lo = ei + Qt, Ao = 5, Is = 3, Hs = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average" }, _o = ["wx", "favs", "act", "energy", "avg"], Wl = { wx: Ao, areas: Ao, favs: Ao, act: Ao, energy: 4, avg: 4 }, Fs = 3, pr = 94, ao = (e) => {
    var n;
    return !!((n = Pt().opts[e]) != null && n.tall);
  }, Bn = (e) => Hs[e] || De(e), Va = 409, ti = 128;
  let an = !1, _t = null, Pn = null, _a = !1, oo = /* @__PURE__ */ new Map(), hr = 0, xa = 0;
  const $n = ["title", "sums"], pa = (e) => {
    const n = Math.max(1, Math.floor((e + Qt) / (za + Qt)));
    return { n, w: Math.max(1, Math.min(Ni, Math.floor((e - (n - 1) * Qt) / n))) };
  }, Pt = () => ({ cells: {}, spans: {}, hidden: [], opts: {}, ...j.dash || {} });
  function Ga(e) {
    j = { ...j, dash: e }, Gn();
  }
  function Bi() {
    const e = (n) => M.querySelector(n);
    return [
      ["title", e(".tfDashTitle"), "full"],
      ["sums", e(".tfDashBarRow"), "full"],
      ["wx", bn.wx, 2],
      ["areas", e(".tfAreas"), "areas"],
      ["favs", e(".tfDash-favs"), 2],
      ["act", e(".tfDash-act"), 2],
      ["energy", e(".tfDash-energy"), 2],
      ["avg", bn.avg, 2],
      ...[...M.querySelectorAll(".tfDashTiles > [data-k]")].map((n) => [n.dataset.k, n, 1, !0])
    ].filter(([, n]) => n == null ? void 0 : n.isConnected).map(([n, o, c, p = !1]) => ({ key: n, el: o, span: c, tile: p }));
  }
  const Yr = (e, n, o) => e.span === "full" ? n : e.span === "areas" ? Math.min(n, Math.ceil((Va + Math.max(0, wa.length - 1) * (ti + Qt) + Qt) / (o + Qt))) : Math.min(n, Pt().spans[e.key] ?? e.span), Zr = (e) => Wl[e.key] ?? (e.el.classList.contains("tfDac") ? ao(e.key) ? Ao : Fs : null);
  function Os(e, n, o = null) {
    const c = Pt().cells, p = e.every((w) => !c[w.key] || c[w.key].col + w.cols <= n), v = (w) => c[w.key] || { row: 1e9, col: 0 }, h = () => {
      const w = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Map(), D = (K, xe, L, ie) => {
        for (let Ne = xe; Ne < xe + ie; Ne++) for (let rt = K; rt < K + L; rt++) if (w.has(rt + "," + Ne)) return !1;
        return !0;
      }, I = (K, xe, L) => {
        for (let ie = L; ie < L + K.rows; ie++) for (let Ne = xe; Ne < xe + K.cols; Ne++) w.add(Ne + "," + ie);
        S.set(K.key, { col: xe, row: L, cols: K.cols, rows: K.rows });
      }, N = (K, xe, L) => {
        for (xe = Math.max(0, Math.min(n - K.cols, xe)), L = Math.max(0, L); !D(xe, L, K.cols, K.rows); ) L++;
        I(K, xe, L);
      }, ae = (K) => {
        for (let xe = 0; ; xe++) for (let L = 0; L <= n - K.cols; L++) if (D(L, xe, K.cols, K.rows)) {
          I(K, L, xe);
          return;
        }
      };
      o && N(o, _t.col, _t.row);
      const ye = e.filter((K) => K !== o), ke = (K, xe) => v(K).row - v(xe).row || v(K).col - v(xe).col;
      return p ? (ye.filter((K) => c[K.key]).sort(ke).forEach((K) => N(K, c[K.key].col, c[K.key].row)), ye.filter((K) => !c[K.key]).forEach(ae), S) : ([...ye].sort(ke).forEach(ae), S);
    };
    for (let w = 0; ; w++) {
      const S = h();
      if (w === 3) return S;
      const D = e.filter((N) => N.tile && !ao(N.key)).map((N) => ({ it: N, p: S.get(N.key) })).sort((N, ae) => N.p.row - ae.p.row || N.p.col - ae.p.col);
      let I = !1;
      for (let N = 0, ae; N < D.length; N = ae) {
        for (ae = N + 1; ae < D.length && D[ae].p.row === D[N].p.row && D[ae].p.col === D[ae - 1].p.col + 1; ae++) ;
        const ye = D.slice(N, ae), ke = Math.max(...ye.map((K) => K.it.rows));
        ye.forEach((K) => {
          K.it.rows < ke && (K.it.rows = ke, I = !0);
        });
      }
      if (!I) return S;
    }
  }
  function Pi() {
    const e = Pt(), n = new Set(e.hidden), o = Bi().filter((h) => !$n.includes(h.key));
    let c = oo;
    if (!c.size) {
      const h = e.pegs || 4, w = o.filter((S) => !n.has(S.key));
      w.forEach((S) => {
        S.cols = Yr(S, h, no), S.rows = Zr(S) ?? 2;
      }), c = Os(w, h);
    }
    const p = (h) => !n.has(h.key) && c.get(h.key) || { row: 1e9, col: 0 };
    o.sort((h, w) => p(h).row - p(w).row || p(h).col - p(w).col);
    const v = (e.phone || []).map((h) => o.find((w) => w.key === h && !n.has(h))).filter(Boolean);
    return [...v, ...o.filter((h) => !v.includes(h))];
  }
  const Ii = () => {
    const e = Pi();
    e.forEach((n, o) => n.el.style.setProperty("--o", String(3 + o))), Ea([...Bi().filter((n) => $n.includes(n.key)), ...e].map((n) => n.el));
  };
  function Ea(e) {
    if (_t) return;
    const n = a.activeElement;
    let o = null;
    for (const c of new Set(e.map((p) => {
      for (; p && p.parentElement !== M; ) p = p.parentElement;
      return p;
    }).filter(Boolean))) {
      const p = o ? o.nextSibling : M.querySelector(":scope > [data-tf]");
      if (c !== p)
        try {
          M.moveBefore ? M.moveBefore(c, p) : M.insertBefore(c, p);
        } catch {
          M.insertBefore(c, p);
        }
      o = c;
    }
    n && n !== a.activeElement && n.isConnected && n.focus({ preventScroll: !0 });
  }
  const io = (e, n) => Ga({ ...e, cells: n, pegs: pa(M.clientWidth).n });
  function Ln() {
    var xe;
    if (!b || !M) return;
    const e = M.clientWidth, { n, w: o } = pa(e), c = f.classList.contains("tfDash") && e >= 2 * no + Qt;
    f.classList.toggle("tfBoard", c), f.classList.toggle("tfEditing", c && an);
    const p = d("dashEditNav");
    p && (p.hidden = !c, p.classList.toggle("active", an), p.setAttribute("aria-pressed", String(an)), p.setAttribute("aria-label", an ? "Done editing" : "Edit the dashboard"), p.title = an ? "Done" : "Edit", p.innerHTML = an ? mf : Gd);
    const v = c ? Bi() : [];
    if (!c) {
      M.style.height = "", M.querySelectorAll(".tfBoardItem").forEach((L) => {
        L.classList.remove("tfBoardItem", "tfBoardHidden"), L.style.left = L.style.top = L.style.width = L.style.height = "";
      }), (xe = M.querySelector(".tfDash-act > .activityRows")) == null || xe.style.removeProperty("max-height"), fr(!1), f.classList.contains("tfDash") && Ii(), cn();
      return;
    }
    M.style.setProperty("--peg-w", o + "px");
    const h = new Set(Pt().hidden), w = o + Qt;
    _t != null && _t.fromTray && h.delete(_t.key), v.forEach((L) => L.el.classList.toggle("tfBoardHidden", h.has(L.key)));
    const S = v.filter((L) => !h.has(L.key) && getComputedStyle(L.el).display !== "none");
    let D = 0;
    S.filter((L) => $n.includes(L.key)).forEach((L) => {
      L.el.classList.add("tfBoardItem"), Object.assign(L.el.style, { width: e + "px", height: "", left: "0px", top: D + "px" });
      const ie = L.key === "sums" && L.el.querySelector(".tfDash-bar"), Ne = ie ? ie.querySelectorAll(".activityRow").length : 0;
      ie && (ie.style.maxWidth = "none");
      for (let rt = 1; ie && rt <= Ne && (ie.style.setProperty("--bar-cols", String(Math.ceil(Ne / rt))), !(ie.offsetWidth <= e)); rt++)
        ;
      ie && (ie.style.maxWidth = ""), D += L.el.offsetHeight + Qt;
    }), xa = D;
    const I = S.filter((L) => !$n.includes(L.key));
    I.forEach((L) => {
      L.cols = Yr(L, n, o), L.el.classList.add("tfBoardItem"), L.el.style.width = (L.cols === n ? e : L.cols * o + (L.cols - 1) * Qt) + "px", L.el.style.height = "", L.rows = Zr(L) ?? Math.max(1, Math.ceil((L.el.offsetHeight + Qt - 6) / Lo));
    });
    const N = _t && I.find((L) => L.key === _t.key), ae = Os(I, n, N);
    ae.forEach((L) => Object.assign(L, { x: L.cols === n ? 0 : L.col * w, y: xa + L.row * Lo, w: L.cols === n ? e : L.cols * o + (L.cols - 1) * Qt, h: L.rows * Lo - Qt })), I.forEach((L) => {
      const ie = ae.get(L.key);
      L.el.style.height = ie.h + "px", L.el.classList.contains("tfDac") && L.el.style.setProperty("--tf-dac-pad", ie.h - pr + "px"), !(L === N && !_t.fromTray) && (L.el.style.left = ie.x + "px", L.el.style.top = ie.y + "px");
    }), oo = ae, Ea([...S.filter((L) => $n.includes(L.key)), ...I.slice().sort((L, ie) => ae.get(L.key).row - ae.get(ie.key).row || ae.get(L.key).col - ae.get(ie.key).col)].map((L) => L.el));
    const ye = ae.get("act"), ke = ye && M.querySelector(".tfDash-act > .activityRows");
    ke && (ke.style.maxHeight = Math.max(ei, Math.floor((ye.h - ke.offsetTop - 10) / ei) * ei) + "px"), hr = Math.max(0, ...[...ae.values()].map((L) => L.row + L.rows));
    let K = xa + hr * Lo - Qt;
    K = fr(an, I, ae, K, n, o), M.style.height = K + "px", requestAnimationFrame(() => f.classList.add("tfBoardReady")), v.forEach((L) => Eo.observe(L.el)), No(), cn();
  }
  const Hi = () => {
    _a || (_a = !0, requestAnimationFrame(() => {
      _a = !1, Ln();
    }));
  }, Eo = new ResizeObserver(() => {
    _t || Hi();
  });
  function fr(e, n = [], o = /* @__PURE__ */ new Map(), c = 0, p = 1, v = no) {
    M.querySelectorAll(".tfEditChips").forEach((I) => {
      (!e || !I.closest(".tfBoardItem")) && I.remove();
    }), M.querySelectorAll(".tfFavHides").forEach((I) => I.remove()), M.querySelectorAll(".tfBoardItem").forEach((I) => [...I.children].forEach((N) => {
      N.classList.contains("tfEditChips") || N.toggleAttribute("inert", e);
    }));
    let h = M.querySelector(".tfBoardCells"), w = M.querySelector(".tfBoardLand");
    if (!e)
      return h == null || h.remove(), w == null || w.remove(), ha(), c;
    const S = hr + Is;
    if (h || (h = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), h.setAttribute("aria-hidden", "true"), M.prepend(h)), h.style.top = xa + "px", h.dataset.size !== p + "x" + S + "x" + v && (h.dataset.size = p + "x" + S + "x" + v, h.style.gridTemplateColumns = "repeat(" + p + "," + v + "px)", h.innerHTML = "<i></i>".repeat(p * S)), c = Math.max(c, xa + S * Lo - Qt), n.forEach((I) => {
      const N = I.el;
      !N || N.querySelector(":scope > .tfEditChips") || N.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + kc + '</span><button class="tfEditChip" type="button" data-board-more="' + oe(I.key) + '" aria-label="' + oe(Bn(I.key)) + ' options" aria-haspopup="menu">' + hf + "</button></div>");
    }), _t && o.has(_t.key)) {
      w || (w = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), M.appendChild(w));
      const I = o.get(_t.key);
      Object.assign(w.style, { left: I.x + "px", top: I.y + "px", width: I.w + "px", height: I.h + "px" });
    } else w == null || w.remove();
    const D = M.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (D) {
      const I = D.getBoundingClientRect();
      D.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...D.querySelectorAll('[data-k^="fav:"]')].map((N) => {
        const ae = N.getBoundingClientRect(), ye = N.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + oe(ye) + '" aria-label="Hide ' + oe(De(ye)) + ' from the dashboard" style="left:' + Math.round(ae.right - I.left - 42) + "px;top:" + Math.round(ae.top - I.top + (ae.height - 32) / 2) + 'px">' + jd + "</button>";
      }).join("") + "</div>");
    }
    return c;
  }
  let Kr = "";
  function $r(e) {
    an = e, e || (_t = null, On = qn = !1, ha()), Ln(), e ? Kr = JSON.stringify(j) : Kr && JSON.stringify(j) !== Kr && fa("Changes saved");
  }
  function jl(e, n) {
    var ae, ye;
    ha();
    const o = oo.get(e), { n: c } = pa(M.clientWidth), p = Pt(), v = p.spans[e] ?? 2;
    if (!o) return;
    const h = o.cols >= c, w = (ke, K, xe) => '<button type="button" role="menuitem" data-board-act="' + ke + '"' + (xe ? " disabled" : "") + ">" + K + "</button>", S = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    S.setAttribute("role", "menu"), S.setAttribute("aria-label", Bn(e) + " options");
    const D = M.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]'), I = D == null ? void 0 : D.classList.contains("tfDac");
    S.innerHTML = (_o.includes(e) ? w("size", v === 1 ? "Card size" : "Tile size") : "") + (I ? w("tall", ao(e) ? "Make shorter" : "Make taller") : "") + (e === "energy" ? w("graph", (((ae = p.opts.energy) == null ? void 0 : ae.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + w("left", "Move left", h || o.col === 0) + w("right", "Move right", h || o.col + o.cols >= c) + w("up", "Move up", o.row <= 0) + w("down", "Move down") + (D ? w("remove", "Remove") : w("hide", "Hide")), M.appendChild(S);
    const N = Math.min(o.x + o.w - S.offsetWidth, M.clientWidth - S.offsetWidth);
    Object.assign(S.style, { left: Math.max(0, N) + "px", top: o.y + 28 + "px" }), Pn = { key: e, menu: S, opener: n }, (ye = S.querySelector("button:not([disabled])")) == null || ye.focus();
  }
  function ha(e) {
    if (!Pn) return;
    const { menu: n, opener: o } = Pn;
    Pn = null, n.remove(), e && (o == null || o.focus());
  }
  const on = () => Object.fromEntries([...oo].map(([e, n]) => [e, { col: n.col, row: n.row }]));
  function Xn(e, n) {
    var h, w;
    if (n === "remove") {
      ha(), gr(e);
      return;
    }
    const o = j, c = Pt(), p = on(), v = p[e] || { col: 0, row: 0 };
    n === "size" && (c.spans = { ...c.spans, [e]: (c.spans[e] ?? 2) === 1 ? 2 : 1 }), n === "tall" && (c.opts = { ...c.opts, [e]: { ...c.opts[e] || {}, tall: !ao(e) } }), n === "graph" && (c.opts = { ...c.opts, energy: { ...c.opts.energy || {}, graph: (((h = c.opts.energy) == null ? void 0 : h.graph) || "above") === "above" ? "below" : "above" } }), n === "left" && (p[e] = { ...v, col: v.col - 1 }), n === "right" && (p[e] = { ...v, col: v.col + 1 }), n === "up" && (p[e] = { ...v, row: v.row - 1 }), n === "down" && (p[e] = { ...v, row: v.row + 1 }), n === "hide" && (c.hidden = [.../* @__PURE__ */ new Set([...c.hidden, e])]), ["left", "right", "up", "down"].includes(n) && (_t = { key: e, col: p[e].col, row: p[e].row }), io(c, p), _t && (Ln(), _t = null, io(Pt(), on())), ha(), n === "graph" && (vn.delete("dash:energy"), dn()), Ln(), n !== "hide" ? (w = M.querySelector('[data-board-more="' + CSS.escape(e) + '"]')) == null || w.focus() : fa(Bn(e) + " hidden", Oi(o));
  }
  function Xr(e) {
    const n = Pt();
    Ga({ ...n, hidden: n.hidden.filter((o) => o !== e) }), Ln(), fa(Bn(e) + " put back");
  }
  const Jr = () => Pt().tiles || [...M.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => e.dataset.k).filter((e) => !Pt().hidden.includes(e));
  function mr(e, n) {
    const o = Pt();
    io({ ...o, tiles: e, hidden: o.hidden.filter((c) => !c.includes(".")) }, n), dn(), cn();
  }
  const Qr = (e) => {
    mr([...Jr().filter((n) => n !== e), e], on()), fa(De(e) + " added"), oi(e);
  }, gr = (e) => {
    const n = j, o = on();
    delete o[e], mr(Jr().filter((c) => c !== e), o), fa(De(e) + " removed", Oi(n));
  };
  let vr = 0;
  function fa(e, n = null) {
    var h;
    const o = d("toast");
    if (!o) return;
    if (o.replaceChildren(Object.assign(document.createElement("span"), { textContent: e })), n) {
      const w = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      w.addEventListener("click", () => {
        clearTimeout(vr), o.classList.remove("show", "withAction"), n();
      }), o.appendChild(w);
    }
    const c = f.getBoundingClientRect(), p = (h = a.querySelector(".bottomNav")) == null ? void 0 : h.getBoundingClientRect(), v = Ht.classList.contains("open") && !ka ? Math.min(c.right, Ht.getBoundingClientRect().left) : c.right;
    o.style.left = (c.left + v) / 2 + "px", o.style.bottom = (p != null && p.height ? window.innerHeight - p.top + 12 : 26) + "px", o.classList.add("tfToast", "show"), o.classList.toggle("withAction", !!n), clearTimeout(vr), vr = setTimeout(() => o.classList.remove("show", "withAction"), n ? 5e3 : 2200);
  }
  const zl = 700, Vl = 1e3, In = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  In.setAttribute("role", "tooltip"), In.setAttribute("aria-hidden", "true"), f.appendChild(In);
  let Da = null, Fn = 0, ro = 0, ni = -1 / 0;
  const es = (e) => {
    if (e.nodeType !== 1) return !1;
    const n = getComputedStyle(e);
    return n.textOverflow === "ellipsis" && e.scrollWidth > e.clientWidth + 1 || n.webkitLineClamp !== "none" && e.scrollHeight > e.clientHeight + 1;
  }, qs = (e) => {
    for (let n = e; n && n !== f; n = n.parentElement) if (es(n)) return n;
    return null;
  };
  function Ws(e, n) {
    clearTimeout(Fn), clearTimeout(ro);
    const o = () => {
      if (!e.isConnected) return;
      Da = e, In.textContent = n, In.hidden = !1;
      const c = e.getBoundingClientRect(), p = In.getBoundingClientRect(), v = c.top - p.height - 8 >= 8 ? c.top - p.height - 8 : c.bottom + 8;
      In.style.left = Math.max(8, Math.min(window.innerWidth - p.width - 8, c.left + c.width / 2 - p.width / 2)) + "px", In.style.top = v + "px";
    };
    !In.hidden || performance.now() - ni < Vl ? o() : Fn = setTimeout(o, zl);
  }
  function ai() {
    clearTimeout(Fn), clearTimeout(ro), In.hidden || (ni = performance.now()), In.hidden = !0, Da = null;
  }
  a.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    if (In.contains(e.target)) {
      clearTimeout(ro);
      return;
    }
    const n = qs(e.target);
    if (n && ht.names === "scroll" && n.matches(br)) {
      ya(n);
      return;
    }
    if (n) {
      n !== Da ? Ws(n, n.textContent.trim()) : clearTimeout(ro);
      return;
    }
    clearTimeout(Fn), clearTimeout(ro), ro = setTimeout(ai, 120);
  }), a.addEventListener("focusin", (e) => {
    var c;
    const n = e.target;
    if (!((c = n.matches) != null && c.call(n, ":focus-visible"))) return;
    let o = [n, ...n.querySelectorAll("*")].filter(es);
    ht.names === "scroll" && (o.filter((p) => p.matches(br)).forEach(ya), o = o.filter((p) => !p.matches(br))), o.length && Ws(n, o.map((p) => p.textContent.trim()).join(" · "));
  }), a.addEventListener("focusout", (e) => {
    e.target === Da && ai();
  }), a.addEventListener("keydown", (e) => {
    e.key === "Escape" && !In.hidden && (e.stopPropagation(), ai());
  }, !0), window.addEventListener("scroll", () => {
    (!In.hidden || Fn) && ai();
  }, { capture: !0, passive: !0 });
  const br = ".activityRowName,.activityRowMeta", Fi = /* @__PURE__ */ new WeakSet();
  function ya(e) {
    var v;
    if (ht.names !== "scroll" || Fi.has(e) || (v = window.matchMedia) != null && v.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const n = e.scrollWidth - e.clientWidth;
    if (n < 2) return;
    const o = n / 30 * 1e3, c = 600 + o + 1e3 + o;
    Fi.add(e), e.style.textOverflow = "clip";
    const p = e.animate([
      { textIndent: "0px", offset: 0 },
      { textIndent: "0px", offset: 600 / c, easing: "ease-in-out" },
      { textIndent: -n + "px", offset: (600 + o) / c },
      { textIndent: -n + "px", offset: (1600 + o) / c, easing: "ease-in-out" },
      { textIndent: "0px", offset: 1 }
    ], { duration: c });
    p.onfinish = p.oncancel = () => {
      e.style.textOverflow = "", Fi.delete(e);
    };
  }
  const js = new IntersectionObserver((e) => e.forEach((n) => {
    n.isIntersecting && (js.unobserve(n.target), ya(n.target));
  }), { threshold: 1 });
  let ts = !1;
  new MutationObserver(() => {
    ts || ht.names !== "scroll" || (ts = !0, setTimeout(() => {
      ts = !1, a.querySelectorAll(br).forEach((e) => {
        !e.dataset.glided && es(e) && (e.dataset.glided = "1", js.observe(e));
      });
    }, 300));
  }).observe(a, { childList: !0, subtree: !0 });
  const Oi = (e) => () => {
    j = e, Gn(), dn(), Ln(), cn();
  };
  function oi(e) {
    const n = () => M.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]');
    setTimeout(() => {
      var h;
      const o = n();
      if (!o) return;
      const c = (h = window.matchMedia) == null ? void 0 : h.call(window, "(prefers-reduced-motion: reduce)").matches, p = o.getBoundingClientRect();
      (p.top < 0 || p.bottom > window.innerHeight) && o.scrollIntoView({ behavior: c ? "auto" : "smooth", block: "center" });
      const v = (w) => "0 0 0 4px color-mix(in srgb,var(--primary) " + w + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + w + "%,transparent)";
      o.animate([{ boxShadow: v(55) }, { boxShadow: v(0) }], { duration: 1500, easing: c ? "steps(1, end)" : "ease-out" });
    }, Gl(e) ? 260 : 0);
  }
  function Gl(e) {
    const n = oo.get(e);
    if (!n || !Ht.classList.contains("open") || ka) return !1;
    const { n: o, w: c } = pa(M.clientWidth), p = Ht.getBoundingClientRect().left - M.getBoundingClientRect().left, v = (S) => S * (c + Qt) + n.cols * c + (n.cols - 1) * Qt <= p;
    if (v(n.col)) return !1;
    const h = /* @__PURE__ */ new Set();
    oo.forEach((S, D) => {
      if (D !== e) for (let I = S.row; I < S.row + S.rows; I++) for (let N = S.col; N < S.col + S.cols; N++) h.add(N + "," + I);
    });
    const w = (S, D) => {
      for (let I = D; I < D + n.rows; I++) for (let N = S; N < S + n.cols; N++) if (h.has(N + "," + I)) return !1;
      return !0;
    };
    for (let S = 0; S <= hr; S++) for (let D = 0; D + n.cols <= o && v(D); D++)
      if (w(D, S))
        return io(Pt(), { ...on(), [e]: { col: D, row: S } }), Ln(), !0;
    return !1;
  }
  const ii = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Ht = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Ht.setAttribute("aria-label", "Edit the dashboard"), Ht.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', f.appendChild(Ht);
  let ka = !1, On = !1, qn = !1, xt = null, Wn = !1;
  const ri = {}, so = (e, n) => {
    if (ri[e] === n) return;
    ri[e] = n;
    const o = Ht.querySelector('[data-tray="' + e + '"]');
    o.innerHTML = n, Zn(o);
  }, An = (e, n) => '<span class="tfTrayName"><span class="activityRowName">' + oe(De(e)) + '</span><span class="activityRowMeta">' + oe(n) + "</span></span>", ns = (e, n, o) => '<li class="tfTrayFav' + (n ? " off" : "") + '" data-tray-fav="' + oe(e) + '"><span class="tfTrayGrip" aria-hidden="true">' + kc + '</span><span class="tfIcon"' + ln(e, Sa(e)) + "></span>" + An(e, n ? "Hidden" + (At.get(e) ? " · " + At.get(e) : "") : At.get(e) || zt(e)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + oe(e) + '" aria-pressed="' + !n + '" aria-label="' + (n ? "Show " : "Hide ") + oe(De(e)) + ' on the dashboard">' + (n ? jd : ff) + "</button>" + (o ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + oe(e) + '" aria-label="Remove ' + oe(De(e)) + ' from favourites">' + zd + "</button>" : "<span></span>") + "</li>";
  function as(e, n, o, c) {
    const p = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(x).filter((h) => n(h) && !o.has(h) && x[h].state !== "unavailable").filter((h) => {
      const w = (De(h) + " " + (At.get(h) || "") + " " + h).toLowerCase();
      return p.every((S) => w.includes(S));
    }).sort((h, w) => (At.get(h) || "~").localeCompare(At.get(w) || "~") || De(h).localeCompare(De(w))).slice(0, 40).map((h) => '<li><button class="tfTrayPickItem" type="button" ' + c + '="' + oe(h) + '"><span class="tfIcon"' + ln(h, Sa(h)) + "></span>" + An(h, At.get(h) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function cn() {
    const e = an && f.classList.contains("tfBoard");
    if (Ht.classList.toggle("open", e), Ht.classList.toggle("tucked", e && ka), Ht.toggleAttribute("inert", !e), e || (Wn = !1), Us(), !e) return;
    const n = Ht.querySelector("[data-tray-tuck]");
    n.innerHTML = ka ? Dd : Vd, n.setAttribute("aria-expanded", String(!ka)), n.setAttribute("aria-label", ka ? "Show the edit tray" : "Tuck the edit tray away");
    const o = Pt().hidden.filter((h) => Bi().some((w) => w.key === h));
    so("cards", '<div class="sectionLabel">Hidden cards</div>' + (o.length ? '<div class="tfTrayCards">' + o.map((h) => '<button class="tfTrayCard" type="button" data-tray-card="' + oe(h) + '" aria-label="' + oe(Bn(h)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + kc + "</span>" + oe(Bn(h)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide wait here.</p>')), so("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (Pt().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Wn + '">' + (Wn ? "Hide the phone" : "Show the phone") + "</button>");
    const c = new Set(j.favHidden || []), p = kn(), v = [...p, ...[...c].filter((h) => !p.includes(h) && x[h])];
    so("favs", v.map((h) => ns(h, c.has(h), p.includes(h))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Ht.querySelector('[data-pick="tiles"]').hidden = !qn, Ht.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(qn)), qn && so("tilepick", as(Ht.querySelector("[data-tile-search]").value, (h) => kl.includes(h.split(".")[0]), new Set(Jr()), "data-tile-pick")), Ht.querySelector('[data-pick="favs"]').hidden = !On, Ht.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(On)), On && so("pick", as(Ht.querySelector("[data-fav-search]").value, (h) => ii.test(h), new Set(kn()), "data-fav-pick")), so("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (So() ? " on" : "") + '" type="button" role="switch" aria-checked="' + So() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Do = (e) => {
    j = { ...j, ...e }, Gn(), dn(), cn();
  };
  function zs(e, n) {
    const o = j, c = new Set(j.favHidden || []);
    n ? c.delete(e) : c.add(e), Do({ favHidden: [...c] }), n ? fa(De(e) + " put back") : fa(De(e) + " hidden", Oi(o));
  }
  const Ul = (e) => {
    const n = j;
    Do({ favourites: kn().filter((o) => o !== e), favHidden: (j.favHidden || []).filter((o) => o !== e) }), fa(De(e) + " removed from favourites", Oi(n));
  }, Yl = (e) => {
    Do({ favourites: [...kn().filter((n) => n !== e), e], favHidden: (j.favHidden || []).filter((n) => n !== e) }), fa(De(e) + " added to favourites");
  };
  Ht.addEventListener("click", (e) => {
    var o;
    const n = e.target.closest("button");
    n && (n.hasAttribute("data-tray-done") ? $r(!1) : n.hasAttribute("data-tray-tuck") ? (ka = !ka, cn()) : n.hasAttribute("data-phone-toggle") ? (Wn = !Wn, cn(), Wn && ((o = Hn.querySelector("[data-phone-key]")) == null || o.focus({ preventScroll: !0 }))) : n.dataset.trayCard ? e.detail === 0 && (Xr(n.dataset.trayCard), cn()) : n.dataset.favEye ? zs(n.dataset.favEye, n.getAttribute("aria-pressed") !== "true") : n.dataset.favRemove ? Ul(n.dataset.favRemove) : n.hasAttribute("data-fav-add") ? (On = !On, cn(), On && Ht.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : n.dataset.favPick ? Yl(n.dataset.favPick) : n.hasAttribute("data-tile-add") ? (qn = !qn, cn(), qn && Ht.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : n.dataset.tilePick ? Qr(n.dataset.tilePick) : n.hasAttribute("data-fav-suggest") && Do({ suggest: !So() }));
  }), Ht.addEventListener("input", (e) => {
    e.target.matches("[data-fav-search],[data-tile-search]") && cn();
  }), Ht.addEventListener("keydown", (e) => {
    var o, c;
    const n = !!((c = (o = e.target).closest) != null && c.call(o, '[data-pick="tiles"],[data-tile-add]'));
    e.key !== "Escape" || !(n ? qn : On) || (e.stopPropagation(), n ? qn = !1 : On = !1, cn(), Ht.querySelector(n ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Vs(e, n, o, c) {
    e.preventDefault();
    const p = e.clientX, v = e.clientY;
    let h = null, w = 0;
    const S = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), D = (N) => {
      if (!h) {
        if (Math.hypot(N.clientX - p, N.clientY - v) < 4) return;
        h = n.cloneNode(!0), h.classList.add("tfTrayGhost"), h.style.width = n.offsetWidth + "px", f.appendChild(h);
      }
      h.style.transform = "translate(" + (N.clientX - 24) + "px," + (N.clientY - 24) + "px)";
      const ae = !ka && N.clientX >= Ht.getBoundingClientRect().left;
      if (o === "card") {
        const K = M.getBoundingClientRect(), { w: xe } = pa(M.clientWidth);
        _t = !ae && N.clientX >= K.left && N.clientX <= K.right && N.clientY >= K.top + xa ? { key: c, col: Math.max(0, Math.floor((N.clientX - K.left) / (xe + Qt))), row: Math.max(0, Math.floor((N.clientY - K.top - xa) / Lo)), fromTray: !0 } : null, w || (w = requestAnimationFrame(() => {
          w = 0, Ln();
        }));
        return;
      }
      const ye = M.querySelector(".tfDash-favs"), ke = ye == null ? void 0 : ye.getBoundingClientRect();
      if (xt = null, ke && !ae && N.clientX >= ke.left && N.clientX <= ke.right && N.clientY >= ke.top && N.clientY <= ke.bottom) {
        let K = 1 / 0;
        ye.querySelectorAll('[data-k^="fav:"]').forEach((xe, L) => {
          const ie = xe.getBoundingClientRect(), Ne = Math.hypot(N.clientX - (ie.left + ie.width / 2), N.clientY - (ie.top + ie.height / 2));
          Ne < K && (K = Ne, xt = { i: L, r: ie, after: N.clientX > ie.left + ie.width / 2 });
        }), xt || (xt = { i: 0, r: null, after: !1 });
      }
      xt != null && xt.r ? (S.isConnected || f.appendChild(S), Object.assign(S.style, { left: (xt.after ? xt.r.right : xt.r.left) - 2 + "px", top: xt.r.top + 8 + "px", height: xt.r.height - 16 + "px" })) : S.remove();
    }, I = () => {
      if (window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", I), window.removeEventListener("pointercancel", I), cancelAnimationFrame(w), h == null || h.remove(), S.remove(), o === "card") {
        if (!h) Xr(c);
        else if (_t != null && _t.fromTray) {
          Ln();
          const K = Pt(), xe = on();
          _t = null, io({ ...K, hidden: K.hidden.filter((L) => L !== c) }, xe), fa(Bn(c) + " put back");
        }
        _t = null, Ln(), dn(), cn();
        return;
      }
      if (!xt) return;
      const N = new Set(j.favHidden || []);
      N.delete(c);
      const ae = kn().filter((K) => K !== c), ye = ae.filter((K) => !N.has(K)), ke = ye[Math.min(xt.i + (xt.after ? 1 : 0), ye.length)];
      ae.splice(ke ? ae.indexOf(ke) : ae.length, 0, c), xt = null, Do({ favourites: ae, favHidden: [...N] }), fa(De(c) + " put back");
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", I), window.addEventListener("pointercancel", I);
  }
  const os = { sums: 201, wx: 286, favs: 363, areas: 323, act: 363, energy: 301, avg: 182 }, qi = 140, Wi = 252, Zl = 0.8, Gs = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line" }, Hn = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  Hn.setAttribute("aria-label", "Phone order"), Hn.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + zd + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', f.appendChild(Hn);
  let is = "";
  function Us() {
    var w;
    const e = Wn && an && f.classList.contains("tfBoard") && !ka;
    if (Hn.classList.toggle("open", e), Hn.toggleAttribute("inert", !e), !e) return;
    const n = Pi().filter((S) => !Pt().hidden.includes(S.key)), o = n.length, c = (S) => Math.round(S * Zl * 10) / 10 + "px", p = (S, D) => {
      const I = S.el.classList.contains("tfDac"), N = S.tile ? I ? Wi : qi : os[S.key] || qi;
      return '<button class="tfPhoneBlock' + (S.tile ? " tile" : "") + '" type="button" data-phone-key="' + oe(S.key) + '" style="min-height:' + c(N) + '" aria-label="' + oe(Bn(S.key) + ", " + (D + 1) + " of " + o + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (S.tile ? ln(S.key, Sa(S.key)) : ln(S.key, Gs[S.key])) + '></span><span class="tfPhoneName">' + oe(Bn(S.key)) + "</span></button>";
    }, v = '<div class="tfPhoneTitle">' + oe(((w = M.querySelector(".tfDashTitle")) == null ? void 0 : w.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + c(os.sums) + '"><span class="tfPhoneName">' + oe(Bn("sums")) + "</span></div>" + n.map(p).join("");
    if (Hn.querySelector('[data-phone="note"]').innerHTML = Pt().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", v === is) return;
    is = v;
    const h = Hn.querySelector('[data-phone="list"]');
    h.innerHTML = v, Zn(h);
  }
  function Ys(e, n) {
    var o;
    Ga({ ...Pt(), phone: e }), cn(), n && ((o = Hn.querySelector('[data-phone-key="' + CSS.escape(n) + '"]')) == null || o.focus({ preventScroll: !0 }));
  }
  const lo = () => [...Hn.querySelectorAll("[data-phone-key]")].map((e) => e.dataset.phoneKey);
  function Ro(e, n) {
    e.preventDefault();
    const o = n.parentElement, c = Hn.querySelector(".tfPhoneScreen"), p = lo().join();
    n.classList.add("moving");
    const v = (w) => {
      const S = c.getBoundingClientRect();
      w.clientY > S.bottom - 40 ? c.scrollTop += 12 : w.clientY < S.top + 40 && (c.scrollTop -= 12);
      const D = [...o.querySelectorAll("[data-phone-key]")].find((ae) => {
        const ye = ae.getBoundingClientRect();
        return ae !== n && w.clientX >= ye.left && w.clientX <= ye.right && w.clientY >= ye.top && w.clientY <= ye.bottom;
      });
      if (!D) return;
      const I = D.getBoundingClientRect(), N = D.classList.contains("tile") ? w.clientX < I.left + I.width / 2 : w.clientY < I.top + I.height / 2;
      o.insertBefore(n, N ? D : D.nextSibling);
    }, h = () => {
      window.removeEventListener("pointermove", v), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h), n.classList.remove("moving");
      const w = lo();
      is = "", w.join() !== p ? Ys(w) : Us();
    };
    window.addEventListener("pointermove", v), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  }
  Hn.addEventListener("pointerdown", (e) => {
    const n = e.target.closest("[data-phone-key]");
    n && e.button <= 0 && Ro(e, n);
  }), Hn.addEventListener("click", (e) => {
    var o;
    const n = e.target.closest("button");
    if (n != null && n.hasAttribute("data-phone-close"))
      Wn = !1, cn(), (o = Ht.querySelector("[data-phone-toggle]")) == null || o.focus({ preventScroll: !0 });
    else if (n != null && n.hasAttribute("data-phone-reset")) {
      const { phone: c, ...p } = Pt();
      Ga(p), cn();
    }
  }), Hn.addEventListener("keydown", (e) => {
    var h, w, S, D;
    if (e.key === "Escape") {
      e.stopPropagation(), Wn = !1, cn(), (h = Ht.querySelector("[data-phone-toggle]")) == null || h.focus({ preventScroll: !0 });
      return;
    }
    const n = (D = (S = (w = e.target).closest) == null ? void 0 : S.call(w, "[data-phone-key]")) == null ? void 0 : D.dataset.phoneKey, o = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!n || !o) return;
    e.preventDefault();
    const c = lo(), p = c.indexOf(n), v = p + o;
    v < 0 || v >= c.length || ([c[p], c[v]] = [c[v], c[p]], Ys(c, n));
  });
  function co(e, n) {
    e.preventDefault();
    const o = n.parentElement;
    n.classList.add("moving");
    const c = (v) => {
      const h = [...o.children].find((w) => {
        const S = w.getBoundingClientRect();
        return w !== n && v.clientY >= S.top && v.clientY <= S.bottom;
      });
      if (h) {
        const w = h.getBoundingClientRect();
        o.insertBefore(n, v.clientY < w.top + w.height / 2 ? h : h.nextSibling);
      }
    }, p = () => {
      window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), n.classList.remove("moving");
      const v = new Set(kn());
      ri.favs = null, Do({ favourites: [...o.children].map((h) => h.dataset.trayFav).filter((h) => v.has(h)) });
    };
    window.addEventListener("pointermove", c), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  Ht.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    const n = e.target.closest("[data-tray-card]"), o = e.target.closest(".tfTrayFav");
    n ? Vs(e, n, "card", n.dataset.trayCard) : o && e.target.closest(".tfTrayGrip") ? co(e, o) : o != null && o.classList.contains("off") && !e.target.closest("button") && Vs(e, o, "fav", o.dataset.trayFav);
  });
  function Zs(e) {
    if (!an || e.button !== 0 || e.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const n = e.target.closest(".tfBoardItem"), o = n && Bi().find((N) => N.el === n);
    if (!o || $n.includes(o.key)) return;
    const c = oo.get(o.key), { w: p } = pa(M.clientWidth);
    if (!c) return;
    e.preventDefault(), ha();
    const v = e.clientX, h = e.clientY;
    let w = !1, S = 0;
    const D = (N) => {
      const ae = N.clientX - v, ye = N.clientY - h;
      if (!w) {
        if (Math.hypot(ae, ye) < 4) return;
        w = !0, _t = { key: o.key, col: c.col, row: c.row }, n.classList.add("tfDragging");
      }
      n.style.transform = "translate(" + ae + "px," + ye + "px)", _t.col = Math.round((c.x + ae) / (p + Qt)), _t.row = Math.round((c.y + ye - xa) / Lo), S || (S = requestAnimationFrame(() => {
        S = 0, Ln();
      }));
    }, I = () => {
      window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", I), window.removeEventListener("pointercancel", I), w && (cancelAnimationFrame(S), Ln(), n.classList.remove("tfDragging"), n.style.transform = "", _t = null, io(Pt(), on()), Ln(), dn());
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", I), window.addEventListener("pointercancel", I);
  }
  function No(e = !1) {
    const n = M == null ? void 0 : M.querySelector(".tfDashGraph svg[data-graph]");
    if (!(n != null && n.clientWidth)) return;
    const o = n.dataset.graph + "@" + n.clientWidth + "x" + n.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (n.dataset.drawn === o) return;
    const c = !n.dataset.drawn;
    n.dataset.drawn = o;
    const p = Di.find((v) => v.id === n.dataset.graph);
    p ? Ns(n, p).then(() => {
      (e || c) && Ol(n);
    }) : hs(n.dataset.graph, n).then(() => {
      e && Nn(n);
    });
  }
  function Ks() {
    var w, S, D;
    ot = Ji.model(i()), Ti(), x = ot.states, x[(w = j.sources) == null ? void 0 : w.grid] && (ot.grid = j.sources.grid), x[(S = j.sources) == null ? void 0 : S.alarm] && (ot.security.alarms = [j.sources.alarm]), C.forEach((I, N) => {
      const ae = x[N], ye = (ae == null ? void 0 : ae.attributes) || {};
      if (!ae || Date.now() - I.at > 2 * 60 * 1e3) {
        C.delete(N);
        return;
      }
      I.pos != null && ae.state !== "opening" && ae.state !== "closing" && Math.abs(yn(N) - I.pos) < 1 && delete I.pos, I.tilt != null && Math.abs((ye.current_tilt_position ?? -1) - I.tilt) < 1 && delete I.tilt, I.pos == null && I.tilt == null && C.delete(N);
    });
    const e = [];
    let n = 0;
    const o = Gt();
    wa = o.filter((I) => I.room).map((I) => I.room), wa.some((I) => I.id === we) || (we = ((D = wa[0]) == null ? void 0 : D.id) || null);
    const c = Ce === "weather" ? { key: "weather", name: "Weather" } : Ce && o.find((I) => I.key === Ce);
    if (c || (Ce = null), f.classList.toggle("tfAreaOpen", !!c), f.classList.toggle("tfWeatherOpen", (c == null ? void 0 : c.key) === "weather"), f.classList.toggle("tfDash", !c), At = /* @__PURE__ */ new Map(), ot.rooms.forEach((I) => [...I.actions, ...I.plugs, ...I.readings, ...I.openings, ...I.solar, ...I.plants.flatMap((N) => [N.id, ...N.readings])].forEach((N) => At.set(N, I.name))), !c) return Ps(e, Wr());
    if (e.push({ key: "areahead", html: ji(c, ++n) }), c.key === "weather")
      return e.weather = ++n, e;
    const p = c.ids, v = c.room ? c.room.id : c.key, h = c.room;
    return h != null && h.solar.length && e.push({ key: "energy:" + h.id, html: Ie(h, ++n) }), h && (h.readings.length || h.plugs.length || h.power != null) && e.push({ key: "readings:" + h.id, html: ge(h, ++n) }), h == null || h.plants.forEach((I) => e.push({ key: "plant:" + I.id, html: Le(I, ++n) })), p.length && e.push({ key: "block:" + v, order: ++n, tiles: p.map((I) => ({ key: I, html: ko(I) })) }), e;
  }
  const ji = (e, n) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + n + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Dd + '</button><div class="settingsTitle">' + oe(e.name) + "</div></div>";
  let $s = 0, Bo = null;
  const Xs = (e) => e === "weather" ? bn.wx : M.querySelector(".tfAreas");
  function wr(e) {
    var n, o;
    Ce || ($s = Na().scrollTop, Bo = ((n = Xs(e)) == null ? void 0 : n.getBoundingClientRect().top) ?? null), Ce = e, e.startsWith("room:") && (we = e.slice(5)), Ua(), Na().scrollTop = 0, (o = M.querySelector("[data-area-back]")) == null || o.focus({ preventScroll: !0 });
  }
  let Ra = null;
  function zi(e, n) {
    if (Ra == null || Ra(), n == null) return;
    const o = Na(), c = performance.now() + 1500, p = ["wheel", "touchstart", "pointerdown", "keydown"];
    let v = 0;
    const h = () => {
      cancelAnimationFrame(v), p.forEach((S) => window.removeEventListener(S, h, !0)), Ra = null;
    }, w = () => {
      const S = e();
      if (S != null && S.isConnected) {
        const D = S.getBoundingClientRect().top - n;
        Math.abs(D) > 0.5 && (o.scrollTop += D);
      }
      performance.now() < c ? v = requestAnimationFrame(w) : h();
    };
    p.forEach((S) => window.addEventListener(S, h, { capture: !0, passive: !0 })), Ra = h, w();
  }
  function Vi() {
    var o;
    const e = Ce;
    Ce = null, Ua(), Na().scrollTop = $s, zi(() => Xs(e), Bo);
    const n = e.startsWith("room:") ? M.querySelector('.tfAreaPanel[data-area="' + CSS.escape(e.slice(5)) + '"]') : e === "weather" ? bn.wx.querySelector(".wbOpenPage") : M.querySelector('[data-k="sum:' + CSS.escape(e) + '"]');
    (o = (n == null ? void 0 : n.querySelector("[data-go]")) || n) == null || o.focus({ preventScroll: !0 });
  }
  const rs = (e) => e.wrap ? e.wrap(e.tiles.map((n) => n.html).join(""), e) : '<div class="tfBlock" data-tf data-k="' + oe(e.key) + '" style="order:' + e.order + '"><div class="tfActions">' + e.tiles.map((n) => n.html).join("") + "</div></div>", Po = (e) => e.map((n) => n.key + (n.tiles ? "(" + n.tiles.map((o) => o.key).join(",") + ")" : "")).join(";");
  function Na() {
    for (let e = f.parentElement || f.getRootNode().host; e; e = e.parentElement || e.getRootNode().host) {
      const n = getComputedStyle(e).overflowY;
      if ((n === "auto" || n === "scroll") && e.scrollHeight > e.clientHeight) return e;
    }
    return document.scrollingElement;
  }
  function Jn(e) {
    const n = Na(), o = (w) => {
      const S = w.getBoundingClientRect();
      return S.height && S.bottom > 0 && S.top < window.innerHeight;
    }, c = [...M.children, ...M.querySelectorAll(".tfDashTiles > *")].find((w) => !w.matches(".tfDashTiles") && o(w)), p = c == null ? void 0 : c.dataset.k, v = c == null ? void 0 : c.getBoundingClientRect().top;
    e();
    const h = c != null && c.isConnected ? c : p && M.querySelector('[data-k="' + CSS.escape(p) + '"]');
    h != null && h.isConnected && v != null && (n.scrollTop += h.getBoundingClientRect().top - v);
  }
  function Ua() {
    if (!b || !M) return;
    const e = Ks();
    M.querySelectorAll("[data-tf]").forEach((o) => o.remove()), vn.clear();
    const n = document.createElement("div");
    n.innerHTML = e.map((o) => o.tiles ? rs(o) : o.html).join(""), e.forEach((o) => o.tiles ? o.tiles.forEach((c) => vn.set(c.key, c.html)) : vn.set(o.key, o.html)), En = Po(e), M.append(...n.children), Qi(e.weather), er(), Eo.disconnect(), Ln(), Zn(M), kr(M), nr(M), V(), B && hs(B.id), jn(), Qn(), nl(), requestAnimationFrame(X);
  }
  const ss = (e) => {
    var o;
    const n = a.activeElement && e.contains(a.activeElement) ? a.activeElement : null;
    return n && { label: n.getAttribute("aria-label"), act: (o = n.dataset) == null ? void 0 : o.act };
  }, Gi = (e, n) => {
    var o;
    n && ((o = n.label && e.querySelector('[aria-label="' + CSS.escape(n.label) + '"]') || n.act && e.querySelector('[data-act="' + CSS.escape(n.act) + '"]')) == null || o.focus({ preventScroll: !0 }));
  };
  function Kl(e, n) {
    const o = document.createElement("div");
    o.innerHTML = n;
    const c = o.firstElementChild, p = ss(e);
    e.replaceWith(c), Zn(c), kr(c), nr(c), Gi(c, p);
  }
  function dn() {
    !b || !M || _t || Jn(ls);
  }
  function ls() {
    if (!M.querySelector("[data-tf]")) {
      Ua();
      return;
    }
    const e = Ks();
    if (Po(e) !== En) {
      Ua();
      return;
    }
    const n = (o) => [...Be.keys()].some((c) => {
      const p = c.slice(c.indexOf("|") + 1);
      return o === p || o.endsWith(":" + p);
    });
    e.forEach((o) => (o.tiles || [o]).forEach((c) => {
      if (vn.get(c.key) === c.html || n(c.key)) return;
      const p = M.querySelector('[data-k="' + CSS.escape(c.key) + '"]');
      if (p) {
        if (vn.set(c.key, c.html), B && B.key === c.key && p.querySelector(".tfOpen")) {
          p.querySelector(".tfOpen .activityRowMeta").textContent = le(B.id);
          return;
        }
        Kl(p, c.html), B && B.key === c.key && hs(B.id), c.key.startsWith("energy:") && jn();
      }
    })), Qn(), nl(), Ss(), V(), Ue == null || Ue.update(), tt == null || tt.forEach((o) => o.update()), f.classList.contains("tfDash") && Hi(), requestAnimationFrame(X);
  }
  const si = {
    light: (e) => [["Brightness", e.brightness != null ? Math.round(e.brightness / 2.55) + "%" : null], ["Colour temperature", e.color_temp_kelvin ? Number(e.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", e.color_mode && Ct(e.color_mode)]],
    climate: (e) => [["Current temperature", Ge(e.current_temperature) + " °C"], ["Target", Ge(e.temperature) + " °C"], ["Action", Ct(e.hvac_action)]],
    cover: (e) => [["Position", e.current_position != null ? e.current_position + "% open" : null], ["Tilt", e.current_tilt_position != null ? e.current_tilt_position + "% open" : null]],
    humidifier: (e) => [["Current humidity", e.current_humidity + "%"], ["Target", e.humidity + "%"], ["Mode", Ct(e.mode)]],
    media_player: (e) => [["Title", e.media_title], ["Artist", e.media_artist], ["Volume", e.volume_level != null ? Math.round(e.volume_level * 100) + "%" : null], ["Source", e.source]],
    vacuum: (e) => [["Battery", e.battery_level + "%"], ["Fan speed", Ct(e.fan_speed)], ["Rooms", (e.rooms || []).join(", ") || null]],
    lock: (e) => [["Changed by", e.changed_by]],
    alarm_control_panel: (e) => [["Changed by", e.changed_by]],
    valve: () => [],
    plant: (e) => [["Moisture", e.moisture + "%"], ["Light", Number(e.brightness).toLocaleString() + " lx"], ["Temperature", Ge(e.temperature) + " °C"], ["Fertility", e.conductivity + " µS/cm"], ["Problems", e.problem === "none" ? "None" : Ct(e.problem)]],
    weather: (e) => [["Temperature", e.temperature != null ? e.temperature + " " + (e.temperature_unit || "°C") : null], ["Humidity", e.humidity != null ? e.humidity + "%" : null], ["Wind", e.wind_speed != null ? e.wind_speed + " " + (e.wind_speed_unit || "km/h") : null], ["Pressure", e.pressure != null ? e.pressure + " " + (e.pressure_unit || "hPa") : null]]
  }, cs = (e) => {
    var o;
    const n = (((o = si[e.split(".")[0]]) == null ? void 0 : o.call(si, kt(e))) || []).filter(([, c]) => c != null && c !== "");
    return n.length ? '<div class="tfMoreRows">' + n.map(([c, p]) => '<div class="tfMoreRow"><span>' + oe(c) + "</span><span>" + oe(p) + "</span></div>").join("") + "</div>" : "";
  }, li = (e) => Zi(e) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Js(e, n = {}, o = !1) {
    return '<div class="tfMoreList">' + e.map((c) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + oe(c.name) + '</div><div class="tfMoreTiles' + (o ? " single" : "") + '">' + c.ids.map((p) => qr(p, n)).join("") + "</div></div>").join("") + "</div>";
  }
  const pt = document.createElement("div");
  pt.className = "tfMoreBackdrop", pt.hidden = !0, f.appendChild(pt);
  const ds = (e, n) => {
    for (let o = e; o && o !== pt; o = o.parentElement) {
      const c = getComputedStyle(o).overflowY;
      if ((c === "auto" || c === "scroll") && o.scrollHeight > o.clientHeight + 1 && (n < 0 ? o.scrollTop > 0 : o.scrollTop + o.clientHeight < o.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Mn = null;
  pt.addEventListener("touchstart", (e) => {
    Mn = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: !0 }), pt.addEventListener("touchmove", (e) => {
    var p, v;
    if (!Mn || e.touches.length > 1 || (v = (p = e.target).closest) != null && v.call(p, "input,textarea,select")) return;
    const n = e.touches[0], o = Mn.x - n.clientX, c = Mn.y - n.clientY;
    Mn = { x: n.clientX, y: n.clientY }, Math.abs(c) >= Math.abs(o) && !ds(e.target, c) && e.preventDefault();
  }, { passive: !1 }), pt.addEventListener("wheel", (e) => {
    ds(e.target, e.deltaY) || e.preventDefault();
  }, { passive: !1 });
  function tn() {
    const e = pt.querySelector(".tfMorePair"), n = pt.querySelector(".tfMore");
    e == null || e.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - n.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", tn, { passive: !0 }), b && St();
  let Ba = [];
  const Qs = (e) => e === "favourites" || e.startsWith("summary:") || e.startsWith("group:");
  function el(e) {
    const n = (S, D = "") => '<div class="tfMoreHead">' + (P != null && P.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + xc + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + oe(S) + "</div>" + D + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Jh + "</button></div>", o = (S, D) => '<div class="tfMoreNow"><div class="tfMoreState">' + oe(S) + "</div>" + (D ? '<div class="tfMoreSub">' + oe(D) + "</div>" : "") + "</div>", c = Js;
    if (e === "favourites") {
      const S = kn(), D = new Set(S), I = [{ name: "Starred", ids: S }, { name: "Home", ids: ot.homeVacuums }, { name: "Security", ids: [...ot.security.alarms, ...ot.security.locks] }, ...ot.rooms.map((N) => ({ name: N.name, ids: [...N.actions, ...N.plugs] }))].map((N, ae) => ae ? { ...N, ids: N.ids.filter((ye) => !D.has(ye)) } : N).filter((N) => N.ids.length);
      return [n("Favourites"), o(S.length ? S.length + " starred" : "None starred"), c(I, { star: !0 }, !0)];
    }
    const p = (S, { name: D = "", alert: I = !1, plain: N = !1 } = {}) => {
      const ae = N ? [] : S.filter((K) => kl.includes(K.split(".")[0])), ye = S.filter((K) => !ae.includes(K)), ke = (K) => K.startsWith("vacuum.") && kt(K).battery_level != null ? kt(K).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (D ? '<div class="tfMoreGroupName">' + oe(D) + "</div>" : "") + '<div class="tfMoreActions">' + ae.map((K) => ko(K, !0)).join("") + ye.map((K) => qr(K, { plain: N, alert: I, say: N ? ke(K) : null })).join("") + "</div></div>";
    };
    if (e.startsWith("summary:")) {
      const S = Wr().find((ae) => ae.key === e.slice(8));
      if (!S) return null;
      const D = S.key === "light" ? (S.groups || []).flatMap((ae) => ae.ids) : [], I = D.some((ae) => {
        var ye;
        return ((ye = x[ae]) == null ? void 0 : ye.state) === "on";
      }), N = D.length ? '<button class="primary" type="button" data-acts="' + k(D.map((ae) => ["light", I ? "turn_off" : "turn_on", ae])) + '">' + (I ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(S.name), '<div class="tfMoreNowRow">' + o(S.value) + N + "</div>", ...(S.groups || []).map((ae) => p(ae.ids, { name: ae.name === S.name ? "" : ae.name, alert: ae.alert, plain: S.plain }))];
    }
    if (e.startsWith("group:")) {
      const [, S, D] = e.split(":"), I = ot.rooms.find((ye) => ye.id === S), N = I && Ja(I).find((ye) => ye.key === D);
      if (!N) return null;
      const ae = N.acts ? '<button class="primary" type="button" data-acts="' + k(N.acts) + '">' + (N.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(I.name + " " + N.label.toLowerCase()), '<div class="tfMoreNowRow">' + o(N.value) + ae + "</div>", p(Ir(I, D))];
    }
    const v = e.split(".")[0], h = x[e], w = kl.includes(v) ? Mi(e) : { sections: [] };
    return [
      n(De(e)),
      o(zt(e), h.last_changed && Jt(Date.parse(h.last_changed))),
      (P == null ? void 0 : P.at) && '<svg class="tfGraph tfDay" data-day="' + oe(e) + '" role="img" aria-label="' + oe(De(e)) + ', last 24 hours"></svg>',
      v === "cover" && '<div data-cover-art="' + oe(e) + '"></div>',
      ...w.sections.filter(Boolean),
      tl(e) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(P != null && P.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Vd + "</button>"
    ].filter(Boolean);
  }
  const tl = (e) => Qs(e) ? "" : cs(e) + li(e);
  let xr = "";
  function yr(e) {
    var n;
    P && (P.details = e, Qn(), (n = pt.querySelector(e ? "[data-details-close]" : "[data-details]")) == null || n.focus({ preventScroll: !0 }));
  }
  const Ui = (e) => {
    const n = x[e], o = yn(e), c = la(e);
    return { kind: wc(n), name: De(e), text: zt(e), pos: o, target: Math.abs(c - o) > 0.5 ? c : null, moving: n.state === "opening" || n.state === "closing", tilt: yo(e) ?? 100, canSet: mt(e, Hd) };
  };
  function kr(e) {
    e.querySelectorAll("[data-cover-art]").forEach((n) => {
      const o = n.dataset.coverArt, c = n.dataset.artKey || "more:" + o;
      let p = F.get(c);
      p || (p = Xh({ onMove: (v) => Fo(o, v), onSet: (v) => {
        Fo(o, v), hi("pos", o);
      } }), p.coverId = o, F.set(c, p)), n.replaceWith(p.el), p.update(Ui(o));
    });
  }
  const uo = (e) => [...F.values()].filter((n) => n.coverId === e), Mr = () => F.forEach((e) => {
    x[e.coverId] && e.update(Ui(e.coverId));
  }), nl = () => {
    F.forEach((e, n) => {
      e.el.isConnected || (e.destroy(), F.delete(n));
    }), Mr();
  };
  function Qn() {
    var v, h;
    if (!P || !(Qs(P.id) || x[P.id])) {
      pt.hidden = !0;
      return;
    }
    if ([...Be.keys()].some((w) => w.endsWith("|" + P.id))) {
      Mr();
      return;
    }
    const e = el(P.id), n = pt.querySelector(".tfMore");
    if (!e) {
      Ho();
      return;
    }
    const o = ss(pt), c = tl(P.id), p = P.frame ? P.frame.wide : P.id.startsWith("summary:") || P.id.startsWith("group:");
    if (pt.hidden || !n || e.length !== Ba.length || n.classList.contains("wide") !== p) {
      const w = us ? P.scroll || 0 : !pt.hidden && n ? n.scrollTop : 0;
      pt.innerHTML = '<div class="tfMorePair' + (pt.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (p ? " wide" : "") + '"' + (P.frame ? ' style="height:' + P.frame.h + 'px"' : "") + ">" + e.join("") + "</section>" + (c ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + xc + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + c + "</div></div></aside>" : "") + "</div>", xr = c, pt.classList.toggle("wide", p), pt.hidden = !1, tn(), kr(pt), nr(pt), Zn(pt), pt.querySelectorAll("[data-day]").forEach((S) => Ql(S.dataset.day, S, P.at)), w && (pt.querySelector(".tfMore").scrollTop = w), Gi(pt, o), pt.contains(a.activeElement) || (v = pt.querySelector("[data-more-close]")) == null || v.focus({ preventScroll: !0 });
    } else {
      if (e.forEach((w, S) => {
        var N, ae;
        if (w === Ba[S] || w.includes("data-cover-art") || n.children[S].contains((ae = (N = a.activeElement) == null ? void 0 : N.matches) != null && ae.call(N, "input,select") ? a.activeElement : null) || [...Be.keys()].some((ye) => n.children[S].querySelector('[data-drag="' + CSS.escape(ye) + '"]'))) return;
        const D = document.createElement("div");
        D.innerHTML = w;
        const I = D.firstElementChild;
        n.children[S].replaceWith(I), Zn(I), nr(I);
      }), c !== xr) {
        const w = pt.querySelector(".tfMoreSideBody");
        w && (w.innerHTML = c), xr = c;
      }
      pt.contains(a.activeElement) || Gi(pt, o);
    }
    (h = pt.querySelector(".tfMorePair")) == null || h.classList.toggle("details", !!(P.details && c)), Ba = e, Mr();
  }
  setInterval(() => {
    P && Qn();
  }, 15 * 1e3);
  function ci(e, n) {
    var p;
    const o = !!(P && n && pt.contains(n)), c = o && pt.querySelector(".tfMore");
    o && (P.scroll = c.scrollTop), P = { id: e, opener: o ? P.opener : n, back: o ? P : null, frame: o ? P.frame || { wide: c.classList.contains("wide"), h: c.offsetHeight } : null, at: Number((p = n == null ? void 0 : n.dataset) == null ? void 0 : p.at) || null }, Io();
  }
  let us = !1;
  function Io() {
    Ba = [], us = !pt.hidden, F.forEach((e, n) => {
      n !== P.id && pt.contains(e.el) && (e.destroy(), F.delete(n));
    }), Qn(), us = !1;
  }
  function Ho() {
    var o, c, p, v, h, w;
    const e = P == null ? void 0 : P.opener;
    P = null, F.forEach((S, D) => {
      pt.contains(S.el) && (S.destroy(), F.delete(D));
    }), Bt.forEach((S, D) => {
      D.startsWith("more:") && Bt.delete(D);
    }), pt.hidden = !0, pt.innerHTML = "";
    const n = { preventScroll: !0 };
    e != null && e.isConnected ? e.focus(n) : (o = e == null ? void 0 : e.dataset) != null && o.more ? (c = M.querySelector('[data-more="' + CSS.escape(e.dataset.more) + '"]')) == null || c.focus(n) : (p = e == null ? void 0 : e.dataset) != null && p.summary ? (v = M.querySelector('[data-summary="' + CSS.escape(e.dataset.summary) + '"]')) == null || v.focus(n) : (h = e == null ? void 0 : e.hasAttribute) != null && h.call(e, "data-favs-edit") && ((w = M.querySelector("[data-favs-edit]")) == null || w.focus(n));
  }
  function Sr(e, n, o, c = {}) {
    const p = n.map((xe) => xe[1]), v = c.zero ? 0 : Math.min(...p), h = Math.max(...p), w = Math.max(120, e.clientWidth || 260), S = Math.max(60, e.clientHeight || 130), D = 8, I = S - 20, N = Date.now() - 24 * 3600 * 1e3, ae = 24 * 3600 * 1e3, ye = (xe) => Math.max(0, Math.min(w, (xe - N) / ae * w)), ke = (xe) => h === v ? (D + I) / 2 : I - (xe - v) / (h - v) * (I - D);
    let K = "M" + ye(n[0][0]).toFixed(1) + " " + ke(n[0][1]).toFixed(1);
    for (let xe = 1; xe < n.length; xe++) K += c.smooth ? "L" + ye(n[xe][0]).toFixed(1) + " " + ke(n[xe][1]).toFixed(1) : "H" + ye(n[xe][0]).toFixed(1) + "V" + ke(n[xe][1]).toFixed(1);
    e.setAttribute("viewBox", "0 0 " + w + " " + S), e.setAttribute("aria-label", o), e.innerHTML = '<path d="' + K + "V" + I + "H" + ye(n[0][0]).toFixed(1) + 'Z" fill="' + (c.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + K + '" fill="none" stroke="' + (c.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (S - 4) + '">24 h ago</text><text x="' + w + '" y="' + (S - 4) + '" text-anchor="end">Now</text>';
  }
  const Cr = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, $l = (e, n) => {
    const o = e.split(".")[0];
    return Cr[o] ? Cr[o].includes(n) : o === "alarm_control_panel" || o === "climate" || o === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(n) : n === "on";
  }, ma = (e) => {
    const n = e.split(".")[0], o = kt(e).device_class;
    return n === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[o] || (yl.includes(o) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[n] || "On";
  }, ps = /* @__PURE__ */ new Map();
  let Xl = 0;
  async function Jl(e) {
    let n = ps.get(e);
    if (!n || Date.now() - n.at > 60 * 1e3) {
      let p = [];
      try {
        const v = await R({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        p = ((v == null ? void 0 : v[e]) || []).map((h) => [h.lu != null ? h.lu * 1e3 : Date.parse(h.last_updated || h.last_changed), String(h.s ?? h.state)]).filter(([h]) => Number.isFinite(h));
      } catch {
      }
      p.length || (p = (Ai || []).filter((v) => v.entity_id === e).map((v) => [v.when * 1e3, String(v.state)])), n = { at: Date.now(), pts: p }, ps.set(e, n);
    }
    const o = x[e], c = n.pts.slice().sort((p, v) => p[0] - v[0]);
    return o && (!c.length || c[c.length - 1][1] !== o.state) && c.push([Date.parse(o.last_changed) || Date.now(), o.state]), c;
  }
  async function Ql(e, n, o) {
    const c = await Jl(e);
    if (!n.isConnected) return;
    const p = c.map(([Ne, rt]) => [Ne, Number(rt)]);
    if (c.length > 1 && p.every(([, Ne]) => Number.isFinite(Ne))) {
      Sr(n, p, De(e) + ", last 24 hours");
      return;
    }
    const v = Date.now(), h = v - 864e5, w = Math.max(200, n.clientWidth || 360), S = 62, D = (Ne) => Math.max(0, Math.min(w, (Ne - h) / 864e5 * w)), I = [];
    let N = null;
    c.forEach(([Ne, rt]) => {
      const nn = $l(e, rt);
      nn && N == null ? N = Math.max(Ne, h) : !nn && N != null && (I.push([N, Math.max(Ne, h)]), N = null);
    }), N != null && I.push([N, v]);
    const ae = Jo(e) ? "var(--danger)" : e.startsWith("light.") ? "#ffaa00" : "var(--primary)", ye = ma(e), ke = "tfDayClip" + ++Xl, K = I.map(([Ne, rt]) => ye + (rt >= v - 1e3 && Ne <= h + 1e3 ? " all day" : rt >= v - 1e3 ? " since " + Dn(Ne) : Ne <= h + 1e3 ? " until " + Dn(rt) : " " + Dn(Ne) + "–" + Dn(rt)));
    let xe = "", L = -1 / 0;
    I.forEach(([Ne], rt) => {
      const nn = K[rt].length * 5.4, jt = Math.min(D(Ne), w - nn);
      jt < L + 8 || (xe += '<text x="' + jt.toFixed(1) + '" y="10">' + oe(K[rt]) + "</text>", L = jt + nn);
    });
    let ie = '<text x="' + w + '" y="' + (S - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((Ne) => {
      let rt = new Date(v).setHours(Ne, 0, 0, 0);
      rt > v && (rt -= 864e5), D(rt) > 8 && D(rt) < w - 34 && (ie += '<text x="' + D(rt).toFixed(1) + '" y="' + (S - 2) + '" text-anchor="middle">' + String(Ne).padStart(2, "0") + "</text>");
    }), n.setAttribute("viewBox", "0 0 " + w + " " + S), n.setAttribute("aria-label", De(e) + ", last 24 hours: " + (K.length ? K.join(", ") : "no changes")), n.innerHTML = '<clipPath id="' + ke + '"><rect x="0" y="18" width="' + w + '" height="26" rx="8"/></clipPath>' + xe + '<rect x="0" y="18" width="' + w + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + ke + ')">' + I.map(([Ne, rt]) => '<rect x="' + D(Ne).toFixed(1) + '" y="18" width="' + Math.max(2, D(rt) - D(Ne)).toFixed(1) + '" height="26" fill="' + ae + '"/>').join("") + "</g>" + (o && o >= h ? '<line x1="' + D(o).toFixed(1) + '" x2="' + D(o).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + ie;
  }
  function al(e) {
    var c;
    const n = Number((c = x[e]) == null ? void 0 : c.state), o = Date.now();
    if (kt(e).state_class === "total_increasing") {
      const p = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), v = Math.max(1, o - p);
      return [...Array(49)].map((h, w) => p + v * w / 48).map((h) => [h, Math.round(n * Math.pow((h - p) / v, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((p, v) => [o - (48 - v) * 30 * 60 * 1e3, Math.round(n * (0.96 + 0.04 * Math.sin(v / 6)) * 10) / 10]);
  }
  async function hs(e, n) {
    var ye, ke;
    let o = Ee.get(e);
    if (e.endsWith("_solar_power")) o = { at: Date.now(), points: nd() };
    else if (Zi(e)) o = { at: Date.now(), points: al(e) };
    else if (!o || Date.now() - o.at > 5 * 60 * 1e3) {
      try {
        const K = new Date(Date.now() - 864e5).toISOString(), xe = await R({ type: "history/history_during_period", start_time: K, entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), L = ((xe == null ? void 0 : xe[e]) || []).map((ie) => [ie.lu != null ? ie.lu * 1e3 : Date.parse(ie.last_updated || ie.last_changed), Number(ie.s ?? ie.state)]).filter(([ie, Ne]) => Number.isFinite(ie) && Number.isFinite(Ne));
        o = { at: Date.now(), points: L };
      } catch {
        o = { at: Date.now(), points: [] };
      }
      Ee.set(e, o);
    }
    const c = n || M.querySelector('[data-graph="' + CSS.escape(e) + '"]');
    if (!c) return;
    const p = x[e], v = ((ye = p == null ? void 0 : p.attributes) == null ? void 0 : ye.unit_of_measurement) || "", h = o.points.slice(), w = Number(p == null ? void 0 : p.state);
    if (Number.isFinite(w) && !e.endsWith("_solar_power") && h.push([Date.now(), w]), h.length < 2) {
      c.setAttribute("aria-label", De(e) + ": no history for the last 24 hours"), c.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const S = h.map((K) => K[1]), D = Math.min(...S), I = Math.max(...S), N = (K) => K.toLocaleString(void 0, { maximumFractionDigits: Math.abs(K) >= 100 ? 0 : 1 }), ae = ((ke = p == null ? void 0 : p.attributes) == null ? void 0 : ke.state_class) === "total_increasing";
    Sr(c, h, De(e) + ", last 24 hours: " + (ae ? "+" + N(S[S.length - 1] - S[0]) : D === I ? N(D) : N(D) + " to " + N(I)) + (v ? " " + v : ""), { smooth: e.endsWith("_solar_power"), zero: e.endsWith("_solar_power") });
  }
  function jn() {
    const e = M == null ? void 0 : M.querySelector("[data-solar]");
    if (!e) return;
    const n = nd();
    Sr(e, n, "Solar, last 24 hours: up to " + Ge(Math.max(...n.map((o) => o[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function ol(e, n) {
    const o = n.entity_id, c = C.get(o) || {}, p = { open_cover: 100, close_cover: 0, set_cover_position: n.position, toggle: yn(o) > 0 ? 0 : 100 }[e], v = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: n.tilt_position }[e];
    p != null && (c.pos = p), v != null && (c.tilt = v), e === "stop_cover" && (delete c.pos, delete c.tilt), e === "stop_cover_tilt" && delete c.tilt, c.at = Date.now(), C.set(o, c);
  }
  function il(e, n, o) {
    var p;
    const c = o == null ? void 0 : o.entity_id;
    return e !== "light" || typeof c != "string" || !Oe[c] || !xn(c) || o.brightness_pct != null || o.brightness != null ? [n, o] : n !== "turn_on" && !(n === "toggle" && ((p = x[c]) == null ? void 0 : p.state) !== "on") ? [n, o] : ["turn_on", { ...o, brightness_pct: Oe[c] }];
  }
  function po(e, n, o, c) {
    let p = { entity_id: o, ...c || {} };
    return [n, p] = il(e, n, p), e === "cover" && ol(n, p), ct[o] = (ct[o] || 0) + 1, vi.set(qd, JSON.stringify(ct)), Ji.call(e, n, p) ? Promise.resolve() : Promise.resolve(me(e, n, p));
  }
  function di(e) {
    const [n, o, c, p] = e.split("|");
    po(n, o, c, p ? JSON.parse(p) : null).catch(() => {
    });
  }
  function Fo(e, n) {
    Be.set("pos|" + e, n), vn.delete(e), Ba = Ba.map(() => ""), [M, pt].forEach((c) => c.querySelectorAll('[data-blocks="' + CSS.escape(e) + '"]').forEach((p) => Re(p, n)));
    const o = M.querySelector('.tfAction[data-k="' + CSS.escape(e) + '"] .tfName .activityRowMeta');
    if (o && (o.textContent = Math.round(n) + "%"), (P == null ? void 0 : P.id) === e) {
      const c = pt.querySelector(".tfMoreState"), p = pt.querySelector(".tfMoreSub");
      c && (c.textContent = Math.round(n) + "%", c.classList.add("live")), p && (p.textContent = "Currently " + yn(e) + "%");
    }
    uo(e).forEach((c) => c.update(Ui(e)));
  }
  const ec = (e, n) => {
    const o = e.shiftKey ? 10 : 1, c = { ArrowUp: n + o, ArrowRight: n + o, ArrowDown: n - o, ArrowLeft: n - o, PageUp: n + 25, PageDown: n - 25, Home: 0, End: 100 }[e.key];
    return c == null ? null : Math.max(0, Math.min(100, Math.round(c)));
  };
  function Tr(e, n) {
    var K;
    const o = e.dataset.blocks;
    (K = e.setPointerCapture) == null || K.call(e, n.pointerId);
    const c = (xe) => {
      const L = e.getBoundingClientRect();
      return Math.max(0, Math.min(100, (xe.clientX - L.left) / L.width * 100));
    }, p = c(n), v = n.clientX;
    let h = !1, w = la(o), S = p, D = 0;
    const I = () => {
      w = Math.abs(S - w) < 0.2 ? S : w + (S - w) * 0.14, Fo(o, w), D = requestAnimationFrame(I);
    }, N = () => {
      h || (h = !0, e.classList.add("fine"), D = requestAnimationFrame(I));
    }, ae = setTimeout(N, 350), ye = (xe) => {
      S = c(xe), Math.abs(xe.clientX - v) > 6 && (clearTimeout(ae), N());
    }, ke = () => {
      clearTimeout(ae), cancelAnimationFrame(D), e.removeEventListener("pointermove", ye), e.removeEventListener("pointerup", ke), e.removeEventListener("pointercancel", ke), e.classList.remove("fine"), Fo(o, h ? Math.round(w) : (Math.min(3, Math.floor(p / 25)) + 1) * 25), hi("pos", o);
    };
    e.addEventListener("pointermove", ye), e.addEventListener("pointerup", ke), e.addEventListener("pointercancel", ke);
  }
  function Yi(e) {
    var p;
    const [n, o] = e.dataset.open.split("|"), c = e.closest(".tfCard");
    B = { key: n, id: o, h: c ? Math.round(c.getBoundingClientRect().height) : 0 }, vn.delete(n), dn(), (p = M.querySelector(".tfOpen [data-close]")) == null || p.focus({ preventScroll: !0 });
  }
  function ho(e) {
    var n;
    we = e.dataset.area, M.querySelectorAll(".tfAreaPanel").forEach((o) => {
      var p;
      const c = o === e;
      o.classList.toggle("active", c), o.setAttribute("aria-expanded", String(c)), (p = o.querySelector(".panelExpanded")) == null || p.toggleAttribute("inert", !c);
    }), vn.set("areas", Ts(((n = M.querySelector('[data-k="areas"]')) == null ? void 0 : n.style.order) || 1));
  }
  const ui = {
    bright: { value: (e, n) => Math.round(n * 100), text: (e, n) => n ? n + "%" : "Off", send: (e, n) => n > 0 ? ["light", "turn_on", { brightness_pct: n }] : ["light", "turn_off", {}] },
    ct: { value: (e, n) => {
      const [o, c] = Yo(e);
      return Math.round(o + n * (c - o));
    }, text: (e, n) => n.toLocaleString() + "k", send: (e, n) => ["light", "turn_on", { color_temp_kelvin: n }] },
    hue: { value: (e, n) => Math.round(n * 360), text: () => "Colour", send: (e, n) => {
      var o;
      return ["light", "turn_on", { hs_color: [n, Math.max(60, ((o = kt(e).hs_color) == null ? void 0 : o[1]) || 100)] }];
    } },
    pos: { value: (e, n) => Math.round(n * 100), text: (e, n) => Math.round(n) + "%", send: (e, n) => ["cover", "set_cover_position", { position: Math.round(n) }] },
    tilt: { value: (e, n) => Math.round(n * 100), text: (e, n) => "Tilt " + n + "%", send: (e, n) => ["cover", "set_cover_tilt_position", { tilt_position: n }] },
    vol: { value: (e, n) => Math.round(n * 100) / 100, text: (e, n) => Math.round(n * 100) + "%", send: (e, n) => ["media_player", "volume_set", { volume_level: n }] }
  };
  function pi(e, n, o, c) {
    var S;
    const p = ui[n].value(o, c);
    Be.set(n + "|" + o, p);
    const v = Math.round(c * 100) + "%", h = e.querySelector("i");
    if (n === "tilt") {
      h.style.width = "calc((100% - 8px) * " + c + ")";
      const [D, I] = e.querySelectorAll("span");
      D.classList.toggle("lit", c > 0.08), I.classList.toggle("lit", c > 0.92), vn.delete(o), Ba = Ba.map(() => ""), uo(o).forEach((N) => N.update(Ui(o)));
    } else if (h) h.style.width = v;
    else {
      let D = e.querySelector("b");
      D || (D = document.createElement("b"), e.appendChild(D)), D.style.left = v;
    }
    e.setAttribute("aria-valuenow", String(Math.round(c * 100)));
    const w = (S = e.closest(".tfAction") || e.closest(".tfMore")) == null ? void 0 : S.querySelector(".tfName .activityRowMeta, .tfMoreState");
    w && (w.textContent = ui[n].text(o, p));
  }
  function hi(e, n) {
    const o = Be.get(e + "|" + n), [c, p, v] = ui[e].send(n, o), h = () => setTimeout(() => {
      Be.delete(e + "|" + n), dn();
    }, 1500);
    po(c, p, n, v).then(h, h);
  }
  function fo(e) {
    e.addEventListener("click", (n) => {
      var c, p;
      const o = n.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (Pn && !n.target.closest(".tfBoardMenu,[data-board-more]") && ha(), !(!o || !e.contains(o) || o.disabled))
        if (o.dataset.boardMore)
          (Pn == null ? void 0 : Pn.key) === o.dataset.boardMore ? ha(!0) : jl(o.dataset.boardMore, o);
        else if (o.dataset.boardAct) Xn(Pn.key, o.dataset.boardAct);
        else if (o.dataset.boardShow) Xr(o.dataset.boardShow);
        else if (o.dataset.favHide) zs(o.dataset.favHide, !1);
        else if (o.dataset.energyPick) Rs(o.dataset.energyPick);
        else if (o.dataset.act) di(o.dataset.act);
        else if (o.hasAttribute("data-details")) yr(!(P != null && P.details));
        else if (o.hasAttribute("data-details-close")) yr(!1);
        else if (o.dataset.summary) Es(o.dataset.summary, o);
        else if (o.dataset.star) or(o.dataset.star);
        else if (o.hasAttribute("data-more-back")) {
          const v = P.id;
          P = P.back, Io(), (c = pt.querySelector('.tfMore [data-more="' + CSS.escape(v) + '"]')) == null || c.focus({ preventScroll: !0 });
        } else if (o.hasAttribute("data-favs-edit")) ci("favourites", o);
        else if (o.dataset.acts) JSON.parse(o.dataset.acts).forEach(([v, h, w, S]) => po(v, h, w, S).catch(() => {
        }));
        else if (o.dataset.more) ci(o.dataset.more, o);
        else if (o.hasAttribute("data-more-close")) Ho();
        else if (o.dataset.go) wr("room:" + o.dataset.go);
        else if (o.hasAttribute("data-area-back")) Vi();
        else if (o.dataset.open) Yi(o);
        else if (o.hasAttribute("data-close")) {
          const v = B;
          B = null, vn.delete(v.key), dn(), (p = M.querySelector('[data-open="' + CSS.escape(v.key + "|" + v.id) + '"]')) == null || p.focus({ preventScroll: !0 });
        } else o.classList.contains("tfAreaPanel") && !o.classList.contains("active") && ho(o);
    }), e.addEventListener("keydown", (n) => {
      var c, p, v, h, w, S, D;
      const o = n.target;
      if ((c = o.dataset) != null && c.open && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Yi(o)), (p = o.dataset) != null && p.energyPick && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Rs(o.dataset.energyPick)), (v = o.classList) != null && v.contains("tfAreaPanel") && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), ho(o)), (h = o.dataset) != null && h.summary && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Es(o.dataset.summary, o)), n.key === "Escape" && Pn && e === M) {
        n.preventDefault(), ha(!0);
        return;
      }
      if (n.key === "Escape" && an && e === M) {
        n.preventDefault(), $r(!1), (w = d("dashEditNav")) == null || w.focus();
        return;
      }
      if (n.key === "Escape" && Ce && e === M && (n.preventDefault(), Vi()), (S = o.dataset) != null && S.blocks) {
        const I = o.dataset.blocks, N = ec(n, Math.round(la(I)));
        if (N == null) return;
        n.preventDefault(), Fo(I, N), clearTimeout(de.get(I)), de.set(I, setTimeout(() => hi("pos", I), 500));
        return;
      }
      if ((D = o.dataset) != null && D.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(n.key)) {
        n.preventDefault();
        const [I, N] = o.dataset.drag.split("|"), ae = Number(o.getAttribute("aria-valuenow")) / 100, ye = n.key === "Home" ? 0 : n.key === "End" ? 1 : Math.max(0, Math.min(1, ae + (n.key === "ArrowLeft" || n.key === "ArrowDown" ? -0.05 : 0.05)));
        pi(o, I, N, ye), hi(I, N);
      }
    }), e.addEventListener("pointerdown", (n) => {
      var nn;
      const o = n.target.closest("[data-blocks]");
      if (o && n.button === 0) {
        n.preventDefault(), Tr(o, n);
        return;
      }
      const c = n.target.closest("[data-drag]");
      if (!c || n.button > 0) return;
      const [p, v] = c.dataset.drag.split("|");
      if (p === "bright" && !xn(v)) {
        di(wt("light", "toggle", v));
        return;
      }
      const h = p === "bright" && ((nn = x[v]) == null ? void 0 : nn.state) !== "on", w = n.pointerType !== "mouse", S = p === "tilt" ? 4 : 0, D = () => c.getBoundingClientRect().width - S * 2, I = (jt) => {
        const ga = c.getBoundingClientRect();
        return Math.max(0, Math.min(1, (jt.clientX - ga.left - S) / D()));
      };
      let N = w ? "waiting" : h ? "pressed" : "dragging", ae = 0, ye = 0;
      const ke = n.clientX, K = n.clientY, xe = (jt, ga) => Math.hypot(jt.clientX - ke, jt.clientY - K) > ga, L = () => {
        try {
          c.setPointerCapture(n.pointerId);
        } catch {
        }
      };
      w || (n.preventDefault(), L()), N === "dragging" && pi(c, p, v, I(n));
      const ie = w && setTimeout(() => {
        var jt, ga;
        N === "waiting" && (N = "held", _ = c, c.classList.add("held"), L(), (jt = navigator.userActivation) != null && jt.hasBeenActive && ((ga = navigator.vibrate) == null || ga.call(navigator, 8)), ae = h ? (Oe[v] ?? 100) / 100 : Number(c.getAttribute("aria-valuenow")) / 100, ye = ke, pi(c, p, v, ae));
      }, y), Ne = (jt) => {
        N === "waiting" && xe(jt, 8) ? N = "gone" : N === "pressed" && xe(jt, 4) && (N = "dragging"), N === "held" ? pi(c, p, v, Math.max(0, Math.min(1, ae + (jt.clientX - ye) / D()))) : N === "dragging" && pi(c, p, v, I(jt));
      }, rt = (jt) => {
        clearTimeout(ie), ["pointermove", "pointerup", "pointercancel"].forEach((ga, Ze) => c.removeEventListener(ga, Ze ? rt : Ne)), c.classList.remove("held"), _ === c && (_ = null), N === "held" || N === "dragging" ? hi(p, v) : jt.type === "pointerup" && h && (N === "waiting" || N === "pressed") && po("light", "turn_on", v).catch(() => {
        });
      };
      c.addEventListener("pointermove", Ne), c.addEventListener("pointerup", rt), c.addEventListener("pointercancel", rt);
    }), e.addEventListener("touchmove", (n) => {
      _ && n.cancelable && n.preventDefault();
    }, { passive: !1 });
  }
  return M && b && (ir(), fo(M), fo(pt), pt.addEventListener("click", (e) => {
    e.target === pt && Ho();
  }), (fs = a.getElementById("homeNav")) == null || fs.addEventListener("click", () => {
    Ce && Vi();
  }), (en = a.querySelector(".bottomNav")) == null || en.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Gd + "</button>"), (rl = d("dashEditNav")) == null || rl.addEventListener("click", () => $r(!an)), M.addEventListener("pointerdown", Zs), M.addEventListener("hass-action", (e) => {
    var c, p;
    const n = (p = (c = e.target).closest) == null ? void 0 : p.call(c, ".tfDac"), o = n == null ? void 0 : n.dataset.k;
    !o || !n.dataset.dac.startsWith("dash:") || an || (e.stopPropagation(), ci(o, n));
  }), new ResizeObserver(() => {
    f.classList.contains("tfDash") && Ur() !== To ? dn() : Hi();
  }).observe(M), window.addEventListener("resize", Hi, { passive: !0 }), pt.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.stopPropagation(), P != null && P.details ? yr(!1) : Ho());
  })), $(), {
    update(e) {
      if (!b) return;
      const n = !Object.keys(x).length;
      x = e || {};
      for (const o in x) o.startsWith("light.") && x[o].state === "on" && xn(o) && ze(o, wo(x[o]));
      n ? Ua() : dn();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      bo = !0, Ue == null || Ue.destroy(), Ue = null, tt == null || tt.forEach((e) => e.destroy()), tt = null;
    },
    resume() {
      bo = !1, !(!b || !(M != null && M.querySelector("[data-tf]"))) && (ft.isConnected && Qi(ft.style.order), er());
    }
  };
}
const Cf = "0.56.0", Sc = "move_assistant", Tf = "move_assistant", Zd = "move_assistant_checkin_reminder";
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
    const i = !this._hass;
    if (this._hass = l, i) {
      this._init();
      return;
    }
    this._app && l.states !== this._lastStates && (this._lastStates = l.states, this._app.updateStates(l.states), (d = this._test) == null || d.update(l.states));
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
    Lf();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${Eu}${Du}${Ru}</style>${Nu}`;
    const i = l.getElementById("app");
    i.style.opacity = "0";
    let d = null;
    try {
      const f = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Sc
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
        var b, E;
        return (E = (b = this._hass) == null ? void 0 : b.connection) != null && E.subscribeMessage ? this._hass.connection.subscribeMessage(g, f) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var f, g;
        return Object.keys(((g = (f = this._hass) == null ? void 0 : f.services) == null ? void 0 : g.notify) || {}).sort();
      },
      setReminderAutomation: (f) => this._setReminderAutomation(f),
      setLight: (f) => this.classList.toggle("lightBody", f),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Sf(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const l = (i = this._hass) == null ? void 0 : i.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (d) => {
        var g;
        const f = JSON.stringify((d == null ? void 0 : d.value) ?? null);
        f === this._lastSaved || f === this._pendingJson || (this._lastSaved = f, (g = this._app) == null || g.applyRemoteData(d.value));
      },
      { type: "frontend/subscribe_user_data", key: Sc }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Sc,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(l, i = {}) {
    var d, f;
    ((d = this._config) == null ? void 0 : d.events) !== !1 && ((f = this._hass) == null || f.callWS({
      type: "fire_event",
      event_type: Tf,
      event_data: { action: l, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const i = `config/automation/config/${Zd}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (g) {
        if ((g == null ? void 0 : g.status_code) !== 404 && (g == null ? void 0 : g.status) !== 404) throw g;
      }
      return;
    }
    const d = (g) => `${g}:00`, f = window.location.pathname;
    await this._hass.callApi("POST", i, {
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
    const i = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(i.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(l) {
    var d;
    const i = (d = this.shadowRoot) == null ? void 0 : d.getElementById("toast");
    i && (i.textContent = l, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Af), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Cf} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
