const Nf = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button,.tfMoreSwitch>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Hf = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityHeader{display:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.tfDash #homeView .tfRoomTile{padding:18px;gap:0;border-radius:28px}#app.tfOverview.tfDash #homeView .tfRoomTile>.tfActionHead{margin-bottom:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfActionHead .activityRowMeta{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-top:35px;gap:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomBig{font:400 48px/64px var(--font-tile);letter-spacing:-1.92px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomSub{display:block;margin-top:-7px;font:400 16px/19px var(--font)}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:flex;justify-content:space-between;min-height:0;margin-top:auto;padding-top:16px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomHeads{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{justify-content:flex-start;gap:18.67px}#app.light.tfOverview.tfDash #homeView .tfRoomTile .tfRoomIcon{background-color:#acacac;color:#fff}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfOverview.tfDash #homeView .tfRoomTile{overflow:hidden}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaL .tfRoomBig{font-size:calc(48px * var(--hc-k,1));line-height:calc(64px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaL .tfRoomReading{margin-top:calc(35px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomReading{margin-top:calc(14px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomBig{font-size:calc(40px * var(--hc-k,1));line-height:calc(52px * var(--hc-k,1));letter-spacing:-1.6px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomSub{margin-top:-6px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS{padding:12px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomReading{margin-top:calc(8px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomBig{font-size:calc(32px * var(--hc-k,1));line-height:calc(40px * var(--hc-k,1));letter-spacing:-1.28px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomSub{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaM,.hcAreaS) .tfRoomDevices,#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaM,.hcAreaS):not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:0 8px;height:var(--chip-size);overflow:hidden;padding-top:0;margin-top:auto}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomReading{flex:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-bottom:12px}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomBig{font-size:calc(64px * var(--hc-k,1));line-height:calc(80px * var(--hc-k,1));letter-spacing:-2.56px}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomReading{margin-top:calc(35px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomSub{display:block}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomDevices{display:none!important}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin-top:auto}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{border-radius:28px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}@media (max-width:620px){#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content);gap:12px;justify-content:start}}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}`, If = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}`, Ff = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', Of = `<main id="app"><div class="shell">
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
`, Yn = {
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
}, Gn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Ip = (n, l, i) => n + (l - n) * i, bp = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((u) => u + u).join("") : l;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, qf = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Fp = {}, ba = (n, l, i) => {
  const u = n + l + i;
  return Fp[u] || (Fp[u] = qf(bp(n).map((v, x) => v + (bp(l)[x] - v) * i)));
}, Op = {}, bc = (n) => Op[n] || (Op[n] = bp(n)), Jc = (n, l, i, u) => (v) => {
  if (v <= 0) return 0;
  if (v >= 1) return 1;
  let x = 0, k = 1, A = v;
  for (let I = 0; I < 18; I++)
    A = (x + k) / 2, 3 * (1 - A) * (1 - A) * A * n + 3 * (1 - A) * A * A * i + A * A * A < v ? x = A : k = A;
  return 3 * (1 - A) * (1 - A) * A * l + 3 * (1 - A) * A * A * u + A * A * A;
}, Wf = { std: Jc(0.2, 0, 0, 1), acc: Jc(0.3, 0, 1, 1), dec: Jc(0, 0, 0, 1) };
function Ac(n, l) {
  const i = String(n || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || l ? "night" : "day");
}
function Vu(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [ba(l.clear[0], l.cloudy[0], 0.12), ba(l.clear[1], l.cloudy[1], 0.12)], l.storm = [ba(l.rain[0], "#000000", 0.22), ba(l.rain[1], "#000000", 0.22)], l;
}
const wp = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], xp = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], yp = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function kp(n, l = Yn) {
  const i = { ...Yn, ...l }, u = Vu(i), v = String(n).split("/"), x = u[v[0]] ? v[0] : "clear", k = v[1] === "night", A = u[x][k ? 1 : 0], I = {
    night: k,
    clearness: x === "clear" ? 1 : x === "partly" ? 0.7 : 0.25,
    sky: A,
    skyStops: [A],
    skyT: 0,
    sun: { x: 45, y: k ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: k ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: k ? 1 : 0 },
    stars: wp.map(() => ({ o: 0 })),
    rain: xp.map(() => ({ o: 0, dy: -16 })),
    snow: yp.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, M = (W) => wp.map(() => ({ o: W }));
  return x === "clear" ? k ? (I.moon.o = 1, I.stars = M(1)) : I.sun.o = 1 : x === "partly" ? (I.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: k ? 1 : 0 }, k ? (I.moon = { x: 34, y: 33, d: 48, o: 1 }, I.stars = M(0.7)) : I.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : x === "cloudy" || x === "fog" ? (I.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: k ? 1 : 0 }, k ? I.moon = { x: 40, y: 36, d: 40, o: 0 } : I.sun = { x: 40, y: 36, r: 20, o: 0 }) : (I.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, k ? I.moon = { x: 38, y: 28, d: 36, o: 0 } : I.sun = { x: 38, y: 28, r: 18, o: 0 }, x === "snow" ? I.snow = yp.map(() => ({ o: 1, dy: 0 })) : I.rain = xp.map((W, F) => ({ o: x === "storm" && F === 1 ? 0 : 1, dy: 0 })), x === "storm" && (I.bolt = { o: 1, dy: 0 })), I;
}
const qp = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Vf(n, l, i, u = Yn, v = !1) {
  const x = { ...Yn, ...u }, k = (V, z) => V > 0.01 && z > 0.01 ? "stay" : V > 0.01 ? "leave" : z > 0.01 ? "enter" : "none", A = (V, z, pe, ae) => {
    const J = V[0] + z * ae, G = V[1] - (pe - 1 - z) * ae;
    return Wf[V[2]](Gn((i - J) / Math.max(1e-3, G - J)));
  }, I = (V, z, pe, ae = 0, J = 1, G = 0) => {
    const he = k(V.o, z.o);
    if (he === "none") return { ...z, o: 0 };
    const ce = A(qp[pe][he], ae, J, G), ke = {};
    for (const ie in z) ke[ie] = v && he !== "stay" && ie !== "o" ? he === "leave" ? V[ie] : z[ie] : Ip(V[ie], z[ie], ce);
    return ke;
  }, M = A(qp.sky, 0, 1, 0);
  let W, F;
  if (n.night !== l.night) {
    const V = Math.min(n.clearness, l.clearness), z = ba(ba(n.sky, l.sky, 0.5), x.dusk, 0.6 * V);
    W = M < 0.5 ? ba(n.sky, z, M * 2) : ba(z, l.sky, M * 2 - 1), F = V > 0.5 ? [n.sky, x.dusk, l.sky] : [n.sky, l.sky];
  } else
    W = ba(n.sky, l.sky, M), F = [n.sky, l.sky];
  return {
    night: i < 0.5 ? n.night : l.night,
    clearness: Ip(n.clearness, l.clearness, i),
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
const jf = [
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
], zn = (n, l) => (jf[(l & 7) * 8 + (n & 7)] + 0.5) / 64, zf = 0, Cp = 1, Tp = 2, Lp = 3, Ap = 4, jn = 5, Tl = 6, ss = 7, Ep = 8, Mc = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), Gf = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Uf = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), ju = (n, l, i) => {
  let u = !1;
  for (let v = 0, x = n.length - 1; v < n.length; x = v++) {
    const k = n[v], A = n[x];
    k[1] > i != A[1] > i && l < (A[0] - k[0]) * (i - k[1]) / (A[1] - k[1]) + k[0] && (u = !u);
  }
  return u;
};
function zu(n, { size: l = 90, px: i = 2, oneBit: u = !1, colors: v = Yn, ink: x = "#26221e", paper: k = "#fbf9f6", clock: A = 0, idle: I = !1 } = {}) {
  const M = { ...Yn, ...v }, W = Math.sin, F = Math.PI * 2, V = Math.max(6, Math.round(l / i)), z = V / 90, pe = I ? Math.floor(A / 100) * 100 : 0, ae = I ? W(F * pe / 3600) : 0, J = I ? 1.8 * W(F * pe / 6400) : 0, G = I ? 0.9 * W(F * pe / 4100) : 0, he = I ? 0.8 * W(F * pe / 5200) : 0, ce = pe / 3400 % 1, ke = I && n.bolt.o > 0.5 && (ce < 0.04 || ce > 0.08 && ce < 0.11), ie = new Array(V * V), oe = new Uint8Array(V * V), ne = (L, B, q, D, de) => {
    q == null || L < 0 || B < 0 || L >= V || B >= V || (D >= 1 || D > zn(L + 5, B + 3)) && (ie[B * V + L] = q, oe[B * V + L] = de);
  }, E = (L, B, q, D) => {
    for (let de = Math.max(0, Math.floor(B - q) - 1); de <= Math.min(V - 1, B + q + 1); de++) for (let ue = Math.max(0, Math.floor(L - q) - 1); ue <= Math.min(V - 1, L + q + 1); ue++) D(ue, de, ue + 0.5 - L, de + 0.5 - B);
  }, Ce = n.skyStops || [n.sky], le = n.skyT || 0;
  for (let L = 0; L < V; L++) {
    const B = n.night ? Gn(1 - (L + 0.5) / (V * 0.7)) * 0.85 : Gn(((L + 0.5) / V - 0.35) / 0.65) * 0.85;
    for (let q = 0; q < V; q++) {
      let D = Ce[0];
      if (Ce.length > 1) {
        const de = le * (Ce.length - 1), ue = Math.min(Ce.length - 2, Math.floor(de));
        D = de - ue > zn(q, L) ? Ce[ue + 1] : Ce[ue];
      }
      B > zn(q + 2, L + 5) && (D = n.night ? ba(D, "#000000", 0.28) : ba(D, "#ffffff", 0.2)), ie[L * V + q] = ke ? ba(D, "#ffffff", 0.25) : D;
    }
  }
  if (n.sun.o > 0.01) {
    const L = n.sun.x * z, B = n.sun.y * z, q = Math.max(1, n.sun.r * z);
    if (I) {
      const D = q * (1.45 + 0.06 * ae), de = ba(M.sun, "#ffffff", 0.55);
      if (E(L, B, D, (ue, ge, Se, Te) => {
        const $e = Math.sqrt(Se * Se + Te * Te);
        $e > q && $e < D && ne(ue, ge, de, 0.26 * (1 - ($e - q) / (D - q)) * n.sun.o, zf);
      }), n.sun.o > 0.5) {
        const ue = Math.floor(pe / 500) % 2, ge = Math.max(1, q * 0.22);
        for (let Se = 0; Se < 8; Se++) if (Se % 2 === ue) for (let Te = q + 1.5; Te < q + 1.5 + ge; Te += 0.7) ne(Math.floor(L + Math.cos(Se * Math.PI / 4) * Te), Math.floor(B + Math.sin(Se * Math.PI / 4) * Te), M.sun, n.sun.o, Ep);
      }
    }
    E(L, B, q, (D, de, ue, ge) => {
      if (ue * ue + ge * ge > q * q) return;
      const Se = ((ue * 0.643 + ge * 0.766) / q + 1) / 2;
      ne(D, de, Gn((Se - 0.62) / 0.38) > zn(D, de) ? M.sunEdge : M.sun, n.sun.o, Cp);
    });
  }
  if (wp.forEach((L, B) => {
    const q = n.stars[B].o;
    if (q < 0.01) return;
    const D = Math.floor(L[0] * z), de = Math.floor(L[1] * z), ue = I ? (Math.floor(pe / 300) + B * 3) % 6 : 0;
    if (ue === 5) return;
    const ge = Math.round(L[2] * z * (ue === 4 ? 0.3 : ue < 2 ? 1 : 0.6));
    ne(D, de, M.star, q, ss);
    for (let Se = 1; Se <= ge; Se++) {
      const Te = Se === ge && ge > 1 ? ba(M.star, n.sky, 0.5) : M.star;
      ne(D - Se, de, Te, q, ss), ne(D + Se, de, Te, q, ss), ne(D, de - Se, Te, q, ss), ne(D, de + Se, Te, q, ss);
    }
  }), n.moon.o > 0.01) {
    const L = Math.max(1.5, n.moon.d * z * 0.37), B = n.moon.x * z, q = n.moon.y * z + (I && he > 0.4 ? -1 : 0), D = B + 0.547 * L, de = q - 0.503 * L, ue = 0.82 * L, ge = ba(M.moon, "#ffffff", 0.6);
    E(B, q, L, (Se, Te, $e, at) => {
      if ($e * $e + at * at > L * L) return;
      const Ya = Se + 0.5 - D, Ne = Te + 0.5 - de;
      Ya * Ya + Ne * Ne <= ue * ue || ne(Se, Te, Gn((at + L) / (2 * L) * 1.1 - 0.1) > zn(Se, Te) ? M.moon : ge, n.moon.o, Tp);
    });
  }
  const qe = Math.max(2, Math.round(15.65 * z)), re = Math.max(1, Math.round(5.87 * z * 0.5));
  xp.forEach((L, B) => {
    const q = n.rain[B];
    let D = q.dy, de = q.o;
    if (de < 0.01) return;
    if (I) {
      const Se = (pe / 950 + B / 3) % 1;
      D += -5 + Se * 14, de *= Se < 0.18 ? Se / 0.18 : Se > 0.72 ? (1 - Se) / 0.28 : 1;
    }
    const ue = (L[0] + 3 + J) * z, ge = (L[1] + D) * z;
    for (let Se = 0; Se < qe; Se++) for (let Te = 0; Te < re; Te++) ne(Math.floor(ue - 0.208 * Se) + Te, Math.floor(ge) + Se, M.rain, de, Ap);
  });
  const Ze = Math.max(0, Math.round(7.34 * z / 2.6));
  if (yp.forEach((L, B) => {
    const q = n.snow[B];
    let D = q.dy, de = 0, ue = q.o;
    if (ue < 0.01) return;
    if (I) {
      const Te = (pe / 3200 + B / 5) % 1;
      D += -6 + Te * 14, de = 1.5 * W(F * (Te * 1.5 + B / 5)), ue *= Te < 0.2 ? Te / 0.2 : Te > 0.75 ? (1 - Te) / 0.25 : 1;
    }
    const ge = Math.floor((L[0] + 3.67 + de + J) * z), Se = Math.floor((L[1] + 3.67 + D) * z);
    ne(ge, Se, M.snow, ue, jn);
    for (let Te = 1; Te <= Ze; Te++)
      ne(ge - Te, Se, M.snow, ue, jn), ne(ge + Te, Se, M.snow, ue, jn), ne(ge, Se - Te, M.snow, ue, jn), ne(ge, Se + Te, M.snow, ue, jn), Ze > 1 && Te < Ze && (ne(ge - Te, Se - Te, M.snow, ue, jn), ne(ge + Te, Se - Te, M.snow, ue, jn), ne(ge - Te, Se + Te, M.snow, ue, jn), ne(ge + Te, Se + Te, M.snow, ue, jn));
  }), n.bolt.o > 0.01)
    if (V >= 30) {
      const L = 39 + J, B = 50 + n.bolt.dy;
      for (let q = Math.floor(B * z); q <= (B + 28) * z; q++) for (let D = Math.floor(L * z); D <= (L + 13) * z; D++)
        ju(Uf, (D + 0.5) / z - L, (q + 0.5) / z - B) && ne(D, q, M.sun, n.bolt.o, Tl);
    } else {
      const L = V / 18, B = 7, q = 10 + Math.round(n.bolt.dy * 0.2);
      Gf.forEach((D, de) => D.split("").forEach((ue, ge) => {
        if (ue !== "#") return;
        const Se = Math.floor((B + ge) * L), Te = Math.floor((q + de) * L);
        for (let $e = Te; $e < Math.max(Te + 1, Math.floor((q + de + 1) * L)); $e++) for (let at = Se; at < Math.max(Se + 1, Math.floor((B + ge + 1) * L)); at++) ne(at, $e, M.sun, n.bolt.o, Tl);
      }));
    }
  if (n.cloud.o > 0.01) {
    const L = Math.max(3, n.cloud.w * z), B = L * 0.6665, q = (n.cloud.x + J) * z - L / 2, D = (n.cloud.y + G) * z - B / 2, de = ba(M.cloudDay, M.cloudNight, Math.round(n.cloud.f * 4) / 4), ue = ba(de, "#000000", 0.16);
    for (let ge = Math.max(0, Math.floor(D) - 1); ge <= Math.min(V - 1, D + B + 1); ge++) for (let Se = Math.max(0, Math.floor(q) - 1); Se <= Math.min(V - 1, q + L + 1); Se++) {
      const Te = (Se + 0.5 - q) / L, $e = (ge + 0.5 - D) / L;
      Mc(Te, $e) && ne(Se, ge, !Mc(Te, $e + 1 / L) || Gn(($e - 0.42) / 0.25) * 0.8 > zn(Se, ge) ? ue : de, n.cloud.o, Lp);
    }
  }
  return Gu(ie, oe, V, V, { oneBit: u, ink: x, paper: k, snowInk: !n.night });
}
function Gu(n, l, i, u, { oneBit: v, ink: x, paper: k, snowInk: A }) {
  const I = new Uint8ClampedArray(i * u * 4), M = bc(x), W = bc(k);
  for (let F = 0; F < u; F++) for (let V = 0; V < i; V++) {
    const z = F * i + V, pe = l[z];
    if (n[z] == null) continue;
    let ae = bc(n[z]);
    if (v) {
      let J;
      pe === Ap || pe === Ep ? J = !0 : pe === jn ? J = A : pe === ss || pe === Tl ? J = !1 : J = Math.round((0.2126 * ae[0] + 0.7152 * ae[1] + 0.0722 * ae[2]) / 255 * 4) / 4 <= zn(V, F), (pe === Cp || pe === Tp || pe === Lp || pe === Tl) && (V > 0 && l[z - 1] !== pe || V < i - 1 && l[z + 1] !== pe || F > 0 && l[z - i] !== pe || F < u - 1 && l[z + i] !== pe) && (J = !0), ae = J ? M : W;
    }
    I[z * 4] = ae[0], I[z * 4 + 1] = ae[1], I[z * 4 + 2] = ae[2], I[z * 4 + 3] = 255;
  }
  return { w: i, h: u, data: I };
}
const Yf = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Zf = (n) => Ac(n, !1).split("/")[0], Qc = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Kf = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", $f = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Xf = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Jf = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Qf = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], eh = [".##", "##.", ".#.", "#.."];
function Uu(n, { width: l, height: i, colors: u, wave: v = 0.38, soft: x = 6, glow: k = 0.6 }) {
  const A = { ...Yn, dawn: "#e5a77e", ...u }, I = Vu(A), M = l, W = i, F = M / 6, V = F / 2, z = Math.PI * 2, pe = n.length ? n : [{ cond: "cloudy", night: !1 }], ae = [...Array(12)].map((ce, ke) => {
    const ie = pe[Math.min(ke, pe.length - 1)], oe = Zf(ie.cond), ne = ke % 2 === 1;
    return { cond: ie.cond, k: oe, night: ne, sky: I[oe][ne ? 1 : 0], cover: Yf[oe] };
  }), J = (ce) => W * (0.5 - v * Math.cos(z * (ce / F - 0.25)));
  return { C: A, S: ae, W: M, H: W, cw: F, sw: V, TAU: z, yb: J, side: (ce, ke, ie) => {
    const oe = (ce ? J(ke) - ie : ie - J(ke)) / Math.max(3, x * 1.4) + 0.5;
    return oe <= 0 ? 0 : oe >= 1 ? 1 : oe;
  }, glowAt: (ce) => {
    const ke = ((ce / F - 0.25) % 1 + 1) % 1, ie = Math.max(0, Math.min(5, Math.round(ce / F - 0.25))), oe = Math.max(0, Math.min(5, Math.round(ce / F - 0.75))), ne = 1 - (ae[2 * ie].cover + ae[2 * oe + 1].cover) / 2, E = Math.sin(Math.PI * Math.min(1, Math.max(0, J(ce) / W)));
    return { c: ke < 0.5 ? A.dusk : A.dawn, a: k * (0.2 + 0.8 * ne) * E * E };
  }, soft: x, tw: F * 0.3, sy: W / 90 };
}
function Yu(n, { clock: l = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: v, sw: x, side: k, C: A, TAU: I, sy: M } = n, W = l, F = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return v.forEach((V, z) => {
    const pe = Qc(u * 977 + z * 131 + 7), ae = (z + 0.5) * x, J = V.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[V.k] : 0;
    for (let G = 0; G < J; G++) {
      const he = ae + (pe() - 0.5) * x * 1.6, ce = (6 + pe() * 76) * M, ke = pe() < 0.35, ie = 1.8 + pe() * 1.6, oe = k(!0, he, ce) * (ke ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(I * W / 2600 + G * 1.7 + z) : 1);
      oe >= 0.03 && F.stars.push({ x: he, y: ce, big: ke, size: ie, o: oe });
    }
    if (!V.night && (V.k === "clear" || V.k === "partly")) {
      const G = ae + (pe() - 0.5) * x * 0.3, he = Math.min(15, x * 0.29);
      F.suns.push({ x: G, y: 32 * M, rad: he, halo: he * 2.8 * (i ? 1 + 0.07 * Math.sin(I * W / 3600 + z) : 1) });
    }
    if (V.night && (V.k === "clear" || V.k === "partly")) {
      const G = Math.min(0.78, x * 0.55 / 34), he = ae - 23 * G + (pe() - 0.5) * x * 0.2;
      F.moons.push({ x: he + 23 * G, y: (4 + (i ? 0.8 * Math.sin(I * W / 5200 + z) : 0)) * M + 23 * G, d: 46 * G });
    }
  }), v.forEach((V, z) => {
    const pe = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[V.k];
    if (!pe) return;
    const ae = Qc(u * 577 + z * 71 + 3), J = (z + 0.5) * x, G = V.k === "rain" || V.k === "storm" || V.night ? A.cloudNight : A.cloudDay, he = V.night ? 0.82 : V.k === "storm" ? 0.75 : 1;
    for (let ce = 0; ce < pe; ce++) {
      const ke = x / 46 * (V.k === "partly" ? 0.85 : 0.75 + ae() * 0.55), ie = J + (V.k === "partly" ? x * 0.12 : (ae() - 0.5) * x * 1.05), oe = (V.k === "partly" ? 40 : 6 + ae() * 26) * M, ne = i ? 2.5 * Math.sin(I * W / 9e3 + z * 1.3 + ce * 2.1) : 0, E = i ? 0.9 * Math.sin(I * W / 6100 + z + ce) : 0;
      F.clouds.push({ x: ie - 23 * ke + ne, y: oe - 15.33 * ke + E, w: 46 * ke, h: 30.66 * ke, fill: G, o: he * (pe > 1 && ce === 0 ? 0.85 : 1) });
    }
  }), v.forEach((V, z) => {
    const pe = Qc(u * 313 + z * 29 + 11), ae = (z + 0.5) * x, J = V.cond === "pouring" ? 16 : V.cond === "rainy" || V.cond === "hail" ? 9 : V.cond === "lightning-rainy" ? 12 : V.cond === "snowy-rainy" ? 5 : 0;
    for (let he = 0; he < J; he++) {
      let ce = ae + (pe() - 0.5) * x * 1.05, ke = 44 + pe() * 36, ie = 1;
      if (i) {
        const ne = ((ke - 44 + W * 0.04) % 36 + 36) % 36;
        ce -= 0.21 * (ne - (ke - 44)), ke = 44 + ne, ie = Math.min(1, ne / 6, (36 - ne) / 6);
      }
      ke *= M;
      const oe = k(V.night, ce, ke) * ie;
      oe >= 0.05 && F.drops.push({ x: ce, y: ke, o: oe });
    }
    const G = V.cond === "snowy" ? 11 : V.cond === "snowy-rainy" ? 6 : 0;
    for (let he = 0; he < G; he++) {
      let ce = ae + (pe() - 0.5) * x * 1.05, ke = 40 + pe() * 44, ie = 1;
      if (i) {
        const ne = ((ke - 40 + W * 9e-3) % 44 + 44) % 44;
        ke = 40 + ne, ce += 1.6 * Math.sin(I * W / 2800 + he * 1.9 + z), ie = Math.min(1, ne / 6, (44 - ne) / 6);
      }
      ke *= M;
      const oe = k(V.night, ce, ke) * ie;
      oe >= 0.05 && F.flakes.push({ x: ce, y: ke, o: oe });
    }
    if (V.k === "fog") {
      const he = V.night ? "#c8ccd6" : "#ffffff", ce = V.night ? 0.28 : 0.62, ke = i ? 4 * Math.sin(I * W / 8e3 + z) : 0;
      for (let ie = 0; ie < 4; ie++) F.fogs.push({ x: ae - x * 0.75 + ie % 2 * x * 0.18 + (ie % 2 ? ke : -ke), y: (30 + ie * 13) * M, w: x * 1.3, c: he, a: ce });
    }
    if (V.k === "storm") {
      const he = (W / 3400 + z * 0.37) % 1;
      F.bolts.push({ x: ae + (pe() - 0.5) * x * 0.3 - 5, y: 36 * M, o: i && !(he < 0.05 || he > 0.09 && he < 0.12) ? 0.8 : 1 });
    }
  }), F;
}
function th(n, l, i, u, v, x, k, A) {
  const { S: I, C: M, cw: W, yb: F, glowAt: V, soft: z, tw: pe, sy: ae } = n, J = new Array(i * u), G = new Uint8Array(i * u), he = new Uint8Array(i * u), ce = (L, B, q, D, de) => {
    q == null || L < 0 || B < 0 || L >= i || B >= u || (D >= 1 || D > zn(L + 5, B + 3)) && (J[B * i + L] = q, G[B * i + L] = de);
  }, ke = (L, B, q, D) => {
    for (let de = Math.max(0, Math.floor(B - q) - 1); de <= Math.min(u - 1, B + q + 1); de++) for (let ue = Math.max(0, Math.floor(L - q) - 1); ue <= Math.min(i - 1, L + q + 1); ue++) D(ue, de, ue + 0.5 - L, de + 0.5 - B);
  }, ie = (L, B, q) => {
    for (let de = 0; de < L.length - 1; de++) {
      const ue = (de + B) * W;
      if (q < ue - pe / 2) return [L[de], L[de], 0];
      if (q <= ue + pe / 2) return [L[de], L[de + 1], (q - ue + pe / 2) / pe];
    }
    const D = L[L.length - 1];
    return [D, D, 0];
  }, oe = I.filter((L) => !L.night).map((L) => L.sky), ne = I.filter((L) => L.night).map((L) => L.sky), E = z / x, Ce = 16 * ae / x;
  for (let L = 0; L < i; L++) {
    const B = (L + 0.5) * v, q = F(B) / x, D = ie(oe, 0.75, B), de = ie(ne, 1.25, B), ue = V(B);
    for (let ge = 0; ge < u; ge++) {
      const Se = zn(L, ge), Te = ge + 0.5 - q, $e = (E > 0.01 ? Gn(0.5 + Te / E) : Te > 0 ? 1 : 0) > Se;
      let at = $e ? D[2] > Se ? D[1] : D[0] : de[2] > Se ? de[1] : de[0];
      ($e ? Gn(((ge + 0.5) / u - 0.45) / 0.55) * 0.7 : Gn(1 - (ge + 0.5) / (u * 0.55)) * 0.7) > zn(L + 2, ge + 5) && (at = $e ? ba(at, "#ffffff", 0.18) : ba(at, "#000000", 0.25)), $e && Te >= 0 && Te < Ce && ue.a * 1.3 * (1 - Te / Ce) > zn(L + 6, ge + 1) && (at = ue.c), J[ge * i + L] = at, he[ge * i + L] = $e ? 0 : 1;
    }
  }
  const le = ba(M.sun, "#ffffff", 0.55), qe = ba(M.moon, "#ffffff", 0.6);
  l.stars.forEach((L) => {
    const B = Math.floor(L.x / v), q = Math.floor(L.y / x);
    if (B < 0 || q < 0 || B >= i || q >= u || !he[q * i + B] || L.o < 0.15) return;
    const D = L.o > 0.45 ? M.star : ba(M.star, J[q * i + B], 0.5), de = L.big && L.o > 0.6 ? Math.floor(L.size / v) : 0;
    ce(B, q, D, 1, ss);
    for (let ue = 1; ue <= de; ue++) [[B - ue, q], [B + ue, q], [B, q - ue], [B, q + ue]].forEach((ge) => {
      ge[0] >= 0 && ge[1] >= 0 && ge[0] < i && ge[1] < u && he[ge[1] * i + ge[0]] && ce(ge[0], ge[1], D, 1, ss);
    });
  }), l.suns.forEach((L) => {
    const B = Math.max(1.5, L.rad / v), q = L.x / v, D = L.y / x, de = L.halo / v * 0.85;
    if (ke(q, D, de, (ue, ge, Se, Te) => {
      const $e = Math.sqrt(Se * Se + Te * Te);
      $e > B && $e < de && !he[ge * i + ue] && ce(ue, ge, le, 0.3 * (1 - ($e - B) / (de - B)), 0);
    }), A) {
      const ue = Math.floor(k / 500) % 2, ge = Math.max(1, B * 0.3);
      for (let Se = 0; Se < 8; Se++) if (Se % 2 === ue) for (let Te = B + 1.2; Te < B + 1.2 + ge; Te += 0.7) ce(Math.floor(q + Math.cos(Se * Math.PI / 4) * Te), Math.floor(D + Math.sin(Se * Math.PI / 4) * Te), M.sun, 1, Ep);
    }
    ke(q, D, B, (ue, ge, Se, Te) => {
      Se * Se + Te * Te <= B * B && ce(ue, ge, Gn(((Te / B + 1) / 2 - 0.6) / 0.4) > zn(ue, ge) ? M.sunEdge : M.sun, 1, Cp);
    });
  }), l.moons.forEach((L) => {
    const B = Math.max(1.5, L.d * 0.37 / v), q = L.x / v, D = L.y / x, de = q + 0.547 * B, ue = D - 0.503 * B, ge = 0.82 * B;
    ke(q, D, B, (Se, Te, $e, at) => {
      if ($e * $e + at * at > B * B) return;
      const Ya = Se + 0.5 - de, Ne = Te + 0.5 - ue;
      Ya * Ya + Ne * Ne > ge * ge && ce(Se, Te, Gn((at + B) / (2 * B) * 1.1 - 0.1) > zn(Se, Te) ? M.moon : qe, 1, Tp);
    });
  }), l.clouds.forEach((L) => {
    const B = Math.max(3, L.w / v), q = B * 0.6665, D = L.x / v, de = L.y / x, ue = ba(L.fill, "#000000", 0.16);
    for (let ge = Math.max(0, Math.floor(de) - 1); ge <= Math.min(u - 1, de + q + 1); ge++) for (let Se = Math.max(0, Math.floor(D) - 1); Se <= Math.min(i - 1, D + B + 1); Se++) {
      const Te = (Se + 0.5 - D) / B, $e = (ge + 0.5 - de) / B;
      Mc(Te, $e) && ce(Se, ge, !Mc(Te, $e + 1 / B) || Gn(($e - 0.42) / 0.25) * 0.8 > zn(Se, ge) ? ue : L.fill, L.o, Lp);
    }
  }), l.fogs.forEach((L) => {
    const B = Math.floor(L.y / x), q = Math.max(B, Math.floor((L.y + 6 * ae) / x) - 1), D = Math.floor(L.x / v), de = Math.floor((L.x + L.w) / v);
    for (let ue = B; ue <= q; ue++) for (let ge = D; ge <= de; ge++) {
      const Se = (ge - D) / Math.max(1, de - D);
      ce(ge, ue, L.c, L.a * (Se < 0.25 ? Se / 0.25 : Se > 0.75 ? (1 - Se) / 0.25 : 1), 0);
    }
  });
  const re = Math.max(2, Math.round(9 / x));
  l.drops.forEach((L) => {
    const B = L.x / v, q = Math.floor(L.y / x);
    for (let D = 0; D < re; D++) ce(Math.floor(B - 0.208 * D * x / v), q + D, M.rain, L.o, Ap);
  });
  const Ze = Math.max(0, Math.round(4.4 / v / 2.6));
  return l.flakes.forEach((L) => {
    const B = Math.floor(L.x / v), q = Math.floor(L.y / x);
    ce(B, q, M.snow, L.o, jn);
    for (let D = 1; D <= Ze; D++)
      ce(B - D, q, M.snow, L.o, jn), ce(B + D, q, M.snow, L.o, jn), ce(B, q - D, M.snow, L.o, jn), ce(B, q + D, M.snow, L.o, jn);
  }), l.bolts.forEach((L) => {
    if (v <= 3.5)
      for (let B = Math.floor(L.y / x); B <= (L.y + 24) / x; B++) for (let q = Math.floor(L.x / v); q <= (L.x + 11) / v; q++)
        ju(Qf, (q + 0.5) * v - L.x, (B + 0.5) * x - L.y) && ce(q, B, M.sun, 1, Tl);
    else {
      const B = Math.round(L.x / v), q = Math.round(L.y / x);
      eh.forEach((D, de) => D.split("").forEach((ue, ge) => {
        ue === "#" && ce(B + ge, q + de, M.sun, 1, Tl);
      }));
    }
  }), { col: J, ids: G };
}
function ah(n, l) {
  const i = l.px, u = Math.max(6, Math.round(l.width / i)), v = Math.max(6, Math.round(l.height / i)), x = l.width / u, k = l.height / v, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, I = (z) => {
    const pe = Uu(z, l);
    return th(pe, Yu(pe, { clock: A, ambient: l.ambient, seed: l.seed }), u, v, x, k, A, l.ambient);
  }, M = I(n), W = l.reveal == null ? 1 : Gn(l.reveal);
  let F = M.col, V = M.ids;
  if (W < 1) {
    const z = l.prev ? I(l.prev) : null, pe = W * (u + 12);
    F = new Array(u * v), V = new Uint8Array(u * v);
    for (let ae = 0; ae < u * v; ae++) {
      const J = ae % u, G = ae / u | 0;
      (l.reduce ? W : Gn((pe - J) / 12)) > zn(J, G) ? (F[ae] = M.col[ae], V[ae] = M.ids[ae]) : z ? (F[ae] = z.col[ae], V[ae] = z.ids[ae]) : (F[ae] = null, V[ae] = 255);
    }
  }
  return Gu(F, V, u, v, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function nh(n, l, i) {
  const u = i.width, v = i.height, x = i.reveal == null ? 1 : Gn(i.reveal), k = (V, z) => {
    const pe = Uu(z, i);
    oh(V, pe, Yu(pe, i));
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
function oh(n, l, i) {
  const { W: u, H: v, S: x, C: k, cw: A, yb: I, glowAt: M, soft: W, tw: F, sy: V } = l, z = (le, qe) => {
    const re = bc(le);
    return "rgba(" + re[0] + "," + re[1] + "," + re[2] + "," + Math.max(0, Math.min(1, qe)).toFixed(3) + ")";
  }, pe = (le, qe) => {
    const re = n.createLinearGradient(0, 0, u, 0);
    re.addColorStop(0, le[0]);
    for (let Ze = 0; Ze < le.length - 1; Ze++) {
      const L = (Ze + qe) * A, B = (L - F / 2) / u, q = (L + F / 2) / u;
      B > 0 && B < 1 && re.addColorStop(B, le[Ze]), q > 0 && q < 1 && re.addColorStop(q, le[Ze + 1]);
    }
    return re.addColorStop(1, le[le.length - 1]), re;
  }, ae = Math.max(24, Math.ceil(u / 4)), J = (le, qe) => {
    n.beginPath();
    for (let re = 0; re <= ae; re++) {
      const Ze = u * re / ae, L = le == null ? 0 : I(Ze) + le;
      re ? n.lineTo(Ze, L) : n.moveTo(Ze, L);
    }
    for (let re = ae; re >= 0; re--) {
      const Ze = u * re / ae;
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
    n.globalAlpha = 1 - le / 8, J(le * 2 * V, (le + 1) * 2 * V);
  n.fillStyle = pe(x.filter((le) => le.night).map((le) => le.sky), 1.25);
  const he = Math.max(0.5, W), ce = 6;
  n.globalAlpha = 1, J(null, -he);
  for (let le = 0; le < ce; le++)
    n.globalAlpha = 1 - (le + 0.5) / ce, J(-he + 2 * he * le / ce, -he + 2 * he * (le + 1) / ce);
  n.globalAlpha = 1;
  const ke = new Path2D(Xf), ie = new Path2D($f), oe = new Path2D(Kf), ne = new Path2D(Jf);
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
    n.save(), n.globalAlpha = le.o, n.translate(le.x, le.y), n.fill(ne), n.restore();
  }), n.restore();
}
function ih(n, l) {
  var Fa, cd, bl, ho, Xd, Jd, Qd;
  const i = (a) => n.getElementById(a), u = i("workoutView"), v = i("workoutNameInput");
  let x = !0;
  const k = i("homeClock");
  function A() {
    k && (k.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  A(), setInterval(A, 15e3);
  const I = i("createFlow"), M = i("createMovementsSlot"), W = i("createTimingSlot"), F = i("createFinishSlot"), V = i("movementStepSummary"), z = i("timingStepSummary"), pe = i("finishStepSummary"), ae = i("continueToTiming"), J = i("continueToFinish"), G = i("finishMoveButton");
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
  function ne(a) {
    n.querySelectorAll(".createStep").forEach((s) => {
      s.classList.toggle("active", s.dataset.createStep === a);
    }), a === "timing" && (he = !0), E();
  }
  function E() {
    var ve, Me;
    if (!Jt) return;
    mt[Tt];
    const a = Xe.filter((we) => !we.hidden), s = a.filter((we) => we.kind !== "rest").length, d = a.filter((we) => we.kind === "rest").length;
    V.textContent = s ? s + " movement" + (s === 1 ? "" : "s") + (d ? " · " + d + " rest" + (d === 1 ? "" : "s") : "") : "No movements yet";
    const m = s > 0, S = n.querySelector('[data-open-step="timing"]'), R = n.querySelector('[data-open-step="finish"]');
    S.disabled = !m, ae.disabled = !m, z.textContent = m ? bo(B.value) + " · " + Ra(q.value) + " movement · " + Ra(D.value) + " rest" : "Add a movement first", R.disabled = !(m && he);
    const O = ((v == null ? void 0 : v.value) || "").trim(), Y = [];
    (ve = i("includeWarmupPreset")) != null && ve.checked && Y.push("warm-up"), (Me = i("includeCooldownPreset")) != null && Me.checked && Y.push("cooldown"), pe.textContent = O ? O + (Y.length ? " · " + Y.join(" + ") : "") : Y.length ? Y.join(" + ") : "Name and optional extras";
  }
  function Ce() {
    var Fe, Je, Ve;
    I.hidden = !1, he = !1;
    const a = n.querySelector(".editNameRow"), s = i("createMoveOptions"), d = n.querySelector(".timeTiles"), m = i("routineSummaryModal"), S = n.querySelector(".tempoRevealRow"), R = i("tempoExperiment"), O = (Fe = i("warmupList")) == null ? void 0 : Fe.closest("section"), Y = i("movementCreatorLaunch"), ve = i("movementCreator"), Me = (Je = i("strengthList")) == null ? void 0 : Je.closest("section"), we = (Ve = i("cooldownList")) == null ? void 0 : Ve.closest("section");
    [s == null ? void 0 : s.querySelector(".createExtras"), O, Y, ve, Me, we].forEach((He) => He && ie(He, M)), [s, d, m, S, R].forEach((He) => ie(He, W)), ie(a, F), ne("movements"), E();
  }
  function le() {
    oe(), I.hidden = !0, n.querySelectorAll(".createStep").forEach((a) => a.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((a) => a.addEventListener("click", () => {
    a.disabled || ne(a.dataset.openStep);
  })), ae.addEventListener("click", () => {
    ae.disabled || ne("timing");
  }), J.addEventListener("click", () => ne("finish")), G.addEventListener("click", () => i("saveWorkoutEdit").click());
  const qe = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, re = i("homeNav"), Ze = i("settingsNav");
  function L(a) {
    Object.entries(qe).forEach(([s, d]) => d.classList.toggle("active", s === a)), re.classList.toggle("active", a === "home"), Ze.classList.toggle("active", a === "settings"), a === "home" && setTimeout(Ie, 400), a === "settings" && (requestAnimationFrame(() => Ti(n.querySelector(".tab.active"), !1)), sl());
  }
  const B = i("totalTime"), q = i("workTime"), D = i("restTime"), de = i("totalOut"), ue = i("workOut"), ge = i("restOut"), Se = i("totalFill"), Te = i("workFill"), $e = i("restFill"), at = i("roundsInput"), Ya = i("roundsFill"), Ne = i("roundsOut"), mo = i("totalLabel"), Zn = i("routineSummaryModal"), go = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let ia = go.map((a) => ({ ...a })), Xe = [
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
  let en = pt.map((a) => ({ ...a }));
  const ao = {
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
  }, Ye = gt(l.data), mt = Ye.profiles;
  let Tt = mt[Ye.selected] ? Ye.selected : Ye.order.find((a) => mt[a]) || "kettlebell";
  function gt(a) {
    const s = a && typeof a == "object" ? JSON.parse(JSON.stringify(a)) : {}, d = s.profiles && Object.keys(s.profiles).length ? s.profiles : JSON.parse(JSON.stringify(ao)), m = (Array.isArray(s.order) ? s.order : Object.keys(d)).filter((S) => d[S]);
    return Object.keys(d).forEach((S) => {
      m.includes(S) || m.push(S);
    }), {
      v: 1,
      profiles: d,
      order: m,
      selected: s.selected || m[0],
      history: Array.isArray(s.history) ? s.history : [],
      checkins: (Array.isArray(s.checkins) ? s.checkins : vn(s.energy)).map(ds),
      settings: { ...s.settings || {} }
    };
  }
  function vn(a) {
    if (!Array.isArray(a)) return [];
    const s = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], d = [];
    return a.forEach((m) => {
      const S = new Date(m.at);
      if (isNaN(S)) return;
      const R = S.getFullYear() + "-" + String(S.getMonth() + 1).padStart(2, "0") + "-" + String(S.getDate()).padStart(2, "0"), O = S.getHours() < 14 ? "morning" : "evening";
      if (d.some((ve) => ve.date === R && ve.slot === O)) return;
      const Y = s.indexOf(m.value) + 1;
      Y > 0 && d.push({ date: R, slot: O, mood: null, energy: Y, at: m.at });
    }), d;
  }
  function ds(a) {
    if (a.scale === 100) return a;
    const s = (d) => d == null ? null : Math.round((Number(d) - 1) / 5 * 100);
    return { ...a, mood: s(a.mood), energy: s(a.energy), scale: 100 };
  }
  function An() {
    Jt || (Ye.selected = Tt, Ye.order = Ye.order.filter((a) => mt[a] && a !== vo), l.save(Ye));
  }
  function bt() {
    return Ye.settings;
  }
  function $t(a) {
    const s = mt[a];
    if (!s) return;
    Tt = a;
    const d = i("workoutNameInput");
    if (d && (d.value = s.name), B.value = s.total, q.value = s.work, D.value = s.rest, at.value = s.rounds || 1, s.customSequence) {
      const m = (s.sequence || []).map((R) => ({ ...R })), S = (R) => m.filter((O) => O.presetRole === R).map(({ presetRole: O, ...Y }) => Y);
      ia = (s.warmup || S("warmup")).map((R) => ({ ...R })), en = (s.cooldown || S("cooldown")).map((R) => ({ ...R })), Xe = m.filter((R) => !R.presetRole), Fi(s.preset || "movement", !1);
    } else
      B.min = 3, B.max = 40, B.step = 1, q.min = 20, q.max = 60, q.step = 5, D.min = 5, D.max = 30, D.step = 5, ia = (s.warmup || go).map((m) => ({ ...m })), en = (s.cooldown || pt).map((m) => ({ ...m })), Xe = s.strength.map((m) => Array.isArray(m) ? (([S, R, O, Y = !1]) => ({ id: S, name: R, group: O, kind: "work", hidden: !!Y }))(m) : { ...m });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((m) => m.classList.toggle("active", m.dataset.workout === a)), Ut();
  }
  function cs(a, s, d) {
    const m = a.getBoundingClientRect(), S = m.width / 2, R = m.height / 2, O = s - S, Y = d - R;
    let ve = 1 / 0, Me = 1 / 0;
    O !== 0 && (ve = S / Math.abs(O)), Y !== 0 && (Me = R / Math.abs(Y));
    const we = Math.min(Math.max(1 / Math.min(ve, Me), 0), 1);
    let me = Math.atan2(Y, O) * (180 / Math.PI) + 90;
    return me < 0 && (me += 360), { edge: we, angle: me };
  }
  function Io(a, s, d = !1) {
    const m = a.getBoundingClientRect(), S = s.clientX - m.left, R = s.clientY - m.top, { edge: O, angle: Y } = cs(a, S, R), ve = d ? 100 : O * 100;
    a.style.setProperty("--edge-proximity", ve.toFixed(3)), a.style.setProperty("--cursor-angle", Y.toFixed(3) + "deg"), a.classList.toggle("borderGlowActive", d || ve >= 30);
  }
  function ps(a) {
    a.addEventListener("pointermove", (d) => Io(a, d, !1)), a.addEventListener("pointerenter", (d) => Io(a, d, !1)), a.addEventListener("pointerdown", (d) => Io(a, d, !0));
    const s = () => {
      a.classList.remove("borderGlowActive"), a.style.setProperty("--edge-proximity", "0");
    };
    a.addEventListener("pointerleave", s), a.addEventListener("pointerup", s), a.addEventListener("pointercancel", s);
  }
  ps(i("addWorkoutPanel"));
  let Jt = !1, vo = null;
  function nt(a) {
    return String(a ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]);
  }
  function Ll(a) {
    return a.summary ? a.summary : a.customSequence ? bo(a.total) + " · custom move" : bo(a.total) + " · " + Ra(a.work) + " / " + Ra(a.rest) + " · warm-up + cooldown";
  }
  function Kn(a, s) {
    var R;
    const d = document.createElement("article");
    d.className = "workoutPanel", d.dataset.workout = a, d.tabIndex = 0;
    const m = s.activityCount ?? (((R = s.sequence) == null ? void 0 : R.length) || 0);
    d.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + nt(s.name) + '</div><div class="sub">' + nt(Ll(s)) + '</div><span class="sourceTag">' + nt(s.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (m ? m + " activities" + ((s.rounds || 1) > 1 ? " × " + s.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + nt(s.name) + "</div></div>";
    const S = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(d, S), ps(d), d.addEventListener("click", (O) => {
      O.target.closest("button") || $t(a);
    }), d.addEventListener("keydown", (O) => {
      (O.key === "Enter" || O.key === " ") && !O.target.closest("button") && (O.preventDefault(), $t(a));
    }), d.querySelector(".seeWorkoutBtn").addEventListener("click", (O) => {
      O.stopPropagation(), $t(a), Xs(!1);
    }), d.querySelector(".startWorkoutBtn").addEventListener("click", (O) => {
      O.stopPropagation(), $t(a), Pc();
    }), d;
  }
  function wa() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.remove()), Ye.order.forEach((a) => {
      mt[a] && Kn(a, mt[a]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === Tt));
  }
  wa(), i("addWorkoutPanel").addEventListener("keydown", (a) => {
    (a.key === "Enter" || a.key === " ") && (a.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    Jt = !0, vo = "custom-" + Date.now(), mt[vo] = {
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
    }, $t(vo), Xs(!0);
  });
  let Ke = [], dt = 0, xa = 0, wt = 1, Pe = !1, Dt = null, Rt = null, Ot = !1, En = Ye.settings.upcomingCount ?? "all", us = "movement";
  function xr(a, s, d) {
    return (Number(a) - s) / (d - s) * 100;
  }
  function Ra(a) {
    const s = Math.max(0, Number(a) || 0);
    return s >= 3600 && s % 3600 === 0 ? s / 3600 + " hr" : s >= 60 && s % 60 === 0 ? s / 60 + " min" : s >= 60 ? Math.round(s / 60) + " min" : Math.round(s) + " sec";
  }
  function bo(a) {
    const s = Math.max(0, Number(a) || 0);
    return s >= 60 && s % 60 === 0 ? s / 60 + " hr" : s >= 60 ? Math.floor(s / 60) + " hr " + s % 60 + " min" : s + " min";
  }
  function yr() {
    Se.style.width = xr(B.value, Number(B.min), Number(B.max)) + "%", Te.style.width = xr(q.value, Number(q.min), Number(q.max)) + "%", $e.style.width = xr(D.value, Number(D.min), Number(D.max)) + "%", ue.textContent = Ra(q.value), ge.textContent = Ra(D.value);
    const a = Number(at.value) || 1;
    Ya.style.width = xr(a, 1, 10) + "%", mo.textContent = a > 1 ? "Time per round" : "Total time";
  }
  function fs(a) {
    return a.filter((s) => !s.hidden);
  }
  function wo(a) {
    const s = Math.max(0, Math.round(Number(a) || 0)), d = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), S = s % 60;
    return (d ? d + ":" + String(m).padStart(2, "0") : m) + ":" + String(S).padStart(2, "0");
  }
  function Gs(a) {
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
      const ve = Y.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return ve ? (Number(ve[1]) || 0) * 3600 + (Number(ve[2]) || 0) * 60 + (Number(ve[3]) || 0) : 0;
    }, R = S(s.searchParams.get("t") || s.searchParams.get("start")), O = S(s.searchParams.get("end"));
    return { id: m, start: R, end: O > R ? O : null };
  }
  function Ii(a, s) {
    if (a.useVideoLength === !1) return Math.max(5, Number(a.duration) || s || 300);
    const d = Number(a.start) || 0, m = Number(a.end) || Number(a.videoDuration) || 0;
    return m > d ? Math.round(m - d) : Number(a.duration) || 300;
  }
  function xo(a, s) {
    const d = Math.max(0, Number(a) || 0);
    return Math.round(s === "hour" ? d * 3600 : s === "min" ? d * 60 : d);
  }
  function Fi(a, s = !0) {
    us = a, n.querySelectorAll(".createPresetBtn").forEach((m) => m.classList.toggle("active", m.dataset.movePreset === a));
    const d = mt[Tt];
    d && (d.preset = a), a === "work" ? (B.min = 30, B.max = 480, B.step = 30, q.min = 300, q.max = 7200, q.step = 300, D.min = 60, D.max = 1800, D.step = 60, s && (B.value = 60, q.value = 1500, D.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (B.min = 3, B.max = 40, B.step = 1, q.min = 20, q.max = 60, q.step = 5, D.min = 5, D.max = 30, D.step = 5, s && (B.value = 20, q.value = 45, D.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), yr();
  }
  function Oi(a, s) {
    const d = us === "work";
    return a.map((m, S) => ({ ...m, id: s + "-" + S + "-" + Date.now().toString(36), useGlobalTiming: !d, duration: d ? 60 : Number(q.value) }));
  }
  function kr() {
    const a = mt[Tt];
    a != null && a.customSequence && (a.includeWarmup = i("includeWarmupPreset").checked, a.includeCooldown = i("includeCooldownPreset").checked, a.includeWarmup && !ia.length && (ia = Oi(go, "warm")), a.includeCooldown && !en.length && (en = Oi(pt, "cool")), Ut());
  }
  function Al() {
    const a = i("upcomingCountSetting");
    if (!a) return;
    const s = Math.max(1, Ke.length - 1), d = En;
    a.innerHTML = "";
    for (let R = 1; R <= s; R++) {
      const O = document.createElement("option");
      O.value = String(R), O.textContent = String(R), a.appendChild(O);
    }
    const m = document.createElement("option");
    m.value = "all", m.textContent = "All", a.appendChild(m);
    const S = d === "all" ? "all" : String(Math.min(Number(d) || 1, s));
    a.value = S, En = S === "all" ? "all" : Number(S);
  }
  function Ut() {
    Number(B.value) * 60;
    const a = Number(q.value), s = Number(D.value), d = mt[Tt], m = !!(d != null && d.customSequence), S = (m ? !d.includeWarmup : d != null && d.warmupOff) ? [] : fs(ia), R = fs(Xe), O = m && !d.includeCooldown ? [] : fs(en);
    if (d && (d.total = Number(B.value), d.work = a, d.rest = s, d.rounds = Number(at.value) || 1, d.customSequence ? (d.sequence = Xe.map((Be) => ({ ...Be })), d.warmup = ia.map((Be) => ({ ...Be })), d.cooldown = en.map((Be) => ({ ...Be }))) : (d.strength = Xe.map((Be) => ({ ...Be })), d.warmup = ia.map((Be) => ({ ...Be })), d.cooldown = en.map((Be) => ({ ...Be })))), d != null && d.customSequence) {
      const Be = [...S.map((ht) => ({ ...ht, section: "warmup" })), ...R, ...O.map((ht) => ({ ...ht, section: "cooldown" }))].map((ht) => {
        if (ht.kind === "video") return { ...ht, duration: Ii(ht, a), rest: 0 };
        if (ht.kind === "rest") {
          const Ea = ht.useGlobalTiming === !0 ? s : Number(ht.duration) || s;
          return { ...ht, duration: Ea, rest: 0 };
        }
        const Ba = ht.useGlobalTiming === !1 && Number(ht.duration) || a;
        return { ...ht, duration: Ba, rest: 0 };
      });
      d.autoRest && Number(d.autoRestDuration) > 0 ? (Ke = [], Be.forEach((ht, Ba) => {
        Ke.push(ht);
        const Ea = Be[Ba + 1];
        ht.kind !== "rest" && Ea && Ea.kind !== "rest" && Ke.push({
          id: "auto-rest-" + Ba,
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
      Ke = [...S.map((Be) => ({ ...Be, section: "warmup" })), ...R, ...O.map((Be) => ({ ...Be, section: "cooldown" }))].map((Be) => Be.kind === "video" ? { ...Be, duration: Ii(Be, a), rest: 0 } : Be.kind === "rest" ? { ...Be, duration: Be.useGlobalTiming === !0 ? s : Number(Be.duration) || s, rest: 0 } : { ...Be, duration: Be.useGlobalTiming === !1 && Number(Be.duration) || a, rest: s }), Ke.forEach((Be, ht) => {
        var Ba;
        ((Ba = Ke[ht + 1]) == null ? void 0 : Ba.kind) === "rest" && (Be.rest = 0);
      }), Ke.length && (Ke[Ke.length - 1].rest = 0);
    const Y = Math.max(1, Math.min(10, Number(at.value) || 1)), ve = Ke, Me = (Be) => Y <= 1 ? null : Be.section === "warmup" || Be.presetRole === "warmup" ? "first" : Be.section === "cooldown" || Be.presetRole === "cooldown" ? "last" : Be.kind === "video" && (Be.videoRounds === "first" || Be.videoRounds === "last") ? Be.videoRounds : null, we = (Be) => !!Me(Be), me = ve.filter((Be) => !we(Be)), Fe = ve.filter(we), Je = me.length, Ve = me.reduce((Be, ht) => Be + ht.duration + ht.rest, 0), He = Fe.reduce((Be, ht) => Be + ht.duration + ht.rest, 0), De = [
      Fe.some((Be) => Be.section === "warmup" || Be.presetRole === "warmup") && "warm-up",
      Fe.some((Be) => Be.section === "cooldown" || Be.presetRole === "cooldown") && "cooldown",
      Fe.some((Be) => Be.kind === "video" && !Be.section && !Be.presetRole) && "video"
    ].filter(Boolean), xt = De.length > 1 ? De.slice(0, -1).join(", ") + " & " + De[De.length - 1] : De[0] || "";
    Ke = [];
    const kt = (Be, ht) => {
      const Ba = Me(Be);
      return !Ba || (Ba === "first" ? ht === 1 : ht === Y);
    };
    for (let Be = 1; Be <= Y; Be++)
      if (ve.filter((ht) => kt(ht, Be)).forEach((ht, Ba) => Ke.push({ ...ht, id: ht.id + (Y > 1 ? "-r" + Be : ""), round: Be, roundIndex: Ba })), Be < Y && Je)
        if (d != null && d.customSequence)
          Ke.push({ id: "round-break-" + Be, name: "Rest", group: "Round " + (Be + 1) + " next", kind: "rest", hidden: !1, duration: s, rest: 0, round: Be, roundIndex: Je, roundBreak: !0 });
        else {
          const ht = Ke[Ke.length - 1];
          ht.rest = s, ht.roundBreakAfter = !0;
        }
    yr();
    const Ue = Ke.reduce((Be, ht) => Be + ht.duration + ht.rest, 0), Mt = Math.round(Ve / 60), Nt = Math.round(Ue / 60), lt = Y > 1 ? bo(Mt) + " × " + Y + " rounds" + (He ? " + " + Ra(He) + " " + xt : "") + " (" + bo(Nt) + ")" : bo(Nt), rt = [S.length ? "warm-up" : "", O.length ? "cooldown" : ""].filter(Boolean), Aa = d != null && d.customSequence ? lt + " · " + Je + " items" + (rt.length && !(Y > 1 && He) ? " · " + rt.join(" + ") : "") : lt + " · " + Ra(a) + " / " + Ra(s) + (rt.length && !(Y > 1 && He) ? " · " + rt.join(" + ") : "");
    de.textContent = Ra(Ve);
    const za = Ke.filter((Be) => !Be.roundBreak).length, ta = Y > 1 ? za + " activities · " + Y + " rounds" : Je + " activities";
    Ne.textContent = Y > 1 ? Y + " rounds · " + bo(Nt) + " total" : "1 round", i("roundsCount").textContent = Y, n.querySelectorAll("[data-rounds-step]").forEach((Be) => {
      Be.disabled = Number(Be.dataset.roundsStep) < 0 ? Y <= 1 : Y >= 10;
    }), d && (d.summary = Aa, d.activityCount = Je);
    const Bo = n.querySelector(".workoutPanel.active .sub");
    Bo && (Bo.textContent = Aa), Zn.textContent = Aa, fi(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((Be) => Be.textContent = ta), yr(), Mr(), Yo(), hi(), Al(), Jt && E(), qe.workout.classList.contains("active") && !Dt && Ha();
  }
  const Dn = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', Fo = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', di = {
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
  }, Oa = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (di[a] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((a) => {
    a.innerHTML = Oa(a.dataset.icon);
  });
  let ya = null, ha = null;
  function Us(a) {
    return a = Math.max(1, Number(a) || 0), a >= 3600 && a % 3600 === 0 ? { value: a / 3600, unit: "hour" } : a >= 60 && a % 60 === 0 ? { value: a / 60, unit: "min" } : { value: a, unit: "sec" };
  }
  function $n(a = !1) {
    const s = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    s && (s.focus({ preventScroll: !0 }), a && s.select());
  }
  function ci(a, s, d = {}) {
    const m = a.kind === "rest", S = a.kind === "video", R = S ? a.useVideoLength !== !1 : m ? a.useGlobalTiming === !0 : a.useGlobalTiming !== !1, O = Number(m ? D.value : q.value), Y = Us(S ? a.useVideoLength === !1 ? a.duration : Ii({ ...a, useVideoLength: !0 }) : R ? O : a.duration || O), ve = S && (Number(a.videoDuration) > 0 || Number(a.end) > 0), Me = S ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + nt(a.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + nt(a.autoName ? "" : a.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Ue, Mt]) => '<option value="' + Ue + '"' + ((a.videoRounds || "every") === Ue ? " selected" : "") + ">" + Mt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + nt(a.name) + '" placeholder="' + (m ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + nt(a.group) + '" placeholder="' + (m ? "Rest" : "e.g. Glutes + legs") + '"></label>', we = S ? "Play the whole " + (Number(a.start) > 0 || Number(a.end) > 0 ? "clip" : "video") + (ve ? " · " + wo(Ii({ ...a, useVideoLength: !0 })) : "") : "Use global timing · " + Ra(O), me = document.createElement("div");
    me.className = "moveRow editing" + (d.sheet ? " inSheet" : ""), me.dataset.index = s, me.dataset.id = a.id;
    const Fe = d.isNew ?? (ha == null ? void 0 : ha.item) === a, Je = d.sheet ? '<div class="moveEditActions sheetActions">' + (Fe ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (a.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + nt(a.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Fe ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    me.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (S ? " videoFields" : "") + '">' + Me + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (R ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + nt(we) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + Y.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Ue) => '<option value="' + Ue + '"' + (Ue === Y.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Ue] + "</option>").join("") + "</select></div></div>" + Je + "</div>";
    const Ve = (Ue) => me.querySelector("[data-f=" + Ue + "]"), He = () => {
      const Ue = Ve("global").checked;
      Ve("dur").disabled = Ue, Ve("unit").disabled = Ue, me.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Ue);
    };
    Ve("global").addEventListener("change", He), He();
    const De = () => {
      var Ue;
      if (d.sheet) {
        (Ue = d.onCancel) == null || Ue.call(d);
        return;
      }
      Fe && qi(), ya = null, Ut();
    }, xt = () => {
      var Nt;
      if (S) {
        kt();
        return;
      }
      const Ue = Ve("name").value.trim();
      if (!Ue) {
        Ve("name").focus();
        return;
      }
      a.name = Ue, a.group = Ve("group").value.trim() || (m ? "Rest" : "Movement");
      const Mt = Ve("global").checked;
      if (a.useGlobalTiming = Mt, Mt || (a.duration = Math.max(m ? 5 : 1, xo(Ve("dur").value, Ve("unit").value))), d.sheet) {
        (Nt = d.onSaved) == null || Nt.call(d);
        return;
      }
      Fe && (ha = null), ya = null, Ut(), It(Fe ? m ? "Rest added" : "Movement added" : "Movement updated");
    }, kt = () => {
      var rt;
      const Ue = Ve("url").value.trim(), Mt = Gs(Ue);
      if (!Mt) {
        Ve("urlError").hidden = !1, Ve("url").classList.add("invalid"), Ve("url").focus();
        return;
      }
      const Nt = Mt.id !== a.videoId;
      a.url = Ue, a.videoId = Mt.id, a.start = Mt.start, a.end = Mt.end, Nt && (a.videoDuration = null, a.videoError = null);
      const lt = Ve("name").value.trim();
      a.autoName = !lt, a.name = lt || (Nt ? "" : a.name) || a.videoTitle || "YouTube video", a.group = "Video", a.videoRounds = Ve("rounds").value, a.useVideoLength = Ve("global").checked, a.useVideoLength || (a.duration = Math.max(5, xo(Ve("dur").value, Ve("unit").value))), d.sheet ? (rt = d.onSaved) == null || rt.call(d) : (Fe && (ha = null), ya = null, Ut(), It(Fe ? "Video added" : "Video updated")), (Nt || !a.videoDuration || a.autoName && !a.videoTitle) && Hd(a);
    };
    if (S && Ve("url").addEventListener("input", () => {
      Ve("urlError").hidden = !0, Ve("url").classList.remove("invalid");
    }), me.querySelector("[data-a=cancel]").addEventListener("click", De), me.querySelector("[data-a=save]").addEventListener("click", xt), d.sheet && !Fe) {
      me.querySelector("[data-a=hide]").addEventListener("click", () => {
        var Mt;
        return (Mt = d.onHide) == null ? void 0 : Mt.call(d);
      });
      const Ue = me.querySelector("[data-a=remove]");
      ai(Ue, Ue.querySelector(".removeFill"), 1200, () => {
        var Mt;
        return (Mt = d.onRemove) == null ? void 0 : Mt.call(d);
      });
    }
    return me.addEventListener("keydown", (Ue) => {
      Ue.key === "Escape" && (Ue.preventDefault(), Ue.stopPropagation(), De()), Ue.key === "Enter" && Ue.target.matches("input") && (Ue.preventDefault(), xt());
    }), me;
  }
  function Oo(a, s) {
    const d = i(s);
    d.innerHTML = "", a.forEach((m, S) => {
      if (m === ya && !jo()) {
        d.appendChild(ci(m, S));
        return;
      }
      const R = document.createElement("div");
      R.className = "moveRow" + (m.hidden ? " hidden" : "") + (m.kind === "rest" ? " restItem" : "") + (m.kind === "video" ? " videoItem" : "") + ($l(m) ? " noMeta" : ""), R.dataset.index = S, R.dataset.id = m.id;
      const O = m.kind === "rest" ? m.useGlobalTiming === !0 ? "Global timing" : Ra(m.duration) : m.useGlobalTiming === !1 ? Ra(m.duration) : "Global timing", Y = m.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", ve = m.kind === "video" ? m.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (m.useVideoLength === !1 ? "stops after " + Ra(m.duration) : Number(m.videoDuration) > 0 || Number(m.end) > 0 ? wo(Ii(m)) : "plays to the end") + (m.videoRounds === "first" ? " · first round only" : m.videoRounds === "last" ? " · last round only" : "") : m.group + " · " + O, Me = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + nt(m.name) + '. Drag, or use the up and down arrow keys">' + Dn + "</button>", we = '<div class="moveText"><div class="moveItemName">' + nt(m.name) + Y + '</div><div class="moveMeta">' + nt(ve) + "</div></div>", me = (Ve) => Ve.addEventListener("keydown", (He) => {
        var kt, Ue;
        if (He.key !== "ArrowUp" && He.key !== "ArrowDown") return;
        He.preventDefault();
        const De = a.indexOf(m), xt = De + (He.key === "ArrowUp" ? -1 : 1);
        xt < 0 || xt >= a.length || (a.splice(De, 1), a.splice(xt, 0, m), Ut(), (Ue = (kt = i(s).children[xt]) == null ? void 0 : kt.querySelector(".dragHandle")) == null || Ue.focus());
      });
      if (jo()) {
        R.classList.add("phoneRow"), R.tabIndex = 0, R.setAttribute("role", "button"), R.setAttribute("aria-label", "Edit " + (m.name || "step")), R.innerHTML = Me + we + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Ve = R.querySelector(".dragHandle");
        Ve.addEventListener("pointerdown", (He) => no(He, R, d, a)), me(Ve), R.addEventListener("click", (He) => {
          He.target.closest(".dragHandle") || zi(m, a);
        }), R.addEventListener("keydown", (He) => {
          He.key === "Enter" && He.target === R && (He.preventDefault(), zi(m, a));
        }), d.appendChild(R);
        return;
      }
      R.innerHTML = Me + we + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + nt(m.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (m.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + nt(m.name) + '"><span class="removeFill"></span><span class="removeLabel">' + Fo + "</span></button></div>", R.querySelector(".editBtn").addEventListener("click", () => {
        qi(), ya = m, Ut(), $n();
      }), R.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        m.hidden = !m.hidden, Ut();
      });
      const Fe = R.querySelector(".removeBtn");
      ai(Fe, Fe.querySelector(".removeFill"), 1200, () => {
        const Ve = a.indexOf(m);
        Ve < 0 || (a.splice(Ve, 1), Ut(), It("Removed " + m.name, { label: "Undo", run: () => {
          a.splice(Math.min(Ve, a.length), 0, m), Ut();
        } }));
      });
      const Je = R.querySelector(".dragHandle");
      Je.addEventListener("pointerdown", (Ve) => no(Ve, R, d, a)), me(Je), d.appendChild(R);
    });
  }
  const Yt = () => {
    var a;
    return (a = window.matchMedia) == null ? void 0 : a.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, pi = (a) => {
    var s;
    try {
      (s = navigator.vibrate) == null || s.call(navigator, a);
    } catch {
    }
  };
  function no(a, s, d, m) {
    if (a.button !== void 0 && a.button !== 0) return;
    a.preventDefault();
    const S = a.currentTarget, R = a.pointerId, O = !Yt();
    try {
      S.setPointerCapture(R);
    } catch {
    }
    const Y = s.closest(".exerciseScroller") || ui(s), ve = d.style.position;
    d.style.position = "relative";
    const Me = [...d.children].filter((ft) => ft.classList.contains("moveRow")), we = Me.indexOf(s), me = parseFloat(getComputedStyle(d).rowGap) || 8, Fe = s.offsetHeight, Je = Fe + me, Ve = Me.map((ft) => ft.offsetTop), He = Me.map((ft) => ft.offsetHeight), De = () => d.getBoundingClientRect().top, xt = d.getBoundingClientRect().width, kt = a.clientY - (De() + Ve[we]), Ue = a.clientX;
    let Mt = a.clientY, Nt = a.clientX, lt = De() + Ve[we], rt = 0, Aa = 0, za = 0, ta = 1, Bo = 0, Be = we, ht = !1, Ba = 0, Ea = !1, wl = !1, es = Ve[we];
    d.classList.add("reordering"), s.classList.add("dragging"), s.style.transition = "none", pi(8);
    const Fs = () => {
      const ft = Mt - kt + Fe / 2 - De();
      let Et = 0;
      return Me.forEach((Zt, Ga) => {
        Ga !== we && ft > Ve[Ga] + He[Ga] / 2 && Et++;
      }), Et;
    }, xl = () => {
      Me.forEach((ft, Et) => {
        if (Et === we) return;
        const Zt = we < Be && Et > we && Et <= Be ? -Je : we > Be && Et >= Be && Et < we ? Je : 0;
        ft.style.transform = Zt ? "translateY(" + Zt + "px)" : "";
      });
    }, _i = () => {
      const ft = d.getBoundingClientRect(), Et = Math.abs(Nt - Ue) > Math.max(80, xt * 0.3) || Nt < ft.left - 24 || Nt > ft.right + 24;
      Et !== ht && (ht = Et, s.classList.toggle("willReturn", Et), pi(Et ? 10 : 4));
      const Zt = ht ? we : Fs();
      Zt !== Be && (Be = Zt, xl(), ht || pi(4));
    }, si = () => {
      if (Be === we) return Ve[we];
      const ft = Me.filter((Zt, Ga) => Ga !== we);
      let Et = Ve[0];
      for (let Zt = 0; Zt < Be; Zt++) Et += ft[Zt].offsetHeight + me;
      return Et;
    }, ts = () => {
      const ft = O ? Math.min(Math.abs(rt) / 40, 1) : 0, Et = O && !Ea ? Math.max(-3, Math.min(3, za * 0.6)) : 0;
      s.style.transform = "translate(" + Aa.toFixed(2) + "px," + (lt - (De() + Ve[we])).toFixed(2) + "px) rotate(" + Et.toFixed(2) + "deg) scale(" + (ta * (1 - 0.04 * ft)).toFixed(4) + "," + (ta * (1 + 0.06 * ft)).toFixed(4) + ")";
    }, ct = () => {
      Ba = requestAnimationFrame(ct);
      const ft = Nt - Ue, Et = Ea ? De() + es : Mt - kt, Zt = Ea ? 0 : ht ? ft * 0.9 : Math.max(-22, Math.min(22, ft * 0.22)), Ga = Ea ? 1 : ht ? 0.97 : 1.035;
      if (!O) {
        lt = Et, Aa = Ea ? 0 : Zt, ta = 1, ts(), Ea && aa();
        return;
      }
      const Os = Ea ? 0.24 : 0.2, ec = Ea ? 0.62 : 0.68;
      rt = (rt + (Et - lt) * Os) * ec, lt += rt, za = (za + (Zt - Aa) * 0.16) * 0.7, Aa += za, Bo = (Bo + (Ga - ta) * 0.22) * 0.6, ta += Bo, ts(), Ea && Math.abs(rt) < 0.15 && Math.abs(Et - lt) < 0.5 && Math.abs(Aa) < 0.5 && Math.abs(ta - 1) < 3e-3 && aa();
    }, Ft = setInterval(() => {
      if (!Y || Ea) return;
      const ft = Y.getBoundingClientRect(), Et = 56, Zt = Mt < ft.top + Et ? -10 : Mt > ft.bottom - Et ? 10 : 0;
      Zt && (Y.scrollTop += Zt, _i());
    }, 30);
    function aa() {
      if (wl) return;
      wl = !0, cancelAnimationFrame(Ba);
      const ft = Be !== we, Et = s.dataset.id;
      if (d.classList.remove("reordering"), Me.forEach((Ga) => {
        Ga.style.transition = "none", Ga.style.transform = "";
      }), s.classList.remove("dragging", "willReturn"), d.style.position = ve, ft) {
        const [Ga] = m.splice(we, 1);
        m.splice(Be, 0, Ga);
      }
      Ut();
      const Zt = Et && d.querySelector('.moveRow[data-id="' + Et + '"]');
      Zt && O && Zt.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), ft && It("Order saved");
    }
    const pa = (ft) => {
      if (ft.pointerId === R) {
        if (ft.pointerType === "mouse" && ft.buttons === 0) {
          Fn();
          return;
        }
        Mt = ft.clientY, Nt = ft.clientX, _i();
      }
    }, mn = (ft) => {
      ft.pointerId === R && Fn();
    };
    function Fn() {
      Ea || (window.removeEventListener("pointermove", pa, !0), window.removeEventListener("pointerup", mn, !0), window.removeEventListener("pointercancel", mn, !0), S.removeEventListener("lostpointercapture", Fn), clearInterval(Ft), ht && Be !== we && (Be = we, xl()), es = si(), Ea = !0, pi(6), setTimeout(aa, 800));
    }
    window.addEventListener("pointermove", pa, !0), window.addEventListener("pointerup", mn, !0), window.addEventListener("pointercancel", mn, !0), S.addEventListener("lostpointercapture", Fn), Ba = requestAnimationFrame(ct), ts();
  }
  function Mr() {
    var S, R, O, Y;
    const a = mt[Tt], s = (S = i("warmupList")) == null ? void 0 : S.closest("section"), d = (R = i("cooldownList")) == null ? void 0 : R.closest("section"), m = (Y = (O = i("strengthList")) == null ? void 0 : O.closest("section")) == null ? void 0 : Y.querySelector(".sectionTitle");
    a != null && a.customSequence ? (s && (s.hidden = !a.includeWarmup), d && (d.hidden = !a.includeCooldown), m && (m.textContent = "Move sequence")) : (s && (s.hidden = !!(a != null && a.warmupOff)), d && (d.hidden = !1), m && (m.textContent = "Kettlebell work")), Oo(ia, "warmupList"), Oo(Xe, "strengthList"), Oo(en, "cooldownList");
  }
  function qi() {
    if (!ha) return;
    const { item: a, arr: s } = ha;
    ha = null;
    const d = s.indexOf(a);
    d >= 0 && s.splice(d, 1), ya === a && (ya = null);
  }
  function Wi(a) {
    return a.id === "warmupList" ? { arr: ia, kind: "warmup", group: "Warm-up" } : a.id === "cooldownList" ? { arr: en, kind: "cooldown", group: "Cooldown" } : { arr: Xe, kind: "work", group: "" };
  }
  function Ys(a, s) {
    const d = Wi(s), m = Date.now().toString(36);
    return a === "video" ? { id: "video-" + m, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : a === "rest" ? { id: "rest-" + m, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(D.value) } : { id: "movement-" + m, name: "", group: d.group, kind: d.kind, hidden: !1, useGlobalTiming: !0, duration: Number(q.value) };
  }
  const Zs = "cubic-bezier(.34,1.46,.64,1)";
  function qo(a, s) {
    if (Yt() || !a) {
      s();
      return;
    }
    const d = (R) => {
      var O;
      return ((O = R.dataset) == null ? void 0 : O.id) || R;
    }, m = () => [...a.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], S = new Map(m().map((R) => [d(R), R.getBoundingClientRect().top]));
    s(), m().forEach((R) => {
      const O = S.get(d(R));
      if (O === void 0) return;
      const Y = O - R.getBoundingClientRect().top;
      Math.abs(Y) < 0.5 || R.animate([{ transform: "translateY(" + Y + "px)" }, { transform: "none" }], { duration: 440, easing: Zs });
    });
  }
  function Wo(a, s) {
    if (!a || Yt()) return;
    const d = a.offsetHeight, m = Math.max(0, d - (s || 0));
    a.animate([{ clipPath: "inset(0 0 " + m + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Zs });
  }
  function Sr(a, s, d, m) {
    const { arr: S } = Wi(s), R = Ys(a, s);
    S.splice(Math.max(0, Math.min(d, S.length)), 0, R), ha = { item: R, arr: S }, ya = R, qo(s.closest(".exerciseScroller,.createStepSlot") || s, () => Ut());
    const O = s.querySelector(".moveRow.editing");
    return Wo(O, m), $n(a === "rest"), O;
  }
  function ui(a) {
    for (let s = a; s && s.nodeType === 1; s = s.parentElement) {
      const d = getComputedStyle(s).overflowY;
      if (/(auto|scroll)/.test(d) && s.scrollHeight > s.clientHeight) return s;
    }
    return null;
  }
  const la = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function bn(a, s) {
    const d = document.createElement("div");
    return d.className = "addGhost" + (a === "movement" ? "" : " rest"), d.innerHTML = '<span class="addGhostGrip">' + Dn + '</span><span class="addGhostText"><strong>' + nt(s[0]) + "</strong><small>" + nt(s[1]) + "</small></span>", i("workoutModal").appendChild(d), d;
  }
  function Lt(a) {
    a.classList.add("leaving"), setTimeout(() => a.remove(), 180);
  }
  function Vi(a, s, d, m) {
    (ya || ha) && (qi(), ya = null, Ut());
    const S = a.getBoundingClientRect(), R = bn(s, la[s]);
    R.setAttribute("aria-hidden", "true"), R.style.width = S.width + "px", R.style.height = S.height + "px", R.style.transform = "translate(" + S.left + "px," + S.top + "px)", a.classList.add("lifting");
    const O = ui(a);
    return Vo({
      ghost: R,
      origin: S,
      sx: d,
      sy: m,
      scroller: O,
      column: a.closest(".exerciseScroller,.createFlow") || O,
      home: () => a.getBoundingClientRect(),
      onDrop: (Y, ve, Me) => {
        Lt(R), a.classList.remove("lifting"), Sr(s, Y, ve, Me);
      },
      onReturn: () => {
        Lt(R), a.classList.remove("lifting");
      }
    });
  }
  function Vo({ ghost: a, origin: s, sx: d, sy: m, scroller: S, column: R, home: O, onDrop: Y, onReturn: ve, rowLook: Me = !1 }) {
    var ts;
    const we = !Yt(), me = ((ts = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : ts.offsetHeight) || 80, Fe = d - s.left, Je = m - s.top, Ve = 44;
    let He = d, De = m, xt = s.left, kt = s.top, Ue = 0, Mt = 0, Nt = !we, lt = null, rt = null, Aa = -1, za = 0, ta = null;
    const Bo = () => ["warmupList", "strengthList", "cooldownList"].map((ct) => i(ct)).filter((ct) => ct && ct.getClientRects().length && !ct.closest("[hidden]")), Be = (ct) => {
      if (ct === lt) return;
      lt = ct, a.classList.toggle("overList", !!ct || Me);
      const Ft = ct ? ct.getBoundingClientRect().width : s.width;
      a.style.width = Ft + "px", a.style.height = (ct ? me : s.height) + "px";
    }, ht = (ct) => {
      ct.classList.add("leaving"), ct.style.height = "0px", ct.style.marginTop = "-8px", setTimeout(() => ct.remove(), we ? 320 : 0);
    }, Ba = (ct, Ft, aa) => {
      if (rt && rt.parentNode === ct && Aa === aa || (rt && (ht(rt), rt = null, Aa = -1), !ct)) return;
      const pa = document.createElement("div");
      pa.className = "dropSlot", ct.insertBefore(pa, Ft), rt = pa, Aa = aa, pa.getBoundingClientRect(), pa.style.height = me + "px", pa.style.marginTop = "0px";
    }, Ea = () => {
      let ct = null, Ft = 1 / 0;
      for (const Fn of Bo()) {
        const ft = Fn.getBoundingClientRect();
        if (He < ft.left - 48 || He > ft.right + 48) continue;
        const Et = ft.top - 28, Zt = ft.bottom + 28, Ga = De < Et ? Et - De : De > Zt ? De - Zt : 0;
        Ga < Ft && (Ft = Ga, ct = Fn);
      }
      const aa = R == null ? void 0 : R.getBoundingClientRect(), mn = aa && He >= aa.left && He <= aa.right && De >= aa.top && De <= aa.bottom || Ft === 0 ? ct : null;
      if (mn) {
        const Fn = [...mn.children].filter((Et) => Et.classList.contains("moveRow"));
        let ft = Fn.findIndex((Et) => {
          const Zt = Et.getBoundingClientRect();
          return De < Zt.top + Zt.height / 2;
        });
        ft < 0 && (ft = Fn.length), Ba(mn, Fn[ft] || null, ft);
      } else Ba(null);
      Be(mn);
    }, wl = () => {
      if (ta) return ta.aim();
      if (lt) {
        const ct = lt.getBoundingClientRect();
        let Ft = De - me / 2;
        return rt && (Ft = Ft * 0.6 + rt.getBoundingClientRect().top * 0.4), { x: ct.left, y: Ft };
      }
      return { x: He - Fe, y: De - Je };
    }, es = (ct, Ft, aa, pa) => {
      a.style.transform = "translate(" + xt + "px," + kt + "px) rotate(" + ct + "deg) rotate(" + Ft + "rad) scale(" + aa + "," + pa + ") rotate(" + -Ft + "rad)";
    }, Fs = () => {
      if (za = requestAnimationFrame(Fs), !Nt) {
        const ft = He - d, Et = De - m, Zt = Math.min(Math.hypot(ft, Et) / Ve, 1);
        xt = s.left + ft * 0.35, kt = s.top + Et * 0.35, es(0, Math.atan2(Et, ft), 1 + 0.155 * Zt, 1 - 0.1 * Zt);
        return;
      }
      const ct = wl();
      if (!we) {
        xt = ct.x, kt = ct.y, es(0, 0, 1, 1), ta && (cancelAnimationFrame(za), ta.done());
        return;
      }
      const Ft = ta ? ta.k : 0.17, aa = ta ? ta.d : 0.7;
      Ue = (Ue + (ct.x - xt) * Ft) * aa, Mt = (Mt + (ct.y - kt) * Ft) * aa, xt += Ue, kt += Mt;
      const pa = Math.hypot(Ue, Mt), mn = Math.min(pa / 48, 1), Fn = lt || ta ? 0 : Math.max(-5, Math.min(5, Ue * 0.32));
      es(Fn, Math.atan2(Mt, Ue), 1 + 0.1 * mn, 1 - 0.063 * mn), ta && pa < 0.15 && Math.hypot(ct.x - xt, ct.y - kt) < 0.6 && (cancelAnimationFrame(za), ta.done());
    }, xl = setInterval(() => {
      if (!S || ta) return;
      const ct = S.getBoundingClientRect(), Ft = 64, aa = De < ct.top + Ft ? -(ct.top + Ft - De) / 4 : De > ct.bottom - Ft ? (De - (ct.bottom - Ft)) / 4 : 0;
      aa && (S.scrollTop += Math.max(-18, Math.min(18, aa)), Ea());
    }, 30);
    za = requestAnimationFrame(Fs);
    let _i = !1;
    const si = (ct, Ft) => {
      if (_i) return;
      _i = !0, cancelAnimationFrame(za);
      const aa = rt ? rt.offsetHeight : me;
      !ct && rt && (rt.remove(), rt = null), ct ? Y(ct, Ft, aa) : ve();
    };
    return {
      move(ct, Ft) {
        He = ct, De = Ft, !Nt && Math.hypot(He - d, De - m) > Ve && (Nt = !0, Ue = (He - d) * 0.085, Mt = (De - m) * 0.085), Nt && Ea();
      },
      drop(ct) {
        clearInterval(xl);
        const Ft = lt, aa = Aa;
        if (!ct && Ft && rt) {
          const pa = rt;
          ta = { k: 0.24, d: 0.62, aim: () => {
            const mn = pa.getBoundingClientRect();
            return { x: mn.left, y: mn.top };
          }, done: () => si(Ft, aa) }, setTimeout(() => si(Ft, aa), 650), we || (cancelAnimationFrame(za), si(Ft, aa));
          return;
        }
        Ba(null), Be(null), ta = { k: 0.2, d: 0.66, aim: () => {
          const pa = O();
          return { x: pa.left, y: pa.top };
        }, done: () => si(null) }, setTimeout(() => si(null), 650), we || (cancelAnimationFrame(za), si(null));
      }
    };
  }
  function ji(a, s) {
    let d = !1;
    a.addEventListener("click", (m) => {
      if (d) {
        d = !1, m.preventDefault();
        return;
      }
      if (jo()) {
        ms(s);
        return;
      }
      const S = i("strengthList"), R = Sr(s, S, Wi(S).arr.length, 0);
      R == null || R.scrollIntoView({ block: "nearest", behavior: Yt() ? "auto" : "smooth" });
    }), a.addEventListener("pointerdown", (m) => {
      if (m.button !== void 0 && m.button !== 0) return;
      const S = m.pointerId, R = m.clientX, O = m.clientY;
      let Y = null, ve = !1;
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
            if (Math.hypot(De.clientX - R, De.clientY - O) < 6) return;
            Y = Vi(a, s, R, O);
          }
          Y.move(De.clientX, De.clientY);
        }
      }, we = (De) => {
        De.pointerId === S && He(!1);
      }, me = (De) => {
        De.pointerId === S && He(!0);
      }, Fe = () => He(!1), Je = () => He(!0), Ve = (De) => {
        De.key === "Escape" && Y && (De.preventDefault(), De.stopPropagation(), He(!0));
      };
      function He(De) {
        if (!ve && (ve = !0, window.removeEventListener("pointermove", Me, !0), window.removeEventListener("pointerup", we, !0), window.removeEventListener("pointercancel", me, !0), window.removeEventListener("keydown", Ve, !0), window.removeEventListener("blur", Je), a.removeEventListener("lostpointercapture", Fe), Y)) {
          const xt = Y;
          Y = null, d = !0, setTimeout(() => {
            d = !1;
          }, 0), xt.drop(De);
        }
      }
      window.addEventListener("pointermove", Me, !0), window.addEventListener("pointerup", we, !0), window.addEventListener("pointercancel", me, !0), window.addEventListener("keydown", Ve, !0), window.addEventListener("blur", Je), a.addEventListener("lostpointercapture", Fe);
    });
  }
  const tn = (Fa = window.matchMedia) == null ? void 0 : Fa.call(window, "(max-width: 620px)");
  function jo() {
    var a;
    return !!((a = window.matchMedia) != null && a.call(window, "(max-width: 620px)").matches);
  }
  const hs = (a) => a.charAt(0).toUpperCase() + a.slice(1), _n = (a) => a.kind === "rest" ? "rest" : a.kind === "video" ? "video" : "movement";
  let yo = null, Xt = null;
  function Xn(a, s, d, m) {
    Ta(), i("sheetTitle").textContent = a;
    const S = i("sheetBody");
    S.innerHTML = "", S.appendChild(s), yo = d || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !S.contains(s)) return;
      const R = m ? S.querySelector("input[data-f=url],input[data-f=name]") : S.querySelector("button,input,select");
      R == null || R.focus({ preventScroll: !0 });
    }, Yt() ? 0 : 360);
  }
  function Ta() {
    const a = i("sheet");
    if (!a.classList.contains("open")) return;
    a.classList.remove("open"), i("sheetScrim").classList.remove("open"), a.setAttribute("aria-hidden", "true"), a.contains(n.activeElement) && n.activeElement.blur();
    const s = yo;
    yo = null, s == null || s(), setTimeout(ka, 0);
  }
  i("sheetScrim").addEventListener("click", Ta), i("sheet").addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), Ta());
  });
  function zi(a, s) {
    const d = ci(a, s.indexOf(a), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Ta(), Ut(), It(hs(_n(a)) + " updated");
      },
      onCancel: Ta,
      onHide() {
        a.hidden = !a.hidden, Ta(), Ut(), It((a.hidden ? "Hidden: " : "Showing: ") + a.name);
      },
      onRemove() {
        Ta();
        const m = s.indexOf(a);
        m < 0 || (s.splice(m, 1), Ut(), It("Removed " + a.name, { label: "Undo", run: () => {
          s.splice(Math.min(m, s.length), 0, a), Ut();
        } }));
      }
    });
    Xn("Edit " + _n(a), d, null, !1);
  }
  function zo() {
    const a = document.createElement("div");
    a.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([s, d, m, S]) => {
      const R = document.createElement("button");
      R.type = "button", R.className = "sheetChoice", R.innerHTML = '<span class="timeIcon" aria-hidden="true">' + Oa(d) + "</span><span><strong>" + m + "</strong><small>" + S + "</small></span>", R.addEventListener("click", () => ms(s)), a.appendChild(R);
    }), Xn("Add to the move", a, null, !1);
  }
  function ms(a) {
    Xt && ko();
    const s = Ys(a, i("strengthList")), d = ci(s, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Ta(), El(s, a);
      },
      onCancel: Ta
    });
    Xn("New " + _n(s), d, null, !0);
  }
  const La = i("workoutModal").querySelector(".modalStatic"), Go = { parent: La.parentNode, next: La.nextSibling };
  function oo() {
    const a = document.createElement("div");
    a.className = "sheetSetup", a.appendChild(La);
    const s = document.createElement("button");
    s.type = "button", s.className = "primary sheetDone", s.textContent = "Done", s.addEventListener("click", Ta), a.appendChild(s), Xn("Setup", a, () => {
      Go.parent.insertBefore(La, Go.next), fi();
    }, !1);
  }
  function fi() {
    var s, d;
    const a = i("setupSummaryName");
    a && (a.textContent = (((s = i("workoutNameInput")) == null ? void 0 : s.value) || "").trim() || ((d = mt[Tt]) == null ? void 0 : d.name) || "Move", i("setupSummaryMeta").textContent = Zn.textContent);
  }
  i("setupSummary").addEventListener("click", oo), i("addFab").addEventListener("click", zo);
  function Uo() {
    const a = i("strengthList");
    return ui(a) || a.closest(".exerciseScroller");
  }
  function Cr() {
    const a = i("strengthList").getBoundingClientRect(), s = (Uo() || i("strengthList")).getBoundingClientRect(), d = (Xt == null ? void 0 : Xt.ghost.offsetHeight) || 64;
    return { left: a.left, top: Math.max(s.top + 12, Math.min(s.bottom - d - 96, s.top + s.height * 0.55 - d / 2)), width: a.width, height: d };
  }
  function El(a, s) {
    var Y;
    const d = bn(s, [a.name || la[s][0], "Drag into place"]);
    d.classList.add("overList", "hovering"), d.setAttribute("aria-label", (a.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const m = document.createElement("span");
    m.className = "addGhostActions", m.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + nt(a.name) + '">✕</button>', d.appendChild(m), Xt = { item: a, type: s, ghost: d };
    const S = ((Y = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Y.offsetHeight) || 64;
    d.style.width = i("strengthList").getBoundingClientRect().width + "px", d.style.height = S + "px";
    const R = Cr(), O = sn.querySelector(".modal").getBoundingClientRect().bottom;
    d.style.transform = "translate(" + R.left + "px," + O + "px)", d.getBoundingClientRect(), Yt() || (d.classList.add("rising"), setTimeout(() => d.classList.remove("rising"), 650)), d.style.transform = "translate(" + R.left + "px," + R.top + "px)", m.querySelector("[data-a=end]").addEventListener("click", ko), m.querySelector("[data-a=discard]").addEventListener("click", Ks), d.addEventListener("pointerdown", Tr);
  }
  function Tr(a) {
    if (!Xt || a.target.closest("button") || a.button !== void 0 && a.button !== 0) return;
    a.preventDefault();
    const { item: s, ghost: d } = Xt, m = a.pointerId;
    try {
      d.setPointerCapture(m);
    } catch {
    }
    d.classList.remove("hovering", "rising"), d.classList.add("held");
    const S = d.getBoundingClientRect(), R = Uo(), O = Vo({
      ghost: d,
      origin: { left: S.left, top: S.top, width: S.width, height: S.height },
      sx: a.clientX,
      sy: a.clientY,
      scroller: R,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || R,
      rowLook: !0,
      home: Cr,
      onDrop: (He, De, xt) => {
        Xt = null, Lt(d), gs(s, He, De, xt);
      },
      onReturn: () => {
        d.classList.remove("held"), d.classList.add("hovering");
      }
    });
    let Y = !1;
    const ve = (He) => {
      if (He.pointerId === m) {
        if (He.pointerType === "mouse" && He.buttons === 0) {
          Ve(!1);
          return;
        }
        O.move(He.clientX, He.clientY);
      }
    }, Me = (He) => {
      He.pointerId === m && Ve(!1);
    }, we = (He) => {
      He.pointerId === m && Ve(!0);
    }, me = () => Ve(!1), Fe = () => Ve(!0), Je = (He) => {
      He.key === "Escape" && (He.preventDefault(), Ve(!0));
    };
    function Ve(He) {
      Y || (Y = !0, window.removeEventListener("pointermove", ve, !0), window.removeEventListener("pointerup", Me, !0), window.removeEventListener("pointercancel", we, !0), window.removeEventListener("keydown", Je, !0), window.removeEventListener("blur", Fe), d.removeEventListener("lostpointercapture", me), O.drop(He));
    }
    window.addEventListener("pointermove", ve, !0), window.addEventListener("pointerup", Me, !0), window.addEventListener("pointercancel", we, !0), window.addEventListener("keydown", Je, !0), window.addEventListener("blur", Fe), d.addEventListener("lostpointercapture", me);
  }
  function gs(a, s, d, m) {
    const S = Wi(s);
    a.kind !== "rest" && a.kind !== "video" && (a.kind = S.kind, S.group && (!a.group || a.group === "Movement") && (a.group = S.group)), S.arr.splice(Math.max(0, Math.min(d, S.arr.length)), 0, a), qo(s.closest(".exerciseScroller,.createStepSlot") || s, () => Ut()), Wo(s.querySelector('.moveRow[data-id="' + a.id + '"]'), m), It(hs(_n(a)) + " added");
  }
  function ko() {
    var m;
    if (!Xt) return;
    const { item: a, ghost: s } = Xt;
    Xt = null, Lt(s);
    const d = i("strengthList");
    gs(a, d, Wi(d).arr.length, 0), (m = d.querySelector('.moveRow[data-id="' + a.id + '"]')) == null || m.scrollIntoView({ block: "nearest", behavior: Yt() ? "auto" : "smooth" });
  }
  function Ks() {
    if (!Xt) return;
    const a = Xt.ghost;
    Xt = null, Lt(a), It("Discarded");
  }
  function Gi() {
    Xt && (Xt.ghost.remove(), Xt = null);
  }
  window.addEventListener("resize", () => {
    if (Xt != null && Xt.ghost.classList.contains("hovering")) {
      const a = Cr();
      Xt.ghost.style.width = a.width + "px", Xt.ghost.style.transform = "translate(" + a.left + "px," + a.top + "px)";
    }
  }), (cd = tn == null ? void 0 : tn.addEventListener) == null || cd.call(tn, "change", () => {
    Ta(), Xt && !jo() && ko(), Mr();
  });
  {
    const a = i("workoutModal").querySelector(".modal");
    a.addEventListener("scroll", () => {
      (a.scrollTop || a.scrollLeft) && (a.scrollTop = 0, a.scrollLeft = 0);
    });
  }
  function ka() {
    const a = i("workoutModal"), s = window.visualViewport;
    if (!a.classList.contains("open") || !jo()) {
      vs();
      return;
    }
    const d = s ? s.offsetTop : 0, m = s ? s.offsetLeft : 0, S = s ? s.width : window.innerWidth, R = s ? s.height : window.innerHeight;
    Object.assign(a.style, { right: "auto", bottom: "auto", width: S + "px", height: R + "px", top: d + "px", left: m + "px" });
    const O = a.getBoundingClientRect();
    Math.abs(O.top - d) > 0.5 && (a.style.top = 2 * d - O.top + "px"), Math.abs(O.left - m) > 0.5 && (a.style.left = 2 * m - O.left + "px");
  }
  function vs() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((a) => i("workoutModal").style.removeProperty(a));
  }
  (bl = window.visualViewport) == null || bl.addEventListener("resize", ka), (ho = window.visualViewport) == null || ho.addEventListener("scroll", ka), window.addEventListener("resize", ka), window.addEventListener("scroll", ka, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(ka, 250));
  function Yo() {
    Xe.length > 0;
    const a = i("addMovementBtn"), s = i("addRestBtn");
    a && (a.innerHTML = Dn + "<span>Add movement</span>"), s && (s.innerHTML = Dn + "<span>Add rest</span>");
    const d = i("addVideoBtn");
    d && (d.innerHTML = Dn + "<span>Add video</span>");
  }
  function hi() {
    const a = i("useGlobalTiming").checked, s = i("addMovementDuration"), d = i("addMovementUnit");
    s.disabled = a, d.disabled = a, s.parentElement.style.opacity = a ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + Ra(q.value);
    const m = i("useGlobalRestTiming").checked, S = i("addRestDuration"), R = i("addRestUnit");
    S.disabled = m, R.disabled = m, S.parentElement.style.opacity = m ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + Ra(D.value);
  }
  let an = "movement";
  function Ui(a) {
    an = a;
    const s = i("movementFields"), d = i("restFields");
    s.hidden = a !== "movement", d.hidden = a !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), hi();
  }
  function Yi() {
    mt[Tt];
    const a = Jt ? !0 : i("useGlobalTiming").checked, s = a ? Number(q.value) : xo(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), d = Jt ? !0 : i("useGlobalRestTiming").checked, m = d ? Number(D.value) : xo(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (an === "rest") {
      const S = i("addRestTitle").value.trim() || "Rest", R = i("addRestGroup").value.trim() || "Rest";
      Xe.push({
        id: "rest-" + Date.now(),
        name: S,
        group: R,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: d,
        duration: Math.max(5, m || Number(D.value))
      }), Ut(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", It("Rest added"), Jt && (ne("movements"), E());
    } else {
      const S = i("addMovementInput").value.trim();
      if (!S) return;
      const R = i("addMovementGroup").value.trim() || "Movement";
      Xe.push({
        id: "movement-" + Date.now(),
        name: S,
        group: R,
        kind: "work",
        hidden: !1,
        useGlobalTiming: a,
        duration: Math.max(5, s || Number(q.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", Ut(), i("movementCreator").hidden = !0, It("Movement added"), Jt && (ne("movements"), E());
    }
    Yo();
  }
  let wn = null;
  function It(a, s) {
    const d = i("toast");
    d.innerHTML = "";
    const m = document.createElement("span");
    if (m.textContent = a, d.appendChild(m), s) {
      const S = document.createElement("button");
      S.type = "button", S.className = "toastAction", S.textContent = s.label, S.addEventListener("click", () => {
        s.run(), d.classList.remove("show", "withAction"), clearTimeout(wn);
      }), d.appendChild(S);
    }
    d.classList.toggle("withAction", !!s), d.classList.add("show"), clearTimeout(wn), wn = setTimeout(() => d.classList.remove("show", "withAction"), s ? 5e3 : 2200);
  }
  const Zi = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], $s = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function bs(a) {
    return Math.max(0, Math.min(5, Math.floor(Number(a) / 100 * 6)));
  }
  function nn(a, s) {
    return Zi[bs(s)];
  }
  function on(a) {
    return $s[bs(a)];
  }
  function Kt(a) {
    return a.getFullYear() + "-" + String(a.getMonth() + 1).padStart(2, "0") + "-" + String(a.getDate()).padStart(2, "0");
  }
  function Mo() {
    return { morning: bt().morningTime || "08:00", evening: bt().eveningTime || "19:00" };
  }
  function rn(a) {
    const [s, d] = String(a).split(":").map(Number);
    return (s || 0) * 60 + (d || 0);
  }
  function Zo(a) {
    const s = Mo();
    return a.getHours() * 60 + a.getMinutes() >= rn(s.evening) ? "evening" : "morning";
  }
  function f(a, s) {
    return Ye.checkins.find((d) => d.date === a && d.slot === s);
  }
  function b(a) {
    return !!(a && a.mood != null && a.energy != null);
  }
  function y() {
    const a = /* @__PURE__ */ new Date(), s = Kt(a), d = Zo(a), m = Mo(), S = a.getHours() * 60 + a.getMinutes();
    return d === "morning" && S < rn(m.morning) || b(f(s, d)) ? null : d;
  }
  const C = i("checkinModal"), H = i("checkinTab"), U = i("checkinBadge"), $ = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function fe(a) {
    const { input: s, fill: d } = $[a];
    d.style.width = s.value + "%", s.setAttribute("aria-valuetext", nn(a, s.value));
  }
  Object.keys($).forEach((a) => $[a].input.addEventListener("input", () => fe(a)));
  let ee = null;
  function be() {
    const a = Mo(), s = /* @__PURE__ */ new Date(), d = s.getHours() * 60 + s.getMinutes();
    return d < rn(a.morning) ? "Next check-in at " + a.morning : d < rn(a.evening) ? "Next check-in at " + a.evening : "Next check-in tomorrow at " + a.morning;
  }
  function ye() {
    const a = Mo(), s = /* @__PURE__ */ new Date(), d = s.getHours() * 60 + s.getMinutes(), m = (S, R) => {
      const [O, Y] = S.split(":").map(Number);
      return new Date(s.getFullYear(), s.getMonth(), s.getDate() + (R ? 1 : 0), O, Y);
    };
    return d < rn(a.morning) ? { date: m(a.morning), time: a.morning } : d < rn(a.evening) ? { date: m(a.evening), time: a.evening } : { date: m(a.morning, !0), time: a.morning };
  }
  let Ae = null, et = null;
  function We() {
    if (y()) {
      tt(), Pt();
      return;
    }
    const a = ye(), s = Math.max(0, Math.round((a.date - Date.now()) / 1e3)), d = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), S = s % 60;
    i("peekCountdown").textContent = d + ":" + String(m).padStart(2, "0") + ":" + String(S).padStart(2, "0"), i("peekAt").textContent = "Available at " + a.time;
  }
  function _e() {
    We(), H.classList.add("peek"), clearInterval(et), et = setInterval(We, 1e3), clearTimeout(Ae), Ae = setTimeout(tt, 6e3);
  }
  function tt() {
    H.classList.remove("peek"), clearInterval(et), clearTimeout(Ae);
  }
  function ze() {
    const a = y();
    if (!a) {
      H.classList.contains("peek") ? tt() : _e();
      return;
    }
    ee = { date: Kt(/* @__PURE__ */ new Date()), slot: a };
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
    ee = null, Pt();
  }
  function vt() {
    if (!ee) return;
    if (b(f(ee.date, ee.slot))) {
      Ee();
      return;
    }
    const { date: a, slot: s } = ee;
    let d = f(a, s);
    d || (d = { date: a, slot: s }, Ye.checkins.unshift(d), Ye.checkins = Ye.checkins.slice(0, 2e3)), d.mood = Number($.mood.input.value), d.energy = Number($.energy.input.value), d.scale = 100, d.at = (/* @__PURE__ */ new Date()).toISOString(), An(), l.fire("checkin", { slot: s, mood: d.mood, energy: d.energy, mood_label: nn("mood", d.mood), energy_label: nn("energy", d.energy) }), It((s === "morning" ? "Morning" : "Evening") + " check-in saved"), Ee(), oa(), ra(), ir(), _o();
  }
  let ot = "";
  try {
    ot = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Pt() {
    const a = y();
    U.hidden = !a, H.hidden = !a, a || tt(), H.classList.toggle("due", !!a), H.setAttribute("aria-label", a ? (a === "morning" ? "Morning" : "Evening") + " check-in is due" : be()), H.title = a ? "Check in now" : be();
  }
  function Ie() {
    Pt();
    const a = y();
    !a || C.classList.contains("open") || bt().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !qe.home.classList.contains("active") || sn.classList.contains("open") || ot !== Kt(/* @__PURE__ */ new Date()) + "-" + a && ze());
  }
  H.addEventListener("click", ze), i("checkinLater").addEventListener("click", Ee), i("checkinSave").addEventListener("click", vt), C.addEventListener("click", (a) => {
    a.target === C && Ee();
  }), C.addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), Ee());
  }), setInterval(Ie, 3e4);
  function oa() {
    const a = Kt(/* @__PURE__ */ new Date()), s = (d) => Ye.checkins.find((m) => m.date === a && m[d] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([d, m]) => {
      const S = s(d);
      i(m).textContent = S ? nn(d, S[d]) : "—";
    });
  }
  function ra() {
    const a = i("feelCard");
    if (!a) return;
    const s = /* @__PURE__ */ new Date(), d = new Date(s.getFullYear(), s.getMonth(), s.getDate() - (s.getDay() + 6) % 7), m = [...Array(7)].map((Me, we) => {
      const me = new Date(d.getFullYear(), d.getMonth(), d.getDate() + we), Fe = Kt(me), Je = Ye.checkins.filter((He) => He.date === Fe), Ve = (He) => {
        const De = Je.map((xt) => xt[He]).filter((xt) => xt != null);
        return De.length ? De.reduce((xt, kt) => xt + kt, 0) / De.length : null;
      };
      return { d: me, key: Fe, mood: Ve("mood"), energy: Ve("energy"), count: Je.filter(b).length, future: me > s && Fe !== Kt(s) };
    }), S = (Me) => {
      const we = m.map((me) => me[Me]).filter((me) => me != null);
      return we.length ? we.reduce((me, Fe) => me + Fe, 0) / we.length : null;
    }, R = S("mood"), O = S("energy"), Y = (Me, we) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + Me + "</span><span>" + (we == null ? "—" : nt(nn("", we))) + '</span></div><div class="feelTrack"><span style="width:' + (we == null ? 0 : Math.max(4, we)) + "%;background:" + (we == null ? "transparent" : on(we)) + '"></span></div></div>', ve = m.filter((Me) => Me.mood != null && Me.energy != null).sort((Me, we) => we.mood + we.energy - (Me.mood + Me.energy))[0];
    a.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (R == null ? "No check-ins yet" : nt(nn("", (R + O) / 2))) + '</div><div class="weekCopy">' + (R == null ? "Your first check-in will appear here." : "on average this week" + (ve ? " · best day " + nt(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(ve.d)) : "")) + '</div></div></div><div class="feelDays">' + m.map(
      (Me) => '<div class="weekChip feelDay' + (Me.future ? " future" : "") + (Me.key === Kt(s) ? " today" : "") + '"><div class="weekChipTop"><strong>' + nt(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(Me.d)) + "</strong>" + (Me.count >= 2 ? '<span class="weekTick">' + Oa("check") + "</span>" : '<span class="feelDots">' + "●".repeat(Me.count) + "</span>") + "</div>" + Y("Mood", Me.mood) + Y("Energy", Me.energy) + "</div>"
    ).join("") + "</div>";
  }
  const $a = i("upcomingCountSetting");
  $a.addEventListener("change", () => {
    En = $a.value === "all" ? "all" : Number($a.value), xi();
  });
  const qa = i("tempoRevealBtn"), Lr = i("tempoExperiment"), xn = i("tempoQuad"), io = i("tempoDot"), At = i("tempoEstimate"), Ko = i("tempoReadout");
  let Rn = { x: 0.5, y: 0.5 }, So = !1, Co = { total: 20, work: 45, rest: 15 };
  function mi(a, s, d, m) {
    const S = Math.max(s, Math.min(d, a));
    return Math.round((S - s) / m) * m + s;
  }
  function Ar(a, s) {
    const d = (a - 0.5) * 2, m = (s - 0.5) * 2, S = mi(
      Co.total + d * 5 + m * 8,
      Number(B.min),
      Number(B.max),
      Number(B.step)
    ), R = mi(
      Co.work + d * 10 + m * 8,
      Number(q.min),
      Number(q.max),
      Number(q.step)
    ), O = mi(
      Co.rest + d * 6 + m * 6,
      Number(D.min),
      Number(D.max),
      Number(D.step)
    );
    return B.value = S, q.value = R, D.value = O, ue.textContent = R + " sec", ge.textContent = O + " sec", yr(), { total: S, work: R, rest: O };
  }
  function Na(a, s) {
    const d = a < 0.34 ? "Low" : a > 0.66 ? "Hard" : "Medium", m = s < 0.34 ? "Fast" : s > 0.66 ? "Slow" : "Balanced", S = Ar(a, s);
    Ko.textContent = d + " + " + m, At.textContent = S.total + " min", xn.setAttribute("aria-valuetext", d + " and " + m + ", estimated " + S.total + " minutes");
  }
  function Dl(a) {
    const s = xn.getBoundingClientRect(), d = Math.max(0, Math.min(1, (a.clientX - s.left) / s.width)), m = Math.max(0, Math.min(1, (a.clientY - s.top) / s.height));
    Rn = { x: d, y: m }, io.style.left = d * 100 + "%", io.style.top = m * 100 + "%", Na(d, m);
  }
  qa.addEventListener("click", () => {
    const a = Lr.hidden;
    Lr.hidden = !a, qa.setAttribute("aria-expanded", a ? "true" : "false"), qa.textContent = a ? "Now close this" : "Don’t try this!", a && (Co = {
      total: Number(B.value),
      work: Number(q.value),
      rest: Number(D.value)
    }, Rn = { x: 0.5, y: 0.5 }, io.style.left = "50%", io.style.top = "50%", Na(Rn.x, Rn.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.addEventListener("click", () => {
    Number(a.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((s) => s.classList.toggle("selected", s === a));
  }));
  const ws = i("testingFeedbackForm"), _l = i("testingFeedbackThanks"), yd = i("testingFeedbackAgain");
  ws.addEventListener("submit", (a) => {
    a.preventDefault(), ws.hidden = !0, _l.hidden = !1, It("Feedback captured for prototype");
  }), yd.addEventListener("click", (a) => {
    a.preventDefault(), ws.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((s) => s.classList.remove("selected")), _l.hidden = !0, ws.hidden = !1;
  }), xn.addEventListener("pointerdown", (a) => {
    var s;
    So = !0, Dl(a);
    try {
      (s = xn.setPointerCapture) == null || s.call(xn, a.pointerId);
    } catch {
    }
  }), xn.addEventListener("pointermove", (a) => {
    So && Dl(a);
  }), xn.addEventListener("pointerup", (a) => {
    So && (So = !1, Dl(a), Ut());
  }), xn.addEventListener("pointercancel", () => So = !1), xn.addEventListener("keydown", (a) => {
    let { x: s, y: d } = Rn, m = !0;
    a.key === "ArrowLeft" ? s -= 0.05 : a.key === "ArrowRight" ? s += 0.05 : a.key === "ArrowUp" ? d -= 0.05 : a.key === "ArrowDown" ? d += 0.05 : m = !1, m && (a.preventDefault(), s = Math.max(0, Math.min(1, s)), d = Math.max(0, Math.min(1, d)), Rn = { x: s, y: d }, io.style.left = s * 100 + "%", io.style.top = d * 100 + "%", Na(s, d), Ut());
  });
  const sn = i("workoutModal");
  let Er = null;
  function Dr(a) {
    return a.map((s) => ({ ...s }));
  }
  function xs() {
    const a = mt[Tt];
    return {
      key: Tt,
      profile: a ? JSON.parse(JSON.stringify(a)) : null,
      warmup: Dr(ia),
      strength: Dr(Xe),
      cooldown: Dr(en),
      total: Number(B.value),
      work: Number(q.value),
      rest: Number(D.value),
      rounds: Number(at.value) || 1
    };
  }
  function Xs(a = !1) {
    Jt = !!a, ya = null, ha = null, Ta(), Gi(), Er = xs(), i("moveEditorTitle").textContent = Jt ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !Jt, i("warmupRow").hidden = Jt, i("deleteMoveOpen").hidden = Jt;
    const s = i("createMoveOptions");
    s.hidden = !Jt;
    {
      const d = mt[Tt];
      i("includeWarmupPreset").checked = !!(d != null && d.includeWarmup), i("includeCooldownPreset").checked = !!(d != null && d.includeCooldown);
    }
    if (Bl(), Jt) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const d = mt[Tt];
      Fi((d == null ? void 0 : d.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, Ui("movement"), Yo(), hi(), Lr.hidden = !0, qa.setAttribute("aria-expanded", "false"), qa.textContent = "Don’t try this!", sn.classList.toggle("createMode", Jt), sn.querySelector(".modal").classList.toggle("createMode", Jt), sn.classList.add("open"), sn.setAttribute("aria-hidden", "false"), ka(), Jt && Ce();
  }
  function Rl() {
    const a = mt[Tt];
    return a != null && a.customSequence ? !!a.includeWarmup : !(a != null && a.warmupOff);
  }
  function Bl() {
    const a = Rl(), s = i("warmupSwitch");
    s.classList.toggle("on", a), s.setAttribute("aria-checked", String(a));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const a = mt[Tt];
    a && (a.customSequence ? (i("includeWarmupPreset").checked = !a.includeWarmup, kr()) : (a.warmupOff = !a.warmupOff, Ut()), Bl());
  });
  function _r() {
    Ta(), Gi(), vs(), ha = null, ya = null, sn.classList.contains("createMode") && le(), sn.classList.remove("createMode"), sn.querySelector(".modal").classList.remove("createMode"), sn.classList.remove("open"), sn.setAttribute("aria-hidden", "true");
  }
  function kd() {
    if (!Er) return;
    const a = Er;
    a.profile && (mt[a.key] = JSON.parse(JSON.stringify(a.profile))), Tt = a.key, ia = Dr(a.warmup), Xe = Dr(a.strength), en = Dr(a.cooldown), B.value = a.total, q.value = a.work, D.value = a.rest, at.value = a.rounds || 1;
    const s = mt[Tt];
    if (s) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((m) => m.classList.toggle("active", m.dataset.workout === Tt));
      const d = n.querySelector(".workoutPanel.active");
      if (d) {
        const m = d.querySelector(".workoutName");
        m && (m.textContent = s.name);
        const S = d.querySelector(".panelCollapsedText");
        S && (S.textContent = s.name);
        const R = d.querySelector(".sourceTag");
        R && (R.textContent = s.source);
      }
      v.value = s.name;
    }
    Ut();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (Jt) {
      const a = Tt;
      delete mt[a], Jt = !1, vo = null, $t(Ye.order.find((s) => mt[s]) || Object.keys(mt)[0]);
    } else
      kd();
    _r();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    Ta(), Xt && ko();
    const a = mt[Tt], s = v.value.trim() || "New move";
    if (a && (a.name = s), qi(), ya = null, Ut(), Jt && a)
      Kn(Tt, a), n.querySelectorAll(".workoutPanel[data-workout]").forEach((d) => d.classList.toggle("active", d.dataset.workout === Tt)), Jt = !1, vo = null, Ye.order.includes(Tt) || Ye.order.push(Tt), It("Move created");
    else {
      const d = n.querySelector(".workoutPanel.active");
      if (d) {
        const m = d.querySelector(".workoutName");
        m && (m.textContent = s);
        const S = d.querySelector(".panelCollapsedText");
        S && (S.textContent = s);
      }
      It("Move saved");
    }
    Er = null, _r(), An();
  }), sn.addEventListener("click", (a) => {
    if (a.target === sn) {
      if (Jt) {
        const s = Tt;
        delete mt[s], Jt = !1, vo = null, $t(Ye.order.find((d) => mt[d]) || Object.keys(mt)[0]);
      } else
        kd();
      _r();
    }
  }), ji(i("addMovementBtn"), "movement"), ji(i("addRestBtn"), "rest"), ji(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", hi), i("useGlobalRestTiming").addEventListener("change", hi), n.querySelectorAll(".createPresetBtn").forEach((a) => a.addEventListener("click", () => {
    Fi(a.dataset.movePreset, !0), Ut();
  })), i("includeWarmupPreset").addEventListener("change", kr), i("includeCooldownPreset").addEventListener("change", kr), i("includeWarmupPreset").addEventListener("change", E), i("includeCooldownPreset").addEventListener("change", E), v.addEventListener("input", E), v.addEventListener("input", fi), i("confirmAddMovement").addEventListener("click", Yi), i("confirmAddRest").addEventListener("click", Yi), i("addMovementInput").addEventListener("keydown", (a) => {
    a.key === "Enter" && Yi();
  });
  const ys = i("countdown"), Pl = i("countNum"), $o = i("countdownPixelCanvas");
  let ks = null, Bn = "appear";
  class Md {
    constructor(s, d, m, S, R, O, Y) {
      this.width = s.width, this.height = s.height, this.ctx = d, this.x = m, this.y = S, this.color = R, this.speed = (Math.random() * 0.8 + 0.1) * O, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = Y, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Nl = [], Hl = 1, Ki = 1;
  function gi() {
    const a = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(a) && a > 0 ? a : 1;
  }
  function Il() {
    var Me;
    if (!$o) return;
    const a = gi(), s = Math.max(1, window.innerWidth / a), d = Math.max(1, window.innerHeight / a);
    Hl = s, Ki = d;
    const m = Math.min(window.devicePixelRatio || 1, 2);
    $o.width = Math.floor(s * m), $o.height = Math.floor(d * m), $o.style.width = s + "px", $o.style.height = d + "px";
    const S = $o.getContext("2d");
    S.setTransform(m, 0, 0, m, 0, 0);
    const R = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], O = 12, Y = (Me = window.matchMedia) == null ? void 0 : Me.call(window, "(prefers-reduced-motion: reduce)").matches, ve = Y ? 0 : 0.055;
    Nl = [];
    for (let we = 0; we < s; we += O)
      for (let me = 0; me < d; me += O) {
        const Fe = we - s / 2, Je = me - d / 2, Ve = Math.sqrt(Fe * Fe + Je * Je), He = Y ? 0 : Math.random() * 75 + Ve * 0.05, De = new Md({ width: s, height: d }, S, we, me, R[Math.floor(Math.random() * R.length)], ve, He);
        De.maxSizeInteger = 4, De.maxSize = Math.random() * 3.2 + 0.8, De.sizeStep = 0.35 + Math.random() * 0.45, Nl.push(De);
      }
  }
  function Fl(a) {
    cancelAnimationFrame(ks), Bn = a;
    const s = $o == null ? void 0 : $o.getContext("2d");
    if (!s) return;
    function d() {
      s.clearRect(0, 0, Hl, Ki);
      let m = !0;
      Nl.forEach((S) => {
        S[Bn](), S.isIdle || (m = !1);
      }), Bn === "disappear" && m || (ks = requestAnimationFrame(d));
    }
    ks = requestAnimationFrame(d);
  }
  function Ms() {
    cancelAnimationFrame(ks), Il(), Fl("appear"), setTimeout(() => Fl("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    ys.classList.contains("active") && Ms();
  });
  const Rr = i("pixelTrailCanvas"), Br = Rr.getContext("2d");
  let Xo = !0, Pr = 0.7, $i = 600, vi = [], bi = null, To = { x: 0, y: 0, ready: !1 };
  function Js() {
    const a = u.getBoundingClientRect(), s = gi(), d = Math.min(window.devicePixelRatio || 1, 2), m = Math.max(1, a.width / s), S = Math.max(1, a.height / s);
    Rr.width = Math.max(1, Math.floor(m * d)), Rr.height = Math.max(1, Math.floor(S * d)), Rr.style.width = m + "px", Rr.style.height = S + "px", Br.setTransform(d, 0, 0, d, 0, 0);
  }
  function Sd(a, s) {
    if (!Xo) return;
    const d = performance.now();
    To.ready || (To = { x: a, y: s, ready: !0 });
    const m = 7;
    for (let S = 1; S <= m; S++) {
      const R = S / m;
      vi.push({
        x: To.x + (a - To.x) * R,
        y: To.y + (s - To.y) * R,
        born: d - (m - S) * 10
      });
    }
    To = { x: a, y: s, ready: !0 };
  }
  function Qs(a) {
    if (bi = null, !x) return;
    if (!qe.workout.classList.contains("active")) {
      bi = requestAnimationFrame(Qs);
      return;
    }
    const s = u.getBoundingClientRect(), d = gi();
    Br.clearRect(0, 0, s.width / d, s.height / d), Xo && (vi = vi.filter((S) => a - S.born < $i), Br.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", vi.forEach((S) => {
      const R = (a - S.born) / $i, O = (1 - R) * Pr, Y = Math.round(S.x / 14) * 14, ve = Math.round(S.y / 14) * 14;
      Br.globalAlpha = Math.max(0, O);
      const Me = 2 + 5 * (1 - R) * Pr;
      Br.fillRect(Y - Me / 2, ve - Me / 2, Me, Me);
    }), Br.globalAlpha = 1), bi = requestAnimationFrame(Qs);
  }
  u.addEventListener("pointermove", (a) => {
    const s = u.getBoundingClientRect(), d = gi();
    Sd((a.clientX - s.left) / d, (a.clientY - s.top) / d);
  }), u.addEventListener("pointerleave", () => To.ready = !1), new ResizeObserver(Js).observe(u), Js(), bi = requestAnimationFrame(Qs);
  const Jo = i("movementRippleCanvas"), wi = Jo.getContext("2d");
  let Xi = !0, Nr = null, Cd = performance.now();
  function Td() {
    const a = Jo.parentElement.getBoundingClientRect(), s = gi(), d = Math.max(1, a.width / s), m = Math.max(1, a.height / s), S = Math.min(window.devicePixelRatio || 1, 2);
    Jo.width = Math.max(1, Math.floor(d * S)), Jo.height = Math.max(1, Math.floor(m * S)), Jo.style.width = d + "px", Jo.style.height = m + "px", wi.setTransform(S, 0, 0, S, 0, 0);
  }
  function Hr() {
    var a;
    return Ot || ((a = Ke[dt]) == null ? void 0 : a.kind) === "rest";
  }
  function Qt() {
    const a = Ke[dt];
    return Hr() ? 2200 : a ? a.kind === "warmup" || a.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function el(a) {
    if (Nr = null, !x) return;
    if (!qe.workout.classList.contains("active")) {
      Nr = requestAnimationFrame(el);
      return;
    }
    const s = Jo.parentElement.getBoundingClientRect(), d = gi(), m = Math.max(1, s.width / d), S = Math.max(1, s.height / d);
    if (wi.clearRect(0, 0, m, S), Xi) {
      const R = Qt(), O = (a - Cd) % R / R, Y = 15, ve = Math.max(8, Math.round(Y * S / Math.max(1, m))), Me = m / (Y + 1), we = S / (ve + 1), me = m * 0.5, Fe = S * 0.52, Je = Math.hypot(me, Fe), He = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let De = 1; De <= ve; De++)
        for (let xt = 1; xt <= Y; xt++) {
          const kt = xt * Me, Ue = De * we, Mt = Math.hypot(kt - me, Ue - Fe) / Je, Nt = Hr(), lt = Nt ? Math.exp(-Math.pow((Mt - (O * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, rt = Math.exp(-Math.pow((Mt - O * 1.25) * 7, 2)), Aa = Nt ? lt : rt, za = Nt ? 0.5 + 0.5 * Math.sin(O * Math.PI * 2 - Mt * 3) ** 2 : 0.35 + 0.65 * Math.sin(O * Math.PI * 2 - Mt * 5) ** 2, ta = Nt ? 1.4 + Aa * 4.2 * za : 1.2 + Aa * 5 * za;
          wi.beginPath(), wi.arc(kt, Ue, ta, 0, Math.PI * 2), wi.fillStyle = `rgba(${He},${Nt ? 0.08 + Aa * 0.48 : 0.05 + Aa * 0.55})`, wi.fill();
        }
    }
    Nr = requestAnimationFrame(el);
  }
  new ResizeObserver(Td).observe(Jo.parentElement), Td(), Nr = requestAnimationFrame(el);
  const Ss = i("exerciseTitle"), Qo = i("exerciseMeta"), Pn = i("stepLabel"), Ol = i("digits"), ql = i("fill"), Ir = i("progress"), tl = i("pause"), Ld = i("nextName"), Ec = i("nextMeta"), Dc = i("nextIcon"), Cs = i("skipNextSession");
  let Za = null;
  function yn(a) {
    for (let s = Math.max(0, a); s < Ke.length; s++)
      if (!Ke[s].sessionHidden) return s;
    return -1;
  }
  function _c() {
    const a = Ke[dt];
    if (!a) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Ot) {
      const m = yn(dt + 1), S = m >= 0 ? Ke[m] : null;
      return S ? { name: S.name, meta: Wl(S), icon: kn(S) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (a.rest > 0) return { name: "Rest", meta: a.rest + " sec · " + (a.roundBreakAfter ? "round " + (a.round + 1) + " next" : "recovery"), icon: "pause" };
    const s = yn(dt + 1), d = s >= 0 ? Ke[s] : null;
    return d ? { name: d.name, meta: Wl(d), icon: kn(d) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Rc() {
    if (!Ke[dt]) return Ke.length;
    const s = yn(dt + 1);
    return s < 0 ? Ke.length : s + 1;
  }
  function kn(a) {
    return a.kind === "video" ? "play" : "clock";
  }
  function Wl(a) {
    return a.kind === "video" ? "YouTube · " + wo(a.duration) : a.group + " · " + a.duration + " sec";
  }
  function al() {
    return Ke.length && Ke[Ke.length - 1].round || 1;
  }
  function ln(a) {
    const s = Ke[a];
    if (!s) return "";
    const d = al();
    if (d <= 1) return "Step " + (a + 1) + " of " + Ke.length;
    if (s.roundBreak) return "Round " + s.round + " of " + d + " · Rest";
    const m = Ke.filter((S) => S.round === s.round && !S.roundBreak).length;
    return "Round " + s.round + " of " + d + " · Step " + (s.roundIndex + 1) + " of " + m;
  }
  function Bt() {
    return Ir.querySelector('[data-step="' + dt + '"]');
  }
  function dn() {
    Ke[dt] && Number(Ir.dataset.round) !== (Ke[dt].round || 1) && Ha(), [...Ir.children].forEach((a) => {
      const s = Number(a.dataset.step);
      a.classList.toggle("done", s < dt), a.classList.toggle("active", s === dt), a.classList.toggle("rewindable", s <= dt), a.disabled = s > dt, s === dt && a.style.setProperty("--segment-progress", "0%");
    }), Ke[dt] && (Pn.textContent = ln(dt), Wa());
  }
  function Vl(a) {
    const s = Ke.indexOf(a);
    s < 0 || s <= dt || (a.sessionHidden = !a.sessionHidden, Lo(), It((a.sessionHidden ? "Hidden " : "Included ") + a.name + " for this session"));
  }
  function xi() {
    const a = i("upcomingList");
    if (!a) return;
    a.innerHTML = "";
    const s = Rc(), d = Ke.slice(s);
    (En === "all" ? d : d.slice(0, Math.max(1, Number(En) || 1))).forEach((S) => {
      const R = document.createElement("section");
      R.className = "upcomingCard" + (S.sessionHidden ? " sessionHidden" : "") + ($l(S) ? " noMeta" : ""), R.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Oa(kn(S)) + '</div><div><div class="upcomingName">' + nt(S.name) + '</div><div class="upcomingMeta">' + nt(Wl(S)) + (al() > 1 ? " · round " + S.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (S.sessionHidden ? "Include this session" : "Skip this session") + "</button>", R.querySelector(".skipSessionBtn").addEventListener("click", () => Vl(S)), a.appendChild(R);
    });
  }
  function Lo() {
    var s;
    const a = _c();
    Ld.textContent = a.name, Ec.textContent = a.meta, Dc.innerHTML = Oa(a.icon);
    {
      const d = Ot ? Ke[yn(dt + 1)] : ((s = Ke[dt]) == null ? void 0 : s.rest) > 0 ? { kind: "rest" } : Ke[yn(dt + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(d && $l(d)));
    }
    if (Za = null, Ot) {
      const d = yn(dt + 1);
      d >= 0 && (Za = Ke[d]);
    } else {
      const d = Ke[dt];
      if (d && d.rest > 0)
        Za = null;
      else {
        const m = yn(dt + 1);
        m >= 0 && (Za = Ke[m]);
      }
    }
    Cs && (Cs.hidden = !Za, Cs.textContent = Za != null && Za.sessionHidden ? "Include this session" : "Skip this session"), xi();
  }
  Cs.addEventListener("click", () => {
    Za && (Za.sessionHidden = !Za.sessionHidden, It((Za.sessionHidden ? "Hidden " : "Included ") + Za.name + " for this session"), Lo());
  });
  let Ka = null, ro = null;
  function so(a, s = {}) {
    const d = mt[Tt];
    l.fire(a, { move: (d == null ? void 0 : d.name) || "", move_id: Tt, ...s });
  }
  function Bc() {
    const a = mt[Tt];
    Ka = { key: Tt, name: (a == null ? void 0 : a.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(ro), ro = setInterval(() => {
      Ka && !Pe && Ka.active++;
    }, 1e3), so("started", { steps: Ke.length });
  }
  function Ad(a) {
    if (clearInterval(ro), !Ka) return;
    const s = Ka;
    Ka = null, so(a ? "completed" : "ended", { seconds: s.active }), !(s.active < 30) && (Ye.history.unshift({ id: "h-" + s.startedAt, move_id: s.key, name: s.name, start: new Date(s.startedAt).toISOString(), seconds: s.active, completed: a }), Ye.history = Ye.history.slice(0, 1e3), An(), ir(), _o());
  }
  let Ct = null, Ji = null, ei = !1;
  function Jn() {
    return bt().sounds !== !1;
  }
  function jl() {
    if (Jn())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), Ct = Ct || new (window.AudioContext || window.webkitAudioContext)(), Ct.state === "suspended" && Ct.resume();
      } catch {
        Ct = null;
      }
  }
  function yi(a, s, d, { to: m = a, vol: S = 0.25, type: R = "sine" } = {}) {
    const O = Ct.currentTime + s, Y = Ct.createOscillator(), ve = Ct.createGain();
    Y.type = R, Y.frequency.setValueAtTime(a, O), m !== a && Y.frequency.exponentialRampToValueAtTime(m, O + d), ve.gain.setValueAtTime(1e-4, O), ve.gain.exponentialRampToValueAtTime(S, O + 0.01), ve.gain.exponentialRampToValueAtTime(1e-4, O + d), Y.connect(ve).connect(Ct.destination), Y.start(O), Y.stop(O + d + 0.02);
  }
  const Ed = {
    tick: () => yi(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      yi(660, 0, 0.12, { type: "triangle", vol: 0.3 }), yi(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => yi(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      yi(523, 0, 0.16, { type: "triangle" }), yi(659, 0.16, 0.16, { type: "triangle" }), yi(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function ti(a) {
    if (!(!Jn() || !Ct))
      try {
        Ct.state === "suspended" && Ct.resume(), Ed[a]();
      } catch {
      }
  }
  function Fr() {
    xa >= 1 && xa <= 3 && xa !== Ji && (Ji = xa, ti("tick"));
  }
  function Pc() {
    jl(), L("workout"), Or();
    const a = yn(0);
    a >= 0 && Ke[a].kind === "video" && Bd(Ke[a]);
  }
  function Ts() {
    Ao(), Ad(!1), clearInterval(Dt), clearInterval(Rt), Ot = !1, Ma(!1), i("app").classList.remove("resting"), ys.classList.remove("active"), L("home");
  }
  function Or() {
    ys.classList.add("active");
    let a = 5;
    Pl.textContent = a, ti("tick"), requestAnimationFrame(Ms), clearInterval(Rt), Rt = setInterval(() => {
      a--, a > 0 ? (Pl.textContent = a, ti("tick"), Ms()) : (clearInterval(Rt), Pl.textContent = "GO", ti("move"), ei = !0, Ms(), setTimeout(() => {
        ys.classList.remove("active"), cancelAnimationFrame(ks), _d();
      }, 650));
    }, 1e3);
  }
  function Ha() {
    var s;
    Ir.innerHTML = "";
    const a = ((s = Ke[Math.max(0, dt)] || Ke[0]) == null ? void 0 : s.round) || 1;
    Ir.dataset.round = a, Ke.forEach((d, m) => {
      if ((d.round || 1) !== a) return;
      const S = document.createElement("button");
      S.dataset.step = m, S.type = "button", S.className = "progressSegment", S.setAttribute("aria-label", "Go to " + d.name), S.addEventListener("click", () => {
        m <= dt && Dd(m);
      }), Ir.appendChild(S);
    });
  }
  function Ma(a) {
    a = !!a;
    const s = Pe !== a;
    if (Pe = a, tl.textContent = a ? "Resume" : "Pause", i("app").classList.toggle("paused", a), cn && ut)
      try {
        a ? ut.pauseVideo() : ut.playVideo();
      } catch {
      }
    s && Ka && so(a ? "paused" : "resumed");
  }
  function Dd(a) {
    a < 0 || a >= Ke.length || a > dt || (clearInterval(Dt), Ot = !1, i("app").classList.remove("resting"), dt = a, Ma(!1), Si(), Dt = setInterval(Ci, 1e3));
  }
  function _d() {
    if (dt = yn(0), Ma(!1), Ha(), dt < 0) {
      Ss.textContent = "No activities", Qo.textContent = "Open Edit and enable or add a movement", Qo.hidden = !1;
      return;
    }
    Bc(), Si(), clearInterval(Dt), Dt = setInterval(Ci, 1e3);
  }
  const nl = i("videoStage"), Qi = i("videoSound"), Nc = 0, qr = 1, Rd = 2;
  let ki = 0, Wr = null, er = null, ut = null, tr = null, Mi = 0, Ls = !1, cn = null, zl = null;
  function As() {
    var a;
    return (a = window.YT) != null && a.Player ? Promise.resolve(window.YT) : Wr || (Wr = new Promise((s, d) => {
      const m = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          m == null || m();
        } catch {
        }
      };
      const S = setInterval(() => {
        var O;
        (O = window.YT) != null && O.Player && (clearInterval(S), clearTimeout(R), s(window.YT));
      }, 100), R = setTimeout(() => {
        clearInterval(S), Wr = null, d(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const O = document.createElement("script");
        O.src = "https://www.youtube.com/iframe_api", O.async = !0, O.onerror = () => {
          clearInterval(S), clearTimeout(R), Wr = null, d(new Error("YouTube did not load"));
        }, document.head.appendChild(O);
      }
    }), Wr);
  }
  function ol() {
    return er || (er = As().then((a) => new Promise((s) => {
      const d = document.createElement("div");
      i("videoFrame").appendChild(d), ut = new a.Player(d, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => s(ut), onStateChange: (m) => Ul(m.data), onError: (m) => Yl(m.data) }
      });
    })), er.catch(() => {
      er = null;
    }), er);
  }
  function Bd(a) {
    !(a != null && a.videoId) || a.videoError || ol().then((s) => {
      cn || tr === a.videoId || (tr = a.videoId, Mi = Number(a.start) || 0, Ls = !1, s.mute(), s.loadVideoById({ videoId: a.videoId, startSeconds: Mi }));
    }).catch(() => {
    });
  }
  function Gl() {
    const a = yn(dt + 1);
    a >= 0 && Ke[a].kind === "video" && Bd(Ke[a]);
  }
  function Ul(a) {
    if (!cn) {
      a === qr && !Ls && (Ls = !0, ut.pauseVideo(), ut.seekTo(Mi, !0));
      return;
    }
    nl.classList.toggle("playing", a === qr), Ke[dt] === cn && performance.now() > ki && (a === qr && Pe ? Ma(!1) : a === Rd && !Pe && Ma(!0)), a === qr && Ds(cn.videoId, ut.getDuration()) && An(), a === Nc && Es();
  }
  function Yl(a) {
    const s = cn;
    if (!s) {
      tr = null;
      return;
    }
    a === 101 || a === 150 ? (Nd(s.videoId), It("That video can’t play outside YouTube, so it was skipped")) : It("The video couldn’t play, so it was skipped"), Es();
  }
  function Hc(a) {
    if (i("app").classList.add("videoStep"), Qi.hidden = !0, cn = a, clearTimeout(zl), !a.videoId) {
      It("This video step has no link yet, so it was skipped"), setTimeout(() => Es(), 0);
      return;
    }
    ol().then((s) => {
      if (cn !== a) return;
      ki = performance.now() + 1500;
      const d = Number(a.start) || 0;
      tr !== a.videoId ? (tr = a.videoId, Mi = d, s.loadVideoById({ videoId: a.videoId, startSeconds: d })) : (s.seekTo(d, !0), s.playVideo()), s.unMute(), Pe && s.pauseVideo(), zl = setTimeout(() => {
        cn !== a || Pe || (s.getPlayerState() !== qr ? (s.mute(), s.playVideo(), Qi.hidden = !1) : s.isMuted() && (Qi.hidden = !1));
      }, 1600);
    }).catch(() => {
      cn === a && (It("YouTube didn’t load, so the video was skipped"), Es());
    });
  }
  function lo() {
    if (!i("app").classList.contains("videoStep")) return;
    const a = n.querySelector(".workGrid"), s = n.querySelector(".sessionControlRow"), d = a.getBoundingClientRect().top, m = (s == null ? void 0 : s.offsetHeight) || 42, S = window.innerHeight - d - 16 - m - 84;
    a.style.setProperty("--theater-h", Math.max(240, Math.round(S)) + "px");
  }
  window.addEventListener("resize", lo);
  function Ao() {
    clearTimeout(zl);
    const a = cn;
    if (cn = null, i("app").classList.remove("videoStep"), nl.classList.remove("playing"), Qi.hidden = !0, a && ut) {
      try {
        ut.pauseVideo();
      } catch {
      }
      tr = null;
    }
  }
  function Es() {
    const a = cn;
    !a || Ke[dt] !== a || (Ao(), clearInterval(Dt), Ia(), Dt = setInterval(Ci, 1e3));
  }
  Qi.addEventListener("click", () => {
    ut && (ut.unMute(), ut.playVideo()), Qi.hidden = !0;
  });
  function Pd(a) {
    var m;
    const s = Number(a.start) || 0;
    if (a.useVideoLength === !1) return s + (Number(a.duration) || 300);
    const d = ut && cn === a && Number((m = ut.getDuration) == null ? void 0 : m.call(ut)) || 0;
    return Number(a.end) || d || Number(a.videoDuration) || s + (Number(a.duration) || 300);
  }
  function il(a, s) {
    const d = mt[Tt];
    [ia, Xe, en, d == null ? void 0 : d.warmup, d == null ? void 0 : d.strength, d == null ? void 0 : d.cooldown, d == null ? void 0 : d.sequence].forEach((m) => (Array.isArray(m) ? m : []).forEach((S) => {
      S && S.kind === "video" && S.videoId === a && s(S);
    }));
  }
  function Ds(a, s) {
    s = Math.round(Number(s) || 0);
    let d = !1;
    return a && s > 0 && il(a, (m) => {
      m.videoDuration !== s && (m.videoDuration = s, d = !0);
    }), d;
  }
  function Nd(a) {
    il(a, (s) => {
      s.videoError = "embed";
    }), An();
  }
  function Hd(a) {
    const s = a.videoId;
    if (!s) return;
    const d = () => {
      sn.classList.contains("open") ? ya || Ut() : (Ut(), An());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + s)).then((m) => m.ok ? m.json() : Promise.reject(m.status)).then((m) => {
      a.videoId === s && (a.videoTitle = m.title || "", a.autoName && m.title && (a.name = m.title), d());
    }).catch((m) => {
      a.videoId === s && m === 401 && (a.videoError = "embed", d());
    }), Ic(s).then((m) => {
      Ds(s, m) && d();
    }).catch((m) => {
      m === "embed" && a.videoId === s && (a.videoError = "embed", d());
    });
  }
  function Ic(a) {
    return As().then((s) => new Promise((d, m) => {
      const S = document.createElement("div");
      S.className = "videoProbe", S.setAttribute("aria-hidden", "true");
      const R = document.createElement("div");
      S.appendChild(R), i("app").appendChild(S);
      let O = null, Y = !1;
      const ve = (me, Fe) => {
        Y || (Y = !0, clearTimeout(Me), setTimeout(() => {
          try {
            O == null || O.destroy();
          } catch {
          }
          S.remove();
        }, 0), Fe ? m(Fe) : d(me));
      }, Me = setTimeout(() => ve(0), 2e4), we = () => {
        var Fe;
        const me = Number((Fe = O == null ? void 0 : O.getDuration) == null ? void 0 : Fe.call(O)) || 0;
        return me > 0 && ve(me), me > 0;
      };
      O = new s.Player(R, {
        width: 320,
        height: 180,
        videoId: a,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            we() || (O.mute(), O.playVideo());
          },
          onStateChange: () => we(),
          onError: (me) => ve(0, me.data === 101 || me.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Si() {
    Ot = !1;
    const a = Ke[dt];
    i("app").classList.toggle("resting", a.kind === "rest"), a.kind === "video" ? Hc(a) : Ao(), xa = a.duration, wt = a.duration, Ji = null, ei ? ei = !1 : ti(a.kind === "rest" ? "rest" : "move"), Ss.textContent = a.name, Qo.textContent = a.group, Qo.hidden = !0, Pn.textContent = ln(dt), Ka && so("step", { name: a.name, group: a.group, kind: a.kind, step: dt + 1, of: Ke.length, round: a.round || 1, rounds: al(), duration: a.duration }), Lo(), dn(), Gl(), a.kind === "video" && setTimeout(lo, 0);
  }
  function Wa() {
    var S;
    const a = ((S = Ke[dt]) == null ? void 0 : S.kind) === "video" && !Ot, s = a && xa >= 60;
    Ol.textContent = s ? wo(xa) : xa, Ol.classList.toggle("long", s), a && (i("videoClock").textContent = wo(xa) + " left");
    const d = xa / wt * 100;
    ql.style.width = d + "%";
    const m = Bt();
    if (m && !Ot) {
      const R = 100 - d;
      m.style.setProperty("--segment-progress", R + "%");
    }
  }
  function Ci() {
    var s, d;
    if (Pe) return;
    const a = Ke[dt];
    if ((a == null ? void 0 : a.kind) === "video" && !Ot && cn === a) {
      const m = Number((s = ut == null ? void 0 : ut.getCurrentTime) == null ? void 0 : s.call(ut)) || 0, S = Number(a.start) || 0, R = Pd(a);
      wt = Math.max(1, R - S), (m > S || ((d = ut == null ? void 0 : ut.getPlayerState) == null ? void 0 : d.call(ut)) === qr) && (xa = Math.max(0, Math.ceil(R - m))), Wa(), Fr(), m > S && m >= R - 0.25 && Es();
      return;
    }
    xa--, Wa(), Fr(), xa <= 0 && (a.rest > 0 ? Id(a.rest) : Ia());
  }
  function Id(a) {
    var d;
    Ot = !0, i("app").classList.add("resting");
    const s = Bt();
    s && s.style.setProperty("--segment-progress", "100%"), clearInterval(Dt), xa = a, wt = a, Ji = null, ti("rest"), Ka && so("rest", { duration: a }), Ss.textContent = "Rest", Qo.textContent = (d = Ke[dt]) != null && d.roundBreakAfter ? "Round " + (Ke[dt].round + 1) + " next" : "Recovery", Lo(), Wa(), Dt = setInterval(() => {
      Pe || (xa--, Wa(), Fr(), xa <= 0 && (clearInterval(Dt), Ia(), Dt = setInterval(Ci, 1e3)));
    }, 1e3);
  }
  function Ia() {
    Ot = !1;
    const a = yn(dt + 1);
    if (a >= 0)
      dt = a, Si();
    else {
      clearInterval(Dt), Ao(), Ma(!1), i("app").classList.remove("resting"), Ss.textContent = "Complete", Qo.textContent = "Move finished", Qo.hidden = !1, Ol.textContent = "✓";
      {
        const s = al();
        Pn.textContent = s > 1 ? s + " rounds done" : Ke.filter((d) => !d.roundBreak).length + " steps done";
      }
      Ad(!0), ti("done");
      {
        const s = fl(7).reduce((d, m) => d + m.minutes, 0);
        Qo.textContent = "Move finished · " + s + " min in the last 7 days";
      }
      ql.style.width = "100%", Lo();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    rl(), Ma(!1);
  });
  function rl() {
    clearInterval(Dt);
    const a = Ke[dt];
    if (Ot) {
      Ot = !1, i("app").classList.remove("resting");
      const d = yn(dt + 1);
      d >= 0 ? (dt = d, Si(), Dt = setInterval(Ci, 1e3)) : Ia();
      return;
    }
    if (a && a.rest > 0) {
      Id(a.rest);
      return;
    }
    const s = yn(dt + 1);
    s >= 0 ? (dt = s, Si(), Dt = setInterval(Ci, 1e3)) : Ia();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(Dt), Ma(!1), Ot) {
      const a = Ke[dt];
      xa = a.rest, wt = a.rest, Ji = null, ti("rest"), Ss.textContent = "Rest", Qo.textContent = "Recovery", i("app").classList.add("resting"), Lo(), Wa();
    } else
      Si();
    Dt = setInterval(Ot ? () => {
      Pe || (xa--, Wa(), Fr(), xa <= 0 && (clearInterval(Dt), Ia(), Dt = setInterval(Ci, 1e3)));
    } : Ci, 1e3);
  });
  function ai(a, s, d, m) {
    let S = 0, R = null, O = !1;
    function Y() {
      R && cancelAnimationFrame(R), R = null, S = 0, O = !1, s.style.width = "0%", a.classList.remove("holding");
    }
    function ve(me) {
      if (!O) return;
      S || (S = me);
      const Fe = Math.min(1, (me - S) / d);
      if (s.style.width = Fe * 100 + "%", Fe >= 1) {
        O = !1, R && cancelAnimationFrame(R), R = null, s.style.width = "100%", setTimeout(() => s.style.width = "0%", 90), m();
        return;
      }
      R = requestAnimationFrame(ve);
    }
    function Me(me) {
      var Fe;
      if (!(me && me.button !== void 0 && me.button !== 0)) {
        me == null || me.preventDefault(), Y(), O = !0, a.classList.add("holding");
        try {
          (Fe = a.setPointerCapture) == null || Fe.call(a, me.pointerId);
        } catch {
        }
        R = requestAnimationFrame(ve);
      }
    }
    function we() {
      O && Y();
    }
    a.addEventListener("pointerdown", Me), a.addEventListener("pointerup", we), a.addEventListener("pointercancel", we), a.addEventListener("lostpointercapture", we), a.addEventListener("keydown", (me) => {
      (me.key === " " || me.key === "Enter") && !me.repeat && Me(me);
    }), a.addEventListener("keyup", (me) => {
      (me.key === " " || me.key === "Enter") && we();
    });
  }
  const Vr = i("endWorkout");
  ai(Vr, i("holdEndFill"), 1500, Ts);
  const ar = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    ar.classList.add("open"), ar.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    ar.classList.remove("open"), ar.setAttribute("aria-hidden", "true");
  });
  function Zl() {
    const a = Tt, s = n.querySelector('.workoutPanel[data-workout="' + a + '"]');
    s && s.remove(), delete mt[a], Ye.order = Ye.order.filter((m) => m !== a);
    let d = n.querySelector(".workoutPanel[data-workout]");
    if (!d) {
      const m = "custom-" + Date.now();
      mt[m] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, Ye.order.push(m), d = Kn(m, mt[m]);
    }
    ar.classList.remove("open"), ar.setAttribute("aria-hidden", "true"), Er = null, _r(), $t(d.dataset.workout), An(), It("Move deleted");
  }
  ai(i("deleteMoveYes"), i("deleteMoveFill"), 1500, Zl);
  const Kl = n.querySelector(".rubberTabs"), nr = i("rubberIndicator");
  function Ti(a, s = !0) {
    if (!a || !Kl || !nr) return;
    const d = Kl.getBoundingClientRect(), m = a.getBoundingClientRect();
    nr.style.transition = s ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const S = gi();
    nr.style.left = (m.left - d.left) / S + Kl.scrollLeft + "px", nr.style.width = m.width / S + "px", s && (nr.style.transform = "scaleX(1.08)", setTimeout(() => nr.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((a) => a.addEventListener("click", () => {
    a.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((s) => s.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((s) => s.classList.remove("active")), a.classList.add("active"), i(a.dataset.pane).classList.add("active"), Ti(a, !0);
  })), requestAnimationFrame(() => Ti(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Ti(n.querySelector(".tab.active"), !1));
  const jr = i("pixelTrailToggle"), zr = i("rippleToggle"), Li = i("trailStrength"), or = i("trailLife");
  function pn(a, s) {
    bt()[a] = s, An();
  }
  const _s = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Fd(a) {
    return a.kind === "rest" ? "rest" : a.kind === "video" ? "video" : "g:" + String(a.group || "").trim().toLowerCase();
  }
  function $l(a) {
    var s;
    return !!((s = bt().hideMeta) != null && s[Fd(a)]);
  }
  function Od() {
    const a = /* @__PURE__ */ new Map(), s = (d, m, S) => {
      if (!d) return;
      Array.isArray(d) && (d = { name: d[1], group: d[2], kind: "work" });
      const R = Fd(d);
      let O = a.get(R);
      O || (O = { key: R, label: R === "rest" ? "Rest" : R === "video" ? "Video" : String(d.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, a.set(R, O)), O.kinds.add(R === "rest" ? "Rest" : R === "video" ? "Video" : m), O.moves.add(S), O.count++;
    };
    return Object.values(mt).forEach((d) => {
      const m = d.name || "Move";
      (d.warmup || (d.customSequence ? [] : go)).forEach((S) => s(S, "Warm-up", m)), (d.customSequence ? d.sequence || [] : d.strength || []).forEach((S) => s(S, S.presetRole === "warmup" ? "Warm-up" : S.presetRole === "cooldown" ? "Cooldown" : "Movement", m)), (d.cooldown || (d.customSequence ? [] : pt)).forEach((S) => s(S, "Cooldown", m));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([d, m]) => {
      a.has(d) || a.set(d, { key: d, label: m, kinds: /* @__PURE__ */ new Set([m]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...a.values()].map((d) => ({ ...d, kind: d.kinds.has("Movement") ? "Movement" : [...d.kinds][0], moves: [...d.moves] })).sort((d, m) => _s.indexOf(d.kind) - _s.indexOf(m.kind) || d.label.localeCompare(m.label));
  }
  let Xl = "all";
  function Rs() {
    const a = i("metaSearch").value.trim().toLowerCase();
    return Od().filter((s) => (Xl === "all" || s.kind === Xl) && (!a || s.label.toLowerCase().includes(a) || s.moves.some((d) => d.toLowerCase().includes(a))));
  }
  function sl() {
    const a = i("metaTableBody");
    if (!a) return;
    const s = bt().hideMeta || {}, d = Rs();
    a.innerHTML = d.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', d.forEach((S) => {
      const R = !s[S.key], O = S.count ? (S.moves.length > 2 ? S.moves.slice(0, 2).join(", ") + " + " + (S.moves.length - 2) + " more" : S.moves.join(", ")) + " · " + S.count + " step" + (S.count === 1 ? "" : "s") : "Not used yet", Y = document.createElement("tr");
      Y.className = R ? "" : "off", Y.innerHTML = '<td><div class="metaType">' + nt(S.label) + '</div><div class="metaSub">' + nt(S.kind + " · " + O) + '</div></td><td class="metaKindCol">' + nt(S.kind) + '</td><td class="metaUsedCol">' + nt(O) + '</td><td class="metaSwitchCol"><button class="switch' + (R ? " on" : "") + '" type="button" role="switch" aria-checked="' + R + '" aria-label="Second line for ' + nt(S.label) + ' on phones"></button></td>', Y.querySelector(".switch").addEventListener("click", () => ll([S.key], R)), a.appendChild(Y);
    });
    const m = d.filter((S) => s[S.key]).length;
    i("metaCount").textContent = d.length ? d.length + " type" + (d.length === 1 ? "" : "s") + (m ? " · " + m + " hidden on phones" : "") : "";
  }
  function ll(a, s) {
    const d = { ...bt().hideMeta || {} };
    a.forEach((m) => {
      s ? d[m] = !0 : delete d[m];
    }), pn("hideMeta", d), sl(), Mr(), Lo();
  }
  i("metaSearch").addEventListener("input", sl), i("metaKinds").querySelectorAll(".kindChip").forEach((a) => a.addEventListener("click", () => {
    Xl = a.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((s) => s.classList.toggle("active", s === a)), sl();
  })), i("metaHideAll").addEventListener("click", () => ll(Rs().map((a) => a.key), !0)), i("metaShowAll").addEventListener("click", () => ll(Rs().map((a) => a.key), !1));
  const _t = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...bt().toggles || {} };
  function un() {
    n.querySelectorAll("[data-toggle]").forEach((d) => d.classList.toggle("on", _t[d.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([d, m]) => {
      i(m).hidden = _t[d] === !1;
    });
    const a = ["steps", "mood", "energyLevel"].some((d) => _t[d] !== !1);
    n.querySelector(".activityCard").hidden = !a, i("weatherCard").hidden = !0;
    const s = n.querySelector("#homeView .grid");
    s.classList.toggle("noActivity", !a), s.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((a) => a.addEventListener("click", () => {
    _t[a.dataset.toggle] = _t[a.dataset.toggle] === !1, un(), pn("toggles", { ..._t });
  })), un();
  function dl() {
    jr.classList.toggle("on", Xo), zr.classList.toggle("on", Xi), Li.value = Math.round(Pr * 100), i("trailStrengthValue").textContent = Li.value + "%", or.value = $i, i("trailLifeValue").textContent = or.value + " ms";
  }
  bt().trailEnabled !== void 0 && (Xo = bt().trailEnabled), bt().rippleEnabled !== void 0 && (Xi = bt().rippleEnabled), bt().trailStrength !== void 0 && (Pr = bt().trailStrength), bt().trailMaxAge !== void 0 && ($i = bt().trailMaxAge), dl();
  const Jl = i("soundsToggle");
  Jl.classList.toggle("on", Jn()), Jl.addEventListener("click", () => {
    pn("sounds", !Jn()), Jl.classList.toggle("on", Jn()), Jn() && (jl(), ti("move"));
  }), jr.addEventListener("click", () => {
    Xo = !Xo, jr.classList.toggle("on", Xo), Xo || (vi = []), pn("trailEnabled", Xo);
  }), zr.addEventListener("click", () => {
    Xi = !Xi, zr.classList.toggle("on", Xi), pn("rippleEnabled", Xi);
  }), Li.addEventListener("input", () => {
    Pr = Number(Li.value) / 100, i("trailStrengthValue").textContent = Li.value + "%";
  }), Li.addEventListener("change", () => pn("trailStrength", Pr)), or.addEventListener("input", () => {
    $i = Number(or.value), i("trailLifeValue").textContent = or.value + " ms";
  }), or.addEventListener("change", () => pn("trailMaxAge", $i)), $a.addEventListener("change", () => pn("upcomingCount", En));
  function cl(a) {
    n.querySelectorAll(".themeBtn").forEach((d) => d.classList.toggle("active", d.dataset.theme === a));
    const s = a === "light";
    i("app").classList.toggle("light", s), l.setLight(s), Ai(n);
  }
  cl(bt().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((a) => a.addEventListener("click", () => {
    cl(a.dataset.theme), pn("theme", a.dataset.theme);
  }));
  const Nn = { steps: null, weather: null, ...bt().entities || {} };
  let ea = null, co = {};
  function ni(a) {
    const s = Object.values(a).filter((Y) => Y.entity_id.startsWith("sensor.") || Y.entity_id.startsWith("input_number.")), d = (Y) => Y.attributes.friendly_name || Y.entity_id, m = s.filter((Y) => /step/i.test(Y.entity_id) || /step/i.test(d(Y)) || ["steps", "step"].includes(String(Y.attributes.unit_of_measurement || "").toLowerCase())), S = s.filter((Y) => !m.includes(Y)), R = (Y, ve) => d(Y).localeCompare(d(ve)), O = (Y, ve) => /health_steps/.test(ve.entity_id) - /health_steps/.test(Y.entity_id) || R(Y, ve);
    return { suggested: m.sort(O), rest: S.sort(R), label: d };
  }
  function Gr(a) {
    const s = i("stepsEntity");
    if (!s || s.matches(":focus")) return;
    const { suggested: d, rest: m, label: S } = ni(a), R = (ve) => '<option value="' + nt(ve.entity_id) + '">' + nt(S(ve)) + "</option>";
    s.innerHTML = '<option value="">Not connected</option>' + (d.length ? '<optgroup label="Suggested">' + d.map(R).join("") + "</optgroup>" : "") + (m.length ? '<optgroup label="All sensors">' + m.map(R).join("") + "</optgroup>" : ""), s.value = Nn.steps || "";
    const O = i("stepsStatus"), Y = Nn.steps && a[Nn.steps];
    O.textContent = Y ? "Connected · " + S(Y) : O.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    Nn.steps = i("stepsEntity").value || null, pn("entities", { ...Nn }), co = {}, ul(), ea && (Gr(ea), pl(ea));
  });
  function fn(a, s = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: s }).format(a);
  }
  function Eo() {
    const a = Nn.steps && (ea == null ? void 0 : ea[Nn.steps]), s = Number(a == null ? void 0 : a.state);
    return Number.isFinite(s) ? s : null;
  }
  function pl(a) {
    var m;
    const s = Nn.steps, d = s ? Number((m = a[s]) == null ? void 0 : m.state) : NaN;
    i("stepsMeta").textContent = s ? Number.isFinite(d) ? fn(d) : "—" : "Set up in Settings";
  }
  let Do = 0;
  async function ul() {
    const a = Nn.steps;
    if (!a || !l.ws) return;
    Do = Date.now();
    const s = /* @__PURE__ */ new Date(), d = new Date(s.getFullYear(), s.getMonth(), s.getDate() - 30);
    try {
      const m = await l.ws({ type: "recorder/statistics_during_period", start_time: d.toISOString(), end_time: s.toISOString(), statistic_ids: [a], period: "day", types: ["max"] }), S = (m == null ? void 0 : m[a]) || [], R = {};
      if (S.forEach((O) => {
        Number.isFinite(O.max) && (R[Kt(new Date(O.start))] = O.max);
      }), !Object.keys(R).length) {
        const O = await l.ws({ type: "history/history_during_period", start_time: d.toISOString(), end_time: s.toISOString(), entity_ids: [a], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((O == null ? void 0 : O[a]) || []).forEach((Y) => {
          const ve = Number(Y.s ?? Y.state), Me = Y.lu ? Y.lu * 1e3 : Date.parse(Y.last_updated || Y.last_changed);
          if (!Number.isFinite(ve) || !Me) return;
          const we = Kt(new Date(Me));
          R[we] = Math.max(R[we] || 0, ve);
        });
      }
      co = R, _o();
    } catch {
    }
  }
  function ir() {
    _o();
  }
  ir(), setInterval(() => {
    ir(), ra(), Pt();
  }, 10 * 60 * 1e3);
  function fl(a) {
    const s = {}, d = {};
    Ye.history.forEach((O) => {
      const Y = Kt(new Date(O.start));
      s[Y] = (s[Y] || 0) + (O.seconds || 0) / 60, d[Y] = (d[Y] || 0) + 1;
    });
    const m = /* @__PURE__ */ new Date(), S = Kt(m), R = [];
    for (let O = a - 1; O >= 0; O--) {
      const Y = new Date(m.getFullYear(), m.getMonth(), m.getDate() - O), ve = Kt(Y), Me = Ye.checkins.filter((me) => me.date === ve), we = (me) => {
        const Fe = Me.map((Je) => Je[me]).filter(Boolean);
        return Fe.length ? Fe.reduce((Je, Ve) => Je + Ve, 0) / Fe.length : null;
      };
      R.push({
        key: ve,
        date: Y,
        minutes: Math.round(s[ve] || 0),
        moves: d[ve] || 0,
        steps: ve === S && Eo() != null ? Eo() : co[ve] ?? null,
        mood: we("mood"),
        energy: we("energy")
      });
    }
    return R;
  }
  function Fc(a) {
    let s = a.length - 1;
    a[s] && !a[s].minutes && s--;
    let d = 0;
    for (; s >= 0 && a[s].minutes > 0; )
      d++, s--;
    return d;
  }
  function _o() {
    const a = i("insightCard");
    if (!a) return;
    const s = fl(30), d = Fc(s), m = s.reduce((Me, we) => Me + we.minutes, 0), S = /* @__PURE__ */ new Date(), R = Kt(S), O = Kt(new Date(S.getFullYear(), S.getMonth(), S.getDate() - (S.getDay() + 6) % 7)), Y = s.filter((Me) => Me.key >= O && Me.key <= R).reduce((Me, we) => Me + we.minutes, 0), ve = (Me, we, me) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + Me + '</div><div><div class="activityRowName">' + nt(we) + '</div><div class="activityRowMeta">' + nt(me) + "</div></div></div>";
    a.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + Oa("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + ve(Oa("clock"), "This week", Y + " min") + ve(Oa("streak"), "Streak", d + " day" + (d === 1 ? "" : "s")) + ve(Oa("calendar"), "30 days", m + " min") + "</div>";
  }
  const da = {
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
  }, oi = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", Xa = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Ur = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let hl = 0;
  const Yr = (a, s) => '<path class="' + s + '" d="' + a + '"/>', Ql = (a, s) => ' style="animation-delay:-' + Math.round(a * 137 % s) + 'ms"', Va = (a, s, d, m) => {
    const S = d * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (m < 1 ? ' opacity="' + m + '"' : "") + Ql(a, 2400) + ' d="M' + a + " " + (s - d) + "L" + (a + S) + " " + (s - S) + "L" + (a + d) + " " + s + "L" + (a + S) + " " + (s + S) + "L" + a + " " + (s + d) + "L" + (a - S) + " " + (s + S) + "L" + (a - d) + " " + s + "L" + (a - S) + " " + (s - S) + 'Z"/>';
  }, po = ([a, s, d], m) => '<path class="wxMoonPath" d="' + a + '" fill="url(#' + m + ')"/><defs><linearGradient id="' + m + '" x1="0" y1="' + s + '" x2="0" y2="' + d + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', qd = (a, s) => s ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Wd = (a) => (a ? ["29.35", "43.04", "56.74"].map((s, d) => '<g class="wxDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wxAccent" x="' + s + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + s + ' 60.65)"/></g>') : [19, 26, 33].map((s, d) => '<g class="wxDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + s + ' 38)"/></g>')).join(""), ed = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([s, d], m) => '<circle class="wxFlake" style="animation-delay:-' + m * 640 + 'ms" cx="' + s + '" cy="' + d + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Zr(a, s, d, m) {
    return a === "clear" ? s ? po(d ? Ur.l : Ur.s, m) + (d ? Va(70, 20, 5.83, 1) + Va(78.33, 41.67, 3.75, 0.8) + Va(60, 71.67, 3.33, 0.6) : Va(42, 12, 3.5, 1) + Va(47, 25, 2.25, 0.8) + Va(36, 43, 2, 0.6)) : qd(m, d) : a === "partly" ? (s ? po(d ? Ur.lp : Ur.sp, m) : d ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Yr(d ? Xa.lp : Xa.sp, s ? "wxCloudLight" : "wxBright") + (s ? d ? Va(73.33, 16.67, 4.17, 0.9) : Va(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? Yr(d ? Xa.lc : Xa.s, s ? "wxCloudLight" : "wxBright") + (s ? d ? Va(15, 15, 3.75, 0.8) + Va(76.67, 13.33, 2.92, 0.6) : Va(9, 9, 2.25, 0.8) + Va(46, 8, 1.75, 0.6) : "") : Yr(d ? Xa.lr : Xa.s, "wxCloudLight") + (a === "rain" ? Wd(d) : ed(d));
  }
  const Vd = () => {
    var a;
    return ((a = ea == null ? void 0 : ea["sun.sun"]) == null ? void 0 : a.state) === "below_horizon";
  };
  let ja = bt().weatherStyle || "bitmap", Kr = bt().weatherLayout === "strip" ? "strip" : "tiles", uo = bt().weatherMotion !== !1;
  const rr = () => uo && !Yt(), Hn = /* @__PURE__ */ new Map(), In = 700, Bs = (a) => {
    const [s, d] = a.split("/");
    return { k: s === "fog" ? "cloudy" : s === "storm" ? "rain" : s, night: d === "night" };
  };
  function Ps(a, s, d, m = ja, S, R) {
    let O = oi(a);
    const Y = O === "night" || (R != null ? !!R : !!d && Vd());
    O === "night" && (O = "clear");
    const ve = s ? 90 : 54, Me = Ac(a, Y), we = performance.now();
    let me = S ? Hn.get(S) : null;
    if (S && !me ? Hn.set(S, me = { key: Me, t0: -1e9 }) : me && me.key !== Me && (me.fromKey = me.key, me.from = me.last || null, me.key = Me, me.t0 = we), m !== "smooth") return '<span class="wxIcon pixels' + (s ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + Me + '"' + (S ? ' data-wx-slot="' + S + '"' : "") + ' data-wx-style="' + m + '" data-wx-size="' + ve + '"></canvas></span>';
    let Fe = "";
    if (me && we - me.t0 < In && (rr() || Yt())) {
      const Je = Bs(me.fromKey);
      Fe = '<span class="wxLayer wxOut ' + Je.k + (Je.night ? " night" : "") + '" style="animation-delay:' + Math.round(me.t0 - we) + 'ms"><svg viewBox="0 0 ' + ve + " " + ve + '">' + Zr(Je.k, Je.night, s, "wxg" + ++hl) + "</svg></span>";
    }
    return '<span class="wxIcon ' + O + (Y ? " night" : "") + (s ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + ve + " " + ve + '">' + Zr(O, Y, s, "wxg" + ++hl) + "</svg>" + Fe + "</span>";
  }
  function ml() {
    const a = i("app"), s = getComputedStyle(a), d = (Y) => s.getPropertyValue(Y).trim(), m = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([Y, ve]) => {
      d(ve) && (m[Y] = d(ve));
    });
    const S = d("--color-text-primary") || "#f1f1f1", R = d("--color-bg-card") || "#222222", O = a.classList.contains("light");
    return { colors: m, ink: O ? S : R, paper: O ? R : S };
  }
  function Ai(a, s = performance.now()) {
    const d = a.querySelectorAll("canvas[data-wx]");
    if (!d.length) return;
    const m = ml(), S = rr(), R = Yt();
    d.forEach((O) => {
      var me;
      const Y = O.dataset.wx, ve = O.dataset.wxSlot ? Hn.get(O.dataset.wxSlot) : null;
      let Me = kp(Y, m.colors);
      if (ve && ve.key === Y) {
        const Fe = (s - ve.t0) / In;
        Fe < 1 && (S || R) && (Me = Vf(ve.from || kp(ve.fromKey, m.colors), Me, Math.max(0, Fe), m.colors, R)), ve.last = Me;
      }
      const we = zu(Me, { size: Number(O.dataset.wxSize) || 54, px: 2, oneBit: O.dataset.wxStyle === "onebit", colors: m.colors, ink: m.ink, paper: m.paper, clock: s, idle: S });
      O.width !== we.w && (O.width = we.w), O.height !== we.h && (O.height = we.h), (me = O.getContext("2d")) == null || me.putImageData(new ImageData(we.data, we.w, we.h), 0, 0);
    });
  }
  let ca = null, sr = -1;
  function td(a) {
    if (ca = null, !x) return;
    const s = rr(), d = Math.floor(a / 100), m = [...Hn.values()].some((ve) => a - ve.t0 < In), S = [...$r.values()].some((ve) => a - ve.t0 < ve.dur), R = qe.home.classList.contains("active"), O = Mn.classList.contains("open"), Y = s && ja === "smooth" && (O || R && Kr === "strip");
    !document.hidden && (m || S || Y || s && d !== sr) && (sr = d, R && (Ai(i("weatherCard"), a), Ns(i("weatherCard"), a)), O && (Ai(Mn, a), Ns(Mn, a))), (s || m || S) && (ca = requestAnimationFrame(td));
  }
  function lr() {
    i("app").classList.toggle("wxMotion", rr()), !ca && x && (ca = requestAnimationFrame(td));
  }
  let jd = [];
  const Sa = 36e5, zd = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function Ro() {
    const a = /* @__PURE__ */ new Date(), s = (R, O) => new Date(a.getFullYear(), a.getMonth(), a.getDate() + R, O), d = [], m = [], S = [...Array(6)].map((R, O) => {
      const Y = s(O, 6), ve = s(O, 18), Me = s(O + 1, 6), we = jd.find((Fe) => Kt(new Date(Fe.datetime)) === Kt(Y)), me = (Fe, Je, Ve) => {
        const He = d.filter((kt) => kt.t >= +Fe && kt.t < +Je);
        if (He.length) {
          const kt = {};
          return He.forEach((Ue) => {
            kt[Ue.c] = (kt[Ue.c] || 0) + (zd.has(Ue.c) ? 2 : 1);
          }), Object.entries(kt).sort((Ue, Mt) => Mt[1] - Ue[1])[0][0];
        }
        const De = m.find((kt) => {
          const Ue = +new Date(kt.datetime);
          return Ue >= +Fe - 3 * Sa && Ue < +Je && (kt.is_daytime == null || !!kt.is_daytime == !Ve);
        });
        if (De) return De.condition;
        const xt = (we == null ? void 0 : we.condition) || "cloudy";
        return Ve && xt === "sunny" ? "clear-night" : xt;
      };
      return { start: +Y, end: +Me, day: me(Y, ve, !1), night: me(ve, Me, !0), hi: Number(we == null ? void 0 : we.temperature), lo: Number(we == null ? void 0 : we.templow) };
    });
    return { days: S, hours: d, start: S[0].start, end: S[5].end };
  }
  const Gd = (a, s) => {
    const d = a.days.findIndex((S) => s < S.end);
    if (d < 0) return 1;
    const m = a.days[d];
    return Math.max(0, (d + (s - m.start) / (m.end - m.start)) / 6);
  }, Oc = (a, s) => {
    const d = Math.max(0, Math.min(0.99999, s)) * 6, m = Math.floor(d), S = a.days[m];
    return S.start + (d - m) * (S.end - S.start);
  };
  function ad(a, s) {
    const d = Math.max(0, a.days.findIndex((ve) => s < ve.end)), m = a.days[d], S = (s - m.start) / (m.end - m.start) >= 0.5;
    let R = S ? m.night : m.day, O = NaN;
    const Y = a.hours;
    if (Y.length && s >= Y[0].t - Sa && s <= Y[Y.length - 1].t + Sa) {
      let ve = Y.findIndex((me) => me.t > s);
      ve < 0 && (ve = Y.length);
      const Me = Y[Math.max(0, ve - 1)], we = Y[Math.min(Y.length - 1, ve)];
      R = Me.c || R, O = we.t > Me.t ? Me.temp + (we.temp - Me.temp) * Math.max(0, Math.min(1, (s - Me.t) / (we.t - Me.t))) : Me.temp;
    }
    if (!Number.isFinite(O)) {
      const ve = [];
      if (a.days.forEach((Me) => {
        Number.isFinite(Me.lo) && ve.push([Me.start - Sa, Me.lo]), Number.isFinite(Me.hi) && ve.push([Me.start + 9 * Sa, Me.hi]);
      }), ve.length) {
        O = s <= ve[0][0] ? ve[0][1] : ve[ve.length - 1][1];
        for (let Me = 1; Me < ve.length; Me++) if (s <= ve[Me][0] && s > ve[Me - 1][0]) {
          const [we, me] = ve[Me - 1], [Fe, Je] = ve[Me];
          O = me + (Je - me) * (1 - Math.cos(Math.PI * (s - we) / (Fe - we))) / 2;
          break;
        }
      }
    }
    return { cond: S && R === "sunny" ? "clear-night" : R, temp: O, night: S, day: m };
  }
  const hn = (a) => Kt(new Date(a)) === Kt(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(a)), $r = /* @__PURE__ */ new Map(), Ud = 900, Yd = 700;
  let Xr = null;
  const Qn = typeof ResizeObserver == "function" ? new ResizeObserver((a) => a.forEach((s) => {
    Ns(s.target.parentElement), s.target.closest("#wxDialog") && sd();
  })) : null;
  function Ns(a, s = performance.now()) {
    const d = a.querySelectorAll("canvas[data-wx-strip]");
    if (!d.length) return;
    const m = Ro(), S = m.days.flatMap((me) => [{ cond: me.day, night: !1 }, { cond: me.night, night: !0 }]), R = S.map((me) => me.cond).join(), O = ml(), Y = rr(), ve = Yt(), Me = Number(Kt(new Date(m.start)).replace(/\D/g, "")) % 9973;
    let we = !1;
    d.forEach((me) => {
      var kt;
      const Fe = me.clientWidth, Je = me.clientHeight;
      if (!Fe || !Je) return;
      const Ve = me.dataset.wxStrip;
      let He = $r.get(Ve);
      He ? He.sig !== R && (He.prev = He.segs, He.sig = R, He.segs = S, He.t0 = s, He.dur = Yd) : $r.set(Ve, He = { sig: R, segs: S, prev: null, t0: s, dur: Ud });
      const De = Y || ve ? Math.min(1, Math.max(0, (s - He.t0) / He.dur)) : 1;
      De < 1 && (we = !0);
      const xt = { width: Fe, height: Je, colors: O.colors, clock: s, ambient: Y, seed: Me, reveal: ve ? De : 1 - Math.pow(1 - De, 3), prev: De < 1 ? He.prev : null, reduce: ve };
      if (ja === "smooth") {
        const Ue = Math.min(2, window.devicePixelRatio || 1), Mt = Math.round(Fe * Ue), Nt = Math.round(Je * Ue);
        me.width !== Mt && (me.width = Mt), me.height !== Nt && (me.height = Nt);
        const lt = me.getContext("2d");
        if (!lt) return;
        lt.setTransform(Ue, 0, 0, Ue, 0, 0), nh(lt, S, xt);
      } else {
        const Ue = ah(S, { ...xt, px: 2, oneBit: ja === "onebit", ink: O.ink, paper: O.paper });
        me.width !== Ue.w && (me.width = Ue.w), me.height !== Ue.h && (me.height = Ue.h), (kt = me.getContext("2d")) == null || kt.putImageData(new ImageData(Ue.data, Ue.w, Ue.h), 0, 0);
      }
    }), we && lr();
  }
  function Zd() {
    const a = i("weatherCard");
    if (!a || a.hidden) return;
    const s = Nn.weather, d = s && (ea == null ? void 0 : ea[s]);
    if (!d) {
      a.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Ps("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (s ? "Not available" : "Set up in Settings") + "</div></div></div></div>", Ai(a);
      return;
    }
    const m = d.attributes || {}, S = m.temperature_unit || "°", R = (lt) => Number.isFinite(Number(lt)) ? Math.round(Number(lt)) + "°" : "—", O = (m.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", Y = da[d.state] || (d.state ? d.state.charAt(0).toUpperCase() + d.state.slice(1) : "—"), ve = Kt(/* @__PURE__ */ new Date()), Me = jd.slice(0, 7), we = Me.find((lt) => Kt(new Date(lt.datetime)) === ve) || null, me = Me.filter((lt) => Kt(new Date(lt.datetime)) >= ve).slice(0, 6), Fe = /* @__PURE__ */ new Date(), Je = Kt(new Date(Fe.getFullYear(), Fe.getMonth(), Fe.getDate() + 1)), Ve = we ? "H " + R(we.temperature) + "&ensp; L " + R(we.templow) : "", He = (lt) => {
      const rt = Kt(new Date(lt.datetime));
      return rt === ve ? "Today" : rt === Je ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(lt.datetime));
    }, De = Number.isFinite(Number(m.temperature)) ? Math.round(Number(m.temperature)) : "—", xt = (lt) => {
      const rt = new Date(lt.datetime);
      return Math.round((new Date(rt.getFullYear(), rt.getMonth(), rt.getDate()) - new Date(Fe.getFullYear(), Fe.getMonth(), Fe.getDate())) / 864e5);
    }, kt = (lt) => (da[lt] || lt || "").toLowerCase(), Ue = (lt, rt) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + xt(lt) + '" aria-label="' + nt(He(lt) + ": " + kt(lt.condition) + ", " + R(lt.temperature) + " / " + R(lt.templow) + ". Open the forecast") + '">' + Ps(lt.condition, !1, !1, ja, "day" + rt) + '<div><div class="activityRowName">' + nt(He(lt)) + '</div><div class="activityRowMeta">' + R(lt.temperature) + " / " + R(lt.templow) + "</div></div></div>", Mt = () => '<div class="wxStrip"><div class="wxStripDays">' + Ro().days.map((rt, Aa) => {
      const ta = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(rt.start)) + ": " + kt(rt.day) + (kt(rt.day) === kt(rt.night) ? " all day and night" : ", then " + kt(rt.night) + " overnight") + (Number.isFinite(rt.hi) ? ". High " + R(rt.hi) : "") + (Number.isFinite(rt.lo) ? ", low " + R(rt.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + Aa + '" aria-label="' + nt(ta) + '"><span class="wxDayName">' + nt(hn(rt.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + R(rt.hi) + '</span><span class="wxLow">' + R(rt.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    a.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + nt("Now in " + O + ": " + De + "°, " + kt(d.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Ps(d.state, !0, !0, ja, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + nt(String(De)) + '</span><span class="wxUnit">' + nt(S) + '</span></div><div class="wxPlace">' + nt(O) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + nt(Y) + "</div>" + (Ve ? '<div class="wxRange">' + Ve + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (me.length ? Kr === "strip" ? Mt() : '<div class="activityRows wxDays">' + me.map(Ue).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", Ai(a);
    const Nt = a.querySelector("canvas[data-wx-strip]");
    Xr && Xr !== Nt && (Qn == null || Qn.unobserve(Xr)), Xr = Nt, Nt && (Qn == null || Qn.observe(Nt), Ns(a)), lr(), rd();
  }
  const nd = i("weatherCard"), od = (a) => {
    const s = a.closest("[data-wx-day]");
    if (s) {
      const m = /* @__PURE__ */ new Date();
      gl(+new Date(m.getFullYear(), m.getMonth(), m.getDate() + Number(s.dataset.wxDay), 12), s);
      return;
    }
    const d = a.closest("[data-wx-open]");
    d && gl(Date.now(), d);
  };
  nd.addEventListener("click", (a) => od(a.target)), nd.addEventListener("keydown", (a) => {
    (a.key === "Enter" || a.key === " ") && a.target.matches("[data-wx-day],[data-wx-open]") && (a.preventDefault(), od(a.target));
  });
  const Mn = i("wxDialog"), ii = i("wxGraph"), Jr = i("wxGraphWrap");
  let eo = Date.now(), Ei = null, dr = !1, Qr = null;
  function gl(a, s) {
    const d = Ro();
    Ei = s || null, eo = Math.max(d.start, Math.min(d.end - Sa, a)), $r.delete("dialog"), Hn.delete("scrub"), Mn.classList.add("open"), Mn.setAttribute("aria-hidden", "false"), rd(), Qn == null || Qn.observe(Mn.querySelector("canvas[data-wx-strip]")), ii.focus({ preventScroll: !0 }), lr();
  }
  function id() {
    var a;
    Mn.classList.remove("open"), Mn.setAttribute("aria-hidden", "true"), Qn == null || Qn.unobserve(Mn.querySelector("canvas[data-wx-strip]")), (a = Ei == null ? void 0 : Ei.focus) == null || a.call(Ei, { preventScroll: !0 }), Ei = null;
  }
  function rd() {
    if (!Mn.classList.contains("open")) return;
    const a = Ro();
    i("wxGraphDays").innerHTML = a.days.map((s) => "<span>" + nt(hn(s.start)) + "</span>").join(""), sd(a), Di(a), Ns(Mn);
  }
  function Di(a = Ro()) {
    const s = ad(a, eo), d = ea == null ? void 0 : ea[Nn.weather], m = (d == null ? void 0 : d.attributes) || {}, S = m.temperature_unit || "°", R = Math.abs(eo - Date.now()) < Sa / 2, O = R && d ? d.state : s.cond, Y = R && Number.isFinite(Number(m.temperature)) ? Math.round(Number(m.temperature)) : Number.isFinite(s.temp) ? Math.round(s.temp) : "—", ve = da[O] || (O ? O.charAt(0).toUpperCase() + O.slice(1) : "—"), Me = R ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(eo / Sa) * Sa)), we = s.day, me = (Number.isFinite(we.hi) ? "H " + Math.round(we.hi) + "°" : "") + (Number.isFinite(we.lo) ? "&ensp; L " + Math.round(we.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Ps(O, !0, R, ja, "scrub", R ? void 0 : s.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + nt(String(Y)) + '</span><span class="wxUnit">' + nt(S) + '</span></div><div class="wxPlace">' + nt(Me) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + nt(ve) + "</div>" + (me ? '<div class="wxRange">' + me + "</div>" : "") + "</div>", Ai(i("wxDialogNow")), ii.setAttribute("aria-valuenow", String(Math.round((eo - a.start) / Sa))), ii.setAttribute("aria-valuetext", Me + ", " + ve.toLowerCase() + ", " + Y + "°"), fo(a), lr();
  }
  function sd(a = Ro()) {
    const s = i("wxGraphLine"), d = Jr.clientWidth, m = Jr.clientHeight;
    if (!d || !m) return;
    const S = [];
    for (let De = a.start; De <= a.end; De += Sa) {
      const xt = ad(a, De).temp;
      Number.isFinite(xt) && S.push([Gd(a, De) * d, xt]);
    }
    if (s.setAttribute("viewBox", "0 0 " + d + " " + m), S.length < 2) {
      s.innerHTML = '<g id="wxCursorMark"></g>', Qr = null, fo(a);
      return;
    }
    const R = S.map((De) => De[1]), O = Math.min(...R), Y = Math.max(...R), ve = Math.max(4, Y - O), Me = ja !== "smooth", we = (De) => Me ? Math.round(De / 2) * 2 : Math.round(De * 10) / 10;
    Qr = (De) => m * 0.84 - (De - O) / ve * m * 0.62;
    const me = ml(), Fe = ja === "onebit" ? me.paper : "#ffffff", Je = ja === "onebit" ? me.ink : "rgba(0,0,0,.28)", Ve = "M" + S.map((De) => we(De[0]) + " " + we(Qr(De[1]))).join(" L"), He = (De, xt) => {
      const kt = S.find((Ue) => Ue[1] === De);
      return '<text class="wxLineLabel" x="' + we(Math.min(d - 14, Math.max(14, kt[0]))) + '" y="' + we(Qr(De) + (xt ? 18 : -10)) + '" fill="' + Fe + '" stroke="' + Je + '">' + Math.round(De) + "°</text>";
    };
    s.setAttribute("shape-rendering", Me ? "crispEdges" : "auto"), s.innerHTML = '<path d="' + Ve + '" fill="none" stroke="' + Je + '" stroke-width="' + (Me ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Ve + '" fill="none" stroke="' + Fe + '" stroke-width="2" stroke-linejoin="round"/>' + He(Y, !1) + He(O, !0) + '<g id="wxCursorMark"></g>', fo(a);
  }
  function fo(a = Ro()) {
    const s = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!s) return;
    const d = Jr.clientWidth, m = Jr.clientHeight, S = ja !== "smooth", R = (Fe) => S ? Math.round(Fe / 2) * 2 : Fe, O = R(Gd(a, eo) * d), Y = ad(a, eo).temp, ve = ml(), Me = ja === "onebit" ? ve.paper : "#ffffff", we = ja === "onebit" ? ve.ink : "rgba(0,0,0,.28)", me = Qr && Number.isFinite(Y) ? R(Qr(Y)) : null;
    s.innerHTML = '<rect x="' + (O - 2) + '" y="0" width="4" height="' + m + '" fill="' + we + '"/><rect x="' + (O - 1) + '" y="0" width="2" height="' + m + '" fill="' + Me + '"/>' + (me == null ? "" : S ? '<rect x="' + (O - 5) + '" y="' + (me - 5) + '" width="10" height="10" fill="' + Me + '" stroke="' + we + '" stroke-width="2"/>' : '<circle cx="' + O + '" cy="' + me + '" r="6" fill="' + Me + '" stroke="' + we + '" stroke-width="2"/>');
  }
  const ld = (a) => {
    const s = Jr.getBoundingClientRect();
    s.width && (eo = Oc(Ro(), (a - s.left) / s.width), Di());
  };
  ii.addEventListener("pointerdown", (a) => {
    if (a.button === 0) {
      dr = !0;
      try {
        ii.setPointerCapture(a.pointerId);
      } catch {
      }
      ld(a.clientX);
    }
  }), ii.addEventListener("pointermove", (a) => {
    dr && ld(a.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((a) => ii.addEventListener(a, () => {
    dr = !1;
  })), ii.addEventListener("keydown", (a) => {
    const s = Ro(), d = { ArrowLeft: -Sa, ArrowRight: Sa, ArrowDown: -Sa, ArrowUp: Sa, PageUp: -24 * Sa, PageDown: 24 * Sa }[a.key];
    d ? (a.preventDefault(), eo = Math.max(s.start, Math.min(s.end - Sa, Math.round(eo / Sa) * Sa + d)), Di(s)) : (a.key === "Home" || a.key === "End") && (a.preventDefault(), eo = a.key === "Home" ? s.start : s.end - Sa, Di(s));
  }), i("wxDialogClose").addEventListener("click", id), Mn.addEventListener("click", (a) => {
    a.target === Mn && id();
  }), Mn.addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), id());
  }), Zd(), (Qd = (Xd = window.matchMedia) == null ? void 0 : (Jd = Xd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || Qd.call(Jd, "change", () => {
    lr(), Ai(n);
  }), lr();
  const vl = i("tvNav");
  l.fullscreenSupported || (vl.hidden = !0), vl.addEventListener("click", () => l.toggleFullscreen()), n.addEventListener("keydown", (a) => {
    !qe.workout.classList.contains("active") || ys.classList.contains("active") || a.target.closest("input,select,textarea,.holdEnd") || (a.key === "MediaPlayPause" || a.key === " " && !a.target.closest("button") ? (a.preventDefault(), tl.click()) : a.key === "MediaTrackNext" ? (a.preventDefault(), i("skipExercise").click()) : a.key === "MediaTrackPrevious" && (a.preventDefault(), i("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((a) => a.addEventListener("click", () => {
    const s = Math.max(1, Math.min(10, (Number(at.value) || 1) + Number(a.dataset.roundsStep)));
    String(s) !== at.value && (at.value = s, at.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [B, q, D, at].forEach((a) => a.addEventListener("input", () => {
    const s = mt[Tt];
    s && (s.total = Number(B.value), s.work = Number(q.value), s.rest = Number(D.value)), Ut();
  })), re.addEventListener("click", Ts), Ze.addEventListener("click", () => L("settings")), i("settingsBack").addEventListener("click", Ts), tl.addEventListener("click", () => Ma(!Pe)), $t(Tt), oa(), ra(), _o(), i("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), ai(i("resetStats"), i("resetStatsFill"), 1500, () => {
    Ye.history = [], Ye.checkins = [], ot = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    An(), ir(), ra(), oa(), _o(), Pt(), It("Stats reset");
  });
  const Hs = i("morningTime"), dd = i("eveningTime"), ma = i("checkinAutoOpen");
  Hs.value = Mo().morning, dd.value = Mo().evening, ma.classList.toggle("on", bt().checkinAutoOpen !== !1), [["morningTime", Hs], ["eveningTime", dd]].forEach(([a, s]) => s.addEventListener("change", () => {
    s.value && (pn(a, s.value), Pt());
  })), ma.addEventListener("click", () => {
    const a = bt().checkinAutoOpen === !1;
    ma.classList.toggle("on", a), pn("checkinAutoOpen", a);
  }), setTimeout(Ie, 800);
  const Kd = i("checkinNotify"), ri = i("checkinNotifyTarget"), $d = i("checkinNotifyStatus"), qc = $d.textContent;
  function Ge() {
    const a = l.notifyServices(), s = a.filter((S) => S.startsWith("mobile_app_")), d = s.length ? s : a, m = (S) => S.replace(/^mobile_app_/, "").replace(/_/g, " ");
    ri.innerHTML = d.map((S) => '<option value="' + nt(S) + '">' + nt(m(S)) + "</option>").join(""), !bt().notifyTarget && d[0] && (bt().notifyTarget = d[0]), ri.value = bt().notifyTarget || "";
  }
  function Sn() {
    const a = !!bt().notifyOn;
    Kd.classList.toggle("on", a), i("checkinNotifyTargetRow").hidden = !a;
    const s = Mo();
    $d.textContent = a ? "Sends at " + s.morning + " and " + s.evening : qc;
  }
  async function Is() {
    const a = !!bt().notifyOn;
    try {
      return await l.setReminderAutomation(a ? { target: bt().notifyTarget, times: Mo() } : null), !0;
    } catch {
      return It("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  Kd.addEventListener("click", async () => {
    const a = !bt().notifyOn;
    if (a && (Ge(), !bt().notifyTarget)) {
      It("Install the Companion app on your phone first");
      return;
    }
    bt().notifyOn = a, Sn(), await Is() ? (An(), It(a ? "Check-in notifications on" : "Check-in notifications off")) : (bt().notifyOn = !a, Sn());
  }), ri.addEventListener("change", () => {
    pn("notifyTarget", ri.value), bt().notifyOn && Is();
  }), [Hs, dd].forEach((a) => a.addEventListener("change", () => {
    Sn(), bt().notifyOn && Is();
  })), Ge(), Sn();
  let cr = null;
  function Wc() {
    cr || (cr = setTimeout(() => {
      cr = null, _o();
    }, 3e4));
  }
  return {
    updateStates(a) {
      var d, m;
      const s = !ea || ea[Nn.weather] !== a[Nn.weather] || ((d = ea["sun.sun"]) == null ? void 0 : d.state) !== ((m = a["sun.sun"]) == null ? void 0 : m.state);
      ea = a, Gr(a), pl(a), s && Zd(), Date.now() - Do > 60 * 60 * 1e3 && ul(), Wc();
    },
    applyRemoteData(a) {
      if (a && (Array.isArray(a.history) && (Ye.history = a.history, ir()), Array.isArray(a.history) && _o(), Array.isArray(a.checkins) && (Ye.checkins = a.checkins.map(ds), Pt(), oa(), ra(), ir(), _o()), a.profiles && !sn.classList.contains("open") && !Ka)) {
        const s = gt(a);
        Object.keys(mt).forEach((d) => delete mt[d]), Object.assign(mt, s.profiles), Ye.order = s.order, mt[Tt] || (Tt = Ye.order[0]), wa(), $t(Tt);
      }
    },
    suspend() {
      x = !1;
    },
    resume() {
      x || (x = !0, bi || (bi = requestAnimationFrame(Qs)), Nr || (Nr = requestAnimationFrame(el)), lr(), Ti(n.querySelector(".tab.active"), !1));
    }
  };
}
const rh = /* @__PURE__ */ new Set(["roaming", "test_area"]), sh = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, Vs = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ua = "made_up_", Bi = (n) => {
  var l;
  return (l = String(n).split(".")[1]) == null ? void 0 : l.startsWith(Ua);
}, ic = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Dp(n) {
  const l = n.getHours() + n.getMinutes() / 60, i = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function lh(n) {
  const l = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let i = 0;
  for (let u = +l; u < +n; u += 10 * 60 * 1e3) i += Dp(new Date(u)) / 6;
  return i;
}
function Wp(n = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let i = 0; i <= 96; i++) {
    const u = +n - (96 - i) * 15 * 60 * 1e3;
    l.push([u, Dp(new Date(u))]);
  }
  return l;
}
function dh({ onChange: n }) {
  const l = {}, i = {}, u = (J, G, he, ce) => {
    l[J] = { entity_id: J, state: he, attributes: ce, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[J] = G;
  }, v = (J, G, he) => {
    const ce = l[J], ke = G ?? ce.state;
    l[J] = { ...ce, state: ke, attributes: { ...ce.attributes, ...he }, last_changed: ke === ce.state ? ce.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, x = (J, G, he, ce) => u("binary_sensor." + Ua + (J ? J + "_" : "") + ic(G), J, ce ? "on" : "off", { friendly_name: G, device_class: he });
  Object.entries(sh).forEach(([J, G]) => {
    if (G.temperature != null && u("sensor." + Ua + J + "_temperature", J, String(G.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), G.humidity != null && u("sensor." + Ua + J + "_humidity", J, String(G.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), G.vacuum && u("vacuum." + Ua + "robot", J, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), G.climate && u("climate." + Ua + J, J, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: G.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), G.cover) {
      const [he, ce, ke, ie] = G.cover;
      u("cover." + Ua + J + "_" + ic(he), J, ke ? "open" : "closed", { friendly_name: he, device_class: ce, current_position: ke, ...ie != null ? { current_tilt_position: ie } : {} });
    }
    if (G.humidifier && u("humidifier." + Ua + J, J, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: G.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), G.solar && (u("sensor." + Ua + J + "_solar_power", J, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), u("sensor." + Ua + J + "_solar_today", J, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), G.valve && u("valve." + Ua + J + "_" + ic(G.valve), J, "closed", { friendly_name: G.valve, device_class: "water" }), G.door && x(J, G.door, "door", G.doorOpen), G.window && x(J, G.window, "window", !1), G.motion && x(J, G.motion, "motion", !1), G.plant) {
      const [he, ce, ke, ie, oe] = G.plant, ne = Ua + ic(he), E = (le, qe, re, Ze, L) => u("sensor." + ne + "_" + le, J, String(re), { friendly_name: qe, device_class: L, state_class: "measurement", unit_of_measurement: Ze, plant_low: re < Vs[le][0], plant_high: re > Vs[le][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[le] });
      E("moisture", "Moisture", ce, "%", "moisture"), E("light", "Light", ke, "lx", "illuminance"), E("temperature", "Temperature", ie, "°C", "temperature"), E("fertility", "Fertility", oe, "µS/cm", "conductivity");
      const Ce = Object.entries({ moisture: ce, light: ke, temperature: ie, fertility: oe }).filter(([le, qe]) => qe < Vs[le][0] || qe > Vs[le][1]).map(([le, qe]) => le + (qe < Vs[le][0] ? " low" : " high"));
      u("plant." + ne, J, Ce.length ? "problem" : "ok", { friendly_name: he, moisture: ce, brightness: ke, temperature: ie, conductivity: oe, problem: Ce.join(", ") || "none" });
    }
  }), u("alarm_control_panel." + Ua + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), x(null, "Front door", "door", !1), x(null, "Smoke alarm", "smoke", !1), u("sensor." + Ua + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const k = {}, A = {};
  let I = null;
  function M() {
    const J = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((G) => {
      G.endsWith("_solar_power") && (l[G] = { ...l[G], state: Dp(J).toFixed(2) }), G.endsWith("_solar_today") && (l[G] = { ...l[G], state: lh(J).toFixed(1) });
    });
  }
  M();
  let W = 0;
  function F() {
    let J = !1;
    const G = ++W % 10 === 0, he = (ie, oe, ne) => {
      v(ie, oe, ne), J = !0;
    };
    Object.entries(k).forEach(([ie, oe]) => {
      const ne = l[ie].attributes.current_position, E = ne < oe ? Math.min(oe, ne + 10) : Math.max(oe, ne - 10);
      E === oe && delete k[ie], he(ie, E === oe ? E === 0 ? "closed" : "open" : oe > ne ? "opening" : "closing", { current_position: E });
    }), Object.entries(A).forEach(([ie, oe]) => {
      const ne = l[ie].attributes.current_tilt_position, E = ne < oe ? Math.min(oe, ne + 25) : Math.max(oe, ne - 25);
      E === oe && delete A[ie], he(ie, null, { current_tilt_position: E });
    }), Object.keys(l).filter((ie) => ie.startsWith("climate.")).forEach((ie) => {
      const oe = l[ie], ne = oe.attributes, E = ne.current_temperature, Ce = (oe.state === "heat" || oe.state === "auto") && E < ne.temperature - 0.05, le = (oe.state === "cool" || oe.state === "auto") && E > ne.temperature + 0.05, qe = oe.state === "off" ? "off" : Ce ? "heating" : le ? "cooling" : "idle", re = G ? Math.round((E + (Ce ? 0.1 : le ? -0.1 : 0)) * 10) / 10 : E;
      (re !== E || qe !== ne.hvac_action) && he(ie, null, { current_temperature: re, hvac_action: qe });
    }), Object.keys(l).filter((ie) => ie.startsWith("humidifier.")).forEach((ie) => {
      const oe = l[ie], ne = oe.attributes, E = ne.current_humidity, Ce = oe.state === "on" && E < ne.humidity, le = Ce && G ? E + 1 : E, qe = oe.state !== "on" ? "off" : Ce ? "humidifying" : "idle";
      if (le !== E || qe !== ne.action) {
        he(ie, null, { current_humidity: le, action: qe });
        const re = "sensor." + Ua + i[ie] + "_humidity";
        l[re] && he(re, String(le));
      }
    });
    const ce = l["vacuum." + Ua + "robot"], ke = ce.attributes;
    ce.state === "cleaning" && G && he(ce.entity_id, null, { battery_level: Math.max(5, ke.battery_level - 1) }), ce.state === "returning" && he(ce.entity_id, "docked", {}), ce.state === "docked" && ke.battery_level < 100 && he(ce.entity_id, null, { battery_level: Math.min(100, ke.battery_level + 2) }), I && Date.now() - I.at > 5e3 && (he("alarm_control_panel." + Ua + "house", "armed_" + I.mode, {}), I = null), J && n();
  }
  const V = setInterval(F, 1e3), z = setInterval(() => {
    M(), n();
  }, 60 * 1e3);
  function pe(J, G, he) {
    const ce = he == null ? void 0 : he.entity_id;
    if (!l[ce]) return !1;
    const ke = l[ce], ie = ke.attributes, oe = (ne, E) => v(ce, ne, E);
    if (J === "climate" && (G === "set_temperature" && oe(null, { temperature: Math.max(ie.min_temp, Math.min(ie.max_temp, he.temperature)) }), G === "set_hvac_mode" && oe(he.hvac_mode, he.hvac_mode === "off" ? { hvac_action: "off" } : {}), G === "toggle" && oe(ke.state === "off" ? "heat" : "off", ke.state === "off" ? {} : { hvac_action: "off" })), J === "cover") {
      const ne = G === "open_cover" ? 100 : G === "close_cover" ? 0 : G === "set_cover_position" ? he.position : G === "toggle" ? ie.current_position > 0 ? 0 : 100 : null;
      G === "stop_cover" && (delete k[ce], delete A[ce], oe(ie.current_position === 0 ? "closed" : "open")), ne != null && ne !== ie.current_position && (k[ce] = ne, oe(ne > ie.current_position ? "opening" : "closing"));
      const E = G === "open_cover_tilt" ? 100 : G === "close_cover_tilt" ? 0 : G === "set_cover_tilt_position" ? he.tilt_position : null;
      G === "stop_cover_tilt" && delete A[ce], E != null && ie.current_tilt_position != null && E !== ie.current_tilt_position && (A[ce] = E);
    }
    if (J === "humidifier" && (G === "set_humidity" && oe(null, { humidity: Math.max(ie.min_humidity, Math.min(ie.max_humidity, he.humidity)) }), G === "set_mode" && oe(null, { mode: he.mode }), G === "turn_on" || G === "turn_off" || G === "toggle")) {
      const ne = G === "turn_on" || G === "toggle" && ke.state !== "on";
      oe(ne ? "on" : "off", { action: ne ? "idle" : "off" });
    }
    if (J === "vacuum" && (G === "start" && oe("cleaning", { rooms: he.rooms || ie.rooms }), G === "pause" && oe("paused"), G === "return_to_base" && oe("returning", { rooms: [] }), G === "locate" && oe(null, { located: Date.now() }), G === "set_rooms" && oe(null, { rooms: he.rooms })), J === "valve") {
      const ne = G === "open_valve" || G === "toggle" && ke.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(G) && oe(ne ? "open" : "closed");
    }
    if (J === "alarm_control_panel") {
      G === "alarm_disarm" && (I = null, oe("disarmed", { changed_by: "Matt" }));
      const ne = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[G];
      ne && (I = { mode: ne, at: Date.now() }, oe("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function ae(J, { madeUp: G = !0 } = {}) {
    const he = G ? l : {}, ce = (J == null ? void 0 : J.states) || {}, ke = (J == null ? void 0 : J.entities) || {}, ie = (J == null ? void 0 : J.devices) || {}, oe = (de) => {
      var ge;
      const ue = ke[de];
      return ue && (ue.area_id || ue.device_id && ((ge = ie[ue.device_id]) == null ? void 0 : ge.area_id)) || null;
    }, ne = (de) => {
      const ue = ke[de];
      return ce[de] && ce[de].state !== "unavailable" && !(ue != null && ue.hidden) && !(ue != null && ue.entity_category);
    }, E = {};
    Object.keys(ce).forEach((de) => {
      const ue = oe(de);
      ue && ne(de) && (E[ue] || (E[ue] = [])).push(de);
    });
    const Ce = { ...ce, ...he }, le = (de) => {
      var ue, ge;
      return (ge = (ue = Ce[de]) == null ? void 0 : ue.attributes) == null ? void 0 : ge.device_class;
    }, qe = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], re = Object.keys(ce).filter((de) => de.startsWith("vacuum.") && ne(de)), Ze = Object.values((J == null ? void 0 : J.areas) || {}).filter((de) => !rh.has(de.area_id)).map((de) => {
      const ue = de.area_id, ge = E[ue] || [], Se = (Xe) => ge.filter((pt) => pt.startsWith(Xe + ".")), Te = (Xe) => Se("sensor").filter((pt) => le(pt) === Xe), $e = (Xe) => Object.keys(he).filter((pt) => i[pt] === ue && Xe(pt)), at = (Xe, pt) => Xe.length ? Xe : $e(pt), Ya = at(Te("temperature"), (Xe) => Xe.endsWith(ue + "_temperature")), Ne = at(Te("humidity"), (Xe) => Xe.endsWith(ue + "_humidity")), mo = Te("power").filter((Xe) => /^(W|kW)$/.test(Ce[Xe].attributes.unit_of_measurement || "")), Zn = Se("binary_sensor").filter((Xe) => le(Xe) === "moisture"), go = at(Se("plant"), (Xe) => Xe.startsWith("plant.")).map((Xe) => ({ id: Xe, readings: $e((pt) => pt.startsWith("sensor." + Xe.split(".")[1] + "_")) })), ia = [...Se("binary_sensor").filter((Xe) => qe.includes(le(Xe))), ...$e((Xe) => Xe.startsWith("binary_sensor."))];
      return {
        id: ue,
        name: de.name,
        icon: de.icon,
        floor: de.floor_id || null,
        readings: [...Ya.slice(0, 1), ...Ne.slice(0, 1), ...Zn],
        power: mo.length ? mo.reduce((Xe, pt) => Xe + Number(Ce[pt].state) * (Ce[pt].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: Se("switch"),
        lights: Se("light"),
        actions: [...Se("light"), ...at(Se("climate"), (Xe) => Xe.startsWith("climate.")), ...at(Se("cover"), (Xe) => Xe.startsWith("cover.")), ...at(Se("humidifier"), (Xe) => Xe.startsWith("humidifier.")), ...at(Se("valve"), (Xe) => Xe.startsWith("valve.")), ...Se("media_player"), ...Se("vacuum"), ...re.length ? [] : $e((Xe) => Xe.startsWith("vacuum."))],
        solar: $e((Xe) => Xe.includes("_solar_")),
        plants: go,
        openings: ia,
        alerts: [...Zn, ...ia].filter((Xe) => {
          var pt;
          return ((pt = Ce[Xe]) == null ? void 0 : pt.state) === "on";
        })
      };
    }).filter((de) => de.readings.length || de.plugs.length || de.actions.length || de.solar.length || de.plants.length), L = Object.keys(ce).find((de) => /^sensor\..*(p1_meter_power|grid_power)$/.test(de) && ce[de].state !== "unavailable") || null, B = (de) => Object.keys(ce).filter((ue) => ue.startsWith(de + ".") && ne(ue)), q = B("alarm_control_panel"), D = re.length ? re : G ? ["vacuum." + Ua + "robot"] : [];
    return {
      states: Ce,
      rooms: Ze,
      grid: L,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (de) => he[de] ? i[de] : oe(de),
      vacuums: D,
      homeVacuums: D.filter((de) => !Ze.some((ue) => ue.actions.includes(de))),
      security: {
        alarms: q.length ? q : G ? ["alarm_control_panel." + Ua + "house"] : [],
        locks: B("lock"),
        openings: [...Object.keys(he).filter((de) => de.startsWith("binary_sensor.")), ...G ? ["sensor." + Ua + "doorbell"] : []]
      }
    };
  }
  return { model: ae, call: pe, stop() {
    clearInterval(V), clearInterval(z);
  } };
}
const vr = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Mp = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((u) => u + u).join("") : l;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, ch = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Vp = {}, Ho = (n, l, i) => {
  const u = n + l + i;
  return Vp[u] || (Vp[u] = ch(Mp(n).map((v, x) => v + (Mp(l)[x] - v) * i)));
}, jp = {}, wc = (n) => jp[n] || (jp[n] = Mp(n));
function ph(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [Ho(l.clear[0], l.cloudy[0], 0.12), Ho(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Ho(l.rain[0], "#000000", 0.22), Ho(l.rain[1], "#000000", 0.22)], l;
}
const uh = [
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
], mr = (n, l) => (uh[(l & 7) * 8 + (n & 7)] + 0.5) / 64, Zu = 1, Ku = 2, $u = 3, Xu = 4, Sl = 5, Sc = 6, Sp = 7, Ju = 8, zp = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), fh = (n, l, i) => {
  let u = !1;
  for (let v = 0, x = n.length - 1; v < n.length; x = v++) {
    const k = n[v], A = n[x];
    k[1] > i != A[1] > i && l < (A[0] - k[0]) * (i - k[1]) / (A[1] - k[1]) + k[0] && (u = !u);
  }
  return u;
};
function hh(n, l, i, u, { oneBit: v, ink: x, paper: k, snowInk: A }) {
  const I = new Uint8ClampedArray(i * u * 4), M = wc(x), W = wc(k);
  for (let F = 0; F < u; F++) for (let V = 0; V < i; V++) {
    const z = F * i + V, pe = l[z];
    if (n[z] == null) continue;
    let ae = wc(n[z]);
    if (v) {
      let J;
      pe === Xu || pe === Ju ? J = !0 : pe === Sl ? J = A : pe === Sp || pe === Sc ? J = !1 : J = Math.round((0.2126 * ae[0] + 0.7152 * ae[1] + 0.0722 * ae[2]) / 255 * 4) / 4 <= mr(V, F), (pe === Zu || pe === Ku || pe === $u || pe === Sc) && (V > 0 && l[z - 1] !== pe || V < i - 1 && l[z + 1] !== pe || F > 0 && l[z - i] !== pe || F < u - 1 && l[z + i] !== pe) && (J = !0), ae = J ? M : W;
    }
    I[z * 4] = ae[0], I[z * 4 + 1] = ae[1], I[z * 4 + 2] = ae[2], I[z * 4 + 3] = 255;
  }
  return { w: i, h: u, data: I };
}
const mh = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, gh = (n) => Ac(n, !1).split("/")[0], ep = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, vh = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", bh = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", wh = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", xh = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", yh = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], kh = [".##", "##.", ".#.", "#.."];
function Qu(n, { width: l, height: i, colors: u, wave: v = 0.38, soft: x = 6, glow: k = 0.6, columns: A = 6 }) {
  const I = { ...Yn, dawn: "#e5a77e", ...u }, M = ph(I), W = l, F = i, V = W / A, z = V / 2, pe = Math.PI * 2, ae = n.length ? n : [{ cond: "cloudy", night: !1 }], J = [...Array(A * 2)].map((ke, ie) => {
    const oe = ae[Math.min(ie, ae.length - 1)], ne = gh(oe.cond), E = ie % 2 === 1;
    return { cond: oe.cond, k: ne, night: E, sky: M[ne][E ? 1 : 0], cover: mh[ne] };
  }), G = (ke) => F * (0.5 - v * Math.cos(pe * (ke / V - 0.25)));
  return { C: I, S: J, W, H: F, cw: V, sw: z, TAU: pe, yb: G, side: (ke, ie, oe) => {
    const ne = (ke ? G(ie) - oe : oe - G(ie)) / Math.max(3, x * 1.4) + 0.5;
    return ne <= 0 ? 0 : ne >= 1 ? 1 : ne;
  }, glowAt: (ke) => {
    const ie = ((ke / V - 0.25) % 1 + 1) % 1, oe = Math.max(0, Math.min(A - 1, Math.round(ke / V - 0.25))), ne = Math.max(0, Math.min(A - 1, Math.round(ke / V - 0.75))), E = 1 - (J[2 * oe].cover + J[2 * ne + 1].cover) / 2, Ce = Math.sin(Math.PI * Math.min(1, Math.max(0, G(ke) / F)));
    return { c: ie < 0.5 ? I.dusk : I.dawn, a: k * (0.2 + 0.8 * E) * Ce * Ce };
  }, soft: x, tw: V * 0.3, sy: F / 90 };
}
function ef(n, { clock: l = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: v, sw: x, side: k, C: A, TAU: I, sy: M, H: W } = n, F = l, V = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  v.forEach((ae, J) => {
    const G = ep(u * 977 + J * 131 + 7), he = (J + 0.5) * x, ce = ae.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[ae.k] : 0;
    for (let ke = 0; ke < ce; ke++) {
      const ie = he + (G() - 0.5) * x * 1.6, oe = (6 + G() * 76) * M, ne = G() < 0.35, E = 1.8 + G() * 1.6, Ce = k(!0, ie, oe) * (ne ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(I * F / 2600 + ke * 1.7 + J) : 1);
      Ce >= 0.03 && V.stars.push({ x: ie, y: oe, big: ne, size: E, o: Ce });
    }
    if (!ae.night && (ae.k === "clear" || ae.k === "partly")) {
      const ke = he + (G() - 0.5) * x * 0.3, ie = Math.min(15, x * 0.29);
      V.suns.push({ x: ke, y: 32 * M, rad: ie, halo: ie * 2.8 * (i ? 1 + 0.07 * Math.sin(I * F / 3600 + J) : 1) });
    }
    if (ae.night && (ae.k === "clear" || ae.k === "partly")) {
      const ke = Math.min(0.78, x * 0.55 / 34), ie = he - 23 * ke + (G() - 0.5) * x * 0.2;
      V.moons.push({ x: ie + 23 * ke, y: (4 + (i ? 0.8 * Math.sin(I * F / 5200 + J) : 0)) * M + 23 * ke, d: 46 * ke });
    }
  });
  const z = Math.max(56, Math.min(100, W * 0.45)), pe = Math.max(1, x / (z * 2.4));
  return v.forEach((ae, J) => {
    const G = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[ae.k];
    if (!G) return;
    const he = ae.k === "partly" ? 1 : Math.round(G * pe), ce = ep(u * 577 + J * 71 + 3), ke = (J + 0.5) * x, ie = ae.k === "rain" || ae.k === "storm" || ae.night ? A.cloudNight : A.cloudDay, oe = ae.night ? 0.82 : ae.k === "storm" ? 0.75 : 1;
    for (let ne = 0; ne < he; ne++) {
      const E = z / 46 * (ae.k === "partly" ? 1 : 0.8 + ce() * 0.4), Ce = ke + (ae.k === "partly" ? x * 0.12 : ((ne + 0.5) / he - 0.5) * x * 0.95 + (ce() - 0.5) * x * 0.5 / he), le = (ae.k === "partly" ? 40 : 6 + ce() * 26) * M, qe = i ? 2.5 * Math.sin(I * F / 9e3 + J * 1.3 + ne * 2.1) : 0, re = i ? 0.9 * Math.sin(I * F / 6100 + J + ne) : 0;
      V.clouds.push({ x: Ce - 23 * E + qe, y: le - 15.33 * E + re, w: 46 * E, h: 30.66 * E, fill: ie, o: oe * (he > 1 && ne === 0 ? 0.85 : 1) });
    }
  }), v.forEach((ae, J) => {
    const G = ep(u * 313 + J * 29 + 11), he = (J + 0.5) * x, ce = ae.cond === "pouring" ? 16 : ae.cond === "rainy" || ae.cond === "hail" ? 9 : ae.cond === "lightning-rainy" ? 12 : ae.cond === "snowy-rainy" ? 5 : 0;
    for (let ie = 0; ie < ce; ie++) {
      let oe = he + (G() - 0.5) * x * 1.05, ne = 44 + G() * 36, E = 1;
      if (i) {
        const le = ((ne - 44 + F * 0.04) % 36 + 36) % 36;
        oe -= 0.21 * (le - (ne - 44)), ne = 44 + le, E = Math.min(1, le / 6, (36 - le) / 6);
      }
      ne *= M;
      const Ce = k(ae.night, oe, ne) * E;
      Ce >= 0.05 && V.drops.push({ x: oe, y: ne, o: Ce });
    }
    const ke = ae.cond === "snowy" ? 11 : ae.cond === "snowy-rainy" ? 6 : 0;
    for (let ie = 0; ie < ke; ie++) {
      let oe = he + (G() - 0.5) * x * 1.05, ne = 40 + G() * 44, E = 1;
      if (i) {
        const le = ((ne - 40 + F * 9e-3) % 44 + 44) % 44;
        ne = 40 + le, oe += 1.6 * Math.sin(I * F / 2800 + ie * 1.9 + J), E = Math.min(1, le / 6, (44 - le) / 6);
      }
      ne *= M;
      const Ce = k(ae.night, oe, ne) * E;
      Ce >= 0.05 && V.flakes.push({ x: oe, y: ne, o: Ce });
    }
    if (ae.k === "fog") {
      const ie = ae.night ? "#c8ccd6" : "#ffffff", oe = ae.night ? 0.28 : 0.62, ne = i ? 4 * Math.sin(I * F / 8e3 + J) : 0;
      for (let E = 0; E < 4; E++) V.fogs.push({ x: he - x * 0.75 + E % 2 * x * 0.18 + (E % 2 ? ne : -ne), y: (30 + E * 13) * M, w: x * 1.3, c: ie, a: oe });
    }
    if (ae.k === "storm") {
      const ie = (F / 3400 + J * 0.37) % 1;
      V.bolts.push({ x: he + (G() - 0.5) * x * 0.3 - 5, y: 36 * M, o: i && !(ie < 0.05 || ie > 0.09 && ie < 0.12) ? 0.8 : 1 });
    }
  }), V;
}
function Mh(n, l, i, u, v, x, k, A) {
  const { S: I, C: M, cw: W, yb: F, glowAt: V, soft: z, tw: pe, sy: ae } = n, J = new Array(i * u), G = new Uint8Array(i * u), he = new Uint8Array(i * u), ce = (L, B, q, D, de) => {
    q == null || L < 0 || B < 0 || L >= i || B >= u || (D >= 1 || D > mr(L + 5, B + 3)) && (J[B * i + L] = q, G[B * i + L] = de);
  }, ke = (L, B, q, D) => {
    for (let de = Math.max(0, Math.floor(B - q) - 1); de <= Math.min(u - 1, B + q + 1); de++) for (let ue = Math.max(0, Math.floor(L - q) - 1); ue <= Math.min(i - 1, L + q + 1); ue++) D(ue, de, ue + 0.5 - L, de + 0.5 - B);
  }, ie = (L, B, q) => {
    for (let de = 0; de < L.length - 1; de++) {
      const ue = (de + B) * W;
      if (q < ue - pe / 2) return [L[de], L[de], 0];
      if (q <= ue + pe / 2) return [L[de], L[de + 1], (q - ue + pe / 2) / pe];
    }
    const D = L[L.length - 1];
    return [D, D, 0];
  }, oe = I.filter((L) => !L.night).map((L) => L.sky), ne = I.filter((L) => L.night).map((L) => L.sky), E = z / x, Ce = 16 * ae / x;
  for (let L = 0; L < i; L++) {
    const B = (L + 0.5) * v, q = F(B) / x, D = ie(oe, 0.75, B), de = ie(ne, 1.25, B), ue = V(B);
    for (let ge = 0; ge < u; ge++) {
      const Se = mr(L, ge), Te = ge + 0.5 - q, $e = (E > 0.01 ? vr(0.5 + Te / E) : Te > 0 ? 1 : 0) > Se;
      let at = $e ? D[2] > Se ? D[1] : D[0] : de[2] > Se ? de[1] : de[0];
      ($e ? vr(((ge + 0.5) / u - 0.45) / 0.55) * 0.7 : vr(1 - (ge + 0.5) / (u * 0.55)) * 0.7) > mr(L + 2, ge + 5) && (at = $e ? Ho(at, "#ffffff", 0.18) : Ho(at, "#000000", 0.25)), $e && Te >= 0 && Te < Ce && ue.a * 1.3 * (1 - Te / Ce) > mr(L + 6, ge + 1) && (at = ue.c), J[ge * i + L] = at, he[ge * i + L] = $e ? 0 : 1;
    }
  }
  const le = Ho(M.sun, "#ffffff", 0.55), qe = Ho(M.moon, "#ffffff", 0.6);
  l.stars.forEach((L) => {
    const B = Math.floor(L.x / v), q = Math.floor(L.y / x);
    if (B < 0 || q < 0 || B >= i || q >= u || !he[q * i + B] || L.o < 0.15) return;
    const D = L.o > 0.45 ? M.star : Ho(M.star, J[q * i + B], 0.5), de = L.big && L.o > 0.6 ? Math.floor(L.size / v) : 0;
    ce(B, q, D, 1, Sp);
    for (let ue = 1; ue <= de; ue++) [[B - ue, q], [B + ue, q], [B, q - ue], [B, q + ue]].forEach((ge) => {
      ge[0] >= 0 && ge[1] >= 0 && ge[0] < i && ge[1] < u && he[ge[1] * i + ge[0]] && ce(ge[0], ge[1], D, 1, Sp);
    });
  }), l.suns.forEach((L) => {
    const B = Math.max(1.5, L.rad / v), q = L.x / v, D = L.y / x, de = L.halo / v * 0.85;
    if (ke(q, D, de, (ue, ge, Se, Te) => {
      const $e = Math.sqrt(Se * Se + Te * Te);
      $e > B && $e < de && !he[ge * i + ue] && ce(ue, ge, le, 0.3 * (1 - ($e - B) / (de - B)), 0);
    }), A) {
      const ue = Math.floor(k / 500) % 2, ge = Math.max(1, B * 0.3);
      for (let Se = 0; Se < 8; Se++) if (Se % 2 === ue) for (let Te = B + 1.2; Te < B + 1.2 + ge; Te += 0.7) ce(Math.floor(q + Math.cos(Se * Math.PI / 4) * Te), Math.floor(D + Math.sin(Se * Math.PI / 4) * Te), M.sun, 1, Ju);
    }
    ke(q, D, B, (ue, ge, Se, Te) => {
      Se * Se + Te * Te <= B * B && ce(ue, ge, vr(((Te / B + 1) / 2 - 0.6) / 0.4) > mr(ue, ge) ? M.sunEdge : M.sun, 1, Zu);
    });
  }), l.moons.forEach((L) => {
    const B = Math.max(1.5, L.d * 0.37 / v), q = L.x / v, D = L.y / x, de = q + 0.547 * B, ue = D - 0.503 * B, ge = 0.82 * B;
    ke(q, D, B, (Se, Te, $e, at) => {
      if ($e * $e + at * at > B * B) return;
      const Ya = Se + 0.5 - de, Ne = Te + 0.5 - ue;
      Ya * Ya + Ne * Ne > ge * ge && ce(Se, Te, vr((at + B) / (2 * B) * 1.1 - 0.1) > mr(Se, Te) ? M.moon : qe, 1, Ku);
    });
  }), l.clouds.forEach((L) => {
    const B = Math.max(3, L.w / v), q = B * 0.6665, D = L.x / v, de = L.y / x, ue = Ho(L.fill, "#000000", 0.16);
    for (let ge = Math.max(0, Math.floor(de) - 1); ge <= Math.min(u - 1, de + q + 1); ge++) for (let Se = Math.max(0, Math.floor(D) - 1); Se <= Math.min(i - 1, D + B + 1); Se++) {
      const Te = (Se + 0.5 - D) / B, $e = (ge + 0.5 - de) / B;
      zp(Te, $e) && ce(Se, ge, !zp(Te, $e + 1 / B) || vr(($e - 0.42) / 0.25) * 0.8 > mr(Se, ge) ? ue : L.fill, L.o, $u);
    }
  }), l.fogs.forEach((L) => {
    const B = Math.floor(L.y / x), q = Math.max(B, Math.floor((L.y + 6 * ae) / x) - 1), D = Math.floor(L.x / v), de = Math.floor((L.x + L.w) / v);
    for (let ue = B; ue <= q; ue++) for (let ge = D; ge <= de; ge++) {
      const Se = (ge - D) / Math.max(1, de - D);
      ce(ge, ue, L.c, L.a * (Se < 0.25 ? Se / 0.25 : Se > 0.75 ? (1 - Se) / 0.25 : 1), 0);
    }
  });
  const re = Math.max(2, Math.round(9 / x));
  l.drops.forEach((L) => {
    const B = L.x / v, q = Math.floor(L.y / x);
    for (let D = 0; D < re; D++) ce(Math.floor(B - 0.208 * D * x / v), q + D, M.rain, L.o, Xu);
  });
  const Ze = Math.max(0, Math.round(4.4 / v / 2.6));
  return l.flakes.forEach((L) => {
    const B = Math.floor(L.x / v), q = Math.floor(L.y / x);
    ce(B, q, M.snow, L.o, Sl);
    for (let D = 1; D <= Ze; D++)
      ce(B - D, q, M.snow, L.o, Sl), ce(B + D, q, M.snow, L.o, Sl), ce(B, q - D, M.snow, L.o, Sl), ce(B, q + D, M.snow, L.o, Sl);
  }), l.bolts.forEach((L) => {
    if (v <= 3.5)
      for (let B = Math.floor(L.y / x); B <= (L.y + 24) / x; B++) for (let q = Math.floor(L.x / v); q <= (L.x + 11) / v; q++)
        fh(yh, (q + 0.5) * v - L.x, (B + 0.5) * x - L.y) && ce(q, B, M.sun, 1, Sc);
    else {
      const B = Math.round(L.x / v), q = Math.round(L.y / x);
      kh.forEach((D, de) => D.split("").forEach((ue, ge) => {
        ue === "#" && ce(B + ge, q + de, M.sun, 1, Sc);
      }));
    }
  }), { col: J, ids: G };
}
function Sh(n, l) {
  const i = l.px, u = Math.max(6, Math.round(l.width / i)), v = Math.max(6, Math.round(l.height / i)), x = l.width / u, k = l.height / v, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, I = (z) => {
    const pe = Qu(z, l);
    return Mh(pe, ef(pe, { clock: A, ambient: l.ambient, seed: l.seed }), u, v, x, k, A, l.ambient);
  }, M = I(n), W = l.reveal == null ? 1 : vr(l.reveal);
  let F = M.col, V = M.ids;
  if (W < 1) {
    const z = l.prev ? I(l.prev) : null, pe = W * (u + 12);
    F = new Array(u * v), V = new Uint8Array(u * v);
    for (let ae = 0; ae < u * v; ae++) {
      const J = ae % u, G = ae / u | 0;
      (l.reduce ? W : vr((pe - J) / 12)) > mr(J, G) ? (F[ae] = M.col[ae], V[ae] = M.ids[ae]) : z ? (F[ae] = z.col[ae], V[ae] = z.ids[ae]) : (F[ae] = null, V[ae] = 255);
    }
  }
  return hh(F, V, u, v, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function Ch(n, l, i) {
  const u = i.width, v = i.height, x = i.reveal == null ? 1 : vr(i.reveal), k = (V, z) => {
    const pe = Qu(z, i);
    Th(V, pe, ef(pe, i));
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
function Th(n, l, i) {
  const { W: u, H: v, S: x, C: k, cw: A, yb: I, glowAt: M, soft: W, tw: F, sy: V } = l, z = n.getTransform().a || 1, pe = (re) => {
    n.shadowColor = re ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = re ? 4 * z : 0, n.shadowOffsetY = re ? 1.5 * z : 0;
  }, ae = (re, Ze) => {
    const L = wc(re);
    return "rgba(" + L[0] + "," + L[1] + "," + L[2] + "," + Math.max(0, Math.min(1, Ze)).toFixed(3) + ")";
  }, J = (re, Ze) => {
    const L = n.createLinearGradient(0, 0, u, 0);
    L.addColorStop(0, re[0]);
    for (let B = 0; B < re.length - 1; B++) {
      const q = (B + Ze) * A, D = (q - F / 2) / u, de = (q + F / 2) / u;
      D > 0 && D < 1 && L.addColorStop(D, re[B]), de > 0 && de < 1 && L.addColorStop(de, re[B + 1]);
    }
    return L.addColorStop(1, re[re.length - 1]), L;
  }, G = Math.max(24, Math.ceil(u / 4)), he = (re, Ze) => {
    n.beginPath();
    for (let L = 0; L <= G; L++) {
      const B = u * L / G, q = re == null ? 0 : I(B) + re;
      L ? n.lineTo(B, q) : n.moveTo(B, q);
    }
    for (let L = G; L >= 0; L--) {
      const B = u * L / G;
      n.lineTo(B, I(B) + Ze);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = J(x.filter((re) => !re.night).map((re) => re.sky), 0.75), n.fillRect(0, 0, u, v);
  const ce = n.createLinearGradient(0, 0, u, 0);
  for (let re = 0; re <= 64; re++) {
    const Ze = M(u * re / 64);
    ce.addColorStop(re / 64, ae(Ze.c, Math.min(1, Ze.a)));
  }
  n.fillStyle = ce;
  for (let re = 0; re < 8; re++)
    n.globalAlpha = 1 - re / 8, he(re * 2 * V, (re + 1) * 2 * V);
  n.fillStyle = J(x.filter((re) => re.night).map((re) => re.sky), 1.25);
  const ke = Math.max(0.5, W), ie = 6;
  n.globalAlpha = 1, he(null, -ke);
  for (let re = 0; re < ie; re++)
    n.globalAlpha = 1 - (re + 0.5) / ie, he(-ke + 2 * ke * re / ie, -ke + 2 * ke * (re + 1) / ie);
  n.globalAlpha = 1;
  const oe = new Path2D(wh), ne = new Path2D(bh), E = new Path2D(vh), Ce = new Path2D(xh);
  n.fillStyle = k.star, i.stars.forEach((re) => {
    n.globalAlpha = re.o, re.big ? (n.save(), n.translate(re.x, re.y), n.scale(re.size, re.size), n.fill(oe), n.restore()) : (n.beginPath(), n.arc(re.x, re.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const le = Ho(k.sun, "#ffffff", 0.55);
  i.suns.forEach((re) => {
    const Ze = n.createRadialGradient(re.x, re.y, 0, re.x, re.y, re.halo);
    Ze.addColorStop(0, ae(le, 0.42)), Ze.addColorStop(0.7, ae(le, 0)), n.fillStyle = Ze, n.beginPath(), n.arc(re.x, re.y, re.halo, 0, Math.PI * 2), n.fill();
    const L = n.createLinearGradient(0, re.y - re.rad, 0, re.y + re.rad);
    L.addColorStop(0.6, k.sun), L.addColorStop(1, k.sunEdge), n.fillStyle = L, pe(!0), n.beginPath(), n.arc(re.x, re.y, re.rad, 0, Math.PI * 2), n.fill(), pe(!1);
  });
  const qe = Ho(k.moon, "#ffffff", 0.6);
  i.moons.forEach((re) => {
    n.save(), n.translate(re.x - re.d / 2, re.y - re.d / 2), n.scale(re.d / 46, re.d / 46);
    const Ze = n.createLinearGradient(0, 6, 0, 40);
    Ze.addColorStop(0, qe), Ze.addColorStop(1, k.moon), n.fillStyle = Ze, pe(!0), n.fill(ne), pe(!1), n.restore();
  }), i.clouds.forEach((re) => {
    n.save(), n.globalAlpha = re.o, n.translate(re.x, re.y), n.scale(re.w / 46, re.h / 30.66), n.translate(-4, -9.67), n.fillStyle = re.fill, pe(!0), n.fill(E), pe(!1), n.restore();
  }), i.fogs.forEach((re) => {
    const Ze = n.createLinearGradient(re.x, 0, re.x + re.w, 0);
    Ze.addColorStop(0, ae(re.c, 0)), Ze.addColorStop(0.25, ae(re.c, re.a)), Ze.addColorStop(0.75, ae(re.c, re.a)), Ze.addColorStop(1, ae(re.c, 0)), n.fillStyle = Ze, n.fillRect(re.x, re.y, re.w, 6 * V);
  }), n.fillStyle = k.rain, i.drops.forEach((re) => {
    n.save(), n.globalAlpha = re.o, n.translate(re.x, re.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, i.flakes.forEach((re) => {
    n.globalAlpha = re.o, n.beginPath(), n.arc(re.x, re.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, i.bolts.forEach((re) => {
    n.save(), n.globalAlpha = re.o, n.translate(re.x, re.y), n.fill(Ce), n.restore();
  }), n.restore();
}
const Lh = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", yl = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, rc = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, tp = (n, l) => '<path class="' + l + '" d="' + n + '"/>', Ah = (n, l) => ' style="animation-delay:-' + Math.round(n * 137 % l) + 'ms"', Po = (n, l, i, u) => {
  const v = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + Ah(n, 2400) + ' d="M' + n + " " + (l - i) + "L" + (n + v) + " " + (l - v) + "L" + (n + i) + " " + l + "L" + (n + v) + " " + (l + v) + "L" + n + " " + (l + i) + "L" + (n - v) + " " + (l + v) + "L" + (n - i) + " " + l + "L" + (n - v) + " " + (l - v) + 'Z"/>';
}, Gp = ([n, l, i], u) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + l + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Eh = (n, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Dh = (n) => (n ? ["29.35", "43.04", "56.74"].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), _h = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, i], u) => '<circle class="wbFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + l + '" cy="' + i + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Rh(n, l, i, u) {
  const v = (x) => '<g filter="url(#' + u + '-sh)">' + x + "</g>";
  return n === "clear" ? l ? v(Gp(i ? rc.l : rc.s, u)) + (i ? Po(70, 20, 5.83, 1) + Po(78.33, 41.67, 3.75, 0.8) + Po(60, 71.67, 3.33, 0.6) : Po(42, 12, 3.5, 1) + Po(47, 25, 2.25, 0.8) + Po(36, 43, 2, 0.6)) : v(Eh(u, i)) : n === "partly" ? v(l ? Gp(i ? rc.lp : rc.sp, u) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + v(tp(i ? yl.lp : yl.sp, l ? "wbCloudLight" : "wbBright")) + (l ? i ? Po(73.33, 16.67, 4.17, 0.9) : Po(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? v(tp(i ? yl.lc : yl.s, l ? "wbCloudLight" : "wbBright")) + (l ? i ? Po(15, 15, 3.75, 0.8) + Po(76.67, 13.33, 2.92, 0.6) : Po(9, 9, 2.25, 0.8) + Po(46, 8, 1.75, 0.6) : "") : v(tp(i ? yl.lr : yl.s, "wbCloudLight")) + (n === "rain" ? Dh(i) : _h(i));
}
const Bh = (n, l) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (l ? 1.6 : 1) + '" stdDeviation="' + (l ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Ph(n, l, i, u) {
  let v = Lh(n);
  const x = v === "night" || !!i;
  v === "night" && (v = "clear");
  const k = l ? 90 : 54;
  return { k: v, night: x, svg: '<svg viewBox="0 0 ' + k + " " + k + '">' + Bh(u, l) + Rh(v, x, l, u) + "</svg>" };
}
const Nh = [
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
], sc = (n, l) => (Nh[l % 8 * 8 + n % 8] + 0.5) / 64, li = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], Ln = (n, l, i) => [Math.round(n[0] + (l[0] - n[0]) * i), Math.round(n[1] + (l[1] - n[1]) * i), Math.round(n[2] + (l[2] - n[2]) * i)], md = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Up = (n, l) => {
  let i = n * 374761393 + l * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, js = [255, 255, 255], Vn = li("#26221e"), Yp = li("#0288d1"), Hh = li("#01579b"), ap = li(Yn.cloudDay), np = li(Yn.cloudNight), lc = li(Yn.dusk), op = li(Yn.sunEdge), Ih = li(Yn.sun), Fh = 10, Zp = 0.3, br = 56, tf = 21;
function Oh(n) {
  const l = Array.from({ length: tf }, () => new Array(br).fill(void 0)), i = (k, A, I) => {
    l[A][k] = I;
  }, u = Ln(lc, Vn, 0.35), v = Ln(Vn, js, 0.22);
  for (let k = 0; k <= 6; k++) {
    const A = k < 2 ? br - 2 : br - 1;
    for (let I = 6 - k; I <= A; I++) i(I, k, k < 2 ? u : k === 6 ? v : Vn);
  }
  const x = [lc, op, np, li(Yn.skyRainDay), Ln(lc, Vn, 0.2), Ln(n, Vn, 0.35)];
  [2, 3, 2, 3, 3].forEach((k, A) => {
    const I = 9 + A * 6;
    for (let M = 0; M < k; M++) {
      const W = x[(A * 2 + M * 3) % x.length];
      for (let F = I; F < I + 5; F++)
        i(F, 7 + M * 2, Ln(W, Vn, 0.12)), i(F, 8 + M * 2, M === k - 1 ? Ln(W, js, 0.3) : W);
      i(I + 5, 7 + M * 2, Vn), i(I + 5, 8 + M * 2, Vn);
    }
  });
  for (let k = 7; k <= 12; k++) i(5, k, Vn);
  i(5, 13, op);
  for (let k = 7; k <= 14; k++) for (let A = 42; A <= 51; A++) i(A, k, A === 51 ? np : ap);
  for (let k = 43; k <= 50; k += 2)
    i(k, 12, Vn), i(k, 9, Ln(Vn, ap, 0.4));
  for (let k = 40; k <= 53; k++) i(k, 14, k === 40 || k === 53 ? np : ap);
  for (let k = 15; k <= 18; k++) for (let A = 46; A <= 49; A++) i(A, k, k === 18 ? Vn : k === 16 ? op : lc);
  for (let k = 15; k <= 19; k++) i(44, k, Vn);
  return i(44, 20, Ih), l;
}
function qh(n, l, i, u) {
  const v = Math.max(1, Math.round(n)), x = Math.max(1, Math.round(l)), k = new Uint8ClampedArray(v * x * 4), A = li(u.skyClearDay), I = li(u.skyFogDay), M = Oh(A), W = Math.round(x * 0.55), F = md(1 - Math.log(i / Zp) / Math.log(Fh / Zp)), V = Ln(A, I, F), z = (G) => md((G - 0.1) / 0.9), pe = md((1 - Math.exp(-2 / i) - 0.2) / 0.8), ae = Math.round(v / 2 - br / 2), J = W + 3;
  for (let G = 0; G < x; G++) {
    const he = J - 1 - G, ce = G - J;
    for (let ke = 0; ke < v; ke++) {
      const ie = ke - ae;
      let oe, ne;
      const E = he >= 0 && he < tf && ie >= 0 && ie < br ? M[he][ie] : void 0;
      if (E)
        oe = E, ne = pe;
      else if (he >= 0 && he <= 1 && ie >= 4 - he && ie <= 5 - he)
        oe = Ln(js, Yp, 0.15), ne = pe;
      else if (G < W) {
        const qe = md(((G + 0.5) / W - 0.15) / 0.85) * 3, re = Math.min(3, Math.floor(qe + sc(ke + 2, G + 5)));
        oe = Ln(V, js, re * 0.1), ne = F * 0.95;
      } else {
        const qe = (G - W + 0.5) / (x - W), re = Math.min(1.5, 6e-3 / (qe * qe)), Ze = md(qe * 1.4) * 3, L = Math.min(3, Math.floor(Ze + sc(ke + 1, G + 6)));
        oe = Ln(Yp, Hh, L / 3);
        const B = 1 + Math.round(qe * 7), q = Math.floor(ke / (B * 3)), D = 0.06 + 0.16 * qe, de = ke % (B * 3) < B;
        de && Up(q, G) < D ? oe = Ln(oe, js, 0.18 + 0.1 * (1 - qe)) : de && qe > 0.5 && Up(q, G - 1) < D && (oe = Ln(oe, Vn, 0.12)), ne = z(1 - Math.exp(-re / i)), ce === 0 && ie >= 3 && ie <= 8 ? (oe = Ln(oe, js, ie < 6 ? 0.8 : 0.45), ne = pe) : ce >= 0 && ce <= 2 && ie >= br && ie < br + 40 ? ((1 - (ie - br) / 40) * (ce === 1 ? 0.9 : 0.5) > sc(ke, G + 3) && (oe = Ln(oe, js, 0.5)), ne = pe) : ce === 0 && ie >= 6 && ie < br && (oe = Ln(oe, Vn, ie % 2 === 0 ? 0.35 : 0.2), ne = pe);
      }
      const Ce = ne > sc(ke, G) ? I : oe, le = (G * v + ke) * 4;
      k[le] = Ce[0], k[le + 1] = Ce[1], k[le + 2] = Ce[2], k[le + 3] = 255;
    }
  }
  return { data: k, w: v, h: x };
}
const Wh = {
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
}, Vh = 1.6;
function jh(n, l) {
  const i = n ? Wh[String(n).toUpperCase()] : void 0;
  if (!i || !(l > 0)) return;
  const u = (x) => Math.abs(Math.log(x[2] / l)), v = i.reduce((x, k) => u(k) < u(x) ? k : x);
  return u(v) <= Math.log(Vh) ? { from: v[0], to: v[1], km: v[2] } : void 0;
}
const zh = (n, l) => l === "mi" ? n * 1.609344 : l === "m" ? n / 1e3 : l === "ft" ? n * 3048e-7 : l === "yd" ? n * 9144e-7 : n, Gh = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", Ca = {
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
}, sa = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, Qa = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function Uh() {
  const { pivot: n, slider: l, iconbtn: i, warp: u, outline: v } = Ca;
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
const ip = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", Yh = "#homeView .tfAreaPanel", Zh = 300, xc = (n) => Math.min(1, Zh / Math.max(1, n)), rp = (n, l) => 1 + (l / 100 - 1) * xc(n.offsetWidth);
function Kh(n, l) {
  l.style.cssText += ";" + Uh();
  let i = null;
  const u = (W) => {
    W.classList.remove("mvMoving", "mvLit"), W.style.setProperty("--rx", "0deg"), W.style.setProperty("--ry", "0deg"), W.style.setProperty("--sc", 1), W._down = !1;
  };
  n.addEventListener("pointermove", (W) => {
    var G, he;
    const F = W.pointerType === "touch" || Qa() ? null : (he = (G = W.target).closest) == null ? void 0 : he.call(G, ip);
    if (i && i !== F && u(i), i = F, !F || F.disabled) return;
    const V = Ca.pivot, z = F.getBoundingClientRect(), pe = (W.clientX - z.left) / z.width, ae = (W.clientY - z.top) / z.height, J = 1;
    F.classList.add("mvPv", "mvMoving", "mvLit"), F.style.setProperty("--pv-persp", V.persp / xc(Math.max(F.offsetWidth, F.offsetHeight)) + "px"), F.style.setProperty("--ry", (J * (pe - 0.5) * 2 * V.tilt * xc(F.offsetWidth)).toFixed(3) + "deg"), F.style.setProperty("--rx", (J * -(ae - 0.5) * 2 * V.tilt * xc(F.offsetHeight)).toFixed(3) + "deg"), F.style.setProperty("--mx", (pe * 100).toFixed(1) + "%"), F.style.setProperty("--my", (ae * 100).toFixed(1) + "%"), F._down || F.style.setProperty("--sc", rp(F, V.lift));
  }, { passive: !0 }), n.addEventListener("pointerout", (W) => {
    i && !i.contains(W.relatedTarget) && (u(i), i = null);
  }), n.addEventListener("pointerdown", (W) => {
    var V, z;
    const F = Qa() ? null : (z = (V = W.target).closest) == null ? void 0 : z.call(V, ip);
    F && (F._down = !0, F.classList.add("mvPv"), F.classList.remove("mvMoving"), F.style.setProperty("--sc", rp(F, Ca.pivot.press)));
  }), n.addEventListener("pointerup", (W) => {
    var V, z;
    const F = (z = (V = W.target).closest) == null ? void 0 : z.call(V, ip);
    F && (F._down = !1, F.style.setProperty("--sc", W.pointerType === "touch" ? 1 : rp(F, Ca.pivot.lift)));
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
    F && $h(F);
  });
  let k = null;
  const A = (W, F, V) => {
    W.querySelector(":scope>.mvEdge") || W.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const z = W.getBoundingClientRect(), pe = z.width / 2, ae = z.height / 2, J = F.clientX - z.left - pe, G = F.clientY - z.top - ae, he = J ? pe / Math.abs(J) : 1 / 0, ce = G ? ae / Math.abs(G) : 1 / 0, ke = Math.min(Math.max(1 / Math.min(he, ce), 0), 1);
    let ie = Math.atan2(G, J) * 180 / Math.PI + 90;
    ie < 0 && (ie += 360);
    const oe = V ? 100 : ke * 100;
    W.style.setProperty("--edge-proximity", oe.toFixed(3)), W.style.setProperty("--cursor-angle", ie.toFixed(3) + "deg"), W.classList.toggle("mvLitEdge", V || oe >= Ca.outline.lightAt);
  }, I = (W) => {
    W.classList.remove("mvLitEdge"), W.style.setProperty("--edge-proximity", "0"), W._down = !1;
  }, M = (W) => {
    var V;
    const F = (V = W.closest) == null ? void 0 : V.call(W, Yh);
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
    F && Ca.outline.press && (F._down = !0, A(F, W, !0));
  }), n.addEventListener("pointerup", (W) => {
    const F = M(W.target);
    F && (F._down = !1, W.pointerType === "touch" ? I(F) : A(F, W, !1));
  }), new MutationObserver((W) => {
    var F;
    for (const V of W) {
      const z = V.target;
      if (V.type === "attributes") {
        (F = z.classList) != null && F.contains("tfMoreBackdrop") && !z.hidden && V.oldValue !== null && Kp(z);
        continue;
      }
      V.addedNodes.forEach((pe) => {
        pe.nodeType === 1 && pe.classList.contains("tfMoreBackdrop") && !pe.hidden && Kp(pe);
      });
    }
  }).observe(l, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const af = (n) => n.closest("[data-k],.tfMore,.tfMorePair") || n.getRootNode();
function nf(n, l) {
  const i = [];
  for (let u = n; u && u !== l && u.parentNode; u = u.parentNode) i.unshift([...u.parentNode.children].indexOf(u));
  return i;
}
const of = (n, l) => l.reduce((i, u) => i == null ? void 0 : i.children[u], n);
function $h(n) {
  var z;
  if (Qa() || n._warp) return;
  const l = Ca.warp, i = l.amount / 100, u = n.firstElementChild;
  if (!u) return;
  const v = { squash: { scale: 1 + 0.35 * i + " " + (1 - 0.55 * i) }, pinch: { scale: String(1 - 0.5 * i) }, twist: { rotate: 140 * i + "deg", scale: String(1 - 0.35 * i) }, flip: { rotate: "y 90deg" } }[l.style], x = "blur(" + 2 * i + "px)", k = n.getRootNode(), A = af(n), I = (z = A.dataset) == null ? void 0 : z.k, M = nf(n, A), W = n.getAttribute("aria-pressed") + "|" + n.dataset.act;
  n._warp = 1;
  const F = u.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...v, filter: x }], { duration: l.win, easing: sa.exit, fill: "forwards" }), V = performance.now();
  F.finished.then(() => {
    const pe = () => {
      var ke, ie;
      const ae = I ? A.isConnected ? A : (ke = k.querySelector) == null ? void 0 : ke.call(k, '[data-k="' + CSS.escape(I) + '"]') : A, J = ae && of(ae, M);
      if (J === n && n.getAttribute("aria-pressed") + "|" + n.dataset.act === W && performance.now() - V < 420) {
        requestAnimationFrame(pe);
        return;
      }
      (((ie = J == null ? void 0 : J.matches) != null && ie.call(J, "button.tfIcon") ? J : n).firstElementChild || u).animate([{ ...v, filter: x }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: l.wout, easing: sa[l.ease] }), F.cancel(), n._warp = 0;
    };
    pe();
  });
}
function Xh(n, l, i) {
  var W;
  if (Qa() || !n || !l) return;
  const u = Ca.expand, v = n.getBoundingClientRect(), x = "inset(" + (l.top - v.top).toFixed(1) + "px " + (v.right - l.right).toFixed(1) + "px " + (v.bottom - l.bottom).toFixed(1) + "px " + (l.left - v.left).toFixed(1) + "px round 24px)", k = n.firstElementChild, A = k == null ? void 0 : k.querySelector('.tfBack, [data-close], [data-wb="graph-close"]'), I = [...n.children].slice(1);
  n.animate([{ clipPath: x }, { clipPath: "inset(0px 0px 0px 0px round 0px)" }], { duration: u.dur, easing: sa[u.ease] });
  const M = (W = k == null ? void 0 : k.querySelector(".tfIcon,.wbIcon")) == null ? void 0 : W.getBoundingClientRect();
  k && M && i && k.animate([{ transform: "translate(" + (i.left - M.left).toFixed(1) + "px," + (i.top - M.top).toFixed(1) + "px)" }, { transform: "none" }], { duration: u.dur, easing: sa[u.ease] }), A == null || A.animate([{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }], { duration: u.dur, easing: sa[u.ease] }), I.forEach((F, V) => {
    F.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: u.delay + V * u.stagger, easing: sa.standard, fill: "backwards" });
  });
}
function Jh(n, l, i) {
  if (Qa() || !n || !l) {
    i();
    return;
  }
  const u = Ca.expand, v = u.dur * u.back / 100, x = n.getBoundingClientRect(), k = "inset(" + (l.top - x.top).toFixed(1) + "px " + (x.right - l.right).toFixed(1) + "px " + (x.bottom - l.bottom).toFixed(1) + "px " + (l.left - x.left).toFixed(1) + "px round 24px)";
  [...n.children].slice(1).forEach((W) => W.animate([{ opacity: 1 }, { opacity: 0 }], { duration: v * 0.3, easing: sa.standard, fill: "forwards" }));
  const A = n.animate([{ clipPath: "inset(0px 0px 0px 0px round 0px)" }, { clipPath: k, opacity: 1, offset: 0.85 }, { clipPath: k, opacity: 0 }], { duration: v, easing: sa.standard, fill: "forwards" });
  let I = !1;
  const M = () => {
    I || (I = !0, i());
  };
  A.finished.then(M, M), setTimeout(M, v + 80);
}
const rf = (n) => {
  let l = "M" + n[0][0].toFixed(1) + " " + n[0][1].toFixed(1);
  for (let i = 0; i < n.length - 1; i++) {
    const u = n[i - 1] || n[i], v = n[i], x = n[i + 1], k = n[i + 2] || x, A = [v[0] + (x[0] - u[0]) / 6, v[1] + (x[1] - u[1]) / 6], I = [x[0] - (k[0] - v[0]) / 6, x[1] - (k[1] - v[1]) / 6];
    l += "C" + A.map((M) => M.toFixed(1)).join(" ") + " " + I.map((M) => M.toFixed(1)).join(" ") + " " + x.map((M) => M.toFixed(1)).join(" ");
  }
  return l;
}, sf = (n, l, i, u = "mvGrid") => [0, 1, 2].map((v) => {
  const x = (l + (i - l) * v / 2).toFixed(1);
  return '<line class="' + u + '" x1="0" x2="' + n + '" y1="' + x + '" y2="' + x + '"/>';
}).join("");
function lf(n, l = n.querySelector(".mvLine"), i = n.querySelectorAll(".mvArea,.mvDot")) {
  if (Qa() || !(l != null && l.getTotalLength)) return;
  const u = Ca.graphs, v = l.getTotalLength();
  l.animate([{ strokeDasharray: v, strokeDashoffset: v }, { strokeDasharray: v, strokeDashoffset: 0 }], { duration: u.draw, easing: sa.standard }), [...i].forEach((x, k) => x.animate([{ opacity: 0 }, { opacity: 1 }], { duration: u.draw * 0.6, delay: u.draw * 0.3 + k * 12, easing: sa.standard, fill: "backwards" }));
}
function yc(n, l, i, u, v) {
  if (n.getAnimations().forEach((W) => W.cancel()), n.style.left = u + "px", n.style.width = v + "px", Qa() || l === u && i === v) return;
  const x = Ca.tabs, k = x.stretch / 100, A = (W, F) => ({ left: W + "px", width: F + "px" }), M = u > l ? A(l + (u - l) * (0.15 * (1 - k)), u + v - (l + (u - l) * (0.15 * (1 - k)))) : A(u, l + i - u - (l - u) * (0.15 * (1 - k)));
  n.animate([A(l, i), { offset: 0.5, ...M }, A(u, v)], { duration: x.dur, easing: sa.standard });
}
function Qh(n) {
  const l = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", i = (v) => v.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), u = (v, x) => x ? [...v.children].indexOf(x) : -1;
  n.addEventListener("click", (v) => {
    var he, ce, ke;
    const x = (ce = (he = v.target).closest) == null ? void 0 : ce.call(he, l + ">button"), k = x == null ? void 0 : x.parentElement;
    if (!k || Qa() || x.disabled) return;
    const A = i(k);
    if (!A || A === x) return;
    const I = u(k, A), M = k.getBoundingClientRect(), W = A.getBoundingClientRect(), F = getComputedStyle(A).borderRadius, V = k.getRootNode(), z = af(k), pe = (ke = z.dataset) == null ? void 0 : ke.k, ae = nf(k, z), J = performance.now(), G = () => {
      var re, Ze, L;
      const ie = pe && !z.isConnected ? (re = V.querySelector) == null ? void 0 : re.call(V, '[data-k="' + CSS.escape(pe) + '"]') : z, oe = ie && of(ie, ae), ne = (Ze = oe == null ? void 0 : oe.matches) != null && Ze.call(oe, l) ? i(oe) : null;
      if (!ne || u(oe, ne) === I) {
        performance.now() - J < 700 && requestAnimationFrame(G);
        return;
      }
      const E = oe.getBoundingClientRect(), Ce = ne.getBoundingClientRect(), le = getComputedStyle(ne);
      (L = oe.querySelector(":scope>.mvSegInd")) == null || L.remove();
      const qe = document.createElement("span");
      qe.className = "mvSegInd", qe.style.cssText = "top:" + (Ce.top - E.top - oe.clientTop) + "px;height:" + Ce.height + "px;border-radius:" + F + ";background:" + le.backgroundColor + ";box-shadow:" + le.boxShadow, getComputedStyle(oe).position === "static" && (oe.style.position = "relative"), oe.prepend(qe), oe.classList.add("mvSegMoving"), yc(qe, W.left - M.left - oe.clientLeft, W.width, Ce.left - E.left - oe.clientLeft, Ce.width), clearTimeout(oe._seg), oe._seg = setTimeout(() => {
        qe.remove(), oe.classList.remove("mvSegMoving");
      }, Ca.tabs.dur + 20);
    };
    requestAnimationFrame(G);
  }, !0);
}
const df = (n) => getComputedStyle(n).placeItems.startsWith("end");
function Kp(n) {
  const l = n.firstElementChild;
  if (Qa() || !l || l.classList.contains("still")) return;
  const i = Ca.dialog;
  n.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + i.blur + "px)" }], { duration: i.open, easing: sa.standard }), l.style.animation = "none", l.animate(df(n) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + i.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: i.open, easing: sa[i.ease] }), [...(l.classList.contains("tfMorePair") && l.querySelector(".tfMore") || l).children].forEach((v, x) => v.animate([{ opacity: 0 }, { opacity: 1 }], { duration: i.open * 0.6, delay: i.open * 0.35 + x * 40, easing: sa.standard, fill: "backwards" }));
}
function em(n, l) {
  const i = n == null ? void 0 : n.firstElementChild;
  if (Qa() || !i || n.hidden || n._closing) {
    l();
    return;
  }
  const u = Ca.dialog;
  n._closing = !0, n.style.pointerEvents = "none", n.animate([{ opacity: 1, backdropFilter: "blur(" + u.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: u.close, easing: sa.exit, fill: "forwards" });
  const v = i.animate(df(n) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + u.from / 100 + ")" }], { duration: u.close, easing: sa.exit, fill: "forwards" });
  let x = !1;
  const k = () => {
    x || (x = !0, n._closing = !1, n.style.pointerEvents = "", n.getAnimations().forEach((A) => A.cancel()), i.getAnimations().forEach((A) => A.cancel()), l());
  };
  v.finished.then(k, k), setTimeout(k, u.close + 80);
}
const tm = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function am(n, l) {
  n.replaceChildren(), n.insertAdjacentHTML("afterbegin", tm), n.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: l }));
}
function nm(n) {
  if (Qa()) return;
  const l = Ca.confirm;
  n.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: l.dur, easing: sa.spring });
  const i = n.querySelector(".mvTick path");
  i && l.draw && i.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: l.dur * 0.5, easing: sa.standard, fill: "backwards" });
}
const $p = (n, l, i, u, v = 1) => (n + l * i * v) * Math.pow(u, v);
function Xp(n) {
  const l = Ca.drag.squash / 100;
  !n || Qa() || !l || n.animate([{ transform: "scale(" + (1 + l * 0.4) + "," + (1 - l) + ")" }, { transform: "scale(" + (1 - l * 0.1) + "," + (1 + l * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function Jp(n) {
  if (!n || Qa()) return;
  const l = Ca.expand;
  [...n.children].slice(1).forEach((i, u) => i.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: l.delay + u * l.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const gn = 6e4, zt = 36e5, to = 864e5, bd = 1440, om = 6, im = 10 * gn, Qp = 3, rm = 3, dc = { day: [6, 22], waking: [7, 23], all: [0, 24] }, sm = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], lm = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", eu = (n, l, i, u) => '<circle cx="' + n + '" cy="' + l + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((v) => {
  const x = Math.cos(v * Math.PI / 180), k = Math.sin(v * Math.PI / 180), A = i + 2, I = i + 2 + u;
  return "M" + (n + x * A).toFixed(2) + " " + (l + k * A).toFixed(2) + "L" + (n + x * I).toFixed(2) + " " + (l + k * I).toFixed(2);
}).join("") + '"/>', ur = (n) => '<path d="' + lm + '"' + (n ? ' transform="' + n + '"' : "") + "/>", fr = (n) => '<path d="' + n + '"/>', tu = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function dm(n, l) {
  const i = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return l ? tu : eu(12, 12, 4, 2.5);
    case "clear-night":
      return tu;
    case "partlycloudy":
      return (l ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : eu(7.5, 7.5, 2.6, 1.4)) + ur("translate(3.6,3) scale(.85)");
    case "cloudy":
      return ur();
    case "fog":
      return fr("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return ur(i) + fr("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return ur(i) + fr("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return ur(i) + fr("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return ur(i) + fr("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return ur(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return ur(i) + fr("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return ur(i) + fr("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return fr("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + fr("M12 8v5M12 16h.01");
  }
}
const sp = (n, l) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + dm(n, l) + "</svg>", cm = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), pm = 30 * gn, um = 7, fm = 3, au = 1, hm = gn, mm = 15 * gn, gm = 5, Gt = {
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
}, vm = {
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
}, bm = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], wm = Object.keys(Re.phases), xm = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, nu = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, cf = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], cc = 100, ou = "µg/m³", ym = "weather_alerts.air_quality_pollen", Cc = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], km = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, Mm = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], Sm = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, Cm = { daily: 1, hourly: 2 }, Oe = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Cn = (n, l) => n.replace(/\{(\w+)\}/g, (i, u) => l[u] ?? ""), gr = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', iu = /* @__PURE__ */ new Map();
function pf(n) {
  let l = iu.get(n);
  if (l === void 0) {
    const i = "http://www.w3.org/2000/svg", u = document.createElementNS(i, "svg"), v = document.createElementNS(i, "path");
    u.setAttribute("viewBox", "0 0 24 24"), u.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", v.setAttribute("d", n), u.append(v), document.body.append(u);
    const x = v.getBBox();
    u.remove();
    const k = Math.max(x.width, x.height), A = k ? 26 * 24 / k : 0, I = A / 24;
    l = k ? "width:" + A.toFixed(2) + "px;height:" + A.toFixed(2) + "px;translate:" + ((12 - x.x - x.width / 2) * I).toFixed(2) + "px " + ((12 - x.y - x.height / 2) * I).toFixed(2) + "px" : "", iu.set(n, l);
  }
  return l ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + l + '"><path d="' + n + '"/></svg>' : gr(n);
}
const Tm = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, na = (n) => n != null && n !== "" && Number.isFinite(Number(n)), ru = /* @__PURE__ */ new Map(), su = /* @__PURE__ */ new Map(), lp = /* @__PURE__ */ new WeakMap(), Lm = (n) => {
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
function Ht(n, l, i) {
  const u = Number(n);
  if (Number.isNaN(u)) return String(n);
  const v = (l == null ? void 0 : l.number_format) === "none", x = { maximumFractionDigits: 2, ...i, ...v ? { useGrouping: !1 } : {} }, k = v ? "en-US" : Lm(l), A = JSON.stringify([k, x]);
  let I = ru.get(A);
  if (!I) {
    try {
      I = new Intl.NumberFormat(k, x);
    } catch {
      I = new Intl.NumberFormat(void 0, x);
    }
    ru.set(A, I);
  }
  return I.format(u);
}
const _p = (n) => {
  var l;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.language) || (n == null ? void 0 : n.language) || void 0;
};
function Am(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (lp.has(n)) return lp.get(n);
  const l = n.time_format, i = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? n.language : void 0).includes("10") : l === "12";
  return lp.set(n, i), i;
}
const uf = (n) => {
  var l, i;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.time_zone) === "server" && ((i = n == null ? void 0 : n.config) != null && i.time_zone) ? n.config.time_zone : void 0;
};
function ff(n, l) {
  const i = JSON.stringify([n, l]);
  let u = su.get(i);
  if (!u) {
    try {
      u = new Intl.DateTimeFormat(n, l);
    } catch {
      u = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    su.set(i, u);
  }
  return u;
}
const Tn = (n, l) => ff(_p(l), { hour: "numeric", minute: "2-digit", hourCycle: Am(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: uf(l) }).format(n), lu = (n, l) => ff(_p(l), { weekday: "short", timeZone: uf(l) }).format(n), Em = (n, l) => n.toLocaleDateString(_p(l), { weekday: "narrow" }), fa = (n, l) => na(l) ? Ht(Math.round(Number(l)), n.locale) + "°" : "–", ls = (n) => {
  const l = new Date(n);
  return l.setHours(0, 0, 0, 0), l;
}, kl = (n, l) => n.getFullYear() === l.getFullYear() && n.getMonth() === l.getMonth() && n.getDate() === l.getDate(), Un = Math.PI / 180, Dm = 2440588, _m = 2451545, Tc = Un * 23.4397, Rm = 149598e3, Bm = -0.833 * Un, Pm = 0.133 * Un, du = 5 * gn, hf = (n) => n.getTime() / to - 0.5 + Dm - _m, mf = (n, l) => Math.atan2(Math.sin(n) * Math.cos(Tc) - Math.tan(l) * Math.sin(Tc), Math.cos(n)), gf = (n, l) => Math.asin(Math.sin(l) * Math.cos(Tc) + Math.cos(l) * Math.sin(Tc) * Math.sin(n)), Nm = (n, l) => Un * (280.16 + 360.9856235 * n) - l, Hm = (n, l, i) => Math.asin(Math.sin(l) * Math.sin(i) + Math.cos(l) * Math.cos(i) * Math.cos(n));
function vf(n) {
  const l = Un * (357.5291 + 0.98560028 * n), i = Un * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), u = l + i + Un * 102.9372 + Math.PI;
  return { ra: mf(u, 0), dec: gf(u, 0), dist: Rm };
}
function bf(n) {
  const l = Un * (218.316 + 13.176396 * n), i = Un * (134.963 + 13.064993 * n), u = Un * (93.272 + 13.22935 * n), v = l + Un * 6.289 * Math.sin(i), x = Un * 5.128 * Math.sin(u);
  return { ra: mf(v, x), dec: gf(v, x), dist: 385001 - 20905 * Math.cos(i) };
}
const wf = (n, l, i, u) => {
  const v = hf(l), x = n(v);
  return Hm(Nm(v, Un * -u) - x.ra, Un * i, x.dec);
}, Lc = (n, l, i) => wf(vf, n, l, i), Im = (n, l, i) => wf(bf, n, l, i);
function xf(n, l, i, u) {
  const v = {};
  let x = i.getTime(), k = n(i) - l;
  for (let A = x + du; A <= u.getTime(); A += du) {
    const I = n(new Date(A)) - l;
    if (k < 0 != I < 0) {
      const M = new Date(x + (A - x) * k / (k - I));
      I > 0 ? v.rise ?? (v.rise = M) : v.set ?? (v.set = M);
    }
    x = A, k = I;
  }
  return v;
}
const yf = (n) => {
  const l = ls(n);
  return [l, new Date(l.getTime() + to)];
}, Fm = (n, l, i) => xf((u) => Lc(u, l, i), Bm, ...yf(n)), Om = (n, l, i) => xf((u) => Im(u, l, i), Pm, ...yf(n));
function dp(n) {
  const l = hf(n), i = vf(l), u = bf(l), v = Math.acos(Math.sin(i.dec) * Math.sin(u.dec) + Math.cos(i.dec) * Math.cos(u.dec) * Math.cos(i.ra - u.ra)), x = Math.atan2(i.dist * Math.sin(v), u.dist - i.dist * Math.cos(v)), k = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - u.ra), Math.sin(i.dec) * Math.cos(u.dec) - Math.cos(i.dec) * Math.sin(u.dec) * Math.cos(i.ra - u.ra));
  return { fraction: (1 + Math.cos(x)) / 2, phase: 0.5 + 0.5 * x * (k < 0 ? -1 : 1) / Math.PI };
}
const qm = (n) => {
  const l = n * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, wd = (n) => {
  const l = n == null ? void 0 : n.config;
  return l && na(l.latitude) && na(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function Ml(n, l) {
  var M, W, F;
  const i = wd(n), u = i ? Fm(l, i.lat, i.lon) : {}, v = (M = n == null ? void 0 : n.states) == null ? void 0 : M["sun.sun"], x = ls(l).getTime(), k = (V) => {
    const z = V ? new Date(V) : null;
    return z && Number.isFinite(z.getTime()) && ls(z).getTime() === x ? z : null;
  }, A = k((W = v == null ? void 0 : v.attributes) == null ? void 0 : W.next_rising), I = k((F = v == null ? void 0 : v.attributes) == null ? void 0 : F.next_setting);
  return A && (u.rise = A), I && (u.set = I), u;
}
function Wm(n) {
  var u;
  const l = (u = n == null ? void 0 : n.states) == null ? void 0 : u["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const i = wd(n);
  return i ? Lc(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const zs = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", Cl = (n, l) => {
  var u;
  const i = (u = n.entities) == null ? void 0 : u[l];
  return !i || !i.hidden && !i.entity_category;
}, Pa = (n, l, i) => {
  var u, v;
  for (const x of l) {
    const k = (u = n.states) == null ? void 0 : u[x];
    if (!zs(k)) continue;
    const A = (v = k.attributes) == null ? void 0 : v[i];
    if (A != null && A !== "") return { stateObj: k, value: A };
  }
}, Vm = (n, l) => l.map((i) => {
  var u;
  return (u = n.states) == null ? void 0 : u[i];
}).find(zs), jm = (n, l, i) => l.map((u) => {
  var v;
  return (v = n.states) == null ? void 0 : v[u];
}).find((u) => {
  var v;
  return zs(u) && (((v = u.attributes) == null ? void 0 : v.supported_features) == null || Number(u.attributes.supported_features) & Cm[i]);
});
function rs(n, l, i) {
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
function kc(n, l, i, u) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [v, ...x] = n.formatEntityAttributeValueToParts(l, i, u).map((k) => k.value);
      return { number: v, unit: x.join("").trim() };
    }
  } catch {
  }
  return { number: Ht(u, n.locale), unit: rs(n, l, i) };
}
function cu(n, l, i, u) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(l, i, u);
  } catch {
  }
  const v = kc(n, l, i, u);
  return (v.number + " " + v.unit).trim();
}
function hr(n, l) {
  var u;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(l);
  } catch {
  }
  const i = (u = l.attributes) == null ? void 0 : u.unit_of_measurement;
  return vm[l.state] || (i && na(l.state) ? Ht(l.state, n.locale) + " " + i : l.state);
}
function os(n, l) {
  var i;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((i = l.attributes) == null ? void 0 : i.friendly_name) || l.entity_id;
}
const pu = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", pc = (n) => cf.find(([, l]) => n <= l)[0];
function zm(n, l) {
  if (l === "Beaufort") return Math.round(n);
  const i = l ? km[l] : void 0;
  if (i === void 0) return;
  const u = Mm.findIndex((v) => n * i < v);
  return u === -1 ? 12 : u;
}
const uu = (n, l) => {
  const i = l ? Sm[l] : void 0;
  return i === void 0 ? void 0 : n * i;
}, fu = (n) => Object.keys(n.states || {}).find((l) => {
  var i, u;
  return l.startsWith("sensor.") && ((u = (i = n.entities) == null ? void 0 : i[l]) == null ? void 0 : u.platform) === "moon";
}), cp = (n) => Object.values(n.states || {}).filter((l) => {
  var i, u;
  return l.entity_id.startsWith("sensor.") && ((i = l.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((u = l.attributes) == null ? void 0 : u.state_class) ?? "") && Cl(n, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function Gm(n) {
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
const kf = (n, l, i) => {
  var v, x, k;
  const u = (x = (v = n.entities) == null ? void 0 : v[i]) == null ? void 0 : x.platform;
  return !!u && !!((k = l[u]) != null && k.includes(ym));
};
function Um(n, l) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((u) => {
    var v;
    return u.entity_id.startsWith("sensor.") && Cc.includes(((v = u.attributes) == null ? void 0 : v.device_class) ?? "") && Cl(n, u.entity_id) && kf(n, l, u.entity_id);
  }).sort((u, v) => u.entity_id.localeCompare(v.entity_id)).forEach((u) => {
    i.has(u.attributes.device_class) || i.set(u.attributes.device_class, u.entity_id);
  }), Cc.map((u) => i.get(u)).filter(Boolean);
}
const Ym = (n, l) => Object.values(n.states || {}).filter((i) => {
  var u, v;
  return i.entity_id.startsWith("sensor.") && Cl(n, i.entity_id) && kf(n, l, i.entity_id) && (((v = (u = n.entities) == null ? void 0 : u[i.entity_id]) == null ? void 0 : v.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function hu(n, l, i) {
  const u = Math.max(l - n, 1e-6), v = i[i.length - 1], x = i.find((M) => u / M <= 4) ?? v * Math.ceil(u / (4 * v)), k = Math.floor(n / x) * x;
  let A = Math.ceil(l / x) * x;
  A === k && (A = k + x);
  const I = [];
  for (let M = k; M <= A + x / 1e3; M += x) I.push(M);
  return { min: k, max: A, ticks: I };
}
const Zm = (n, l, i) => {
  const u = (k) => [1, 3, 5].map((A) => parseInt(k.slice(A, A + 2), 16)), v = u(n), x = u(l);
  return "rgb(" + v.map((k, A) => Math.round(k + (x[A] - k) * i)).join(", ") + ")";
}, Km = (n, l, i, u) => {
  const v = i * Math.abs(1 - 2 * u), x = u < 0.5 ? 0 : 1;
  return "M " + n + " " + (l - i) + " A " + i + " " + i + " 0 0 0 " + n + " " + (l + i) + " A " + v + " " + i + " 0 0 " + x + " " + n + " " + (l - i) + " Z";
}, Wn = ({ icon: n, name: l, sub: i, visual: u, double: v, backdrop: x, cls: k, zone: A, callouts: I }) => '<div class="wbCard wbSquare' + (v ? " wbDouble" : "") + (x ? " wbHasBackdrop" : "") + (A != null ? " wbZoned" : "") + (k ? " " + k : "") + '">' + (x ? '<div class="wbBackdrop" aria-hidden="true">' + x + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + pf(n) + '</div><div class="wbText"><span class="wbName">' + Oe(l) + "</span>" + (i ? '<span class="wbSub">' + Oe(i) + "</span>" : "") + "</div></div>" + (A != null ? '<div class="wbZone">' + A + "</div>" + (I != null && I.length ? '<div class="wbCallouts">' + I.slice(0, 3).map((M) => Array.isArray(M) ? '<span class="wbCallout"><span>' + Oe(M[0]) + "</span><span>" + Oe(M[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + Oe(M) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + u + "</div>") + "</div>", uc = (n) => '<div class="wbZoneM">' + n + "</div>", No = (n, l) => '<div class="wbValue"><span class="wbNum">' + Oe(n) + "</span>" + (l ? '<span class="wbUnitV">' + Oe(l) + "</span>" : "") + "</div>";
function $m(n) {
  const l = n.max - n.min || 1, i = (A) => 100 - (Math.min(n.max, Math.max(n.min, A)) - n.min) / l * 100, u = (A) => A / bd * 100 + "%", v = (A) => A.map((I) => I.t + "," + i(I.v)).join(" "), x = n.kind === "line" ? n.points : [];
  let k = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((A) => '<span class="wbDcSunMark" style="left:' + u(A.t) + '">' + gr(A.rise ? Gt.sunsetUp : Gt.sunsetDown) + Oe(A.label) + "</span>").join("") + "</div>";
  return k += '<div class="wbDcY">' + n.ticks.map((A) => '<span style="top:' + i(A) + '%">' + Oe(n.format(A)) + "</span>").join("") + "</div>", k += '<div class="wbDcPlot"><svg viewBox="0 0 ' + bd + ' 100" preserveAspectRatio="none">' + n.night.map(([A, I]) => '<rect class="wbDcNight" x="' + A + '" y="0" width="' + (I - A) + '" height="100"></rect>').join("") + n.ticks.map((A) => '<line class="wbDcGrid" x1="0" x2="' + bd + '" y1="' + i(A) + '" y2="' + i(A) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((A) => '<line class="wbDcSunLine" x1="' + A.t + '" x2="' + A.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + v(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (x.length > 1 ? '<polygon class="wbDcArea" points="' + x[0].t + ",100 " + v(x) + " " + x[x.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + v(x) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((A) => A.v > 0).map((A) => '<i class="wbDcBar" style="left:' + u(A.t + 12) + ";width:" + u(36) + ";height:" + (100 - i(A.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + u(n.now.t) + ";top:" + i(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + u(n.peak.t) + ";top:" + i(n.peak.v) + '%">' + Oe(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Oe(n.note) + "</span>" : "") + "</div>", k += '<div class="wbDcX">' + n.hours.map((A) => '<span class="' + (A.minor ? "wbMinor" : "") + '" style="left:' + u(A.t) + '">' + Oe(A.label) + "</span>").join("") + "</div></div>", k;
}
function mu(n, l, i = 120, u = 300) {
  const k = n.map((G) => G.value), A = Math.min(...k), I = Math.max(...k), M = I - A || 1, W = (G) => G / (n.length - 1) * u, F = (G) => 18 + (1 - (G - A) / M) * (i - 18 - 18), V = n.map((G, he) => [W(he), F(G.value)]), z = V.length > 2 ? rf(V) : "M" + V.map((G) => G[0].toFixed(1) + " " + G[1].toFixed(1)).join("L"), pe = k.indexOf(I), ae = k.indexOf(A), J = (G) => G === 0 ? "start" : G === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + u + " " + i + '" aria-hidden="true">' + sf(u, 18, i - 18) + ('<path class="wbArea" d="' + z + "L" + u + " " + (i - 18) + "L0 " + (i - 18) + 'Z"></path>') + '<path class="wbLine" d="' + z + '" vector-effect="non-scaling-stroke"></path><text x="' + W(pe) + '" y="' + (F(I) - 6) + '" text-anchor="' + J(pe) + '">' + Oe(l(I)) + '</text><text x="' + W(ae) + '" y="' + (F(A) + 14) + '" text-anchor="' + J(ae) + '">' + Oe(l(A)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + Oe(n[0].label) + '</text><text x="' + u + '" y="' + i + '" text-anchor="end">' + Oe(n[n.length - 1].label) + "</text></svg>";
}
function Xm(n, l) {
  const x = n.map((F) => F.value).concat([]), k = Math.min(...x) - 2, A = Math.max(...x) + 1, I = A - k || 1, M = 300 / n.length, W = (F) => (1 - (F - k) / I) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((F, V) => '<rect class="wbBar' + (F.now ? " wbNowBar" : "") + '" x="' + (V * M + M * 0.2) + '" y="' + W(F.value) + '" width="' + M * 0.6 + '" height="' + (104 - W(F.value)) + '" rx="6"></rect><text x="' + (V * M + M / 2) + '" y="120" text-anchor="middle">' + Oe(F.label) + "</text>").join("") + "</svg>";
}
const Jm = [
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
], Qm = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], gu = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], eg = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let tg = 0;
function vu(n, { getHass: l, entityId: i, style: u = "bitmap", motion: v = !0, cards: x, onOpen: k, hoursWindow: A } = {}) {
  var rn, Zo;
  const I = "wb" + ++tg + "-", M = document.createElement("div");
  M.className = "wb", M.dataset.style = u;
  const W = document.createElement("div");
  W.className = "wbBento", M.appendChild(W), n.replaceChildren(M);
  const F = ["aq_tile", "pollen_tile", "radar_tile"], V = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((f) => !x || x.includes(f)), z = { current: "wide", hourly: "wide", compared_to_average: "double" }, pe = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], ae = {};
  V.forEach((f) => {
    const b = document.createElement("div");
    b.className = "wbItem", b.dataset.card = f, b.dataset.size = z[f] || "tile", b.hidden = !0, pe.includes(f) && (b.dataset.xl = ""), W.appendChild(b), ae[f] = { el: b, html: null };
  });
  let J = !1, G = null, he = 0, ce = -1, ke = !1, ie = null;
  const oe = "homecore-next-view", ne = (() => {
    try {
      return localStorage.getItem(oe);
    } catch {
      return null;
    }
  })(), E = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: ne === "bars" ? "bars" : "strip", aq: void 0 }, Ce = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let le = /* @__PURE__ */ new Date(), qe = /* @__PURE__ */ new Date();
  const re = {}, Ze = {}, L = {}, B = (f) => {
    var b;
    return ((b = L[f]) == null ? void 0 : b.forecast) ?? [];
  }, q = (f, b) => {
    var y;
    return L[b] ? (y = f.states) == null ? void 0 : y[L[b].entityId] : void 0;
  };
  function D(f) {
    const b = Ze[f];
    b && (b.unsub.then((y) => {
      typeof y == "function" && y();
    }).catch(() => {
    }), delete Ze[f]), L[f] && delete L[f];
  }
  function de(f, b, y) {
    var H;
    if (typeof ((H = f.connection) == null ? void 0 : H.subscribeMessage) != "function") return;
    const C = { entityId: y };
    try {
      C.unsub = Promise.resolve(f.connection.subscribeMessage((U) => {
        J || Ze[b] !== C || (U != null && U.forecast ? L[b] = { entityId: y, forecast: U.forecast } : delete L[b], Go());
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
      const H = jm(f, b, C);
      ((y = Ze[C]) == null ? void 0 : y.entityId) !== (H == null ? void 0 : H.entity_id) && (D(C), H && de(f, C, H.entity_id));
    }
  }
  const ge = (f, b, y, C = !1) => f.callWS({
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
    const y = Pa(f, b, "pressure");
    if (!y) return;
    const C = y.stateObj.entity_id, H = await ge(f, C, new Date(Date.now() - 3 * zt)), U = (ee = (fe = ($ = H == null ? void 0 : H[C]) == null ? void 0 : $.find((be) => {
      var ye;
      return typeof ((ye = be.a) == null ? void 0 : ye.pressure) == "number";
    })) == null ? void 0 : fe.a) == null ? void 0 : ee.pressure;
    Ce.pressureHistory = typeof U == "number" ? { entityId: C, value: U } : void 0;
  }
  async function Te(f, b) {
    var fe;
    const y = Pa(f, b, "temperature");
    if (!y) return;
    const C = y.stateObj.entity_id, H = ls(/* @__PURE__ */ new Date()), U = await ge(f, C, new Date(H.getTime() - um * to)), $ = /* @__PURE__ */ new Map();
    for (const ee of (U == null ? void 0 : U[C]) ?? []) {
      const be = (fe = ee.a) == null ? void 0 : fe.temperature, ye = new Date((ee.lc ?? ee.lu) * 1e3);
      if (typeof be != "number" || ye >= H) continue;
      const Ae = ye.toDateString();
      $.set(Ae, Math.max($.get(Ae) ?? -1 / 0, be));
    }
    Ce.temperatureHistory = { entityId: C, dailyHighs: [...$.values()], days: [...$.entries()].map(([ee, be]) => ({ date: new Date(ee), high: be })) };
  }
  async function $e(f) {
    const b = cp(f);
    if (!b) return;
    const y = await f.callWS({ type: "recorder/statistic_during_period", statistic_id: b, rolling_window: { duration: { hours: 24 } } });
    Ce.rain = { entityId: b, change: (y == null ? void 0 : y.change) ?? void 0 };
  }
  function at() {
    const f = l == null ? void 0 : l();
    if (!f || J || typeof f.callWS != "function") return;
    const b = Zn(f);
    Ce.lastFetch = Date.now(), [Se(f, b), Te(f, b), $e(f)].forEach((y) => y.then(() => Go(), () => {
    }));
  }
  async function Ya() {
    const f = l == null ? void 0 : l();
    if (!f) return;
    const b = Pa(f, Zn(f), "temperature");
    if (!b) return;
    const y = b.stateObj.entity_id, C = ls(/* @__PURE__ */ new Date());
    try {
      const H = await ge(f, y, C), U = ($) => ((H == null ? void 0 : H[y]) ?? []).map((fe) => {
        var ee;
        return { time: fe.lu * 1e3, value: (ee = fe.a) == null ? void 0 : ee[$] };
      }).filter((fe) => typeof fe.value == "number");
      Ce.todayHistory = { day: C.toDateString(), fetched: Date.now(), temperature: U("temperature"), humidity: U("humidity") }, Go();
    } catch {
    }
  }
  async function Ne(f) {
    const b = l == null ? void 0 : l();
    if (b)
      try {
        const y = await ge(b, f, new Date(Date.now() - 24 * zt), !0), C = ((y == null ? void 0 : y[f]) ?? []).filter((U) => na(U.s)), H = Math.max(1, Math.ceil(C.length / 48));
        Ce.aqHistory = { entityId: f, points: C.filter((U, $) => $ % H === 0).map((U) => ({ label: Tn(new Date(U.lu * 1e3), b), value: Number(U.s) })) }, Go();
      } catch {
      }
  }
  function mo(f) {
    Ce.categories === void 0 && (Ce.categories = null, Promise.resolve().then(() => f.callWS({ type: "integration/descriptions" })).then((b) => {
      Ce.categories = Gm(b);
    }, () => {
      Ce.categories = {};
    }).then(() => Go()));
  }
  function Zn(f) {
    var y;
    const b = Object.keys(f.states || {}).filter((C) => C.startsWith("weather.") && Cl(f, C)).sort();
    return i && ((y = f.states) != null && y[i]) ? [i, ...b.filter((C) => C !== i)] : b;
  }
  const go = (f) => Ce.categories ? { air: Um(f, Ce.categories), pollen: Ym(f, Ce.categories) } : { air: [], pollen: [] };
  function ia(f, b, y, C) {
    if (u === "line") return '<span class="wbWx wbS' + b + ' wbLineIcon" aria-hidden="true">' + sp(f, y || f === "clear-night") + "</span>";
    if (u === "smooth") {
      const H = Ph(f, b === 90, y, I + "g-" + C);
      return '<span class="wbWx wbS' + b + " wb" + H.k[0].toUpperCase() + H.k.slice(1) + (H.night ? " wbNight" : "") + '" aria-hidden="true">' + H.svg + "</span>";
    }
    return '<span class="wbWx wbS' + b + '" aria-hidden="true"><canvas data-wb-wx="' + Oe(Ac(f, y)) + '" data-size="' + b + '"></canvas></span>';
  }
  const Xe = () => B("daily").filter((f) => f.templow != null).slice(0, om);
  function pt(f, b) {
    const y = new Date(b.datetime), C = /* @__PURE__ */ new Date();
    return kl(y, C) ? Re.today : kl(y, new Date(C.getTime() + to)) ? Re.tomorrow : lu(y, f);
  }
  const en = (f, b, y) => y === 0 ? pt(f, b) : lu(new Date(b.datetime), f);
  function ao(f, b) {
    var ye, Ae, et, We;
    const y = Vm(f, b);
    if (!y) return "";
    const C = Xe(), H = E.openDay !== void 0 ? C[E.openDay] : void 0, U = Pa(f, b, "temperature"), $ = C[0], fe = $ && kl(new Date($.datetime), /* @__PURE__ */ new Date()), ee = ((Ae = (ye = f.config) == null ? void 0 : ye.unit_system) == null ? void 0 : Ae.temperature) || ((et = y.attributes) == null ? void 0 : et.temperature_unit) || "";
    let be = '<div class="wbCard wbWeather' + (H ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (H ? " inert" : "") + '><div class="wbNow">' + (k ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Oe(Re.openPage) + '">' : '<div class="wbCurrent">') + ia(y.state, 90, Wm(f), "now") + '<div class="wbTempBlock">' + (U && na(U.value) ? '<div class="wbTemp"><span class="wbDeg">' + Oe(Ht(Math.round(Number(U.value)), f.locale)) + '</span><span class="wbUnit">' + Oe(ee) + "</span></div>" : "") + '<div class="wbPlace">' + Oe(((We = f.config) == null ? void 0 : We.location_name) ?? "") + "</div></div>" + (k ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Oe(hr(f, y)) + "</div>" + (fe && $.templow != null ? '<div class="wbRange">' + Oe(Cn(Re.range, { high: fa(f, $.temperature), low: fa(f, $.templow) })) + "</div>" : "") + "</div></div>";
    if (be += gt(f) + vn(f), C.length) {
      const _e = fe && U && na(U.value) ? fa(f, U.value) : "", tt = (ze, Ee, vt) => ze === 0 && _e ? '<span class="wbAsDay">' + Oe(Ee) + '</span><span class="wbAsNow">' + Oe(vt) + "</span>" : Oe(Ee);
      be += '<div class="wbColumns" role="list">' + C.map((ze, Ee) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Ee + '" data-wb-focus="col-' + Ee + '"><span class="wbDay">' + tt(Ee, en(f, ze, Ee), Re.now) + "</span>" + ia(ze.condition ?? "cloudy", 60, !1, "col" + Ee) + '<span class="wbTemps"><span class="wbHi">' + tt(Ee, fa(f, ze.temperature), _e) + '</span><span class="wbLo">' + Oe(fa(f, ze.templow)) + "</span></span></button>").join("") + "</div>", be += '<div class="wbHalves" role="list">' + C.map((ze, Ee) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Ee + '" data-wb-focus="half-' + Ee + '">' + ia(ze.condition ?? "cloudy", 40, !1, "half" + Ee) + '<span class="wbText"><span class="wbName">' + Oe(pt(f, ze)) + '</span><span class="wbSub">' + Oe(Cn(Re.highLow, { high: fa(f, ze.temperature), low: fa(f, ze.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return be + "</div>" + (H ? bt(f, b, H) : "") + "</div>";
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
  }, mt = {
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
    const b = Date.now(), y = B("hourly").filter((Ae) => new Date(Ae.datetime).getTime() > b - zt).slice(0, 13);
    if (y.length < 2) return "";
    const C = (Ae) => Tn(new Date(Ae.datetime), f), H = (Ae) => Ye[Ae.condition] || "", U = (Ae) => mt[Ae.condition] || Ae.condition;
    let $ = H(y[0]);
    if (!$) return "";
    let fe = y[0], ee = 0;
    for (const Ae of y.slice(1))
      ee === 2 || U(Ae) === U(fe) || !H(Ae) || ($ += (ee ? " and " : ", ") + H(Ae) + " from " + C(Ae), fe = Ae, ee++);
    const be = Number(y[0].temperature), ye = y.filter((Ae) => na(Ae.temperature));
    if (na(be) && ye.length) {
      const Ae = ye.reduce((We, _e) => Number(_e.temperature) < Number(We.temperature) ? _e : We), et = ye.reduce((We, _e) => Number(_e.temperature) > Number(We.temperature) ? _e : We);
      be - Number(Ae.temperature) >= 3 ? $ += ", down to " + fa(f, Ae.temperature) + " by " + C(Ae) : Number(et.temperature) - be >= 3 && ($ += ", up to " + fa(f, et.temperature) + " by " + C(et));
    }
    return $[0].toUpperCase() + $.slice(1) + ".";
  }
  const gt = (f) => {
    const b = Tt(f);
    return b ? '<div class="wbSummary"><p class="wbSummaryText">' + Oe(b) + "</p></div>" : "";
  };
  function vn(f) {
    const [b, y] = dc[A == null ? void 0 : A()] || dc.day, C = Date.now(), H = B("hourly").filter((U) => {
      const $ = new Date(U.datetime), fe = $.getHours();
      return $.getTime() > C - zt / 2 && fe >= b && fe < y && na(U.temperature);
    }).slice(0, 4);
    return H.length ? '<div class="wbNextHours" role="list">' + H.map((U, $) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Oe(Tn(new Date(U.datetime), f)) + "</span>" + ia(U.condition ?? "cloudy", 40, U.is_daytime === !1, "hr" + $) + '<span class="wbHourTemp">' + Oe(fa(f, U.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function ds(f) {
    const b = f.getTime(), y = Date.now() - zt;
    return B("hourly").filter((C) => {
      const H = new Date(C.datetime).getTime();
      return H >= b && H < b + to && H > y;
    });
  }
  function An(f) {
    if (!f.length) return ["temperature"];
    const b = ["temperature"];
    return f.some((y) => y.precipitation != null || y.precipitation_probability != null) && b.push("precipitation"), f.some((y) => y.humidity != null) && b.push("humidity"), b;
  }
  function bt(f, b, y) {
    const C = ls(new Date(y.datetime)), H = ds(C), U = An(H), $ = U.includes(E.dayMode) ? E.dayMode : "temperature", fe = (ee) => ee === "humidity" ? Re.humidity : Re.modes[ee];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + ia(y.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Oe(pt(f, y)) + '</span><span class="wbSub">' + Oe(Cn(Re.highLow, { high: fa(f, y.temperature), low: fa(f, y.templow) })) + '</span></div><button class="wbBack" title="' + Oe(Re.back) + '" data-wb="close-day" data-wb-focus="back-day">' + gr(Gt.back) + "</button></div>" + (U.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + U.map((ee) => '<button aria-pressed="' + (ee === $) + '" data-wb="day-mode" data-mode="' + ee + '" data-wb-focus="day-mode-' + ee + '">' + Oe(fe(ee)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + $m($t(f, b, C, H, $)) + "</div></div>";
  }
  function $t(f, b, y, C, H) {
    var io;
    const U = y.getTime(), $ = Date.now(), fe = kl(y, /* @__PURE__ */ new Date()), ee = (At) => (At - U) / gn, be = (At) => Tn(new Date(At), f), ye = (At) => new Date(At.datetime).getTime(), Ae = [0, 3, 6, 9, 12, 15, 18, 21].map((At) => ({ t: At * 60, label: be(U + At * zt), minor: At % 6 !== 0 })), { rise: et, set: We } = Ml(f, y), _e = [], tt = [];
    et && (_e.push({ t: ee(et.getTime()), label: be(et.getTime()), rise: !0 }), tt.push([0, ee(et.getTime())])), We && (_e.push({ t: ee(We.getTime()), label: be(We.getTime()), rise: !1 }), tt.push([ee(We.getTime()), bd]));
    const ze = wd(f);
    !et && !We && ze && Lc(new Date(U + to / 2), ze.lat, ze.lon) < 0 && tt.push([0, bd]);
    const Ee = fe ? ee($) : void 0, vt = { hours: Ae, sun: _e, night: tt };
    if (!C.length && !fe) return { ...vt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Re.noHourly };
    if (H === "precipitation") {
      const At = C.some((Na) => Na.precipitation_probability != null), Ko = C.map((Na) => ({ t: ee(ye(Na)), v: Number((At ? Na.precipitation_probability : Na.precipitation) ?? 0) })), Rn = rs(f, q(f, "hourly"), "precipitation"), So = Math.max(0, ...Ko.map((Na) => Na.v)), Co = At ? 100 : hu(0, Math.max(So, 1), [0.5, 1, 2, 5, 10]).max, mi = (Na) => At ? Ht(Na, f.locale) + "%" : Ht(Na, f.locale, { maximumFractionDigits: 1 }) + " " + Rn, Ar = Ko.find((Na) => Na.v === So);
      return {
        ...vt,
        kind: "bars",
        points: Ko,
        min: 0,
        max: Co,
        ticks: [0, Co / 2, Co],
        format: mi,
        now: Ee !== void 0 ? { t: Ee, v: 0 } : void 0,
        peak: Ar && So > 0 ? { t: Ar.t + 30, v: Ar.v, label: mi(Ar.v) } : void 0,
        note: So > 0 ? void 0 : Re.noRain
      };
    }
    const ot = H === "humidity" ? "humidity" : "temperature", Pt = C.filter((At) => At[ot] != null && (!fe || ye(At) >= $)).map((At) => ({ t: ee(ye(At)), v: Number(At[ot]) }));
    let Ie, oa = [];
    if (Ee !== void 0) {
      const At = Pa(f, b, ot);
      At && na(At.value) && (Ie = { t: Ee, v: Number(At.value) }, Pt.unshift(Ie)), oa = (((io = Ce.todayHistory) == null ? void 0 : io.day) === y.toDateString() ? Ce.todayHistory[ot] : []).filter((Rn) => Rn.time <= $).map((Rn) => ({ t: Math.max(0, ee(Rn.time)), v: Rn.value })), Ie && oa.length && oa.push(Ie);
    }
    const ra = [...oa, ...Pt];
    if (!ra.length) return { ...vt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Re.noHourly };
    const $a = ra.map((At) => At.v), qa = hu(Math.min(...$a), Math.max(...$a), ot === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    ot === "humidity" && (qa.min = Math.max(0, qa.min), qa.max = Math.min(100, qa.max), qa.ticks = qa.ticks.filter((At) => At >= 0 && At <= 100));
    const Lr = ot === "humidity" ? (At) => Ht(At, f.locale) + "%" : (At) => fa(f, At), xn = ot === "temperature" ? ra.reduce((At, Ko) => Ko.v > At.v ? Ko : At) : void 0;
    return { ...vt, kind: "line", points: Pt, past: oa, ...qa, format: Lr, now: Ie, peak: xn ? { ...xn, label: Lr(xn.v) } : void 0 };
  }
  function cs(f) {
    const b = ["temperature"];
    return f.some((y) => y.precipitation_probability != null || y.precipitation != null) && b.push("precipitation"), f.some((y) => y.wind_speed != null) && b.push("wind"), b;
  }
  function Io(f, b, y = Qp) {
    var U, $;
    const C = B("daily"), H = [];
    for (let fe = 0; fe < y; fe++) for (const ee of [!1, !0]) {
      const be = f.getTime() + (fe * 24 + (ee ? 12 : 0)) * zt, ye = be + 12 * zt, Ae = {};
      b.forEach((We) => {
        const _e = new Date(We.datetime).getTime();
        We.condition && _e >= be && _e < ye && (Ae[We.condition] = (Ae[We.condition] ?? 0) + (cm.has(We.condition) ? 2 : 1));
      });
      let et = (U = Object.entries(Ae).sort((We, _e) => _e[1] - We[1])[0]) == null ? void 0 : U[0];
      if (!et) {
        const We = new Date(be).toDateString();
        et = (($ = C.find((_e) => new Date(_e.datetime).toDateString() === We)) == null ? void 0 : $.condition) ?? "cloudy";
      }
      H.push({ cond: ee && et === "sunny" ? "clear-night" : et, night: ee });
    }
    return H;
  }
  function ps(f, b, y) {
    const C = q(f, "hourly"), H = b.precipitation_probability != null ? Ht(b.precipitation_probability, f.locale) + "%" : "", U = b.precipitation ? Ht(b.precipitation, f.locale) + " " + rs(f, C, "precipitation") : "";
    switch (y) {
      case "precipitation":
        return H ? [H, U] : [U || "–", ""];
      case "wind":
        return b.wind_speed != null ? [Ht(Math.round(b.wind_speed), f.locale), rs(f, C, "wind_speed")] : ["–", ""];
      default:
        return [fa(f, b.temperature), (b.precipitation_probability ?? 0) >= 20 ? H : ""];
    }
  }
  function Jt(f, b, y) {
    const [C, H] = dc[A == null ? void 0 : A()] || dc.day, U = [];
    for (let $ = 0; $ < 4 && U.length < 3; $++) {
      const fe = /* @__PURE__ */ new Date();
      fe.setHours(0, 0, 0, 0), fe.setDate(fe.getDate() + $);
      const ee = new Date(fe);
      ee.setHours(H, 0, 0, 0), fe.setHours(C, 0, 0, 0), !(ee.getTime() <= y || !b.some((be) => {
        const ye = new Date(be.datetime).getTime();
        return ye >= fe.getTime() && ye <= ee.getTime();
      })) && U.push({ a: fe.getTime(), b: ee.getTime(), label: pt(f, { datetime: fe.toISOString() }) });
    }
    return U;
  }
  function vo(f, b, y, C, H, U) {
    const $ = (y.b - b.a) / zt, fe = (Ee) => ((Ee - b.a) / zt).toFixed(3), ee = 80, be = 32, ye = [];
    for (const Ee = new Date(b.a - to); Ee.getTime() < y.b + to; Ee.setDate(Ee.getDate() + 1)) {
      const { rise: vt, set: ot } = Ml(f, new Date(Ee));
      vt && ot && ye.push({ rise: vt.getTime(), set: ot.getTime() });
    }
    const Ae = (Ee, vt) => ee - (ee - be) * Math.sin(Math.PI * (vt - Ee.rise) / (Ee.set - Ee.rise)), et = (Ee) => !ye.some((vt) => Ee >= vt.rise && Ee <= vt.set);
    let We = "", _e = "", tt = "";
    ye.forEach((Ee, vt) => {
      const ot = [];
      for (let Ie = Ee.rise; Ie <= Ee.set; Ie += 15 * gn) ot.push(fe(Ie) + "," + Ae(Ee, Ie).toFixed(2));
      ot.push(fe(Ee.set) + "," + ee), We += '<polyline class="wbLineArc" points="' + ot.join(" ") + '"/>';
      const Pt = ye[vt + 1];
      Pt && (We += '<rect class="wbLineNight" x="' + fe(Ee.set) + '" y="0" width="' + ((Pt.rise - Ee.set) / zt).toFixed(3) + '" height="100"/>'), [[Ee.rise, "↑"], [Ee.set, "↓"]].forEach(([Ie, oa]) => {
        Ie < b.a || Ie > y.b || (_e += '<line class="wbLineEdge" x1="' + fe(Ie) + '" x2="' + fe(Ie) + '" y1="0" y2="100"/>', tt += '<span class="wbLineTime" style="left:' + U(Ie) + '">' + oa + " " + Oe(Tn(new Date(Ie), f)) + "</span>");
      });
    });
    const ze = ye.find((Ee) => H >= Ee.rise && H <= Ee.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + $ + ' 100" preserveAspectRatio="none" aria-hidden="true">' + We + _e + '<line class="wbLineHorizon" x1="0" x2="' + $ + '" y1="' + ee + '" y2="' + ee + '"/></svg>' + tt + (ze ? '<span class="wbLineNow" style="left:' + U(H) + ";top:" + Ae(ze, H) + '%">' + sp("sunny", !1) + "</span>" : "") + C.filter((Ee) => Ee.entry && !Ee.now).map((Ee) => '<span class="wbLineGlyph' + Ee.edge + '" style="left:' + U(Ee.t) + '">' + sp(Ee.entry.condition ?? "cloudy", et(Ee.t)) + "</span>").join("");
  }
  function nt(f, b) {
    delete re.hourly;
    const y = E.hourlyView === "bars" ? "bars" : "strip", C = '<div class="wbHeader"><h2 class="wbTitle">' + Oe(y === "bars" ? Re.nextDays : Re.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Oe(Re.showAs) + '">' + ["strip", "bars"].map((Ie) => '<button aria-pressed="' + (Ie === y) + '" data-wb="hourly-view" data-view="' + Ie + '" data-wb-focus="hourly-view-' + Ie + '">' + Oe(Re.views[Ie]) + "</button>").join("") + "</div></div>";
    if (y === "bars") return Kn(f, b, C);
    const H = B("hourly"), U = Math.floor(Date.now() / gn) * gn, $ = H.filter((Ie) => new Date(Ie.datetime).getTime() > U - zt);
    if (!$.length) return "";
    const fe = cs($), ee = fe.includes(E.hourlyMode) ? E.hourlyMode : "temperature", be = Jt(f, H, U);
    if (!be.length) return "";
    const ye = be[0], Ae = be[be.length - 1], et = (ye.b - ye.a) / zt, We = (Ie) => "calc(var(--wb-u) * " + ((Ie - ye.a) / zt).toFixed(3) + ")", _e = new Date(ye.a);
    _e.setHours(6, 0, 0, 0), _e.getTime() > ye.a && _e.setDate(_e.getDate() - 1);
    const tt = Math.ceil((Ae.b - _e.getTime()) / to);
    u !== "line" && (re.hourly = { segs: Io(_e, H, tt), seed: _e.getDate(), columns: tt });
    const ze = (Ie) => Ie === ye.a ? " wbFirst" : Ie === Ae.b ? " wbLast" : "", Ee = [];
    for (let Ie = ye.a; Ie < Ae.b; ) {
      const oa = new Date(Ie);
      oa.setHours(24, 0, 0, 0);
      const ra = Math.min(oa.getTime(), Ae.b);
      Ee.push({ a: Ie, b: ra, label: pt(f, { datetime: new Date(Ie).toISOString() }), page: be.find(($a) => $a.a >= Ie && $a.a < ra) || be.find(($a) => $a.a < ra && $a.b > Ie) }), Ie = ra;
    }
    const vt = U > ye.a && U < Ae.b ? Math.floor((U - ye.a) / (2 * zt)) * 2 : 0, ot = [];
    for (let Ie = ye.a; Ie <= Ae.b; Ie += zt) {
      const oa = new Date(Ie), ra = ze(Ie);
      !ra && oa.getHours() % rm || !ra && (Math.abs(ye.a - Ie) < 2 * zt || Math.abs(Ae.b - Ie) < 2 * zt) || U >= ye.a && Math.abs(Ie - U) < 1.5 * zt && !ra || ot.push({ t: Ie, edge: ra, label: Tn(oa, f), entry: Ie >= U - zt ? H.find(($a) => new Date($a.datetime).getTime() === Ie) : void 0 });
    }
    U > ye.a && U < ye.b && ot.push({ t: U, edge: U - ye.a < zt ? " wbFirst" : ye.b - U < zt ? " wbLast" : "", label: Re.now, entry: $[0], now: !0 });
    const Pt = (Ie, oa) => '<span class="wbMark' + Ie.edge + (Ie.now ? " wbNowMark" : "") + '" style="left:' + We(Ie.t) + '">' + oa + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + C + (fe.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + fe.map((Ie) => '<button aria-pressed="' + (Ie === ee) + '" data-wb="hourly-mode" data-mode="' + Ie + '" data-wb-focus="hourly-mode-' + Ie + '">' + Oe(Re.modes[Ie]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Oe(Re.nextHours) + '" data-span="' + et + '" data-start="' + vt + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + et + ");width:calc(var(--wb-u) * " + (Ae.b - ye.a) / zt + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((Ae.b - ye.a) / (2 * zt)) + 1)].map((Ie, oa) => '<i class="wbSnap" style="left:' + We(ye.a + oa * 2 * zt) + '"></i>').join("") + '<div class="wbDays">' + Ee.map((Ie, oa) => {
      var ra;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Ie.b - Ie.a) / zt).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (oa === 0 ? vt : ((((ra = Ie.page) == null ? void 0 : ra.a) ?? Ie.a) - ye.a) / zt) + '" data-wb-focus="hours-day-' + oa + '">' + Oe(Ie.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + ot.map((Ie) => Pt(Ie, Oe(Ie.label))).join("") + "</div>" + (u === "line" ? '<div class="wbSky wbLineSky">' + vo(f, ye, Ae, ot, U, We) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + We(_e.getTime()) + ";width:calc(var(--wb-u) * " + tt * 24 + ')"><canvas data-wb-strip="hourly"' + (u === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (U > ye.a ? '<i class="wbPast" style="width:' + We(Math.min(U, Ae.b)) + '"></i><i class="wbNowLine" style="left:' + We(U) + '"></i>' : "") + Ee.slice(1).map((Ie) => '<i class="wbMidnight" style="left:' + We(Ie.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + ot.map((Ie) => {
      if (!Ie.entry) return "";
      const [oa, ra] = ps(f, Ie.entry, ee);
      return Pt(Ie, '<span class="wbPrimaryV">' + Oe(oa) + '</span><span class="wbSecondary">' + Oe(ra) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Ll(f) {
    const b = sm, y = b.findIndex(([ee]) => ee >= f);
    if (y <= 0) return "rgb(" + b[y < 0 ? b.length - 1 : 0][1].join(",") + ")";
    const [C, H] = b[y - 1], [U, $] = b[y], fe = (f - C) / (U - C);
    return "rgb(" + H.map((ee, be) => Math.round(ee + ($[be] - ee) * fe)).join(",") + ")";
  }
  function Kn(f, b, y) {
    var We;
    const C = B("daily").filter((_e) => na(_e.templow) && na(_e.temperature)).slice(0, 7);
    if (!C.length) return "";
    const H = Math.min(...C.map((_e) => Number(_e.templow))), U = Math.max(...C.map((_e) => Number(_e.temperature))), $ = Math.max(1, U - H), fe = (_e) => Math.max(0, Math.min(100, (_e - H) / $ * 100)).toFixed(2), ee = /F/.test(rs(f, q(f, "daily"), "temperature")), be = (_e) => ee ? (_e - 32) / 1.8 : _e, ye = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((_e) => Ll(be(H + _e * $)) + " " + _e * 100 + "%").join(",") + ")", Ae = (We = Pa(f, b, "temperature")) == null ? void 0 : We.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (cs(B("hourly").filter((_e) => new Date(_e.datetime).getTime() > Date.now() - zt)).length > 1 ? " wbTabbed" : "") + '">' + y + '<div class="wbDayBars" role="list">' + C.map((_e, tt) => {
      const ze = pt(f, _e), Ee = kl(new Date(_e.datetime), /* @__PURE__ */ new Date()), vt = Number(_e.templow), ot = Number(_e.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Oe(Cn(Re.rangeRow, { day: ze, low: fa(f, vt), high: fa(f, ot) })) + '"><span class="wbRangeDay">' + Oe(ze) + "</span>" + ia(_e.condition, 40, !1, "r" + tt) + '<span class="wbRangeLo">' + Oe(fa(f, vt)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + ye + ";clip-path:inset(0 " + (100 - fe(ot)) + "% 0 " + fe(vt) + '% round 4px)"></i>' + (Ee && na(Ae) ? '<i class="wbRangeNow" style="left:' + fe(Number(Ae)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Oe(fa(f, ot)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const wa = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Ke = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], dt = (f, b) => {
    if (b <= f[0][0]) return f[0][1];
    for (let y = 1; y < f.length; y++) if (b <= f[y][0]) {
      const [C, H] = f[y - 1], [U, $] = f[y];
      return Zm(H, $, (b - C) / (U - C));
    }
    return f[f.length - 1][1];
  }, xa = (f, b, y) => {
    if (!b || !y) return wa[5][1];
    const C = (f.getTime() - y.getTime()) / gn;
    return C >= -90 ? dt(Ke, C) : dt(wa, (f.getTime() - b.getTime()) / gn);
  }, wt = (f) => (f >= 60 ? Math.floor(f / 60) + "h " : "") + f % 60 + "m";
  function Pe(f) {
    const b = le, { rise: y, set: C } = Ml(f, b), H = y && C ? Math.round((C.getTime() - y.getTime()) / gn) : 0, U = Math.floor(H / 60), $ = H % 60, fe = (Pt) => Pt ? Tn(Pt, f) : "–", ee = new Date(b);
    ee.setDate(ee.getDate() + 1);
    const be = Ml(f, ee), ye = be.rise && be.set ? Math.round((be.set.getTime() - be.rise.getTime()) / gn) : 0, Ae = new Date(b);
    Ae.setDate(Ae.getDate() - 1);
    const et = !!(y && C && b >= y && b <= C), We = !!(y && b < y), _e = et ? y : We ? Ml(f, Ae).set : C, tt = et ? C : We ? y : be.rise, ze = _e && tt ? Math.min(1, Math.max(0, (b.getTime() - _e.getTime()) / (tt.getTime() - _e.getTime()))) : 0, Ee = tt ? Math.max(0, Math.round((tt.getTime() - b.getTime()) / gn)) : 0, vt = tt ? wt(Ee) : "–", ot = et ? Re.untilSunset : Re.untilSunrise;
    return Wn({
      icon: Gt.sunny,
      name: Re.sun,
      sub: H ? Cn(Re.daylightShort, { hours: U, minutes: $ }) : void 0,
      cls: "wbSunTile",
      callouts: [[Re.callout.riseTomorrow, fe(be.rise)], [Re.callout.setTomorrow, fe(be.set)], ...ye ? [[Re.callout.dayTomorrow, Math.floor(ye / 60) + "h " + ye % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + xa(b, y, C) + '"><svg class="wbSunTrack" data-up="' + (et ? 1 : 0) + '" data-f="' + ze.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + Oe(vt) + '</span><span class="wbSunWord">' + Oe(ot) + '</span></div><span class="wbSunAt wbSunRise">' + Oe(fe(y)) + '</span><span class="wbSunAt wbSunSet">' + Oe(fe(C)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      uc(No(vt, ""))
    });
  }
  const Dt = 22;
  function Rt(f) {
    const b = Math.round(f.clientWidth), y = Math.round(f.clientHeight), C = Dt, H = C / 2, U = b + "x" + y + ":" + f.dataset.f + ":" + f.dataset.up;
    if (b < C * 3 || y < C * 3 || f.dataset.drawn === U) return;
    f.dataset.drawn = U;
    const $ = "M" + H + " " + (y - C) + "V" + C + "A" + H + " " + H + " 0 0 1 " + C + " " + H + "H" + (b - C) + "A" + H + " " + H + " 0 0 1 " + (b - H) + " " + C + "V" + (y - C), fe = "M" + (b - H) + " " + (y - C) + "A" + H + " " + H + " 0 0 1 " + (b - C) + " " + (y - H) + "H" + C + "A" + H + " " + H + " 0 0 1 " + H + " " + (y - C), ee = 16, be = 6, ye = "M" + ee + " 0H" + (b - ee) + "A" + ee + " " + ee + " 0 0 1 " + b + " " + ee + "V" + (y - ee) + "A" + ee + " " + ee + " 0 0 1 " + (b - ee) + " " + y + "H" + ee + "A" + ee + " " + ee + " 0 0 1 0 " + (y - ee) + "V" + ee + "A" + ee + " " + ee + " 0 0 1 " + ee + " 0ZM" + (C + be) + " " + C + "A" + be + " " + be + " 0 0 0 " + C + " " + (C + be) + "V" + (y - C - be) + "A" + be + " " + be + " 0 0 0 " + (C + be) + " " + (y - C) + "H" + (b - C - be) + "A" + be + " " + be + " 0 0 0 " + (b - C) + " " + (y - C - be) + "V" + (C + be) + "A" + be + " " + be + " 0 0 0 " + (b - C - be) + " " + C + "Z", Ae = f.dataset.up === "1", et = Number(f.dataset.f) || 0, We = "http://www.w3.org/2000/svg";
    f.setAttribute("viewBox", "0 0 " + b + " " + y);
    const _e = document.createElementNS(We, "path");
    _e.setAttribute("d", Ae ? $ : fe), f.replaceChildren(_e);
    const tt = _e.getTotalLength(), ze = _e.getPointAtLength(tt * et), Ee = Ae ? tt : 0;
    f.innerHTML = '<defs><mask id="' + I + 'sun-day"><path d="' + $ + '" fill="none" stroke="#fff" stroke-width="' + C * 2 + '"></path></mask><mask id="' + I + 'sun-done"><path d="' + $ + '" fill="none" stroke="#fff" stroke-width="' + C * 2 + '" stroke-dasharray="' + (Ae ? (Ee * et).toFixed(1) + " " + (Ee + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + ye + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + ye + '" mask="url(#' + I + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + ye + '" mask="url(#' + I + 'sun-done)"></path><circle class="wbSunDot' + (Ae ? "" : " wbSunNight") + '" cx="' + ze.x.toFixed(1) + '" cy="' + ze.y.toFixed(1) + '" r="' + H + '"></circle>';
  }
  const Ot = typeof ResizeObserver == "function" ? new ResizeObserver((f) => f.forEach((b) => Rt(b.target))) : null;
  function En() {
    Ot == null || Ot.disconnect(), M.querySelectorAll("svg.wbSunTrack").forEach((f) => {
      Rt(f), Ot == null || Ot.observe(f);
    });
  }
  function us(f, b, y) {
    const C = ($) => I + "moon-" + $, H = f > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + C("terminator") + ')" d="' + Km(61, 61, 57.9, f) + '"' + (b ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", U = ($, fe, ee, be, ye, Ae) => '<filter id="' + C($) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + fe + '" numOctaves="' + ee + '" seed="' + be + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((et) => "<feFunc" + et + ' type="linear" slope="' + ye + '" intercept="' + Ae + '"></feFunc' + et + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + C("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + C("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + C("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + C("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + C("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + U("mottle", "0.045", 4, 3, 1.8, -0.4) + U("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + C("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + C("fill") + ')"></circle><g' + (y ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + C("soften") + ')">' + Jm.map(([$, fe, ee, be, ye, Ae]) => '<ellipse cx="' + $ + '" cy="' + fe + '" rx="' + ee + '" ry="' + be + '" fill-opacity="' + Ae + '" transform="rotate(' + ye + " " + $ + " " + fe + ')"></ellipse>').join("") + "</g>" + Qm.map(([$, fe, ee]) => '<circle class="wbCrater" cx="' + $ + '" cy="' + fe + '" r="' + ee + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + C("glow") + ')">' + eg.map(([$, fe]) => '<line x1="54.4" y1="95" x2="' + $ + '" y2="' + fe + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + C("glow") + ')">' + gu.map(([$, fe, ee]) => '<circle cx="' + $ + '" cy="' + fe + '" r="' + ee * 2 + '"></circle>').join("") + "</g>" + gu.map(([$, fe, ee]) => '<circle class="wbBrightCenter" cx="' + $ + '" cy="' + fe + '" r="' + ee + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + C("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + C("grain") + ')"></rect>' + H + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function xr(f) {
    const b = qe, y = wd(f), C = (y == null ? void 0 : y.lat) ?? 0, H = dp(b), U = fu(f), $ = U ? f.states[U] : void 0, fe = zs($) && wm.includes($.state) ? $.state : qm(H.phase), { rise: ee, set: be } = y ? Om(b, y.lat, y.lon) : {}, ye = H.phase > 0.5 != C < 0, Ae = Ht(Math.round(H.fraction * 100), f.locale) + "%", et = ee ?? be;
    return et && Tn(et, f), Wn({
      icon: Gt.night,
      name: Re.moon,
      sub: Re.phases[fe],
      callouts: [...ee ? [[Re.callout.moonrise, Tn(ee, f)]] : [], ...be ? [[Re.callout.moonset, Tn(be, f)]] : [], [Re.callout.lit, Ae]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + us(H.fraction, ye, C < 0) + "</div>" + uc(No(Ht(Math.round(H.fraction * 100), f.locale), "%"))
    });
  }
  function Ra(f, b) {
    var _e;
    const y = Pa(f, b, "wind_speed");
    if (!y || !na(y.value)) return "";
    const C = Pa(f, b, "wind_gust_speed"), H = Pa(f, b, "wind_bearing"), U = H && na(H.value) ? Number(H.value) : void 0, $ = zm(Number(y.value), (_e = y.stateObj.attributes) == null ? void 0 : _e.wind_speed_unit), fe = kc(f, y.stateObj, "wind_speed", y.value), ee = U !== void 0 ? Re.cardinal[bm[((U + 11.25) / 22.5 | 0) % 16]] : void 0, be = C ? cu(f, C.stateObj, "wind_gust_speed", C.value) : void 0, ye = [ee ? Cn(Re.windFrom, { direction: ee }) : void 0, $ !== void 0 ? $ + " " + Re.beaufort : void 0].filter(Boolean).join(" · ") || be, Ae = (tt, ze) => {
      const Ee = (tt - 90) * Math.PI / 180;
      return [100 + ze * Math.cos(Ee), 100 + ze * Math.sin(Ee)];
    }, et = Array.from({ length: 36 }, (tt, ze) => ze * 10).map((tt) => {
      const ze = tt % 90 === 0, [Ee, vt] = Ae(tt, 97), [ot, Pt] = Ae(tt, ze ? 83 : 89);
      return '<line class="wbTick' + (ze ? " wbMajor" : "") + '" x1="' + Ee + '" y1="' + vt + '" x2="' + ot + '" y2="' + Pt + '"></line>';
    }).join(""), We = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([tt, ze]) => {
      const [Ee, vt] = Ae(ze, 64);
      return '<text class="wbLetter' + (tt === "n" ? " wbNorth" : "") + '" x="' + Ee + '" y="' + vt + '">' + Oe(Re.cardinal[tt]) + "</text>";
    }).join("");
    return Wn({ icon: Gt.windy, name: Re.wind, sub: ye, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + et + We + (U !== void 0 ? '<path class="wbMarker" transform="rotate(' + U + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Oe(fe.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Oe(fe.unit) + "</text></svg>" });
  }
  const bo = (f, b) => {
    if (f < 3) return Re.advice.fine;
    if (f < 8) return Re.advice.sunblock;
    const y = Date.now(), C = B("hourly").find((H) => H.uv_index != null && new Date(H.datetime).getTime() > y && H.uv_index < 6);
    return C && new Date(C.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Cn(Re.advice.avoidUntil, { time: Tn(new Date(C.datetime), b) }) : Re.advice.avoidToday;
  };
  function yr(f, b) {
    const y = Pa(f, b, "uv_index");
    if (!y || !na(y.value)) return "";
    const C = Number(y.value), H = Re.uvLevel[pu(C)], U = /* @__PURE__ */ new Date();
    U.setHours(23, 59, 59, 999);
    const $ = B("hourly").filter((ye) => ye.uv_index != null && new Date(ye.datetime) > /* @__PURE__ */ new Date() && new Date(ye.datetime) <= U).reduce((ye, Ae) => !ye || Ae.uv_index > ye.uv ? { uv: Ae.uv_index, time: new Date(Ae.datetime) } : ye, void 0), fe = xm[pu(C)], ee = 216 * Math.min(1, Math.max(0.08, 0.4 + (C - 4.5) * (0.5 / 5.5))), be = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + I + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + ee.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + fe + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + fe + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + fe + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + ee.toFixed(1) + '" fill="url(#' + I + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + Oe(Ht(Math.round(C), f.locale)) + '</span><span class="wbUvWord">' + Oe(H) + "</span></div>" + uc(No(Ht(Math.round(C), f.locale), ""));
    return Wn({
      icon: Gt.sunnyAlert,
      name: Re.metrics.uv_index,
      sub: $ && $.uv > C ? Cn(Re.uvPeak, { level: H, uv_index: Ht(Math.round($.uv), f.locale), time: Tn($.time, f) }) : H,
      zone: be,
      cls: "wbUv",
      callouts: [bo(C, f), [Re.callout.now, Ht(Math.round(C), f.locale) + " · " + H], [Re.callout.peak, $ && $.uv > C ? Ht(Math.round($.uv), f.locale) + " at " + Tn($.time, f) : Re.callout.now]]
    });
  }
  function fs(f) {
    const b = B("daily")[0], y = Ce.temperatureHistory;
    if (!b || new Date(b.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !na(b.temperature) || !y || y.dailyHighs.length < fm) return "";
    const C = Number(b.temperature), H = y.dailyHighs.reduce((ze, Ee) => ze + Ee, 0) / y.dailyHighs.length, U = Math.round(C - H) || 0, $ = U > 0 ? "above" : U < 0 ? "below" : "same", fe = [...y.days, { date: /* @__PURE__ */ new Date(), high: C, today: !0 }], ee = fe.map((ze) => ze.high).concat(H), be = Math.min(...ee) - 1, ye = Math.max(...ee) + 1, Ae = (ze) => (1 - (ze - be) / (ye - be)) * 100, et = (ze) => (ze + 0.5) / fe.length * 100, We = fe.map((ze, Ee) => [et(Ee), Ae(ze.high)]), _e = We.map(([ze, Ee], vt) => (vt ? "L" : "M") + ze.toFixed(2) + " " + Ee.toFixed(2)).join(""), tt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + I + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + _e + "L" + We[We.length - 1][0].toFixed(2) + " 100L" + We[0][0].toFixed(2) + ' 100Z" fill="url(#' + I + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + Ae(H).toFixed(2) + '" y2="' + Ae(H).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + _e + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + Ae(H).toFixed(2) + '%">' + Oe(fa(f, H)) + "</span>" + fe.map((ze, Ee) => {
      const vt = ze.today ? " wbToday" : "", ot = "left:" + et(Ee).toFixed(2) + "%;top:" + Ae(ze.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + vt + '" style="' + ot + '"></i><span class="wbAvgValue' + vt + '" style="' + ot + '">' + Oe(fa(f, ze.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + fe.map((ze, Ee) => '<span class="wbAvgDay' + (ze.today ? " wbToday" : "") + '" style="left:' + et(Ee).toFixed(2) + '%">' + Oe(Em(ze.date, f)) + "</span>").join("") + "</div></div>";
    return Wn({
      icon: Gt.chartLine,
      name: Re.metrics.compared_to_average,
      double: !0,
      sub: Cn(Re.highsLastDays, { days: y.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (U > 0 ? "+" : "") + Oe(fa(f, U)) + '</div><div class="wbCompareWords">' + Oe(Re.average[$]) + '</div><div class="wbCompareTemps">' + Oe(Cn(Re.todayVsAverage, { today: fa(f, C), average: fa(f, H) })) + "</div></div>" + tt + "</div>"
    });
  }
  function wo(f, b) {
    const y = Pa(f, b, "humidity");
    if (!y || !na(y.value)) return "";
    const C = Pa(f, b, "dew_point"), H = Math.max(0, Math.min(100, Number(y.value)));
    return Wn({
      icon: Gt.waterPercent,
      name: Re.metrics.humidity,
      sub: C && na(C.value) ? Cn(Re.dewPoint, { dew_point: fa(f, C.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + H + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + No(Ht(Math.round(Number(y.value)), f.locale), "%") + "</div>"
    });
  }
  function Gs(f, b) {
    var ze, Ee, vt;
    const y = Pa(f, b, "pressure");
    if (!y || !na(y.value)) return "";
    const C = Number(y.value), H = (ze = y.stateObj.attributes) == null ? void 0 : ze.pressure_unit, U = uu(C, H), $ = ((Ee = Ce.pressureHistory) == null ? void 0 : Ee.entityId) === y.stateObj.entity_id ? uu(Ce.pressureHistory.value, H) : void 0;
    let fe;
    if (U !== void 0 && $ !== void 0) {
      const ot = U - $;
      fe = ot >= au ? "rising" : ot <= -au ? "falling" : "steady";
    }
    const ee = kc(f, y.stateObj, "pressure", Math.round(C)), be = y.stateObj, ye = (ot) => H === "inHg" ? Math.round(ot * 100) / 100 : Math.round(ot), Ae = (ot) => cu(f, be, "pressure", ye(ot)), et = $ !== void 0 ? Ce.pressureHistory.value : void 0, We = et !== void 0 ? ye(C - et) : void 0, _e = (vt = be.entity_id) != null && vt.startsWith("weather.") ? B("hourly").find((ot) => na(ot.pressure) && new Date(ot.datetime).getTime() >= Date.now() + 3 * zt - 30 * gn) : void 0, tt = [
      ...fe ? [Re.advice[fe]] : [],
      ...et !== void 0 ? [[Re.callout.hoursAgo, Ae(et)], [Re.callout.change, (We > 0 ? "+" : We < 0 ? "−" : "") + Ae(Math.abs(We))]] : [],
      ..._e ? [[Re.callout.inHours, Ae(Number(_e.pressure))]] : []
    ];
    return Wn({
      icon: Gt.gauge,
      name: Re.metrics.pressure,
      sub: fe ? Re.pressure[fe] : void 0,
      cls: "wbPressure",
      callouts: tt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + No(ee.number) + '<span class="wbTapeUnit">' + Oe(ee.unit) + "</span></div>" + (U !== void 0 ? Ii(f, U) : "") + "</div>"
    });
  }
  function Ii(f, b) {
    const H = Math.floor(b) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (U, $) => H + $).map((U) => {
      const $ = 100 - (U - b) * 9;
      if ($ < 22 || $ > 178) return "";
      const fe = U % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs($ - 100) / 100) + '"><line class="wbTapeTick" x1="' + (fe ? 2 : 8) + '" x2="26" y1="' + $ + '" y2="' + $ + '"></line>' + (fe ? '<text class="wbTapeLabel" x="33" y="' + $ + '">' + Oe(Ht(U, f.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Oe(Re.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Oe(Re.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function xo(f) {
    var ee, be;
    const b = cp(f), y = b ? f.states[b] : void 0;
    if (!y || ((ee = Ce.rain) == null ? void 0 : ee.entityId) !== b || !na(Ce.rain.change)) return "";
    const C = ((be = y.attributes) == null ? void 0 : be.unit_of_measurement) ?? "", H = q(f, "hourly"), U = Date.now() + to, $ = B("hourly").filter((ye) => ye.precipitation != null && new Date(ye.datetime).getTime() <= U), fe = $.reduce((ye, Ae) => ye + Number(Ae.precipitation), 0);
    return Wn({
      icon: Gt.rainy,
      name: Re.metrics.precipitation,
      sub: H && $.length ? Cn(Re.rainExpected, { amount: Ht(fe, f.locale, { maximumFractionDigits: 1 }) + " " + rs(f, H, "precipitation") }) : Re.rainLast24h,
      visual: No(Ht(Ce.rain.change, f.locale, { maximumFractionDigits: 1 }), C) + ($.length > 1 ? Xm($.map((ye) => ({ label: "", value: Number(ye.precipitation) }))) : "")
    });
  }
  function Fi(f, b) {
    const y = Pa(f, b, "visibility");
    if (!y || !na(y.value)) return "";
    const C = kc(f, y.stateObj, "visibility", y.value), H = zh(Number(y.value), rs(f, y.stateObj, "visibility"));
    return Wn({
      icon: Gt.eyeOutline,
      name: Re.metrics.visibility,
      sub: Re.visibilityLevel[Gh(H)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + H + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Oe(Oi(f, H)) + '</div><div class="wbSeaValue">' + No(C.number, C.unit) + "</div></div>"
    });
  }
  function Oi(f, b) {
    var U;
    const y = jh((U = f.config) == null ? void 0 : U.country, b);
    if (y) return Cn(Re.visibilityLandmarks, { from: y.from, to: y.to });
    const C = b / gm * 60;
    if (C < 60) {
      const $ = C < 5 ? Math.max(1, Math.round(C)) : 5 * Math.round(C / 5);
      if ($ < 60) return Cn(Re.walkMinutes, { minutes: Ht($, f.locale) });
    }
    const H = Math.max(1, Math.round(C / 30) / 2);
    return H < 8 ? Cn(Re.walkHours, { hours: Ht(H, f.locale) }) : Re.walkDay;
  }
  function kr(f) {
    Ce.categories === void 0 && mo(f);
    const b = go(f), y = (ee) => ee.map((be) => f.states[be]).filter(zs), C = y(b.air), H = y(b.pollen);
    if (!C.length && !H.length) return "";
    const U = [...C, ...H], $ = (ee) => H.includes(ee) ? Gt.flower : Gt.airFilter, fe = U.find((ee) => ee.entity_id === E.aq);
    return fe ? Al(f, fe, $(fe)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Oe(Re.airQuality) + '</h2></div><div class="wbAqTiles">' + U.map((ee) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Oe(ee.entity_id) + '"><span class="wbChip">' + gr($(ee)) + '</span><span class="wbText"><span class="wbName">' + Oe(os(f, ee)) + '</span><span class="wbSub">' + Oe(hr(f, ee)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Al(f, b, y) {
    var ye, Ae, et;
    const C = ((ye = b.attributes) == null ? void 0 : ye.unit_of_measurement) ?? "", H = ((Ae = b.attributes) == null ? void 0 : Ae.device_class) === "pm25" && C === ou && na(b.state), U = Number(b.state), $ = H ? pc(U) : void 0, fe = ((et = Ce.aqHistory) == null ? void 0 : et.entityId) === b.entity_id ? Ce.aqHistory.points : void 0, ee = (We) => Math.min(100, Math.max(0, We / cc * 100));
    let be;
    if (fe && fe.length > 1) be = mu(fe, (We) => (Ht(We, f.locale, { maximumFractionDigits: 1 }) + " " + C).trim());
    else if ($) {
      let We = 0;
      const _e = cf.map(([tt, ze]) => {
        const Ee = ee(Math.min(ze, cc)), vt = nu[tt] + " " + We + "% " + Ee + "%";
        return We = Ee, vt;
      });
      be = '<div class="wbScale" role="meter" aria-label="' + Oe(Re.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + cc + '" aria-valuenow="' + U + '" style="background:linear-gradient(to right, ' + _e.join(", ") + ')"><i style="left:' + ee(U) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + cc + " " + ou + "</span></div>";
    } else be = '<span class="wbGraphNote"><span>' + Oe(hr(f, b)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + gr(y) + '</span><span class="wbText"><span class="wbName">' + Oe(os(f, b)) + '</span><span class="wbSub">' + Oe(hr(f, b)) + ($ ? " · " + Oe(Re.aqLevel[$]) : "") + '</span></span><button class="wbBack" title="' + Oe(Re.back) + '" data-wb="aq-close">' + gr(Gt.back) + '</button></div><div class="wbGraph">' + be + "</div></div></div>";
  }
  const Ut = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Dn = (f) => f <= 50 ? "Good" : f <= 100 ? "Moderate" : f <= 150 ? "Unhealthy for some" : f <= 200 ? "Unhealthy" : f <= 300 ? "Very unhealthy" : "Hazardous";
  function Fo(f) {
    const b = /* @__PURE__ */ new Map();
    return Object.values(f.states || {}).filter((y) => {
      var C;
      return y.entity_id.startsWith("sensor.") && Cc.includes(((C = y.attributes) == null ? void 0 : C.device_class) ?? "") && zs(y) && Cl(f, y.entity_id);
    }).sort((y, C) => y.entity_id.localeCompare(C.entity_id)).forEach((y) => {
      b.has(y.attributes.device_class) || b.set(y.attributes.device_class, y);
    }), Cc.map((y) => b.get(y)).filter(Boolean);
  }
  const di = (f) => Object.values(f.states || {}).filter((b) => {
    var y, C;
    return b.entity_id.startsWith("sensor.") && zs(b) && Cl(f, b.entity_id) && (((C = (y = f.entities) == null ? void 0 : y[b.entity_id]) == null ? void 0 : C.translation_key) ?? b.entity_id).toLowerCase().includes("pollen");
  }), Oa = ["none", "very_low", "low", "moderate", "high", "very_high"], ya = (f) => na(f.state) ? Number(f.state) : Oa.indexOf(String(f.state).toLowerCase().replace(/ /g, "_")), ha = (f) => {
    const b = String(f).replace(/_/g, " ");
    return b[0].toUpperCase() + b.slice(1);
  }, Us = (f, b, y) => {
    const C = y ? f === "aqi" ? b <= 50 ? "good" : b <= 100 ? "moderate" : "poor" : f === "pm25" ? pc(b) : null : null;
    return C === "good" || C === "fair" ? Re.advice.window : C === "moderate" || C === null ? Re.advice.fine : Re.advice.closed;
  }, $n = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], ci = (f) => $n[f <= 50 ? 0 : f <= 100 ? 1 : f <= 150 ? 2 : f <= 200 ? 3 : f <= 300 ? 4 : 5], Oo = "M43 43q1 8 0 10M77 42q1 8 -1 10", Yt = {
    good: [Oo, "M34 69Q61 98 86 67"],
    fair: [Oo, "M40 74Q61 89 81 72"],
    moderate: [Oo, "M41 79Q60 76 80 81"],
    poor: [Oo, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, pi = (f) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Yt[f][0] + '"></path><path d="' + Yt[f][1] + '"></path></svg>';
  function no(f) {
    const b = Fo(f), y = b[0];
    if (!y) return Wn({ icon: Gt.airFilter, name: Re.airQuality, sub: Re.noAir, visual: No("–", ""), cls: "wbBase" });
    const C = y.attributes.device_class, H = Number(y.state), U = na(y.state), $ = C === "aqi" && U ? Dn(H) : C === "pm25" && U ? Ut[pc(H)] : hr(f, y), fe = U ? Ht(Math.round(H), f.locale) : String(y.state), ee = C === "aqi" ? "AQI" : y.attributes.unit_of_measurement || "", be = U && C === "aqi" ? ci(H) : U && C === "pm25" ? pc(H) : null;
    return Wn(be ? {
      icon: Gt.airFilter,
      name: Re.airQuality,
      sub: $,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + nu[be] + '">' + pi(be) + '<div class="wbAqBig"><span class="wbAqNum">' + Oe(fe) + "</span>" + (ee ? '<span class="wbAqUnit">' + Oe(ee) + "</span>" : "") + "</div></div>" + uc(No(fe, ee)),
      callouts: [Us(C, H, U), ...b.slice(1, 3).map((ye) => [os(f, ye), hr(f, ye)])]
    } : {
      icon: Gt.airFilter,
      name: Re.airQuality,
      sub: $,
      cls: "wbBase",
      zone: No(fe, ee),
      callouts: [Us(C, H, U), ...b.slice(1, 3).map((ye) => [os(f, ye), hr(f, ye)])]
    });
  }
  const Mr = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], qi = (f) => {
    const b = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(f) ? Math.round(f) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: b }, (y, C) => {
      const [H, U] = Mr[C % 3], $ = 10 + C * 7 % 9, fe = 2.6 + C * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + H + '" style="top:' + (4 + C * 37 % 52) + "%;--x:" + (C * 29 % 90 + 4) + "%;--s:" + (0.8 + C * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + $ + "s;animation-delay:-" + (C * 2.3 % $).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + fe.toFixed(1) + "s;animation-delay:-" + (C * 0.7 % fe).toFixed(1) + 's">' + U + "</span></span></span>";
    }).join("") + "</div>";
  };
  function Wi(f) {
    const b = di(f).sort((H, U) => ya(U) - ya(H));
    if (!b.length) return Wn({ icon: Gt.flower, name: Re.pollen, sub: Re.noPollen, visual: No("–", ""), cls: "wbBase" });
    const y = b[0], C = (H) => na(H.state) ? hr(f, H) : ha(H.state);
    return Wn({
      icon: Gt.flower,
      name: Re.pollen,
      sub: os(f, y) + " · " + C(y),
      cls: "wbBase wbPollen",
      zone: qi(ya(y)) + No(C(y), ""),
      callouts: b.slice(0, 3).map((H) => [os(f, H), C(H)])
    });
  }
  function Ys(f) {
    const b = Date.now(), y = B("hourly").filter((U) => {
      const $ = new Date(U.datetime).getTime();
      return $ > b - zt && $ < b + 12 * zt;
    }), C = y.find((U) => (U.precipitation_probability ?? 0) >= 50 || (U.precipitation ?? 0) >= 0.2), H = C ? Cn(Re.rainFrom, { time: Tn(new Date(Math.max(b, new Date(C.datetime).getTime())), f) }) : y.length ? Re.noRain12 : void 0;
    return Wn({ icon: Gt.radar, name: Re.rainRadar, sub: H, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const Zs = {
    current: ao,
    hourly: nt,
    sun: Pe,
    moon: xr,
    wind: Ra,
    uv_index: yr,
    compared_to_average: fs,
    humidity: wo,
    pressure: Gs,
    precipitation: xo,
    visibility: Fi,
    air_quality: kr,
    aq_tile: no,
    pollen_tile: Wi,
    radar_tile: Ys
  }, qo = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], Wo = (f, b) => {
    var y;
    return b.toLocaleDateString((y = f.locale) == null ? void 0 : y.language, { day: "numeric", month: "short" });
  }, Sr = (f) => {
    const b = new Date(f);
    return b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b.toISOString().slice(0, 10);
  }, ui = () => {
    const f = E.range, b = Date.now();
    if (f.preset !== "custom") {
      const H = qo.find(([U]) => U === f.preset)[2];
      return [b - H * to, b];
    }
    const y = ls(/* @__PURE__ */ new Date(f.from + "T00:00")).getTime(), C = Math.min(b, ls(/* @__PURE__ */ new Date(f.to + "T00:00")).getTime() + to);
    return [Math.min(y, C - zt), C];
  }, la = (f) => {
    const b = E.range;
    if (b.preset !== "custom") return qo.find(([H]) => H === b.preset)[1];
    const [y, C] = ui();
    return b.from === b.to ? Wo(f, new Date(y)) : Wo(f, new Date(y)) + " – " + Wo(f, new Date(C - 1));
  }, bn = () => E.range.preset === "custom" ? E.range.from + "_" + E.range.to : E.range.preset, Lt = (f, b) => b - f <= 2 * to, Vi = (f, b, y, C) => Lt(y, C) ? Tn(b, f) : Wo(f, b), Vo = (f, b = 60) => {
    const y = Math.max(1, Math.ceil(f.length / b));
    return f.filter((C, H) => H % y === 0 || H === f.length - 1);
  }, ji = (f, b, y, C, H = !1) => f.callWS({
    type: "history/history_during_period",
    start_time: new Date(y).toISOString(),
    end_time: new Date(C).toISOString(),
    entity_ids: [b],
    minimal_response: H,
    no_attributes: H,
    significant_changes_only: !1
  }), tn = (f) => async (b, y, C, H) => {
    const U = Pa(b, y, f);
    if (!U) return [];
    const $ = U.stateObj.entity_id, fe = await ji(b, $, C, H);
    return Vo(((fe == null ? void 0 : fe[$]) ?? []).map((ee) => {
      var Ae;
      const be = ((Ae = ee.a) == null ? void 0 : Ae[f]) ?? (na(ee.s) ? Number(ee.s) : void 0), ye = (ee.lu ?? ee.lc) * 1e3;
      return typeof be == "number" && ye >= C && ye <= H ? { t: new Date(ye), value: be } : null;
    }).filter(Boolean)).map((ee) => ({ label: Vi(b, ee.t, C, H), value: ee.value }));
  }, jo = (f, b) => async (y, C, H, U) => {
    const $ = f(y);
    if (!$) return [];
    const fe = $.entity_id, ee = await ji(y, fe, H, U, !0);
    return Vo(((ee == null ? void 0 : ee[fe]) ?? []).map((be) => {
      const ye = b(be.s), Ae = be.lu * 1e3;
      return ye == null || !Number.isFinite(ye) || Ae < H || Ae > U ? null : { t: new Date(Ae), value: ye };
    }).filter(Boolean)).map((be) => ({ label: Vi(y, be.t, H, U), value: be.value }));
  }, hs = (f, b) => async (y, C, H, U) => {
    const $ = wd(y);
    if (!$) return [];
    const fe = [];
    if (Lt(H, U)) for (let ee = H; ee <= U; ee += zt / 2) fe.push({ label: Tn(new Date(ee), y), value: f(new Date(ee), $) });
    else for (let ee = U; ee >= H; ee -= to) {
      const be = new Date(ee), ye = b(be, $, y);
      ye != null && fe.unshift({ label: Wo(y, be), value: ye });
    }
    return Vo(fe);
  }, _n = (f) => di(f).sort((b, y) => ya(y) - ya(b))[0], yo = (f, b, y) => {
    const C = Pa(f, b, y);
    return C ? rs(f, C.stateObj, y) : "";
  }, Xt = {
    current: { name: () => Re.modes.temperature, icon: () => Gt.sunny, load: tn("temperature"), fmt: (f, b, y) => fa(f, y), now: (f, b) => {
      var y;
      return fa(f, (y = Pa(f, b, "temperature")) == null ? void 0 : y.value);
    } },
    sun: {
      name: () => Re.sun,
      icon: () => Gt.sunny,
      load: hs((f, b) => Math.round(Lc(f, b.lat, b.lon) / Un), (f, b, y) => {
        const C = Ml(y, f);
        return C.rise && C.set ? Math.round((C.set - C.rise) / zt * 10) / 10 : null;
      }),
      fmt: (f, b, y, C) => C ? Ht(y, f.locale) + "°" : Ht(y, f.locale) + " h",
      sub: (f) => f ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => Re.moon,
      icon: () => Gt.night,
      load: hs((f) => Math.round(dp(f).fraction * 100), (f) => Math.round(dp(f).fraction * 100)),
      fmt: (f, b, y) => Ht(y, f.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => Re.metrics.uv_index, icon: () => Gt.sunnyAlert, load: tn("uv_index"), fmt: (f, b, y) => Ht(Math.round(y * 10) / 10, f.locale), now: (f, b) => {
      const y = Pa(f, b, "uv_index");
      return y ? Ht(Number(y.value), f.locale) : "";
    } },
    humidity: { name: () => Re.metrics.humidity, icon: () => Gt.waterPercent, load: tn("humidity"), fmt: (f, b, y) => Ht(Math.round(y), f.locale) + "%", now: (f, b) => {
      const y = Pa(f, b, "humidity");
      return y ? Ht(Math.round(Number(y.value)), f.locale) + "%" : "";
    } },
    pressure: { name: () => Re.metrics.pressure, icon: () => Gt.gauge, load: tn("pressure"), fmt: (f, b, y) => Ht(Math.round(y), f.locale) + " " + yo(f, b, "pressure"), now: (f, b) => {
      const y = Pa(f, b, "pressure");
      return y ? Ht(Math.round(Number(y.value)), f.locale) + " " + yo(f, b, "pressure") : "";
    } },
    wind: { name: () => Re.wind, icon: () => Gt.windy, load: tn("wind_speed"), fmt: (f, b, y) => Ht(Math.round(y), f.locale) + " " + yo(f, b, "wind_speed"), now: (f, b) => {
      const y = Pa(f, b, "wind_speed");
      return y ? Ht(Math.round(Number(y.value)), f.locale) + " " + yo(f, b, "wind_speed") : "";
    } },
    visibility: { name: () => Re.metrics.visibility, icon: () => Gt.eyeOutline, load: tn("visibility"), fmt: (f, b, y) => Ht(Math.round(y * 10) / 10, f.locale) + " " + yo(f, b, "visibility"), now: (f, b) => {
      const y = Pa(f, b, "visibility");
      return y ? Ht(Number(y.value), f.locale) + " " + yo(f, b, "visibility") : "";
    } },
    aq_tile: {
      name: (f) => Fo(f)[0] ? os(f, Fo(f)[0]) : Re.airQuality,
      icon: () => Gt.airFilter,
      load: jo((f) => Fo(f)[0], (f) => na(f) ? Number(f) : null),
      fmt: (f, b, y) => {
        var U, $;
        const C = Fo(f)[0], H = (U = C == null ? void 0 : C.attributes) == null ? void 0 : U.device_class;
        return Ht(Math.round(y * 10) / 10, f.locale) + (H === "aqi" ? " AQI" : ($ = C == null ? void 0 : C.attributes) != null && $.unit_of_measurement ? " " + C.attributes.unit_of_measurement : "");
      },
      now: (f) => {
        const b = Fo(f)[0];
        return b ? hr(f, b) : "";
      }
    },
    pollen_tile: {
      name: (f) => _n(f) ? os(f, _n(f)) : Re.pollen,
      icon: () => Gt.flower,
      load: jo(_n, (f) => {
        const b = ya({ state: f });
        return b < 0 ? null : b;
      }),
      fmt: (f, b, y) => ha(Oa[Math.round(y)] || ""),
      now: (f) => {
        const b = _n(f);
        return b ? ha(b.state) : "";
      }
    }
  }, Xn = {};
  let Ta = null;
  async function zi(f) {
    var $;
    const b = l == null ? void 0 : l();
    if (!b || !Xt[f]) return;
    const y = f + "|" + bn(), [C, H] = ui();
    if (Xn[y] && Date.now() - Xn[y].at < 5 * gn) return;
    Xn[y] = { at: Date.now(), points: null };
    try {
      Xn[y].points = await Xt[f].load(b, Zn(b), C, H);
    } catch {
      Xn[y].points = [];
    }
    La(!0), Ta === f && E.graph === f && (Ta = null, Jp(ae[f].el.querySelector(".wbGraphCard")));
    const U = E.graph === f && (($ = ae[f]) == null ? void 0 : $.el.querySelector(".wbGraph .wbChart"));
    U && lf(U, U.querySelector(".wbLine"), U.querySelectorAll(".wbArea"));
  }
  function zo(f, b) {
    const y = E.range, C = Sr(Date.now()), [H, U] = ui(), $ = y.pickFrom || Sr(H), fe = y.pickTo || Sr(U - 1);
    return '<div class="wbRangePick' + (b ? " wbPickRight" : "") + '" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + qo.map(([ee, be]) => '<button class="wbRangePreset" aria-pressed="' + (y.preset === ee) + '" data-wb="graph-preset" data-range="' + ee + '" data-wb-focus="graph-preset-' + ee + '">' + Oe(be) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + $ + '" max="' + C + '"></label><label><span>To</span><input type="date" data-range-to value="' + fe + '" max="' + C + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function ms(f, b, y) {
    var et;
    const C = Xt[y], [H, U] = ui(), $ = Lt(H, U), fe = (et = Xn[y + "|" + bn()]) == null ? void 0 : et.points, ee = ae[y].el, be = Math.max(120, ee.clientWidth - 2 * 18 - 32), ye = Math.max(40, ee.clientHeight - 2 * 18 - 44 - 14 - 32 - 14 - 24), Ae = fe ? fe.length > 1 ? mu(fe, (We) => C.fmt(f, b, We, $), ye, be) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbCard wbSquare wbGraphCard"><div class="wbHead"><div class="wbChip wbPlain">' + pf(C.icon(f)) + '</div><div class="wbText"><span class="wbName">' + Oe(C.name(f)) + '</span><span class="wbSub">' + Oe(C.sub ? C.sub($) : C.now ? C.now(f, b) : "") + '</span></div><button class="wbBack" title="' + Oe(Re.back) + '" data-wb="graph-close" data-wb-focus="graph-close">' + gr(Gt.back) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!E.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + gr(Gt.calendar) + "<span>" + Oe(la(f)) + "</span>" + gr(Gt.chevronDown) + '</button><div class="wbGraph">' + Ae + "</div></div>" + (E.picking ? zo(f, ee.getBoundingClientRect().left > innerWidth / 2) : "");
  }
  function La(f) {
    var Ae, et, We;
    const b = l == null ? void 0 : l();
    if (!b || J) return;
    const y = Zn(b);
    ue(b, y), Ce.lastFetch || at();
    const C = go(b), H = fu(b), U = cp(b), $ = [
      ...y.map((_e) => b.states[_e]),
      b.states["sun.sun"],
      H && b.states[H],
      U && b.states[U],
      ...C.air.map((_e) => b.states[_e]),
      ...C.pollen.map((_e) => b.states[_e]),
      ...V.some((_e) => F.includes(_e)) ? [...Fo(b), ...di(b)] : [],
      b.locale,
      b.config,
      b.entities,
      Math.floor(Date.now() / gn)
    ];
    if (!f && G && $.length === G.length && $.every((_e, tt) => _e === G[tt])) return;
    G = $;
    const fe = M.getRootNode(), ee = fe.activeElement || document.activeElement;
    for (const _e of V) {
      const tt = ae[_e];
      let ze = "";
      try {
        ze = (E.graph === _e ? ms(b, y, _e) : Zs[_e](b, y)) || "";
      } catch {
        ze = "";
      }
      if (ze === tt.html) continue;
      const Ee = ee && tt.el.contains(ee) ? (Ae = ee.dataset) == null ? void 0 : Ae.wbFocus : void 0, vt = tt.el.querySelector(".wbStripScroll"), ot = vt ? vt.scrollLeft : null;
      tt.html = ze, tt.el.hidden = !ze, tt.el.innerHTML = ze;
      const Pt = tt.el.querySelector(".wbStripScroll");
      Pt && ot != null ? Pt.scrollTo({ left: ot }) : Pt != null && Pt.dataset.start && Pt.scrollTo({ left: Number(Pt.dataset.start) * Pt.clientWidth / Number(Pt.dataset.span) }), Ee && !ie && ((et = tt.el.querySelector('[data-wb-focus="' + Ee + '"]')) == null || et.focus());
    }
    En(), ie && ((We = M.querySelector('[data-wb-focus="' + ie + '"]')) == null || We.focus({ preventScroll: !0 }), ie = null);
    let be = !1, ye = !1;
    for (const _e of V) {
      const tt = ae[_e], ze = !tt.el.hidden, Ee = z[_e] === "wide" || pe.includes(_e), vt = V.indexOf(_e) >= V.indexOf("moon"), ot = ze && (vt && Ee && !be || !Ee && !ye);
      ot && Ee && (be = !0), ot && !Ee && (ye = !0), tt.el.toggleAttribute("data-break", ot);
    }
    Tr(performance.now());
  }
  function Go() {
    ke || J || (ke = !0, queueMicrotask(() => {
      ke = !1, La(!0);
    }));
  }
  function oo() {
    const f = getComputedStyle(M), b = ($) => f.getPropertyValue($).trim(), y = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([$, fe]) => {
      b(fe) && (y[$] = b(fe));
    });
    const C = b("--color-text-primary") || "#f1f1f1", H = b("--color-bg-card") || "#222222", U = !!M.closest(".light");
    return { colors: { ...Yn, ...y }, ink: U ? C : H, paper: U ? H : C };
  }
  const fi = (f, b) => {
    var y;
    f.width !== b.w && (f.width = b.w), f.height !== b.h && (f.height = b.h), (y = f.getContext("2d")) == null || y.putImageData(new ImageData(b.data, b.w, b.h), 0, 0);
  }, Uo = () => v && !Tm();
  function Cr(f, b) {
    M.querySelectorAll("canvas[data-wb-strip]").forEach((y) => El(y, re[y.dataset.wbStrip], f, b));
  }
  function El(f, b, y, C) {
    if (!b || !f.getClientRects().length) return;
    const H = f.clientWidth, U = f.clientHeight;
    if (!H || !U) return;
    const $ = { width: H, height: U, columns: b.columns || Qp, colors: C.colors, clock: y, ambient: Uo(), seed: b.seed, soft: 1.5 };
    if (u === "smooth") {
      const fe = Math.min(2, window.devicePixelRatio || 1), ee = Math.round(H * fe), be = Math.round(U * fe);
      f.width !== ee && (f.width = ee), f.height !== be && (f.height = be);
      const ye = f.getContext("2d");
      if (!ye) return;
      ye.setTransform(fe, 0, 0, fe, 0, 0), Ch(ye, b.segs, $);
    } else fi(f, Sh(b.segs, { ...$, px: 2, oneBit: u === "onebit", ink: C.ink, paper: C.paper }));
  }
  function Tr(f) {
    if (J) return;
    const b = oo();
    if (u !== "smooth") {
      const y = Uo();
      M.querySelectorAll("canvas[data-wb-wx]").forEach((C) => {
        C.getClientRects().length && fi(C, zu(kp(C.dataset.wbWx, b.colors), { size: Number(C.dataset.size) || 40, px: 2, oneBit: u === "onebit", colors: b.colors, ink: b.ink, paper: b.paper, clock: f, idle: y }));
      });
    }
    M.querySelectorAll("canvas[data-wb-sea]").forEach((y) => {
      const C = y.clientWidth, H = y.clientHeight, U = Number(y.dataset.wbSea), $ = C + "x" + H + ":" + U + ":" + b.colors.skyClearDay;
      !C || !H || !(U > 0) || y.dataset.painted === $ || (y.dataset.painted = $, fi(y, qh(C, H, U, b.colors)));
    }), Cr(f, b);
  }
  function gs(f) {
    if (he = 0, !(J || !Uo())) {
      if (!document.hidden)
        if (u === "smooth") Cr(f, oo());
        else {
          const b = Math.floor(f / 100);
          b !== ce && (ce = b, Tr(f));
        }
      he = requestAnimationFrame(gs);
    }
  }
  function ko() {
    M.classList.toggle("wbMotion", Uo()), !he && !J && Uo() && (he = requestAnimationFrame(gs));
  }
  function Ks(f) {
    var y, C, H, U, $, fe, ee;
    const b = (C = (y = f.target).closest) == null ? void 0 : C.call(y, "[data-wb]");
    if (!b || !M.contains(b)) {
      const be = (U = (H = f.target).closest) == null ? void 0 : U.call(H, ".wbItem"), ye = be == null ? void 0 : be.dataset.card;
      if (!be || !M.contains(be) || !Xt[ye] || E.graph === ye || M.closest(".tfEditing") || be.offsetHeight < 200 || ye === "current" && k) return;
      E.graph = ye, ie = "graph-close", La(!0), ($ = Xn[ye + "|" + bn()]) != null && $.points ? Jp(ae[ye].el.querySelector(".wbGraphCard")) : Ta = ye, zi(ye);
      return;
    }
    switch (b.dataset.wb) {
      case "day": {
        E.openDay = Number(b.dataset.index), E.opener = b.dataset.wbFocus, ie = "back-day";
        const be = Xe()[E.openDay], ye = !Ce.todayHistory || Ce.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Ce.todayHistory.fetched > im;
        be && kl(new Date(be.datetime), /* @__PURE__ */ new Date()) && ye && Ya();
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
        E.aq = b.dataset.entity, Ne(E.aq);
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
        E.range = { preset: b.dataset.range }, E.picking = !1, ie = "graph-pick", La(!0), zi(E.graph);
        return;
      case "graph-apply": {
        let be = E.range.pickFrom || ((fe = M.querySelector("[data-range-from]")) == null ? void 0 : fe.value), ye = E.range.pickTo || ((ee = M.querySelector("[data-range-to]")) == null ? void 0 : ee.value);
        if (!be || !ye) return;
        be > ye && ([be, ye] = [ye, be]), E.range = { preset: "custom", from: be, to: ye }, E.picking = !1, ie = "graph-pick", La(!0), zi(E.graph);
        return;
      }
      default:
        return;
    }
    La(!0);
  }
  function Gi(f) {
    var b, y, C, H, U, $;
    f.key === "Escape" && E.openDay !== void 0 && ((y = (b = f.target).closest) != null && y.call(b, '[data-wb-open="day"]')) ? (E.openDay = void 0, ie = E.opener, E.opener = void 0, La(!0)) : f.key === "Escape" && E.picking && ((H = (C = f.target).closest) != null && H.call(C, ".wbGraphCard")) ? (E.picking = !1, ie = "graph-pick", La(!0)) : f.key === "Escape" && E.graph && (($ = (U = f.target).closest) != null && $.call(U, ".wbGraphCard")) && (E.graph = void 0, La(!0));
  }
  let ka = null;
  function vs(f) {
    var y, C;
    const b = (C = (y = f.target).closest) == null ? void 0 : C.call(y, ".wbStripScroll");
    !b || f.button !== 0 || (ka = { startX: f.pageX, left: b.scrollLeft, moved: !1 }, b.classList.add("wbHeld"), window.addEventListener("mousemove", Yo), window.addEventListener("mouseup", hi, { once: !0 }));
  }
  function Yo(f) {
    const b = M.querySelector(".wbStripScroll");
    if (!ka || !b) return;
    const y = f.pageX - ka.startX;
    !ka.moved && Math.abs(y) > 1 && (ka.moved = !0, b.classList.add("wbDragging")), b.scrollLeft = ka.left - y;
  }
  function hi() {
    ka = null, window.removeEventListener("mousemove", Yo);
    const f = M.querySelector(".wbStripScroll");
    if (!f) return;
    f.classList.remove("wbDragging", "wbHeld");
    const b = [...f.querySelectorAll(".wbSnap")];
    if (b.length) {
      const y = b.reduce((C, H) => Math.abs(H.offsetLeft - f.scrollLeft) < Math.abs(C.offsetLeft - f.scrollLeft) ? H : C);
      f.scrollTo({ left: y.offsetLeft, behavior: "smooth" });
    }
  }
  const an = (f) => {
    var y, C;
    const b = f.target;
    (y = b.matches) != null && y.call(b, "[data-range-from]") ? E.range.pickFrom = b.value : (C = b.matches) != null && C.call(b, "[data-range-to]") && (E.range.pickTo = b.value);
  };
  M.addEventListener("change", an), M.addEventListener("click", Ks), M.addEventListener("keydown", Gi), M.addEventListener("mousedown", vs);
  const Ui = 64, Yi = 30;
  let wn = null, It = 0;
  const Zi = () => {
    It = 0, M.querySelectorAll(".wbPollen .wbPush").forEach((f) => {
      let b = 0, y = 0;
      if (wn) {
        const C = f.parentElement.getBoundingClientRect(), H = C.left + C.width / 2 - wn.x, U = C.top + C.height / 2 - wn.y, $ = Math.hypot(H, U) || 1;
        if ($ < Ui) {
          const fe = (1 - $ / Ui) * Yi;
          b = H / $ * fe, y = U / $ * fe;
        }
      }
      f.style.transform = b || y ? "translate(" + b.toFixed(1) + "px," + y.toFixed(1) + "px)" : "";
    }), wn && (It = requestAnimationFrame(Zi));
  }, $s = (f) => {
    var y, C;
    if (!((C = (y = f.target).closest) == null ? void 0 : C.call(y, ".wbPollen")) || on != null && on.matches) {
      wn && (wn = null, It || (It = requestAnimationFrame(Zi)));
      return;
    }
    wn = { x: f.clientX, y: f.clientY }, It || (It = requestAnimationFrame(Zi));
  }, bs = () => {
    wn = null, It || (It = requestAnimationFrame(Zi));
  };
  M.addEventListener("pointermove", $s), M.addEventListener("pointerleave", bs);
  const nn = typeof ResizeObserver == "function" ? new ResizeObserver(() => Tr(performance.now())) : null;
  nn == null || nn.observe(M);
  const on = (rn = window.matchMedia) == null ? void 0 : rn.call(window, "(prefers-reduced-motion: reduce)"), Kt = () => {
    ko(), Tr(performance.now());
  };
  (Zo = on == null ? void 0 : on.addEventListener) == null || Zo.call(on, "change", Kt);
  const Mo = [
    setInterval(() => {
      le = /* @__PURE__ */ new Date(), La(!0);
    }, hm),
    setInterval(() => {
      qe = /* @__PURE__ */ new Date(), La(!0);
    }, mm),
    setInterval(at, pm)
  ];
  return La(!0), ko(), {
    update() {
      La(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      La(!0);
    },
    setStyle(f) {
      !f || f === u || (u = f, M.dataset.style = u, La(!0), ko());
    },
    destroy() {
      var f;
      cancelAnimationFrame(It), M.removeEventListener("pointermove", $s), M.removeEventListener("pointerleave", bs), J = !0, Mo.forEach(clearInterval), he && cancelAnimationFrame(he), he = 0, nn == null || nn.disconnect(), (f = on == null ? void 0 : on.removeEventListener) == null || f.call(on, "change", Kt), hi(), M.removeEventListener("click", Ks), M.removeEventListener("change", an), M.removeEventListener("keydown", Gi), M.removeEventListener("mousedown", vs), ["daily", "hourly"].forEach(D), M.remove();
    }
  };
}
const xd = "#E1E1E1", bu = "#F7F4F0", pp = "#03a9f4", qt = 14, jt = 172;
let ag = 0;
const va = (n) => Math.round(n * 100) / 100, Hi = (n, l, i) => Math.max(l, Math.min(i, n)), wr = (n, l, i, u, v, x) => '<rect x="' + va(n) + '" y="' + va(l) + '" width="' + va(i) + '" height="' + va(u) + '" fill="' + v + '"' + (x != null ? ' opacity="' + x + '"' : "") + "/>", up = (n) => n.map((l, i) => (i ? "L" : "M") + va(l[0]) + " " + va(l[1])).join("");
function fp(n) {
  const l = (n == null ? void 0 : n.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const is = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function ng(n) {
  const l = n < 2 ? n + 24 : n;
  let i = is[0], u = is[is.length - 1];
  for (let A = 0; A < is.length - 1; A++) if (l >= is[A][0] && l <= is[A + 1][0]) {
    i = is[A], u = is[A + 1];
    break;
  }
  const v = (l - i[0]) / (u[0] - i[0]), x = v * v * (3 - 2 * v), k = (A, I) => {
    const M = parseInt(A.slice(1), 16), W = parseInt(I.slice(1), 16);
    return "#" + [16, 8, 0].map((F) => Math.round((M >> F & 255) + ((W >> F & 255) - (M >> F & 255)) * x).toString(16).padStart(2, "0")).join("");
  };
  return { top: k(i[1][0], u[1][0]), bot: k(i[1][1], u[1][1]), warm: k(i[1][2], u[1][2]), cool: k(i[1][3], u[1][3]), op: i[1][4] + (u[1][4] - i[1][4]) * x, t: l };
}
function og(n) {
  const l = parseInt(n.slice(1), 16), i = (l >> 16 & 255) / 255, u = (l >> 8 & 255) / 255, v = (l & 255) / 255, x = Math.max(i, u, v), k = Math.min(i, u, v);
  let A = 0, I = 0;
  const M = (x + k) / 2;
  if (x !== k) {
    const W = x - k;
    I = M > 0.5 ? W / (2 - x - k) : W / (x + k), A = (x === i ? (u - v) / W + (u < v ? 6 : 0) : x === u ? (v - i) / W + 2 : (i - u) / W + 4) / 6;
  }
  return [A * 360, I * 100, M * 100];
}
function Mf(n, l, i) {
  l = Hi(l, 0, 100) / 100, i = Hi(i, 0, 100) / 100;
  const u = (k) => (k + n / 30) % 12, v = l * Math.min(i, 1 - i), x = (k) => i - v * Math.max(-1, Math.min(u(k) - 3, Math.min(9 - u(k), 1)));
  return "#" + [x(0), x(8), x(4)].map((k) => Math.round(k * 255).toString(16).padStart(2, "0")).join("");
}
const [Sf, Cf, Tf] = og(xd), wu = Mf(Sf, Cf, Math.max(6, Tf - 14)), ig = Mf(Sf, Cf, Math.min(96, Tf + 16));
function rg(n, l, i, u, v) {
  const x = jt / 2, k = jt * 0.12, A = x - (x - k) * n, I = (pe) => pe ** 1.3, M = Hi(i, -1.5, 1.5), W = (pe) => -(Math.abs(M) * 4.6 * pe ** 1.5) * Math.sign(M), F = n * 1.4, V = (pe, ae) => {
    const J = Math.min(4.8, Math.abs(i) * 2.6) * (ae ? 1 : -1) * Math.sign(i || 1), G = ae ? pe + A : pe, he = ae ? pe : pe + A, ce = (Ce) => G + W(Ce) + J * Math.sin(Ce * Math.PI * 1.2 + u) * I(Ce) * 1.4 + F * Math.sin(Ce * Math.PI * 2 + u * 0.6) * I(Ce) * (ae ? 1 : -1), ke = [[he, qt]];
    for (let Ce = 0; Ce <= 12; Ce++) ke.push([ce(Ce / 12), qt + jt * Ce / 12]);
    ke.push([he, qt + jt]);
    let ie = '<path d="' + up(ke) + 'Z" fill="' + xd + '"/>';
    if (v) return ie;
    const oe = 1.35 + ((ae ? i > 0 : i < 0) ? 0.35 : 0), ne = (Ce) => {
      const le = Ce / 7, qe = ae ? 1 - le : le, re = (1 - qe) ** 1.3, Ze = pe + A * le;
      return Array.from({ length: 13 }, (L, B) => {
        const q = B / 12;
        return [Ze + W(q) * re + J * oe * Math.sin(q * Math.PI * 1.2 + u - qe * 3.2) * I(q) * 1.4 * re + F * 1.6 * Math.sin(q * Math.PI * 2 + u * 0.6 - qe * 2.5) * I(q) * n * (0.4 + 0.6 * re), qt + jt * q];
      });
    }, E = [1, 2, 3, 4, 5, 6].map(ne);
    for (let Ce = 0; Ce < 6; Ce += 2) ie += '<path d="' + up(E[Ce]) + up(E[Ce + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return ie;
  }, z = x - (x - k) * l;
  return { body: V(qt, !0) + V(qt + jt - A, !1), rails: [{ x: qt + z - 4, y: qt, w: 4, h: jt }, { x: qt + jt - z, y: qt, w: 4, h: jt }], head: 6.4 };
}
function sg(n, l, i) {
  const u = jt * (1 - n);
  let v = "";
  if (u > 1 && (v += wr(qt, qt, jt, u, xd), !i))
    for (let x = 1; x < 7; x += 2) v += wr(qt + jt * x / 7, qt, jt / 7, u, "#fff");
  return { body: v, rails: [{ x: qt, y: qt + jt * (1 - l) - 7, w: jt, h: 11 }], head: 10.4 };
}
function lg(n, l, i, u) {
  const v = 9 - 7 * (i / 100), x = qt + jt * (1 - n), k = Math.ceil(jt / 10) + 1, A = qt + v / 2, I = (qt + jt - v / 2 - A) / (k - 1), M = 0.8, W = 0.6, F = Array.from({ length: k }, (pe, ae) => Math.max(A + ae * W, Math.min(A + ae * I, x - v / 2 - (k - 1 - ae) * W))), V = F.slice(0, -1).map((pe, ae) => Hi((F[ae + 1] - pe - W) / (I - W), 0, 1));
  V.push(V[k - 2]);
  let z = "";
  return F.forEach((pe, ae) => {
    const J = M + (v - M) * V[ae], G = Math.max(0.5, J / 2), he = Math.max(0.4, J * 0.114);
    z += wr(qt, pe - G, jt, Math.max(1, J), xd), !u && J > 2.2 && (z += wr(qt, pe + G - he, jt, he, wu) + wr(qt, pe - G, jt, he * 0.55, ig, 0.75));
  }), u || [0.22, 0.78].forEach((pe) => {
    z += wr(qt + jt * pe - 0.7, qt, 1.4, Math.max(0, F[k - 1] + 1 - qt), wu, 0.85);
  }), { body: z, rails: [{ x: qt, y: qt + jt * (1 - l) - 8, w: jt, h: 8 }], head: 8.8 };
}
const xu = (n, l, i, u, v, x, k) => n === "curtain" ? rg(l, i, v, x, k) : n === "venetian" ? lg(l, i, u, k) : sg(l, i, k);
function dg(n, l) {
  let i = "", u = "";
  return l.forEach((v) => {
    const x = v.w > v.h, k = Hi(x ? qt + jt / 2 : v.x + v.w / 2, 17, 183), A = Hi(x ? v.y + v.h / 2 : qt + jt / 2, 17, 183);
    i += x ? wr(qt, Hi(v.y + v.h / 2, qt, qt + jt) - 1, jt, 2, pp) : wr(Hi(v.x + v.w / 2, qt, qt + jt) - 1, qt, 2, jt, pp);
    const I = x ? "M" + va(k - 4) + " " + va(A - 3) + "l4 -3l4 3M" + va(k - 4) + " " + va(A + 3) + "l4 3l4 -3" : "M" + va(k - 3) + " " + va(A - 4) + "l-3 4l3 4M" + va(k + 3) + " " + va(A - 4) + "l3 4l-3 4";
    u += '<circle cx="' + va(k) + '" cy="' + va(A) + '" r="11" fill="' + pp + '" filter="url(#' + n + 's)"/><path d="' + I + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: u };
}
function cg(n, l) {
  const i = /* @__PURE__ */ new Date(), u = ng(i.getHours() + i.getMinutes() / 60), v = 42 + 18 * Math.sin(u.t * 0.5), x = u.t >= 5 && u.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (u.t - 5) / 15) : 80, k = xu(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), A = l.ghostAlpha > 4e-3 && l.ghost != null ? xu(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", I = l.grip > 4e-3 ? dg(n, k.rails) : null, M = (W) => wr(qt, qt, jt, jt, W);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + u.top + '"/><stop offset="1" stop-color="' + u.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + va(v) + '%" cy="' + va(x) + '%" r="58%"><stop offset="0" stop-color="' + u.warm + '" stop-opacity="' + va(u.op * 0.8) + '"/><stop offset="1" stop-color="' + u.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + va(100 - v * 0.8) + '%" cy="' + va(100 - x * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + u.cool + '" stop-opacity="' + va(u.op * 0.64) + '"/><stop offset="1" stop-color="' + u.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + bu + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + M("url(#" + n + "l)") + M("url(#" + n + "w)") + M("url(#" + n + "k)") + (A ? '<g opacity="' + va(l.ghostAlpha) + '">' + A + "</g>" : "") + k.body + '<rect x="14" y="14" width="172" height="' + k.head + '" fill="' + xd + '" filter="url(#' + n + 's)"/></g>' + (I ? '<g clip-path="url(#' + n + 'c)" opacity="' + va(l.grip) + '">' + I.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + bu + '" stroke-width="3"/>' + (I ? '<g opacity="' + va(l.grip) + '">' + I.knobs + "</g>" : "") + "</svg>";
}
function pg({ onMove: n, onSet: l }) {
  var ie;
  const i = "cv" + ++ag, u = document.createElement("div");
  u.className = "tfCoverArt";
  const v = (ie = window.matchMedia) == null ? void 0 : ie.call(window, "(pointer: coarse)").matches;
  let x = null;
  const k = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let A = 0, I = !1, M = !1, W = null, F = 0, V = 0;
  const z = () => (x == null ? void 0 : x.kind) === "curtain" ? "x" : "y", pe = () => W || I || M || x.moving || x.target != null ? 1 : v ? performance.now() < V ? 1 : 0.4 : 0, ae = () => {
    u.innerHTML = cg(i, { kind: x.kind, pos: k.pos, bar: x.target ?? k.pos, tilt: k.tilt, vel: k.vel, ph: k.ph, ghost: k.gpos, ghostAlpha: k.ghost, grip: k.grip });
  };
  function J(oe) {
    A = 0;
    const ne = k.last ? Math.min(0.064, (oe - k.last) / 1e3) : 1 / 60, E = ne * 60;
    k.last = oe;
    const Ce = x.pos - k.pos, le = k.pos;
    k.pos += Math.sign(Ce) * Math.min(Math.abs(Ce), Math.max(10.5, Math.abs(Ce) * 1.4) * ne), Math.abs(x.pos - k.pos) < 0.03 && (k.pos = x.pos), k.vel = k.vel * 0.86 + (k.pos - le) / E * 0.14, Math.abs(k.vel) < 0.015 && k.pos === x.pos && (k.vel = 0), (k.pos !== le || k.vel) && (k.ph += (0.06 + Math.abs(k.vel) * 0.03) * E);
    const qe = x.tilt - k.tilt;
    k.tilt += Math.sign(qe) * Math.min(Math.abs(qe), Math.max(60, Math.abs(qe) * 4) * ne);
    const re = pe();
    k.grip += (re - k.grip) * Math.min(1, ne * (re > k.grip ? 11 : 3.5)), Math.abs(re - k.grip) < 0.01 && (k.grip = re);
    const Ze = x.target != null && Math.abs(x.target - k.pos) > 0.5 ? 0.22 : 0;
    x.target != null && (k.gpos = x.target), k.ghost += (Ze - k.ghost) * Math.min(1, ne * (Ze > k.ghost ? 16 : 3)), Math.abs(Ze - k.ghost) < 4e-3 && (k.ghost = Ze), ae(), k.pos !== x.pos || k.vel || k.tilt !== x.tilt || k.grip !== re || k.ghost !== Ze ? A = requestAnimationFrame(J) : k.last = 0;
  }
  const G = () => {
    x && !A && (A = requestAnimationFrame(J));
  }, he = setInterval(() => {
    x && !A && ae();
  }, 60 * 1e3), ce = (oe) => {
    const ne = u.getBoundingClientRect();
    return z() === "x" ? (oe.clientX - ne.left) / ne.width : (oe.clientY - ne.top) / ne.height;
  };
  u.addEventListener("pointerdown", (oe) => {
    var Ce;
    if (!(x != null && x.canSet) || oe.button > 0) return;
    oe.preventDefault(), (Ce = u.setPointerCapture) == null || Ce.call(u, oe.pointerId);
    const ne = x.target ?? x.pos, E = u.getBoundingClientRect();
    W = { p0: ce(oe), from: ne, x0: oe.clientX, value: null, side: null }, x.kind === "curtain" && ne > 0 && (W.side = (oe.clientX - E.left) / E.width < 0.5 ? "L" : "R"), G();
  }), u.addEventListener("pointermove", (oe) => {
    if (!W) return;
    let ne;
    if (x.kind === "curtain") {
      if (!W.side) {
        const Ce = oe.clientX - W.x0;
        if (Math.abs(Ce) < 4) return;
        W.side = Ce < 0 ? "L" : "R";
      }
      const E = (jt / 2 - jt * 0.12) / 200;
      ne = W.from + (W.side === "L" ? -1 : 1) * ((ce(oe) - W.p0) / E) * 100;
    } else ne = W.from - (ce(oe) - W.p0) / (jt / 200) * 100;
    W.value = Hi(ne, 0, 100), n(W.value);
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
    const ne = Math.round(x.target ?? x.pos), E = oe.shiftKey ? 10 : 1, Ce = { ArrowUp: ne + E, ArrowRight: ne + E, ArrowDown: ne - E, ArrowLeft: ne - E, PageUp: ne + 25, PageDown: ne - 25, Home: 0, End: 100 }[oe.key];
    if (Ce == null) return;
    oe.preventDefault();
    const le = Hi(Ce, 0, 100);
    n(le), clearTimeout(F), F = setTimeout(() => l(le), 500);
  }), {
    el: u,
    update(oe) {
      const ne = !x;
      x = oe, ne && (k.pos = x.pos, k.tilt = x.tilt, V = performance.now() + 1500, v && setTimeout(G, 1600)), u.classList.toggle("x", z() === "x"), u.classList.toggle("y", z() === "y"), x.canSet ? (u.tabIndex = 0, u.setAttribute("role", "slider"), u.setAttribute("aria-valuemin", "0"), u.setAttribute("aria-valuemax", "100"), u.setAttribute("aria-valuenow", String(Math.round(x.target ?? x.pos))), u.setAttribute("aria-orientation", z() === "x" ? "horizontal" : "vertical")) : u.setAttribute("role", "img"), u.setAttribute("aria-label", x.name + (x.canSet ? " position" : "")), u.setAttribute("aria-valuetext", x.text), G();
    },
    destroy() {
      cancelAnimationFrame(A), A = 0, clearInterval(he), clearTimeout(F), u.remove();
    }
  };
}
const yu = "move-assistant-density", Pi = {
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
}, X = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), hp = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', ku = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Mu = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', fc = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Su = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Cu = 1, ug = 4, Tu = 16, Lu = 32, fg = 128, hg = 256, Au = 16384, mg = 1, gg = 2, Eu = 4, vg = 8, bg = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Du = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, wg = { curtain: "curtains", blind: "blind", venetian: "blinds" }, gd = {
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
}, _u = ["covers", "people", "openings", "leaks", "vacuum"], Ru = "move_assistant_house", Bu = "move-assistant-house-used", mp = ["switch", "fan", "input_boolean", "automation"], Pu = "move-assistant-house-look", xg = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], yg = [["popup", "Popup"], ["sheet", "Sheet"]], kg = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Mg = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], Sg = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], hc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Cg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Tg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Nu = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', gp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', Lg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', Hu = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', mc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', Iu = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Lf = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", gc = Lf(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Fu = Lf(["M20 6L9 17L4 12"]), Ni = (n, l = "") => '<span class="tfAreaGlyph" data-icon-for="' + X(n || "") + '"' + (l ? ' data-icon-name="' + X(l) + '"' : "") + "></span>", Ag = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Eg = 1, Dg = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Ou = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, vc = ["door", "window", "garage_door", "opening"], qu = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, vd = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], _g = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Rg = 10, Bg = 20, Pg = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Ng = ["living room", "bedroom", "office"];
function Hg(n, { config: l, getHass: i }) {
  var Rp, Bp, Pp;
  const u = (e) => n.getElementById(e), v = u("app"), x = l || {}, k = String(x.layout || "").toLowerCase().replace("_", "-") === "test-focus", A = String(x.page || "").toLowerCase() === "overview";
  let I = Pi.get(yu) === "1", M = {};
  const W = (e) => {
    var t;
    return (t = i()) == null ? void 0 : t.callWS(e);
  }, F = (e, t, o) => W({ type: "call_service", domain: e, service: t, service_data: o }), V = n.querySelector("#appearancePane .toggleList");
  V && !u("densityToggle") && (V.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), u("densityToggle").addEventListener("click", () => {
    I = !I, Pi.set(yu, I ? "1" : "0"), ne();
  }));
  const z = [
    ["weather", "Weather", "The forecast under Home.", (e) => e.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (e) => e.startsWith("sensor.") && wt(e).device_class === "power" && /^(W|kW)$/.test(wt(e).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (e) => e.startsWith("alarm_control_panel.")]
  ], pe = (e, t, o, r) => '<div class="themeChoice" id="' + e + '" role="group" aria-label="' + t + '">' + r.map(([c, h]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + o + '="' + c + '">' + h + "</button>").join("") + "</div>", ae = (e, t, o, r) => '<div class="toggleRow"' + (r ? ' id="' + r + '"' : "") + "><div><strong>" + e + "</strong>" + (t ? '<div class="status">' + t + "</div>" : "") + "</div>" + o + "</div>";
  function J() {
    var P, te;
    if (!k || u("housePane")) return;
    const e = u("settingsView");
    e.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const t = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], o = (se, K) => '<div class="houseTab' + (se === "look" ? " active" : "") + '" data-house-pane="' + se + '"><section class="card">' + K + "</section></div>";
    e.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + t.map(([se, K]) => '<button class="tab segBtn' + (se === "look" ? " active" : "") + '" type="button" data-house-tab="' + se + '">' + K + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    o("look", xg.map(([se, K]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + se + '"><div class="tfCardTitle">' + K + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    o("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + o("sources", '<div class="toggleList">' + z.map(([se, K, Q]) => ae(K, Q, '<select class="settingsSelect" data-source="' + se + '" aria-label="' + K + '"></select>')).join("") + "</div>") + o("sums", '<div class="toggleList">' + Object.entries(gd).map(([se, K]) => ae(K.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + se + '" aria-label="' + K.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const r = (se) => e.querySelector('[data-look-group="' + se + '"]'), c = (se) => se == null ? void 0 : se.closest(".toggleRow");
    [c(e.querySelector(".themeBtn"))].forEach((se) => se && r("look").appendChild(se));
    const h = c(u("densityToggle"));
    h && (h.hidden = !0), [c(u("moreInfoChoice")), c(u("namesChoice"))].forEach((se) => se && r("house").appendChild(se)), r("house").insertAdjacentHTML("beforeend", ae("Lights", "How lights show on the house page.", pe("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + ae("Pad", "What the Dual Axis Controller’s pad sets on its tile.", pe("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [c(u("hoursChoice")), c(u("wxStyleChoice"))].forEach((se) => se && r("weather").appendChild(se));
    const p = u("housePane"), g = p.querySelector(".houseTabs"), w = g.querySelector(".rubberIndicator"), _ = "homecore-light-view", N = (se) => {
      p.classList.toggle("tfLightCardsOn", se === "cards"), p.querySelectorAll("[data-light-view]").forEach((K) => K.setAttribute("aria-pressed", String(K.dataset.lightView === se))), Pi.set(_, se);
    };
    N(Pi.get(_) === "table" ? "table" : "cards"), p.querySelector(".tfLightView").addEventListener("click", (se) => {
      const K = se.target.closest("[data-light-view]");
      K && N(K.dataset.lightView);
    }), new ResizeObserver(() => he()).observe(p), (te = (P = document.fonts) == null ? void 0 : P.ready) == null || te.then(() => he());
    const T = (se) => {
      const K = g.querySelector(".tab.active");
      w.style.transition = "none", se ? yc(w, w.offsetLeft, w.offsetWidth, K.offsetLeft, K.offsetWidth) : (w.style.left = K.offsetLeft + "px", w.style.width = K.offsetWidth + "px");
    };
    new ResizeObserver(() => T(!1)).observe(g), p.addEventListener("click", (se) => {
      const K = se.target.closest("[data-house-tab]");
      if (K) {
        g.querySelectorAll(".tab").forEach((Z) => Z.classList.toggle("active", Z === K)), p.querySelectorAll(".houseTab").forEach((Z) => Z.classList.toggle("active", Z.dataset.housePane === K.dataset.houseTab)), K.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), T(!0), he();
        return;
      }
      const Q = se.target.closest("[data-light-fav]");
      if (Q) {
        ws(Q.dataset.lightFav);
        return;
      }
      const j = se.target.closest("[data-light-pick]");
      if (j) {
        const [Z, je] = j.dataset.lightPick.split("|"), Wt = { ...Ye[Z] };
        j.dataset.v ? Wt[je] = j.dataset.v : delete Wt[je], Ye[Z] = Wt, mt(), [...an.keys()].filter((st) => st.endsWith(":" + je)).forEach((st) => an.delete(st)), fo();
        return;
      }
      const xe = se.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!xe || xe.disabled)) {
        if (xe.dataset.lights && (Ye.lights = xe.dataset.lights), xe.dataset.dacPad && (Ye.dacPad = xe.dataset.dacPad), (xe.dataset.lights || xe.dataset.dacPad) && (mt(), an.clear()), xe.dataset.sumToggle) {
          const Z = xe.dataset.sumToggle, je = new Set(Ne.hiddenSums || []);
          je.has(Z) ? je.delete(Z) : je.add(Z), Ne = { ...Ne, hiddenSums: [...je] }, ao();
        }
        fo();
      }
    }), p.addEventListener("change", (se) => {
      const K = se.target;
      K.dataset.source && (Ne = { ...Ne, sources: { ...Ne.sources || {}, [K.dataset.source]: K.value || void 0 } }, ao());
      const Q = K.dataset.lightStyle || K.dataset.lightPad;
      if (Q) {
        const j = K.dataset.lightStyle ? "lightStyles" : "lightPads", xe = { ...Ye[j] };
        K.value ? xe[Q] = K.value : delete xe[Q], Ye[j] = xe, mt(), [...an.keys()].filter((Z) => Z.endsWith(":" + Q)).forEach((Z) => an.delete(Z));
      }
      fo();
    });
  }
  function G() {
    var T, P;
    Yi() && hi();
    const e = u("housePane");
    if (!e) return;
    const t = !!customElements.get(ka);
    e.querySelectorAll("[data-lights]").forEach((te) => te.setAttribute("aria-pressed", String(te.dataset.lights === Ye.lights))), u("lightsRow").querySelector(".status").textContent = t || !Yi() ? "How lights show on the house page." : Yo === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", e.querySelectorAll("[data-dac-pad]").forEach((te) => te.setAttribute("aria-pressed", String(te.dataset.dacPad === Ye.dacPad))), u("dacPadRow").hidden = !Yi();
    for (const te of e.querySelectorAll("[data-source]")) {
      if (te === n.activeElement) continue;
      const [se] = z.find(([Q]) => Q === te.dataset.source), K = Object.keys(M).filter(z.find(([Q]) => Q === se)[3]).sort((Q, j) => Pe(Q).localeCompare(Pe(j)));
      te.dataset.sig !== K.join(",") && (te.innerHTML = '<option value="">Automatic</option>' + K.map((Q) => '<option value="' + X(Q) + '">' + X(Pe(Q)) + "</option>").join(""), te.dataset.sig = K.join(",")), te.value = K.includes((T = Ne.sources) == null ? void 0 : T[se]) ? Ne.sources[se] : "";
    }
    e.querySelectorAll("[data-sum-toggle]").forEach((te) => {
      const se = !(Ne.hiddenSums || []).includes(te.dataset.sumToggle);
      te.classList.toggle("on", se), te.setAttribute("aria-checked", String(se));
    });
    const o = u("lightRows"), r = u("lightCards"), c = n.activeElement, h = o != null && o.contains(c) || r != null && r.contains(c) ? c : null;
    if (!o || h != null && h.matches("select")) {
      he();
      return;
    }
    const p = new Set(Ie()), g = (te, se, K, Q) => '<option value="' + te + '"' + (te === K ? " selected" : "") + ">" + se + "</option>", w = Object.keys(M).filter((te) => te.startsWith("light.")).sort((te, se) => !pt.get(te) - !pt.get(se) || (pt.get(te) || "").localeCompare(pt.get(se) || "") || Pe(te).localeCompare(Pe(se))).map((te) => {
      const se = Ye.lightStyles[te] || "", K = Ye.lightPads[te] || "", Q = p.has(te), j = X(Pe(te));
      return "<tr><td><strong>" + j + "</strong></td><td>" + X(pt.get(te) || "—") + "</td><td>" + X(Yt(te)) + '</td><td class="metaSwitchCol"><button class="switch' + (Q ? " on" : "") + '" type="button" role="switch" aria-checked="' + Q + '" data-light-fav="' + X(te) + '" aria-label="' + j + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + X(te) + '" aria-label="' + j + ' tile">' + g("", "Default", se) + g("tile", "HomeCore tile", se) + g("dac", "Dual Axis Controller", se) + '</select></td><td><select class="settingsSelect" data-light-pad="' + X(te) + '" aria-label="' + j + ' pad"' + (Ui(te) ? "" : " disabled") + ">" + g("", "Default", K) + g("temperature", "Temperature", K) + g("colour", "Colour", K) + "</select></td></tr>";
    }).join(""), _ = (te, se, K, Q, j) => '<div class="themeChoice" role="group" aria-label="' + K + '">' + Q.map(([xe, Z]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (xe === j) + '" data-light-pick="' + te + "|" + X(se) + '" data-v="' + xe + '">' + Z + "</button>").join("") + "</div>", N = Object.keys(M).filter((te) => te.startsWith("light.")).sort((te, se) => !pt.get(te) - !pt.get(se) || (pt.get(te) || "").localeCompare(pt.get(se) || "") || Pe(te).localeCompare(Pe(se))).map((te) => {
      const se = p.has(te), K = X(Pe(te)), Q = [pt.get(te), Yt(te)].filter(Boolean).map(X).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + K + '</strong><div class="status">' + Q + "</div></div></div>" + ae("Favourite", "", '<button class="switch' + (se ? " on" : "") + '" type="button" role="switch" aria-checked="' + se + '" data-light-fav="' + X(te) + '" aria-label="' + K + ' is a favourite"></button>') + ae("Tile", "", _("lightStyles", te, K + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Ye.lightStyles[te] || "")) + (Ui(te) ? ae("Pad", "", _("lightPads", te, K + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Ye.lightPads[te] || "")) : "") + "</div>";
    }).join("");
    o.dataset.html !== w && (o.innerHTML = w, o.dataset.html = w), r.dataset.html !== N && (r.innerHTML = N, r.dataset.html = N), h != null && h.dataset.lightFav && ((P = (r.contains(h) ? r : o).querySelector('[data-light-fav="' + CSS.escape(h.dataset.lightFav) + '"]')) == null || P.focus({ preventScroll: !0 })), he();
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
            var T;
            return (T = h[Number(p.value)]) == null ? void 0 : T.click();
          }), c.after(p);
          const N = () => {
            p.innerHTML = h.map((P, te) => '<option value="' + te + '"' + (P.disabled ? " disabled" : "") + ">" + X(P.textContent) + "</option>").join("");
            const T = h.findIndex((P) => P.getAttribute("aria-pressed") === "true" || P.classList.contains("active"));
            T >= 0 && (p.value = String(T));
          };
          new MutationObserver(N).observe(c, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), N();
        }
        const g = (N) => {
          c.hidden !== !N && (c.hidden = !N), p.hidden !== N && (p.hidden = N);
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
        const _ = h.every((N) => N.scrollWidth <= N.clientWidth + 1);
        c.hidden = w, g(_), p.dataset.fit = "1";
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
  function ne() {
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
      const _ = getComputedStyle(w), N = /span (\d+)/.exec(_.gridColumnStart + " " + _.gridColumnEnd);
      return Math.min(r, N ? +N[1] : _.gridColumnEnd === "-1" ? r : 1);
    });
    Ce.disabled = !1;
    let p = 0;
    const g = c.map((w, _) => {
      qe.has(w) || (qe.add(w), le.observe(w));
      const N = h[_];
      p + N > r && (p = 0);
      const T = p + 1;
      return p = (p + N) % r, '#homeView .grid.tfStack>[data-k="' + CSS.escape(w.dataset.k) + '"]{grid-column:' + T + " / span " + N + ";grid-row-end:span " + Math.max(1, Math.ceil(re(w) + o)) + "}";
    }).join(`
`);
    Ce.textContent !== g && (Ce.textContent = g);
  }
  new MutationObserver(Ze).observe(E, { childList: !0 }), new MutationObserver(Ze).observe(v, { attributes: !0, attributeFilter: ["class"] });
  let L = null, B = null, q = null, D = null;
  const de = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), Se = 6;
  let Te = null;
  const $e = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), Ya = /* @__PURE__ */ new Map();
  let Ne = { favourites: null }, mo = {}, Zn = {}, go = [], ia = null;
  const Xe = (() => {
    try {
      return JSON.parse(Pi.get(Bu)) || {};
    } catch {
      return {};
    }
  })();
  let pt = /* @__PURE__ */ new Map(), en = 0;
  function ao() {
    clearTimeout(en), en = setTimeout(() => Promise.resolve(W({ type: "frontend/set_user_data", key: Ru, value: Ne })).catch(() => {
    }), 400);
  }
  const Ye = (() => {
    let e = {};
    try {
      e = JSON.parse(Pi.get(Pu)) || {};
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
  })(), mt = () => Pi.set(Pu, JSON.stringify(Ye)), Tt = () => {
    v.dataset.more = Ye.more, v.dataset.names = Ye.names, bl();
  };
  k && V && !u("moreInfoChoice") && (u("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + yg.map(([e, t]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ye.more === e) + '" data-more-style="' + e + '">' + t + "</button>").join("") + "</div></div>"
  ), u("moreInfoChoice").addEventListener("click", (e) => {
    const t = e.target.closest("[data-more-style]");
    t && (Ye.more = t.dataset.moreStyle, mt(), Tt(), u("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === t))));
  }), u("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + kg.map(([e, t]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ye.names === e) + '" data-names-style="' + e + '">' + t + "</button>").join("") + "</div></div>"
  ), u("namesChoice").addEventListener("click", (e) => {
    const t = e.target.closest("[data-names-style]");
    t && (Ye.names = t.dataset.namesStyle, Ye.namesPicked = !0, mt(), Tt(), u("namesChoice").querySelectorAll("[data-names-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === t))));
  }), u("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Mg.map(([e, t]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ye.hoursWindow === e) + '" data-hours-window="' + e + '">' + t + "</button>").join("") + "</div></div>"
  ), u("hoursChoice").addEventListener("click", (e) => {
    const t = e.target.closest("[data-hours-window]");
    t && (Ye.hoursWindow = t.dataset.hoursWindow, mt(), $t == null || $t.refresh(), u("hoursChoice").querySelectorAll("[data-hours-window]").forEach((o) => o.setAttribute("aria-pressed", String(o === t))));
  }), u("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + Sg.map(([e, t]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ye.wxStyle === e) + '" data-wx-style="' + e + '">' + t + "</button>").join("") + "</div></div>"
  ), u("wxStyleChoice").addEventListener("click", (e) => {
    const t = e.target.closest("[data-wx-style]");
    t && (Ye.wxStyle = t.dataset.wxStyle, mt(), $t == null || $t.setStyle(Ye.wxStyle), wa == null || wa.forEach((o) => o.setStyle(Ye.wxStyle)), u("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === t))));
  })), J();
  let gt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const vn = /* @__PURE__ */ new Map();
  let ds = "";
  const An = k ? dh({ onChange: () => ma() }) : null;
  k && v.classList.add("house");
  const bt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let $t = null, cs = null, Io = !1;
  function ps(e) {
    const t = At();
    if (v.classList.toggle("houseBento", !!t), $t && (cs !== t || e == null) && ($t.destroy(), $t = null), !t || e == null) {
      bt.remove();
      return;
    }
    bt.isConnected || E.append(bt), bt.style.order = e, !$t && !Io && ($t = vu(bt, { getHass: i, entityId: t, style: Ye.wxStyle, hoursWindow: () => Ye.hoursWindow }), cs = t);
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
  ], vo = Jt.map(([e]) => e), nt = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], Ll = { hourly: 2 }, Kn = Object.fromEntries(Jt.map(([e]) => [e, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + e })]));
  let wa = null, Ke = null;
  function dt(e) {
    const t = At();
    wa && Ke !== t && (wa.forEach((o) => o.destroy()), wa = null), Object.values(Kn).forEach((o) => t ? !o.isConnected && E.append(o) : o.remove()), t && !wa && !Io && (wa = /* @__PURE__ */ new Map(), Ke = t), xa();
  }
  function xa() {
    if (!wa || Io) return;
    const e = new Set(Ct().hidden);
    Jt.forEach(([t, o]) => {
      wa.has(t) || e.has(t) && !(Bt != null && Bt.fromTray && Bt.key === t) || wa.set(t, vu(Kn[t], { getHass: i, entityId: Ke, style: Ye.wxStyle, cards: o, onOpen: t === "wx" ? () => Ei("weather") : void 0 }));
    });
  }
  const wt = (e) => {
    var t;
    return ((t = M[e]) == null ? void 0 : t.attributes) || {};
  }, Pe = (e) => wt(e).friendly_name || e, Dt = (e, t) => Bi(e) || (Number(wt(e).supported_features) & t) === t, Rt = (e) => {
    const t = String(e ?? "").replace(/_/g, " ");
    return t.charAt(0).toUpperCase() + t.slice(1);
  }, Ot = (e, t = 1) => Number(e).toLocaleString(void 0, { minimumFractionDigits: t, maximumFractionDigits: t }), En = (e) => (e == null ? void 0 : e.state) === "on" ? e.attributes.brightness != null ? Math.max(1, Math.round(e.attributes.brightness / 2.55)) : 100 : 0, us = (e) => wt(e).supported_color_modes || [], xr = (e, t) => [5, 3, 1].map((o) => {
    const r = (o + e / 60) % 6;
    return 255 * (1 - t / 100 * Math.max(0, Math.min(r, 4 - r, 1)));
  }), Ra = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)), bo = (e) => 0.2126 * Ra(e[0]) + 0.7152 * Ra(e[1]) + 0.0722 * Ra(e[2]), yr = (e, t) => {
    const o = bo(e), r = bo(t);
    return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
  }, fs = 0.55, wo = ["hs", "xy", "rgb", "rgbw", "rgbww"], Gs = (e) => {
    const t = wt(e), o = wo.includes(t.color_mode);
    return (o && t.rgb_color ? t.rgb_color : o && t.hs_color ? xr(...t.hs_color) : [255, 170, 0]).map((r) => Math.round(Math.max(0, Math.min(255, r))));
  }, Ii = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function xo(e) {
    var r;
    const t = e.split(".")[0], o = (r = M[e]) == null ? void 0 : r.state;
    return !o || o === "unavailable" || o === "unknown" ? null : t === "light" ? o === "on" ? Gs(e) : null : t === "climate" ? Ii[o] || null : t === "cover" ? o !== "closed" ? [146, 107, 199] : null : t === "lock" ? o !== "locked" ? [244, 67, 54] : null : t === "media_player" ? ["playing", "paused", "on", "buffering"].includes(o) ? [3, 169, 244] : null : t === "humidifier" || t === "valve" ? ["on", "open", "opening", "closing"].includes(o) ? [33, 150, 243] : null : t === "vacuum" ? ["cleaning", "returning"].includes(o) ? [0, 150, 136] : null : t === "alarm_control_panel" ? o !== "disarmed" && o !== "triggered" ? [76, 175, 80] : null : t === "fan" ? o === "on" ? [0, 188, 212] : null : (t === "switch" || t === "input_boolean") && o === "on" ? [255, 193, 7] : null;
  }
  function Fi(e, t, o = !1) {
    const [r, c, h] = e.map((se) => se / 255), p = Math.max(r, c, h), g = Math.min(r, c, h), w = p - g, _ = w ? (p === r ? (c - h) / w + (c < h ? 6 : 0) : p === c ? (h - r) / w + 2 : (r - c) / w + 4) * 60 : 0, N = (p + g) / 2, T = w ? w / (1 - Math.abs(2 * N - 1)) : 0, P = w < 0.1 ? Math.min(T, 0.25) : 1, te = (se) => {
      const K = (j) => (j + _ / 30) % 12, Q = P * Math.min(se, 1 - se);
      return [0, 8, 4].map((j) => Math.round(255 * (se - Q * Math.max(-1, Math.min(K(j) - 3, 9 - K(j), 1)))));
    };
    for (let se = 0.5; o ? se < 0.96 : se > 0.04; se += o ? 0.01 : -0.01) {
      const K = te(se);
      if (yr(K, t) >= 3) return "rgb(" + K.join(",") + ")";
    }
    return o ? "#ffffff" : "#26221e";
  }
  const Oi = (e) => {
    const t = [1, 3, 5].map((o) => parseInt(e.slice(o, o + 2), 16));
    return Math.max(...t) - Math.min(...t) < 26 ? "" : ";--sum-d:" + Fi(t, [58, 58, 58], !0) + ";--sum-l:" + Fi(t, [230, 230, 230]);
  }, kr = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, Al = () => [0, 1, 2].map((e) => "--g" + e + "-d:" + kr.d[e] + ";--g" + e + "-l:" + kr.l[e]).join(";"), Ut = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((e, t) => '<stop offset="' + e + '" style="stop-color:var(--g' + t + ')"/>').join("") + "</linearGradient></defs></svg>", Dn = (e) => {
    const t = e.map((o) => Math.round(o + (255 - o) * fs));
    return "--light-soft:rgb(" + t.join(",") + ");--light-ink:" + Fi(e, t);
  }, Fo = (e) => Dn(Gs(e)), di = (e) => {
    const t = xo(e);
    return t ? ' data-light style="' + Dn(t) + '"' : "";
  }, Oa = (e) => {
    const t = us(e);
    return t.length ? t.some((o) => o !== "onoff") : wt(e).brightness != null;
  }, ya = (e) => [wt(e).min_color_temp_kelvin || 2e3, wt(e).max_color_temp_kelvin || 6500], ha = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Us(e) {
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
  const $n = (e) => {
    var t;
    return wt(e).current_position ?? (((t = M[e]) == null ? void 0 : t.state) === "closed" ? 0 : 100);
  }, ci = (e) => {
    var t;
    return rn("pos", e, ((t = $e.get(e)) == null ? void 0 : t.pos) ?? $n(e));
  }, Oo = (e) => {
    var t;
    return rn("tilt", e, ((t = $e.get(e)) == null ? void 0 : t.tilt) ?? wt(e).current_tilt_position);
  };
  function Yt(e) {
    var p;
    const t = M[e];
    if (!t) return "Not found";
    if (t.state === "unavailable") return "Unavailable";
    const o = t.attributes, r = e.split(".")[0];
    if (r === "light") {
      if (t.state !== "on") return "Off";
      const g = o.color_temp_kelvin;
      return (Oa(e) ? En(t) + "%" : "On") + (o.color_mode === "color_temp" && g ? " · " + Number(g).toLocaleString() + "k" : wo.includes(o.color_mode) ? " · Colour" : "");
    }
    if (r === "climate") return (t.state === "off" ? "Off" : Rt(o.hvac_action || t.state)) + " · " + Ot(o.current_temperature) + " °C now";
    if (r === "cover") {
      const g = $n(e), w = o.current_tilt_position;
      return t.state === "opening" || t.state === "closing" ? Rt(t.state) + " - " + g + "%" : (g <= 0 ? "Closed" : g >= 100 ? "Open" : "Partially open") + (w > 0 && w < 100 ? " · tilted" : "");
    }
    if (r === "humidifier") return t.state !== "on" ? "Off" : Rt(o.action || "on") + " · " + o.current_humidity + "% now";
    if (r === "vacuum") return Rt(t.state) + (t.state === "cleaning" && ((p = o.rooms) != null && p.length) ? " · " + o.rooms.join(", ") : "") + (o.battery_level != null ? " · " + o.battery_level + "%" : "");
    if (r === "media_player") return t.state === "playing" || t.state === "paused" ? (t.state === "paused" ? "Paused · " : "") + (o.media_title || "Playing") : Rt(t.state);
    if (r === "alarm_control_panel") return Ou[t.state] || Rt(t.state);
    if (r === "lock" || r === "valve") return Rt(t.state);
    if (r === "switch") return t.state === "on" ? "On" : "Off";
    if (r === "plant") return t.state === "ok" ? "Healthy" : Rt(o.problem);
    if (r === "binary_sensor")
      return o.device_class === "battery" ? t.state === "on" ? "Low" : "Normal" : o.device_class === "problem" ? t.state === "on" ? "Problem" : "OK" : o.device_class === "moisture" ? t.state === "on" ? "Wet" : "Dry" : vc.includes(o.device_class) ? t.state === "on" ? "Open" : "Closed" : t.state === "on" ? "Detected" : "Clear";
    if (o.rang) return "Rang at " + ha(o.rang);
    const c = i();
    if (c != null && c.formatEntityState && !Bi(e))
      try {
        return c.formatEntityState(t);
      } catch {
      }
    const h = Number(t.state);
    if (t.state !== "" && Number.isFinite(h)) {
      const g = Math.abs(h) >= 100 ? 0 : Math.abs(h) >= 10 ? 1 : 2, w = o.unit_of_measurement ? o.unit_of_measurement === "%" ? "%" : " " + o.unit_of_measurement : "";
      return h.toLocaleString(void 0, { maximumFractionDigits: g }) + w + (o.plant_low ? " · Low" : o.plant_high ? " · High" : "");
    }
    return Rt(t.state);
  }
  const pi = (e) => e >= 1e3 ? Ot(e / 1e3, 2) + " kW" : Math.round(e).toLocaleString() + " W";
  function no(e) {
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
    }), (o = e.querySelectorAll) == null || o.call(e, ".tfIcon").forEach(qi), (r = e.classList) != null && r.contains("tfIcon") && qi(e), Sr();
  }
  const Mr = /* @__PURE__ */ new Map();
  function qi(e) {
    var h, p, g;
    const t = (((h = e.closest("[data-k]")) == null ? void 0 : h.dataset.k) || "") + "|" + (e.dataset.iconFor || ((p = e.querySelector("[data-icon-for]")) == null ? void 0 : p.dataset.iconFor) || e.getAttribute("aria-label") || ""), o = getComputedStyle(e), r = { backgroundColor: o.backgroundColor, color: o.color }, c = Mr.get(t);
    Mr.set(t, r), !(!c || c.backgroundColor === r.backgroundColor && c.color === r.color || (g = window.matchMedia) != null && g.call(window, "(prefers-reduced-motion: reduce)").matches) && e.animate([c, r], { duration: Ca.warp.cdur, delay: Ca.warp.cdelay, easing: sa[Ca.warp.ease], fill: "backwards" });
  }
  const Wi = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Ys = (e) => {
    const t = [e];
    for (; t.length; ) {
      const o = t.shift();
      if (o.localName === "svg") return o;
      o.shadowRoot && t.push(...o.shadowRoot.children), t.push(...o.children);
    }
    return null;
  };
  function Zs(e) {
    var te, se, K;
    const t = e.localName === "svg" ? e : Ys(e), o = t ? [...t.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!o.length) return !t;
    const r = (te = e.closest(".tfIcon")) == null ? void 0 : te.offsetWidth;
    if (r === void 0) return !0;
    if (!r) return !1;
    const c = r + "|" + o.map((Q) => Q.getAttribute("d") || Q.localName).join("|");
    if (e.dataset.fitted === c) return !0;
    let h = 1 / 0, p = 1 / 0, g = -1 / 0, w = -1 / 0;
    for (const Q of o) {
      const j = Q.getBBox(), xe = getComputedStyle(Q), Z = xe.stroke !== "none" ? (parseFloat(xe.strokeWidth) || 0) / 2 : 0;
      !j.width && !j.height || (h = Math.min(h, j.x - Z), p = Math.min(p, j.y - Z), g = Math.max(g, j.x + j.width + Z), w = Math.max(w, j.y + j.height + Z));
    }
    if (!(g > h)) return !1;
    const _ = (K = (se = t.viewBox) == null ? void 0 : se.baseVal) != null && K.width ? t.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, N = r > 40 ? r * (26 / 40) : r - 14, T = N * _.width / Math.max(g - h, w - p), P = T / _.width;
    return e.localName === "svg" ? (e.style.width = T + "px", e.style.height = T + "px") : e.style.setProperty("--mdc-icon-size", T + "px"), t.style.translate = ((_.x + _.width / 2 - (h + g) / 2) * P).toFixed(2) + "px " + ((_.y + _.height / 2 - (p + w) / 2) * P).toFixed(2) + "px", e.dataset.fitted = c, !0;
  }
  let qo = 0;
  function Wo(e = 0) {
    clearTimeout(qo), [...n.querySelectorAll(Wi)].filter((o) => !Zs(o)).length && e < 5 && (qo = setTimeout(() => Wo(e + 1), 300));
  }
  function Sr() {
    clearTimeout(qo), qo = setTimeout(() => Wo(), 60);
  }
  const ui = (e) => {
    var t, o, r;
    return e.startsWith("light.") && M[e] && !wt(e).icon && !((r = (o = (t = i()) == null ? void 0 : t.entities) == null ? void 0 : o[e]) != null && r.icon) ? "mdi:lightbulb" : "";
  }, la = (e, t, o) => (t = t || ui(e), ' data-icon-for="' + X(e) + '"' + (t ? ' data-icon-name="' + X(t) + '"' : "") + (o ? ' data-letter="' + X(o) + '"' : "")), bn = (e) => e.endsWith("_solar_power") ? "mdi:solar-power-variant" : wt(e).rang ? "mdi:doorbell" : "", Lt = (e, t, o, r) => X([e, t, o, r ? JSON.stringify(r) : ""].join("|")), Vi = (e) => X(JSON.stringify(e));
  function Vo(e, t) {
    var c, h;
    const o = X(Pe(t) + ", " + Yt(t));
    return '<div class="activityRow' + (Number.isFinite(Number((c = M[t]) == null ? void 0 : c.state)) && ((h = M[t]) == null ? void 0 : h.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + X(e + "|" + t) + '" aria-label="' + o + '. Show the last 24 hours"' : '" aria-label="' + o + '"') + '><div class="tfIcon" aria-hidden="true"' + la(t, bn(t)) + '></div><div><div class="activityRowName">' + X(Pe(t)) + '</div><div class="activityRowMeta">' + X(Yt(t)) + "</div></div></div>";
  }
  const ji = (e, t, o) => '<div class="activityRow" aria-label="' + X(e + ", " + t) + '"><div class="tfIcon" aria-hidden="true"' + la("", o, e) + '></div><div><div class="activityRowName">' + X(e) + '</div><div class="activityRowMeta">' + X(t) + "</div></div></div>", tn = (e) => {
    var t;
    return ((t = ue.get(e)) == null ? void 0 : t.name) ?? Pe(e);
  }, jo = (e) => {
    var t;
    return ((t = ue.get(e)) == null ? void 0 : t.text) ?? Yt(e);
  };
  function hs(e) {
    var o;
    const t = (o = ue.get(e)) == null ? void 0 : o.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (t ? la("", t, tn(e)) : la(e, bn(e))) + '></div><div><div class="activityRowName">' + X(tn(e)) + '</div><div class="activityRowMeta">' + X(jo(e)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + X(tn(e)) + '’s last 24 hours">' + hp + '</button></div><svg class="tfGraph" data-graph="' + X(e) + '" role="img" aria-label="' + X(tn(e)) + ', last 24 hours"></svg></div>';
  }
  function _n(e, t, o, r, c = "", h = null, p = "") {
    const g = L && L.key === e;
    return '<section class="card tfCard' + (p ? " " + p : "") + (g ? " open" : "") + '" data-tf data-k="' + X(e) + '" style="order:' + t + (g && L.h ? ";min-height:" + L.h + "px" : "") + '" aria-label="' + X(o) + '"><div class="activityHeader">' + (h ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + X(h) + '" aria-label="' + X(o + (M[h] ? ", " + Yt(h) : "") + ". More info") + '">' + X(o) + "</button>" : '<div class="activityTitle">' + X(o) + "</div>") + "</div>" + (g ? hs(L.id) : '<div class="activityRows">' + r.join("") + "</div>" + c) + "</section>";
  }
  function yo(e, t) {
    const o = "readings:" + e.id, r = e.readings.map((c) => Vo(o, c));
    return e.power != null && r.push(ji("Power now", pi(e.power), "mdi:flash")), _n(o, t, "Readings", r);
  }
  function Xt(e, t) {
    var g;
    const o = "energy:" + e.id, [r, c] = [e.solar.find((w) => w.endsWith("_power")), e.solar.find((w) => w.endsWith("_today"))], h = [r, c].filter(Boolean).map((w) => Vo(o, w)), p = Number(((g = M[r]) == null ? void 0 : g.state) || 0) * 1e3;
    return gt.grid && (h.push(Vo(o, gt.grid)), h.push(ji("House use", pi(p + Number(M[gt.grid].state)), "mdi:home-lightning-bolt"))), _n(o, t, "Energy", h, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Xn = (e, t) => _n("plant:" + e.id, t, Pe(e.id), e.readings.map((o) => Vo("plant:" + e.id, o)), "", e.id);
  function Ta(e, t, o, r, c, h, p = null) {
    const g = o == null ? null : Math.max(0, Math.min(1, o)), w = g == null ? 0 : Math.round(g * 100);
    return '<div class="tfBar ' + e + '" role="slider" tabindex="0" aria-label="' + X(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + w + '"' + (c ? ' aria-valuetext="' + X(c) + '"' : "") + ' data-drag="' + X(e + "|" + t) + '">' + (p != null ? '<span class="was" aria-hidden="true" style="left:' + p + '%"></span>' : "") + (h ? g == null ? "" : '<b style="left:' + w + '%"></b>' : '<i style="width:' + w + '%"></i>') + "</div>";
  }
  const zi = "move-assistant-house-last-bright", zo = (() => {
    try {
      return JSON.parse(Pi.get(zi)) || {};
    } catch {
      return {};
    }
  })();
  let ms = 0;
  const La = (e, t) => {
    !t || zo[e] === t || (zo[e] = t, clearTimeout(ms), ms = setTimeout(() => Pi.set(zi, JSON.stringify(zo)), 500));
  }, Go = (e, t, o, r) => '<div class="tfStep" role="group" aria-label="' + X(e) + '"><button type="button" data-act="' + o + '" aria-label="Lower ' + X(e.toLowerCase()) + '">' + Su.down + "</button><output>" + X(t) + '</output><button type="button" data-act="' + r + '" aria-label="Raise ' + X(e.toLowerCase()) + '">' + Su.up + "</button></div>", oo = (e, t, o) => '<div class="' + e + '" role="group" aria-label="' + X(t) + '">' + o.filter(Boolean).map((r) => '<button type="button" data-act="' + r.act + '"' + (r.pressed != null ? ' aria-pressed="' + r.pressed + '"' : "") + (r.disabled ? " disabled" : "") + (r.aria ? ' aria-label="' + X(r.aria) + '"' : "") + ">" + (r.html || X(r.label)) + "</button>").join("") + "</div>", fi = (e, t) => "width:" + Math.round(Math.max(0, Math.min(1, (e - t * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * t / 3).toFixed(2), Uo = (e) => "left:calc(4px + " + e / 100 + " * (100% - 8px))", Cr = (e, t) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + X(Pe(e)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(t) + '" aria-valuetext="' + Math.round(t) + '% open" data-blocks="' + X(e) + '">' + [0, 1, 2, 3].map((o) => '<span><i style="' + fi(t, o) + '"></i><b' + (t >= (o + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (o + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Uo(t) + '">' + Math.round(t) + "%</output></div>";
  function El(e, t) {
    e.querySelectorAll(":scope>span").forEach((r, c) => {
      r.firstElementChild.setAttribute("style", fi(t, c)), r.lastElementChild.classList.toggle("lit", t >= (c + 1) * 25 - 12);
    });
    const o = e.querySelector(".tfTip");
    o.setAttribute("style", Uo(t)), o.textContent = Math.round(t) + "%", e.setAttribute("aria-valuenow", String(Math.round(t))), e.setAttribute("aria-valuetext", Math.round(t) + "% open");
  }
  const Tr = (e, t) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + X(Pe(e)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(t) + '" aria-valuetext="' + Math.round(t) + '% open" data-drag="tilt|' + X(e) + '"><i style="width:calc((100% - 8px) * ' + t / 100 + ')"></i><span' + (t > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (t > 92 ? ' class="lit"' : "") + ">Open</span></div>", gs = (e, t, o) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + X(Pe(e)) + '">' + [
    Dt(e, mg) && ["open", "Open", "open_cover", t >= 100 && !o],
    Dt(e, vg) && ["stop", "Stop", "stop_cover", !1],
    Dt(e, gg) && ["close", "Close", "close_cover", t <= 0 && !o]
  ].filter(Boolean).map(([r, c, h, p]) => '<button type="button" data-act="' + Lt("cover", h, e) + '" aria-label="' + c + '"' + (p ? " disabled" : "") + ">" + bg[r] + "</button>").join("") + "</div>", ko = (e, t) => '<button class="tfIcon' + (t.art ? " art" : "") + '" type="button" data-act="' + t.button.act + '" aria-label="' + X(t.button.label) + '"' + (t.art ? ' style="background-image:url(&quot;' + X(t.art) + '&quot;)"' : la(e, t.icon)) + "></button>", Ks = (e) => '<button class="tfName" type="button" data-more="' + X(e) + '" aria-label="' + X(Pe(e) + ", " + Yt(e) + ". More info") + '"><span class="activityRowName">' + X(Pe(e)) + '</span><span class="activityRowMeta">' + X(Yt(e)) + "</span></button>";
  function Gi(e, t = !1, o = null) {
    const r = Zo(e), c = e.startsWith("light.") && wn(e) && !(o && Za(e) < 3), h = o || (t && e.startsWith("light.") ? ["bright"] : null), p = c ? ['<div class="tfDacPad" data-dac="' + (t ? "more:" : o ? "dash:" : "tile:") + X(e) + '"></div>'] : r.sections.map((g, w) => g && (!h || h.includes((r.parts || [])[w])) ? g : "").filter(Boolean);
    return '<div class="tfAction' + (c ? " tfDac" : "") + (r.on ? " on" : "") + (!c && !p.length ? " tfHeadOnly" : "") + '" data-k="' + X(e) + '"' + (r.tone ? ' data-tone="' + r.tone + '"' : "") + di(e) + '><div class="tfActionHead">' + ko(e, r) + Ks(e) + "</div>" + p.join("") + "</div>";
  }
  const ka = "dual-controller-v3", vs = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Yo = null;
  async function hi() {
    if (Yo || customElements.get(ka)) return;
    Yo = "loading";
    const e = await Promise.resolve().then(() => W({ type: "lovelace/resources" })).catch(() => null), t = Array.isArray(e) && e.some((r) => /dual-axis-controller/i.test(r.url || ""));
    if (await Promise.race([customElements.whenDefined(ka), new Promise((r) => setTimeout(r, t ? 8e3 : 0))]), customElements.get(ka)) return;
    const o = Object.assign(document.createElement("script"), { src: vs });
    o.onerror = () => {
      Yo = "failed", G();
    }, document.head.appendChild(o);
  }
  const an = /* @__PURE__ */ new Map(), Ui = (e) => (Ye.lightStyles[e] || Ye.lights) === "dac", Yi = () => Ye.lights === "dac" || Object.values(Ye.lightStyles).includes("dac");
  function wn(e) {
    return Ui(e) && !!customElements.get(ka);
  }
  const It = (e) => Ye.lightPads[e] || Ye.dacPad, Zi = () => {
    const e = i();
    return e && {
      ...e,
      themes: { ...e.themes || {}, darkMode: !v.classList.contains("light") },
      callService: (t, o, r, ...c) => e.callService(t, ...ct(t, o, r), ...c)
    };
  }, $s = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", bs = (e) => {
    !e.shadowRoot || e.shadowRoot.querySelector("style[data-tf]") || (e.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: $s })).dataset.tf = "");
  }, nn = /* @__PURE__ */ new Map(), on = new ResizeObserver((e) => e.forEach(({ target: t }) => {
    const o = t.parentElement;
    !o || !t.offsetHeight || (o.style.removeProperty("min-height"), nn.set(o.dataset.dac, o.offsetHeight));
  }));
  function Kt(e) {
    e.querySelectorAll("[data-dac]").forEach((t) => {
      const o = t.dataset.dac;
      let r = an.get(o);
      if (!r) {
        const c = o.slice(o.indexOf(":") + 1);
        r = document.createElement(ka), r.setConfig({ type: "custom:" + ka, entity: c, pad: It(c), tap_action: { action: "none" } }), an.set(o, r);
      }
      r.hass = Zi(), r.parentNode !== t && t.replaceChildren(r), !r.offsetHeight && nn.has(o) && (t.style.minHeight = nn.get(o) + "px"), on.observe(r), bs(r);
    });
  }
  function Mo() {
    const e = Zi();
    an.forEach((t, o) => {
      t.isConnected ? t.hass = e : an.delete(o);
    });
  }
  customElements.whenDefined(ka).then(() => {
    k && (E != null && E.querySelector("[data-tf]")) && sd(fo);
  });
  const rn = (e, t, o) => ge.has(e + "|" + t) ? ge.get(e + "|" + t) : o;
  function Zo(e) {
    var h;
    const t = M[e], o = t.attributes, r = e.split(".")[0], c = (p, g) => ({ act: Lt(p, "toggle", e), label: g });
    if (r === "light") {
      const p = t.state === "on", g = us(e), [w, _] = ya(e), N = rn("bright", e, En(t));
      p && La(e, En(t));
      const T = rn("ct", e, p && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), P = rn("hue", e, p && wo.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null);
      return { on: p, button: c("light", "Turn " + Pe(e) + (p ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Oa(e) && Ta("bright", e, N / 100, Pe(e) + " brightness", N + "%", !1, p ? null : zo[e] ?? null),
        g.includes("color_temp") && Ta("ct", e, T == null ? null : (T - w) / (_ - w), Pe(e) + " warm to cool", T == null ? "" : Math.round(T) + " kelvin", !0),
        g.some((te) => wo.includes(te)) && Ta("hue", e, P == null ? null : P / 360, Pe(e) + " colour", "", !0)
      ] };
    }
    if (r === "climate") {
      const p = o.target_temp_step || 0.5, g = Number(o.temperature);
      return { on: t.state !== "off", tone: t.state === "cool" || o.hvac_action === "cooling" ? "cool" : "heat", button: c("climate", "Turn " + Pe(e) + (t.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(g) && Go("Target temperature", Ot(g) + " °C", Lt("climate", "set_temperature", e, { temperature: g - p }), Lt("climate", "set_temperature", e, { temperature: g + p })),
        oo("tfSeg", "Mode", (o.hvac_modes || []).map((w) => ({ label: Rt(w), act: Lt("climate", "set_hvac_mode", e, { hvac_mode: w }), pressed: t.state === w })))
      ] };
    }
    if (r === "cover") {
      const p = t.state === "opening" || t.state === "closing", g = t.state === "closed", w = ci(e), _ = Oo(e);
      return { on: !g, tone: "blue", icon: Du[fp(t)][g ? 1 : 0], button: c("cover", (g ? "Open " : "Close ") + Pe(e)), parts: ["blocks", "tilt", "buttons"], sections: [
        Dt(e, Eu) && Cr(e, w),
        _ != null && Tr(e, _),
        gs(e, w, p)
      ] };
    }
    if (r === "humidifier") {
      const p = Number(o.humidity);
      return { on: t.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: c("humidifier", "Turn " + Pe(e) + (t.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(p) && Go("Target humidity", p + "%", Lt("humidifier", "set_humidity", e, { humidity: p - 1 }), Lt("humidifier", "set_humidity", e, { humidity: p + 1 })),
        ((h = o.available_modes) == null ? void 0 : h.length) && oo("tfSeg", "Mode", o.available_modes.map((g) => ({ label: Rt(g), act: Lt("humidifier", "set_mode", e, { mode: g }), pressed: o.mode === g })))
      ] };
    }
    if (r === "media_player") {
      const p = t.state === "playing", g = t.state === "off" || t.state === "standby", w = rn("vol", e, o.volume_level), _ = g ? { act: Lt("media_player", Dt(e, fg) ? "turn_on" : "toggle", e), label: "Turn " + Pe(e) + " on" } : t.state === "playing" || t.state === "paused" ? { act: Lt("media_player", "media_play_pause", e), label: (p ? "Pause " : "Play ") + Pe(e) } : { act: Lt("media_player", Dt(e, hg) ? "turn_off" : "toggle", e), label: "Turn " + Pe(e) + " off" };
      return { on: !g, tone: "blue", art: !g && o.entity_picture ? o.entity_picture : null, button: _, parts: ["playback", "volume"], sections: g ? [] : [
        (Dt(e, Tu) || Dt(e, Lu) || Dt(e, Cu) || Dt(e, Au)) && oo("tfSeg", "Playback", [
          { html: fc.prev, aria: "Previous", act: Lt("media_player", "media_previous_track", e), disabled: !Dt(e, Tu) },
          { html: p ? fc.pause : fc.play, aria: p ? "Pause" : "Play", act: Lt("media_player", "media_play_pause", e), disabled: !(Dt(e, Cu) || Dt(e, Au)) },
          { html: fc.next, aria: "Next", act: Lt("media_player", "media_next_track", e), disabled: !Dt(e, Lu) }
        ]),
        Dt(e, ug) && w != null && Ta("vol", e, w, Pe(e) + " volume", Math.round(w * 100) + "%")
      ] };
    }
    if (r === "vacuum") {
      const p = t.state === "cleaning", g = o.rooms || [], w = (N) => g.includes(N) ? g.filter((T) => T !== N) : g.concat(N), _ = Lt("vacuum", p ? "pause" : "start", e, Bi(e) ? { rooms: g } : null);
      return { on: p || t.state === "returning", tone: "blue", button: { act: _, label: (p ? "Pause " : "Start ") + Pe(e) }, parts: ["controls", "rooms"], sections: [
        oo("tfSeg", Pe(e), [
          { label: p ? "Pause" : "Start", act: _ },
          { label: "Dock", act: Lt("vacuum", "return_to_base", e), disabled: t.state === "docked" },
          { label: "Locate", act: Lt("vacuum", "locate", e) }
        ]),
        Bi(e) && oo("tfChips", "Rooms to clean", gt.rooms.filter((N) => N.id !== "balcony").map((N) => ({ label: N.name, act: Lt("vacuum", "set_rooms", e, { rooms: w(N.name) }), pressed: g.includes(N.name) })))
      ] };
    }
    if (r === "lock") {
      const p = t.state === "locked";
      return { on: !p, tone: "heat", button: { act: Lt("lock", p ? "unlock" : "lock", e), label: (p ? "Unlock " : "Lock ") + Pe(e) }, parts: ["controls"], sections: [
        oo("tfSeg", Pe(e), [
          { label: "Lock", act: Lt("lock", "lock", e), pressed: p },
          { label: "Unlock", act: Lt("lock", "unlock", e), pressed: t.state === "unlocked" },
          Dt(e, Eg) && { label: "Open", act: Lt("lock", "open", e), pressed: t.state === "open" }
        ])
      ] };
    }
    if (r === "alarm_control_panel") {
      const p = t.state === "disarmed";
      return { on: !p, tone: t.state === "triggered" ? "alarm" : "blue", button: { act: Lt("alarm_control_panel", p ? "alarm_arm_away" : "alarm_disarm", e), label: p ? "Arm " + Pe(e) + ", away" : "Disarm " + Pe(e) }, parts: ["controls"], sections: [
        oo("tfSeg", Pe(e), Dg.filter(([, , , g]) => !g || Dt(e, g)).map(([g, w, _]) => ({ label: w, act: Lt("alarm_control_panel", _, e), pressed: t.state === g })))
      ] };
    }
    if (r === "valve") {
      const p = t.state === "open";
      return { on: p, tone: "blue", icon: "mdi:sprinkler-variant", button: c("valve", (p ? "Close " : "Open ") + Pe(e)), parts: ["controls"], sections: [
        oo("tfSeg", Pe(e), [
          { label: "Open", act: Lt("valve", "open_valve", e), pressed: p },
          { label: "Close", act: Lt("valve", "close_valve", e), pressed: !p }
        ])
      ] };
    }
    if (mp.includes(r)) {
      const p = t.state === "on";
      return { on: p, button: c(r, "Turn " + Pe(e) + (p ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: Pe(e) }, sections: [] };
  }
  const f = (e) => (Number.isInteger(Number(e)) ? String(Number(e)) : Ot(e)) + "°";
  function b(e) {
    var Q;
    const t = (j) => e.readings.find((xe) => wt(xe).device_class === j), o = t("temperature"), r = t("humidity"), c = (j) => {
      var xe;
      return Number((xe = M[j]) == null ? void 0 : xe.state);
    }, h = (j) => e.actions.filter((xe) => j.test(xe)), p = e.lights.filter((j) => {
      var xe;
      return ((xe = M[j]) == null ? void 0 : xe.state) === "on";
    }), g = h(/^cover\./), w = g.filter((j) => {
      var xe;
      return ((xe = M[j]) == null ? void 0 : xe.state) !== "closed";
    }), _ = [...new Set(g.map((j) => fp(M[j])))], N = h(/^climate\./)[0], T = h(/^humidifier\./)[0], P = h(/^media_player\./), te = P.find((j) => {
      var xe;
      return ((xe = M[j]) == null ? void 0 : xe.state) === "playing";
    }) || P.find((j) => {
      var xe;
      return ((xe = M[j]) == null ? void 0 : xe.state) === "paused";
    }), se = e.plugs.filter((j) => {
      var xe;
      return ((xe = M[j]) == null ? void 0 : xe.state) === "on";
    }), K = [];
    if (o && Number.isFinite(c(o)) && K.push({ key: "temp", id: o, kind: "reading", icon: Ni(o), label: "Temperature", value: Ot(c(o)) + "°" }), r && Number.isFinite(c(r)) && K.push({ key: "hum", id: r, kind: "reading", icon: Ni(r), label: "Humidity", value: Math.round(c(r)) + "%" }), e.lights.length && K.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Ni("", "mdi:lightbulb"),
      label: "Lights",
      value: p.length ? p.length + " of " + e.lights.length + " on" : "All off",
      short: p.length ? p.length + " on" : "Off",
      on: p.length > 0,
      light: p.length ? Fo(p[0]) : "",
      acts: e.lights.map((j) => ["light", p.length ? "turn_off" : "turn_on", j]),
      aria: (p.length ? "Turn off" : "Turn on") + " the lights in " + e.name
    }), g.length) {
      const j = _.length === 1 ? wg[_[0]] : "covers", xe = Math.round(g.reduce((Z, je) => Z + $n(je), 0) / g.length);
      K.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: w.length ? Dn([146, 107, 199]) : "",
        icon: Ni("", ((Q = Du[_[0]]) == null ? void 0 : Q[w.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Rt(j),
        value: xe <= 0 ? "Closed" : xe >= 100 ? "Open" : xe + "% open",
        short: xe <= 0 ? "Closed" : xe + "%",
        on: w.length > 0,
        acts: g.map((Z) => ["cover", w.length ? "close_cover" : "open_cover", Z]),
        aria: (w.length ? "Close the " : "Open the ") + j + " in " + e.name
      });
    }
    if (N) {
      const j = wt(N), xe = M[N].state === "off";
      K.push({
        key: "climate",
        kind: "control",
        tone: j.hvac_action === "cooling" ? "cool" : "heat",
        light: xo(N) ? Dn(xo(N)) : "",
        icon: Ni(N),
        label: Pe(N),
        value: xe ? "Off" : Rt(j.hvac_action || M[N].state) + " · " + f(j.temperature),
        short: xe ? "Off" : f(j.temperature),
        on: !xe,
        acts: [["climate", "toggle", N]],
        aria: "Turn " + Pe(N) + (xe ? " on" : " off")
      });
    }
    if (T) {
      const j = M[T].state === "on";
      K.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: j ? Dn([33, 150, 243]) : "",
        icon: Ni("", "mdi:air-humidifier"),
        label: Pe(T),
        value: j ? "On · " + wt(T).humidity + "%" : "Off",
        short: j ? wt(T).humidity + "%" : "Off",
        on: j,
        acts: [["humidifier", "toggle", T]],
        aria: "Turn " + Pe(T) + (j ? " off" : " on")
      });
    }
    if (P.length) {
      const j = te || P[0], xe = M[j], Z = xe.state === "playing";
      K.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: xo(j) ? Dn(xo(j)) : "",
        icon: Ni(j),
        label: Pe(j),
        value: Yt(j),
        short: Z ? "Playing" : xe.state === "paused" ? "Paused" : Rt(xe.state),
        on: Z,
        acts: [["media_player", xe.state === "playing" || xe.state === "paused" ? "media_play_pause" : "toggle", j]],
        aria: (Z ? "Pause " : "Play ") + Pe(j)
      });
    }
    return e.plugs.length && K.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: se.length ? Dn([255, 193, 7]) : "",
      icon: Ni("", "mdi:power-plug"),
      label: "Plugs",
      value: se.length ? se.length + " of " + e.plugs.length + " on" : "All off",
      short: se.length ? se.length + " on" : "Off",
      on: se.length > 0,
      acts: e.plugs.map((j) => ["switch", se.length ? "turn_off" : "turn_on", j]),
      aria: (se.length ? "Turn off" : "Turn on") + " the plugs in " + e.name
    }), e.alerts.forEach((j) => K.push(wt(j).device_class === "moisture" ? { key: "alert:" + j, kind: "alert", icon: Ni(j), label: "Water leak" } : { key: "note:" + j, kind: "note", icon: Ni(j), label: Pe(j) + " " + Yt(j).toLowerCase() })), K;
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
  }, C = (e, t, o) => '<button class="' + t + (e.on ? " on" : "") + '" type="button" data-tone="' + e.tone + '" data-acts="' + Vi(e.acts) + '" aria-label="' + X(e.aria) + '" aria-pressed="' + e.on + '">' + o + "</button>", H = (e) => '<button class="tfAName" type="button" data-go="' + X(e.id) + '" aria-label="Open ' + X(e.name) + '">' + X(e.name) + "</button>";
  function U(e, t, o = !1) {
    const r = t.find((g) => g.key === "lights"), c = !!(r != null && r.on), h = "", p = '<span class="tfAreaGlyph"' + la("area:" + e.id, e.icon || "mdi:texture-box", e.name) + "></span>";
    return o || !r ? '<span class="tfIcon tfAreaIcon' + (c ? " on" : "") + '"' + h + ' aria-hidden="true">' + p + "</span>" : '<button class="tfIcon tfAreaIcon' + (c ? " on" : "") + '" type="button"' + h + ' data-acts="' + Vi(r.acts) + '" aria-label="' + X(r.aria) + '" aria-pressed="' + c + '">' + p + "</button>";
  }
  const $ = (e) => e.filter((t) => t.kind === "alert" || t.kind === "note").map((t) => '<span class="sourceTag">' + X(t.label) + "</span>").join(" "), fe = (e) => e.readings.find((t) => wt(t).device_class === "temperature") || [...e.readings, ...e.solar, ...e.openings, ...e.actions, ...e.plugs].find((t) => M[t]) || null, ee = (e, t) => {
    const o = Pe(t);
    return o.toLowerCase().startsWith(e.name.toLowerCase() + " ") ? Rt(o.slice(e.name.length + 1)) : o;
  };
  function be(e) {
    const t = M[e], o = wt(e), r = e.split(".")[0], c = Number(t.state);
    if (t.state === "unavailable") return { text: "Unavailable" };
    if (r === "sensor" && Number.isFinite(c)) {
      if (o.device_class === "temperature") return { text: f(c) };
      const h = o.unit_of_measurement || "";
      return h === "%" ? { text: Math.round(c) + "%" } : { text: Ot(c, Number.isInteger(c) ? 0 : 1), unit: h };
    }
    if (r === "climate" && (o.current_temperature ?? o.temperature) != null) return { text: f(o.current_temperature ?? o.temperature) };
    if (r === "light") return { text: t.state !== "on" ? "Off" : Oa(e) ? En(t) + "%" : "On" };
    if (r === "cover") {
      const h = $n(e);
      return { text: h <= 0 ? "Closed" : h >= 100 ? "Open" : h + "%" };
    }
    return r === "humidifier" ? { text: t.state === "on" ? o.humidity + "%" : "Off" } : r === "media_player" ? { text: t.state === "playing" ? "Playing" : t.state === "paused" ? "Paused" : Rt(t.state) } : { text: Yt(e) };
  }
  const ye = (e, t, o) => {
    const r = o.find((g) => g.key === "temp"), c = o.find((g) => g.key === "hum"), h = wt(t), p = M[t].state === "off";
    return t.startsWith("climate.") ? [ee(e, t), p ? "Off" : Rt(h.hvac_action || M[t].state) + (h.temperature != null ? " · " + f(h.temperature) : ""), c && c.value + " humidity"].filter(Boolean).join(" · ") : [!(r && r.id === t) && ee(e, t), r && r.id !== t && r.value, c && c.id !== t && c.value + " humidity"].filter(Boolean).join(" · ");
  };
  function Ae(e, t, o) {
    const r = o && be(o), c = o ? ye(e, o, t) : "", h = (w) => {
      const _ = y(e, w.key);
      return _.length === 1 ? _[0] : "group:" + e.id + ":" + w.key;
    }, p = t.filter((w) => w.kind === "control").slice(0, 4).map((w) => '<div class="tfATile' + (w.on ? " on" : "") + '" data-tone="' + w.tone + '"' + (w.light ? ' data-light style="' + w.light + '"' : "") + ">" + C(w, "tfIcon", w.icon) + '<button class="tfName" type="button" data-more="' + X(h(w)) + '" aria-label="' + X(e.name + " " + w.label.toLowerCase() + ", " + w.value + ". Open") + '"><span class="activityRowName">' + X(w.label) + '</span><span class="activityRowMeta">' + X(w.value) + "</span></button></div>"), g = $(t);
    return '<div class="workoutPanelTop">' + U(e, t) + '<div class="tfATitle">' + H(e) + "</div>" + (g ? '<div class="tfATags">' + g + "</div>" : "") + "</div>" + (o ? '<button class="tfABig" type="button" data-more="' + X(o) + '" aria-label="' + X(Pe(o) + ", " + Yt(o) + ". More info") + '"><span class="tfABigMain' + (r.text.length > 7 ? " long" : "") + '">' + X(r.text) + (r.unit ? '<span class="tfABigUnit">' + X(r.unit) + "</span>" : "") + "</span>" + (c ? '<span class="tfABigSub">' + X(c) + "</span>" : "") + "</button>" : "") + (p.length ? '<div class="tfATiles">' + p.join("") + "</div>" : "");
  }
  function et(e) {
    const t = e.id === B, o = b(e), r = fe(e), c = r && be(r), h = [...o.filter((p) => p.kind === "control"), ...o.filter((p) => p.kind !== "control" && p.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (t ? " active" : "") + '" data-area="' + X(e.id) + '" tabindex="0" aria-expanded="' + t + '" aria-label="' + X(e.name) + '"><div class="panelExpanded"' + (t ? "" : " inert") + ">" + Ae(e, o, r) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + U(e, o, !0) + '<span class="tfACName">' + X(e.name) + '</span></div><span class="tfACMain">' + (c ? X(c.text + (c.unit ? " " + c.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + h.map((p) => '<span class="tfACTile"><span class="tfIcon' + (p.kind === "alert" ? " alert" : "") + '"' + (p.on && p.light ? ' data-light style="' + p.light + '"' : "") + ">" + p.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let We = [];
  const _e = () => {
    var t;
    const e = new Set(((t = Ne.dash) == null ? void 0 : t.areasOff) || []);
    return We.filter((o) => !e.has(o.id));
  }, tt = (e) => {
    var o;
    const t = _e();
    return t.some((r) => r.id === B) || (B = ((o = t[0]) == null ? void 0 : o.id) || null), '<div class="tfAreas" data-tf data-k="areas" style="order:' + e + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + t.map(et).join("") + "</section></div>";
  }, ze = (e) => e.startsWith("room:"), Ee = (e) => We.find((t) => "room:" + t.id === e);
  function vt(e, t) {
    const o = b(e), r = fe(e), c = r && be(r), h = r ? ye(e, r, o) : "", p = c ? c.text + (c.unit ? " " + c.unit : "") : "", g = (P) => {
      const te = y(e, P.key);
      return te.length === 1 ? te[0] : "group:" + e.id + ":" + P.key;
    }, w = o.filter((P) => P.kind === "control").slice(0, 4), _ = (P) => P.on && P.light ? ' data-light style="' + P.light + '"' : "", N = w.map((P) => '<button class="tfIcon' + (P.on ? " on" : "") + '" type="button" data-tone="' + P.tone + '"' + _(P) + ' data-more="' + X(g(P)) + '" aria-label="' + X(P.label + ", " + P.value + ". Open its controls") + '">' + P.icon + "</button>"), T = w.map((P) => '<button class="tfRoomDev" type="button" data-more="' + X(g(P)) + '" aria-label="' + X(P.label + ", " + P.value + ". Open its controls") + '"><span class="tfIcon' + (P.on ? " on" : "") + '" data-tone="' + P.tone + '"' + _(P) + ">" + P.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + X(P.label) + '</span><span class="activityRowMeta">' + X(P.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + X(t) + '" data-go="' + X(e.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + la("area:" + e.id, e.icon || "mdi:texture-box", e.name) + '></span></span><button class="tfName" type="button" data-go="' + X(e.id) + '" aria-label="Open ' + X(e.name) + '"><span class="activityRowName">' + X(e.name) + "</span>" + (p || h ? '<span class="activityRowMeta">' + (p ? '<span class="tfRoomInline">' + X(p) + (h ? " · " : "") + "</span>" : "") + X(h) + "</span>" : "") + "</button></div>" + (p ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + X(p) + "</span>" + (h ? '<span class="tfRoomSub">' + X(h) + "</span>" : "") + "</div>" : "") + (N.length ? '<div class="tfRoomDevices">' + N.join("") + '</div><div class="tfRoomHeads">' + T.join("") + "</div>" : "") + "</div>";
  }
  const ot = () => [
    { key: "home", name: "Home", ids: gt.homeVacuums },
    ...gt.rooms.map((e) => ({ key: "room:" + e.id, name: e.name, room: e, ids: e.actions }))
  ], Pt = (e, t, o) => e + " " + (e === 1 ? t : o), Ie = () => (Ne.favourites ?? mo.favorite_entities ?? []).filter((e) => M[e]);
  function oa() {
    if (!ia) {
      const t = Object.entries(Xe).sort((r, c) => c[1] - r[1]).map(([r]) => r), o = gt.rooms.flatMap((r) => r.actions);
      ia = [.../* @__PURE__ */ new Set([...go, ...t, ...o.filter((r) => Zo(r).on), ...o])];
    }
    const e = Ie();
    return ia.filter((t) => M[t] && M[t].state !== "unavailable" && !e.includes(t));
  }
  let ra = !1;
  function $a() {
    if (!ra || Ne.favSeeded || !gt.rooms.length || A) return;
    const e = (o) => Object.keys(M).find((r) => Bi(r) && o(r)), t = [e((o) => o.startsWith("climate.")), e((o) => o.startsWith("cover.") && /curtain/.test(o)), e((o) => o.startsWith("valve.")), gt.security.locks[0]];
    Ne = { ...Ne, favourites: [.../* @__PURE__ */ new Set([...Ne.favourites ?? mo.favorite_entities ?? [], ...t.filter(Boolean)])], favSeeded: !0 }, ao();
  }
  const qa = () => Ne.suggest ?? !mo.hide_suggested_entities;
  function Lr() {
    const e = new Set(A ? [] : Ne.favHidden || []), t = Ie().filter((r) => !e.has(r)), o = qa() ? oa().filter((r) => !e.has(r) && To(r)) : [];
    return A && !ed() ? [...t, ...o] : [...t, ...o].slice(0, Rg);
  }
  const xn = (e) => {
    const t = Ie().includes(e);
    return '<button class="tfStar" type="button" data-star="' + X(e) + '" aria-pressed="' + t + '" aria-label="Favourite: ' + X(Pe(e)) + '">' + Ag(t) + "</button>";
  };
  function io(e, { area: t = !1, star: o = !1, plain: r = !1, say: c = null, alert: h = !1 } = {}) {
    var se, K, Q, j, xe, Z;
    const p = r && ((xe = (se = i()) == null ? void 0 : se.devices) == null ? void 0 : xe[(j = (Q = (K = i()) == null ? void 0 : K.entities) == null ? void 0 : Q[e]) == null ? void 0 : j.device_id]), g = p && (p.name_by_user || p.name) || Pe(e), w = e.split(".")[0], _ = !r && vd.includes(w) ? Zo(e) : null, N = _ ? _.on : ["on", "open", "playing"].includes((Z = M[e]) == null ? void 0 : Z.state), T = r ? null : _ ? _.button : mp.includes(w) ? { act: Lt(w, "toggle", e), label: "Turn " + Pe(e) + (N ? " off" : " on") } : w === "scene" || w === "script" ? { act: Lt(w, "turn_on", e), label: "Run " + Pe(e) } : null, P = (c ?? Yt(e)) + (t && pt.get(e) ? " · " + pt.get(e) : ""), te = (_ == null ? void 0 : _.icon) || bn(e);
    return '<div class="activityRow' + (T ? " tfPlug" : "") + (N ? " on" : "") + (o ? " tfPick" : "") + (h ? " alert" : "") + '" data-k="' + X((t ? "fav:" : "row:") + e) + '" data-tone="' + (w === "light" ? "light" : (_ == null ? void 0 : _.tone) || "blue") + '"' + di(e) + ">" + (T && !o ? '<button class="tfIcon" type="button" data-act="' + T.act + '" aria-label="' + X(T.label) + '"' + la(e, te) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + la(e, te) + "></div>") + '<button class="tfName" type="button" data-more="' + X(e) + '" aria-label="' + X(g + ", " + P + ". More info") + '"><span class="activityRowName">' + X(g) + '</span><span class="activityRowMeta">' + X(P) + "</span></button>" + (o ? xn(e) : "") + "</div>";
  }
  const At = () => {
    var e;
    return M[(e = Ne.sources) == null ? void 0 : e.weather] ? Ne.sources.weather : M["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(M).find((t) => t.startsWith("weather."));
  };
  function Ko() {
    var o;
    const e = (r) => Object.keys(M).filter((c) => c.startsWith("binary_sensor.") && r.includes(wt(c).device_class));
    return ((o = Zn.alert_entities) != null && o.length ? Zn.alert_entities : [...e(["moisture", "smoke", "gas"]).map((r) => ({ entity: r, severity: "alert" })), ...e(vc).map((r) => ({ entity: r, severity: "warning" }))]).filter((r) => M[r.entity]).map((r) => ({ ...r, on: ["on", "open", "unlocked", "triggered", "problem"].includes(M[r.entity].state) }));
  }
  function Rn() {
    const e = Object.keys(gd), t = /* @__PURE__ */ new Set(), o = [];
    (mo.shortcuts || []).forEach((h) => {
      if (h.type === "summary") {
        if (!e.includes(h.key) || t.has(h.key)) return;
        t.add(h.key);
      }
      o.push(h);
    }), e.forEach((h) => {
      t.has(h) || o.push({ type: "summary", key: h });
    });
    const r = Co().sumOrder || [], c = (h) => h.type === "summary" && r.includes(h.key) ? r.indexOf(h.key) : r.length;
    return r.length ? o.map((h, p) => [h, p]).sort((h, p) => c(h[0]) - c(p[0]) || h[1] - p[1]).map(([h]) => h) : o;
  }
  function So() {
    var Q;
    const e = ((Q = i()) == null ? void 0 : Q.entities) || {}, t = (j) => wt(j).device_class, o = Object.keys(M).filter((j) => j.startsWith("sensor.") && t(j) === "battery" || j.startsWith("binary_sensor.") && ["battery", "problem"].includes(t(j))), r = gt.rooms.flatMap((j) => j.plants.map((xe) => xe.id));
    if (!o.length && !r.length) return null;
    const c = (j) => {
      var Z;
      const xe = (Z = e[j]) == null ? void 0 : Z.device_id;
      return !!xe && Object.keys(M).some((je) => {
        var Wt;
        return je.startsWith("binary_sensor.") && ((Wt = e[je]) == null ? void 0 : Wt.device_id) === xe && t(je) === "battery_charging" && M[je].state === "on";
      });
    }, h = (j) => j.startsWith("vacuum.") ? wt(j).battery_level <= 20 && M[j].state !== "docked" : j.startsWith("binary_sensor.") ? t(j) === "battery" && M[j].state === "on" : parseFloat(M[j].state) <= 20 && !c(j), p = [...o, ...gt.vacuums].filter((j) => M[j] && h(j)), g = [...o.filter((j) => t(j) === "problem" && M[j].state === "on"), ...r.filter((j) => {
      var xe;
      return ((xe = M[j]) == null ? void 0 : xe.state) === "problem";
    })], w = o.filter((j) => M[j].state === "unavailable"), _ = [.../* @__PURE__ */ new Set([...p, ...g, ...w])], N = (j) => {
      const xe = parseFloat(M[j].state);
      return t(j) === "battery" && Number.isFinite(xe) ? xe : 101;
    }, T = [...r, ...gt.vacuums, ...[...o].sort((j, xe) => N(j) - N(xe))].filter((j) => M[j] && !_.includes(j)), P = /* @__PURE__ */ new Map();
    T.forEach((j) => {
      var Z;
      const xe = ((Z = gt.areaOf) == null ? void 0 : Z.call(gt, j)) || "";
      P.set(xe, [...P.get(xe) || [], j]);
    });
    const te = (j) => {
      const xe = gt.rooms.findIndex((Z) => Z.id === j);
      return j === "" ? 1 / 0 : xe < 0 ? gt.rooms.length : xe;
    }, se = [...P.keys()].sort((j, xe) => te(j) - te(xe)), K = (j) => {
      var xe, Z, je, Wt;
      return ((xe = gt.rooms.find((st) => st.id === j)) == null ? void 0 : xe.name) || ((Wt = (je = (Z = i()) == null ? void 0 : Z.areas) == null ? void 0 : je[j]) == null ? void 0 : Wt.name) || j;
    };
    return {
      value: [p.length && Pt(p.length, "low battery", "low batteries"), g.length && Pt(g.length, "problem", "problems"), w.length && Pt(w.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: _, alert: !0 }, ...se.map((j) => ({ name: j ? K(j) : se.length > 1 ? "Other devices" : "Devices", ids: P.get(j) }))].filter((j) => j.ids.length)
    };
  }
  const Co = () => A ? Ne.home || {} : Ne, mi = (e) => _u.includes(e) ? (Co().shownSums || []).includes(e) : !(Co().hiddenSums || []).includes(e);
  function Ar(e, t, o) {
    const r = e.flatMap((P) => o(P, /^cover\./)), c = r.filter((P) => {
      var te;
      return ["open", "opening"].includes((te = M[P]) == null ? void 0 : te.state);
    }).length, h = Object.keys(M).filter((P) => P.startsWith("person.")), p = h.filter((P) => {
      var te;
      return ((te = M[P]) == null ? void 0 : te.state) === "home";
    }).length, g = gt.security.openings.filter((P) => M[P]), w = g.filter((P) => M[P].state === "on").length, _ = Object.keys(M).filter((P) => P.startsWith("binary_sensor.") && wt(P).device_class === "moisture"), N = _.filter((P) => M[P].state === "on").length, T = gt.vacuums.filter((P) => M[P]);
    return {
      covers: r.length && { value: c ? c + " open" : "All closed", groups: t((P) => o(P, /^cover\./)) },
      people: h.length && { value: p ? p + " home" : "Nobody home", groups: [{ name: "People", ids: h }] },
      openings: g.length && { value: w ? w + " open" : "All closed", groups: [{ name: "Doors and windows", ids: g }] },
      leaks: _.length && { value: N ? Pt(N, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: _ }] },
      vacuum: T.length && { value: Rt(M[T[0]].state), groups: [{ name: "Vacuum", ids: T }] }
    };
  }
  function Na(e = !1) {
    var Da;
    const t = gt.rooms, o = gt.security, r = (Qe, St) => Qe.actions.filter((On) => St.test(On)), c = (Qe) => t.map((St) => ({ name: St.name, ids: Qe(St) })).filter((St) => St.ids.length), h = t.flatMap((Qe) => Qe.lights), p = h.filter((Qe) => {
      var St;
      return ((St = M[Qe]) == null ? void 0 : St.state) === "on";
    }).length, g = t.map((Qe) => Qe.readings.find((St) => wt(St).device_class === "temperature")).filter(Boolean).map((Qe) => Number(M[Qe].state)).filter(Number.isFinite), [w, _] = [Ot(Math.min(...g)), Ot(Math.max(...g))], N = t.flatMap((Qe) => r(Qe, /^media_player\./)), T = N.filter((Qe) => {
      var St;
      return ((St = M[Qe]) == null ? void 0 : St.state) === "playing";
    }).length, P = Ko(), te = P.filter((Qe) => Qe.severity === "warning" && Qe.on).length, se = o.locks.filter((Qe) => {
      var St;
      return ["unlocked", "jammed", "open"].includes((St = M[Qe]) == null ? void 0 : St.state);
    }).length, K = o.alarms.filter((Qe) => {
      var St;
      return ((St = M[Qe]) == null ? void 0 : St.state) === "disarmed";
    }).length, Q = te ? Pt(te, "warning", "warnings") : null, j = se ? se + " unlocked" : K ? K + " disarmed" : Q ? null : "All secure", xe = So(), Z = t.flatMap((Qe) => Qe.solar), je = Z.find((Qe) => Qe.endsWith("_power")), Wt = {
      light: h.length && { value: p ? p + " on" : "All off", groups: c((Qe) => Qe.lights) },
      climate: g.length && { value: w === _ ? w + "°" : w + " - " + _ + "°", groups: c((Qe) => [...Qe.readings.filter((St) => ["temperature", "humidity"].includes(wt(St).device_class)), ...r(Qe, /^(climate|humidifier)\./)]) },
      security: (o.alarms.length || o.locks.length) && { value: [Q, j].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...o.alarms, ...o.locks] }, { name: "Doors and windows", ids: o.openings }].filter((Qe) => Qe.ids.length) },
      media_players: N.length && { value: T ? T + " playing" : "No media playing", groups: c((Qe) => r(Qe, /^media_player\./)) },
      maintenance: xe,
      energy: gt.grid && { value: pi(Number(((Da = M[je]) == null ? void 0 : Da.state) || 0) * 1e3 + Number(M[gt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...Z, gt.grid] }] },
      ...Ar(t, c, r)
    }, st = [], Vt = P.filter((Qe) => Qe.severity !== "warning" && Qe.on);
    return Vt.length && st.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Pt(Vt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Vt.map((Qe) => Qe.entity) }] }), Rn().forEach((Qe) => {
      Qe.type !== "summary" ? st.push({ key: "path:" + Qe.path, name: Qe.label || Qe.path, icon: Qe.icon || "mdi:link-variant", colour: "", value: "" }) : !Qe.hidden && Wt[Qe.key] && (e || mi(Qe.key)) && st.push({ key: Qe.key, ...gd[Qe.key], ...Wt[Qe.key] });
    }), st;
  }
  const Dl = (e) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + X(e.key) + '" data-k="sum:' + X(e.key) + '" aria-label="' + X(e.name + (e.value ? ", " + e.value : "")) + '"' + (e.key === "alerts" ? ' style="--sum:' + e.colour + ';--sum-ink:#ffffff"' : e.key === "climate" ? ' style="' + Al() + '"' : e.colour && Oi(e.colour) ? ' style="' + Oi(e.colour).slice(1) + '"' : "") + ">" + (e.key === "climate" ? Ut : "") + '<div class="tfIcon" aria-hidden="true"' + la(e.id || "", e.icon, e.name) + '></div><div><div class="activityRowName">' + X(e.name) + "</div>" + (e.value ? '<div class="activityRowMeta">' + X(e.value) + "</div>" : "") + "</div></div>";
  function ws(e) {
    const t = Ie();
    Ne = { ...Ne, favourites: t.includes(e) ? t.filter((o) => o !== e) : [...t, e], favHidden: (Ne.favHidden || []).filter((o) => o !== e) }, ao(), ma();
  }
  function _l(e) {
    document.querySelector("home-assistant") && (de.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function yd(e, t) {
    if (e.startsWith("path:")) {
      _l(e.slice(5));
      return;
    }
    Ue("summary:" + e, t);
  }
  async function sn() {
    const e = (p) => Promise.resolve().then(() => W(p)).catch(() => null), [t, o, r, c] = await Promise.all([
      e({ type: "frontend/get_user_data", key: Ru }),
      e({ type: "frontend/get_system_data", key: "home" }),
      e({ type: "frontend/get_system_data", key: "security" }),
      e({ type: "usage_prediction/common_control" })
    ]), h = (t == null ? void 0 : t.value) || {};
    Ne = { favourites: h.favourites ?? null, sources: h.sources, hiddenSums: h.hiddenSums, shownSums: h.shownSums, home: h.home, dash: h.dash, named: h.named, favHidden: h.favHidden, suggest: h.suggest, favSeeded: h.favSeeded }, mo = (o == null ? void 0 : o.value) || {}, Zn = (r == null ? void 0 : r.value) || {}, go = Array.isArray(c == null ? void 0 : c.entities) ? c.entities : [], ia = null, Object.keys(M).length && ma(), Dr(), ra = !0, $a();
  }
  const Er = "HomeCore";
  async function Dr() {
    var r, c, h;
    const e = location.pathname.split("/")[1], t = Ne.named || [];
    if (!((c = (r = i()) == null ? void 0 : r.user) != null && c.is_admin) || !e || t.includes(e)) return;
    const o = () => {
      Ne = { ...Ne, named: [...t, e] }, ao();
    };
    try {
      const p = (h = await W({ type: "lovelace/dashboards/list" })) == null ? void 0 : h.find((_) => _.url_path === e);
      if (!p || p.mode === "yaml") return;
      if (p.title === Er) {
        o();
        return;
      }
      const g = await W({ type: "lovelace/config", url_path: e }), w = ((g == null ? void 0 : g.views) || []).flatMap((_) => [..._.cards || [], ...(_.sections || []).flatMap((N) => N.cards || [])]);
      if (!w.length || !w.every((_) => (_ == null ? void 0 : _.type) === "custom:move-assistant-card" && _.layout === "test-focus")) return;
      await W({ type: "lovelace/dashboards/update", dashboard_id: p.id, title: Er }), o();
    } catch {
    }
  }
  let xs = null, Xs = 0, Rl = !1;
  const Bl = (e) => {
    const t = e.split(".")[0], o = wt(e).device_class;
    return _g.includes(t) && (t !== "binary_sensor" || vc.includes(o) || !!qu[o]);
  }, _r = (e) => e.startsWith("binary_sensor.") ? qu[wt(e).device_class] : null;
  async function kd() {
    var e;
    if (!(Rl || Date.now() - Xs < 30 * 1e3)) {
      Rl = !0, Xs = Date.now();
      try {
        const t = Object.keys(((e = i()) == null ? void 0 : e.states) || {}).filter(Bl), o = t.length ? await W({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: t }) : null;
        xs = Array.isArray(o) ? o.filter((r) => r.entity_id && r.state != null && r.when) : null;
      } catch {
        xs = null;
      }
      Rl = !1, ma();
    }
  }
  function ys() {
    const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), o = (c) => {
      if (!M[c.entity_id] || !Bl(c.entity_id) || !To(c.entity_id) || ["unavailable", "unknown"].includes(c.state)) return;
      if (_r(c.entity_id)) {
        const p = t.get(c.entity_id);
        c.state === "on" ? (!p || c.when > p.when + 1) && t.set(c.entity_id, { ...c, alarm: !0, cleared: null }) : p && !p.cleared && c.when > p.when && (p.cleared = c.when);
        return;
      }
      const h = e.get(c.entity_id);
      (!h || c.when > h.when + 1) && e.set(c.entity_id, c);
    };
    [...xs || []].sort((c, h) => c.when - h.when).forEach(o);
    const r = xs ? Xs / 1e3 - 5 : 0;
    return Object.keys(M).forEach((c) => {
      var g;
      const h = M[c], p = h.last_changed ? Date.parse(h.last_changed) / 1e3 : 0;
      p > r && o({ entity_id: c, state: h.state, when: p, context_user_id: (g = h.context) == null ? void 0 : g.user_id });
    }), [...e.values(), ...t.values()].sort((c, h) => h.when - c.when).slice(0, Bg);
  }
  function Pl(e) {
    var r;
    const t = e.context_user_id && Object.keys(M).find((c) => c.startsWith("person.") && wt(c).user_id === e.context_user_id);
    if (t) return Pe(t);
    const o = (r = i()) == null ? void 0 : r.user;
    return o && e.context_user_id === o.id ? o.name : ["automation", "script"].includes(e.context_domain) || e.context_event_type === "automation_triggered" ? e.context_name || "Home Assistant" : "";
  }
  function $o(e) {
    const t = e.entity_id.split(".")[0], o = String(e.state);
    return t === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[o] || Rt(o).toLowerCase() : t === "cover" || t === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[o] || Rt(o).toLowerCase() : t === "binary_sensor" ? o === "on" ? "opened" : "closed" : t === "climate" ? o === "off" ? "turned off" : "set to " + Rt(o).toLowerCase() : t === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[o] || Rt(o).toLowerCase() : t === "alarm_control_panel" ? (Ou[o] || Rt(o)).toLowerCase() : t === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[o] || Rt(o).toLowerCase() : o === "on" ? "turned on" : o === "off" ? "turned off" : Rt(o).toLowerCase();
  }
  function ks(e) {
    const t = e.entity_id, o = e.alarm && _r(t), r = Pe(t) + " " + (o ? o[0] : $o(e)), c = o ? ha(e.when * 1e3) + (e.cleared ? " · " + o[1] + " since " + ha(e.cleared * 1e3) : "") : [Pl(e), ha(e.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (o ? " alert" : "") + '"><div class="tfIcon' + (o ? " alert" : "") + '" aria-hidden="true"' + la(t, bn(t)) + '></div><button class="tfName" type="button" data-more="' + X(t) + '" data-at="' + Math.round(e.when * 1e3) + '" aria-label="' + X(r + ", " + c + ". More info") + '"><span class="activityRowName">' + X(r) + '</span><span class="activityRowMeta">' + X(c) + "</span></button></div>";
  }
  let Bn = null, Md = 0;
  const Nl = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Hl() {
    var t;
    if (Date.now() - Md < 5 * 60 * 1e3) return;
    Md = Date.now();
    const e = [];
    try {
      const o = ((t = await W({ type: "energy/get_prefs" })) == null ? void 0 : t.energy_sources) || [], r = (c) => o.filter((h) => h.type === c).flatMap((h) => c === "grid" ? (h.flow_from || []).map((p) => p.stat_energy_from) : [h.stat_energy_from]).filter(Boolean);
      for (const [c, h, p] of [["electricity", "Electricity", r("grid")], ["solar", "Solar", r("solar")], ["gas", "Gas", r("gas")], ["water", "Water", r("water")]]) {
        if (!p.length) continue;
        const g = await Promise.all(p.map((w) => Promise.resolve(W({ type: "recorder/statistic_during_period", statistic_id: w, calendar: { period: "day" }, types: ["change"] })).then((_) => Number(_ == null ? void 0 : _.change) || 0, () => 0)));
        e.push({ key: c, name: h, id: p[0], ids: p, value: g.reduce((w, _) => w + _, 0), unit: wt(p[0]).unit_of_measurement || (c === "gas" || c === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Bn = e, ma();
  }
  let Ki = null, gi = [];
  function Il() {
    var h;
    const e = gi = Bn != null && Bn.length ? Bn : Nl.map(([p, g, w, _]) => {
      if (p === "solar") {
        const T = Object.keys(M).find((P) => P.endsWith("_solar_today") && !P.includes("made_up_energy"));
        T && Number.isFinite(Number(M[T].state)) && (w = Number(M[T].state));
      }
      const N = "sensor.made_up_energy_" + p;
      return M[N] = { entity_id: N, state: String(w), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: g + " today", unit_of_measurement: _, state_class: "total_increasing" } }, { key: p, name: g, id: N, value: w, unit: _ };
    });
    ue.clear(), e.some((p) => p.id === Ki) || (Ki = e[0].id);
    const t = e.map((p) => {
      const g = Number(p.value).toLocaleString(void 0, { maximumFractionDigits: p.value < 10 ? 2 : 1 }) + " " + p.unit, w = Pg[p.key], _ = p.id === Ki;
      return ue.set(p.id, { name: p.name, text: g, icon: w }), '<div class="activityRow tap' + (_ ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + X(p.id) + '" aria-pressed="' + _ + '" aria-label="' + X(p.name + ", " + g) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + la("", w, p.name) + '></div><div><div class="activityRowName">' + X(p.name) + '</div><div class="activityRowMeta">' + X(g) + "</div></div></div>";
    }), o = e.find((p) => p.id === Ki), r = (((h = Ct().opts.energy) == null ? void 0 : h.graph) || "above") === "below", c = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + X(o.id) + '" role="img" aria-label="' + X(o.name) + ', last 24 hours"></svg></div>';
    return _n("dash:energy", 0, "Energy today", t, c, Na().some((p) => p.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (r ? "" : " graphAbove"));
  }
  function Fl(e) {
    const t = E.querySelector(".tfDash-energy"), o = t == null ? void 0 : t.querySelector(".tfDashGraph svg");
    !o || e === Ki || (Ki = e, t.querySelectorAll("[data-energy-pick]").forEach((r) => {
      const c = r.dataset.energyPick === e;
      r.classList.toggle("picked", c), r.setAttribute("aria-pressed", String(c));
    }), o.dataset.graph = e, o.dataset.drawn = "", vn.set("dash:energy", Il()), nd(!0));
  }
  const Ms = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, Rr = /* @__PURE__ */ new Map();
  async function Br(e) {
    const t = /* @__PURE__ */ new Date(), o = new Date(t).setHours(0, 0, 0, 0), r = t.getHours(), c = t.getMinutes() / 60, h = Array.from({ length: 24 }, (g, w) => w <= r ? 0 : null);
    if (!e.ids) {
      const g = Ms[e.key] || Ms.electricity, w = g.map((N, T) => T < r ? N : T === r ? N * c : 0), _ = w.reduce((N, T) => N + T, 0) || 1;
      return h.map((N, T) => N == null ? null : e.value * w[T] / _);
    }
    const p = Rr.get(e.id);
    if (p && p.day === o && Date.now() - p.at < 5 * 60 * 1e3) return p.hours;
    try {
      const g = await W({ type: "recorder/statistics_during_period", start_time: new Date(o).toISOString(), end_time: t.toISOString(), statistic_ids: e.ids, period: "hour", types: ["change"] });
      e.ids.forEach((N) => ((g == null ? void 0 : g[N]) || []).forEach((T) => {
        const P = typeof T.start == "number" ? T.start : Date.parse(T.start), te = new Date(P).getHours();
        P >= o && te < r && (h[te] += Number(T.change) || 0);
      }));
      const w = new Date(t).setMinutes(0, 0, 0), _ = await Promise.all(e.ids.map((N) => Promise.resolve(W({ type: "recorder/statistic_during_period", statistic_id: N, fixed_period: { start_time: new Date(w).toISOString(), end_time: t.toISOString() }, types: ["change"] })).then((T) => Number(T == null ? void 0 : T.change) || 0, () => 0)));
      h[r] = _.reduce((N, T) => N + T, 0);
    } catch {
    }
    return Rr.set(e.id, { at: Date.now(), day: o, hours: h }), h;
  }
  async function Xo(e, t) {
    const o = await Br(t);
    if (!e.isConnected) return;
    const r = Math.max(120, e.clientWidth || 260), c = Math.max(60, e.clientHeight || 130), h = 18, p = c - 18, g = r / 24, w = g * 0.72, _ = (/* @__PURE__ */ new Date()).getHours(), N = o.map((Q) => Q ?? 0), T = Math.max(0, ...N), P = (Q) => p - (T > 0 ? Q / T * (p - h) : 0), te = (Q) => Q.toLocaleString(void 0, { maximumFractionDigits: Q < 10 ? 2 : 1 }) + " " + t.unit, se = (Q) => String(Q).padStart(2, "0") + ":00", K = T > 0 ? N.indexOf(T) : -1;
    e.setAttribute("viewBox", "0 0 " + r + " " + c), e.setAttribute("aria-label", t.name + " today by the hour: " + te(t.value) + (K >= 0 ? ", most " + te(T) + " at " + se(K) : "")), e.innerHTML = [h, (h + p) / 2, p].map((Q) => '<line x1="0" x2="' + r + '" y1="' + Q + '" y2="' + Q + '" stroke="var(--line)" stroke-width="1"/>').join("") + o.map((Q, j) => Q > 0 ? '<rect x="' + (j * g + (g - w) / 2).toFixed(1) + '" y="' + P(Q).toFixed(1) + '" width="' + w.toFixed(1) + '" height="' + (p - P(Q)).toFixed(1) + '" rx="2" fill="' + (j === _ ? "var(--primary)" : "var(--text)") + '"' + (j === _ ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((Q) => '<text x="' + (Q * g).toFixed(1) + '" y="' + (c - 3) + '">' + String(Q).padStart(2, "0") + "</text>").join("") + (K >= 0 ? '<text x="0" y="11">Most: ' + X(te(T)) + " at " + se(K) + "</text>" : "");
  }
  function Pr(e) {
    var t;
    (t = window.matchMedia) != null && t.call(window, "(prefers-reduced-motion: reduce)").matches || e.querySelectorAll("rect").forEach((o, r) => o.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: r * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function $i(e) {
    var r;
    if ((r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [t, o] = e.querySelectorAll("path");
    lf(e, o, [t].filter(Boolean));
  }
  let vi = null, bi = 0;
  const To = (e) => !e.startsWith("light.") || Ng.includes((pt.get(e) || "").toLowerCase()), Js = () => Math.max(2, so((E == null ? void 0 : E.clientWidth) || 0).n), Sd = (e) => {
    const t = Zo(e);
    return t.sections.map((o, r) => o && (t.parts || [])[r]).filter(Boolean);
  }, Qs = (e) => Sd(e).slice(0, Za(e) - 1);
  function Jo(e) {
    const t = Ct().tiles;
    if (t) return t.filter((r) => M[r] || Ee(r));
    if (!vi) {
      const r = (c) => {
        var h;
        return (((h = M[c]) == null ? void 0 : h.state) === "on" ? 1e6 : 0) + (Xe[c] || 0);
      };
      vi = {
        lights: gt.rooms.flatMap((c) => c.lights).filter((c) => {
          var h;
          return To(c) && ((h = M[c]) == null ? void 0 : h.state) !== "unavailable";
        }).sort((c, h) => r(h) - r(c) || Pe(c).localeCompare(Pe(h))),
        climates: gt.rooms.flatMap((c) => c.actions.filter((h) => h.startsWith("climate.")))
      };
    }
    const o = vi.climates.filter((r) => M[r]).slice(0, e > 3 ? 2 : 1);
    return [...vi.lights.filter((r) => M[r]).slice(0, Math.max(0, e - o.length)), ...o];
  }
  const wi = () => {
    var e;
    return ((e = Ne.home) == null ? void 0 : e.welcome) ?? !0;
  }, Xi = () => {
    var t, o;
    const e = (t = i()) == null ? void 0 : t.user;
    return (e == null ? void 0 : e.name) || ((o = Object.values(M).find((r) => {
      var c;
      return r.entity_id.startsWith("person.") && (e == null ? void 0 : e.id) && ((c = r.attributes) == null ? void 0 : c.user_id) === e.id;
    })) == null ? void 0 : o.attributes.friendly_name) || "";
  }, Nr = () => {
    const e = (/* @__PURE__ */ new Date()).getHours(), t = Xi();
    return (e >= 5 && e < 12 ? "Good morning" : e >= 12 && e < 18 ? "Good afternoon" : "Good evening") + (t ? ", " + t : "");
  }, Cd = (e, t, o, r) => (c) => '<section class="card tfCard tfDashCard ' + e + '" data-tf data-k="' + t + '" aria-label="' + o + '">' + (r ? '<div class="activityHeader">' + (t === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + o + "</button>" : '<div class="activityTitle">' + o + "</div>") + "</div>" : "") + '<div class="activityRows">' + c + "</div></section>";
  function Td(e, t) {
    var h, p;
    e.dash = !0, e.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((A ? wi() : Ct().welcome) ? '<span class="tfGreeting">' + X(Nr()) + "</span>" : "") + X(((p = (h = i()) == null ? void 0 : h.config) == null ? void 0 : p.location_name) || "Home") + "</h1>" }), t.length && e.push({ key: "sums", wrap: (g) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Cd("tfDash-bar", "sums-bar", "Summaries", !1)(g).replace(" data-tf", "") + "</div>", tiles: t.map((g) => ({ key: "sum:" + g.key, html: Dl(g) })) }), !A && _e().length && e.push({ key: "areas", html: tt(0) });
    const o = Lr();
    if (o.length && e.push({ key: "favs", wrap: Cd("tfDash-favs", "favs", "Favourites", !0), tiles: o.map((g) => ({ key: "fav:" + g, html: io(g, { area: !0 }) })) }), A)
      return Hl(), Rd() && e.push({ key: "dash:energy", html: Il() }), bi = Js(), Jo(0).forEach((g) => e.push({
        key: "dash:tile:" + g,
        wrap: (w) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + X(g) + '">' + w + "</div>",
        tiles: [{ key: g, html: vt(Ee(g), g) }]
      })), e;
    const r = ys();
    e.push({ key: "dash:act", html: _n("dash:act", 0, "Activity", r.length ? r.map(ks) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), e.push({ key: "dash:energy", html: Il() });
    const c = Js();
    return bi = c, Jo(c >= 3 ? c : c * 2).forEach((g) => e.push({
      key: "dash:tile:" + g,
      wrap: (w) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + X(g) + '">' + w + "</div>",
      tiles: [{ key: g, html: ze(g) ? vt(Ee(g), g) : Gi(g, !1, Qs(g)) }]
    })), kd(), Hl(), e;
  }
  const Hr = 252, Qt = 16, el = 200, Ss = Math.round(Hr * 1.25), Qo = 60, Pn = Qo + Qt, Ol = 3, ql = {
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
  }, Ir = ["wx", "favs", "act", "energy", "avg"], tl = ["XS", "S", "M", "L", "XL"], Ld = tl.length, Ec = ["Narrow", "Wide", "Really wide"], Dc = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, Cs = (e) => !e.includes(".") || !M[e] || e.startsWith("light.") && Ui(e) ? Ld : Math.min(Ld, Sd(e).length + 1), Za = (e) => {
    const t = Ct().opts[e] || {}, o = Cs(e), r = Number(t.h) || (t.tall ? 5 : Dc[e] || yn);
    return Math.max(1, Math.min(o, r));
  }, yn = 2, _c = 90, Rc = 56, kn = (e) => {
    var t;
    return ql[e] || (e.startsWith("room:") ? ((t = We.find((o) => "room:" + o.id === e)) == null ? void 0 : t.name) || "Area" : Pe(e));
  }, Wl = 409, al = 128;
  let ln = !1, Bt = null, dn = null, Vl = !1, xi = /* @__PURE__ */ new Map(), Lo = 0, Ka = 0;
  const ro = ["title", "sums"], so = (e) => {
    const t = Math.max(1, Math.floor((e + Qt) / (el + Qt)));
    return { n: t, w: Math.max(1, Math.min(Ss, Math.floor((e - (t - 1) * Qt) / t))) };
  }, Bc = () => We.map((e) => "room:" + e.id);
  function Ad() {
    const e = Bc();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(ql).filter((t) => {
        var o, r;
        return !["title", ...((o = Ne.home) == null ? void 0 : o.sums) === !1 ? [] : ["sums"], ...((r = Ne.home) == null ? void 0 : r.favs) === !1 ? [] : ["favs"], ...qr() ? ["wx"] : [], ...Rd() ? ["energy"] : []].includes(t);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(e.map((t) => [t, { h: 5 }])) },
      tiles: e,
      known: nt,
      areasOff: []
    };
  }
  const Ct = () => A ? Ad() : Ji(), Ji = () => {
    let e = { cells: {}, spans: {}, hidden: [], opts: {}, ...Ne.dash || {} };
    e.sumsOff && (e = { ...e, hidden: [...e.hidden, "sums"] });
    const t = nt.filter((o) => !(e.known || []).includes(o) && !e.hidden.includes(o));
    return t.length ? { ...e, hidden: [...e.hidden, ...t] } : e;
  };
  function ei(e) {
    A || (Ne = { ...Ne, dash: { ...e, known: nt } }, ao());
  }
  function Jn() {
    const e = (t) => E.querySelector(t);
    return [
      ["title", e(".tfDashTitle"), "full"],
      ["sums", e(".tfDashBarRow"), "full"],
      ["wx", Kn.wx, 2],
      ["areas", e(".tfAreas"), "areas"],
      ["favs", e(".tfDash-favs"), 2],
      ["act", e(".tfDash-act"), 2],
      ["energy", e(".tfDash-energy"), 2],
      ["avg", Kn.avg, 2],
      ...nt.map((t) => [t, Kn[t], Ll[t] || 1]),
      ...[...E.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => [t.dataset.k, t, 1, !0])
    ].filter(([, t]) => t == null ? void 0 : t.isConnected).map(([t, o, r, c = !1]) => ({ key: t, el: o, span: r, tile: c }));
  }
  const jl = (e, t, o) => {
    var r;
    if (e.span === "full") return t;
    if (e.span === "areas") {
      const c = Math.ceil((Wl + Math.max(0, _e().length - 1) * (al + Qt) + Qt) / (o + Qt));
      return Math.max(Math.min(t, 2), Math.min(c, t - (((r = Ct().cells.areas) == null ? void 0 : r.col) || 0)));
    }
    return Math.min(t, Ct().spans[e.key] ?? e.span);
  }, yi = (e) => Za(e.key);
  function Ed(e, t, o = null) {
    const r = Ct().cells, c = e.every((g) => !r[g.key] || r[g.key].col + g.cols <= t), h = (g) => r[g.key] || { row: 1e9, col: 0 };
    return (() => {
      const g = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Map(), _ = (K, Q, j, xe) => {
        for (let Z = Q; Z < Q + xe; Z++) for (let je = K; je < K + j; je++) if (g.has(je + "," + Z)) return !1;
        return !0;
      }, N = (K, Q, j) => {
        for (let xe = j; xe < j + K.rows; xe++) for (let Z = Q; Z < Q + K.cols; Z++) g.add(Z + "," + xe);
        w.set(K.key, { col: Q, row: j, cols: K.cols, rows: K.rows });
      }, T = (K, Q, j) => {
        for (Q = Math.max(0, Math.min(t - K.cols, Q)), j = Math.max(0, j); !_(Q, j, K.cols, K.rows); ) j++;
        N(K, Q, j);
      }, P = (K) => {
        for (let Q = 0; ; Q++) for (let j = 0; j <= t - K.cols; j++) if (_(j, Q, K.cols, K.rows)) {
          N(K, j, Q);
          return;
        }
      };
      o && T(o, Bt.col, Bt.row);
      const te = e.filter((K) => K !== o), se = (K, Q) => h(K).row - h(Q).row || h(K).col - h(Q).col;
      return c ? (te.filter((K) => r[K.key]).sort(se).forEach((K) => T(K, r[K.key].col, r[K.key].row)), te.filter((K) => !r[K.key]).forEach(P), w) : ([...te].sort(se).forEach(P), w);
    })();
  }
  function ti(e, t) {
    const o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), c = (h, p, g) => {
      for (let w = p; w < p + g.rows; w++) for (let _ = h; _ < h + g.cols; _++) if (o.has(_ + "," + w)) return !1;
      return !0;
    };
    return e.forEach((h) => {
      for (let p = 0; ; p++) {
        let g = 0;
        for (; g <= t - h.cols && !c(g, p, h); ) g++;
        if (!(g > t - h.cols)) {
          for (let w = p; w < p + h.rows; w++) for (let _ = g; _ < g + h.cols; _++) o.add(_ + "," + w);
          r.set(h.key, { col: g, row: p, cols: h.cols, rows: h.rows });
          return;
        }
      }
    }), r;
  }
  function Fr() {
    const e = Ct(), t = new Set(e.hidden), o = Jn().filter((p) => !ro.includes(p.key));
    let r = xi;
    if (!r.size) {
      const p = e.pegs || 4, g = o.filter((w) => !t.has(w.key));
      g.forEach((w) => {
        w.cols = jl(w, p, Hr), w.rows = yi(w) ?? yn;
      }), r = Ed(g, p);
    }
    const c = (p) => !t.has(p.key) && r.get(p.key) || { row: 1e9, col: 0 };
    o.sort((p, g) => c(p).row - c(g).row || c(p).col - c(g).col);
    const h = (e.phone || []).map((p) => o.find((g) => g.key === p && !t.has(p))).filter(Boolean);
    return [...h, ...o.filter((p) => !h.includes(p))];
  }
  const Pc = () => {
    const e = Fr();
    e.forEach((t, o) => t.el.style.setProperty("--o", String(3 + o))), Ts([...Jn().filter((t) => ro.includes(t.key)), ...e].map((t) => t.el));
  };
  function Ts(e) {
    if (Bt) return;
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
  const Or = (e, t) => ei({ ...e, cells: t, pegs: so(E.clientWidth).n });
  function Ha() {
    var xe;
    if (!k || !E) return;
    const e = E.clientWidth, t = e < 2 * Hr + Qt, o = v.classList.contains("tfDash");
    A && (ln = !1), v.classList.toggle("tfOverview", A);
    const { n: r, w: c } = t ? { n: 2, w: Math.floor((e - Qt) / 2) } : so(e);
    bt.classList.add("tfPegs"), bt.style.setProperty("--peg-n", r), bt.style.setProperty("--peg-w", c + "px");
    const h = new Set(Ct().hidden);
    nt.forEach((Z) => {
      var je;
      return (je = Kn[Z]) == null ? void 0 : je.classList.toggle("tfNotAdded", h.has(Z) && !(Bt != null && Bt.fromTray && Bt.key === Z));
    }), xa(), v.classList.toggle("tfBoard", o), v.classList.toggle("tfEditing", o && ln && !t);
    const p = u("dashEditNav");
    !o && oi && rr(!1), p && A ? (p.hidden = !o, oi || (p.classList.remove("active"), p.setAttribute("aria-pressed", "false"), p.setAttribute("aria-label", "Edit Home page"), p.title = "Edit", p.innerHTML = gc)) : p && (p.hidden = !o || t, p.classList.toggle("active", ln), p.setAttribute("aria-pressed", String(ln)), p.setAttribute("aria-label", ln ? "Done editing" : "Edit custom dashboard"), p.title = ln ? "Done" : "Edit", p.innerHTML = ln ? Fu : gc);
    const g = o ? Jn() : [];
    if ((!o || !A) && E.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((Z) => Z.remove()), !o) {
      E.style.height = "", E.querySelectorAll(".tfBoardItem").forEach((Z) => {
        Z.classList.remove("tfBoardItem", "tfBoardHidden"), Z.style.left = Z.style.top = Z.style.width = Z.style.height = "";
      }), (xe = E.querySelector(".tfDash-act > .activityRows")) == null || xe.style.removeProperty("max-height"), Gl(!1), v.classList.contains("tfDash") && Pc(), ca();
      return;
    }
    if (A) {
      zl(g, e, t);
      return;
    }
    E.style.setProperty("--peg-w", c + "px");
    const w = new Set(Ct().hidden), _ = c + Qt;
    Bt != null && Bt.fromTray && w.delete(Bt.key), g.forEach((Z) => Z.el.classList.toggle("tfBoardHidden", w.has(Z.key)));
    const N = g.filter((Z) => !w.has(Z.key) && getComputedStyle(Z.el).display !== "none");
    let T = 0;
    N.filter((Z) => ro.includes(Z.key)).forEach((Z) => {
      Z.el.classList.add("tfBoardItem"), Object.assign(Z.el.style, { width: e + "px", height: "", left: "0px", top: T + "px" });
      const je = Z.key === "sums" && Z.el.querySelector(".tfDash-bar"), Wt = je ? je.querySelectorAll(".activityRow").length : 0;
      je && (je.style.maxWidth = "none");
      for (let st = 1; je && st <= Wt && (je.style.setProperty("--bar-cols", String(Math.ceil(Wt / st))), !(je.offsetWidth <= e)); st++)
        ;
      je && (je.style.maxWidth = ""), T += Z.el.offsetHeight + Qt;
    }), Ka = T;
    const P = N.filter((Z) => !ro.includes(Z.key));
    P.forEach((Z) => {
      Z.cols = jl(Z, r, c), Z.el.classList.add("tfBoardItem"), Z.el.style.width = (Z.cols === r ? e : Z.cols * c + (Z.cols - 1) * Qt) + "px", Z.el.style.height = "", Z.rows = yi(Z) ?? Math.max(1, Math.ceil((Z.el.offsetHeight + Qt - 6) / Pn));
    });
    const te = Bt && P.find((Z) => Z.key === Bt.key), se = t && Fr().map((Z) => Z.key), K = (Z) => se.includes(Z.key) ? se.indexOf(Z.key) : -1, Q = t ? ti([...P].sort((Z, je) => K(Z) - K(je)), r) : Ed(P, r, te);
    Q.forEach((Z) => Object.assign(Z, { x: Z.cols === r ? 0 : Z.col * _, y: Ka + Z.row * Pn, w: Z.cols === r ? e : Z.cols * c + (Z.cols - 1) * Qt, h: Z.rows * Pn - Qt })), P.forEach((Z) => {
      const je = Q.get(Z.key);
      Z.el.style.height = je.h + "px", Z.el.dataset.rows = t && Z.key === "wx" ? 5 : Za(Z.key), Z.el.toggleAttribute("data-narrow", !t && je.cols === 1 && r > 1), Z.el.dataset.cols = je.cols, Z.el.classList.contains("tfDac") && Z.el.style.setProperty("--tf-dac-pad", je.h - _c + "px"), !(Z === te && !Bt.fromTray) && (Z.el.style.left = je.x + "px", Z.el.style.top = je.y + "px");
    }), t || (xi = Q), Ts([...N.filter((Z) => ro.includes(Z.key)), ...P.slice().sort((Z, je) => Q.get(Z.key).row - Q.get(je.key).row || Q.get(Z.key).col - Q.get(je.key).col)].map((Z) => Z.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([Z, je]) => {
      const Wt = Q.get(Z), st = Wt && E.querySelector(je), Vt = st == null ? void 0 : st.querySelector(":scope > .activityRows"), Da = st == null ? void 0 : st.querySelector(":scope > .activityHeader");
      if (!Vt || !Da) return;
      const Qe = Vt.getBoundingClientRect().top - st.getBoundingClientRect().top, St = Wt.rows === 1 ? Wt.h : Math.floor(Wt.h - Qe - parseFloat(getComputedStyle(st).paddingBottom)), On = Math.max(1, Math.floor(St / Rc));
      Vt.style.setProperty("--fill-row", (St / On).toFixed(2) + "px"), Vt.style.maxHeight = St + "px";
    }), Lo = Math.max(0, ...[...Q.values()].map((Z) => Z.row + Z.rows));
    let j = Ka + Lo * Pn - Qt;
    j = Gl(ln && !t, P, Q, j, r, c), E.style.height = j + "px", requestAnimationFrame(() => v.classList.add("tfBoardReady")), g.forEach((Z) => ol.observe(Z.el)), nd(), ca();
  }
  const Ma = { gap: 20, phoneGap: 16, inner: 16, col: 252, row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, Dd = { s: { w: 160, h: 192 }, m: { w: 200, h: 240 }, l: { w: 252, h: 337 } }, _d = () => {
    var e;
    return Dd[(e = Ne.home) == null ? void 0 : e.areaSize] ? Ne.home.areaSize : "s";
  }, nl = () => {
    var e;
    return ["rows", "columns", "bento"].includes((e = Ne.home) == null ? void 0 : e.areaLayout) ? Ne.home.areaLayout : "bento";
  }, Qi = () => {
    var e;
    return ((e = Ne.home) == null ? void 0 : e.cardsAs) === "rows" ? "rows" : "stacked";
  }, Nc = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1 }, qr = () => {
    var e;
    return !!((e = Ne.home) != null && e.weather && At());
  }, Rd = () => {
    var e;
    return !!((e = Ne.home) != null && e.energy && (Bn != null && Bn.length));
  }, ki = (e) => {
    var t;
    return ((t = Ne.home) == null ? void 0 : t[e]) ?? Nc[e];
  };
  function Wr() {
    var c;
    const e = Object.values(((c = i()) == null ? void 0 : c.floors) || {}), t = new Set(e.map((h) => h.floor_id)), o = e.map((h) => ({ id: h.floor_id, name: h.name, rooms: We.filter((p) => p.floor === h.floor_id) })), r = We.filter((h) => !t.has(h.floor));
    return r.length && o.push({ id: "", name: e.length ? "Other areas" : "", rooms: r }), o;
  }
  const er = (e) => e.classList.toggle("hcMore", e.scrollHeight - e.scrollTop - e.clientHeight > 1);
  let ut = null, tr = [], Mi = /* @__PURE__ */ new Map();
  function Ls(e) {
    let t = E.querySelector(".hcHomeLand");
    if (!e) {
      t == null || t.remove();
      return;
    }
    t || (t = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), E.appendChild(t)), Object.assign(t.style, { left: e.x + "px", top: e.y + "px", width: e.w + "px", height: e.h + "px" });
  }
  function cn(e) {
    if (!A || !oi || e.button !== 0 || E.clientWidth < 2 * Hr + Qt) return;
    const t = e.target.closest(".tfBoardItem"), o = t && Jn().find((g) => g.el === t);
    if (!o || ro.includes(o.key) || ze(o.key)) return;
    e.preventDefault();
    const r = E.getBoundingClientRect(), c = Mi.get(o.key);
    ut = { key: o.key, el: t, on: !1, x0: e.clientX, y0: e.clientY, left: c.x, top: c.y, order: [...tr] };
    const h = (g) => {
      const w = g.clientX - ut.x0, _ = g.clientY - ut.y0;
      if (!ut.on && Math.hypot(w, _) < 5) return;
      ut.on || (ut.on = !0, t.classList.add("tfDragging"), Qa() || t.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(t.style, { left: ut.left + w + "px", top: ut.top + _ + "px" });
      const N = g.clientX - r.left, T = g.clientY - r.top + E.scrollTop;
      let P = null, te = 1 / 0;
      if (Mi.forEach((j, xe) => {
        if (xe === o.key || !ut.order.includes(xe)) return;
        const Z = Math.hypot(N - (j.x + j.w / 2), T - (j.y + j.h / 2));
        Z < te && (te = Z, P = { key: xe, b: j });
      }), !P) return;
      const se = ut.order.filter((j) => j !== o.key), K = se.indexOf(P.key) + (N > P.b.x + P.b.w / 2 ? 1 : 0), Q = [...se.slice(0, K), o.key, ...se.slice(K)];
      Q.join() !== ut.order.join() ? (ut.order = Q, Ha()) : Ls(Mi.get(o.key));
    }, p = () => {
      removeEventListener("pointermove", h), removeEventListener("pointerup", p), removeEventListener("pointercancel", p);
      const g = ut;
      ut = null, t.classList.remove("tfDragging"), g.on && uo({ order: g.order }), Ha(), g.on && !Qa() && setTimeout(() => Xp(t), 340);
    };
    addEventListener("pointermove", h), addEventListener("pointerup", p), addEventListener("pointercancel", p);
  }
  function zl(e, t, o) {
    var Hp;
    const r = new Set(Ct().hidden);
    e.forEach((Le) => Le.el.classList.toggle("tfBoardHidden", r.has(Le.key)));
    const c = e.filter((Le) => !r.has(Le.key) && getComputedStyle(Le.el).display !== "none"), h = o ? Ma.phoneGap : Ma.gap, p = Math.min(t, Ma.full);
    let g = 0;
    const w = ed();
    v.classList.toggle("hcSumsFit", Wd()), v.classList.toggle("hcFavStrip", w);
    const _ = c.filter((Le) => ro.includes(Le.key) || w && Le.key === "favs");
    _.sort((Le, it) => ["title", "sums", "favs"].indexOf(Le.key) - ["title", "sums", "favs"].indexOf(it.key)), _.forEach((Le) => {
      Le.el.classList.add("tfBoardItem"), Le.el.toggleAttribute("data-narrow", !1), Object.assign(Le.el.style, { width: (Le.key === "title" ? t : p) + "px", height: "", left: "0px", top: g + "px" });
      const it = Le.key !== "title" && (Le.el.querySelector(".tfDash-bar>.activityRows") || Le.key === "favs" && Le.el.querySelector(":scope>.activityRows")), _a = it ? it.children.length : 0;
      if (it && (it.classList.remove("hcBarRows"), !o && it.scrollWidth > it.clientWidth + 1))
        for (let ua = 2; ua <= _a && (it.classList.add("hcBarRows"), it.style.setProperty("--bar-cols", String(Math.ceil(_a / ua))), !(it.scrollWidth <= it.clientWidth + 1)); ua++)
          ;
      g += Le.el.offsetHeight + (Le.key === "title" ? Ma.nameGap : Ma.sumsGap);
    });
    const N = o ? 1 : Math.max(0.85, Math.min(1, t / Ma.full)), T = ["favs", "wx", "energy"], P = (ut == null ? void 0 : ut.order) || ((Hp = Ne.home) == null ? void 0 : Hp.order), te = P ? [...P.filter((Le) => T.includes(Le)), ...T.filter((Le) => !P.includes(Le))] : T;
    tr = te;
    const se = c.filter((Le) => T.includes(Le.key) && !(w && Le.key === "favs")).sort((Le, it) => te.indexOf(Le.key) - te.indexOf(it.key));
    Mi = /* @__PURE__ */ new Map();
    const K = (Le, it) => {
      if (Mi.set(Le.key, it), Object.assign(Le.el.style, { width: it.w + "px", height: it.h + "px" }), ut != null && ut.on && ut.key === Le.key) {
        Ls(it);
        return;
      }
      Object.assign(Le.el.style, { left: it.x + "px", top: it.y + "px" });
    }, Q = o ? t : Math.round((2 * Ma.col + Ma.inner) * N), j = Math.round(Ma.row * N), xe = _d(), Z = Dd[xe], je = nl(), Wt = ki("byFloor"), st = Qi() === "stacked" && !o && se.length > 0;
    let Vt = 0, Da = 0, Qe = g;
    se.forEach((Le) => {
      Le.el.classList.add("tfBoardItem"), Le.el.dataset.rows = 5, Le.el.dataset.cols = 2, Le.el.toggleAttribute("data-narrow", !1);
      let it = j;
      if ((o || Le.key === "favs") && (Object.assign(Le.el.style, { width: Q + "px", height: "" }), it = Le.el.offsetHeight), st) {
        K(Le, { x: 0, y: Qe, w: Q, h: it }), Qe += it + h;
        return;
      }
      Vt && Vt + Q > t && (g += Da + h, Vt = 0, Da = 0), K(Le, { x: Vt, y: g, w: Q, h: it }), Vt += Q + h, Da = Math.max(Da, it);
    }), se.length && !st && (g += Da + h);
    const St = st ? Q + h : 0, On = st ? t - Q - h : t, Ri = o ? Math.floor((t - h) / 2) : Math.round(Z.w * N), tc = Math.round(Z.h * N), pd = o ? 2 : Math.max(1, Math.floor((On + h) / (Ri + h))), ac = new Map(c.filter((Le) => ze(Le.key)).map((Le) => [Le.key, Le])), fd = (Wt ? Wr() : [{ id: "", name: "", rooms: We }]).map((Le) => ({ ...Le, cards: Le.rooms.map((it) => ac.get("room:" + it.id)).filter(Boolean) })).filter((Le) => Le.cards.length), Vc = je === "bento", jc = Vc && ki("bentoMixed"), Af = Vc && Wt && ki("bentoBoxes"), Ef = je === "columns" && Wt && !o, hd = 12, Df = (Le) => Le.name ? Ma.floorHead + Ma.floorGap : 0, zc = (Le, it, _a) => {
      const ua = /* @__PURE__ */ new Set(), ga = [];
      Le.cards.forEach((yt, as) => {
        const qn = jc && as === 0 && it >= 2 && Le.cards.length > 1, ns = qn ? 2 : 1, nc = qn && !o ? 2 : 1;
        yt.el.classList.remove("hcAreaS", "hcAreaM", "hcAreaL", "hcAreaBig"), yt.el.classList.add("hcArea" + xe.toUpperCase()), yt.el.classList.toggle("hcAreaBig", qn), yt.el.style.setProperty("--hc-k", String(N)), yt.el.classList.add("tfBoardItem"), yt.el.dataset.rows = nc > 1 ? 10 : 5, yt.el.dataset.cols = ns, yt.el.toggleAttribute("data-narrow", !1);
        for (let oc = 0; ; oc++) {
          const Kc = [...Array(Math.max(0, it - ns + 1)).keys()].find(($c) => [...Array(ns).keys()].every((Xc) => [...Array(nc).keys()].every((Pf) => !ua.has(oc + Pf + "," + ($c + Xc)))));
          if (Kc != null) {
            [...Array(ns).keys()].forEach(($c) => [...Array(nc).keys()].forEach((Xc) => ua.add(oc + Xc + "," + (Kc + $c)))), ga.push({ it: yt, r: oc, c: Kc, sc: ns, sr: nc });
            break;
          }
        }
      });
      const Ja = Math.max(0, ...ga.map((yt) => yt.r + yt.sr));
      Vc && !o && ga.forEach((yt) => {
        for (; yt.r + yt.sr < Ja && !ua.has(yt.r + yt.sr + "," + yt.c) && yt.sc === 1; )
          ua.add(yt.r + yt.sr + "," + yt.c), yt.sr++;
      }), ga.forEach((yt) => Object.assign(yt.it.el.style, { width: yt.sc * _a + (yt.sc - 1) * h + "px", height: o ? "" : yt.sr * tc + (yt.sr - 1) * h + "px" }));
      const qs = [...Array(Ja)].map(() => o ? 0 : tc);
      o && ga.forEach((yt) => {
        qs[yt.r] = Math.max(qs[yt.r], yt.it.el.offsetHeight);
      });
      const Ws = [];
      let pr = Df(Le);
      return qs.forEach((yt, as) => {
        Ws[as] = pr, pr += yt + h;
      }), { h: pr - (Ja ? h : 0), places: ga.map((yt) => ({ it: yt.it, x: yt.c * (_a + h), y: Ws[yt.r], w: yt.sc * _a + (yt.sc - 1) * h, h: qs.slice(yt.r, yt.r + yt.sr).reduce((as, qn) => as + qn, 0) + (yt.sr - 1) * h })) };
    }, Gc = new Map([...E.querySelectorAll(":scope > .hcFloor")].map((Le) => [Le.dataset.floor, Le])), Uc = new Map([...E.querySelectorAll(":scope > .hcFloorBox")].map((Le) => [Le.dataset.floor, Le])), Np = [], _f = (Le, it, _a, ua) => {
      if (!Le.name) return;
      let ga = Gc.get(Le.id);
      Gc.delete(Le.id), ga || (ga = Object.assign(document.createElement("div"), { className: "hcFloor" }), ga.dataset.floor = Le.id, E.appendChild(ga)), ga.dataset.sig !== Le.name && (ga.dataset.sig = Le.name, ga.innerHTML = '<h2 class="hcFloorName">' + X(Le.name) + "</h2>"), Object.assign(ga.style, { left: it + "px", top: _a + "px", width: ua + "px" }), Np.push(ga);
    }, Rf = (Le, it, _a, ua, ga) => {
      let Ja = Uc.get(Le.id);
      Uc.delete(Le.id), Ja || (Ja = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), Ja.dataset.floor = Le.id, Ja.setAttribute("aria-hidden", "true"), E.prepend(Ja)), Object.assign(Ja.style, { left: it + "px", top: _a + "px", width: ua + "px", height: ga + "px" });
    }, Bf = (Le) => parseFloat(getComputedStyle(Le.cards[0].el).paddingLeft) || 0, Yc = (Le, it, _a, ua, ga = 0) => {
      _f(Le, _a + ga, ua, (it.w ?? t) - ga), it.places.forEach((Ja) => K(Ja.it, { x: _a + Ja.x, y: ua + Ja.y, w: Ja.w, h: Ja.h }));
    };
    if (fd.length && se.length && !st && (g += Ma.floorTop), Ef) {
      let Le = 0, it = g;
      fd.forEach((_a) => {
        const ua = { ...zc(_a, 1, Ri), w: Ri };
        Le && Le + Ri > On && (g = it + h + Ma.floorTop, Le = 0), Yc(_a, ua, St + Le, g), it = Math.max(it, g + ua.h), Le += Ri + h;
      }), g = it + h;
    } else if (Af) {
      const Le = Array(pd).fill(g);
      fd.forEach((it) => {
        const _a = it.cards.length + (jc && it.cards.length > 1 ? 3 : 0), ua = o ? 2 : Math.min(pd, Math.max(jc && it.cards.length > 1 ? 2 : 1, _a <= 3 ? _a : Math.ceil(_a / 2))), ga = ua * (Ri + h) - h, Ja = Math.floor((ga - 2 * hd - (ua - 1) * h) / ua), qs = { ...zc(it, ua, Ja), w: ga - 2 * hd };
        let Ws = 0, pr = 1 / 0;
        for (let qn = 0; qn + ua <= pd; qn++) {
          const ns = Math.max(...Le.slice(qn, qn + ua));
          ns < pr && (pr = ns, Ws = qn);
        }
        const yt = St + Ws * (Ri + h), as = qs.h + 2 * hd;
        Rf(it, yt, pr, ga, as), Yc(it, qs, yt + hd, pr + hd, Bf(it));
        for (let qn = Ws; qn < Ws + ua; qn++) Le[qn] = pr + as + h;
      }), g = Math.max(g, ...Le);
    } else
      fd.forEach((Le, it) => {
        it && (g += Ma.floorTop);
        const _a = zc(Le, pd, Ri);
        Yc(Le, { ..._a, w: On }, St, g), g += _a.h + h;
      });
    st && (g = Math.max(g, Qe)), Gc.forEach((Le) => Le.remove()), Uc.forEach((Le) => Le.remove()), ut != null && ut.on || Ls(null), E.style.height = Math.max(0, g - h) + "px", Ts([..._.map((Le) => Le.el), ...se.map((Le) => Le.el), ...Np, ...fd.flatMap((Le) => Le.cards.map((it) => it.el))]), Gl(!1), e.forEach((Le) => [...Le.el.children].forEach((it) => it.toggleAttribute("inert", oi)));
    const Zc = E.querySelector(".tfDash-favs>.activityRows");
    Zc && (Zc.classList.toggle("hcFadeList", !w), er(Zc)), requestAnimationFrame(() => v.classList.add("tfBoardReady")), e.forEach((Le) => ol.observe(Le.el)), ca();
  }
  const As = () => {
    Vl || (Vl = !0, requestAnimationFrame(() => {
      Vl = !1, Ha();
    }));
  }, ol = new ResizeObserver(() => {
    Bt || As();
  });
  function Bd(e, t, o) {
    const r = o + Qt, c = e * o + (e - 1) * Qt, h = t * Pn - Qt, p = Qt / 2, g = r / Math.max(1, Math.round(r / (Pn / 4))), w = Pn / 4, _ = 6;
    let N = "";
    for (let T = 0; T <= e; T++) for (let P = 0; P <= t; P++) {
      const te = T * r - p, se = P * Pn - p;
      N += "M" + (te - _) + " " + se + "H" + (te + _) + "M" + te + " " + (se - _) + "V" + (se + _);
    }
    return '<svg width="' + c + '" height="' + h + '" viewBox="0 0 ' + c + " " + h + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -p + '" y="' + -p + '" width="' + g.toFixed(3) + '" height="' + w + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + g.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + w + '" r="1.4"></circle><circle cx="' + g.toFixed(3) + '" cy="' + w + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -p + '" y="' + -p + '" width="' + (c + Qt) + '" height="' + (h + Qt) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + N + '"></path></svg>';
  }
  function Gl(e, t = [], o = /* @__PURE__ */ new Map(), r = 0, c = 1, h = Hr) {
    E.querySelectorAll(".tfEditChips").forEach((N) => {
      (!e || !N.closest(".tfBoardItem")) && N.remove();
    }), E.querySelectorAll(".tfFavHides").forEach((N) => N.remove()), E.querySelectorAll(".tfBoardItem").forEach((N) => [...N.children].forEach((T) => {
      T.classList.contains("tfEditChips") || T.toggleAttribute("inert", e);
    }));
    let p = E.querySelector(".tfBoardCells"), g = E.querySelector(".tfBoardLand");
    if (!e)
      return p == null || p.remove(), g == null || g.remove(), lo(), r;
    const w = Lo + Ol;
    if (p || (p = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), p.setAttribute("aria-hidden", "true"), E.prepend(p)), p.style.top = Ka + "px", p.dataset.size !== c + "x" + w + "x" + h && (p.dataset.size = c + "x" + w + "x" + h, p.innerHTML = Bd(c, w, h)), r = Math.max(r, Ka + w * Pn - Qt), t.forEach((N) => {
      const T = N.el;
      !T || T.querySelector(":scope > .tfEditChips") || T.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + hc + '</span><button class="tfEditChip" type="button" data-board-more="' + X(N.key) + '" aria-label="' + X(kn(N.key)) + ' options" aria-haspopup="menu">' + Cg + "</button></div>");
    }), Bt && o.has(Bt.key)) {
      g || (g = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), E.appendChild(g));
      const N = o.get(Bt.key);
      Object.assign(g.style, { left: N.x + "px", top: N.y + "px", width: N.w + "px", height: N.h + "px" });
    } else g == null || g.remove();
    const _ = E.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (_) {
      const N = _.getBoundingClientRect();
      _.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [..._.querySelectorAll('[data-k^="fav:"]')].map((T) => {
        const P = T.getBoundingClientRect(), te = T.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + X(te) + '" aria-label="Hide ' + X(Pe(te)) + ' from the dashboard" style="left:' + Math.round(P.right - N.left - 42) + "px;top:" + Math.round(P.top - N.top + (P.height - 32) / 2) + 'px">' + Nu + "</button>";
      }).join("") + "</div>");
    }
    return r;
  }
  let Ul = "";
  function Yl(e) {
    ln = e, e || (Bt = null, co = ni = !1, lo()), Ha(), e ? Ul = JSON.stringify(Ne) : Ul && JSON.stringify(Ne) !== Ul && Wa("Changes saved");
  }
  function Hc(e, t) {
    var K, Q;
    lo();
    const o = xi.get(e), { n: r } = so(E.clientWidth), c = Ct(), h = c.spans[e] ?? (ze(e) ? 1 : 2);
    if (!o) return;
    const p = o.cols >= r, g = (j, xe, Z) => '<button type="button" role="menuitem" data-board-act="' + j + '"' + (Z ? " disabled" : "") + ">" + xe + "</button>", w = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    w.setAttribute("role", "menu"), w.setAttribute("aria-label", kn(e) + " options");
    const _ = E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]'), N = Cs(e), T = Za(e), P = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + tl.map((j, xe) => '<button type="button" role="menuitemradio" aria-checked="' + (xe + 1 === T) + '" aria-label="' + j + ", " + (xe + 1) + (xe ? " rows" : " row") + '" data-board-act="h:' + (xe + 1) + '"' + (xe < N ? "" : " disabled") + ">" + j + "</button>").join("") + "</div></div>", te = Ir.includes(e) || ze(e) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Ec.map((j, xe) => '<button type="button" role="menuitemradio" aria-checked="' + (xe + 1 === Math.min(h, r)) + '" aria-label="' + j + ", " + (xe + 1) + (xe ? " columns" : " column") + '" data-board-act="w:' + (xe + 1) + '"' + (xe < r ? "" : " disabled") + ">" + j + "</button>").join("") + "</div></div>" : "";
    w.innerHTML = P + te + (e === "energy" ? g("graph", (((K = c.opts.energy) == null ? void 0 : K.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + g("left", "Move left", p || o.col === 0) + g("right", "Move right", p || o.col + o.cols >= r) + g("up", "Move up", o.row <= 0) + g("down", "Move down") + (_ ? g("remove", "Remove") : g("hide", "Hide")), E.appendChild(w);
    const se = Math.min(o.x + o.w - w.offsetWidth, E.clientWidth - w.offsetWidth);
    Object.assign(w.style, { left: Math.max(0, se) + "px", top: o.y + 28 + "px" }), dn = { key: e, menu: w, opener: t }, (Q = w.querySelector("button:not([disabled])")) == null || Q.focus();
  }
  function lo(e) {
    if (!dn) return;
    const { menu: t, opener: o } = dn;
    dn = null, t.remove(), e && (o == null || o.focus());
  }
  const Ao = () => Object.fromEntries([...xi].map(([e, t]) => [e, { col: t.col, row: t.row }]));
  function Es(e, t) {
    var g, w;
    if (t === "remove") {
      lo(), Ic(e);
      return;
    }
    const o = Ne, r = Ct(), c = Ao(), h = c[e] || { col: 0, row: 0 };
    t.startsWith("w:") && (r.spans = { ...r.spans, [e]: t === "w:full" ? "full" : Number(t.slice(2)) }), t.startsWith("h:") && (r.opts = { ...r.opts, [e]: { ...r.opts[e] || {}, h: Number(t.slice(2)), tall: void 0 } }), t === "graph" && (r.opts = { ...r.opts, energy: { ...r.opts.energy || {}, graph: (((g = r.opts.energy) == null ? void 0 : g.graph) || "above") === "above" ? "below" : "above" } }), t === "left" && (c[e] = { ...h, col: h.col - 1 }), t === "right" && (c[e] = { ...h, col: h.col + 1 }), t === "up" && (c[e] = { ...h, row: h.row - 1 }), t === "down" && (c[e] = { ...h, row: h.row + 1 }), t === "hide" && (r.hidden = [.../* @__PURE__ */ new Set([...r.hidden, e])]), ["left", "right", "up", "down"].includes(t) && (Bt = { key: e, col: c[e].col, row: c[e].row }), Or(r, c), Bt && (Ha(), Bt = null, Or(Ct(), Ao()));
    const p = /^[hw]:/.test(t) && !Qa() && (dn == null ? void 0 : dn.menu.querySelector('[data-board-act="' + CSS.escape(t) + '"]'));
    if (p) {
      const _ = dn;
      p.parentElement.querySelectorAll("[aria-checked]").forEach((N) => N.setAttribute("aria-checked", String(N === p))), setTimeout(() => {
        dn === _ && lo();
      }, Ca.tabs.dur);
    } else lo();
    t === "graph" && (vn.delete("dash:energy"), ma()), t.startsWith("h:") && e.includes(".") && ma(), Ha(), t !== "hide" ? (w = E.querySelector('[data-board-more="' + CSS.escape(e) + '"]')) == null || w.focus() : Wa(kn(e) + " hidden", _s(o));
  }
  const Pd = (e) => {
    var t;
    return nt.includes(e) && !(((t = Ne.dash) == null ? void 0 : t.cells) || {})[e] ? " added" : " put back";
  };
  function il(e) {
    const t = Ct(), o = kn(e) + Pd(e);
    ei({ ...t, hidden: t.hidden.filter((r) => r !== e) }), Ha(), Wa(o);
  }
  const Ds = () => Ct().tiles || [...E.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => e.dataset.k).filter((e) => !Ct().hidden.includes(e));
  function Nd(e, t) {
    const o = Ct();
    Or({ ...o, tiles: e, hidden: o.hidden.filter((r) => !r.includes(".")) }, t), ma(), ca();
  }
  const Hd = (e) => {
    Nd([...Ds().filter((t) => t !== e), e], Ao()), Wa(kn(e) + " added"), Fd(e);
  }, Ic = (e) => {
    const t = Ne, o = Ao();
    delete o[e], Nd(Ds().filter((r) => r !== e), o), Wa(kn(e) + " removed", _s(t));
  };
  let Si = 0;
  function Wa(e, t = null) {
    var p;
    const o = u("toast");
    if (!o) return;
    if (am(o, e), t) {
      const g = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      g.addEventListener("click", () => {
        clearTimeout(Si), o.classList.remove("show", "withAction"), t();
      }), o.appendChild(g);
    }
    const r = v.getBoundingClientRect(), c = (p = n.querySelector(".bottomNav")) == null ? void 0 : p.getBoundingClientRect(), h = _t.classList.contains("open") && !ea ? Math.min(r.right, _t.getBoundingClientRect().left) : r.right;
    o.style.left = (r.left + h) / 2 + "px", o.style.bottom = (c != null && c.height ? window.innerHeight - c.top + 12 : 26) + "px", o.classList.add("tfToast", "show"), o.classList.toggle("withAction", !!t), nm(o), clearTimeout(Si), Si = setTimeout(() => o.classList.remove("show", "withAction"), t ? 5e3 : Ca.confirm.stay);
  }
  const Ci = 700, Id = 1e3, Ia = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  Ia.setAttribute("role", "tooltip"), Ia.setAttribute("aria-hidden", "true"), v.appendChild(Ia);
  let rl = null, ai = 0, Vr = 0, ar = -1 / 0;
  const Zl = (e) => {
    if (e.nodeType !== 1) return !1;
    const t = getComputedStyle(e);
    return t.textOverflow === "ellipsis" && e.scrollWidth > e.clientWidth + 1 || t.webkitLineClamp !== "none" && e.scrollHeight > e.clientHeight + 1;
  }, Kl = (e) => {
    for (let t = e; t && t !== v; t = t.parentElement) if (Zl(t)) return t;
    return null;
  };
  function nr(e, t) {
    clearTimeout(ai), clearTimeout(Vr);
    const o = () => {
      if (!e.isConnected) return;
      rl = e, Ia.textContent = t, Ia.hidden = !1;
      const r = e.getBoundingClientRect(), c = Ia.getBoundingClientRect(), h = r.top - c.height - 8 >= 8 ? r.top - c.height - 8 : r.bottom + 8;
      Ia.style.left = Math.max(8, Math.min(window.innerWidth - c.width - 8, r.left + r.width / 2 - c.width / 2)) + "px", Ia.style.top = h + "px";
    };
    !Ia.hidden || performance.now() - ar < Id ? o() : ai = setTimeout(o, Ci);
  }
  function Ti() {
    clearTimeout(ai), clearTimeout(Vr), Ia.hidden || (ar = performance.now()), Ia.hidden = !0, rl = null;
  }
  n.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    if (Ia.contains(e.target)) {
      clearTimeout(Vr);
      return;
    }
    const t = Kl(e.target);
    if (t && Ye.names === "scroll" && t.matches(jr)) {
      Li(t);
      return;
    }
    if (t) {
      t !== rl ? nr(t, t.textContent.trim()) : clearTimeout(Vr);
      return;
    }
    clearTimeout(ai), clearTimeout(Vr), Vr = setTimeout(Ti, 120);
  }), n.addEventListener("focusin", (e) => {
    var r;
    const t = e.target;
    if (!((r = t.matches) != null && r.call(t, ":focus-visible"))) return;
    let o = [t, ...t.querySelectorAll("*")].filter(Zl);
    Ye.names === "scroll" && (o.filter((c) => c.matches(jr)).forEach(Li), o = o.filter((c) => !c.matches(jr))), o.length && nr(t, o.map((c) => c.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (e) => {
    e.target === rl && Ti();
  }), n.addEventListener("keydown", (e) => {
    e.key === "Escape" && !Ia.hidden && (e.stopPropagation(), Ti());
  }, !0), window.addEventListener("scroll", () => {
    (!Ia.hidden || ai) && Ti();
  }, { capture: !0, passive: !0 });
  const jr = ".activityRowName,.activityRowMeta", zr = /* @__PURE__ */ new WeakSet();
  function Li(e) {
    var o;
    if (Ye.names !== "scroll" || zr.has(e) || e.closest("[inert]") || (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    zr.add(e);
    const t = () => Promise.all([e.closest(".workoutPanel"), e.closest(".panelExpanded")].filter(Boolean).flatMap((r) => r.getAnimations()).map((r) => r.finished.catch(() => {
    })));
    setTimeout(async () => {
      await t();
      const r = e.isConnected && !e.closest("[inert]") ? e.scrollWidth - e.clientWidth : 0;
      if (r < 2) {
        zr.delete(e);
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
        e.style.textOverflow = "", zr.delete(e);
      };
    }, 600);
  }
  const or = new IntersectionObserver((e) => e.forEach((t) => {
    t.isIntersecting && !t.target.closest("[inert]") && (or.unobserve(t.target), Li(t.target));
  }), { threshold: 1 });
  let pn = !1;
  new MutationObserver(() => {
    pn || Ye.names !== "scroll" || (pn = !0, setTimeout(() => {
      pn = !1, n.querySelectorAll(jr).forEach((e) => {
        !e.dataset.glided && Zl(e) && (e.dataset.glided = "1", or.observe(e));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const _s = (e) => () => {
    Ne = e, ao(), ma(), Ha(), ca();
  };
  function Fd(e) {
    const t = () => E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]');
    setTimeout(() => {
      var p;
      const o = t();
      if (!o) return;
      const r = (p = window.matchMedia) == null ? void 0 : p.call(window, "(prefers-reduced-motion: reduce)").matches, c = o.getBoundingClientRect();
      (c.top < 0 || c.bottom > window.innerHeight) && o.scrollIntoView({ behavior: r ? "auto" : "smooth", block: "center" });
      const h = (g) => "0 0 0 4px color-mix(in srgb,var(--primary) " + g + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + g + "%,transparent)";
      o.animate([{ boxShadow: h(55) }, { boxShadow: h(0) }], { duration: 1500, easing: r ? "steps(1, end)" : "ease-out" });
    }, $l(e) ? 260 : 0);
  }
  function $l(e) {
    const t = xi.get(e);
    if (!t || !_t.classList.contains("open") || ea) return !1;
    const { n: o, w: r } = so(E.clientWidth), c = _t.getBoundingClientRect().left - E.getBoundingClientRect().left, h = (w) => w * (r + Qt) + t.cols * r + (t.cols - 1) * Qt <= c;
    if (h(t.col)) return !1;
    const p = /* @__PURE__ */ new Set();
    xi.forEach((w, _) => {
      if (_ !== e) for (let N = w.row; N < w.row + w.rows; N++) for (let T = w.col; T < w.col + w.cols; T++) p.add(T + "," + N);
    });
    const g = (w, _) => {
      for (let N = _; N < _ + t.rows; N++) for (let T = w; T < w + t.cols; T++) if (p.has(T + "," + N)) return !1;
      return !0;
    };
    for (let w = 0; w <= Lo; w++) for (let _ = 0; _ + t.cols <= o && h(_); _++)
      if (g(_, w))
        return Or(Ct(), { ...Ao(), [e]: { col: _, row: w } }), Ha(), !0;
    return !1;
  }
  const Od = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Xl = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let Rs = "page";
  const sl = (e) => e.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : e.querySelector("[data-room-add]") ? "areas" : e.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function ll(e = !1) {
    const t = _t.querySelector(".tfTrayInner"), o = _t.querySelector(".hcTrayTabs"), r = o.querySelector(".rubberIndicator");
    let c = !0;
    t.querySelectorAll(":scope>.tfTraySection").forEach((p) => {
      p.hidden = sl(p) !== Rs, p.classList.toggle("hcFirst", !p.hidden && c), p.hidden || (c = !1);
    }), o.querySelectorAll("[data-tray-tab]").forEach((p) => {
      const g = p.dataset.trayTab === Rs;
      p.classList.toggle("active", g), p.setAttribute("aria-selected", String(g));
    });
    const h = o.querySelector(".tab.active");
    h != null && h.offsetWidth && (r.style.transition = "none", e ? yc(r, r.offsetLeft, r.offsetWidth, h.offsetLeft, h.offsetWidth) : (r.style.left = h.offsetLeft + "px", r.style.width = h.offsetWidth + "px"));
  }
  const _t = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  _t.setAttribute("aria-label", "Edit custom dashboard"), _t.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + Xl.map(([e, t], o) => '<button class="tab segBtn' + (o ? "" : " active") + '" type="button" role="tab" aria-selected="' + !o + '" data-tray-tab="' + e + '">' + t + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + mc + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows, and one area on its own instead.</p><button class="pill tfTrayAdd" type="button" data-area-choose aria-expanded="false">Choose areas</button><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + mc + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + mc + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', v.appendChild(_t);
  const un = Object.assign(document.createElement("div"), { className: "card tfTrayPop" });
  un.setAttribute("role", "dialog"), un.setAttribute("aria-label", "Areas"), un.hidden = !0, v.appendChild(un);
  const dl = () => _t.querySelector("[data-area-choose]");
  function Jl() {
    const e = new Set(_e().map((t) => t.id));
    un.innerHTML = '<div class="tfTrayPopTitle">Areas</div>' + We.map((t) => '<div class="tfTrayPopRow"><button class="switch' + (e.has(t.id) ? " on" : "") + '" type="button" role="switch" aria-checked="' + e.has(t.id) + '" aria-label="' + X(t.name) + '" data-area-on="' + X(t.id) + '"></button><span class="tfIcon"><span class="tfAreaGlyph"' + la("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><span class="tfTrayPopName">' + X(t.name) + "</span></div>").join(""), no(un);
  }
  function cl() {
    var e;
    un.hidden || (un.hidden = !0, (e = dl()) == null || e.setAttribute("aria-expanded", "false"));
  }
  function Nn() {
    if (!un.hidden) {
      cl();
      return;
    }
    Jl(), un.hidden = !1, dl().setAttribute("aria-expanded", "true");
    const e = dl().getBoundingClientRect();
    un.style.top = Math.max(16, Math.min(e.top - 12, innerHeight - un.offsetHeight - 16)) + "px";
  }
  un.addEventListener("click", (e) => {
    var c;
    const t = e.target.closest("[data-area-on]");
    if (!t) return;
    const o = !t.classList.contains("on"), r = new Set(((c = Ne.dash) == null ? void 0 : c.areasOff) || []);
    o ? r.delete(t.dataset.areaOn) : r.add(t.dataset.areaOn), ei({ ...Ct(), areasOff: [...r] }), t.classList.toggle("on", o), t.setAttribute("aria-checked", String(o)), ma();
  }), un.addEventListener("keydown", (e) => {
    var t;
    e.key === "Escape" && (e.stopPropagation(), cl(), (t = dl()) == null || t.focus());
  });
  let ea = !1, co = !1, ni = !1, Gr = !1, fn = null, Eo = !1;
  const pl = {}, Do = (e, t) => {
    if (pl[e] === t) return;
    pl[e] = t;
    const o = _t.querySelector('[data-tray="' + e + '"]');
    o.innerHTML = t, no(o);
  }, ul = (e, t) => '<span class="tfTrayName"><span class="activityRowName">' + X(Pe(e)) + '</span><span class="activityRowMeta">' + X(t) + "</span></span>", ir = (e, t, o) => '<li class="tfTrayFav' + (t ? " off" : "") + '" data-tray-fav="' + X(e) + '"><span class="tfTrayGrip" aria-hidden="true">' + hc + '</span><span class="tfIcon"' + la(e, bn(e)) + "></span>" + ul(e, t ? "Hidden" + (pt.get(e) ? " · " + pt.get(e) : "") : pt.get(e) || Yt(e)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + X(e) + '" aria-pressed="' + !t + '" aria-label="' + (t ? "Show " : "Hide ") + X(Pe(e)) + ' on the dashboard">' + (t ? Nu : Tg) + "</button>" + (o ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + X(e) + '" aria-label="Remove ' + X(Pe(e)) + ' from favourites">' + gp + "</button>" : "<span></span>") + "</li>";
  function fl(e, t, o, r) {
    const c = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(M).filter((p) => t(p) && !o.has(p) && M[p].state !== "unavailable").filter((p) => {
      const g = (Pe(p) + " " + (pt.get(p) || "") + " " + p).toLowerCase();
      return c.every((w) => g.includes(w));
    }).sort((p, g) => (pt.get(p) || "~").localeCompare(pt.get(g) || "~") || Pe(p).localeCompare(Pe(g))).slice(0, 40).map((p) => '<li><button class="tfTrayPickItem" type="button" ' + r + '="' + X(p) + '"><span class="tfIcon"' + la(p, bn(p)) + "></span>" + ul(p, pt.get(p) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const Fc = "https://www.home-assistant.io/dashboards/", _o = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, da = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  da.setAttribute("aria-label", "Edit Home page"), da.toggleAttribute("inert", !0);
  let oi = !1, Xa = !1, Ur = "", hl = null, Yr = "page";
  function Ql(e, t) {
    const o = da.querySelector(".hcTrayTabs"), r = o == null ? void 0 : o.querySelector(".rubberIndicator"), c = o == null ? void 0 : o.querySelector(".tab.active");
    if (!(c != null && c.offsetWidth)) {
      requestAnimationFrame(() => {
        var h;
        return ((h = da.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : h.offsetWidth) && Ql(e, t);
      });
      return;
    }
    r.style.transition = "none", e && t ? yc(r, t.left, t.width, c.offsetLeft, c.offsetWidth) : (r.style.left = c.offsetLeft + "px", r.style.width = c.offsetWidth + "px");
  }
  const Va = (e) => '<button class="hcInfoBtn" type="button" data-info="' + e + '" aria-expanded="false" aria-label="About ' + X(_o[e][0]) + '">' + Hu + "</button>", po = (e, t, o) => '<button class="switch' + (e ? " on" : "") + '" type="button" role="switch" aria-checked="' + e + '" aria-label="' + X(t) + '" ' + o + "></button>", qd = (e) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + X(e) + '. Use the up and down arrows">' + hc + "</button>", Wd = () => {
    var e;
    return ((e = Ne.home) == null ? void 0 : e.sumsWidth) === "fit";
  }, ed = () => {
    var e;
    return ((e = Ne.home) == null ? void 0 : e.favsAs) === "strip";
  }, Zr = (e, t, o, r) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + e + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + X(e) + '">' + r.map(([c, h]) => '<button class="wxLayoutBtn" type="button" ' + t + '="' + c + '" aria-pressed="' + (o === c) + '">' + h + "</button>").join("") + "</div></div>", Vd = () => Na(!0).filter((e) => gd[e.key]).map((e) => e.key);
  function ja() {
    var p, g, w, _, N;
    if (!oi) return;
    const e = Ie(), t = (T) => '<li class="hcHeRow" data-he-id="' + X(T) + '">' + qd(Pe(T)) + '<span class="tfIcon"' + la(T, bn(T)) + "></span>" + ul(T, pt.get(T) || Yt(T)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + X(T) + '" aria-label="Take ' + X(Pe(T)) + ' off Favourites">' + gp + "</button></li>", o = (T) => {
      const P = gd[T];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + X(T) + '"' + (P.colour && Oi(P.colour) ? ' style="' + Oi(P.colour).slice(1) + '"' : "") + ">" + qd(P.name) + '<span class="tfIcon"' + la("", P.icon, P.name) + '></span><span class="activityRowName">' + X(P.name) + "</span>" + po(mi(T), P.name, 'data-he-sum="' + X(T) + '"') + "</li>";
    }, r = ((p = da.querySelector("[data-he-search]")) == null ? void 0 : p.value) || "", c = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"]], h = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Va("welcome") + po(wi(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (At() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + Va("weather") + po(!!((g = Ne.home) != null && g.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (Bn != null && Bn.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + Va("energy") + po(!!((w = Ne.home) != null && w.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + Zr("Cards", "data-he-cards-as", Qi(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + po(ki("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + Zr("Layout", "data-he-area-layout", nl(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (nl() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + po(ki("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + po(ki("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + Zr("Area cards", "data-he-area-size", _d(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]),
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + po(((_ = Ne.home) == null ? void 0 : _.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + Va("favs") + "</div>" + Zr("Show as", "data-he-favs-as", ed() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (e.map(t).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Xa + '">' + mc + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Xa ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + X(r) + '"><ul class="tfTrayList">' + (Xa ? fl(r, (T) => Od.test(T), new Set(e), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + Va("suggest") + po(qa(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + Va("sums") + po(((N = Ne.home) == null ? void 0 : N.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + Zr("Width", "data-he-sums-width", Wd() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + Vd().map(o).join("") + "</ul>"
    };
    da.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + c.map(([T, P]) => '<button class="tab segBtn' + (T === Yr ? " active" : "") + '" type="button" role="tab" aria-selected="' + (T === Yr) + '" data-he-tab="' + T + '">' + P + "</button>").join("") + '</div><div class="hcHeTabBody" role="tabpanel">' + h[Yr] + "</div>", Ql(!1), no(da);
  }
  const Kr = (e) => {
    Ne = { ...Ne, ...e }, ao(), ma(), ja();
  }, uo = (e) => Kr({ home: { ...Ne.home || {}, ...e } });
  function rr(e) {
    Bs(), oi = e, Xa = !1, da.classList.toggle("open", e), da.toggleAttribute("inert", !e), v.classList.toggle("hcHomeEditing", e), k && E && Ha();
    const t = u("dashEditNav"), o = da.querySelector(".tfTrayHead");
    t && e && (hl = t.parentElement, o.appendChild(t)), t && !e && hl && hl.appendChild(t), t && (t.classList.toggle("active", e), t.setAttribute("aria-pressed", String(e)), t.setAttribute("aria-label", e ? "Done editing Home" : "Edit Home page"), t.title = e ? "Done" : "Edit", t.innerHTML = e ? Fu : gc), e ? (Ur = JSON.stringify(Ne), ja()) : Ur && JSON.stringify(Ne) !== Ur && Wa("Changes saved");
  }
  da.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', v.appendChild(da);
  let Hn = null;
  const In = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  In.setAttribute("role", "dialog"), v.appendChild(In);
  function Bs() {
    Hn && (Hn.setAttribute("aria-expanded", "false"), Hn = null, In.hidden = !0);
  }
  function Ps(e) {
    const t = Hn;
    if (Bs(), t === e) return;
    const [o, r] = _o[e.dataset.info];
    In.setAttribute("aria-label", o), In.innerHTML = '<div class="hcInfoTitle">' + X(o) + '</div><div class="hcInfoText">' + r + '</div><a class="hcInfoMore" href="' + Fc + '" target="_blank" rel="noopener">Learn more</a>', In.hidden = !1, Hn = e, e.setAttribute("aria-expanded", "true");
    const c = e.getBoundingClientRect(), h = In.offsetWidth, p = In.offsetHeight;
    In.style.left = Math.max(8, Math.min(innerWidth - h - 8, c.left + c.width / 2 - h / 2)) + "px", In.style.top = (c.bottom + 8 + p > innerHeight - 8 ? Math.max(8, c.top - 8 - p) : c.bottom + 8) + "px";
  }
  n.addEventListener("pointerdown", (e) => {
    Hn && !e.composedPath().some((t) => t === In || t === Hn) && Bs();
  }, !0), n.addEventListener("keydown", (e) => {
    var t;
    if (e.key === "Escape") {
      if (Hn) {
        e.stopPropagation();
        const o = Hn;
        Bs(), o.focus();
        return;
      }
      if (Xa) {
        e.stopPropagation(), Xa = !1, ja();
        return;
      }
      oi && (e.stopPropagation(), rr(!1), (t = u("dashEditNav")) == null || t.focus());
    }
  }, !0);
  const ml = (e) => e.dataset.heList === "favs" ? Ie() : Vd(), Ai = (e, t) => e.dataset.heList === "favs" ? Kr({ favourites: t }) : uo({ sumOrder: t });
  da.addEventListener("keydown", (e) => {
    var g;
    const t = e.target.closest("[data-he-grip]");
    if (!t || !["ArrowUp", "ArrowDown"].includes(e.key)) return;
    e.preventDefault();
    const o = t.closest("[data-he-id]"), r = o.parentElement, c = ml(r), h = c.indexOf(o.dataset.heId), p = h + (e.key === "ArrowUp" ? -1 : 1);
    p < 0 || p >= c.length || (c.splice(p, 0, c.splice(h, 1)[0]), Ai(r, c), (g = da.querySelector('[data-he-list="' + r.dataset.heList + '"] [data-he-id="' + CSS.escape(o.dataset.heId) + '"] [data-he-grip]')) == null || g.focus());
  }), da.addEventListener("pointerdown", (e) => {
    const t = e.target.closest("[data-he-grip]");
    if (!t || e.button !== 0) return;
    e.preventDefault();
    const o = t.closest("[data-he-id]"), r = o.parentElement;
    o.classList.add("moving");
    const c = (p) => {
      const g = [...r.children].filter((_) => _ !== o), w = g.find((_) => {
        const N = _.getBoundingClientRect();
        return p.clientY < N.top + N.height / 2;
      });
      w !== o.nextElementSibling && r.insertBefore(o, w || null);
    }, h = () => {
      removeEventListener("pointermove", c), removeEventListener("pointerup", h), o.classList.remove("moving"), Ai(r, [...r.children].map((p) => p.dataset.heId).filter(Boolean));
    };
    addEventListener("pointermove", c), addEventListener("pointerup", h);
  }), da.addEventListener("input", (e) => {
    if (e.target.matches("[data-he-search]")) {
      const t = e.target.selectionStart;
      ja();
      const o = da.querySelector("[data-he-search]");
      o.focus(), o.setSelectionRange(t, t);
    }
  }), da.addEventListener("click", (e) => {
    var se, K;
    const t = e.target, o = t.closest("[data-info]");
    if (o) {
      Ps(o);
      return;
    }
    const r = t.closest("[data-he-tab]");
    if (r) {
      const Q = da.querySelector(".hcTrayTabs .rubberIndicator"), j = { left: Q.offsetLeft, width: Q.offsetWidth };
      Yr = r.dataset.heTab, Xa = !1, Bs(), ja(), Ql(!0, j), da.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (t.closest("[data-he-welcome]")) {
      uo({ welcome: !wi() });
      return;
    }
    const c = t.closest("[data-he-card]");
    if (c) {
      const Q = c.dataset.heCard, j = ["sums", "favs"].includes(Q) ? ((se = Ne.home) == null ? void 0 : se[Q]) !== !1 : !!((K = Ne.home) != null && K[Q]);
      uo({ [Q]: !j });
      return;
    }
    const h = t.closest("[data-he-favs-as]");
    if (h) {
      uo({ favsAs: h.dataset.heFavsAs });
      return;
    }
    const p = t.closest("[data-he-sums-width]");
    if (p) {
      uo({ sumsWidth: p.dataset.heSumsWidth });
      return;
    }
    const g = t.closest("[data-he-area-size]");
    if (g) {
      uo({ areaSize: g.dataset.heAreaSize });
      return;
    }
    const w = t.closest("[data-he-area-layout]");
    if (w) {
      uo({ areaLayout: w.dataset.heAreaLayout });
      return;
    }
    const _ = t.closest("[data-he-cards-as]");
    if (_) {
      uo({ cardsAs: _.dataset.heCardsAs });
      return;
    }
    const N = t.closest("[data-he-flag]");
    if (N) {
      const Q = N.dataset.heFlag;
      uo({ [Q]: !ki(Q) });
      return;
    }
    if (t.closest("[data-he-suggest]")) {
      Kr({ suggest: !qa() });
      return;
    }
    const T = t.closest("[data-he-sum]");
    if (T) {
      const Q = T.dataset.heSum, j = !mi(Q), xe = Ne.home || {};
      uo(_u.includes(Q) ? { shownSums: j ? [...xe.shownSums || [], Q] : (xe.shownSums || []).filter((Z) => Z !== Q) } : { hiddenSums: j ? (xe.hiddenSums || []).filter((Z) => Z !== Q) : [...xe.hiddenSums || [], Q] });
      return;
    }
    const P = t.closest("[data-he-remove]");
    if (P) {
      Kr({ favourites: Ie().filter((Q) => Q !== P.dataset.heRemove) });
      return;
    }
    if (t.closest("[data-he-add]")) {
      Xa = !Xa, ja(), Xa && da.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const te = t.closest("[data-he-pick-id]");
    te && (Xa = !1, da.querySelector("[data-he-search]").value = "", Kr({ favourites: [...Ie(), te.dataset.hePickId] }));
  });
  function ca() {
    var _, N;
    const e = ln && v.classList.contains("tfBoard");
    if (_t.classList.toggle("open", e), _t.classList.toggle("tucked", e && ea), _t.toggleAttribute("inert", !e), e || (Eo = !1), (!e || !v.classList.contains("tfEditing")) && cl(), Ud(), !e) return;
    const t = _t.querySelector("[data-tray-tuck]");
    t.innerHTML = ea ? ku : Iu, t.setAttribute("aria-expanded", String(!ea)), t.setAttribute("aria-label", ea ? "Show the edit tray" : "Tuck the edit tray away");
    const o = Ct().hidden.filter((T) => !ro.includes(T) && Jn().some((P) => P.key === T)), r = (T, P) => '<button class="tfTrayCard" type="button" data-tray-card="' + X(T) + '" aria-label="' + X(kn(T)) + ": drag it onto the board, or press to " + P + '"><span class="tfTrayGrip" aria-hidden="true">' + hc + "</span>" + X(kn(T)) + "</button>", c = o.filter((T) => !vo.includes(T)), h = vo.filter((T) => o.includes(T));
    Do("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Va("welcome") + '<button class="switch' + (Ct().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!Ct().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((_ = Ne.dash) != null && _.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((N = Ne.dash) != null && N.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => ll(!1)), Do("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (c.length ? '<div class="tfTrayCards">' + c.map((T) => r(T, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Do("weather", '<div class="sectionLabel">Weather</div>' + (h.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + h.map((T) => r(T, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), Do("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (Ct().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Eo + '">' + (Eo ? "Hide the phone" : "Show the phone") + "</button>");
    const p = new Set(Ne.favHidden || []), g = Ie(), w = [...g, ...[...p].filter((T) => !g.includes(T) && M[T])];
    if (Do("favs", w.map((T) => ir(T, p.has(T), g.includes(T))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), _t.querySelector('[data-pick="tiles"]').hidden = !ni, _t.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(ni)), ni && Do("tilepick", fl(_t.querySelector("[data-tile-search]").value, (T) => vd.includes(T.split(".")[0]), new Set(Ds()), "data-tile-pick")), _t.querySelector('[data-tray="roompick"]').hidden = !Gr, _t.querySelector("[data-room-add]").setAttribute("aria-expanded", String(Gr)), Gr) {
      const T = new Set(Ds());
      Do("roompick", We.filter((P) => !T.has("room:" + P.id)).map((P) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + X(P.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + la("area:" + P.id, P.icon || "mdi:texture-box", P.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + X(P.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    _t.querySelector('[data-pick="favs"]').hidden = !co, _t.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(co)), co && Do("pick", fl(_t.querySelector("[data-fav-search]").value, (T) => Od.test(T), new Set(Ie()), "data-fav-pick")), Do("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (qa() ? " on" : "") + '" type="button" role="switch" aria-checked="' + qa() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const sr = (e) => {
    Ne = { ...Ne, ...e }, ao(), ma(), ca();
  };
  function td(e, t) {
    const o = Ne, r = new Set(Ne.favHidden || []);
    t ? r.delete(e) : r.add(e), sr({ favHidden: [...r] }), t ? Wa(Pe(e) + " put back") : Wa(Pe(e) + " hidden", _s(o));
  }
  const lr = (e) => {
    const t = Ne;
    sr({ favourites: Ie().filter((o) => o !== e), favHidden: (Ne.favHidden || []).filter((o) => o !== e) }), Wa(Pe(e) + " removed from favourites", _s(t));
  }, jd = (e) => {
    sr({ favourites: [...Ie().filter((t) => t !== e), e], favHidden: (Ne.favHidden || []).filter((t) => t !== e) }), Wa(Pe(e) + " added to favourites");
  };
  _t.addEventListener("click", (e) => {
    var o, r;
    const t = e.target.closest("button");
    if (t) {
      if (t.hasAttribute("data-tray-tab")) {
        Rs = t.dataset.trayTab, ll(!0), _t.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (t.hasAttribute("data-tray-done")) Yl(!1);
      else if (t.hasAttribute("data-info")) Ps(t);
      else if (t.hasAttribute("data-dash-sums"))
        ei({ ...Ji(), hidden: Ji().hidden.filter((c) => c !== "sums"), sumsOff: !((o = Ne.dash) != null && o.sumsOff) }), ma(), ca();
      else if (t.hasAttribute("data-dash-welcome")) {
        const c = Ct();
        ei({ ...c, welcome: !c.welcome }), ma(), ca();
      } else t.hasAttribute("data-tray-tuck") ? (ea = !ea, ca()) : t.hasAttribute("data-phone-toggle") ? (Eo = !Eo, ca(), Eo && ((r = hn.querySelector("[data-phone-key]")) == null || r.focus({ preventScroll: !0 }))) : t.dataset.trayCard ? e.detail === 0 && (il(t.dataset.trayCard), ca()) : t.dataset.favEye ? td(t.dataset.favEye, t.getAttribute("aria-pressed") !== "true") : t.dataset.favRemove ? lr(t.dataset.favRemove) : t.hasAttribute("data-fav-add") ? (co = !co, ca(), co && _t.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : t.dataset.favPick ? jd(t.dataset.favPick) : t.hasAttribute("data-tile-add") ? (ni = !ni, ca(), ni && _t.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : t.dataset.tilePick ? Hd(t.dataset.tilePick) : t.hasAttribute("data-area-choose") ? Nn() : t.hasAttribute("data-room-add") ? (Gr = !Gr, ca()) : t.dataset.roomPick ? Hd("room:" + t.dataset.roomPick) : t.hasAttribute("data-fav-suggest") && sr({ suggest: !qa() });
    }
  }), _t.addEventListener("input", (e) => {
    e.target.matches("[data-fav-search],[data-tile-search]") && ca();
  }), _t.addEventListener("keydown", (e) => {
    var o, r;
    const t = !!((r = (o = e.target).closest) != null && r.call(o, '[data-pick="tiles"],[data-tile-add]'));
    e.key !== "Escape" || !(t ? ni : co) || (e.stopPropagation(), t ? ni = !1 : co = !1, ca(), _t.querySelector(t ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Sa(e, t, o, r) {
    e.preventDefault();
    const c = e.clientX, h = e.clientY;
    let p = null, g = 0;
    const w = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), _ = (T) => {
      if (!p) {
        if (Math.hypot(T.clientX - c, T.clientY - h) < 4) return;
        p = t.cloneNode(!0), p.classList.add("tfTrayGhost"), p.style.width = t.offsetWidth + "px", v.appendChild(p);
      }
      p.style.transform = "translate(" + (T.clientX - 24) + "px," + (T.clientY - 24) + "px)";
      const P = !ea && T.clientX >= _t.getBoundingClientRect().left;
      if (o === "card") {
        const K = E.getBoundingClientRect(), { w: Q } = so(E.clientWidth);
        Bt = !P && T.clientX >= K.left && T.clientX <= K.right && T.clientY >= K.top + Ka ? { key: r, col: Math.max(0, Math.floor((T.clientX - K.left) / (Q + Qt))), row: Math.max(0, Math.floor((T.clientY - K.top - Ka) / Pn)), fromTray: !0 } : null, g || (g = requestAnimationFrame(() => {
          g = 0, Ha();
        }));
        return;
      }
      const te = E.querySelector(".tfDash-favs"), se = te == null ? void 0 : te.getBoundingClientRect();
      if (fn = null, se && !P && T.clientX >= se.left && T.clientX <= se.right && T.clientY >= se.top && T.clientY <= se.bottom) {
        let K = 1 / 0;
        te.querySelectorAll('[data-k^="fav:"]').forEach((Q, j) => {
          const xe = Q.getBoundingClientRect(), Z = Math.hypot(T.clientX - (xe.left + xe.width / 2), T.clientY - (xe.top + xe.height / 2));
          Z < K && (K = Z, fn = { i: j, r: xe, after: T.clientX > xe.left + xe.width / 2 });
        }), fn || (fn = { i: 0, r: null, after: !1 });
      }
      fn != null && fn.r ? (w.isConnected || v.appendChild(w), Object.assign(w.style, { left: (fn.after ? fn.r.right : fn.r.left) - 2 + "px", top: fn.r.top + 8 + "px", height: fn.r.height - 16 + "px" })) : w.remove();
    }, N = () => {
      if (window.removeEventListener("pointermove", _), window.removeEventListener("pointerup", N), window.removeEventListener("pointercancel", N), cancelAnimationFrame(g), p == null || p.remove(), w.remove(), o === "card") {
        if (!p) il(r);
        else if (Bt != null && Bt.fromTray) {
          Ha();
          const K = kn(r) + Pd(r), Q = Ct(), j = Ao();
          Bt = null, Or({ ...Q, hidden: Q.hidden.filter((xe) => xe !== r) }, j), Wa(K);
        }
        Bt = null, Ha(), ma(), ca();
        return;
      }
      if (!fn) return;
      const T = new Set(Ne.favHidden || []);
      T.delete(r);
      const P = Ie().filter((K) => K !== r), te = P.filter((K) => !T.has(K)), se = te[Math.min(fn.i + (fn.after ? 1 : 0), te.length)];
      P.splice(se ? P.indexOf(se) : P.length, 0, r), fn = null, sr({ favourites: P, favHidden: [...T] }), Wa(Pe(r) + " put back");
    };
    window.addEventListener("pointermove", _), window.addEventListener("pointerup", N), window.addEventListener("pointercancel", N);
  }
  const zd = {
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
  }, Ro = 136, Gd = 288, Oc = 0.8, ad = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, hn = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  hn.setAttribute("aria-label", "Phone order"), hn.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + gp + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', v.appendChild(hn);
  let $r = "";
  function Ud() {
    var g;
    const e = Eo && ln && v.classList.contains("tfBoard") && !ea;
    if (hn.classList.toggle("open", e), hn.toggleAttribute("inert", !e), !e) return;
    const t = Fr().filter((w) => !Ct().hidden.includes(w.key)), o = t.length, r = (w) => Math.round(w * Oc * 10) / 10 + "px", c = (w, _) => {
      const N = w.el.classList.contains("tfDac"), T = w.tile ? N ? Gd : Ro : zd[w.key] || Ro;
      return '<button class="tfPhoneBlock' + (w.tile ? " tile" : "") + '" type="button" data-phone-key="' + X(w.key) + '" style="min-height:' + r(T) + '" aria-label="' + X(kn(w.key) + ", " + (_ + 1) + " of " + o + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (w.tile ? la(w.key, bn(w.key)) : la(w.key, ad[w.key])) + '></span><span class="tfPhoneName">' + X(kn(w.key)) + "</span></button>";
    }, h = '<div class="tfPhoneTitle">' + X(((g = E.querySelector(".tfDashTitle")) == null ? void 0 : g.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + r(zd.sums) + '"><span class="tfPhoneName">' + X(kn("sums")) + "</span></div>" + t.map(c).join("");
    if (hn.querySelector('[data-phone="note"]').innerHTML = Ct().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", h === $r) return;
    $r = h;
    const p = hn.querySelector('[data-phone="list"]');
    p.innerHTML = h, no(p);
  }
  function Yd(e, t) {
    var o;
    ei({ ...Ct(), phone: e }), ca(), t && ((o = hn.querySelector('[data-phone-key="' + CSS.escape(t) + '"]')) == null || o.focus({ preventScroll: !0 }));
  }
  const Xr = () => [...hn.querySelectorAll("[data-phone-key]")].map((e) => e.dataset.phoneKey);
  function Qn(e, t) {
    e.preventDefault();
    const o = t.parentElement, r = hn.querySelector(".tfPhoneScreen"), c = Xr().join();
    t.classList.add("moving");
    const h = (g) => {
      const w = r.getBoundingClientRect();
      g.clientY > w.bottom - 40 ? r.scrollTop += 12 : g.clientY < w.top + 40 && (r.scrollTop -= 12);
      const _ = [...o.querySelectorAll("[data-phone-key]")].find((P) => {
        const te = P.getBoundingClientRect();
        return P !== t && g.clientX >= te.left && g.clientX <= te.right && g.clientY >= te.top && g.clientY <= te.bottom;
      });
      if (!_) return;
      const N = _.getBoundingClientRect(), T = _.classList.contains("tile") ? g.clientX < N.left + N.width / 2 : g.clientY < N.top + N.height / 2;
      o.insertBefore(t, T ? _ : _.nextSibling);
    }, p = () => {
      window.removeEventListener("pointermove", h), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), t.classList.remove("moving");
      const g = Xr();
      $r = "", g.join() !== c ? Yd(g) : Ud();
    };
    window.addEventListener("pointermove", h), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  hn.addEventListener("pointerdown", (e) => {
    const t = e.target.closest("[data-phone-key]");
    t && e.button <= 0 && Qn(e, t);
  }), hn.addEventListener("click", (e) => {
    var o;
    const t = e.target.closest("button");
    if (t != null && t.hasAttribute("data-phone-close"))
      Eo = !1, ca(), (o = _t.querySelector("[data-phone-toggle]")) == null || o.focus({ preventScroll: !0 });
    else if (t != null && t.hasAttribute("data-phone-reset")) {
      const { phone: r, ...c } = Ct();
      ei(c), ca();
    }
  }), hn.addEventListener("keydown", (e) => {
    var p, g, w, _;
    if (e.key === "Escape") {
      e.stopPropagation(), Eo = !1, ca(), (p = _t.querySelector("[data-phone-toggle]")) == null || p.focus({ preventScroll: !0 });
      return;
    }
    const t = (_ = (w = (g = e.target).closest) == null ? void 0 : w.call(g, "[data-phone-key]")) == null ? void 0 : _.dataset.phoneKey, o = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!t || !o) return;
    e.preventDefault();
    const r = Xr(), c = r.indexOf(t), h = c + o;
    h < 0 || h >= r.length || ([r[c], r[h]] = [r[h], r[c]], Yd(r, t));
  });
  function Ns(e, t) {
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
      const h = new Set(Ie());
      pl.favs = null, sr({ favourites: [...o.children].map((p) => p.dataset.trayFav).filter((p) => h.has(p)) });
    };
    window.addEventListener("pointermove", r), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", c);
  }
  _t.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    const t = e.target.closest("[data-tray-card]"), o = e.target.closest(".tfTrayFav");
    t ? Sa(e, t, "card", t.dataset.trayCard) : o && e.target.closest(".tfTrayGrip") ? Ns(e, o) : o != null && o.classList.contains("off") && !e.target.closest("button") && Sa(e, o, "fav", o.dataset.trayFav);
  });
  function Zd(e) {
    if (!ln || e.button !== 0 || e.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const t = e.target.closest(".tfBoardItem"), o = t && Jn().find((Vt) => Vt.el === t);
    if (!o || ro.includes(o.key)) return;
    const r = xi.get(o.key), { w: c } = so(E.clientWidth);
    if (!r) return;
    e.preventDefault(), lo();
    const h = e.clientX, p = e.clientY;
    let g = !1, w = 0;
    const _ = Ca.drag, N = Qa();
    let T = 0, P = 0, te = 0, se = 0, K = 0, Q = 0, j = N || _.stick === 0, xe = 0;
    const Z = (Vt, Da, Qe, St) => {
      t.style.transform = "translate(" + te.toFixed(2) + "px," + se.toFixed(2) + "px) rotate(" + Vt.toFixed(2) + "deg) rotate(" + Da + "rad) scale(" + Qe.toFixed(4) + "," + St.toFixed(4) + ") rotate(" + -Da + "rad)";
    }, je = () => {
      if (xe = requestAnimationFrame(je), N) {
        te = T, se = P, Z(0, 0, 1, 1);
        return;
      }
      if (!j) {
        const On = Math.min(Math.hypot(T, P) / Math.max(1, _.stick), 1);
        te = T * 0.35, se = P * 0.35, Z(0, Math.atan2(P, T), 1 + 0.155 * On, 1 - 0.1 * On);
        return;
      }
      K = $p(K, T - te, _.pull / 100, _.keep / 100), Q = $p(Q, P - se, _.pull / 100, _.keep / 100), te += K, se += Q;
      const Vt = Math.hypot(K, Q), Da = Math.min(Vt / 48, 1), Qe = Math.max(-5, Math.min(_.tilt, K * 0.32)), St = 1 + _.lift / 100;
      Z(Qe, Math.atan2(Q, K), St * (1 + 0.1 * Da), St * (1 - 0.063 * Da));
    }, Wt = (Vt) => {
      if (T = Vt.clientX - h, P = Vt.clientY - p, !g) {
        if (Math.hypot(T, P) < 4) return;
        g = !0, Bt = { key: o.key, col: r.col, row: r.row }, t.classList.add("tfDragging", "mvDrag"), xe = requestAnimationFrame(je);
      }
      !j && Math.hypot(T, P) > _.stick && (j = !0, K = T * 0.085, Q = P * 0.085), Bt.col = Math.round((r.x + T) / (c + Qt)), Bt.row = Math.round((r.y + P - Ka) / Pn), w || (w = requestAnimationFrame(() => {
        w = 0, Ha();
      }));
    }, st = () => {
      var ac;
      if (window.removeEventListener("pointermove", Wt), window.removeEventListener("pointerup", st), window.removeEventListener("pointercancel", st), !g) return;
      const Vt = (ud) => {
        ud.preventDefault(), ud.stopImmediatePropagation();
      };
      window.addEventListener("click", Vt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Vt, { capture: !0 }), 300), cancelAnimationFrame(w), cancelAnimationFrame(xe);
      const Da = t.getBoundingClientRect(), Qe = o.key;
      t.style.transition = "none", Ha(), t.classList.remove("tfDragging", "mvDrag"), t.style.transform = "", Bt = null, Or(Ct(), Ao()), Ha(), ma();
      const St = (ac = Jn().find((ud) => ud.key === Qe)) == null ? void 0 : ac.el;
      if (requestAnimationFrame(() => {
        t.style.transition = "", St && (St.style.transition = "");
      }), !St || N) return;
      St.style.transition = "none";
      const On = St.getBoundingClientRect(), Ri = Da.left + Da.width / 2 - (On.left + On.width / 2), tc = Da.top + Da.height / 2 - (On.top + On.height / 2);
      St.style.zIndex = "20", St.animate([{ transform: "translate(" + Ri + "px," + tc + "px) scale(" + (1 + _.lift / 100) + ")" }, { transform: "none" }], { duration: _.slide, easing: sa.land }).finished.then(() => {
        St.style.zIndex = "", Xp(St);
      }, () => {
        St.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", Wt), window.addEventListener("pointerup", st), window.addEventListener("pointercancel", st);
  }
  function nd(e = !1) {
    const t = E == null ? void 0 : E.querySelector(".tfDashGraph svg[data-graph]");
    if (!(t != null && t.clientWidth)) return;
    const o = t.dataset.graph + "@" + t.clientWidth + "x" + t.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (t.dataset.drawn === o) return;
    const r = !t.dataset.drawn;
    t.dataset.drawn = o;
    const c = gi.find((h) => h.id === t.dataset.graph);
    c ? Xo(t, c).then(() => {
      (e || r) && Pr(t);
    }) : _i(t.dataset.graph, t).then(() => {
      e && $i(t);
    });
  }
  function od() {
    var w, _, N;
    gt = An.model(i(), { madeUp: !A }), $a(), M = gt.states, M[(w = Ne.sources) == null ? void 0 : w.grid] && (gt.grid = Ne.sources.grid), M[(_ = Ne.sources) == null ? void 0 : _.alarm] && (gt.security.alarms = [Ne.sources.alarm]), $e.forEach((T, P) => {
      const te = M[P], se = (te == null ? void 0 : te.attributes) || {};
      if (!te || Date.now() - T.at > 2 * 60 * 1e3) {
        $e.delete(P);
        return;
      }
      T.pos != null && te.state !== "opening" && te.state !== "closing" && Math.abs($n(P) - T.pos) < 1 && delete T.pos, T.tilt != null && Math.abs((se.current_tilt_position ?? -1) - T.tilt) < 1 && delete T.tilt, T.pos == null && T.tilt == null && $e.delete(P);
    });
    const e = [];
    let t = 0;
    const o = ot();
    We = o.filter((T) => T.room).map((T) => T.room), We.some((T) => T.id === B) || (B = ((N = We[0]) == null ? void 0 : N.id) || null);
    const r = q === "weather" ? { key: "weather", name: "Weather" } : q && o.find((T) => T.key === q);
    if (r || (q = null), v.classList.toggle("tfAreaOpen", !!r), v.classList.toggle("tfWeatherOpen", (r == null ? void 0 : r.key) === "weather"), v.classList.toggle("tfDash", !r), pt = /* @__PURE__ */ new Map(), gt.rooms.forEach((T) => [...T.actions, ...T.plugs, ...T.readings, ...T.openings, ...T.solar, ...T.plants.flatMap((P) => [P.id, ...P.readings])].forEach((P) => pt.set(P, T.name))), !r) return Td(e, Na());
    if (e.push({ key: "areahead", html: Mn(r, ++t) }), r.key === "weather")
      return e.weather = ++t, e;
    const c = r.ids, h = r.room ? r.room.id : r.key, p = r.room;
    p != null && p.solar.length && e.push({ key: "energy:" + p.id, html: Xt(p, ++t) }), p && (p.readings.length || p.power != null) && e.push({ key: "readings:" + p.id, html: yo(p, ++t) }), p == null || p.plants.forEach((T) => e.push({ key: "plant:" + T.id, html: Xn(T, ++t) }));
    const g = [...c, ...((p == null ? void 0 : p.plugs) || []).filter((T) => !c.includes(T))];
    return g.length && e.push({ key: "block:" + h, order: ++t, tiles: g.map((T) => ({ key: T, html: Gi(T) })) }), e;
  }
  const Mn = (e, t) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + t + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + ku + '</button><div class="settingsTitle">' + X(e.name) + "</div></div>";
  let ii = 0, Jr = null;
  const eo = (e) => e === "weather" ? Kn.wx : e.startsWith("room:") && E.querySelector('.tfRoomTile[data-k="' + CSS.escape(e) + '"]') || E.querySelector(".tfAreas");
  function Ei(e) {
    var t, o;
    q || (ii = Di().scrollTop, Jr = ((t = eo(e)) == null ? void 0 : t.getBoundingClientRect().top) ?? null), q = e, e.startsWith("room:") && (B = e.slice(5)), fo(), Di().scrollTop = 0, (o = E.querySelector("[data-area-back]")) == null || o.focus({ preventScroll: !0 });
  }
  let dr = null;
  function Qr(e, t) {
    if (dr == null || dr(), t == null) return;
    const o = Di(), r = performance.now() + 1500, c = ["wheel", "touchstart", "pointerdown", "keydown"];
    let h = 0;
    const p = () => {
      cancelAnimationFrame(h), c.forEach((w) => window.removeEventListener(w, p, !0)), dr = null;
    }, g = () => {
      const w = e();
      if (w != null && w.isConnected) {
        const _ = w.getBoundingClientRect().top - t;
        Math.abs(_) > 0.5 && (o.scrollTop += _);
      }
      performance.now() < r ? h = requestAnimationFrame(g) : p();
    };
    c.forEach((w) => window.addEventListener(w, p, { capture: !0, passive: !0 })), dr = p, g();
  }
  function gl() {
    var o;
    const e = q;
    q = null, fo(), Di().scrollTop = ii, Qr(() => eo(e), Jr);
    const t = e.startsWith("room:") ? E.querySelector('.tfRoomTile[data-k="' + CSS.escape(e) + '"]') || E.querySelector('.tfAreaPanel[data-area="' + CSS.escape(e.slice(5)) + '"]') : e === "weather" ? Kn.wx.querySelector(".wbOpenPage") : E.querySelector('[data-k="sum:' + CSS.escape(e) + '"]');
    (o = (t == null ? void 0 : t.querySelector("[data-go]")) || t) == null || o.focus({ preventScroll: !0 });
  }
  const id = (e) => e.wrap ? e.wrap(e.tiles.map((t) => t.html).join(""), e) : '<div class="tfBlock" data-tf data-k="' + X(e.key) + '" style="order:' + e.order + '"><div class="tfActions">' + e.tiles.map((t) => t.html).join("") + "</div></div>", rd = (e) => e.map((t) => t.key + (t.tiles ? "(" + t.tiles.map((o) => o.key).join(",") + ")" : "")).join(";");
  function Di() {
    for (let e = v.parentElement || v.getRootNode().host; e; e = e.parentElement || e.getRootNode().host) {
      const t = getComputedStyle(e).overflowY;
      if ((t === "auto" || t === "scroll") && e.scrollHeight > e.clientHeight) return e;
    }
    return document.scrollingElement;
  }
  function sd(e) {
    const t = Di(), o = (g) => {
      const w = g.getBoundingClientRect();
      return w.height && w.bottom > 0 && w.top < window.innerHeight;
    }, r = [...E.children, ...E.querySelectorAll(".tfDashTiles > *")].find((g) => !g.matches(".tfDashTiles") && o(g)), c = r == null ? void 0 : r.dataset.k, h = r == null ? void 0 : r.getBoundingClientRect().top;
    e();
    const p = r != null && r.isConnected ? r : c && E.querySelector('[data-k="' + CSS.escape(c) + '"]');
    p != null && p.isConnected && h != null && (t.scrollTop += p.getBoundingClientRect().top - h);
  }
  function fo() {
    if (!k || !E) return;
    const e = od(), t = (c) => {
      var h;
      return (((h = c.closest("[data-k]")) == null ? void 0 : h.dataset.k) || "") + "|" + c.dataset.iconFor + "|" + (c.dataset.iconName || "");
    }, o = /* @__PURE__ */ new Map();
    E.querySelectorAll("[data-tf] [data-icon-for]").forEach((c) => {
      c.firstElementChild && (o.get(t(c)) || o.set(t(c), []).get(t(c))).push(c.firstElementChild);
    }), E.querySelectorAll("[data-tf]").forEach((c) => c.remove()), vn.clear();
    const r = document.createElement("div");
    r.innerHTML = e.map((c) => c.tiles ? id(c) : c.html).join(""), e.forEach((c) => c.tiles ? c.tiles.forEach((h) => vn.set(h.key, h.html)) : vn.set(c.key, c.html)), ds = rd(e), r.querySelectorAll("[data-icon-for]").forEach((c) => {
      var p;
      const h = !c.firstElementChild && ((p = o.get(t(c))) == null ? void 0 : p.shift());
      h && c.appendChild(h);
    }), E.append(...r.children), ps(e.weather), dt(), ol.disconnect(), Ha(), no(E), Me(E), Kt(E), G(), L && _i(L.id), si(), Je(), Fe(), requestAnimationFrame(ie);
  }
  const ld = (e) => {
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
  function dd(e, t) {
    const o = document.createElement("div");
    o.innerHTML = t;
    const r = ld(e), c = Hs(e, o.firstElementChild);
    no(c), Me(c), Kt(c), vl(c, r);
  }
  function ma() {
    !k || !E || Bt || sd(Kd);
  }
  function Kd() {
    if (!E.querySelector("[data-tf]")) {
      fo();
      return;
    }
    const e = od();
    if (rd(e) !== ds) {
      fo();
      return;
    }
    const t = (o) => [...ge.keys()].some((r) => {
      const c = r.slice(r.indexOf("|") + 1);
      return o === c || o.endsWith(":" + c);
    });
    e.forEach((o) => (o.tiles || [o]).forEach((r) => {
      if (vn.get(r.key) === r.html || t(r.key)) return;
      const c = E.querySelector('[data-k="' + CSS.escape(r.key) + '"]');
      if (c) {
        if (vn.set(r.key, r.html), L && L.key === r.key && c.querySelector(".tfOpen")) {
          c.querySelector(".tfOpen .activityRowMeta").textContent = jo(L.id);
          return;
        }
        dd(c, r.html), L && L.key === r.key && _i(L.id), r.key.startsWith("energy:") && si();
      }
    })), Je(), Fe(), Mo(), G(), $t == null || $t.update(), wa == null || wa.forEach((o) => o.update()), v.classList.contains("tfDash") && As(), requestAnimationFrame(ie);
  }
  const ri = {
    light: (e) => [["Brightness", e.brightness != null ? Math.round(e.brightness / 2.55) + "%" : null], ["Colour temperature", e.color_temp_kelvin ? Number(e.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", e.color_mode && Rt(e.color_mode)]],
    climate: (e) => [["Current temperature", Ot(e.current_temperature) + " °C"], ["Target", Ot(e.temperature) + " °C"], ["Action", Rt(e.hvac_action)]],
    cover: (e) => [["Position", e.current_position != null ? e.current_position + "% open" : null], ["Tilt", e.current_tilt_position != null ? e.current_tilt_position + "% open" : null]],
    humidifier: (e) => [["Current humidity", e.current_humidity + "%"], ["Target", e.humidity + "%"], ["Mode", Rt(e.mode)]],
    media_player: (e) => [["Title", e.media_title], ["Artist", e.media_artist], ["Volume", e.volume_level != null ? Math.round(e.volume_level * 100) + "%" : null], ["Source", e.source]],
    vacuum: (e) => [["Battery", e.battery_level + "%"], ["Fan speed", Rt(e.fan_speed)], ["Rooms", (e.rooms || []).join(", ") || null]],
    lock: (e) => [["Changed by", e.changed_by]],
    alarm_control_panel: (e) => [["Changed by", e.changed_by]],
    valve: () => [],
    plant: (e) => [["Moisture", e.moisture + "%"], ["Light", Number(e.brightness).toLocaleString() + " lx"], ["Temperature", Ot(e.temperature) + " °C"], ["Fertility", e.conductivity + " µS/cm"], ["Problems", e.problem === "none" ? "None" : Rt(e.problem)]],
    weather: (e) => [["Temperature", e.temperature != null ? e.temperature + " " + (e.temperature_unit || "°C") : null], ["Humidity", e.humidity != null ? e.humidity + "%" : null], ["Wind", e.wind_speed != null ? e.wind_speed + " " + (e.wind_speed_unit || "km/h") : null], ["Pressure", e.pressure != null ? e.pressure + " " + (e.pressure_unit || "hPa") : null]]
  }, $d = (e) => Bi(e) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function qc(e, t = {}, o = !1) {
    return '<div class="tfMoreList">' + e.map((r) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + X(r.name) + '</div><div class="tfMoreTiles' + (o ? " single" : "") + '">' + r.ids.map((c) => io(c, t)).join("") + "</div></div>").join("") + "</div>";
  }
  const Ge = document.createElement("div");
  Ge.className = "tfMoreBackdrop", Ge.hidden = !0, v.appendChild(Ge);
  const Sn = document.createElement("div");
  Sn.className = "tfMoreBackdrop tfMoreUnder", Sn.hidden = !0, v.insertBefore(Sn, Ge);
  const Is = (e, t) => {
    for (let o = e; o && o !== Ge; o = o.parentElement) {
      const r = getComputedStyle(o).overflowY;
      if ((r === "auto" || r === "scroll") && o.scrollHeight > o.clientHeight + 1 && (t < 0 ? o.scrollTop > 0 : o.scrollTop + o.clientHeight < o.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let cr = null;
  Ge.addEventListener("touchstart", (e) => {
    cr = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: !0 }), Ge.addEventListener("touchmove", (e) => {
    var c, h;
    if (!cr || e.touches.length > 1 || (h = (c = e.target).closest) != null && h.call(c, "input,textarea,select")) return;
    const t = e.touches[0], o = cr.x - t.clientX, r = cr.y - t.clientY;
    cr = { x: t.clientX, y: t.clientY }, Math.abs(r) >= Math.abs(o) && !Is(e.target, r) && e.preventDefault();
  }, { passive: !1 }), Ge.addEventListener("wheel", (e) => {
    var t, o;
    Math.abs(e.deltaX) > Math.abs(e.deltaY) && ((o = (t = e.target).closest) != null && o.call(t, "[data-more-pages]")) || Is(e.target, e.deltaY) || e.preventDefault();
  }, { passive: !1 });
  const Wc = () => window.innerWidth <= 620;
  let Fa = null;
  Ge.addEventListener("pointerdown", (e) => {
    const t = Ge.querySelector(".tfMorePair");
    !Wc() || !t || !t.contains(e.target) || !e.isPrimary || Ge._closing || e.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide") || (Fa = { x: e.clientX, y: e.clientY, t: performance.now(), dy: 0, v: 0, pair: t, from: e.target, grab: e.target.matches(".tfMore") || !!e.target.closest(".tfMoreHead") });
  }, !0), Ge.addEventListener("pointermove", (e) => {
    if (!Fa || !e.isPrimary) return;
    const t = e.clientY - Fa.y, o = performance.now();
    if (!Fa.on) {
      if (Math.abs(e.clientX - Fa.x) > 8 || t < -8 || !Fa.grab && Is(Fa.from, -1)) {
        Fa = null;
        return;
      }
      if (t < 8) return;
      Fa.on = !0;
      try {
        Ge.setPointerCapture(e.pointerId);
      } catch {
      }
    }
    Fa.v = (t - Fa.dy) / Math.max(1, o - Fa.t), Fa.dy = t, Fa.t = o, Fa.pair.style.transform = "translateY(" + Math.max(0, t) + "px)";
  });
  const cd = (e) => {
    if (!Fa || !e.isPrimary) return;
    const t = Fa;
    if (Fa = null, !t.on) return;
    const o = (_) => {
      _.preventDefault(), _.stopImmediatePropagation();
    };
    window.addEventListener("click", o, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", o, { capture: !0 }), 300);
    const r = e.type === "pointerup" && (t.dy > 120 || t.v > 0.5), c = "translateY(" + Math.max(0, t.dy) + "px)";
    if (t.pair.style.transform = "", !r || Qa()) {
      r ? rt() : t.pair.animate([{ transform: c }, { transform: "none" }], { duration: 320, easing: sa.spring });
      return;
    }
    const h = D;
    Ge._closing = !0, Ge.style.pointerEvents = "none", Ge.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: sa.exit, fill: "forwards" });
    const p = t.pair.animate([{ transform: c }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: sa.exit, fill: "forwards" });
    let g = !1;
    const w = () => {
      g || (g = !0, Ge._closing = !1, Ge.style.pointerEvents = "", Ge.getAnimations().forEach((_) => _.cancel()), t.pair.getAnimations().forEach((_) => _.cancel()), D === h && rt());
    };
    p.finished.then(w, w), setTimeout(w, 300);
  };
  Ge.addEventListener("pointerup", cd), Ge.addEventListener("pointercancel", cd);
  function bl() {
    const e = Ge.querySelector(".tfMorePair"), t = Ge.querySelector(".tfMore");
    e == null || e.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - t.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", bl, { passive: !0 }), k && Tt();
  let ho = [];
  const Xd = (e) => e === "favourites" || e.startsWith("summary:") || e.startsWith("group:");
  function Jd(e) {
    const t = (w, _ = "") => '<div class="tfMoreHead">' + (D != null && D.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + hp + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + X(w) + "</div>" + _ + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Mu + "</button></div>", o = (w, _) => '<div class="tfMoreNow"><div class="tfMoreState">' + X(w) + "</div></div>", r = qc;
    if (e === "favourites") {
      const w = Ie(), _ = new Set(w), N = [{ name: "Starred", ids: w }, { name: "Home", ids: gt.homeVacuums }, { name: "Security", ids: [...gt.security.alarms, ...gt.security.locks] }, ...gt.rooms.map((T) => ({ name: T.name, ids: [...T.actions, ...T.plugs] }))].map((T, P) => P ? { ...T, ids: T.ids.filter((te) => !_.has(te)) } : T).filter((T) => T.ids.length);
      return [t("Favourites"), o(w.length ? w.length + " starred" : "None starred"), r(N, { star: !0 }, !0)];
    }
    const c = (w, { name: _ = "", alert: N = !1, plain: T = !1 } = {}) => {
      const P = T ? [] : w.filter((K) => vd.includes(K.split(".")[0])), te = w.filter((K) => !P.includes(K)), se = (K) => K.startsWith("vacuum.") && wt(K).battery_level != null ? wt(K).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (_ ? '<div class="tfMoreGroupName">' + X(_) + "</div>" : "") + '<div class="tfMoreActions">' + P.map((K) => Gi(K, !0)).join("") + te.map((K) => io(K, { plain: T, alert: N, say: T ? se(K) : null })).join("") + "</div></div>";
    };
    if (e.startsWith("summary:")) {
      const w = Na().find((P) => P.key === e.slice(8));
      if (!w) return null;
      const _ = w.key === "light" ? (w.groups || []).flatMap((P) => P.ids) : [], N = _.some((P) => {
        var te;
        return ((te = M[P]) == null ? void 0 : te.state) === "on";
      }), T = _.length ? '<button class="primary" type="button" data-acts="' + Vi(_.map((P) => ["light", N ? "turn_off" : "turn_on", P])) + '">' + (N ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [t(w.name), '<div class="tfMoreNowRow">' + o(w.value) + T + "</div>", ...(w.groups || []).map((P) => c(P.ids, { name: P.name === w.name ? "" : P.name, alert: P.alert, plain: w.plain }))];
    }
    if (e.startsWith("group:")) {
      const [, w, _] = e.split(":"), N = gt.rooms.find((te) => te.id === w), T = N && b(N).find((te) => te.key === _);
      if (!T) return null;
      const P = T.acts ? '<button class="primary" type="button" data-acts="' + Vi(T.acts) + '">' + (T.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [t(N.name + " " + T.label.toLowerCase()), '<div class="tfMoreNowRow">' + o(T.value) + P + "</div>", c(y(N, _))];
    }
    const h = e.split(".")[0];
    M[e];
    const p = vd.includes(h) ? Zo(e) : s(e), g = (D == null ? void 0 : D.page) || 0;
    return [
      Qd(e, p),
      '<div class="tfMorePages" data-more-pages><section class="tfMorePage" aria-label="Control">' + d(e) + (h === "plant" ? za(e).join("") : "") + p.sections.filter(Boolean).join("") + '</section><section class="tfMorePage" aria-label="Info">' + S(e) + "</section></div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i), a small segmented pair
      '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="Pages">' + [["Control", Lg], ["Info", Hu]].map(([w, _], N) => '<button type="button" role="tab" aria-selected="' + (N === g) + '" aria-label="' + w + '" title="' + w + '" data-more-page="' + N + '"' + (N === g ? "" : ' tabindex="-1"') + ">" + _ + "</button>").join("") + "</div>"
    ];
  }
  function Qd(e, t, o) {
    var p, g, w, _, N;
    const r = (p = gt.areaOf) == null ? void 0 : p.call(gt, e), c = r && (((g = gt.rooms.find((T) => T.id === r)) == null ? void 0 : g.name) || ((N = (_ = (w = i()) == null ? void 0 : w.areas) == null ? void 0 : _[r]) == null ? void 0 : N.name)) || "", h = t.button ? ko(e, t) : '<div class="tfIcon"' + la(e, t.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (t.on ? " on" : "") + '"' + (t.tone ? ' data-tone="' + t.tone + '"' : "") + di(e) + ">" + (D != null && D.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + hp + "</button>" : "") + h + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + X(Pe(e)) + "</span>" + (c ? '<span class="activityRowMeta">' + X(c) + "</span>" : "") + '</div><button class="tfBack" type="button" data-more-close aria-label="Close">' + Mu + "</button></div>";
  }
  const a = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function s(e) {
    var c;
    const t = e.split(".")[0], o = ((c = M[e]) == null ? void 0 : c.state) === "on", r = mp.includes(t) ? { act: Lt(t, "toggle", e), label: "Turn " + Pe(e) + (o ? " off" : " on") } : t === "scene" || t === "script" ? { act: Lt(t, "turn_on", e), label: "Run " + Pe(e) } : null;
    return { sections: [], on: o, button: r, icon: bn(e) };
  }
  function d(e) {
    const t = e.split(".")[0];
    if (a.includes(t) || t === "light" && !wn(e)) {
      const c = vd.includes(t) ? Zo(e) : s(e);
      return c != null && c.button ? '<div class="tfMoreSpace tfMoreSwitch' + (c.on ? " on" : "") + '"' + (c.tone ? ' data-tone="' + c.tone + '"' : "") + di(e) + ">" + ko(e, c) + "</div>" : "";
    }
    if (t === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + X(e) + '"></div></div>';
    if (t === "light" && wn(e)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + X(e) + '"></div></div>';
    const { big: o, lines: r } = m(e);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (rn("pos", e) != null ? " live" : "") + '"><span class="tfMoreNum">' + X(o[0]) + "</span>" + (o[1] ? '<span class="tfMoreUnit">' + X(o[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + r.map(([c, h]) => '<div class="tfMoreFact"><span>' + X(c) + "</span><span>" + X(h) + "</span></div>").join("") + "</div></div>";
  }
  function m(e) {
    var N;
    const t = M[e], o = wt(e), r = e.split(".")[0], c = (((N = ri[r]) == null ? void 0 : N.call(ri, o)) || []).filter(([, T]) => T != null && T !== ""), h = (T) => {
      const P = c.findIndex(([te]) => te === T);
      return P < 0 ? null : c.splice(P, 1)[0][1];
    }, p = (T) => {
      const P = String(T).match(/^(-?[\d.,]+)\s*(.*)$/);
      return P ? [P[1], P[2]] : [String(T), ""];
    }, g = () => [Rt(String(t.state).replace(/_/g, " ")), ""];
    let w;
    r === "light" ? (h("Brightness"), w = t.state === "on" && Oa(e) ? [String(En(t)), "%"] : g()) : r === "climate" ? w = p(h("Current temperature") || Ot(o.current_temperature) + " °C") : r === "cover" ? (h("Position"), w = o.current_position != null ? [String($n(e)), "%"] : g()) : r === "humidifier" ? w = p(h("Current humidity") || t.state) : r === "vacuum" ? w = p(h("Battery") || t.state) : r === "plant" ? w = p(h("Moisture") || t.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(r) ? w = g() : w = p(t.state + (o.unit_of_measurement ? " " + o.unit_of_measurement : ""));
    const _ = c.length ? c.slice(0, 4) : [["State", Yt(e)]];
    return { big: w, lines: _ };
  }
  function S(e) {
    var _, N, T, P, te, se, K;
    const t = M[e], o = i(), r = (_ = o == null ? void 0 : o.entities) == null ? void 0 : _[e], c = r != null && r.device_id ? (N = o == null ? void 0 : o.devices) == null ? void 0 : N[r.device_id] : null, h = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + X(e) + '" role="img" aria-label="' + X(Pe(e)) + ', last 24 hours"></svg></div>', p = (T = gt.areaOf) == null ? void 0 : T.call(gt, e), g = p && (((P = gt.rooms.find((Q) => Q.id === p)) == null ? void 0 : P.name) || ((se = (te = o == null ? void 0 : o.areas) == null ? void 0 : te[p]) == null ? void 0 : se.name)) || "", w = [
      ...((K = ri[e.split(".")[0]]) == null ? void 0 : K.call(ri, wt(e))) || [],
      ["Changed", t.last_changed && Us(Date.parse(t.last_changed))],
      ["Area", g],
      ["Device", c && (c.name_by_user || c.name)],
      ["Integration", (r == null ? void 0 : r.platform) && Rt(r.platform.replace(/_/g, " "))],
      ["Entity", e]
    ].filter(([, Q]) => Q != null && Q !== "");
    return h + '<div class="tfMoreRows">' + w.map(([Q, j]) => '<div class="tfMoreRow"><span>' + X(Q) + "</span><span>" + X(j) + "</span></div>").join("") + "</div>" + $d(e) + (c ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + X(r.device_id) + '"><span>Device page</span>' + Iu + "</button>" : "");
  }
  const R = () => "";
  let O = "";
  function Y(e) {
    var t;
    D && (D.details = e, Je(), (t = Ge.querySelector(e ? "[data-details-close]" : "[data-details]")) == null || t.focus({ preventScroll: !0 }));
  }
  const ve = (e) => {
    const t = M[e], o = $n(e), r = ci(e);
    return { kind: fp(t), name: Pe(e), text: Yt(e), pos: o, target: Math.abs(r - o) > 0.5 ? r : null, moving: t.state === "opening" || t.state === "closing", tilt: Oo(e) ?? 100, canSet: Dt(e, Eu) };
  };
  function Me(e) {
    e.querySelectorAll("[data-cover-art]").forEach((t) => {
      const o = t.dataset.coverArt, r = t.dataset.artKey || "more:" + o;
      let c = at.get(r);
      c || (c = pg({ onMove: (h) => pa(o, h), onSet: (h) => {
        pa(o, h), Os("pos", o);
      } }), c.coverId = o, at.set(r, c)), t.replaceWith(c.el), c.update(ve(o));
    });
  }
  const we = (e) => [...at.values()].filter((t) => t.coverId === e), me = () => at.forEach((e) => {
    M[e.coverId] && e.update(ve(e.coverId));
  }), Fe = () => {
    at.forEach((e, t) => {
      e.el.isConnected || (e.destroy(), at.delete(t));
    }), me();
  };
  function Je() {
    var h, p;
    if (!D || !(Xd(D.id) || M[D.id])) {
      Ge.hidden = !0;
      return;
    }
    if ([...ge.keys()].some((g) => g.endsWith("|" + D.id))) {
      me();
      return;
    }
    const e = Jd(D.id), t = Ge.querySelector(".tfMore");
    if (!e) {
      lt();
      return;
    }
    const o = ld(Ge), r = R(D.id), c = D.frame ? D.frame.wide : D.id.startsWith("summary:") || D.id.startsWith("group:");
    if (Ge.hidden || !t || e.length !== ho.length || t.classList.contains("wide") !== c) {
      const g = Mt ? D.scroll || 0 : !Ge.hidden && t ? t.scrollTop : 0;
      if (Ge.innerHTML = '<div class="tfMorePair' + (Ge.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (c ? " wide" : "") + '"' + (D.frame ? ' style="height:' + D.frame.h + 'px"' : "") + ' tabindex="-1">' + e.join("") + "</section></div>", O = r, Ge.classList.toggle("wide", c), Ge.hidden = !1, bl(), Me(Ge), Kt(Ge), no(Ge), Ge.querySelectorAll("[data-day]").forEach((w) => Fs(w.dataset.day, w, D.at)), ta(Ge), g && (Ge.querySelector(".tfMore").scrollTop = g), Ve(), vl(Ge, o), !Ge.contains(n.activeElement)) {
        const w = Ge.querySelector("[data-more-close]");
        (h = w != null && w.offsetParent ? w : Ge.querySelector(".tfMore")) == null || h.focus({ preventScroll: !0 });
      }
    } else {
      if (e.forEach((g, w) => {
        var T, P;
        if (g === ho[w] || g.includes("data-cover-art") || t.children[w].contains((P = (T = n.activeElement) == null ? void 0 : T.matches) != null && P.call(T, "input,select") ? n.activeElement : null) || [...ge.keys()].some((te) => t.children[w].querySelector('[data-drag="' + CSS.escape(te) + '"]'))) return;
        const _ = document.createElement("div");
        _.innerHTML = g;
        const N = Hs(t.children[w], _.firstElementChild);
        no(N), ta(N), Kt(N);
      }), r !== O) {
        const g = Ge.querySelector(".tfMoreSideBody");
        g && (g.innerHTML = r), O = r;
      }
      t.querySelectorAll("[data-day]").forEach((g) => {
        g.innerHTML || Fs(g.dataset.day, g, D.at);
      }), Ve(), Ge.contains(n.activeElement) || vl(Ge, o);
    }
    (p = Ge.querySelector(".tfMorePair")) == null || p.classList.toggle("details", !!(D.details && r)), ho = e, me();
  }
  function Ve() {
    const e = Ge.querySelector("[data-more-pages]");
    !e || !D || (e.scrollTo({ left: (D.page || 0) * e.clientWidth, behavior: "instant" }), De(), He(e));
  }
  function He(e) {
    const t = e.children[(D == null ? void 0 : D.page) || 0];
    t && (e.style.height = t.scrollHeight + "px");
  }
  function De() {
    const e = (D == null ? void 0 : D.page) || 0;
    Ge.querySelectorAll("[data-more-page]").forEach((t) => {
      const o = Number(t.dataset.morePage) === e;
      t.setAttribute("aria-selected", String(o)), t.tabIndex = o ? 0 : -1;
    });
  }
  function xt(e, t) {
    var r, c;
    const o = Ge.querySelector("[data-more-pages]");
    !o || !D || (D.page = Math.max(0, Math.min(1, e)), o.scrollTo({ left: D.page * o.clientWidth, behavior: (r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), De(), He(o), (c = Ge.querySelector('[data-more-page="' + D.page + '"]')) == null || c.focus({ preventScroll: !0 }));
  }
  let kt = 0;
  Ge.addEventListener("scroll", (e) => {
    var o;
    const t = e.target;
    !((o = t.matches) != null && o.call(t, "[data-more-pages]")) || !D || (clearTimeout(kt), kt = setTimeout(() => {
      if (!D) return;
      const r = Math.round(t.scrollLeft / Math.max(1, t.clientWidth));
      r !== (D.page || 0) && (D.page = r, De(), He(t));
    }, 80));
  }, !0), setInterval(() => {
    D && Je();
  }, 15 * 1e3);
  function Ue(e, t) {
    var c, h;
    const o = !!(D && t && Ge.contains(t)), r = o && Ge.querySelector(".tfMore");
    if (o && (D.scroll = r.scrollTop), o && !D.under) {
      const p = Ge.querySelector(".tfMorePair"), g = { more: D, parts: ho, opener: t };
      p.classList.add("still"), p.style.transform = "", p.inert = !0, Sn.innerHTML = "", Sn.appendChild(p), Sn.classList.toggle("wide", Ge.classList.contains("wide")), Sn.hidden = !1, Ge.hidden = !0, Ge.innerHTML = "", D = { id: e, opener: t, back: null, frame: null, under: g, at: Number((c = t == null ? void 0 : t.dataset) == null ? void 0 : c.at) || null }, Nt();
      return;
    }
    D = { id: e, opener: o ? D.opener : t, back: o ? D : null, frame: o ? D.frame || { wide: r.classList.contains("wide"), h: r.offsetHeight } : null, under: o ? D.under : null, at: Number((h = t == null ? void 0 : t.dataset) == null ? void 0 : h.at) || null }, Nt();
  }
  let Mt = !1;
  function Nt() {
    ho = [], Mt = !Ge.hidden, at.forEach((e, t) => {
      t !== D.id && Ge.contains(e.el) && (e.destroy(), at.delete(t));
    }), Je(), Mt = !1;
  }
  function lt() {
    if (!D) return;
    const e = D;
    em(Ge, () => {
      D === e && rt();
    });
  }
  function rt() {
    var r, c, h, p, g, w, _, N;
    const e = D == null ? void 0 : D.opener, t = D == null ? void 0 : D.under;
    D = null, at.forEach((T, P) => {
      Ge.contains(T.el) && (T.destroy(), at.delete(P));
    }), an.forEach((T, P) => {
      P.startsWith("more:") && an.delete(P);
    }), Ge.hidden = !0, Ge.innerHTML = "";
    const o = { preventScroll: !0 };
    if (t) {
      const T = Sn.firstElementChild;
      D = t.more, ho = t.parts, T && (T.inert = !1, Ge.appendChild(T)), Ge.classList.toggle("wide", Sn.classList.contains("wide")), Sn.hidden = !0, Sn.innerHTML = "", Ge.hidden = !1;
      const P = Ge.querySelector(".tfMore");
      P && (P.scrollTop = D.scroll || 0), Je(), (c = (r = t.opener) != null && r.isConnected ? t.opener : Ge.querySelector("[data-more-close]")) == null || c.focus(o);
      return;
    }
    e != null && e.isConnected ? e.focus(o) : (h = e == null ? void 0 : e.dataset) != null && h.more ? (p = E.querySelector('[data-more="' + CSS.escape(e.dataset.more) + '"]')) == null || p.focus(o) : (g = e == null ? void 0 : e.dataset) != null && g.summary ? (w = E.querySelector('[data-summary="' + CSS.escape(e.dataset.summary) + '"]')) == null || w.focus(o) : (_ = e == null ? void 0 : e.hasAttribute) != null && _.call(e, "data-favs-edit") && ((N = E.querySelector("[data-favs-edit]")) == null || N.focus(o));
  }
  const Aa = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function za(e) {
    const t = String(wt(e).problem || ""), o = "sensor." + e.split(".")[1] + "_";
    return t === "none" ? [] : t.split(",").map((r) => r.trim().split(" ")).map(([r, c]) => {
      const h = Aa[r], p = o + h;
      if (!h || !M[p] || !Vs[h]) return "";
      const g = wt(p).unit_of_measurement || "", [w, _] = Vs[h], N = c === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + X(Pe(p)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + X(p) + '" data-guide="' + (N ? w : _) + '" data-guide-word="' + X("Wants " + (N ? "" : "up to ") + (N ? w : _).toLocaleString() + (g === "%" ? "%" : g ? " " + g : "") + (N ? " or more" : "")) + '" role="img" aria-label="' + X(Pe(p)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const ta = (e) => e.querySelectorAll("[data-plant-graph]").forEach((t) => _i(t.dataset.plantGraph, t, { guide: Number(t.dataset.guide), guideWord: t.dataset.guideWord }).then(() => $i(t)));
  function Bo(e, t, o, r = {}) {
    const c = t.map((Q) => Q[1]).concat(r.guide != null ? [r.guide] : []), h = r.zero ? 0 : Math.min(...c), p = Math.max(...c), g = Math.max(120, e.clientWidth || 260), w = Math.max(60, e.clientHeight || 130), _ = 8, N = w - 20, T = Date.now() - 24 * 3600 * 1e3, P = 24 * 3600 * 1e3, te = (Q) => Math.max(0, Math.min(g, (Q - T) / P * g)), se = (Q) => p === h ? (_ + N) / 2 : N - (Q - h) / (p - h) * (N - _);
    let K = "M" + te(t[0][0]).toFixed(1) + " " + se(t[0][1]).toFixed(1);
    if (t.length > 2) K = rf(t.map((Q) => [te(Q[0]), se(Q[1])]));
    else for (let Q = 1; Q < t.length; Q++) K += r.smooth ? "L" + te(t[Q][0]).toFixed(1) + " " + se(t[Q][1]).toFixed(1) : "H" + te(t[Q][0]).toFixed(1) + "V" + se(t[Q][1]).toFixed(1);
    e.setAttribute("viewBox", "0 0 " + g + " " + w), e.setAttribute("aria-label", o), e.innerHTML = sf(g, _, N) + '<path d="' + K + "V" + N + "H" + te(t[0][0]).toFixed(1) + 'Z" fill="' + (r.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + K + '" fill="none" stroke="' + (r.colour || "var(--primary)") + '" stroke-width="' + Ca.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (w - 4) + '">24 h ago</text><text x="' + g + '" y="' + (w - 4) + '" text-anchor="end">Now</text>' + (r.guide != null ? '<line class="tfGuide" x1="0" x2="' + g + '" y1="' + se(r.guide).toFixed(1) + '" y2="' + se(r.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + g + '" y="' + (se(r.guide) < 20 ? se(r.guide) + 14 : se(r.guide) - 5).toFixed(1) + '" text-anchor="end">' + X(r.guideWord || "") + "</text>" : "");
  }
  const Be = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, ht = (e, t) => {
    const o = e.split(".")[0];
    return Be[o] ? Be[o].includes(t) : o === "alarm_control_panel" || o === "climate" || o === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(t) : t === "on";
  }, Ba = (e) => {
    const t = e.split(".")[0], o = wt(e).device_class;
    return t === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[o] || (vc.includes(o) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[t] || "On";
  }, Ea = /* @__PURE__ */ new Map();
  let wl = 0;
  async function es(e) {
    let t = Ea.get(e);
    if (!t || Date.now() - t.at > 60 * 1e3) {
      let c = [];
      try {
        const h = await W({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        c = ((h == null ? void 0 : h[e]) || []).map((p) => [p.lu != null ? p.lu * 1e3 : Date.parse(p.last_updated || p.last_changed), String(p.s ?? p.state)]).filter(([p]) => Number.isFinite(p));
      } catch {
      }
      c.length || (c = (xs || []).filter((h) => h.entity_id === e).map((h) => [h.when * 1e3, String(h.state)])), t = { at: Date.now(), pts: c }, Ea.set(e, t);
    }
    const o = M[e], r = t.pts.slice().sort((c, h) => c[0] - h[0]);
    return o && (!r.length || r[r.length - 1][1] !== o.state) && r.push([Date.parse(o.last_changed) || Date.now(), o.state]), r;
  }
  async function Fs(e, t, o) {
    const r = await es(e);
    if (!t.isConnected) return;
    const c = r.map(([Z, je]) => [Z, Number(je)]);
    if (r.length > 1 && c.every(([, Z]) => Number.isFinite(Z))) {
      Bo(t, c, Pe(e) + ", last 24 hours");
      return;
    }
    const h = Date.now(), p = h - 864e5, g = Math.max(200, t.clientWidth || 360), w = 62, _ = (Z) => Math.max(0, Math.min(g, (Z - p) / 864e5 * g)), N = [];
    let T = null;
    r.forEach(([Z, je]) => {
      const Wt = ht(e, je);
      Wt && T == null ? T = Math.max(Z, p) : !Wt && T != null && (N.push([T, Math.max(Z, p)]), T = null);
    }), T != null && N.push([T, h]);
    const P = _r(e) ? "var(--danger)" : e.startsWith("light.") ? "#ffaa00" : "var(--primary)", te = Ba(e), se = "tfDayClip" + ++wl, K = N.map(([Z, je]) => te + (je >= h - 1e3 && Z <= p + 1e3 ? " all day" : je >= h - 1e3 ? " since " + ha(Z) : Z <= p + 1e3 ? " until " + ha(je) : " " + ha(Z) + "–" + ha(je)));
    let Q = "", j = -1 / 0;
    N.forEach(([Z], je) => {
      const Wt = K[je].length * 5.4, st = Math.min(_(Z), g - Wt);
      st < j + 8 || (Q += '<text x="' + st.toFixed(1) + '" y="10">' + X(K[je]) + "</text>", j = st + Wt);
    });
    let xe = '<text x="' + g + '" y="' + (w - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((Z) => {
      let je = new Date(h).setHours(Z, 0, 0, 0);
      je > h && (je -= 864e5), _(je) > 8 && _(je) < g - 34 && (xe += '<text x="' + _(je).toFixed(1) + '" y="' + (w - 2) + '" text-anchor="middle">' + String(Z).padStart(2, "0") + "</text>");
    }), t.setAttribute("viewBox", "0 0 " + g + " " + w), t.setAttribute("aria-label", Pe(e) + ", last 24 hours: " + (K.length ? K.join(", ") : "no changes")), t.innerHTML = '<clipPath id="' + se + '"><rect x="0" y="18" width="' + g + '" height="26" rx="8"/></clipPath>' + Q + '<rect x="0" y="18" width="' + g + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + se + ')">' + N.map(([Z, je]) => '<rect x="' + _(Z).toFixed(1) + '" y="18" width="' + Math.max(2, _(je) - _(Z)).toFixed(1) + '" height="26" fill="' + P + '"/>').join("") + "</g>" + (o && o >= p ? '<line x1="' + _(o).toFixed(1) + '" x2="' + _(o).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + xe;
  }
  function xl(e) {
    var r;
    const t = Number((r = M[e]) == null ? void 0 : r.state), o = Date.now();
    if (wt(e).state_class === "total_increasing") {
      const c = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), h = Math.max(1, o - c);
      return [...Array(49)].map((p, g) => c + h * g / 48).map((p) => [p, Math.round(t * Math.pow((p - c) / h, 1.3) * 100) / 100]);
    }
    if (Bi(e) && e.endsWith("_moisture")) return [...Array(48)].map((c, h) => [o - (48 - h) * 30 * 60 * 1e3, Math.round((t + 22 * Math.pow(1 - h / 48, 1.2)) * 10) / 10]);
    if (Bi(e) && e.endsWith("_light")) {
      const c = (p) => {
        const g = new Date(p).getHours() + new Date(p).getMinutes() / 60;
        return Math.max(0, Math.sin((g - 6) / 14 * Math.PI));
      }, h = (p) => 0.8 + 0.2 * c(p);
      return [...Array(48)].map((p, g) => o - (48 - g) * 30 * 60 * 1e3).map((p) => [p, Math.round(t * h(p) / h(o))]);
    }
    return [...Array(48)].map((c, h) => [o - (48 - h) * 30 * 60 * 1e3, Math.round(t * (0.96 + 0.04 * Math.sin(h / 6)) * 10) / 10]);
  }
  async function _i(e, t, o = {}) {
    var se, K;
    let r = de.get(e);
    if (e.endsWith("_solar_power")) r = { at: Date.now(), points: Wp() };
    else if (Bi(e)) r = { at: Date.now(), points: xl(e) };
    else if (!r || Date.now() - r.at > 5 * 60 * 1e3) {
      try {
        const Q = new Date(Date.now() - 864e5).toISOString(), j = await W({ type: "history/history_during_period", start_time: Q, entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), xe = ((j == null ? void 0 : j[e]) || []).map((Z) => [Z.lu != null ? Z.lu * 1e3 : Date.parse(Z.last_updated || Z.last_changed), Number(Z.s ?? Z.state)]).filter(([Z, je]) => Number.isFinite(Z) && Number.isFinite(je));
        r = { at: Date.now(), points: xe };
      } catch {
        r = { at: Date.now(), points: [] };
      }
      de.set(e, r);
    }
    const c = t || E.querySelector('[data-graph="' + CSS.escape(e) + '"]');
    if (!c) return;
    const h = M[e], p = ((se = h == null ? void 0 : h.attributes) == null ? void 0 : se.unit_of_measurement) || "", g = r.points.slice(), w = Number(h == null ? void 0 : h.state);
    if (Number.isFinite(w) && !e.endsWith("_solar_power") && g.push([Date.now(), w]), g.length < 2) {
      c.setAttribute("aria-label", Pe(e) + ": no history for the last 24 hours"), c.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const _ = g.map((Q) => Q[1]), N = Math.min(..._), T = Math.max(..._), P = (Q) => Q.toLocaleString(void 0, { maximumFractionDigits: Math.abs(Q) >= 100 ? 0 : 1 }), te = ((K = h == null ? void 0 : h.attributes) == null ? void 0 : K.state_class) === "total_increasing";
    Bo(c, g, Pe(e) + ", last 24 hours: " + (te ? "+" + P(_[_.length - 1] - _[0]) : N === T ? P(N) : P(N) + " to " + P(T)) + (p ? " " + p : ""), { smooth: e.endsWith("_solar_power"), zero: e.endsWith("_solar_power"), ...o });
  }
  function si() {
    const e = E == null ? void 0 : E.querySelector("[data-solar]");
    if (!e) return;
    const t = Wp();
    Bo(e, t, "Solar, last 24 hours: up to " + Ot(Math.max(...t.map((o) => o[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function ts(e, t) {
    const o = t.entity_id, r = $e.get(o) || {}, c = { open_cover: 100, close_cover: 0, set_cover_position: t.position, toggle: $n(o) > 0 ? 0 : 100 }[e], h = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: t.tilt_position }[e];
    c != null && (r.pos = c), h != null && (r.tilt = h), e === "stop_cover" && (delete r.pos, delete r.tilt), e === "stop_cover_tilt" && delete r.tilt, r.at = Date.now(), $e.set(o, r);
  }
  function ct(e, t, o) {
    var c;
    const r = o == null ? void 0 : o.entity_id;
    return e !== "light" || typeof r != "string" || !zo[r] || !Oa(r) || o.brightness_pct != null || o.brightness != null ? [t, o] : t !== "turn_on" && !(t === "toggle" && ((c = M[r]) == null ? void 0 : c.state) !== "on") ? [t, o] : ["turn_on", { ...o, brightness_pct: zo[r] }];
  }
  function Ft(e, t, o, r) {
    let c = { entity_id: o, ...r || {} };
    return [t, c] = ct(e, t, c), e === "cover" && ts(t, c), Xe[o] = (Xe[o] || 0) + 1, Pi.set(Bu, JSON.stringify(Xe)), An.call(e, t, c) ? Promise.resolve() : Promise.resolve(F(e, t, c));
  }
  function aa(e) {
    const [t, o, r, c] = e.split("|");
    Ft(t, o, r, c ? JSON.parse(c) : null).catch(() => {
    });
  }
  function pa(e, t) {
    ge.set("pos|" + e, t), vn.delete(e), ho = ho.map(() => ""), [E, Ge].forEach((r) => r.querySelectorAll('[data-blocks="' + CSS.escape(e) + '"]').forEach((c) => El(c, t)));
    const o = E.querySelector('.tfAction[data-k="' + CSS.escape(e) + '"] .tfName .activityRowMeta');
    if (o && (o.textContent = Math.round(t) + "%"), (D == null ? void 0 : D.id) === e) {
      const r = Ge.querySelector(".tfMoreState"), c = Ge.querySelector(".tfMoreSub");
      r && (r.textContent = Math.round(t) + "%", r.classList.add("live")), c && (c.textContent = "Currently " + $n(e) + "%");
    }
    we(e).forEach((r) => r.update(ve(e)));
  }
  const mn = (e, t) => {
    const o = e.shiftKey ? 10 : 1, r = { ArrowUp: t + o, ArrowRight: t + o, ArrowDown: t - o, ArrowLeft: t - o, PageUp: t + 25, PageDown: t - 25, Home: 0, End: 100 }[e.key];
    return r == null ? null : Math.max(0, Math.min(100, Math.round(r)));
  };
  function Fn(e, t) {
    var K;
    const o = e.dataset.blocks;
    (K = e.setPointerCapture) == null || K.call(e, t.pointerId);
    const r = (Q) => {
      const j = e.getBoundingClientRect();
      return Math.max(0, Math.min(100, (Q.clientX - j.left) / j.width * 100));
    }, c = r(t), h = t.clientX;
    let p = !1, g = ci(o), w = c, _ = 0;
    const N = () => {
      g = Math.abs(w - g) < 0.2 ? w : g + (w - g) * 0.14, pa(o, g), _ = requestAnimationFrame(N);
    }, T = () => {
      p || (p = !0, e.classList.add("fine"), _ = requestAnimationFrame(N));
    }, P = setTimeout(T, 350), te = (Q) => {
      w = r(Q), Math.abs(Q.clientX - h) > 6 && (clearTimeout(P), T());
    }, se = () => {
      clearTimeout(P), cancelAnimationFrame(_), e.removeEventListener("pointermove", te), e.removeEventListener("pointerup", se), e.removeEventListener("pointercancel", se), e.classList.remove("fine"), pa(o, p ? Math.round(g) : (Math.min(3, Math.floor(c / 25)) + 1) * 25), Os("pos", o);
    };
    e.addEventListener("pointermove", te), e.addEventListener("pointerup", se), e.addEventListener("pointercancel", se);
  }
  function ft(e) {
    var g, w;
    const [t, o] = e.dataset.open.split("|"), r = e.closest(".tfCard"), c = e.getBoundingClientRect(), h = (g = e.querySelector(".tfIcon")) == null ? void 0 : g.getBoundingClientRect();
    L = { key: t, id: o, h: r ? Math.round(r.getBoundingClientRect().height) : 0, from: c, chip: h }, vn.delete(t), ma();
    const p = E.querySelector(".tfOpen");
    p && (L.rel = c.top - p.getBoundingClientRect().top), Xh(p, c, h), (w = E.querySelector(".tfOpen [data-close]")) == null || w.focus({ preventScroll: !0 });
  }
  function Et(e) {
    var t;
    B = e.dataset.area, E.querySelectorAll(".tfAreaPanel").forEach((o) => {
      var c;
      const r = o === e;
      o.classList.toggle("active", r), o.setAttribute("aria-expanded", String(r)), (c = o.querySelector(".panelExpanded")) == null || c.toggleAttribute("inert", !r);
    }), vn.set("areas", tt(((t = E.querySelector('[data-k="areas"]')) == null ? void 0 : t.style.order) || 1));
  }
  const Zt = {
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
  function Ga(e, t, o, r) {
    var w;
    const c = Zt[t].value(o, r);
    ge.set(t + "|" + o, c);
    const h = Math.round(r * 100) + "%", p = e.querySelector("i");
    if (t === "tilt") {
      p.style.width = "calc((100% - 8px) * " + r + ")";
      const [_, N] = e.querySelectorAll("span");
      _.classList.toggle("lit", r > 0.08), N.classList.toggle("lit", r > 0.92), vn.delete(o), ho = ho.map(() => ""), we(o).forEach((T) => T.update(ve(o)));
    } else if (p) p.style.width = h;
    else {
      let _ = e.querySelector("b");
      _ || (_ = document.createElement("b"), e.appendChild(_)), _.style.left = h;
    }
    e.setAttribute("aria-valuenow", String(Math.round(r * 100)));
    const g = (w = e.closest(".tfAction") || e.closest(".tfMore")) == null ? void 0 : w.querySelector(".tfName .activityRowMeta, .tfMoreState");
    g && (g.textContent = Zt[t].text(o, c));
  }
  function Os(e, t) {
    const o = ge.get(e + "|" + t), [r, c, h] = Zt[e].send(t, o), p = () => setTimeout(() => {
      ge.delete(e + "|" + t), ma();
    }, 1500);
    Ft(r, c, t, h).then(p, p);
  }
  function ec(e) {
    e.addEventListener("click", (t) => {
      var r;
      const o = t.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (dn && !t.target.closest(".tfBoardMenu,[data-board-more]") && lo(), !(!o || !e.contains(o) || o.disabled))
        if (o.dataset.boardMore)
          (dn == null ? void 0 : dn.key) === o.dataset.boardMore ? lo(!0) : Hc(o.dataset.boardMore, o);
        else if (o.dataset.boardAct) Es(dn.key, o.dataset.boardAct);
        else if (o.dataset.boardShow) il(o.dataset.boardShow);
        else if (o.dataset.favHide) td(o.dataset.favHide, !1);
        else if (o.dataset.energyPick) Fl(o.dataset.energyPick);
        else if (o.dataset.act) aa(o.dataset.act);
        else if (o.hasAttribute("data-details")) Y(!(D != null && D.details));
        else if (o.hasAttribute("data-details-close")) Y(!1);
        else if (o.dataset.summary) yd(o.dataset.summary, o);
        else if (o.dataset.star) ws(o.dataset.star);
        else if (o.hasAttribute("data-more-back")) {
          const c = D.id;
          D = D.back, Nt(), (r = Ge.querySelector('.tfMore [data-more="' + CSS.escape(c) + '"]')) == null || r.focus({ preventScroll: !0 });
        } else if (o.hasAttribute("data-favs-edit")) Ue("favourites", o);
        else if (o.dataset.acts) JSON.parse(o.dataset.acts).forEach(([c, h, p, g]) => Ft(c, h, p, g).catch(() => {
        }));
        else if (o.dataset.more) Ue(o.dataset.more, o);
        else if (o.hasAttribute("data-more-close")) lt();
        else if (o.dataset.morePage) xt(Number(o.dataset.morePage));
        else if (o.dataset.path) _l(o.dataset.path);
        else if (o.dataset.go) Ei("room:" + o.dataset.go);
        else if (o.hasAttribute("data-area-back")) gl();
        else if (o.dataset.open) ft(o);
        else if (o.hasAttribute("data-close")) {
          const c = L, h = o.closest(".tfOpen"), p = h == null ? void 0 : h.getBoundingClientRect().top, g = c.from && p != null ? new DOMRect(c.from.left, p + (c.rel || 0), c.from.width, c.from.height) : c.from;
          Jh(h, g, () => {
            var w;
            L === c && (L = null, vn.delete(c.key), ma(), (w = E.querySelector('[data-open="' + CSS.escape(c.key + "|" + c.id) + '"]')) == null || w.focus({ preventScroll: !0 }));
          });
        } else o.classList.contains("tfAreaPanel") && !o.classList.contains("active") && Et(o);
    }), e.addEventListener("keydown", (t) => {
      var r, c, h, p, g, w, _;
      const o = t.target;
      if ((r = o.dataset) != null && r.open && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), ft(o)), (c = o.dataset) != null && c.energyPick && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), Fl(o.dataset.energyPick)), (h = o.classList) != null && h.contains("tfAreaPanel") && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), Et(o)), (p = o.dataset) != null && p.summary && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), yd(o.dataset.summary, o)), t.key === "Escape" && dn && e === E) {
        t.preventDefault(), lo(!0);
        return;
      }
      if (t.key === "Escape" && ln && e === E) {
        t.preventDefault(), Yl(!1), (g = u("dashEditNav")) == null || g.focus();
        return;
      }
      if (t.key === "Escape" && q && e === E && (t.preventDefault(), gl()), (w = o.dataset) != null && w.blocks) {
        const N = o.dataset.blocks, T = mn(t, Math.round(ci(N)));
        if (T == null) return;
        t.preventDefault(), pa(N, T), clearTimeout(Ya.get(N)), Ya.set(N, setTimeout(() => Os("pos", N), 500));
        return;
      }
      if ((_ = o.dataset) != null && _.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(t.key)) {
        t.preventDefault();
        const [N, T] = o.dataset.drag.split("|"), P = Number(o.getAttribute("aria-valuenow")) / 100, te = t.key === "Home" ? 0 : t.key === "End" ? 1 : Math.max(0, Math.min(1, P + (t.key === "ArrowLeft" || t.key === "ArrowDown" ? -0.05 : 0.05)));
        Ga(o, N, T, te), Os(N, T);
      }
    }), e.addEventListener("pointerdown", (t) => {
      var Wt;
      const o = t.target.closest("[data-blocks]");
      if (o && t.button === 0) {
        t.preventDefault(), Fn(o, t);
        return;
      }
      const r = t.target.closest("[data-drag]");
      if (!r || t.button > 0) return;
      const [c, h] = r.dataset.drag.split("|"), p = c === "bright" && !Oa(h), g = t.pointerType !== "mouse";
      if (p && !g) {
        aa(Lt("light", "toggle", h));
        return;
      }
      const w = c === "bright" && ((Wt = M[h]) == null ? void 0 : Wt.state) !== "on", _ = c === "tilt" ? 4 : 0, N = () => r.getBoundingClientRect().width - _ * 2, T = (st) => {
        const Vt = r.getBoundingClientRect();
        return Math.max(0, Math.min(1, (st.clientX - Vt.left - _) / N()));
      };
      let P = g ? "waiting" : w ? "pressed" : "dragging", te = 0;
      const se = t.clientX, K = t.clientY, Q = (st, Vt) => Math.hypot(st.clientX - se, st.clientY - K) > Vt, j = () => {
        try {
          r.setPointerCapture(t.pointerId);
        } catch {
        }
      };
      g || (t.preventDefault(), j()), P === "dragging" && Ga(r, c, h, T(t));
      const xe = () => {
        var st, Vt;
        P = "sliding", Te = r, r.classList.add("held"), j(), (st = navigator.userActivation) != null && st.hasBeenActive && ((Vt = navigator.vibrate) == null || Vt.call(navigator, 8)), te = w ? (zo[h] ?? 100) / 100 : Number(r.getAttribute("aria-valuenow")) / 100;
      }, Z = (st) => {
        P === "waiting" && Q(st, Se) ? !p && Math.abs(st.clientX - se) > Math.abs(st.clientY - K) ? xe() : P = "gone" : P === "pressed" && Q(st, 4) && (P = "dragging"), P === "sliding" ? Ga(r, c, h, Math.max(0, Math.min(1, te + (st.clientX - se) / N()))) : P === "dragging" && Ga(r, c, h, T(st));
      }, je = (st) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Vt, Da) => r.removeEventListener(Vt, Da ? je : Z)), r.classList.remove("held"), Te === r && (Te = null), P === "sliding" || P === "dragging" ? Os(c, h) : st.type === "pointerup" && p ? aa(Lt("light", "toggle", h)) : st.type === "pointerup" && w && (P === "waiting" || P === "pressed") && Ft("light", "turn_on", h).catch(() => {
        });
      };
      r.addEventListener("pointermove", Z), r.addEventListener("pointerup", je), r.addEventListener("pointercancel", je);
    }), e.addEventListener("touchmove", (t) => {
      Te && t.cancelable && t.preventDefault();
    }, { passive: !1 });
  }
  return E && k && (sn(), ec(E), ec(Ge), Ge.addEventListener("click", (e) => {
    e.target === Ge && lt();
  }), (Rp = n.getElementById("homeNav")) == null || Rp.addEventListener("click", () => {
    q && gl();
  }), (Bp = n.querySelector(".bottomNav")) == null || Bp.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + gc + "</button>"), (Pp = u("dashEditNav")) == null || Pp.addEventListener("click", () => A ? rr(!oi) : Yl(!ln)), E.addEventListener("pointerdown", Zd), E.addEventListener("pointerdown", cn), E.addEventListener("click", (e) => {
    A && oi && e.target.closest(".tfBoardItem") && (e.preventDefault(), e.stopPropagation());
  }, !0), E.addEventListener("scroll", (e) => {
    var t;
    (t = e.target.classList) != null && t.contains("hcFadeList") && er(e.target);
  }, !0), new ResizeObserver(() => {
    v.classList.contains("tfDash") && Js() !== bi ? ma() : As();
  }).observe(E), window.addEventListener("resize", As, { passive: !0 }), Ge.addEventListener("keydown", (e) => {
    var t, o;
    e.key === "Escape" ? (e.stopPropagation(), D != null && D.details ? Y(!1) : lt()) : (e.key === "ArrowLeft" || e.key === "ArrowRight") && ((o = (t = e.target).closest) != null && o.call(t, ".tfMoreDots")) && (e.preventDefault(), xt(((D == null ? void 0 : D.page) || 0) + (e.key === "ArrowRight" ? 1 : -1)));
  })), ne(), {
    update(e) {
      if (!k) return;
      const t = !Object.keys(M).length;
      M = { ...Object.fromEntries(Object.entries(M).filter(([r]) => Bi(r))), ...e || {} };
      for (const r in M) r.startsWith("light.") && M[r].state === "on" && Oa(r) && La(r, En(M[r]));
      t ? fo() : ma();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      Io = !0, $t == null || $t.destroy(), $t = null, wa == null || wa.forEach((e) => e.destroy()), wa = null;
    },
    resume() {
      Io = !1, !(!k || !(E != null && E.querySelector("[data-tf]"))) && (bt.isConnected && ps(bt.style.order), dt());
    }
  };
}
const Ig = "0.89.0", vp = "move_assistant", Fg = "move_assistant", Wu = "move_assistant_checkin_reminder";
function Og() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class qg extends HTMLElement {
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
    Og();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${Nf}${Hf}${If}${Ff}</style>${Of}`;
    const i = l.getElementById("app");
    i.style.opacity = "0";
    let u = null;
    try {
      const v = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: vp
      });
      u = (v == null ? void 0 : v.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(u), this._app = ih(l, {
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
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Hg(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), Kh(l, i), Qh(l), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
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
      { type: "frontend/subscribe_user_data", key: vp }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: vp,
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
      event_type: Fg,
      event_data: { action: l, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const i = `config/automation/config/${Wu}`;
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
      id: Wu,
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
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", qg), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Ig} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
