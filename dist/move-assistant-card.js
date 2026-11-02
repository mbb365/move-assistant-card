const zp = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', jp = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--muted)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr);gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--tile)}.tfBoardMenu .tfHeightTabs button{justify-content:center;min-height:32px;padding:0 4px;border-radius:12px;font-size:13px}.tfBoardMenu .tfHeightTabs button[aria-checked=true]{background:var(--text);color:var(--card)}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"],#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:12px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfABig{display:none}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}', Vp = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbSummary{display:none}.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}`, Gp = `<main id="app"><div class="shell">
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
}, ra = (a) => a < 0 ? 0 : a > 1 ? 1 : a, cc = (a, l, o) => a + (l - a) * o, Hd = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, Up = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), pc = {}, en = (a, l, o) => {
  const c = a + l + o;
  return pc[c] || (pc[c] = Up(Hd(a).map((h, v) => h + (Hd(l)[v] - h) * o)));
}, uc = {}, Il = (a) => uc[a] || (uc[a] = Hd(a)), bd = (a, l, o, c) => (h) => {
  if (h <= 0) return 0;
  if (h >= 1) return 1;
  let v = 0, w = 1, A = h;
  for (let x = 0; x < 18; x++)
    A = (v + w) / 2, 3 * (1 - A) * (1 - A) * A * a + 3 * (1 - A) * A * A * o + A * A * A < h ? v = A : w = A;
  return 3 * (1 - A) * (1 - A) * A * l + 3 * (1 - A) * A * A * c + A * A * A;
}, Yp = { std: bd(0.2, 0, 0, 1), acc: bd(0.3, 0, 1, 1), dec: bd(0, 0, 0, 1) };
function Vl(a, l) {
  const o = String(a || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || l ? "night" : "day");
}
function sp(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [en(l.clear[0], l.cloudy[0], 0.12), en(l.clear[1], l.cloudy[1], 0.12)], l.storm = [en(l.rain[0], "#000000", 0.22), en(l.rain[1], "#000000", 0.22)], l;
}
const Fd = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Od = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Wd = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function qd(a, l = sa) {
  const o = { ...sa, ...l }, c = sp(o), h = String(a).split("/"), v = c[h[0]] ? h[0] : "clear", w = h[1] === "night", A = c[v][w ? 1 : 0], x = {
    night: w,
    clearness: v === "clear" ? 1 : v === "partly" ? 0.7 : 0.25,
    sky: A,
    skyStops: [A],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Fd.map(() => ({ o: 0 })),
    rain: Od.map(() => ({ o: 0, dy: -16 })),
    snow: Wd.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, R = (ve) => Fd.map(() => ({ o: ve }));
  return v === "clear" ? w ? (x.moon.o = 1, x.stars = R(1)) : x.sun.o = 1 : v === "partly" ? (x.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (x.moon = { x: 34, y: 33, d: 48, o: 1 }, x.stars = R(0.7)) : x.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : v === "cloudy" || v === "fog" ? (x.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? x.moon = { x: 40, y: 36, d: 40, o: 0 } : x.sun = { x: 40, y: 36, r: 20, o: 0 }) : (x.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? x.moon = { x: 38, y: 28, d: 36, o: 0 } : x.sun = { x: 38, y: 28, r: 18, o: 0 }, v === "snow" ? x.snow = Wd.map(() => ({ o: 1, dy: 0 })) : x.rain = Od.map((ve, ie) => ({ o: v === "storm" && ie === 1 ? 0 : 1, dy: 0 })), v === "storm" && (x.bolt = { o: 1, dy: 0 })), x;
}
const fc = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Zp(a, l, o, c = sa, h = !1) {
  const v = { ...sa, ...c }, w = (U, $) => U > 0.01 && $ > 0.01 ? "stay" : U > 0.01 ? "leave" : $ > 0.01 ? "enter" : "none", A = (U, $, ne, Y) => {
    const G = U[0] + $ * Y, W = U[1] - (ne - 1 - $) * Y;
    return Yp[U[2]](ra((o - G) / Math.max(1e-3, W - G)));
  }, x = (U, $, ne, Y = 0, G = 1, W = 0) => {
    const pe = w(U.o, $.o);
    if (pe === "none") return { ...$, o: 0 };
    const ee = A(fc[ne][pe], Y, G, W), ue = {};
    for (const J in $) ue[J] = h && pe !== "stay" && J !== "o" ? pe === "leave" ? U[J] : $[J] : cc(U[J], $[J], ee);
    return ue;
  }, R = A(fc.sky, 0, 1, 0);
  let ve, ie;
  if (a.night !== l.night) {
    const U = Math.min(a.clearness, l.clearness), $ = en(en(a.sky, l.sky, 0.5), v.dusk, 0.6 * U);
    ve = R < 0.5 ? en(a.sky, $, R * 2) : en($, l.sky, R * 2 - 1), ie = U > 0.5 ? [a.sky, v.dusk, l.sky] : [a.sky, l.sky];
  } else
    ve = en(a.sky, l.sky, R), ie = [a.sky, l.sky];
  return {
    night: o < 0.5 ? a.night : l.night,
    clearness: cc(a.clearness, l.clearness, o),
    sky: ve,
    skyStops: ie,
    skyT: R,
    sun: x(a.sun, l.sun, "body"),
    moon: x(a.moon, l.moon, "body"),
    cloud: x(a.cloud, l.cloud, "cloud"),
    stars: l.stars.map((U, $) => x(a.stars[$], U, "fx", $, l.stars.length, 0.05)),
    rain: l.rain.map((U, $) => x(a.rain[$], U, "fx", $, l.rain.length, 0.05)),
    snow: l.snow.map((U, $) => x(a.snow[$], U, "fx", $, l.snow.length, 0.05)),
    bolt: x(a.bolt, l.bolt, "fx")
  };
}
const Kp = [
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
], ia = (a, l) => (Kp[(l & 7) * 8 + (a & 7)] + 0.5) / 64, $p = 0, Vd = 1, Gd = 2, Ud = 3, Yd = 4, oa = 5, os = 6, Bi = 7, Zd = 8, Ol = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), Xp = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Jp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((a) => [a[0] * 13 / 11, a[1] * 28 / 24]), lp = (a, l, o) => {
  let c = !1;
  for (let h = 0, v = a.length - 1; h < a.length; v = h++) {
    const w = a[h], A = a[v];
    w[1] > o != A[1] > o && l < (A[0] - w[0]) * (o - w[1]) / (A[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function dp(a, { size: l = 90, px: o = 2, oneBit: c = !1, colors: h = sa, ink: v = "#26221e", paper: w = "#fbf9f6", clock: A = 0, idle: x = !1 } = {}) {
  const R = { ...sa, ...h }, ve = Math.sin, ie = Math.PI * 2, U = Math.max(6, Math.round(l / o)), $ = U / 90, ne = x ? Math.floor(A / 100) * 100 : 0, Y = x ? ve(ie * ne / 3600) : 0, G = x ? 1.8 * ve(ie * ne / 6400) : 0, W = x ? 0.9 * ve(ie * ne / 4100) : 0, pe = x ? 0.8 * ve(ie * ne / 5200) : 0, ee = ne / 3400 % 1, ue = x && a.bolt.o > 0.5 && (ee < 0.04 || ee > 0.08 && ee < 0.11), J = new Array(U * U), E = new Uint8Array(U * U), P = (k, _, T, I, me) => {
    T == null || k < 0 || _ < 0 || k >= U || _ >= U || (I >= 1 || I > ia(k + 5, _ + 3)) && (J[_ * U + k] = T, E[_ * U + k] = me);
  }, re = (k, _, T, I) => {
    for (let me = Math.max(0, Math.floor(_ - T) - 1); me <= Math.min(U - 1, _ + T + 1); me++) for (let z = Math.max(0, Math.floor(k - T) - 1); z <= Math.min(U - 1, k + T + 1); z++) I(z, me, z + 0.5 - k, me + 0.5 - _);
  }, Ae = a.skyStops || [a.sky], H = a.skyT || 0;
  for (let k = 0; k < U; k++) {
    const _ = a.night ? ra(1 - (k + 0.5) / (U * 0.7)) * 0.85 : ra(((k + 0.5) / U - 0.35) / 0.65) * 0.85;
    for (let T = 0; T < U; T++) {
      let I = Ae[0];
      if (Ae.length > 1) {
        const me = H * (Ae.length - 1), z = Math.min(Ae.length - 2, Math.floor(me));
        I = me - z > ia(T, k) ? Ae[z + 1] : Ae[z];
      }
      _ > ia(T + 2, k + 5) && (I = a.night ? en(I, "#000000", 0.28) : en(I, "#ffffff", 0.2)), J[k * U + T] = ue ? en(I, "#ffffff", 0.25) : I;
    }
  }
  if (a.sun.o > 0.01) {
    const k = a.sun.x * $, _ = a.sun.y * $, T = Math.max(1, a.sun.r * $);
    if (x) {
      const I = T * (1.45 + 0.06 * Y), me = en(R.sun, "#ffffff", 0.55);
      if (re(k, _, I, (z, le, ge, xe) => {
        const $e = Math.sqrt(ge * ge + xe * xe);
        $e > T && $e < I && P(z, le, me, 0.26 * (1 - ($e - T) / (I - T)) * a.sun.o, $p);
      }), a.sun.o > 0.5) {
        const z = Math.floor(ne / 500) % 2, le = Math.max(1, T * 0.22);
        for (let ge = 0; ge < 8; ge++) if (ge % 2 === z) for (let xe = T + 1.5; xe < T + 1.5 + le; xe += 0.7) P(Math.floor(k + Math.cos(ge * Math.PI / 4) * xe), Math.floor(_ + Math.sin(ge * Math.PI / 4) * xe), R.sun, a.sun.o, Zd);
      }
    }
    re(k, _, T, (I, me, z, le) => {
      if (z * z + le * le > T * T) return;
      const ge = ((z * 0.643 + le * 0.766) / T + 1) / 2;
      P(I, me, ra((ge - 0.62) / 0.38) > ia(I, me) ? R.sunEdge : R.sun, a.sun.o, Vd);
    });
  }
  if (Fd.forEach((k, _) => {
    const T = a.stars[_].o;
    if (T < 0.01) return;
    const I = Math.floor(k[0] * $), me = Math.floor(k[1] * $), z = x ? (Math.floor(ne / 300) + _ * 3) % 6 : 0;
    if (z === 5) return;
    const le = Math.round(k[2] * $ * (z === 4 ? 0.3 : z < 2 ? 1 : 0.6));
    P(I, me, R.star, T, Bi);
    for (let ge = 1; ge <= le; ge++) {
      const xe = ge === le && le > 1 ? en(R.star, a.sky, 0.5) : R.star;
      P(I - ge, me, xe, T, Bi), P(I + ge, me, xe, T, Bi), P(I, me - ge, xe, T, Bi), P(I, me + ge, xe, T, Bi);
    }
  }), a.moon.o > 0.01) {
    const k = Math.max(1.5, a.moon.d * $ * 0.37), _ = a.moon.x * $, T = a.moon.y * $ + (x && pe > 0.4 ? -1 : 0), I = _ + 0.547 * k, me = T - 0.503 * k, z = 0.82 * k, le = en(R.moon, "#ffffff", 0.6);
    re(_, T, k, (ge, xe, $e, st) => {
      if ($e * $e + st * st > k * k) return;
      const At = ge + 0.5 - I, Tn = xe + 0.5 - me;
      At * At + Tn * Tn <= z * z || P(ge, xe, ra((st + k) / (2 * k) * 1.1 - 0.1) > ia(ge, xe) ? R.moon : le, a.moon.o, Gd);
    });
  }
  const Ie = Math.max(2, Math.round(15.65 * $)), V = Math.max(1, Math.round(5.87 * $ * 0.5));
  Od.forEach((k, _) => {
    const T = a.rain[_];
    let I = T.dy, me = T.o;
    if (me < 0.01) return;
    if (x) {
      const ge = (ne / 950 + _ / 3) % 1;
      I += -5 + ge * 14, me *= ge < 0.18 ? ge / 0.18 : ge > 0.72 ? (1 - ge) / 0.28 : 1;
    }
    const z = (k[0] + 3 + G) * $, le = (k[1] + I) * $;
    for (let ge = 0; ge < Ie; ge++) for (let xe = 0; xe < V; xe++) P(Math.floor(z - 0.208 * ge) + xe, Math.floor(le) + ge, R.rain, me, Yd);
  });
  const qe = Math.max(0, Math.round(7.34 * $ / 2.6));
  if (Wd.forEach((k, _) => {
    const T = a.snow[_];
    let I = T.dy, me = 0, z = T.o;
    if (z < 0.01) return;
    if (x) {
      const xe = (ne / 3200 + _ / 5) % 1;
      I += -6 + xe * 14, me = 1.5 * ve(ie * (xe * 1.5 + _ / 5)), z *= xe < 0.2 ? xe / 0.2 : xe > 0.75 ? (1 - xe) / 0.25 : 1;
    }
    const le = Math.floor((k[0] + 3.67 + me + G) * $), ge = Math.floor((k[1] + 3.67 + I) * $);
    P(le, ge, R.snow, z, oa);
    for (let xe = 1; xe <= qe; xe++)
      P(le - xe, ge, R.snow, z, oa), P(le + xe, ge, R.snow, z, oa), P(le, ge - xe, R.snow, z, oa), P(le, ge + xe, R.snow, z, oa), qe > 1 && xe < qe && (P(le - xe, ge - xe, R.snow, z, oa), P(le + xe, ge - xe, R.snow, z, oa), P(le - xe, ge + xe, R.snow, z, oa), P(le + xe, ge + xe, R.snow, z, oa));
  }), a.bolt.o > 0.01)
    if (U >= 30) {
      const k = 39 + G, _ = 50 + a.bolt.dy;
      for (let T = Math.floor(_ * $); T <= (_ + 28) * $; T++) for (let I = Math.floor(k * $); I <= (k + 13) * $; I++)
        lp(Jp, (I + 0.5) / $ - k, (T + 0.5) / $ - _) && P(I, T, R.sun, a.bolt.o, os);
    } else {
      const k = U / 18, _ = 7, T = 10 + Math.round(a.bolt.dy * 0.2);
      Xp.forEach((I, me) => I.split("").forEach((z, le) => {
        if (z !== "#") return;
        const ge = Math.floor((_ + le) * k), xe = Math.floor((T + me) * k);
        for (let $e = xe; $e < Math.max(xe + 1, Math.floor((T + me + 1) * k)); $e++) for (let st = ge; st < Math.max(ge + 1, Math.floor((_ + le + 1) * k)); st++) P(st, $e, R.sun, a.bolt.o, os);
      }));
    }
  if (a.cloud.o > 0.01) {
    const k = Math.max(3, a.cloud.w * $), _ = k * 0.6665, T = (a.cloud.x + G) * $ - k / 2, I = (a.cloud.y + W) * $ - _ / 2, me = en(R.cloudDay, R.cloudNight, Math.round(a.cloud.f * 4) / 4), z = en(me, "#000000", 0.16);
    for (let le = Math.max(0, Math.floor(I) - 1); le <= Math.min(U - 1, I + _ + 1); le++) for (let ge = Math.max(0, Math.floor(T) - 1); ge <= Math.min(U - 1, T + k + 1); ge++) {
      const xe = (ge + 0.5 - T) / k, $e = (le + 0.5 - I) / k;
      Ol(xe, $e) && P(ge, le, !Ol(xe, $e + 1 / k) || ra(($e - 0.42) / 0.25) * 0.8 > ia(ge, le) ? z : me, a.cloud.o, Ud);
    }
  }
  return cp(J, E, U, U, { oneBit: c, ink: v, paper: w, snowInk: !a.night });
}
function cp(a, l, o, c, { oneBit: h, ink: v, paper: w, snowInk: A }) {
  const x = new Uint8ClampedArray(o * c * 4), R = Il(v), ve = Il(w);
  for (let ie = 0; ie < c; ie++) for (let U = 0; U < o; U++) {
    const $ = ie * o + U, ne = l[$];
    if (a[$] == null) continue;
    let Y = Il(a[$]);
    if (h) {
      let G;
      ne === Yd || ne === Zd ? G = !0 : ne === oa ? G = A : ne === Bi || ne === os ? G = !1 : G = Math.round((0.2126 * Y[0] + 0.7152 * Y[1] + 0.0722 * Y[2]) / 255 * 4) / 4 <= ia(U, ie), (ne === Vd || ne === Gd || ne === Ud || ne === os) && (U > 0 && l[$ - 1] !== ne || U < o - 1 && l[$ + 1] !== ne || ie > 0 && l[$ - o] !== ne || ie < c - 1 && l[$ + o] !== ne) && (G = !0), Y = G ? R : ve;
    }
    x[$ * 4] = Y[0], x[$ * 4 + 1] = Y[1], x[$ * 4 + 2] = Y[2], x[$ * 4 + 3] = 255;
  }
  return { w: o, h: c, data: x };
}
const Qp = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, eu = (a) => Vl(a, !1).split("/")[0], wd = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, tu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", nu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", au = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", ou = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", iu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], ru = [".##", "##.", ".#.", "#.."];
function pp(a, { width: l, height: o, colors: c, wave: h = 0.38, soft: v = 6, glow: w = 0.6 }) {
  const A = { ...sa, dawn: "#e5a77e", ...c }, x = sp(A), R = l, ve = o, ie = R / 6, U = ie / 2, $ = Math.PI * 2, ne = a.length ? a : [{ cond: "cloudy", night: !1 }], Y = [...Array(12)].map((ee, ue) => {
    const J = ne[Math.min(ue, ne.length - 1)], E = eu(J.cond), P = ue % 2 === 1;
    return { cond: J.cond, k: E, night: P, sky: x[E][P ? 1 : 0], cover: Qp[E] };
  }), G = (ee) => ve * (0.5 - h * Math.cos($ * (ee / ie - 0.25)));
  return { C: A, S: Y, W: R, H: ve, cw: ie, sw: U, TAU: $, yb: G, side: (ee, ue, J) => {
    const E = (ee ? G(ue) - J : J - G(ue)) / Math.max(3, v * 1.4) + 0.5;
    return E <= 0 ? 0 : E >= 1 ? 1 : E;
  }, glowAt: (ee) => {
    const ue = ((ee / ie - 0.25) % 1 + 1) % 1, J = Math.max(0, Math.min(5, Math.round(ee / ie - 0.25))), E = Math.max(0, Math.min(5, Math.round(ee / ie - 0.75))), P = 1 - (Y[2 * J].cover + Y[2 * E + 1].cover) / 2, re = Math.sin(Math.PI * Math.min(1, Math.max(0, G(ee) / ve)));
    return { c: ue < 0.5 ? A.dusk : A.dawn, a: w * (0.2 + 0.8 * P) * re * re };
  }, soft: v, tw: ie * 0.3, sy: ve / 90 };
}
function up(a, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: h, sw: v, side: w, C: A, TAU: x, sy: R } = a, ve = l, ie = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return h.forEach((U, $) => {
    const ne = wd(c * 977 + $ * 131 + 7), Y = ($ + 0.5) * v, G = U.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[U.k] : 0;
    for (let W = 0; W < G; W++) {
      const pe = Y + (ne() - 0.5) * v * 1.6, ee = (6 + ne() * 76) * R, ue = ne() < 0.35, J = 1.8 + ne() * 1.6, E = w(!0, pe, ee) * (ue ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(x * ve / 2600 + W * 1.7 + $) : 1);
      E >= 0.03 && ie.stars.push({ x: pe, y: ee, big: ue, size: J, o: E });
    }
    if (!U.night && (U.k === "clear" || U.k === "partly")) {
      const W = Y + (ne() - 0.5) * v * 0.3, pe = Math.min(15, v * 0.29);
      ie.suns.push({ x: W, y: 32 * R, rad: pe, halo: pe * 2.8 * (o ? 1 + 0.07 * Math.sin(x * ve / 3600 + $) : 1) });
    }
    if (U.night && (U.k === "clear" || U.k === "partly")) {
      const W = Math.min(0.78, v * 0.55 / 34), pe = Y - 23 * W + (ne() - 0.5) * v * 0.2;
      ie.moons.push({ x: pe + 23 * W, y: (4 + (o ? 0.8 * Math.sin(x * ve / 5200 + $) : 0)) * R + 23 * W, d: 46 * W });
    }
  }), h.forEach((U, $) => {
    const ne = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[U.k];
    if (!ne) return;
    const Y = wd(c * 577 + $ * 71 + 3), G = ($ + 0.5) * v, W = U.k === "rain" || U.k === "storm" || U.night ? A.cloudNight : A.cloudDay, pe = U.night ? 0.82 : U.k === "storm" ? 0.75 : 1;
    for (let ee = 0; ee < ne; ee++) {
      const ue = v / 46 * (U.k === "partly" ? 0.85 : 0.75 + Y() * 0.55), J = G + (U.k === "partly" ? v * 0.12 : (Y() - 0.5) * v * 1.05), E = (U.k === "partly" ? 40 : 6 + Y() * 26) * R, P = o ? 2.5 * Math.sin(x * ve / 9e3 + $ * 1.3 + ee * 2.1) : 0, re = o ? 0.9 * Math.sin(x * ve / 6100 + $ + ee) : 0;
      ie.clouds.push({ x: J - 23 * ue + P, y: E - 15.33 * ue + re, w: 46 * ue, h: 30.66 * ue, fill: W, o: pe * (ne > 1 && ee === 0 ? 0.85 : 1) });
    }
  }), h.forEach((U, $) => {
    const ne = wd(c * 313 + $ * 29 + 11), Y = ($ + 0.5) * v, G = U.cond === "pouring" ? 16 : U.cond === "rainy" || U.cond === "hail" ? 9 : U.cond === "lightning-rainy" ? 12 : U.cond === "snowy-rainy" ? 5 : 0;
    for (let pe = 0; pe < G; pe++) {
      let ee = Y + (ne() - 0.5) * v * 1.05, ue = 44 + ne() * 36, J = 1;
      if (o) {
        const P = ((ue - 44 + ve * 0.04) % 36 + 36) % 36;
        ee -= 0.21 * (P - (ue - 44)), ue = 44 + P, J = Math.min(1, P / 6, (36 - P) / 6);
      }
      ue *= R;
      const E = w(U.night, ee, ue) * J;
      E >= 0.05 && ie.drops.push({ x: ee, y: ue, o: E });
    }
    const W = U.cond === "snowy" ? 11 : U.cond === "snowy-rainy" ? 6 : 0;
    for (let pe = 0; pe < W; pe++) {
      let ee = Y + (ne() - 0.5) * v * 1.05, ue = 40 + ne() * 44, J = 1;
      if (o) {
        const P = ((ue - 40 + ve * 9e-3) % 44 + 44) % 44;
        ue = 40 + P, ee += 1.6 * Math.sin(x * ve / 2800 + pe * 1.9 + $), J = Math.min(1, P / 6, (44 - P) / 6);
      }
      ue *= R;
      const E = w(U.night, ee, ue) * J;
      E >= 0.05 && ie.flakes.push({ x: ee, y: ue, o: E });
    }
    if (U.k === "fog") {
      const pe = U.night ? "#c8ccd6" : "#ffffff", ee = U.night ? 0.28 : 0.62, ue = o ? 4 * Math.sin(x * ve / 8e3 + $) : 0;
      for (let J = 0; J < 4; J++) ie.fogs.push({ x: Y - v * 0.75 + J % 2 * v * 0.18 + (J % 2 ? ue : -ue), y: (30 + J * 13) * R, w: v * 1.3, c: pe, a: ee });
    }
    if (U.k === "storm") {
      const pe = (ve / 3400 + $ * 0.37) % 1;
      ie.bolts.push({ x: Y + (ne() - 0.5) * v * 0.3 - 5, y: 36 * R, o: o && !(pe < 0.05 || pe > 0.09 && pe < 0.12) ? 0.8 : 1 });
    }
  }), ie;
}
function su(a, l, o, c, h, v, w, A) {
  const { S: x, C: R, cw: ve, yb: ie, glowAt: U, soft: $, tw: ne, sy: Y } = a, G = new Array(o * c), W = new Uint8Array(o * c), pe = new Uint8Array(o * c), ee = (k, _, T, I, me) => {
    T == null || k < 0 || _ < 0 || k >= o || _ >= c || (I >= 1 || I > ia(k + 5, _ + 3)) && (G[_ * o + k] = T, W[_ * o + k] = me);
  }, ue = (k, _, T, I) => {
    for (let me = Math.max(0, Math.floor(_ - T) - 1); me <= Math.min(c - 1, _ + T + 1); me++) for (let z = Math.max(0, Math.floor(k - T) - 1); z <= Math.min(o - 1, k + T + 1); z++) I(z, me, z + 0.5 - k, me + 0.5 - _);
  }, J = (k, _, T) => {
    for (let me = 0; me < k.length - 1; me++) {
      const z = (me + _) * ve;
      if (T < z - ne / 2) return [k[me], k[me], 0];
      if (T <= z + ne / 2) return [k[me], k[me + 1], (T - z + ne / 2) / ne];
    }
    const I = k[k.length - 1];
    return [I, I, 0];
  }, E = x.filter((k) => !k.night).map((k) => k.sky), P = x.filter((k) => k.night).map((k) => k.sky), re = $ / v, Ae = 16 * Y / v;
  for (let k = 0; k < o; k++) {
    const _ = (k + 0.5) * h, T = ie(_) / v, I = J(E, 0.75, _), me = J(P, 1.25, _), z = U(_);
    for (let le = 0; le < c; le++) {
      const ge = ia(k, le), xe = le + 0.5 - T, $e = (re > 0.01 ? ra(0.5 + xe / re) : xe > 0 ? 1 : 0) > ge;
      let st = $e ? I[2] > ge ? I[1] : I[0] : me[2] > ge ? me[1] : me[0];
      ($e ? ra(((le + 0.5) / c - 0.45) / 0.55) * 0.7 : ra(1 - (le + 0.5) / (c * 0.55)) * 0.7) > ia(k + 2, le + 5) && (st = $e ? en(st, "#ffffff", 0.18) : en(st, "#000000", 0.25)), $e && xe >= 0 && xe < Ae && z.a * 1.3 * (1 - xe / Ae) > ia(k + 6, le + 1) && (st = z.c), G[le * o + k] = st, pe[le * o + k] = $e ? 0 : 1;
    }
  }
  const H = en(R.sun, "#ffffff", 0.55), Ie = en(R.moon, "#ffffff", 0.6);
  l.stars.forEach((k) => {
    const _ = Math.floor(k.x / h), T = Math.floor(k.y / v);
    if (_ < 0 || T < 0 || _ >= o || T >= c || !pe[T * o + _] || k.o < 0.15) return;
    const I = k.o > 0.45 ? R.star : en(R.star, G[T * o + _], 0.5), me = k.big && k.o > 0.6 ? Math.floor(k.size / h) : 0;
    ee(_, T, I, 1, Bi);
    for (let z = 1; z <= me; z++) [[_ - z, T], [_ + z, T], [_, T - z], [_, T + z]].forEach((le) => {
      le[0] >= 0 && le[1] >= 0 && le[0] < o && le[1] < c && pe[le[1] * o + le[0]] && ee(le[0], le[1], I, 1, Bi);
    });
  }), l.suns.forEach((k) => {
    const _ = Math.max(1.5, k.rad / h), T = k.x / h, I = k.y / v, me = k.halo / h * 0.85;
    if (ue(T, I, me, (z, le, ge, xe) => {
      const $e = Math.sqrt(ge * ge + xe * xe);
      $e > _ && $e < me && !pe[le * o + z] && ee(z, le, H, 0.3 * (1 - ($e - _) / (me - _)), 0);
    }), A) {
      const z = Math.floor(w / 500) % 2, le = Math.max(1, _ * 0.3);
      for (let ge = 0; ge < 8; ge++) if (ge % 2 === z) for (let xe = _ + 1.2; xe < _ + 1.2 + le; xe += 0.7) ee(Math.floor(T + Math.cos(ge * Math.PI / 4) * xe), Math.floor(I + Math.sin(ge * Math.PI / 4) * xe), R.sun, 1, Zd);
    }
    ue(T, I, _, (z, le, ge, xe) => {
      ge * ge + xe * xe <= _ * _ && ee(z, le, ra(((xe / _ + 1) / 2 - 0.6) / 0.4) > ia(z, le) ? R.sunEdge : R.sun, 1, Vd);
    });
  }), l.moons.forEach((k) => {
    const _ = Math.max(1.5, k.d * 0.37 / h), T = k.x / h, I = k.y / v, me = T + 0.547 * _, z = I - 0.503 * _, le = 0.82 * _;
    ue(T, I, _, (ge, xe, $e, st) => {
      if ($e * $e + st * st > _ * _) return;
      const At = ge + 0.5 - me, Tn = xe + 0.5 - z;
      At * At + Tn * Tn > le * le && ee(ge, xe, ra((st + _) / (2 * _) * 1.1 - 0.1) > ia(ge, xe) ? R.moon : Ie, 1, Gd);
    });
  }), l.clouds.forEach((k) => {
    const _ = Math.max(3, k.w / h), T = _ * 0.6665, I = k.x / h, me = k.y / v, z = en(k.fill, "#000000", 0.16);
    for (let le = Math.max(0, Math.floor(me) - 1); le <= Math.min(c - 1, me + T + 1); le++) for (let ge = Math.max(0, Math.floor(I) - 1); ge <= Math.min(o - 1, I + _ + 1); ge++) {
      const xe = (ge + 0.5 - I) / _, $e = (le + 0.5 - me) / _;
      Ol(xe, $e) && ee(ge, le, !Ol(xe, $e + 1 / _) || ra(($e - 0.42) / 0.25) * 0.8 > ia(ge, le) ? z : k.fill, k.o, Ud);
    }
  }), l.fogs.forEach((k) => {
    const _ = Math.floor(k.y / v), T = Math.max(_, Math.floor((k.y + 6 * Y) / v) - 1), I = Math.floor(k.x / h), me = Math.floor((k.x + k.w) / h);
    for (let z = _; z <= T; z++) for (let le = I; le <= me; le++) {
      const ge = (le - I) / Math.max(1, me - I);
      ee(le, z, k.c, k.a * (ge < 0.25 ? ge / 0.25 : ge > 0.75 ? (1 - ge) / 0.25 : 1), 0);
    }
  });
  const V = Math.max(2, Math.round(9 / v));
  l.drops.forEach((k) => {
    const _ = k.x / h, T = Math.floor(k.y / v);
    for (let I = 0; I < V; I++) ee(Math.floor(_ - 0.208 * I * v / h), T + I, R.rain, k.o, Yd);
  });
  const qe = Math.max(0, Math.round(4.4 / h / 2.6));
  return l.flakes.forEach((k) => {
    const _ = Math.floor(k.x / h), T = Math.floor(k.y / v);
    ee(_, T, R.snow, k.o, oa);
    for (let I = 1; I <= qe; I++)
      ee(_ - I, T, R.snow, k.o, oa), ee(_ + I, T, R.snow, k.o, oa), ee(_, T - I, R.snow, k.o, oa), ee(_, T + I, R.snow, k.o, oa);
  }), l.bolts.forEach((k) => {
    if (h <= 3.5)
      for (let _ = Math.floor(k.y / v); _ <= (k.y + 24) / v; _++) for (let T = Math.floor(k.x / h); T <= (k.x + 11) / h; T++)
        lp(iu, (T + 0.5) * h - k.x, (_ + 0.5) * v - k.y) && ee(T, _, R.sun, 1, os);
    else {
      const _ = Math.round(k.x / h), T = Math.round(k.y / v);
      ru.forEach((I, me) => I.split("").forEach((z, le) => {
        z === "#" && ee(_ + le, T + me, R.sun, 1, os);
      }));
    }
  }), { col: G, ids: W };
}
function lu(a, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), h = Math.max(6, Math.round(l.height / o)), v = l.width / c, w = l.height / h, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, x = ($) => {
    const ne = pp($, l);
    return su(ne, up(ne, { clock: A, ambient: l.ambient, seed: l.seed }), c, h, v, w, A, l.ambient);
  }, R = x(a), ve = l.reveal == null ? 1 : ra(l.reveal);
  let ie = R.col, U = R.ids;
  if (ve < 1) {
    const $ = l.prev ? x(l.prev) : null, ne = ve * (c + 12);
    ie = new Array(c * h), U = new Uint8Array(c * h);
    for (let Y = 0; Y < c * h; Y++) {
      const G = Y % c, W = Y / c | 0;
      (l.reduce ? ve : ra((ne - G) / 12)) > ia(G, W) ? (ie[Y] = R.col[Y], U[Y] = R.ids[Y]) : $ ? (ie[Y] = $.col[Y], U[Y] = $.ids[Y]) : (ie[Y] = null, U[Y] = 255);
    }
  }
  return cp(ie, U, c, h, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function du(a, l, o) {
  const c = o.width, h = o.height, v = o.reveal == null ? 1 : ra(o.reveal), w = (U, $) => {
    const ne = pp($, o);
    cu(U, ne, up(ne, o));
  };
  if (a.clearRect(0, 0, c, h), v >= 1) {
    w(a, l);
    return;
  }
  if (o.prev && w(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = v, w(a, l), a.restore();
    return;
  }
  const A = a.canvas, x = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (x.width !== A.width || x.height !== A.height) && (x.width = A.width, x.height = A.height);
  const R = x.getContext("2d");
  R.setTransform(a.getTransform()), R.clearRect(0, 0, c, h), w(R, l);
  const ve = v * (c + 64) - 64, ie = R.createLinearGradient(ve, 0, ve + 64, 0);
  ie.addColorStop(0, "rgba(0,0,0,1)"), ie.addColorStop(1, "rgba(0,0,0,0)"), R.globalCompositeOperation = "destination-in", R.fillStyle = ie, R.fillRect(0, 0, c, h), R.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(x, 0, 0), a.restore();
}
function cu(a, l, o) {
  const { W: c, H: h, S: v, C: w, cw: A, yb: x, glowAt: R, soft: ve, tw: ie, sy: U } = l, $ = (H, Ie) => {
    const V = Il(H);
    return "rgba(" + V[0] + "," + V[1] + "," + V[2] + "," + Math.max(0, Math.min(1, Ie)).toFixed(3) + ")";
  }, ne = (H, Ie) => {
    const V = a.createLinearGradient(0, 0, c, 0);
    V.addColorStop(0, H[0]);
    for (let qe = 0; qe < H.length - 1; qe++) {
      const k = (qe + Ie) * A, _ = (k - ie / 2) / c, T = (k + ie / 2) / c;
      _ > 0 && _ < 1 && V.addColorStop(_, H[qe]), T > 0 && T < 1 && V.addColorStop(T, H[qe + 1]);
    }
    return V.addColorStop(1, H[H.length - 1]), V;
  }, Y = Math.max(24, Math.ceil(c / 4)), G = (H, Ie) => {
    a.beginPath();
    for (let V = 0; V <= Y; V++) {
      const qe = c * V / Y, k = H == null ? 0 : x(qe) + H;
      V ? a.lineTo(qe, k) : a.moveTo(qe, k);
    }
    for (let V = Y; V >= 0; V--) {
      const qe = c * V / Y;
      a.lineTo(qe, x(qe) + Ie);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = ne(v.filter((H) => !H.night).map((H) => H.sky), 0.75), a.fillRect(0, 0, c, h);
  const W = a.createLinearGradient(0, 0, c, 0);
  for (let H = 0; H <= 64; H++) {
    const Ie = R(c * H / 64);
    W.addColorStop(H / 64, $(Ie.c, Math.min(1, Ie.a)));
  }
  a.fillStyle = W;
  for (let H = 0; H < 8; H++)
    a.globalAlpha = 1 - H / 8, G(H * 2 * U, (H + 1) * 2 * U);
  a.fillStyle = ne(v.filter((H) => H.night).map((H) => H.sky), 1.25);
  const pe = Math.max(0.5, ve), ee = 6;
  a.globalAlpha = 1, G(null, -pe);
  for (let H = 0; H < ee; H++)
    a.globalAlpha = 1 - (H + 0.5) / ee, G(-pe + 2 * pe * H / ee, -pe + 2 * pe * (H + 1) / ee);
  a.globalAlpha = 1;
  const ue = new Path2D(au), J = new Path2D(nu), E = new Path2D(tu), P = new Path2D(ou);
  a.fillStyle = w.star, o.stars.forEach((H) => {
    a.globalAlpha = H.o, H.big ? (a.save(), a.translate(H.x, H.y), a.scale(H.size, H.size), a.fill(ue), a.restore()) : (a.beginPath(), a.arc(H.x, H.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const re = en(w.sun, "#ffffff", 0.55);
  o.suns.forEach((H) => {
    const Ie = a.createRadialGradient(H.x, H.y, 0, H.x, H.y, H.halo);
    Ie.addColorStop(0, $(re, 0.42)), Ie.addColorStop(0.7, $(re, 0)), a.fillStyle = Ie, a.beginPath(), a.arc(H.x, H.y, H.halo, 0, Math.PI * 2), a.fill();
    const V = a.createLinearGradient(0, H.y - H.rad, 0, H.y + H.rad);
    V.addColorStop(0.6, w.sun), V.addColorStop(1, w.sunEdge), a.fillStyle = V, a.beginPath(), a.arc(H.x, H.y, H.rad, 0, Math.PI * 2), a.fill();
  });
  const Ae = en(w.moon, "#ffffff", 0.6);
  o.moons.forEach((H) => {
    a.save(), a.translate(H.x - H.d / 2, H.y - H.d / 2), a.scale(H.d / 46, H.d / 46);
    const Ie = a.createLinearGradient(0, 6, 0, 40);
    Ie.addColorStop(0, Ae), Ie.addColorStop(1, w.moon), a.fillStyle = Ie, a.fill(J), a.restore();
  }), o.clouds.forEach((H) => {
    a.save(), a.globalAlpha = H.o, a.translate(H.x, H.y), a.scale(H.w / 46, H.h / 30.66), a.translate(-4, -9.67), a.fillStyle = H.fill, a.fill(E), a.restore();
  }), o.fogs.forEach((H) => {
    const Ie = a.createLinearGradient(H.x, 0, H.x + H.w, 0);
    Ie.addColorStop(0, $(H.c, 0)), Ie.addColorStop(0.25, $(H.c, H.a)), Ie.addColorStop(0.75, $(H.c, H.a)), Ie.addColorStop(1, $(H.c, 0)), a.fillStyle = Ie, a.fillRect(H.x, H.y, H.w, 6 * U);
  }), a.fillStyle = w.rain, o.drops.forEach((H) => {
    a.save(), a.globalAlpha = H.o, a.translate(H.x, H.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = w.snow, o.flakes.forEach((H) => {
    a.globalAlpha = H.o, a.beginPath(), a.arc(H.x, H.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = w.sun, o.bolts.forEach((H) => {
    a.save(), a.globalAlpha = H.o, a.translate(H.x, H.y), a.fill(P), a.restore();
  }), a.restore();
}
function pu(a, l) {
  var ac, oc, ic, rc, sc, lc, dc;
  const o = (t) => a.getElementById(t), c = o("workoutView"), h = o("workoutNameInput");
  let v = !0;
  const w = o("homeClock");
  function A() {
    w && (w.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  A(), setInterval(A, 15e3);
  const x = o("createFlow"), R = o("createMovementsSlot"), ve = o("createTimingSlot"), ie = o("createFinishSlot"), U = o("movementStepSummary"), $ = o("timingStepSummary"), ne = o("finishStepSummary"), Y = o("continueToTiming"), G = o("continueToFinish"), W = o("finishMoveButton");
  let pe = !1, ee = [];
  function ue(t) {
    !t || ee.some((r) => r.node === t) || ee.push({ node: t, parent: t.parentNode, next: t.nextSibling });
  }
  function J(t, r) {
    t && (ue(t), r.appendChild(t));
  }
  function E() {
    [...ee].reverse().forEach(({ node: t, parent: r, next: s }) => {
      r && (s && s.parentNode === r ? r.insertBefore(t, s) : r.appendChild(t));
    }), ee = [];
  }
  function P(t) {
    a.querySelectorAll(".createStep").forEach((r) => {
      r.classList.toggle("active", r.dataset.createStep === t);
    }), t === "timing" && (pe = !0), re();
  }
  function re() {
    var ae, he;
    if (!ke) return;
    Ze[bt];
    const t = Je.filter((oe) => !oe.hidden), r = t.filter((oe) => oe.kind !== "rest").length, s = t.filter((oe) => oe.kind === "rest").length;
    U.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const p = r > 0, g = a.querySelector('[data-open-step="timing"]'), C = a.querySelector('[data-open-step="finish"]');
    g.disabled = !p, Y.disabled = !p, $.textContent = p ? ja(_.value) + " · " + Yt(T.value) + " movement · " + Yt(I.value) + " rest" : "Add a movement first", C.disabled = !(p && pe);
    const B = ((h == null ? void 0 : h.value) || "").trim(), q = [];
    (ae = o("includeWarmupPreset")) != null && ae.checked && q.push("warm-up"), (he = o("includeCooldownPreset")) != null && he.checked && q.push("cooldown"), ne.textContent = B ? B + (q.length ? " · " + q.join(" + ") : "") : q.length ? q.join(" + ") : "Name and optional extras";
  }
  function Ae() {
    var Ee, Qe, We;
    x.hidden = !1, pe = !1;
    const t = a.querySelector(".editNameRow"), r = o("createMoveOptions"), s = a.querySelector(".timeTiles"), p = o("routineSummaryModal"), g = a.querySelector(".tempoRevealRow"), C = o("tempoExperiment"), B = (Ee = o("warmupList")) == null ? void 0 : Ee.closest("section"), q = o("movementCreatorLaunch"), ae = o("movementCreator"), he = (Qe = o("strengthList")) == null ? void 0 : Qe.closest("section"), oe = (We = o("cooldownList")) == null ? void 0 : We.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), B, q, ae, he, oe].forEach((_e) => _e && J(_e, R)), [r, s, p, g, C].forEach((_e) => J(_e, ve)), J(t, ie), P("movements"), re();
  }
  function H() {
    E(), x.hidden = !0, a.querySelectorAll(".createStep").forEach((t) => t.classList.remove("active"));
  }
  a.querySelectorAll("[data-open-step]").forEach((t) => t.addEventListener("click", () => {
    t.disabled || P(t.dataset.openStep);
  })), Y.addEventListener("click", () => {
    Y.disabled || P("timing");
  }), G.addEventListener("click", () => P("finish")), W.addEventListener("click", () => o("saveWorkoutEdit").click());
  const Ie = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, V = o("homeNav"), qe = o("settingsNav");
  function k(t) {
    Object.entries(Ie).forEach(([r, s]) => s.classList.toggle("active", r === t)), V.classList.toggle("active", t === "home"), qe.classList.toggle("active", t === "settings"), t === "home" && setTimeout(Yi, 400), t === "settings" && (requestAnimationFrame(() => Wo(a.querySelector(".tab.active"), !1)), ki());
  }
  const _ = o("totalTime"), T = o("workTime"), I = o("restTime"), me = o("totalOut"), z = o("workOut"), le = o("restOut"), ge = o("totalFill"), xe = o("workFill"), $e = o("restFill"), st = o("roundsInput"), At = o("roundsFill"), Tn = o("roundsOut"), zn = o("totalLabel"), mt = o("routineSummaryModal"), Xe = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Lt = Xe.map((t) => ({ ...t })), Je = [
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
  const xn = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let Dn = xn.map((t) => ({ ...t }));
  const wr = {
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
  }, lt = Mo(l.data), Ze = lt.profiles;
  let bt = Ze[lt.selected] ? lt.selected : lt.order.find((t) => Ze[t]) || "kettlebell";
  function Mo(t) {
    const r = t && typeof t == "object" ? JSON.parse(JSON.stringify(t)) : {}, s = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(wr)), p = (Array.isArray(r.order) ? r.order : Object.keys(s)).filter((g) => s[g]);
    return Object.keys(s).forEach((g) => {
      p.includes(g) || p.push(g);
    }), {
      v: 1,
      profiles: s,
      order: p,
      selected: r.selected || p[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : yr(r.energy)).map(Ri),
      settings: { ...r.settings || {} }
    };
  }
  function yr(t) {
    if (!Array.isArray(t)) return [];
    const r = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return t.forEach((p) => {
      const g = new Date(p.at);
      if (isNaN(g)) return;
      const C = g.getFullYear() + "-" + String(g.getMonth() + 1).padStart(2, "0") + "-" + String(g.getDate()).padStart(2, "0"), B = g.getHours() < 14 ? "morning" : "evening";
      if (s.some((ae) => ae.date === C && ae.slot === B)) return;
      const q = r.indexOf(p.value) + 1;
      q > 0 && s.push({ date: C, slot: B, mood: null, energy: q, at: p.at });
    }), s;
  }
  function Ri(t) {
    if (t.scale === 100) return t;
    const r = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...t, mood: r(t.mood), energy: r(t.energy), scale: 100 };
  }
  function Ln() {
    ke || (lt.selected = bt, lt.order = lt.order.filter((t) => Ze[t] && t !== zt), l.save(lt));
  }
  function pt() {
    return lt.settings;
  }
  function qt(t) {
    const r = Ze[t];
    if (!r) return;
    bt = t;
    const s = o("workoutNameInput");
    if (s && (s.value = r.name), _.value = r.total, T.value = r.work, I.value = r.rest, st.value = r.rounds || 1, r.customSequence) {
      const p = (r.sequence || []).map((C) => ({ ...C })), g = (C) => p.filter((B) => B.presetRole === C).map(({ presetRole: B, ...q }) => q);
      Lt = (r.warmup || g("warmup")).map((C) => ({ ...C })), Dn = (r.cooldown || g("cooldown")).map((C) => ({ ...C })), Je = p.filter((C) => !C.presetRole), Qo(r.preset || "movement", !1);
    } else
      _.min = 3, _.max = 40, _.step = 1, T.min = 20, T.max = 60, T.step = 5, I.min = 5, I.max = 30, I.step = 5, Lt = (r.warmup || Xe).map((p) => ({ ...p })), Dn = (r.cooldown || xn).map((p) => ({ ...p })), Je = r.strength.map((p) => Array.isArray(p) ? (([g, C, B, q = !1]) => ({ id: g, name: C, group: B, kind: "work", hidden: !!q }))(p) : { ...p });
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((p) => p.classList.toggle("active", p.dataset.workout === t)), kt();
  }
  function xr(t, r, s) {
    const p = t.getBoundingClientRect(), g = p.width / 2, C = p.height / 2, B = r - g, q = s - C;
    let ae = 1 / 0, he = 1 / 0;
    B !== 0 && (ae = g / Math.abs(B)), q !== 0 && (he = C / Math.abs(q));
    const oe = Math.min(Math.max(1 / Math.min(ae, he), 0), 1);
    let te = Math.atan2(q, B) * (180 / Math.PI) + 90;
    return te < 0 && (te += 360), { edge: oe, angle: te };
  }
  function Xo(t, r, s = !1) {
    const p = t.getBoundingClientRect(), g = r.clientX - p.left, C = r.clientY - p.top, { edge: B, angle: q } = xr(t, g, C), ae = s ? 100 : B * 100;
    t.style.setProperty("--edge-proximity", ae.toFixed(3)), t.style.setProperty("--cursor-angle", q.toFixed(3) + "deg"), t.classList.toggle("borderGlowActive", s || ae >= 30);
  }
  function xt(t) {
    t.addEventListener("pointermove", (s) => Xo(t, s, !1)), t.addEventListener("pointerenter", (s) => Xo(t, s, !1)), t.addEventListener("pointerdown", (s) => Xo(t, s, !0));
    const r = () => {
      t.classList.remove("borderGlowActive"), t.style.setProperty("--edge-proximity", "0");
    };
    t.addEventListener("pointerleave", r), t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r);
  }
  xt(o("addWorkoutPanel"));
  let ke = !1, zt = null;
  function Oe(t) {
    return String(t ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function jn(t) {
    return t.summary ? t.summary : t.customSequence ? ja(t.total) + " · custom move" : ja(t.total) + " · " + Yt(t.work) + " / " + Yt(t.rest) + " · warm-up + cooldown";
  }
  function Wa(t, r) {
    var C;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = t, s.tabIndex = 0;
    const p = r.activityCount ?? (((C = r.sequence) == null ? void 0 : C.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Oe(r.name) + '</div><div class="sub">' + Oe(jn(r)) + '</div><span class="sourceTag">' + Oe(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (p ? p + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Oe(r.name) + "</div></div>";
    const g = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(s, g), xt(s), s.addEventListener("click", (B) => {
      B.target.closest("button") || qt(t);
    }), s.addEventListener("keydown", (B) => {
      (B.key === "Enter" || B.key === " ") && !B.target.closest("button") && (B.preventDefault(), qt(t));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (B) => {
      B.stopPropagation(), qt(t), ps(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (B) => {
      B.stopPropagation(), qt(t), Pr();
    }), s;
  }
  function Ni() {
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.remove()), lt.order.forEach((t) => {
      Ze[t] && Wa(t, Ze[t]);
    }), a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.classList.toggle("active", t.dataset.workout === bt));
  }
  Ni(), o("addWorkoutPanel").addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && (t.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    ke = !0, zt = "custom-" + Date.now(), Ze[zt] = {
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
    }, qt(zt), ps(!0);
  });
  let Ge = [], ot = 0, jt = 0, So = 1, Vn = !1, tn = null, Jo = null, ln = !1, qa = lt.settings.upcomingCount ?? "all", za = "movement";
  function Co(t, r, s) {
    return (Number(t) - r) / (s - r) * 100;
  }
  function Yt(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function ja(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function Gn() {
    ge.style.width = Co(_.value, Number(_.min), Number(_.max)) + "%", xe.style.width = Co(T.value, Number(T.min), Number(T.max)) + "%", $e.style.width = Co(I.value, Number(I.min), Number(I.max)) + "%", z.textContent = Yt(T.value), le.textContent = Yt(I.value);
    const t = Number(st.value) || 1;
    At.style.width = Co(t, 1, 10) + "%", zn.textContent = t > 1 ? "Time per round" : "Total time";
  }
  function Va(t) {
    return t.filter((r) => !r.hidden);
  }
  function ro(t) {
    const r = Math.max(0, Math.round(Number(t) || 0)), s = Math.floor(r / 3600), p = Math.floor(r % 3600 / 60), g = r % 60;
    return (s ? s + ":" + String(p).padStart(2, "0") : p) + ":" + String(g).padStart(2, "0");
  }
  function an(t) {
    let r;
    try {
      r = new URL(String(t || "").trim());
    } catch {
      return null;
    }
    const s = r.hostname.replace(/^(www|m|music)\./, "");
    let p = null;
    if (s === "youtu.be") p = r.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(s))
      if (r.pathname === "/watch") p = r.searchParams.get("v");
      else {
        const q = r.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        q && (p = q[2]);
      }
    if (!p || !/^[\w-]{11}$/.test(p)) return null;
    const g = (q) => {
      if (!q) return 0;
      if (/^\d+$/.test(q)) return Number(q);
      const ae = q.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return ae ? (Number(ae[1]) || 0) * 3600 + (Number(ae[2]) || 0) * 60 + (Number(ae[3]) || 0) : 0;
    }, C = g(r.searchParams.get("t") || r.searchParams.get("start")), B = g(r.searchParams.get("end"));
    return { id: p, start: C, end: B > C ? B : null };
  }
  function Ga(t, r) {
    if (t.useVideoLength === !1) return Math.max(5, Number(t.duration) || r || 300);
    const s = Number(t.start) || 0, p = Number(t.end) || Number(t.videoDuration) || 0;
    return p > s ? Math.round(p - s) : Number(t.duration) || 300;
  }
  function la(t, r) {
    const s = Math.max(0, Number(t) || 0);
    return Math.round(r === "hour" ? s * 3600 : r === "min" ? s * 60 : s);
  }
  function Qo(t, r = !0) {
    za = t, a.querySelectorAll(".createPresetBtn").forEach((p) => p.classList.toggle("active", p.dataset.movePreset === t));
    const s = Ze[bt];
    s && (s.preset = t), t === "work" ? (_.min = 30, _.max = 480, _.step = 30, T.min = 300, T.max = 7200, T.step = 300, I.min = 60, I.max = 1800, I.step = 60, r && (_.value = 60, T.value = 1500, I.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (_.min = 3, _.max = 40, _.step = 1, T.min = 20, T.max = 60, T.step = 5, I.min = 5, I.max = 30, I.step = 5, r && (_.value = 20, T.value = 45, I.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), Gn();
  }
  function Pi(t, r) {
    const s = za === "work";
    return t.map((p, g) => ({ ...p, id: r + "-" + g + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(T.value) }));
  }
  function Ii() {
    const t = Ze[bt];
    t != null && t.customSequence && (t.includeWarmup = o("includeWarmupPreset").checked, t.includeCooldown = o("includeCooldownPreset").checked, t.includeWarmup && !Lt.length && (Lt = Pi(Xe, "warm")), t.includeCooldown && !Dn.length && (Dn = Pi(xn, "cool")), kt());
  }
  function is() {
    const t = o("upcomingCountSetting");
    if (!t) return;
    const r = Math.max(1, Ge.length - 1), s = qa;
    t.innerHTML = "";
    for (let C = 1; C <= r; C++) {
      const B = document.createElement("option");
      B.value = String(C), B.textContent = String(C), t.appendChild(B);
    }
    const p = document.createElement("option");
    p.value = "all", p.textContent = "All", t.appendChild(p);
    const g = s === "all" ? "all" : String(Math.min(Number(s) || 1, r));
    t.value = g, qa = g === "all" ? "all" : Number(g);
  }
  function kt() {
    Number(_.value) * 60;
    const t = Number(T.value), r = Number(I.value), s = Ze[bt], p = !!(s != null && s.customSequence), g = (p ? !s.includeWarmup : s != null && s.warmupOff) ? [] : Va(Lt), C = Va(Je), B = p && !s.includeCooldown ? [] : Va(Dn);
    if (s && (s.total = Number(_.value), s.work = t, s.rest = r, s.rounds = Number(st.value) || 1, s.customSequence ? (s.sequence = Je.map((Le) => ({ ...Le })), s.warmup = Lt.map((Le) => ({ ...Le })), s.cooldown = Dn.map((Le) => ({ ...Le }))) : (s.strength = Je.map((Le) => ({ ...Le })), s.warmup = Lt.map((Le) => ({ ...Le })), s.cooldown = Dn.map((Le) => ({ ...Le })))), s != null && s.customSequence) {
      const Le = [...g.map((dt) => ({ ...dt, section: "warmup" })), ...C, ...B.map((dt) => ({ ...dt, section: "cooldown" }))].map((dt) => {
        if (dt.kind === "video") return { ...dt, duration: Ga(dt, t), rest: 0 };
        if (dt.kind === "rest") {
          const vn = dt.useGlobalTiming === !0 ? r : Number(dt.duration) || r;
          return { ...dt, duration: vn, rest: 0 };
        }
        const gn = dt.useGlobalTiming === !1 && Number(dt.duration) || t;
        return { ...dt, duration: gn, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Ge = [], Le.forEach((dt, gn) => {
        Ge.push(dt);
        const vn = Le[gn + 1];
        dt.kind !== "rest" && vn && vn.kind !== "rest" && Ge.push({
          id: "auto-rest-" + gn,
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
      Ge = [...g.map((Le) => ({ ...Le, section: "warmup" })), ...C, ...B.map((Le) => ({ ...Le, section: "cooldown" }))].map((Le) => Le.kind === "video" ? { ...Le, duration: Ga(Le, t), rest: 0 } : Le.kind === "rest" ? { ...Le, duration: Le.useGlobalTiming === !0 ? r : Number(Le.duration) || r, rest: 0 } : { ...Le, duration: Le.useGlobalTiming === !1 && Number(Le.duration) || t, rest: r }), Ge.forEach((Le, dt) => {
        var gn;
        ((gn = Ge[dt + 1]) == null ? void 0 : gn.kind) === "rest" && (Le.rest = 0);
      }), Ge.length && (Ge[Ge.length - 1].rest = 0);
    const q = Math.max(1, Math.min(10, Number(st.value) || 1)), ae = Ge, he = (Le) => q <= 1 ? null : Le.section === "warmup" || Le.presetRole === "warmup" ? "first" : Le.section === "cooldown" || Le.presetRole === "cooldown" ? "last" : Le.kind === "video" && (Le.videoRounds === "first" || Le.videoRounds === "last") ? Le.videoRounds : null, oe = (Le) => !!he(Le), te = ae.filter((Le) => !oe(Le)), Ee = ae.filter(oe), Qe = te.length, We = te.reduce((Le, dt) => Le + dt.duration + dt.rest, 0), _e = Ee.reduce((Le, dt) => Le + dt.duration + dt.rest, 0), Me = [
      Ee.some((Le) => Le.section === "warmup" || Le.presetRole === "warmup") && "warm-up",
      Ee.some((Le) => Le.section === "cooldown" || Le.presetRole === "cooldown") && "cooldown",
      Ee.some((Le) => Le.kind === "video" && !Le.section && !Le.presetRole) && "video"
    ].filter(Boolean), ht = Me.length > 1 ? Me.slice(0, -1).join(", ") + " & " + Me[Me.length - 1] : Me[0] || "";
    Ge = [];
    const gt = (Le, dt) => {
      const gn = he(Le);
      return !gn || (gn === "first" ? dt === 1 : dt === q);
    };
    for (let Le = 1; Le <= q; Le++)
      if (ae.filter((dt) => gt(dt, Le)).forEach((dt, gn) => Ge.push({ ...dt, id: dt.id + (q > 1 ? "-r" + Le : ""), round: Le, roundIndex: gn })), Le < q && Qe)
        if (s != null && s.customSequence)
          Ge.push({ id: "round-break-" + Le, name: "Rest", group: "Round " + (Le + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: Le, roundIndex: Qe, roundBreak: !0 });
        else {
          const dt = Ge[Ge.length - 1];
          dt.rest = r, dt.roundBreakAfter = !0;
        }
    Gn();
    const ze = Ge.reduce((Le, dt) => Le + dt.duration + dt.rest, 0), vt = Math.round(We / 60), Et = Math.round(ze / 60), rt = q > 1 ? ja(vt) + " × " + q + " rounds" + (_e ? " + " + Yt(_e) + " " + ht : "") + " (" + ja(Et) + ")" : ja(Et), at = [g.length ? "warm-up" : "", B.length ? "cooldown" : ""].filter(Boolean), pn = s != null && s.customSequence ? rt + " · " + Qe + " items" + (at.length && !(q > 1 && _e) ? " · " + at.join(" + ") : "") : rt + " · " + Yt(t) + " / " + Yt(r) + (at.length && !(q > 1 && _e) ? " · " + at.join(" + ") : "");
    me.textContent = Yt(We);
    const En = Ge.filter((Le) => !Le.roundBreak).length, Zt = q > 1 ? En + " activities · " + q + " rounds" : Qe + " activities";
    Tn.textContent = q > 1 ? q + " rounds · " + ja(Et) + " total" : "1 round", o("roundsCount").textContent = q, a.querySelectorAll("[data-rounds-step]").forEach((Le) => {
      Le.disabled = Number(Le.dataset.roundsStep) < 0 ? q <= 1 : q >= 10;
    }), s && (s.summary = pn, s.activityCount = Qe);
    const Li = a.querySelector(".workoutPanel.active .sub");
    Li && (Li.textContent = pn), mt.textContent = pn, Pe(), a.querySelectorAll(".workoutPanel.active .activityCount").forEach((Le) => Le.textContent = Zt), Gn(), ti(), Ua(), Aa(), is(), ke && re(), Ie.workout.classList.contains("active") && !tn && rr();
  }
  const Un = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', Hi = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', Fi = {
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
  }, Bn = (t) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Fi[t] || "") + "</svg>";
  a.querySelectorAll("[data-icon]").forEach((t) => {
    t.innerHTML = Bn(t.dataset.icon);
  });
  let Bt = null, on = null;
  function St(t) {
    return t = Math.max(1, Number(t) || 0), t >= 3600 && t % 3600 === 0 ? { value: t / 3600, unit: "hour" } : t >= 60 && t % 60 === 0 ? { value: t / 60, unit: "min" } : { value: t, unit: "sec" };
  }
  function so(t = !1) {
    const r = a.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), t && r.select());
  }
  function La(t, r, s = {}) {
    const p = t.kind === "rest", g = t.kind === "video", C = g ? t.useVideoLength !== !1 : p ? t.useGlobalTiming === !0 : t.useGlobalTiming !== !1, B = Number(p ? I.value : T.value), q = St(g ? t.useVideoLength === !1 ? t.duration : Ga({ ...t, useVideoLength: !0 }) : C ? B : t.duration || B), ae = g && (Number(t.videoDuration) > 0 || Number(t.end) > 0), he = g ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Oe(t.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Oe(t.autoName ? "" : t.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([ze, vt]) => '<option value="' + ze + '"' + ((t.videoRounds || "every") === ze ? " selected" : "") + ">" + vt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Oe(t.name) + '" placeholder="' + (p ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Oe(t.group) + '" placeholder="' + (p ? "Rest" : "e.g. Glutes + legs") + '"></label>', oe = g ? "Play the whole " + (Number(t.start) > 0 || Number(t.end) > 0 ? "clip" : "video") + (ae ? " · " + ro(Ga({ ...t, useVideoLength: !0 })) : "") : "Use global timing · " + Yt(B), te = document.createElement("div");
    te.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), te.dataset.index = r, te.dataset.id = t.id;
    const Ee = s.isNew ?? (on == null ? void 0 : on.item) === t, Qe = s.sheet ? '<div class="moveEditActions sheetActions">' + (Ee ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (t.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Oe(t.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Ee ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    te.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (g ? " videoFields" : "") + '">' + he + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (C ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Oe(oe) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + q.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((ze) => '<option value="' + ze + '"' + (ze === q.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[ze] + "</option>").join("") + "</select></div></div>" + Qe + "</div>";
    const We = (ze) => te.querySelector("[data-f=" + ze + "]"), _e = () => {
      const ze = We("global").checked;
      We("dur").disabled = ze, We("unit").disabled = ze, te.querySelector(".creatorDurationRow").classList.toggle("isDisabled", ze);
    };
    We("global").addEventListener("change", _e), _e();
    const Me = () => {
      var ze;
      if (s.sheet) {
        (ze = s.onCancel) == null || ze.call(s);
        return;
      }
      Ee && va(), Bt = null, kt();
    }, ht = () => {
      var Et;
      if (g) {
        gt();
        return;
      }
      const ze = We("name").value.trim();
      if (!ze) {
        We("name").focus();
        return;
      }
      t.name = ze, t.group = We("group").value.trim() || (p ? "Rest" : "Movement");
      const vt = We("global").checked;
      if (t.useGlobalTiming = vt, vt || (t.duration = Math.max(p ? 5 : 1, la(We("dur").value, We("unit").value))), s.sheet) {
        (Et = s.onSaved) == null || Et.call(s);
        return;
      }
      Ee && (on = null), Bt = null, kt(), Gt(Ee ? p ? "Rest added" : "Movement added" : "Movement updated");
    }, gt = () => {
      var at;
      const ze = We("url").value.trim(), vt = an(ze);
      if (!vt) {
        We("urlError").hidden = !1, We("url").classList.add("invalid"), We("url").focus();
        return;
      }
      const Et = vt.id !== t.videoId;
      t.url = ze, t.videoId = vt.id, t.start = vt.start, t.end = vt.end, Et && (t.videoDuration = null, t.videoError = null);
      const rt = We("name").value.trim();
      t.autoName = !rt, t.name = rt || (Et ? "" : t.name) || t.videoTitle || "YouTube video", t.group = "Video", t.videoRounds = We("rounds").value, t.useVideoLength = We("global").checked, t.useVideoLength || (t.duration = Math.max(5, la(We("dur").value, We("unit").value))), s.sheet ? (at = s.onSaved) == null || at.call(s) : (Ee && (on = null), Bt = null, kt(), Gt(Ee ? "Video added" : "Video updated")), (Et || !t.videoDuration || t.autoName && !t.videoTitle) && ml(t);
    };
    if (g && We("url").addEventListener("input", () => {
      We("urlError").hidden = !0, We("url").classList.remove("invalid");
    }), te.querySelector("[data-a=cancel]").addEventListener("click", Me), te.querySelector("[data-a=save]").addEventListener("click", ht), s.sheet && !Ee) {
      te.querySelector("[data-a=hide]").addEventListener("click", () => {
        var vt;
        return (vt = s.onHide) == null ? void 0 : vt.call(s);
      });
      const ze = te.querySelector("[data-a=remove]");
      yi(ze, ze.querySelector(".removeFill"), 1200, () => {
        var vt;
        return (vt = s.onRemove) == null ? void 0 : vt.call(s);
      });
    }
    return te.addEventListener("keydown", (ze) => {
      ze.key === "Escape" && (ze.preventDefault(), ze.stopPropagation(), Me()), ze.key === "Enter" && ze.target.matches("input") && (ze.preventDefault(), ht());
    }), te;
  }
  function To(t, r) {
    const s = o(r);
    s.innerHTML = "", t.forEach((p, g) => {
      if (p === Bt && !be()) {
        s.appendChild(La(p, g));
        return;
      }
      const C = document.createElement("div");
      C.className = "moveRow" + (p.hidden ? " hidden" : "") + (p.kind === "rest" ? " restItem" : "") + (p.kind === "video" ? " videoItem" : "") + (lr(p) ? " noMeta" : ""), C.dataset.index = g, C.dataset.id = p.id;
      const B = p.kind === "rest" ? p.useGlobalTiming === !0 ? "Global timing" : Yt(p.duration) : p.useGlobalTiming === !1 ? Yt(p.duration) : "Global timing", q = p.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", ae = p.kind === "video" ? p.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (p.useVideoLength === !1 ? "stops after " + Yt(p.duration) : Number(p.videoDuration) > 0 || Number(p.end) > 0 ? ro(Ga(p)) : "plays to the end") + (p.videoRounds === "first" ? " · first round only" : p.videoRounds === "last" ? " · last round only" : "") : p.group + " · " + B, he = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Oe(p.name) + '. Drag, or use the up and down arrow keys">' + Un + "</button>", oe = '<div class="moveText"><div class="moveItemName">' + Oe(p.name) + q + '</div><div class="moveMeta">' + Oe(ae) + "</div></div>", te = (We) => We.addEventListener("keydown", (_e) => {
        var gt, ze;
        if (_e.key !== "ArrowUp" && _e.key !== "ArrowDown") return;
        _e.preventDefault();
        const Me = t.indexOf(p), ht = Me + (_e.key === "ArrowUp" ? -1 : 1);
        ht < 0 || ht >= t.length || (t.splice(Me, 1), t.splice(ht, 0, p), kt(), (ze = (gt = o(r).children[ht]) == null ? void 0 : gt.querySelector(".dragHandle")) == null || ze.focus());
      });
      if (be()) {
        C.classList.add("phoneRow"), C.tabIndex = 0, C.setAttribute("role", "button"), C.setAttribute("aria-label", "Edit " + (p.name || "step")), C.innerHTML = he + oe + '<span class="rowChevron" aria-hidden="true">›</span>';
        const We = C.querySelector(".dragHandle");
        We.addEventListener("pointerdown", (_e) => ei(_e, C, s, t)), te(We), C.addEventListener("click", (_e) => {
          _e.target.closest(".dragHandle") || Ve(p, t);
        }), C.addEventListener("keydown", (_e) => {
          _e.key === "Enter" && _e.target === C && (_e.preventDefault(), Ve(p, t));
        }), s.appendChild(C);
        return;
      }
      C.innerHTML = he + oe + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Oe(p.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (p.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Oe(p.name) + '"><span class="removeFill"></span><span class="removeLabel">' + Hi + "</span></button></div>", C.querySelector(".editBtn").addEventListener("click", () => {
        va(), Bt = p, kt(), so();
      }), C.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        p.hidden = !p.hidden, kt();
      });
      const Ee = C.querySelector(".removeBtn");
      yi(Ee, Ee.querySelector(".removeFill"), 1200, () => {
        const We = t.indexOf(p);
        We < 0 || (t.splice(We, 1), kt(), Gt("Removed " + p.name, { label: "Undo", run: () => {
          t.splice(Math.min(We, t.length), 0, p), kt();
        } }));
      });
      const Qe = C.querySelector(".dragHandle");
      Qe.addEventListener("pointerdown", (We) => ei(We, C, s, t)), te(Qe), s.appendChild(C);
    });
  }
  const Rn = () => {
    var t;
    return (t = window.matchMedia) == null ? void 0 : t.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Nn = (t) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, t);
    } catch {
    }
  };
  function ei(t, r, s, p) {
    if (t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const g = t.currentTarget, C = t.pointerId, B = !Rn();
    try {
      g.setPointerCapture(C);
    } catch {
    }
    const q = r.closest(".exerciseScroller") || y(r), ae = s.style.position;
    s.style.position = "relative";
    const he = [...s.children].filter((ct) => ct.classList.contains("moveRow")), oe = he.indexOf(r), te = parseFloat(getComputedStyle(s).rowGap) || 8, Ee = r.offsetHeight, Qe = Ee + te, We = he.map((ct) => ct.offsetTop), _e = he.map((ct) => ct.offsetHeight), Me = () => s.getBoundingClientRect().top, ht = s.getBoundingClientRect().width, gt = t.clientY - (Me() + We[oe]), ze = t.clientX;
    let vt = t.clientY, Et = t.clientX, rt = Me() + We[oe], at = 0, pn = 0, En = 0, Zt = 1, Li = 0, Le = oe, dt = !1, gn = 0, vn = !1, Sl = !1, $r = We[oe];
    s.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", Nn(8);
    const Cl = () => {
      const ct = vt - gt + Ee / 2 - Me();
      let Mt = 0;
      return he.forEach((Ot, na) => {
        na !== oe && ct > We[na] + _e[na] / 2 && Mt++;
      }), Mt;
    }, Tl = () => {
      he.forEach((ct, Mt) => {
        if (Mt === oe) return;
        const Ot = oe < Le && Mt > oe && Mt <= Le ? -Qe : oe > Le && Mt >= Le && Mt < oe ? Qe : 0;
        ct.style.transform = Ot ? "translateY(" + Ot + "px)" : "";
      });
    }, qs = () => {
      const ct = s.getBoundingClientRect(), Mt = Math.abs(Et - ze) > Math.max(80, ht * 0.3) || Et < ct.left - 24 || Et > ct.right + 24;
      Mt !== dt && (dt = Mt, r.classList.toggle("willReturn", Mt), Nn(Mt ? 10 : 4));
      const Ot = dt ? oe : Cl();
      Ot !== Le && (Le = Ot, Tl(), dt || Nn(4));
    }, Ai = () => {
      if (Le === oe) return We[oe];
      const ct = he.filter((Ot, na) => na !== oe);
      let Mt = We[0];
      for (let Ot = 0; Ot < Le; Ot++) Mt += ct[Ot].offsetHeight + te;
      return Mt;
    }, Xr = () => {
      const ct = B ? Math.min(Math.abs(at) / 40, 1) : 0, Mt = B && !vn ? Math.max(-3, Math.min(3, En * 0.6)) : 0;
      r.style.transform = "translate(" + pn.toFixed(2) + "px," + (rt - (Me() + We[oe])).toFixed(2) + "px) rotate(" + Mt.toFixed(2) + "deg) scale(" + (Zt * (1 - 0.04 * ct)).toFixed(4) + "," + (Zt * (1 + 0.06 * ct)).toFixed(4) + ")";
    }, it = () => {
      gn = requestAnimationFrame(it);
      const ct = Et - ze, Mt = vn ? Me() + $r : vt - gt, Ot = vn ? 0 : dt ? ct * 0.9 : Math.max(-22, Math.min(22, ct * 0.22)), na = vn ? 1 : dt ? 0.97 : 1.035;
      if (!B) {
        rt = Mt, pn = vn ? 0 : Ot, Zt = 1, Xr(), vn && $t();
        return;
      }
      const Wp = vn ? 0.24 : 0.2, qp = vn ? 0.62 : 0.68;
      at = (at + (Mt - rt) * Wp) * qp, rt += at, En = (En + (Ot - pn) * 0.16) * 0.7, pn += En, Li = (Li + (na - Zt) * 0.22) * 0.6, Zt += Li, Xr(), vn && Math.abs(at) < 0.15 && Math.abs(Mt - rt) < 0.5 && Math.abs(pn) < 0.5 && Math.abs(Zt - 1) < 3e-3 && $t();
    }, Nt = setInterval(() => {
      if (!q || vn) return;
      const ct = q.getBoundingClientRect(), Mt = 56, Ot = vt < ct.top + Mt ? -10 : vt > ct.bottom - Mt ? 10 : 0;
      Ot && (q.scrollTop += Ot, qs());
    }, 30);
    function $t() {
      if (Sl) return;
      Sl = !0, cancelAnimationFrame(gn);
      const ct = Le !== oe, Mt = r.dataset.id;
      if (s.classList.remove("reordering"), he.forEach((na) => {
        na.style.transition = "none", na.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), s.style.position = ae, ct) {
        const [na] = p.splice(oe, 1);
        p.splice(Le, 0, na);
      }
      kt();
      const Ot = Mt && s.querySelector('.moveRow[data-id="' + Mt + '"]');
      Ot && B && Ot.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), ct && Gt("Order saved");
    }
    const bn = (ct) => {
      if (ct.pointerId === C) {
        if (ct.pointerType === "mouse" && ct.buttons === 0) {
          Ta();
          return;
        }
        vt = ct.clientY, Et = ct.clientX, qs();
      }
    }, ta = (ct) => {
      ct.pointerId === C && Ta();
    };
    function Ta() {
      vn || (window.removeEventListener("pointermove", bn, !0), window.removeEventListener("pointerup", ta, !0), window.removeEventListener("pointercancel", ta, !0), g.removeEventListener("lostpointercapture", Ta), clearInterval(Nt), dt && Le !== oe && (Le = oe, Tl()), $r = Ai(), vn = !0, Nn(6), setTimeout($t, 800));
    }
    window.addEventListener("pointermove", bn, !0), window.addEventListener("pointerup", ta, !0), window.addEventListener("pointercancel", ta, !0), g.addEventListener("lostpointercapture", Ta), gn = requestAnimationFrame(it), Xr();
  }
  function ti() {
    var g, C, B, q;
    const t = Ze[bt], r = (g = o("warmupList")) == null ? void 0 : g.closest("section"), s = (C = o("cooldownList")) == null ? void 0 : C.closest("section"), p = (q = (B = o("strengthList")) == null ? void 0 : B.closest("section")) == null ? void 0 : q.querySelector(".sectionTitle");
    t != null && t.customSequence ? (r && (r.hidden = !t.includeWarmup), s && (s.hidden = !t.includeCooldown), p && (p.textContent = "Move sequence")) : (r && (r.hidden = !!(t != null && t.warmupOff)), s && (s.hidden = !1), p && (p.textContent = "Kettlebell work")), To(Lt, "warmupList"), To(Je, "strengthList"), To(Dn, "cooldownList");
  }
  function va() {
    if (!on) return;
    const { item: t, arr: r } = on;
    on = null;
    const s = r.indexOf(t);
    s >= 0 && r.splice(s, 1), Bt === t && (Bt = null);
  }
  function da(t) {
    return t.id === "warmupList" ? { arr: Lt, kind: "warmup", group: "Warm-up" } : t.id === "cooldownList" ? { arr: Dn, kind: "cooldown", group: "Cooldown" } : { arr: Je, kind: "work", group: "" };
  }
  function $n(t, r) {
    const s = da(r), p = Date.now().toString(36);
    return t === "video" ? { id: "video-" + p, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : t === "rest" ? { id: "rest-" + p, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(I.value) } : { id: "movement-" + p, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(T.value) };
  }
  const Oi = "cubic-bezier(.34,1.46,.64,1)";
  function Lo(t, r) {
    if (Rn() || !t) {
      r();
      return;
    }
    const s = (C) => {
      var B;
      return ((B = C.dataset) == null ? void 0 : B.id) || C;
    }, p = () => [...t.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], g = new Map(p().map((C) => [s(C), C.getBoundingClientRect().top]));
    r(), p().forEach((C) => {
      const B = g.get(s(C));
      if (B === void 0) return;
      const q = B - C.getBoundingClientRect().top;
      Math.abs(q) < 0.5 || C.animate([{ transform: "translateY(" + q + "px)" }, { transform: "none" }], { duration: 440, easing: Oi });
    });
  }
  function ni(t, r) {
    if (!t || Rn()) return;
    const s = t.offsetHeight, p = Math.max(0, s - (r || 0));
    t.animate([{ clipPath: "inset(0 0 " + p + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Oi });
  }
  function ba(t, r, s, p) {
    const { arr: g } = da(r), C = $n(t, r);
    g.splice(Math.max(0, Math.min(s, g.length)), 0, C), on = { item: C, arr: g }, Bt = C, Lo(r.closest(".exerciseScroller,.createStepSlot") || r, () => kt());
    const B = r.querySelector(".moveRow.editing");
    return ni(B, p), so(t === "rest"), B;
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
    return s.className = "addGhost" + (t === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + Un + '</span><span class="addGhostText"><strong>' + Oe(r[0]) + "</strong><small>" + Oe(r[1]) + "</small></span>", o("workoutModal").appendChild(s), s;
  }
  function F(t) {
    t.classList.add("leaving"), setTimeout(() => t.remove(), 180);
  }
  function Z(t, r, s, p) {
    (Bt || on) && (va(), Bt = null, kt());
    const g = t.getBoundingClientRect(), C = L(r, S[r]);
    C.setAttribute("aria-hidden", "true"), C.style.width = g.width + "px", C.style.height = g.height + "px", C.style.transform = "translate(" + g.left + "px," + g.top + "px)", t.classList.add("lifting");
    const B = y(t);
    return Q({
      ghost: C,
      origin: g,
      sx: s,
      sy: p,
      scroller: B,
      column: t.closest(".exerciseScroller,.createFlow") || B,
      home: () => t.getBoundingClientRect(),
      onDrop: (q, ae, he) => {
        F(C), t.classList.remove("lifting"), ba(r, q, ae, he);
      },
      onReturn: () => {
        F(C), t.classList.remove("lifting");
      }
    });
  }
  function Q({ ghost: t, origin: r, sx: s, sy: p, scroller: g, column: C, home: B, onDrop: q, onReturn: ae, rowLook: he = !1 }) {
    var Xr;
    const oe = !Rn(), te = ((Xr = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Xr.offsetHeight) || 80, Ee = s - r.left, Qe = p - r.top, We = 44;
    let _e = s, Me = p, ht = r.left, gt = r.top, ze = 0, vt = 0, Et = !oe, rt = null, at = null, pn = -1, En = 0, Zt = null;
    const Li = () => ["warmupList", "strengthList", "cooldownList"].map((it) => o(it)).filter((it) => it && it.getClientRects().length && !it.closest("[hidden]")), Le = (it) => {
      if (it === rt) return;
      rt = it, t.classList.toggle("overList", !!it || he);
      const Nt = it ? it.getBoundingClientRect().width : r.width;
      t.style.width = Nt + "px", t.style.height = (it ? te : r.height) + "px";
    }, dt = (it) => {
      it.classList.add("leaving"), it.style.height = "0px", it.style.marginTop = "-8px", setTimeout(() => it.remove(), oe ? 320 : 0);
    }, gn = (it, Nt, $t) => {
      if (at && at.parentNode === it && pn === $t || (at && (dt(at), at = null, pn = -1), !it)) return;
      const bn = document.createElement("div");
      bn.className = "dropSlot", it.insertBefore(bn, Nt), at = bn, pn = $t, bn.getBoundingClientRect(), bn.style.height = te + "px", bn.style.marginTop = "0px";
    }, vn = () => {
      let it = null, Nt = 1 / 0;
      for (const Ta of Li()) {
        const ct = Ta.getBoundingClientRect();
        if (_e < ct.left - 48 || _e > ct.right + 48) continue;
        const Mt = ct.top - 28, Ot = ct.bottom + 28, na = Me < Mt ? Mt - Me : Me > Ot ? Me - Ot : 0;
        na < Nt && (Nt = na, it = Ta);
      }
      const $t = C == null ? void 0 : C.getBoundingClientRect(), ta = $t && _e >= $t.left && _e <= $t.right && Me >= $t.top && Me <= $t.bottom || Nt === 0 ? it : null;
      if (ta) {
        const Ta = [...ta.children].filter((Mt) => Mt.classList.contains("moveRow"));
        let ct = Ta.findIndex((Mt) => {
          const Ot = Mt.getBoundingClientRect();
          return Me < Ot.top + Ot.height / 2;
        });
        ct < 0 && (ct = Ta.length), gn(ta, Ta[ct] || null, ct);
      } else gn(null);
      Le(ta);
    }, Sl = () => {
      if (Zt) return Zt.aim();
      if (rt) {
        const it = rt.getBoundingClientRect();
        let Nt = Me - te / 2;
        return at && (Nt = Nt * 0.6 + at.getBoundingClientRect().top * 0.4), { x: it.left, y: Nt };
      }
      return { x: _e - Ee, y: Me - Qe };
    }, $r = (it, Nt, $t, bn) => {
      t.style.transform = "translate(" + ht + "px," + gt + "px) rotate(" + it + "deg) rotate(" + Nt + "rad) scale(" + $t + "," + bn + ") rotate(" + -Nt + "rad)";
    }, Cl = () => {
      if (En = requestAnimationFrame(Cl), !Et) {
        const ct = _e - s, Mt = Me - p, Ot = Math.min(Math.hypot(ct, Mt) / We, 1);
        ht = r.left + ct * 0.35, gt = r.top + Mt * 0.35, $r(0, Math.atan2(Mt, ct), 1 + 0.155 * Ot, 1 - 0.1 * Ot);
        return;
      }
      const it = Sl();
      if (!oe) {
        ht = it.x, gt = it.y, $r(0, 0, 1, 1), Zt && (cancelAnimationFrame(En), Zt.done());
        return;
      }
      const Nt = Zt ? Zt.k : 0.17, $t = Zt ? Zt.d : 0.7;
      ze = (ze + (it.x - ht) * Nt) * $t, vt = (vt + (it.y - gt) * Nt) * $t, ht += ze, gt += vt;
      const bn = Math.hypot(ze, vt), ta = Math.min(bn / 48, 1), Ta = rt || Zt ? 0 : Math.max(-5, Math.min(5, ze * 0.32));
      $r(Ta, Math.atan2(vt, ze), 1 + 0.1 * ta, 1 - 0.063 * ta), Zt && bn < 0.15 && Math.hypot(it.x - ht, it.y - gt) < 0.6 && (cancelAnimationFrame(En), Zt.done());
    }, Tl = setInterval(() => {
      if (!g || Zt) return;
      const it = g.getBoundingClientRect(), Nt = 64, $t = Me < it.top + Nt ? -(it.top + Nt - Me) / 4 : Me > it.bottom - Nt ? (Me - (it.bottom - Nt)) / 4 : 0;
      $t && (g.scrollTop += Math.max(-18, Math.min(18, $t)), vn());
    }, 30);
    En = requestAnimationFrame(Cl);
    let qs = !1;
    const Ai = (it, Nt) => {
      if (qs) return;
      qs = !0, cancelAnimationFrame(En);
      const $t = at ? at.offsetHeight : te;
      !it && at && (at.remove(), at = null), it ? q(it, Nt, $t) : ae();
    };
    return {
      move(it, Nt) {
        _e = it, Me = Nt, !Et && Math.hypot(_e - s, Me - p) > We && (Et = !0, ze = (_e - s) * 0.085, vt = (Me - p) * 0.085), Et && vn();
      },
      drop(it) {
        clearInterval(Tl);
        const Nt = rt, $t = pn;
        if (!it && Nt && at) {
          const bn = at;
          Zt = { k: 0.24, d: 0.62, aim: () => {
            const ta = bn.getBoundingClientRect();
            return { x: ta.left, y: ta.top };
          }, done: () => Ai(Nt, $t) }, setTimeout(() => Ai(Nt, $t), 650), oe || (cancelAnimationFrame(En), Ai(Nt, $t));
          return;
        }
        gn(null), Le(null), Zt = { k: 0.2, d: 0.66, aim: () => {
          const bn = B();
          return { x: bn.left, y: bn.top };
        }, done: () => Ai(null) }, setTimeout(() => Ai(null), 650), oe || (cancelAnimationFrame(En), Ai(null));
      }
    };
  }
  function de(t, r) {
    let s = !1;
    t.addEventListener("click", (p) => {
      if (s) {
        s = !1, p.preventDefault();
        return;
      }
      if (be()) {
        Re(r);
        return;
      }
      const g = o("strengthList"), C = ba(r, g, da(g).arr.length, 0);
      C == null || C.scrollIntoView({ block: "nearest", behavior: Rn() ? "auto" : "smooth" });
    }), t.addEventListener("pointerdown", (p) => {
      if (p.button !== void 0 && p.button !== 0) return;
      const g = p.pointerId, C = p.clientX, B = p.clientY;
      let q = null, ae = !1;
      try {
        t.setPointerCapture(g);
      } catch {
      }
      const he = (Me) => {
        if (Me.pointerId === g) {
          if (Me.pointerType === "mouse" && Me.buttons === 0) {
            _e(!1);
            return;
          }
          if (!q) {
            if (Math.hypot(Me.clientX - C, Me.clientY - B) < 6) return;
            q = Z(t, r, C, B);
          }
          q.move(Me.clientX, Me.clientY);
        }
      }, oe = (Me) => {
        Me.pointerId === g && _e(!1);
      }, te = (Me) => {
        Me.pointerId === g && _e(!0);
      }, Ee = () => _e(!1), Qe = () => _e(!0), We = (Me) => {
        Me.key === "Escape" && q && (Me.preventDefault(), Me.stopPropagation(), _e(!0));
      };
      function _e(Me) {
        if (!ae && (ae = !0, window.removeEventListener("pointermove", he, !0), window.removeEventListener("pointerup", oe, !0), window.removeEventListener("pointercancel", te, !0), window.removeEventListener("keydown", We, !0), window.removeEventListener("blur", Qe), t.removeEventListener("lostpointercapture", Ee), q)) {
          const ht = q;
          q = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), ht.drop(Me);
        }
      }
      window.addEventListener("pointermove", he, !0), window.addEventListener("pointerup", oe, !0), window.addEventListener("pointercancel", te, !0), window.addEventListener("keydown", We, !0), window.addEventListener("blur", Qe), t.addEventListener("lostpointercapture", Ee);
    });
  }
  const ye = (ac = window.matchMedia) == null ? void 0 : ac.call(window, "(max-width: 620px)");
  function be() {
    var t;
    return !!((t = window.matchMedia) != null && t.call(window, "(max-width: 620px)").matches);
  }
  const He = (t) => t.charAt(0).toUpperCase() + t.slice(1), Ce = (t) => t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "movement";
  let De = null, Be = null;
  function Fe(t, r, s, p) {
    Te(), o("sheetTitle").textContent = t;
    const g = o("sheetBody");
    g.innerHTML = "", g.appendChild(r), De = s || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !g.contains(r)) return;
      const C = p ? g.querySelector("input[data-f=url],input[data-f=name]") : g.querySelector("button,input,select");
      C == null || C.focus({ preventScroll: !0 });
    }, Rn() ? 0 : 360);
  }
  function Te() {
    const t = o("sheet");
    if (!t.classList.contains("open")) return;
    t.classList.remove("open"), o("sheetScrim").classList.remove("open"), t.setAttribute("aria-hidden", "true"), t.contains(a.activeElement) && a.activeElement.blur();
    const r = De;
    De = null, r == null || r(), setTimeout(dn, 0);
  }
  o("sheetScrim").addEventListener("click", Te), o("sheet").addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Te());
  });
  function Ve(t, r) {
    const s = La(t, r.indexOf(t), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Te(), kt(), Gt(He(Ce(t)) + " updated");
      },
      onCancel: Te,
      onHide() {
        t.hidden = !t.hidden, Te(), kt(), Gt((t.hidden ? "Hidden: " : "Showing: ") + t.name);
      },
      onRemove() {
        Te();
        const p = r.indexOf(t);
        p < 0 || (r.splice(p, 1), kt(), Gt("Removed " + t.name, { label: "Undo", run: () => {
          r.splice(Math.min(p, r.length), 0, t), kt();
        } }));
      }
    });
    Fe("Edit " + Ce(t), s, null, !1);
  }
  function tt() {
    const t = document.createElement("div");
    t.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, s, p, g]) => {
      const C = document.createElement("button");
      C.type = "button", C.className = "sheetChoice", C.innerHTML = '<span class="timeIcon" aria-hidden="true">' + Bn(s) + "</span><span><strong>" + p + "</strong><small>" + g + "</small></span>", C.addEventListener("click", () => Re(r)), t.appendChild(C);
    }), Fe("Add to the move", t, null, !1);
  }
  function Re(t) {
    Be && ya();
    const r = $n(t, o("strengthList")), s = La(r, -1, {
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
  function Kt() {
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
    t && (t.textContent = (((r = o("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((s = Ze[bt]) == null ? void 0 : s.name) || "Move", o("setupSummaryMeta").textContent = mt.textContent);
  }
  o("setupSummary").addEventListener("click", Kt), o("addFab").addEventListener("click", tt);
  function Pt() {
    const t = o("strengthList");
    return y(t) || t.closest(".exerciseScroller");
  }
  function Vt() {
    const t = o("strengthList").getBoundingClientRect(), r = (Pt() || o("strengthList")).getBoundingClientRect(), s = (Be == null ? void 0 : Be.ghost.offsetHeight) || 64;
    return { left: t.left, top: Math.max(r.top + 12, Math.min(r.bottom - s - 96, r.top + r.height * 0.55 - s / 2)), width: t.width, height: s };
  }
  function ca(t, r) {
    var q;
    const s = L(r, [t.name || S[r][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (t.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const p = document.createElement("span");
    p.className = "addGhostActions", p.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Oe(t.name) + '">✕</button>', s.appendChild(p), Be = { item: t, type: r, ghost: s };
    const g = ((q = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : q.offsetHeight) || 64;
    s.style.width = o("strengthList").getBoundingClientRect().width + "px", s.style.height = g + "px";
    const C = Vt(), B = In.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + C.left + "px," + B + "px)", s.getBoundingClientRect(), Rn() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + C.left + "px," + C.top + "px)", p.querySelector("[data-a=end]").addEventListener("click", ya), p.querySelector("[data-a=discard]").addEventListener("click", kr), s.addEventListener("pointerdown", wa);
  }
  function wa(t) {
    if (!Be || t.target.closest("button") || t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const { item: r, ghost: s } = Be, p = t.pointerId;
    try {
      s.setPointerCapture(p);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const g = s.getBoundingClientRect(), C = Pt(), B = Q({
      ghost: s,
      origin: { left: g.left, top: g.top, width: g.width, height: g.height },
      sx: t.clientX,
      sy: t.clientY,
      scroller: C,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || C,
      rowLook: !0,
      home: Vt,
      onDrop: (_e, Me, ht) => {
        Be = null, F(s), Wi(r, _e, Me, ht);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let q = !1;
    const ae = (_e) => {
      if (_e.pointerId === p) {
        if (_e.pointerType === "mouse" && _e.buttons === 0) {
          We(!1);
          return;
        }
        B.move(_e.clientX, _e.clientY);
      }
    }, he = (_e) => {
      _e.pointerId === p && We(!1);
    }, oe = (_e) => {
      _e.pointerId === p && We(!0);
    }, te = () => We(!1), Ee = () => We(!0), Qe = (_e) => {
      _e.key === "Escape" && (_e.preventDefault(), We(!0));
    };
    function We(_e) {
      q || (q = !0, window.removeEventListener("pointermove", ae, !0), window.removeEventListener("pointerup", he, !0), window.removeEventListener("pointercancel", oe, !0), window.removeEventListener("keydown", Qe, !0), window.removeEventListener("blur", Ee), s.removeEventListener("lostpointercapture", te), B.drop(_e));
    }
    window.addEventListener("pointermove", ae, !0), window.addEventListener("pointerup", he, !0), window.addEventListener("pointercancel", oe, !0), window.addEventListener("keydown", Qe, !0), window.addEventListener("blur", Ee), s.addEventListener("lostpointercapture", te);
  }
  function Wi(t, r, s, p) {
    const g = da(r);
    t.kind !== "rest" && t.kind !== "video" && (t.kind = g.kind, g.group && (!t.group || t.group === "Movement") && (t.group = g.group)), g.arr.splice(Math.max(0, Math.min(s, g.arr.length)), 0, t), Lo(r.closest(".exerciseScroller,.createStepSlot") || r, () => kt()), ni(r.querySelector('.moveRow[data-id="' + t.id + '"]'), p), Gt(He(Ce(t)) + " added");
  }
  function ya() {
    var p;
    if (!Be) return;
    const { item: t, ghost: r } = Be;
    Be = null, F(r);
    const s = o("strengthList");
    Wi(t, s, da(s).arr.length, 0), (p = s.querySelector('.moveRow[data-id="' + t.id + '"]')) == null || p.scrollIntoView({ block: "nearest", behavior: Rn() ? "auto" : "smooth" });
  }
  function kr() {
    if (!Be) return;
    const t = Be.ghost;
    Be = null, F(t), Gt("Discarded");
  }
  function ft() {
    Be && (Be.ghost.remove(), Be = null);
  }
  window.addEventListener("resize", () => {
    if (Be != null && Be.ghost.classList.contains("hovering")) {
      const t = Vt();
      Be.ghost.style.width = t.width + "px", Be.ghost.style.transform = "translate(" + t.left + "px," + t.top + "px)";
    }
  }), (oc = ye == null ? void 0 : ye.addEventListener) == null || oc.call(ye, "change", () => {
    Te(), Be && !be() && ya(), ti();
  });
  {
    const t = o("workoutModal").querySelector(".modal");
    t.addEventListener("scroll", () => {
      (t.scrollTop || t.scrollLeft) && (t.scrollTop = 0, t.scrollLeft = 0);
    });
  }
  function dn() {
    const t = o("workoutModal"), r = window.visualViewport;
    if (!t.classList.contains("open") || !be()) {
      Xn();
      return;
    }
    const s = r ? r.offsetTop : 0, p = r ? r.offsetLeft : 0, g = r ? r.width : window.innerWidth, C = r ? r.height : window.innerHeight;
    Object.assign(t.style, { right: "auto", bottom: "auto", width: g + "px", height: C + "px", top: s + "px", left: p + "px" });
    const B = t.getBoundingClientRect();
    Math.abs(B.top - s) > 0.5 && (t.style.top = 2 * s - B.top + "px"), Math.abs(B.left - p) > 0.5 && (t.style.left = 2 * p - B.left + "px");
  }
  function Xn() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((t) => o("workoutModal").style.removeProperty(t));
  }
  (ic = window.visualViewport) == null || ic.addEventListener("resize", dn), (rc = window.visualViewport) == null || rc.addEventListener("scroll", dn), window.addEventListener("resize", dn), window.addEventListener("scroll", dn, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(dn, 250));
  function Ua() {
    Je.length > 0;
    const t = o("addMovementBtn"), r = o("addRestBtn");
    t && (t.innerHTML = Un + "<span>Add movement</span>"), r && (r.innerHTML = Un + "<span>Add rest</span>");
    const s = o("addVideoBtn");
    s && (s.innerHTML = Un + "<span>Add video</span>");
  }
  function Aa() {
    const t = o("useGlobalTiming").checked, r = o("addMovementDuration"), s = o("addMovementUnit");
    r.disabled = t, s.disabled = t, r.parentElement.style.opacity = t ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + Yt(T.value);
    const p = o("useGlobalRestTiming").checked, g = o("addRestDuration"), C = o("addRestUnit");
    g.disabled = p, C.disabled = p, g.parentElement.style.opacity = p ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + Yt(I.value);
  }
  let qi = "movement";
  function ai(t) {
    qi = t;
    const r = o("movementFields"), s = o("restFields");
    r.hidden = t !== "movement", s.hidden = t !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), Aa();
  }
  function kn() {
    Ze[bt];
    const t = ke ? !0 : o("useGlobalTiming").checked, r = t ? Number(T.value) : la(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), s = ke ? !0 : o("useGlobalRestTiming").checked, p = s ? Number(I.value) : la(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (qi === "rest") {
      const g = o("addRestTitle").value.trim() || "Rest", C = o("addRestGroup").value.trim() || "Rest";
      Je.push({
        id: "rest-" + Date.now(),
        name: g,
        group: C,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, p || Number(I.value))
      }), kt(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", Gt("Rest added"), ke && (P("movements"), re());
    } else {
      const g = o("addMovementInput").value.trim();
      if (!g) return;
      const C = o("addMovementGroup").value.trim() || "Movement";
      Je.push({
        id: "movement-" + Date.now(),
        name: g,
        group: C,
        kind: "work",
        hidden: !1,
        useGlobalTiming: t,
        duration: Math.max(5, r || Number(T.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", kt(), o("movementCreator").hidden = !0, Gt("Movement added"), ke && (P("movements"), re());
    }
    Ua();
  }
  let rs = null;
  function Gt(t, r) {
    const s = o("toast");
    s.innerHTML = "";
    const p = document.createElement("span");
    if (p.textContent = t, s.appendChild(p), r) {
      const g = document.createElement("button");
      g.type = "button", g.className = "toastAction", g.textContent = r.label, g.addEventListener("click", () => {
        r.run(), s.classList.remove("show", "withAction"), clearTimeout(rs);
      }), s.appendChild(g);
    }
    s.classList.toggle("withAction", !!r), s.classList.add("show"), clearTimeout(rs), rs = setTimeout(() => s.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const Zs = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Ks = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function $s(t) {
    return Math.max(0, Math.min(5, Math.floor(Number(t) / 100 * 6)));
  }
  function oi(t, r) {
    return Zs[$s(r)];
  }
  function Gl(t) {
    return Ks[$s(t)];
  }
  function It(t) {
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  function Ya() {
    return { morning: pt().morningTime || "08:00", evening: pt().eveningTime || "19:00" };
  }
  function ii(t) {
    const [r, s] = String(t).split(":").map(Number);
    return (r || 0) * 60 + (s || 0);
  }
  function zi(t) {
    const r = Ya();
    return t.getHours() * 60 + t.getMinutes() >= ii(r.evening) ? "evening" : "morning";
  }
  function Pn(t, r) {
    return lt.checkins.find((s) => s.date === t && s.slot === r);
  }
  function Mr(t) {
    return !!(t && t.mood != null && t.energy != null);
  }
  function ji() {
    const t = /* @__PURE__ */ new Date(), r = It(t), s = zi(t), p = Ya(), g = t.getHours() * 60 + t.getMinutes();
    return s === "morning" && g < ii(p.morning) || Mr(Pn(r, s)) ? null : s;
  }
  const Za = o("checkinModal"), xa = o("checkinTab"), Ul = o("checkinBadge"), lo = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function Sr(t) {
    const { input: r, fill: s } = lo[t];
    s.style.width = r.value + "%", r.setAttribute("aria-valuetext", oi(t, r.value));
  }
  Object.keys(lo).forEach((t) => lo[t].input.addEventListener("input", () => Sr(t)));
  let ka = null;
  function Xs() {
    const t = Ya(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes();
    return s < ii(t.morning) ? "Next check-in at " + t.morning : s < ii(t.evening) ? "Next check-in at " + t.evening : "Next check-in tomorrow at " + t.morning;
  }
  function Yl() {
    const t = Ya(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes(), p = (g, C) => {
      const [B, q] = g.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (C ? 1 : 0), B, q);
    };
    return s < ii(t.morning) ? { date: p(t.morning), time: t.morning } : s < ii(t.evening) ? { date: p(t.evening), time: t.evening } : { date: p(t.morning, !0), time: t.morning };
  }
  let ss = null, Vi = null;
  function Js() {
    if (ji()) {
      Cr(), Ma();
      return;
    }
    const t = Yl(), r = Math.max(0, Math.round((t.date - Date.now()) / 1e3)), s = Math.floor(r / 3600), p = Math.floor(r % 3600 / 60), g = r % 60;
    o("peekCountdown").textContent = s + ":" + String(p).padStart(2, "0") + ":" + String(g).padStart(2, "0"), o("peekAt").textContent = "Available at " + t.time;
  }
  function Qs() {
    Js(), xa.classList.add("peek"), clearInterval(Vi), Vi = setInterval(Js, 1e3), clearTimeout(ss), ss = setTimeout(Cr, 6e3);
  }
  function Cr() {
    xa.classList.remove("peek"), clearInterval(Vi), clearTimeout(ss);
  }
  function ls() {
    const t = ji();
    if (!t) {
      xa.classList.contains("peek") ? Cr() : Qs();
      return;
    }
    ka = { date: It(/* @__PURE__ */ new Date()), slot: t };
    const s = Pn(ka.date, t), p = lt.checkins.find((g) => Mr(g));
    Object.keys(lo).forEach((g) => {
      lo[g].input.value = (s == null ? void 0 : s[g]) ?? (p == null ? void 0 : p[g]) ?? 50, Sr(g);
    }), o("checkinTitle").textContent = t === "morning" ? "Morning check-in" : "Evening check-in", Za.classList.add("open"), Za.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => lo.mood.input.focus());
  }
  function Gi() {
    Za.classList.remove("open"), Za.setAttribute("aria-hidden", "true"), ka && (Ui = ka.date + "-" + ka.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Ui);
    } catch {
    }
    ka = null, Ma();
  }
  function el() {
    if (!ka) return;
    if (Mr(Pn(ka.date, ka.slot))) {
      Gi();
      return;
    }
    const { date: t, slot: r } = ka;
    let s = Pn(t, r);
    s || (s = { date: t, slot: r }, lt.checkins.unshift(s), lt.checkins = lt.checkins.slice(0, 2e3)), s.mood = Number(lo.mood.input.value), s.energy = Number(lo.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), Ln(), l.fire("checkin", { slot: r, mood: s.mood, energy: s.energy, mood_label: oi("mood", s.mood), energy_label: oi("energy", s.energy) }), Gt((r === "morning" ? "Morning" : "Evening") + " check-in saved"), Gi(), ri(), si(), eo(), Ca();
  }
  let Ui = "";
  try {
    Ui = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Ma() {
    const t = ji();
    Ul.hidden = !t, xa.hidden = !t, t || Cr(), xa.classList.toggle("due", !!t), xa.setAttribute("aria-label", t ? (t === "morning" ? "Morning" : "Evening") + " check-in is due" : Xs()), xa.title = t ? "Check in now" : Xs();
  }
  function Yi() {
    Ma();
    const t = ji();
    !t || Za.classList.contains("open") || pt().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !Ie.home.classList.contains("active") || In.classList.contains("open") || Ui !== It(/* @__PURE__ */ new Date()) + "-" + t && ls());
  }
  xa.addEventListener("click", ls), o("checkinLater").addEventListener("click", Gi), o("checkinSave").addEventListener("click", el), Za.addEventListener("click", (t) => {
    t.target === Za && Gi();
  }), Za.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Gi());
  }), setInterval(Yi, 3e4);
  function ri() {
    const t = It(/* @__PURE__ */ new Date()), r = (s) => lt.checkins.find((p) => p.date === t && p[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, p]) => {
      const g = r(s);
      o(p).textContent = g ? oi(s, g[s]) : "—";
    });
  }
  function si() {
    const t = o("feelCard");
    if (!t) return;
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), p = [...Array(7)].map((he, oe) => {
      const te = new Date(s.getFullYear(), s.getMonth(), s.getDate() + oe), Ee = It(te), Qe = lt.checkins.filter((_e) => _e.date === Ee), We = (_e) => {
        const Me = Qe.map((ht) => ht[_e]).filter((ht) => ht != null);
        return Me.length ? Me.reduce((ht, gt) => ht + gt, 0) / Me.length : null;
      };
      return { d: te, key: Ee, mood: We("mood"), energy: We("energy"), count: Qe.filter(Mr).length, future: te > r && Ee !== It(r) };
    }), g = (he) => {
      const oe = p.map((te) => te[he]).filter((te) => te != null);
      return oe.length ? oe.reduce((te, Ee) => te + Ee, 0) / oe.length : null;
    }, C = g("mood"), B = g("energy"), q = (he, oe) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + he + "</span><span>" + (oe == null ? "—" : Oe(oi("", oe))) + '</span></div><div class="feelTrack"><span style="width:' + (oe == null ? 0 : Math.max(4, oe)) + "%;background:" + (oe == null ? "transparent" : Gl(oe)) + '"></span></div></div>', ae = p.filter((he) => he.mood != null && he.energy != null).sort((he, oe) => oe.mood + oe.energy - (he.mood + he.energy))[0];
    t.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (C == null ? "No check-ins yet" : Oe(oi("", (C + B) / 2))) + '</div><div class="weekCopy">' + (C == null ? "Your first check-in will appear here." : "on average this week" + (ae ? " · best day " + Oe(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(ae.d)) : "")) + '</div></div></div><div class="feelDays">' + p.map(
      (he) => '<div class="weekChip feelDay' + (he.future ? " future" : "") + (he.key === It(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Oe(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(he.d)) + "</strong>" + (he.count >= 2 ? '<span class="weekTick">' + Bn("check") + "</span>" : '<span class="feelDots">' + "●".repeat(he.count) + "</span>") + "</div>" + q("Mood", he.mood) + q("Energy", he.energy) + "</div>"
    ).join("") + "</div>";
  }
  const li = o("upcomingCountSetting");
  li.addEventListener("change", () => {
    qa = li.value === "all" ? "all" : Number(li.value), Nr();
  });
  const Zi = o("tempoRevealBtn"), ds = o("tempoExperiment"), _a = o("tempoQuad"), di = o("tempoDot"), Zl = o("tempoEstimate"), Ki = o("tempoReadout");
  let Ao = { x: 0.5, y: 0.5 }, $i = !1, Tr = { total: 20, work: 45, rest: 15 };
  function co(t, r, s, p) {
    const g = Math.max(r, Math.min(s, t));
    return Math.round((g - r) / p) * p + r;
  }
  function tl(t, r) {
    const s = (t - 0.5) * 2, p = (r - 0.5) * 2, g = co(
      Tr.total + s * 5 + p * 8,
      Number(_.min),
      Number(_.max),
      Number(_.step)
    ), C = co(
      Tr.work + s * 10 + p * 8,
      Number(T.min),
      Number(T.max),
      Number(T.step)
    ), B = co(
      Tr.rest + s * 6 + p * 6,
      Number(I.min),
      Number(I.max),
      Number(I.step)
    );
    return _.value = g, T.value = C, I.value = B, z.textContent = C + " sec", le.textContent = B + " sec", Gn(), { total: g, work: C, rest: B };
  }
  function Lr(t, r) {
    const s = t < 0.34 ? "Low" : t > 0.66 ? "Hard" : "Medium", p = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", g = tl(t, r);
    Ki.textContent = s + " + " + p, Zl.textContent = g.total + " min", _a.setAttribute("aria-valuetext", s + " and " + p + ", estimated " + g.total + " minutes");
  }
  function Ar(t) {
    const r = _a.getBoundingClientRect(), s = Math.max(0, Math.min(1, (t.clientX - r.left) / r.width)), p = Math.max(0, Math.min(1, (t.clientY - r.top) / r.height));
    Ao = { x: s, y: p }, di.style.left = s * 100 + "%", di.style.top = p * 100 + "%", Lr(s, p);
  }
  Zi.addEventListener("click", () => {
    const t = ds.hidden;
    ds.hidden = !t, Zi.setAttribute("aria-expanded", t ? "true" : "false"), Zi.textContent = t ? "Now close this" : "Don’t try this!", t && (Tr = {
      total: Number(_.value),
      work: Number(T.value),
      rest: Number(I.value)
    }, Ao = { x: 0.5, y: 0.5 }, di.style.left = "50%", di.style.top = "50%", Lr(Ao.x, Ao.y));
  }), a.querySelectorAll("[data-feedback-rating]").forEach((t) => t.addEventListener("click", () => {
    Number(t.dataset.feedbackRating), a.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === t));
  }));
  const Xi = o("testingFeedbackForm"), cs = o("testingFeedbackThanks"), Kl = o("testingFeedbackAgain");
  Xi.addEventListener("submit", (t) => {
    t.preventDefault(), Xi.hidden = !0, cs.hidden = !1, Gt("Feedback captured for prototype");
  }), Kl.addEventListener("click", (t) => {
    t.preventDefault(), Xi.reset(), a.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), cs.hidden = !0, Xi.hidden = !1;
  }), _a.addEventListener("pointerdown", (t) => {
    var r;
    $i = !0, Ar(t);
    try {
      (r = _a.setPointerCapture) == null || r.call(_a, t.pointerId);
    } catch {
    }
  }), _a.addEventListener("pointermove", (t) => {
    $i && Ar(t);
  }), _a.addEventListener("pointerup", (t) => {
    $i && ($i = !1, Ar(t), kt());
  }), _a.addEventListener("pointercancel", () => $i = !1), _a.addEventListener("keydown", (t) => {
    let { x: r, y: s } = Ao, p = !0;
    t.key === "ArrowLeft" ? r -= 0.05 : t.key === "ArrowRight" ? r += 0.05 : t.key === "ArrowUp" ? s -= 0.05 : t.key === "ArrowDown" ? s += 0.05 : p = !1, p && (t.preventDefault(), r = Math.max(0, Math.min(1, r)), s = Math.max(0, Math.min(1, s)), Ao = { x: r, y: s }, di.style.left = r * 100 + "%", di.style.top = s * 100 + "%", Lr(r, s), kt());
  });
  const In = o("workoutModal");
  let Ji = null;
  function ci(t) {
    return t.map((r) => ({ ...r }));
  }
  function _r() {
    const t = Ze[bt];
    return {
      key: bt,
      profile: t ? JSON.parse(JSON.stringify(t)) : null,
      warmup: ci(Lt),
      strength: ci(Je),
      cooldown: ci(Dn),
      total: Number(_.value),
      work: Number(T.value),
      rest: Number(I.value),
      rounds: Number(st.value) || 1
    };
  }
  function ps(t = !1) {
    ke = !!t, Bt = null, on = null, Te(), ft(), Ji = _r(), o("moveEditorTitle").textContent = ke ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !ke, o("warmupRow").hidden = ke, o("deleteMoveOpen").hidden = ke;
    const r = o("createMoveOptions");
    r.hidden = !ke;
    {
      const s = Ze[bt];
      o("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), o("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (fs(), ke) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const s = Ze[bt];
      Qo((s == null ? void 0 : s.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, ai("movement"), Ua(), Aa(), ds.hidden = !0, Zi.setAttribute("aria-expanded", "false"), Zi.textContent = "Don’t try this!", In.classList.toggle("createMode", ke), In.querySelector(".modal").classList.toggle("createMode", ke), In.classList.add("open"), In.setAttribute("aria-hidden", "false"), dn(), ke && Ae();
  }
  function us() {
    const t = Ze[bt];
    return t != null && t.customSequence ? !!t.includeWarmup : !(t != null && t.warmupOff);
  }
  function fs() {
    const t = us(), r = o("warmupSwitch");
    r.classList.toggle("on", t), r.setAttribute("aria-checked", String(t));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const t = Ze[bt];
    t && (t.customSequence ? (o("includeWarmupPreset").checked = !t.includeWarmup, Ii()) : (t.warmupOff = !t.warmupOff, kt()), fs());
  });
  function Qi() {
    Te(), ft(), Xn(), on = null, Bt = null, In.classList.contains("createMode") && H(), In.classList.remove("createMode"), In.querySelector(".modal").classList.remove("createMode"), In.classList.remove("open"), In.setAttribute("aria-hidden", "true");
  }
  function nl() {
    if (!Ji) return;
    const t = Ji;
    t.profile && (Ze[t.key] = JSON.parse(JSON.stringify(t.profile))), bt = t.key, Lt = ci(t.warmup), Je = ci(t.strength), Dn = ci(t.cooldown), _.value = t.total, T.value = t.work, I.value = t.rest, st.value = t.rounds || 1;
    const r = Ze[bt];
    if (r) {
      a.querySelectorAll(".workoutPanel[data-workout]").forEach((p) => p.classList.toggle("active", p.dataset.workout === bt));
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const p = s.querySelector(".workoutName");
        p && (p.textContent = r.name);
        const g = s.querySelector(".panelCollapsedText");
        g && (g.textContent = r.name);
        const C = s.querySelector(".sourceTag");
        C && (C.textContent = r.source);
      }
      h.value = r.name;
    }
    kt();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (ke) {
      const t = bt;
      delete Ze[t], ke = !1, zt = null, qt(lt.order.find((r) => Ze[r]) || Object.keys(Ze)[0]);
    } else
      nl();
    Qi();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    Te(), Be && ya();
    const t = Ze[bt], r = h.value.trim() || "New move";
    if (t && (t.name = r), va(), Bt = null, kt(), ke && t)
      Wa(bt, t), a.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === bt)), ke = !1, zt = null, lt.order.includes(bt) || lt.order.push(bt), Gt("Move created");
    else {
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const p = s.querySelector(".workoutName");
        p && (p.textContent = r);
        const g = s.querySelector(".panelCollapsedText");
        g && (g.textContent = r);
      }
      Gt("Move saved");
    }
    Ji = null, Qi(), Ln();
  }), In.addEventListener("click", (t) => {
    if (t.target === In) {
      if (ke) {
        const r = bt;
        delete Ze[r], ke = !1, zt = null, qt(lt.order.find((s) => Ze[s]) || Object.keys(Ze)[0]);
      } else
        nl();
      Qi();
    }
  }), de(o("addMovementBtn"), "movement"), de(o("addRestBtn"), "rest"), de(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", Aa), o("useGlobalRestTiming").addEventListener("change", Aa), a.querySelectorAll(".createPresetBtn").forEach((t) => t.addEventListener("click", () => {
    Qo(t.dataset.movePreset, !0), kt();
  })), o("includeWarmupPreset").addEventListener("change", Ii), o("includeCooldownPreset").addEventListener("change", Ii), o("includeWarmupPreset").addEventListener("change", re), o("includeCooldownPreset").addEventListener("change", re), h.addEventListener("input", re), h.addEventListener("input", Pe), o("confirmAddMovement").addEventListener("click", kn), o("confirmAddRest").addEventListener("click", kn), o("addMovementInput").addEventListener("keydown", (t) => {
    t.key === "Enter" && kn();
  });
  const er = o("countdown"), Er = o("countNum"), Ka = o("countdownPixelCanvas");
  let po = null, Xt = "appear";
  class $l {
    constructor(r, s, p, g, C, B, q) {
      this.width = r.width, this.height = r.height, this.ctx = s, this.x = p, this.y = g, this.color = C, this.speed = (Math.random() * 0.8 + 0.1) * B, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = q, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let hs = [], al = 1, uo = 1;
  function _o() {
    const t = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(t) && t > 0 ? t : 1;
  }
  function Xl() {
    var he;
    if (!Ka) return;
    const t = _o(), r = Math.max(1, window.innerWidth / t), s = Math.max(1, window.innerHeight / t);
    al = r, uo = s;
    const p = Math.min(window.devicePixelRatio || 1, 2);
    Ka.width = Math.floor(r * p), Ka.height = Math.floor(s * p), Ka.style.width = r + "px", Ka.style.height = s + "px";
    const g = Ka.getContext("2d");
    g.setTransform(p, 0, 0, p, 0, 0);
    const C = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], B = 12, q = (he = window.matchMedia) == null ? void 0 : he.call(window, "(prefers-reduced-motion: reduce)").matches, ae = q ? 0 : 0.055;
    hs = [];
    for (let oe = 0; oe < r; oe += B)
      for (let te = 0; te < s; te += B) {
        const Ee = oe - r / 2, Qe = te - s / 2, We = Math.sqrt(Ee * Ee + Qe * Qe), _e = q ? 0 : Math.random() * 75 + We * 0.05, Me = new $l({ width: r, height: s }, g, oe, te, C[Math.floor(Math.random() * C.length)], ae, _e);
        Me.maxSizeInteger = 4, Me.maxSize = Math.random() * 3.2 + 0.8, Me.sizeStep = 0.35 + Math.random() * 0.45, hs.push(Me);
      }
  }
  function ol(t) {
    cancelAnimationFrame(po), Xt = t;
    const r = Ka == null ? void 0 : Ka.getContext("2d");
    if (!r) return;
    function s() {
      r.clearRect(0, 0, al, uo);
      let p = !0;
      hs.forEach((g) => {
        g[Xt](), g.isIdle || (p = !1);
      }), Xt === "disappear" && p || (po = requestAnimationFrame(s));
    }
    po = requestAnimationFrame(s);
  }
  function tr() {
    cancelAnimationFrame(po), Xl(), ol("appear"), setTimeout(() => ol("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    er.classList.contains("active") && tr();
  });
  const Eo = o("pixelTrailCanvas"), pi = Eo.getContext("2d");
  let Ea = !0, Da = 0.7, ui = 600, nr = [], fi = null, Mn = { x: 0, y: 0, ready: !1 };
  function il() {
    const t = c.getBoundingClientRect(), r = _o(), s = Math.min(window.devicePixelRatio || 1, 2), p = Math.max(1, t.width / r), g = Math.max(1, t.height / r);
    Eo.width = Math.max(1, Math.floor(p * s)), Eo.height = Math.max(1, Math.floor(g * s)), Eo.style.width = p + "px", Eo.style.height = g + "px", pi.setTransform(s, 0, 0, s, 0, 0);
  }
  function Jl(t, r) {
    if (!Ea) return;
    const s = performance.now();
    Mn.ready || (Mn = { x: t, y: r, ready: !0 });
    const p = 7;
    for (let g = 1; g <= p; g++) {
      const C = g / p;
      nr.push({
        x: Mn.x + (t - Mn.x) * C,
        y: Mn.y + (r - Mn.y) * C,
        born: s - (p - g) * 10
      });
    }
    Mn = { x: t, y: r, ready: !0 };
  }
  function An(t) {
    if (fi = null, !v) return;
    if (!Ie.workout.classList.contains("active")) {
      fi = requestAnimationFrame(An);
      return;
    }
    const r = c.getBoundingClientRect(), s = _o();
    pi.clearRect(0, 0, r.width / s, r.height / s), Ea && (nr = nr.filter((g) => t - g.born < ui), pi.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", nr.forEach((g) => {
      const C = (t - g.born) / ui, B = (1 - C) * Da, q = Math.round(g.x / 14) * 14, ae = Math.round(g.y / 14) * 14;
      pi.globalAlpha = Math.max(0, B);
      const he = 2 + 5 * (1 - C) * Da;
      pi.fillRect(q - he / 2, ae - he / 2, he, he);
    }), pi.globalAlpha = 1), fi = requestAnimationFrame(An);
  }
  c.addEventListener("pointermove", (t) => {
    const r = c.getBoundingClientRect(), s = _o();
    Jl((t.clientX - r.left) / s, (t.clientY - r.top) / s);
  }), c.addEventListener("pointerleave", () => Mn.ready = !1), new ResizeObserver(il).observe(c), il(), fi = requestAnimationFrame(An);
  const wt = o("movementRippleCanvas"), Hn = wt.getContext("2d");
  let $a = !0, pa = null, Dr = performance.now();
  function Xa() {
    const t = wt.parentElement.getBoundingClientRect(), r = _o(), s = Math.max(1, t.width / r), p = Math.max(1, t.height / r), g = Math.min(window.devicePixelRatio || 1, 2);
    wt.width = Math.max(1, Math.floor(s * g)), wt.height = Math.max(1, Math.floor(p * g)), wt.style.width = s + "px", wt.style.height = p + "px", Hn.setTransform(g, 0, 0, g, 0, 0);
  }
  function Do() {
    var t;
    return ln || ((t = Ge[ot]) == null ? void 0 : t.kind) === "rest";
  }
  function Bo() {
    const t = Ge[ot];
    return Do() ? 2200 : t ? t.kind === "warmup" || t.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Ft(t) {
    if (pa = null, !v) return;
    if (!Ie.workout.classList.contains("active")) {
      pa = requestAnimationFrame(Ft);
      return;
    }
    const r = wt.parentElement.getBoundingClientRect(), s = _o(), p = Math.max(1, r.width / s), g = Math.max(1, r.height / s);
    if (Hn.clearRect(0, 0, p, g), $a) {
      const C = Bo(), B = (t - Dr) % C / C, q = 15, ae = Math.max(8, Math.round(q * g / Math.max(1, p))), he = p / (q + 1), oe = g / (ae + 1), te = p * 0.5, Ee = g * 0.52, Qe = Math.hypot(te, Ee), _e = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let Me = 1; Me <= ae; Me++)
        for (let ht = 1; ht <= q; ht++) {
          const gt = ht * he, ze = Me * oe, vt = Math.hypot(gt - te, ze - Ee) / Qe, Et = Do(), rt = Et ? Math.exp(-Math.pow((vt - (B * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, at = Math.exp(-Math.pow((vt - B * 1.25) * 7, 2)), pn = Et ? rt : at, En = Et ? 0.5 + 0.5 * Math.sin(B * Math.PI * 2 - vt * 3) ** 2 : 0.35 + 0.65 * Math.sin(B * Math.PI * 2 - vt * 5) ** 2, Zt = Et ? 1.4 + pn * 4.2 * En : 1.2 + pn * 5 * En;
          Hn.beginPath(), Hn.arc(gt, ze, Zt, 0, Math.PI * 2), Hn.fillStyle = `rgba(${_e},${Et ? 0.08 + pn * 0.48 : 0.05 + pn * 0.55})`, Hn.fill();
        }
    }
    pa = requestAnimationFrame(Ft);
  }
  new ResizeObserver(Xa).observe(wt.parentElement), Xa(), pa = requestAnimationFrame(Ft);
  const fo = o("exerciseTitle"), Jn = o("exerciseMeta"), Br = o("stepLabel"), Rr = o("digits"), ms = o("fill"), hi = o("progress"), ar = o("pause"), Ql = o("nextName"), rl = o("nextMeta"), mi = o("nextIcon"), Sn = o("skipNextSession");
  let _n = null;
  function Yn(t) {
    for (let r = Math.max(0, t); r < Ge.length; r++)
      if (!Ge[r].sessionHidden) return r;
    return -1;
  }
  function sl() {
    const t = Ge[ot];
    if (!t) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (ln) {
      const p = Yn(ot + 1), g = p >= 0 ? Ge[p] : null;
      return g ? { name: g.name, meta: vs(g), icon: or(g) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (t.rest > 0) return { name: "Rest", meta: t.rest + " sec · " + (t.roundBreakAfter ? "round " + (t.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = Yn(ot + 1), s = r >= 0 ? Ge[r] : null;
    return s ? { name: s.name, meta: vs(s), icon: or(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function gs() {
    if (!Ge[ot]) return Ge.length;
    const r = Yn(ot + 1);
    return r < 0 ? Ge.length : r + 1;
  }
  function or(t) {
    return t.kind === "video" ? "play" : "clock";
  }
  function vs(t) {
    return t.kind === "video" ? "YouTube · " + ro(t.duration) : t.group + " · " + t.duration + " sec";
  }
  function ua() {
    return Ge.length && Ge[Ge.length - 1].round || 1;
  }
  function ho(t) {
    const r = Ge[t];
    if (!r) return "";
    const s = ua();
    if (s <= 1) return "Step " + (t + 1) + " of " + Ge.length;
    if (r.roundBreak) return "Round " + r.round + " of " + s + " · Rest";
    const p = Ge.filter((g) => g.round === r.round && !g.roundBreak).length;
    return "Round " + r.round + " of " + s + " · Step " + (r.roundIndex + 1) + " of " + p;
  }
  function ll() {
    return hi.querySelector('[data-step="' + ot + '"]');
  }
  function dl() {
    Ge[ot] && Number(hi.dataset.round) !== (Ge[ot].round || 1) && rr(), [...hi.children].forEach((t) => {
      const r = Number(t.dataset.step);
      t.classList.toggle("done", r < ot), t.classList.toggle("active", r === ot), t.classList.toggle("rewindable", r <= ot), t.disabled = r > ot, r === ot && t.style.setProperty("--segment-progress", "0%");
    }), Ge[ot] && (Br.textContent = ho(ot), Io());
  }
  function bs(t) {
    const r = Ge.indexOf(t);
    r < 0 || r <= ot || (t.sessionHidden = !t.sessionHidden, mo(), Gt((t.sessionHidden ? "Hidden " : "Included ") + t.name + " for this session"));
  }
  function Nr() {
    const t = o("upcomingList");
    if (!t) return;
    t.innerHTML = "";
    const r = gs(), s = Ge.slice(r);
    (qa === "all" ? s : s.slice(0, Math.max(1, Number(qa) || 1))).forEach((g) => {
      const C = document.createElement("section");
      C.className = "upcomingCard" + (g.sessionHidden ? " sessionHidden" : "") + (lr(g) ? " noMeta" : ""), C.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Bn(or(g)) + '</div><div><div class="upcomingName">' + Oe(g.name) + '</div><div class="upcomingMeta">' + Oe(vs(g)) + (ua() > 1 ? " · round " + g.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (g.sessionHidden ? "Include this session" : "Skip this session") + "</button>", C.querySelector(".skipSessionBtn").addEventListener("click", () => bs(g)), t.appendChild(C);
    });
  }
  function mo() {
    var r;
    const t = sl();
    Ql.textContent = t.name, rl.textContent = t.meta, mi.innerHTML = Bn(t.icon);
    {
      const s = ln ? Ge[Yn(ot + 1)] : ((r = Ge[ot]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : Ge[Yn(ot + 1)];
      a.querySelector(".nextCard").classList.toggle("noMeta", !!(s && lr(s)));
    }
    if (_n = null, ln) {
      const s = Yn(ot + 1);
      s >= 0 && (_n = Ge[s]);
    } else {
      const s = Ge[ot];
      if (s && s.rest > 0)
        _n = null;
      else {
        const p = Yn(ot + 1);
        p >= 0 && (_n = Ge[p]);
      }
    }
    Sn && (Sn.hidden = !_n, Sn.textContent = _n != null && _n.sessionHidden ? "Include this session" : "Skip this session"), Nr();
  }
  Sn.addEventListener("click", () => {
    _n && (_n.sessionHidden = !_n.sessionHidden, Gt((_n.sessionHidden ? "Hidden " : "Included ") + _n.name + " for this session"), mo());
  });
  let Ba = null, ws = null;
  function Ro(t, r = {}) {
    const s = Ze[bt];
    l.fire(t, { move: (s == null ? void 0 : s.name) || "", move_id: bt, ...r });
  }
  function Sa() {
    const t = Ze[bt];
    Ba = { key: bt, name: (t == null ? void 0 : t.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(ws), ws = setInterval(() => {
      Ba && !Vn && Ba.active++;
    }, 1e3), Ro("started", { steps: Ge.length });
  }
  function cl(t) {
    if (clearInterval(ws), !Ba) return;
    const r = Ba;
    Ba = null, Ro(t ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (lt.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: t }), lt.history = lt.history.slice(0, 1e3), Ln(), eo(), Ca());
  }
  let fa = null, hn = null, gi = !1;
  function Ra() {
    return pt().sounds !== !1;
  }
  function No() {
    if (Ra())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), fa = fa || new (window.AudioContext || window.webkitAudioContext)(), fa.state === "suspended" && fa.resume();
      } catch {
        fa = null;
      }
  }
  function go(t, r, s, { to: p = t, vol: g = 0.25, type: C = "sine" } = {}) {
    const B = fa.currentTime + r, q = fa.createOscillator(), ae = fa.createGain();
    q.type = C, q.frequency.setValueAtTime(t, B), p !== t && q.frequency.exponentialRampToValueAtTime(p, B + s), ae.gain.setValueAtTime(1e-4, B), ae.gain.exponentialRampToValueAtTime(g, B + 0.01), ae.gain.exponentialRampToValueAtTime(1e-4, B + s), q.connect(ae).connect(fa.destination), q.start(B), q.stop(B + s + 0.02);
  }
  const ys = {
    tick: () => go(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      go(660, 0, 0.12, { type: "triangle", vol: 0.3 }), go(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => go(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      go(523, 0, 0.16, { type: "triangle" }), go(659, 0.16, 0.16, { type: "triangle" }), go(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function Ja(t) {
    if (!(!Ra() || !fa))
      try {
        fa.state === "suspended" && fa.resume(), ys[t]();
      } catch {
      }
  }
  function ir() {
    jt >= 1 && jt <= 3 && jt !== hn && (hn = jt, Ja("tick"));
  }
  function Pr() {
    No(), k("workout"), xs();
    const t = Yn(0);
    t >= 0 && Ge[t].kind === "video" && Ms(Ge[t]);
  }
  function vi() {
    Or(), cl(!1), clearInterval(tn), clearInterval(Jo), ln = !1, Na(!1), o("app").classList.remove("resting"), er.classList.remove("active"), k("home");
  }
  function xs() {
    er.classList.add("active");
    let t = 5;
    Er.textContent = t, Ja("tick"), requestAnimationFrame(tr), clearInterval(Jo), Jo = setInterval(() => {
      t--, t > 0 ? (Er.textContent = t, Ja("tick"), tr()) : (clearInterval(Jo), Er.textContent = "GO", Ja("move"), gi = !0, tr(), setTimeout(() => {
        er.classList.remove("active"), cancelAnimationFrame(po), Ir();
      }, 650));
    }, 1e3);
  }
  function rr() {
    var r;
    hi.innerHTML = "";
    const t = ((r = Ge[Math.max(0, ot)] || Ge[0]) == null ? void 0 : r.round) || 1;
    hi.dataset.round = t, Ge.forEach((s, p) => {
      if ((s.round || 1) !== t) return;
      const g = document.createElement("button");
      g.dataset.step = p, g.type = "button", g.className = "progressSegment", g.setAttribute("aria-label", "Go to " + s.name), g.addEventListener("click", () => {
        p <= ot && ks(p);
      }), hi.appendChild(g);
    });
  }
  function Na(t) {
    t = !!t;
    const r = Vn !== t;
    if (Vn = t, ar.textContent = t ? "Resume" : "Pause", o("app").classList.toggle("paused", t), Fn && Ct)
      try {
        t ? Ct.pauseVideo() : Ct.playVideo();
      } catch {
      }
    r && Ba && Ro(t ? "paused" : "resumed");
  }
  function ks(t) {
    t < 0 || t >= Ge.length || t > ot || (clearInterval(tn), ln = !1, o("app").classList.remove("resting"), ot = t, Na(!1), wi(), tn = setInterval(bo, 1e3));
  }
  function Ir() {
    if (ot = Yn(0), Na(!1), rr(), ot < 0) {
      fo.textContent = "No activities", Jn.textContent = "Open Edit and enable or add a movement", Jn.hidden = !1;
      return;
    }
    Sa(), wi(), clearInterval(tn), tn = setInterval(bo, 1e3);
  }
  const pl = o("videoStage"), bi = o("videoSound"), ed = 0, _t = 1, Pa = 2;
  let Ia = 0, Zn = null, rn = null, Ct = null, vo = null, Qa = 0, Hr = !1, Fn = null, Fr = null;
  function mn() {
    var t;
    return (t = window.YT) != null && t.Player ? Promise.resolve(window.YT) : Zn || (Zn = new Promise((r, s) => {
      const p = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          p == null || p();
        } catch {
        }
      };
      const g = setInterval(() => {
        var B;
        (B = window.YT) != null && B.Player && (clearInterval(g), clearTimeout(C), r(window.YT));
      }, 100), C = setTimeout(() => {
        clearInterval(g), Zn = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const B = document.createElement("script");
        B.src = "https://www.youtube.com/iframe_api", B.async = !0, B.onerror = () => {
          clearInterval(g), clearTimeout(C), Zn = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(B);
      }
    }), Zn);
  }
  function Po() {
    return rn || (rn = mn().then((t) => new Promise((r) => {
      const s = document.createElement("div");
      o("videoFrame").appendChild(s), Ct = new t.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(Ct), onStateChange: (p) => nd(p.data), onError: (p) => ul(p.data) }
      });
    })), rn.catch(() => {
      rn = null;
    }), rn);
  }
  function Ms(t) {
    !(t != null && t.videoId) || t.videoError || Po().then((r) => {
      Fn || vo === t.videoId || (vo = t.videoId, Qa = Number(t.start) || 0, Hr = !1, r.mute(), r.loadVideoById({ videoId: t.videoId, startSeconds: Qa }));
    }).catch(() => {
    });
  }
  function td() {
    const t = Yn(ot + 1);
    t >= 0 && Ge[t].kind === "video" && Ms(Ge[t]);
  }
  function nd(t) {
    if (!Fn) {
      t === _t && !Hr && (Hr = !0, Ct.pauseVideo(), Ct.seekTo(Qa, !0));
      return;
    }
    pl.classList.toggle("playing", t === _t), Ge[ot] === Fn && performance.now() > Ia && (t === _t && Vn ? Na(!1) : t === Pa && !Vn && Na(!0)), t === _t && Wr(Fn.videoId, Ct.getDuration()) && Ln(), t === ed && sr();
  }
  function ul(t) {
    const r = Fn;
    if (!r) {
      vo = null;
      return;
    }
    t === 101 || t === 150 ? (hl(r.videoId), Gt("That video can’t play outside YouTube, so it was skipped")) : Gt("The video couldn’t play, so it was skipped"), sr();
  }
  function fl(t) {
    if (o("app").classList.add("videoStep"), bi.hidden = !0, Fn = t, clearTimeout(Fr), !t.videoId) {
      Gt("This video step has no link yet, so it was skipped"), setTimeout(() => sr(), 0);
      return;
    }
    Po().then((r) => {
      if (Fn !== t) return;
      Ia = performance.now() + 1500;
      const s = Number(t.start) || 0;
      vo !== t.videoId ? (vo = t.videoId, Qa = s, r.loadVideoById({ videoId: t.videoId, startSeconds: s })) : (r.seekTo(s, !0), r.playVideo()), r.unMute(), Vn && r.pauseVideo(), Fr = setTimeout(() => {
        Fn !== t || Vn || (r.getPlayerState() !== _t ? (r.mute(), r.playVideo(), bi.hidden = !1) : r.isMuted() && (bi.hidden = !1));
      }, 1600);
    }).catch(() => {
      Fn === t && (Gt("YouTube didn’t load, so the video was skipped"), sr());
    });
  }
  function Ss() {
    if (!o("app").classList.contains("videoStep")) return;
    const t = a.querySelector(".workGrid"), r = a.querySelector(".sessionControlRow"), s = t.getBoundingClientRect().top, p = (r == null ? void 0 : r.offsetHeight) || 42, g = window.innerHeight - s - 16 - p - 84;
    t.style.setProperty("--theater-h", Math.max(240, Math.round(g)) + "px");
  }
  window.addEventListener("resize", Ss);
  function Or() {
    clearTimeout(Fr);
    const t = Fn;
    if (Fn = null, o("app").classList.remove("videoStep"), pl.classList.remove("playing"), bi.hidden = !0, t && Ct) {
      try {
        Ct.pauseVideo();
      } catch {
      }
      vo = null;
    }
  }
  function sr() {
    const t = Fn;
    !t || Ge[ot] !== t || (Or(), clearInterval(tn), Ho(), tn = setInterval(bo, 1e3));
  }
  bi.addEventListener("click", () => {
    Ct && (Ct.unMute(), Ct.playVideo()), bi.hidden = !0;
  });
  function ad(t) {
    var p;
    const r = Number(t.start) || 0;
    if (t.useVideoLength === !1) return r + (Number(t.duration) || 300);
    const s = Ct && Fn === t && Number((p = Ct.getDuration) == null ? void 0 : p.call(Ct)) || 0;
    return Number(t.end) || s || Number(t.videoDuration) || r + (Number(t.duration) || 300);
  }
  function On(t, r) {
    const s = Ze[bt];
    [Lt, Je, Dn, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((p) => (Array.isArray(p) ? p : []).forEach((g) => {
      g && g.kind === "video" && g.videoId === t && r(g);
    }));
  }
  function Wr(t, r) {
    r = Math.round(Number(r) || 0);
    let s = !1;
    return t && r > 0 && On(t, (p) => {
      p.videoDuration !== r && (p.videoDuration = r, s = !0);
    }), s;
  }
  function hl(t) {
    On(t, (r) => {
      r.videoError = "embed";
    }), Ln();
  }
  function ml(t) {
    const r = t.videoId;
    if (!r) return;
    const s = () => {
      In.classList.contains("open") ? Bt || kt() : (kt(), Ln());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((p) => p.ok ? p.json() : Promise.reject(p.status)).then((p) => {
      t.videoId === r && (t.videoTitle = p.title || "", t.autoName && p.title && (t.name = p.title), s());
    }).catch((p) => {
      t.videoId === r && p === 401 && (t.videoError = "embed", s());
    }), Cs(r).then((p) => {
      Wr(r, p) && s();
    }).catch((p) => {
      p === "embed" && t.videoId === r && (t.videoError = "embed", s());
    });
  }
  function Cs(t) {
    return mn().then((r) => new Promise((s, p) => {
      const g = document.createElement("div");
      g.className = "videoProbe", g.setAttribute("aria-hidden", "true");
      const C = document.createElement("div");
      g.appendChild(C), o("app").appendChild(g);
      let B = null, q = !1;
      const ae = (te, Ee) => {
        q || (q = !0, clearTimeout(he), setTimeout(() => {
          try {
            B == null || B.destroy();
          } catch {
          }
          g.remove();
        }, 0), Ee ? p(Ee) : s(te));
      }, he = setTimeout(() => ae(0), 2e4), oe = () => {
        var Ee;
        const te = Number((Ee = B == null ? void 0 : B.getDuration) == null ? void 0 : Ee.call(B)) || 0;
        return te > 0 && ae(te), te > 0;
      };
      B = new r.Player(C, {
        width: 320,
        height: 180,
        videoId: t,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            oe() || (B.mute(), B.playVideo());
          },
          onStateChange: () => oe(),
          onError: (te) => ae(0, te.data === 101 || te.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function wi() {
    ln = !1;
    const t = Ge[ot];
    o("app").classList.toggle("resting", t.kind === "rest"), t.kind === "video" ? fl(t) : Or(), jt = t.duration, So = t.duration, hn = null, gi ? gi = !1 : Ja(t.kind === "rest" ? "rest" : "move"), fo.textContent = t.name, Jn.textContent = t.group, Jn.hidden = !0, Br.textContent = ho(ot), Ba && Ro("step", { name: t.name, group: t.group, kind: t.kind, step: ot + 1, of: Ge.length, round: t.round || 1, rounds: ua(), duration: t.duration }), mo(), dl(), td(), t.kind === "video" && setTimeout(Ss, 0);
  }
  function Io() {
    var g;
    const t = ((g = Ge[ot]) == null ? void 0 : g.kind) === "video" && !ln, r = t && jt >= 60;
    Rr.textContent = r ? ro(jt) : jt, Rr.classList.toggle("long", r), t && (o("videoClock").textContent = ro(jt) + " left");
    const s = jt / So * 100;
    ms.style.width = s + "%";
    const p = ll();
    if (p && !ln) {
      const C = 100 - s;
      p.style.setProperty("--segment-progress", C + "%");
    }
  }
  function bo() {
    var r, s;
    if (Vn) return;
    const t = Ge[ot];
    if ((t == null ? void 0 : t.kind) === "video" && !ln && Fn === t) {
      const p = Number((r = Ct == null ? void 0 : Ct.getCurrentTime) == null ? void 0 : r.call(Ct)) || 0, g = Number(t.start) || 0, C = ad(t);
      So = Math.max(1, C - g), (p > g || ((s = Ct == null ? void 0 : Ct.getPlayerState) == null ? void 0 : s.call(Ct)) === _t) && (jt = Math.max(0, Math.ceil(C - p))), Io(), ir(), p > g && p >= C - 0.25 && sr();
      return;
    }
    jt--, Io(), ir(), jt <= 0 && (t.rest > 0 ? Ts(t.rest) : Ho());
  }
  function Ts(t) {
    var s;
    ln = !0, o("app").classList.add("resting");
    const r = ll();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(tn), jt = t, So = t, hn = null, Ja("rest"), Ba && Ro("rest", { duration: t }), fo.textContent = "Rest", Jn.textContent = (s = Ge[ot]) != null && s.roundBreakAfter ? "Round " + (Ge[ot].round + 1) + " next" : "Recovery", mo(), Io(), tn = setInterval(() => {
      Vn || (jt--, Io(), ir(), jt <= 0 && (clearInterval(tn), Ho(), tn = setInterval(bo, 1e3)));
    }, 1e3);
  }
  function Ho() {
    ln = !1;
    const t = Yn(ot + 1);
    if (t >= 0)
      ot = t, wi();
    else {
      clearInterval(tn), Or(), Na(!1), o("app").classList.remove("resting"), fo.textContent = "Complete", Jn.textContent = "Move finished", Jn.hidden = !1, Rr.textContent = "✓";
      {
        const r = ua();
        Br.textContent = r > 1 ? r + " rounds done" : Ge.filter((s) => !s.roundBreak).length + " steps done";
      }
      cl(!0), Ja("done");
      {
        const r = Ns(7).reduce((s, p) => s + p.minutes, 0);
        Jn.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      ms.style.width = "100%", mo();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    od(), Na(!1);
  });
  function od() {
    clearInterval(tn);
    const t = Ge[ot];
    if (ln) {
      ln = !1, o("app").classList.remove("resting");
      const s = Yn(ot + 1);
      s >= 0 ? (ot = s, wi(), tn = setInterval(bo, 1e3)) : Ho();
      return;
    }
    if (t && t.rest > 0) {
      Ts(t.rest);
      return;
    }
    const r = Yn(ot + 1);
    r >= 0 ? (ot = r, wi(), tn = setInterval(bo, 1e3)) : Ho();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(tn), Na(!1), ln) {
      const t = Ge[ot];
      jt = t.rest, So = t.rest, hn = null, Ja("rest"), fo.textContent = "Rest", Jn.textContent = "Recovery", o("app").classList.add("resting"), mo(), Io();
    } else
      wi();
    tn = setInterval(ln ? () => {
      Vn || (jt--, Io(), ir(), jt <= 0 && (clearInterval(tn), Ho(), tn = setInterval(bo, 1e3)));
    } : bo, 1e3);
  });
  function yi(t, r, s, p) {
    let g = 0, C = null, B = !1;
    function q() {
      C && cancelAnimationFrame(C), C = null, g = 0, B = !1, r.style.width = "0%", t.classList.remove("holding");
    }
    function ae(te) {
      if (!B) return;
      g || (g = te);
      const Ee = Math.min(1, (te - g) / s);
      if (r.style.width = Ee * 100 + "%", Ee >= 1) {
        B = !1, C && cancelAnimationFrame(C), C = null, r.style.width = "100%", setTimeout(() => r.style.width = "0%", 90), p();
        return;
      }
      C = requestAnimationFrame(ae);
    }
    function he(te) {
      var Ee;
      if (!(te && te.button !== void 0 && te.button !== 0)) {
        te == null || te.preventDefault(), q(), B = !0, t.classList.add("holding");
        try {
          (Ee = t.setPointerCapture) == null || Ee.call(t, te.pointerId);
        } catch {
        }
        C = requestAnimationFrame(ae);
      }
    }
    function oe() {
      B && q();
    }
    t.addEventListener("pointerdown", he), t.addEventListener("pointerup", oe), t.addEventListener("pointercancel", oe), t.addEventListener("lostpointercapture", oe), t.addEventListener("keydown", (te) => {
      (te.key === " " || te.key === "Enter") && !te.repeat && he(te);
    }), t.addEventListener("keyup", (te) => {
      (te.key === " " || te.key === "Enter") && oe();
    });
  }
  const gl = o("endWorkout");
  yi(gl, o("holdEndFill"), 1500, vi);
  const Fo = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    Fo.classList.add("open"), Fo.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    Fo.classList.remove("open"), Fo.setAttribute("aria-hidden", "true");
  });
  function vl() {
    const t = bt, r = a.querySelector('.workoutPanel[data-workout="' + t + '"]');
    r && r.remove(), delete Ze[t], lt.order = lt.order.filter((p) => p !== t);
    let s = a.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const p = "custom-" + Date.now();
      Ze[p] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, lt.order.push(p), s = Wa(p, Ze[p]);
    }
    Fo.classList.remove("open"), Fo.setAttribute("aria-hidden", "true"), Ji = null, Qi(), qt(s.dataset.workout), Ln(), Gt("Move deleted");
  }
  yi(o("deleteMoveYes"), o("deleteMoveFill"), 1500, vl);
  const Oo = a.querySelector(".rubberTabs"), xi = o("rubberIndicator");
  function Wo(t, r = !0) {
    if (!t || !Oo || !xi) return;
    const s = Oo.getBoundingClientRect(), p = t.getBoundingClientRect();
    xi.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const g = _o();
    xi.style.left = (p.left - s.left) / g + Oo.scrollLeft + "px", xi.style.width = p.width / g + "px", r && (xi.style.transform = "scaleX(1.08)", setTimeout(() => xi.style.transform = "scaleX(1)", 180));
  }
  a.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => {
    t.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), a.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), a.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), t.classList.add("active"), o(t.dataset.pane).classList.add("active"), Wo(t, !0);
  })), requestAnimationFrame(() => Wo(a.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Wo(a.querySelector(".tab.active"), !1));
  const Ls = o("pixelTrailToggle"), qr = o("rippleToggle"), Ha = o("trailStrength"), qo = o("trailLife");
  function sn(t, r) {
    pt()[t] = r, Ln();
  }
  const As = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function zr(t) {
    return t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "g:" + String(t.group || "").trim().toLowerCase();
  }
  function lr(t) {
    var r;
    return !!((r = pt().hideMeta) != null && r[zr(t)]);
  }
  function id() {
    const t = /* @__PURE__ */ new Map(), r = (s, p, g) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const C = zr(s);
      let B = t.get(C);
      B || (B = { key: C, label: C === "rest" ? "Rest" : C === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, t.set(C, B)), B.kinds.add(C === "rest" ? "Rest" : C === "video" ? "Video" : p), B.moves.add(g), B.count++;
    };
    return Object.values(Ze).forEach((s) => {
      const p = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Xe)).forEach((g) => r(g, "Warm-up", p)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((g) => r(g, g.presetRole === "warmup" ? "Warm-up" : g.presetRole === "cooldown" ? "Cooldown" : "Movement", p)), (s.cooldown || (s.customSequence ? [] : xn)).forEach((g) => r(g, "Cooldown", p));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, p]) => {
      t.has(s) || t.set(s, { key: s, label: p, kinds: /* @__PURE__ */ new Set([p]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...t.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, p) => As.indexOf(s.kind) - As.indexOf(p.kind) || s.label.localeCompare(p.label));
  }
  let cn = "all";
  function _s() {
    const t = o("metaSearch").value.trim().toLowerCase();
    return id().filter((r) => (cn === "all" || r.kind === cn) && (!t || r.label.toLowerCase().includes(t) || r.moves.some((s) => s.toLowerCase().includes(t))));
  }
  function ki() {
    const t = o("metaTableBody");
    if (!t) return;
    const r = pt().hideMeta || {}, s = _s();
    t.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((g) => {
      const C = !r[g.key], B = g.count ? (g.moves.length > 2 ? g.moves.slice(0, 2).join(", ") + " + " + (g.moves.length - 2) + " more" : g.moves.join(", ")) + " · " + g.count + " step" + (g.count === 1 ? "" : "s") : "Not used yet", q = document.createElement("tr");
      q.className = C ? "" : "off", q.innerHTML = '<td><div class="metaType">' + Oe(g.label) + '</div><div class="metaSub">' + Oe(g.kind + " · " + B) + '</div></td><td class="metaKindCol">' + Oe(g.kind) + '</td><td class="metaUsedCol">' + Oe(B) + '</td><td class="metaSwitchCol"><button class="switch' + (C ? " on" : "") + '" type="button" role="switch" aria-checked="' + C + '" aria-label="Second line for ' + Oe(g.label) + ' on phones"></button></td>', q.querySelector(".switch").addEventListener("click", () => Es([g.key], C)), t.appendChild(q);
    });
    const p = s.filter((g) => r[g.key]).length;
    o("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (p ? " · " + p + " hidden on phones" : "") : "";
  }
  function Es(t, r) {
    const s = { ...pt().hideMeta || {} };
    t.forEach((p) => {
      r ? s[p] = !0 : delete s[p];
    }), sn("hideMeta", s), ki(), ti(), mo();
  }
  o("metaSearch").addEventListener("input", ki), o("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.addEventListener("click", () => {
    cn = t.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === t)), ki();
  })), o("metaHideAll").addEventListener("click", () => Es(_s().map((t) => t.key), !0)), o("metaShowAll").addEventListener("click", () => Es(_s().map((t) => t.key), !1));
  const Mi = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...pt().toggles || {} };
  function bl() {
    a.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", Mi[s.dataset.toggle] !== !1)), a.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, p]) => {
      o(p).hidden = Mi[s] === !1;
    });
    const t = ["steps", "mood", "energyLevel"].some((s) => Mi[s] !== !1);
    a.querySelector(".activityCard").hidden = !t, o("weatherCard").hidden = !0;
    const r = a.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !t), r.classList.toggle("noWeather", !0);
  }
  a.querySelectorAll("[data-toggle]").forEach((t) => t.addEventListener("click", () => {
    Mi[t.dataset.toggle] = Mi[t.dataset.toggle] === !1, bl(), sn("toggles", { ...Mi });
  })), bl();
  function ut() {
    Ls.classList.toggle("on", Ea), qr.classList.toggle("on", $a), Ha.value = Math.round(Da * 100), o("trailStrengthValue").textContent = Ha.value + "%", qo.value = ui, o("trailLifeValue").textContent = qo.value + " ms";
  }
  pt().trailEnabled !== void 0 && (Ea = pt().trailEnabled), pt().rippleEnabled !== void 0 && ($a = pt().rippleEnabled), pt().trailStrength !== void 0 && (Da = pt().trailStrength), pt().trailMaxAge !== void 0 && (ui = pt().trailMaxAge), ut();
  const jr = o("soundsToggle");
  jr.classList.toggle("on", Ra()), jr.addEventListener("click", () => {
    sn("sounds", !Ra()), jr.classList.toggle("on", Ra()), Ra() && (No(), Ja("move"));
  }), Ls.addEventListener("click", () => {
    Ea = !Ea, Ls.classList.toggle("on", Ea), Ea || (nr = []), sn("trailEnabled", Ea);
  }), qr.addEventListener("click", () => {
    $a = !$a, qr.classList.toggle("on", $a), sn("rippleEnabled", $a);
  }), Ha.addEventListener("input", () => {
    Da = Number(Ha.value) / 100, o("trailStrengthValue").textContent = Ha.value + "%";
  }), Ha.addEventListener("change", () => sn("trailStrength", Da)), qo.addEventListener("input", () => {
    ui = Number(qo.value), o("trailLifeValue").textContent = qo.value + " ms";
  }), qo.addEventListener("change", () => sn("trailMaxAge", ui)), li.addEventListener("change", () => sn("upcomingCount", qa));
  function Si(t) {
    a.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === t));
    const r = t === "light";
    o("app").classList.toggle("light", r), l.setLight(r), ao(a);
  }
  Si(pt().theme || "dark"), a.querySelectorAll(".themeBtn").forEach((t) => t.addEventListener("click", () => {
    Si(t.dataset.theme), sn("theme", t.dataset.theme);
  }));
  const Wn = { steps: null, weather: null, ...pt().entities || {} };
  let Ut = null, Vr = {};
  function rd(t) {
    const r = Object.values(t).filter((q) => q.entity_id.startsWith("sensor.") || q.entity_id.startsWith("input_number.")), s = (q) => q.attributes.friendly_name || q.entity_id, p = r.filter((q) => /step/i.test(q.entity_id) || /step/i.test(s(q)) || ["steps", "step"].includes(String(q.attributes.unit_of_measurement || "").toLowerCase())), g = r.filter((q) => !p.includes(q)), C = (q, ae) => s(q).localeCompare(s(ae)), B = (q, ae) => /health_steps/.test(ae.entity_id) - /health_steps/.test(q.entity_id) || C(q, ae);
    return { suggested: p.sort(B), rest: g.sort(C), label: s };
  }
  function Ds(t) {
    const r = o("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: s, rest: p, label: g } = rd(t), C = (ae) => '<option value="' + Oe(ae.entity_id) + '">' + Oe(g(ae)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(C).join("") + "</optgroup>" : "") + (p.length ? '<optgroup label="All sensors">' + p.map(C).join("") + "</optgroup>" : ""), r.value = Wn.steps || "";
    const B = o("stepsStatus"), q = Wn.steps && t[Wn.steps];
    B.textContent = q ? "Connected · " + g(q) : B.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    Wn.steps = o("stepsEntity").value || null, sn("entities", { ...Wn }), Vr = {}, Rs(), Ut && (Ds(Ut), dr(Ut));
  });
  function Bs(t, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(t);
  }
  function Gr() {
    const t = Wn.steps && (Ut == null ? void 0 : Ut[Wn.steps]), r = Number(t == null ? void 0 : t.state);
    return Number.isFinite(r) ? r : null;
  }
  function dr(t) {
    var p;
    const r = Wn.steps, s = r ? Number((p = t[r]) == null ? void 0 : p.state) : NaN;
    o("stepsMeta").textContent = r ? Number.isFinite(s) ? Bs(s) : "—" : "Set up in Settings";
  }
  let Ur = 0;
  async function Rs() {
    const t = Wn.steps;
    if (!t || !l.ws) return;
    Ur = Date.now();
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const p = await l.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: r.toISOString(), statistic_ids: [t], period: "day", types: ["max"] }), g = (p == null ? void 0 : p[t]) || [], C = {};
      if (g.forEach((B) => {
        Number.isFinite(B.max) && (C[It(new Date(B.start))] = B.max);
      }), !Object.keys(C).length) {
        const B = await l.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: r.toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((B == null ? void 0 : B[t]) || []).forEach((q) => {
          const ae = Number(q.s ?? q.state), he = q.lu ? q.lu * 1e3 : Date.parse(q.last_updated || q.last_changed);
          if (!Number.isFinite(ae) || !he) return;
          const oe = It(new Date(he));
          C[oe] = Math.max(C[oe] || 0, ae);
        });
      }
      Vr = C, Ca();
    } catch {
    }
  }
  function eo() {
    Ca();
  }
  eo(), setInterval(() => {
    eo(), si(), Ma();
  }, 10 * 60 * 1e3);
  function Ns(t) {
    const r = {}, s = {};
    lt.history.forEach((B) => {
      const q = It(new Date(B.start));
      r[q] = (r[q] || 0) + (B.seconds || 0) / 60, s[q] = (s[q] || 0) + 1;
    });
    const p = /* @__PURE__ */ new Date(), g = It(p), C = [];
    for (let B = t - 1; B >= 0; B--) {
      const q = new Date(p.getFullYear(), p.getMonth(), p.getDate() - B), ae = It(q), he = lt.checkins.filter((te) => te.date === ae), oe = (te) => {
        const Ee = he.map((Qe) => Qe[te]).filter(Boolean);
        return Ee.length ? Ee.reduce((Qe, We) => Qe + We, 0) / Ee.length : null;
      };
      C.push({
        key: ae,
        date: q,
        minutes: Math.round(r[ae] || 0),
        moves: s[ae] || 0,
        steps: ae === g && Gr() != null ? Gr() : Vr[ae] ?? null,
        mood: oe("mood"),
        energy: oe("energy")
      });
    }
    return C;
  }
  function cr(t) {
    let r = t.length - 1;
    t[r] && !t[r].minutes && r--;
    let s = 0;
    for (; r >= 0 && t[r].minutes > 0; )
      s++, r--;
    return s;
  }
  function Ca() {
    const t = o("insightCard");
    if (!t) return;
    const r = Ns(30), s = cr(r), p = r.reduce((he, oe) => he + oe.minutes, 0), g = /* @__PURE__ */ new Date(), C = It(g), B = It(new Date(g.getFullYear(), g.getMonth(), g.getDate() - (g.getDay() + 6) % 7)), q = r.filter((he) => he.key >= B && he.key <= C).reduce((he, oe) => he + oe.minutes, 0), ae = (he, oe, te) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + he + '</div><div><div class="activityRowName">' + Oe(oe) + '</div><div class="activityRowMeta">' + Oe(te) + "</div></div></div>";
    t.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + Bn("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + ae(Bn("clock"), "This week", q + " min") + ae(Bn("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + ae(Bn("calendar"), "30 days", p + " min") + "</div>";
  }
  const pr = {
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
  }, wl = (t) => t === "sunny" ? "clear" : t === "clear-night" ? "night" : t === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(t) ? "rain" : ["snowy", "snowy-rainy"].includes(t) ? "snow" : "cloudy", to = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Ci = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Ps = 0;
  const Is = (t, r) => '<path class="' + r + '" d="' + t + '"/>', sd = (t, r) => ' style="animation-delay:-' + Math.round(t * 137 % r) + 'ms"', Qn = (t, r, s, p) => {
    const g = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + sd(t, 2400) + ' d="M' + t + " " + (r - s) + "L" + (t + g) + " " + (r - g) + "L" + (t + s) + " " + r + "L" + (t + g) + " " + (r + g) + "L" + t + " " + (r + s) + "L" + (t - g) + " " + (r + g) + "L" + (t - s) + " " + r + "L" + (t - g) + " " + (r - g) + 'Z"/>';
  }, yl = ([t, r, s], p) => '<path class="wxMoonPath" d="' + t + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + r + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', ld = (t, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', dd = (t) => (t ? ["29.35", "43.04", "56.74"].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), cd = (t) => (t ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, s], p) => '<circle class="wxFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + r + '" cy="' + s + '" r="' + (t ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Yr(t, r, s, p) {
    return t === "clear" ? r ? yl(s ? Ci.l : Ci.s, p) + (s ? Qn(70, 20, 5.83, 1) + Qn(78.33, 41.67, 3.75, 0.8) + Qn(60, 71.67, 3.33, 0.6) : Qn(42, 12, 3.5, 1) + Qn(47, 25, 2.25, 0.8) + Qn(36, 43, 2, 0.6)) : ld(p, s) : t === "partly" ? (r ? yl(s ? Ci.lp : Ci.sp, p) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Is(s ? to.lp : to.sp, r ? "wxCloudLight" : "wxBright") + (r ? s ? Qn(73.33, 16.67, 4.17, 0.9) : Qn(44, 10, 2.5, 0.9) : "") : t === "cloudy" ? Is(s ? to.lc : to.s, r ? "wxCloudLight" : "wxBright") + (r ? s ? Qn(15, 15, 3.75, 0.8) + Qn(76.67, 13.33, 2.92, 0.6) : Qn(9, 9, 2.25, 0.8) + Qn(46, 8, 1.75, 0.6) : "") : Is(s ? to.lr : to.s, "wxCloudLight") + (t === "rain" ? dd(s) : cd(s));
  }
  const xl = () => {
    var t;
    return ((t = Ut == null ? void 0 : Ut["sun.sun"]) == null ? void 0 : t.state) === "below_horizon";
  };
  let ea = pt().weatherStyle || "bitmap", Hs = pt().weatherLayout === "strip" ? "strip" : "tiles", Zr = pt().weatherMotion !== !1;
  const zo = () => Zr && !Rn(), no = /* @__PURE__ */ new Map(), Fs = 700, pd = (t) => {
    const [r, s] = t.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: s === "night" };
  };
  function ur(t, r, s, p = ea, g, C) {
    let B = wl(t);
    const q = B === "night" || (C != null ? !!C : !!s && xl());
    B === "night" && (B = "clear");
    const ae = r ? 90 : 54, he = Vl(t, q), oe = performance.now();
    let te = g ? no.get(g) : null;
    if (g && !te ? no.set(g, te = { key: he, t0: -1e9 }) : te && te.key !== he && (te.fromKey = te.key, te.from = te.last || null, te.key = he, te.t0 = oe), p !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + he + '"' + (g ? ' data-wx-slot="' + g + '"' : "") + ' data-wx-style="' + p + '" data-wx-size="' + ae + '"></canvas></span>';
    let Ee = "";
    if (te && oe - te.t0 < Fs && (zo() || Rn())) {
      const Qe = pd(te.fromKey);
      Ee = '<span class="wxLayer wxOut ' + Qe.k + (Qe.night ? " night" : "") + '" style="animation-delay:' + Math.round(te.t0 - oe) + 'ms"><svg viewBox="0 0 ' + ae + " " + ae + '">' + Yr(Qe.k, Qe.night, r, "wxg" + ++Ps) + "</svg></span>";
    }
    return '<span class="wxIcon ' + B + (q ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + ae + " " + ae + '">' + Yr(B, q, r, "wxg" + ++Ps) + "</svg>" + Ee + "</span>";
  }
  function fr() {
    const t = o("app"), r = getComputedStyle(t), s = (q) => r.getPropertyValue(q).trim(), p = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([q, ae]) => {
      s(ae) && (p[q] = s(ae));
    });
    const g = s("--color-text-primary") || "#f1f1f1", C = s("--color-bg-card") || "#222222", B = t.classList.contains("light");
    return { colors: p, ink: B ? g : C, paper: B ? C : g };
  }
  function ao(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const p = fr(), g = zo(), C = Rn();
    s.forEach((B) => {
      var te;
      const q = B.dataset.wx, ae = B.dataset.wxSlot ? no.get(B.dataset.wxSlot) : null;
      let he = qd(q, p.colors);
      if (ae && ae.key === q) {
        const Ee = (r - ae.t0) / Fs;
        Ee < 1 && (g || C) && (he = Zp(ae.from || qd(ae.fromKey, p.colors), he, Math.max(0, Ee), p.colors, C)), ae.last = he;
      }
      const oe = dp(he, { size: Number(B.dataset.wxSize) || 54, px: 2, oneBit: B.dataset.wxStyle === "onebit", colors: p.colors, ink: p.ink, paper: p.paper, clock: r, idle: g });
      B.width !== oe.w && (B.width = oe.w), B.height !== oe.h && (B.height = oe.h), (te = B.getContext("2d")) == null || te.putImageData(new ImageData(oe.data, oe.w, oe.h), 0, 0);
    });
  }
  let jo = null, Ti = -1;
  function Os(t) {
    if (jo = null, !v) return;
    const r = zo(), s = Math.floor(t / 100), p = [...no.values()].some((ae) => t - ae.t0 < Fs), g = [...f.values()].some((ae) => t - ae.t0 < ae.dur), C = Ie.home.classList.contains("active"), B = X.classList.contains("open"), q = r && ea === "smooth" && (B || C && Hs === "strip");
    !document.hidden && (p || g || q || r && s !== Ti) && (Ti = s, C && (ao(o("weatherCard"), t), O(o("weatherCard"), t)), B && (ao(X, t), O(X, t))), (r || p || g) && (jo = requestAnimationFrame(Os));
  }
  function wo() {
    o("app").classList.toggle("wxMotion", zo()), !jo && v && (jo = requestAnimationFrame(Os));
  }
  let Ws = [];
  const nn = 36e5, e = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function n() {
    const t = /* @__PURE__ */ new Date(), r = (C, B) => new Date(t.getFullYear(), t.getMonth(), t.getDate() + C, B), s = [], p = [], g = [...Array(6)].map((C, B) => {
      const q = r(B, 6), ae = r(B, 18), he = r(B + 1, 6), oe = Ws.find((Ee) => It(new Date(Ee.datetime)) === It(q)), te = (Ee, Qe, We) => {
        const _e = s.filter((gt) => gt.t >= +Ee && gt.t < +Qe);
        if (_e.length) {
          const gt = {};
          return _e.forEach((ze) => {
            gt[ze.c] = (gt[ze.c] || 0) + (e.has(ze.c) ? 2 : 1);
          }), Object.entries(gt).sort((ze, vt) => vt[1] - ze[1])[0][0];
        }
        const Me = p.find((gt) => {
          const ze = +new Date(gt.datetime);
          return ze >= +Ee - 3 * nn && ze < +Qe && (gt.is_daytime == null || !!gt.is_daytime == !We);
        });
        if (Me) return Me.condition;
        const ht = (oe == null ? void 0 : oe.condition) || "cloudy";
        return We && ht === "sunny" ? "clear-night" : ht;
      };
      return { start: +q, end: +he, day: te(q, ae, !1), night: te(ae, he, !0), hi: Number(oe == null ? void 0 : oe.temperature), lo: Number(oe == null ? void 0 : oe.templow) };
    });
    return { days: g, hours: s, start: g[0].start, end: g[5].end };
  }
  const i = (t, r) => {
    const s = t.days.findIndex((g) => r < g.end);
    if (s < 0) return 1;
    const p = t.days[s];
    return Math.max(0, (s + (r - p.start) / (p.end - p.start)) / 6);
  }, d = (t, r) => {
    const s = Math.max(0, Math.min(0.99999, r)) * 6, p = Math.floor(s), g = t.days[p];
    return g.start + (s - p) * (g.end - g.start);
  };
  function u(t, r) {
    const s = Math.max(0, t.days.findIndex((ae) => r < ae.end)), p = t.days[s], g = (r - p.start) / (p.end - p.start) >= 0.5;
    let C = g ? p.night : p.day, B = NaN;
    const q = t.hours;
    if (q.length && r >= q[0].t - nn && r <= q[q.length - 1].t + nn) {
      let ae = q.findIndex((te) => te.t > r);
      ae < 0 && (ae = q.length);
      const he = q[Math.max(0, ae - 1)], oe = q[Math.min(q.length - 1, ae)];
      C = he.c || C, B = oe.t > he.t ? he.temp + (oe.temp - he.temp) * Math.max(0, Math.min(1, (r - he.t) / (oe.t - he.t))) : he.temp;
    }
    if (!Number.isFinite(B)) {
      const ae = [];
      if (t.days.forEach((he) => {
        Number.isFinite(he.lo) && ae.push([he.start - nn, he.lo]), Number.isFinite(he.hi) && ae.push([he.start + 9 * nn, he.hi]);
      }), ae.length) {
        B = r <= ae[0][0] ? ae[0][1] : ae[ae.length - 1][1];
        for (let he = 1; he < ae.length; he++) if (r <= ae[he][0] && r > ae[he - 1][0]) {
          const [oe, te] = ae[he - 1], [Ee, Qe] = ae[he];
          B = te + (Qe - te) * (1 - Math.cos(Math.PI * (r - oe) / (Ee - oe))) / 2;
          break;
        }
      }
    }
    return { cond: g && C === "sunny" ? "clear-night" : C, temp: B, night: g, day: p };
  }
  const m = (t) => It(new Date(t)) === It(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(t)), f = /* @__PURE__ */ new Map(), b = 900, M = 700;
  let D = null;
  const N = typeof ResizeObserver == "function" ? new ResizeObserver((t) => t.forEach((r) => {
    O(r.target.parentElement), r.target.closest("#wxDialog") && Kr();
  })) : null;
  function O(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const p = n(), g = p.days.flatMap((te) => [{ cond: te.day, night: !1 }, { cond: te.night, night: !0 }]), C = g.map((te) => te.cond).join(), B = fr(), q = zo(), ae = Rn(), he = Number(It(new Date(p.start)).replace(/\D/g, "")) % 9973;
    let oe = !1;
    s.forEach((te) => {
      var gt;
      const Ee = te.clientWidth, Qe = te.clientHeight;
      if (!Ee || !Qe) return;
      const We = te.dataset.wxStrip;
      let _e = f.get(We);
      _e ? _e.sig !== C && (_e.prev = _e.segs, _e.sig = C, _e.segs = g, _e.t0 = r, _e.dur = M) : f.set(We, _e = { sig: C, segs: g, prev: null, t0: r, dur: b });
      const Me = q || ae ? Math.min(1, Math.max(0, (r - _e.t0) / _e.dur)) : 1;
      Me < 1 && (oe = !0);
      const ht = { width: Ee, height: Qe, colors: B.colors, clock: r, ambient: q, seed: he, reveal: ae ? Me : 1 - Math.pow(1 - Me, 3), prev: Me < 1 ? _e.prev : null, reduce: ae };
      if (ea === "smooth") {
        const ze = Math.min(2, window.devicePixelRatio || 1), vt = Math.round(Ee * ze), Et = Math.round(Qe * ze);
        te.width !== vt && (te.width = vt), te.height !== Et && (te.height = Et);
        const rt = te.getContext("2d");
        if (!rt) return;
        rt.setTransform(ze, 0, 0, ze, 0, 0), du(rt, g, ht);
      } else {
        const ze = lu(g, { ...ht, px: 2, oneBit: ea === "onebit", ink: B.ink, paper: B.paper });
        te.width !== ze.w && (te.width = ze.w), te.height !== ze.h && (te.height = ze.h), (gt = te.getContext("2d")) == null || gt.putImageData(new ImageData(ze.data, ze.w, ze.h), 0, 0);
      }
    }), oe && wo();
  }
  function ce() {
    const t = o("weatherCard");
    if (!t || t.hidden) return;
    const r = Wn.weather, s = r && (Ut == null ? void 0 : Ut[r]);
    if (!s) {
      t.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + ur("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", ao(t);
      return;
    }
    const p = s.attributes || {}, g = p.temperature_unit || "°", C = (rt) => Number.isFinite(Number(rt)) ? Math.round(Number(rt)) + "°" : "—", B = (p.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", q = pr[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), ae = It(/* @__PURE__ */ new Date()), he = Ws.slice(0, 7), oe = he.find((rt) => It(new Date(rt.datetime)) === ae) || null, te = he.filter((rt) => It(new Date(rt.datetime)) >= ae).slice(0, 6), Ee = /* @__PURE__ */ new Date(), Qe = It(new Date(Ee.getFullYear(), Ee.getMonth(), Ee.getDate() + 1)), We = oe ? "H " + C(oe.temperature) + "&ensp; L " + C(oe.templow) : "", _e = (rt) => {
      const at = It(new Date(rt.datetime));
      return at === ae ? "Today" : at === Qe ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(rt.datetime));
    }, Me = Number.isFinite(Number(p.temperature)) ? Math.round(Number(p.temperature)) : "—", ht = (rt) => {
      const at = new Date(rt.datetime);
      return Math.round((new Date(at.getFullYear(), at.getMonth(), at.getDate()) - new Date(Ee.getFullYear(), Ee.getMonth(), Ee.getDate())) / 864e5);
    }, gt = (rt) => (pr[rt] || rt || "").toLowerCase(), ze = (rt, at) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + ht(rt) + '" aria-label="' + Oe(_e(rt) + ": " + gt(rt.condition) + ", " + C(rt.temperature) + " / " + C(rt.templow) + ". Open the forecast") + '">' + ur(rt.condition, !1, !1, ea, "day" + at) + '<div><div class="activityRowName">' + Oe(_e(rt)) + '</div><div class="activityRowMeta">' + C(rt.temperature) + " / " + C(rt.templow) + "</div></div></div>", vt = () => '<div class="wxStrip"><div class="wxStripDays">' + n().days.map((at, pn) => {
      const Zt = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(at.start)) + ": " + gt(at.day) + (gt(at.day) === gt(at.night) ? " all day and night" : ", then " + gt(at.night) + " overnight") + (Number.isFinite(at.hi) ? ". High " + C(at.hi) : "") + (Number.isFinite(at.lo) ? ", low " + C(at.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + pn + '" aria-label="' + Oe(Zt) + '"><span class="wxDayName">' + Oe(m(at.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + C(at.hi) + '</span><span class="wxLow">' + C(at.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    t.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Oe("Now in " + B + ": " + Me + "°, " + gt(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + ur(s.state, !0, !0, ea, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Oe(String(Me)) + '</span><span class="wxUnit">' + Oe(g) + '</span></div><div class="wxPlace">' + Oe(B) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Oe(q) + "</div>" + (We ? '<div class="wxRange">' + We + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (te.length ? Hs === "strip" ? vt() : '<div class="activityRows wxDays">' + te.map(ze).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", ao(t);
    const Et = t.querySelector("canvas[data-wx-strip]");
    D && D !== Et && (N == null || N.unobserve(D)), D = Et, Et && (N == null || N.observe(Et), O(t)), wo(), Ke();
  }
  const Se = o("weatherCard"), Ne = (t) => {
    const r = t.closest("[data-wx-day]");
    if (r) {
      const p = /* @__PURE__ */ new Date();
      yt(+new Date(p.getFullYear(), p.getMonth(), p.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const s = t.closest("[data-wx-open]");
    s && yt(Date.now(), s);
  };
  Se.addEventListener("click", (t) => Ne(t.target)), Se.addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && t.target.matches("[data-wx-day],[data-wx-open]") && (t.preventDefault(), Ne(t.target));
  });
  const X = o("wxDialog"), we = o("wxGraph"), j = o("wxGraphWrap");
  let fe = Date.now(), K = null, Ue = !1, Rt = null;
  function yt(t, r) {
    const s = n();
    K = r || null, fe = Math.max(s.start, Math.min(s.end - nn, t)), f.delete("dialog"), no.delete("scrub"), X.classList.add("open"), X.setAttribute("aria-hidden", "false"), Ke(), N == null || N.observe(X.querySelector("canvas[data-wx-strip]")), we.focus({ preventScroll: !0 }), wo();
  }
  function Cn() {
    var t;
    X.classList.remove("open"), X.setAttribute("aria-hidden", "true"), N == null || N.unobserve(X.querySelector("canvas[data-wx-strip]")), (t = K == null ? void 0 : K.focus) == null || t.call(K, { preventScroll: !0 }), K = null;
  }
  function Ke() {
    if (!X.classList.contains("open")) return;
    const t = n();
    o("wxGraphDays").innerHTML = t.days.map((r) => "<span>" + Oe(m(r.start)) + "</span>").join(""), Kr(t), Ht(t), O(X);
  }
  function Ht(t = n()) {
    const r = u(t, fe), s = Ut == null ? void 0 : Ut[Wn.weather], p = (s == null ? void 0 : s.attributes) || {}, g = p.temperature_unit || "°", C = Math.abs(fe - Date.now()) < nn / 2, B = C && s ? s.state : r.cond, q = C && Number.isFinite(Number(p.temperature)) ? Math.round(Number(p.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", ae = pr[B] || (B ? B.charAt(0).toUpperCase() + B.slice(1) : "—"), he = C ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(fe / nn) * nn)), oe = r.day, te = (Number.isFinite(oe.hi) ? "H " + Math.round(oe.hi) + "°" : "") + (Number.isFinite(oe.lo) ? "&ensp; L " + Math.round(oe.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + ur(B, !0, C, ea, "scrub", C ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Oe(String(q)) + '</span><span class="wxUnit">' + Oe(g) + '</span></div><div class="wxPlace">' + Oe(he) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Oe(ae) + "</div>" + (te ? '<div class="wxRange">' + te + "</div>" : "") + "</div>", ao(o("wxDialogNow")), we.setAttribute("aria-valuenow", String(Math.round((fe - t.start) / nn))), we.setAttribute("aria-valuetext", he + ", " + ae.toLowerCase() + ", " + q + "°"), ud(t), wo();
  }
  function Kr(t = n()) {
    const r = o("wxGraphLine"), s = j.clientWidth, p = j.clientHeight;
    if (!s || !p) return;
    const g = [];
    for (let Me = t.start; Me <= t.end; Me += nn) {
      const ht = u(t, Me).temp;
      Number.isFinite(ht) && g.push([i(t, Me) * s, ht]);
    }
    if (r.setAttribute("viewBox", "0 0 " + s + " " + p), g.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', Rt = null, ud(t);
      return;
    }
    const C = g.map((Me) => Me[1]), B = Math.min(...C), q = Math.max(...C), ae = Math.max(4, q - B), he = ea !== "smooth", oe = (Me) => he ? Math.round(Me / 2) * 2 : Math.round(Me * 10) / 10;
    Rt = (Me) => p * 0.84 - (Me - B) / ae * p * 0.62;
    const te = fr(), Ee = ea === "onebit" ? te.paper : "#ffffff", Qe = ea === "onebit" ? te.ink : "rgba(0,0,0,.28)", We = "M" + g.map((Me) => oe(Me[0]) + " " + oe(Rt(Me[1]))).join(" L"), _e = (Me, ht) => {
      const gt = g.find((ze) => ze[1] === Me);
      return '<text class="wxLineLabel" x="' + oe(Math.min(s - 14, Math.max(14, gt[0]))) + '" y="' + oe(Rt(Me) + (ht ? 18 : -10)) + '" fill="' + Ee + '" stroke="' + Qe + '">' + Math.round(Me) + "°</text>";
    };
    r.setAttribute("shape-rendering", he ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + We + '" fill="none" stroke="' + Qe + '" stroke-width="' + (he ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + We + '" fill="none" stroke="' + Ee + '" stroke-width="2" stroke-linejoin="round"/>' + _e(q, !1) + _e(B, !0) + '<g id="wxCursorMark"></g>', ud(t);
  }
  function ud(t = n()) {
    const r = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const s = j.clientWidth, p = j.clientHeight, g = ea !== "smooth", C = (Ee) => g ? Math.round(Ee / 2) * 2 : Ee, B = C(i(t, fe) * s), q = u(t, fe).temp, ae = fr(), he = ea === "onebit" ? ae.paper : "#ffffff", oe = ea === "onebit" ? ae.ink : "rgba(0,0,0,.28)", te = Rt && Number.isFinite(q) ? C(Rt(q)) : null;
    r.innerHTML = '<rect x="' + (B - 2) + '" y="0" width="4" height="' + p + '" fill="' + oe + '"/><rect x="' + (B - 1) + '" y="0" width="2" height="' + p + '" fill="' + he + '"/>' + (te == null ? "" : g ? '<rect x="' + (B - 5) + '" y="' + (te - 5) + '" width="10" height="10" fill="' + he + '" stroke="' + oe + '" stroke-width="2"/>' : '<circle cx="' + B + '" cy="' + te + '" r="6" fill="' + he + '" stroke="' + oe + '" stroke-width="2"/>');
  }
  const Jd = (t) => {
    const r = j.getBoundingClientRect();
    r.width && (fe = d(n(), (t - r.left) / r.width), Ht());
  };
  we.addEventListener("pointerdown", (t) => {
    if (t.button === 0) {
      Ue = !0;
      try {
        we.setPointerCapture(t.pointerId);
      } catch {
      }
      Jd(t.clientX);
    }
  }), we.addEventListener("pointermove", (t) => {
    Ue && Jd(t.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((t) => we.addEventListener(t, () => {
    Ue = !1;
  })), we.addEventListener("keydown", (t) => {
    const r = n(), s = { ArrowLeft: -nn, ArrowRight: nn, ArrowDown: -nn, ArrowUp: nn, PageUp: -24 * nn, PageDown: 24 * nn }[t.key];
    s ? (t.preventDefault(), fe = Math.max(r.start, Math.min(r.end - nn, Math.round(fe / nn) * nn + s)), Ht(r)) : (t.key === "Home" || t.key === "End") && (t.preventDefault(), fe = t.key === "Home" ? r.start : r.end - nn, Ht(r));
  }), o("wxDialogClose").addEventListener("click", Cn), X.addEventListener("click", (t) => {
    t.target === X && Cn();
  }), X.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Cn());
  }), ce(), (dc = (sc = window.matchMedia) == null ? void 0 : (lc = sc.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || dc.call(lc, "change", () => {
    wo(), ao(a);
  }), wo();
  const Qd = o("tvNav");
  l.fullscreenSupported || (Qd.hidden = !0), Qd.addEventListener("click", () => l.toggleFullscreen()), a.addEventListener("keydown", (t) => {
    !Ie.workout.classList.contains("active") || er.classList.contains("active") || t.target.closest("input,select,textarea,.holdEnd") || (t.key === "MediaPlayPause" || t.key === " " && !t.target.closest("button") ? (t.preventDefault(), ar.click()) : t.key === "MediaTrackNext" ? (t.preventDefault(), o("skipExercise").click()) : t.key === "MediaTrackPrevious" && (t.preventDefault(), o("restartSegment").click()));
  }), a.querySelectorAll("[data-rounds-step]").forEach((t) => t.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(st.value) || 1) + Number(t.dataset.roundsStep)));
    String(r) !== st.value && (st.value = r, st.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [_, T, I, st].forEach((t) => t.addEventListener("input", () => {
    const r = Ze[bt];
    r && (r.total = Number(_.value), r.work = Number(T.value), r.rest = Number(I.value)), kt();
  })), V.addEventListener("click", vi), qe.addEventListener("click", () => k("settings")), o("settingsBack").addEventListener("click", vi), ar.addEventListener("click", () => Na(!Vn)), qt(bt), ri(), si(), Ca(), o("healthHelpOpen").addEventListener("click", () => a.querySelector(".tab[data-pane=helpPane]").click()), yi(o("resetStats"), o("resetStatsFill"), 1500, () => {
    lt.history = [], lt.checkins = [], Ui = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Ln(), eo(), si(), ri(), Ca(), Ma(), Gt("Stats reset");
  });
  const fd = o("morningTime"), hd = o("eveningTime"), md = o("checkinAutoOpen");
  fd.value = Ya().morning, hd.value = Ya().evening, md.classList.toggle("on", pt().checkinAutoOpen !== !1), [["morningTime", fd], ["eveningTime", hd]].forEach(([t, r]) => r.addEventListener("change", () => {
    r.value && (sn(t, r.value), Ma());
  })), md.addEventListener("click", () => {
    const t = pt().checkinAutoOpen === !1;
    md.classList.toggle("on", t), sn("checkinAutoOpen", t);
  }), setTimeout(Yi, 800);
  const ec = o("checkinNotify"), kl = o("checkinNotifyTarget"), tc = o("checkinNotifyStatus"), Fp = tc.textContent;
  function nc() {
    const t = l.notifyServices(), r = t.filter((g) => g.startsWith("mobile_app_")), s = r.length ? r : t, p = (g) => g.replace(/^mobile_app_/, "").replace(/_/g, " ");
    kl.innerHTML = s.map((g) => '<option value="' + Oe(g) + '">' + Oe(p(g)) + "</option>").join(""), !pt().notifyTarget && s[0] && (pt().notifyTarget = s[0]), kl.value = pt().notifyTarget || "";
  }
  function Ml() {
    const t = !!pt().notifyOn;
    ec.classList.toggle("on", t), o("checkinNotifyTargetRow").hidden = !t;
    const r = Ya();
    tc.textContent = t ? "Sends at " + r.morning + " and " + r.evening : Fp;
  }
  async function gd() {
    const t = !!pt().notifyOn;
    try {
      return await l.setReminderAutomation(t ? { target: pt().notifyTarget, times: Ya() } : null), !0;
    } catch {
      return Gt("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  ec.addEventListener("click", async () => {
    const t = !pt().notifyOn;
    if (t && (nc(), !pt().notifyTarget)) {
      Gt("Install the Companion app on your phone first");
      return;
    }
    pt().notifyOn = t, Ml(), await gd() ? (Ln(), Gt(t ? "Check-in notifications on" : "Check-in notifications off")) : (pt().notifyOn = !t, Ml());
  }), kl.addEventListener("change", () => {
    sn("notifyTarget", kl.value), pt().notifyOn && gd();
  }), [fd, hd].forEach((t) => t.addEventListener("change", () => {
    Ml(), pt().notifyOn && gd();
  })), nc(), Ml();
  let vd = null;
  function Op() {
    vd || (vd = setTimeout(() => {
      vd = null, Ca();
    }, 3e4));
  }
  return {
    updateStates(t) {
      var s, p;
      const r = !Ut || Ut[Wn.weather] !== t[Wn.weather] || ((s = Ut["sun.sun"]) == null ? void 0 : s.state) !== ((p = t["sun.sun"]) == null ? void 0 : p.state);
      Ut = t, Ds(t), dr(t), r && ce(), Date.now() - Ur > 60 * 60 * 1e3 && Rs(), Op();
    },
    applyRemoteData(t) {
      if (t && (Array.isArray(t.history) && (lt.history = t.history, eo()), Array.isArray(t.history) && Ca(), Array.isArray(t.checkins) && (lt.checkins = t.checkins.map(Ri), Ma(), ri(), si(), eo(), Ca()), t.profiles && !In.classList.contains("open") && !Ba)) {
        const r = Mo(t);
        Object.keys(Ze).forEach((s) => delete Ze[s]), Object.assign(Ze, r.profiles), lt.order = r.order, Ze[bt] || (bt = lt.order[0]), Ni(), qt(bt);
      }
    },
    suspend() {
      v = !1;
    },
    resume() {
      v || (v = !0, fi || (fi = requestAnimationFrame(An)), pa || (pa = requestAnimationFrame(Ft)), wo(), Wo(a.querySelector(".tab.active"), !1));
    }
  };
}
const uu = /* @__PURE__ */ new Set(["roaming", "test_area"]), fu = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, zs = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, wn = "made_up_", hr = (a) => {
  var l;
  return (l = String(a).split(".")[1]) == null ? void 0 : l.startsWith(wn);
}, Ll = (a) => a.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Kd(a) {
  const l = a.getHours() + a.getMinutes() / 60, o = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * o * o;
}
function hu(a) {
  const l = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  let o = 0;
  for (let c = +l; c < +a; c += 10 * 60 * 1e3) o += Kd(new Date(c)) / 6;
  return o;
}
function hc(a = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let o = 0; o <= 96; o++) {
    const c = +a - (96 - o) * 15 * 60 * 1e3;
    l.push([c, Kd(new Date(c))]);
  }
  return l;
}
function mu({ onChange: a }) {
  const l = {}, o = {}, c = (G, W, pe, ee) => {
    l[G] = { entity_id: G, state: pe, attributes: ee, last_changed: new Date(Date.now() - 18e6).toISOString() }, o[G] = W;
  }, h = (G, W, pe) => {
    const ee = l[G], ue = W ?? ee.state;
    l[G] = { ...ee, state: ue, attributes: { ...ee.attributes, ...pe }, last_changed: ue === ee.state ? ee.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, v = (G, W, pe, ee) => c("binary_sensor." + wn + (G ? G + "_" : "") + Ll(W), G, ee ? "on" : "off", { friendly_name: W, device_class: pe });
  Object.entries(fu).forEach(([G, W]) => {
    if (W.temperature != null && c("sensor." + wn + G + "_temperature", G, String(W.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), W.humidity != null && c("sensor." + wn + G + "_humidity", G, String(W.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), W.vacuum && c("vacuum." + wn + "robot", G, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), W.climate && c("climate." + wn + G, G, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: W.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), W.cover) {
      const [pe, ee, ue, J] = W.cover;
      c("cover." + wn + G + "_" + Ll(pe), G, ue ? "open" : "closed", { friendly_name: pe, device_class: ee, current_position: ue, ...J != null ? { current_tilt_position: J } : {} });
    }
    if (W.humidifier && c("humidifier." + wn + G, G, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: W.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), W.solar && (c("sensor." + wn + G + "_solar_power", G, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + wn + G + "_solar_today", G, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), W.valve && c("valve." + wn + G + "_" + Ll(W.valve), G, "closed", { friendly_name: W.valve, device_class: "water" }), W.door && v(G, W.door, "door", W.doorOpen), W.window && v(G, W.window, "window", !1), W.motion && v(G, W.motion, "motion", !1), W.plant) {
      const [pe, ee, ue, J, E] = W.plant, P = wn + Ll(pe), re = (H, Ie, V, qe, k) => c("sensor." + P + "_" + H, G, String(V), { friendly_name: Ie, device_class: k, state_class: "measurement", unit_of_measurement: qe, plant_low: V < zs[H][0], plant_high: V > zs[H][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[H] });
      re("moisture", "Moisture", ee, "%", "moisture"), re("light", "Light", ue, "lx", "illuminance"), re("temperature", "Temperature", J, "°C", "temperature"), re("fertility", "Fertility", E, "µS/cm", "conductivity");
      const Ae = Object.entries({ moisture: ee, light: ue, temperature: J, fertility: E }).filter(([H, Ie]) => Ie < zs[H][0] || Ie > zs[H][1]).map(([H, Ie]) => H + (Ie < zs[H][0] ? " low" : " high"));
      c("plant." + P, G, Ae.length ? "problem" : "ok", { friendly_name: pe, moisture: ee, brightness: ue, temperature: J, conductivity: E, problem: Ae.join(", ") || "none" });
    }
  }), c("alarm_control_panel." + wn + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), v(null, "Front door", "door", !1), v(null, "Smoke alarm", "smoke", !1), c("sensor." + wn + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, A = {};
  let x = null;
  function R() {
    const G = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((W) => {
      W.endsWith("_solar_power") && (l[W] = { ...l[W], state: Kd(G).toFixed(2) }), W.endsWith("_solar_today") && (l[W] = { ...l[W], state: hu(G).toFixed(1) });
    });
  }
  R();
  let ve = 0;
  function ie() {
    let G = !1;
    const W = ++ve % 10 === 0, pe = (J, E, P) => {
      h(J, E, P), G = !0;
    };
    Object.entries(w).forEach(([J, E]) => {
      const P = l[J].attributes.current_position, re = P < E ? Math.min(E, P + 10) : Math.max(E, P - 10);
      re === E && delete w[J], pe(J, re === E ? re === 0 ? "closed" : "open" : E > P ? "opening" : "closing", { current_position: re });
    }), Object.entries(A).forEach(([J, E]) => {
      const P = l[J].attributes.current_tilt_position, re = P < E ? Math.min(E, P + 25) : Math.max(E, P - 25);
      re === E && delete A[J], pe(J, null, { current_tilt_position: re });
    }), Object.keys(l).filter((J) => J.startsWith("climate.")).forEach((J) => {
      const E = l[J], P = E.attributes, re = P.current_temperature, Ae = (E.state === "heat" || E.state === "auto") && re < P.temperature - 0.05, H = (E.state === "cool" || E.state === "auto") && re > P.temperature + 0.05, Ie = E.state === "off" ? "off" : Ae ? "heating" : H ? "cooling" : "idle", V = W ? Math.round((re + (Ae ? 0.1 : H ? -0.1 : 0)) * 10) / 10 : re;
      (V !== re || Ie !== P.hvac_action) && pe(J, null, { current_temperature: V, hvac_action: Ie });
    }), Object.keys(l).filter((J) => J.startsWith("humidifier.")).forEach((J) => {
      const E = l[J], P = E.attributes, re = P.current_humidity, Ae = E.state === "on" && re < P.humidity, H = Ae && W ? re + 1 : re, Ie = E.state !== "on" ? "off" : Ae ? "humidifying" : "idle";
      if (H !== re || Ie !== P.action) {
        pe(J, null, { current_humidity: H, action: Ie });
        const V = "sensor." + wn + o[J] + "_humidity";
        l[V] && pe(V, String(H));
      }
    });
    const ee = l["vacuum." + wn + "robot"], ue = ee.attributes;
    ee.state === "cleaning" && W && pe(ee.entity_id, null, { battery_level: Math.max(5, ue.battery_level - 1) }), ee.state === "returning" && pe(ee.entity_id, "docked", {}), ee.state === "docked" && ue.battery_level < 100 && pe(ee.entity_id, null, { battery_level: Math.min(100, ue.battery_level + 2) }), x && Date.now() - x.at > 5e3 && (pe("alarm_control_panel." + wn + "house", "armed_" + x.mode, {}), x = null), G && a();
  }
  const U = setInterval(ie, 1e3), $ = setInterval(() => {
    R(), a();
  }, 60 * 1e3);
  function ne(G, W, pe) {
    const ee = pe == null ? void 0 : pe.entity_id;
    if (!l[ee]) return !1;
    const ue = l[ee], J = ue.attributes, E = (P, re) => h(ee, P, re);
    if (G === "climate" && (W === "set_temperature" && E(null, { temperature: Math.max(J.min_temp, Math.min(J.max_temp, pe.temperature)) }), W === "set_hvac_mode" && E(pe.hvac_mode, pe.hvac_mode === "off" ? { hvac_action: "off" } : {}), W === "toggle" && E(ue.state === "off" ? "heat" : "off", ue.state === "off" ? {} : { hvac_action: "off" })), G === "cover") {
      const P = W === "open_cover" ? 100 : W === "close_cover" ? 0 : W === "set_cover_position" ? pe.position : W === "toggle" ? J.current_position > 0 ? 0 : 100 : null;
      W === "stop_cover" && (delete w[ee], delete A[ee], E(J.current_position === 0 ? "closed" : "open")), P != null && P !== J.current_position && (w[ee] = P, E(P > J.current_position ? "opening" : "closing"));
      const re = W === "open_cover_tilt" ? 100 : W === "close_cover_tilt" ? 0 : W === "set_cover_tilt_position" ? pe.tilt_position : null;
      W === "stop_cover_tilt" && delete A[ee], re != null && J.current_tilt_position != null && re !== J.current_tilt_position && (A[ee] = re);
    }
    if (G === "humidifier" && (W === "set_humidity" && E(null, { humidity: Math.max(J.min_humidity, Math.min(J.max_humidity, pe.humidity)) }), W === "set_mode" && E(null, { mode: pe.mode }), W === "turn_on" || W === "turn_off" || W === "toggle")) {
      const P = W === "turn_on" || W === "toggle" && ue.state !== "on";
      E(P ? "on" : "off", { action: P ? "idle" : "off" });
    }
    if (G === "vacuum" && (W === "start" && E("cleaning", { rooms: pe.rooms || J.rooms }), W === "pause" && E("paused"), W === "return_to_base" && E("returning", { rooms: [] }), W === "locate" && E(null, { located: Date.now() }), W === "set_rooms" && E(null, { rooms: pe.rooms })), G === "valve") {
      const P = W === "open_valve" || W === "toggle" && ue.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(W) && E(P ? "open" : "closed");
    }
    if (G === "alarm_control_panel") {
      W === "alarm_disarm" && (x = null, E("disarmed", { changed_by: "Matt" }));
      const P = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[W];
      P && (x = { mode: P, at: Date.now() }, E("arming", { changed_by: "Matt" }));
    }
    return a(), !0;
  }
  function Y(G) {
    const W = (G == null ? void 0 : G.states) || {}, pe = (G == null ? void 0 : G.entities) || {}, ee = (G == null ? void 0 : G.devices) || {}, ue = (T) => {
      var me;
      const I = pe[T];
      return I && (I.area_id || I.device_id && ((me = ee[I.device_id]) == null ? void 0 : me.area_id)) || null;
    }, J = (T) => {
      const I = pe[T];
      return W[T] && W[T].state !== "unavailable" && !(I != null && I.hidden) && !(I != null && I.entity_category);
    }, E = {};
    Object.keys(W).forEach((T) => {
      const I = ue(T);
      I && J(T) && (E[I] || (E[I] = [])).push(T);
    });
    const P = { ...W, ...l }, re = (T) => {
      var I, me;
      return (me = (I = P[T]) == null ? void 0 : I.attributes) == null ? void 0 : me.device_class;
    }, Ae = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], H = Object.keys(W).filter((T) => T.startsWith("vacuum.") && J(T)), Ie = Object.values((G == null ? void 0 : G.areas) || {}).filter((T) => !uu.has(T.area_id)).map((T) => {
      const I = T.area_id, me = E[I] || [], z = (Xe) => me.filter((Lt) => Lt.startsWith(Xe + ".")), le = (Xe) => z("sensor").filter((Lt) => re(Lt) === Xe), ge = (Xe) => Object.keys(l).filter((Lt) => o[Lt] === I && Xe(Lt)), xe = (Xe, Lt) => Xe.length ? Xe : ge(Lt), $e = xe(le("temperature"), (Xe) => Xe.endsWith(I + "_temperature")), st = xe(le("humidity"), (Xe) => Xe.endsWith(I + "_humidity")), At = le("power").filter((Xe) => /^(W|kW)$/.test(P[Xe].attributes.unit_of_measurement || "")), Tn = z("binary_sensor").filter((Xe) => re(Xe) === "moisture"), zn = xe(z("plant"), (Xe) => Xe.startsWith("plant.")).map((Xe) => ({ id: Xe, readings: ge((Lt) => Lt.startsWith("sensor." + Xe.split(".")[1] + "_")) })), mt = [...z("binary_sensor").filter((Xe) => Ae.includes(re(Xe))), ...ge((Xe) => Xe.startsWith("binary_sensor."))];
      return {
        id: I,
        name: T.name,
        icon: T.icon,
        readings: [...$e.slice(0, 1), ...st.slice(0, 1), ...Tn],
        power: At.length ? At.reduce((Xe, Lt) => Xe + Number(P[Lt].state) * (P[Lt].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: z("switch"),
        lights: z("light"),
        actions: [...z("light"), ...xe(z("climate"), (Xe) => Xe.startsWith("climate.")), ...xe(z("cover"), (Xe) => Xe.startsWith("cover.")), ...xe(z("humidifier"), (Xe) => Xe.startsWith("humidifier.")), ...xe(z("valve"), (Xe) => Xe.startsWith("valve.")), ...z("media_player"), ...z("vacuum"), ...H.length ? [] : ge((Xe) => Xe.startsWith("vacuum."))],
        solar: ge((Xe) => Xe.includes("_solar_")),
        plants: zn,
        openings: mt,
        alerts: [...Tn, ...mt].filter((Xe) => {
          var Lt;
          return ((Lt = P[Xe]) == null ? void 0 : Lt.state) === "on";
        })
      };
    }).filter((T) => T.readings.length || T.plugs.length || T.actions.length || T.solar.length || T.plants.length), V = Object.keys(W).find((T) => /^sensor\..*(p1_meter_power|grid_power)$/.test(T) && W[T].state !== "unavailable") || null, qe = (T) => Object.keys(W).filter((I) => I.startsWith(T + ".") && J(I)), k = qe("alarm_control_panel"), _ = H.length ? H : ["vacuum." + wn + "robot"];
    return {
      states: P,
      rooms: Ie,
      grid: V,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (T) => l[T] ? o[T] : ue(T),
      vacuums: _,
      homeVacuums: _.filter((T) => !Ie.some((I) => I.actions.includes(T))),
      security: {
        alarms: k.length ? k : ["alarm_control_panel." + wn + "house"],
        locks: qe("lock"),
        openings: [...Object.keys(l).filter((T) => T.startsWith("binary_sensor.")), "sensor." + wn + "doorbell"]
      }
    };
  }
  return { model: Y, call: ne, stop() {
    clearInterval(U), clearInterval($);
  } };
}
const Zo = (a) => a < 0 ? 0 : a > 1 ? 1 : a, zd = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, gu = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), mc = {}, Oa = (a, l, o) => {
  const c = a + l + o;
  return mc[c] || (mc[c] = gu(zd(a).map((h, v) => h + (zd(l)[v] - h) * o)));
}, gc = {}, Hl = (a) => gc[a] || (gc[a] = zd(a));
function vu(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [Oa(l.clear[0], l.cloudy[0], 0.12), Oa(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Oa(l.rain[0], "#000000", 0.22), Oa(l.rain[1], "#000000", 0.22)], l;
}
const bu = [
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
], Yo = (a, l) => (bu[(l & 7) * 8 + (a & 7)] + 0.5) / 64, fp = 1, hp = 2, mp = 3, gp = 4, es = 5, Wl = 6, jd = 7, vp = 8, vc = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), wu = (a, l, o) => {
  let c = !1;
  for (let h = 0, v = a.length - 1; h < a.length; v = h++) {
    const w = a[h], A = a[v];
    w[1] > o != A[1] > o && l < (A[0] - w[0]) * (o - w[1]) / (A[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function yu(a, l, o, c, { oneBit: h, ink: v, paper: w, snowInk: A }) {
  const x = new Uint8ClampedArray(o * c * 4), R = Hl(v), ve = Hl(w);
  for (let ie = 0; ie < c; ie++) for (let U = 0; U < o; U++) {
    const $ = ie * o + U, ne = l[$];
    if (a[$] == null) continue;
    let Y = Hl(a[$]);
    if (h) {
      let G;
      ne === gp || ne === vp ? G = !0 : ne === es ? G = A : ne === jd || ne === Wl ? G = !1 : G = Math.round((0.2126 * Y[0] + 0.7152 * Y[1] + 0.0722 * Y[2]) / 255 * 4) / 4 <= Yo(U, ie), (ne === fp || ne === hp || ne === mp || ne === Wl) && (U > 0 && l[$ - 1] !== ne || U < o - 1 && l[$ + 1] !== ne || ie > 0 && l[$ - o] !== ne || ie < c - 1 && l[$ + o] !== ne) && (G = !0), Y = G ? R : ve;
    }
    x[$ * 4] = Y[0], x[$ * 4 + 1] = Y[1], x[$ * 4 + 2] = Y[2], x[$ * 4 + 3] = 255;
  }
  return { w: o, h: c, data: x };
}
const xu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, ku = (a) => Vl(a, !1).split("/")[0], yd = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Mu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Su = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Cu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Tu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Lu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Au = [".##", "##.", ".#.", "#.."];
function bp(a, { width: l, height: o, colors: c, wave: h = 0.38, soft: v = 6, glow: w = 0.6, columns: A = 6 }) {
  const x = { ...sa, dawn: "#e5a77e", ...c }, R = vu(x), ve = l, ie = o, U = ve / A, $ = U / 2, ne = Math.PI * 2, Y = a.length ? a : [{ cond: "cloudy", night: !1 }], G = [...Array(A * 2)].map((ue, J) => {
    const E = Y[Math.min(J, Y.length - 1)], P = ku(E.cond), re = J % 2 === 1;
    return { cond: E.cond, k: P, night: re, sky: R[P][re ? 1 : 0], cover: xu[P] };
  }), W = (ue) => ie * (0.5 - h * Math.cos(ne * (ue / U - 0.25)));
  return { C: x, S: G, W: ve, H: ie, cw: U, sw: $, TAU: ne, yb: W, side: (ue, J, E) => {
    const P = (ue ? W(J) - E : E - W(J)) / Math.max(3, v * 1.4) + 0.5;
    return P <= 0 ? 0 : P >= 1 ? 1 : P;
  }, glowAt: (ue) => {
    const J = ((ue / U - 0.25) % 1 + 1) % 1, E = Math.max(0, Math.min(A - 1, Math.round(ue / U - 0.25))), P = Math.max(0, Math.min(A - 1, Math.round(ue / U - 0.75))), re = 1 - (G[2 * E].cover + G[2 * P + 1].cover) / 2, Ae = Math.sin(Math.PI * Math.min(1, Math.max(0, W(ue) / ie)));
    return { c: J < 0.5 ? x.dusk : x.dawn, a: w * (0.2 + 0.8 * re) * Ae * Ae };
  }, soft: v, tw: U * 0.3, sy: ie / 90 };
}
function wp(a, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: h, sw: v, side: w, C: A, TAU: x, sy: R, H: ve } = a, ie = l, U = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  h.forEach((Y, G) => {
    const W = yd(c * 977 + G * 131 + 7), pe = (G + 0.5) * v, ee = Y.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[Y.k] : 0;
    for (let ue = 0; ue < ee; ue++) {
      const J = pe + (W() - 0.5) * v * 1.6, E = (6 + W() * 76) * R, P = W() < 0.35, re = 1.8 + W() * 1.6, Ae = w(!0, J, E) * (P ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(x * ie / 2600 + ue * 1.7 + G) : 1);
      Ae >= 0.03 && U.stars.push({ x: J, y: E, big: P, size: re, o: Ae });
    }
    if (!Y.night && (Y.k === "clear" || Y.k === "partly")) {
      const ue = pe + (W() - 0.5) * v * 0.3, J = Math.min(15, v * 0.29);
      U.suns.push({ x: ue, y: 32 * R, rad: J, halo: J * 2.8 * (o ? 1 + 0.07 * Math.sin(x * ie / 3600 + G) : 1) });
    }
    if (Y.night && (Y.k === "clear" || Y.k === "partly")) {
      const ue = Math.min(0.78, v * 0.55 / 34), J = pe - 23 * ue + (W() - 0.5) * v * 0.2;
      U.moons.push({ x: J + 23 * ue, y: (4 + (o ? 0.8 * Math.sin(x * ie / 5200 + G) : 0)) * R + 23 * ue, d: 46 * ue });
    }
  });
  const $ = Math.max(56, Math.min(100, ve * 0.45)), ne = Math.max(1, v / ($ * 2.4));
  return h.forEach((Y, G) => {
    const W = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[Y.k];
    if (!W) return;
    const pe = Y.k === "partly" ? 1 : Math.round(W * ne), ee = yd(c * 577 + G * 71 + 3), ue = (G + 0.5) * v, J = Y.k === "rain" || Y.k === "storm" || Y.night ? A.cloudNight : A.cloudDay, E = Y.night ? 0.82 : Y.k === "storm" ? 0.75 : 1;
    for (let P = 0; P < pe; P++) {
      const re = $ / 46 * (Y.k === "partly" ? 1 : 0.8 + ee() * 0.4), Ae = ue + (Y.k === "partly" ? v * 0.12 : ((P + 0.5) / pe - 0.5) * v * 0.95 + (ee() - 0.5) * v * 0.5 / pe), H = (Y.k === "partly" ? 40 : 6 + ee() * 26) * R, Ie = o ? 2.5 * Math.sin(x * ie / 9e3 + G * 1.3 + P * 2.1) : 0, V = o ? 0.9 * Math.sin(x * ie / 6100 + G + P) : 0;
      U.clouds.push({ x: Ae - 23 * re + Ie, y: H - 15.33 * re + V, w: 46 * re, h: 30.66 * re, fill: J, o: E * (pe > 1 && P === 0 ? 0.85 : 1) });
    }
  }), h.forEach((Y, G) => {
    const W = yd(c * 313 + G * 29 + 11), pe = (G + 0.5) * v, ee = Y.cond === "pouring" ? 16 : Y.cond === "rainy" || Y.cond === "hail" ? 9 : Y.cond === "lightning-rainy" ? 12 : Y.cond === "snowy-rainy" ? 5 : 0;
    for (let J = 0; J < ee; J++) {
      let E = pe + (W() - 0.5) * v * 1.05, P = 44 + W() * 36, re = 1;
      if (o) {
        const H = ((P - 44 + ie * 0.04) % 36 + 36) % 36;
        E -= 0.21 * (H - (P - 44)), P = 44 + H, re = Math.min(1, H / 6, (36 - H) / 6);
      }
      P *= R;
      const Ae = w(Y.night, E, P) * re;
      Ae >= 0.05 && U.drops.push({ x: E, y: P, o: Ae });
    }
    const ue = Y.cond === "snowy" ? 11 : Y.cond === "snowy-rainy" ? 6 : 0;
    for (let J = 0; J < ue; J++) {
      let E = pe + (W() - 0.5) * v * 1.05, P = 40 + W() * 44, re = 1;
      if (o) {
        const H = ((P - 40 + ie * 9e-3) % 44 + 44) % 44;
        P = 40 + H, E += 1.6 * Math.sin(x * ie / 2800 + J * 1.9 + G), re = Math.min(1, H / 6, (44 - H) / 6);
      }
      P *= R;
      const Ae = w(Y.night, E, P) * re;
      Ae >= 0.05 && U.flakes.push({ x: E, y: P, o: Ae });
    }
    if (Y.k === "fog") {
      const J = Y.night ? "#c8ccd6" : "#ffffff", E = Y.night ? 0.28 : 0.62, P = o ? 4 * Math.sin(x * ie / 8e3 + G) : 0;
      for (let re = 0; re < 4; re++) U.fogs.push({ x: pe - v * 0.75 + re % 2 * v * 0.18 + (re % 2 ? P : -P), y: (30 + re * 13) * R, w: v * 1.3, c: J, a: E });
    }
    if (Y.k === "storm") {
      const J = (ie / 3400 + G * 0.37) % 1;
      U.bolts.push({ x: pe + (W() - 0.5) * v * 0.3 - 5, y: 36 * R, o: o && !(J < 0.05 || J > 0.09 && J < 0.12) ? 0.8 : 1 });
    }
  }), U;
}
function _u(a, l, o, c, h, v, w, A) {
  const { S: x, C: R, cw: ve, yb: ie, glowAt: U, soft: $, tw: ne, sy: Y } = a, G = new Array(o * c), W = new Uint8Array(o * c), pe = new Uint8Array(o * c), ee = (k, _, T, I, me) => {
    T == null || k < 0 || _ < 0 || k >= o || _ >= c || (I >= 1 || I > Yo(k + 5, _ + 3)) && (G[_ * o + k] = T, W[_ * o + k] = me);
  }, ue = (k, _, T, I) => {
    for (let me = Math.max(0, Math.floor(_ - T) - 1); me <= Math.min(c - 1, _ + T + 1); me++) for (let z = Math.max(0, Math.floor(k - T) - 1); z <= Math.min(o - 1, k + T + 1); z++) I(z, me, z + 0.5 - k, me + 0.5 - _);
  }, J = (k, _, T) => {
    for (let me = 0; me < k.length - 1; me++) {
      const z = (me + _) * ve;
      if (T < z - ne / 2) return [k[me], k[me], 0];
      if (T <= z + ne / 2) return [k[me], k[me + 1], (T - z + ne / 2) / ne];
    }
    const I = k[k.length - 1];
    return [I, I, 0];
  }, E = x.filter((k) => !k.night).map((k) => k.sky), P = x.filter((k) => k.night).map((k) => k.sky), re = $ / v, Ae = 16 * Y / v;
  for (let k = 0; k < o; k++) {
    const _ = (k + 0.5) * h, T = ie(_) / v, I = J(E, 0.75, _), me = J(P, 1.25, _), z = U(_);
    for (let le = 0; le < c; le++) {
      const ge = Yo(k, le), xe = le + 0.5 - T, $e = (re > 0.01 ? Zo(0.5 + xe / re) : xe > 0 ? 1 : 0) > ge;
      let st = $e ? I[2] > ge ? I[1] : I[0] : me[2] > ge ? me[1] : me[0];
      ($e ? Zo(((le + 0.5) / c - 0.45) / 0.55) * 0.7 : Zo(1 - (le + 0.5) / (c * 0.55)) * 0.7) > Yo(k + 2, le + 5) && (st = $e ? Oa(st, "#ffffff", 0.18) : Oa(st, "#000000", 0.25)), $e && xe >= 0 && xe < Ae && z.a * 1.3 * (1 - xe / Ae) > Yo(k + 6, le + 1) && (st = z.c), G[le * o + k] = st, pe[le * o + k] = $e ? 0 : 1;
    }
  }
  const H = Oa(R.sun, "#ffffff", 0.55), Ie = Oa(R.moon, "#ffffff", 0.6);
  l.stars.forEach((k) => {
    const _ = Math.floor(k.x / h), T = Math.floor(k.y / v);
    if (_ < 0 || T < 0 || _ >= o || T >= c || !pe[T * o + _] || k.o < 0.15) return;
    const I = k.o > 0.45 ? R.star : Oa(R.star, G[T * o + _], 0.5), me = k.big && k.o > 0.6 ? Math.floor(k.size / h) : 0;
    ee(_, T, I, 1, jd);
    for (let z = 1; z <= me; z++) [[_ - z, T], [_ + z, T], [_, T - z], [_, T + z]].forEach((le) => {
      le[0] >= 0 && le[1] >= 0 && le[0] < o && le[1] < c && pe[le[1] * o + le[0]] && ee(le[0], le[1], I, 1, jd);
    });
  }), l.suns.forEach((k) => {
    const _ = Math.max(1.5, k.rad / h), T = k.x / h, I = k.y / v, me = k.halo / h * 0.85;
    if (ue(T, I, me, (z, le, ge, xe) => {
      const $e = Math.sqrt(ge * ge + xe * xe);
      $e > _ && $e < me && !pe[le * o + z] && ee(z, le, H, 0.3 * (1 - ($e - _) / (me - _)), 0);
    }), A) {
      const z = Math.floor(w / 500) % 2, le = Math.max(1, _ * 0.3);
      for (let ge = 0; ge < 8; ge++) if (ge % 2 === z) for (let xe = _ + 1.2; xe < _ + 1.2 + le; xe += 0.7) ee(Math.floor(T + Math.cos(ge * Math.PI / 4) * xe), Math.floor(I + Math.sin(ge * Math.PI / 4) * xe), R.sun, 1, vp);
    }
    ue(T, I, _, (z, le, ge, xe) => {
      ge * ge + xe * xe <= _ * _ && ee(z, le, Zo(((xe / _ + 1) / 2 - 0.6) / 0.4) > Yo(z, le) ? R.sunEdge : R.sun, 1, fp);
    });
  }), l.moons.forEach((k) => {
    const _ = Math.max(1.5, k.d * 0.37 / h), T = k.x / h, I = k.y / v, me = T + 0.547 * _, z = I - 0.503 * _, le = 0.82 * _;
    ue(T, I, _, (ge, xe, $e, st) => {
      if ($e * $e + st * st > _ * _) return;
      const At = ge + 0.5 - me, Tn = xe + 0.5 - z;
      At * At + Tn * Tn > le * le && ee(ge, xe, Zo((st + _) / (2 * _) * 1.1 - 0.1) > Yo(ge, xe) ? R.moon : Ie, 1, hp);
    });
  }), l.clouds.forEach((k) => {
    const _ = Math.max(3, k.w / h), T = _ * 0.6665, I = k.x / h, me = k.y / v, z = Oa(k.fill, "#000000", 0.16);
    for (let le = Math.max(0, Math.floor(me) - 1); le <= Math.min(c - 1, me + T + 1); le++) for (let ge = Math.max(0, Math.floor(I) - 1); ge <= Math.min(o - 1, I + _ + 1); ge++) {
      const xe = (ge + 0.5 - I) / _, $e = (le + 0.5 - me) / _;
      vc(xe, $e) && ee(ge, le, !vc(xe, $e + 1 / _) || Zo(($e - 0.42) / 0.25) * 0.8 > Yo(ge, le) ? z : k.fill, k.o, mp);
    }
  }), l.fogs.forEach((k) => {
    const _ = Math.floor(k.y / v), T = Math.max(_, Math.floor((k.y + 6 * Y) / v) - 1), I = Math.floor(k.x / h), me = Math.floor((k.x + k.w) / h);
    for (let z = _; z <= T; z++) for (let le = I; le <= me; le++) {
      const ge = (le - I) / Math.max(1, me - I);
      ee(le, z, k.c, k.a * (ge < 0.25 ? ge / 0.25 : ge > 0.75 ? (1 - ge) / 0.25 : 1), 0);
    }
  });
  const V = Math.max(2, Math.round(9 / v));
  l.drops.forEach((k) => {
    const _ = k.x / h, T = Math.floor(k.y / v);
    for (let I = 0; I < V; I++) ee(Math.floor(_ - 0.208 * I * v / h), T + I, R.rain, k.o, gp);
  });
  const qe = Math.max(0, Math.round(4.4 / h / 2.6));
  return l.flakes.forEach((k) => {
    const _ = Math.floor(k.x / h), T = Math.floor(k.y / v);
    ee(_, T, R.snow, k.o, es);
    for (let I = 1; I <= qe; I++)
      ee(_ - I, T, R.snow, k.o, es), ee(_ + I, T, R.snow, k.o, es), ee(_, T - I, R.snow, k.o, es), ee(_, T + I, R.snow, k.o, es);
  }), l.bolts.forEach((k) => {
    if (h <= 3.5)
      for (let _ = Math.floor(k.y / v); _ <= (k.y + 24) / v; _++) for (let T = Math.floor(k.x / h); T <= (k.x + 11) / h; T++)
        wu(Lu, (T + 0.5) * h - k.x, (_ + 0.5) * v - k.y) && ee(T, _, R.sun, 1, Wl);
    else {
      const _ = Math.round(k.x / h), T = Math.round(k.y / v);
      Au.forEach((I, me) => I.split("").forEach((z, le) => {
        z === "#" && ee(_ + le, T + me, R.sun, 1, Wl);
      }));
    }
  }), { col: G, ids: W };
}
function Eu(a, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), h = Math.max(6, Math.round(l.height / o)), v = l.width / c, w = l.height / h, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, x = ($) => {
    const ne = bp($, l);
    return _u(ne, wp(ne, { clock: A, ambient: l.ambient, seed: l.seed }), c, h, v, w, A, l.ambient);
  }, R = x(a), ve = l.reveal == null ? 1 : Zo(l.reveal);
  let ie = R.col, U = R.ids;
  if (ve < 1) {
    const $ = l.prev ? x(l.prev) : null, ne = ve * (c + 12);
    ie = new Array(c * h), U = new Uint8Array(c * h);
    for (let Y = 0; Y < c * h; Y++) {
      const G = Y % c, W = Y / c | 0;
      (l.reduce ? ve : Zo((ne - G) / 12)) > Yo(G, W) ? (ie[Y] = R.col[Y], U[Y] = R.ids[Y]) : $ ? (ie[Y] = $.col[Y], U[Y] = $.ids[Y]) : (ie[Y] = null, U[Y] = 255);
    }
  }
  return yu(ie, U, c, h, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function Du(a, l, o) {
  const c = o.width, h = o.height, v = o.reveal == null ? 1 : Zo(o.reveal), w = (U, $) => {
    const ne = bp($, o);
    Bu(U, ne, wp(ne, o));
  };
  if (a.clearRect(0, 0, c, h), v >= 1) {
    w(a, l);
    return;
  }
  if (o.prev && w(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = v, w(a, l), a.restore();
    return;
  }
  const A = a.canvas, x = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (x.width !== A.width || x.height !== A.height) && (x.width = A.width, x.height = A.height);
  const R = x.getContext("2d");
  R.setTransform(a.getTransform()), R.clearRect(0, 0, c, h), w(R, l);
  const ve = v * (c + 64) - 64, ie = R.createLinearGradient(ve, 0, ve + 64, 0);
  ie.addColorStop(0, "rgba(0,0,0,1)"), ie.addColorStop(1, "rgba(0,0,0,0)"), R.globalCompositeOperation = "destination-in", R.fillStyle = ie, R.fillRect(0, 0, c, h), R.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(x, 0, 0), a.restore();
}
function Bu(a, l, o) {
  const { W: c, H: h, S: v, C: w, cw: A, yb: x, glowAt: R, soft: ve, tw: ie, sy: U } = l, $ = a.getTransform().a || 1, ne = (V) => {
    a.shadowColor = V ? "rgba(28,18,8,.22)" : "transparent", a.shadowBlur = V ? 4 * $ : 0, a.shadowOffsetY = V ? 1.5 * $ : 0;
  }, Y = (V, qe) => {
    const k = Hl(V);
    return "rgba(" + k[0] + "," + k[1] + "," + k[2] + "," + Math.max(0, Math.min(1, qe)).toFixed(3) + ")";
  }, G = (V, qe) => {
    const k = a.createLinearGradient(0, 0, c, 0);
    k.addColorStop(0, V[0]);
    for (let _ = 0; _ < V.length - 1; _++) {
      const T = (_ + qe) * A, I = (T - ie / 2) / c, me = (T + ie / 2) / c;
      I > 0 && I < 1 && k.addColorStop(I, V[_]), me > 0 && me < 1 && k.addColorStop(me, V[_ + 1]);
    }
    return k.addColorStop(1, V[V.length - 1]), k;
  }, W = Math.max(24, Math.ceil(c / 4)), pe = (V, qe) => {
    a.beginPath();
    for (let k = 0; k <= W; k++) {
      const _ = c * k / W, T = V == null ? 0 : x(_) + V;
      k ? a.lineTo(_, T) : a.moveTo(_, T);
    }
    for (let k = W; k >= 0; k--) {
      const _ = c * k / W;
      a.lineTo(_, x(_) + qe);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = G(v.filter((V) => !V.night).map((V) => V.sky), 0.75), a.fillRect(0, 0, c, h);
  const ee = a.createLinearGradient(0, 0, c, 0);
  for (let V = 0; V <= 64; V++) {
    const qe = R(c * V / 64);
    ee.addColorStop(V / 64, Y(qe.c, Math.min(1, qe.a)));
  }
  a.fillStyle = ee;
  for (let V = 0; V < 8; V++)
    a.globalAlpha = 1 - V / 8, pe(V * 2 * U, (V + 1) * 2 * U);
  a.fillStyle = G(v.filter((V) => V.night).map((V) => V.sky), 1.25);
  const ue = Math.max(0.5, ve), J = 6;
  a.globalAlpha = 1, pe(null, -ue);
  for (let V = 0; V < J; V++)
    a.globalAlpha = 1 - (V + 0.5) / J, pe(-ue + 2 * ue * V / J, -ue + 2 * ue * (V + 1) / J);
  a.globalAlpha = 1;
  const E = new Path2D(Cu), P = new Path2D(Su), re = new Path2D(Mu), Ae = new Path2D(Tu);
  a.fillStyle = w.star, o.stars.forEach((V) => {
    a.globalAlpha = V.o, V.big ? (a.save(), a.translate(V.x, V.y), a.scale(V.size, V.size), a.fill(E), a.restore()) : (a.beginPath(), a.arc(V.x, V.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const H = Oa(w.sun, "#ffffff", 0.55);
  o.suns.forEach((V) => {
    const qe = a.createRadialGradient(V.x, V.y, 0, V.x, V.y, V.halo);
    qe.addColorStop(0, Y(H, 0.42)), qe.addColorStop(0.7, Y(H, 0)), a.fillStyle = qe, a.beginPath(), a.arc(V.x, V.y, V.halo, 0, Math.PI * 2), a.fill();
    const k = a.createLinearGradient(0, V.y - V.rad, 0, V.y + V.rad);
    k.addColorStop(0.6, w.sun), k.addColorStop(1, w.sunEdge), a.fillStyle = k, ne(!0), a.beginPath(), a.arc(V.x, V.y, V.rad, 0, Math.PI * 2), a.fill(), ne(!1);
  });
  const Ie = Oa(w.moon, "#ffffff", 0.6);
  o.moons.forEach((V) => {
    a.save(), a.translate(V.x - V.d / 2, V.y - V.d / 2), a.scale(V.d / 46, V.d / 46);
    const qe = a.createLinearGradient(0, 6, 0, 40);
    qe.addColorStop(0, Ie), qe.addColorStop(1, w.moon), a.fillStyle = qe, ne(!0), a.fill(P), ne(!1), a.restore();
  }), o.clouds.forEach((V) => {
    a.save(), a.globalAlpha = V.o, a.translate(V.x, V.y), a.scale(V.w / 46, V.h / 30.66), a.translate(-4, -9.67), a.fillStyle = V.fill, ne(!0), a.fill(re), ne(!1), a.restore();
  }), o.fogs.forEach((V) => {
    const qe = a.createLinearGradient(V.x, 0, V.x + V.w, 0);
    qe.addColorStop(0, Y(V.c, 0)), qe.addColorStop(0.25, Y(V.c, V.a)), qe.addColorStop(0.75, Y(V.c, V.a)), qe.addColorStop(1, Y(V.c, 0)), a.fillStyle = qe, a.fillRect(V.x, V.y, V.w, 6 * U);
  }), a.fillStyle = w.rain, o.drops.forEach((V) => {
    a.save(), a.globalAlpha = V.o, a.translate(V.x, V.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = w.snow, o.flakes.forEach((V) => {
    a.globalAlpha = V.o, a.beginPath(), a.arc(V.x, V.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = w.sun, o.bolts.forEach((V) => {
    a.save(), a.globalAlpha = V.o, a.translate(V.x, V.y), a.fill(Ae), a.restore();
  }), a.restore();
}
const Ru = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", Jr = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Al = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, xd = (a, l) => '<path class="' + l + '" d="' + a + '"/>', Nu = (a, l) => ' style="animation-delay:-' + Math.round(a * 137 % l) + 'ms"', Fa = (a, l, o, c) => {
  const h = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + Nu(a, 2400) + ' d="M' + a + " " + (l - o) + "L" + (a + h) + " " + (l - h) + "L" + (a + o) + " " + l + "L" + (a + h) + " " + (l + h) + "L" + a + " " + (l + o) + "L" + (a - h) + " " + (l + h) + "L" + (a - o) + " " + l + "L" + (a - h) + " " + (l - h) + 'Z"/>';
}, bc = ([a, l, o], c) => '<path class="wbMoonPath" d="' + a + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + l + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Pu = (a, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Iu = (a) => (a ? ["29.35", "43.04", "56.74"].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), Hu = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, o], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + l + '" cy="' + o + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Fu(a, l, o, c) {
  const h = (v) => '<g filter="url(#' + c + '-sh)">' + v + "</g>";
  return a === "clear" ? l ? h(bc(o ? Al.l : Al.s, c)) + (o ? Fa(70, 20, 5.83, 1) + Fa(78.33, 41.67, 3.75, 0.8) + Fa(60, 71.67, 3.33, 0.6) : Fa(42, 12, 3.5, 1) + Fa(47, 25, 2.25, 0.8) + Fa(36, 43, 2, 0.6)) : h(Pu(c, o)) : a === "partly" ? h(l ? bc(o ? Al.lp : Al.sp, c) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + h(xd(o ? Jr.lp : Jr.sp, l ? "wbCloudLight" : "wbBright")) + (l ? o ? Fa(73.33, 16.67, 4.17, 0.9) : Fa(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? h(xd(o ? Jr.lc : Jr.s, l ? "wbCloudLight" : "wbBright")) + (l ? o ? Fa(15, 15, 3.75, 0.8) + Fa(76.67, 13.33, 2.92, 0.6) : Fa(9, 9, 2.25, 0.8) + Fa(46, 8, 1.75, 0.6) : "") : h(xd(o ? Jr.lr : Jr.s, "wbCloudLight")) + (a === "rain" ? Iu(o) : Hu(o));
}
const Ou = (a, l) => '<defs><filter id="' + a + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (l ? 1.6 : 1) + '" stdDeviation="' + (l ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Wu(a, l, o, c) {
  let h = Ru(a);
  const v = h === "night" || !!o;
  h === "night" && (h = "clear");
  const w = l ? 90 : 54;
  return { k: h, night: v, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + Ou(c, l) + Fu(h, v, l, c) + "</svg>" };
}
const qu = [
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
], _l = (a, l) => (qu[l % 8 * 8 + a % 8] + 0.5) / 64, io = (a) => [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)], Kn = (a, l, o) => [Math.round(a[0] + (l[0] - a[0]) * o), Math.round(a[1] + (l[1] - a[1]) * o), Math.round(a[2] + (l[2] - a[2]) * o)], js = (a) => a < 0 ? 0 : a > 1 ? 1 : a, wc = (a, l) => {
  let o = a * 374761393 + l * 668265263 ^ 1540483477;
  return o = Math.imul(o ^ o >>> 13, 1274126177), ((o ^ o >>> 16) >>> 0) / 4294967296;
}, vr = [255, 255, 255], aa = io("#26221e"), yc = io("#0288d1"), zu = io("#01579b"), kd = io(sa.cloudDay), Md = io(sa.cloudNight), El = io(sa.dusk), Sd = io(sa.sunEdge), ju = io(sa.sun), Vu = 10, xc = 0.3, Ko = 56, yp = 21;
function Gu(a) {
  const l = Array.from({ length: yp }, () => new Array(Ko).fill(void 0)), o = (w, A, x) => {
    l[A][w] = x;
  }, c = Kn(El, aa, 0.35), h = Kn(aa, vr, 0.22);
  for (let w = 0; w <= 6; w++) {
    const A = w < 2 ? Ko - 2 : Ko - 1;
    for (let x = 6 - w; x <= A; x++) o(x, w, w < 2 ? c : w === 6 ? h : aa);
  }
  const v = [El, Sd, Md, io(sa.skyRainDay), Kn(El, aa, 0.2), Kn(a, aa, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, A) => {
    const x = 9 + A * 6;
    for (let R = 0; R < w; R++) {
      const ve = v[(A * 2 + R * 3) % v.length];
      for (let ie = x; ie < x + 5; ie++)
        o(ie, 7 + R * 2, Kn(ve, aa, 0.12)), o(ie, 8 + R * 2, R === w - 1 ? Kn(ve, vr, 0.3) : ve);
      o(x + 5, 7 + R * 2, aa), o(x + 5, 8 + R * 2, aa);
    }
  });
  for (let w = 7; w <= 12; w++) o(5, w, aa);
  o(5, 13, Sd);
  for (let w = 7; w <= 14; w++) for (let A = 42; A <= 51; A++) o(A, w, A === 51 ? Md : kd);
  for (let w = 43; w <= 50; w += 2)
    o(w, 12, aa), o(w, 9, Kn(aa, kd, 0.4));
  for (let w = 40; w <= 53; w++) o(w, 14, w === 40 || w === 53 ? Md : kd);
  for (let w = 15; w <= 18; w++) for (let A = 46; A <= 49; A++) o(A, w, w === 18 ? aa : w === 16 ? Sd : El);
  for (let w = 15; w <= 19; w++) o(44, w, aa);
  return o(44, 20, ju), l;
}
function Uu(a, l, o, c) {
  const h = Math.max(1, Math.round(a)), v = Math.max(1, Math.round(l)), w = new Uint8ClampedArray(h * v * 4), A = io(c.skyClearDay), x = io(c.skyFogDay), R = Gu(A), ve = Math.round(v * 0.55), ie = js(1 - Math.log(o / xc) / Math.log(Vu / xc)), U = Kn(A, x, ie), $ = (W) => js((W - 0.1) / 0.9), ne = js((1 - Math.exp(-2 / o) - 0.2) / 0.8), Y = Math.round(h / 2 - Ko / 2), G = ve + 3;
  for (let W = 0; W < v; W++) {
    const pe = G - 1 - W, ee = W - G;
    for (let ue = 0; ue < h; ue++) {
      const J = ue - Y;
      let E, P;
      const re = pe >= 0 && pe < yp && J >= 0 && J < Ko ? R[pe][J] : void 0;
      if (re)
        E = re, P = ne;
      else if (pe >= 0 && pe <= 1 && J >= 4 - pe && J <= 5 - pe)
        E = Kn(vr, yc, 0.15), P = ne;
      else if (W < ve) {
        const Ie = js(((W + 0.5) / ve - 0.15) / 0.85) * 3, V = Math.min(3, Math.floor(Ie + _l(ue + 2, W + 5)));
        E = Kn(U, vr, V * 0.1), P = ie * 0.95;
      } else {
        const Ie = (W - ve + 0.5) / (v - ve), V = Math.min(1.5, 6e-3 / (Ie * Ie)), qe = js(Ie * 1.4) * 3, k = Math.min(3, Math.floor(qe + _l(ue + 1, W + 6)));
        E = Kn(yc, zu, k / 3);
        const _ = 1 + Math.round(Ie * 7), T = Math.floor(ue / (_ * 3)), I = 0.06 + 0.16 * Ie, me = ue % (_ * 3) < _;
        me && wc(T, W) < I ? E = Kn(E, vr, 0.18 + 0.1 * (1 - Ie)) : me && Ie > 0.5 && wc(T, W - 1) < I && (E = Kn(E, aa, 0.12)), P = $(1 - Math.exp(-V / o)), ee === 0 && J >= 3 && J <= 8 ? (E = Kn(E, vr, J < 6 ? 0.8 : 0.45), P = ne) : ee >= 0 && ee <= 2 && J >= Ko && J < Ko + 40 ? ((1 - (J - Ko) / 40) * (ee === 1 ? 0.9 : 0.5) > _l(ue, W + 3) && (E = Kn(E, vr, 0.5)), P = ne) : ee === 0 && J >= 6 && J < Ko && (E = Kn(E, aa, J % 2 === 0 ? 0.35 : 0.2), P = ne);
      }
      const Ae = P > _l(ue, W) ? x : E, H = (W * h + ue) * 4;
      w[H] = Ae[0], w[H + 1] = Ae[1], w[H + 2] = Ae[2], w[H + 3] = 255;
    }
  }
  return { data: w, w: h, h: v };
}
const Yu = {
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
}, Zu = 1.6;
function Ku(a, l) {
  const o = a ? Yu[String(a).toUpperCase()] : void 0;
  if (!o || !(l > 0)) return;
  const c = (v) => Math.abs(Math.log(v[2] / l)), h = o.reduce((v, w) => c(w) < c(v) ? w : v);
  return c(h) <= Math.log(Zu) ? { from: h[0], to: h[1], km: h[2] } : void 0;
}
const $u = (a, l) => l === "mi" ? a * 1.609344 : l === "m" ? a / 1e3 : l === "ft" ? a * 3048e-7 : l === "yd" ? a * 9144e-7 : a, Xu = (a) => a < 1 ? "very_poor" : a < 4 ? "poor" : a < 10 ? "moderate" : a < 20 ? "good" : a < 40 ? "very_good" : "excellent", oo = 6e4, Wt = 36e5, xo = 864e5, Us = 1440, Ju = 6, Qu = 10 * oo, kc = 3, ef = 3, Mc = { day: [6, 22], waking: [7, 23], all: [0, 24] }, tf = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], nf = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Sc = (a, l, o, c) => '<circle cx="' + a + '" cy="' + l + '" r="' + o + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((h) => {
  const v = Math.cos(h * Math.PI / 180), w = Math.sin(h * Math.PI / 180), A = o + 2, x = o + 2 + c;
  return "M" + (a + v * A).toFixed(2) + " " + (l + w * A).toFixed(2) + "L" + (a + v * x).toFixed(2) + " " + (l + w * x).toFixed(2);
}).join("") + '"/>', Vo = (a) => '<path d="' + nf + '"' + (a ? ' transform="' + a + '"' : "") + "/>", Go = (a) => '<path d="' + a + '"/>', Cc = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function af(a, l) {
  const o = "translate(0,-3)";
  switch (a) {
    case "sunny":
      return l ? Cc : Sc(12, 12, 4, 2.5);
    case "clear-night":
      return Cc;
    case "partlycloudy":
      return (l ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Sc(7.5, 7.5, 2.6, 1.4)) + Vo("translate(3.6,3) scale(.85)");
    case "cloudy":
      return Vo();
    case "fog":
      return Go("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return Vo(o) + Go("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return Vo(o) + Go("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return Vo(o) + Go("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return Vo(o) + Go("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return Vo(o) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return Vo(o) + Go("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return Vo(o) + Go("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return Go("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + Go("M12 8v5M12 16h.01");
  }
}
const Cd = (a, l) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + af(a, l) + "</svg>", of = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), rf = 30 * oo, sf = 7, lf = 3, Tc = 1, df = oo, cf = 15 * oo, pf = 5, yn = {
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
}, Ye = {
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
}, uf = {
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
}, ff = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], hf = Object.keys(Ye.phases), Dl = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, mf = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, xp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Bl = 100, Lc = "µg/m³", gf = "weather_alerts.air_quality_pollen", ql = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], vf = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, bf = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], wf = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, yf = { daily: 1, hourly: 2 }, je = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), qn = (a, l) => a.replace(/\{(\w+)\}/g, (o, c) => l[c] ?? ""), ts = (a) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + a + '"/></svg>', Ac = /* @__PURE__ */ new Map();
function xf(a) {
  let l = Ac.get(a);
  if (l === void 0) {
    const o = "http://www.w3.org/2000/svg", c = document.createElementNS(o, "svg"), h = document.createElementNS(o, "path");
    c.setAttribute("viewBox", "0 0 24 24"), c.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", h.setAttribute("d", a), c.append(h), document.body.append(c);
    const v = h.getBBox();
    c.remove();
    const w = Math.max(v.width, v.height), A = w ? 26 * 24 / w : 0, x = A / 24;
    l = w ? "width:" + A.toFixed(2) + "px;height:" + A.toFixed(2) + "px;translate:" + ((12 - v.x - v.width / 2) * x).toFixed(2) + "px " + ((12 - v.y - v.height / 2) * x).toFixed(2) + "px" : "", Ac.set(a, l);
  }
  return l ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + l + '"><path d="' + a + '"/></svg>' : ts(a);
}
const kf = () => {
  var a;
  return !!((a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Jt = (a) => a != null && a !== "" && Number.isFinite(Number(a)), _c = /* @__PURE__ */ new Map(), Ec = /* @__PURE__ */ new Map(), Td = /* @__PURE__ */ new WeakMap(), Mf = (a) => {
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
  const h = (l == null ? void 0 : l.number_format) === "none", v = { maximumFractionDigits: 2, ...o, ...h ? { useGrouping: !1 } : {} }, w = h ? "en-US" : Mf(l), A = JSON.stringify([w, v]);
  let x = _c.get(A);
  if (!x) {
    try {
      x = new Intl.NumberFormat(w, v);
    } catch {
      x = new Intl.NumberFormat(void 0, v);
    }
    _c.set(A, x);
  }
  return x.format(c);
}
const $d = (a) => {
  var l;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.language) || (a == null ? void 0 : a.language) || void 0;
};
function Sf(a) {
  if (!a) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Td.has(a)) return Td.get(a);
  const l = a.time_format, o = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? a.language : void 0).includes("10") : l === "12";
  return Td.set(a, o), o;
}
const kp = (a) => {
  var l, o;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.time_zone) === "server" && ((o = a == null ? void 0 : a.config) != null && o.time_zone) ? a.config.time_zone : void 0;
};
function Mp(a, l) {
  const o = JSON.stringify([a, l]);
  let c = Ec.get(o);
  if (!c) {
    try {
      c = new Intl.DateTimeFormat(a, l);
    } catch {
      c = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    Ec.set(o, c);
  }
  return c;
}
const Uo = (a, l) => Mp($d(l), { hour: "numeric", minute: "2-digit", hourCycle: Sf(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: kp(l) }).format(a), Dc = (a, l) => Mp($d(l), { weekday: "short", timeZone: kp(l) }).format(a), Cf = (a, l) => a.toLocaleDateString($d(l), { weekday: "narrow" }), un = (a, l) => Jt(l) ? fn(Math.round(Number(l)), a.locale) + "°" : "–", ns = (a) => {
  const l = new Date(a);
  return l.setHours(0, 0, 0, 0), l;
}, Qr = (a, l) => a.getFullYear() === l.getFullYear() && a.getMonth() === l.getMonth() && a.getDate() === l.getDate(), ga = Math.PI / 180, Tf = 2440588, Lf = 2451545, zl = ga * 23.4397, Af = 149598e3, _f = -0.833 * ga, Ef = 0.133 * ga, Bc = 5 * oo, Sp = (a) => a.getTime() / xo - 0.5 + Tf - Lf, Cp = (a, l) => Math.atan2(Math.sin(a) * Math.cos(zl) - Math.tan(l) * Math.sin(zl), Math.cos(a)), Tp = (a, l) => Math.asin(Math.sin(l) * Math.cos(zl) + Math.cos(l) * Math.sin(zl) * Math.sin(a)), Df = (a, l) => ga * (280.16 + 360.9856235 * a) - l, Bf = (a, l, o) => Math.asin(Math.sin(l) * Math.sin(o) + Math.cos(l) * Math.cos(o) * Math.cos(a));
function Lp(a) {
  const l = ga * (357.5291 + 0.98560028 * a), o = ga * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), c = l + o + ga * 102.9372 + Math.PI;
  return { ra: Cp(c, 0), dec: Tp(c, 0), dist: Af };
}
function Ap(a) {
  const l = ga * (218.316 + 13.176396 * a), o = ga * (134.963 + 13.064993 * a), c = ga * (93.272 + 13.22935 * a), h = l + ga * 6.289 * Math.sin(o), v = ga * 5.128 * Math.sin(c);
  return { ra: Cp(h, v), dec: Tp(h, v), dist: 385001 - 20905 * Math.cos(o) };
}
const _p = (a, l, o, c) => {
  const h = Sp(l), v = a(h);
  return Bf(Df(h, ga * -c) - v.ra, ga * o, v.dec);
}, Xd = (a, l, o) => _p(Lp, a, l, o), Rf = (a, l, o) => _p(Ap, a, l, o);
function Ep(a, l, o, c) {
  const h = {};
  let v = o.getTime(), w = a(o) - l;
  for (let A = v + Bc; A <= c.getTime(); A += Bc) {
    const x = a(new Date(A)) - l;
    if (w < 0 != x < 0) {
      const R = new Date(v + (A - v) * w / (w - x));
      x > 0 ? h.rise ?? (h.rise = R) : h.set ?? (h.set = R);
    }
    v = A, w = x;
  }
  return h;
}
const Dp = (a) => {
  const l = ns(a);
  return [l, new Date(l.getTime() + xo)];
}, Nf = (a, l, o) => Ep((c) => Xd(c, l, o), _f, ...Dp(a)), Pf = (a, l, o) => Ep((c) => Rf(c, l, o), Ef, ...Dp(a));
function If(a) {
  const l = Sp(a), o = Lp(l), c = Ap(l), h = Math.acos(Math.sin(o.dec) * Math.sin(c.dec) + Math.cos(o.dec) * Math.cos(c.dec) * Math.cos(o.ra - c.ra)), v = Math.atan2(o.dist * Math.sin(h), c.dist - o.dist * Math.cos(h)), w = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - c.ra), Math.sin(o.dec) * Math.cos(c.dec) - Math.cos(o.dec) * Math.sin(c.dec) * Math.cos(o.ra - c.ra));
  return { fraction: (1 + Math.cos(v)) / 2, phase: 0.5 + 0.5 * v * (w < 0 ? -1 : 1) / Math.PI };
}
const Hf = (a) => {
  const l = a * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, jl = (a) => {
  const l = a == null ? void 0 : a.config;
  return l && Jt(l.latitude) && Jt(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function Ld(a, l) {
  var R, ve, ie;
  const o = jl(a), c = o ? Nf(l, o.lat, o.lon) : {}, h = (R = a == null ? void 0 : a.states) == null ? void 0 : R["sun.sun"], v = ns(l).getTime(), w = (U) => {
    const $ = U ? new Date(U) : null;
    return $ && Number.isFinite($.getTime()) && ns($).getTime() === v ? $ : null;
  }, A = w((ve = h == null ? void 0 : h.attributes) == null ? void 0 : ve.next_rising), x = w((ie = h == null ? void 0 : h.attributes) == null ? void 0 : ie.next_setting);
  return A && (c.rise = A), x && (c.set = x), c;
}
function Ff(a) {
  var c;
  const l = (c = a == null ? void 0 : a.states) == null ? void 0 : c["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const o = jl(a);
  return o ? Xd(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const br = (a) => !!a && a.state !== "unavailable" && a.state !== "unknown", as = (a, l) => {
  var c;
  const o = (c = a.entities) == null ? void 0 : c[l];
  return !o || !o.hidden && !o.entity_category;
}, ha = (a, l, o) => {
  var c, h;
  for (const v of l) {
    const w = (c = a.states) == null ? void 0 : c[v];
    if (!br(w)) continue;
    const A = (h = w.attributes) == null ? void 0 : h[o];
    if (A != null && A !== "") return { stateObj: w, value: A };
  }
}, Of = (a, l) => l.map((o) => {
  var c;
  return (c = a.states) == null ? void 0 : c[o];
}).find(br), Wf = (a, l, o) => l.map((c) => {
  var h;
  return (h = a.states) == null ? void 0 : h[c];
}).find((c) => {
  var h;
  return br(c) && (((h = c.attributes) == null ? void 0 : h.supported_features) == null || Number(c.attributes.supported_features) & yf[o]);
});
function gr(a, l, o) {
  var v, w, A, x;
  const c = ((w = (v = a.config) == null ? void 0 : v.unit_system) == null ? void 0 : w.length) || "", h = (l == null ? void 0 : l.attributes) || {};
  switch (o) {
    case "precipitation":
      return h.precipitation_unit || (c === "km" ? "mm" : "in");
    case "pressure":
      return h.pressure_unit || (c === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return h.wind_speed_unit || c + "/h";
    case "visibility":
      return h.visibility_unit || c;
    default:
      return h.temperature_unit || ((x = (A = a.config) == null ? void 0 : A.unit_system) == null ? void 0 : x.temperature) || "";
  }
}
function Fl(a, l, o, c) {
  try {
    if (typeof a.formatEntityAttributeValueToParts == "function") {
      const [h, ...v] = a.formatEntityAttributeValueToParts(l, o, c).map((w) => w.value);
      return { number: h, unit: v.join("").trim() };
    }
  } catch {
  }
  return { number: fn(c, a.locale), unit: gr(a, l, o) };
}
function qf(a, l, o, c) {
  try {
    if (typeof a.formatEntityAttributeValue == "function") return a.formatEntityAttributeValue(l, o, c);
  } catch {
  }
  const h = Fl(a, l, o, c);
  return (h.number + " " + h.unit).trim();
}
function mr(a, l) {
  var c;
  try {
    if (typeof a.formatEntityState == "function") return a.formatEntityState(l);
  } catch {
  }
  const o = (c = l.attributes) == null ? void 0 : c.unit_of_measurement;
  return uf[l.state] || (o && Jt(l.state) ? fn(l.state, a.locale) + " " + o : l.state);
}
function Vs(a, l) {
  var o;
  try {
    if (typeof a.formatEntityName == "function") return a.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((o = l.attributes) == null ? void 0 : o.friendly_name) || l.entity_id;
}
const zf = (a) => a < 3 ? "low" : a < 6 ? "moderate" : a < 8 ? "high" : a < 11 ? "very_high" : "extreme", Rc = (a) => xp.find(([, l]) => a <= l)[0];
function jf(a, l) {
  if (l === "Beaufort") return Math.round(a);
  const o = l ? vf[l] : void 0;
  if (o === void 0) return;
  const c = bf.findIndex((h) => a * o < h);
  return c === -1 ? 12 : c;
}
const Nc = (a, l) => {
  const o = l ? wf[l] : void 0;
  return o === void 0 ? void 0 : a * o;
}, Pc = (a) => Object.keys(a.states || {}).find((l) => {
  var o, c;
  return l.startsWith("sensor.") && ((c = (o = a.entities) == null ? void 0 : o[l]) == null ? void 0 : c.platform) === "moon";
}), Ad = (a) => Object.values(a.states || {}).filter((l) => {
  var o, c;
  return l.entity_id.startsWith("sensor.") && ((o = l.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = l.attributes) == null ? void 0 : c.state_class) ?? "") && as(a, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function Vf(a) {
  var o;
  const l = {};
  for (const [c, h] of Object.entries(((o = a == null ? void 0 : a.core) == null ? void 0 : o.integration) ?? {})) {
    if (h && "integration_type" in h) {
      l[c] = h.categories;
      continue;
    }
    for (const [v, w] of Object.entries((h == null ? void 0 : h.integrations) ?? {})) l[v] = w == null ? void 0 : w.categories;
  }
  return l;
}
const Bp = (a, l, o) => {
  var h, v, w;
  const c = (v = (h = a.entities) == null ? void 0 : h[o]) == null ? void 0 : v.platform;
  return !!c && !!((w = l[c]) != null && w.includes(gf));
};
function Gf(a, l) {
  const o = /* @__PURE__ */ new Map();
  return Object.values(a.states || {}).filter((c) => {
    var h;
    return c.entity_id.startsWith("sensor.") && ql.includes(((h = c.attributes) == null ? void 0 : h.device_class) ?? "") && as(a, c.entity_id) && Bp(a, l, c.entity_id);
  }).sort((c, h) => c.entity_id.localeCompare(h.entity_id)).forEach((c) => {
    o.has(c.attributes.device_class) || o.set(c.attributes.device_class, c.entity_id);
  }), ql.map((c) => o.get(c)).filter(Boolean);
}
const Uf = (a, l) => Object.values(a.states || {}).filter((o) => {
  var c, h;
  return o.entity_id.startsWith("sensor.") && as(a, o.entity_id) && Bp(a, l, o.entity_id) && (((h = (c = a.entities) == null ? void 0 : c[o.entity_id]) == null ? void 0 : h.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function Ic(a, l, o) {
  const c = Math.max(l - a, 1e-6), h = o[o.length - 1], v = o.find((R) => c / R <= 4) ?? h * Math.ceil(c / (4 * h)), w = Math.floor(a / v) * v;
  let A = Math.ceil(l / v) * v;
  A === w && (A = w + v);
  const x = [];
  for (let R = w; R <= A + v / 1e3; R += v) x.push(R);
  return { min: w, max: A, ticks: x };
}
const Gs = (a, l, o) => {
  const c = (w) => [1, 3, 5].map((A) => parseInt(w.slice(A, A + 2), 16)), h = c(a), v = c(l);
  return "rgb(" + h.map((w, A) => Math.round(w + (v[A] - w) * o)).join(", ") + ")";
}, Yf = (a, l, o, c) => {
  const h = o * Math.abs(1 - 2 * c), v = c < 0.5 ? 0 : 1;
  return "M " + a + " " + (l - o) + " A " + o + " " + o + " 0 0 0 " + a + " " + (l + o) + " A " + h + " " + o + " 0 0 " + v + " " + a + " " + (l - o) + " Z";
}, ma = ({ icon: a, name: l, sub: o, visual: c, double: h, backdrop: v, cls: w }) => '<div class="wbCard wbSquare' + (h ? " wbDouble" : "") + (v ? " wbHasBackdrop" : "") + (w ? " " + w : "") + '">' + (v ? '<div class="wbBackdrop" aria-hidden="true">' + v + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + xf(a) + '</div><div class="wbText"><span class="wbName">' + je(l) + "</span>" + (o ? '<span class="wbSub">' + je(o) + "</span>" : "") + '</div></div><div class="wbVisual">' + c + "</div></div>", _i = (a, l) => '<div class="wbValue"><span class="wbNum">' + je(a) + "</span>" + (l ? '<span class="wbUnitV">' + je(l) + "</span>" : "") + "</div>";
function Zf(a) {
  const l = a.max - a.min || 1, o = (A) => 100 - (Math.min(a.max, Math.max(a.min, A)) - a.min) / l * 100, c = (A) => A / Us * 100 + "%", h = (A) => A.map((x) => x.t + "," + o(x.v)).join(" "), v = a.kind === "line" ? a.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + a.sun.map((A) => '<span class="wbDcSunMark" style="left:' + c(A.t) + '">' + ts(A.rise ? yn.sunsetUp : yn.sunsetDown) + je(A.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + a.ticks.map((A) => '<span style="top:' + o(A) + '%">' + je(a.format(A)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Us + ' 100" preserveAspectRatio="none">' + a.night.map(([A, x]) => '<rect class="wbDcNight" x="' + A + '" y="0" width="' + (x - A) + '" height="100"></rect>').join("") + a.ticks.map((A) => '<line class="wbDcGrid" x1="0" x2="' + Us + '" y1="' + o(A) + '" y2="' + o(A) + '" vector-effect="non-scaling-stroke"></line>').join("") + a.sun.map((A) => '<line class="wbDcSunLine" x1="' + A.t + '" x2="' + A.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (a.past && a.past.length > 1 ? '<polyline class="wbDcPast" points="' + h(a.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (v.length > 1 ? '<polygon class="wbDcArea" points="' + v[0].t + ",100 " + h(v) + " " + v[v.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + h(v) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (a.now ? '<line class="wbDcNow" x1="' + a.now.t + '" x2="' + a.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (a.kind === "bars" ? a.points.filter((A) => A.v > 0).map((A) => '<i class="wbDcBar" style="left:' + c(A.t + 12) + ";width:" + c(36) + ";height:" + (100 - o(A.v)) + '%"></i>').join("") : "") + (a.now && a.kind === "line" ? '<i class="wbDcDot" style="left:' + c(a.now.t) + ";top:" + o(a.now.v) + '%"></i>' : "") + (a.peak ? '<span class="wbDcPeak" style="left:' + c(a.peak.t) + ";top:" + o(a.peak.v) + '%">' + je(a.peak.label) + "</span>" : "") + (a.note ? '<span class="wbDcNote">' + je(a.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + a.hours.map((A) => '<span class="' + (A.minor ? "wbMinor" : "") + '" style="left:' + c(A.t) + '">' + je(A.label) + "</span>").join("") + "</div></div>", w;
}
function Kf(a, l) {
  const w = a.map((G) => G.value), A = Math.min(...w), x = Math.max(...w), R = x - A || 1, ve = (G) => G / (a.length - 1) * 300, ie = (G) => 18 + (1 - (G - A) / R) * 84, U = a.map((G, W) => ve(W) + "," + ie(G.value)).join(" "), $ = w.indexOf(x), ne = w.indexOf(A), Y = (G) => G === 0 ? "start" : G === a.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + U + ' 300,102"></polygon><polyline class="wbLine" points="' + U + '" vector-effect="non-scaling-stroke"></polyline><text x="' + ve($) + '" y="' + (ie(x) - 6) + '" text-anchor="' + Y($) + '">' + je(l(x)) + '</text><text x="' + ve(ne) + '" y="' + (ie(A) + 14) + '" text-anchor="' + Y(ne) + '">' + je(l(A)) + '</text><text x="0" y="120" text-anchor="start">' + je(a[0].label) + '</text><text x="300" y="120" text-anchor="end">' + je(a[a.length - 1].label) + "</text></svg>";
}
function $f(a, l) {
  const v = a.map((ie) => ie.value).concat([]), w = Math.min(...v) - 2, A = Math.max(...v) + 1, x = A - w || 1, R = 300 / a.length, ve = (ie) => (1 - (ie - w) / x) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + a.map((ie, U) => '<rect class="wbBar' + (ie.now ? " wbNowBar" : "") + '" x="' + (U * R + R * 0.2) + '" y="' + ve(ie.value) + '" width="' + R * 0.6 + '" height="' + (104 - ve(ie.value)) + '" rx="6"></rect><text x="' + (U * R + R / 2) + '" y="120" text-anchor="middle">' + je(ie.label) + "</text>").join("") + "</svg>";
}
const Xf = [
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
], Jf = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Hc = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Qf = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let eh = 0;
function Fc(a, { getHass: l, entityId: o, style: c = "bitmap", motion: h = !0, cards: v, onOpen: w, hoursWindow: A } = {}) {
  var ni, ba;
  const x = "wb" + ++eh + "-", R = document.createElement("div");
  R.className = "wb", R.dataset.style = c;
  const ve = document.createElement("div");
  ve.className = "wbBento", R.appendChild(ve), a.replaceChildren(R);
  const ie = ["aq_tile", "pollen_tile", "radar_tile"], U = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality", ...ie].filter((y) => !v || v.includes(y)), $ = { current: "wide", hourly: "wide", compared_to_average: "double" }, ne = {};
  U.forEach((y) => {
    const S = document.createElement("div");
    S.className = "wbItem", S.dataset.card = y, S.dataset.size = $[y] || "tile", S.hidden = !0, ve.appendChild(S), ne[y] = { el: S, html: null };
  });
  let Y = !1, G = null, W = 0, pe = -1, ee = !1, ue = null;
  const J = "homecore-next-view", P = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: (() => {
    try {
      return localStorage.getItem(J);
    } catch {
      return null;
    }
  })() === "bars" ? "bars" : "strip", aq: void 0 }, re = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Ae = /* @__PURE__ */ new Date(), H = /* @__PURE__ */ new Date();
  const Ie = {}, V = {}, qe = {}, k = (y) => {
    var S;
    return ((S = qe[y]) == null ? void 0 : S.forecast) ?? [];
  }, _ = (y, S) => {
    var L;
    return qe[S] ? (L = y.states) == null ? void 0 : L[qe[S].entityId] : void 0;
  };
  function T(y) {
    const S = V[y];
    S && (S.unsub.then((L) => {
      typeof L == "function" && L();
    }).catch(() => {
    }), delete V[y]), qe[y] && delete qe[y];
  }
  function I(y, S, L) {
    var Z;
    if (typeof ((Z = y.connection) == null ? void 0 : Z.subscribeMessage) != "function") return;
    const F = { entityId: L };
    try {
      F.unsub = Promise.resolve(y.connection.subscribeMessage((Q) => {
        Y || V[S] !== F || (Q != null && Q.forecast ? qe[S] = { entityId: L, forecast: Q.forecast } : delete qe[S], Un());
      }, { type: "weather/subscribe_forecast", forecast_type: S, entity_id: L }));
    } catch (Q) {
      F.unsub = Promise.reject(Q);
    }
    F.unsub.catch(() => {
      V[S] === F && delete V[S];
    }), V[S] = F;
  }
  function me(y, S) {
    var L;
    for (const F of ["daily", "hourly"]) {
      const Z = Wf(y, S, F);
      ((L = V[F]) == null ? void 0 : L.entityId) !== (Z == null ? void 0 : Z.entity_id) && (T(F), Z && I(y, F, Z.entity_id));
    }
  }
  const z = (y, S, L, F = !1) => y.callWS({
    type: "history/history_during_period",
    start_time: L.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [S],
    minimal_response: F,
    no_attributes: F,
    significant_changes_only: !1
  });
  async function le(y, S) {
    var de, ye, be;
    const L = ha(y, S, "pressure");
    if (!L) return;
    const F = L.stateObj.entity_id, Z = await z(y, F, new Date(Date.now() - 3 * Wt)), Q = (be = (ye = (de = Z == null ? void 0 : Z[F]) == null ? void 0 : de.find((He) => {
      var Ce;
      return typeof ((Ce = He.a) == null ? void 0 : Ce.pressure) == "number";
    })) == null ? void 0 : ye.a) == null ? void 0 : be.pressure;
    re.pressureHistory = typeof Q == "number" ? { entityId: F, value: Q } : void 0;
  }
  async function ge(y, S) {
    var ye;
    const L = ha(y, S, "temperature");
    if (!L) return;
    const F = L.stateObj.entity_id, Z = ns(/* @__PURE__ */ new Date()), Q = await z(y, F, new Date(Z.getTime() - sf * xo)), de = /* @__PURE__ */ new Map();
    for (const be of (Q == null ? void 0 : Q[F]) ?? []) {
      const He = (ye = be.a) == null ? void 0 : ye.temperature, Ce = new Date((be.lc ?? be.lu) * 1e3);
      if (typeof He != "number" || Ce >= Z) continue;
      const De = Ce.toDateString();
      de.set(De, Math.max(de.get(De) ?? -1 / 0, He));
    }
    re.temperatureHistory = { entityId: F, dailyHighs: [...de.values()], days: [...de.entries()].map(([be, He]) => ({ date: new Date(be), high: He })) };
  }
  async function xe(y) {
    const S = Ad(y);
    if (!S) return;
    const L = await y.callWS({ type: "recorder/statistic_during_period", statistic_id: S, rolling_window: { duration: { hours: 24 } } });
    re.rain = { entityId: S, change: (L == null ? void 0 : L.change) ?? void 0 };
  }
  function $e() {
    const y = l == null ? void 0 : l();
    if (!y || Y || typeof y.callWS != "function") return;
    const S = zn(y);
    re.lastFetch = Date.now(), [le(y, S), ge(y, S), xe(y)].forEach((L) => L.then(() => Un(), () => {
    }));
  }
  async function st() {
    const y = l == null ? void 0 : l();
    if (!y) return;
    const S = ha(y, zn(y), "temperature");
    if (!S) return;
    const L = S.stateObj.entity_id, F = ns(/* @__PURE__ */ new Date());
    try {
      const Z = await z(y, L, F), Q = (de) => ((Z == null ? void 0 : Z[L]) ?? []).map((ye) => {
        var be;
        return { time: ye.lu * 1e3, value: (be = ye.a) == null ? void 0 : be[de] };
      }).filter((ye) => typeof ye.value == "number");
      re.todayHistory = { day: F.toDateString(), fetched: Date.now(), temperature: Q("temperature"), humidity: Q("humidity") }, Un();
    } catch {
    }
  }
  async function At(y) {
    const S = l == null ? void 0 : l();
    if (S)
      try {
        const L = await z(S, y, new Date(Date.now() - 24 * Wt), !0), F = ((L == null ? void 0 : L[y]) ?? []).filter((Q) => Jt(Q.s)), Z = Math.max(1, Math.ceil(F.length / 48));
        re.aqHistory = { entityId: y, points: F.filter((Q, de) => de % Z === 0).map((Q) => ({ label: Uo(new Date(Q.lu * 1e3), S), value: Number(Q.s) })) }, Un();
      } catch {
      }
  }
  function Tn(y) {
    re.categories === void 0 && (re.categories = null, Promise.resolve().then(() => y.callWS({ type: "integration/descriptions" })).then((S) => {
      re.categories = Vf(S);
    }, () => {
      re.categories = {};
    }).then(() => Un()));
  }
  function zn(y) {
    var L;
    const S = Object.keys(y.states || {}).filter((F) => F.startsWith("weather.") && as(y, F)).sort();
    return o && ((L = y.states) != null && L[o]) ? [o, ...S.filter((F) => F !== o)] : S;
  }
  const mt = (y) => re.categories ? { air: Gf(y, re.categories), pollen: Uf(y, re.categories) } : { air: [], pollen: [] };
  function Xe(y, S, L, F) {
    if (c === "line") return '<span class="wbWx wbS' + S + ' wbLineIcon" aria-hidden="true">' + Cd(y, L || y === "clear-night") + "</span>";
    if (c === "smooth") {
      const Z = Wu(y, S === 90, L, x + "g-" + F);
      return '<span class="wbWx wbS' + S + " wb" + Z.k[0].toUpperCase() + Z.k.slice(1) + (Z.night ? " wbNight" : "") + '" aria-hidden="true">' + Z.svg + "</span>";
    }
    return '<span class="wbWx wbS' + S + '" aria-hidden="true"><canvas data-wb-wx="' + je(Vl(y, L)) + '" data-size="' + S + '"></canvas></span>';
  }
  const Lt = () => k("daily").filter((y) => y.templow != null).slice(0, Ju);
  function Je(y, S) {
    const L = new Date(S.datetime), F = /* @__PURE__ */ new Date();
    return Qr(L, F) ? Ye.today : Qr(L, new Date(F.getTime() + xo)) ? Ye.tomorrow : Dc(L, y);
  }
  const xn = (y, S, L) => L === 0 ? Je(y, S) : Dc(new Date(S.datetime), y);
  function Dn(y, S) {
    var Ce, De, Be, Fe;
    const L = Of(y, S);
    if (!L) return "";
    const F = Lt(), Z = P.openDay !== void 0 ? F[P.openDay] : void 0, Q = ha(y, S, "temperature"), de = F[0], ye = de && Qr(new Date(de.datetime), /* @__PURE__ */ new Date()), be = ((De = (Ce = y.config) == null ? void 0 : Ce.unit_system) == null ? void 0 : De.temperature) || ((Be = L.attributes) == null ? void 0 : Be.temperature_unit) || "";
    let He = '<div class="wbCard wbWeather' + (Z ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (Z ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + je(Ye.openPage) + '">' : '<div class="wbCurrent">') + Xe(L.state, 90, Ff(y), "now") + '<div class="wbTempBlock">' + (Q && Jt(Q.value) ? '<div class="wbTemp"><span class="wbDeg">' + je(fn(Math.round(Number(Q.value)), y.locale)) + '</span><span class="wbUnit">' + je(be) + "</span></div>" : "") + '<div class="wbPlace">' + je(((Fe = y.config) == null ? void 0 : Fe.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + je(mr(y, L)) + "</div>" + (ye && de.templow != null ? '<div class="wbRange">' + je(qn(Ye.range, { high: un(y, de.temperature), low: un(y, de.templow) })) + "</div>" : "") + "</div></div>";
    return He += bt(y), F.length && (He += '<div class="wbColumns" role="list">' + F.map((Te, Ve) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Ve + '" data-wb-focus="col-' + Ve + '"><span class="wbDay">' + je(xn(y, Te, Ve)) + "</span>" + Xe(Te.condition ?? "cloudy", 60, !1, "col" + Ve) + '<span class="wbTemps"><span class="wbHi">' + je(un(y, Te.temperature)) + '</span><span class="wbLo">' + je(un(y, Te.templow)) + "</span></span></button>").join("") + "</div>", He += '<div class="wbHalves" role="list">' + F.map((Te, Ve) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Ve + '" data-wb-focus="half-' + Ve + '">' + Xe(Te.condition ?? "cloudy", 40, !1, "half" + Ve) + '<span class="wbText"><span class="wbName">' + je(Je(y, Te)) + '</span><span class="wbSub">' + je(qn(Ye.highLow, { high: un(y, Te.temperature), low: un(y, Te.templow) })) + "</span></span></button>").join("") + "</div>"), He + "</div>" + (Z ? Ri(y, S, Z) : "") + "</div>";
  }
  const wr = {
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
  }, lt = {
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
  function Ze(y) {
    const S = Date.now(), L = k("hourly").filter((De) => new Date(De.datetime).getTime() > S - Wt).slice(0, 13);
    if (L.length < 2) return "";
    const F = (De) => Uo(new Date(De.datetime), y), Z = (De) => wr[De.condition] || "", Q = (De) => lt[De.condition] || De.condition;
    let de = Z(L[0]);
    if (!de) return "";
    let ye = L[0], be = 0;
    for (const De of L.slice(1))
      be === 2 || Q(De) === Q(ye) || !Z(De) || (de += (be ? " and " : ", ") + Z(De) + " from " + F(De), ye = De, be++);
    const He = Number(L[0].temperature), Ce = L.filter((De) => Jt(De.temperature));
    if (Jt(He) && Ce.length) {
      const De = Ce.reduce((Fe, Te) => Number(Te.temperature) < Number(Fe.temperature) ? Te : Fe), Be = Ce.reduce((Fe, Te) => Number(Te.temperature) > Number(Fe.temperature) ? Te : Fe);
      He - Number(De.temperature) >= 3 ? de += ", down to " + un(y, De.temperature) + " by " + F(De) : Number(Be.temperature) - He >= 3 && (de += ", up to " + un(y, Be.temperature) + " by " + F(Be));
    }
    return de[0].toUpperCase() + de.slice(1) + ".";
  }
  const bt = (y) => {
    const S = Ze(y);
    return S ? '<div class="wbSummary"><p class="wbSummaryText">' + je(S) + "</p></div>" : "";
  };
  function Mo(y) {
    const S = y.getTime(), L = Date.now() - Wt;
    return k("hourly").filter((F) => {
      const Z = new Date(F.datetime).getTime();
      return Z >= S && Z < S + xo && Z > L;
    });
  }
  function yr(y) {
    if (!y.length) return ["temperature"];
    const S = ["temperature"];
    return y.some((L) => L.precipitation != null || L.precipitation_probability != null) && S.push("precipitation"), y.some((L) => L.humidity != null) && S.push("humidity"), S;
  }
  function Ri(y, S, L) {
    const F = ns(new Date(L.datetime)), Z = Mo(F), Q = yr(Z), de = Q.includes(P.dayMode) ? P.dayMode : "temperature", ye = (be) => be === "humidity" ? Ye.humidity : Ye.modes[be];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Xe(L.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + je(Je(y, L)) + '</span><span class="wbSub">' + je(qn(Ye.highLow, { high: un(y, L.temperature), low: un(y, L.templow) })) + '</span></div><button class="wbBack" title="' + je(Ye.back) + '" data-wb="close-day" data-wb-focus="back-day">' + ts(yn.back) + "</button></div>" + (Q.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + Q.map((be) => '<button aria-pressed="' + (be === de) + '" data-wb="day-mode" data-mode="' + be + '" data-wb-focus="day-mode-' + be + '">' + je(ye(be)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Zf(Ln(y, S, F, Z, de)) + "</div></div>";
  }
  function Ln(y, S, L, F, Z) {
    var kr;
    const Q = L.getTime(), de = Date.now(), ye = Qr(L, /* @__PURE__ */ new Date()), be = (ft) => (ft - Q) / oo, He = (ft) => Uo(new Date(ft), y), Ce = (ft) => new Date(ft.datetime).getTime(), De = [0, 3, 6, 9, 12, 15, 18, 21].map((ft) => ({ t: ft * 60, label: He(Q + ft * Wt), minor: ft % 6 !== 0 })), { rise: Be, set: Fe } = Ld(y, L), Te = [], Ve = [];
    Be && (Te.push({ t: be(Be.getTime()), label: He(Be.getTime()), rise: !0 }), Ve.push([0, be(Be.getTime())])), Fe && (Te.push({ t: be(Fe.getTime()), label: He(Fe.getTime()), rise: !1 }), Ve.push([be(Fe.getTime()), Us]));
    const tt = jl(y);
    !Be && !Fe && tt && Xd(new Date(Q + xo / 2), tt.lat, tt.lon) < 0 && Ve.push([0, Us]);
    const Re = ye ? be(de) : void 0, et = { hours: De, sun: Te, night: Ve };
    if (!F.length && !ye) return { ...et, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ye.noHourly };
    if (Z === "precipitation") {
      const ft = F.some((kn) => kn.precipitation_probability != null), dn = F.map((kn) => ({ t: be(Ce(kn)), v: Number((ft ? kn.precipitation_probability : kn.precipitation) ?? 0) })), Xn = gr(y, _(y, "hourly"), "precipitation"), Ua = Math.max(0, ...dn.map((kn) => kn.v)), Aa = ft ? 100 : Ic(0, Math.max(Ua, 1), [0.5, 1, 2, 5, 10]).max, qi = (kn) => ft ? fn(kn, y.locale) + "%" : fn(kn, y.locale, { maximumFractionDigits: 1 }) + " " + Xn, ai = dn.find((kn) => kn.v === Ua);
      return {
        ...et,
        kind: "bars",
        points: dn,
        min: 0,
        max: Aa,
        ticks: [0, Aa / 2, Aa],
        format: qi,
        now: Re !== void 0 ? { t: Re, v: 0 } : void 0,
        peak: ai && Ua > 0 ? { t: ai.t + 30, v: ai.v, label: qi(ai.v) } : void 0,
        note: Ua > 0 ? void 0 : Ye.noRain
      };
    }
    const nt = Z === "humidity" ? "humidity" : "temperature", Kt = F.filter((ft) => ft[nt] != null && (!ye || Ce(ft) >= de)).map((ft) => ({ t: be(Ce(ft)), v: Number(ft[nt]) }));
    let Pe, Pt = [];
    if (Re !== void 0) {
      const ft = ha(y, S, nt);
      ft && Jt(ft.value) && (Pe = { t: Re, v: Number(ft.value) }, Kt.unshift(Pe)), Pt = (((kr = re.todayHistory) == null ? void 0 : kr.day) === L.toDateString() ? re.todayHistory[nt] : []).filter((Xn) => Xn.time <= de).map((Xn) => ({ t: Math.max(0, be(Xn.time)), v: Xn.value })), Pe && Pt.length && Pt.push(Pe);
    }
    const Vt = [...Pt, ...Kt];
    if (!Vt.length) return { ...et, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ye.noHourly };
    const ca = Vt.map((ft) => ft.v), wa = Ic(Math.min(...ca), Math.max(...ca), nt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    nt === "humidity" && (wa.min = Math.max(0, wa.min), wa.max = Math.min(100, wa.max), wa.ticks = wa.ticks.filter((ft) => ft >= 0 && ft <= 100));
    const Wi = nt === "humidity" ? (ft) => fn(ft, y.locale) + "%" : (ft) => un(y, ft), ya = nt === "temperature" ? Vt.reduce((ft, dn) => dn.v > ft.v ? dn : ft) : void 0;
    return { ...et, kind: "line", points: Kt, past: Pt, ...wa, format: Wi, now: Pe, peak: ya ? { ...ya, label: Wi(ya.v) } : void 0 };
  }
  function pt(y) {
    const S = ["temperature"];
    return y.some((L) => L.precipitation_probability != null || L.precipitation != null) && S.push("precipitation"), y.some((L) => L.wind_speed != null) && S.push("wind"), S;
  }
  function qt(y, S, L = kc) {
    var Q, de;
    const F = k("daily"), Z = [];
    for (let ye = 0; ye < L; ye++) for (const be of [!1, !0]) {
      const He = y.getTime() + (ye * 24 + (be ? 12 : 0)) * Wt, Ce = He + 12 * Wt, De = {};
      S.forEach((Fe) => {
        const Te = new Date(Fe.datetime).getTime();
        Fe.condition && Te >= He && Te < Ce && (De[Fe.condition] = (De[Fe.condition] ?? 0) + (of.has(Fe.condition) ? 2 : 1));
      });
      let Be = (Q = Object.entries(De).sort((Fe, Te) => Te[1] - Fe[1])[0]) == null ? void 0 : Q[0];
      if (!Be) {
        const Fe = new Date(He).toDateString();
        Be = ((de = F.find((Te) => new Date(Te.datetime).toDateString() === Fe)) == null ? void 0 : de.condition) ?? "cloudy";
      }
      Z.push({ cond: be && Be === "sunny" ? "clear-night" : Be, night: be });
    }
    return Z;
  }
  function xr(y, S, L) {
    const F = _(y, "hourly"), Z = S.precipitation_probability != null ? fn(S.precipitation_probability, y.locale) + "%" : "", Q = S.precipitation ? fn(S.precipitation, y.locale) + " " + gr(y, F, "precipitation") : "";
    switch (L) {
      case "precipitation":
        return Z ? [Z, Q] : [Q || "–", ""];
      case "wind":
        return S.wind_speed != null ? [fn(Math.round(S.wind_speed), y.locale), gr(y, F, "wind_speed")] : ["–", ""];
      default:
        return [un(y, S.temperature), (S.precipitation_probability ?? 0) >= 20 ? Z : ""];
    }
  }
  function Xo(y, S, L) {
    const [F, Z] = Mc[A == null ? void 0 : A()] || Mc.day, Q = [];
    for (let de = 0; de < 4 && Q.length < 3; de++) {
      const ye = /* @__PURE__ */ new Date();
      ye.setHours(0, 0, 0, 0), ye.setDate(ye.getDate() + de);
      const be = new Date(ye);
      be.setHours(Z, 0, 0, 0), ye.setHours(F, 0, 0, 0), !(be.getTime() <= L || !S.some((He) => {
        const Ce = new Date(He.datetime).getTime();
        return Ce >= ye.getTime() && Ce <= be.getTime();
      })) && Q.push({ a: ye.getTime(), b: be.getTime(), label: Je(y, { datetime: ye.toISOString() }) });
    }
    return Q;
  }
  function xt(y, S, L, F, Z, Q) {
    const de = (L.b - S.a) / Wt, ye = (Re) => ((Re - S.a) / Wt).toFixed(3), be = 80, He = 32, Ce = [];
    for (const Re = new Date(S.a - xo); Re.getTime() < L.b + xo; Re.setDate(Re.getDate() + 1)) {
      const { rise: et, set: nt } = Ld(y, new Date(Re));
      et && nt && Ce.push({ rise: et.getTime(), set: nt.getTime() });
    }
    const De = (Re, et) => be - (be - He) * Math.sin(Math.PI * (et - Re.rise) / (Re.set - Re.rise)), Be = (Re) => !Ce.some((et) => Re >= et.rise && Re <= et.set);
    let Fe = "", Te = "", Ve = "";
    Ce.forEach((Re, et) => {
      const nt = [];
      for (let Pe = Re.rise; Pe <= Re.set; Pe += 15 * oo) nt.push(ye(Pe) + "," + De(Re, Pe).toFixed(2));
      nt.push(ye(Re.set) + "," + be), Fe += '<polyline class="wbLineArc" points="' + nt.join(" ") + '"/>';
      const Kt = Ce[et + 1];
      Kt && (Fe += '<rect class="wbLineNight" x="' + ye(Re.set) + '" y="0" width="' + ((Kt.rise - Re.set) / Wt).toFixed(3) + '" height="100"/>'), [[Re.rise, "↑"], [Re.set, "↓"]].forEach(([Pe, Pt]) => {
        Pe < S.a || Pe > L.b || (Te += '<line class="wbLineEdge" x1="' + ye(Pe) + '" x2="' + ye(Pe) + '" y1="0" y2="100"/>', Ve += '<span class="wbLineTime" style="left:' + Q(Pe) + '">' + Pt + " " + je(Uo(new Date(Pe), y)) + "</span>");
      });
    });
    const tt = Ce.find((Re) => Z >= Re.rise && Z <= Re.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + de + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Fe + Te + '<line class="wbLineHorizon" x1="0" x2="' + de + '" y1="' + be + '" y2="' + be + '"/></svg>' + Ve + (tt ? '<span class="wbLineNow" style="left:' + Q(Z) + ";top:" + De(tt, Z) + '%">' + Cd("sunny", !1) + "</span>" : "") + F.filter((Re) => Re.entry && !Re.now).map((Re) => '<span class="wbLineGlyph' + Re.edge + '" style="left:' + Q(Re.t) + '">' + Cd(Re.entry.condition ?? "cloudy", Be(Re.t)) + "</span>").join("");
  }
  function ke(y, S) {
    delete Ie.hourly;
    const L = P.hourlyView === "bars" ? "bars" : "strip", F = '<div class="wbHeader"><h2 class="wbTitle">' + je(L === "bars" ? Ye.nextDays : Ye.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + je(Ye.showAs) + '">' + ["strip", "bars"].map((Pe) => '<button aria-pressed="' + (Pe === L) + '" data-wb="hourly-view" data-view="' + Pe + '" data-wb-focus="hourly-view-' + Pe + '">' + je(Ye.views[Pe]) + "</button>").join("") + "</div></div>";
    if (L === "bars") return Oe(y, S, F);
    const Z = k("hourly"), Q = Math.floor(Date.now() / oo) * oo, de = Z.filter((Pe) => new Date(Pe.datetime).getTime() > Q - Wt);
    if (!de.length) return "";
    const ye = pt(de), be = ye.includes(P.hourlyMode) ? P.hourlyMode : "temperature", He = Xo(y, Z, Q);
    if (!He.length) return "";
    const Ce = He[0], De = He[He.length - 1], Be = (Ce.b - Ce.a) / Wt, Fe = (Pe) => "calc(var(--wb-u) * " + ((Pe - Ce.a) / Wt).toFixed(3) + ")", Te = new Date(Ce.a);
    Te.setHours(6, 0, 0, 0), Te.getTime() > Ce.a && Te.setDate(Te.getDate() - 1);
    const Ve = Math.ceil((De.b - Te.getTime()) / xo);
    c !== "line" && (Ie.hourly = { segs: qt(Te, Z, Ve), seed: Te.getDate(), columns: Ve });
    const tt = (Pe) => Pe === Ce.a ? " wbFirst" : Pe === De.b ? " wbLast" : "", Re = [];
    for (let Pe = Ce.a; Pe < De.b; ) {
      const Pt = new Date(Pe);
      Pt.setHours(24, 0, 0, 0);
      const Vt = Math.min(Pt.getTime(), De.b);
      Re.push({ a: Pe, b: Vt, label: Je(y, { datetime: new Date(Pe).toISOString() }), page: He.find((ca) => ca.a >= Pe && ca.a < Vt) || He.find((ca) => ca.a < Vt && ca.b > Pe) }), Pe = Vt;
    }
    const et = Q > Ce.a && Q < De.b ? Math.floor((Q - Ce.a) / (2 * Wt)) * 2 : 0, nt = [];
    for (let Pe = Ce.a; Pe <= De.b; Pe += Wt) {
      const Pt = new Date(Pe), Vt = tt(Pe);
      !Vt && Pt.getHours() % ef || !Vt && (Math.abs(Ce.a - Pe) < 2 * Wt || Math.abs(De.b - Pe) < 2 * Wt) || Q >= Ce.a && Math.abs(Pe - Q) < 1.5 * Wt && !Vt || nt.push({ t: Pe, edge: Vt, label: Uo(Pt, y), entry: Pe >= Q - Wt ? Z.find((ca) => new Date(ca.datetime).getTime() === Pe) : void 0 });
    }
    Q > Ce.a && Q < Ce.b && nt.push({ t: Q, edge: Q - Ce.a < Wt ? " wbFirst" : Ce.b - Q < Wt ? " wbLast" : "", label: Ye.now, entry: de[0], now: !0 });
    const Kt = (Pe, Pt) => '<span class="wbMark' + Pe.edge + (Pe.now ? " wbNowMark" : "") + '" style="left:' + Fe(Pe.t) + '">' + Pt + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + F + (ye.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + ye.map((Pe) => '<button aria-pressed="' + (Pe === be) + '" data-wb="hourly-mode" data-mode="' + Pe + '" data-wb-focus="hourly-mode-' + Pe + '">' + je(Ye.modes[Pe]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + je(Ye.nextHours) + '" data-span="' + Be + '" data-start="' + et + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Be + ");width:calc(var(--wb-u) * " + (De.b - Ce.a) / Wt + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((De.b - Ce.a) / (2 * Wt)) + 1)].map((Pe, Pt) => '<i class="wbSnap" style="left:' + Fe(Ce.a + Pt * 2 * Wt) + '"></i>').join("") + '<div class="wbDays">' + Re.map((Pe, Pt) => {
      var Vt;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Pe.b - Pe.a) / Wt).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (Pt === 0 ? et : ((((Vt = Pe.page) == null ? void 0 : Vt.a) ?? Pe.a) - Ce.a) / Wt) + '" data-wb-focus="hours-day-' + Pt + '">' + je(Pe.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + nt.map((Pe) => Kt(Pe, je(Pe.label))).join("") + "</div>" + (c === "line" ? '<div class="wbSky wbLineSky">' + xt(y, Ce, De, nt, Q, Fe) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Fe(Te.getTime()) + ";width:calc(var(--wb-u) * " + Ve * 24 + ')"><canvas data-wb-strip="hourly"' + (c === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (Q > Ce.a ? '<i class="wbPast" style="width:' + Fe(Math.min(Q, De.b)) + '"></i><i class="wbNowLine" style="left:' + Fe(Q) + '"></i>' : "") + Re.slice(1).map((Pe) => '<i class="wbMidnight" style="left:' + Fe(Pe.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + nt.map((Pe) => {
      if (!Pe.entry) return "";
      const [Pt, Vt] = xr(y, Pe.entry, be);
      return Kt(Pe, '<span class="wbPrimaryV">' + je(Pt) + '</span><span class="wbSecondary">' + je(Vt) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function zt(y) {
    const S = tf, L = S.findIndex(([be]) => be >= y);
    if (L <= 0) return "rgb(" + S[L < 0 ? S.length - 1 : 0][1].join(",") + ")";
    const [F, Z] = S[L - 1], [Q, de] = S[L], ye = (y - F) / (Q - F);
    return "rgb(" + Z.map((be, He) => Math.round(be + (de[He] - be) * ye)).join(",") + ")";
  }
  function Oe(y, S, L) {
    var Fe;
    const F = k("daily").filter((Te) => Jt(Te.templow) && Jt(Te.temperature)).slice(0, 7);
    if (!F.length) return "";
    const Z = Math.min(...F.map((Te) => Number(Te.templow))), Q = Math.max(...F.map((Te) => Number(Te.temperature))), de = Math.max(1, Q - Z), ye = (Te) => Math.max(0, Math.min(100, (Te - Z) / de * 100)).toFixed(2), be = /F/.test(gr(y, _(y, "daily"), "temperature")), He = (Te) => be ? (Te - 32) / 1.8 : Te, Ce = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Te) => zt(He(Z + Te * de)) + " " + Te * 100 + "%").join(",") + ")", De = (Fe = ha(y, S, "temperature")) == null ? void 0 : Fe.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (pt(k("hourly").filter((Te) => new Date(Te.datetime).getTime() > Date.now() - Wt)).length > 1 ? " wbTabbed" : "") + '">' + L + '<div class="wbDayBars" role="list">' + F.map((Te, Ve) => {
      const tt = Je(y, Te), Re = Qr(new Date(Te.datetime), /* @__PURE__ */ new Date()), et = Number(Te.templow), nt = Number(Te.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + je(qn(Ye.rangeRow, { day: tt, low: un(y, et), high: un(y, nt) })) + '"><span class="wbRangeDay">' + je(tt) + "</span>" + Xe(Te.condition, 40, !1, "r" + Ve) + '<span class="wbRangeLo">' + je(un(y, et)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + Ce + ";clip-path:inset(0 " + (100 - ye(nt)) + "% 0 " + ye(et) + '% round 4px)"></i>' + (Re && Jt(De) ? '<i class="wbRangeNow" style="left:' + ye(Number(De)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + je(un(y, nt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  function jn(y) {
    const S = Ae, { rise: L, set: F } = Ld(y, S), Z = L && F ? Math.round((F.getTime() - L.getTime()) / oo) : 0, Q = Math.floor(Z / 60), de = Z % 60, ye = L && F ? (S.getTime() - L.getTime()) / (F.getTime() - L.getTime()) : -1, be = ye >= 0 && ye <= 1, He = Math.PI * (1 - Math.min(1, Math.max(0, ye))), Ce = 100 + 74 * Math.cos(He), De = 100 - 74 * Math.sin(He), Be = be ? Math.sin(Math.PI * ye) : 0, Fe = be ? Gs("#2e0a0d", "#43180a", Be) : "#0e0507", Te = be ? Gs("#7a1d12", "#8f400f", Be) : "#1c0709", Ve = Gs("#f60c08", "#ff8f00", Be), tt = Gs("#fd9b07", "#ffd84a", Be), Re = be ? Gs("#fd9b07", "#ffd84a", Be) : "#6b3a2a", et = (Kt) => Kt ? Uo(Kt, y) : "–", nt = L && F ? new Date((L.getTime() + F.getTime()) / 2) : null;
    return ma({
      icon: yn.sunny,
      name: Ye.sun,
      sub: Z ? qn(Ye.daylightShort, { hours: Q, minutes: de }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Fe + ", " + Te + ");--wb-sun-line:" + Re + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + x + 'sun-glow"><stop offset="0" stop-color="' + Ve + '"></stop><stop offset="0.45" stop-color="' + Ve + '"></stop><stop offset="1" stop-color="' + tt + '"></stop></radialGradient><clipPath id="' + x + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (be ? '<circle cx="' + Ce + '" cy="' + De + '" r="14" fill="url(#' + x + 'sun-glow)" clip-path="url(#' + x + 'above-horizon)"></circle>' : "") + (nt ? '<text class="wbSunTime wbNoon" x="100" y="1">' + je(et(nt)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + je(et(L)) + '</text><text class="wbSunTime" x="174" y="117">' + je(et(F)) + "</text></svg></div>"
    });
  }
  function Wa(y, S, L) {
    const F = (de) => x + "moon-" + de, Z = y > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + F("terminator") + ')" d="' + Yf(61, 61, 57.9, y) + '"' + (S ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", Q = (de, ye, be, He, Ce, De) => '<filter id="' + F(de) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + ye + '" numOctaves="' + be + '" seed="' + He + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Be) => "<feFunc" + Be + ' type="linear" slope="' + Ce + '" intercept="' + De + '"></feFunc' + Be + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + F("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + F("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + F("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + F("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + F("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + Q("mottle", "0.045", 4, 3, 1.8, -0.4) + Q("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + F("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + F("fill") + ')"></circle><g' + (L ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + F("soften") + ')">' + Xf.map(([de, ye, be, He, Ce, De]) => '<ellipse cx="' + de + '" cy="' + ye + '" rx="' + be + '" ry="' + He + '" fill-opacity="' + De + '" transform="rotate(' + Ce + " " + de + " " + ye + ')"></ellipse>').join("") + "</g>" + Jf.map(([de, ye, be]) => '<circle class="wbCrater" cx="' + de + '" cy="' + ye + '" r="' + be + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + F("glow") + ')">' + Qf.map(([de, ye]) => '<line x1="54.4" y1="95" x2="' + de + '" y2="' + ye + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + F("glow") + ')">' + Hc.map(([de, ye, be]) => '<circle cx="' + de + '" cy="' + ye + '" r="' + be * 2 + '"></circle>').join("") + "</g>" + Hc.map(([de, ye, be]) => '<circle class="wbBrightCenter" cx="' + de + '" cy="' + ye + '" r="' + be + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + F("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + F("grain") + ')"></rect>' + Z + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Ni(y) {
    const S = H, L = jl(y), F = (L == null ? void 0 : L.lat) ?? 0, Z = If(S), Q = Pc(y), de = Q ? y.states[Q] : void 0, ye = br(de) && hf.includes(de.state) ? de.state : Hf(Z.phase), { rise: be, set: He } = L ? Pf(S, L.lat, L.lon) : {}, Ce = Z.phase > 0.5 != F < 0, De = fn(Math.round(Z.fraction * 100), y.locale) + "%", Be = be ?? He, Fe = Be ? Uo(Be, y) : void 0;
    return ma({
      icon: yn.night,
      name: Ye.moon,
      sub: Ye.phases[ye],
      visual: '<div class="wbMoonBox">' + Wa(Z.fraction, Ce, F < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (Fe ? je(qn(be ? Ye.moonriseAt : Ye.moonsetAt, { time: Fe })) : "") + "</span><span>" + je(qn(Ye.lit, { illumination: De })) + "</span></div>"
    });
  }
  function Ge(y, S) {
    var Te;
    const L = ha(y, S, "wind_speed");
    if (!L || !Jt(L.value)) return "";
    const F = ha(y, S, "wind_gust_speed"), Z = ha(y, S, "wind_bearing"), Q = Z && Jt(Z.value) ? Number(Z.value) : void 0, de = jf(Number(L.value), (Te = L.stateObj.attributes) == null ? void 0 : Te.wind_speed_unit), ye = Fl(y, L.stateObj, "wind_speed", L.value), be = Q !== void 0 ? Ye.cardinal[ff[((Q + 11.25) / 22.5 | 0) % 16]] : void 0, He = F ? qf(y, F.stateObj, "wind_gust_speed", F.value) : void 0, Ce = [be ? qn(Ye.windFrom, { direction: be }) : void 0, de !== void 0 ? de + " " + Ye.beaufort : void 0].filter(Boolean).join(" · ") || He, De = (Ve, tt) => {
      const Re = (Ve - 90) * Math.PI / 180;
      return [100 + tt * Math.cos(Re), 100 + tt * Math.sin(Re)];
    }, Be = Array.from({ length: 36 }, (Ve, tt) => tt * 10).map((Ve) => {
      const tt = Ve % 90 === 0, [Re, et] = De(Ve, 97), [nt, Kt] = De(Ve, tt ? 83 : 89);
      return '<line class="wbTick' + (tt ? " wbMajor" : "") + '" x1="' + Re + '" y1="' + et + '" x2="' + nt + '" y2="' + Kt + '"></line>';
    }).join(""), Fe = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Ve, tt]) => {
      const [Re, et] = De(tt, 64);
      return '<text class="wbLetter' + (Ve === "n" ? " wbNorth" : "") + '" x="' + Re + '" y="' + et + '">' + je(Ye.cardinal[Ve]) + "</text>";
    }).join("");
    return ma({ icon: yn.windy, name: Ye.wind, sub: Ce, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Be + Fe + (Q !== void 0 ? '<path class="wbMarker" transform="rotate(' + Q + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + je(ye.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + je(ye.unit) + "</text></svg>" });
  }
  function ot(y, S) {
    const L = ha(y, S, "uv_index");
    if (!L || !Jt(L.value)) return "";
    const F = Number(L.value), Z = Ye.uvLevel[zf(F)], Q = /* @__PURE__ */ new Date();
    Q.setHours(23, 59, 59, 999);
    const de = k("hourly").filter((Ve) => Ve.uv_index != null && new Date(Ve.datetime) > /* @__PURE__ */ new Date() && new Date(Ve.datetime) <= Q).reduce((Ve, tt) => !Ve || tt.uv_index > Ve.uv ? { uv: tt.uv_index, time: new Date(tt.datetime) } : Ve, void 0), ye = 48, be = 100, He = 130, Ce = (Ve) => -ye + Math.min(Ve, 11) / 11 * 2 * ye, De = (Ve, tt) => {
      const Re = Ve * Math.PI / 180;
      return [be + tt * Math.sin(Re), He - tt * Math.cos(Re)];
    }, Be = (Ve, tt, Re) => {
      const [et, nt] = De(Ce(Ve), Re), [Kt, Pe] = De(Ce(tt), Re);
      return "M " + et + " " + nt + " A " + Re + " " + Re + " 0 0 1 " + Kt + " " + Pe;
    }, Te = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, Dl.low], [3, 6, Dl.moderate], [6, 8, Dl.high], [8, 11, Dl.very_high]].map(([Ve, tt, Re]) => '<path class="wbVuZone" d="' + Be(Ve, tt, 96) + '" style="stroke:' + Re + '"></path>').join("") + Array.from({ length: 21 }, (Ve, tt) => ({ angle: -ye + tt * (2 * ye / 20), major: tt % 2 === 0 })).map(({ angle: Ve, major: tt }) => {
      const [Re, et] = De(Ve, 102), [nt, Kt] = De(Ve, tt ? 114 : 108);
      return '<line class="wbVuTick' + (tt ? " wbMajor" : "") + '" x1="' + Re + '" y1="' + et + '" x2="' + nt + '" y2="' + Kt + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + Ce(F) + 'deg"><line x1="' + be + '" y1="' + He + '" x2="' + be + '" y2="' + (He - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + je(fn(Math.round(F), y.locale)) + "</text></svg>";
    return ma({
      icon: yn.sunnyAlert,
      name: Ye.metrics.uv_index,
      sub: de && de.uv > F ? qn(Ye.uvPeak, { level: Z, uv_index: fn(Math.round(de.uv), y.locale), time: Uo(de.time, y) }) : Z,
      visual: Te
    });
  }
  function jt(y) {
    const S = k("daily")[0], L = re.temperatureHistory;
    if (!S || new Date(S.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Jt(S.temperature) || !L || L.dailyHighs.length < lf) return "";
    const F = Number(S.temperature), Z = L.dailyHighs.reduce((nt, Kt) => nt + Kt, 0) / L.dailyHighs.length, Q = Math.round(F - Z) || 0, de = Q > 0 ? "above" : Q < 0 ? "below" : "same", ye = [...L.days, { date: /* @__PURE__ */ new Date(), high: F, today: !0 }], be = 220, He = 158, Ce = 22, De = 20, Be = ye.map((nt) => nt.high).concat(Z), Fe = Math.min(...Be) - 3, Te = Math.max(...Be) + 1, Ve = (nt) => Ce + (1 - (nt - Fe) / (Te - Fe)) * (He - Ce - De), tt = be / ye.length, Re = Math.min(18, tt * 0.6), et = '<svg class="wbCompareBars" viewBox="0 0 ' + be + " " + He + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + be + '" y1="' + Ve(Z) + '" y2="' + Ve(Z) + '"></line>' + ye.map((nt, Kt) => {
      const Pe = Kt * tt + tt / 2, Pt = Ve(nt.high), Vt = nt.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + Vt + '" x="' + (Pe - Re / 2) + '" y="' + Pt + '" width="' + Re + '" height="' + (He - De - Pt) + '" rx="5"></rect><text class="wbAvgValue' + Vt + '" x="' + Pe + '" y="' + (Pt - 6) + '">' + je(un(y, nt.high)) + '</text><text class="wbAvgDay' + Vt + '" x="' + Pe + '" y="' + (He - 4) + '">' + je(Cf(nt.date, y)) + "</text>";
    }).join("") + "</svg>";
    return ma({
      icon: yn.chartLine,
      name: Ye.metrics.compared_to_average,
      double: !0,
      sub: qn(Ye.highsLastDays, { days: L.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (Q > 0 ? "+" : "") + je(un(y, Q)) + '</div><div class="wbCompareWords">' + je(Ye.average[de]) + '</div><div class="wbCompareTemps">' + je(qn(Ye.todayVsAverage, { today: un(y, F), average: un(y, Z) })) + "</div></div>" + et + "</div>"
    });
  }
  function So(y, S) {
    const L = ha(y, S, "humidity");
    if (!L || !Jt(L.value)) return "";
    const F = ha(y, S, "dew_point"), Z = Math.max(0, Math.min(100, Number(L.value)));
    return ma({
      icon: yn.waterPercent,
      name: Ye.metrics.humidity,
      sub: F && Jt(F.value) ? qn(Ye.dewPoint, { dew_point: un(y, F.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + Z + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + _i(fn(Math.round(Number(L.value)), y.locale), "%") + "</div>"
    });
  }
  function Vn(y, S) {
    var He, Ce;
    const L = ha(y, S, "pressure");
    if (!L || !Jt(L.value)) return "";
    const F = Number(L.value), Z = (He = L.stateObj.attributes) == null ? void 0 : He.pressure_unit, Q = Nc(F, Z), de = ((Ce = re.pressureHistory) == null ? void 0 : Ce.entityId) === L.stateObj.entity_id ? Nc(re.pressureHistory.value, Z) : void 0;
    let ye;
    if (Q !== void 0 && de !== void 0) {
      const De = Q - de;
      ye = De >= Tc ? "rising" : De <= -Tc ? "falling" : "steady";
    }
    const be = Fl(y, L.stateObj, "pressure", Math.round(F));
    return ma({
      icon: yn.gauge,
      name: Ye.metrics.pressure,
      sub: ye ? Ye.pressure[ye] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + _i(be.number) + '<span class="wbTapeUnit">' + je(be.unit) + "</span></div>" + (Q !== void 0 ? tn(y, Q) : "") + "</div>"
    });
  }
  function tn(y, S) {
    const Z = Math.floor(S) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (Q, de) => Z + de).map((Q) => {
      const de = 100 - (Q - S) * 9;
      if (de < 22 || de > 178) return "";
      const ye = Q % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(de - 100) / 100) + '"><line class="wbTapeTick" x1="' + (ye ? 2 : 8) + '" x2="26" y1="' + de + '" y2="' + de + '"></line>' + (ye ? '<text class="wbTapeLabel" x="33" y="' + de + '">' + je(fn(Q, y.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + je(Ye.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + je(Ye.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Jo(y) {
    var be, He;
    const S = Ad(y), L = S ? y.states[S] : void 0;
    if (!L || ((be = re.rain) == null ? void 0 : be.entityId) !== S || !Jt(re.rain.change)) return "";
    const F = ((He = L.attributes) == null ? void 0 : He.unit_of_measurement) ?? "", Z = _(y, "hourly"), Q = Date.now() + xo, de = k("hourly").filter((Ce) => Ce.precipitation != null && new Date(Ce.datetime).getTime() <= Q), ye = de.reduce((Ce, De) => Ce + Number(De.precipitation), 0);
    return ma({
      icon: yn.rainy,
      name: Ye.metrics.precipitation,
      sub: Z && de.length ? qn(Ye.rainExpected, { amount: fn(ye, y.locale, { maximumFractionDigits: 1 }) + " " + gr(y, Z, "precipitation") }) : Ye.rainLast24h,
      visual: _i(fn(re.rain.change, y.locale, { maximumFractionDigits: 1 }), F) + (de.length > 1 ? $f(de.map((Ce) => ({ label: "", value: Number(Ce.precipitation) }))) : "")
    });
  }
  function ln(y, S) {
    const L = ha(y, S, "visibility");
    if (!L || !Jt(L.value)) return "";
    const F = Fl(y, L.stateObj, "visibility", L.value), Z = $u(Number(L.value), gr(y, L.stateObj, "visibility"));
    return ma({
      icon: yn.eyeOutline,
      name: Ye.metrics.visibility,
      sub: Ye.visibilityLevel[Xu(Z)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + Z + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + je(qa(y, Z)) + '</div><div class="wbSeaValue">' + _i(F.number, F.unit) + "</div></div>"
    });
  }
  function qa(y, S) {
    var Q;
    const L = Ku((Q = y.config) == null ? void 0 : Q.country, S);
    if (L) return qn(Ye.visibilityLandmarks, { from: L.from, to: L.to });
    const F = S / pf * 60;
    if (F < 60) {
      const de = F < 5 ? Math.max(1, Math.round(F)) : 5 * Math.round(F / 5);
      if (de < 60) return qn(Ye.walkMinutes, { minutes: fn(de, y.locale) });
    }
    const Z = Math.max(1, Math.round(F / 30) / 2);
    return Z < 8 ? qn(Ye.walkHours, { hours: fn(Z, y.locale) }) : Ye.walkDay;
  }
  function za(y) {
    re.categories === void 0 && Tn(y);
    const S = mt(y), L = (be) => be.map((He) => y.states[He]).filter(br), F = L(S.air), Z = L(S.pollen);
    if (!F.length && !Z.length) return "";
    const Q = [...F, ...Z], de = (be) => Z.includes(be) ? yn.flower : yn.airFilter, ye = Q.find((be) => be.entity_id === P.aq);
    return ye ? Co(y, ye, de(ye)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + je(Ye.airQuality) + '</h2></div><div class="wbAqTiles">' + Q.map((be) => '<button class="wbTile" data-wb="aq-open" data-entity="' + je(be.entity_id) + '"><span class="wbChip">' + ts(de(be)) + '</span><span class="wbText"><span class="wbName">' + je(Vs(y, be)) + '</span><span class="wbSub">' + je(mr(y, be)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Co(y, S, L) {
    var Ce, De, Be;
    const F = ((Ce = S.attributes) == null ? void 0 : Ce.unit_of_measurement) ?? "", Z = ((De = S.attributes) == null ? void 0 : De.device_class) === "pm25" && F === Lc && Jt(S.state), Q = Number(S.state), de = Z ? Rc(Q) : void 0, ye = ((Be = re.aqHistory) == null ? void 0 : Be.entityId) === S.entity_id ? re.aqHistory.points : void 0, be = (Fe) => Math.min(100, Math.max(0, Fe / Bl * 100));
    let He;
    if (ye && ye.length > 1) He = Kf(ye, (Fe) => (fn(Fe, y.locale, { maximumFractionDigits: 1 }) + " " + F).trim());
    else if (de) {
      let Fe = 0;
      const Te = xp.map(([Ve, tt]) => {
        const Re = be(Math.min(tt, Bl)), et = mf[Ve] + " " + Fe + "% " + Re + "%";
        return Fe = Re, et;
      });
      He = '<div class="wbScale" role="meter" aria-label="' + je(Ye.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Bl + '" aria-valuenow="' + Q + '" style="background:linear-gradient(to right, ' + Te.join(", ") + ')"><i style="left:' + be(Q) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Bl + " " + Lc + "</span></div>";
    } else He = '<span class="wbGraphNote"><span>' + je(mr(y, S)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + ts(L) + '</span><span class="wbText"><span class="wbName">' + je(Vs(y, S)) + '</span><span class="wbSub">' + je(mr(y, S)) + (de ? " · " + je(Ye.aqLevel[de]) : "") + '</span></span><button class="wbBack" title="' + je(Ye.back) + '" data-wb="aq-close">' + ts(yn.back) + '</button></div><div class="wbGraph">' + He + "</div></div></div>";
  }
  const Yt = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, ja = (y) => y <= 50 ? "Good" : y <= 100 ? "Moderate" : y <= 150 ? "Unhealthy for some" : y <= 200 ? "Unhealthy" : y <= 300 ? "Very unhealthy" : "Hazardous";
  function Gn(y) {
    const S = /* @__PURE__ */ new Map();
    return Object.values(y.states || {}).filter((L) => {
      var F;
      return L.entity_id.startsWith("sensor.") && ql.includes(((F = L.attributes) == null ? void 0 : F.device_class) ?? "") && br(L) && as(y, L.entity_id);
    }).sort((L, F) => L.entity_id.localeCompare(F.entity_id)).forEach((L) => {
      S.has(L.attributes.device_class) || S.set(L.attributes.device_class, L);
    }), ql.map((L) => S.get(L)).filter(Boolean);
  }
  const Va = (y) => Object.values(y.states || {}).filter((S) => {
    var L, F;
    return S.entity_id.startsWith("sensor.") && br(S) && as(y, S.entity_id) && (((F = (L = y.entities) == null ? void 0 : L[S.entity_id]) == null ? void 0 : F.translation_key) ?? S.entity_id).toLowerCase().includes("pollen");
  }), ro = ["none", "very_low", "low", "moderate", "high", "very_high"], an = (y) => Jt(y.state) ? Number(y.state) : ro.indexOf(String(y.state).toLowerCase().replace(/ /g, "_")), Ga = (y) => {
    const S = String(y).replace(/_/g, " ");
    return S[0].toUpperCase() + S.slice(1);
  }, la = (y) => y.length ? '<div class="wbBaseRows">' + y.map(([S, L]) => '<span class="wbBaseRow"><span>' + je(S) + "</span><span>" + je(L) + "</span></span>").join("") + "</div>" : "";
  function Qo(y) {
    const S = Gn(y), L = S[0];
    if (!L) return ma({ icon: yn.airFilter, name: Ye.airQuality, sub: Ye.noAir, visual: _i("–", ""), cls: "wbBase" });
    const F = L.attributes.device_class, Z = Number(L.state), Q = Jt(L.state), de = F === "aqi" && Q ? ja(Z) : F === "pm25" && Q ? Yt[Rc(Z)] : mr(y, L);
    return ma({
      icon: yn.airFilter,
      name: Ye.airQuality,
      sub: de,
      cls: "wbBase",
      visual: _i(Q ? fn(Math.round(Z), y.locale) : String(L.state), F === "aqi" ? "AQI" : L.attributes.unit_of_measurement || "") + la(S.slice(1, 3).map((ye) => [Vs(y, ye), mr(y, ye)]))
    });
  }
  function Pi(y) {
    const S = Va(y).sort((Z, Q) => an(Q) - an(Z));
    if (!S.length) return ma({ icon: yn.flower, name: Ye.pollen, sub: Ye.noPollen, visual: _i("–", ""), cls: "wbBase" });
    const L = S[0], F = (Z) => Jt(Z.state) ? mr(y, Z) : Ga(Z.state);
    return ma({
      icon: yn.flower,
      name: Ye.pollen,
      sub: Vs(y, L) + " · " + F(L),
      cls: "wbBase",
      visual: _i(F(L), "") + la(S.slice(1, 3).map((Z) => [Vs(y, Z), F(Z)]))
    });
  }
  function Ii(y) {
    const S = Date.now(), L = k("hourly").filter((Q) => {
      const de = new Date(Q.datetime).getTime();
      return de > S - Wt && de < S + 12 * Wt;
    }), F = L.find((Q) => (Q.precipitation_probability ?? 0) >= 50 || (Q.precipitation ?? 0) >= 0.2), Z = F ? qn(Ye.rainFrom, { time: Uo(new Date(Math.max(S, new Date(F.datetime).getTime())), y) }) : L.length ? Ye.noRain12 : void 0;
    return ma({ icon: yn.radar, name: Ye.rainRadar, sub: Z, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const is = {
    current: Dn,
    hourly: ke,
    sun: jn,
    moon: Ni,
    wind: Ge,
    uv_index: ot,
    compared_to_average: jt,
    humidity: So,
    pressure: Vn,
    precipitation: Jo,
    visibility: ln,
    air_quality: za,
    aq_tile: Qo,
    pollen_tile: Pi,
    radar_tile: Ii
  };
  function kt(y) {
    var He, Ce, De;
    const S = l == null ? void 0 : l();
    if (!S || Y) return;
    const L = zn(S);
    me(S, L), re.lastFetch || $e();
    const F = mt(S), Z = Pc(S), Q = Ad(S), de = [
      ...L.map((Be) => S.states[Be]),
      S.states["sun.sun"],
      Z && S.states[Z],
      Q && S.states[Q],
      ...F.air.map((Be) => S.states[Be]),
      ...F.pollen.map((Be) => S.states[Be]),
      ...U.some((Be) => ie.includes(Be)) ? [...Gn(S), ...Va(S)] : [],
      S.locale,
      S.config,
      S.entities,
      Math.floor(Date.now() / oo)
    ];
    if (!y && G && de.length === G.length && de.every((Be, Fe) => Be === G[Fe])) return;
    G = de;
    const ye = R.getRootNode(), be = ye.activeElement || document.activeElement;
    for (const Be of U) {
      const Fe = ne[Be];
      let Te = "";
      try {
        Te = is[Be](S, L) || "";
      } catch {
        Te = "";
      }
      if (Te === Fe.html) continue;
      const Ve = be && Fe.el.contains(be) ? (He = be.dataset) == null ? void 0 : He.wbFocus : void 0, tt = Fe.el.querySelector(".wbStripScroll"), Re = tt ? tt.scrollLeft : null;
      Fe.html = Te, Fe.el.hidden = !Te, Fe.el.innerHTML = Te;
      const et = Fe.el.querySelector(".wbStripScroll");
      et && Re != null ? et.scrollTo({ left: Re }) : et != null && et.dataset.start && et.scrollTo({ left: Number(et.dataset.start) * et.clientWidth / Number(et.dataset.span) }), Ve && !ue && ((Ce = Fe.el.querySelector('[data-wb-focus="' + Ve + '"]')) == null || Ce.focus());
    }
    ue && ((De = R.querySelector('[data-wb-focus="' + ue + '"]')) == null || De.focus(), ue = null), St(performance.now());
  }
  function Un() {
    ee || Y || (ee = !0, queueMicrotask(() => {
      ee = !1, kt(!0);
    }));
  }
  function Hi() {
    const y = getComputedStyle(R), S = (de) => y.getPropertyValue(de).trim(), L = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([de, ye]) => {
      S(ye) && (L[de] = S(ye));
    });
    const F = S("--color-text-primary") || "#f1f1f1", Z = S("--color-bg-card") || "#222222", Q = !!R.closest(".light");
    return { colors: { ...sa, ...L }, ink: Q ? F : Z, paper: Q ? Z : F };
  }
  const Fi = (y, S) => {
    var L;
    y.width !== S.w && (y.width = S.w), y.height !== S.h && (y.height = S.h), (L = y.getContext("2d")) == null || L.putImageData(new ImageData(S.data, S.w, S.h), 0, 0);
  }, Bn = () => h && !kf();
  function Bt(y, S) {
    R.querySelectorAll("canvas[data-wb-strip]").forEach((L) => on(L, Ie[L.dataset.wbStrip], y, S));
  }
  function on(y, S, L, F) {
    if (!S || !y.getClientRects().length) return;
    const Z = y.clientWidth, Q = y.clientHeight;
    if (!Z || !Q) return;
    const de = { width: Z, height: Q, columns: S.columns || kc, colors: F.colors, clock: L, ambient: Bn(), seed: S.seed, soft: 1.5 };
    if (c === "smooth") {
      const ye = Math.min(2, window.devicePixelRatio || 1), be = Math.round(Z * ye), He = Math.round(Q * ye);
      y.width !== be && (y.width = be), y.height !== He && (y.height = He);
      const Ce = y.getContext("2d");
      if (!Ce) return;
      Ce.setTransform(ye, 0, 0, ye, 0, 0), Du(Ce, S.segs, de);
    } else Fi(y, Eu(S.segs, { ...de, px: 2, oneBit: c === "onebit", ink: F.ink, paper: F.paper }));
  }
  function St(y) {
    if (Y) return;
    const S = Hi();
    if (c !== "smooth") {
      const L = Bn();
      R.querySelectorAll("canvas[data-wb-wx]").forEach((F) => {
        F.getClientRects().length && Fi(F, dp(qd(F.dataset.wbWx, S.colors), { size: Number(F.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: S.colors, ink: S.ink, paper: S.paper, clock: y, idle: L }));
      });
    }
    R.querySelectorAll("canvas[data-wb-sea]").forEach((L) => {
      const F = L.clientWidth, Z = L.clientHeight, Q = Number(L.dataset.wbSea), de = F + "x" + Z + ":" + Q + ":" + S.colors.skyClearDay;
      !F || !Z || !(Q > 0) || L.dataset.painted === de || (L.dataset.painted = de, Fi(L, Uu(F, Z, Q, S.colors)));
    }), Bt(y, S);
  }
  function so(y) {
    if (W = 0, !(Y || !Bn())) {
      if (!document.hidden)
        if (c === "smooth") Bt(y, Hi());
        else {
          const S = Math.floor(y / 100);
          S !== pe && (pe = S, St(y));
        }
      W = requestAnimationFrame(so);
    }
  }
  function La() {
    R.classList.toggle("wbMotion", Bn()), !W && !Y && Bn() && (W = requestAnimationFrame(so));
  }
  function To(y) {
    var L, F;
    const S = (F = (L = y.target).closest) == null ? void 0 : F.call(L, "[data-wb]");
    if (!(!S || !R.contains(S))) {
      switch (S.dataset.wb) {
        case "day": {
          P.openDay = Number(S.dataset.index), P.opener = S.dataset.wbFocus, ue = "back-day";
          const Z = Lt()[P.openDay], Q = !re.todayHistory || re.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - re.todayHistory.fetched > Qu;
          Z && Qr(new Date(Z.datetime), /* @__PURE__ */ new Date()) && Q && st();
          break;
        }
        case "close-day":
          P.openDay = void 0, ue = P.opener, P.opener = void 0;
          break;
        case "open-page":
          w == null || w();
          return;
        case "day-mode":
          P.dayMode = S.dataset.mode;
          break;
        case "hourly-mode":
          P.hourlyMode = S.dataset.mode;
          break;
        case "hourly-view":
          P.hourlyView = S.dataset.view;
          try {
            localStorage.setItem(J, P.hourlyView);
          } catch {
          }
          break;
        case "hours-day": {
          const Z = R.querySelector(".wbStripScroll");
          Z && Z.scrollTo({ left: Number(S.dataset.hours) * Z.clientWidth / Number(Z.dataset.span), behavior: "smooth" });
          return;
        }
        case "aq-open":
          P.aq = S.dataset.entity, At(P.aq);
          break;
        case "aq-close":
          P.aq = void 0;
          break;
        default:
          return;
      }
      kt(!0);
    }
  }
  function Rn(y) {
    var S, L;
    y.key === "Escape" && P.openDay !== void 0 && ((L = (S = y.target).closest) != null && L.call(S, '[data-wb-open="day"]')) && (P.openDay = void 0, ue = P.opener, P.opener = void 0, kt(!0));
  }
  let Nn = null;
  function ei(y) {
    var L, F;
    const S = (F = (L = y.target).closest) == null ? void 0 : F.call(L, ".wbStripScroll");
    !S || y.button !== 0 || (Nn = { startX: y.pageX, left: S.scrollLeft, moved: !1 }, S.classList.add("wbHeld"), window.addEventListener("mousemove", ti), window.addEventListener("mouseup", va, { once: !0 }));
  }
  function ti(y) {
    const S = R.querySelector(".wbStripScroll");
    if (!Nn || !S) return;
    const L = y.pageX - Nn.startX;
    !Nn.moved && Math.abs(L) > 1 && (Nn.moved = !0, S.classList.add("wbDragging")), S.scrollLeft = Nn.left - L;
  }
  function va() {
    Nn = null, window.removeEventListener("mousemove", ti);
    const y = R.querySelector(".wbStripScroll");
    if (!y) return;
    y.classList.remove("wbDragging", "wbHeld");
    const S = [...y.querySelectorAll(".wbSnap")];
    if (S.length) {
      const L = S.reduce((F, Z) => Math.abs(Z.offsetLeft - y.scrollLeft) < Math.abs(F.offsetLeft - y.scrollLeft) ? Z : F);
      y.scrollTo({ left: L.offsetLeft, behavior: "smooth" });
    }
  }
  R.addEventListener("click", To), R.addEventListener("keydown", Rn), R.addEventListener("mousedown", ei);
  const da = typeof ResizeObserver == "function" ? new ResizeObserver(() => St(performance.now())) : null;
  da == null || da.observe(R);
  const $n = (ni = window.matchMedia) == null ? void 0 : ni.call(window, "(prefers-reduced-motion: reduce)"), Oi = () => {
    La(), St(performance.now());
  };
  (ba = $n == null ? void 0 : $n.addEventListener) == null || ba.call($n, "change", Oi);
  const Lo = [
    setInterval(() => {
      Ae = /* @__PURE__ */ new Date(), kt(!0);
    }, df),
    setInterval(() => {
      H = /* @__PURE__ */ new Date(), kt(!0);
    }, cf),
    setInterval($e, rf)
  ];
  return kt(!0), La(), {
    update() {
      kt(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      kt(!0);
    },
    setStyle(y) {
      !y || y === c || (c = y, R.dataset.style = c, kt(!0), La());
    },
    destroy() {
      var y;
      Y = !0, Lo.forEach(clearInterval), W && cancelAnimationFrame(W), W = 0, da == null || da.disconnect(), (y = $n == null ? void 0 : $n.removeEventListener) == null || y.call($n, "change", Oi), va(), R.removeEventListener("click", To), R.removeEventListener("keydown", Rn), R.removeEventListener("mousedown", ei), ["daily", "hourly"].forEach(T), R.remove();
    }
  };
}
const Ys = "#E1E1E1", Oc = "#F7F4F0", _d = "#03a9f4", Tt = 14, Dt = 172;
let th = 0;
const Qt = (a) => Math.round(a * 100) / 100, ko = (a, l, o) => Math.max(l, Math.min(o, a)), $o = (a, l, o, c, h, v) => '<rect x="' + Qt(a) + '" y="' + Qt(l) + '" width="' + Qt(o) + '" height="' + Qt(c) + '" fill="' + h + '"' + (v != null ? ' opacity="' + v + '"' : "") + "/>", Ed = (a) => a.map((l, o) => (o ? "L" : "M") + Qt(l[0]) + " " + Qt(l[1])).join("");
function Dd(a) {
  const l = (a == null ? void 0 : a.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const Ei = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function nh(a) {
  const l = a < 2 ? a + 24 : a;
  let o = Ei[0], c = Ei[Ei.length - 1];
  for (let A = 0; A < Ei.length - 1; A++) if (l >= Ei[A][0] && l <= Ei[A + 1][0]) {
    o = Ei[A], c = Ei[A + 1];
    break;
  }
  const h = (l - o[0]) / (c[0] - o[0]), v = h * h * (3 - 2 * h), w = (A, x) => {
    const R = parseInt(A.slice(1), 16), ve = parseInt(x.slice(1), 16);
    return "#" + [16, 8, 0].map((ie) => Math.round((R >> ie & 255) + ((ve >> ie & 255) - (R >> ie & 255)) * v).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(o[1][0], c[1][0]), bot: w(o[1][1], c[1][1]), warm: w(o[1][2], c[1][2]), cool: w(o[1][3], c[1][3]), op: o[1][4] + (c[1][4] - o[1][4]) * v, t: l };
}
function ah(a) {
  const l = parseInt(a.slice(1), 16), o = (l >> 16 & 255) / 255, c = (l >> 8 & 255) / 255, h = (l & 255) / 255, v = Math.max(o, c, h), w = Math.min(o, c, h);
  let A = 0, x = 0;
  const R = (v + w) / 2;
  if (v !== w) {
    const ve = v - w;
    x = R > 0.5 ? ve / (2 - v - w) : ve / (v + w), A = (v === o ? (c - h) / ve + (c < h ? 6 : 0) : v === c ? (h - o) / ve + 2 : (o - c) / ve + 4) / 6;
  }
  return [A * 360, x * 100, R * 100];
}
function Rp(a, l, o) {
  l = ko(l, 0, 100) / 100, o = ko(o, 0, 100) / 100;
  const c = (w) => (w + a / 30) % 12, h = l * Math.min(o, 1 - o), v = (w) => o - h * Math.max(-1, Math.min(c(w) - 3, Math.min(9 - c(w), 1)));
  return "#" + [v(0), v(8), v(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [Np, Pp, Ip] = ah(Ys), Wc = Rp(Np, Pp, Math.max(6, Ip - 14)), oh = Rp(Np, Pp, Math.min(96, Ip + 16));
function ih(a, l, o, c, h) {
  const v = Dt / 2, w = Dt * 0.12, A = v - (v - w) * a, x = (ne) => ne ** 1.3, R = ko(o, -1.5, 1.5), ve = (ne) => -(Math.abs(R) * 4.6 * ne ** 1.5) * Math.sign(R), ie = a * 1.4, U = (ne, Y) => {
    const G = Math.min(4.8, Math.abs(o) * 2.6) * (Y ? 1 : -1) * Math.sign(o || 1), W = Y ? ne + A : ne, pe = Y ? ne : ne + A, ee = (Ae) => W + ve(Ae) + G * Math.sin(Ae * Math.PI * 1.2 + c) * x(Ae) * 1.4 + ie * Math.sin(Ae * Math.PI * 2 + c * 0.6) * x(Ae) * (Y ? 1 : -1), ue = [[pe, Tt]];
    for (let Ae = 0; Ae <= 12; Ae++) ue.push([ee(Ae / 12), Tt + Dt * Ae / 12]);
    ue.push([pe, Tt + Dt]);
    let J = '<path d="' + Ed(ue) + 'Z" fill="' + Ys + '"/>';
    if (h) return J;
    const E = 1.35 + ((Y ? o > 0 : o < 0) ? 0.35 : 0), P = (Ae) => {
      const H = Ae / 7, Ie = Y ? 1 - H : H, V = (1 - Ie) ** 1.3, qe = ne + A * H;
      return Array.from({ length: 13 }, (k, _) => {
        const T = _ / 12;
        return [qe + ve(T) * V + G * E * Math.sin(T * Math.PI * 1.2 + c - Ie * 3.2) * x(T) * 1.4 * V + ie * 1.6 * Math.sin(T * Math.PI * 2 + c * 0.6 - Ie * 2.5) * x(T) * a * (0.4 + 0.6 * V), Tt + Dt * T];
      });
    }, re = [1, 2, 3, 4, 5, 6].map(P);
    for (let Ae = 0; Ae < 6; Ae += 2) J += '<path d="' + Ed(re[Ae]) + Ed(re[Ae + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return J;
  }, $ = v - (v - w) * l;
  return { body: U(Tt, !0) + U(Tt + Dt - A, !1), rails: [{ x: Tt + $ - 4, y: Tt, w: 4, h: Dt }, { x: Tt + Dt - $, y: Tt, w: 4, h: Dt }], head: 6.4 };
}
function rh(a, l, o) {
  const c = Dt * (1 - a);
  let h = "";
  if (c > 1 && (h += $o(Tt, Tt, Dt, c, Ys), !o))
    for (let v = 1; v < 7; v += 2) h += $o(Tt + Dt * v / 7, Tt, Dt / 7, c, "#fff");
  return { body: h, rails: [{ x: Tt, y: Tt + Dt * (1 - l) - 7, w: Dt, h: 11 }], head: 10.4 };
}
function sh(a, l, o, c) {
  const h = 9 - 7 * (o / 100), v = Tt + Dt * (1 - a), w = Math.ceil(Dt / 10) + 1, A = Tt + h / 2, x = (Tt + Dt - h / 2 - A) / (w - 1), R = 0.8, ve = 0.6, ie = Array.from({ length: w }, (ne, Y) => Math.max(A + Y * ve, Math.min(A + Y * x, v - h / 2 - (w - 1 - Y) * ve))), U = ie.slice(0, -1).map((ne, Y) => ko((ie[Y + 1] - ne - ve) / (x - ve), 0, 1));
  U.push(U[w - 2]);
  let $ = "";
  return ie.forEach((ne, Y) => {
    const G = R + (h - R) * U[Y], W = Math.max(0.5, G / 2), pe = Math.max(0.4, G * 0.114);
    $ += $o(Tt, ne - W, Dt, Math.max(1, G), Ys), !c && G > 2.2 && ($ += $o(Tt, ne + W - pe, Dt, pe, Wc) + $o(Tt, ne - W, Dt, pe * 0.55, oh, 0.75));
  }), c || [0.22, 0.78].forEach((ne) => {
    $ += $o(Tt + Dt * ne - 0.7, Tt, 1.4, Math.max(0, ie[w - 1] + 1 - Tt), Wc, 0.85);
  }), { body: $, rails: [{ x: Tt, y: Tt + Dt * (1 - l) - 8, w: Dt, h: 8 }], head: 8.8 };
}
const qc = (a, l, o, c, h, v, w) => a === "curtain" ? ih(l, o, h, v, w) : a === "venetian" ? sh(l, o, c, w) : rh(l, o, w);
function lh(a, l) {
  let o = "", c = "";
  return l.forEach((h) => {
    const v = h.w > h.h, w = ko(v ? Tt + Dt / 2 : h.x + h.w / 2, 17, 183), A = ko(v ? h.y + h.h / 2 : Tt + Dt / 2, 17, 183);
    o += v ? $o(Tt, ko(h.y + h.h / 2, Tt, Tt + Dt) - 1, Dt, 2, _d) : $o(ko(h.x + h.w / 2, Tt, Tt + Dt) - 1, Tt, 2, Dt, _d);
    const x = v ? "M" + Qt(w - 4) + " " + Qt(A - 3) + "l4 -3l4 3M" + Qt(w - 4) + " " + Qt(A + 3) + "l4 3l4 -3" : "M" + Qt(w - 3) + " " + Qt(A - 4) + "l-3 4l3 4M" + Qt(w + 3) + " " + Qt(A - 4) + "l3 4l-3 4";
    c += '<circle cx="' + Qt(w) + '" cy="' + Qt(A) + '" r="11" fill="' + _d + '" filter="url(#' + a + 's)"/><path d="' + x + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: c };
}
function dh(a, l) {
  const o = /* @__PURE__ */ new Date(), c = nh(o.getHours() + o.getMinutes() / 60), h = 42 + 18 * Math.sin(c.t * 0.5), v = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, w = qc(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), A = l.ghostAlpha > 4e-3 && l.ghost != null ? qc(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", x = l.grip > 4e-3 ? lh(a, w.rails) : null, R = (ve) => $o(Tt, Tt, Dt, Dt, ve);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + a + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + a + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + a + 'w" cx="' + Qt(h) + '%" cy="' + Qt(v) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + Qt(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + a + 'k" cx="' + Qt(100 - h * 0.8) + '%" cy="' + Qt(100 - v * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + Qt(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + a + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Oc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + a + 'c)">' + R("url(#" + a + "l)") + R("url(#" + a + "w)") + R("url(#" + a + "k)") + (A ? '<g opacity="' + Qt(l.ghostAlpha) + '">' + A + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + Ys + '" filter="url(#' + a + 's)"/></g>' + (x ? '<g clip-path="url(#' + a + 'c)" opacity="' + Qt(l.grip) + '">' + x.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Oc + '" stroke-width="3"/>' + (x ? '<g opacity="' + Qt(l.grip) + '">' + x.knobs + "</g>" : "") + "</svg>";
}
function ch({ onMove: a, onSet: l }) {
  var J;
  const o = "cv" + ++th, c = document.createElement("div");
  c.className = "tfCoverArt";
  const h = (J = window.matchMedia) == null ? void 0 : J.call(window, "(pointer: coarse)").matches;
  let v = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let A = 0, x = !1, R = !1, ve = null, ie = 0, U = 0;
  const $ = () => (v == null ? void 0 : v.kind) === "curtain" ? "x" : "y", ne = () => ve || x || R || v.moving || v.target != null ? 1 : h ? performance.now() < U ? 1 : 0.4 : 0, Y = () => {
    c.innerHTML = dh(o, { kind: v.kind, pos: w.pos, bar: v.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function G(E) {
    A = 0;
    const P = w.last ? Math.min(0.064, (E - w.last) / 1e3) : 1 / 60, re = P * 60;
    w.last = E;
    const Ae = v.pos - w.pos, H = w.pos;
    w.pos += Math.sign(Ae) * Math.min(Math.abs(Ae), Math.max(10.5, Math.abs(Ae) * 1.4) * P), Math.abs(v.pos - w.pos) < 0.03 && (w.pos = v.pos), w.vel = w.vel * 0.86 + (w.pos - H) / re * 0.14, Math.abs(w.vel) < 0.015 && w.pos === v.pos && (w.vel = 0), (w.pos !== H || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * re);
    const Ie = v.tilt - w.tilt;
    w.tilt += Math.sign(Ie) * Math.min(Math.abs(Ie), Math.max(60, Math.abs(Ie) * 4) * P);
    const V = ne();
    w.grip += (V - w.grip) * Math.min(1, P * (V > w.grip ? 11 : 3.5)), Math.abs(V - w.grip) < 0.01 && (w.grip = V);
    const qe = v.target != null && Math.abs(v.target - w.pos) > 0.5 ? 0.22 : 0;
    v.target != null && (w.gpos = v.target), w.ghost += (qe - w.ghost) * Math.min(1, P * (qe > w.ghost ? 16 : 3)), Math.abs(qe - w.ghost) < 4e-3 && (w.ghost = qe), Y(), w.pos !== v.pos || w.vel || w.tilt !== v.tilt || w.grip !== V || w.ghost !== qe ? A = requestAnimationFrame(G) : w.last = 0;
  }
  const W = () => {
    v && !A && (A = requestAnimationFrame(G));
  }, pe = setInterval(() => {
    v && !A && Y();
  }, 60 * 1e3), ee = (E) => {
    const P = c.getBoundingClientRect();
    return $() === "x" ? (E.clientX - P.left) / P.width : (E.clientY - P.top) / P.height;
  };
  c.addEventListener("pointerdown", (E) => {
    var Ae;
    if (!(v != null && v.canSet) || E.button > 0) return;
    E.preventDefault(), (Ae = c.setPointerCapture) == null || Ae.call(c, E.pointerId);
    const P = v.target ?? v.pos, re = c.getBoundingClientRect();
    ve = { p0: ee(E), from: P, x0: E.clientX, value: null, side: null }, v.kind === "curtain" && P > 0 && (ve.side = (E.clientX - re.left) / re.width < 0.5 ? "L" : "R"), W();
  }), c.addEventListener("pointermove", (E) => {
    if (!ve) return;
    let P;
    if (v.kind === "curtain") {
      if (!ve.side) {
        const Ae = E.clientX - ve.x0;
        if (Math.abs(Ae) < 4) return;
        ve.side = Ae < 0 ? "L" : "R";
      }
      const re = (Dt / 2 - Dt * 0.12) / 200;
      P = ve.from + (ve.side === "L" ? -1 : 1) * ((ee(E) - ve.p0) / re) * 100;
    } else P = ve.from - (ee(E) - ve.p0) / (Dt / 200) * 100;
    ve.value = ko(P, 0, 100), a(ve.value);
  });
  const ue = () => {
    if (!ve) return;
    const E = ve.value;
    ve = null, E != null && l(Math.round(E)), W();
  };
  return c.addEventListener("pointerup", ue), c.addEventListener("pointercancel", ue), c.addEventListener("lostpointercapture", ue), c.addEventListener("pointerenter", () => {
    x = !0, W();
  }), c.addEventListener("pointerleave", () => {
    x = !1, W();
  }), c.addEventListener("focus", () => {
    R = c.matches(":focus-visible"), W();
  }), c.addEventListener("blur", () => {
    R = !1, W();
  }), c.addEventListener("keydown", (E) => {
    if (!(v != null && v.canSet)) return;
    const P = Math.round(v.target ?? v.pos), re = E.shiftKey ? 10 : 1, Ae = { ArrowUp: P + re, ArrowRight: P + re, ArrowDown: P - re, ArrowLeft: P - re, PageUp: P + 25, PageDown: P - 25, Home: 0, End: 100 }[E.key];
    if (Ae == null) return;
    E.preventDefault();
    const H = ko(Ae, 0, 100);
    a(H), clearTimeout(ie), ie = setTimeout(() => l(H), 500);
  }), {
    el: c,
    update(E) {
      const P = !v;
      v = E, P && (w.pos = v.pos, w.tilt = v.tilt, U = performance.now() + 1500, h && setTimeout(W, 1600)), c.classList.toggle("x", $() === "x"), c.classList.toggle("y", $() === "y"), v.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(v.target ?? v.pos))), c.setAttribute("aria-orientation", $() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", v.name + (v.canSet ? " position" : "")), c.setAttribute("aria-valuetext", v.text), W();
    },
    destroy() {
      cancelAnimationFrame(A), A = 0, clearInterval(pe), clearTimeout(ie), c.remove();
    }
  };
}
const zc = "move-assistant-density", Di = {
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
}, se = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Bd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', jc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', ph = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Rl = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Vc = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Gc = 1, uh = 4, Uc = 16, Yc = 32, fh = 128, hh = 256, Zc = 16384, mh = 1, gh = 2, Kc = 4, vh = 8, bh = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, $c = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, wh = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Rd = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, Xc = "move_assistant_house", Jc = "move-assistant-house-used", yh = ["switch", "fan", "input_boolean", "automation"], Qc = "move-assistant-house-look", xh = [["popup", "Popup"], ["sheet", "Sheet"]], kh = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Mh = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], Sh = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Nd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Ch = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Th = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', ep = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', tp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', np = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Hp = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + a.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", ap = Hp(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Lh = Hp(["M20 6L9 17L4 12"]), yo = (a, l = "") => '<span class="tfAreaGlyph" data-icon-for="' + se(a || "") + '"' + (l ? ' data-icon-name="' + se(l) + '"' : "") + "></span>", Ah = (a) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (a ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', _h = 1, Eh = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], op = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Pd = ["hs", "xy", "rgb", "rgbw", "rgbww"], Nl = ["door", "window", "garage_door", "opening"], ip = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Pl = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Dh = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Bh = 10, Rh = 20, Nh = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Ph = ["living room", "bedroom", "office"];
function Ih(a, { config: l, getHass: o }) {
  var wo, Ws, nn;
  const c = (e) => a.getElementById(e), h = c("app"), w = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let A = Di.get(zc) === "1", x = {};
  const R = (e) => {
    var n;
    return (n = o()) == null ? void 0 : n.callWS(e);
  }, ve = (e, n, i) => R({ type: "call_service", domain: e, service: n, service_data: i }), ie = a.querySelector("#appearancePane .toggleList");
  ie && !c("densityToggle") && (ie.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    A = !A, Di.set(zc, A ? "1" : "0"), J();
  }));
  const U = [
    ["weather", "Weather", "The forecast under Home.", (e) => e.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (e) => e.startsWith("sensor.") && xt(e).device_class === "power" && /^(W|kW)$/.test(xt(e).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (e) => e.startsWith("alarm_control_panel.")]
  ], $ = (e, n, i, d) => '<div class="themeChoice" id="' + e + '" role="group" aria-label="' + n + '">' + d.map(([u, m]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + i + '="' + u + '">' + m + "</button>").join("") + "</div>", ne = (e, n, i, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + e + "</strong>" + (n ? '<div class="status">' + n + "</div>" : "") + "</div>" + i + "</div>";
  function Y() {
    var M, D, N, O, ce, Se;
    if (!w || c("housePane")) return;
    const e = c("settingsView");
    e.querySelector(".settingsTitle").textContent = "HomeCore";
    const n = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], i = (Ne, X) => '<div class="houseTab' + (Ne === "look" ? " active" : "") + '" data-house-pane="' + Ne + '"><section class="card">' + X + "</section></div>";
    e.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + n.map(([Ne, X]) => '<button class="tab segBtn' + (Ne === "look" ? " active" : "") + '" type="button" data-house-tab="' + Ne + '">' + X + "</button>").join("") + "</div>" + i("look", '<div class="toggleList" id="houseLook"></div>') + i("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + i("sources", '<div class="toggleList">' + U.map(([Ne, X, we]) => ne(X, we, '<select class="settingsSelect" data-source="' + Ne + '" aria-label="' + X + '"></select>')).join("") + "</div>") + i("sums", '<div class="toggleList">' + Object.entries(Rd).map(([Ne, X]) => ne(X.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + Ne + '" aria-label="' + X.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = c("houseLook");
    [(M = e.querySelector(".themeBtn")) == null ? void 0 : M.closest(".toggleRow"), (D = c("densityToggle")) == null ? void 0 : D.closest(".toggleRow"), (N = c("moreInfoChoice")) == null ? void 0 : N.closest(".toggleRow"), (O = c("namesChoice")) == null ? void 0 : O.closest(".toggleRow"), (ce = c("hoursChoice")) == null ? void 0 : ce.closest(".toggleRow"), (Se = c("wxStyleChoice")) == null ? void 0 : Se.closest(".toggleRow")].forEach((Ne) => Ne && d.appendChild(Ne)), d.insertAdjacentHTML("beforeend", ne("Lights", "How lights show on the house page.", $("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + ne("Pad", "What the Dual Axis Controller’s pad sets on its tile.", $("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const u = c("housePane"), m = u.querySelector(".houseTabs"), f = m.querySelector(".rubberIndicator"), b = (Ne) => {
      const X = m.querySelector(".tab.active");
      f.style.transition = Ne ? "" : "none", f.style.left = X.offsetLeft + "px", f.style.width = X.offsetWidth + "px", Ne && (f.style.transform = "scaleX(1.08)", setTimeout(() => f.style.transform = "", 180));
    };
    new ResizeObserver(() => b(!1)).observe(m), u.addEventListener("click", (Ne) => {
      const X = Ne.target.closest("[data-house-tab]");
      if (X) {
        m.querySelectorAll(".tab").forEach((fe) => fe.classList.toggle("active", fe === X)), u.querySelectorAll(".houseTab").forEach((fe) => fe.classList.toggle("active", fe.dataset.housePane === X.dataset.houseTab)), X.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), b(!0);
        return;
      }
      const we = Ne.target.closest("[data-light-fav]");
      if (we) {
        Qs(we.dataset.lightFav);
        return;
      }
      const j = Ne.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!j || j.disabled)) {
        if (j.dataset.lights && (mt.lights = j.dataset.lights), j.dataset.dacPad && (mt.dacPad = j.dataset.dacPad), (j.dataset.lights || j.dataset.dacPad) && (Xe(), Re.clear()), j.dataset.sumToggle) {
          const fe = j.dataset.sumToggle, K = new Set(z.hiddenSums || []);
          K.has(fe) ? K.delete(fe) : K.add(fe), z = { ...z, hiddenSums: [...K] }, zn();
        }
        sn();
      }
    }), u.addEventListener("change", (Ne) => {
      const X = Ne.target;
      X.dataset.source && (z = { ...z, sources: { ...z.sources || {}, [X.dataset.source]: X.value || void 0 } }, zn());
      const we = X.dataset.lightStyle || X.dataset.lightPad;
      if (we) {
        const j = X.dataset.lightStyle ? "lightStyles" : "lightPads", fe = { ...mt[j] };
        X.value ? fe[we] = X.value : delete fe[we], mt[j] = fe, Xe(), [...Re.keys()].filter((K) => K.endsWith(":" + we)).forEach((K) => Re.delete(K));
      }
      sn();
    });
  }
  function G() {
    var b, M;
    nt() && tt();
    const e = c("housePane");
    if (!e) return;
    const n = !!customElements.get(Fe);
    e.querySelectorAll("[data-lights]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.lights === mt.lights))), c("lightsRow").querySelector(".status").textContent = n || !nt() ? "How lights show on the house page." : Ve === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", e.querySelectorAll("[data-dac-pad]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.dacPad === mt.dacPad))), c("dacPadRow").hidden = !nt();
    for (const D of e.querySelectorAll("[data-source]")) {
      if (D === a.activeElement) continue;
      const [N] = U.find(([ce]) => ce === D.dataset.source), O = Object.keys(x).filter(U.find(([ce]) => ce === N)[3]).sort((ce, Se) => ke(ce).localeCompare(ke(Se)));
      D.dataset.sig !== O.join(",") && (D.innerHTML = '<option value="">Automatic</option>' + O.map((ce) => '<option value="' + se(ce) + '">' + se(ke(ce)) + "</option>").join(""), D.dataset.sig = O.join(",")), D.value = O.includes((b = z.sources) == null ? void 0 : b[N]) ? z.sources[N] : "";
    }
    e.querySelectorAll("[data-sum-toggle]").forEach((D) => {
      const N = !(z.hiddenSums || []).includes(D.dataset.sumToggle);
      D.classList.toggle("on", N), D.setAttribute("aria-checked", String(N));
    });
    const i = c("lightRows"), d = i != null && i.contains(a.activeElement) ? a.activeElement : null;
    if (!i || d != null && d.matches("select")) return;
    const u = new Set(Pn()), m = (D, N, O, ce) => '<option value="' + D + '"' + (D === O ? " selected" : "") + ">" + N + "</option>", f = Object.keys(x).filter((D) => D.startsWith("light.")).sort((D, N) => !At.get(D) - !At.get(N) || (At.get(D) || "").localeCompare(At.get(N) || "") || ke(D).localeCompare(ke(N))).map((D) => {
      const N = mt.lightStyles[D] || "", O = mt.lightPads[D] || "", ce = u.has(D), Se = se(ke(D));
      return "<tr><td><strong>" + Se + "</strong></td><td>" + se(At.get(D) || "—") + "</td><td>" + se(an(D)) + '</td><td class="metaSwitchCol"><button class="switch' + (ce ? " on" : "") + '" type="button" role="switch" aria-checked="' + ce + '" data-light-fav="' + se(D) + '" aria-label="' + Se + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + se(D) + '" aria-label="' + Se + ' tile">' + m("", "Default", N) + m("tile", "HomeCore tile", N) + m("dac", "Dual Axis Controller", N) + '</select></td><td><select class="settingsSelect" data-light-pad="' + se(D) + '" aria-label="' + Se + ' pad"' + (et(D) ? "" : " disabled") + ">" + m("", "Default", O) + m("temperature", "Temperature", O) + m("colour", "Colour", O) + "</select></td></tr>";
    }).join("");
    i.dataset.html !== f && (i.innerHTML = f, i.dataset.html = f, d != null && d.dataset.lightFav && ((M = i.querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || M.focus({ preventScroll: !0 })));
  }
  const W = document.createElement("div");
  W.className = "densityBadge", W.setAttribute("aria-live", "polite"), W.hidden = !0, h.appendChild(W);
  let pe = 0;
  function ee() {
    if (!A) return;
    const e = c("homeView"), n = (m) => m.offsetParent !== null && !m.closest("[hidden]");
    e.querySelectorAll(":scope .card, :scope .tfAction").forEach((m) => {
      n(m) && (m.dataset.h = Math.round(m.getBoundingClientRect().height) + " px");
    });
    const i = [...e.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(n), d = window.innerHeight, u = i.filter((m) => {
      const f = m.getBoundingClientRect();
      return f.height > 0 && f.top >= 0 && f.bottom <= d + 0.5;
    }).length;
    W.hidden = !e.classList.contains("active"), W.innerHTML = "<b>" + u + "</b><small>of " + i.length + " readings on screen</small>";
  }
  const ue = () => {
    A && requestAnimationFrame(ee);
  };
  function J() {
    var e;
    h.classList.toggle("showDensity", A), (e = c("densityToggle")) == null || e.classList.toggle("on", A), W.hidden = !A, clearInterval(pe), A && (pe = setInterval(ee, 1e3), ee());
  }
  window.addEventListener("scroll", ue, { capture: !0, passive: !0 }), window.addEventListener("resize", ue, { passive: !0 });
  const E = a.querySelector("#homeView .grid");
  let P = null, re = null, Ae = null, H = null;
  const Ie = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map(), k = 6;
  let _ = null;
  const T = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map();
  let z = { favourites: null }, le = {}, ge = {}, xe = [], $e = null;
  const st = (() => {
    try {
      return JSON.parse(Di.get(Jc)) || {};
    } catch {
      return {};
    }
  })();
  let At = /* @__PURE__ */ new Map(), Tn = 0;
  function zn() {
    clearTimeout(Tn), Tn = setTimeout(() => Promise.resolve(R({ type: "frontend/set_user_data", key: Xc, value: z })).catch(() => {
    }), 400);
  }
  const mt = (() => {
    let e = {};
    try {
      e = JSON.parse(Di.get(Qc)) || {};
    } catch {
    }
    const n = (i, d) => Object.fromEntries(Object.entries(i || {}).filter(([, u]) => d.includes(u)));
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
  })(), Xe = () => Di.set(Qc, JSON.stringify(mt)), Lt = () => {
    h.dataset.more = mt.more, h.dataset.names = mt.names, Wn();
  };
  w && ie && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + xh.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (mt.more === e) + '" data-more-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-more-style]");
    n && (mt.more = n.dataset.moreStyle, Xe(), Lt(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  }), c("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + kh.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (mt.names === e) + '" data-names-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), c("namesChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-names-style]");
    n && (mt.names = n.dataset.namesStyle, mt.namesPicked = !0, Xe(), Lt(), c("namesChoice").querySelectorAll("[data-names-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  }), c("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Mh.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (mt.hoursWindow === e) + '" data-hours-window="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), c("hoursChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-hours-window]");
    n && (mt.hoursWindow = n.dataset.hoursWindow, Xe(), Ze == null || Ze.refresh(), c("hoursChoice").querySelectorAll("[data-hours-window]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  }), c("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + Sh.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (mt.wxStyle === e) + '" data-wx-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), c("wxStyleChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-wx-style]");
    n && (mt.wxStyle = n.dataset.wxStyle, Xe(), Ze == null || Ze.setStyle(mt.wxStyle), qt == null || qt.forEach((i) => i.setStyle(mt.wxStyle)), c("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  })), Y();
  let Je = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const xn = /* @__PURE__ */ new Map();
  let Dn = "";
  const wr = w ? mu({ onChange: () => cn() }) : null;
  w && h.classList.add("house");
  const lt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ze = null, bt = null, Mo = !1;
  function yr(e) {
    const n = ka();
    if (h.classList.toggle("houseBento", !!n), Ze && (bt !== n || e == null) && (Ze.destroy(), Ze = null), !n || e == null) {
      lt.remove();
      return;
    }
    lt.isConnected || E.append(lt), lt.style.order = e, !Ze && !Mo && (Ze = Fc(lt, { getHass: o, entityId: n, style: mt.wxStyle, hoursWindow: () => mt.hoursWindow }), bt = n);
  }
  const Ri = [["wx", ["current"]], ["avg", ["compared_to_average"]], ["aq", ["aq_tile"]], ["pollen", ["pollen_tile"]], ["radar", ["radar_tile"]]], Ln = ["aq", "pollen", "radar"], pt = Object.fromEntries(Ri.map(([e]) => [e, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + e })]));
  let qt = null, xr = null;
  function Xo(e) {
    const n = ka();
    qt && xr !== n && (qt.forEach((i) => i.destroy()), qt = null), Object.values(pt).forEach((i) => n ? !i.isConnected && E.append(i) : i.remove()), n && !qt && !Mo && (qt = Ri.map(([i, d]) => Fc(pt[i], { getHass: o, entityId: n, style: mt.wxStyle, cards: d, onOpen: i === "wx" ? () => vl("weather") : void 0 })), xr = n);
  }
  const xt = (e) => {
    var n;
    return ((n = x[e]) == null ? void 0 : n.attributes) || {};
  }, ke = (e) => xt(e).friendly_name || e, zt = (e, n) => hr(e) || (Number(xt(e).supported_features) & n) === n, Oe = (e) => {
    const n = String(e ?? "").replace(/_/g, " ");
    return n.charAt(0).toUpperCase() + n.slice(1);
  }, jn = (e, n = 1) => Number(e).toLocaleString(void 0, { minimumFractionDigits: n, maximumFractionDigits: n }), Wa = (e) => (e == null ? void 0 : e.state) === "on" ? e.attributes.brightness != null ? Math.max(1, Math.round(e.attributes.brightness / 2.55)) : 100 : 0, Ni = (e) => xt(e).supported_color_modes || [], Ge = (e) => {
    const n = e / 100;
    return [n <= 66 ? 255 : 329.7 * Math.pow(n - 60, -0.1332), n <= 66 ? 99.47 * Math.log(n) - 161.12 : 288.12 * Math.pow(n - 60, -0.0755), n >= 66 ? 255 : n <= 19 ? 0 : 138.52 * Math.log(n - 10) - 305.04];
  }, ot = (e, n) => [5, 3, 1].map((i) => {
    const d = (i + e / 60) % 6;
    return 255 * (1 - n / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  }), jt = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)), So = (e) => {
    const n = 0.2126 * jt(e[0]) + 0.7152 * jt(e[1]) + 0.0722 * jt(e[2]);
    return (n + 0.05) / 0.0664 > 1.05 / (n + 0.05);
  }, Vn = (e) => 0.2126 * jt(e[0]) + 0.7152 * jt(e[1]) + 0.0722 * jt(e[2]), tn = (e, n) => {
    const i = Vn(e), d = Vn(n);
    return (Math.max(i, d) + 0.05) / (Math.min(i, d) + 0.05);
  }, Jo = (e, n) => {
    const i = So(e);
    for (let d = 0.1; d < 1; d += 0.02) {
      const u = e.map((m) => Math.round(i ? m * (1 - d) : m + (255 - m) * d));
      if (tn(u, e) >= n) return "rgb(" + u.join(",") + ")";
    }
    return i ? "#26221e" : "#ffffff";
  };
  function ln(e) {
    const n = xt(e), i = (n.rgb_color || (n.hs_color && n.color_mode !== "color_temp" ? ot(...n.hs_color) : n.color_temp_kelvin ? Ge(n.color_temp_kelvin) : [255, 170, 0])).map((d) => Math.round(Math.max(0, Math.min(255, d))));
    return "--light:rgb(" + i.join(",") + ");--light-ink:" + Jo(i, 3.5);
  }
  const qa = (e) => {
    var n;
    return e.startsWith("light.") && ((n = x[e]) == null ? void 0 : n.state) === "on" ? ' data-light style="' + ln(e) + '"' : "";
  }, za = (e) => {
    const n = Ni(e);
    return n.length ? n.some((i) => i !== "onoff") : xt(e).brightness != null;
  }, Co = (e) => [xt(e).min_color_temp_kelvin || 2e3, xt(e).max_color_temp_kelvin || 6500], Yt = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function ja(e) {
    const n = Math.max(1, Math.round((Date.now() - e) / 1e3));
    if (n < 10) return "Just now";
    if (n < 60) return n + " seconds ago";
    const i = Math.round(n / 60);
    if (i < 60) return i + (i === 1 ? " minute ago" : " minutes ago");
    const d = Math.round(i / 60);
    if (d < 24) return d + (d === 1 ? " hour ago" : " hours ago");
    const u = Math.round(d / 24);
    return u + (u === 1 ? " day ago" : " days ago");
  }
  const Gn = (e) => {
    var n;
    return xt(e).current_position ?? (((n = x[e]) == null ? void 0 : n.state) === "closed" ? 0 : 100);
  }, Va = (e) => {
    var n;
    return ft("pos", e, ((n = T.get(e)) == null ? void 0 : n.pos) ?? Gn(e));
  }, ro = (e) => {
    var n;
    return ft("tilt", e, ((n = T.get(e)) == null ? void 0 : n.tilt) ?? xt(e).current_tilt_position);
  };
  function an(e) {
    var f;
    const n = x[e];
    if (!n) return "Not found";
    if (n.state === "unavailable") return "Unavailable";
    const i = n.attributes, d = e.split(".")[0];
    if (d === "light") {
      if (n.state !== "on") return "Off";
      const b = i.color_temp_kelvin;
      return (za(e) ? Wa(n) + "%" : "On") + (i.color_mode === "color_temp" && b ? " · " + Number(b).toLocaleString() + "k" : Pd.includes(i.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (n.state === "off" ? "Off" : Oe(i.hvac_action || n.state)) + " · " + jn(i.current_temperature) + " °C now";
    if (d === "cover") {
      const b = Gn(e), M = i.current_tilt_position;
      return n.state === "opening" || n.state === "closing" ? Oe(n.state) + " - " + b + "%" : (b <= 0 ? "Closed" : b >= 100 ? "Open" : "Partially open") + (M > 0 && M < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return n.state !== "on" ? "Off" : Oe(i.action || "on") + " · " + i.current_humidity + "% now";
    if (d === "vacuum") return Oe(n.state) + (n.state === "cleaning" && ((f = i.rooms) != null && f.length) ? " · " + i.rooms.join(", ") : "") + (i.battery_level != null ? " · " + i.battery_level + "%" : "");
    if (d === "media_player") return n.state === "playing" || n.state === "paused" ? (n.state === "paused" ? "Paused · " : "") + (i.media_title || "Playing") : Oe(n.state);
    if (d === "alarm_control_panel") return op[n.state] || Oe(n.state);
    if (d === "lock" || d === "valve") return Oe(n.state);
    if (d === "switch") return n.state === "on" ? "On" : "Off";
    if (d === "plant") return n.state === "ok" ? "Healthy" : Oe(i.problem);
    if (d === "binary_sensor")
      return i.device_class === "battery" ? n.state === "on" ? "Low" : "Normal" : i.device_class === "problem" ? n.state === "on" ? "Problem" : "OK" : i.device_class === "moisture" ? n.state === "on" ? "Wet" : "Dry" : Nl.includes(i.device_class) ? n.state === "on" ? "Open" : "Closed" : n.state === "on" ? "Detected" : "Clear";
    if (i.rang) return "Rang at " + Yt(i.rang);
    const u = o();
    if (u != null && u.formatEntityState && !hr(e))
      try {
        return u.formatEntityState(n);
      } catch {
      }
    const m = Number(n.state);
    if (n.state !== "" && Number.isFinite(m)) {
      const b = Math.abs(m) >= 100 ? 0 : Math.abs(m) >= 10 ? 1 : 2, M = i.unit_of_measurement ? i.unit_of_measurement === "%" ? "%" : " " + i.unit_of_measurement : "";
      return m.toLocaleString(void 0, { maximumFractionDigits: b }) + M + (i.plant_low ? " · Low" : i.plant_high ? " · High" : "");
    }
    return Oe(n.state);
  }
  const Ga = (e) => e >= 1e3 ? jn(e / 1e3, 2) + " kW" : Math.round(e).toLocaleString() + " W";
  function la(e) {
    var i, d;
    const n = o();
    e.querySelectorAll("[data-icon-for]").forEach((u) => {
      var b;
      const m = x[u.dataset.iconFor], f = u.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && m && !f) {
        let M = u.firstElementChild;
        (!M || M.localName !== "ha-state-icon") && (u.textContent = "", M = document.createElement("ha-state-icon"), u.appendChild(M)), M.hass = n, M.stateObj = m;
      } else if (customElements.get("ha-icon")) {
        let M = u.firstElementChild;
        (!M || M.localName !== "ha-icon") && (u.textContent = "", M = document.createElement("ha-icon"), u.appendChild(M)), M.icon = f || ((b = m == null ? void 0 : m.attributes) == null ? void 0 : b.icon) || "mdi:circle-medium";
      } else u.textContent || (u.textContent = (u.dataset.letter || ke(u.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (i = e.querySelectorAll) == null || i.call(e, ".tfIcon").forEach(Pi), (d = e.classList) != null && d.contains("tfIcon") && Pi(e), Fi();
  }
  const Qo = /* @__PURE__ */ new Map();
  function Pi(e) {
    var m, f, b;
    const n = (((m = e.closest("[data-k]")) == null ? void 0 : m.dataset.k) || "") + "|" + (e.dataset.iconFor || ((f = e.querySelector("[data-icon-for]")) == null ? void 0 : f.dataset.iconFor) || e.getAttribute("aria-label") || ""), i = getComputedStyle(e), d = { backgroundColor: i.backgroundColor, color: i.color }, u = Qo.get(n);
    Qo.set(n, d), !(!u || u.backgroundColor === d.backgroundColor && u.color === d.color || (b = window.matchMedia) != null && b.call(window, "(prefers-reduced-motion: reduce)").matches) && e.animate([u, d], { duration: 180, easing: "ease" });
  }
  const Ii = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", is = (e) => {
    const n = [e];
    for (; n.length; ) {
      const i = n.shift();
      if (i.localName === "svg") return i;
      i.shadowRoot && n.push(...i.shadowRoot.children), n.push(...i.children);
    }
    return null;
  };
  function kt(e) {
    var Se, Ne, X;
    const n = e.localName === "svg" ? e : is(e), i = n ? [...n.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!i.length) return !n;
    const d = (Se = e.closest(".tfIcon")) == null ? void 0 : Se.offsetWidth;
    if (d === void 0) return !0;
    if (!d) return !1;
    const u = d + "|" + i.map((we) => we.getAttribute("d") || we.localName).join("|");
    if (e.dataset.fitted === u) return !0;
    let m = 1 / 0, f = 1 / 0, b = -1 / 0, M = -1 / 0;
    for (const we of i) {
      const j = we.getBBox(), fe = getComputedStyle(we), K = fe.stroke !== "none" ? (parseFloat(fe.strokeWidth) || 0) / 2 : 0;
      !j.width && !j.height || (m = Math.min(m, j.x - K), f = Math.min(f, j.y - K), b = Math.max(b, j.x + j.width + K), M = Math.max(M, j.y + j.height + K));
    }
    if (!(b > m)) return !1;
    const D = (X = (Ne = n.viewBox) == null ? void 0 : Ne.baseVal) != null && X.width ? n.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, N = d - 14, O = N * D.width / Math.max(b - m, M - f), ce = O / D.width;
    return e.localName === "svg" ? (e.style.width = O + "px", e.style.height = O + "px") : e.style.setProperty("--mdc-icon-size", O + "px"), n.style.translate = ((D.x + D.width / 2 - (m + b) / 2) * ce).toFixed(2) + "px " + ((D.y + D.height / 2 - (f + M) / 2) * ce).toFixed(2) + "px", e.dataset.fitted = u, !0;
  }
  let Un = 0;
  function Hi(e = 0) {
    clearTimeout(Un), [...a.querySelectorAll(Ii)].filter((i) => !kt(i)).length && e < 5 && (Un = setTimeout(() => Hi(e + 1), 300));
  }
  function Fi() {
    clearTimeout(Un), Un = setTimeout(() => Hi(), 60);
  }
  const Bn = (e) => {
    var n, i, d;
    return e.startsWith("light.") && x[e] && !xt(e).icon && !((d = (i = (n = o()) == null ? void 0 : n.entities) == null ? void 0 : i[e]) != null && d.icon) ? "mdi:lightbulb" : "";
  }, Bt = (e, n, i) => (n = n || Bn(e), ' data-icon-for="' + se(e) + '"' + (n ? ' data-icon-name="' + se(n) + '"' : "") + (i ? ' data-letter="' + se(i) + '"' : "")), on = (e) => e.endsWith("_solar_power") ? "mdi:solar-power-variant" : xt(e).rang ? "mdi:doorbell" : "", St = (e, n, i, d) => se([e, n, i, d ? JSON.stringify(d) : ""].join("|")), so = (e) => se(JSON.stringify(e));
  function La(e, n) {
    var u, m;
    const i = se(ke(n) + ", " + an(n));
    return '<div class="activityRow' + (Number.isFinite(Number((u = x[n]) == null ? void 0 : u.state)) && ((m = x[n]) == null ? void 0 : m.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + se(e + "|" + n) + '" aria-label="' + i + '. Show the last 24 hours"' : '" aria-label="' + i + '"') + '><div class="tfIcon" aria-hidden="true"' + Bt(n, on(n)) + '></div><div><div class="activityRowName">' + se(ke(n)) + '</div><div class="activityRowMeta">' + se(an(n)) + "</div></div></div>";
  }
  const To = (e, n, i) => '<div class="activityRow" aria-label="' + se(e + ", " + n) + '"><div class="tfIcon" aria-hidden="true"' + Bt("", i, e) + '></div><div><div class="activityRowName">' + se(e) + '</div><div class="activityRowMeta">' + se(n) + "</div></div></div>";
  function Rn(e) {
    var i;
    const n = ((i = x[e]) == null ? void 0 : i.state) === "on";
    return '<div class="activityRow tfPlug' + (n ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + St("switch", "toggle", e) + '" aria-label="Turn ' + se(ke(e)) + (n ? " off" : " on") + '"' + Bt(e) + '></button><button class="tfName" type="button" data-more="' + se(e) + '" aria-label="' + se(ke(e) + ", " + an(e) + ". More info") + '"><span class="activityRowName">' + se(ke(e)) + '</span><span class="activityRowMeta">' + se(an(e)) + "</span></button></div>";
  }
  const Nn = (e) => {
    var n;
    return ((n = V.get(e)) == null ? void 0 : n.name) ?? ke(e);
  }, ei = (e) => {
    var n;
    return ((n = V.get(e)) == null ? void 0 : n.text) ?? an(e);
  };
  function ti(e) {
    var i;
    const n = (i = V.get(e)) == null ? void 0 : i.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (n ? Bt("", n, Nn(e)) : Bt(e, on(e))) + '></div><div><div class="activityRowName">' + se(Nn(e)) + '</div><div class="activityRowMeta">' + se(ei(e)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + se(Nn(e)) + '’s last 24 hours">' + Bd + '</button></div><svg class="tfGraph" data-graph="' + se(e) + '" role="img" aria-label="' + se(Nn(e)) + ', last 24 hours"></svg></div>';
  }
  function va(e, n, i, d, u = "", m = null, f = "") {
    const b = P && P.key === e;
    return '<section class="card tfCard' + (f ? " " + f : "") + (b ? " open" : "") + '" data-tf data-k="' + se(e) + '" style="order:' + n + (b && P.h ? ";min-height:" + P.h + "px" : "") + '" aria-label="' + se(i) + '"><div class="activityHeader">' + (m ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + se(m) + '" aria-label="' + se(i + (x[m] ? ", " + an(m) : "") + ". More info") + '">' + se(i) + "</button>" : '<div class="activityTitle">' + se(i) + "</div>") + "</div>" + (b ? ti(P.id) : '<div class="activityRows">' + d.join("") + "</div>" + u) + "</section>";
  }
  function da(e, n) {
    const i = "readings:" + e.id, d = e.readings.map((u) => La(i, u));
    return e.power != null && d.push(To("Power now", Ga(e.power), "mdi:flash")), va(i, n, "Readings", d.concat(e.plugs.map(Rn)));
  }
  function $n(e, n) {
    var b;
    const i = "energy:" + e.id, [d, u] = [e.solar.find((M) => M.endsWith("_power")), e.solar.find((M) => M.endsWith("_today"))], m = [d, u].filter(Boolean).map((M) => La(i, M)), f = Number(((b = x[d]) == null ? void 0 : b.state) || 0) * 1e3;
    return Je.grid && (m.push(La(i, Je.grid)), m.push(To("House use", Ga(f + Number(x[Je.grid].state)), "mdi:home-lightning-bolt"))), va(i, n, "Energy", m, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Oi = (e, n) => va("plant:" + e.id, n, ke(e.id), e.readings.map((i) => La("plant:" + e.id, i)), "", e.id);
  function Lo(e, n, i, d, u, m, f = null) {
    const b = i == null ? null : Math.max(0, Math.min(1, i)), M = b == null ? 0 : Math.round(b * 100);
    return '<div class="tfBar ' + e + '" role="slider" tabindex="0" aria-label="' + se(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + M + '"' + (u ? ' aria-valuetext="' + se(u) + '"' : "") + ' data-drag="' + se(e + "|" + n) + '">' + (f != null ? '<span class="was" aria-hidden="true" style="left:' + f + '%"></span>' : "") + (m ? b == null ? "" : '<b style="left:' + M + '%"></b>' : '<i style="width:' + M + '%"></i>') + "</div>";
  }
  const ni = "move-assistant-house-last-bright", ba = (() => {
    try {
      return JSON.parse(Di.get(ni)) || {};
    } catch {
      return {};
    }
  })();
  let y = 0;
  const S = (e, n) => {
    !n || ba[e] === n || (ba[e] = n, clearTimeout(y), y = setTimeout(() => Di.set(ni, JSON.stringify(ba)), 500));
  }, L = (e, n, i, d) => '<div class="tfStep" role="group" aria-label="' + se(e) + '"><button type="button" data-act="' + i + '" aria-label="Lower ' + se(e.toLowerCase()) + '">' + Vc.down + "</button><output>" + se(n) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + se(e.toLowerCase()) + '">' + Vc.up + "</button></div>", F = (e, n, i) => '<div class="' + e + '" role="group" aria-label="' + se(n) + '">' + i.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + se(d.aria) + '"' : "") + ">" + (d.html || se(d.label)) + "</button>").join("") + "</div>", Z = (e, n) => "width:" + Math.round(Math.max(0, Math.min(1, (e - n * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * n / 3).toFixed(2), Q = (e) => "left:calc(4px + " + e / 100 + " * (100% - 8px))", de = (e, n) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + se(ke(e)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-blocks="' + se(e) + '">' + [0, 1, 2, 3].map((i) => '<span><i style="' + Z(n, i) + '"></i><b' + (n >= (i + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (i + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Q(n) + '">' + Math.round(n) + "%</output></div>";
  function ye(e, n) {
    e.querySelectorAll(":scope>span").forEach((d, u) => {
      d.firstElementChild.setAttribute("style", Z(n, u)), d.lastElementChild.classList.toggle("lit", n >= (u + 1) * 25 - 12);
    });
    const i = e.querySelector(".tfTip");
    i.setAttribute("style", Q(n)), i.textContent = Math.round(n) + "%", e.setAttribute("aria-valuenow", String(Math.round(n))), e.setAttribute("aria-valuetext", Math.round(n) + "% open");
  }
  const be = (e, n) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + se(ke(e)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-drag="tilt|' + se(e) + '"><i style="width:calc((100% - 8px) * ' + n / 100 + ')"></i><span' + (n > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (n > 92 ? ' class="lit"' : "") + ">Open</span></div>", He = (e, n, i) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + se(ke(e)) + '">' + [
    zt(e, mh) && ["open", "Open", "open_cover", n >= 100 && !i],
    zt(e, vh) && ["stop", "Stop", "stop_cover", !1],
    zt(e, gh) && ["close", "Close", "close_cover", n <= 0 && !i]
  ].filter(Boolean).map(([d, u, m, f]) => '<button type="button" data-act="' + St("cover", m, e) + '" aria-label="' + u + '"' + (f ? " disabled" : "") + ">" + bh[d] + "</button>").join("") + "</div>", Ce = (e, n) => '<button class="tfIcon' + (n.art ? " art" : "") + '" type="button" data-act="' + n.button.act + '" aria-label="' + se(n.button.label) + '"' + (n.art ? ' style="background-image:url(&quot;' + se(n.art) + '&quot;)"' : Bt(e, n.icon)) + "></button>", De = (e) => '<button class="tfName" type="button" data-more="' + se(e) + '" aria-label="' + se(ke(e) + ", " + an(e) + ". More info") + '"><span class="activityRowName">' + se(ke(e)) + '</span><span class="activityRowMeta">' + se(an(e)) + "</span></button>";
  function Be(e, n = !1, i = null) {
    const d = dn(e), u = e.startsWith("light.") && Kt(e) && !(i && Da(e) < 3), m = i || (n && e.startsWith("light.") ? ["bright"] : null), f = u ? ['<div class="tfDacPad" data-dac="' + (n ? "more:" : i ? "dash:" : "tile:") + se(e) + '"></div>'] : d.sections.map((b, M) => b && (!m || m.includes((d.parts || [])[M])) ? b : "").filter(Boolean);
    return '<div class="tfAction' + (u ? " tfDac" : "") + (d.on ? " on" : "") + '" data-k="' + se(e) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + qa(e) + '><div class="tfActionHead">' + Ce(e, d) + De(e) + "</div>" + f.join("") + "</div>";
  }
  const Fe = "dual-controller-v3", Te = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Ve = null;
  async function tt() {
    if (Ve || customElements.get(Fe)) return;
    Ve = "loading";
    const e = await Promise.resolve().then(() => R({ type: "lovelace/resources" })).catch(() => null), n = Array.isArray(e) && e.some((d) => /dual-axis-controller/i.test(d.url || ""));
    if (await Promise.race([customElements.whenDefined(Fe), new Promise((d) => setTimeout(d, n ? 8e3 : 0))]), customElements.get(Fe)) return;
    const i = Object.assign(document.createElement("script"), { src: Te });
    i.onerror = () => {
      Ve = "failed", G();
    }, document.head.appendChild(i);
  }
  const Re = /* @__PURE__ */ new Map(), et = (e) => (mt.lightStyles[e] || mt.lights) === "dac", nt = () => mt.lights === "dac" || Object.values(mt.lightStyles).includes("dac");
  function Kt(e) {
    return et(e) && !!customElements.get(Fe);
  }
  const Pe = (e) => mt.lightPads[e] || mt.dacPad, Pt = () => {
    const e = o();
    return e && {
      ...e,
      themes: { ...e.themes || {}, darkMode: !h.classList.contains("light") },
      callService: (n, i, d, ...u) => e.callService(n, ...Hs(n, i, d), ...u)
    };
  }, Vt = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", ca = (e) => {
    !e.shadowRoot || e.shadowRoot.querySelector("style[data-tf]") || (e.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Vt })).dataset.tf = "");
  }, wa = /* @__PURE__ */ new Map(), Wi = new ResizeObserver((e) => e.forEach(({ target: n }) => {
    const i = n.parentElement;
    !i || !n.offsetHeight || (i.style.removeProperty("min-height"), wa.set(i.dataset.dac, i.offsetHeight));
  }));
  function ya(e) {
    e.querySelectorAll("[data-dac]").forEach((n) => {
      const i = n.dataset.dac;
      let d = Re.get(i);
      if (!d) {
        const u = i.slice(i.indexOf(":") + 1);
        d = document.createElement(Fe), d.setConfig({ type: "custom:" + Fe, entity: u, pad: Pe(u), tap_action: { action: "none" } }), Re.set(i, d);
      }
      d.hass = Pt(), d.parentNode !== n && n.replaceChildren(d), !d.offsetHeight && wa.has(i) && (n.style.minHeight = wa.get(i) + "px"), Wi.observe(d), ca(d);
    });
  }
  function kr() {
    const e = Pt();
    Re.forEach((n, i) => {
      n.isConnected ? n.hass = e : Re.delete(i);
    });
  }
  customElements.whenDefined(Fe).then(() => {
    w && (E != null && E.querySelector("[data-tf]")) && qo(sn);
  });
  const ft = (e, n, i) => qe.has(e + "|" + n) ? qe.get(e + "|" + n) : i;
  function dn(e) {
    var m;
    const n = x[e], i = n.attributes, d = e.split(".")[0], u = (f, b) => ({ act: St(f, "toggle", e), label: b });
    if (d === "light") {
      const f = n.state === "on", b = Ni(e), [M, D] = Co(e), N = ft("bright", e, Wa(n));
      f && S(e, Wa(n));
      const O = ft("ct", e, f && i.color_mode === "color_temp" ? i.color_temp_kelvin : null), ce = ft("hue", e, f && Pd.includes(i.color_mode) && i.hs_color ? i.hs_color[0] : null);
      return { on: f, button: u("light", "Turn " + ke(e) + (f ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        za(e) && Lo("bright", e, N / 100, ke(e) + " brightness", N + "%", !1, f ? null : ba[e] ?? null),
        b.includes("color_temp") && Lo("ct", e, O == null ? null : (O - M) / (D - M), ke(e) + " warm to cool", O == null ? "" : Math.round(O) + " kelvin", !0),
        b.some((Se) => Pd.includes(Se)) && Lo("hue", e, ce == null ? null : ce / 360, ke(e) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const f = i.target_temp_step || 0.5, b = Number(i.temperature);
      return { on: n.state !== "off", tone: n.state === "cool" || i.hvac_action === "cooling" ? "cool" : "heat", button: u("climate", "Turn " + ke(e) + (n.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(b) && L("Target temperature", jn(b) + " °C", St("climate", "set_temperature", e, { temperature: b - f }), St("climate", "set_temperature", e, { temperature: b + f })),
        F("tfSeg", "Mode", (i.hvac_modes || []).map((M) => ({ label: Oe(M), act: St("climate", "set_hvac_mode", e, { hvac_mode: M }), pressed: n.state === M })))
      ] };
    }
    if (d === "cover") {
      const f = n.state === "opening" || n.state === "closing", b = n.state === "closed", M = Va(e), D = ro(e);
      return { on: !b, tone: "blue", icon: $c[Dd(n)][b ? 1 : 0], button: u("cover", (b ? "Open " : "Close ") + ke(e)), parts: ["blocks", "tilt", "buttons"], sections: [
        zt(e, Kc) && de(e, M),
        D != null && be(e, D),
        He(e, M, f)
      ] };
    }
    if (d === "humidifier") {
      const f = Number(i.humidity);
      return { on: n.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: u("humidifier", "Turn " + ke(e) + (n.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && L("Target humidity", f + "%", St("humidifier", "set_humidity", e, { humidity: f - 1 }), St("humidifier", "set_humidity", e, { humidity: f + 1 })),
        ((m = i.available_modes) == null ? void 0 : m.length) && F("tfSeg", "Mode", i.available_modes.map((b) => ({ label: Oe(b), act: St("humidifier", "set_mode", e, { mode: b }), pressed: i.mode === b })))
      ] };
    }
    if (d === "media_player") {
      const f = n.state === "playing", b = n.state === "off" || n.state === "standby", M = ft("vol", e, i.volume_level), D = b ? { act: St("media_player", zt(e, fh) ? "turn_on" : "toggle", e), label: "Turn " + ke(e) + " on" } : n.state === "playing" || n.state === "paused" ? { act: St("media_player", "media_play_pause", e), label: (f ? "Pause " : "Play ") + ke(e) } : { act: St("media_player", zt(e, hh) ? "turn_off" : "toggle", e), label: "Turn " + ke(e) + " off" };
      return { on: !b, tone: "blue", art: !b && i.entity_picture ? i.entity_picture : null, button: D, parts: ["playback", "volume"], sections: b ? [] : [
        (zt(e, Uc) || zt(e, Yc) || zt(e, Gc) || zt(e, Zc)) && F("tfSeg", "Playback", [
          { html: Rl.prev, aria: "Previous", act: St("media_player", "media_previous_track", e), disabled: !zt(e, Uc) },
          { html: f ? Rl.pause : Rl.play, aria: f ? "Pause" : "Play", act: St("media_player", "media_play_pause", e), disabled: !(zt(e, Gc) || zt(e, Zc)) },
          { html: Rl.next, aria: "Next", act: St("media_player", "media_next_track", e), disabled: !zt(e, Yc) }
        ]),
        zt(e, uh) && M != null && Lo("vol", e, M, ke(e) + " volume", Math.round(M * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const f = n.state === "cleaning", b = i.rooms || [], M = (N) => b.includes(N) ? b.filter((O) => O !== N) : b.concat(N), D = St("vacuum", f ? "pause" : "start", e, hr(e) ? { rooms: b } : null);
      return { on: f || n.state === "returning", tone: "blue", button: { act: D, label: (f ? "Pause " : "Start ") + ke(e) }, parts: ["controls", "rooms"], sections: [
        F("tfSeg", ke(e), [
          { label: f ? "Pause" : "Start", act: D },
          { label: "Dock", act: St("vacuum", "return_to_base", e), disabled: n.state === "docked" },
          { label: "Locate", act: St("vacuum", "locate", e) }
        ]),
        hr(e) && F("tfChips", "Rooms to clean", Je.rooms.filter((N) => N.id !== "balcony").map((N) => ({ label: N.name, act: St("vacuum", "set_rooms", e, { rooms: M(N.name) }), pressed: b.includes(N.name) })))
      ] };
    }
    if (d === "lock") {
      const f = n.state === "locked";
      return { on: !f, tone: "heat", button: { act: St("lock", f ? "unlock" : "lock", e), label: (f ? "Unlock " : "Lock ") + ke(e) }, parts: ["controls"], sections: [
        F("tfSeg", ke(e), [
          { label: "Lock", act: St("lock", "lock", e), pressed: f },
          { label: "Unlock", act: St("lock", "unlock", e), pressed: n.state === "unlocked" },
          zt(e, _h) && { label: "Open", act: St("lock", "open", e), pressed: n.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const f = n.state === "disarmed";
      return { on: !f, tone: n.state === "triggered" ? "alarm" : "blue", button: { act: St("alarm_control_panel", f ? "alarm_arm_away" : "alarm_disarm", e), label: f ? "Arm " + ke(e) + ", away" : "Disarm " + ke(e) }, parts: ["controls"], sections: [
        F("tfSeg", ke(e), Eh.filter(([, , , b]) => !b || zt(e, b)).map(([b, M, D]) => ({ label: M, act: St("alarm_control_panel", D, e), pressed: n.state === b })))
      ] };
    }
    if (d === "valve") {
      const f = n.state === "open";
      return { on: f, tone: "blue", icon: "mdi:sprinkler-variant", button: u("valve", (f ? "Close " : "Open ") + ke(e)), parts: ["controls"], sections: [
        F("tfSeg", ke(e), [
          { label: "Open", act: St("valve", "open_valve", e), pressed: f },
          { label: "Close", act: St("valve", "close_valve", e), pressed: !f }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: ke(e) }, sections: [] };
  }
  const Xn = (e) => (Number.isInteger(Number(e)) ? String(Number(e)) : jn(e)) + "°";
  function Ua(e) {
    var we;
    const n = (j) => e.readings.find((fe) => xt(fe).device_class === j), i = n("temperature"), d = n("humidity"), u = (j) => {
      var fe;
      return Number((fe = x[j]) == null ? void 0 : fe.state);
    }, m = (j) => e.actions.filter((fe) => j.test(fe)), f = e.lights.filter((j) => {
      var fe;
      return ((fe = x[j]) == null ? void 0 : fe.state) === "on";
    }), b = m(/^cover\./), M = b.filter((j) => {
      var fe;
      return ((fe = x[j]) == null ? void 0 : fe.state) !== "closed";
    }), D = [...new Set(b.map((j) => Dd(x[j])))], N = m(/^climate\./)[0], O = m(/^humidifier\./)[0], ce = m(/^media_player\./), Se = ce.find((j) => {
      var fe;
      return ((fe = x[j]) == null ? void 0 : fe.state) === "playing";
    }) || ce.find((j) => {
      var fe;
      return ((fe = x[j]) == null ? void 0 : fe.state) === "paused";
    }), Ne = e.plugs.filter((j) => {
      var fe;
      return ((fe = x[j]) == null ? void 0 : fe.state) === "on";
    }), X = [];
    if (i && Number.isFinite(u(i)) && X.push({ key: "temp", id: i, kind: "reading", icon: yo(i), label: "Temperature", value: jn(u(i)) + "°" }), d && Number.isFinite(u(d)) && X.push({ key: "hum", id: d, kind: "reading", icon: yo(d), label: "Humidity", value: Math.round(u(d)) + "%" }), e.lights.length && X.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: yo("", "mdi:lightbulb"),
      label: "Lights",
      value: f.length ? f.length + " of " + e.lights.length + " on" : "All off",
      short: f.length ? f.length + " on" : "Off",
      on: f.length > 0,
      light: f.length ? ln(f[0]) : "",
      acts: e.lights.map((j) => ["light", f.length ? "turn_off" : "turn_on", j]),
      aria: (f.length ? "Turn off" : "Turn on") + " the lights in " + e.name
    }), b.length) {
      const j = D.length === 1 ? wh[D[0]] : "covers", fe = Math.round(b.reduce((K, Ue) => K + Gn(Ue), 0) / b.length);
      X.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: yo("", ((we = $c[D[0]]) == null ? void 0 : we[M.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Oe(j),
        value: fe <= 0 ? "Closed" : fe >= 100 ? "Open" : fe + "% open",
        short: fe <= 0 ? "Closed" : fe + "%",
        on: M.length > 0,
        acts: b.map((K) => ["cover", M.length ? "close_cover" : "open_cover", K]),
        aria: (M.length ? "Close the " : "Open the ") + j + " in " + e.name
      });
    }
    if (N) {
      const j = xt(N), fe = x[N].state === "off";
      X.push({
        key: "climate",
        kind: "control",
        tone: j.hvac_action === "cooling" ? "cool" : "heat",
        icon: yo(N),
        label: ke(N),
        value: fe ? "Off" : Oe(j.hvac_action || x[N].state) + " · " + Xn(j.temperature),
        short: fe ? "Off" : Xn(j.temperature),
        on: !fe,
        acts: [["climate", "toggle", N]],
        aria: "Turn " + ke(N) + (fe ? " on" : " off")
      });
    }
    if (O) {
      const j = x[O].state === "on";
      X.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: yo("", "mdi:air-humidifier"),
        label: ke(O),
        value: j ? "On · " + xt(O).humidity + "%" : "Off",
        short: j ? xt(O).humidity + "%" : "Off",
        on: j,
        acts: [["humidifier", "toggle", O]],
        aria: "Turn " + ke(O) + (j ? " off" : " on")
      });
    }
    if (ce.length) {
      const j = Se || ce[0], fe = x[j], K = fe.state === "playing";
      X.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: yo(j),
        label: ke(j),
        value: an(j),
        short: K ? "Playing" : fe.state === "paused" ? "Paused" : Oe(fe.state),
        on: K,
        acts: [["media_player", fe.state === "playing" || fe.state === "paused" ? "media_play_pause" : "toggle", j]],
        aria: (K ? "Pause " : "Play ") + ke(j)
      });
    }
    return e.plugs.length && X.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: yo("", "mdi:power-plug"),
      label: "Plugs",
      value: Ne.length ? Ne.length + " of " + e.plugs.length + " on" : "All off",
      short: Ne.length ? Ne.length + " on" : "Off",
      on: Ne.length > 0,
      acts: e.plugs.map((j) => ["switch", Ne.length ? "turn_off" : "turn_on", j]),
      aria: (Ne.length ? "Turn off" : "Turn on") + " the plugs in " + e.name
    }), e.alerts.forEach((j) => X.push(xt(j).device_class === "moisture" ? { key: "alert:" + j, kind: "alert", icon: yo(j), label: "Water leak" } : { key: "note:" + j, kind: "note", icon: yo(j), label: ke(j) + " " + an(j).toLowerCase() })), X;
  }
  const Aa = (e, n) => {
    const i = (d) => e.actions.filter((u) => d.test(u));
    return {
      lights: e.lights,
      covers: i(/^cover\./),
      climate: i(/^climate\./).slice(0, 1),
      humidifier: i(/^humidifier\./).slice(0, 1),
      plugs: e.plugs,
      media: (() => {
        const d = i(/^media_player\./);
        return [d.find((u) => {
          var m;
          return ((m = x[u]) == null ? void 0 : m.state) === "playing";
        }) || d.find((u) => {
          var m;
          return ((m = x[u]) == null ? void 0 : m.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[n] || [];
  }, qi = (e, n, i) => '<button class="' + n + (e.on ? " on" : "") + '" type="button" data-tone="' + e.tone + '" data-acts="' + so(e.acts) + '" aria-label="' + se(e.aria) + '" aria-pressed="' + e.on + '">' + i + "</button>", ai = (e) => '<button class="tfAName" type="button" data-go="' + se(e.id) + '" aria-label="Open ' + se(e.name) + '">' + se(e.name) + "</button>";
  function kn(e, n, i = !1) {
    const d = n.find((b) => b.key === "lights"), u = !!(d != null && d.on), m = "", f = '<span class="tfAreaGlyph"' + Bt("area:" + e.id, e.icon || "mdi:texture-box", e.name) + "></span>";
    return i || !d ? '<span class="tfIcon tfAreaIcon' + (u ? " on" : "") + '"' + m + ' aria-hidden="true">' + f + "</span>" : '<button class="tfIcon tfAreaIcon' + (u ? " on" : "") + '" type="button"' + m + ' data-acts="' + so(d.acts) + '" aria-label="' + se(d.aria) + '" aria-pressed="' + u + '">' + f + "</button>";
  }
  const rs = (e) => e.filter((n) => n.kind === "alert" || n.kind === "note").map((n) => '<span class="sourceTag">' + se(n.label) + "</span>").join(" "), Gt = (e) => e.readings.find((n) => xt(n).device_class === "temperature") || [...e.readings, ...e.solar, ...e.openings, ...e.actions, ...e.plugs].find((n) => x[n]) || null, Zs = (e, n) => {
    const i = ke(n);
    return i.toLowerCase().startsWith(e.name.toLowerCase() + " ") ? Oe(i.slice(e.name.length + 1)) : i;
  };
  function Ks(e) {
    const n = x[e], i = xt(e), d = e.split(".")[0], u = Number(n.state);
    if (n.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(u)) {
      if (i.device_class === "temperature") return { text: Xn(u) };
      const m = i.unit_of_measurement || "";
      return m === "%" ? { text: Math.round(u) + "%" } : { text: jn(u, Number.isInteger(u) ? 0 : 1), unit: m };
    }
    if (d === "climate" && (i.current_temperature ?? i.temperature) != null) return { text: Xn(i.current_temperature ?? i.temperature) };
    if (d === "light") return { text: n.state !== "on" ? "Off" : za(e) ? Wa(n) + "%" : "On" };
    if (d === "cover") {
      const m = Gn(e);
      return { text: m <= 0 ? "Closed" : m >= 100 ? "Open" : m + "%" };
    }
    return d === "humidifier" ? { text: n.state === "on" ? i.humidity + "%" : "Off" } : d === "media_player" ? { text: n.state === "playing" ? "Playing" : n.state === "paused" ? "Paused" : Oe(n.state) } : { text: an(e) };
  }
  const $s = (e, n, i) => {
    const d = i.find((b) => b.key === "temp"), u = i.find((b) => b.key === "hum"), m = xt(n), f = x[n].state === "off";
    return n.startsWith("climate.") ? [Zs(e, n), f ? "Off" : Oe(m.hvac_action || x[n].state) + (m.temperature != null ? " · " + Xn(m.temperature) : ""), u && u.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === n) && Zs(e, n), d && d.id !== n && d.value, u && u.id !== n && u.value + " humidity"].filter(Boolean).join(" · ");
  };
  function oi(e, n, i) {
    const d = i && Ks(i), u = i ? $s(e, i, n) : "", m = (b) => {
      const M = Aa(e, b.key);
      return M.length === 1 ? M[0] : "group:" + e.id + ":" + b.key;
    }, f = n.filter((b) => b.kind === "control").slice(0, 4).map((b) => '<div class="tfATile' + (b.on ? " on" : "") + '" data-tone="' + b.tone + '"' + (b.light ? ' data-light style="' + b.light + '"' : "") + ">" + qi(b, "tfIcon", b.icon) + '<button class="tfName" type="button" data-more="' + se(m(b)) + '" aria-label="' + se(e.name + " " + b.label.toLowerCase() + ", " + b.value + ". Open") + '"><span class="activityRowName">' + se(b.label) + '</span><span class="activityRowMeta">' + se(b.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + kn(e, n) + '<div class="tfATitle">' + ai(e) + rs(n) + "</div></div>" + (i ? '<button class="tfABig" type="button" data-more="' + se(i) + '" aria-label="' + se(ke(i) + ", " + an(i) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + se(d.text) + (d.unit ? '<span class="tfABigUnit">' + se(d.unit) + "</span>" : "") + "</span>" + (u ? '<span class="tfABigSub">' + se(u) + "</span>" : "") + "</button>" : "") + (f.length ? '<div class="tfATiles">' + f.join("") + "</div>" : "");
  }
  function Gl(e) {
    const n = e.id === re, i = Ua(e), d = Gt(e), u = d && Ks(d), m = [...i.filter((f) => f.kind === "control"), ...i.filter((f) => f.kind !== "control" && f.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (n ? " active" : "") + '" data-area="' + se(e.id) + '" tabindex="0" aria-expanded="' + n + '" aria-label="' + se(e.name) + '"><div class="panelExpanded"' + (n ? "" : " inert") + ">" + oi(e, i, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + kn(e, i, !0) + '<span class="tfACName">' + se(e.name) + '</span></div><span class="tfACMain">' + (u ? se(u.text + (u.unit ? " " + u.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + m.map((f) => '<span class="tfACTile"><span class="tfIcon' + (f.kind === "alert" ? " alert" : "") + '"' + (f.on && f.light ? ' data-light style="' + f.light + '"' : "") + ">" + f.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let It = [];
  const Ya = (e) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + e + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + It.map(Gl).join("") + "</section></div>", ii = () => [
    { key: "home", name: "Home", ids: Je.homeVacuums },
    ...Je.rooms.map((e) => ({ key: "room:" + e.id, name: e.name, room: e, ids: e.actions }))
  ], zi = (e, n, i) => e + " " + (e === 1 ? n : i), Pn = () => (z.favourites ?? le.favorite_entities ?? []).filter((e) => x[e]);
  function Mr() {
    if (!$e) {
      const n = Object.entries(st).sort((d, u) => u[1] - d[1]).map(([d]) => d), i = Je.rooms.flatMap((d) => d.actions);
      $e = [.../* @__PURE__ */ new Set([...xe, ...n, ...i.filter((d) => dn(d).on), ...i])];
    }
    const e = Pn();
    return $e.filter((n) => x[n] && x[n].state !== "unavailable" && !e.includes(n));
  }
  let ji = !1;
  function Za() {
    if (!ji || z.favSeeded || !Je.rooms.length) return;
    const e = (i) => Object.keys(x).find((d) => hr(d) && i(d)), n = [e((i) => i.startsWith("climate.")), e((i) => i.startsWith("cover.") && /curtain/.test(i)), e((i) => i.startsWith("valve.")), Je.security.locks[0]];
    z = { ...z, favourites: [.../* @__PURE__ */ new Set([...z.favourites ?? le.favorite_entities ?? [], ...n.filter(Boolean)])], favSeeded: !0 }, zn();
  }
  const xa = () => z.suggest ?? !le.hide_suggested_entities;
  function Ul() {
    const e = new Set(z.favHidden || []), n = Pn().filter((d) => !e.has(d)), i = xa() ? Mr().filter((d) => !e.has(d) && us(d)) : [];
    return [...n, ...i].slice(0, Bh);
  }
  const lo = (e) => {
    const n = Pn().includes(e);
    return '<button class="tfStar" type="button" data-star="' + se(e) + '" aria-pressed="' + n + '" aria-label="Favourite: ' + se(ke(e)) + '">' + Ah(n) + "</button>";
  };
  function Sr(e, { area: n = !1, star: i = !1, plain: d = !1, say: u = null, alert: m = !1 } = {}) {
    var Ne, X, we, j, fe, K;
    const f = d && ((fe = (Ne = o()) == null ? void 0 : Ne.devices) == null ? void 0 : fe[(j = (we = (X = o()) == null ? void 0 : X.entities) == null ? void 0 : we[e]) == null ? void 0 : j.device_id]), b = f && (f.name_by_user || f.name) || ke(e), M = e.split(".")[0], D = !d && Pl.includes(M) ? dn(e) : null, N = D ? D.on : ["on", "open", "playing"].includes((K = x[e]) == null ? void 0 : K.state), O = d ? null : D ? D.button : yh.includes(M) ? { act: St(M, "toggle", e), label: "Turn " + ke(e) + (N ? " off" : " on") } : M === "scene" || M === "script" ? { act: St(M, "turn_on", e), label: "Run " + ke(e) } : null, ce = (u ?? an(e)) + (n && At.get(e) ? " · " + At.get(e) : ""), Se = (D == null ? void 0 : D.icon) || on(e);
    return '<div class="activityRow' + (O ? " tfPlug" : "") + (N ? " on" : "") + (i ? " tfPick" : "") + (m ? " alert" : "") + '" data-k="' + se((n ? "fav:" : "row:") + e) + '" data-tone="' + (M === "light" ? "light" : (D == null ? void 0 : D.tone) || "blue") + '"' + qa(e) + ">" + (O && !i ? '<button class="tfIcon" type="button" data-act="' + O.act + '" aria-label="' + se(O.label) + '"' + Bt(e, Se) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Bt(e, Se) + "></div>") + '<button class="tfName" type="button" data-more="' + se(e) + '" aria-label="' + se(b + ", " + ce + ". More info") + '"><span class="activityRowName">' + se(b) + '</span><span class="activityRowMeta">' + se(ce) + "</span></button>" + (i ? lo(e) : "") + "</div>";
  }
  const ka = () => {
    var e;
    return x[(e = z.sources) == null ? void 0 : e.weather] ? z.sources.weather : x["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(x).find((n) => n.startsWith("weather."));
  };
  function Xs() {
    var i;
    const e = (d) => Object.keys(x).filter((u) => u.startsWith("binary_sensor.") && d.includes(xt(u).device_class));
    return ((i = ge.alert_entities) != null && i.length ? ge.alert_entities : [...e(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...e(Nl).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => x[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(x[d.entity].state) }));
  }
  function Yl() {
    const e = Object.keys(Rd), n = /* @__PURE__ */ new Set(), i = [];
    return (le.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!e.includes(d.key) || n.has(d.key)) return;
        n.add(d.key);
      }
      i.push(d);
    }), e.forEach((d) => {
      n.has(d) || i.push({ type: "summary", key: d });
    }), i;
  }
  function ss() {
    var we;
    const e = ((we = o()) == null ? void 0 : we.entities) || {}, n = (j) => xt(j).device_class, i = Object.keys(x).filter((j) => j.startsWith("sensor.") && n(j) === "battery" || j.startsWith("binary_sensor.") && ["battery", "problem"].includes(n(j))), d = Je.rooms.flatMap((j) => j.plants.map((fe) => fe.id));
    if (!i.length && !d.length) return null;
    const u = (j) => {
      var K;
      const fe = (K = e[j]) == null ? void 0 : K.device_id;
      return !!fe && Object.keys(x).some((Ue) => {
        var Rt;
        return Ue.startsWith("binary_sensor.") && ((Rt = e[Ue]) == null ? void 0 : Rt.device_id) === fe && n(Ue) === "battery_charging" && x[Ue].state === "on";
      });
    }, m = (j) => j.startsWith("vacuum.") ? xt(j).battery_level <= 20 && x[j].state !== "docked" : j.startsWith("binary_sensor.") ? n(j) === "battery" && x[j].state === "on" : parseFloat(x[j].state) <= 20 && !u(j), f = [...i, ...Je.vacuums].filter((j) => x[j] && m(j)), b = [...i.filter((j) => n(j) === "problem" && x[j].state === "on"), ...d.filter((j) => {
      var fe;
      return ((fe = x[j]) == null ? void 0 : fe.state) === "problem";
    })], M = i.filter((j) => x[j].state === "unavailable"), D = [.../* @__PURE__ */ new Set([...f, ...b, ...M])], N = (j) => {
      const fe = parseFloat(x[j].state);
      return n(j) === "battery" && Number.isFinite(fe) ? fe : 101;
    }, O = [...d, ...Je.vacuums, ...[...i].sort((j, fe) => N(j) - N(fe))].filter((j) => x[j] && !D.includes(j)), ce = /* @__PURE__ */ new Map();
    O.forEach((j) => {
      var K;
      const fe = ((K = Je.areaOf) == null ? void 0 : K.call(Je, j)) || "";
      ce.set(fe, [...ce.get(fe) || [], j]);
    });
    const Se = (j) => {
      const fe = Je.rooms.findIndex((K) => K.id === j);
      return j === "" ? 1 / 0 : fe < 0 ? Je.rooms.length : fe;
    }, Ne = [...ce.keys()].sort((j, fe) => Se(j) - Se(fe)), X = (j) => {
      var fe, K, Ue, Rt;
      return ((fe = Je.rooms.find((yt) => yt.id === j)) == null ? void 0 : fe.name) || ((Rt = (Ue = (K = o()) == null ? void 0 : K.areas) == null ? void 0 : Ue[j]) == null ? void 0 : Rt.name) || j;
    };
    return {
      value: [f.length && zi(f.length, "low battery", "low batteries"), b.length && zi(b.length, "problem", "problems"), M.length && zi(M.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: D, alert: !0 }, ...Ne.map((j) => ({ name: j ? X(j) : Ne.length > 1 ? "Other devices" : "Devices", ids: ce.get(j) }))].filter((j) => j.ids.length)
    };
  }
  function Vi() {
    var Cn;
    const e = Je.rooms, n = Je.security, i = (Ke, Ht) => Ke.actions.filter((Kr) => Ht.test(Kr)), d = (Ke) => e.map((Ht) => ({ name: Ht.name, ids: Ke(Ht) })).filter((Ht) => Ht.ids.length), u = e.flatMap((Ke) => Ke.lights), m = u.filter((Ke) => {
      var Ht;
      return ((Ht = x[Ke]) == null ? void 0 : Ht.state) === "on";
    }).length, f = e.map((Ke) => Ke.readings.find((Ht) => xt(Ht).device_class === "temperature")).filter(Boolean).map((Ke) => Number(x[Ke].state)).filter(Number.isFinite), [b, M] = [jn(Math.min(...f)), jn(Math.max(...f))], D = e.flatMap((Ke) => i(Ke, /^media_player\./)), N = D.filter((Ke) => {
      var Ht;
      return ((Ht = x[Ke]) == null ? void 0 : Ht.state) === "playing";
    }).length, O = Xs(), ce = O.filter((Ke) => Ke.severity === "warning" && Ke.on).length, Se = n.locks.filter((Ke) => {
      var Ht;
      return ["unlocked", "jammed", "open"].includes((Ht = x[Ke]) == null ? void 0 : Ht.state);
    }).length, Ne = n.alarms.filter((Ke) => {
      var Ht;
      return ((Ht = x[Ke]) == null ? void 0 : Ht.state) === "disarmed";
    }).length, X = ce ? zi(ce, "warning", "warnings") : null, we = Se ? Se + " unlocked" : Ne ? Ne + " disarmed" : X ? null : "All secure", j = ss(), fe = e.flatMap((Ke) => Ke.solar), K = fe.find((Ke) => Ke.endsWith("_power")), Ue = {
      light: u.length && { value: m ? m + " on" : "All off", groups: d((Ke) => Ke.lights) },
      climate: f.length && { value: b === M ? b + "°" : b + " - " + M + "°", groups: d((Ke) => [...Ke.readings.filter((Ht) => ["temperature", "humidity"].includes(xt(Ht).device_class)), ...i(Ke, /^(climate|humidifier)\./)]) },
      security: (n.alarms.length || n.locks.length) && { value: [X, we].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...n.alarms, ...n.locks] }, { name: "Doors and windows", ids: n.openings }].filter((Ke) => Ke.ids.length) },
      media_players: D.length && { value: N ? N + " playing" : "No media playing", groups: d((Ke) => i(Ke, /^media_player\./)) },
      maintenance: j,
      energy: Je.grid && { value: Ga(Number(((Cn = x[K]) == null ? void 0 : Cn.state) || 0) * 1e3 + Number(x[Je.grid].state)) + " now", groups: [{ name: "Energy", ids: [...fe, Je.grid] }] }
    }, Rt = [], yt = O.filter((Ke) => Ke.severity !== "warning" && Ke.on);
    return yt.length && Rt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: zi(yt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: yt.map((Ke) => Ke.entity) }] }), Yl().forEach((Ke) => {
      Ke.type !== "summary" ? Rt.push({ key: "path:" + Ke.path, name: Ke.label || Ke.path, icon: Ke.icon || "mdi:link-variant", colour: "", value: "" }) : !Ke.hidden && Ue[Ke.key] && !(z.hiddenSums || []).includes(Ke.key) && Rt.push({ key: Ke.key, ...Rd[Ke.key], ...Ue[Ke.key] });
    }), Rt;
  }
  const Js = (e) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + se(e.key) + '" data-k="sum:' + se(e.key) + '" aria-label="' + se(e.name + (e.value ? ", " + e.value : "")) + '"' + (e.key === "alerts" ? ' style="--sum:' + e.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + Bt(e.id || "", e.icon, e.name) + '></div><div><div class="activityRowName">' + se(e.name) + "</div>" + (e.value ? '<div class="activityRowMeta">' + se(e.value) + "</div>" : "") + "</div></div>";
  function Qs(e) {
    const n = Pn();
    z = { ...z, favourites: n.includes(e) ? n.filter((i) => i !== e) : [...n, e], favHidden: (z.favHidden || []).filter((i) => i !== e) }, zn(), cn();
  }
  function Cr(e) {
    document.querySelector("home-assistant") && (Ie.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function ls(e, n) {
    if (e.startsWith("path:")) {
      Cr(e.slice(5));
      return;
    }
    Ca("summary:" + e, n);
  }
  async function Gi() {
    const e = (f) => Promise.resolve().then(() => R(f)).catch(() => null), [n, i, d, u] = await Promise.all([
      e({ type: "frontend/get_user_data", key: Xc }),
      e({ type: "frontend/get_system_data", key: "home" }),
      e({ type: "frontend/get_system_data", key: "security" }),
      e({ type: "usage_prediction/common_control" })
    ]), m = (n == null ? void 0 : n.value) || {};
    z = { favourites: m.favourites ?? null, sources: m.sources, hiddenSums: m.hiddenSums, dash: m.dash, named: m.named, favHidden: m.favHidden, suggest: m.suggest, favSeeded: m.favSeeded }, le = (i == null ? void 0 : i.value) || {}, ge = (d == null ? void 0 : d.value) || {}, xe = Array.isArray(u == null ? void 0 : u.entities) ? u.entities : [], $e = null, Object.keys(x).length && cn(), Ui(), ji = !0, Za();
  }
  const el = "HomeCore";
  async function Ui() {
    var d, u, m;
    const e = location.pathname.split("/")[1], n = z.named || [];
    if (!((u = (d = o()) == null ? void 0 : d.user) != null && u.is_admin) || !e || n.includes(e)) return;
    const i = () => {
      z = { ...z, named: [...n, e] }, zn();
    };
    try {
      const f = (m = await R({ type: "lovelace/dashboards/list" })) == null ? void 0 : m.find((D) => D.url_path === e);
      if (!f || f.mode === "yaml") return;
      if (f.title === el) {
        i();
        return;
      }
      const b = await R({ type: "lovelace/config", url_path: e }), M = ((b == null ? void 0 : b.views) || []).flatMap((D) => [...D.cards || [], ...(D.sections || []).flatMap((N) => N.cards || [])]);
      if (!M.length || !M.every((D) => (D == null ? void 0 : D.type) === "custom:move-assistant-card" && D.layout === "test-focus")) return;
      await R({ type: "lovelace/dashboards/update", dashboard_id: f.id, title: el }), i();
    } catch {
    }
  }
  let Ma = null, Yi = 0, ri = !1;
  const si = (e) => {
    const n = e.split(".")[0], i = xt(e).device_class;
    return Dh.includes(n) && (n !== "binary_sensor" || Nl.includes(i) || !!ip[i]);
  }, li = (e) => e.startsWith("binary_sensor.") ? ip[xt(e).device_class] : null;
  async function Zi() {
    var e;
    if (!(ri || Date.now() - Yi < 30 * 1e3)) {
      ri = !0, Yi = Date.now();
      try {
        const n = Object.keys(((e = o()) == null ? void 0 : e.states) || {}).filter(si), i = n.length ? await R({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: n }) : null;
        Ma = Array.isArray(i) ? i.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        Ma = null;
      }
      ri = !1, cn();
    }
  }
  function ds() {
    const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = (u) => {
      if (!x[u.entity_id] || !si(u.entity_id) || !us(u.entity_id) || ["unavailable", "unknown"].includes(u.state)) return;
      if (li(u.entity_id)) {
        const f = n.get(u.entity_id);
        u.state === "on" ? (!f || u.when > f.when + 1) && n.set(u.entity_id, { ...u, alarm: !0, cleared: null }) : f && !f.cleared && u.when > f.when && (f.cleared = u.when);
        return;
      }
      const m = e.get(u.entity_id);
      (!m || u.when > m.when + 1) && e.set(u.entity_id, u);
    };
    [...Ma || []].sort((u, m) => u.when - m.when).forEach(i);
    const d = Ma ? Yi / 1e3 - 5 : 0;
    return Object.keys(x).forEach((u) => {
      var b;
      const m = x[u], f = m.last_changed ? Date.parse(m.last_changed) / 1e3 : 0;
      f > d && i({ entity_id: u, state: m.state, when: f, context_user_id: (b = m.context) == null ? void 0 : b.user_id });
    }), [...e.values(), ...n.values()].sort((u, m) => m.when - u.when).slice(0, Rh);
  }
  function _a(e) {
    var d;
    const n = e.context_user_id && Object.keys(x).find((u) => u.startsWith("person.") && xt(u).user_id === e.context_user_id);
    if (n) return ke(n);
    const i = (d = o()) == null ? void 0 : d.user;
    return i && e.context_user_id === i.id ? i.name : ["automation", "script"].includes(e.context_domain) || e.context_event_type === "automation_triggered" ? e.context_name || "Home Assistant" : "";
  }
  function di(e) {
    const n = e.entity_id.split(".")[0], i = String(e.state);
    return n === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[i] || Oe(i).toLowerCase() : n === "cover" || n === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[i] || Oe(i).toLowerCase() : n === "binary_sensor" ? i === "on" ? "opened" : "closed" : n === "climate" ? i === "off" ? "turned off" : "set to " + Oe(i).toLowerCase() : n === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[i] || Oe(i).toLowerCase() : n === "alarm_control_panel" ? (op[i] || Oe(i)).toLowerCase() : n === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[i] || Oe(i).toLowerCase() : i === "on" ? "turned on" : i === "off" ? "turned off" : Oe(i).toLowerCase();
  }
  function Zl(e) {
    const n = e.entity_id, i = e.alarm && li(n), d = ke(n) + " " + (i ? i[0] : di(e)), u = i ? Yt(e.when * 1e3) + (e.cleared ? " · " + i[1] + " since " + Yt(e.cleared * 1e3) : "") : [_a(e), Yt(e.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (i ? " alert" : "") + '"><div class="tfIcon' + (i ? " alert" : "") + '" aria-hidden="true"' + Bt(n, on(n)) + '></div><button class="tfName" type="button" data-more="' + se(n) + '" data-at="' + Math.round(e.when * 1e3) + '" aria-label="' + se(d + ", " + u + ". More info") + '"><span class="activityRowName">' + se(d) + '</span><span class="activityRowMeta">' + se(u) + "</span></button></div>";
  }
  let Ki = null, Ao = 0;
  const $i = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Tr() {
    var n;
    if (Date.now() - Ao < 5 * 60 * 1e3) return;
    Ao = Date.now();
    const e = [];
    try {
      const i = ((n = await R({ type: "energy/get_prefs" })) == null ? void 0 : n.energy_sources) || [], d = (u) => i.filter((m) => m.type === u).flatMap((m) => u === "grid" ? (m.flow_from || []).map((f) => f.stat_energy_from) : [m.stat_energy_from]).filter(Boolean);
      for (const [u, m, f] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!f.length) continue;
        const b = await Promise.all(f.map((M) => Promise.resolve(R({ type: "recorder/statistic_during_period", statistic_id: M, calendar: { period: "day" }, types: ["change"] })).then((D) => Number(D == null ? void 0 : D.change) || 0, () => 0)));
        e.push({ key: u, name: m, id: f[0], ids: f, value: b.reduce((M, D) => M + D, 0), unit: xt(f[0]).unit_of_measurement || (u === "gas" || u === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Ki = e, cn();
  }
  let co = null, tl = [];
  function Lr() {
    var m;
    const e = tl = Ki != null && Ki.length ? Ki : $i.map(([f, b, M, D]) => {
      const N = "sensor.made_up_energy_" + f;
      return x[N] = { entity_id: N, state: String(M), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: b + " today", unit_of_measurement: D, state_class: "total_increasing" } }, { key: f, name: b, id: N, value: M, unit: D };
    });
    V.clear(), e.some((f) => f.id === co) || (co = e[0].id);
    const n = e.map((f) => {
      const b = Number(f.value).toLocaleString(void 0, { maximumFractionDigits: f.value < 10 ? 2 : 1 }) + " " + f.unit, M = Nh[f.key], D = f.id === co;
      return V.set(f.id, { name: f.name, text: b, icon: M }), '<div class="activityRow tap' + (D ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + se(f.id) + '" aria-pressed="' + D + '" aria-label="' + se(f.name + ", " + b) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Bt("", M, f.name) + '></div><div><div class="activityRowName">' + se(f.name) + '</div><div class="activityRowMeta">' + se(b) + "</div></div></div>";
    }), i = e.find((f) => f.id === co), d = (((m = Ft().opts.energy) == null ? void 0 : m.graph) || "above") === "below", u = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + se(i.id) + '" role="img" aria-label="' + se(i.name) + ', last 24 hours"></svg></div>';
    return va("dash:energy", 0, "Energy today", n, u, Vi().some((f) => f.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function Ar(e) {
    const n = E.querySelector(".tfDash-energy"), i = n == null ? void 0 : n.querySelector(".tfDashGraph svg");
    !i || e === co || (co = e, n.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const u = d.dataset.energyPick === e;
      d.classList.toggle("picked", u), d.setAttribute("aria-pressed", String(u));
    }), i.dataset.graph = e, i.dataset.drawn = "", xn.set("dash:energy", Lr()), Ts(!0));
  }
  const Xi = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, cs = /* @__PURE__ */ new Map();
  async function Kl(e) {
    const n = /* @__PURE__ */ new Date(), i = new Date(n).setHours(0, 0, 0, 0), d = n.getHours(), u = n.getMinutes() / 60, m = Array.from({ length: 24 }, (b, M) => M <= d ? 0 : null);
    if (!e.ids) {
      const b = Xi[e.key] || Xi.electricity, M = b.map((N, O) => O < d ? N : O === d ? N * u : 0), D = M.reduce((N, O) => N + O, 0) || 1;
      return m.map((N, O) => N == null ? null : e.value * M[O] / D);
    }
    const f = cs.get(e.id);
    if (f && f.day === i && Date.now() - f.at < 5 * 60 * 1e3) return f.hours;
    try {
      const b = await R({ type: "recorder/statistics_during_period", start_time: new Date(i).toISOString(), end_time: n.toISOString(), statistic_ids: e.ids, period: "hour", types: ["change"] });
      e.ids.forEach((N) => ((b == null ? void 0 : b[N]) || []).forEach((O) => {
        const ce = typeof O.start == "number" ? O.start : Date.parse(O.start), Se = new Date(ce).getHours();
        ce >= i && Se < d && (m[Se] += Number(O.change) || 0);
      }));
      const M = new Date(n).setMinutes(0, 0, 0), D = await Promise.all(e.ids.map((N) => Promise.resolve(R({ type: "recorder/statistic_during_period", statistic_id: N, fixed_period: { start_time: new Date(M).toISOString(), end_time: n.toISOString() }, types: ["change"] })).then((O) => Number(O == null ? void 0 : O.change) || 0, () => 0)));
      m[d] = D.reduce((N, O) => N + O, 0);
    } catch {
    }
    return cs.set(e.id, { at: Date.now(), day: i, hours: m }), m;
  }
  async function In(e, n) {
    const i = await Kl(n);
    if (!e.isConnected) return;
    const d = Math.max(120, e.clientWidth || 260), u = Math.max(60, e.clientHeight || 130), m = 18, f = u - 18, b = d / 24, M = b * 0.72, D = (/* @__PURE__ */ new Date()).getHours(), N = i.map((we) => we ?? 0), O = Math.max(0, ...N), ce = (we) => f - (O > 0 ? we / O * (f - m) : 0), Se = (we) => we.toLocaleString(void 0, { maximumFractionDigits: we < 10 ? 2 : 1 }) + " " + n.unit, Ne = (we) => String(we).padStart(2, "0") + ":00", X = O > 0 ? N.indexOf(O) : -1;
    e.setAttribute("viewBox", "0 0 " + d + " " + u), e.setAttribute("aria-label", n.name + " today by the hour: " + Se(n.value) + (X >= 0 ? ", most " + Se(O) + " at " + Ne(X) : "")), e.innerHTML = [m, (m + f) / 2, f].map((we) => '<line x1="0" x2="' + d + '" y1="' + we + '" y2="' + we + '" stroke="var(--line)" stroke-width="1"/>').join("") + i.map((we, j) => we > 0 ? '<rect x="' + (j * b + (b - M) / 2).toFixed(1) + '" y="' + ce(we).toFixed(1) + '" width="' + M.toFixed(1) + '" height="' + (f - ce(we)).toFixed(1) + '" rx="2" fill="' + (j === D ? "var(--primary)" : "var(--text)") + '"' + (j === D ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((we) => '<text x="' + (we * b).toFixed(1) + '" y="' + (u - 3) + '">' + String(we).padStart(2, "0") + "</text>").join("") + (X >= 0 ? '<text x="0" y="11">Most: ' + se(Se(O)) + " at " + Ne(X) + "</text>" : "");
  }
  function Ji(e) {
    var n;
    (n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches || e.querySelectorAll("rect").forEach((i, d) => i.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: d * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function ci(e) {
    var u;
    if ((u = window.matchMedia) != null && u.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [n, i] = e.querySelectorAll("path");
    if (!(i != null && i.getTotalLength)) return;
    const d = i.getTotalLength();
    i.animate([{ strokeDasharray: d, strokeDashoffset: d }, { strokeDasharray: d, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), n == null || n.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let _r = null, ps = 0;
  const us = (e) => !e.startsWith("light.") || Ph.includes((At.get(e) || "").toLowerCase()), fs = () => Math.max(2, Bo((E == null ? void 0 : E.clientWidth) || 0).n), Qi = (e) => {
    const n = dn(e);
    return n.sections.map((i, d) => i && (n.parts || [])[d]).filter(Boolean);
  }, nl = (e) => Qi(e).slice(0, Da(e) - 1);
  function er(e) {
    const n = Ft().tiles;
    if (n) return n.filter((d) => x[d]);
    if (!_r) {
      const d = (u) => {
        var m;
        return (((m = x[u]) == null ? void 0 : m.state) === "on" ? 1e6 : 0) + (st[u] || 0);
      };
      _r = {
        lights: Je.rooms.flatMap((u) => u.lights).filter((u) => {
          var m;
          return us(u) && ((m = x[u]) == null ? void 0 : m.state) !== "unavailable";
        }).sort((u, m) => d(m) - d(u) || ke(u).localeCompare(ke(m))),
        climates: Je.rooms.flatMap((u) => u.actions.filter((m) => m.startsWith("climate.")))
      };
    }
    const i = _r.climates.filter((d) => x[d]).slice(0, e > 3 ? 2 : 1);
    return [..._r.lights.filter((d) => x[d]).slice(0, Math.max(0, e - i.length)), ...i];
  }
  const Er = (e, n, i, d) => (u) => '<section class="card tfCard tfDashCard ' + e + '" data-tf data-k="' + n + '" aria-label="' + i + '">' + (d ? '<div class="activityHeader">' + (n === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + i + "</button>" : '<div class="activityTitle">' + i + "</div>") + "</div>" : "") + '<div class="activityRows">' + u + "</div></section>";
  function Ka(e, n) {
    var m, f;
    e.dash = !0, e.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + se(((f = (m = o()) == null ? void 0 : m.config) == null ? void 0 : f.location_name) || "Home") + "</h1>" }), n.length && e.push({ key: "sums", wrap: (b) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Er("tfDash-bar", "sums-bar", "Summaries", !1)(b).replace(" data-tf", "") + "</div>", tiles: n.map((b) => ({ key: "sum:" + b.key, html: Js(b) })) }), It.length && e.push({ key: "areas", html: Ya(0) });
    const i = Ul();
    i.length && e.push({ key: "favs", wrap: Er("tfDash-favs", "favs", "Favourites", !0), tiles: i.map((b) => ({ key: "fav:" + b, html: Sr(b, { area: !0 }) })) });
    const d = ds();
    e.push({ key: "dash:act", html: va("dash:act", 0, "Activity", d.length ? d.map(Zl) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), e.push({ key: "dash:energy", html: Lr() });
    const u = fs();
    return ps = u, er(u >= 3 ? u : u * 2).forEach((b) => e.push({
      key: "dash:tile:" + b,
      wrap: (M) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + se(b) + '">' + M + "</div>",
      tiles: [{ key: b, html: Be(b, !1, nl(b)) }]
    })), Zi(), Tr(), e;
  }
  const po = 252, Xt = 16, $l = 200, hs = Math.round(po * 1.25), al = 60, uo = al + Xt, _o = 3, Xl = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average", aq: "Air quality", pollen: "Pollen", radar: "Rain radar" }, ol = ["wx", "favs", "act", "energy", "avg"], tr = ["XS", "S", "M", "L", "XL"], Eo = tr.length, pi = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4 }, Ea = (e) => !e.includes(".") || e.startsWith("light.") && et(e) ? Eo : Math.min(Eo, Qi(e).length + 1), Da = (e) => {
    const n = Ft().opts[e] || {}, i = Ea(e), d = Number(n.h) || (n.tall ? 5 : pi[e] || (i === Eo ? 4 : 2));
    return Math.max(1, Math.min(i, d));
  }, ui = 2, nr = 90, fi = 56, Mn = (e) => Xl[e] || ke(e), il = 409, Jl = 128;
  let An = !1, wt = null, Hn = null, $a = !1, pa = /* @__PURE__ */ new Map(), Dr = 0, Xa = 0;
  const Do = ["title", "sums"], Bo = (e) => {
    const n = Math.max(1, Math.floor((e + Xt) / ($l + Xt)));
    return { n, w: Math.max(1, Math.min(hs, Math.floor((e - (n - 1) * Xt) / n))) };
  }, Ft = () => {
    const e = { cells: {}, spans: {}, hidden: [], opts: {}, ...z.dash || {} }, n = Ln.filter((i) => !(e.known || []).includes(i) && !e.hidden.includes(i));
    return n.length ? { ...e, hidden: [...e.hidden, ...n] } : e;
  };
  function fo(e) {
    z = { ...z, dash: { ...e, known: Ln } }, zn();
  }
  function Jn() {
    const e = (n) => E.querySelector(n);
    return [
      ["title", e(".tfDashTitle"), "full"],
      ["sums", e(".tfDashBarRow"), "full"],
      ["wx", pt.wx, 2],
      ["areas", e(".tfAreas"), "areas"],
      ["favs", e(".tfDash-favs"), 2],
      ["act", e(".tfDash-act"), 2],
      ["energy", e(".tfDash-energy"), 2],
      ["avg", pt.avg, 2],
      ...Ln.map((n) => [n, pt[n], 1]),
      ...[...E.querySelectorAll(".tfDashTiles > [data-k]")].map((n) => [n.dataset.k, n, 1, !0])
    ].filter(([, n]) => n == null ? void 0 : n.isConnected).map(([n, i, d, u = !1]) => ({ key: n, el: i, span: d, tile: u }));
  }
  const Br = (e, n, i) => e.span === "full" ? n : e.span === "areas" ? Math.min(n, Math.ceil((il + Math.max(0, It.length - 1) * (Jl + Xt) + Xt) / (i + Xt))) : Math.min(n, Ft().spans[e.key] ?? e.span), Rr = (e) => Da(e.key);
  function ms(e, n, i = null) {
    const d = Ft().cells, u = e.every((b) => !d[b.key] || d[b.key].col + b.cols <= n), m = (b) => d[b.key] || { row: 1e9, col: 0 };
    return (() => {
      const b = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map(), D = (X, we, j, fe) => {
        for (let K = we; K < we + fe; K++) for (let Ue = X; Ue < X + j; Ue++) if (b.has(Ue + "," + K)) return !1;
        return !0;
      }, N = (X, we, j) => {
        for (let fe = j; fe < j + X.rows; fe++) for (let K = we; K < we + X.cols; K++) b.add(K + "," + fe);
        M.set(X.key, { col: we, row: j, cols: X.cols, rows: X.rows });
      }, O = (X, we, j) => {
        for (we = Math.max(0, Math.min(n - X.cols, we)), j = Math.max(0, j); !D(we, j, X.cols, X.rows); ) j++;
        N(X, we, j);
      }, ce = (X) => {
        for (let we = 0; ; we++) for (let j = 0; j <= n - X.cols; j++) if (D(j, we, X.cols, X.rows)) {
          N(X, j, we);
          return;
        }
      };
      i && O(i, wt.col, wt.row);
      const Se = e.filter((X) => X !== i), Ne = (X, we) => m(X).row - m(we).row || m(X).col - m(we).col;
      return u ? (Se.filter((X) => d[X.key]).sort(Ne).forEach((X) => O(X, d[X.key].col, d[X.key].row)), Se.filter((X) => !d[X.key]).forEach(ce), M) : ([...Se].sort(Ne).forEach(ce), M);
    })();
  }
  function hi(e, n) {
    const i = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), u = (m, f, b) => {
      for (let M = f; M < f + b.rows; M++) for (let D = m; D < m + b.cols; D++) if (i.has(D + "," + M)) return !1;
      return !0;
    };
    return e.forEach((m) => {
      for (let f = 0; ; f++) {
        let b = 0;
        for (; b <= n - m.cols && !u(b, f, m); ) b++;
        if (!(b > n - m.cols)) {
          for (let M = f; M < f + m.rows; M++) for (let D = b; D < b + m.cols; D++) i.add(D + "," + M);
          d.set(m.key, { col: b, row: f, cols: m.cols, rows: m.rows });
          return;
        }
      }
    }), d;
  }
  function ar() {
    const e = Ft(), n = new Set(e.hidden), i = Jn().filter((f) => !Do.includes(f.key));
    let d = pa;
    if (!d.size) {
      const f = e.pegs || 4, b = i.filter((M) => !n.has(M.key));
      b.forEach((M) => {
        M.cols = Br(M, f, po), M.rows = Rr(M) ?? ui;
      }), d = ms(b, f);
    }
    const u = (f) => !n.has(f.key) && d.get(f.key) || { row: 1e9, col: 0 };
    i.sort((f, b) => u(f).row - u(b).row || u(f).col - u(b).col);
    const m = (e.phone || []).map((f) => i.find((b) => b.key === f && !n.has(f))).filter(Boolean);
    return [...m, ...i.filter((f) => !m.includes(f))];
  }
  const Ql = () => {
    const e = ar();
    e.forEach((n, i) => n.el.style.setProperty("--o", String(3 + i))), rl([...Jn().filter((n) => Do.includes(n.key)), ...e].map((n) => n.el));
  };
  function rl(e) {
    if (wt) return;
    const n = a.activeElement;
    let i = null;
    for (const d of new Set(e.map((u) => {
      for (; u && u.parentElement !== E; ) u = u.parentElement;
      return u;
    }).filter(Boolean))) {
      const u = i ? i.nextSibling : E.querySelector(":scope > [data-tf]");
      if (d !== u)
        try {
          E.moveBefore ? E.moveBefore(d, u) : E.insertBefore(d, u);
        } catch {
          E.insertBefore(d, u);
        }
      i = d;
    }
    n && n !== a.activeElement && n.isConnected && n.focus({ preventScroll: !0 });
  }
  const mi = (e, n) => fo({ ...e, cells: n, pegs: Bo(E.clientWidth).n });
  function Sn() {
    var fe;
    if (!w || !E) return;
    const e = E.clientWidth, n = e < 2 * po + Xt, i = h.classList.contains("tfDash"), { n: d, w: u } = n ? { n: 2, w: Math.floor((e - Xt) / 2) } : Bo(e);
    lt.classList.add("tfPegs"), lt.style.setProperty("--peg-n", d), lt.style.setProperty("--peg-w", u + "px");
    const m = new Set(Ft().hidden);
    Ln.forEach((K) => {
      var Ue;
      return (Ue = pt[K]) == null ? void 0 : Ue.classList.toggle("tfNotAdded", m.has(K) && !(wt != null && wt.fromTray && wt.key === K));
    }), h.classList.toggle("tfBoard", i), h.classList.toggle("tfEditing", i && An && !n);
    const f = c("dashEditNav");
    f && (f.hidden = !i || n, f.classList.toggle("active", An), f.setAttribute("aria-pressed", String(An)), f.setAttribute("aria-label", An ? "Done editing" : "Edit the dashboard"), f.title = An ? "Done" : "Edit", f.innerHTML = An ? Lh : ap);
    const b = i ? Jn() : [];
    if (!i) {
      E.style.height = "", E.querySelectorAll(".tfBoardItem").forEach((K) => {
        K.classList.remove("tfBoardItem", "tfBoardHidden"), K.style.left = K.style.top = K.style.width = K.style.height = "";
      }), (fe = E.querySelector(".tfDash-act > .activityRows")) == null || fe.style.removeProperty("max-height"), sl(!1), h.classList.contains("tfDash") && Ql(), mn();
      return;
    }
    E.style.setProperty("--peg-w", u + "px");
    const M = new Set(Ft().hidden), D = u + Xt;
    wt != null && wt.fromTray && M.delete(wt.key), b.forEach((K) => K.el.classList.toggle("tfBoardHidden", M.has(K.key)));
    const N = b.filter((K) => !M.has(K.key) && getComputedStyle(K.el).display !== "none");
    let O = 0;
    N.filter((K) => Do.includes(K.key)).forEach((K) => {
      K.el.classList.add("tfBoardItem"), Object.assign(K.el.style, { width: e + "px", height: "", left: "0px", top: O + "px" });
      const Ue = K.key === "sums" && K.el.querySelector(".tfDash-bar"), Rt = Ue ? Ue.querySelectorAll(".activityRow").length : 0;
      Ue && (Ue.style.maxWidth = "none");
      for (let yt = 1; Ue && yt <= Rt && (Ue.style.setProperty("--bar-cols", String(Math.ceil(Rt / yt))), !(Ue.offsetWidth <= e)); yt++)
        ;
      Ue && (Ue.style.maxWidth = ""), O += K.el.offsetHeight + Xt;
    }), Xa = O;
    const ce = N.filter((K) => !Do.includes(K.key));
    ce.forEach((K) => {
      K.cols = Br(K, d, u), K.el.classList.add("tfBoardItem"), K.el.style.width = (K.cols === d ? e : K.cols * u + (K.cols - 1) * Xt) + "px", K.el.style.height = "", K.rows = Rr(K) ?? Math.max(1, Math.ceil((K.el.offsetHeight + Xt - 6) / uo));
    });
    const Se = wt && ce.find((K) => K.key === wt.key), Ne = n && ar().map((K) => K.key), X = (K) => Ne.includes(K.key) ? Ne.indexOf(K.key) : -1, we = n ? hi([...ce].sort((K, Ue) => X(K) - X(Ue)), d) : ms(ce, d, Se);
    we.forEach((K) => Object.assign(K, { x: K.cols === d ? 0 : K.col * D, y: Xa + K.row * uo, w: K.cols === d ? e : K.cols * u + (K.cols - 1) * Xt, h: K.rows * uo - Xt })), ce.forEach((K) => {
      const Ue = we.get(K.key);
      K.el.style.height = Ue.h + "px", K.el.dataset.rows = Da(K.key), K.el.classList.contains("tfDac") && K.el.style.setProperty("--tf-dac-pad", Ue.h - nr + "px"), !(K === Se && !wt.fromTray) && (K.el.style.left = Ue.x + "px", K.el.style.top = Ue.y + "px");
    }), n || (pa = we), rl([...N.filter((K) => Do.includes(K.key)), ...ce.slice().sort((K, Ue) => we.get(K.key).row - we.get(Ue.key).row || we.get(K.key).col - we.get(Ue.key).col)].map((K) => K.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([K, Ue]) => {
      const Rt = we.get(K), yt = Rt && E.querySelector(Ue), Cn = yt == null ? void 0 : yt.querySelector(":scope > .activityRows"), Ke = yt == null ? void 0 : yt.querySelector(":scope > .activityHeader");
      if (!Cn || !Ke) return;
      const Ht = Rt.rows === 1 ? Rt.h : Rt.h - (Ke.offsetTop + Ke.offsetHeight + 10) - parseFloat(getComputedStyle(yt).paddingBottom), Kr = Math.max(1, Math.floor(Ht / fi));
      Cn.style.setProperty("--fill-row", (Ht / Kr).toFixed(2) + "px"), Cn.style.maxHeight = Ht + "px";
    }), Dr = Math.max(0, ...[...we.values()].map((K) => K.row + K.rows));
    let j = Xa + Dr * uo - Xt;
    j = sl(An && !n, ce, we, j, d, u), E.style.height = j + "px", requestAnimationFrame(() => h.classList.add("tfBoardReady")), b.forEach((K) => Yn.observe(K.el)), Ts(), mn();
  }
  const _n = () => {
    $a || ($a = !0, requestAnimationFrame(() => {
      $a = !1, Sn();
    }));
  }, Yn = new ResizeObserver(() => {
    wt || _n();
  });
  function sl(e, n = [], i = /* @__PURE__ */ new Map(), d = 0, u = 1, m = po) {
    E.querySelectorAll(".tfEditChips").forEach((N) => {
      (!e || !N.closest(".tfBoardItem")) && N.remove();
    }), E.querySelectorAll(".tfFavHides").forEach((N) => N.remove()), E.querySelectorAll(".tfBoardItem").forEach((N) => [...N.children].forEach((O) => {
      O.classList.contains("tfEditChips") || O.toggleAttribute("inert", e);
    }));
    let f = E.querySelector(".tfBoardCells"), b = E.querySelector(".tfBoardLand");
    if (!e)
      return f == null || f.remove(), b == null || b.remove(), ua(), d;
    const M = Dr + _o;
    if (f || (f = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), f.setAttribute("aria-hidden", "true"), E.prepend(f)), f.style.top = Xa + "px", f.dataset.size !== u + "x" + M + "x" + m && (f.dataset.size = u + "x" + M + "x" + m, f.style.gridTemplateColumns = "repeat(" + u + "," + m + "px)", f.innerHTML = "<i></i>".repeat(u * M)), d = Math.max(d, Xa + M * uo - Xt), n.forEach((N) => {
      const O = N.el;
      !O || O.querySelector(":scope > .tfEditChips") || O.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Nd + '</span><button class="tfEditChip" type="button" data-board-more="' + se(N.key) + '" aria-label="' + se(Mn(N.key)) + ' options" aria-haspopup="menu">' + Ch + "</button></div>");
    }), wt && i.has(wt.key)) {
      b || (b = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), E.appendChild(b));
      const N = i.get(wt.key);
      Object.assign(b.style, { left: N.x + "px", top: N.y + "px", width: N.w + "px", height: N.h + "px" });
    } else b == null || b.remove();
    const D = E.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (D) {
      const N = D.getBoundingClientRect();
      D.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...D.querySelectorAll('[data-k^="fav:"]')].map((O) => {
        const ce = O.getBoundingClientRect(), Se = O.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + se(Se) + '" aria-label="Hide ' + se(ke(Se)) + ' from the dashboard" style="left:' + Math.round(ce.right - N.left - 42) + "px;top:" + Math.round(ce.top - N.top + (ce.height - 32) / 2) + 'px">' + ep + "</button>";
      }).join("") + "</div>");
    }
    return d;
  }
  let gs = "";
  function or(e) {
    An = e, e || (wt = null, Ia = Zn = !1, ua()), Sn(), e ? gs = JSON.stringify(z) : gs && JSON.stringify(z) !== gs && Sa("Changes saved");
  }
  function vs(e, n) {
    var Ne, X;
    ua();
    const i = pa.get(e), { n: d } = Bo(E.clientWidth), u = Ft(), m = u.spans[e] ?? 2;
    if (!i) return;
    const f = i.cols >= d, b = (we, j, fe) => '<button type="button" role="menuitem" data-board-act="' + we + '"' + (fe ? " disabled" : "") + ">" + j + "</button>", M = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    M.setAttribute("role", "menu"), M.setAttribute("aria-label", Mn(e) + " options");
    const D = E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]'), N = Ea(e), O = Da(e), ce = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + tr.map((we, j) => '<button type="button" role="menuitemradio" aria-checked="' + (j + 1 === O) + '" aria-label="' + we + ", " + (j + 1) + (j ? " rows" : " row") + '" data-board-act="h:' + (j + 1) + '"' + (j < N ? "" : " disabled") + ">" + we + "</button>").join("") + "</div></div>";
    M.innerHTML = ce + (ol.includes(e) ? b("size", m === 1 ? "Card size" : "Tile size") : "") + (e === "energy" ? b("graph", (((Ne = u.opts.energy) == null ? void 0 : Ne.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + b("left", "Move left", f || i.col === 0) + b("right", "Move right", f || i.col + i.cols >= d) + b("up", "Move up", i.row <= 0) + b("down", "Move down") + (D ? b("remove", "Remove") : b("hide", "Hide")), E.appendChild(M);
    const Se = Math.min(i.x + i.w - M.offsetWidth, E.clientWidth - M.offsetWidth);
    Object.assign(M.style, { left: Math.max(0, Se) + "px", top: i.y + 28 + "px" }), Hn = { key: e, menu: M, opener: n }, (X = M.querySelector("button:not([disabled])")) == null || X.focus();
  }
  function ua(e) {
    if (!Hn) return;
    const { menu: n, opener: i } = Hn;
    Hn = null, n.remove(), e && (i == null || i.focus());
  }
  const ho = () => Object.fromEntries([...pa].map(([e, n]) => [e, { col: n.col, row: n.row }]));
  function ll(e, n) {
    var f, b;
    if (n === "remove") {
      ua(), ws(e);
      return;
    }
    const i = z, d = Ft(), u = ho(), m = u[e] || { col: 0, row: 0 };
    n === "size" && (d.spans = { ...d.spans, [e]: (d.spans[e] ?? 2) === 1 ? 2 : 1 }), n.startsWith("h:") && (d.opts = { ...d.opts, [e]: { ...d.opts[e] || {}, h: Number(n.slice(2)), tall: void 0 } }), n === "graph" && (d.opts = { ...d.opts, energy: { ...d.opts.energy || {}, graph: (((f = d.opts.energy) == null ? void 0 : f.graph) || "above") === "above" ? "below" : "above" } }), n === "left" && (u[e] = { ...m, col: m.col - 1 }), n === "right" && (u[e] = { ...m, col: m.col + 1 }), n === "up" && (u[e] = { ...m, row: m.row - 1 }), n === "down" && (u[e] = { ...m, row: m.row + 1 }), n === "hide" && (d.hidden = [.../* @__PURE__ */ new Set([...d.hidden, e])]), ["left", "right", "up", "down"].includes(n) && (wt = { key: e, col: u[e].col, row: u[e].row }), mi(d, u), wt && (Sn(), wt = null, mi(Ft(), ho())), ua(), n === "graph" && (xn.delete("dash:energy"), cn()), n.startsWith("h:") && e.includes(".") && cn(), Sn(), n !== "hide" ? (b = E.querySelector('[data-board-more="' + CSS.escape(e) + '"]')) == null || b.focus() : Sa(Mn(e) + " hidden", Ir(i));
  }
  const dl = (e) => {
    var n;
    return Ln.includes(e) && !(((n = z.dash) == null ? void 0 : n.cells) || {})[e] ? " added" : " put back";
  };
  function bs(e) {
    const n = Ft(), i = Mn(e) + dl(e);
    fo({ ...n, hidden: n.hidden.filter((d) => d !== e) }), Sn(), Sa(i);
  }
  const Nr = () => Ft().tiles || [...E.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => e.dataset.k).filter((e) => !Ft().hidden.includes(e));
  function mo(e, n) {
    const i = Ft();
    mi({ ...i, tiles: e, hidden: i.hidden.filter((d) => !d.includes(".")) }, n), cn(), mn();
  }
  const Ba = (e) => {
    mo([...Nr().filter((n) => n !== e), e], ho()), Sa(ke(e) + " added"), pl(e);
  }, ws = (e) => {
    const n = z, i = ho();
    delete i[e], mo(Nr().filter((d) => d !== e), i), Sa(ke(e) + " removed", Ir(n));
  };
  let Ro = 0;
  function Sa(e, n = null) {
    var f;
    const i = c("toast");
    if (!i) return;
    if (i.replaceChildren(Object.assign(document.createElement("span"), { textContent: e })), n) {
      const b = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      b.addEventListener("click", () => {
        clearTimeout(Ro), i.classList.remove("show", "withAction"), n();
      }), i.appendChild(b);
    }
    const d = h.getBoundingClientRect(), u = (f = a.querySelector(".bottomNav")) == null ? void 0 : f.getBoundingClientRect(), m = _t.classList.contains("open") && !Pa ? Math.min(d.right, _t.getBoundingClientRect().left) : d.right;
    i.style.left = (d.left + m) / 2 + "px", i.style.bottom = (u != null && u.height ? window.innerHeight - u.top + 12 : 26) + "px", i.classList.add("tfToast", "show"), i.classList.toggle("withAction", !!n), clearTimeout(Ro), Ro = setTimeout(() => i.classList.remove("show", "withAction"), n ? 5e3 : 2200);
  }
  const cl = 700, fa = 1e3, hn = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  hn.setAttribute("role", "tooltip"), hn.setAttribute("aria-hidden", "true"), h.appendChild(hn);
  let gi = null, Ra = 0, No = 0, go = -1 / 0;
  const ys = (e) => {
    if (e.nodeType !== 1) return !1;
    const n = getComputedStyle(e);
    return n.textOverflow === "ellipsis" && e.scrollWidth > e.clientWidth + 1 || n.webkitLineClamp !== "none" && e.scrollHeight > e.clientHeight + 1;
  }, Ja = (e) => {
    for (let n = e; n && n !== h; n = n.parentElement) if (ys(n)) return n;
    return null;
  };
  function ir(e, n) {
    clearTimeout(Ra), clearTimeout(No);
    const i = () => {
      if (!e.isConnected) return;
      gi = e, hn.textContent = n, hn.hidden = !1;
      const d = e.getBoundingClientRect(), u = hn.getBoundingClientRect(), m = d.top - u.height - 8 >= 8 ? d.top - u.height - 8 : d.bottom + 8;
      hn.style.left = Math.max(8, Math.min(window.innerWidth - u.width - 8, d.left + d.width / 2 - u.width / 2)) + "px", hn.style.top = m + "px";
    };
    !hn.hidden || performance.now() - go < fa ? i() : Ra = setTimeout(i, cl);
  }
  function Pr() {
    clearTimeout(Ra), clearTimeout(No), hn.hidden || (go = performance.now()), hn.hidden = !0, gi = null;
  }
  a.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    if (hn.contains(e.target)) {
      clearTimeout(No);
      return;
    }
    const n = Ja(e.target);
    if (n && mt.names === "scroll" && n.matches(vi)) {
      rr(n);
      return;
    }
    if (n) {
      n !== gi ? ir(n, n.textContent.trim()) : clearTimeout(No);
      return;
    }
    clearTimeout(Ra), clearTimeout(No), No = setTimeout(Pr, 120);
  }), a.addEventListener("focusin", (e) => {
    var d;
    const n = e.target;
    if (!((d = n.matches) != null && d.call(n, ":focus-visible"))) return;
    let i = [n, ...n.querySelectorAll("*")].filter(ys);
    mt.names === "scroll" && (i.filter((u) => u.matches(vi)).forEach(rr), i = i.filter((u) => !u.matches(vi))), i.length && ir(n, i.map((u) => u.textContent.trim()).join(" · "));
  }), a.addEventListener("focusout", (e) => {
    e.target === gi && Pr();
  }), a.addEventListener("keydown", (e) => {
    e.key === "Escape" && !hn.hidden && (e.stopPropagation(), Pr());
  }, !0), window.addEventListener("scroll", () => {
    (!hn.hidden || Ra) && Pr();
  }, { capture: !0, passive: !0 });
  const vi = ".activityRowName,.activityRowMeta", xs = /* @__PURE__ */ new WeakSet();
  function rr(e) {
    var m;
    if (mt.names !== "scroll" || xs.has(e) || (m = window.matchMedia) != null && m.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const n = e.scrollWidth - e.clientWidth;
    if (n < 2) return;
    const i = n / 30 * 1e3, d = 600 + i + 1e3 + i;
    xs.add(e), e.style.textOverflow = "clip";
    const u = e.animate([
      { textIndent: "0px", offset: 0 },
      { textIndent: "0px", offset: 600 / d, easing: "ease-in-out" },
      { textIndent: -n + "px", offset: (600 + i) / d },
      { textIndent: -n + "px", offset: (1600 + i) / d, easing: "ease-in-out" },
      { textIndent: "0px", offset: 1 }
    ], { duration: d });
    u.onfinish = u.oncancel = () => {
      e.style.textOverflow = "", xs.delete(e);
    };
  }
  const Na = new IntersectionObserver((e) => e.forEach((n) => {
    n.isIntersecting && (Na.unobserve(n.target), rr(n.target));
  }), { threshold: 1 });
  let ks = !1;
  new MutationObserver(() => {
    ks || mt.names !== "scroll" || (ks = !0, setTimeout(() => {
      ks = !1, a.querySelectorAll(vi).forEach((e) => {
        !e.dataset.glided && ys(e) && (e.dataset.glided = "1", Na.observe(e));
      });
    }, 300));
  }).observe(a, { childList: !0, subtree: !0 });
  const Ir = (e) => () => {
    z = e, zn(), cn(), Sn(), mn();
  };
  function pl(e) {
    const n = () => E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]');
    setTimeout(() => {
      var f;
      const i = n();
      if (!i) return;
      const d = (f = window.matchMedia) == null ? void 0 : f.call(window, "(prefers-reduced-motion: reduce)").matches, u = i.getBoundingClientRect();
      (u.top < 0 || u.bottom > window.innerHeight) && i.scrollIntoView({ behavior: d ? "auto" : "smooth", block: "center" });
      const m = (b) => "0 0 0 4px color-mix(in srgb,var(--primary) " + b + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + b + "%,transparent)";
      i.animate([{ boxShadow: m(55) }, { boxShadow: m(0) }], { duration: 1500, easing: d ? "steps(1, end)" : "ease-out" });
    }, bi(e) ? 260 : 0);
  }
  function bi(e) {
    const n = pa.get(e);
    if (!n || !_t.classList.contains("open") || Pa) return !1;
    const { n: i, w: d } = Bo(E.clientWidth), u = _t.getBoundingClientRect().left - E.getBoundingClientRect().left, m = (M) => M * (d + Xt) + n.cols * d + (n.cols - 1) * Xt <= u;
    if (m(n.col)) return !1;
    const f = /* @__PURE__ */ new Set();
    pa.forEach((M, D) => {
      if (D !== e) for (let N = M.row; N < M.row + M.rows; N++) for (let O = M.col; O < M.col + M.cols; O++) f.add(O + "," + N);
    });
    const b = (M, D) => {
      for (let N = D; N < D + n.rows; N++) for (let O = M; O < M + n.cols; O++) if (f.has(O + "," + N)) return !1;
      return !0;
    };
    for (let M = 0; M <= Dr; M++) for (let D = 0; D + n.cols <= i && m(D); D++)
      if (b(D, M))
        return mi(Ft(), { ...ho(), [e]: { col: D, row: M } }), Sn(), !0;
    return !1;
  }
  const ed = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, _t = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  _t.setAttribute("aria-label", "Edit the dashboard"), _t.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', h.appendChild(_t);
  let Pa = !1, Ia = !1, Zn = !1, rn = null, Ct = !1;
  const vo = {}, Qa = (e, n) => {
    if (vo[e] === n) return;
    vo[e] = n;
    const i = _t.querySelector('[data-tray="' + e + '"]');
    i.innerHTML = n, la(i);
  }, Hr = (e, n) => '<span class="tfTrayName"><span class="activityRowName">' + se(ke(e)) + '</span><span class="activityRowMeta">' + se(n) + "</span></span>", Fn = (e, n, i) => '<li class="tfTrayFav' + (n ? " off" : "") + '" data-tray-fav="' + se(e) + '"><span class="tfTrayGrip" aria-hidden="true">' + Nd + '</span><span class="tfIcon"' + Bt(e, on(e)) + "></span>" + Hr(e, n ? "Hidden" + (At.get(e) ? " · " + At.get(e) : "") : At.get(e) || an(e)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + se(e) + '" aria-pressed="' + !n + '" aria-label="' + (n ? "Show " : "Hide ") + se(ke(e)) + ' on the dashboard">' + (n ? ep : Th) + "</button>" + (i ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + se(e) + '" aria-label="Remove ' + se(ke(e)) + ' from favourites">' + tp + "</button>" : "<span></span>") + "</li>";
  function Fr(e, n, i, d) {
    const u = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(x).filter((f) => n(f) && !i.has(f) && x[f].state !== "unavailable").filter((f) => {
      const b = (ke(f) + " " + (At.get(f) || "") + " " + f).toLowerCase();
      return u.every((M) => b.includes(M));
    }).sort((f, b) => (At.get(f) || "~").localeCompare(At.get(b) || "~") || ke(f).localeCompare(ke(b))).slice(0, 40).map((f) => '<li><button class="tfTrayPickItem" type="button" ' + d + '="' + se(f) + '"><span class="tfIcon"' + Bt(f, on(f)) + "></span>" + Hr(f, At.get(f) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function mn() {
    const e = An && h.classList.contains("tfBoard");
    if (_t.classList.toggle("open", e), _t.classList.toggle("tucked", e && Pa), _t.toggleAttribute("inert", !e), e || (Ct = !1), hl(), !e) return;
    const n = _t.querySelector("[data-tray-tuck]");
    n.innerHTML = Pa ? jc : np, n.setAttribute("aria-expanded", String(!Pa)), n.setAttribute("aria-label", Pa ? "Show the edit tray" : "Tuck the edit tray away");
    const i = Ft().hidden.filter((f) => Jn().some((b) => b.key === f));
    Qa("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((f) => '<button class="tfTrayCard" type="button" data-tray-card="' + se(f) + '" aria-label="' + se(Mn(f)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + Nd + "</span>" + se(Mn(f)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Qa("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (Ft().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Ct + '">' + (Ct ? "Hide the phone" : "Show the phone") + "</button>");
    const d = new Set(z.favHidden || []), u = Pn(), m = [...u, ...[...d].filter((f) => !u.includes(f) && x[f])];
    Qa("favs", m.map((f) => Fn(f, d.has(f), u.includes(f))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), _t.querySelector('[data-pick="tiles"]').hidden = !Zn, _t.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(Zn)), Zn && Qa("tilepick", Fr(_t.querySelector("[data-tile-search]").value, (f) => Pl.includes(f.split(".")[0]), new Set(Nr()), "data-tile-pick")), _t.querySelector('[data-pick="favs"]').hidden = !Ia, _t.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Ia)), Ia && Qa("pick", Fr(_t.querySelector("[data-fav-search]").value, (f) => ed.test(f), new Set(Pn()), "data-fav-pick")), Qa("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (xa() ? " on" : "") + '" type="button" role="switch" aria-checked="' + xa() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Po = (e) => {
    z = { ...z, ...e }, zn(), cn(), mn();
  };
  function Ms(e, n) {
    const i = z, d = new Set(z.favHidden || []);
    n ? d.delete(e) : d.add(e), Po({ favHidden: [...d] }), n ? Sa(ke(e) + " put back") : Sa(ke(e) + " hidden", Ir(i));
  }
  const td = (e) => {
    const n = z;
    Po({ favourites: Pn().filter((i) => i !== e), favHidden: (z.favHidden || []).filter((i) => i !== e) }), Sa(ke(e) + " removed from favourites", Ir(n));
  }, nd = (e) => {
    Po({ favourites: [...Pn().filter((n) => n !== e), e], favHidden: (z.favHidden || []).filter((n) => n !== e) }), Sa(ke(e) + " added to favourites");
  };
  _t.addEventListener("click", (e) => {
    var i;
    const n = e.target.closest("button");
    n && (n.hasAttribute("data-tray-done") ? or(!1) : n.hasAttribute("data-tray-tuck") ? (Pa = !Pa, mn()) : n.hasAttribute("data-phone-toggle") ? (Ct = !Ct, mn(), Ct && ((i = On.querySelector("[data-phone-key]")) == null || i.focus({ preventScroll: !0 }))) : n.dataset.trayCard ? e.detail === 0 && (bs(n.dataset.trayCard), mn()) : n.dataset.favEye ? Ms(n.dataset.favEye, n.getAttribute("aria-pressed") !== "true") : n.dataset.favRemove ? td(n.dataset.favRemove) : n.hasAttribute("data-fav-add") ? (Ia = !Ia, mn(), Ia && _t.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : n.dataset.favPick ? nd(n.dataset.favPick) : n.hasAttribute("data-tile-add") ? (Zn = !Zn, mn(), Zn && _t.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : n.dataset.tilePick ? Ba(n.dataset.tilePick) : n.hasAttribute("data-fav-suggest") && Po({ suggest: !xa() }));
  }), _t.addEventListener("input", (e) => {
    e.target.matches("[data-fav-search],[data-tile-search]") && mn();
  }), _t.addEventListener("keydown", (e) => {
    var i, d;
    const n = !!((d = (i = e.target).closest) != null && d.call(i, '[data-pick="tiles"],[data-tile-add]'));
    e.key !== "Escape" || !(n ? Zn : Ia) || (e.stopPropagation(), n ? Zn = !1 : Ia = !1, mn(), _t.querySelector(n ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function ul(e, n, i, d) {
    e.preventDefault();
    const u = e.clientX, m = e.clientY;
    let f = null, b = 0;
    const M = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), D = (O) => {
      if (!f) {
        if (Math.hypot(O.clientX - u, O.clientY - m) < 4) return;
        f = n.cloneNode(!0), f.classList.add("tfTrayGhost"), f.style.width = n.offsetWidth + "px", h.appendChild(f);
      }
      f.style.transform = "translate(" + (O.clientX - 24) + "px," + (O.clientY - 24) + "px)";
      const ce = !Pa && O.clientX >= _t.getBoundingClientRect().left;
      if (i === "card") {
        const X = E.getBoundingClientRect(), { w: we } = Bo(E.clientWidth);
        wt = !ce && O.clientX >= X.left && O.clientX <= X.right && O.clientY >= X.top + Xa ? { key: d, col: Math.max(0, Math.floor((O.clientX - X.left) / (we + Xt))), row: Math.max(0, Math.floor((O.clientY - X.top - Xa) / uo)), fromTray: !0 } : null, b || (b = requestAnimationFrame(() => {
          b = 0, Sn();
        }));
        return;
      }
      const Se = E.querySelector(".tfDash-favs"), Ne = Se == null ? void 0 : Se.getBoundingClientRect();
      if (rn = null, Ne && !ce && O.clientX >= Ne.left && O.clientX <= Ne.right && O.clientY >= Ne.top && O.clientY <= Ne.bottom) {
        let X = 1 / 0;
        Se.querySelectorAll('[data-k^="fav:"]').forEach((we, j) => {
          const fe = we.getBoundingClientRect(), K = Math.hypot(O.clientX - (fe.left + fe.width / 2), O.clientY - (fe.top + fe.height / 2));
          K < X && (X = K, rn = { i: j, r: fe, after: O.clientX > fe.left + fe.width / 2 });
        }), rn || (rn = { i: 0, r: null, after: !1 });
      }
      rn != null && rn.r ? (M.isConnected || h.appendChild(M), Object.assign(M.style, { left: (rn.after ? rn.r.right : rn.r.left) - 2 + "px", top: rn.r.top + 8 + "px", height: rn.r.height - 16 + "px" })) : M.remove();
    }, N = () => {
      if (window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", N), window.removeEventListener("pointercancel", N), cancelAnimationFrame(b), f == null || f.remove(), M.remove(), i === "card") {
        if (!f) bs(d);
        else if (wt != null && wt.fromTray) {
          Sn();
          const X = Mn(d) + dl(d), we = Ft(), j = ho();
          wt = null, mi({ ...we, hidden: we.hidden.filter((fe) => fe !== d) }, j), Sa(X);
        }
        wt = null, Sn(), cn(), mn();
        return;
      }
      if (!rn) return;
      const O = new Set(z.favHidden || []);
      O.delete(d);
      const ce = Pn().filter((X) => X !== d), Se = ce.filter((X) => !O.has(X)), Ne = Se[Math.min(rn.i + (rn.after ? 1 : 0), Se.length)];
      ce.splice(Ne ? ce.indexOf(Ne) : ce.length, 0, d), rn = null, Po({ favourites: ce, favHidden: [...O] }), Sa(ke(d) + " put back");
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", N), window.addEventListener("pointercancel", N);
  }
  const fl = { sums: 201, wx: 364, favs: 364, areas: 364, act: 364, energy: 288, avg: 288, aq: 288, pollen: 288, radar: 288 }, Ss = 136, Or = 288, sr = 0.8, ad = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, On = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  On.setAttribute("aria-label", "Phone order"), On.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + tp + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', h.appendChild(On);
  let Wr = "";
  function hl() {
    var b;
    const e = Ct && An && h.classList.contains("tfBoard") && !Pa;
    if (On.classList.toggle("open", e), On.toggleAttribute("inert", !e), !e) return;
    const n = ar().filter((M) => !Ft().hidden.includes(M.key)), i = n.length, d = (M) => Math.round(M * sr * 10) / 10 + "px", u = (M, D) => {
      const N = M.el.classList.contains("tfDac"), O = M.tile ? N ? Or : Ss : fl[M.key] || Ss;
      return '<button class="tfPhoneBlock' + (M.tile ? " tile" : "") + '" type="button" data-phone-key="' + se(M.key) + '" style="min-height:' + d(O) + '" aria-label="' + se(Mn(M.key) + ", " + (D + 1) + " of " + i + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (M.tile ? Bt(M.key, on(M.key)) : Bt(M.key, ad[M.key])) + '></span><span class="tfPhoneName">' + se(Mn(M.key)) + "</span></button>";
    }, m = '<div class="tfPhoneTitle">' + se(((b = E.querySelector(".tfDashTitle")) == null ? void 0 : b.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + d(fl.sums) + '"><span class="tfPhoneName">' + se(Mn("sums")) + "</span></div>" + n.map(u).join("");
    if (On.querySelector('[data-phone="note"]').innerHTML = Ft().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", m === Wr) return;
    Wr = m;
    const f = On.querySelector('[data-phone="list"]');
    f.innerHTML = m, la(f);
  }
  function ml(e, n) {
    var i;
    fo({ ...Ft(), phone: e }), mn(), n && ((i = On.querySelector('[data-phone-key="' + CSS.escape(n) + '"]')) == null || i.focus({ preventScroll: !0 }));
  }
  const Cs = () => [...On.querySelectorAll("[data-phone-key]")].map((e) => e.dataset.phoneKey);
  function wi(e, n) {
    e.preventDefault();
    const i = n.parentElement, d = On.querySelector(".tfPhoneScreen"), u = Cs().join();
    n.classList.add("moving");
    const m = (b) => {
      const M = d.getBoundingClientRect();
      b.clientY > M.bottom - 40 ? d.scrollTop += 12 : b.clientY < M.top + 40 && (d.scrollTop -= 12);
      const D = [...i.querySelectorAll("[data-phone-key]")].find((ce) => {
        const Se = ce.getBoundingClientRect();
        return ce !== n && b.clientX >= Se.left && b.clientX <= Se.right && b.clientY >= Se.top && b.clientY <= Se.bottom;
      });
      if (!D) return;
      const N = D.getBoundingClientRect(), O = D.classList.contains("tile") ? b.clientX < N.left + N.width / 2 : b.clientY < N.top + N.height / 2;
      i.insertBefore(n, O ? D : D.nextSibling);
    }, f = () => {
      window.removeEventListener("pointermove", m), window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f), n.classList.remove("moving");
      const b = Cs();
      Wr = "", b.join() !== u ? ml(b) : hl();
    };
    window.addEventListener("pointermove", m), window.addEventListener("pointerup", f), window.addEventListener("pointercancel", f);
  }
  On.addEventListener("pointerdown", (e) => {
    const n = e.target.closest("[data-phone-key]");
    n && e.button <= 0 && wi(e, n);
  }), On.addEventListener("click", (e) => {
    var i;
    const n = e.target.closest("button");
    if (n != null && n.hasAttribute("data-phone-close"))
      Ct = !1, mn(), (i = _t.querySelector("[data-phone-toggle]")) == null || i.focus({ preventScroll: !0 });
    else if (n != null && n.hasAttribute("data-phone-reset")) {
      const { phone: d, ...u } = Ft();
      fo(u), mn();
    }
  }), On.addEventListener("keydown", (e) => {
    var f, b, M, D;
    if (e.key === "Escape") {
      e.stopPropagation(), Ct = !1, mn(), (f = _t.querySelector("[data-phone-toggle]")) == null || f.focus({ preventScroll: !0 });
      return;
    }
    const n = (D = (M = (b = e.target).closest) == null ? void 0 : M.call(b, "[data-phone-key]")) == null ? void 0 : D.dataset.phoneKey, i = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!n || !i) return;
    e.preventDefault();
    const d = Cs(), u = d.indexOf(n), m = u + i;
    m < 0 || m >= d.length || ([d[u], d[m]] = [d[m], d[u]], ml(d, n));
  });
  function Io(e, n) {
    e.preventDefault();
    const i = n.parentElement;
    n.classList.add("moving");
    const d = (m) => {
      const f = [...i.children].find((b) => {
        const M = b.getBoundingClientRect();
        return b !== n && m.clientY >= M.top && m.clientY <= M.bottom;
      });
      if (f) {
        const b = f.getBoundingClientRect();
        i.insertBefore(n, m.clientY < b.top + b.height / 2 ? f : f.nextSibling);
      }
    }, u = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", u), n.classList.remove("moving");
      const m = new Set(Pn());
      vo.favs = null, Po({ favourites: [...i.children].map((f) => f.dataset.trayFav).filter((f) => m.has(f)) });
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", u), window.addEventListener("pointercancel", u);
  }
  _t.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    const n = e.target.closest("[data-tray-card]"), i = e.target.closest(".tfTrayFav");
    n ? ul(e, n, "card", n.dataset.trayCard) : i && e.target.closest(".tfTrayGrip") ? Io(e, i) : i != null && i.classList.contains("off") && !e.target.closest("button") && ul(e, i, "fav", i.dataset.trayFav);
  });
  function bo(e) {
    if (!An || e.button !== 0 || e.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const n = e.target.closest(".tfBoardItem"), i = n && Jn().find((O) => O.el === n);
    if (!i || Do.includes(i.key)) return;
    const d = pa.get(i.key), { w: u } = Bo(E.clientWidth);
    if (!d) return;
    e.preventDefault(), ua();
    const m = e.clientX, f = e.clientY;
    let b = !1, M = 0;
    const D = (O) => {
      const ce = O.clientX - m, Se = O.clientY - f;
      if (!b) {
        if (Math.hypot(ce, Se) < 4) return;
        b = !0, wt = { key: i.key, col: d.col, row: d.row }, n.classList.add("tfDragging");
      }
      n.style.transform = "translate(" + ce + "px," + Se + "px)", wt.col = Math.round((d.x + ce) / (u + Xt)), wt.row = Math.round((d.y + Se - Xa) / uo), M || (M = requestAnimationFrame(() => {
        M = 0, Sn();
      }));
    }, N = () => {
      window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", N), window.removeEventListener("pointercancel", N), b && (cancelAnimationFrame(M), Sn(), n.classList.remove("tfDragging"), n.style.transform = "", wt = null, mi(Ft(), ho()), Sn(), cn());
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", N), window.addEventListener("pointercancel", N);
  }
  function Ts(e = !1) {
    const n = E == null ? void 0 : E.querySelector(".tfDashGraph svg[data-graph]");
    if (!(n != null && n.clientWidth)) return;
    const i = n.dataset.graph + "@" + n.clientWidth + "x" + n.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (n.dataset.drawn === i) return;
    const d = !n.dataset.drawn;
    n.dataset.drawn = i;
    const u = tl.find((m) => m.id === n.dataset.graph);
    u ? In(n, u).then(() => {
      (e || d) && Ji(n);
    }) : Yr(n.dataset.graph, n).then(() => {
      e && ci(n);
    });
  }
  function Ho() {
    var b, M, D;
    Je = wr.model(o()), Za(), x = Je.states, x[(b = z.sources) == null ? void 0 : b.grid] && (Je.grid = z.sources.grid), x[(M = z.sources) == null ? void 0 : M.alarm] && (Je.security.alarms = [z.sources.alarm]), T.forEach((N, O) => {
      const ce = x[O], Se = (ce == null ? void 0 : ce.attributes) || {};
      if (!ce || Date.now() - N.at > 2 * 60 * 1e3) {
        T.delete(O);
        return;
      }
      N.pos != null && ce.state !== "opening" && ce.state !== "closing" && Math.abs(Gn(O) - N.pos) < 1 && delete N.pos, N.tilt != null && Math.abs((Se.current_tilt_position ?? -1) - N.tilt) < 1 && delete N.tilt, N.pos == null && N.tilt == null && T.delete(O);
    });
    const e = [];
    let n = 0;
    const i = ii();
    It = i.filter((N) => N.room).map((N) => N.room), It.some((N) => N.id === re) || (re = ((D = It[0]) == null ? void 0 : D.id) || null);
    const d = Ae === "weather" ? { key: "weather", name: "Weather" } : Ae && i.find((N) => N.key === Ae);
    if (d || (Ae = null), h.classList.toggle("tfAreaOpen", !!d), h.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), h.classList.toggle("tfDash", !d), At = /* @__PURE__ */ new Map(), Je.rooms.forEach((N) => [...N.actions, ...N.plugs, ...N.readings, ...N.openings, ...N.solar, ...N.plants.flatMap((O) => [O.id, ...O.readings])].forEach((O) => At.set(O, N.name))), !d) return Ka(e, Vi());
    if (e.push({ key: "areahead", html: od(d, ++n) }), d.key === "weather")
      return e.weather = ++n, e;
    const u = d.ids, m = d.room ? d.room.id : d.key, f = d.room;
    return f != null && f.solar.length && e.push({ key: "energy:" + f.id, html: $n(f, ++n) }), f && (f.readings.length || f.plugs.length || f.power != null) && e.push({ key: "readings:" + f.id, html: da(f, ++n) }), f == null || f.plants.forEach((N) => e.push({ key: "plant:" + N.id, html: Oi(N, ++n) })), u.length && e.push({ key: "block:" + m, order: ++n, tiles: u.map((N) => ({ key: N, html: Be(N) })) }), e;
  }
  const od = (e, n) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + n + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + jc + '</button><div class="settingsTitle">' + se(e.name) + "</div></div>";
  let yi = 0, gl = null;
  const Fo = (e) => e === "weather" ? pt.wx : E.querySelector(".tfAreas");
  function vl(e) {
    var n, i;
    Ae || (yi = Ha().scrollTop, gl = ((n = Fo(e)) == null ? void 0 : n.getBoundingClientRect().top) ?? null), Ae = e, e.startsWith("room:") && (re = e.slice(5)), sn(), Ha().scrollTop = 0, (i = E.querySelector("[data-area-back]")) == null || i.focus({ preventScroll: !0 });
  }
  let Oo = null;
  function xi(e, n) {
    if (Oo == null || Oo(), n == null) return;
    const i = Ha(), d = performance.now() + 1500, u = ["wheel", "touchstart", "pointerdown", "keydown"];
    let m = 0;
    const f = () => {
      cancelAnimationFrame(m), u.forEach((M) => window.removeEventListener(M, f, !0)), Oo = null;
    }, b = () => {
      const M = e();
      if (M != null && M.isConnected) {
        const D = M.getBoundingClientRect().top - n;
        Math.abs(D) > 0.5 && (i.scrollTop += D);
      }
      performance.now() < d ? m = requestAnimationFrame(b) : f();
    };
    u.forEach((M) => window.addEventListener(M, f, { capture: !0, passive: !0 })), Oo = f, b();
  }
  function Wo() {
    var i;
    const e = Ae;
    Ae = null, sn(), Ha().scrollTop = yi, xi(() => Fo(e), gl);
    const n = e.startsWith("room:") ? E.querySelector('.tfAreaPanel[data-area="' + CSS.escape(e.slice(5)) + '"]') : e === "weather" ? pt.wx.querySelector(".wbOpenPage") : E.querySelector('[data-k="sum:' + CSS.escape(e) + '"]');
    (i = (n == null ? void 0 : n.querySelector("[data-go]")) || n) == null || i.focus({ preventScroll: !0 });
  }
  const Ls = (e) => e.wrap ? e.wrap(e.tiles.map((n) => n.html).join(""), e) : '<div class="tfBlock" data-tf data-k="' + se(e.key) + '" style="order:' + e.order + '"><div class="tfActions">' + e.tiles.map((n) => n.html).join("") + "</div></div>", qr = (e) => e.map((n) => n.key + (n.tiles ? "(" + n.tiles.map((i) => i.key).join(",") + ")" : "")).join(";");
  function Ha() {
    for (let e = h.parentElement || h.getRootNode().host; e; e = e.parentElement || e.getRootNode().host) {
      const n = getComputedStyle(e).overflowY;
      if ((n === "auto" || n === "scroll") && e.scrollHeight > e.clientHeight) return e;
    }
    return document.scrollingElement;
  }
  function qo(e) {
    const n = Ha(), i = (b) => {
      const M = b.getBoundingClientRect();
      return M.height && M.bottom > 0 && M.top < window.innerHeight;
    }, d = [...E.children, ...E.querySelectorAll(".tfDashTiles > *")].find((b) => !b.matches(".tfDashTiles") && i(b)), u = d == null ? void 0 : d.dataset.k, m = d == null ? void 0 : d.getBoundingClientRect().top;
    e();
    const f = d != null && d.isConnected ? d : u && E.querySelector('[data-k="' + CSS.escape(u) + '"]');
    f != null && f.isConnected && m != null && (n.scrollTop += f.getBoundingClientRect().top - m);
  }
  function sn() {
    if (!w || !E) return;
    const e = Ho();
    E.querySelectorAll("[data-tf]").forEach((i) => i.remove()), xn.clear();
    const n = document.createElement("div");
    n.innerHTML = e.map((i) => i.tiles ? Ls(i) : i.html).join(""), e.forEach((i) => i.tiles ? i.tiles.forEach((d) => xn.set(d.key, d.html)) : xn.set(i.key, i.html)), Dn = qr(e), E.append(...n.children), yr(e.weather), Xo(), Yn.disconnect(), Sn(), la(E), Ur(E), ya(E), G(), P && Yr(P.id), xl(), cr(), Ns(), requestAnimationFrame(ee);
  }
  const As = (e) => {
    var i;
    const n = a.activeElement && e.contains(a.activeElement) ? a.activeElement : null;
    return n && { label: n.getAttribute("aria-label"), act: (i = n.dataset) == null ? void 0 : i.act };
  }, zr = (e, n) => {
    var i;
    n && ((i = n.label && e.querySelector('[aria-label="' + CSS.escape(n.label) + '"]') || n.act && e.querySelector('[data-act="' + CSS.escape(n.act) + '"]')) == null || i.focus({ preventScroll: !0 }));
  };
  function lr(e, n) {
    if (!e.querySelector(".tfDacPad"))
      return e.replaceWith(n), n;
    const i = e.matches(".tfDac") && e.querySelector(":scope > .tfDacPad"), d = n.querySelector(":scope > .tfDacPad");
    if (i)
      return (d == null ? void 0 : d.dataset.dac) !== i.dataset.dac ? (e.replaceWith(n), n) : (e.querySelector(":scope > .tfActionHead").replaceWith(n.querySelector(":scope > .tfActionHead")), e.classList.toggle("on", n.classList.contains("on")), ["data-light", "data-tone"].forEach((m) => n.hasAttribute(m) ? e.setAttribute(m, n.getAttribute(m)) : e.removeAttribute(m)), [...e.style].filter((m) => m.startsWith("--") && !m.startsWith("--tf-")).forEach((m) => e.style.removeProperty(m)), [...n.style].forEach((m) => e.style.setProperty(m, n.style.getPropertyValue(m))), e);
    if (e.tagName !== n.tagName || e.children.length !== n.children.length)
      return e.replaceWith(n), n;
    [...e.attributes].forEach((m) => {
      n.hasAttribute(m.name) || e.removeAttribute(m.name);
    }), [...n.attributes].forEach((m) => e.setAttribute(m.name, m.value));
    const u = [...n.children];
    return [...e.children].forEach((m, f) => lr(m, u[f])), e;
  }
  function id(e, n) {
    const i = document.createElement("div");
    i.innerHTML = n;
    const d = As(e), u = lr(e, i.firstElementChild);
    la(u), Ur(u), ya(u), zr(u, d);
  }
  function cn() {
    !w || !E || wt || qo(_s);
  }
  function _s() {
    if (!E.querySelector("[data-tf]")) {
      sn();
      return;
    }
    const e = Ho();
    if (qr(e) !== Dn) {
      sn();
      return;
    }
    const n = (i) => [...qe.keys()].some((d) => {
      const u = d.slice(d.indexOf("|") + 1);
      return i === u || i.endsWith(":" + u);
    });
    e.forEach((i) => (i.tiles || [i]).forEach((d) => {
      if (xn.get(d.key) === d.html || n(d.key)) return;
      const u = E.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (u) {
        if (xn.set(d.key, d.html), P && P.key === d.key && u.querySelector(".tfOpen")) {
          u.querySelector(".tfOpen .activityRowMeta").textContent = ei(P.id);
          return;
        }
        id(u, d.html), P && P.key === d.key && Yr(P.id), d.key.startsWith("energy:") && xl();
      }
    })), cr(), Ns(), kr(), G(), Ze == null || Ze.update(), qt == null || qt.forEach((i) => i.update()), h.classList.contains("tfDash") && _n(), requestAnimationFrame(ee);
  }
  const ki = {
    light: (e) => [["Brightness", e.brightness != null ? Math.round(e.brightness / 2.55) + "%" : null], ["Colour temperature", e.color_temp_kelvin ? Number(e.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", e.color_mode && Oe(e.color_mode)]],
    climate: (e) => [["Current temperature", jn(e.current_temperature) + " °C"], ["Target", jn(e.temperature) + " °C"], ["Action", Oe(e.hvac_action)]],
    cover: (e) => [["Position", e.current_position != null ? e.current_position + "% open" : null], ["Tilt", e.current_tilt_position != null ? e.current_tilt_position + "% open" : null]],
    humidifier: (e) => [["Current humidity", e.current_humidity + "%"], ["Target", e.humidity + "%"], ["Mode", Oe(e.mode)]],
    media_player: (e) => [["Title", e.media_title], ["Artist", e.media_artist], ["Volume", e.volume_level != null ? Math.round(e.volume_level * 100) + "%" : null], ["Source", e.source]],
    vacuum: (e) => [["Battery", e.battery_level + "%"], ["Fan speed", Oe(e.fan_speed)], ["Rooms", (e.rooms || []).join(", ") || null]],
    lock: (e) => [["Changed by", e.changed_by]],
    alarm_control_panel: (e) => [["Changed by", e.changed_by]],
    valve: () => [],
    plant: (e) => [["Moisture", e.moisture + "%"], ["Light", Number(e.brightness).toLocaleString() + " lx"], ["Temperature", jn(e.temperature) + " °C"], ["Fertility", e.conductivity + " µS/cm"], ["Problems", e.problem === "none" ? "None" : Oe(e.problem)]],
    weather: (e) => [["Temperature", e.temperature != null ? e.temperature + " " + (e.temperature_unit || "°C") : null], ["Humidity", e.humidity != null ? e.humidity + "%" : null], ["Wind", e.wind_speed != null ? e.wind_speed + " " + (e.wind_speed_unit || "km/h") : null], ["Pressure", e.pressure != null ? e.pressure + " " + (e.pressure_unit || "hPa") : null]]
  }, Es = (e) => {
    var i;
    const n = (((i = ki[e.split(".")[0]]) == null ? void 0 : i.call(ki, xt(e))) || []).filter(([, d]) => d != null && d !== "");
    return n.length ? '<div class="tfMoreRows">' + n.map(([d, u]) => '<div class="tfMoreRow"><span>' + se(d) + "</span><span>" + se(u) + "</span></div>").join("") + "</div>" : "";
  }, Mi = (e) => hr(e) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function bl(e, n = {}, i = !1) {
    return '<div class="tfMoreList">' + e.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + se(d.name) + '</div><div class="tfMoreTiles' + (i ? " single" : "") + '">' + d.ids.map((u) => Sr(u, n)).join("") + "</div></div>").join("") + "</div>";
  }
  const ut = document.createElement("div");
  ut.className = "tfMoreBackdrop", ut.hidden = !0, h.appendChild(ut);
  const jr = (e, n) => {
    for (let i = e; i && i !== ut; i = i.parentElement) {
      const d = getComputedStyle(i).overflowY;
      if ((d === "auto" || d === "scroll") && i.scrollHeight > i.clientHeight + 1 && (n < 0 ? i.scrollTop > 0 : i.scrollTop + i.clientHeight < i.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Si = null;
  ut.addEventListener("touchstart", (e) => {
    Si = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: !0 }), ut.addEventListener("touchmove", (e) => {
    var u, m;
    if (!Si || e.touches.length > 1 || (m = (u = e.target).closest) != null && m.call(u, "input,textarea,select")) return;
    const n = e.touches[0], i = Si.x - n.clientX, d = Si.y - n.clientY;
    Si = { x: n.clientX, y: n.clientY }, Math.abs(d) >= Math.abs(i) && !jr(e.target, d) && e.preventDefault();
  }, { passive: !1 }), ut.addEventListener("wheel", (e) => {
    jr(e.target, e.deltaY) || e.preventDefault();
  }, { passive: !1 });
  function Wn() {
    const e = ut.querySelector(".tfMorePair"), n = ut.querySelector(".tfMore");
    e == null || e.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - n.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Wn, { passive: !0 }), w && Lt();
  let Ut = [];
  const Vr = (e) => e === "favourites" || e.startsWith("summary:") || e.startsWith("group:");
  function rd(e) {
    const n = (M, D = "") => '<div class="tfMoreHead">' + (H != null && H.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Bd + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + se(M) + "</div>" + D + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + ph + "</button></div>", i = (M, D) => '<div class="tfMoreNow"><div class="tfMoreState">' + se(M) + "</div>" + (D ? '<div class="tfMoreSub">' + se(D) + "</div>" : "") + "</div>", d = bl;
    if (e === "favourites") {
      const M = Pn(), D = new Set(M), N = [{ name: "Starred", ids: M }, { name: "Home", ids: Je.homeVacuums }, { name: "Security", ids: [...Je.security.alarms, ...Je.security.locks] }, ...Je.rooms.map((O) => ({ name: O.name, ids: [...O.actions, ...O.plugs] }))].map((O, ce) => ce ? { ...O, ids: O.ids.filter((Se) => !D.has(Se)) } : O).filter((O) => O.ids.length);
      return [n("Favourites"), i(M.length ? M.length + " starred" : "None starred"), d(N, { star: !0 }, !0)];
    }
    const u = (M, { name: D = "", alert: N = !1, plain: O = !1 } = {}) => {
      const ce = O ? [] : M.filter((X) => Pl.includes(X.split(".")[0])), Se = M.filter((X) => !ce.includes(X)), Ne = (X) => X.startsWith("vacuum.") && xt(X).battery_level != null ? xt(X).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (D ? '<div class="tfMoreGroupName">' + se(D) + "</div>" : "") + '<div class="tfMoreActions">' + ce.map((X) => Be(X, !0)).join("") + Se.map((X) => Sr(X, { plain: O, alert: N, say: O ? Ne(X) : null })).join("") + "</div></div>";
    };
    if (e.startsWith("summary:")) {
      const M = Vi().find((ce) => ce.key === e.slice(8));
      if (!M) return null;
      const D = M.key === "light" ? (M.groups || []).flatMap((ce) => ce.ids) : [], N = D.some((ce) => {
        var Se;
        return ((Se = x[ce]) == null ? void 0 : Se.state) === "on";
      }), O = D.length ? '<button class="primary" type="button" data-acts="' + so(D.map((ce) => ["light", N ? "turn_off" : "turn_on", ce])) + '">' + (N ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(M.name), '<div class="tfMoreNowRow">' + i(M.value) + O + "</div>", ...(M.groups || []).map((ce) => u(ce.ids, { name: ce.name === M.name ? "" : ce.name, alert: ce.alert, plain: M.plain }))];
    }
    if (e.startsWith("group:")) {
      const [, M, D] = e.split(":"), N = Je.rooms.find((Se) => Se.id === M), O = N && Ua(N).find((Se) => Se.key === D);
      if (!O) return null;
      const ce = O.acts ? '<button class="primary" type="button" data-acts="' + so(O.acts) + '">' + (O.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(N.name + " " + O.label.toLowerCase()), '<div class="tfMoreNowRow">' + i(O.value) + ce + "</div>", u(Aa(N, D))];
    }
    const m = e.split(".")[0], f = x[e], b = Pl.includes(m) ? dn(e) : { sections: [] };
    return [
      n(ke(e)),
      i(an(e), f.last_changed && ja(Date.parse(f.last_changed))),
      (H == null ? void 0 : H.at) && '<svg class="tfGraph tfDay" data-day="' + se(e) + '" role="img" aria-label="' + se(ke(e)) + ', last 24 hours"></svg>',
      m === "cover" && '<div data-cover-art="' + se(e) + '"></div>',
      ...b.sections.filter(Boolean),
      Ds(e) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(H != null && H.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + np + "</button>"
    ].filter(Boolean);
  }
  const Ds = (e) => Vr(e) ? "" : Es(e) + Mi(e);
  let Bs = "";
  function Gr(e) {
    var n;
    H && (H.details = e, cr(), (n = ut.querySelector(e ? "[data-details-close]" : "[data-details]")) == null || n.focus({ preventScroll: !0 }));
  }
  const dr = (e) => {
    const n = x[e], i = Gn(e), d = Va(e);
    return { kind: Dd(n), name: ke(e), text: an(e), pos: i, target: Math.abs(d - i) > 0.5 ? d : null, moving: n.state === "opening" || n.state === "closing", tilt: ro(e) ?? 100, canSet: zt(e, Kc) };
  };
  function Ur(e) {
    e.querySelectorAll("[data-cover-art]").forEach((n) => {
      const i = n.dataset.coverArt, d = n.dataset.artKey || "more:" + i;
      let u = I.get(d);
      u || (u = ch({ onMove: (m) => no(i, m), onSet: (m) => {
        no(i, m), Ti("pos", i);
      } }), u.coverId = i, I.set(d, u)), n.replaceWith(u.el), u.update(dr(i));
    });
  }
  const Rs = (e) => [...I.values()].filter((n) => n.coverId === e), eo = () => I.forEach((e) => {
    x[e.coverId] && e.update(dr(e.coverId));
  }), Ns = () => {
    I.forEach((e, n) => {
      e.el.isConnected || (e.destroy(), I.delete(n));
    }), eo();
  };
  function cr() {
    var m, f;
    if (!H || !(Vr(H.id) || x[H.id])) {
      ut.hidden = !0;
      return;
    }
    if ([...qe.keys()].some((b) => b.endsWith("|" + H.id))) {
      eo();
      return;
    }
    const e = rd(H.id), n = ut.querySelector(".tfMore");
    if (!e) {
      to();
      return;
    }
    const i = As(ut), d = Ds(H.id), u = H.frame ? H.frame.wide : H.id.startsWith("summary:") || H.id.startsWith("group:");
    if (ut.hidden || !n || e.length !== Ut.length || n.classList.contains("wide") !== u) {
      const b = pr ? H.scroll || 0 : !ut.hidden && n ? n.scrollTop : 0;
      ut.innerHTML = '<div class="tfMorePair' + (ut.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (u ? " wide" : "") + '"' + (H.frame ? ' style="height:' + H.frame.h + 'px"' : "") + ">" + e.join("") + "</section>" + (d ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + Bd + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + d + "</div></div></aside>" : "") + "</div>", Bs = d, ut.classList.toggle("wide", u), ut.hidden = !1, Wn(), Ur(ut), ya(ut), la(ut), ut.querySelectorAll("[data-day]").forEach((M) => dd(M.dataset.day, M, H.at)), b && (ut.querySelector(".tfMore").scrollTop = b), zr(ut, i), ut.contains(a.activeElement) || (m = ut.querySelector("[data-more-close]")) == null || m.focus({ preventScroll: !0 });
    } else {
      if (e.forEach((b, M) => {
        var O, ce;
        if (b === Ut[M] || b.includes("data-cover-art") || n.children[M].contains((ce = (O = a.activeElement) == null ? void 0 : O.matches) != null && ce.call(O, "input,select") ? a.activeElement : null) || [...qe.keys()].some((Se) => n.children[M].querySelector('[data-drag="' + CSS.escape(Se) + '"]'))) return;
        const D = document.createElement("div");
        D.innerHTML = b;
        const N = lr(n.children[M], D.firstElementChild);
        la(N), ya(N);
      }), d !== Bs) {
        const b = ut.querySelector(".tfMoreSideBody");
        b && (b.innerHTML = d), Bs = d;
      }
      ut.contains(a.activeElement) || zr(ut, i);
    }
    (f = ut.querySelector(".tfMorePair")) == null || f.classList.toggle("details", !!(H.details && d)), Ut = e, eo();
  }
  setInterval(() => {
    H && cr();
  }, 15 * 1e3);
  function Ca(e, n) {
    var u;
    const i = !!(H && n && ut.contains(n)), d = i && ut.querySelector(".tfMore");
    i && (H.scroll = d.scrollTop), H = { id: e, opener: i ? H.opener : n, back: i ? H : null, frame: i ? H.frame || { wide: d.classList.contains("wide"), h: d.offsetHeight } : null, at: Number((u = n == null ? void 0 : n.dataset) == null ? void 0 : u.at) || null }, wl();
  }
  let pr = !1;
  function wl() {
    Ut = [], pr = !ut.hidden, I.forEach((e, n) => {
      n !== H.id && ut.contains(e.el) && (e.destroy(), I.delete(n));
    }), cr(), pr = !1;
  }
  function to() {
    var i, d, u, m, f, b;
    const e = H == null ? void 0 : H.opener;
    H = null, I.forEach((M, D) => {
      ut.contains(M.el) && (M.destroy(), I.delete(D));
    }), Re.forEach((M, D) => {
      D.startsWith("more:") && Re.delete(D);
    }), ut.hidden = !0, ut.innerHTML = "";
    const n = { preventScroll: !0 };
    e != null && e.isConnected ? e.focus(n) : (i = e == null ? void 0 : e.dataset) != null && i.more ? (d = E.querySelector('[data-more="' + CSS.escape(e.dataset.more) + '"]')) == null || d.focus(n) : (u = e == null ? void 0 : e.dataset) != null && u.summary ? (m = E.querySelector('[data-summary="' + CSS.escape(e.dataset.summary) + '"]')) == null || m.focus(n) : (f = e == null ? void 0 : e.hasAttribute) != null && f.call(e, "data-favs-edit") && ((b = E.querySelector("[data-favs-edit]")) == null || b.focus(n));
  }
  function Ci(e, n, i, d = {}) {
    const u = n.map((we) => we[1]), m = d.zero ? 0 : Math.min(...u), f = Math.max(...u), b = Math.max(120, e.clientWidth || 260), M = Math.max(60, e.clientHeight || 130), D = 8, N = M - 20, O = Date.now() - 24 * 3600 * 1e3, ce = 24 * 3600 * 1e3, Se = (we) => Math.max(0, Math.min(b, (we - O) / ce * b)), Ne = (we) => f === m ? (D + N) / 2 : N - (we - m) / (f - m) * (N - D);
    let X = "M" + Se(n[0][0]).toFixed(1) + " " + Ne(n[0][1]).toFixed(1);
    for (let we = 1; we < n.length; we++) X += d.smooth ? "L" + Se(n[we][0]).toFixed(1) + " " + Ne(n[we][1]).toFixed(1) : "H" + Se(n[we][0]).toFixed(1) + "V" + Ne(n[we][1]).toFixed(1);
    e.setAttribute("viewBox", "0 0 " + b + " " + M), e.setAttribute("aria-label", i), e.innerHTML = '<path d="' + X + "V" + N + "H" + Se(n[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + X + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (M - 4) + '">24 h ago</text><text x="' + b + '" y="' + (M - 4) + '" text-anchor="end">Now</text>';
  }
  const Ps = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, Is = (e, n) => {
    const i = e.split(".")[0];
    return Ps[i] ? Ps[i].includes(n) : i === "alarm_control_panel" || i === "climate" || i === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(n) : n === "on";
  }, sd = (e) => {
    const n = e.split(".")[0], i = xt(e).device_class;
    return n === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[i] || (Nl.includes(i) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[n] || "On";
  }, Qn = /* @__PURE__ */ new Map();
  let yl = 0;
  async function ld(e) {
    let n = Qn.get(e);
    if (!n || Date.now() - n.at > 60 * 1e3) {
      let u = [];
      try {
        const m = await R({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        u = ((m == null ? void 0 : m[e]) || []).map((f) => [f.lu != null ? f.lu * 1e3 : Date.parse(f.last_updated || f.last_changed), String(f.s ?? f.state)]).filter(([f]) => Number.isFinite(f));
      } catch {
      }
      u.length || (u = (Ma || []).filter((m) => m.entity_id === e).map((m) => [m.when * 1e3, String(m.state)])), n = { at: Date.now(), pts: u }, Qn.set(e, n);
    }
    const i = x[e], d = n.pts.slice().sort((u, m) => u[0] - m[0]);
    return i && (!d.length || d[d.length - 1][1] !== i.state) && d.push([Date.parse(i.last_changed) || Date.now(), i.state]), d;
  }
  async function dd(e, n, i) {
    const d = await ld(e);
    if (!n.isConnected) return;
    const u = d.map(([K, Ue]) => [K, Number(Ue)]);
    if (d.length > 1 && u.every(([, K]) => Number.isFinite(K))) {
      Ci(n, u, ke(e) + ", last 24 hours");
      return;
    }
    const m = Date.now(), f = m - 864e5, b = Math.max(200, n.clientWidth || 360), M = 62, D = (K) => Math.max(0, Math.min(b, (K - f) / 864e5 * b)), N = [];
    let O = null;
    d.forEach(([K, Ue]) => {
      const Rt = Is(e, Ue);
      Rt && O == null ? O = Math.max(K, f) : !Rt && O != null && (N.push([O, Math.max(K, f)]), O = null);
    }), O != null && N.push([O, m]);
    const ce = li(e) ? "var(--danger)" : e.startsWith("light.") ? "#ffaa00" : "var(--primary)", Se = sd(e), Ne = "tfDayClip" + ++yl, X = N.map(([K, Ue]) => Se + (Ue >= m - 1e3 && K <= f + 1e3 ? " all day" : Ue >= m - 1e3 ? " since " + Yt(K) : K <= f + 1e3 ? " until " + Yt(Ue) : " " + Yt(K) + "–" + Yt(Ue)));
    let we = "", j = -1 / 0;
    N.forEach(([K], Ue) => {
      const Rt = X[Ue].length * 5.4, yt = Math.min(D(K), b - Rt);
      yt < j + 8 || (we += '<text x="' + yt.toFixed(1) + '" y="10">' + se(X[Ue]) + "</text>", j = yt + Rt);
    });
    let fe = '<text x="' + b + '" y="' + (M - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((K) => {
      let Ue = new Date(m).setHours(K, 0, 0, 0);
      Ue > m && (Ue -= 864e5), D(Ue) > 8 && D(Ue) < b - 34 && (fe += '<text x="' + D(Ue).toFixed(1) + '" y="' + (M - 2) + '" text-anchor="middle">' + String(K).padStart(2, "0") + "</text>");
    }), n.setAttribute("viewBox", "0 0 " + b + " " + M), n.setAttribute("aria-label", ke(e) + ", last 24 hours: " + (X.length ? X.join(", ") : "no changes")), n.innerHTML = '<clipPath id="' + Ne + '"><rect x="0" y="18" width="' + b + '" height="26" rx="8"/></clipPath>' + we + '<rect x="0" y="18" width="' + b + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + Ne + ')">' + N.map(([K, Ue]) => '<rect x="' + D(K).toFixed(1) + '" y="18" width="' + Math.max(2, D(Ue) - D(K)).toFixed(1) + '" height="26" fill="' + ce + '"/>').join("") + "</g>" + (i && i >= f ? '<line x1="' + D(i).toFixed(1) + '" x2="' + D(i).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + fe;
  }
  function cd(e) {
    var d;
    const n = Number((d = x[e]) == null ? void 0 : d.state), i = Date.now();
    if (xt(e).state_class === "total_increasing") {
      const u = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), m = Math.max(1, i - u);
      return [...Array(49)].map((f, b) => u + m * b / 48).map((f) => [f, Math.round(n * Math.pow((f - u) / m, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((u, m) => [i - (48 - m) * 30 * 60 * 1e3, Math.round(n * (0.96 + 0.04 * Math.sin(m / 6)) * 10) / 10]);
  }
  async function Yr(e, n) {
    var Se, Ne;
    let i = Ie.get(e);
    if (e.endsWith("_solar_power")) i = { at: Date.now(), points: hc() };
    else if (hr(e)) i = { at: Date.now(), points: cd(e) };
    else if (!i || Date.now() - i.at > 5 * 60 * 1e3) {
      try {
        const X = new Date(Date.now() - 864e5).toISOString(), we = await R({ type: "history/history_during_period", start_time: X, entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), j = ((we == null ? void 0 : we[e]) || []).map((fe) => [fe.lu != null ? fe.lu * 1e3 : Date.parse(fe.last_updated || fe.last_changed), Number(fe.s ?? fe.state)]).filter(([fe, K]) => Number.isFinite(fe) && Number.isFinite(K));
        i = { at: Date.now(), points: j };
      } catch {
        i = { at: Date.now(), points: [] };
      }
      Ie.set(e, i);
    }
    const d = n || E.querySelector('[data-graph="' + CSS.escape(e) + '"]');
    if (!d) return;
    const u = x[e], m = ((Se = u == null ? void 0 : u.attributes) == null ? void 0 : Se.unit_of_measurement) || "", f = i.points.slice(), b = Number(u == null ? void 0 : u.state);
    if (Number.isFinite(b) && !e.endsWith("_solar_power") && f.push([Date.now(), b]), f.length < 2) {
      d.setAttribute("aria-label", ke(e) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const M = f.map((X) => X[1]), D = Math.min(...M), N = Math.max(...M), O = (X) => X.toLocaleString(void 0, { maximumFractionDigits: Math.abs(X) >= 100 ? 0 : 1 }), ce = ((Ne = u == null ? void 0 : u.attributes) == null ? void 0 : Ne.state_class) === "total_increasing";
    Ci(d, f, ke(e) + ", last 24 hours: " + (ce ? "+" + O(M[M.length - 1] - M[0]) : D === N ? O(D) : O(D) + " to " + O(N)) + (m ? " " + m : ""), { smooth: e.endsWith("_solar_power"), zero: e.endsWith("_solar_power") });
  }
  function xl() {
    const e = E == null ? void 0 : E.querySelector("[data-solar]");
    if (!e) return;
    const n = hc();
    Ci(e, n, "Solar, last 24 hours: up to " + jn(Math.max(...n.map((i) => i[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function ea(e, n) {
    const i = n.entity_id, d = T.get(i) || {}, u = { open_cover: 100, close_cover: 0, set_cover_position: n.position, toggle: Gn(i) > 0 ? 0 : 100 }[e], m = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: n.tilt_position }[e];
    u != null && (d.pos = u), m != null && (d.tilt = m), e === "stop_cover" && (delete d.pos, delete d.tilt), e === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), T.set(i, d);
  }
  function Hs(e, n, i) {
    var u;
    const d = i == null ? void 0 : i.entity_id;
    return e !== "light" || typeof d != "string" || !ba[d] || !za(d) || i.brightness_pct != null || i.brightness != null ? [n, i] : n !== "turn_on" && !(n === "toggle" && ((u = x[d]) == null ? void 0 : u.state) !== "on") ? [n, i] : ["turn_on", { ...i, brightness_pct: ba[d] }];
  }
  function Zr(e, n, i, d) {
    let u = { entity_id: i, ...d || {} };
    return [n, u] = Hs(e, n, u), e === "cover" && ea(n, u), st[i] = (st[i] || 0) + 1, Di.set(Jc, JSON.stringify(st)), wr.call(e, n, u) ? Promise.resolve() : Promise.resolve(ve(e, n, u));
  }
  function zo(e) {
    const [n, i, d, u] = e.split("|");
    Zr(n, i, d, u ? JSON.parse(u) : null).catch(() => {
    });
  }
  function no(e, n) {
    qe.set("pos|" + e, n), xn.delete(e), Ut = Ut.map(() => ""), [E, ut].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(e) + '"]').forEach((u) => ye(u, n)));
    const i = E.querySelector('.tfAction[data-k="' + CSS.escape(e) + '"] .tfName .activityRowMeta');
    if (i && (i.textContent = Math.round(n) + "%"), (H == null ? void 0 : H.id) === e) {
      const d = ut.querySelector(".tfMoreState"), u = ut.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(n) + "%", d.classList.add("live")), u && (u.textContent = "Currently " + Gn(e) + "%");
    }
    Rs(e).forEach((d) => d.update(dr(e)));
  }
  const Fs = (e, n) => {
    const i = e.shiftKey ? 10 : 1, d = { ArrowUp: n + i, ArrowRight: n + i, ArrowDown: n - i, ArrowLeft: n - i, PageUp: n + 25, PageDown: n - 25, Home: 0, End: 100 }[e.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function pd(e, n) {
    var X;
    const i = e.dataset.blocks;
    (X = e.setPointerCapture) == null || X.call(e, n.pointerId);
    const d = (we) => {
      const j = e.getBoundingClientRect();
      return Math.max(0, Math.min(100, (we.clientX - j.left) / j.width * 100));
    }, u = d(n), m = n.clientX;
    let f = !1, b = Va(i), M = u, D = 0;
    const N = () => {
      b = Math.abs(M - b) < 0.2 ? M : b + (M - b) * 0.14, no(i, b), D = requestAnimationFrame(N);
    }, O = () => {
      f || (f = !0, e.classList.add("fine"), D = requestAnimationFrame(N));
    }, ce = setTimeout(O, 350), Se = (we) => {
      M = d(we), Math.abs(we.clientX - m) > 6 && (clearTimeout(ce), O());
    }, Ne = () => {
      clearTimeout(ce), cancelAnimationFrame(D), e.removeEventListener("pointermove", Se), e.removeEventListener("pointerup", Ne), e.removeEventListener("pointercancel", Ne), e.classList.remove("fine"), no(i, f ? Math.round(b) : (Math.min(3, Math.floor(u / 25)) + 1) * 25), Ti("pos", i);
    };
    e.addEventListener("pointermove", Se), e.addEventListener("pointerup", Ne), e.addEventListener("pointercancel", Ne);
  }
  function ur(e) {
    var u;
    const [n, i] = e.dataset.open.split("|"), d = e.closest(".tfCard");
    P = { key: n, id: i, h: d ? Math.round(d.getBoundingClientRect().height) : 0 }, xn.delete(n), cn(), (u = E.querySelector(".tfOpen [data-close]")) == null || u.focus({ preventScroll: !0 });
  }
  function fr(e) {
    var n;
    re = e.dataset.area, E.querySelectorAll(".tfAreaPanel").forEach((i) => {
      var u;
      const d = i === e;
      i.classList.toggle("active", d), i.setAttribute("aria-expanded", String(d)), (u = i.querySelector(".panelExpanded")) == null || u.toggleAttribute("inert", !d);
    }), xn.set("areas", Ya(((n = E.querySelector('[data-k="areas"]')) == null ? void 0 : n.style.order) || 1));
  }
  const ao = {
    bright: { value: (e, n) => Math.round(n * 100), text: (e, n) => n ? n + "%" : "Off", send: (e, n) => n > 0 ? ["light", "turn_on", { brightness_pct: n }] : ["light", "turn_off", {}] },
    ct: { value: (e, n) => {
      const [i, d] = Co(e);
      return Math.round(i + n * (d - i));
    }, text: (e, n) => n.toLocaleString() + "k", send: (e, n) => ["light", "turn_on", { color_temp_kelvin: n }] },
    hue: { value: (e, n) => Math.round(n * 360), text: () => "Colour", send: (e, n) => {
      var i;
      return ["light", "turn_on", { hs_color: [n, Math.max(60, ((i = xt(e).hs_color) == null ? void 0 : i[1]) || 100)] }];
    } },
    pos: { value: (e, n) => Math.round(n * 100), text: (e, n) => Math.round(n) + "%", send: (e, n) => ["cover", "set_cover_position", { position: Math.round(n) }] },
    tilt: { value: (e, n) => Math.round(n * 100), text: (e, n) => "Tilt " + n + "%", send: (e, n) => ["cover", "set_cover_tilt_position", { tilt_position: n }] },
    vol: { value: (e, n) => Math.round(n * 100) / 100, text: (e, n) => Math.round(n * 100) + "%", send: (e, n) => ["media_player", "volume_set", { volume_level: n }] }
  };
  function jo(e, n, i, d) {
    var M;
    const u = ao[n].value(i, d);
    qe.set(n + "|" + i, u);
    const m = Math.round(d * 100) + "%", f = e.querySelector("i");
    if (n === "tilt") {
      f.style.width = "calc((100% - 8px) * " + d + ")";
      const [D, N] = e.querySelectorAll("span");
      D.classList.toggle("lit", d > 0.08), N.classList.toggle("lit", d > 0.92), xn.delete(i), Ut = Ut.map(() => ""), Rs(i).forEach((O) => O.update(dr(i)));
    } else if (f) f.style.width = m;
    else {
      let D = e.querySelector("b");
      D || (D = document.createElement("b"), e.appendChild(D)), D.style.left = m;
    }
    e.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const b = (M = e.closest(".tfAction") || e.closest(".tfMore")) == null ? void 0 : M.querySelector(".tfName .activityRowMeta, .tfMoreState");
    b && (b.textContent = ao[n].text(i, u));
  }
  function Ti(e, n) {
    const i = qe.get(e + "|" + n), [d, u, m] = ao[e].send(n, i), f = () => setTimeout(() => {
      qe.delete(e + "|" + n), cn();
    }, 1500);
    Zr(d, u, n, m).then(f, f);
  }
  function Os(e) {
    e.addEventListener("click", (n) => {
      var d, u;
      const i = n.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (Hn && !n.target.closest(".tfBoardMenu,[data-board-more]") && ua(), !(!i || !e.contains(i) || i.disabled))
        if (i.dataset.boardMore)
          (Hn == null ? void 0 : Hn.key) === i.dataset.boardMore ? ua(!0) : vs(i.dataset.boardMore, i);
        else if (i.dataset.boardAct) ll(Hn.key, i.dataset.boardAct);
        else if (i.dataset.boardShow) bs(i.dataset.boardShow);
        else if (i.dataset.favHide) Ms(i.dataset.favHide, !1);
        else if (i.dataset.energyPick) Ar(i.dataset.energyPick);
        else if (i.dataset.act) zo(i.dataset.act);
        else if (i.hasAttribute("data-details")) Gr(!(H != null && H.details));
        else if (i.hasAttribute("data-details-close")) Gr(!1);
        else if (i.dataset.summary) ls(i.dataset.summary, i);
        else if (i.dataset.star) Qs(i.dataset.star);
        else if (i.hasAttribute("data-more-back")) {
          const m = H.id;
          H = H.back, wl(), (d = ut.querySelector('.tfMore [data-more="' + CSS.escape(m) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else if (i.hasAttribute("data-favs-edit")) Ca("favourites", i);
        else if (i.dataset.acts) JSON.parse(i.dataset.acts).forEach(([m, f, b, M]) => Zr(m, f, b, M).catch(() => {
        }));
        else if (i.dataset.more) Ca(i.dataset.more, i);
        else if (i.hasAttribute("data-more-close")) to();
        else if (i.dataset.go) vl("room:" + i.dataset.go);
        else if (i.hasAttribute("data-area-back")) Wo();
        else if (i.dataset.open) ur(i);
        else if (i.hasAttribute("data-close")) {
          const m = P;
          P = null, xn.delete(m.key), cn(), (u = E.querySelector('[data-open="' + CSS.escape(m.key + "|" + m.id) + '"]')) == null || u.focus({ preventScroll: !0 });
        } else i.classList.contains("tfAreaPanel") && !i.classList.contains("active") && fr(i);
    }), e.addEventListener("keydown", (n) => {
      var d, u, m, f, b, M, D;
      const i = n.target;
      if ((d = i.dataset) != null && d.open && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), ur(i)), (u = i.dataset) != null && u.energyPick && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Ar(i.dataset.energyPick)), (m = i.classList) != null && m.contains("tfAreaPanel") && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), fr(i)), (f = i.dataset) != null && f.summary && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), ls(i.dataset.summary, i)), n.key === "Escape" && Hn && e === E) {
        n.preventDefault(), ua(!0);
        return;
      }
      if (n.key === "Escape" && An && e === E) {
        n.preventDefault(), or(!1), (b = c("dashEditNav")) == null || b.focus();
        return;
      }
      if (n.key === "Escape" && Ae && e === E && (n.preventDefault(), Wo()), (M = i.dataset) != null && M.blocks) {
        const N = i.dataset.blocks, O = Fs(n, Math.round(Va(N)));
        if (O == null) return;
        n.preventDefault(), no(N, O), clearTimeout(me.get(N)), me.set(N, setTimeout(() => Ti("pos", N), 500));
        return;
      }
      if ((D = i.dataset) != null && D.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(n.key)) {
        n.preventDefault();
        const [N, O] = i.dataset.drag.split("|"), ce = Number(i.getAttribute("aria-valuenow")) / 100, Se = n.key === "Home" ? 0 : n.key === "End" ? 1 : Math.max(0, Math.min(1, ce + (n.key === "ArrowLeft" || n.key === "ArrowDown" ? -0.05 : 0.05)));
        jo(i, N, O, Se), Ti(N, O);
      }
    }), e.addEventListener("pointerdown", (n) => {
      var Rt;
      const i = n.target.closest("[data-blocks]");
      if (i && n.button === 0) {
        n.preventDefault(), pd(i, n);
        return;
      }
      const d = n.target.closest("[data-drag]");
      if (!d || n.button > 0) return;
      const [u, m] = d.dataset.drag.split("|"), f = u === "bright" && !za(m), b = n.pointerType !== "mouse";
      if (f && !b) {
        zo(St("light", "toggle", m));
        return;
      }
      const M = u === "bright" && ((Rt = x[m]) == null ? void 0 : Rt.state) !== "on", D = u === "tilt" ? 4 : 0, N = () => d.getBoundingClientRect().width - D * 2, O = (yt) => {
        const Cn = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (yt.clientX - Cn.left - D) / N()));
      };
      let ce = b ? "waiting" : M ? "pressed" : "dragging", Se = 0;
      const Ne = n.clientX, X = n.clientY, we = (yt, Cn) => Math.hypot(yt.clientX - Ne, yt.clientY - X) > Cn, j = () => {
        try {
          d.setPointerCapture(n.pointerId);
        } catch {
        }
      };
      b || (n.preventDefault(), j()), ce === "dragging" && jo(d, u, m, O(n));
      const fe = () => {
        var yt, Cn;
        ce = "sliding", _ = d, d.classList.add("held"), j(), (yt = navigator.userActivation) != null && yt.hasBeenActive && ((Cn = navigator.vibrate) == null || Cn.call(navigator, 8)), Se = M ? (ba[m] ?? 100) / 100 : Number(d.getAttribute("aria-valuenow")) / 100;
      }, K = (yt) => {
        ce === "waiting" && we(yt, k) ? !f && Math.abs(yt.clientX - Ne) > Math.abs(yt.clientY - X) ? fe() : ce = "gone" : ce === "pressed" && we(yt, 4) && (ce = "dragging"), ce === "sliding" ? jo(d, u, m, Math.max(0, Math.min(1, Se + (yt.clientX - Ne) / N()))) : ce === "dragging" && jo(d, u, m, O(yt));
      }, Ue = (yt) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Cn, Ke) => d.removeEventListener(Cn, Ke ? Ue : K)), d.classList.remove("held"), _ === d && (_ = null), ce === "sliding" || ce === "dragging" ? Ti(u, m) : yt.type === "pointerup" && f ? zo(St("light", "toggle", m)) : yt.type === "pointerup" && M && (ce === "waiting" || ce === "pressed") && Zr("light", "turn_on", m).catch(() => {
        });
      };
      d.addEventListener("pointermove", K), d.addEventListener("pointerup", Ue), d.addEventListener("pointercancel", Ue);
    }), e.addEventListener("touchmove", (n) => {
      _ && n.cancelable && n.preventDefault();
    }, { passive: !1 });
  }
  return E && w && (Gi(), Os(E), Os(ut), ut.addEventListener("click", (e) => {
    e.target === ut && to();
  }), (wo = a.getElementById("homeNav")) == null || wo.addEventListener("click", () => {
    Ae && Wo();
  }), (Ws = a.querySelector(".bottomNav")) == null || Ws.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + ap + "</button>"), (nn = c("dashEditNav")) == null || nn.addEventListener("click", () => or(!An)), E.addEventListener("pointerdown", bo), new ResizeObserver(() => {
    h.classList.contains("tfDash") && fs() !== ps ? cn() : _n();
  }).observe(E), window.addEventListener("resize", _n, { passive: !0 }), ut.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.stopPropagation(), H != null && H.details ? Gr(!1) : to());
  })), J(), {
    update(e) {
      if (!w) return;
      const n = !Object.keys(x).length;
      x = e || {};
      for (const i in x) i.startsWith("light.") && x[i].state === "on" && za(i) && S(i, Wa(x[i]));
      n ? sn() : cn();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      Mo = !0, Ze == null || Ze.destroy(), Ze = null, qt == null || qt.forEach((e) => e.destroy()), qt = null;
    },
    resume() {
      Mo = !1, !(!w || !(E != null && E.querySelector("[data-tf]"))) && (lt.isConnected && yr(lt.style.order), Xo());
    }
  };
}
const Hh = "0.62.0", Id = "move_assistant", Fh = "move_assistant", rp = "move_assistant_checkin_reminder";
function Oh() {
  if (document.getElementById("move-assistant-inter")) return;
  const a = document.createElement("link");
  a.id = "move-assistant-inter", a.rel = "stylesheet", a.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(a);
}
class Wh extends HTMLElement {
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
    Oh();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${zp}${jp}${Vp}</style>${Gp}`;
    const o = l.getElementById("app");
    o.style.opacity = "0";
    let c = null;
    try {
      const h = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Id
      });
      c = (h == null ? void 0 : h.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(c), this._app = pu(l, {
      data: c,
      save: (h) => this._save(h),
      fire: (h, v) => this._fire(h, v),
      ws: (h) => this._hass.callWS(h),
      subscribe: (h, v) => {
        var w, A;
        return (A = (w = this._hass) == null ? void 0 : w.connection) != null && A.subscribeMessage ? this._hass.connection.subscribeMessage(v, h) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var h, v;
        return Object.keys(((v = (h = this._hass) == null ? void 0 : h.services) == null ? void 0 : v.notify) || {}).sort();
      },
      setReminderAutomation: (h) => this._setReminderAutomation(h),
      setLight: (h) => this.classList.toggle("lightBody", h),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Ih(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), o.style.transition = "opacity .2s ease", o.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var o;
    const l = (o = this._hass) == null ? void 0 : o.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (c) => {
        var v;
        const h = JSON.stringify((c == null ? void 0 : c.value) ?? null);
        h === this._lastSaved || h === this._pendingJson || (this._lastSaved = h, (v = this._app) == null || v.applyRemoteData(c.value));
      },
      { type: "frontend/subscribe_user_data", key: Id }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Id,
          value: JSON.parse(o)
        }), this._lastSaved = o;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(l, o = {}) {
    var c, h;
    ((c = this._config) == null ? void 0 : c.events) !== !1 && ((h = this._hass) == null || h.callWS({
      type: "fire_event",
      event_type: Fh,
      event_data: { action: l, ...o }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const o = `config/automation/config/${rp}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (v) {
        if ((v == null ? void 0 : v.status_code) !== 404 && (v == null ? void 0 : v.status) !== 404) throw v;
      }
      return;
    }
    const c = (v) => `${v}:00`, h = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: rp,
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
            data: { url: h, clickAction: h }
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
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Wh), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Hh} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
